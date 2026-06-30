const DEFAULT_LISTEN_PORT = 8787;
const configuredPort = Number(process.env.SO2_ACCOUNT_PROXY_PORT);

module.exports = {
  listenHost: String(process.env.SO2_ACCOUNT_PROXY_HOST || "0.0.0.0").trim() || "0.0.0.0",
  listenPort: Number.isInteger(configuredPort) && configuredPort > 0 ? configuredPort : DEFAULT_LISTEN_PORT,
  proxyOrigin: "https://store.standoff2.com",
  refererByLanguage: {
    ru: "https://store.standoff2.com/ru-RU",
    en: "https://store.standoff2.com/en-RU",
    pt: "https://store.standoff2.com/pt-BR"
  },
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
  cookie: "",
  defaultHeaders: {
    "X-TEST": "C",
    "X-VARIATION": "Option_C"
  },
  extraHeaders: {}
};