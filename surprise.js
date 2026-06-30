(() => {
  /* ── Storage keys ─────────────────────────────────────────────── */
  const STORAGE_KEYS = {
    cart: "standoff2.store.cart",
    language: "standoff2.store.language",
    giftRecipient: "standoff2.store.giftRecipient",
    giftSource: "standoff2.store.giftSource",
    giftSavedCart: "standoff2.store.giftSavedCart",
    giftCart: "standoff2.store.giftCart"
  };

  /* ── Navigation paths ─────────────────────────────────────────── */
  const SURPRISE_PATHS = {
    battlepass: "./surprise battle pass.html",
    gold: "./surprise gold.html",
    cart: "./surprise basket.html"
  };
  const BASE_PATHS = {
    battlepass: "./index.html",
    gold: "./gold.html",
    cart: "./basket.html"
  };
  const LEGAL_LINKS = {
    offerHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/public-offer_me_ru_2026-03-12.pdf",
    privacyHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/privacy-policy_me_ru_2026-03-12.pdf"
  };
  const BASE_BP_STOCK = 418;
  const HEADER_SCROLLED_CLASS = "ijECWB8A";
  const HEADER_SCROLL_THRESHOLD = 2;

  /* ── Product definitions (copied from basket.js) ──────────────── */
  const PRODUCT_DEFINITIONS = {
    "gold-100": {
      title: "100 Gold",
      image: "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/gold/cart/cartG100.webp",
      price: 119,
      maxCount: Infinity,
      bpUnits: 0,
      showLeftToBuy: false
    },
    "gold-500": {
      title: "500 Gold",
      image: "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/gold/cart/cartG500.webp",
      price: 499,
      originalPrice: 590,
      discountPercent: 15,
      maxCount: Infinity,
      bpUnits: 0,
      showLeftToBuy: false
    },
    "gold-1000": {
      title: "1000 Gold",
      image: "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/gold/cart/cartG1000.webp",
      price: 899,
      originalPrice: 1190,
      discountPercent: 25,
      maxCount: Infinity,
      bpUnits: 0,
      showLeftToBuy: false
    },
    "gold-3000": {
      title: "3000 Gold",
      image: "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/gold/cart/cartG3000.webp",
      price: 1999,
      originalPrice: 3640,
      discountPercent: 45,
      maxCount: Infinity,
      bpUnits: 0,
      showLeftToBuy: false
    },
    "bp-pass": {
      title: "Gold Pass",
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/bp.webp",
      price: 799,
      maxCount: 1,
      bpUnits: 0,
      showLeftToBuy: true
    },
    "bp-pass-bundle": {
      title: "Gold Pass + 10 уровней",
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/bp10_ru.webp",
      price: 1299,
      originalPrice: 1546,
      discountPercent: 16,
      maxCount: 1,
      bpUnits: 10,
      showLeftToBuy: true
    },
    "bp-level-1": {
      title: "1 уровень Battle Pass",
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/l1.webp",
      price: 89,
      maxCount: Infinity,
      bpUnits: 1,
      showLeftToBuy: true
    },
    "bp-level-10": {
      title: "10 уровней Battle Pass",
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/l10.webp",
      price: 699,
      originalPrice: 899,
      discountPercent: 22,
      maxCount: Infinity,
      bpUnits: 10,
      showLeftToBuy: true
    },
    "bp-level-25": {
      title: "25 уровней Battle Pass",
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/l25.webp",
      price: 1599,
      originalPrice: 2221,
      discountPercent: 28,
      maxCount: Infinity,
      bpUnits: 25,
      showLeftToBuy: true
    },
    "bp-level-75": {
      title: "75 уровней Battle Pass",
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/l75.webp",
      price: 3899,
      originalPrice: 6722,
      discountPercent: 42,
      maxCount: Infinity,
      bpUnits: 75,
      showLeftToBuy: true
    }
  };

  const CART_NOTICE_VISIBLE_CLASS = "KTu5s9ZM";
  const CART_NOTICE_DURATION_MS = 1000;
  const CHECKOUT_LOADING_DELAY_MS = 700;
  const CHECKOUT_NOTIFICATION_DURATION_MS = 5000;
  const DIFFERENT_ID_WARNING_DURATION_MS = 10000;
  const CHECKOUT_NOTIFICATION_TRANSITION_MS = 420;
  const PAYMENT_STATUS_PENDING_DELAY_MS = 2000;
  const ACCOUNT_LOOKUP_PROXY_URL = "http://127.0.0.1:8787/api/accounts";
  const ACCOUNT_LOOKUP_PROXY_PORT = 8787;
  const ACCOUNT_LOOKUP_TIMEOUT_MS = 15000;
  const ACCOUNT_LOOKUP_SITE_KEY = "6Lcwe3gmAAAAAJcqHVT174aMRLqzxqfqfRNR7Ycn";
  const DEFAULT_RECIPIENT_AVATAR = "http://melbicom.avatars.cdn.boltgaming.io/x64/_de/_default_1_33";
  const GIFT_LOOKUP_IMAGE = "https://web-static.cdn.boltgaming.io/store2/properties/images/gift/giftImageNew.webp";
  const GIFT_HELP_IMAGE = "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/uid/hintID.webp";
  const PAYMENT_STATUS_LOGO = "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/logo.webp";
  const GIFT_CHECKOUT_COPY = {
    warningTitle: "Обратите внимание:",
    differentIdWarning: "Вы перешли на оформление покупки для другого ID:",
    paymentProcessing: "Ожидание оплаты",
    paymentPendingInfo: "Обычно всё проходит моментально, но иногда операция немного задерживается банком.\n\nЕсли покупка не появилась в течение 24 часов, обратитесь в службу поддержки игры",
    paymentSuccessful: "ОПЛАТА ПРОШЛА УСПЕШНО!",
    giftPaymentSuccessful: "ОПЛАТА ПРОШЛА УСПЕШНО!",
    transactionNumber: "Номер транзакции",
    receiptSent: "Мы отправили чек вам на почту",
    giftReceiptSent: "Мы отправили чек вам на почту",
    refreshPage: "Обновить",
    backToStore: "Вернуться в магазин",
    publicOfferLabel: "Публичная оферта",
    privacyPolicyLabel: "Политика конфиденциальности",
    conjunction: "и",
    recaptchaNoticePrefix: "This site is protected by reCAPTCHA Enterprise and the Google",
    recaptchaNoticeSuffix: "apply."
  };
  const REMOVE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 12"><path d="M.75 10.5c0 .825.675 1.5 1.5 1.5h4.5c.825 0 1.5-.675 1.5-1.5V3H.75zM8.25.75h-1.5L6.218.218A.76.76 0 0 0 5.692 0H3.309a.76.76 0 0 0-.525.218L2.25.75H.75A.75.75 0 0 0 0 1.5c0 .413.338.75.75.75h7.5c.412 0 .75-.337.75-.75a.75.75 0 0 0-.75-.75"></path></svg>';
  const WARNING_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="BkKYFHcE"><circle cx="12" cy="12" r="10" fill="#F8A834"></circle><path fill="#0E1014" d="M11 6.5h2v7h-2zm0 8.75h2v2h-2z"></path></svg>';
  const CLOSE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="#fff" d="M1.75 1.75a.854.854 0 0 1 1.209 0l13.29 13.291a.855.855 0 0 1-1.207 1.209L1.75 2.959a.854.854 0 0 1 0-1.209"></path><path fill="#fff" d="M16.25 1.75a.854.854 0 0 0-1.209 0L1.751 15.042a.854.854 0 0 0 1.208 1.208l13.29-13.291a.854.854 0 0 0 0-1.209"></path></svg>';
  const NAV_CLOSE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" class="app-surprise-close-icon"><path fill="currentColor" d="M1.75 1.75a.854.854 0 0 1 1.209 0l13.29 13.291a.855.855 0 0 1-1.207 1.209L1.75 2.959a.854.854 0 0 1 0-1.209"></path><path fill="currentColor" d="M16.25 1.75a.854.854 0 0 0-1.209 0L1.751 15.042a.854.854 0 0 0 1.208 1.208l13.29-13.291a.854.854 0 0 0 0-1.209"></path></svg>';
  const PAYMENT_SUCCESS_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="app-payment-status-icon"><circle cx="32" cy="32" r="26" fill="#43CA67"></circle><path fill="#0E1014" d="m27.823 41.514-9.018-9.027 3.872-3.872 5.146 5.145 13.5-13.5 3.872 3.872z"></path></svg>';
  const ACCOUNT_LOOKUP_ERROR_COPY = {
    notFound: "Игрок не найден",
    serviceUnavailable: "Не получилось найти аккаунт. Проверьте, правильно ли указан ID."
  };
  const ACCOUNT_LOOKUP_LANGUAGE_CONFIG = {
    ru: { routeLocale: "ru-RU" },
    en: { routeLocale: "en-RU" },
    pt: { routeLocale: "pt-BR" }
  };
  const accountLookupCache = new Map();
  let accountLookupScriptPromise = null;

  function ensureSharedSurpriseStyles() {
    if (document.getElementById("surprise-runtime-styles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "surprise-runtime-styles";
    style.textContent = `
      .IfqLgxnG,
      .IfqLgxnG *,
      .X8Rt15ci,
      .fI1FyIbI,
      [data-product-id] [data-card-action],
      [data-product-id] .UhqtQZoq,
      [data-product-id] .kagYWg0G,
      [data-product-id] .AqZJ4HVM {
        -webkit-user-select: none;
        user-select: none;
      }

      [data-cart-view="checkout"] .vMpeGj8U {
        color: rgba(255, 255, 255, 0.92) !important;
        transition: color 160ms ease;
      }

      [data-cart-view="checkout"] .vMpeGj8U:hover {
        color: rgba(255, 255, 255, 0.64) !important;
      }

      [data-surprise-empty-state] {
        width: 100%;
      }

      [data-surprise-empty-state][hidden] {
        display: none !important;
      }

      [data-payment-status-overlay][hidden] {
        display: none !important;
      }

      [data-surprise-recipient-help-open][hidden] {
        display: none !important;
      }

      [data-surprise-recipient-found][hidden],
      [data-surprise-recipient-loading][hidden] {
        display: none !important;
      }

      [data-surprise-recipient-loading],
      [data-surprise-recipient-found],
      [data-surprise-recipient-modal] .JK0tawE3.knimwCCa,
      [data-surprise-recipient-modal] .Z7y7qbot {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        align-self: stretch;
      }

      [data-surprise-recipient-loading] .cjjK74UX,
      [data-surprise-recipient-found] .cjjK74UX {
        width: 100%;
        align-items: stretch;
      }

      [data-surprise-recipient-loading] .gepQJevF.kxvHEpBw,
      [data-surprise-recipient-found] .gepQJevF.kxvHEpBw,
      [data-surprise-recipient-loading] ._k_ejJ8r,
      [data-surprise-recipient-found] ._k_ejJ8r,
      [data-surprise-recipient-loading] .SvBse0wZ,
      [data-surprise-recipient-found] .SvBse0wZ {
        min-width: 0;
      }

      [data-surprise-recipient-loading] .SvBse0wZ,
      [data-surprise-recipient-found] .SvBse0wZ {
        flex: 1 1 auto;
      }

      [data-surprise-recipient-loading] .FvXL3T03,
      [data-surprise-recipient-loading] .nBK_VWkI,
      [data-surprise-recipient-found] .FvXL3T03,
      [data-surprise-recipient-found] .nBK_VWkI {
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      [data-surprise-recipient-found] [data-surprise-recipient-apply] {
        width: 100%;
      }

      .hzCfzFL2 {
        overflow: hidden;
      }

      .hzCfzFL2 .EmogxHVl,
      .sdrmxeK9 .EmogxHVl {
        pointer-events: none;
      }

      .hzCfzFL2 .ZzuZorLj,
      .sdrmxeK9 .ZzuZorLj {
        position: relative;
        z-index: 1;
        overflow: hidden;
      }

      .app-surprise-header-side {
        display: flex;
        align-items: center;
      }

      .app-surprise-close-button {
        color: var(--white_color_50);
      }

      .app-surprise-close-button:hover {
        color: var(--white_color_80);
      }

      .app-surprise-close-button:active,
      .app-surprise-close-button:focus-visible {
        color: var(--white_color_100);
      }

      .app-surprise-close-icon {
        display: block;
        width: 24px;
        height: 24px;
      }

      [data-surprise-empty-state].yQp3xDdx {
        width: 100%;
        max-width: none;
        margin: 0;
        min-height: 383px;
        padding: 0 32px;
      }

      [data-surprise-empty-state] .YPbAq1Zb {
        max-width: 300px;
        font-size: 16px;
        line-height: normal;
        letter-spacing: normal;
      }

      [data-surprise-recipient-modal] .app-gift-modal-stage,
      [data-surprise-recipient-modal] .app-gift-screen {
        overflow: visible;
      }

      [data-surprise-recipient-modal] .Z5FPd0mM,
      [data-surprise-recipient-modal] .m3DYkRY4 {
        overflow: visible;
      }

      [data-surprise-recipient-modal] .app-gift-recipient,
      [data-surprise-recipient-modal] .JK0tawE3 {
        overflow: visible;
      }

      [data-surprise-recipient-modal] .ThJqf7Lg {
        width: 100%;
        max-height: calc(100dvh - 132px);
        overflow-y: auto;
        overflow-x: hidden;
        padding-right: 2px;
      }

      [data-surprise-recipient-modal] {
        background-color: rgba(14, 16, 20, 0.88);
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
      }

      [data-surprise-recipient-modal] .Z5FPd0mM {
        position: relative;
        border: 0;
        background: var(--popup_background);
        box-shadow: var(--popup_shadow);
      }

      [data-surprise-recipient-modal] .Z5FPd0mM::before {
        content: none;
      }

      .app-payment-status-overlay {
        position: fixed;
        inset: 0;
        z-index: calc(var(--z_modal_layer) + 2);
        overflow-y: auto;
        background:
          radial-gradient(circle at 82% 44%, rgba(248, 168, 52, 0.14) 0%, rgba(248, 168, 52, 0) 36%),
          #0e1014;
      }

      .app-payment-status-screen.Wr2R1dhb {
        position: relative;
        min-height: 100vh;
        padding: 24px 24px 28px;
        gap: 0;
        overflow: hidden;
        align-items: stretch;
      }

      .app-payment-status-screen .mj0zGoGF {
        justify-content: center;
        margin-bottom: 18px;
      }

      .app-payment-status-content {
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 430px;
        margin: 0 auto;
      }

      .app-payment-status-art {
        pointer-events: none;
      }

      .app-payment-status-logo {
        display: flex;
        justify-content: center;
      }

      .app-payment-status-logo img {
        height: 42px;
      }

      .app-payment-status-content .Ba6L_N9F {
        width: 100%;
        max-width: 430px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        z-index: 1;
        height: auto;
      }

      .app-payment-status-content .EioqRk4p {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 32px;
        padding: 48px 28px;
        border-radius: 24px;
        background: rgba(0, 0, 0, 0.17);
        -webkit-backdrop-filter: blur(6.849999904632568px);
        backdrop-filter: blur(6.849999904632568px);
      }

      .app-payment-status-content .eukVv9lb {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
      }

      .app-payment-status-content .JmVtaL7l {
        font-size: 18px;
        font-style: normal;
        font-weight: 765;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      .app-payment-status-content .Ou4Ev7zb {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.16px;
      }

      .app-payment-status-content .xT_YAdsx {
        width: 100%;
        margin: 0;
        border: none;
        border-top: 1px dashed var(--white_color_20);
      }

      .app-payment-status-content .U7Vl3ek4 {
        margin-top: 20px;
        padding-top: 0;
      }

      .app-payment-status-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
      }

      .app-payment-status-button {
        width: 100%;
        min-height: 56px;
      }

      .app-payment-status-button .NE2K7NGD {
        color: rgba(255, 255, 255, 0.94) !important;
        font-size: 18px;
        letter-spacing: 0.4px;
      }

      [data-payment-status-head][data-status="pending"] + [data-payment-status-details] .Ou4Ev7zb {
        margin-top: 30px;
      }

      [data-payment-status-head][data-status="succeeded"] {
        gap: 32px;
        padding-top: 0;
      }

      [data-payment-status-head][data-status="succeeded"] + [data-payment-status-details] {
        width: 100%;
      }

      [data-payment-status-head][data-status="succeeded"] + [data-payment-status-details] .R9VGdXSy {
        gap: 8px;
        margin-bottom: 16px;
      }

      [data-payment-status-head][data-status="succeeded"] + [data-payment-status-details] .xT_YAdsx {
        margin: 0;
        border-top: 1px dashed var(--white_color_20);
      }

      [data-payment-status-head][data-status="succeeded"] + [data-payment-status-details] .Ou4Ev7zb {
        margin-top: 30px;
      }

      .app-payment-status-spinner {
        display: block;
        color: rgba(255, 255, 255, 0.92);
        animation: app-payment-status-spin 0.95s linear infinite;
      }

      .app-payment-status-spinner circle {
        stroke: currentColor;
        stroke-linecap: round;
      }

      .app-payment-status-icon {
        display: block;
        width: 48px;
        height: 48px;
      }

      @keyframes app-payment-status-spin {
        to {
          transform: rotate(360deg);
        }
      }

      @media (min-width: 980px) {
        .app-payment-status-screen.Wr2R1dhb {
          padding-top: 40px;
        }

        .app-payment-status-screen .mj0zGoGF {
          margin-bottom: 26px;
        }
      }
    `;

    document.head.append(style);
  }

  ensureSharedSurpriseStyles();

  /* ── Storage helpers ──────────────────────────────────────────── */
  function readStorageValue(key) {
    try { return window.localStorage.getItem(key); } catch { return null; }
  }
  function readStorageJson(key, fallback) {
    const v = readStorageValue(key);
    if (!v) return fallback;
    try { return JSON.parse(v); } catch { return fallback; }
  }
  function writeStorageValue(key, value) {
    try { window.localStorage.setItem(key, value); } catch {}
  }
  function writeStorageJson(key, value) {
    writeStorageValue(key, JSON.stringify(value));
  }
  function removeStorageValue(key) {
    try { window.localStorage.removeItem(key); } catch {}
  }

  function syncGiftCartSession() {
    const storedGiftCart = readStorageValue(STORAGE_KEYS.giftCart);
    const savedBaseCart = readStorageValue(STORAGE_KEYS.giftSavedCart);

    if (storedGiftCart !== null) {
      writeStorageValue(STORAGE_KEYS.cart, storedGiftCart);
      return;
    }

    const legacyGiftCart = readStorageValue(STORAGE_KEYS.cart);

    if (legacyGiftCart !== null && savedBaseCart !== null) {
      writeStorageValue(STORAGE_KEYS.giftCart, legacyGiftCart);
      return;
    }

    if (savedBaseCart !== null) {
      removeStorageValue(STORAGE_KEYS.cart);
    }
  }

  function getProductDefinition(productId) {
    return PRODUCT_DEFINITIONS[productId] || null;
  }

  /* ── Data helpers ─────────────────────────────────────────────── */
  function normalizeCountValue(value) {
    const n = Number.parseInt(String(value ?? "0"), 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }

  function getProductCountLimit(productId) {
    const def = PRODUCT_DEFINITIONS[productId];
    return def && Number.isFinite(def.maxCount) ? def.maxCount : Infinity;
  }

  function clampProductCount(productId, value) {
    return Math.min(normalizeCountValue(value), getProductCountLimit(productId));
  }

  function normalizeCartState(value) {
    if (!value || typeof value !== "object") return {};
    return Object.entries(value).reduce((r, [pid, cnt]) => {
      const n = clampProductCount(pid, cnt);
      if (pid && n > 0) r[pid] = n;
      return r;
    }, {});
  }

  function getTotalCartItems(state) {
    return Object.values(state).reduce((s, c) => s + normalizeCountValue(c), 0);
  }

  function getEntriesFromState(state = cartState) {
    return Object.entries(state).filter(([productId, count]) => normalizeCountValue(count) > 0 && getProductDefinition(productId));
  }

  function getRemainingBpStock(state = cartState) {
    const usedUnits = getEntriesFromState(state).reduce((total, [productId, count]) => {
      return total + ((getProductDefinition(productId)?.bpUnits || 0) * count);
    }, 0);

    return Math.max(0, BASE_BP_STOCK - usedUnits);
  }

  function sanitizeUserId(v) { return String(v ?? "").replace(/\s+/g, "").trim(); }
  function normalizeUserEntry(entry) {
    if (!entry) return null;
    const id = sanitizeUserId(entry.id), name = String(entry.name ?? "").trim(), avatar = String(entry.avatar ?? "").trim();
    return (id && name && avatar) ? { id, name, avatar } : null;
  }

  function normalizeLookupLanguage(language) {
    return ACCOUNT_LOOKUP_LANGUAGE_CONFIG[language] ? language : "ru";
  }

  function getDefaultAccountLookupProxyUrls() {
    const urls = [];
    const { protocol, origin, hostname, port } = window.location;

    if (protocol === "http:" || protocol === "https:") {
      urls.push(new URL("/api/accounts", origin).toString());

      if (hostname && port !== String(ACCOUNT_LOOKUP_PROXY_PORT)) {
        urls.push(`${protocol}//${hostname}:${ACCOUNT_LOOKUP_PROXY_PORT}/api/accounts`);
      }
    }

    urls.push(ACCOUNT_LOOKUP_PROXY_URL);
    return [...new Set(urls.filter(Boolean))];
  }

  function getAccountLookupConfig() {
    const runtimeConfig = window.__SO2AccountLookupConfig__ || {};
    const configuredProxyUrls = Array.isArray(runtimeConfig.proxyUrls)
      ? runtimeConfig.proxyUrls.map((value) => String(value || "").trim().replace(/\/+$/, "")).filter(Boolean)
      : [];
    const configuredProxyUrl = String(runtimeConfig.proxyUrl || "").trim().replace(/\/+$/, "");
    const proxyUrls = [...new Set([
      ...configuredProxyUrls,
      ...(configuredProxyUrl ? [configuredProxyUrl] : []),
      ...getDefaultAccountLookupProxyUrls()
    ])];
    const siteKey = String(runtimeConfig.siteKey || ACCOUNT_LOOKUP_SITE_KEY).trim();
    const timeoutMs = Number(runtimeConfig.timeoutMs);

    return {
      proxyUrl: proxyUrls[0] || "",
      proxyUrls,
      siteKey,
      timeoutMs: Number.isFinite(timeoutMs) && timeoutMs > 0 ? timeoutMs : ACCOUNT_LOOKUP_TIMEOUT_MS
    };
  }

  function getAccountLookupLanguageTag() {
    return normalizeLookupLanguage(readStorageValue(STORAGE_KEYS.language));
  }

  function getAccountLookupRouteLocale() {
    return ACCOUNT_LOOKUP_LANGUAGE_CONFIG[getAccountLookupLanguageTag()]?.routeLocale || "ru-RU";
  }

  function getAccountLookupDeviceType() {
    return window.innerWidth < 980 ? "mobile" : "small_desktop";
  }

  function loadRecaptchaEnterprise() {
    const { siteKey } = getAccountLookupConfig();

    if (!siteKey) {
      return Promise.reject(new Error("reCAPTCHA site key is not configured"));
    }

    if (window.grecaptcha?.enterprise) {
      return Promise.resolve(window.grecaptcha.enterprise);
    }

    if (accountLookupScriptPromise) {
      return accountLookupScriptPromise;
    }

    accountLookupScriptPromise = new Promise((resolve, reject) => {
      const finishResolve = () => {
        if (!window.grecaptcha?.enterprise) {
          accountLookupScriptPromise = null;
          reject(new Error("reCAPTCHA Enterprise did not initialize"));
          return;
        }

        resolve(window.grecaptcha.enterprise);
      };

      const existingScript = document.querySelector("script[data-account-lookup-recaptcha]");

      if (existingScript) {
        if (window.grecaptcha?.enterprise) {
          finishResolve();
          return;
        }

        existingScript.addEventListener("load", finishResolve, { once: true });
        existingScript.addEventListener("error", () => {
          accountLookupScriptPromise = null;
          reject(new Error("Failed to load reCAPTCHA Enterprise"));
        }, { once: true });
        return;
      }

      const script = document.createElement("script");

      script.src = `https://www.google.com/recaptcha/enterprise.js?render=${encodeURIComponent(siteKey)}`;
      script.async = true;
      script.defer = true;
      script.dataset.accountLookupRecaptcha = "true";
      script.addEventListener("load", finishResolve, { once: true });
      script.addEventListener("error", () => {
        accountLookupScriptPromise = null;
        reject(new Error("Failed to load reCAPTCHA Enterprise"));
      }, { once: true });
      document.head.append(script);
    });

    return accountLookupScriptPromise;
  }

  async function requestRecaptchaEnterpriseToken(action = "login") {
    const { siteKey } = getAccountLookupConfig();
    const enterprise = await loadRecaptchaEnterprise();

    return new Promise((resolve, reject) => {
      enterprise.ready(() => {
        enterprise.execute(siteKey, { action }).then(resolve).catch(reject);
      });
    });
  }

  function isAccountLookupNotFoundError(error) {
    const code = String(error?.code || "").toUpperCase();

    return code === "ACCOUNT_NOT_FOUND";
  }

  function getAccountLookupErrorMessage(error) {
    return isAccountLookupNotFoundError(error) ? ACCOUNT_LOOKUP_ERROR_COPY.notFound : ACCOUNT_LOOKUP_ERROR_COPY.serviceUnavailable;
  }

  async function lookupAccountById(userId) {
    const normalizedId = sanitizeUserId(userId);
    const { proxyUrl, proxyUrls, timeoutMs } = getAccountLookupConfig();

    if (!normalizedId) {
      return null;
    }

    if (accountLookupCache.has(normalizedId)) {
      return { ...accountLookupCache.get(normalizedId) };
    }

    if (!proxyUrl) {
      throw {
        status: 503,
        code: "LOOKUP_PROXY_MISSING",
        message: "Account lookup proxy is not configured"
      };
    }

    const rcToken = await requestRecaptchaEnterpriseToken("login");
    let lastProxyError = null;

    for (const candidateProxyUrl of proxyUrls) {
      const controller = typeof AbortController === "function" ? new AbortController() : null;
      const timeoutId = controller ? window.setTimeout(() => controller.abort(), timeoutMs) : 0;

      try {
        const response = await fetch(candidateProxyUrl, {
          method: "POST",
          mode: "cors",
          cache: "no-store",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uid: normalizedId,
            rcToken,
            language: getAccountLookupLanguageTag(),
            routeLocale: getAccountLookupRouteLocale(),
            deviceType: getAccountLookupDeviceType(),
            platformId: 0
          }),
          signal: controller?.signal
        });
        const payload = await response.json().catch(() => null);
        const hasProxyPayload = Boolean(payload && typeof payload === "object" && (payload.code || payload.data));

        if (!response.ok) {
          if (!hasProxyPayload) {
            lastProxyError = {
              status: response.status || 503,
              code: "LOOKUP_PROXY_ROUTE_MISSING",
              message: "Account lookup proxy route is unavailable",
              proxyUrl: candidateProxyUrl
            };
            continue;
          }

          throw {
            status: response.status,
            code: payload?.code || "LOOKUP_FAILED",
            message: payload?.message || "Account lookup failed"
          };
        }

        const normalizedUser = normalizeUserEntry({
          id: payload?.data?.uid || normalizedId,
          name: payload?.data?.name,
          avatar: payload?.data?.avatar
        });

        if (!normalizedUser) {
          if (!hasProxyPayload) {
            lastProxyError = {
              status: response.status || 502,
              code: "LOOKUP_PROXY_INVALID_RESPONSE",
              message: "Account lookup proxy returned an unexpected payload",
              proxyUrl: candidateProxyUrl
            };
            continue;
          }

          throw {
            status: 404,
            code: "ACCOUNT_NOT_FOUND",
            message: "Account was not found"
          };
        }

        accountLookupCache.set(normalizedId, normalizedUser);
        return { ...normalizedUser };
      } catch (error) {
        if (error?.name === "AbortError") {
          lastProxyError = {
            status: 504,
            code: "LOOKUP_TIMEOUT",
            message: "Account lookup timed out",
            proxyUrl: candidateProxyUrl
          };
          continue;
        }

        if (error instanceof TypeError || (!error?.status && !error?.code)) {
          lastProxyError = {
            status: 503,
            code: "LOOKUP_PROXY_UNREACHABLE",
            message: "Account lookup proxy is unreachable",
            proxyUrl: candidateProxyUrl
          };
          continue;
        }

        throw error;
      } finally {
        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }
      }
    }

    throw lastProxyError || {
      status: 503,
      code: "LOOKUP_PROXY_UNREACHABLE",
      message: "Account lookup proxy is unreachable"
    };
  }

  function setPopupOpenState(popupElement, isOpen) {
    if (!popupElement) {
      return;
    }

    popupElement.hidden = !isOpen;
    popupElement.setAttribute("aria-hidden", String(!isOpen));

    if (isOpen) {
      popupElement.style.animation = "none";
      void popupElement.offsetHeight;
      popupElement.style.removeProperty("animation");
    }

    const popupSurface = popupElement.firstElementChild;

    if (!(popupSurface instanceof HTMLElement)) {
      return;
    }

    if (isOpen) {
      popupSurface.style.animation = "none";
      void popupSurface.offsetHeight;
      popupSurface.style.removeProperty("animation");

      if (popupSurface.classList.contains("Z5FPd0mM")) {
        popupSurface.style.removeProperty("transform");
      }

      return;
    }

    popupSurface.style.removeProperty("transform");
  }

  function setScrollLocked(locked) {
    document.documentElement.style.overflow = locked ? "hidden" : "auto";
  }

  function revealSurpriseCartPage() {
    document.documentElement.removeAttribute("data-surprise-cart-hydrating");
  }

  function revealSurprisePage() {
    document.documentElement.removeAttribute("data-surprise-page-hydrating");
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("ru-RU").format(Math.max(0, Math.round(value))).replace(/\u00A0/g, " ");
  }
  function formatCurrency(value) { return formatNumber(value) + " \u20BD"; }
  function formatDiscount(value) { return "-" + formatNumber(value) + " \u20BD"; }

  function getItemCountNoun(count) {
    const l2 = count % 100, l1 = count % 10;
    if (l2 >= 11 && l2 <= 14) return "товаров";
    if (l1 === 1) return "товар";
    if (l1 >= 2 && l1 <= 4) return "товара";
    return "товаров";
  }

  /* ── Navigation helpers ───────────────────────────────────────── */
  function getCurrentPageType() {
    const f = decodeURIComponent(window.location.pathname.split("/").pop() || "").toLowerCase();
    if (f.includes("basket")) return "cart";
    if (f.includes("gold")) return "gold";
    return "battlepass";
  }

  function restoreSavedCart() {
    const saved = readStorageValue(STORAGE_KEYS.giftSavedCart);

    if (saved === null) {
      return;
    }

    if (saved) {
      writeStorageValue(STORAGE_KEYS.cart, saved);
    } else {
      removeStorageValue(STORAGE_KEYS.cart);
    }

    removeStorageValue(STORAGE_KEYS.giftSavedCart);
  }

  function navigateToSurprise(pageType) {
    const p = SURPRISE_PATHS[pageType];
    if (p) {
      if (pageType === "battlepass" || pageType === "gold") {
        writeStorageValue(STORAGE_KEYS.giftSource, pageType);
      }

      window.location.href = p;
    }
  }

  function navigateToBasePage(pageType) {
    const p = BASE_PATHS[pageType];
    if (p) { restoreSavedCart(); writeStorageValue(STORAGE_KEYS.giftSource, pageType); window.location.href = p; }
  }

  function getPreferredGiftCatalogPageType() {
    const source = readStorageValue(STORAGE_KEYS.giftSource);
    return source === "gold" ? "gold" : "battlepass";
  }

  /* ── State ────────────────────────────────────────────────────── */
  const currentPageType = getCurrentPageType();
  let recipient = normalizeUserEntry(readStorageJson(STORAGE_KEYS.giftRecipient, null));
  if (recipient) {
    accountLookupCache.set(recipient.id, recipient);
  }
  syncGiftCartSession();
  let cartState = normalizeCartState(readStorageJson(STORAGE_KEYS.giftCart, readStorageJson(STORAGE_KEYS.cart, {})));

  function persistCartState() {
    if (Object.keys(cartState).length === 0) {
      removeStorageValue(STORAGE_KEYS.cart);
      removeStorageValue(STORAGE_KEYS.giftCart);
      return;
    }

    const serializedCart = JSON.stringify(cartState);

    writeStorageValue(STORAGE_KEYS.cart, serializedCart);
    writeStorageValue(STORAGE_KEYS.giftCart, serializedCart);
  }

  function setProductCount(productId, rawCount) {
    const count = clampProductCount(productId, Math.max(0, rawCount));
    if (count > 0) { cartState[productId] = count; }
    else { delete cartState[productId]; }
    persistCartState();
  }

  function ensureSurpriseHeaderNavigation() {
    const headerMenu = document.querySelector(".Mrvmdg9y.xvdinikP");
    const nav = headerMenu?.querySelector(".BJuG1PY5.qb3JIBCc");

    if (!headerMenu || !nav) {
      return null;
    }

    const navLinksMarkup = [
      {
        pageType: "battlepass",
        label: "BATTLE PASS",
        isCart: false
      },
      {
        pageType: "gold",
        label: "GOLD",
        isCart: false
      },
      {
        pageType: "cart",
        label: "Cart",
        isCart: true
      }
    ].map((item) => {
      const isActive = item.pageType === currentPageType;
      const activeClass = isActive ? " y3GrUBsU" : "";
      const ariaCurrent = isActive ? ' aria-current="page"' : "";

      if (item.isCart) {
        return [
          `<a class="Wpu5eVfc Q2Jo56if${activeClass}" href="${SURPRISE_PATHS[item.pageType]}" data-nav-link="${item.pageType}" aria-label="${item.label}"${ariaCurrent}>`,
          '  <div class="Q2Jo56if">',
          '    <img class="wVIyg1Xu" alt="browser" src="https://web-static.cdn.boltgaming.io/store2/navbarIcons/CartIcon.svg">',
          '    <div class="UkLmxpEv eJop6HKi DWqFOF0H" data-cart-badge hidden>0</div>',
          '  </div>',
          '</a>'
        ].join("\n");
      }

      return `<a class="Wpu5eVfc Q2Jo56if${activeClass}" href="${SURPRISE_PATHS[item.pageType]}" data-nav-link="${item.pageType}"${ariaCurrent}>${item.label}</a>`;
    }).join("\n");

    nav.innerHTML = navLinksMarkup;

    let overlay = headerMenu.querySelector("._XTYen5w");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "_XTYen5w";
      overlay.dataset.surpriseHeaderOverlay = "true";
    }

    if (overlay.parentElement !== headerMenu) {
      headerMenu.append(overlay);
    }

    let side = headerMenu.querySelector("[data-surprise-header-side]");
    if (!side) {
      side = document.createElement("div");
      side.className = "ZXGNIV7a app-surprise-header-side";
      side.dataset.surpriseHeaderSide = "true";
    }

    side.innerHTML = [
      '<button type="button" class="p1KrGb3a app-nav-icon-button app-surprise-close-button" data-surprise-close aria-label="Close gift mode">',
      `  <span class="Q2Jo56if">${NAV_CLOSE_ICON}</span>`,
      '</button>'
    ].join("\n");

    if (side.parentElement !== headerMenu) {
      headerMenu.append(side);
    }

    return {
      nav,
      links: Array.from(nav.querySelectorAll("[data-nav-link]")),
      closeButton: side.querySelector("[data-surprise-close]")
    };
  }

  function setupHeaderScroll() {
    const headerContainer = document.querySelector(".DrnsdBhA");
    const logo = document.querySelector(".iTphCjeG");

    if (!headerContainer) {
      return;
    }

    const targets = [headerContainer, logo].filter(Boolean);
    let scheduled = false;

    const syncScrolledState = () => {
      const isScrolled = window.scrollY > HEADER_SCROLL_THRESHOLD;
      targets.forEach((element) => element.classList.toggle(HEADER_SCROLLED_CLASS, isScrolled));
      scheduled = false;
    };

    const onScroll = () => {
      if (scheduled) {
        return;
      }

      scheduled = true;
      window.requestAnimationFrame(syncScrolledState);
    };

    syncScrolledState();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ── DOM references ───────────────────────────────────────────── */
  const surpriseHeader = ensureSurpriseHeaderNavigation();
  const headerNav = surpriseHeader?.nav || null;
  const headerLinks = surpriseHeader?.links || [];
  const closeButton = surpriseHeader?.closeButton || null;
  const pageRecipientCards = Array.from(document.querySelectorAll(".hzCfzFL2 .cjjK74UX.ZzuZorLj, .sdrmxeK9 .cjjK74UX.ZzuZorLj"));
  const recipientCard = pageRecipientCards[0] || null;
  const recipientResetButtons = pageRecipientCards
    .map((card) => card.querySelector("button"))
    .filter((button) => button instanceof HTMLElement);
  const logoBlock = document.querySelector(".gepQJevF.at26SedK.iTphCjeG") || document.querySelector(".at26SedK");
  const defaultRecipientAvatar = recipientCard?.querySelector(".VNznsh1o")?.getAttribute("src") || DEFAULT_RECIPIENT_AVATAR;

  /* ── Cart badge (same approach as app.js: uses data-cart-badge) ─ */
  function syncCartBadge() {
    const total = getTotalCartItems(cartState);
    document.querySelectorAll("[data-cart-badge]").forEach((badge) => {
      badge.hidden = total < 1;
      badge.textContent = String(total);
    });
  }

  /* ── Populate recipient card ──────────────────────────────────── */
  document.body.dataset.page = currentPageType;
  document.body.dataset.giftMode = "surprise";

  function updateRecipientCard(user = recipient) {
    if (!pageRecipientCards.length) {
      return;
    }

    const activeRecipient = normalizeUserEntry(user);

    pageRecipientCards.forEach((card) => {
      const avatar = card.querySelector(".VNznsh1o");
      const id = card.querySelector(".FvXL3T03");
      const name = card.querySelector(".nBK_VWkI");

      if (!avatar || !id || !name) {
        return;
      }

      if (!activeRecipient) {
        avatar.src = defaultRecipientAvatar;
        avatar.alt = "user avatar";
        id.textContent = "ID";
        name.textContent = "";
        return;
      }

      avatar.src = activeRecipient.avatar;
      avatar.alt = (activeRecipient.name || "") + " avatar";
      id.textContent = "ID " + activeRecipient.id;
      name.textContent = activeRecipient.name;
    });
  }

  updateRecipientCard();
  revealSurprisePage();

  function ensureRecipientChangeModal() {
    let modal = document.querySelector("[data-surprise-recipient-modal]");

    if (modal) {
      return modal;
    }

    modal = document.createElement("div");
    modal.className = "zAbKTShu hsEG_cWq";
    modal.dataset.giftModal = "true";
    modal.dataset.surpriseRecipientModal = "true";
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = [
      '<div class="app-gift-modal-stage">',
      '  <div class="app-gift-screen app-gift-screen-active app-gift-recipient">',
      '    <div class="Z5FPd0mM no2STBRf XovmNKyJ app-gift-recipient" role="dialog" aria-modal="true" aria-labelledby="surprise-recipient-title">',
      '      <div class="DLqvjymJ"><div></div><button type="button" class="p1KrGb3a EZUDc50g LrAJcY3r Uoxfx_Np" data-surprise-recipient-close><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="#fff" d="M1.75 1.75a.854.854 0 0 1 1.209 0l13.29 13.291a.855.855 0 0 1-1.207 1.209L1.75 2.959a.854.854 0 0 1 0-1.209"></path><path fill="#fff" d="M16.25 1.75a.854.854 0 0 0-1.209 0L1.751 15.042a.854.854 0 0 0 1.208 1.208l13.29-13.291a.854.854 0 0 0 0-1.209"></path></svg></button></div>',
      '      <div class="m3DYkRY4 no2STBRf">',
      '        <div class="OPlcbUWN F_GdC3qL VXPe6irw OZpbqN3j ThJqf7Lg" style="gap: 12px;">',
      '          <img class="gkuIo3uG" src="' + GIFT_LOOKUP_IMAGE + '" alt="">',
      '          <div class="JK0tawE3 knimwCCa">',
      '            <form class="Z7y7qbot" data-gift-form novalidate>',
      '              <h3 class="QGx8_2K6 TeC3q6Mx" id="surprise-recipient-title">Введите ID получателя</h3>',
      '              <div class="omJ936GU">',
      '                <div class="YfjH2i5L" data-surprise-recipient-input-container>',
      '                  <input class="Euw1rUj0" placeholder="Например: 012345678" autocomplete="off" inputmode="numeric" value="" data-surprise-recipient-input>',
      '                </div>',
      '                <p class="MasSLdKj" data-gift-error hidden>Игрок не найден</p>',
      '              </div>',
      '              <button type="submit" class="p1KrGb3a dVZlJ3Vu LrAJcY3r JXxuvUFY" data-surprise-recipient-search disabled>Искать</button>',
      '            </form>',
      '            <div class="Z7y7qbot" data-surprise-recipient-loading hidden>',
      '              <h3 class="QGx8_2K6 TeC3q6Mx">Найти игрока</h3>',
      '              <div class="cjjK74UX"><div class="gepQJevF kxvHEpBw"><div role="button" tabindex="0" class="UhqtQZoq"></div><div class="_k_ejJ8r"><div class="rGkMKa_9"><div class="EF8NZxHb OMeIxbHF app-loading-avatar" style="width: 48px; height: 48px;"><div class="R5wuj1zi YUbnVnw5"></div></div></div><div class="SvBse0wZ"><p class="FvXL3T03" data-surprise-recipient-loading-id>ID</p><p class="nBK_VWkI">Поиск ...</p></div></div></div></div></div>',
      '            </div>',
      '            <div class="Z7y7qbot" data-surprise-recipient-found hidden>',
      '              <h3 class="QGx8_2K6 TeC3q6Mx">Аккаунт игрока найден</h3>',
      '              <div class="cjjK74UX"><div class="gepQJevF kxvHEpBw"><div role="button" tabindex="0" class="UhqtQZoq"></div><div class="_k_ejJ8r"><div class="rGkMKa_9"><div class="EF8NZxHb OMeIxbHF" style="width: 48px; height: 48px;"><img class="VNznsh1o" src="' + DEFAULT_RECIPIENT_AVATAR + '" alt="user avatar" data-surprise-recipient-avatar></div></div><div class="SvBse0wZ"><p class="FvXL3T03" data-surprise-recipient-id>ID</p><p class="nBK_VWkI" data-surprise-recipient-name></p></div></div></div>',
      '                <div class="b9W5I7Us"><button type="button" class="p1KrGb3a EZUDc50g LrAJcY3r lsZHwOJw" data-surprise-recipient-reset><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" class="VykBBEw3"><path fill="#fff" d="M1.75 1.75a.854.854 0 0 1 1.209 0l13.29 13.291a.855.855 0 0 1-1.207 1.209L1.75 2.959a.854.854 0 0 1 0-1.209"></path><path fill="#fff" d="M16.25 1.75a.854.854 0 0 0-1.209 0L1.751 15.042a.854.854 0 0 0 1.208 1.208l13.29-13.291a.854.854 0 0 0 0-1.209"></path></svg></button></div>',
      '              </div>',
      '              <button type="button" class="p1KrGb3a dVZlJ3Vu LrAJcY3r JXxuvUFY app-button-condensed" data-surprise-recipient-apply><span>Выбрать подарки</span></button>',
      '            </div>',
      '            <button type="button" class="p1KrGb3a I99moJsv LrAJcY3r JXxuvUFY" data-surprise-recipient-help-open>Как узнать ID?</button>',
      '            <div class="XJQTerSG" data-gift-help-panel hidden>',
      '              <p class="esM0EnBE">Откройте Standoff 2. ID находится в левом верхнем углу главного экрана, рядом с аватаркой.</p>',
      '              <img class="_2VBz6gl0" src="' + GIFT_HELP_IMAGE + '" alt="infoImg">',
      '              <button type="button" class="p1KrGb3a I99moJsv LrAJcY3r gkuIo3uG" data-surprise-recipient-help-close>Скрыть инструкцию</button>',
      '            </div>',
      '          </div>',
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("");

    document.body.append(modal);
    return modal;
  }

  function setupRecipientChangeModal() {
    const modal = ensureRecipientChangeModal();
    const form = modal.querySelector("[data-gift-form]");
    const input = modal.querySelector("[data-surprise-recipient-input]");
    const inputContainer = modal.querySelector("[data-surprise-recipient-input-container]");
    const error = modal.querySelector("[data-gift-error]");
    const searchButton = modal.querySelector("[data-surprise-recipient-search]");
    const loadingPanel = modal.querySelector("[data-surprise-recipient-loading]");
    const loadingId = modal.querySelector("[data-surprise-recipient-loading-id]");
    const foundPanel = modal.querySelector("[data-surprise-recipient-found]");
    const foundAvatar = modal.querySelector("[data-surprise-recipient-avatar]");
    const foundId = modal.querySelector("[data-surprise-recipient-id]");
    const foundName = modal.querySelector("[data-surprise-recipient-name]");
    const resetButton = modal.querySelector("[data-surprise-recipient-reset]");
    const applyButton = modal.querySelector("[data-surprise-recipient-apply]");
    const helpOpenButton = modal.querySelector("[data-surprise-recipient-help-open]");
    const helpPanel = modal.querySelector("[data-gift-help-panel]");
    const helpCloseButton = modal.querySelector("[data-surprise-recipient-help-close]");
    const closeButton = modal.querySelector("[data-surprise-recipient-close]");

    if (!form || !input || !inputContainer || !error || !searchButton || !loadingPanel || !loadingId || !foundPanel || !foundAvatar || !foundId || !foundName || !resetButton || !applyButton || !helpOpenButton || !helpPanel || !helpCloseButton || !closeButton) {
      return null;
    }

    let isOpen = false;
    let lastTrigger = null;
    let activeLookupRequestId = 0;
    let activeRecipientSelection = recipient;
    let recipientHelpVisible = false;

    function setPanelVisibility(element, visible) {
      element.hidden = !visible;
      element.style.display = visible ? "" : "none";
    }

    function clearError() {
      inputContainer.classList.remove("KfSNJ33k");
      error.hidden = true;
      error.textContent = ACCOUNT_LOOKUP_ERROR_COPY.notFound;
    }

    function setActiveRecipient(user) {
      activeRecipientSelection = normalizeUserEntry(user);
      foundAvatar.src = activeRecipientSelection?.avatar || DEFAULT_RECIPIENT_AVATAR;
      foundAvatar.alt = activeRecipientSelection ? `${activeRecipientSelection.name} avatar` : "user avatar";
      foundId.textContent = activeRecipientSelection ? `ID ${activeRecipientSelection.id}` : "ID";
      foundName.textContent = activeRecipientSelection?.name || "";
    }

    function setHelpPanelVisible(visible, options = {}) {
      const { focusButton = false } = options;
      const showOpenButton = !visible && !form.hidden && form.style.display !== "none";

      recipientHelpVisible = Boolean(visible);
      setPanelVisibility(helpPanel, recipientHelpVisible);
      helpOpenButton.hidden = !showOpenButton;
      helpOpenButton.style.display = showOpenButton ? "" : "none";

      if (!focusButton) {
        return;
      }

      window.requestAnimationFrame(() => {
        if (recipientHelpVisible) {
          helpCloseButton.focus();
          return;
        }

        helpOpenButton.focus();
      });
    }

    function showError(message) {
      inputContainer.classList.add("KfSNJ33k");
      error.hidden = false;
      error.textContent = message;
    }

    function updateSearchButton() {
      searchButton.disabled = input.value.trim().length < 1;
    }

    function showRecipientView(viewName, options = {}) {
      const { focus = false } = options;
      const isFormView = viewName === "form";
      const isLoadingView = viewName === "loading";
      const isFoundView = viewName === "found";

      form.hidden = !isFormView;
      form.style.display = isFormView ? "" : "none";
      setPanelVisibility(loadingPanel, isLoadingView);
      setPanelVisibility(foundPanel, isFoundView);
      helpPanel.hidden = !recipientHelpVisible;
      helpPanel.style.display = recipientHelpVisible ? "" : "none";
      helpOpenButton.hidden = recipientHelpVisible || !isFormView;
      helpOpenButton.style.display = recipientHelpVisible || !isFormView ? "none" : "";

      if (!focus) {
        return;
      }

      window.requestAnimationFrame(() => {
        if (isFoundView) {
          applyButton.focus();
          return;
        }

        if (isFormView) {
          input.focus();
        }
      });
    }

    function resetRecipientState(options = {}) {
      const { keepValue = false } = options;

      activeLookupRequestId += 1;
      clearError();
      recipientHelpVisible = false;
      setHelpPanelVisible(false);

      if (!keepValue) {
        input.value = "";
      }

      loadingId.textContent = "ID";
      setActiveRecipient(null);
      showRecipientView("form");
      updateSearchButton();
    }

    function openModal(trigger) {
      isOpen = true;
      lastTrigger = trigger || document.activeElement;
      resetRecipientState();
      setPopupOpenState(modal, true);
      setScrollLocked(true);

      window.requestAnimationFrame(() => {
        input.focus();
      });
    }

    function closeModal(options = {}) {
      const { restoreFocus = true } = options;

      if (!isOpen) {
        return;
      }

      activeLookupRequestId += 1;
      isOpen = false;
      setPopupOpenState(modal, false);
      setScrollLocked(false);
      resetRecipientState();

      if (restoreFocus && lastTrigger && typeof lastTrigger.focus === "function") {
        lastTrigger.focus();
      }
    }

    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D+/g, "");
      clearError();
      updateSearchButton();
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const nextUserId = input.value.trim();

      if (!nextUserId) {
        updateSearchButton();
        return;
      }

      const requestId = ++activeLookupRequestId;

      clearError();
      loadingId.textContent = "ID " + nextUserId;
      setActiveRecipient(null);
      showRecipientView("loading");

      try {
        const matchedUser = await lookupAccountById(nextUserId);

        if (!isOpen || requestId !== activeLookupRequestId || !matchedUser) {
          return;
        }

        setActiveRecipient(matchedUser);
        showRecipientView("found", { focus: true });
      } catch (error) {
        if (!isOpen || requestId !== activeLookupRequestId) {
          return;
        }

        showRecipientView("form");
        showError(getAccountLookupErrorMessage(error));
      }
    });

    resetButton.addEventListener("click", (event) => {
      event.preventDefault();
      clearError();
      setActiveRecipient(null);
      showRecipientView("form");
      window.requestAnimationFrame(() => {
        input.focus();
        input.select();
      });
    });

    applyButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (!activeRecipientSelection) {
        return;
      }

      recipient = normalizeUserEntry(activeRecipientSelection);
      writeStorageJson(STORAGE_KEYS.giftRecipient, recipient);
      updateRecipientCard(recipient);
      closeModal({ restoreFocus: false });
    });

    helpOpenButton.addEventListener("click", (event) => {
      event.preventDefault();
      setHelpPanelVisible(true);
    });

    helpCloseButton.addEventListener("click", (event) => {
      event.preventDefault();
      setHelpPanelVisible(false, { focusButton: true });
    });

    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      closeModal();
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    });

    return {
      open: openModal
    };
  }

  const recipientChangeModal = setupRecipientChangeModal();

  /* ── Navigation links → surprise pages ────────────────────────── */
  headerLinks.forEach((link) => {
    const pt = link.dataset.navLink;
    if (!pt || !SURPRISE_PATHS[pt]) return;
    link.setAttribute("href", SURPRISE_PATHS[pt]);
    link.addEventListener("click", (e) => { e.preventDefault(); if (pt !== currentPageType) navigateToSurprise(pt); });
  });

  syncCartBadge();
  setupHeaderScroll();

  closeButton?.addEventListener("click", (e) => { e.preventDefault(); navigateToBasePage(currentPageType); });
  recipientResetButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      recipientChangeModal?.open(button);
    });
  });

  /* ══════════════════════════════════════════════════════════════════
     PRODUCT CARD PAGES (gold / battlepass)
     — Copied from app.js setupProductCards() + syncCardState()
     ══════════════════════════════════════════════════════════════════ */
  if (currentPageType === "gold" || currentPageType === "battlepass") {
    const noticeTimers = new Map();

    function getDirectChildByClass(parent, cls) {
      return Array.from(parent.children).find((el) => el.classList.contains(cls)) || null;
    }

    function createFullCardOverlay() {
      const el = document.createElement("div");
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-disabled", "false");
      el.setAttribute("aria-hidden", "false");
      el.dataset.cardAction = "add";
      el.className = "UhqtQZoq";
      return el;
    }

    function createHalfOverlay(side, opts) {
      const disabled = opts?.disabled || false;
      const el = document.createElement("div");
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-disabled", String(disabled));
      el.className = "kagYWg0G " + (side === "left" ? "bHaMknQz" : "o5f7_qIm");
      if (!disabled) el.dataset.cardAction = (side === "left" ? "decrement" : "increment");
      return el;
    }

    function renderPriceButton(price) {
      return '<span class="gotuJr3w"></span>' +
        '<button type="button" class="p1KrGb3a dVZlJ3Vu AiZQK0bH Yk74vMHL adX7e0nU" data-card-action="add">' +
        '<div class="OPlcbUWN F_GdC3qL OZpbqN3j NE2K7NGD">' + price + '</div></button>';
    }

    function renderCounter(count, opts) {
      const dis = opts?.incrementDisabled ? " disabled" : "";
      return '<span class="gotuJr3w"></span>' +
        '<div class="UDnuy5ts NDsiIDKM zWXsExLd">' +
        '<button type="button" class="crFgKmrM EdC20Ny3 NDsiIDKM" data-card-action="decrement"><div></div></button>' +
        '<div class="X4GWOKdN rgYtKpKv NDsiIDKM" data-card-count-value>' + count + '</div>' +
        '<button type="button" class="crFgKmrM oGQOeXJZ NDsiIDKM" data-card-action="increment"' + dis + '><div></div></button></div>';
    }

    function showCartNotice(card) {
      const notice = card.querySelector(".IfqLgxnG");
      const noticeText = card.querySelector(".X8Rt15ci");
      const noticeImage = card.querySelector(".fI1FyIbI");
      if (!notice) return;
      window.clearTimeout(noticeTimers.get(notice));
      notice.classList.remove(CART_NOTICE_VISIBLE_CLASS);
      noticeText?.classList.remove(CART_NOTICE_VISIBLE_CLASS);
      noticeImage?.classList.remove(CART_NOTICE_VISIBLE_CLASS);
      void notice.offsetWidth;
      notice.classList.add(CART_NOTICE_VISIBLE_CLASS);
      noticeText?.classList.add(CART_NOTICE_VISIBLE_CLASS);
      noticeImage?.classList.add(CART_NOTICE_VISIBLE_CLASS);
      const tid = window.setTimeout(() => {
        notice.classList.remove(CART_NOTICE_VISIBLE_CLASS);
        noticeText?.classList.remove(CART_NOTICE_VISIBLE_CLASS);
        noticeImage?.classList.remove(CART_NOTICE_VISIBLE_CLASS);
      }, CART_NOTICE_DURATION_MS);
      noticeTimers.set(notice, tid);
    }

    function syncCardState(card, options) {
      const count = Number(card.dataset.count || "0");
      const price = card.dataset.price || "";
      const maxCount = getProductCountLimit(card.dataset.productId);
      const actionContainer = card.querySelector(".AqZJ4HVM");
      const contentWrapper = getDirectChildByClass(card, "cxa9uePM");
      const fullOverlay = getDirectChildByClass(card, "UhqtQZoq");
      const cardVisual = contentWrapper ? getDirectChildByClass(contentWrapper, "GfEQhLTi") : null;
      if (!actionContainer || !contentWrapper || !cardVisual) return;

      actionContainer.innerHTML = count > 0
        ? renderCounter(count, { incrementDisabled: count >= maxCount })
        : renderPriceButton(price);

      Array.from(contentWrapper.children)
        .filter((el) => el.classList.contains("kagYWg0G"))
        .forEach((el) => el.remove());

      if (count > 0) {
        if (fullOverlay) fullOverlay.remove();
        contentWrapper.prepend(createHalfOverlay("left"));
        if (count < maxCount) contentWrapper.append(createHalfOverlay("right"));
      } else if (!fullOverlay) {
        card.insertBefore(createFullCardOverlay(), contentWrapper);
      }

      if (options?.showNotice) showCartNotice(card);
    }

    /* Patch card HTML: add missing data attributes */
    const cards = Array.from(document.querySelectorAll("[data-product-id]"));
    cards.forEach((card) => {
      const pid = card.dataset.productId;
      if (!pid) return;

      /* Patch existing full overlay to be actionable */
      const existingOverlay = getDirectChildByClass(card, "UhqtQZoq");
      if (existingOverlay && !existingOverlay.dataset.cardAction) {
        existingOverlay.dataset.cardAction = "add";
      }

      /* Read price from the existing button text */
      const priceBtn = card.querySelector(".AqZJ4HVM button");
      const priceText = priceBtn?.textContent?.trim() || "";
      card.dataset.price = priceText;
      card.dataset.defaultCount = "0";

      /* Set initial count from cartState */
      const initialCount = clampProductCount(pid, cartState[pid] || 0);
      card.dataset.count = String(initialCount);

      syncCardState(card);
    });

    const updateCardCount = (card, nextCount) => {
      const prev = normalizeCountValue(card.dataset.count || 0);
      const next = clampProductCount(card.dataset.productId, Math.max(0, nextCount));
      card.dataset.count = String(next);
      setProductCount(card.dataset.productId, next);
      syncCardState(card, { showNotice: next > prev });
      syncCartBadge();
    };

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-card-action]");
      if (!trigger) return;
      const card = trigger.closest("[data-product-id]");
      if (!card) return;
      event.preventDefault();
      event.stopPropagation();
      const action = trigger.dataset.cardAction;
      const cur = normalizeCountValue(card.dataset.count || 0);
      if (action === "add" || action === "increment") updateCardCount(card, cur + 1);
      if (action === "decrement") updateCardCount(card, cur - 1);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const trigger = event.target.closest("[data-card-action]");
      if (!trigger || trigger.tagName === "BUTTON" || !trigger.closest("[data-product-id]")) return;
      event.preventDefault();
      const card = trigger.closest("[data-product-id]");
      const action = trigger.dataset.cardAction;
      const cur = normalizeCountValue(card.dataset.count || 0);
      if (action === "add" || action === "increment") updateCardCount(card, cur + 1);
      if (action === "decrement") updateCardCount(card, cur - 1);
    });
  }

  /* ══════════════════════════════════════════════════════════════════
     CART PAGE (surprise basket)
     — Copied from basket.js renderCartPage() logic
     ══════════════════════════════════════════════════════════════════ */
  if (currentPageType === "cart") {
    const checkoutView = document.querySelector('[data-cart-view="checkout"]');
    const appRoot = document.querySelector("#root > .app");
    const cartShell = document.querySelector("#root > .app > .GceCE6fm.lsp0K2MI") || document.querySelector("#root .GceCE6fm.lsp0K2MI");
    const mainContent = cartShell?.querySelector(".OPlcbUWN.pz7n1D_0.zfI4wZt_");
    const leftColumn = mainContent?.querySelector(".OPlcbUWN.OZpbqN3j.zasQGlOi");
    const summaryColumn = mainContent?.querySelector(".OPlcbUWN.OZpbqN3j.NPoX5pGl");
    const itemsContainer = mainContent?.querySelector(".GoSkiXRM");
    const discountValueEl = summaryColumn?.querySelector(".JW8mUTbA");
    const totalValueEl = summaryColumn?.querySelector(".XNSv2cJ9");
    const actionButtons = Array.from(summaryColumn?.querySelectorAll(".qNnZ48LH button") || []);
    const checkoutItems = checkoutView?.querySelector("[data-checkout-items]");
    const checkoutLoadingState = checkoutView?.querySelector('[data-checkout-account-state="loading"]');
    const checkoutLoadingId = checkoutView?.querySelector("[data-checkout-loading-id]");
    const checkoutLoadingName = checkoutView?.querySelector("[data-checkout-loading-name]");
    const checkoutResolvedState = checkoutView?.querySelector('[data-checkout-account-state="resolved"]');
    const checkoutUserAvatar = checkoutView?.querySelector("[data-checkout-user-avatar]");
    const checkoutUserId = checkoutView?.querySelector("[data-checkout-user-id]");
    const checkoutUserName = checkoutView?.querySelector("[data-checkout-user-name]");
    const checkoutNotificationView = checkoutView?.querySelector("[data-checkout-notification-view]");
    const checkoutNotifications = checkoutView?.querySelector("[data-checkout-notifications]");
    const checkoutEmailInput = checkoutView?.querySelector("[data-checkout-email]");
    const checkoutCountLabel = checkoutView?.querySelector("[data-checkout-count-label]");
    const checkoutTotalValue = checkoutView?.querySelector("[data-checkout-total-value]");
    const checkoutBackButton = checkoutView?.querySelector("[data-checkout-back]");
    const checkoutCloseButton = checkoutView?.querySelector("[data-checkout-close]");
    const checkoutForm = checkoutView?.querySelector("[data-checkout-form]");
    let checkoutLoadingTimerId = 0;
    let activeCheckoutSelection = {};
    let paymentStatusOverlayRefs = null;
    let paymentStatusTimerId = 0;

    if (checkoutView && appRoot && checkoutView.parentElement !== appRoot) {
      appRoot.append(checkoutView);
    }

    if (!cartShell || !mainContent || !leftColumn || !summaryColumn || !itemsContainer || !checkoutView || !checkoutItems) {
      revealSurpriseCartPage();
      return;
    }

    function setScrollLocked(locked) {
      document.documentElement.style.overflow = locked ? "hidden" : "auto";
    }

    function setPopupOpenState(popupElement, isOpen) {
      if (!popupElement) {
        return;
      }

      popupElement.hidden = !isOpen;
      popupElement.setAttribute("aria-hidden", String(!isOpen));

      if (isOpen) {
        popupElement.style.animation = "none";
        void popupElement.offsetHeight;
        popupElement.style.removeProperty("animation");
      }

      const popupSurface = popupElement.firstElementChild;

      if (!(popupSurface instanceof HTMLElement)) {
        return;
      }

      if (isOpen) {
        popupSurface.style.animation = "none";
        void popupSurface.offsetHeight;
        popupSurface.style.removeProperty("animation");

        if (popupSurface.classList.contains("Z5FPd0mM")) {
          popupSurface.style.removeProperty("transform");
        }

        return;
      }

      popupSurface.style.removeProperty("transform");
    }

    function ensureDeleteConfirmModal() {
      let modal = document.querySelector("[data-delete-confirm-modal]");

      if (modal) {
        return modal;
      }

      modal = document.createElement("div");
      modal.className = "zAbKTShu hsEG_cWq";
      modal.dataset.deleteConfirmModal = "true";
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      modal.innerHTML = [
        '<div class="Z5FPd0mM app-delete-modal" role="dialog" aria-modal="true" aria-labelledby="delete-confirm-title">',
        '  <div class="DLqvjymJ"><div></div></div>',
        '  <div class="m3DYkRY4 undefined"><div class="KcE671Hr rdXM8EY8 CD_FDy0c"><div class="vzXawkHz"><svg xmlns="http://www.w3.org/2000/svg" width="116" height="117" fill="none" class="C7kZjFH4"><g clip-path="url(#CancelOutlineIcon_svg__a)"><path fill="#565656" d="M67.134 42.55 58 51.685l-9.135-9.135a4.813 4.813 0 0 0-6.815 0 4.813 4.813 0 0 0 0 6.815l9.135 9.135-9.135 9.135a4.813 4.813 0 0 0 0 6.815 4.813 4.813 0 0 0 6.815 0L58 65.315l9.135 9.135a4.813 4.813 0 0 0 6.815 0 4.813 4.813 0 0 0 0-6.815L64.814 58.5l9.135-9.135a4.813 4.813 0 0 0 0-6.815c-1.885-1.837-4.978-1.837-6.815 0M58 10.167c-26.728 0-48.333 21.605-48.333 48.333s21.605 48.333 48.333 48.333c26.729 0 48.334-21.605 48.334-48.333S84.728 10.167 57.999 10.167m0 87c-21.315 0-38.666-17.352-38.666-38.667s17.351-38.667 38.666-38.667S96.666 37.185 96.666 58.5 79.314 97.167 57.999 97.167"></path></g><defs><clipPath id="CancelOutlineIcon_svg__a"><path fill="#fff" d="M0 .5h116v116H0z"></path></clipPath></defs></svg></div><div class="vdsjdoFQ"><h3 class="yrKtepWA" id="delete-confirm-title" data-delete-confirm-title>Удалить товар из корзины?</h3><p class="c5gwzr3C" data-delete-confirm-text>Он пропадет из списка покупок. Вы сможете добавить его снова, если передумаете.</p></div><div class="lCmKZZYo rdXM8EY8"><button type="button" class="p1KrGb3a I99moJsv LrAJcY3r PQK2z0hH undefined" data-delete-confirm-accept><div class="OPlcbUWN F_GdC3qL OZpbqN3j NE2K7NGD" data-delete-confirm-accept-label>Удалить</div></button><button type="button" class="p1KrGb3a dVZlJ3Vu LrAJcY3r PQK2z0hH undefined" data-delete-confirm-close><div class="OPlcbUWN F_GdC3qL OZpbqN3j NE2K7NGD" data-delete-confirm-close-label>Отмена</div></button></div></div></div>',
        '</div>'
      ].join("");

      document.body.append(modal);
      return modal;
    }

    const deleteConfirmModal = ensureDeleteConfirmModal();
    const deleteConfirmAcceptButton = deleteConfirmModal?.querySelector("[data-delete-confirm-accept]");
    const deleteConfirmCloseButton = deleteConfirmModal?.querySelector("[data-delete-confirm-close]");
    const hasDeleteConfirm = Boolean(deleteConfirmModal && deleteConfirmAcceptButton && deleteConfirmCloseButton);
    let deleteConfirmOpen = false;
    let pendingRemovalProductId = "";
    let lastRemoveTrigger = null;

    function setElementVisibility(element, visible) {
      if (!element) {
        return;
      }

      element.hidden = !visible;
      element.style.display = visible ? "" : "none";
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function removeCheckoutNotification(node) {
      if (!node || !node.parentNode) {
        return;
      }

      if (node._dismissTimerId) {
        window.clearTimeout(node._dismissTimerId);
        node._dismissTimerId = 0;
      }

      node.classList.remove("jAi4WZZv", "AAAC1sfj", "Te9EWc4J", "s58QPlqt");
      node.classList.add("Te9EWc4J", "ThiKboOM");

      window.requestAnimationFrame(() => {
        node.classList.add("s58QPlqt");
      });

      window.setTimeout(() => {
        node.remove();

        if (checkoutNotifications && checkoutNotifications.children.length === 0 && checkoutNotificationView) {
          checkoutNotificationView.hidden = true;
        }
      }, CHECKOUT_NOTIFICATION_TRANSITION_MS);
    }

    function getCheckoutNotificationConfig(status) {
      if (status === "warning") {
        return {
          statusClass: "bhEYfvnH",
          icon: WARNING_ICON
        };
      }

      return {
        statusClass: "gX0pMvYB",
        icon: WARNING_ICON
      };
    }

    function pushCheckoutNotification(options) {
      if (!checkoutNotificationView || !checkoutNotifications) {
        return;
      }

      const { title, text = "", status = "warning", dismissible = false, durationMs = CHECKOUT_NOTIFICATION_DURATION_MS } = options;
      const { statusClass, icon } = getCheckoutNotificationConfig(status);
      const notification = document.createElement("div");

      notification.className = `qb2RBHsM ${statusClass} jAi4WZZv ThiKboOM`;
      notification.innerHTML = [
        `<div class="T51ZVLxp ${statusClass}">${icon}</div>`,
        `<div class="KByTPzLG ${statusClass}">`,
        `  <h3>${escapeHtml(title)}</h3>`,
        text ? `  <p>${escapeHtml(text)}</p>` : "",
        '</div>',
        dismissible ? `
          <button type="button" class="p1KrGb3a EZUDc50g LrAJcY3r DSP_uvbV" aria-label="Close notification">
            ${CLOSE_ICON}
          </button>
        ` : ""
      ].join("\n");

      checkoutNotificationView.hidden = false;
      checkoutNotifications.append(notification);

      notification.querySelector(".DSP_uvbV")?.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        removeCheckoutNotification(notification);
      });

      window.requestAnimationFrame(() => {
        notification.classList.add("AAAC1sfj");
      });

      notification._dismissTimerId = window.setTimeout(() => {
        notification._dismissTimerId = 0;
        removeCheckoutNotification(notification);
      }, durationMs);
    }

    function showRecipientCheckoutWarning() {
      if (!recipient?.id) {
        return;
      }

      pushCheckoutNotification({
        title: GIFT_CHECKOUT_COPY.warningTitle,
        text: `${GIFT_CHECKOUT_COPY.differentIdWarning} ${recipient.id}`,
        status: "warning",
        dismissible: true,
        durationMs: DIFFERENT_ID_WARNING_DURATION_MS
      });
    }

    function clearPaymentStatusTimer() {
      if (!paymentStatusTimerId) {
        return;
      }

      window.clearTimeout(paymentStatusTimerId);
      paymentStatusTimerId = 0;
    }

    function formatPaymentStatusMultilineText(value) {
      return escapeHtml(value).replace(/\n/g, "<br>");
    }

    function renderPaymentStatusLegal() {
      const conjunction = escapeHtml(GIFT_CHECKOUT_COPY.conjunction);

      return [
        `<p class="J6snVAZE"><a href="${escapeHtml(LEGAL_LINKS.offerHref)}" target="_blank" rel="noopener noreferrer" class="Hx4Ri1ei">${escapeHtml(GIFT_CHECKOUT_COPY.publicOfferLabel)}</a> ${conjunction} <a href="${escapeHtml(LEGAL_LINKS.privacyHref)}" target="_blank" rel="noopener noreferrer" class="Hx4Ri1ei">${escapeHtml(GIFT_CHECKOUT_COPY.privacyPolicyLabel)}</a></p>`,
        "<br>",
        `<p class="J6snVAZE">${escapeHtml(GIFT_CHECKOUT_COPY.recaptchaNoticePrefix)} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> ${conjunction} <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> ${escapeHtml(GIFT_CHECKOUT_COPY.recaptchaNoticeSuffix)}</p>`
      ].join("");
    }

    function createPaymentStatusButton(label, onClick) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "p1KrGb3a dVZlJ3Vu LrAJcY3r app-payment-status-button";
      button.innerHTML = `<div class="OPlcbUWN F_GdC3qL OZpbqN3j NE2K7NGD">${escapeHtml(label)}</div>`;
      button.addEventListener("click", onClick);
      return button;
    }

    function setPaymentStatusGlow(status) {
      const refs = ensurePaymentStatusOverlay();
      const glowClass = status === "succeeded" ? "RnGjZvYG" : "uBsKo2XU";

      [refs.primaryGlow, refs.secondaryGlow].forEach((glow) => {
        glow.classList.remove("uBsKo2XU", "RnGjZvYG", "EMcigV1f");
        glow.classList.add(glowClass);
      });
    }

    function ensurePaymentStatusOverlay() {
      if (paymentStatusOverlayRefs) {
        return paymentStatusOverlayRefs;
      }

      const overlay = document.createElement("div");
      overlay.className = "app-payment-status-overlay Vyh5aMED";
      overlay.dataset.paymentStatusOverlay = "true";
      overlay.hidden = true;
      overlay.innerHTML = [
        '<div class="Wr2R1dhb app-payment-status-screen">',
        '  <div class="ozDgz4Pw app-payment-status-art" aria-hidden="true">',
        '    <div class="Hn1wSMpy">',
        '      <div class="fq09x76Q" data-payment-status-glow="primary"></div>',
        '      <div class="fq09x76Q puhYS9El" data-payment-status-glow="secondary"></div>',
        '    </div>',
        '  </div>',
        '  <header class="mj0zGoGF">',
        '    <a href="#" class="bRv36WNU app-payment-status-logo" data-payment-status-logo>',
        `      <img src="${PAYMENT_STATUS_LOGO}" alt="STANDOFF 2">`,
        '    </a>',
        '  </header>',
        '  <div class="_xNs8rAe app-payment-status-content">',
        '    <div class="Ba6L_N9F">',
        '      <div class="EioqRk4p">',
        '        <div class="eukVv9lb" data-payment-status-head></div>',
        '        <div data-payment-status-details></div>',
        '        <div class="U7Vl3ek4" data-payment-status-legal></div>',
        '      </div>',
        '    </div>',
        '    <div class="df9K3v9j q8srF1Ir">',
        '      <div class="app-payment-status-actions" data-payment-status-actions></div>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join("\n");

      document.body.append(overlay);

      paymentStatusOverlayRefs = {
        overlay,
        head: overlay.querySelector("[data-payment-status-head]"),
        details: overlay.querySelector("[data-payment-status-details]"),
        legal: overlay.querySelector("[data-payment-status-legal]"),
        actions: overlay.querySelector("[data-payment-status-actions]"),
        logo: overlay.querySelector("[data-payment-status-logo]"),
        primaryGlow: overlay.querySelector('[data-payment-status-glow="primary"]'),
        secondaryGlow: overlay.querySelector('[data-payment-status-glow="secondary"]')
      };

      return paymentStatusOverlayRefs;
    }

    function setPaymentStatusOverlayVisible(visible) {
      const refs = ensurePaymentStatusOverlay();

      refs.overlay.hidden = !visible;
      setScrollLocked(visible);
    }

    function renderPaymentStatusState(options) {
      const {
        status,
        title,
        receiptText,
        transactionNumber,
        onPrimaryAction,
        onLogoAction
      } = options;
      const refs = ensurePaymentStatusOverlay();

      refs.head.dataset.status = status;

      refs.head.innerHTML = status === "pending"
        ? [
          '<svg viewBox="0 0 48 48" class="F4IVBuCn app-payment-status-spinner" aria-hidden="true"><circle cx="24" cy="24" r="15.5" fill="none" stroke-width="4" stroke-dasharray="34 68"></circle></svg>',
          `<h2 class="JmVtaL7l">${escapeHtml(GIFT_CHECKOUT_COPY.paymentProcessing)}</h2>`
        ].join("")
        : [
          `<div style="width: 48px;">${PAYMENT_SUCCESS_ICON}</div>`,
          `<h2 class="JmVtaL7l">${escapeHtml(title)}</h2>`
        ].join("");

      refs.details.innerHTML = status === "pending"
        ? [
          '<hr class="xT_YAdsx">',
          `<p class="Ou4Ev7zb">${formatPaymentStatusMultilineText(GIFT_CHECKOUT_COPY.paymentPendingInfo)}</p>`
        ].join("")
        : [
          '<div class="R9VGdXSy">',
          `  <p class="HTe6PTUI">${escapeHtml(GIFT_CHECKOUT_COPY.transactionNumber)}</p>`,
          `  <p class="ddRXMzaW">${escapeHtml(transactionNumber)}</p>`,
          '</div>',
          '<hr class="xT_YAdsx">',
          `<p class="Ou4Ev7zb">${formatPaymentStatusMultilineText(receiptText)}</p>`
        ].join("\n");

      refs.legal.innerHTML = renderPaymentStatusLegal();
      refs.actions.innerHTML = "";
      refs.actions.append(createPaymentStatusButton(
        status === "pending" ? GIFT_CHECKOUT_COPY.refreshPage : GIFT_CHECKOUT_COPY.backToStore,
        onPrimaryAction
      ));

      refs.logo.onclick = (event) => {
        event.preventDefault();

        if (typeof onLogoAction === "function") {
          onLogoAction();
        }
      };

      setPaymentStatusGlow(status);
    }

    function generateTransactionNumber() {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const prefix = Array.from({ length: 2 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
      return `${prefix}_${Date.now()}${Math.floor(100 + Math.random() * 900)}`;
    }

    function showGiftCheckoutPaymentFlow() {
      if (!checkoutEmailInput?.reportValidity()) {
        return;
      }

      const transactionNumber = generateTransactionNumber();

      clearPaymentStatusTimer();
      setPaymentStatusOverlayVisible(true);

      const returnToStore = () => {
        setPaymentStatusOverlayVisible(false);
        navigateToSurprise(getPreferredGiftCatalogPageType());
      };

      const finishPayment = () => {
        clearPaymentStatusTimer();
        cartState = {};
        persistCartState();
        renderCartPage();
        openCartView();
        renderPaymentStatusState({
          status: "succeeded",
          title: GIFT_CHECKOUT_COPY.paymentSuccessful,
          receiptText: GIFT_CHECKOUT_COPY.receiptSent,
          transactionNumber,
          onPrimaryAction: returnToStore,
          onLogoAction: returnToStore
        });
      };

      renderPaymentStatusState({
        status: "pending",
        title: GIFT_CHECKOUT_COPY.paymentProcessing,
        receiptText: GIFT_CHECKOUT_COPY.paymentPendingInfo,
        transactionNumber,
        onPrimaryAction: finishPayment,
        onLogoAction: null
      });

      paymentStatusTimerId = window.setTimeout(finishPayment, PAYMENT_STATUS_PENDING_DELAY_MS);
    }

    function ensureEmptyState() {
      let emptyState = mainContent.querySelector("[data-surprise-empty-state]");

      if (!emptyState) {
        emptyState = document.createElement("div");
        emptyState.className = "yQp3xDdx";
        emptyState.dataset.surpriseEmptyState = "true";
        emptyState.dataset.cartEmpty = "true";
        emptyState.hidden = true;
        emptyState.innerHTML = [
          '<div class="jjCpAfDG" data-cart-empty-title>В корзине ничего нет</div>',
          '<div class="YPbAq1Zb" data-cart-empty-text>Все товары можно найти в каталоге. Там точно найдется что-то интересное!</div>',
          '<button type="button" class="p1KrGb3a dVZlJ3Vu LrAJcY3r ncoiSPjl" data-cart-empty-catalog>',
          '  <div class="OPlcbUWN F_GdC3qL OZpbqN3j NE2K7NGD" data-cart-empty-action>Начать покупки</div>',
          '</button>'
        ].join("");
        mainContent.append(emptyState);

        emptyState.querySelector("[data-cart-empty-catalog]")?.addEventListener("click", (event) => {
          event.preventDefault();
          navigateToSurprise(getPreferredGiftCatalogPageType());
        });
      }

      return emptyState;
    }

    const emptyState = ensureEmptyState();

    function closeDeleteConfirm(options = {}) {
      const { restoreFocus = true } = options;

      if (!hasDeleteConfirm || !deleteConfirmOpen) {
        return;
      }

      deleteConfirmOpen = false;
      pendingRemovalProductId = "";
      setPopupOpenState(deleteConfirmModal, false);
      setScrollLocked(false);

      if (restoreFocus && lastRemoveTrigger && typeof lastRemoveTrigger.focus === "function") {
        lastRemoveTrigger.focus();
      }
    }

    function openDeleteConfirm(productId, trigger) {
      if (!productId) {
        return;
      }

      if (!hasDeleteConfirm) {
        setProductCount(productId, 0);
        renderCartPage();
        return;
      }

      pendingRemovalProductId = productId;
      lastRemoveTrigger = trigger || document.activeElement;
      deleteConfirmOpen = true;
      setPopupOpenState(deleteConfirmModal, true);
      setScrollLocked(true);

      window.requestAnimationFrame(() => {
        deleteConfirmAcceptButton.focus();
      });
    }

    function renderPriceMeta(def, count) {
      if (!def.originalPrice || !def.discountPercent) {
        return "";
      }

      return '<p><span class="sSC0JdD_ J6LUMIJ3">' + formatCurrency(def.originalPrice * count) +
        '</span> <span class="zaRA0MRf">' + def.discountPercent + ' %</span></p>';
    }

    function renderCartItem(productId, count, remainingBpStock) {
      const def = getProductDefinition(productId);

      if (!def) {
        return "";
      }

      const canIncrement = count < getProductCountLimit(productId);
      const incDisabled = canIncrement ? "" : " disabled";
      const leftToBuyMarkup = def.showLeftToBuy
        ? '<p class="XlONObkb">Осталось:&nbsp;' + remainingBpStock + '</p>'
        : "";

      return [
        '<div class="GwliMIrC" data-cart-item data-product-id="' + productId + '">',
        '  <div class="PGTpjXBU">',
        '    <div class="hzlSu2an">',
        '      <div class="SNSLSTNY"><img class="p4B8x2G6" src="' + def.image + '" alt="CartItemImage"></div>',
        '      <div class="OPlcbUWN b58kMexL">',
        '        <div class="OPlcbUWN OZpbqN3j gALeVP8p">',
        '          <div class="OPlcbUWN OZpbqN3j">',
        '            <p>' + def.title + '</p>',
        '            <p class="y5r7ut4n"></p>',
        '          </div>',
        '          <button type="button" class="p1KrGb3a I99moJsv Hcd0OswB _FRUTAnv r_fh20l8" data-cart-remove data-product-id="' + productId + '">' + REMOVE_ICON + '</button>',
        '        </div>',
        '        <div class="OPlcbUWN OZpbqN3j EhztG4va">',
        '          <p class="hV_2lDdB">' + formatCurrency(def.price * count) + '</p>',
        '          ' + renderPriceMeta(def, count),
        '        </div>',
        '      </div>',
        '      <div class="OPlcbUWN OZpbqN3j Un9WsTbT" style="gap: 4px;">',
        '        <div class="OPlcbUWN OZpbqN3j RDeWLscL" style="width: auto; gap: 8px;">',
        '          <div class="UDnuy5ts dTObEO13 uG9tPRPj">',
        '            <button type="button" class="crFgKmrM EdC20Ny3 dTObEO13" data-cart-action="decrement" data-product-id="' + productId + '"><div></div></button>',
        '            <div class="X4GWOKdN rgYtKpKv dTObEO13">' + count + '</div>',
        '            <button type="button" class="crFgKmrM oGQOeXJZ dTObEO13" data-cart-action="increment" data-product-id="' + productId + '"' + incDisabled + '><div></div></button>',
        '          </div>',
        '          ' + leftToBuyMarkup,
        '          <button type="button" class="p1KrGb3a I99moJsv LrAJcY3r CkAgU2id" data-cart-line-buy><div class="OPlcbUWN F_GdC3qL OZpbqN3j NE2K7NGD">Купить</div></button>',
        '        </div>',
        '      </div>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join("\n");
    }

    function renderCheckoutItem(productId, count) {
      const def = getProductDefinition(productId);

      if (!def) {
        return "";
      }

      return [
        '<li class="A8Xf3FLc">',
        '  <div class="lPNKwGZy">',
        '    <div class="muaHK1tQ">',
        '      <div class="BvJ7lCq_"><img class="Mfq3EI1B" src="' + def.image + '" alt=""></div>',
        '      <div class="uiqDVck8">',
        '        <p class="iMONZEda">' + def.title + '</p>',
        '        <p class="Qt1ZNfZW">' + formatCurrency(def.price * count) + '</p>',
        '      </div>',
        '    </div>',
        '    <p class="FW4ICnZy">x' + count + '</p>',
        '  </div>',
        '</li>'
      ].join("");
    }

    function getCartTotals(state = cartState) {
      const entries = getEntriesFromState(state);
      let total = 0;
      let originalTotal = 0;
      let itemCount = 0;

      for (const [productId, count] of entries) {
        const def = getProductDefinition(productId);

        total += def.price * count;
        originalTotal += (def.originalPrice || def.price) * count;
        itemCount += count;
      }

      return {
        entries,
        total,
        originalTotal,
        discount: Math.max(0, originalTotal - total),
        itemCount
      };
    }

    function renderCheckoutSummary() {
      const totals = getCartTotals(activeCheckoutSelection);

      if (checkoutCountLabel) {
        checkoutCountLabel.textContent = totals.itemCount + " " + getItemCountNoun(totals.itemCount);
      }

      if (checkoutTotalValue) {
        checkoutTotalValue.textContent = formatCurrency(totals.total);
      }
    }

    function renderCheckoutItems() {
      const totals = getCartTotals(activeCheckoutSelection);
      checkoutItems.innerHTML = totals.entries.map(([productId, count]) => renderCheckoutItem(productId, count)).join("");
      renderCheckoutSummary();
    }

    function clearCheckoutLoadingTimer() {
      if (!checkoutLoadingTimerId) {
        return;
      }

      window.clearTimeout(checkoutLoadingTimerId);
      checkoutLoadingTimerId = 0;
    }

    function setCheckoutLoadingState(user) {
      clearCheckoutLoadingTimer();

      if (!user || !checkoutLoadingState || !checkoutResolvedState) {
        setElementVisibility(checkoutLoadingState, false);
        setElementVisibility(checkoutResolvedState, false);
        return;
      }

      if (checkoutLoadingId) {
        checkoutLoadingId.textContent = "ID " + user.id;
      }

      if (checkoutLoadingName) {
        checkoutLoadingName.textContent = "Поиск ...";
      }

      setElementVisibility(checkoutLoadingState, true);
      setElementVisibility(checkoutResolvedState, false);

      checkoutLoadingTimerId = window.setTimeout(() => {
        checkoutLoadingTimerId = 0;

        if (checkoutUserAvatar) {
          checkoutUserAvatar.src = user.avatar;
          checkoutUserAvatar.alt = user.name + " avatar";
        }

        if (checkoutUserId) {
          checkoutUserId.textContent = "ID " + user.id;
        }

        if (checkoutUserName) {
          checkoutUserName.textContent = user.name;
        }

        setElementVisibility(checkoutLoadingState, false);
        setElementVisibility(checkoutResolvedState, true);
      }, CHECKOUT_LOADING_DELAY_MS);
    }

    function openCartView() {
      clearCheckoutLoadingTimer();
      closeDeleteConfirm({ restoreFocus: false });
      setElementVisibility(checkoutView, false);
      setElementVisibility(cartShell, true);
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function openCheckoutView(selection = cartState) {
      const normalizedSelection = normalizeCartState(selection);

      if (Object.keys(normalizedSelection).length === 0) {
        renderCartPage();
        openCartView();
        return;
      }

      activeCheckoutSelection = normalizedSelection;
      renderCheckoutItems();
      setCheckoutLoadingState(recipient);
      closeDeleteConfirm({ restoreFocus: false });
      setElementVisibility(cartShell, false);
      setElementVisibility(checkoutView, true);
      showRecipientCheckoutWarning();
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    function renderCartPage() {
      cartState = normalizeCartState(readStorageJson(STORAGE_KEYS.giftCart, readStorageJson(STORAGE_KEYS.cart, {})));
      const totals = getCartTotals();
      const remainingBpStock = getRemainingBpStock();

      if (mainContent) {
        mainContent.dataset.cartState = totals.entries.length === 0 ? "empty" : "filled";
      }

      if (totals.entries.length === 0) {
        itemsContainer.innerHTML = "";
        setElementVisibility(leftColumn, false);
        setElementVisibility(summaryColumn, false);
        setElementVisibility(itemsContainer, false);
        setElementVisibility(emptyState, true);
      } else {
        itemsContainer.innerHTML = totals.entries.map(([productId, count]) => renderCartItem(productId, count, remainingBpStock)).join("\n");
        setElementVisibility(leftColumn, true);
        setElementVisibility(summaryColumn, true);
        setElementVisibility(itemsContainer, true);
        setElementVisibility(emptyState, false);
      }

      if (discountValueEl) {
        discountValueEl.textContent = formatDiscount(totals.discount);
      }

      if (totalValueEl) {
        totalValueEl.textContent = formatCurrency(totals.total);
      }

      if (pendingRemovalProductId && !cartState[pendingRemovalProductId]) {
        closeDeleteConfirm({ restoreFocus: false });
      }

      syncCartBadge();
    }

    itemsContainer.addEventListener("click", (event) => {
      const removeBtn = event.target.closest("[data-cart-remove]");

      if (removeBtn) {
        event.preventDefault();
        const productId = removeBtn.dataset.productId;

        if (productId) {
          openDeleteConfirm(productId, removeBtn);
        }

        return;
      }

      const actionBtn = event.target.closest("[data-cart-action]");

      if (actionBtn) {
        event.preventDefault();

        if (actionBtn.disabled) {
          return;
        }

        const productId = actionBtn.dataset.productId;
        const currentCount = clampProductCount(productId, cartState[productId] || 0);

        if (actionBtn.dataset.cartAction === "increment") {
          setProductCount(productId, currentCount + 1);
        }

        if (actionBtn.dataset.cartAction === "decrement") {
          if (currentCount <= 1) {
            openDeleteConfirm(productId, actionBtn);
            return;
          }

          setProductCount(productId, currentCount - 1);
        }

        renderCartPage();
        return;
      }

      const buyButton = event.target.closest("[data-cart-line-buy]");

      if (buyButton) {
        event.preventDefault();

        const cartItem = buyButton.closest("[data-cart-item]");
        const productId = cartItem?.dataset.productId;
        const count = clampProductCount(productId, cartState[productId] || 0);

        if (!productId || count < 1) {
          return;
        }

        openCheckoutView({ [productId]: count });
      }
    });

    actionButtons.forEach((btn) => {
      const text = btn.textContent.trim().toLowerCase();

      if (text.includes("без сообщения")) {
        btn.addEventListener("click", (event) => {
          event.preventDefault();
          openCheckoutView(cartState);
        });
        return;
      }

      if (text.includes("добавить пожелание") || text.includes("пожелание")) {
        btn.addEventListener("click", (event) => {
          event.preventDefault();
          window.location.href = "./wish.html";
        });
      }
    });

    checkoutBackButton?.addEventListener("click", (event) => {
      event.preventDefault();
      openCartView();
    });

    checkoutCloseButton?.addEventListener("click", (event) => {
      event.preventDefault();
      navigateToBasePage(currentPageType);
    });

    checkoutForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      showGiftCheckoutPaymentFlow();
    });

    if (hasDeleteConfirm) {
      deleteConfirmAcceptButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (!pendingRemovalProductId) {
          closeDeleteConfirm();
          return;
        }

        setProductCount(pendingRemovalProductId, 0);
        closeDeleteConfirm({ restoreFocus: false });
        renderCartPage();
      });

      deleteConfirmCloseButton.addEventListener("click", (event) => {
        event.preventDefault();
        closeDeleteConfirm();
      });

      deleteConfirmModal.addEventListener("click", (event) => {
        if (event.target === deleteConfirmModal) {
          closeDeleteConfirm();
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && deleteConfirmOpen) {
        closeDeleteConfirm();
      }
    });

    renderCartPage();

    if (new URLSearchParams(window.location.search).get("view") === "checkout") {
      openCheckoutView(cartState);
    }

    window.requestAnimationFrame(revealSurpriseCartPage);
  }

  /* ── Logo click → return to base page ─────────────────────────── */
  if (logoBlock) {
    logoBlock.style.cursor = "pointer";
    logoBlock.addEventListener("click", (e) => { e.preventDefault(); navigateToBasePage(currentPageType); });
  }
})();
