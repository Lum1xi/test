const http = require("node:http");
const { randomUUID } = require("node:crypto");
const config = require("./account-proxy.config.js");

const LOOKUP_ENDPOINT = "https://store.standoff2.com/api/v2/accounts";
const MAX_BODY_SIZE_BYTES = 16 * 1024;

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
  response.setHeader("Access-Control-Max-Age", "86400");
}

function sendJson(response, statusCode, payload) {
  setCorsHeaders(response);
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function sanitizeUid(value) {
  return String(value ?? "").replace(/\s+/g, "").trim();
}

function normalizeLanguage(value) {
  const language = String(value ?? "ru").trim().toLowerCase();

  if (language === "en" || language === "pt") {
    return language;
  }

  return "ru";
}

function getAcceptLanguage(language) {
  if (language === "en") {
    return "en-US,en;q=0.9,ru;q=0.8";
  }

  if (language === "pt") {
    return "pt-BR,pt;q=0.9,en;q=0.8,ru;q=0.7";
  }

  return "ru,uk;q=0.9,en-US;q=0.8,en;q=0.7";
}

function buildUpstreamHeaders(payload) {
  const language = normalizeLanguage(payload.language);
  const referer = config.refererByLanguage?.[language] || config.refererByLanguage?.ru || "https://store.standoff2.com/ru-RU";
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": getAcceptLanguage(language),
    "Content-Type": "application/json",
    Origin: config.proxyOrigin,
    Referer: payload.routeLocale ? `${config.proxyOrigin}/${payload.routeLocale}` : referer,
    "User-Agent": config.userAgent,
    "X-DEVICE-TYPE": String(payload.deviceType || "small_desktop"),
    "X-PLATFORM-ID": String(payload.platformId ?? 0),
    "X-TRACE-ID": randomUUID(),
    "X-USER-LANGUAGE-TAG": language,
    RCToken: String(payload.rcToken || "").trim(),
    ...config.defaultHeaders,
    ...config.extraHeaders
  };
  const forwardedCookie = process.env.SO2_ACCOUNT_PROXY_COOKIE || config.cookie;

  if (forwardedCookie) {
    headers.Cookie = forwardedCookie;
  }

  return headers;
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let totalSize = 0;

    request.on("data", (chunk) => {
      totalSize += chunk.length;

      if (totalSize > MAX_BODY_SIZE_BYTES) {
        reject(new Error("Request body is too large"));
        request.destroy();
        return;
      }

      chunks.push(chunk);
    });

    request.on("end", () => {
      try {
        const rawBody = Buffer.concat(chunks).toString("utf8");

        resolve(rawBody ? JSON.parse(rawBody) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });

    request.on("error", reject);
  });
}

async function proxyLookup(payload) {
  const response = await fetch(LOOKUP_ENDPOINT, {
    method: "POST",
    headers: buildUpstreamHeaders(payload),
    body: JSON.stringify({ uid: sanitizeUid(payload.uid) })
  });
  const rawText = await response.text();
  let data = null;

  if (rawText) {
    try {
      data = JSON.parse(rawText);
    } catch {
      data = null;
    }
  }

  return {
    ok: response.ok,
    status: response.status,
    rawText,
    payload: data
  };
}

async function handleAccountLookup(request, response) {
  let payload;

  try {
    payload = await readRequestBody(request);
  } catch (error) {
    sendJson(response, 400, {
      code: "INVALID_REQUEST_BODY",
      message: error.message
    });
    return;
  }

  const uid = sanitizeUid(payload.uid);
  const rcToken = String(payload.rcToken || "").trim();

  if (!uid) {
    sendJson(response, 400, {
      code: "UID_REQUIRED",
      message: "The uid field is required"
    });
    return;
  }

  if (!rcToken) {
    sendJson(response, 400, {
      code: "LOOKUP_TOKEN_MISSING",
      message: "Missing reCAPTCHA token"
    });
    return;
  }

  let upstream;

  try {
    upstream = await proxyLookup({ ...payload, uid, rcToken });
  } catch (error) {
    sendJson(response, 502, {
      code: "UPSTREAM_UNAVAILABLE",
      message: error.message || "Official API is unavailable"
    });
    return;
  }

  if (!upstream.ok) {
    const looksLikeHtml = /^\s*</.test(upstream.rawText || "");

    if (looksLikeHtml) {
      sendJson(response, 502, {
        code: "UPSTREAM_BLOCKED",
        message: "Official API returned a non-JSON response. If Cloudflare blocks the proxy, add a fresh Cookie value to account-proxy.config.js."
      });
      return;
    }

    sendJson(response, upstream.status === 404 ? 404 : 502, {
      code: upstream.status === 404 ? "ACCOUNT_NOT_FOUND" : String(upstream.payload?.code || "UPSTREAM_LOOKUP_FAILED"),
      message: upstream.payload?.message || "Official API rejected the lookup request"
    });
    return;
  }

  const account = upstream.payload?.data || upstream.payload;
  const normalizedAccount = {
    uid: sanitizeUid(account?.uid || uid),
    name: String(account?.name || "").trim(),
    avatar: String(account?.avatar || "").trim()
  };

  if (!normalizedAccount.uid || !normalizedAccount.name || !normalizedAccount.avatar) {
    sendJson(response, 404, {
      code: "ACCOUNT_NOT_FOUND",
      message: "Account was not found"
    });
    return;
  }

  sendJson(response, 200, {
    code: "0",
    data: normalizedAccount
  });
}

const server = http.createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 404, {
      code: "NOT_FOUND",
      message: "Route not found"
    });
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host || `${config.listenHost}:${config.listenPort}`}`);

  if (request.method === "OPTIONS") {
    setCorsHeaders(response);
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(response, 200, {
      code: "0",
      message: "ok"
    });
    return;
  }

  if (request.method === "POST" && url.pathname === "/api/accounts") {
    await handleAccountLookup(request, response);
    return;
  }

  sendJson(response, 404, {
    code: "NOT_FOUND",
    message: "Route not found"
  });
});

server.listen(config.listenPort, config.listenHost, () => {
  process.stdout.write(`Account proxy is listening on http://${config.listenHost}:${config.listenPort}\n`);
});