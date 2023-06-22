"use strict";
(self.webpackChunksyncswap = self.webpackChunksyncswap || []).push([[821], {
    4821: function(n, t, e) {
        e.r(t),
        e.d(t, {
            EthereumProvider: function() {
                return S
            },
            OPTIONAL_EVENTS: function() {
                return I
            },
            OPTIONAL_METHODS: function() {
                return m
            },
            REQUIRED_EVENTS: function() {
                return g
            },
            REQUIRED_METHODS: function() {
                return v
            },
            default: function() {
                return R
            }
        });
        var i = e(29439)
          , r = e(74165)
          , s = e(15861)
          , a = e(15671)
          , c = e(43144)
          , o = e(93433)
          , u = e(4942)
          , h = e(37762)
          , p = e(68041)
          , l = e(29219)
          , d = e(86092)
          , f = "".concat("wc", "@", 2, ":").concat("ethereum_provider", ":")
          , v = ["eth_sendTransaction", "personal_sign"]
          , m = ["eth_accounts", "eth_requestAccounts", "eth_call", "eth_getBalance", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
          , g = ["chainChanged", "accountsChanged"]
          , I = ["message", "disconnect", "connect"]
          , C = Object.defineProperty
          , w = Object.defineProperties
          , y = Object.getOwnPropertyDescriptors
          , k = Object.getOwnPropertySymbols
          , b = Object.prototype.hasOwnProperty
          , E = Object.prototype.propertyIsEnumerable
          , _ = function(n, t, e) {
            return t in n ? C(n, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
            }) : n[t] = e
        }
          , Z = function(n, t) {
            for (var e in t || (t = {}))
                b.call(t, e) && _(n, e, t[e]);
            if (k) {
                var i, r = (0,
                h.Z)(k(t));
                try {
                    for (r.s(); !(i = r.n()).done; ) {
                        e = i.value;
                        E.call(t, e) && _(n, e, t[e])
                    }
                } catch (s) {
                    r.e(s)
                } finally {
                    r.f()
                }
            }
            return n
        }
          , M = function(n, t) {
            return w(n, y(t))
        };
        function x(n) {
            return Number(n[0].split(":")[1])
        }
        function O(n) {
            return "0x".concat(n.toString(16))
        }
        function A(n) {
            var t = n.chains
              , e = n.optionalChains
              , i = n.methods
              , r = n.optionalMethods
              , s = n.events
              , a = n.optionalEvents
              , c = n.rpcMap;
            if (!(0,
            l.qt)(t))
                throw new Error("Invalid chains");
            var h = t
              , p = i || v
              , d = s || g
              , f = {
                chains: h,
                methods: p,
                events: d,
                rpcMap: (0,
                u.Z)({}, x(h), c[x(h)])
            }
              , m = null === s || void 0 === s ? void 0 : s.filter((function(n) {
                return !g.includes(n)
            }
            ))
              , I = null === i || void 0 === i ? void 0 : i.filter((function(n) {
                return !v.includes(n)
            }
            ));
            if (!e && !a && !r && (null == m || !m.length) && (null == I || !I.length))
                return {
                    required: f
                };
            var C = (null === m || void 0 === m ? void 0 : m.length) && (null === I || void 0 === I ? void 0 : I.length) || !e;
            return {
                required: f,
                optional: {
                    chains: (0,
                    o.Z)(new Set(C ? h.concat(e || []) : e)),
                    methods: (0,
                    o.Z)(new Set(p.concat(r || []))),
                    events: (0,
                    o.Z)(new Set(d.concat(a || []))),
                    rpcMap: c
                }
            }
        }
        var R = function() {
            function n() {
                var t = this;
                (0,
                a.Z)(this, n),
                this.events = new p.EventEmitter,
                this.namespace = "eip155",
                this.accounts = [],
                this.chainId = 1,
                this.STORAGE_KEY = f,
                this.on = function(n, e) {
                    return t.events.on(n, e),
                    t
                }
                ,
                this.once = function(n, e) {
                    return t.events.once(n, e),
                    t
                }
                ,
                this.removeListener = function(n, e) {
                    return t.events.removeListener(n, e),
                    t
                }
                ,
                this.off = function(n, e) {
                    return t.events.off(n, e),
                    t
                }
                ,
                this.parseAccount = function(n) {
                    return t.isCompatibleChainId(n) ? t.parseAccountId(n).address : n
                }
                ,
                this.signer = {},
                this.rpc = {}
            }
            return (0,
            c.Z)(n, [{
                key: "request",
                value: function() {
                    var n = (0,
                    s.Z)((0,
                    r.Z)().mark((function n(t) {
                        return (0,
                        r.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    this.signer.request(t, this.formatChainId(this.chainId));
                                case 2:
                                    return n.abrupt("return", n.sent);
                                case 3:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function(t) {
                        return n.apply(this, arguments)
                    }
                }()
            }, {
                key: "sendAsync",
                value: function(n, t) {
                    this.signer.sendAsync(n, t, this.formatChainId(this.chainId))
                }
            }, {
                key: "connected",
                get: function() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
            }, {
                key: "connecting",
                get: function() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
            }, {
                key: "enable",
                value: function() {
                    var n = (0,
                    s.Z)((0,
                    r.Z)().mark((function n() {
                        return (0,
                        r.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (n.t0 = this.session,
                                    n.t0) {
                                        n.next = 4;
                                        break
                                    }
                                    return n.next = 4,
                                    this.connect();
                                case 4:
                                    return n.next = 6,
                                    this.request({
                                        method: "eth_requestAccounts"
                                    });
                                case 6:
                                    return n.abrupt("return", n.sent);
                                case 7:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }()
            }, {
                key: "connect",
                value: function() {
                    var n = (0,
                    s.Z)((0,
                    r.Z)().mark((function n(t) {
                        var e, i, a, c, o, h = this;
                        return (0,
                        r.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (this.signer.client) {
                                        n.next = 2;
                                        break
                                    }
                                    throw new Error("Provider not initialized. Call init() first");
                                case 2:
                                    return this.loadConnectOpts(t),
                                    e = A(this.rpc),
                                    i = e.required,
                                    a = e.optional,
                                    n.prev = 4,
                                    n.next = 7,
                                    new Promise(function() {
                                        var n = (0,
                                        s.Z)((0,
                                        r.Z)().mark((function n(e, s) {
                                            var c;
                                            return (0,
                                            r.Z)().wrap((function(n) {
                                                for (; ; )
                                                    switch (n.prev = n.next) {
                                                    case 0:
                                                        return h.rpc.showQrModal && (null == (c = h.modal) || c.subscribeModal((function(n) {
                                                            !n.open && !h.signer.session && (h.signer.abortPairingAttempt(),
                                                            s(new Error("Connection request reset. Please try again.")))
                                                        }
                                                        ))),
                                                        n.next = 3,
                                                        h.signer.connect(M(Z({
                                                            namespaces: (0,
                                                            u.Z)({}, h.namespace, i)
                                                        }, a && {
                                                            optionalNamespaces: (0,
                                                            u.Z)({}, h.namespace, a)
                                                        }), {
                                                            pairingTopic: null === t || void 0 === t ? void 0 : t.pairingTopic
                                                        })).then((function(n) {
                                                            e(n)
                                                        }
                                                        )).catch((function(n) {
                                                            s(new Error(n.message))
                                                        }
                                                        ));
                                                    case 3:
                                                    case "end":
                                                        return n.stop()
                                                    }
                                            }
                                            ), n)
                                        }
                                        )));
                                        return function(t, e) {
                                            return n.apply(this, arguments)
                                        }
                                    }());
                                case 7:
                                    if (c = n.sent) {
                                        n.next = 10;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 10:
                                    this.setChainIds(this.rpc.chains),
                                    o = (0,
                                    l.gu)(c.namespaces, [this.namespace]),
                                    this.setAccounts(o),
                                    this.events.emit("connect", {
                                        chainId: O(this.chainId)
                                    }),
                                    n.next = 18;
                                    break;
                                case 15:
                                    throw n.prev = 15,
                                    n.t0 = n.catch(4),
                                    this.signer.logger.error(n.t0),
                                    n.t0;
                                case 18:
                                    return n.prev = 18,
                                    this.modal && this.modal.closeModal(),
                                    n.finish(18);
                                case 21:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this, [[4, 15, 18, 21]])
                    }
                    )));
                    return function(t) {
                        return n.apply(this, arguments)
                    }
                }()
            }, {
                key: "disconnect",
                value: function() {
                    var n = (0,
                    s.Z)((0,
                    r.Z)().mark((function n() {
                        return (0,
                        r.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (n.t0 = this.session,
                                    !n.t0) {
                                        n.next = 4;
                                        break
                                    }
                                    return n.next = 4,
                                    this.signer.disconnect();
                                case 4:
                                    this.reset();
                                case 5:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }()
            }, {
                key: "isWalletConnect",
                get: function() {
                    return !0
                }
            }, {
                key: "session",
                get: function() {
                    return this.signer.session
                }
            }, {
                key: "registerEventListeners",
                value: function() {
                    var n = this;
                    this.signer.on("session_event", (function(t) {
                        var e = t.params.event;
                        "accountsChanged" === e.name ? (n.accounts = n.parseAccounts(e.data),
                        n.events.emit("accountsChanged", n.accounts)) : "chainChanged" === e.name ? n.setChainId(n.formatChainId(e.data)) : n.events.emit(e.name, e.data),
                        n.events.emit("session_event", t)
                    }
                    )),
                    this.signer.on("chainChanged", (function(t) {
                        var e = parseInt(t);
                        n.chainId = e,
                        n.events.emit("chainChanged", O(n.chainId)),
                        n.persist()
                    }
                    )),
                    this.signer.on("session_update", (function(t) {
                        n.events.emit("session_update", t)
                    }
                    )),
                    this.signer.on("session_delete", (function(t) {
                        n.reset(),
                        n.events.emit("session_delete", t),
                        n.events.emit("disconnect", M(Z({}, (0,
                        l.D6)("USER_DISCONNECTED")), {
                            data: t.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }
                    )),
                    this.signer.on("display_uri", (function(t) {
                        var e, i;
                        n.rpc.showQrModal && (null == (e = n.modal) || e.closeModal(),
                        null == (i = n.modal) || i.openModal({
                            uri: t
                        })),
                        n.events.emit("display_uri", t)
                    }
                    ))
                }
            }, {
                key: "setHttpProvider",
                value: function(n) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: n.toString(16)
                        }]
                    })
                }
            }, {
                key: "isCompatibleChainId",
                value: function(n) {
                    return "string" == typeof n && n.startsWith("".concat(this.namespace, ":"))
                }
            }, {
                key: "formatChainId",
                value: function(n) {
                    return "".concat(this.namespace, ":").concat(n)
                }
            }, {
                key: "parseChainId",
                value: function(n) {
                    return Number(n.split(":")[1])
                }
            }, {
                key: "setChainIds",
                value: function(n) {
                    var t = this
                      , e = n.filter((function(n) {
                        return t.isCompatibleChainId(n)
                    }
                    )).map((function(n) {
                        return t.parseChainId(n)
                    }
                    ));
                    e.length && (this.chainId = e[0],
                    this.events.emit("chainChanged", O(this.chainId)),
                    this.persist())
                }
            }, {
                key: "setChainId",
                value: function(n) {
                    if (this.isCompatibleChainId(n)) {
                        var t = this.parseChainId(n);
                        this.chainId = t,
                        this.setHttpProvider(t)
                    }
                }
            }, {
                key: "parseAccountId",
                value: function(n) {
                    var t = n.split(":")
                      , e = (0,
                    i.Z)(t, 3)
                      , r = e[0]
                      , s = e[1]
                      , a = e[2];
                    return {
                        chainId: "".concat(r, ":").concat(s),
                        address: a
                    }
                }
            }, {
                key: "setAccounts",
                value: function(n) {
                    var t = this;
                    this.accounts = n.filter((function(n) {
                        return t.parseChainId(t.parseAccountId(n).chainId) === t.chainId
                    }
                    )).map((function(n) {
                        return t.parseAccountId(n).address
                    }
                    )),
                    this.events.emit("accountsChanged", this.accounts)
                }
            }, {
                key: "getRpcConfig",
                value: function(n) {
                    var t, e, i = this;
                    return {
                        chains: (null == (t = n.chains) ? void 0 : t.map((function(n) {
                            return i.formatChainId(n)
                        }
                        ))) || ["".concat(this.namespace, ":1")],
                        optionalChains: n.optionalChains ? n.optionalChains.map((function(n) {
                            return i.formatChainId(n)
                        }
                        )) : void 0,
                        methods: (null === n || void 0 === n ? void 0 : n.methods) || v,
                        events: (null === n || void 0 === n ? void 0 : n.events) || g,
                        optionalMethods: (null === n || void 0 === n ? void 0 : n.optionalMethods) || [],
                        optionalEvents: (null === n || void 0 === n ? void 0 : n.optionalEvents) || [],
                        rpcMap: (null === n || void 0 === n ? void 0 : n.rpcMap) || this.buildRpcMap(n.chains.concat(n.optionalChains || []), n.projectId),
                        showQrModal: Boolean(null === n || void 0 === n ? void 0 : n.showQrModal),
                        qrModalOptions: null != (e = null === n || void 0 === n ? void 0 : n.qrModalOptions) ? e : void 0,
                        projectId: n.projectId,
                        metadata: n.metadata
                    }
                }
            }, {
                key: "buildRpcMap",
                value: function(n, t) {
                    var e = this
                      , i = {};
                    return n.forEach((function(n) {
                        i[n] = e.getRpcUrl(n, t)
                    }
                    )),
                    i
                }
            }, {
                key: "initialize",
                value: function() {
                    var n = (0,
                    s.Z)((0,
                    r.Z)().mark((function n(t) {
                        var i, s;
                        return (0,
                        r.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return this.rpc = this.getRpcConfig(t),
                                    this.chainId = x(this.rpc.chains),
                                    n.next = 4,
                                    d.k.init({
                                        projectId: this.rpc.projectId,
                                        metadata: this.rpc.metadata
                                    });
                                case 4:
                                    return this.signer = n.sent,
                                    this.registerEventListeners(),
                                    n.next = 8,
                                    this.loadPersistedSession();
                                case 8:
                                    if (!this.rpc.showQrModal) {
                                        n.next = 20;
                                        break
                                    }
                                    return n.prev = 9,
                                    n.next = 12,
                                    e.e(489).then(e.bind(e, 25489));
                                case 12:
                                    i = n.sent,
                                    s = i.Web3Modal,
                                    this.modal = new s(Z({
                                        walletConnectVersion: 2,
                                        projectId: this.rpc.projectId,
                                        standaloneChains: this.rpc.chains
                                    }, this.rpc.qrModalOptions)),
                                    n.next = 20;
                                    break;
                                case 17:
                                    throw n.prev = 17,
                                    n.t0 = n.catch(9),
                                    new Error("To use QR modal, please install @web3modal/standalone package");
                                case 20:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this, [[9, 17]])
                    }
                    )));
                    return function(t) {
                        return n.apply(this, arguments)
                    }
                }()
            }, {
                key: "loadConnectOpts",
                value: function(n) {
                    var t = this;
                    if (n) {
                        var e = n.chains
                          , i = n.optionalChains
                          , r = n.rpcMap;
                        e && (0,
                        l.qt)(e) && (this.rpc.chains = e.map((function(n) {
                            return t.formatChainId(n)
                        }
                        )),
                        e.forEach((function(n) {
                            t.rpc.rpcMap[n] = (null === r || void 0 === r ? void 0 : r[n]) || t.getRpcUrl(n)
                        }
                        ))),
                        i && (0,
                        l.qt)(i) && (this.rpc.optionalChains = [],
                        this.rpc.optionalChains = null === i || void 0 === i ? void 0 : i.map((function(n) {
                            return t.formatChainId(n)
                        }
                        )),
                        i.forEach((function(n) {
                            t.rpc.rpcMap[n] = (null === r || void 0 === r ? void 0 : r[n]) || t.getRpcUrl(n)
                        }
                        )))
                    }
                }
            }, {
                key: "getRpcUrl",
                value: function(n, t) {
                    var e;
                    return (null == (e = this.rpc.rpcMap) ? void 0 : e[n]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=eip155:").concat(n, "&projectId=").concat(t || this.rpc.projectId)
                }
            }, {
                key: "loadPersistedSession",
                value: function() {
                    var n = (0,
                    s.Z)((0,
                    r.Z)().mark((function n() {
                        var t;
                        return (0,
                        r.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (this.session) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    return n.next = 4,
                                    this.signer.client.core.storage.getItem("".concat(this.STORAGE_KEY, "/chainId"));
                                case 4:
                                    t = n.sent,
                                    this.setChainIds(t ? [this.formatChainId(t)] : this.session.namespaces[this.namespace].accounts),
                                    this.setAccounts(this.session.namespaces[this.namespace].accounts);
                                case 6:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }()
            }, {
                key: "reset",
                value: function() {
                    this.chainId = 1,
                    this.accounts = []
                }
            }, {
                key: "persist",
                value: function() {
                    this.session && this.signer.client.core.storage.setItem("".concat(this.STORAGE_KEY, "/chainId"), this.chainId)
                }
            }, {
                key: "parseAccounts",
                value: function(n) {
                    var t = this;
                    return "string" == typeof n || n instanceof String ? [this.parseAccount(n)] : n.map((function(n) {
                        return t.parseAccount(n)
                    }
                    ))
                }
            }], [{
                key: "init",
                value: function() {
                    var t = (0,
                    s.Z)((0,
                    r.Z)().mark((function t(e) {
                        var i;
                        return (0,
                        r.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return i = new n,
                                    t.next = 3,
                                    i.initialize(e);
                                case 3:
                                    return t.abrupt("return", i);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }()
            }]),
            n
        }()
          , S = R
    }
}]);
