(() => {
  const STORAGE_KEYS = {
    cart: "standoff2.store.cart",
    currentUser: "standoff2.store.currentUser",
    language: "standoff2.store.language"
  };
  const LANGUAGE_CONFIG = {
    ru: {
      contentLanguage: "ru"
    },
    en: {
      contentLanguage: "en"
    },
    pt: {
      contentLanguage: "en"
    }
  };
  const LEGAL_LINKS = {
    ru: {
      offerHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/public-offer_me_ru_2026-03-12.pdf",
      privacyHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/privacy-policy_me_ru_2026-03-12.pdf"
    },
    en: {
      offerHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/public-offer_me_en_2026-03-12.pdf",
      privacyHref: "https://web-static.cdn.boltgaming.io/store2/legal/ru/web/privacy-policy_me_en_2026-03-12.pdf"
    }
  };
  const MAIN_BUNDLE_IMAGES = {
    ru: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/bp10_ru.webp",
    en: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/bp10_en.webp"
  };
  const BASE_BP_STOCK = 418;
  const CHECKOUT_LOADING_DELAY_MS = 700;
  const CHECKOUT_NOTIFICATION_DURATION_MS = 5000;
  const CHECKOUT_NOTIFICATION_TRANSITION_MS = 420;
  const PAYMENT_STATUS_PENDING_DELAY_MS = 2000;
  const PAYMENT_STATUS_LOGO = "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/logo.webp";
  const PRODUCT_DEFINITIONS = {
    "gold-100": {
      titles: {
        ru: "100 Gold",
        en: "100 Gold"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/gold/cart/cartG100.webp",
      price: 119,
      maxCount: Number.POSITIVE_INFINITY,
      bpUnits: 0,
      showLeftToBuy: false
    },
    "gold-500": {
      titles: {
        ru: "500 Gold",
        en: "500 Gold"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/gold/cart/cartG500.webp",
      price: 499,
      originalPrice: 590,
      discountPercent: 15,
      maxCount: Number.POSITIVE_INFINITY,
      bpUnits: 0,
      showLeftToBuy: false
    },
    "gold-1000": {
      titles: {
        ru: "1000 Gold",
        en: "1000 Gold"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/gold/cart/cartG1000.webp",
      price: 899,
      originalPrice: 1190,
      discountPercent: 25,
      maxCount: Number.POSITIVE_INFINITY,
      bpUnits: 0,
      showLeftToBuy: false
    },
    "gold-3000": {
      titles: {
        ru: "3000 Gold",
        en: "3000 Gold"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/properties/defaultItems/gold/cart/cartG3000.webp",
      price: 1999,
      originalPrice: 3640,
      discountPercent: 45,
      maxCount: Number.POSITIVE_INFINITY,
      bpUnits: 0,
      showLeftToBuy: false
    },
    "bp-pass": {
      titles: {
        ru: "Gold Pass",
        en: "Gold Pass"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/bp.webp",
      price: 799,
      maxCount: 1,
      bpUnits: 0,
      showLeftToBuy: true
    },
    "bp-pass-bundle": {
      titles: {
        ru: "Gold Pass + 10 уровней",
        en: "Gold Pass + 10 levels"
      },
      imageByContentLanguage: {
        ru: MAIN_BUNDLE_IMAGES.ru,
        en: MAIN_BUNDLE_IMAGES.en
      },
      price: 1299,
      originalPrice: 1546,
      discountPercent: 16,
      maxCount: 1,
      bpUnits: 10,
      showLeftToBuy: true
    },
    "bp-level-1": {
      titles: {
        ru: "1 уровень Battle Pass",
        en: "1 Battle Pass level"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/l1.webp",
      price: 89,
      maxCount: Number.POSITIVE_INFINITY,
      bpUnits: 1,
      showLeftToBuy: true
    },
    "bp-level-10": {
      titles: {
        ru: "10 уровней Battle Pass",
        en: "10 Battle Pass levels"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/l10.webp",
      price: 699,
      originalPrice: 899,
      discountPercent: 22,
      maxCount: Number.POSITIVE_INFINITY,
      bpUnits: 10,
      showLeftToBuy: true
    },
    "bp-level-25": {
      titles: {
        ru: "25 уровней Battle Pass",
        en: "25 Battle Pass levels"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/l25.webp",
      price: 1599,
      originalPrice: 2221,
      discountPercent: 28,
      maxCount: Number.POSITIVE_INFINITY,
      bpUnits: 25,
      showLeftToBuy: true
    },
    "bp-level-75": {
      titles: {
        ru: "75 уровней Battle Pass",
        en: "75 Battle Pass levels"
      },
      image: "https://web-static.cdn.boltgaming.io/store2/section_battlepass-557590f76fd6/l75.webp",
      price: 3899,
      originalPrice: 6722,
      discountPercent: 42,
      maxCount: Number.POSITIVE_INFINITY,
      bpUnits: 75,
      showLeftToBuy: true
    }
  };
  const CART_COPY = {
    ru: {
      title: "Купить на аккаунт",
      emptyTitle: "В корзине ничего нет",
      emptyText: "Все товары можно найти в каталоге. Там точно найдется что-то интересное!",
      emptyAction: "Начать покупки",
      discount: "Скидка",
      total: "Итого",
      buy: "Купить",
      buyForSelf: "купить для себя",
      buyAsGift: "купить в подарок",
      leftToBuy: "Осталось:",
      removeConfirmTitle: "Удалить товар из корзины?",
      removeConfirmText: "Он пропадет из списка покупок. Вы сможете добавить его снова, если передумаете.",
      removeConfirmAction: "Удалить",
      cancel: "Отмена",
      checkoutTitle: "Оплата заказа",
      checkoutBack: "Назад",
      checkoutClose: "Закрыть",
      paymentMethod: "Способ оплаты",
      edit: "Редактировать",
      newCard: "Новая карта ",
      sharePaymentLink: "Поделиться ссылкой для оплаты ",
      shareInfoTitle: "Другой человек сможет оплатить этот заказ",
      shareInfoText: "",
      emailForReceipt: "EMAIL ДЛЯ ЧЕКА",
      emailPlaceholder: "mail@adress.com",
      keepUpdated: "Получать информацию об акциях и скидках",
      pay: "Оплатить",
      legalPrefix: "Нажимая кнопку \"Оплатить\", Вы подтверждаете, что ознакомились и согласны с положениями ",
      legalConjunction: " и ",
      publicOfferLabel: "Публичной оферты",
      privacyPolicyLabel: "Политикой конфиденциальности",
      linkCopied: "Ссылка скопирована",
      linkNotCopied: "Ссылка не была скопирована",
      loadingName: "Поиск ...",
      userAvatarAltPrefix: "Аватар игрока",
      warningTitle: "Обратите внимание:",
      differentIdWarning: "Вы перешли на оформление покупки для другого ID:",
      paymentProcessing: "Ожидание оплаты",
      paymentPendingInfo: "Обычно всё проходит моментально, но иногда операция немного задерживается банком.\n\nЕсли покупка не появилась в течение 24 часов, обратитесь в службу поддержки игры",
      paymentSuccessful: "ОПЛАТА ПРОШЛА УСПЕШНО!",
      giftPaymentSuccessful: "подарок успешно оплачен",
      transactionNumber: "Номер транзакции",
      receiptSent: "Мы отправили чек вам на почту",
      giftReceiptSent: "Мы отправили чек вам на почту",
      refreshPage: "Обновить",
      backToStore: "Вернуться в магазин",
      recaptchaNoticePrefix: "This site is protected by reCAPTCHA Enterprise and the Google",
      recaptchaNoticeSuffix: "apply.",
      itemLabels: {
        singular: "товар",
        few: "товара",
        many: "товаров"
      }
    },
    en: {
      title: "Buy for account",
      emptyTitle: "It’s empty in here",
      emptyText: "Take a look at the store catalog, there might be something you like!",
      emptyAction: "To Catalog",
      discount: "Discount",
      total: "Total",
      buy: "Buy",
      buyForSelf: "buy for yourself",
      buyAsGift: "buy as a gift",
      leftToBuy: "Left:",
      removeConfirmTitle: "Remove item from your cart?",
      removeConfirmText: "This item will be removed from your cart. You can add it again at any time if you change your mind.",
      removeConfirmAction: "Delete",
      cancel: "Cancel",
      checkoutTitle: "Checkout",
      checkoutBack: "Go Back",
      checkoutClose: "Close",
      paymentMethod: "Payment method",
      edit: "Edit",
      newCard: "Add new card ",
      sharePaymentLink: "Share a payment link ",
      shareInfoTitle: "Another person will be able to pay for this order",
      shareInfoText: "",
      emailForReceipt: "EMAIL FOR RECEIPT",
      emailPlaceholder: "mail@address.com",
      keepUpdated: "Keep me updated on special offers and sales",
      pay: "Pay",
      legalPrefix: "By clicking \"Pay\", you confirm that you have read and agree to the provisions of the ",
      legalConjunction: " and ",
      publicOfferLabel: "Public Offer",
      privacyPolicyLabel: "Privacy Policy",
      linkCopied: "Link copied",
      linkNotCopied: "Link not copied",
      loadingName: "Searching ...",
      userAvatarAltPrefix: "Player avatar",
      warningTitle: "Warning",
      differentIdWarning: "You switched to checkout for a different ID:",
      paymentProcessing: "Payment Processing",
      paymentPendingInfo: "Payment is usually processed instantly, but sometimes your bank needs a bit more time.\n\nIf you don’t receive your purchase within 24 hours, please contact our support team.",
      paymentSuccessful: "PAYMENT SUCCESSFUL",
      giftPaymentSuccessful: "Gift Payment Successful",
      transactionNumber: "Transaction Number",
      receiptSent: "A receipt has been sent to your email.",
      giftReceiptSent: "A receipt has been sent to your email.",
      refreshPage: "Refresh Page",
      backToStore: "Back to Store",
      recaptchaNoticePrefix: "This site is protected by reCAPTCHA Enterprise and the Google",
      recaptchaNoticeSuffix: "apply.",
      itemLabels: {
        singular: "item",
        few: "items",
        many: "items"
      }
    }
  };
  const REMOVE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 12"><path d="M.75 10.5c0 .825.675 1.5 1.5 1.5h4.5c.825 0 1.5-.675 1.5-1.5V3H.75zM8.25.75h-1.5L6.218.218A.76.76 0 0 0 5.692 0H3.309a.76.76 0 0 0-.525.218L2.25.75H.75A.75.75 0 0 0 0 1.5c0 .413.338.75.75.75h7.5c.412 0 .75-.337.75-.75a.75.75 0 0 0-.75-.75"></path></svg>';
  const SUCCESS_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="i7ucESx3"><path fill="currentColor" d="M9.205 15.254 6.37 12.42a.797.797 0 0 0-1.134 0 .797.797 0 0 0 0 1.133l3.393 3.393a.807.807 0 0 0 1.142 0l8.584-8.575a.797.797 0 0 0 0-1.134.797.797 0 0 0-1.134 0z"></path></svg>';
  const WARNING_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="BkKYFHcE"><circle cx="12" cy="12" r="10" fill="#F8A834"></circle><path fill="#0E1014" d="M11 6.5h2v7h-2zm0 8.75h2v2h-2z"></path></svg>';
  const ERROR_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="T7dnrVeM"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"></path></svg>';
  const CLOSE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="#fff" d="M1.75 1.75a.854.854 0 0 1 1.209 0l13.29 13.291a.855.855 0 0 1-1.207 1.209L1.75 2.959a.854.854 0 0 1 0-1.209"></path><path fill="#fff" d="M16.25 1.75a.854.854 0 0 0-1.209 0L1.751 15.042a.854.854 0 0 0 1.208 1.208l13.29-13.291a.854.854 0 0 0 0-1.209"></path></svg>';
  const PAYMENT_SUCCESS_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="app-payment-status-icon"><circle cx="32" cy="32" r="26" fill="#43CA67"></circle><path fill="#0E1014" d="m27.823 41.514-9.018-9.027 3.872-3.872 5.146 5.145 13.5-13.5 3.872 3.872z"></path></svg>';

  function ensureBasketRuntimeStyles() {
    if (document.getElementById("basket-runtime-styles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "basket-runtime-styles";
    style.textContent = `
      [data-payment-status-overlay][hidden] {
        display: none !important;
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

      .app-payment-status-content .HTe6PTUI {
        color: #868688;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 100;
        line-height: 100%;
        letter-spacing: 0.8px;
      }

      .app-payment-status-content .ddRXMzaW {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 0.8px;
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
        box-sizing: border-box;
        border: 3px solid rgba(255, 255, 255, 0.16);
        border-top-color: #f8a834;
        border-radius: 50%;
        animation: app-payment-status-spin 0.85s linear infinite;
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

  ensureBasketRuntimeStyles();

  const cartView = document.querySelector('[data-cart-view="cart"]');
  const checkoutView = document.querySelector('[data-cart-view="checkout"]');
  const itemsContainer = document.querySelector("[data-cart-items]");
  const emptyState = document.querySelector("[data-cart-empty]");
  const emptyTitle = document.querySelector("[data-cart-empty-title]");
  const emptyText = document.querySelector("[data-cart-empty-text]");
  const emptyAction = document.querySelector("[data-cart-empty-action]");
  const emptyCatalogButton = document.querySelector("[data-cart-empty-catalog]");
  const cartTitle = document.querySelector("[data-cart-title]");
  const cartTitleSection = cartTitle?.closest(".K97MEhUx");
  const discountLabel = document.querySelector("[data-cart-discount-label]");
  const discountValue = document.querySelector("[data-cart-discount-value]");
  const totalLabel = document.querySelector("[data-cart-total-label]");
  const totalValue = document.querySelector("[data-cart-total-value]");
  const cartSummary = document.querySelector("[data-cart-summary]");
  const cartSummaryColumn = cartSummary?.closest(".NPoX5pGl");
  const buySelfButton = document.querySelector("[data-cart-buy-self]");
  const buySelfLabel = document.querySelector("[data-cart-buy-self-label]");
  const buyGiftButton = document.querySelector("[data-cart-buy-gift]");
  const buyGiftLabel = document.querySelector("[data-cart-buy-gift-label]");
  const deleteConfirmModal = document.querySelector("[data-delete-confirm-modal]");
  const deleteConfirmTitle = document.querySelector("[data-delete-confirm-title]");
  const deleteConfirmText = document.querySelector("[data-delete-confirm-text]");
  const deleteConfirmAcceptButton = document.querySelector("[data-delete-confirm-accept]");
  const deleteConfirmAcceptLabel = document.querySelector("[data-delete-confirm-accept-label]");
  const deleteConfirmCloseButton = document.querySelector("[data-delete-confirm-close]");
  const deleteConfirmCloseLabel = document.querySelector("[data-delete-confirm-close-label]");
  const checkoutNotificationView = document.querySelector("[data-checkout-notification-view]");
  const checkoutNotifications = document.querySelector("[data-checkout-notifications]");
  const checkoutBackButton = document.querySelector("[data-checkout-back]");
  const checkoutBackLabel = document.querySelector("[data-checkout-back-label]");
  const checkoutCloseButton = document.querySelector("[data-checkout-close]");
  const checkoutCloseLabel = document.querySelector("[data-checkout-close-label]");
  const checkoutTitle = document.querySelector("[data-checkout-title]");
  const checkoutLoadingState = document.querySelector('[data-checkout-account-state="loading"]');
  const checkoutLoadingId = document.querySelector("[data-checkout-loading-id]");
  const checkoutLoadingName = document.querySelector("[data-checkout-loading-name]");
  const checkoutResolvedState = document.querySelector('[data-checkout-account-state="resolved"]');
  const checkoutUserAvatar = document.querySelector("[data-checkout-user-avatar]");
  const checkoutUserId = document.querySelector("[data-checkout-user-id]");
  const checkoutUserName = document.querySelector("[data-checkout-user-name]");
  const checkoutItems = document.querySelector("[data-checkout-items]");
  const checkoutForm = document.querySelector("[data-checkout-form]");
  const checkoutPaymentTitle = document.querySelector("[data-checkout-payment-title]");
  const checkoutEditLabel = document.querySelector("[data-checkout-edit-label]");
  const checkoutCardLabel = document.querySelector("[data-checkout-card-label]");
  const checkoutShareLabel = document.querySelector("[data-checkout-share-label]");
  const checkoutTooltipToggle = document.querySelector("[data-checkout-tooltip-toggle]");
  const checkoutTooltip = document.querySelector("[data-checkout-tooltip]");
  const checkoutTooltipTitle = document.querySelector("[data-checkout-tooltip-title]");
  const checkoutTooltipSubtitle = document.querySelector("[data-checkout-tooltip-subtitle]");
  const checkoutShareButton = document.querySelector("[data-checkout-share-button]");
  const checkoutEmailLabel = document.querySelector("[data-checkout-email-label]");
  const checkoutEmailInput = document.querySelector("[data-checkout-email]");
  const checkoutSubscribe = document.querySelector("[data-checkout-subscribe]");
  const checkoutSubscribeLabel = document.querySelector("[data-checkout-subscribe-label]");
  const checkoutCountLabel = document.querySelector("[data-checkout-count-label]");
  const checkoutTotalValue = document.querySelector("[data-checkout-total-value]");
  const checkoutPayLabel = document.querySelector("[data-checkout-pay-label]");
  const checkoutLegalPrefix = document.querySelector("[data-checkout-legal-prefix]");
  const checkoutOfferLink = document.querySelector("[data-checkout-offer-link]");
  const checkoutLegalConjunction = document.querySelector("[data-checkout-legal-conjunction]");
  const checkoutPrivacyLink = document.querySelector("[data-checkout-privacy-link]");

  const hasDeleteConfirm = Boolean(deleteConfirmModal && deleteConfirmTitle && deleteConfirmText && deleteConfirmAcceptButton && deleteConfirmAcceptLabel && deleteConfirmCloseButton && deleteConfirmCloseLabel);
  const hasCheckoutView = Boolean(
    cartView &&
    checkoutView &&
    checkoutNotificationView &&
    checkoutNotifications &&
    checkoutBackButton &&
    checkoutBackLabel &&
    checkoutCloseButton &&
    checkoutCloseLabel &&
    checkoutTitle &&
    checkoutLoadingState &&
    checkoutLoadingId &&
    checkoutLoadingName &&
    checkoutResolvedState &&
    checkoutUserAvatar &&
    checkoutUserId &&
    checkoutUserName &&
    checkoutItems &&
    checkoutForm &&
    checkoutPaymentTitle &&
    checkoutEditLabel &&
    checkoutCardLabel &&
    checkoutShareLabel &&
    checkoutTooltipToggle &&
    checkoutTooltip &&
    checkoutTooltipTitle &&
    checkoutTooltipSubtitle &&
    checkoutShareButton &&
    checkoutEmailLabel &&
    checkoutEmailInput &&
    checkoutSubscribe &&
    checkoutSubscribeLabel &&
    checkoutCountLabel &&
    checkoutTotalValue &&
    checkoutPayLabel &&
    checkoutLegalPrefix &&
    checkoutOfferLink &&
    checkoutLegalConjunction &&
    checkoutPrivacyLink
  );

  if (!itemsContainer || !emptyState || !emptyTitle || !emptyText || !emptyAction || !emptyCatalogButton || !cartTitle || !discountLabel || !discountValue || !totalLabel || !totalValue || !buySelfButton || !buySelfLabel || !buyGiftButton || !buyGiftLabel || !cartView || !hasCheckoutView) {
    return;
  }

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
      // Ignore storage failures for local previews.
    }
  }

  function removeStorageValue(key) {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Ignore storage failures for local previews.
    }
  }

  function readStorageJson(key, fallback) {
    const rawValue = readStorageValue(key);

    if (!rawValue) {
      return fallback;
    }

    try {
      return JSON.parse(rawValue);
    } catch {
      return fallback;
    }
  }

  function normalizeLanguage(language) {
    return LANGUAGE_CONFIG[language] ? language : "ru";
  }

  function getLanguageConfig(language = currentLanguage) {
    return LANGUAGE_CONFIG[normalizeLanguage(language)];
  }

  function getCartCopy(language = currentLanguage) {
    return CART_COPY[getLanguageConfig(language).contentLanguage];
  }

  function getLegalLinks(language = currentLanguage) {
    return LEGAL_LINKS[getLanguageConfig(language).contentLanguage];
  }

  function getProductDefinition(productId) {
    return PRODUCT_DEFINITIONS[productId] || null;
  }

  function normalizeUserEntry(entry) {
    if (!entry) {
      return null;
    }

    const id = String(entry.id ?? "").trim();
    const name = String(entry.name ?? "").trim();
    const avatar = String(entry.avatar ?? "").trim();

    if (!id || !name || !avatar) {
      return null;
    }

    return { id, name, avatar };
  }

  function readCurrentUser() {
    return normalizeUserEntry(readStorageJson(STORAGE_KEYS.currentUser, null));
  }

  function normalizeCount(value) {
    const parsed = Number.parseInt(String(value ?? "0"), 10);

    if (!Number.isFinite(parsed) || parsed < 0) {
      return 0;
    }

    return parsed;
  }

  function getProductCountLimit(productId) {
    const limit = getProductDefinition(productId)?.maxCount;

    return Number.isFinite(limit) ? limit : Number.POSITIVE_INFINITY;
  }

  function clampProductCount(productId, value) {
    return Math.min(normalizeCount(value), getProductCountLimit(productId));
  }

  function normalizeCartState(value) {
    if (!value || typeof value !== "object") {
      return {};
    }

    return Object.entries(value).reduce((result, [productId, count]) => {
      const definition = getProductDefinition(productId);
      const normalizedCount = clampProductCount(productId, count);

      if (definition && normalizedCount > 0) {
        result[productId] = normalizedCount;
      }

      return result;
    }, {});
  }

  function readCartState() {
    return normalizeCartState(readStorageJson(STORAGE_KEYS.cart, {}));
  }

  function persistCartState() {
    if (Object.keys(cartState).length === 0) {
      removeStorageValue(STORAGE_KEYS.cart);
      return;
    }

    writeStorageValue(STORAGE_KEYS.cart, JSON.stringify(cartState));
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("ru-RU").format(Math.max(0, Math.round(value))).replace(/\u00A0/g, " ");
  }

  function formatCurrency(value) {
    return `${formatNumber(value)} ₽`;
  }

  function formatDiscount(value) {
    return `-${formatNumber(value)} ₽`;
  }

  function getProductTitle(productId, language = currentLanguage) {
    const definition = getProductDefinition(productId);

    if (!definition) {
      return productId;
    }

    const contentLanguage = getLanguageConfig(language).contentLanguage;

    return definition.titles[contentLanguage] || definition.titles.ru;
  }

  function getProductImage(productId, language = currentLanguage) {
    const definition = getProductDefinition(productId);

    if (!definition) {
      return "";
    }

    if (definition.imageByContentLanguage) {
      const contentLanguage = getLanguageConfig(language).contentLanguage;
      return definition.imageByContentLanguage[contentLanguage] || definition.imageByContentLanguage.ru;
    }

    return definition.image;
  }

  function getEntriesFromState(state) {
    return Object.entries(normalizeCartState(state))
      .filter(([productId, count]) => getProductDefinition(productId) && clampProductCount(productId, count) > 0)
      .map(([productId, count]) => [productId, clampProductCount(productId, count)]);
  }

  function getCartEntries() {
    return getEntriesFromState(cartState);
  }

  function getTotalItemCount(state = cartState) {
    return getEntriesFromState(state).reduce((total, [, count]) => total + count, 0);
  }

  function getRemainingBpStock() {
    const usedUnits = getCartEntries().reduce((total, [productId, count]) => {
      return total + ((getProductDefinition(productId)?.bpUnits || 0) * count);
    }, 0);

    return Math.max(0, BASE_BP_STOCK - usedUnits);
  }

  function getStateTotals(state) {
    const entries = getEntriesFromState(state);
    const total = entries.reduce((sum, [productId, count]) => {
      return sum + ((getProductDefinition(productId)?.price || 0) * count);
    }, 0);
    const originalTotal = entries.reduce((sum, [productId, count]) => {
      const definition = getProductDefinition(productId);
      return sum + ((definition?.originalPrice || definition?.price || 0) * count);
    }, 0);

    return {
      entries,
      itemCount: entries.reduce((sum, [, count]) => sum + count, 0),
      total,
      originalTotal,
      discount: Math.max(0, originalTotal - total)
    };
  }

  function setProductCount(productId, nextCount) {
    const normalizedCount = clampProductCount(productId, nextCount);

    if (normalizedCount > 0) {
      cartState[productId] = normalizedCount;
    } else {
      delete cartState[productId];
    }

    persistCartState();
  }

  function syncCartBadge() {
    const totalItems = getTotalItemCount();

    document.querySelectorAll("[data-cart-badge]").forEach((badge) => {
      badge.hidden = totalItems < 1;
      badge.textContent = String(totalItems);
    });
  }

  function setScrollLocked(locked) {
    document.documentElement.style.overflow = locked ? "hidden" : "auto";
  }

  function syncDeleteConfirmCopy() {
    if (!hasDeleteConfirm) {
      return;
    }

    const cartCopy = getCartCopy();

    deleteConfirmTitle.textContent = cartCopy.removeConfirmTitle;
    deleteConfirmText.textContent = cartCopy.removeConfirmText;
    deleteConfirmAcceptLabel.textContent = cartCopy.removeConfirmAction;
    deleteConfirmCloseLabel.textContent = cartCopy.cancel;
  }

  function renderPriceMeta(definition, count) {
    if (!definition.originalPrice || !definition.discountPercent) {
      return "";
    }

    return `<p><span class="sSC0JdD_ J6LUMIJ3">${formatCurrency(definition.originalPrice * count)}</span> <span class="zaRA0MRf">${definition.discountPercent} %</span></p>`;
  }

  function renderCartItem(productId, count, remainingBpStock) {
    const definition = getProductDefinition(productId);
    const cartCopy = getCartCopy();
    const canIncrement = count < getProductCountLimit(productId);
    const leftToBuyMarkup = definition.showLeftToBuy
      ? `<p class="XlONObkb">${cartCopy.leftToBuy}&nbsp;${remainingBpStock}</p>`
      : "";
    const incrementDisabledAttribute = canIncrement ? "" : " disabled";

    return [
      `<div class="GwliMIrC" data-cart-item data-product-id="${productId}">`,
      '  <div class="PGTpjXBU">',
      '    <div class="hzlSu2an">',
      `      <div class="SNSLSTNY"><img class="p4B8x2G6" src="${getProductImage(productId)}" alt="CartItemImage"></div>`,
      '      <div class="OPlcbUWN b58kMexL">',
      '        <div class="OPlcbUWN OZpbqN3j gALeVP8p">',
      '          <div class="OPlcbUWN OZpbqN3j">',
      `            <p>${getProductTitle(productId)}</p>`,
      '            <p class="y5r7ut4n"></p>',
      '          </div>',
      `          <button type="button" class="p1KrGb3a I99moJsv Hcd0OswB _FRUTAnv r_fh20l8" data-cart-remove data-product-id="${productId}">${REMOVE_ICON}</button>`,
      '        </div>',
      '        <div class="OPlcbUWN OZpbqN3j EhztG4va">',
      `          <p class="hV_2lDdB">${formatCurrency(definition.price * count)}</p>`,
      `          ${renderPriceMeta(definition, count)}`,
      '        </div>',
      '      </div>',
      '      <div class="OPlcbUWN OZpbqN3j Un9WsTbT" style="gap: 4px;">',
      '        <div class="OPlcbUWN OZpbqN3j RDeWLscL" style="width: auto; gap: 8px;">',
      '          <div class="UDnuy5ts dTObEO13 uG9tPRPj">',
      `            <button type="button" class="crFgKmrM EdC20Ny3 dTObEO13" data-cart-action="decrement" data-product-id="${productId}"><div></div></button>`,
      `            <div class="X4GWOKdN rgYtKpKv dTObEO13">${count}</div>`,
      `            <button type="button" class="crFgKmrM oGQOeXJZ dTObEO13" data-cart-action="increment" data-product-id="${productId}"${incrementDisabledAttribute}><div></div></button>`,
      '          </div>',
      `          ${leftToBuyMarkup}`,
      `          <button type="button" class="p1KrGb3a I99moJsv LrAJcY3r CkAgU2id" data-cart-line-buy><div class="OPlcbUWN F_GdC3qL OZpbqN3j NE2K7NGD">${cartCopy.buy}</div></button>`,
      '        </div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("\n");
  }

  function renderCheckoutItem(productId, count) {
    return [
      '<li class="A8Xf3FLc">',
      '  <div class="lPNKwGZy">',
      '    <div class="muaHK1tQ">',
      `      <div class="BvJ7lCq_"><img class="Mfq3EI1B" src="${getProductImage(productId)}" alt=""></div>`,
      '      <div class="uiqDVck8">',
      `        <p class="iMONZEda">${getProductTitle(productId)}</p>`,
      `        <p class="Qt1ZNfZW">${formatCurrency((getProductDefinition(productId)?.price || 0) * count)}</p>`,
      '      </div>',
      '    </div>',
      `    <p class="FW4ICnZy">x${count}</p>`,
      '  </div>',
      '</li>'
    ].join("\n");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getItemCountNoun(count, language = currentLanguage) {
    const itemLabels = getCartCopy(language).itemLabels;

    if (getLanguageConfig(language).contentLanguage !== "ru") {
      return count === 1 ? itemLabels.singular : itemLabels.many;
    }

    const lastTwoDigits = count % 100;
    const lastDigit = count % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return itemLabels.many;
    }

    if (lastDigit === 1) {
      return itemLabels.singular;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return itemLabels.few;
    }

    return itemLabels.many;
  }

  function formatItemCountLabel(count, language = currentLanguage) {
    return `${count} ${getItemCountNoun(count, language)}`;
  }

  function encodeCheckoutSelection(selection) {
    return getEntriesFromState(selection)
      .map(([productId, count]) => `${encodeURIComponent(productId)}:${count}`)
      .join(",");
  }

  function decodeCheckoutSelection(value) {
    if (!value) {
      return {};
    }

    return String(value)
      .split(",")
      .reduce((result, entry) => {
        const [encodedProductId, rawCount] = entry.split(":");
        const productId = decodeURIComponent(encodedProductId || "");
        const count = clampProductCount(productId, rawCount);

        if (getProductDefinition(productId) && count > 0) {
          result[productId] = count;
        }

        return result;
      }, {});
  }

  function clearCheckoutParams(url) {
    url.searchParams.delete("view");
    url.searchParams.delete("selection");
    url.searchParams.delete("accountId");
    url.searchParams.delete("accountName");
    url.searchParams.delete("accountAvatar");
  }

  function buildCheckoutUrl(selection, user) {
    const url = new URL(window.location.href);

    clearCheckoutParams(url);
    url.searchParams.set("view", "checkout");

    const encodedSelection = encodeCheckoutSelection(selection);

    if (encodedSelection) {
      url.searchParams.set("selection", encodedSelection);
    }

    if (user) {
      url.searchParams.set("accountId", user.id);
      url.searchParams.set("accountName", user.name);
      url.searchParams.set("accountAvatar", user.avatar);
    }

    return url;
  }

  function readCheckoutRouteState() {
    const url = new URL(window.location.href);

    if (url.searchParams.get("view") !== "checkout") {
      return null;
    }

    const selection = normalizeCartState(decodeCheckoutSelection(url.searchParams.get("selection")));
    const routeUser = normalizeUserEntry({
      id: url.searchParams.get("accountId"),
      name: url.searchParams.get("accountName"),
      avatar: url.searchParams.get("accountAvatar")
    });
    const user = routeUser || readCurrentUser();

    if (Object.keys(selection).length === 0 || !user) {
      return null;
    }

    return { selection, user };
  }

  function updateHistoryForCart(options = {}) {
    const { replace = false } = options;
    const url = new URL(window.location.href);

    clearCheckoutParams(url);
    window.history[replace ? "replaceState" : "pushState"]({ appBasketView: "cart" }, "", url);
  }

  function updateHistoryForCheckout(selection, user, options = {}) {
    const { replace = false } = options;
    const url = buildCheckoutUrl(selection, user);

    window.history[replace ? "replaceState" : "pushState"]({ appBasketView: "checkout" }, "", url);
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

  let currentLanguage = normalizeLanguage(readStorageValue(STORAGE_KEYS.language));
  let cartState = readCartState();
  let deleteConfirmOpen = false;
  let pendingRemovalProductId = "";
  let lastRemoveTrigger = null;
  let activeView = "cart";
  let activeCheckoutSelection = {};
  let activeCheckoutUser = null;
  let pendingCheckoutSelection = null;
  let checkoutLoadingTimerId = null;
  let paymentStatusOverlayRefs = null;
  let paymentStatusTimerId = null;

  function clearCheckoutLoadingTimer() {
    if (checkoutLoadingTimerId === null) {
      return;
    }

    window.clearTimeout(checkoutLoadingTimerId);
    checkoutLoadingTimerId = null;
  }

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
    syncDeleteConfirmCopy();
    setPopupOpenState(deleteConfirmModal, true);
    setScrollLocked(true);

    window.requestAnimationFrame(() => {
      deleteConfirmAcceptButton.focus();
    });
  }

  function closeCheckoutTooltip() {
    checkoutTooltip.hidden = true;
    checkoutTooltipToggle.setAttribute("aria-expanded", "false");
  }

  function openCheckoutTooltip() {
    checkoutTooltip.hidden = false;
    checkoutTooltipToggle.setAttribute("aria-expanded", "true");
  }

  function toggleCheckoutTooltip(force) {
    const shouldOpen = typeof force === "boolean" ? force : checkoutTooltip.hidden;

    if (shouldOpen) {
      openCheckoutTooltip();
      return;
    }

    closeCheckoutTooltip();
  }

  function setCheckoutLoadingState(user) {
    clearCheckoutLoadingTimer();
    checkoutLoadingId.textContent = `ID ${user.id}`;
    checkoutLoadingName.textContent = getCartCopy().loadingName;
    checkoutLoadingState.hidden = false;
    checkoutResolvedState.hidden = true;

    checkoutLoadingTimerId = window.setTimeout(() => {
      checkoutLoadingTimerId = null;
      checkoutUserAvatar.src = user.avatar;
      checkoutUserAvatar.alt = `${getCartCopy().userAvatarAltPrefix} ${user.name}`;
      checkoutUserId.textContent = `ID ${user.id}`;
      checkoutUserName.textContent = user.name;
      checkoutLoadingState.hidden = true;
      checkoutResolvedState.hidden = false;
    }, CHECKOUT_LOADING_DELAY_MS);
  }

  function syncCheckoutCopy() {
    currentLanguage = normalizeLanguage(readStorageValue(STORAGE_KEYS.language));

    const cartCopy = getCartCopy();
    const legalLinks = getLegalLinks();

    checkoutBackLabel.textContent = cartCopy.checkoutBack;
    checkoutCloseLabel.textContent = cartCopy.checkoutClose;
    checkoutTitle.textContent = cartCopy.checkoutTitle;
    checkoutPaymentTitle.textContent = cartCopy.paymentMethod;
    checkoutEditLabel.textContent = cartCopy.edit;
    checkoutCardLabel.textContent = cartCopy.newCard;
    checkoutShareLabel.textContent = cartCopy.sharePaymentLink;
    checkoutTooltipTitle.textContent = cartCopy.shareInfoTitle;
    checkoutTooltipSubtitle.textContent = cartCopy.shareInfoText;
    checkoutTooltipSubtitle.hidden = !cartCopy.shareInfoText;
    checkoutEmailLabel.textContent = cartCopy.emailForReceipt;
    checkoutEmailInput.placeholder = cartCopy.emailPlaceholder;
    checkoutSubscribeLabel.textContent = cartCopy.keepUpdated;
    checkoutPayLabel.textContent = cartCopy.pay;
    checkoutLegalPrefix.textContent = cartCopy.legalPrefix;
    checkoutLegalConjunction.textContent = cartCopy.legalConjunction;
    checkoutOfferLink.textContent = cartCopy.publicOfferLabel;
    checkoutOfferLink.href = legalLinks.offerHref;
    checkoutPrivacyLink.textContent = cartCopy.privacyPolicyLabel;
    checkoutPrivacyLink.href = legalLinks.privacyHref;

    if (!checkoutLoadingState.hidden && activeCheckoutUser) {
      checkoutLoadingId.textContent = `ID ${activeCheckoutUser.id}`;
      checkoutLoadingName.textContent = cartCopy.loadingName;
    }

    if (!checkoutResolvedState.hidden && activeCheckoutUser) {
      checkoutUserAvatar.alt = `${cartCopy.userAvatarAltPrefix} ${activeCheckoutUser.name}`;
    }
  }

  function renderCheckoutSummary() {
    const totals = getStateTotals(activeCheckoutSelection);

    checkoutCountLabel.textContent = formatItemCountLabel(totals.itemCount);
    checkoutTotalValue.textContent = formatCurrency(totals.total);
  }

  function renderCheckoutItems() {
    const entries = getEntriesFromState(activeCheckoutSelection);

    checkoutItems.innerHTML = entries.map(([productId, count]) => renderCheckoutItem(productId, count)).join("\n");
    renderCheckoutSummary();
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

      if (checkoutNotifications.children.length === 0) {
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

    if (status === "error") {
      return {
        statusClass: "qM1TrGRC",
        icon: ERROR_ICON
      };
    }

    return {
      statusClass: "gX0pMvYB",
      icon: SUCCESS_ICON
    };
  }

  function pushCheckoutNotification(options) {
    const { title, text = "", status = "success", dismissible = false } = options;
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
    }, CHECKOUT_NOTIFICATION_DURATION_MS);
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
      const textarea = document.createElement("textarea");

      textarea.value = text;
      textarea.setAttribute("readonly", "readonly");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      textarea.style.left = "-9999px";
      document.body.append(textarea);
      textarea.select();

      try {
        const copied = document.execCommand("copy");

        document.body.removeChild(textarea);

        if (!copied) {
          reject(new Error("copy-failed"));
          return;
        }

        resolve();
      } catch (error) {
        document.body.removeChild(textarea);
        reject(error);
      }
    });
  }

  function clearPaymentStatusTimer() {
    if (paymentStatusTimerId === null) {
      return;
    }

    window.clearTimeout(paymentStatusTimerId);
    paymentStatusTimerId = null;
  }

  function formatPaymentStatusMultilineText(value) {
    return escapeHtml(value).replace(/\n/g, "<br>");
  }

  function renderPaymentStatusLegal(cartCopy, legalLinks) {
    const conjunction = escapeHtml(cartCopy.legalConjunction.trim() || "and");

    return [
      `<p class="J6snVAZE"><a href="${escapeHtml(legalLinks.offerHref)}" target="_blank" rel="noopener noreferrer" class="Hx4Ri1ei">${escapeHtml(cartCopy.publicOfferLabel)}</a> ${conjunction} <a href="${escapeHtml(legalLinks.privacyHref)}" target="_blank" rel="noopener noreferrer" class="Hx4Ri1ei">${escapeHtml(cartCopy.privacyPolicyLabel)}</a></p>`,
      "<br>",
      `<p class="J6snVAZE">${escapeHtml(cartCopy.recaptchaNoticePrefix)} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> ${conjunction} <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> ${escapeHtml(cartCopy.recaptchaNoticeSuffix)}</p>`
    ].join("");
  }

  function createPaymentStatusButton(label, onClick, type = "primary") {
    const button = document.createElement("button");

    button.type = "button";
    button.className = `p1KrGb3a ${type === "secondary" ? "I99moJsv" : "dVZlJ3Vu"} LrAJcY3r app-payment-status-button`;
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
      cartCopy,
      transactionNumber,
      onPrimaryAction,
      onLogoAction,
      receiptText,
      title
    } = options;
    const refs = ensurePaymentStatusOverlay();

    refs.head.dataset.status = status;

    refs.head.innerHTML = status === "pending"
      ? [
        '<div class="F4IVBuCn app-payment-status-spinner" aria-hidden="true"></div>',
        `<h2 class="JmVtaL7l">${escapeHtml(cartCopy.paymentProcessing)}</h2>`
      ].join("")
      : [
        `<div style="width: 48px;">${PAYMENT_SUCCESS_ICON}</div>`,
        `<h2 class="JmVtaL7l">${escapeHtml(title)}</h2>`
      ].join("");

    refs.details.innerHTML = status === "pending"
      ? [
        '<hr class="xT_YAdsx">',
        `<p class="Ou4Ev7zb">${formatPaymentStatusMultilineText(cartCopy.paymentPendingInfo)}</p>`
      ].join("")
      : [
        '<div class="R9VGdXSy">',
        `  <p class="HTe6PTUI">${escapeHtml(cartCopy.transactionNumber)}</p>`,
        `  <p class="ddRXMzaW">${escapeHtml(transactionNumber)}</p>`,
        '</div>',
        '<hr class="xT_YAdsx">',
        `<p class="Ou4Ev7zb">${formatPaymentStatusMultilineText(receiptText)}</p>`
      ].join("\n");

    refs.legal.innerHTML = renderPaymentStatusLegal(cartCopy, getLegalLinks());
    refs.actions.innerHTML = "";
    refs.actions.append(createPaymentStatusButton(
      status === "pending" ? cartCopy.refreshPage : cartCopy.backToStore,
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

  function maybeShowDifferentIdCheckoutWarning() {
    const currentUser = readCurrentUser();

    if (!currentUser || !activeCheckoutUser || currentUser.id === activeCheckoutUser.id) {
      return;
    }

    const cartCopy = getCartCopy();

    pushCheckoutNotification({
      title: cartCopy.warningTitle,
      text: `${cartCopy.differentIdWarning} ${activeCheckoutUser.id}`,
      status: "warning",
      dismissible: true
    });
  }

  function showCheckoutPaymentFlow() {
    if (!checkoutEmailInput.reportValidity()) {
      return;
    }

    const cartCopy = getCartCopy();
    const transactionNumber = generateTransactionNumber();

    clearPaymentStatusTimer();
    closeCheckoutTooltip();
    setPaymentStatusOverlayVisible(true);

    const returnToStore = () => {
      setPaymentStatusOverlayVisible(false);
      window.location.href = "./index.html";
    };

    const finishPayment = () => {
      clearPaymentStatusTimer();
      cartState = {};
      persistCartState();
      renderCartPage();
      openCartView({ syncUrl: true, replaceHistory: true });
      renderPaymentStatusState({
        status: "succeeded",
        cartCopy,
        title: cartCopy.paymentSuccessful,
        receiptText: cartCopy.receiptSent,
        transactionNumber,
        onPrimaryAction: returnToStore,
        onLogoAction: returnToStore
      });
    };

    renderPaymentStatusState({
      status: "pending",
      cartCopy,
      title: cartCopy.paymentProcessing,
      receiptText: cartCopy.paymentPendingInfo,
      transactionNumber,
      onPrimaryAction: finishPayment,
      onLogoAction: null
    });

    paymentStatusTimerId = window.setTimeout(finishPayment, PAYMENT_STATUS_PENDING_DELAY_MS);
  }

  function requestCheckoutLogin(selection) {
    pendingCheckoutSelection = normalizeCartState(selection);
    document.dispatchEvent(new CustomEvent("app:requestauthlogin", {
      detail: {
        trigger: document.querySelector("[data-login-toggle]") || null
      }
    }));

    if (!document.documentElement.dataset.authReady) {
      const authModal = document.querySelector('[data-auth-modal="login"]');
      if (authModal && authModal.hidden) {
        setPopupOpenState(authModal, true);
        document.documentElement.style.overflow = "hidden";
        console.warn("[basket] auth flow not initialized — opened auth modal directly");
      }
    }
  }

  function openCartView(options = {}) {
    const { syncUrl = true, replaceHistory = false } = options;

    clearCheckoutLoadingTimer();
    closeCheckoutTooltip();
    activeCheckoutSelection = {};
    activeCheckoutUser = null;
    cartView.hidden = false;
    checkoutView.hidden = true;
    activeView = "cart";

    if (syncUrl) {
      updateHistoryForCart({ replace: replaceHistory });
    }
  }

  function openCheckoutView(selection, options = {}) {
    const { user = null, syncUrl = true, replaceHistory = false } = options;
    const normalizedSelection = normalizeCartState(selection);
    const checkoutUser = normalizeUserEntry(user) || readCurrentUser();

    if (Object.keys(normalizedSelection).length === 0) {
      openCartView({ syncUrl, replaceHistory });
      return;
    }

    if (!checkoutUser) {
      requestCheckoutLogin(normalizedSelection);
      return;
    }

    pendingCheckoutSelection = null;
    activeCheckoutSelection = normalizedSelection;
    activeCheckoutUser = checkoutUser;

    closeDeleteConfirm({ restoreFocus: false });
    closeCheckoutTooltip();
    syncCheckoutCopy();
    renderCheckoutItems();
    cartView.hidden = true;
    checkoutView.hidden = false;
    activeView = "checkout";
    setCheckoutLoadingState(checkoutUser);
    maybeShowDifferentIdCheckoutWarning();
    window.scrollTo({ top: 0, behavior: "auto" });

    if (syncUrl) {
      updateHistoryForCheckout(normalizedSelection, checkoutUser, { replace: replaceHistory });
    }
  }

  function syncViewFromLocation() {
    const routeCheckoutState = readCheckoutRouteState();

    if (routeCheckoutState) {
      openCheckoutView(routeCheckoutState.selection, {
        user: routeCheckoutState.user,
        syncUrl: false,
        replaceHistory: true
      });
      return;
    }

    openCartView({ syncUrl: false });
  }

  function renderCartPage() {
    currentLanguage = normalizeLanguage(readStorageValue(STORAGE_KEYS.language));
    cartState = readCartState();

    const cartCopy = getCartCopy();
    const cartTotals = getStateTotals(cartState);
    const remainingBpStock = getRemainingBpStock();

    cartTitle.textContent = cartCopy.title;
    emptyTitle.textContent = cartCopy.emptyTitle;
    emptyText.textContent = cartCopy.emptyText;
    emptyAction.textContent = cartCopy.emptyAction;
    discountLabel.textContent = cartCopy.discount;
    totalLabel.textContent = cartCopy.total;
    buySelfLabel.textContent = cartCopy.buyForSelf;
    buyGiftLabel.textContent = cartCopy.buyAsGift;
    discountValue.textContent = formatDiscount(cartTotals.discount);
    totalValue.textContent = formatCurrency(cartTotals.total);
    syncDeleteConfirmCopy();

    if (cartView) {
      cartView.dataset.cartState = cartTotals.entries.length === 0 ? "empty" : "filled";
    }

    if (cartTitleSection) {
      cartTitleSection.hidden = cartTotals.entries.length === 0;
    }

    if (cartSummaryColumn) {
      cartSummaryColumn.hidden = cartTotals.entries.length === 0;
    }

    if (cartTotals.entries.length === 0) {
      itemsContainer.innerHTML = "";
      itemsContainer.hidden = true;
      emptyState.hidden = false;
      buySelfButton.disabled = true;
      buyGiftButton.disabled = true;
    } else {
      itemsContainer.hidden = false;
      itemsContainer.innerHTML = cartTotals.entries.map(([productId, count]) => renderCartItem(productId, count, remainingBpStock)).join("\n");
      emptyState.hidden = true;
      buySelfButton.disabled = false;
      buyGiftButton.disabled = false;
    }

    if (pendingRemovalProductId && !cartState[pendingRemovalProductId]) {
      closeDeleteConfirm({ restoreFocus: false });
    }

    syncCartBadge();
  }

  itemsContainer.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-cart-remove]");

    if (removeButton && itemsContainer.contains(removeButton)) {
      event.preventDefault();
      openDeleteConfirm(removeButton.dataset.productId, removeButton);
      return;
    }

    const actionButton = event.target.closest("[data-cart-action]");

    if (actionButton && itemsContainer.contains(actionButton)) {
      event.preventDefault();

      if (actionButton.disabled) {
        return;
      }

      const productId = actionButton.dataset.productId;
      const currentCount = clampProductCount(productId, cartState[productId] || 0);

      if (actionButton.dataset.cartAction === "increment") {
        setProductCount(productId, currentCount + 1);
      }

      if (actionButton.dataset.cartAction === "decrement") {
        if (currentCount <= 1) {
          openDeleteConfirm(productId, actionButton);
          return;
        }

        setProductCount(productId, currentCount - 1);
      }

      renderCartPage();
      return;
    }

    const buyButton = event.target.closest("[data-cart-line-buy]");

    if (buyButton && itemsContainer.contains(buyButton)) {
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

  buySelfButton.addEventListener("click", (event) => {
    event.preventDefault();
    openCheckoutView(cartState);
  });

  buyGiftButton.addEventListener("click", (event) => {
    if (buyGiftButton.disabled) {
      event.preventDefault();
    }
  });

  emptyCatalogButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "./index.html";
  });

  checkoutBackButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (window.history.state?.appBasketView === "checkout") {
      window.history.back();
      return;
    }

    openCartView({ syncUrl: true, replaceHistory: true });
  });

  checkoutCloseButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "./index.html";
  });

  checkoutTooltipToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleCheckoutTooltip();
  });

  checkoutShareButton.addEventListener("click", async (event) => {
    event.preventDefault();
    closeCheckoutTooltip();

    if (!activeCheckoutUser || Object.keys(activeCheckoutSelection).length === 0) {
      return;
    }

    const cartCopy = getCartCopy();
    const checkoutUrl = buildCheckoutUrl(activeCheckoutSelection, activeCheckoutUser).href;

    try {
      await copyTextToClipboard(checkoutUrl);
      pushCheckoutNotification({
        title: cartCopy.linkCopied,
        text: "Отправьте её тому, кто будет оплачивать",
        status: "success"
      });
    } catch {
      pushCheckoutNotification({
        title: cartCopy.linkNotCopied,
        status: "error"
      });
    }
  });

  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showCheckoutPaymentFlow();
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

  document.addEventListener("click", (event) => {
    if (!event.defaultPrevented) {
      const promoTrigger = event.target.closest("[data-promo-open]");

      if (promoTrigger) {
        event.preventDefault();
        document.dispatchEvent(new CustomEvent("app:requestpromoopen", {
          detail: {
            trigger: promoTrigger
          }
        }));
        return;
      }

      const authTrigger = event.target.closest('[data-open-auth="login"]');

      if (authTrigger) {
        event.preventDefault();
        document.dispatchEvent(new CustomEvent("app:requestauthlogin", {
          detail: {
            trigger: document.querySelector("[data-login-toggle]") || authTrigger
          }
        }));
        return;
      }

      const languageTrigger = event.target.closest('[data-menu-action="language"]');

      if (languageTrigger) {
        event.preventDefault();
        document.dispatchEvent(new CustomEvent("app:requestlanguagemodal", {
          detail: {
            trigger: document.querySelector("[data-login-toggle]") || languageTrigger
          }
        }));
        return;
      }
    }

    if (checkoutTooltip.hidden) {
      return;
    }

    const tooltipHost = event.target.closest(".IQK1ift1");

    if (!tooltipHost || !tooltipHost.contains(checkoutTooltipToggle)) {
      closeCheckoutTooltip();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && deleteConfirmOpen) {
      closeDeleteConfirm();
      return;
    }

    if (event.key === "Escape" && !checkoutTooltip.hidden) {
      closeCheckoutTooltip();
    }
  });

  document.addEventListener("app:authchange", (event) => {
    const authenticatedUser = normalizeUserEntry(event.detail?.user);

    if (pendingCheckoutSelection && authenticatedUser) {
      const deferredSelection = { ...pendingCheckoutSelection };

      window.requestAnimationFrame(() => {
        openCheckoutView(deferredSelection, {
          user: authenticatedUser,
          syncUrl: true,
          replaceHistory: false
        });
      });
    }
  });

  document.addEventListener("app:authmodalclose", () => {
    if (!activeCheckoutUser) {
      pendingCheckoutSelection = null;
    }
  });

  document.addEventListener("app:languagechange", () => {
    renderCartPage();

    if (activeView === "checkout") {
      syncCheckoutCopy();
      renderCheckoutItems();
    }
  });

  window.addEventListener("storage", () => {
    renderCartPage();

    if (activeView === "checkout") {
      syncCheckoutCopy();
      renderCheckoutItems();
    }
  });

  window.addEventListener("popstate", () => {
    syncViewFromLocation();
  });

  renderCartPage();
  syncViewFromLocation();
})();