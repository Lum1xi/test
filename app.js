(() => {
  const HEADER_SCROLLED_CLASS = "ijECWB8A";
  const HEADER_PROFILE_SCROLLED_CLASS = "PgGJ9C6z";
  const HEADER_SCROLL_THRESHOLD = 2;
  const MENU_OPEN_CLASS = "is-open";
  const MENU_OVERLAY_OPEN_CLASS = "zV6s1JBR";
  const CART_NOTICE_VISIBLE_CLASS = "KTu5s9ZM";
  const CART_NOTICE_DURATION_MS = 1000;
  const COUNTDOWN_UPDATE_INTERVAL_MS = 1000;
  const DEFAULT_COUNTDOWN_TARGET = "2026-06-01T19:41:00";
  const MENU_VIEWPORT_PADDING = 16;
  const MENU_VERTICAL_OFFSET = 12;
  const AUTH_TITLE_DESKTOP_CLASS = "TeC3q6Mx";
  const LOGIN_HISTORY_LIMIT = 5;
  const ACCOUNT_LOOKUP_PROXY_URL = "http://127.0.0.1:8787/api/accounts";
  const ACCOUNT_LOOKUP_PROXY_PORT = 8787;
  const ACCOUNT_LOOKUP_TIMEOUT_MS = 15000;
  const ACCOUNT_LOOKUP_SITE_KEY = "6Lcwe3gmAAAAAJcqHVT174aMRLqzxqfqfRNR7Ycn";
  const STORAGE_KEYS = {
    cart: "standoff2.store.cart",
    currentUser: "standoff2.store.currentUser",
    loginHistory: "standoff2.store.loginHistory",
    language: "standoff2.store.language",
    giftRecipient: "standoff2.store.giftRecipient",
    giftSource: "standoff2.store.giftSource",
    giftSavedCart: "standoff2.store.giftSavedCart",
    giftCart: "standoff2.store.giftCart"
  };
  const LANGUAGE_CONFIG = {
    ru: {
      code: "RUS",
      htmlLang: "ru-RU",
      routeLocale: "ru-RU",
      contentLanguage: "ru"
    },
    en: {
      code: "ENG",
      htmlLang: "en-RU",
      routeLocale: "en-RU",
      contentLanguage: "en"
    },
    pt: {
      code: "POR",
      htmlLang: "pt-BR",
      routeLocale: "pt-BR",
      contentLanguage: "en"
    }
  };
  const MAIN_BUNDLE_IMAGES = {
    ru: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/bp10_ru.webp",
    en: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/bp10_en.webp"
  };
  const PRODUCT_COUNT_LIMITS = {
    "bp-pass": 1,
    "bp-pass-bundle": 1
  };
  const UI_TEXT = {
    ru: {
      title: "Магазин | Standoff 2",
      metaDescription: "Добро пожаловать в официальный интернет-магазин Standoff 2. Здесь вы можете купить Голду, уровни Battle Pass, а также следить за специальными предложениями",
      countdownPrefix: "Закончится через:",
      countdownUnits: {
        days: "д",
        hours: "ч",
        minutes: "м"
      },
      addedToCart: "Добавлено в корзину",
      loginButton: "Войти",
      websiteLanguage: "Язык сайта",
      techSupport: "Техническая поддержка",
      install: "Установить Standoff 2",
      fanArt: "Галерея фан-арта",
      creators: "Контент-креаторы",
      merch: "Официальный мерч Standoff 2",
      socials: "Наши соцсети",
      socialTitle: "Социальные сети",
      socialLabels: {
        telegram: "Telegram-канал",
        live: "Standoff 2 Live",
        official: "Standoff 2 Official",
        esports: "Standoff 2 ESports",
        tiktok: "Аккаунт в TikTok",
        vk: "Сообщество в VK",
        discord: "Сервер Discord"
      },
      switchAccount: "Сменить аккаунт",
      languageTitle: "Языки",
      apply: "Применить",
      publicOffer: "Публичная оферта",
      privacyPolicy: "Политика конфиденциальности",
      conjunction: "и",
      publicOfferHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/public-offer_me_ru_2026-03-12.pdf",
      privacyPolicyHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/privacy-policy_me_ru_2026-03-12.pdf",
      auth: {
        enterId: "Введите ID",
        loadingTitle: "Найти игрока",
        foundTitle: "Аккаунт игрока найден",
        example: "Например: 012345678",
        search: "Искать",
        helpLink: "Как узнать ID?",
        helpText: "Откройте Standoff 2. ID находится в левом верхнем углу главного экрана, рядом с аватаркой.",
        hideInstruction: "Скрыть инструкцию",
        loadingName: "Поиск ...",
        startShopping: "Начать покупки",
        searchHistory: "История поиска",
        notFound: "Игрок не найден",
        serviceUnavailable: "Не получилось найти аккаунт. Проверьте, правильно ли указан ID.",
        userAvatarAltPrefix: "Аватар игрока",
        removeFromHistory: "Удалить из истории"
      },
      promo: {
        title: "Активировать промокод",
        placeholder: "Например: A1B2C3D4E5",
        apply: "Применить",
        notFound: "Промокод не найден",
        tryAgain: "Ввести ещё"
      },
      gift: {
        title: "покупайте в подарок!",
        description: "Радуйте близких подарками и отправляйте поздравления на открытках!",
        createGift: "Собрать подарок",
        enterRecipientId: "Введите ID получателя",
        chooseGifts: "Выбрать подарки"
      }
    },
    en: {
      title: "Store | Standoff 2",
      metaDescription: "Welcome to the official Standoff 2 web store. Here you can buy Gold, Battle Pass levels, and keep track of special offers.",
      countdownPrefix: "Time left:",
      countdownUnits: {
        days: "d",
        hours: "h",
        minutes: "m"
      },
      addedToCart: "Added to Cart",
      loginButton: "Log In",
      websiteLanguage: "Language",
      techSupport: "Tech Support",
      install: "Install Standoff 2",
      fanArt: "Fan art gallery",
      creators: "Creators program",
      merch: "Official SO2 Merchandise",
      socials: "Our Socials",
      socialTitle: "Our Socials",
      socialLabels: {
        telegram: "Telegram Channel",
        live: "Standoff 2 Live",
        official: "Standoff 2 Official",
        esports: "Standoff 2 ESports",
        tiktok: "TikTok Account",
        vk: "VK Group",
        discord: "Discord Server"
      },
      switchAccount: "Switch Account",
      languageTitle: "Language",
      apply: "Apply",
      publicOffer: "Public Offer",
      privacyPolicy: "Privacy Policy",
      conjunction: "and",
      publicOfferHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/public-offer_me_en_2026-03-12.pdf",
      privacyPolicyHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/privacy-policy_me_en_2026-03-12.pdf",
      auth: {
        enterId: "Enter your game ID",
        loadingTitle: "Player Search",
        foundTitle: "Player Found",
        example: "Example: 012345678",
        search: "Search",
        helpLink: "Where can I find my game ID",
        helpText: "In Standoff 2, you can find your ID in the top left corner of your profile, next to your avatar.",
        hideInstruction: "Hide",
        loadingName: "Searching ...",
        startShopping: "Back to Store",
        searchHistory: "Search History",
        notFound: "Account not found. Please make sure you’ve entered the correct ID.",
        serviceUnavailable: "Account not found. Please make sure you’ve entered the correct ID.",
        userAvatarAltPrefix: "Player avatar",
        removeFromHistory: "Remove from history"
      },
      promo: {
        title: "Redeem promo code",
        placeholder: "For example: A1B2C3D4E5",
        apply: "Apply",
        notFound: "Promo code not found",
        tryAgain: "Try again"
      },
      gift: {
        title: "Buy as a gift!",
        description: "Surprise your friend and send them a Greeting Card with their gift!",
        createGift: "Send Gift",
        enterRecipientId: "Enter Player ID",
        chooseGifts: "Choose Gifts"
      }
    }
  };
  const noticeTimers = new WeakMap();
  const accountLookupCache = new Map();
  let accountLookupScriptPromise = null;

  function readStorageValue(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function writeStorageValue(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Ignore storage failures for local file previews.
    }
  }

  function removeStorageValue(key) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Ignore storage failures for local file previews.
    }
  }

  function readStorageJson(key, fallback) {
    const value = readStorageValue(key);

    if (!value) {
      return fallback;
    }

    try {
      return JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  function writeStorageJson(key, value) {
    writeStorageValue(key, JSON.stringify(value));
  }

  function sanitizeUserId(value) {
    return String(value ?? "").replace(/\s+/g, "").trim();
  }

  function normalizeUserEntry(entry) {
    if (!entry) {
      return null;
    }

    const id = sanitizeUserId(entry.id);
    const name = String(entry.name ?? "").trim();
    const avatar = String(entry.avatar ?? "").trim();

    if (!id || !name || !avatar) {
      return null;
    }

    return { id, name, avatar };
  }

  function normalizeCountValue(value) {
    const parsed = Number.parseInt(String(value ?? "0"), 10);

    if (!Number.isFinite(parsed) || parsed < 0) {
      return 0;
    }

    return parsed;
  }

  function getProductCountLimit(productId) {
    const limit = PRODUCT_COUNT_LIMITS[productId];

    return Number.isFinite(limit) ? limit : Number.POSITIVE_INFINITY;
  }

  function clampProductCount(productId, value) {
    return Math.min(normalizeCountValue(value), getProductCountLimit(productId));
  }

  function normalizeCartState(value) {
    if (!value || typeof value !== "object") {
      return {};
    }

    return Object.entries(value).reduce((result, [productId, count]) => {
      const normalizedCount = clampProductCount(productId, count);

      if (productId && normalizedCount > 0) {
        result[productId] = normalizedCount;
      }

      return result;
    }, {});
  }

  function normalizeLanguage(language) {
    return LANGUAGE_CONFIG[language] ? language : "ru";
  }

  function getLanguageConfig(language = currentLanguage) {
    return LANGUAGE_CONFIG[normalizeLanguage(language)];
  }

  function getUiCopy(language = currentLanguage) {
    return UI_TEXT[getLanguageConfig(language).contentLanguage];
  }

  function getAuthCopy(language = currentLanguage) {
    return getUiCopy(language).auth;
  }

  function getPromoCopy(language = currentLanguage) {
    return getUiCopy(language).promo;
  }

  function getGiftCopy(language = currentLanguage) {
    return getUiCopy(language).gift;
  }

  function normalizeGiftSource(source) {
    return source === "gold" || source === "cart" ? source : "battlepass";
  }

  function getGiftSource(trigger) {
    return normalizeGiftSource(trigger?.dataset.giftSource || document.body.dataset.page);
  }

  function getGiftDestinationPath(source) {
    switch (normalizeGiftSource(source)) {
      case "gold":
        return "./surprise gold.html";
      case "cart":
        return "./surprise basket.html";
      default:
        return "./surprise battle pass.html";
    }
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

  function ensureCartRuntimeStyles() {
    if (document.getElementById("app-runtime-cart-styles")) {
      return;
    }

    const style = document.createElement("style");

    style.id = "app-runtime-cart-styles";
    style.textContent = `
      .IfqLgxnG,
      .IfqLgxnG *,
      .X8Rt15ci,
      .fI1FyIbI,
      [data-product-card] [data-card-action],
      [data-product-card] .UhqtQZoq,
      [data-product-card] .kagYWg0G,
      [data-product-card] .AiZQK0bH {
        -webkit-user-select: none;
        user-select: none;
      }
    `;

    document.head.append(style);
  }

  ensureCartRuntimeStyles();

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

  function getAccountLookupLanguageTag(language = currentLanguage) {
    return normalizeLanguage(language);
  }

  function getAccountLookupRouteLocale(language = currentLanguage) {
    return getLanguageConfig(language).routeLocale;
  }

  function getAccountLookupDeviceType() {
    if (window.innerWidth < 980) {
      return "mobile";
    }

    return "small_desktop";
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

  function getAccountLookupErrorMessage(error, language = currentLanguage) {
    const authCopy = getAuthCopy(language);

    if (isAccountLookupNotFoundError(error)) {
      return authCopy.notFound;
    }

    return authCopy.serviceUnavailable;
  }

  async function lookupAccountById(userId, options = {}) {
    const normalizedId = sanitizeUserId(userId);
    const { proxyUrl, proxyUrls, timeoutMs } = getAccountLookupConfig();
    const language = options.language || currentLanguage;

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

    const rcToken = await requestRecaptchaEnterpriseToken(options.action || "login");
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
            language: getAccountLookupLanguageTag(language),
            routeLocale: getAccountLookupRouteLocale(language),
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

  function dispatchAuthChange() {
    document.dispatchEvent(new CustomEvent("app:authchange", {
      detail: {
        user: currentUser ? { ...currentUser } : null
      }
    }));
  }

  function dispatchAuthModalClose() {
    document.dispatchEvent(new CustomEvent("app:authmodalclose"));
  }

  function persistCurrentUser() {
    if (!currentUser) {
      removeStorageValue(STORAGE_KEYS.currentUser);
      dispatchAuthChange();
      return;
    }

    writeStorageJson(STORAGE_KEYS.currentUser, currentUser);
    dispatchAuthChange();
  }

  function persistCartState() {
    if (Object.keys(cartState).length === 0) {
      removeStorageValue(STORAGE_KEYS.cart);
      return;
    }

    writeStorageJson(STORAGE_KEYS.cart, cartState);
  }

  function getStoredProductCount(productId, fallback = 0) {
    if (!productId) {
      return normalizeCountValue(fallback);
    }

    return clampProductCount(productId, Object.prototype.hasOwnProperty.call(cartState, productId) ? cartState[productId] : fallback);
  }

  function setStoredProductCount(productId, nextCount) {
    if (!productId) {
      return;
    }

    const normalizedCount = clampProductCount(productId, nextCount);

    if (normalizedCount > 0) {
      cartState[productId] = normalizedCount;
    } else {
      delete cartState[productId];
    }

    persistCartState();
  }

  function getTotalCartItems() {
    return Object.values(cartState).reduce((total, count) => total + normalizeCountValue(count), 0);
  }

  let currentLanguage = normalizeLanguage(readStorageValue(STORAGE_KEYS.language));
  let currentUser = normalizeUserEntry(readStorageJson(STORAGE_KEYS.currentUser, null));
  let cartState = normalizeCartState(readStorageJson(STORAGE_KEYS.cart, {}));

  if (currentUser) {
    accountLookupCache.set(currentUser.id, currentUser);
  }

  function setupHeaderScroll() {
    const headerContainer = document.querySelector(".DrnsdBhA");
    const logo = document.querySelector(".iTphCjeG");
    const desktopBurger = document.querySelector("._Yoqy3JO");
    const headerProfile = document.querySelector("[data-header-profile]");
    const headerProfileContainer = document.querySelector("[data-header-profile-container]");
    const headerProfileAvatar = document.querySelector(".yemSZJzQ");

    if (!headerContainer) {
      return;
    }

    const targets = [headerContainer, logo, desktopBurger].filter(Boolean);
    let scheduled = false;

    const syncScrolledState = () => {
      const isScrolled = window.scrollY > HEADER_SCROLL_THRESHOLD;
      targets.forEach((element) => element.classList.toggle(HEADER_SCROLLED_CLASS, isScrolled));

      if (headerProfile) {
        headerProfile.classList.toggle(HEADER_PROFILE_SCROLLED_CLASS, isScrolled);
      }

      if (headerProfileContainer) {
        headerProfileContainer.classList.toggle(HEADER_PROFILE_SCROLLED_CLASS, isScrolled);
      }

      if (headerProfileAvatar) {
        headerProfileAvatar.classList.toggle(HEADER_PROFILE_SCROLLED_CLASS, isScrolled);
      }

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

  function positionLoginMenu(toggleButton, menu) {
    const toggleRect = toggleButton.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const top = Math.max(MENU_VIEWPORT_PADDING, Math.min(toggleRect.bottom + MENU_VERTICAL_OFFSET, window.innerHeight - menuRect.height - MENU_VIEWPORT_PADDING));
    const left = Math.max(MENU_VIEWPORT_PADDING, Math.min(toggleRect.right - menuRect.width, window.innerWidth - menuRect.width - MENU_VIEWPORT_PADDING));

    menu.style.top = `${top}px`;
    menu.style.left = `${left}px`;
  }

  function syncCartBadge() {
    const totalItems = getTotalCartItems();

    document.querySelectorAll("[data-cart-badge]").forEach((badge) => {
      badge.hidden = totalItems < 1;
      badge.textContent = String(totalItems);
    });
  }

  function updateNavigationLinks() {
    const pageMap = {
      battlepass: "./index.html",
      gold: "./gold.html"
    };
    const currentPage = document.body?.dataset.page || "battlepass";

    document.querySelectorAll("[data-nav-link]").forEach((link) => {
      const pageId = link.dataset.navLink;
      const isActive = pageId === currentPage;

      if (pageMap[pageId]) {
        link.setAttribute("href", pageMap[pageId]);
      }

      link.classList.toggle("y3GrUBsU", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function formatInitialCountdownText(targetValue) {
    const uiCopy = getUiCopy();
    const targetDate = new Date(targetValue || DEFAULT_COUNTDOWN_TARGET);
    const targetTime = targetDate.getTime();

    if (!Number.isFinite(targetTime)) {
      return `${uiCopy.countdownPrefix} 0${uiCopy.countdownUnits.days}&nbsp;0${uiCopy.countdownUnits.hours}&nbsp;0${uiCopy.countdownUnits.minutes}`;
    }

    const remainingMs = Math.max(0, targetTime - Date.now());
    const totalMinutes = Math.floor(remainingMs / 60000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    return `${uiCopy.countdownPrefix} ${days}${uiCopy.countdownUnits.days}&nbsp;${hours}${uiCopy.countdownUnits.hours}&nbsp;${minutes}${uiCopy.countdownUnits.minutes}`;
  }

  function syncInitialAppShellState() {
    const isAuthorized = Boolean(currentUser);
    const headerLoginToggles = Array.from(document.querySelectorAll("[data-login-toggle]"));
    const headerProfileToggles = Array.from(document.querySelectorAll("[data-profile-toggle]"));
    const headerProfileNames = Array.from(document.querySelectorAll("[data-header-user-name]"));
    const headerProfileIds = Array.from(document.querySelectorAll("[data-header-user-id]"));
    const headerProfileAvatars = Array.from(document.querySelectorAll("[data-header-user-avatar]"));
    const bundleImage = document.querySelector("[data-bp-main-bundle-image]");
    const languageConfig = getLanguageConfig();
    const uiCopy = getUiCopy();

    document.querySelectorAll("[data-login-toggle-label]").forEach((label) => {
      label.textContent = uiCopy.loginButton;
    });

    document.querySelectorAll("[data-countdown]").forEach((countdown) => {
      countdown.innerHTML = formatInitialCountdownText(countdown.dataset.countdownTarget || DEFAULT_COUNTDOWN_TARGET);
    });

    if (bundleImage) {
      bundleImage.style.backgroundImage = `url("${MAIN_BUNDLE_IMAGES[languageConfig.contentLanguage]}") , url("undefined")`;
    }

    headerLoginToggles.forEach((headerLoginToggle) => {
      headerLoginToggle.hidden = isAuthorized;
      headerLoginToggle.setAttribute("aria-hidden", String(isAuthorized));
      headerLoginToggle.style.display = isAuthorized ? "none" : "";
    });

    headerProfileToggles.forEach((headerProfileToggle) => {
      headerProfileToggle.hidden = !isAuthorized;
      headerProfileToggle.setAttribute("aria-hidden", String(!isAuthorized));
      headerProfileToggle.style.display = isAuthorized ? "" : "none";
    });

    if (isAuthorized) {
      headerProfileNames.forEach((headerProfileName) => {
        headerProfileName.textContent = currentUser.name;
      });

      headerProfileIds.forEach((headerProfileId) => {
        headerProfileId.textContent = `ID: ${currentUser.id}`;
      });

      headerProfileAvatars.forEach((headerProfileAvatar) => {
        headerProfileAvatar.src = currentUser.avatar;
        headerProfileAvatar.alt = `${currentUser.name} avatar`;
      });
    }

    document.documentElement.removeAttribute("data-app-hydrating");
  }

  syncInitialAppShellState();

  function setupLoginMenu() {
    const toggleButton = document.querySelector("[data-login-toggle]");
    const profileToggle = document.querySelector("[data-profile-toggle]");
    const profileArrow = document.querySelector("[data-header-profile-arrow]");
    const menu = document.querySelector("[data-login-menu]");
    const overlay = document.querySelector("._XTYen5w");
    const socialModal = document.querySelector("[data-social-modal]");
    const languageModal = document.querySelector("[data-language-modal]");
    const languageOptions = Array.from(languageModal?.querySelectorAll("[data-language-option]") || []);

    if (!toggleButton || !menu || !overlay) {
      return null;
    }

    let currentAnchor = toggleButton;
    let pendingLanguage = currentLanguage;
    const isOpen = () => menu.classList.contains(MENU_OPEN_CLASS);
    const isSocialOpen = () => Boolean(socialModal && !socialModal.hidden);
    const isLanguageOpen = () => Boolean(languageModal && !languageModal.hidden);

    const syncPopupLock = () => {
      document.documentElement.style.overflow = isSocialOpen() || isLanguageOpen() ? "hidden" : "auto";
    };

    const setExpandedState = (expanded) => {
      const value = String(expanded);

      toggleButton.setAttribute("aria-expanded", value);

      if (profileToggle) {
        profileToggle.setAttribute("aria-expanded", value);
      }

      if (profileArrow) {
        profileArrow.classList.toggle("hwx5K4UA", expanded);
      }
    };

    const openExternalLink = (url) => {
      if (!url) {
        return;
      }

      window.open(url, "_blank", "noopener,noreferrer");
    };

    const syncLanguageSelection = () => {
      languageOptions.forEach((option) => {
        const isSelected = option.dataset.languageOption === pendingLanguage;
        const checkmark = option.querySelector("[data-language-check]");

        option.classList.toggle("qEvk2umd", isSelected);
        option.setAttribute("aria-checked", String(isSelected));

        if (checkmark) {
          checkmark.hidden = !isSelected;
        }
      });
    };

    const closeSocialModal = (options = {}) => {
      const { restoreFocus = true } = options;

      if (!isSocialOpen()) {
        return;
      }

      setPopupOpenState(socialModal, false);
      syncPopupLock();

      if (restoreFocus && !isOpen() && !isLanguageOpen() && currentAnchor && typeof currentAnchor.focus === "function") {
        currentAnchor.focus();
      }
    };

    const closeLanguageModal = (options = {}) => {
      const { restoreFocus = true, resetSelection = true } = options;

      if (!isLanguageOpen()) {
        return;
      }

      if (resetSelection) {
        pendingLanguage = currentLanguage;
        syncLanguageSelection();
      }

      setPopupOpenState(languageModal, false);
      syncPopupLock();

      if (restoreFocus && !isOpen() && !isSocialOpen() && currentAnchor && typeof currentAnchor.focus === "function") {
        currentAnchor.focus();
      }
    };

    const closeMenu = () => {
      if (!isOpen()) {
        return;
      }

      menu.classList.remove(MENU_OPEN_CLASS);
      overlay.classList.remove(MENU_OVERLAY_OPEN_CLASS);
      setExpandedState(false);
      menu.setAttribute("aria-hidden", "true");
      menu.hidden = true;
    };

    const openSocialModal = () => {
      if (!socialModal) {
        return;
      }

      closeLanguageModal({ restoreFocus: false });
      setPopupOpenState(socialModal, true);
      syncPopupLock();
    };

    const openLanguageModal = () => {
      if (!languageModal) {
        return;
      }

      closeSocialModal({ restoreFocus: false });
      pendingLanguage = currentLanguage;
      syncLanguageSelection();
      setPopupOpenState(languageModal, true);
      syncPopupLock();
    };

    document.addEventListener("app:requestlanguagemodal", (event) => {
      currentAnchor = event.detail?.trigger || currentAnchor || toggleButton;
      openLanguageModal();
    });

    const openMenu = (anchor = toggleButton) => {
      currentAnchor = anchor;
      menu.hidden = false;
      positionLoginMenu(currentAnchor, menu);
      menu.setAttribute("aria-hidden", "false");
      overlay.classList.add(MENU_OVERLAY_OPEN_CLASS);
      setExpandedState(true);
      menu.classList.add(MENU_OPEN_CLASS);
    };

    const toggleMenu = (anchor = toggleButton) => {
      if (isOpen()) {
        closeMenu();
        return;
      }

      openMenu(anchor);
    };

    toggleButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(toggleButton);
    });

    profileToggle?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(profileToggle);
    });

    profileToggle?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      toggleMenu(profileToggle);
    });

    menu.addEventListener("click", (event) => {
      const actionItem = event.target.closest("[data-menu-link], [data-menu-action]");

      if (!actionItem || !menu.contains(actionItem)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (actionItem.dataset.menuLink) {
        openExternalLink(actionItem.dataset.menuLink);
        return;
      }

      if (actionItem.dataset.menuAction === "socials") {
        openSocialModal();
        return;
      }

      if (actionItem.dataset.menuAction === "language") {
        openLanguageModal();
      }
    });

    menu.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const actionItem = event.target.closest("[data-menu-link], [data-menu-action]");

      if (!actionItem || !menu.contains(actionItem) || actionItem.tagName === "BUTTON") {
        return;
      }

      event.preventDefault();
      actionItem.click();
    });

    socialModal?.addEventListener("click", (event) => {
      if (event.target === socialModal) {
        closeSocialModal();
        return;
      }

      const closeTrigger = event.target.closest("[data-social-close]");

      if (closeTrigger && socialModal.contains(closeTrigger)) {
        event.preventDefault();
        closeSocialModal();
        return;
      }

      const socialLink = event.target.closest("[data-social-link]");

      if (!socialLink || !socialModal.contains(socialLink)) {
        return;
      }

      event.preventDefault();
      openExternalLink(socialLink.dataset.socialLink);
    });

    socialModal?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const socialLink = event.target.closest("[data-social-link]");

      if (!socialLink || !socialModal.contains(socialLink)) {
        return;
      }

      event.preventDefault();
      socialLink.click();
    });

    languageModal?.addEventListener("click", (event) => {
      if (event.target === languageModal) {
        closeLanguageModal();
        return;
      }

      const closeTrigger = event.target.closest("[data-language-close]");

      if (closeTrigger && languageModal.contains(closeTrigger)) {
        event.preventDefault();
        closeLanguageModal();
        return;
      }

      const option = event.target.closest("[data-language-option]");

      if (option && languageModal.contains(option)) {
        event.preventDefault();
        pendingLanguage = normalizeLanguage(option.dataset.languageOption);
        syncLanguageSelection();
        return;
      }

      const applyTrigger = event.target.closest("[data-language-apply]");

      if (!applyTrigger || !languageModal.contains(applyTrigger)) {
        return;
      }

      event.preventDefault();
      const nextLanguage = pendingLanguage;
      const shouldReload = nextLanguage !== currentLanguage;

      currentLanguage = nextLanguage;
      writeStorageValue(STORAGE_KEYS.language, currentLanguage);

      if (!shouldReload) {
        closeLanguageModal({ restoreFocus: false, resetSelection: false });
        return;
      }

      closeLanguageModal({ restoreFocus: false, resetSelection: false });
      window.location.reload();
    });

    languageModal?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const option = event.target.closest("[data-language-option]");

      if (!option || !languageModal.contains(option)) {
        return;
      }

      event.preventDefault();
      option.click();
    });

    overlay.addEventListener("click", closeMenu);

    document.addEventListener("click", (event) => {
      if (!event.defaultPrevented) {
        const fallbackToggle = event.target.closest("[data-login-toggle], [data-profile-toggle]");

        if (fallbackToggle && (fallbackToggle === toggleButton || fallbackToggle === profileToggle)) {
          event.preventDefault();
          toggleMenu(fallbackToggle === profileToggle ? profileToggle : toggleButton);
          return;
        }

        const languageTrigger = event.target.closest('[data-menu-action="language"]');

        if (languageTrigger && menu.contains(languageTrigger)) {
          event.preventDefault();
          openLanguageModal();
          return;
        }
      }

      if (socialModal?.contains(event.target) || languageModal?.contains(event.target)) {
        return;
      }

      if (!isOpen()) {
        return;
      }

      if (menu.contains(event.target) || toggleButton.contains(event.target) || profileToggle?.contains(event.target)) {
        return;
      }

      closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (isLanguageOpen()) {
          closeLanguageModal();
          return;
        }

        if (isSocialOpen()) {
          closeSocialModal();
          return;
        }

        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (isOpen()) {
        positionLoginMenu(currentAnchor, menu);
      }
    });

    window.addEventListener("scroll", () => {
      if (isOpen()) {
        positionLoginMenu(currentAnchor, menu);
      }
    }, { passive: true });

    return {
      closeMenu,
      closeSocialModal,
      closeLanguageModal,
      isOpen,
      isLanguageOpen,
      isSocialOpen,
      openMenu,
      toggleMenu
    };
  }

  function setupAuthFlow(loginMenuApi) {
    const loginModal = document.querySelector('[data-auth-modal="login"]');
    const loginTriggers = Array.from(document.querySelectorAll('[data-open-auth="login"]'));
    const headerLoginToggle = document.querySelector("[data-login-toggle]");
    const headerProfileToggle = document.querySelector("[data-profile-toggle]");
    const headerProfileName = document.querySelector("[data-header-user-name]");
    const headerProfileId = document.querySelector("[data-header-user-id]");
    const headerProfileAvatar = document.querySelector("[data-header-user-avatar]");
    const menuLoginButtons = Array.from(document.querySelectorAll("[data-menu-login]"));
    const menuSwitchAccountButtons = Array.from(document.querySelectorAll("[data-menu-switch-account]"));
    const activeTitle = loginModal?.querySelector("[data-auth-active-title]");
    const loginForm = loginModal?.querySelector('[data-auth-form="login"]');
    const loginInput = loginModal?.querySelector('[data-auth-id-input="login"]');
    const loginInputContainer = loginModal?.querySelector('[data-auth-input-container="login"]');
    const loginError = loginModal?.querySelector('[data-auth-error="login"]');
    const loginSearchButton = loginModal?.querySelector('[data-auth-search-button="login"]');
    const openHelpButton = loginModal?.querySelector("[data-auth-open-help]");
    const loginHelpPanel = loginModal?.querySelector("[data-auth-help-panel]");
    const loginHelpText = loginModal?.querySelector("[data-auth-help-text]");
    const hideHelpButton = loginModal?.querySelector("[data-auth-hide-help]");
    const loadingScreen = loginModal?.querySelector('[data-auth-screen="loading"]');
    const foundScreen = loginModal?.querySelector('[data-auth-screen="found"]');
    const loadingActionButton = loginModal?.querySelector("[data-auth-loading-action]");
    const loadingIdText = loginModal?.querySelector("[data-auth-loading-id]");
    const loadingNameText = loginModal?.querySelector("[data-auth-loading-name]");
    const loadingHelpPanel = loginModal?.querySelector("[data-auth-loading-help]");
    const loadingHelpText = loginModal?.querySelector("[data-auth-loading-help-text]");
    const hideLoadingHelpButton = loginModal?.querySelector("[data-auth-hide-loading-help]");
    const backStepButtons = Array.from(loginModal?.querySelectorAll("[data-auth-back-step]") || []);
    const completeLoginButton = loginModal?.querySelector("[data-auth-complete-login]");
    const resultHelpPanel = loginModal?.querySelector("[data-auth-result-help]");
    const resultHelpText = loginModal?.querySelector("[data-auth-result-help-text]");
    const hideResultHelpButton = loginModal?.querySelector("[data-auth-hide-result-help]");
    const foundUserId = loginModal?.querySelector("[data-auth-user-id]");
    const foundUserName = loginModal?.querySelector("[data-auth-user-name]");
    const foundUserAvatar = loginModal?.querySelector("[data-auth-user-avatar]");
    const historyWrapper = loginModal?.querySelector("[data-auth-history-wrapper]");
    const historyList = loginModal?.querySelector("[data-auth-history-list]");
    const historyTitle = loginModal?.querySelector("[data-auth-history-title]");

    if (!loginModal || !activeTitle || !loginForm || !loginInput || !loginInputContainer || !loginError || !loginSearchButton || !openHelpButton || !loginHelpPanel || !loginHelpText || !hideHelpButton || !loadingScreen || !foundScreen || !loadingActionButton || !loadingIdText || !loadingNameText || !loadingHelpPanel || !loadingHelpText || !hideLoadingHelpButton || backStepButtons.length === 0 || !completeLoginButton || !resultHelpPanel || !resultHelpText || !hideResultHelpButton || !foundUserId || !foundUserName || !foundUserAvatar || !historyTitle || !headerLoginToggle || !headerProfileToggle || loginTriggers.length === 0) {
      console.warn("[app] setupAuthFlow skipped — missing elements:", JSON.stringify({
        loginModal: !!loginModal, activeTitle: !!activeTitle, loginForm: !!loginForm, loginInput: !!loginInput,
        loginInputContainer: !!loginInputContainer, loginError: !!loginError, loginSearchButton: !!loginSearchButton,
        openHelpButton: !!openHelpButton, loginHelpPanel: !!loginHelpPanel, loginHelpText: !!loginHelpText,
        hideHelpButton: !!hideHelpButton, loadingScreen: !!loadingScreen, foundScreen: !!foundScreen,
        loadingActionButton: !!loadingActionButton, loadingIdText: !!loadingIdText, loadingNameText: !!loadingNameText,
        loadingHelpPanel: !!loadingHelpPanel, loadingHelpText: !!loadingHelpText, hideLoadingHelpButton: !!hideLoadingHelpButton,
        backStepButtons: backStepButtons.length, completeLoginButton: !!completeLoginButton,
        resultHelpPanel: !!resultHelpPanel, resultHelpText: !!resultHelpText, hideResultHelpButton: !!hideResultHelpButton,
        foundUserId: !!foundUserId, foundUserName: !!foundUserName, foundUserAvatar: !!foundUserAvatar,
        historyTitle: !!historyTitle, headerLoginToggle: !!headerLoginToggle, headerProfileToggle: !!headerProfileToggle,
        loginTriggers: loginTriggers.length
      }));
      return;
    }

    document.documentElement.dataset.authReady = "true";

    const screens = {
      login: loginForm,
      loading: loadingScreen,
      found: foundScreen
    };
    const SEARCH_DELAY_MS = 700;

    setPopupOpenState(loginModal, false);

    document.documentElement.style.overflow = "auto";
    loginMenuApi?.closeMenu?.();
    loginMenuApi?.closeSocialModal?.({ restoreFocus: false });
    loginMenuApi?.closeLanguageModal?.({ restoreFocus: false });

    let isModalOpen = false;
    let activeScreen = "login";
    let lastTrigger = null;
    let pendingUser = null;
    let instructionVisible = false;
    let submittedId = "";
    let searchTimerId = null;
    let loginHistory = [];
    let loginErrorType = "notFound";
    let searchRequestId = 0;

    const getScreenTitle = (screenName) => {
      const authCopy = getAuthCopy();

      if (screenName === "loading") {
        return authCopy.loadingTitle;
      }

      if (screenName === "found") {
        return authCopy.foundTitle;
      }

      return authCopy.enterId;
    };

    const setScrollLocked = (locked) => {
      document.documentElement.style.overflow = locked ? "hidden" : "auto";
    };

    const clearPendingSearch = () => {
      searchRequestId += 1;

      if (searchTimerId === null) {
        return;
      }

      window.clearTimeout(searchTimerId);
      searchTimerId = null;
    };

    const setElementHiddenState = (element, hidden) => {
      if (!element) {
        return;
      }

      element.hidden = hidden;
      element.setAttribute("aria-hidden", String(hidden));
      element.style.display = hidden ? "none" : "";
    };

    const syncHeaderAuthState = () => {
      const isAuthorized = Boolean(currentUser);

      setElementHiddenState(headerLoginToggle, isAuthorized);
      setElementHiddenState(headerProfileToggle, !isAuthorized);
      menuLoginButtons.forEach((button) => {
        setElementHiddenState(button, isAuthorized);
      });
      menuSwitchAccountButtons.forEach((button) => {
        setElementHiddenState(button, !isAuthorized);
      });

      if (!currentUser) {
        return;
      }

      headerProfileName.textContent = currentUser.name;
      headerProfileId.textContent = `ID: ${currentUser.id}`;
      headerProfileAvatar.src = currentUser.avatar;
      headerProfileAvatar.alt = `${currentUser.name} avatar`;
    };

    const syncInstructionState = () => {
      loginHelpPanel.hidden = !instructionVisible || activeScreen !== "login";
      loadingHelpPanel.hidden = !instructionVisible || activeScreen !== "loading";
      openHelpButton.hidden = instructionVisible || activeScreen !== "login";
      resultHelpPanel.hidden = !instructionVisible || activeScreen !== "found";
    };

    const clearError = () => {
      loginErrorType = "notFound";
      loginError.hidden = true;
      loginError.textContent = "";
      loginError.classList.remove("KfSNJ33k");
      loginInputContainer.classList.remove("KfSNJ33k");
      loginInput.classList.remove("KfSNJ33k");
    };

    const showError = (message, errorType = "notFound") => {
      loginErrorType = errorType;
      loginError.hidden = false;
      loginError.textContent = message;
      loginError.classList.add("KfSNJ33k");
      loginInputContainer.classList.add("KfSNJ33k");
      loginInput.classList.add("KfSNJ33k");
    };

    const sanitizeInputValue = (value) => sanitizeUserId(value);

    const escapeHtml = (value) => String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

    const updateSearchButton = () => {
      loginSearchButton.disabled = loginInput.value.trim().length < 1;
    };

    const normalizeHistoryEntry = (entry) => {
      return normalizeUserEntry({
        ...entry,
        id: sanitizeInputValue(String(entry?.id ?? "").trim())
      });
    };

    const syncLocalizedState = () => {
      const authCopy = getAuthCopy();

      loginInput.placeholder = authCopy.example;
      loginSearchButton.textContent = authCopy.search;
      openHelpButton.textContent = authCopy.helpLink;
      loginHelpText.textContent = authCopy.helpText;
      loadingHelpText.textContent = authCopy.helpText;
      resultHelpText.textContent = authCopy.helpText;
      hideHelpButton.textContent = authCopy.hideInstruction;
      hideLoadingHelpButton.textContent = authCopy.hideInstruction;
      hideResultHelpButton.textContent = authCopy.hideInstruction;
      loadingActionButton.textContent = authCopy.startShopping;
      completeLoginButton.textContent = authCopy.startShopping;
      loadingNameText.textContent = authCopy.loadingName;
      historyTitle.textContent = authCopy.searchHistory;
      activeTitle.textContent = getScreenTitle(activeScreen);

      if (!loginError.hidden) {
        loginError.textContent = loginErrorType === "serviceUnavailable" ? authCopy.serviceUnavailable : authCopy.notFound;
      }

      if (foundUserAvatar.getAttribute("src")) {
        foundUserAvatar.alt = `${authCopy.userAvatarAltPrefix} ${foundUserName.textContent}`;
      }

      renderHistory();
    };

    const renderHistoryItem = (entry) => {
      const authCopy = getAuthCopy();
      const escapedId = escapeHtml(entry.id);
      const escapedName = escapeHtml(entry.name);
      const escapedAvatar = escapeHtml(entry.avatar);

      return [
        `<div class="cjjK74UX app-auth-history-item" data-auth-history-item data-user-id="${escapedId}">`,
        '  <div class="gepQJevF kxvHEpBw">',
        '    <div role="button" tabindex="0" class="UhqtQZoq" aria-hidden="false"></div>',
        '    <div class="_k_ejJ8r">',
        '      <div class="rGkMKa_9">',
        '        <div class="EF8NZxHb OMeIxbHF" style="width: 48px; height: 48px;">',
        `          <img class="VNznsh1o" src="${escapedAvatar}" alt="${escapeHtml(`${authCopy.userAvatarAltPrefix} ${entry.name}`)}">`,
        '        </div>',
        '      </div>',
        '      <div class="SvBse0wZ">',
        `        <p class="FvXL3T03">ID ${escapedId}</p>`,
        `        <p class="nBK_VWkI">${escapedName}</p>`,
        '      </div>',
        '    </div>',
        '  </div>',
        '  <div class="b9W5I7Us">',
        `    <button type="button" class="p1KrGb3a EZUDc50g LrAJcY3r lsZHwOJw" data-auth-remove-history aria-label="${escapeHtml(authCopy.removeFromHistory)}">`,
        '      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" class="VykBBEw3">',
        '        <path fill="#fff" d="M1.75 1.75a.854.854 0 0 1 1.209 0l13.29 13.291a.855.855 0 0 1-1.207 1.209L1.75 2.959a.854.854 0 0 1 0-1.209"></path>',
        '        <path fill="#fff" d="M16.25 1.75a.854.854 0 0 0-1.209 0L1.751 15.042a.854.854 0 0 0 1.208 1.208l13.29-13.291a.854.854 0 0 0 0-1.209"></path>',
        '      </svg>',
        '    </button>',
        '  </div>',
        '</div>'
      ].join("\n");
    };

    const renderHistory = () => {
      if (!historyWrapper || !historyList) {
        return;
      }

      if (loginHistory.length === 0) {
        historyList.innerHTML = "";
        historyWrapper.hidden = true;
        return;
      }

      historyWrapper.hidden = false;
      historyList.innerHTML = loginHistory.map(renderHistoryItem).join("");
    };

    const upsertHistoryEntry = (entry) => {
      const normalizedEntry = normalizeHistoryEntry(entry);

      if (!normalizedEntry) {
        return;
      }

      loginHistory = [normalizedEntry, ...loginHistory.filter((item) => item.id !== normalizedEntry.id)].slice(0, LOGIN_HISTORY_LIMIT);
      writeStorageJson(STORAGE_KEYS.loginHistory, loginHistory);
      renderHistory();
    };

    const removeHistoryEntry = (userId) => {
      loginHistory = loginHistory.filter((entry) => entry.id !== userId);
      writeStorageJson(STORAGE_KEYS.loginHistory, loginHistory);
      renderHistory();
    };

    const getHistoryEntry = (userId) => loginHistory.find((entry) => entry.id === userId) || null;

    const showScreen = (name, options = {}) => {
      const { focusAction = false } = options;

      Object.entries(screens).forEach(([screenName, element]) => {
        element.hidden = screenName !== name;
      });

      activeScreen = name;
      activeTitle.textContent = getScreenTitle(name);
      activeTitle.classList.toggle(AUTH_TITLE_DESKTOP_CLASS, name === "login");
      syncInstructionState();

      if (focusAction) {
        window.requestAnimationFrame(() => {
          completeLoginButton.focus();
        });
      }
    };

    const closeMenuBeforeModal = () => {
      loginMenuApi?.closeSocialModal?.({ restoreFocus: false });
      loginMenuApi?.closeLanguageModal?.({ restoreFocus: false });
      loginMenuApi?.closeMenu?.();
    };

    const resetDropdownFocus = () => {
      if (currentUser) {
        lastTrigger = headerProfileToggle;
        return;
      }

      lastTrigger = headerLoginToggle;
    };

    const finishLogin = () => {
      if (!pendingUser) {
        return;
      }

      upsertHistoryEntry(pendingUser);
      currentUser = pendingUser;
      persistCurrentUser();
      pendingUser = null;
      closeModal({ restoreFocus: false });
      syncHeaderAuthState();
      resetDropdownFocus();
      headerProfileToggle.focus();
    };

    loginHistory = readStorageJson(STORAGE_KEYS.loginHistory, [])
      .map(normalizeHistoryEntry)
      .filter(Boolean)
      .reduce((entries, entry) => {
        if (entries.some((item) => item.id === entry.id)) {
          return entries;
        }

        return [...entries, entry];
      }, [])
      .slice(0, LOGIN_HISTORY_LIMIT);

    syncHeaderAuthState();
    showScreen("login");
    updateSearchButton();
    renderHistory();
    syncLocalizedState();

    const closeModal = (options = {}) => {
      const { restoreFocus = true } = options;

      if (!isModalOpen) {
        return;
      }

      clearPendingSearch();
      isModalOpen = false;
      pendingUser = null;
      instructionVisible = false;
      submittedId = "";
      loginInput.value = "";
      loginInput.disabled = false;
      clearError();
      updateSearchButton();
      showScreen("login");
      renderHistory();
      setPopupOpenState(loginModal, false);
      setScrollLocked(false);
      dispatchAuthModalClose();

      if (restoreFocus && lastTrigger && typeof lastTrigger.focus === "function") {
        lastTrigger.focus();
      }
    };

    const openModal = (trigger) => {
      clearPendingSearch();
      pendingUser = null;
      instructionVisible = false;
      submittedId = "";
      clearError();
      loginInput.value = "";
      loginInput.disabled = false;
      updateSearchButton();
      showScreen("login");
      renderHistory();
      lastTrigger = trigger || document.activeElement;
      isModalOpen = true;
      setPopupOpenState(loginModal, true);
      setScrollLocked(true);
    };

    const openFoundState = (userId, user) => {
      pendingUser = {
        id: userId,
        name: user.name,
        avatar: user.avatar
      };
      const authCopy = getAuthCopy();

      foundUserId.textContent = `ID ${userId}`;
      foundUserName.textContent = user.name;
      foundUserAvatar.src = user.avatar;
      foundUserAvatar.alt = `${authCopy.userAvatarAltPrefix} ${user.name}`;
      showScreen("found", { focusAction: true });
    };

    const goBackToLoginStep = () => {
      clearPendingSearch();
      pendingUser = null;
      loginInput.disabled = false;
      clearError();
      loginInput.value = submittedId;
      updateSearchButton();
      showScreen("login");
    };

    const handleHistoryLogin = (userId) => {
      const historyEntry = getHistoryEntry(userId);

      if (!historyEntry) {
        return;
      }

      clearPendingSearch();
      loginInput.disabled = false;
      clearError();
      loginInput.value = historyEntry.id;
      submittedId = historyEntry.id;
      pendingUser = { ...historyEntry };
      finishLogin();
    };

    const switchAccount = () => {
      currentUser = null;
      pendingUser = null;
      persistCurrentUser();
      syncHeaderAuthState();
      closeMenuBeforeModal();
      openModal(headerLoginToggle);
    };

    const performSearch = () => {
      const authCopy = getAuthCopy();
      const value = sanitizeInputValue(loginInput.value.trim());

      loginInput.value = value;
      clearError();
      updateSearchButton();

      if (value.length < 1) {
        return;
      }

      submittedId = value;
      loginInput.disabled = true;
      loadingIdText.textContent = `ID ${value}`;
      loadingNameText.textContent = authCopy.loadingName;
      showScreen("loading");
      clearPendingSearch();
      const requestId = searchRequestId;

      searchTimerId = window.setTimeout(async () => {
        searchTimerId = null;

        try {
          const user = await lookupAccountById(value);

          if (requestId !== searchRequestId || !isModalOpen) {
            return;
          }

          loginInput.disabled = false;
          openFoundState(value, user);
        } catch (error) {
          if (requestId !== searchRequestId || !isModalOpen) {
            return;
          }

          loginInput.disabled = false;
          pendingUser = null;
          loginInput.value = value;
          showScreen("login");
          showError(
            getAccountLookupErrorMessage(error),
            isAccountLookupNotFoundError(error) ? "notFound" : "serviceUnavailable"
          );
          updateSearchButton();
        }
      }, SEARCH_DELAY_MS);
    };

    loginTriggers.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        closeMenuBeforeModal();
        openModal(headerLoginToggle || button);
      });
    });

    document.addEventListener("app:requestauthlogin", (event) => {
      const trigger = event.detail?.trigger;

      closeMenuBeforeModal();
      openModal(trigger || headerLoginToggle || loginTriggers[0] || document.activeElement);
    });

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      performSearch();
    });

    loginInput.addEventListener("input", () => {
      loginInput.value = sanitizeInputValue(loginInput.value);
      clearError();
      updateSearchButton();
    });

    openHelpButton?.addEventListener("click", () => {
      instructionVisible = true;
      syncInstructionState();
    });

    hideHelpButton?.addEventListener("click", () => {
      instructionVisible = false;
      syncInstructionState();
    });

    hideLoadingHelpButton?.addEventListener("click", () => {
      instructionVisible = false;
      syncInstructionState();
    });

    hideResultHelpButton?.addEventListener("click", () => {
      instructionVisible = false;
      syncInstructionState();
    });

    historyList?.addEventListener("click", (event) => {
      const removeButton = event.target.closest("[data-auth-remove-history]");

      if (removeButton && historyList.contains(removeButton)) {
        event.preventDefault();
        event.stopPropagation();

        const historyItem = removeButton.closest("[data-auth-history-item]");

        if (historyItem?.dataset.userId) {
          removeHistoryEntry(historyItem.dataset.userId);
        }

        return;
      }

      const historyItem = event.target.closest("[data-auth-history-item]");

      if (!historyItem || !historyList.contains(historyItem) || !historyItem.dataset.userId) {
        return;
      }

      event.preventDefault();
      handleHistoryLogin(historyItem.dataset.userId);
    });

    historyList?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const historyItem = event.target.closest("[data-auth-history-item]");

      if (!historyItem || !historyList.contains(historyItem) || !historyItem.dataset.userId || event.target.closest("[data-auth-remove-history]")) {
        return;
      }

      event.preventDefault();
      handleHistoryLogin(historyItem.dataset.userId);
    });

    backStepButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        goBackToLoginStep();
      });
    });

    loadingActionButton.addEventListener("click", (event) => {
      event.preventDefault();
    });

    menuSwitchAccountButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        switchAccount();
      });
    });

    completeLoginButton?.addEventListener("click", (event) => {
      event.preventDefault();
      finishLogin();
    });

    loginModal.addEventListener("click", (event) => {
      if (event.target === loginModal) {
        closeModal();
        return;
      }

      const closeTrigger = event.target.closest("[data-auth-close]");

      if (!closeTrigger || !loginModal.contains(closeTrigger)) {
        return;
      }

      event.preventDefault();
      closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    });

    document.addEventListener("app:languagechange", syncLocalizedState);

    updateSearchButton();
  }

  function setupPromoModal(loginMenuApi) {
    const modal = document.querySelector("[data-promo-modal]");
    const triggers = Array.from(document.querySelectorAll("[data-promo-open]"));
    const promoForm = modal?.querySelector("[data-promo-form]");
    const promoTitle = modal?.querySelector("[data-promo-title]");
    const promoInput = modal?.querySelector("[data-promo-input]");
    const promoInputContainer = modal?.querySelector("[data-promo-input-container]");
    const promoError = modal?.querySelector("[data-promo-error]");
    const promoSubmit = modal?.querySelector("[data-promo-submit]");
    const promoReset = modal?.querySelector("[data-promo-reset]");
    const promoClear = modal?.querySelector("[data-promo-clear]");

    if (!modal || triggers.length === 0 || !promoForm || !promoTitle || !promoInput || !promoInputContainer || !promoError || !promoSubmit || !promoReset || !promoClear) {
      return;
    }

    let isOpen = false;
    let lastTrigger = null;

    const setScrollLocked = (locked) => {
      document.documentElement.style.overflow = locked ? "hidden" : "auto";
    };

    const syncSubmitState = () => {
      promoSubmit.disabled = promoInput.value.trim().length < 1;
    };

    const resetPromoState = (options = {}) => {
      const { keepValue = false } = options;

      if (!keepValue) {
        promoInput.value = "";
      }

      promoInputContainer.classList.remove("KfSNJ33k");
      promoInput.classList.remove("KfSNJ33k");
      promoClear.classList.remove("KfSNJ33k");
      promoClear.hidden = true;
      promoError.hidden = true;
      promoSubmit.hidden = false;
      promoReset.hidden = true;
      syncSubmitState();
    };

    const syncLocalizedState = () => {
      const promoCopy = getPromoCopy();

      promoTitle.textContent = promoCopy.title;
      promoInput.placeholder = promoCopy.placeholder;
      promoSubmit.textContent = promoCopy.apply;
      promoReset.textContent = promoCopy.tryAgain;

      if (!promoError.hidden) {
        promoError.textContent = promoCopy.notFound;
      }
    };

    const showPromoError = () => {
      const promoCopy = getPromoCopy();

      promoInputContainer.classList.add("KfSNJ33k");
      promoInput.classList.add("KfSNJ33k");
      promoClear.classList.add("KfSNJ33k");
      promoClear.hidden = false;
      promoError.hidden = false;
      promoError.textContent = promoCopy.notFound;
      promoSubmit.hidden = true;
      promoReset.hidden = false;
    };

    const closeOtherPopups = () => {
      loginMenuApi?.closeSocialModal?.({ restoreFocus: false });
      loginMenuApi?.closeLanguageModal?.({ restoreFocus: false });
      loginMenuApi?.closeMenu?.();
    };

    const closeModal = (options = {}) => {
      const { restoreFocus = true } = options;

      if (!isOpen) {
        return;
      }

      isOpen = false;
      resetPromoState();
      setPopupOpenState(modal, false);
      setScrollLocked(false);

      if (restoreFocus && lastTrigger && typeof lastTrigger.focus === "function") {
        lastTrigger.focus();
      }
    };

    const openModal = (trigger) => {
      closeOtherPopups();
      lastTrigger = trigger || document.activeElement;
      isOpen = true;
      resetPromoState();
      setPopupOpenState(modal, true);
      setScrollLocked(true);
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        openModal(trigger);
      });
    });

    document.addEventListener("click", (event) => {
      if (event.defaultPrevented) {
        return;
      }

      const trigger = event.target.closest("[data-promo-open]");

      if (!trigger) {
        return;
      }

      event.preventDefault();
      openModal(trigger);
    });

    document.addEventListener("app:requestpromoopen", (event) => {
      openModal(event.detail?.trigger || document.activeElement);
    });

    promoInput.addEventListener("input", () => {
      promoInput.value = promoInput.value.replace(/\s+/g, "");

      if (!promoError.hidden) {
        return;
      }

      syncSubmitState();
    });

    promoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (promoInput.value.trim().length < 1) {
        syncSubmitState();
        return;
      }

      // Show spinner inside the clear button area
      promoSubmit.disabled = true;
      promoClear.hidden = false;
      promoClear.innerHTML = '<div class="R5wuj1zi" style="width:18px;height:18px;border-width:3px;margin:0;"></div>';
      promoClear.style.pointerEvents = "none";
      promoInput.readOnly = true;

      window.setTimeout(() => {
        promoClear.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="#fff" d="M1.75 1.75a.854.854 0 0 1 1.209 0l13.29 13.291a.855.855 0 0 1-1.207 1.209L1.75 2.959a.854.854 0 0 1 0-1.209"></path><path fill="#fff" d="M16.25 1.75a.854.854 0 0 0-1.209 0L1.751 15.042a.854.854 0 0 0 1.208 1.208l13.29-13.291a.854.854 0 0 0 0-1.209"></path></svg>';
        promoClear.style.pointerEvents = "";
        promoInput.readOnly = false;
        promoSubmit.disabled = false;
        showPromoError();
      }, 1500);
    });

    promoReset.addEventListener("click", (event) => {
      event.preventDefault();
      resetPromoState();
      promoInput.focus();
    });

    promoClear.addEventListener("click", (event) => {
      event.preventDefault();
      resetPromoState();
      promoInput.focus();
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
        return;
      }

      const closeTrigger = event.target.closest("[data-promo-close]");

      if (!closeTrigger || !modal.contains(closeTrigger)) {
        return;
      }

      event.preventDefault();
      closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    });

    document.addEventListener("app:languagechange", syncLocalizedState);

    syncLocalizedState();
    resetPromoState();
  }

  function setupGiftFlow(loginMenuApi) {
    const modal = document.querySelector("[data-gift-modal]");
    const triggers = Array.from(document.querySelectorAll("[data-gift-open]"));
    const stage = modal?.querySelector("[data-gift-stage]");
    const introScreen = modal?.querySelector('[data-gift-screen="intro"]');
    const recipientScreen = modal?.querySelector('[data-gift-screen="recipient"]');
    const loadingScreen = modal?.querySelector('[data-gift-screen="loading"]');
    const foundScreen = modal?.querySelector('[data-gift-screen="found"]');
    const recipientContent = recipientScreen?.querySelector(".JK0tawE3.knimwCCa");
    const loadingPanel = loadingScreen?.querySelector(".Z7y7qbot");
    const foundPanel = foundScreen?.querySelector(".Z7y7qbot");
    const introTitle = modal?.querySelector("[data-gift-intro-title]");
    const introText = modal?.querySelector("[data-gift-intro-text]");
    const introSubmitLabel = modal?.querySelector("[data-gift-intro-submit-label]");
    const introSubmitButton = modal?.querySelector("[data-gift-next='recipient']");
    const recipientTitle = modal?.querySelector("[data-gift-recipient-title]");
    const recipientForm = modal?.querySelector("[data-gift-form]");
    const recipientInput = modal?.querySelector("[data-gift-input]");
    const recipientInputContainer = modal?.querySelector("[data-gift-input-container]");
    const recipientError = modal?.querySelector("[data-gift-error]");
    const recipientSearchButton = modal?.querySelector("[data-gift-search-button]");
    const recipientHelpButton = modal?.querySelector("[data-gift-open-help]");
    const recipientHelpPanel = modal?.querySelector("[data-gift-help-panel]");
    const recipientHelpText = modal?.querySelector("[data-gift-help-text]");
    const recipientHideHelpButton = modal?.querySelector("[data-gift-hide-help]");
    const loadingTitle = modal?.querySelector("[data-gift-loading-title]");
    const loadingId = modal?.querySelector("[data-gift-loading-id]");
    const loadingName = modal?.querySelector("[data-gift-loading-name]");
    const foundTitle = modal?.querySelector("[data-gift-found-title]");
    const foundAvatar = modal?.querySelector("[data-gift-user-avatar]");
    const foundId = modal?.querySelector("[data-gift-user-id]");
    const foundName = modal?.querySelector("[data-gift-user-name]");
    const foundResetButton = modal?.querySelector("[data-gift-reset-recipient]");
    const chooseGiftsButton = modal?.querySelector("[data-gift-choose-button]");
    const chooseGiftsLabel = modal?.querySelector("[data-gift-choose-label]");

    if (!modal || triggers.length === 0 || !stage || !introScreen || !recipientScreen || !loadingScreen || !foundScreen || !recipientContent || !loadingPanel || !foundPanel || !introTitle || !introText || !introSubmitLabel || !introSubmitButton || !recipientTitle || !recipientForm || !recipientInput || !recipientInputContainer || !recipientError || !recipientSearchButton || !recipientHelpButton || !recipientHelpPanel || !recipientHelpText || !recipientHideHelpButton || !loadingTitle || !loadingId || !loadingName || !foundTitle || !foundAvatar || !foundId || !foundName || !foundResetButton || !chooseGiftsButton || !chooseGiftsLabel) {
      console.warn("[app] setupGiftFlow skipped — missing elements:", JSON.stringify({
        modal: !!modal, triggers: triggers.length, stage: !!stage, introScreen: !!introScreen,
        recipientScreen: !!recipientScreen, loadingScreen: !!loadingScreen, foundScreen: !!foundScreen,
        recipientContent: !!recipientContent, loadingPanel: !!loadingPanel, foundPanel: !!foundPanel
      }));
      return;
    }

    loadingPanel.dataset.giftInlineState = "loading";
    foundPanel.dataset.giftInlineState = "found";
    recipientContent.append(loadingPanel, foundPanel);
    loadingPanel.hidden = true;
    foundPanel.hidden = true;
    loadingPanel.style.display = "none";
    foundPanel.style.display = "none";
    loadingScreen.remove();
    foundScreen.remove();

    recipientContent.append(recipientHelpButton, recipientHelpPanel);

    const screens = {
      intro: introScreen,
      recipient: recipientScreen
    };

    const TRANSITION_DURATION_MS = 220;
    const SEARCH_DELAY_MS = 650;
    let isOpen = false;
    let activeScreenName = "intro";
    let activeRecipientView = "form";
    let recipientHelpVisible = false;
    let activeGiftSource = normalizeGiftSource(document.body.dataset.page);
    let lastTrigger = null;
    let activeRecipient = null;
    let searchTimerId = 0;
    let screenTimerId = 0;
    let recipientErrorType = "notFound";
    let lookupRequestId = 0;

    const setScrollLocked = (locked) => {
      document.documentElement.style.overflow = locked ? "hidden" : "auto";
    };

    const closeOtherPopups = () => {
      loginMenuApi?.closeSocialModal?.({ restoreFocus: false });
      loginMenuApi?.closeLanguageModal?.({ restoreFocus: false });
      loginMenuApi?.closeMenu?.();
    };

    const clearTimers = () => {
      lookupRequestId += 1;
      window.clearTimeout(searchTimerId);
      window.clearTimeout(screenTimerId);
      searchTimerId = 0;
      screenTimerId = 0;
    };

    const setRecipientHelpVisible = (visible, options = {}) => {
      const { focusButton = false } = options;
      const showHelpButton = !visible && !recipientForm.hidden && recipientForm.style.display !== "none";

      recipientHelpVisible = Boolean(visible);
      recipientHelpPanel.hidden = !recipientHelpVisible;
      recipientHelpPanel.style.display = recipientHelpVisible ? "" : "none";
      recipientHelpButton.hidden = !showHelpButton;
      recipientHelpButton.style.display = showHelpButton ? "" : "none";

      if (!focusButton) {
        return;
      }

      window.requestAnimationFrame(() => {
        if (recipientHelpVisible) {
          recipientHideHelpButton.focus();
          return;
        }

        recipientHelpButton.focus();
      });
    };

    const focusScreenTarget = (screenName) => {
      window.requestAnimationFrame(() => {
        if (screenName === "intro") {
          introSubmitButton.focus();
        }
      });
    };

    const showRecipientView = (viewName, options = {}) => {
      const { focus = false } = options;
      const isFormView = viewName === "form";
      const isLoadingView = viewName === "loading";
      const isFoundView = viewName === "found";

      activeRecipientView = viewName;
      recipientForm.hidden = !isFormView;
      recipientForm.style.display = isFormView ? "" : "none";
      loadingPanel.hidden = !isLoadingView;
      loadingPanel.style.display = isLoadingView ? "" : "none";
      foundPanel.hidden = !isFoundView;
      foundPanel.style.display = isFoundView ? "" : "none";

      recipientHelpPanel.hidden = !recipientHelpVisible;
      recipientHelpPanel.style.display = recipientHelpVisible ? "" : "none";
      recipientHelpButton.hidden = recipientHelpVisible || !isFormView;
      recipientHelpButton.style.display = recipientHelpVisible || !isFormView ? "none" : "";

      if (!focus) {
        return;
      }

      window.requestAnimationFrame(() => {
        if (viewName === "found") {
          chooseGiftsButton.focus();
        }
      });
    };

    const showScreen = (screenName, options = {}) => {
      const { immediate = false, focus = true } = options;
      const nextScreen = screens[screenName];
      const currentScreen = screens[activeScreenName];

      if (!nextScreen) {
        return;
      }

      activeScreenName = screenName;
      window.clearTimeout(screenTimerId);

      if (immediate || !currentScreen || currentScreen === nextScreen) {
        Object.entries(screens).forEach(([name, screen]) => {
          const isActive = name === screenName;

          screen.hidden = !isActive;
          screen.classList.toggle("app-gift-screen-active", isActive);
          screen.classList.remove("app-gift-screen-entering", "app-gift-screen-leaving");
        });

        if (focus) {
          focusScreenTarget(screenName);
        }

        return;
      }

      nextScreen.hidden = false;
      nextScreen.classList.remove("app-gift-screen-leaving", "app-gift-screen-active");
      nextScreen.classList.add("app-gift-screen-entering");

      window.requestAnimationFrame(() => {
        currentScreen.classList.remove("app-gift-screen-active", "app-gift-screen-entering");
        currentScreen.classList.add("app-gift-screen-leaving");
        nextScreen.classList.add("app-gift-screen-active");
        nextScreen.classList.remove("app-gift-screen-entering");
      });

      screenTimerId = window.setTimeout(() => {
        Object.entries(screens).forEach(([name, screen]) => {
          if (name !== screenName) {
            screen.hidden = true;
          }

          screen.classList.remove("app-gift-screen-entering", "app-gift-screen-leaving");
          screen.classList.toggle("app-gift-screen-active", name === screenName);
        });

        if (focus) {
          focusScreenTarget(screenName);
        }
      }, TRANSITION_DURATION_MS);
    };

    const updateSearchButton = () => {
      recipientSearchButton.disabled = recipientInput.value.trim().length < 1;
    };

    const clearSearchError = () => {
      recipientErrorType = "notFound";
      recipientInputContainer.classList.remove("KfSNJ33k");
      recipientError.hidden = true;
    };

    const showSearchError = (message, errorType = "notFound") => {
      const authCopy = getAuthCopy();

      recipientErrorType = errorType;
      recipientInputContainer.classList.add("KfSNJ33k");
      recipientError.hidden = false;
      recipientError.textContent = message || authCopy.notFound;
    };

    const setActiveRecipient = (user) => {
      const authCopy = getAuthCopy();

      activeRecipient = user;
      foundAvatar.src = user?.avatar || "";
      foundAvatar.alt = user ? `${authCopy.userAvatarAltPrefix} ${user.name}` : authCopy.userAvatarAltPrefix;
      foundId.textContent = user ? `ID ${user.id}` : "ID";
      foundName.textContent = user?.name || "";
    };

    const resetRecipientState = (options = {}) => {
      const { keepValue = false } = options;

      clearTimers();
      clearSearchError();
      recipientHelpVisible = false;
      setRecipientHelpVisible(false);

      if (!keepValue) {
        recipientInput.value = "";
      }

      loadingId.textContent = "ID";
      setActiveRecipient(null);
      showRecipientView("form");
      updateSearchButton();
    };

    const syncLocalizedState = () => {
      const authCopy = getAuthCopy();
      const giftCopy = getGiftCopy();

      introTitle.textContent = giftCopy.title;
      introText.textContent = giftCopy.description;
      introSubmitLabel.textContent = giftCopy.createGift;
      recipientTitle.textContent = giftCopy.enterRecipientId;
      recipientInput.placeholder = authCopy.example;
      recipientSearchButton.textContent = authCopy.search;
      recipientHelpButton.textContent = authCopy.helpLink;
      recipientHelpText.textContent = authCopy.helpText;
      recipientHideHelpButton.textContent = authCopy.hideInstruction;
      loadingTitle.textContent = authCopy.loadingTitle;
      loadingName.textContent = authCopy.loadingName;
      foundTitle.textContent = authCopy.foundTitle;
      chooseGiftsLabel.textContent = giftCopy.chooseGifts;

      if (!recipientError.hidden) {
        recipientError.textContent = recipientErrorType === "serviceUnavailable" ? authCopy.serviceUnavailable : authCopy.notFound;
      }

      setActiveRecipient(activeRecipient);
      showRecipientView(activeRecipientView);
    };

    const closeModal = (options = {}) => {
      const { restoreFocus = true } = options;

      if (!isOpen) {
        return;
      }

      clearTimers();
      isOpen = false;
      setPopupOpenState(modal, false);
      setScrollLocked(false);
      resetRecipientState();
      showScreen("intro", { immediate: true, focus: false });

      if (restoreFocus && lastTrigger && typeof lastTrigger.focus === "function") {
        lastTrigger.focus();
      }
    };

    const openModal = (trigger, initialScreen = "intro") => {
      closeOtherPopups();
      activeGiftSource = getGiftSource(trigger);
      lastTrigger = trigger || document.activeElement;
      isOpen = true;
      resetRecipientState();
      setPopupOpenState(modal, true);
      setScrollLocked(true);
      showScreen(initialScreen, { immediate: true, focus: true });
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        openModal(trigger, trigger.dataset.giftOpen === "recipient" ? "recipient" : "intro");
      });
    });

    introSubmitButton.addEventListener("click", (event) => {
      event.preventDefault();
      showScreen("recipient");
    });

    recipientInput.addEventListener("input", () => {
      recipientInput.value = recipientInput.value.replace(/\D+/g, "");
      clearSearchError();
      updateSearchButton();
    });

    recipientForm.addEventListener("submit", (event) => {
      const nextUserId = recipientInput.value.trim();

      event.preventDefault();

      if (!nextUserId) {
        updateSearchButton();
        return;
      }

      clearTimers();
      clearSearchError();
      loadingId.textContent = `ID ${nextUserId}`;
      setActiveRecipient(null);
      showRecipientView("loading");
      const requestId = lookupRequestId;

      searchTimerId = window.setTimeout(async () => {
        if (!isOpen || requestId !== lookupRequestId) {
          return;
        }

        try {
          const matchedUser = await lookupAccountById(nextUserId);

          if (!isOpen || requestId !== lookupRequestId) {
            return;
          }

          setActiveRecipient(matchedUser);
          showRecipientView("found", { focus: true });
        } catch (error) {
          if (!isOpen || requestId !== lookupRequestId) {
            return;
          }

          showRecipientView("form");
          showSearchError(
            getAccountLookupErrorMessage(error),
            isAccountLookupNotFoundError(error) ? "notFound" : "serviceUnavailable"
          );
        }
      }, SEARCH_DELAY_MS);
    });

    recipientHelpButton.addEventListener("click", (event) => {
      event.preventDefault();
      setRecipientHelpVisible(true);
    });

    recipientHideHelpButton.addEventListener("click", (event) => {
      event.preventDefault();
      setRecipientHelpVisible(false, { focusButton: true });
    });

    foundResetButton.addEventListener("click", (event) => {
      event.preventDefault();
      clearTimers();
      clearSearchError();
      setActiveRecipient(null);
      showRecipientView("form");
    });

    chooseGiftsButton.addEventListener("click", (event) => {
      event.preventDefault();

      const recipient = normalizeUserEntry(activeRecipient);

      if (recipient) {
        writeStorageJson(STORAGE_KEYS.giftRecipient, recipient);
      }

      writeStorageValue(STORAGE_KEYS.giftSource, activeGiftSource);

      const currentCart = readStorageValue(STORAGE_KEYS.cart);
      const existingGiftCart = readStorageValue(STORAGE_KEYS.giftCart);

      if (currentCart !== null) {
        writeStorageValue(STORAGE_KEYS.giftSavedCart, currentCart);
      } else {
        writeStorageValue(STORAGE_KEYS.giftSavedCart, "");
      }

      if (existingGiftCart !== null) {
        writeStorageValue(STORAGE_KEYS.cart, existingGiftCart);
      } else {
        removeStorageValue(STORAGE_KEYS.cart);
      }

      window.location.href = getGiftDestinationPath(activeGiftSource);
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
        return;
      }

      const closeTrigger = event.target.closest("[data-gift-close]");

      if (!closeTrigger || !modal.contains(closeTrigger)) {
        return;
      }

      event.preventDefault();
      closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    });

    document.addEventListener("app:languagechange", syncLocalizedState);

    syncLocalizedState();
    resetRecipientState();
    showScreen("intro", { immediate: true, focus: false });
  }

  function getDirectChildByClass(parent, className) {
    return Array.from(parent.children).find((element) => element.classList.contains(className)) || null;
  }

  function createFullCardOverlay() {
    const overlay = document.createElement("div");
    overlay.setAttribute("role", "button");
    overlay.setAttribute("tabindex", "0");
    overlay.setAttribute("aria-disabled", "false");
    overlay.setAttribute("aria-hidden", "false");
    overlay.dataset.cardAction = "add";
    overlay.className = "UhqtQZoq";
    return overlay;
  }

  function createHalfOverlay(side, options = {}) {
    const { disabled = false } = options;
    const overlay = document.createElement("div");
    const sideClass = side === "left" ? "bHaMknQz" : "o5f7_qIm";
    const action = side === "left" ? "decrement" : "increment";

    overlay.setAttribute("role", "button");
    overlay.setAttribute("tabindex", "0");
    overlay.setAttribute("aria-disabled", String(disabled));

    if (!disabled) {
      overlay.dataset.cardAction = action;
    }

    overlay.className = `kagYWg0G ${sideClass}`;
    return overlay;
  }

  function renderPriceButton(price) {
    return [
      '<span class="gotuJr3w"></span>',
      '<button type="button" class="p1KrGb3a dVZlJ3Vu AiZQK0bH Yk74vMHL adX7e0nU" data-card-action="add">',
      `  <div class="OPlcbUWN F_GdC3qL OZpbqN3j NE2K7NGD">${price}</div>`,
      '</button>'
    ].join("\n");
  }

  function renderCounter(count, options = {}) {
    const { incrementDisabled = false } = options;
    const incrementDisabledAttribute = incrementDisabled ? " disabled" : "";

    return [
      '<span class="gotuJr3w"></span>',
      '<div class="UDnuy5ts NDsiIDKM zWXsExLd">',
      '  <button type="button" class="crFgKmrM EdC20Ny3 NDsiIDKM" data-card-action="decrement"><div></div></button>',
      `  <div class="X4GWOKdN rgYtKpKv NDsiIDKM" data-card-count-value>${count}</div>`,
      `  <button type="button" class="crFgKmrM oGQOeXJZ NDsiIDKM" data-card-action="increment"${incrementDisabledAttribute}><div></div></button>`,
      '</div>'
    ].join("\n");
  }

  function showCartNotice(card) {
    const notice = card.querySelector(".IfqLgxnG");
    const noticeText = card.querySelector(".X8Rt15ci");
    const noticeImage = card.querySelector(".fI1FyIbI");

    if (!notice) {
      return;
    }

    window.clearTimeout(noticeTimers.get(notice));
    notice.classList.remove(CART_NOTICE_VISIBLE_CLASS);
    noticeText?.classList.remove(CART_NOTICE_VISIBLE_CLASS);
    noticeImage?.classList.remove(CART_NOTICE_VISIBLE_CLASS);

    void notice.offsetWidth;

    notice.classList.add(CART_NOTICE_VISIBLE_CLASS);
    noticeText?.classList.add(CART_NOTICE_VISIBLE_CLASS);
    noticeImage?.classList.add(CART_NOTICE_VISIBLE_CLASS);

    const timeoutId = window.setTimeout(() => {
      notice.classList.remove(CART_NOTICE_VISIBLE_CLASS);
      noticeText?.classList.remove(CART_NOTICE_VISIBLE_CLASS);
      noticeImage?.classList.remove(CART_NOTICE_VISIBLE_CLASS);
    }, CART_NOTICE_DURATION_MS);

    noticeTimers.set(notice, timeoutId);
  }

  function syncCardState(card, options = {}) {
    const count = Number(card.dataset.count || "0");
    const price = card.dataset.price || "";
    const maxCount = getProductCountLimit(card.dataset.productId);
    const actionContainer = card.querySelector("[data-card-action-container]");
    const contentWrapper = getDirectChildByClass(card, "cxa9uePM");
    const fullOverlay = getDirectChildByClass(card, "UhqtQZoq");
    const cardVisual = contentWrapper ? getDirectChildByClass(contentWrapper, "GfEQhLTi") : null;

    if (!actionContainer || !contentWrapper || !cardVisual) {
      return;
    }

    actionContainer.innerHTML = count > 0
      ? renderCounter(count, { incrementDisabled: count >= maxCount })
      : renderPriceButton(price);

    Array.from(contentWrapper.children)
      .filter((element) => element.classList.contains("kagYWg0G"))
      .forEach((element) => element.remove());

    if (count > 0) {
      if (fullOverlay) {
        fullOverlay.remove();
      }

      contentWrapper.prepend(createHalfOverlay("left"));
      if (count < maxCount) {
        contentWrapper.append(createHalfOverlay("right"));
      }
    } else if (!fullOverlay) {
      card.insertBefore(createFullCardOverlay(), contentWrapper);
    }

    if (options.showNotice) {
      showCartNotice(card);
    }
  }

  function setupProductCards() {
    const cards = Array.from(document.querySelectorAll("[data-product-card]"));

    if (cards.length === 0) {
      return;
    }

    cards.forEach((card) => {
      const initialCount = getStoredProductCount(card.dataset.productId, card.dataset.defaultCount || 0);
      card.dataset.count = String(initialCount);
      syncCardState(card);
    });

    const updateCardCount = (card, nextCount) => {
      const previousCount = normalizeCountValue(card.dataset.count || 0);
      const normalizedCount = clampProductCount(card.dataset.productId, Math.max(0, nextCount));

      card.dataset.count = String(normalizedCount);
      setStoredProductCount(card.dataset.productId, normalizedCount);
      syncCardState(card, {
        showNotice: normalizedCount > previousCount
      });
      syncCartBadge();
    };

    const handleAction = (trigger) => {
      const card = trigger.closest("[data-product-card]");
      const action = trigger.dataset.cardAction;

      if (!card || !action) {
        return;
      }

      const currentCount = normalizeCountValue(card.dataset.count || 0);

      if (action === "add" || action === "increment") {
        updateCardCount(card, currentCount + 1);
      }

      if (action === "decrement") {
        updateCardCount(card, currentCount - 1);
      }
    };

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-card-action]");

      if (!trigger || !trigger.closest("[data-product-card]")) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      handleAction(trigger);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const trigger = event.target.closest("[data-card-action]");

      if (!trigger || trigger.tagName === "BUTTON" || !trigger.closest("[data-product-card]")) {
        return;
      }

      event.preventDefault();
      handleAction(trigger);
    });
  }

  function formatCountdownText(uiCopy, targetValue) {
    const targetDate = new Date(targetValue || DEFAULT_COUNTDOWN_TARGET);
    const targetTime = targetDate.getTime();

    if (!Number.isFinite(targetTime)) {
      return `${uiCopy.countdownPrefix} 0${uiCopy.countdownUnits.days}&nbsp;0${uiCopy.countdownUnits.hours}&nbsp;0${uiCopy.countdownUnits.minutes}`;
    }

    const remainingMs = Math.max(0, targetTime - Date.now());
    const totalMinutes = Math.floor(remainingMs / 60000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    return `${uiCopy.countdownPrefix} ${days}${uiCopy.countdownUnits.days}&nbsp;${hours}${uiCopy.countdownUnits.hours}&nbsp;${minutes}${uiCopy.countdownUnits.minutes}`;
  }

  function setupCountdownTimer() {
    const countdowns = Array.from(document.querySelectorAll("[data-countdown]"));

    if (countdowns.length === 0) {
      return;
    }

    const renderCountdowns = () => {
      const uiCopy = getUiCopy();

      countdowns.forEach((countdown) => {
        countdown.innerHTML = formatCountdownText(uiCopy, countdown.dataset.countdownTarget || DEFAULT_COUNTDOWN_TARGET);
      });
    };

    renderCountdowns();
    window.setInterval(renderCountdowns, COUNTDOWN_UPDATE_INTERVAL_MS);
    document.addEventListener("app:languagechange", renderCountdowns);
  }

  function applyPageLanguage() {
    const languageConfig = getLanguageConfig();
    const uiCopy = getUiCopy();
    const metaDescription = document.querySelector('meta[name="description"]');
    const countdown = document.querySelector("[data-countdown]");
    const headerLoginLabels = Array.from(document.querySelectorAll("[data-login-toggle-label]"));
    const menuLanguageLabels = Array.from(document.querySelectorAll("[data-menu-language-label]"));
    const menuLanguageCodes = Array.from(document.querySelectorAll("[data-menu-language-code]"));
    const socialTitles = Array.from(document.querySelectorAll("[data-social-title]"));
    const languageTitles = Array.from(document.querySelectorAll("[data-language-title]"));
    const languageApplyButtons = Array.from(document.querySelectorAll("[data-language-apply]"));
    const bundleImage = document.querySelector("[data-bp-main-bundle-image]");
    const publicOfferLink = document.querySelector("[data-footer-public-offer]");
    const footerConjunction = document.querySelector("[data-footer-conjunction]");
    const privacyLink = document.querySelector("[data-footer-privacy]");

    document.documentElement.setAttribute("lang", languageConfig.htmlLang);
    document.title = uiCopy.title;

    if (metaDescription) {
      metaDescription.content = uiCopy.metaDescription;
    }

    if (countdown) {
      countdown.innerHTML = formatCountdownText(uiCopy, countdown.dataset.countdownTarget || DEFAULT_COUNTDOWN_TARGET);
    }

    headerLoginLabels.forEach((label) => {
      label.textContent = uiCopy.loginButton;
    });

    menuLanguageLabels.forEach((label) => {
      label.textContent = uiCopy.websiteLanguage;
    });

    menuLanguageCodes.forEach((label) => {
      label.textContent = languageConfig.code;
    });

    Object.entries({
      techSupport: uiCopy.techSupport,
      install: uiCopy.install,
      fanArt: uiCopy.fanArt,
      creators: uiCopy.creators,
      merch: uiCopy.merch,
      socials: uiCopy.socials
    }).forEach(([key, value]) => {
      document.querySelectorAll(`[data-menu-label="${key}"]`).forEach((label) => {
        label.textContent = value;
      });
    });

    const menuLoginButtons = Array.from(document.querySelectorAll("[data-menu-login]"));
    const menuSwitchAccountButtons = Array.from(document.querySelectorAll("[data-menu-switch-account]"));

    menuLoginButtons.forEach((button) => {
      button.textContent = uiCopy.loginButton;
    });

    menuSwitchAccountButtons.forEach((button) => {
      button.textContent = uiCopy.switchAccount;
    });

    socialTitles.forEach((title) => {
      title.textContent = uiCopy.socialTitle;
    });

    document.querySelectorAll("[data-social-item]").forEach((item) => {
      const label = item.querySelector("[data-social-item-label]");
      const value = uiCopy.socialLabels[item.dataset.socialItem];

      if (label && value) {
        label.textContent = value;
      }
    });

    languageTitles.forEach((title) => {
      title.textContent = uiCopy.languageTitle;
    });

    languageApplyButtons.forEach((button) => {
      button.textContent = uiCopy.apply;
    });

    document.querySelectorAll(".IfqLgxnG .X8Rt15ci").forEach((element) => {
      element.textContent = uiCopy.addedToCart;
    });

    if (bundleImage) {
      bundleImage.style.backgroundImage = `url("${MAIN_BUNDLE_IMAGES[languageConfig.contentLanguage]}") , url("undefined")`;
    }

    if (publicOfferLink) {
      publicOfferLink.textContent = uiCopy.publicOffer;
      publicOfferLink.setAttribute("href", uiCopy.publicOfferHref);
    }

    if (footerConjunction) {
      footerConjunction.textContent = uiCopy.conjunction;
    }

    if (privacyLink) {
      privacyLink.textContent = uiCopy.privacyPolicy;
      privacyLink.setAttribute("href", uiCopy.privacyPolicyHref);
    }

    updateNavigationLinks();
    syncCartBadge();
    document.dispatchEvent(new Event("app:languagechange"));
  }

  let loginMenuApi = null;
  try { loginMenuApi = setupLoginMenu(); } catch (e) { console.error("[app] setupLoginMenu failed:", e); }

  const safeRun = (name, fn) => { try { fn(); } catch (e) { console.error("[app] " + name + " failed:", e); } };

  safeRun("setupHeaderScroll", () => setupHeaderScroll());
  safeRun("setupProductCards", () => setupProductCards());
  safeRun("setupCountdownTimer", () => setupCountdownTimer());
  safeRun("setupAuthFlow", () => setupAuthFlow(loginMenuApi));
  safeRun("setupPromoModal", () => setupPromoModal(loginMenuApi));
  safeRun("setupGiftFlow", () => setupGiftFlow(loginMenuApi));
  syncCartBadge();
  applyPageLanguage();
})();
