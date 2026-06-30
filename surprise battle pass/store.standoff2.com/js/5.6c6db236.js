! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "d1e3ed34-8f33-4e1f-8459-c5e9247c6918", e._sentryDebugIdIdentifier = "sentry-dbid-d1e3ed34-8f33-4e1f-8459-c5e9247c6918")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "f3f7d536e768d3c4b9c47900d544f22686f7ebca"
}, (self.webpackChunkstore_2_0 = self.webpackChunkstore_2_0 || []).push([
    [5], {
        297(e, s, o) {
            o.d(s, {
                A: () => d
            });
            const d = {
                cradsWrapper: "_ezqeEeO",
                isSmallDesktop: "dbWG8Tnp",
                cardsContainer: "aVqghDCw",
                isDesktopVersion: "UJioxkY5"
            };
            var n, i;
            n = '{"cradsWrapper":"_ezqeEeO","isSmallDesktop":"dbWG8Tnp","cardsContainer":"aVqghDCw","isDesktopVersion":"UJioxkY5"}', i = o(9140)(e.id, {}), e.hot.data && e.hot.data.value && e.hot.data.value !== n ? e.hot.invalidate() : e.hot.accept(), e.hot.dispose(function(e) {
                e.value = n, i()
            })
        },
        6389(e, s, o) {
            o.r(s), o.d(s, {
                default: () => f
            });
            var d = o(4848),
                n = o(6942),
                i = o(5892),
                t = o(4164),
                a = o(3433),
                l = o(3443),
                r = o(297);
            const f = (0, l.PA)(e => {
                const {
                    isMiddleDesktop: s,
                    isSmallDesktop: o,
                    isDesktopVersion: l
                } = i.U6.deviceScreenResolutionControl, {
                    section: f
                } = e;
                return (0, d.jsxs)("div", {
                    className: (0, t.A)(r.A.cradsWrapper, {
                        [r.A.isSmallDesktop]: o || s,
                        [r.A.isDesktopVersion]: l
                    }, []),
                    children: [f && (0, d.jsx)(n.lM, {
                        index: 0,
                        section: f
                    }, f ? .id), (0, d.jsx)(a.sv, {})]
                })
            })
        }
    }
]);
//# sourceMappingURL=5.6c6db236.js.map