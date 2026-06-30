! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d09bab9a-8b27-4791-bd6f-36a2da815a6b", e._sentryDebugIdIdentifier = "sentry-dbid-d09bab9a-8b27-4791-bd6f-36a2da815a6b")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "f3f7d536e768d3c4b9c47900d544f22686f7ebca"
}, (self.webpackChunkstore_2_0 = self.webpackChunkstore_2_0 || []).push([
    [11], {
        6030(e, t, a) {
            a.d(t, {
                A: () => n
            });
            const n = {
                GreetingForm: "tPvL4On5",
                isDesktop: "Fb2FKUiR",
                MainContent: "Qr8TqjZZ",
                Title: "DQ5cx0cN",
                UserBadge: "WPQHXlgb",
                NameField: "HuBixjj3",
                ContainerRef: "Qib5hvXk",
                SendButtonWrapper: "c5sfyIPd",
                SendButton: "k4usuF4g",
                Info: "sqsOegU0"
            };
            var i, s;
            i = '{"GreetingForm":"tPvL4On5","isDesktop":"Fb2FKUiR","MainContent":"Qr8TqjZZ","Title":"DQ5cx0cN","UserBadge":"WPQHXlgb","NameField":"HuBixjj3","ContainerRef":"Qib5hvXk","SendButtonWrapper":"c5sfyIPd","SendButton":"k4usuF4g","Info":"sqsOegU0"}', s = a(9140)(e.id, {}), e.hot.data && e.hot.data.value && e.hot.data.value !== i ? e.hot.invalidate() : e.hot.accept(), e.hot.dispose(function(e) {
                e.value = i, s()
            })
        },
        7065(e, t, a) {
            a.d(t, {
                A: () => n
            });
            const n = {
                GreetingPage: "dE7N79bJ",
                PanelWrapper: "o2vpLMKZ",
                GreetingForm: "MMMfBDQX",
                isDesktop: "O8vHaWJe",
                SendButton: "KSwazk0C"
            };
            var i, s;
            i = '{"GreetingPage":"dE7N79bJ","PanelWrapper":"o2vpLMKZ","GreetingForm":"MMMfBDQX","isDesktop":"O8vHaWJe","SendButton":"KSwazk0C"}', s = a(9140)(e.id, {}), e.hot.data && e.hot.data.value && e.hot.data.value !== i ? e.hot.invalidate() : e.hot.accept(), e.hot.dispose(function(e) {
                e.value = i, s()
            })
        },
        8533(e, t, a) {
            a.r(t), a.d(t, {
                default: () => j
            });
            var n = a(4848),
                i = a(681),
                s = a(4164),
                o = a(9603),
                r = a(4813),
                l = a(5694),
                d = a(5564),
                u = a(5892),
                g = a(2683),
                c = a(1463),
                f = a(5729),
                p = a(3443),
                h = a(6540),
                m = a(3433),
                _ = a(2389),
                b = a(4015),
                v = a(7136),
                k = a(9592),
                C = a(6030);
            const F = (0, p.PA)(e => {
                const {
                    className: t
                } = e, a = (0, m.Zp)(), {
                    appDefaultPath: i
                } = o.Oy.routerControls, {
                    t: l
                } = (0, _.Bd)(), p = l("ui.gift_for"), F = l("ui.enter_a_greeting"), S = l("ui.sender"), x = l("ui.after_placing_the_order_we_ll_send_you_a_link_to_the_card_you_can_share_it_with_the_gift_recipient"), B = l("ui.the_greeting_will_also_arrive_to_the_recipient_in_the_game"), P = l("ui.send"), j = r.y3.getCommerceEngine("gift"), N = r.y3.getCommerceEngine("default"), {
                    isDesktopVersion: I
                } = u.U6.deviceScreenResolutionControl, [M, E] = (0, h.useState)((0, b.a)("greeting_message", "")), [O, $] = (0, h.useState)(null), [G, R] = (0, h.useState)((0, b.a)("greeting_name", "")), [W, T] = (0, h.useState)(null);
                return (0, n.jsxs)(k.m, {
                    isColumn: !0,
                    className: (0, s.$)(C.A.GreetingForm, {
                        [C.A.isDesktop]: I
                    }, [t]),
                    children: [(0, n.jsxs)("div", {
                        className: (0, s.$)(C.A.MainContent, {
                            [C.A.isDesktop]: I
                        }),
                        children: [(0, n.jsx)("h1", {
                            className: (0, s.$)(C.A.Title, {
                                [C.A.isDesktop]: I
                            }),
                            children: p
                        }), (0, n.jsx)(c.l, {
                            uid: j ? .authentification ? .uid,
                            name: j ? .authentification ? .name,
                            avatar: j ? .authentification ? .avatar,
                            className: (0, s.$)(C.A.UserBadge, {
                                [C.A.isDesktop]: I
                            })
                        }), (0, n.jsx)(f.r, {
                            placeholder: F,
                            minRows: 2,
                            maxRows: 5,
                            maxLength: 250,
                            value: M,
                            onFocus: () => {
                                d.Sz.greetingMessageFieldOnFocus()
                            },
                            onChange: e => {
                                d.Sz.greetingMessageFieldOnChange(), $(null), E(e.target.value), localStorage.setItem("greeting_message", JSON.stringify(e.target.value))
                            },
                            validationProperties: {
                                validate: () => {
                                    const e = A(M),
                                        t = Boolean(O);
                                    return e || t
                                },
                                validateMessage: O || y()
                            }
                        }), (0, n.jsx)(f.r, {
                            placeholder: S,
                            minRows: 1,
                            maxRows: 1,
                            maxLength: 32,
                            value: G,
                            inputWrapperClassName: (0, s.$)(C.A.NameField, {
                                [C.A.isDesktop]: I
                            }),
                            onFocus: () => {
                                d.Sz.greetingSenderFieldOnFocus()
                            },
                            onChange: e => {
                                d.Sz.greetingSenderFieldOnChange(), T(null), R(e.target.value), localStorage.setItem("greeting_name", JSON.stringify(e.target.value))
                            },
                            validationProperties: {
                                validate: () => {
                                    const e = A(G),
                                        t = Boolean(W);
                                    return e || t
                                },
                                validateMessage: W || y()
                            }
                        })]
                    }), (0, n.jsxs)("p", {
                        className: (0, s.$)(C.A.Info, {
                            [C.A.isDesktop]: I
                        }),
                        children: [x, (0, n.jsx)("br", {}), (0, n.jsx)("br", {}), B]
                    }), (0, n.jsx)(k.m, {
                        horizontalCenter: !0,
                        verticalCenter: !0,
                        isColumn: !0,
                        className: (0, s.$)(C.A.SendButtonWrapper, {
                            [C.A.isDesktop]: I
                        }),
                        children: (0, n.jsx)(v.$, {
                            onClick: () => {
                                d.Sz.clickGreetingSendButton(), g.z1.fetchData({
                                    inapps: j ? .cart ? .cardIds,
                                    uid: j ? .authentification ? .uid,
                                    gift: {
                                        sender: { ...N ? .authentification ? .uid ? {
                                                uid: N ? .authentification ? .uid
                                            } : {},
                                            ...G ? {
                                                name: G
                                            } : {}
                                        },
                                        ...M ? {
                                            message: M
                                        } : {}
                                    }
                                }, e => {
                                    $(null), T(null), a(`${i}/${e.redirectUrl}`)
                                }, e => {
                                    "40011" === e ? .response ? .data ? .code && $(D()), "40012" === e ? .response ? .data ? .code && T(w())
                                })
                            },
                            type: "primary",
                            title: P,
                            className: (0, s.$)(C.A.SendButton, {
                                [C.A.isDesktop]: I
                            })
                        })
                    })]
                })
            });
            var S = a(1823);
            const y = () => (0, S.t)("ui.the_greeting_must_not_contain_emojis"),
                D = () => (0, S.t)("Invalid or non-permitted text. Please rewrite."),
                w = () => (0, S.t)("Non-permitted name. Please rewrite."),
                x = /[\u{1F300}-\u{1FAFF}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{27BF}]/u,
                A = e => {
                    const t = (e => "string" == typeof e ? e : null == e ? "" : String(e))(e).trim();
                    return !!t && x.test(t)
                };
            var B = a(7028),
                P = a(7065);
            const j = (0, p.PA)(() => {
                const e = (0, m.Zp)(),
                    {
                        appDefaultPath: t
                    } = o.Oy.routerControls,
                    {
                        products: a,
                        authentification: g
                    } = r.y3.getCommerceEngine("gift"),
                    {
                        images: c
                    } = l.d,
                    {
                        t: f
                    } = (0, _.Bd)(),
                    p = f("ui.greeting_card"),
                    {
                        isMobileVersionWithTablet: b,
                        isDesktopVersion: v
                    } = u.U6.deviceScreenResolutionControl,
                    C = () => {
                        d.Sz.clickCloseGiftGreetingButton(), e(`${t}/gift`)
                    },
                    S = () => {
                        window.history.state && window.history.state.idx > 0 ? e(-1) : e(`${t}/gift`)
                    };
                return (0, h.useEffect)(() => {
                    a ? .data || a.fetchData(g.uid)
                }, []), (0, h.useEffect)(() => (v ? i.P.bgImage = c ? .giftGreetingBackgroundDesktop : (i.P.bgColor = "#0D0E12", i.P.bgImage = null), () => {
                    i.P.bgImage = null, i.P.bgColor = null
                }), [c, v]), (0, n.jsx)(i._, {
                    children: (0, n.jsxs)(k.m, {
                        isColumn: !0,
                        verticalCenter: !0,
                        className: P.A.GreetingPage,
                        children: [v && (0, n.jsx)(B.m, {
                            onBack: S,
                            onClose: C
                        }), b && (0, n.jsx)(B.E, {
                            titleValue: p,
                            hideCloseButton: !0,
                            className: P.A.PanelWrapper,
                            onBack: S,
                            onClose: C
                        }), (0, n.jsx)(F, {
                            className: (0, s.$)(P.A.GreetingForm, {
                                [P.A.isDesktop]: v
                            })
                        })]
                    })
                })
            })
        }
    }
]);
//# sourceMappingURL=11.7313dd59.js.map