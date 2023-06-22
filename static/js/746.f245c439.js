"use strict";
(self.webpackChunksyncswap = self.webpackChunksyncswap || []).push([[746], {
    39528: function(e, t, r) {
        r.d(t, {
            Gn: function() {
                return x
            },
            HU: function() {
                return d
            }
        });
        var n = r(29439)
          , i = r(74165)
          , s = r(15671)
          , a = r(43144)
          , o = r(93433)
          , c = r(4942)
          , u = r(66797)
          , p = r(68041)
          , l = r(29219)
          , f = r(86092)
          , h = "".concat("wc", "@").concat(2, ":").concat("ethereum_provider", ":")
          , d = ["eth_sendTransaction", "personal_sign"]
          , v = ["chainChanged", "accountsChanged"]
          , g = r(85491);
        function m(e) {
            return Number(e[0].split(":")[1])
        }
        function y(e) {
            return "0x".concat(e.toString(16))
        }
        function b(e) {
            var t = e.chains
              , r = e.optionalChains
              , n = e.methods
              , i = e.optionalMethods
              , s = e.events
              , a = e.optionalEvents
              , u = e.rpcMap;
            if (!(0,
            l.qt)(t))
                throw new Error("Invalid chains");
            var p = t
              , f = n || d
              , h = s || v
              , g = {
                chains: p,
                methods: f,
                events: h,
                rpcMap: (0,
                c.Z)({}, m(p), u[m(p)])
            }
              , y = null === s || void 0 === s ? void 0 : s.filter((function(e) {
                return !v.includes(e)
            }
            ))
              , b = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                return !d.includes(e)
            }
            ));
            if (!r && !a && !i && !(null === y || void 0 === y ? void 0 : y.length) && !(null === b || void 0 === b ? void 0 : b.length))
                return {
                    required: g
                };
            var w = (null === y || void 0 === y ? void 0 : y.length) && (null === b || void 0 === b ? void 0 : b.length) || !r;
            return {
                required: g,
                optional: {
                    chains: (0,
                    o.Z)(new Set(w ? p.concat(r || []) : r)),
                    methods: (0,
                    o.Z)(new Set(f.concat(i || []))),
                    events: (0,
                    o.Z)(new Set(h.concat(a || []))),
                    rpcMap: u
                }
            }
        }
        var w = function() {
            function e() {
                var t = this;
                (0,
                s.Z)(this, e),
                this.events = new p.EventEmitter,
                this.namespace = "eip155",
                this.accounts = [],
                this.chainId = 1,
                this.STORAGE_KEY = h,
                this.on = function(e, r) {
                    return t.events.on(e, r),
                    t
                }
                ,
                this.once = function(e, r) {
                    return t.events.once(e, r),
                    t
                }
                ,
                this.removeListener = function(e, r) {
                    return t.events.removeListener(e, r),
                    t
                }
                ,
                this.off = function(e, r) {
                    return t.events.off(e, r),
                    t
                }
                ,
                this.parseAccount = function(e) {
                    return t.isCompatibleChainId(e) ? t.parseAccountId(e).address : e
                }
                ,
                this.signer = {},
                this.rpc = {}
            }
            return (0,
            a.Z)(e, [{
                key: "request",
                value: function(e) {
                    return (0,
                    u.__awaiter)(this, void 0, void 0, (0,
                    i.Z)().mark((function t() {
                        var r, n, s, a = this;
                        return (0,
                        i.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = this.rpc.methods.includes(e.method),
                                    n = function() {
                                        return a.signer.request(e, a.formatChainId(a.chainId))
                                    }
                                    ,
                                    r) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return", n());
                                case 4:
                                    return t.prev = 4,
                                    g._.showApprovalModal(e),
                                    t.next = 8,
                                    n();
                                case 8:
                                    return s = t.sent,
                                    g._.closeModal("animateSuccess"),
                                    t.abrupt("return", s);
                                case 13:
                                    throw t.prev = 13,
                                    t.t0 = t.catch(4),
                                    g._.closeModal(),
                                    t.t0;
                                case 17:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[4, 13]])
                    }
                    )))
                }
            }, {
                key: "sendAsync",
                value: function(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
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
                    return (0,
                    u.__awaiter)(this, void 0, void 0, (0,
                    i.Z)().mark((function e() {
                        var t;
                        return (0,
                        i.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.session) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3,
                                    this.connect();
                                case 3:
                                    return e.next = 5,
                                    this.request({
                                        method: "eth_requestAccounts"
                                    });
                                case 5:
                                    return t = e.sent,
                                    e.abrupt("return", t);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "connect",
                value: function(e) {
                    return (0,
                    u.__awaiter)(this, void 0, void 0, (0,
                    i.Z)().mark((function t() {
                        var r, n, s, a, o, p = this;
                        return (0,
                        i.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.signer.client) {
                                        t.next = 2;
                                        break
                                    }
                                    throw new Error("Provider not initialized. Call init() first");
                                case 2:
                                    return this.loadConnectOpts(e),
                                    r = b(this.rpc),
                                    n = r.required,
                                    s = r.optional,
                                    t.prev = 4,
                                    t.next = 7,
                                    new Promise((function(t, r) {
                                        return (0,
                                        u.__awaiter)(p, void 0, void 0, (0,
                                        i.Z)().mark((function a() {
                                            return (0,
                                            i.Z)().wrap((function(i) {
                                                for (; ; )
                                                    switch (i.prev = i.next) {
                                                    case 0:
                                                        return this.rpc.showQrModal,
                                                        i.next = 3,
                                                        this.signer.connect(Object.assign(Object.assign({
                                                            namespaces: (0,
                                                            c.Z)({}, this.namespace, n)
                                                        }, s && {
                                                            optionalNamespaces: (0,
                                                            c.Z)({}, this.namespace, s)
                                                        }), {
                                                            pairingTopic: null === e || void 0 === e ? void 0 : e.pairingTopic
                                                        })).then((function(e) {
                                                            t(e)
                                                        }
                                                        )).catch((function(e) {
                                                            r(new Error(e.message))
                                                        }
                                                        ));
                                                    case 3:
                                                    case "end":
                                                        return i.stop()
                                                    }
                                            }
                                            ), a, this)
                                        }
                                        )))
                                    }
                                    ));
                                case 7:
                                    if (a = t.sent) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 10:
                                    this.setChainIds(this.rpc.chains),
                                    o = (0,
                                    l.gu)(a.namespaces, [this.namespace]),
                                    this.setAccounts(o),
                                    this.events.emit("connect", {
                                        chainId: y(this.chainId)
                                    }),
                                    g._.closeModal("animateSuccess"),
                                    t.next = 22;
                                    break;
                                case 17:
                                    throw t.prev = 17,
                                    t.t0 = t.catch(4),
                                    this.signer.logger.error(t.t0),
                                    g._.closeModal(),
                                    t.t0;
                                case 22:
                                    return t.prev = 22,
                                    t.finish(22);
                                case 24:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[4, 17, 22, 24]])
                    }
                    )))
                }
            }, {
                key: "disconnect",
                value: function() {
                    return (0,
                    u.__awaiter)(this, void 0, void 0, (0,
                    i.Z)().mark((function e() {
                        return (0,
                        i.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.session) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3,
                                    this.signer.disconnect();
                                case 3:
                                    this.reset();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
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
                    var e = this;
                    this.signer.on("session_event", (function(t) {
                        var r = t.params.event;
                        "accountsChanged" === r.name ? (e.accounts = e.parseAccounts(r.data),
                        e.events.emit("accountsChanged", e.accounts)) : "chainChanged" === r.name ? e.setChainId(e.formatChainId(r.data)) : e.events.emit(r.name, r.data),
                        e.events.emit("session_event", t)
                    }
                    )),
                    this.signer.on("chainChanged", (function(t) {
                        var r = parseInt(t);
                        e.chainId = r,
                        e.events.emit("chainChanged", y(e.chainId)),
                        e.persist()
                    }
                    )),
                    this.signer.on("session_update", (function(t) {
                        e.events.emit("session_update", t)
                    }
                    )),
                    this.signer.on("session_delete", (function(t) {
                        e.reset(),
                        e.events.emit("session_delete", t),
                        e.events.emit("disconnect", Object.assign(Object.assign({}, (0,
                        l.D6)("USER_DISCONNECTED")), {
                            data: t.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }
                    )),
                    this.signer.on("display_uri", (function(t) {
                        g._.closeModal(),
                        g._.showConnectionModal(t),
                        e.events.emit("display_uri", t)
                    }
                    ))
                }
            }, {
                key: "setHttpProvider",
                value: function(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
            }, {
                key: "isCompatibleChainId",
                value: function(e) {
                    return "string" === typeof e && e.startsWith("".concat(this.namespace, ":"))
                }
            }, {
                key: "formatChainId",
                value: function(e) {
                    return "".concat(this.namespace, ":").concat(e)
                }
            }, {
                key: "parseChainId",
                value: function(e) {
                    return Number(e.split(":")[1])
                }
            }, {
                key: "setChainIds",
                value: function(e) {
                    var t = this
                      , r = e.filter((function(e) {
                        return t.isCompatibleChainId(e)
                    }
                    )).map((function(e) {
                        return t.parseChainId(e)
                    }
                    ));
                    r.length && (this.chainId = r[0],
                    this.events.emit("chainChanged", y(this.chainId)),
                    this.persist())
                }
            }, {
                key: "setChainId",
                value: function(e) {
                    if (this.isCompatibleChainId(e)) {
                        var t = this.parseChainId(e);
                        this.chainId = t,
                        this.setHttpProvider(t)
                    }
                }
            }, {
                key: "parseAccountId",
                value: function(e) {
                    var t = e.split(":")
                      , r = (0,
                    n.Z)(t, 3)
                      , i = r[0]
                      , s = r[1]
                      , a = r[2];
                    return {
                        chainId: "".concat(i, ":").concat(s),
                        address: a
                    }
                }
            }, {
                key: "setAccounts",
                value: function(e) {
                    var t = this;
                    this.accounts = e.filter((function(e) {
                        return t.parseChainId(t.parseAccountId(e).chainId) === t.chainId
                    }
                    )).map((function(e) {
                        return t.parseAccountId(e).address
                    }
                    )),
                    this.events.emit("accountsChanged", this.accounts)
                }
            }, {
                key: "getRpcConfig",
                value: function(e) {
                    var t, r, n = this;
                    return {
                        chains: (null === (t = e.chains) || void 0 === t ? void 0 : t.map((function(e) {
                            return n.formatChainId(e)
                        }
                        ))) || ["".concat(this.namespace, ":1")],
                        optionalChains: e.optionalChains ? e.optionalChains.map((function(e) {
                            return n.formatChainId(e)
                        }
                        )) : void 0,
                        methods: (null === e || void 0 === e ? void 0 : e.methods) || d,
                        events: (null === e || void 0 === e ? void 0 : e.events) || v,
                        optionalMethods: (null === e || void 0 === e ? void 0 : e.optionalMethods) || [],
                        optionalEvents: (null === e || void 0 === e ? void 0 : e.optionalEvents) || [],
                        rpcMap: (null === e || void 0 === e ? void 0 : e.rpcMap) || this.buildRpcMap(e.chains.concat(e.optionalChains || []), e.projectId),
                        showQrModal: Boolean(null === e || void 0 === e ? void 0 : e.showQrModal),
                        qrModalOptions: null !== (r = null === e || void 0 === e ? void 0 : e.qrModalOptions) && void 0 !== r ? r : void 0,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
            }, {
                key: "buildRpcMap",
                value: function(e, t) {
                    var r = this
                      , n = {};
                    return e.forEach((function(e) {
                        n[e] = r.getRpcUrl(e, t)
                    }
                    )),
                    n
                }
            }, {
                key: "initialize",
                value: function(e) {
                    return (0,
                    u.__awaiter)(this, void 0, void 0, (0,
                    i.Z)().mark((function t() {
                        return (0,
                        i.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.rpc = this.getRpcConfig(e),
                                    this.chainId = m(this.rpc.chains),
                                    t.next = 4,
                                    f.k.init({
                                        projectId: this.rpc.projectId,
                                        metadata: this.rpc.metadata
                                    });
                                case 4:
                                    return this.signer = t.sent,
                                    this.registerEventListeners(),
                                    t.next = 8,
                                    this.loadPersistedSession();
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "loadConnectOpts",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var r = e.chains
                          , n = e.optionalChains
                          , i = e.rpcMap;
                        r && (0,
                        l.qt)(r) && (this.rpc.chains = r.map((function(e) {
                            return t.formatChainId(e)
                        }
                        )),
                        r.forEach((function(e) {
                            t.rpc.rpcMap[e] = (null === i || void 0 === i ? void 0 : i[e]) || t.getRpcUrl(e)
                        }
                        ))),
                        n && (0,
                        l.qt)(n) && (this.rpc.optionalChains = [],
                        this.rpc.optionalChains = null === n || void 0 === n ? void 0 : n.map((function(e) {
                            return t.formatChainId(e)
                        }
                        )),
                        n.forEach((function(e) {
                            t.rpc.rpcMap[e] = (null === i || void 0 === i ? void 0 : i[e]) || t.getRpcUrl(e)
                        }
                        )))
                    }
                }
            }, {
                key: "getRpcUrl",
                value: function(e, t) {
                    var r;
                    return (null === (r = this.rpc.rpcMap) || void 0 === r ? void 0 : r[e]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=eip155:").concat(e, "&projectId=").concat(t || this.rpc.projectId)
                }
            }, {
                key: "loadPersistedSession",
                value: function() {
                    return (0,
                    u.__awaiter)(this, void 0, void 0, (0,
                    i.Z)().mark((function e() {
                        var t;
                        return (0,
                        i.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.session) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    this.signer.client.core.storage.getItem("".concat(this.STORAGE_KEY, "/chainId"));
                                case 4:
                                    t = e.sent,
                                    this.setChainIds(t ? [this.formatChainId(t)] : this.session.namespaces[this.namespace].accounts),
                                    this.setAccounts(this.session.namespaces[this.namespace].accounts);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
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
                value: function(e) {
                    var t = this;
                    return "string" === typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((function(e) {
                        return t.parseAccount(e)
                    }
                    ))
                }
            }], [{
                key: "init",
                value: function(t) {
                    return (0,
                    u.__awaiter)(this, void 0, void 0, (0,
                    i.Z)().mark((function r() {
                        var n;
                        return (0,
                        i.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return n = new e,
                                    r.next = 3,
                                    n.initialize(t);
                                case 3:
                                    return r.abrupt("return", n);
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))
                }
            }]),
            e
        }()
          , x = w
    },
    78489: function(e, t, r) {
        t.N = void 0;
        var n = r(71769);
        Object.defineProperty(t, "N", {
            enumerable: !0,
            get: function() {
                return n.SafeAppProvider
            }
        })
    },
    71769: function(e, t, r) {
        var n = r(27424).default
          , i = r(17061).default
          , s = r(17156).default
          , a = r(56690).default
          , o = r(89728).default
          , c = r(61655).default
          , u = r(26389).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SafeAppProvider = void 0;
        var p = r(68041)
          , l = r(26869)
          , f = function(e) {
            c(r, e);
            var t = u(r);
            function r(e, n) {
                var i;
                return a(this, r),
                (i = t.call(this)).submittedTxs = new Map,
                i.safe = e,
                i.sdk = n,
                i
            }
            return o(r, [{
                key: "connect",
                value: function() {
                    var e = s(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.emit("connect", {
                                        chainId: this.chainId
                                    }),
                                    e.abrupt("return");
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "disconnect",
                value: function() {
                    var e = s(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return");
                                case 1:
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
            }, {
                key: "chainId",
                get: function() {
                    return this.safe.chainId
                }
            }, {
                key: "request",
                value: function() {
                    var e = s(i().mark((function e(t) {
                        var r, s, a, o, c, u, p, f, h, d, v, g, m, y, b, w, x, k, Z, E;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    r = t.method,
                                    s = t.params,
                                    a = void 0 === s ? [] : s,
                                    e.t0 = r,
                                    e.next = "eth_accounts" === e.t0 ? 4 : "net_version" === e.t0 || "eth_chainId" === e.t0 ? 5 : "personal_sign" === e.t0 ? 6 : "eth_sign" === e.t0 ? 12 : "eth_signTypedData" === e.t0 || "eth_signTypedData_v4" === e.t0 ? 18 : "eth_sendTransaction" === e.t0 ? 25 : "eth_blockNumber" === e.t0 ? 32 : "eth_getBalance" === e.t0 ? 36 : "eth_getCode" === e.t0 ? 37 : "eth_getTransactionCount" === e.t0 ? 38 : "eth_getStorageAt" === e.t0 ? 39 : "eth_getBlockByNumber" === e.t0 ? 40 : "eth_getBlockByHash" === e.t0 ? 41 : "eth_getTransactionByHash" === e.t0 ? 42 : "eth_getTransactionReceipt" === e.t0 ? 55 : "eth_estimateGas" === e.t0 ? 66 : "eth_call" === e.t0 ? 67 : "eth_getLogs" === e.t0 ? 68 : "eth_gasPrice" === e.t0 ? 69 : "wallet_getPermissions" === e.t0 ? 70 : "wallet_requestPermissions" === e.t0 ? 71 : 72;
                                    break;
                                case 4:
                                    return e.abrupt("return", [this.safe.safeAddress]);
                                case 5:
                                    return e.abrupt("return", "0x".concat(this.chainId.toString(16)));
                                case 6:
                                    if (o = n(a, 2),
                                    c = o[0],
                                    u = o[1],
                                    this.safe.safeAddress.toLowerCase() === u.toLowerCase()) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("The address or message hash is invalid");
                                case 9:
                                    return e.next = 11,
                                    this.sdk.txs.signMessage(c);
                                case 11:
                                    return e.abrupt("return", "0x");
                                case 12:
                                    if (p = n(a, 2),
                                    f = p[0],
                                    h = p[1],
                                    this.safe.safeAddress.toLowerCase() === f.toLowerCase() && h.startsWith("0x")) {
                                        e.next = 15;
                                        break
                                    }
                                    throw new Error("The address or message hash is invalid");
                                case 15:
                                    return e.next = 17,
                                    this.sdk.txs.signMessage(h);
                                case 17:
                                    return e.abrupt("return", "0x");
                                case 18:
                                    if (d = n(a, 2),
                                    v = d[0],
                                    g = d[1],
                                    m = "string" === typeof g ? JSON.parse(g) : g,
                                    this.safe.safeAddress.toLowerCase() === v.toLowerCase()) {
                                        e.next = 22;
                                        break
                                    }
                                    throw new Error("The address is invalid");
                                case 22:
                                    return e.next = 24,
                                    this.sdk.txs.signTypedMessage(m);
                                case 24:
                                    return e.abrupt("return", "0x");
                                case 25:
                                    return "string" === typeof (y = Object.assign({
                                        value: "0",
                                        data: "0x"
                                    }, a[0])).gas && y.gas.startsWith("0x") && (y.gas = parseInt(y.gas, 16)),
                                    e.next = 29,
                                    this.sdk.txs.send({
                                        txs: [y],
                                        params: {
                                            safeTxGas: y.gas
                                        }
                                    });
                                case 29:
                                    return b = e.sent,
                                    this.submittedTxs.set(b.safeTxHash, {
                                        from: this.safe.safeAddress,
                                        hash: b.safeTxHash,
                                        gas: 0,
                                        gasPrice: "0x00",
                                        nonce: 0,
                                        input: y.data,
                                        value: y.value,
                                        to: y.to,
                                        blockHash: null,
                                        blockNumber: null,
                                        transactionIndex: null
                                    }),
                                    e.abrupt("return", b.safeTxHash);
                                case 32:
                                    return e.next = 34,
                                    this.sdk.eth.getBlockByNumber(["latest"]);
                                case 34:
                                    return w = e.sent,
                                    e.abrupt("return", w.number);
                                case 36:
                                    return e.abrupt("return", this.sdk.eth.getBalance([(0,
                                    l.getLowerCase)(a[0]), a[1]]));
                                case 37:
                                    return e.abrupt("return", this.sdk.eth.getCode([(0,
                                    l.getLowerCase)(a[0]), a[1]]));
                                case 38:
                                    return e.abrupt("return", this.sdk.eth.getTransactionCount([(0,
                                    l.getLowerCase)(a[0]), a[1]]));
                                case 39:
                                    return e.abrupt("return", this.sdk.eth.getStorageAt([(0,
                                    l.getLowerCase)(a[0]), a[1], a[2]]));
                                case 40:
                                    return e.abrupt("return", this.sdk.eth.getBlockByNumber([a[0], a[1]]));
                                case 41:
                                    return e.abrupt("return", this.sdk.eth.getBlockByHash([a[0], a[1]]));
                                case 42:
                                    return x = a[0],
                                    e.prev = 43,
                                    e.next = 46,
                                    this.sdk.txs.getBySafeTxHash(x);
                                case 46:
                                    k = e.sent,
                                    x = k.txHash || x,
                                    e.next = 52;
                                    break;
                                case 50:
                                    e.prev = 50,
                                    e.t1 = e.catch(43);
                                case 52:
                                    if (!this.submittedTxs.has(x)) {
                                        e.next = 54;
                                        break
                                    }
                                    return e.abrupt("return", this.submittedTxs.get(x));
                                case 54:
                                    return e.abrupt("return", this.sdk.eth.getTransactionByHash([x]).then((function(e) {
                                        return e && (e.hash = a[0]),
                                        e
                                    }
                                    )));
                                case 55:
                                    return Z = a[0],
                                    e.prev = 56,
                                    e.next = 59,
                                    this.sdk.txs.getBySafeTxHash(Z);
                                case 59:
                                    E = e.sent,
                                    Z = E.txHash || Z,
                                    e.next = 65;
                                    break;
                                case 63:
                                    e.prev = 63,
                                    e.t2 = e.catch(56);
                                case 65:
                                    return e.abrupt("return", this.sdk.eth.getTransactionReceipt([Z]).then((function(e) {
                                        return e && (e.transactionHash = a[0]),
                                        e
                                    }
                                    )));
                                case 66:
                                    return e.abrupt("return", this.sdk.eth.getEstimateGas(a[0]));
                                case 67:
                                    return e.abrupt("return", this.sdk.eth.call([a[0], a[1]]));
                                case 68:
                                    return e.abrupt("return", this.sdk.eth.getPastLogs([a[0]]));
                                case 69:
                                    return e.abrupt("return", this.sdk.eth.getGasPrice());
                                case 70:
                                    return e.abrupt("return", this.sdk.wallet.getPermissions());
                                case 71:
                                    return e.abrupt("return", this.sdk.wallet.requestPermissions(a[0]));
                                case 72:
                                    throw Error('"'.concat(t.method, '" not implemented'));
                                case 73:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[43, 50], [56, 63]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "send",
                value: function(e, t) {
                    e || t("Undefined request"),
                    this.request(e).then((function(r) {
                        return t(null, {
                            jsonrpc: "2.0",
                            id: e.id,
                            result: r
                        })
                    }
                    )).catch((function(e) {
                        return t(e, null)
                    }
                    ))
                }
            }]),
            r
        }(p.EventEmitter);
        t.SafeAppProvider = f
    },
    26869: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getLowerCase = void 0,
        t.getLowerCase = function(e) {
            return e ? e.toLowerCase() : e
        }
    },
    49359: function(e, t, r) {
        r.d(t, {
            XR: function() {
                return c
            },
            x0: function() {
                return u
            }
        });
        var n = r(43144)
          , i = r(15671)
          , s = r(60136)
          , a = r(29388)
          , o = r(62181)
          , c = function(e) {
            (0,
            s.Z)(r, e);
            var t = (0,
            a.Z)(r);
            function r(e) {
                return (0,
                i.Z)(this, r),
                t.call(this)
            }
            return (0,
            n.Z)(r)
        }(o.q)
          , u = function(e) {
            (0,
            s.Z)(r, e);
            var t = (0,
            a.Z)(r);
            function r(e) {
                return (0,
                i.Z)(this, r),
                t.call(this)
            }
            return (0,
            n.Z)(r)
        }(function(e) {
            (0,
            s.Z)(r, e);
            var t = (0,
            a.Z)(r);
            function r() {
                return (0,
                i.Z)(this, r),
                t.call(this)
            }
            return (0,
            n.Z)(r)
        }(o.q))
    },
    86092: function(e, t, r) {
        r.d(t, {
            k: function() {
                return Zs
            }
        });
        var n = r(74165)
          , i = r(15861)
          , s = r(15671)
          , a = r(43144)
          , o = r(29439)
          , c = r(93433)
          , u = r(37762)
          , p = r(24)
          , l = r.n(p)
          , f = r(97326)
          , h = r(60136)
          , d = r(29388)
          , v = r(4942)
          , g = r(1413)
          , m = r(68041)
          , y = r.n(m)
          , b = r(60074)
          , w = r(1345)
          , x = r(91451)
          , k = r(46857)
          , Z = r(70758)
          , E = r(15650)
          , I = r(74533)
          , P = r(81791)
          , _ = r(14701)
          , S = r(49900)
          , N = r(23539)
          , R = r(91696)
          , O = r(90876)
          , C = r(93659)
          , T = r(38783)
          , A = r(55210)
          , D = r(7289)
          , L = r(10947)
          , q = r(7490);
        function M(e, t) {
            return e.includes(":") ? [e] : t.chains || []
        }
        var U = "base10"
          , j = "base16"
          , z = "base64pad"
          , B = "utf8"
          , V = 0
          , K = 1
          , H = 0
          , F = 1
          , G = 12
          , J = 32;
        function W() {
            var e = (0,
            _.randomBytes)(J);
            return (0,
            R.BB)(e, j)
        }
        function Y(e) {
            var t = (0,
            S.vp)((0,
            R.mL)(e, j));
            return (0,
            R.BB)(t, j)
        }
        function Q(e) {
            var t = (0,
            S.vp)((0,
            R.mL)(e, B));
            return (0,
            R.BB)(t, j)
        }
        function X(e) {
            return Number((0,
            R.BB)(e, U))
        }
        function $(e) {
            var t = function(e) {
                return (0,
                R.mL)("".concat(e), U)
            }(typeof e.type < "u" ? e.type : V);
            if (X(t) === K && typeof e.senderPublicKey > "u")
                throw new Error("Missing sender public key for type 1 envelope");
            var r = typeof e.senderPublicKey < "u" ? (0,
            R.mL)(e.senderPublicKey, j) : void 0
              , n = typeof e.iv < "u" ? (0,
            R.mL)(e.iv, j) : (0,
            _.randomBytes)(G);
            return function(e) {
                if (X(e.type) === K) {
                    if (typeof e.senderPublicKey > "u")
                        throw new Error("Missing sender public key for type 1 envelope");
                    return (0,
                    R.BB)((0,
                    R.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), z)
                }
                return (0,
                R.BB)((0,
                R.zo)([e.type, e.iv, e.sealed]), z)
            }({
                type: t,
                sealed: new I.OK((0,
                R.mL)(e.symKey, j)).seal(n, (0,
                R.mL)(e.message, B)),
                iv: n,
                senderPublicKey: r
            })
        }
        function ee(e) {
            var t = new I.OK((0,
            R.mL)(e.symKey, j))
              , r = te(e.encoded)
              , n = r.sealed
              , i = r.iv
              , s = t.open(i, n);
            if (null === s)
                throw new Error("Failed to decrypt");
            return (0,
            R.BB)(s, B)
        }
        function te(e) {
            var t = (0,
            R.mL)(e, z)
              , r = t.slice(H, F)
              , n = F;
            if (X(r) === K) {
                var i = n + J
                  , s = i + G
                  , a = t.slice(n, i)
                  , o = t.slice(i, s);
                return {
                    type: r,
                    sealed: t.slice(s),
                    iv: o,
                    senderPublicKey: a
                }
            }
            var c = n + G
              , u = t.slice(n, c);
            return {
                type: r,
                sealed: t.slice(c),
                iv: u
            }
        }
        function re(e, t) {
            var r = te(e);
            return ne({
                type: X(r.type),
                senderPublicKey: typeof r.senderPublicKey < "u" ? (0,
                R.BB)(r.senderPublicKey, j) : void 0,
                receiverPublicKey: null === t || void 0 === t ? void 0 : t.receiverPublicKey
            })
        }
        function ne(e) {
            var t = (null === e || void 0 === e ? void 0 : e.type) || V;
            if (t === K) {
                if (typeof (null === e || void 0 === e ? void 0 : e.senderPublicKey) > "u")
                    throw new Error("missing sender public key");
                if (typeof (null === e || void 0 === e ? void 0 : e.receiverPublicKey) > "u")
                    throw new Error("missing receiver public key")
            }
            return {
                type: t,
                senderPublicKey: null === e || void 0 === e ? void 0 : e.senderPublicKey,
                receiverPublicKey: null === e || void 0 === e ? void 0 : e.receiverPublicKey
            }
        }
        function ie(e) {
            return e.type === K && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
        }
        var se = Object.defineProperty
          , ae = Object.getOwnPropertySymbols
          , oe = Object.prototype.hasOwnProperty
          , ce = Object.prototype.propertyIsEnumerable
          , ue = function(e, t, r) {
            return t in e ? se(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , pe = function(e, t) {
            for (var r in t || (t = {}))
                oe.call(t, r) && ue(e, r, t[r]);
            if (ae) {
                var n, i = (0,
                u.Z)(ae(t));
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        r = n.value;
                        ce.call(t, r) && ue(e, r, t[r])
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
            }
            return e
        }
          , le = "ReactNative"
          , fe = {
            reactNative: "react-native",
            node: "node",
            browser: "browser",
            unknown: "unknown"
        }
          , he = "js";
        function de() {
            return typeof q < "u" && typeof q.versions < "u" && typeof q.versions.node < "u"
        }
        function ve() {
            return !(0,
            T.getDocument)() && (0,
            T.getNavigator)() && navigator.product === le ? fe.reactNative : de() ? fe.node : !de() && (0,
            T.getNavigator)() ? fe.browser : fe.unknown
        }
        function ge(e, t, r) {
            var n = function() {
                var e = (0,
                O.qY)();
                if (null === e)
                    return "unknown";
                var t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
            }()
              , i = function() {
                var e, t = ve();
                return t === fe.browser ? [t, (null == (e = (0,
                T.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
            }();
            return [[e, t].join("-"), [he, r].join("-"), n, i].join("/")
        }
        function me(e) {
            var t = e.protocol
              , r = e.version
              , n = e.relayUrl
              , i = e.sdkVersion
              , s = e.auth
              , a = e.projectId
              , o = e.useOnCloseEvent
              , c = n.split("?")
              , u = {
                auth: s,
                ua: ge(t, r, i),
                projectId: a,
                useOnCloseEvent: o || void 0
            }
              , p = function(e, t) {
                var r = D.parse(e);
                return r = pe(pe({}, r), t),
                D.stringify(r)
            }(c[1] || "", u);
            return c[0] + "?" + p
        }
        function ye(e, t) {
            return e.filter((function(e) {
                return t.includes(e)
            }
            )).length === e.length
        }
        function be(e) {
            return Object.fromEntries(e.entries())
        }
        function we(e) {
            return new Map(Object.entries(e))
        }
        function xe() {
            var e, t, r, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.FIVE_MINUTES, i = arguments.length > 1 ? arguments[1] : void 0, s = (0,
            C.toMiliseconds)(n || C.FIVE_MINUTES);
            return {
                resolve: function(t) {
                    r && e && (clearTimeout(r),
                    e(t))
                },
                reject: function(e) {
                    r && t && (clearTimeout(r),
                    t(e))
                },
                done: function() {
                    return new Promise((function(n, a) {
                        r = setTimeout((function() {
                            a(new Error(i))
                        }
                        ), s),
                        e = n,
                        t = a
                    }
                    ))
                }
            }
        }
        function ke(e, t, r) {
            return new Promise(function() {
                var s = (0,
                i.Z)((0,
                n.Z)().mark((function i(s, a) {
                    var o, c;
                    return (0,
                    n.Z)().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return o = setTimeout((function() {
                                    return a(new Error(r))
                                }
                                ), t),
                                n.prev = 1,
                                n.next = 4,
                                e;
                            case 4:
                                c = n.sent,
                                s(c),
                                n.next = 11;
                                break;
                            case 8:
                                n.prev = 8,
                                n.t0 = n.catch(1),
                                a(n.t0);
                            case 11:
                                clearTimeout(o);
                            case 12:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), i, null, [[1, 8]])
                }
                )));
                return function(e, t) {
                    return s.apply(this, arguments)
                }
            }())
        }
        function Ze(e, t) {
            if ("string" == typeof t && t.startsWith("".concat(e, ":")))
                return t;
            if ("topic" === e.toLowerCase()) {
                if ("string" != typeof t)
                    throw new Error('Value must be "string" for expirer target type: topic');
                return "topic:".concat(t)
            }
            if ("id" === e.toLowerCase()) {
                if ("number" != typeof t)
                    throw new Error('Value must be "number" for expirer target type: id');
                return "id:".concat(t)
            }
            throw new Error("Unknown expirer target type: ".concat(e))
        }
        function Ee(e) {
            var t = e.split(":")
              , r = (0,
            o.Z)(t, 2)
              , n = r[0]
              , i = r[1]
              , s = {
                id: void 0,
                topic: void 0
            };
            if ("topic" === n && "string" == typeof i)
                s.topic = i;
            else {
                if ("id" !== n || !Number.isInteger(Number(i)))
                    throw new Error("Invalid target, expected id:number or topic:string, got ".concat(n, ":").concat(i));
                s.id = Number(i)
            }
            return s
        }
        function Ie(e, t) {
            return (0,
            C.fromMiliseconds)((t || Date.now()) + (0,
            C.toMiliseconds)(e))
        }
        function Pe(e) {
            return Date.now() >= (0,
            C.toMiliseconds)(e)
        }
        function _e(e, t) {
            return "".concat(e).concat(t ? ":".concat(t) : "")
        }
        function Se(e) {
            return (null === e || void 0 === e ? void 0 : e.relay) || {
                protocol: "irn"
            }
        }
        function Ne(e) {
            var t = L.RELAY_JSONRPC[e];
            if (typeof t > "u")
                throw new Error("Relay Protocol not supported: ".concat(e));
            return t
        }
        var Re = Object.defineProperty
          , Oe = Object.getOwnPropertySymbols
          , Ce = Object.prototype.hasOwnProperty
          , Te = Object.prototype.propertyIsEnumerable
          , Ae = function(e, t, r) {
            return t in e ? Re(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        };
        function De(e) {
            var t = {}
              , r = "relay" + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-");
            return Object.keys(e).forEach((function(n) {
                if (n.startsWith(r)) {
                    var i = n.replace(r, "")
                      , s = e[n];
                    t[i] = s
                }
            }
            )),
            t
        }
        function Le(e) {
            var t = e.indexOf(":")
              , r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0
              , n = e.substring(0, t)
              , i = e.substring(t + 1, r).split("@")
              , s = typeof r < "u" ? e.substring(r) : ""
              , a = D.parse(s);
            return {
                protocol: n,
                topic: i[0],
                version: parseInt(i[1], 10),
                symKey: a.symKey,
                relay: De(a)
            }
        }
        function qe(e) {
            return "".concat(e.protocol, ":").concat(e.topic, "@").concat(e.version, "?") + D.stringify(function(e, t) {
                for (var r in t || (t = {}))
                    Ce.call(t, r) && Ae(e, r, t[r]);
                if (Oe) {
                    var n, i = (0,
                    u.Z)(Oe(t));
                    try {
                        for (i.s(); !(n = i.n()).done; )
                            r = n.value,
                            Te.call(t, r) && Ae(e, r, t[r])
                    } catch (s) {
                        i.e(s)
                    } finally {
                        i.f()
                    }
                }
                return e
            }({
                symKey: e.symKey
            }, function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-"
                  , r = {};
                return Object.keys(e).forEach((function(n) {
                    var i = "relay" + t + n;
                    e[n] && (r[i] = e[n])
                }
                )),
                r
            }(e.relay)))
        }
        function Me(e) {
            var t = [];
            return e.forEach((function(e) {
                var r = e.split(":")
                  , n = (0,
                o.Z)(r, 2)
                  , i = n[0]
                  , s = n[1];
                t.push("".concat(i, ":").concat(s))
            }
            )),
            t
        }
        function Ue(e, t) {
            var r = rt(e, t);
            if (r)
                throw new Error(r.message);
            for (var n = {}, i = 0, s = Object.entries(e); i < s.length; i++) {
                var a = (0,
                o.Z)(s[i], 2)
                  , c = a[0]
                  , u = a[1];
                n[c] = {
                    methods: u.methods,
                    events: u.events,
                    chains: u.accounts.map((function(e) {
                        return "".concat(e.split(":")[0], ":").concat(e.split(":")[1])
                    }
                    ))
                }
            }
            return n
        }
        var je = {
            INVALID_METHOD: {
                message: "Invalid method.",
                code: 1001
            },
            INVALID_EVENT: {
                message: "Invalid event.",
                code: 1002
            },
            INVALID_UPDATE_REQUEST: {
                message: "Invalid update request.",
                code: 1003
            },
            INVALID_EXTEND_REQUEST: {
                message: "Invalid extend request.",
                code: 1004
            },
            INVALID_SESSION_SETTLE_REQUEST: {
                message: "Invalid session settle request.",
                code: 1005
            },
            UNAUTHORIZED_METHOD: {
                message: "Unauthorized method.",
                code: 3001
            },
            UNAUTHORIZED_EVENT: {
                message: "Unauthorized event.",
                code: 3002
            },
            UNAUTHORIZED_UPDATE_REQUEST: {
                message: "Unauthorized update request.",
                code: 3003
            },
            UNAUTHORIZED_EXTEND_REQUEST: {
                message: "Unauthorized extend request.",
                code: 3004
            },
            USER_REJECTED: {
                message: "User rejected.",
                code: 5e3
            },
            USER_REJECTED_CHAINS: {
                message: "User rejected chains.",
                code: 5001
            },
            USER_REJECTED_METHODS: {
                message: "User rejected methods.",
                code: 5002
            },
            USER_REJECTED_EVENTS: {
                message: "User rejected events.",
                code: 5003
            },
            UNSUPPORTED_CHAINS: {
                message: "Unsupported chains.",
                code: 5100
            },
            UNSUPPORTED_METHODS: {
                message: "Unsupported methods.",
                code: 5101
            },
            UNSUPPORTED_EVENTS: {
                message: "Unsupported events.",
                code: 5102
            },
            UNSUPPORTED_ACCOUNTS: {
                message: "Unsupported accounts.",
                code: 5103
            },
            UNSUPPORTED_NAMESPACE_KEY: {
                message: "Unsupported namespace key.",
                code: 5104
            },
            USER_DISCONNECTED: {
                message: "User disconnected.",
                code: 6e3
            },
            SESSION_SETTLEMENT_FAILED: {
                message: "Session settlement failed.",
                code: 7e3
            },
            WC_METHOD_UNSUPPORTED: {
                message: "Unsupported wc_ method.",
                code: 10001
            }
        }
          , ze = {
            NOT_INITIALIZED: {
                message: "Not initialized.",
                code: 1
            },
            NO_MATCHING_KEY: {
                message: "No matching key.",
                code: 2
            },
            RESTORE_WILL_OVERRIDE: {
                message: "Restore will override.",
                code: 3
            },
            RESUBSCRIBED: {
                message: "Resubscribed.",
                code: 4
            },
            MISSING_OR_INVALID: {
                message: "Missing or invalid.",
                code: 5
            },
            EXPIRED: {
                message: "Expired.",
                code: 6
            },
            UNKNOWN_TYPE: {
                message: "Unknown type.",
                code: 7
            },
            MISMATCHED_TOPIC: {
                message: "Mismatched topic.",
                code: 8
            },
            NON_CONFORMING_NAMESPACES: {
                message: "Non conforming namespaces.",
                code: 9
            }
        };
        function Be(e, t) {
            var r = ze[e]
              , n = r.message
              , i = r.code;
            return {
                message: t ? "".concat(n, " ").concat(t) : n,
                code: i
            }
        }
        function Ve(e, t) {
            var r = je[e]
              , n = r.message
              , i = r.code;
            return {
                message: t ? "".concat(n, " ").concat(t) : n,
                code: i
            }
        }
        function Ke(e, t) {
            return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        }
        function He(e) {
            return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        }
        function Fe(e) {
            return typeof e > "u"
        }
        function Ge(e, t) {
            return !(!t || !Fe(e)) || "string" == typeof e && Boolean(e.trim().length)
        }
        function Je(e, t) {
            return !(!t || !Fe(e)) || "number" == typeof e && !isNaN(e)
        }
        function We(e) {
            return !(!Ge(e, !1) || !e.includes(":")) && 2 === e.split(":").length
        }
        function Ye(e) {
            var t;
            return null == (t = null === e || void 0 === e ? void 0 : e.proposer) ? void 0 : t.publicKey
        }
        function Qe(e) {
            return null === e || void 0 === e ? void 0 : e.topic
        }
        function Xe(e) {
            var t = !0;
            return Ke(e) ? e.length && (t = e.every((function(e) {
                return Ge(e, !1)
            }
            ))) : t = !1,
            t
        }
        function $e(e, t) {
            var r = null;
            return Object.entries(e).forEach((function(e) {
                var n = (0,
                o.Z)(e, 2)
                  , i = n[0]
                  , s = n[1];
                if (!r) {
                    var a = function(e, t, r) {
                        var n = null;
                        return Ke(t) ? t.forEach((function(t) {
                            n || (!We(t) || !t.includes(e)) && (n = Ve("UNSUPPORTED_CHAINS", "".concat(r, ", chain ").concat(t, ' should be a string and conform to "namespace:chainId" format')))
                        }
                        )) : n = Ve("UNSUPPORTED_CHAINS", "".concat(r, ", chains ").concat(t, ' should be an array of strings conforming to "namespace:chainId" format')),
                        n
                    }(i, M(i, s), "".concat(t, " requiredNamespace"));
                    a && (r = a)
                }
            }
            )),
            r
        }
        function et(e, t) {
            var r = null;
            return Ke(e) ? e.forEach((function(e) {
                r || function(e) {
                    if (Ge(e, !1) && e.includes(":")) {
                        var t = e.split(":");
                        if (3 === t.length) {
                            var r = t[0] + ":" + t[1];
                            return !!t[2] && We(r)
                        }
                    }
                    return !1
                }(e) || (r = Ve("UNSUPPORTED_ACCOUNTS", "".concat(t, ", account ").concat(e, ' should be a string and conform to "namespace:chainId:address" format')))
            }
            )) : r = Ve("UNSUPPORTED_ACCOUNTS", "".concat(t, ', accounts should be an array of strings conforming to "namespace:chainId:address" format')),
            r
        }
        function tt(e, t) {
            var r = null;
            return Object.values(e).forEach((function(e) {
                if (!r) {
                    var n = function(e, t) {
                        var r = null;
                        return Xe(null === e || void 0 === e ? void 0 : e.methods) ? Xe(null === e || void 0 === e ? void 0 : e.events) || (r = Ve("UNSUPPORTED_EVENTS", "".concat(t, ", events should be an array of strings or empty array for no events"))) : r = Ve("UNSUPPORTED_METHODS", "".concat(t, ", methods should be an array of strings or empty array for no methods")),
                        r
                    }(e, "".concat(t, ", namespace"));
                    n && (r = n)
                }
            }
            )),
            r
        }
        function rt(e, t) {
            var r = null;
            if (e && He(e)) {
                var n = tt(e, t);
                n && (r = n);
                var i = function(e, t) {
                    var r = null;
                    return Object.values(e).forEach((function(e) {
                        if (!r) {
                            var n = et(null === e || void 0 === e ? void 0 : e.accounts, "".concat(t, " namespace"));
                            n && (r = n)
                        }
                    }
                    )),
                    r
                }(e, t);
                i && (r = i)
            } else
                r = Be("MISSING_OR_INVALID", "".concat(t, ", namespaces should be an object with data"));
            return r
        }
        function nt(e) {
            return Ge(e.protocol, !0)
        }
        function it(e, t) {
            var r = !1;
            return t && !e ? r = !0 : e && Ke(e) && e.length && e.forEach((function(e) {
                r = nt(e)
            }
            )),
            r
        }
        function st(e) {
            return "number" == typeof e
        }
        function at(e) {
            return typeof e < "u" && null !== typeof e
        }
        function ot(e) {
            return !(!e || "object" != typeof e || !e.code || !Je(e.code, !1) || !e.message || !Ge(e.message, !1))
        }
        function ct(e) {
            return !(Fe(e) || !Ge(e.method, !1))
        }
        function ut(e) {
            return !(Fe(e) || Fe(e.result) && Fe(e.error) || !Je(e.id, !1) || !Ge(e.jsonrpc, !1))
        }
        function pt(e) {
            return !(Fe(e) || !Ge(e.name, !1))
        }
        function lt(e, t) {
            return !(!We(t) || !function(e) {
                var t = [];
                return Object.values(e).forEach((function(e) {
                    t.push.apply(t, (0,
                    c.Z)(Me(e.accounts)))
                }
                )),
                t
            }(e).includes(t))
        }
        function ft(e, t, r) {
            return !!Ge(r, !1) && function(e, t) {
                var r = [];
                return Object.values(e).forEach((function(e) {
                    Me(e.accounts).includes(t) && r.push.apply(r, (0,
                    c.Z)(e.methods))
                }
                )),
                r
            }(e, t).includes(r)
        }
        function ht(e, t, r) {
            return !!Ge(r, !1) && function(e, t) {
                var r = [];
                return Object.values(e).forEach((function(e) {
                    Me(e.accounts).includes(t) && r.push.apply(r, (0,
                    c.Z)(e.events))
                }
                )),
                r
            }(e, t).includes(r)
        }
        function dt(e, t, r) {
            var n = null
              , i = function(e) {
                var t = {};
                return Object.keys(e).forEach((function(r) {
                    var n;
                    r.includes(":") ? t[r] = e[r] : null == (n = e[r].chains) || n.forEach((function(n) {
                        t[n] = {
                            methods: e[r].methods,
                            events: e[r].events
                        }
                    }
                    ))
                }
                )),
                t
            }(e)
              , s = function(e) {
                var t = {};
                return Object.keys(e).forEach((function(r) {
                    if (r.includes(":"))
                        t[r] = e[r];
                    else {
                        var n = Me(e[r].accounts);
                        null === n || void 0 === n || n.forEach((function(n) {
                            t[n] = {
                                accounts: e[r].accounts.filter((function(e) {
                                    return e.includes("".concat(n, ":"))
                                }
                                )),
                                methods: e[r].methods,
                                events: e[r].events
                            }
                        }
                        ))
                    }
                }
                )),
                t
            }(t)
              , a = Object.keys(i)
              , o = Object.keys(s)
              , c = vt(Object.keys(e))
              , u = vt(Object.keys(t))
              , p = c.filter((function(e) {
                return !u.includes(e)
            }
            ));
            return p.length && (n = Be("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces keys don't satisfy requiredNamespaces.\n      Required: ").concat(p.toString(), "\n      Received: ").concat(Object.keys(t).toString()))),
            ye(a, o) || (n = Be("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces chains don't satisfy required namespaces.\n      Required: ").concat(a.toString(), "\n      Approved: ").concat(o.toString()))),
            Object.keys(t).forEach((function(e) {
                if (e.includes(":") && !n) {
                    var i = Me(t[e].accounts);
                    i.includes(e) || (n = Be("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces accounts don't satisfy namespace accounts for ").concat(e, "\n        Required: ").concat(e, "\n        Approved: ").concat(i.toString())))
                }
            }
            )),
            a.forEach((function(e) {
                n || (ye(i[e].methods, s[e].methods) ? ye(i[e].events, s[e].events) || (n = Be("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces events don't satisfy namespace events for ").concat(e))) : n = Be("NON_CONFORMING_NAMESPACES", "".concat(r, " namespaces methods don't satisfy namespace methods for ").concat(e)))
            }
            )),
            n
        }
        function vt(e) {
            return (0,
            c.Z)(new Set(e.map((function(e) {
                return e.includes(":") ? e.split(":")[0] : e
            }
            ))))
        }
        function gt(e, t) {
            return Je(e, !1) && e <= t.max && e >= t.min
        }
        var mt = r(31567)
          , yt = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e) {
                var n;
                return (0,
                s.Z)(this, r),
                (n = t.call(this, e)).events = new m.EventEmitter,
                n.hasRegisteredEventListeners = !1,
                n.connection = n.setConnection(e),
                n.connection.connected && n.registerEventListeners(),
                n
            }
            return (0,
            a.Z)(r, [{
                key: "connect",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r = arguments;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : this.connection,
                                    e.next = 3,
                                    this.open(t);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "disconnect",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.close();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "on",
                value: function(e, t) {
                    this.events.on(e, t)
                }
            }, {
                key: "once",
                value: function(e, t) {
                    this.events.once(e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.events.off(e, t)
                }
            }, {
                key: "removeListener",
                value: function(e, t) {
                    this.events.removeListener(e, t)
                }
            }, {
                key: "request",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.requestStrict((0,
                                    mt.formatJsonRpcRequest)(t.method, t.params || []), r));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "requestStrict",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var s = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = (0,
                                        i.Z)((0,
                                        n.Z)().mark((function e(i, a) {
                                            return (0,
                                            n.Z)().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        if (s.connection.connected) {
                                                            e.next = 9;
                                                            break
                                                        }
                                                        return e.prev = 1,
                                                        e.next = 4,
                                                        s.open();
                                                    case 4:
                                                        e.next = 9;
                                                        break;
                                                    case 6:
                                                        e.prev = 6,
                                                        e.t0 = e.catch(1),
                                                        a(e.t0);
                                                    case 9:
                                                        return s.events.on("".concat(t.id), (function(e) {
                                                            (0,
                                                            mt.isJsonRpcError)(e) ? a(e.error) : i(e.result)
                                                        }
                                                        )),
                                                        e.prev = 10,
                                                        e.next = 13,
                                                        s.connection.send(t, r);
                                                    case 13:
                                                        e.next = 18;
                                                        break;
                                                    case 15:
                                                        e.prev = 15,
                                                        e.t1 = e.catch(10),
                                                        a(e.t1);
                                                    case 18:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e, null, [[1, 6], [10, 15]])
                                        }
                                        )));
                                        return function(t, r) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setConnection",
                value: function() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
                }
            }, {
                key: "onPayload",
                value: function(e) {
                    this.events.emit("payload", e),
                    (0,
                    mt.isJsonRpcResponse)(e) ? this.events.emit("".concat(e.id), e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
            }, {
                key: "onClose",
                value: function(e) {
                    e && 3e3 === e.code && this.events.emit("error", new Error("WebSocket connection closed abnormally with code: ".concat(e.code, " ").concat(e.reason ? "(".concat(e.reason, ")") : ""))),
                    this.events.emit("disconnect")
                }
            }, {
                key: "open",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r = arguments;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = r.length > 0 && void 0 !== r[0] ? r[0] : this.connection,
                                    this.connection !== t || !this.connection.connected) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (this.connection.connected && this.close(),
                                    "string" !== typeof t) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 7,
                                    this.connection.open(t);
                                case 7:
                                    t = this.connection;
                                case 8:
                                    return this.connection = this.setConnection(t),
                                    e.next = 11,
                                    this.connection.open();
                                case 11:
                                    this.registerEventListeners(),
                                    this.events.emit("connect");
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "close",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.connection.close();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.hasRegisteredEventListeners || (this.connection.on("payload", (function(t) {
                        return e.onPayload(t)
                    }
                    )),
                    this.connection.on("close", (function(t) {
                        return e.onClose(t)
                    }
                    )),
                    this.connection.on("error", (function(t) {
                        return e.events.emit("error", t)
                    }
                    )),
                    this.connection.on("register_error", (function(t) {
                        return e.onClose()
                    }
                    )),
                    this.hasRegisteredEventListeners = !0)
                }
            }]),
            r
        }(mt.IJsonRpcProvider)
          , bt = "undefined" !== typeof r.g && "undefined" !== typeof r.g.WebSocket ? r.g.WebSocket : "undefined" !== typeof window && "undefined" !== typeof window.WebSocket ? window.WebSocket : r(78720)
          , wt = function() {
            function e(t) {
                if ((0,
                s.Z)(this, e),
                this.url = t,
                this.events = new m.EventEmitter,
                this.registering = !1,
                !(0,
                mt.isWsUrl)(t))
                    throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(t));
                this.url = t
            }
            return (0,
            a.Z)(e, [{
                key: "connected",
                get: function() {
                    return "undefined" !== typeof this.socket
                }
            }, {
                key: "connecting",
                get: function() {
                    return this.registering
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this.events.on(e, t)
                }
            }, {
                key: "once",
                value: function(e, t) {
                    this.events.once(e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.events.off(e, t)
                }
            }, {
                key: "removeListener",
                value: function(e, t) {
                    this.events.removeListener(e, t)
                }
            }, {
                key: "open",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r = arguments;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : this.url,
                                    e.next = 3,
                                    this.register(t);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "close",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, r) {
                                        "undefined" !== typeof t.socket ? (t.socket.onclose = function(r) {
                                            t.onClose(r),
                                            e()
                                        }
                                        ,
                                        t.socket.close()) : r(new Error("Connection already closed"))
                                    }
                                    )));
                                case 1:
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
            }, {
                key: "send",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("undefined" !== typeof this.socket) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3,
                                    this.register();
                                case 3:
                                    this.socket = e.sent;
                                case 4:
                                    try {
                                        this.socket.send((0,
                                        Z.u)(t))
                                    } catch (r) {
                                        this.onError(t.id, r)
                                    }
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "register",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.url;
                    if (!(0,
                    mt.isWsUrl)(t))
                        throw new Error("Provided URL is not compatible with WebSocket connection: ".concat(t));
                    if (this.registering) {
                        var r = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1),
                        new Promise((function(t, r) {
                            e.events.once("register_error", (function(t) {
                                e.resetMaxListeners(),
                                r(t)
                            }
                            )),
                            e.events.once("open", (function() {
                                if (e.resetMaxListeners(),
                                "undefined" === typeof e.socket)
                                    return r(new Error("WebSocket connection is missing or invalid"));
                                t(e.socket)
                            }
                            ))
                        }
                        ))
                    }
                    return this.url = t,
                    this.registering = !0,
                    new Promise((function(r, n) {
                        var i = (0,
                        mt.isReactNative)() ? void 0 : {
                            rejectUnauthorized: !(0,
                            mt.isLocalhostUrl)(t)
                        }
                          , s = new bt(t,[],i);
                        "undefined" !== typeof window ? s.onerror = function(t) {
                            var r = t;
                            n(e.emitError(r.error))
                        }
                        : s.on("error", (function(t) {
                            n(e.emitError(t))
                        }
                        )),
                        s.onopen = function() {
                            e.onOpen(s),
                            r(s)
                        }
                    }
                    ))
                }
            }, {
                key: "onOpen",
                value: function(e) {
                    var t = this;
                    e.onmessage = function(e) {
                        return t.onPayload(e)
                    }
                    ,
                    e.onclose = function(e) {
                        return t.onClose(e)
                    }
                    ,
                    this.socket = e,
                    this.registering = !1,
                    this.events.emit("open")
                }
            }, {
                key: "onClose",
                value: function(e) {
                    this.socket = void 0,
                    this.registering = !1,
                    this.events.emit("close", e)
                }
            }, {
                key: "onPayload",
                value: function(e) {
                    if ("undefined" !== typeof e.data) {
                        var t = "string" === typeof e.data ? (0,
                        Z.D)(e.data) : e.data;
                        this.events.emit("payload", t)
                    }
                }
            }, {
                key: "onError",
                value: function(e, t) {
                    var r = this.parseError(t)
                      , n = r.message || r.toString()
                      , i = (0,
                    mt.formatJsonRpcError)(e, n);
                    this.events.emit("payload", i)
                }
            }, {
                key: "parseError",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return (0,
                    mt.parseConnectionError)(e, t, "WS")
                }
            }, {
                key: "resetMaxListeners",
                value: function() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }, {
                key: "emitError",
                value: function(e) {
                    var t = this.parseError(new Error((null === e || void 0 === e ? void 0 : e.message) || "WebSocket connection failed for URL: ".concat(this.url)));
                    return this.events.emit("register_error", t),
                    t
                }
            }]),
            e
        }()
          , xt = wt
          , kt = r(23108)
          , Zt = r.n(kt);
        var Et = function(e, t) {
            if (e.length >= 255)
                throw new TypeError("Alphabet too long");
            for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
                r[n] = 255;
            for (var i = 0; i < e.length; i++) {
                var s = e.charAt(i)
                  , a = s.charCodeAt(0);
                if (255 !== r[a])
                    throw new TypeError(s + " is ambiguous");
                r[a] = i
            }
            var o = e.length
              , c = e.charAt(0)
              , u = Math.log(o) / Math.log(256)
              , p = Math.log(256) / Math.log(o);
            function l(e) {
                if ("string" != typeof e)
                    throw new TypeError("Expected String");
                if (0 === e.length)
                    return new Uint8Array;
                var t = 0;
                if (" " !== e[t]) {
                    for (var n = 0, i = 0; e[t] === c; )
                        n++,
                        t++;
                    for (var s = (e.length - t) * u + 1 >>> 0, a = new Uint8Array(s); e[t]; ) {
                        var p = r[e.charCodeAt(t)];
                        if (255 === p)
                            return;
                        for (var l = 0, f = s - 1; (0 !== p || l < i) && -1 !== f; f--,
                        l++)
                            p += o * a[f] >>> 0,
                            a[f] = p % 256 >>> 0,
                            p = p / 256 >>> 0;
                        if (0 !== p)
                            throw new Error("Non-zero carry");
                        i = l,
                        t++
                    }
                    if (" " !== e[t]) {
                        for (var h = s - i; h !== s && 0 === a[h]; )
                            h++;
                        for (var d = new Uint8Array(n + (s - h)), v = n; h !== s; )
                            d[v++] = a[h++];
                        return d
                    }
                }
            }
            return {
                encode: function(t) {
                    if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))),
                    !(t instanceof Uint8Array))
                        throw new TypeError("Expected Uint8Array");
                    if (0 === t.length)
                        return "";
                    for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i]; )
                        i++,
                        r++;
                    for (var a = (s - i) * p + 1 >>> 0, u = new Uint8Array(a); i !== s; ) {
                        for (var l = t[i], f = 0, h = a - 1; (0 !== l || f < n) && -1 !== h; h--,
                        f++)
                            l += 256 * u[h] >>> 0,
                            u[h] = l % o >>> 0,
                            l = l / o >>> 0;
                        if (0 !== l)
                            throw new Error("Non-zero carry");
                        n = f,
                        i++
                    }
                    for (var d = a - n; d !== a && 0 === u[d]; )
                        d++;
                    for (var v = c.repeat(r); d < a; ++d)
                        v += e.charAt(u[d]);
                    return v
                },
                decodeUnsafe: l,
                decode: function(e) {
                    var r = l(e);
                    if (r)
                        return r;
                    throw new Error("Non-".concat(t, " character"))
                }
            }
        }
          , It = Et
          , Pt = function(e) {
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
                return e;
            if (e instanceof ArrayBuffer)
                return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
                return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
            throw new Error("Unknown type, must be binary type")
        }
          , _t = function() {
            function e(t, r, n) {
                (0,
                s.Z)(this, e),
                this.name = t,
                this.prefix = r,
                this.baseEncode = n
            }
            return (0,
            a.Z)(e, [{
                key: "encode",
                value: function(e) {
                    if (e instanceof Uint8Array)
                        return "".concat(this.prefix).concat(this.baseEncode(e));
                    throw Error("Unknown type, must be binary type")
                }
            }]),
            e
        }()
          , St = function() {
            function e(t, r, n) {
                if ((0,
                s.Z)(this, e),
                this.name = t,
                this.prefix = r,
                void 0 === r.codePointAt(0))
                    throw new Error("Invalid prefix character");
                this.prefixCodePoint = r.codePointAt(0),
                this.baseDecode = n
            }
            return (0,
            a.Z)(e, [{
                key: "decode",
                value: function(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint)
                            throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
            }, {
                key: "or",
                value: function(e) {
                    return Rt(this, e)
                }
            }]),
            e
        }()
          , Nt = function() {
            function e(t) {
                (0,
                s.Z)(this, e),
                this.decoders = t
            }
            return (0,
            a.Z)(e, [{
                key: "or",
                value: function(e) {
                    return Rt(this, e)
                }
            }, {
                key: "decode",
                value: function(e) {
                    var t = e[0]
                      , r = this.decoders[t];
                    if (r)
                        return r.decode(e);
                    throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"))
                }
            }]),
            e
        }()
          , Rt = function(e, t) {
            return new Nt((0,
            g.Z)((0,
            g.Z)({}, e.decoders || (0,
            v.Z)({}, e.prefix, e)), t.decoders || (0,
            v.Z)({}, t.prefix, t)))
        }
          , Ot = function() {
            function e(t, r, n, i) {
                (0,
                s.Z)(this, e),
                this.name = t,
                this.prefix = r,
                this.baseEncode = n,
                this.baseDecode = i,
                this.encoder = new _t(t,r,n),
                this.decoder = new St(t,r,i)
            }
            return (0,
            a.Z)(e, [{
                key: "encode",
                value: function(e) {
                    return this.encoder.encode(e)
                }
            }, {
                key: "decode",
                value: function(e) {
                    return this.decoder.decode(e)
                }
            }]),
            e
        }()
          , Ct = function(e) {
            var t = e.name
              , r = e.prefix
              , n = e.encode
              , i = e.decode;
            return new Ot(t,r,n,i)
        }
          , Tt = function(e) {
            var t = e.prefix
              , r = e.name
              , n = e.alphabet
              , i = It(n, r)
              , s = i.encode
              , a = i.decode;
            return Ct({
                prefix: t,
                name: r,
                encode: s,
                decode: function(e) {
                    return Pt(a(e))
                }
            })
        }
          , At = function(e) {
            var t = e.name
              , r = e.prefix
              , n = e.bitsPerChar
              , i = e.alphabet;
            return Ct({
                prefix: r,
                name: t,
                encode: function(e) {
                    return function(e, t, r) {
                        for (var n = "=" === t[t.length - 1], i = (1 << r) - 1, s = "", a = 0, o = 0, c = 0; c < e.length; ++c)
                            for (o = o << 8 | e[c],
                            a += 8; a > r; )
                                s += t[i & o >> (a -= r)];
                        if (a && (s += t[i & o << r - a]),
                        n)
                            for (; s.length * r & 7; )
                                s += "=";
                        return s
                    }(e, i, n)
                },
                decode: function(e) {
                    return function(e, t, r, n) {
                        for (var i = {}, s = 0; s < t.length; ++s)
                            i[t[s]] = s;
                        for (var a = e.length; "=" === e[a - 1]; )
                            --a;
                        for (var o = new Uint8Array(a * r / 8 | 0), c = 0, u = 0, p = 0, l = 0; l < a; ++l) {
                            var f = i[e[l]];
                            if (void 0 === f)
                                throw new SyntaxError("Non-".concat(n, " character"));
                            u = u << r | f,
                            (c += r) >= 8 && (c -= 8,
                            o[p++] = 255 & u >> c)
                        }
                        if (c >= r || 255 & u << 8 - c)
                            throw new SyntaxError("Unexpected end of data");
                        return o
                    }(e, i, n, t)
                }
            })
        }
          , Dt = Ct({
            prefix: "\0",
            name: "identity",
            encode: function(e) {
                return function(e) {
                    return (new TextDecoder).decode(e)
                }(e)
            },
            decode: function(e) {
                return function(e) {
                    return (new TextEncoder).encode(e)
                }(e)
            }
        })
          , Lt = Object.freeze({
            __proto__: null,
            identity: Dt
        })
          , qt = At({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1
        })
          , Mt = Object.freeze({
            __proto__: null,
            base2: qt
        })
          , Ut = At({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3
        })
          , jt = Object.freeze({
            __proto__: null,
            base8: Ut
        })
          , zt = Tt({
            prefix: "9",
            name: "base10",
            alphabet: "0123456789"
        })
          , Bt = Object.freeze({
            __proto__: null,
            base10: zt
        })
          , Vt = At({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4
        })
          , Kt = At({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4
        })
          , Ht = Object.freeze({
            __proto__: null,
            base16: Vt,
            base16upper: Kt
        })
          , Ft = At({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5
        })
          , Gt = At({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5
        })
          , Jt = At({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5
        })
          , Wt = At({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5
        })
          , Yt = At({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5
        })
          , Qt = At({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5
        })
          , Xt = At({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5
        })
          , $t = At({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5
        })
          , er = At({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5
        })
          , tr = Object.freeze({
            __proto__: null,
            base32: Ft,
            base32upper: Gt,
            base32pad: Jt,
            base32padupper: Wt,
            base32hex: Yt,
            base32hexupper: Qt,
            base32hexpad: Xt,
            base32hexpadupper: $t,
            base32z: er
        })
          , rr = Tt({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        })
          , nr = Tt({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        })
          , ir = Object.freeze({
            __proto__: null,
            base36: rr,
            base36upper: nr
        })
          , sr = Tt({
            name: "base58btc",
            prefix: "z",
            alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        })
          , ar = Tt({
            name: "base58flickr",
            prefix: "Z",
            alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        })
          , or = Object.freeze({
            __proto__: null,
            base58btc: sr,
            base58flickr: ar
        })
          , cr = At({
            prefix: "m",
            name: "base64",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6
        })
          , ur = At({
            prefix: "M",
            name: "base64pad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6
        })
          , pr = At({
            prefix: "u",
            name: "base64url",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6
        })
          , lr = At({
            prefix: "U",
            name: "base64urlpad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6
        })
          , fr = Object.freeze({
            __proto__: null,
            base64: cr,
            base64pad: ur,
            base64url: pr,
            base64urlpad: lr
        })
          , hr = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42")
          , dr = hr.reduce((function(e, t, r) {
            return e[r] = t,
            e
        }
        ), [])
          , vr = hr.reduce((function(e, t, r) {
            return e[t.codePointAt(0)] = r,
            e
        }
        ), []);
        var gr = Ct({
            prefix: "\ud83d\ude80",
            name: "base256emoji",
            encode: function(e) {
                return e.reduce((function(e, t) {
                    return e += dr[t]
                }
                ), "")
            },
            decode: function(e) {
                var t, r = [], n = (0,
                u.Z)(e);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var i = t.value
                          , s = vr[i.codePointAt(0)];
                        if (void 0 === s)
                            throw new Error("Non-base256emoji character: ".concat(i));
                        r.push(s)
                    }
                } catch (a) {
                    n.e(a)
                } finally {
                    n.f()
                }
                return new Uint8Array(r)
            }
        })
          , mr = Object.freeze({
            __proto__: null,
            base256emoji: gr
        })
          , yr = function e(t, r, n) {
            r = r || [];
            for (var i = n = n || 0; t >= xr; )
                r[n++] = 255 & t | br,
                t /= 128;
            for (; t & wr; )
                r[n++] = 255 & t | br,
                t >>>= 7;
            return r[n] = 0 | t,
            e.bytes = n - i + 1,
            r
        }
          , br = 128
          , wr = -128
          , xr = Math.pow(2, 31);
        var kr = function e(t, r) {
            var n, i = 0, s = 0, a = r = r || 0, o = t.length;
            do {
                if (a >= o)
                    throw e.bytes = 0,
                    new RangeError("Could not decode varint");
                n = t[a++],
                i += s < 28 ? (n & Er) << s : (n & Er) * Math.pow(2, s),
                s += 7
            } while (n >= Zr);
            return e.bytes = a - r,
            i
        }
          , Zr = 128
          , Er = 127;
        var Ir = Math.pow(2, 7)
          , Pr = Math.pow(2, 14)
          , _r = Math.pow(2, 21)
          , Sr = Math.pow(2, 28)
          , Nr = Math.pow(2, 35)
          , Rr = Math.pow(2, 42)
          , Or = Math.pow(2, 49)
          , Cr = Math.pow(2, 56)
          , Tr = Math.pow(2, 63)
          , Ar = {
            encode: yr,
            decode: kr,
            encodingLength: function(e) {
                return e < Ir ? 1 : e < Pr ? 2 : e < _r ? 3 : e < Sr ? 4 : e < Nr ? 5 : e < Rr ? 6 : e < Or ? 7 : e < Cr ? 8 : e < Tr ? 9 : 10
            }
        }
          , Dr = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return Ar.encode(e, t, r),
            t
        }
          , Lr = function(e) {
            return Ar.encodingLength(e)
        }
          , qr = function(e, t) {
            var r = t.byteLength
              , n = Lr(e)
              , i = n + Lr(r)
              , s = new Uint8Array(i + r);
            return Dr(e, s, 0),
            Dr(r, s, n),
            s.set(t, i),
            new Mr(e,r,t,s)
        }
          , Mr = (0,
        a.Z)((function e(t, r, n, i) {
            (0,
            s.Z)(this, e),
            this.code = t,
            this.size = r,
            this.digest = n,
            this.bytes = i
        }
        ))
          , Ur = function(e) {
            var t = e.name
              , r = e.code
              , n = e.encode;
            return new jr(t,r,n)
        }
          , jr = function() {
            function e(t, r, n) {
                (0,
                s.Z)(this, e),
                this.name = t,
                this.code = r,
                this.encode = n
            }
            return (0,
            a.Z)(e, [{
                key: "digest",
                value: function(e) {
                    var t = this;
                    if (e instanceof Uint8Array) {
                        var r = this.encode(e);
                        return r instanceof Uint8Array ? qr(this.code, r) : r.then((function(e) {
                            return qr(t.code, e)
                        }
                        ))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }]),
            e
        }()
          , zr = function(e) {
            return function() {
                var t = (0,
                i.Z)((0,
                n.Z)().mark((function t(r) {
                    return (0,
                    n.Z)().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.t0 = Uint8Array,
                                t.next = 3,
                                crypto.subtle.digest(e, r);
                            case 3:
                                return t.t1 = t.sent,
                                t.abrupt("return", new t.t0(t.t1));
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        }
          , Br = Ur({
            name: "sha2-256",
            code: 18,
            encode: zr("SHA-256")
        })
          , Vr = Ur({
            name: "sha2-512",
            code: 19,
            encode: zr("SHA-512")
        })
          , Kr = Object.freeze({
            __proto__: null,
            sha256: Br,
            sha512: Vr
        })
          , Hr = Pt
          , Fr = {
            code: 0,
            name: "identity",
            encode: Hr,
            digest: function(e) {
                return qr(0, Hr(e))
            }
        }
          , Gr = Object.freeze({
            __proto__: null,
            identity: Fr
        });
        new TextEncoder,
        new TextDecoder;
        var Jr = (0,
        g.Z)((0,
        g.Z)((0,
        g.Z)((0,
        g.Z)((0,
        g.Z)((0,
        g.Z)((0,
        g.Z)((0,
        g.Z)((0,
        g.Z)((0,
        g.Z)({}, Lt), Mt), jt), Bt), Ht), tr), ir), or), fr), mr);
        function Wr(e, t, r, n) {
            return {
                name: e,
                prefix: t,
                encoder: {
                    name: e,
                    prefix: t,
                    encode: r
                },
                decoder: {
                    decode: n
                }
            }
        }
        (0,
        g.Z)((0,
        g.Z)({}, Kr), Gr);
        var Yr = Wr("utf8", "u", (function(e) {
            return "u" + new TextDecoder("utf8").decode(e)
        }
        ), (function(e) {
            return (new TextEncoder).encode(e.substring(1))
        }
        ))
          , Qr = Wr("ascii", "a", (function(e) {
            for (var t = "a", r = 0; r < e.length; r++)
                t += String.fromCharCode(e[r]);
            return t
        }
        ), (function(e) {
            for (var t = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
            }((e = e.substring(1)).length), r = 0; r < e.length; r++)
                t[r] = e.charCodeAt(r);
            return t
        }
        ))
          , Xr = (0,
        g.Z)({
            utf8: Yr,
            "utf-8": Yr,
            hex: Jr.base16,
            latin1: Qr,
            ascii: Qr,
            binary: Qr
        }, Jr);
        function $r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8"
              , r = Xr[t];
            if (!r)
                throw new Error('Unsupported encoding "'.concat(t, '"'));
            return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode("".concat(r.prefix).concat(e)) : globalThis.Buffer.from(e, "utf8")
        }
        var en = "core"
          , tn = "".concat("wc", "@", 2, ":").concat(en, ":")
          , rn = "error"
          , nn = {
            database: ":memory:"
        }
          , sn = "client_ed25519_seed"
          , an = C.ONE_DAY
          , on = C.SIX_HOURS
          , cn = "wss://relay.walletconnect.com"
          , un = "relayer_message"
          , pn = "relayer_connect"
          , ln = "relayer_disconnect"
          , fn = "relayer_error"
          , hn = "relayer_connection_stalled"
          , dn = "relayer_transport_closed"
          , vn = "relayer_publish"
          , gn = "payload"
          , mn = "connect"
          , yn = "disconnect"
          , bn = "error"
          , wn = C.ONE_SECOND
          , xn = "subscription_created"
          , kn = "subscription_deleted"
          , Zn = "subscription_sync"
          , En = "subscription_resubscribed"
          , In = (C.THIRTY_DAYS,
        1e3 * C.FIVE_SECONDS)
          , Pn = (C.THIRTY_DAYS,
        {
            wc_pairingDelete: {
                req: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 1e3
                },
                res: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 1001
                }
            },
            wc_pairingPing: {
                req: {
                    ttl: C.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1002
                },
                res: {
                    ttl: C.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1003
                }
            },
            unregistered_method: {
                req: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 0
                },
                res: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 0
                }
            }
        })
          , _n = "history_created"
          , Sn = "history_updated"
          , Nn = "history_deleted"
          , Rn = "history_sync"
          , On = "expirer_created"
          , Cn = "expirer_deleted"
          , Tn = "expirer_expired"
          , An = "expirer_sync"
          , Dn = (C.ONE_DAY,
        function() {
            function e(t, r) {
                var a = this;
                (0,
                s.Z)(this, e),
                this.core = t,
                this.logger = r,
                this.keychain = new Map,
                this.name = "keychain",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = tn,
                this.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    var t;
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (a.initialized) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3,
                                a.getKeyChain();
                            case 3:
                                typeof (t = e.sent) < "u" && (a.keychain = t),
                                a.initialized = !0;
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.has = function(e) {
                    return a.isInitialized(),
                    a.keychain.has(e)
                }
                ,
                this.set = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    a.keychain.set(t, r),
                                    e.next = 4,
                                    a.persist();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.get = function(e) {
                    a.isInitialized();
                    var t = a.keychain.get(e);
                    if (typeof t > "u") {
                        var r = Be("NO_MATCHING_KEY", "".concat(a.name, ": ").concat(e)).message;
                        throw new Error(r)
                    }
                    return t
                }
                ,
                this.del = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    a.keychain.delete(t),
                                    e.next = 4,
                                    a.persist();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.core = t,
                this.logger = (0,
                x.generateChildLogger)(r, this.name)
            }
            return (0,
            a.Z)(e, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "storageKey",
                get: function() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
            }, {
                key: "setKeyChain",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.setItem(this.storageKey, be(t));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getKeyChain",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.getItem(this.storageKey);
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", typeof t < "u" ? we(t) : void 0);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "persist",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.setKeyChain(this.keychain);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }]),
            e
        }())
          , Ln = function() {
            function e(t, r, a) {
                var o = this;
                (0,
                s.Z)(this, e),
                this.core = t,
                this.logger = r,
                this.name = "crypto",
                this.initialized = !1,
                this.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = o.initialized,
                                e.t0) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 4,
                                o.keychain.init();
                            case 4:
                                o.initialized = !0;
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.hasKeys = function(e) {
                    return o.isInitialized(),
                    o.keychain.has(e)
                }
                ,
                this.getClientId = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    var t, r;
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return o.isInitialized(),
                                e.next = 3,
                                o.getClientSeed();
                            case 3:
                                return t = e.sent,
                                r = E.generateKeyPair(t),
                                e.abrupt("return", E.encodeIss(r.publicKey));
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.generateKeyPair = function() {
                    o.isInitialized();
                    var e = function() {
                        var e = N.Au();
                        return {
                            privateKey: (0,
                            R.BB)(e.secretKey, j),
                            publicKey: (0,
                            R.BB)(e.publicKey, j)
                        }
                    }();
                    return o.setPrivateKey(e.publicKey, e.privateKey)
                }
                ,
                this.signJWT = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, a;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o.isInitialized(),
                                    e.next = 3,
                                    o.getClientSeed();
                                case 3:
                                    return r = e.sent,
                                    i = E.generateKeyPair(r),
                                    s = W(),
                                    a = an,
                                    e.next = 9,
                                    E.signJWT(s, t, a, i);
                                case 9:
                                    return e.abrupt("return", e.sent);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.generateSharedKey = function(e, t, r) {
                    o.isInitialized();
                    var n = function(e, t) {
                        var r = N.gi((0,
                        R.mL)(e, j), (0,
                        R.mL)(t, j))
                          , n = new P.t(S.mE,r).expand(J);
                        return (0,
                        R.BB)(n, j)
                    }(o.getPrivateKey(e), t);
                    return o.setSymKey(n, r)
                }
                ,
                this.setSymKey = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o.isInitialized(),
                                    i = r || Y(t),
                                    e.next = 4,
                                    o.keychain.set(i, t);
                                case 4:
                                    return e.abrupt("return", i);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.deleteKeyPair = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o.isInitialized(),
                                    e.next = 3,
                                    o.keychain.del(t);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.deleteSymKey = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o.isInitialized(),
                                    e.next = 3,
                                    o.keychain.del(t);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.encode = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, a, c, u, p, l, f;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (o.isInitialized(),
                                    s = ne(i),
                                    a = (0,
                                    Z.u)(r),
                                    !ie(s)) {
                                        e.next = 7;
                                        break
                                    }
                                    return c = s.senderPublicKey,
                                    u = s.receiverPublicKey,
                                    e.next = 6,
                                    o.generateSharedKey(c, u);
                                case 6:
                                    t = e.sent;
                                case 7:
                                    return p = o.getSymKey(t),
                                    l = s.type,
                                    f = s.senderPublicKey,
                                    e.abrupt("return", $({
                                        type: l,
                                        symKey: p,
                                        message: a,
                                        senderPublicKey: f
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.decode = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, a, c, u, p;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (o.isInitialized(),
                                    !ie(s = re(r, i))) {
                                        e.next = 7;
                                        break
                                    }
                                    return a = s.receiverPublicKey,
                                    c = s.senderPublicKey,
                                    e.next = 6,
                                    o.generateSharedKey(a, c);
                                case 6:
                                    t = e.sent;
                                case 7:
                                    return u = o.getSymKey(t),
                                    p = ee({
                                        symKey: u,
                                        encoded: r
                                    }),
                                    e.abrupt("return", (0,
                                    Z.D)(p));
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.core = t,
                this.logger = (0,
                x.generateChildLogger)(r, this.name),
                this.keychain = a || new Dn(this.core,this.logger)
            }
            return (0,
            a.Z)(e, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "getPayloadType",
                value: function(e) {
                    return X(te(e).type)
                }
            }, {
                key: "setPrivateKey",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.keychain.set(t, r);
                                case 2:
                                    return e.abrupt("return", t);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getPrivateKey",
                value: function(e) {
                    return this.keychain.get(e)
                }
            }, {
                key: "getClientSeed",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t = "",
                                    e.prev = 1,
                                    t = this.keychain.get(sn),
                                    e.next = 10;
                                    break;
                                case 5:
                                    return e.prev = 5,
                                    e.t0 = e.catch(1),
                                    t = W(),
                                    e.next = 10,
                                    this.keychain.set(sn, t);
                                case 10:
                                    return e.abrupt("return", $r(t, "base16"));
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 5]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getSymKey",
                value: function(e) {
                    return this.keychain.get(e)
                }
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }]),
            e
        }()
          , qn = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, a) {
                var o;
                return (0,
                s.Z)(this, r),
                (o = t.call(this, e, a)).logger = e,
                o.core = a,
                o.messages = new Map,
                o.name = "messages",
                o.version = "0.3",
                o.initialized = !1,
                o.storagePrefix = tn,
                o.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    var t;
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (o.initialized) {
                                    e.next = 15;
                                    break
                                }
                                return o.logger.trace("Initialized"),
                                e.prev = 2,
                                e.next = 5,
                                o.getRelayerMessages();
                            case 5:
                                typeof (t = e.sent) < "u" && (o.messages = t),
                                o.logger.debug("Successfully Restored records for ".concat(o.name)),
                                o.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: o.messages.size
                                }),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(2),
                                o.logger.debug("Failed to Restore records for ".concat(o.name)),
                                o.logger.error(e.t0);
                            case 12:
                                return e.prev = 12,
                                o.initialized = !0,
                                e.finish(12);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 9, 12, 15]])
                }
                ))),
                o.set = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (o.isInitialized(),
                                    i = Q(r),
                                    typeof (s = o.messages.get(t)) > "u" && (s = {}),
                                    e.t0 = typeof s[i] < "u",
                                    e.t0) {
                                        e.next = 10;
                                        break
                                    }
                                    return s[i] = r,
                                    o.messages.set(t, s),
                                    e.next = 10,
                                    o.persist();
                                case 10:
                                    return e.abrupt("return", i);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.get = function(e) {
                    o.isInitialized();
                    var t = o.messages.get(e);
                    return typeof t > "u" && (t = {}),
                    t
                }
                ,
                o.has = function(e, t) {
                    return o.isInitialized(),
                    typeof o.get(e)[Q(t)] < "u"
                }
                ,
                o.del = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o.isInitialized(),
                                    o.messages.delete(t),
                                    e.next = 4,
                                    o.persist();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.logger = (0,
                x.generateChildLogger)(e, o.name),
                o.core = a,
                o
            }
            return (0,
            a.Z)(r, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "storageKey",
                get: function() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
            }, {
                key: "setRelayerMessages",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.setItem(this.storageKey, be(t));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getRelayerMessages",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.getItem(this.storageKey);
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", typeof t < "u" ? we(t) : void 0);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "persist",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.setRelayerMessages(this.messages);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }]),
            r
        }(k.kZ)
          , Mn = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, a) {
                var o;
                return (0,
                s.Z)(this, r),
                (o = t.call(this, e, a)).relayer = e,
                o.logger = a,
                o.events = new m.EventEmitter,
                o.name = "publisher",
                o.queue = new Map,
                o.publishTimeout = 1e4,
                o.publish = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, a, c, u, p, l;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o.logger.debug("Publishing Payload"),
                                    o.logger.trace({
                                        type: "method",
                                        method: "publish",
                                        params: {
                                            topic: t,
                                            message: r,
                                            opts: i
                                        }
                                    }),
                                    e.prev = 1,
                                    s = (null === i || void 0 === i ? void 0 : i.ttl) || on,
                                    a = Se(i),
                                    c = (null === i || void 0 === i ? void 0 : i.prompt) || !1,
                                    u = (null === i || void 0 === i ? void 0 : i.tag) || 0,
                                    p = {
                                        topic: t,
                                        message: r,
                                        opts: {
                                            ttl: s,
                                            relay: a,
                                            prompt: c,
                                            tag: u
                                        }
                                    },
                                    l = Q(r),
                                    o.queue.set(l, p),
                                    e.prev = 4,
                                    e.next = 7,
                                    ke(o.rpcPublish(t, r, s, a, c, u), o.publishTimeout);
                                case 7:
                                    return e.next = 9,
                                    e.sent;
                                case 9:
                                    o.relayer.events.emit(vn, p),
                                    e.next = 16;
                                    break;
                                case 12:
                                    return e.prev = 12,
                                    e.t0 = e.catch(4),
                                    o.logger.debug("Publishing Payload stalled"),
                                    o.relayer.events.emit(hn),
                                    e.abrupt("return");
                                case 16:
                                    o.onPublish(l, p),
                                    o.logger.debug("Successfully Published Payload"),
                                    o.logger.trace({
                                        type: "method",
                                        method: "publish",
                                        params: {
                                            topic: t,
                                            message: r,
                                            opts: i
                                        }
                                    }),
                                    e.next = 22;
                                    break;
                                case 19:
                                    throw e.prev = 19,
                                    e.t1 = e.catch(1),
                                    o.logger.debug("Failed to Publish Payload"),
                                    o.logger.error(e.t1),
                                    e.t1;
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 19], [4, 12]])
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.on = function(e, t) {
                    o.events.on(e, t)
                }
                ,
                o.once = function(e, t) {
                    o.events.once(e, t)
                }
                ,
                o.off = function(e, t) {
                    o.events.off(e, t)
                }
                ,
                o.removeListener = function(e, t) {
                    o.events.removeListener(e, t)
                }
                ,
                o.relayer = e,
                o.logger = (0,
                x.generateChildLogger)(a, o.name),
                o.registerEventListeners(),
                o
            }
            return (0,
            a.Z)(r, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "rpcPublish",
                value: function(e, t, r, n, i, s) {
                    var a, o, c, u, p = {
                        method: Ne(n.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: i,
                            tag: s
                        }
                    };
                    return Fe(null == (a = p.params) ? void 0 : a.prompt) && (null == (o = p.params) || delete o.prompt),
                    Fe(null == (c = p.params) ? void 0 : c.tag) && (null == (u = p.params) || delete u.tag),
                    this.logger.debug("Outgoing Relay Payload"),
                    this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: p
                    }),
                    this.relayer.request(p)
                }
            }, {
                key: "onPublish",
                value: function(e, t) {
                    this.queue.delete(e)
                }
            }, {
                key: "checkQueue",
                value: function() {
                    var e = this;
                    this.queue.forEach(function() {
                        var t = (0,
                        i.Z)((0,
                        n.Z)().mark((function t(r) {
                            var i, s, a;
                            return (0,
                            n.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return i = r.topic,
                                        s = r.message,
                                        a = r.opts,
                                        t.next = 3,
                                        e.publish(i, s, a);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.relayer.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, (function() {
                        e.checkQueue()
                    }
                    ))
                }
            }]),
            r
        }(k.z9)
          , Un = function() {
            function e() {
                var t = this;
                (0,
                s.Z)(this, e),
                this.map = new Map,
                this.set = function(e, r) {
                    var n = t.get(e);
                    t.exists(e, r) || t.map.set(e, [].concat((0,
                    c.Z)(n), [r]))
                }
                ,
                this.get = function(e) {
                    return t.map.get(e) || []
                }
                ,
                this.exists = function(e, r) {
                    return t.get(e).includes(r)
                }
                ,
                this.delete = function(e, r) {
                    if (typeof r > "u")
                        t.map.delete(e);
                    else if (t.map.has(e)) {
                        var n = t.get(e);
                        if (t.exists(e, r)) {
                            var i = n.filter((function(e) {
                                return e !== r
                            }
                            ));
                            i.length ? t.map.set(e, i) : t.map.delete(e)
                        }
                    }
                }
                ,
                this.clear = function() {
                    t.map.clear()
                }
            }
            return (0,
            a.Z)(e, [{
                key: "topics",
                get: function() {
                    return Array.from(this.map.keys())
                }
            }]),
            e
        }()
          , jn = Object.defineProperty
          , zn = Object.defineProperties
          , Bn = Object.getOwnPropertyDescriptors
          , Vn = Object.getOwnPropertySymbols
          , Kn = Object.prototype.hasOwnProperty
          , Hn = Object.prototype.propertyIsEnumerable
          , Fn = function(e, t, r) {
            return t in e ? jn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , Gn = function(e, t) {
            for (var r in t || (t = {}))
                Kn.call(t, r) && Fn(e, r, t[r]);
            if (Vn) {
                var n, i = (0,
                u.Z)(Vn(t));
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        r = n.value;
                        Hn.call(t, r) && Fn(e, r, t[r])
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
            }
            return e
        }
          , Jn = function(e, t) {
            return zn(e, Bn(t))
        }
          , Wn = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, a) {
                var o;
                return (0,
                s.Z)(this, r),
                (o = t.call(this, e, a)).relayer = e,
                o.logger = a,
                o.subscriptions = new Map,
                o.topicMap = new Un,
                o.events = new m.EventEmitter,
                o.name = "subscription",
                o.version = "0.3",
                o.pending = new Map,
                o.cached = [],
                o.initialized = !1,
                o.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
                o.pollingInterval = 20,
                o.storagePrefix = tn,
                o.subscribeTimeout = 1e4,
                o.restartInProgress = !1,
                o.batchSubscribeTopicsLimit = 500,
                o.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = o.initialized,
                                e.t0) {
                                    e.next = 10;
                                    break
                                }
                                return o.logger.trace("Initialized"),
                                e.next = 5,
                                o.restart();
                            case 5:
                                return o.registerEventListeners(),
                                o.onEnable(),
                                e.next = 9,
                                o.relayer.core.crypto.getClientId();
                            case 9:
                                o.clientId = e.sent;
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                o.subscribe = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s, a;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.restartToComplete();
                                case 2:
                                    return o.isInitialized(),
                                    o.logger.debug("Subscribing Topic"),
                                    o.logger.trace({
                                        type: "method",
                                        method: "subscribe",
                                        params: {
                                            topic: t,
                                            opts: r
                                        }
                                    }),
                                    e.prev = 5,
                                    i = Se(r),
                                    s = {
                                        topic: t,
                                        relay: i
                                    },
                                    o.pending.set(t, s),
                                    e.next = 10,
                                    o.rpcSubscribe(t, i);
                                case 10:
                                    return a = e.sent,
                                    e.abrupt("return", (o.onSubscribe(a, s),
                                    o.logger.debug("Successfully Subscribed Topic"),
                                    o.logger.trace({
                                        type: "method",
                                        method: "subscribe",
                                        params: {
                                            topic: t,
                                            opts: r
                                        }
                                    }),
                                    a));
                                case 14:
                                    throw e.prev = 14,
                                    e.t0 = e.catch(5),
                                    o.logger.debug("Failed to Subscribe Topic"),
                                    o.logger.error(e.t0),
                                    e.t0;
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[5, 14]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.unsubscribe = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.restartToComplete();
                                case 2:
                                    if (o.isInitialized(),
                                    !(typeof (null === r || void 0 === r ? void 0 : r.id) < "u")) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 6,
                                    o.unsubscribeById(t, r.id, r);
                                case 6:
                                    e.next = 10;
                                    break;
                                case 8:
                                    return e.next = 10,
                                    o.unsubscribeByTopic(t, r);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.isSubscribed = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!o.topics.includes(t)) {
                                        e.next = 4;
                                        break
                                    }
                                    e.t0 = !0,
                                    e.next = 7;
                                    break;
                                case 4:
                                    return e.next = 6,
                                    new Promise((function(e, r) {
                                        var n = new C.Watch;
                                        n.start(o.pendingSubscriptionWatchLabel);
                                        var i = setInterval((function() {
                                            !o.pending.has(t) && o.topics.includes(t) && (clearInterval(i),
                                            n.stop(o.pendingSubscriptionWatchLabel),
                                            e(!0)),
                                            n.elapsed(o.pendingSubscriptionWatchLabel) >= In && (clearInterval(i),
                                            n.stop(o.pendingSubscriptionWatchLabel),
                                            r(!1))
                                        }
                                        ), o.pollingInterval)
                                    }
                                    ));
                                case 6:
                                    e.t0 = e.sent;
                                case 7:
                                    return e.abrupt("return", e.t0);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.on = function(e, t) {
                    o.events.on(e, t)
                }
                ,
                o.once = function(e, t) {
                    o.events.once(e, t)
                }
                ,
                o.off = function(e, t) {
                    o.events.off(e, t)
                }
                ,
                o.removeListener = function(e, t) {
                    o.events.removeListener(e, t)
                }
                ,
                o.restart = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return o.restartInProgress = !0,
                                e.next = 3,
                                o.restore();
                            case 3:
                                return e.next = 5,
                                o.reset();
                            case 5:
                                o.restartInProgress = !1;
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                o.relayer = e,
                o.logger = (0,
                x.generateChildLogger)(a, o.name),
                o.clientId = "",
                o
            }
            return (0,
            a.Z)(r, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "storageKey",
                get: function() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
            }, {
                key: "length",
                get: function() {
                    return this.subscriptions.size
                }
            }, {
                key: "ids",
                get: function() {
                    return Array.from(this.subscriptions.keys())
                }
            }, {
                key: "values",
                get: function() {
                    return Array.from(this.subscriptions.values())
                }
            }, {
                key: "topics",
                get: function() {
                    return this.topicMap.topics
                }
            }, {
                key: "hasSubscription",
                value: function(e, t) {
                    var r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch (n) {}
                    return r
                }
            }, {
                key: "onEnable",
                value: function() {
                    this.cached = [],
                    this.initialized = !0
                }
            }, {
                key: "onDisable",
                value: function() {
                    this.cached = this.values,
                    this.subscriptions.clear(),
                    this.topicMap.clear()
                }
            }, {
                key: "unsubscribeByTopic",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var s, a = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = this.topicMap.get(t),
                                    e.next = 3,
                                    Promise.all(s.map(function() {
                                        var e = (0,
                                        i.Z)((0,
                                        n.Z)().mark((function e(i) {
                                            return (0,
                                            n.Z)().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        a.unsubscribeById(t, i, r);
                                                    case 2:
                                                        return e.abrupt("return", e.sent);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "unsubscribeById",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, a;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.logger.debug("Unsubscribing Topic"),
                                    this.logger.trace({
                                        type: "method",
                                        method: "unsubscribe",
                                        params: {
                                            topic: t,
                                            id: r,
                                            opts: i
                                        }
                                    }),
                                    e.prev = 1,
                                    s = Se(i),
                                    e.next = 5,
                                    this.rpcUnsubscribe(t, r, s);
                                case 5:
                                    return a = Ve("USER_DISCONNECTED", "".concat(this.name, ", ").concat(t)),
                                    e.next = 8,
                                    this.onUnsubscribe(t, r, a);
                                case 8:
                                    this.logger.debug("Successfully Unsubscribed Topic"),
                                    this.logger.trace({
                                        type: "method",
                                        method: "unsubscribe",
                                        params: {
                                            topic: t,
                                            id: r,
                                            opts: i
                                        }
                                    }),
                                    e.next = 15;
                                    break;
                                case 12:
                                    throw e.prev = 12,
                                    e.t0 = e.catch(1),
                                    this.logger.debug("Failed to Unsubscribe Topic"),
                                    this.logger.error(e.t0),
                                    e.t0;
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 12]])
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "rpcSubscribe",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = {
                                        method: Ne(r.protocol).subscribe,
                                        params: {
                                            topic: t
                                        }
                                    },
                                    this.logger.debug("Outgoing Relay Payload"),
                                    this.logger.trace({
                                        type: "payload",
                                        direction: "outgoing",
                                        request: i
                                    }),
                                    e.prev = 2,
                                    e.next = 5,
                                    ke(this.relayer.request(i), this.subscribeTimeout);
                                case 5:
                                    return e.next = 7,
                                    e.sent;
                                case 7:
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(2),
                                    this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                                    this.relayer.events.emit(hn);
                                case 12:
                                    return e.abrupt("return", Q(t + this.clientId));
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[2, 9]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "rpcBatchSubscribe",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return r = t[0].relay,
                                    i = {
                                        method: Ne(r.protocol).batchSubscribe,
                                        params: {
                                            topics: t.map((function(e) {
                                                return e.topic
                                            }
                                            ))
                                        }
                                    },
                                    this.logger.debug("Outgoing Relay Payload"),
                                    this.logger.trace({
                                        type: "payload",
                                        direction: "outgoing",
                                        request: i
                                    }),
                                    e.prev = 4,
                                    e.next = 7,
                                    ke(this.relayer.request(i), this.subscribeTimeout);
                                case 7:
                                    return e.next = 9,
                                    e.sent;
                                case 9:
                                    return e.abrupt("return", e.sent);
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(4),
                                    this.logger.debug("Outgoing Relay Payload stalled"),
                                    this.relayer.events.emit(hn);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[4, 12]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "rpcUnsubscribe",
                value: function(e, t, r) {
                    var n = {
                        method: Ne(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"),
                    this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: n
                    }),
                    this.relayer.request(n)
                }
            }, {
                key: "onSubscribe",
                value: function(e, t) {
                    this.setSubscription(e, Jn(Gn({}, t), {
                        id: e
                    })),
                    this.pending.delete(t.topic)
                }
            }, {
                key: "onBatchSubscribe",
                value: function(e) {
                    var t = this;
                    e.length && e.forEach((function(e) {
                        t.setSubscription(e.id, Gn({}, e)),
                        t.pending.delete(e.topic)
                    }
                    ))
                }
            }, {
                key: "onUnsubscribe",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.events.removeAllListeners(r),
                                    this.hasSubscription(r, t) && this.deleteSubscription(r, i),
                                    e.next = 4,
                                    this.relayer.messages.del(t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setRelayerSubscriptions",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.relayer.core.storage.setItem(this.storageKey, t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getRelayerSubscriptions",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.relayer.core.storage.getItem(this.storageKey);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setSubscription",
                value: function(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"),
                    this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }),
                    this.addSubscription(e, t))
                }
            }, {
                key: "addSubscription",
                value: function(e, t) {
                    this.subscriptions.set(e, Gn({}, t)),
                    this.topicMap.set(t.topic, e),
                    this.events.emit(xn, t)
                }
            }, {
                key: "getSubscription",
                value: function(e) {
                    this.logger.debug("Getting subscription"),
                    this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    var t = this.subscriptions.get(e);
                    if (!t) {
                        var r = Be("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e)).message;
                        throw new Error(r)
                    }
                    return t
                }
            }, {
                key: "deleteSubscription",
                value: function(e, t) {
                    this.logger.debug("Deleting subscription"),
                    this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    var r = this.getSubscription(e);
                    this.subscriptions.delete(e),
                    this.topicMap.delete(r.topic, e),
                    this.events.emit(kn, Jn(Gn({}, r), {
                        reason: t
                    }))
                }
            }, {
                key: "persist",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.setRelayerSubscriptions(this.values);
                                case 2:
                                    this.events.emit(Zn);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "reset",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.cached.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit),
                                    r = 0;
                                case 4:
                                    if (!(r < t)) {
                                        e.next = 11;
                                        break
                                    }
                                    return i = this.cached.splice(0, this.batchSubscribeTopicsLimit),
                                    e.next = 8,
                                    this.batchSubscribe(i);
                                case 8:
                                    r++,
                                    e.next = 4;
                                    break;
                                case 11:
                                    this.events.emit(En);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "restore",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getRelayerSubscriptions();
                                case 3:
                                    if (!(typeof (t = e.sent) > "u") && t.length) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    if (!this.subscriptions.size) {
                                        e.next = 9;
                                        break
                                    }
                                    throw r = Be("RESTORE_WILL_OVERRIDE", this.name),
                                    i = r.message,
                                    this.logger.error(i),
                                    this.logger.error("".concat(this.name, ": ").concat(JSON.stringify(this.values))),
                                    new Error(i);
                                case 9:
                                    this.cached = t,
                                    this.logger.debug("Successfully Restored subscriptions for ".concat(this.name)),
                                    this.logger.trace({
                                        type: "method",
                                        method: "restore",
                                        subscriptions: this.values
                                    }),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    this.logger.debug("Failed to Restore subscriptions for ".concat(this.name)),
                                    this.logger.error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 12]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "batchSubscribe",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t.length) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    this.rpcBatchSubscribe(t);
                                case 4:
                                    Ke(r = e.sent) && this.onBatchSubscribe(r.map((function(e, r) {
                                        return Jn(Gn({}, t[r]), {
                                            id: e
                                        })
                                    }
                                    )));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onConnect",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = this.restartInProgress,
                                    e.t0) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4,
                                    this.restart();
                                case 4:
                                    this.onEnable();
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onDisconnect",
                value: function() {
                    this.onDisable()
                }
            }, {
                key: "checkPending",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.relayer.transportExplicitlyClosed) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return t = [],
                                    this.pending.forEach((function(e) {
                                        t.push(e)
                                    }
                                    )),
                                    e.next = 6,
                                    this.batchSubscribe(t);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.relayer.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, (0,
                    i.Z)((0,
                    n.Z)().mark((function t() {
                        return (0,
                        n.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.checkPending();
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))),
                    this.relayer.on(pn, (0,
                    i.Z)((0,
                    n.Z)().mark((function t() {
                        return (0,
                        n.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.onConnect();
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))),
                    this.relayer.on(ln, (function() {
                        e.onDisconnect()
                    }
                    )),
                    this.events.on(xn, function() {
                        var t = (0,
                        i.Z)((0,
                        n.Z)().mark((function t(r) {
                            var i;
                            return (0,
                            n.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return i = xn,
                                        e.logger.info("Emitting ".concat(i)),
                                        e.logger.debug({
                                            type: "event",
                                            event: i,
                                            data: r
                                        }),
                                        t.next = 5,
                                        e.persist();
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()),
                    this.events.on(kn, function() {
                        var t = (0,
                        i.Z)((0,
                        n.Z)().mark((function t(r) {
                            var i;
                            return (0,
                            n.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return i = kn,
                                        e.logger.info("Emitting ".concat(i)),
                                        e.logger.debug({
                                            type: "event",
                                            event: i,
                                            data: r
                                        }),
                                        t.next = 5,
                                        e.persist();
                                    case 5:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }, {
                key: "restartToComplete",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = this.restartInProgress,
                                    !e.t0) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 4,
                                    new Promise((function(e) {
                                        var r = setInterval((function() {
                                            t.restartInProgress || (clearInterval(r),
                                            e())
                                        }
                                        ), t.pollingInterval)
                                    }
                                    ));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }(k.sY)
          , Yn = Object.defineProperty
          , Qn = Object.getOwnPropertySymbols
          , Xn = Object.prototype.hasOwnProperty
          , $n = Object.prototype.propertyIsEnumerable
          , ei = function(e, t, r) {
            return t in e ? Yn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , ti = function(e, t) {
            for (var r in t || (t = {}))
                Xn.call(t, r) && ei(e, r, t[r]);
            if (Qn) {
                var n, i = (0,
                u.Z)(Qn(t));
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        r = n.value;
                        $n.call(t, r) && ei(e, r, t[r])
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
            }
            return e
        }
          , ri = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e) {
                var a;
                return (0,
                s.Z)(this, r),
                (a = t.call(this, e)).protocol = "wc",
                a.version = 2,
                a.events = new m.EventEmitter,
                a.name = "relayer",
                a.transportExplicitlyClosed = !1,
                a.initialized = !1,
                a.reconnecting = !1,
                a.connectionStatusPollingInterval = 20,
                a.staleConnectionErrors = ["socket hang up", "socket stalled"],
                a.request = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.logger.debug("Publishing Request Payload"),
                                    e.prev = 1,
                                    e.next = 4,
                                    a.toEstablishConnection();
                                case 4:
                                    return e.next = 6,
                                    a.provider.request(t);
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw e.prev = 9,
                                    e.t0 = e.catch(1),
                                    a.logger.debug("Failed to Publish Request"),
                                    a.logger.error(e.t0),
                                    e.t0;
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 9]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.core = e.core,
                a.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0,
                x.generateChildLogger)(e.logger, a.name) : l()((0,
                x.getDefaultLoggerOptions)({
                    level: e.logger || "error"
                })),
                a.messages = new qn(a.logger,e.core),
                a.subscriber = new Wn((0,
                f.Z)(a),a.logger),
                a.publisher = new Mn((0,
                f.Z)(a),a.logger),
                a.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || cn,
                a.projectId = e.projectId,
                a.provider = {},
                a
            }
            return (0,
            a.Z)(r, [{
                key: "init",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.logger.trace("Initialized"),
                                    e.next = 3,
                                    this.createProvider();
                                case 3:
                                    return e.next = 5,
                                    Promise.all([this.messages.init(), this.transportOpen(), this.subscriber.init()]);
                                case 5:
                                    this.registerEventListeners(),
                                    this.initialized = !0;
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "connected",
                get: function() {
                    return this.provider.connection.connected
                }
            }, {
                key: "connecting",
                get: function() {
                    return this.provider.connection.connecting
                }
            }, {
                key: "publish",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.isInitialized(),
                                    e.next = 3,
                                    this.publisher.publish(t, r, i);
                                case 3:
                                    return e.next = 5,
                                    this.recordMessageEvent({
                                        topic: t,
                                        message: r,
                                        publishedAt: Date.now()
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "subscribe",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var s, a = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.isInitialized(),
                                    s = "",
                                    e.next = 4,
                                    Promise.all([new Promise((function(e) {
                                        a.subscriber.once(xn, (function(r) {
                                            r.topic === t && e()
                                        }
                                        ))
                                    }
                                    )), new Promise(function() {
                                        var e = (0,
                                        i.Z)((0,
                                        n.Z)().mark((function e(i) {
                                            return (0,
                                            n.Z)().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        a.subscriber.subscribe(t, r);
                                                    case 2:
                                                        s = e.sent,
                                                        i();
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }())]);
                                case 4:
                                    return e.abrupt("return", s);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "unsubscribe",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.isInitialized(),
                                    e.next = 3,
                                    this.subscriber.unsubscribe(t, r);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "on",
                value: function(e, t) {
                    this.events.on(e, t)
                }
            }, {
                key: "once",
                value: function(e, t) {
                    this.events.once(e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.events.off(e, t)
                }
            }, {
                key: "removeListener",
                value: function(e, t) {
                    this.events.removeListener(e, t)
                }
            }, {
                key: "transportClose",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.transportExplicitlyClosed = !0,
                                    e.t0 = this.connected,
                                    !e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 5,
                                    this.provider.disconnect();
                                case 5:
                                    this.events.emit(dn);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "transportOpen",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, s = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.reconnecting) {
                                        e.next = 23;
                                        break
                                    }
                                    return this.relayUrl = t || this.relayUrl,
                                    this.transportExplicitlyClosed = !1,
                                    this.reconnecting = !0,
                                    e.prev = 2,
                                    e.t0 = Promise,
                                    e.t1 = new Promise((function(e) {
                                        s.initialized || e(),
                                        s.subscriber.once(En, (function() {
                                            e()
                                        }
                                        ))
                                    }
                                    )),
                                    e.next = 7,
                                    Promise.race([new Promise(function() {
                                        var e = (0,
                                        i.Z)((0,
                                        n.Z)().mark((function e(t, r) {
                                            return (0,
                                            n.Z)().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        ke(s.provider.connect(), 5e3, "socket stalled").catch((function(e) {
                                                            return r(e)
                                                        }
                                                        )).then((function() {
                                                            return t()
                                                        }
                                                        )).finally((function() {
                                                            return s.removeListener(dn, s.rejectTransportOpen)
                                                        }
                                                        ));
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t, r) {
                                            return e.apply(this, arguments)
                                        }
                                    }()), new Promise((function(e) {
                                        return s.once(dn, s.rejectTransportOpen)
                                    }
                                    ))]);
                                case 7:
                                    return e.t2 = e.sent,
                                    e.t3 = [e.t1, e.t2],
                                    e.next = 11,
                                    e.t0.all.call(e.t0, e.t3);
                                case 11:
                                    e.next = 20;
                                    break;
                                case 13:
                                    if (e.prev = 13,
                                    e.t4 = e.catch(2),
                                    this.logger.error(e.t4),
                                    r = e.t4,
                                    this.isConnectionStalled(r.message)) {
                                        e.next = 19;
                                        break
                                    }
                                    throw e.t4;
                                case 19:
                                    this.events.emit(dn);
                                case 20:
                                    return e.prev = 20,
                                    this.reconnecting = !1,
                                    e.finish(20);
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[2, 13, 20, 23]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "restartTransport",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = this.transportExplicitlyClosed,
                                    e.t0) {
                                        e.next = 9;
                                        break
                                    }
                                    return this.relayUrl = t || this.relayUrl,
                                    e.next = 5,
                                    this.transportClose();
                                case 5:
                                    return e.next = 7,
                                    this.createProvider();
                                case 7:
                                    return e.next = 9,
                                    this.transportOpen();
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isConnectionStalled",
                value: function(e) {
                    return this.staleConnectionErrors.some((function(t) {
                        return e.includes(t)
                    }
                    ))
                }
            }, {
                key: "rejectTransportOpen",
                value: function() {
                    throw new Error("closeTransport called before connection was established")
                }
            }, {
                key: "createProvider",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.crypto.signJWT(this.relayUrl);
                                case 2:
                                    t = e.sent,
                                    this.provider = new yt(new xt(me({
                                        sdkVersion: "2.5.2",
                                        protocol: this.protocol,
                                        version: this.version,
                                        relayUrl: this.relayUrl,
                                        projectId: this.projectId,
                                        auth: t,
                                        useOnCloseEvent: !0
                                    }))),
                                    this.registerProviderListeners();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "recordMessageEvent",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = t.topic,
                                    i = t.message,
                                    e.next = 3,
                                    this.messages.set(r, i);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "shouldIgnoreMessageEvent",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = t.topic,
                                    i = t.message,
                                    e.next = 3,
                                    this.subscriber.isSubscribed(r);
                                case 3:
                                    if (!e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = this.messages.has(r, i),
                                    e.next = 8;
                                    break;
                                case 7:
                                    e.t0 = !0;
                                case 8:
                                    return e.abrupt("return", e.t0);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onProviderPayload",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, a, o, c;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.logger.debug("Incoming Relay Payload"),
                                    this.logger.trace({
                                        type: "payload",
                                        direction: "incoming",
                                        payload: t
                                    }),
                                    !(0,
                                    mt.isJsonRpcRequest)(t)) {
                                        e.next = 11;
                                        break
                                    }
                                    if (t.method.endsWith("_subscription")) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return r = t.params,
                                    i = r.data,
                                    s = i.topic,
                                    a = i.message,
                                    o = i.publishedAt,
                                    c = {
                                        topic: s,
                                        message: a,
                                        publishedAt: o
                                    },
                                    this.logger.debug("Emitting Relayer Payload"),
                                    this.logger.trace(ti({
                                        type: "event",
                                        event: r.id
                                    }, c)),
                                    this.events.emit(r.id, c),
                                    e.next = 9,
                                    this.acknowledgePayload(t);
                                case 9:
                                    return e.next = 11,
                                    this.onMessageEvent(c);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onMessageEvent",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.shouldIgnoreMessageEvent(t);
                                case 2:
                                    if (e.t0 = e.sent,
                                    e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    return this.events.emit(un, t),
                                    e.next = 7,
                                    this.recordMessageEvent(t);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "acknowledgePayload",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = (0,
                                    mt.formatJsonRpcResult)(t.id, !0),
                                    e.next = 3,
                                    this.provider.connection.send(r);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "registerProviderListeners",
                value: function() {
                    var e = this;
                    this.provider.on(gn, (function(t) {
                        return e.onProviderPayload(t)
                    }
                    )),
                    this.provider.on(mn, (function() {
                        e.events.emit(pn)
                    }
                    )),
                    this.provider.on(yn, (function() {
                        e.onProviderDisconnect()
                    }
                    )),
                    this.provider.on(bn, (function(t) {
                        e.logger.error(t),
                        e.events.emit(fn, t)
                    }
                    ))
                }
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.events.on(hn, (0,
                    i.Z)((0,
                    n.Z)().mark((function t() {
                        return (0,
                        n.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.restartTransport();
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))))
                }
            }, {
                key: "onProviderDisconnect",
                value: function() {
                    this.events.emit(ln),
                    this.attemptToReconnect()
                }
            }, {
                key: "attemptToReconnect",
                value: function() {
                    var e = this;
                    this.transportExplicitlyClosed || setTimeout((0,
                    i.Z)((0,
                    n.Z)().mark((function t() {
                        return (0,
                        n.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.restartTransport();
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))), (0,
                    C.toMiliseconds)(wn))
                }
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }, {
                key: "toEstablishConnection",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.connected) {
                                        e.next = 7;
                                        break
                                    }
                                    if (!this.connecting) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4,
                                    new Promise((function(e) {
                                        var r = setInterval((function() {
                                            t.connected && (clearInterval(r),
                                            e())
                                        }
                                        ), t.connectionStatusPollingInterval)
                                    }
                                    ));
                                case 4:
                                    return e.abrupt("return", e.sent);
                                case 5:
                                    return e.next = 7,
                                    this.restartTransport();
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }(k.oe)
          , ni = Object.defineProperty
          , ii = Object.getOwnPropertySymbols
          , si = Object.prototype.hasOwnProperty
          , ai = Object.prototype.propertyIsEnumerable
          , oi = function(e, t, r) {
            return t in e ? ni(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , ci = function(e, t) {
            for (var r in t || (t = {}))
                si.call(t, r) && oi(e, r, t[r]);
            if (ii) {
                var n, i = (0,
                u.Z)(ii(t));
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        r = n.value;
                        ai.call(t, r) && oi(e, r, t[r])
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
            }
            return e
        }
          , ui = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, a, o) {
                var c, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tn, p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                return (0,
                s.Z)(this, r),
                (c = t.call(this, e, a, o, u)).core = e,
                c.logger = a,
                c.name = o,
                c.map = new Map,
                c.version = "0.3",
                c.cached = [],
                c.initialized = !1,
                c.storagePrefix = tn,
                c.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = c.initialized,
                                e.t0) {
                                    e.next = 8;
                                    break
                                }
                                return c.logger.trace("Initialized"),
                                e.next = 5,
                                c.restore();
                            case 5:
                                c.cached.forEach((function(e) {
                                    c.getKey && null !== e && !Fe(e) ? c.map.set(c.getKey(e), e) : Ye(e) ? c.map.set(e.id, e) : Qe(e) && c.map.set(e.topic, e)
                                }
                                )),
                                c.cached = [],
                                c.initialized = !0;
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                c.set = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (c.isInitialized(),
                                    !c.map.has(t)) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 4,
                                    c.update(t, r);
                                case 4:
                                    e.next = 11;
                                    break;
                                case 6:
                                    return c.logger.debug("Setting value"),
                                    c.logger.trace({
                                        type: "method",
                                        method: "set",
                                        key: t,
                                        value: r
                                    }),
                                    c.map.set(t, r),
                                    e.next = 11,
                                    c.persist();
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                c.get = function(e) {
                    return c.isInitialized(),
                    c.logger.debug("Getting value"),
                    c.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }),
                    c.getData(e)
                }
                ,
                c.getAll = function(e) {
                    return c.isInitialized(),
                    e ? c.values.filter((function(t) {
                        return Object.keys(e).every((function(r) {
                            return Zt()(t[r], e[r])
                        }
                        ))
                    }
                    )) : c.values
                }
                ,
                c.update = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return c.isInitialized(),
                                    c.logger.debug("Updating value"),
                                    c.logger.trace({
                                        type: "method",
                                        method: "update",
                                        key: t,
                                        update: r
                                    }),
                                    i = ci(ci({}, c.getData(t)), r),
                                    c.map.set(t, i),
                                    e.next = 5,
                                    c.persist();
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                c.delete = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (c.isInitialized(),
                                    e.t0 = c.map.has(t),
                                    !e.t0) {
                                        e.next = 8;
                                        break
                                    }
                                    return c.logger.debug("Deleting value"),
                                    c.logger.trace({
                                        type: "method",
                                        method: "delete",
                                        key: t,
                                        reason: r
                                    }),
                                    c.map.delete(t),
                                    e.next = 8,
                                    c.persist();
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                c.logger = (0,
                x.generateChildLogger)(a, c.name),
                c.storagePrefix = u,
                c.getKey = p,
                c
            }
            return (0,
            a.Z)(r, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "storageKey",
                get: function() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
            }, {
                key: "length",
                get: function() {
                    return this.map.size
                }
            }, {
                key: "keys",
                get: function() {
                    return Array.from(this.map.keys())
                }
            }, {
                key: "values",
                get: function() {
                    return Array.from(this.map.values())
                }
            }, {
                key: "setDataStore",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.setItem(this.storageKey, t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getDataStore",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.getItem(this.storageKey);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getData",
                value: function(e) {
                    var t = this.map.get(e);
                    if (!t) {
                        var r = Be("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e)).message;
                        throw this.logger.error(r),
                        new Error(r)
                    }
                    return t
                }
            }, {
                key: "persist",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.setDataStore(this.values);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "restore",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getDataStore();
                                case 3:
                                    if (!(typeof (t = e.sent) > "u") && t.length) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    if (!this.map.size) {
                                        e.next = 9;
                                        break
                                    }
                                    throw r = Be("RESTORE_WILL_OVERRIDE", this.name),
                                    i = r.message,
                                    this.logger.error(i),
                                    new Error(i);
                                case 9:
                                    this.cached = t,
                                    this.logger.debug("Successfully Restored value for ".concat(this.name)),
                                    this.logger.trace({
                                        type: "method",
                                        method: "restore",
                                        value: this.values
                                    }),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    this.logger.debug("Failed to Restore value for ".concat(this.name)),
                                    this.logger.error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 12]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }]),
            r
        }(k.pZ)
          , pi = function() {
            function e(t, r) {
                var a = this;
                (0,
                s.Z)(this, e),
                this.core = t,
                this.logger = r,
                this.name = "pairing",
                this.version = "0.3",
                this.events = new (y()),
                this.initialized = !1,
                this.storagePrefix = tn,
                this.ignoredPayloadTypes = [K],
                this.registeredMethods = [],
                this.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = a.initialized,
                                e.t0) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 4,
                                a.pairings.init();
                            case 4:
                                return e.next = 6,
                                a.cleanup();
                            case 6:
                                a.registerRelayerEvents(),
                                a.registerExpirerEvents(),
                                a.initialized = !0,
                                a.logger.trace("Initialized");
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.register = function(e) {
                    var t = e.methods;
                    a.isInitialized(),
                    a.registeredMethods = (0,
                    c.Z)(new Set([].concat((0,
                    c.Z)(a.registeredMethods), (0,
                    c.Z)(t))))
                }
                ,
                this.create = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    var t, r, i, s, o, c;
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return a.isInitialized(),
                                t = W(),
                                e.next = 4,
                                a.core.crypto.setSymKey(t);
                            case 4:
                                return r = e.sent,
                                i = Ie(C.FIVE_MINUTES),
                                o = {
                                    topic: r,
                                    expiry: i,
                                    relay: s = {
                                        protocol: "irn"
                                    },
                                    active: !1
                                },
                                c = qe({
                                    protocol: a.core.protocol,
                                    version: a.core.version,
                                    topic: r,
                                    symKey: t,
                                    relay: s
                                }),
                                e.next = 11,
                                a.pairings.set(r, o);
                            case 11:
                                return e.next = 13,
                                a.core.relayer.subscribe(r);
                            case 13:
                                return a.core.expirer.set(r, i),
                                e.abrupt("return", {
                                    topic: r,
                                    uri: c
                                });
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.pair = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a.isInitialized(),
                                    a.isValidPair(t),
                                    r = Le(t.uri),
                                    i = r.topic,
                                    s = r.symKey,
                                    o = r.relay,
                                    !a.pairings.keys.includes(i)) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("Pairing already exists: ".concat(i));
                                case 4:
                                    if (!a.core.crypto.hasKeys(i)) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error("Keychain already exists: ".concat(i));
                                case 6:
                                    return c = Ie(C.FIVE_MINUTES),
                                    u = {
                                        topic: i,
                                        relay: o,
                                        expiry: c,
                                        active: !1
                                    },
                                    e.next = 9,
                                    a.pairings.set(i, u);
                                case 9:
                                    return e.next = 11,
                                    a.core.crypto.setSymKey(s, i);
                                case 11:
                                    return e.next = 13,
                                    a.core.relayer.subscribe(i, {
                                        relay: o
                                    });
                                case 13:
                                    if (a.core.expirer.set(i, c),
                                    e.t0 = t.activatePairing,
                                    !e.t0) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.next = 18,
                                    a.activate({
                                        topic: i
                                    });
                                case 18:
                                    return e.abrupt("return", u);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.activate = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = t.topic,
                                    a.isInitialized(),
                                    i = Ie(C.THIRTY_DAYS),
                                    e.next = 5,
                                    a.pairings.update(r, {
                                        active: !0,
                                        expiry: i
                                    });
                                case 5:
                                    a.core.expirer.set(r, i);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.ping = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidPing(t);
                                case 3:
                                    if (r = t.topic,
                                    !a.pairings.keys.includes(r)) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.next = 7,
                                    a.sendRequest(r, "wc_pairingPing", {});
                                case 7:
                                    return i = e.sent,
                                    s = xe(),
                                    o = s.done,
                                    c = s.resolve,
                                    u = s.reject,
                                    a.events.once(_e("pairing_ping", i), (function(e) {
                                        var t = e.error;
                                        t ? u(t) : c()
                                    }
                                    )),
                                    e.next = 15,
                                    o();
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.updateExpiry = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = t.topic,
                                    i = t.expiry,
                                    a.isInitialized(),
                                    e.next = 4,
                                    a.pairings.update(r, {
                                        expiry: i
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.updateMetadata = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = t.topic,
                                    i = t.metadata,
                                    a.isInitialized(),
                                    e.next = 4,
                                    a.pairings.update(r, {
                                        peerMetadata: i
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.getPairings = function() {
                    return a.isInitialized(),
                    a.pairings.values
                }
                ,
                this.disconnect = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidDisconnect(t);
                                case 3:
                                    if (r = t.topic,
                                    e.t0 = a.pairings.keys.includes(r),
                                    !e.t0) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 8,
                                    a.sendRequest(r, "wc_pairingDelete", Ve("USER_DISCONNECTED"));
                                case 8:
                                    return e.next = 10,
                                    a.deletePairing(r);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.sendRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, o, c;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = (0,
                                    mt.formatJsonRpcRequest)(r, i),
                                    e.next = 3,
                                    a.core.crypto.encode(t, s);
                                case 3:
                                    return o = e.sent,
                                    c = Pn[r].req,
                                    a.core.history.set(t, s),
                                    e.next = 8,
                                    a.core.relayer.publish(t, o, c);
                                case 8:
                                    return e.abrupt("return", s.id);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.sendResult = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = (0,
                                    mt.formatJsonRpcResult)(t, i),
                                    e.next = 3,
                                    a.core.crypto.encode(r, s);
                                case 3:
                                    return o = e.sent,
                                    e.next = 6,
                                    a.core.history.get(r, t);
                                case 6:
                                    return c = e.sent,
                                    u = Pn[c.request.method].res,
                                    e.next = 10,
                                    a.core.relayer.publish(r, o, u);
                                case 10:
                                    return e.next = 12,
                                    a.core.history.resolve(s);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.sendError = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = (0,
                                    mt.formatJsonRpcError)(t, i),
                                    e.next = 3,
                                    a.core.crypto.encode(r, s);
                                case 3:
                                    return o = e.sent,
                                    e.next = 6,
                                    a.core.history.get(r, t);
                                case 6:
                                    return c = e.sent,
                                    u = Pn[c.request.method] ? Pn[c.request.method].res : Pn.unregistered_method.res,
                                    e.next = 10,
                                    a.core.relayer.publish(r, o, u);
                                case 10:
                                    return e.next = 12,
                                    a.core.history.resolve(s);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.deletePairing = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    a.core.relayer.unsubscribe(t);
                                case 2:
                                    return e.next = 4,
                                    Promise.all([a.pairings.delete(t, Ve("USER_DISCONNECTED")), a.core.crypto.deleteSymKey(t), r ? Promise.resolve() : a.core.expirer.del(t)]);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.cleanup = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    var t;
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = a.pairings.getAll().filter((function(e) {
                                    return Pe(e.expiry)
                                }
                                )),
                                e.next = 3,
                                Promise.all(t.map((function(e) {
                                    return a.deletePairing(e.topic)
                                }
                                )));
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.onRelayEventRequest = function(e) {
                    var t = e.topic
                      , r = e.payload
                      , n = r.method;
                    if (a.pairings.keys.includes(t))
                        switch (n) {
                        case "wc_pairingPing":
                            return a.onPairingPingRequest(t, r);
                        case "wc_pairingDelete":
                            return a.onPairingDeleteRequest(t, r);
                        default:
                            return a.onUnknownRpcMethodRequest(t, r)
                        }
                }
                ,
                this.onRelayEventResponse = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = t.topic,
                                    i = t.payload,
                                    e.next = 4,
                                    a.core.history.get(r, i.id);
                                case 4:
                                    if (s = e.sent.request.method,
                                    !a.pairings.keys.includes(r)) {
                                        e.next = 11;
                                        break
                                    }
                                    e.t0 = s,
                                    e.next = "wc_pairingPing" === e.t0 ? 9 : 10;
                                    break;
                                case 9:
                                    return e.abrupt("return", a.onPairingPingResponse(r, i));
                                case 10:
                                    return e.abrupt("return", a.onUnknownRpcMethodResponse(s));
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.onPairingPingRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.id,
                                    e.prev = 1,
                                    a.isValidPing({
                                        topic: t
                                    }),
                                    e.next = 5,
                                    a.sendResult(i, t, !0);
                                case 5:
                                    a.events.emit("pairing_ping", {
                                        id: i,
                                        topic: t
                                    }),
                                    e.next = 13;
                                    break;
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(1),
                                    e.next = 12,
                                    a.sendError(i, t, e.t0);
                                case 12:
                                    a.logger.error(e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 8]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.onPairingPingResponse = function(e, t) {
                    var r = t.id;
                    setTimeout((function() {
                        (0,
                        mt.isJsonRpcResult)(t) ? a.events.emit(_e("pairing_ping", r), {}) : (0,
                        mt.isJsonRpcError)(t) && a.events.emit(_e("pairing_ping", r), {
                            error: t.error
                        })
                    }
                    ), 500)
                }
                ,
                this.onPairingDeleteRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.id,
                                    e.prev = 1,
                                    a.isValidDisconnect({
                                        topic: t
                                    }),
                                    e.next = 5,
                                    a.deletePairing(t);
                                case 5:
                                    a.events.emit("pairing_delete", {
                                        id: i,
                                        topic: t
                                    }),
                                    e.next = 13;
                                    break;
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(1),
                                    e.next = 12,
                                    a.sendError(i, t, e.t0);
                                case 12:
                                    a.logger.error(e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 8]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.onUnknownRpcMethodRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s, o;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = r.id,
                                    s = r.method,
                                    e.prev = 1,
                                    !a.registeredMethods.includes(s)) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return o = Ve("WC_METHOD_UNSUPPORTED", s),
                                    e.next = 7,
                                    a.sendError(i, t, o);
                                case 7:
                                    a.logger.error(o),
                                    e.next = 15;
                                    break;
                                case 10:
                                    return e.prev = 10,
                                    e.t0 = e.catch(1),
                                    e.next = 14,
                                    a.sendError(i, t, e.t0);
                                case 14:
                                    a.logger.error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 10]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.onUnknownRpcMethodResponse = function(e) {
                    a.registeredMethods.includes(e) || a.logger.error(Ve("WC_METHOD_UNSUPPORTED", e))
                }
                ,
                this.isValidPair = function(e) {
                    if (!at(e)) {
                        var t = Be("MISSING_OR_INVALID", "pair() params: ".concat(e)).message;
                        throw new Error(t)
                    }
                    if (!function(e) {
                        if (Ge(e, !1))
                            try {
                                return typeof new URL(e) < "u"
                            } catch (t) {
                                return !1
                            }
                        return !1
                    }(e.uri)) {
                        var r = Be("MISSING_OR_INVALID", "pair() uri: ".concat(e.uri)).message;
                        throw new Error(r)
                    }
                }
                ,
                this.isValidPing = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "ping() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    e.next = 6,
                                    a.isValidPairingTopic(s);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.isValidDisconnect = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "disconnect() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    e.next = 6,
                                    a.isValidPairingTopic(s);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.isValidPairingTopic = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (Ge(t, !1)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    if (a.pairings.keys.includes(t)) {
                                        e.next = 6;
                                        break
                                    }
                                    throw s = Be("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(t)),
                                    o = s.message,
                                    new Error(o);
                                case 6:
                                    if (!Pe(a.pairings.get(t).expiry)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 9,
                                    a.deletePairing(t);
                                case 9:
                                    throw c = Be("EXPIRED", "pairing topic: ".concat(t)),
                                    u = c.message,
                                    new Error(u);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                this.core = t,
                this.logger = (0,
                x.generateChildLogger)(r, this.name),
                this.pairings = new ui(this.core,this.logger,this.name,this.storagePrefix)
            }
            return (0,
            a.Z)(e, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }, {
                key: "registerRelayerEvents",
                value: function() {
                    var e = this;
                    this.core.relayer.on(un, function() {
                        var t = (0,
                        i.Z)((0,
                        n.Z)().mark((function t(r) {
                            var i, s, a;
                            return (0,
                            n.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (i = r.topic,
                                        s = r.message,
                                        !e.ignoredPayloadTypes.includes(e.core.crypto.getPayloadType(s))) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5,
                                        e.core.crypto.decode(i, s);
                                    case 5:
                                        if (a = t.sent,
                                        !(0,
                                        mt.isJsonRpcRequest)(a)) {
                                            t.next = 10;
                                            break
                                        }
                                        e.core.history.set(i, a),
                                        e.onRelayEventRequest({
                                            topic: i,
                                            payload: a
                                        }),
                                        t.next = 15;
                                        break;
                                    case 10:
                                        if (t.t0 = (0,
                                        mt.isJsonRpcResponse)(a),
                                        !t.t0) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.next = 14,
                                        e.core.history.resolve(a);
                                    case 14:
                                        e.onRelayEventResponse({
                                            topic: i,
                                            payload: a
                                        });
                                    case 15:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "registerExpirerEvents",
                value: function() {
                    var e = this;
                    this.core.expirer.on(Tn, function() {
                        var t = (0,
                        i.Z)((0,
                        n.Z)().mark((function t(r) {
                            var i, s;
                            return (0,
                            n.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (i = Ee(r.target),
                                        s = i.topic,
                                        t.t0 = s && e.pairings.keys.includes(s),
                                        !t.t0) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 5,
                                        e.deletePairing(s, !0);
                                    case 5:
                                        e.events.emit("pairing_expire", {
                                            topic: s
                                        });
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }]),
            e
        }()
          , li = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, a) {
                var o;
                return (0,
                s.Z)(this, r),
                (o = t.call(this, e, a)).core = e,
                o.logger = a,
                o.records = new Map,
                o.events = new m.EventEmitter,
                o.name = "history",
                o.version = "0.3",
                o.cached = [],
                o.initialized = !1,
                o.storagePrefix = tn,
                o.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = o.initialized,
                                e.t0) {
                                    e.next = 9;
                                    break
                                }
                                return o.logger.trace("Initialized"),
                                e.next = 5,
                                o.restore();
                            case 5:
                                o.cached.forEach((function(e) {
                                    return o.records.set(e.id, e)
                                }
                                )),
                                o.cached = [],
                                o.registerEventListeners(),
                                o.initialized = !0;
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                o.set = function(e, t, r) {
                    if (o.isInitialized(),
                    o.logger.debug("Setting JSON-RPC request history record"),
                    o.logger.trace({
                        type: "method",
                        method: "set",
                        topic: e,
                        request: t,
                        chainId: r
                    }),
                    !o.records.has(t.id)) {
                        var n = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r
                        };
                        o.records.set(n.id, n),
                        o.events.emit(_n, n)
                    }
                }
                ,
                o.resolve = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (o.isInitialized(),
                                    o.logger.debug("Updating JSON-RPC response history record"),
                                    o.logger.trace({
                                        type: "method",
                                        method: "update",
                                        response: t
                                    }),
                                    o.records.has(t.id)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4,
                                    o.getRecord(t.id);
                                case 4:
                                    typeof (r = e.sent).response > "u" && (r.response = (0,
                                    mt.isJsonRpcError)(t) ? {
                                        error: t.error
                                    } : {
                                        result: t.result
                                    },
                                    o.records.set(r.id, r),
                                    o.events.emit(Sn, r));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.get = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o.isInitialized(),
                                    o.logger.debug("Getting record"),
                                    o.logger.trace({
                                        type: "method",
                                        method: "get",
                                        topic: t,
                                        id: r
                                    }),
                                    e.next = 5,
                                    o.getRecord(r);
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.delete = function(e, t) {
                    o.isInitialized(),
                    o.logger.debug("Deleting record"),
                    o.logger.trace({
                        type: "method",
                        method: "delete",
                        id: t
                    }),
                    o.values.forEach((function(r) {
                        if (r.topic === e) {
                            if (typeof t < "u" && r.id !== t)
                                return;
                            o.records.delete(r.id),
                            o.events.emit(Nn, r)
                        }
                    }
                    ))
                }
                ,
                o.exists = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (o.isInitialized(),
                                    !o.records.has(r)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 4,
                                    o.getRecord(r);
                                case 4:
                                    e.t1 = e.sent.topic,
                                    e.t2 = t,
                                    e.t0 = e.t1 === e.t2,
                                    e.next = 10;
                                    break;
                                case 9:
                                    e.t0 = !1;
                                case 10:
                                    return e.abrupt("return", e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                o.on = function(e, t) {
                    o.events.on(e, t)
                }
                ,
                o.once = function(e, t) {
                    o.events.once(e, t)
                }
                ,
                o.off = function(e, t) {
                    o.events.off(e, t)
                }
                ,
                o.removeListener = function(e, t) {
                    o.events.removeListener(e, t)
                }
                ,
                o.logger = (0,
                x.generateChildLogger)(a, o.name),
                o
            }
            return (0,
            a.Z)(r, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "storageKey",
                get: function() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
            }, {
                key: "size",
                get: function() {
                    return this.records.size
                }
            }, {
                key: "keys",
                get: function() {
                    return Array.from(this.records.keys())
                }
            }, {
                key: "values",
                get: function() {
                    return Array.from(this.records.values())
                }
            }, {
                key: "pending",
                get: function() {
                    var e = [];
                    return this.values.forEach((function(t) {
                        if (!(typeof t.response < "u")) {
                            var r = {
                                topic: t.topic,
                                request: (0,
                                mt.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                                chainId: t.chainId
                            };
                            return e.push(r)
                        }
                    }
                    )),
                    e
                }
            }, {
                key: "setJsonRpcRecords",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.setItem(this.storageKey, t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getJsonRpcRecords",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.getItem(this.storageKey);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getRecord",
                value: function(e) {
                    this.isInitialized();
                    var t = this.records.get(e);
                    if (!t) {
                        var r = Be("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e)).message;
                        throw new Error(r)
                    }
                    return t
                }
            }, {
                key: "persist",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.setJsonRpcRecords(this.values);
                                case 2:
                                    this.events.emit(Rn);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "restore",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getJsonRpcRecords();
                                case 3:
                                    if (!(typeof (t = e.sent) > "u") && t.length) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    if (!this.records.size) {
                                        e.next = 9;
                                        break
                                    }
                                    throw r = Be("RESTORE_WILL_OVERRIDE", this.name),
                                    i = r.message,
                                    this.logger.error(i),
                                    new Error(i);
                                case 9:
                                    this.cached = t,
                                    this.logger.debug("Successfully Restored records for ".concat(this.name)),
                                    this.logger.trace({
                                        type: "method",
                                        method: "restore",
                                        records: this.values
                                    }),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    this.logger.debug("Failed to Restore records for ".concat(this.name)),
                                    this.logger.error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 12]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.events.on(_n, (function(t) {
                        var r = _n;
                        e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({
                            type: "event",
                            event: r,
                            record: t
                        }),
                        e.persist()
                    }
                    )),
                    this.events.on(Sn, (function(t) {
                        var r = Sn;
                        e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({
                            type: "event",
                            event: r,
                            record: t
                        }),
                        e.persist()
                    }
                    )),
                    this.events.on(Nn, (function(t) {
                        var r = Nn;
                        e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({
                            type: "event",
                            event: r,
                            record: t
                        }),
                        e.persist()
                    }
                    ))
                }
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }]),
            r
        }(k.yy)
          , fi = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, a) {
                var o;
                return (0,
                s.Z)(this, r),
                (o = t.call(this, e, a)).core = e,
                o.logger = a,
                o.expirations = new Map,
                o.events = new m.EventEmitter,
                o.name = "expirer",
                o.version = "0.3",
                o.cached = [],
                o.initialized = !1,
                o.storagePrefix = tn,
                o.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = o.initialized,
                                e.t0) {
                                    e.next = 9;
                                    break
                                }
                                return o.logger.trace("Initialized"),
                                e.next = 5,
                                o.restore();
                            case 5:
                                o.cached.forEach((function(e) {
                                    return o.expirations.set(e.target, e)
                                }
                                )),
                                o.cached = [],
                                o.registerEventListeners(),
                                o.initialized = !0;
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                o.has = function(e) {
                    try {
                        var t = o.formatTarget(e);
                        return typeof o.getExpiration(t) < "u"
                    } catch (r) {
                        return !1
                    }
                }
                ,
                o.set = function(e, t) {
                    o.isInitialized();
                    var r = o.formatTarget(e)
                      , n = {
                        target: r,
                        expiry: t
                    };
                    o.expirations.set(r, n),
                    o.checkExpiry(r, n),
                    o.events.emit(On, {
                        target: r,
                        expiration: n
                    })
                }
                ,
                o.get = function(e) {
                    o.isInitialized();
                    var t = o.formatTarget(e);
                    return o.getExpiration(t)
                }
                ,
                o.del = function(e) {
                    if (o.isInitialized(),
                    o.has(e)) {
                        var t = o.formatTarget(e)
                          , r = o.getExpiration(t);
                        o.expirations.delete(t),
                        o.events.emit(Cn, {
                            target: t,
                            expiration: r
                        })
                    }
                }
                ,
                o.on = function(e, t) {
                    o.events.on(e, t)
                }
                ,
                o.once = function(e, t) {
                    o.events.once(e, t)
                }
                ,
                o.off = function(e, t) {
                    o.events.off(e, t)
                }
                ,
                o.removeListener = function(e, t) {
                    o.events.removeListener(e, t)
                }
                ,
                o.logger = (0,
                x.generateChildLogger)(a, o.name),
                o
            }
            return (0,
            a.Z)(r, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "storageKey",
                get: function() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
            }, {
                key: "length",
                get: function() {
                    return this.expirations.size
                }
            }, {
                key: "keys",
                get: function() {
                    return Array.from(this.expirations.keys())
                }
            }, {
                key: "values",
                get: function() {
                    return Array.from(this.expirations.values())
                }
            }, {
                key: "formatTarget",
                value: function(e) {
                    if ("string" == typeof e)
                        return function(e) {
                            return Ze("topic", e)
                        }(e);
                    if ("number" == typeof e)
                        return function(e) {
                            return Ze("id", e)
                        }(e);
                    var t = Be("UNKNOWN_TYPE", "Target type: ".concat(typeof e)).message;
                    throw new Error(t)
                }
            }, {
                key: "setExpirations",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.setItem(this.storageKey, t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getExpirations",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.core.storage.getItem(this.storageKey);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "persist",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.setExpirations(this.values);
                                case 2:
                                    this.events.emit(An);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "restore",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.getExpirations();
                                case 3:
                                    if (!(typeof (t = e.sent) > "u") && t.length) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    if (!this.expirations.size) {
                                        e.next = 9;
                                        break
                                    }
                                    throw r = Be("RESTORE_WILL_OVERRIDE", this.name),
                                    i = r.message,
                                    this.logger.error(i),
                                    new Error(i);
                                case 9:
                                    this.cached = t,
                                    this.logger.debug("Successfully Restored expirations for ".concat(this.name)),
                                    this.logger.trace({
                                        type: "method",
                                        method: "restore",
                                        expirations: this.values
                                    }),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(0),
                                    this.logger.debug("Failed to Restore expirations for ".concat(this.name)),
                                    this.logger.error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 12]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getExpiration",
                value: function(e) {
                    var t = this.expirations.get(e);
                    if (!t) {
                        var r = Be("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e)).message;
                        throw this.logger.error(r),
                        new Error(r)
                    }
                    return t
                }
            }, {
                key: "checkExpiry",
                value: function(e, t) {
                    var r = t.expiry;
                    (0,
                    C.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
            }, {
                key: "expire",
                value: function(e, t) {
                    this.expirations.delete(e),
                    this.events.emit(Tn, {
                        target: e,
                        expiration: t
                    })
                }
            }, {
                key: "checkExpirations",
                value: function() {
                    var e = this;
                    this.core.relayer.connected && this.expirations.forEach((function(t, r) {
                        return e.checkExpiry(r, t)
                    }
                    ))
                }
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.core.heartbeat.on(w.HEARTBEAT_EVENTS.pulse, (function() {
                        return e.checkExpirations()
                    }
                    )),
                    this.events.on(On, (function(t) {
                        var r = On;
                        e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({
                            type: "event",
                            event: r,
                            data: t
                        }),
                        e.persist()
                    }
                    )),
                    this.events.on(Tn, (function(t) {
                        var r = Tn;
                        e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({
                            type: "event",
                            event: r,
                            data: t
                        }),
                        e.persist()
                    }
                    )),
                    this.events.on(Cn, (function(t) {
                        var r = Cn;
                        e.logger.info("Emitting ".concat(r)),
                        e.logger.debug({
                            type: "event",
                            event: r,
                            data: t
                        }),
                        e.persist()
                    }
                    ))
                }
            }, {
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }]),
            r
        }(k.D3)
          , hi = Object.defineProperty
          , di = Object.getOwnPropertySymbols
          , vi = Object.prototype.hasOwnProperty
          , gi = Object.prototype.propertyIsEnumerable
          , mi = function(e, t, r) {
            return t in e ? hi(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , yi = function(e, t) {
            for (var r in t || (t = {}))
                vi.call(t, r) && mi(e, r, t[r]);
            if (di) {
                var n, i = (0,
                u.Z)(di(t));
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        r = n.value;
                        gi.call(t, r) && mi(e, r, t[r])
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
            }
            return e
        }
          , bi = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e) {
                var n;
                (0,
                s.Z)(this, r),
                (n = t.call(this, e)).protocol = "wc",
                n.version = 2,
                n.name = en,
                n.events = new m.EventEmitter,
                n.initialized = !1,
                n.on = function(e, t) {
                    return n.events.on(e, t)
                }
                ,
                n.once = function(e, t) {
                    return n.events.once(e, t)
                }
                ,
                n.off = function(e, t) {
                    return n.events.off(e, t)
                }
                ,
                n.removeListener = function(e, t) {
                    return n.events.removeListener(e, t)
                }
                ,
                n.projectId = null === e || void 0 === e ? void 0 : e.projectId,
                n.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || cn;
                var i = typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof (null === e || void 0 === e ? void 0 : e.logger) ? e.logger : l()((0,
                x.getDefaultLoggerOptions)({
                    level: (null === e || void 0 === e ? void 0 : e.logger) || rn
                }));
                return n.logger = (0,
                x.generateChildLogger)(i, n.name),
                n.heartbeat = new w.HeartBeat,
                n.crypto = new Ln((0,
                f.Z)(n),n.logger,null === e || void 0 === e ? void 0 : e.keychain),
                n.history = new li((0,
                f.Z)(n),n.logger),
                n.expirer = new fi((0,
                f.Z)(n),n.logger),
                n.storage = null != e && e.storage ? e.storage : new b.ZP(yi(yi({}, nn), null === e || void 0 === e ? void 0 : e.storageOptions)),
                n.relayer = new ri({
                    core: (0,
                    f.Z)(n),
                    logger: n.logger,
                    relayUrl: n.relayUrl,
                    projectId: n.projectId
                }),
                n.pairing = new pi((0,
                f.Z)(n),n.logger),
                n
            }
            return (0,
            a.Z)(r, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "start",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = this.initialized,
                                    e.t0) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 4,
                                    this.initialize();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "initialize",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.logger.trace("Initialized"),
                                    e.prev = 1,
                                    e.next = 4,
                                    this.crypto.init();
                                case 4:
                                    return e.next = 6,
                                    this.history.init();
                                case 6:
                                    return e.next = 8,
                                    this.expirer.init();
                                case 8:
                                    return e.next = 10,
                                    this.relayer.init();
                                case 10:
                                    return e.next = 12,
                                    this.heartbeat.init();
                                case 12:
                                    return e.next = 14,
                                    this.pairing.init();
                                case 14:
                                    this.initialized = !0,
                                    this.logger.info("Core Initialization Success"),
                                    e.next = 21;
                                    break;
                                case 18:
                                    throw e.prev = 18,
                                    e.t0 = e.catch(1),
                                    this.logger.warn("Core Initialization Failure at epoch ".concat(Date.now()), e.t0),
                                    this.logger.error(e.t0.message),
                                    e.t0;
                                case 21:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 18]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "init",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = new r(t),
                                    e.next = 3,
                                    i.initialize();
                                case 3:
                                    return e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }(k.N1)
          , wi = bi
          , xi = "client"
          , ki = "".concat("wc", "@").concat(2, ":").concat(xi, ":")
          , Zi = xi
          , Ei = "error"
          , Ii = (C.THIRTY_DAYS,
        "Proposal expired")
          , Pi = C.SEVEN_DAYS
          , _i = {
            wc_sessionPropose: {
                req: {
                    ttl: C.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1100
                },
                res: {
                    ttl: C.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1101
                }
            },
            wc_sessionSettle: {
                req: {
                    ttl: C.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1102
                },
                res: {
                    ttl: C.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1103
                }
            },
            wc_sessionUpdate: {
                req: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 1104
                },
                res: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 1105
                }
            },
            wc_sessionExtend: {
                req: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 1106
                },
                res: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 1107
                }
            },
            wc_sessionRequest: {
                req: {
                    ttl: C.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1108
                },
                res: {
                    ttl: C.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1109
                }
            },
            wc_sessionEvent: {
                req: {
                    ttl: C.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1110
                },
                res: {
                    ttl: C.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1111
                }
            },
            wc_sessionDelete: {
                req: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 1112
                },
                res: {
                    ttl: C.ONE_DAY,
                    prompt: !1,
                    tag: 1113
                }
            },
            wc_sessionPing: {
                req: {
                    ttl: C.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1114
                },
                res: {
                    ttl: C.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1115
                }
            }
        }
          , Si = {
            min: C.FIVE_MINUTES,
            max: C.SEVEN_DAYS
        }
          , Ni = Object.defineProperty
          , Ri = Object.defineProperties
          , Oi = Object.getOwnPropertyDescriptors
          , Ci = Object.getOwnPropertySymbols
          , Ti = Object.prototype.hasOwnProperty
          , Ai = Object.prototype.propertyIsEnumerable
          , Di = function(e, t, r) {
            return t in e ? Ni(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , Li = function(e, t) {
            for (var r in t || (t = {}))
                Ti.call(t, r) && Di(e, r, t[r]);
            if (Ci) {
                var n, i = (0,
                u.Z)(Ci(t));
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        r = n.value;
                        Ai.call(t, r) && Di(e, r, t[r])
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
            }
            return e
        }
          , qi = function(e, t) {
            return Ri(e, Oi(t))
        }
          , Mi = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e) {
                var a;
                return (0,
                s.Z)(this, r),
                (a = t.call(this, e)).name = "engine",
                a.events = new (y()),
                a.initialized = !1,
                a.ignoredPayloadTypes = [K],
                a.init = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.t0 = a.initialized,
                                e.t0) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 4,
                                a.cleanup();
                            case 4:
                                a.registerRelayerEvents(),
                                a.registerExpirerEvents(),
                                a.client.core.pairing.register({
                                    methods: Object.keys(_i)
                                }),
                                a.initialized = !0;
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                a.connect = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, s, o, c, u, p, l, f, h, d, v, g, m, y, b, w, x, k, Z, E, I, P;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    r = qi(Li({}, t), {
                                        requiredNamespaces: t.requiredNamespaces || {},
                                        optionalNamespaces: t.optionalNamespaces || {}
                                    }),
                                    e.next = 4,
                                    a.isValidConnect(r);
                                case 4:
                                    if (s = r.pairingTopic,
                                    o = r.requiredNamespaces,
                                    c = r.optionalNamespaces,
                                    u = r.sessionProperties,
                                    p = r.relays,
                                    h = !1,
                                    (l = s) && (h = a.client.core.pairing.pairings.get(l).active),
                                    l && h) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 9,
                                    a.client.core.pairing.create();
                                case 9:
                                    d = e.sent,
                                    v = d.topic,
                                    g = d.uri,
                                    l = v,
                                    f = g;
                                case 13:
                                    return e.next = 15,
                                    a.client.core.crypto.generateKeyPair();
                                case 15:
                                    if (m = e.sent,
                                    y = Li({
                                        requiredNamespaces: o,
                                        optionalNamespaces: c,
                                        relays: null !== p && void 0 !== p ? p : [{
                                            protocol: "irn"
                                        }],
                                        proposer: {
                                            publicKey: m,
                                            metadata: a.client.metadata
                                        }
                                    }, u && {
                                        sessionProperties: u
                                    }),
                                    b = xe(C.FIVE_MINUTES, Ii),
                                    w = b.reject,
                                    x = b.resolve,
                                    k = b.done,
                                    a.events.once(_e("session_connect"), function() {
                                        var e = (0,
                                        i.Z)((0,
                                        n.Z)().mark((function e(t) {
                                            var r, i, s;
                                            return (0,
                                            n.Z)().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        if (r = t.error,
                                                        i = t.session,
                                                        !r) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        w(r),
                                                        e.next = 17;
                                                        break;
                                                    case 5:
                                                        if (!i) {
                                                            e.next = 17;
                                                            break
                                                        }
                                                        return i.self.publicKey = m,
                                                        s = qi(Li({}, i), {
                                                            requiredNamespaces: i.requiredNamespaces,
                                                            optionalNamespaces: i.optionalNamespaces
                                                        }),
                                                        e.next = 10,
                                                        a.client.session.set(i.topic, s);
                                                    case 10:
                                                        return e.next = 12,
                                                        a.setExpiry(i.topic, i.expiry);
                                                    case 12:
                                                        if (e.t0 = l,
                                                        !e.t0) {
                                                            e.next = 16;
                                                            break
                                                        }
                                                        return e.next = 16,
                                                        a.client.core.pairing.updateMetadata({
                                                            topic: l,
                                                            metadata: i.peer.metadata
                                                        });
                                                    case 16:
                                                        x(s);
                                                    case 17:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()),
                                    l) {
                                        e.next = 24;
                                        break
                                    }
                                    throw Z = Be("NO_MATCHING_KEY", "connect() pairing topic: ".concat(l)),
                                    E = Z.message,
                                    new Error(E);
                                case 24:
                                    return e.next = 26,
                                    a.sendRequest(l, "wc_sessionPropose", y);
                                case 26:
                                    return I = e.sent,
                                    P = Ie(C.FIVE_MINUTES),
                                    e.next = 30,
                                    a.setProposal(I, Li({
                                        id: I,
                                        expiry: P
                                    }, y));
                                case 30:
                                    return e.abrupt("return", {
                                        uri: f,
                                        approval: k
                                    });
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.pair = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.client.core.pairing.pair(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.approve = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u, p, l, f, h, d, v, g, m, y, b, w, x, k;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidApprove(t);
                                case 3:
                                    return r = t.id,
                                    i = t.relayProtocol,
                                    s = t.namespaces,
                                    o = t.sessionProperties,
                                    c = a.client.proposal.get(r),
                                    u = c.pairingTopic,
                                    p = c.proposer,
                                    l = c.requiredNamespaces,
                                    f = c.optionalNamespaces,
                                    He(l) || (l = Ue(s, "approve()")),
                                    e.next = 8,
                                    a.client.core.crypto.generateKeyPair();
                                case 8:
                                    return h = e.sent,
                                    d = p.publicKey,
                                    e.next = 12,
                                    a.client.core.crypto.generateSharedKey(h, d);
                                case 12:
                                    if (v = e.sent,
                                    e.t0 = u && r,
                                    !e.t0) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 17,
                                    a.client.core.pairing.updateMetadata({
                                        topic: u,
                                        metadata: p.metadata
                                    });
                                case 17:
                                    return e.next = 19,
                                    a.sendResult(r, u, {
                                        relay: {
                                            protocol: null !== i && void 0 !== i ? i : "irn"
                                        },
                                        responderPublicKey: h
                                    });
                                case 19:
                                    return e.next = 21,
                                    a.client.proposal.delete(r, Ve("USER_DISCONNECTED"));
                                case 21:
                                    return e.next = 23,
                                    a.client.core.pairing.activate({
                                        topic: u
                                    });
                                case 23:
                                    return g = Li({
                                        relay: {
                                            protocol: null !== i && void 0 !== i ? i : "irn"
                                        },
                                        namespaces: s,
                                        requiredNamespaces: l,
                                        optionalNamespaces: f,
                                        controller: {
                                            publicKey: h,
                                            metadata: a.client.metadata
                                        },
                                        expiry: Ie(Pi)
                                    }, o && {
                                        sessionProperties: o
                                    }),
                                    e.next = 26,
                                    a.client.core.relayer.subscribe(v);
                                case 26:
                                    return e.next = 28,
                                    a.sendRequest(v, "wc_sessionSettle", g);
                                case 28:
                                    return m = e.sent,
                                    y = xe(),
                                    b = y.done,
                                    w = y.resolve,
                                    x = y.reject,
                                    a.events.once(_e("session_approve", m), (function(e) {
                                        var t = e.error;
                                        t ? x(t) : w(a.client.session.get(v))
                                    }
                                    )),
                                    k = qi(Li({}, g), {
                                        topic: v,
                                        acknowledged: !1,
                                        self: g.controller,
                                        peer: {
                                            publicKey: p.publicKey,
                                            metadata: p.metadata
                                        },
                                        controller: h
                                    }),
                                    e.next = 37,
                                    a.client.session.set(v, k);
                                case 37:
                                    return e.next = 39,
                                    a.setExpiry(v, Ie(Pi));
                                case 39:
                                    return e.abrupt("return", {
                                        topic: v,
                                        acknowledged: b
                                    });
                                case 40:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.reject = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidReject(t);
                                case 3:
                                    if (r = t.id,
                                    i = t.reason,
                                    s = a.client.proposal.get(r),
                                    o = s.pairingTopic,
                                    e.t0 = o,
                                    !e.t0) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 8,
                                    a.sendError(r, o, i);
                                case 8:
                                    return e.next = 10,
                                    a.client.proposal.delete(r, Ve("USER_DISCONNECTED"));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.update = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u, p;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidUpdate(t);
                                case 3:
                                    return r = t.topic,
                                    i = t.namespaces,
                                    e.next = 7,
                                    a.sendRequest(r, "wc_sessionUpdate", {
                                        namespaces: i
                                    });
                                case 7:
                                    return s = e.sent,
                                    o = xe(),
                                    c = o.done,
                                    u = o.resolve,
                                    p = o.reject,
                                    a.events.once(_e("session_update", s), (function(e) {
                                        var t = e.error;
                                        t ? p(t) : u()
                                    }
                                    )),
                                    e.next = 15,
                                    a.client.session.update(r, {
                                        namespaces: i
                                    });
                                case 15:
                                    return e.abrupt("return", {
                                        acknowledged: c
                                    });
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.extend = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidExtend(t);
                                case 3:
                                    return r = t.topic,
                                    e.next = 6,
                                    a.sendRequest(r, "wc_sessionExtend", {});
                                case 6:
                                    return i = e.sent,
                                    s = xe(),
                                    o = s.done,
                                    c = s.resolve,
                                    u = s.reject,
                                    a.events.once(_e("session_extend", i), (function(e) {
                                        var t = e.error;
                                        t ? u(t) : c()
                                    }
                                    )),
                                    e.next = 14,
                                    a.setExpiry(r, Ie(Pi));
                                case 14:
                                    return e.abrupt("return", {
                                        acknowledged: o
                                    });
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.request = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u, p, l, f;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidRequest(t);
                                case 3:
                                    return r = t.chainId,
                                    i = t.request,
                                    s = t.topic,
                                    o = t.expiry,
                                    e.next = 9,
                                    a.sendRequest(s, "wc_sessionRequest", {
                                        request: i,
                                        chainId: r
                                    }, o);
                                case 9:
                                    return c = e.sent,
                                    u = xe(o),
                                    p = u.done,
                                    l = u.resolve,
                                    f = u.reject,
                                    a.events.once(_e("session_request", c), (function(e) {
                                        var t = e.error
                                          , r = e.result;
                                        t ? f(t) : l(r)
                                    }
                                    )),
                                    a.client.events.emit("session_request_sent", {
                                        topic: s,
                                        request: i,
                                        chainId: r,
                                        id: c
                                    }),
                                    e.next = 18,
                                    p();
                                case 18:
                                    return e.abrupt("return", e.sent);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.respond = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidRespond(t);
                                case 3:
                                    if (r = t.topic,
                                    i = t.response,
                                    s = i.id,
                                    !(0,
                                    mt.isJsonRpcResult)(i)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 7,
                                    a.sendResult(s, r, i.result);
                                case 7:
                                    e.next = 13;
                                    break;
                                case 9:
                                    if (e.t0 = (0,
                                    mt.isJsonRpcError)(i),
                                    !e.t0) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 13,
                                    a.sendError(s, r, i.error);
                                case 13:
                                    a.deletePendingSessionRequest(t.response.id, {
                                        message: "fulfilled",
                                        code: 0
                                    });
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.ping = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidPing(t);
                                case 3:
                                    if (r = t.topic,
                                    !a.client.session.keys.includes(r)) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 7,
                                    a.sendRequest(r, "wc_sessionPing", {});
                                case 7:
                                    return i = e.sent,
                                    s = xe(),
                                    o = s.done,
                                    c = s.resolve,
                                    u = s.reject,
                                    a.events.once(_e("session_ping", i), (function(e) {
                                        var t = e.error;
                                        t ? u(t) : c()
                                    }
                                    )),
                                    e.next = 15,
                                    o();
                                case 15:
                                    e.next = 21;
                                    break;
                                case 17:
                                    if (e.t0 = a.client.core.pairing.pairings.keys.includes(r),
                                    !e.t0) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 21,
                                    a.client.core.pairing.ping({
                                        topic: r
                                    });
                                case 21:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.emit = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidEmit(t);
                                case 3:
                                    return r = t.topic,
                                    i = t.event,
                                    s = t.chainId,
                                    e.next = 6,
                                    a.sendRequest(r, "wc_sessionEvent", {
                                        event: i,
                                        chainId: s
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.disconnect = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a.isInitialized(),
                                    e.next = 3,
                                    a.isValidDisconnect(t);
                                case 3:
                                    if (r = t.topic,
                                    !a.client.session.keys.includes(r)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 7,
                                    a.sendRequest(r, "wc_sessionDelete", Ve("USER_DISCONNECTED"));
                                case 7:
                                    return e.next = 9,
                                    a.deleteSession(r);
                                case 9:
                                    e.next = 13;
                                    break;
                                case 11:
                                    return e.next = 13,
                                    a.client.core.pairing.disconnect({
                                        topic: r
                                    });
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.find = function(e) {
                    return a.isInitialized(),
                    a.client.session.getAll().filter((function(t) {
                        return function(e, t) {
                            var r = t.requiredNamespaces
                              , n = Object.keys(e.namespaces)
                              , i = Object.keys(r)
                              , s = !0;
                            return !!ye(i, n) && (n.forEach((function(t) {
                                var n = e.namespaces[t]
                                  , i = n.accounts
                                  , a = n.methods
                                  , o = n.events
                                  , c = Me(i)
                                  , u = r[t];
                                (!ye(M(t, u), c) || !ye(u.methods, a) || !ye(u.events, o)) && (s = !1)
                            }
                            )),
                            s)
                        }(t, e)
                    }
                    ))
                }
                ,
                a.getPendingSessionRequests = function() {
                    return a.isInitialized(),
                    a.client.pendingRequest.getAll()
                }
                ,
                a.deleteSession = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = a.client.session.get(t),
                                    s = i.self,
                                    e.next = 3,
                                    a.client.core.relayer.unsubscribe(t);
                                case 3:
                                    return e.next = 5,
                                    Promise.all([a.client.session.delete(t, Ve("USER_DISCONNECTED")), a.client.core.crypto.deleteKeyPair(s.publicKey), a.client.core.crypto.deleteSymKey(t), r ? Promise.resolve() : a.client.core.expirer.del(t)]);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.deleteProposal = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Promise.all([a.client.proposal.delete(t, Ve("USER_DISCONNECTED")), r ? Promise.resolve() : a.client.core.expirer.del(t)]);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.deletePendingSessionRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s = arguments;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = s.length > 2 && void 0 !== s[2] && s[2],
                                    e.next = 3,
                                    Promise.all([a.client.pendingRequest.delete(t, r), i ? Promise.resolve() : a.client.core.expirer.del(t)]);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.setExpiry = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = a.client.session.keys.includes(t),
                                    !e.t0) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 4,
                                    a.client.session.update(t, {
                                        expiry: r
                                    });
                                case 4:
                                    a.client.core.expirer.set(t, r);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.setProposal = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    a.client.proposal.set(t, r);
                                case 2:
                                    a.client.core.expirer.set(t, r.expiry);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.setPendingSessionRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = _i.wc_sessionRequest.req.ttl,
                                    i = t.id,
                                    s = t.topic,
                                    o = t.params,
                                    e.next = 3,
                                    a.client.pendingRequest.set(i, {
                                        id: i,
                                        topic: s,
                                        params: o
                                    });
                                case 3:
                                    r && a.client.core.expirer.set(i, Ie(r));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.sendRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i, s) {
                        var o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = (0,
                                    mt.formatJsonRpcRequest)(r, i),
                                    e.next = 3,
                                    a.client.core.crypto.encode(t, o);
                                case 3:
                                    return c = e.sent,
                                    u = _i[r].req,
                                    e.abrupt("return", (s && (u.ttl = s),
                                    a.client.core.history.set(t, o),
                                    a.client.core.relayer.publish(t, c, u),
                                    o.id));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r, n, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.sendResult = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = (0,
                                    mt.formatJsonRpcResult)(t, i),
                                    e.next = 3,
                                    a.client.core.crypto.encode(r, s);
                                case 3:
                                    return o = e.sent,
                                    e.next = 6,
                                    a.client.core.history.get(r, t);
                                case 6:
                                    return c = e.sent,
                                    u = _i[c.request.method].res,
                                    a.client.core.relayer.publish(r, o, u),
                                    e.next = 11,
                                    a.client.core.history.resolve(s);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.sendError = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r, i) {
                        var s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = (0,
                                    mt.formatJsonRpcError)(t, i),
                                    e.next = 3,
                                    a.client.core.crypto.encode(r, s);
                                case 3:
                                    return o = e.sent,
                                    e.next = 6,
                                    a.client.core.history.get(r, t);
                                case 6:
                                    return c = e.sent,
                                    u = _i[c.request.method].res,
                                    a.client.core.relayer.publish(r, o, u),
                                    e.next = 11,
                                    a.client.core.history.resolve(s);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.cleanup = (0,
                i.Z)((0,
                n.Z)().mark((function e() {
                    var t, r;
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = [],
                                r = [],
                                a.client.session.getAll().forEach((function(e) {
                                    Pe(e.expiry) && t.push(e.topic)
                                }
                                )),
                                a.client.proposal.getAll().forEach((function(e) {
                                    Pe(e.expiry) && r.push(e.id)
                                }
                                )),
                                e.next = 5,
                                Promise.all([].concat((0,
                                c.Z)(t.map((function(e) {
                                    return a.deleteSession(e)
                                }
                                ))), (0,
                                c.Z)(r.map((function(e) {
                                    return a.deleteProposal(e)
                                }
                                )))));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                a.onRelayEventRequest = function(e) {
                    var t = e.topic
                      , r = e.payload
                      , n = r.method;
                    switch (n) {
                    case "wc_sessionPropose":
                        return a.onSessionProposeRequest(t, r);
                    case "wc_sessionSettle":
                        return a.onSessionSettleRequest(t, r);
                    case "wc_sessionUpdate":
                        return a.onSessionUpdateRequest(t, r);
                    case "wc_sessionExtend":
                        return a.onSessionExtendRequest(t, r);
                    case "wc_sessionPing":
                        return a.onSessionPingRequest(t, r);
                    case "wc_sessionDelete":
                        return a.onSessionDeleteRequest(t, r);
                    case "wc_sessionRequest":
                        return a.onSessionRequest(t, r);
                    case "wc_sessionEvent":
                        return a.onSessionEventRequest(t, r);
                    default:
                        return a.client.logger.info("Unsupported request method ".concat(n))
                    }
                }
                ,
                a.onRelayEventResponse = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = t.topic,
                                    i = t.payload,
                                    e.next = 4,
                                    a.client.core.history.get(r, i.id);
                                case 4:
                                    s = e.sent.request.method,
                                    e.t0 = s,
                                    e.next = "wc_sessionPropose" === e.t0 ? 8 : "wc_sessionSettle" === e.t0 ? 9 : "wc_sessionUpdate" === e.t0 ? 10 : "wc_sessionExtend" === e.t0 ? 11 : "wc_sessionPing" === e.t0 ? 12 : "wc_sessionRequest" === e.t0 ? 13 : 14;
                                    break;
                                case 8:
                                    return e.abrupt("return", a.onSessionProposeResponse(r, i));
                                case 9:
                                    return e.abrupt("return", a.onSessionSettleResponse(r, i));
                                case 10:
                                    return e.abrupt("return", a.onSessionUpdateResponse(r, i));
                                case 11:
                                    return e.abrupt("return", a.onSessionExtendResponse(r, i));
                                case 12:
                                    return e.abrupt("return", a.onSessionPingResponse(r, i));
                                case 13:
                                    return e.abrupt("return", a.onSessionRequestResponse(r, i));
                                case 14:
                                    return e.abrupt("return", a.client.logger.info("Unsupported response method ".concat(s)));
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionProposeRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s, o, c;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.params,
                                    s = r.id,
                                    e.prev = 1,
                                    a.isValidConnect(Li({}, r.params)),
                                    o = Ie(C.FIVE_MINUTES),
                                    c = Li({
                                        id: s,
                                        pairingTopic: t,
                                        expiry: o
                                    }, i),
                                    e.next = 6,
                                    a.setProposal(s, c);
                                case 6:
                                    a.client.events.emit("session_proposal", {
                                        id: s,
                                        params: c
                                    }),
                                    e.next = 14;
                                    break;
                                case 9:
                                    return e.prev = 9,
                                    e.t0 = e.catch(1),
                                    e.next = 13,
                                    a.sendError(s, t, e.t0);
                                case 13:
                                    a.client.logger.error(e.t0);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 9]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionProposeResponse = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s, o, c, u, p, l;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = r.id,
                                    !(0,
                                    mt.isJsonRpcResult)(r)) {
                                        e.next = 22;
                                        break
                                    }
                                    return s = r.result,
                                    a.client.logger.trace({
                                        type: "method",
                                        method: "onSessionProposeResponse",
                                        result: s
                                    }),
                                    o = a.client.proposal.get(i),
                                    a.client.logger.trace({
                                        type: "method",
                                        method: "onSessionProposeResponse",
                                        proposal: o
                                    }),
                                    c = o.proposer.publicKey,
                                    a.client.logger.trace({
                                        type: "method",
                                        method: "onSessionProposeResponse",
                                        selfPublicKey: c
                                    }),
                                    u = s.responderPublicKey,
                                    a.client.logger.trace({
                                        type: "method",
                                        method: "onSessionProposeResponse",
                                        peerPublicKey: u
                                    }),
                                    e.next = 12,
                                    a.client.core.crypto.generateSharedKey(c, u);
                                case 12:
                                    return p = e.sent,
                                    a.client.logger.trace({
                                        type: "method",
                                        method: "onSessionProposeResponse",
                                        sessionTopic: p
                                    }),
                                    e.next = 16,
                                    a.client.core.relayer.subscribe(p);
                                case 16:
                                    return l = e.sent,
                                    a.client.logger.trace({
                                        type: "method",
                                        method: "onSessionProposeResponse",
                                        subscriptionId: l
                                    }),
                                    e.next = 20,
                                    a.client.core.pairing.activate({
                                        topic: t
                                    });
                                case 20:
                                    e.next = 27;
                                    break;
                                case 22:
                                    if (e.t0 = (0,
                                    mt.isJsonRpcError)(r),
                                    !e.t0) {
                                        e.next = 27;
                                        break
                                    }
                                    return e.next = 26,
                                    a.client.proposal.delete(i, Ve("USER_DISCONNECTED"));
                                case 26:
                                    a.events.emit(_e("session_connect"), {
                                        error: r.error
                                    });
                                case 27:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionSettleRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s, o, c, u, p, l, f, h, d, v;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.id,
                                    s = r.params,
                                    e.prev = 1,
                                    a.isValidSessionSettleRequest(s),
                                    o = r.params,
                                    c = o.relay,
                                    u = o.controller,
                                    p = o.expiry,
                                    l = o.namespaces,
                                    f = o.requiredNamespaces,
                                    h = o.optionalNamespaces,
                                    d = o.sessionProperties,
                                    v = Li({
                                        topic: t,
                                        relay: c,
                                        expiry: p,
                                        namespaces: l,
                                        acknowledged: !0,
                                        requiredNamespaces: f,
                                        optionalNamespaces: h,
                                        controller: u.publicKey,
                                        self: {
                                            publicKey: "",
                                            metadata: a.client.metadata
                                        },
                                        peer: {
                                            publicKey: u.publicKey,
                                            metadata: u.metadata
                                        }
                                    }, d && {
                                        sessionProperties: d
                                    }),
                                    e.next = 6,
                                    a.sendResult(r.id, t, !0);
                                case 6:
                                    a.events.emit(_e("session_connect"), {
                                        session: v
                                    }),
                                    e.next = 14;
                                    break;
                                case 9:
                                    return e.prev = 9,
                                    e.t0 = e.catch(1),
                                    e.next = 13,
                                    a.sendError(i, t, e.t0);
                                case 13:
                                    a.client.logger.error(e.t0);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 9]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionSettleResponse = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = r.id,
                                    !(0,
                                    mt.isJsonRpcResult)(r)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 4,
                                    a.client.session.update(t, {
                                        acknowledged: !0
                                    });
                                case 4:
                                    a.events.emit(_e("session_approve", i), {}),
                                    e.next = 12;
                                    break;
                                case 7:
                                    if (e.t0 = (0,
                                    mt.isJsonRpcError)(r),
                                    !e.t0) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 11,
                                    a.client.session.delete(t, Ve("USER_DISCONNECTED"));
                                case 11:
                                    a.events.emit(_e("session_approve", i), {
                                        error: r.error
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionUpdateRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.params,
                                    s = r.id,
                                    e.prev = 1,
                                    a.isValidUpdate(Li({
                                        topic: t
                                    }, i)),
                                    e.next = 5,
                                    a.client.session.update(t, {
                                        namespaces: i.namespaces
                                    });
                                case 5:
                                    return e.next = 7,
                                    a.sendResult(s, t, !0);
                                case 7:
                                    a.client.events.emit("session_update", {
                                        id: s,
                                        topic: t,
                                        params: i
                                    }),
                                    e.next = 15;
                                    break;
                                case 10:
                                    return e.prev = 10,
                                    e.t0 = e.catch(1),
                                    e.next = 14,
                                    a.sendError(s, t, e.t0);
                                case 14:
                                    a.client.logger.error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 10]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionUpdateResponse = function(e, t) {
                    var r = t.id;
                    (0,
                    mt.isJsonRpcResult)(t) ? a.events.emit(_e("session_update", r), {}) : (0,
                    mt.isJsonRpcError)(t) && a.events.emit(_e("session_update", r), {
                        error: t.error
                    })
                }
                ,
                a.onSessionExtendRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.id,
                                    e.prev = 1,
                                    a.isValidExtend({
                                        topic: t
                                    }),
                                    e.next = 5,
                                    a.setExpiry(t, Ie(Pi));
                                case 5:
                                    return e.next = 7,
                                    a.sendResult(i, t, !0);
                                case 7:
                                    a.client.events.emit("session_extend", {
                                        id: i,
                                        topic: t
                                    }),
                                    e.next = 15;
                                    break;
                                case 10:
                                    return e.prev = 10,
                                    e.t0 = e.catch(1),
                                    e.next = 14,
                                    a.sendError(i, t, e.t0);
                                case 14:
                                    a.client.logger.error(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 10]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionExtendResponse = function(e, t) {
                    var r = t.id;
                    (0,
                    mt.isJsonRpcResult)(t) ? a.events.emit(_e("session_extend", r), {}) : (0,
                    mt.isJsonRpcError)(t) && a.events.emit(_e("session_extend", r), {
                        error: t.error
                    })
                }
                ,
                a.onSessionPingRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.id,
                                    e.prev = 1,
                                    a.isValidPing({
                                        topic: t
                                    }),
                                    e.next = 5,
                                    a.sendResult(i, t, !0);
                                case 5:
                                    a.client.events.emit("session_ping", {
                                        id: i,
                                        topic: t
                                    }),
                                    e.next = 13;
                                    break;
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(1),
                                    e.next = 12,
                                    a.sendError(i, t, e.t0);
                                case 12:
                                    a.client.logger.error(e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 8]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionPingResponse = function(e, t) {
                    var r = t.id;
                    setTimeout((function() {
                        (0,
                        mt.isJsonRpcResult)(t) ? a.events.emit(_e("session_ping", r), {}) : (0,
                        mt.isJsonRpcError)(t) && a.events.emit(_e("session_ping", r), {
                            error: t.error
                        })
                    }
                    ), 500)
                }
                ,
                a.onSessionDeleteRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = r.id,
                                    e.prev = 1,
                                    a.isValidDisconnect({
                                        topic: t,
                                        reason: r.params
                                    }),
                                    a.client.core.relayer.once(vn, (0,
                                    i.Z)((0,
                                    n.Z)().mark((function e() {
                                        return (0,
                                        n.Z)().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    a.deleteSession(t);
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )))),
                                    e.next = 6,
                                    a.sendResult(s, t, !0);
                                case 6:
                                    a.client.events.emit("session_delete", {
                                        id: s,
                                        topic: t
                                    }),
                                    e.next = 14;
                                    break;
                                case 9:
                                    return e.prev = 9,
                                    e.t0 = e.catch(1),
                                    e.next = 13,
                                    a.sendError(s, t, e.t0);
                                case 13:
                                    a.client.logger.error(e.t0);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 9]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = r.id,
                                    s = r.params,
                                    e.prev = 1,
                                    a.isValidRequest(Li({
                                        topic: t
                                    }, s)),
                                    e.next = 5,
                                    a.setPendingSessionRequest({
                                        id: i,
                                        topic: t,
                                        params: s
                                    });
                                case 5:
                                    a.client.events.emit("session_request", {
                                        id: i,
                                        topic: t,
                                        params: s
                                    }),
                                    e.next = 13;
                                    break;
                                case 8:
                                    return e.prev = 8,
                                    e.t0 = e.catch(1),
                                    e.next = 12,
                                    a.sendError(i, t, e.t0);
                                case 12:
                                    a.client.logger.error(e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 8]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.onSessionRequestResponse = function(e, t) {
                    var r = t.id;
                    (0,
                    mt.isJsonRpcResult)(t) ? a.events.emit(_e("session_request", r), {
                        result: t.result
                    }) : (0,
                    mt.isJsonRpcError)(t) && a.events.emit(_e("session_request", r), {
                        error: t.error
                    })
                }
                ,
                a.onSessionEventRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    i = r.id,
                                    s = r.params,
                                    e.prev = 1,
                                    a.isValidEmit(Li({
                                        topic: t
                                    }, s)),
                                    a.client.events.emit("session_event", {
                                        id: i,
                                        topic: t,
                                        params: s
                                    }),
                                    e.next = 10;
                                    break;
                                case 5:
                                    return e.prev = 5,
                                    e.t0 = e.catch(1),
                                    e.next = 9,
                                    a.sendError(i, t, e.t0);
                                case 9:
                                    a.client.logger.error(e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 5]])
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidConnect = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u, p, l, f;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "connect() params: ".concat(JSON.stringify(t))),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    if (s = t.pairingTopic,
                                    o = t.requiredNamespaces,
                                    c = t.optionalNamespaces,
                                    u = t.sessionProperties,
                                    p = t.relays,
                                    e.t0 = Fe(s),
                                    e.t0) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8,
                                    a.isValidPairingTopic(s);
                                case 8:
                                    if (it(p, !0)) {
                                        e.next = 11;
                                        break
                                    }
                                    throw l = Be("MISSING_OR_INVALID", "connect() relays: ".concat(p)),
                                    f = l.message,
                                    new Error(f);
                                case 11:
                                    !Fe(o) && 0 !== He(o) && a.validateNamespaces(o, "requiredNamespaces"),
                                    !Fe(c) && 0 !== He(c) && a.validateNamespaces(c, "optionalNamespaces"),
                                    Fe(u) || a.validateSessionProps(u, "sessionProperties");
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.validateNamespaces = function(e, t) {
                    var r = function(e, t, r) {
                        var n = null;
                        if (e && He(e)) {
                            var i = tt(e, t);
                            i && (n = i);
                            var s = $e(e, t);
                            s && (n = s)
                        } else
                            n = Be("MISSING_OR_INVALID", "".concat(t, ", ").concat(r, " should be an object with data"));
                        return n
                    }(e, "connect()", t);
                    if (r)
                        throw new Error(r.message)
                }
                ,
                a.isValidApprove = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u, p, l, f;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error(Be("MISSING_OR_INVALID", "approve() params: ".concat(t)).message);
                                case 2:
                                    return r = t.id,
                                    i = t.namespaces,
                                    s = t.relayProtocol,
                                    o = t.sessionProperties,
                                    e.next = 5,
                                    a.isValidProposalId(r);
                                case 5:
                                    if (c = a.client.proposal.get(r),
                                    !(u = rt(i, "approve()"))) {
                                        e.next = 8;
                                        break
                                    }
                                    throw new Error(u.message);
                                case 8:
                                    if (!(p = dt(c.requiredNamespaces, i, "approve()"))) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error(p.message);
                                case 11:
                                    if (Ge(s, !0)) {
                                        e.next = 14;
                                        break
                                    }
                                    throw l = Be("MISSING_OR_INVALID", "approve() relayProtocol: ".concat(s)),
                                    f = l.message,
                                    new Error(f);
                                case 14:
                                    Fe(o) || a.validateSessionProps(o, "sessionProperties");
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidReject = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "reject() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.id,
                                    o = t.reason,
                                    e.next = 6,
                                    a.isValidProposalId(s);
                                case 6:
                                    if (ot(o)) {
                                        e.next = 9;
                                        break
                                    }
                                    throw c = Be("MISSING_OR_INVALID", "reject() reason: ".concat(JSON.stringify(o))),
                                    u = c.message,
                                    new Error(u);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidSessionSettleRequest = function(e) {
                    if (!at(e)) {
                        var t = Be("MISSING_OR_INVALID", "onSessionSettleRequest() params: ".concat(e)).message;
                        throw new Error(t)
                    }
                    var r = e.relay
                      , n = e.controller
                      , i = e.namespaces
                      , s = e.expiry;
                    if (!nt(r)) {
                        var a = Be("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string").message;
                        throw new Error(a)
                    }
                    var o = function(e, t) {
                        var r = null;
                        return Ge(null === e || void 0 === e ? void 0 : e.publicKey, !1) || (r = Be("MISSING_OR_INVALID", "".concat(t, " controller public key should be a string"))),
                        r
                    }(n, "onSessionSettleRequest()");
                    if (o)
                        throw new Error(o.message);
                    var c = rt(i, "onSessionSettleRequest()");
                    if (c)
                        throw new Error(c.message);
                    if (Pe(s)) {
                        var u = Be("EXPIRED", "onSessionSettleRequest()").message;
                        throw new Error(u)
                    }
                }
                ,
                a.isValidUpdate = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u, p;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "update() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    o = t.namespaces,
                                    e.next = 6,
                                    a.isValidSessionTopic(s);
                                case 6:
                                    if (c = a.client.session.get(s),
                                    !(u = rt(o, "update()"))) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error(u.message);
                                case 9:
                                    if (!(p = dt(c.requiredNamespaces, o, "update()"))) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error(p.message);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidExtend = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "extend() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    e.next = 6,
                                    a.isValidSessionTopic(s);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidRequest = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u, p, l, f, h, d, v, g, m, y, b;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "request() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    o = t.request,
                                    c = t.chainId,
                                    u = t.expiry,
                                    e.next = 6,
                                    a.isValidSessionTopic(s);
                                case 6:
                                    if (p = a.client.session.get(s),
                                    lt(l = p.namespaces, c)) {
                                        e.next = 10;
                                        break
                                    }
                                    throw f = Be("MISSING_OR_INVALID", "request() chainId: ".concat(c)),
                                    h = f.message,
                                    new Error(h);
                                case 10:
                                    if (ct(o)) {
                                        e.next = 13;
                                        break
                                    }
                                    throw d = Be("MISSING_OR_INVALID", "request() ".concat(JSON.stringify(o))),
                                    v = d.message,
                                    new Error(v);
                                case 13:
                                    if (ft(l, c, o.method)) {
                                        e.next = 16;
                                        break
                                    }
                                    throw g = Be("MISSING_OR_INVALID", "request() method: ".concat(o.method)),
                                    m = g.message,
                                    new Error(m);
                                case 16:
                                    if (!u || gt(u, Si)) {
                                        e.next = 19;
                                        break
                                    }
                                    throw y = Be("MISSING_OR_INVALID", "request() expiry: ".concat(u, ". Expiry must be a number (in seconds) between ").concat(Si.min, " and ").concat(Si.max)),
                                    b = y.message,
                                    new Error(b);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidRespond = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "respond() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    o = t.response,
                                    e.next = 6,
                                    a.isValidSessionTopic(s);
                                case 6:
                                    if (ut(o)) {
                                        e.next = 9;
                                        break
                                    }
                                    throw c = Be("MISSING_OR_INVALID", "respond() response: ".concat(JSON.stringify(o))),
                                    u = c.message,
                                    new Error(u);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidPing = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "ping() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    e.next = 6,
                                    a.isValidSessionOrPairingTopic(s);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidEmit = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, o, c, u, p, l, f, h, d, v, g;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "emit() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    o = t.event,
                                    c = t.chainId,
                                    e.next = 6,
                                    a.isValidSessionTopic(s);
                                case 6:
                                    if (u = a.client.session.get(s),
                                    lt(p = u.namespaces, c)) {
                                        e.next = 10;
                                        break
                                    }
                                    throw l = Be("MISSING_OR_INVALID", "emit() chainId: ".concat(c)),
                                    f = l.message,
                                    new Error(f);
                                case 10:
                                    if (pt(o)) {
                                        e.next = 13;
                                        break
                                    }
                                    throw h = Be("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(o))),
                                    d = h.message,
                                    new Error(d);
                                case 13:
                                    if (ht(p, c, o.name)) {
                                        e.next = 16;
                                        break
                                    }
                                    throw v = Be("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(o))),
                                    g = v.message,
                                    new Error(g);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.isValidDisconnect = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (at(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "disconnect() params: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    return s = t.topic,
                                    e.next = 6,
                                    a.isValidSessionOrPairingTopic(s);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.validateSessionProps = function(e, t) {
                    Object.values(e).forEach((function(e) {
                        if (!Ge(e, !1)) {
                            var r = Be("MISSING_OR_INVALID", "".concat(t, " must be in Record<string, string> format. Received: ").concat(JSON.stringify(e))).message;
                            throw new Error(r)
                        }
                    }
                    ))
                }
                ,
                a
            }
            return (0,
            a.Z)(r, [{
                key: "isInitialized",
                value: function() {
                    if (!this.initialized) {
                        var e = Be("NOT_INITIALIZED", this.name).message;
                        throw new Error(e)
                    }
                }
            }, {
                key: "registerRelayerEvents",
                value: function() {
                    var e = this;
                    this.client.core.relayer.on(un, function() {
                        var t = (0,
                        i.Z)((0,
                        n.Z)().mark((function t(r) {
                            var i, s, a;
                            return (0,
                            n.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (i = r.topic,
                                        s = r.message,
                                        !e.ignoredPayloadTypes.includes(e.client.core.crypto.getPayloadType(s))) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        return t.next = 5,
                                        e.client.core.crypto.decode(i, s);
                                    case 5:
                                        if (a = t.sent,
                                        !(0,
                                        mt.isJsonRpcRequest)(a)) {
                                            t.next = 10;
                                            break
                                        }
                                        e.client.core.history.set(i, a),
                                        e.onRelayEventRequest({
                                            topic: i,
                                            payload: a
                                        }),
                                        t.next = 15;
                                        break;
                                    case 10:
                                        if (t.t0 = (0,
                                        mt.isJsonRpcResponse)(a),
                                        !t.t0) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.next = 14,
                                        e.client.core.history.resolve(a);
                                    case 14:
                                        e.onRelayEventResponse({
                                            topic: i,
                                            payload: a
                                        });
                                    case 15:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "registerExpirerEvents",
                value: function() {
                    var e = this;
                    this.client.core.expirer.on(Tn, function() {
                        var t = (0,
                        i.Z)((0,
                        n.Z)().mark((function t(r) {
                            var i, s, a;
                            return (0,
                            n.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (i = Ee(r.target),
                                        s = i.topic,
                                        !(a = i.id) || !e.client.pendingRequest.keys.includes(a)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 4,
                                        e.deletePendingSessionRequest(a, Be("EXPIRED"), !0);
                                    case 4:
                                        return t.abrupt("return", t.sent);
                                    case 5:
                                        if (!s) {
                                            t.next = 13;
                                            break
                                        }
                                        if (t.t0 = e.client.session.keys.includes(s),
                                        !t.t0) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.next = 10,
                                        e.deleteSession(s, !0);
                                    case 10:
                                        e.client.events.emit("session_expire", {
                                            topic: s
                                        });
                                    case 11:
                                        t.next = 18;
                                        break;
                                    case 13:
                                        if (t.t1 = a,
                                        !t.t1) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.next = 17,
                                        e.deleteProposal(a, !0);
                                    case 17:
                                        e.client.events.emit("proposal_expire", {
                                            id: a
                                        });
                                    case 18:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "isValidPairingTopic",
                value: function(e) {
                    if (!Ge(e, !1)) {
                        var t = Be("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(e)).message;
                        throw new Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        var r = Be("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(e)).message;
                        throw new Error(r)
                    }
                    if (Pe(this.client.core.pairing.pairings.get(e).expiry)) {
                        var n = Be("EXPIRED", "pairing topic: ".concat(e)).message;
                        throw new Error(n)
                    }
                }
            }, {
                key: "isValidSessionTopic",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, a, o, c;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (Ge(t, !1)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "session topic should be a string: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    if (this.client.session.keys.includes(t)) {
                                        e.next = 6;
                                        break
                                    }
                                    throw s = Be("NO_MATCHING_KEY", "session topic doesn't exist: ".concat(t)),
                                    a = s.message,
                                    new Error(a);
                                case 6:
                                    if (!Pe(this.client.session.get(t).expiry)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 9,
                                    this.deleteSession(t);
                                case 9:
                                    throw o = Be("EXPIRED", "session topic: ".concat(t)),
                                    c = o.message,
                                    new Error(c);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isValidSessionOrPairingTopic",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, a;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.client.session.keys.includes(t)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3,
                                    this.isValidSessionTopic(t);
                                case 3:
                                    e.next = 16;
                                    break;
                                case 5:
                                    if (!this.client.core.pairing.pairings.keys.includes(t)) {
                                        e.next = 9;
                                        break
                                    }
                                    this.isValidPairingTopic(t),
                                    e.next = 16;
                                    break;
                                case 9:
                                    if (!Ge(t, !1)) {
                                        e.next = 14;
                                        break
                                    }
                                    throw r = Be("NO_MATCHING_KEY", "session or pairing topic doesn't exist: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 14:
                                    throw s = Be("MISSING_OR_INVALID", "session or pairing topic should be a string: ".concat(t)),
                                    a = s.message,
                                    new Error(a);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isValidProposalId",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, a, o, c;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (st(t)) {
                                        e.next = 3;
                                        break
                                    }
                                    throw r = Be("MISSING_OR_INVALID", "proposal id should be a number: ".concat(t)),
                                    i = r.message,
                                    new Error(i);
                                case 3:
                                    if (this.client.proposal.keys.includes(t)) {
                                        e.next = 6;
                                        break
                                    }
                                    throw s = Be("NO_MATCHING_KEY", "proposal id doesn't exist: ".concat(t)),
                                    a = s.message,
                                    new Error(a);
                                case 6:
                                    if (!Pe(this.client.proposal.get(t).expiry)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 9,
                                    this.deleteProposal(t);
                                case 9:
                                    throw o = Be("EXPIRED", "proposal id: ".concat(t)),
                                    c = o.message,
                                    new Error(c);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }(k.W3)
          , Ui = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, n) {
                var i;
                return (0,
                s.Z)(this, r),
                (i = t.call(this, e, n, "proposal", ki)).core = e,
                i.logger = n,
                i
            }
            return (0,
            a.Z)(r)
        }(ui)
          , ji = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, n) {
                var i;
                return (0,
                s.Z)(this, r),
                (i = t.call(this, e, n, "session", ki)).core = e,
                i.logger = n,
                i
            }
            return (0,
            a.Z)(r)
        }(ui)
          , zi = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e, n) {
                var i;
                return (0,
                s.Z)(this, r),
                (i = t.call(this, e, n, "request", ki, (function(e) {
                    return e.id
                }
                ))).core = e,
                i.logger = n,
                i
            }
            return (0,
            a.Z)(r)
        }(ui)
          , Bi = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e) {
                var a;
                (0,
                s.Z)(this, r),
                (a = t.call(this, e)).protocol = "wc",
                a.version = 2,
                a.name = Zi,
                a.events = new m.EventEmitter,
                a.on = function(e, t) {
                    return a.events.on(e, t)
                }
                ,
                a.once = function(e, t) {
                    return a.events.once(e, t)
                }
                ,
                a.off = function(e, t) {
                    return a.events.off(e, t)
                }
                ,
                a.removeListener = function(e, t) {
                    return a.events.removeListener(e, t)
                }
                ,
                a.removeAllListeners = function(e) {
                    return a.events.removeAllListeners(e)
                }
                ,
                a.connect = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.connect(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.pair = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.pair(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.approve = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.approve(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.reject = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.reject(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.update = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.update(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.extend = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.extend(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.request = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.request(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.respond = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.respond(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.ping = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.ping(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.emit = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.emit(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.disconnect = function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    a.engine.disconnect(t);
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                    throw e.prev = 6,
                                    e.t0 = e.catch(0),
                                    a.logger.error(e.t0.message),
                                    e.t0;
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 6]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                a.find = function(e) {
                    try {
                        return a.engine.find(e)
                    } catch (t) {
                        throw a.logger.error(t.message),
                        t
                    }
                }
                ,
                a.getPendingSessionRequests = function() {
                    try {
                        return a.engine.getPendingSessionRequests()
                    } catch (e) {
                        throw a.logger.error(e.message),
                        e
                    }
                }
                ,
                a.name = (null === e || void 0 === e ? void 0 : e.name) || Zi,
                a.metadata = (null === e || void 0 === e ? void 0 : e.metadata) || (0,
                A.D)() || {
                    name: "",
                    description: "",
                    url: "",
                    icons: [""]
                };
                var o = typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof (null === e || void 0 === e ? void 0 : e.logger) ? e.logger : l()((0,
                x.getDefaultLoggerOptions)({
                    level: (null === e || void 0 === e ? void 0 : e.logger) || Ei
                }));
                return a.core = (null === e || void 0 === e ? void 0 : e.core) || new wi(e),
                a.logger = (0,
                x.generateChildLogger)(o, a.name),
                a.session = new ji(a.core,a.logger),
                a.proposal = new Ui(a.core,a.logger),
                a.pendingRequest = new zi(a.core,a.logger),
                a.engine = new Mi((0,
                f.Z)(a)),
                a
            }
            return (0,
            a.Z)(r, [{
                key: "context",
                get: function() {
                    return (0,
                    x.getLoggerContext)(this.logger)
                }
            }, {
                key: "pairing",
                get: function() {
                    return this.core.pairing.pairings
                }
            }, {
                key: "initialize",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.logger.trace("Initialized"),
                                    e.prev = 1,
                                    e.next = 4,
                                    this.core.start();
                                case 4:
                                    return e.next = 6,
                                    this.session.init();
                                case 6:
                                    return e.next = 8,
                                    this.proposal.init();
                                case 8:
                                    return e.next = 10,
                                    this.pendingRequest.init();
                                case 10:
                                    return e.next = 12,
                                    this.engine.init();
                                case 12:
                                    this.logger.info("SignClient Initialization Success"),
                                    e.next = 18;
                                    break;
                                case 15:
                                    throw e.prev = 15,
                                    e.t0 = e.catch(1),
                                    this.logger.info("SignClient Initialization Failure"),
                                    this.logger.error(e.t0.message),
                                    e.t0;
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 15]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "init",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = new r(t),
                                    e.next = 3,
                                    i.initialize();
                                case 3:
                                    return e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }(k.lV)
          , Vi = function(e) {
            (0,
            h.Z)(r, e);
            var t = (0,
            d.Z)(r);
            function r(e) {
                var n;
                return (0,
                s.Z)(this, r),
                (n = t.call(this, e)).events = new m.EventEmitter,
                n.hasRegisteredEventListeners = !1,
                n.connection = n.setConnection(e),
                n.connection.connected && n.registerEventListeners(),
                n
            }
            return (0,
            a.Z)(r, [{
                key: "connect",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r = arguments;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : this.connection,
                                    e.next = 3,
                                    this.open(t);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "disconnect",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.close();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "on",
                value: function(e, t) {
                    this.events.on(e, t)
                }
            }, {
                key: "once",
                value: function(e, t) {
                    this.events.once(e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.events.off(e, t)
                }
            }, {
                key: "removeListener",
                value: function(e, t) {
                    this.events.removeListener(e, t)
                }
            }, {
                key: "request",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.requestStrict((0,
                                    mt.formatJsonRpcRequest)(t.method, t.params || [], (0,
                                    mt.getBigIntRpcId)().toString()), r));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "requestStrict",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var s = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = (0,
                                        i.Z)((0,
                                        n.Z)().mark((function e(i, a) {
                                            return (0,
                                            n.Z)().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        if (s.connection.connected) {
                                                            e.next = 9;
                                                            break
                                                        }
                                                        return e.prev = 1,
                                                        e.next = 4,
                                                        s.open();
                                                    case 4:
                                                        e.next = 9;
                                                        break;
                                                    case 6:
                                                        e.prev = 6,
                                                        e.t0 = e.catch(1),
                                                        a(e.t0);
                                                    case 9:
                                                        return s.events.on("".concat(t.id), (function(e) {
                                                            (0,
                                                            mt.isJsonRpcError)(e) ? a(e.error) : i(e.result)
                                                        }
                                                        )),
                                                        e.prev = 10,
                                                        e.next = 13,
                                                        s.connection.send(t, r);
                                                    case 13:
                                                        e.next = 18;
                                                        break;
                                                    case 15:
                                                        e.prev = 15,
                                                        e.t1 = e.catch(10),
                                                        a(e.t1);
                                                    case 18:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e, null, [[1, 6], [10, 15]])
                                        }
                                        )));
                                        return function(t, r) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setConnection",
                value: function() {
                    return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.connection
                }
            }, {
                key: "onPayload",
                value: function(e) {
                    this.events.emit("payload", e),
                    (0,
                    mt.isJsonRpcResponse)(e) ? this.events.emit("".concat(e.id), e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
            }, {
                key: "onClose",
                value: function(e) {
                    e && 3e3 === e.code && this.events.emit("error", new Error("WebSocket connection closed abnormally with code: ".concat(e.code, " ").concat(e.reason ? "(".concat(e.reason, ")") : ""))),
                    this.events.emit("disconnect")
                }
            }, {
                key: "open",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r = arguments;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = r.length > 0 && void 0 !== r[0] ? r[0] : this.connection,
                                    this.connection !== t || !this.connection.connected) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (this.connection.connected && this.close(),
                                    "string" !== typeof t) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 7,
                                    this.connection.open(t);
                                case 7:
                                    t = this.connection;
                                case 8:
                                    return this.connection = this.setConnection(t),
                                    e.next = 11,
                                    this.connection.open();
                                case 11:
                                    this.registerEventListeners(),
                                    this.events.emit("connect");
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "close",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.connection.close();
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.hasRegisteredEventListeners || (this.connection.on("payload", (function(t) {
                        return e.onPayload(t)
                    }
                    )),
                    this.connection.on("close", (function(t) {
                        return e.onClose(t)
                    }
                    )),
                    this.connection.on("error", (function(t) {
                        return e.events.emit("error", t)
                    }
                    )),
                    this.connection.on("register_error", (function(t) {
                        return e.onClose()
                    }
                    )),
                    this.hasRegisteredEventListeners = !0)
                }
            }]),
            r
        }(mt.IJsonRpcProvider)
          , Ki = r(17507)
          , Hi = "error"
          , Fi = "".concat("wc", "@", 2, ":").concat("universal_provider", ":")
          , Gi = "default_chain_changed"
          , Ji = Object.defineProperty
          , Wi = Object.getOwnPropertySymbols
          , Yi = Object.prototype.hasOwnProperty
          , Qi = Object.prototype.propertyIsEnumerable
          , Xi = function(e, t, r) {
            return t in e ? Ji(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , $i = function(e, t) {
            for (var r in t || (t = {}))
                Yi.call(t, r) && Xi(e, r, t[r]);
            if (Wi) {
                var n, i = (0,
                u.Z)(Wi(t));
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        r = n.value;
                        Qi.call(t, r) && Xi(e, r, t[r])
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
            }
            return e
        };
        function es(e, t, r) {
            var n, i = ts(e);
            return t.rpcMap && (n = t.rpcMap[i]),
            n || (n = "".concat("https://rpc.walletconnect.com/v1", "?chainId=eip155:").concat(i, "&projectId=").concat(r)),
            n
        }
        function ts(e) {
            return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e)
        }
        function rs(e) {
            var t, r, n, i, s = {};
            if (!He(e))
                return s;
            for (var a = 0, c = Object.entries(e); a < c.length; a++) {
                var u = (0,
                o.Z)(c[a], 2)
                  , p = u[0]
                  , l = u[1]
                  , f = ns(p) ? [p] : l.chains
                  , h = l.methods || []
                  , d = l.events || []
                  , v = is(p);
                s[v] = {
                    chains: ss(f, null == (t = s[v]) ? void 0 : t.chains),
                    methods: ss(h, null == (r = s[v]) ? void 0 : r.methods),
                    events: ss(d, null == (n = s[v]) ? void 0 : n.events),
                    rpcMap: $i($i({}, null == (i = s[v]) ? void 0 : i.rpcMap), l.rpcMap)
                }
            }
            return s
        }
        function ns(e) {
            return e.includes(":")
        }
        function is(e) {
            return ns(e) ? e.split(":")[0] : e
        }
        function ss() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return (0,
            c.Z)(new Set([].concat((0,
            c.Z)(e), (0,
            c.Z)(t))))
        }
        var as = function(e, t) {
            e.on("session_request_sent", (function r(n) {
                n.request !== t.request || n.topic !== t.topic || (e.events.removeListener("session_request_sent", r),
                function(e) {
                    if (typeof window < "u")
                        try {
                            var t = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
                            if (t) {
                                var r = JSON.parse(t)
                                  , n = null === r || void 0 === r ? void 0 : r.href;
                                if ("string" == typeof n) {
                                    n.endsWith("/") && n.slice(0, -1);
                                    var i = "".concat(n, "/wc?requestId=").concat(e.id, "&sessionTopic=").concat(e.topic);
                                    window.open(i, "_self", "noreferrer noopener")
                                }
                            }
                        } catch (t) {
                            console.error(t)
                        }
                }(t))
            }
            ))
        };
        var os = function() {
            function e(t) {
                (0,
                s.Z)(this, e),
                this.name = "eip155",
                this.namespace = t.namespace,
                this.client = t.client,
                this.events = t.events,
                this.httpProviders = this.createHttpProviders(),
                this.chainId = parseInt(this.getDefaultChain())
            }
            return (0,
            a.Z)(e, [{
                key: "request",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    e.t0 = t.request.method,
                                    e.next = "eth_requestAccounts" === e.t0 ? 3 : "eth_accounts" === e.t0 ? 4 : "wallet_switchEthereumChain" === e.t0 ? 5 : "eth_chainId" === e.t0 ? 6 : 7;
                                    break;
                                case 3:
                                case 4:
                                    return e.abrupt("return", this.getAccounts());
                                case 5:
                                    return e.abrupt("return", (this.handleSwitchChain(t.request.params ? null == (r = t.request.params[0]) ? void 0 : r.chainId : "0x0"),
                                    null));
                                case 6:
                                    return e.abrupt("return", parseInt(this.getDefaultChain()));
                                case 7:
                                    if (!this.namespace.methods.includes(t.request.method)) {
                                        e.next = 14;
                                        break
                                    }
                                    return as(this.client, t),
                                    e.next = 11,
                                    this.client.request(t);
                                case 11:
                                    e.t1 = e.sent,
                                    e.next = 15;
                                    break;
                                case 14:
                                    e.t1 = this.getHttpProvider().request(t.request);
                                case 15:
                                    return e.abrupt("return", e.t1);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "updateNamespace",
                value: function(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
            }, {
                key: "setDefaultChain",
                value: function(e, t) {
                    var r = ts(e);
                    if (!this.httpProviders[r]) {
                        var n = t || es("".concat(this.name, ":").concat(r), this.namespace, this.client.core.projectId);
                        if (!n)
                            throw new Error("No RPC url provided for chainId: ".concat(r));
                        this.setHttpProvider(r, n)
                    }
                    this.chainId = r,
                    this.events.emit(Gi, "".concat(this.name, ":").concat(r))
                }
            }, {
                key: "requestAccounts",
                value: function() {
                    return this.getAccounts()
                }
            }, {
                key: "getDefaultChain",
                value: function() {
                    if (this.chainId)
                        return this.chainId.toString();
                    if (this.namespace.defaultChain)
                        return this.namespace.defaultChain;
                    var e = this.namespace.chains[0];
                    if (!e)
                        throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
            }, {
                key: "createHttpProvider",
                value: function(e, t) {
                    var r = t || es("".concat(this.name, ":").concat(e), this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new Vi(new Ki.k(r))
                }
            }, {
                key: "setHttpProvider",
                value: function(e, t) {
                    var r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
            }, {
                key: "createHttpProviders",
                value: function() {
                    var e = this
                      , t = {};
                    return this.namespace.chains.forEach((function(r) {
                        var n, i = ts(r);
                        t[i] = e.createHttpProvider(i, null == (n = e.namespace.rpcMap) ? void 0 : n[r])
                    }
                    )),
                    t
                }
            }, {
                key: "getAccounts",
                value: function() {
                    var e = this
                      , t = this.namespace.accounts;
                    return t ? (0,
                    c.Z)(new Set(t.filter((function(t) {
                        return t.split(":")[1] === e.chainId.toString()
                    }
                    )).map((function(e) {
                        return e.split(":")[2]
                    }
                    )))) : []
                }
            }, {
                key: "getHttpProvider",
                value: function() {
                    var e = this.chainId
                      , t = this.httpProviders[e];
                    if (typeof t > "u")
                        throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
            }, {
                key: "handleSwitchChain",
                value: function(e) {
                    var t = parseInt(e, 16);
                    (function(e, t) {
                        if (!t.includes(e))
                            throw new Error("Chain '".concat(e, "' not approved. Please use one of the following: ").concat(t.toString()))
                    }
                    )("".concat(this.name, ":").concat(t), this.namespace.chains),
                    this.setDefaultChain("".concat(t))
                }
            }]),
            e
        }()
          , cs = function() {
            function e(t) {
                (0,
                s.Z)(this, e),
                this.name = "solana",
                this.namespace = t.namespace,
                this.events = t.events,
                this.client = t.client,
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            return (0,
            a.Z)(e, [{
                key: "updateNamespace",
                value: function(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
            }, {
                key: "requestAccounts",
                value: function() {
                    return this.getAccounts()
                }
            }, {
                key: "request",
                value: function(e) {
                    return this.namespace.methods.includes(e.request.method) ? (as(this.client, e),
                    this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
            }, {
                key: "setDefaultChain",
                value: function(e, t) {
                    if (!this.httpProviders[e]) {
                        var r = t || es("".concat(this.name, ":").concat(e), this.namespace, this.client.core.projectId);
                        if (!r)
                            throw new Error("No RPC url provided for chainId: ".concat(e));
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e,
                    this.events.emit(Gi, "".concat(this.name, ":").concat(this.chainId))
                }
            }, {
                key: "getDefaultChain",
                value: function() {
                    if (this.chainId)
                        return this.chainId;
                    if (this.namespace.defaultChain)
                        return this.namespace.defaultChain;
                    var e = this.namespace.chains[0];
                    if (!e)
                        throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
            }, {
                key: "getAccounts",
                value: function() {
                    var e = this
                      , t = this.namespace.accounts;
                    return t ? (0,
                    c.Z)(new Set(t.filter((function(t) {
                        return t.split(":")[1] === e.chainId.toString()
                    }
                    )).map((function(e) {
                        return e.split(":")[2]
                    }
                    )))) : []
                }
            }, {
                key: "createHttpProviders",
                value: function() {
                    var e = this
                      , t = {};
                    return this.namespace.chains.forEach((function(r) {
                        var n;
                        t[r] = e.createHttpProvider(r, null == (n = e.namespace.rpcMap) ? void 0 : n[r])
                    }
                    )),
                    t
                }
            }, {
                key: "getHttpProvider",
                value: function() {
                    var e = "".concat(this.name, ":").concat(this.chainId)
                      , t = this.httpProviders[e];
                    if (typeof t > "u")
                        throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
            }, {
                key: "setHttpProvider",
                value: function(e, t) {
                    var r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
            }, {
                key: "createHttpProvider",
                value: function(e, t) {
                    var r = t || es(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new Vi(new Ki.Z(r))
                }
            }]),
            e
        }()
          , us = function() {
            function e(t) {
                (0,
                s.Z)(this, e),
                this.name = "cosmos",
                this.namespace = t.namespace,
                this.events = t.events,
                this.client = t.client,
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            return (0,
            a.Z)(e, [{
                key: "updateNamespace",
                value: function(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
            }, {
                key: "requestAccounts",
                value: function() {
                    return this.getAccounts()
                }
            }, {
                key: "getDefaultChain",
                value: function() {
                    if (this.chainId)
                        return this.chainId;
                    if (this.namespace.defaultChain)
                        return this.namespace.defaultChain;
                    var e = this.namespace.chains[0];
                    if (!e)
                        throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
            }, {
                key: "request",
                value: function(e) {
                    return this.namespace.methods.includes(e.request.method) ? (as(this.client, e),
                    this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
            }, {
                key: "setDefaultChain",
                value: function(e, t) {
                    if (this.chainId = e,
                    !this.httpProviders[e]) {
                        var r = t || es("".concat(this.name, ":").concat(e), this.namespace, this.client.core.projectId);
                        if (!r)
                            throw new Error("No RPC url provided for chainId: ".concat(e));
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(Gi, "".concat(this.name, ":").concat(this.chainId))
                }
            }, {
                key: "getAccounts",
                value: function() {
                    var e = this
                      , t = this.namespace.accounts;
                    return t ? (0,
                    c.Z)(new Set(t.filter((function(t) {
                        return t.split(":")[1] === e.chainId.toString()
                    }
                    )).map((function(e) {
                        return e.split(":")[2]
                    }
                    )))) : []
                }
            }, {
                key: "createHttpProviders",
                value: function() {
                    var e = this
                      , t = {};
                    return this.namespace.chains.forEach((function(r) {
                        var n;
                        t[r] = e.createHttpProvider(r, null == (n = e.namespace.rpcMap) ? void 0 : n[r])
                    }
                    )),
                    t
                }
            }, {
                key: "getHttpProvider",
                value: function() {
                    var e = "".concat(this.name, ":").concat(this.chainId)
                      , t = this.httpProviders[e];
                    if (typeof t > "u")
                        throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
            }, {
                key: "setHttpProvider",
                value: function(e, t) {
                    var r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
            }, {
                key: "createHttpProvider",
                value: function(e, t) {
                    var r = t || es(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new Vi(new Ki.Z(r))
                }
            }]),
            e
        }()
          , ps = function() {
            function e(t) {
                (0,
                s.Z)(this, e),
                this.name = "cip34",
                this.namespace = t.namespace,
                this.events = t.events,
                this.client = t.client,
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            return (0,
            a.Z)(e, [{
                key: "updateNamespace",
                value: function(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
            }, {
                key: "requestAccounts",
                value: function() {
                    return this.getAccounts()
                }
            }, {
                key: "getDefaultChain",
                value: function() {
                    if (this.chainId)
                        return this.chainId;
                    if (this.namespace.defaultChain)
                        return this.namespace.defaultChain;
                    var e = this.namespace.chains[0];
                    if (!e)
                        throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
            }, {
                key: "request",
                value: function(e) {
                    return this.namespace.methods.includes(e.request.method) ? (as(this.client, e),
                    this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
            }, {
                key: "setDefaultChain",
                value: function(e, t) {
                    if (this.chainId = e,
                    !this.httpProviders[e]) {
                        var r = t || this.getCardanoRPCUrl(e);
                        if (!r)
                            throw new Error("No RPC url provided for chainId: ".concat(e));
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(Gi, "".concat(this.name, ":").concat(this.chainId))
                }
            }, {
                key: "getAccounts",
                value: function() {
                    var e = this
                      , t = this.namespace.accounts;
                    return t ? (0,
                    c.Z)(new Set(t.filter((function(t) {
                        return t.split(":")[1] === e.chainId.toString()
                    }
                    )).map((function(e) {
                        return e.split(":")[2]
                    }
                    )))) : []
                }
            }, {
                key: "createHttpProviders",
                value: function() {
                    var e = this
                      , t = {};
                    return this.namespace.chains.forEach((function(r) {
                        var n = e.getCardanoRPCUrl(r);
                        t[r] = e.createHttpProvider(r, n)
                    }
                    )),
                    t
                }
            }, {
                key: "getHttpProvider",
                value: function() {
                    var e = "".concat(this.name, ":").concat(this.chainId)
                      , t = this.httpProviders[e];
                    if (typeof t > "u")
                        throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
            }, {
                key: "getCardanoRPCUrl",
                value: function(e) {
                    var t = this.namespace.rpcMap;
                    if (t)
                        return t[e]
                }
            }, {
                key: "setHttpProvider",
                value: function(e, t) {
                    var r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
            }, {
                key: "createHttpProvider",
                value: function(e, t) {
                    var r = t || this.getCardanoRPCUrl(e);
                    return typeof r > "u" ? void 0 : new Vi(new Ki.Z(r))
                }
            }]),
            e
        }()
          , ls = function() {
            function e(t) {
                (0,
                s.Z)(this, e),
                this.name = "elrond",
                this.namespace = t.namespace,
                this.events = t.events,
                this.client = t.client,
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            return (0,
            a.Z)(e, [{
                key: "updateNamespace",
                value: function(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
            }, {
                key: "requestAccounts",
                value: function() {
                    return this.getAccounts()
                }
            }, {
                key: "request",
                value: function(e) {
                    return this.namespace.methods.includes(e.request.method) ? (as(this.client, e),
                    this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
            }, {
                key: "setDefaultChain",
                value: function(e, t) {
                    if (!this.httpProviders[e]) {
                        var r = t || es("".concat(this.name, ":").concat(e), this.namespace, this.client.core.projectId);
                        if (!r)
                            throw new Error("No RPC url provided for chainId: ".concat(e));
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e,
                    this.events.emit(Gi, "".concat(this.name, ":").concat(this.chainId))
                }
            }, {
                key: "getDefaultChain",
                value: function() {
                    if (this.chainId)
                        return this.chainId;
                    if (this.namespace.defaultChain)
                        return this.namespace.defaultChain;
                    var e = this.namespace.chains[0];
                    if (!e)
                        throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
            }, {
                key: "getAccounts",
                value: function() {
                    var e = this
                      , t = this.namespace.accounts;
                    return t ? (0,
                    c.Z)(new Set(t.filter((function(t) {
                        return t.split(":")[1] === e.chainId.toString()
                    }
                    )).map((function(e) {
                        return e.split(":")[2]
                    }
                    )))) : []
                }
            }, {
                key: "createHttpProviders",
                value: function() {
                    var e = this
                      , t = {};
                    return this.namespace.chains.forEach((function(r) {
                        var n;
                        t[r] = e.createHttpProvider(r, null == (n = e.namespace.rpcMap) ? void 0 : n[r])
                    }
                    )),
                    t
                }
            }, {
                key: "getHttpProvider",
                value: function() {
                    var e = "".concat(this.name, ":").concat(this.chainId)
                      , t = this.httpProviders[e];
                    if (typeof t > "u")
                        throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
            }, {
                key: "setHttpProvider",
                value: function(e, t) {
                    var r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
            }, {
                key: "createHttpProvider",
                value: function(e, t) {
                    var r = t || es(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new Vi(new Ki.Z(r))
                }
            }]),
            e
        }()
          , fs = function() {
            function e(t) {
                (0,
                s.Z)(this, e),
                this.name = "multiversx",
                this.namespace = t.namespace,
                this.events = t.events,
                this.client = t.client,
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            return (0,
            a.Z)(e, [{
                key: "updateNamespace",
                value: function(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
            }, {
                key: "requestAccounts",
                value: function() {
                    return this.getAccounts()
                }
            }, {
                key: "request",
                value: function(e) {
                    return this.namespace.methods.includes(e.request.method) ? (as(this.client, e),
                    this.client.request(e)) : this.getHttpProvider().request(e.request)
                }
            }, {
                key: "setDefaultChain",
                value: function(e, t) {
                    if (!this.httpProviders[e]) {
                        var r = t || es("".concat(this.name, ":").concat(e), this.namespace, this.client.core.projectId);
                        if (!r)
                            throw new Error("No RPC url provided for chainId: ".concat(e));
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e,
                    this.events.emit(Gi, "".concat(this.name, ":").concat(this.chainId))
                }
            }, {
                key: "getDefaultChain",
                value: function() {
                    if (this.chainId)
                        return this.chainId;
                    if (this.namespace.defaultChain)
                        return this.namespace.defaultChain;
                    var e = this.namespace.chains[0];
                    if (!e)
                        throw new Error("ChainId not found");
                    return e.split(":")[1]
                }
            }, {
                key: "getAccounts",
                value: function() {
                    var e = this
                      , t = this.namespace.accounts;
                    return t ? (0,
                    c.Z)(new Set(t.filter((function(t) {
                        return t.split(":")[1] === e.chainId.toString()
                    }
                    )).map((function(e) {
                        return e.split(":")[2]
                    }
                    )))) : []
                }
            }, {
                key: "createHttpProviders",
                value: function() {
                    var e = this
                      , t = {};
                    return this.namespace.chains.forEach((function(r) {
                        var n;
                        t[r] = e.createHttpProvider(r, null == (n = e.namespace.rpcMap) ? void 0 : n[r])
                    }
                    )),
                    t
                }
            }, {
                key: "getHttpProvider",
                value: function() {
                    var e = "".concat(this.name, ":").concat(this.chainId)
                      , t = this.httpProviders[e];
                    if (typeof t > "u")
                        throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                    return t
                }
            }, {
                key: "setHttpProvider",
                value: function(e, t) {
                    var r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
            }, {
                key: "createHttpProvider",
                value: function(e, t) {
                    var r = t || es(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new Vi(new Ki.Z(r))
                }
            }]),
            e
        }()
          , hs = Object.defineProperty
          , ds = Object.defineProperties
          , vs = Object.getOwnPropertyDescriptors
          , gs = Object.getOwnPropertySymbols
          , ms = Object.prototype.hasOwnProperty
          , ys = Object.prototype.propertyIsEnumerable
          , bs = function(e, t, r) {
            return t in e ? hs(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
            }) : e[t] = r
        }
          , ws = function(e, t) {
            for (var r in t || (t = {}))
                ms.call(t, r) && bs(e, r, t[r]);
            if (gs) {
                var n, i = (0,
                u.Z)(gs(t));
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        r = n.value;
                        ys.call(t, r) && bs(e, r, t[r])
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
            }
            return e
        }
          , xs = function(e, t) {
            return ds(e, vs(t))
        }
          , ks = function() {
            function e(t) {
                (0,
                s.Z)(this, e),
                this.events = new (y()),
                this.rpcProviders = {},
                this.shouldAbortPairingAttempt = !1,
                this.maxPairingAttempts = 10,
                this.providerOpts = t,
                this.logger = typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" && "string" != typeof (null === t || void 0 === t ? void 0 : t.logger) ? t.logger : l()((0,
                x.getDefaultLoggerOptions)({
                    level: (null === t || void 0 === t ? void 0 : t.logger) || Hi
                }))
            }
            return (0,
            a.Z)(e, [{
                key: "request",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t, r) {
                        var i, s, a, c;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = this.validateChain(r),
                                    s = (0,
                                    o.Z)(i, 2),
                                    a = s[0],
                                    c = s[1],
                                    this.session) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("Please call connect() before request()");
                                case 3:
                                    return e.next = 5,
                                    this.getProvider(a).request({
                                        request: ws({}, t),
                                        chainId: "".concat(a, ":").concat(c),
                                        topic: this.session.topic
                                    });
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "sendAsync",
                value: function(e, t, r) {
                    this.request(e, r).then((function(e) {
                        return t(null, e)
                    }
                    )).catch((function(e) {
                        return t(e, void 0)
                    }
                    ))
                }
            }, {
                key: "enable",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.client) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("Sign Client not initialized");
                                case 2:
                                    if (e.t0 = this.session,
                                    e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6,
                                    this.connect({
                                        namespaces: this.namespaces,
                                        optionalNamespaces: this.optionalNamespaces,
                                        sessionProperties: this.sessionProperties
                                    });
                                case 6:
                                    return e.next = 8,
                                    this.requestAccounts();
                                case 8:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "disconnect",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.session) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("Please call connect() before enable()");
                                case 2:
                                    return e.next = 4,
                                    this.client.disconnect({
                                        topic: null == (t = this.session) ? void 0 : t.topic,
                                        reason: Ve("USER_DISCONNECTED")
                                    });
                                case 4:
                                    return e.next = 6,
                                    this.cleanup();
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "connect",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.client) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("Sign Client not initialized");
                                case 2:
                                    return this.setNamespaces(t),
                                    e.next = 5,
                                    this.cleanupPendingPairings();
                                case 5:
                                    if (t.skipPairing) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 8,
                                    this.pair(t.pairingTopic);
                                case 8:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "on",
                value: function(e, t) {
                    this.events.on(e, t)
                }
            }, {
                key: "once",
                value: function(e, t) {
                    this.events.once(e, t)
                }
            }, {
                key: "removeListener",
                value: function(e, t) {
                    this.events.removeListener(e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.events.off(e, t)
                }
            }, {
                key: "isWalletConnect",
                get: function() {
                    return !0
                }
            }, {
                key: "pair",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        var r, i, s, a, o = this;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.shouldAbortPairingAttempt = !1,
                                    r = 0;
                                case 2:
                                    if (!this.shouldAbortPairingAttempt) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("Pairing aborted");
                                case 4:
                                    if (!(r >= this.maxPairingAttempts)) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error("Max auto pairing attempts reached");
                                case 6:
                                    return e.next = 8,
                                    this.client.connect({
                                        pairingTopic: t,
                                        requiredNamespaces: this.namespaces,
                                        optionalNamespaces: this.optionalNamespaces,
                                        sessionProperties: this.sessionProperties
                                    });
                                case 8:
                                    return i = e.sent,
                                    s = i.uri,
                                    a = i.approval,
                                    s && (this.uri = s,
                                    this.events.emit("display_uri", s)),
                                    e.next = 14,
                                    a().then((function(e) {
                                        o.session = e
                                    }
                                    )).catch((function(e) {
                                        if (e.message !== Ii)
                                            throw e;
                                        r++
                                    }
                                    ));
                                case 14:
                                    if (!this.session) {
                                        e.next = 2;
                                        break
                                    }
                                case 15:
                                    return e.abrupt("return", (this.onConnect(),
                                    this.session));
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setDefaultChain",
                value: function(e, t) {
                    try {
                        var r = this.validateChain(e)
                          , n = (0,
                        o.Z)(r, 2)
                          , i = n[0]
                          , s = n[1];
                        this.getProvider(i).setDefaultChain(s, t)
                    } catch (i) {
                        if (!/Please call connect/.test(i.message))
                            throw i
                    }
                }
            }, {
                key: "cleanupPendingPairings",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r, i, s, a, o = arguments;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = o.length > 0 && void 0 !== o[0] ? o[0] : {},
                                    this.logger.info("Cleaning up inactive pairings..."),
                                    !Ke(r = this.client.pairing.getAll())) {
                                        e.next = 26;
                                        break
                                    }
                                    i = (0,
                                    u.Z)(r),
                                    e.prev = 5,
                                    i.s();
                                case 7:
                                    if ((s = i.n()).done) {
                                        e.next = 17;
                                        break
                                    }
                                    if (a = s.value,
                                    !t.deletePairings) {
                                        e.next = 13;
                                        break
                                    }
                                    this.client.core.expirer.set(a.topic, 0),
                                    e.next = 15;
                                    break;
                                case 13:
                                    return e.next = 15,
                                    this.client.core.relayer.subscriber.unsubscribe(a.topic);
                                case 15:
                                    e.next = 7;
                                    break;
                                case 17:
                                    e.next = 22;
                                    break;
                                case 19:
                                    e.prev = 19,
                                    e.t0 = e.catch(5),
                                    i.e(e.t0);
                                case 22:
                                    return e.prev = 22,
                                    i.f(),
                                    e.finish(22);
                                case 25:
                                    this.logger.info("Inactive pairings cleared: ".concat(r.length));
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[5, 19, 22, 25]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "abortPairingAttempt",
                value: function() {
                    this.shouldAbortPairingAttempt = !0
                }
            }, {
                key: "checkStorage",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getFromStore("namespaces");
                                case 2:
                                    if (e.t0 = e.sent,
                                    e.t0) {
                                        e.next = 5;
                                        break
                                    }
                                    e.t0 = {};
                                case 5:
                                    return this.namespaces = e.t0,
                                    e.next = 8,
                                    this.getFromStore("optionalNamespaces");
                                case 8:
                                    if (e.t1 = e.sent,
                                    e.t1) {
                                        e.next = 11;
                                        break
                                    }
                                    e.t1 = {};
                                case 11:
                                    if (this.optionalNamespaces = e.t1,
                                    !this.client.session.length) {
                                        e.next = 15;
                                        break
                                    }
                                    t = this.client.session.keys.length - 1,
                                    this.session = this.client.session.get(this.client.session.keys[t]),
                                    this.createProviders();
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "initialize",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.logger.trace("Initialized"),
                                    e.next = 3,
                                    this.createClient();
                                case 3:
                                    return e.next = 5,
                                    this.checkStorage();
                                case 5:
                                    this.registerEventListeners();
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "createClient",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = this.providerOpts.client,
                                    e.t0) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4,
                                    Bi.init({
                                        logger: this.providerOpts.logger || Hi,
                                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                                        projectId: this.providerOpts.projectId,
                                        metadata: this.providerOpts.metadata,
                                        storageOptions: this.providerOpts.storageOptions,
                                        name: this.providerOpts.name
                                    });
                                case 4:
                                    e.t0 = e.sent;
                                case 5:
                                    this.client = e.t0,
                                    this.logger.trace("SignClient Initialized");
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "createProviders",
                value: function() {
                    var e = this;
                    if (!this.client)
                        throw new Error("Sign Client not initialized");
                    if (!this.session)
                        throw new Error("Session not initialized. Please call connect() before enable()");
                    (0,
                    c.Z)(new Set(Object.keys(this.session.namespaces).map((function(e) {
                        return is(e)
                    }
                    )))).forEach((function(t) {
                        if (e.session) {
                            var r = function(e, t) {
                                var r = Object.keys(t.namespaces).filter((function(t) {
                                    return t.includes(e)
                                }
                                ));
                                if (!r.length)
                                    return [];
                                var n = [];
                                return r.forEach((function(e) {
                                    var r = t.namespaces[e].accounts;
                                    n.push.apply(n, (0,
                                    c.Z)(r))
                                }
                                )),
                                n
                            }(t, e.session)
                              , n = r.map((function(e) {
                                return "".concat(e.split(":")[0], ":").concat(e.split(":")[1])
                            }
                            ))
                              , i = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                                  , r = rs(e)
                                  , n = rs(t);
                                return $i({}, Object.assign(r, n))
                            }(e.namespaces, e.optionalNamespaces)
                              , s = xs(ws({}, i[t]), {
                                accounts: r,
                                chains: n
                            });
                            switch (t) {
                            case "eip155":
                                e.rpcProviders[t] = new os({
                                    client: e.client,
                                    namespace: s,
                                    events: e.events
                                });
                                break;
                            case "solana":
                                e.rpcProviders[t] = new cs({
                                    client: e.client,
                                    namespace: s,
                                    events: e.events
                                });
                                break;
                            case "cosmos":
                                e.rpcProviders[t] = new us({
                                    client: e.client,
                                    namespace: s,
                                    events: e.events
                                });
                                break;
                            case "polkadot":
                                break;
                            case "cip34":
                                e.rpcProviders[t] = new ps({
                                    client: e.client,
                                    namespace: s,
                                    events: e.events
                                });
                                break;
                            case "elrond":
                                e.rpcProviders[t] = new ls({
                                    client: e.client,
                                    namespace: s,
                                    events: e.events
                                });
                                break;
                            case "multiversx":
                                e.rpcProviders[t] = new fs({
                                    client: e.client,
                                    namespace: s,
                                    events: e.events
                                })
                            }
                        }
                    }
                    ))
                }
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    if (typeof this.client > "u")
                        throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", (function(t) {
                        e.events.emit("session_ping", t)
                    }
                    )),
                    this.client.on("session_event", (function(t) {
                        var r = t.params
                          , n = r.event;
                        "accountsChanged" === n.name ? e.events.emit("accountsChanged", n.data) : "chainChanged" === n.name ? e.onChainChanged(r.chainId) : e.events.emit(n.name, n.data),
                        e.events.emit("session_event", t)
                    }
                    )),
                    this.client.on("session_update", (function(t) {
                        var r, n = t.topic, i = t.params, s = i.namespaces, a = null == (r = e.client) ? void 0 : r.session.get(n);
                        e.session = xs(ws({}, a), {
                            namespaces: s
                        }),
                        e.onSessionUpdate(),
                        e.events.emit("session_update", {
                            topic: n,
                            params: i
                        })
                    }
                    )),
                    this.client.on("session_delete", function() {
                        var t = (0,
                        i.Z)((0,
                        n.Z)().mark((function t(r) {
                            return (0,
                            n.Z)().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                        e.cleanup();
                                    case 2:
                                        e.events.emit("session_delete", r),
                                        e.events.emit("disconnect", xs(ws({}, Ve("USER_DISCONNECTED")), {
                                            data: r.topic
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()),
                    this.on(Gi, (function(t) {
                        e.onChainChanged(t, !0)
                    }
                    ))
                }
            }, {
                key: "getProvider",
                value: function(e) {
                    if (!this.rpcProviders[e])
                        throw new Error("Provider not found: ".concat(e));
                    return this.rpcProviders[e]
                }
            }, {
                key: "onSessionUpdate",
                value: function() {
                    var e = this;
                    Object.keys(this.rpcProviders).forEach((function(t) {
                        var r;
                        e.getProvider(t).updateNamespace(null == (r = e.session) ? void 0 : r.namespaces[t])
                    }
                    ))
                }
            }, {
                key: "setNamespaces",
                value: function(e) {
                    var t = e.namespaces
                      , r = e.optionalNamespaces
                      , n = e.sessionProperties;
                    if (!t || !Object.keys(t).length)
                        throw new Error("Namespaces must be not empty");
                    this.namespaces = t,
                    this.optionalNamespaces = r,
                    this.sessionProperties = n,
                    this.persist("namespaces", t),
                    this.persist("optionalNamespaces", r)
                }
            }, {
                key: "validateChain",
                value: function(e) {
                    var t = (null === e || void 0 === e ? void 0 : e.split(":")) || ["", ""]
                      , r = (0,
                    o.Z)(t, 2)
                      , n = r[0]
                      , i = r[1];
                    if (n && !Object.keys(this.namespaces).includes(n))
                        throw new Error("Namespace '".concat(n, "' is not configured. Please call connect() first with namespace config."));
                    if (n && i)
                        return [n, i];
                    var s = Object.keys(this.namespaces)[0];
                    return [s, this.rpcProviders[s].getDefaultChain()]
                }
            }, {
                key: "requestAccounts",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        var t, r, i;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.validateChain(),
                                    r = (0,
                                    o.Z)(t, 1),
                                    i = r[0],
                                    e.next = 3,
                                    this.getProvider(i).requestAccounts();
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onChainChanged",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , r = this.validateChain(e)
                      , n = (0,
                    o.Z)(r, 2)
                      , i = n[0]
                      , s = n[1];
                    t || this.getProvider(i).setDefaultChain(s),
                    this.namespaces[i].defaultChain = s,
                    this.persist("namespaces", this.namespaces),
                    this.events.emit("chainChanged", s)
                }
            }, {
                key: "onConnect",
                value: function() {
                    this.createProviders(),
                    this.events.emit("connect", {
                        session: this.session
                    })
                }
            }, {
                key: "cleanup",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e() {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.session = void 0,
                                    e.next = 3,
                                    this.cleanupPendingPairings({
                                        deletePairings: !0
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "persist",
                value: function(e, t) {
                    this.client.core.storage.setItem("".concat(Fi, "/").concat(e), t)
                }
            }, {
                key: "getFromStore",
                value: function() {
                    var e = (0,
                    i.Z)((0,
                    n.Z)().mark((function e(t) {
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.client.core.storage.getItem("".concat(Fi, "/").concat(t));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "init",
                value: function() {
                    var t = (0,
                    i.Z)((0,
                    n.Z)().mark((function t(r) {
                        var i;
                        return (0,
                        n.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return i = new e(r),
                                    t.next = 3,
                                    i.initialize();
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
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }]),
            e
        }()
          , Zs = ks
    },
    7289: function(e, t, r) {
        var n = r(38416).default
          , i = r(27424).default
          , s = r(74704).default
          , a = r(861).default
          , o = r(82376)
          , c = r(8271)
          , u = r(94266)
          , p = r(2214)
          , l = Symbol("encodeFragmentIdentifier");
        function f(e) {
            if ("string" !== typeof e || 1 !== e.length)
                throw new TypeError("arrayFormatSeparator must be single character string")
        }
        function h(e, t) {
            return t.encode ? t.strict ? o(e) : encodeURIComponent(e) : e
        }
        function d(e, t) {
            return t.decode ? c(e) : e
        }
        function v(e) {
            return Array.isArray(e) ? e.sort() : "object" === typeof e ? v(Object.keys(e)).sort((function(e, t) {
                return Number(e) - Number(t)
            }
            )).map((function(t) {
                return e[t]
            }
            )) : e
        }
        function g(e) {
            var t = e.indexOf("#");
            return -1 !== t && (e = e.slice(0, t)),
            e
        }
        function m(e) {
            var t = (e = g(e)).indexOf("?");
            return -1 === t ? "" : e.slice(t + 1)
        }
        function y(e, t) {
            return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()),
            e
        }
        function b(e, t) {
            f((t = Object.assign({
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1
            }, t)).arrayFormatSeparator);
            var r = function(e) {
                var t;
                switch (e.arrayFormat) {
                case "index":
                    return function(e, r, n) {
                        t = /\[(\d*)\]$/.exec(e),
                        e = e.replace(/\[\d*\]$/, ""),
                        t ? (void 0 === n[e] && (n[e] = {}),
                        n[e][t[1]] = r) : n[e] = r
                    }
                    ;
                case "bracket":
                    return function(e, r, n) {
                        t = /(\[\])$/.exec(e),
                        e = e.replace(/\[\]$/, ""),
                        t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                    }
                    ;
                case "colon-list-separator":
                    return function(e, r, n) {
                        t = /(:list)$/.exec(e),
                        e = e.replace(/:list$/, ""),
                        t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                    }
                    ;
                case "comma":
                case "separator":
                    return function(t, r, n) {
                        var i = "string" === typeof r && r.includes(e.arrayFormatSeparator)
                          , s = "string" === typeof r && !i && d(r, e).includes(e.arrayFormatSeparator);
                        r = s ? d(r, e) : r;
                        var a = i || s ? r.split(e.arrayFormatSeparator).map((function(t) {
                            return d(t, e)
                        }
                        )) : null === r ? r : d(r, e);
                        n[t] = a
                    }
                    ;
                case "bracket-separator":
                    return function(t, r, n) {
                        var i = /(\[\])$/.test(t);
                        if (t = t.replace(/\[\]$/, ""),
                        i) {
                            var s = null === r ? [] : r.split(e.arrayFormatSeparator).map((function(t) {
                                return d(t, e)
                            }
                            ));
                            void 0 !== n[t] ? n[t] = [].concat(n[t], s) : n[t] = s
                        } else
                            n[t] = r ? d(r, e) : r
                    }
                    ;
                default:
                    return function(e, t, r) {
                        void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                    }
                }
            }(t)
              , n = Object.create(null);
            if ("string" !== typeof e)
                return n;
            if (!(e = e.trim().replace(/^[?#&]/, "")))
                return n;
            var a, o = s(e.split("&"));
            try {
                for (o.s(); !(a = o.n()).done; ) {
                    var c = a.value;
                    if ("" !== c) {
                        var p = u(t.decode ? c.replace(/\+/g, " ") : c, "=")
                          , l = i(p, 2)
                          , h = l[0]
                          , g = l[1];
                        g = void 0 === g ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? g : d(g, t),
                        r(d(h, t), g, n)
                    }
                }
            } catch (I) {
                o.e(I)
            } finally {
                o.f()
            }
            for (var m = 0, b = Object.keys(n); m < b.length; m++) {
                var w = b[m]
                  , x = n[w];
                if ("object" === typeof x && null !== x)
                    for (var k = 0, Z = Object.keys(x); k < Z.length; k++) {
                        var E = Z[k];
                        x[E] = y(x[E], t)
                    }
                else
                    n[w] = y(x, t)
            }
            return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((function(e, t) {
                var r = n[t];
                return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? e[t] = v(r) : e[t] = r,
                e
            }
            ), Object.create(null))
        }
        t.extract = m,
        t.parse = b,
        t.stringify = function(e, t) {
            if (!e)
                return "";
            f((t = Object.assign({
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ","
            }, t)).arrayFormatSeparator);
            for (var r = function(r) {
                return t.skipNull && (null === (n = e[r]) || void 0 === n) || t.skipEmptyString && "" === e[r];
                var n
            }, n = function(e) {
                switch (e.arrayFormat) {
                case "index":
                    return function(t) {
                        return function(r, n) {
                            var i = r.length;
                            return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(a(r), null === n ? [[h(t, e), "[", i, "]"].join("")] : [[h(t, e), "[", h(i, e), "]=", h(n, e)].join("")])
                        }
                    }
                    ;
                case "bracket":
                    return function(t) {
                        return function(r, n) {
                            return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(a(r), null === n ? [[h(t, e), "[]"].join("")] : [[h(t, e), "[]=", h(n, e)].join("")])
                        }
                    }
                    ;
                case "colon-list-separator":
                    return function(t) {
                        return function(r, n) {
                            return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(a(r), null === n ? [[h(t, e), ":list="].join("")] : [[h(t, e), ":list=", h(n, e)].join("")])
                        }
                    }
                    ;
                case "comma":
                case "separator":
                case "bracket-separator":
                    var t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                    return function(r) {
                        return function(n, i) {
                            return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i,
                            0 === n.length ? [[h(r, e), t, h(i, e)].join("")] : [[n, h(i, e)].join(e.arrayFormatSeparator)])
                        }
                    }
                    ;
                default:
                    return function(t) {
                        return function(r, n) {
                            return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(a(r), null === n ? [h(t, e)] : [[h(t, e), "=", h(n, e)].join("")])
                        }
                    }
                }
            }(t), i = {}, s = 0, o = Object.keys(e); s < o.length; s++) {
                var c = o[s];
                r(c) || (i[c] = e[c])
            }
            var u = Object.keys(i);
            return !1 !== t.sort && u.sort(t.sort),
            u.map((function(r) {
                var i = e[r];
                return void 0 === i ? "" : null === i ? h(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? h(r, t) + "[]" : i.reduce(n(r), []).join("&") : h(r, t) + "=" + h(i, t)
            }
            )).filter((function(e) {
                return e.length > 0
            }
            )).join("&")
        }
        ,
        t.parseUrl = function(e, t) {
            t = Object.assign({
                decode: !0
            }, t);
            var r = u(e, "#")
              , n = i(r, 2)
              , s = n[0]
              , a = n[1];
            return Object.assign({
                url: s.split("?")[0] || "",
                query: b(m(e), t)
            }, t && t.parseFragmentIdentifier && a ? {
                fragmentIdentifier: d(a, t)
            } : {})
        }
        ,
        t.stringifyUrl = function(e, r) {
            r = Object.assign(n({
                encode: !0,
                strict: !0
            }, l, !0), r);
            var i = g(e.url).split("?")[0] || ""
              , s = t.extract(e.url)
              , a = t.parse(s, {
                sort: !1
            })
              , o = Object.assign(a, e.query)
              , c = t.stringify(o, r);
            c && (c = "?".concat(c));
            var u = function(e) {
                var t = ""
                  , r = e.indexOf("#");
                return -1 !== r && (t = e.slice(r)),
                t
            }(e.url);
            return e.fragmentIdentifier && (u = "#".concat(r[l] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier)),
            "".concat(i).concat(c).concat(u)
        }
        ,
        t.pick = function(e, r, i) {
            i = Object.assign(n({
                parseFragmentIdentifier: !0
            }, l, !1), i);
            var s = t.parseUrl(e, i)
              , a = s.url
              , o = s.query
              , c = s.fragmentIdentifier;
            return t.stringifyUrl({
                url: a,
                query: p(o, r),
                fragmentIdentifier: c
            }, i)
        }
        ,
        t.exclude = function(e, r, n) {
            var i = Array.isArray(r) ? function(e) {
                return !r.includes(e)
            }
            : function(e, t) {
                return !r(e, t)
            }
            ;
            return t.pick(e, i, n)
        }
    },
    57889: function(e, t, r) {
        var n = r(13012).default
          , i = r(17061).default
          , s = r(42122).default
          , a = r(17156).default
          , o = r(56690).default
          , c = r(89728).default
          , u = r(61655).default
          , p = r(26389).default
          , l = r(41588).default
          , f = r(73808).default;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Web3Provider = t.Provider = void 0;
        var h = r(68174)
          , d = h.providers.Formatter
          , v = r(28786)
          , g = r(87840)
          , m = r(11561)
          , y = r(15090)
          , b = r(516)
          , w = null
          , x = function(e) {
            u(r, e);
            var t = p(r);
            function r(e, n) {
                var i;
                o(this, r),
                (i = t.call(this, e, n)).pollingInterval = 500;
                var s = i.formatter.blockTag.bind(i.formatter);
                return i.formatter.blockTag = function(e) {
                    return "committed" == e || "finalized" == e ? e : s(e)
                }
                ,
                i.contractAddresses = {},
                i.formatter.transaction = y.parseTransaction,
                i
            }
            return c(r, [{
                key: "getTransactionReceipt",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n = this;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return e.next = 4,
                                    t;
                                case 4:
                                    return t = e.sent,
                                    r = {
                                        transactionHash: this.formatter.hash(t, !0)
                                    },
                                    e.abrupt("return", (0,
                                    v.poll)(a(i().mark((function e() {
                                        var a, o, c, u;
                                        return i().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    n.perform("getTransactionReceipt", r);
                                                case 2:
                                                    if (null != (a = e.sent)) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    if (null != n._emitted["t:" + t]) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return e.abrupt("return", null);
                                                case 6:
                                                    return e.abrupt("return", void 0);
                                                case 7:
                                                    if (null != a.blockNumber || null == a.status || !h.BigNumber.from(a.status).isZero()) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return e.abrupt("return", s(s({}, n.formatter.receipt(s(s({}, a), {}, {
                                                        confirmations: 1,
                                                        blockNumber: 0,
                                                        blockHash: h.ethers.constants.HashZero
                                                    }))), {}, {
                                                        blockNumber: null,
                                                        blockHash: null,
                                                        l1BatchNumber: null,
                                                        l1BatchTxIndex: null
                                                    }));
                                                case 9:
                                                    if (null != a.blockHash) {
                                                        e.next = 13;
                                                        break
                                                    }
                                                    return e.abrupt("return", void 0);
                                                case 13:
                                                    if (null != (o = n.formatter.receipt(a)).blockNumber) {
                                                        e.next = 18;
                                                        break
                                                    }
                                                    o.confirmations = 0,
                                                    e.next = 25;
                                                    break;
                                                case 18:
                                                    if (null != o.confirmations) {
                                                        e.next = 25;
                                                        break
                                                    }
                                                    return e.next = 21,
                                                    n._getInternalBlockNumber(100 + 2 * n.pollingInterval);
                                                case 21:
                                                    c = e.sent,
                                                    (u = c - o.blockNumber + 1) <= 0 && (u = 1),
                                                    o.confirmations = u;
                                                case 25:
                                                    return e.abrupt("return", o);
                                                case 26:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    ))), {
                                        oncePoll: this
                                    }));
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getBlock",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this._getBlock(t, !1));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getBlockWithTransactions",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this._getBlock(t, !0));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getBalance",
                value: function() {
                    var e = a(i().mark((function e(t, n, s) {
                        var a, o;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = this.formatter.blockTag(n),
                                    null != s && !(0,
                                    y.isETH)(s)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 4,
                                    l(f(r.prototype), "getBalance", this).call(this, t, a);
                                case 4:
                                case 11:
                                    return e.abrupt("return", e.sent);
                                case 7:
                                    return e.prev = 7,
                                    o = g.IERC20MetadataFactory.connect(s, this),
                                    e.next = 11,
                                    o.balanceOf(t, {
                                        blockTag: a
                                    });
                                case 14:
                                    return e.prev = 14,
                                    e.t0 = e.catch(7),
                                    e.abrupt("return", h.BigNumber.from(0));
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[7, 14]])
                    }
                    )));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "l2TokenAddress",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t != y.ETH_ADDRESS) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", y.ETH_ADDRESS);
                                case 4:
                                    return e.next = 6,
                                    this.getDefaultBridgeAddresses();
                                case 6:
                                    return r = e.sent.erc20L2,
                                    n = g.IL2BridgeFactory.connect(r, this),
                                    e.next = 10,
                                    n.l2TokenAddress(t);
                                case 10:
                                    return e.abrupt("return", e.sent);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "l1TokenAddress",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t != y.ETH_ADDRESS) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", y.ETH_ADDRESS);
                                case 4:
                                    return e.next = 6,
                                    this.getDefaultBridgeAddresses();
                                case 6:
                                    return r = e.sent.erc20L2,
                                    n = g.IL2BridgeFactory.connect(r, this),
                                    e.next = 10,
                                    n.l1TokenAddress(t);
                                case 10:
                                    return e.abrupt("return", e.sent);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "estimateGas",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return e.next = 4,
                                    h.utils.resolveProperties({
                                        transaction: this._getTransactionRequest(t)
                                    });
                                case 4:
                                    return r = e.sent,
                                    null != t.customData && (r.transaction.customData = t.customData),
                                    e.next = 8,
                                    this.perform("estimateGas", r);
                                case 8:
                                    return n = e.sent,
                                    e.prev = 9,
                                    e.abrupt("return", h.BigNumber.from(n));
                                case 13:
                                    throw e.prev = 13,
                                    e.t0 = e.catch(9),
                                    new Error("bad result from backend (estimateGas): ".concat(n));
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[9, 13]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "estimateGasL1",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var n, s;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return e.next = 4,
                                    h.utils.resolveProperties({
                                        transaction: this._getTransactionRequest(t)
                                    });
                                case 4:
                                    return n = e.sent,
                                    null != t.customData && (n.transaction.customData = t.customData),
                                    e.next = 8,
                                    this.send("zks_estimateGasL1ToL2", [r.hexlifyTransaction(n.transaction, {
                                        from: !0
                                    })]);
                                case 8:
                                    return s = e.sent,
                                    e.prev = 9,
                                    e.abrupt("return", h.BigNumber.from(s));
                                case 13:
                                    throw e.prev = 13,
                                    e.t0 = e.catch(9),
                                    new Error("bad result from backend (zks_estimateGasL1ToL2): ".concat(s));
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[9, 13]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getGasPrice",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = t ? [t] : [],
                                    e.next = 3,
                                    this.send("eth_gasPrice", r);
                                case 3:
                                    return n = e.sent,
                                    e.abrupt("return", h.BigNumber.from(n));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getMessageProof",
                value: function() {
                    var e = a(i().mark((function e(t, r, n, s) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getL2ToL1MsgProof", [h.BigNumber.from(t).toNumber(), r, h.ethers.utils.hexlify(n), s]);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r, n, i) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getLogProof",
                value: function() {
                    var e = a(i().mark((function e(t, r) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getL2ToL1LogProof", [h.ethers.utils.hexlify(t), r]);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getL1BatchBlockRange",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getL1BatchBlockRange", [t]);
                                case 2:
                                    if (null != (r = e.sent)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 5:
                                    return e.abrupt("return", [parseInt(r[0], 16), parseInt(r[1], 16)]);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getMainContractAddress",
                value: function() {
                    var e = a(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.contractAddresses.mainContract) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 3,
                                    this.send("zks_getMainContract", []);
                                case 3:
                                    this.contractAddresses.mainContract = e.sent;
                                case 4:
                                    return e.abrupt("return", this.contractAddresses.mainContract);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getTestnetPaymasterAddress",
                value: function() {
                    var e = a(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getTestnetPaymaster", []);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getDefaultBridgeAddresses",
                value: function() {
                    var e = a(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.contractAddresses.erc20BridgeL1) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3,
                                    this.send("zks_getBridgeContracts", []);
                                case 3:
                                    t = e.sent,
                                    this.contractAddresses.erc20BridgeL1 = t.l1Erc20DefaultBridge,
                                    this.contractAddresses.erc20BridgeL2 = t.l2Erc20DefaultBridge;
                                case 6:
                                    return e.abrupt("return", {
                                        erc20L1: this.contractAddresses.erc20BridgeL1,
                                        erc20L2: this.contractAddresses.erc20BridgeL2
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getConfirmedTokens",
                value: function() {
                    var e = a(i().mark((function e() {
                        var t, r, n, a = arguments;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : 0,
                                    r = a.length > 1 && void 0 !== a[1] ? a[1] : 255,
                                    e.next = 4,
                                    this.send("zks_getConfirmedTokens", [t, r]);
                                case 4:
                                    return n = e.sent,
                                    e.abrupt("return", n.map((function(e) {
                                        return s({
                                            address: e.l2Address
                                        }, e)
                                    }
                                    )));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getTokenPrice",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getTokenPrice", [t]);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAllAccountBalances",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getAllAccountBalances", [t]);
                                case 2:
                                    for (n in r = e.sent)
                                        r[n] = h.BigNumber.from(r[n]);
                                    return e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "l1ChainId",
                value: function() {
                    var e = a(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_L1ChainId", []);
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", h.BigNumber.from(t).toNumber());
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getL1BatchNumber",
                value: function() {
                    var e = a(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_L1BatchNumber", []);
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", h.BigNumber.from(t).toNumber());
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getL1BatchDetails",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getL1BatchDetails", [t]);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getBlockDetails",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getBlockDetails", [t]);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getTransactionDetails",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("zks_getTransactionDetails", [t]);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getWithdrawTx",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, s, a, o, c, u, p, l;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (null != (c = Object.assign({}, (n(t),
                                    t))).to || null != c.from) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new Error("withdrawal target address is undefined");
                                case 3:
                                    if (null !== (r = c.to) && void 0 !== r || (c.to = c.from),
                                    null !== (s = c.overrides) && void 0 !== s || (c.overrides = {}),
                                    null !== (a = (o = c.overrides).from) && void 0 !== a || (o.from = c.from),
                                    !(0,
                                    y.isETH)(c.token)) {
                                        e.next = 13;
                                        break
                                    }
                                    if (c.overrides.value || (c.overrides.value = c.amount),
                                    h.BigNumber.from(c.overrides.value).eq(c.amount)) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error("The tx.value is not equal to the value withdrawn");
                                case 11:
                                    return u = g.IEthTokenFactory.connect(y.L2_ETH_TOKEN_ADDRESS, this),
                                    e.abrupt("return", u.populateTransaction.withdraw(c.to, c.overrides));
                                case 13:
                                    if (null != c.bridgeAddress) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.next = 16,
                                    this.getDefaultBridgeAddresses();
                                case 16:
                                    p = e.sent,
                                    c.bridgeAddress = p.erc20L2;
                                case 18:
                                    return l = g.IL2BridgeFactory.connect(c.bridgeAddress, this),
                                    e.abrupt("return", l.populateTransaction.withdraw(c.to, c.token, c.amount, c.overrides));
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "estimateGasWithdraw",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getWithdrawTx(t);
                                case 2:
                                    return r = e.sent,
                                    e.next = 5,
                                    this.estimateGas(r);
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getTransferTx",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, a, o, c, u;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (c = Object.assign({}, (n(t),
                                    t)),
                                    null !== (r = c.overrides) && void 0 !== r || (c.overrides = {}),
                                    null !== (a = (o = c.overrides).from) && void 0 !== a || (o.from = c.from),
                                    null != c.token && c.token != y.ETH_ADDRESS) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.t0 = s,
                                    e.t1 = s,
                                    e.t2 = {},
                                    e.next = 9,
                                    h.ethers.utils.resolveProperties(c.overrides);
                                case 9:
                                    return e.t3 = e.sent,
                                    e.t4 = (0,
                                    e.t1)(e.t2, e.t3),
                                    e.t5 = {},
                                    e.t6 = {
                                        to: c.to,
                                        value: c.amount
                                    },
                                    e.abrupt("return", (0,
                                    e.t0)(e.t4, e.t5, e.t6));
                                case 16:
                                    return u = g.IERC20MetadataFactory.connect(c.token, this),
                                    e.next = 19,
                                    u.populateTransaction.transfer(c.to, c.amount, c.overrides);
                                case 19:
                                    return e.abrupt("return", e.sent);
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "estimateGasTransfer",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getTransferTx(t);
                                case 2:
                                    return r = e.sent,
                                    e.next = 5,
                                    this.estimateGas(r);
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "newFilter",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t;
                                case 2:
                                    return t = e.sent,
                                    e.next = 5,
                                    this.send("eth_newFilter", [this._prepareFilter(t)]);
                                case 5:
                                    return r = e.sent,
                                    e.abrupt("return", h.BigNumber.from(r));
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "newBlockFilter",
                value: function() {
                    var e = a(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("eth_newBlockFilter", []);
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", h.BigNumber.from(t));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "newPendingTransactionsFilter",
                value: function() {
                    var e = a(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("eth_newPendingTransactionFilter", []);
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", h.BigNumber.from(t));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getFilterChanges",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.send("eth_getFilterChanges", [t.toHexString()]);
                                case 2:
                                    return r = e.sent,
                                    e.abrupt("return", "string" === typeof r[0] ? r : this._parseLogs(r));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getLogs",
                value: function() {
                    var e = a(i().mark((function e() {
                        var t, r, n = arguments;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                                    e.next = 3,
                                    t;
                                case 3:
                                    return t = e.sent,
                                    e.next = 6,
                                    this.send("eth_getLogs", [this._prepareFilter(t)]);
                                case 6:
                                    return r = e.sent,
                                    e.abrupt("return", this._parseLogs(r));
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "_parseLogs",
                value: function(e) {
                    return d.arrayOf(this.formatter.filterLog.bind(this.formatter))(e)
                }
            }, {
                key: "_prepareFilter",
                value: function(e) {
                    return s(s({}, e), {}, {
                        fromBlock: null == e.fromBlock ? null : this.formatter.blockTag(e.fromBlock),
                        toBlock: null == e.fromBlock ? null : this.formatter.blockTag(e.toBlock)
                    })
                }
            }, {
                key: "_wrapTransaction",
                value: function(e, t) {
                    var n = this
                      , s = l(f(r.prototype), "_wrapTransaction", this).call(this, e, t);
                    return s.waitFinalize = a(i().mark((function e() {
                        var t, r;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    s.wait();
                                case 2:
                                    t = e.sent;
                                case 3:
                                    return e.next = 6,
                                    n.getBlock("finalized");
                                case 6:
                                    if (r = e.sent,
                                    !(t.blockNumber <= r.number)) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 10,
                                    n.getTransactionReceipt(t.transactionHash);
                                case 10:
                                    return e.abrupt("return", e.sent);
                                case 13:
                                    return e.next = 15,
                                    (0,
                                    y.sleep)(n.pollingInterval);
                                case 15:
                                    e.next = 3;
                                    break;
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))),
                    s
                }
            }, {
                key: "getTransactionStatus",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getTransaction(t);
                                case 2:
                                    if (null != (r = e.sent)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", m.TransactionStatus.NotFound);
                                case 5:
                                    if (null != r.blockNumber) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", m.TransactionStatus.Processing);
                                case 7:
                                    return e.next = 9,
                                    this.getBlock("finalized");
                                case 9:
                                    if (n = e.sent,
                                    !(r.blockNumber <= n.number)) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.abrupt("return", m.TransactionStatus.Finalized);
                                case 12:
                                    return e.abrupt("return", m.TransactionStatus.Committed);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getTransaction",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t;
                                case 2:
                                    return t = e.sent,
                                    e.next = 5,
                                    l(f(r.prototype), "getTransaction", this).call(this, t);
                                case 5:
                                    return n = e.sent,
                                    e.abrupt("return", n ? this._wrapTransaction(n, t) : null);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "sendTransaction",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l(f(r.prototype), "sendTransaction", this).call(this, t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getL2TransactionFromPriorityOp",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n, s;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.wait();
                                case 2:
                                    return r = e.sent,
                                    e.t0 = y.getL2HashFromPriorityOp,
                                    e.t1 = r,
                                    e.next = 7,
                                    this.getMainContractAddress();
                                case 7:
                                    e.t2 = e.sent,
                                    n = (0,
                                    e.t0)(e.t1, e.t2),
                                    s = null;
                                case 10:
                                    return e.next = 12,
                                    this.getTransactionStatus(n);
                                case 12:
                                    return s = e.sent,
                                    e.next = 15,
                                    (0,
                                    y.sleep)(this.pollingInterval);
                                case 15:
                                    if (s == m.TransactionStatus.NotFound) {
                                        e.next = 10;
                                        break
                                    }
                                case 16:
                                    return e.next = 18,
                                    this.getTransaction(n);
                                case 18:
                                    return e.abrupt("return", e.sent);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getPriorityOpResponse",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n = this;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return (r = s({}, t)).waitL1Commit = r.wait,
                                    r.wait = a(i().mark((function e() {
                                        var r;
                                        return i().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    n.getL2TransactionFromPriorityOp(t);
                                                case 2:
                                                    return r = e.sent,
                                                    e.next = 5,
                                                    r.wait();
                                                case 5:
                                                    return e.abrupt("return", e.sent);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    ))),
                                    r.waitFinalize = a(i().mark((function e() {
                                        var r;
                                        return i().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    n.getL2TransactionFromPriorityOp(t);
                                                case 2:
                                                    return r = e.sent,
                                                    e.next = 5,
                                                    r.waitFinalize();
                                                case 5:
                                                    return e.abrupt("return", e.sent);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    ))),
                                    e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getContractAccountInfo",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = new h.Contract(y.CONTRACT_DEPLOYER_ADDRESS,y.CONTRACT_DEPLOYER,this),
                                    e.next = 3,
                                    r.getAccountInfo(t);
                                case 3:
                                    return n = e.sent,
                                    e.abrupt("return", {
                                        supportedAAVersion: n.supportedAAVersion,
                                        nonceOrdering: n.nonceOrdering
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "estimateL1ToL2Execute",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var r, n, s, a;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return null !== (r = t.gasPerPubdataByte) && void 0 !== r || (t.gasPerPubdataByte = y.REQUIRED_L1_TO_L2_GAS_PER_PUBDATA_LIMIT),
                                    null !== (n = t.caller) && void 0 !== n || (t.caller = h.ethers.Wallet.createRandom().address),
                                    s = {
                                        gasPerPubdataByte: t.gasPerPubdataByte
                                    },
                                    t.factoryDeps && Object.assign(s, {
                                        factoryDeps: t.factoryDeps
                                    }),
                                    e.next = 6,
                                    this.estimateGasL1({
                                        from: t.caller,
                                        data: t.calldata,
                                        to: t.contractAddress,
                                        value: t.l2Value,
                                        customData: s
                                    });
                                case 6:
                                    return a = e.sent,
                                    e.abrupt("return", a);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "getFormatter",
                value: function() {
                    if (null == w) {
                        var e = (w = new d).number.bind(w)
                          , t = w.boolean.bind(w)
                          , r = w.hash.bind(w)
                          , n = w.address.bind(w);
                        w.formats.receiptLog.l1BatchNumber = d.allowNull(e),
                        w.formats.l2Tol1Log = {
                            blockNumber: e,
                            blockHash: r,
                            l1BatchNumber: d.allowNull(e),
                            transactionIndex: e,
                            shardId: e,
                            isService: t,
                            sender: n,
                            key: r,
                            value: r,
                            transactionHash: r,
                            logIndex: e
                        },
                        w.formats.receipt.l1BatchNumber = d.allowNull(e),
                        w.formats.receipt.l1BatchTxIndex = d.allowNull(e),
                        w.formats.receipt.l2ToL1Logs = d.arrayOf((function(e) {
                            return d.check(w.formats.l2Tol1Log, e)
                        }
                        )),
                        w.formats.block.l1BatchNumber = d.allowNull(e),
                        w.formats.block.l1BatchTimestamp = d.allowNull(e),
                        w.formats.blockWithTransactions.l1BatchNumber = d.allowNull(e),
                        w.formats.blockWithTransactions.l1BatchTimestamp = d.allowNull(e),
                        w.formats.transaction.l1BatchNumber = d.allowNull(e),
                        w.formats.transaction.l1BatchTxIndex = d.allowNull(e),
                        w.formats.filterLog.l1BatchNumber = d.allowNull(e)
                    }
                    return w
                }
            }, {
                key: "hexlifyTransaction",
                value: function(e, t) {
                    var r, n = h.ethers.providers.JsonRpcProvider.hexlifyTransaction(e, s(s({}, t), {}, {
                        customData: !0,
                        from: !0
                    }));
                    return null == e.customData || (n.eip712Meta = {
                        gasPerPubdata: h.utils.hexValue(null !== (r = e.customData.gasPerPubdata) && void 0 !== r ? r : 0)
                    },
                    e.type = y.EIP712_TX_TYPE,
                    e.customData.factoryDeps && (n.eip712Meta.factoryDeps = e.customData.factoryDeps.map((function(e) {
                        return Array.from(h.utils.arrayify(e))
                    }
                    ))),
                    e.customData.paymasterParams && (n.eip712Meta.paymasterParams = {
                        paymaster: h.utils.hexlify(e.customData.paymasterParams.paymaster),
                        paymasterInput: Array.from(h.utils.arrayify(e.customData.paymasterParams.paymasterInput))
                    })),
                    n
                }
            }, {
                key: "getDefaultProvider",
                value: function() {
                    return new r({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0
                    }.ZKSYNC_WEB3_API_URL || "http://localhost:3050")
                }
            }]),
            r
        }(h.ethers.providers.JsonRpcProvider);
        t.Provider = x;
        var k = function(e) {
            u(r, e);
            var t = p(r);
            function r(e, n) {
                var i;
                if (o(this, r),
                null == e)
                    throw new Error("missing provider");
                if (!e.request)
                    throw new Error("provider must implement eip-1193");
                var s = e.host || e.path || (e.isMetaMask ? "metamask" : "eip-1193:");
                return (i = t.call(this, s, n)).provider = e,
                i
            }
            return c(r, [{
                key: "send",
                value: function() {
                    var e = a(i().mark((function e(t, r) {
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return null !== r && void 0 !== r || (r = []),
                                    "eth_sign" == t && (this.provider.isMetaMask || this.provider.isStatus) && (t = "personal_sign",
                                    r = [r[1], r[0]]),
                                    e.next = 4,
                                    this.provider.request({
                                        method: t,
                                        params: r
                                    });
                                case 4:
                                    return e.abrupt("return", e.sent);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getSigner",
                value: function(e) {
                    return b.Signer.from(l(f(r.prototype), "getSigner", this).call(this, e))
                }
            }, {
                key: "estimateGas",
                value: function() {
                    var e = a(i().mark((function e(t) {
                        var n, s, a;
                        return i().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l(f(r.prototype), "estimateGas", this).call(this, t);
                                case 2:
                                    return n = e.sent,
                                    s = h.BigNumber.from(21e3),
                                    a = null != t.customData || t.type == y.EIP712_TX_TYPE,
                                    e.abrupt("return", n.gt(s) || a ? n : s);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }(x);
        t.Web3Provider = k
    },
    51460: function(e, t, r) {
        r.d(t, {
            I: function() {
                return i
            }
        });
        var n = r(74175);
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.priority
              , r = e.stallTimeout
              , i = e.weight;
            return function(e) {
                return e.rpcUrls.default.http[0] ? {
                    chain: e,
                    provider: function() {
                        var s, a, o = new n.c(e.rpcUrls.default.http[0],{
                            chainId: e.id,
                            name: e.network,
                            ensAddress: null === (s = e.contracts) || void 0 === s || null === (a = s.ensRegistry) || void 0 === a ? void 0 : a.address
                        });
                        return Object.assign(o, {
                            priority: t,
                            stallTimeout: r,
                            weight: i
                        })
                    }
                } : null
            }
        }
    }
}]);
