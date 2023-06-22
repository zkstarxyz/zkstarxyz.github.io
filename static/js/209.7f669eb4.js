"use strict";
(self.webpackChunksyncswap = self.webpackChunksyncswap || []).push([[209], {
    50773: function(e, r, t) {
        t.d(r, {
            i: function() {
                return n
            }
        });
        var n = "abi/5.7.0"
    },
    86388: function(e, r, t) {
        t.d(r, {
            R: function() {
                return Z
            },
            $: function() {
                return F
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(52009)
          , o = t(54812)
          , s = t(2735)
          , u = t(50773)
          , c = t(62)
          , l = t(60136)
          , f = t(29388)
          , h = t(28552)
          , d = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e) {
                return (0,
                n.Z)(this, t),
                r.call(this, "address", "address", e, !1)
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    return "0x0000000000000000000000000000000000000000"
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    try {
                        r = (0,
                        h.getAddress)(r)
                    } catch (t) {
                        this._throwError(t.message, r)
                    }
                    return e.writeValue(r)
                }
            }, {
                key: "decode",
                value: function(e) {
                    return (0,
                    h.getAddress)((0,
                    a.hexZeroPad)(e.readValue().toHexString(), 20))
                }
            }]),
            t
        }(c.XI)
          , p = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e) {
                var i;
                return (0,
                n.Z)(this, t),
                (i = r.call(this, e.name, e.type, void 0, e.dynamic)).coder = e,
                i
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    return this.coder.defaultValue()
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    return this.coder.encode(e, r)
                }
            }, {
                key: "decode",
                value: function(e) {
                    return this.coder.decode(e)
                }
            }]),
            t
        }(c.XI)
          , g = new s.Logger(u.i);
        function v(e, r, t) {
            var n = null;
            if (Array.isArray(t))
                n = t;
            else if (t && "object" === typeof t) {
                var i = {};
                n = r.map((function(e) {
                    var r = e.localName;
                    return r || g.throwError("cannot encode object for signature with missing names", s.Logger.errors.INVALID_ARGUMENT, {
                        argument: "values",
                        coder: e,
                        value: t
                    }),
                    i[r] && g.throwError("cannot encode object for signature with duplicate names", s.Logger.errors.INVALID_ARGUMENT, {
                        argument: "values",
                        coder: e,
                        value: t
                    }),
                    i[r] = !0,
                    t[r]
                }
                ))
            } else
                g.throwArgumentError("invalid tuple value", "tuple", t);
            r.length !== n.length && g.throwArgumentError("types/value length mismatch", "tuple", t);
            var a = new c.QV(e.wordSize)
              , o = new c.QV(e.wordSize)
              , u = [];
            r.forEach((function(e, r) {
                var t = n[r];
                if (e.dynamic) {
                    var i = o.length;
                    e.encode(o, t);
                    var s = a.writeUpdatableValue();
                    u.push((function(e) {
                        s(e + i)
                    }
                    ))
                } else
                    e.encode(a, t)
            }
            )),
            u.forEach((function(e) {
                e(a.length)
            }
            ));
            var l = e.appendWriter(a);
            return l += e.appendWriter(o)
        }
        function m(e, r) {
            var t = []
              , n = e.subReader(0);
            r.forEach((function(r) {
                var i = null;
                if (r.dynamic) {
                    var a = e.readValue()
                      , o = n.subReader(a.toNumber());
                    try {
                        i = r.decode(o)
                    } catch (u) {
                        if (u.code === s.Logger.errors.BUFFER_OVERRUN)
                            throw u;
                        (i = u).baseType = r.name,
                        i.name = r.localName,
                        i.type = r.type
                    }
                } else
                    try {
                        i = r.decode(e)
                    } catch (u) {
                        if (u.code === s.Logger.errors.BUFFER_OVERRUN)
                            throw u;
                        (i = u).baseType = r.name,
                        i.name = r.localName,
                        i.type = r.type
                    }
                void 0 != i && t.push(i)
            }
            ));
            var i = r.reduce((function(e, r) {
                var t = r.localName;
                return t && (e[t] || (e[t] = 0),
                e[t]++),
                e
            }
            ), {});
            r.forEach((function(e, r) {
                var n = e.localName;
                if (n && 1 === i[n] && ("length" === n && (n = "_length"),
                null == t[n])) {
                    var a = t[r];
                    a instanceof Error ? Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            throw a
                        }
                    }) : t[n] = a
                }
            }
            ));
            for (var a = function() {
                var e = t[o];
                e instanceof Error && Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                        throw e
                    }
                })
            }, o = 0; o < t.length; o++)
                a();
            return Object.freeze(t)
        }
        var y = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e, i, a) {
                var o;
                (0,
                n.Z)(this, t);
                var s = e.type + "[" + (i >= 0 ? i : "") + "]"
                  , u = -1 === i || e.dynamic;
                return (o = r.call(this, "array", s, a, u)).coder = e,
                o.length = i,
                o
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    for (var e = this.coder.defaultValue(), r = [], t = 0; t < this.length; t++)
                        r.push(e);
                    return r
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    Array.isArray(r) || this._throwError("expected array value", r);
                    var t = this.length;
                    -1 === t && (t = r.length,
                    e.writeValue(r.length)),
                    g.checkArgumentCount(r.length, t, "coder array" + (this.localName ? " " + this.localName : ""));
                    for (var n = [], i = 0; i < r.length; i++)
                        n.push(this.coder);
                    return v(e, n, r)
                }
            }, {
                key: "decode",
                value: function(e) {
                    var r = this.length;
                    -1 === r && 32 * (r = e.readValue().toNumber()) > e._data.length && g.throwError("insufficient data length", s.Logger.errors.BUFFER_OVERRUN, {
                        length: e._data.length,
                        count: r
                    });
                    for (var t = [], n = 0; n < r; n++)
                        t.push(new p(this.coder));
                    return e.coerce(this.name, m(e, t))
                }
            }]),
            t
        }(c.XI)
          , b = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e) {
                return (0,
                n.Z)(this, t),
                r.call(this, "bool", "bool", e, !1)
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    return !1
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    return e.writeValue(r ? 1 : 0)
                }
            }, {
                key: "decode",
                value: function(e) {
                    return e.coerce(this.type, !e.readValue().isZero())
                }
            }]),
            t
        }(c.XI)
          , w = t(11752)
          , k = t(61120)
          , A = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e, i) {
                return (0,
                n.Z)(this, t),
                r.call(this, e, e, i, !0)
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    return "0x"
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    r = (0,
                    a.arrayify)(r);
                    var t = e.writeValue(r.length);
                    return t += e.writeBytes(r)
                }
            }, {
                key: "decode",
                value: function(e) {
                    return e.readBytes(e.readValue().toNumber(), !0)
                }
            }]),
            t
        }(c.XI)
          , E = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e) {
                return (0,
                n.Z)(this, t),
                r.call(this, "bytes", e)
            }
            return (0,
            i.Z)(t, [{
                key: "decode",
                value: function(e) {
                    return e.coerce(this.name, (0,
                    a.hexlify)((0,
                    w.Z)((0,
                    k.Z)(t.prototype), "decode", this).call(this, e)))
                }
            }]),
            t
        }(A)
          , x = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e, i) {
                var a;
                (0,
                n.Z)(this, t);
                var o = "bytes" + String(e);
                return (a = r.call(this, o, o, i, !1)).size = e,
                a
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    var t = (0,
                    a.arrayify)(r);
                    return t.length !== this.size && this._throwError("incorrect data length", r),
                    e.writeBytes(t)
                }
            }, {
                key: "decode",
                value: function(e) {
                    return e.coerce(this.name, (0,
                    a.hexlify)(e.readBytes(this.size)))
                }
            }]),
            t
        }(c.XI)
          , S = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e) {
                return (0,
                n.Z)(this, t),
                r.call(this, "null", "", e, !1)
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    return null
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    return null != r && this._throwError("not null", r),
                    e.writeBytes([])
                }
            }, {
                key: "decode",
                value: function(e) {
                    return e.readBytes(0),
                    e.coerce(this.name, null)
                }
            }]),
            t
        }(c.XI)
          , P = t(19560)
          , N = t(6321)
          , R = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e, i, a) {
                var o;
                (0,
                n.Z)(this, t);
                var s = (i ? "int" : "uint") + 8 * e;
                return (o = r.call(this, s, s, a, !1)).size = e,
                o.signed = i,
                o
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    return 0
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    var t = P.O$.from(r)
                      , n = N.Bz.mask(8 * e.wordSize);
                    if (this.signed) {
                        var i = n.mask(8 * this.size - 1);
                        (t.gt(i) || t.lt(i.add(N.fh).mul(N.tL))) && this._throwError("value out-of-bounds", r)
                    } else
                        (t.lt(N._Y) || t.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", r);
                    return t = t.toTwos(8 * this.size).mask(8 * this.size),
                    this.signed && (t = t.fromTwos(8 * this.size).toTwos(8 * e.wordSize)),
                    e.writeValue(t)
                }
            }, {
                key: "decode",
                value: function(e) {
                    var r = e.readValue().mask(8 * this.size);
                    return this.signed && (r = r.fromTwos(8 * this.size)),
                    e.coerce(this.name, r)
                }
            }]),
            t
        }(c.XI)
          , C = t(91953)
          , O = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e) {
                return (0,
                n.Z)(this, t),
                r.call(this, "string", e)
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    return ""
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    return (0,
                    w.Z)((0,
                    k.Z)(t.prototype), "encode", this).call(this, e, (0,
                    C.Y0)(r))
                }
            }, {
                key: "decode",
                value: function(e) {
                    return (0,
                    C.ZN)((0,
                    w.Z)((0,
                    k.Z)(t.prototype), "decode", this).call(this, e))
                }
            }]),
            t
        }(A)
          , _ = function(e) {
            (0,
            l.Z)(t, e);
            var r = (0,
            f.Z)(t);
            function t(e, i) {
                var a;
                (0,
                n.Z)(this, t);
                var o = !1
                  , s = [];
                e.forEach((function(e) {
                    e.dynamic && (o = !0),
                    s.push(e.type)
                }
                ));
                var u = "tuple(" + s.join(",") + ")";
                return (a = r.call(this, "tuple", u, i, o)).coders = e,
                a
            }
            return (0,
            i.Z)(t, [{
                key: "defaultValue",
                value: function() {
                    var e = [];
                    this.coders.forEach((function(r) {
                        e.push(r.defaultValue())
                    }
                    ));
                    var r = this.coders.reduce((function(e, r) {
                        var t = r.localName;
                        return t && (e[t] || (e[t] = 0),
                        e[t]++),
                        e
                    }
                    ), {});
                    return this.coders.forEach((function(t, n) {
                        var i = t.localName;
                        i && 1 === r[i] && ("length" === i && (i = "_length"),
                        null == e[i] && (e[i] = e[n]))
                    }
                    )),
                    Object.freeze(e)
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    return v(e, this.coders, r)
                }
            }, {
                key: "decode",
                value: function(e) {
                    return e.coerce(this.name, m(e, this.coders))
                }
            }]),
            t
        }(c.XI)
          , T = t(7550)
          , I = new s.Logger(u.i)
          , B = new RegExp(/^bytes([0-9]*)$/)
          , L = new RegExp(/^(u?int)([0-9]*)$/)
          , Z = function() {
            function e(r) {
                (0,
                n.Z)(this, e),
                (0,
                o.defineReadOnly)(this, "coerceFunc", r || null)
            }
            return (0,
            i.Z)(e, [{
                key: "_getCoder",
                value: function(e) {
                    var r = this;
                    switch (e.baseType) {
                    case "address":
                        return new d(e.name);
                    case "bool":
                        return new b(e.name);
                    case "string":
                        return new O(e.name);
                    case "bytes":
                        return new E(e.name);
                    case "array":
                        return new y(this._getCoder(e.arrayChildren),e.arrayLength,e.name);
                    case "tuple":
                        return new _((e.components || []).map((function(e) {
                            return r._getCoder(e)
                        }
                        )),e.name);
                    case "":
                        return new S(e.name)
                    }
                    var t = e.type.match(L);
                    if (t) {
                        var n = parseInt(t[2] || "256");
                        return (0 === n || n > 256 || n % 8 !== 0) && I.throwArgumentError("invalid " + t[1] + " bit length", "param", e),
                        new R(n / 8,"int" === t[1],e.name)
                    }
                    if (t = e.type.match(B)) {
                        var i = parseInt(t[1]);
                        return (0 === i || i > 32) && I.throwArgumentError("invalid bytes length", "param", e),
                        new x(i,e.name)
                    }
                    return I.throwArgumentError("invalid type", "type", e.type)
                }
            }, {
                key: "_getWordSize",
                value: function() {
                    return 32
                }
            }, {
                key: "_getReader",
                value: function(e, r) {
                    return new c.Ej(e,this._getWordSize(),this.coerceFunc,r)
                }
            }, {
                key: "_getWriter",
                value: function() {
                    return new c.QV(this._getWordSize())
                }
            }, {
                key: "getDefaultValue",
                value: function(e) {
                    var r = this
                      , t = e.map((function(e) {
                        return r._getCoder(T._R.from(e))
                    }
                    ));
                    return new _(t,"_").defaultValue()
                }
            }, {
                key: "encode",
                value: function(e, r) {
                    var t = this;
                    e.length !== r.length && I.throwError("types/values length mismatch", s.Logger.errors.INVALID_ARGUMENT, {
                        count: {
                            types: e.length,
                            values: r.length
                        },
                        value: {
                            types: e,
                            values: r
                        }
                    });
                    var n = e.map((function(e) {
                        return t._getCoder(T._R.from(e))
                    }
                    ))
                      , i = new _(n,"_")
                      , a = this._getWriter();
                    return i.encode(a, r),
                    a.data
                }
            }, {
                key: "decode",
                value: function(e, r, t) {
                    var n = this
                      , i = e.map((function(e) {
                        return n._getCoder(T._R.from(e))
                    }
                    ));
                    return new _(i,"_").decode(this._getReader((0,
                    a.arrayify)(r), t))
                }
            }]),
            e
        }()
          , F = new Z
    },
    62: function(e, r, t) {
        t.d(r, {
            BR: function() {
                return f
            },
            Ej: function() {
                return p
            },
            QV: function() {
                return d
            },
            XI: function() {
                return h
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(52009)
          , o = t(19560)
          , s = t(54812)
          , u = t(2735)
          , c = t(50773)
          , l = new u.Logger(c.i);
        function f(e) {
            var r = [];
            return function e(t, n) {
                if (Array.isArray(n))
                    for (var i in n) {
                        var a = t.slice();
                        a.push(i);
                        try {
                            e(a, n[i])
                        } catch (o) {
                            r.push({
                                path: a,
                                error: o
                            })
                        }
                    }
            }([], e),
            r
        }
        var h = function() {
            function e(r, t, i, a) {
                (0,
                n.Z)(this, e),
                this.name = r,
                this.type = t,
                this.localName = i,
                this.dynamic = a
            }
            return (0,
            i.Z)(e, [{
                key: "_throwError",
                value: function(e, r) {
                    l.throwArgumentError(e, this.localName, r)
                }
            }]),
            e
        }()
          , d = function() {
            function e(r) {
                (0,
                n.Z)(this, e),
                (0,
                s.defineReadOnly)(this, "wordSize", r || 32),
                this._data = [],
                this._dataLength = 0,
                this._padding = new Uint8Array(r)
            }
            return (0,
            i.Z)(e, [{
                key: "data",
                get: function() {
                    return (0,
                    a.hexConcat)(this._data)
                }
            }, {
                key: "length",
                get: function() {
                    return this._dataLength
                }
            }, {
                key: "_writeData",
                value: function(e) {
                    return this._data.push(e),
                    this._dataLength += e.length,
                    e.length
                }
            }, {
                key: "appendWriter",
                value: function(e) {
                    return this._writeData((0,
                    a.concat)(e._data))
                }
            }, {
                key: "writeBytes",
                value: function(e) {
                    var r = (0,
                    a.arrayify)(e)
                      , t = r.length % this.wordSize;
                    return t && (r = (0,
                    a.concat)([r, this._padding.slice(t)])),
                    this._writeData(r)
                }
            }, {
                key: "_getValue",
                value: function(e) {
                    var r = (0,
                    a.arrayify)(o.O$.from(e));
                    return r.length > this.wordSize && l.throwError("value out-of-bounds", u.Logger.errors.BUFFER_OVERRUN, {
                        length: this.wordSize,
                        offset: r.length
                    }),
                    r.length % this.wordSize && (r = (0,
                    a.concat)([this._padding.slice(r.length % this.wordSize), r])),
                    r
                }
            }, {
                key: "writeValue",
                value: function(e) {
                    return this._writeData(this._getValue(e))
                }
            }, {
                key: "writeUpdatableValue",
                value: function() {
                    var e = this
                      , r = this._data.length;
                    return this._data.push(this._padding),
                    this._dataLength += this.wordSize,
                    function(t) {
                        e._data[r] = e._getValue(t)
                    }
                }
            }]),
            e
        }()
          , p = function() {
            function e(r, t, i, o) {
                (0,
                n.Z)(this, e),
                (0,
                s.defineReadOnly)(this, "_data", (0,
                a.arrayify)(r)),
                (0,
                s.defineReadOnly)(this, "wordSize", t || 32),
                (0,
                s.defineReadOnly)(this, "_coerceFunc", i),
                (0,
                s.defineReadOnly)(this, "allowLoose", o),
                this._offset = 0
            }
            return (0,
            i.Z)(e, [{
                key: "data",
                get: function() {
                    return (0,
                    a.hexlify)(this._data)
                }
            }, {
                key: "consumed",
                get: function() {
                    return this._offset
                }
            }, {
                key: "coerce",
                value: function(r, t) {
                    return this._coerceFunc ? this._coerceFunc(r, t) : e.coerce(r, t)
                }
            }, {
                key: "_peekBytes",
                value: function(e, r, t) {
                    var n = Math.ceil(r / this.wordSize) * this.wordSize;
                    return this._offset + n > this._data.length && (this.allowLoose && t && this._offset + r <= this._data.length ? n = r : l.throwError("data out-of-bounds", u.Logger.errors.BUFFER_OVERRUN, {
                        length: this._data.length,
                        offset: this._offset + n
                    })),
                    this._data.slice(this._offset, this._offset + n)
                }
            }, {
                key: "subReader",
                value: function(r) {
                    return new e(this._data.slice(this._offset + r),this.wordSize,this._coerceFunc,this.allowLoose)
                }
            }, {
                key: "readBytes",
                value: function(e, r) {
                    var t = this._peekBytes(0, e, !!r);
                    return this._offset += t.length,
                    t.slice(0, e)
                }
            }, {
                key: "readValue",
                value: function() {
                    return o.O$.from(this.readBytes(this.wordSize))
                }
            }], [{
                key: "coerce",
                value: function(e, r) {
                    var t = e.match("^u?int([0-9]+)$");
                    return t && parseInt(t[1]) <= 48 && (r = r.toNumber()),
                    r
                }
            }]),
            e
        }()
    },
    7550: function(e, r, t) {
        t.d(r, {
            HY: function() {
                return k
            },
            IC: function() {
                return C
            },
            QV: function() {
                return A
            },
            Xg: function() {
                return P
            },
            YW: function() {
                return N
            },
            _R: function() {
                return b
            },
            pc: function() {
                return m
            }
        });
        var n = t(60136)
          , i = t(29388)
          , a = t(15671)
          , o = t(43144)
          , s = t(19560)
          , u = t(54812)
          , c = t(2735)
          , l = t(50773)
          , f = new c.Logger(l.i)
          , h = {}
          , d = {
            calldata: !0,
            memory: !0,
            storage: !0
        }
          , p = {
            calldata: !0,
            memory: !0
        };
        function g(e, r) {
            if ("bytes" === e || "string" === e) {
                if (d[r])
                    return !0
            } else if ("address" === e) {
                if ("payable" === r)
                    return !0
            } else if ((e.indexOf("[") >= 0 || "tuple" === e) && p[r])
                return !0;
            return (d[r] || "payable" === r) && f.throwArgumentError("invalid modifier", "name", r),
            !1
        }
        function v(e, r) {
            for (var t in r)
                (0,
                u.defineReadOnly)(e, t, r[t])
        }
        var m = Object.freeze({
            sighash: "sighash",
            minimal: "minimal",
            full: "full",
            json: "json"
        })
          , y = new RegExp(/^(.*)\[([0-9]*)\]$/)
          , b = function() {
            function e(r, t) {
                (0,
                a.Z)(this, e),
                r !== h && f.throwError("use fromString", c.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new ParamType()"
                }),
                v(this, t);
                var n = this.type.match(y);
                v(this, n ? {
                    arrayLength: parseInt(n[2] || "-1"),
                    arrayChildren: e.fromObject({
                        type: n[1],
                        components: this.components
                    }),
                    baseType: "array"
                } : {
                    arrayLength: null,
                    arrayChildren: null,
                    baseType: null != this.components ? "tuple" : this.type
                }),
                this._isParamType = !0,
                Object.freeze(this)
            }
            return (0,
            o.Z)(e, [{
                key: "format",
                value: function(e) {
                    if (e || (e = m.sighash),
                    m[e] || f.throwArgumentError("invalid format type", "format", e),
                    e === m.json) {
                        var r = {
                            type: "tuple" === this.baseType ? "tuple" : this.type,
                            name: this.name || void 0
                        };
                        return "boolean" === typeof this.indexed && (r.indexed = this.indexed),
                        this.components && (r.components = this.components.map((function(r) {
                            return JSON.parse(r.format(e))
                        }
                        ))),
                        JSON.stringify(r)
                    }
                    var t = "";
                    return "array" === this.baseType ? (t += this.arrayChildren.format(e),
                    t += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : "tuple" === this.baseType ? (e !== m.sighash && (t += this.type),
                    t += "(" + this.components.map((function(r) {
                        return r.format(e)
                    }
                    )).join(e === m.full ? ", " : ",") + ")") : t += this.type,
                    e !== m.sighash && (!0 === this.indexed && (t += " indexed"),
                    e === m.full && this.name && (t += " " + this.name)),
                    t
                }
            }], [{
                key: "from",
                value: function(r, t) {
                    return "string" === typeof r ? e.fromString(r, t) : e.fromObject(r)
                }
            }, {
                key: "fromObject",
                value: function(r) {
                    return e.isParamType(r) ? r : new e(h,{
                        name: r.name || null,
                        type: O(r.type),
                        indexed: null == r.indexed ? null : !!r.indexed,
                        components: r.components ? r.components.map(e.fromObject) : null
                    })
                }
            }, {
                key: "fromString",
                value: function(r, t) {
                    return n = function(e, r) {
                        var t = e;
                        function n(r) {
                            f.throwArgumentError("unexpected character at position ".concat(r), "param", e)
                        }
                        function i(e) {
                            var t = {
                                type: "",
                                name: "",
                                parent: e,
                                state: {
                                    allowType: !0
                                }
                            };
                            return r && (t.indexed = !1),
                            t
                        }
                        e = e.replace(/\s/g, " ");
                        for (var a = {
                            type: "",
                            name: "",
                            state: {
                                allowType: !0
                            }
                        }, o = a, s = 0; s < e.length; s++) {
                            var u = e[s];
                            switch (u) {
                            case "(":
                                o.state.allowType && "" === o.type ? o.type = "tuple" : o.state.allowParams || n(s),
                                o.state.allowType = !1,
                                o.type = O(o.type),
                                o.components = [i(o)],
                                o = o.components[0];
                                break;
                            case ")":
                                delete o.state,
                                "indexed" === o.name && (r || n(s),
                                o.indexed = !0,
                                o.name = ""),
                                g(o.type, o.name) && (o.name = ""),
                                o.type = O(o.type);
                                var c = o;
                                (o = o.parent) || n(s),
                                delete c.parent,
                                o.state.allowParams = !1,
                                o.state.allowName = !0,
                                o.state.allowArray = !0;
                                break;
                            case ",":
                                delete o.state,
                                "indexed" === o.name && (r || n(s),
                                o.indexed = !0,
                                o.name = ""),
                                g(o.type, o.name) && (o.name = ""),
                                o.type = O(o.type);
                                var l = i(o.parent);
                                o.parent.components.push(l),
                                delete o.parent,
                                o = l;
                                break;
                            case " ":
                                o.state.allowType && "" !== o.type && (o.type = O(o.type),
                                delete o.state.allowType,
                                o.state.allowName = !0,
                                o.state.allowParams = !0),
                                o.state.allowName && "" !== o.name && ("indexed" === o.name ? (r || n(s),
                                o.indexed && n(s),
                                o.indexed = !0,
                                o.name = "") : g(o.type, o.name) ? o.name = "" : o.state.allowName = !1);
                                break;
                            case "[":
                                o.state.allowArray || n(s),
                                o.type += u,
                                o.state.allowArray = !1,
                                o.state.allowName = !1,
                                o.state.readArray = !0;
                                break;
                            case "]":
                                o.state.readArray || n(s),
                                o.type += u,
                                o.state.readArray = !1,
                                o.state.allowArray = !0,
                                o.state.allowName = !0;
                                break;
                            default:
                                o.state.allowType ? (o.type += u,
                                o.state.allowParams = !0,
                                o.state.allowArray = !0) : o.state.allowName ? (o.name += u,
                                delete o.state.allowArray) : o.state.readArray ? o.type += u : n(s)
                            }
                        }
                        return o.parent && f.throwArgumentError("unexpected eof", "param", e),
                        delete a.state,
                        "indexed" === o.name ? (r || n(t.length - 7),
                        o.indexed && n(t.length - 7),
                        o.indexed = !0,
                        o.name = "") : g(o.type, o.name) && (o.name = ""),
                        a.type = O(a.type),
                        a
                    }(r, !!t),
                    e.fromObject({
                        name: n.name,
                        type: n.type,
                        indexed: n.indexed,
                        components: n.components
                    });
                    var n
                }
            }, {
                key: "isParamType",
                value: function(e) {
                    return !(null == e || !e._isParamType)
                }
            }]),
            e
        }();
        function w(e, r) {
            return function(e) {
                e = e.trim();
                for (var r = [], t = "", n = 0, i = 0; i < e.length; i++) {
                    var a = e[i];
                    "," === a && 0 === n ? (r.push(t),
                    t = "") : (t += a,
                    "(" === a ? n++ : ")" === a && -1 === --n && f.throwArgumentError("unbalanced parenthesis", "value", e))
                }
                t && r.push(t);
                return r
            }(e).map((function(e) {
                return b.fromString(e, r)
            }
            ))
        }
        var k = function() {
            function e(r, t) {
                (0,
                a.Z)(this, e),
                r !== h && f.throwError("use a static from method", c.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new Fragment()"
                }),
                v(this, t),
                this._isFragment = !0,
                Object.freeze(this)
            }
            return (0,
            o.Z)(e, null, [{
                key: "from",
                value: function(r) {
                    return e.isFragment(r) ? r : "string" === typeof r ? e.fromString(r) : e.fromObject(r)
                }
            }, {
                key: "fromObject",
                value: function(r) {
                    if (e.isFragment(r))
                        return r;
                    switch (r.type) {
                    case "function":
                        return N.fromObject(r);
                    case "event":
                        return A.fromObject(r);
                    case "constructor":
                        return P.fromObject(r);
                    case "error":
                        return C.fromObject(r);
                    case "fallback":
                    case "receive":
                        return null
                    }
                    return f.throwArgumentError("invalid fragment object", "value", r)
                }
            }, {
                key: "fromString",
                value: function(e) {
                    return "event" === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? A.fromString(e.substring(5).trim()) : "function" === e.split(" ")[0] ? N.fromString(e.substring(8).trim()) : "constructor" === e.split("(")[0].trim() ? P.fromString(e.trim()) : "error" === e.split(" ")[0] ? C.fromString(e.substring(5).trim()) : f.throwArgumentError("unsupported fragment", "value", e)
                }
            }, {
                key: "isFragment",
                value: function(e) {
                    return !(!e || !e._isFragment)
                }
            }]),
            e
        }()
          , A = function(e) {
            (0,
            n.Z)(t, e);
            var r = (0,
            i.Z)(t);
            function t() {
                return (0,
                a.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            o.Z)(t, [{
                key: "format",
                value: function(e) {
                    if (e || (e = m.sighash),
                    m[e] || f.throwArgumentError("invalid format type", "format", e),
                    e === m.json)
                        return JSON.stringify({
                            type: "event",
                            anonymous: this.anonymous,
                            name: this.name,
                            inputs: this.inputs.map((function(r) {
                                return JSON.parse(r.format(e))
                            }
                            ))
                        });
                    var r = "";
                    return e !== m.sighash && (r += "event "),
                    r += this.name + "(" + this.inputs.map((function(r) {
                        return r.format(e)
                    }
                    )).join(e === m.full ? ", " : ",") + ") ",
                    e !== m.sighash && this.anonymous && (r += "anonymous "),
                    r.trim()
                }
            }], [{
                key: "from",
                value: function(e) {
                    return "string" === typeof e ? t.fromString(e) : t.fromObject(e)
                }
            }, {
                key: "fromObject",
                value: function(e) {
                    if (t.isEventFragment(e))
                        return e;
                    "event" !== e.type && f.throwArgumentError("invalid event object", "value", e);
                    var r = {
                        name: T(e.name),
                        anonymous: e.anonymous,
                        inputs: e.inputs ? e.inputs.map(b.fromObject) : [],
                        type: "event"
                    };
                    return new t(h,r)
                }
            }, {
                key: "fromString",
                value: function(e) {
                    var r = e.match(I);
                    r || f.throwArgumentError("invalid event string", "value", e);
                    var n = !1;
                    return r[3].split(" ").forEach((function(e) {
                        switch (e.trim()) {
                        case "anonymous":
                            n = !0;
                            break;
                        case "":
                            break;
                        default:
                            f.warn("unknown modifier: " + e)
                        }
                    }
                    )),
                    t.fromObject({
                        name: r[1].trim(),
                        anonymous: n,
                        inputs: w(r[2], !0),
                        type: "event"
                    })
                }
            }, {
                key: "isEventFragment",
                value: function(e) {
                    return e && e._isFragment && "event" === e.type
                }
            }]),
            t
        }(k);
        function E(e, r) {
            r.gas = null;
            var t = e.split("@");
            return 1 !== t.length ? (t.length > 2 && f.throwArgumentError("invalid human-readable ABI signature", "value", e),
            t[1].match(/^[0-9]+$/) || f.throwArgumentError("invalid human-readable ABI signature gas", "value", e),
            r.gas = s.O$.from(t[1]),
            t[0]) : e
        }
        function x(e, r) {
            r.constant = !1,
            r.payable = !1,
            r.stateMutability = "nonpayable",
            e.split(" ").forEach((function(e) {
                switch (e.trim()) {
                case "constant":
                    r.constant = !0;
                    break;
                case "payable":
                    r.payable = !0,
                    r.stateMutability = "payable";
                    break;
                case "nonpayable":
                    r.payable = !1,
                    r.stateMutability = "nonpayable";
                    break;
                case "pure":
                    r.constant = !0,
                    r.stateMutability = "pure";
                    break;
                case "view":
                    r.constant = !0,
                    r.stateMutability = "view";
                    break;
                case "external":
                case "public":
                case "":
                    break;
                default:
                    console.log("unknown modifier: " + e)
                }
            }
            ))
        }
        function S(e) {
            var r = {
                constant: !1,
                payable: !0,
                stateMutability: "payable"
            };
            return null != e.stateMutability ? (r.stateMutability = e.stateMutability,
            r.constant = "view" === r.stateMutability || "pure" === r.stateMutability,
            null != e.constant && !!e.constant !== r.constant && f.throwArgumentError("cannot have constant function with mutability " + r.stateMutability, "value", e),
            r.payable = "payable" === r.stateMutability,
            null != e.payable && !!e.payable !== r.payable && f.throwArgumentError("cannot have payable function with mutability " + r.stateMutability, "value", e)) : null != e.payable ? (r.payable = !!e.payable,
            null != e.constant || r.payable || "constructor" === e.type || f.throwArgumentError("unable to determine stateMutability", "value", e),
            r.constant = !!e.constant,
            r.constant ? r.stateMutability = "view" : r.stateMutability = r.payable ? "payable" : "nonpayable",
            r.payable && r.constant && f.throwArgumentError("cannot have constant payable function", "value", e)) : null != e.constant ? (r.constant = !!e.constant,
            r.payable = !r.constant,
            r.stateMutability = r.constant ? "view" : "payable") : "constructor" !== e.type && f.throwArgumentError("unable to determine stateMutability", "value", e),
            r
        }
        var P = function(e) {
            (0,
            n.Z)(t, e);
            var r = (0,
            i.Z)(t);
            function t() {
                return (0,
                a.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            o.Z)(t, [{
                key: "format",
                value: function(e) {
                    if (e || (e = m.sighash),
                    m[e] || f.throwArgumentError("invalid format type", "format", e),
                    e === m.json)
                        return JSON.stringify({
                            type: "constructor",
                            stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                            payable: this.payable,
                            gas: this.gas ? this.gas.toNumber() : void 0,
                            inputs: this.inputs.map((function(r) {
                                return JSON.parse(r.format(e))
                            }
                            ))
                        });
                    e === m.sighash && f.throwError("cannot format a constructor for sighash", c.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "format(sighash)"
                    });
                    var r = "constructor(" + this.inputs.map((function(r) {
                        return r.format(e)
                    }
                    )).join(e === m.full ? ", " : ",") + ") ";
                    return this.stateMutability && "nonpayable" !== this.stateMutability && (r += this.stateMutability + " "),
                    r.trim()
                }
            }], [{
                key: "from",
                value: function(e) {
                    return "string" === typeof e ? t.fromString(e) : t.fromObject(e)
                }
            }, {
                key: "fromObject",
                value: function(e) {
                    if (t.isConstructorFragment(e))
                        return e;
                    "constructor" !== e.type && f.throwArgumentError("invalid constructor object", "value", e);
                    var r = S(e);
                    r.constant && f.throwArgumentError("constructor cannot be constant", "value", e);
                    var n = {
                        name: null,
                        type: e.type,
                        inputs: e.inputs ? e.inputs.map(b.fromObject) : [],
                        payable: r.payable,
                        stateMutability: r.stateMutability,
                        gas: e.gas ? s.O$.from(e.gas) : null
                    };
                    return new t(h,n)
                }
            }, {
                key: "fromString",
                value: function(e) {
                    var r = {
                        type: "constructor"
                    }
                      , n = (e = E(e, r)).match(I);
                    return n && "constructor" === n[1].trim() || f.throwArgumentError("invalid constructor string", "value", e),
                    r.inputs = w(n[2].trim(), !1),
                    x(n[3].trim(), r),
                    t.fromObject(r)
                }
            }, {
                key: "isConstructorFragment",
                value: function(e) {
                    return e && e._isFragment && "constructor" === e.type
                }
            }]),
            t
        }(k)
          , N = function(e) {
            (0,
            n.Z)(t, e);
            var r = (0,
            i.Z)(t);
            function t() {
                return (0,
                a.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            o.Z)(t, [{
                key: "format",
                value: function(e) {
                    if (e || (e = m.sighash),
                    m[e] || f.throwArgumentError("invalid format type", "format", e),
                    e === m.json)
                        return JSON.stringify({
                            type: "function",
                            name: this.name,
                            constant: this.constant,
                            stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
                            payable: this.payable,
                            gas: this.gas ? this.gas.toNumber() : void 0,
                            inputs: this.inputs.map((function(r) {
                                return JSON.parse(r.format(e))
                            }
                            )),
                            outputs: this.outputs.map((function(r) {
                                return JSON.parse(r.format(e))
                            }
                            ))
                        });
                    var r = "";
                    return e !== m.sighash && (r += "function "),
                    r += this.name + "(" + this.inputs.map((function(r) {
                        return r.format(e)
                    }
                    )).join(e === m.full ? ", " : ",") + ") ",
                    e !== m.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (r += this.stateMutability + " ") : this.constant && (r += "view "),
                    this.outputs && this.outputs.length && (r += "returns (" + this.outputs.map((function(r) {
                        return r.format(e)
                    }
                    )).join(", ") + ") "),
                    null != this.gas && (r += "@" + this.gas.toString() + " ")),
                    r.trim()
                }
            }], [{
                key: "from",
                value: function(e) {
                    return "string" === typeof e ? t.fromString(e) : t.fromObject(e)
                }
            }, {
                key: "fromObject",
                value: function(e) {
                    if (t.isFunctionFragment(e))
                        return e;
                    "function" !== e.type && f.throwArgumentError("invalid function object", "value", e);
                    var r = S(e)
                      , n = {
                        type: e.type,
                        name: T(e.name),
                        constant: r.constant,
                        inputs: e.inputs ? e.inputs.map(b.fromObject) : [],
                        outputs: e.outputs ? e.outputs.map(b.fromObject) : [],
                        payable: r.payable,
                        stateMutability: r.stateMutability,
                        gas: e.gas ? s.O$.from(e.gas) : null
                    };
                    return new t(h,n)
                }
            }, {
                key: "fromString",
                value: function(e) {
                    var r = {
                        type: "function"
                    }
                      , n = (e = E(e, r)).split(" returns ");
                    n.length > 2 && f.throwArgumentError("invalid function string", "value", e);
                    var i = n[0].match(I);
                    if (i || f.throwArgumentError("invalid function signature", "value", e),
                    r.name = i[1].trim(),
                    r.name && T(r.name),
                    r.inputs = w(i[2], !1),
                    x(i[3].trim(), r),
                    n.length > 1) {
                        var a = n[1].match(I);
                        "" == a[1].trim() && "" == a[3].trim() || f.throwArgumentError("unexpected tokens", "value", e),
                        r.outputs = w(a[2], !1)
                    } else
                        r.outputs = [];
                    return t.fromObject(r)
                }
            }, {
                key: "isFunctionFragment",
                value: function(e) {
                    return e && e._isFragment && "function" === e.type
                }
            }]),
            t
        }(P);
        function R(e) {
            var r = e.format();
            return "Error(string)" !== r && "Panic(uint256)" !== r || f.throwArgumentError("cannot specify user defined ".concat(r, " error"), "fragment", e),
            e
        }
        var C = function(e) {
            (0,
            n.Z)(t, e);
            var r = (0,
            i.Z)(t);
            function t() {
                return (0,
                a.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            o.Z)(t, [{
                key: "format",
                value: function(e) {
                    if (e || (e = m.sighash),
                    m[e] || f.throwArgumentError("invalid format type", "format", e),
                    e === m.json)
                        return JSON.stringify({
                            type: "error",
                            name: this.name,
                            inputs: this.inputs.map((function(r) {
                                return JSON.parse(r.format(e))
                            }
                            ))
                        });
                    var r = "";
                    return e !== m.sighash && (r += "error "),
                    (r += this.name + "(" + this.inputs.map((function(r) {
                        return r.format(e)
                    }
                    )).join(e === m.full ? ", " : ",") + ") ").trim()
                }
            }], [{
                key: "from",
                value: function(e) {
                    return "string" === typeof e ? t.fromString(e) : t.fromObject(e)
                }
            }, {
                key: "fromObject",
                value: function(e) {
                    if (t.isErrorFragment(e))
                        return e;
                    "error" !== e.type && f.throwArgumentError("invalid error object", "value", e);
                    var r = {
                        type: e.type,
                        name: T(e.name),
                        inputs: e.inputs ? e.inputs.map(b.fromObject) : []
                    };
                    return R(new t(h,r))
                }
            }, {
                key: "fromString",
                value: function(e) {
                    var r = {
                        type: "error"
                    }
                      , n = e.match(I);
                    return n || f.throwArgumentError("invalid error signature", "value", e),
                    r.name = n[1].trim(),
                    r.name && T(r.name),
                    r.inputs = w(n[2], !1),
                    R(t.fromObject(r))
                }
            }, {
                key: "isErrorFragment",
                value: function(e) {
                    return e && e._isFragment && "error" === e.type
                }
            }]),
            t
        }(k);
        function O(e) {
            return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)),
            e
        }
        var _ = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
        function T(e) {
            return e && e.match(_) || f.throwArgumentError('invalid identifier "'.concat(e, '"'), "value", e),
            e
        }
        var I = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$")
    },
    93487: function(e, r, t) {
        t.r(r),
        t.d(r, {
            AbiCoder: function() {
                return i.R
            },
            ConstructorFragment: function() {
                return n.Xg
            },
            ErrorFragment: function() {
                return n.IC
            },
            EventFragment: function() {
                return n.QV
            },
            FormatTypes: function() {
                return n.pc
            },
            Fragment: function() {
                return n.HY
            },
            FunctionFragment: function() {
                return n.YW
            },
            Indexed: function() {
                return a.Hk
            },
            Interface: function() {
                return a.vU
            },
            LogDescription: function() {
                return a.CC
            },
            ParamType: function() {
                return n._R
            },
            TransactionDescription: function() {
                return a.vk
            },
            checkResultErrors: function() {
                return o.BR
            },
            defaultAbiCoder: function() {
                return i.$
            }
        });
        var n = t(7550)
          , i = t(86388)
          , a = t(99456)
          , o = t(62)
    },
    99456: function(e, r, t) {
        t.d(r, {
            CC: function() {
                return y
            },
            Hk: function() {
                return k
            },
            vU: function() {
                return x
            },
            vk: function() {
                return b
            }
        });
        var n = t(43144)
          , i = t(15671)
          , a = t(60136)
          , o = t(29388)
          , s = t(28552)
          , u = t(19560)
          , c = t(52009)
          , l = t(93358)
          , f = t(11291)
          , h = t(54812)
          , d = t(86388)
          , p = t(7550)
          , g = t(2735)
          , v = t(50773)
          , m = new g.Logger(v.i)
          , y = function(e) {
            (0,
            a.Z)(t, e);
            var r = (0,
            o.Z)(t);
            function t() {
                return (0,
                i.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            n.Z)(t)
        }(h.Description)
          , b = function(e) {
            (0,
            a.Z)(t, e);
            var r = (0,
            o.Z)(t);
            function t() {
                return (0,
                i.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            n.Z)(t)
        }(h.Description)
          , w = function(e) {
            (0,
            a.Z)(t, e);
            var r = (0,
            o.Z)(t);
            function t() {
                return (0,
                i.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            n.Z)(t)
        }(h.Description)
          , k = function(e) {
            (0,
            a.Z)(t, e);
            var r = (0,
            o.Z)(t);
            function t() {
                return (0,
                i.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            n.Z)(t, null, [{
                key: "isIndexed",
                value: function(e) {
                    return !(!e || !e._isIndexed)
                }
            }]),
            t
        }(h.Description)
          , A = {
            "0x08c379a0": {
                signature: "Error(string)",
                name: "Error",
                inputs: ["string"],
                reason: !0
            },
            "0x4e487b71": {
                signature: "Panic(uint256)",
                name: "Panic",
                inputs: ["uint256"]
            }
        };
        function E(e, r) {
            var t = new Error("deferred error during ABI decoding triggered accessing ".concat(e));
            return t.error = r,
            t
        }
        var x = function() {
            function e(r) {
                var t = this;
                (0,
                i.Z)(this, e);
                var n = [];
                n = "string" === typeof r ? JSON.parse(r) : r,
                (0,
                h.defineReadOnly)(this, "fragments", n.map((function(e) {
                    return p.HY.from(e)
                }
                )).filter((function(e) {
                    return null != e
                }
                ))),
                (0,
                h.defineReadOnly)(this, "_abiCoder", (0,
                h.getStatic)(this instanceof e ? this.constructor : void 0, "getAbiCoder")()),
                (0,
                h.defineReadOnly)(this, "functions", {}),
                (0,
                h.defineReadOnly)(this, "errors", {}),
                (0,
                h.defineReadOnly)(this, "events", {}),
                (0,
                h.defineReadOnly)(this, "structs", {}),
                this.fragments.forEach((function(e) {
                    var r = null;
                    switch (e.type) {
                    case "constructor":
                        return t.deploy ? void m.warn("duplicate definition - constructor") : void (0,
                        h.defineReadOnly)(t, "deploy", e);
                    case "function":
                        r = t.functions;
                        break;
                    case "event":
                        r = t.events;
                        break;
                    case "error":
                        r = t.errors;
                        break;
                    default:
                        return
                    }
                    var n = e.format();
                    r[n] ? m.warn("duplicate definition - " + n) : r[n] = e
                }
                )),
                this.deploy || (0,
                h.defineReadOnly)(this, "deploy", p.Xg.from({
                    payable: !1,
                    type: "constructor"
                })),
                (0,
                h.defineReadOnly)(this, "_isInterface", !0)
            }
            return (0,
            n.Z)(e, [{
                key: "format",
                value: function(e) {
                    e || (e = p.pc.full),
                    e === p.pc.sighash && m.throwArgumentError("interface does not support formatting sighash", "format", e);
                    var r = this.fragments.map((function(r) {
                        return r.format(e)
                    }
                    ));
                    return e === p.pc.json ? JSON.stringify(r.map((function(e) {
                        return JSON.parse(e)
                    }
                    ))) : r
                }
            }, {
                key: "getFunction",
                value: function(e) {
                    if ((0,
                    c.isHexString)(e)) {
                        for (var r in this.functions)
                            if (e === this.getSighash(r))
                                return this.functions[r];
                        m.throwArgumentError("no matching function", "sighash", e)
                    }
                    if (-1 === e.indexOf("(")) {
                        var t = e.trim()
                          , n = Object.keys(this.functions).filter((function(e) {
                            return e.split("(")[0] === t
                        }
                        ));
                        return 0 === n.length ? m.throwArgumentError("no matching function", "name", t) : n.length > 1 && m.throwArgumentError("multiple matching functions", "name", t),
                        this.functions[n[0]]
                    }
                    var i = this.functions[p.YW.fromString(e).format()];
                    return i || m.throwArgumentError("no matching function", "signature", e),
                    i
                }
            }, {
                key: "getEvent",
                value: function(e) {
                    if ((0,
                    c.isHexString)(e)) {
                        var r = e.toLowerCase();
                        for (var t in this.events)
                            if (r === this.getEventTopic(t))
                                return this.events[t];
                        m.throwArgumentError("no matching event", "topichash", r)
                    }
                    if (-1 === e.indexOf("(")) {
                        var n = e.trim()
                          , i = Object.keys(this.events).filter((function(e) {
                            return e.split("(")[0] === n
                        }
                        ));
                        return 0 === i.length ? m.throwArgumentError("no matching event", "name", n) : i.length > 1 && m.throwArgumentError("multiple matching events", "name", n),
                        this.events[i[0]]
                    }
                    var a = this.events[p.QV.fromString(e).format()];
                    return a || m.throwArgumentError("no matching event", "signature", e),
                    a
                }
            }, {
                key: "getError",
                value: function(e) {
                    if ((0,
                    c.isHexString)(e)) {
                        var r = (0,
                        h.getStatic)(this.constructor, "getSighash");
                        for (var t in this.errors) {
                            if (e === r(this.errors[t]))
                                return this.errors[t]
                        }
                        m.throwArgumentError("no matching error", "sighash", e)
                    }
                    if (-1 === e.indexOf("(")) {
                        var n = e.trim()
                          , i = Object.keys(this.errors).filter((function(e) {
                            return e.split("(")[0] === n
                        }
                        ));
                        return 0 === i.length ? m.throwArgumentError("no matching error", "name", n) : i.length > 1 && m.throwArgumentError("multiple matching errors", "name", n),
                        this.errors[i[0]]
                    }
                    var a = this.errors[p.YW.fromString(e).format()];
                    return a || m.throwArgumentError("no matching error", "signature", e),
                    a
                }
            }, {
                key: "getSighash",
                value: function(e) {
                    if ("string" === typeof e)
                        try {
                            e = this.getFunction(e)
                        } catch (r) {
                            try {
                                e = this.getError(e)
                            } catch (t) {
                                throw r
                            }
                        }
                    return (0,
                    h.getStatic)(this.constructor, "getSighash")(e)
                }
            }, {
                key: "getEventTopic",
                value: function(e) {
                    return "string" === typeof e && (e = this.getEvent(e)),
                    (0,
                    h.getStatic)(this.constructor, "getEventTopic")(e)
                }
            }, {
                key: "_decodeParams",
                value: function(e, r) {
                    return this._abiCoder.decode(e, r)
                }
            }, {
                key: "_encodeParams",
                value: function(e, r) {
                    return this._abiCoder.encode(e, r)
                }
            }, {
                key: "encodeDeploy",
                value: function(e) {
                    return this._encodeParams(this.deploy.inputs, e || [])
                }
            }, {
                key: "decodeErrorResult",
                value: function(e, r) {
                    "string" === typeof e && (e = this.getError(e));
                    var t = (0,
                    c.arrayify)(r);
                    return (0,
                    c.hexlify)(t.slice(0, 4)) !== this.getSighash(e) && m.throwArgumentError("data signature does not match error ".concat(e.name, "."), "data", (0,
                    c.hexlify)(t)),
                    this._decodeParams(e.inputs, t.slice(4))
                }
            }, {
                key: "encodeErrorResult",
                value: function(e, r) {
                    return "string" === typeof e && (e = this.getError(e)),
                    (0,
                    c.hexlify)((0,
                    c.concat)([this.getSighash(e), this._encodeParams(e.inputs, r || [])]))
                }
            }, {
                key: "decodeFunctionData",
                value: function(e, r) {
                    "string" === typeof e && (e = this.getFunction(e));
                    var t = (0,
                    c.arrayify)(r);
                    return (0,
                    c.hexlify)(t.slice(0, 4)) !== this.getSighash(e) && m.throwArgumentError("data signature does not match function ".concat(e.name, "."), "data", (0,
                    c.hexlify)(t)),
                    this._decodeParams(e.inputs, t.slice(4))
                }
            }, {
                key: "encodeFunctionData",
                value: function(e, r) {
                    return "string" === typeof e && (e = this.getFunction(e)),
                    (0,
                    c.hexlify)((0,
                    c.concat)([this.getSighash(e), this._encodeParams(e.inputs, r || [])]))
                }
            }, {
                key: "decodeFunctionResult",
                value: function(e, r) {
                    "string" === typeof e && (e = this.getFunction(e));
                    var t = (0,
                    c.arrayify)(r)
                      , n = null
                      , i = ""
                      , a = null
                      , o = null
                      , s = null;
                    switch (t.length % this._abiCoder._getWordSize()) {
                    case 0:
                        try {
                            return this._abiCoder.decode(e.outputs, t)
                        } catch (f) {}
                        break;
                    case 4:
                        var u = (0,
                        c.hexlify)(t.slice(0, 4))
                          , l = A[u];
                        if (l)
                            a = this._abiCoder.decode(l.inputs, t.slice(4)),
                            o = l.name,
                            s = l.signature,
                            l.reason && (n = a[0]),
                            "Error" === o ? i = "; VM Exception while processing transaction: reverted with reason string ".concat(JSON.stringify(a[0])) : "Panic" === o && (i = "; VM Exception while processing transaction: reverted with panic code ".concat(a[0]));
                        else
                            try {
                                var f = this.getError(u);
                                a = this._abiCoder.decode(f.inputs, t.slice(4)),
                                o = f.name,
                                s = f.format()
                            } catch (f) {}
                    }
                    return m.throwError("call revert exception" + i, g.Logger.errors.CALL_EXCEPTION, {
                        method: e.format(),
                        data: (0,
                        c.hexlify)(r),
                        errorArgs: a,
                        errorName: o,
                        errorSignature: s,
                        reason: n
                    })
                }
            }, {
                key: "encodeFunctionResult",
                value: function(e, r) {
                    return "string" === typeof e && (e = this.getFunction(e)),
                    (0,
                    c.hexlify)(this._abiCoder.encode(e.outputs, r || []))
                }
            }, {
                key: "encodeFilterTopics",
                value: function(e, r) {
                    var t = this;
                    "string" === typeof e && (e = this.getEvent(e)),
                    r.length > e.inputs.length && m.throwError("too many arguments for " + e.format(), g.Logger.errors.UNEXPECTED_ARGUMENT, {
                        argument: "values",
                        value: r
                    });
                    var n = [];
                    e.anonymous || n.push(this.getEventTopic(e));
                    var i = function(e, r) {
                        return "string" === e.type ? (0,
                        l.id)(r) : "bytes" === e.type ? (0,
                        f.keccak256)((0,
                        c.hexlify)(r)) : ("bool" === e.type && "boolean" === typeof r && (r = r ? "0x01" : "0x00"),
                        e.type.match(/^u?int/) && (r = u.O$.from(r).toHexString()),
                        "address" === e.type && t._abiCoder.encode(["address"], [r]),
                        (0,
                        c.hexZeroPad)((0,
                        c.hexlify)(r), 32))
                    };
                    for (r.forEach((function(r, t) {
                        var a = e.inputs[t];
                        a.indexed ? null == r ? n.push(null) : "array" === a.baseType || "tuple" === a.baseType ? m.throwArgumentError("filtering with tuples or arrays not supported", "contract." + a.name, r) : Array.isArray(r) ? n.push(r.map((function(e) {
                            return i(a, e)
                        }
                        ))) : n.push(i(a, r)) : null != r && m.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + a.name, r)
                    }
                    )); n.length && null === n[n.length - 1]; )
                        n.pop();
                    return n
                }
            }, {
                key: "encodeEventLog",
                value: function(e, r) {
                    var t = this;
                    "string" === typeof e && (e = this.getEvent(e));
                    var n = []
                      , i = []
                      , a = [];
                    return e.anonymous || n.push(this.getEventTopic(e)),
                    r.length !== e.inputs.length && m.throwArgumentError("event arguments/values mismatch", "values", r),
                    e.inputs.forEach((function(e, o) {
                        var s = r[o];
                        if (e.indexed)
                            if ("string" === e.type)
                                n.push((0,
                                l.id)(s));
                            else if ("bytes" === e.type)
                                n.push((0,
                                f.keccak256)(s));
                            else {
                                if ("tuple" === e.baseType || "array" === e.baseType)
                                    throw new Error("not implemented");
                                n.push(t._abiCoder.encode([e.type], [s]))
                            }
                        else
                            i.push(e),
                            a.push(s)
                    }
                    )),
                    {
                        data: this._abiCoder.encode(i, a),
                        topics: n
                    }
                }
            }, {
                key: "decodeEventLog",
                value: function(e, r, t) {
                    if ("string" === typeof e && (e = this.getEvent(e)),
                    null != t && !e.anonymous) {
                        var n = this.getEventTopic(e);
                        (0,
                        c.isHexString)(t[0], 32) && t[0].toLowerCase() === n || m.throwError("fragment/topic mismatch", g.Logger.errors.INVALID_ARGUMENT, {
                            argument: "topics[0]",
                            expected: n,
                            value: t[0]
                        }),
                        t = t.slice(1)
                    }
                    var i = []
                      , a = []
                      , o = [];
                    e.inputs.forEach((function(e, r) {
                        e.indexed ? "string" === e.type || "bytes" === e.type || "tuple" === e.baseType || "array" === e.baseType ? (i.push(p._R.fromObject({
                            type: "bytes32",
                            name: e.name
                        })),
                        o.push(!0)) : (i.push(e),
                        o.push(!1)) : (a.push(e),
                        o.push(!1))
                    }
                    ));
                    var s = null != t ? this._abiCoder.decode(i, (0,
                    c.concat)(t)) : null
                      , u = this._abiCoder.decode(a, r, !0)
                      , l = []
                      , f = 0
                      , h = 0;
                    e.inputs.forEach((function(e, r) {
                        if (e.indexed)
                            if (null == s)
                                l[r] = new k({
                                    _isIndexed: !0,
                                    hash: null
                                });
                            else if (o[r])
                                l[r] = new k({
                                    _isIndexed: !0,
                                    hash: s[h++]
                                });
                            else
                                try {
                                    l[r] = s[h++]
                                } catch (n) {
                                    l[r] = n
                                }
                        else
                            try {
                                l[r] = u[f++]
                            } catch (n) {
                                l[r] = n
                            }
                        if (e.name && null == l[e.name]) {
                            var t = l[r];
                            t instanceof Error ? Object.defineProperty(l, e.name, {
                                enumerable: !0,
                                get: function() {
                                    throw E("property ".concat(JSON.stringify(e.name)), t)
                                }
                            }) : l[e.name] = t
                        }
                    }
                    ));
                    for (var d = function(e) {
                        var r = l[e];
                        r instanceof Error && Object.defineProperty(l, e, {
                            enumerable: !0,
                            get: function() {
                                throw E("index ".concat(e), r)
                            }
                        })
                    }, v = 0; v < l.length; v++)
                        d(v);
                    return Object.freeze(l)
                }
            }, {
                key: "parseTransaction",
                value: function(e) {
                    var r = this.getFunction(e.data.substring(0, 10).toLowerCase());
                    return r ? new b({
                        args: this._abiCoder.decode(r.inputs, "0x" + e.data.substring(10)),
                        functionFragment: r,
                        name: r.name,
                        signature: r.format(),
                        sighash: this.getSighash(r),
                        value: u.O$.from(e.value || "0")
                    }) : null
                }
            }, {
                key: "parseLog",
                value: function(e) {
                    var r = this.getEvent(e.topics[0]);
                    return !r || r.anonymous ? null : new y({
                        eventFragment: r,
                        name: r.name,
                        signature: r.format(),
                        topic: this.getEventTopic(r),
                        args: this.decodeEventLog(r, e.data, e.topics)
                    })
                }
            }, {
                key: "parseError",
                value: function(e) {
                    var r = (0,
                    c.hexlify)(e)
                      , t = this.getError(r.substring(0, 10).toLowerCase());
                    return t ? new w({
                        args: this._abiCoder.decode(t.inputs, "0x" + r.substring(10)),
                        errorFragment: t,
                        name: t.name,
                        signature: t.format(),
                        sighash: this.getSighash(t)
                    }) : null
                }
            }], [{
                key: "getAbiCoder",
                value: function() {
                    return d.$
                }
            }, {
                key: "getAddress",
                value: function(e) {
                    return (0,
                    s.getAddress)(e)
                }
            }, {
                key: "getSighash",
                value: function(e) {
                    return (0,
                    c.hexDataSlice)((0,
                    l.id)(e.format()), 0, 4)
                }
            }, {
                key: "getEventTopic",
                value: function(e) {
                    return (0,
                    l.id)(e.format())
                }
            }, {
                key: "isInterface",
                value: function(e) {
                    return !(!e || !e._isInterface)
                }
            }]),
            e
        }()
    },
    15157: function(e, r, t) {
        t.d(r, {
            Sg: function() {
                return d
            },
            zt: function() {
                return p
            }
        });
        var n = t(74165)
          , i = t(15671)
          , a = t(43144)
          , o = t(60136)
          , s = t(29388)
          , u = t(19560)
          , c = t(54812)
          , l = t(2735)
          , f = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , h = new l.Logger("abstract-provider/5.7.0")
          , d = function(e) {
            (0,
            o.Z)(t, e);
            var r = (0,
            s.Z)(t);
            function t() {
                return (0,
                i.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            a.Z)(t, null, [{
                key: "isForkEvent",
                value: function(e) {
                    return !(!e || !e._isForkEvent)
                }
            }]),
            t
        }(c.Description)
          , p = function() {
            function e() {
                (0,
                i.Z)(this, e),
                h.checkAbstract(this instanceof e ? this.constructor : void 0, e),
                (0,
                c.defineReadOnly)(this, "_isProvider", !0)
            }
            return (0,
            a.Z)(e, [{
                key: "getFeeData",
                value: function() {
                    return f(this, void 0, void 0, (0,
                    n.Z)().mark((function e() {
                        var r, t, i, a, o, s;
                        return (0,
                        n.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    c.resolveProperties)({
                                        block: this.getBlock("latest"),
                                        gasPrice: this.getGasPrice().catch((function(e) {
                                            return null
                                        }
                                        ))
                                    });
                                case 2:
                                    return r = e.sent,
                                    t = r.block,
                                    i = r.gasPrice,
                                    a = null,
                                    o = null,
                                    s = null,
                                    t && t.baseFeePerGas && (a = t.baseFeePerGas,
                                    s = u.O$.from("1500000000"),
                                    o = t.baseFeePerGas.mul(2).add(s)),
                                    e.abrupt("return", {
                                        lastBaseFeePerGas: a,
                                        maxFeePerGas: o,
                                        maxPriorityFeePerGas: s,
                                        gasPrice: i
                                    });
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "addListener",
                value: function(e, r) {
                    return this.on(e, r)
                }
            }, {
                key: "removeListener",
                value: function(e, r) {
                    return this.off(e, r)
                }
            }], [{
                key: "isProvider",
                value: function(e) {
                    return !(!e || !e._isProvider)
                }
            }]),
            e
        }()
    },
    72388: function(e, r, t) {
        t.d(r, {
            E: function() {
                return g
            },
            b: function() {
                return v
            }
        });
        var n = t(97326)
          , i = t(60136)
          , a = t(29388)
          , o = t(74165)
          , s = t(15671)
          , u = t(43144)
          , c = t(54812)
          , l = t(2735)
          , f = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , h = new l.Logger("abstract-signer/5.7.0")
          , d = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"]
          , p = [l.Logger.errors.INSUFFICIENT_FUNDS, l.Logger.errors.NONCE_EXPIRED, l.Logger.errors.REPLACEMENT_UNDERPRICED]
          , g = function() {
            function e() {
                (0,
                s.Z)(this, e),
                h.checkAbstract(this instanceof e ? this.constructor : void 0, e),
                (0,
                c.defineReadOnly)(this, "_isSigner", !0)
            }
            return (0,
            u.Z)(e, [{
                key: "getBalance",
                value: function(e) {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return this._checkProvider("getBalance"),
                                    r.next = 3,
                                    this.provider.getBalance(this.getAddress(), e);
                                case 3:
                                    return r.abrupt("return", r.sent);
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getTransactionCount",
                value: function(e) {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return this._checkProvider("getTransactionCount"),
                                    r.next = 3,
                                    this.provider.getTransactionCount(this.getAddress(), e);
                                case 3:
                                    return r.abrupt("return", r.sent);
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "estimateGas",
                value: function(e) {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return this._checkProvider("estimateGas"),
                                    r.next = 3,
                                    (0,
                                    c.resolveProperties)(this.checkTransaction(e));
                                case 3:
                                    return t = r.sent,
                                    r.next = 6,
                                    this.provider.estimateGas(t);
                                case 6:
                                    return r.abrupt("return", r.sent);
                                case 7:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "call",
                value: function(e, r) {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return this._checkProvider("call"),
                                    t.next = 3,
                                    (0,
                                    c.resolveProperties)(this.checkTransaction(e));
                                case 3:
                                    return n = t.sent,
                                    t.next = 6,
                                    this.provider.call(n, r);
                                case 6:
                                    return t.abrupt("return", t.sent);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "sendTransaction",
                value: function(e) {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return this._checkProvider("sendTransaction"),
                                    r.next = 3,
                                    this.populateTransaction(e);
                                case 3:
                                    return t = r.sent,
                                    r.next = 6,
                                    this.signTransaction(t);
                                case 6:
                                    return n = r.sent,
                                    r.next = 9,
                                    this.provider.sendTransaction(n);
                                case 9:
                                    return r.abrupt("return", r.sent);
                                case 10:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getChainId",
                value: function() {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this._checkProvider("getChainId"),
                                    e.next = 3,
                                    this.provider.getNetwork();
                                case 3:
                                    return r = e.sent,
                                    e.abrupt("return", r.chainId);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "getGasPrice",
                value: function() {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this._checkProvider("getGasPrice"),
                                    e.next = 3,
                                    this.provider.getGasPrice();
                                case 3:
                                    return e.abrupt("return", e.sent);
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
                key: "getFeeData",
                value: function() {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this._checkProvider("getFeeData"),
                                    e.next = 3,
                                    this.provider.getFeeData();
                                case 3:
                                    return e.abrupt("return", e.sent);
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
                key: "resolveName",
                value: function(e) {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return this._checkProvider("resolveName"),
                                    r.next = 3,
                                    this.provider.resolveName(e);
                                case 3:
                                    return r.abrupt("return", r.sent);
                                case 4:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "checkTransaction",
                value: function(e) {
                    for (var r in e)
                        -1 === d.indexOf(r) && h.throwArgumentError("invalid transaction key: " + r, "transaction", e);
                    var t = (0,
                    c.shallowCopy)(e);
                    return null == t.from ? t.from = this.getAddress() : t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then((function(r) {
                        return r[0].toLowerCase() !== r[1].toLowerCase() && h.throwArgumentError("from address mismatch", "transaction", e),
                        r[0]
                    }
                    )),
                    t
                }
            }, {
                key: "populateTransaction",
                value: function(e) {
                    return f(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n, i, a, s = this;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    (0,
                                    c.resolveProperties)(this.checkTransaction(e));
                                case 2:
                                    if (null != (t = r.sent).to && (t.to = Promise.resolve(t.to).then((function(e) {
                                        return f(s, void 0, void 0, (0,
                                        o.Z)().mark((function r() {
                                            var t;
                                            return (0,
                                            o.Z)().wrap((function(r) {
                                                for (; ; )
                                                    switch (r.prev = r.next) {
                                                    case 0:
                                                        if (null != e) {
                                                            r.next = 2;
                                                            break
                                                        }
                                                        return r.abrupt("return", null);
                                                    case 2:
                                                        return r.next = 4,
                                                        this.resolveName(e);
                                                    case 4:
                                                        return null == (t = r.sent) && h.throwArgumentError("provided ENS name resolves to null", "tx.to", e),
                                                        r.abrupt("return", t);
                                                    case 7:
                                                    case "end":
                                                        return r.stop()
                                                    }
                                            }
                                            ), r, this)
                                        }
                                        )))
                                    }
                                    )),
                                    t.to.catch((function(e) {}
                                    ))),
                                    n = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas,
                                    null == t.gasPrice || 2 !== t.type && !n ? 0 !== t.type && 1 !== t.type || !n || h.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e) : h.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e),
                                    2 !== t.type && null != t.type || null == t.maxFeePerGas || null == t.maxPriorityFeePerGas) {
                                        r.next = 10;
                                        break
                                    }
                                    t.type = 2,
                                    r.next = 18;
                                    break;
                                case 10:
                                    if (0 !== t.type && 1 !== t.type) {
                                        r.next = 14;
                                        break
                                    }
                                    null == t.gasPrice && (t.gasPrice = this.getGasPrice()),
                                    r.next = 18;
                                    break;
                                case 14:
                                    return r.next = 16,
                                    this.getFeeData();
                                case 16:
                                    i = r.sent,
                                    null == t.type ? null != i.maxFeePerGas && null != i.maxPriorityFeePerGas ? (t.type = 2,
                                    null != t.gasPrice ? (a = t.gasPrice,
                                    delete t.gasPrice,
                                    t.maxFeePerGas = a,
                                    t.maxPriorityFeePerGas = a) : (null == t.maxFeePerGas && (t.maxFeePerGas = i.maxFeePerGas),
                                    null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = i.maxPriorityFeePerGas))) : null != i.gasPrice ? (n && h.throwError("network does not support EIP-1559", l.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "populateTransaction"
                                    }),
                                    null == t.gasPrice && (t.gasPrice = i.gasPrice),
                                    t.type = 0) : h.throwError("failed to get consistent fee data", l.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "signer.getFeeData"
                                    }) : 2 === t.type && (null == t.maxFeePerGas && (t.maxFeePerGas = i.maxFeePerGas),
                                    null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = i.maxPriorityFeePerGas));
                                case 18:
                                    return null == t.nonce && (t.nonce = this.getTransactionCount("pending")),
                                    null == t.gasLimit && (t.gasLimit = this.estimateGas(t).catch((function(e) {
                                        if (p.indexOf(e.code) >= 0)
                                            throw e;
                                        return h.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", l.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                                            error: e,
                                            tx: t
                                        })
                                    }
                                    ))),
                                    null == t.chainId ? t.chainId = this.getChainId() : t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then((function(r) {
                                        return 0 !== r[1] && r[0] !== r[1] && h.throwArgumentError("chainId address mismatch", "transaction", e),
                                        r[0]
                                    }
                                    )),
                                    r.next = 23,
                                    (0,
                                    c.resolveProperties)(t);
                                case 23:
                                    return r.abrupt("return", r.sent);
                                case 24:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "_checkProvider",
                value: function(e) {
                    this.provider || h.throwError("missing provider", l.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: e || "_checkProvider"
                    })
                }
            }], [{
                key: "isSigner",
                value: function(e) {
                    return !(!e || !e._isSigner)
                }
            }]),
            e
        }()
          , v = function(e) {
            (0,
            i.Z)(t, e);
            var r = (0,
            a.Z)(t);
            function t(e, i) {
                var a;
                return (0,
                s.Z)(this, t),
                a = r.call(this),
                (0,
                c.defineReadOnly)((0,
                n.Z)(a), "address", e),
                (0,
                c.defineReadOnly)((0,
                n.Z)(a), "provider", i || null),
                a
            }
            return (0,
            u.Z)(t, [{
                key: "getAddress",
                value: function() {
                    return Promise.resolve(this.address)
                }
            }, {
                key: "_fail",
                value: function(e, r) {
                    return Promise.resolve().then((function() {
                        h.throwError(e, l.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: r
                        })
                    }
                    ))
                }
            }, {
                key: "signMessage",
                value: function(e) {
                    return this._fail("VoidSigner cannot sign messages", "signMessage")
                }
            }, {
                key: "signTransaction",
                value: function(e) {
                    return this._fail("VoidSigner cannot sign transactions", "signTransaction")
                }
            }, {
                key: "_signTypedData",
                value: function(e, r, t) {
                    return this._fail("VoidSigner cannot sign typed data", "signTypedData")
                }
            }, {
                key: "connect",
                value: function(e) {
                    return new t(this.address,e)
                }
            }]),
            t
        }(g)
    },
    28552: function(e, r, t) {
        t.r(r),
        t.d(r, {
            getAddress: function() {
                return g
            },
            getContractAddress: function() {
                return y
            },
            getCreate2Address: function() {
                return b
            },
            getIcapAddress: function() {
                return m
            },
            isAddress: function() {
                return v
            }
        });
        var n = t(52009)
          , i = t(19560)
          , a = t(11291)
          , o = t(80807)
          , s = new (t(2735).Logger)("address/5.7.0");
        function u(e) {
            (0,
            n.isHexString)(e, 20) || s.throwArgumentError("invalid address", "address", e);
            for (var r = (e = e.toLowerCase()).substring(2).split(""), t = new Uint8Array(40), i = 0; i < 40; i++)
                t[i] = r[i].charCodeAt(0);
            for (var o = (0,
            n.arrayify)((0,
            a.keccak256)(t)), u = 0; u < 40; u += 2)
                o[u >> 1] >> 4 >= 8 && (r[u] = r[u].toUpperCase()),
                (15 & o[u >> 1]) >= 8 && (r[u + 1] = r[u + 1].toUpperCase());
            return "0x" + r.join("")
        }
        for (var c = {}, l = 0; l < 10; l++)
            c[String(l)] = String(l);
        for (var f = 0; f < 26; f++)
            c[String.fromCharCode(65 + f)] = String(10 + f);
        var h, d = Math.floor((h = 9007199254740991,
        Math.log10 ? Math.log10(h) : Math.log(h) / Math.LN10));
        function p(e) {
            for (var r = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map((function(e) {
                return c[e]
            }
            )).join(""); r.length >= d; ) {
                var t = r.substring(0, d);
                r = parseInt(t, 10) % 97 + r.substring(t.length)
            }
            for (var n = String(98 - parseInt(r, 10) % 97); n.length < 2; )
                n = "0" + n;
            return n
        }
        function g(e) {
            var r = null;
            if ("string" !== typeof e && s.throwArgumentError("invalid address", "address", e),
            e.match(/^(0x)?[0-9a-fA-F]{40}$/))
                "0x" !== e.substring(0, 2) && (e = "0x" + e),
                r = u(e),
                e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && r !== e && s.throwArgumentError("bad address checksum", "address", e);
            else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                for (e.substring(2, 4) !== p(e) && s.throwArgumentError("bad icap checksum", "address", e),
                r = (0,
                i.g$)(e.substring(4)); r.length < 40; )
                    r = "0" + r;
                r = u("0x" + r)
            } else
                s.throwArgumentError("invalid address", "address", e);
            return r
        }
        function v(e) {
            try {
                return g(e),
                !0
            } catch (r) {}
            return !1
        }
        function m(e) {
            for (var r = (0,
            i.t2)(g(e).substring(2)).toUpperCase(); r.length < 30; )
                r = "0" + r;
            return "XE" + p("XE00" + r) + r
        }
        function y(e) {
            var r = null;
            try {
                r = g(e.from)
            } catch (u) {
                s.throwArgumentError("missing from address", "transaction", e)
            }
            var t = (0,
            n.stripZeros)((0,
            n.arrayify)(i.O$.from(e.nonce).toHexString()));
            return g((0,
            n.hexDataSlice)((0,
            a.keccak256)((0,
            o.encode)([r, t])), 12))
        }
        function b(e, r, t) {
            return 32 !== (0,
            n.hexDataLength)(r) && s.throwArgumentError("salt must be 32 bytes", "salt", r),
            32 !== (0,
            n.hexDataLength)(t) && s.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", t),
            g((0,
            n.hexDataSlice)((0,
            a.keccak256)((0,
            n.concat)(["0xff", g(e), r, t])), 12))
        }
    },
    48853: function(e, r, t) {
        t.d(r, {
            J: function() {
                return i
            },
            c: function() {
                return a
            }
        });
        var n = t(52009);
        function i(e) {
            e = atob(e);
            for (var r = [], t = 0; t < e.length; t++)
                r.push(e.charCodeAt(t));
            return (0,
            n.arrayify)(r)
        }
        function a(e) {
            e = (0,
            n.arrayify)(e);
            for (var r = "", t = 0; t < e.length; t++)
                r += String.fromCharCode(e[t]);
            return btoa(r)
        }
    },
    29515: function(e, r, t) {
        t.r(r),
        t.d(r, {
            decode: function() {
                return n.J
            },
            encode: function() {
                return n.c
            }
        });
        var n = t(48853)
    },
    44247: function(e, r, t) {
        t.r(r),
        t.d(r, {
            Base32: function() {
                return u
            },
            Base58: function() {
                return c
            },
            BaseX: function() {
                return s
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(52009)
          , o = t(54812)
          , s = function() {
            function e(r) {
                (0,
                n.Z)(this, e),
                (0,
                o.defineReadOnly)(this, "alphabet", r),
                (0,
                o.defineReadOnly)(this, "base", r.length),
                (0,
                o.defineReadOnly)(this, "_alphabetMap", {}),
                (0,
                o.defineReadOnly)(this, "_leader", r.charAt(0));
                for (var t = 0; t < r.length; t++)
                    this._alphabetMap[r.charAt(t)] = t
            }
            return (0,
            i.Z)(e, [{
                key: "encode",
                value: function(e) {
                    var r = (0,
                    a.arrayify)(e);
                    if (0 === r.length)
                        return "";
                    for (var t = [0], n = 0; n < r.length; ++n) {
                        for (var i = r[n], o = 0; o < t.length; ++o)
                            i += t[o] << 8,
                            t[o] = i % this.base,
                            i = i / this.base | 0;
                        for (; i > 0; )
                            t.push(i % this.base),
                            i = i / this.base | 0
                    }
                    for (var s = "", u = 0; 0 === r[u] && u < r.length - 1; ++u)
                        s += this._leader;
                    for (var c = t.length - 1; c >= 0; --c)
                        s += this.alphabet[t[c]];
                    return s
                }
            }, {
                key: "decode",
                value: function(e) {
                    if ("string" !== typeof e)
                        throw new TypeError("Expected String");
                    var r = [];
                    if (0 === e.length)
                        return new Uint8Array(r);
                    r.push(0);
                    for (var t = 0; t < e.length; t++) {
                        var n = this._alphabetMap[e[t]];
                        if (void 0 === n)
                            throw new Error("Non-base" + this.base + " character");
                        for (var i = n, o = 0; o < r.length; ++o)
                            i += r[o] * this.base,
                            r[o] = 255 & i,
                            i >>= 8;
                        for (; i > 0; )
                            r.push(255 & i),
                            i >>= 8
                    }
                    for (var s = 0; e[s] === this._leader && s < e.length - 1; ++s)
                        r.push(0);
                    return (0,
                    a.arrayify)(new Uint8Array(r.reverse()))
                }
            }]),
            e
        }()
          , u = new s("abcdefghijklmnopqrstuvwxyz234567")
          , c = new s("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    },
    44227: function(e, r, t) {
        t.d(r, {
            i: function() {
                return n
            }
        });
        var n = "bignumber/5.7.0"
    },
    19560: function(e, r, t) {
        t.d(r, {
            O$: function() {
                return v
            },
            Zm: function() {
                return p
            },
            g$: function() {
                return k
            },
            t2: function() {
                return A
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(64166)
          , o = t.n(a)
          , s = t(52009)
          , u = t(2735)
          , c = t(44227)
          , l = o().BN
          , f = new u.Logger(c.i)
          , h = {}
          , d = 9007199254740991;
        function p(e) {
            return null != e && (v.isBigNumber(e) || "number" === typeof e && e % 1 === 0 || "string" === typeof e && !!e.match(/^-?[0-9]+$/) || (0,
            s.isHexString)(e) || "bigint" === typeof e || (0,
            s.isBytes)(e))
        }
        var g = !1
          , v = function() {
            function e(r, t) {
                (0,
                n.Z)(this, e),
                r !== h && f.throwError("cannot call constructor directly; use BigNumber.from", u.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new (BigNumber)"
                }),
                this._hex = t,
                this._isBigNumber = !0,
                Object.freeze(this)
            }
            return (0,
            i.Z)(e, [{
                key: "fromTwos",
                value: function(e) {
                    return y(b(this).fromTwos(e))
                }
            }, {
                key: "toTwos",
                value: function(e) {
                    return y(b(this).toTwos(e))
                }
            }, {
                key: "abs",
                value: function() {
                    return "-" === this._hex[0] ? e.from(this._hex.substring(1)) : this
                }
            }, {
                key: "add",
                value: function(e) {
                    return y(b(this).add(b(e)))
                }
            }, {
                key: "sub",
                value: function(e) {
                    return y(b(this).sub(b(e)))
                }
            }, {
                key: "div",
                value: function(r) {
                    return e.from(r).isZero() && w("division-by-zero", "div"),
                    y(b(this).div(b(r)))
                }
            }, {
                key: "mul",
                value: function(e) {
                    return y(b(this).mul(b(e)))
                }
            }, {
                key: "mod",
                value: function(e) {
                    var r = b(e);
                    return r.isNeg() && w("division-by-zero", "mod"),
                    y(b(this).umod(r))
                }
            }, {
                key: "pow",
                value: function(e) {
                    var r = b(e);
                    return r.isNeg() && w("negative-power", "pow"),
                    y(b(this).pow(r))
                }
            }, {
                key: "and",
                value: function(e) {
                    var r = b(e);
                    return (this.isNegative() || r.isNeg()) && w("unbound-bitwise-result", "and"),
                    y(b(this).and(r))
                }
            }, {
                key: "or",
                value: function(e) {
                    var r = b(e);
                    return (this.isNegative() || r.isNeg()) && w("unbound-bitwise-result", "or"),
                    y(b(this).or(r))
                }
            }, {
                key: "xor",
                value: function(e) {
                    var r = b(e);
                    return (this.isNegative() || r.isNeg()) && w("unbound-bitwise-result", "xor"),
                    y(b(this).xor(r))
                }
            }, {
                key: "mask",
                value: function(e) {
                    return (this.isNegative() || e < 0) && w("negative-width", "mask"),
                    y(b(this).maskn(e))
                }
            }, {
                key: "shl",
                value: function(e) {
                    return (this.isNegative() || e < 0) && w("negative-width", "shl"),
                    y(b(this).shln(e))
                }
            }, {
                key: "shr",
                value: function(e) {
                    return (this.isNegative() || e < 0) && w("negative-width", "shr"),
                    y(b(this).shrn(e))
                }
            }, {
                key: "eq",
                value: function(e) {
                    return b(this).eq(b(e))
                }
            }, {
                key: "lt",
                value: function(e) {
                    return b(this).lt(b(e))
                }
            }, {
                key: "lte",
                value: function(e) {
                    return b(this).lte(b(e))
                }
            }, {
                key: "gt",
                value: function(e) {
                    return b(this).gt(b(e))
                }
            }, {
                key: "gte",
                value: function(e) {
                    return b(this).gte(b(e))
                }
            }, {
                key: "isNegative",
                value: function() {
                    return "-" === this._hex[0]
                }
            }, {
                key: "isZero",
                value: function() {
                    return b(this).isZero()
                }
            }, {
                key: "toNumber",
                value: function() {
                    try {
                        return b(this).toNumber()
                    } catch (e) {
                        w("overflow", "toNumber", this.toString())
                    }
                    return null
                }
            }, {
                key: "toBigInt",
                value: function() {
                    try {
                        return BigInt(this.toString())
                    } catch (e) {}
                    return f.throwError("this platform does not support BigInt", u.Logger.errors.UNSUPPORTED_OPERATION, {
                        value: this.toString()
                    })
                }
            }, {
                key: "toString",
                value: function() {
                    return arguments.length > 0 && (10 === arguments[0] ? g || (g = !0,
                    f.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? f.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", u.Logger.errors.UNEXPECTED_ARGUMENT, {}) : f.throwError("BigNumber.toString does not accept parameters", u.Logger.errors.UNEXPECTED_ARGUMENT, {})),
                    b(this).toString(10)
                }
            }, {
                key: "toHexString",
                value: function() {
                    return this._hex
                }
            }, {
                key: "toJSON",
                value: function(e) {
                    return {
                        type: "BigNumber",
                        hex: this.toHexString()
                    }
                }
            }], [{
                key: "from",
                value: function(r) {
                    if (r instanceof e)
                        return r;
                    if ("string" === typeof r)
                        return r.match(/^-?0x[0-9a-f]+$/i) ? new e(h,m(r)) : r.match(/^-?[0-9]+$/) ? new e(h,m(new l(r))) : f.throwArgumentError("invalid BigNumber string", "value", r);
                    if ("number" === typeof r)
                        return r % 1 && w("underflow", "BigNumber.from", r),
                        (r >= d || r <= -d) && w("overflow", "BigNumber.from", r),
                        e.from(String(r));
                    var t = r;
                    if ("bigint" === typeof t)
                        return e.from(t.toString());
                    if ((0,
                    s.isBytes)(t))
                        return e.from((0,
                        s.hexlify)(t));
                    if (t)
                        if (t.toHexString) {
                            var n = t.toHexString();
                            if ("string" === typeof n)
                                return e.from(n)
                        } else {
                            var i = t._hex;
                            if (null == i && "BigNumber" === t.type && (i = t.hex),
                            "string" === typeof i && ((0,
                            s.isHexString)(i) || "-" === i[0] && (0,
                            s.isHexString)(i.substring(1))))
                                return e.from(i)
                        }
                    return f.throwArgumentError("invalid BigNumber value", "value", r)
                }
            }, {
                key: "isBigNumber",
                value: function(e) {
                    return !(!e || !e._isBigNumber)
                }
            }]),
            e
        }();
        function m(e) {
            if ("string" !== typeof e)
                return m(e.toString(16));
            if ("-" === e[0])
                return "-" === (e = e.substring(1))[0] && f.throwArgumentError("invalid hex", "value", e),
                "0x00" === (e = m(e)) ? e : "-" + e;
            if ("0x" !== e.substring(0, 2) && (e = "0x" + e),
            "0x" === e)
                return "0x00";
            for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4); )
                e = "0x" + e.substring(4);
            return e
        }
        function y(e) {
            return v.from(m(e))
        }
        function b(e) {
            var r = v.from(e).toHexString();
            return "-" === r[0] ? new l("-" + r.substring(3),16) : new l(r.substring(2),16)
        }
        function w(e, r, t) {
            var n = {
                fault: e,
                operation: r
            };
            return null != t && (n.value = t),
            f.throwError(e, u.Logger.errors.NUMERIC_FAULT, n)
        }
        function k(e) {
            return new l(e,36).toString(16)
        }
        function A(e) {
            return new l(e,16).toString(36)
        }
    },
    57042: function(e, r, t) {
        t.d(r, {
            Ox: function() {
                return m
            },
            S5: function() {
                return v
            },
            xs: function() {
                return b
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(52009)
          , o = t(2735)
          , s = t(44227)
          , u = t(19560)
          , c = new o.Logger(s.i)
          , l = {}
          , f = u.O$.from(0)
          , h = u.O$.from(-1);
        function d(e, r, t, n) {
            var i = {
                fault: r,
                operation: t
            };
            return void 0 !== n && (i.value = n),
            c.throwError(e, o.Logger.errors.NUMERIC_FAULT, i)
        }
        for (var p = "0"; p.length < 256; )
            p += p;
        function g(e) {
            if ("number" !== typeof e)
                try {
                    e = u.O$.from(e).toNumber()
                } catch (r) {}
            return "number" === typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + p.substring(0, e) : c.throwArgumentError("invalid decimal size", "decimals", e)
        }
        function v(e, r) {
            null == r && (r = 0);
            var t = g(r)
              , n = (e = u.O$.from(e)).lt(f);
            n && (e = e.mul(h));
            for (var i = e.mod(t).toString(); i.length < t.length - 1; )
                i = "0" + i;
            i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
            var a = e.div(t).toString();
            return e = 1 === t.length ? a : a + "." + i,
            n && (e = "-" + e),
            e
        }
        function m(e, r) {
            null == r && (r = 0);
            var t = g(r);
            "string" === typeof e && e.match(/^-?[0-9.]+$/) || c.throwArgumentError("invalid decimal value", "value", e);
            var n = "-" === e.substring(0, 1);
            n && (e = e.substring(1)),
            "." === e && c.throwArgumentError("missing value", "value", e);
            var i = e.split(".");
            i.length > 2 && c.throwArgumentError("too many decimal points", "value", e);
            var a = i[0]
              , o = i[1];
            for (a || (a = "0"),
            o || (o = "0"); "0" === o[o.length - 1]; )
                o = o.substring(0, o.length - 1);
            for (o.length > t.length - 1 && d("fractional component exceeds decimals", "underflow", "parseFixed"),
            "" === o && (o = "0"); o.length < t.length - 1; )
                o += "0";
            var s = u.O$.from(a)
              , l = u.O$.from(o)
              , f = s.mul(t).add(l);
            return n && (f = f.mul(h)),
            f
        }
        var y = function() {
            function e(r, t, i, a) {
                (0,
                n.Z)(this, e),
                r !== l && c.throwError("cannot use FixedFormat constructor; use FixedFormat.from", o.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new FixedFormat"
                }),
                this.signed = t,
                this.width = i,
                this.decimals = a,
                this.name = (t ? "" : "u") + "fixed" + String(i) + "x" + String(a),
                this._multiplier = g(a),
                Object.freeze(this)
            }
            return (0,
            i.Z)(e, null, [{
                key: "from",
                value: function(r) {
                    if (r instanceof e)
                        return r;
                    "number" === typeof r && (r = "fixed128x".concat(r));
                    var t = !0
                      , n = 128
                      , i = 18;
                    if ("string" === typeof r)
                        if ("fixed" === r)
                            ;
                        else if ("ufixed" === r)
                            t = !1;
                        else {
                            var a = r.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                            a || c.throwArgumentError("invalid fixed format", "format", r),
                            t = "u" !== a[1],
                            n = parseInt(a[2]),
                            i = parseInt(a[3])
                        }
                    else if (r) {
                        var o = function(e, t, n) {
                            return null == r[e] ? n : (typeof r[e] !== t && c.throwArgumentError("invalid fixed format (" + e + " not " + t + ")", "format." + e, r[e]),
                            r[e])
                        };
                        t = o("signed", "boolean", t),
                        n = o("width", "number", n),
                        i = o("decimals", "number", i)
                    }
                    return n % 8 && c.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", n),
                    i > 80 && c.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", i),
                    new e(l,t,n,i)
                }
            }]),
            e
        }()
          , b = function() {
            function e(r, t, i, a) {
                (0,
                n.Z)(this, e),
                r !== l && c.throwError("cannot use FixedNumber constructor; use FixedNumber.from", o.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new FixedFormat"
                }),
                this.format = a,
                this._hex = t,
                this._value = i,
                this._isFixedNumber = !0,
                Object.freeze(this)
            }
            return (0,
            i.Z)(e, [{
                key: "_checkFormat",
                value: function(e) {
                    this.format.name !== e.format.name && c.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e)
                }
            }, {
                key: "addUnsafe",
                value: function(r) {
                    this._checkFormat(r);
                    var t = m(this._value, this.format.decimals)
                      , n = m(r._value, r.format.decimals);
                    return e.fromValue(t.add(n), this.format.decimals, this.format)
                }
            }, {
                key: "subUnsafe",
                value: function(r) {
                    this._checkFormat(r);
                    var t = m(this._value, this.format.decimals)
                      , n = m(r._value, r.format.decimals);
                    return e.fromValue(t.sub(n), this.format.decimals, this.format)
                }
            }, {
                key: "mulUnsafe",
                value: function(r) {
                    this._checkFormat(r);
                    var t = m(this._value, this.format.decimals)
                      , n = m(r._value, r.format.decimals);
                    return e.fromValue(t.mul(n).div(this.format._multiplier), this.format.decimals, this.format)
                }
            }, {
                key: "divUnsafe",
                value: function(r) {
                    this._checkFormat(r);
                    var t = m(this._value, this.format.decimals)
                      , n = m(r._value, r.format.decimals);
                    return e.fromValue(t.mul(this.format._multiplier).div(n), this.format.decimals, this.format)
                }
            }, {
                key: "floor",
                value: function() {
                    var r = this.toString().split(".");
                    1 === r.length && r.push("0");
                    var t = e.from(r[0], this.format)
                      , n = !r[1].match(/^(0*)$/);
                    return this.isNegative() && n && (t = t.subUnsafe(w.toFormat(t.format))),
                    t
                }
            }, {
                key: "ceiling",
                value: function() {
                    var r = this.toString().split(".");
                    1 === r.length && r.push("0");
                    var t = e.from(r[0], this.format)
                      , n = !r[1].match(/^(0*)$/);
                    return !this.isNegative() && n && (t = t.addUnsafe(w.toFormat(t.format))),
                    t
                }
            }, {
                key: "round",
                value: function(r) {
                    null == r && (r = 0);
                    var t = this.toString().split(".");
                    if (1 === t.length && t.push("0"),
                    (r < 0 || r > 80 || r % 1) && c.throwArgumentError("invalid decimal count", "decimals", r),
                    t[1].length <= r)
                        return this;
                    var n = e.from("1" + p.substring(0, r), this.format)
                      , i = k.toFormat(this.format);
                    return this.mulUnsafe(n).addUnsafe(i).floor().divUnsafe(n)
                }
            }, {
                key: "isZero",
                value: function() {
                    return "0.0" === this._value || "0" === this._value
                }
            }, {
                key: "isNegative",
                value: function() {
                    return "-" === this._value[0]
                }
            }, {
                key: "toString",
                value: function() {
                    return this._value
                }
            }, {
                key: "toHexString",
                value: function(e) {
                    if (null == e)
                        return this._hex;
                    e % 8 && c.throwArgumentError("invalid byte width", "width", e);
                    var r = u.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
                    return (0,
                    a.hexZeroPad)(r, e / 8)
                }
            }, {
                key: "toUnsafeFloat",
                value: function() {
                    return parseFloat(this.toString())
                }
            }, {
                key: "toFormat",
                value: function(r) {
                    return e.fromString(this._value, r)
                }
            }], [{
                key: "fromValue",
                value: function(r, t, n) {
                    return null != n || null == t || (0,
                    u.Zm)(t) || (n = t,
                    t = null),
                    null == t && (t = 0),
                    null == n && (n = "fixed"),
                    e.fromString(v(r, t), y.from(n))
                }
            }, {
                key: "fromString",
                value: function(r, t) {
                    null == t && (t = "fixed");
                    var n = y.from(t)
                      , i = m(r, n.decimals);
                    !n.signed && i.lt(f) && d("unsigned value cannot be negative", "overflow", "value", r);
                    var o = null;
                    n.signed ? o = i.toTwos(n.width).toHexString() : (o = i.toHexString(),
                    o = (0,
                    a.hexZeroPad)(o, n.width / 8));
                    var s = v(i, n.decimals);
                    return new e(l,o,s,n)
                }
            }, {
                key: "fromBytes",
                value: function(r, t) {
                    null == t && (t = "fixed");
                    var n = y.from(t);
                    if ((0,
                    a.arrayify)(r).length > n.width / 8)
                        throw new Error("overflow");
                    var i = u.O$.from(r);
                    n.signed && (i = i.fromTwos(n.width));
                    var o = i.toTwos((n.signed ? 0 : 1) + n.width).toHexString()
                      , s = v(i, n.decimals);
                    return new e(l,o,s,n)
                }
            }, {
                key: "from",
                value: function(r, t) {
                    if ("string" === typeof r)
                        return e.fromString(r, t);
                    if ((0,
                    a.isBytes)(r))
                        return e.fromBytes(r, t);
                    try {
                        return e.fromValue(r, 0, t)
                    } catch (n) {
                        if (n.code !== o.Logger.errors.INVALID_ARGUMENT)
                            throw n
                    }
                    return c.throwArgumentError("invalid FixedNumber value", "value", r)
                }
            }, {
                key: "isFixedNumber",
                value: function(e) {
                    return !(!e || !e._isFixedNumber)
                }
            }]),
            e
        }()
          , w = b.from(1)
          , k = b.from("0.5")
    },
    52009: function(e, r, t) {
        t.r(r),
        t.d(r, {
            arrayify: function() {
                return c
            },
            concat: function() {
                return l
            },
            hexConcat: function() {
                return y
            },
            hexDataLength: function() {
                return v
            },
            hexDataSlice: function() {
                return m
            },
            hexStripZeros: function() {
                return w
            },
            hexValue: function() {
                return b
            },
            hexZeroPad: function() {
                return k
            },
            hexlify: function() {
                return g
            },
            isBytes: function() {
                return u
            },
            isBytesLike: function() {
                return o
            },
            isHexString: function() {
                return d
            },
            joinSignature: function() {
                return E
            },
            splitSignature: function() {
                return A
            },
            stripZeros: function() {
                return f
            },
            zeroPad: function() {
                return h
            }
        });
        var n = new (t(2735).Logger)("bytes/5.7.0");
        function i(e) {
            return !!e.toHexString
        }
        function a(e) {
            return e.slice || (e.slice = function() {
                var r = Array.prototype.slice.call(arguments);
                return a(new Uint8Array(Array.prototype.slice.apply(e, r)))
            }
            ),
            e
        }
        function o(e) {
            return d(e) && !(e.length % 2) || u(e)
        }
        function s(e) {
            return "number" === typeof e && e == e && e % 1 === 0
        }
        function u(e) {
            if (null == e)
                return !1;
            if (e.constructor === Uint8Array)
                return !0;
            if ("string" === typeof e)
                return !1;
            if (!s(e.length) || e.length < 0)
                return !1;
            for (var r = 0; r < e.length; r++) {
                var t = e[r];
                if (!s(t) || t < 0 || t >= 256)
                    return !1
            }
            return !0
        }
        function c(e, r) {
            if (r || (r = {}),
            "number" === typeof e) {
                n.checkSafeUint53(e, "invalid arrayify value");
                for (var t = []; e; )
                    t.unshift(255 & e),
                    e = parseInt(String(e / 256));
                return 0 === t.length && t.push(0),
                a(new Uint8Array(t))
            }
            if (r.allowMissingPrefix && "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e),
            i(e) && (e = e.toHexString()),
            d(e)) {
                var o = e.substring(2);
                o.length % 2 && ("left" === r.hexPad ? o = "0" + o : "right" === r.hexPad ? o += "0" : n.throwArgumentError("hex data is odd-length", "value", e));
                for (var s = [], c = 0; c < o.length; c += 2)
                    s.push(parseInt(o.substring(c, c + 2), 16));
                return a(new Uint8Array(s))
            }
            return u(e) ? a(new Uint8Array(e)) : n.throwArgumentError("invalid arrayify value", "value", e)
        }
        function l(e) {
            var r = e.map((function(e) {
                return c(e)
            }
            ))
              , t = r.reduce((function(e, r) {
                return e + r.length
            }
            ), 0)
              , n = new Uint8Array(t);
            return r.reduce((function(e, r) {
                return n.set(r, e),
                e + r.length
            }
            ), 0),
            a(n)
        }
        function f(e) {
            var r = c(e);
            if (0 === r.length)
                return r;
            for (var t = 0; t < r.length && 0 === r[t]; )
                t++;
            return t && (r = r.slice(t)),
            r
        }
        function h(e, r) {
            (e = c(e)).length > r && n.throwArgumentError("value out of range", "value", arguments[0]);
            var t = new Uint8Array(r);
            return t.set(e, r - e.length),
            a(t)
        }
        function d(e, r) {
            return !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!r || e.length === 2 + 2 * r)
        }
        var p = "0123456789abcdef";
        function g(e, r) {
            if (r || (r = {}),
            "number" === typeof e) {
                n.checkSafeUint53(e, "invalid hexlify value");
                for (var t = ""; e; )
                    t = p[15 & e] + t,
                    e = Math.floor(e / 16);
                return t.length ? (t.length % 2 && (t = "0" + t),
                "0x" + t) : "0x00"
            }
            if ("bigint" === typeof e)
                return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
            if (r.allowMissingPrefix && "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e),
            i(e))
                return e.toHexString();
            if (d(e))
                return e.length % 2 && ("left" === r.hexPad ? e = "0x0" + e.substring(2) : "right" === r.hexPad ? e += "0" : n.throwArgumentError("hex data is odd-length", "value", e)),
                e.toLowerCase();
            if (u(e)) {
                for (var a = "0x", o = 0; o < e.length; o++) {
                    var s = e[o];
                    a += p[(240 & s) >> 4] + p[15 & s]
                }
                return a
            }
            return n.throwArgumentError("invalid hexlify value", "value", e)
        }
        function v(e) {
            if ("string" !== typeof e)
                e = g(e);
            else if (!d(e) || e.length % 2)
                return null;
            return (e.length - 2) / 2
        }
        function m(e, r, t) {
            return "string" !== typeof e ? e = g(e) : (!d(e) || e.length % 2) && n.throwArgumentError("invalid hexData", "value", e),
            r = 2 + 2 * r,
            null != t ? "0x" + e.substring(r, 2 + 2 * t) : "0x" + e.substring(r)
        }
        function y(e) {
            var r = "0x";
            return e.forEach((function(e) {
                r += g(e).substring(2)
            }
            )),
            r
        }
        function b(e) {
            var r = w(g(e, {
                hexPad: "left"
            }));
            return "0x" === r ? "0x0" : r
        }
        function w(e) {
            "string" !== typeof e && (e = g(e)),
            d(e) || n.throwArgumentError("invalid hex string", "value", e),
            e = e.substring(2);
            for (var r = 0; r < e.length && "0" === e[r]; )
                r++;
            return "0x" + e.substring(r)
        }
        function k(e, r) {
            for ("string" !== typeof e ? e = g(e) : d(e) || n.throwArgumentError("invalid hex string", "value", e),
            e.length > 2 * r + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * r + 2; )
                e = "0x0" + e.substring(2);
            return e
        }
        function A(e) {
            var r = {
                r: "0x",
                s: "0x",
                _vs: "0x",
                recoveryParam: 0,
                v: 0,
                yParityAndS: "0x",
                compact: "0x"
            };
            if (o(e)) {
                var t = c(e);
                64 === t.length ? (r.v = 27 + (t[32] >> 7),
                t[32] &= 127,
                r.r = g(t.slice(0, 32)),
                r.s = g(t.slice(32, 64))) : 65 === t.length ? (r.r = g(t.slice(0, 32)),
                r.s = g(t.slice(32, 64)),
                r.v = t[64]) : n.throwArgumentError("invalid signature string", "signature", e),
                r.v < 27 && (0 === r.v || 1 === r.v ? r.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", e)),
                r.recoveryParam = 1 - r.v % 2,
                r.recoveryParam && (t[32] |= 128),
                r._vs = g(t.slice(32, 64))
            } else {
                if (r.r = e.r,
                r.s = e.s,
                r.v = e.v,
                r.recoveryParam = e.recoveryParam,
                r._vs = e._vs,
                null != r._vs) {
                    var i = h(c(r._vs), 32);
                    r._vs = g(i);
                    var a = i[0] >= 128 ? 1 : 0;
                    null == r.recoveryParam ? r.recoveryParam = a : r.recoveryParam !== a && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e),
                    i[0] &= 127;
                    var s = g(i);
                    null == r.s ? r.s = s : r.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", e)
                }
                if (null == r.recoveryParam)
                    null == r.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === r.v || 1 === r.v ? r.recoveryParam = r.v : r.recoveryParam = 1 - r.v % 2;
                else if (null == r.v)
                    r.v = 27 + r.recoveryParam;
                else {
                    var u = 0 === r.v || 1 === r.v ? r.v : 1 - r.v % 2;
                    r.recoveryParam !== u && n.throwArgumentError("signature recoveryParam mismatch v", "signature", e)
                }
                null != r.r && d(r.r) ? r.r = k(r.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", e),
                null != r.s && d(r.s) ? r.s = k(r.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", e);
                var l = c(r.s);
                l[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", e),
                r.recoveryParam && (l[0] |= 128);
                var f = g(l);
                r._vs && (d(r._vs) || n.throwArgumentError("signature invalid _vs", "signature", e),
                r._vs = k(r._vs, 32)),
                null == r._vs ? r._vs = f : r._vs !== f && n.throwArgumentError("signature _vs mismatch v and s", "signature", e)
            }
            return r.yParityAndS = r._vs,
            r.compact = r.r + r.yParityAndS.substring(2),
            r
        }
        function E(e) {
            return g(l([(e = A(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
        }
    },
    81895: function(e, r, t) {
        t.d(r, {
            d: function() {
                return n
            }
        });
        var n = "0x0000000000000000000000000000000000000000"
    },
    6321: function(e, r, t) {
        t.d(r, {
            $B: function() {
                return l
            },
            Bz: function() {
                return c
            },
            Ce: function() {
                return u
            },
            PS: function() {
                return f
            },
            Py: function() {
                return s
            },
            _Y: function() {
                return a
            },
            fh: function() {
                return o
            },
            tL: function() {
                return i
            }
        });
        var n = t(19560)
          , i = n.O$.from(-1)
          , a = n.O$.from(0)
          , o = n.O$.from(1)
          , s = n.O$.from(2)
          , u = n.O$.from("1000000000000000000")
          , c = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
          , l = n.O$.from("-0x8000000000000000000000000000000000000000000000000000000000000000")
          , f = n.O$.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    },
    44160: function(e, r, t) {
        t.d(r, {
            R: function() {
                return n
            }
        });
        var n = "0x0000000000000000000000000000000000000000000000000000000000000000"
    },
    28893: function(e, r, t) {
        t.r(r),
        t.d(r, {
            AddressZero: function() {
                return n.d
            },
            EtherSymbol: function() {
                return o
            },
            HashZero: function() {
                return a.R
            },
            MaxInt256: function() {
                return i.PS
            },
            MaxUint256: function() {
                return i.Bz
            },
            MinInt256: function() {
                return i.$B
            },
            NegativeOne: function() {
                return i.tL
            },
            One: function() {
                return i.fh
            },
            Two: function() {
                return i.Py
            },
            WeiPerEther: function() {
                return i.Ce
            },
            Zero: function() {
                return i._Y
            }
        });
        var n = t(81895)
          , i = t(6321)
          , a = t(44160)
          , o = "\u039e"
    },
    39707: function(e, r, t) {
        t.d(r, {
            VZ: function() {
                return Z
            },
            CH: function() {
                return F
            },
            lV: function() {
                return D
            }
        });
        var n = t(93433)
          , i = t(97326)
          , a = t(11752)
          , o = t(61120)
          , s = t(60136)
          , u = t(29388)
          , c = t(15671)
          , l = t(43144)
          , f = t(74165)
          , h = t(62)
          , d = t(99456)
          , p = t(15157)
          , g = t(72388)
          , v = t(28552)
          , m = t(19560)
          , y = t(52009)
          , b = t(54812)
          , w = t(65958)
          , k = t(2735)
          , A = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , E = new k.Logger("contracts/5.7.0")
          , x = {
            chainId: !0,
            data: !0,
            from: !0,
            gasLimit: !0,
            gasPrice: !0,
            nonce: !0,
            to: !0,
            value: !0,
            type: !0,
            accessList: !0,
            maxFeePerGas: !0,
            maxPriorityFeePerGas: !0,
            customData: !0,
            ccipReadEnabled: !0
        };
        function S(e, r) {
            return A(this, void 0, void 0, (0,
            f.Z)().mark((function t() {
                var n, i;
                return (0,
                f.Z)().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            r;
                        case 2:
                            return "string" !== typeof (n = t.sent) && E.throwArgumentError("invalid address or ENS name", "name", n),
                            t.prev = 4,
                            t.abrupt("return", (0,
                            v.getAddress)(n));
                        case 8:
                            t.prev = 8,
                            t.t0 = t.catch(4);
                        case 10:
                            return e || E.throwError("a provider or signer is needed to resolve ENS names", k.Logger.errors.UNSUPPORTED_OPERATION, {
                                operation: "resolveName"
                            }),
                            t.next = 13,
                            e.resolveName(n);
                        case 13:
                            return null == (i = t.sent) && E.throwArgumentError("resolver or addr is not configured for ENS name", "name", n),
                            t.abrupt("return", i);
                        case 16:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[4, 8]])
            }
            )))
        }
        function P(e, r, t) {
            return A(this, void 0, void 0, (0,
            f.Z)().mark((function n() {
                return (0,
                f.Z)().wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (!Array.isArray(t)) {
                                n.next = 4;
                                break
                            }
                            return n.next = 3,
                            Promise.all(t.map((function(t, n) {
                                return P(e, Array.isArray(r) ? r[n] : r[t.name], t)
                            }
                            )));
                        case 3:
                        case 7:
                        case 11:
                        case 17:
                            return n.abrupt("return", n.sent);
                        case 4:
                            if ("address" !== t.type) {
                                n.next = 8;
                                break
                            }
                            return n.next = 7,
                            S(e, r);
                        case 8:
                            if ("tuple" !== t.type) {
                                n.next = 12;
                                break
                            }
                            return n.next = 11,
                            P(e, r, t.components);
                        case 12:
                            if ("array" !== t.baseType) {
                                n.next = 18;
                                break
                            }
                            if (Array.isArray(r)) {
                                n.next = 15;
                                break
                            }
                            return n.abrupt("return", Promise.reject(E.makeError("invalid value for array", k.Logger.errors.INVALID_ARGUMENT, {
                                argument: "value",
                                value: r
                            })));
                        case 15:
                            return n.next = 17,
                            Promise.all(r.map((function(r) {
                                return P(e, r, t.arrayChildren)
                            }
                            )));
                        case 18:
                            return n.abrupt("return", r);
                        case 19:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))
        }
        function N(e, r, t) {
            return A(this, void 0, void 0, (0,
            f.Z)().mark((function n() {
                var i, a, o, s, u, c, l, h, d, p, g = this;
                return (0,
                f.Z)().wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return i = {},
                            t.length === r.inputs.length + 1 && "object" === typeof t[t.length - 1] && (i = (0,
                            b.shallowCopy)(t.pop())),
                            E.checkArgumentCount(t.length, r.inputs.length, "passed to contract"),
                            e.signer ? i.from ? i.from = (0,
                            b.resolveProperties)({
                                override: S(e.signer, i.from),
                                signer: e.signer.getAddress()
                            }).then((function(e) {
                                return A(g, void 0, void 0, (0,
                                f.Z)().mark((function r() {
                                    return (0,
                                    f.Z)().wrap((function(r) {
                                        for (; ; )
                                            switch (r.prev = r.next) {
                                            case 0:
                                                return (0,
                                                v.getAddress)(e.signer) !== e.override && E.throwError("Contract with a Signer cannot override from", k.Logger.errors.UNSUPPORTED_OPERATION, {
                                                    operation: "overrides.from"
                                                }),
                                                r.abrupt("return", e.override);
                                            case 2:
                                            case "end":
                                                return r.stop()
                                            }
                                    }
                                    ), r)
                                }
                                )))
                            }
                            )) : i.from = e.signer.getAddress() : i.from && (i.from = S(e.provider, i.from)),
                            n.next = 6,
                            (0,
                            b.resolveProperties)({
                                args: P(e.signer || e.provider, t, r.inputs),
                                address: e.resolvedAddress,
                                overrides: (0,
                                b.resolveProperties)(i) || {}
                            });
                        case 6:
                            if (a = n.sent,
                            o = e.interface.encodeFunctionData(r, a.args),
                            s = {
                                data: o,
                                to: a.address
                            },
                            null != (u = a.overrides).nonce && (s.nonce = m.O$.from(u.nonce).toNumber()),
                            null != u.gasLimit && (s.gasLimit = m.O$.from(u.gasLimit)),
                            null != u.gasPrice && (s.gasPrice = m.O$.from(u.gasPrice)),
                            null != u.maxFeePerGas && (s.maxFeePerGas = m.O$.from(u.maxFeePerGas)),
                            null != u.maxPriorityFeePerGas && (s.maxPriorityFeePerGas = m.O$.from(u.maxPriorityFeePerGas)),
                            null != u.from && (s.from = u.from),
                            null != u.type && (s.type = u.type),
                            null != u.accessList && (s.accessList = (0,
                            w.accessListify)(u.accessList)),
                            null == s.gasLimit && null != r.gas) {
                                for (c = 21e3,
                                l = (0,
                                y.arrayify)(o),
                                h = 0; h < l.length; h++)
                                    c += 4,
                                    l[h] && (c += 64);
                                s.gasLimit = m.O$.from(r.gas).add(c)
                            }
                            return u.value && ((d = m.O$.from(u.value)).isZero() || r.payable || E.throwError("non-payable method cannot override value", k.Logger.errors.UNSUPPORTED_OPERATION, {
                                operation: "overrides.value",
                                value: i.value
                            }),
                            s.value = d),
                            u.customData && (s.customData = (0,
                            b.shallowCopy)(u.customData)),
                            u.ccipReadEnabled && (s.ccipReadEnabled = !!u.ccipReadEnabled),
                            delete i.nonce,
                            delete i.gasLimit,
                            delete i.gasPrice,
                            delete i.from,
                            delete i.value,
                            delete i.type,
                            delete i.accessList,
                            delete i.maxFeePerGas,
                            delete i.maxPriorityFeePerGas,
                            delete i.customData,
                            delete i.ccipReadEnabled,
                            (p = Object.keys(i).filter((function(e) {
                                return null != i[e]
                            }
                            ))).length && E.throwError("cannot override ".concat(p.map((function(e) {
                                return JSON.stringify(e)
                            }
                            )).join(",")), k.Logger.errors.UNSUPPORTED_OPERATION, {
                                operation: "overrides",
                                overrides: p
                            }),
                            n.abrupt("return", s);
                        case 36:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))
        }
        function R(e, r) {
            var t = r.wait.bind(r);
            r.wait = function(r) {
                return t(r).then((function(r) {
                    return r.events = r.logs.map((function(t) {
                        var n = (0,
                        b.deepCopy)(t)
                          , i = null;
                        try {
                            i = e.interface.parseLog(t)
                        } catch (a) {}
                        return i && (n.args = i.args,
                        n.decode = function(r, t) {
                            return e.interface.decodeEventLog(i.eventFragment, r, t)
                        }
                        ,
                        n.event = i.name,
                        n.eventSignature = i.signature),
                        n.removeListener = function() {
                            return e.provider
                        }
                        ,
                        n.getBlock = function() {
                            return e.provider.getBlock(r.blockHash)
                        }
                        ,
                        n.getTransaction = function() {
                            return e.provider.getTransaction(r.transactionHash)
                        }
                        ,
                        n.getTransactionReceipt = function() {
                            return Promise.resolve(r)
                        }
                        ,
                        n
                    }
                    )),
                    r
                }
                ))
            }
        }
        function C(e, r, t) {
            var n = e.signer || e.provider;
            return function() {
                for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                    a[o] = arguments[o];
                return A(this, void 0, void 0, (0,
                f.Z)().mark((function i() {
                    var o, s, u, c, l;
                    return (0,
                    f.Z)().wrap((function(i) {
                        for (; ; )
                            switch (i.prev = i.next) {
                            case 0:
                                if (o = void 0,
                                a.length !== r.inputs.length + 1 || "object" !== typeof a[a.length - 1]) {
                                    i.next = 9;
                                    break
                                }
                                if (null == (s = (0,
                                b.shallowCopy)(a.pop())).blockTag) {
                                    i.next = 7;
                                    break
                                }
                                return i.next = 6,
                                s.blockTag;
                            case 6:
                                o = i.sent;
                            case 7:
                                delete s.blockTag,
                                a.push(s);
                            case 9:
                                if (null == e.deployTransaction) {
                                    i.next = 12;
                                    break
                                }
                                return i.next = 12,
                                e._deployed(o);
                            case 12:
                                return i.next = 14,
                                N(e, r, a);
                            case 14:
                                return u = i.sent,
                                i.next = 17,
                                n.call(u, o);
                            case 17:
                                return c = i.sent,
                                i.prev = 18,
                                l = e.interface.decodeFunctionResult(r, c),
                                t && 1 === r.outputs.length && (l = l[0]),
                                i.abrupt("return", l);
                            case 24:
                                throw i.prev = 24,
                                i.t0 = i.catch(18),
                                i.t0.code === k.Logger.errors.CALL_EXCEPTION && (i.t0.address = e.address,
                                i.t0.args = a,
                                i.t0.transaction = u),
                                i.t0;
                            case 28:
                            case "end":
                                return i.stop()
                            }
                    }
                    ), i, null, [[18, 24]])
                }
                )))
            }
        }
        function O(e, r, t) {
            return r.constant ? C(e, r, t) : function(e, r) {
                return function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    return A(this, void 0, void 0, (0,
                    f.Z)().mark((function t() {
                        var i, a;
                        return (0,
                        f.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e.signer || E.throwError("sending a transaction requires a signer", k.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "sendTransaction"
                                    }),
                                    null == e.deployTransaction) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.next = 4,
                                    e._deployed();
                                case 4:
                                    return t.next = 6,
                                    N(e, r, n);
                                case 6:
                                    return i = t.sent,
                                    t.next = 9,
                                    e.signer.sendTransaction(i);
                                case 9:
                                    return a = t.sent,
                                    R(e, a),
                                    t.abrupt("return", a);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))
                }
            }(e, r)
        }
        function _(e) {
            return !e.address || null != e.topics && 0 !== e.topics.length ? (e.address || "*") + "@" + (e.topics ? e.topics.map((function(e) {
                return Array.isArray(e) ? e.join("|") : e
            }
            )).join(":") : "") : "*"
        }
        var T = function() {
            function e(r, t) {
                (0,
                c.Z)(this, e),
                (0,
                b.defineReadOnly)(this, "tag", r),
                (0,
                b.defineReadOnly)(this, "filter", t),
                this._listeners = []
            }
            return (0,
            l.Z)(e, [{
                key: "addListener",
                value: function(e, r) {
                    this._listeners.push({
                        listener: e,
                        once: r
                    })
                }
            }, {
                key: "removeListener",
                value: function(e) {
                    var r = !1;
                    this._listeners = this._listeners.filter((function(t) {
                        return !(!r && t.listener === e) || (r = !0,
                        !1)
                    }
                    ))
                }
            }, {
                key: "removeAllListeners",
                value: function() {
                    this._listeners = []
                }
            }, {
                key: "listeners",
                value: function() {
                    return this._listeners.map((function(e) {
                        return e.listener
                    }
                    ))
                }
            }, {
                key: "listenerCount",
                value: function() {
                    return this._listeners.length
                }
            }, {
                key: "run",
                value: function(e) {
                    var r = this
                      , t = this.listenerCount();
                    return this._listeners = this._listeners.filter((function(t) {
                        var n = e.slice();
                        return setTimeout((function() {
                            t.listener.apply(r, n)
                        }
                        ), 0),
                        !t.once
                    }
                    )),
                    t
                }
            }, {
                key: "prepareEvent",
                value: function(e) {}
            }, {
                key: "getEmit",
                value: function(e) {
                    return [e]
                }
            }]),
            e
        }()
          , I = function(e) {
            (0,
            s.Z)(t, e);
            var r = (0,
            u.Z)(t);
            function t() {
                return (0,
                c.Z)(this, t),
                r.call(this, "error", null)
            }
            return (0,
            l.Z)(t)
        }(T)
          , B = function(e) {
            (0,
            s.Z)(t, e);
            var r = (0,
            u.Z)(t);
            function t(e, n, a, o) {
                var s;
                (0,
                c.Z)(this, t);
                var u = {
                    address: e
                }
                  , l = n.getEventTopic(a);
                return o ? (l !== o[0] && E.throwArgumentError("topic mismatch", "topics", o),
                u.topics = o.slice()) : u.topics = [l],
                s = r.call(this, _(u), u),
                (0,
                b.defineReadOnly)((0,
                i.Z)(s), "address", e),
                (0,
                b.defineReadOnly)((0,
                i.Z)(s), "interface", n),
                (0,
                b.defineReadOnly)((0,
                i.Z)(s), "fragment", a),
                s
            }
            return (0,
            l.Z)(t, [{
                key: "prepareEvent",
                value: function(e) {
                    var r = this;
                    (0,
                    a.Z)((0,
                    o.Z)(t.prototype), "prepareEvent", this).call(this, e),
                    e.event = this.fragment.name,
                    e.eventSignature = this.fragment.format(),
                    e.decode = function(e, t) {
                        return r.interface.decodeEventLog(r.fragment, e, t)
                    }
                    ;
                    try {
                        e.args = this.interface.decodeEventLog(this.fragment, e.data, e.topics)
                    } catch (n) {
                        e.args = null,
                        e.decodeError = n
                    }
                }
            }, {
                key: "getEmit",
                value: function(e) {
                    var r = (0,
                    h.BR)(e.args);
                    if (r.length)
                        throw r[0].error;
                    var t = (e.args || []).slice();
                    return t.push(e),
                    t
                }
            }]),
            t
        }(T)
          , L = function(e) {
            (0,
            s.Z)(t, e);
            var r = (0,
            u.Z)(t);
            function t(e, n) {
                var a;
                return (0,
                c.Z)(this, t),
                a = r.call(this, "*", {
                    address: e
                }),
                (0,
                b.defineReadOnly)((0,
                i.Z)(a), "address", e),
                (0,
                b.defineReadOnly)((0,
                i.Z)(a), "interface", n),
                a
            }
            return (0,
            l.Z)(t, [{
                key: "prepareEvent",
                value: function(e) {
                    var r = this;
                    (0,
                    a.Z)((0,
                    o.Z)(t.prototype), "prepareEvent", this).call(this, e);
                    try {
                        var n = this.interface.parseLog(e);
                        e.event = n.name,
                        e.eventSignature = n.signature,
                        e.decode = function(e, t) {
                            return r.interface.decodeEventLog(n.eventFragment, e, t)
                        }
                        ,
                        e.args = n.args
                    } catch (i) {}
                }
            }]),
            t
        }(T)
          , Z = function() {
            function e(r, t, n) {
                var i = this;
                (0,
                c.Z)(this, e),
                (0,
                b.defineReadOnly)(this, "interface", (0,
                b.getStatic)(this instanceof e ? this.constructor : void 0, "getInterface")(t)),
                null == n ? ((0,
                b.defineReadOnly)(this, "provider", null),
                (0,
                b.defineReadOnly)(this, "signer", null)) : g.E.isSigner(n) ? ((0,
                b.defineReadOnly)(this, "provider", n.provider || null),
                (0,
                b.defineReadOnly)(this, "signer", n)) : p.zt.isProvider(n) ? ((0,
                b.defineReadOnly)(this, "provider", n),
                (0,
                b.defineReadOnly)(this, "signer", null)) : E.throwArgumentError("invalid signer or provider", "signerOrProvider", n),
                (0,
                b.defineReadOnly)(this, "callStatic", {}),
                (0,
                b.defineReadOnly)(this, "estimateGas", {}),
                (0,
                b.defineReadOnly)(this, "functions", {}),
                (0,
                b.defineReadOnly)(this, "populateTransaction", {}),
                (0,
                b.defineReadOnly)(this, "filters", {});
                var a = {};
                if (Object.keys(this.interface.events).forEach((function(e) {
                    var r = i.interface.events[e];
                    (0,
                    b.defineReadOnly)(i.filters, e, (function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        return {
                            address: i.address,
                            topics: i.interface.encodeFilterTopics(r, t)
                        }
                    }
                    )),
                    a[r.name] || (a[r.name] = []),
                    a[r.name].push(e)
                }
                )),
                Object.keys(a).forEach((function(e) {
                    var r = a[e];
                    1 === r.length ? (0,
                    b.defineReadOnly)(i.filters, e, i.filters[r[0]]) : E.warn("Duplicate definition of ".concat(e, " (").concat(r.join(", "), ")"))
                }
                )),
                (0,
                b.defineReadOnly)(this, "_runningEvents", {}),
                (0,
                b.defineReadOnly)(this, "_wrappedEmits", {}),
                null == r && E.throwArgumentError("invalid contract address or ENS name", "addressOrName", r),
                (0,
                b.defineReadOnly)(this, "address", r),
                this.provider)
                    (0,
                    b.defineReadOnly)(this, "resolvedAddress", S(this.provider, r));
                else
                    try {
                        (0,
                        b.defineReadOnly)(this, "resolvedAddress", Promise.resolve((0,
                        v.getAddress)(r)))
                    } catch (u) {
                        E.throwError("provider is required to use ENS name as contract address", k.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "new Contract"
                        })
                    }
                this.resolvedAddress.catch((function(e) {}
                ));
                var o = {}
                  , s = {};
                Object.keys(this.interface.functions).forEach((function(e) {
                    var r = i.interface.functions[e];
                    if (s[e])
                        E.warn("Duplicate ABI entry for ".concat(JSON.stringify(e)));
                    else {
                        s[e] = !0;
                        var t = r.name;
                        o["%".concat(t)] || (o["%".concat(t)] = []),
                        o["%".concat(t)].push(e),
                        null == i[e] && (0,
                        b.defineReadOnly)(i, e, O(i, r, !0)),
                        null == i.functions[e] && (0,
                        b.defineReadOnly)(i.functions, e, O(i, r, !1)),
                        null == i.callStatic[e] && (0,
                        b.defineReadOnly)(i.callStatic, e, C(i, r, !0)),
                        null == i.populateTransaction[e] && (0,
                        b.defineReadOnly)(i.populateTransaction, e, function(e, r) {
                            return function() {
                                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                                    n[i] = arguments[i];
                                return N(e, r, n)
                            }
                        }(i, r)),
                        null == i.estimateGas[e] && (0,
                        b.defineReadOnly)(i.estimateGas, e, function(e, r) {
                            var t = e.signer || e.provider;
                            return function() {
                                for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                                    i[a] = arguments[a];
                                return A(this, void 0, void 0, (0,
                                f.Z)().mark((function n() {
                                    var a;
                                    return (0,
                                    f.Z)().wrap((function(n) {
                                        for (; ; )
                                            switch (n.prev = n.next) {
                                            case 0:
                                                return t || E.throwError("estimate require a provider or signer", k.Logger.errors.UNSUPPORTED_OPERATION, {
                                                    operation: "estimateGas"
                                                }),
                                                n.next = 3,
                                                N(e, r, i);
                                            case 3:
                                                return a = n.sent,
                                                n.next = 6,
                                                t.estimateGas(a);
                                            case 6:
                                                return n.abrupt("return", n.sent);
                                            case 7:
                                            case "end":
                                                return n.stop()
                                            }
                                    }
                                    ), n)
                                }
                                )))
                            }
                        }(i, r))
                    }
                }
                )),
                Object.keys(o).forEach((function(e) {
                    var r = o[e];
                    if (!(r.length > 1)) {
                        e = e.substring(1);
                        var t = r[0];
                        try {
                            null == i[e] && (0,
                            b.defineReadOnly)(i, e, i[t])
                        } catch (n) {}
                        null == i.functions[e] && (0,
                        b.defineReadOnly)(i.functions, e, i.functions[t]),
                        null == i.callStatic[e] && (0,
                        b.defineReadOnly)(i.callStatic, e, i.callStatic[t]),
                        null == i.populateTransaction[e] && (0,
                        b.defineReadOnly)(i.populateTransaction, e, i.populateTransaction[t]),
                        null == i.estimateGas[e] && (0,
                        b.defineReadOnly)(i.estimateGas, e, i.estimateGas[t])
                    }
                }
                ))
            }
            return (0,
            l.Z)(e, [{
                key: "deployed",
                value: function() {
                    return this._deployed()
                }
            }, {
                key: "_deployed",
                value: function(e) {
                    var r = this;
                    return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then((function() {
                        return r
                    }
                    )) : this._deployedPromise = this.provider.getCode(this.address, e).then((function(e) {
                        return "0x" === e && E.throwError("contract not deployed", k.Logger.errors.UNSUPPORTED_OPERATION, {
                            contractAddress: r.address,
                            operation: "getDeployed"
                        }),
                        r
                    }
                    ))),
                    this._deployedPromise
                }
            }, {
                key: "fallback",
                value: function(e) {
                    var r = this;
                    this.signer || E.throwError("sending a transactions require a signer", k.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "sendTransaction(fallback)"
                    });
                    var t = (0,
                    b.shallowCopy)(e || {});
                    return ["from", "to"].forEach((function(e) {
                        null != t[e] && E.throwError("cannot override " + e, k.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: e
                        })
                    }
                    )),
                    t.to = this.resolvedAddress,
                    this.deployed().then((function() {
                        return r.signer.sendTransaction(t)
                    }
                    ))
                }
            }, {
                key: "connect",
                value: function(e) {
                    "string" === typeof e && (e = new g.b(e,this.provider));
                    var r = new this.constructor(this.address,this.interface,e);
                    return this.deployTransaction && (0,
                    b.defineReadOnly)(r, "deployTransaction", this.deployTransaction),
                    r
                }
            }, {
                key: "attach",
                value: function(e) {
                    return new this.constructor(e,this.interface,this.signer || this.provider)
                }
            }, {
                key: "_normalizeRunningEvent",
                value: function(e) {
                    return this._runningEvents[e.tag] ? this._runningEvents[e.tag] : e
                }
            }, {
                key: "_getRunningEvent",
                value: function(e) {
                    if ("string" === typeof e) {
                        if ("error" === e)
                            return this._normalizeRunningEvent(new I);
                        if ("event" === e)
                            return this._normalizeRunningEvent(new T("event",null));
                        if ("*" === e)
                            return this._normalizeRunningEvent(new L(this.address,this.interface));
                        var r = this.interface.getEvent(e);
                        return this._normalizeRunningEvent(new B(this.address,this.interface,r))
                    }
                    if (e.topics && e.topics.length > 0) {
                        try {
                            var t = e.topics[0];
                            if ("string" !== typeof t)
                                throw new Error("invalid topic");
                            var n = this.interface.getEvent(t);
                            return this._normalizeRunningEvent(new B(this.address,this.interface,n,e.topics))
                        } catch (a) {}
                        var i = {
                            address: this.address,
                            topics: e.topics
                        };
                        return this._normalizeRunningEvent(new T(_(i),i))
                    }
                    return this._normalizeRunningEvent(new L(this.address,this.interface))
                }
            }, {
                key: "_checkRunningEvents",
                value: function(e) {
                    if (0 === e.listenerCount()) {
                        delete this._runningEvents[e.tag];
                        var r = this._wrappedEmits[e.tag];
                        r && e.filter && (this.provider.off(e.filter, r),
                        delete this._wrappedEmits[e.tag])
                    }
                }
            }, {
                key: "_wrapEvent",
                value: function(e, r, t) {
                    var n = this
                      , i = (0,
                    b.deepCopy)(r);
                    return i.removeListener = function() {
                        t && (e.removeListener(t),
                        n._checkRunningEvents(e))
                    }
                    ,
                    i.getBlock = function() {
                        return n.provider.getBlock(r.blockHash)
                    }
                    ,
                    i.getTransaction = function() {
                        return n.provider.getTransaction(r.transactionHash)
                    }
                    ,
                    i.getTransactionReceipt = function() {
                        return n.provider.getTransactionReceipt(r.transactionHash)
                    }
                    ,
                    e.prepareEvent(i),
                    i
                }
            }, {
                key: "_addEventListener",
                value: function(e, r, t) {
                    var i = this;
                    if (this.provider || E.throwError("events require a provider or a signer with a provider", k.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "once"
                    }),
                    e.addListener(r, t),
                    this._runningEvents[e.tag] = e,
                    !this._wrappedEmits[e.tag]) {
                        var a = function(t) {
                            var a = i._wrapEvent(e, t, r);
                            if (null == a.decodeError)
                                try {
                                    var o = e.getEmit(a);
                                    i.emit.apply(i, [e.filter].concat((0,
                                    n.Z)(o)))
                                } catch (s) {
                                    a.decodeError = s.error
                                }
                            null != e.filter && i.emit("event", a),
                            null != a.decodeError && i.emit("error", a.decodeError, a)
                        };
                        this._wrappedEmits[e.tag] = a,
                        null != e.filter && this.provider.on(e.filter, a)
                    }
                }
            }, {
                key: "queryFilter",
                value: function(e, r, t) {
                    var n = this
                      , i = this._getRunningEvent(e)
                      , a = (0,
                    b.shallowCopy)(i.filter);
                    return "string" === typeof r && (0,
                    y.isHexString)(r, 32) ? (null != t && E.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", t),
                    a.blockHash = r) : (a.fromBlock = null != r ? r : 0,
                    a.toBlock = null != t ? t : "latest"),
                    this.provider.getLogs(a).then((function(e) {
                        return e.map((function(e) {
                            return n._wrapEvent(i, e, null)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "on",
                value: function(e, r) {
                    return this._addEventListener(this._getRunningEvent(e), r, !1),
                    this
                }
            }, {
                key: "once",
                value: function(e, r) {
                    return this._addEventListener(this._getRunningEvent(e), r, !0),
                    this
                }
            }, {
                key: "emit",
                value: function(e) {
                    if (!this.provider)
                        return !1;
                    for (var r = this._getRunningEvent(e), t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        n[i - 1] = arguments[i];
                    var a = r.run(n) > 0;
                    return this._checkRunningEvents(r),
                    a
                }
            }, {
                key: "listenerCount",
                value: function(e) {
                    var r = this;
                    return this.provider ? null == e ? Object.keys(this._runningEvents).reduce((function(e, t) {
                        return e + r._runningEvents[t].listenerCount()
                    }
                    ), 0) : this._getRunningEvent(e).listenerCount() : 0
                }
            }, {
                key: "listeners",
                value: function(e) {
                    if (!this.provider)
                        return [];
                    if (null == e) {
                        var r = [];
                        for (var t in this._runningEvents)
                            this._runningEvents[t].listeners().forEach((function(e) {
                                r.push(e)
                            }
                            ));
                        return r
                    }
                    return this._getRunningEvent(e).listeners()
                }
            }, {
                key: "removeAllListeners",
                value: function(e) {
                    if (!this.provider)
                        return this;
                    if (null == e) {
                        for (var r in this._runningEvents) {
                            var t = this._runningEvents[r];
                            t.removeAllListeners(),
                            this._checkRunningEvents(t)
                        }
                        return this
                    }
                    var n = this._getRunningEvent(e);
                    return n.removeAllListeners(),
                    this._checkRunningEvents(n),
                    this
                }
            }, {
                key: "off",
                value: function(e, r) {
                    if (!this.provider)
                        return this;
                    var t = this._getRunningEvent(e);
                    return t.removeListener(r),
                    this._checkRunningEvents(t),
                    this
                }
            }, {
                key: "removeListener",
                value: function(e, r) {
                    return this.off(e, r)
                }
            }], [{
                key: "getContractAddress",
                value: function(e) {
                    return (0,
                    v.getContractAddress)(e)
                }
            }, {
                key: "getInterface",
                value: function(e) {
                    return d.vU.isInterface(e) ? e : new d.vU(e)
                }
            }, {
                key: "isIndexed",
                value: function(e) {
                    return d.Hk.isIndexed(e)
                }
            }]),
            e
        }()
          , F = function(e) {
            (0,
            s.Z)(t, e);
            var r = (0,
            u.Z)(t);
            function t() {
                return (0,
                c.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            l.Z)(t)
        }(Z)
          , D = function() {
            function e(r, t, n) {
                (0,
                c.Z)(this, e);
                var i = null;
                "0x" !== (i = "string" === typeof t ? t : (0,
                y.isBytes)(t) ? (0,
                y.hexlify)(t) : t && "string" === typeof t.object ? t.object : "!").substring(0, 2) && (i = "0x" + i),
                (!(0,
                y.isHexString)(i) || i.length % 2) && E.throwArgumentError("invalid bytecode", "bytecode", t),
                n && !g.E.isSigner(n) && E.throwArgumentError("invalid signer", "signer", n),
                (0,
                b.defineReadOnly)(this, "bytecode", i),
                (0,
                b.defineReadOnly)(this, "interface", (0,
                b.getStatic)(this instanceof e ? this.constructor : void 0, "getInterface")(r)),
                (0,
                b.defineReadOnly)(this, "signer", n || null)
            }
            return (0,
            l.Z)(e, [{
                key: "getDeployTransaction",
                value: function() {
                    for (var e = {}, r = arguments.length, t = new Array(r), n = 0; n < r; n++)
                        t[n] = arguments[n];
                    if (t.length === this.interface.deploy.inputs.length + 1 && "object" === typeof t[t.length - 1])
                        for (var i in e = (0,
                        b.shallowCopy)(t.pop()))
                            if (!x[i])
                                throw new Error("unknown transaction override " + i);
                    (["data", "from", "to"].forEach((function(r) {
                        null != e[r] && E.throwError("cannot override " + r, k.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: r
                        })
                    }
                    )),
                    e.value) && (m.O$.from(e.value).isZero() || this.interface.deploy.payable || E.throwError("non-payable constructor cannot override value", k.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "overrides.value",
                        value: e.value
                    }));
                    return E.checkArgumentCount(t.length, this.interface.deploy.inputs.length, " in Contract constructor"),
                    e.data = (0,
                    y.hexlify)((0,
                    y.concat)([this.bytecode, this.interface.encodeDeploy(t)])),
                    e
                }
            }, {
                key: "deploy",
                value: function() {
                    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                        r[t] = arguments[t];
                    return A(this, void 0, void 0, (0,
                    f.Z)().mark((function e() {
                        var t, i, a, o, s, u;
                        return (0,
                        f.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = {},
                                    r.length === this.interface.deploy.inputs.length + 1 && (t = r.pop()),
                                    E.checkArgumentCount(r.length, this.interface.deploy.inputs.length, " in Contract constructor"),
                                    e.next = 5,
                                    P(this.signer, r, this.interface.deploy.inputs);
                                case 5:
                                    return (i = e.sent).push(t),
                                    a = this.getDeployTransaction.apply(this, (0,
                                    n.Z)(i)),
                                    e.next = 10,
                                    this.signer.sendTransaction(a);
                                case 10:
                                    return o = e.sent,
                                    s = (0,
                                    b.getStatic)(this.constructor, "getContractAddress")(o),
                                    R(u = (0,
                                    b.getStatic)(this.constructor, "getContract")(s, this.interface, this.signer), o),
                                    (0,
                                    b.defineReadOnly)(u, "deployTransaction", o),
                                    e.abrupt("return", u);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "attach",
                value: function(e) {
                    return this.constructor.getContract(e, this.interface, this.signer)
                }
            }, {
                key: "connect",
                value: function(e) {
                    return new this.constructor(this.interface,this.bytecode,e)
                }
            }], [{
                key: "fromSolidity",
                value: function(e, r) {
                    null == e && E.throwError("missing compiler output", k.Logger.errors.MISSING_ARGUMENT, {
                        argument: "compilerOutput"
                    }),
                    "string" === typeof e && (e = JSON.parse(e));
                    var t = e.abi
                      , n = null;
                    return e.bytecode ? n = e.bytecode : e.evm && e.evm.bytecode && (n = e.evm.bytecode),
                    new this(t,n,r)
                }
            }, {
                key: "getInterface",
                value: function(e) {
                    return F.getInterface(e)
                }
            }, {
                key: "getContractAddress",
                value: function(e) {
                    return (0,
                    v.getContractAddress)(e)
                }
            }, {
                key: "getContract",
                value: function(e, r, t) {
                    return new F(e,r,t)
                }
            }]),
            e
        }()
    },
    22069: function(e, r, t) {
        t.d(r, {
            i: function() {
                return n
            }
        });
        var n = "hash/5.7.0"
    },
    93358: function(e, r, t) {
        t.d(r, {
            id: function() {
                return a
            }
        });
        var n = t(11291)
          , i = t(91953);
        function a(e) {
            return (0,
            n.keccak256)((0,
            i.Y0)(e))
        }
    },
    85843: function(e, r, t) {
        t.r(r),
        t.d(r, {
            _TypedDataEncoder: function() {
                return o.E
            },
            dnsEncode: function() {
                return i.Kn
            },
            ensNormalize: function() {
                return i.w3
            },
            hashMessage: function() {
                return a.r
            },
            id: function() {
                return n.id
            },
            isValidName: function() {
                return i.r1
            },
            messagePrefix: function() {
                return a.B
            },
            namehash: function() {
                return i.VM
            }
        });
        var n = t(93358)
          , i = t(68565)
          , a = t(88836)
          , o = t(26454)
    },
    88836: function(e, r, t) {
        t.d(r, {
            B: function() {
                return o
            },
            r: function() {
                return s
            }
        });
        var n = t(52009)
          , i = t(11291)
          , a = t(91953)
          , o = "\x19Ethereum Signed Message:\n";
        function s(e) {
            return "string" === typeof e && (e = (0,
            a.Y0)(e)),
            (0,
            i.keccak256)((0,
            n.concat)([(0,
            a.Y0)(o), (0,
            a.Y0)(String(e.length)), e]))
        }
    },
    68565: function(e, r, t) {
        t.d(r, {
            Kn: function() {
                return D
            },
            w3: function() {
                return L
            },
            r1: function() {
                return Z
            },
            VM: function() {
                return F
            }
        });
        var n = t(52009)
          , i = t(91953)
          , a = t(11291)
          , o = t(2735)
          , s = t(22069)
          , u = t(93433)
          , c = t(37762);
        function l(e, r) {
            null == r && (r = 1);
            var t = []
              , n = t.forEach;
            return function e(r, i) {
                n.call(r, (function(r) {
                    i > 0 && Array.isArray(r) ? e(r, i - 1) : t.push(r)
                }
                ))
            }(e, r),
            t
        }
        function f(e) {
            return function(e) {
                var r = 0;
                return function() {
                    return e[r++]
                }
            }(function(e) {
                var r = 0;
                function t() {
                    return e[r++] << 8 | e[r++]
                }
                for (var n = t(), i = 1, a = [0, 1], o = 1; o < n; o++)
                    a.push(i += t());
                var s = t()
                  , u = r;
                r += s;
                var c = 0
                  , l = 0;
                function f() {
                    return 0 == c && (l = l << 8 | e[r++],
                    c = 8),
                    l >> --c & 1
                }
                for (var h = Math.pow(2, 31), d = h >>> 1, p = d >> 1, g = h - 1, v = 0, m = 0; m < 31; m++)
                    v = v << 1 | f();
                for (var y = [], b = 0, w = h; ; ) {
                    for (var k = Math.floor(((v - b + 1) * i - 1) / w), A = 0, E = n; E - A > 1; ) {
                        var x = A + E >>> 1;
                        k < a[x] ? E = x : A = x
                    }
                    if (0 == A)
                        break;
                    y.push(A);
                    for (var S = b + Math.floor(w * a[A] / i), P = b + Math.floor(w * a[A + 1] / i) - 1; 0 == ((S ^ P) & d); )
                        v = v << 1 & g | f(),
                        S = S << 1 & g,
                        P = P << 1 & g | 1;
                    for (; S & ~P & p; )
                        v = v & d | v << 1 & g >>> 1 | f(),
                        S = S << 1 ^ d,
                        P = (P ^ d) << 1 | d | 1;
                    b = S,
                    w = 1 + P - S
                }
                var N = n - 4;
                return y.map((function(r) {
                    switch (r - N) {
                    case 3:
                        return N + 65792 + (e[u++] << 16 | e[u++] << 8 | e[u++]);
                    case 2:
                        return N + 256 + (e[u++] << 8 | e[u++]);
                    case 1:
                        return N + e[u++];
                    default:
                        return r - 1
                    }
                }
                ))
            }(e))
        }
        function h(e) {
            return 1 & e ? ~e >> 1 : e >> 1
        }
        function d(e, r) {
            for (var t = Array(e), n = 0, i = -1; n < e; n++)
                t[n] = i += 1 + r();
            return t
        }
        function p(e, r) {
            for (var t = Array(e), n = 0, i = 0; n < e; n++)
                t[n] = i += h(r());
            return t
        }
        function g(e, r) {
            for (var t = d(e(), e), n = e(), i = d(n, e), a = function(e, r) {
                for (var t = Array(e), n = 0; n < e; n++)
                    t[n] = 1 + r();
                return t
            }(n, e), o = 0; o < n; o++)
                for (var s = 0; s < a[o]; s++)
                    t.push(i[o] + s);
            return r ? t.map((function(e) {
                return r[e]
            }
            )) : t
        }
        function v(e, r, t) {
            for (var n = Array(e).fill(void 0).map((function() {
                return []
            }
            )), i = 0; i < r; i++)
                p(e, t).forEach((function(e, r) {
                    return n[r].push(e)
                }
                ));
            return n
        }
        function m(e, r) {
            var t = 1 + r()
              , n = r()
              , i = function(e) {
                for (var r = []; ; ) {
                    var t = e();
                    if (0 == t)
                        break;
                    r.push(t)
                }
                return r
            }(r);
            return l(v(i.length, 1 + e, r).map((function(e, r) {
                var a = e[0]
                  , o = e.slice(1);
                return Array(i[r]).fill(void 0).map((function(e, r) {
                    var i = r * n;
                    return [a + r * t, o.map((function(e) {
                        return e + i
                    }
                    ))]
                }
                ))
            }
            )))
        }
        function y(e, r) {
            return v(1 + r(), 1 + e, r).map((function(e) {
                return [e[0], e.slice(1)]
            }
            ))
        }
        var b = f((0,
        t(48853).J)("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="))
          , w = new Set(g(b))
          , k = new Set(g(b))
          , A = function(e) {
            for (var r = []; ; ) {
                var t = e();
                if (0 == t)
                    break;
                r.push(m(t, e))
            }
            for (; ; ) {
                var n = e() - 1;
                if (n < 0)
                    break;
                r.push(y(n, e))
            }
            return function(e) {
                for (var r = {}, t = 0; t < e.length; t++) {
                    var n = e[t];
                    r[n[0]] = n[1]
                }
                return r
            }(l(r))
        }(b)
          , E = function(e) {
            var r = g(e).sort((function(e, r) {
                return e - r
            }
            ));
            return function t() {
                var n = [];
                for (; ; ) {
                    var i = g(e, r);
                    if (0 == i.length)
                        break;
                    n.push({
                        set: new Set(i),
                        node: t()
                    })
                }
                n.sort((function(e, r) {
                    return r.set.size - e.set.size
                }
                ));
                var a = e();
                return {
                    branches: n,
                    valid: a % 3,
                    fe0f: !!(1 & (a = a / 3 | 0)),
                    save: 1 == (a >>= 1),
                    check: 2 == a
                }
            }()
        }(b)
          , x = 45
          , S = 95;
        function P(e) {
            return (0,
            i.XL)(e)
        }
        function N(e) {
            return e.filter((function(e) {
                return 65039 != e
            }
            ))
        }
        function R(e) {
            var r, t = (0,
            c.Z)(e.split("."));
            try {
                for (t.s(); !(r = t.n()).done; ) {
                    var n = r.value
                      , i = P(n);
                    try {
                        for (var a = i.lastIndexOf(S) - 1; a >= 0; a--)
                            if (i[a] !== S)
                                throw new Error("underscore only allowed at start");
                        if (i.length >= 4 && i.every((function(e) {
                            return e < 128
                        }
                        )) && i[2] === x && i[3] === x)
                            throw new Error("invalid label extension")
                    } catch (o) {
                        throw new Error('Invalid label "'.concat(n, '": ').concat(o.message))
                    }
                }
            } catch (o) {
                t.e(o)
            } finally {
                t.f()
            }
            return e
        }
        function C(e) {
            return R(function(e, r) {
                var t = P(e).reverse()
                  , n = [];
                for (; t.length; ) {
                    var i = O(t);
                    if (i)
                        n.push.apply(n, (0,
                        u.Z)(r(i)));
                    else {
                        var a = t.pop();
                        if (w.has(a))
                            n.push(a);
                        else if (!k.has(a)) {
                            var o = A[a];
                            if (!o)
                                throw new Error("Disallowed codepoint: 0x".concat(a.toString(16).toUpperCase()));
                            n.push.apply(n, (0,
                            u.Z)(o))
                        }
                    }
                }
                return R((s = String.fromCodePoint.apply(String, n),
                s.normalize("NFC")));
                var s
            }(e, N))
        }
        function O(e, r) {
            var t, n, i, a = E, o = [], s = e.length;
            r && (r.length = 0);
            for (var c = function() {
                var c = e[--s];
                if (!(a = null === (t = a.branches.find((function(e) {
                    return e.set.has(c)
                }
                ))) || void 0 === t ? void 0 : t.node))
                    return "break";
                if (a.save)
                    i = c;
                else if (a.check && c === i)
                    return "break";
                o.push(c),
                a.fe0f && (o.push(65039),
                s > 0 && 65039 == e[s - 1] && s--),
                a.valid && (n = o.slice(),
                2 == a.valid && n.splice(1, 1),
                r && r.push.apply(r, (0,
                u.Z)(e.slice(s).reverse())),
                e.length = s)
            }; s; ) {
                if ("break" === c())
                    break
            }
            return n
        }
        var _ = new o.Logger(s.i)
          , T = new Uint8Array(32);
        function I(e) {
            if (0 === e.length)
                throw new Error("invalid ENS name; empty component");
            return e
        }
        function B(e) {
            var r = (0,
            i.Y0)(C(e))
              , t = [];
            if (0 === e.length)
                return t;
            for (var n = 0, a = 0; a < r.length; a++) {
                46 === r[a] && (t.push(I(r.slice(n, a))),
                n = a + 1)
            }
            if (n >= r.length)
                throw new Error("invalid ENS name; empty component");
            return t.push(I(r.slice(n))),
            t
        }
        function L(e) {
            return B(e).map((function(e) {
                return (0,
                i.ZN)(e)
            }
            )).join(".")
        }
        function Z(e) {
            try {
                return 0 !== B(e).length
            } catch (r) {}
            return !1
        }
        function F(e) {
            "string" !== typeof e && _.throwArgumentError("invalid ENS name; not a string", "name", e);
            for (var r = T, t = B(e); t.length; )
                r = (0,
                a.keccak256)((0,
                n.concat)([r, (0,
                a.keccak256)(t.pop())]));
            return (0,
            n.hexlify)(r)
        }
        function D(e) {
            return (0,
            n.hexlify)((0,
            n.concat)(B(e).map((function(e) {
                if (e.length > 63)
                    throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
                var r = new Uint8Array(e.length + 1);
                return r.set(e, 1),
                r[0] = r.length - 1,
                r
            }
            )))) + "00"
        }
        T.fill(0)
    },
    26454: function(e, r, t) {
        t.d(r, {
            E: function() {
                return C
            }
        });
        var n = t(74165)
          , i = t(15671)
          , a = t(43144)
          , o = t(28552)
          , s = t(19560)
          , u = t(52009)
          , c = t(11291)
          , l = t(54812)
          , f = t(2735)
          , h = t(22069)
          , d = t(93358)
          , p = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , g = new f.Logger(h.i)
          , v = new Uint8Array(32);
        v.fill(0);
        var m = s.O$.from(-1)
          , y = s.O$.from(0)
          , b = s.O$.from(1)
          , w = s.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
        var k = (0,
        u.hexZeroPad)(b.toHexString(), 32)
          , A = (0,
        u.hexZeroPad)(y.toHexString(), 32)
          , E = {
            name: "string",
            version: "string",
            chainId: "uint256",
            verifyingContract: "address",
            salt: "bytes32"
        }
          , x = ["name", "version", "chainId", "verifyingContract", "salt"];
        function S(e) {
            return function(r) {
                return "string" !== typeof r && g.throwArgumentError("invalid domain value for ".concat(JSON.stringify(e)), "domain.".concat(e), r),
                r
            }
        }
        var P = {
            name: S("name"),
            version: S("version"),
            chainId: function(e) {
                try {
                    return s.O$.from(e).toString()
                } catch (r) {}
                return g.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e)
            },
            verifyingContract: function(e) {
                try {
                    return (0,
                    o.getAddress)(e).toLowerCase()
                } catch (r) {}
                return g.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e)
            },
            salt: function(e) {
                try {
                    var r = (0,
                    u.arrayify)(e);
                    if (32 !== r.length)
                        throw new Error("bad length");
                    return (0,
                    u.hexlify)(r)
                } catch (t) {}
                return g.throwArgumentError('invalid domain value "salt"', "domain.salt", e)
            }
        };
        function N(e) {
            var r = e.match(/^(u?)int(\d*)$/);
            if (r) {
                var t = "" === r[1]
                  , n = parseInt(r[2] || "256");
                (n % 8 !== 0 || n > 256 || r[2] && r[2] !== String(n)) && g.throwArgumentError("invalid numeric width", "type", e);
                var i = w.mask(t ? n - 1 : n)
                  , a = t ? i.add(b).mul(m) : y;
                return function(r) {
                    var t = s.O$.from(r);
                    return (t.lt(a) || t.gt(i)) && g.throwArgumentError("value out-of-bounds for ".concat(e), "value", r),
                    (0,
                    u.hexZeroPad)(t.toTwos(256).toHexString(), 32)
                }
            }
            var l = e.match(/^bytes(\d+)$/);
            if (l) {
                var f = parseInt(l[1]);
                return (0 === f || f > 32 || l[1] !== String(f)) && g.throwArgumentError("invalid bytes width", "type", e),
                function(r) {
                    return (0,
                    u.arrayify)(r).length !== f && g.throwArgumentError("invalid length for ".concat(e), "value", r),
                    function(e) {
                        var r = (0,
                        u.arrayify)(e)
                          , t = r.length % 32;
                        return t ? (0,
                        u.hexConcat)([r, v.slice(t)]) : (0,
                        u.hexlify)(r)
                    }(r)
                }
            }
            switch (e) {
            case "address":
                return function(e) {
                    return (0,
                    u.hexZeroPad)((0,
                    o.getAddress)(e), 32)
                }
                ;
            case "bool":
                return function(e) {
                    return e ? k : A
                }
                ;
            case "bytes":
                return function(e) {
                    return (0,
                    c.keccak256)(e)
                }
                ;
            case "string":
                return function(e) {
                    return (0,
                    d.id)(e)
                }
            }
            return null
        }
        function R(e, r) {
            return "".concat(e, "(").concat(r.map((function(e) {
                var r = e.name;
                return e.type + " " + r
            }
            )).join(","), ")")
        }
        var C = function() {
            function e(r) {
                (0,
                i.Z)(this, e),
                (0,
                l.defineReadOnly)(this, "types", Object.freeze((0,
                l.deepCopy)(r))),
                (0,
                l.defineReadOnly)(this, "_encoderCache", {}),
                (0,
                l.defineReadOnly)(this, "_types", {});
                var t = {}
                  , n = {}
                  , a = {};
                Object.keys(r).forEach((function(e) {
                    t[e] = {},
                    n[e] = [],
                    a[e] = {}
                }
                ));
                var o = function(e) {
                    var i = {};
                    r[e].forEach((function(a) {
                        i[a.name] && g.throwArgumentError("duplicate variable name ".concat(JSON.stringify(a.name), " in ").concat(JSON.stringify(e)), "types", r),
                        i[a.name] = !0;
                        var o = a.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                        o === e && g.throwArgumentError("circular type reference to ".concat(JSON.stringify(o)), "types", r),
                        N(o) || (n[o] || g.throwArgumentError("unknown type ".concat(JSON.stringify(o)), "types", r),
                        n[o].push(e),
                        t[e][o] = !0)
                    }
                    ))
                };
                for (var s in r)
                    o(s);
                var u = Object.keys(n).filter((function(e) {
                    return 0 === n[e].length
                }
                ));
                for (var c in 0 === u.length ? g.throwArgumentError("missing primary type", "types", r) : u.length > 1 && g.throwArgumentError("ambiguous primary types or unused types: ".concat(u.map((function(e) {
                    return JSON.stringify(e)
                }
                )).join(", ")), "types", r),
                (0,
                l.defineReadOnly)(this, "primaryType", u[0]),
                function e(i, o) {
                    o[i] && g.throwArgumentError("circular type reference to ".concat(JSON.stringify(i)), "types", r),
                    o[i] = !0,
                    Object.keys(t[i]).forEach((function(r) {
                        n[r] && (e(r, o),
                        Object.keys(o).forEach((function(e) {
                            a[e][r] = !0
                        }
                        )))
                    }
                    )),
                    delete o[i]
                }(this.primaryType, {}),
                a) {
                    var f = Object.keys(a[c]);
                    f.sort(),
                    this._types[c] = R(c, r[c]) + f.map((function(e) {
                        return R(e, r[e])
                    }
                    )).join("")
                }
            }
            return (0,
            a.Z)(e, [{
                key: "getEncoder",
                value: function(e) {
                    var r = this._encoderCache[e];
                    return r || (r = this._encoderCache[e] = this._getEncoder(e)),
                    r
                }
            }, {
                key: "_getEncoder",
                value: function(e) {
                    var r = this
                      , t = N(e);
                    if (t)
                        return t;
                    var n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (n) {
                        var i = n[1]
                          , a = this.getEncoder(i)
                          , o = parseInt(n[3]);
                        return function(e) {
                            o >= 0 && e.length !== o && g.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
                            var t = e.map(a);
                            return r._types[i] && (t = t.map(c.keccak256)),
                            (0,
                            c.keccak256)((0,
                            u.hexConcat)(t))
                        }
                    }
                    var s = this.types[e];
                    if (s) {
                        var l = (0,
                        d.id)(this._types[e]);
                        return function(e) {
                            var t = s.map((function(t) {
                                var n = t.name
                                  , i = t.type
                                  , a = r.getEncoder(i)(e[n]);
                                return r._types[i] ? (0,
                                c.keccak256)(a) : a
                            }
                            ));
                            return t.unshift(l),
                            (0,
                            u.hexConcat)(t)
                        }
                    }
                    return g.throwArgumentError("unknown type: ".concat(e), "type", e)
                }
            }, {
                key: "encodeType",
                value: function(e) {
                    var r = this._types[e];
                    return r || g.throwArgumentError("unknown type: ".concat(JSON.stringify(e)), "name", e),
                    r
                }
            }, {
                key: "encodeData",
                value: function(e, r) {
                    return this.getEncoder(e)(r)
                }
            }, {
                key: "hashStruct",
                value: function(e, r) {
                    return (0,
                    c.keccak256)(this.encodeData(e, r))
                }
            }, {
                key: "encode",
                value: function(e) {
                    return this.encodeData(this.primaryType, e)
                }
            }, {
                key: "hash",
                value: function(e) {
                    return this.hashStruct(this.primaryType, e)
                }
            }, {
                key: "_visit",
                value: function(e, r, t) {
                    var n = this;
                    if (N(e))
                        return t(e, r);
                    var i = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
                    if (i) {
                        var a = i[1]
                          , o = parseInt(i[3]);
                        return o >= 0 && r.length !== o && g.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", r),
                        r.map((function(e) {
                            return n._visit(a, e, t)
                        }
                        ))
                    }
                    var s = this.types[e];
                    return s ? s.reduce((function(e, i) {
                        var a = i.name
                          , o = i.type;
                        return e[a] = n._visit(o, r[a], t),
                        e
                    }
                    ), {}) : g.throwArgumentError("unknown type: ".concat(e), "type", e)
                }
            }, {
                key: "visit",
                value: function(e, r) {
                    return this._visit(this.primaryType, e, r)
                }
            }], [{
                key: "from",
                value: function(r) {
                    return new e(r)
                }
            }, {
                key: "getPrimaryType",
                value: function(r) {
                    return e.from(r).primaryType
                }
            }, {
                key: "hashStruct",
                value: function(r, t, n) {
                    return e.from(t).hashStruct(r, n)
                }
            }, {
                key: "hashDomain",
                value: function(r) {
                    var t = [];
                    for (var n in r) {
                        var i = E[n];
                        i || g.throwArgumentError("invalid typed-data domain key: ".concat(JSON.stringify(n)), "domain", r),
                        t.push({
                            name: n,
                            type: i
                        })
                    }
                    return t.sort((function(e, r) {
                        return x.indexOf(e.name) - x.indexOf(r.name)
                    }
                    )),
                    e.hashStruct("EIP712Domain", {
                        EIP712Domain: t
                    }, r)
                }
            }, {
                key: "encode",
                value: function(r, t, n) {
                    return (0,
                    u.hexConcat)(["0x1901", e.hashDomain(r), e.from(t).hash(n)])
                }
            }, {
                key: "hash",
                value: function(r, t, n) {
                    return (0,
                    c.keccak256)(e.encode(r, t, n))
                }
            }, {
                key: "resolveNames",
                value: function(r, t, i, a) {
                    return p(this, void 0, void 0, (0,
                    n.Z)().mark((function o() {
                        var s, c, f;
                        return (0,
                        n.Z)().wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    r = (0,
                                    l.shallowCopy)(r),
                                    s = {},
                                    r.verifyingContract && !(0,
                                    u.isHexString)(r.verifyingContract, 20) && (s[r.verifyingContract] = "0x"),
                                    (c = e.from(t)).visit(i, (function(e, r) {
                                        return "address" !== e || (0,
                                        u.isHexString)(r, 20) || (s[r] = "0x"),
                                        r
                                    }
                                    )),
                                    o.t0 = (0,
                                    n.Z)().keys(s);
                                case 6:
                                    if ((o.t1 = o.t0()).done) {
                                        o.next = 13;
                                        break
                                    }
                                    return f = o.t1.value,
                                    o.next = 10,
                                    a(f);
                                case 10:
                                    s[f] = o.sent,
                                    o.next = 6;
                                    break;
                                case 13:
                                    return r.verifyingContract && s[r.verifyingContract] && (r.verifyingContract = s[r.verifyingContract]),
                                    i = c.visit(i, (function(e, r) {
                                        return "address" === e && s[r] ? s[r] : r
                                    }
                                    )),
                                    o.abrupt("return", {
                                        domain: r,
                                        value: i
                                    });
                                case 16:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    )))
                }
            }, {
                key: "getPayload",
                value: function(r, t, n) {
                    e.hashDomain(r);
                    var i = {}
                      , a = [];
                    x.forEach((function(e) {
                        var t = r[e];
                        null != t && (i[e] = P[e](t),
                        a.push({
                            name: e,
                            type: E[e]
                        }))
                    }
                    ));
                    var o = e.from(t)
                      , c = (0,
                    l.shallowCopy)(t);
                    return c.EIP712Domain ? g.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : c.EIP712Domain = a,
                    o.encode(n),
                    {
                        types: c,
                        domain: i,
                        primaryType: o.primaryType,
                        message: o.visit(n, (function(e, r) {
                            if (e.match(/^bytes(\d*)/))
                                return (0,
                                u.hexlify)((0,
                                u.arrayify)(r));
                            if (e.match(/^u?int/))
                                return s.O$.from(r).toString();
                            switch (e) {
                            case "address":
                                return r.toLowerCase();
                            case "bool":
                                return !!r;
                            case "string":
                                return "string" !== typeof r && g.throwArgumentError("invalid string", "value", r),
                                r
                            }
                            return g.throwArgumentError("unsupported type", "type", e)
                        }
                        ))
                    }
                }
            }]),
            e
        }()
    },
    42989: function(e, r, t) {
        t.r(r),
        t.d(r, {
            HDNode: function() {
                return P
            },
            defaultPath: function() {
                return S
            },
            entropyToMnemonic: function() {
                return C
            },
            getAccountPath: function() {
                return _
            },
            isValidMnemonic: function() {
                return O
            },
            mnemonicToEntropy: function() {
                return R
            },
            mnemonicToSeed: function() {
                return N
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(44247)
          , o = t(52009)
          , s = t(19560)
          , u = t(91953)
          , c = t(79716)
          , l = t(54812)
          , f = t(64760)
          , h = t(43984)
          , d = t(8427)
          , p = t(65958)
          , g = t(53771)
          , v = new (t(2735).Logger)("hdnode/5.7.0")
          , m = s.O$.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141")
          , y = (0,
        u.Y0)("Bitcoin seed")
          , b = 2147483648;
        function w(e) {
            return (1 << e) - 1 << 8 - e
        }
        function k(e) {
            return (0,
            o.hexZeroPad)((0,
            o.hexlify)(e), 32)
        }
        function A(e) {
            return a.Base58.encode((0,
            o.concat)([e, (0,
            o.hexDataSlice)((0,
            h.JQ)((0,
            h.JQ)(e)), 0, 4)]))
        }
        function E(e) {
            if (null == e)
                return g.E.en;
            if ("string" === typeof e) {
                var r = g.E[e];
                return null == r && v.throwArgumentError("unknown locale", "wordlist", e),
                r
            }
            return e
        }
        var x = {}
          , S = "m/44'/60'/0'/0/0"
          , P = function() {
            function e(r, t, i, a, s, u, c, d) {
                if ((0,
                n.Z)(this, e),
                r !== x)
                    throw new Error("HDNode constructor cannot be called directly");
                if (t) {
                    var g = new f.SigningKey(t);
                    (0,
                    l.defineReadOnly)(this, "privateKey", g.privateKey),
                    (0,
                    l.defineReadOnly)(this, "publicKey", g.compressedPublicKey)
                } else
                    (0,
                    l.defineReadOnly)(this, "privateKey", null),
                    (0,
                    l.defineReadOnly)(this, "publicKey", (0,
                    o.hexlify)(i));
                (0,
                l.defineReadOnly)(this, "parentFingerprint", a),
                (0,
                l.defineReadOnly)(this, "fingerprint", (0,
                o.hexDataSlice)((0,
                h.bP)((0,
                h.JQ)(this.publicKey)), 0, 4)),
                (0,
                l.defineReadOnly)(this, "address", (0,
                p.computeAddress)(this.publicKey)),
                (0,
                l.defineReadOnly)(this, "chainCode", s),
                (0,
                l.defineReadOnly)(this, "index", u),
                (0,
                l.defineReadOnly)(this, "depth", c),
                null == d ? ((0,
                l.defineReadOnly)(this, "mnemonic", null),
                (0,
                l.defineReadOnly)(this, "path", null)) : "string" === typeof d ? ((0,
                l.defineReadOnly)(this, "mnemonic", null),
                (0,
                l.defineReadOnly)(this, "path", d)) : ((0,
                l.defineReadOnly)(this, "mnemonic", d),
                (0,
                l.defineReadOnly)(this, "path", d.path))
            }
            return (0,
            i.Z)(e, [{
                key: "extendedKey",
                get: function() {
                    if (this.depth >= 256)
                        throw new Error("Depth too large!");
                    return A((0,
                    o.concat)([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", (0,
                    o.hexlify)(this.depth), this.parentFingerprint, (0,
                    o.hexZeroPad)((0,
                    o.hexlify)(this.index), 4), this.chainCode, null != this.privateKey ? (0,
                    o.concat)(["0x00", this.privateKey]) : this.publicKey]))
                }
            }, {
                key: "neuter",
                value: function() {
                    return new e(x,null,this.publicKey,this.parentFingerprint,this.chainCode,this.index,this.depth,this.path)
                }
            }, {
                key: "_derive",
                value: function(r) {
                    if (r > 4294967295)
                        throw new Error("invalid index - " + String(r));
                    var t = this.path;
                    t && (t += "/" + (r & ~b));
                    var n = new Uint8Array(37);
                    if (r & b) {
                        if (!this.privateKey)
                            throw new Error("cannot derive child of neutered node");
                        n.set((0,
                        o.arrayify)(this.privateKey), 1),
                        t && (t += "'")
                    } else
                        n.set((0,
                        o.arrayify)(this.publicKey));
                    for (var i = 24; i >= 0; i -= 8)
                        n[33 + (i >> 3)] = r >> 24 - i & 255;
                    var a = (0,
                    o.arrayify)((0,
                    h.Gy)(d.p.sha512, this.chainCode, n))
                      , u = a.slice(0, 32)
                      , c = a.slice(32)
                      , l = null
                      , p = null;
                    this.privateKey ? l = k(s.O$.from(u).add(this.privateKey).mod(m)) : p = new f.SigningKey((0,
                    o.hexlify)(u))._addPoint(this.publicKey);
                    var g = t
                      , v = this.mnemonic;
                    return v && (g = Object.freeze({
                        phrase: v.phrase,
                        path: t,
                        locale: v.locale || "en"
                    })),
                    new e(x,l,p,this.fingerprint,k(c),r,this.depth + 1,g)
                }
            }, {
                key: "derivePath",
                value: function(e) {
                    var r = e.split("/");
                    if (0 === r.length || "m" === r[0] && 0 !== this.depth)
                        throw new Error("invalid path - " + e);
                    "m" === r[0] && r.shift();
                    for (var t = this, n = 0; n < r.length; n++) {
                        var i = r[n];
                        if (i.match(/^[0-9]+'$/)) {
                            var a = parseInt(i.substring(0, i.length - 1));
                            if (a >= b)
                                throw new Error("invalid path index - " + i);
                            t = t._derive(b + a)
                        } else {
                            if (!i.match(/^[0-9]+$/))
                                throw new Error("invalid path component - " + i);
                            var o = parseInt(i);
                            if (o >= b)
                                throw new Error("invalid path index - " + i);
                            t = t._derive(o)
                        }
                    }
                    return t
                }
            }], [{
                key: "_fromSeed",
                value: function(r, t) {
                    var n = (0,
                    o.arrayify)(r);
                    if (n.length < 16 || n.length > 64)
                        throw new Error("invalid seed");
                    var i = (0,
                    o.arrayify)((0,
                    h.Gy)(d.p.sha512, y, n));
                    return new e(x,k(i.slice(0, 32)),null,"0x00000000",k(i.slice(32)),0,0,t)
                }
            }, {
                key: "fromMnemonic",
                value: function(r, t, n) {
                    return r = C(R(r, n = E(n)), n),
                    e._fromSeed(N(r, t), {
                        phrase: r,
                        path: "m",
                        locale: n.locale
                    })
                }
            }, {
                key: "fromSeed",
                value: function(r) {
                    return e._fromSeed(r, null)
                }
            }, {
                key: "fromExtendedKey",
                value: function(r) {
                    var t = a.Base58.decode(r);
                    82 === t.length && A(t.slice(0, 78)) === r || v.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
                    var n = t[4]
                      , i = (0,
                    o.hexlify)(t.slice(5, 9))
                      , s = parseInt((0,
                    o.hexlify)(t.slice(9, 13)).substring(2), 16)
                      , u = (0,
                    o.hexlify)(t.slice(13, 45))
                      , c = t.slice(45, 78);
                    switch ((0,
                    o.hexlify)(t.slice(0, 4))) {
                    case "0x0488b21e":
                    case "0x043587cf":
                        return new e(x,null,(0,
                        o.hexlify)(c),i,u,s,n,null);
                    case "0x0488ade4":
                    case "0x04358394 ":
                        if (0 !== c[0])
                            break;
                        return new e(x,(0,
                        o.hexlify)(c.slice(1)),null,i,u,s,n,null)
                    }
                    return v.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]")
                }
            }]),
            e
        }();
        function N(e, r) {
            r || (r = "");
            var t = (0,
            u.Y0)("mnemonic" + r, u.Uj.NFKD);
            return (0,
            c.n)((0,
            u.Y0)(e, u.Uj.NFKD), t, 2048, 64, "sha512")
        }
        function R(e, r) {
            r = E(r),
            v.checkNormalize();
            var t = r.split(e);
            if (t.length % 3 !== 0)
                throw new Error("invalid mnemonic");
            for (var n = (0,
            o.arrayify)(new Uint8Array(Math.ceil(11 * t.length / 8))), i = 0, a = 0; a < t.length; a++) {
                var s = r.getWordIndex(t[a].normalize("NFKD"));
                if (-1 === s)
                    throw new Error("invalid mnemonic");
                for (var u = 0; u < 11; u++)
                    s & 1 << 10 - u && (n[i >> 3] |= 1 << 7 - i % 8),
                    i++
            }
            var c = 32 * t.length / 3
              , l = w(t.length / 3);
            if (((0,
            o.arrayify)((0,
            h.JQ)(n.slice(0, c / 8)))[0] & l) !== (n[n.length - 1] & l))
                throw new Error("invalid checksum");
            return (0,
            o.hexlify)(n.slice(0, c / 8))
        }
        function C(e, r) {
            if (r = E(r),
            (e = (0,
            o.arrayify)(e)).length % 4 !== 0 || e.length < 16 || e.length > 32)
                throw new Error("invalid entropy");
            for (var t = [0], n = 11, i = 0; i < e.length; i++)
                n > 8 ? (t[t.length - 1] <<= 8,
                t[t.length - 1] |= e[i],
                n -= 8) : (t[t.length - 1] <<= n,
                t[t.length - 1] |= e[i] >> 8 - n,
                t.push(e[i] & (1 << 8 - n) - 1),
                n += 3);
            var a = e.length / 4
              , s = (0,
            o.arrayify)((0,
            h.JQ)(e))[0] & w(a);
            return t[t.length - 1] <<= a,
            t[t.length - 1] |= s >> 8 - a,
            r.join(t.map((function(e) {
                return r.getWord(e)
            }
            )))
        }
        function O(e, r) {
            try {
                return R(e, r),
                !0
            } catch (t) {}
            return !1
        }
        function _(e) {
            return ("number" !== typeof e || e < 0 || e >= b || e % 1) && v.throwArgumentError("invalid account index", "index", e),
            "m/44'/60'/".concat(e, "'/0/0")
        }
    },
    25779: function(e, r, t) {
        t.d(r, {
            i: function() {
                return n
            }
        });
        var n = "json-wallets/5.7.0"
    },
    56216: function(e, r, t) {
        t.r(r),
        t.d(r, {
            decryptCrowdsale: function() {
                return w
            },
            decryptJsonWallet: function() {
                return E
            },
            decryptJsonWalletSync: function() {
                return x
            },
            decryptKeystore: function() {
                return A.pe
            },
            decryptKeystoreSync: function() {
                return A.hb
            },
            encryptKeystore: function() {
                return A.HI
            },
            getJsonWalletAddress: function() {
                return k.Rb
            },
            isCrowdsaleWallet: function() {
                return k.LW
            },
            isKeystoreWallet: function() {
                return k.aO
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(60136)
          , o = t(29388)
          , s = t(37532)
          , u = t.n(s)
          , c = t(28552)
          , l = t(52009)
          , f = t(11291)
          , h = t(79716)
          , d = t(91953)
          , p = t(54812)
          , g = t(2735)
          , v = t(25779)
          , m = t(27211)
          , y = new g.Logger(v.i)
          , b = function(e) {
            (0,
            a.Z)(t, e);
            var r = (0,
            o.Z)(t);
            function t() {
                return (0,
                n.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            i.Z)(t, [{
                key: "isCrowdsaleAccount",
                value: function(e) {
                    return !(!e || !e._isCrowdsaleAccount)
                }
            }]),
            t
        }(p.Description);
        function w(e, r) {
            var t = JSON.parse(e);
            r = (0,
            m.Ij)(r);
            var n = (0,
            c.getAddress)((0,
            m.gx)(t, "ethaddr"))
              , i = (0,
            m.p3)((0,
            m.gx)(t, "encseed"));
            i && i.length % 16 === 0 || y.throwArgumentError("invalid encseed", "json", e);
            for (var a = (0,
            l.arrayify)((0,
            h.n)(r, r, 2e3, 32, "sha256")).slice(0, 16), o = i.slice(0, 16), s = i.slice(16), p = new (u().ModeOfOperation.cbc)(a,o), g = u().padding.pkcs7.strip((0,
            l.arrayify)(p.decrypt(s))), v = "", w = 0; w < g.length; w++)
                v += String.fromCharCode(g[w]);
            var k = (0,
            d.Y0)(v)
              , A = (0,
            f.keccak256)(k);
            return new b({
                _isCrowdsaleAccount: !0,
                address: n,
                privateKey: A
            })
        }
        var k = t(9764)
          , A = t(2691);
        function E(e, r, t) {
            if ((0,
            k.LW)(e)) {
                t && t(0);
                var n = w(e, r);
                return t && t(1),
                Promise.resolve(n)
            }
            return (0,
            k.aO)(e) ? (0,
            A.pe)(e, r, t) : Promise.reject(new Error("invalid JSON wallet"))
        }
        function x(e, r) {
            if ((0,
            k.LW)(e))
                return w(e, r);
            if ((0,
            k.aO)(e))
                return (0,
                A.hb)(e, r);
            throw new Error("invalid JSON wallet")
        }
    },
    9764: function(e, r, t) {
        t.d(r, {
            LW: function() {
                return i
            },
            Rb: function() {
                return o
            },
            aO: function() {
                return a
            }
        });
        var n = t(28552);
        function i(e) {
            var r = null;
            try {
                r = JSON.parse(e)
            } catch (t) {
                return !1
            }
            return r.encseed && r.ethaddr
        }
        function a(e) {
            var r = null;
            try {
                r = JSON.parse(e)
            } catch (t) {
                return !1
            }
            return !(!r.version || parseInt(r.version) !== r.version || 3 !== parseInt(r.version))
        }
        function o(e) {
            if (i(e))
                try {
                    return (0,
                    n.getAddress)(JSON.parse(e).ethaddr)
                } catch (r) {
                    return null
                }
            if (a(e))
                try {
                    return (0,
                    n.getAddress)(JSON.parse(e).address)
                } catch (r) {
                    return null
                }
            return null
        }
    },
    2691: function(e, r, t) {
        t.d(r, {
            HI: function() {
                return I
            },
            hb: function() {
                return _
            },
            pe: function() {
                return T
            }
        });
        var n = t(74165)
          , i = t(15671)
          , a = t(43144)
          , o = t(60136)
          , s = t(29388)
          , u = t(37532)
          , c = t.n(u)
          , l = t(46125)
          , f = t.n(l)
          , h = t(28552)
          , d = t(52009)
          , p = t(42989)
          , g = t(11291)
          , v = t(79716)
          , m = t(75722)
          , y = t(54812)
          , b = t(65958)
          , w = t(27211)
          , k = t(2735)
          , A = t(25779)
          , E = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , x = new k.Logger(A.i);
        function S(e) {
            return null != e && e.mnemonic && e.mnemonic.phrase
        }
        var P = function(e) {
            (0,
            o.Z)(t, e);
            var r = (0,
            s.Z)(t);
            function t() {
                return (0,
                i.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            a.Z)(t, [{
                key: "isKeystoreAccount",
                value: function(e) {
                    return !(!e || !e._isKeystoreAccount)
                }
            }]),
            t
        }(y.Description);
        function N(e, r) {
            var t = (0,
            w.p3)((0,
            w.gx)(e, "crypto/ciphertext"));
            if ((0,
            d.hexlify)((0,
            g.keccak256)((0,
            d.concat)([r.slice(16, 32), t]))).substring(2) !== (0,
            w.gx)(e, "crypto/mac").toLowerCase())
                throw new Error("invalid password");
            var n = function(e, r, t) {
                if ("aes-128-ctr" === (0,
                w.gx)(e, "crypto/cipher")) {
                    var n = (0,
                    w.p3)((0,
                    w.gx)(e, "crypto/cipherparams/iv"))
                      , i = new (c().Counter)(n)
                      , a = new (c().ModeOfOperation.ctr)(r,i);
                    return (0,
                    d.arrayify)(a.decrypt(t))
                }
                return null
            }(e, r.slice(0, 16), t);
            n || x.throwError("unsupported cipher", k.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "decrypt"
            });
            var i = r.slice(32, 64)
              , a = (0,
            b.computeAddress)(n);
            if (e.address) {
                var o = e.address.toLowerCase();
                if ("0x" !== o.substring(0, 2) && (o = "0x" + o),
                (0,
                h.getAddress)(o) !== a)
                    throw new Error("address mismatch")
            }
            var s = {
                _isKeystoreAccount: !0,
                address: a,
                privateKey: (0,
                d.hexlify)(n)
            };
            if ("0.1" === (0,
            w.gx)(e, "x-ethers/version")) {
                var u = (0,
                w.p3)((0,
                w.gx)(e, "x-ethers/mnemonicCiphertext"))
                  , l = (0,
                w.p3)((0,
                w.gx)(e, "x-ethers/mnemonicCounter"))
                  , f = new (c().Counter)(l)
                  , v = new (c().ModeOfOperation.ctr)(i,f)
                  , m = (0,
                w.gx)(e, "x-ethers/path") || p.defaultPath
                  , y = (0,
                w.gx)(e, "x-ethers/locale") || "en"
                  , A = (0,
                d.arrayify)(v.decrypt(u));
                try {
                    var E = (0,
                    p.entropyToMnemonic)(A, y)
                      , S = p.HDNode.fromMnemonic(E, null, y).derivePath(m);
                    if (S.privateKey != s.privateKey)
                        throw new Error("mnemonic mismatch");
                    s.mnemonic = S.mnemonic
                } catch (N) {
                    if (N.code !== k.Logger.errors.INVALID_ARGUMENT || "wordlist" !== N.argument)
                        throw N
                }
            }
            return new P(s)
        }
        function R(e, r, t, n, i) {
            return (0,
            d.arrayify)((0,
            v.n)(e, r, t, n, i))
        }
        function C(e, r, t, n, i) {
            return Promise.resolve(R(e, r, t, n, i))
        }
        function O(e, r, t, n, i) {
            var a = (0,
            w.Ij)(r)
              , o = (0,
            w.gx)(e, "crypto/kdf");
            if (o && "string" === typeof o) {
                var s = function(e, r) {
                    return x.throwArgumentError("invalid key-derivation function parameters", e, r)
                };
                if ("scrypt" === o.toLowerCase()) {
                    var u = (0,
                    w.p3)((0,
                    w.gx)(e, "crypto/kdfparams/salt"))
                      , c = parseInt((0,
                    w.gx)(e, "crypto/kdfparams/n"))
                      , l = parseInt((0,
                    w.gx)(e, "crypto/kdfparams/r"))
                      , f = parseInt((0,
                    w.gx)(e, "crypto/kdfparams/p"));
                    c && l && f || s("kdf", o),
                    0 !== (c & c - 1) && s("N", c);
                    var h = parseInt((0,
                    w.gx)(e, "crypto/kdfparams/dklen"));
                    return 32 !== h && s("dklen", h),
                    n(a, u, c, l, f, 64, i)
                }
                if ("pbkdf2" === o.toLowerCase()) {
                    var d = (0,
                    w.p3)((0,
                    w.gx)(e, "crypto/kdfparams/salt"))
                      , p = null
                      , g = (0,
                    w.gx)(e, "crypto/kdfparams/prf");
                    "hmac-sha256" === g ? p = "sha256" : "hmac-sha512" === g ? p = "sha512" : s("prf", g);
                    var v = parseInt((0,
                    w.gx)(e, "crypto/kdfparams/c"))
                      , m = parseInt((0,
                    w.gx)(e, "crypto/kdfparams/dklen"));
                    return 32 !== m && s("dklen", m),
                    t(a, d, v, m, p)
                }
            }
            return x.throwArgumentError("unsupported key-derivation function", "kdf", o)
        }
        function _(e, r) {
            var t = JSON.parse(e);
            return N(t, O(t, r, R, f().syncScrypt))
        }
        function T(e, r, t) {
            return E(this, void 0, void 0, (0,
            n.Z)().mark((function i() {
                var a, o;
                return (0,
                n.Z)().wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return a = JSON.parse(e),
                            n.next = 3,
                            O(a, r, C, f().scrypt, t);
                        case 3:
                            return o = n.sent,
                            n.abrupt("return", N(a, o));
                        case 5:
                        case "end":
                            return n.stop()
                        }
                }
                ), i)
            }
            )))
        }
        function I(e, r, t, n) {
            try {
                if ((0,
                h.getAddress)(e.address) !== (0,
                b.computeAddress)(e.privateKey))
                    throw new Error("address/privateKey mismatch");
                if (S(e)) {
                    var i = e.mnemonic;
                    if (p.HDNode.fromMnemonic(i.phrase, null, i.locale).derivePath(i.path || p.defaultPath).privateKey != e.privateKey)
                        throw new Error("mnemonic mismatch")
                }
            } catch (R) {
                return Promise.reject(R)
            }
            "function" !== typeof t || n || (n = t,
            t = {}),
            t || (t = {});
            var a = (0,
            d.arrayify)(e.privateKey)
              , o = (0,
            w.Ij)(r)
              , s = null
              , u = null
              , l = null;
            if (S(e)) {
                var v = e.mnemonic;
                s = (0,
                d.arrayify)((0,
                p.mnemonicToEntropy)(v.phrase, v.locale || "en")),
                u = v.path || p.defaultPath,
                l = v.locale || "en"
            }
            var y = t.client;
            y || (y = "ethers.js");
            var k = null;
            k = t.salt ? (0,
            d.arrayify)(t.salt) : (0,
            m.O)(32);
            var A = null;
            if (t.iv) {
                if (16 !== (A = (0,
                d.arrayify)(t.iv)).length)
                    throw new Error("invalid iv")
            } else
                A = (0,
                m.O)(16);
            var E = null;
            if (t.uuid) {
                if (16 !== (E = (0,
                d.arrayify)(t.uuid)).length)
                    throw new Error("invalid uuid")
            } else
                E = (0,
                m.O)(16);
            var x = 1 << 17
              , P = 8
              , N = 1;
            return t.scrypt && (t.scrypt.N && (x = t.scrypt.N),
            t.scrypt.r && (P = t.scrypt.r),
            t.scrypt.p && (N = t.scrypt.p)),
            f().scrypt(o, k, x, P, N, 64, n).then((function(r) {
                var t = (r = (0,
                d.arrayify)(r)).slice(0, 16)
                  , n = r.slice(16, 32)
                  , i = r.slice(32, 64)
                  , o = new (c().Counter)(A)
                  , f = new (c().ModeOfOperation.ctr)(t,o)
                  , h = (0,
                d.arrayify)(f.encrypt(a))
                  , p = (0,
                g.keccak256)((0,
                d.concat)([n, h]))
                  , v = {
                    address: e.address.substring(2).toLowerCase(),
                    id: (0,
                    w.EH)(E),
                    version: 3,
                    crypto: {
                        cipher: "aes-128-ctr",
                        cipherparams: {
                            iv: (0,
                            d.hexlify)(A).substring(2)
                        },
                        ciphertext: (0,
                        d.hexlify)(h).substring(2),
                        kdf: "scrypt",
                        kdfparams: {
                            salt: (0,
                            d.hexlify)(k).substring(2),
                            n: x,
                            dklen: 32,
                            p: N,
                            r: P
                        },
                        mac: p.substring(2)
                    }
                };
                if (s) {
                    var b = (0,
                    m.O)(16)
                      , S = new (c().Counter)(b)
                      , R = new (c().ModeOfOperation.ctr)(i,S)
                      , C = (0,
                    d.arrayify)(R.encrypt(s))
                      , O = new Date
                      , _ = O.getUTCFullYear() + "-" + (0,
                    w.VP)(O.getUTCMonth() + 1, 2) + "-" + (0,
                    w.VP)(O.getUTCDate(), 2) + "T" + (0,
                    w.VP)(O.getUTCHours(), 2) + "-" + (0,
                    w.VP)(O.getUTCMinutes(), 2) + "-" + (0,
                    w.VP)(O.getUTCSeconds(), 2) + ".0Z";
                    v["x-ethers"] = {
                        client: y,
                        gethFilename: "UTC--" + _ + "--" + v.address,
                        mnemonicCounter: (0,
                        d.hexlify)(b).substring(2),
                        mnemonicCiphertext: (0,
                        d.hexlify)(C).substring(2),
                        path: u,
                        locale: l,
                        version: "0.1"
                    }
                }
                return JSON.stringify(v)
            }
            ))
        }
    },
    27211: function(e, r, t) {
        t.d(r, {
            EH: function() {
                return c
            },
            Ij: function() {
                return s
            },
            VP: function() {
                return o
            },
            gx: function() {
                return u
            },
            p3: function() {
                return a
            }
        });
        var n = t(52009)
          , i = t(91953);
        function a(e) {
            return "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e),
            (0,
            n.arrayify)(e)
        }
        function o(e, r) {
            for (e = String(e); e.length < r; )
                e = "0" + e;
            return e
        }
        function s(e) {
            return "string" === typeof e ? (0,
            i.Y0)(e, i.Uj.NFKC) : (0,
            n.arrayify)(e)
        }
        function u(e, r) {
            for (var t = e, n = r.toLowerCase().split("/"), i = 0; i < n.length; i++) {
                var a = null;
                for (var o in t)
                    if (o.toLowerCase() === n[i]) {
                        a = t[o];
                        break
                    }
                if (null === a)
                    return null;
                t = a
            }
            return t
        }
        function c(e) {
            var r = (0,
            n.arrayify)(e);
            r[6] = 15 & r[6] | 64,
            r[8] = 63 & r[8] | 128;
            var t = (0,
            n.hexlify)(r);
            return [t.substring(2, 10), t.substring(10, 14), t.substring(14, 18), t.substring(18, 22), t.substring(22, 34)].join("-")
        }
    },
    11291: function(e, r, t) {
        t.r(r),
        t.d(r, {
            keccak256: function() {
                return o
            }
        });
        var n = t(37676)
          , i = t.n(n)
          , a = t(52009);
        function o(e) {
            return "0x" + i().keccak_256((0,
            a.arrayify)(e))
        }
    },
    2735: function(e, r, t) {
        t.r(r),
        t.d(r, {
            ErrorCode: function() {
                return f
            },
            LogLevel: function() {
                return l
            },
            Logger: function() {
                return p
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = !1
          , o = !1
          , s = {
            debug: 1,
            default: 2,
            info: 2,
            warning: 3,
            error: 4,
            off: 5
        }
          , u = s.default
          , c = null;
        var l, f, h = function() {
            try {
                var e = [];
                if (["NFD", "NFC", "NFKD", "NFKC"].forEach((function(r) {
                    try {
                        if ("test" !== "test".normalize(r))
                            throw new Error("bad normalize")
                    } catch (t) {
                        e.push(r)
                    }
                }
                )),
                e.length)
                    throw new Error("missing " + e.join(", "));
                if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
                    throw new Error("broken implementation")
            } catch (r) {
                return r.message
            }
            return null
        }();
        !function(e) {
            e.DEBUG = "DEBUG",
            e.INFO = "INFO",
            e.WARNING = "WARNING",
            e.ERROR = "ERROR",
            e.OFF = "OFF"
        }(l || (l = {})),
        function(e) {
            e.UNKNOWN_ERROR = "UNKNOWN_ERROR",
            e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED",
            e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION",
            e.NETWORK_ERROR = "NETWORK_ERROR",
            e.SERVER_ERROR = "SERVER_ERROR",
            e.TIMEOUT = "TIMEOUT",
            e.BUFFER_OVERRUN = "BUFFER_OVERRUN",
            e.NUMERIC_FAULT = "NUMERIC_FAULT",
            e.MISSING_NEW = "MISSING_NEW",
            e.INVALID_ARGUMENT = "INVALID_ARGUMENT",
            e.MISSING_ARGUMENT = "MISSING_ARGUMENT",
            e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT",
            e.CALL_EXCEPTION = "CALL_EXCEPTION",
            e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS",
            e.NONCE_EXPIRED = "NONCE_EXPIRED",
            e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED",
            e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT",
            e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED",
            e.ACTION_REJECTED = "ACTION_REJECTED"
        }(f || (f = {}));
        var d = "0123456789abcdef"
          , p = function() {
            function e(r) {
                (0,
                n.Z)(this, e),
                Object.defineProperty(this, "version", {
                    enumerable: !0,
                    value: r,
                    writable: !1
                })
            }
            return (0,
            i.Z)(e, [{
                key: "_log",
                value: function(e, r) {
                    var t = e.toLowerCase();
                    null == s[t] && this.throwArgumentError("invalid log level name", "logLevel", e),
                    u > s[t] || console.log.apply(console, r)
                }
            }, {
                key: "debug",
                value: function() {
                    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
                        t[n] = arguments[n];
                    this._log(e.levels.DEBUG, t)
                }
            }, {
                key: "info",
                value: function() {
                    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
                        t[n] = arguments[n];
                    this._log(e.levels.INFO, t)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
                        t[n] = arguments[n];
                    this._log(e.levels.WARNING, t)
                }
            }, {
                key: "makeError",
                value: function(r, t, n) {
                    if (o)
                        return this.makeError("censored error", t, {});
                    t || (t = e.errors.UNKNOWN_ERROR),
                    n || (n = {});
                    var i = [];
                    Object.keys(n).forEach((function(e) {
                        var r = n[e];
                        try {
                            if (r instanceof Uint8Array) {
                                for (var t = "", a = 0; a < r.length; a++)
                                    t += d[r[a] >> 4],
                                    t += d[15 & r[a]];
                                i.push(e + "=Uint8Array(0x" + t + ")")
                            } else
                                i.push(e + "=" + JSON.stringify(r))
                        } catch (c) {
                            i.push(e + "=" + JSON.stringify(n[e].toString()))
                        }
                    }
                    )),
                    i.push("code=".concat(t)),
                    i.push("version=".concat(this.version));
                    var a = r
                      , s = "";
                    switch (t) {
                    case f.NUMERIC_FAULT:
                        s = "NUMERIC_FAULT";
                        var u = r;
                        switch (u) {
                        case "overflow":
                        case "underflow":
                        case "division-by-zero":
                            s += "-" + u;
                            break;
                        case "negative-power":
                        case "negative-width":
                            s += "-unsupported";
                            break;
                        case "unbound-bitwise-result":
                            s += "-unbound-result"
                        }
                        break;
                    case f.CALL_EXCEPTION:
                    case f.INSUFFICIENT_FUNDS:
                    case f.MISSING_NEW:
                    case f.NONCE_EXPIRED:
                    case f.REPLACEMENT_UNDERPRICED:
                    case f.TRANSACTION_REPLACED:
                    case f.UNPREDICTABLE_GAS_LIMIT:
                        s = t
                    }
                    s && (r += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
                    i.length && (r += " (" + i.join(", ") + ")");
                    var c = new Error(r);
                    return c.reason = a,
                    c.code = t,
                    Object.keys(n).forEach((function(e) {
                        c[e] = n[e]
                    }
                    )),
                    c
                }
            }, {
                key: "throwError",
                value: function(e, r, t) {
                    throw this.makeError(e, r, t)
                }
            }, {
                key: "throwArgumentError",
                value: function(r, t, n) {
                    return this.throwError(r, e.errors.INVALID_ARGUMENT, {
                        argument: t,
                        value: n
                    })
                }
            }, {
                key: "assert",
                value: function(e, r, t, n) {
                    e || this.throwError(r, t, n)
                }
            }, {
                key: "assertArgument",
                value: function(e, r, t, n) {
                    e || this.throwArgumentError(r, t, n)
                }
            }, {
                key: "checkNormalize",
                value: function(r) {
                    null == r && (r = "platform missing String.prototype.normalize"),
                    h && this.throwError("platform missing String.prototype.normalize", e.errors.UNSUPPORTED_OPERATION, {
                        operation: "String.prototype.normalize",
                        form: h
                    })
                }
            }, {
                key: "checkSafeUint53",
                value: function(r, t) {
                    "number" === typeof r && (null == t && (t = "value not safe"),
                    (r < 0 || r >= 9007199254740991) && this.throwError(t, e.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "out-of-safe-range",
                        value: r
                    }),
                    r % 1 && this.throwError(t, e.errors.NUMERIC_FAULT, {
                        operation: "checkSafeInteger",
                        fault: "non-integer",
                        value: r
                    }))
                }
            }, {
                key: "checkArgumentCount",
                value: function(r, t, n) {
                    n = n ? ": " + n : "",
                    r < t && this.throwError("missing argument" + n, e.errors.MISSING_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    }),
                    r > t && this.throwError("too many arguments" + n, e.errors.UNEXPECTED_ARGUMENT, {
                        count: r,
                        expectedCount: t
                    })
                }
            }, {
                key: "checkNew",
                value: function(r, t) {
                    r !== Object && null != r || this.throwError("missing new", e.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
            }, {
                key: "checkAbstract",
                value: function(r, t) {
                    r === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", e.errors.UNSUPPORTED_OPERATION, {
                        name: r.name,
                        operation: "new"
                    }) : r !== Object && null != r || this.throwError("missing new", e.errors.MISSING_NEW, {
                        name: t.name
                    })
                }
            }], [{
                key: "globalLogger",
                value: function() {
                    return c || (c = new e("logger/5.7.0")),
                    c
                }
            }, {
                key: "setCensorship",
                value: function(r, t) {
                    if (!r && t && this.globalLogger().throwError("cannot permanently disable censorship", e.errors.UNSUPPORTED_OPERATION, {
                        operation: "setCensorship"
                    }),
                    a) {
                        if (!r)
                            return;
                        this.globalLogger().throwError("error censorship permanent", e.errors.UNSUPPORTED_OPERATION, {
                            operation: "setCensorship"
                        })
                    }
                    o = !!r,
                    a = !!t
                }
            }, {
                key: "setLogLevel",
                value: function(r) {
                    var t = s[r.toLowerCase()];
                    null != t ? u = t : e.globalLogger().warn("invalid log level - " + r)
                }
            }, {
                key: "from",
                value: function(r) {
                    return new e(r)
                }
            }]),
            e
        }();
        p.errors = f,
        p.levels = l
    },
    88133: function(e, r, t) {
        t.d(r, {
            H: function() {
                return l
            }
        });
        var n = new (t(2735).Logger)("networks/5.7.1");
        function i(e) {
            var r = function(r, t) {
                null == t && (t = {});
                var n = [];
                if (r.InfuraProvider && "-" !== t.infura)
                    try {
                        n.push(new r.InfuraProvider(e,t.infura))
                    } catch (s) {}
                if (r.EtherscanProvider && "-" !== t.etherscan)
                    try {
                        n.push(new r.EtherscanProvider(e,t.etherscan))
                    } catch (s) {}
                if (r.AlchemyProvider && "-" !== t.alchemy)
                    try {
                        n.push(new r.AlchemyProvider(e,t.alchemy))
                    } catch (s) {}
                if (r.PocketProvider && "-" !== t.pocket) {
                    try {
                        var i = new r.PocketProvider(e,t.pocket);
                        i.network && -1 === ["goerli", "ropsten", "rinkeby", "sepolia"].indexOf(i.network.name) && n.push(i)
                    } catch (s) {}
                }
                if (r.CloudflareProvider && "-" !== t.cloudflare)
                    try {
                        n.push(new r.CloudflareProvider(e))
                    } catch (s) {}
                if (r.AnkrProvider && "-" !== t.ankr)
                    try {
                        var a = new r.AnkrProvider(e,t.ankr);
                        a.network && -1 === ["ropsten"].indexOf(a.network.name) && n.push(a)
                    } catch (s) {}
                if (0 === n.length)
                    return null;
                if (r.FallbackProvider) {
                    var o = 1;
                    return null != t.quorum ? o = t.quorum : "homestead" === e && (o = 2),
                    new r.FallbackProvider(n,o)
                }
                return n[0]
            };
            return r.renetwork = function(e) {
                return i(e)
            }
            ,
            r
        }
        function a(e, r) {
            var t = function(t, n) {
                return t.JsonRpcProvider ? new t.JsonRpcProvider(e,r) : null
            };
            return t.renetwork = function(r) {
                return a(e, r)
            }
            ,
            t
        }
        var o = {
            chainId: 1,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "homestead",
            _defaultProvider: i("homestead")
        }
          , s = {
            chainId: 3,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "ropsten",
            _defaultProvider: i("ropsten")
        }
          , u = {
            chainId: 63,
            name: "classicMordor",
            _defaultProvider: a("https://www.ethercluster.com/mordor", "classicMordor")
        }
          , c = {
            unspecified: {
                chainId: 0,
                name: "unspecified"
            },
            homestead: o,
            mainnet: o,
            morden: {
                chainId: 2,
                name: "morden"
            },
            ropsten: s,
            testnet: s,
            rinkeby: {
                chainId: 4,
                ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                name: "rinkeby",
                _defaultProvider: i("rinkeby")
            },
            kovan: {
                chainId: 42,
                name: "kovan",
                _defaultProvider: i("kovan")
            },
            goerli: {
                chainId: 5,
                ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                name: "goerli",
                _defaultProvider: i("goerli")
            },
            kintsugi: {
                chainId: 1337702,
                name: "kintsugi"
            },
            sepolia: {
                chainId: 11155111,
                name: "sepolia",
                _defaultProvider: i("sepolia")
            },
            classic: {
                chainId: 61,
                name: "classic",
                _defaultProvider: a("https://www.ethercluster.com/etc", "classic")
            },
            classicMorden: {
                chainId: 62,
                name: "classicMorden"
            },
            classicMordor: u,
            classicTestnet: u,
            classicKotti: {
                chainId: 6,
                name: "classicKotti",
                _defaultProvider: a("https://www.ethercluster.com/kotti", "classicKotti")
            },
            xdai: {
                chainId: 100,
                name: "xdai"
            },
            matic: {
                chainId: 137,
                name: "matic",
                _defaultProvider: i("matic")
            },
            maticmum: {
                chainId: 80001,
                name: "maticmum"
            },
            optimism: {
                chainId: 10,
                name: "optimism",
                _defaultProvider: i("optimism")
            },
            "optimism-kovan": {
                chainId: 69,
                name: "optimism-kovan"
            },
            "optimism-goerli": {
                chainId: 420,
                name: "optimism-goerli"
            },
            arbitrum: {
                chainId: 42161,
                name: "arbitrum"
            },
            "arbitrum-rinkeby": {
                chainId: 421611,
                name: "arbitrum-rinkeby"
            },
            "arbitrum-goerli": {
                chainId: 421613,
                name: "arbitrum-goerli"
            },
            bnb: {
                chainId: 56,
                name: "bnb"
            },
            bnbt: {
                chainId: 97,
                name: "bnbt"
            }
        };
        function l(e) {
            if (null == e)
                return null;
            if ("number" === typeof e) {
                for (var r in c) {
                    var t = c[r];
                    if (t.chainId === e)
                        return {
                            name: t.name,
                            chainId: t.chainId,
                            ensAddress: t.ensAddress || null,
                            _defaultProvider: t._defaultProvider || null
                        }
                }
                return {
                    chainId: e,
                    name: "unknown"
                }
            }
            if ("string" === typeof e) {
                var i = c[e];
                return null == i ? null : {
                    name: i.name,
                    chainId: i.chainId,
                    ensAddress: i.ensAddress,
                    _defaultProvider: i._defaultProvider || null
                }
            }
            var a = c[e.name];
            if (!a)
                return "number" !== typeof e.chainId && n.throwArgumentError("invalid network chainId", "network", e),
                e;
            0 !== e.chainId && e.chainId !== a.chainId && n.throwArgumentError("network chainId mismatch", "network", e);
            var o, s = e._defaultProvider || null;
            return null == s && a._defaultProvider && (s = (o = a._defaultProvider) && "function" === typeof o.renetwork ? a._defaultProvider.renetwork(e) : a._defaultProvider),
            {
                name: e.name,
                chainId: a.chainId,
                ensAddress: e.ensAddress || a.ensAddress || null,
                _defaultProvider: s
            }
        }
    },
    79716: function(e, r, t) {
        t.d(r, {
            n: function() {
                return a
            }
        });
        var n = t(52009)
          , i = t(43984);
        function a(e, r, t, a, o) {
            var s;
            e = (0,
            n.arrayify)(e),
            r = (0,
            n.arrayify)(r);
            var u, c, l = 1, f = new Uint8Array(a), h = new Uint8Array(r.length + 4);
            h.set(r);
            for (var d = 1; d <= l; d++) {
                h[r.length] = d >> 24 & 255,
                h[r.length + 1] = d >> 16 & 255,
                h[r.length + 2] = d >> 8 & 255,
                h[r.length + 3] = 255 & d;
                var p = (0,
                n.arrayify)((0,
                i.Gy)(o, e, h));
                s || (s = p.length,
                c = new Uint8Array(s),
                u = a - ((l = Math.ceil(a / s)) - 1) * s),
                c.set(p);
                for (var g = 1; g < t; g++) {
                    p = (0,
                    n.arrayify)((0,
                    i.Gy)(o, e, p));
                    for (var v = 0; v < s; v++)
                        c[v] ^= p[v]
                }
                var m = (d - 1) * s
                  , y = d === l ? u : s;
                f.set((0,
                n.arrayify)(c).slice(0, y), m)
            }
            return (0,
            n.hexlify)(f)
        }
    },
    54812: function(e, r, t) {
        t.r(r),
        t.d(r, {
            Description: function() {
                return y
            },
            checkProperties: function() {
                return h
            },
            deepCopy: function() {
                return m
            },
            defineReadOnly: function() {
                return c
            },
            getStatic: function() {
                return l
            },
            resolveProperties: function() {
                return f
            },
            shallowCopy: function() {
                return d
            }
        });
        var n = t(43144)
          , i = t(15671)
          , a = t(74165)
          , o = t(2735)
          , s = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , u = new o.Logger("properties/5.7.0");
        function c(e, r, t) {
            Object.defineProperty(e, r, {
                enumerable: !0,
                value: t,
                writable: !1
            })
        }
        function l(e, r) {
            for (var t = 0; t < 32; t++) {
                if (e[r])
                    return e[r];
                if (!e.prototype || "object" !== typeof e.prototype)
                    break;
                e = Object.getPrototypeOf(e.prototype).constructor
            }
            return null
        }
        function f(e) {
            return s(this, void 0, void 0, (0,
            a.Z)().mark((function r() {
                var t, n;
                return (0,
                a.Z)().wrap((function(r) {
                    for (; ; )
                        switch (r.prev = r.next) {
                        case 0:
                            return t = Object.keys(e).map((function(r) {
                                var t = e[r];
                                return Promise.resolve(t).then((function(e) {
                                    return {
                                        key: r,
                                        value: e
                                    }
                                }
                                ))
                            }
                            )),
                            r.next = 3,
                            Promise.all(t);
                        case 3:
                            return n = r.sent,
                            r.abrupt("return", n.reduce((function(e, r) {
                                return e[r.key] = r.value,
                                e
                            }
                            ), {}));
                        case 5:
                        case "end":
                            return r.stop()
                        }
                }
                ), r)
            }
            )))
        }
        function h(e, r) {
            e && "object" === typeof e || u.throwArgumentError("invalid object", "object", e),
            Object.keys(e).forEach((function(t) {
                r[t] || u.throwArgumentError("invalid object key - " + t, "transaction:" + t, e)
            }
            ))
        }
        function d(e) {
            var r = {};
            for (var t in e)
                r[t] = e[t];
            return r
        }
        var p = {
            bigint: !0,
            boolean: !0,
            function: !0,
            number: !0,
            string: !0
        };
        function g(e) {
            if (void 0 === e || null === e || p[typeof e])
                return !0;
            if (Array.isArray(e) || "object" === typeof e) {
                if (!Object.isFrozen(e))
                    return !1;
                for (var r = Object.keys(e), t = 0; t < r.length; t++) {
                    var n = null;
                    try {
                        n = e[r[t]]
                    } catch (i) {
                        continue
                    }
                    if (!g(n))
                        return !1
                }
                return !0
            }
            return u.throwArgumentError("Cannot deepCopy ".concat(typeof e), "object", e)
        }
        function v(e) {
            if (g(e))
                return e;
            if (Array.isArray(e))
                return Object.freeze(e.map((function(e) {
                    return m(e)
                }
                )));
            if ("object" === typeof e) {
                var r = {};
                for (var t in e) {
                    var n = e[t];
                    void 0 !== n && c(r, t, m(n))
                }
                return r
            }
            return u.throwArgumentError("Cannot deepCopy ".concat(typeof e), "object", e)
        }
        function m(e) {
            return v(e)
        }
        var y = (0,
        n.Z)((function e(r) {
            for (var t in (0,
            i.Z)(this, e),
            r)
                this[t] = m(r[t])
        }
        ))
    },
    49862: function(e, r, t) {
        t.d(r, {
            i: function() {
                return n
            }
        });
        var n = "providers/5.7.2"
    },
    5341: function(e, r, t) {
        t.d(r, {
            H2: function() {
                return z
            },
            Zk: function() {
                return W
            }
        });
        var n = t(97326)
          , i = t(60136)
          , a = t(29388)
          , o = t(74165)
          , s = t(15671)
          , u = t(43144)
          , c = t(15157)
          , l = t(48853)
          , f = t(44247)
          , h = t(19560)
          , d = t(52009)
          , p = t(44160)
          , g = t(68565)
          , v = t(88133)
          , m = t(54812)
          , y = t(43984)
          , b = t(91953)
          , w = t(28786)
          , k = t(65109)
          , A = t.n(k)
          , E = t(2735)
          , x = t(49862)
          , S = t(23134)
          , P = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , N = new E.Logger(x.i);
        function R(e) {
            return null == e ? "null" : (32 !== (0,
            d.hexDataLength)(e) && N.throwArgumentError("invalid topic", "topic", e),
            e.toLowerCase())
        }
        function C(e) {
            for (e = e.slice(); e.length > 0 && null == e[e.length - 1]; )
                e.pop();
            return e.map((function(e) {
                if (Array.isArray(e)) {
                    var r = {};
                    e.forEach((function(e) {
                        r[R(e)] = !0
                    }
                    ));
                    var t = Object.keys(r);
                    return t.sort(),
                    t.join("|")
                }
                return R(e)
            }
            )).join("&")
        }
        function O(e) {
            if ("string" === typeof e) {
                if (e = e.toLowerCase(),
                32 === (0,
                d.hexDataLength)(e))
                    return "tx:" + e;
                if (-1 === e.indexOf(":"))
                    return e
            } else {
                if (Array.isArray(e))
                    return "filter:*:" + C(e);
                if (c.Sg.isForkEvent(e))
                    throw N.warn("not implemented"),
                    new Error("not implemented");
                if (e && "object" === typeof e)
                    return "filter:" + (e.address || "*") + ":" + C(e.topics || [])
            }
            throw new Error("invalid event - " + e)
        }
        function _() {
            return (new Date).getTime()
        }
        function T(e) {
            return new Promise((function(r) {
                setTimeout(r, e)
            }
            ))
        }
        var I = ["block", "network", "pending", "poll"]
          , B = function() {
            function e(r, t, n) {
                (0,
                s.Z)(this, e),
                (0,
                m.defineReadOnly)(this, "tag", r),
                (0,
                m.defineReadOnly)(this, "listener", t),
                (0,
                m.defineReadOnly)(this, "once", n),
                this._lastBlockNumber = -2,
                this._inflight = !1
            }
            return (0,
            u.Z)(e, [{
                key: "event",
                get: function() {
                    switch (this.type) {
                    case "tx":
                        return this.hash;
                    case "filter":
                        return this.filter
                    }
                    return this.tag
                }
            }, {
                key: "type",
                get: function() {
                    return this.tag.split(":")[0]
                }
            }, {
                key: "hash",
                get: function() {
                    var e = this.tag.split(":");
                    return "tx" !== e[0] ? null : e[1]
                }
            }, {
                key: "filter",
                get: function() {
                    var e = this.tag.split(":");
                    if ("filter" !== e[0])
                        return null;
                    var r, t = e[1], n = "" === (r = e[2]) ? [] : r.split(/&/g).map((function(e) {
                        if ("" === e)
                            return [];
                        var r = e.split("|").map((function(e) {
                            return "null" === e ? null : e
                        }
                        ));
                        return 1 === r.length ? r[0] : r
                    }
                    )), i = {};
                    return n.length > 0 && (i.topics = n),
                    t && "*" !== t && (i.address = t),
                    i
                }
            }, {
                key: "pollable",
                value: function() {
                    return this.tag.indexOf(":") >= 0 || I.indexOf(this.tag) >= 0
                }
            }]),
            e
        }()
          , L = {
            0: {
                symbol: "btc",
                p2pkh: 0,
                p2sh: 5,
                prefix: "bc"
            },
            2: {
                symbol: "ltc",
                p2pkh: 48,
                p2sh: 50,
                prefix: "ltc"
            },
            3: {
                symbol: "doge",
                p2pkh: 30,
                p2sh: 22
            },
            60: {
                symbol: "eth",
                ilk: "eth"
            },
            61: {
                symbol: "etc",
                ilk: "eth"
            },
            700: {
                symbol: "xdai",
                ilk: "eth"
            }
        };
        function Z(e) {
            return (0,
            d.hexZeroPad)(h.O$.from(e).toHexString(), 32)
        }
        function F(e) {
            return f.Base58.encode((0,
            d.concat)([e, (0,
            d.hexDataSlice)((0,
            y.JQ)((0,
            y.JQ)(e)), 0, 4)]))
        }
        var D = new RegExp("^(ipfs)://(.*)$","i")
          , M = [new RegExp("^(https)://(.*)$","i"), new RegExp("^(data):(.*)$","i"), D, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$","i")];
        function U(e, r) {
            try {
                return (0,
                b.ZN)(G(e, r))
            } catch (t) {}
            return null
        }
        function G(e, r) {
            if ("0x" === e)
                return null;
            var t = h.O$.from((0,
            d.hexDataSlice)(e, r, r + 32)).toNumber()
              , n = h.O$.from((0,
            d.hexDataSlice)(e, t, t + 32)).toNumber();
            return (0,
            d.hexDataSlice)(e, t + 32, t + 32 + n)
        }
        function H(e) {
            return e.match(/^ipfs:\/\/ipfs\//i) ? e = e.substring(12) : e.match(/^ipfs:\/\//i) ? e = e.substring(7) : N.throwArgumentError("unsupported IPFS format", "link", e),
            "https://gateway.ipfs.io/ipfs/".concat(e)
        }
        function j(e) {
            var r = (0,
            d.arrayify)(e);
            if (r.length > 32)
                throw new Error("internal; should not happen");
            var t = new Uint8Array(32);
            return t.set(r, 32 - r.length),
            t
        }
        function K(e) {
            if (e.length % 32 === 0)
                return e;
            var r = new Uint8Array(32 * Math.ceil(e.length / 32));
            return r.set(e),
            r
        }
        function q(e) {
            for (var r = [], t = 0, n = 0; n < e.length; n++)
                r.push(null),
                t += 32;
            for (var i = 0; i < e.length; i++) {
                var a = (0,
                d.arrayify)(e[i]);
                r[i] = j(t),
                r.push(j(a.length)),
                r.push(K(a)),
                t += 32 + 32 * Math.ceil(a.length / 32)
            }
            return (0,
            d.hexConcat)(r)
        }
        var z = function() {
            function e(r, t, n, i) {
                (0,
                s.Z)(this, e),
                (0,
                m.defineReadOnly)(this, "provider", r),
                (0,
                m.defineReadOnly)(this, "name", n),
                (0,
                m.defineReadOnly)(this, "address", r.formatter.address(t)),
                (0,
                m.defineReadOnly)(this, "_resolvedAddress", i)
            }
            return (0,
            u.Z)(e, [{
                key: "supportsWildcard",
                value: function() {
                    var e = this;
                    return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                        to: this.address,
                        data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                    }).then((function(e) {
                        return h.O$.from(e).eq(1)
                    }
                    )).catch((function(r) {
                        if (r.code === E.Logger.errors.CALL_EXCEPTION)
                            return !1;
                        throw e._supportsEip2544 = null,
                        r
                    }
                    ))),
                    this._supportsEip2544
                }
            }, {
                key: "_fetch",
                value: function(e, r) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n, i, a;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return n = {
                                        to: this.address,
                                        ccipReadEnabled: !0,
                                        data: (0,
                                        d.hexConcat)([e, (0,
                                        g.VM)(this.name), r || "0x"])
                                    },
                                    i = !1,
                                    t.next = 4,
                                    this.supportsWildcard();
                                case 4:
                                    if (!t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    i = !0,
                                    n.data = (0,
                                    d.hexConcat)(["0x9061b923", q([(0,
                                    g.Kn)(this.name), n.data])]);
                                case 7:
                                    return t.prev = 7,
                                    t.next = 10,
                                    this.provider.call(n);
                                case 10:
                                    return a = t.sent,
                                    (0,
                                    d.arrayify)(a).length % 32 === 4 && N.throwError("resolver threw error", E.Logger.errors.CALL_EXCEPTION, {
                                        transaction: n,
                                        data: a
                                    }),
                                    i && (a = G(a, 0)),
                                    t.abrupt("return", a);
                                case 16:
                                    if (t.prev = 16,
                                    t.t0 = t.catch(7),
                                    t.t0.code !== E.Logger.errors.CALL_EXCEPTION) {
                                        t.next = 20;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 20:
                                    throw t.t0;
                                case 21:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[7, 16]])
                    }
                    )))
                }
            }, {
                key: "_fetchBytes",
                value: function(e, r) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this._fetch(e, r);
                                case 2:
                                    if (null == (n = t.sent)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", G(n, 0));
                                case 5:
                                    return t.abrupt("return", null);
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "_getAddress",
                value: function(e, r) {
                    var t = L[String(e)];
                    if (null == t && N.throwError("unsupported coin type: ".concat(e), E.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getAddress(".concat(e, ")")
                    }),
                    "eth" === t.ilk)
                        return this.provider.formatter.address(r);
                    var n = (0,
                    d.arrayify)(r);
                    if (null != t.p2pkh) {
                        var i = r.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                        if (i) {
                            var a = parseInt(i[1], 16);
                            if (i[2].length === 2 * a && a >= 1 && a <= 75)
                                return F((0,
                                d.concat)([[t.p2pkh], "0x" + i[2]]))
                        }
                    }
                    if (null != t.p2sh) {
                        var o = r.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                        if (o) {
                            var s = parseInt(o[1], 16);
                            if (o[2].length === 2 * s && s >= 1 && s <= 75)
                                return F((0,
                                d.concat)([[t.p2sh], "0x" + o[2]]))
                        }
                    }
                    if (null != t.prefix) {
                        var u = n[1]
                          , c = n[0];
                        if (0 === c ? 20 !== u && 32 !== u && (c = -1) : c = -1,
                        c >= 0 && n.length === 2 + u && u >= 1 && u <= 75) {
                            var l = A().toWords(n.slice(2));
                            return l.unshift(c),
                            A().encode(t.prefix, l)
                        }
                    }
                    return null
                }
            }, {
                key: "getAddress",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n, i;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if (null == e && (e = 60),
                                    60 !== e) {
                                        r.next = 16;
                                        break
                                    }
                                    return r.prev = 2,
                                    r.next = 5,
                                    this._fetch("0x3b3b57de");
                                case 5:
                                    if ("0x" !== (t = r.sent) && t !== p.R) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 8:
                                    return r.abrupt("return", this.provider.formatter.callAddress(t));
                                case 11:
                                    if (r.prev = 11,
                                    r.t0 = r.catch(2),
                                    r.t0.code !== E.Logger.errors.CALL_EXCEPTION) {
                                        r.next = 15;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 15:
                                    throw r.t0;
                                case 16:
                                    return r.next = 18,
                                    this._fetchBytes("0xf1cb7e06", Z(e));
                                case 18:
                                    if (null != (n = r.sent) && "0x" !== n) {
                                        r.next = 21;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 21:
                                    return null == (i = this._getAddress(e, n)) && N.throwError("invalid or unsupported coin data", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "getAddress(".concat(e, ")"),
                                        coinType: e,
                                        data: n
                                    }),
                                    r.abrupt("return", i);
                                case 24:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[2, 11]])
                    }
                    )))
                }
            }, {
                key: "getAvatar",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        var r, t, n, i, a, s, u, c, l, f, p, g, v, m, y, b;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = [{
                                        type: "name",
                                        content: this.name
                                    }],
                                    e.prev = 1,
                                    e.next = 4,
                                    this.getText("avatar");
                                case 4:
                                    if (null != (t = e.sent)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 7:
                                    n = 0;
                                case 8:
                                    if (!(n < M.length)) {
                                        e.next = 91;
                                        break
                                    }
                                    if (null != (i = t.match(M[n]))) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.abrupt("continue", 88);
                                case 12:
                                    a = i[1].toLowerCase(),
                                    e.t0 = a,
                                    e.next = "https" === e.t0 ? 16 : "data" === e.t0 ? 18 : "ipfs" === e.t0 ? 20 : "erc721" === e.t0 || "erc1155" === e.t0 ? 22 : 88;
                                    break;
                                case 16:
                                    return r.push({
                                        type: "url",
                                        content: t
                                    }),
                                    e.abrupt("return", {
                                        linkage: r,
                                        url: t
                                    });
                                case 18:
                                    return r.push({
                                        type: "data",
                                        content: t
                                    }),
                                    e.abrupt("return", {
                                        linkage: r,
                                        url: t
                                    });
                                case 20:
                                    return r.push({
                                        type: "ipfs",
                                        content: t
                                    }),
                                    e.abrupt("return", {
                                        linkage: r,
                                        url: H(t)
                                    });
                                case 22:
                                    if (s = "erc721" === a ? "0xc87b56dd" : "0x0e89341c",
                                    r.push({
                                        type: a,
                                        content: t
                                    }),
                                    e.t1 = this._resolvedAddress,
                                    e.t1) {
                                        e.next = 29;
                                        break
                                    }
                                    return e.next = 28,
                                    this.getAddress();
                                case 28:
                                    e.t1 = e.sent;
                                case 29:
                                    if (u = e.t1,
                                    2 === (c = (i[2] || "").split("/")).length) {
                                        e.next = 33;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 33:
                                    return e.next = 35,
                                    this.provider.formatter.address(c[0]);
                                case 35:
                                    if (l = e.sent,
                                    f = (0,
                                    d.hexZeroPad)(h.O$.from(c[1]).toHexString(), 32),
                                    "erc721" !== a) {
                                        e.next = 48;
                                        break
                                    }
                                    return e.t2 = this.provider.formatter,
                                    e.next = 41,
                                    this.provider.call({
                                        to: l,
                                        data: (0,
                                        d.hexConcat)(["0x6352211e", f])
                                    });
                                case 41:
                                    if (e.t3 = e.sent,
                                    p = e.t2.callAddress.call(e.t2, e.t3),
                                    u === p) {
                                        e.next = 45;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 45:
                                    r.push({
                                        type: "owner",
                                        content: p
                                    }),
                                    e.next = 57;
                                    break;
                                case 48:
                                    if ("erc1155" !== a) {
                                        e.next = 57;
                                        break
                                    }
                                    return e.t4 = h.O$,
                                    e.next = 52,
                                    this.provider.call({
                                        to: l,
                                        data: (0,
                                        d.hexConcat)(["0x00fdd58e", (0,
                                        d.hexZeroPad)(u, 32), f])
                                    });
                                case 52:
                                    if (e.t5 = e.sent,
                                    !(g = e.t4.from.call(e.t4, e.t5)).isZero()) {
                                        e.next = 56;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 56:
                                    r.push({
                                        type: "balance",
                                        content: g.toString()
                                    });
                                case 57:
                                    return v = {
                                        to: this.provider.formatter.address(c[0]),
                                        data: (0,
                                        d.hexConcat)([s, f])
                                    },
                                    e.t6 = U,
                                    e.next = 61,
                                    this.provider.call(v);
                                case 61:
                                    if (e.t7 = e.sent,
                                    null != (m = (0,
                                    e.t6)(e.t7, 0))) {
                                        e.next = 65;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 65:
                                    return r.push({
                                        type: "metadata-url-base",
                                        content: m
                                    }),
                                    "erc1155" === a && (m = m.replace("{id}", f.substring(2)),
                                    r.push({
                                        type: "metadata-url-expanded",
                                        content: m
                                    })),
                                    m.match(/^ipfs:/i) && (m = H(m)),
                                    r.push({
                                        type: "metadata-url",
                                        content: m
                                    }),
                                    e.next = 71,
                                    (0,
                                    w.fetchJson)(m);
                                case 71:
                                    if (y = e.sent) {
                                        e.next = 74;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 74:
                                    if (r.push({
                                        type: "metadata",
                                        content: JSON.stringify(y)
                                    }),
                                    "string" === typeof (b = y.image)) {
                                        e.next = 78;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 78:
                                    if (!b.match(/^(https:\/\/|data:)/i)) {
                                        e.next = 81;
                                        break
                                    }
                                    e.next = 86;
                                    break;
                                case 81:
                                    if (null != b.match(D)) {
                                        e.next = 84;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 84:
                                    r.push({
                                        type: "url-ipfs",
                                        content: b
                                    }),
                                    b = H(b);
                                case 86:
                                    return r.push({
                                        type: "url",
                                        content: b
                                    }),
                                    e.abrupt("return", {
                                        linkage: r,
                                        url: b
                                    });
                                case 88:
                                    n++,
                                    e.next = 8;
                                    break;
                                case 91:
                                    e.next = 95;
                                    break;
                                case 93:
                                    e.prev = 93,
                                    e.t8 = e.catch(1);
                                case 95:
                                    return e.abrupt("return", null);
                                case 96:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 93]])
                    }
                    )))
                }
            }, {
                key: "getContentHash",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        var r, t, n, i, a, s, u, c, h;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this._fetchBytes("0xbc1c58d1");
                                case 2:
                                    if (null != (r = e.sent) && "0x" !== r) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 5:
                                    if (!(t = r.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/))) {
                                        e.next = 10;
                                        break
                                    }
                                    if (n = parseInt(t[3], 16),
                                    t[4].length !== 2 * n) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", "ipfs://" + f.Base58.encode("0x" + t[1]));
                                case 10:
                                    if (!(i = r.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/))) {
                                        e.next = 15;
                                        break
                                    }
                                    if (a = parseInt(i[3], 16),
                                    i[4].length !== 2 * a) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.abrupt("return", "ipns://" + f.Base58.encode("0x" + i[1]));
                                case 15:
                                    if (!(s = r.match(/^0xe40101fa011b20([0-9a-f]*)$/))) {
                                        e.next = 19;
                                        break
                                    }
                                    if (64 !== s[1].length) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.abrupt("return", "bzz://" + s[1]);
                                case 19:
                                    if (!(u = r.match(/^0x90b2c605([0-9a-f]*)$/))) {
                                        e.next = 25;
                                        break
                                    }
                                    if (68 !== u[1].length) {
                                        e.next = 25;
                                        break
                                    }
                                    return c = {
                                        "=": "",
                                        "+": "-",
                                        "/": "_"
                                    },
                                    h = (0,
                                    l.c)("0x" + u[1]).replace(/[=+\/]/g, (function(e) {
                                        return c[e]
                                    }
                                    )),
                                    e.abrupt("return", "sia://" + h);
                                case 25:
                                    return e.abrupt("return", N.throwError("invalid or unsupported content hash data", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "getContentHash()",
                                        data: r
                                    }));
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "getText",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return t = (0,
                                    b.Y0)(e),
                                    (t = (0,
                                    d.concat)([Z(64), Z(t.length), t])).length % 32 !== 0 && (t = (0,
                                    d.concat)([t, (0,
                                    d.hexZeroPad)("0x", 32 - e.length % 32)])),
                                    r.next = 5,
                                    this._fetchBytes("0x59d1d43c", (0,
                                    d.hexlify)(t));
                                case 5:
                                    if (null != (n = r.sent) && "0x" !== n) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 8:
                                    return r.abrupt("return", (0,
                                    b.ZN)(n));
                                case 9:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }]),
            e
        }()
          , J = null
          , V = 1
          , W = function(e) {
            (0,
            i.Z)(t, e);
            var r = (0,
            a.Z)(t);
            function t(e) {
                var i;
                if ((0,
                s.Z)(this, t),
                (i = r.call(this))._events = [],
                i._emitted = {
                    block: -2
                },
                i.disableCcipRead = !1,
                i.formatter = (this instanceof t ? this.constructor : void 0).getFormatter(),
                (0,
                m.defineReadOnly)((0,
                n.Z)(i), "anyNetwork", "any" === e),
                i.anyNetwork && (e = i.detectNetwork()),
                e instanceof Promise)
                    i._networkPromise = e,
                    e.catch((function(e) {}
                    )),
                    i._ready().catch((function(e) {}
                    ));
                else {
                    var a = (0,
                    m.getStatic)(this instanceof t ? this.constructor : void 0, "getNetwork")(e);
                    a ? ((0,
                    m.defineReadOnly)((0,
                    n.Z)(i), "_network", a),
                    i.emit("network", a, null)) : N.throwArgumentError("invalid network", "network", e)
                }
                return i._maxInternalBlockNumber = -1024,
                i._lastBlockNumber = -2,
                i._maxFilterBlockRange = 10,
                i._pollingInterval = 4e3,
                i._fastQueryDate = 0,
                i
            }
            return (0,
            u.Z)(t, [{
                key: "_ready",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (null != this._network) {
                                        e.next = 17;
                                        break
                                    }
                                    if (r = null,
                                    !this._networkPromise) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.prev = 3,
                                    e.next = 6,
                                    this._networkPromise;
                                case 6:
                                    r = e.sent,
                                    e.next = 11;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(3);
                                case 11:
                                    if (null != r) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.next = 14,
                                    this.detectNetwork();
                                case 14:
                                    r = e.sent;
                                case 15:
                                    r || N.throwError("no network detected", E.Logger.errors.UNKNOWN_ERROR, {}),
                                    null == this._network && (this.anyNetwork ? this._network = r : (0,
                                    m.defineReadOnly)(this, "_network", r),
                                    this.emit("network", r, null));
                                case 17:
                                    return e.abrupt("return", this._network);
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, 9]])
                    }
                    )))
                }
            }, {
                key: "ready",
                get: function() {
                    var e = this;
                    return (0,
                    w.poll)((function() {
                        return e._ready().then((function(e) {
                            return e
                        }
                        ), (function(e) {
                            if (e.code !== E.Logger.errors.NETWORK_ERROR || "noNetwork" !== e.event)
                                throw e
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "ccipReadFetch",
                value: function(e, r, t) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function n() {
                        var i, a, s, u, c, l, f, h, d;
                        return (0,
                        o.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (!this.disableCcipRead && 0 !== t.length) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return", null);
                                case 2:
                                    i = e.to.toLowerCase(),
                                    a = r.toLowerCase(),
                                    s = [],
                                    u = 0;
                                case 6:
                                    if (!(u < t.length)) {
                                        n.next = 22;
                                        break
                                    }
                                    return c = t[u],
                                    l = c.replace("{sender}", i).replace("{data}", a),
                                    f = c.indexOf("{data}") >= 0 ? null : JSON.stringify({
                                        data: a,
                                        sender: i
                                    }),
                                    n.next = 12,
                                    (0,
                                    w.fetchJson)({
                                        url: l,
                                        errorPassThrough: !0
                                    }, f, (function(e, r) {
                                        return e.status = r.statusCode,
                                        e
                                    }
                                    ));
                                case 12:
                                    if (!(h = n.sent).data) {
                                        n.next = 15;
                                        break
                                    }
                                    return n.abrupt("return", h.data);
                                case 15:
                                    if (d = h.message || "unknown error",
                                    !(h.status >= 400 && h.status < 500)) {
                                        n.next = 18;
                                        break
                                    }
                                    return n.abrupt("return", N.throwError("response not found during CCIP fetch: ".concat(d), E.Logger.errors.SERVER_ERROR, {
                                        url: c,
                                        errorMessage: d
                                    }));
                                case 18:
                                    s.push(d);
                                case 19:
                                    u++,
                                    n.next = 6;
                                    break;
                                case 22:
                                    return n.abrupt("return", N.throwError("error encountered during CCIP fetch: ".concat(s.map((function(e) {
                                        return JSON.stringify(e)
                                    }
                                    )).join(", ")), E.Logger.errors.SERVER_ERROR, {
                                        urls: t,
                                        errorMessages: s
                                    }));
                                case 23:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "_getInternalBlockNumber",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n, i, a, s = this;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this._ready();
                                case 2:
                                    if (!(e > 0)) {
                                        r.next = 20;
                                        break
                                    }
                                case 3:
                                    if (!this._internalBlockNumber) {
                                        r.next = 20;
                                        break
                                    }
                                    return t = this._internalBlockNumber,
                                    r.prev = 5,
                                    r.next = 8,
                                    t;
                                case 8:
                                    if (n = r.sent,
                                    !(_() - n.respTime <= e)) {
                                        r.next = 11;
                                        break
                                    }
                                    return r.abrupt("return", n.blockNumber);
                                case 11:
                                    return r.abrupt("break", 20);
                                case 14:
                                    if (r.prev = 14,
                                    r.t0 = r.catch(5),
                                    this._internalBlockNumber !== t) {
                                        r.next = 18;
                                        break
                                    }
                                    return r.abrupt("break", 20);
                                case 18:
                                    r.next = 3;
                                    break;
                                case 20:
                                    return i = _(),
                                    a = (0,
                                    m.resolveProperties)({
                                        blockNumber: this.perform("getBlockNumber", {}),
                                        networkError: this.getNetwork().then((function(e) {
                                            return null
                                        }
                                        ), (function(e) {
                                            return e
                                        }
                                        ))
                                    }).then((function(e) {
                                        var r = e.blockNumber
                                          , t = e.networkError;
                                        if (t)
                                            throw s._internalBlockNumber === a && (s._internalBlockNumber = null),
                                            t;
                                        var n = _();
                                        return (r = h.O$.from(r).toNumber()) < s._maxInternalBlockNumber && (r = s._maxInternalBlockNumber),
                                        s._maxInternalBlockNumber = r,
                                        s._setFastBlockNumber(r),
                                        {
                                            blockNumber: r,
                                            reqTime: i,
                                            respTime: n
                                        }
                                    }
                                    )),
                                    this._internalBlockNumber = a,
                                    a.catch((function(e) {
                                        s._internalBlockNumber === a && (s._internalBlockNumber = null)
                                    }
                                    )),
                                    r.next = 26,
                                    a;
                                case 26:
                                    return r.abrupt("return", r.sent.blockNumber);
                                case 27:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[5, 14]])
                    }
                    )))
                }
            }, {
                key: "poll",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        var r, t, n, i, a = this;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = V++,
                                    t = [],
                                    n = null,
                                    e.prev = 3,
                                    e.next = 6,
                                    this._getInternalBlockNumber(100 + this.pollingInterval / 2);
                                case 6:
                                    n = e.sent,
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.prev = 9,
                                    e.t0 = e.catch(3),
                                    this.emit("error", e.t0),
                                    e.abrupt("return");
                                case 13:
                                    if (this._setFastBlockNumber(n),
                                    this.emit("poll", r, n),
                                    n !== this._lastBlockNumber) {
                                        e.next = 18;
                                        break
                                    }
                                    return this.emit("didPoll", r),
                                    e.abrupt("return");
                                case 18:
                                    if (-2 === this._emitted.block && (this._emitted.block = n - 1),
                                    Math.abs(this._emitted.block - n) > 1e3)
                                        N.warn("network block skew detected; skipping block events (emitted=".concat(this._emitted.block, " blockNumber").concat(n, ")")),
                                        this.emit("error", N.makeError("network block skew detected", E.Logger.errors.NETWORK_ERROR, {
                                            blockNumber: n,
                                            event: "blockSkew",
                                            previousBlockNumber: this._emitted.block
                                        })),
                                        this.emit("block", n);
                                    else
                                        for (i = this._emitted.block + 1; i <= n; i++)
                                            this.emit("block", i);
                                    return this._emitted.block !== n && (this._emitted.block = n,
                                    Object.keys(this._emitted).forEach((function(e) {
                                        if ("block" !== e) {
                                            var r = a._emitted[e];
                                            "pending" !== r && n - r > 12 && delete a._emitted[e]
                                        }
                                    }
                                    ))),
                                    -2 === this._lastBlockNumber && (this._lastBlockNumber = n - 1),
                                    this._events.forEach((function(e) {
                                        switch (e.type) {
                                        case "tx":
                                            var r = e.hash
                                              , i = a.getTransactionReceipt(r).then((function(e) {
                                                return e && null != e.blockNumber ? (a._emitted["t:" + r] = e.blockNumber,
                                                a.emit(r, e),
                                                null) : null
                                            }
                                            )).catch((function(e) {
                                                a.emit("error", e)
                                            }
                                            ));
                                            t.push(i);
                                            break;
                                        case "filter":
                                            if (!e._inflight) {
                                                e._inflight = !0,
                                                -2 === e._lastBlockNumber && (e._lastBlockNumber = n - 1);
                                                var o = e.filter;
                                                o.fromBlock = e._lastBlockNumber + 1,
                                                o.toBlock = n;
                                                var s = o.toBlock - a._maxFilterBlockRange;
                                                s > o.fromBlock && (o.fromBlock = s),
                                                o.fromBlock < 0 && (o.fromBlock = 0);
                                                var u = a.getLogs(o).then((function(r) {
                                                    e._inflight = !1,
                                                    0 !== r.length && r.forEach((function(r) {
                                                        r.blockNumber > e._lastBlockNumber && (e._lastBlockNumber = r.blockNumber),
                                                        a._emitted["b:" + r.blockHash] = r.blockNumber,
                                                        a._emitted["t:" + r.transactionHash] = r.blockNumber,
                                                        a.emit(o, r)
                                                    }
                                                    ))
                                                }
                                                )).catch((function(r) {
                                                    a.emit("error", r),
                                                    e._inflight = !1
                                                }
                                                ));
                                                t.push(u)
                                            }
                                        }
                                    }
                                    )),
                                    this._lastBlockNumber = n,
                                    Promise.all(t).then((function() {
                                        a.emit("didPoll", r)
                                    }
                                    )).catch((function(e) {
                                        a.emit("error", e)
                                    }
                                    )),
                                    e.abrupt("return");
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, 9]])
                    }
                    )))
                }
            }, {
                key: "resetEventsBlock",
                value: function(e) {
                    this._lastBlockNumber = e - 1,
                    this.polling && this.poll()
                }
            }, {
                key: "network",
                get: function() {
                    return this._network
                }
            }, {
                key: "detectNetwork",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", N.throwError("provider does not support network detection", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "provider.detectNetwork"
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }, {
                key: "getNetwork",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        var r, t, n;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this._ready();
                                case 2:
                                    return r = e.sent,
                                    e.next = 5,
                                    this.detectNetwork();
                                case 5:
                                    if (t = e.sent,
                                    r.chainId === t.chainId) {
                                        e.next = 23;
                                        break
                                    }
                                    if (!this.anyNetwork) {
                                        e.next = 20;
                                        break
                                    }
                                    return this._network = t,
                                    this._lastBlockNumber = -2,
                                    this._fastBlockNumber = null,
                                    this._fastBlockNumberPromise = null,
                                    this._fastQueryDate = 0,
                                    this._emitted.block = -2,
                                    this._maxInternalBlockNumber = -1024,
                                    this._internalBlockNumber = null,
                                    this.emit("network", t, r),
                                    e.next = 19,
                                    T(0);
                                case 19:
                                    return e.abrupt("return", this._network);
                                case 20:
                                    throw n = N.makeError("underlying network changed", E.Logger.errors.NETWORK_ERROR, {
                                        event: "changed",
                                        network: r,
                                        detectedNetwork: t
                                    }),
                                    this.emit("error", n),
                                    n;
                                case 23:
                                    return e.abrupt("return", r);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "blockNumber",
                get: function() {
                    var e = this;
                    return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then((function(r) {
                        e._setFastBlockNumber(r)
                    }
                    ), (function(e) {}
                    )),
                    null != this._fastBlockNumber ? this._fastBlockNumber : -1
                }
            }, {
                key: "polling",
                get: function() {
                    return null != this._poller
                },
                set: function(e) {
                    var r = this;
                    e && !this._poller ? (this._poller = setInterval((function() {
                        r.poll()
                    }
                    ), this.pollingInterval),
                    this._bootstrapPoll || (this._bootstrapPoll = setTimeout((function() {
                        r.poll(),
                        r._bootstrapPoll = setTimeout((function() {
                            r._poller || r.poll(),
                            r._bootstrapPoll = null
                        }
                        ), r.pollingInterval)
                    }
                    ), 0))) : !e && this._poller && (clearInterval(this._poller),
                    this._poller = null)
                }
            }, {
                key: "pollingInterval",
                get: function() {
                    return this._pollingInterval
                },
                set: function(e) {
                    var r = this;
                    if ("number" !== typeof e || e <= 0 || parseInt(String(e)) != e)
                        throw new Error("invalid polling interval");
                    this._pollingInterval = e,
                    this._poller && (clearInterval(this._poller),
                    this._poller = setInterval((function() {
                        r.poll()
                    }
                    ), this._pollingInterval))
                }
            }, {
                key: "_getFastBlockNumber",
                value: function() {
                    var e = this
                      , r = _();
                    return r - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = r,
                    this._fastBlockNumberPromise = this.getBlockNumber().then((function(r) {
                        return (null == e._fastBlockNumber || r > e._fastBlockNumber) && (e._fastBlockNumber = r),
                        e._fastBlockNumber
                    }
                    ))),
                    this._fastBlockNumberPromise
                }
            }, {
                key: "_setFastBlockNumber",
                value: function(e) {
                    null != this._fastBlockNumber && e < this._fastBlockNumber || (this._fastQueryDate = _(),
                    (null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e,
                    this._fastBlockNumberPromise = Promise.resolve(e)))
                }
            }, {
                key: "waitForTransaction",
                value: function(e, r, t) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function n() {
                        return (0,
                        o.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", this._waitForTransaction(e, null == r ? 1 : r, t || 0, null));
                                case 1:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "_waitForTransaction",
                value: function(e, r, t, n) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function i() {
                        var a, s = this;
                        return (0,
                        o.Z)().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    return i.next = 2,
                                    this.getTransactionReceipt(e);
                                case 2:
                                    if (!(((a = i.sent) ? a.confirmations : 0) >= r)) {
                                        i.next = 5;
                                        break
                                    }
                                    return i.abrupt("return", a);
                                case 5:
                                    return i.abrupt("return", new Promise((function(i, a) {
                                        var u = []
                                          , c = !1
                                          , l = function() {
                                            return !!c || (c = !0,
                                            u.forEach((function(e) {
                                                e()
                                            }
                                            )),
                                            !1)
                                        }
                                          , f = function(e) {
                                            e.confirmations < r || l() || i(e)
                                        };
                                        if (s.on(e, f),
                                        u.push((function() {
                                            s.removeListener(e, f)
                                        }
                                        )),
                                        n) {
                                            var h = n.startBlock
                                              , d = null
                                              , p = function t(i) {
                                                return P(s, void 0, void 0, (0,
                                                o.Z)().mark((function s() {
                                                    var u = this;
                                                    return (0,
                                                    o.Z)().wrap((function(s) {
                                                        for (; ; )
                                                            switch (s.prev = s.next) {
                                                            case 0:
                                                                if (!c) {
                                                                    s.next = 2;
                                                                    break
                                                                }
                                                                return s.abrupt("return");
                                                            case 2:
                                                                return s.next = 4,
                                                                T(1e3);
                                                            case 4:
                                                                this.getTransactionCount(n.from).then((function(s) {
                                                                    return P(u, void 0, void 0, (0,
                                                                    o.Z)().mark((function u() {
                                                                        var f, p, g, v, m, y;
                                                                        return (0,
                                                                        o.Z)().wrap((function(o) {
                                                                            for (; ; )
                                                                                switch (o.prev = o.next) {
                                                                                case 0:
                                                                                    if (!c) {
                                                                                        o.next = 2;
                                                                                        break
                                                                                    }
                                                                                    return o.abrupt("return");
                                                                                case 2:
                                                                                    if (!(s <= n.nonce)) {
                                                                                        o.next = 6;
                                                                                        break
                                                                                    }
                                                                                    h = i,
                                                                                    o.next = 41;
                                                                                    break;
                                                                                case 6:
                                                                                    return o.next = 8,
                                                                                    this.getTransaction(e);
                                                                                case 8:
                                                                                    if (!(f = o.sent) || null == f.blockNumber) {
                                                                                        o.next = 11;
                                                                                        break
                                                                                    }
                                                                                    return o.abrupt("return");
                                                                                case 11:
                                                                                    null == d && (d = h - 3) < n.startBlock && (d = n.startBlock);
                                                                                case 12:
                                                                                    if (!(d <= i)) {
                                                                                        o.next = 41;
                                                                                        break
                                                                                    }
                                                                                    if (!c) {
                                                                                        o.next = 15;
                                                                                        break
                                                                                    }
                                                                                    return o.abrupt("return");
                                                                                case 15:
                                                                                    return o.next = 17,
                                                                                    this.getBlockWithTransactions(d);
                                                                                case 17:
                                                                                    p = o.sent,
                                                                                    g = 0;
                                                                                case 19:
                                                                                    if (!(g < p.transactions.length)) {
                                                                                        o.next = 38;
                                                                                        break
                                                                                    }
                                                                                    if ((v = p.transactions[g]).hash !== e) {
                                                                                        o.next = 23;
                                                                                        break
                                                                                    }
                                                                                    return o.abrupt("return");
                                                                                case 23:
                                                                                    if (v.from !== n.from || v.nonce !== n.nonce) {
                                                                                        o.next = 35;
                                                                                        break
                                                                                    }
                                                                                    if (!c) {
                                                                                        o.next = 26;
                                                                                        break
                                                                                    }
                                                                                    return o.abrupt("return");
                                                                                case 26:
                                                                                    return o.next = 28,
                                                                                    this.waitForTransaction(v.hash, r);
                                                                                case 28:
                                                                                    if (m = o.sent,
                                                                                    !l()) {
                                                                                        o.next = 31;
                                                                                        break
                                                                                    }
                                                                                    return o.abrupt("return");
                                                                                case 31:
                                                                                    return y = "replaced",
                                                                                    v.data === n.data && v.to === n.to && v.value.eq(n.value) ? y = "repriced" : "0x" === v.data && v.from === v.to && v.value.isZero() && (y = "cancelled"),
                                                                                    a(N.makeError("transaction was replaced", E.Logger.errors.TRANSACTION_REPLACED, {
                                                                                        cancelled: "replaced" === y || "cancelled" === y,
                                                                                        reason: y,
                                                                                        replacement: this._wrapTransaction(v),
                                                                                        hash: e,
                                                                                        receipt: m
                                                                                    })),
                                                                                    o.abrupt("return");
                                                                                case 35:
                                                                                    g++,
                                                                                    o.next = 19;
                                                                                    break;
                                                                                case 38:
                                                                                    d++,
                                                                                    o.next = 12;
                                                                                    break;
                                                                                case 41:
                                                                                    if (!c) {
                                                                                        o.next = 43;
                                                                                        break
                                                                                    }
                                                                                    return o.abrupt("return");
                                                                                case 43:
                                                                                    this.once("block", t);
                                                                                case 44:
                                                                                case "end":
                                                                                    return o.stop()
                                                                                }
                                                                        }
                                                                        ), u, this)
                                                                    }
                                                                    )))
                                                                }
                                                                ), (function(e) {
                                                                    c || u.once("block", t)
                                                                }
                                                                ));
                                                            case 5:
                                                            case "end":
                                                                return s.stop()
                                                            }
                                                    }
                                                    ), s, this)
                                                }
                                                )))
                                            };
                                            if (c)
                                                return;
                                            s.once("block", p),
                                            u.push((function() {
                                                s.removeListener("block", p)
                                            }
                                            ))
                                        }
                                        if ("number" === typeof t && t > 0) {
                                            var g = setTimeout((function() {
                                                l() || a(N.makeError("timeout exceeded", E.Logger.errors.TIMEOUT, {
                                                    timeout: t
                                                }))
                                            }
                                            ), t);
                                            g.unref && g.unref(),
                                            u.push((function() {
                                                clearTimeout(g)
                                            }
                                            ))
                                        }
                                    }
                                    )));
                                case 6:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, this)
                    }
                    )))
                }
            }, {
                key: "getBlockNumber",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this._getInternalBlockNumber(0));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "getGasPrice",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        var r;
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return e.next = 4,
                                    this.perform("getGasPrice", {});
                                case 4:
                                    return r = e.sent,
                                    e.prev = 5,
                                    e.abrupt("return", h.O$.from(r));
                                case 9:
                                    return e.prev = 9,
                                    e.t0 = e.catch(5),
                                    e.abrupt("return", N.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                        method: "getGasPrice",
                                        result: r,
                                        error: e.t0
                                    }));
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[5, 9]])
                    }
                    )))
                }
            }, {
                key: "getBalance",
                value: function(e, r) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n, i;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return t.next = 4,
                                    (0,
                                    m.resolveProperties)({
                                        address: this._getAddress(e),
                                        blockTag: this._getBlockTag(r)
                                    });
                                case 4:
                                    return n = t.sent,
                                    t.next = 7,
                                    this.perform("getBalance", n);
                                case 7:
                                    return i = t.sent,
                                    t.prev = 8,
                                    t.abrupt("return", h.O$.from(i));
                                case 12:
                                    return t.prev = 12,
                                    t.t0 = t.catch(8),
                                    t.abrupt("return", N.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                        method: "getBalance",
                                        params: n,
                                        result: i,
                                        error: t.t0
                                    }));
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[8, 12]])
                    }
                    )))
                }
            }, {
                key: "getTransactionCount",
                value: function(e, r) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n, i;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return t.next = 4,
                                    (0,
                                    m.resolveProperties)({
                                        address: this._getAddress(e),
                                        blockTag: this._getBlockTag(r)
                                    });
                                case 4:
                                    return n = t.sent,
                                    t.next = 7,
                                    this.perform("getTransactionCount", n);
                                case 7:
                                    return i = t.sent,
                                    t.prev = 8,
                                    t.abrupt("return", h.O$.from(i).toNumber());
                                case 12:
                                    return t.prev = 12,
                                    t.t0 = t.catch(8),
                                    t.abrupt("return", N.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                        method: "getTransactionCount",
                                        params: n,
                                        result: i,
                                        error: t.t0
                                    }));
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[8, 12]])
                    }
                    )))
                }
            }, {
                key: "getCode",
                value: function(e, r) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n, i;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return t.next = 4,
                                    (0,
                                    m.resolveProperties)({
                                        address: this._getAddress(e),
                                        blockTag: this._getBlockTag(r)
                                    });
                                case 4:
                                    return n = t.sent,
                                    t.next = 7,
                                    this.perform("getCode", n);
                                case 7:
                                    return i = t.sent,
                                    t.prev = 8,
                                    t.abrupt("return", (0,
                                    d.hexlify)(i));
                                case 12:
                                    return t.prev = 12,
                                    t.t0 = t.catch(8),
                                    t.abrupt("return", N.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                        method: "getCode",
                                        params: n,
                                        result: i,
                                        error: t.t0
                                    }));
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[8, 12]])
                    }
                    )))
                }
            }, {
                key: "getStorageAt",
                value: function(e, r, t) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function n() {
                        var i, a;
                        return (0,
                        o.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return n.next = 4,
                                    (0,
                                    m.resolveProperties)({
                                        address: this._getAddress(e),
                                        blockTag: this._getBlockTag(t),
                                        position: Promise.resolve(r).then((function(e) {
                                            return (0,
                                            d.hexValue)(e)
                                        }
                                        ))
                                    });
                                case 4:
                                    return i = n.sent,
                                    n.next = 7,
                                    this.perform("getStorageAt", i);
                                case 7:
                                    return a = n.sent,
                                    n.prev = 8,
                                    n.abrupt("return", (0,
                                    d.hexlify)(a));
                                case 12:
                                    return n.prev = 12,
                                    n.t0 = n.catch(8),
                                    n.abrupt("return", N.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                        method: "getStorageAt",
                                        params: i,
                                        result: a,
                                        error: n.t0
                                    }));
                                case 15:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this, [[8, 12]])
                    }
                    )))
                }
            }, {
                key: "_wrapTransaction",
                value: function(e, r, t) {
                    var n = this;
                    if (null != r && 32 !== (0,
                    d.hexDataLength)(r))
                        throw new Error("invalid response - sendTransaction");
                    var i = e;
                    return null != r && e.hash !== r && N.throwError("Transaction hash mismatch from Provider.sendTransaction.", E.Logger.errors.UNKNOWN_ERROR, {
                        expectedHash: e.hash,
                        returnedHash: r
                    }),
                    i.wait = function(r, i) {
                        return P(n, void 0, void 0, (0,
                        o.Z)().mark((function n() {
                            var a, s;
                            return (0,
                            o.Z)().wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return null == r && (r = 1),
                                        null == i && (i = 0),
                                        a = void 0,
                                        0 !== r && null != t && (a = {
                                            data: e.data,
                                            from: e.from,
                                            nonce: e.nonce,
                                            to: e.to,
                                            value: e.value,
                                            startBlock: t
                                        }),
                                        n.next = 6,
                                        this._waitForTransaction(e.hash, r, i, a);
                                    case 6:
                                        if (null != (s = n.sent) || 0 !== r) {
                                            n.next = 9;
                                            break
                                        }
                                        return n.abrupt("return", null);
                                    case 9:
                                        return this._emitted["t:" + e.hash] = s.blockNumber,
                                        0 === s.status && N.throwError("transaction failed", E.Logger.errors.CALL_EXCEPTION, {
                                            transactionHash: e.hash,
                                            transaction: e,
                                            receipt: s
                                        }),
                                        n.abrupt("return", s);
                                    case 12:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, this)
                        }
                        )))
                    }
                    ,
                    i
                }
            }, {
                key: "sendTransaction",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n, i, a;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return r.next = 4,
                                    Promise.resolve(e).then((function(e) {
                                        return (0,
                                        d.hexlify)(e)
                                    }
                                    ));
                                case 4:
                                    return t = r.sent,
                                    null == (n = this.formatter.transaction(e)).confirmations && (n.confirmations = 0),
                                    r.next = 9,
                                    this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                                case 9:
                                    return i = r.sent,
                                    r.prev = 10,
                                    r.next = 13,
                                    this.perform("sendTransaction", {
                                        signedTransaction: t
                                    });
                                case 13:
                                    return a = r.sent,
                                    r.abrupt("return", this._wrapTransaction(n, a, i));
                                case 17:
                                    throw r.prev = 17,
                                    r.t0 = r.catch(10),
                                    r.t0.transaction = n,
                                    r.t0.transactionHash = n.hash,
                                    r.t0;
                                case 22:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[10, 17]])
                    }
                    )))
                }
            }, {
                key: "_getTransactionRequest",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n, i = this;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    e;
                                case 2:
                                    return t = r.sent,
                                    n = {},
                                    ["from", "to"].forEach((function(e) {
                                        null != t[e] && (n[e] = Promise.resolve(t[e]).then((function(e) {
                                            return e ? i._getAddress(e) : null
                                        }
                                        )))
                                    }
                                    )),
                                    ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach((function(e) {
                                        null != t[e] && (n[e] = Promise.resolve(t[e]).then((function(e) {
                                            return e ? h.O$.from(e) : null
                                        }
                                        )))
                                    }
                                    )),
                                    ["type"].forEach((function(e) {
                                        null != t[e] && (n[e] = Promise.resolve(t[e]).then((function(e) {
                                            return null != e ? e : null
                                        }
                                        )))
                                    }
                                    )),
                                    t.accessList && (n.accessList = this.formatter.accessList(t.accessList)),
                                    ["data"].forEach((function(e) {
                                        null != t[e] && (n[e] = Promise.resolve(t[e]).then((function(e) {
                                            return e ? (0,
                                            d.hexlify)(e) : null
                                        }
                                        )))
                                    }
                                    )),
                                    r.t0 = this.formatter,
                                    r.next = 12,
                                    (0,
                                    m.resolveProperties)(n);
                                case 12:
                                    return r.t1 = r.sent,
                                    r.abrupt("return", r.t0.transactionRequest.call(r.t0, r.t1));
                                case 14:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "_getFilter",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n = this;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    e;
                                case 2:
                                    return e = r.sent,
                                    t = {},
                                    null != e.address && (t.address = this._getAddress(e.address)),
                                    ["blockHash", "topics"].forEach((function(r) {
                                        null != e[r] && (t[r] = e[r])
                                    }
                                    )),
                                    ["fromBlock", "toBlock"].forEach((function(r) {
                                        null != e[r] && (t[r] = n._getBlockTag(e[r]))
                                    }
                                    )),
                                    r.t0 = this.formatter,
                                    r.next = 10,
                                    (0,
                                    m.resolveProperties)(t);
                                case 10:
                                    return r.t1 = r.sent,
                                    r.abrupt("return", r.t0.filter.call(r.t0, r.t1));
                                case 12:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "_call",
                value: function(e, r, t) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function n() {
                        var i, a, s, u, c, l, f, p, g, v, m, y, b, w, k;
                        return (0,
                        o.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return t >= 10 && N.throwError("CCIP read exceeded maximum redirections", E.Logger.errors.SERVER_ERROR, {
                                        redirects: t,
                                        transaction: e
                                    }),
                                    i = e.to,
                                    n.next = 4,
                                    this.perform("call", {
                                        transaction: e,
                                        blockTag: r
                                    });
                                case 4:
                                    if (a = n.sent,
                                    !(t >= 0 && "latest" === r && null != i && "0x556f1830" === a.substring(0, 10) && (0,
                                    d.hexDataLength)(a) % 32 === 4)) {
                                        n.next = 31;
                                        break
                                    }
                                    for (n.prev = 6,
                                    s = (0,
                                    d.hexDataSlice)(a, 4),
                                    u = (0,
                                    d.hexDataSlice)(s, 0, 32),
                                    h.O$.from(u).eq(i) || N.throwError("CCIP Read sender did not match", E.Logger.errors.CALL_EXCEPTION, {
                                        name: "OffchainLookup",
                                        signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                        transaction: e,
                                        data: a
                                    }),
                                    c = [],
                                    l = h.O$.from((0,
                                    d.hexDataSlice)(s, 32, 64)).toNumber(),
                                    f = h.O$.from((0,
                                    d.hexDataSlice)(s, l, l + 32)).toNumber(),
                                    p = (0,
                                    d.hexDataSlice)(s, l + 32),
                                    g = 0; g < f; g++)
                                        null == (v = U(p, 32 * g)) && N.throwError("CCIP Read contained corrupt URL string", E.Logger.errors.CALL_EXCEPTION, {
                                            name: "OffchainLookup",
                                            signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                            transaction: e,
                                            data: a
                                        }),
                                        c.push(v);
                                    return m = G(s, 64),
                                    h.O$.from((0,
                                    d.hexDataSlice)(s, 100, 128)).isZero() || N.throwError("CCIP Read callback selector included junk", E.Logger.errors.CALL_EXCEPTION, {
                                        name: "OffchainLookup",
                                        signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                        transaction: e,
                                        data: a
                                    }),
                                    y = (0,
                                    d.hexDataSlice)(s, 96, 100),
                                    b = G(s, 128),
                                    n.next = 21,
                                    this.ccipReadFetch(e, m, c);
                                case 21:
                                    return null == (w = n.sent) && N.throwError("CCIP Read disabled or provided no URLs", E.Logger.errors.CALL_EXCEPTION, {
                                        name: "OffchainLookup",
                                        signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                        transaction: e,
                                        data: a
                                    }),
                                    k = {
                                        to: i,
                                        data: (0,
                                        d.hexConcat)([y, q([w, b])])
                                    },
                                    n.abrupt("return", this._call(k, r, t + 1));
                                case 27:
                                    if (n.prev = 27,
                                    n.t0 = n.catch(6),
                                    n.t0.code !== E.Logger.errors.SERVER_ERROR) {
                                        n.next = 31;
                                        break
                                    }
                                    throw n.t0;
                                case 31:
                                    return n.prev = 31,
                                    n.abrupt("return", (0,
                                    d.hexlify)(a));
                                case 35:
                                    return n.prev = 35,
                                    n.t1 = n.catch(31),
                                    n.abrupt("return", N.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                        method: "call",
                                        params: {
                                            transaction: e,
                                            blockTag: r
                                        },
                                        result: a,
                                        error: n.t1
                                    }));
                                case 38:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this, [[6, 27], [31, 35]])
                    }
                    )))
                }
            }, {
                key: "call",
                value: function(e, r) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return t.next = 4,
                                    (0,
                                    m.resolveProperties)({
                                        transaction: this._getTransactionRequest(e),
                                        blockTag: this._getBlockTag(r),
                                        ccipReadEnabled: Promise.resolve(e.ccipReadEnabled)
                                    });
                                case 4:
                                    return n = t.sent,
                                    t.abrupt("return", this._call(n.transaction, n.blockTag, n.ccipReadEnabled ? 0 : -1));
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }, {
                key: "estimateGas",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return r.next = 4,
                                    (0,
                                    m.resolveProperties)({
                                        transaction: this._getTransactionRequest(e)
                                    });
                                case 4:
                                    return t = r.sent,
                                    r.next = 7,
                                    this.perform("estimateGas", t);
                                case 7:
                                    return n = r.sent,
                                    r.prev = 8,
                                    r.abrupt("return", h.O$.from(n));
                                case 12:
                                    return r.prev = 12,
                                    r.t0 = r.catch(8),
                                    r.abrupt("return", N.throwError("bad result from backend", E.Logger.errors.SERVER_ERROR, {
                                        method: "estimateGas",
                                        params: t,
                                        result: n,
                                        error: r.t0
                                    }));
                                case 15:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[8, 12]])
                    }
                    )))
                }
            }, {
                key: "_getAddress",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    e;
                                case 2:
                                    return "string" !== typeof (e = r.sent) && N.throwArgumentError("invalid address or ENS name", "name", e),
                                    r.next = 6,
                                    this.resolveName(e);
                                case 6:
                                    return null == (t = r.sent) && N.throwError("ENS name not configured", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "resolveName(".concat(JSON.stringify(e), ")")
                                    }),
                                    r.abrupt("return", t);
                                case 9:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "_getBlock",
                value: function(e, r) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n, i, a = this;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return t.next = 4,
                                    e;
                                case 4:
                                    if (e = t.sent,
                                    n = -128,
                                    i = {
                                        includeTransactions: !!r
                                    },
                                    !(0,
                                    d.isHexString)(e, 32)) {
                                        t.next = 11;
                                        break
                                    }
                                    i.blockHash = e,
                                    t.next = 21;
                                    break;
                                case 11:
                                    return t.prev = 11,
                                    t.next = 14,
                                    this._getBlockTag(e);
                                case 14:
                                    i.blockTag = t.sent,
                                    (0,
                                    d.isHexString)(i.blockTag) && (n = parseInt(i.blockTag.substring(2), 16)),
                                    t.next = 21;
                                    break;
                                case 18:
                                    t.prev = 18,
                                    t.t0 = t.catch(11),
                                    N.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e);
                                case 21:
                                    return t.abrupt("return", (0,
                                    w.poll)((function() {
                                        return P(a, void 0, void 0, (0,
                                        o.Z)().mark((function e() {
                                            var t, a, s, u, c, l, f = this;
                                            return (0,
                                            o.Z)().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        this.perform("getBlock", i);
                                                    case 2:
                                                        if (null != (t = e.sent)) {
                                                            e.next = 11;
                                                            break
                                                        }
                                                        if (null == i.blockHash) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        if (null != this._emitted["b:" + i.blockHash]) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return e.abrupt("return", null);
                                                    case 7:
                                                        if (null == i.blockTag) {
                                                            e.next = 10;
                                                            break
                                                        }
                                                        if (!(n > this._emitted.block)) {
                                                            e.next = 10;
                                                            break
                                                        }
                                                        return e.abrupt("return", null);
                                                    case 10:
                                                        return e.abrupt("return", void 0);
                                                    case 11:
                                                        if (!r) {
                                                            e.next = 34;
                                                            break
                                                        }
                                                        a = null,
                                                        s = 0;
                                                    case 14:
                                                        if (!(s < t.transactions.length)) {
                                                            e.next = 31;
                                                            break
                                                        }
                                                        if (null != (u = t.transactions[s]).blockNumber) {
                                                            e.next = 20;
                                                            break
                                                        }
                                                        u.confirmations = 0,
                                                        e.next = 28;
                                                        break;
                                                    case 20:
                                                        if (null != u.confirmations) {
                                                            e.next = 28;
                                                            break
                                                        }
                                                        if (null != a) {
                                                            e.next = 25;
                                                            break
                                                        }
                                                        return e.next = 24,
                                                        this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                                                    case 24:
                                                        a = e.sent;
                                                    case 25:
                                                        (c = a - u.blockNumber + 1) <= 0 && (c = 1),
                                                        u.confirmations = c;
                                                    case 28:
                                                        s++,
                                                        e.next = 14;
                                                        break;
                                                    case 31:
                                                        return (l = this.formatter.blockWithTransactions(t)).transactions = l.transactions.map((function(e) {
                                                            return f._wrapTransaction(e)
                                                        }
                                                        )),
                                                        e.abrupt("return", l);
                                                    case 34:
                                                        return e.abrupt("return", this.formatter.block(t));
                                                    case 35:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e, this)
                                        }
                                        )))
                                    }
                                    ), {
                                        oncePoll: this
                                    }));
                                case 22:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[11, 18]])
                    }
                    )))
                }
            }, {
                key: "getBlock",
                value: function(e) {
                    return this._getBlock(e, !1)
                }
            }, {
                key: "getBlockWithTransactions",
                value: function(e) {
                    return this._getBlock(e, !0)
                }
            }, {
                key: "getTransaction",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n = this;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return r.next = 4,
                                    e;
                                case 4:
                                    return e = r.sent,
                                    t = {
                                        transactionHash: this.formatter.hash(e, !0)
                                    },
                                    r.abrupt("return", (0,
                                    w.poll)((function() {
                                        return P(n, void 0, void 0, (0,
                                        o.Z)().mark((function r() {
                                            var n, i, a, s;
                                            return (0,
                                            o.Z)().wrap((function(r) {
                                                for (; ; )
                                                    switch (r.prev = r.next) {
                                                    case 0:
                                                        return r.next = 2,
                                                        this.perform("getTransaction", t);
                                                    case 2:
                                                        if (null != (n = r.sent)) {
                                                            r.next = 7;
                                                            break
                                                        }
                                                        if (null != this._emitted["t:" + e]) {
                                                            r.next = 6;
                                                            break
                                                        }
                                                        return r.abrupt("return", null);
                                                    case 6:
                                                        return r.abrupt("return", void 0);
                                                    case 7:
                                                        if (null != (i = this.formatter.transactionResponse(n)).blockNumber) {
                                                            r.next = 12;
                                                            break
                                                        }
                                                        i.confirmations = 0,
                                                        r.next = 19;
                                                        break;
                                                    case 12:
                                                        if (null != i.confirmations) {
                                                            r.next = 19;
                                                            break
                                                        }
                                                        return r.next = 15,
                                                        this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                                                    case 15:
                                                        a = r.sent,
                                                        (s = a - i.blockNumber + 1) <= 0 && (s = 1),
                                                        i.confirmations = s;
                                                    case 19:
                                                        return r.abrupt("return", this._wrapTransaction(i));
                                                    case 20:
                                                    case "end":
                                                        return r.stop()
                                                    }
                                            }
                                            ), r, this)
                                        }
                                        )))
                                    }
                                    ), {
                                        oncePoll: this
                                    }));
                                case 7:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getTransactionReceipt",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n = this;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return r.next = 4,
                                    e;
                                case 4:
                                    return e = r.sent,
                                    t = {
                                        transactionHash: this.formatter.hash(e, !0)
                                    },
                                    r.abrupt("return", (0,
                                    w.poll)((function() {
                                        return P(n, void 0, void 0, (0,
                                        o.Z)().mark((function r() {
                                            var n, i, a, s;
                                            return (0,
                                            o.Z)().wrap((function(r) {
                                                for (; ; )
                                                    switch (r.prev = r.next) {
                                                    case 0:
                                                        return r.next = 2,
                                                        this.perform("getTransactionReceipt", t);
                                                    case 2:
                                                        if (null != (n = r.sent)) {
                                                            r.next = 7;
                                                            break
                                                        }
                                                        if (null != this._emitted["t:" + e]) {
                                                            r.next = 6;
                                                            break
                                                        }
                                                        return r.abrupt("return", null);
                                                    case 6:
                                                        return r.abrupt("return", void 0);
                                                    case 7:
                                                        if (null != n.blockHash) {
                                                            r.next = 9;
                                                            break
                                                        }
                                                        return r.abrupt("return", void 0);
                                                    case 9:
                                                        if (null != (i = this.formatter.receipt(n)).blockNumber) {
                                                            r.next = 14;
                                                            break
                                                        }
                                                        i.confirmations = 0,
                                                        r.next = 21;
                                                        break;
                                                    case 14:
                                                        if (null != i.confirmations) {
                                                            r.next = 21;
                                                            break
                                                        }
                                                        return r.next = 17,
                                                        this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                                                    case 17:
                                                        a = r.sent,
                                                        (s = a - i.blockNumber + 1) <= 0 && (s = 1),
                                                        i.confirmations = s;
                                                    case 21:
                                                        return r.abrupt("return", i);
                                                    case 22:
                                                    case "end":
                                                        return r.stop()
                                                    }
                                            }
                                            ), r, this)
                                        }
                                        )))
                                    }
                                    ), {
                                        oncePoll: this
                                    }));
                                case 7:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getLogs",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return r.next = 4,
                                    (0,
                                    m.resolveProperties)({
                                        filter: this._getFilter(e)
                                    });
                                case 4:
                                    return t = r.sent,
                                    r.next = 7,
                                    this.perform("getLogs", t);
                                case 7:
                                    return (n = r.sent).forEach((function(e) {
                                        null == e.removed && (e.removed = !1)
                                    }
                                    )),
                                    r.abrupt("return", S.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(n));
                                case 10:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getEtherPrice",
                value: function() {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function e() {
                        return (0,
                        o.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getNetwork();
                                case 2:
                                    return e.abrupt("return", this.perform("getEtherPrice", {}));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "_getBlockTag",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    e;
                                case 2:
                                    if (!("number" === typeof (e = r.sent) && e < 0)) {
                                        r.next = 11;
                                        break
                                    }
                                    return e % 1 && N.throwArgumentError("invalid BlockTag", "blockTag", e),
                                    r.next = 7,
                                    this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                                case 7:
                                    return t = r.sent,
                                    (t += e) < 0 && (t = 0),
                                    r.abrupt("return", this.formatter.blockTag(t));
                                case 11:
                                    return r.abrupt("return", this.formatter.blockTag(e));
                                case 12:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getResolver",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n, i;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    t = e;
                                case 1:
                                    if ("" !== t && "." !== t) {
                                        r.next = 4;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 4:
                                    if ("eth" === e || "eth" !== t) {
                                        r.next = 6;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 6:
                                    return r.next = 8,
                                    this._getResolver(t, "getResolver");
                                case 8:
                                    if (null == (n = r.sent)) {
                                        r.next = 19;
                                        break
                                    }
                                    if (i = new z(this,n,e),
                                    r.t0 = t !== e,
                                    !r.t0) {
                                        r.next = 16;
                                        break
                                    }
                                    return r.next = 15,
                                    i.supportsWildcard();
                                case 15:
                                    r.t0 = !r.sent;
                                case 16:
                                    if (!r.t0) {
                                        r.next = 18;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 18:
                                    return r.abrupt("return", i);
                                case 19:
                                    t = t.split(".").slice(1).join("."),
                                    r.next = 1;
                                    break;
                                case 22:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "_getResolver",
                value: function(e, r) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function t() {
                        var n, i;
                        return (0,
                        o.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return null == r && (r = "ENS"),
                                    t.next = 3,
                                    this.getNetwork();
                                case 3:
                                    return (n = t.sent).ensAddress || N.throwError("network does not support ENS", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: r,
                                        network: n.name
                                    }),
                                    t.prev = 5,
                                    t.next = 8,
                                    this.call({
                                        to: n.ensAddress,
                                        data: "0x0178b8bf" + (0,
                                        g.VM)(e).substring(2)
                                    });
                                case 8:
                                    return i = t.sent,
                                    t.abrupt("return", this.formatter.callAddress(i));
                                case 12:
                                    t.prev = 12,
                                    t.t0 = t.catch(5);
                                case 14:
                                    return t.abrupt("return", null);
                                case 15:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[5, 12]])
                    }
                    )))
                }
            }, {
                key: "resolveName",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    e;
                                case 2:
                                    return e = r.sent,
                                    r.prev = 3,
                                    r.abrupt("return", Promise.resolve(this.formatter.address(e)));
                                case 7:
                                    if (r.prev = 7,
                                    r.t0 = r.catch(3),
                                    !(0,
                                    d.isHexString)(e)) {
                                        r.next = 11;
                                        break
                                    }
                                    throw r.t0;
                                case 11:
                                    return "string" !== typeof e && N.throwArgumentError("invalid ENS name", "name", e),
                                    r.next = 14,
                                    this.getResolver(e);
                                case 14:
                                    if (t = r.sent) {
                                        r.next = 17;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 17:
                                    return r.next = 19,
                                    t.getAddress();
                                case 19:
                                    return r.abrupt("return", r.sent);
                                case 20:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[3, 7]])
                    }
                    )))
                }
            }, {
                key: "lookupAddress",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n, i;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    e;
                                case 2:
                                    return e = r.sent,
                                    e = this.formatter.address(e),
                                    t = e.substring(2).toLowerCase() + ".addr.reverse",
                                    r.next = 7,
                                    this._getResolver(t, "lookupAddress");
                                case 7:
                                    if (null != (n = r.sent)) {
                                        r.next = 10;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 10:
                                    return r.t0 = U,
                                    r.next = 13,
                                    this.call({
                                        to: n,
                                        data: "0x691f3431" + (0,
                                        g.VM)(t).substring(2)
                                    });
                                case 13:
                                    return r.t1 = r.sent,
                                    i = (0,
                                    r.t0)(r.t1, 0),
                                    r.next = 17,
                                    this.resolveName(i);
                                case 17:
                                    if (r.sent == e) {
                                        r.next = 20;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 20:
                                    return r.abrupt("return", i);
                                case 21:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "getAvatar",
                value: function(e) {
                    return P(this, void 0, void 0, (0,
                    o.Z)().mark((function r() {
                        var t, n, i, a, s, u, c;
                        return (0,
                        o.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    if (t = null,
                                    !(0,
                                    d.isHexString)(e)) {
                                        r.next = 40;
                                        break
                                    }
                                    return n = this.formatter.address(e),
                                    i = n.substring(2).toLowerCase() + ".addr.reverse",
                                    r.next = 6,
                                    this._getResolver(i, "getAvatar");
                                case 6:
                                    if (a = r.sent) {
                                        r.next = 9;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 9:
                                    return t = new z(this,a,i),
                                    r.prev = 10,
                                    r.next = 13,
                                    t.getAvatar();
                                case 13:
                                    if (!(s = r.sent)) {
                                        r.next = 16;
                                        break
                                    }
                                    return r.abrupt("return", s.url);
                                case 16:
                                    r.next = 22;
                                    break;
                                case 18:
                                    if (r.prev = 18,
                                    r.t0 = r.catch(10),
                                    r.t0.code === E.Logger.errors.CALL_EXCEPTION) {
                                        r.next = 22;
                                        break
                                    }
                                    throw r.t0;
                                case 22:
                                    return r.prev = 22,
                                    r.t1 = U,
                                    r.next = 26,
                                    this.call({
                                        to: a,
                                        data: "0x691f3431" + (0,
                                        g.VM)(i).substring(2)
                                    });
                                case 26:
                                    return r.t2 = r.sent,
                                    u = (0,
                                    r.t1)(r.t2, 0),
                                    r.next = 30,
                                    this.getResolver(u);
                                case 30:
                                    t = r.sent,
                                    r.next = 38;
                                    break;
                                case 33:
                                    if (r.prev = 33,
                                    r.t3 = r.catch(22),
                                    r.t3.code === E.Logger.errors.CALL_EXCEPTION) {
                                        r.next = 37;
                                        break
                                    }
                                    throw r.t3;
                                case 37:
                                    return r.abrupt("return", null);
                                case 38:
                                    r.next = 45;
                                    break;
                                case 40:
                                    return r.next = 42,
                                    this.getResolver(e);
                                case 42:
                                    if (t = r.sent) {
                                        r.next = 45;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 45:
                                    return r.next = 47,
                                    t.getAvatar();
                                case 47:
                                    if (null != (c = r.sent)) {
                                        r.next = 50;
                                        break
                                    }
                                    return r.abrupt("return", null);
                                case 50:
                                    return r.abrupt("return", c.url);
                                case 51:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[10, 18], [22, 33]])
                    }
                    )))
                }
            }, {
                key: "perform",
                value: function(e, r) {
                    return N.throwError(e + " not implemented", E.Logger.errors.NOT_IMPLEMENTED, {
                        operation: e
                    })
                }
            }, {
                key: "_startEvent",
                value: function(e) {
                    this.polling = this._events.filter((function(e) {
                        return e.pollable()
                    }
                    )).length > 0
                }
            }, {
                key: "_stopEvent",
                value: function(e) {
                    this.polling = this._events.filter((function(e) {
                        return e.pollable()
                    }
                    )).length > 0
                }
            }, {
                key: "_addEventListener",
                value: function(e, r, t) {
                    var n = new B(O(e),r,t);
                    return this._events.push(n),
                    this._startEvent(n),
                    this
                }
            }, {
                key: "on",
                value: function(e, r) {
                    return this._addEventListener(e, r, !1)
                }
            }, {
                key: "once",
                value: function(e, r) {
                    return this._addEventListener(e, r, !0)
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var r = this, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        n[i - 1] = arguments[i];
                    var a = !1
                      , o = []
                      , s = O(e);
                    return this._events = this._events.filter((function(e) {
                        return e.tag !== s || (setTimeout((function() {
                            e.listener.apply(r, n)
                        }
                        ), 0),
                        a = !0,
                        !e.once || (o.push(e),
                        !1))
                    }
                    )),
                    o.forEach((function(e) {
                        r._stopEvent(e)
                    }
                    )),
                    a
                }
            }, {
                key: "listenerCount",
                value: function(e) {
                    if (!e)
                        return this._events.length;
                    var r = O(e);
                    return this._events.filter((function(e) {
                        return e.tag === r
                    }
                    )).length
                }
            }, {
                key: "listeners",
                value: function(e) {
                    if (null == e)
                        return this._events.map((function(e) {
                            return e.listener
                        }
                        ));
                    var r = O(e);
                    return this._events.filter((function(e) {
                        return e.tag === r
                    }
                    )).map((function(e) {
                        return e.listener
                    }
                    ))
                }
            }, {
                key: "off",
                value: function(e, r) {
                    var t = this;
                    if (null == r)
                        return this.removeAllListeners(e);
                    var n = []
                      , i = !1
                      , a = O(e);
                    return this._events = this._events.filter((function(e) {
                        return e.tag !== a || e.listener != r || (!!i || (i = !0,
                        n.push(e),
                        !1))
                    }
                    )),
                    n.forEach((function(e) {
                        t._stopEvent(e)
                    }
                    )),
                    this
                }
            }, {
                key: "removeAllListeners",
                value: function(e) {
                    var r = this
                      , t = [];
                    if (null == e)
                        t = this._events,
                        this._events = [];
                    else {
                        var n = O(e);
                        this._events = this._events.filter((function(e) {
                            return e.tag !== n || (t.push(e),
                            !1)
                        }
                        ))
                    }
                    return t.forEach((function(e) {
                        r._stopEvent(e)
                    }
                    )),
                    this
                }
            }], [{
                key: "getFormatter",
                value: function() {
                    return null == J && (J = new S.Mb),
                    J
                }
            }, {
                key: "getNetwork",
                value: function(e) {
                    return (0,
                    v.H)(null == e ? "homestead" : e)
                }
            }]),
            t
        }(c.zt)
    },
    18519: function(e, r, t) {
        t.d(r, {
            H: function() {
                return I
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(97326)
          , o = t(60136)
          , s = t(29388)
          , u = t(74165)
          , c = t(15157)
          , l = t(19560)
          , f = t(52009)
          , h = t(54812)
          , d = t(54327)
          , p = t(28786)
          , g = t(5341)
          , v = t(23134)
          , m = t(2735)
          , y = t(49862)
          , b = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , w = new m.Logger(y.i);
        function k() {
            return (new Date).getTime()
        }
        function A(e) {
            for (var r = null, t = 0; t < e.length; t++) {
                var n = e[t];
                if (null == n)
                    return null;
                r ? r.name === n.name && r.chainId === n.chainId && (r.ensAddress === n.ensAddress || null == r.ensAddress && null == n.ensAddress) || w.throwArgumentError("provider mismatch", "networks", e) : r = n
            }
            return r
        }
        function E(e, r) {
            e = e.slice().sort();
            var t = Math.floor(e.length / 2);
            if (e.length % 2)
                return e[t];
            var n = e[t - 1]
              , i = e[t];
            return null != r && Math.abs(n - i) > r ? null : (n + i) / 2
        }
        function x(e) {
            if (null === e)
                return "null";
            if ("number" === typeof e || "boolean" === typeof e)
                return JSON.stringify(e);
            if ("string" === typeof e)
                return e;
            if (l.O$.isBigNumber(e))
                return e.toString();
            if (Array.isArray(e))
                return JSON.stringify(e.map((function(e) {
                    return x(e)
                }
                )));
            if ("object" === typeof e) {
                var r = Object.keys(e);
                return r.sort(),
                "{" + r.map((function(r) {
                    var t = e[r];
                    return t = "function" === typeof t ? "[function]" : x(t),
                    JSON.stringify(r) + ":" + t
                }
                )).join(",") + "}"
            }
            throw new Error("unknown value type: " + typeof e)
        }
        var S = 1;
        function P(e) {
            var r = null
              , t = null
              , n = new Promise((function(n) {
                r = function() {
                    t && (clearTimeout(t),
                    t = null),
                    n()
                }
                ,
                t = setTimeout(r, e)
            }
            ));
            return {
                cancel: r,
                getPromise: function() {
                    return n
                },
                wait: function(e) {
                    return n = n.then(e)
                }
            }
        }
        var N = [m.Logger.errors.CALL_EXCEPTION, m.Logger.errors.INSUFFICIENT_FUNDS, m.Logger.errors.NONCE_EXPIRED, m.Logger.errors.REPLACEMENT_UNDERPRICED, m.Logger.errors.UNPREDICTABLE_GAS_LIMIT]
          , R = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];
        function C(e, r) {
            var t = {
                weight: e.weight
            };
            return Object.defineProperty(t, "provider", {
                get: function() {
                    return e.provider
                }
            }),
            e.start && (t.start = e.start),
            r && (t.duration = r - e.start),
            e.done && (e.error ? t.error = e.error : t.result = e.result || null),
            t
        }
        function O(e, r, t) {
            var n = x;
            switch (r) {
            case "getBlockNumber":
                return function(r) {
                    var t = r.map((function(e) {
                        return e.result
                    }
                    ))
                      , n = E(r.map((function(e) {
                        return e.result
                    }
                    )), 2);
                    if (null != n)
                        return n = Math.ceil(n),
                        t.indexOf(n + 1) >= 0 && n++,
                        n >= e._highestBlockNumber && (e._highestBlockNumber = n),
                        e._highestBlockNumber
                }
                ;
            case "getGasPrice":
                return function(e) {
                    var r = e.map((function(e) {
                        return e.result
                    }
                    ));
                    return r.sort(),
                    r[Math.floor(r.length / 2)]
                }
                ;
            case "getEtherPrice":
                return function(e) {
                    return E(e.map((function(e) {
                        return e.result
                    }
                    )))
                }
                ;
            case "getBalance":
            case "getTransactionCount":
            case "getCode":
            case "getStorageAt":
            case "call":
            case "estimateGas":
            case "getLogs":
                break;
            case "getTransaction":
            case "getTransactionReceipt":
                n = function(e) {
                    return null == e ? null : ((e = (0,
                    h.shallowCopy)(e)).confirmations = -1,
                    x(e))
                }
                ;
                break;
            case "getBlock":
                n = t.includeTransactions ? function(e) {
                    return null == e ? null : ((e = (0,
                    h.shallowCopy)(e)).transactions = e.transactions.map((function(e) {
                        return (e = (0,
                        h.shallowCopy)(e)).confirmations = -1,
                        e
                    }
                    )),
                    x(e))
                }
                : function(e) {
                    return null == e ? null : x(e)
                }
                ;
                break;
            default:
                throw new Error("unknown method: " + r)
            }
            return function(e, r) {
                return function(t) {
                    var n = {};
                    t.forEach((function(r) {
                        var t = e(r.result);
                        n[t] || (n[t] = {
                            count: 0,
                            result: r.result
                        }),
                        n[t].count++
                    }
                    ));
                    for (var i = Object.keys(n), a = 0; a < i.length; a++) {
                        var o = n[i[a]];
                        if (o.count >= r)
                            return o.result
                    }
                }
            }(n, e.quorum)
        }
        function _(e, r) {
            return b(this, void 0, void 0, (0,
            u.Z)().mark((function t() {
                var n;
                return (0,
                u.Z)().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (!(null != (n = e.provider).blockNumber && n.blockNumber >= r || -1 === r)) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return", n);
                        case 3:
                            return t.abrupt("return", (0,
                            p.poll)((function() {
                                return new Promise((function(t, i) {
                                    setTimeout((function() {
                                        return n.blockNumber >= r ? t(n) : e.cancelled ? t(null) : t(void 0)
                                    }
                                    ), 0)
                                }
                                ))
                            }
                            ), {
                                oncePoll: n
                            }));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))
        }
        function T(e, r, t, n) {
            return b(this, void 0, void 0, (0,
            u.Z)().mark((function i() {
                var a, o;
                return (0,
                u.Z)().wrap((function(i) {
                    for (; ; )
                        switch (i.prev = i.next) {
                        case 0:
                            a = e.provider,
                            i.t0 = t,
                            i.next = "getBlockNumber" === i.t0 || "getGasPrice" === i.t0 ? 4 : "getEtherPrice" === i.t0 ? 5 : "getBalance" === i.t0 || "getTransactionCount" === i.t0 || "getCode" === i.t0 ? 8 : "getStorageAt" === i.t0 ? 13 : "getBlock" === i.t0 ? 18 : "call" === i.t0 || "estimateGas" === i.t0 ? 23 : "getTransaction" === i.t0 || "getTransactionReceipt" === i.t0 ? 30 : "getLogs" === i.t0 ? 31 : 37;
                            break;
                        case 4:
                            return i.abrupt("return", a[t]());
                        case 5:
                            if (!a.getEtherPrice) {
                                i.next = 7;
                                break
                            }
                            return i.abrupt("return", a.getEtherPrice());
                        case 7:
                            return i.abrupt("break", 37);
                        case 8:
                            if (!n.blockTag || !(0,
                            f.isHexString)(n.blockTag)) {
                                i.next = 12;
                                break
                            }
                            return i.next = 11,
                            _(e, r);
                        case 11:
                            a = i.sent;
                        case 12:
                            return i.abrupt("return", a[t](n.address, n.blockTag || "latest"));
                        case 13:
                            if (!n.blockTag || !(0,
                            f.isHexString)(n.blockTag)) {
                                i.next = 17;
                                break
                            }
                            return i.next = 16,
                            _(e, r);
                        case 16:
                            a = i.sent;
                        case 17:
                            return i.abrupt("return", a.getStorageAt(n.address, n.position, n.blockTag || "latest"));
                        case 18:
                            if (!n.blockTag || !(0,
                            f.isHexString)(n.blockTag)) {
                                i.next = 22;
                                break
                            }
                            return i.next = 21,
                            _(e, r);
                        case 21:
                            a = i.sent;
                        case 22:
                            return i.abrupt("return", a[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](n.blockTag || n.blockHash));
                        case 23:
                            if (!n.blockTag || !(0,
                            f.isHexString)(n.blockTag)) {
                                i.next = 27;
                                break
                            }
                            return i.next = 26,
                            _(e, r);
                        case 26:
                            a = i.sent;
                        case 27:
                            if ("call" !== t || !n.blockTag) {
                                i.next = 29;
                                break
                            }
                            return i.abrupt("return", a[t](n.transaction, n.blockTag));
                        case 29:
                            return i.abrupt("return", a[t](n.transaction));
                        case 30:
                            return i.abrupt("return", a[t](n.transactionHash));
                        case 31:
                            if (!((o = n.filter).fromBlock && (0,
                            f.isHexString)(o.fromBlock) || o.toBlock && (0,
                            f.isHexString)(o.toBlock))) {
                                i.next = 36;
                                break
                            }
                            return i.next = 35,
                            _(e, r);
                        case 35:
                            a = i.sent;
                        case 36:
                            return i.abrupt("return", a.getLogs(o));
                        case 37:
                            return i.abrupt("return", w.throwError("unknown method error", m.Logger.errors.UNKNOWN_ERROR, {
                                method: t,
                                params: n
                            }));
                        case 38:
                        case "end":
                            return i.stop()
                        }
                }
                ), i)
            }
            )))
        }
        var I = function(e) {
            (0,
            o.Z)(t, e);
            var r = (0,
            s.Z)(t);
            function t(e, i) {
                var o;
                (0,
                n.Z)(this, t),
                0 === e.length && w.throwArgumentError("missing providers", "providers", e);
                var s = e.map((function(e, r) {
                    if (c.zt.isProvider(e)) {
                        var t = (0,
                        v.Gp)(e) ? 2e3 : 750;
                        return Object.freeze({
                            provider: e,
                            weight: 1,
                            stallTimeout: t,
                            priority: 1
                        })
                    }
                    var n = (0,
                    h.shallowCopy)(e);
                    null == n.priority && (n.priority = 1),
                    null == n.stallTimeout && (n.stallTimeout = (0,
                    v.Gp)(e) ? 2e3 : 750),
                    null == n.weight && (n.weight = 1);
                    var i = n.weight;
                    return (i % 1 || i > 512 || i < 1) && w.throwArgumentError("invalid weight; must be integer in [1, 512]", "providers[".concat(r, "].weight"), i),
                    Object.freeze(n)
                }
                ))
                  , u = s.reduce((function(e, r) {
                    return e + r.weight
                }
                ), 0);
                null == i ? i = u / 2 : i > u && w.throwArgumentError("quorum will always fail; larger than total weight", "quorum", i);
                var l = A(s.map((function(e) {
                    return e.provider.network
                }
                )));
                return null == l && (l = new Promise((function(e, r) {
                    setTimeout((function() {
                        o.detectNetwork().then(e, r)
                    }
                    ), 0)
                }
                ))),
                o = r.call(this, l),
                (0,
                h.defineReadOnly)((0,
                a.Z)(o), "providerConfigs", Object.freeze(s)),
                (0,
                h.defineReadOnly)((0,
                a.Z)(o), "quorum", i),
                o._highestBlockNumber = -1,
                o
            }
            return (0,
            i.Z)(t, [{
                key: "detectNetwork",
                value: function() {
                    return b(this, void 0, void 0, (0,
                    u.Z)().mark((function e() {
                        var r;
                        return (0,
                        u.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Promise.all(this.providerConfigs.map((function(e) {
                                        return e.provider.getNetwork()
                                    }
                                    )));
                                case 2:
                                    return r = e.sent,
                                    e.abrupt("return", A(r));
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
                key: "perform",
                value: function(e, r) {
                    return b(this, void 0, void 0, (0,
                    u.Z)().mark((function t() {
                        var n, i, a, o, s, c, l, f, p, g, v = this;
                        return (0,
                        u.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("sendTransaction" !== e) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 3,
                                    Promise.all(this.providerConfigs.map((function(e) {
                                        return e.provider.sendTransaction(r.signedTransaction).then((function(e) {
                                            return e.hash
                                        }
                                        ), (function(e) {
                                            return e
                                        }
                                        ))
                                    }
                                    )));
                                case 3:
                                    n = t.sent,
                                    i = 0;
                                case 5:
                                    if (!(i < n.length)) {
                                        t.next = 12;
                                        break
                                    }
                                    if ("string" !== typeof (a = n[i])) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return", a);
                                case 9:
                                    i++,
                                    t.next = 5;
                                    break;
                                case 12:
                                    throw n[0];
                                case 13:
                                    if (-1 !== this._highestBlockNumber || "getBlockNumber" === e) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 16,
                                    this.getBlockNumber();
                                case 16:
                                    o = O(this, e, r),
                                    (s = (0,
                                    d.y)(this.providerConfigs.map(h.shallowCopy))).sort((function(e, r) {
                                        return e.priority - r.priority
                                    }
                                    )),
                                    c = this._highestBlockNumber,
                                    l = 0,
                                    f = !0,
                                    p = (0,
                                    u.Z)().mark((function t() {
                                        var n, i, a, d, p, g, m;
                                        return (0,
                                        u.Z)().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    n = k(),
                                                    i = s.filter((function(e) {
                                                        return e.runner && n - e.start < e.stallTimeout
                                                    }
                                                    )).reduce((function(e, r) {
                                                        return e + r.weight
                                                    }
                                                    ), 0),
                                                    a = (0,
                                                    u.Z)().mark((function t() {
                                                        var n, a;
                                                        return (0,
                                                        u.Z)().wrap((function(t) {
                                                            for (; ; )
                                                                switch (t.prev = t.next) {
                                                                case 0:
                                                                    n = s[l++],
                                                                    a = S++,
                                                                    n.start = k(),
                                                                    n.staller = P(n.stallTimeout),
                                                                    n.staller.wait((function() {
                                                                        n.staller = null
                                                                    }
                                                                    )),
                                                                    n.runner = T(n, c, e, r).then((function(t) {
                                                                        n.done = !0,
                                                                        n.result = t,
                                                                        v.listenerCount("debug") && v.emit("debug", {
                                                                            action: "request",
                                                                            rid: a,
                                                                            backend: C(n, k()),
                                                                            request: {
                                                                                method: e,
                                                                                params: (0,
                                                                                h.deepCopy)(r)
                                                                            },
                                                                            provider: v
                                                                        })
                                                                    }
                                                                    ), (function(t) {
                                                                        n.done = !0,
                                                                        n.error = t,
                                                                        v.listenerCount("debug") && v.emit("debug", {
                                                                            action: "request",
                                                                            rid: a,
                                                                            backend: C(n, k()),
                                                                            request: {
                                                                                method: e,
                                                                                params: (0,
                                                                                h.deepCopy)(r)
                                                                            },
                                                                            provider: v
                                                                        })
                                                                    }
                                                                    )),
                                                                    v.listenerCount("debug") && v.emit("debug", {
                                                                        action: "request",
                                                                        rid: a,
                                                                        backend: C(n, null),
                                                                        request: {
                                                                            method: e,
                                                                            params: (0,
                                                                            h.deepCopy)(r)
                                                                        },
                                                                        provider: v
                                                                    }),
                                                                    i += n.weight;
                                                                case 8:
                                                                case "end":
                                                                    return t.stop()
                                                                }
                                                        }
                                                        ), t)
                                                    }
                                                    ));
                                                case 3:
                                                    if (!(i < v.quorum && l < s.length)) {
                                                        t.next = 7;
                                                        break
                                                    }
                                                    return t.delegateYield(a(), "t0", 5);
                                                case 5:
                                                    t.next = 3;
                                                    break;
                                                case 7:
                                                    if (d = [],
                                                    s.forEach((function(e) {
                                                        !e.done && e.runner && (d.push(e.runner),
                                                        e.staller && d.push(e.staller.getPromise()))
                                                    }
                                                    )),
                                                    !d.length) {
                                                        t.next = 12;
                                                        break
                                                    }
                                                    return t.next = 12,
                                                    Promise.race(d);
                                                case 12:
                                                    if (!((p = s.filter((function(e) {
                                                        return e.done && null == e.error
                                                    }
                                                    ))).length >= v.quorum)) {
                                                        t.next = 22;
                                                        break
                                                    }
                                                    if (void 0 === (g = o(p))) {
                                                        t.next = 18;
                                                        break
                                                    }
                                                    return s.forEach((function(e) {
                                                        e.staller && e.staller.cancel(),
                                                        e.cancelled = !0
                                                    }
                                                    )),
                                                    t.abrupt("return", {
                                                        v: g
                                                    });
                                                case 18:
                                                    if (f) {
                                                        t.next = 21;
                                                        break
                                                    }
                                                    return t.next = 21,
                                                    P(100).getPromise();
                                                case 21:
                                                    f = !1;
                                                case 22:
                                                    if (m = s.reduce((function(e, r) {
                                                        if (!r.done || null == r.error)
                                                            return e;
                                                        var t = r.error.code;
                                                        return N.indexOf(t) >= 0 && (e[t] || (e[t] = {
                                                            error: r.error,
                                                            weight: 0
                                                        }),
                                                        e[t].weight += r.weight),
                                                        e
                                                    }
                                                    ), {}),
                                                    Object.keys(m).forEach((function(e) {
                                                        var r = m[e];
                                                        if (!(r.weight < v.quorum)) {
                                                            s.forEach((function(e) {
                                                                e.staller && e.staller.cancel(),
                                                                e.cancelled = !0
                                                            }
                                                            ));
                                                            var t = r.error
                                                              , n = {};
                                                            R.forEach((function(e) {
                                                                null != t[e] && (n[e] = t[e])
                                                            }
                                                            )),
                                                            w.throwError(t.reason || t.message, e, n)
                                                        }
                                                    }
                                                    )),
                                                    0 !== s.filter((function(e) {
                                                        return !e.done
                                                    }
                                                    )).length) {
                                                        t.next = 26;
                                                        break
                                                    }
                                                    return t.abrupt("return", "break");
                                                case 26:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    ));
                                case 23:
                                    return t.delegateYield(p(), "t0", 25);
                                case 25:
                                    if ("break" !== (g = t.t0)) {
                                        t.next = 28;
                                        break
                                    }
                                    return t.abrupt("break", 32);
                                case 28:
                                    if ("object" !== typeof g) {
                                        t.next = 30;
                                        break
                                    }
                                    return t.abrupt("return", g.v);
                                case 30:
                                    t.next = 23;
                                    break;
                                case 32:
                                    return s.forEach((function(e) {
                                        e.staller && e.staller.cancel(),
                                        e.cancelled = !0
                                    }
                                    )),
                                    t.abrupt("return", w.throwError("failed to meet quorum", m.Logger.errors.SERVER_ERROR, {
                                        method: e,
                                        params: r,
                                        results: s.map((function(e) {
                                            return C(e)
                                        }
                                        )),
                                        provider: this
                                    }));
                                case 34:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }]),
            t
        }(g.Zk)
    },
    23134: function(e, r, t) {
        t.d(r, {
            Ed: function() {
                return g
            },
            Gp: function() {
                return v
            },
            Mb: function() {
                return p
            },
            vh: function() {
                return y
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(28552)
          , o = t(19560)
          , s = t(52009)
          , u = t(81895)
          , c = t(54812)
          , l = t(65958)
          , f = t(2735)
          , h = t(49862)
          , d = new f.Logger(h.i)
          , p = function() {
            function e() {
                (0,
                n.Z)(this, e),
                this.formats = this.getDefaultFormats()
            }
            return (0,
            i.Z)(e, [{
                key: "getDefaultFormats",
                value: function() {
                    var r = this
                      , t = {}
                      , n = this.address.bind(this)
                      , i = this.bigNumber.bind(this)
                      , a = this.blockTag.bind(this)
                      , o = this.data.bind(this)
                      , s = this.hash.bind(this)
                      , u = this.hex.bind(this)
                      , l = this.number.bind(this)
                      , f = this.type.bind(this);
                    return t.transaction = {
                        hash: s,
                        type: f,
                        accessList: e.allowNull(this.accessList.bind(this), null),
                        blockHash: e.allowNull(s, null),
                        blockNumber: e.allowNull(l, null),
                        transactionIndex: e.allowNull(l, null),
                        confirmations: e.allowNull(l, null),
                        from: n,
                        gasPrice: e.allowNull(i),
                        maxPriorityFeePerGas: e.allowNull(i),
                        maxFeePerGas: e.allowNull(i),
                        gasLimit: i,
                        to: e.allowNull(n, null),
                        value: i,
                        nonce: l,
                        data: o,
                        r: e.allowNull(this.uint256),
                        s: e.allowNull(this.uint256),
                        v: e.allowNull(l),
                        creates: e.allowNull(n, null),
                        raw: e.allowNull(o)
                    },
                    t.transactionRequest = {
                        from: e.allowNull(n),
                        nonce: e.allowNull(l),
                        gasLimit: e.allowNull(i),
                        gasPrice: e.allowNull(i),
                        maxPriorityFeePerGas: e.allowNull(i),
                        maxFeePerGas: e.allowNull(i),
                        to: e.allowNull(n),
                        value: e.allowNull(i),
                        data: e.allowNull((function(e) {
                            return r.data(e, !0)
                        }
                        )),
                        type: e.allowNull(l),
                        accessList: e.allowNull(this.accessList.bind(this), null)
                    },
                    t.receiptLog = {
                        transactionIndex: l,
                        blockNumber: l,
                        transactionHash: s,
                        address: n,
                        topics: e.arrayOf(s),
                        data: o,
                        logIndex: l,
                        blockHash: s
                    },
                    t.receipt = {
                        to: e.allowNull(this.address, null),
                        from: e.allowNull(this.address, null),
                        contractAddress: e.allowNull(n, null),
                        transactionIndex: l,
                        root: e.allowNull(u),
                        gasUsed: i,
                        logsBloom: e.allowNull(o),
                        blockHash: s,
                        transactionHash: s,
                        logs: e.arrayOf(this.receiptLog.bind(this)),
                        blockNumber: l,
                        confirmations: e.allowNull(l, null),
                        cumulativeGasUsed: i,
                        effectiveGasPrice: e.allowNull(i),
                        status: e.allowNull(l),
                        type: f
                    },
                    t.block = {
                        hash: e.allowNull(s),
                        parentHash: s,
                        number: l,
                        timestamp: l,
                        nonce: e.allowNull(u),
                        difficulty: this.difficulty.bind(this),
                        gasLimit: i,
                        gasUsed: i,
                        miner: e.allowNull(n),
                        extraData: o,
                        transactions: e.allowNull(e.arrayOf(s)),
                        baseFeePerGas: e.allowNull(i)
                    },
                    t.blockWithTransactions = (0,
                    c.shallowCopy)(t.block),
                    t.blockWithTransactions.transactions = e.allowNull(e.arrayOf(this.transactionResponse.bind(this))),
                    t.filter = {
                        fromBlock: e.allowNull(a, void 0),
                        toBlock: e.allowNull(a, void 0),
                        blockHash: e.allowNull(s, void 0),
                        address: e.allowNull(n, void 0),
                        topics: e.allowNull(this.topics.bind(this), void 0)
                    },
                    t.filterLog = {
                        blockNumber: e.allowNull(l),
                        blockHash: e.allowNull(s),
                        transactionIndex: l,
                        removed: e.allowNull(this.boolean.bind(this)),
                        address: n,
                        data: e.allowFalsish(o, "0x"),
                        topics: e.arrayOf(s),
                        transactionHash: s,
                        logIndex: l
                    },
                    t
                }
            }, {
                key: "accessList",
                value: function(e) {
                    return (0,
                    l.accessListify)(e || [])
                }
            }, {
                key: "number",
                value: function(e) {
                    return "0x" === e ? 0 : o.O$.from(e).toNumber()
                }
            }, {
                key: "type",
                value: function(e) {
                    return "0x" === e || null == e ? 0 : o.O$.from(e).toNumber()
                }
            }, {
                key: "bigNumber",
                value: function(e) {
                    return o.O$.from(e)
                }
            }, {
                key: "boolean",
                value: function(e) {
                    if ("boolean" === typeof e)
                        return e;
                    if ("string" === typeof e) {
                        if ("true" === (e = e.toLowerCase()))
                            return !0;
                        if ("false" === e)
                            return !1
                    }
                    throw new Error("invalid boolean - " + e)
                }
            }, {
                key: "hex",
                value: function(e, r) {
                    return "string" === typeof e && (r || "0x" === e.substring(0, 2) || (e = "0x" + e),
                    (0,
                    s.isHexString)(e)) ? e.toLowerCase() : d.throwArgumentError("invalid hash", "value", e)
                }
            }, {
                key: "data",
                value: function(e, r) {
                    var t = this.hex(e, r);
                    if (t.length % 2 !== 0)
                        throw new Error("invalid data; odd-length - " + e);
                    return t
                }
            }, {
                key: "address",
                value: function(e) {
                    return (0,
                    a.getAddress)(e)
                }
            }, {
                key: "callAddress",
                value: function(e) {
                    if (!(0,
                    s.isHexString)(e, 32))
                        return null;
                    var r = (0,
                    a.getAddress)((0,
                    s.hexDataSlice)(e, 12));
                    return r === u.d ? null : r
                }
            }, {
                key: "contractAddress",
                value: function(e) {
                    return (0,
                    a.getContractAddress)(e)
                }
            }, {
                key: "blockTag",
                value: function(e) {
                    if (null == e)
                        return "latest";
                    if ("earliest" === e)
                        return "0x0";
                    switch (e) {
                    case "earliest":
                        return "0x0";
                    case "latest":
                    case "pending":
                    case "safe":
                    case "finalized":
                        return e
                    }
                    if ("number" === typeof e || (0,
                    s.isHexString)(e))
                        return (0,
                        s.hexValue)(e);
                    throw new Error("invalid blockTag")
                }
            }, {
                key: "hash",
                value: function(e, r) {
                    var t = this.hex(e, r);
                    return 32 !== (0,
                    s.hexDataLength)(t) ? d.throwArgumentError("invalid hash", "value", e) : t
                }
            }, {
                key: "difficulty",
                value: function(e) {
                    if (null == e)
                        return null;
                    var r = o.O$.from(e);
                    try {
                        return r.toNumber()
                    } catch (t) {}
                    return null
                }
            }, {
                key: "uint256",
                value: function(e) {
                    if (!(0,
                    s.isHexString)(e))
                        throw new Error("invalid uint256");
                    return (0,
                    s.hexZeroPad)(e, 32)
                }
            }, {
                key: "_block",
                value: function(r, t) {
                    null != r.author && null == r.miner && (r.miner = r.author);
                    var n = null != r._difficulty ? r._difficulty : r.difficulty
                      , i = e.check(t, r);
                    return i._difficulty = null == n ? null : o.O$.from(n),
                    i
                }
            }, {
                key: "block",
                value: function(e) {
                    return this._block(e, this.formats.block)
                }
            }, {
                key: "blockWithTransactions",
                value: function(e) {
                    return this._block(e, this.formats.blockWithTransactions)
                }
            }, {
                key: "transactionRequest",
                value: function(r) {
                    return e.check(this.formats.transactionRequest, r)
                }
            }, {
                key: "transactionResponse",
                value: function(r) {
                    null != r.gas && null == r.gasLimit && (r.gasLimit = r.gas),
                    r.to && o.O$.from(r.to).isZero() && (r.to = "0x0000000000000000000000000000000000000000"),
                    null != r.input && null == r.data && (r.data = r.input),
                    null == r.to && null == r.creates && (r.creates = this.contractAddress(r)),
                    1 !== r.type && 2 !== r.type || null != r.accessList || (r.accessList = []);
                    var t = e.check(this.formats.transaction, r);
                    if (null != r.chainId) {
                        var n = r.chainId;
                        (0,
                        s.isHexString)(n) && (n = o.O$.from(n).toNumber()),
                        t.chainId = n
                    } else {
                        var i = r.networkId;
                        null == i && null == t.v && (i = r.chainId),
                        (0,
                        s.isHexString)(i) && (i = o.O$.from(i).toNumber()),
                        "number" !== typeof i && null != t.v && ((i = (t.v - 35) / 2) < 0 && (i = 0),
                        i = parseInt(i)),
                        "number" !== typeof i && (i = 0),
                        t.chainId = i
                    }
                    return t.blockHash && "x" === t.blockHash.replace(/0/g, "") && (t.blockHash = null),
                    t
                }
            }, {
                key: "transaction",
                value: function(e) {
                    return (0,
                    l.parse)(e)
                }
            }, {
                key: "receiptLog",
                value: function(r) {
                    return e.check(this.formats.receiptLog, r)
                }
            }, {
                key: "receipt",
                value: function(r) {
                    var t = e.check(this.formats.receipt, r);
                    if (null != t.root)
                        if (t.root.length <= 4) {
                            var n = o.O$.from(t.root).toNumber();
                            0 === n || 1 === n ? (null != t.status && t.status !== n && d.throwArgumentError("alt-root-status/status mismatch", "value", {
                                root: t.root,
                                status: t.status
                            }),
                            t.status = n,
                            delete t.root) : d.throwArgumentError("invalid alt-root-status", "value.root", t.root)
                        } else
                            66 !== t.root.length && d.throwArgumentError("invalid root hash", "value.root", t.root);
                    return null != t.status && (t.byzantium = !0),
                    t
                }
            }, {
                key: "topics",
                value: function(e) {
                    var r = this;
                    return Array.isArray(e) ? e.map((function(e) {
                        return r.topics(e)
                    }
                    )) : null != e ? this.hash(e, !0) : null
                }
            }, {
                key: "filter",
                value: function(r) {
                    return e.check(this.formats.filter, r)
                }
            }, {
                key: "filterLog",
                value: function(r) {
                    return e.check(this.formats.filterLog, r)
                }
            }], [{
                key: "check",
                value: function(e, r) {
                    var t = {};
                    for (var n in e)
                        try {
                            var i = e[n](r[n]);
                            void 0 !== i && (t[n] = i)
                        } catch (a) {
                            throw a.checkKey = n,
                            a.checkValue = r[n],
                            a
                        }
                    return t
                }
            }, {
                key: "allowNull",
                value: function(e, r) {
                    return function(t) {
                        return null == t ? r : e(t)
                    }
                }
            }, {
                key: "allowFalsish",
                value: function(e, r) {
                    return function(t) {
                        return t ? e(t) : r
                    }
                }
            }, {
                key: "arrayOf",
                value: function(e) {
                    return function(r) {
                        if (!Array.isArray(r))
                            throw new Error("not an array");
                        var t = [];
                        return r.forEach((function(r) {
                            t.push(e(r))
                        }
                        )),
                        t
                    }
                }
            }]),
            e
        }();
        function g(e) {
            return e && "function" === typeof e.isCommunityResource
        }
        function v(e) {
            return g(e) && e.isCommunityResource()
        }
        var m = !1;
        function y() {
            m || (m = !0,
            console.log("========= NOTICE ========="),
            console.log("Request-Rate Exceeded  (this message will not be repeated)"),
            console.log(""),
            console.log("The default API keys for each service are provided as a highly-throttled,"),
            console.log("community resource for low-traffic projects and early prototyping."),
            console.log(""),
            console.log("While your application will continue to function, we highly recommended"),
            console.log("signing up for your own API keys to improve performance, increase your"),
            console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."),
            console.log(""),
            console.log("For more details: https://docs.ethers.io/api-keys/"),
            console.log("=========================="))
        }
    },
    47910: function(e, r, t) {
        t.r(r),
        t.d(r, {
            AlchemyProvider: function() {
                return _
            },
            AlchemyWebSocketProvider: function() {
                return O
            },
            AnkrProvider: function() {
                return L
            },
            BaseProvider: function() {
                return a.Zk
            },
            CloudflareProvider: function() {
                return D
            },
            EtherscanProvider: function() {
                return W
            },
            FallbackProvider: function() {
                return Q.H
            },
            Formatter: function() {
                return h.Mb
            },
            InfuraProvider: function() {
                return re
            },
            InfuraWebSocketProvider: function() {
                return ee
            },
            IpcProvider: function() {
                return Y
            },
            JsonRpcBatchProvider: function() {
                return te
            },
            JsonRpcProvider: function() {
                return y.r
            },
            JsonRpcSigner: function() {
                return y.C
            },
            NodesmithProvider: function() {
                return ie
            },
            PocketProvider: function() {
                return se
            },
            Provider: function() {
                return n.zt
            },
            Resolver: function() {
                return a.H2
            },
            StaticJsonRpcProvider: function() {
                return N.c
            },
            UrlJsonRpcProvider: function() {
                return N.l
            },
            Web3Provider: function() {
                return ue.Q
            },
            WebSocketProvider: function() {
                return P
            },
            getDefaultProvider: function() {
                return le
            },
            getNetwork: function() {
                return i.H
            },
            isCommunityResourcable: function() {
                return h.Ed
            },
            isCommunityResource: function() {
                return h.Gp
            },
            showThrottleMessage: function() {
                return h.vh
            }
        });
        var n = t(15157)
          , i = t(88133)
          , a = t(5341)
          , o = t(15671)
          , s = t(43144)
          , u = t(97326)
          , c = t(60136)
          , l = t(29388)
          , f = t(54812)
          , h = t(23134)
          , d = t(74165)
          , p = t(82963)
          , g = t(11752)
          , v = t(61120)
          , m = t(19560)
          , y = t(42416)
          , b = t(2735)
          , w = t(49862)
          , k = null;
        try {
            if (null == (k = WebSocket))
                throw new Error("inject please")
        } catch (fe) {
            var A = new b.Logger(w.i);
            k = function() {
                A.throwError("WebSockets not supported in this environment", b.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new WebSocket()"
                })
            }
        }
        var E = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , x = new b.Logger(w.i)
          , S = 1
          , P = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t(e, n) {
                var i, a;
                (0,
                o.Z)(this, t),
                "any" === n && x.throwError("WebSocketProvider does not support 'any' network yet", b.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "network:any"
                }),
                (a = "string" === typeof e ? r.call(this, e, n) : r.call(this, "_websocket", n))._pollingInterval = -1,
                a._wsReady = !1,
                "string" === typeof e ? (0,
                f.defineReadOnly)((0,
                u.Z)(a), "_websocket", new k(a.connection.url)) : (0,
                f.defineReadOnly)((0,
                u.Z)(a), "_websocket", e),
                (0,
                f.defineReadOnly)((0,
                u.Z)(a), "_requests", {}),
                (0,
                f.defineReadOnly)((0,
                u.Z)(a), "_subs", {}),
                (0,
                f.defineReadOnly)((0,
                u.Z)(a), "_subIds", {}),
                (0,
                f.defineReadOnly)((0,
                u.Z)(a), "_detectNetwork", (0,
                g.Z)((i = (0,
                u.Z)(a),
                (0,
                v.Z)(t.prototype)), "detectNetwork", i).call(i)),
                a.websocket.onopen = function() {
                    a._wsReady = !0,
                    Object.keys(a._requests).forEach((function(e) {
                        a.websocket.send(a._requests[e].payload)
                    }
                    ))
                }
                ,
                a.websocket.onmessage = function(e) {
                    var r = e.data
                      , t = JSON.parse(r);
                    if (null != t.id) {
                        var n = String(t.id)
                          , i = a._requests[n];
                        if (delete a._requests[n],
                        void 0 !== t.result)
                            i.callback(null, t.result),
                            a.emit("debug", {
                                action: "response",
                                request: JSON.parse(i.payload),
                                response: t.result,
                                provider: (0,
                                u.Z)(a)
                            });
                        else {
                            var o = null;
                            t.error ? (o = new Error(t.error.message || "unknown error"),
                            (0,
                            f.defineReadOnly)(o, "code", t.error.code || null),
                            (0,
                            f.defineReadOnly)(o, "response", r)) : o = new Error("unknown error"),
                            i.callback(o, void 0),
                            a.emit("debug", {
                                action: "response",
                                error: o,
                                request: JSON.parse(i.payload),
                                provider: (0,
                                u.Z)(a)
                            })
                        }
                    } else if ("eth_subscription" === t.method) {
                        var s = a._subs[t.params.subscription];
                        s && s.processFunc(t.params.result)
                    } else
                        console.warn("this should not happen")
                }
                ;
                var s = setInterval((function() {
                    a.emit("poll")
                }
                ), 1e3);
                return s.unref && s.unref(),
                (0,
                p.Z)(a)
            }
            return (0,
            s.Z)(t, [{
                key: "websocket",
                get: function() {
                    return this._websocket
                }
            }, {
                key: "detectNetwork",
                value: function() {
                    return this._detectNetwork
                }
            }, {
                key: "pollingInterval",
                get: function() {
                    return 0
                },
                set: function(e) {
                    x.throwError("cannot set polling interval on WebSocketProvider", b.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPollingInterval"
                    })
                }
            }, {
                key: "resetEventsBlock",
                value: function(e) {
                    x.throwError("cannot reset events block on WebSocketProvider", b.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "resetEventBlock"
                    })
                }
            }, {
                key: "poll",
                value: function() {
                    return E(this, void 0, void 0, (0,
                    d.Z)().mark((function e() {
                        return (0,
                        d.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", null);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }
            }, {
                key: "polling",
                set: function(e) {
                    e && x.throwError("cannot set polling on WebSocketProvider", b.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "setPolling"
                    })
                }
            }, {
                key: "send",
                value: function(e, r) {
                    var t = this
                      , n = S++;
                    return new Promise((function(i, a) {
                        var o = JSON.stringify({
                            method: e,
                            params: r,
                            id: n,
                            jsonrpc: "2.0"
                        });
                        t.emit("debug", {
                            action: "request",
                            request: JSON.parse(o),
                            provider: t
                        }),
                        t._requests[String(n)] = {
                            callback: function(e, r) {
                                return e ? a(e) : i(r)
                            },
                            payload: o
                        },
                        t._wsReady && t.websocket.send(o)
                    }
                    ))
                }
            }, {
                key: "_subscribe",
                value: function(e, r, t) {
                    return E(this, void 0, void 0, (0,
                    d.Z)().mark((function n() {
                        var i, a, o = this;
                        return (0,
                        d.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return null == (i = this._subIds[e]) && (i = Promise.all(r).then((function(e) {
                                        return o.send("eth_subscribe", e)
                                    }
                                    )),
                                    this._subIds[e] = i),
                                    n.next = 4,
                                    i;
                                case 4:
                                    a = n.sent,
                                    this._subs[a] = {
                                        tag: e,
                                        processFunc: t
                                    };
                                case 6:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "_startEvent",
                value: function(e) {
                    var r = this;
                    switch (e.type) {
                    case "block":
                        this._subscribe("block", ["newHeads"], (function(e) {
                            var t = m.O$.from(e.number).toNumber();
                            r._emitted.block = t,
                            r.emit("block", t)
                        }
                        ));
                        break;
                    case "pending":
                        this._subscribe("pending", ["newPendingTransactions"], (function(e) {
                            r.emit("pending", e)
                        }
                        ));
                        break;
                    case "filter":
                        this._subscribe(e.tag, ["logs", this._getFilter(e.filter)], (function(t) {
                            null == t.removed && (t.removed = !1),
                            r.emit(e.filter, r.formatter.filterLog(t))
                        }
                        ));
                        break;
                    case "tx":
                        var t = function(e) {
                            var t = e.hash;
                            r.getTransactionReceipt(t).then((function(e) {
                                e && r.emit(t, e)
                            }
                            ))
                        };
                        t(e),
                        this._subscribe("tx", ["newHeads"], (function(e) {
                            r._events.filter((function(e) {
                                return "tx" === e.type
                            }
                            )).forEach(t)
                        }
                        ));
                        break;
                    case "debug":
                    case "poll":
                    case "willPoll":
                    case "didPoll":
                    case "error":
                        break;
                    default:
                        console.log("unhandled:", e)
                    }
                }
            }, {
                key: "_stopEvent",
                value: function(e) {
                    var r = this
                      , t = e.tag;
                    if ("tx" === e.type) {
                        if (this._events.filter((function(e) {
                            return "tx" === e.type
                        }
                        )).length)
                            return;
                        t = "tx"
                    } else if (this.listenerCount(e.event))
                        return;
                    var n = this._subIds[t];
                    n && (delete this._subIds[t],
                    n.then((function(e) {
                        r._subs[e] && (delete r._subs[e],
                        r.send("eth_unsubscribe", [e]))
                    }
                    )))
                }
            }, {
                key: "destroy",
                value: function() {
                    return E(this, void 0, void 0, (0,
                    d.Z)().mark((function e() {
                        var r = this;
                        return (0,
                        d.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.websocket.readyState !== k.CONNECTING) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3,
                                    new Promise((function(e) {
                                        r.websocket.onopen = function() {
                                            e(!0)
                                        }
                                        ,
                                        r.websocket.onerror = function() {
                                            e(!1)
                                        }
                                    }
                                    ));
                                case 3:
                                    this.websocket.close(1e3);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }], [{
                key: "defaultUrl",
                value: function() {
                    return "ws://localhost:8546"
                }
            }]),
            t
        }(y.r)
          , N = t(74175)
          , R = new b.Logger(w.i)
          , C = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC"
          , O = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t(e, n) {
                var i;
                (0,
                o.Z)(this, t);
                var a = new _(e,n)
                  , s = a.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi.");
                return i = r.call(this, s, a.network),
                (0,
                f.defineReadOnly)((0,
                u.Z)(i), "apiKey", a.apiKey),
                i
            }
            return (0,
            s.Z)(t, [{
                key: "isCommunityResource",
                value: function() {
                    return this.apiKey === C
                }
            }]),
            t
        }(P)
          , _ = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                o.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            s.Z)(t, [{
                key: "isCommunityResource",
                value: function() {
                    return this.apiKey === C
                }
            }], [{
                key: "getWebSocketProvider",
                value: function(e, r) {
                    return new O(e,r)
                }
            }, {
                key: "getApiKey",
                value: function(e) {
                    return null == e ? C : (e && "string" !== typeof e && R.throwArgumentError("invalid apiKey", "apiKey", e),
                    e)
                }
            }, {
                key: "getUrl",
                value: function(e, r) {
                    var t = null;
                    switch (e.name) {
                    case "homestead":
                        t = "eth-mainnet.alchemyapi.io/v2/";
                        break;
                    case "goerli":
                        t = "eth-goerli.g.alchemy.com/v2/";
                        break;
                    case "matic":
                        t = "polygon-mainnet.g.alchemy.com/v2/";
                        break;
                    case "maticmum":
                        t = "polygon-mumbai.g.alchemy.com/v2/";
                        break;
                    case "arbitrum":
                        t = "arb-mainnet.g.alchemy.com/v2/";
                        break;
                    case "arbitrum-goerli":
                        t = "arb-goerli.g.alchemy.com/v2/";
                        break;
                    case "optimism":
                        t = "opt-mainnet.g.alchemy.com/v2/";
                        break;
                    case "optimism-goerli":
                        t = "opt-goerli.g.alchemy.com/v2/";
                        break;
                    default:
                        R.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return {
                        allowGzip: !0,
                        url: "https://" + t + r,
                        throttleCallback: function(e, t) {
                            return r === C && (0,
                            h.vh)(),
                            Promise.resolve(!0)
                        }
                    }
                }
            }]),
            t
        }(N.l)
          , T = new b.Logger(w.i)
          , I = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
        function B(e) {
            switch (e) {
            case "homestead":
                return "rpc.ankr.com/eth/";
            case "ropsten":
                return "rpc.ankr.com/eth_ropsten/";
            case "rinkeby":
                return "rpc.ankr.com/eth_rinkeby/";
            case "goerli":
                return "rpc.ankr.com/eth_goerli/";
            case "matic":
                return "rpc.ankr.com/polygon/";
            case "arbitrum":
                return "rpc.ankr.com/arbitrum/"
            }
            return T.throwArgumentError("unsupported network", "name", e)
        }
        var L = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                o.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            s.Z)(t, [{
                key: "isCommunityResource",
                value: function() {
                    return this.apiKey === I
                }
            }], [{
                key: "getApiKey",
                value: function(e) {
                    return null == e ? I : e
                }
            }, {
                key: "getUrl",
                value: function(e, r) {
                    null == r && (r = I);
                    var t = {
                        allowGzip: !0,
                        url: "https://" + B(e.name) + r,
                        throttleCallback: function(e, t) {
                            return r.apiKey === I && (0,
                            h.vh)(),
                            Promise.resolve(!0)
                        }
                    };
                    return null != r.projectSecret && (t.user = "",
                    t.password = r.projectSecret),
                    t
                }
            }]),
            t
        }(N.l)
          , Z = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , F = new b.Logger(w.i)
          , D = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                o.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            s.Z)(t, [{
                key: "perform",
                value: function(e, r) {
                    var n = this
                      , i = Object.create(null, {
                        perform: {
                            get: function() {
                                return (0,
                                g.Z)((0,
                                v.Z)(t.prototype), "perform", n)
                            }
                        }
                    });
                    return Z(this, void 0, void 0, (0,
                    d.Z)().mark((function t() {
                        var n;
                        return (0,
                        d.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("getBlockNumber" !== e) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 3,
                                    i.perform.call(this, "getBlock", {
                                        blockTag: "latest"
                                    });
                                case 3:
                                    return n = t.sent,
                                    t.abrupt("return", n.number);
                                case 5:
                                    return t.abrupt("return", i.perform.call(this, e, r));
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )))
                }
            }], [{
                key: "getApiKey",
                value: function(e) {
                    return null != e && F.throwArgumentError("apiKey not supported for cloudflare", "apiKey", e),
                    null
                }
            }, {
                key: "getUrl",
                value: function(e, r) {
                    var t = null;
                    if ("homestead" === e.name)
                        t = "https://cloudflare-eth.com/";
                    else
                        F.throwArgumentError("unsupported network", "network", arguments[0]);
                    return t
                }
            }]),
            t
        }(N.l)
          , M = t(52009)
          , U = t(65958)
          , G = t(28786)
          , H = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , j = new b.Logger(w.i);
        function K(e) {
            var r = {};
            for (var t in e)
                if (null != e[t]) {
                    var n = e[t];
                    "type" === t && 0 === n || (n = {
                        type: !0,
                        gasLimit: !0,
                        gasPrice: !0,
                        maxFeePerGs: !0,
                        maxPriorityFeePerGas: !0,
                        nonce: !0,
                        value: !0
                    }[t] ? (0,
                    M.hexValue)((0,
                    M.hexlify)(n)) : "accessList" === t ? "[" + (0,
                    U.accessListify)(n).map((function(e) {
                        return '{address:"'.concat(e.address, '",storageKeys:["').concat(e.storageKeys.join('","'), '"]}')
                    }
                    )).join(",") + "]" : (0,
                    M.hexlify)(n),
                    r[t] = n)
                }
            return r
        }
        function q(e) {
            if (0 == e.status && ("No records found" === e.message || "No transactions found" === e.message))
                return e.result;
            if (1 != e.status || "string" !== typeof e.message || !e.message.match(/^OK/)) {
                var r = new Error("invalid response");
                throw r.result = JSON.stringify(e),
                (e.result || "").toLowerCase().indexOf("rate limit") >= 0 && (r.throttleRetry = !0),
                r
            }
            return e.result
        }
        function z(e) {
            if (e && 0 == e.status && "NOTOK" == e.message && (e.result || "").toLowerCase().indexOf("rate limit") >= 0) {
                var r = new Error("throttled response");
                throw r.result = JSON.stringify(e),
                r.throttleRetry = !0,
                r
            }
            if ("2.0" != e.jsonrpc) {
                var t = new Error("invalid response");
                throw t.result = JSON.stringify(e),
                t
            }
            if (e.error) {
                var n = new Error(e.error.message || "unknown error");
                throw e.error.code && (n.code = e.error.code),
                e.error.data && (n.data = e.error.data),
                n
            }
            return e.result
        }
        function J(e) {
            if ("pending" === e)
                throw new Error("pending not supported");
            return "latest" === e ? e : parseInt(e.substring(2), 16)
        }
        function V(e, r, t) {
            if ("call" === e && r.code === b.Logger.errors.SERVER_ERROR) {
                var n = r.error;
                if (n && (n.message.match(/reverted/i) || n.message.match(/VM execution error/i))) {
                    var i = n.data;
                    if (i && (i = "0x" + i.replace(/^.*0x/i, "")),
                    (0,
                    M.isHexString)(i))
                        return i;
                    j.throwError("missing revert data in call exception", b.Logger.errors.CALL_EXCEPTION, {
                        error: r,
                        data: "0x"
                    })
                }
            }
            var a = r.message;
            throw r.code === b.Logger.errors.SERVER_ERROR && (r.error && "string" === typeof r.error.message ? a = r.error.message : "string" === typeof r.body ? a = r.body : "string" === typeof r.responseText && (a = r.responseText)),
            (a = (a || "").toLowerCase()).match(/insufficient funds/) && j.throwError("insufficient funds for intrinsic transaction cost", b.Logger.errors.INSUFFICIENT_FUNDS, {
                error: r,
                method: e,
                transaction: t
            }),
            a.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && j.throwError("nonce has already been used", b.Logger.errors.NONCE_EXPIRED, {
                error: r,
                method: e,
                transaction: t
            }),
            a.match(/another transaction with same nonce/) && j.throwError("replacement fee too low", b.Logger.errors.REPLACEMENT_UNDERPRICED, {
                error: r,
                method: e,
                transaction: t
            }),
            a.match(/execution failed due to an exception|execution reverted/) && j.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", b.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                error: r,
                method: e,
                transaction: t
            }),
            r
        }
        var W = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t(e, n) {
                var i;
                return (0,
                o.Z)(this, t),
                i = r.call(this, e),
                (0,
                f.defineReadOnly)((0,
                u.Z)(i), "baseUrl", i.getBaseUrl()),
                (0,
                f.defineReadOnly)((0,
                u.Z)(i), "apiKey", n || null),
                i
            }
            return (0,
            s.Z)(t, [{
                key: "getBaseUrl",
                value: function() {
                    switch (this.network ? this.network.name : "invalid") {
                    case "homestead":
                        return "https://api.etherscan.io";
                    case "goerli":
                        return "https://api-goerli.etherscan.io";
                    case "sepolia":
                        return "https://api-sepolia.etherscan.io";
                    case "matic":
                        return "https://api.polygonscan.com";
                    case "maticmum":
                        return "https://api-testnet.polygonscan.com";
                    case "arbitrum":
                        return "https://api.arbiscan.io";
                    case "arbitrum-goerli":
                        return "https://api-goerli.arbiscan.io";
                    case "optimism":
                        return "https://api-optimistic.etherscan.io";
                    case "optimism-goerli":
                        return "https://api-goerli-optimistic.etherscan.io"
                    }
                    return j.throwArgumentError("unsupported network", "network", this.network.name)
                }
            }, {
                key: "getUrl",
                value: function(e, r) {
                    var t = Object.keys(r).reduce((function(e, t) {
                        var n = r[t];
                        return null != n && (e += "&".concat(t, "=").concat(n)),
                        e
                    }
                    ), "")
                      , n = this.apiKey ? "&apikey=".concat(this.apiKey) : "";
                    return "".concat(this.baseUrl, "/api?module=").concat(e).concat(t).concat(n)
                }
            }, {
                key: "getPostUrl",
                value: function() {
                    return "".concat(this.baseUrl, "/api")
                }
            }, {
                key: "getPostData",
                value: function(e, r) {
                    return r.module = e,
                    r.apikey = this.apiKey,
                    r
                }
            }, {
                key: "fetch",
                value: function(e, r, t) {
                    return H(this, void 0, void 0, (0,
                    d.Z)().mark((function n() {
                        var i, a, o, s, u, c, l = this;
                        return (0,
                        d.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return i = t ? this.getPostUrl() : this.getUrl(e, r),
                                    a = t ? this.getPostData(e, r) : null,
                                    o = "proxy" === e ? z : q,
                                    this.emit("debug", {
                                        action: "request",
                                        request: i,
                                        provider: this
                                    }),
                                    s = {
                                        url: i,
                                        throttleSlotInterval: 1e3,
                                        throttleCallback: function(e, r) {
                                            return l.isCommunityResource() && (0,
                                            h.vh)(),
                                            Promise.resolve(!0)
                                        }
                                    },
                                    u = null,
                                    a && (s.headers = {
                                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                                    },
                                    u = Object.keys(a).map((function(e) {
                                        return "".concat(e, "=").concat(a[e])
                                    }
                                    )).join("&")),
                                    n.next = 9,
                                    (0,
                                    G.fetchJson)(s, u, o || z);
                                case 9:
                                    return c = n.sent,
                                    this.emit("debug", {
                                        action: "response",
                                        request: i,
                                        response: (0,
                                        f.deepCopy)(c),
                                        provider: this
                                    }),
                                    n.abrupt("return", c);
                                case 12:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "detectNetwork",
                value: function() {
                    return H(this, void 0, void 0, (0,
                    d.Z)().mark((function e() {
                        return (0,
                        d.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.network);
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }, {
                key: "perform",
                value: function(e, r) {
                    var n = this
                      , i = Object.create(null, {
                        perform: {
                            get: function() {
                                return (0,
                                g.Z)((0,
                                v.Z)(t.prototype), "perform", n)
                            }
                        }
                    });
                    return H(this, void 0, void 0, (0,
                    d.Z)().mark((function t() {
                        var n, a, o, s, u, c, l, f, h;
                        return (0,
                        d.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    t.t0 = e,
                                    t.next = "getBlockNumber" === t.t0 ? 3 : "getGasPrice" === t.t0 ? 4 : "getBalance" === t.t0 ? 5 : "getTransactionCount" === t.t0 ? 6 : "getCode" === t.t0 ? 7 : "getStorageAt" === t.t0 ? 8 : "sendTransaction" === t.t0 ? 9 : "getBlock" === t.t0 ? 10 : "getTransaction" === t.t0 ? 13 : "getTransactionReceipt" === t.t0 ? 14 : "call" === t.t0 ? 15 : "estimateGas" === t.t0 ? 29 : "getLogs" === t.t0 ? 41 : "getEtherPrice" === t.t0 ? 65 : 72;
                                    break;
                                case 3:
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_blockNumber"
                                    }));
                                case 4:
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_gasPrice"
                                    }));
                                case 5:
                                    return t.abrupt("return", this.fetch("account", {
                                        action: "balance",
                                        address: r.address,
                                        tag: r.blockTag
                                    }));
                                case 6:
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_getTransactionCount",
                                        address: r.address,
                                        tag: r.blockTag
                                    }));
                                case 7:
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_getCode",
                                        address: r.address,
                                        tag: r.blockTag
                                    }));
                                case 8:
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_getStorageAt",
                                        address: r.address,
                                        position: r.position,
                                        tag: r.blockTag
                                    }));
                                case 9:
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_sendRawTransaction",
                                        hex: r.signedTransaction
                                    }, !0).catch((function(e) {
                                        return V("sendTransaction", e, r.signedTransaction)
                                    }
                                    )));
                                case 10:
                                    if (!r.blockTag) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_getBlockByNumber",
                                        tag: r.blockTag,
                                        boolean: r.includeTransactions ? "true" : "false"
                                    }));
                                case 12:
                                    throw new Error("getBlock by blockHash not implemented");
                                case 13:
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_getTransactionByHash",
                                        txhash: r.transactionHash
                                    }));
                                case 14:
                                    return t.abrupt("return", this.fetch("proxy", {
                                        action: "eth_getTransactionReceipt",
                                        txhash: r.transactionHash
                                    }));
                                case 15:
                                    if ("latest" === r.blockTag) {
                                        t.next = 17;
                                        break
                                    }
                                    throw new Error("EtherscanProvider does not support blockTag for call");
                                case 17:
                                    return (n = K(r.transaction)).module = "proxy",
                                    n.action = "eth_call",
                                    t.prev = 20,
                                    t.next = 23,
                                    this.fetch("proxy", n, !0);
                                case 23:
                                    return t.abrupt("return", t.sent);
                                case 26:
                                    return t.prev = 26,
                                    t.t1 = t.catch(20),
                                    t.abrupt("return", V("call", t.t1, r.transaction));
                                case 29:
                                    return (a = K(r.transaction)).module = "proxy",
                                    a.action = "eth_estimateGas",
                                    t.prev = 32,
                                    t.next = 35,
                                    this.fetch("proxy", a, !0);
                                case 35:
                                    return t.abrupt("return", t.sent);
                                case 38:
                                    return t.prev = 38,
                                    t.t2 = t.catch(32),
                                    t.abrupt("return", V("estimateGas", t.t2, r.transaction));
                                case 41:
                                    return o = {
                                        action: "getLogs"
                                    },
                                    r.filter.fromBlock && (o.fromBlock = J(r.filter.fromBlock)),
                                    r.filter.toBlock && (o.toBlock = J(r.filter.toBlock)),
                                    r.filter.address && (o.address = r.filter.address),
                                    r.filter.topics && r.filter.topics.length > 0 && (r.filter.topics.length > 1 && j.throwError("unsupported topic count", b.Logger.errors.UNSUPPORTED_OPERATION, {
                                        topics: r.filter.topics
                                    }),
                                    1 === r.filter.topics.length && ("string" === typeof (s = r.filter.topics[0]) && 66 === s.length || j.throwError("unsupported topic format", b.Logger.errors.UNSUPPORTED_OPERATION, {
                                        topic0: s
                                    }),
                                    o.topic0 = s)),
                                    t.next = 48,
                                    this.fetch("logs", o);
                                case 48:
                                    u = t.sent,
                                    c = {},
                                    l = 0;
                                case 51:
                                    if (!(l < u.length)) {
                                        t.next = 64;
                                        break
                                    }
                                    if (null == (f = u[l]).blockHash) {
                                        t.next = 55;
                                        break
                                    }
                                    return t.abrupt("continue", 61);
                                case 55:
                                    if (null != c[f.blockNumber]) {
                                        t.next = 60;
                                        break
                                    }
                                    return t.next = 58,
                                    this.getBlock(f.blockNumber);
                                case 58:
                                    (h = t.sent) && (c[f.blockNumber] = h.hash);
                                case 60:
                                    f.blockHash = c[f.blockNumber];
                                case 61:
                                    l++,
                                    t.next = 51;
                                    break;
                                case 64:
                                    return t.abrupt("return", u);
                                case 65:
                                    if ("homestead" === this.network.name) {
                                        t.next = 67;
                                        break
                                    }
                                    return t.abrupt("return", 0);
                                case 67:
                                    return t.t3 = parseFloat,
                                    t.next = 70,
                                    this.fetch("stats", {
                                        action: "ethprice"
                                    });
                                case 70:
                                    return t.t4 = t.sent.ethusd,
                                    t.abrupt("return", (0,
                                    t.t3)(t.t4));
                                case 72:
                                    return t.abrupt("break", 73);
                                case 73:
                                    return t.abrupt("return", i.perform.call(this, e, r));
                                case 74:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[20, 26], [32, 38]])
                    }
                    )))
                }
            }, {
                key: "getHistory",
                value: function(e, r, t) {
                    return H(this, void 0, void 0, (0,
                    d.Z)().mark((function n() {
                        var i, a, o = this;
                        return (0,
                        d.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    this.resolveName(e);
                                case 2:
                                    return n.t0 = n.sent,
                                    n.t1 = null == r ? 0 : r,
                                    n.t2 = null == t ? 99999999 : t,
                                    i = {
                                        action: "txlist",
                                        address: n.t0,
                                        startblock: n.t1,
                                        endblock: n.t2,
                                        sort: "asc"
                                    },
                                    n.next = 8,
                                    this.fetch("account", i);
                                case 8:
                                    return a = n.sent,
                                    n.abrupt("return", a.map((function(e) {
                                        ["contractAddress", "to"].forEach((function(r) {
                                            "" == e[r] && delete e[r]
                                        }
                                        )),
                                        null == e.creates && null != e.contractAddress && (e.creates = e.contractAddress);
                                        var r = o.formatter.transactionResponse(e);
                                        return e.timeStamp && (r.timestamp = parseInt(e.timeStamp)),
                                        r
                                    }
                                    )));
                                case 10:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this)
                    }
                    )))
                }
            }, {
                key: "isCommunityResource",
                value: function() {
                    return null == this.apiKey
                }
            }]),
            t
        }(a.Zk)
          , Q = t(18519)
          , Y = null
          , X = new b.Logger(w.i)
          , $ = "84842078b09946638c03157f83405213"
          , ee = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t(e, n) {
                var i;
                (0,
                o.Z)(this, t);
                var a = new re(e,n)
                  , s = a.connection;
                s.password && X.throwError("INFURA WebSocket project secrets unsupported", b.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "InfuraProvider.getWebSocketProvider()"
                });
                var c = s.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
                return i = r.call(this, c, e),
                (0,
                f.defineReadOnly)((0,
                u.Z)(i), "apiKey", a.projectId),
                (0,
                f.defineReadOnly)((0,
                u.Z)(i), "projectId", a.projectId),
                (0,
                f.defineReadOnly)((0,
                u.Z)(i), "projectSecret", a.projectSecret),
                i
            }
            return (0,
            s.Z)(t, [{
                key: "isCommunityResource",
                value: function() {
                    return this.projectId === $
                }
            }]),
            t
        }(P)
          , re = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                o.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            s.Z)(t, [{
                key: "isCommunityResource",
                value: function() {
                    return this.projectId === $
                }
            }], [{
                key: "getWebSocketProvider",
                value: function(e, r) {
                    return new ee(e,r)
                }
            }, {
                key: "getApiKey",
                value: function(e) {
                    var r = {
                        apiKey: $,
                        projectId: $,
                        projectSecret: null
                    };
                    return null == e || ("string" === typeof e ? r.projectId = e : null != e.projectSecret ? (X.assertArgument("string" === typeof e.projectId, "projectSecret requires a projectId", "projectId", e.projectId),
                    X.assertArgument("string" === typeof e.projectSecret, "invalid projectSecret", "projectSecret", "[REDACTED]"),
                    r.projectId = e.projectId,
                    r.projectSecret = e.projectSecret) : e.projectId && (r.projectId = e.projectId),
                    r.apiKey = r.projectId),
                    r
                }
            }, {
                key: "getUrl",
                value: function(e, r) {
                    var t = null;
                    switch (e ? e.name : "unknown") {
                    case "homestead":
                        t = "mainnet.infura.io";
                        break;
                    case "goerli":
                        t = "goerli.infura.io";
                        break;
                    case "sepolia":
                        t = "sepolia.infura.io";
                        break;
                    case "matic":
                        t = "polygon-mainnet.infura.io";
                        break;
                    case "maticmum":
                        t = "polygon-mumbai.infura.io";
                        break;
                    case "optimism":
                        t = "optimism-mainnet.infura.io";
                        break;
                    case "optimism-goerli":
                        t = "optimism-goerli.infura.io";
                        break;
                    case "arbitrum":
                        t = "arbitrum-mainnet.infura.io";
                        break;
                    case "arbitrum-goerli":
                        t = "arbitrum-goerli.infura.io";
                        break;
                    default:
                        X.throwError("unsupported network", b.Logger.errors.INVALID_ARGUMENT, {
                            argument: "network",
                            value: e
                        })
                    }
                    var n = {
                        allowGzip: !0,
                        url: "https://" + t + "/v3/" + r.projectId,
                        throttleCallback: function(e, t) {
                            return r.projectId === $ && (0,
                            h.vh)(),
                            Promise.resolve(!0)
                        }
                    };
                    return null != r.projectSecret && (n.user = "",
                    n.password = r.projectSecret),
                    n
                }
            }]),
            t
        }(N.l)
          , te = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                o.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            s.Z)(t, [{
                key: "send",
                value: function(e, r) {
                    var t = this
                      , n = {
                        method: e,
                        params: r,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    null == this._pendingBatch && (this._pendingBatch = []);
                    var i = {
                        request: n,
                        resolve: null,
                        reject: null
                    }
                      , a = new Promise((function(e, r) {
                        i.resolve = e,
                        i.reject = r
                    }
                    ));
                    return this._pendingBatch.push(i),
                    this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout((function() {
                        var e = t._pendingBatch;
                        t._pendingBatch = null,
                        t._pendingBatchAggregator = null;
                        var r = e.map((function(e) {
                            return e.request
                        }
                        ));
                        return t.emit("debug", {
                            action: "requestBatch",
                            request: (0,
                            f.deepCopy)(r),
                            provider: t
                        }),
                        (0,
                        G.fetchJson)(t.connection, JSON.stringify(r)).then((function(n) {
                            t.emit("debug", {
                                action: "response",
                                request: r,
                                response: n,
                                provider: t
                            }),
                            e.forEach((function(e, r) {
                                var t = n[r];
                                if (t.error) {
                                    var i = new Error(t.error.message);
                                    i.code = t.error.code,
                                    i.data = t.error.data,
                                    e.reject(i)
                                } else
                                    e.resolve(t.result)
                            }
                            ))
                        }
                        ), (function(n) {
                            t.emit("debug", {
                                action: "response",
                                error: n,
                                request: r,
                                provider: t
                            }),
                            e.forEach((function(e) {
                                e.reject(n)
                            }
                            ))
                        }
                        ))
                    }
                    ), 10)),
                    a
                }
            }]),
            t
        }(y.r)
          , ne = new b.Logger(w.i)
          , ie = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                o.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            s.Z)(t, null, [{
                key: "getApiKey",
                value: function(e) {
                    return e && "string" !== typeof e && ne.throwArgumentError("invalid apiKey", "apiKey", e),
                    e || "ETHERS_JS_SHARED"
                }
            }, {
                key: "getUrl",
                value: function(e, r) {
                    ne.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
                    var t = null;
                    switch (e.name) {
                    case "homestead":
                        t = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
                        break;
                    case "ropsten":
                        t = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
                        break;
                    case "rinkeby":
                        t = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
                        break;
                    case "goerli":
                        t = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
                        break;
                    case "kovan":
                        t = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
                        break;
                    default:
                        ne.throwArgumentError("unsupported network", "network", arguments[0])
                    }
                    return t + "?apiKey=" + r
                }
            }]),
            t
        }(N.l)
          , ae = new b.Logger(w.i)
          , oe = "62e1ad51b37b8e00394bda3b"
          , se = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                o.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            s.Z)(t, [{
                key: "isCommunityResource",
                value: function() {
                    return this.applicationId === oe
                }
            }], [{
                key: "getApiKey",
                value: function(e) {
                    var r = {
                        applicationId: null,
                        loadBalancer: !0,
                        applicationSecretKey: null
                    };
                    return null == e ? r.applicationId = oe : "string" === typeof e ? r.applicationId = e : null != e.applicationSecretKey ? (r.applicationId = e.applicationId,
                    r.applicationSecretKey = e.applicationSecretKey) : e.applicationId ? r.applicationId = e.applicationId : ae.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", e),
                    r
                }
            }, {
                key: "getUrl",
                value: function(e, r) {
                    var t = null;
                    switch (e ? e.name : "unknown") {
                    case "goerli":
                        t = "eth-goerli.gateway.pokt.network";
                        break;
                    case "homestead":
                        t = "eth-mainnet.gateway.pokt.network";
                        break;
                    case "kovan":
                        t = "poa-kovan.gateway.pokt.network";
                        break;
                    case "matic":
                        t = "poly-mainnet.gateway.pokt.network";
                        break;
                    case "maticmum":
                        t = "polygon-mumbai-rpc.gateway.pokt.network";
                        break;
                    case "rinkeby":
                        t = "eth-rinkeby.gateway.pokt.network";
                        break;
                    case "ropsten":
                        t = "eth-ropsten.gateway.pokt.network";
                        break;
                    default:
                        ae.throwError("unsupported network", b.Logger.errors.INVALID_ARGUMENT, {
                            argument: "network",
                            value: e
                        })
                    }
                    var n = {
                        headers: {},
                        url: "https://".concat(t, "/v1/lb/").concat(r.applicationId)
                    };
                    return null != r.applicationSecretKey && (n.user = "",
                    n.password = r.applicationSecretKey),
                    n
                }
            }]),
            t
        }(N.l)
          , ue = t(64249)
          , ce = new b.Logger(w.i);
        function le(e, r) {
            if (null == e && (e = "homestead"),
            "string" === typeof e) {
                var t = e.match(/^(ws|http)s?:/i);
                if (t)
                    switch (t[1].toLowerCase()) {
                    case "http":
                    case "https":
                        return new y.r(e);
                    case "ws":
                    case "wss":
                        return new P(e);
                    default:
                        ce.throwArgumentError("unsupported URL scheme", "network", e)
                    }
            }
            var n = (0,
            i.H)(e);
            return n && n._defaultProvider || ce.throwError("unsupported getDefaultProvider network", b.Logger.errors.NETWORK_ERROR, {
                operation: "getDefaultProvider",
                network: e
            }),
            n._defaultProvider({
                FallbackProvider: Q.H,
                AlchemyProvider: _,
                AnkrProvider: L,
                CloudflareProvider: D,
                EtherscanProvider: W,
                InfuraProvider: re,
                JsonRpcProvider: y.r,
                NodesmithProvider: ie,
                PocketProvider: se,
                Web3Provider: ue.Q,
                IpcProvider: Y
            }, r)
        }
    },
    42416: function(e, r, t) {
        t.d(r, {
            C: function() {
                return _
            },
            r: function() {
                return B
            }
        });
        var n = t(11752)
          , i = t(61120)
          , a = t(74165)
          , o = t(15671)
          , s = t(43144)
          , u = t(97326)
          , c = t(60136)
          , l = t(29388)
          , f = t(72388)
          , h = t(19560)
          , d = t(52009)
          , p = t(26454)
          , g = t(54812)
          , v = t(91953)
          , m = t(65958)
          , y = t(28786)
          , b = t(2735)
          , w = t(49862)
          , k = t(5341)
          , A = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , E = new b.Logger(w.i)
          , x = ["call", "estimateGas"];
        function S(e, r) {
            if (null == e)
                return null;
            if ("string" === typeof e.message && e.message.match("reverted")) {
                var t = (0,
                d.isHexString)(e.data) ? e.data : null;
                if (!r || t)
                    return {
                        message: e.message,
                        data: t
                    }
            }
            if ("object" === typeof e) {
                for (var n in e) {
                    var i = S(e[n], r);
                    if (i)
                        return i
                }
                return null
            }
            if ("string" === typeof e)
                try {
                    return S(JSON.parse(e), r)
                } catch (a) {}
            return null
        }
        function P(e, r, t) {
            var n = t.transaction || t.signedTransaction;
            if ("call" === e) {
                var i = S(r, !0);
                if (i)
                    return i.data;
                E.throwError("missing revert data in call exception; Transaction reverted without a reason string", b.Logger.errors.CALL_EXCEPTION, {
                    data: "0x",
                    transaction: n,
                    error: r
                })
            }
            if ("estimateGas" === e) {
                var a = S(r.body, !1);
                null == a && (a = S(r, !1)),
                a && E.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", b.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                    reason: a.message,
                    method: e,
                    transaction: n,
                    error: r
                })
            }
            var o = r.message;
            throw r.code === b.Logger.errors.SERVER_ERROR && r.error && "string" === typeof r.error.message ? o = r.error.message : "string" === typeof r.body ? o = r.body : "string" === typeof r.responseText && (o = r.responseText),
            (o = (o || "").toLowerCase()).match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && E.throwError("insufficient funds for intrinsic transaction cost", b.Logger.errors.INSUFFICIENT_FUNDS, {
                error: r,
                method: e,
                transaction: n
            }),
            o.match(/nonce (is )?too low/i) && E.throwError("nonce has already been used", b.Logger.errors.NONCE_EXPIRED, {
                error: r,
                method: e,
                transaction: n
            }),
            o.match(/replacement transaction underpriced|transaction gas price.*too low/i) && E.throwError("replacement fee too low", b.Logger.errors.REPLACEMENT_UNDERPRICED, {
                error: r,
                method: e,
                transaction: n
            }),
            o.match(/only replay-protected/i) && E.throwError("legacy pre-eip-155 transactions not supported", b.Logger.errors.UNSUPPORTED_OPERATION, {
                error: r,
                method: e,
                transaction: n
            }),
            x.indexOf(e) >= 0 && o.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && E.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", b.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                error: r,
                method: e,
                transaction: n
            }),
            r
        }
        function N(e) {
            return new Promise((function(r) {
                setTimeout(r, e)
            }
            ))
        }
        function R(e) {
            if (e.error) {
                var r = new Error(e.error.message);
                throw r.code = e.error.code,
                r.data = e.error.data,
                r
            }
            return e.result
        }
        function C(e) {
            return e ? e.toLowerCase() : e
        }
        var O = {}
          , _ = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t(e, n, i) {
                var a;
                if ((0,
                o.Z)(this, t),
                a = r.call(this),
                e !== O)
                    throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                return (0,
                g.defineReadOnly)((0,
                u.Z)(a), "provider", n),
                null == i && (i = 0),
                "string" === typeof i ? ((0,
                g.defineReadOnly)((0,
                u.Z)(a), "_address", a.provider.formatter.address(i)),
                (0,
                g.defineReadOnly)((0,
                u.Z)(a), "_index", null)) : "number" === typeof i ? ((0,
                g.defineReadOnly)((0,
                u.Z)(a), "_index", i),
                (0,
                g.defineReadOnly)((0,
                u.Z)(a), "_address", null)) : E.throwArgumentError("invalid address or index", "addressOrIndex", i),
                a
            }
            return (0,
            s.Z)(t, [{
                key: "connect",
                value: function(e) {
                    return E.throwError("cannot alter JSON-RPC Signer connection", b.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "connect"
                    })
                }
            }, {
                key: "connectUnchecked",
                value: function() {
                    return new T(O,this.provider,this._address || this._index)
                }
            }, {
                key: "getAddress",
                value: function() {
                    var e = this;
                    return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then((function(r) {
                        return r.length <= e._index && E.throwError("unknown account #" + e._index, b.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "getAddress"
                        }),
                        e.provider.formatter.address(r[e._index])
                    }
                    ))
                }
            }, {
                key: "sendUncheckedTransaction",
                value: function(e) {
                    var r = this;
                    e = (0,
                    g.shallowCopy)(e);
                    var t = this.getAddress().then((function(e) {
                        return e && (e = e.toLowerCase()),
                        e
                    }
                    ));
                    if (null == e.gasLimit) {
                        var n = (0,
                        g.shallowCopy)(e);
                        n.from = t,
                        e.gasLimit = this.provider.estimateGas(n)
                    }
                    return null != e.to && (e.to = Promise.resolve(e.to).then((function(e) {
                        return A(r, void 0, void 0, (0,
                        a.Z)().mark((function r() {
                            var t;
                            return (0,
                            a.Z)().wrap((function(r) {
                                for (; ; )
                                    switch (r.prev = r.next) {
                                    case 0:
                                        if (null != e) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", null);
                                    case 2:
                                        return r.next = 4,
                                        this.provider.resolveName(e);
                                    case 4:
                                        return null == (t = r.sent) && E.throwArgumentError("provided ENS name resolves to null", "tx.to", e),
                                        r.abrupt("return", t);
                                    case 7:
                                    case "end":
                                        return r.stop()
                                    }
                            }
                            ), r, this)
                        }
                        )))
                    }
                    ))),
                    (0,
                    g.resolveProperties)({
                        tx: (0,
                        g.resolveProperties)(e),
                        sender: t
                    }).then((function(t) {
                        var n = t.tx
                          , i = t.sender;
                        null != n.from ? n.from.toLowerCase() !== i && E.throwArgumentError("from address mismatch", "transaction", e) : n.from = i;
                        var a = r.provider.constructor.hexlifyTransaction(n, {
                            from: !0
                        });
                        return r.provider.send("eth_sendTransaction", [a]).then((function(e) {
                            return e
                        }
                        ), (function(e) {
                            return "string" === typeof e.message && e.message.match(/user denied/i) && E.throwError("user rejected transaction", b.Logger.errors.ACTION_REJECTED, {
                                action: "sendTransaction",
                                transaction: n
                            }),
                            P("sendTransaction", e, a)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "signTransaction",
                value: function(e) {
                    return E.throwError("signing transactions is unsupported", b.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "signTransaction"
                    })
                }
            }, {
                key: "sendTransaction",
                value: function(e) {
                    return A(this, void 0, void 0, (0,
                    a.Z)().mark((function r() {
                        var t, n, i = this;
                        return (0,
                        a.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2,
                                    this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval);
                                case 2:
                                    return t = r.sent,
                                    r.next = 5,
                                    this.sendUncheckedTransaction(e);
                                case 5:
                                    return n = r.sent,
                                    r.prev = 6,
                                    r.next = 9,
                                    (0,
                                    y.poll)((function() {
                                        return A(i, void 0, void 0, (0,
                                        a.Z)().mark((function e() {
                                            var r;
                                            return (0,
                                            a.Z)().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        this.provider.getTransaction(n);
                                                    case 2:
                                                        if (null !== (r = e.sent)) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        return e.abrupt("return", void 0);
                                                    case 5:
                                                        return e.abrupt("return", this.provider._wrapTransaction(r, n, t));
                                                    case 6:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e, this)
                                        }
                                        )))
                                    }
                                    ), {
                                        oncePoll: this.provider
                                    });
                                case 9:
                                    return r.abrupt("return", r.sent);
                                case 12:
                                    throw r.prev = 12,
                                    r.t0 = r.catch(6),
                                    r.t0.transactionHash = n,
                                    r.t0;
                                case 16:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[6, 12]])
                    }
                    )))
                }
            }, {
                key: "signMessage",
                value: function(e) {
                    return A(this, void 0, void 0, (0,
                    a.Z)().mark((function r() {
                        var t, n;
                        return (0,
                        a.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return t = "string" === typeof e ? (0,
                                    v.Y0)(e) : e,
                                    r.next = 3,
                                    this.getAddress();
                                case 3:
                                    return n = r.sent,
                                    r.prev = 4,
                                    r.next = 7,
                                    this.provider.send("personal_sign", [(0,
                                    d.hexlify)(t), n.toLowerCase()]);
                                case 7:
                                    return r.abrupt("return", r.sent);
                                case 10:
                                    throw r.prev = 10,
                                    r.t0 = r.catch(4),
                                    "string" === typeof r.t0.message && r.t0.message.match(/user denied/i) && E.throwError("user rejected signing", b.Logger.errors.ACTION_REJECTED, {
                                        action: "signMessage",
                                        from: n,
                                        messageData: e
                                    }),
                                    r.t0;
                                case 14:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[4, 10]])
                    }
                    )))
                }
            }, {
                key: "_legacySignMessage",
                value: function(e) {
                    return A(this, void 0, void 0, (0,
                    a.Z)().mark((function r() {
                        var t, n;
                        return (0,
                        a.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return t = "string" === typeof e ? (0,
                                    v.Y0)(e) : e,
                                    r.next = 3,
                                    this.getAddress();
                                case 3:
                                    return n = r.sent,
                                    r.prev = 4,
                                    r.next = 7,
                                    this.provider.send("eth_sign", [n.toLowerCase(), (0,
                                    d.hexlify)(t)]);
                                case 7:
                                    return r.abrupt("return", r.sent);
                                case 10:
                                    throw r.prev = 10,
                                    r.t0 = r.catch(4),
                                    "string" === typeof r.t0.message && r.t0.message.match(/user denied/i) && E.throwError("user rejected signing", b.Logger.errors.ACTION_REJECTED, {
                                        action: "_legacySignMessage",
                                        from: n,
                                        messageData: e
                                    }),
                                    r.t0;
                                case 14:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this, [[4, 10]])
                    }
                    )))
                }
            }, {
                key: "_signTypedData",
                value: function(e, r, t) {
                    return A(this, void 0, void 0, (0,
                    a.Z)().mark((function n() {
                        var i, o, s = this;
                        return (0,
                        a.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    p.E.resolveNames(e, r, t, (function(e) {
                                        return s.provider.resolveName(e)
                                    }
                                    ));
                                case 2:
                                    return i = n.sent,
                                    n.next = 5,
                                    this.getAddress();
                                case 5:
                                    return o = n.sent,
                                    n.prev = 6,
                                    n.next = 9,
                                    this.provider.send("eth_signTypedData_v4", [o.toLowerCase(), JSON.stringify(p.E.getPayload(i.domain, r, i.value))]);
                                case 9:
                                    return n.abrupt("return", n.sent);
                                case 12:
                                    throw n.prev = 12,
                                    n.t0 = n.catch(6),
                                    "string" === typeof n.t0.message && n.t0.message.match(/user denied/i) && E.throwError("user rejected signing", b.Logger.errors.ACTION_REJECTED, {
                                        action: "_signTypedData",
                                        from: o,
                                        messageData: {
                                            domain: i.domain,
                                            types: r,
                                            value: i.value
                                        }
                                    }),
                                    n.t0;
                                case 16:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, this, [[6, 12]])
                    }
                    )))
                }
            }, {
                key: "unlock",
                value: function(e) {
                    return A(this, void 0, void 0, (0,
                    a.Z)().mark((function r() {
                        var t, n;
                        return (0,
                        a.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return t = this.provider,
                                    r.next = 3,
                                    this.getAddress();
                                case 3:
                                    return n = r.sent,
                                    r.abrupt("return", t.send("personal_unlockAccount", [n.toLowerCase(), e, null]));
                                case 5:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }]),
            t
        }(f.E)
          , T = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                o.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            s.Z)(t, [{
                key: "sendTransaction",
                value: function(e) {
                    var r = this;
                    return this.sendUncheckedTransaction(e).then((function(e) {
                        return {
                            hash: e,
                            nonce: null,
                            gasLimit: null,
                            gasPrice: null,
                            data: null,
                            value: null,
                            chainId: null,
                            confirmations: 0,
                            from: null,
                            wait: function(t) {
                                return r.provider.waitForTransaction(e, t)
                            }
                        }
                    }
                    ))
                }
            }]),
            t
        }(_)
          , I = {
            chainId: !0,
            data: !0,
            gasLimit: !0,
            gasPrice: !0,
            nonce: !0,
            to: !0,
            value: !0,
            type: !0,
            accessList: !0,
            maxFeePerGas: !0,
            maxPriorityFeePerGas: !0
        }
          , B = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t(e, n) {
                var i;
                (0,
                o.Z)(this, t);
                var a = n;
                return null == a && (a = new Promise((function(e, r) {
                    setTimeout((function() {
                        i.detectNetwork().then((function(r) {
                            e(r)
                        }
                        ), (function(e) {
                            r(e)
                        }
                        ))
                    }
                    ), 0)
                }
                ))),
                i = r.call(this, a),
                e || (e = (0,
                g.getStatic)(i.constructor, "defaultUrl")()),
                "string" === typeof e ? (0,
                g.defineReadOnly)((0,
                u.Z)(i), "connection", Object.freeze({
                    url: e
                })) : (0,
                g.defineReadOnly)((0,
                u.Z)(i), "connection", Object.freeze((0,
                g.shallowCopy)(e))),
                i._nextId = 42,
                i
            }
            return (0,
            s.Z)(t, [{
                key: "_cache",
                get: function() {
                    return null == this._eventLoopCache && (this._eventLoopCache = {}),
                    this._eventLoopCache
                }
            }, {
                key: "detectNetwork",
                value: function() {
                    var e = this;
                    return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(),
                    setTimeout((function() {
                        e._cache.detectNetwork = null
                    }
                    ), 0)),
                    this._cache.detectNetwork
                }
            }, {
                key: "_uncachedDetectNetwork",
                value: function() {
                    return A(this, void 0, void 0, (0,
                    a.Z)().mark((function e() {
                        var r, t;
                        return (0,
                        a.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    N(0);
                                case 2:
                                    return r = null,
                                    e.prev = 3,
                                    e.next = 6,
                                    this.send("eth_chainId", []);
                                case 6:
                                    r = e.sent,
                                    e.next = 19;
                                    break;
                                case 9:
                                    return e.prev = 9,
                                    e.t0 = e.catch(3),
                                    e.prev = 11,
                                    e.next = 14,
                                    this.send("net_version", []);
                                case 14:
                                    r = e.sent,
                                    e.next = 19;
                                    break;
                                case 17:
                                    e.prev = 17,
                                    e.t1 = e.catch(11);
                                case 19:
                                    if (null == r) {
                                        e.next = 28;
                                        break
                                    }
                                    return t = (0,
                                    g.getStatic)(this.constructor, "getNetwork"),
                                    e.prev = 21,
                                    e.abrupt("return", t(h.O$.from(r).toNumber()));
                                case 25:
                                    return e.prev = 25,
                                    e.t2 = e.catch(21),
                                    e.abrupt("return", E.throwError("could not detect network", b.Logger.errors.NETWORK_ERROR, {
                                        chainId: r,
                                        event: "invalidNetwork",
                                        serverError: e.t2
                                    }));
                                case 28:
                                    return e.abrupt("return", E.throwError("could not detect network", b.Logger.errors.NETWORK_ERROR, {
                                        event: "noNetwork"
                                    }));
                                case 29:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, 9], [11, 17], [21, 25]])
                    }
                    )))
                }
            }, {
                key: "getSigner",
                value: function(e) {
                    return new _(O,this,e)
                }
            }, {
                key: "getUncheckedSigner",
                value: function(e) {
                    return this.getSigner(e).connectUnchecked()
                }
            }, {
                key: "listAccounts",
                value: function() {
                    var e = this;
                    return this.send("eth_accounts", []).then((function(r) {
                        return r.map((function(r) {
                            return e.formatter.address(r)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "send",
                value: function(e, r) {
                    var t = this
                      , n = {
                        method: e,
                        params: r,
                        id: this._nextId++,
                        jsonrpc: "2.0"
                    };
                    this.emit("debug", {
                        action: "request",
                        request: (0,
                        g.deepCopy)(n),
                        provider: this
                    });
                    var i = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
                    if (i && this._cache[e])
                        return this._cache[e];
                    var a = (0,
                    y.fetchJson)(this.connection, JSON.stringify(n), R).then((function(e) {
                        return t.emit("debug", {
                            action: "response",
                            request: n,
                            response: e,
                            provider: t
                        }),
                        e
                    }
                    ), (function(e) {
                        throw t.emit("debug", {
                            action: "response",
                            error: e,
                            request: n,
                            provider: t
                        }),
                        e
                    }
                    ));
                    return i && (this._cache[e] = a,
                    setTimeout((function() {
                        t._cache[e] = null
                    }
                    ), 0)),
                    a
                }
            }, {
                key: "prepareRequest",
                value: function(e, r) {
                    switch (e) {
                    case "getBlockNumber":
                        return ["eth_blockNumber", []];
                    case "getGasPrice":
                        return ["eth_gasPrice", []];
                    case "getBalance":
                        return ["eth_getBalance", [C(r.address), r.blockTag]];
                    case "getTransactionCount":
                        return ["eth_getTransactionCount", [C(r.address), r.blockTag]];
                    case "getCode":
                        return ["eth_getCode", [C(r.address), r.blockTag]];
                    case "getStorageAt":
                        return ["eth_getStorageAt", [C(r.address), (0,
                        d.hexZeroPad)(r.position, 32), r.blockTag]];
                    case "sendTransaction":
                        return ["eth_sendRawTransaction", [r.signedTransaction]];
                    case "getBlock":
                        return r.blockTag ? ["eth_getBlockByNumber", [r.blockTag, !!r.includeTransactions]] : r.blockHash ? ["eth_getBlockByHash", [r.blockHash, !!r.includeTransactions]] : null;
                    case "getTransaction":
                        return ["eth_getTransactionByHash", [r.transactionHash]];
                    case "getTransactionReceipt":
                        return ["eth_getTransactionReceipt", [r.transactionHash]];
                    case "call":
                        return ["eth_call", [(0,
                        g.getStatic)(this.constructor, "hexlifyTransaction")(r.transaction, {
                            from: !0
                        }), r.blockTag]];
                    case "estimateGas":
                        return ["eth_estimateGas", [(0,
                        g.getStatic)(this.constructor, "hexlifyTransaction")(r.transaction, {
                            from: !0
                        })]];
                    case "getLogs":
                        return r.filter && null != r.filter.address && (r.filter.address = C(r.filter.address)),
                        ["eth_getLogs", [r.filter]]
                    }
                    return null
                }
            }, {
                key: "perform",
                value: function(e, r) {
                    return A(this, void 0, void 0, (0,
                    a.Z)().mark((function t() {
                        var n, i, o;
                        return (0,
                        a.Z)().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("call" !== e && "estimateGas" !== e) {
                                        t.next = 8;
                                        break
                                    }
                                    if (!(n = r.transaction) || null == n.type || !h.O$.from(n.type).isZero()) {
                                        t.next = 8;
                                        break
                                    }
                                    if (null != n.maxFeePerGas || null != n.maxPriorityFeePerGas) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 6,
                                    this.getFeeData();
                                case 6:
                                    null == (i = t.sent).maxFeePerGas && null == i.maxPriorityFeePerGas && ((r = (0,
                                    g.shallowCopy)(r)).transaction = (0,
                                    g.shallowCopy)(n),
                                    delete r.transaction.type);
                                case 8:
                                    return null == (o = this.prepareRequest(e, r)) && E.throwError(e + " not implemented", b.Logger.errors.NOT_IMPLEMENTED, {
                                        operation: e
                                    }),
                                    t.prev = 10,
                                    t.next = 13,
                                    this.send(o[0], o[1]);
                                case 13:
                                    return t.abrupt("return", t.sent);
                                case 16:
                                    return t.prev = 16,
                                    t.t0 = t.catch(10),
                                    t.abrupt("return", P(e, t.t0, r));
                                case 19:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[10, 16]])
                    }
                    )))
                }
            }, {
                key: "_startEvent",
                value: function(e) {
                    "pending" === e.tag && this._startPending(),
                    (0,
                    n.Z)((0,
                    i.Z)(t.prototype), "_startEvent", this).call(this, e)
                }
            }, {
                key: "_startPending",
                value: function() {
                    if (null == this._pendingFilter) {
                        var e = this
                          , r = this.send("eth_newPendingTransactionFilter", []);
                        this._pendingFilter = r,
                        r.then((function(t) {
                            return function n() {
                                e.send("eth_getFilterChanges", [t]).then((function(t) {
                                    if (e._pendingFilter != r)
                                        return null;
                                    var n = Promise.resolve();
                                    return t.forEach((function(r) {
                                        e._emitted["t:" + r.toLowerCase()] = "pending",
                                        n = n.then((function() {
                                            return e.getTransaction(r).then((function(r) {
                                                return e.emit("pending", r),
                                                null
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                    )),
                                    n.then((function() {
                                        return N(1e3)
                                    }
                                    ))
                                }
                                )).then((function() {
                                    if (e._pendingFilter == r)
                                        return setTimeout((function() {
                                            n()
                                        }
                                        ), 0),
                                        null;
                                    e.send("eth_uninstallFilter", [t])
                                }
                                )).catch((function(e) {}
                                ))
                            }(),
                            t
                        }
                        )).catch((function(e) {}
                        ))
                    }
                }
            }, {
                key: "_stopEvent",
                value: function(e) {
                    "pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null),
                    (0,
                    n.Z)((0,
                    i.Z)(t.prototype), "_stopEvent", this).call(this, e)
                }
            }], [{
                key: "defaultUrl",
                value: function() {
                    return "http://localhost:8545"
                }
            }, {
                key: "hexlifyTransaction",
                value: function(e, r) {
                    var t = (0,
                    g.shallowCopy)(I);
                    if (r)
                        for (var n in r)
                            r[n] && (t[n] = !0);
                    (0,
                    g.checkProperties)(e, t);
                    var i = {};
                    return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((function(r) {
                        if (null != e[r]) {
                            var t = (0,
                            d.hexValue)(h.O$.from(e[r]));
                            "gasLimit" === r && (r = "gas"),
                            i[r] = t
                        }
                    }
                    )),
                    ["from", "to", "data"].forEach((function(r) {
                        null != e[r] && (i[r] = (0,
                        d.hexlify)(e[r]))
                    }
                    )),
                    e.accessList && (i.accessList = (0,
                    m.accessListify)(e.accessList)),
                    i
                }
            }]),
            t
        }(k.Zk)
    },
    74175: function(e, r, t) {
        t.d(r, {
            c: function() {
                return m
            },
            l: function() {
                return y
            }
        });
        var n = t(97326)
          , i = t(74165)
          , a = t(15671)
          , o = t(43144)
          , s = t(11752)
          , u = t(61120)
          , c = t(60136)
          , l = t(29388)
          , f = t(54812)
          , h = t(2735)
          , d = t(49862)
          , p = t(42416)
          , g = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , v = new h.Logger(d.i)
          , m = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t() {
                return (0,
                a.Z)(this, t),
                r.apply(this, arguments)
            }
            return (0,
            o.Z)(t, [{
                key: "detectNetwork",
                value: function() {
                    var e = this
                      , r = Object.create(null, {
                        detectNetwork: {
                            get: function() {
                                return (0,
                                s.Z)((0,
                                u.Z)(t.prototype), "detectNetwork", e)
                            }
                        }
                    });
                    return g(this, void 0, void 0, (0,
                    i.Z)().mark((function e() {
                        var t;
                        return (0,
                        i.Z)().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (null != (t = this.network)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 4,
                                    r.detectNetwork.call(this);
                                case 4:
                                    (t = e.sent) || v.throwError("no network detected", h.Logger.errors.UNKNOWN_ERROR, {}),
                                    null == this._network && ((0,
                                    f.defineReadOnly)(this, "_network", t),
                                    this.emit("network", t, null));
                                case 7:
                                    return e.abrupt("return", t);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )))
                }
            }]),
            t
        }(p.r)
          , y = function(e) {
            (0,
            c.Z)(t, e);
            var r = (0,
            l.Z)(t);
            function t(e, i) {
                var o;
                (0,
                a.Z)(this, t),
                v.checkAbstract(this instanceof t ? this.constructor : void 0, t),
                e = (0,
                f.getStatic)(this instanceof t ? this.constructor : void 0, "getNetwork")(e),
                i = (0,
                f.getStatic)(this instanceof t ? this.constructor : void 0, "getApiKey")(i);
                var s = (0,
                f.getStatic)(this instanceof t ? this.constructor : void 0, "getUrl")(e, i);
                return o = r.call(this, s, e),
                "string" === typeof i ? (0,
                f.defineReadOnly)((0,
                n.Z)(o), "apiKey", i) : null != i && Object.keys(i).forEach((function(e) {
                    (0,
                    f.defineReadOnly)((0,
                    n.Z)(o), e, i[e])
                }
                )),
                o
            }
            return (0,
            o.Z)(t, [{
                key: "_startPending",
                value: function() {
                    v.warn("WARNING: API provider does not support pending filters")
                }
            }, {
                key: "isCommunityResource",
                value: function() {
                    return !1
                }
            }, {
                key: "getSigner",
                value: function(e) {
                    return v.throwError("API provider does not support signing", h.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: "getSigner"
                    })
                }
            }, {
                key: "listAccounts",
                value: function() {
                    return Promise.resolve([])
                }
            }], [{
                key: "getApiKey",
                value: function(e) {
                    return e
                }
            }, {
                key: "getUrl",
                value: function(e, r) {
                    return v.throwError("not implemented; sub-classes must override getUrl", h.Logger.errors.NOT_IMPLEMENTED, {
                        operation: "getUrl"
                    })
                }
            }]),
            t
        }(m)
    },
    64249: function(e, r, t) {
        t.d(r, {
            Q: function() {
                return g
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(97326)
          , o = t(60136)
          , s = t(29388)
          , u = t(54812)
          , c = t(2735)
          , l = t(49862)
          , f = t(42416)
          , h = new c.Logger(l.i)
          , d = 1;
        function p(e, r) {
            var t = "Web3LegacyFetcher";
            return function(e, n) {
                var i = this
                  , a = {
                    method: e,
                    params: n,
                    id: d++,
                    jsonrpc: "2.0"
                };
                return new Promise((function(e, n) {
                    i.emit("debug", {
                        action: "request",
                        fetcher: t,
                        request: (0,
                        u.deepCopy)(a),
                        provider: i
                    }),
                    r(a, (function(r, o) {
                        if (r)
                            return i.emit("debug", {
                                action: "response",
                                fetcher: t,
                                error: r,
                                request: a,
                                provider: i
                            }),
                            n(r);
                        if (i.emit("debug", {
                            action: "response",
                            fetcher: t,
                            request: a,
                            response: o,
                            provider: i
                        }),
                        o.error) {
                            var s = new Error(o.error.message);
                            return s.code = o.error.code,
                            s.data = o.error.data,
                            n(s)
                        }
                        e(o.result)
                    }
                    ))
                }
                ))
            }
        }
        var g = function(e) {
            (0,
            o.Z)(t, e);
            var r = (0,
            s.Z)(t);
            function t(e, i) {
                var o;
                (0,
                n.Z)(this, t),
                null == e && h.throwArgumentError("missing provider", "provider", e);
                var s = null
                  , c = null
                  , l = null;
                return "function" === typeof e ? (s = "unknown:",
                c = e) : (!(s = e.host || e.path || "") && e.isMetaMask && (s = "metamask"),
                l = e,
                e.request ? ("" === s && (s = "eip-1193:"),
                c = function(e) {
                    return function(r, t) {
                        var n = this;
                        null == t && (t = []);
                        var i = {
                            method: r,
                            params: t
                        };
                        return this.emit("debug", {
                            action: "request",
                            fetcher: "Eip1193Fetcher",
                            request: (0,
                            u.deepCopy)(i),
                            provider: this
                        }),
                        e.request(i).then((function(e) {
                            return n.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: i,
                                response: e,
                                provider: n
                            }),
                            e
                        }
                        ), (function(e) {
                            throw n.emit("debug", {
                                action: "response",
                                fetcher: "Eip1193Fetcher",
                                request: i,
                                error: e,
                                provider: n
                            }),
                            e
                        }
                        ))
                    }
                }(e)) : e.sendAsync ? c = p(0, e.sendAsync.bind(e)) : e.send ? c = p(0, e.send.bind(e)) : h.throwArgumentError("unsupported provider", "provider", e),
                s || (s = "unknown:")),
                o = r.call(this, s, i),
                (0,
                u.defineReadOnly)((0,
                a.Z)(o), "jsonRpcFetchFunc", c),
                (0,
                u.defineReadOnly)((0,
                a.Z)(o), "provider", l),
                o
            }
            return (0,
            i.Z)(t, [{
                key: "send",
                value: function(e, r) {
                    return this.jsonRpcFetchFunc(e, r)
                }
            }]),
            t
        }(f.r)
    },
    65683: function(e, r, t) {
        t.r(r),
        t.d(r, {
            randomBytes: function() {
                return n.O
            },
            shuffled: function() {
                return i.y
            }
        });
        var n = t(75722)
          , i = t(54327)
    },
    75722: function(e, r, t) {
        t.d(r, {
            O: function() {
                return u
            }
        });
        var n = t(52009)
          , i = t(2735)
          , a = new i.Logger("random/5.7.0");
        var o = function() {
            if ("undefined" !== typeof self)
                return self;
            if ("undefined" !== typeof window)
                return window;
            if ("undefined" !== typeof t.g)
                return t.g;
            throw new Error("unable to locate global object")
        }()
          , s = o.crypto || o.msCrypto;
        function u(e) {
            (e <= 0 || e > 1024 || e % 1 || e != e) && a.throwArgumentError("invalid length", "length", e);
            var r = new Uint8Array(e);
            return s.getRandomValues(r),
            (0,
            n.arrayify)(r)
        }
        s && s.getRandomValues || (a.warn("WARNING: Missing strong random number source"),
        s = {
            getRandomValues: function(e) {
                return a.throwError("no secure random source avaialble", i.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "crypto.getRandomValues"
                })
            }
        })
    },
    54327: function(e, r, t) {
        function n(e) {
            for (var r = (e = e.slice()).length - 1; r > 0; r--) {
                var t = Math.floor(Math.random() * (r + 1))
                  , n = e[r];
                e[r] = e[t],
                e[t] = n
            }
            return e
        }
        t.d(r, {
            y: function() {
                return n
            }
        })
    },
    80807: function(e, r, t) {
        t.r(r),
        t.d(r, {
            decode: function() {
                return h
            },
            encode: function() {
                return c
            }
        });
        var n = t(52009)
          , i = t(2735)
          , a = new i.Logger("rlp/5.7.0");
        function o(e) {
            for (var r = []; e; )
                r.unshift(255 & e),
                e >>= 8;
            return r
        }
        function s(e, r, t) {
            for (var n = 0, i = 0; i < t; i++)
                n = 256 * n + e[r + i];
            return n
        }
        function u(e) {
            if (Array.isArray(e)) {
                var r = [];
                if (e.forEach((function(e) {
                    r = r.concat(u(e))
                }
                )),
                r.length <= 55)
                    return r.unshift(192 + r.length),
                    r;
                var t = o(r.length);
                return t.unshift(247 + t.length),
                t.concat(r)
            }
            (0,
            n.isBytesLike)(e) || a.throwArgumentError("RLP object must be BytesLike", "object", e);
            var i = Array.prototype.slice.call((0,
            n.arrayify)(e));
            if (1 === i.length && i[0] <= 127)
                return i;
            if (i.length <= 55)
                return i.unshift(128 + i.length),
                i;
            var s = o(i.length);
            return s.unshift(183 + s.length),
            s.concat(i)
        }
        function c(e) {
            return (0,
            n.hexlify)(u(e))
        }
        function l(e, r, t, n) {
            for (var o = []; t < r + 1 + n; ) {
                var s = f(e, t);
                o.push(s.result),
                (t += s.consumed) > r + 1 + n && a.throwError("child data too short", i.Logger.errors.BUFFER_OVERRUN, {})
            }
            return {
                consumed: 1 + n,
                result: o
            }
        }
        function f(e, r) {
            if (0 === e.length && a.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}),
            e[r] >= 248) {
                var t = e[r] - 247;
                r + 1 + t > e.length && a.throwError("data short segment too short", i.Logger.errors.BUFFER_OVERRUN, {});
                var o = s(e, r + 1, t);
                return r + 1 + t + o > e.length && a.throwError("data long segment too short", i.Logger.errors.BUFFER_OVERRUN, {}),
                l(e, r, r + 1 + t, t + o)
            }
            if (e[r] >= 192) {
                var u = e[r] - 192;
                return r + 1 + u > e.length && a.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {}),
                l(e, r, r + 1, u)
            }
            if (e[r] >= 184) {
                var c = e[r] - 183;
                r + 1 + c > e.length && a.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
                var f = s(e, r + 1, c);
                return r + 1 + c + f > e.length && a.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {}),
                {
                    consumed: 1 + c + f,
                    result: (0,
                    n.hexlify)(e.slice(r + 1 + c, r + 1 + c + f))
                }
            }
            if (e[r] >= 128) {
                var h = e[r] - 128;
                return r + 1 + h > e.length && a.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}),
                {
                    consumed: 1 + h,
                    result: (0,
                    n.hexlify)(e.slice(r + 1, r + 1 + h))
                }
            }
            return {
                consumed: 1,
                result: (0,
                n.hexlify)(e[r])
            }
        }
        function h(e) {
            var r = (0,
            n.arrayify)(e)
              , t = f(r, 0);
            return t.consumed !== r.length && a.throwArgumentError("invalid rlp data", "data", e),
            t.result
        }
    },
    24517: function(e, r, t) {
        t.r(r),
        t.d(r, {
            SupportedAlgorithm: function() {
                return i.p
            },
            computeHmac: function() {
                return n.Gy
            },
            ripemd160: function() {
                return n.bP
            },
            sha256: function() {
                return n.JQ
            },
            sha512: function() {
                return n.o
            }
        });
        var n = t(43984)
          , i = t(8427)
    },
    43984: function(e, r, t) {
        t.d(r, {
            Gy: function() {
                return h
            },
            bP: function() {
                return c
            },
            JQ: function() {
                return l
            },
            o: function() {
                return f
            }
        });
        var n = t(37553)
          , i = t.n(n)
          , a = t(52009)
          , o = t(8427)
          , s = t(2735)
          , u = new s.Logger("sha2/5.7.0");
        function c(e) {
            return "0x" + i().ripemd160().update((0,
            a.arrayify)(e)).digest("hex")
        }
        function l(e) {
            return "0x" + i().sha256().update((0,
            a.arrayify)(e)).digest("hex")
        }
        function f(e) {
            return "0x" + i().sha512().update((0,
            a.arrayify)(e)).digest("hex")
        }
        function h(e, r, t) {
            return o.p[e] || u.throwError("unsupported algorithm " + e, s.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "hmac",
                algorithm: e
            }),
            "0x" + i().hmac(i()[e], (0,
            a.arrayify)(r)).update((0,
            a.arrayify)(t)).digest("hex")
        }
    },
    8427: function(e, r, t) {
        var n;
        t.d(r, {
            p: function() {
                return n
            }
        }),
        function(e) {
            e.sha256 = "sha256",
            e.sha512 = "sha512"
        }(n || (n = {}))
    },
    64760: function(e, r, t) {
        t.r(r),
        t.d(r, {
            SigningKey: function() {
                return Q
            },
            computePublicKey: function() {
                return X
            },
            recoverPublicKey: function() {
                return Y
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(64166)
          , o = t.n(a)
          , s = t(37553)
          , u = t.n(s);
        "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof t.g ? t.g : "undefined" !== typeof self && self;
        function c(e, r, t) {
            return t = {
                path: r,
                exports: {},
                require: function(e, r) {
                    return function() {
                        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                    }((void 0 === r || null === r) && t.path)
                }
            },
            e(t, t.exports),
            t.exports
        }
        var l = f;
        function f(e, r) {
            if (!e)
                throw new Error(r || "Assertion failed")
        }
        f.equal = function(e, r, t) {
            if (e != r)
                throw new Error(t || "Assertion failed: " + e + " != " + r)
        }
        ;
        var h = c((function(e, r) {
            var t = r;
            function n(e) {
                return 1 === e.length ? "0" + e : e
            }
            function i(e) {
                for (var r = "", t = 0; t < e.length; t++)
                    r += n(e[t].toString(16));
                return r
            }
            t.toArray = function(e, r) {
                if (Array.isArray(e))
                    return e.slice();
                if (!e)
                    return [];
                var t = [];
                if ("string" !== typeof e) {
                    for (var n = 0; n < e.length; n++)
                        t[n] = 0 | e[n];
                    return t
                }
                if ("hex" === r) {
                    (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (e = "0" + e);
                    for (n = 0; n < e.length; n += 2)
                        t.push(parseInt(e[n] + e[n + 1], 16))
                } else
                    for (n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n)
                          , a = i >> 8
                          , o = 255 & i;
                        a ? t.push(a, o) : t.push(o)
                    }
                return t
            }
            ,
            t.zero2 = n,
            t.toHex = i,
            t.encode = function(e, r) {
                return "hex" === r ? i(e) : e
            }
        }
        ))
          , d = c((function(e, r) {
            var t = r;
            t.assert = l,
            t.toArray = h.toArray,
            t.zero2 = h.zero2,
            t.toHex = h.toHex,
            t.encode = h.encode,
            t.getNAF = function(e, r, t) {
                var n = new Array(Math.max(e.bitLength(), t) + 1);
                n.fill(0);
                for (var i = 1 << r + 1, a = e.clone(), o = 0; o < n.length; o++) {
                    var s, u = a.andln(i - 1);
                    a.isOdd() ? (s = u > (i >> 1) - 1 ? (i >> 1) - u : u,
                    a.isubn(s)) : s = 0,
                    n[o] = s,
                    a.iushrn(1)
                }
                return n
            }
            ,
            t.getJSF = function(e, r) {
                var t = [[], []];
                e = e.clone(),
                r = r.clone();
                for (var n, i = 0, a = 0; e.cmpn(-i) > 0 || r.cmpn(-a) > 0; ) {
                    var o, s, u = e.andln(3) + i & 3, c = r.andln(3) + a & 3;
                    3 === u && (u = -1),
                    3 === c && (c = -1),
                    o = 0 === (1 & u) ? 0 : 3 !== (n = e.andln(7) + i & 7) && 5 !== n || 2 !== c ? u : -u,
                    t[0].push(o),
                    s = 0 === (1 & c) ? 0 : 3 !== (n = r.andln(7) + a & 7) && 5 !== n || 2 !== u ? c : -c,
                    t[1].push(s),
                    2 * i === o + 1 && (i = 1 - i),
                    2 * a === s + 1 && (a = 1 - a),
                    e.iushrn(1),
                    r.iushrn(1)
                }
                return t
            }
            ,
            t.cachedProperty = function(e, r, t) {
                var n = "_" + r;
                e.prototype[r] = function() {
                    return void 0 !== this[n] ? this[n] : this[n] = t.call(this)
                }
            }
            ,
            t.parseBytes = function(e) {
                return "string" === typeof e ? t.toArray(e, "hex") : e
            }
            ,
            t.intFromLE = function(e) {
                return new (o())(e,"hex","le")
            }
        }
        ))
          , p = d.getNAF
          , g = d.getJSF
          , v = d.assert;
        function m(e, r) {
            this.type = e,
            this.p = new (o())(r.p,16),
            this.red = r.prime ? o().red(r.prime) : o().mont(this.p),
            this.zero = new (o())(0).toRed(this.red),
            this.one = new (o())(1).toRed(this.red),
            this.two = new (o())(2).toRed(this.red),
            this.n = r.n && new (o())(r.n,16),
            this.g = r.g && this.pointFromJSON(r.g, r.gRed),
            this._wnafT1 = new Array(4),
            this._wnafT2 = new Array(4),
            this._wnafT3 = new Array(4),
            this._wnafT4 = new Array(4),
            this._bitLength = this.n ? this.n.bitLength() : 0;
            var t = this.n && this.p.div(this.n);
            !t || t.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
            this.redN = this.n.toRed(this.red))
        }
        var y = m;
        function b(e, r) {
            this.curve = e,
            this.type = r,
            this.precomputed = null
        }
        m.prototype.point = function() {
            throw new Error("Not implemented")
        }
        ,
        m.prototype.validate = function() {
            throw new Error("Not implemented")
        }
        ,
        m.prototype._fixedNafMul = function(e, r) {
            v(e.precomputed);
            var t = e._getDoubles()
              , n = p(r, 1, this._bitLength)
              , i = (1 << t.step + 1) - (t.step % 2 === 0 ? 2 : 1);
            i /= 3;
            var a, o, s = [];
            for (a = 0; a < n.length; a += t.step) {
                o = 0;
                for (var u = a + t.step - 1; u >= a; u--)
                    o = (o << 1) + n[u];
                s.push(o)
            }
            for (var c = this.jpoint(null, null, null), l = this.jpoint(null, null, null), f = i; f > 0; f--) {
                for (a = 0; a < s.length; a++)
                    (o = s[a]) === f ? l = l.mixedAdd(t.points[a]) : o === -f && (l = l.mixedAdd(t.points[a].neg()));
                c = c.add(l)
            }
            return c.toP()
        }
        ,
        m.prototype._wnafMul = function(e, r) {
            var t = 4
              , n = e._getNAFPoints(t);
            t = n.wnd;
            for (var i = n.points, a = p(r, t, this._bitLength), o = this.jpoint(null, null, null), s = a.length - 1; s >= 0; s--) {
                for (var u = 0; s >= 0 && 0 === a[s]; s--)
                    u++;
                if (s >= 0 && u++,
                o = o.dblp(u),
                s < 0)
                    break;
                var c = a[s];
                v(0 !== c),
                o = "affine" === e.type ? c > 0 ? o.mixedAdd(i[c - 1 >> 1]) : o.mixedAdd(i[-c - 1 >> 1].neg()) : c > 0 ? o.add(i[c - 1 >> 1]) : o.add(i[-c - 1 >> 1].neg())
            }
            return "affine" === e.type ? o.toP() : o
        }
        ,
        m.prototype._wnafMulAdd = function(e, r, t, n, i) {
            var a, o, s, u = this._wnafT1, c = this._wnafT2, l = this._wnafT3, f = 0;
            for (a = 0; a < n; a++) {
                var h = (s = r[a])._getNAFPoints(e);
                u[a] = h.wnd,
                c[a] = h.points
            }
            for (a = n - 1; a >= 1; a -= 2) {
                var d = a - 1
                  , v = a;
                if (1 === u[d] && 1 === u[v]) {
                    var m = [r[d], null, null, r[v]];
                    0 === r[d].y.cmp(r[v].y) ? (m[1] = r[d].add(r[v]),
                    m[2] = r[d].toJ().mixedAdd(r[v].neg())) : 0 === r[d].y.cmp(r[v].y.redNeg()) ? (m[1] = r[d].toJ().mixedAdd(r[v]),
                    m[2] = r[d].add(r[v].neg())) : (m[1] = r[d].toJ().mixedAdd(r[v]),
                    m[2] = r[d].toJ().mixedAdd(r[v].neg()));
                    var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                      , b = g(t[d], t[v]);
                    for (f = Math.max(b[0].length, f),
                    l[d] = new Array(f),
                    l[v] = new Array(f),
                    o = 0; o < f; o++) {
                        var w = 0 | b[0][o]
                          , k = 0 | b[1][o];
                        l[d][o] = y[3 * (w + 1) + (k + 1)],
                        l[v][o] = 0,
                        c[d] = m
                    }
                } else
                    l[d] = p(t[d], u[d], this._bitLength),
                    l[v] = p(t[v], u[v], this._bitLength),
                    f = Math.max(l[d].length, f),
                    f = Math.max(l[v].length, f)
            }
            var A = this.jpoint(null, null, null)
              , E = this._wnafT4;
            for (a = f; a >= 0; a--) {
                for (var x = 0; a >= 0; ) {
                    var S = !0;
                    for (o = 0; o < n; o++)
                        E[o] = 0 | l[o][a],
                        0 !== E[o] && (S = !1);
                    if (!S)
                        break;
                    x++,
                    a--
                }
                if (a >= 0 && x++,
                A = A.dblp(x),
                a < 0)
                    break;
                for (o = 0; o < n; o++) {
                    var P = E[o];
                    0 !== P && (P > 0 ? s = c[o][P - 1 >> 1] : P < 0 && (s = c[o][-P - 1 >> 1].neg()),
                    A = "affine" === s.type ? A.mixedAdd(s) : A.add(s))
                }
            }
            for (a = 0; a < n; a++)
                c[a] = null;
            return i ? A : A.toP()
        }
        ,
        m.BasePoint = b,
        b.prototype.eq = function() {
            throw new Error("Not implemented")
        }
        ,
        b.prototype.validate = function() {
            return this.curve.validate(this)
        }
        ,
        m.prototype.decodePoint = function(e, r) {
            e = d.toArray(e, r);
            var t = this.p.byteLength();
            if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 === 2 * t)
                return 6 === e[0] ? v(e[e.length - 1] % 2 === 0) : 7 === e[0] && v(e[e.length - 1] % 2 === 1),
                this.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t));
            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === t)
                return this.pointFromX(e.slice(1, 1 + t), 3 === e[0]);
            throw new Error("Unknown point format")
        }
        ,
        b.prototype.encodeCompressed = function(e) {
            return this.encode(e, !0)
        }
        ,
        b.prototype._encode = function(e) {
            var r = this.curve.p.byteLength()
              , t = this.getX().toArray("be", r);
            return e ? [this.getY().isEven() ? 2 : 3].concat(t) : [4].concat(t, this.getY().toArray("be", r))
        }
        ,
        b.prototype.encode = function(e, r) {
            return d.encode(this._encode(r), e)
        }
        ,
        b.prototype.precompute = function(e) {
            if (this.precomputed)
                return this;
            var r = {
                doubles: null,
                naf: null,
                beta: null
            };
            return r.naf = this._getNAFPoints(8),
            r.doubles = this._getDoubles(4, e),
            r.beta = this._getBeta(),
            this.precomputed = r,
            this
        }
        ,
        b.prototype._hasDoubles = function(e) {
            if (!this.precomputed)
                return !1;
            var r = this.precomputed.doubles;
            return !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
        }
        ,
        b.prototype._getDoubles = function(e, r) {
            if (this.precomputed && this.precomputed.doubles)
                return this.precomputed.doubles;
            for (var t = [this], n = this, i = 0; i < r; i += e) {
                for (var a = 0; a < e; a++)
                    n = n.dbl();
                t.push(n)
            }
            return {
                step: e,
                points: t
            }
        }
        ,
        b.prototype._getNAFPoints = function(e) {
            if (this.precomputed && this.precomputed.naf)
                return this.precomputed.naf;
            for (var r = [this], t = (1 << e) - 1, n = 1 === t ? null : this.dbl(), i = 1; i < t; i++)
                r[i] = r[i - 1].add(n);
            return {
                wnd: e,
                points: r
            }
        }
        ,
        b.prototype._getBeta = function() {
            return null
        }
        ,
        b.prototype.dblp = function(e) {
            for (var r = this, t = 0; t < e; t++)
                r = r.dbl();
            return r
        }
        ;
        var w = c((function(e) {
            "function" === typeof Object.create ? e.exports = function(e, r) {
                r && (e.super_ = r,
                e.prototype = Object.create(r.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            }
            : e.exports = function(e, r) {
                if (r) {
                    e.super_ = r;
                    var t = function() {};
                    t.prototype = r.prototype,
                    e.prototype = new t,
                    e.prototype.constructor = e
                }
            }
        }
        ))
          , k = d.assert;
        function A(e) {
            y.call(this, "short", e),
            this.a = new (o())(e.a,16).toRed(this.red),
            this.b = new (o())(e.b,16).toRed(this.red),
            this.tinv = this.two.redInvm(),
            this.zeroA = 0 === this.a.fromRed().cmpn(0),
            this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
            this.endo = this._getEndomorphism(e),
            this._endoWnafT1 = new Array(4),
            this._endoWnafT2 = new Array(4)
        }
        w(A, y);
        var E = A;
        function x(e, r, t, n) {
            y.BasePoint.call(this, e, "affine"),
            null === r && null === t ? (this.x = null,
            this.y = null,
            this.inf = !0) : (this.x = new (o())(r,16),
            this.y = new (o())(t,16),
            n && (this.x.forceRed(this.curve.red),
            this.y.forceRed(this.curve.red)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.inf = !1)
        }
        function S(e, r, t, n) {
            y.BasePoint.call(this, e, "jacobian"),
            null === r && null === t && null === n ? (this.x = this.curve.one,
            this.y = this.curve.one,
            this.z = new (o())(0)) : (this.x = new (o())(r,16),
            this.y = new (o())(t,16),
            this.z = new (o())(n,16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one
        }
        A.prototype._getEndomorphism = function(e) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var r, t;
                if (e.beta)
                    r = new (o())(e.beta,16).toRed(this.red);
                else {
                    var n = this._getEndoRoots(this.p);
                    r = (r = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
                }
                if (e.lambda)
                    t = new (o())(e.lambda,16);
                else {
                    var i = this._getEndoRoots(this.n);
                    0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(r)) ? t = i[0] : (t = i[1],
                    k(0 === this.g.mul(t).x.cmp(this.g.x.redMul(r))))
                }
                return {
                    beta: r,
                    lambda: t,
                    basis: e.basis ? e.basis.map((function(e) {
                        return {
                            a: new (o())(e.a,16),
                            b: new (o())(e.b,16)
                        }
                    }
                    )) : this._getEndoBasis(t)
                }
            }
        }
        ,
        A.prototype._getEndoRoots = function(e) {
            var r = e === this.p ? this.red : o().mont(e)
              , t = new (o())(2).toRed(r).redInvm()
              , n = t.redNeg()
              , i = new (o())(3).toRed(r).redNeg().redSqrt().redMul(t);
            return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
        }
        ,
        A.prototype._getEndoBasis = function(e) {
            for (var r, t, n, i, a, s, u, c, l, f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, d = this.n.clone(), p = new (o())(1), g = new (o())(0), v = new (o())(0), m = new (o())(1), y = 0; 0 !== h.cmpn(0); ) {
                var b = d.div(h);
                c = d.sub(b.mul(h)),
                l = v.sub(b.mul(p));
                var w = m.sub(b.mul(g));
                if (!n && c.cmp(f) < 0)
                    r = u.neg(),
                    t = p,
                    n = c.neg(),
                    i = l;
                else if (n && 2 === ++y)
                    break;
                u = c,
                d = h,
                h = c,
                v = p,
                p = l,
                m = g,
                g = w
            }
            a = c.neg(),
            s = l;
            var k = n.sqr().add(i.sqr());
            return a.sqr().add(s.sqr()).cmp(k) >= 0 && (a = r,
            s = t),
            n.negative && (n = n.neg(),
            i = i.neg()),
            a.negative && (a = a.neg(),
            s = s.neg()),
            [{
                a: n,
                b: i
            }, {
                a: a,
                b: s
            }]
        }
        ,
        A.prototype._endoSplit = function(e) {
            var r = this.endo.basis
              , t = r[0]
              , n = r[1]
              , i = n.b.mul(e).divRound(this.n)
              , a = t.b.neg().mul(e).divRound(this.n)
              , o = i.mul(t.a)
              , s = a.mul(n.a)
              , u = i.mul(t.b)
              , c = a.mul(n.b);
            return {
                k1: e.sub(o).sub(s),
                k2: u.add(c).neg()
            }
        }
        ,
        A.prototype.pointFromX = function(e, r) {
            (e = new (o())(e,16)).red || (e = e.toRed(this.red));
            var t = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b)
              , n = t.redSqrt();
            if (0 !== n.redSqr().redSub(t).cmp(this.zero))
                throw new Error("invalid point");
            var i = n.fromRed().isOdd();
            return (r && !i || !r && i) && (n = n.redNeg()),
            this.point(e, n)
        }
        ,
        A.prototype.validate = function(e) {
            if (e.inf)
                return !0;
            var r = e.x
              , t = e.y
              , n = this.a.redMul(r)
              , i = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
            return 0 === t.redSqr().redISub(i).cmpn(0)
        }
        ,
        A.prototype._endoWnafMulAdd = function(e, r, t) {
            for (var n = this._endoWnafT1, i = this._endoWnafT2, a = 0; a < e.length; a++) {
                var o = this._endoSplit(r[a])
                  , s = e[a]
                  , u = s._getBeta();
                o.k1.negative && (o.k1.ineg(),
                s = s.neg(!0)),
                o.k2.negative && (o.k2.ineg(),
                u = u.neg(!0)),
                n[2 * a] = s,
                n[2 * a + 1] = u,
                i[2 * a] = o.k1,
                i[2 * a + 1] = o.k2
            }
            for (var c = this._wnafMulAdd(1, n, i, 2 * a, t), l = 0; l < 2 * a; l++)
                n[l] = null,
                i[l] = null;
            return c
        }
        ,
        w(x, y.BasePoint),
        A.prototype.point = function(e, r, t) {
            return new x(this,e,r,t)
        }
        ,
        A.prototype.pointFromJSON = function(e, r) {
            return x.fromJSON(this, e, r)
        }
        ,
        x.prototype._getBeta = function() {
            if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta)
                    return e.beta;
                var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var t = this.curve
                      , n = function(e) {
                        return t.point(e.x.redMul(t.endo.beta), e.y)
                    };
                    e.beta = r,
                    r.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(n)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(n)
                        }
                    }
                }
                return r
            }
        }
        ,
        x.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }
        ,
        x.fromJSON = function(e, r, t) {
            "string" === typeof r && (r = JSON.parse(r));
            var n = e.point(r[0], r[1], t);
            if (!r[2])
                return n;
            function i(r) {
                return e.point(r[0], r[1], t)
            }
            var a = r[2];
            return n.precomputed = {
                beta: null,
                doubles: a.doubles && {
                    step: a.doubles.step,
                    points: [n].concat(a.doubles.points.map(i))
                },
                naf: a.naf && {
                    wnd: a.naf.wnd,
                    points: [n].concat(a.naf.points.map(i))
                }
            },
            n
        }
        ,
        x.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }
        ,
        x.prototype.isInfinity = function() {
            return this.inf
        }
        ,
        x.prototype.add = function(e) {
            if (this.inf)
                return e;
            if (e.inf)
                return this;
            if (this.eq(e))
                return this.dbl();
            if (this.neg().eq(e))
                return this.curve.point(null, null);
            if (0 === this.x.cmp(e.x))
                return this.curve.point(null, null);
            var r = this.y.redSub(e.y);
            0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(e.x).redInvm()));
            var t = r.redSqr().redISub(this.x).redISub(e.x)
              , n = r.redMul(this.x.redSub(t)).redISub(this.y);
            return this.curve.point(t, n)
        }
        ,
        x.prototype.dbl = function() {
            if (this.inf)
                return this;
            var e = this.y.redAdd(this.y);
            if (0 === e.cmpn(0))
                return this.curve.point(null, null);
            var r = this.curve.a
              , t = this.x.redSqr()
              , n = e.redInvm()
              , i = t.redAdd(t).redIAdd(t).redIAdd(r).redMul(n)
              , a = i.redSqr().redISub(this.x.redAdd(this.x))
              , o = i.redMul(this.x.redSub(a)).redISub(this.y);
            return this.curve.point(a, o)
        }
        ,
        x.prototype.getX = function() {
            return this.x.fromRed()
        }
        ,
        x.prototype.getY = function() {
            return this.y.fromRed()
        }
        ,
        x.prototype.mul = function(e) {
            return e = new (o())(e,16),
            this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
        }
        ,
        x.prototype.mulAdd = function(e, r, t) {
            var n = [this, r]
              , i = [e, t];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
        }
        ,
        x.prototype.jmulAdd = function(e, r, t) {
            var n = [this, r]
              , i = [e, t];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }
        ,
        x.prototype.eq = function(e) {
            return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
        }
        ,
        x.prototype.neg = function(e) {
            if (this.inf)
                return this;
            var r = this.curve.point(this.x, this.y.redNeg());
            if (e && this.precomputed) {
                var t = this.precomputed
                  , n = function(e) {
                    return e.neg()
                };
                r.precomputed = {
                    naf: t.naf && {
                        wnd: t.naf.wnd,
                        points: t.naf.points.map(n)
                    },
                    doubles: t.doubles && {
                        step: t.doubles.step,
                        points: t.doubles.points.map(n)
                    }
                }
            }
            return r
        }
        ,
        x.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }
        ,
        w(S, y.BasePoint),
        A.prototype.jpoint = function(e, r, t) {
            return new S(this,e,r,t)
        }
        ,
        S.prototype.toP = function() {
            if (this.isInfinity())
                return this.curve.point(null, null);
            var e = this.z.redInvm()
              , r = e.redSqr()
              , t = this.x.redMul(r)
              , n = this.y.redMul(r).redMul(e);
            return this.curve.point(t, n)
        }
        ,
        S.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }
        ,
        S.prototype.add = function(e) {
            if (this.isInfinity())
                return e;
            if (e.isInfinity())
                return this;
            var r = e.z.redSqr()
              , t = this.z.redSqr()
              , n = this.x.redMul(r)
              , i = e.x.redMul(t)
              , a = this.y.redMul(r.redMul(e.z))
              , o = e.y.redMul(t.redMul(this.z))
              , s = n.redSub(i)
              , u = a.redSub(o);
            if (0 === s.cmpn(0))
                return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var c = s.redSqr()
              , l = c.redMul(s)
              , f = n.redMul(c)
              , h = u.redSqr().redIAdd(l).redISub(f).redISub(f)
              , d = u.redMul(f.redISub(h)).redISub(a.redMul(l))
              , p = this.z.redMul(e.z).redMul(s);
            return this.curve.jpoint(h, d, p)
        }
        ,
        S.prototype.mixedAdd = function(e) {
            if (this.isInfinity())
                return e.toJ();
            if (e.isInfinity())
                return this;
            var r = this.z.redSqr()
              , t = this.x
              , n = e.x.redMul(r)
              , i = this.y
              , a = e.y.redMul(r).redMul(this.z)
              , o = t.redSub(n)
              , s = i.redSub(a);
            if (0 === o.cmpn(0))
                return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var u = o.redSqr()
              , c = u.redMul(o)
              , l = t.redMul(u)
              , f = s.redSqr().redIAdd(c).redISub(l).redISub(l)
              , h = s.redMul(l.redISub(f)).redISub(i.redMul(c))
              , d = this.z.redMul(o);
            return this.curve.jpoint(f, h, d)
        }
        ,
        S.prototype.dblp = function(e) {
            if (0 === e)
                return this;
            if (this.isInfinity())
                return this;
            if (!e)
                return this.dbl();
            var r;
            if (this.curve.zeroA || this.curve.threeA) {
                var t = this;
                for (r = 0; r < e; r++)
                    t = t.dbl();
                return t
            }
            var n = this.curve.a
              , i = this.curve.tinv
              , a = this.x
              , o = this.y
              , s = this.z
              , u = s.redSqr().redSqr()
              , c = o.redAdd(o);
            for (r = 0; r < e; r++) {
                var l = a.redSqr()
                  , f = c.redSqr()
                  , h = f.redSqr()
                  , d = l.redAdd(l).redIAdd(l).redIAdd(n.redMul(u))
                  , p = a.redMul(f)
                  , g = d.redSqr().redISub(p.redAdd(p))
                  , v = p.redISub(g)
                  , m = d.redMul(v);
                m = m.redIAdd(m).redISub(h);
                var y = c.redMul(s);
                r + 1 < e && (u = u.redMul(h)),
                a = g,
                s = y,
                c = m
            }
            return this.curve.jpoint(a, c.redMul(i), s)
        }
        ,
        S.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }
        ,
        S.prototype._zeroDbl = function() {
            var e, r, t;
            if (this.zOne) {
                var n = this.x.redSqr()
                  , i = this.y.redSqr()
                  , a = i.redSqr()
                  , o = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
                o = o.redIAdd(o);
                var s = n.redAdd(n).redIAdd(n)
                  , u = s.redSqr().redISub(o).redISub(o)
                  , c = a.redIAdd(a);
                c = (c = c.redIAdd(c)).redIAdd(c),
                e = u,
                r = s.redMul(o.redISub(u)).redISub(c),
                t = this.y.redAdd(this.y)
            } else {
                var l = this.x.redSqr()
                  , f = this.y.redSqr()
                  , h = f.redSqr()
                  , d = this.x.redAdd(f).redSqr().redISub(l).redISub(h);
                d = d.redIAdd(d);
                var p = l.redAdd(l).redIAdd(l)
                  , g = p.redSqr()
                  , v = h.redIAdd(h);
                v = (v = v.redIAdd(v)).redIAdd(v),
                e = g.redISub(d).redISub(d),
                r = p.redMul(d.redISub(e)).redISub(v),
                t = (t = this.y.redMul(this.z)).redIAdd(t)
            }
            return this.curve.jpoint(e, r, t)
        }
        ,
        S.prototype._threeDbl = function() {
            var e, r, t;
            if (this.zOne) {
                var n = this.x.redSqr()
                  , i = this.y.redSqr()
                  , a = i.redSqr()
                  , o = this.x.redAdd(i).redSqr().redISub(n).redISub(a);
                o = o.redIAdd(o);
                var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a)
                  , u = s.redSqr().redISub(o).redISub(o);
                e = u;
                var c = a.redIAdd(a);
                c = (c = c.redIAdd(c)).redIAdd(c),
                r = s.redMul(o.redISub(u)).redISub(c),
                t = this.y.redAdd(this.y)
            } else {
                var l = this.z.redSqr()
                  , f = this.y.redSqr()
                  , h = this.x.redMul(f)
                  , d = this.x.redSub(l).redMul(this.x.redAdd(l));
                d = d.redAdd(d).redIAdd(d);
                var p = h.redIAdd(h)
                  , g = (p = p.redIAdd(p)).redAdd(p);
                e = d.redSqr().redISub(g),
                t = this.y.redAdd(this.z).redSqr().redISub(f).redISub(l);
                var v = f.redSqr();
                v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v),
                r = d.redMul(p.redISub(e)).redISub(v)
            }
            return this.curve.jpoint(e, r, t)
        }
        ,
        S.prototype._dbl = function() {
            var e = this.curve.a
              , r = this.x
              , t = this.y
              , n = this.z
              , i = n.redSqr().redSqr()
              , a = r.redSqr()
              , o = t.redSqr()
              , s = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i))
              , u = r.redAdd(r)
              , c = (u = u.redIAdd(u)).redMul(o)
              , l = s.redSqr().redISub(c.redAdd(c))
              , f = c.redISub(l)
              , h = o.redSqr();
            h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
            var d = s.redMul(f).redISub(h)
              , p = t.redAdd(t).redMul(n);
            return this.curve.jpoint(l, d, p)
        }
        ,
        S.prototype.trpl = function() {
            if (!this.curve.zeroA)
                return this.dbl().add(this);
            var e = this.x.redSqr()
              , r = this.y.redSqr()
              , t = this.z.redSqr()
              , n = r.redSqr()
              , i = e.redAdd(e).redIAdd(e)
              , a = i.redSqr()
              , o = this.x.redAdd(r).redSqr().redISub(e).redISub(n)
              , s = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(a)).redSqr()
              , u = n.redIAdd(n);
            u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
            var c = i.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(u)
              , l = r.redMul(c);
            l = (l = l.redIAdd(l)).redIAdd(l);
            var f = this.x.redMul(s).redISub(l);
            f = (f = f.redIAdd(f)).redIAdd(f);
            var h = this.y.redMul(c.redMul(u.redISub(c)).redISub(o.redMul(s)));
            h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
            var d = this.z.redAdd(o).redSqr().redISub(t).redISub(s);
            return this.curve.jpoint(f, h, d)
        }
        ,
        S.prototype.mul = function(e, r) {
            return e = new (o())(e,r),
            this.curve._wnafMul(this, e)
        }
        ,
        S.prototype.eq = function(e) {
            if ("affine" === e.type)
                return this.eq(e.toJ());
            if (this === e)
                return !0;
            var r = this.z.redSqr()
              , t = e.z.redSqr();
            if (0 !== this.x.redMul(t).redISub(e.x.redMul(r)).cmpn(0))
                return !1;
            var n = r.redMul(this.z)
              , i = t.redMul(e.z);
            return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
        }
        ,
        S.prototype.eqXToP = function(e) {
            var r = this.z.redSqr()
              , t = e.toRed(this.curve.red).redMul(r);
            if (0 === this.x.cmp(t))
                return !0;
            for (var n = e.clone(), i = this.curve.redN.redMul(r); ; ) {
                if (n.iadd(this.curve.n),
                n.cmp(this.curve.p) >= 0)
                    return !1;
                if (t.redIAdd(i),
                0 === this.x.cmp(t))
                    return !0
            }
        }
        ,
        S.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }
        ,
        S.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
        ;
        var P = c((function(e, r) {
            var t = r;
            t.base = y,
            t.short = E,
            t.mont = null,
            t.edwards = null
        }
        ))
          , N = c((function(e, r) {
            var t, n = r, i = d.assert;
            function a(e) {
                "short" === e.type ? this.curve = new P.short(e) : "edwards" === e.type ? this.curve = new P.edwards(e) : this.curve = new P.mont(e),
                this.g = this.curve.g,
                this.n = this.curve.n,
                this.hash = e.hash,
                i(this.g.validate(), "Invalid curve"),
                i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }
            function o(e, r) {
                Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var t = new a(r);
                        return Object.defineProperty(n, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: t
                        }),
                        t
                    }
                })
            }
            n.PresetCurve = a,
            o("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: u().sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }),
            o("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: u().sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }),
            o("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: u().sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }),
            o("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: u().sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }),
            o("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: u().sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }),
            o("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: u().sha256,
                gRed: !1,
                g: ["9"]
            }),
            o("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: u().sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                t = null.crash()
            } catch (s) {
                t = void 0
            }
            o("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: u().sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", t]
            })
        }
        ));
        function R(e) {
            if (!(this instanceof R))
                return new R(e);
            this.hash = e.hash,
            this.predResist = !!e.predResist,
            this.outLen = this.hash.outSize,
            this.minEntropy = e.minEntropy || this.hash.hmacStrength,
            this._reseed = null,
            this.reseedInterval = null,
            this.K = null,
            this.V = null;
            var r = h.toArray(e.entropy, e.entropyEnc || "hex")
              , t = h.toArray(e.nonce, e.nonceEnc || "hex")
              , n = h.toArray(e.pers, e.persEnc || "hex");
            l(r.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._init(r, t, n)
        }
        var C = R;
        R.prototype._init = function(e, r, t) {
            var n = e.concat(r).concat(t);
            this.K = new Array(this.outLen / 8),
            this.V = new Array(this.outLen / 8);
            for (var i = 0; i < this.V.length; i++)
                this.K[i] = 0,
                this.V[i] = 1;
            this._update(n),
            this._reseed = 1,
            this.reseedInterval = 281474976710656
        }
        ,
        R.prototype._hmac = function() {
            return new (u().hmac)(this.hash,this.K)
        }
        ,
        R.prototype._update = function(e) {
            var r = this._hmac().update(this.V).update([0]);
            e && (r = r.update(e)),
            this.K = r.digest(),
            this.V = this._hmac().update(this.V).digest(),
            e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(),
            this.V = this._hmac().update(this.V).digest())
        }
        ,
        R.prototype.reseed = function(e, r, t, n) {
            "string" !== typeof r && (n = t,
            t = r,
            r = null),
            e = h.toArray(e, r),
            t = h.toArray(t, n),
            l(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._update(e.concat(t || [])),
            this._reseed = 1
        }
        ,
        R.prototype.generate = function(e, r, t, n) {
            if (this._reseed > this.reseedInterval)
                throw new Error("Reseed is required");
            "string" !== typeof r && (n = t,
            t = r,
            r = null),
            t && (t = h.toArray(t, n || "hex"),
            this._update(t));
            for (var i = []; i.length < e; )
                this.V = this._hmac().update(this.V).digest(),
                i = i.concat(this.V);
            var a = i.slice(0, e);
            return this._update(t),
            this._reseed++,
            h.encode(a, r)
        }
        ;
        var O = d.assert;
        function _(e, r) {
            this.ec = e,
            this.priv = null,
            this.pub = null,
            r.priv && this._importPrivate(r.priv, r.privEnc),
            r.pub && this._importPublic(r.pub, r.pubEnc)
        }
        var T = _;
        _.fromPublic = function(e, r, t) {
            return r instanceof _ ? r : new _(e,{
                pub: r,
                pubEnc: t
            })
        }
        ,
        _.fromPrivate = function(e, r, t) {
            return r instanceof _ ? r : new _(e,{
                priv: r,
                privEnc: t
            })
        }
        ,
        _.prototype.validate = function() {
            var e = this.getPublic();
            return e.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }
        ,
        _.prototype.getPublic = function(e, r) {
            return "string" === typeof e && (r = e,
            e = null),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            r ? this.pub.encode(r, e) : this.pub
        }
        ,
        _.prototype.getPrivate = function(e) {
            return "hex" === e ? this.priv.toString(16, 2) : this.priv
        }
        ,
        _.prototype._importPrivate = function(e, r) {
            this.priv = new (o())(e,r || 16),
            this.priv = this.priv.umod(this.ec.curve.n)
        }
        ,
        _.prototype._importPublic = function(e, r) {
            if (e.x || e.y)
                return "mont" === this.ec.curve.type ? O(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || O(e.x && e.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(e.x, e.y));
            this.pub = this.ec.curve.decodePoint(e, r)
        }
        ,
        _.prototype.derive = function(e) {
            return e.validate() || O(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
        }
        ,
        _.prototype.sign = function(e, r, t) {
            return this.ec.sign(e, this, r, t)
        }
        ,
        _.prototype.verify = function(e, r) {
            return this.ec.verify(e, r, this)
        }
        ,
        _.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
        ;
        var I = d.assert;
        function B(e, r) {
            if (e instanceof B)
                return e;
            this._importDER(e, r) || (I(e.r && e.s, "Signature without r or s"),
            this.r = new (o())(e.r,16),
            this.s = new (o())(e.s,16),
            void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
        }
        var L = B;
        function Z() {
            this.place = 0
        }
        function F(e, r) {
            var t = e[r.place++];
            if (!(128 & t))
                return t;
            var n = 15 & t;
            if (0 === n || n > 4)
                return !1;
            for (var i = 0, a = 0, o = r.place; a < n; a++,
            o++)
                i <<= 8,
                i |= e[o],
                i >>>= 0;
            return !(i <= 127) && (r.place = o,
            i)
        }
        function D(e) {
            for (var r = 0, t = e.length - 1; !e[r] && !(128 & e[r + 1]) && r < t; )
                r++;
            return 0 === r ? e : e.slice(r)
        }
        function M(e, r) {
            if (r < 128)
                e.push(r);
            else {
                var t = 1 + (Math.log(r) / Math.LN2 >>> 3);
                for (e.push(128 | t); --t; )
                    e.push(r >>> (t << 3) & 255);
                e.push(r)
            }
        }
        B.prototype._importDER = function(e, r) {
            e = d.toArray(e, r);
            var t = new Z;
            if (48 !== e[t.place++])
                return !1;
            var n = F(e, t);
            if (!1 === n)
                return !1;
            if (n + t.place !== e.length)
                return !1;
            if (2 !== e[t.place++])
                return !1;
            var i = F(e, t);
            if (!1 === i)
                return !1;
            var a = e.slice(t.place, i + t.place);
            if (t.place += i,
            2 !== e[t.place++])
                return !1;
            var s = F(e, t);
            if (!1 === s)
                return !1;
            if (e.length !== s + t.place)
                return !1;
            var u = e.slice(t.place, s + t.place);
            if (0 === a[0]) {
                if (!(128 & a[1]))
                    return !1;
                a = a.slice(1)
            }
            if (0 === u[0]) {
                if (!(128 & u[1]))
                    return !1;
                u = u.slice(1)
            }
            return this.r = new (o())(a),
            this.s = new (o())(u),
            this.recoveryParam = null,
            !0
        }
        ,
        B.prototype.toDER = function(e) {
            var r = this.r.toArray()
              , t = this.s.toArray();
            for (128 & r[0] && (r = [0].concat(r)),
            128 & t[0] && (t = [0].concat(t)),
            r = D(r),
            t = D(t); !t[0] && !(128 & t[1]); )
                t = t.slice(1);
            var n = [2];
            M(n, r.length),
            (n = n.concat(r)).push(2),
            M(n, t.length);
            var i = n.concat(t)
              , a = [48];
            return M(a, i.length),
            a = a.concat(i),
            d.encode(a, e)
        }
        ;
        var U = function() {
            throw new Error("unsupported")
        }
          , G = d.assert;
        function H(e) {
            if (!(this instanceof H))
                return new H(e);
            "string" === typeof e && (G(Object.prototype.hasOwnProperty.call(N, e), "Unknown curve " + e),
            e = N[e]),
            e instanceof N.PresetCurve && (e = {
                curve: e
            }),
            this.curve = e.curve.curve,
            this.n = this.curve.n,
            this.nh = this.n.ushrn(1),
            this.g = this.curve.g,
            this.g = e.curve.g,
            this.g.precompute(e.curve.n.bitLength() + 1),
            this.hash = e.hash || e.curve.hash
        }
        var j = H;
        H.prototype.keyPair = function(e) {
            return new T(this,e)
        }
        ,
        H.prototype.keyFromPrivate = function(e, r) {
            return T.fromPrivate(this, e, r)
        }
        ,
        H.prototype.keyFromPublic = function(e, r) {
            return T.fromPublic(this, e, r)
        }
        ,
        H.prototype.genKeyPair = function(e) {
            e || (e = {});
            for (var r = new C({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || U(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), t = this.n.byteLength(), n = this.n.sub(new (o())(2)); ; ) {
                var i = new (o())(r.generate(t));
                if (!(i.cmp(n) > 0))
                    return i.iaddn(1),
                    this.keyFromPrivate(i)
            }
        }
        ,
        H.prototype._truncateToN = function(e, r) {
            var t = 8 * e.byteLength() - this.n.bitLength();
            return t > 0 && (e = e.ushrn(t)),
            !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        }
        ,
        H.prototype.sign = function(e, r, t, n) {
            "object" === typeof t && (n = t,
            t = null),
            n || (n = {}),
            r = this.keyFromPrivate(r, t),
            e = this._truncateToN(new (o())(e,16));
            for (var i = this.n.byteLength(), a = r.getPrivate().toArray("be", i), s = e.toArray("be", i), u = new C({
                hash: this.hash,
                entropy: a,
                nonce: s,
                pers: n.pers,
                persEnc: n.persEnc || "utf8"
            }), c = this.n.sub(new (o())(1)), l = 0; ; l++) {
                var f = n.k ? n.k(l) : new (o())(u.generate(this.n.byteLength()));
                if (!((f = this._truncateToN(f, !0)).cmpn(1) <= 0 || f.cmp(c) >= 0)) {
                    var h = this.g.mul(f);
                    if (!h.isInfinity()) {
                        var d = h.getX()
                          , p = d.umod(this.n);
                        if (0 !== p.cmpn(0)) {
                            var g = f.invm(this.n).mul(p.mul(r.getPrivate()).iadd(e));
                            if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                                var v = (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                                return n.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g),
                                v ^= 1),
                                new L({
                                    r: p,
                                    s: g,
                                    recoveryParam: v
                                })
                            }
                        }
                    }
                }
            }
        }
        ,
        H.prototype.verify = function(e, r, t, n) {
            e = this._truncateToN(new (o())(e,16)),
            t = this.keyFromPublic(t, n);
            var i = (r = new L(r,"hex")).r
              , a = r.s;
            if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0)
                return !1;
            if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
                return !1;
            var s, u = a.invm(this.n), c = u.mul(e).umod(this.n), l = u.mul(i).umod(this.n);
            return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(c, t.getPublic(), l)).isInfinity() && s.eqXToP(i) : !(s = this.g.mulAdd(c, t.getPublic(), l)).isInfinity() && 0 === s.getX().umod(this.n).cmp(i)
        }
        ,
        H.prototype.recoverPubKey = function(e, r, t, n) {
            G((3 & t) === t, "The recovery param is more than two bits"),
            r = new L(r,n);
            var i = this.n
              , a = new (o())(e)
              , s = r.r
              , u = r.s
              , c = 1 & t
              , l = t >> 1;
            if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
                throw new Error("Unable to find sencond key candinate");
            s = l ? this.curve.pointFromX(s.add(this.curve.n), c) : this.curve.pointFromX(s, c);
            var f = r.r.invm(i)
              , h = i.sub(a).mul(f).umod(i)
              , d = u.mul(f).umod(i);
            return this.g.mulAdd(h, s, d)
        }
        ,
        H.prototype.getKeyRecoveryParam = function(e, r, t, n) {
            if (null !== (r = new L(r,n)).recoveryParam)
                return r.recoveryParam;
            for (var i = 0; i < 4; i++) {
                var a;
                try {
                    a = this.recoverPubKey(e, r, i)
                } catch (e) {
                    continue
                }
                if (a.eq(t))
                    return i
            }
            throw new Error("Unable to find valid recovery factor")
        }
        ;
        var K = c((function(e, r) {
            var t = r;
            t.version = "6.5.4",
            t.utils = d,
            t.rand = function() {
                throw new Error("unsupported")
            }
            ,
            t.curve = P,
            t.curves = N,
            t.ec = j,
            t.eddsa = null
        }
        )).ec
          , q = t(52009)
          , z = t(54812)
          , J = new (t(2735).Logger)("signing-key/5.7.0")
          , V = null;
        function W() {
            return V || (V = new K("secp256k1")),
            V
        }
        var Q = function() {
            function e(r) {
                (0,
                n.Z)(this, e),
                (0,
                z.defineReadOnly)(this, "curve", "secp256k1"),
                (0,
                z.defineReadOnly)(this, "privateKey", (0,
                q.hexlify)(r)),
                32 !== (0,
                q.hexDataLength)(this.privateKey) && J.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                var t = W().keyFromPrivate((0,
                q.arrayify)(this.privateKey));
                (0,
                z.defineReadOnly)(this, "publicKey", "0x" + t.getPublic(!1, "hex")),
                (0,
                z.defineReadOnly)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")),
                (0,
                z.defineReadOnly)(this, "_isSigningKey", !0)
            }
            return (0,
            i.Z)(e, [{
                key: "_addPoint",
                value: function(e) {
                    var r = W().keyFromPublic((0,
                    q.arrayify)(this.publicKey))
                      , t = W().keyFromPublic((0,
                    q.arrayify)(e));
                    return "0x" + r.pub.add(t.pub).encodeCompressed("hex")
                }
            }, {
                key: "signDigest",
                value: function(e) {
                    var r = W().keyFromPrivate((0,
                    q.arrayify)(this.privateKey))
                      , t = (0,
                    q.arrayify)(e);
                    32 !== t.length && J.throwArgumentError("bad digest length", "digest", e);
                    var n = r.sign(t, {
                        canonical: !0
                    });
                    return (0,
                    q.splitSignature)({
                        recoveryParam: n.recoveryParam,
                        r: (0,
                        q.hexZeroPad)("0x" + n.r.toString(16), 32),
                        s: (0,
                        q.hexZeroPad)("0x" + n.s.toString(16), 32)
                    })
                }
            }, {
                key: "computeSharedSecret",
                value: function(e) {
                    var r = W().keyFromPrivate((0,
                    q.arrayify)(this.privateKey))
                      , t = W().keyFromPublic((0,
                    q.arrayify)(X(e)));
                    return (0,
                    q.hexZeroPad)("0x" + r.derive(t.getPublic()).toString(16), 32)
                }
            }], [{
                key: "isSigningKey",
                value: function(e) {
                    return !(!e || !e._isSigningKey)
                }
            }]),
            e
        }();
        function Y(e, r) {
            var t = (0,
            q.splitSignature)(r)
              , n = {
                r: (0,
                q.arrayify)(t.r),
                s: (0,
                q.arrayify)(t.s)
            };
            return "0x" + W().recoverPubKey((0,
            q.arrayify)(e), n, t.recoveryParam).encode("hex", !1)
        }
        function X(e, r) {
            var t = (0,
            q.arrayify)(e);
            if (32 === t.length) {
                var n = new Q(t);
                return r ? "0x" + W().keyFromPrivate(t).getPublic(!0, "hex") : n.publicKey
            }
            return 33 === t.length ? r ? (0,
            q.hexlify)(t) : "0x" + W().keyFromPublic(t).getPublic(!1, "hex") : 65 === t.length ? r ? "0x" + W().keyFromPublic(t).getPublic(!0, "hex") : (0,
            q.hexlify)(t) : J.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
        }
    },
    46684: function(e, r, t) {
        t.r(r),
        t.d(r, {
            keccak256: function() {
                return v
            },
            pack: function() {
                return g
            },
            sha256: function() {
                return m
            }
        });
        var n = t(19560)
          , i = t(52009)
          , a = t(11291)
          , o = t(43984)
          , s = t(91953)
          , u = t(2735)
          , c = new RegExp("^bytes([0-9]+)$")
          , l = new RegExp("^(u?int)([0-9]*)$")
          , f = new RegExp("^(.*)\\[([0-9]*)\\]$")
          , h = "0000000000000000000000000000000000000000000000000000000000000000"
          , d = new u.Logger("solidity/5.7.0");
        function p(e, r, t) {
            switch (e) {
            case "address":
                return t ? (0,
                i.zeroPad)(r, 32) : (0,
                i.arrayify)(r);
            case "string":
                return (0,
                s.Y0)(r);
            case "bytes":
                return (0,
                i.arrayify)(r);
            case "bool":
                return r = r ? "0x01" : "0x00",
                t ? (0,
                i.zeroPad)(r, 32) : (0,
                i.arrayify)(r)
            }
            var a = e.match(l);
            if (a) {
                var o = parseInt(a[2] || "256");
                return (a[2] && String(o) !== a[2] || o % 8 !== 0 || 0 === o || o > 256) && d.throwArgumentError("invalid number type", "type", e),
                t && (o = 256),
                r = n.O$.from(r).toTwos(o),
                (0,
                i.zeroPad)(r, o / 8)
            }
            if (a = e.match(c)) {
                var u = parseInt(a[1]);
                return (String(u) !== a[1] || 0 === u || u > 32) && d.throwArgumentError("invalid bytes type", "type", e),
                (0,
                i.arrayify)(r).byteLength !== u && d.throwArgumentError("invalid value for ".concat(e), "value", r),
                t ? (0,
                i.arrayify)((r + h).substring(0, 66)) : r
            }
            if ((a = e.match(f)) && Array.isArray(r)) {
                var g = a[1];
                parseInt(a[2] || String(r.length)) != r.length && d.throwArgumentError("invalid array length for ".concat(e), "value", r);
                var v = [];
                return r.forEach((function(e) {
                    v.push(p(g, e, !0))
                }
                )),
                (0,
                i.concat)(v)
            }
            return d.throwArgumentError("invalid type", "type", e)
        }
        function g(e, r) {
            e.length != r.length && d.throwArgumentError("wrong number of values; expected ${ types.length }", "values", r);
            var t = [];
            return e.forEach((function(e, n) {
                t.push(p(e, r[n]))
            }
            )),
            (0,
            i.hexlify)((0,
            i.concat)(t))
        }
        function v(e, r) {
            return (0,
            a.keccak256)(g(e, r))
        }
        function m(e, r) {
            return (0,
            o.JQ)(g(e, r))
        }
    },
    18825: function(e, r, t) {
        t.d(r, {
            F: function() {
                return s
            },
            s: function() {
                return o
            }
        });
        var n = t(44160)
          , i = t(52009)
          , a = t(91953);
        function o(e) {
            var r = (0,
            a.Y0)(e);
            if (r.length > 31)
                throw new Error("bytes32 string must be less than 32 bytes");
            return (0,
            i.hexlify)((0,
            i.concat)([r, n.R]).slice(0, 32))
        }
        function s(e) {
            var r = (0,
            i.arrayify)(e);
            if (32 !== r.length)
                throw new Error("invalid bytes32 - not 32 bytes long");
            if (0 !== r[31])
                throw new Error("invalid bytes32 string - no null terminator");
            for (var t = 31; 0 === r[t - 1]; )
                t--;
            return (0,
            a.ZN)(r.slice(0, t))
        }
    },
    4491: function(e, r, t) {
        t.d(r, {
            Ll: function() {
                return p
            }
        });
        var n = t(91953);
        function i(e, r) {
            r || (r = function(e) {
                return [parseInt(e, 16)]
            }
            );
            var t = 0
              , n = {};
            return e.split(",").forEach((function(e) {
                var i = e.split(":");
                t += parseInt(i[0], 16),
                n[t] = r(i[1])
            }
            )),
            n
        }
        function a(e) {
            var r = 0;
            return e.split(",").map((function(e) {
                var t = e.split("-");
                return 1 === t.length ? t[1] = "0" : "" === t[1] && (t[1] = "1"),
                {
                    l: r + parseInt(t[0], 16),
                    h: r = parseInt(t[1], 16)
                }
            }
            ))
        }
        function o(e, r) {
            for (var t = 0, n = 0; n < r.length; n++) {
                var i = r[n];
                if (e >= (t += i.l) && e <= t + i.h && (e - t) % (i.d || 1) === 0) {
                    if (i.e && -1 !== i.e.indexOf(e - t))
                        continue;
                    return i
                }
            }
            return null
        }
        var s = a("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d")
          , u = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((function(e) {
            return parseInt(e, 16)
        }
        ))
          , c = [{
            h: 25,
            s: 32,
            l: 65
        }, {
            h: 30,
            s: 32,
            e: [23],
            l: 127
        }, {
            h: 54,
            s: 1,
            e: [48],
            l: 64,
            d: 2
        }, {
            h: 14,
            s: 1,
            l: 57,
            d: 2
        }, {
            h: 44,
            s: 1,
            l: 17,
            d: 2
        }, {
            h: 10,
            s: 1,
            e: [2, 6, 8],
            l: 61,
            d: 2
        }, {
            h: 16,
            s: 1,
            l: 68,
            d: 2
        }, {
            h: 84,
            s: 1,
            e: [18, 24, 66],
            l: 19,
            d: 2
        }, {
            h: 26,
            s: 32,
            e: [17],
            l: 435
        }, {
            h: 22,
            s: 1,
            l: 71,
            d: 2
        }, {
            h: 15,
            s: 80,
            l: 40
        }, {
            h: 31,
            s: 32,
            l: 16
        }, {
            h: 32,
            s: 1,
            l: 80,
            d: 2
        }, {
            h: 52,
            s: 1,
            l: 42,
            d: 2
        }, {
            h: 12,
            s: 1,
            l: 55,
            d: 2
        }, {
            h: 40,
            s: 1,
            e: [38],
            l: 15,
            d: 2
        }, {
            h: 14,
            s: 1,
            l: 48,
            d: 2
        }, {
            h: 37,
            s: 48,
            l: 49
        }, {
            h: 148,
            s: 1,
            l: 6351,
            d: 2
        }, {
            h: 88,
            s: 1,
            l: 160,
            d: 2
        }, {
            h: 15,
            s: 16,
            l: 704
        }, {
            h: 25,
            s: 26,
            l: 854
        }, {
            h: 25,
            s: 32,
            l: 55915
        }, {
            h: 37,
            s: 40,
            l: 1247
        }, {
            h: 25,
            s: -119711,
            l: 53248
        }, {
            h: 25,
            s: -119763,
            l: 52
        }, {
            h: 25,
            s: -119815,
            l: 52
        }, {
            h: 25,
            s: -119867,
            e: [1, 4, 5, 7, 8, 11, 12, 17],
            l: 52
        }, {
            h: 25,
            s: -119919,
            l: 52
        }, {
            h: 24,
            s: -119971,
            e: [2, 7, 8, 17],
            l: 52
        }, {
            h: 24,
            s: -120023,
            e: [2, 7, 13, 15, 16, 17],
            l: 52
        }, {
            h: 25,
            s: -120075,
            l: 52
        }, {
            h: 25,
            s: -120127,
            l: 52
        }, {
            h: 25,
            s: -120179,
            l: 52
        }, {
            h: 25,
            s: -120231,
            l: 52
        }, {
            h: 25,
            s: -120283,
            l: 52
        }, {
            h: 25,
            s: -120335,
            l: 52
        }, {
            h: 24,
            s: -119543,
            e: [17],
            l: 56
        }, {
            h: 24,
            s: -119601,
            e: [17],
            l: 58
        }, {
            h: 24,
            s: -119659,
            e: [17],
            l: 58
        }, {
            h: 24,
            s: -119717,
            e: [17],
            l: 58
        }, {
            h: 24,
            s: -119775,
            e: [17],
            l: 58
        }]
          , l = i("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3")
          , f = i("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7")
          , h = i("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", (function(e) {
            if (e.length % 4 !== 0)
                throw new Error("bad data");
            for (var r = [], t = 0; t < e.length; t += 4)
                r.push(parseInt(e.substring(t, t + 4), 16));
            return r
        }
        ))
          , d = a("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
        function p(e) {
            if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59)
                return e.toLowerCase();
            var r, t = (0,
            n.XL)(e);
            r = t.map((function(e) {
                if (u.indexOf(e) >= 0)
                    return [];
                if (e >= 65024 && e <= 65039)
                    return [];
                var r = function(e) {
                    var r = o(e, c);
                    if (r)
                        return [e + r.s];
                    var t = l[e];
                    if (t)
                        return t;
                    var n = f[e];
                    return n ? [e + n[0]] : h[e] || null
                }(e);
                return r || [e]
            }
            )),
            t = r.reduce((function(e, r) {
                return r.forEach((function(r) {
                    e.push(r)
                }
                )),
                e
            }
            ), []),
            (t = (0,
            n.XL)((0,
            n.uu)(t), n.Uj.NFKC)).forEach((function(e) {
                if (o(e, d))
                    throw new Error("STRINGPREP_CONTAINS_PROHIBITED")
            }
            )),
            t.forEach((function(e) {
                if (o(e, s))
                    throw new Error("STRINGPREP_CONTAINS_UNASSIGNED")
            }
            ));
            var i = (0,
            n.uu)(t);
            if ("-" === i.substring(0, 1) || "--" === i.substring(2, 4) || "-" === i.substring(i.length - 1))
                throw new Error("invalid hyphen");
            return i
        }
    },
    52185: function(e, r, t) {
        t.r(r),
        t.d(r, {
            UnicodeNormalizationForm: function() {
                return a.Uj
            },
            Utf8ErrorFuncs: function() {
                return a.te
            },
            Utf8ErrorReason: function() {
                return a.Uw
            },
            _toEscapedUtf8String: function() {
                return a.U$
            },
            formatBytes32String: function() {
                return n.s
            },
            nameprep: function() {
                return i.Ll
            },
            parseBytes32String: function() {
                return n.F
            },
            toUtf8Bytes: function() {
                return a.Y0
            },
            toUtf8CodePoints: function() {
                return a.XL
            },
            toUtf8String: function() {
                return a.ZN
            }
        });
        var n = t(18825)
          , i = t(4491)
          , a = t(91953)
    },
    91953: function(e, r, t) {
        t.d(r, {
            Uj: function() {
                return n
            },
            te: function() {
                return u
            },
            Uw: function() {
                return i
            },
            U$: function() {
                return h
            },
            uu: function() {
                return d
            },
            Y0: function() {
                return l
            },
            XL: function() {
                return g
            },
            ZN: function() {
                return p
            }
        });
        var n, i, a = t(52009), o = new (t(2735).Logger)("strings/5.7.0");
        function s(e, r, t, n, a) {
            if (e === i.BAD_PREFIX || e === i.UNEXPECTED_CONTINUE) {
                for (var o = 0, s = r + 1; s < t.length && t[s] >> 6 === 2; s++)
                    o++;
                return o
            }
            return e === i.OVERRUN ? t.length - r - 1 : 0
        }
        !function(e) {
            e.current = "",
            e.NFC = "NFC",
            e.NFD = "NFD",
            e.NFKC = "NFKC",
            e.NFKD = "NFKD"
        }(n || (n = {})),
        function(e) {
            e.UNEXPECTED_CONTINUE = "unexpected continuation byte",
            e.BAD_PREFIX = "bad codepoint prefix",
            e.OVERRUN = "string overrun",
            e.MISSING_CONTINUE = "missing continuation byte",
            e.OUT_OF_RANGE = "out of UTF-8 range",
            e.UTF16_SURROGATE = "UTF-16 surrogate",
            e.OVERLONG = "overlong representation"
        }(i || (i = {}));
        var u = Object.freeze({
            error: function(e, r, t, n, i) {
                return o.throwArgumentError("invalid codepoint at offset ".concat(r, "; ").concat(e), "bytes", t)
            },
            ignore: s,
            replace: function(e, r, t, n, a) {
                return e === i.OVERLONG ? (n.push(a),
                0) : (n.push(65533),
                s(e, r, t))
            }
        });
        function c(e, r) {
            null == r && (r = u.error),
            e = (0,
            a.arrayify)(e);
            for (var t = [], n = 0; n < e.length; ) {
                var o = e[n++];
                if (o >> 7 !== 0) {
                    var s = null
                      , c = null;
                    if (192 === (224 & o))
                        s = 1,
                        c = 127;
                    else if (224 === (240 & o))
                        s = 2,
                        c = 2047;
                    else {
                        if (240 !== (248 & o)) {
                            n += r(128 === (192 & o) ? i.UNEXPECTED_CONTINUE : i.BAD_PREFIX, n - 1, e, t);
                            continue
                        }
                        s = 3,
                        c = 65535
                    }
                    if (n - 1 + s >= e.length)
                        n += r(i.OVERRUN, n - 1, e, t);
                    else {
                        for (var l = o & (1 << 8 - s - 1) - 1, f = 0; f < s; f++) {
                            var h = e[n];
                            if (128 != (192 & h)) {
                                n += r(i.MISSING_CONTINUE, n, e, t),
                                l = null;
                                break
                            }
                            l = l << 6 | 63 & h,
                            n++
                        }
                        null !== l && (l > 1114111 ? n += r(i.OUT_OF_RANGE, n - 1 - s, e, t, l) : l >= 55296 && l <= 57343 ? n += r(i.UTF16_SURROGATE, n - 1 - s, e, t, l) : l <= c ? n += r(i.OVERLONG, n - 1 - s, e, t, l) : t.push(l))
                    }
                } else
                    t.push(o)
            }
            return t
        }
        function l(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.current;
            r != n.current && (o.checkNormalize(),
            e = e.normalize(r));
            for (var t = [], i = 0; i < e.length; i++) {
                var s = e.charCodeAt(i);
                if (s < 128)
                    t.push(s);
                else if (s < 2048)
                    t.push(s >> 6 | 192),
                    t.push(63 & s | 128);
                else if (55296 == (64512 & s)) {
                    i++;
                    var u = e.charCodeAt(i);
                    if (i >= e.length || 56320 !== (64512 & u))
                        throw new Error("invalid utf-8 string");
                    var c = 65536 + ((1023 & s) << 10) + (1023 & u);
                    t.push(c >> 18 | 240),
                    t.push(c >> 12 & 63 | 128),
                    t.push(c >> 6 & 63 | 128),
                    t.push(63 & c | 128)
                } else
                    t.push(s >> 12 | 224),
                    t.push(s >> 6 & 63 | 128),
                    t.push(63 & s | 128)
            }
            return (0,
            a.arrayify)(t)
        }
        function f(e) {
            var r = "0000" + e.toString(16);
            return "\\u" + r.substring(r.length - 4)
        }
        function h(e, r) {
            return '"' + c(e, r).map((function(e) {
                if (e < 256) {
                    switch (e) {
                    case 8:
                        return "\\b";
                    case 9:
                        return "\\t";
                    case 10:
                        return "\\n";
                    case 13:
                        return "\\r";
                    case 34:
                        return '\\"';
                    case 92:
                        return "\\\\"
                    }
                    if (e >= 32 && e < 127)
                        return String.fromCharCode(e)
                }
                return e <= 65535 ? f(e) : f(55296 + ((e -= 65536) >> 10 & 1023)) + f(56320 + (1023 & e))
            }
            )).join("") + '"'
        }
        function d(e) {
            return e.map((function(e) {
                return e <= 65535 ? String.fromCharCode(e) : (e -= 65536,
                String.fromCharCode(55296 + (e >> 10 & 1023), 56320 + (1023 & e)))
            }
            )).join("")
        }
        function p(e, r) {
            return d(c(e, r))
        }
        function g(e) {
            return c(l(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.current))
        }
    },
    65958: function(e, r, t) {
        t.r(r),
        t.d(r, {
            TransactionTypes: function() {
                return n
            },
            accessListify: function() {
                return A
            },
            computeAddress: function() {
                return y
            },
            parse: function() {
                return R
            },
            recoverAddress: function() {
                return b
            },
            serialize: function() {
                return P
            }
        });
        var n, i = t(28552), a = t(19560), o = t(52009), s = t(6321), u = t(11291), c = t(54812), l = t(80807), f = t(64760), h = t(2735), d = new h.Logger("transactions/5.7.0");
        function p(e) {
            return "0x" === e ? null : (0,
            i.getAddress)(e)
        }
        function g(e) {
            return "0x" === e ? s._Y : a.O$.from(e)
        }
        !function(e) {
            e[e.legacy = 0] = "legacy",
            e[e.eip2930 = 1] = "eip2930",
            e[e.eip1559 = 2] = "eip1559"
        }(n || (n = {}));
        var v = [{
            name: "nonce",
            maxLength: 32,
            numeric: !0
        }, {
            name: "gasPrice",
            maxLength: 32,
            numeric: !0
        }, {
            name: "gasLimit",
            maxLength: 32,
            numeric: !0
        }, {
            name: "to",
            length: 20
        }, {
            name: "value",
            maxLength: 32,
            numeric: !0
        }, {
            name: "data"
        }]
          , m = {
            chainId: !0,
            data: !0,
            gasLimit: !0,
            gasPrice: !0,
            nonce: !0,
            to: !0,
            type: !0,
            value: !0
        };
        function y(e) {
            var r = (0,
            f.computePublicKey)(e);
            return (0,
            i.getAddress)((0,
            o.hexDataSlice)((0,
            u.keccak256)((0,
            o.hexDataSlice)(r, 1)), 12))
        }
        function b(e, r) {
            return y((0,
            f.recoverPublicKey)((0,
            o.arrayify)(e), r))
        }
        function w(e, r) {
            var t = (0,
            o.stripZeros)(a.O$.from(e).toHexString());
            return t.length > 32 && d.throwArgumentError("invalid length for " + r, "transaction:" + r, e),
            t
        }
        function k(e, r) {
            return {
                address: (0,
                i.getAddress)(e),
                storageKeys: (r || []).map((function(r, t) {
                    return 32 !== (0,
                    o.hexDataLength)(r) && d.throwArgumentError("invalid access list storageKey", "accessList[".concat(e, ":").concat(t, "]"), r),
                    r.toLowerCase()
                }
                ))
            }
        }
        function A(e) {
            if (Array.isArray(e))
                return e.map((function(e, r) {
                    return Array.isArray(e) ? (e.length > 2 && d.throwArgumentError("access list expected to be [ address, storageKeys[] ]", "value[".concat(r, "]"), e),
                    k(e[0], e[1])) : k(e.address, e.storageKeys)
                }
                ));
            var r = Object.keys(e).map((function(r) {
                var t = e[r].reduce((function(e, r) {
                    return e[r] = !0,
                    e
                }
                ), {});
                return k(r, Object.keys(t).sort())
            }
            ));
            return r.sort((function(e, r) {
                return e.address.localeCompare(r.address)
            }
            )),
            r
        }
        function E(e) {
            return A(e).map((function(e) {
                return [e.address, e.storageKeys]
            }
            ))
        }
        function x(e, r) {
            if (null != e.gasPrice) {
                var t = a.O$.from(e.gasPrice)
                  , n = a.O$.from(e.maxFeePerGas || 0);
                t.eq(n) || d.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                    gasPrice: t,
                    maxFeePerGas: n
                })
            }
            var s = [w(e.chainId || 0, "chainId"), w(e.nonce || 0, "nonce"), w(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), w(e.maxFeePerGas || 0, "maxFeePerGas"), w(e.gasLimit || 0, "gasLimit"), null != e.to ? (0,
            i.getAddress)(e.to) : "0x", w(e.value || 0, "value"), e.data || "0x", E(e.accessList || [])];
            if (r) {
                var u = (0,
                o.splitSignature)(r);
                s.push(w(u.recoveryParam, "recoveryParam")),
                s.push((0,
                o.stripZeros)(u.r)),
                s.push((0,
                o.stripZeros)(u.s))
            }
            return (0,
            o.hexConcat)(["0x02", l.encode(s)])
        }
        function S(e, r) {
            var t = [w(e.chainId || 0, "chainId"), w(e.nonce || 0, "nonce"), w(e.gasPrice || 0, "gasPrice"), w(e.gasLimit || 0, "gasLimit"), null != e.to ? (0,
            i.getAddress)(e.to) : "0x", w(e.value || 0, "value"), e.data || "0x", E(e.accessList || [])];
            if (r) {
                var n = (0,
                o.splitSignature)(r);
                t.push(w(n.recoveryParam, "recoveryParam")),
                t.push((0,
                o.stripZeros)(n.r)),
                t.push((0,
                o.stripZeros)(n.s))
            }
            return (0,
            o.hexConcat)(["0x01", l.encode(t)])
        }
        function P(e, r) {
            if (null == e.type || 0 === e.type)
                return null != e.accessList && d.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
                function(e, r) {
                    (0,
                    c.checkProperties)(e, m);
                    var t = [];
                    v.forEach((function(r) {
                        var n = e[r.name] || []
                          , i = {};
                        r.numeric && (i.hexPad = "left"),
                        n = (0,
                        o.arrayify)((0,
                        o.hexlify)(n, i)),
                        r.length && n.length !== r.length && n.length > 0 && d.throwArgumentError("invalid length for " + r.name, "transaction:" + r.name, n),
                        r.maxLength && (n = (0,
                        o.stripZeros)(n)).length > r.maxLength && d.throwArgumentError("invalid length for " + r.name, "transaction:" + r.name, n),
                        t.push((0,
                        o.hexlify)(n))
                    }
                    ));
                    var n = 0;
                    if (null != e.chainId ? "number" !== typeof (n = e.chainId) && d.throwArgumentError("invalid transaction.chainId", "transaction", e) : r && !(0,
                    o.isBytesLike)(r) && r.v > 28 && (n = Math.floor((r.v - 35) / 2)),
                    0 !== n && (t.push((0,
                    o.hexlify)(n)),
                    t.push("0x"),
                    t.push("0x")),
                    !r)
                        return l.encode(t);
                    var i = (0,
                    o.splitSignature)(r)
                      , a = 27 + i.recoveryParam;
                    return 0 !== n ? (t.pop(),
                    t.pop(),
                    t.pop(),
                    a += 2 * n + 8,
                    i.v > 28 && i.v !== a && d.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", r)) : i.v !== a && d.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", r),
                    t.push((0,
                    o.hexlify)(a)),
                    t.push((0,
                    o.stripZeros)((0,
                    o.arrayify)(i.r))),
                    t.push((0,
                    o.stripZeros)((0,
                    o.arrayify)(i.s))),
                    l.encode(t)
                }(e, r);
            switch (e.type) {
            case 1:
                return S(e, r);
            case 2:
                return x(e, r)
            }
            return d.throwError("unsupported transaction type: ".concat(e.type), h.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "serializeTransaction",
                transactionType: e.type
            })
        }
        function N(e, r, t) {
            try {
                var n = g(r[0]).toNumber();
                if (0 !== n && 1 !== n)
                    throw new Error("bad recid");
                e.v = n
            } catch (a) {
                d.throwArgumentError("invalid v for transaction type: 1", "v", r[0])
            }
            e.r = (0,
            o.hexZeroPad)(r[1], 32),
            e.s = (0,
            o.hexZeroPad)(r[2], 32);
            try {
                var i = (0,
                u.keccak256)(t(e));
                e.from = b(i, {
                    r: e.r,
                    s: e.s,
                    recoveryParam: e.v
                })
            } catch (a) {}
        }
        function R(e) {
            var r = (0,
            o.arrayify)(e);
            if (r[0] > 127)
                return function(e) {
                    var r = l.decode(e);
                    9 !== r.length && 6 !== r.length && d.throwArgumentError("invalid raw transaction", "rawTransaction", e);
                    var t = {
                        nonce: g(r[0]).toNumber(),
                        gasPrice: g(r[1]),
                        gasLimit: g(r[2]),
                        to: p(r[3]),
                        value: g(r[4]),
                        data: r[5],
                        chainId: 0
                    };
                    if (6 === r.length)
                        return t;
                    try {
                        t.v = a.O$.from(r[6]).toNumber()
                    } catch (c) {
                        return t
                    }
                    if (t.r = (0,
                    o.hexZeroPad)(r[7], 32),
                    t.s = (0,
                    o.hexZeroPad)(r[8], 32),
                    a.O$.from(t.r).isZero() && a.O$.from(t.s).isZero())
                        t.chainId = t.v,
                        t.v = 0;
                    else {
                        t.chainId = Math.floor((t.v - 35) / 2),
                        t.chainId < 0 && (t.chainId = 0);
                        var n = t.v - 27
                          , i = r.slice(0, 6);
                        0 !== t.chainId && (i.push((0,
                        o.hexlify)(t.chainId)),
                        i.push("0x"),
                        i.push("0x"),
                        n -= 2 * t.chainId + 8);
                        var s = (0,
                        u.keccak256)(l.encode(i));
                        try {
                            t.from = b(s, {
                                r: (0,
                                o.hexlify)(t.r),
                                s: (0,
                                o.hexlify)(t.s),
                                recoveryParam: n
                            })
                        } catch (c) {}
                        t.hash = (0,
                        u.keccak256)(e)
                    }
                    return t.type = null,
                    t
                }(r);
            switch (r[0]) {
            case 1:
                return function(e) {
                    var r = l.decode(e.slice(1));
                    8 !== r.length && 11 !== r.length && d.throwArgumentError("invalid component count for transaction type: 1", "payload", (0,
                    o.hexlify)(e));
                    var t = {
                        type: 1,
                        chainId: g(r[0]).toNumber(),
                        nonce: g(r[1]).toNumber(),
                        gasPrice: g(r[2]),
                        gasLimit: g(r[3]),
                        to: p(r[4]),
                        value: g(r[5]),
                        data: r[6],
                        accessList: A(r[7])
                    };
                    return 8 === r.length || (t.hash = (0,
                    u.keccak256)(e),
                    N(t, r.slice(8), S)),
                    t
                }(r);
            case 2:
                return function(e) {
                    var r = l.decode(e.slice(1));
                    9 !== r.length && 12 !== r.length && d.throwArgumentError("invalid component count for transaction type: 2", "payload", (0,
                    o.hexlify)(e));
                    var t = g(r[2])
                      , n = g(r[3])
                      , i = {
                        type: 2,
                        chainId: g(r[0]).toNumber(),
                        nonce: g(r[1]).toNumber(),
                        maxPriorityFeePerGas: t,
                        maxFeePerGas: n,
                        gasPrice: null,
                        gasLimit: g(r[4]),
                        to: p(r[5]),
                        value: g(r[6]),
                        data: r[7],
                        accessList: A(r[8])
                    };
                    return 9 === r.length || (i.hash = (0,
                    u.keccak256)(e),
                    N(i, r.slice(9), x)),
                    i
                }(r)
            }
            return d.throwError("unsupported transaction type: ".concat(r[0]), h.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "parseTransaction",
                transactionType: r[0]
            })
        }
    },
    18383: function(e, r, t) {
        t.r(r),
        t.d(r, {
            commify: function() {
                return o
            },
            formatEther: function() {
                return c
            },
            formatUnits: function() {
                return s
            },
            parseEther: function() {
                return l
            },
            parseUnits: function() {
                return u
            }
        });
        var n = t(57042)
          , i = new (t(2735).Logger)("units/5.7.0")
          , a = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
        function o(e) {
            var r = String(e).split(".");
            (r.length > 2 || !r[0].match(/^-?[0-9]*$/) || r[1] && !r[1].match(/^[0-9]*$/) || "." === e || "-." === e) && i.throwArgumentError("invalid value", "value", e);
            var t = r[0]
              , n = "";
            for ("-" === t.substring(0, 1) && (n = "-",
            t = t.substring(1)); "0" === t.substring(0, 1); )
                t = t.substring(1);
            "" === t && (t = "0");
            var a = "";
            for (2 === r.length && (a = "." + (r[1] || "0")); a.length > 2 && "0" === a[a.length - 1]; )
                a = a.substring(0, a.length - 1);
            for (var o = []; t.length; ) {
                if (t.length <= 3) {
                    o.unshift(t);
                    break
                }
                var s = t.length - 3;
                o.unshift(t.substring(s)),
                t = t.substring(0, s)
            }
            return n + o.join(",") + a
        }
        function s(e, r) {
            if ("string" === typeof r) {
                var t = a.indexOf(r);
                -1 !== t && (r = 3 * t)
            }
            return (0,
            n.S5)(e, null != r ? r : 18)
        }
        function u(e, r) {
            if ("string" !== typeof e && i.throwArgumentError("value must be a string", "value", e),
            "string" === typeof r) {
                var t = a.indexOf(r);
                -1 !== t && (r = 3 * t)
            }
            return (0,
            n.Ox)(e, null != r ? r : 18)
        }
        function c(e) {
            return s(e, 18)
        }
        function l(e) {
            return u(e, 18)
        }
    },
    56204: function(e, r, t) {
        t.r(r),
        t.d(r, {
            Wallet: function() {
                return P
            },
            verifyMessage: function() {
                return N
            },
            verifyTypedData: function() {
                return R
            }
        });
        var n = t(74165)
          , i = t(15671)
          , a = t(43144)
          , o = t(97326)
          , s = t(60136)
          , u = t(29388)
          , c = t(28552)
          , l = t(15157)
          , f = t(72388)
          , h = t(52009)
          , d = t(88836)
          , p = t(26454)
          , g = t(42989)
          , v = t(11291)
          , m = t(54812)
          , y = t(75722)
          , b = t(64760)
          , w = t(2691)
          , k = t(56216)
          , A = t(65958)
          , E = t(2735)
          , x = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , S = new E.Logger("wallet/5.7.0");
        var P = function(e) {
            (0,
            s.Z)(t, e);
            var r = (0,
            u.Z)(t);
            function t(e, n) {
                var a, s;
                if ((0,
                i.Z)(this, t),
                a = r.call(this),
                null != (s = e) && (0,
                h.isHexString)(s.privateKey, 32) && null != s.address) {
                    var u = new b.SigningKey(e.privateKey);
                    if ((0,
                    m.defineReadOnly)((0,
                    o.Z)(a), "_signingKey", (function() {
                        return u
                    }
                    )),
                    (0,
                    m.defineReadOnly)((0,
                    o.Z)(a), "address", (0,
                    A.computeAddress)(a.publicKey)),
                    a.address !== (0,
                    c.getAddress)(e.address) && S.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"),
                    function(e) {
                        var r = e.mnemonic;
                        return r && r.phrase
                    }(e)) {
                        var f = e.mnemonic;
                        (0,
                        m.defineReadOnly)((0,
                        o.Z)(a), "_mnemonic", (function() {
                            return {
                                phrase: f.phrase,
                                path: f.path || g.defaultPath,
                                locale: f.locale || "en"
                            }
                        }
                        ));
                        var d = a.mnemonic
                          , p = g.HDNode.fromMnemonic(d.phrase, null, d.locale).derivePath(d.path);
                        (0,
                        A.computeAddress)(p.privateKey) !== a.address && S.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]")
                    } else
                        (0,
                        m.defineReadOnly)((0,
                        o.Z)(a), "_mnemonic", (function() {
                            return null
                        }
                        ))
                } else {
                    if (b.SigningKey.isSigningKey(e))
                        "secp256k1" !== e.curve && S.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"),
                        (0,
                        m.defineReadOnly)((0,
                        o.Z)(a), "_signingKey", (function() {
                            return e
                        }
                        ));
                    else {
                        "string" === typeof e && e.match(/^[0-9a-f]*$/i) && 64 === e.length && (e = "0x" + e);
                        var v = new b.SigningKey(e);
                        (0,
                        m.defineReadOnly)((0,
                        o.Z)(a), "_signingKey", (function() {
                            return v
                        }
                        ))
                    }
                    (0,
                    m.defineReadOnly)((0,
                    o.Z)(a), "_mnemonic", (function() {
                        return null
                    }
                    )),
                    (0,
                    m.defineReadOnly)((0,
                    o.Z)(a), "address", (0,
                    A.computeAddress)(a.publicKey))
                }
                return n && !l.zt.isProvider(n) && S.throwArgumentError("invalid provider", "provider", n),
                (0,
                m.defineReadOnly)((0,
                o.Z)(a), "provider", n || null),
                a
            }
            return (0,
            a.Z)(t, [{
                key: "mnemonic",
                get: function() {
                    return this._mnemonic()
                }
            }, {
                key: "privateKey",
                get: function() {
                    return this._signingKey().privateKey
                }
            }, {
                key: "publicKey",
                get: function() {
                    return this._signingKey().publicKey
                }
            }, {
                key: "getAddress",
                value: function() {
                    return Promise.resolve(this.address)
                }
            }, {
                key: "connect",
                value: function(e) {
                    return new t(this,e)
                }
            }, {
                key: "signTransaction",
                value: function(e) {
                    var r = this;
                    return (0,
                    m.resolveProperties)(e).then((function(t) {
                        null != t.from && ((0,
                        c.getAddress)(t.from) !== r.address && S.throwArgumentError("transaction from address mismatch", "transaction.from", e.from),
                        delete t.from);
                        var n = r._signingKey().signDigest((0,
                        v.keccak256)((0,
                        A.serialize)(t)));
                        return (0,
                        A.serialize)(t, n)
                    }
                    ))
                }
            }, {
                key: "signMessage",
                value: function(e) {
                    return x(this, void 0, void 0, (0,
                    n.Z)().mark((function r() {
                        return (0,
                        n.Z)().wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", (0,
                                    h.joinSignature)(this._signingKey().signDigest((0,
                                    d.r)(e))));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r, this)
                    }
                    )))
                }
            }, {
                key: "_signTypedData",
                value: function(e, r, t) {
                    return x(this, void 0, void 0, (0,
                    n.Z)().mark((function i() {
                        var a, o = this;
                        return (0,
                        n.Z)().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    p.E.resolveNames(e, r, t, (function(e) {
                                        return null == o.provider && S.throwError("cannot resolve ENS names without a provider", E.Logger.errors.UNSUPPORTED_OPERATION, {
                                            operation: "resolveName",
                                            value: e
                                        }),
                                        o.provider.resolveName(e)
                                    }
                                    ));
                                case 2:
                                    return a = n.sent,
                                    n.abrupt("return", (0,
                                    h.joinSignature)(this._signingKey().signDigest(p.E.hash(a.domain, r, a.value))));
                                case 4:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), i, this)
                    }
                    )))
                }
            }, {
                key: "encrypt",
                value: function(e, r, t) {
                    if ("function" !== typeof r || t || (t = r,
                    r = {}),
                    t && "function" !== typeof t)
                        throw new Error("invalid callback");
                    return r || (r = {}),
                    (0,
                    w.HI)(this, e, r, t)
                }
            }], [{
                key: "createRandom",
                value: function(e) {
                    var r = (0,
                    y.O)(16);
                    e || (e = {}),
                    e.extraEntropy && (r = (0,
                    h.arrayify)((0,
                    h.hexDataSlice)((0,
                    v.keccak256)((0,
                    h.concat)([r, e.extraEntropy])), 0, 16)));
                    var n = (0,
                    g.entropyToMnemonic)(r, e.locale);
                    return t.fromMnemonic(n, e.path, e.locale)
                }
            }, {
                key: "fromEncryptedJson",
                value: function(e, r, n) {
                    return (0,
                    k.decryptJsonWallet)(e, r, n).then((function(e) {
                        return new t(e)
                    }
                    ))
                }
            }, {
                key: "fromEncryptedJsonSync",
                value: function(e, r) {
                    return new t((0,
                    k.decryptJsonWalletSync)(e, r))
                }
            }, {
                key: "fromMnemonic",
                value: function(e, r, n) {
                    return r || (r = g.defaultPath),
                    new t(g.HDNode.fromMnemonic(e, null, n).derivePath(r))
                }
            }]),
            t
        }(f.E);
        function N(e, r) {
            return (0,
            A.recoverAddress)((0,
            d.r)(e), r)
        }
        function R(e, r, t, n) {
            return (0,
            A.recoverAddress)(p.E.hash(e, r, t), n)
        }
    },
    28786: function(e, r, t) {
        t.r(r),
        t.d(r, {
            _fetchData: function() {
                return g
            },
            fetchJson: function() {
                return v
            },
            poll: function() {
                return m
            }
        });
        var n = t(74165)
          , i = t(48853)
          , a = t(52009)
          , o = t(54812)
          , s = t(91953)
          , u = t(2735)
          , c = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        };
        function l(e, r) {
            return c(this, void 0, void 0, (0,
            n.Z)().mark((function t() {
                var i, o, s, u, c;
                return (0,
                n.Z)().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return null == r && (r = {}),
                            i = {
                                method: r.method || "GET",
                                headers: r.headers || {},
                                body: r.body || void 0
                            },
                            !0 !== r.skipFetchSetup && (i.mode = "cors",
                            i.cache = "no-cache",
                            i.credentials = "same-origin",
                            i.redirect = "follow",
                            i.referrer = "client"),
                            null != r.fetchOptions && ((o = r.fetchOptions).mode && (i.mode = o.mode),
                            o.cache && (i.cache = o.cache),
                            o.credentials && (i.credentials = o.credentials),
                            o.redirect && (i.redirect = o.redirect),
                            o.referrer && (i.referrer = o.referrer)),
                            t.next = 7,
                            fetch(e, i);
                        case 7:
                            return s = t.sent,
                            t.next = 10,
                            s.arrayBuffer();
                        case 10:
                            return u = t.sent,
                            c = {},
                            s.headers.forEach ? s.headers.forEach((function(e, r) {
                                c[r.toLowerCase()] = e
                            }
                            )) : s.headers.keys().forEach((function(e) {
                                c[e.toLowerCase()] = s.headers.get(e)
                            }
                            )),
                            t.abrupt("return", {
                                headers: c,
                                statusCode: s.status,
                                statusMessage: s.statusText,
                                body: (0,
                                a.arrayify)(new Uint8Array(u))
                            });
                        case 14:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))
        }
        var f = function(e, r, t, n) {
            return new (t || (t = Promise))((function(i, a) {
                function o(e) {
                    try {
                        u(n.next(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function s(e) {
                    try {
                        u(n.throw(e))
                    } catch (r) {
                        a(r)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? i(e.value) : (r = e.value,
                    r instanceof t ? r : new t((function(e) {
                        e(r)
                    }
                    ))).then(o, s)
                }
                u((n = n.apply(e, r || [])).next())
            }
            ))
        }
          , h = new u.Logger("web/5.7.1");
        function d(e) {
            return new Promise((function(r) {
                setTimeout(r, e)
            }
            ))
        }
        function p(e, r) {
            if (null == e)
                return null;
            if ("string" === typeof e)
                return e;
            if ((0,
            a.isBytesLike)(e)) {
                if (r && ("text" === r.split("/")[0] || "application/json" === r.split(";")[0].trim()))
                    try {
                        return (0,
                        s.ZN)(e)
                    } catch (t) {}
                return (0,
                a.hexlify)(e)
            }
            return e
        }
        function g(e, r, t) {
            var a = "object" === typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
            h.assertArgument(a > 0 && a % 1 === 0, "invalid connection throttle limit", "connection.throttleLimit", a);
            var c = "object" === typeof e ? e.throttleCallback : null
              , g = "object" === typeof e && "number" === typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
            h.assertArgument(g > 0 && g % 1 === 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", g);
            var v = "object" === typeof e && !!e.errorPassThrough
              , m = {}
              , y = null
              , b = {
                method: "GET"
            }
              , w = !1
              , k = 12e4;
            if ("string" === typeof e)
                y = e;
            else if ("object" === typeof e) {
                if (null != e && null != e.url || h.throwArgumentError("missing URL", "connection.url", e),
                y = e.url,
                "number" === typeof e.timeout && e.timeout > 0 && (k = e.timeout),
                e.headers)
                    for (var A in e.headers)
                        m[A.toLowerCase()] = {
                            key: A,
                            value: String(e.headers[A])
                        },
                        ["if-none-match", "if-modified-since"].indexOf(A.toLowerCase()) >= 0 && (w = !0);
                if (b.allowGzip = !!e.allowGzip,
                null != e.user && null != e.password) {
                    "https:" !== y.substring(0, 6) && !0 !== e.allowInsecureAuthentication && h.throwError("basic authentication requires a secure https url", u.Logger.errors.INVALID_ARGUMENT, {
                        argument: "url",
                        url: y,
                        user: e.user,
                        password: "[REDACTED]"
                    });
                    var E = e.user + ":" + e.password;
                    m.authorization = {
                        key: "Authorization",
                        value: "Basic " + (0,
                        i.c)((0,
                        s.Y0)(E))
                    }
                }
                null != e.skipFetchSetup && (b.skipFetchSetup = !!e.skipFetchSetup),
                null != e.fetchOptions && (b.fetchOptions = (0,
                o.shallowCopy)(e.fetchOptions))
            }
            var x, S = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$","i"), P = y ? y.match(S) : null;
            if (P)
                try {
                    var N = {
                        statusCode: 200,
                        statusMessage: "OK",
                        headers: {
                            "content-type": P[1] || "text/plain"
                        },
                        body: P[2] ? (0,
                        i.J)(P[3]) : (x = P[3],
                        (0,
                        s.Y0)(x.replace(/%([0-9a-f][0-9a-f])/gi, (function(e, r) {
                            return String.fromCharCode(parseInt(r, 16))
                        }
                        ))))
                    }
                      , R = N.body;
                    return t && (R = t(N.body, N)),
                    Promise.resolve(R)
                } catch (T) {
                    h.throwError("processing response error", u.Logger.errors.SERVER_ERROR, {
                        body: p(P[1], P[2]),
                        error: T,
                        requestBody: null,
                        requestMethod: "GET",
                        url: y
                    })
                }
            r && (b.method = "POST",
            b.body = r,
            null == m["content-type"] && (m["content-type"] = {
                key: "Content-Type",
                value: "application/octet-stream"
            }),
            null == m["content-length"] && (m["content-length"] = {
                key: "Content-Length",
                value: String(r.length)
            }));
            var C = {};
            Object.keys(m).forEach((function(e) {
                var r = m[e];
                C[r.key] = r.value
            }
            )),
            b.headers = C;
            var O = function() {
                var e = null;
                return {
                    promise: new Promise((function(r, t) {
                        k && (e = setTimeout((function() {
                            null != e && (e = null,
                            t(h.makeError("timeout", u.Logger.errors.TIMEOUT, {
                                requestBody: p(b.body, C["content-type"]),
                                requestMethod: b.method,
                                timeout: k,
                                url: y
                            })))
                        }
                        ), k))
                    }
                    )),
                    cancel: function() {
                        null != e && (clearTimeout(e),
                        e = null)
                    }
                }
            }()
              , _ = function() {
                return f(this, void 0, void 0, (0,
                n.Z)().mark((function e() {
                    var r, i, o, s, f, m, k, A, E, x;
                    return (0,
                    n.Z)().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                r = 0;
                            case 1:
                                if (!(r < a)) {
                                    e.next = 65;
                                    break
                                }
                                return i = null,
                                e.prev = 3,
                                e.next = 6,
                                l(y, b);
                            case 6:
                                if (i = e.sent,
                                !(r < a)) {
                                    e.next = 28;
                                    break
                                }
                                if (301 !== i.statusCode && 302 !== i.statusCode) {
                                    e.next = 15;
                                    break
                                }
                                if (o = i.headers.location || "",
                                "GET" !== b.method || !o.match(/^https:/)) {
                                    e.next = 13;
                                    break
                                }
                                return y = i.headers.location,
                                e.abrupt("continue", 62);
                            case 13:
                                e.next = 28;
                                break;
                            case 15:
                                if (429 !== i.statusCode) {
                                    e.next = 28;
                                    break
                                }
                                if (s = !0,
                                !c) {
                                    e.next = 21;
                                    break
                                }
                                return e.next = 20,
                                c(r, y);
                            case 20:
                                s = e.sent;
                            case 21:
                                if (!s) {
                                    e.next = 28;
                                    break
                                }
                                return f = 0,
                                m = i.headers["retry-after"],
                                f = "string" === typeof m && m.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(m) : g * parseInt(String(Math.random() * Math.pow(2, r))),
                                e.next = 27,
                                d(f);
                            case 27:
                                return e.abrupt("continue", 62);
                            case 28:
                                e.next = 34;
                                break;
                            case 30:
                                e.prev = 30,
                                e.t0 = e.catch(3),
                                null == (i = e.t0.response) && (O.cancel(),
                                h.throwError("missing response", u.Logger.errors.SERVER_ERROR, {
                                    requestBody: p(b.body, C["content-type"]),
                                    requestMethod: b.method,
                                    serverError: e.t0,
                                    url: y
                                }));
                            case 34:
                                if (k = i.body,
                                w && 304 === i.statusCode ? k = null : !v && (i.statusCode < 200 || i.statusCode >= 300) && (O.cancel(),
                                h.throwError("bad response", u.Logger.errors.SERVER_ERROR, {
                                    status: i.statusCode,
                                    headers: i.headers,
                                    body: p(k, i.headers ? i.headers["content-type"] : null),
                                    requestBody: p(b.body, C["content-type"]),
                                    requestMethod: b.method,
                                    url: y
                                })),
                                !t) {
                                    e.next = 60;
                                    break
                                }
                                return e.prev = 37,
                                e.next = 40,
                                t(k, i);
                            case 40:
                                return A = e.sent,
                                O.cancel(),
                                e.abrupt("return", A);
                            case 45:
                                if (e.prev = 45,
                                e.t1 = e.catch(37),
                                !(e.t1.throttleRetry && r < a)) {
                                    e.next = 58;
                                    break
                                }
                                if (E = !0,
                                !c) {
                                    e.next = 53;
                                    break
                                }
                                return e.next = 52,
                                c(r, y);
                            case 52:
                                E = e.sent;
                            case 53:
                                if (!E) {
                                    e.next = 58;
                                    break
                                }
                                return x = g * parseInt(String(Math.random() * Math.pow(2, r))),
                                e.next = 57,
                                d(x);
                            case 57:
                                return e.abrupt("continue", 62);
                            case 58:
                                O.cancel(),
                                h.throwError("processing response error", u.Logger.errors.SERVER_ERROR, {
                                    body: p(k, i.headers ? i.headers["content-type"] : null),
                                    error: e.t1,
                                    requestBody: p(b.body, C["content-type"]),
                                    requestMethod: b.method,
                                    url: y
                                });
                            case 60:
                                return O.cancel(),
                                e.abrupt("return", k);
                            case 62:
                                r++,
                                e.next = 1;
                                break;
                            case 65:
                                return e.abrupt("return", h.throwError("failed response", u.Logger.errors.SERVER_ERROR, {
                                    requestBody: p(b.body, C["content-type"]),
                                    requestMethod: b.method,
                                    url: y
                                }));
                            case 66:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[3, 30], [37, 45]])
                }
                )))
            }();
            return Promise.race([O.promise, _])
        }
        function v(e, r, t) {
            var n = null;
            if (null != r) {
                n = (0,
                s.Y0)(r);
                var i = "string" === typeof e ? {
                    url: e
                } : (0,
                o.shallowCopy)(e);
                if (i.headers)
                    0 !== Object.keys(i.headers).filter((function(e) {
                        return "content-type" === e.toLowerCase()
                    }
                    )).length || (i.headers = (0,
                    o.shallowCopy)(i.headers),
                    i.headers["content-type"] = "application/json");
                else
                    i.headers = {
                        "content-type": "application/json"
                    };
                e = i
            }
            return g(e, n, (function(e, r) {
                var n = null;
                if (null != e)
                    try {
                        n = JSON.parse((0,
                        s.ZN)(e))
                    } catch (i) {
                        h.throwError("invalid JSON", u.Logger.errors.SERVER_ERROR, {
                            body: e,
                            error: i
                        })
                    }
                return t && (n = t(n, r)),
                n
            }
            ))
        }
        function m(e, r) {
            return r || (r = {}),
            null == (r = (0,
            o.shallowCopy)(r)).floor && (r.floor = 0),
            null == r.ceiling && (r.ceiling = 1e4),
            null == r.interval && (r.interval = 250),
            new Promise((function(t, n) {
                var i = null
                  , a = !1
                  , o = function() {
                    return !a && (a = !0,
                    i && clearTimeout(i),
                    !0)
                };
                r.timeout && (i = setTimeout((function() {
                    o() && n(new Error("timeout"))
                }
                ), r.timeout));
                var s = r.retryLimit
                  , u = 0;
                !function i() {
                    return e().then((function(e) {
                        if (void 0 !== e)
                            o() && t(e);
                        else if (r.oncePoll)
                            r.oncePoll.once("poll", i);
                        else if (r.onceBlock)
                            r.onceBlock.once("block", i);
                        else if (!a) {
                            if (++u > s)
                                return void (o() && n(new Error("retry limit reached")));
                            var c = r.interval * parseInt(String(Math.random() * Math.pow(2, u)));
                            c < r.floor && (c = r.floor),
                            c > r.ceiling && (c = r.ceiling),
                            setTimeout(i, c)
                        }
                        return null
                    }
                    ), (function(e) {
                        o() && n(e)
                    }
                    ))
                }()
            }
            ))
        }
    },
    10581: function(e, r, t) {
        t.d(r, {
            D: function() {
                return c
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(93358)
          , o = t(54812)
          , s = t(2735)
          , u = new s.Logger("wordlists/5.7.0")
          , c = function() {
            function e(r) {
                (0,
                n.Z)(this, e),
                u.checkAbstract(this instanceof e ? this.constructor : void 0, e),
                (0,
                o.defineReadOnly)(this, "locale", r)
            }
            return (0,
            i.Z)(e, [{
                key: "split",
                value: function(e) {
                    return e.toLowerCase().split(/ +/g)
                }
            }, {
                key: "join",
                value: function(e) {
                    return e.join(" ")
                }
            }], [{
                key: "check",
                value: function(e) {
                    for (var r = [], t = 0; t < 2048; t++) {
                        var n = e.getWord(t);
                        if (t !== e.getWordIndex(n))
                            return "0x";
                        r.push(n)
                    }
                    return (0,
                    a.id)(r.join("\n") + "\n")
                }
            }, {
                key: "register",
                value: function(e, r) {
                    r || (r = e.locale)
                }
            }]),
            e
        }()
    },
    53771: function(e, r, t) {
        t.d(r, {
            E: function() {
                return f
            }
        });
        var n = t(15671)
          , i = t(43144)
          , a = t(60136)
          , o = t(29388)
          , s = t(10581)
          , u = null;
        function c(e) {
            if (null == u && (u = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "),
            "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== s.D.check(e)))
                throw u = null,
                new Error("BIP39 Wordlist for en (English) FAILED")
        }
        var l = new (function(e) {
            (0,
            a.Z)(t, e);
            var r = (0,
            o.Z)(t);
            function t() {
                return (0,
                n.Z)(this, t),
                r.call(this, "en")
            }
            return (0,
            i.Z)(t, [{
                key: "getWord",
                value: function(e) {
                    return c(this),
                    u[e]
                }
            }, {
                key: "getWordIndex",
                value: function(e) {
                    return c(this),
                    u.indexOf(e)
                }
            }]),
            t
        }(s.D));
        s.D.register(l);
        var f = {
            en: l
        }
    }
}]);
