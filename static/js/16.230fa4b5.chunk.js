/*!For license information please see 16.230fa4b5.chunk.js.LICENSE.txt*/
"use strict";
(self.webpackChunksyncswap = self.webpackChunksyncswap || []).push([[16], {
    44016: function(t, e, n) {
        n.r(e),
        n.d(e, {
            W3mAccountButton: function() {
                return lc
            },
            W3mConnectButton: function() {
                return Lc
            },
            W3mCoreButton: function() {
                return Fc
            },
            W3mModal: function() {
                return ss
            },
            W3mNetworkSwitch: function() {
                return vs
            },
            W3mQrCode: function() {
                return sl
            }
        });
        var r, i, a = n(97326), o = n(4942), l = n(74165), c = n(15861), s = n(93433), u = n(15671), d = n(43144), h = n(60136), m = n(29388), v = n(30168), p = n(29439), f = n(37762), w = n(98737), g = window, b = g.ShadowRoot && (void 0 === g.ShadyCSS || g.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype, y = Symbol(), x = new WeakMap, k = function() {
            function t(e, n, r) {
                if ((0,
                u.Z)(this, t),
                this._$cssResult$ = !0,
                r !== y)
                    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e,
                this.t = n
            }
            return (0,
            d.Z)(t, [{
                key: "styleSheet",
                get: function() {
                    var t = this.o
                      , e = this.t;
                    if (b && void 0 === t) {
                        var n = void 0 !== e && 1 === e.length;
                        n && (t = x.get(e)),
                        void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
                        n && x.set(e, t))
                    }
                    return t
                }
            }, {
                key: "toString",
                value: function() {
                    return this.cssText
                }
            }]),
            t
        }(), Z = function(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                n[r - 1] = arguments[r];
            var i = 1 === t.length ? t[0] : n.reduce((function(e, n, r) {
                return e + function(t) {
                    if (!0 === t._$cssResult$)
                        return t.cssText;
                    if ("number" == typeof t)
                        return t;
                    throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                }(n) + t[r + 1]
            }
            ), t[0]);
            return new k(i,t,y)
        }, C = b ? function(t) {
            return t
        }
        : function(t) {
            return t instanceof CSSStyleSheet ? function(t) {
                var e, n = "", r = (0,
                f.Z)(t.cssRules);
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        n += e.value.cssText
                    }
                } catch (i) {
                    r.e(i)
                } finally {
                    r.f()
                }
                return function(t) {
                    return new k("string" == typeof t ? t : t + "",void 0,y)
                }(n)
            }(t) : t
        }
        , A = window, O = A.trustedTypes, E = O ? O.emptyScript : "", I = A.reactiveElementPolyfillSupport, _ = {
            toAttribute: function(t, e) {
                switch (e) {
                case Boolean:
                    t = t ? E : null;
                    break;
                case Object:
                case Array:
                    t = null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute: function(t, e) {
                var n = t;
                switch (e) {
                case Boolean:
                    n = null !== t;
                    break;
                case Number:
                    n = null === t ? null : Number(t);
                    break;
                case Object:
                case Array:
                    try {
                        n = JSON.parse(t)
                    } catch (t) {
                        n = null
                    }
                }
                return n
            }
        }, P = function(t, e) {
            return e !== t && (e == e || t == t)
        }, j = {
            attribute: !0,
            type: String,
            converter: _,
            reflect: !1,
            hasChanged: P
        }, M = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this))._$Ei = new Map,
                t.isUpdatePending = !1,
                t.hasUpdated = !1,
                t._$El = null,
                t.u(),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "u",
                value: function() {
                    var t, e = this;
                    this._$E_ = new Promise((function(t) {
                        return e.enableUpdating = t
                    }
                    )),
                    this._$AL = new Map,
                    this._$Eg(),
                    this.requestUpdate(),
                    null === (t = this.constructor.h) || void 0 === t || t.forEach((function(t) {
                        return t(e)
                    }
                    ))
                }
            }, {
                key: "addController",
                value: function(t) {
                    var e, n;
                    (null !== (e = this._$ES) && void 0 !== e ? e : this._$ES = []).push(t),
                    void 0 !== this.renderRoot && this.isConnected && (null === (n = t.hostConnected) || void 0 === n || n.call(t))
                }
            }, {
                key: "removeController",
                value: function(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.splice(this._$ES.indexOf(t) >>> 0, 1)
                }
            }, {
                key: "_$Eg",
                value: function() {
                    var t = this;
                    this.constructor.elementProperties.forEach((function(e, n) {
                        t.hasOwnProperty(n) && (t._$Ei.set(n, t[n]),
                        delete t[n])
                    }
                    ))
                }
            }, {
                key: "createRenderRoot",
                value: function() {
                    var t, e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                    return function(t, e) {
                        b ? t.adoptedStyleSheets = e.map((function(t) {
                            return t instanceof CSSStyleSheet ? t : t.styleSheet
                        }
                        )) : e.forEach((function(e) {
                            var n = document.createElement("style")
                              , r = g.litNonce;
                            void 0 !== r && n.setAttribute("nonce", r),
                            n.textContent = e.cssText,
                            t.appendChild(n)
                        }
                        ))
                    }(e, this.constructor.elementStyles),
                    e
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var t;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
                    this.enableUpdating(!0),
                    null === (t = this._$ES) || void 0 === t || t.forEach((function(t) {
                        var e;
                        return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
                    }
                    ))
                }
            }, {
                key: "enableUpdating",
                value: function(t) {}
            }, {
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null === (t = this._$ES) || void 0 === t || t.forEach((function(t) {
                        var e;
                        return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
                    }
                    ))
                }
            }, {
                key: "attributeChangedCallback",
                value: function(t, e, n) {
                    this._$AK(t, n)
                }
            }, {
                key: "_$EO",
                value: function(t, e) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j, i = this.constructor._$Ep(t, r);
                    if (void 0 !== i && !0 === r.reflect) {
                        var a = (void 0 !== (null === (n = r.converter) || void 0 === n ? void 0 : n.toAttribute) ? r.converter : _).toAttribute(e, r.type);
                        this._$El = t,
                        null == a ? this.removeAttribute(i) : this.setAttribute(i, a),
                        this._$El = null
                    }
                }
            }, {
                key: "_$AK",
                value: function(t, e) {
                    var n, r = this.constructor, i = r._$Ev.get(t);
                    if (void 0 !== i && this._$El !== i) {
                        var a = r.getPropertyOptions(i)
                          , o = "function" == typeof a.converter ? {
                            fromAttribute: a.converter
                        } : void 0 !== (null === (n = a.converter) || void 0 === n ? void 0 : n.fromAttribute) ? a.converter : _;
                        this._$El = i,
                        this[i] = o.fromAttribute(e, a.type),
                        this._$El = null
                    }
                }
            }, {
                key: "requestUpdate",
                value: function(t, e, n) {
                    var r = !0;
                    void 0 !== t && (((n = n || this.constructor.getPropertyOptions(t)).hasChanged || P)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e),
                    !0 === n.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map),
                    this._$EC.set(t, n))) : r = !1),
                    !this.isUpdatePending && r && (this._$E_ = this._$Ej())
                }
            }, {
                key: "_$Ej",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.isUpdatePending = !0,
                                    t.prev = 1,
                                    t.next = 4,
                                    this._$E_;
                                case 4:
                                    t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6,
                                    t.t0 = t.catch(1),
                                    Promise.reject(t.t0);
                                case 9:
                                    if (e = this.scheduleUpdate(),
                                    t.t1 = null != e,
                                    !t.t1) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 14,
                                    e;
                                case 14:
                                    return t.abrupt("return", !this.isUpdatePending);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[1, 6]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "scheduleUpdate",
                value: function() {
                    return this.performUpdate()
                }
            }, {
                key: "performUpdate",
                value: function() {
                    var t, e = this;
                    if (this.isUpdatePending) {
                        this.hasUpdated,
                        this._$Ei && (this._$Ei.forEach((function(t, n) {
                            return e[n] = t
                        }
                        )),
                        this._$Ei = void 0);
                        var n = !1
                          , r = this._$AL;
                        try {
                            (n = this.shouldUpdate(r)) ? (this.willUpdate(r),
                            null === (t = this._$ES) || void 0 === t || t.forEach((function(t) {
                                var e;
                                return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                            }
                            )),
                            this.update(r)) : this._$Ek()
                        } catch (t) {
                            throw n = !1,
                            this._$Ek(),
                            t
                        }
                        n && this._$AE(r)
                    }
                }
            }, {
                key: "willUpdate",
                value: function(t) {}
            }, {
                key: "_$AE",
                value: function(t) {
                    var e;
                    null === (e = this._$ES) || void 0 === e || e.forEach((function(t) {
                        var e;
                        return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
                    }
                    )),
                    this.hasUpdated || (this.hasUpdated = !0,
                    this.firstUpdated(t)),
                    this.updated(t)
                }
            }, {
                key: "_$Ek",
                value: function() {
                    this._$AL = new Map,
                    this.isUpdatePending = !1
                }
            }, {
                key: "updateComplete",
                get: function() {
                    return this.getUpdateComplete()
                }
            }, {
                key: "getUpdateComplete",
                value: function() {
                    return this._$E_
                }
            }, {
                key: "shouldUpdate",
                value: function(t) {
                    return !0
                }
            }, {
                key: "update",
                value: function(t) {
                    var e = this;
                    void 0 !== this._$EC && (this._$EC.forEach((function(t, n) {
                        return e._$EO(n, e[n], t)
                    }
                    )),
                    this._$EC = void 0),
                    this._$Ek()
                }
            }, {
                key: "updated",
                value: function(t) {}
            }, {
                key: "firstUpdated",
                value: function(t) {}
            }], [{
                key: "addInitializer",
                value: function(t) {
                    var e;
                    this.finalize(),
                    (null !== (e = this.h) && void 0 !== e ? e : this.h = []).push(t)
                }
            }, {
                key: "observedAttributes",
                get: function() {
                    var t = this;
                    this.finalize();
                    var e = [];
                    return this.elementProperties.forEach((function(n, r) {
                        var i = t._$Ep(r, n);
                        void 0 !== i && (t._$Ev.set(i, r),
                        e.push(i))
                    }
                    )),
                    e
                }
            }, {
                key: "createProperty",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j;
                    if (e.state && (e.attribute = !1),
                    this.finalize(),
                    this.elementProperties.set(t, e),
                    !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                        var n = "symbol" == typeof t ? Symbol() : "__" + t
                          , r = this.getPropertyDescriptor(t, n, e);
                        void 0 !== r && Object.defineProperty(this.prototype, t, r)
                    }
                }
            }, {
                key: "getPropertyDescriptor",
                value: function(t, e, n) {
                    return {
                        get: function() {
                            return this[e]
                        },
                        set: function(r) {
                            var i = this[t];
                            this[e] = r,
                            this.requestUpdate(t, i, n)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
            }, {
                key: "getPropertyOptions",
                value: function(t) {
                    return this.elementProperties.get(t) || j
                }
            }, {
                key: "finalize",
                value: function() {
                    if (this.hasOwnProperty("finalized"))
                        return !1;
                    this.finalized = !0;
                    var t = Object.getPrototypeOf(this);
                    if (t.finalize(),
                    void 0 !== t.h && (this.h = (0,
                    s.Z)(t.h)),
                    this.elementProperties = new Map(t.elementProperties),
                    this._$Ev = new Map,
                    this.hasOwnProperty("properties")) {
                        var e, n = this.properties, r = [].concat((0,
                        s.Z)(Object.getOwnPropertyNames(n)), (0,
                        s.Z)(Object.getOwnPropertySymbols(n))), i = (0,
                        f.Z)(r);
                        try {
                            for (i.s(); !(e = i.n()).done; ) {
                                var a = e.value;
                                this.createProperty(a, n[a])
                            }
                        } catch (o) {
                            i.e(o)
                        } finally {
                            i.f()
                        }
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles),
                    !0
                }
            }, {
                key: "finalizeStyles",
                value: function(t) {
                    var e = [];
                    if (Array.isArray(t)) {
                        var n, r = new Set(t.flat(1 / 0).reverse()), i = (0,
                        f.Z)(r);
                        try {
                            for (i.s(); !(n = i.n()).done; ) {
                                var a = n.value;
                                e.unshift(C(a))
                            }
                        } catch (o) {
                            i.e(o)
                        } finally {
                            i.f()
                        }
                    } else
                        void 0 !== t && e.push(C(t));
                    return e
                }
            }, {
                key: "_$Ep",
                value: function(t, e) {
                    var n = e.attribute;
                    return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof t ? t.toLowerCase() : void 0
                }
            }]),
            n
        }((0,
        w.Z)(HTMLElement));
        M.finalized = !0,
        M.elementProperties = new Map,
        M.elementStyles = [],
        M.shadowRootOptions = {
            mode: "open"
        },
        null == I || I({
            ReactiveElement: M
        }),
        (null !== (r = A.reactiveElementVersions) && void 0 !== r ? r : A.reactiveElementVersions = []).push("1.6.1");
        var T = window
          , W = T.trustedTypes
          , S = W ? W.createPolicy("lit-html", {
            createHTML: function(t) {
                return t
            }
        }) : void 0
          , D = "$lit$"
          , L = "lit$".concat((Math.random() + "").slice(9), "$")
          , R = "?" + L
          , N = "<".concat(R, ">")
          , $ = document
          , z = function() {
            return $.createComment("")
        }
          , H = function(t) {
            return null === t || "object" != typeof t && "function" != typeof t
        }
          , V = Array.isArray
          , U = function(t) {
            return V(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator])
        }
          , B = "[ \t\n\f\r]"
          , F = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
          , G = /-->/g
          , q = />/g
          , K = RegExp(">|".concat(B, "(?:([^\\s\"'>=/]+)(").concat(B, "*=").concat(B, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g")
          , Y = /'/g
          , X = /"/g
          , Q = /^(?:script|style|textarea|title)$/i
          , J = function(t) {
            return function(e) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                    r[i - 1] = arguments[i];
                return {
                    _$litType$: t,
                    strings: e,
                    values: r
                }
            }
        }
          , tt = J(1)
          , et = J(2)
          , nt = Symbol.for("lit-noChange")
          , rt = Symbol.for("lit-nothing")
          , it = new WeakMap
          , at = $.createTreeWalker($, 129, null, !1)
          , ot = function(t, e) {
            for (var n, r = t.length - 1, i = [], a = 2 === e ? "<svg>" : "", o = F, l = 0; l < r; l++) {
                for (var c = t[l], s = void 0, u = void 0, d = -1, h = 0; h < c.length && (o.lastIndex = h,
                null !== (u = o.exec(c))); )
                    h = o.lastIndex,
                    o === F ? "!--" === u[1] ? o = G : void 0 !== u[1] ? o = q : void 0 !== u[2] ? (Q.test(u[2]) && (n = RegExp("</" + u[2], "g")),
                    o = K) : void 0 !== u[3] && (o = K) : o === K ? ">" === u[0] ? (o = null != n ? n : F,
                    d = -1) : void 0 === u[1] ? d = -2 : (d = o.lastIndex - u[2].length,
                    s = u[1],
                    o = void 0 === u[3] ? K : '"' === u[3] ? X : Y) : o === X || o === Y ? o = K : o === G || o === q ? o = F : (o = K,
                    n = void 0);
                var m = o === K && t[l + 1].startsWith("/>") ? " " : "";
                a += o === F ? c + N : d >= 0 ? (i.push(s),
                c.slice(0, d) + D + c.slice(d) + L + m) : c + L + (-2 === d ? (i.push(void 0),
                l) : m)
            }
            var v = a + (t[r] || "<?>") + (2 === e ? "</svg>" : "");
            if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
                throw Error("invalid template strings array");
            return [void 0 !== S ? S.createHTML(v) : v, i]
        }
          , lt = function() {
            function t(e, n) {
                var r, i = e.strings, a = e._$litType$;
                (0,
                u.Z)(this, t),
                this.parts = [];
                var o = 0
                  , l = 0
                  , c = i.length - 1
                  , d = this.parts
                  , h = ot(i, a)
                  , m = (0,
                p.Z)(h, 2)
                  , v = m[0]
                  , w = m[1];
                if (this.el = t.createElement(v, n),
                at.currentNode = this.el.content,
                2 === a) {
                    var g = this.el.content
                      , b = g.firstChild;
                    b.remove(),
                    g.append.apply(g, (0,
                    s.Z)(b.childNodes))
                }
                for (; null !== (r = at.nextNode()) && d.length < c; ) {
                    if (1 === r.nodeType) {
                        if (r.hasAttributes()) {
                            var y, x = [], k = (0,
                            f.Z)(r.getAttributeNames());
                            try {
                                for (k.s(); !(y = k.n()).done; ) {
                                    var Z = y.value;
                                    if (Z.endsWith(D) || Z.startsWith(L)) {
                                        var C = w[l++];
                                        if (x.push(Z),
                                        void 0 !== C) {
                                            var A = r.getAttribute(C.toLowerCase() + D).split(L)
                                              , O = /([.?@])?(.*)/.exec(C);
                                            d.push({
                                                type: 1,
                                                index: o,
                                                name: O[2],
                                                strings: A,
                                                ctor: "." === O[1] ? ht : "?" === O[1] ? vt : "@" === O[1] ? pt : dt
                                            })
                                        } else
                                            d.push({
                                                type: 6,
                                                index: o
                                            })
                                    }
                                }
                            } catch (S) {
                                k.e(S)
                            } finally {
                                k.f()
                            }
                            for (var E = 0, I = x; E < I.length; E++) {
                                var _ = I[E];
                                r.removeAttribute(_)
                            }
                        }
                        if (Q.test(r.tagName)) {
                            var P = r.textContent.split(L)
                              , j = P.length - 1;
                            if (j > 0) {
                                r.textContent = W ? W.emptyScript : "";
                                for (var M = 0; M < j; M++)
                                    r.append(P[M], z()),
                                    at.nextNode(),
                                    d.push({
                                        type: 2,
                                        index: ++o
                                    });
                                r.append(P[j], z())
                            }
                        }
                    } else if (8 === r.nodeType)
                        if (r.data === R)
                            d.push({
                                type: 2,
                                index: o
                            });
                        else
                            for (var T = -1; -1 !== (T = r.data.indexOf(L, T + 1)); )
                                d.push({
                                    type: 7,
                                    index: o
                                }),
                                T += L.length - 1;
                    o++
                }
            }
            return (0,
            d.Z)(t, null, [{
                key: "createElement",
                value: function(t, e) {
                    var n = $.createElement("template");
                    return n.innerHTML = t,
                    n
                }
            }]),
            t
        }();
        function ct(t, e) {
            var n, r, i, a, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t, l = arguments.length > 3 ? arguments[3] : void 0;
            if (e === nt)
                return e;
            var c = void 0 !== l ? null === (n = o._$Co) || void 0 === n ? void 0 : n[l] : o._$Cl
              , s = H(e) ? void 0 : e._$litDirective$;
            return (null == c ? void 0 : c.constructor) !== s && (null === (r = null == c ? void 0 : c._$AO) || void 0 === r || r.call(c, !1),
            void 0 === s ? c = void 0 : (c = new s(t))._$AT(t, o, l),
            void 0 !== l ? (null !== (i = (a = o)._$Co) && void 0 !== i ? i : a._$Co = [])[l] = c : o._$Cl = c),
            void 0 !== c && (e = ct(t, c._$AS(t, e.values), c, l)),
            e
        }
        var st = function() {
            function t(e, n) {
                (0,
                u.Z)(this, t),
                this._$AV = [],
                this._$AN = void 0,
                this._$AD = e,
                this._$AM = n
            }
            return (0,
            d.Z)(t, [{
                key: "parentNode",
                get: function() {
                    return this._$AM.parentNode
                }
            }, {
                key: "_$AU",
                get: function() {
                    return this._$AM._$AU
                }
            }, {
                key: "u",
                value: function(t) {
                    var e, n = this._$AD, r = n.el.content, i = n.parts, a = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : $).importNode(r, !0);
                    at.currentNode = a;
                    for (var o = at.nextNode(), l = 0, c = 0, s = i[0]; void 0 !== s; ) {
                        if (l === s.index) {
                            var u = void 0;
                            2 === s.type ? u = new ut(o,o.nextSibling,this,t) : 1 === s.type ? u = new s.ctor(o,s.name,s.strings,this,t) : 6 === s.type && (u = new ft(o,this,t)),
                            this._$AV.push(u),
                            s = i[++c]
                        }
                        l !== (null == s ? void 0 : s.index) && (o = at.nextNode(),
                        l++)
                    }
                    return a
                }
            }, {
                key: "v",
                value: function(t) {
                    var e, n = 0, r = (0,
                    f.Z)(this._$AV);
                    try {
                        for (r.s(); !(e = r.n()).done; ) {
                            var i = e.value;
                            void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, n),
                            n += i.strings.length - 2) : i._$AI(t[n])),
                            n++
                        }
                    } catch (a) {
                        r.e(a)
                    } finally {
                        r.f()
                    }
                }
            }]),
            t
        }()
          , ut = function() {
            function t(e, n, r, i) {
                var a;
                (0,
                u.Z)(this, t),
                this.type = 2,
                this._$AH = rt,
                this._$AN = void 0,
                this._$AA = e,
                this._$AB = n,
                this._$AM = r,
                this.options = i,
                this._$Cp = null === (a = null == i ? void 0 : i.isConnected) || void 0 === a || a
            }
            return (0,
            d.Z)(t, [{
                key: "_$AU",
                get: function() {
                    var t, e;
                    return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== e ? e : this._$Cp
                }
            }, {
                key: "parentNode",
                get: function() {
                    var t = this._$AA.parentNode
                      , e = this._$AM;
                    return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode),
                    t
                }
            }, {
                key: "startNode",
                get: function() {
                    return this._$AA
                }
            }, {
                key: "endNode",
                get: function() {
                    return this._$AB
                }
            }, {
                key: "_$AI",
                value: function(t) {
                    t = ct(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this),
                    H(t) ? t === rt || null == t || "" === t ? (this._$AH !== rt && this._$AR(),
                    this._$AH = rt) : t !== this._$AH && t !== nt && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : U(t) ? this.T(t) : this._(t)
                }
            }, {
                key: "k",
                value: function(t) {
                    return this._$AA.parentNode.insertBefore(t, this._$AB)
                }
            }, {
                key: "$",
                value: function(t) {
                    this._$AH !== t && (this._$AR(),
                    this._$AH = this.k(t))
                }
            }, {
                key: "_",
                value: function(t) {
                    this._$AH !== rt && H(this._$AH) ? this._$AA.nextSibling.data = t : this.$($.createTextNode(t)),
                    this._$AH = t
                }
            }, {
                key: "g",
                value: function(t) {
                    var e, n = t.values, r = t._$litType$, i = "number" == typeof r ? this._$AC(t) : (void 0 === r.el && (r.el = lt.createElement(r.h, this.options)),
                    r);
                    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === i)
                        this._$AH.v(n);
                    else {
                        var a = new st(i,this)
                          , o = a.u(this.options);
                        a.v(n),
                        this.$(o),
                        this._$AH = a
                    }
                }
            }, {
                key: "_$AC",
                value: function(t) {
                    var e = it.get(t.strings);
                    return void 0 === e && it.set(t.strings, e = new lt(t)),
                    e
                }
            }, {
                key: "T",
                value: function(e) {
                    V(this._$AH) || (this._$AH = [],
                    this._$AR());
                    var n, r, i = this._$AH, a = 0, o = (0,
                    f.Z)(e);
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var l = r.value;
                            a === i.length ? i.push(n = new t(this.k(z()),this.k(z()),this,this.options)) : n = i[a],
                            n._$AI(l),
                            a++
                        }
                    } catch (c) {
                        o.e(c)
                    } finally {
                        o.f()
                    }
                    a < i.length && (this._$AR(n && n._$AB.nextSibling, a),
                    i.length = a)
                }
            }, {
                key: "_$AR",
                value: function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling, n = arguments.length > 1 ? arguments[1] : void 0;
                    for (null === (t = this._$AP) || void 0 === t || t.call(this, !1, !0, n); e && e !== this._$AB; ) {
                        var r = e.nextSibling;
                        e.remove(),
                        e = r
                    }
                }
            }, {
                key: "setConnected",
                value: function(t) {
                    var e;
                    void 0 === this._$AM && (this._$Cp = t,
                    null === (e = this._$AP) || void 0 === e || e.call(this, t))
                }
            }]),
            t
        }()
          , dt = function() {
            function t(e, n, r, i, a) {
                (0,
                u.Z)(this, t),
                this.type = 1,
                this._$AH = rt,
                this._$AN = void 0,
                this.element = e,
                this.name = n,
                this._$AM = i,
                this.options = a,
                r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String),
                this.strings = r) : this._$AH = rt
            }
            return (0,
            d.Z)(t, [{
                key: "tagName",
                get: function() {
                    return this.element.tagName
                }
            }, {
                key: "_$AU",
                get: function() {
                    return this._$AM._$AU
                }
            }, {
                key: "_$AI",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this
                      , n = arguments.length > 2 ? arguments[2] : void 0
                      , r = arguments.length > 3 ? arguments[3] : void 0
                      , i = this.strings
                      , a = !1;
                    if (void 0 === i)
                        t = ct(this, t, e, 0),
                        (a = !H(t) || t !== this._$AH && t !== nt) && (this._$AH = t);
                    else {
                        var o, l, c = t;
                        for (t = i[0],
                        o = 0; o < i.length - 1; o++)
                            (l = ct(this, c[n + o], e, o)) === nt && (l = this._$AH[o]),
                            a || (a = !H(l) || l !== this._$AH[o]),
                            l === rt ? t = rt : t !== rt && (t += (null != l ? l : "") + i[o + 1]),
                            this._$AH[o] = l
                    }
                    a && !r && this.j(t)
                }
            }, {
                key: "j",
                value: function(t) {
                    t === rt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
                }
            }]),
            t
        }()
          , ht = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).type = 3,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "j",
                value: function(t) {
                    this.element[this.name] = t === rt ? void 0 : t
                }
            }]),
            n
        }(dt)
          , mt = W ? W.emptyScript : ""
          , vt = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).type = 4,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "j",
                value: function(t) {
                    t && t !== rt ? this.element.setAttribute(this.name, mt) : this.element.removeAttribute(this.name)
                }
            }]),
            n
        }(dt)
          , pt = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n(t, r, i, a, o) {
                var l;
                return (0,
                u.Z)(this, n),
                (l = e.call(this, t, r, i, a, o)).type = 5,
                l
            }
            return (0,
            d.Z)(n, [{
                key: "_$AI",
                value: function(t) {
                    var e;
                    if ((t = null !== (e = ct(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, 0)) && void 0 !== e ? e : rt) !== nt) {
                        var n = this._$AH
                          , r = t === rt && n !== rt || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive
                          , i = t !== rt && (n === rt || r);
                        r && this.element.removeEventListener(this.name, this, n),
                        i && this.element.addEventListener(this.name, this, t),
                        this._$AH = t
                    }
                }
            }, {
                key: "handleEvent",
                value: function(t) {
                    var e, n;
                    "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== n ? n : this.element, t) : this._$AH.handleEvent(t)
                }
            }]),
            n
        }(dt)
          , ft = function() {
            function t(e, n, r) {
                (0,
                u.Z)(this, t),
                this.element = e,
                this.type = 6,
                this._$AN = void 0,
                this._$AM = n,
                this.options = r
            }
            return (0,
            d.Z)(t, [{
                key: "_$AU",
                get: function() {
                    return this._$AM._$AU
                }
            }, {
                key: "_$AI",
                value: function(t) {
                    ct(this, t)
                }
            }]),
            t
        }()
          , wt = T.litHtmlPolyfillSupport;
        null == wt || wt(lt, ut),
        (null !== (i = T.litHtmlVersions) && void 0 !== i ? i : T.litHtmlVersions = []).push("2.7.2");
        var gt, bt, yt = n(11752), xt = n(61120), kt = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).renderOptions = {
                    host: (0,
                    a.Z)(t)
                },
                t._$Do = void 0,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "createRenderRoot",
                value: function() {
                    var t, e, r = (0,
                    yt.Z)((0,
                    xt.Z)(n.prototype), "createRenderRoot", this).call(this);
                    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild),
                    r
                }
            }, {
                key: "update",
                value: function(t) {
                    var e = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
                    (0,
                    yt.Z)((0,
                    xt.Z)(n.prototype), "update", this).call(this, t),
                    this._$Do = function(t, e, n) {
                        var r, i, a = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : e, o = a._$litPart$;
                        if (void 0 === o) {
                            var l = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : null;
                            a._$litPart$ = o = new ut(e.insertBefore(z(), l),l,void 0,null != n ? n : {})
                        }
                        return o._$AI(t),
                        o
                    }(e, this.renderRoot, this.renderOptions)
                }
            }, {
                key: "connectedCallback",
                value: function() {
                    var t;
                    (0,
                    yt.Z)((0,
                    xt.Z)(n.prototype), "connectedCallback", this).call(this),
                    null === (t = this._$Do) || void 0 === t || t.setConnected(!0)
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    (0,
                    yt.Z)((0,
                    xt.Z)(n.prototype), "disconnectedCallback", this).call(this),
                    null === (t = this._$Do) || void 0 === t || t.setConnected(!1)
                }
            }, {
                key: "render",
                value: function() {
                    return nt
                }
            }]),
            n
        }(M);
        kt.finalized = !0,
        kt._$litElement$ = !0,
        null === (gt = globalThis.litElementHydrateSupport) || void 0 === gt || gt.call(globalThis, {
            LitElement: kt
        });
        var Zt = globalThis.litElementPolyfillSupport;
        null == Zt || Zt({
            LitElement: kt
        });
        (null !== (bt = globalThis.litElementVersions) && void 0 !== bt ? bt : globalThis.litElementVersions = []).push("3.3.2");
        var Ct, At = function(t) {
            return function(e) {
                return "function" == typeof e ? function(t, e) {
                    return customElements.define(t, e),
                    e
                }(t, e) : function(t, e) {
                    return {
                        kind: e.kind,
                        elements: e.elements,
                        finisher: function(e) {
                            customElements.define(t, e)
                        }
                    }
                }(t, e)
            }
        }, Ot = n(1413), Et = function(t, e) {
            return "method" === e.kind && e.descriptor && !("value"in e.descriptor) ? (0,
            Ot.Z)((0,
            Ot.Z)({}, e), {}, {
                finisher: function(n) {
                    n.createProperty(e.key, t)
                }
            }) : {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: e.key,
                initializer: function() {
                    "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
                },
                finisher: function(n) {
                    n.createProperty(e.key, t)
                }
            }
        };
        function It(t) {
            return function(e, n) {
                return void 0 !== n ? function(t, e, n) {
                    e.constructor.createProperty(n, t)
                }(t, e, n) : Et(t, e)
            }
        }
        function _t(t) {
            return It((0,
            Ot.Z)((0,
            Ot.Z)({}, t), {}, {
                state: !0
            }))
        }
        null === (Ct = window.HTMLSlotElement) || void 0 === Ct || Ct.prototype.assignedElements;
        var Pt = n(53763)
          , jt = n(82963)
          , Mt = 1
          , Tt = function() {
            function t(e) {
                (0,
                u.Z)(this, t)
            }
            return (0,
            d.Z)(t, [{
                key: "_$AU",
                get: function() {
                    return this._$AM._$AU
                }
            }, {
                key: "_$AT",
                value: function(t, e, n) {
                    this._$Ct = t,
                    this._$AM = e,
                    this._$Ci = n
                }
            }, {
                key: "_$AS",
                value: function(t, e) {
                    return this.update(t, e)
                }
            }, {
                key: "update",
                value: function(t, e) {
                    return this.render.apply(this, (0,
                    s.Z)(e))
                }
            }]),
            t
        }()
          , Wt = function(t) {
            return function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return {
                    _$litDirective$: t,
                    values: n
                }
            }
        }(function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n(t) {
                var r, i;
                if ((0,
                u.Z)(this, n),
                r = e.call(this, t),
                t.type !== Mt || "class" !== t.name || (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2)
                    throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
                return (0,
                jt.Z)(r)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function(t) {
                    return " " + Object.keys(t).filter((function(e) {
                        return t[e]
                    }
                    )).join(" ") + " "
                }
            }, {
                key: "update",
                value: function(t, e) {
                    var n, r, i = this, a = (0,
                    p.Z)(e, 1)[0];
                    if (void 0 === this.it) {
                        for (var o in this.it = new Set,
                        void 0 !== t.strings && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((function(t) {
                            return "" !== t
                        }
                        )))),
                        a)
                            a[o] && !(null === (n = this.nt) || void 0 === n ? void 0 : n.has(o)) && this.it.add(o);
                        return this.render(a)
                    }
                    var l = t.element.classList;
                    for (var c in this.it.forEach((function(t) {
                        t in a || (l.remove(t),
                        i.it.delete(t))
                    }
                    )),
                    a) {
                        var s = !!a[c];
                        s === this.it.has(c) || (null === (r = this.nt) || void 0 === r ? void 0 : r.has(c)) || (s ? (l.add(c),
                        this.it.add(c)) : (l.remove(c),
                        this.it.delete(c)))
                    }
                    return nt
                }
            }]),
            n
        }(Tt))
          , St = {
            duration: .3,
            delay: 0,
            endDelay: 0,
            repeat: 0,
            easing: "ease"
        }
          , Dt = {
            ms: function(t) {
                return 1e3 * t
            },
            s: function(t) {
                return t / 1e3
            }
        }
          , Lt = function() {}
          , Rt = function(t) {
            return t
        };
        function Nt(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (t && "finished" !== t.playState)
                try {
                    t.stop ? t.stop() : (e && t.commitStyles(),
                    t.cancel())
                } catch (n) {}
        }
        var $t = function(t) {
            return t()
        }
          , zt = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : St.duration;
            return new Proxy({
                animations: t.map($t).filter(Boolean),
                duration: n,
                options: e
            },Ht)
        }
          , Ht = {
            get: function(t, e) {
                var n = t.animations[0];
                switch (e) {
                case "duration":
                    return t.duration;
                case "currentTime":
                    return Dt.s((null === n || void 0 === n ? void 0 : n[e]) || 0);
                case "playbackRate":
                case "playState":
                    return null === n || void 0 === n ? void 0 : n[e];
                case "finished":
                    return t.finished || (t.finished = Promise.all(t.animations.map(Vt)).catch(Lt)),
                    t.finished;
                case "stop":
                    return function() {
                        t.animations.forEach((function(t) {
                            return Nt(t)
                        }
                        ))
                    }
                    ;
                case "forEachNative":
                    return function(e) {
                        t.animations.forEach((function(n) {
                            return e(n, t)
                        }
                        ))
                    }
                    ;
                default:
                    return "undefined" === typeof (null === n || void 0 === n ? void 0 : n[e]) ? void 0 : function() {
                        return t.animations.forEach((function(t) {
                            return t[e]()
                        }
                        ))
                    }
                }
            },
            set: function(t, e, n) {
                switch (e) {
                case "currentTime":
                    n = Dt.ms(n);
                case "currentTime":
                case "playbackRate":
                    for (var r = 0; r < t.animations.length; r++)
                        t.animations[r][e] = n;
                    return !0
                }
                return !1
            }
        }
          , Vt = function(t) {
            return t.finished
        }
          , Ut = function(t) {
            return "object" === typeof t && Boolean(t.createAnimation)
        }
          , Bt = function(t) {
            return "number" === typeof t
        }
          , Ft = function(t) {
            return Array.isArray(t) && !Bt(t[0])
        }
          , Gt = function(t, e, n) {
            return -n * t + n * e + t
        }
          , qt = function(t, e, n) {
            return e - t === 0 ? 1 : (n - t) / (e - t)
        };
        function Kt(t, e) {
            for (var n = t[t.length - 1], r = 1; r <= e; r++) {
                var i = qt(0, e, r);
                t.push(Gt(n, 1, i))
            }
        }
        var Yt = function(t, e, n) {
            var r = e - t;
            return ((n - t) % r + r) % r + t
        };
        var Xt = function(t, e, n) {
            return Math.min(Math.max(n, t), e)
        };
        function Qt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t) {
                var e = [0];
                return Kt(e, t - 1),
                e
            }(t.length)
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rt
              , r = t.length
              , i = r - e.length;
            return i > 0 && Kt(e, i),
            function(i) {
                for (var a = 0; a < r - 2 && !(i < e[a + 1]); a++)
                    ;
                var o = Xt(0, 1, qt(e[a], e[a + 1], i))
                  , l = function(t, e) {
                    return Ft(t) ? t[Yt(0, t.length, e)] : t
                }(n, a);
                return o = l(o),
                Gt(t[a], t[a + 1], o)
            }
        }
        var Jt = function(t, e, n) {
            return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
        }
          , te = 1e-7
          , ee = 12;
        function ne(t, e, n, r) {
            if (t === e && n === r)
                return Rt;
            var i = function(e) {
                return function(t, e, n, r, i) {
                    var a, o, l = 0;
                    do {
                        (a = Jt(o = e + (n - e) / 2, r, i) - t) > 0 ? n = o : e = o
                    } while (Math.abs(a) > te && ++l < ee);
                    return o
                }(e, 0, 1, t, n)
            };
            return function(t) {
                return 0 === t || 1 === t ? t : Jt(i(t), e, r)
            }
        }
        var re = function(t) {
            return "function" === typeof t
        }
          , ie = function(t) {
            return Array.isArray(t) && Bt(t[0])
        }
          , ae = {
            ease: ne(.25, .1, .25, 1),
            "ease-in": ne(.42, 0, 1, 1),
            "ease-in-out": ne(.42, 0, .58, 1),
            "ease-out": ne(0, 0, .58, 1)
        }
          , oe = /\((.*?)\)/;
        function le(t) {
            if (re(t))
                return t;
            if (ie(t))
                return ne.apply(void 0, (0,
                s.Z)(t));
            if (ae[t])
                return ae[t];
            if (t.startsWith("steps")) {
                var e = oe.exec(t);
                if (e) {
                    var n = e[1].split(",");
                    return function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
                        return function(n) {
                            var r = (n = "end" === e ? Math.min(n, .999) : Math.max(n, .001)) * t
                              , i = "end" === e ? Math.floor(r) : Math.ceil(r);
                            return Xt(0, 1, i / t)
                        }
                    }(parseFloat(n[0]), n[1].trim())
                }
            }
            return Rt
        }
        var ce = function() {
            function t(e) {
                var n = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0, 1]
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , a = i.easing
                  , o = i.duration
                  , l = void 0 === o ? St.duration : o
                  , c = i.delay
                  , s = void 0 === c ? St.delay : c
                  , d = i.endDelay
                  , h = void 0 === d ? St.endDelay : d
                  , m = i.repeat
                  , v = void 0 === m ? St.repeat : m
                  , p = i.offset
                  , f = i.direction
                  , w = void 0 === f ? "normal" : f;
                if ((0,
                u.Z)(this, t),
                this.startTime = null,
                this.rate = 1,
                this.t = 0,
                this.cancelTimestamp = null,
                this.easing = Rt,
                this.duration = 0,
                this.totalDuration = 0,
                this.repeat = 0,
                this.playState = "idle",
                this.finished = new Promise((function(t, e) {
                    n.resolve = t,
                    n.reject = e
                }
                )),
                a = a || St.easing,
                Ut(a)) {
                    var g = a.createAnimation(r);
                    a = g.easing,
                    r = g.keyframes || r,
                    l = g.duration || l
                }
                this.repeat = v,
                this.easing = Ft(a) ? Rt : le(a),
                this.updateDuration(l);
                var b = Qt(r, p, Ft(a) ? a.map(le) : Rt);
                this.tick = function(t) {
                    var r, i = 0;
                    i = void 0 !== n.pauseTime ? n.pauseTime : (t - n.startTime) * n.rate,
                    n.t = i,
                    i /= 1e3,
                    i = Math.max(i - s, 0),
                    "finished" === n.playState && void 0 === n.pauseTime && (i = n.totalDuration);
                    var a = i / n.duration
                      , o = Math.floor(a)
                      , l = a % 1;
                    !l && a >= 1 && (l = 1),
                    1 === l && o--;
                    var c = o % 2;
                    ("reverse" === w || "alternate" === w && c || "alternate-reverse" === w && !c) && (l = 1 - l);
                    var u = i >= n.totalDuration ? 1 : Math.min(l, 1)
                      , d = b(n.easing(u));
                    e(d),
                    void 0 === n.pauseTime && ("finished" === n.playState || i >= n.totalDuration + h) ? (n.playState = "finished",
                    null === (r = n.resolve) || void 0 === r || r.call(n, d)) : "idle" !== n.playState && (n.frameRequestId = requestAnimationFrame(n.tick))
                }
                ,
                this.play()
            }
            return (0,
            d.Z)(t, [{
                key: "play",
                value: function() {
                    var t = performance.now();
                    this.playState = "running",
                    void 0 !== this.pauseTime ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t),
                    this.cancelTimestamp = this.startTime,
                    this.pauseTime = void 0,
                    this.frameRequestId = requestAnimationFrame(this.tick)
                }
            }, {
                key: "pause",
                value: function() {
                    this.playState = "paused",
                    this.pauseTime = this.t
                }
            }, {
                key: "finish",
                value: function() {
                    this.playState = "finished",
                    this.tick(0)
                }
            }, {
                key: "stop",
                value: function() {
                    var t;
                    this.playState = "idle",
                    void 0 !== this.frameRequestId && cancelAnimationFrame(this.frameRequestId),
                    null === (t = this.reject) || void 0 === t || t.call(this, !1)
                }
            }, {
                key: "cancel",
                value: function() {
                    this.stop(),
                    this.tick(this.cancelTimestamp)
                }
            }, {
                key: "reverse",
                value: function() {
                    this.rate *= -1
                }
            }, {
                key: "commitStyles",
                value: function() {}
            }, {
                key: "updateDuration",
                value: function(t) {
                    this.duration = t,
                    this.totalDuration = t * (this.repeat + 1)
                }
            }, {
                key: "currentTime",
                get: function() {
                    return this.t
                },
                set: function(t) {
                    void 0 !== this.pauseTime || 0 === this.rate ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate
                }
            }, {
                key: "playbackRate",
                get: function() {
                    return this.rate
                },
                set: function(t) {
                    this.rate = t
                }
            }]),
            t
        }();
        var se = function() {
            function t() {
                (0,
                u.Z)(this, t)
            }
            return (0,
            d.Z)(t, [{
                key: "setAnimation",
                value: function(t) {
                    var e = this;
                    this.animation = t,
                    null === t || void 0 === t || t.finished.then((function() {
                        return e.clearAnimation()
                    }
                    )).catch((function() {}
                    ))
                }
            }, {
                key: "clearAnimation",
                value: function() {
                    this.animation = this.generator = void 0
                }
            }]),
            t
        }()
          , ue = new WeakMap;
        function de(t) {
            return ue.has(t) || ue.set(t, {
                transforms: [],
                values: new Map
            }),
            ue.get(t)
        }
        var he = ["", "X", "Y", "Z"]
          , me = {
            x: "translateX",
            y: "translateY",
            z: "translateZ"
        }
          , ve = {
            syntax: "<angle>",
            initialValue: "0deg",
            toDefaultUnit: function(t) {
                return t + "deg"
            }
        }
          , pe = {
            translate: {
                syntax: "<length-percentage>",
                initialValue: "0px",
                toDefaultUnit: function(t) {
                    return t + "px"
                }
            },
            rotate: ve,
            scale: {
                syntax: "<number>",
                initialValue: 1,
                toDefaultUnit: Rt
            },
            skew: ve
        }
          , fe = new Map
          , we = function(t) {
            return "--motion-".concat(t)
        }
          , ge = ["x", "y", "z"];
        ["translate", "scale", "rotate", "skew"].forEach((function(t) {
            he.forEach((function(e) {
                ge.push(t + e),
                fe.set(we(t + e), pe[t])
            }
            ))
        }
        ));
        var be = function(t, e) {
            return ge.indexOf(t) - ge.indexOf(e)
        }
          , ye = new Set(ge)
          , xe = function(t) {
            return ye.has(t)
        }
          , ke = function(t, e) {
            me[e] && (e = me[e]);
            var n, r, i = de(t).transforms;
            r = e,
            -1 === (n = i).indexOf(r) && n.push(r),
            t.style.transform = Ze(i)
        }
          , Ze = function(t) {
            return t.sort(be).reduce(Ce, "").trim()
        }
          , Ce = function(t, e) {
            return "".concat(t, " ").concat(e, "(var(").concat(we(e), "))")
        }
          , Ae = function(t) {
            return t.startsWith("--")
        }
          , Oe = new Set;
        var Ee = function(t, e) {
            return document.createElement("div").animate(t, e)
        }
          , Ie = {
            cssRegisterProperty: function() {
                return "undefined" !== typeof CSS && Object.hasOwnProperty.call(CSS, "registerProperty")
            },
            waapi: function() {
                return Object.hasOwnProperty.call(Element.prototype, "animate")
            },
            partialKeyframes: function() {
                try {
                    Ee({
                        opacity: [1]
                    })
                } catch (t) {
                    return !1
                }
                return !0
            },
            finished: function() {
                return Boolean(Ee({
                    opacity: [0, 1]
                }, {
                    duration: .001
                }).finished)
            },
            linearEasing: function() {
                try {
                    Ee({
                        opacity: 0
                    }, {
                        easing: "linear(0, 1)"
                    })
                } catch (t) {
                    return !1
                }
                return !0
            }
        }
          , _e = {}
          , Pe = {}
          , je = function(t) {
            Pe[t] = function() {
                return void 0 === _e[t] && (_e[t] = Ie[t]()),
                _e[t]
            }
        };
        for (var Me in Ie)
            je(Me);
        var Te = function(t, e) {
            return re(t) ? Pe.linearEasing() ? "linear(".concat(function(t, e) {
                for (var n = "", r = Math.round(e / .015), i = 0; i < r; i++)
                    n += t(qt(0, r - 1, i)) + ", ";
                return n.substring(0, n.length - 2)
            }(t, e), ")") : St.easing : ie(t) ? We(t) : t
        }
          , We = function(t) {
            var e = (0,
            p.Z)(t, 4)
              , n = e[0]
              , r = e[1]
              , i = e[2]
              , a = e[3];
            return "cubic-bezier(".concat(n, ", ").concat(r, ", ").concat(i, ", ").concat(a, ")")
        };
        var Se = function(t) {
            return Array.isArray(t) ? t : [t]
        };
        function De(t) {
            return me[t] && (t = me[t]),
            xe(t) ? we(t) : t
        }
        var Le = {
            get: function(t, e) {
                e = De(e);
                var n = Ae(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
                if (!n && 0 !== n) {
                    var r = fe.get(e);
                    r && (n = r.initialValue)
                }
                return n
            },
            set: function(t, e, n) {
                e = De(e),
                Ae(e) ? t.style.setProperty(e, n) : t.style[e] = n
            }
        }
          , Re = function(t) {
            return "string" === typeof t
        };
        function Ne(t, e, n) {
            var r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = arguments.length > 4 ? arguments[4] : void 0, l = window.__MOTION_DEV_TOOLS_RECORD, c = !1 !== i.record && l, s = i.duration, u = void 0 === s ? St.duration : s, d = i.delay, h = void 0 === d ? St.delay : d, m = i.endDelay, v = void 0 === m ? St.endDelay : m, p = i.repeat, f = void 0 === p ? St.repeat : p, w = i.easing, g = void 0 === w ? St.easing : w, b = i.persist, y = void 0 !== b && b, x = i.direction, k = i.offset, Z = i.allowWebkitAcceleration, C = void 0 !== Z && Z, A = de(t), O = xe(e), E = Pe.waapi();
            O && ke(t, e);
            var I = De(e)
              , _ = function(t, e) {
                return t.has(e) || t.set(e, new se),
                t.get(e)
            }(A.values, I)
              , P = fe.get(I);
            return Nt(_.animation, !(Ut(g) && _.generator) && !1 !== i.record),
            function() {
                var s = function() {
                    var e, n;
                    return null !== (n = null !== (e = Le.get(t, I)) && void 0 !== e ? e : null === P || void 0 === P ? void 0 : P.initialValue) && void 0 !== n ? n : 0
                }
                  , d = function(t, e) {
                    for (var n = 0; n < t.length; n++)
                        null === t[n] && (t[n] = n ? t[n - 1] : e());
                    return t
                }(Se(n), s)
                  , m = function(t, e) {
                    var n, r = (null === e || void 0 === e ? void 0 : e.toDefaultUnit) || Rt, i = t[t.length - 1];
                    if (Re(i)) {
                        var a = (null === (n = i.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === n ? void 0 : n[2]) || "";
                        a && (r = function(t) {
                            return t + a
                        }
                        )
                    }
                    return r
                }(d, P);
                if (Ut(g)) {
                    var p = g.createAnimation(d, "opacity" !== e, s, I, _);
                    g = p.easing,
                    d = p.keyframes || d,
                    u = p.duration || u
                }
                if (Ae(I) && (Pe.cssRegisterProperty() ? function(t) {
                    if (!Oe.has(t)) {
                        Oe.add(t);
                        try {
                            var e = fe.has(t) ? fe.get(t) : {}
                              , n = e.syntax
                              , r = e.initialValue;
                            CSS.registerProperty({
                                name: t,
                                inherits: !1,
                                syntax: n,
                                initialValue: r
                            })
                        } catch (i) {}
                    }
                }(I) : E = !1),
                O && !Pe.linearEasing() && (re(g) || Ft(g) && g.some(re)) && (E = !1),
                E) {
                    var w;
                    P && (d = d.map((function(t) {
                        return Bt(t) ? P.toDefaultUnit(t) : t
                    }
                    ))),
                    1 !== d.length || Pe.partialKeyframes() && !c || d.unshift(s());
                    var b = {
                        delay: Dt.ms(h),
                        duration: Dt.ms(u),
                        endDelay: Dt.ms(v),
                        easing: Ft(g) ? void 0 : Te(g, u),
                        direction: x,
                        iterations: f + 1,
                        fill: "both"
                    };
                    (r = t.animate((w = {},
                    (0,
                    o.Z)(w, I, d),
                    (0,
                    o.Z)(w, "offset", k),
                    (0,
                    o.Z)(w, "easing", Ft(g) ? g.map((function(t) {
                        return Te(t, u)
                    }
                    )) : void 0),
                    w), b)).finished || (r.finished = new Promise((function(t, e) {
                        r.onfinish = t,
                        r.oncancel = e
                    }
                    )));
                    var Z = d[d.length - 1];
                    r.finished.then((function() {
                        y || (Le.set(t, I, Z),
                        r.cancel())
                    }
                    )).catch(Lt),
                    C || (r.playbackRate = 1.000001)
                } else if (a && O)
                    1 === (d = d.map((function(t) {
                        return "string" === typeof t ? parseFloat(t) : t
                    }
                    ))).length && d.unshift(parseFloat(s())),
                    r = new a((function(e) {
                        Le.set(t, I, m ? m(e) : e)
                    }
                    ),d,Object.assign(Object.assign({}, i), {
                        duration: u,
                        easing: g
                    }));
                else {
                    var A = d[d.length - 1];
                    Le.set(t, I, P && Bt(A) ? P.toDefaultUnit(A) : A)
                }
                return c && l(t, e, d, {
                    duration: u,
                    delay: h,
                    easing: g,
                    repeat: f,
                    offset: k
                }, "motion-one"),
                _.setAnimation(r),
                r
            }
        }
        var $e = function(t, e) {
            return t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t)
        };
        function ze(t, e, n) {
            return re(t) ? t(e, n) : t
        }
        var He, Ve = (He = ce,
        function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            t = function(t, e) {
                var n;
                return "string" === typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)),
                t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]),
                Array.from(t || [])
            }(t);
            var r = t.length;
            Boolean(r),
            Boolean(e);
            for (var i = [], a = 0; a < r; a++) {
                var o = t[a];
                for (var l in e) {
                    var c = $e(n, l);
                    c.delay = ze(c.delay, a, r);
                    var s = Ne(o, l, e[l], c, He);
                    i.push(s)
                }
            }
            return zt(i, n, n.duration)
        }
        );
        function Ue(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return zt([function() {
                var n = new ce(t,[0, 1],e);
                return n.finished.catch((function() {}
                )),
                n
            }
            ], e, e.duration)
        }
        function Be(t, e, n) {
            return (re(t) ? Ue : Ve)(t, e, n)
        }
        var Fe, Ge, qe, Ke, Ye, Xe, Qe, Je, tn, en, nn, rn, an, on, ln, cn, sn, un, dn, hn, mn, vn, pn, fn, wn, gn, bn, yn, xn, kn, Zn, Cn, An, On, En, In, _n, Pn, jn, Mn, Tn, Wn, Sn, Dn, Ln, Rn, Nn, $n, zn, Hn, Vn, Un, Bn, Fn, Gn, qn, Kn, Yn, Xn, Qn, Jn, tr, er, nr, rr, ir, ar, or, lr, cr, sr, ur, dr, hr, mr, vr, pr, fr, wr, gr, br, yr, xr, kr, Zr, Cr, Ar, Or, Er, Ir, _r, Pr, jr, Mr, Tr, Wr, Sr, Dr, Lr, Rr, Nr, $r, zr, Hr, Vr, Ur, Br, Fr, Gr, qr, Kr, Yr, Xr, Qr, Jr, ti, ei, ni, ri, ii, ai, oi, li, ci, si, ui, di, hi, mi, vi, pi, fi, wi, gi, bi, yi, xi, ki, Zi, Ci, Ai, Oi, Ei, Ii, _i, Pi, ji, Mi, Ti, Wi, Si, Di, Li, Ri, Ni, $i, zi, Hi, Vi, Ui, Bi, Fi, Gi, qi, Ki, Yi, Xi, Qi, Ji, ta, ea, na, ra, ia, aa, oa, la, ca, sa, ua, da, ha, ma, va, pa, fa, wa, ga, ba, ya, xa, ka, Za, Ca, Aa, Oa, Ea, Ia, _a, Pa, ja, Ma, Ta, Wa, Sa, Da, La, Ra, Na, $a = n(46316), za = Object.defineProperty, Ha = Object.getOwnPropertySymbols, Va = Object.prototype.hasOwnProperty, Ua = Object.prototype.propertyIsEnumerable, Ba = function(t, e, n) {
            return e in t ? za(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
        }, Fa = function(t, e) {
            for (var n in e || (e = {}))
                Va.call(e, n) && Ba(t, n, e[n]);
            if (Ha) {
                var r, i = (0,
                f.Z)(Ha(e));
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        n = r.value;
                        Ua.call(e, n) && Ba(t, n, e[n])
                    }
                } catch (a) {
                    i.e(a)
                } finally {
                    i.f()
                }
            }
            return t
        };
        var Ga = {
            getPreset: function(t) {
                return {
                    "--w3m-accent-color": "#3396FF",
                    "--w3m-accent-fill-color": "#FFFFFF",
                    "--w3m-z-index": "89",
                    "--w3m-background-color": "#3396FF",
                    "--w3m-background-border-radius": "8px",
                    "--w3m-container-border-radius": "30px",
                    "--w3m-wallet-icon-border-radius": "15px",
                    "--w3m-wallet-icon-large-border-radius": "30px",
                    "--w3m-wallet-icon-small-border-radius": "7px",
                    "--w3m-input-border-radius": "28px",
                    "--w3m-button-border-radius": "10px",
                    "--w3m-notification-border-radius": "36px",
                    "--w3m-secondary-button-border-radius": "28px",
                    "--w3m-icon-button-border-radius": "50%",
                    "--w3m-button-hover-highlight-border-radius": "10px",
                    "--w3m-text-big-bold-size": "20px",
                    "--w3m-text-big-bold-weight": "600",
                    "--w3m-text-big-bold-line-height": "24px",
                    "--w3m-text-big-bold-letter-spacing": "-0.03em",
                    "--w3m-text-big-bold-text-transform": "none",
                    "--w3m-text-xsmall-bold-size": "10px",
                    "--w3m-text-xsmall-bold-weight": "700",
                    "--w3m-text-xsmall-bold-line-height": "12px",
                    "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
                    "--w3m-text-xsmall-bold-text-transform": "uppercase",
                    "--w3m-text-xsmall-regular-size": "12px",
                    "--w3m-text-xsmall-regular-weight": "600",
                    "--w3m-text-xsmall-regular-line-height": "14px",
                    "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
                    "--w3m-text-xsmall-regular-text-transform": "none",
                    "--w3m-text-small-thin-size": "14px",
                    "--w3m-text-small-thin-weight": "500",
                    "--w3m-text-small-thin-line-height": "16px",
                    "--w3m-text-small-thin-letter-spacing": "-0.03em",
                    "--w3m-text-small-thin-text-transform": "none",
                    "--w3m-text-small-regular-size": "14px",
                    "--w3m-text-small-regular-weight": "600",
                    "--w3m-text-small-regular-line-height": "16px",
                    "--w3m-text-small-regular-letter-spacing": "-0.03em",
                    "--w3m-text-small-regular-text-transform": "none",
                    "--w3m-text-medium-regular-size": "16px",
                    "--w3m-text-medium-regular-weight": "600",
                    "--w3m-text-medium-regular-line-height": "20px",
                    "--w3m-text-medium-regular-letter-spacing": "-0.03em",
                    "--w3m-text-medium-regular-text-transform": "none",
                    "--w3m-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                    "--w3m-success-color": "rgb(38,181,98)",
                    "--w3m-error-color": "rgb(242, 90, 103)"
                }[t]
            },
            setTheme: function() {
                var t = document.querySelector(":root")
                  , e = Pt.Ic.state.themeVariables;
                if (t) {
                    var n = Fa(Fa(Fa(Fa({}, function() {
                        var t, e = {
                            light: {
                                foreground: {
                                    1: "rgb(20,20,20)",
                                    2: "rgb(121,134,134)",
                                    3: "rgb(158,169,169)"
                                },
                                background: {
                                    1: "rgb(255,255,255)",
                                    2: "rgb(241,243,243)",
                                    3: "rgb(228,231,231)"
                                },
                                overlay: "rgba(0,0,0,0.1)"
                            },
                            dark: {
                                foreground: {
                                    1: "rgb(228,231,231)",
                                    2: "rgb(148,158,158)",
                                    3: "rgb(110,119,119)"
                                },
                                background: {
                                    1: "rgb(20,20,20)",
                                    2: "rgb(39,42,42)",
                                    3: "rgb(59,64,64)"
                                },
                                overlay: "rgba(255,255,255,0.1)"
                            }
                        }[null != (t = Pt.Ic.state.themeMode) ? t : "dark"];
                        return {
                            "--w3m-color-fg-1": e.foreground[1],
                            "--w3m-color-fg-2": e.foreground[2],
                            "--w3m-color-fg-3": e.foreground[3],
                            "--w3m-color-bg-1": e.background[1],
                            "--w3m-color-bg-2": e.background[2],
                            "--w3m-color-bg-3": e.background[3],
                            "--w3m-color-overlay": e.overlay
                        }
                    }()), {
                        "--w3m-accent-color": "#3396FF",
                        "--w3m-accent-fill-color": "#FFFFFF",
                        "--w3m-z-index": "89",
                        "--w3m-background-color": "#3396FF",
                        "--w3m-background-border-radius": "8px",
                        "--w3m-container-border-radius": "30px",
                        "--w3m-wallet-icon-border-radius": "15px",
                        "--w3m-wallet-icon-large-border-radius": "30px",
                        "--w3m-wallet-icon-small-border-radius": "7px",
                        "--w3m-input-border-radius": "28px",
                        "--w3m-button-border-radius": "10px",
                        "--w3m-notification-border-radius": "36px",
                        "--w3m-secondary-button-border-radius": "28px",
                        "--w3m-icon-button-border-radius": "50%",
                        "--w3m-button-hover-highlight-border-radius": "10px",
                        "--w3m-text-big-bold-size": "20px",
                        "--w3m-text-big-bold-weight": "600",
                        "--w3m-text-big-bold-line-height": "24px",
                        "--w3m-text-big-bold-letter-spacing": "-0.03em",
                        "--w3m-text-big-bold-text-transform": "none",
                        "--w3m-text-xsmall-bold-size": "10px",
                        "--w3m-text-xsmall-bold-weight": "700",
                        "--w3m-text-xsmall-bold-line-height": "12px",
                        "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
                        "--w3m-text-xsmall-bold-text-transform": "uppercase",
                        "--w3m-text-xsmall-regular-size": "12px",
                        "--w3m-text-xsmall-regular-weight": "600",
                        "--w3m-text-xsmall-regular-line-height": "14px",
                        "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
                        "--w3m-text-xsmall-regular-text-transform": "none",
                        "--w3m-text-small-thin-size": "14px",
                        "--w3m-text-small-thin-weight": "500",
                        "--w3m-text-small-thin-line-height": "16px",
                        "--w3m-text-small-thin-letter-spacing": "-0.03em",
                        "--w3m-text-small-thin-text-transform": "none",
                        "--w3m-text-small-regular-size": "14px",
                        "--w3m-text-small-regular-weight": "600",
                        "--w3m-text-small-regular-line-height": "16px",
                        "--w3m-text-small-regular-letter-spacing": "-0.03em",
                        "--w3m-text-small-regular-text-transform": "none",
                        "--w3m-text-medium-regular-size": "16px",
                        "--w3m-text-medium-regular-weight": "600",
                        "--w3m-text-medium-regular-line-height": "20px",
                        "--w3m-text-medium-regular-letter-spacing": "-0.03em",
                        "--w3m-text-medium-regular-text-transform": "none",
                        "--w3m-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                        "--w3m-success-color": "rgb(38,181,98)",
                        "--w3m-error-color": "rgb(242, 90, 103)"
                    }), e), function() {
                        var t = Pt.Ic.state.themeVariables;
                        return {
                            "--w3m-background-image-url": null != t && t["--w3m-background-image-url"] ? "url(".concat(t["--w3m-background-image-url"], ")") : "none"
                        }
                    }());
                    Object.entries(n).forEach((function(e) {
                        var n = (0,
                        p.Z)(e, 2)
                          , r = n[0]
                          , i = n[1];
                        return t.style.setProperty(r, i)
                    }
                    ))
                }
            },
            globalCss: Z(Fe || (Fe = (0,
            v.Z)(["*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}"])))
        }
          , qa = Z(Ge || (Ge = (0,
        v.Z)(["button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}"])))
          , Ka = Object.defineProperty
          , Ya = Object.getOwnPropertyDescriptor
          , Xa = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Ya(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Ka(e, n, a),
            a
        }
          , Qa = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).icon = void 0,
                t.label = "",
                t.onClick = function() {
                    return null
                }
                ,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    return tt(qe || (qe = (0,
                    v.Z)(['<button @click="', '"><div>', '</div><w3m-text variant="xsmall-regular" color="accent">', "</w3m-text></button>"])), this.onClick, this.icon, this.label)
                }
            }]),
            n
        }(kt);
        Qa.styles = [Ga.globalCss, qa],
        Xa([It()], Qa.prototype, "icon", 2),
        Xa([It()], Qa.prototype, "label", 2),
        Xa([It()], Qa.prototype, "onClick", 2),
        Qa = Xa([At("w3m-box-button")], Qa);
        var Ja = Z(Ke || (Ke = (0,
        v.Z)(["button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:active::after{background-color:var(--w3m-color-overlay)}.w3m-ghost,.w3m-ghost:active::after,.w3m-outline{background-color:transparent}.w3m-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}.w3m-ghost:hover::after{background-color:transparent}.w3m-ghost:hover{opacity:.5}}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}"])))
          , to = Object.defineProperty
          , eo = Object.getOwnPropertyDescriptor
          , no = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? eo(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && to(e, n, a),
            a
        }
          , ro = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).disabled = !1,
                t.iconLeft = void 0,
                t.iconRight = void 0,
                t.onClick = function() {
                    return null
                }
                ,
                t.variant = "default",
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = {
                        "w3m-icon-left": void 0 !== this.iconLeft,
                        "w3m-icon-right": void 0 !== this.iconRight,
                        "w3m-ghost": "ghost" === this.variant,
                        "w3m-outline": "outline" === this.variant
                    }
                      , e = "inverse";
                    return "ghost" === this.variant && (e = "secondary"),
                    "outline" === this.variant && (e = "accent"),
                    tt(Ye || (Ye = (0,
                    v.Z)(['<button class="', '" ?disabled="', '" @click="', '">', '<w3m-text variant="small-regular" color="', '"><slot></slot></w3m-text>', "</button>"])), Wt(t), this.disabled, this.onClick, this.iconLeft, e, this.iconRight)
                }
            }]),
            n
        }(kt);
        ro.styles = [Ga.globalCss, Ja],
        no([It()], ro.prototype, "disabled", 2),
        no([It()], ro.prototype, "iconLeft", 2),
        no([It()], ro.prototype, "iconRight", 2),
        no([It()], ro.prototype, "onClick", 2),
        no([It()], ro.prototype, "variant", 2),
        ro = no([At("w3m-button")], ro);
        var io = Z(Xe || (Xe = (0,
        v.Z)([":host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:active::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}}"])))
          , ao = Object.defineProperty
          , oo = Object.getOwnPropertyDescriptor
          , lo = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? oo(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && ao(e, n, a),
            a
        }
          , co = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).disabled = !1,
                t.variant = "primary",
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = {
                        "w3m-secondary": "secondary" === this.variant
                    };
                    return tt(Qe || (Qe = (0,
                    v.Z)(['<button ?disabled="', '" class="', '"><slot></slot></button>'])), this.disabled, Wt(t))
                }
            }]),
            n
        }(kt);
        co.styles = [Ga.globalCss, io],
        lo([It()], co.prototype, "disabled", 2),
        lo([It()], co.prototype, "variant", 2),
        co = lo([At("w3m-button-big")], co);
        var so = Z(Je || (Je = (0,
        v.Z)([":host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}"])))
          , uo = Object.defineProperty
          , ho = Object.getOwnPropertyDescriptor
          , mo = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    return tt(tn || (tn = (0,
                    v.Z)(["<div><slot></slot></div>"])))
                }
            }]),
            n
        }(kt);
        mo.styles = [Ga.globalCss, so],
        mo = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? ho(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && uo(e, n, a),
            a
        }([At("w3m-info-footer")], mo);
        var vo = {
            CROSS_ICON: et(en || (en = (0,
            v.Z)(['<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>']))),
            WALLET_CONNECT_LOGO: et(nn || (nn = (0,
            v.Z)(['<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>']))),
            WALLET_CONNECT_ICON: et(rn || (rn = (0,
            v.Z)(['<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>']))),
            WALLET_CONNECT_ICON_COLORED: et(an || (an = (0,
            v.Z)(['<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>']))),
            BACK_ICON: et(on || (on = (0,
            v.Z)(['<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>']))),
            COPY_ICON: et(ln || (ln = (0,
            v.Z)(['<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>']))),
            RETRY_ICON: et(cn || (cn = (0,
            v.Z)(['<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>']))),
            DESKTOP_ICON: et(sn || (sn = (0,
            v.Z)(['<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>']))),
            MOBILE_ICON: et(un || (un = (0,
            v.Z)(['<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>']))),
            ARROW_DOWN_ICON: et(dn || (dn = (0,
            v.Z)(['<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>']))),
            ARROW_UP_RIGHT_ICON: et(hn || (hn = (0,
            v.Z)(['<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>']))),
            ARROW_RIGHT_ICON: et(mn || (mn = (0,
            v.Z)(['<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>']))),
            QRCODE_ICON: et(vn || (vn = (0,
            v.Z)(['<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>']))),
            SCAN_ICON: et(pn || (pn = (0,
            v.Z)(['<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>']))),
            CHECKMARK_ICON: et(fn || (fn = (0,
            v.Z)(['<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>']))),
            HELP_ETH_IMG: et(wn || (wn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>']))),
            HELP_PAINTING_IMG: et(gn || (gn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>']))),
            HELP_CHART_IMG: et(bn || (bn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>']))),
            HELP_KEY_IMG: et(yn || (yn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>']))),
            HELP_USER_IMG: et(xn || (xn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>']))),
            HELP_LOCK_IMG: et(kn || (kn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>']))),
            HELP_COMPAS_IMG: et(Zn || (Zn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>']))),
            HELP_NOUN_IMG: et(Cn || (Cn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>']))),
            HELP_DAO_IMG: et(An || (An = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>']))),
            SEARCH_ICON: et(On || (On = (0,
            v.Z)(['<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>']))),
            HELP_ICON: et(En || (En = (0,
            v.Z)(['<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>']))),
            WALLET_ICON: et(In || (In = (0,
            v.Z)(['<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>']))),
            NETWORK_PLACEHOLDER: et(_n || (_n = (0,
            v.Z)(['<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>']))),
            WALLET_PLACEHOLDER: et(Pn || (Pn = (0,
            v.Z)(['<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>']))),
            TOKEN_PLACEHOLDER: et(jn || (jn = (0,
            v.Z)(['<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>']))),
            ACCOUNT_COPY: et(Mn || (Mn = (0,
            v.Z)(['<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>']))),
            ACCOUNT_DISCONNECT: et(Tn || (Tn = (0,
            v.Z)(['<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>']))),
            GLOBE_ICON: et(Wn || (Wn = (0,
            v.Z)(['<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>'])))
        }
          , po = Z(Sn || (Sn = (0,
        v.Z)([".w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}@media(hover:hover){button:hover{background-color:var(--w3m-color-bg-2)}}"])))
          , fo = Object.defineProperty
          , wo = Object.getOwnPropertyDescriptor
          , go = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? wo(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && fo(e, n, a),
            a
        }
          , bo = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).isHelp = !1,
                t.unsubscribeRouter = void 0,
                t.unsubscribeRouter = Pt.AV.subscribe((function(e) {
                    t.isHelp = "Help" === e.view
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeRouter) || t.call(this)
                }
            }, {
                key: "onHelp",
                value: function() {
                    Pt.AV.push("Help")
                }
            }, {
                key: "logoTemplate",
                value: function() {
                    var t, e = null == (t = Pt.Ic.state.themeVariables) ? void 0 : t["--w3m-logo-image-url"];
                    return e ? tt(Dn || (Dn = (0,
                    v.Z)(['<img src="', '">'])), e) : vo.WALLET_CONNECT_LOGO
                }
            }, {
                key: "render",
                value: function() {
                    var t = {
                        "w3m-help-active": this.isHelp
                    };
                    return tt(Ln || (Ln = (0,
                    v.Z)(['<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">', '<div class="', '"><button @click="', '">', '</button> <button @click="', '">', "</button></div></div>"])), this.logoTemplate(), Wt(t), this.onHelp, vo.HELP_ICON, Pt.jb.close, vo.CROSS_ICON)
                }
            }]),
            n
        }(kt);
        bo.styles = [Ga.globalCss, po],
        go([_t()], bo.prototype, "isHelp", 2),
        bo = go([At("w3m-modal-backcard")], bo);
        var yo = Z(Rn || (Rn = (0,
        v.Z)(["main{padding:20px;padding-top:0;width:100%}"])))
          , xo = Object.defineProperty
          , ko = Object.getOwnPropertyDescriptor
          , Zo = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    return tt(Nn || (Nn = (0,
                    v.Z)(["<main><slot></slot></main>"])))
                }
            }]),
            n
        }(kt);
        Zo.styles = [Ga.globalCss, yo],
        Zo = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? ko(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && xo(e, n, a),
            a
        }([At("w3m-modal-content")], Zo);
        var Co = Z($n || ($n = (0,
        v.Z)(["footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}"])))
          , Ao = Object.defineProperty
          , Oo = Object.getOwnPropertyDescriptor
          , Eo = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    return tt(zn || (zn = (0,
                    v.Z)(["<footer><slot></slot></footer>"])))
                }
            }]),
            n
        }(kt);
        Eo.styles = [Ga.globalCss, Co],
        Eo = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Oo(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Ao(e, n, a),
            a
        }([At("w3m-modal-footer")], Eo);
        var Io = Z(Hn || (Hn = (0,
        v.Z)(["header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}"])))
          , _o = Object.defineProperty
          , Po = Object.getOwnPropertyDescriptor
          , jo = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Po(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && _o(e, n, a),
            a
        }
          , Mo = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).title = "",
                t.onAction = void 0,
                t.actionIcon = void 0,
                t.border = !1,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "backBtnTemplate",
                value: function() {
                    return tt(Vn || (Vn = (0,
                    v.Z)(['<button class="w3m-back-btn" @click="', '">', "</button>"])), Pt.AV.goBack, vo.BACK_ICON)
                }
            }, {
                key: "actionBtnTemplate",
                value: function() {
                    return tt(Un || (Un = (0,
                    v.Z)(['<button class="w3m-action-btn" @click="', '">', "</button>"])), this.onAction, this.actionIcon)
                }
            }, {
                key: "render",
                value: function() {
                    var t = {
                        "w3m-border": this.border
                    }
                      , e = Pt.AV.state.history.length > 1
                      , n = this.title ? tt(Bn || (Bn = (0,
                    v.Z)(['<w3m-text variant="big-bold">', "</w3m-text>"])), this.title) : tt(Fn || (Fn = (0,
                    v.Z)(["<slot></slot>"])));
                    return tt(Gn || (Gn = (0,
                    v.Z)(['<header class="', '">', " ", " ", "</header>"])), Wt(t), e ? this.backBtnTemplate() : null, n, this.onAction ? this.actionBtnTemplate() : null)
                }
            }]),
            n
        }(kt);
        Mo.styles = [Ga.globalCss, Io],
        jo([It()], Mo.prototype, "title", 2),
        jo([It()], Mo.prototype, "onAction", 2),
        jo([It()], Mo.prototype, "actionIcon", 2),
        jo([It()], Mo.prototype, "border", 2),
        Mo = jo([At("w3m-modal-header")], Mo);
        var To = {
            1: "692ed6ba-e569-459a-556a-776476829e00",
            42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
            43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
            56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
            250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
            10: "ab9c186a-c52f-464b-2906-ca59d760a400",
            137: "41d04d42-da3b-4453-8506-668cc0727900",
            100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
            9001: "f926ff41-260d-4028-635e-91913fc28e00",
            324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
            314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
            4689: "34e68754-e536-40da-c153-6ef2e7188a00",
            1088: "3897a66d-40b9-4833-162f-a2c90531c900",
            1284: "161038da-44ae-4ec7-1208-0ea569454b00",
            1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00"
        }
          , Wo = {
            ETH: {
                icon: "692ed6ba-e569-459a-556a-776476829e00"
            },
            WETH: {
                icon: "692ed6ba-e569-459a-556a-776476829e00"
            },
            AVAX: {
                icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00"
            },
            FTM: {
                icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00"
            },
            BNB: {
                icon: "93564157-2e8e-4ce7-81df-b264dbee9b00"
            },
            MATIC: {
                icon: "41d04d42-da3b-4453-8506-668cc0727900"
            },
            OP: {
                icon: "ab9c186a-c52f-464b-2906-ca59d760a400"
            },
            xDAI: {
                icon: "02b53f6a-e3d4-479e-1cb4-21178987d100"
            },
            EVMOS: {
                icon: "f926ff41-260d-4028-635e-91913fc28e00"
            },
            METIS: {
                icon: "3897a66d-40b9-4833-162f-a2c90531c900"
            },
            IOTX: {
                icon: "34e68754-e536-40da-c153-6ef2e7188a00"
            }
        }
          , So = {
            externalWallets: function() {
                if (Pt.zb.state.isStandalone)
                    return [];
                var t = Pt.Id.client().getConnectors();
                return t = t.filter((function(t) {
                    return "injected" !== t.id
                }
                )),
                t
            },
            manualWallets: function() {
                var t, e, n = Pt.t0.state, r = n.mobileWallets, i = n.desktopWallets, a = null == (t = So.recentWallet()) ? void 0 : t.id, o = Pt.zv.isMobile() ? r : i, l = null === o || void 0 === o ? void 0 : o.filter((function(t) {
                    return a !== t.id
                }
                ));
                return null != (e = Pt.zv.isMobile() ? null === l || void 0 === l ? void 0 : l.map((function(t) {
                    var e = t.id
                      , n = t.name
                      , r = t.links;
                    return {
                        id: e,
                        name: n,
                        mobile: r,
                        links: r
                    }
                }
                )) : null === l || void 0 === l ? void 0 : l.map((function(t) {
                    var e = t.id
                      , n = t.name
                      , r = t.links;
                    return {
                        id: e,
                        name: n,
                        desktop: r,
                        links: r
                    }
                }
                ))) ? e : []
            },
            installedInjectedWallets: function() {
                if (Pt.zb.state.isStandalone)
                    return [];
                if (!Pt.Id.client().isInjectedProviderInstalled())
                    return [];
                var t = Pt.Id.client().namespace
                  , e = Pt.uc.state.injectedWallets.filter((function(e) {
                    return !!e.injected.some((function(e) {
                        return Pt.Id.client().safeCheckInjectedProvider(e.injected_id) && e.namespace === t
                    }
                    ))
                }
                ));
                return e.length > 1 && (e = e.filter((function(t) {
                    return !!t.injected.map((function(t) {
                        return t.injected_id
                    }
                    )).every((function(t) {
                        return "isMetaMask" !== t
                    }
                    ))
                }
                ))),
                e.length ? e : [{
                    name: "Browser",
                    id: "browser",
                    image_id: void 0
                }]
            },
            injectedWallets: function() {
                var t = Pt.zb.state.isStandalone
                  , e = Pt.t0.state
                  , n = e.explorerExcludedWalletIds
                  , r = e.explorerRecommendedWalletIds
                  , i = Pt.zv.isMobile();
                if (t || "ALL" === n || i)
                    return [];
                var a = Pt.Id.client().namespace;
                return Pt.uc.state.injectedWallets.filter((function(t) {
                    var e = t.id
                      , i = t.injected
                      , o = Pt.zv.isArray(n) ? n : []
                      , l = Pt.zv.isArray(r) ? r : [];
                    return !!i.some((function(t) {
                        return t.namespace === a && !o.includes(e) && !l.includes(e)
                    }
                    ))
                }
                ))
            },
            recentWallet: function() {
                return Do.getRecentWallet()
            },
            recomendedWallets: function() {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = So.installedInjectedWallets().map((function(t) {
                    return t.id
                }
                )), r = e || null == (t = So.recentWallet()) ? void 0 : t.id, i = [].concat((0,
                s.Z)(n), [r]);
                return Pt.uc.state.recomendedWallets.filter((function(t) {
                    return !i.includes(t.id)
                }
                ))
            }
        }
          , Do = {
            MOBILE_BREAKPOINT: 600,
            W3M_RECENT_WALLET_DATA: "W3M_RECENT_WALLET_DATA",
            EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
            rejectStandaloneButtonComponent: function() {
                if (Pt.zb.state.isStandalone)
                    throw new Error("Web3Modal button components are not available in standalone mode.")
            },
            getShadowRootElement: function(t, e) {
                var n = t.renderRoot.querySelector(e);
                if (!n)
                    throw new Error("".concat(e, " not found"));
                return n
            },
            getWalletIcon: function(t) {
                var e = t.id
                  , n = t.image_id
                  , r = Pt.t0.state.walletImages;
                return null != r && r[e] ? r[e] : n ? Pt.uc.getWalletImageUrl(n) : ""
            },
            getWalletName: function(t) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? t.split(" ")[0] : t
            },
            getChainIcon: function(t) {
                var e, n = To[t], r = Pt.t0.state, i = r.projectId, a = r.chainImages;
                return null != (e = null === a || void 0 === a ? void 0 : a[t]) ? e : i && n ? Pt.uc.getAssetImageUrl(n) : ""
            },
            getTokenIcon: function(t) {
                var e, n, r = null == (e = Wo[t]) ? void 0 : e.icon, i = Pt.t0.state, a = i.projectId, o = i.tokenImages;
                return null != (n = null === o || void 0 === o ? void 0 : o[t]) ? n : a && r ? Pt.uc.getAssetImageUrl(r) : ""
            },
            isMobileAnimation: function() {
                return window.innerWidth <= Do.MOBILE_BREAKPOINT
            },
            preloadImage: function(t) {
                return (0,
                c.Z)((0,
                l.Z)().mark((function e() {
                    var n;
                    return (0,
                    l.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = new Promise((function(e, n) {
                                    var r = new Image;
                                    r.onload = e,
                                    r.onerror = n,
                                    r.src = t
                                }
                                )),
                                e.abrupt("return", Promise.race([n, Pt.zv.wait(3e3)]));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            getErrorMessage: function(t) {
                return t instanceof Error ? t.message : "Unknown Error"
            },
            debounce: function(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                return function() {
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                        i[a] = arguments[a];
                    e && clearTimeout(e),
                    e = setTimeout((function() {
                        t.apply(void 0, i)
                    }
                    ), n)
                }
            },
            handleMobileLinking: function(t) {
                var e = Pt.zb.state.standaloneUri
                  , n = Pt.kD.state.pairingUri
                  , r = t.mobile
                  , i = t.name
                  , a = null === r || void 0 === r ? void 0 : r.native
                  , o = null === r || void 0 === r ? void 0 : r.universal;
                Do.setRecentWallet(t),
                function(t) {
                    var e = "";
                    a ? e = Pt.zv.formatUniversalUrl(a, t, i) : o && (e = Pt.zv.formatNativeUrl(o, t, i)),
                    Pt.zv.openHref(e, "_self")
                }(e || n)
            },
            handleAndroidLinking: function() {
                var t = Pt.zb.state.standaloneUri
                  , e = Pt.kD.state.pairingUri;
                t ? (Pt.zv.setWalletConnectAndroidDeepLink(t),
                Pt.zv.openHref(t, "_self")) : (Pt.zv.setWalletConnectAndroidDeepLink(e),
                Pt.zv.openHref(e, "_self"))
            },
            handleUriCopy: function() {
                return (0,
                c.Z)((0,
                l.Z)().mark((function t() {
                    var e, n;
                    return (0,
                    l.Z)().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = Pt.zb.state.standaloneUri,
                                n = Pt.kD.state.pairingUri,
                                !e) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 4,
                                navigator.clipboard.writeText(e);
                            case 4:
                                t.next = 8;
                                break;
                            case 6:
                                return t.next = 8,
                                navigator.clipboard.writeText(n);
                            case 8:
                                Pt.Vs.openToast("Link copied", "success");
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            handleConnectorConnection: function(t, e) {
                return (0,
                c.Z)((0,
                l.Z)().mark((function n() {
                    var r;
                    return (0,
                    l.Z)().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0,
                                r = Pt.zb.state.selectedChain,
                                n.next = 4,
                                Pt.Id.client().connectConnector(t, null === r || void 0 === r ? void 0 : r.id);
                            case 4:
                                Pt.jb.close(),
                                n.next = 10;
                                break;
                            case 7:
                                n.prev = 7,
                                n.t0 = n.catch(0),
                                console.error(n.t0),
                                e ? e() : Pt.Vs.openToast(Do.getErrorMessage(n.t0), "error");
                            case 10:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[0, 7]])
                }
                )))()
            },
            getCustomImageUrls: function() {
                var t = Pt.t0.state
                  , e = t.chainImages
                  , n = t.walletImages
                  , r = Object.values(null !== e && void 0 !== e ? e : {})
                  , i = Object.values(null !== n && void 0 !== n ? n : {});
                return Object.values([].concat(r, i))
            },
            truncate: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
                return t.length <= e ? t : "".concat(t.substring(0, 4), "...").concat(t.substring(t.length - 4))
            },
            generateAvatarColors: function(t) {
                var e, n = null == (e = t.match(/.{1,7}/g)) ? void 0 : e.splice(0, 5), r = [];
                null === n || void 0 === n || n.forEach((function(t) {
                    for (var e = 0, n = 0; n < t.length; n += 1)
                        e = t.charCodeAt(n) + ((e << 5) - e),
                        e &= e;
                    for (var i = [0, 0, 0], a = 0; a < 3; a += 1) {
                        var o = e >> 8 * a & 255;
                        i[a] = o
                    }
                    r.push("rgb(".concat(i[0], ", ").concat(i[1], ", ").concat(i[2], ")"))
                }
                ));
                var i = document.querySelector(":root");
                if (i) {
                    var a = {
                        "--w3m-color-av-1": r[0],
                        "--w3m-color-av-2": r[1],
                        "--w3m-color-av-3": r[2],
                        "--w3m-color-av-4": r[3],
                        "--w3m-color-av-5": r[4]
                    };
                    Object.entries(a).forEach((function(t) {
                        var e = (0,
                        p.Z)(t, 2)
                          , n = e[0]
                          , r = e[1];
                        return i.style.setProperty(n, r)
                    }
                    ))
                }
            },
            setRecentWallet: function(t) {
                var e = Pt.zb.state.walletConnectVersion;
                localStorage.setItem(Do.W3M_RECENT_WALLET_DATA, JSON.stringify((0,
                o.Z)({}, e, t)))
            },
            getRecentWallet: function() {
                var t = localStorage.getItem(Do.W3M_RECENT_WALLET_DATA);
                if (t) {
                    var e = Pt.zb.state.walletConnectVersion
                      , n = JSON.parse(t);
                    if (n[e])
                        return n[e]
                }
            },
            caseSafeIncludes: function(t, e) {
                return t.toUpperCase().includes(e.toUpperCase())
            },
            openWalletExplorerUrl: function() {
                Pt.zv.openHref(Do.EXPLORER_WALLET_URL, "_blank")
            },
            getCachedRouterWalletPlatforms: function() {
                var t = Pt.zv.getWalletRouterData()
                  , e = t.id
                  , n = t.desktop
                  , r = t.mobile
                  , i = t.injected
                  , a = So.installedInjectedWallets()
                  , o = !(null == i || !i.length)
                  , l = a.some((function(t) {
                    return t.id === e
                }
                ))
                  , c = !(null == n || !n.native)
                  , s = !(null == n || !n.universal);
                return {
                    isInjectedInstalled: l,
                    isInjected: o,
                    isDesktop: c,
                    isMobile: !(null == r || !r.native) || !(null == r || !r.universal),
                    isWeb: s
                }
            },
            goToConnectingView: function(t) {
                Pt.AV.setData({
                    Wallet: t
                });
                var e = Pt.zv.isMobile()
                  , n = Do.getCachedRouterWalletPlatforms()
                  , r = n.isDesktop
                  , i = n.isWeb
                  , a = n.isMobile
                  , o = n.isInjectedInstalled;
                e ? o ? Pt.AV.push("InjectedConnecting") : a ? Pt.AV.push("MobileConnecting") : i ? Pt.AV.push("WebConnecting") : Pt.AV.push("InstallWallet") : o ? Pt.AV.push("InjectedConnecting") : r ? Pt.AV.push("DesktopConnecting") : i ? Pt.AV.push("WebConnecting") : a ? Pt.AV.push("MobileQrcodeConnecting") : Pt.AV.push("InstallWallet")
            }
        }
          , Lo = Z(qn || (qn = (0,
        v.Z)([".w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}"])))
          , Ro = Object.defineProperty
          , No = Object.getOwnPropertyDescriptor
          , $o = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? No(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Ro(e, n, a),
            a
        }
          , zo = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).view = Pt.AV.state.view,
                t.prevView = Pt.AV.state.view,
                t.unsubscribe = void 0,
                t.oldHeight = "0px",
                t.resizeObserver = void 0,
                t.unsubscribe = Pt.AV.subscribe((function(e) {
                    t.view !== e.view && t.onChangeRoute()
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "firstUpdated",
                value: function() {
                    var t = this;
                    this.resizeObserver = new ResizeObserver((function(e) {
                        var n = (0,
                        p.Z)(e, 1)[0]
                          , r = "".concat(n.contentRect.height, "px");
                        "0px" !== t.oldHeight && Be(t.routerEl, {
                            height: [t.oldHeight, r]
                        }, {
                            duration: .2
                        }),
                        t.oldHeight = r
                    }
                    )),
                    this.resizeObserver.observe(this.contentEl)
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    var t, e;
                    null == (t = this.unsubscribe) || t.call(this),
                    null == (e = this.resizeObserver) || e.disconnect()
                }
            }, {
                key: "routerEl",
                get: function() {
                    return Do.getShadowRootElement(this, ".w3m-router")
                }
            }, {
                key: "contentEl",
                get: function() {
                    return Do.getShadowRootElement(this, ".w3m-content")
                }
            }, {
                key: "viewTemplate",
                value: function() {
                    switch (this.view) {
                    case "ConnectWallet":
                        return tt(Kn || (Kn = (0,
                        v.Z)(["<w3m-connect-wallet-view></w3m-connect-wallet-view>"])));
                    case "SelectNetwork":
                        return tt(Yn || (Yn = (0,
                        v.Z)(["<w3m-select-network-view></w3m-select-network-view>"])));
                    case "InjectedConnecting":
                        return tt(Xn || (Xn = (0,
                        v.Z)(["<w3m-injected-connecting-view></w3m-injected-connecting-view>"])));
                    case "DesktopConnecting":
                        return tt(Qn || (Qn = (0,
                        v.Z)(["<w3m-desktop-connecting-view></w3m-desktop-connecting-view>"])));
                    case "MobileConnecting":
                        return tt(Jn || (Jn = (0,
                        v.Z)(["<w3m-mobile-connecting-view></w3m-mobile-connecting-view>"])));
                    case "WebConnecting":
                        return tt(tr || (tr = (0,
                        v.Z)(["<w3m-web-connecting-view></w3m-web-connecting-view>"])));
                    case "MobileQrcodeConnecting":
                        return tt(er || (er = (0,
                        v.Z)(["<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>"])));
                    case "GetWallet":
                        return tt(nr || (nr = (0,
                        v.Z)(["<w3m-get-wallet-view></w3m-get-wallet-view>"])));
                    case "WalletExplorer":
                        return tt(rr || (rr = (0,
                        v.Z)(["<w3m-wallet-explorer-view></w3m-wallet-explorer-view>"])));
                    case "Qrcode":
                        return tt(ir || (ir = (0,
                        v.Z)(["<w3m-qrcode-view></w3m-qrcode-view>"])));
                    case "Help":
                        return tt(ar || (ar = (0,
                        v.Z)(["<w3m-help-view></w3m-help-view>"])));
                    case "Account":
                        return tt(or || (or = (0,
                        v.Z)(["<w3m-account-view></w3m-account-view>"])));
                    case "SwitchNetwork":
                        return tt(lr || (lr = (0,
                        v.Z)(["<w3m-switch-network-view></w3m-switch-network-view>"])));
                    case "InstallWallet":
                        return tt(cr || (cr = (0,
                        v.Z)(["<w3m-install-wallet-view></w3m-install-wallet-view>"])));
                    default:
                        return tt(sr || (sr = (0,
                        v.Z)(["<div>Not Found</div>"])))
                    }
                }
            }, {
                key: "onChangeRoute",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Be(this.routerEl, {
                                        opacity: [1, 0],
                                        scale: [1, 1.02]
                                    }, {
                                        duration: .15,
                                        delay: .1
                                    }).finished;
                                case 2:
                                    this.view = Pt.AV.state.view,
                                    Be(this.routerEl, {
                                        opacity: [0, 1],
                                        scale: [.99, 1]
                                    }, {
                                        duration: .37,
                                        delay: .05
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "render",
                value: function() {
                    return tt(ur || (ur = (0,
                    v.Z)(['<div class="w3m-router"><div class="w3m-content">', "</div></div>"])), this.viewTemplate())
                }
            }]),
            n
        }(kt);
        zo.styles = [Ga.globalCss, Lo],
        $o([_t()], zo.prototype, "view", 2),
        $o([_t()], zo.prototype, "prevView", 2),
        zo = $o([At("w3m-modal-router")], zo);
        var Ho = Z(dr || (dr = (0,
        v.Z)(["div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}"])))
          , Vo = Object.defineProperty
          , Uo = Object.getOwnPropertyDescriptor
          , Bo = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Uo(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Vo(e, n, a),
            a
        }
          , Fo = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).open = !1,
                t.unsubscribe = void 0,
                t.timeout = void 0,
                t.unsubscribe = Pt.Vs.subscribe((function(e) {
                    e.open ? (t.open = !0,
                    t.timeout = setTimeout((function() {
                        return Pt.Vs.closeToast()
                    }
                    ), 2200)) : (t.open = !1,
                    clearTimeout(t.timeout))
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribe) || t.call(this),
                    clearTimeout(this.timeout),
                    Pt.Vs.closeToast()
                }
            }, {
                key: "render",
                value: function() {
                    var t = Pt.Vs.state
                      , e = t.message
                      , n = t.variant
                      , r = {
                        "w3m-success": "success" === n,
                        "w3m-error": "error" === n
                    };
                    return this.open ? tt(hr || (hr = (0,
                    v.Z)(['<div class="', '">', " ", '<w3m-text variant="small-regular">', "</w3m-text></div>"])), Wt(r), "success" === n ? vo.CHECKMARK_ICON : null, "error" === n ? vo.CROSS_ICON : null, e) : null
                }
            }]),
            n
        }(kt);
        Fo.styles = [Ga.globalCss, Ho],
        Bo([_t()], Fo.prototype, "open", 2),
        Fo = Bo([At("w3m-modal-toast")], Fo);
        var Go = Z(mr || (mr = (0,
        v.Z)(["button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px;position:relative}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:active{background-color:var(--w3m-color-overlay)}.w3m-unsupported{opacity:.3}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}"])))
          , qo = Object.defineProperty
          , Ko = Object.getOwnPropertyDescriptor
          , Yo = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Ko(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && qo(e, n, a),
            a
        }
          , Xo = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).onClick = function() {
                    return null
                }
                ,
                t.name = "",
                t.chainId = "",
                t.unsupported = !1,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = {
                        "w3m-unsupported": this.unsupported
                    };
                    return tt(vr || (vr = (0,
                    v.Z)(['<button @click="', '" class="', '"><w3m-network-image chainId="', '"></w3m-network-image><w3m-text variant="xsmall-regular">', "</w3m-text></button>"])), this.onClick, Wt(t), this.chainId, this.name)
                }
            }]),
            n
        }(kt);
        Xo.styles = [Ga.globalCss, Go],
        Yo([It()], Xo.prototype, "onClick", 2),
        Yo([It()], Xo.prototype, "name", 2),
        Yo([It()], Xo.prototype, "chainId", 2),
        Yo([It()], Xo.prototype, "unsupported", 2),
        Xo = Yo([At("w3m-network-button")], Xo);
        var Qo = Z(pr || (pr = (0,
        v.Z)(["@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}"])))
          , Jo = Object.defineProperty
          , tl = Object.getOwnPropertyDescriptor
          , el = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? tl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Jo(e, n, a),
            a
        }
          , nl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).chainId = "",
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = Do.getChainIcon(this.chainId);
                    return t ? tt(fr || (fr = (0,
                    v.Z)(['<svg width="54" height="59" viewBox="0 0 54 59" fill="none"><image href="', '"/><image href="', '" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>'])), t, t) : tt(wr || (wr = (0,
                    v.Z)(["", ""])), vo.NETWORK_PLACEHOLDER)
                }
            }]),
            n
        }(kt);
        nl.styles = [Ga.globalCss, Qo],
        el([It()], nl.prototype, "chainId", 2),
        nl = el([At("w3m-network-image")], nl);
        function rl(t, e, n) {
            return t !== e && (t - e < 0 ? e - t : t - e) <= n + .1
        }
        var il = function(t, e, n, r) {
            var i = "light" === r ? "#141414" : "#fff"
              , a = "light" === r ? "#fff" : "#141414"
              , o = []
              , l = function(t, e) {
                var n = Array.prototype.slice.call($a.create(t, {
                    errorCorrectionLevel: e
                }).modules.data, 0)
                  , r = Math.sqrt(n.length);
                return n.reduce((function(t, e, n) {
                    return (n % r === 0 ? t.push([e]) : t[t.length - 1].push(e)) && t
                }
                ), [])
            }(t, "Q")
              , c = e / l.length
              , s = [{
                x: 0,
                y: 0
            }, {
                x: 1,
                y: 0
            }, {
                x: 0,
                y: 1
            }];
            s.forEach((function(t) {
                for (var e = t.x, n = t.y, r = (l.length - 7) * c * e, u = (l.length - 7) * c * n, d = 0; d < s.length; d += 1) {
                    var h = c * (7 - 2 * d);
                    o.push(et(gr || (gr = (0,
                    v.Z)(['<rect fill="', '" height="', '" rx="', '" ry="', '" width="', '" x="', '" y="', '">'])), d % 2 === 0 ? i : a, h, .32 * h, .32 * h, h, r + c * d, u + c * d))
                }
            }
            ));
            var u = Math.floor((n + 25) / c)
              , d = l.length / 2 - u / 2
              , h = l.length / 2 + u / 2 - 1
              , m = [];
            l.forEach((function(t, e) {
                t.forEach((function(t, n) {
                    if (l[e][n] && !(e < 7 && n < 7 || e > l.length - 8 && n < 7 || e < 7 && n > l.length - 8) && !(e > d && e < h && n > d && n < h)) {
                        var r = e * c + c / 2
                          , i = n * c + c / 2;
                        m.push([r, i])
                    }
                }
                ))
            }
            ));
            var w = {};
            return m.forEach((function(t) {
                var e = (0,
                p.Z)(t, 2)
                  , n = e[0]
                  , r = e[1];
                w[n] ? w[n].push(r) : w[n] = [r]
            }
            )),
            Object.entries(w).map((function(t) {
                var e = (0,
                p.Z)(t, 2)
                  , n = e[0]
                  , r = e[1]
                  , i = r.filter((function(t) {
                    return r.every((function(e) {
                        return !rl(t, e, c)
                    }
                    ))
                }
                ));
                return [Number(n), i]
            }
            )).forEach((function(t) {
                var e = (0,
                p.Z)(t, 2)
                  , n = e[0];
                e[1].forEach((function(t) {
                    o.push(et(br || (br = (0,
                    v.Z)(['<circle cx="', '" cy="', '" fill="', '" r="', '">'])), n, t, i, c / 2.5))
                }
                ))
            }
            )),
            Object.entries(w).filter((function(t) {
                var e = (0,
                p.Z)(t, 2);
                e[0];
                return e[1].length > 1
            }
            )).map((function(t) {
                var e = (0,
                p.Z)(t, 2)
                  , n = e[0]
                  , r = e[1]
                  , i = r.filter((function(t) {
                    return r.some((function(e) {
                        return rl(t, e, c)
                    }
                    ))
                }
                ));
                return [Number(n), i]
            }
            )).map((function(t) {
                var e = (0,
                p.Z)(t, 2)
                  , n = e[0]
                  , r = e[1];
                r.sort((function(t, e) {
                    return t < e ? -1 : 1
                }
                ));
                var i, a = [], o = (0,
                f.Z)(r);
                try {
                    var l = function() {
                        var t = i.value
                          , e = a.find((function(e) {
                            return e.some((function(e) {
                                return rl(t, e, c)
                            }
                            ))
                        }
                        ));
                        e ? e.push(t) : a.push([t])
                    };
                    for (o.s(); !(i = o.n()).done; )
                        l()
                } catch (s) {
                    o.e(s)
                } finally {
                    o.f()
                }
                return [n, a.map((function(t) {
                    return [t[0], t[t.length - 1]]
                }
                ))]
            }
            )).forEach((function(t) {
                var e = (0,
                p.Z)(t, 2)
                  , n = e[0];
                e[1].forEach((function(t) {
                    var e = (0,
                    p.Z)(t, 2)
                      , r = e[0]
                      , a = e[1];
                    o.push(et(yr || (yr = (0,
                    v.Z)(['<line x1="', '" x2="', '" y1="', '" y2="', '" stroke="', '" stroke-width="', '" stroke-linecap="round">'])), n, n, r, a, i, c / 1.25))
                }
                ))
            }
            )),
            o
        }
          , al = Z(xr || (xr = (0,
        v.Z)(["@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}"])))
          , ol = Object.defineProperty
          , ll = Object.getOwnPropertyDescriptor
          , cl = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? ll(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && ol(e, n, a),
            a
        }
          , sl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).uri = "",
                t.size = 0,
                t.imageId = void 0,
                t.walletId = void 0,
                t.imageUrl = void 0,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "svgTemplate",
                value: function() {
                    var t, e = null != (t = Pt.Ic.state.themeMode) ? t : "light";
                    return et(kr || (kr = (0,
                    v.Z)(['<svg height="', '" width="', '">', "</svg>"])), this.size, this.size, il(this.uri, this.size, this.size / 4, e))
                }
            }, {
                key: "render",
                value: function() {
                    return tt(Zr || (Zr = (0,
                    v.Z)(["<div>", " ", "<w3m-theme-context></w3m-theme-context></div>"])), this.walletId || this.imageUrl ? tt(Cr || (Cr = (0,
                    v.Z)(['<w3m-wallet-image walletId="', '" imageId="', '" imageUrl="', '"></w3m-wallet-image>'])), this.walletId, this.imageId, this.imageUrl) : vo.WALLET_CONNECT_ICON_COLORED, this.svgTemplate())
                }
            }]),
            n
        }(kt);
        sl.styles = [Ga.globalCss, al],
        cl([It()], sl.prototype, "uri", 2),
        cl([It({
            type: Number
        })], sl.prototype, "size", 2),
        cl([It()], sl.prototype, "imageId", 2),
        cl([It()], sl.prototype, "walletId", 2),
        cl([It()], sl.prototype, "imageUrl", 2),
        sl = cl([At("w3m-qrcode")], sl);
        var ul = Z(Ar || (Ar = (0,
        v.Z)([":host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin:2px 4px 0 0}div{top:0;left:calc(50% - 12px);transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:calc(100% - 2px);width:fit-content;position:relative}input:focus-within+div,input:not(:placeholder-shown)+div{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+div w3m-text,input:not(:placeholder-shown)+div w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}"])))
          , dl = Object.defineProperty
          , hl = Object.getOwnPropertyDescriptor
          , ml = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? hl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && dl(e, n, a),
            a
        }
          , vl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).onChange = function() {
                    return null
                }
                ,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = "Search wallets";
                    return tt(Or || (Or = (0,
                    v.Z)(['<input type="text" @input="', '" placeholder="', '"><div>', '<w3m-text color="secondary" variant="small-thin">', "</w3m-text></div>"])), this.onChange, t, vo.SEARCH_ICON, t)
                }
            }]),
            n
        }(kt);
        vl.styles = [Ga.globalCss, ul],
        ml([It()], vl.prototype, "onChange", 2),
        vl = ml([At("w3m-search-input")], vl);
        var pl = Z(Er || (Er = (0,
        v.Z)(["@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-accent-color)}"])))
          , fl = Object.defineProperty
          , wl = Object.getOwnPropertyDescriptor
          , gl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    return tt(Ir || (Ir = (0,
                    v.Z)(['<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>'])))
                }
            }]),
            n
        }(kt);
        gl.styles = [Ga.globalCss, pl],
        gl = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? wl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && fl(e, n, a),
            a
        }([At("w3m-spinner")], gl);
        var bl = Z(_r || (_r = (0,
        v.Z)(["span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}"])))
          , yl = Object.defineProperty
          , xl = Object.getOwnPropertyDescriptor
          , kl = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? xl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && yl(e, n, a),
            a
        }
          , Zl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).variant = "medium-regular",
                t.color = "primary",
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = {
                        "w3m-big-bold": "big-bold" === this.variant,
                        "w3m-medium-regular": "medium-regular" === this.variant,
                        "w3m-small-regular": "small-regular" === this.variant,
                        "w3m-small-thin": "small-thin" === this.variant,
                        "w3m-xsmall-regular": "xsmall-regular" === this.variant,
                        "w3m-xsmall-bold": "xsmall-bold" === this.variant,
                        "w3m-color-primary": "primary" === this.color,
                        "w3m-color-secondary": "secondary" === this.color,
                        "w3m-color-tertiary": "tertiary" === this.color,
                        "w3m-color-inverse": "inverse" === this.color,
                        "w3m-color-accnt": "accent" === this.color,
                        "w3m-color-error": "error" === this.color
                    };
                    return tt(Pr || (Pr = (0,
                    v.Z)(['<span><slot class="', '"></slot></span>'])), Wt(t))
                }
            }]),
            n
        }(kt);
        Zl.styles = [Ga.globalCss, bl],
        kl([It()], Zl.prototype, "variant", 2),
        kl([It()], Zl.prototype, "color", 2),
        Zl = kl([At("w3m-text")], Zl);
        var Cl = Z(jr || (jr = (0,
        v.Z)(["div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}"])))
          , Al = Object.defineProperty
          , Ol = Object.getOwnPropertyDescriptor
          , El = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Ol(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Al(e, n, a),
            a
        }
          , Il = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).symbol = void 0,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t, e = Do.getTokenIcon(null != (t = this.symbol) ? t : "");
                    return e ? tt(Mr || (Mr = (0,
                    v.Z)(['<div><img src="', '" alt="', '"></div>'])), e, this.id) : vo.TOKEN_PLACEHOLDER
                }
            }]),
            n
        }(kt);
        Il.styles = [Ga.globalCss, Cl],
        El([It()], Il.prototype, "symbol", 2),
        Il = El([At("w3m-token-image")], Il);
        var _l = Z(Tr || (Tr = (0,
        v.Z)(["button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}"])))
          , Pl = Object.defineProperty
          , jl = Object.getOwnPropertyDescriptor
          , Ml = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? jl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Pl(e, n, a),
            a
        }
          , Tl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).onClick = function() {
                    return null
                }
                ,
                t.name = "",
                t.walletId = "",
                t.label = void 0,
                t.imageId = void 0,
                t.installed = !1,
                t.recent = !1,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "sublabelTemplate",
                value: function() {
                    return this.recent ? tt(Wr || (Wr = (0,
                    v.Z)(['<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>']))) : this.installed ? tt(Sr || (Sr = (0,
                    v.Z)(['<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>']))) : null
                }
            }, {
                key: "handleClick",
                value: function() {
                    Pt.uA.click({
                        name: "WALLET_BUTTON",
                        walletId: this.walletId
                    }),
                    this.onClick()
                }
            }, {
                key: "render",
                value: function() {
                    var t;
                    return tt(Dr || (Dr = (0,
                    v.Z)(['<button @click="', '"><div><w3m-wallet-image walletId="', '" imageId="', '"></w3m-wallet-image><w3m-text variant="xsmall-regular">', "</w3m-text>", "</div></button>"])), this.handleClick.bind(this), this.walletId, this.imageId, null != (t = this.label) ? t : Do.getWalletName(this.name, !0), this.sublabelTemplate())
                }
            }]),
            n
        }(kt);
        Tl.styles = [Ga.globalCss, _l],
        Ml([It()], Tl.prototype, "onClick", 2),
        Ml([It()], Tl.prototype, "name", 2),
        Ml([It()], Tl.prototype, "walletId", 2),
        Ml([It()], Tl.prototype, "label", 2),
        Ml([It()], Tl.prototype, "imageId", 2),
        Ml([It()], Tl.prototype, "installed", 2),
        Ml([It()], Tl.prototype, "recent", 2),
        Tl = Ml([At("w3m-wallet-button")], Tl);
        var Wl = Z(Lr || (Lr = (0,
        v.Z)([":host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}"])))
          , Sl = Object.defineProperty
          , Dl = Object.getOwnPropertyDescriptor
          , Ll = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Dl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Sl(e, n, a),
            a
        }
          , Rl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).walletId = "",
                t.imageId = void 0,
                t.imageUrl = void 0,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t, e = null != (t = this.imageUrl) && t.length ? this.imageUrl : Do.getWalletIcon({
                        id: this.walletId,
                        image_id: this.imageId
                    });
                    return tt(Rr || (Rr = (0,
                    v.Z)(["", ""])), e.length ? tt(Nr || (Nr = (0,
                    v.Z)(['<div><img src="', '" alt="', '"></div>'])), e, this.id) : vo.WALLET_PLACEHOLDER)
                }
            }]),
            n
        }(kt);
        Rl.styles = [Ga.globalCss, Wl],
        Ll([It()], Rl.prototype, "walletId", 2),
        Ll([It()], Rl.prototype, "imageId", 2),
        Ll([It()], Rl.prototype, "imageUrl", 2),
        Rl = Ll([At("w3m-wallet-image")], Rl);
        var Nl = Object.defineProperty
          , $l = Object.getOwnPropertyDescriptor
          , zl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).unwatchAccount = void 0,
                Pt.CV.getAccount(),
                t.fetchProfile(),
                t.fetchBalance(),
                t.unwatchAccount = Pt.Id.client().watchAccount((function(e) {
                    var n = Pt.CV.state
                      , r = n.address
                      , i = n.isConnected;
                    e.isConnected && e.address !== r && (t.fetchProfile(e.address),
                    t.fetchBalance(e.address),
                    Pt.CV.setAddress(e.address)),
                    e.isConnected || Pt.CV.resetAccount(),
                    i !== e.isConnected && Pt.jb.close(),
                    !i && e.isConnected ? Pt.uA.track({
                        name: "ACCOUNT_CONNECTED"
                    }) : i && !e.isConnected && Pt.uA.track({
                        name: "ACCOUNT_DISCONNECTED"
                    }),
                    Pt.CV.setIsConnected(e.isConnected)
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unwatchAccount) || t.call(this)
                }
            }, {
                key: "fetchProfile",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t(e) {
                        var n, r;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (r = null == (n = Pt.zb.state.chains) ? void 0 : n.find((function(t) {
                                        return 1 === t.id
                                    }
                                    )),
                                    !Pt.t0.state.enableAccountView || !r) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.prev = 2,
                                    t.next = 5,
                                    Pt.CV.fetchProfile(Do.preloadImage, e);
                                case 5:
                                    t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7,
                                    t.t0 = t.catch(2),
                                    console.error(t.t0),
                                    Pt.Vs.openToast(Do.getErrorMessage(t.t0), "error");
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[2, 7]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "fetchBalance",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t(e) {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!Pt.t0.state.enableAccountView) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.prev = 1,
                                    t.next = 4,
                                    Pt.CV.fetchBalance(e);
                                case 4:
                                    t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6,
                                    t.t0 = t.catch(1),
                                    console.error(t.t0),
                                    Pt.Vs.openToast(Do.getErrorMessage(t.t0), "error");
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 6]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }]),
            n
        }(kt);
        zl = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? $l(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Nl(e, n, a),
            a
        }([At("w3m-account-context")], zl);
        var Hl = Object.defineProperty
          , Vl = Object.getOwnPropertyDescriptor
          , Ul = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Vl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Hl(e, n, a),
            a
        }
          , Bl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).preload = !0,
                t.preloadData(),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "loadImages",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t(e) {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0,
                                    t.t0 = null != e && e.length,
                                    !t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 5,
                                    Promise.all(e.map(function() {
                                        var t = (0,
                                        c.Z)((0,
                                        l.Z)().mark((function t(e) {
                                            return (0,
                                            l.Z)().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.abrupt("return", Do.preloadImage(e));
                                                    case 1:
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
                                    }()));
                                case 5:
                                    t.next = 10;
                                    break;
                                case 7:
                                    t.prev = 7,
                                    t.t1 = t.catch(0),
                                    console.info("Unsuccessful attempt at preloading some images", e);
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 7]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "preloadListings",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e, n, r, i, a, o, c;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!Pt.t0.state.enableExplorer) {
                                        t.next = 10;
                                        break
                                    }
                                    return n = Pt.zb.state.chains,
                                    t.next = 4,
                                    Promise.all([Pt.uc.getRecomendedWallets(), Pt.uc.getInjectedWallets()]);
                                case 4:
                                    return Pt.zb.setIsDataLoaded(!0),
                                    r = Pt.uc.state.recomendedWallets,
                                    i = So.installedInjectedWallets(),
                                    a = null != (e = null === n || void 0 === n ? void 0 : n.map((function(t) {
                                        return Do.getChainIcon(t.id)
                                    }
                                    ))) ? e : [],
                                    o = r.map((function(t) {
                                        return Do.getWalletIcon(t)
                                    }
                                    )),
                                    c = i.map((function(t) {
                                        return Do.getWalletIcon(t)
                                    }
                                    )),
                                    t.next = 8,
                                    this.loadImages([].concat((0,
                                    s.Z)(a), (0,
                                    s.Z)(o), (0,
                                    s.Z)(c)));
                                case 8:
                                    t.next = 11;
                                    break;
                                case 10:
                                    Pt.zb.setIsDataLoaded(!0);
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "preloadCustomImages",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e = Do.getCustomImageUrls(),
                                    t.next = 3,
                                    this.loadImages(e);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "preloadData",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0,
                                    t.t0 = this.preload,
                                    !t.t0) {
                                        t.next = 6;
                                        break
                                    }
                                    return this.preload = !1,
                                    t.next = 6,
                                    Promise.all([this.preloadListings(), this.preloadCustomImages()]);
                                case 6:
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8,
                                    t.t1 = t.catch(0),
                                    console.error(t.t1),
                                    Pt.Vs.openToast("Failed preloading", "error");
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 8]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }]),
            n
        }(kt);
        Ul([_t()], Bl.prototype, "preload", 2),
        Bl = Ul([At("w3m-explorer-context")], Bl);
        var Fl = Object.defineProperty
          , Gl = Object.getOwnPropertyDescriptor
          , ql = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Gl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Fl(e, n, a),
            a
        }
          , Kl = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                (0,
                u.Z)(this, n),
                (t = e.call(this)).activeChainId = void 0,
                t.unwatchNetwork = void 0;
                var r = Pt.zb.getSelectedChain();
                return t.activeChainId = null === r || void 0 === r ? void 0 : r.id,
                t.unwatchNetwork = Pt.Id.client().watchNetwork((function(e) {
                    var n = e.chain;
                    n && t.activeChainId !== n.id && (Pt.zb.setSelectedChain(n),
                    t.activeChainId = n.id,
                    Pt.CV.resetBalance(),
                    t.fetchBalance())
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unwatchNetwork) || t.call(this)
                }
            }, {
                key: "fetchBalance",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!Pt.t0.state.enableAccountView) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.prev = 1,
                                    t.next = 4,
                                    Pt.CV.fetchBalance();
                                case 4:
                                    t.next = 9;
                                    break;
                                case 6:
                                    t.prev = 6,
                                    t.t0 = t.catch(1),
                                    console.error(t.t0),
                                    Pt.Vs.openToast(Do.getErrorMessage(t.t0), "error");
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[1, 6]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }]),
            n
        }(kt);
        ql([_t()], Kl.prototype, "activeChainId", 2),
        Kl = ql([At("w3m-network-context")], Kl);
        var Yl = Object.defineProperty
          , Xl = Object.getOwnPropertyDescriptor
          , Ql = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).unsubscribeTheme = void 0,
                Ga.setTheme(),
                t.unsubscribeTheme = Pt.Ic.subscribe(Ga.setTheme),
                t.preloadThemeImages(),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeTheme) || t.call(this)
                }
            }, {
                key: "preloadThemeImages",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e, n;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0,
                                    e = Pt.Ic.state.themeVariables,
                                    n = [null === e || void 0 === e ? void 0 : e["--w3m-background-image-url"], null === e || void 0 === e ? void 0 : e["--w3m-logo-image-url"]].filter(Boolean),
                                    t.t0 = n.length,
                                    !t.t0) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 6,
                                    Promise.all(n.map(function() {
                                        var t = (0,
                                        c.Z)((0,
                                        l.Z)().mark((function t(e) {
                                            return (0,
                                            l.Z)().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.abrupt("return", Do.preloadImage(e));
                                                    case 1:
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
                                    }()));
                                case 6:
                                    t.next = 11;
                                    break;
                                case 8:
                                    t.prev = 8,
                                    t.t1 = t.catch(0),
                                    console.info("Unsuccessful attempt at preloading some images");
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 8]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }]),
            n
        }(kt);
        Ql = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Xl(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Yl(e, n, a),
            a
        }([At("w3m-theme-context")], Ql);
        var Jl, tc = Object.defineProperty, ec = Object.getOwnPropertyDescriptor, nc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).unwatchOptions = void 0,
                t.unwatchAccount = void 0,
                t.timeout = void 0,
                t.isGenerated = !1,
                t.selectedChainId = null == (Jl = Pt.zb.state.selectedChain) ? void 0 : Jl.id,
                t.isAccountConnected = Pt.CV.state.isConnected,
                t.lastRetry = Date.now(),
                t.unwatchOptions = Pt.zb.subscribe((function(e) {
                    var n, r;
                    (null == (n = e.selectedChain) ? void 0 : n.id) !== t.selectedChainId && (t.selectedChainId = null == (r = e.selectedChain) ? void 0 : r.id,
                    t.connectAndWait())
                }
                )),
                t.unwatchAccount = Pt.CV.subscribe((function(e) {
                    (t.isAccountConnected !== e.isConnected || !t.isGenerated) && (t.isAccountConnected = e.isConnected,
                    setTimeout(t.connectAndWait.bind((0,
                    a.Z)(t)), 0))
                }
                )),
                document.addEventListener("visibilitychange", t.onVisibilityChange.bind((0,
                a.Z)(t))),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t, e;
                    null == (t = this.unwatchOptions) || t.call(this),
                    null == (e = this.unwatchAccount) || e.call(this),
                    document.removeEventListener("visibilitychange", this.onVisibilityChange)
                }
            }, {
                key: "connectAndWait",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e, n, r;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (clearTimeout(this.timeout),
                                    this.isAccountConnected) {
                                        t.next = 15;
                                        break
                                    }
                                    if (this.isGenerated = !0,
                                    this.timeout = setTimeout(this.connectAndWait.bind(this), 18e4),
                                    t.prev = 2,
                                    e = Pt.zb.state,
                                    n = e.standaloneUri,
                                    r = e.selectedChain,
                                    !n) {
                                        t.next = 8;
                                        break
                                    }
                                    Pt.kD.setPairingUri(n),
                                    t.next = 10;
                                    break;
                                case 8:
                                    return t.next = 10,
                                    Pt.Id.client().connectWalletConnect((function(t) {
                                        return Pt.kD.setPairingUri(t)
                                    }
                                    ), null === r || void 0 === r ? void 0 : r.id);
                                case 10:
                                    t.next = 15;
                                    break;
                                case 12:
                                    t.prev = 12,
                                    t.t0 = t.catch(2),
                                    console.error(t.t0),
                                    Pt.kD.setPairingError(!0),
                                    Pt.Vs.openToast("Connection request declined", "error"),
                                    Date.now() - this.lastRetry >= 1e3 && (this.lastRetry = Date.now(),
                                    this.connectAndWait());
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 12]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "onVisibilityChange",
                value: function() {
                    !document.hidden && Pt.zv.isMobile() && setTimeout(this.connectAndWait.bind(this), 1e3)
                }
            }]),
            n
        }(kt);
        nc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? ec(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && tc(e, n, a),
            a
        }([At("w3m-wc-connection-context")], nc);
        var rc = Z($r || ($r = (0,
        v.Z)([":host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}"])))
          , ic = Object.defineProperty
          , ac = Object.getOwnPropertyDescriptor
          , oc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? ac(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && ic(e, n, a),
            a
        }
          , lc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).balance = "hide",
                t.avatar = "show",
                Do.rejectStandaloneButtonComponent(),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "onOpen",
                value: function() {
                    Pt.zb.state.isStandalone || (Pt.uA.click({
                        name: "ACCOUNT_BUTTON"
                    }),
                    Pt.jb.open({
                        route: "Account"
                    }))
                }
            }, {
                key: "accountTemplate",
                value: function() {
                    var t = "show" === this.avatar;
                    return tt(zr || (zr = (0,
                    v.Z)(["", "<w3m-address-text></w3m-address-text>"])), t ? tt(Hr || (Hr = (0,
                    v.Z)(["<w3m-avatar></w3m-avatar>"]))) : null)
                }
            }, {
                key: "render",
                value: function() {
                    var t = "show" === this.balance
                      , e = {
                        "w3m-no-avatar": "hide" === this.avatar
                    };
                    return t ? tt(Vr || (Vr = (0,
                    v.Z)(['<div><w3m-balance></w3m-balance><button @click="', '" class="', '">', "</button></div>"])), this.onOpen, Wt(e), this.accountTemplate()) : tt(Ur || (Ur = (0,
                    v.Z)(['<w3m-button-big @click="', '">', "</w3m-button-big>"])), this.onOpen, this.accountTemplate())
                }
            }]),
            n
        }(kt);
        lc.styles = [Ga.globalCss, rc],
        oc([It()], lc.prototype, "balance", 2),
        oc([It()], lc.prototype, "avatar", 2),
        lc = oc([At("w3m-account-button")], lc);
        var cc = Z(Br || (Br = (0,
        v.Z)(["button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}"])))
          , sc = Object.defineProperty
          , uc = Object.getOwnPropertyDescriptor
          , dc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? uc(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && sc(e, n, a),
            a
        }
          , hc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                (0,
                u.Z)(this, n),
                (t = e.call(this)).chainId = 0,
                t.label = "",
                t.unsubscribeNetwork = void 0;
                var r = Pt.zb.state.selectedChain;
                return t.chainId = null === r || void 0 === r ? void 0 : r.id,
                t.label = null === r || void 0 === r ? void 0 : r.name,
                t.unsubscribeNetwork = Pt.zb.subscribe((function(e) {
                    var n = e.selectedChain;
                    t.chainId = null === n || void 0 === n ? void 0 : n.id,
                    t.label = null === n || void 0 === n ? void 0 : n.name
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeNetwork) || t.call(this)
                }
            }, {
                key: "onClick",
                value: function() {
                    Pt.AV.push("SelectNetwork")
                }
            }, {
                key: "render",
                value: function() {
                    var t = Pt.zb.state
                      , e = t.chains
                      , n = t.selectedChain
                      , r = null === e || void 0 === e ? void 0 : e.map((function(t) {
                        return t.id
                    }
                    ))
                      , i = n && (null === r || void 0 === r ? void 0 : r.includes(n.id))
                      , a = e && e.length <= 1 && i;
                    return tt(Fr || (Fr = (0,
                    v.Z)(['<button @click="', '" ?disabled="', '"><w3m-network-image chainId="', '"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">', "</w3m-text></button>"])), this.onClick, a, this.chainId, this.label)
                }
            }]),
            n
        }(kt);
        hc.styles = [Ga.globalCss, cc],
        dc([_t()], hc.prototype, "chainId", 2),
        dc([_t()], hc.prototype, "label", 2),
        hc = dc([At("w3m-account-network-button")], hc);
        var mc = Z(Gr || (Gr = (0,
        v.Z)(["@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}"])))
          , vc = Object.defineProperty
          , pc = Object.getOwnPropertyDescriptor
          , fc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? pc(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && vc(e, n, a),
            a
        }
          , wc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).address = void 0,
                t.name = void 0,
                t.loading = !0,
                t.variant = "button",
                t.unsubscribeAccount = void 0,
                t.address = Pt.CV.state.address,
                t.name = Pt.CV.state.profileName,
                t.loading = !!Pt.CV.state.profileLoading,
                t.unsubscribeAccount = Pt.CV.subscribe((function(e) {
                    var n = e.address
                      , r = e.profileName
                      , i = e.profileLoading;
                    t.address = n,
                    t.name = r,
                    t.loading = !!i
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeAccount) || t.call(this)
                }
            }, {
                key: "render",
                value: function() {
                    var t, e = "button" === this.variant, n = {
                        "w3m-loading": this.loading
                    };
                    return tt(qr || (qr = (0,
                    v.Z)(['<w3m-text class="', '" variant="', '" color="', '">', "</w3m-text>"])), Wt(n), e ? "medium-regular" : "big-bold", e ? "inverse" : "primary", this.name ? this.name : Do.truncate(null != (t = this.address) ? t : ""))
                }
            }]),
            n
        }(kt);
        wc.styles = [Ga.globalCss, mc],
        fc([_t()], wc.prototype, "address", 2),
        fc([_t()], wc.prototype, "name", 2),
        fc([_t()], wc.prototype, "loading", 2),
        fc([It()], wc.prototype, "variant", 2),
        wc = fc([At("w3m-address-text")], wc);
        var gc = {
            onConnecting: function(t) {
                Do.goToConnectingView(t)
            },
            onExternal: function(t) {
                Do.handleConnectorConnection(t)
            },
            manualWalletsTemplate: function() {
                var t = this;
                return So.manualWallets().map((function(e) {
                    return tt(Kr || (Kr = (0,
                    v.Z)(['<w3m-wallet-button walletId="', '" name="', '" .onClick="', '"></w3m-wallet-button>'])), e.id, e.name, (function() {
                        return t.onConnecting(e)
                    }
                    ))
                }
                ))
            },
            recomendedWalletsTemplate: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return So.recomendedWallets(e).map((function(e) {
                    return tt(Yr || (Yr = (0,
                    v.Z)(['<w3m-wallet-button walletId="', '" imageId="', '" name="', '" .onClick="', '"></w3m-wallet-button>'])), e.id, e.image_id, e.name, (function() {
                        return t.onConnecting(e)
                    }
                    ))
                }
                ))
            },
            externalWalletsTemplate: function() {
                var t = this;
                return So.externalWallets().map((function(e) {
                    return tt(Xr || (Xr = (0,
                    v.Z)(['<w3m-wallet-button name="', '" walletId="', '" .onClick="', '"></w3m-wallet-button>'])), e.name, e.id, (function() {
                        return t.onExternal(e.id)
                    }
                    ))
                }
                ))
            },
            recentWalletTemplate: function() {
                var t = this
                  , e = So.recentWallet();
                if (e)
                    return tt(Qr || (Qr = (0,
                    v.Z)(['<w3m-wallet-button name="', '" walletId="', '" imageId="', '" .recent="', '" .onClick="', '"></w3m-wallet-button>'])), e.name, e.id, e.image_id, !0, (function() {
                        return t.onConnecting(e)
                    }
                    ))
            },
            installedInjectedWalletsTemplate: function() {
                var t = this;
                return So.installedInjectedWallets().map((function(e) {
                    return tt(Jr || (Jr = (0,
                    v.Z)(['<w3m-wallet-button .installed="', '" name="', '" walletId="', '" imageId="', '" .onClick="', '"></w3m-wallet-button>'])), !0, e.name, e.id, e.image_id, (function() {
                        return t.onConnecting(e)
                    }
                    ))
                }
                ))
            },
            injectedWalletsTemplate: function() {
                var t = this;
                return So.injectedWallets().map((function(e) {
                    return tt(ti || (ti = (0,
                    v.Z)(['<w3m-wallet-button name="', '" walletId="', '" imageId="', '" .onClick="', '"></w3m-wallet-button>'])), e.name, e.id, e.image_id, (function() {
                        return t.onConnecting(e)
                    }
                    ))
                }
                ))
            }
        }
          , bc = Z(ei || (ei = (0,
        v.Z)(["@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.w3m-track svg{margin:0 5px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}"])))
          , yc = Object.defineProperty
          , xc = Object.getOwnPropertyDescriptor
          , kc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "onGoToQrcode",
                value: function() {
                    Pt.AV.push("Qrcode")
                }
            }, {
                key: "onGetWallet",
                value: function() {
                    Pt.AV.push("GetWallet")
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = Pt.uc.state.recomendedWallets
                      , n = [].concat((0,
                    s.Z)(e), (0,
                    s.Z)(e))
                      , r = gc.externalWalletsTemplate()
                      , i = gc.installedInjectedWalletsTemplate()
                      , a = [].concat((0,
                    s.Z)(i), (0,
                    s.Z)(r)).length > 0
                      , o = 2 * Pt.zv.RECOMMENDED_WALLET_AMOUNT;
                    return tt(ni || (ni = (0,
                    v.Z)(['<w3m-modal-header title="Connect your wallet" .onAction="', '" .actionIcon="', '"></w3m-modal-header><w3m-modal-content><div class="w3m-title">', '<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">', '</div><w3m-button-big @click="', '"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>', '<w3m-info-footer><w3m-text color="secondary" variant="small-thin">', '</w3m-text><w3m-button variant="outline" .iconRight="', '" .onClick="', "\">I don't have a wallet</w3m-button></w3m-info-footer>"])), this.onGoToQrcode, vo.QRCODE_ICON, vo.MOBILE_ICON, (0,
                    s.Z)(Array(o)).map((function(t, e) {
                        var r = n[e % n.length];
                        return r ? tt(ri || (ri = (0,
                        v.Z)(['<w3m-wallet-image walletId="', '" imageId="', '"></w3m-wallet-image>'])), r.id, r.image_id) : vo.WALLET_PLACEHOLDER
                    }
                    )), Do.handleAndroidLinking, a ? tt(ii || (ii = (0,
                    v.Z)(['<w3m-modal-footer><div class="w3m-title">', '<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">', " ", "</div></w3m-modal-footer>"])), vo.WALLET_ICON, i, r) : null, "Choose WalletConnect to see supported apps on your device".concat(a ? ", or select from other options" : ""), vo.ARROW_UP_RIGHT_ICON, (function() {
                        return t.onGetWallet()
                    }
                    ))
                }
            }]),
            n
        }(kt);
        kc.styles = [Ga.globalCss, bc],
        kc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? xc(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && yc(e, n, a),
            a
        }([At("w3m-android-wallet-selection")], kc);
        var Zc = Z(ai || (ai = (0,
        v.Z)(["@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}"])))
          , Cc = Object.defineProperty
          , Ac = Object.getOwnPropertyDescriptor
          , Oc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Ac(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Cc(e, n, a),
            a
        }
          , Ec = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).address = void 0,
                t.avatar = void 0,
                t.loading = !0,
                t.size = "small",
                t.unsubscribeAccount = void 0,
                t.address = Pt.CV.state.address,
                t.avatar = Pt.CV.state.profileAvatar,
                t.loading = !!Pt.CV.state.profileLoading,
                t.unsubscribeAccount = Pt.CV.subscribe((function(e) {
                    var n = e.address
                      , r = e.profileAvatar
                      , i = e.profileLoading;
                    t.address = n,
                    t.avatar = r,
                    t.loading = !!i
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeAccount) || t.call(this)
                }
            }, {
                key: "render",
                value: function() {
                    var t = {
                        "w3m-placeholder": !0,
                        "w3m-small": "small" === this.size,
                        "w3m-medium": "medium" === this.size
                    };
                    return this.avatar ? tt(oi || (oi = (0,
                    v.Z)(['<img class="', '" src="', '">'])), Wt(t), this.avatar) : this.address ? (Do.generateAvatarColors(this.address),
                    tt(li || (li = (0,
                    v.Z)(['<div class="', '">', "</div>"])), Wt(t), this.loading ? tt(ci || (ci = (0,
                    v.Z)(['<div class="w3m-loader"></div>']))) : null)) : null
                }
            }]),
            n
        }(kt);
        Ec.styles = [Ga.globalCss, Zc],
        Oc([_t()], Ec.prototype, "address", 2),
        Oc([_t()], Ec.prototype, "avatar", 2),
        Oc([_t()], Ec.prototype, "loading", 2),
        Oc([It()], Ec.prototype, "size", 2),
        Ec = Oc([At("w3m-avatar")], Ec);
        var Ic = Z(si || (si = (0,
        v.Z)(["div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}"])))
          , _c = Object.defineProperty
          , Pc = Object.getOwnPropertyDescriptor
          , jc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Pc(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && _c(e, n, a),
            a
        }
          , Mc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t, r, i;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).symbol = void 0,
                t.amount = void 0,
                t.unsubscribeAccount = void 0,
                t.symbol = null == (r = Pt.CV.state.balance) ? void 0 : r.symbol,
                t.amount = null == (i = Pt.CV.state.balance) ? void 0 : i.amount,
                t.unsubscribeAccount = Pt.CV.subscribe((function(e) {
                    var n = e.balance;
                    t.symbol = null === n || void 0 === n ? void 0 : n.symbol,
                    t.amount = null === n || void 0 === n ? void 0 : n.amount
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeAccount) || t.call(this)
                }
            }, {
                key: "render",
                value: function() {
                    var t = "_._";
                    return "0.0" === this.amount ? t = 0 : "string" == typeof this.amount && this.amount.length > 6 ? t = parseFloat(this.amount).toFixed(3) : "string" == typeof this.amount && (t = parseFloat(this.amount)),
                    tt(ui || (ui = (0,
                    v.Z)(['<div><w3m-token-image symbol="', '"></w3m-token-image><w3m-text variant="medium-regular" color="primary">', " ", "</w3m-text></div>"])), this.symbol, t, this.symbol)
                }
            }]),
            n
        }(kt);
        Mc.styles = [Ga.globalCss, Ic],
        jc([_t()], Mc.prototype, "symbol", 2),
        jc([_t()], Mc.prototype, "amount", 2),
        Mc = jc([At("w3m-balance")], Mc);
        var Tc = Z(di || (di = (0,
        v.Z)([":host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}"])))
          , Wc = Object.defineProperty
          , Sc = Object.getOwnPropertyDescriptor
          , Dc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Sc(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Wc(e, n, a),
            a
        }
          , Lc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).loading = !1,
                t.label = "Connect Wallet",
                t.icon = "show",
                t.modalUnsub = void 0,
                Do.rejectStandaloneButtonComponent(),
                t.modalUnsub = Pt.jb.subscribe((function(e) {
                    e.open && (t.loading = !0),
                    e.open || (t.loading = !1)
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.modalUnsub) || t.call(this)
                }
            }, {
                key: "iconTemplate",
                value: function() {
                    return "show" === this.icon ? vo.WALLET_CONNECT_ICON : null
                }
            }, {
                key: "onClick",
                value: function() {
                    Pt.CV.state.isConnected ? this.onDisconnect() : this.onConnect()
                }
            }, {
                key: "onConnect",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.loading = !0,
                                    Pt.uA.click({
                                        name: "CONNECT_BUTTON"
                                    }),
                                    t.next = 4,
                                    Pt.jb.open();
                                case 4:
                                    Pt.jb.state.open || (this.loading = !1);
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "onDisconnect",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return Pt.uA.click({
                                        name: "DISCONNECT_BUTTON"
                                    }),
                                    t.next = 3,
                                    Pt.Id.client().disconnect();
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "render",
                value: function() {
                    return tt(hi || (hi = (0,
                    v.Z)(['<w3m-button-big .disabled="', '" @click="', '">', "</w3m-button-big>"])), this.loading, this.onClick, this.loading ? tt(mi || (mi = (0,
                    v.Z)(['<w3m-spinner></w3m-spinner><w3m-text variant="medium-regular" color="accent">Connecting...</w3m-text>']))) : tt(vi || (vi = (0,
                    v.Z)(["", '<w3m-text variant="medium-regular" color="inverse">', "</w3m-text>"])), this.iconTemplate(), this.label))
                }
            }]),
            n
        }(kt);
        Lc.styles = [Ga.globalCss, Tc],
        Dc([_t()], Lc.prototype, "loading", 2),
        Dc([It()], Lc.prototype, "label", 2),
        Dc([It()], Lc.prototype, "icon", 2),
        Lc = Dc([At("w3m-connect-button")], Lc);
        var Rc = Z(pi || (pi = (0,
        v.Z)(["@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}"])))
          , Nc = Object.defineProperty
          , $c = Object.getOwnPropertyDescriptor
          , zc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? $c(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Nc(e, n, a),
            a
        }
          , Hc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).walletId = void 0,
                t.imageId = void 0,
                t.isError = !1,
                t.isStale = !1,
                t.label = "",
                t
            }
            return (0,
            d.Z)(n, [{
                key: "svgLoaderTemplate",
                value: function() {
                    var t, e, n = null != (e = null == (t = Pt.Ic.state.themeVariables) ? void 0 : t["--w3m-wallet-icon-large-border-radius"]) ? e : Ga.getPreset("--w3m-wallet-icon-large-border-radius"), r = 0;
                    r = n.includes("%") ? .88 * parseInt(n, 10) : parseInt(n, 10);
                    var i = 317 - 1.57 * (r *= 1.17)
                      , a = 425 - 1.8 * r;
                    return tt(fi || (fi = (0,
                    v.Z)(['<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="', '"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ', '" stroke-dashoffset="', '"></use></svg>'])), r, i, a)
                }
            }, {
                key: "render",
                value: function() {
                    var t = {
                        "w3m-error": this.isError,
                        "w3m-stale": this.isStale
                    };
                    return tt(wi || (wi = (0,
                    v.Z)(['<div class="', '">', '<w3m-wallet-image walletId="', '" imageId="', '"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="', '">', "</w3m-text>"])), Wt(t), this.svgLoaderTemplate(), this.walletId, this.imageId, this.isError ? "error" : "primary", this.isError ? "Connection declined" : this.label)
                }
            }]),
            n
        }(kt);
        Hc.styles = [Ga.globalCss, Rc],
        zc([It()], Hc.prototype, "walletId", 2),
        zc([It()], Hc.prototype, "imageId", 2),
        zc([It()], Hc.prototype, "isError", 2),
        zc([It()], Hc.prototype, "isStale", 2),
        zc([It()], Hc.prototype, "label", 2),
        Hc = zc([At("w3m-connector-waiting")], Hc);
        var Vc = Object.defineProperty
          , Uc = Object.getOwnPropertyDescriptor
          , Bc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Uc(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Vc(e, n, a),
            a
        }
          , Fc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).isConnected = !1,
                t.label = "Connect Wallet",
                t.icon = "show",
                t.avatar = "show",
                t.balance = "hide",
                t.unsubscribeAccount = void 0,
                Do.rejectStandaloneButtonComponent(),
                t.isConnected = Pt.CV.state.isConnected,
                t.unsubscribeAccount = Pt.CV.subscribe((function(e) {
                    var n = e.isConnected;
                    t.isConnected = n
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeAccount) || t.call(this)
                }
            }, {
                key: "render",
                value: function() {
                    var t = Pt.t0.state.enableAccountView
                      , e = this.balance
                      , n = this.label
                      , r = this.icon
                      , i = this.avatar;
                    return this.isConnected && t ? tt(gi || (gi = (0,
                    v.Z)(['<w3m-account-button balance="', '" avatar="', '"></w3m-account-button>'])), e, i) : tt(bi || (bi = (0,
                    v.Z)(['<w3m-connect-button label="', '" icon="', '"></w3m-connect-button>'])), this.isConnected ? "Disconnect" : n, r)
                }
            }]),
            n
        }(kt);
        Bc([_t()], Fc.prototype, "isConnected", 2),
        Bc([It()], Fc.prototype, "label", 2),
        Bc([It()], Fc.prototype, "icon", 2),
        Bc([It()], Fc.prototype, "avatar", 2),
        Bc([It()], Fc.prototype, "balance", 2),
        Fc = Bc([At("w3m-core-button")], Fc);
        var Gc = Z(yi || (yi = (0,
        v.Z)([".w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}"])))
          , qc = Object.defineProperty
          , Kc = Object.getOwnPropertyDescriptor
          , Yc = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = Pt.zb.state.isStandalone
                      , e = Pt.t0.state
                      , n = e.explorerExcludedWalletIds
                      , r = e.enableExplorer
                      , i = "ALL" !== n && r
                      , a = gc.manualWalletsTemplate()
                      , o = gc.recomendedWalletsTemplate()
                      , l = gc.externalWalletsTemplate()
                      , c = gc.recentWalletTemplate()
                      , u = gc.installedInjectedWalletsTemplate()
                      , d = [c].concat((0,
                    s.Z)(a), (0,
                    s.Z)(o));
                    t || (d = [].concat((0,
                    s.Z)(u), [c], (0,
                    s.Z)(l), (0,
                    s.Z)(a), (0,
                    s.Z)(o)));
                    var h = (d = d.filter(Boolean)).length > 4 || i
                      , m = []
                      , p = !!(m = h ? d.slice(0, 3) : d).length;
                    return tt(xi || (xi = (0,
                    v.Z)(['<w3m-modal-header .border="', '" title="Connect your wallet" .onAction="', '" .actionIcon="', '"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">', '<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">', '<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>', ""])), !0, Do.handleUriCopy, vo.COPY_ICON, vo.MOBILE_ICON, vo.SCAN_ICON, p ? tt(ki || (ki = (0,
                    v.Z)(['<w3m-modal-footer><div class="w3m-desktop-title">', '<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">', " ", "</div></w3m-modal-footer>"])), vo.DESKTOP_ICON, m, h ? tt(Zi || (Zi = (0,
                    v.Z)(["<w3m-view-all-wallets-button></w3m-view-all-wallets-button>"]))) : null) : null)
                }
            }]),
            n
        }(kt);
        Yc.styles = [Ga.globalCss, Gc],
        Yc = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Kc(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && qc(e, n, a),
            a
        }([At("w3m-desktop-wallet-selection")], Yc);
        var Xc = Z(Ci || (Ci = (0,
        v.Z)(["div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}"])))
          , Qc = Object.defineProperty
          , Jc = Object.getOwnPropertyDescriptor
          , ts = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = Pt.t0.state
                      , e = t.termsOfServiceUrl
                      , n = t.privacyPolicyUrl;
                    return (null !== e && void 0 !== e ? e : n) ? tt(Ai || (Ai = (0,
                    v.Z)(['<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app\'s ', " ", " ", "</w3m-text></div>"])), e ? tt(Oi || (Oi = (0,
                    v.Z)(['<a href="', '" target="_blank" rel="noopener noreferrer">Terms of Service</a>'])), e) : null, e && n ? "and" : null, n ? tt(Ei || (Ei = (0,
                    v.Z)(['<a href="', '" target="_blank" rel="noopener noreferrer">Privacy Policy</a>'])), n) : null) : null
                }
            }]),
            n
        }(kt);
        ts.styles = [Ga.globalCss, Xc],
        ts = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Jc(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Qc(e, n, a),
            a
        }([At("w3m-legal-notice")], ts);
        var es = Z(Ii || (Ii = (0,
        v.Z)(["div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}"])))
          , ns = Object.defineProperty
          , rs = Object.getOwnPropertyDescriptor
          , is = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "onQrcode",
                value: function() {
                    Pt.AV.push("Qrcode")
                }
            }, {
                key: "render",
                value: function() {
                    var t = Pt.zb.state.isStandalone
                      , e = Pt.t0.state
                      , n = e.explorerExcludedWalletIds
                      , r = e.enableExplorer
                      , i = "ALL" !== n && r
                      , a = gc.manualWalletsTemplate()
                      , o = gc.recomendedWalletsTemplate()
                      , l = gc.externalWalletsTemplate()
                      , c = gc.recentWalletTemplate()
                      , u = gc.installedInjectedWalletsTemplate()
                      , d = [c].concat((0,
                    s.Z)(a), (0,
                    s.Z)(o));
                    t || (d = [].concat((0,
                    s.Z)(u), [c], (0,
                    s.Z)(l), (0,
                    s.Z)(a), (0,
                    s.Z)(o)));
                    var h = (d = d.filter(Boolean)).length > 8 || i
                      , m = []
                      , p = !!(m = h ? d.slice(0, 7) : d).length;
                    return tt(_i || (_i = (0,
                    v.Z)(['<w3m-modal-header title="Connect your wallet" .onAction="', '" .actionIcon="', '"></w3m-modal-header>', ""])), this.onQrcode, vo.QRCODE_ICON, p ? tt(Pi || (Pi = (0,
                    v.Z)(["<w3m-modal-content><div>", " ", "</div></w3m-modal-content>"])), m, h ? tt(ji || (ji = (0,
                    v.Z)(["<w3m-view-all-wallets-button></w3m-view-all-wallets-button>"]))) : null) : null)
                }
            }]),
            n
        }(kt);
        is.styles = [Ga.globalCss, es],
        is = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? rs(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && ns(e, n, a),
            a
        }([At("w3m-mobile-wallet-selection")], is);
        var as = Z(Mi || (Mi = (0,
        v.Z)([":host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}"])))
          , os = Object.defineProperty
          , ls = Object.getOwnPropertyDescriptor
          , cs = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? ls(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && os(e, n, a),
            a
        }
          , ss = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).open = !1,
                t.active = !1,
                t.unsubscribeModal = void 0,
                t.abortController = void 0,
                t.unsubscribeModal = Pt.jb.subscribe((function(e) {
                    e.open ? t.onOpenModalEvent() : t.onCloseModalEvent()
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeModal) || t.call(this)
                }
            }, {
                key: "overlayEl",
                get: function() {
                    return Do.getShadowRootElement(this, ".w3m-overlay")
                }
            }, {
                key: "containerEl",
                get: function() {
                    return Do.getShadowRootElement(this, ".w3m-container")
                }
            }, {
                key: "toggleBodyScroll",
                value: function(t) {
                    if (document.querySelector("body"))
                        if (t) {
                            var e = document.getElementById("w3m-styles");
                            null === e || void 0 === e || e.remove()
                        } else
                            document.head.insertAdjacentHTML("beforeend", '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>')
                }
            }, {
                key: "onCloseModal",
                value: function(t) {
                    t.target === t.currentTarget && Pt.jb.close()
                }
            }, {
                key: "onOpenModalEvent",
                value: function() {
                    var t = this;
                    this.toggleBodyScroll(!1),
                    this.addKeyboardEvents(),
                    this.open = !0,
                    setTimeout((0,
                    c.Z)((0,
                    l.Z)().mark((function e() {
                        var n;
                        return (0,
                        l.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = Do.isMobileAnimation() ? {
                                        y: ["50vh", "0vh"]
                                    } : {
                                        scale: [.98, 1]
                                    },
                                    .1,
                                    .2,
                                    e.next = 3,
                                    Promise.all([Be(t.overlayEl, {
                                        opacity: [0, 1]
                                    }, {
                                        delay: .1,
                                        duration: .2
                                    }).finished, Be(t.containerEl, n, {
                                        delay: .1,
                                        duration: .2
                                    }).finished]);
                                case 3:
                                    t.active = !0;
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    ))), 0)
                }
            }, {
                key: "onCloseModalEvent",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this.toggleBodyScroll(!0),
                                    this.removeKeyboardEvents(),
                                    e = Do.isMobileAnimation() ? {
                                        y: ["0vh", "50vh"]
                                    } : {
                                        scale: [1, .98]
                                    },
                                    .2,
                                    t.next = 4,
                                    Promise.all([Be(this.overlayEl, {
                                        opacity: [1, 0]
                                    }, {
                                        duration: .2
                                    }).finished, Be(this.containerEl, e, {
                                        duration: .2
                                    }).finished]);
                                case 4:
                                    this.containerEl.removeAttribute("style"),
                                    this.active = !1,
                                    this.open = !1;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "addKeyboardEvents",
                value: function() {
                    var t = this;
                    this.abortController = new AbortController,
                    window.addEventListener("keydown", (function(e) {
                        var n;
                        "Escape" === e.key ? Pt.jb.close() : "Tab" === e.key && (null != (n = e.target) && n.tagName.includes("W3M-") || t.containerEl.focus())
                    }
                    ), this.abortController),
                    this.containerEl.focus()
                }
            }, {
                key: "removeKeyboardEvents",
                value: function() {
                    var t;
                    null == (t = this.abortController) || t.abort(),
                    this.abortController = void 0
                }
            }, {
                key: "managedModalContextTemplate",
                value: function() {
                    return Pt.zb.state.isStandalone ? null : tt(Ti || (Ti = (0,
                    v.Z)(["<w3m-wc-connection-context></w3m-wc-connection-context><w3m-account-context></w3m-account-context><w3m-network-context></w3m-network-context>"])))
                }
            }, {
                key: "render",
                value: function() {
                    var t = {
                        "w3m-overlay": !0,
                        "w3m-active": this.active
                    };
                    return tt(Wi || (Wi = (0,
                    v.Z)(["<w3m-explorer-context></w3m-explorer-context><w3m-theme-context></w3m-theme-context>", '<div id="w3m-modal" class="', '" @click="', '" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">', "</div></div>"])), this.managedModalContextTemplate(), Wt(t), this.onCloseModal, this.open ? tt(Si || (Si = (0,
                    v.Z)(['<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>']))) : null)
                }
            }]),
            n
        }(kt);
        ss.styles = [Ga.globalCss, as],
        cs([_t()], ss.prototype, "open", 2),
        cs([_t()], ss.prototype, "active", 2),
        ss = cs([At("w3m-modal")], ss);
        var us = Z(Di || (Di = (0,
        v.Z)([":host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}"])))
          , ds = Object.defineProperty
          , hs = Object.getOwnPropertyDescriptor
          , ms = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? hs(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && ds(e, n, a),
            a
        }
          , vs = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                (0,
                u.Z)(this, n),
                (t = e.call(this)).chainId = "",
                t.label = "",
                t.wrongNetwork = !1,
                t.unsubscribeNetwork = void 0,
                Do.rejectStandaloneButtonComponent();
                var r = Pt.zb.state.selectedChain;
                return t.onSetChainData(r),
                t.unsubscribeNetwork = Pt.zb.subscribe((function(e) {
                    var n = e.selectedChain;
                    t.onSetChainData(n)
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unsubscribeNetwork) || t.call(this)
                }
            }, {
                key: "onSetChainData",
                value: function(t) {
                    if (t) {
                        var e = Pt.zb.state.chains
                          , n = null === e || void 0 === e ? void 0 : e.map((function(t) {
                            return t.id
                        }
                        ));
                        this.chainId = t.id.toString(),
                        this.wrongNetwork = !(null != n && n.includes(t.id)),
                        this.label = this.wrongNetwork ? "Wrong Network" : t.name
                    }
                }
            }, {
                key: "onClick",
                value: function() {
                    Pt.uA.click({
                        name: "NETWORK_BUTTON"
                    }),
                    Pt.jb.open({
                        route: "SelectNetwork"
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t, e = Pt.zb.state.chains, n = e && e.length > 1;
                    return tt(Li || (Li = (0,
                    v.Z)(['<w3m-button-big @click="', '" ?disabled="', '"><w3m-network-image chainId="', '"></w3m-network-image><w3m-text variant="medium-regular" color="inverse">', "</w3m-text></w3m-button-big>"])), this.onClick, !n, this.chainId, null != (t = this.label) && t.length ? this.label : "Select Network")
                }
            }]),
            n
        }(kt);
        vs.styles = [Ga.globalCss, us],
        ms([_t()], vs.prototype, "chainId", 2),
        ms([_t()], vs.prototype, "label", 2),
        ms([_t()], vs.prototype, "wrongNetwork", 2),
        vs = ms([At("w3m-network-switch")], vs);
        var ps = Z(Ri || (Ri = (0,
        v.Z)(["@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}"])))
          , fs = Object.defineProperty
          , ws = Object.getOwnPropertyDescriptor
          , gs = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? ws(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && fs(e, n, a),
            a
        }
          , bs = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).chainId = void 0,
                t.isError = !1,
                t.label = "",
                t
            }
            return (0,
            d.Z)(n, [{
                key: "svgLoaderTemplate",
                value: function() {
                    return tt(Ni || (Ni = (0,
                    v.Z)(['<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>'])))
                }
            }, {
                key: "render",
                value: function() {
                    var t = {
                        "w3m-error": this.isError
                    };
                    return tt($i || ($i = (0,
                    v.Z)(['<div class="', '">', '<w3m-network-image chainId="', '"></w3m-network-image></div><w3m-text variant="medium-regular" color="', '">', "</w3m-text>"])), Wt(t), this.svgLoaderTemplate(), this.chainId, this.isError ? "error" : "primary", this.isError ? "Switch declined" : this.label)
                }
            }]),
            n
        }(kt);
        bs.styles = [Ga.globalCss, ps],
        gs([It()], bs.prototype, "chainId", 2),
        gs([It()], bs.prototype, "isError", 2),
        gs([It()], bs.prototype, "label", 2),
        bs = gs([At("w3m-network-waiting")], bs);
        var ys = Z(zi || (zi = (0,
        v.Z)(["div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}"])))
          , xs = Object.defineProperty
          , ks = Object.getOwnPropertyDescriptor
          , Zs = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? ks(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && xs(e, n, a),
            a
        }
          , Cs = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).isMobile = !1,
                t.isInjected = !1,
                t.isInjectedInstalled = !1,
                t.isDesktop = !1,
                t.isWeb = !1,
                t.isRetry = !1,
                t
            }
            return (0,
            d.Z)(n, [{
                key: "onMobile",
                value: function() {
                    Pt.zv.isMobile() ? Pt.AV.replace("MobileConnecting") : Pt.AV.replace("MobileQrcodeConnecting")
                }
            }, {
                key: "onInjected",
                value: function() {
                    this.isInjectedInstalled ? Pt.AV.replace("InjectedConnecting") : Pt.AV.replace("InstallWallet")
                }
            }, {
                key: "onDesktop",
                value: function() {
                    Pt.AV.replace("DesktopConnecting")
                }
            }, {
                key: "onWeb",
                value: function() {
                    Pt.AV.replace("WebConnecting")
                }
            }, {
                key: "render",
                value: function() {
                    var t = Pt.zb.state.isStandalone;
                    return tt(Hi || (Hi = (0,
                    v.Z)(["<div>", " ", " ", " ", " ", "</div>"])), this.isRetry ? tt(Vi || (Vi = (0,
                    v.Z)(["<slot></slot>"]))) : null, this.isMobile ? tt(Ui || (Ui = (0,
                    v.Z)(['<w3m-button .onClick="', '" .iconLeft="', '" variant="outline">Mobile</w3m-button>'])), this.onMobile, vo.MOBILE_ICON) : null, this.isInjected && !t ? tt(Bi || (Bi = (0,
                    v.Z)(['<w3m-button .onClick="', '" .iconLeft="', '" variant="outline">Browser</w3m-button>'])), this.onInjected, vo.WALLET_ICON) : null, this.isDesktop ? tt(Fi || (Fi = (0,
                    v.Z)(['<w3m-button .onClick="', '" .iconLeft="', '" variant="outline">Desktop</w3m-button>'])), this.onDesktop, vo.DESKTOP_ICON) : null, this.isWeb ? tt(Gi || (Gi = (0,
                    v.Z)(['<w3m-button .onClick="', '" .iconLeft="', '" variant="outline">Web</w3m-button>'])), this.onWeb, vo.GLOBE_ICON) : null)
                }
            }]),
            n
        }(kt);
        Cs.styles = [Ga.globalCss, ys],
        Zs([It()], Cs.prototype, "isMobile", 2),
        Zs([It()], Cs.prototype, "isInjected", 2),
        Zs([It()], Cs.prototype, "isInjectedInstalled", 2),
        Zs([It()], Cs.prototype, "isDesktop", 2),
        Zs([It()], Cs.prototype, "isWeb", 2),
        Zs([It()], Cs.prototype, "isRetry", 2),
        Cs = Zs([At("w3m-platform-selection")], Cs);
        var As = Z(qi || (qi = (0,
        v.Z)(["button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}"])))
          , Os = Object.defineProperty
          , Es = Object.getOwnPropertyDescriptor
          , Is = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "onClick",
                value: function() {
                    Pt.AV.push("WalletExplorer")
                }
            }, {
                key: "render",
                value: function() {
                    var t = Pt.uc.state.recomendedWallets
                      , e = So.manualWallets()
                      , n = [].concat((0,
                    s.Z)(t), (0,
                    s.Z)(e)).reverse().slice(0, 4);
                    return tt(Ki || (Ki = (0,
                    v.Z)(['<button @click="', '"><div class="w3m-icons">', " ", '</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>'])), this.onClick, n.map((function(t) {
                        var e = Do.getWalletIcon(t);
                        if (e)
                            return tt(Yi || (Yi = (0,
                            v.Z)(['<img src="', '">'])), e);
                        var n = Do.getWalletIcon({
                            id: t.id
                        });
                        return n ? tt(Xi || (Xi = (0,
                        v.Z)(['<img src="', '">'])), n) : vo.WALLET_PLACEHOLDER
                    }
                    )), (0,
                    s.Z)(Array(4 - n.length)).map((function() {
                        return vo.WALLET_PLACEHOLDER
                    }
                    )))
                }
            }]),
            n
        }(kt);
        Is.styles = [Ga.globalCss, As],
        Is = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Es(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Os(e, n, a),
            a
        }([At("w3m-view-all-wallets-button")], Is);
        var _s = Z(Qi || (Qi = (0,
        v.Z)([".w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}"])))
          , Ps = Object.defineProperty
          , js = Object.getOwnPropertyDescriptor
          , Ms = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? js(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Ps(e, n, a),
            a
        }
          , Ts = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).walletId = "",
                t.imageId = "",
                t.uri = "",
                t.unwatchWcConnection = void 0,
                setTimeout((function() {
                    var e = Pt.kD.state.pairingUri
                      , n = Pt.zb.state.standaloneUri;
                    t.uri = null !== n && void 0 !== n ? n : e
                }
                ), 0),
                t.unwatchWcConnection = Pt.kD.subscribe((function(e) {
                    e.pairingUri && (t.uri = e.pairingUri)
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unwatchWcConnection) || t.call(this)
                }
            }, {
                key: "overlayEl",
                get: function() {
                    return Do.getShadowRootElement(this, ".w3m-qr-container")
                }
            }, {
                key: "render",
                value: function() {
                    return tt(Ji || (Ji = (0,
                    v.Z)(['<div class="w3m-qr-container">', "</div>"])), this.uri ? tt(ta || (ta = (0,
                    v.Z)(['<w3m-qrcode size="', '" uri="', '" walletId="', '" imageId="', '"></w3m-qrcode>'])), this.overlayEl.offsetWidth, this.uri, this.walletId, this.imageId) : tt(ea || (ea = (0,
                    v.Z)(["<w3m-spinner></w3m-spinner>"]))))
                }
            }]),
            n
        }(kt);
        Ts.styles = [Ga.globalCss, _s],
        Ms([It()], Ts.prototype, "walletId", 2),
        Ms([It()], Ts.prototype, "imageId", 2),
        Ms([_t()], Ts.prototype, "uri", 2),
        Ts = Ms([At("w3m-walletconnect-qr")], Ts);
        var Ws = Z(na || (na = (0,
        v.Z)([".w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}"])))
          , Ss = Object.defineProperty
          , Ds = Object.getOwnPropertyDescriptor
          , Ls = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "onDisconnect",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Pt.Id.client().disconnect();
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "onCopyAddress",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    navigator.clipboard.writeText(null != (e = Pt.CV.state.address) ? e : "");
                                case 2:
                                    Pt.Vs.openToast("Address copied", "success");
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "render",
                value: function() {
                    return tt(ra || (ra = (0,
                    v.Z)(['<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="', '" .icon="', '"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="', '" .icon="', '"></w3m-box-button></div></w3m-modal-footer>'])), this.onCopyAddress, vo.ACCOUNT_COPY, this.onDisconnect, vo.ACCOUNT_DISCONNECT)
                }
            }]),
            n
        }(kt);
        Ls.styles = [Ga.globalCss, Ws],
        Ls = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Ds(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Ss(e, n, a),
            a
        }([At("w3m-account-view")], Ls);
        var Rs = Object.defineProperty
          , Ns = Object.getOwnPropertyDescriptor
          , $s = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "viewTemplate",
                value: function() {
                    return Pt.zv.isAndroid() ? tt(ia || (ia = (0,
                    v.Z)(["<w3m-android-wallet-selection></w3m-android-wallet-selection>"]))) : Pt.zv.isMobile() ? tt(aa || (aa = (0,
                    v.Z)(["<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>"]))) : tt(oa || (oa = (0,
                    v.Z)(["<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>"])))
                }
            }, {
                key: "render",
                value: function() {
                    return tt(la || (la = (0,
                    v.Z)(["", "<w3m-legal-notice></w3m-legal-notice>"])), this.viewTemplate())
                }
            }]),
            n
        }(kt);
        $s.styles = [Ga.globalCss],
        $s = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Ns(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Rs(e, n, a),
            a
        }([At("w3m-connect-wallet-view")], $s);
        var zs = Z(ca || (ca = (0,
        v.Z)(["w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}"])))
          , Hs = Object.defineProperty
          , Vs = Object.getOwnPropertyDescriptor
          , Us = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Vs(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Hs(e, n, a),
            a
        }
          , Bs = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).isError = !1,
                t.unwatchConnection = void 0,
                t.openDesktopApp(),
                t.unwatchConnection = Pt.kD.subscribe((function(e) {
                    t.isError = e.pairingError
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unwatchConnection) || t.call(this)
                }
            }, {
                key: "onFormatAndRedirect",
                value: function(t) {
                    var e = Pt.zv.getWalletRouterData()
                      , n = e.desktop
                      , r = e.name
                      , i = null === n || void 0 === n ? void 0 : n.native;
                    if (i) {
                        var a = Pt.zv.formatNativeUrl(i, t, r);
                        Pt.zv.openHref(a, "_self")
                    }
                }
            }, {
                key: "openDesktopApp",
                value: function() {
                    Pt.kD.setPairingError(!1);
                    var t = Pt.zb.state.standaloneUri
                      , e = Pt.kD.state.pairingUri
                      , n = Pt.zv.getWalletRouterData();
                    Do.setRecentWallet(n),
                    t ? this.onFormatAndRedirect(t) : this.onFormatAndRedirect(e)
                }
            }, {
                key: "render",
                value: function() {
                    var t = Pt.zv.getWalletRouterData()
                      , e = t.name
                      , n = t.id
                      , r = t.image_id
                      , i = Do.getCachedRouterWalletPlatforms()
                      , a = i.isMobile
                      , o = i.isInjected
                      , l = i.isWeb;
                    return tt(sa || (sa = (0,
                    v.Z)(['<w3m-modal-header title="', '" .onAction="', '" .actionIcon="', '"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="', '" imageId="', '" label="', '" .isError="', '"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">', '</w3m-text><w3m-platform-selection .isMobile="', '" .isInjected="', '" .isWeb="', '" .isRetry="', '"><w3m-button .onClick="', '" .iconRight="', '">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>'])), e, Do.handleUriCopy, vo.COPY_ICON, n, r, "Continue in ".concat(e, "..."), this.isError, "Connection can continue loading if ".concat(e, " is not installed on your device"), a, o, l, !0, this.openDesktopApp.bind(this), vo.RETRY_ICON)
                }
            }]),
            n
        }(kt);
        Bs.styles = [Ga.globalCss, zs],
        Us([_t()], Bs.prototype, "isError", 2),
        Bs = Us([At("w3m-desktop-connecting-view")], Bs);
        var Fs = Z(ua || (ua = (0,
        v.Z)([".w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}"])))
          , Gs = Object.defineProperty
          , qs = Object.getOwnPropertyDescriptor
          , Ks = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "onGet",
                value: function(t) {
                    Pt.zv.openHref(t, "_blank")
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = Pt.uc.state.recomendedWallets.slice(0, 5)
                      , n = So.manualWallets().slice(0, 5)
                      , r = e.length
                      , i = n.length;
                    return tt(da || (da = (0,
                    v.Z)(['<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>', " ", '</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you\'re looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there\'s something for everyone</w3m-text><w3m-button .onClick="', '" .iconRight="', '">Explore Wallets</w3m-button></div>'])), r ? e.map((function(e) {
                        return tt(ha || (ha = (0,
                        v.Z)(['<div class="w3m-wallet-item"><w3m-wallet-image walletId="', '" imageId="', '"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">', '</w3m-text><w3m-button .iconRight="', '" .onClick="', '">Get</w3m-button></div></div>'])), e.id, e.image_id, e.name, vo.ARROW_RIGHT_ICON, (function() {
                            return t.onGet(e.homepage)
                        }
                        ))
                    }
                    )) : null, i ? n.map((function(e) {
                        return tt(ma || (ma = (0,
                        v.Z)(['<div class="w3m-wallet-item"><w3m-wallet-image walletId="', '"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">', '</w3m-text><w3m-button .iconRight="', '" .onClick="', '">Get</w3m-button></div></div>'])), e.id, e.name, vo.ARROW_RIGHT_ICON, (function() {
                            return t.onGet(e.links.universal)
                        }
                        ))
                    }
                    )) : null, Do.openWalletExplorerUrl, vo.ARROW_UP_RIGHT_ICON)
                }
            }]),
            n
        }(kt);
        Ks.styles = [Ga.globalCss, Fs],
        Ks = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? qs(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Gs(e, n, a),
            a
        }([At("w3m-get-wallet-view")], Ks);
        var Ys = Z(va || (va = (0,
        v.Z)([".w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}"])))
          , Xs = Object.defineProperty
          , Qs = Object.getOwnPropertyDescriptor
          , Js = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).learnUrl = "https://ethereum.org/en/wallets/",
                t
            }
            return (0,
            d.Z)(n, [{
                key: "onGet",
                value: function() {
                    Pt.t0.state.enableExplorer ? Pt.AV.push("GetWallet") : Do.openWalletExplorerUrl()
                }
            }, {
                key: "onLearnMore",
                value: function() {
                    Pt.zv.openHref(this.learnUrl, "_blank")
                }
            }, {
                key: "render",
                value: function() {
                    return tt(pa || (pa = (0,
                    v.Z)(['<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">', " ", " ", '</div><w3m-text variant="medium-regular">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">', " ", " ", '</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">', " ", " ", '</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="', '" .iconLeft="', '">Get a Wallet</w3m-button><w3m-button .onClick="', '" .iconRight="', '">Learn More</w3m-button></div></w3m-modal-content>'])), vo.HELP_CHART_IMG, vo.HELP_PAINTING_IMG, vo.HELP_ETH_IMG, vo.HELP_KEY_IMG, vo.HELP_USER_IMG, vo.HELP_LOCK_IMG, vo.HELP_COMPAS_IMG, vo.HELP_NOUN_IMG, vo.HELP_DAO_IMG, this.onGet.bind(this), vo.WALLET_ICON, this.onLearnMore.bind(this), vo.ARROW_UP_RIGHT_ICON)
                }
            }]),
            n
        }(kt);
        Js.styles = [Ga.globalCss, Ys],
        Js = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Qs(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Xs(e, n, a),
            a
        }([At("w3m-help-view")], Js);
        var tu = Z(fa || (fa = (0,
        v.Z)(["w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}"])))
          , eu = Object.defineProperty
          , nu = Object.getOwnPropertyDescriptor
          , ru = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? nu(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && eu(e, n, a),
            a
        }
          , iu = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).isError = !1,
                t.connector = Pt.Id.client().getConnectorById("injected"),
                t.openInjectedApp(),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "openInjectedApp",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e, n = this;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.connector.ready,
                                    t.t0 = e,
                                    !t.t0) {
                                        t.next = 6;
                                        break
                                    }
                                    return this.isError = !1,
                                    t.next = 6,
                                    Do.handleConnectorConnection("injected", (function() {
                                        n.isError = !0
                                    }
                                    ));
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "render",
                value: function() {
                    var t = Pt.zv.getWalletRouterData()
                      , e = t.name
                      , n = t.id
                      , r = t.image_id
                      , i = Do.getCachedRouterWalletPlatforms()
                      , a = i.isMobile
                      , o = i.isDesktop
                      , l = i.isWeb;
                    return tt(wa || (wa = (0,
                    v.Z)(['<w3m-modal-header title="', '"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="', '" imageId="', '" label="', '" .isError="', '"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="', '" .isDesktop="', '" .isWeb="', '" .isRetry="', '"><w3m-button .onClick="', '" .disabled="', '" .iconRight="', '">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>'])), e, n, r, "Continue in ".concat(e, "..."), this.isError, a, o, l, !0, this.openInjectedApp.bind(this), !this.isError, vo.RETRY_ICON)
                }
            }]),
            n
        }(kt);
        iu.styles = [Ga.globalCss, tu],
        ru([_t()], iu.prototype, "isError", 2),
        iu = ru([At("w3m-injected-connecting-view")], iu);
        var au = Z(ga || (ga = (0,
        v.Z)(["w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}"])))
          , ou = Object.defineProperty
          , lu = Object.getOwnPropertyDescriptor
          , cu = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "onInstall",
                value: function(t) {
                    t && Pt.zv.openHref(t, "_blank")
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = Pt.zv.getWalletRouterData()
                      , n = e.name
                      , r = e.id
                      , i = e.image_id
                      , a = e.homepage;
                    return tt(ba || (ba = (0,
                    v.Z)(['<w3m-modal-header title="', '"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="', '" imageId="', '" label="Not Detected" .isStale="', '"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">', '</w3m-text><w3m-button .onClick="', '" .iconLeft="', '">Download</w3m-button></w3m-info-footer>'])), n, r, i, !0, "Download ".concat(n, " to continue. If multiple browser extensions are installed, disable non ").concat(n, " ones and try again"), (function() {
                        return t.onInstall(a)
                    }
                    ), vo.ARROW_DOWN_ICON)
                }
            }]),
            n
        }(kt);
        cu.styles = [Ga.globalCss, au],
        cu = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? lu(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && ou(e, n, a),
            a
        }([At("w3m-install-wallet-view")], cu);
        var su = Z(ya || (ya = (0,
        v.Z)(["w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection div{display:flex}w3m-platform-selection w3m-button:nth-child(2){margin-left:10px}"])))
          , uu = Object.defineProperty
          , du = Object.getOwnPropertyDescriptor
          , hu = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? du(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && uu(e, n, a),
            a
        }
          , mu = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).isError = !1,
                t.unwatchConnection = void 0,
                t.openMobileApp(),
                t.unwatchConnection = Pt.kD.subscribe((function(e) {
                    t.isError = e.pairingError
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unwatchConnection) || t.call(this)
                }
            }, {
                key: "onFormatAndRedirect",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = Pt.zv.getWalletRouterData()
                      , r = n.mobile
                      , i = n.name
                      , a = null === r || void 0 === r ? void 0 : r.native
                      , o = null === r || void 0 === r ? void 0 : r.universal;
                    if (a && !e) {
                        var l = Pt.zv.formatNativeUrl(a, t, i);
                        Pt.zv.openHref(l, "_self")
                    } else if (o) {
                        var c = Pt.zv.formatUniversalUrl(o, t, i);
                        Pt.zv.openHref(c, "_self")
                    }
                }
            }, {
                key: "openMobileApp",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    Pt.kD.setPairingError(!1);
                    var e = Pt.zb.state.standaloneUri
                      , n = Pt.kD.state.pairingUri
                      , r = Pt.zv.getWalletRouterData();
                    Do.setRecentWallet(r),
                    e ? this.onFormatAndRedirect(e, t) : this.onFormatAndRedirect(n, t)
                }
            }, {
                key: "onGoToAppStore",
                value: function(t) {
                    t && Pt.zv.openHref(t, "_blank")
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = Pt.zv.getWalletRouterData()
                      , n = e.name
                      , r = e.id
                      , i = e.image_id
                      , a = e.app
                      , o = e.mobile
                      , l = Do.getCachedRouterWalletPlatforms().isWeb
                      , c = null === a || void 0 === a ? void 0 : a.ios
                      , s = null === o || void 0 === o ? void 0 : o.universal;
                    return tt(xa || (xa = (0,
                    v.Z)(['<w3m-modal-header title="', '"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="', '" imageId="', '" label="Tap \'Open\' to continue\u2026" .isError="', '"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note"><w3m-text color="secondary" variant="small-thin">You can reload the website to try again ', '</w3m-text><w3m-platform-selection .isWeb="', '" .isRetry="', '"><div><w3m-button .onClick="', '" .iconRight="', '">Retry</w3m-button>', '</div></w3m-platform-selection></w3m-info-footer><w3m-info-footer class="w3m-app-store"><div><w3m-wallet-image walletId="', '" imageId="', '"></w3m-wallet-image><w3m-text>', '</w3m-text></div><w3m-button .iconRight="', '" .onClick="', '" variant="ghost">App Store</w3m-button></w3m-info-footer>'])), n, r, i, this.isError, s ? " or open ".concat(n, ' using a "Backup" instead') : "", l, !0, (function() {
                        return t.openMobileApp(!1)
                    }
                    ), vo.RETRY_ICON, s ? tt(ka || (ka = (0,
                    v.Z)(['<w3m-button variant="outline" .onClick="', '" .iconRight="', '">Backup</w3m-button>'])), (function() {
                        return t.openMobileApp(!0)
                    }
                    ), vo.ARROW_UP_RIGHT_ICON) : null, r, i, "Get ".concat(n), vo.ARROW_RIGHT_ICON, (function() {
                        return t.onGoToAppStore(c)
                    }
                    ))
                }
            }]),
            n
        }(kt);
        mu.styles = [Ga.globalCss, su],
        hu([_t()], mu.prototype, "isError", 2),
        mu = hu([At("w3m-mobile-connecting-view")], mu);
        var vu = Z(Za || (Za = (0,
        v.Z)(["w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}"])))
          , pu = Object.defineProperty
          , fu = Object.getOwnPropertyDescriptor
          , wu = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    var t = Pt.zv.getWalletRouterData()
                      , e = t.name
                      , n = t.id
                      , r = t.image_id
                      , i = Do.getCachedRouterWalletPlatforms()
                      , a = i.isInjected
                      , o = i.isDesktop
                      , l = i.isWeb;
                    return tt(Ca || (Ca = (0,
                    v.Z)(['<w3m-modal-header title="', '" .onAction="', '" .actionIcon="', '"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr walletId="', '" imageId="', '"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">', '</w3m-text><w3m-platform-selection .isDesktop="', '" .isInjected="', '" .isWeb="', '"></w3m-platform-selection></w3m-info-footer>'])), e, Do.handleUriCopy, vo.COPY_ICON, n, r, "Scan this qrcode with your phone's camera or inside ".concat(e, " app"), o, a, l)
                }
            }]),
            n
        }(kt);
        wu.styles = [Ga.globalCss, vu],
        wu = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? fu(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && pu(e, n, a),
            a
        }([At("w3m-mobile-qr-connecting-view")], wu);
        var gu = Object.defineProperty
          , bu = Object.getOwnPropertyDescriptor
          , yu = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                return (0,
                u.Z)(this, n),
                e.apply(this, arguments)
            }
            return (0,
            d.Z)(n, [{
                key: "render",
                value: function() {
                    return tt(Aa || (Aa = (0,
                    v.Z)(['<w3m-modal-header title="Scan the code" .onAction="', '" .actionIcon="', '"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>'])), Do.handleUriCopy, vo.COPY_ICON)
                }
            }]),
            n
        }(kt);
        yu.styles = [Ga.globalCss],
        yu = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? bu(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && gu(e, n, a),
            a
        }([At("w3m-qrcode-view")], yu);
        var xu = Z(Oa || (Oa = (0,
        v.Z)(["div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center}"])))
          , ku = Object.defineProperty
          , Zu = Object.defineProperties
          , Cu = Object.getOwnPropertyDescriptor
          , Au = Object.getOwnPropertyDescriptors
          , Ou = Object.getOwnPropertySymbols
          , Eu = Object.prototype.hasOwnProperty
          , Iu = Object.prototype.propertyIsEnumerable
          , _u = function(t, e, n) {
            return e in t ? ku(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : t[e] = n
        }
          , Pu = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Cu(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && ku(e, n, a),
            a
        }
          , ju = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).connectedChains = "ALL",
                t.isUnsupportedChains = !1,
                t.getConnectedChainIds(),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "getConnectedChainIds",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Pt.Id.client().getConnectedChainIds();
                                case 2:
                                    this.connectedChains = t.sent;
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "onSelectChain",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t(e) {
                        var n, r, i, a;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0,
                                    n = Pt.zb.state,
                                    r = n.selectedChain,
                                    i = n.walletConnectVersion,
                                    a = n.isPreferInjected,
                                    !Pt.CV.state.isConnected) {
                                        t.next = 16;
                                        break
                                    }
                                    if ((null === r || void 0 === r ? void 0 : r.id) !== e.id) {
                                        t.next = 7;
                                        break
                                    }
                                    Pt.AV.reset("Account"),
                                    t.next = 14;
                                    break;
                                case 7:
                                    if (2 !== i) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 10,
                                    Pt.Id.client().switchNetwork({
                                        chainId: e.id
                                    });
                                case 10:
                                    Pt.AV.reset("Account"),
                                    t.next = 14;
                                    break;
                                case 13:
                                    Pt.AV.push("SwitchNetwork", {
                                        SwitchNetwork: e
                                    });
                                case 14:
                                    t.next = 17;
                                    break;
                                case 16:
                                    a ? (Pt.zb.setSelectedChain(e),
                                    Pt.jb.close()) : (Pt.zb.setSelectedChain(e),
                                    Pt.AV.push("ConnectWallet"));
                                case 17:
                                    t.next = 22;
                                    break;
                                case 19:
                                    t.prev = 19,
                                    t.t0 = t.catch(0),
                                    console.error(t.t0),
                                    Pt.Vs.openToast(Do.getErrorMessage(t.t0), "error");
                                case 22:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 19]])
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "isUnsuportedChainId",
                value: function(t) {
                    return ("string" == typeof this.connectedChains && "ALL" !== this.connectedChains || !(!Array.isArray(this.connectedChains) || this.connectedChains.includes(String(t)))) && (this.isUnsupportedChains = !0,
                    !0)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = Pt.zb.state.chains
                      , n = null === e || void 0 === e ? void 0 : e.map((function(e) {
                        return function(t, e) {
                            return Zu(t, Au(e))
                        }(function(t, e) {
                            for (var n in e || (e = {}))
                                Eu.call(e, n) && _u(t, n, e[n]);
                            if (Ou) {
                                var r, i = (0,
                                f.Z)(Ou(e));
                                try {
                                    for (i.s(); !(r = i.n()).done; )
                                        n = r.value,
                                        Iu.call(e, n) && _u(t, n, e[n])
                                } catch (a) {
                                    i.e(a)
                                } finally {
                                    i.f()
                                }
                            }
                            return t
                        }({}, e), {
                            unsupported: t.isUnsuportedChainId(e.id)
                        })
                    }
                    ))
                      , r = null === n || void 0 === n ? void 0 : n.sort((function(t, e) {
                        return Number(t.unsupported) - Number(e.unsupported)
                    }
                    ));
                    return tt(Ea || (Ea = (0,
                    v.Z)(['<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div>', "</div></w3m-modal-content>", ""])), null === r || void 0 === r ? void 0 : r.map((function(e) {
                        return tt(Ia || (Ia = (0,
                        v.Z)(['<w3m-network-button name="', '" chainId="', '" .unsupported="', '" .onClick="', '">', "</w3m-network-button>"])), e.name, e.id, e.unsupported, (0,
                        c.Z)((0,
                        l.Z)().mark((function n() {
                            return (0,
                            l.Z)().wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return n.abrupt("return", t.onSelectChain(e));
                                    case 1:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n)
                        }
                        ))), e.name)
                    }
                    )), this.isUnsupportedChains ? tt(_a || (_a = (0,
                    v.Z)(['<w3m-info-footer><w3m-text color="secondary" variant="small-thin">Your connected wallet may not support some of the networks available for this dapp</w3m-text></w3m-info-footer>']))) : null)
                }
            }]),
            n
        }(kt);
        ju.styles = [Ga.globalCss, xu],
        Pu([_t()], ju.prototype, "connectedChains", 2),
        Pu([_t()], ju.prototype, "isUnsupportedChains", 2),
        ju = Pu([At("w3m-select-network-view")], ju);
        var Mu = Z(Pa || (Pa = (0,
        v.Z)(["w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}"])))
          , Tu = Object.defineProperty
          , Wu = Object.getOwnPropertyDescriptor
          , Su = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Wu(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Tu(e, n, a),
            a
        }
          , Du = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).isError = !1,
                t.onSwitchNetwork(),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "onSwitchNetwork",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    this.isError = !1,
                                    e = Pt.zv.getSwitchNetworkRouterData(),
                                    t.next = 5,
                                    Pt.Id.client().switchNetwork({
                                        chainId: e.id
                                    });
                                case 5:
                                    Pt.zb.setSelectedChain(e),
                                    Pt.AV.reset("Account"),
                                    t.next = 12;
                                    break;
                                case 9:
                                    t.prev = 9,
                                    t.t0 = t.catch(0),
                                    this.isError = !0;
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[0, 9]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "render",
                value: function() {
                    var t = Pt.zv.getSwitchNetworkRouterData()
                      , e = t.id
                      , n = t.name;
                    return tt(ja || (ja = (0,
                    v.Z)(['<w3m-modal-header title="', '"></w3m-modal-header><w3m-modal-content><w3m-network-waiting chainId="', '" label="Approve in your wallet" .isError="', '"></w3m-network-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="', '" .disabled="', '" .iconRight="', '">Try Again</w3m-button></w3m-info-footer>'])), "Connect to ".concat(n), e, this.isError, this.onSwitchNetwork.bind(this), !this.isError, vo.RETRY_ICON)
                }
            }]),
            n
        }(kt);
        Du.styles = [Ga.globalCss, Mu],
        Su([_t()], Du.prototype, "isError", 2),
        Du = Su([At("w3m-switch-network-view")], Du);
        var Lu = Z(Ma || (Ma = (0,
        v.Z)(["w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}"])))
          , Ru = Object.defineProperty
          , Nu = Object.getOwnPropertyDescriptor
          , $u = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Nu(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Ru(e, n, a),
            a
        }
          , zu = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.apply(this, arguments)).loading = !Pt.uc.state.wallets.listings.length,
                t.firstFetch = !Pt.uc.state.wallets.listings.length,
                t.search = "",
                t.endReached = !1,
                t.intersectionObserver = void 0,
                t.searchDebounce = Do.debounce((function(e) {
                    e.length >= 3 ? (t.firstFetch = !0,
                    t.endReached = !1,
                    t.search = e,
                    Pt.uc.resetSearch(),
                    t.fetchWallets()) : t.search && (t.search = "",
                    t.endReached = t.isLastPage(),
                    Pt.uc.resetSearch())
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "firstUpdated",
                value: function() {
                    this.createPaginationObserver()
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.intersectionObserver) || t.disconnect()
                }
            }, {
                key: "placeholderEl",
                get: function() {
                    return Do.getShadowRootElement(this, ".w3m-placeholder-block")
                }
            }, {
                key: "createPaginationObserver",
                value: function() {
                    var t = this;
                    this.intersectionObserver = new IntersectionObserver((function(e) {
                        (0,
                        p.Z)(e, 1)[0].isIntersecting && (!t.search || !t.firstFetch) && t.fetchWallets()
                    }
                    )),
                    this.intersectionObserver.observe(this.placeholderEl)
                }
            }, {
                key: "isLastPage",
                value: function() {
                    var t = Pt.uc.state
                      , e = t.wallets
                      , n = t.search
                      , r = this.search ? n : e
                      , i = r.listings
                      , a = r.total;
                    return a <= 40 || i.length >= a
                }
            }, {
                key: "fetchWallets",
                value: function() {
                    var t = (0,
                    c.Z)((0,
                    l.Z)().mark((function t() {
                        var e, n, r, i, a, o, u, d, h, m, v, p, f, w;
                        return (0,
                        l.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = Pt.uc.state,
                                    r = n.wallets,
                                    i = n.search,
                                    a = n.injectedWallets,
                                    o = this.search ? i : r,
                                    u = o.listings,
                                    d = o.total,
                                    h = o.page,
                                    this.endReached || !(this.firstFetch || d > 40 && u.length < d)) {
                                        t.next = 22;
                                        break
                                    }
                                    return t.prev = 2,
                                    this.loading = !0,
                                    m = null == (e = Pt.zb.state.standaloneChains) ? void 0 : e.join(","),
                                    t.next = 7,
                                    Pt.uc.getWallets({
                                        page: this.firstFetch ? 1 : h + 1,
                                        entries: 40,
                                        search: this.search,
                                        version: Pt.zb.state.walletConnectVersion,
                                        chains: m
                                    });
                                case 7:
                                    return v = t.sent,
                                    p = v.listings,
                                    f = p.map((function(t) {
                                        return Do.getWalletIcon(t)
                                    }
                                    )),
                                    w = a.map((function(t) {
                                        return Do.getWalletIcon(t)
                                    }
                                    )),
                                    t.next = 13,
                                    Promise.all([].concat((0,
                                    s.Z)(f.map(function() {
                                        var t = (0,
                                        c.Z)((0,
                                        l.Z)().mark((function t(e) {
                                            return (0,
                                            l.Z)().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.abrupt("return", Do.preloadImage(e));
                                                    case 1:
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
                                    }())), (0,
                                    s.Z)(w.map(function() {
                                        var t = (0,
                                        c.Z)((0,
                                        l.Z)().mark((function t(e) {
                                            return (0,
                                            l.Z)().wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.abrupt("return", Do.preloadImage(e));
                                                    case 1:
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
                                    }())), [Pt.zv.wait(300)]));
                                case 13:
                                    this.endReached = this.isLastPage(),
                                    t.next = 19;
                                    break;
                                case 16:
                                    t.prev = 16,
                                    t.t0 = t.catch(2),
                                    console.error(t.t0),
                                    Pt.Vs.openToast(Do.getErrorMessage(t.t0), "error");
                                case 19:
                                    return t.prev = 19,
                                    this.loading = !1,
                                    this.firstFetch = !1,
                                    t.finish(19);
                                case 22:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[2, 16, 19, 22]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "onConnect",
                value: function(t) {
                    Pt.zv.isAndroid() ? Do.handleMobileLinking(t) : Do.goToConnectingView(t)
                }
            }, {
                key: "onSearchChange",
                value: function(t) {
                    var e = t.target.value;
                    this.searchDebounce(e)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = Pt.uc.state
                      , n = e.wallets
                      , r = e.search
                      , i = (this.search ? r : n).listings
                      , a = this.loading && !i.length
                      , o = this.search.length >= 3
                      , l = gc.injectedWalletsTemplate()
                      , c = gc.manualWalletsTemplate()
                      , u = gc.recomendedWalletsTemplate(!0);
                    o && (l = l.filter((function(e) {
                        var n = e.values;
                        return Do.caseSafeIncludes(n[0], t.search)
                    }
                    )),
                    c = c.filter((function(e) {
                        var n = e.values;
                        return Do.caseSafeIncludes(n[0], t.search)
                    }
                    )),
                    u = u.filter((function(e) {
                        var n = e.values;
                        return Do.caseSafeIncludes(n[0], t.search)
                    }
                    )));
                    var d = !this.loading && !i.length && !l.length && !u.length
                      , h = Math.max(l.length, i.length)
                      , m = {
                        "w3m-loading": a,
                        "w3m-end-reached": this.endReached || !this.loading,
                        "w3m-empty": d
                    };
                    return tt(Ta || (Ta = (0,
                    v.Z)(['<w3m-modal-header><w3m-search-input .onChange="', '"></w3m-search-input></w3m-modal-header><w3m-modal-content class="', '"><div class="w3m-grid">', " ", '</div><div class="w3m-placeholder-block">', " ", "</div></w3m-modal-content>"])), this.onSearchChange.bind(this), Wt(m), a ? null : u, a ? null : (0,
                    s.Z)(Array(h)).map((function(e, n) {
                        return tt(Wa || (Wa = (0,
                        v.Z)(["", " ", " ", ""])), c[n], l[n], i[n] ? tt(Sa || (Sa = (0,
                        v.Z)(['<w3m-wallet-button imageId="', '" name="', '" walletId="', '" .onClick="', '"></w3m-wallet-button>'])), i[n].image_id, i[n].name, i[n].id, (function() {
                            return t.onConnect(i[n])
                        }
                        )) : null)
                    }
                    )), d ? tt(Da || (Da = (0,
                    v.Z)(['<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>']))) : null, !d && this.loading ? tt(La || (La = (0,
                    v.Z)(["<w3m-spinner></w3m-spinner>"]))) : null)
                }
            }]),
            n
        }(kt);
        zu.styles = [Ga.globalCss, Lu],
        $u([_t()], zu.prototype, "loading", 2),
        $u([_t()], zu.prototype, "firstFetch", 2),
        $u([_t()], zu.prototype, "search", 2),
        $u([_t()], zu.prototype, "endReached", 2),
        zu = $u([At("w3m-wallet-explorer-view")], zu);
        var Hu = Z(Ra || (Ra = (0,
        v.Z)(["w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}"])))
          , Vu = Object.defineProperty
          , Uu = Object.getOwnPropertyDescriptor
          , Bu = function(t, e, n, r) {
            for (var i, a = r > 1 ? void 0 : r ? Uu(e, n) : e, o = t.length - 1; o >= 0; o--)
                (i = t[o]) && (a = (r ? i(e, n, a) : i(a)) || a);
            return r && a && Vu(e, n, a),
            a
        }
          , Fu = function(t) {
            (0,
            h.Z)(n, t);
            var e = (0,
            m.Z)(n);
            function n() {
                var t;
                return (0,
                u.Z)(this, n),
                (t = e.call(this)).isError = !1,
                t.unwatchConnection = void 0,
                t.openWebWallet(),
                t.unwatchConnection = Pt.kD.subscribe((function(e) {
                    t.isError = e.pairingError
                }
                )),
                t
            }
            return (0,
            d.Z)(n, [{
                key: "disconnectedCallback",
                value: function() {
                    var t;
                    null == (t = this.unwatchConnection) || t.call(this)
                }
            }, {
                key: "onFormatAndRedirect",
                value: function(t) {
                    var e = Pt.zv.getWalletRouterData()
                      , n = e.desktop
                      , r = e.name
                      , i = null === n || void 0 === n ? void 0 : n.universal;
                    if (i) {
                        var a = Pt.zv.formatUniversalUrl(i, t, r);
                        Pt.zv.openHref(a, "_blank")
                    }
                }
            }, {
                key: "openWebWallet",
                value: function() {
                    Pt.kD.setPairingError(!1);
                    var t = Pt.zb.state.standaloneUri
                      , e = Pt.kD.state.pairingUri
                      , n = Pt.zv.getWalletRouterData();
                    Do.setRecentWallet(n),
                    t ? this.onFormatAndRedirect(t) : this.onFormatAndRedirect(e)
                }
            }, {
                key: "render",
                value: function() {
                    var t = Pt.zv.getWalletRouterData()
                      , e = t.name
                      , n = t.id
                      , r = t.image_id
                      , i = Do.getCachedRouterWalletPlatforms()
                      , a = i.isMobile
                      , o = i.isInjected
                      , l = i.isDesktop
                      , c = Pt.zv.isMobile();
                    return tt(Na || (Na = (0,
                    v.Z)(['<w3m-modal-header title="', '" .onAction="', '" .actionIcon="', '"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="', '" imageId="', '" label="', '" .isError="', '"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">', '</w3m-text><w3m-platform-selection .isMobile="', '" .isInjected="', '" .isDesktop="', '" .isRetry="', '"><w3m-button .onClick="', '" .iconRight="', '">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>'])), e, Do.handleUriCopy, vo.COPY_ICON, n, r, "Continue in ".concat(e, "..."), this.isError, "".concat(e, " web app has opened in a new tab. Go there, accept the connection, and come back"), a, !c && o, !c && l, !0, this.openWebWallet.bind(this), vo.RETRY_ICON)
                }
            }]),
            n
        }(kt);
        Fu.styles = [Ga.globalCss, Hu],
        Bu([_t()], Fu.prototype, "isError", 2),
        Fu = Bu([At("w3m-web-connecting-view")], Fu)
    }
}]);
