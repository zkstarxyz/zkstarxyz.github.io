(self.webpackChunksyncswap = self.webpackChunksyncswap || []).push([[626], {
    50626: function(e, t, f) {
        "use strict";
        var r = t;
        r.version = f(18597).i8,
        r.utils = f(42115),
        r.rand = f(23883),
        r.curve = f(49022),
        r.curves = f(51455),
        r.ec = f(59679),
        r.eddsa = f(52709)
    },
    7242: function(e, t, f) {
        "use strict";
        var r = f(4646)
          , i = f(42115)
          , d = i.getNAF
          , a = i.getJSF
          , n = i.assert;
        function c(e, t) {
            this.type = e,
            this.p = new r(t.p,16),
            this.red = t.prime ? r.red(t.prime) : r.mont(this.p),
            this.zero = new r(0).toRed(this.red),
            this.one = new r(1).toRed(this.red),
            this.two = new r(2).toRed(this.red),
            this.n = t.n && new r(t.n,16),
            this.g = t.g && this.pointFromJSON(t.g, t.gRed),
            this._wnafT1 = new Array(4),
            this._wnafT2 = new Array(4),
            this._wnafT3 = new Array(4),
            this._wnafT4 = new Array(4),
            this._bitLength = this.n ? this.n.bitLength() : 0;
            var f = this.n && this.p.div(this.n);
            !f || f.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
            this.redN = this.n.toRed(this.red))
        }
        function s(e, t) {
            this.curve = e,
            this.type = t,
            this.precomputed = null
        }
        e.exports = c,
        c.prototype.point = function() {
            throw new Error("Not implemented")
        }
        ,
        c.prototype.validate = function() {
            throw new Error("Not implemented")
        }
        ,
        c.prototype._fixedNafMul = function(e, t) {
            n(e.precomputed);
            var f = e._getDoubles()
              , r = d(t, 1, this._bitLength)
              , i = (1 << f.step + 1) - (f.step % 2 === 0 ? 2 : 1);
            i /= 3;
            var a, c, s = [];
            for (a = 0; a < r.length; a += f.step) {
                c = 0;
                for (var h = a + f.step - 1; h >= a; h--)
                    c = (c << 1) + r[h];
                s.push(c)
            }
            for (var o = this.jpoint(null, null, null), u = this.jpoint(null, null, null), b = i; b > 0; b--) {
                for (a = 0; a < s.length; a++)
                    (c = s[a]) === b ? u = u.mixedAdd(f.points[a]) : c === -b && (u = u.mixedAdd(f.points[a].neg()));
                o = o.add(u)
            }
            return o.toP()
        }
        ,
        c.prototype._wnafMul = function(e, t) {
            var f = 4
              , r = e._getNAFPoints(f);
            f = r.wnd;
            for (var i = r.points, a = d(t, f, this._bitLength), c = this.jpoint(null, null, null), s = a.length - 1; s >= 0; s--) {
                for (var h = 0; s >= 0 && 0 === a[s]; s--)
                    h++;
                if (s >= 0 && h++,
                c = c.dblp(h),
                s < 0)
                    break;
                var o = a[s];
                n(0 !== o),
                c = "affine" === e.type ? o > 0 ? c.mixedAdd(i[o - 1 >> 1]) : c.mixedAdd(i[-o - 1 >> 1].neg()) : o > 0 ? c.add(i[o - 1 >> 1]) : c.add(i[-o - 1 >> 1].neg())
            }
            return "affine" === e.type ? c.toP() : c
        }
        ,
        c.prototype._wnafMulAdd = function(e, t, f, r, i) {
            var n, c, s, h = this._wnafT1, o = this._wnafT2, u = this._wnafT3, b = 0;
            for (n = 0; n < r; n++) {
                var l = (s = t[n])._getNAFPoints(e);
                h[n] = l.wnd,
                o[n] = l.points
            }
            for (n = r - 1; n >= 1; n -= 2) {
                var p = n - 1
                  , m = n;
                if (1 === h[p] && 1 === h[m]) {
                    var v = [t[p], null, null, t[m]];
                    0 === t[p].y.cmp(t[m].y) ? (v[1] = t[p].add(t[m]),
                    v[2] = t[p].toJ().mixedAdd(t[m].neg())) : 0 === t[p].y.cmp(t[m].y.redNeg()) ? (v[1] = t[p].toJ().mixedAdd(t[m]),
                    v[2] = t[p].add(t[m].neg())) : (v[1] = t[p].toJ().mixedAdd(t[m]),
                    v[2] = t[p].toJ().mixedAdd(t[m].neg()));
                    var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                      , g = a(f[p], f[m]);
                    for (b = Math.max(g[0].length, b),
                    u[p] = new Array(b),
                    u[m] = new Array(b),
                    c = 0; c < b; c++) {
                        var M = 0 | g[0][c]
                          , w = 0 | g[1][c];
                        u[p][c] = y[3 * (M + 1) + (w + 1)],
                        u[m][c] = 0,
                        o[p] = v
                    }
                } else
                    u[p] = d(f[p], h[p], this._bitLength),
                    u[m] = d(f[m], h[m], this._bitLength),
                    b = Math.max(u[p].length, b),
                    b = Math.max(u[m].length, b)
            }
            var S = this.jpoint(null, null, null)
              , A = this._wnafT4;
            for (n = b; n >= 0; n--) {
                for (var x = 0; n >= 0; ) {
                    var I = !0;
                    for (c = 0; c < r; c++)
                        A[c] = 0 | u[c][n],
                        0 !== A[c] && (I = !1);
                    if (!I)
                        break;
                    x++,
                    n--
                }
                if (n >= 0 && x++,
                S = S.dblp(x),
                n < 0)
                    break;
                for (c = 0; c < r; c++) {
                    var _ = A[c];
                    0 !== _ && (_ > 0 ? s = o[c][_ - 1 >> 1] : _ < 0 && (s = o[c][-_ - 1 >> 1].neg()),
                    S = "affine" === s.type ? S.mixedAdd(s) : S.add(s))
                }
            }
            for (n = 0; n < r; n++)
                o[n] = null;
            return i ? S : S.toP()
        }
        ,
        c.BasePoint = s,
        s.prototype.eq = function() {
            throw new Error("Not implemented")
        }
        ,
        s.prototype.validate = function() {
            return this.curve.validate(this)
        }
        ,
        c.prototype.decodePoint = function(e, t) {
            e = i.toArray(e, t);
            var f = this.p.byteLength();
            if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 === 2 * f)
                return 6 === e[0] ? n(e[e.length - 1] % 2 === 0) : 7 === e[0] && n(e[e.length - 1] % 2 === 1),
                this.point(e.slice(1, 1 + f), e.slice(1 + f, 1 + 2 * f));
            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === f)
                return this.pointFromX(e.slice(1, 1 + f), 3 === e[0]);
            throw new Error("Unknown point format")
        }
        ,
        s.prototype.encodeCompressed = function(e) {
            return this.encode(e, !0)
        }
        ,
        s.prototype._encode = function(e) {
            var t = this.curve.p.byteLength()
              , f = this.getX().toArray("be", t);
            return e ? [this.getY().isEven() ? 2 : 3].concat(f) : [4].concat(f, this.getY().toArray("be", t))
        }
        ,
        s.prototype.encode = function(e, t) {
            return i.encode(this._encode(t), e)
        }
        ,
        s.prototype.precompute = function(e) {
            if (this.precomputed)
                return this;
            var t = {
                doubles: null,
                naf: null,
                beta: null
            };
            return t.naf = this._getNAFPoints(8),
            t.doubles = this._getDoubles(4, e),
            t.beta = this._getBeta(),
            this.precomputed = t,
            this
        }
        ,
        s.prototype._hasDoubles = function(e) {
            if (!this.precomputed)
                return !1;
            var t = this.precomputed.doubles;
            return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
        }
        ,
        s.prototype._getDoubles = function(e, t) {
            if (this.precomputed && this.precomputed.doubles)
                return this.precomputed.doubles;
            for (var f = [this], r = this, i = 0; i < t; i += e) {
                for (var d = 0; d < e; d++)
                    r = r.dbl();
                f.push(r)
            }
            return {
                step: e,
                points: f
            }
        }
        ,
        s.prototype._getNAFPoints = function(e) {
            if (this.precomputed && this.precomputed.naf)
                return this.precomputed.naf;
            for (var t = [this], f = (1 << e) - 1, r = 1 === f ? null : this.dbl(), i = 1; i < f; i++)
                t[i] = t[i - 1].add(r);
            return {
                wnd: e,
                points: t
            }
        }
        ,
        s.prototype._getBeta = function() {
            return null
        }
        ,
        s.prototype.dblp = function(e) {
            for (var t = this, f = 0; f < e; f++)
                t = t.dbl();
            return t
        }
    },
    76971: function(e, t, f) {
        "use strict";
        var r = f(42115)
          , i = f(4646)
          , d = f(80273)
          , a = f(7242)
          , n = r.assert;
        function c(e) {
            this.twisted = 1 !== (0 | e.a),
            this.mOneA = this.twisted && -1 === (0 | e.a),
            this.extended = this.mOneA,
            a.call(this, "edwards", e),
            this.a = new i(e.a,16).umod(this.red.m),
            this.a = this.a.toRed(this.red),
            this.c = new i(e.c,16).toRed(this.red),
            this.c2 = this.c.redSqr(),
            this.d = new i(e.d,16).toRed(this.red),
            this.dd = this.d.redAdd(this.d),
            n(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
            this.oneC = 1 === (0 | e.c)
        }
        function s(e, t, f, r, d) {
            a.BasePoint.call(this, e, "projective"),
            null === t && null === f && null === r ? (this.x = this.curve.zero,
            this.y = this.curve.one,
            this.z = this.curve.one,
            this.t = this.curve.zero,
            this.zOne = !0) : (this.x = new i(t,16),
            this.y = new i(f,16),
            this.z = r ? new i(r,16) : this.curve.one,
            this.t = d && new i(d,16),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one,
            this.curve.extended && !this.t && (this.t = this.x.redMul(this.y),
            this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        d(c, a),
        e.exports = c,
        c.prototype._mulA = function(e) {
            return this.mOneA ? e.redNeg() : this.a.redMul(e)
        }
        ,
        c.prototype._mulC = function(e) {
            return this.oneC ? e : this.c.redMul(e)
        }
        ,
        c.prototype.jpoint = function(e, t, f, r) {
            return this.point(e, t, f, r)
        }
        ,
        c.prototype.pointFromX = function(e, t) {
            (e = new i(e,16)).red || (e = e.toRed(this.red));
            var f = e.redSqr()
              , r = this.c2.redSub(this.a.redMul(f))
              , d = this.one.redSub(this.c2.redMul(this.d).redMul(f))
              , a = r.redMul(d.redInvm())
              , n = a.redSqrt();
            if (0 !== n.redSqr().redSub(a).cmp(this.zero))
                throw new Error("invalid point");
            var c = n.fromRed().isOdd();
            return (t && !c || !t && c) && (n = n.redNeg()),
            this.point(e, n)
        }
        ,
        c.prototype.pointFromY = function(e, t) {
            (e = new i(e,16)).red || (e = e.toRed(this.red));
            var f = e.redSqr()
              , r = f.redSub(this.c2)
              , d = f.redMul(this.d).redMul(this.c2).redSub(this.a)
              , a = r.redMul(d.redInvm());
            if (0 === a.cmp(this.zero)) {
                if (t)
                    throw new Error("invalid point");
                return this.point(this.zero, e)
            }
            var n = a.redSqrt();
            if (0 !== n.redSqr().redSub(a).cmp(this.zero))
                throw new Error("invalid point");
            return n.fromRed().isOdd() !== t && (n = n.redNeg()),
            this.point(n, e)
        }
        ,
        c.prototype.validate = function(e) {
            if (e.isInfinity())
                return !0;
            e.normalize();
            var t = e.x.redSqr()
              , f = e.y.redSqr()
              , r = t.redMul(this.a).redAdd(f)
              , i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(f)));
            return 0 === r.cmp(i)
        }
        ,
        d(s, a.BasePoint),
        c.prototype.pointFromJSON = function(e) {
            return s.fromJSON(this, e)
        }
        ,
        c.prototype.point = function(e, t, f, r) {
            return new s(this,e,t,f,r)
        }
        ,
        s.fromJSON = function(e, t) {
            return new s(e,t[0],t[1],t[2])
        }
        ,
        s.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }
        ,
        s.prototype.isInfinity = function() {
            return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
        }
        ,
        s.prototype._extDbl = function() {
            var e = this.x.redSqr()
              , t = this.y.redSqr()
              , f = this.z.redSqr();
            f = f.redIAdd(f);
            var r = this.curve._mulA(e)
              , i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t)
              , d = r.redAdd(t)
              , a = d.redSub(f)
              , n = r.redSub(t)
              , c = i.redMul(a)
              , s = d.redMul(n)
              , h = i.redMul(n)
              , o = a.redMul(d);
            return this.curve.point(c, s, o, h)
        }
        ,
        s.prototype._projDbl = function() {
            var e, t, f, r, i, d, a = this.x.redAdd(this.y).redSqr(), n = this.x.redSqr(), c = this.y.redSqr();
            if (this.curve.twisted) {
                var s = (r = this.curve._mulA(n)).redAdd(c);
                this.zOne ? (e = a.redSub(n).redSub(c).redMul(s.redSub(this.curve.two)),
                t = s.redMul(r.redSub(c)),
                f = s.redSqr().redSub(s).redSub(s)) : (i = this.z.redSqr(),
                d = s.redSub(i).redISub(i),
                e = a.redSub(n).redISub(c).redMul(d),
                t = s.redMul(r.redSub(c)),
                f = s.redMul(d))
            } else
                r = n.redAdd(c),
                i = this.curve._mulC(this.z).redSqr(),
                d = r.redSub(i).redSub(i),
                e = this.curve._mulC(a.redISub(r)).redMul(d),
                t = this.curve._mulC(r).redMul(n.redISub(c)),
                f = r.redMul(d);
            return this.curve.point(e, t, f)
        }
        ,
        s.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
        }
        ,
        s.prototype._extAdd = function(e) {
            var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x))
              , f = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x))
              , r = this.t.redMul(this.curve.dd).redMul(e.t)
              , i = this.z.redMul(e.z.redAdd(e.z))
              , d = f.redSub(t)
              , a = i.redSub(r)
              , n = i.redAdd(r)
              , c = f.redAdd(t)
              , s = d.redMul(a)
              , h = n.redMul(c)
              , o = d.redMul(c)
              , u = a.redMul(n);
            return this.curve.point(s, h, u, o)
        }
        ,
        s.prototype._projAdd = function(e) {
            var t, f, r = this.z.redMul(e.z), i = r.redSqr(), d = this.x.redMul(e.x), a = this.y.redMul(e.y), n = this.curve.d.redMul(d).redMul(a), c = i.redSub(n), s = i.redAdd(n), h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(d).redISub(a), o = r.redMul(c).redMul(h);
            return this.curve.twisted ? (t = r.redMul(s).redMul(a.redSub(this.curve._mulA(d))),
            f = c.redMul(s)) : (t = r.redMul(s).redMul(a.redSub(d)),
            f = this.curve._mulC(c).redMul(s)),
            this.curve.point(o, t, f)
        }
        ,
        s.prototype.add = function(e) {
            return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
        }
        ,
        s.prototype.mul = function(e) {
            return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
        }
        ,
        s.prototype.mulAdd = function(e, t, f) {
            return this.curve._wnafMulAdd(1, [this, t], [e, f], 2, !1)
        }
        ,
        s.prototype.jmulAdd = function(e, t, f) {
            return this.curve._wnafMulAdd(1, [this, t], [e, f], 2, !0)
        }
        ,
        s.prototype.normalize = function() {
            if (this.zOne)
                return this;
            var e = this.z.redInvm();
            return this.x = this.x.redMul(e),
            this.y = this.y.redMul(e),
            this.t && (this.t = this.t.redMul(e)),
            this.z = this.curve.one,
            this.zOne = !0,
            this
        }
        ,
        s.prototype.neg = function() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
        }
        ,
        s.prototype.getX = function() {
            return this.normalize(),
            this.x.fromRed()
        }
        ,
        s.prototype.getY = function() {
            return this.normalize(),
            this.y.fromRed()
        }
        ,
        s.prototype.eq = function(e) {
            return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
        }
        ,
        s.prototype.eqXToP = function(e) {
            var t = e.toRed(this.curve.red).redMul(this.z);
            if (0 === this.x.cmp(t))
                return !0;
            for (var f = e.clone(), r = this.curve.redN.redMul(this.z); ; ) {
                if (f.iadd(this.curve.n),
                f.cmp(this.curve.p) >= 0)
                    return !1;
                if (t.redIAdd(r),
                0 === this.x.cmp(t))
                    return !0
            }
        }
        ,
        s.prototype.toP = s.prototype.normalize,
        s.prototype.mixedAdd = s.prototype.add
    },
    49022: function(e, t, f) {
        "use strict";
        var r = t;
        r.base = f(7242),
        r.short = f(14463),
        r.mont = f(92620),
        r.edwards = f(76971)
    },
    92620: function(e, t, f) {
        "use strict";
        var r = f(4646)
          , i = f(80273)
          , d = f(7242)
          , a = f(42115);
        function n(e) {
            d.call(this, "mont", e),
            this.a = new r(e.a,16).toRed(this.red),
            this.b = new r(e.b,16).toRed(this.red),
            this.i4 = new r(4).toRed(this.red).redInvm(),
            this.two = new r(2).toRed(this.red),
            this.a24 = this.i4.redMul(this.a.redAdd(this.two))
        }
        function c(e, t, f) {
            d.BasePoint.call(this, e, "projective"),
            null === t && null === f ? (this.x = this.curve.one,
            this.z = this.curve.zero) : (this.x = new r(t,16),
            this.z = new r(f,16),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        i(n, d),
        e.exports = n,
        n.prototype.validate = function(e) {
            var t = e.normalize().x
              , f = t.redSqr()
              , r = f.redMul(t).redAdd(f.redMul(this.a)).redAdd(t);
            return 0 === r.redSqrt().redSqr().cmp(r)
        }
        ,
        i(c, d.BasePoint),
        n.prototype.decodePoint = function(e, t) {
            return this.point(a.toArray(e, t), 1)
        }
        ,
        n.prototype.point = function(e, t) {
            return new c(this,e,t)
        }
        ,
        n.prototype.pointFromJSON = function(e) {
            return c.fromJSON(this, e)
        }
        ,
        c.prototype.precompute = function() {}
        ,
        c.prototype._encode = function() {
            return this.getX().toArray("be", this.curve.p.byteLength())
        }
        ,
        c.fromJSON = function(e, t) {
            return new c(e,t[0],t[1] || e.one)
        }
        ,
        c.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }
        ,
        c.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
        ,
        c.prototype.dbl = function() {
            var e = this.x.redAdd(this.z).redSqr()
              , t = this.x.redSub(this.z).redSqr()
              , f = e.redSub(t)
              , r = e.redMul(t)
              , i = f.redMul(t.redAdd(this.curve.a24.redMul(f)));
            return this.curve.point(r, i)
        }
        ,
        c.prototype.add = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        c.prototype.diffAdd = function(e, t) {
            var f = this.x.redAdd(this.z)
              , r = this.x.redSub(this.z)
              , i = e.x.redAdd(e.z)
              , d = e.x.redSub(e.z).redMul(f)
              , a = i.redMul(r)
              , n = t.z.redMul(d.redAdd(a).redSqr())
              , c = t.x.redMul(d.redISub(a).redSqr());
            return this.curve.point(n, c)
        }
        ,
        c.prototype.mul = function(e) {
            for (var t = e.clone(), f = this, r = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1))
                i.push(t.andln(1));
            for (var d = i.length - 1; d >= 0; d--)
                0 === i[d] ? (f = f.diffAdd(r, this),
                r = r.dbl()) : (r = f.diffAdd(r, this),
                f = f.dbl());
            return r
        }
        ,
        c.prototype.mulAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        c.prototype.jumlAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }
        ,
        c.prototype.eq = function(e) {
            return 0 === this.getX().cmp(e.getX())
        }
        ,
        c.prototype.normalize = function() {
            return this.x = this.x.redMul(this.z.redInvm()),
            this.z = this.curve.one,
            this
        }
        ,
        c.prototype.getX = function() {
            return this.normalize(),
            this.x.fromRed()
        }
    },
    14463: function(e, t, f) {
        "use strict";
        var r = f(42115)
          , i = f(4646)
          , d = f(80273)
          , a = f(7242)
          , n = r.assert;
        function c(e) {
            a.call(this, "short", e),
            this.a = new i(e.a,16).toRed(this.red),
            this.b = new i(e.b,16).toRed(this.red),
            this.tinv = this.two.redInvm(),
            this.zeroA = 0 === this.a.fromRed().cmpn(0),
            this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
            this.endo = this._getEndomorphism(e),
            this._endoWnafT1 = new Array(4),
            this._endoWnafT2 = new Array(4)
        }
        function s(e, t, f, r) {
            a.BasePoint.call(this, e, "affine"),
            null === t && null === f ? (this.x = null,
            this.y = null,
            this.inf = !0) : (this.x = new i(t,16),
            this.y = new i(f,16),
            r && (this.x.forceRed(this.curve.red),
            this.y.forceRed(this.curve.red)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.inf = !1)
        }
        function h(e, t, f, r) {
            a.BasePoint.call(this, e, "jacobian"),
            null === t && null === f && null === r ? (this.x = this.curve.one,
            this.y = this.curve.one,
            this.z = new i(0)) : (this.x = new i(t,16),
            this.y = new i(f,16),
            this.z = new i(r,16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one
        }
        d(c, a),
        e.exports = c,
        c.prototype._getEndomorphism = function(e) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var t, f;
                if (e.beta)
                    t = new i(e.beta,16).toRed(this.red);
                else {
                    var r = this._getEndoRoots(this.p);
                    t = (t = r[0].cmp(r[1]) < 0 ? r[0] : r[1]).toRed(this.red)
                }
                if (e.lambda)
                    f = new i(e.lambda,16);
                else {
                    var d = this._getEndoRoots(this.n);
                    0 === this.g.mul(d[0]).x.cmp(this.g.x.redMul(t)) ? f = d[0] : (f = d[1],
                    n(0 === this.g.mul(f).x.cmp(this.g.x.redMul(t))))
                }
                return {
                    beta: t,
                    lambda: f,
                    basis: e.basis ? e.basis.map((function(e) {
                        return {
                            a: new i(e.a,16),
                            b: new i(e.b,16)
                        }
                    }
                    )) : this._getEndoBasis(f)
                }
            }
        }
        ,
        c.prototype._getEndoRoots = function(e) {
            var t = e === this.p ? this.red : i.mont(e)
              , f = new i(2).toRed(t).redInvm()
              , r = f.redNeg()
              , d = new i(3).toRed(t).redNeg().redSqrt().redMul(f);
            return [r.redAdd(d).fromRed(), r.redSub(d).fromRed()]
        }
        ,
        c.prototype._getEndoBasis = function(e) {
            for (var t, f, r, d, a, n, c, s, h, o = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, b = this.n.clone(), l = new i(1), p = new i(0), m = new i(0), v = new i(1), y = 0; 0 !== u.cmpn(0); ) {
                var g = b.div(u);
                s = b.sub(g.mul(u)),
                h = m.sub(g.mul(l));
                var M = v.sub(g.mul(p));
                if (!r && s.cmp(o) < 0)
                    t = c.neg(),
                    f = l,
                    r = s.neg(),
                    d = h;
                else if (r && 2 === ++y)
                    break;
                c = s,
                b = u,
                u = s,
                m = l,
                l = h,
                v = p,
                p = M
            }
            a = s.neg(),
            n = h;
            var w = r.sqr().add(d.sqr());
            return a.sqr().add(n.sqr()).cmp(w) >= 0 && (a = t,
            n = f),
            r.negative && (r = r.neg(),
            d = d.neg()),
            a.negative && (a = a.neg(),
            n = n.neg()),
            [{
                a: r,
                b: d
            }, {
                a: a,
                b: n
            }]
        }
        ,
        c.prototype._endoSplit = function(e) {
            var t = this.endo.basis
              , f = t[0]
              , r = t[1]
              , i = r.b.mul(e).divRound(this.n)
              , d = f.b.neg().mul(e).divRound(this.n)
              , a = i.mul(f.a)
              , n = d.mul(r.a)
              , c = i.mul(f.b)
              , s = d.mul(r.b);
            return {
                k1: e.sub(a).sub(n),
                k2: c.add(s).neg()
            }
        }
        ,
        c.prototype.pointFromX = function(e, t) {
            (e = new i(e,16)).red || (e = e.toRed(this.red));
            var f = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b)
              , r = f.redSqrt();
            if (0 !== r.redSqr().redSub(f).cmp(this.zero))
                throw new Error("invalid point");
            var d = r.fromRed().isOdd();
            return (t && !d || !t && d) && (r = r.redNeg()),
            this.point(e, r)
        }
        ,
        c.prototype.validate = function(e) {
            if (e.inf)
                return !0;
            var t = e.x
              , f = e.y
              , r = this.a.redMul(t)
              , i = t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);
            return 0 === f.redSqr().redISub(i).cmpn(0)
        }
        ,
        c.prototype._endoWnafMulAdd = function(e, t, f) {
            for (var r = this._endoWnafT1, i = this._endoWnafT2, d = 0; d < e.length; d++) {
                var a = this._endoSplit(t[d])
                  , n = e[d]
                  , c = n._getBeta();
                a.k1.negative && (a.k1.ineg(),
                n = n.neg(!0)),
                a.k2.negative && (a.k2.ineg(),
                c = c.neg(!0)),
                r[2 * d] = n,
                r[2 * d + 1] = c,
                i[2 * d] = a.k1,
                i[2 * d + 1] = a.k2
            }
            for (var s = this._wnafMulAdd(1, r, i, 2 * d, f), h = 0; h < 2 * d; h++)
                r[h] = null,
                i[h] = null;
            return s
        }
        ,
        d(s, a.BasePoint),
        c.prototype.point = function(e, t, f) {
            return new s(this,e,t,f)
        }
        ,
        c.prototype.pointFromJSON = function(e, t) {
            return s.fromJSON(this, e, t)
        }
        ,
        s.prototype._getBeta = function() {
            if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta)
                    return e.beta;
                var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var f = this.curve
                      , r = function(e) {
                        return f.point(e.x.redMul(f.endo.beta), e.y)
                    };
                    e.beta = t,
                    t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(r)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(r)
                        }
                    }
                }
                return t
            }
        }
        ,
        s.prototype.toJSON = function() {
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
        s.fromJSON = function(e, t, f) {
            "string" === typeof t && (t = JSON.parse(t));
            var r = e.point(t[0], t[1], f);
            if (!t[2])
                return r;
            function i(t) {
                return e.point(t[0], t[1], f)
            }
            var d = t[2];
            return r.precomputed = {
                beta: null,
                doubles: d.doubles && {
                    step: d.doubles.step,
                    points: [r].concat(d.doubles.points.map(i))
                },
                naf: d.naf && {
                    wnd: d.naf.wnd,
                    points: [r].concat(d.naf.points.map(i))
                }
            },
            r
        }
        ,
        s.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }
        ,
        s.prototype.isInfinity = function() {
            return this.inf
        }
        ,
        s.prototype.add = function(e) {
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
            var t = this.y.redSub(e.y);
            0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
            var f = t.redSqr().redISub(this.x).redISub(e.x)
              , r = t.redMul(this.x.redSub(f)).redISub(this.y);
            return this.curve.point(f, r)
        }
        ,
        s.prototype.dbl = function() {
            if (this.inf)
                return this;
            var e = this.y.redAdd(this.y);
            if (0 === e.cmpn(0))
                return this.curve.point(null, null);
            var t = this.curve.a
              , f = this.x.redSqr()
              , r = e.redInvm()
              , i = f.redAdd(f).redIAdd(f).redIAdd(t).redMul(r)
              , d = i.redSqr().redISub(this.x.redAdd(this.x))
              , a = i.redMul(this.x.redSub(d)).redISub(this.y);
            return this.curve.point(d, a)
        }
        ,
        s.prototype.getX = function() {
            return this.x.fromRed()
        }
        ,
        s.prototype.getY = function() {
            return this.y.fromRed()
        }
        ,
        s.prototype.mul = function(e) {
            return e = new i(e,16),
            this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
        }
        ,
        s.prototype.mulAdd = function(e, t, f) {
            var r = [this, t]
              , i = [e, f];
            return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2)
        }
        ,
        s.prototype.jmulAdd = function(e, t, f) {
            var r = [this, t]
              , i = [e, f];
            return this.curve.endo ? this.curve._endoWnafMulAdd(r, i, !0) : this.curve._wnafMulAdd(1, r, i, 2, !0)
        }
        ,
        s.prototype.eq = function(e) {
            return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
        }
        ,
        s.prototype.neg = function(e) {
            if (this.inf)
                return this;
            var t = this.curve.point(this.x, this.y.redNeg());
            if (e && this.precomputed) {
                var f = this.precomputed
                  , r = function(e) {
                    return e.neg()
                };
                t.precomputed = {
                    naf: f.naf && {
                        wnd: f.naf.wnd,
                        points: f.naf.points.map(r)
                    },
                    doubles: f.doubles && {
                        step: f.doubles.step,
                        points: f.doubles.points.map(r)
                    }
                }
            }
            return t
        }
        ,
        s.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }
        ,
        d(h, a.BasePoint),
        c.prototype.jpoint = function(e, t, f) {
            return new h(this,e,t,f)
        }
        ,
        h.prototype.toP = function() {
            if (this.isInfinity())
                return this.curve.point(null, null);
            var e = this.z.redInvm()
              , t = e.redSqr()
              , f = this.x.redMul(t)
              , r = this.y.redMul(t).redMul(e);
            return this.curve.point(f, r)
        }
        ,
        h.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }
        ,
        h.prototype.add = function(e) {
            if (this.isInfinity())
                return e;
            if (e.isInfinity())
                return this;
            var t = e.z.redSqr()
              , f = this.z.redSqr()
              , r = this.x.redMul(t)
              , i = e.x.redMul(f)
              , d = this.y.redMul(t.redMul(e.z))
              , a = e.y.redMul(f.redMul(this.z))
              , n = r.redSub(i)
              , c = d.redSub(a);
            if (0 === n.cmpn(0))
                return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var s = n.redSqr()
              , h = s.redMul(n)
              , o = r.redMul(s)
              , u = c.redSqr().redIAdd(h).redISub(o).redISub(o)
              , b = c.redMul(o.redISub(u)).redISub(d.redMul(h))
              , l = this.z.redMul(e.z).redMul(n);
            return this.curve.jpoint(u, b, l)
        }
        ,
        h.prototype.mixedAdd = function(e) {
            if (this.isInfinity())
                return e.toJ();
            if (e.isInfinity())
                return this;
            var t = this.z.redSqr()
              , f = this.x
              , r = e.x.redMul(t)
              , i = this.y
              , d = e.y.redMul(t).redMul(this.z)
              , a = f.redSub(r)
              , n = i.redSub(d);
            if (0 === a.cmpn(0))
                return 0 !== n.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var c = a.redSqr()
              , s = c.redMul(a)
              , h = f.redMul(c)
              , o = n.redSqr().redIAdd(s).redISub(h).redISub(h)
              , u = n.redMul(h.redISub(o)).redISub(i.redMul(s))
              , b = this.z.redMul(a);
            return this.curve.jpoint(o, u, b)
        }
        ,
        h.prototype.dblp = function(e) {
            if (0 === e)
                return this;
            if (this.isInfinity())
                return this;
            if (!e)
                return this.dbl();
            var t;
            if (this.curve.zeroA || this.curve.threeA) {
                var f = this;
                for (t = 0; t < e; t++)
                    f = f.dbl();
                return f
            }
            var r = this.curve.a
              , i = this.curve.tinv
              , d = this.x
              , a = this.y
              , n = this.z
              , c = n.redSqr().redSqr()
              , s = a.redAdd(a);
            for (t = 0; t < e; t++) {
                var h = d.redSqr()
                  , o = s.redSqr()
                  , u = o.redSqr()
                  , b = h.redAdd(h).redIAdd(h).redIAdd(r.redMul(c))
                  , l = d.redMul(o)
                  , p = b.redSqr().redISub(l.redAdd(l))
                  , m = l.redISub(p)
                  , v = b.redMul(m);
                v = v.redIAdd(v).redISub(u);
                var y = s.redMul(n);
                t + 1 < e && (c = c.redMul(u)),
                d = p,
                n = y,
                s = v
            }
            return this.curve.jpoint(d, s.redMul(i), n)
        }
        ,
        h.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }
        ,
        h.prototype._zeroDbl = function() {
            var e, t, f;
            if (this.zOne) {
                var r = this.x.redSqr()
                  , i = this.y.redSqr()
                  , d = i.redSqr()
                  , a = this.x.redAdd(i).redSqr().redISub(r).redISub(d);
                a = a.redIAdd(a);
                var n = r.redAdd(r).redIAdd(r)
                  , c = n.redSqr().redISub(a).redISub(a)
                  , s = d.redIAdd(d);
                s = (s = s.redIAdd(s)).redIAdd(s),
                e = c,
                t = n.redMul(a.redISub(c)).redISub(s),
                f = this.y.redAdd(this.y)
            } else {
                var h = this.x.redSqr()
                  , o = this.y.redSqr()
                  , u = o.redSqr()
                  , b = this.x.redAdd(o).redSqr().redISub(h).redISub(u);
                b = b.redIAdd(b);
                var l = h.redAdd(h).redIAdd(h)
                  , p = l.redSqr()
                  , m = u.redIAdd(u);
                m = (m = m.redIAdd(m)).redIAdd(m),
                e = p.redISub(b).redISub(b),
                t = l.redMul(b.redISub(e)).redISub(m),
                f = (f = this.y.redMul(this.z)).redIAdd(f)
            }
            return this.curve.jpoint(e, t, f)
        }
        ,
        h.prototype._threeDbl = function() {
            var e, t, f;
            if (this.zOne) {
                var r = this.x.redSqr()
                  , i = this.y.redSqr()
                  , d = i.redSqr()
                  , a = this.x.redAdd(i).redSqr().redISub(r).redISub(d);
                a = a.redIAdd(a);
                var n = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a)
                  , c = n.redSqr().redISub(a).redISub(a);
                e = c;
                var s = d.redIAdd(d);
                s = (s = s.redIAdd(s)).redIAdd(s),
                t = n.redMul(a.redISub(c)).redISub(s),
                f = this.y.redAdd(this.y)
            } else {
                var h = this.z.redSqr()
                  , o = this.y.redSqr()
                  , u = this.x.redMul(o)
                  , b = this.x.redSub(h).redMul(this.x.redAdd(h));
                b = b.redAdd(b).redIAdd(b);
                var l = u.redIAdd(u)
                  , p = (l = l.redIAdd(l)).redAdd(l);
                e = b.redSqr().redISub(p),
                f = this.y.redAdd(this.z).redSqr().redISub(o).redISub(h);
                var m = o.redSqr();
                m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m),
                t = b.redMul(l.redISub(e)).redISub(m)
            }
            return this.curve.jpoint(e, t, f)
        }
        ,
        h.prototype._dbl = function() {
            var e = this.curve.a
              , t = this.x
              , f = this.y
              , r = this.z
              , i = r.redSqr().redSqr()
              , d = t.redSqr()
              , a = f.redSqr()
              , n = d.redAdd(d).redIAdd(d).redIAdd(e.redMul(i))
              , c = t.redAdd(t)
              , s = (c = c.redIAdd(c)).redMul(a)
              , h = n.redSqr().redISub(s.redAdd(s))
              , o = s.redISub(h)
              , u = a.redSqr();
            u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
            var b = n.redMul(o).redISub(u)
              , l = f.redAdd(f).redMul(r);
            return this.curve.jpoint(h, b, l)
        }
        ,
        h.prototype.trpl = function() {
            if (!this.curve.zeroA)
                return this.dbl().add(this);
            var e = this.x.redSqr()
              , t = this.y.redSqr()
              , f = this.z.redSqr()
              , r = t.redSqr()
              , i = e.redAdd(e).redIAdd(e)
              , d = i.redSqr()
              , a = this.x.redAdd(t).redSqr().redISub(e).redISub(r)
              , n = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(d)).redSqr()
              , c = r.redIAdd(r);
            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
            var s = i.redIAdd(a).redSqr().redISub(d).redISub(n).redISub(c)
              , h = t.redMul(s);
            h = (h = h.redIAdd(h)).redIAdd(h);
            var o = this.x.redMul(n).redISub(h);
            o = (o = o.redIAdd(o)).redIAdd(o);
            var u = this.y.redMul(s.redMul(c.redISub(s)).redISub(a.redMul(n)));
            u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
            var b = this.z.redAdd(a).redSqr().redISub(f).redISub(n);
            return this.curve.jpoint(o, u, b)
        }
        ,
        h.prototype.mul = function(e, t) {
            return e = new i(e,t),
            this.curve._wnafMul(this, e)
        }
        ,
        h.prototype.eq = function(e) {
            if ("affine" === e.type)
                return this.eq(e.toJ());
            if (this === e)
                return !0;
            var t = this.z.redSqr()
              , f = e.z.redSqr();
            if (0 !== this.x.redMul(f).redISub(e.x.redMul(t)).cmpn(0))
                return !1;
            var r = t.redMul(this.z)
              , i = f.redMul(e.z);
            return 0 === this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0)
        }
        ,
        h.prototype.eqXToP = function(e) {
            var t = this.z.redSqr()
              , f = e.toRed(this.curve.red).redMul(t);
            if (0 === this.x.cmp(f))
                return !0;
            for (var r = e.clone(), i = this.curve.redN.redMul(t); ; ) {
                if (r.iadd(this.curve.n),
                r.cmp(this.curve.p) >= 0)
                    return !1;
                if (f.redIAdd(i),
                0 === this.x.cmp(f))
                    return !0
            }
        }
        ,
        h.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }
        ,
        h.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
    },
    51455: function(e, t, f) {
        "use strict";
        var r, i = t, d = f(37553), a = f(49022), n = f(42115).assert;
        function c(e) {
            "short" === e.type ? this.curve = new a.short(e) : "edwards" === e.type ? this.curve = new a.edwards(e) : this.curve = new a.mont(e),
            this.g = this.curve.g,
            this.n = this.curve.n,
            this.hash = e.hash,
            n(this.g.validate(), "Invalid curve"),
            n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }
        function s(e, t) {
            Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var f = new c(t);
                    return Object.defineProperty(i, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: f
                    }),
                    f
                }
            })
        }
        i.PresetCurve = c,
        s("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: d.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }),
        s("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: d.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }),
        s("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: d.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }),
        s("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: d.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }),
        s("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: d.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }),
        s("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: d.sha256,
            gRed: !1,
            g: ["9"]
        }),
        s("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: d.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        try {
            r = f(36418)
        } catch (h) {
            r = void 0
        }
        s("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: d.sha256,
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
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
        })
    },
    59679: function(e, t, f) {
        "use strict";
        var r = f(4646)
          , i = f(31355)
          , d = f(42115)
          , a = f(51455)
          , n = f(23883)
          , c = d.assert
          , s = f(57891)
          , h = f(66058);
        function o(e) {
            if (!(this instanceof o))
                return new o(e);
            "string" === typeof e && (c(Object.prototype.hasOwnProperty.call(a, e), "Unknown curve " + e),
            e = a[e]),
            e instanceof a.PresetCurve && (e = {
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
        e.exports = o,
        o.prototype.keyPair = function(e) {
            return new s(this,e)
        }
        ,
        o.prototype.keyFromPrivate = function(e, t) {
            return s.fromPrivate(this, e, t)
        }
        ,
        o.prototype.keyFromPublic = function(e, t) {
            return s.fromPublic(this, e, t)
        }
        ,
        o.prototype.genKeyPair = function(e) {
            e || (e = {});
            for (var t = new i({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || n(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), f = this.n.byteLength(), d = this.n.sub(new r(2)); ; ) {
                var a = new r(t.generate(f));
                if (!(a.cmp(d) > 0))
                    return a.iaddn(1),
                    this.keyFromPrivate(a)
            }
        }
        ,
        o.prototype._truncateToN = function(e, t) {
            var f = 8 * e.byteLength() - this.n.bitLength();
            return f > 0 && (e = e.ushrn(f)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        }
        ,
        o.prototype.sign = function(e, t, f, d) {
            "object" === typeof f && (d = f,
            f = null),
            d || (d = {}),
            t = this.keyFromPrivate(t, f),
            e = this._truncateToN(new r(e,16));
            for (var a = this.n.byteLength(), n = t.getPrivate().toArray("be", a), c = e.toArray("be", a), s = new i({
                hash: this.hash,
                entropy: n,
                nonce: c,
                pers: d.pers,
                persEnc: d.persEnc || "utf8"
            }), o = this.n.sub(new r(1)), u = 0; ; u++) {
                var b = d.k ? d.k(u) : new r(s.generate(this.n.byteLength()));
                if (!((b = this._truncateToN(b, !0)).cmpn(1) <= 0 || b.cmp(o) >= 0)) {
                    var l = this.g.mul(b);
                    if (!l.isInfinity()) {
                        var p = l.getX()
                          , m = p.umod(this.n);
                        if (0 !== m.cmpn(0)) {
                            var v = b.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                            if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                                var y = (l.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                                return d.canonical && v.cmp(this.nh) > 0 && (v = this.n.sub(v),
                                y ^= 1),
                                new h({
                                    r: m,
                                    s: v,
                                    recoveryParam: y
                                })
                            }
                        }
                    }
                }
            }
        }
        ,
        o.prototype.verify = function(e, t, f, i) {
            e = this._truncateToN(new r(e,16)),
            f = this.keyFromPublic(f, i);
            var d = (t = new h(t,"hex")).r
              , a = t.s;
            if (d.cmpn(1) < 0 || d.cmp(this.n) >= 0)
                return !1;
            if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0)
                return !1;
            var n, c = a.invm(this.n), s = c.mul(e).umod(this.n), o = c.mul(d).umod(this.n);
            return this.curve._maxwellTrick ? !(n = this.g.jmulAdd(s, f.getPublic(), o)).isInfinity() && n.eqXToP(d) : !(n = this.g.mulAdd(s, f.getPublic(), o)).isInfinity() && 0 === n.getX().umod(this.n).cmp(d)
        }
        ,
        o.prototype.recoverPubKey = function(e, t, f, i) {
            c((3 & f) === f, "The recovery param is more than two bits"),
            t = new h(t,i);
            var d = this.n
              , a = new r(e)
              , n = t.r
              , s = t.s
              , o = 1 & f
              , u = f >> 1;
            if (n.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
                throw new Error("Unable to find sencond key candinate");
            n = u ? this.curve.pointFromX(n.add(this.curve.n), o) : this.curve.pointFromX(n, o);
            var b = t.r.invm(d)
              , l = d.sub(a).mul(b).umod(d)
              , p = s.mul(b).umod(d);
            return this.g.mulAdd(l, n, p)
        }
        ,
        o.prototype.getKeyRecoveryParam = function(e, t, f, r) {
            if (null !== (t = new h(t,r)).recoveryParam)
                return t.recoveryParam;
            for (var i = 0; i < 4; i++) {
                var d;
                try {
                    d = this.recoverPubKey(e, t, i)
                } catch (e) {
                    continue
                }
                if (d.eq(f))
                    return i
            }
            throw new Error("Unable to find valid recovery factor")
        }
    },
    57891: function(e, t, f) {
        "use strict";
        var r = f(4646)
          , i = f(42115).assert;
        function d(e, t) {
            this.ec = e,
            this.priv = null,
            this.pub = null,
            t.priv && this._importPrivate(t.priv, t.privEnc),
            t.pub && this._importPublic(t.pub, t.pubEnc)
        }
        e.exports = d,
        d.fromPublic = function(e, t, f) {
            return t instanceof d ? t : new d(e,{
                pub: t,
                pubEnc: f
            })
        }
        ,
        d.fromPrivate = function(e, t, f) {
            return t instanceof d ? t : new d(e,{
                priv: t,
                privEnc: f
            })
        }
        ,
        d.prototype.validate = function() {
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
        d.prototype.getPublic = function(e, t) {
            return "string" === typeof e && (t = e,
            e = null),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
        }
        ,
        d.prototype.getPrivate = function(e) {
            return "hex" === e ? this.priv.toString(16, 2) : this.priv
        }
        ,
        d.prototype._importPrivate = function(e, t) {
            this.priv = new r(e,t || 16),
            this.priv = this.priv.umod(this.ec.curve.n)
        }
        ,
        d.prototype._importPublic = function(e, t) {
            if (e.x || e.y)
                return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(e.x, e.y));
            this.pub = this.ec.curve.decodePoint(e, t)
        }
        ,
        d.prototype.derive = function(e) {
            return e.validate() || i(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
        }
        ,
        d.prototype.sign = function(e, t, f) {
            return this.ec.sign(e, this, t, f)
        }
        ,
        d.prototype.verify = function(e, t) {
            return this.ec.verify(e, t, this)
        }
        ,
        d.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
    },
    66058: function(e, t, f) {
        "use strict";
        var r = f(4646)
          , i = f(42115)
          , d = i.assert;
        function a(e, t) {
            if (e instanceof a)
                return e;
            this._importDER(e, t) || (d(e.r && e.s, "Signature without r or s"),
            this.r = new r(e.r,16),
            this.s = new r(e.s,16),
            void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
        }
        function n() {
            this.place = 0
        }
        function c(e, t) {
            var f = e[t.place++];
            if (!(128 & f))
                return f;
            var r = 15 & f;
            if (0 === r || r > 4)
                return !1;
            for (var i = 0, d = 0, a = t.place; d < r; d++,
            a++)
                i <<= 8,
                i |= e[a],
                i >>>= 0;
            return !(i <= 127) && (t.place = a,
            i)
        }
        function s(e) {
            for (var t = 0, f = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < f; )
                t++;
            return 0 === t ? e : e.slice(t)
        }
        function h(e, t) {
            if (t < 128)
                e.push(t);
            else {
                var f = 1 + (Math.log(t) / Math.LN2 >>> 3);
                for (e.push(128 | f); --f; )
                    e.push(t >>> (f << 3) & 255);
                e.push(t)
            }
        }
        e.exports = a,
        a.prototype._importDER = function(e, t) {
            e = i.toArray(e, t);
            var f = new n;
            if (48 !== e[f.place++])
                return !1;
            var d = c(e, f);
            if (!1 === d)
                return !1;
            if (d + f.place !== e.length)
                return !1;
            if (2 !== e[f.place++])
                return !1;
            var a = c(e, f);
            if (!1 === a)
                return !1;
            var s = e.slice(f.place, a + f.place);
            if (f.place += a,
            2 !== e[f.place++])
                return !1;
            var h = c(e, f);
            if (!1 === h)
                return !1;
            if (e.length !== h + f.place)
                return !1;
            var o = e.slice(f.place, h + f.place);
            if (0 === s[0]) {
                if (!(128 & s[1]))
                    return !1;
                s = s.slice(1)
            }
            if (0 === o[0]) {
                if (!(128 & o[1]))
                    return !1;
                o = o.slice(1)
            }
            return this.r = new r(s),
            this.s = new r(o),
            this.recoveryParam = null,
            !0
        }
        ,
        a.prototype.toDER = function(e) {
            var t = this.r.toArray()
              , f = this.s.toArray();
            for (128 & t[0] && (t = [0].concat(t)),
            128 & f[0] && (f = [0].concat(f)),
            t = s(t),
            f = s(f); !f[0] && !(128 & f[1]); )
                f = f.slice(1);
            var r = [2];
            h(r, t.length),
            (r = r.concat(t)).push(2),
            h(r, f.length);
            var d = r.concat(f)
              , a = [48];
            return h(a, d.length),
            a = a.concat(d),
            i.encode(a, e)
        }
    },
    52709: function(e, t, f) {
        "use strict";
        var r = f(37553)
          , i = f(51455)
          , d = f(42115)
          , a = d.assert
          , n = d.parseBytes
          , c = f(44513)
          , s = f(49528);
        function h(e) {
            if (a("ed25519" === e, "only tested with ed25519 so far"),
            !(this instanceof h))
                return new h(e);
            e = i[e].curve,
            this.curve = e,
            this.g = e.g,
            this.g.precompute(e.n.bitLength() + 1),
            this.pointClass = e.point().constructor,
            this.encodingLength = Math.ceil(e.n.bitLength() / 8),
            this.hash = r.sha512
        }
        e.exports = h,
        h.prototype.sign = function(e, t) {
            e = n(e);
            var f = this.keyFromSecret(t)
              , r = this.hashInt(f.messagePrefix(), e)
              , i = this.g.mul(r)
              , d = this.encodePoint(i)
              , a = this.hashInt(d, f.pubBytes(), e).mul(f.priv())
              , c = r.add(a).umod(this.curve.n);
            return this.makeSignature({
                R: i,
                S: c,
                Rencoded: d
            })
        }
        ,
        h.prototype.verify = function(e, t, f) {
            e = n(e),
            t = this.makeSignature(t);
            var r = this.keyFromPublic(f)
              , i = this.hashInt(t.Rencoded(), r.pubBytes(), e)
              , d = this.g.mul(t.S());
            return t.R().add(r.pub().mul(i)).eq(d)
        }
        ,
        h.prototype.hashInt = function() {
            for (var e = this.hash(), t = 0; t < arguments.length; t++)
                e.update(arguments[t]);
            return d.intFromLE(e.digest()).umod(this.curve.n)
        }
        ,
        h.prototype.keyFromPublic = function(e) {
            return c.fromPublic(this, e)
        }
        ,
        h.prototype.keyFromSecret = function(e) {
            return c.fromSecret(this, e)
        }
        ,
        h.prototype.makeSignature = function(e) {
            return e instanceof s ? e : new s(this,e)
        }
        ,
        h.prototype.encodePoint = function(e) {
            var t = e.getY().toArray("le", this.encodingLength);
            return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0,
            t
        }
        ,
        h.prototype.decodePoint = function(e) {
            var t = (e = d.parseBytes(e)).length - 1
              , f = e.slice(0, t).concat(-129 & e[t])
              , r = 0 !== (128 & e[t])
              , i = d.intFromLE(f);
            return this.curve.pointFromY(i, r)
        }
        ,
        h.prototype.encodeInt = function(e) {
            return e.toArray("le", this.encodingLength)
        }
        ,
        h.prototype.decodeInt = function(e) {
            return d.intFromLE(e)
        }
        ,
        h.prototype.isPoint = function(e) {
            return e instanceof this.pointClass
        }
    },
    44513: function(e, t, f) {
        "use strict";
        var r = f(42115)
          , i = r.assert
          , d = r.parseBytes
          , a = r.cachedProperty;
        function n(e, t) {
            this.eddsa = e,
            this._secret = d(t.secret),
            e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = d(t.pub)
        }
        n.fromPublic = function(e, t) {
            return t instanceof n ? t : new n(e,{
                pub: t
            })
        }
        ,
        n.fromSecret = function(e, t) {
            return t instanceof n ? t : new n(e,{
                secret: t
            })
        }
        ,
        n.prototype.secret = function() {
            return this._secret
        }
        ,
        a(n, "pubBytes", (function() {
            return this.eddsa.encodePoint(this.pub())
        }
        )),
        a(n, "pub", (function() {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
        }
        )),
        a(n, "privBytes", (function() {
            var e = this.eddsa
              , t = this.hash()
              , f = e.encodingLength - 1
              , r = t.slice(0, e.encodingLength);
            return r[0] &= 248,
            r[f] &= 127,
            r[f] |= 64,
            r
        }
        )),
        a(n, "priv", (function() {
            return this.eddsa.decodeInt(this.privBytes())
        }
        )),
        a(n, "hash", (function() {
            return this.eddsa.hash().update(this.secret()).digest()
        }
        )),
        a(n, "messagePrefix", (function() {
            return this.hash().slice(this.eddsa.encodingLength)
        }
        )),
        n.prototype.sign = function(e) {
            return i(this._secret, "KeyPair can only verify"),
            this.eddsa.sign(e, this)
        }
        ,
        n.prototype.verify = function(e, t) {
            return this.eddsa.verify(e, t, this)
        }
        ,
        n.prototype.getSecret = function(e) {
            return i(this._secret, "KeyPair is public only"),
            r.encode(this.secret(), e)
        }
        ,
        n.prototype.getPublic = function(e) {
            return r.encode(this.pubBytes(), e)
        }
        ,
        e.exports = n
    },
    49528: function(e, t, f) {
        "use strict";
        var r = f(4646)
          , i = f(42115)
          , d = i.assert
          , a = i.cachedProperty
          , n = i.parseBytes;
        function c(e, t) {
            this.eddsa = e,
            "object" !== typeof t && (t = n(t)),
            Array.isArray(t) && (t = {
                R: t.slice(0, e.encodingLength),
                S: t.slice(e.encodingLength)
            }),
            d(t.R && t.S, "Signature without R or S"),
            e.isPoint(t.R) && (this._R = t.R),
            t.S instanceof r && (this._S = t.S),
            this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded,
            this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
        }
        a(c, "S", (function() {
            return this.eddsa.decodeInt(this.Sencoded())
        }
        )),
        a(c, "R", (function() {
            return this.eddsa.decodePoint(this.Rencoded())
        }
        )),
        a(c, "Rencoded", (function() {
            return this.eddsa.encodePoint(this.R())
        }
        )),
        a(c, "Sencoded", (function() {
            return this.eddsa.encodeInt(this.S())
        }
        )),
        c.prototype.toBytes = function() {
            return this.Rencoded().concat(this.Sencoded())
        }
        ,
        c.prototype.toHex = function() {
            return i.encode(this.toBytes(), "hex").toUpperCase()
        }
        ,
        e.exports = c
    },
    36418: function(e) {
        e.exports = {
            doubles: {
                step: 4,
                points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]
            },
            naf: {
                wnd: 7,
                points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]
            }
        }
    },
    42115: function(e, t, f) {
        "use strict";
        var r = t
          , i = f(4646)
          , d = f(65701)
          , a = f(42679);
        r.assert = d,
        r.toArray = a.toArray,
        r.zero2 = a.zero2,
        r.toHex = a.toHex,
        r.encode = a.encode,
        r.getNAF = function(e, t, f) {
            var r = new Array(Math.max(e.bitLength(), f) + 1);
            r.fill(0);
            for (var i = 1 << t + 1, d = e.clone(), a = 0; a < r.length; a++) {
                var n, c = d.andln(i - 1);
                d.isOdd() ? (n = c > (i >> 1) - 1 ? (i >> 1) - c : c,
                d.isubn(n)) : n = 0,
                r[a] = n,
                d.iushrn(1)
            }
            return r
        }
        ,
        r.getJSF = function(e, t) {
            var f = [[], []];
            e = e.clone(),
            t = t.clone();
            for (var r, i = 0, d = 0; e.cmpn(-i) > 0 || t.cmpn(-d) > 0; ) {
                var a, n, c = e.andln(3) + i & 3, s = t.andln(3) + d & 3;
                3 === c && (c = -1),
                3 === s && (s = -1),
                a = 0 === (1 & c) ? 0 : 3 !== (r = e.andln(7) + i & 7) && 5 !== r || 2 !== s ? c : -c,
                f[0].push(a),
                n = 0 === (1 & s) ? 0 : 3 !== (r = t.andln(7) + d & 7) && 5 !== r || 2 !== c ? s : -s,
                f[1].push(n),
                2 * i === a + 1 && (i = 1 - i),
                2 * d === n + 1 && (d = 1 - d),
                e.iushrn(1),
                t.iushrn(1)
            }
            return f
        }
        ,
        r.cachedProperty = function(e, t, f) {
            var r = "_" + t;
            e.prototype[t] = function() {
                return void 0 !== this[r] ? this[r] : this[r] = f.call(this)
            }
        }
        ,
        r.parseBytes = function(e) {
            return "string" === typeof e ? r.toArray(e, "hex") : e
        }
        ,
        r.intFromLE = function(e) {
            return new i(e,"hex","le")
        }
    },
    4646: function(e, t, f) {
        !function(e, t) {
            "use strict";
            function r(e, t) {
                if (!e)
                    throw new Error(t || "Assertion failed")
            }
            function i(e, t) {
                e.super_ = t;
                var f = function() {};
                f.prototype = t.prototype,
                e.prototype = new f,
                e.prototype.constructor = e
            }
            function d(e, t, f) {
                if (d.isBN(e))
                    return e;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== e && ("le" !== t && "be" !== t || (f = t,
                t = 10),
                this._init(e || 0, t || 10, f || "be"))
            }
            var a;
            "object" === typeof e ? e.exports = d : t.BN = d,
            d.BN = d,
            d.wordSize = 26;
            try {
                a = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : f(85568).Buffer
            } catch (I) {}
            function n(e, t) {
                var f = e.charCodeAt(t);
                return f >= 65 && f <= 70 ? f - 55 : f >= 97 && f <= 102 ? f - 87 : f - 48 & 15
            }
            function c(e, t, f) {
                var r = n(e, f);
                return f - 1 >= t && (r |= n(e, f - 1) << 4),
                r
            }
            function s(e, t, f, r) {
                for (var i = 0, d = Math.min(e.length, f), a = t; a < d; a++) {
                    var n = e.charCodeAt(a) - 48;
                    i *= r,
                    i += n >= 49 ? n - 49 + 10 : n >= 17 ? n - 17 + 10 : n
                }
                return i
            }
            d.isBN = function(e) {
                return e instanceof d || null !== e && "object" === typeof e && e.constructor.wordSize === d.wordSize && Array.isArray(e.words)
            }
            ,
            d.max = function(e, t) {
                return e.cmp(t) > 0 ? e : t
            }
            ,
            d.min = function(e, t) {
                return e.cmp(t) < 0 ? e : t
            }
            ,
            d.prototype._init = function(e, t, f) {
                if ("number" === typeof e)
                    return this._initNumber(e, t, f);
                if ("object" === typeof e)
                    return this._initArray(e, t, f);
                "hex" === t && (t = 16),
                r(t === (0 | t) && t >= 2 && t <= 36);
                var i = 0;
                "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++,
                this.negative = 1),
                i < e.length && (16 === t ? this._parseHex(e, i, f) : (this._parseBase(e, t, i),
                "le" === f && this._initArray(this.toArray(), t, f)))
            }
            ,
            d.prototype._initNumber = function(e, t, f) {
                e < 0 && (this.negative = 1,
                e = -e),
                e < 67108864 ? (this.words = [67108863 & e],
                this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863],
                this.length = 2) : (r(e < 9007199254740992),
                this.words = [67108863 & e, e / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === f && this._initArray(this.toArray(), t, f)
            }
            ,
            d.prototype._initArray = function(e, t, f) {
                if (r("number" === typeof e.length),
                e.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(e.length / 3),
                this.words = new Array(this.length);
                for (var i = 0; i < this.length; i++)
                    this.words[i] = 0;
                var d, a, n = 0;
                if ("be" === f)
                    for (i = e.length - 1,
                    d = 0; i >= 0; i -= 3)
                        a = e[i] | e[i - 1] << 8 | e[i - 2] << 16,
                        this.words[d] |= a << n & 67108863,
                        this.words[d + 1] = a >>> 26 - n & 67108863,
                        (n += 24) >= 26 && (n -= 26,
                        d++);
                else if ("le" === f)
                    for (i = 0,
                    d = 0; i < e.length; i += 3)
                        a = e[i] | e[i + 1] << 8 | e[i + 2] << 16,
                        this.words[d] |= a << n & 67108863,
                        this.words[d + 1] = a >>> 26 - n & 67108863,
                        (n += 24) >= 26 && (n -= 26,
                        d++);
                return this.strip()
            }
            ,
            d.prototype._parseHex = function(e, t, f) {
                this.length = Math.ceil((e.length - t) / 6),
                this.words = new Array(this.length);
                for (var r = 0; r < this.length; r++)
                    this.words[r] = 0;
                var i, d = 0, a = 0;
                if ("be" === f)
                    for (r = e.length - 1; r >= t; r -= 2)
                        i = c(e, t, r) << d,
                        this.words[a] |= 67108863 & i,
                        d >= 18 ? (d -= 18,
                        a += 1,
                        this.words[a] |= i >>> 26) : d += 8;
                else
                    for (r = (e.length - t) % 2 === 0 ? t + 1 : t; r < e.length; r += 2)
                        i = c(e, t, r) << d,
                        this.words[a] |= 67108863 & i,
                        d >= 18 ? (d -= 18,
                        a += 1,
                        this.words[a] |= i >>> 26) : d += 8;
                this.strip()
            }
            ,
            d.prototype._parseBase = function(e, t, f) {
                this.words = [0],
                this.length = 1;
                for (var r = 0, i = 1; i <= 67108863; i *= t)
                    r++;
                r--,
                i = i / t | 0;
                for (var d = e.length - f, a = d % r, n = Math.min(d, d - a) + f, c = 0, h = f; h < n; h += r)
                    c = s(e, h, h + r, t),
                    this.imuln(i),
                    this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                if (0 !== a) {
                    var o = 1;
                    for (c = s(e, h, e.length, t),
                    h = 0; h < a; h++)
                        o *= t;
                    this.imuln(o),
                    this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                }
                this.strip()
            }
            ,
            d.prototype.copy = function(e) {
                e.words = new Array(this.length);
                for (var t = 0; t < this.length; t++)
                    e.words[t] = this.words[t];
                e.length = this.length,
                e.negative = this.negative,
                e.red = this.red
            }
            ,
            d.prototype.clone = function() {
                var e = new d(null);
                return this.copy(e),
                e
            }
            ,
            d.prototype._expand = function(e) {
                for (; this.length < e; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            d.prototype.strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            d.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            d.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            ;
            var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , o = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , u = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            function b(e, t, f) {
                f.negative = t.negative ^ e.negative;
                var r = e.length + t.length | 0;
                f.length = r,
                r = r - 1 | 0;
                var i = 0 | e.words[0]
                  , d = 0 | t.words[0]
                  , a = i * d
                  , n = 67108863 & a
                  , c = a / 67108864 | 0;
                f.words[0] = n;
                for (var s = 1; s < r; s++) {
                    for (var h = c >>> 26, o = 67108863 & c, u = Math.min(s, t.length - 1), b = Math.max(0, s - e.length + 1); b <= u; b++) {
                        var l = s - b | 0;
                        h += (a = (i = 0 | e.words[l]) * (d = 0 | t.words[b]) + o) / 67108864 | 0,
                        o = 67108863 & a
                    }
                    f.words[s] = 0 | o,
                    c = 0 | h
                }
                return 0 !== c ? f.words[s] = 0 | c : f.length--,
                f.strip()
            }
            d.prototype.toString = function(e, t) {
                var f;
                if (t = 0 | t || 1,
                16 === (e = e || 10) || "hex" === e) {
                    f = "";
                    for (var i = 0, d = 0, a = 0; a < this.length; a++) {
                        var n = this.words[a]
                          , c = (16777215 & (n << i | d)).toString(16);
                        f = 0 !== (d = n >>> 24 - i & 16777215) || a !== this.length - 1 ? h[6 - c.length] + c + f : c + f,
                        (i += 2) >= 26 && (i -= 26,
                        a--)
                    }
                    for (0 !== d && (f = d.toString(16) + f); f.length % t !== 0; )
                        f = "0" + f;
                    return 0 !== this.negative && (f = "-" + f),
                    f
                }
                if (e === (0 | e) && e >= 2 && e <= 36) {
                    var s = o[e]
                      , b = u[e];
                    f = "";
                    var l = this.clone();
                    for (l.negative = 0; !l.isZero(); ) {
                        var p = l.modn(b).toString(e);
                        f = (l = l.idivn(b)).isZero() ? p + f : h[s - p.length] + p + f
                    }
                    for (this.isZero() && (f = "0" + f); f.length % t !== 0; )
                        f = "0" + f;
                    return 0 !== this.negative && (f = "-" + f),
                    f
                }
                r(!1, "Base should be between 2 and 36")
            }
            ,
            d.prototype.toNumber = function() {
                var e = this.words[0];
                return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
            }
            ,
            d.prototype.toJSON = function() {
                return this.toString(16)
            }
            ,
            d.prototype.toBuffer = function(e, t) {
                return r("undefined" !== typeof a),
                this.toArrayLike(a, e, t)
            }
            ,
            d.prototype.toArray = function(e, t) {
                return this.toArrayLike(Array, e, t)
            }
            ,
            d.prototype.toArrayLike = function(e, t, f) {
                var i = this.byteLength()
                  , d = f || Math.max(1, i);
                r(i <= d, "byte array longer than desired length"),
                r(d > 0, "Requested array length <= 0"),
                this.strip();
                var a, n, c = "le" === t, s = new e(d), h = this.clone();
                if (c) {
                    for (n = 0; !h.isZero(); n++)
                        a = h.andln(255),
                        h.iushrn(8),
                        s[n] = a;
                    for (; n < d; n++)
                        s[n] = 0
                } else {
                    for (n = 0; n < d - i; n++)
                        s[n] = 0;
                    for (n = 0; !h.isZero(); n++)
                        a = h.andln(255),
                        h.iushrn(8),
                        s[d - n - 1] = a
                }
                return s
            }
            ,
            Math.clz32 ? d.prototype._countBits = function(e) {
                return 32 - Math.clz32(e)
            }
            : d.prototype._countBits = function(e) {
                var t = e
                  , f = 0;
                return t >= 4096 && (f += 13,
                t >>>= 13),
                t >= 64 && (f += 7,
                t >>>= 7),
                t >= 8 && (f += 4,
                t >>>= 4),
                t >= 2 && (f += 2,
                t >>>= 2),
                f + t
            }
            ,
            d.prototype._zeroBits = function(e) {
                if (0 === e)
                    return 26;
                var t = e
                  , f = 0;
                return 0 === (8191 & t) && (f += 13,
                t >>>= 13),
                0 === (127 & t) && (f += 7,
                t >>>= 7),
                0 === (15 & t) && (f += 4,
                t >>>= 4),
                0 === (3 & t) && (f += 2,
                t >>>= 2),
                0 === (1 & t) && f++,
                f
            }
            ,
            d.prototype.bitLength = function() {
                var e = this.words[this.length - 1]
                  , t = this._countBits(e);
                return 26 * (this.length - 1) + t
            }
            ,
            d.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var e = 0, t = 0; t < this.length; t++) {
                    var f = this._zeroBits(this.words[t]);
                    if (e += f,
                    26 !== f)
                        break
                }
                return e
            }
            ,
            d.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            d.prototype.toTwos = function(e) {
                return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
            }
            ,
            d.prototype.fromTwos = function(e) {
                return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
            }
            ,
            d.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            d.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            d.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            d.prototype.iuor = function(e) {
                for (; this.length < e.length; )
                    this.words[this.length++] = 0;
                for (var t = 0; t < e.length; t++)
                    this.words[t] = this.words[t] | e.words[t];
                return this.strip()
            }
            ,
            d.prototype.ior = function(e) {
                return r(0 === (this.negative | e.negative)),
                this.iuor(e)
            }
            ,
            d.prototype.or = function(e) {
                return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
            }
            ,
            d.prototype.uor = function(e) {
                return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
            }
            ,
            d.prototype.iuand = function(e) {
                var t;
                t = this.length > e.length ? e : this;
                for (var f = 0; f < t.length; f++)
                    this.words[f] = this.words[f] & e.words[f];
                return this.length = t.length,
                this.strip()
            }
            ,
            d.prototype.iand = function(e) {
                return r(0 === (this.negative | e.negative)),
                this.iuand(e)
            }
            ,
            d.prototype.and = function(e) {
                return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
            }
            ,
            d.prototype.uand = function(e) {
                return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
            }
            ,
            d.prototype.iuxor = function(e) {
                var t, f;
                this.length > e.length ? (t = this,
                f = e) : (t = e,
                f = this);
                for (var r = 0; r < f.length; r++)
                    this.words[r] = t.words[r] ^ f.words[r];
                if (this !== t)
                    for (; r < t.length; r++)
                        this.words[r] = t.words[r];
                return this.length = t.length,
                this.strip()
            }
            ,
            d.prototype.ixor = function(e) {
                return r(0 === (this.negative | e.negative)),
                this.iuxor(e)
            }
            ,
            d.prototype.xor = function(e) {
                return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
            }
            ,
            d.prototype.uxor = function(e) {
                return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
            }
            ,
            d.prototype.inotn = function(e) {
                r("number" === typeof e && e >= 0);
                var t = 0 | Math.ceil(e / 26)
                  , f = e % 26;
                this._expand(t),
                f > 0 && t--;
                for (var i = 0; i < t; i++)
                    this.words[i] = 67108863 & ~this.words[i];
                return f > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - f),
                this.strip()
            }
            ,
            d.prototype.notn = function(e) {
                return this.clone().inotn(e)
            }
            ,
            d.prototype.setn = function(e, t) {
                r("number" === typeof e && e >= 0);
                var f = e / 26 | 0
                  , i = e % 26;
                return this._expand(f + 1),
                this.words[f] = t ? this.words[f] | 1 << i : this.words[f] & ~(1 << i),
                this.strip()
            }
            ,
            d.prototype.iadd = function(e) {
                var t, f, r;
                if (0 !== this.negative && 0 === e.negative)
                    return this.negative = 0,
                    t = this.isub(e),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== e.negative)
                    return e.negative = 0,
                    t = this.isub(e),
                    e.negative = 1,
                    t._normSign();
                this.length > e.length ? (f = this,
                r = e) : (f = e,
                r = this);
                for (var i = 0, d = 0; d < r.length; d++)
                    t = (0 | f.words[d]) + (0 | r.words[d]) + i,
                    this.words[d] = 67108863 & t,
                    i = t >>> 26;
                for (; 0 !== i && d < f.length; d++)
                    t = (0 | f.words[d]) + i,
                    this.words[d] = 67108863 & t,
                    i = t >>> 26;
                if (this.length = f.length,
                0 !== i)
                    this.words[this.length] = i,
                    this.length++;
                else if (f !== this)
                    for (; d < f.length; d++)
                        this.words[d] = f.words[d];
                return this
            }
            ,
            d.prototype.add = function(e) {
                var t;
                return 0 !== e.negative && 0 === this.negative ? (e.negative = 0,
                t = this.sub(e),
                e.negative ^= 1,
                t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0,
                t = e.sub(this),
                this.negative = 1,
                t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
            }
            ,
            d.prototype.isub = function(e) {
                if (0 !== e.negative) {
                    e.negative = 0;
                    var t = this.iadd(e);
                    return e.negative = 1,
                    t._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(e),
                    this.negative = 1,
                    this._normSign();
                var f, r, i = this.cmp(e);
                if (0 === i)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                i > 0 ? (f = this,
                r = e) : (f = e,
                r = this);
                for (var d = 0, a = 0; a < r.length; a++)
                    d = (t = (0 | f.words[a]) - (0 | r.words[a]) + d) >> 26,
                    this.words[a] = 67108863 & t;
                for (; 0 !== d && a < f.length; a++)
                    d = (t = (0 | f.words[a]) + d) >> 26,
                    this.words[a] = 67108863 & t;
                if (0 === d && a < f.length && f !== this)
                    for (; a < f.length; a++)
                        this.words[a] = f.words[a];
                return this.length = Math.max(this.length, a),
                f !== this && (this.negative = 1),
                this.strip()
            }
            ,
            d.prototype.sub = function(e) {
                return this.clone().isub(e)
            }
            ;
            var l = function(e, t, f) {
                var r, i, d, a = e.words, n = t.words, c = f.words, s = 0, h = 0 | a[0], o = 8191 & h, u = h >>> 13, b = 0 | a[1], l = 8191 & b, p = b >>> 13, m = 0 | a[2], v = 8191 & m, y = m >>> 13, g = 0 | a[3], M = 8191 & g, w = g >>> 13, S = 0 | a[4], A = 8191 & S, x = S >>> 13, I = 0 | a[5], _ = 8191 & I, q = I >>> 13, z = 0 | a[6], R = 8191 & z, P = z >>> 13, k = 0 | a[7], N = 8191 & k, B = k >>> 13, E = 0 | a[8], L = 8191 & E, O = E >>> 13, j = 0 | a[9], F = 8191 & j, T = j >>> 13, Z = 0 | n[0], C = 8191 & Z, J = Z >>> 13, X = 0 | n[1], D = 8191 & X, K = X >>> 13, Y = 0 | n[2], W = 8191 & Y, U = Y >>> 13, H = 0 | n[3], G = 8191 & H, Q = H >>> 13, V = 0 | n[4], $ = 8191 & V, ee = V >>> 13, te = 0 | n[5], fe = 8191 & te, re = te >>> 13, ie = 0 | n[6], de = 8191 & ie, ae = ie >>> 13, ne = 0 | n[7], ce = 8191 & ne, se = ne >>> 13, he = 0 | n[8], oe = 8191 & he, ue = he >>> 13, be = 0 | n[9], le = 8191 & be, pe = be >>> 13;
                f.negative = e.negative ^ t.negative,
                f.length = 19;
                var me = (s + (r = Math.imul(o, C)) | 0) + ((8191 & (i = (i = Math.imul(o, J)) + Math.imul(u, C) | 0)) << 13) | 0;
                s = ((d = Math.imul(u, J)) + (i >>> 13) | 0) + (me >>> 26) | 0,
                me &= 67108863,
                r = Math.imul(l, C),
                i = (i = Math.imul(l, J)) + Math.imul(p, C) | 0,
                d = Math.imul(p, J);
                var ve = (s + (r = r + Math.imul(o, D) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, K) | 0) + Math.imul(u, D) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, K) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0,
                ve &= 67108863,
                r = Math.imul(v, C),
                i = (i = Math.imul(v, J)) + Math.imul(y, C) | 0,
                d = Math.imul(y, J),
                r = r + Math.imul(l, D) | 0,
                i = (i = i + Math.imul(l, K) | 0) + Math.imul(p, D) | 0,
                d = d + Math.imul(p, K) | 0;
                var ye = (s + (r = r + Math.imul(o, W) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, U) | 0) + Math.imul(u, W) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, U) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0,
                ye &= 67108863,
                r = Math.imul(M, C),
                i = (i = Math.imul(M, J)) + Math.imul(w, C) | 0,
                d = Math.imul(w, J),
                r = r + Math.imul(v, D) | 0,
                i = (i = i + Math.imul(v, K) | 0) + Math.imul(y, D) | 0,
                d = d + Math.imul(y, K) | 0,
                r = r + Math.imul(l, W) | 0,
                i = (i = i + Math.imul(l, U) | 0) + Math.imul(p, W) | 0,
                d = d + Math.imul(p, U) | 0;
                var ge = (s + (r = r + Math.imul(o, G) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, Q) | 0) + Math.imul(u, G) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, Q) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0,
                ge &= 67108863,
                r = Math.imul(A, C),
                i = (i = Math.imul(A, J)) + Math.imul(x, C) | 0,
                d = Math.imul(x, J),
                r = r + Math.imul(M, D) | 0,
                i = (i = i + Math.imul(M, K) | 0) + Math.imul(w, D) | 0,
                d = d + Math.imul(w, K) | 0,
                r = r + Math.imul(v, W) | 0,
                i = (i = i + Math.imul(v, U) | 0) + Math.imul(y, W) | 0,
                d = d + Math.imul(y, U) | 0,
                r = r + Math.imul(l, G) | 0,
                i = (i = i + Math.imul(l, Q) | 0) + Math.imul(p, G) | 0,
                d = d + Math.imul(p, Q) | 0;
                var Me = (s + (r = r + Math.imul(o, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, ee) | 0) + Math.imul(u, $) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, ee) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0,
                Me &= 67108863,
                r = Math.imul(_, C),
                i = (i = Math.imul(_, J)) + Math.imul(q, C) | 0,
                d = Math.imul(q, J),
                r = r + Math.imul(A, D) | 0,
                i = (i = i + Math.imul(A, K) | 0) + Math.imul(x, D) | 0,
                d = d + Math.imul(x, K) | 0,
                r = r + Math.imul(M, W) | 0,
                i = (i = i + Math.imul(M, U) | 0) + Math.imul(w, W) | 0,
                d = d + Math.imul(w, U) | 0,
                r = r + Math.imul(v, G) | 0,
                i = (i = i + Math.imul(v, Q) | 0) + Math.imul(y, G) | 0,
                d = d + Math.imul(y, Q) | 0,
                r = r + Math.imul(l, $) | 0,
                i = (i = i + Math.imul(l, ee) | 0) + Math.imul(p, $) | 0,
                d = d + Math.imul(p, ee) | 0;
                var we = (s + (r = r + Math.imul(o, fe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, re) | 0) + Math.imul(u, fe) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, re) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0,
                we &= 67108863,
                r = Math.imul(R, C),
                i = (i = Math.imul(R, J)) + Math.imul(P, C) | 0,
                d = Math.imul(P, J),
                r = r + Math.imul(_, D) | 0,
                i = (i = i + Math.imul(_, K) | 0) + Math.imul(q, D) | 0,
                d = d + Math.imul(q, K) | 0,
                r = r + Math.imul(A, W) | 0,
                i = (i = i + Math.imul(A, U) | 0) + Math.imul(x, W) | 0,
                d = d + Math.imul(x, U) | 0,
                r = r + Math.imul(M, G) | 0,
                i = (i = i + Math.imul(M, Q) | 0) + Math.imul(w, G) | 0,
                d = d + Math.imul(w, Q) | 0,
                r = r + Math.imul(v, $) | 0,
                i = (i = i + Math.imul(v, ee) | 0) + Math.imul(y, $) | 0,
                d = d + Math.imul(y, ee) | 0,
                r = r + Math.imul(l, fe) | 0,
                i = (i = i + Math.imul(l, re) | 0) + Math.imul(p, fe) | 0,
                d = d + Math.imul(p, re) | 0;
                var Se = (s + (r = r + Math.imul(o, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, ae) | 0) + Math.imul(u, de) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, ae) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0,
                Se &= 67108863,
                r = Math.imul(N, C),
                i = (i = Math.imul(N, J)) + Math.imul(B, C) | 0,
                d = Math.imul(B, J),
                r = r + Math.imul(R, D) | 0,
                i = (i = i + Math.imul(R, K) | 0) + Math.imul(P, D) | 0,
                d = d + Math.imul(P, K) | 0,
                r = r + Math.imul(_, W) | 0,
                i = (i = i + Math.imul(_, U) | 0) + Math.imul(q, W) | 0,
                d = d + Math.imul(q, U) | 0,
                r = r + Math.imul(A, G) | 0,
                i = (i = i + Math.imul(A, Q) | 0) + Math.imul(x, G) | 0,
                d = d + Math.imul(x, Q) | 0,
                r = r + Math.imul(M, $) | 0,
                i = (i = i + Math.imul(M, ee) | 0) + Math.imul(w, $) | 0,
                d = d + Math.imul(w, ee) | 0,
                r = r + Math.imul(v, fe) | 0,
                i = (i = i + Math.imul(v, re) | 0) + Math.imul(y, fe) | 0,
                d = d + Math.imul(y, re) | 0,
                r = r + Math.imul(l, de) | 0,
                i = (i = i + Math.imul(l, ae) | 0) + Math.imul(p, de) | 0,
                d = d + Math.imul(p, ae) | 0;
                var Ae = (s + (r = r + Math.imul(o, ce) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, se) | 0) + Math.imul(u, ce) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, se) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0,
                Ae &= 67108863,
                r = Math.imul(L, C),
                i = (i = Math.imul(L, J)) + Math.imul(O, C) | 0,
                d = Math.imul(O, J),
                r = r + Math.imul(N, D) | 0,
                i = (i = i + Math.imul(N, K) | 0) + Math.imul(B, D) | 0,
                d = d + Math.imul(B, K) | 0,
                r = r + Math.imul(R, W) | 0,
                i = (i = i + Math.imul(R, U) | 0) + Math.imul(P, W) | 0,
                d = d + Math.imul(P, U) | 0,
                r = r + Math.imul(_, G) | 0,
                i = (i = i + Math.imul(_, Q) | 0) + Math.imul(q, G) | 0,
                d = d + Math.imul(q, Q) | 0,
                r = r + Math.imul(A, $) | 0,
                i = (i = i + Math.imul(A, ee) | 0) + Math.imul(x, $) | 0,
                d = d + Math.imul(x, ee) | 0,
                r = r + Math.imul(M, fe) | 0,
                i = (i = i + Math.imul(M, re) | 0) + Math.imul(w, fe) | 0,
                d = d + Math.imul(w, re) | 0,
                r = r + Math.imul(v, de) | 0,
                i = (i = i + Math.imul(v, ae) | 0) + Math.imul(y, de) | 0,
                d = d + Math.imul(y, ae) | 0,
                r = r + Math.imul(l, ce) | 0,
                i = (i = i + Math.imul(l, se) | 0) + Math.imul(p, ce) | 0,
                d = d + Math.imul(p, se) | 0;
                var xe = (s + (r = r + Math.imul(o, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, ue) | 0) + Math.imul(u, oe) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, ue) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0,
                xe &= 67108863,
                r = Math.imul(F, C),
                i = (i = Math.imul(F, J)) + Math.imul(T, C) | 0,
                d = Math.imul(T, J),
                r = r + Math.imul(L, D) | 0,
                i = (i = i + Math.imul(L, K) | 0) + Math.imul(O, D) | 0,
                d = d + Math.imul(O, K) | 0,
                r = r + Math.imul(N, W) | 0,
                i = (i = i + Math.imul(N, U) | 0) + Math.imul(B, W) | 0,
                d = d + Math.imul(B, U) | 0,
                r = r + Math.imul(R, G) | 0,
                i = (i = i + Math.imul(R, Q) | 0) + Math.imul(P, G) | 0,
                d = d + Math.imul(P, Q) | 0,
                r = r + Math.imul(_, $) | 0,
                i = (i = i + Math.imul(_, ee) | 0) + Math.imul(q, $) | 0,
                d = d + Math.imul(q, ee) | 0,
                r = r + Math.imul(A, fe) | 0,
                i = (i = i + Math.imul(A, re) | 0) + Math.imul(x, fe) | 0,
                d = d + Math.imul(x, re) | 0,
                r = r + Math.imul(M, de) | 0,
                i = (i = i + Math.imul(M, ae) | 0) + Math.imul(w, de) | 0,
                d = d + Math.imul(w, ae) | 0,
                r = r + Math.imul(v, ce) | 0,
                i = (i = i + Math.imul(v, se) | 0) + Math.imul(y, ce) | 0,
                d = d + Math.imul(y, se) | 0,
                r = r + Math.imul(l, oe) | 0,
                i = (i = i + Math.imul(l, ue) | 0) + Math.imul(p, oe) | 0,
                d = d + Math.imul(p, ue) | 0;
                var Ie = (s + (r = r + Math.imul(o, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(o, pe) | 0) + Math.imul(u, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(u, pe) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0,
                Ie &= 67108863,
                r = Math.imul(F, D),
                i = (i = Math.imul(F, K)) + Math.imul(T, D) | 0,
                d = Math.imul(T, K),
                r = r + Math.imul(L, W) | 0,
                i = (i = i + Math.imul(L, U) | 0) + Math.imul(O, W) | 0,
                d = d + Math.imul(O, U) | 0,
                r = r + Math.imul(N, G) | 0,
                i = (i = i + Math.imul(N, Q) | 0) + Math.imul(B, G) | 0,
                d = d + Math.imul(B, Q) | 0,
                r = r + Math.imul(R, $) | 0,
                i = (i = i + Math.imul(R, ee) | 0) + Math.imul(P, $) | 0,
                d = d + Math.imul(P, ee) | 0,
                r = r + Math.imul(_, fe) | 0,
                i = (i = i + Math.imul(_, re) | 0) + Math.imul(q, fe) | 0,
                d = d + Math.imul(q, re) | 0,
                r = r + Math.imul(A, de) | 0,
                i = (i = i + Math.imul(A, ae) | 0) + Math.imul(x, de) | 0,
                d = d + Math.imul(x, ae) | 0,
                r = r + Math.imul(M, ce) | 0,
                i = (i = i + Math.imul(M, se) | 0) + Math.imul(w, ce) | 0,
                d = d + Math.imul(w, se) | 0,
                r = r + Math.imul(v, oe) | 0,
                i = (i = i + Math.imul(v, ue) | 0) + Math.imul(y, oe) | 0,
                d = d + Math.imul(y, ue) | 0;
                var _e = (s + (r = r + Math.imul(l, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, pe) | 0) + Math.imul(p, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(p, pe) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0,
                _e &= 67108863,
                r = Math.imul(F, W),
                i = (i = Math.imul(F, U)) + Math.imul(T, W) | 0,
                d = Math.imul(T, U),
                r = r + Math.imul(L, G) | 0,
                i = (i = i + Math.imul(L, Q) | 0) + Math.imul(O, G) | 0,
                d = d + Math.imul(O, Q) | 0,
                r = r + Math.imul(N, $) | 0,
                i = (i = i + Math.imul(N, ee) | 0) + Math.imul(B, $) | 0,
                d = d + Math.imul(B, ee) | 0,
                r = r + Math.imul(R, fe) | 0,
                i = (i = i + Math.imul(R, re) | 0) + Math.imul(P, fe) | 0,
                d = d + Math.imul(P, re) | 0,
                r = r + Math.imul(_, de) | 0,
                i = (i = i + Math.imul(_, ae) | 0) + Math.imul(q, de) | 0,
                d = d + Math.imul(q, ae) | 0,
                r = r + Math.imul(A, ce) | 0,
                i = (i = i + Math.imul(A, se) | 0) + Math.imul(x, ce) | 0,
                d = d + Math.imul(x, se) | 0,
                r = r + Math.imul(M, oe) | 0,
                i = (i = i + Math.imul(M, ue) | 0) + Math.imul(w, oe) | 0,
                d = d + Math.imul(w, ue) | 0;
                var qe = (s + (r = r + Math.imul(v, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, pe) | 0) + Math.imul(y, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(y, pe) | 0) + (i >>> 13) | 0) + (qe >>> 26) | 0,
                qe &= 67108863,
                r = Math.imul(F, G),
                i = (i = Math.imul(F, Q)) + Math.imul(T, G) | 0,
                d = Math.imul(T, Q),
                r = r + Math.imul(L, $) | 0,
                i = (i = i + Math.imul(L, ee) | 0) + Math.imul(O, $) | 0,
                d = d + Math.imul(O, ee) | 0,
                r = r + Math.imul(N, fe) | 0,
                i = (i = i + Math.imul(N, re) | 0) + Math.imul(B, fe) | 0,
                d = d + Math.imul(B, re) | 0,
                r = r + Math.imul(R, de) | 0,
                i = (i = i + Math.imul(R, ae) | 0) + Math.imul(P, de) | 0,
                d = d + Math.imul(P, ae) | 0,
                r = r + Math.imul(_, ce) | 0,
                i = (i = i + Math.imul(_, se) | 0) + Math.imul(q, ce) | 0,
                d = d + Math.imul(q, se) | 0,
                r = r + Math.imul(A, oe) | 0,
                i = (i = i + Math.imul(A, ue) | 0) + Math.imul(x, oe) | 0,
                d = d + Math.imul(x, ue) | 0;
                var ze = (s + (r = r + Math.imul(M, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, pe) | 0) + Math.imul(w, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(w, pe) | 0) + (i >>> 13) | 0) + (ze >>> 26) | 0,
                ze &= 67108863,
                r = Math.imul(F, $),
                i = (i = Math.imul(F, ee)) + Math.imul(T, $) | 0,
                d = Math.imul(T, ee),
                r = r + Math.imul(L, fe) | 0,
                i = (i = i + Math.imul(L, re) | 0) + Math.imul(O, fe) | 0,
                d = d + Math.imul(O, re) | 0,
                r = r + Math.imul(N, de) | 0,
                i = (i = i + Math.imul(N, ae) | 0) + Math.imul(B, de) | 0,
                d = d + Math.imul(B, ae) | 0,
                r = r + Math.imul(R, ce) | 0,
                i = (i = i + Math.imul(R, se) | 0) + Math.imul(P, ce) | 0,
                d = d + Math.imul(P, se) | 0,
                r = r + Math.imul(_, oe) | 0,
                i = (i = i + Math.imul(_, ue) | 0) + Math.imul(q, oe) | 0,
                d = d + Math.imul(q, ue) | 0;
                var Re = (s + (r = r + Math.imul(A, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, pe) | 0) + Math.imul(x, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(x, pe) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0,
                Re &= 67108863,
                r = Math.imul(F, fe),
                i = (i = Math.imul(F, re)) + Math.imul(T, fe) | 0,
                d = Math.imul(T, re),
                r = r + Math.imul(L, de) | 0,
                i = (i = i + Math.imul(L, ae) | 0) + Math.imul(O, de) | 0,
                d = d + Math.imul(O, ae) | 0,
                r = r + Math.imul(N, ce) | 0,
                i = (i = i + Math.imul(N, se) | 0) + Math.imul(B, ce) | 0,
                d = d + Math.imul(B, se) | 0,
                r = r + Math.imul(R, oe) | 0,
                i = (i = i + Math.imul(R, ue) | 0) + Math.imul(P, oe) | 0,
                d = d + Math.imul(P, ue) | 0;
                var Pe = (s + (r = r + Math.imul(_, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, pe) | 0) + Math.imul(q, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(q, pe) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0,
                Pe &= 67108863,
                r = Math.imul(F, de),
                i = (i = Math.imul(F, ae)) + Math.imul(T, de) | 0,
                d = Math.imul(T, ae),
                r = r + Math.imul(L, ce) | 0,
                i = (i = i + Math.imul(L, se) | 0) + Math.imul(O, ce) | 0,
                d = d + Math.imul(O, se) | 0,
                r = r + Math.imul(N, oe) | 0,
                i = (i = i + Math.imul(N, ue) | 0) + Math.imul(B, oe) | 0,
                d = d + Math.imul(B, ue) | 0;
                var ke = (s + (r = r + Math.imul(R, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, pe) | 0) + Math.imul(P, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(P, pe) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0,
                ke &= 67108863,
                r = Math.imul(F, ce),
                i = (i = Math.imul(F, se)) + Math.imul(T, ce) | 0,
                d = Math.imul(T, se),
                r = r + Math.imul(L, oe) | 0,
                i = (i = i + Math.imul(L, ue) | 0) + Math.imul(O, oe) | 0,
                d = d + Math.imul(O, ue) | 0;
                var Ne = (s + (r = r + Math.imul(N, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, pe) | 0) + Math.imul(B, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(B, pe) | 0) + (i >>> 13) | 0) + (Ne >>> 26) | 0,
                Ne &= 67108863,
                r = Math.imul(F, oe),
                i = (i = Math.imul(F, ue)) + Math.imul(T, oe) | 0,
                d = Math.imul(T, ue);
                var Be = (s + (r = r + Math.imul(L, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, pe) | 0) + Math.imul(O, le) | 0)) << 13) | 0;
                s = ((d = d + Math.imul(O, pe) | 0) + (i >>> 13) | 0) + (Be >>> 26) | 0,
                Be &= 67108863;
                var Ee = (s + (r = Math.imul(F, le)) | 0) + ((8191 & (i = (i = Math.imul(F, pe)) + Math.imul(T, le) | 0)) << 13) | 0;
                return s = ((d = Math.imul(T, pe)) + (i >>> 13) | 0) + (Ee >>> 26) | 0,
                Ee &= 67108863,
                c[0] = me,
                c[1] = ve,
                c[2] = ye,
                c[3] = ge,
                c[4] = Me,
                c[5] = we,
                c[6] = Se,
                c[7] = Ae,
                c[8] = xe,
                c[9] = Ie,
                c[10] = _e,
                c[11] = qe,
                c[12] = ze,
                c[13] = Re,
                c[14] = Pe,
                c[15] = ke,
                c[16] = Ne,
                c[17] = Be,
                c[18] = Ee,
                0 !== s && (c[19] = s,
                f.length++),
                f
            };
            function p(e, t, f) {
                return (new m).mulp(e, t, f)
            }
            function m(e, t) {
                this.x = e,
                this.y = t
            }
            Math.imul || (l = b),
            d.prototype.mulTo = function(e, t) {
                var f, r = this.length + e.length;
                return f = 10 === this.length && 10 === e.length ? l(this, e, t) : r < 63 ? b(this, e, t) : r < 1024 ? function(e, t, f) {
                    f.negative = t.negative ^ e.negative,
                    f.length = e.length + t.length;
                    for (var r = 0, i = 0, d = 0; d < f.length - 1; d++) {
                        var a = i;
                        i = 0;
                        for (var n = 67108863 & r, c = Math.min(d, t.length - 1), s = Math.max(0, d - e.length + 1); s <= c; s++) {
                            var h = d - s
                              , o = (0 | e.words[h]) * (0 | t.words[s])
                              , u = 67108863 & o;
                            n = 67108863 & (u = u + n | 0),
                            i += (a = (a = a + (o / 67108864 | 0) | 0) + (u >>> 26) | 0) >>> 26,
                            a &= 67108863
                        }
                        f.words[d] = n,
                        r = a,
                        a = i
                    }
                    return 0 !== r ? f.words[d] = r : f.length--,
                    f.strip()
                }(this, e, t) : p(this, e, t),
                f
            }
            ,
            m.prototype.makeRBT = function(e) {
                for (var t = new Array(e), f = d.prototype._countBits(e) - 1, r = 0; r < e; r++)
                    t[r] = this.revBin(r, f, e);
                return t
            }
            ,
            m.prototype.revBin = function(e, t, f) {
                if (0 === e || e === f - 1)
                    return e;
                for (var r = 0, i = 0; i < t; i++)
                    r |= (1 & e) << t - i - 1,
                    e >>= 1;
                return r
            }
            ,
            m.prototype.permute = function(e, t, f, r, i, d) {
                for (var a = 0; a < d; a++)
                    r[a] = t[e[a]],
                    i[a] = f[e[a]]
            }
            ,
            m.prototype.transform = function(e, t, f, r, i, d) {
                this.permute(d, e, t, f, r, i);
                for (var a = 1; a < i; a <<= 1)
                    for (var n = a << 1, c = Math.cos(2 * Math.PI / n), s = Math.sin(2 * Math.PI / n), h = 0; h < i; h += n)
                        for (var o = c, u = s, b = 0; b < a; b++) {
                            var l = f[h + b]
                              , p = r[h + b]
                              , m = f[h + b + a]
                              , v = r[h + b + a]
                              , y = o * m - u * v;
                            v = o * v + u * m,
                            m = y,
                            f[h + b] = l + m,
                            r[h + b] = p + v,
                            f[h + b + a] = l - m,
                            r[h + b + a] = p - v,
                            b !== n && (y = c * o - s * u,
                            u = c * u + s * o,
                            o = y)
                        }
            }
            ,
            m.prototype.guessLen13b = function(e, t) {
                var f = 1 | Math.max(t, e)
                  , r = 1 & f
                  , i = 0;
                for (f = f / 2 | 0; f; f >>>= 1)
                    i++;
                return 1 << i + 1 + r
            }
            ,
            m.prototype.conjugate = function(e, t, f) {
                if (!(f <= 1))
                    for (var r = 0; r < f / 2; r++) {
                        var i = e[r];
                        e[r] = e[f - r - 1],
                        e[f - r - 1] = i,
                        i = t[r],
                        t[r] = -t[f - r - 1],
                        t[f - r - 1] = -i
                    }
            }
            ,
            m.prototype.normalize13b = function(e, t) {
                for (var f = 0, r = 0; r < t / 2; r++) {
                    var i = 8192 * Math.round(e[2 * r + 1] / t) + Math.round(e[2 * r] / t) + f;
                    e[r] = 67108863 & i,
                    f = i < 67108864 ? 0 : i / 67108864 | 0
                }
                return e
            }
            ,
            m.prototype.convert13b = function(e, t, f, i) {
                for (var d = 0, a = 0; a < t; a++)
                    d += 0 | e[a],
                    f[2 * a] = 8191 & d,
                    d >>>= 13,
                    f[2 * a + 1] = 8191 & d,
                    d >>>= 13;
                for (a = 2 * t; a < i; ++a)
                    f[a] = 0;
                r(0 === d),
                r(0 === (-8192 & d))
            }
            ,
            m.prototype.stub = function(e) {
                for (var t = new Array(e), f = 0; f < e; f++)
                    t[f] = 0;
                return t
            }
            ,
            m.prototype.mulp = function(e, t, f) {
                var r = 2 * this.guessLen13b(e.length, t.length)
                  , i = this.makeRBT(r)
                  , d = this.stub(r)
                  , a = new Array(r)
                  , n = new Array(r)
                  , c = new Array(r)
                  , s = new Array(r)
                  , h = new Array(r)
                  , o = new Array(r)
                  , u = f.words;
                u.length = r,
                this.convert13b(e.words, e.length, a, r),
                this.convert13b(t.words, t.length, s, r),
                this.transform(a, d, n, c, r, i),
                this.transform(s, d, h, o, r, i);
                for (var b = 0; b < r; b++) {
                    var l = n[b] * h[b] - c[b] * o[b];
                    c[b] = n[b] * o[b] + c[b] * h[b],
                    n[b] = l
                }
                return this.conjugate(n, c, r),
                this.transform(n, c, u, d, r, i),
                this.conjugate(u, d, r),
                this.normalize13b(u, r),
                f.negative = e.negative ^ t.negative,
                f.length = e.length + t.length,
                f.strip()
            }
            ,
            d.prototype.mul = function(e) {
                var t = new d(null);
                return t.words = new Array(this.length + e.length),
                this.mulTo(e, t)
            }
            ,
            d.prototype.mulf = function(e) {
                var t = new d(null);
                return t.words = new Array(this.length + e.length),
                p(this, e, t)
            }
            ,
            d.prototype.imul = function(e) {
                return this.clone().mulTo(e, this)
            }
            ,
            d.prototype.imuln = function(e) {
                r("number" === typeof e),
                r(e < 67108864);
                for (var t = 0, f = 0; f < this.length; f++) {
                    var i = (0 | this.words[f]) * e
                      , d = (67108863 & i) + (67108863 & t);
                    t >>= 26,
                    t += i / 67108864 | 0,
                    t += d >>> 26,
                    this.words[f] = 67108863 & d
                }
                return 0 !== t && (this.words[f] = t,
                this.length++),
                this
            }
            ,
            d.prototype.muln = function(e) {
                return this.clone().imuln(e)
            }
            ,
            d.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            d.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            d.prototype.pow = function(e) {
                var t = function(e) {
                    for (var t = new Array(e.bitLength()), f = 0; f < t.length; f++) {
                        var r = f / 26 | 0
                          , i = f % 26;
                        t[f] = (e.words[r] & 1 << i) >>> i
                    }
                    return t
                }(e);
                if (0 === t.length)
                    return new d(1);
                for (var f = this, r = 0; r < t.length && 0 === t[r]; r++,
                f = f.sqr())
                    ;
                if (++r < t.length)
                    for (var i = f.sqr(); r < t.length; r++,
                    i = i.sqr())
                        0 !== t[r] && (f = f.mul(i));
                return f
            }
            ,
            d.prototype.iushln = function(e) {
                r("number" === typeof e && e >= 0);
                var t, f = e % 26, i = (e - f) / 26, d = 67108863 >>> 26 - f << 26 - f;
                if (0 !== f) {
                    var a = 0;
                    for (t = 0; t < this.length; t++) {
                        var n = this.words[t] & d
                          , c = (0 | this.words[t]) - n << f;
                        this.words[t] = c | a,
                        a = n >>> 26 - f
                    }
                    a && (this.words[t] = a,
                    this.length++)
                }
                if (0 !== i) {
                    for (t = this.length - 1; t >= 0; t--)
                        this.words[t + i] = this.words[t];
                    for (t = 0; t < i; t++)
                        this.words[t] = 0;
                    this.length += i
                }
                return this.strip()
            }
            ,
            d.prototype.ishln = function(e) {
                return r(0 === this.negative),
                this.iushln(e)
            }
            ,
            d.prototype.iushrn = function(e, t, f) {
                var i;
                r("number" === typeof e && e >= 0),
                i = t ? (t - t % 26) / 26 : 0;
                var d = e % 26
                  , a = Math.min((e - d) / 26, this.length)
                  , n = 67108863 ^ 67108863 >>> d << d
                  , c = f;
                if (i -= a,
                i = Math.max(0, i),
                c) {
                    for (var s = 0; s < a; s++)
                        c.words[s] = this.words[s];
                    c.length = a
                }
                if (0 === a)
                    ;
                else if (this.length > a)
                    for (this.length -= a,
                    s = 0; s < this.length; s++)
                        this.words[s] = this.words[s + a];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var h = 0;
                for (s = this.length - 1; s >= 0 && (0 !== h || s >= i); s--) {
                    var o = 0 | this.words[s];
                    this.words[s] = h << 26 - d | o >>> d,
                    h = o & n
                }
                return c && 0 !== h && (c.words[c.length++] = h),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this.strip()
            }
            ,
            d.prototype.ishrn = function(e, t, f) {
                return r(0 === this.negative),
                this.iushrn(e, t, f)
            }
            ,
            d.prototype.shln = function(e) {
                return this.clone().ishln(e)
            }
            ,
            d.prototype.ushln = function(e) {
                return this.clone().iushln(e)
            }
            ,
            d.prototype.shrn = function(e) {
                return this.clone().ishrn(e)
            }
            ,
            d.prototype.ushrn = function(e) {
                return this.clone().iushrn(e)
            }
            ,
            d.prototype.testn = function(e) {
                r("number" === typeof e && e >= 0);
                var t = e % 26
                  , f = (e - t) / 26
                  , i = 1 << t;
                return !(this.length <= f) && !!(this.words[f] & i)
            }
            ,
            d.prototype.imaskn = function(e) {
                r("number" === typeof e && e >= 0);
                var t = e % 26
                  , f = (e - t) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= f)
                    return this;
                if (0 !== t && f++,
                this.length = Math.min(f, this.length),
                0 !== t) {
                    var i = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= i
                }
                return this.strip()
            }
            ,
            d.prototype.maskn = function(e) {
                return this.clone().imaskn(e)
            }
            ,
            d.prototype.iaddn = function(e) {
                return r("number" === typeof e),
                r(e < 67108864),
                e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(e),
                this.negative = 1,
                this) : this._iaddn(e)
            }
            ,
            d.prototype._iaddn = function(e) {
                this.words[0] += e;
                for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                    this.words[t] -= 67108864,
                    t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                return this.length = Math.max(this.length, t + 1),
                this
            }
            ,
            d.prototype.isubn = function(e) {
                if (r("number" === typeof e),
                r(e < 67108864),
                e < 0)
                    return this.iaddn(-e);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(e),
                    this.negative = 1,
                    this;
                if (this.words[0] -= e,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++)
                        this.words[t] += 67108864,
                        this.words[t + 1] -= 1;
                return this.strip()
            }
            ,
            d.prototype.addn = function(e) {
                return this.clone().iaddn(e)
            }
            ,
            d.prototype.subn = function(e) {
                return this.clone().isubn(e)
            }
            ,
            d.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            d.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            d.prototype._ishlnsubmul = function(e, t, f) {
                var i, d, a = e.length + f;
                this._expand(a);
                var n = 0;
                for (i = 0; i < e.length; i++) {
                    d = (0 | this.words[i + f]) + n;
                    var c = (0 | e.words[i]) * t;
                    n = ((d -= 67108863 & c) >> 26) - (c / 67108864 | 0),
                    this.words[i + f] = 67108863 & d
                }
                for (; i < this.length - f; i++)
                    n = (d = (0 | this.words[i + f]) + n) >> 26,
                    this.words[i + f] = 67108863 & d;
                if (0 === n)
                    return this.strip();
                for (r(-1 === n),
                n = 0,
                i = 0; i < this.length; i++)
                    n = (d = -(0 | this.words[i]) + n) >> 26,
                    this.words[i] = 67108863 & d;
                return this.negative = 1,
                this.strip()
            }
            ,
            d.prototype._wordDiv = function(e, t) {
                var f = (this.length,
                e.length)
                  , r = this.clone()
                  , i = e
                  , a = 0 | i.words[i.length - 1];
                0 !== (f = 26 - this._countBits(a)) && (i = i.ushln(f),
                r.iushln(f),
                a = 0 | i.words[i.length - 1]);
                var n, c = r.length - i.length;
                if ("mod" !== t) {
                    (n = new d(null)).length = c + 1,
                    n.words = new Array(n.length);
                    for (var s = 0; s < n.length; s++)
                        n.words[s] = 0
                }
                var h = r.clone()._ishlnsubmul(i, 1, c);
                0 === h.negative && (r = h,
                n && (n.words[c] = 1));
                for (var o = c - 1; o >= 0; o--) {
                    var u = 67108864 * (0 | r.words[i.length + o]) + (0 | r.words[i.length + o - 1]);
                    for (u = Math.min(u / a | 0, 67108863),
                    r._ishlnsubmul(i, u, o); 0 !== r.negative; )
                        u--,
                        r.negative = 0,
                        r._ishlnsubmul(i, 1, o),
                        r.isZero() || (r.negative ^= 1);
                    n && (n.words[o] = u)
                }
                return n && n.strip(),
                r.strip(),
                "div" !== t && 0 !== f && r.iushrn(f),
                {
                    div: n || null,
                    mod: r
                }
            }
            ,
            d.prototype.divmod = function(e, t, f) {
                return r(!e.isZero()),
                this.isZero() ? {
                    div: new d(0),
                    mod: new d(0)
                } : 0 !== this.negative && 0 === e.negative ? (n = this.neg().divmod(e, t),
                "mod" !== t && (i = n.div.neg()),
                "div" !== t && (a = n.mod.neg(),
                f && 0 !== a.negative && a.iadd(e)),
                {
                    div: i,
                    mod: a
                }) : 0 === this.negative && 0 !== e.negative ? (n = this.divmod(e.neg(), t),
                "mod" !== t && (i = n.div.neg()),
                {
                    div: i,
                    mod: n.mod
                }) : 0 !== (this.negative & e.negative) ? (n = this.neg().divmod(e.neg(), t),
                "div" !== t && (a = n.mod.neg(),
                f && 0 !== a.negative && a.isub(e)),
                {
                    div: n.div,
                    mod: a
                }) : e.length > this.length || this.cmp(e) < 0 ? {
                    div: new d(0),
                    mod: this
                } : 1 === e.length ? "div" === t ? {
                    div: this.divn(e.words[0]),
                    mod: null
                } : "mod" === t ? {
                    div: null,
                    mod: new d(this.modn(e.words[0]))
                } : {
                    div: this.divn(e.words[0]),
                    mod: new d(this.modn(e.words[0]))
                } : this._wordDiv(e, t);
                var i, a, n
            }
            ,
            d.prototype.div = function(e) {
                return this.divmod(e, "div", !1).div
            }
            ,
            d.prototype.mod = function(e) {
                return this.divmod(e, "mod", !1).mod
            }
            ,
            d.prototype.umod = function(e) {
                return this.divmod(e, "mod", !0).mod
            }
            ,
            d.prototype.divRound = function(e) {
                var t = this.divmod(e);
                if (t.mod.isZero())
                    return t.div;
                var f = 0 !== t.div.negative ? t.mod.isub(e) : t.mod
                  , r = e.ushrn(1)
                  , i = e.andln(1)
                  , d = f.cmp(r);
                return d < 0 || 1 === i && 0 === d ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
            }
            ,
            d.prototype.modn = function(e) {
                r(e <= 67108863);
                for (var t = (1 << 26) % e, f = 0, i = this.length - 1; i >= 0; i--)
                    f = (t * f + (0 | this.words[i])) % e;
                return f
            }
            ,
            d.prototype.idivn = function(e) {
                r(e <= 67108863);
                for (var t = 0, f = this.length - 1; f >= 0; f--) {
                    var i = (0 | this.words[f]) + 67108864 * t;
                    this.words[f] = i / e | 0,
                    t = i % e
                }
                return this.strip()
            }
            ,
            d.prototype.divn = function(e) {
                return this.clone().idivn(e)
            }
            ,
            d.prototype.egcd = function(e) {
                r(0 === e.negative),
                r(!e.isZero());
                var t = this
                  , f = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var i = new d(1), a = new d(0), n = new d(0), c = new d(1), s = 0; t.isEven() && f.isEven(); )
                    t.iushrn(1),
                    f.iushrn(1),
                    ++s;
                for (var h = f.clone(), o = t.clone(); !t.isZero(); ) {
                    for (var u = 0, b = 1; 0 === (t.words[0] & b) && u < 26; ++u,
                    b <<= 1)
                        ;
                    if (u > 0)
                        for (t.iushrn(u); u-- > 0; )
                            (i.isOdd() || a.isOdd()) && (i.iadd(h),
                            a.isub(o)),
                            i.iushrn(1),
                            a.iushrn(1);
                    for (var l = 0, p = 1; 0 === (f.words[0] & p) && l < 26; ++l,
                    p <<= 1)
                        ;
                    if (l > 0)
                        for (f.iushrn(l); l-- > 0; )
                            (n.isOdd() || c.isOdd()) && (n.iadd(h),
                            c.isub(o)),
                            n.iushrn(1),
                            c.iushrn(1);
                    t.cmp(f) >= 0 ? (t.isub(f),
                    i.isub(n),
                    a.isub(c)) : (f.isub(t),
                    n.isub(i),
                    c.isub(a))
                }
                return {
                    a: n,
                    b: c,
                    gcd: f.iushln(s)
                }
            }
            ,
            d.prototype._invmp = function(e) {
                r(0 === e.negative),
                r(!e.isZero());
                var t = this
                  , f = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var i, a = new d(1), n = new d(0), c = f.clone(); t.cmpn(1) > 0 && f.cmpn(1) > 0; ) {
                    for (var s = 0, h = 1; 0 === (t.words[0] & h) && s < 26; ++s,
                    h <<= 1)
                        ;
                    if (s > 0)
                        for (t.iushrn(s); s-- > 0; )
                            a.isOdd() && a.iadd(c),
                            a.iushrn(1);
                    for (var o = 0, u = 1; 0 === (f.words[0] & u) && o < 26; ++o,
                    u <<= 1)
                        ;
                    if (o > 0)
                        for (f.iushrn(o); o-- > 0; )
                            n.isOdd() && n.iadd(c),
                            n.iushrn(1);
                    t.cmp(f) >= 0 ? (t.isub(f),
                    a.isub(n)) : (f.isub(t),
                    n.isub(a))
                }
                return (i = 0 === t.cmpn(1) ? a : n).cmpn(0) < 0 && i.iadd(e),
                i
            }
            ,
            d.prototype.gcd = function(e) {
                if (this.isZero())
                    return e.abs();
                if (e.isZero())
                    return this.abs();
                var t = this.clone()
                  , f = e.clone();
                t.negative = 0,
                f.negative = 0;
                for (var r = 0; t.isEven() && f.isEven(); r++)
                    t.iushrn(1),
                    f.iushrn(1);
                for (; ; ) {
                    for (; t.isEven(); )
                        t.iushrn(1);
                    for (; f.isEven(); )
                        f.iushrn(1);
                    var i = t.cmp(f);
                    if (i < 0) {
                        var d = t;
                        t = f,
                        f = d
                    } else if (0 === i || 0 === f.cmpn(1))
                        break;
                    t.isub(f)
                }
                return f.iushln(r)
            }
            ,
            d.prototype.invm = function(e) {
                return this.egcd(e).a.umod(e)
            }
            ,
            d.prototype.isEven = function() {
                return 0 === (1 & this.words[0])
            }
            ,
            d.prototype.isOdd = function() {
                return 1 === (1 & this.words[0])
            }
            ,
            d.prototype.andln = function(e) {
                return this.words[0] & e
            }
            ,
            d.prototype.bincn = function(e) {
                r("number" === typeof e);
                var t = e % 26
                  , f = (e - t) / 26
                  , i = 1 << t;
                if (this.length <= f)
                    return this._expand(f + 1),
                    this.words[f] |= i,
                    this;
                for (var d = i, a = f; 0 !== d && a < this.length; a++) {
                    var n = 0 | this.words[a];
                    d = (n += d) >>> 26,
                    n &= 67108863,
                    this.words[a] = n
                }
                return 0 !== d && (this.words[a] = d,
                this.length++),
                this
            }
            ,
            d.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            d.prototype.cmpn = function(e) {
                var t, f = e < 0;
                if (0 !== this.negative && !f)
                    return -1;
                if (0 === this.negative && f)
                    return 1;
                if (this.strip(),
                this.length > 1)
                    t = 1;
                else {
                    f && (e = -e),
                    r(e <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    t = i === e ? 0 : i < e ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            d.prototype.cmp = function(e) {
                if (0 !== this.negative && 0 === e.negative)
                    return -1;
                if (0 === this.negative && 0 !== e.negative)
                    return 1;
                var t = this.ucmp(e);
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            d.prototype.ucmp = function(e) {
                if (this.length > e.length)
                    return 1;
                if (this.length < e.length)
                    return -1;
                for (var t = 0, f = this.length - 1; f >= 0; f--) {
                    var r = 0 | this.words[f]
                      , i = 0 | e.words[f];
                    if (r !== i) {
                        r < i ? t = -1 : r > i && (t = 1);
                        break
                    }
                }
                return t
            }
            ,
            d.prototype.gtn = function(e) {
                return 1 === this.cmpn(e)
            }
            ,
            d.prototype.gt = function(e) {
                return 1 === this.cmp(e)
            }
            ,
            d.prototype.gten = function(e) {
                return this.cmpn(e) >= 0
            }
            ,
            d.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }
            ,
            d.prototype.ltn = function(e) {
                return -1 === this.cmpn(e)
            }
            ,
            d.prototype.lt = function(e) {
                return -1 === this.cmp(e)
            }
            ,
            d.prototype.lten = function(e) {
                return this.cmpn(e) <= 0
            }
            ,
            d.prototype.lte = function(e) {
                return this.cmp(e) <= 0
            }
            ,
            d.prototype.eqn = function(e) {
                return 0 === this.cmpn(e)
            }
            ,
            d.prototype.eq = function(e) {
                return 0 === this.cmp(e)
            }
            ,
            d.red = function(e) {
                return new A(e)
            }
            ,
            d.prototype.toRed = function(e) {
                return r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
            }
            ,
            d.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            d.prototype._forceRed = function(e) {
                return this.red = e,
                this
            }
            ,
            d.prototype.forceRed = function(e) {
                return r(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
            }
            ,
            d.prototype.redAdd = function(e) {
                return r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
            }
            ,
            d.prototype.redIAdd = function(e) {
                return r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
            }
            ,
            d.prototype.redSub = function(e) {
                return r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
            }
            ,
            d.prototype.redISub = function(e) {
                return r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
            }
            ,
            d.prototype.redShl = function(e) {
                return r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
            }
            ,
            d.prototype.redMul = function(e) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
            }
            ,
            d.prototype.redIMul = function(e) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
            }
            ,
            d.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            d.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            d.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            d.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            d.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            d.prototype.redPow = function(e) {
                return r(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
            }
            ;
            var v = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function y(e, t) {
                this.name = e,
                this.p = new d(t,16),
                this.n = this.p.bitLength(),
                this.k = new d(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function g() {
                y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function M() {
                y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function w() {
                y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function S() {
                y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function A(e) {
                if ("string" === typeof e) {
                    var t = d._prime(e);
                    this.m = t.p,
                    this.prime = t
                } else
                    r(e.gtn(1), "modulus must be greater than 1"),
                    this.m = e,
                    this.prime = null
            }
            function x(e) {
                A.call(this, e),
                this.shift = this.m.bitLength(),
                this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
                this.r = new d(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            y.prototype._tmp = function() {
                var e = new d(null);
                return e.words = new Array(Math.ceil(this.n / 13)),
                e
            }
            ,
            y.prototype.ireduce = function(e) {
                var t, f = e;
                do {
                    this.split(f, this.tmp),
                    t = (f = (f = this.imulK(f)).iadd(this.tmp)).bitLength()
                } while (t > this.n);
                var r = t < this.n ? -1 : f.ucmp(this.p);
                return 0 === r ? (f.words[0] = 0,
                f.length = 1) : r > 0 ? f.isub(this.p) : void 0 !== f.strip ? f.strip() : f._strip(),
                f
            }
            ,
            y.prototype.split = function(e, t) {
                e.iushrn(this.n, 0, t)
            }
            ,
            y.prototype.imulK = function(e) {
                return e.imul(this.k)
            }
            ,
            i(g, y),
            g.prototype.split = function(e, t) {
                for (var f = 4194303, r = Math.min(e.length, 9), i = 0; i < r; i++)
                    t.words[i] = e.words[i];
                if (t.length = r,
                e.length <= 9)
                    return e.words[0] = 0,
                    void (e.length = 1);
                var d = e.words[9];
                for (t.words[t.length++] = d & f,
                i = 10; i < e.length; i++) {
                    var a = 0 | e.words[i];
                    e.words[i - 10] = (a & f) << 4 | d >>> 22,
                    d = a
                }
                d >>>= 22,
                e.words[i - 10] = d,
                0 === d && e.length > 10 ? e.length -= 10 : e.length -= 9
            }
            ,
            g.prototype.imulK = function(e) {
                e.words[e.length] = 0,
                e.words[e.length + 1] = 0,
                e.length += 2;
                for (var t = 0, f = 0; f < e.length; f++) {
                    var r = 0 | e.words[f];
                    t += 977 * r,
                    e.words[f] = 67108863 & t,
                    t = 64 * r + (t / 67108864 | 0)
                }
                return 0 === e.words[e.length - 1] && (e.length--,
                0 === e.words[e.length - 1] && e.length--),
                e
            }
            ,
            i(M, y),
            i(w, y),
            i(S, y),
            S.prototype.imulK = function(e) {
                for (var t = 0, f = 0; f < e.length; f++) {
                    var r = 19 * (0 | e.words[f]) + t
                      , i = 67108863 & r;
                    r >>>= 26,
                    e.words[f] = i,
                    t = r
                }
                return 0 !== t && (e.words[e.length++] = t),
                e
            }
            ,
            d._prime = function(e) {
                if (v[e])
                    return v[e];
                var t;
                if ("k256" === e)
                    t = new g;
                else if ("p224" === e)
                    t = new M;
                else if ("p192" === e)
                    t = new w;
                else {
                    if ("p25519" !== e)
                        throw new Error("Unknown prime " + e);
                    t = new S
                }
                return v[e] = t,
                t
            }
            ,
            A.prototype._verify1 = function(e) {
                r(0 === e.negative, "red works only with positives"),
                r(e.red, "red works only with red numbers")
            }
            ,
            A.prototype._verify2 = function(e, t) {
                r(0 === (e.negative | t.negative), "red works only with positives"),
                r(e.red && e.red === t.red, "red works only with red numbers")
            }
            ,
            A.prototype.imod = function(e) {
                return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
            }
            ,
            A.prototype.neg = function(e) {
                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
            }
            ,
            A.prototype.add = function(e, t) {
                this._verify2(e, t);
                var f = e.add(t);
                return f.cmp(this.m) >= 0 && f.isub(this.m),
                f._forceRed(this)
            }
            ,
            A.prototype.iadd = function(e, t) {
                this._verify2(e, t);
                var f = e.iadd(t);
                return f.cmp(this.m) >= 0 && f.isub(this.m),
                f
            }
            ,
            A.prototype.sub = function(e, t) {
                this._verify2(e, t);
                var f = e.sub(t);
                return f.cmpn(0) < 0 && f.iadd(this.m),
                f._forceRed(this)
            }
            ,
            A.prototype.isub = function(e, t) {
                this._verify2(e, t);
                var f = e.isub(t);
                return f.cmpn(0) < 0 && f.iadd(this.m),
                f
            }
            ,
            A.prototype.shl = function(e, t) {
                return this._verify1(e),
                this.imod(e.ushln(t))
            }
            ,
            A.prototype.imul = function(e, t) {
                return this._verify2(e, t),
                this.imod(e.imul(t))
            }
            ,
            A.prototype.mul = function(e, t) {
                return this._verify2(e, t),
                this.imod(e.mul(t))
            }
            ,
            A.prototype.isqr = function(e) {
                return this.imul(e, e.clone())
            }
            ,
            A.prototype.sqr = function(e) {
                return this.mul(e, e)
            }
            ,
            A.prototype.sqrt = function(e) {
                if (e.isZero())
                    return e.clone();
                var t = this.m.andln(3);
                if (r(t % 2 === 1),
                3 === t) {
                    var f = this.m.add(new d(1)).iushrn(2);
                    return this.pow(e, f)
                }
                for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1); )
                    a++,
                    i.iushrn(1);
                r(!i.isZero());
                var n = new d(1).toRed(this)
                  , c = n.redNeg()
                  , s = this.m.subn(1).iushrn(1)
                  , h = this.m.bitLength();
                for (h = new d(2 * h * h).toRed(this); 0 !== this.pow(h, s).cmp(c); )
                    h.redIAdd(c);
                for (var o = this.pow(h, i), u = this.pow(e, i.addn(1).iushrn(1)), b = this.pow(e, i), l = a; 0 !== b.cmp(n); ) {
                    for (var p = b, m = 0; 0 !== p.cmp(n); m++)
                        p = p.redSqr();
                    r(m < l);
                    var v = this.pow(o, new d(1).iushln(l - m - 1));
                    u = u.redMul(v),
                    o = v.redSqr(),
                    b = b.redMul(o),
                    l = m
                }
                return u
            }
            ,
            A.prototype.invm = function(e) {
                var t = e._invmp(this.m);
                return 0 !== t.negative ? (t.negative = 0,
                this.imod(t).redNeg()) : this.imod(t)
            }
            ,
            A.prototype.pow = function(e, t) {
                if (t.isZero())
                    return new d(1).toRed(this);
                if (0 === t.cmpn(1))
                    return e.clone();
                var f = new Array(16);
                f[0] = new d(1).toRed(this),
                f[1] = e;
                for (var r = 2; r < f.length; r++)
                    f[r] = this.mul(f[r - 1], e);
                var i = f[0]
                  , a = 0
                  , n = 0
                  , c = t.bitLength() % 26;
                for (0 === c && (c = 26),
                r = t.length - 1; r >= 0; r--) {
                    for (var s = t.words[r], h = c - 1; h >= 0; h--) {
                        var o = s >> h & 1;
                        i !== f[0] && (i = this.sqr(i)),
                        0 !== o || 0 !== a ? (a <<= 1,
                        a |= o,
                        (4 === ++n || 0 === r && 0 === h) && (i = this.mul(i, f[a]),
                        n = 0,
                        a = 0)) : n = 0
                    }
                    c = 26
                }
                return i
            }
            ,
            A.prototype.convertTo = function(e) {
                var t = e.umod(this.m);
                return t === e ? t.clone() : t
            }
            ,
            A.prototype.convertFrom = function(e) {
                var t = e.clone();
                return t.red = null,
                t
            }
            ,
            d.mont = function(e) {
                return new x(e)
            }
            ,
            i(x, A),
            x.prototype.convertTo = function(e) {
                return this.imod(e.ushln(this.shift))
            }
            ,
            x.prototype.convertFrom = function(e) {
                var t = this.imod(e.mul(this.rinv));
                return t.red = null,
                t
            }
            ,
            x.prototype.imul = function(e, t) {
                if (e.isZero() || t.isZero())
                    return e.words[0] = 0,
                    e.length = 1,
                    e;
                var f = e.imul(t)
                  , r = f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = f.isub(r).iushrn(this.shift)
                  , d = i;
                return i.cmp(this.m) >= 0 ? d = i.isub(this.m) : i.cmpn(0) < 0 && (d = i.iadd(this.m)),
                d._forceRed(this)
            }
            ,
            x.prototype.mul = function(e, t) {
                if (e.isZero() || t.isZero())
                    return new d(0)._forceRed(this);
                var f = e.mul(t)
                  , r = f.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = f.isub(r).iushrn(this.shift)
                  , a = i;
                return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)),
                a._forceRed(this)
            }
            ,
            x.prototype.invm = function(e) {
                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(e = f.nmd(e), this)
    },
    18597: function(e) {
        "use strict";
        e.exports = {
            i8: "6.5.4"
        }
    }
}]);
