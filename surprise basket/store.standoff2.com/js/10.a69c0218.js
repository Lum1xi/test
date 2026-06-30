! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "584f7ba4-b68f-4651-ae8a-fa81c46a37de", e._sentryDebugIdIdentifier = "sentry-dbid-584f7ba4-b68f-4651-ae8a-fa81c46a37de")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "f3f7d536e768d3c4b9c47900d544f22686f7ebca"
}, (self.webpackChunkstore_2_0 = self.webpackChunkstore_2_0 || []).push([
    [10], {
        9197(e, a, t) {
            t.d(a, {
                A: () => o
            });
            const o = {
                MainPageContainer: "tbfExz62",
                desktop: "iTA4ReIh",
                smallDesktop: "UYr9uO_S",
                MainPage: "vDRGSWUU",
                mobile: "XLNCl1PW",
                document: "kaJ70l88",
                tabletBackground: "KhzGsm7k",
                MainPageWrapper: "EwynBwXS",
                Loader: "pPwVVX_k"
            };
            var n, s;
            n = '{"MainPageContainer":"tbfExz62","desktop":"iTA4ReIh","smallDesktop":"UYr9uO_S","MainPage":"vDRGSWUU","mobile":"XLNCl1PW","document":"kaJ70l88","tabletBackground":"KhzGsm7k","MainPageWrapper":"EwynBwXS","Loader":"pPwVVX_k"}', s = t(9140)(e.id, {}), e.hot.data && e.hot.data.value && e.hot.data.value !== n ? e.hot.invalidate() : e.hot.accept(), e.hot.dispose(function(e) {
                e.value = n, s()
            })
        },
        5797(e, a, t) {
            t.r(a), t.d(a, {
                default: () => P
            });
            var o = t(4848),
                n = t(5694),
                s = t(5564),
                i = t(3443),
                d = t(6540),
                l = t(5892),
                r = t(3433),
                c = t(4164),
                f = t(9592),
                p = t(5431),
                u = t(2467),
                g = t(7310),
                b = t(681),
                m = t(9603),
                _ = t(4813),
                h = t(4015),
                E = t(9197);
            const P = (0, i.PA)(() => {
                const {
                    isDesktop: e,
                    isMiddleDesktop: a,
                    isSmallDesktop: t,
                    isMobileVersionWithTablet: i,
                    isTablet: P,
                    isDesktopVersion: I
                } = l.U6.deviceScreenResolutionControl, A = (0, r.LG)(), k = _.y3.getCommerceEngine(m.Oy.routerControls.commerceEngineInstance), {
                    uid: O
                } = k.authentification, {
                    components: w,
                    showGroupComponents: y
                } = m.Oy.componentsControl;
                return (0, d.useEffect)(() => {
                    m.Oy.routerControls.commerceEngineInstance = A ? .commerceEngineInstance, s.Fg.pageShow({
                        products: k.products
                    }), y(["FOOTER", "MOBILE_HEADER", "MOBILE_NAVBAR"])
                }, []), (0, d.useEffect)(() => {
                    k.products ? .data || k.products.fetchData(O)
                }, [n.d ? .data]), (0, d.useEffect)(() => {
                    const e = (0, h.a)("GIFT_INFO_POPUP_HAS_BEEN_SHOWN", !1, "MainPage");
                    k.authentification.isLoggedIn && !e && n.d ? .data ? .images ? .giftPopUpImage && (m.Oy.popupControl.addPopup("GIFT_INFO_POPUP"), localStorage.setItem("GIFT_INFO_POPUP_HAS_BEEN_SHOWN", "true"))
                }, [n.d ? .data ? .images ? .giftPopUpImage]), (0, o.jsxs)(b._, {
                    children: [I && (0, o.jsx)(u.QI, {}), w.get("MOBILE_NAVBAR") && i && (0, o.jsx)(u.id, {}), (0, o.jsxs)("div", {
                        className: (0, c.A)(E.A.MainPageContainer, {
                            [E.A.desktop]: e,
                            [E.A.smallDesktop]: t || a,
                            [E.A.tablet]: P,
                            [E.A.mobile]: i
                        }),
                        children: [(0, o.jsx)(f.m, {
                            verticalCenter: !0,
                            isColumn: !0,
                            width: "100%",
                            className: (0, c.A)(E.A.MainPage, {
                                [E.A.mobile]: i
                            }),
                            children: (0, o.jsx)(f.m, {
                                className: E.A.MainPageWrapper,
                                children: (0, o.jsx)(r.sv, {})
                            })
                        }), w.get("FOOTER") && (0, o.jsx)(p.w, {}), w.get("MOBILE_NAVBAR") && (0, o.jsx)(g.nx, {})]
                    })]
                })
            })
        }
    }
]);
//# sourceMappingURL=10.a69c0218.js.map