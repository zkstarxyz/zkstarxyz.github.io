"use strict";
(self.webpackChunksyncswap = self.webpackChunksyncswap || []).push([[489], {
    53763: function(e, t, n) {
        n.d(t, {
            CV: function() {
                return M
            },
            Id: function() {
                return E
            },
            t0: function() {
                return Z
            },
            zv: function() {
                return W
            },
            uA: function() {
                return x
            },
            uc: function() {
                return Y
            },
            jb: function() {
                return ne
            },
            zb: function() {
                return L
            },
            AV: function() {
                return j
            },
            Ic: function() {
                return ue
            },
            Vs: function() {
                return de
            },
            kD: function() {
                return ee
            }
        });
        var r = n(93433)
          , a = n(37762)
          , o = n(74165)
          , i = n(15861)
          , s = n(29439)
          , c = (Symbol(),
        Symbol())
          , u = Object.getPrototypeOf
          , l = new WeakMap
          , d = function(e) {
            return e && (l.has(e) ? l.get(e) : u(e) === Object.prototype || u(e) === Array.prototype)
        }
          , f = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            l.set(e, t)
        }
          , p = function(e) {
            return "object" === typeof e && null !== e
        }
          , v = new WeakMap
          , h = new WeakSet
          , b = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.is
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e, t) {
                return new Proxy(e,t)
            }
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                return p(e) && !h.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer)
            }
              , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function(e) {
                switch (e.status) {
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
                default:
                    throw e
                }
            }
              , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new WeakMap
              , i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a
                  , r = o.get(e);
                if ((null == r ? void 0 : r[0]) === t)
                    return r[1];
                var c = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
                return f(c, !0),
                o.set(e, [t, c]),
                Reflect.ownKeys(e).forEach((function(t) {
                    if (!Object.getOwnPropertyDescriptor(c, t)) {
                        var r = Reflect.get(e, t)
                          , a = {
                            value: r,
                            enumerable: !0,
                            configurable: !0
                        };
                        if (h.has(r))
                            f(r, !1);
                        else if (r instanceof Promise)
                            delete a.value,
                            a.get = function() {
                                return n(r)
                            }
                            ;
                        else if (v.has(r)) {
                            var o = v.get(r)
                              , u = (0,
                            s.Z)(o, 2)
                              , l = u[0]
                              , d = u[1];
                            a.value = i(l, d(), n)
                        }
                        Object.defineProperty(c, t, a)
                    }
                }
                )),
                c
            }
              , u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new WeakMap
              , l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [1, 1]
              , b = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : function(a) {
                if (!p(a))
                    throw new Error("object required");
                var o = u.get(a);
                if (o)
                    return o;
                var f = l[0]
                  , w = new Set
                  , m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ++l[0];
                    f !== t && (f = t,
                    w.forEach((function(n) {
                        return n(e, t)
                    }
                    )))
                }
                  , g = l[1]
                  , I = function(e) {
                    return function(t, n) {
                        var a = (0,
                        r.Z)(t);
                        a[1] = [e].concat((0,
                        r.Z)(a[1])),
                        m(a, n)
                    }
                }
                  , y = new Map
                  , C = function(e) {
                    var t, n = y.get(e);
                    n && (y.delete(e),
                    null == (t = n[1]) || t.call(n))
                }
                  , E = Array.isArray(a) ? [] : Object.create(Object.getPrototypeOf(a))
                  , k = {
                    deleteProperty: function(e, t) {
                        var n = Reflect.get(e, t);
                        C(t);
                        var r = Reflect.deleteProperty(e, t);
                        return r && m(["delete", [t], n]),
                        r
                    },
                    set: function(t, r, a, o) {
                        var i = Reflect.has(t, r)
                          , s = Reflect.get(t, r, o);
                        if (i && (e(s, a) || u.has(a) && e(s, u.get(a))))
                            return !0;
                        C(r),
                        p(a) && (a = function(e) {
                            return d(e) && e[c] || null
                        }(a) || a);
                        var l = a;
                        if (a instanceof Promise)
                            a.then((function(e) {
                                a.status = "fulfilled",
                                a.value = e,
                                m(["resolve", [r], e])
                            }
                            )).catch((function(e) {
                                a.status = "rejected",
                                a.reason = e,
                                m(["reject", [r], e])
                            }
                            ));
                        else {
                            !v.has(a) && n(a) && (l = b(a));
                            var f = !h.has(l) && v.get(l);
                            f && function(e, t) {
                                if (y.has(e))
                                    throw new Error("prop listener already exists");
                                if (w.size) {
                                    var n = t[3](I(e));
                                    y.set(e, [t, n])
                                } else
                                    y.set(e, [t])
                            }(r, f)
                        }
                        return Reflect.set(t, r, l, o),
                        m(["set", [r], a, s]),
                        !0
                    }
                }
                  , j = t(E, k);
                u.set(a, j);
                var W = [E, function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ++l[1];
                    return g === e || w.size || (g = e,
                    y.forEach((function(t) {
                        var n = (0,
                        s.Z)(t, 1)[0][1](e);
                        n > f && (f = n)
                    }
                    ))),
                    f
                }
                , i, function(e) {
                    w.add(e),
                    1 === w.size && y.forEach((function(e, t) {
                        var n = (0,
                        s.Z)(e, 2)
                          , r = n[0];
                        if (n[1])
                            throw new Error("remove already exists");
                        var a = r[3](I(t));
                        y.set(t, [r, a])
                    }
                    ));
                    return function() {
                        w.delete(e),
                        0 === w.size && y.forEach((function(e, t) {
                            var n = (0,
                            s.Z)(e, 2)
                              , r = n[0]
                              , a = n[1];
                            a && (a(),
                            y.set(t, [r]))
                        }
                        ))
                    }
                }
                ];
                return v.set(j, W),
                Reflect.ownKeys(a).forEach((function(e) {
                    var t = Object.getOwnPropertyDescriptor(a, e);
                    "value"in t && (j[e] = a[e],
                    delete t.value,
                    delete t.writable),
                    Object.defineProperty(E, e, t)
                }
                )),
                j
            }
            ;
            return [b, v, h, e, t, n, a, o, i, u, l]
        }
          , w = b()
          , m = (0,
        s.Z)(w, 1)[0];
        function g() {
            return m(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
        }
        function I(e, t, n) {
            var r, a = v.get(e);
            a || console.warn("Please use proxy object");
            var o = []
              , i = a[3]
              , s = !1
              , c = i((function(e) {
                o.push(e),
                n ? t(o.splice(0)) : r || (r = Promise.resolve().then((function() {
                    r = void 0,
                    s && t(o.splice(0))
                }
                )))
            }
            ));
            return s = !0,
            function() {
                s = !1,
                c()
            }
        }
        var y, C = n(40918), E = {
            ethereumClient: void 0,
            setEthereumClient: function(e) {
                y = e
            },
            client: function() {
                if (y)
                    return y;
                throw new Error("ClientCtrl has no client set")
            }
        }, k = g({
            history: ["ConnectWallet"],
            view: "ConnectWallet",
            data: void 0
        }), j = {
            state: k,
            subscribe: function(e) {
                return I(k, (function() {
                    return e(k)
                }
                ))
            },
            push: function(e, t) {
                e !== k.view && (k.view = e,
                t && (k.data = t),
                k.history.push(e))
            },
            reset: function(e) {
                k.view = e,
                k.history = [e]
            },
            replace: function(e) {
                k.history.length > 1 && (k.history[k.history.length - 1] = e,
                k.view = e)
            },
            goBack: function() {
                if (k.history.length > 1) {
                    k.history.pop();
                    var e = k.history.slice(-1)
                      , t = (0,
                    s.Z)(e, 1)[0];
                    k.view = t
                }
            },
            setData: function(e) {
                k.data = e
            }
        }, W = {
            WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
            W3M_VERSION: "W3M_VERSION",
            W3M_PREFER_INJECTED_URL_FLAG: "w3mPreferInjected",
            RECOMMENDED_WALLET_AMOUNT: 9,
            isMobile: function() {
                return typeof window < "u" && !(!window.matchMedia("(pointer:coarse)").matches && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))
            },
            isAndroid: function() {
                return W.isMobile() && navigator.userAgent.toLowerCase().includes("android")
            },
            isIos: function() {
                var e = navigator.userAgent.toLowerCase();
                return W.isMobile() && (e.includes("iphone") || e.includes("ipad"))
            },
            isHttpUrl: function(e) {
                return e.startsWith("http://") || e.startsWith("https://")
            },
            isArray: function(e) {
                return Array.isArray(e) && e.length > 0
            },
            formatNativeUrl: function(e, t, n) {
                if (W.isHttpUrl(e))
                    return this.formatUniversalUrl(e, t, n);
                var r = e;
                r.includes("://") || (r = e.replaceAll("/", "").replaceAll(":", ""),
                r = "".concat(r, "://")),
                this.setWalletConnectDeepLink(r, n);
                var a = encodeURIComponent(t);
                return "".concat(r, "wc?uri=").concat(a)
            },
            formatUniversalUrl: function(e, t, n) {
                if (!W.isHttpUrl(e))
                    return this.formatNativeUrl(e, t, n);
                var r = e;
                e.endsWith("/") && (r = e.slice(0, -1)),
                this.setWalletConnectDeepLink(r, n);
                var a = encodeURIComponent(t);
                return "".concat(r, "/wc?uri=").concat(a)
            },
            wait: function(e) {
                return (0,
                i.Z)((0,
                o.Z)().mark((function t() {
                    return (0,
                    o.Z)().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise((function(t) {
                                    setTimeout(t, e)
                                }
                                )));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            openHref: function(e, t) {
                window.open(e, t, "noreferrer noopener")
            },
            setWalletConnectDeepLink: function(e, t) {
                localStorage.setItem(W.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                    href: e,
                    name: t
                }))
            },
            setWalletConnectAndroidDeepLink: function(e) {
                var t = e.split("?")
                  , n = (0,
                s.Z)(t, 1)[0];
                localStorage.setItem(W.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                    href: n,
                    name: "Android"
                }))
            },
            removeWalletConnectDeepLink: function() {
                localStorage.removeItem(W.WALLETCONNECT_DEEPLINK_CHOICE)
            },
            setWeb3ModalVersionInStorage: function() {
                typeof localStorage < "u" && localStorage.setItem(W.W3M_VERSION, "2.4.2-3d672481")
            },
            getWalletRouterData: function() {
                var e, t = null == (e = j.state.data) ? void 0 : e.Wallet;
                if (!t)
                    throw new Error('Missing "Wallet" view data');
                return t
            },
            getSwitchNetworkRouterData: function() {
                var e, t = null == (e = j.state.data) ? void 0 : e.SwitchNetwork;
                if (!t)
                    throw new Error('Missing "SwitchNetwork" view data');
                return t
            },
            isPreferInjectedFlag: function() {
                return typeof location < "u" && new URLSearchParams(location.search).has(W.W3M_PREFER_INJECTED_URL_FLAG)
            }
        }, O = g({
            enabled: typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
            userSessionId: "",
            events: [],
            connectedWalletId: void 0
        }), x = {
            state: O,
            subscribe: function(e) {
                return I(O.events, (function() {
                    return e(function(e, t) {
                        var n = v.get(e);
                        n || console.warn("Please use proxy object");
                        var r = (0,
                        s.Z)(n, 3)
                          , a = r[0]
                          , o = r[1];
                        return (0,
                        r[2])(a, o(), t)
                    }(O.events[O.events.length - 1]))
                }
                ))
            },
            initialize: function() {
                O.enabled && typeof crypto < "u" && (O.userSessionId = crypto.randomUUID())
            },
            setConnectedWalletId: function(e) {
                O.connectedWalletId = e
            },
            click: function(e) {
                if (O.enabled) {
                    var t = {
                        type: "CLICK",
                        name: e.name,
                        userSessionId: O.userSessionId,
                        timestamp: Date.now(),
                        data: e
                    };
                    O.events.push(t)
                }
            },
            track: function(e) {
                if (O.enabled) {
                    var t = {
                        type: "TRACK",
                        name: e.name,
                        userSessionId: O.userSessionId,
                        timestamp: Date.now(),
                        data: e
                    };
                    O.events.push(t)
                }
            },
            view: function(e) {
                if (O.enabled) {
                    var t = {
                        type: "VIEW",
                        name: e.name,
                        userSessionId: O.userSessionId,
                        timestamp: Date.now(),
                        data: e
                    };
                    O.events.push(t)
                }
            }
        }, A = g({
            selectedChain: void 0,
            chains: void 0,
            standaloneChains: void 0,
            standaloneUri: void 0,
            isStandalone: !1,
            isAuth: !1,
            isCustomDesktop: !1,
            isCustomMobile: !1,
            isDataLoaded: !1,
            isUiLoaded: !1,
            isPreferInjected: !1,
            walletConnectVersion: 1
        }), L = {
            state: A,
            subscribe: function(e) {
                return I(A, (function() {
                    return e(A)
                }
                ))
            },
            setChains: function(e) {
                A.chains = e
            },
            setStandaloneChains: function(e) {
                A.standaloneChains = e
            },
            setStandaloneUri: function(e) {
                A.standaloneUri = e
            },
            getSelectedChain: function() {
                var e = E.client().getNetwork().chain;
                return e && (A.selectedChain = e),
                A.selectedChain
            },
            setSelectedChain: function(e) {
                A.selectedChain = e
            },
            setIsStandalone: function(e) {
                A.isStandalone = e
            },
            setIsCustomDesktop: function(e) {
                A.isCustomDesktop = e
            },
            setIsCustomMobile: function(e) {
                A.isCustomMobile = e
            },
            setIsDataLoaded: function(e) {
                A.isDataLoaded = e
            },
            setIsUiLoaded: function(e) {
                A.isUiLoaded = e
            },
            setWalletConnectVersion: function(e) {
                A.walletConnectVersion = e
            },
            setIsPreferInjected: function(e) {
                A.isPreferInjected = e
            },
            setIsAuth: function(e) {
                A.isAuth = e
            }
        }, S = g({
            projectId: "",
            mobileWallets: void 0,
            desktopWallets: void 0,
            walletImages: void 0,
            chainImages: void 0,
            tokenImages: void 0,
            tokenContracts: void 0,
            standaloneChains: void 0,
            enableStandaloneMode: !1,
            enableAuthMode: !1,
            enableNetworkView: !1,
            enableAccountView: !0,
            enableExplorer: !0,
            defaultChain: void 0,
            explorerExcludedWalletIds: void 0,
            explorerRecommendedWalletIds: void 0,
            termsOfServiceUrl: void 0,
            privacyPolicyUrl: void 0
        }), Z = {
            state: S,
            subscribe: function(e) {
                return I(S, (function() {
                    return e(S)
                }
                ))
            },
            setConfig: function(e) {
                var t, n, r, a;
                x.initialize(),
                L.setStandaloneChains(e.standaloneChains),
                L.setIsStandalone(!(null == (t = e.standaloneChains) || !t.length) || !!e.enableStandaloneMode),
                L.setIsAuth(!!e.enableAuthMode),
                L.setIsCustomMobile(!(null == (n = e.mobileWallets) || !n.length)),
                L.setIsCustomDesktop(!(null == (r = e.desktopWallets) || !r.length)),
                L.setWalletConnectVersion(null != (a = e.walletConnectVersion) ? a : 1),
                L.state.isStandalone || (L.setChains(E.client().chains),
                L.setIsPreferInjected(E.client().isInjectedProviderInstalled() && W.isPreferInjectedFlag())),
                e.defaultChain && L.setSelectedChain(e.defaultChain),
                W.setWeb3ModalVersionInStorage(),
                Object.assign(S, e)
            }
        }, P = g({
            address: void 0,
            profileName: void 0,
            profileAvatar: void 0,
            profileLoading: !1,
            balanceLoading: !1,
            balance: void 0,
            isConnected: !1
        }), M = {
            state: P,
            subscribe: function(e) {
                return I(P, (function() {
                    return e(P)
                }
                ))
            },
            getAccount: function() {
                var e = E.client().getAccount();
                P.address = e.address,
                P.isConnected = e.isConnected
            },
            fetchProfile: function(e, t) {
                return (0,
                i.Z)((0,
                o.Z)().mark((function n() {
                    var r, a, i, s, c;
                    return (0,
                    o.Z)().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (n.prev = 0,
                                P.profileLoading = !0,
                                a = null !== t && void 0 !== t ? t : P.address,
                                i = null == (r = L.state.chains) ? void 0 : r.find((function(e) {
                                    return 1 === e.id
                                }
                                )),
                                !a || !i) {
                                    n.next = 17;
                                    break
                                }
                                return n.next = 6,
                                E.client().fetchEnsName({
                                    address: a,
                                    chainId: 1
                                });
                            case 6:
                                if (!(s = n.sent)) {
                                    n.next = 16;
                                    break
                                }
                                return n.next = 10,
                                E.client().fetchEnsAvatar({
                                    name: s,
                                    chainId: 1
                                });
                            case 10:
                                if (c = n.sent,
                                n.t0 = c,
                                !n.t0) {
                                    n.next = 15;
                                    break
                                }
                                return n.next = 15,
                                e(c);
                            case 15:
                                P.profileAvatar = c;
                            case 16:
                                P.profileName = s;
                            case 17:
                                return n.prev = 17,
                                P.profileLoading = !1,
                                n.finish(17);
                            case 20:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[0, , 17, 20]])
                }
                )))()
            },
            fetchBalance: function(e) {
                return (0,
                i.Z)((0,
                o.Z)().mark((function t() {
                    var n, r, a, i, s, c;
                    return (0,
                    o.Z)().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (t.prev = 0,
                                n = E.client().getNetwork(),
                                r = n.chain,
                                a = Z.state.tokenContracts,
                                r && a && (i = a[r.id]),
                                P.balanceLoading = !0,
                                !(s = null !== e && void 0 !== e ? e : P.address)) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 7,
                                E.client().fetchBalance({
                                    address: s,
                                    token: i
                                });
                            case 7:
                                c = t.sent,
                                P.balance = {
                                    amount: c.formatted,
                                    symbol: c.symbol
                                };
                            case 9:
                                return t.prev = 9,
                                P.balanceLoading = !1,
                                t.finish(9);
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, , 9, 12]])
                }
                )))()
            },
            setAddress: function(e) {
                P.address = e
            },
            setIsConnected: function(e) {
                P.isConnected = e
            },
            resetBalance: function() {
                P.balance = void 0
            },
            resetAccount: function() {
                P.address = void 0,
                P.isConnected = !1,
                P.profileName = void 0,
                P.profileAvatar = void 0,
                P.balance = void 0
            }
        }, N = "https://explorer-api.walletconnect.com";
        function U(e, t) {
            return D.apply(this, arguments)
        }
        function D() {
            return D = (0,
            i.Z)((0,
            o.Z)().mark((function e(t, n) {
                var r;
                return (0,
                o.Z)().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return (r = new URL(t,N)).searchParams.append("projectId", Z.state.projectId),
                            Object.entries(n).forEach((function(e) {
                                var t = (0,
                                s.Z)(e, 2)
                                  , n = t[0]
                                  , a = t[1];
                                a && r.searchParams.append(n, String(a))
                            }
                            )),
                            e.next = 5,
                            fetch(r);
                        case 5:
                            return e.abrupt("return", e.sent.json());
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            D.apply(this, arguments)
        }
        var R = function(e) {
            return (0,
            i.Z)((0,
            o.Z)().mark((function t() {
                return (0,
                o.Z)().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", U("/w3m/v1/getDesktopListings", e));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))()
        }
          , _ = function(e) {
            return (0,
            i.Z)((0,
            o.Z)().mark((function t() {
                return (0,
                o.Z)().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", U("/w3m/v1/getMobileListings", e));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))()
        }
          , T = function(e) {
            return (0,
            i.Z)((0,
            o.Z)().mark((function t() {
                return (0,
                o.Z)().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", U("/w3m/v1/getInjectedListings", e));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))()
        }
          , V = function(e) {
            return (0,
            i.Z)((0,
            o.Z)().mark((function t() {
                return (0,
                o.Z)().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", U("/w3m/v1/getAllListings", e));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))()
        }
          , B = function(e) {
            return "".concat(N, "/w3m/v1/getWalletImage/").concat(e, "?projectId=").concat(Z.state.projectId)
        }
          , z = function(e) {
            return "".concat(N, "/w3m/v1/getAssetImage/").concat(e, "?projectId=").concat(Z.state.projectId)
        }
          , H = Object.defineProperty
          , K = Object.getOwnPropertySymbols
          , F = Object.prototype.hasOwnProperty
          , J = Object.prototype.propertyIsEnumerable
          , G = function(e, t, n) {
            return t in e ? H(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }
          , q = function(e, t) {
            for (var n in t || (t = {}))
                F.call(t, n) && G(e, n, t[n]);
            if (K) {
                var r, o = (0,
                a.Z)(K(t));
                try {
                    for (o.s(); !(r = o.n()).done; ) {
                        n = r.value;
                        J.call(t, n) && G(e, n, t[n])
                    }
                } catch (i) {
                    o.e(i)
                } finally {
                    o.f()
                }
            }
            return e
        }
          , Q = W.isMobile()
          , X = g({
            wallets: {
                listings: [],
                total: 0,
                page: 1
            },
            injectedWallets: [],
            search: {
                listings: [],
                total: 0,
                page: 1
            },
            recomendedWallets: []
        })
          , Y = {
            state: X,
            getRecomendedWallets: function() {
                return (0,
                i.Z)((0,
                o.Z)().mark((function e() {
                    var t, n, r, a, i, s, c, u, l, d, f, p, v, h, b, w;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = Z.state,
                                n = t.explorerRecommendedWalletIds,
                                r = t.explorerExcludedWalletIds,
                                "NONE" !== n && ("ALL" !== r || n)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", X.recomendedWallets);
                            case 3:
                                if (!W.isArray(n)) {
                                    e.next = 13;
                                    break
                                }
                                return a = {
                                    recommendedIds: n.join(",")
                                },
                                e.next = 7,
                                V(a);
                            case 7:
                                i = e.sent,
                                s = i.listings,
                                (c = Object.values(s)).sort((function(e, t) {
                                    return n.indexOf(e.id) - n.indexOf(t.id)
                                }
                                )),
                                X.recomendedWallets = c,
                                e.next = 32;
                                break;
                            case 13:
                                if (u = L.state,
                                l = u.standaloneChains,
                                d = u.walletConnectVersion,
                                f = u.isAuth,
                                p = null === l || void 0 === l ? void 0 : l.join(","),
                                v = W.isArray(r),
                                h = {
                                    page: 1,
                                    sdks: f ? "auth_v1" : void 0,
                                    entries: W.RECOMMENDED_WALLET_AMOUNT,
                                    chains: p,
                                    version: d,
                                    excludedIds: v ? r.join(",") : void 0
                                },
                                !Q) {
                                    e.next = 26;
                                    break
                                }
                                return e.next = 23,
                                _(h);
                            case 23:
                                e.t0 = e.sent,
                                e.next = 29;
                                break;
                            case 26:
                                return e.next = 28,
                                R(h);
                            case 28:
                                e.t0 = e.sent;
                            case 29:
                                b = e.t0,
                                w = b.listings,
                                X.recomendedWallets = Object.values(w);
                            case 32:
                                return e.abrupt("return", X.recomendedWallets);
                            case 33:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            getWallets: function(e) {
                return (0,
                i.Z)((0,
                o.Z)().mark((function t() {
                    var n, a, i, s, c, u, l, d, f, p, v, h;
                    return (0,
                    o.Z)().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (n = q({}, e),
                                a = Z.state,
                                i = a.explorerRecommendedWalletIds,
                                s = a.explorerExcludedWalletIds,
                                c = X.recomendedWallets,
                                "ALL" !== s) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", X.wallets);
                            case 3:
                                if (n.search || (c.length ? n.excludedIds = c.map((function(e) {
                                    return e.id
                                }
                                )).join(",") : W.isArray(i) && (n.excludedIds = i.join(","))),
                                W.isArray(s) && (n.excludedIds = [n.excludedIds, s].filter(Boolean).join(",")),
                                L.state.isAuth && (n.sdks = "auth_v1"),
                                u = e.page,
                                l = e.search,
                                !Q) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 9,
                                _(n);
                            case 9:
                                t.t0 = t.sent,
                                t.next = 15;
                                break;
                            case 12:
                                return t.next = 14,
                                R(n);
                            case 14:
                                t.t0 = t.sent;
                            case 15:
                                return d = t.t0,
                                f = d.listings,
                                p = d.total,
                                v = Object.values(f),
                                h = l ? "search" : "wallets",
                                t.abrupt("return", (X[h] = {
                                    listings: [].concat((0,
                                    r.Z)(X[h].listings), v),
                                    total: p,
                                    page: null !== u && void 0 !== u ? u : 1
                                },
                                {
                                    listings: v,
                                    total: p
                                }));
                            case 21:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            getInjectedWallets: function() {
                return (0,
                i.Z)((0,
                o.Z)().mark((function e() {
                    var t, n, r;
                    return (0,
                    o.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                T({});
                            case 2:
                                return t = e.sent,
                                n = t.listings,
                                r = Object.values(n),
                                e.abrupt("return", (X.injectedWallets = r,
                                X.injectedWallets));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            getWalletImageUrl: function(e) {
                return B(e)
            },
            getAssetImageUrl: function(e) {
                return z(e)
            },
            resetSearch: function() {
                X.search = {
                    listings: [],
                    total: 0,
                    page: 1
                }
            }
        }
          , $ = g({
            pairingUri: "",
            pairingError: !1
        })
          , ee = {
            state: $,
            subscribe: function(e) {
                return I($, (function() {
                    return e($)
                }
                ))
            },
            setPairingUri: function(e) {
                $.pairingUri = e
            },
            setPairingError: function(e) {
                $.pairingError = e
            }
        }
          , te = g({
            open: !1
        })
          , ne = {
            state: te,
            subscribe: function(e) {
                return I(te, (function() {
                    return e(te)
                }
                ))
            },
            open: function(e) {
                return (0,
                i.Z)((0,
                o.Z)().mark((function t() {
                    return (0,
                    o.Z)().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise((function(t) {
                                    var n = L.state
                                      , r = n.isStandalone
                                      , a = n.isUiLoaded
                                      , o = n.isDataLoaded
                                      , i = n.isPreferInjected
                                      , s = n.selectedChain
                                      , c = M.state.isConnected
                                      , u = Z.state.enableNetworkView;
                                    if (r)
                                        L.setStandaloneUri(null === e || void 0 === e ? void 0 : e.uri),
                                        L.setStandaloneChains(null === e || void 0 === e ? void 0 : e.standaloneChains),
                                        j.reset("ConnectWallet");
                                    else if (null != e && e.route)
                                        j.reset(e.route);
                                    else if (c)
                                        j.reset("Account");
                                    else if (u)
                                        j.reset("SelectNetwork");
                                    else {
                                        if (i)
                                            return E.client().connectConnector("injected", null === s || void 0 === s ? void 0 : s.id).catch((function(e) {
                                                return console.error(e)
                                            }
                                            )),
                                            void t();
                                        j.reset("ConnectWallet")
                                    }
                                    var l = ee.state.pairingUri;
                                    if (a && o && (r || l || c))
                                        te.open = !0,
                                        t();
                                    else
                                        var d = setInterval((function() {
                                            var e = L.state
                                              , n = ee.state;
                                            e.isUiLoaded && e.isDataLoaded && (e.isStandalone || n.pairingUri || c) && (clearInterval(d),
                                            te.open = !0,
                                            t())
                                        }
                                        ), 200)
                                }
                                )));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            close: function() {
                te.open = !1
            }
        }
          , re = Object.defineProperty
          , ae = Object.getOwnPropertySymbols
          , oe = Object.prototype.hasOwnProperty
          , ie = Object.prototype.propertyIsEnumerable
          , se = function(e, t, n) {
            return t in e ? re(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        };
        var ce = g({
            themeMode: typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        })
          , ue = {
            state: ce,
            subscribe: function(e) {
                return I(ce, (function() {
                    return e(ce)
                }
                ))
            },
            setThemeConfig: function(e) {
                var t = e.themeMode
                  , n = e.themeVariables;
                t && (ce.themeMode = t),
                n && (ce.themeVariables = function(e, t) {
                    for (var n in t || (t = {}))
                        oe.call(t, n) && se(e, n, t[n]);
                    if (ae) {
                        var r, o = (0,
                        a.Z)(ae(t));
                        try {
                            for (o.s(); !(r = o.n()).done; )
                                n = r.value,
                                ie.call(t, n) && se(e, n, t[n])
                        } catch (i) {
                            o.e(i)
                        } finally {
                            o.f()
                        }
                    }
                    return e
                }({}, n))
            }
        }
          , le = g({
            open: !1,
            message: "",
            variant: "success"
        })
          , de = {
            state: le,
            subscribe: function(e) {
                return I(le, (function() {
                    return e(le)
                }
                ))
            },
            openToast: function(e, t) {
                le.open = !0,
                le.message = e,
                le.variant = t
            },
            closeToast: function() {
                le.open = !1
            }
        };
        typeof window < "u" && (window.Buffer || (window.Buffer = C.Buffer),
        window.global || (window.global = window),
        window.process || (window.process = {
            env: {}
        }))
    },
    25489: function(e, t, n) {
        n.r(t),
        n.d(t, {
            Web3Modal: function() {
                return v
            }
        });
        var r = n(74165)
          , a = n(15861)
          , o = n(15671)
          , i = n(43144)
          , s = n(37762)
          , c = n(53763)
          , u = Object.defineProperty
          , l = Object.getOwnPropertySymbols
          , d = Object.prototype.hasOwnProperty
          , f = Object.prototype.propertyIsEnumerable
          , p = function(e, t, n) {
            return t in e ? u(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }
          , v = function() {
            function e(t) {
                (0,
                o.Z)(this, e),
                this.openModal = c.jb.open,
                this.closeModal = c.jb.close,
                this.subscribeModal = c.jb.subscribe,
                this.setTheme = c.Ic.setThemeConfig,
                c.Ic.setThemeConfig(t),
                c.t0.setConfig(function(e, t) {
                    for (var n in t || (t = {}))
                        d.call(t, n) && p(e, n, t[n]);
                    if (l) {
                        var r, a = (0,
                        s.Z)(l(t));
                        try {
                            for (a.s(); !(r = a.n()).done; )
                                n = r.value,
                                f.call(t, n) && p(e, n, t[n])
                        } catch (o) {
                            a.e(o)
                        } finally {
                            a.f()
                        }
                    }
                    return e
                }({
                    enableStandaloneMode: !0
                }, t)),
                this.initUi()
            }
            return (0,
            i.Z)(e, [{
                key: "initUi",
                value: function() {
                    var e = (0,
                    a.Z)((0,
                    r.Z)().mark((function e() {
                        var t;
                        return (0,
                        r.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!(typeof window < "u")) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3,
                                    Promise.all([n.e(316), n.e(16)]).then(n.bind(n, 44016));
                                case 3:
                                    t = document.createElement("w3m-modal"),
                                    document.body.insertAdjacentElement("beforeend", t),
                                    c.zb.setIsUiLoaded(!0);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }()
    }
}]);
