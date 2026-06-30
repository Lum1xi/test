! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a9abd7e8-0bf9-40d9-966e-cdf3770365c5", e._sentryDebugIdIdentifier = "sentry-dbid-a9abd7e8-0bf9-40d9-966e-cdf3770365c5")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "f3f7d536e768d3c4b9c47900d544f22686f7ebca"
}, (self.webpackChunkstore_2_0 = self.webpackChunkstore_2_0 || []).push([
    [7], {
        626(e, t, i) {
            i.d(t, {
                A: () => a
            });
            const a = {
                GiftMobileCartMinifiedWrapper: "kwLi9i_X",
                GiftMobileCartMinified: "z83RqUNW",
                slideUp: "MgXPNCR3",
                GiftMobileCartMinifiedContainer: "DWyQIy_m",
                textWrapper: "IFjuiRnV",
                textContainer: "jde1zoOu",
                bold: "pETXzBAk",
                styledCircle: "AZgSRRcz",
                giftButton: "Jq12HQJg"
            };
            var n, o;
            n = '{"GiftMobileCartMinifiedWrapper":"kwLi9i_X","GiftMobileCartMinified":"z83RqUNW","slideUp":"MgXPNCR3","GiftMobileCartMinifiedContainer":"DWyQIy_m","textWrapper":"IFjuiRnV","textContainer":"jde1zoOu","bold":"pETXzBAk","styledCircle":"AZgSRRcz","giftButton":"Jq12HQJg"}', o = i(9140)(e.id, {}), e.hot.data && e.hot.data.value && e.hot.data.value !== n ? e.hot.invalidate() : e.hot.accept(), e.hot.dispose(function(e) {
                e.value = n, o()
            })
        },
        6238(e, t, i) {
            i.d(t, {
                A: () => a
            });
            const a = {
                MobilegiftPage: "MdPt3pM1",
                GiftPageContainer: "AgS5wQWJ",
                giftHeaderWrapper: "oofcZA4j",
                giftProductsTabbar: "MuSoMxjd",
                giftNavigationPanel: "VmMyj2HR",
                giftUserId: "zGqi6HBg",
                GiftPage: "JDuvR9l7",
                mobile: "NOYMRcVK",
                document: "AMmnMa89",
                tabletBackground: "OylLZjhq",
                GiftPageWrapper: "y_r1aLRy",
                Loader: "FPlFSoSs"
            };
            var n, o;
            n = '{"MobilegiftPage":"MdPt3pM1","GiftPageContainer":"AgS5wQWJ","giftHeaderWrapper":"oofcZA4j","giftProductsTabbar":"MuSoMxjd","giftNavigationPanel":"VmMyj2HR","giftUserId":"zGqi6HBg","GiftPage":"JDuvR9l7","mobile":"NOYMRcVK","document":"AMmnMa89","tabletBackground":"OylLZjhq","GiftPageWrapper":"y_r1aLRy","Loader":"FPlFSoSs"}', o = i(9140)(e.id, {}), e.hot.data && e.hot.data.value && e.hot.data.value !== n ? e.hot.invalidate() : e.hot.accept(), e.hot.dispose(function(e) {
                e.value = n, o()
            })
        },
        7940(e, t, i) {
            i.d(t, {
                A: () => a
            });
            const a = {
                MainPageContainer: "Lt1JTXXP",
                desktop: "iXap5f2R",
                smallDesktop: "MwXqCbWO",
                MainPage: "B6SwWqNs",
                giftUserId: "SWD8i8Ku",
                isSmallDesktop: "q08rpYZo",
                Title: "zumGLd4L",
                mobile: "Z_VIHpMn",
                document: "L9lDe9Gf",
                tabletBackground: "OZ0CkczL",
                MainPageWrapper: "UmIKW7qK",
                Loader: "Wl0IwPCV"
            };
            var n, o;
            n = '{"MainPageContainer":"Lt1JTXXP","desktop":"iXap5f2R","smallDesktop":"MwXqCbWO","MainPage":"B6SwWqNs","giftUserId":"SWD8i8Ku","isSmallDesktop":"q08rpYZo","Title":"zumGLd4L","mobile":"Z_VIHpMn","document":"L9lDe9Gf","tabletBackground":"OZ0CkczL","MainPageWrapper":"UmIKW7qK","Loader":"Wl0IwPCV"}', o = i(9140)(e.id, {}), e.hot.data && e.hot.data.value && e.hot.data.value !== n ? e.hot.invalidate() : e.hot.accept(), e.hot.dispose(function(e) {
                e.value = n, o()
            })
        },
        9342(e, t, i) {
            i.r(t), i.d(t, {
                default: () => W
            });
            var a = i(4848),
                n = i(3443),
                o = i(5892),
                s = i(5694),
                r = i(681),
                l = i(6540),
                c = i(4813),
                d = i(3433),
                g = i(4164),
                u = i(9592),
                f = i(5431),
                m = i(2467),
                p = i(7310),
                b = i(9603),
                C = i(5564),
                h = i(5361),
                M = i(2389),
                A = i(7940);
            const P = (0, n.PA)(() => {
                const {
                    isDesktop: e,
                    isMiddleDesktop: t,
                    isSmallDesktop: i,
                    isMobileVersionWithTablet: n,
                    isTablet: P,
                    isDesktopVersion: y
                } = o.U6.deviceScreenResolutionControl, j = (0, d.LG)(), x = c.y3.getCommerceEngine(b.Oy.routerControls.commerceEngineInstance), {
                    components: I,
                    showGroupComponents: k
                } = b.Oy.componentsControl, {
                    images: v
                } = s.d, {
                    t: _
                } = (0, M.Bd)(), E = _("ui.buy_as_a_gift");
                return (0, l.useEffect)(() => {
                    b.Oy.routerControls.commerceEngineInstance = j ? .commerceEngineInstance, C.Fg.pageShow({
                        products: x.products
                    }), k(["FOOTER", "MOBILE_HEADER", "MOBILE_NAVBAR"])
                }, []), (0, l.useEffect)(() => (r.P.bgImage = v ? .giftBackgroundDesktop, () => {
                    r.P.bgImage = null
                }), [y]), y && (0, a.jsxs)(r._, {
                    children: [y && (0, a.jsx)(m.Wm, {}), I.get("MOBILE_NAVBAR") && n && (0, a.jsx)(m.id, {}), (0, a.jsxs)("div", {
                        className: (0, g.$)(A.A.MainPageContainer, {
                            [A.A.desktop]: e,
                            [A.A.smallDesktop]: i || t,
                            [A.A.tablet]: P,
                            [A.A.mobile]: n
                        }),
                        children: [(0, a.jsxs)(u.m, {
                            verticalCenter: !0,
                            isColumn: !0,
                            width: "100%",
                            className: (0, g.$)(A.A.MainPage, {
                                [A.A.mobile]: n
                            }),
                            gap: "16px",
                            children: [(0, a.jsxs)(u.m, {
                                verticalCenter: !0,
                                isColumn: !0,
                                width: "100%",
                                gap: "12px",
                                children: [(0, a.jsx)("h2", {
                                    className: A.A.Title,
                                    children: E
                                }), (0, a.jsx)(h.j, {
                                    hasBgImage: !0,
                                    className: (0, g.$)(A.A.giftUserId, {
                                        [A.A.isSmallDesktop]: i || t
                                    })
                                })]
                            }), (0, a.jsx)(u.m, {
                                className: A.A.MainPageWrapper,
                                children: (0, a.jsx)(d.sv, {})
                            })]
                        }), I.get("FOOTER") && (0, a.jsx)(f.w, {}), I.get("MOBILE_NAVBAR") && (0, a.jsx)(p.nx, {})]
                    })]
                })
            });
            var y = i(7028),
                j = i(4235),
                x = i(7136),
                I = i(9040),
                k = i(2133),
                v = i(626);
            const _ = (0, n.PA)(e => {
                const {
                    className: t
                } = e, {
                    commerceEngineInstance: i
                } = b.Oy.routerControls, {
                    cart: n
                } = c.y3.getCommerceEngine(i), o = (0, d.Zp)(), {
                    t: s
                } = (0, M.Bd)(), r = s("ui.in_cart"), l = s("ui.item_singular"), f = s("ui.item_few"), m = s("ui.item_many"), p = s("ui.for_price"), h = s("ui.gift"), A = (0, I.Z)(n.cardIds.length, l, f, m);
                return n.cardIds.length > 0 && (0, a.jsx)(u.m, {
                    className: (0, g.$)(v.A.GiftMobileCartMinifiedWrapper, {}, [t]),
                    width: "100%",
                    verticalCenter: !0,
                    horizontalCenter: !0,
                    children: (0, a.jsxs)(u.m, {
                        verticalCenter: !0,
                        isColumn: !0,
                        className: (0, g.$)(v.A.GiftMobileCartMinified, {}, [t]),
                        children: [(0, a.jsx)("div", {
                            className: v.A.styledCircle
                        }), (0, a.jsxs)(u.m, {
                            className: (0, g.$)(v.A.GiftMobileCartMinifiedContainer, {}, [t]),
                            children: [(0, a.jsxs)(u.m, {
                                className: v.A.textWrapper,
                                isColumn: !0,
                                gap: "4",
                                children: [(0, a.jsx)("p", {
                                    className: (0, g.$)(v.A.textContainer, {}, [v.A.bold]),
                                    children: r
                                }), (0, a.jsxs)("p", {
                                    className: (0, g.$)(v.A.textContainer),
                                    children: [n.cardIds.length, " ", `${A} ${p}`, " ", n.totalCartPrice + k.r[n ? .currency]]
                                })]
                            }), (0, a.jsx)(x.$, {
                                onClick: () => {
                                    C.Sz.clickGiveButton(), o("cart")
                                },
                                type: "primary",
                                size: "mini",
                                className: v.A.giftButton,
                                children: h
                            })]
                        })]
                    })
                })
            });
            var E = i(6238);
            const N = (0, n.PA)(() => {
                    const {
                        isMobileVersionWithTablet: e,
                        isTablet: t,
                        isDesktopVersion: i
                    } = o.U6.deviceScreenResolutionControl, n = (0, d.LG)();
                    b.Oy.routerControls.commerceEngineInstance = n.commerceEngineInstance;
                    const s = c.y3.getCommerceEngine(b.Oy.routerControls.commerceEngineInstance),
                        {
                            isMobileVersionWithTablet: f
                        } = o.U6.deviceScreenResolutionControl,
                        m = (0, d.Zp)(),
                        {
                            appDefaultPath: p
                        } = b.Oy.routerControls,
                        {
                            t: A
                        } = (0, M.Bd)(),
                        P = A("ui.buy_a_gift_for");
                    (0, l.useEffect)(() => (r.P.bgImage = null, r.P.bgColor = "#0D0E12", () => {
                        r.P.bgColor = null
                    }), [f]);
                    return !i && (0, a.jsxs)(r._, {
                        children: [(0, a.jsxs)(u.m, {
                            isColumn: !0,
                            className: E.A.giftHeaderWrapper,
                            children: [(0, a.jsx)(y.E, {
                                className: E.A.giftNavigationPanel,
                                hideBackButton: !0,
                                onClose: () => {
                                    C.Sz.clickCloseGiftCatalogButton();
                                    const e = c.y3.getCommerceEngine("default");
                                    e.products.data ? m(`${p}`, {
                                        replace: !0
                                    }) : e.products.fetchData(e.authentification ? .uid, () => {
                                        m(`${p}`, {
                                            replace: !0
                                        })
                                    })
                                },
                                titleValue: P
                            }), (0, a.jsx)(h.j, {
                                className: E.A.giftUserId
                            }), (0, a.jsx)(j._, {
                                className: E.A.giftProductsTabbar,
                                products: s.products,
                                pathToProduct: "/gift"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: (0, g.A)(E.A.GiftPageContainer, {
                                [E.A.tablet]: t,
                                [E.A.mobile]: e
                            }),
                            children: [(0, a.jsx)(u.m, {
                                verticalCenter: !0,
                                isColumn: !0,
                                width: "100%",
                                className: (0, g.A)(E.A.GiftPage, {
                                    [E.A.mobile]: e
                                }),
                                children: (0, a.jsx)(d.sv, {})
                            }), (0, a.jsx)(_, {})]
                        })]
                    })
                }),
                W = (0, n.PA)(() => {
                    const {
                        isMobileVersionWithTablet: e,
                        isDesktopVersion: t
                    } = o.U6.deviceScreenResolutionControl, {
                        images: i
                    } = s.d, n = (0, d.LG)(), g = c.y3.getCommerceEngine(n ? .commerceEngineInstance), {
                        uid: u
                    } = g.authentification;
                    return (0, l.useEffect)(() => {
                        g.products.fetchData(u)
                    }, []), (0, l.useEffect)(() => (t && (r.P.bgImage = i ? .giftBackgroundDesktop), () => {
                        r.P.bgImage = null
                    }), [i ? .giftBackgroundDesktop]), (0, a.jsxs)(a.Fragment, {
                        children: [e && (0, a.jsx)(N, {}), t && (0, a.jsx)(P, {})]
                    })
                })
        }
    }
]);
//# sourceMappingURL=7.428cf4ac.js.map