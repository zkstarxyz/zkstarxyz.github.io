/*!For license information please see 836.05dcaa74.js.LICENSE.txt*/
"use strict";
(self.webpackChunksyncswap = self.webpackChunksyncswap || []).push([[836], {
    73806: function(t, e, r) {
        var n = r(93933)
          , i = r(25073)
          , o = r(75579)
          , a = r(82797)
          , s = r(41116)
          , h = r(40207)
          , u = r(83169)
          , l = r(4490)
          , c = r(20064)
          , f = "__zr_normal__"
          , p = n.dN.concat(["ignore"])
          , d = (0,
        h.reduce)(n.dN, (function(t, e) {
            return t[e] = !0,
            t
        }
        ), {
            ignore: !1
        })
          , y = {}
          , v = new o.Z(0,0,0,0)
          , g = function() {
            function t(t) {
                this.id = (0,
                h.guid)(),
                this.animators = [],
                this.currentStates = [],
                this.states = {},
                this._init(t)
            }
            return t.prototype._init = function(t) {
                this.attr(t)
            }
            ,
            t.prototype.drift = function(t, e, r) {
                switch (this.draggable) {
                case "horizontal":
                    e = 0;
                    break;
                case "vertical":
                    t = 0
                }
                var n = this.transform;
                n || (n = this.transform = [1, 0, 0, 1, 0, 0]),
                n[4] += t,
                n[5] += e,
                this.decomposeTransform(),
                this.markRedraw()
            }
            ,
            t.prototype.beforeUpdate = function() {}
            ,
            t.prototype.afterUpdate = function() {}
            ,
            t.prototype.update = function() {
                this.updateTransform(),
                this.__dirty && this.updateInnerText()
            }
            ,
            t.prototype.updateInnerText = function(t) {
                var e = this._textContent;
                if (e && (!e.ignore || t)) {
                    this.textConfig || (this.textConfig = {});
                    var r = this.textConfig
                      , n = r.local
                      , i = e.innerTransformable
                      , o = void 0
                      , a = void 0
                      , h = !1;
                    i.parent = n ? this : null;
                    var u = !1;
                    if (i.copyTransform(e),
                    null != r.position) {
                        var l = v;
                        r.layoutRect ? l.copy(r.layoutRect) : l.copy(this.getBoundingRect()),
                        n || l.applyTransform(this.transform),
                        this.calculateTextPosition ? this.calculateTextPosition(y, r, l) : (0,
                        s.wI)(y, r, l),
                        i.x = y.x,
                        i.y = y.y,
                        o = y.align,
                        a = y.verticalAlign;
                        var f = r.origin;
                        if (f && null != r.rotation) {
                            var p = void 0
                              , d = void 0;
                            "center" === f ? (p = .5 * l.width,
                            d = .5 * l.height) : (p = (0,
                            s.GM)(f[0], l.width),
                            d = (0,
                            s.GM)(f[1], l.height)),
                            u = !0,
                            i.originX = -i.x + p + (n ? 0 : l.x),
                            i.originY = -i.y + d + (n ? 0 : l.y)
                        }
                    }
                    null != r.rotation && (i.rotation = r.rotation);
                    var g = r.offset;
                    g && (i.x += g[0],
                    i.y += g[1],
                    u || (i.originX = -g[0],
                    i.originY = -g[1]));
                    var _ = null == r.inside ? "string" === typeof r.position && r.position.indexOf("inside") >= 0 : r.inside
                      , m = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {})
                      , x = void 0
                      , w = void 0
                      , b = void 0;
                    _ && this.canBeInsideText() ? (x = r.insideFill,
                    w = r.insideStroke,
                    null != x && "auto" !== x || (x = this.getInsideTextFill()),
                    null != w && "auto" !== w || (w = this.getInsideTextStroke(x),
                    b = !0)) : (x = r.outsideFill,
                    w = r.outsideStroke,
                    null != x && "auto" !== x || (x = this.getOutsideFill()),
                    null != w && "auto" !== w || (w = this.getOutsideStroke(x),
                    b = !0)),
                    (x = x || "#000") === m.fill && w === m.stroke && b === m.autoStroke && o === m.align && a === m.verticalAlign || (h = !0,
                    m.fill = x,
                    m.stroke = w,
                    m.autoStroke = b,
                    m.align = o,
                    m.verticalAlign = a,
                    e.setDefaultTextStyle(m)),
                    e.__dirty |= c.YV,
                    h && e.dirtyStyle(!0)
                }
            }
            ,
            t.prototype.canBeInsideText = function() {
                return !0
            }
            ,
            t.prototype.getInsideTextFill = function() {
                return "#fff"
            }
            ,
            t.prototype.getInsideTextStroke = function(t) {
                return "#000"
            }
            ,
            t.prototype.getOutsideFill = function() {
                return this.__zr && this.__zr.isDarkMode() ? u.GD : u.vU
            }
            ,
            t.prototype.getOutsideStroke = function(t) {
                var e = this.__zr && this.__zr.getBackgroundColor()
                  , r = "string" === typeof e && (0,
                l.parse)(e);
                r || (r = [255, 255, 255, 1]);
                for (var n = r[3], i = this.__zr.isDarkMode(), o = 0; o < 3; o++)
                    r[o] = r[o] * n + (i ? 0 : 255) * (1 - n);
                return r[3] = 1,
                (0,
                l.stringify)(r, "rgba")
            }
            ,
            t.prototype.traverse = function(t, e) {}
            ,
            t.prototype.attrKV = function(t, e) {
                "textConfig" === t ? this.setTextConfig(e) : "textContent" === t ? this.setTextContent(e) : "clipPath" === t ? this.setClipPath(e) : "extra" === t ? (this.extra = this.extra || {},
                (0,
                h.extend)(this.extra, e)) : this[t] = e
            }
            ,
            t.prototype.hide = function() {
                this.ignore = !0,
                this.markRedraw()
            }
            ,
            t.prototype.show = function() {
                this.ignore = !1,
                this.markRedraw()
            }
            ,
            t.prototype.attr = function(t, e) {
                if ("string" === typeof t)
                    this.attrKV(t, e);
                else if ((0,
                h.isObject)(t))
                    for (var r = t, n = (0,
                    h.keys)(r), i = 0; i < n.length; i++) {
                        var o = n[i];
                        this.attrKV(o, t[o])
                    }
                return this.markRedraw(),
                this
            }
            ,
            t.prototype.saveCurrentToNormalState = function(t) {
                this._innerSaveToNormal(t);
                for (var e = this._normalState, r = 0; r < this.animators.length; r++) {
                    var n = this.animators[r]
                      , i = n.__fromStateTransition;
                    if (!(n.getLoop() || i && i !== f)) {
                        var o = n.targetName
                          , a = o ? e[o] : e;
                        n.saveTo(a)
                    }
                }
            }
            ,
            t.prototype._innerSaveToNormal = function(t) {
                var e = this._normalState;
                e || (e = this._normalState = {}),
                t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
                this._savePrimaryToNormal(t, e, p)
            }
            ,
            t.prototype._savePrimaryToNormal = function(t, e, r) {
                for (var n = 0; n < r.length; n++) {
                    var i = r[n];
                    null == t[i] || i in e || (e[i] = this[i])
                }
            }
            ,
            t.prototype.hasState = function() {
                return this.currentStates.length > 0
            }
            ,
            t.prototype.getState = function(t) {
                return this.states[t]
            }
            ,
            t.prototype.ensureState = function(t) {
                var e = this.states;
                return e[t] || (e[t] = {}),
                e[t]
            }
            ,
            t.prototype.clearStates = function(t) {
                this.useState(f, !1, t)
            }
            ,
            t.prototype.useState = function(t, e, r, n) {
                var i = t === f;
                if (this.hasState() || !i) {
                    var o = this.currentStates
                      , a = this.stateTransition;
                    if (!((0,
                    h.indexOf)(o, t) >= 0) || !e && 1 !== o.length) {
                        var s;
                        if (this.stateProxy && !i && (s = this.stateProxy(t)),
                        s || (s = this.states && this.states[t]),
                        s || i) {
                            i || this.saveCurrentToNormalState(s);
                            var u = !!(s && s.hoverLayer || n);
                            u && this._toggleHoverLayerFlag(!0),
                            this._applyStateObj(t, s, this._normalState, e, !r && !this.__inHover && a && a.duration > 0, a);
                            var l = this._textContent
                              , p = this._textGuide;
                            return l && l.useState(t, e, r, u),
                            p && p.useState(t, e, r, u),
                            i ? (this.currentStates = [],
                            this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t],
                            this._updateAnimationTargets(),
                            this.markRedraw(),
                            !u && this.__inHover && (this._toggleHoverLayerFlag(!1),
                            this.__dirty &= ~c.YV),
                            s
                        }
                        (0,
                        h.logError)("State " + t + " not exists.")
                    }
                }
            }
            ,
            t.prototype.useStates = function(t, e, r) {
                if (t.length) {
                    var n = []
                      , i = this.currentStates
                      , o = t.length
                      , a = o === i.length;
                    if (a)
                        for (var s = 0; s < o; s++)
                            if (t[s] !== i[s]) {
                                a = !1;
                                break
                            }
                    if (a)
                        return;
                    for (s = 0; s < o; s++) {
                        var h = t[s]
                          , u = void 0;
                        this.stateProxy && (u = this.stateProxy(h, t)),
                        u || (u = this.states[h]),
                        u && n.push(u)
                    }
                    var l = n[o - 1]
                      , f = !!(l && l.hoverLayer || r);
                    f && this._toggleHoverLayerFlag(!0);
                    var p = this._mergeStates(n)
                      , d = this.stateTransition;
                    this.saveCurrentToNormalState(p),
                    this._applyStateObj(t.join(","), p, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
                    var y = this._textContent
                      , v = this._textGuide;
                    y && y.useStates(t, e, f),
                    v && v.useStates(t, e, f),
                    this._updateAnimationTargets(),
                    this.currentStates = t.slice(),
                    this.markRedraw(),
                    !f && this.__inHover && (this._toggleHoverLayerFlag(!1),
                    this.__dirty &= ~c.YV)
                } else
                    this.clearStates()
            }
            ,
            t.prototype._updateAnimationTargets = function() {
                for (var t = 0; t < this.animators.length; t++) {
                    var e = this.animators[t];
                    e.targetName && e.changeTarget(this[e.targetName])
                }
            }
            ,
            t.prototype.removeState = function(t) {
                var e = (0,
                h.indexOf)(this.currentStates, t);
                if (e >= 0) {
                    var r = this.currentStates.slice();
                    r.splice(e, 1),
                    this.useStates(r)
                }
            }
            ,
            t.prototype.replaceState = function(t, e, r) {
                var n = this.currentStates.slice()
                  , i = (0,
                h.indexOf)(n, t)
                  , o = (0,
                h.indexOf)(n, e) >= 0;
                i >= 0 ? o ? n.splice(i, 1) : n[i] = e : r && !o && n.push(e),
                this.useStates(n)
            }
            ,
            t.prototype.toggleState = function(t, e) {
                e ? this.useState(t, !0) : this.removeState(t)
            }
            ,
            t.prototype._mergeStates = function(t) {
                for (var e, r = {}, n = 0; n < t.length; n++) {
                    var i = t[n];
                    (0,
                    h.extend)(r, i),
                    i.textConfig && (e = e || {},
                    (0,
                    h.extend)(e, i.textConfig))
                }
                return e && (r.textConfig = e),
                r
            }
            ,
            t.prototype._applyStateObj = function(t, e, r, n, i, o) {
                var a = !(e && n);
                e && e.textConfig ? (this.textConfig = (0,
                h.extend)({}, n ? this.textConfig : r.textConfig),
                (0,
                h.extend)(this.textConfig, e.textConfig)) : a && r.textConfig && (this.textConfig = r.textConfig);
                for (var s = {}, u = !1, l = 0; l < p.length; l++) {
                    var c = p[l]
                      , f = i && d[c];
                    e && null != e[c] ? f ? (u = !0,
                    s[c] = e[c]) : this[c] = e[c] : a && null != r[c] && (f ? (u = !0,
                    s[c] = r[c]) : this[c] = r[c])
                }
                if (!i)
                    for (l = 0; l < this.animators.length; l++) {
                        var y = this.animators[l]
                          , v = y.targetName;
                        y.getLoop() || y.__changeFinalValue(v ? (e || r)[v] : e || r)
                    }
                u && this._transitionState(t, s, o)
            }
            ,
            t.prototype._attachComponent = function(t) {
                if ((!t.__zr || t.__hostTarget) && t !== this) {
                    var e = this.__zr;
                    e && t.addSelfToZr(e),
                    t.__zr = e,
                    t.__hostTarget = this
                }
            }
            ,
            t.prototype._detachComponent = function(t) {
                t.__zr && t.removeSelfFromZr(t.__zr),
                t.__zr = null,
                t.__hostTarget = null
            }
            ,
            t.prototype.getClipPath = function() {
                return this._clipPath
            }
            ,
            t.prototype.setClipPath = function(t) {
                this._clipPath && this._clipPath !== t && this.removeClipPath(),
                this._attachComponent(t),
                this._clipPath = t,
                this.markRedraw()
            }
            ,
            t.prototype.removeClipPath = function() {
                var t = this._clipPath;
                t && (this._detachComponent(t),
                this._clipPath = null,
                this.markRedraw())
            }
            ,
            t.prototype.getTextContent = function() {
                return this._textContent
            }
            ,
            t.prototype.setTextContent = function(t) {
                var e = this._textContent;
                e !== t && (e && e !== t && this.removeTextContent(),
                t.innerTransformable = new n.ZP,
                this._attachComponent(t),
                this._textContent = t,
                this.markRedraw())
            }
            ,
            t.prototype.setTextConfig = function(t) {
                this.textConfig || (this.textConfig = {}),
                (0,
                h.extend)(this.textConfig, t),
                this.markRedraw()
            }
            ,
            t.prototype.removeTextConfig = function() {
                this.textConfig = null,
                this.markRedraw()
            }
            ,
            t.prototype.removeTextContent = function() {
                var t = this._textContent;
                t && (t.innerTransformable = null,
                this._detachComponent(t),
                this._textContent = null,
                this._innerTextDefaultStyle = null,
                this.markRedraw())
            }
            ,
            t.prototype.getTextGuideLine = function() {
                return this._textGuide
            }
            ,
            t.prototype.setTextGuideLine = function(t) {
                this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
                this._attachComponent(t),
                this._textGuide = t,
                this.markRedraw()
            }
            ,
            t.prototype.removeTextGuideLine = function() {
                var t = this._textGuide;
                t && (this._detachComponent(t),
                this._textGuide = null,
                this.markRedraw())
            }
            ,
            t.prototype.markRedraw = function() {
                this.__dirty |= c.YV;
                var t = this.__zr;
                t && (this.__inHover ? t.refreshHover() : t.refresh()),
                this.__hostTarget && this.__hostTarget.markRedraw()
            }
            ,
            t.prototype.dirty = function() {
                this.markRedraw()
            }
            ,
            t.prototype._toggleHoverLayerFlag = function(t) {
                this.__inHover = t;
                var e = this._textContent
                  , r = this._textGuide;
                e && (e.__inHover = t),
                r && (r.__inHover = t)
            }
            ,
            t.prototype.addSelfToZr = function(t) {
                if (this.__zr !== t) {
                    this.__zr = t;
                    var e = this.animators;
                    if (e)
                        for (var r = 0; r < e.length; r++)
                            t.animation.addAnimator(e[r]);
                    this._clipPath && this._clipPath.addSelfToZr(t),
                    this._textContent && this._textContent.addSelfToZr(t),
                    this._textGuide && this._textGuide.addSelfToZr(t)
                }
            }
            ,
            t.prototype.removeSelfFromZr = function(t) {
                if (this.__zr) {
                    this.__zr = null;
                    var e = this.animators;
                    if (e)
                        for (var r = 0; r < e.length; r++)
                            t.animation.removeAnimator(e[r]);
                    this._clipPath && this._clipPath.removeSelfFromZr(t),
                    this._textContent && this._textContent.removeSelfFromZr(t),
                    this._textGuide && this._textGuide.removeSelfFromZr(t)
                }
            }
            ,
            t.prototype.animate = function(t, e, r) {
                var n = t ? this[t] : this;
                var o = new i.Z(n,e,r);
                return t && (o.targetName = t),
                this.addAnimator(o, t),
                o
            }
            ,
            t.prototype.addAnimator = function(t, e) {
                var r = this.__zr
                  , n = this;
                t.during((function() {
                    n.updateDuringAnimation(e)
                }
                )).done((function() {
                    var e = n.animators
                      , r = (0,
                    h.indexOf)(e, t);
                    r >= 0 && e.splice(r, 1)
                }
                )),
                this.animators.push(t),
                r && r.animation.addAnimator(t),
                r && r.wakeUp()
            }
            ,
            t.prototype.updateDuringAnimation = function(t) {
                this.markRedraw()
            }
            ,
            t.prototype.stopAnimation = function(t, e) {
                for (var r = this.animators, n = r.length, i = [], o = 0; o < n; o++) {
                    var a = r[o];
                    t && t !== a.scope ? i.push(a) : a.stop(e)
                }
                return this.animators = i,
                this
            }
            ,
            t.prototype.animateTo = function(t, e, r) {
                _(this, t, e, r)
            }
            ,
            t.prototype.animateFrom = function(t, e, r) {
                _(this, t, e, r, !0)
            }
            ,
            t.prototype._transitionState = function(t, e, r, n) {
                for (var i = _(this, e, r, n), o = 0; o < i.length; o++)
                    i[o].__fromStateTransition = t
            }
            ,
            t.prototype.getBoundingRect = function() {
                return null
            }
            ,
            t.prototype.getPaintRect = function() {
                return null
            }
            ,
            t.initDefaultProps = function() {
                var e = t.prototype;
                e.type = "element",
                e.name = "",
                e.ignore = e.silent = e.isGroup = e.draggable = e.dragging = e.ignoreClip = e.__inHover = !1,
                e.__dirty = c.YV;
                function r(t, r, n, i) {
                    function o(t, e) {
                        Object.defineProperty(e, 0, {
                            get: function() {
                                return t[n]
                            },
                            set: function(e) {
                                t[n] = e
                            }
                        }),
                        Object.defineProperty(e, 1, {
                            get: function() {
                                return t[i]
                            },
                            set: function(e) {
                                t[i] = e
                            }
                        })
                    }
                    Object.defineProperty(e, t, {
                        get: function() {
                            this[r] || o(this, this[r] = []);
                            return this[r]
                        },
                        set: function(t) {
                            this[n] = t[0],
                            this[i] = t[1],
                            this[r] = t,
                            o(this, t)
                        }
                    })
                }
                Object.defineProperty && (r("position", "_legacyPos", "x", "y"),
                r("scale", "_legacyScale", "scaleX", "scaleY"),
                r("origin", "_legacyOrigin", "originX", "originY"))
            }(),
            t
        }();
        function _(t, e, r, n, i) {
            var o = [];
            w(t, "", t, e, r = r || {}, n, o, i);
            var a = o.length
              , s = !1
              , h = r.done
              , u = r.aborted
              , l = function() {
                s = !0,
                --a <= 0 && (s ? h && h() : u && u())
            }
              , c = function() {
                --a <= 0 && (s ? h && h() : u && u())
            };
            a || h && h(),
            o.length > 0 && r.during && o[0].during((function(t, e) {
                r.during(e)
            }
            ));
            for (var f = 0; f < o.length; f++) {
                var p = o[f];
                l && p.done(l),
                c && p.aborted(c),
                r.force && p.duration(r.duration),
                p.start(r.easing)
            }
            return o
        }
        function m(t, e, r) {
            for (var n = 0; n < r; n++)
                t[n] = e[n]
        }
        function x(t, e, r) {
            if ((0,
            h.isArrayLike)(e[r]))
                if ((0,
                h.isArrayLike)(t[r]) || (t[r] = []),
                (0,
                h.isTypedArray)(e[r])) {
                    var n = e[r].length;
                    t[r].length !== n && (t[r] = new e[r].constructor(n),
                    m(t[r], e[r], n))
                } else {
                    var i = e[r]
                      , o = t[r]
                      , a = i.length;
                    if (l = i,
                    (0,
                    h.isArrayLike)(l[0]))
                        for (var s = i[0].length, u = 0; u < a; u++)
                            o[u] ? m(o[u], i[u], s) : o[u] = Array.prototype.slice.call(i[u]);
                    else
                        m(o, i, a);
                    o.length = i.length
                }
            else
                t[r] = e[r];
            var l
        }
        function w(t, e, r, n, o, a, s, u) {
            for (var l = (0,
            h.keys)(n), c = o.duration, f = o.delay, p = o.additive, d = o.setToFinal, y = !(0,
            h.isObject)(a), v = t.animators, g = [], _ = 0; _ < l.length; _++) {
                var m = l[_]
                  , b = n[m];
                if (null != b && null != r[m] && (y || a[m]))
                    if (!(0,
                    h.isObject)(b) || (0,
                    h.isArrayLike)(b) || (0,
                    h.isGradientObject)(b))
                        g.push(m);
                    else {
                        if (e) {
                            u || (r[m] = b,
                            t.updateDuringAnimation(e));
                            continue
                        }
                        w(t, m, r[m], b, o, a && a[m], s, u)
                    }
                else
                    u || (r[m] = b,
                    t.updateDuringAnimation(e),
                    g.push(m))
            }
            var k = g.length;
            if (!p && k)
                for (var S = 0; S < v.length; S++) {
                    if ((C = v[S]).targetName === e)
                        if (C.stopTracks(g)) {
                            var T = (0,
                            h.indexOf)(v, C);
                            v.splice(T, 1)
                        }
                }
            if (o.force || (g = (0,
            h.filter)(g, (function(t) {
                return e = n[t],
                i = r[t],
                !(e === i || (0,
                h.isArrayLike)(e) && (0,
                h.isArrayLike)(i) && function(t, e) {
                    var r = t.length;
                    if (r !== e.length)
                        return !1;
                    for (var n = 0; n < r; n++)
                        if (t[n] !== e[n])
                            return !1;
                    return !0
                }(e, i));
                var e, i
            }
            )),
            k = g.length),
            k > 0 || o.force && !s.length) {
                var C, P = void 0, M = void 0, Z = void 0;
                if (u) {
                    M = {},
                    d && (P = {});
                    for (S = 0; S < k; S++) {
                        M[m = g[S]] = r[m],
                        d ? P[m] = n[m] : r[m] = n[m]
                    }
                } else if (d) {
                    Z = {};
                    for (S = 0; S < k; S++) {
                        Z[m = g[S]] = (0,
                        i.V)(r[m]),
                        x(r, n, m)
                    }
                }
                (C = new i.Z(r,!1,!1,p ? (0,
                h.filter)(v, (function(t) {
                    return t.targetName === e
                }
                )) : null)).targetName = e,
                o.scope && (C.scope = o.scope),
                d && P && C.whenWithKeys(0, P, g),
                Z && C.whenWithKeys(0, Z, g),
                C.whenWithKeys(null == c ? 500 : c, u ? M : n, g).delay(f || 0),
                t.addAnimator(C, e),
                s.push(C)
            }
        }
        (0,
        h.mixin)(g, a.Z),
        (0,
        h.mixin)(g, n.ZP),
        e.Z = g
    },
    25073: function(t, e, r) {
        r.d(e, {
            V: function() {
                return x
            },
            Z: function() {
                return A
            }
        });
        var n = {
            linear: function(t) {
                return t
            },
            quadraticIn: function(t) {
                return t * t
            },
            quadraticOut: function(t) {
                return t * (2 - t)
            },
            quadraticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            cubicIn: function(t) {
                return t * t * t
            },
            cubicOut: function(t) {
                return --t * t * t + 1
            },
            cubicInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            quarticIn: function(t) {
                return t * t * t * t
            },
            quarticOut: function(t) {
                return 1 - --t * t * t * t
            },
            quarticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            quinticIn: function(t) {
                return t * t * t * t * t
            },
            quinticOut: function(t) {
                return --t * t * t * t * t + 1
            },
            quinticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            sinusoidalIn: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            sinusoidalOut: function(t) {
                return Math.sin(t * Math.PI / 2)
            },
            sinusoidalInOut: function(t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            },
            exponentialIn: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            exponentialOut: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            exponentialInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            },
            circularIn: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            circularOut: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            circularInOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            elasticIn: function(t) {
                var e, r = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1,
                e = .1) : e = .4 * Math.asin(1 / r) / (2 * Math.PI),
                -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
            },
            elasticOut: function(t) {
                var e, r = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1,
                e = .1) : e = .4 * Math.asin(1 / r) / (2 * Math.PI),
                r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
            },
            elasticInOut: function(t) {
                var e, r = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1,
                e = .1) : e = n * Math.asin(1 / r) / (2 * Math.PI),
                (t *= 2) < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            backIn: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            backOut: function(t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            },
            backInOut: function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            },
            bounceIn: function(t) {
                return 1 - n.bounceOut(1 - t)
            },
            bounceOut: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceInOut: function(t) {
                return t < .5 ? .5 * n.bounceIn(2 * t) : .5 * n.bounceOut(2 * t - 1) + .5
            }
        }
          , i = n
          , o = r(40207)
          , a = r(42772)
          , s = /cubic-bezier\(([0-9,\.e ]+)\)/;
        function h(t) {
            var e = t && s.exec(t);
            if (e) {
                var r = e[1].split(",")
                  , n = +(0,
                o.trim)(r[0])
                  , i = +(0,
                o.trim)(r[1])
                  , h = +(0,
                o.trim)(r[2])
                  , u = +(0,
                o.trim)(r[3]);
                if (isNaN(n + i + h + u))
                    return;
                var l = [];
                return function(t) {
                    return t <= 0 ? 0 : t >= 1 ? 1 : (0,
                    a.kD)(0, n, h, 1, t, l) && (0,
                    a.af)(0, i, u, 1, l[0])
                }
            }
        }
        var u = function() {
            function t(t) {
                this._inited = !1,
                this._startTime = 0,
                this._pausedTime = 0,
                this._paused = !1,
                this._life = t.life || 1e3,
                this._delay = t.delay || 0,
                this.loop = t.loop || !1,
                this.onframe = t.onframe || o.noop,
                this.ondestroy = t.ondestroy || o.noop,
                this.onrestart = t.onrestart || o.noop,
                t.easing && this.setEasing(t.easing)
            }
            return t.prototype.step = function(t, e) {
                if (this._inited || (this._startTime = t + this._delay,
                this._inited = !0),
                !this._paused) {
                    var r = this._life
                      , n = t - this._startTime - this._pausedTime
                      , i = n / r;
                    i < 0 && (i = 0),
                    i = Math.min(i, 1);
                    var o = this.easingFunc
                      , a = o ? o(i) : i;
                    if (this.onframe(a),
                    1 === i) {
                        if (!this.loop)
                            return !0;
                        var s = n % r;
                        this._startTime = t - s,
                        this._pausedTime = 0,
                        this.onrestart()
                    }
                    return !1
                }
                this._pausedTime += e
            }
            ,
            t.prototype.pause = function() {
                this._paused = !0
            }
            ,
            t.prototype.resume = function() {
                this._paused = !1
            }
            ,
            t.prototype.setEasing = function(t) {
                this.easing = t,
                this.easingFunc = (0,
                o.isFunction)(t) ? t : i[t] || h(t)
            }
            ,
            t
        }()
          , l = r(4490)
          , c = r(51978)
          , f = r(40918).Buffer;
        Math.round;
        c.Z.hasGlobalWindow && (0,
        o.isFunction)(window.btoa);
        var p = Array.prototype.slice;
        function d(t, e, r) {
            return (e - t) * r + t
        }
        function y(t, e, r, n) {
            for (var i = e.length, o = 0; o < i; o++)
                t[o] = d(e[o], r[o], n);
            return t
        }
        function v(t, e, r, n) {
            for (var i = e.length, o = 0; o < i; o++)
                t[o] = e[o] + r[o] * n;
            return t
        }
        function g(t, e, r, n) {
            for (var i = e.length, o = i && e[0].length, a = 0; a < i; a++) {
                t[a] || (t[a] = []);
                for (var s = 0; s < o; s++)
                    t[a][s] = e[a][s] + r[a][s] * n
            }
            return t
        }
        function _(t, e) {
            for (var r = t.length, n = e.length, i = r > n ? e : t, o = Math.min(r, n), a = i[o - 1] || {
                color: [0, 0, 0, 0],
                offset: 0
            }, s = o; s < Math.max(r, n); s++)
                i.push({
                    offset: a.offset,
                    color: a.color.slice()
                })
        }
        function m(t, e, r) {
            var n = t
              , i = e;
            if (n.push && i.push) {
                var o = n.length
                  , a = i.length;
                if (o !== a)
                    if (o > a)
                        n.length = a;
                    else
                        for (var s = o; s < a; s++)
                            n.push(1 === r ? i[s] : p.call(i[s]));
                var h = n[0] && n[0].length;
                for (s = 0; s < n.length; s++)
                    if (1 === r)
                        isNaN(n[s]) && (n[s] = i[s]);
                    else
                        for (var u = 0; u < h; u++)
                            isNaN(n[s][u]) && (n[s][u] = i[s][u])
            }
        }
        function x(t) {
            if ((0,
            o.isArrayLike)(t)) {
                var e = t.length;
                if ((0,
                o.isArrayLike)(t[0])) {
                    for (var r = [], n = 0; n < e; n++)
                        r.push(p.call(t[n]));
                    return r
                }
                return p.call(t)
            }
            return t
        }
        function w(t) {
            return t[0] = Math.floor(t[0]) || 0,
            t[1] = Math.floor(t[1]) || 0,
            t[2] = Math.floor(t[2]) || 0,
            t[3] = null == t[3] ? 1 : t[3],
            "rgba(" + t.join(",") + ")"
        }
        var b = 1
          , k = 2
          , S = 4
          , T = 5;
        function C(t) {
            return t === S || t === T
        }
        function P(t) {
            return t === b || t === k
        }
        var M = [0, 0, 0, 0]
          , Z = function() {
            function t(t) {
                this.keyframes = [],
                this.discrete = !1,
                this._invalid = !1,
                this._needsSort = !1,
                this._lastFr = 0,
                this._lastFrP = 0,
                this.propName = t
            }
            return t.prototype.isFinished = function() {
                return this._finished
            }
            ,
            t.prototype.setFinished = function() {
                this._finished = !0,
                this._additiveTrack && this._additiveTrack.setFinished()
            }
            ,
            t.prototype.needsAnimate = function() {
                return this.keyframes.length >= 1
            }
            ,
            t.prototype.getAdditiveTrack = function() {
                return this._additiveTrack
            }
            ,
            t.prototype.addKeyframe = function(t, e, r) {
                this._needsSort = !0;
                var n = this.keyframes
                  , a = n.length
                  , s = !1
                  , u = 6
                  , c = e;
                if ((0,
                o.isArrayLike)(e)) {
                    var f = function(t) {
                        return (0,
                        o.isArrayLike)(t && t[0]) ? 2 : 1
                    }(e);
                    u = f,
                    (1 === f && !(0,
                    o.isNumber)(e[0]) || 2 === f && !(0,
                    o.isNumber)(e[0][0])) && (s = !0)
                } else if ((0,
                o.isNumber)(e) && !(0,
                o.eqNaN)(e))
                    u = 0;
                else if ((0,
                o.isString)(e))
                    if (isNaN(+e)) {
                        var p = l.parse(e);
                        p && (c = p,
                        u = 3)
                    } else
                        u = 0;
                else if ((0,
                o.isGradientObject)(e)) {
                    var d = (0,
                    o.extend)({}, c);
                    d.colorStops = (0,
                    o.map)(e.colorStops, (function(t) {
                        return {
                            offset: t.offset,
                            color: l.parse(t.color)
                        }
                    }
                    )),
                    "linear" === e.type ? u = S : function(t) {
                        return "radial" === t.type
                    }(e) && (u = T),
                    c = d
                }
                0 === a ? this.valType = u : u === this.valType && 6 !== u || (s = !0),
                this.discrete = this.discrete || s;
                var y = {
                    time: t,
                    value: c,
                    rawValue: e,
                    percent: 0
                };
                return r && (y.easing = r,
                y.easingFunc = (0,
                o.isFunction)(r) ? r : i[r] || h(r)),
                n.push(y),
                y
            }
            ,
            t.prototype.prepare = function(t, e) {
                var r = this.keyframes;
                this._needsSort && r.sort((function(t, e) {
                    return t.time - e.time
                }
                ));
                for (var n = this.valType, i = r.length, o = r[i - 1], a = this.discrete, s = P(n), h = C(n), u = 0; u < i; u++) {
                    var l = r[u]
                      , c = l.value
                      , f = o.value;
                    l.percent = l.time / t,
                    a || (s && u !== i - 1 ? m(c, f, n) : h && _(c.colorStops, f.colorStops))
                }
                if (!a && n !== T && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
                    this._additiveTrack = e;
                    var p = r[0].value;
                    for (u = 0; u < i; u++)
                        0 === n ? r[u].additiveValue = r[u].value - p : 3 === n ? r[u].additiveValue = v([], r[u].value, p, -1) : P(n) && (r[u].additiveValue = n === b ? v([], r[u].value, p, -1) : g([], r[u].value, p, -1))
                }
            }
            ,
            t.prototype.step = function(t, e) {
                if (!this._finished) {
                    this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                    var r, n, i, a = null != this._additiveTrack, s = a ? "additiveValue" : "value", h = this.valType, u = this.keyframes, l = u.length, c = this.propName, f = 3 === h, p = this._lastFr, v = Math.min;
                    if (1 === l)
                        n = i = u[0];
                    else {
                        if (e < 0)
                            r = 0;
                        else if (e < this._lastFrP) {
                            for (r = v(p + 1, l - 1); r >= 0 && !(u[r].percent <= e); r--)
                                ;
                            r = v(r, l - 2)
                        } else {
                            for (r = p; r < l && !(u[r].percent > e); r++)
                                ;
                            r = v(r - 1, l - 2)
                        }
                        i = u[r + 1],
                        n = u[r]
                    }
                    if (n && i) {
                        this._lastFr = r,
                        this._lastFrP = e;
                        var g = i.percent - n.percent
                          , _ = 0 === g ? 1 : v((e - n.percent) / g, 1);
                        i.easingFunc && (_ = i.easingFunc(_));
                        var m = a ? this._additiveValue : f ? M : t[c];
                        if (!P(h) && !f || m || (m = this._additiveValue = []),
                        this.discrete)
                            t[c] = _ < 1 ? n.rawValue : i.rawValue;
                        else if (P(h))
                            h === b ? y(m, n[s], i[s], _) : function(t, e, r, n) {
                                for (var i = e.length, o = i && e[0].length, a = 0; a < i; a++) {
                                    t[a] || (t[a] = []);
                                    for (var s = 0; s < o; s++)
                                        t[a][s] = d(e[a][s], r[a][s], n)
                                }
                            }(m, n[s], i[s], _);
                        else if (C(h)) {
                            var x = n[s]
                              , k = i[s]
                              , T = h === S;
                            t[c] = {
                                type: T ? "linear" : "radial",
                                x: d(x.x, k.x, _),
                                y: d(x.y, k.y, _),
                                colorStops: (0,
                                o.map)(x.colorStops, (function(t, e) {
                                    var r = k.colorStops[e];
                                    return {
                                        offset: d(t.offset, r.offset, _),
                                        color: w(y([], t.color, r.color, _))
                                    }
                                }
                                )),
                                global: k.global
                            },
                            T ? (t[c].x2 = d(x.x2, k.x2, _),
                            t[c].y2 = d(x.y2, k.y2, _)) : t[c].r = d(x.r, k.r, _)
                        } else if (f)
                            y(m, n[s], i[s], _),
                            a || (t[c] = w(m));
                        else {
                            var Z = d(n[s], i[s], _);
                            a ? this._additiveValue = Z : t[c] = Z
                        }
                        a && this._addToTarget(t)
                    }
                }
            }
            ,
            t.prototype._addToTarget = function(t) {
                var e = this.valType
                  , r = this.propName
                  , n = this._additiveValue;
                0 === e ? t[r] = t[r] + n : 3 === e ? (l.parse(t[r], M),
                v(M, M, n, 1),
                t[r] = w(M)) : e === b ? v(t[r], t[r], n, 1) : e === k && g(t[r], t[r], n, 1)
            }
            ,
            t
        }()
          , A = function() {
            function t(t, e, r, n) {
                this._tracks = {},
                this._trackKeys = [],
                this._maxTime = 0,
                this._started = 0,
                this._clip = null,
                this._target = t,
                this._loop = e,
                e && n ? (0,
                o.logError)("Can' use additive animation on looped animation.") : (this._additiveAnimators = n,
                this._allowDiscrete = r)
            }
            return t.prototype.getMaxTime = function() {
                return this._maxTime
            }
            ,
            t.prototype.getDelay = function() {
                return this._delay
            }
            ,
            t.prototype.getLoop = function() {
                return this._loop
            }
            ,
            t.prototype.getTarget = function() {
                return this._target
            }
            ,
            t.prototype.changeTarget = function(t) {
                this._target = t
            }
            ,
            t.prototype.when = function(t, e, r) {
                return this.whenWithKeys(t, e, (0,
                o.keys)(e), r)
            }
            ,
            t.prototype.whenWithKeys = function(t, e, r, n) {
                for (var i = this._tracks, o = 0; o < r.length; o++) {
                    var a = r[o]
                      , s = i[a];
                    if (!s) {
                        s = i[a] = new Z(a);
                        var h = void 0
                          , u = this._getAdditiveTrack(a);
                        if (u) {
                            var l = u.keyframes
                              , c = l[l.length - 1];
                            h = c && c.value,
                            3 === u.valType && h && (h = w(h))
                        } else
                            h = this._target[a];
                        if (null == h)
                            continue;
                        t > 0 && s.addKeyframe(0, x(h), n),
                        this._trackKeys.push(a)
                    }
                    s.addKeyframe(t, x(e[a]), n)
                }
                return this._maxTime = Math.max(this._maxTime, t),
                this
            }
            ,
            t.prototype.pause = function() {
                this._clip.pause(),
                this._paused = !0
            }
            ,
            t.prototype.resume = function() {
                this._clip.resume(),
                this._paused = !1
            }
            ,
            t.prototype.isPaused = function() {
                return !!this._paused
            }
            ,
            t.prototype.duration = function(t) {
                return this._maxTime = t,
                this._force = !0,
                this
            }
            ,
            t.prototype._doneCallback = function() {
                this._setTracksFinished(),
                this._clip = null;
                var t = this._doneCbs;
                if (t)
                    for (var e = t.length, r = 0; r < e; r++)
                        t[r].call(this)
            }
            ,
            t.prototype._abortedCallback = function() {
                this._setTracksFinished();
                var t = this.animation
                  , e = this._abortedCbs;
                if (t && t.removeClip(this._clip),
                this._clip = null,
                e)
                    for (var r = 0; r < e.length; r++)
                        e[r].call(this)
            }
            ,
            t.prototype._setTracksFinished = function() {
                for (var t = this._tracks, e = this._trackKeys, r = 0; r < e.length; r++)
                    t[e[r]].setFinished()
            }
            ,
            t.prototype._getAdditiveTrack = function(t) {
                var e, r = this._additiveAnimators;
                if (r)
                    for (var n = 0; n < r.length; n++) {
                        var i = r[n].getTrack(t);
                        i && (e = i)
                    }
                return e
            }
            ,
            t.prototype.start = function(t) {
                if (!(this._started > 0)) {
                    this._started = 1;
                    for (var e = this, r = [], n = this._maxTime || 0, i = 0; i < this._trackKeys.length; i++) {
                        var o = this._trackKeys[i]
                          , a = this._tracks[o]
                          , s = this._getAdditiveTrack(o)
                          , h = a.keyframes
                          , l = h.length;
                        if (a.prepare(n, s),
                        a.needsAnimate())
                            if (!this._allowDiscrete && a.discrete) {
                                var c = h[l - 1];
                                c && (e._target[a.propName] = c.rawValue),
                                a.setFinished()
                            } else
                                r.push(a)
                    }
                    if (r.length || this._force) {
                        var f = new u({
                            life: n,
                            loop: this._loop,
                            delay: this._delay || 0,
                            onframe: function(t) {
                                e._started = 2;
                                var n = e._additiveAnimators;
                                if (n) {
                                    for (var i = !1, o = 0; o < n.length; o++)
                                        if (n[o]._clip) {
                                            i = !0;
                                            break
                                        }
                                    i || (e._additiveAnimators = null)
                                }
                                for (o = 0; o < r.length; o++)
                                    r[o].step(e._target, t);
                                var a = e._onframeCbs;
                                if (a)
                                    for (o = 0; o < a.length; o++)
                                        a[o](e._target, t)
                            },
                            ondestroy: function() {
                                e._doneCallback()
                            }
                        });
                        this._clip = f,
                        this.animation && this.animation.addClip(f),
                        t && f.setEasing(t)
                    } else
                        this._doneCallback();
                    return this
                }
            }
            ,
            t.prototype.stop = function(t) {
                if (this._clip) {
                    var e = this._clip;
                    t && e.onframe(1),
                    this._abortedCallback()
                }
            }
            ,
            t.prototype.delay = function(t) {
                return this._delay = t,
                this
            }
            ,
            t.prototype.during = function(t) {
                return t && (this._onframeCbs || (this._onframeCbs = []),
                this._onframeCbs.push(t)),
                this
            }
            ,
            t.prototype.done = function(t) {
                return t && (this._doneCbs || (this._doneCbs = []),
                this._doneCbs.push(t)),
                this
            }
            ,
            t.prototype.aborted = function(t) {
                return t && (this._abortedCbs || (this._abortedCbs = []),
                this._abortedCbs.push(t)),
                this
            }
            ,
            t.prototype.getClip = function() {
                return this._clip
            }
            ,
            t.prototype.getTrack = function(t) {
                return this._tracks[t]
            }
            ,
            t.prototype.getTracks = function() {
                var t = this;
                return (0,
                o.map)(this._trackKeys, (function(e) {
                    return t._tracks[e]
                }
                ))
            }
            ,
            t.prototype.stopTracks = function(t, e) {
                if (!t.length || !this._clip)
                    return !0;
                for (var r = this._tracks, n = this._trackKeys, i = 0; i < t.length; i++) {
                    var o = r[t[i]];
                    o && !o.isFinished() && (e ? o.step(this._target, 1) : 1 === this._started && o.step(this._target, 0),
                    o.setFinished())
                }
                var a = !0;
                for (i = 0; i < n.length; i++)
                    if (!r[n[i]].isFinished()) {
                        a = !1;
                        break
                    }
                return a && this._abortedCallback(),
                a
            }
            ,
            t.prototype.saveTo = function(t, e, r) {
                if (t) {
                    e = e || this._trackKeys;
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n]
                          , o = this._tracks[i];
                        if (o && !o.isFinished()) {
                            var a = o.keyframes
                              , s = a[r ? 0 : a.length - 1];
                            s && (t[i] = x(s.rawValue))
                        }
                    }
                }
            }
            ,
            t.prototype.__changeFinalValue = function(t, e) {
                e = e || (0,
                o.keys)(t);
                for (var r = 0; r < e.length; r++) {
                    var n = e[r]
                      , i = this._tracks[n];
                    if (i) {
                        var a = i.keyframes;
                        if (a.length > 1) {
                            var s = a.pop();
                            i.addKeyframe(s.time, t[n]),
                            i.prepare(this._maxTime, i.getAdditiveTrack())
                        }
                    }
                }
            }
            ,
            t
        }()
    },
    42102: function(t, e, r) {
        var n;
        n = r(51978).Z.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
            return setTimeout(t, 16)
        }
        ,
        e.Z = n
    },
    61100: function(t, e, r) {
        r.d(e, {
            Z: function() {
                return x
            }
        });
        var n = r(83169)
          , i = r(40207)
          , o = r(51126)
          , a = r(82797)
          , s = r(22594)
          , h = r(75733)
          , u = r(75579)
          , l = r(20064)
          , c = r(13959);
        function f(t, e, r) {
            var n = c.qW.createCanvas()
              , i = e.getWidth()
              , o = e.getHeight()
              , a = n.style;
            return a && (a.position = "absolute",
            a.left = "0",
            a.top = "0",
            a.width = i + "px",
            a.height = o + "px",
            n.setAttribute("data-zr-dom-id", t)),
            n.width = i * r,
            n.height = o * r,
            n
        }
        var p = function(t) {
            function e(e, r, o) {
                var a, s = t.call(this) || this;
                s.motionBlur = !1,
                s.lastFrameAlpha = .7,
                s.dpr = 1,
                s.virtual = !1,
                s.config = {},
                s.incremental = !1,
                s.zlevel = 0,
                s.maxRepaintRectCount = 5,
                s.__dirty = !0,
                s.__firstTimePaint = !0,
                s.__used = !1,
                s.__drawIndex = 0,
                s.__startIndex = 0,
                s.__endIndex = 0,
                s.__prevStartIndex = null,
                s.__prevEndIndex = null,
                o = o || n.KL,
                "string" === typeof e ? a = f(e, r, o) : i.isObject(e) && (e = (a = e).id),
                s.id = e,
                s.dom = a;
                var h = a.style;
                return h && (i.disableUserSelect(a),
                a.onselectstart = function() {
                    return !1
                }
                ,
                h.padding = "0",
                h.margin = "0",
                h.borderWidth = "0"),
                s.painter = r,
                s.dpr = o,
                s
            }
            return (0,
            o.ZT)(e, t),
            e.prototype.getElementCount = function() {
                return this.__endIndex - this.__startIndex
            }
            ,
            e.prototype.afterBrush = function() {
                this.__prevStartIndex = this.__startIndex,
                this.__prevEndIndex = this.__endIndex
            }
            ,
            e.prototype.initContext = function() {
                this.ctx = this.dom.getContext("2d"),
                this.ctx.dpr = this.dpr
            }
            ,
            e.prototype.setUnpainted = function() {
                this.__firstTimePaint = !0
            }
            ,
            e.prototype.createBackBuffer = function() {
                var t = this.dpr;
                this.domBack = f("back-" + this.id, this.painter, t),
                this.ctxBack = this.domBack.getContext("2d"),
                1 !== t && this.ctxBack.scale(t, t)
            }
            ,
            e.prototype.createRepaintRects = function(t, e, r, n) {
                if (this.__firstTimePaint)
                    return this.__firstTimePaint = !1,
                    null;
                var i, o = [], a = this.maxRepaintRectCount, s = !1, h = new u.Z(0,0,0,0);
                function c(t) {
                    if (t.isFinite() && !t.isZero())
                        if (0 === o.length) {
                            (e = new u.Z(0,0,0,0)).copy(t),
                            o.push(e)
                        } else {
                            for (var e, r = !1, n = 1 / 0, i = 0, l = 0; l < o.length; ++l) {
                                var c = o[l];
                                if (c.intersect(t)) {
                                    var f = new u.Z(0,0,0,0);
                                    f.copy(c),
                                    f.union(t),
                                    o[l] = f,
                                    r = !0;
                                    break
                                }
                                if (s) {
                                    h.copy(t),
                                    h.union(c);
                                    var p = t.width * t.height
                                      , d = c.width * c.height
                                      , y = h.width * h.height - p - d;
                                    y < n && (n = y,
                                    i = l)
                                }
                            }
                            if (s && (o[i].union(t),
                            r = !0),
                            !r)
                                (e = new u.Z(0,0,0,0)).copy(t),
                                o.push(e);
                            s || (s = o.length >= a)
                        }
                }
                for (var f = this.__startIndex; f < this.__endIndex; ++f) {
                    if (y = t[f]) {
                        var p = y.shouldBePainted(r, n, !0, !0);
                        (v = y.__isRendered && (y.__dirty & l.YV || !p) ? y.getPrevPaintRect() : null) && c(v);
                        var d = p && (y.__dirty & l.YV || !y.__isRendered) ? y.getPaintRect() : null;
                        d && c(d)
                    }
                }
                for (f = this.__prevStartIndex; f < this.__prevEndIndex; ++f) {
                    var y, v;
                    p = (y = e[f]).shouldBePainted(r, n, !0, !0);
                    if (y && (!p || !y.__zr) && y.__isRendered)
                        (v = y.getPrevPaintRect()) && c(v)
                }
                do {
                    i = !1;
                    for (f = 0; f < o.length; )
                        if (o[f].isZero())
                            o.splice(f, 1);
                        else {
                            for (var g = f + 1; g < o.length; )
                                o[f].intersect(o[g]) ? (i = !0,
                                o[f].union(o[g]),
                                o.splice(g, 1)) : g++;
                            f++
                        }
                } while (i);
                return this._paintRects = o,
                o
            }
            ,
            e.prototype.debugGetPaintRects = function() {
                return (this._paintRects || []).slice()
            }
            ,
            e.prototype.resize = function(t, e) {
                var r = this.dpr
                  , n = this.dom
                  , i = n.style
                  , o = this.domBack;
                i && (i.width = t + "px",
                i.height = e + "px"),
                n.width = t * r,
                n.height = e * r,
                o && (o.width = t * r,
                o.height = e * r,
                1 !== r && this.ctxBack.scale(r, r))
            }
            ,
            e.prototype.clear = function(t, e, r) {
                var n = this.dom
                  , o = this.ctx
                  , a = n.width
                  , u = n.height;
                e = e || this.clearColor;
                var l = this.motionBlur && !t
                  , c = this.lastFrameAlpha
                  , f = this.dpr
                  , p = this;
                l && (this.domBack || this.createBackBuffer(),
                this.ctxBack.globalCompositeOperation = "copy",
                this.ctxBack.drawImage(n, 0, 0, a / f, u / f));
                var d = this.domBack;
                function y(t, r, n, a) {
                    if (o.clearRect(t, r, n, a),
                    e && "transparent" !== e) {
                        var u = void 0;
                        if (i.isGradientObject(e))
                            u = (e.global || e.__width === n && e.__height === a) && e.__canvasGradient || (0,
                            s.ZF)(o, e, {
                                x: 0,
                                y: 0,
                                width: n,
                                height: a
                            }),
                            e.__canvasGradient = u,
                            e.__width = n,
                            e.__height = a;
                        else
                            i.isImagePatternObject(e) && (e.scaleX = e.scaleX || f,
                            e.scaleY = e.scaleY || f,
                            u = (0,
                            h.RZ)(o, e, {
                                dirty: function() {
                                    p.setUnpainted(),
                                    p.__painter.refresh()
                                }
                            }));
                        o.save(),
                        o.fillStyle = u || e,
                        o.fillRect(t, r, n, a),
                        o.restore()
                    }
                    l && (o.save(),
                    o.globalAlpha = c,
                    o.drawImage(d, t, r, n, a),
                    o.restore())
                }
                !r || l ? y(0, 0, a, u) : r.length && i.each(r, (function(t) {
                    y(t.x * f, t.y * f, t.width * f, t.height * f)
                }
                ))
            }
            ,
            e
        }(a.Z)
          , d = r(42102)
          , y = r(51978)
          , v = 1e5
          , g = 314159
          , _ = .01;
        var m = function() {
            function t(t, e, r, o) {
                this.type = "canvas",
                this._zlevelList = [],
                this._prevDisplayList = [],
                this._layers = {},
                this._layerConfig = {},
                this._needsManuallyCompositing = !1,
                this.type = "canvas";
                var a = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = r = i.extend({}, r || {}),
                this.dpr = r.devicePixelRatio || n.KL,
                this._singleCanvas = a,
                this.root = t,
                t.style && (i.disableUserSelect(t),
                t.innerHTML = ""),
                this.storage = e;
                var h = this._zlevelList;
                this._prevDisplayList = [];
                var u = this._layers;
                if (a) {
                    var l = t
                      , c = l.width
                      , f = l.height;
                    null != r.width && (c = r.width),
                    null != r.height && (f = r.height),
                    this.dpr = r.devicePixelRatio || 1,
                    l.width = c * this.dpr,
                    l.height = f * this.dpr,
                    this._width = c,
                    this._height = f;
                    var d = new p(l,this,this.dpr);
                    d.__builtin__ = !0,
                    d.initContext(),
                    u[314159] = d,
                    d.zlevel = g,
                    h.push(g),
                    this._domRoot = t
                } else {
                    this._width = (0,
                    s.ap)(t, 0, r),
                    this._height = (0,
                    s.ap)(t, 1, r);
                    var y = this._domRoot = function(t, e) {
                        var r = document.createElement("div");
                        return r.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";",
                        r
                    }(this._width, this._height);
                    t.appendChild(y)
                }
            }
            return t.prototype.getType = function() {
                return "canvas"
            }
            ,
            t.prototype.isSingleCanvas = function() {
                return this._singleCanvas
            }
            ,
            t.prototype.getViewportRoot = function() {
                return this._domRoot
            }
            ,
            t.prototype.getViewportRootOffset = function() {
                var t = this.getViewportRoot();
                if (t)
                    return {
                        offsetLeft: t.offsetLeft || 0,
                        offsetTop: t.offsetTop || 0
                    }
            }
            ,
            t.prototype.refresh = function(t) {
                var e = this.storage.getDisplayList(!0)
                  , r = this._prevDisplayList
                  , n = this._zlevelList;
                this._redrawId = Math.random(),
                this._paintList(e, r, t, this._redrawId);
                for (var i = 0; i < n.length; i++) {
                    var o = n[i]
                      , a = this._layers[o];
                    if (!a.__builtin__ && a.refresh) {
                        var s = 0 === i ? this._backgroundColor : null;
                        a.refresh(s)
                    }
                }
                return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()),
                this
            }
            ,
            t.prototype.refreshHover = function() {
                this._paintHoverList(this.storage.getDisplayList(!1))
            }
            ,
            t.prototype._paintHoverList = function(t) {
                var e = t.length
                  , r = this._hoverlayer;
                if (r && r.clear(),
                e) {
                    for (var n, i = {
                        inHover: !0,
                        viewWidth: this._width,
                        viewHeight: this._height
                    }, o = 0; o < e; o++) {
                        var a = t[o];
                        a.__inHover && (r || (r = this._hoverlayer = this.getLayer(v)),
                        n || (n = r.ctx).save(),
                        (0,
                        h.Dm)(n, a, i, o === e - 1))
                    }
                    n && n.restore()
                }
            }
            ,
            t.prototype.getHoverLayer = function() {
                return this.getLayer(v)
            }
            ,
            t.prototype.paintOne = function(t, e) {
                (0,
                h.RV)(t, e)
            }
            ,
            t.prototype._paintList = function(t, e, r, n) {
                if (this._redrawId === n) {
                    r = r || !1,
                    this._updateLayerStatus(t);
                    var i = this._doPaintList(t, e, r)
                      , o = i.finished
                      , a = i.needsRefreshHover;
                    if (this._needsManuallyCompositing && this._compositeManually(),
                    a && this._paintHoverList(t),
                    o)
                        this.eachLayer((function(t) {
                            t.afterBrush && t.afterBrush()
                        }
                        ));
                    else {
                        var s = this;
                        (0,
                        d.Z)((function() {
                            s._paintList(t, e, r, n)
                        }
                        ))
                    }
                }
            }
            ,
            t.prototype._compositeManually = function() {
                var t = this.getLayer(g).ctx
                  , e = this._domRoot.width
                  , r = this._domRoot.height;
                t.clearRect(0, 0, e, r),
                this.eachBuiltinLayer((function(n) {
                    n.virtual && t.drawImage(n.dom, 0, 0, e, r)
                }
                ))
            }
            ,
            t.prototype._doPaintList = function(t, e, r) {
                for (var n = this, o = [], a = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
                    var h = this._zlevelList[s]
                      , u = this._layers[h];
                    u.__builtin__ && u !== this._hoverlayer && (u.__dirty || r) && o.push(u)
                }
                for (var l = !0, c = !1, f = function(i) {
                    var s, h = o[i], u = h.ctx, f = a && h.createRepaintRects(t, e, p._width, p._height), d = r ? h.__startIndex : h.__drawIndex, y = !r && h.incremental && Date.now, v = y && Date.now(), g = h.zlevel === p._zlevelList[0] ? p._backgroundColor : null;
                    if (h.__startIndex === h.__endIndex)
                        h.clear(!1, g, f);
                    else if (d === h.__startIndex) {
                        var _ = t[d];
                        _.incremental && _.notClear && !r || h.clear(!1, g, f)
                    }
                    -1 === d && (console.error("For some unknown reason. drawIndex is -1"),
                    d = h.__startIndex);
                    var m = function(e) {
                        var r = {
                            inHover: !1,
                            allClipped: !1,
                            prevEl: null,
                            viewWidth: n._width,
                            viewHeight: n._height
                        };
                        for (s = d; s < h.__endIndex; s++) {
                            var i = t[s];
                            if (i.__inHover && (c = !0),
                            n._doPaintEl(i, h, a, e, r, s === h.__endIndex - 1),
                            y)
                                if (Date.now() - v > 15)
                                    break
                        }
                        r.prevElClipPaths && u.restore()
                    };
                    if (f)
                        if (0 === f.length)
                            s = h.__endIndex;
                        else
                            for (var x = p.dpr, w = 0; w < f.length; ++w) {
                                var b = f[w];
                                u.save(),
                                u.beginPath(),
                                u.rect(b.x * x, b.y * x, b.width * x, b.height * x),
                                u.clip(),
                                m(b),
                                u.restore()
                            }
                    else
                        u.save(),
                        m(),
                        u.restore();
                    h.__drawIndex = s,
                    h.__drawIndex < h.__endIndex && (l = !1)
                }, p = this, d = 0; d < o.length; d++)
                    f(d);
                return y.Z.wxa && i.each(this._layers, (function(t) {
                    t && t.ctx && t.ctx.draw && t.ctx.draw()
                }
                )),
                {
                    finished: l,
                    needsRefreshHover: c
                }
            }
            ,
            t.prototype._doPaintEl = function(t, e, r, n, i, o) {
                var a = e.ctx;
                if (r) {
                    var s = t.getPaintRect();
                    (!n || s && s.intersect(n)) && ((0,
                    h.Dm)(a, t, i, o),
                    t.setPrevPaintRect(s))
                } else
                    (0,
                    h.Dm)(a, t, i, o)
            }
            ,
            t.prototype.getLayer = function(t, e) {
                this._singleCanvas && !this._needsManuallyCompositing && (t = g);
                var r = this._layers[t];
                return r || ((r = new p("zr_" + t,this,this.dpr)).zlevel = t,
                r.__builtin__ = !0,
                this._layerConfig[t] ? i.merge(r, this._layerConfig[t], !0) : this._layerConfig[t - _] && i.merge(r, this._layerConfig[t - _], !0),
                e && (r.virtual = e),
                this.insertLayer(t, r),
                r.initContext()),
                r
            }
            ,
            t.prototype.insertLayer = function(t, e) {
                var r = this._layers
                  , n = this._zlevelList
                  , i = n.length
                  , o = this._domRoot
                  , a = null
                  , s = -1;
                if (!r[t] && function(t) {
                    return !!t && (!!t.__builtin__ || "function" === typeof t.resize && "function" === typeof t.refresh)
                }(e)) {
                    if (i > 0 && t > n[0]) {
                        for (s = 0; s < i - 1 && !(n[s] < t && n[s + 1] > t); s++)
                            ;
                        a = r[n[s]]
                    }
                    if (n.splice(s + 1, 0, t),
                    r[t] = e,
                    !e.virtual)
                        if (a) {
                            var h = a.dom;
                            h.nextSibling ? o.insertBefore(e.dom, h.nextSibling) : o.appendChild(e.dom)
                        } else
                            o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
                    e.__painter = this
                }
            }
            ,
            t.prototype.eachLayer = function(t, e) {
                for (var r = this._zlevelList, n = 0; n < r.length; n++) {
                    var i = r[n];
                    t.call(e, this._layers[i], i)
                }
            }
            ,
            t.prototype.eachBuiltinLayer = function(t, e) {
                for (var r = this._zlevelList, n = 0; n < r.length; n++) {
                    var i = r[n]
                      , o = this._layers[i];
                    o.__builtin__ && t.call(e, o, i)
                }
            }
            ,
            t.prototype.eachOtherLayer = function(t, e) {
                for (var r = this._zlevelList, n = 0; n < r.length; n++) {
                    var i = r[n]
                      , o = this._layers[i];
                    o.__builtin__ || t.call(e, o, i)
                }
            }
            ,
            t.prototype.getLayers = function() {
                return this._layers
            }
            ,
            t.prototype._updateLayerStatus = function(t) {
                function e(t) {
                    a && (a.__endIndex !== t && (a.__dirty = !0),
                    a.__endIndex = t)
                }
                if (this.eachBuiltinLayer((function(t, e) {
                    t.__dirty = t.__used = !1
                }
                )),
                this._singleCanvas)
                    for (var r = 1; r < t.length; r++) {
                        if ((h = t[r]).zlevel !== t[r - 1].zlevel || h.incremental) {
                            this._needsManuallyCompositing = !0;
                            break
                        }
                    }
                var n, o, a = null, s = 0;
                for (o = 0; o < t.length; o++) {
                    var h, u = (h = t[o]).zlevel, c = void 0;
                    n !== u && (n = u,
                    s = 0),
                    h.incremental ? ((c = this.getLayer(u + .001, this._needsManuallyCompositing)).incremental = !0,
                    s = 1) : c = this.getLayer(u + (s > 0 ? _ : 0), this._needsManuallyCompositing),
                    c.__builtin__ || i.logError("ZLevel " + u + " has been used by unkown layer " + c.id),
                    c !== a && (c.__used = !0,
                    c.__startIndex !== o && (c.__dirty = !0),
                    c.__startIndex = o,
                    c.incremental ? c.__drawIndex = -1 : c.__drawIndex = o,
                    e(o),
                    a = c),
                    h.__dirty & l.YV && !h.__inHover && (c.__dirty = !0,
                    c.incremental && c.__drawIndex < 0 && (c.__drawIndex = o))
                }
                e(o),
                this.eachBuiltinLayer((function(t, e) {
                    !t.__used && t.getElementCount() > 0 && (t.__dirty = !0,
                    t.__startIndex = t.__endIndex = t.__drawIndex = 0),
                    t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
                }
                ))
            }
            ,
            t.prototype.clear = function() {
                return this.eachBuiltinLayer(this._clearLayer),
                this
            }
            ,
            t.prototype._clearLayer = function(t) {
                t.clear()
            }
            ,
            t.prototype.setBackgroundColor = function(t) {
                this._backgroundColor = t,
                i.each(this._layers, (function(t) {
                    t.setUnpainted()
                }
                ))
            }
            ,
            t.prototype.configLayer = function(t, e) {
                if (e) {
                    var r = this._layerConfig;
                    r[t] ? i.merge(r[t], e, !0) : r[t] = e;
                    for (var n = 0; n < this._zlevelList.length; n++) {
                        var o = this._zlevelList[n];
                        if (o === t || o === t + _) {
                            var a = this._layers[o];
                            i.merge(a, r[t], !0)
                        }
                    }
                }
            }
            ,
            t.prototype.delLayer = function(t) {
                var e = this._layers
                  , r = this._zlevelList
                  , n = e[t];
                n && (n.dom.parentNode.removeChild(n.dom),
                delete e[t],
                r.splice(i.indexOf(r, t), 1))
            }
            ,
            t.prototype.resize = function(t, e) {
                if (this._domRoot.style) {
                    var r = this._domRoot;
                    r.style.display = "none";
                    var n = this._opts
                      , i = this.root;
                    if (null != t && (n.width = t),
                    null != e && (n.height = e),
                    t = (0,
                    s.ap)(i, 0, n),
                    e = (0,
                    s.ap)(i, 1, n),
                    r.style.display = "",
                    this._width !== t || e !== this._height) {
                        for (var o in r.style.width = t + "px",
                        r.style.height = e + "px",
                        this._layers)
                            this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
                        this.refresh(!0)
                    }
                    this._width = t,
                    this._height = e
                } else {
                    if (null == t || null == e)
                        return;
                    this._width = t,
                    this._height = e,
                    this.getLayer(g).resize(t, e)
                }
                return this
            }
            ,
            t.prototype.clearLayer = function(t) {
                var e = this._layers[t];
                e && e.clear()
            }
            ,
            t.prototype.dispose = function() {
                this.root.innerHTML = "",
                this.root = this.storage = this._domRoot = this._layers = null
            }
            ,
            t.prototype.getRenderedCanvas = function(t) {
                if (t = t || {},
                this._singleCanvas && !this._compositeManually)
                    return this._layers[314159].dom;
                var e = new p("image",this,t.pixelRatio || this.dpr);
                e.initContext(),
                e.clear(!1, t.backgroundColor || this._backgroundColor);
                var r = e.ctx;
                if (t.pixelRatio <= this.dpr) {
                    this.refresh();
                    var n = e.dom.width
                      , i = e.dom.height;
                    this.eachLayer((function(t) {
                        t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (r.save(),
                        t.renderToCanvas(r),
                        r.restore())
                    }
                    ))
                } else
                    for (var o = {
                        inHover: !1,
                        viewWidth: this._width,
                        viewHeight: this._height
                    }, a = this.storage.getDisplayList(!0), s = 0, u = a.length; s < u; s++) {
                        var l = a[s];
                        (0,
                        h.Dm)(r, l, o, s === u - 1)
                    }
                return e.dom
            }
            ,
            t.prototype.getWidth = function() {
                return this._width
            }
            ,
            t.prototype.getHeight = function() {
                return this._height
            }
            ,
            t
        }()
          , x = m
    },
    75733: function(t, e, r) {
        r.d(e, {
            Dm: function() {
                return O
            },
            RV: function() {
                return D
            },
            RZ: function() {
                return x
            }
        });
        var n = r(30194)
          , i = r(2070)
          , o = r(8358)
          , a = r(22594)
          , s = r(15706)
          , h = r(63540)
          , u = r(1449)
          , l = r(40207);
        function c(t) {
            var e, r, n = t.style, i = n.lineDash && n.lineWidth > 0 && (e = n.lineDash,
            r = n.lineWidth,
            e && "solid" !== e && r > 0 ? "dashed" === e ? [4 * r, 2 * r] : "dotted" === e ? [r] : (0,
            l.isNumber)(e) ? [e] : (0,
            l.isArray)(e) ? e : null : null), o = n.lineDashOffset;
            if (i) {
                var a = n.strokeNoScale && t.getLineScale ? t.getLineScale() : 1;
                a && 1 !== a && (i = (0,
                l.map)(i, (function(t) {
                    return t / a
                }
                )),
                o /= a)
            }
            return [i, o]
        }
        var f = r(20064)
          , p = r(13959)
          , d = new i.Z(!0);
        function y(t) {
            var e = t.stroke;
            return !(null == e || "none" === e || !(t.lineWidth > 0))
        }
        function v(t) {
            return "string" === typeof t && "none" !== t
        }
        function g(t) {
            var e = t.fill;
            return null != e && "none" !== e
        }
        function _(t, e) {
            if (null != e.fillOpacity && 1 !== e.fillOpacity) {
                var r = t.globalAlpha;
                t.globalAlpha = e.fillOpacity * e.opacity,
                t.fill(),
                t.globalAlpha = r
            } else
                t.fill()
        }
        function m(t, e) {
            if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
                var r = t.globalAlpha;
                t.globalAlpha = e.strokeOpacity * e.opacity,
                t.stroke(),
                t.globalAlpha = r
            } else
                t.stroke()
        }
        function x(t, e, r) {
            var n = (0,
            o.Gq)(e.image, e.__image, r);
            if ((0,
            o.v5)(n)) {
                var i = t.createPattern(n, e.repeat || "repeat");
                if ("function" === typeof DOMMatrix && i && i.setTransform) {
                    var a = new DOMMatrix;
                    a.translateSelf(e.x || 0, e.y || 0),
                    a.rotateSelf(0, 0, (e.rotation || 0) * l.RADIAN_TO_DEGREE),
                    a.scaleSelf(e.scaleX || 1, e.scaleY || 1),
                    i.setTransform(a)
                }
                return i
            }
        }
        var w = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"]
          , b = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]];
        function k(t, e, r, i, o) {
            var a = !1;
            if (!i && e === (r = r || {}))
                return !1;
            if (i || e.opacity !== r.opacity) {
                A(t, o),
                a = !0;
                var s = Math.max(Math.min(e.opacity, 1), 0);
                t.globalAlpha = isNaN(s) ? n.tj.opacity : s
            }
            (i || e.blend !== r.blend) && (a || (A(t, o),
            a = !0),
            t.globalCompositeOperation = e.blend || n.tj.blend);
            for (var h = 0; h < w.length; h++) {
                var u = w[h];
                (i || e[u] !== r[u]) && (a || (A(t, o),
                a = !0),
                t[u] = t.dpr * (e[u] || 0))
            }
            return (i || e.shadowColor !== r.shadowColor) && (a || (A(t, o),
            a = !0),
            t.shadowColor = e.shadowColor || n.tj.shadowColor),
            a
        }
        function S(t, e, r, n, i) {
            var o = L(e, i.inHover)
              , a = n ? null : r && L(r, i.inHover) || {};
            if (o === a)
                return !1;
            var s = k(t, o, a, n, i);
            if ((n || o.fill !== a.fill) && (s || (A(t, i),
            s = !0),
            v(o.fill) && (t.fillStyle = o.fill)),
            (n || o.stroke !== a.stroke) && (s || (A(t, i),
            s = !0),
            v(o.stroke) && (t.strokeStyle = o.stroke)),
            (n || o.opacity !== a.opacity) && (s || (A(t, i),
            s = !0),
            t.globalAlpha = null == o.opacity ? 1 : o.opacity),
            e.hasStroke()) {
                var h = o.lineWidth / (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1);
                t.lineWidth !== h && (s || (A(t, i),
                s = !0),
                t.lineWidth = h)
            }
            for (var u = 0; u < b.length; u++) {
                var l = b[u]
                  , c = l[0];
                (n || o[c] !== a[c]) && (s || (A(t, i),
                s = !0),
                t[c] = o[c] || l[1])
            }
            return s
        }
        function T(t, e) {
            var r = e.transform
              , n = t.dpr || 1;
            r ? t.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : t.setTransform(n, 0, 0, n, 0, 0)
        }
        var C = 1
          , P = 2
          , M = 3
          , Z = 4;
        function A(t, e) {
            e.batchFill && t.fill(),
            e.batchStroke && t.stroke(),
            e.batchFill = "",
            e.batchStroke = ""
        }
        function L(t, e) {
            return e && t.__hoverStyle || t.style
        }
        function D(t, e) {
            O(t, e, {
                inHover: !1,
                viewWidth: 0,
                viewHeight: 0
            }, !0)
        }
        function O(t, e, r, n) {
            var i = e.transform;
            if (!e.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1))
                return e.__dirty &= ~f.YV,
                void (e.__isRendered = !1);
            var l = e.__clipPaths
              , v = r.prevElClipPaths
              , w = !1
              , b = !1;
            if (v && !(0,
            a.cF)(l, v) || (v && v.length && (A(t, r),
            t.restore(),
            b = w = !0,
            r.prevElClipPaths = null,
            r.allClipped = !1,
            r.prevEl = null),
            l && l.length && (A(t, r),
            t.save(),
            function(t, e, r) {
                for (var n = !1, i = 0; i < t.length; i++) {
                    var o = t[i];
                    n = n || o.isZeroArea(),
                    T(e, o),
                    e.beginPath(),
                    o.buildPath(e, o.shape),
                    e.clip()
                }
                r.allClipped = n
            }(l, t, r),
            w = !0),
            r.prevElClipPaths = l),
            r.allClipped)
                e.__isRendered = !1;
            else {
                e.beforeBrush && e.beforeBrush(),
                e.innerBeforeBrush();
                var D = r.prevEl;
                D || (b = w = !0);
                var z, R, I = e instanceof s.ZP && e.autoBatch && function(t) {
                    var e = g(t)
                      , r = y(t);
                    return !(t.lineDash || !(+e ^ +r) || e && "string" !== typeof t.fill || r && "string" !== typeof t.stroke || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1)
                }(e.style);
                w || (z = i,
                R = D.transform,
                z && R ? z[0] !== R[0] || z[1] !== R[1] || z[2] !== R[2] || z[3] !== R[3] || z[4] !== R[4] || z[5] !== R[5] : z || R) ? (A(t, r),
                T(t, e)) : I || A(t, r);
                var F = L(e, r.inHover);
                e instanceof s.ZP ? (r.lastDrawType !== C && (b = !0,
                r.lastDrawType = C),
                S(t, e, D, b, r),
                I && (r.batchFill || r.batchStroke) || t.beginPath(),
                function(t, e, r, n) {
                    var i, o = y(r), s = g(r), h = r.strokePercent, u = h < 1, l = !e.path;
                    e.silent && !u || !l || e.createPathProxy();
                    var p = e.path || d
                      , v = e.__dirty;
                    if (!n) {
                        var w = r.fill
                          , b = r.stroke
                          , k = s && !!w.colorStops
                          , S = o && !!b.colorStops
                          , T = s && !!w.image
                          , C = o && !!b.image
                          , P = void 0
                          , M = void 0
                          , Z = void 0
                          , A = void 0
                          , L = void 0;
                        (k || S) && (L = e.getBoundingRect()),
                        k && (P = v ? (0,
                        a.ZF)(t, w, L) : e.__canvasFillGradient,
                        e.__canvasFillGradient = P),
                        S && (M = v ? (0,
                        a.ZF)(t, b, L) : e.__canvasStrokeGradient,
                        e.__canvasStrokeGradient = M),
                        T && (Z = v || !e.__canvasFillPattern ? x(t, w, e) : e.__canvasFillPattern,
                        e.__canvasFillPattern = Z),
                        C && (A = v || !e.__canvasStrokePattern ? x(t, b, e) : e.__canvasStrokePattern,
                        e.__canvasStrokePattern = Z),
                        k ? t.fillStyle = P : T && (Z ? t.fillStyle = Z : s = !1),
                        S ? t.strokeStyle = M : C && (A ? t.strokeStyle = A : o = !1)
                    }
                    var D, O, z = e.getGlobalScale();
                    p.setScale(z[0], z[1], e.segmentIgnoreThreshold),
                    t.setLineDash && r.lineDash && (D = (i = c(e))[0],
                    O = i[1]);
                    var R = !0;
                    (l || v & f.RH) && (p.setDPR(t.dpr),
                    u ? p.setContext(null) : (p.setContext(t),
                    R = !1),
                    p.reset(),
                    e.buildPath(p, e.shape, n),
                    p.toStatic(),
                    e.pathUpdated()),
                    R && p.rebuildPath(t, u ? h : 1),
                    D && (t.setLineDash(D),
                    t.lineDashOffset = O),
                    n || (r.strokeFirst ? (o && m(t, r),
                    s && _(t, r)) : (s && _(t, r),
                    o && m(t, r))),
                    D && t.setLineDash([])
                }(t, e, F, I),
                I && (r.batchFill = F.fill || "",
                r.batchStroke = F.stroke || "")) : e instanceof u.Z ? (r.lastDrawType !== M && (b = !0,
                r.lastDrawType = M),
                S(t, e, D, b, r),
                function(t, e, r) {
                    var n, i = r.text;
                    if (null != i && (i += ""),
                    i) {
                        t.font = r.font || p.Uo,
                        t.textAlign = r.textAlign,
                        t.textBaseline = r.textBaseline;
                        var o = void 0
                          , a = void 0;
                        t.setLineDash && r.lineDash && (o = (n = c(e))[0],
                        a = n[1]),
                        o && (t.setLineDash(o),
                        t.lineDashOffset = a),
                        r.strokeFirst ? (y(r) && t.strokeText(i, r.x, r.y),
                        g(r) && t.fillText(i, r.x, r.y)) : (g(r) && t.fillText(i, r.x, r.y),
                        y(r) && t.strokeText(i, r.x, r.y)),
                        o && t.setLineDash([])
                    }
                }(t, e, F)) : e instanceof h.ZP ? (r.lastDrawType !== P && (b = !0,
                r.lastDrawType = P),
                function(t, e, r, n, i) {
                    k(t, L(e, i.inHover), r && L(r, i.inHover), n, i)
                }(t, e, D, b, r),
                function(t, e, r) {
                    var n = e.__image = (0,
                    o.Gq)(r.image, e.__image, e, e.onload);
                    if (n && (0,
                    o.v5)(n)) {
                        var i = r.x || 0
                          , a = r.y || 0
                          , s = e.getWidth()
                          , h = e.getHeight()
                          , u = n.width / n.height;
                        if (null == s && null != h ? s = h * u : null == h && null != s ? h = s / u : null == s && null == h && (s = n.width,
                        h = n.height),
                        r.sWidth && r.sHeight) {
                            var l = r.sx || 0
                              , c = r.sy || 0;
                            t.drawImage(n, l, c, r.sWidth, r.sHeight, i, a, s, h)
                        } else if (r.sx && r.sy) {
                            var f = s - (l = r.sx)
                              , p = h - (c = r.sy);
                            t.drawImage(n, l, c, f, p, i, a, s, h)
                        } else
                            t.drawImage(n, i, a, s, h)
                    }
                }(t, e, F)) : e.getTemporalDisplayables && (r.lastDrawType !== Z && (b = !0,
                r.lastDrawType = Z),
                function(t, e, r) {
                    var n = e.getDisplayables()
                      , i = e.getTemporalDisplayables();
                    t.save();
                    var o, a, s = {
                        prevElClipPaths: null,
                        prevEl: null,
                        allClipped: !1,
                        viewWidth: r.viewWidth,
                        viewHeight: r.viewHeight,
                        inHover: r.inHover
                    };
                    for (o = e.getCursor(),
                    a = n.length; o < a; o++) {
                        (l = n[o]).beforeBrush && l.beforeBrush(),
                        l.innerBeforeBrush(),
                        O(t, l, s, o === a - 1),
                        l.innerAfterBrush(),
                        l.afterBrush && l.afterBrush(),
                        s.prevEl = l
                    }
                    for (var h = 0, u = i.length; h < u; h++) {
                        var l;
                        (l = i[h]).beforeBrush && l.beforeBrush(),
                        l.innerBeforeBrush(),
                        O(t, l, s, h === u - 1),
                        l.innerAfterBrush(),
                        l.afterBrush && l.afterBrush(),
                        s.prevEl = l
                    }
                    e.clearTemporalDisplayables(),
                    e.notClear = !0,
                    t.restore()
                }(t, e, r)),
                I && n && A(t, r),
                e.innerAfterBrush(),
                e.afterBrush && e.afterBrush(),
                r.prevEl = e,
                e.__dirty = 0,
                e.__isRendered = !0
            }
        }
    },
    22594: function(t, e, r) {
        function n(t) {
            return isFinite(t)
        }
        function i(t, e, r) {
            for (var i = "radial" === e.type ? function(t, e, r) {
                var i = r.width
                  , o = r.height
                  , a = Math.min(i, o)
                  , s = null == e.x ? .5 : e.x
                  , h = null == e.y ? .5 : e.y
                  , u = null == e.r ? .5 : e.r;
                return e.global || (s = s * i + r.x,
                h = h * o + r.y,
                u *= a),
                s = n(s) ? s : .5,
                h = n(h) ? h : .5,
                u = u >= 0 && n(u) ? u : .5,
                t.createRadialGradient(s, h, 0, s, h, u)
            }(t, e, r) : function(t, e, r) {
                var i = null == e.x ? 0 : e.x
                  , o = null == e.x2 ? 1 : e.x2
                  , a = null == e.y ? 0 : e.y
                  , s = null == e.y2 ? 0 : e.y2;
                return e.global || (i = i * r.width + r.x,
                o = o * r.width + r.x,
                a = a * r.height + r.y,
                s = s * r.height + r.y),
                i = n(i) ? i : 0,
                o = n(o) ? o : 1,
                a = n(a) ? a : 0,
                s = n(s) ? s : 0,
                t.createLinearGradient(i, a, o, s)
            }(t, e, r), o = e.colorStops, a = 0; a < o.length; a++)
                i.addColorStop(o[a].offset, o[a].color);
            return i
        }
        function o(t, e) {
            if (t === e || !t && !e)
                return !1;
            if (!t || !e || t.length !== e.length)
                return !0;
            for (var r = 0; r < t.length; r++)
                if (t[r] !== e[r])
                    return !0;
            return !1
        }
        function a(t) {
            return parseInt(t, 10)
        }
        function s(t, e, r) {
            var n = ["width", "height"][e]
              , i = ["clientWidth", "clientHeight"][e]
              , o = ["paddingLeft", "paddingTop"][e]
              , s = ["paddingRight", "paddingBottom"][e];
            if (null != r[n] && "auto" !== r[n])
                return parseFloat(r[n]);
            var h = document.defaultView.getComputedStyle(t);
            return (t[i] || a(h[n]) || a(t.style[n])) - (a(h[o]) || 0) - (a(h[s]) || 0) | 0
        }
        r.d(e, {
            ZF: function() {
                return i
            },
            ap: function() {
                return s
            },
            cF: function() {
                return o
            }
        })
    },
    83169: function(t, e, r) {
        r.d(e, {
            Ak: function() {
                return o
            },
            GD: function() {
                return s
            },
            KL: function() {
                return i
            },
            iv: function() {
                return h
            },
            vU: function() {
                return a
            }
        });
        var n = 1;
        r(51978).Z.hasGlobalWindow && (n = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
        var i = n
          , o = .4
          , a = "#333"
          , s = "#ccc"
          , h = "#eee"
    },
    43981: function(t, e, r) {
        r.d(e, {
            X: function() {
                return a
            }
        });
        var n = r(9221)
          , i = 1e-8;
        function o(t, e) {
            return Math.abs(t - e) < i
        }
        function a(t, e, r) {
            var i = 0
              , a = t[0];
            if (!a)
                return !1;
            for (var s = 1; s < t.length; s++) {
                var h = t[s];
                i += (0,
                n.Z)(a[0], a[1], h[0], h[1], e, r),
                a = h
            }
            var u = t[0];
            return o(a[0], u[0]) && o(a[1], u[1]) || (i += (0,
            n.Z)(a[0], a[1], u[0], u[1], e, r)),
            0 !== i
        }
    },
    41116: function(t, e, r) {
        r.d(e, {
            Dp: function() {
                return f
            },
            GM: function() {
                return p
            },
            M3: function() {
                return l
            },
            dz: function() {
                return s
            },
            lP: function() {
                return u
            },
            mU: function() {
                return c
            },
            wI: function() {
                return d
            }
        });
        var n = r(75579)
          , i = r(8352)
          , o = r(13959)
          , a = {};
        function s(t, e) {
            e = e || o.Uo;
            var r = a[e];
            r || (r = a[e] = new i.ZP(500));
            var n = r.get(t);
            return null == n && (n = o.qW.measureText(t, e).width,
            r.put(t, n)),
            n
        }
        function h(t, e, r, i) {
            var o = s(t, e)
              , a = f(e)
              , h = l(0, o, r)
              , u = c(0, a, i);
            return new n.Z(h,u,o,a)
        }
        function u(t, e, r, i) {
            var o = ((t || "") + "").split("\n");
            if (1 === o.length)
                return h(o[0], e, r, i);
            for (var a = new n.Z(0,0,0,0), s = 0; s < o.length; s++) {
                var u = h(o[s], e, r, i);
                0 === s ? a.copy(u) : a.union(u)
            }
            return a
        }
        function l(t, e, r) {
            return "right" === r ? t -= e : "center" === r && (t -= e / 2),
            t
        }
        function c(t, e, r) {
            return "middle" === r ? t -= e / 2 : "bottom" === r && (t -= e),
            t
        }
        function f(t) {
            return s("\u56fd", t)
        }
        function p(t, e) {
            return "string" === typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }
        function d(t, e, r) {
            var n = e.position || "inside"
              , i = null != e.distance ? e.distance : 5
              , o = r.height
              , a = r.width
              , s = o / 2
              , h = r.x
              , u = r.y
              , l = "left"
              , c = "top";
            if (n instanceof Array)
                h += p(n[0], r.width),
                u += p(n[1], r.height),
                l = null,
                c = null;
            else
                switch (n) {
                case "left":
                    h -= i,
                    u += s,
                    l = "right",
                    c = "middle";
                    break;
                case "right":
                    h += i + a,
                    u += s,
                    c = "middle";
                    break;
                case "top":
                    h += a / 2,
                    u -= i,
                    l = "center",
                    c = "bottom";
                    break;
                case "bottom":
                    h += a / 2,
                    u += o + i,
                    l = "center";
                    break;
                case "inside":
                    h += a / 2,
                    u += s,
                    l = "center",
                    c = "middle";
                    break;
                case "insideLeft":
                    h += i,
                    u += s,
                    c = "middle";
                    break;
                case "insideRight":
                    h += a - i,
                    u += s,
                    l = "right",
                    c = "middle";
                    break;
                case "insideTop":
                    h += a / 2,
                    u += i,
                    l = "center";
                    break;
                case "insideBottom":
                    h += a / 2,
                    u += o - i,
                    l = "center",
                    c = "bottom";
                    break;
                case "insideTopLeft":
                    h += i,
                    u += i;
                    break;
                case "insideTopRight":
                    h += a - i,
                    u += i,
                    l = "right";
                    break;
                case "insideBottomLeft":
                    h += i,
                    u += o - i,
                    c = "bottom";
                    break;
                case "insideBottomRight":
                    h += a - i,
                    u += o - i,
                    l = "right",
                    c = "bottom"
                }
            return (t = t || {}).x = h,
            t.y = u,
            t.align = l,
            t.verticalAlign = c,
            t
        }
    },
    95e3: function(t, e, r) {
        r.d(e, {
            m: function() {
                return i
            }
        });
        var n = 2 * Math.PI;
        function i(t) {
            return (t %= n) < 0 && (t += n),
            t
        }
    },
    9221: function(t, e, r) {
        function n(t, e, r, n, i, o) {
            if (o > e && o > n || o < e && o < n)
                return 0;
            if (n === e)
                return 0;
            var a = (o - e) / (n - e)
              , s = n < e ? 1 : -1;
            1 !== a && 0 !== a || (s = n < e ? .5 : -.5);
            var h = a * (r - t) + t;
            return h === i ? 1 / 0 : h > i ? s : 0
        }
        r.d(e, {
            Z: function() {
                return n
            }
        })
    },
    75579: function(t, e, r) {
        var n = r(68876)
          , i = r(20299)
          , o = Math.min
          , a = Math.max
          , s = new i.Z
          , h = new i.Z
          , u = new i.Z
          , l = new i.Z
          , c = new i.Z
          , f = new i.Z
          , p = function() {
            function t(t, e, r, n) {
                r < 0 && (t += r,
                r = -r),
                n < 0 && (e += n,
                n = -n),
                this.x = t,
                this.y = e,
                this.width = r,
                this.height = n
            }
            return t.prototype.union = function(t) {
                var e = o(t.x, this.x)
                  , r = o(t.y, this.y);
                isFinite(this.x) && isFinite(this.width) ? this.width = a(t.x + t.width, this.x + this.width) - e : this.width = t.width,
                isFinite(this.y) && isFinite(this.height) ? this.height = a(t.y + t.height, this.y + this.height) - r : this.height = t.height,
                this.x = e,
                this.y = r
            }
            ,
            t.prototype.applyTransform = function(e) {
                t.applyTransform(this, this, e)
            }
            ,
            t.prototype.calculateTransform = function(t) {
                var e = this
                  , r = t.width / e.width
                  , i = t.height / e.height
                  , o = n.create();
                return n.translate(o, o, [-e.x, -e.y]),
                n.scale(o, o, [r, i]),
                n.translate(o, o, [t.x, t.y]),
                o
            }
            ,
            t.prototype.intersect = function(e, r) {
                if (!e)
                    return !1;
                e instanceof t || (e = t.create(e));
                var n = this
                  , o = n.x
                  , a = n.x + n.width
                  , s = n.y
                  , h = n.y + n.height
                  , u = e.x
                  , l = e.x + e.width
                  , p = e.y
                  , d = e.y + e.height
                  , y = !(a < u || l < o || h < p || d < s);
                if (r) {
                    var v = 1 / 0
                      , g = 0
                      , _ = Math.abs(a - u)
                      , m = Math.abs(l - o)
                      , x = Math.abs(h - p)
                      , w = Math.abs(d - s)
                      , b = Math.min(_, m)
                      , k = Math.min(x, w);
                    a < u || l < o ? b > g && (g = b,
                    _ < m ? i.Z.set(f, -_, 0) : i.Z.set(f, m, 0)) : b < v && (v = b,
                    _ < m ? i.Z.set(c, _, 0) : i.Z.set(c, -m, 0)),
                    h < p || d < s ? k > g && (g = k,
                    x < w ? i.Z.set(f, 0, -x) : i.Z.set(f, 0, w)) : b < v && (v = b,
                    x < w ? i.Z.set(c, 0, x) : i.Z.set(c, 0, -w))
                }
                return r && i.Z.copy(r, y ? c : f),
                y
            }
            ,
            t.prototype.contain = function(t, e) {
                var r = this;
                return t >= r.x && t <= r.x + r.width && e >= r.y && e <= r.y + r.height
            }
            ,
            t.prototype.clone = function() {
                return new t(this.x,this.y,this.width,this.height)
            }
            ,
            t.prototype.copy = function(e) {
                t.copy(this, e)
            }
            ,
            t.prototype.plain = function() {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height
                }
            }
            ,
            t.prototype.isFinite = function() {
                return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height)
            }
            ,
            t.prototype.isZero = function() {
                return 0 === this.width || 0 === this.height
            }
            ,
            t.create = function(e) {
                return new t(e.x,e.y,e.width,e.height)
            }
            ,
            t.copy = function(t, e) {
                t.x = e.x,
                t.y = e.y,
                t.width = e.width,
                t.height = e.height
            }
            ,
            t.applyTransform = function(e, r, n) {
                if (n) {
                    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
                        var i = n[0]
                          , c = n[3]
                          , f = n[4]
                          , p = n[5];
                        return e.x = r.x * i + f,
                        e.y = r.y * c + p,
                        e.width = r.width * i,
                        e.height = r.height * c,
                        e.width < 0 && (e.x += e.width,
                        e.width = -e.width),
                        void (e.height < 0 && (e.y += e.height,
                        e.height = -e.height))
                    }
                    s.x = u.x = r.x,
                    s.y = l.y = r.y,
                    h.x = l.x = r.x + r.width,
                    h.y = u.y = r.y + r.height,
                    s.transform(n),
                    l.transform(n),
                    h.transform(n),
                    u.transform(n),
                    e.x = o(s.x, h.x, u.x, l.x),
                    e.y = o(s.y, h.y, u.y, l.y);
                    var d = a(s.x, h.x, u.x, l.x)
                      , y = a(s.y, h.y, u.y, l.y);
                    e.width = d - e.x,
                    e.height = y - e.y
                } else
                    e !== r && t.copy(e, r)
            }
            ,
            t
        }();
        e.Z = p
    },
    82797: function(t, e) {
        var r = function() {
            function t(t) {
                t && (this._$eventProcessor = t)
            }
            return t.prototype.on = function(t, e, r, n) {
                this._$handlers || (this._$handlers = {});
                var i = this._$handlers;
                if ("function" === typeof e && (n = r,
                r = e,
                e = null),
                !r || !t)
                    return this;
                var o = this._$eventProcessor;
                null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)),
                i[t] || (i[t] = []);
                for (var a = 0; a < i[t].length; a++)
                    if (i[t][a].h === r)
                        return this;
                var s = {
                    h: r,
                    query: e,
                    ctx: n || this,
                    callAtLast: r.zrEventfulCallAtLast
                }
                  , h = i[t].length - 1
                  , u = i[t][h];
                return u && u.callAtLast ? i[t].splice(h, 0, s) : i[t].push(s),
                this
            }
            ,
            t.prototype.isSilent = function(t) {
                var e = this._$handlers;
                return !e || !e[t] || !e[t].length
            }
            ,
            t.prototype.off = function(t, e) {
                var r = this._$handlers;
                if (!r)
                    return this;
                if (!t)
                    return this._$handlers = {},
                    this;
                if (e) {
                    if (r[t]) {
                        for (var n = [], i = 0, o = r[t].length; i < o; i++)
                            r[t][i].h !== e && n.push(r[t][i]);
                        r[t] = n
                    }
                    r[t] && 0 === r[t].length && delete r[t]
                } else
                    delete r[t];
                return this
            }
            ,
            t.prototype.trigger = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
                if (!this._$handlers)
                    return this;
                var n = this._$handlers[t]
                  , i = this._$eventProcessor;
                if (n)
                    for (var o = e.length, a = n.length, s = 0; s < a; s++) {
                        var h = n[s];
                        if (!i || !i.filter || null == h.query || i.filter(t, h.query))
                            switch (o) {
                            case 0:
                                h.h.call(h.ctx);
                                break;
                            case 1:
                                h.h.call(h.ctx, e[0]);
                                break;
                            case 2:
                                h.h.call(h.ctx, e[0], e[1]);
                                break;
                            default:
                                h.h.apply(h.ctx, e)
                            }
                    }
                return i && i.afterTrigger && i.afterTrigger(t),
                this
            }
            ,
            t.prototype.triggerWithContext = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
                if (!this._$handlers)
                    return this;
                var n = this._$handlers[t]
                  , i = this._$eventProcessor;
                if (n)
                    for (var o = e.length, a = e[o - 1], s = n.length, h = 0; h < s; h++) {
                        var u = n[h];
                        if (!i || !i.filter || null == u.query || i.filter(t, u.query))
                            switch (o) {
                            case 0:
                                u.h.call(a);
                                break;
                            case 1:
                                u.h.call(a, e[0]);
                                break;
                            case 2:
                                u.h.call(a, e[0], e[1]);
                                break;
                            default:
                                u.h.apply(a, e.slice(1, o - 1))
                            }
                    }
                return i && i.afterTrigger && i.afterTrigger(t),
                this
            }
            ,
            t
        }();
        e.Z = r
    },
    8352: function(t, e, r) {
        var n = function(t) {
            this.value = t
        }
          , i = function() {
            function t() {
                this._len = 0
            }
            return t.prototype.insert = function(t) {
                var e = new n(t);
                return this.insertEntry(e),
                e
            }
            ,
            t.prototype.insertEntry = function(t) {
                this.head ? (this.tail.next = t,
                t.prev = this.tail,
                t.next = null,
                this.tail = t) : this.head = this.tail = t,
                this._len++
            }
            ,
            t.prototype.remove = function(t) {
                var e = t.prev
                  , r = t.next;
                e ? e.next = r : this.head = r,
                r ? r.prev = e : this.tail = e,
                t.next = t.prev = null,
                this._len--
            }
            ,
            t.prototype.len = function() {
                return this._len
            }
            ,
            t.prototype.clear = function() {
                this.head = this.tail = null,
                this._len = 0
            }
            ,
            t
        }()
          , o = function() {
            function t(t) {
                this._list = new i,
                this._maxSize = 10,
                this._map = {},
                this._maxSize = t
            }
            return t.prototype.put = function(t, e) {
                var r = this._list
                  , i = this._map
                  , o = null;
                if (null == i[t]) {
                    var a = r.len()
                      , s = this._lastRemovedEntry;
                    if (a >= this._maxSize && a > 0) {
                        var h = r.head;
                        r.remove(h),
                        delete i[h.key],
                        o = h.value,
                        this._lastRemovedEntry = h
                    }
                    s ? s.value = e : s = new n(e),
                    s.key = t,
                    r.insertEntry(s),
                    i[t] = s
                }
                return o
            }
            ,
            t.prototype.get = function(t) {
                var e = this._map[t]
                  , r = this._list;
                if (null != e)
                    return e !== r.tail && (r.remove(e),
                    r.insertEntry(e)),
                    e.value
            }
            ,
            t.prototype.clear = function() {
                this._list.clear(),
                this._map = {}
            }
            ,
            t.prototype.len = function() {
                return this._list.len()
            }
            ,
            t
        }();
        e.ZP = o
    },
    88184: function(t, e, r) {
        var n = r(20299)
          , i = [0, 0]
          , o = [0, 0]
          , a = new n.Z
          , s = new n.Z
          , h = function() {
            function t(t, e) {
                this._corners = [],
                this._axes = [],
                this._origin = [0, 0];
                for (var r = 0; r < 4; r++)
                    this._corners[r] = new n.Z;
                for (r = 0; r < 2; r++)
                    this._axes[r] = new n.Z;
                t && this.fromBoundingRect(t, e)
            }
            return t.prototype.fromBoundingRect = function(t, e) {
                var r = this._corners
                  , i = this._axes
                  , o = t.x
                  , a = t.y
                  , s = o + t.width
                  , h = a + t.height;
                if (r[0].set(o, a),
                r[1].set(s, a),
                r[2].set(s, h),
                r[3].set(o, h),
                e)
                    for (var u = 0; u < 4; u++)
                        r[u].transform(e);
                n.Z.sub(i[0], r[1], r[0]),
                n.Z.sub(i[1], r[3], r[0]),
                i[0].normalize(),
                i[1].normalize();
                for (u = 0; u < 2; u++)
                    this._origin[u] = i[u].dot(r[0])
            }
            ,
            t.prototype.intersect = function(t, e) {
                var r = !0
                  , i = !e;
                return a.set(1 / 0, 1 / 0),
                s.set(0, 0),
                !this._intersectCheckOneSide(this, t, a, s, i, 1) && (r = !1,
                i) || !this._intersectCheckOneSide(t, this, a, s, i, -1) && (r = !1,
                i) || i || n.Z.copy(e, r ? a : s),
                r
            }
            ,
            t.prototype._intersectCheckOneSide = function(t, e, r, a, s, h) {
                for (var u = !0, l = 0; l < 2; l++) {
                    var c = this._axes[l];
                    if (this._getProjMinMaxOnAxis(l, t._corners, i),
                    this._getProjMinMaxOnAxis(l, e._corners, o),
                    i[1] < o[0] || i[0] > o[1]) {
                        if (u = !1,
                        s)
                            return u;
                        var f = Math.abs(o[0] - i[1])
                          , p = Math.abs(i[0] - o[1]);
                        Math.min(f, p) > a.len() && (f < p ? n.Z.scale(a, c, -f * h) : n.Z.scale(a, c, p * h))
                    } else if (r) {
                        f = Math.abs(o[0] - i[1]),
                        p = Math.abs(i[0] - o[1]);
                        Math.min(f, p) < r.len() && (f < p ? n.Z.scale(r, c, f * h) : n.Z.scale(r, c, -p * h))
                    }
                }
                return u
            }
            ,
            t.prototype._getProjMinMaxOnAxis = function(t, e, r) {
                for (var n = this._axes[t], i = this._origin, o = e[0].dot(n) + i[t], a = o, s = o, h = 1; h < e.length; h++) {
                    var u = e[h].dot(n) + i[t];
                    a = Math.min(u, a),
                    s = Math.max(u, s)
                }
                r[0] = a,
                r[1] = s
            }
            ,
            t
        }();
        e.Z = h
    },
    2070: function(t, e, r) {
        r.d(e, {
            Z: function() {
                return E
            },
            L: function() {
                return B
            }
        });
        var n = r(81614)
          , i = r(75579)
          , o = r(83169)
          , a = r(42772)
          , s = Math.min
          , h = Math.max
          , u = Math.sin
          , l = Math.cos
          , c = 2 * Math.PI
          , f = n.create()
          , p = n.create()
          , d = n.create();
        function y(t, e, r, n, i, o) {
            i[0] = s(t, r),
            i[1] = s(e, n),
            o[0] = h(t, r),
            o[1] = h(e, n)
        }
        var v = []
          , g = [];
        function _(t, e, r, n, i, o, u, l, c, f) {
            var p = a.pP
              , d = a.af
              , y = p(t, r, i, u, v);
            c[0] = 1 / 0,
            c[1] = 1 / 0,
            f[0] = -1 / 0,
            f[1] = -1 / 0;
            for (var _ = 0; _ < y; _++) {
                var m = d(t, r, i, u, v[_]);
                c[0] = s(m, c[0]),
                f[0] = h(m, f[0])
            }
            y = p(e, n, o, l, g);
            for (_ = 0; _ < y; _++) {
                var x = d(e, n, o, l, g[_]);
                c[1] = s(x, c[1]),
                f[1] = h(x, f[1])
            }
            c[0] = s(t, c[0]),
            f[0] = h(t, f[0]),
            c[0] = s(u, c[0]),
            f[0] = h(u, f[0]),
            c[1] = s(e, c[1]),
            f[1] = h(e, f[1]),
            c[1] = s(l, c[1]),
            f[1] = h(l, f[1])
        }
        function m(t, e, r, n, i, o, u, l) {
            var c = a.QC
              , f = a.Zm
              , p = h(s(c(t, r, i), 1), 0)
              , d = h(s(c(e, n, o), 1), 0)
              , y = f(t, r, i, p)
              , v = f(e, n, o, d);
            u[0] = s(t, i, y),
            u[1] = s(e, o, v),
            l[0] = h(t, i, y),
            l[1] = h(e, o, v)
        }
        function x(t, e, r, i, o, a, s, h, y) {
            var v = n.min
              , g = n.max
              , _ = Math.abs(o - a);
            if (_ % c < 1e-4 && _ > 1e-4)
                return h[0] = t - r,
                h[1] = e - i,
                y[0] = t + r,
                void (y[1] = e + i);
            if (f[0] = l(o) * r + t,
            f[1] = u(o) * i + e,
            p[0] = l(a) * r + t,
            p[1] = u(a) * i + e,
            v(h, f, p),
            g(y, f, p),
            (o %= c) < 0 && (o += c),
            (a %= c) < 0 && (a += c),
            o > a && !s ? a += c : o < a && s && (o += c),
            s) {
                var m = a;
                a = o,
                o = m
            }
            for (var x = 0; x < a; x += Math.PI / 2)
                x > o && (d[0] = l(x) * r + t,
                d[1] = u(x) * i + e,
                v(h, d, h),
                g(y, d, y))
        }
        var w = {
            M: 1,
            L: 2,
            C: 3,
            Q: 4,
            A: 5,
            Z: 6,
            R: 7
        }
          , b = []
          , k = []
          , S = []
          , T = []
          , C = []
          , P = []
          , M = Math.min
          , Z = Math.max
          , A = Math.cos
          , L = Math.sin
          , D = Math.abs
          , O = Math.PI
          , z = 2 * O
          , R = "undefined" !== typeof Float32Array
          , I = [];
        function F(t) {
            return Math.round(t / O * 1e8) / 1e8 % 2 * O
        }
        function B(t, e) {
            var r = F(t[0]);
            r < 0 && (r += z);
            var n = r - t[0]
              , i = t[1];
            i += n,
            !e && i - r >= z ? i = r + z : e && r - i >= z ? i = r - z : !e && r > i ? i = r + (z - F(r - i)) : e && r < i && (i = r - (z - F(i - r))),
            t[0] = r,
            t[1] = i
        }
        var H = function() {
            function t(t) {
                this.dpr = 1,
                this._xi = 0,
                this._yi = 0,
                this._x0 = 0,
                this._y0 = 0,
                this._len = 0,
                t && (this._saveData = !1),
                this._saveData && (this.data = [])
            }
            return t.prototype.increaseVersion = function() {
                this._version++
            }
            ,
            t.prototype.getVersion = function() {
                return this._version
            }
            ,
            t.prototype.setScale = function(t, e, r) {
                (r = r || 0) > 0 && (this._ux = D(r / o.KL / t) || 0,
                this._uy = D(r / o.KL / e) || 0)
            }
            ,
            t.prototype.setDPR = function(t) {
                this.dpr = t
            }
            ,
            t.prototype.setContext = function(t) {
                this._ctx = t
            }
            ,
            t.prototype.getContext = function() {
                return this._ctx
            }
            ,
            t.prototype.beginPath = function() {
                return this._ctx && this._ctx.beginPath(),
                this.reset(),
                this
            }
            ,
            t.prototype.reset = function() {
                this._saveData && (this._len = 0),
                this._pathSegLen && (this._pathSegLen = null,
                this._pathLen = 0),
                this._version++
            }
            ,
            t.prototype.moveTo = function(t, e) {
                return this._drawPendingPt(),
                this.addData(w.M, t, e),
                this._ctx && this._ctx.moveTo(t, e),
                this._x0 = t,
                this._y0 = e,
                this._xi = t,
                this._yi = e,
                this
            }
            ,
            t.prototype.lineTo = function(t, e) {
                var r = D(t - this._xi)
                  , n = D(e - this._yi)
                  , i = r > this._ux || n > this._uy;
                if (this.addData(w.L, t, e),
                this._ctx && i && this._ctx.lineTo(t, e),
                i)
                    this._xi = t,
                    this._yi = e,
                    this._pendingPtDist = 0;
                else {
                    var o = r * r + n * n;
                    o > this._pendingPtDist && (this._pendingPtX = t,
                    this._pendingPtY = e,
                    this._pendingPtDist = o)
                }
                return this
            }
            ,
            t.prototype.bezierCurveTo = function(t, e, r, n, i, o) {
                return this._drawPendingPt(),
                this.addData(w.C, t, e, r, n, i, o),
                this._ctx && this._ctx.bezierCurveTo(t, e, r, n, i, o),
                this._xi = i,
                this._yi = o,
                this
            }
            ,
            t.prototype.quadraticCurveTo = function(t, e, r, n) {
                return this._drawPendingPt(),
                this.addData(w.Q, t, e, r, n),
                this._ctx && this._ctx.quadraticCurveTo(t, e, r, n),
                this._xi = r,
                this._yi = n,
                this
            }
            ,
            t.prototype.arc = function(t, e, r, n, i, o) {
                this._drawPendingPt(),
                I[0] = n,
                I[1] = i,
                B(I, o),
                n = I[0];
                var a = (i = I[1]) - n;
                return this.addData(w.A, t, e, r, r, n, a, 0, o ? 0 : 1),
                this._ctx && this._ctx.arc(t, e, r, n, i, o),
                this._xi = A(i) * r + t,
                this._yi = L(i) * r + e,
                this
            }
            ,
            t.prototype.arcTo = function(t, e, r, n, i) {
                return this._drawPendingPt(),
                this._ctx && this._ctx.arcTo(t, e, r, n, i),
                this
            }
            ,
            t.prototype.rect = function(t, e, r, n) {
                return this._drawPendingPt(),
                this._ctx && this._ctx.rect(t, e, r, n),
                this.addData(w.R, t, e, r, n),
                this
            }
            ,
            t.prototype.closePath = function() {
                this._drawPendingPt(),
                this.addData(w.Z);
                var t = this._ctx
                  , e = this._x0
                  , r = this._y0;
                return t && t.closePath(),
                this._xi = e,
                this._yi = r,
                this
            }
            ,
            t.prototype.fill = function(t) {
                t && t.fill(),
                this.toStatic()
            }
            ,
            t.prototype.stroke = function(t) {
                t && t.stroke(),
                this.toStatic()
            }
            ,
            t.prototype.len = function() {
                return this._len
            }
            ,
            t.prototype.setData = function(t) {
                var e = t.length;
                this.data && this.data.length === e || !R || (this.data = new Float32Array(e));
                for (var r = 0; r < e; r++)
                    this.data[r] = t[r];
                this._len = e
            }
            ,
            t.prototype.appendPath = function(t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, r = 0, n = this._len, i = 0; i < e; i++)
                    r += t[i].len();
                R && this.data instanceof Float32Array && (this.data = new Float32Array(n + r));
                for (i = 0; i < e; i++)
                    for (var o = t[i].data, a = 0; a < o.length; a++)
                        this.data[n++] = o[a];
                this._len = n
            }
            ,
            t.prototype.addData = function(t, e, r, n, i, o, a, s, h) {
                if (this._saveData) {
                    var u = this.data;
                    this._len + arguments.length > u.length && (this._expandData(),
                    u = this.data);
                    for (var l = 0; l < arguments.length; l++)
                        u[this._len++] = arguments[l]
                }
            }
            ,
            t.prototype._drawPendingPt = function() {
                this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
                this._pendingPtDist = 0)
            }
            ,
            t.prototype._expandData = function() {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++)
                        t[e] = this.data[e];
                    this.data = t
                }
            }
            ,
            t.prototype.toStatic = function() {
                if (this._saveData) {
                    this._drawPendingPt();
                    var t = this.data;
                    t instanceof Array && (t.length = this._len,
                    R && this._len > 11 && (this.data = new Float32Array(t)))
                }
            }
            ,
            t.prototype.getBoundingRect = function() {
                S[0] = S[1] = C[0] = C[1] = Number.MAX_VALUE,
                T[0] = T[1] = P[0] = P[1] = -Number.MAX_VALUE;
                var t, e = this.data, r = 0, o = 0, a = 0, s = 0;
                for (t = 0; t < this._len; ) {
                    var h = e[t++]
                      , u = 1 === t;
                    switch (u && (a = r = e[t],
                    s = o = e[t + 1]),
                    h) {
                    case w.M:
                        r = a = e[t++],
                        o = s = e[t++],
                        C[0] = a,
                        C[1] = s,
                        P[0] = a,
                        P[1] = s;
                        break;
                    case w.L:
                        y(r, o, e[t], e[t + 1], C, P),
                        r = e[t++],
                        o = e[t++];
                        break;
                    case w.C:
                        _(r, o, e[t++], e[t++], e[t++], e[t++], e[t], e[t + 1], C, P),
                        r = e[t++],
                        o = e[t++];
                        break;
                    case w.Q:
                        m(r, o, e[t++], e[t++], e[t], e[t + 1], C, P),
                        r = e[t++],
                        o = e[t++];
                        break;
                    case w.A:
                        var l = e[t++]
                          , c = e[t++]
                          , f = e[t++]
                          , p = e[t++]
                          , d = e[t++]
                          , v = e[t++] + d;
                        t += 1;
                        var g = !e[t++];
                        u && (a = A(d) * f + l,
                        s = L(d) * p + c),
                        x(l, c, f, p, d, v, g, C, P),
                        r = A(v) * f + l,
                        o = L(v) * p + c;
                        break;
                    case w.R:
                        y(a = r = e[t++], s = o = e[t++], a + e[t++], s + e[t++], C, P);
                        break;
                    case w.Z:
                        r = a,
                        o = s
                    }
                    n.min(S, S, C),
                    n.max(T, T, P)
                }
                return 0 === t && (S[0] = S[1] = T[0] = T[1] = 0),
                new i.Z(S[0],S[1],T[0] - S[0],T[1] - S[1])
            }
            ,
            t.prototype._calculateLength = function() {
                var t = this.data
                  , e = this._len
                  , r = this._ux
                  , n = this._uy
                  , i = 0
                  , o = 0
                  , s = 0
                  , h = 0;
                this._pathSegLen || (this._pathSegLen = []);
                for (var u = this._pathSegLen, l = 0, c = 0, f = 0; f < e; ) {
                    var p = t[f++]
                      , d = 1 === f;
                    d && (s = i = t[f],
                    h = o = t[f + 1]);
                    var y = -1;
                    switch (p) {
                    case w.M:
                        i = s = t[f++],
                        o = h = t[f++];
                        break;
                    case w.L:
                        var v = t[f++]
                          , g = (x = t[f++]) - o;
                        (D(F = v - i) > r || D(g) > n || f === e - 1) && (y = Math.sqrt(F * F + g * g),
                        i = v,
                        o = x);
                        break;
                    case w.C:
                        var _ = t[f++]
                          , m = t[f++]
                          , x = (v = t[f++],
                        t[f++])
                          , b = t[f++]
                          , k = t[f++];
                        y = (0,
                        a.Ci)(i, o, _, m, v, x, b, k, 10),
                        i = b,
                        o = k;
                        break;
                    case w.Q:
                        _ = t[f++],
                        m = t[f++],
                        v = t[f++],
                        x = t[f++];
                        y = (0,
                        a.wQ)(i, o, _, m, v, x, 10),
                        i = v,
                        o = x;
                        break;
                    case w.A:
                        var S = t[f++]
                          , T = t[f++]
                          , C = t[f++]
                          , P = t[f++]
                          , O = t[f++]
                          , R = t[f++]
                          , I = R + O;
                        f += 1;
                        t[f++];
                        d && (s = A(O) * C + S,
                        h = L(O) * P + T),
                        y = Z(C, P) * M(z, Math.abs(R)),
                        i = A(I) * C + S,
                        o = L(I) * P + T;
                        break;
                    case w.R:
                        s = i = t[f++],
                        h = o = t[f++],
                        y = 2 * t[f++] + 2 * t[f++];
                        break;
                    case w.Z:
                        var F = s - i;
                        g = h - o;
                        y = Math.sqrt(F * F + g * g),
                        i = s,
                        o = h
                    }
                    y >= 0 && (u[c++] = y,
                    l += y)
                }
                return this._pathLen = l,
                l
            }
            ,
            t.prototype.rebuildPath = function(t, e) {
                var r, n, i, o, s, h, u, l, c, f, p = this.data, d = this._ux, y = this._uy, v = this._len, g = e < 1, _ = 0, m = 0, x = 0;
                if (!g || (this._pathSegLen || this._calculateLength(),
                u = this._pathSegLen,
                l = e * this._pathLen))
                    t: for (var S = 0; S < v; ) {
                        var T = p[S++]
                          , C = 1 === S;
                        switch (C && (r = i = p[S],
                        n = o = p[S + 1]),
                        T !== w.L && x > 0 && (t.lineTo(c, f),
                        x = 0),
                        T) {
                        case w.M:
                            r = i = p[S++],
                            n = o = p[S++],
                            t.moveTo(i, o);
                            break;
                        case w.L:
                            s = p[S++],
                            h = p[S++];
                            var P = D(s - i)
                              , O = D(h - o);
                            if (P > d || O > y) {
                                if (g) {
                                    if (_ + (nt = u[m++]) > l) {
                                        var z = (l - _) / nt;
                                        t.lineTo(i * (1 - z) + s * z, o * (1 - z) + h * z);
                                        break t
                                    }
                                    _ += nt
                                }
                                t.lineTo(s, h),
                                i = s,
                                o = h,
                                x = 0
                            } else {
                                var R = P * P + O * O;
                                R > x && (c = s,
                                f = h,
                                x = R)
                            }
                            break;
                        case w.C:
                            var I = p[S++]
                              , F = p[S++]
                              , B = p[S++]
                              , H = p[S++]
                              , E = p[S++]
                              , W = p[S++];
                            if (g) {
                                if (_ + (nt = u[m++]) > l) {
                                    z = (l - _) / nt;
                                    (0,
                                    a.Vz)(i, I, B, E, z, b),
                                    (0,
                                    a.Vz)(o, F, H, W, z, k),
                                    t.bezierCurveTo(b[1], k[1], b[2], k[2], b[3], k[3]);
                                    break t
                                }
                                _ += nt
                            }
                            t.bezierCurveTo(I, F, B, H, E, W),
                            i = E,
                            o = W;
                            break;
                        case w.Q:
                            I = p[S++],
                            F = p[S++],
                            B = p[S++],
                            H = p[S++];
                            if (g) {
                                if (_ + (nt = u[m++]) > l) {
                                    z = (l - _) / nt;
                                    (0,
                                    a.Lx)(i, I, B, z, b),
                                    (0,
                                    a.Lx)(o, F, H, z, k),
                                    t.quadraticCurveTo(b[1], k[1], b[2], k[2]);
                                    break t
                                }
                                _ += nt
                            }
                            t.quadraticCurveTo(I, F, B, H),
                            i = B,
                            o = H;
                            break;
                        case w.A:
                            var N = p[S++]
                              , q = p[S++]
                              , Y = p[S++]
                              , X = p[S++]
                              , j = p[S++]
                              , V = p[S++]
                              , G = p[S++]
                              , U = !p[S++]
                              , K = Y > X ? Y : X
                              , Q = D(Y - X) > .001
                              , $ = j + V
                              , J = !1;
                            if (g)
                                _ + (nt = u[m++]) > l && ($ = j + V * (l - _) / nt,
                                J = !0),
                                _ += nt;
                            if (Q && t.ellipse ? t.ellipse(N, q, Y, X, G, j, $, U) : t.arc(N, q, K, j, $, U),
                            J)
                                break t;
                            C && (r = A(j) * Y + N,
                            n = L(j) * X + q),
                            i = A($) * Y + N,
                            o = L($) * X + q;
                            break;
                        case w.R:
                            r = i = p[S],
                            n = o = p[S + 1],
                            s = p[S++],
                            h = p[S++];
                            var tt = p[S++]
                              , et = p[S++];
                            if (g) {
                                if (_ + (nt = u[m++]) > l) {
                                    var rt = l - _;
                                    t.moveTo(s, h),
                                    t.lineTo(s + M(rt, tt), h),
                                    (rt -= tt) > 0 && t.lineTo(s + tt, h + M(rt, et)),
                                    (rt -= et) > 0 && t.lineTo(s + Z(tt - rt, 0), h + et),
                                    (rt -= tt) > 0 && t.lineTo(s, h + Z(et - rt, 0));
                                    break t
                                }
                                _ += nt
                            }
                            t.rect(s, h, tt, et);
                            break;
                        case w.Z:
                            if (g) {
                                var nt;
                                if (_ + (nt = u[m++]) > l) {
                                    z = (l - _) / nt;
                                    t.lineTo(i * (1 - z) + r * z, o * (1 - z) + n * z);
                                    break t
                                }
                                _ += nt
                            }
                            t.closePath(),
                            i = r,
                            o = n
                        }
                    }
            }
            ,
            t.prototype.clone = function() {
                var e = new t
                  , r = this.data;
                return e.data = r.slice ? r.slice() : Array.prototype.slice.call(r),
                e._len = this._len,
                e
            }
            ,
            t.CMD = w,
            t.initDefaultProps = function() {
                var e = t.prototype;
                e._saveData = !0,
                e._ux = 0,
                e._uy = 0,
                e._pendingPtDist = 0,
                e._version = 0
            }(),
            t
        }()
          , E = H
    },
    20299: function(t, e) {
        var r = function() {
            function t(t, e) {
                this.x = t || 0,
                this.y = e || 0
            }
            return t.prototype.copy = function(t) {
                return this.x = t.x,
                this.y = t.y,
                this
            }
            ,
            t.prototype.clone = function() {
                return new t(this.x,this.y)
            }
            ,
            t.prototype.set = function(t, e) {
                return this.x = t,
                this.y = e,
                this
            }
            ,
            t.prototype.equal = function(t) {
                return t.x === this.x && t.y === this.y
            }
            ,
            t.prototype.add = function(t) {
                return this.x += t.x,
                this.y += t.y,
                this
            }
            ,
            t.prototype.scale = function(t) {
                this.x *= t,
                this.y *= t
            }
            ,
            t.prototype.scaleAndAdd = function(t, e) {
                this.x += t.x * e,
                this.y += t.y * e
            }
            ,
            t.prototype.sub = function(t) {
                return this.x -= t.x,
                this.y -= t.y,
                this
            }
            ,
            t.prototype.dot = function(t) {
                return this.x * t.x + this.y * t.y
            }
            ,
            t.prototype.len = function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            ,
            t.prototype.lenSquare = function() {
                return this.x * this.x + this.y * this.y
            }
            ,
            t.prototype.normalize = function() {
                var t = this.len();
                return this.x /= t,
                this.y /= t,
                this
            }
            ,
            t.prototype.distance = function(t) {
                var e = this.x - t.x
                  , r = this.y - t.y;
                return Math.sqrt(e * e + r * r)
            }
            ,
            t.prototype.distanceSquare = function(t) {
                var e = this.x - t.x
                  , r = this.y - t.y;
                return e * e + r * r
            }
            ,
            t.prototype.negate = function() {
                return this.x = -this.x,
                this.y = -this.y,
                this
            }
            ,
            t.prototype.transform = function(t) {
                if (t) {
                    var e = this.x
                      , r = this.y;
                    return this.x = t[0] * e + t[2] * r + t[4],
                    this.y = t[1] * e + t[3] * r + t[5],
                    this
                }
            }
            ,
            t.prototype.toArray = function(t) {
                return t[0] = this.x,
                t[1] = this.y,
                t
            }
            ,
            t.prototype.fromArray = function(t) {
                this.x = t[0],
                this.y = t[1]
            }
            ,
            t.set = function(t, e, r) {
                t.x = e,
                t.y = r
            }
            ,
            t.copy = function(t, e) {
                t.x = e.x,
                t.y = e.y
            }
            ,
            t.len = function(t) {
                return Math.sqrt(t.x * t.x + t.y * t.y)
            }
            ,
            t.lenSquare = function(t) {
                return t.x * t.x + t.y * t.y
            }
            ,
            t.dot = function(t, e) {
                return t.x * e.x + t.y * e.y
            }
            ,
            t.add = function(t, e, r) {
                t.x = e.x + r.x,
                t.y = e.y + r.y
            }
            ,
            t.sub = function(t, e, r) {
                t.x = e.x - r.x,
                t.y = e.y - r.y
            }
            ,
            t.scale = function(t, e, r) {
                t.x = e.x * r,
                t.y = e.y * r
            }
            ,
            t.scaleAndAdd = function(t, e, r, n) {
                t.x = e.x + r.x * n,
                t.y = e.y + r.y * n
            }
            ,
            t.lerp = function(t, e, r, n) {
                var i = 1 - n;
                t.x = i * e.x + n * r.x,
                t.y = i * e.y + n * r.y
            }
            ,
            t
        }();
        e.Z = r
    },
    93933: function(t, e, r) {
        r.d(e, {
            dN: function() {
                return p
            }
        });
        var n = r(68876)
          , i = r(81614)
          , o = n.identity
          , a = 5e-5;
        function s(t) {
            return t > a || t < -5e-5
        }
        var h = []
          , u = []
          , l = n.create()
          , c = Math.abs
          , f = function() {
            function t() {}
            return t.prototype.getLocalTransform = function(e) {
                return t.getLocalTransform(this, e)
            }
            ,
            t.prototype.setPosition = function(t) {
                this.x = t[0],
                this.y = t[1]
            }
            ,
            t.prototype.setScale = function(t) {
                this.scaleX = t[0],
                this.scaleY = t[1]
            }
            ,
            t.prototype.setSkew = function(t) {
                this.skewX = t[0],
                this.skewY = t[1]
            }
            ,
            t.prototype.setOrigin = function(t) {
                this.originX = t[0],
                this.originY = t[1]
            }
            ,
            t.prototype.needLocalTransform = function() {
                return s(this.rotation) || s(this.x) || s(this.y) || s(this.scaleX - 1) || s(this.scaleY - 1) || s(this.skewX) || s(this.skewY)
            }
            ,
            t.prototype.updateTransform = function() {
                var t = this.parent && this.parent.transform
                  , e = this.needLocalTransform()
                  , r = this.transform;
                e || t ? (r = r || n.create(),
                e ? this.getLocalTransform(r) : o(r),
                t && (e ? n.mul(r, t, r) : n.copy(r, t)),
                this.transform = r,
                this._resolveGlobalScaleRatio(r)) : r && o(r)
            }
            ,
            t.prototype._resolveGlobalScaleRatio = function(t) {
                var e = this.globalScaleRatio;
                if (null != e && 1 !== e) {
                    this.getGlobalScale(h);
                    var r = h[0] < 0 ? -1 : 1
                      , i = h[1] < 0 ? -1 : 1
                      , o = ((h[0] - r) * e + r) / h[0] || 0
                      , a = ((h[1] - i) * e + i) / h[1] || 0;
                    t[0] *= o,
                    t[1] *= o,
                    t[2] *= a,
                    t[3] *= a
                }
                this.invTransform = this.invTransform || n.create(),
                n.invert(this.invTransform, t)
            }
            ,
            t.prototype.getComputedTransform = function() {
                for (var t = this, e = []; t; )
                    e.push(t),
                    t = t.parent;
                for (; t = e.pop(); )
                    t.updateTransform();
                return this.transform
            }
            ,
            t.prototype.setLocalTransform = function(t) {
                if (t) {
                    var e = t[0] * t[0] + t[1] * t[1]
                      , r = t[2] * t[2] + t[3] * t[3]
                      , n = Math.atan2(t[1], t[0])
                      , i = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
                    r = Math.sqrt(r) * Math.cos(i),
                    e = Math.sqrt(e),
                    this.skewX = i,
                    this.skewY = 0,
                    this.rotation = -n,
                    this.x = +t[4],
                    this.y = +t[5],
                    this.scaleX = e,
                    this.scaleY = r,
                    this.originX = 0,
                    this.originY = 0
                }
            }
            ,
            t.prototype.decomposeTransform = function() {
                if (this.transform) {
                    var t = this.parent
                      , e = this.transform;
                    t && t.transform && (n.mul(u, t.invTransform, e),
                    e = u);
                    var r = this.originX
                      , i = this.originY;
                    (r || i) && (l[4] = r,
                    l[5] = i,
                    n.mul(u, e, l),
                    u[4] -= r,
                    u[5] -= i,
                    e = u),
                    this.setLocalTransform(e)
                }
            }
            ,
            t.prototype.getGlobalScale = function(t) {
                var e = this.transform;
                return t = t || [],
                e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]),
                t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]),
                e[0] < 0 && (t[0] = -t[0]),
                e[3] < 0 && (t[1] = -t[1]),
                t) : (t[0] = 1,
                t[1] = 1,
                t)
            }
            ,
            t.prototype.transformCoordToLocal = function(t, e) {
                var r = [t, e]
                  , n = this.invTransform;
                return n && i.applyTransform(r, r, n),
                r
            }
            ,
            t.prototype.transformCoordToGlobal = function(t, e) {
                var r = [t, e]
                  , n = this.transform;
                return n && i.applyTransform(r, r, n),
                r
            }
            ,
            t.prototype.getLineScale = function() {
                var t = this.transform;
                return t && c(t[0] - 1) > 1e-10 && c(t[3] - 1) > 1e-10 ? Math.sqrt(c(t[0] * t[3] - t[2] * t[1])) : 1
            }
            ,
            t.prototype.copyTransform = function(t) {
                !function(t, e) {
                    for (var r = 0; r < p.length; r++) {
                        var n = p[r];
                        t[n] = e[n]
                    }
                }(this, t)
            }
            ,
            t.getLocalTransform = function(t, e) {
                e = e || [];
                var r = t.originX || 0
                  , i = t.originY || 0
                  , o = t.scaleX
                  , a = t.scaleY
                  , s = t.anchorX
                  , h = t.anchorY
                  , u = t.rotation || 0
                  , l = t.x
                  , c = t.y
                  , f = t.skewX ? Math.tan(t.skewX) : 0
                  , p = t.skewY ? Math.tan(-t.skewY) : 0;
                if (r || i || s || h) {
                    var d = r + s
                      , y = i + h;
                    e[4] = -d * o - f * y * a,
                    e[5] = -y * a - p * d * o
                } else
                    e[4] = e[5] = 0;
                return e[0] = o,
                e[3] = a,
                e[1] = p * o,
                e[2] = f * a,
                u && n.rotate(e, e, u),
                e[4] += r + l,
                e[5] += i + c,
                e
            }
            ,
            t.initDefaultProps = function() {
                var e = t.prototype;
                e.scaleX = e.scaleY = e.globalScaleRatio = 1,
                e.x = e.y = e.originX = e.originY = e.skewX = e.skewY = e.rotation = e.anchorX = e.anchorY = 0
            }(),
            t
        }()
          , p = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];
        e.ZP = f
    },
    54507: function(t, e) {
        var r = Math.round(9 * Math.random())
          , n = "function" === typeof Object.defineProperty
          , i = function() {
            function t() {
                this._id = "__ec_inner_" + r++
            }
            return t.prototype.get = function(t) {
                return this._guard(t)[this._id]
            }
            ,
            t.prototype.set = function(t, e) {
                var r = this._guard(t);
                return n ? Object.defineProperty(r, this._id, {
                    value: e,
                    enumerable: !1,
                    configurable: !0
                }) : r[this._id] = e,
                this
            }
            ,
            t.prototype.delete = function(t) {
                return !!this.has(t) && (delete this._guard(t)[this._id],
                !0)
            }
            ,
            t.prototype.has = function(t) {
                return !!this._guard(t)[this._id]
            }
            ,
            t.prototype._guard = function(t) {
                if (t !== Object(t))
                    throw TypeError("Value of WeakMap is not a non-null object.");
                return t
            }
            ,
            t
        }();
        e.Z = i
    },
    42772: function(t, e, r) {
        r.d(e, {
            AZ: function() {
                return k
            },
            Ci: function() {
                return w
            },
            Jz: function() {
                return S
            },
            Lx: function() {
                return C
            },
            QC: function() {
                return T
            },
            Vz: function() {
                return m
            },
            Wr: function() {
                return P
            },
            X_: function() {
                return v
            },
            Zm: function() {
                return b
            },
            af: function() {
                return y
            },
            kD: function() {
                return g
            },
            pP: function() {
                return _
            },
            t1: function() {
                return x
            },
            wQ: function() {
                return M
            }
        });
        var n = r(81614)
          , i = Math.pow
          , o = Math.sqrt
          , a = 1e-8
          , s = 1e-4
          , h = o(3)
          , u = 1 / 3
          , l = (0,
        n.create)()
          , c = (0,
        n.create)()
          , f = (0,
        n.create)();
        function p(t) {
            return t > -a && t < a
        }
        function d(t) {
            return t > a || t < -a
        }
        function y(t, e, r, n, i) {
            var o = 1 - i;
            return o * o * (o * t + 3 * i * e) + i * i * (i * n + 3 * o * r)
        }
        function v(t, e, r, n, i) {
            var o = 1 - i;
            return 3 * (((e - t) * o + 2 * (r - e) * i) * o + (n - r) * i * i)
        }
        function g(t, e, r, n, a, s) {
            var l = n + 3 * (e - r) - t
              , c = 3 * (r - 2 * e + t)
              , f = 3 * (e - t)
              , d = t - a
              , y = c * c - 3 * l * f
              , v = c * f - 9 * l * d
              , g = f * f - 3 * c * d
              , _ = 0;
            if (p(y) && p(v)) {
                if (p(c))
                    s[0] = 0;
                else
                    (Z = -f / c) >= 0 && Z <= 1 && (s[_++] = Z)
            } else {
                var m = v * v - 4 * y * g;
                if (p(m)) {
                    var x = v / y
                      , w = -x / 2;
                    (Z = -c / l + x) >= 0 && Z <= 1 && (s[_++] = Z),
                    w >= 0 && w <= 1 && (s[_++] = w)
                } else if (m > 0) {
                    var b = o(m)
                      , k = y * c + 1.5 * l * (-v + b)
                      , S = y * c + 1.5 * l * (-v - b);
                    (Z = (-c - ((k = k < 0 ? -i(-k, u) : i(k, u)) + (S = S < 0 ? -i(-S, u) : i(S, u)))) / (3 * l)) >= 0 && Z <= 1 && (s[_++] = Z)
                } else {
                    var T = (2 * y * c - 3 * l * v) / (2 * o(y * y * y))
                      , C = Math.acos(T) / 3
                      , P = o(y)
                      , M = Math.cos(C)
                      , Z = (-c - 2 * P * M) / (3 * l)
                      , A = (w = (-c + P * (M + h * Math.sin(C))) / (3 * l),
                    (-c + P * (M - h * Math.sin(C))) / (3 * l));
                    Z >= 0 && Z <= 1 && (s[_++] = Z),
                    w >= 0 && w <= 1 && (s[_++] = w),
                    A >= 0 && A <= 1 && (s[_++] = A)
                }
            }
            return _
        }
        function _(t, e, r, n, i) {
            var a = 6 * r - 12 * e + 6 * t
              , s = 9 * e + 3 * n - 3 * t - 9 * r
              , h = 3 * e - 3 * t
              , u = 0;
            if (p(s)) {
                if (d(a))
                    (c = -h / a) >= 0 && c <= 1 && (i[u++] = c)
            } else {
                var l = a * a - 4 * s * h;
                if (p(l))
                    i[0] = -a / (2 * s);
                else if (l > 0) {
                    var c, f = o(l), y = (-a - f) / (2 * s);
                    (c = (-a + f) / (2 * s)) >= 0 && c <= 1 && (i[u++] = c),
                    y >= 0 && y <= 1 && (i[u++] = y)
                }
            }
            return u
        }
        function m(t, e, r, n, i, o) {
            var a = (e - t) * i + t
              , s = (r - e) * i + e
              , h = (n - r) * i + r
              , u = (s - a) * i + a
              , l = (h - s) * i + s
              , c = (l - u) * i + u;
            o[0] = t,
            o[1] = a,
            o[2] = u,
            o[3] = c,
            o[4] = c,
            o[5] = l,
            o[6] = h,
            o[7] = n
        }
        function x(t, e, r, i, a, h, u, p, d, v, g) {
            var _, m, x, w, b, k = .005, S = 1 / 0;
            l[0] = d,
            l[1] = v;
            for (var T = 0; T < 1; T += .05)
                c[0] = y(t, r, a, u, T),
                c[1] = y(e, i, h, p, T),
                (w = (0,
                n.distSquare)(l, c)) < S && (_ = T,
                S = w);
            S = 1 / 0;
            for (var C = 0; C < 32 && !(k < s); C++)
                m = _ - k,
                x = _ + k,
                c[0] = y(t, r, a, u, m),
                c[1] = y(e, i, h, p, m),
                w = (0,
                n.distSquare)(c, l),
                m >= 0 && w < S ? (_ = m,
                S = w) : (f[0] = y(t, r, a, u, x),
                f[1] = y(e, i, h, p, x),
                b = (0,
                n.distSquare)(f, l),
                x <= 1 && b < S ? (_ = x,
                S = b) : k *= .5);
            return g && (g[0] = y(t, r, a, u, _),
            g[1] = y(e, i, h, p, _)),
            o(S)
        }
        function w(t, e, r, n, i, o, a, s, h) {
            for (var u = t, l = e, c = 0, f = 1 / h, p = 1; p <= h; p++) {
                var d = p * f
                  , v = y(t, r, i, a, d)
                  , g = y(e, n, o, s, d)
                  , _ = v - u
                  , m = g - l;
                c += Math.sqrt(_ * _ + m * m),
                u = v,
                l = g
            }
            return c
        }
        function b(t, e, r, n) {
            var i = 1 - n;
            return i * (i * t + 2 * n * e) + n * n * r
        }
        function k(t, e, r, n) {
            return 2 * ((1 - n) * (e - t) + n * (r - e))
        }
        function S(t, e, r, n, i) {
            var a = t - 2 * e + r
              , s = 2 * (e - t)
              , h = t - n
              , u = 0;
            if (p(a)) {
                if (d(s))
                    (c = -h / s) >= 0 && c <= 1 && (i[u++] = c)
            } else {
                var l = s * s - 4 * a * h;
                if (p(l))
                    (c = -s / (2 * a)) >= 0 && c <= 1 && (i[u++] = c);
                else if (l > 0) {
                    var c, f = o(l), y = (-s - f) / (2 * a);
                    (c = (-s + f) / (2 * a)) >= 0 && c <= 1 && (i[u++] = c),
                    y >= 0 && y <= 1 && (i[u++] = y)
                }
            }
            return u
        }
        function T(t, e, r) {
            var n = t + r - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }
        function C(t, e, r, n, i) {
            var o = (e - t) * n + t
              , a = (r - e) * n + e
              , s = (a - o) * n + o;
            i[0] = t,
            i[1] = o,
            i[2] = s,
            i[3] = s,
            i[4] = a,
            i[5] = r
        }
        function P(t, e, r, i, a, h, u, p, d) {
            var y, v = .005, g = 1 / 0;
            l[0] = u,
            l[1] = p;
            for (var _ = 0; _ < 1; _ += .05) {
                c[0] = b(t, r, a, _),
                c[1] = b(e, i, h, _),
                (k = (0,
                n.distSquare)(l, c)) < g && (y = _,
                g = k)
            }
            g = 1 / 0;
            for (var m = 0; m < 32 && !(v < s); m++) {
                var x = y - v
                  , w = y + v;
                c[0] = b(t, r, a, x),
                c[1] = b(e, i, h, x);
                var k = (0,
                n.distSquare)(c, l);
                if (x >= 0 && k < g)
                    y = x,
                    g = k;
                else {
                    f[0] = b(t, r, a, w),
                    f[1] = b(e, i, h, w);
                    var S = (0,
                    n.distSquare)(f, l);
                    w <= 1 && S < g ? (y = w,
                    g = S) : v *= .5
                }
            }
            return d && (d[0] = b(t, r, a, y),
            d[1] = b(e, i, h, y)),
            o(g)
        }
        function M(t, e, r, n, i, o, a) {
            for (var s = t, h = e, u = 0, l = 1 / a, c = 1; c <= a; c++) {
                var f = c * l
                  , p = b(t, r, i, f)
                  , d = b(e, n, o, f)
                  , y = p - s
                  , v = d - h;
                u += Math.sqrt(y * y + v * v),
                s = p,
                h = d
            }
            return u
        }
    },
    13837: function(t, e, r) {
        r.d(e, {
            F1: function() {
                return d
            },
            UK: function() {
                return c
            },
            A4: function() {
                return l
            },
            YB: function() {
                return u
            }
        });
        var n = r(51978)
          , i = Math.log(2);
        function o(t, e, r, n, a, s) {
            var h = n + "-" + a
              , u = t.length;
            if (s.hasOwnProperty(h))
                return s[h];
            if (1 === e) {
                var l = Math.round(Math.log((1 << u) - 1 & ~a) / i);
                return t[r][l]
            }
            for (var c = n | 1 << r, f = r + 1; n & 1 << f; )
                f++;
            for (var p = 0, d = 0, y = 0; d < u; d++) {
                var v = 1 << d;
                v & a || (p += (y % 2 ? -1 : 1) * t[r][d] * o(t, e - 1, f, c, a | v, s),
                y++)
            }
            return s[h] = p,
            p
        }
        function a(t, e) {
            var r = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]]
              , n = {}
              , i = o(r, 8, 0, 0, 0, n);
            if (0 !== i) {
                for (var a = [], s = 0; s < 8; s++)
                    for (var h = 0; h < 8; h++)
                        null == a[h] && (a[h] = 0),
                        a[h] += ((s + h) % 2 ? -1 : 1) * o(r, 7, 0 === s ? 1 : 0, 1 << s, 1 << h, n) / i * e[s];
                return function(t, e, r) {
                    var n = e * a[6] + r * a[7] + 1;
                    t[0] = (e * a[0] + r * a[1] + a[2]) / n,
                    t[1] = (e * a[3] + r * a[4] + a[5]) / n
                }
            }
        }
        var s = "___zrEVENTSAVED"
          , h = [];
        function u(t, e, r, n, i) {
            return l(h, e, n, i, !0) && l(t, r, h[0], h[1])
        }
        function l(t, e, r, i, o) {
            if (e.getBoundingClientRect && n.Z.domSupported && !c(e)) {
                var h = e[s] || (e[s] = {})
                  , u = function(t, e) {
                    var r = e.markers;
                    if (r)
                        return r;
                    r = e.markers = [];
                    for (var n = ["left", "right"], i = ["top", "bottom"], o = 0; o < 4; o++) {
                        var a = document.createElement("div")
                          , s = o % 2
                          , h = (o >> 1) % 2;
                        a.style.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", n[s] + ":0", i[h] + ":0", n[1 - s] + ":auto", i[1 - h] + ":auto", ""].join("!important;"),
                        t.appendChild(a),
                        r.push(a)
                    }
                    return r
                }(e, h)
                  , l = function(t, e, r) {
                    for (var n = r ? "invTrans" : "trans", i = e[n], o = e.srcCoords, s = [], h = [], u = !0, l = 0; l < 4; l++) {
                        var c = t[l].getBoundingClientRect()
                          , f = 2 * l
                          , p = c.left
                          , d = c.top;
                        s.push(p, d),
                        u = u && o && p === o[f] && d === o[f + 1],
                        h.push(t[l].offsetLeft, t[l].offsetTop)
                    }
                    return u && i ? i : (e.srcCoords = s,
                    e[n] = r ? a(h, s) : a(s, h))
                }(u, h, o);
                if (l)
                    return l(t, r, i),
                    !0
            }
            return !1
        }
        function c(t) {
            return "CANVAS" === t.nodeName.toUpperCase()
        }
        var f = /([&<>"'])/g
          , p = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        function d(t) {
            return null == t ? "" : (t + "").replace(f, (function(t, e) {
                return p[e]
            }
            ))
        }
    },
    51978: function(t, e) {
        var r = function() {
            this.firefox = !1,
            this.ie = !1,
            this.edge = !1,
            this.newEdge = !1,
            this.weChat = !1
        }
          , n = new function() {
            this.browser = new r,
            this.node = !1,
            this.wxa = !1,
            this.worker = !1,
            this.svgSupported = !1,
            this.touchEventsSupported = !1,
            this.pointerEventsSupported = !1,
            this.domSupported = !1,
            this.transformSupported = !1,
            this.transform3dSupported = !1,
            this.hasGlobalWindow = "undefined" !== typeof window
        }
        ;
        "object" === typeof wx && "function" === typeof wx.getSystemInfoSync ? (n.wxa = !0,
        n.touchEventsSupported = !0) : "undefined" === typeof document && "undefined" !== typeof self ? n.worker = !0 : "undefined" === typeof navigator ? (n.node = !0,
        n.svgSupported = !0) : function(t, e) {
            var r = e.browser
              , n = t.match(/Firefox\/([\d.]+)/)
              , i = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/)
              , o = t.match(/Edge?\/([\d.]+)/)
              , a = /micromessenger/i.test(t);
            n && (r.firefox = !0,
            r.version = n[1]);
            i && (r.ie = !0,
            r.version = i[1]);
            o && (r.edge = !0,
            r.version = o[1],
            r.newEdge = +o[1].split(".")[0] > 18);
            a && (r.weChat = !0);
            e.svgSupported = "undefined" !== typeof SVGRect,
            e.touchEventsSupported = "ontouchstart"in window && !r.ie && !r.edge,
            e.pointerEventsSupported = "onpointerdown"in window && (r.edge || r.ie && +r.version >= 11),
            e.domSupported = "undefined" !== typeof document;
            var s = document.documentElement.style;
            e.transform3dSupported = (r.ie && "transition"in s || r.edge || "WebKitCSSMatrix"in window && "m11"in new WebKitCSSMatrix || "MozPerspective"in s) && !("OTransition"in s),
            e.transformSupported = e.transform3dSupported || r.ie && +r.version >= 9
        }(navigator.userAgent, n),
        e.Z = n
    },
    6159: function(t, e, r) {
        r.d(e, {
            OD: function() {
                return c
            },
            Oo: function() {
                return f
            },
            eV: function() {
                return h
            },
            iP: function() {
                return l
            },
            sT: function() {
                return d
            },
            xg: function() {
                return p
            }
        });
        var n = r(51978)
          , i = r(13837)
          , o = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , a = []
          , s = n.Z.browser.firefox && +n.Z.browser.version.split(".")[0] < 39;
        function h(t, e, r, n) {
            return r = r || {},
            n ? u(t, e, r) : s && null != e.layerX && e.layerX !== e.offsetX ? (r.zrX = e.layerX,
            r.zrY = e.layerY) : null != e.offsetX ? (r.zrX = e.offsetX,
            r.zrY = e.offsetY) : u(t, e, r),
            r
        }
        function u(t, e, r) {
            if (n.Z.domSupported && t.getBoundingClientRect) {
                var o = e.clientX
                  , s = e.clientY;
                if ((0,
                i.UK)(t)) {
                    var h = t.getBoundingClientRect();
                    return r.zrX = o - h.left,
                    void (r.zrY = s - h.top)
                }
                if ((0,
                i.A4)(a, t, o, s))
                    return r.zrX = a[0],
                    void (r.zrY = a[1])
            }
            r.zrX = r.zrY = 0
        }
        function l(t) {
            return t || window.event
        }
        function c(t, e, r) {
            if (null != (e = l(e)).zrX)
                return e;
            var n = e.type;
            if (n && n.indexOf("touch") >= 0) {
                var i = "touchend" !== n ? e.targetTouches[0] : e.changedTouches[0];
                i && h(t, i, e, r)
            } else {
                h(t, e, e, r);
                var a = function(t) {
                    var e = t.wheelDelta;
                    if (e)
                        return e;
                    var r = t.deltaX
                      , n = t.deltaY;
                    if (null == r || null == n)
                        return e;
                    return 3 * (0 !== n ? Math.abs(n) : Math.abs(r)) * (n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1)
                }(e);
                e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3
            }
            var s = e.button;
            return null == e.which && void 0 !== s && o.test(e.type) && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
            e
        }
        function f(t, e, r, n) {
            t.addEventListener(e, r, n)
        }
        function p(t, e, r, n) {
            t.removeEventListener(e, r, n)
        }
        var d = function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            t.cancelBubble = !0
        }
    },
    68876: function(t, e, r) {
        function n() {
            return [1, 0, 0, 1, 0, 0]
        }
        function i(t) {
            return t[0] = 1,
            t[1] = 0,
            t[2] = 0,
            t[3] = 1,
            t[4] = 0,
            t[5] = 0,
            t
        }
        function o(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t[4] = e[4],
            t[5] = e[5],
            t
        }
        function a(t, e, r) {
            var n = e[0] * r[0] + e[2] * r[1]
              , i = e[1] * r[0] + e[3] * r[1]
              , o = e[0] * r[2] + e[2] * r[3]
              , a = e[1] * r[2] + e[3] * r[3]
              , s = e[0] * r[4] + e[2] * r[5] + e[4]
              , h = e[1] * r[4] + e[3] * r[5] + e[5];
            return t[0] = n,
            t[1] = i,
            t[2] = o,
            t[3] = a,
            t[4] = s,
            t[5] = h,
            t
        }
        function s(t, e, r) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t[4] = e[4] + r[0],
            t[5] = e[5] + r[1],
            t
        }
        function h(t, e, r) {
            var n = e[0]
              , i = e[2]
              , o = e[4]
              , a = e[1]
              , s = e[3]
              , h = e[5]
              , u = Math.sin(r)
              , l = Math.cos(r);
            return t[0] = n * l + a * u,
            t[1] = -n * u + a * l,
            t[2] = i * l + s * u,
            t[3] = -i * u + l * s,
            t[4] = l * o + u * h,
            t[5] = l * h - u * o,
            t
        }
        function u(t, e, r) {
            var n = r[0]
              , i = r[1];
            return t[0] = e[0] * n,
            t[1] = e[1] * i,
            t[2] = e[2] * n,
            t[3] = e[3] * i,
            t[4] = e[4] * n,
            t[5] = e[5] * i,
            t
        }
        function l(t, e) {
            var r = e[0]
              , n = e[2]
              , i = e[4]
              , o = e[1]
              , a = e[3]
              , s = e[5]
              , h = r * a - o * n;
            return h ? (h = 1 / h,
            t[0] = a * h,
            t[1] = -o * h,
            t[2] = -n * h,
            t[3] = r * h,
            t[4] = (n * s - a * i) * h,
            t[5] = (o * i - r * s) * h,
            t) : null
        }
        function c(t) {
            var e = [1, 0, 0, 1, 0, 0];
            return o(e, t),
            e
        }
        r.r(e),
        r.d(e, {
            clone: function() {
                return c
            },
            copy: function() {
                return o
            },
            create: function() {
                return n
            },
            identity: function() {
                return i
            },
            invert: function() {
                return l
            },
            mul: function() {
                return a
            },
            rotate: function() {
                return h
            },
            scale: function() {
                return u
            },
            translate: function() {
                return s
            }
        })
    },
    13959: function(t, e, r) {
        r.d(e, {
            Uo: function() {
                return i
            },
            g2: function() {
                return s
            },
            n5: function() {
                return n
            },
            qW: function() {
                return a
            }
        });
        var n = 12
          , i = n + "px sans-serif";
        var o = function(t) {
            var e = {};
            if ("undefined" === typeof JSON)
                return e;
            for (var r = 0; r < t.length; r++) {
                var n = String.fromCharCode(r + 32)
                  , i = (t.charCodeAt(r) - 20) / 100;
                e[n] = i
            }
            return e
        }("007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N")
          , a = {
            createCanvas: function() {
                return "undefined" !== typeof document && document.createElement("canvas")
            },
            measureText: function() {
                var t, e;
                return function(r, s) {
                    if (!t) {
                        var h = a.createCanvas();
                        t = h && h.getContext("2d")
                    }
                    if (t)
                        return e !== s && (e = t.font = s || i),
                        t.measureText(r);
                    r = r || "";
                    var u = /(\d+)px/.exec(s = s || i)
                      , l = u && +u[1] || n
                      , c = 0;
                    if (s.indexOf("mono") >= 0)
                        c = l * r.length;
                    else
                        for (var f = 0; f < r.length; f++) {
                            var p = o[r[f]];
                            c += null == p ? l : p * l
                        }
                    return {
                        width: c
                    }
                }
            }(),
            loadImage: function(t, e, r) {
                var n = new Image;
                return n.onload = e,
                n.onerror = r,
                n.src = t,
                n
            }
        };
        function s(t) {
            for (var e in a)
                t[e] && (a[e] = t[e])
        }
    },
    17028: function(t, e, r) {
        r.d(e, {
            Z: function() {
                return l
            }
        });
        var n = 32
          , i = 7;
        function o(t, e, r, n) {
            var i = e + 1;
            if (i === r)
                return 1;
            if (n(t[i++], t[e]) < 0) {
                for (; i < r && n(t[i], t[i - 1]) < 0; )
                    i++;
                !function(t, e, r) {
                    r--;
                    for (; e < r; ) {
                        var n = t[e];
                        t[e++] = t[r],
                        t[r--] = n
                    }
                }(t, e, i)
            } else
                for (; i < r && n(t[i], t[i - 1]) >= 0; )
                    i++;
            return i - e
        }
        function a(t, e, r, n, i) {
            for (n === e && n++; n < r; n++) {
                for (var o, a = t[n], s = e, h = n; s < h; )
                    i(a, t[o = s + h >>> 1]) < 0 ? h = o : s = o + 1;
                var u = n - s;
                switch (u) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; u > 0; )
                        t[s + u] = t[s + u - 1],
                        u--
                }
                t[s] = a
            }
        }
        function s(t, e, r, n, i, o) {
            var a = 0
              , s = 0
              , h = 1;
            if (o(t, e[r + i]) > 0) {
                for (s = n - i; h < s && o(t, e[r + i + h]) > 0; )
                    a = h,
                    (h = 1 + (h << 1)) <= 0 && (h = s);
                h > s && (h = s),
                a += i,
                h += i
            } else {
                for (s = i + 1; h < s && o(t, e[r + i - h]) <= 0; )
                    a = h,
                    (h = 1 + (h << 1)) <= 0 && (h = s);
                h > s && (h = s);
                var u = a;
                a = i - h,
                h = i - u
            }
            for (a++; a < h; ) {
                var l = a + (h - a >>> 1);
                o(t, e[r + l]) > 0 ? a = l + 1 : h = l
            }
            return h
        }
        function h(t, e, r, n, i, o) {
            var a = 0
              , s = 0
              , h = 1;
            if (o(t, e[r + i]) < 0) {
                for (s = i + 1; h < s && o(t, e[r + i - h]) < 0; )
                    a = h,
                    (h = 1 + (h << 1)) <= 0 && (h = s);
                h > s && (h = s);
                var u = a;
                a = i - h,
                h = i - u
            } else {
                for (s = n - i; h < s && o(t, e[r + i + h]) >= 0; )
                    a = h,
                    (h = 1 + (h << 1)) <= 0 && (h = s);
                h > s && (h = s),
                a += i,
                h += i
            }
            for (a++; a < h; ) {
                var l = a + (h - a >>> 1);
                o(t, e[r + l]) < 0 ? h = l : a = l + 1
            }
            return h
        }
        function u(t, e) {
            var r, n, o, a = i, u = 0;
            r = t.length;
            var l = [];
            function c(r) {
                var c = n[r]
                  , f = o[r]
                  , p = n[r + 1]
                  , d = o[r + 1];
                o[r] = f + d,
                r === u - 3 && (n[r + 1] = n[r + 2],
                o[r + 1] = o[r + 2]),
                u--;
                var y = h(t[p], t, c, f, 0, e);
                c += y,
                0 !== (f -= y) && 0 !== (d = s(t[c + f - 1], t, p, d, d - 1, e)) && (f <= d ? function(r, n, o, u) {
                    var c = 0;
                    for (c = 0; c < n; c++)
                        l[c] = t[r + c];
                    var f = 0
                      , p = o
                      , d = r;
                    if (t[d++] = t[p++],
                    0 === --u) {
                        for (c = 0; c < n; c++)
                            t[d + c] = l[f + c];
                        return
                    }
                    if (1 === n) {
                        for (c = 0; c < u; c++)
                            t[d + c] = t[p + c];
                        return void (t[d + u] = l[f])
                    }
                    var y, v, g, _ = a;
                    for (; ; ) {
                        y = 0,
                        v = 0,
                        g = !1;
                        do {
                            if (e(t[p], l[f]) < 0) {
                                if (t[d++] = t[p++],
                                v++,
                                y = 0,
                                0 === --u) {
                                    g = !0;
                                    break
                                }
                            } else if (t[d++] = l[f++],
                            y++,
                            v = 0,
                            1 === --n) {
                                g = !0;
                                break
                            }
                        } while ((y | v) < _);
                        if (g)
                            break;
                        do {
                            if (0 !== (y = h(t[p], l, f, n, 0, e))) {
                                for (c = 0; c < y; c++)
                                    t[d + c] = l[f + c];
                                if (d += y,
                                f += y,
                                (n -= y) <= 1) {
                                    g = !0;
                                    break
                                }
                            }
                            if (t[d++] = t[p++],
                            0 === --u) {
                                g = !0;
                                break
                            }
                            if (0 !== (v = s(l[f], t, p, u, 0, e))) {
                                for (c = 0; c < v; c++)
                                    t[d + c] = t[p + c];
                                if (d += v,
                                p += v,
                                0 === (u -= v)) {
                                    g = !0;
                                    break
                                }
                            }
                            if (t[d++] = l[f++],
                            1 === --n) {
                                g = !0;
                                break
                            }
                            _--
                        } while (y >= i || v >= i);
                        if (g)
                            break;
                        _ < 0 && (_ = 0),
                        _ += 2
                    }
                    if ((a = _) < 1 && (a = 1),
                    1 === n) {
                        for (c = 0; c < u; c++)
                            t[d + c] = t[p + c];
                        t[d + u] = l[f]
                    } else {
                        if (0 === n)
                            throw new Error;
                        for (c = 0; c < n; c++)
                            t[d + c] = l[f + c]
                    }
                }(c, f, p, d) : function(r, n, o, u) {
                    var c = 0;
                    for (c = 0; c < u; c++)
                        l[c] = t[o + c];
                    var f = r + n - 1
                      , p = u - 1
                      , d = o + u - 1
                      , y = 0
                      , v = 0;
                    if (t[d--] = t[f--],
                    0 === --n) {
                        for (y = d - (u - 1),
                        c = 0; c < u; c++)
                            t[y + c] = l[c];
                        return
                    }
                    if (1 === u) {
                        for (v = (d -= n) + 1,
                        y = (f -= n) + 1,
                        c = n - 1; c >= 0; c--)
                            t[v + c] = t[y + c];
                        return void (t[d] = l[p])
                    }
                    var g = a;
                    for (; ; ) {
                        var _ = 0
                          , m = 0
                          , x = !1;
                        do {
                            if (e(l[p], t[f]) < 0) {
                                if (t[d--] = t[f--],
                                _++,
                                m = 0,
                                0 === --n) {
                                    x = !0;
                                    break
                                }
                            } else if (t[d--] = l[p--],
                            m++,
                            _ = 0,
                            1 === --u) {
                                x = !0;
                                break
                            }
                        } while ((_ | m) < g);
                        if (x)
                            break;
                        do {
                            if (0 !== (_ = n - h(l[p], t, r, n, n - 1, e))) {
                                for (n -= _,
                                v = (d -= _) + 1,
                                y = (f -= _) + 1,
                                c = _ - 1; c >= 0; c--)
                                    t[v + c] = t[y + c];
                                if (0 === n) {
                                    x = !0;
                                    break
                                }
                            }
                            if (t[d--] = l[p--],
                            1 === --u) {
                                x = !0;
                                break
                            }
                            if (0 !== (m = u - s(t[f], l, 0, u, u - 1, e))) {
                                for (u -= m,
                                v = (d -= m) + 1,
                                y = (p -= m) + 1,
                                c = 0; c < m; c++)
                                    t[v + c] = l[y + c];
                                if (u <= 1) {
                                    x = !0;
                                    break
                                }
                            }
                            if (t[d--] = t[f--],
                            0 === --n) {
                                x = !0;
                                break
                            }
                            g--
                        } while (_ >= i || m >= i);
                        if (x)
                            break;
                        g < 0 && (g = 0),
                        g += 2
                    }
                    (a = g) < 1 && (a = 1);
                    if (1 === u) {
                        for (v = (d -= n) + 1,
                        y = (f -= n) + 1,
                        c = n - 1; c >= 0; c--)
                            t[v + c] = t[y + c];
                        t[d] = l[p]
                    } else {
                        if (0 === u)
                            throw new Error;
                        for (y = d - (u - 1),
                        c = 0; c < u; c++)
                            t[y + c] = l[c]
                    }
                }(c, f, p, d))
            }
            return r < 120 ? 5 : r < 1542 ? 10 : r < 119151 ? 19 : 40,
            n = [],
            o = [],
            {
                mergeRuns: function() {
                    for (; u > 1; ) {
                        var t = u - 2;
                        if (t >= 1 && o[t - 1] <= o[t] + o[t + 1] || t >= 2 && o[t - 2] <= o[t] + o[t - 1])
                            o[t - 1] < o[t + 1] && t--;
                        else if (o[t] > o[t + 1])
                            break;
                        c(t)
                    }
                },
                forceMergeRuns: function() {
                    for (; u > 1; ) {
                        var t = u - 2;
                        t > 0 && o[t - 1] < o[t + 1] && t--,
                        c(t)
                    }
                },
                pushRun: function(t, e) {
                    n[u] = t,
                    o[u] = e,
                    u += 1
                }
            }
        }
        function l(t, e, r, i) {
            r || (r = 0),
            i || (i = t.length);
            var s = i - r;
            if (!(s < 2)) {
                var h = 0;
                if (s < n)
                    a(t, r, i, r + (h = o(t, r, i, e)), e);
                else {
                    var l = u(t, e)
                      , c = function(t) {
                        for (var e = 0; t >= n; )
                            e |= 1 & t,
                            t >>= 1;
                        return t + e
                    }(s);
                    do {
                        if ((h = o(t, r, i, e)) < c) {
                            var f = s;
                            f > c && (f = c),
                            a(t, r, r + f, r + h, e),
                            h = f
                        }
                        l.pushRun(r, h),
                        l.mergeRuns(),
                        s -= h,
                        r += h
                    } while (0 !== s);
                    l.forceMergeRuns()
                }
            }
        }
    },
    40207: function(t, e, r) {
        r.r(e),
        r.d(e, {
            HashMap: function() {
                return st
            },
            RADIAN_TO_DEGREE: function() {
                return dt
            },
            assert: function() {
                return tt
            },
            bind: function() {
                return z
            },
            clone: function() {
                return _
            },
            concatArray: function() {
                return ut
            },
            createCanvas: function() {
                return k
            },
            createHashMap: function() {
                return ht
            },
            createObject: function() {
                return lt
            },
            curry: function() {
                return R
            },
            defaults: function() {
                return b
            },
            disableUserSelect: function() {
                return ct
            },
            each: function() {
                return M
            },
            eqNaN: function() {
                return G
            },
            extend: function() {
                return w
            },
            filter: function() {
                return L
            },
            find: function() {
                return D
            },
            guid: function() {
                return v
            },
            hasOwn: function() {
                return ft
            },
            indexOf: function() {
                return S
            },
            inherits: function() {
                return T
            },
            isArray: function() {
                return I
            },
            isArrayLike: function() {
                return P
            },
            isBuiltInObject: function() {
                return N
            },
            isDom: function() {
                return Y
            },
            isFunction: function() {
                return F
            },
            isGradientObject: function() {
                return X
            },
            isImagePatternObject: function() {
                return j
            },
            isNumber: function() {
                return E
            },
            isObject: function() {
                return W
            },
            isPrimitive: function() {
                return it
            },
            isRegExp: function() {
                return V
            },
            isString: function() {
                return B
            },
            isStringSafe: function() {
                return H
            },
            isTypedArray: function() {
                return q
            },
            keys: function() {
                return O
            },
            logError: function() {
                return g
            },
            map: function() {
                return Z
            },
            merge: function() {
                return m
            },
            mergeAll: function() {
                return x
            },
            mixin: function() {
                return C
            },
            noop: function() {
                return pt
            },
            normalizeCssArray: function() {
                return J
            },
            reduce: function() {
                return A
            },
            retrieve: function() {
                return U
            },
            retrieve2: function() {
                return K
            },
            retrieve3: function() {
                return Q
            },
            setAsPrimitive: function() {
                return nt
            },
            slice: function() {
                return $
            },
            trim: function() {
                return et
            }
        });
        var n = r(13959)
          , i = A(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], (function(t, e) {
            return t["[object " + e + "]"] = !0,
            t
        }
        ), {})
          , o = A(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], (function(t, e) {
            return t["[object " + e + "Array]"] = !0,
            t
        }
        ), {})
          , a = Object.prototype.toString
          , s = Array.prototype
          , h = s.forEach
          , u = s.filter
          , l = s.slice
          , c = s.map
          , f = function() {}
        .constructor
          , p = f ? f.prototype : null
          , d = "__proto__"
          , y = 2311;
        function v() {
            return y++
        }
        function g() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            "undefined" !== typeof console && console.error.apply(console, t)
        }
        function _(t) {
            if (null == t || "object" !== typeof t)
                return t;
            var e = t
              , r = a.call(t);
            if ("[object Array]" === r) {
                if (!it(t)) {
                    e = [];
                    for (var n = 0, s = t.length; n < s; n++)
                        e[n] = _(t[n])
                }
            } else if (o[r]) {
                if (!it(t)) {
                    var h = t.constructor;
                    if (h.from)
                        e = h.from(t);
                    else {
                        e = new h(t.length);
                        for (n = 0,
                        s = t.length; n < s; n++)
                            e[n] = t[n]
                    }
                }
            } else if (!i[r] && !it(t) && !Y(t))
                for (var u in e = {},
                t)
                    t.hasOwnProperty(u) && u !== d && (e[u] = _(t[u]));
            return e
        }
        function m(t, e, r) {
            if (!W(e) || !W(t))
                return r ? _(e) : t;
            for (var n in e)
                if (e.hasOwnProperty(n) && n !== d) {
                    var i = t[n]
                      , o = e[n];
                    !W(o) || !W(i) || I(o) || I(i) || Y(o) || Y(i) || N(o) || N(i) || it(o) || it(i) ? !r && n in t || (t[n] = _(e[n])) : m(i, o, r)
                }
            return t
        }
        function x(t, e) {
            for (var r = t[0], n = 1, i = t.length; n < i; n++)
                r = m(r, t[n], e);
            return r
        }
        function w(t, e) {
            if (Object.assign)
                Object.assign(t, e);
            else
                for (var r in e)
                    e.hasOwnProperty(r) && r !== d && (t[r] = e[r]);
            return t
        }
        function b(t, e, r) {
            for (var n = O(e), i = 0; i < n.length; i++) {
                var o = n[i];
                (r ? null != e[o] : null == t[o]) && (t[o] = e[o])
            }
            return t
        }
        var k = n.qW.createCanvas;
        function S(t, e) {
            if (t) {
                if (t.indexOf)
                    return t.indexOf(e);
                for (var r = 0, n = t.length; r < n; r++)
                    if (t[r] === e)
                        return r
            }
            return -1
        }
        function T(t, e) {
            var r = t.prototype;
            function n() {}
            for (var i in n.prototype = e.prototype,
            t.prototype = new n,
            r)
                r.hasOwnProperty(i) && (t.prototype[i] = r[i]);
            t.prototype.constructor = t,
            t.superClass = e
        }
        function C(t, e, r) {
            if (t = "prototype"in t ? t.prototype : t,
            e = "prototype"in e ? e.prototype : e,
            Object.getOwnPropertyNames)
                for (var n = Object.getOwnPropertyNames(e), i = 0; i < n.length; i++) {
                    var o = n[i];
                    "constructor" !== o && (r ? null != e[o] : null == t[o]) && (t[o] = e[o])
                }
            else
                b(t, e, r)
        }
        function P(t) {
            return !!t && ("string" !== typeof t && "number" === typeof t.length)
        }
        function M(t, e, r) {
            if (t && e)
                if (t.forEach && t.forEach === h)
                    t.forEach(e, r);
                else if (t.length === +t.length)
                    for (var n = 0, i = t.length; n < i; n++)
                        e.call(r, t[n], n, t);
                else
                    for (var o in t)
                        t.hasOwnProperty(o) && e.call(r, t[o], o, t)
        }
        function Z(t, e, r) {
            if (!t)
                return [];
            if (!e)
                return $(t);
            if (t.map && t.map === c)
                return t.map(e, r);
            for (var n = [], i = 0, o = t.length; i < o; i++)
                n.push(e.call(r, t[i], i, t));
            return n
        }
        function A(t, e, r, n) {
            if (t && e) {
                for (var i = 0, o = t.length; i < o; i++)
                    r = e.call(n, r, t[i], i, t);
                return r
            }
        }
        function L(t, e, r) {
            if (!t)
                return [];
            if (!e)
                return $(t);
            if (t.filter && t.filter === u)
                return t.filter(e, r);
            for (var n = [], i = 0, o = t.length; i < o; i++)
                e.call(r, t[i], i, t) && n.push(t[i]);
            return n
        }
        function D(t, e, r) {
            if (t && e)
                for (var n = 0, i = t.length; n < i; n++)
                    if (e.call(r, t[n], n, t))
                        return t[n]
        }
        function O(t) {
            if (!t)
                return [];
            if (Object.keys)
                return Object.keys(t);
            var e = [];
            for (var r in t)
                t.hasOwnProperty(r) && e.push(r);
            return e
        }
        var z = p && F(p.bind) ? p.call.bind(p.bind) : function(t, e) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            return function() {
                return t.apply(e, r.concat(l.call(arguments)))
            }
        }
        ;
        function R(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            return function() {
                return t.apply(this, e.concat(l.call(arguments)))
            }
        }
        function I(t) {
            return Array.isArray ? Array.isArray(t) : "[object Array]" === a.call(t)
        }
        function F(t) {
            return "function" === typeof t
        }
        function B(t) {
            return "string" === typeof t
        }
        function H(t) {
            return "[object String]" === a.call(t)
        }
        function E(t) {
            return "number" === typeof t
        }
        function W(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" === e
        }
        function N(t) {
            return !!i[a.call(t)]
        }
        function q(t) {
            return !!o[a.call(t)]
        }
        function Y(t) {
            return "object" === typeof t && "number" === typeof t.nodeType && "object" === typeof t.ownerDocument
        }
        function X(t) {
            return null != t.colorStops
        }
        function j(t) {
            return null != t.image
        }
        function V(t) {
            return "[object RegExp]" === a.call(t)
        }
        function G(t) {
            return t !== t
        }
        function U() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            for (var r = 0, n = t.length; r < n; r++)
                if (null != t[r])
                    return t[r]
        }
        function K(t, e) {
            return null != t ? t : e
        }
        function Q(t, e, r) {
            return null != t ? t : null != e ? e : r
        }
        function $(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            return l.apply(t, e)
        }
        function J(t) {
            if ("number" === typeof t)
                return [t, t, t, t];
            var e = t.length;
            return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }
        function tt(t, e) {
            if (!t)
                throw new Error(e)
        }
        function et(t) {
            return null == t ? null : "function" === typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
        var rt = "__ec_primitive__";
        function nt(t) {
            t[rt] = !0
        }
        function it(t) {
            return t[rt]
        }
        var ot = function() {
            function t() {
                this.data = {}
            }
            return t.prototype.delete = function(t) {
                var e = this.has(t);
                return e && delete this.data[t],
                e
            }
            ,
            t.prototype.has = function(t) {
                return this.data.hasOwnProperty(t)
            }
            ,
            t.prototype.get = function(t) {
                return this.data[t]
            }
            ,
            t.prototype.set = function(t, e) {
                return this.data[t] = e,
                this
            }
            ,
            t.prototype.keys = function() {
                return O(this.data)
            }
            ,
            t.prototype.forEach = function(t) {
                var e = this.data;
                for (var r in e)
                    e.hasOwnProperty(r) && t(e[r], r)
            }
            ,
            t
        }()
          , at = "function" === typeof Map;
        var st = function() {
            function t(e) {
                var r = I(e);
                this.data = at ? new Map : new ot;
                var n = this;
                function i(t, e) {
                    r ? n.set(t, e) : n.set(e, t)
                }
                e instanceof t ? e.each(i) : e && M(e, i)
            }
            return t.prototype.hasKey = function(t) {
                return this.data.has(t)
            }
            ,
            t.prototype.get = function(t) {
                return this.data.get(t)
            }
            ,
            t.prototype.set = function(t, e) {
                return this.data.set(t, e),
                e
            }
            ,
            t.prototype.each = function(t, e) {
                this.data.forEach((function(r, n) {
                    t.call(e, r, n)
                }
                ))
            }
            ,
            t.prototype.keys = function() {
                var t = this.data.keys();
                return at ? Array.from(t) : t
            }
            ,
            t.prototype.removeKey = function(t) {
                this.data.delete(t)
            }
            ,
            t
        }();
        function ht(t) {
            return new st(t)
        }
        function ut(t, e) {
            for (var r = new t.constructor(t.length + e.length), n = 0; n < t.length; n++)
                r[n] = t[n];
            var i = t.length;
            for (n = 0; n < e.length; n++)
                r[n + i] = e[n];
            return r
        }
        function lt(t, e) {
            var r;
            if (Object.create)
                r = Object.create(t);
            else {
                var n = function() {};
                n.prototype = t,
                r = new n
            }
            return e && w(r, e),
            r
        }
        function ct(t) {
            var e = t.style;
            e.webkitUserSelect = "none",
            e.userSelect = "none",
            e.webkitTapHighlightColor = "rgba(0,0,0,0)",
            e["-webkit-touch-callout"] = "none"
        }
        function ft(t, e) {
            return t.hasOwnProperty(e)
        }
        function pt() {}
        var dt = 180 / Math.PI
    },
    81614: function(t, e, r) {
        function n(t, e) {
            return null == t && (t = 0),
            null == e && (e = 0),
            [t, e]
        }
        function i(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t
        }
        function o(t) {
            return [t[0], t[1]]
        }
        function a(t, e, r) {
            return t[0] = e,
            t[1] = r,
            t
        }
        function s(t, e, r) {
            return t[0] = e[0] + r[0],
            t[1] = e[1] + r[1],
            t
        }
        function h(t, e, r, n) {
            return t[0] = e[0] + r[0] * n,
            t[1] = e[1] + r[1] * n,
            t
        }
        function u(t, e, r) {
            return t[0] = e[0] - r[0],
            t[1] = e[1] - r[1],
            t
        }
        function l(t) {
            return Math.sqrt(f(t))
        }
        r.r(e),
        r.d(e, {
            add: function() {
                return s
            },
            applyTransform: function() {
                return T
            },
            clone: function() {
                return o
            },
            copy: function() {
                return i
            },
            create: function() {
                return n
            },
            dist: function() {
                return x
            },
            distSquare: function() {
                return b
            },
            distance: function() {
                return m
            },
            distanceSquare: function() {
                return w
            },
            div: function() {
                return y
            },
            dot: function() {
                return v
            },
            len: function() {
                return l
            },
            lenSquare: function() {
                return f
            },
            length: function() {
                return c
            },
            lengthSquare: function() {
                return p
            },
            lerp: function() {
                return S
            },
            max: function() {
                return P
            },
            min: function() {
                return C
            },
            mul: function() {
                return d
            },
            negate: function() {
                return k
            },
            normalize: function() {
                return _
            },
            scale: function() {
                return g
            },
            scaleAndAdd: function() {
                return h
            },
            set: function() {
                return a
            },
            sub: function() {
                return u
            }
        });
        var c = l;
        function f(t) {
            return t[0] * t[0] + t[1] * t[1]
        }
        var p = f;
        function d(t, e, r) {
            return t[0] = e[0] * r[0],
            t[1] = e[1] * r[1],
            t
        }
        function y(t, e, r) {
            return t[0] = e[0] / r[0],
            t[1] = e[1] / r[1],
            t
        }
        function v(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        }
        function g(t, e, r) {
            return t[0] = e[0] * r,
            t[1] = e[1] * r,
            t
        }
        function _(t, e) {
            var r = l(e);
            return 0 === r ? (t[0] = 0,
            t[1] = 0) : (t[0] = e[0] / r,
            t[1] = e[1] / r),
            t
        }
        function m(t, e) {
            return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
        }
        var x = m;
        function w(t, e) {
            return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
        }
        var b = w;
        function k(t, e) {
            return t[0] = -e[0],
            t[1] = -e[1],
            t
        }
        function S(t, e, r, n) {
            return t[0] = e[0] + n * (r[0] - e[0]),
            t[1] = e[1] + n * (r[1] - e[1]),
            t
        }
        function T(t, e, r) {
            var n = e[0]
              , i = e[1];
            return t[0] = r[0] * n + r[2] * i + r[4],
            t[1] = r[1] * n + r[3] * i + r[5],
            t
        }
        function C(t, e, r) {
            return t[0] = Math.min(e[0], r[0]),
            t[1] = Math.min(e[1], r[1]),
            t
        }
        function P(t, e, r) {
            return t[0] = Math.max(e[0], r[0]),
            t[1] = Math.max(e[1], r[1]),
            t
        }
    },
    28590: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "compound",
                e
            }
            return (0,
            n.ZT)(e, t),
            e.prototype._updatePathDirty = function() {
                for (var t = this.shape.paths, e = this.shapeChanged(), r = 0; r < t.length; r++)
                    e = e || t[r].shapeChanged();
                e && this.dirtyShape()
            }
            ,
            e.prototype.beforeBrush = function() {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), r = 0; r < t.length; r++)
                    t[r].path || t[r].createPathProxy(),
                    t[r].path.setScale(e[0], e[1], t[r].segmentIgnoreThreshold)
            }
            ,
            e.prototype.buildPath = function(t, e) {
                for (var r = e.paths || [], n = 0; n < r.length; n++)
                    r[n].buildPath(t, r[n].shape, !0)
            }
            ,
            e.prototype.afterBrush = function() {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
                    t[e].pathUpdated()
            }
            ,
            e.prototype.getBoundingRect = function() {
                return this._updatePathDirty.call(this),
                i.ZP.prototype.getBoundingRect.call(this)
            }
            ,
            e
        }(i.ZP);
        e.Z = o
    },
    30194: function(t, e, r) {
        r.d(e, {
            ik: function() {
                return l
            },
            tj: function() {
                return u
            }
        });
        var n = r(51126)
          , i = r(73806)
          , o = r(75579)
          , a = r(40207)
          , s = r(20064)
          , h = "__zr_style_" + Math.round(10 * Math.random())
          , u = {
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: "#000",
            opacity: 1,
            blend: "source-over"
        }
          , l = {
            style: {
                shadowBlur: !0,
                shadowOffsetX: !0,
                shadowOffsetY: !0,
                shadowColor: !0,
                opacity: !0
            }
        };
        u[h] = !0;
        var c = ["z", "z2", "invisible"]
          , f = ["invisible"]
          , p = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype._init = function(e) {
                for (var r = (0,
                a.keys)(e), n = 0; n < r.length; n++) {
                    var i = r[n];
                    "style" === i ? this.useStyle(e[i]) : t.prototype.attrKV.call(this, i, e[i])
                }
                this.style || this.useStyle({})
            }
            ,
            e.prototype.beforeBrush = function() {}
            ,
            e.prototype.afterBrush = function() {}
            ,
            e.prototype.innerBeforeBrush = function() {}
            ,
            e.prototype.innerAfterBrush = function() {}
            ,
            e.prototype.shouldBePainted = function(t, e, r, n) {
                var i = this.transform;
                if (this.ignore || this.invisible || 0 === this.style.opacity || this.culling && function(t, e, r) {
                    d.copy(t.getBoundingRect()),
                    t.transform && d.applyTransform(t.transform);
                    return y.width = e,
                    y.height = r,
                    !d.intersect(y)
                }(this, t, e) || i && !i[0] && !i[3])
                    return !1;
                if (r && this.__clipPaths)
                    for (var o = 0; o < this.__clipPaths.length; ++o)
                        if (this.__clipPaths[o].isZeroArea())
                            return !1;
                if (n && this.parent)
                    for (var a = this.parent; a; ) {
                        if (a.ignore)
                            return !1;
                        a = a.parent
                    }
                return !0
            }
            ,
            e.prototype.contain = function(t, e) {
                return this.rectContain(t, e)
            }
            ,
            e.prototype.traverse = function(t, e) {
                t.call(e, this)
            }
            ,
            e.prototype.rectContain = function(t, e) {
                var r = this.transformCoordToLocal(t, e);
                return this.getBoundingRect().contain(r[0], r[1])
            }
            ,
            e.prototype.getPaintRect = function() {
                var t = this._paintRect;
                if (!this._paintRect || this.__dirty) {
                    var e = this.transform
                      , r = this.getBoundingRect()
                      , n = this.style
                      , i = n.shadowBlur || 0
                      , a = n.shadowOffsetX || 0
                      , s = n.shadowOffsetY || 0;
                    t = this._paintRect || (this._paintRect = new o.Z(0,0,0,0)),
                    e ? o.Z.applyTransform(t, r, e) : t.copy(r),
                    (i || a || s) && (t.width += 2 * i + Math.abs(a),
                    t.height += 2 * i + Math.abs(s),
                    t.x = Math.min(t.x, t.x + a - i),
                    t.y = Math.min(t.y, t.y + s - i));
                    var h = this.dirtyRectTolerance;
                    t.isZero() || (t.x = Math.floor(t.x - h),
                    t.y = Math.floor(t.y - h),
                    t.width = Math.ceil(t.width + 1 + 2 * h),
                    t.height = Math.ceil(t.height + 1 + 2 * h))
                }
                return t
            }
            ,
            e.prototype.setPrevPaintRect = function(t) {
                t ? (this._prevPaintRect = this._prevPaintRect || new o.Z(0,0,0,0),
                this._prevPaintRect.copy(t)) : this._prevPaintRect = null
            }
            ,
            e.prototype.getPrevPaintRect = function() {
                return this._prevPaintRect
            }
            ,
            e.prototype.animateStyle = function(t) {
                return this.animate("style", t)
            }
            ,
            e.prototype.updateDuringAnimation = function(t) {
                "style" === t ? this.dirtyStyle() : this.markRedraw()
            }
            ,
            e.prototype.attrKV = function(e, r) {
                "style" !== e ? t.prototype.attrKV.call(this, e, r) : this.style ? this.setStyle(r) : this.useStyle(r)
            }
            ,
            e.prototype.setStyle = function(t, e) {
                return "string" === typeof t ? this.style[t] = e : (0,
                a.extend)(this.style, t),
                this.dirtyStyle(),
                this
            }
            ,
            e.prototype.dirtyStyle = function(t) {
                t || this.markRedraw(),
                this.__dirty |= s.SE,
                this._rect && (this._rect = null)
            }
            ,
            e.prototype.dirty = function() {
                this.dirtyStyle()
            }
            ,
            e.prototype.styleChanged = function() {
                return !!(this.__dirty & s.SE)
            }
            ,
            e.prototype.styleUpdated = function() {
                this.__dirty &= ~s.SE
            }
            ,
            e.prototype.createStyle = function(t) {
                return (0,
                a.createObject)(u, t)
            }
            ,
            e.prototype.useStyle = function(t) {
                t[h] || (t = this.createStyle(t)),
                this.__inHover ? this.__hoverStyle = t : this.style = t,
                this.dirtyStyle()
            }
            ,
            e.prototype.isStyleObject = function(t) {
                return t[h]
            }
            ,
            e.prototype._innerSaveToNormal = function(e) {
                t.prototype._innerSaveToNormal.call(this, e);
                var r = this._normalState;
                e.style && !r.style && (r.style = this._mergeStyle(this.createStyle(), this.style)),
                this._savePrimaryToNormal(e, r, c)
            }
            ,
            e.prototype._applyStateObj = function(e, r, n, i, o, s) {
                t.prototype._applyStateObj.call(this, e, r, n, i, o, s);
                var h, u = !(r && i);
                if (r && r.style ? o ? i ? h = r.style : (h = this._mergeStyle(this.createStyle(), n.style),
                this._mergeStyle(h, r.style)) : (h = this._mergeStyle(this.createStyle(), i ? this.style : n.style),
                this._mergeStyle(h, r.style)) : u && (h = n.style),
                h)
                    if (o) {
                        var l = this.style;
                        if (this.style = this.createStyle(u ? {} : l),
                        u)
                            for (var p = (0,
                            a.keys)(l), d = 0; d < p.length; d++) {
                                (v = p[d])in h && (h[v] = h[v],
                                this.style[v] = l[v])
                            }
                        var y = (0,
                        a.keys)(h);
                        for (d = 0; d < y.length; d++) {
                            var v = y[d];
                            this.style[v] = this.style[v]
                        }
                        this._transitionState(e, {
                            style: h
                        }, s, this.getAnimationStyleProps())
                    } else
                        this.useStyle(h);
                var g = this.__inHover ? f : c;
                for (d = 0; d < g.length; d++) {
                    v = g[d];
                    r && null != r[v] ? this[v] = r[v] : u && null != n[v] && (this[v] = n[v])
                }
            }
            ,
            e.prototype._mergeStates = function(e) {
                for (var r, n = t.prototype._mergeStates.call(this, e), i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.style && (r = r || {},
                    this._mergeStyle(r, o.style))
                }
                return r && (n.style = r),
                n
            }
            ,
            e.prototype._mergeStyle = function(t, e) {
                return (0,
                a.extend)(t, e),
                t
            }
            ,
            e.prototype.getAnimationStyleProps = function() {
                return l
            }
            ,
            e.initDefaultProps = function() {
                var t = e.prototype;
                t.type = "displayable",
                t.invisible = !1,
                t.z = 0,
                t.z2 = 0,
                t.zlevel = 0,
                t.culling = !1,
                t.cursor = "pointer",
                t.rectHover = !1,
                t.incremental = !1,
                t._rect = null,
                t.dirtyRectTolerance = 0,
                t.__dirty = s.YV | s.SE
            }(),
            e
        }(i.Z)
          , d = new o.Z(0,0,0,0)
          , y = new o.Z(0,0,0,0);
        e.ZP = p
    },
    41565: function(t, e) {
        var r = function() {
            function t(t) {
                this.colorStops = t || []
            }
            return t.prototype.addColorStop = function(t, e) {
                this.colorStops.push({
                    offset: t,
                    color: e
                })
            }
            ,
            t
        }();
        e.Z = r
    },
    70077: function(t, e, r) {
        var n = r(51126)
          , i = r(40207)
          , o = r(73806)
          , a = r(75579)
          , s = function(t) {
            function e(e) {
                var r = t.call(this) || this;
                return r.isGroup = !0,
                r._children = [],
                r.attr(e),
                r
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.childrenRef = function() {
                return this._children
            }
            ,
            e.prototype.children = function() {
                return this._children.slice()
            }
            ,
            e.prototype.childAt = function(t) {
                return this._children[t]
            }
            ,
            e.prototype.childOfName = function(t) {
                for (var e = this._children, r = 0; r < e.length; r++)
                    if (e[r].name === t)
                        return e[r]
            }
            ,
            e.prototype.childCount = function() {
                return this._children.length
            }
            ,
            e.prototype.add = function(t) {
                return t && t !== this && t.parent !== this && (this._children.push(t),
                this._doAdd(t)),
                this
            }
            ,
            e.prototype.addBefore = function(t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var r = this._children
                      , n = r.indexOf(e);
                    n >= 0 && (r.splice(n, 0, t),
                    this._doAdd(t))
                }
                return this
            }
            ,
            e.prototype.replace = function(t, e) {
                var r = i.indexOf(this._children, t);
                return r >= 0 && this.replaceAt(e, r),
                this
            }
            ,
            e.prototype.replaceAt = function(t, e) {
                var r = this._children
                  , n = r[e];
                if (t && t !== this && t.parent !== this && t !== n) {
                    r[e] = t,
                    n.parent = null;
                    var i = this.__zr;
                    i && n.removeSelfFromZr(i),
                    this._doAdd(t)
                }
                return this
            }
            ,
            e.prototype._doAdd = function(t) {
                t.parent && t.parent.remove(t),
                t.parent = this;
                var e = this.__zr;
                e && e !== t.__zr && t.addSelfToZr(e),
                e && e.refresh()
            }
            ,
            e.prototype.remove = function(t) {
                var e = this.__zr
                  , r = this._children
                  , n = i.indexOf(r, t);
                return n < 0 || (r.splice(n, 1),
                t.parent = null,
                e && t.removeSelfFromZr(e),
                e && e.refresh()),
                this
            }
            ,
            e.prototype.removeAll = function() {
                for (var t = this._children, e = this.__zr, r = 0; r < t.length; r++) {
                    var n = t[r];
                    e && n.removeSelfFromZr(e),
                    n.parent = null
                }
                return t.length = 0,
                this
            }
            ,
            e.prototype.eachChild = function(t, e) {
                for (var r = this._children, n = 0; n < r.length; n++) {
                    var i = r[n];
                    t.call(e, i, n)
                }
                return this
            }
            ,
            e.prototype.traverse = function(t, e) {
                for (var r = 0; r < this._children.length; r++) {
                    var n = this._children[r]
                      , i = t.call(e, n);
                    n.isGroup && !i && n.traverse(t, e)
                }
                return this
            }
            ,
            e.prototype.addSelfToZr = function(e) {
                t.prototype.addSelfToZr.call(this, e);
                for (var r = 0; r < this._children.length; r++) {
                    this._children[r].addSelfToZr(e)
                }
            }
            ,
            e.prototype.removeSelfFromZr = function(e) {
                t.prototype.removeSelfFromZr.call(this, e);
                for (var r = 0; r < this._children.length; r++) {
                    this._children[r].removeSelfFromZr(e)
                }
            }
            ,
            e.prototype.getBoundingRect = function(t) {
                for (var e = new a.Z(0,0,0,0), r = t || this._children, n = [], i = null, o = 0; o < r.length; o++) {
                    var s = r[o];
                    if (!s.ignore && !s.invisible) {
                        var h = s.getBoundingRect()
                          , u = s.getLocalTransform(n);
                        u ? (a.Z.applyTransform(e, h, u),
                        (i = i || e.clone()).union(e)) : (i = i || h.clone()).union(h)
                    }
                }
                return i || e
            }
            ,
            e
        }(o.Z);
        s.prototype.type = "group",
        e.Z = s
    },
    63540: function(t, e, r) {
        var n = r(51126)
          , i = r(30194)
          , o = r(75579)
          , a = r(40207)
          , s = (0,
        a.defaults)({
            x: 0,
            y: 0
        }, i.tj)
          , h = {
            style: (0,
            a.defaults)({
                x: !0,
                y: !0,
                width: !0,
                height: !0,
                sx: !0,
                sy: !0,
                sWidth: !0,
                sHeight: !0
            }, i.ik.style)
        };
        var u = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.createStyle = function(t) {
                return (0,
                a.createObject)(s, t)
            }
            ,
            e.prototype._getSize = function(t) {
                var e = this.style
                  , r = e[t];
                if (null != r)
                    return r;
                var n, i = (n = e.image) && "string" !== typeof n && n.width && n.height ? e.image : this.__image;
                if (!i)
                    return 0;
                var o = "width" === t ? "height" : "width"
                  , a = e[o];
                return null == a ? i[t] : i[t] / i[o] * a
            }
            ,
            e.prototype.getWidth = function() {
                return this._getSize("width")
            }
            ,
            e.prototype.getHeight = function() {
                return this._getSize("height")
            }
            ,
            e.prototype.getAnimationStyleProps = function() {
                return h
            }
            ,
            e.prototype.getBoundingRect = function() {
                var t = this.style;
                return this._rect || (this._rect = new o.Z(t.x || 0,t.y || 0,this.getWidth(),this.getHeight())),
                this._rect
            }
            ,
            e
        }(i.ZP);
        u.prototype.type = "image",
        e.ZP = u
    },
    83185: function(t, e, r) {
        var n = r(51126)
          , i = r(30194)
          , o = r(75579)
          , a = []
          , s = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.notClear = !0,
                e.incremental = !0,
                e._displayables = [],
                e._temporaryDisplayables = [],
                e._cursor = 0,
                e
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.traverse = function(t, e) {
                t.call(e, this)
            }
            ,
            e.prototype.useStyle = function() {
                this.style = {}
            }
            ,
            e.prototype.getCursor = function() {
                return this._cursor
            }
            ,
            e.prototype.innerAfterBrush = function() {
                this._cursor = this._displayables.length
            }
            ,
            e.prototype.clearDisplaybles = function() {
                this._displayables = [],
                this._temporaryDisplayables = [],
                this._cursor = 0,
                this.markRedraw(),
                this.notClear = !1
            }
            ,
            e.prototype.clearTemporalDisplayables = function() {
                this._temporaryDisplayables = []
            }
            ,
            e.prototype.addDisplayable = function(t, e) {
                e ? this._temporaryDisplayables.push(t) : this._displayables.push(t),
                this.markRedraw()
            }
            ,
            e.prototype.addDisplayables = function(t, e) {
                e = e || !1;
                for (var r = 0; r < t.length; r++)
                    this.addDisplayable(t[r], e)
            }
            ,
            e.prototype.getDisplayables = function() {
                return this._displayables
            }
            ,
            e.prototype.getTemporalDisplayables = function() {
                return this._temporaryDisplayables
            }
            ,
            e.prototype.eachPendingDisplayable = function(t) {
                for (var e = this._cursor; e < this._displayables.length; e++)
                    t && t(this._displayables[e]);
                for (e = 0; e < this._temporaryDisplayables.length; e++)
                    t && t(this._temporaryDisplayables[e])
            }
            ,
            e.prototype.update = function() {
                this.updateTransform();
                for (var t = this._cursor; t < this._displayables.length; t++) {
                    (e = this._displayables[t]).parent = this,
                    e.update(),
                    e.parent = null
                }
                for (t = 0; t < this._temporaryDisplayables.length; t++) {
                    var e;
                    (e = this._temporaryDisplayables[t]).parent = this,
                    e.update(),
                    e.parent = null
                }
            }
            ,
            e.prototype.getBoundingRect = function() {
                if (!this._rect) {
                    for (var t = new o.Z(1 / 0,1 / 0,-1 / 0,-1 / 0), e = 0; e < this._displayables.length; e++) {
                        var r = this._displayables[e]
                          , n = r.getBoundingRect().clone();
                        r.needLocalTransform() && n.applyTransform(r.getLocalTransform(a)),
                        t.union(n)
                    }
                    this._rect = t
                }
                return this._rect
            }
            ,
            e.prototype.contain = function(t, e) {
                var r = this.transformCoordToLocal(t, e);
                if (this.getBoundingRect().contain(r[0], r[1]))
                    for (var n = 0; n < this._displayables.length; n++) {
                        if (this._displayables[n].contain(t, e))
                            return !0
                    }
                return !1
            }
            ,
            e
        }(i.ZP);
        e.Z = s
    },
    58307: function(t, e, r) {
        var n = r(51126)
          , i = function(t) {
            function e(e, r, n, i, o, a) {
                var s = t.call(this, o) || this;
                return s.x = null == e ? 0 : e,
                s.y = null == r ? 0 : r,
                s.x2 = null == n ? 1 : n,
                s.y2 = null == i ? 0 : i,
                s.type = "linear",
                s.global = a || !1,
                s
            }
            return (0,
            n.ZT)(e, t),
            e
        }(r(41565).Z);
        e.Z = i
    },
    15706: function(t, e, r) {
        r.d(e, {
            $t: function() {
                return Z
            },
            ZP: function() {
                return D
            }
        });
        var n = r(51126)
          , i = r(30194)
          , o = r(2070);
        function a(t, e, r, n, i, o, a) {
            if (0 === i)
                return !1;
            var s = i
              , h = 0;
            if (a > e + s && a > n + s || a < e - s && a < n - s || o > t + s && o > r + s || o < t - s && o < r - s)
                return !1;
            if (t === r)
                return Math.abs(o - t) <= s / 2;
            var u = (h = (e - n) / (t - r)) * o - a + (t * n - r * e) / (t - r);
            return u * u / (h * h + 1) <= s / 2 * s / 2
        }
        var s = r(42772);
        function h(t, e, r, n, i, o, a, h, u, l, c) {
            if (0 === u)
                return !1;
            var f = u;
            return !(c > e + f && c > n + f && c > o + f && c > h + f || c < e - f && c < n - f && c < o - f && c < h - f || l > t + f && l > r + f && l > i + f && l > a + f || l < t - f && l < r - f && l < i - f && l < a - f) && s.t1(t, e, r, n, i, o, a, h, l, c, null) <= f / 2
        }
        function u(t, e, r, n, i, o, a, h, u) {
            if (0 === a)
                return !1;
            var l = a;
            return !(u > e + l && u > n + l && u > o + l || u < e - l && u < n - l && u < o - l || h > t + l && h > r + l && h > i + l || h < t - l && h < r - l && h < i - l) && (0,
            s.Wr)(t, e, r, n, i, o, h, u, null) <= l / 2
        }
        var l = r(95e3)
          , c = 2 * Math.PI;
        function f(t, e, r, n, i, o, a, s, h) {
            if (0 === a)
                return !1;
            var u = a;
            s -= t,
            h -= e;
            var f = Math.sqrt(s * s + h * h);
            if (f - u > r || f + u < r)
                return !1;
            if (Math.abs(n - i) % c < 1e-4)
                return !0;
            if (o) {
                var p = n;
                n = (0,
                l.m)(i),
                i = (0,
                l.m)(p)
            } else
                n = (0,
                l.m)(n),
                i = (0,
                l.m)(i);
            n > i && (i += c);
            var d = Math.atan2(h, s);
            return d < 0 && (d += c),
            d >= n && d <= i || d + c >= n && d + c <= i
        }
        var p = r(9221)
          , d = o.Z.CMD
          , y = 2 * Math.PI
          , v = 1e-4;
        var g = [-1, -1, -1]
          , _ = [-1, -1];
        function m() {
            var t = _[0];
            _[0] = _[1],
            _[1] = t
        }
        function x(t, e, r, n, i, o, a, h, u, l) {
            if (l > e && l > n && l > o && l > h || l < e && l < n && l < o && l < h)
                return 0;
            var c = s.kD(e, n, o, h, l, g);
            if (0 === c)
                return 0;
            for (var f = 0, p = -1, d = void 0, y = void 0, v = 0; v < c; v++) {
                var x = g[v]
                  , w = 0 === x || 1 === x ? .5 : 1;
                s.af(t, r, i, a, x) < u || (p < 0 && (p = s.pP(e, n, o, h, _),
                _[1] < _[0] && p > 1 && m(),
                d = s.af(e, n, o, h, _[0]),
                p > 1 && (y = s.af(e, n, o, h, _[1]))),
                2 === p ? x < _[0] ? f += d < e ? w : -w : x < _[1] ? f += y < d ? w : -w : f += h < y ? w : -w : x < _[0] ? f += d < e ? w : -w : f += h < d ? w : -w)
            }
            return f
        }
        function w(t, e, r, n, i, o, a, h) {
            if (h > e && h > n && h > o || h < e && h < n && h < o)
                return 0;
            var u = s.Jz(e, n, o, h, g);
            if (0 === u)
                return 0;
            var l = s.QC(e, n, o);
            if (l >= 0 && l <= 1) {
                for (var c = 0, f = s.Zm(e, n, o, l), p = 0; p < u; p++) {
                    var d = 0 === g[p] || 1 === g[p] ? .5 : 1;
                    s.Zm(t, r, i, g[p]) < a || (g[p] < l ? c += f < e ? d : -d : c += o < f ? d : -d)
                }
                return c
            }
            d = 0 === g[0] || 1 === g[0] ? .5 : 1;
            return s.Zm(t, r, i, g[0]) < a ? 0 : o < e ? d : -d
        }
        function b(t, e, r, n, i, o, a, s) {
            if ((s -= e) > r || s < -r)
                return 0;
            var h = Math.sqrt(r * r - s * s);
            g[0] = -h,
            g[1] = h;
            var u = Math.abs(n - i);
            if (u < 1e-4)
                return 0;
            if (u >= y - 1e-4) {
                n = 0,
                i = y;
                var l = o ? 1 : -1;
                return a >= g[0] + t && a <= g[1] + t ? l : 0
            }
            if (n > i) {
                var c = n;
                n = i,
                i = c
            }
            n < 0 && (n += y,
            i += y);
            for (var f = 0, p = 0; p < 2; p++) {
                var d = g[p];
                if (d + t > a) {
                    var v = Math.atan2(s, d);
                    l = o ? 1 : -1;
                    v < 0 && (v = y + v),
                    (v >= n && v <= i || v + y >= n && v + y <= i) && (v > Math.PI / 2 && v < 1.5 * Math.PI && (l = -l),
                    f += l)
                }
            }
            return f
        }
        function k(t, e, r, n, i) {
            for (var o, s, l, c, y = t.data, g = t.len(), _ = 0, m = 0, k = 0, S = 0, T = 0, C = 0; C < g; ) {
                var P = y[C++]
                  , M = 1 === C;
                switch (P === d.M && C > 1 && (r || (_ += (0,
                p.Z)(m, k, S, T, n, i))),
                M && (S = m = y[C],
                T = k = y[C + 1]),
                P) {
                case d.M:
                    m = S = y[C++],
                    k = T = y[C++];
                    break;
                case d.L:
                    if (r) {
                        if (a(m, k, y[C], y[C + 1], e, n, i))
                            return !0
                    } else
                        _ += (0,
                        p.Z)(m, k, y[C], y[C + 1], n, i) || 0;
                    m = y[C++],
                    k = y[C++];
                    break;
                case d.C:
                    if (r) {
                        if (h(m, k, y[C++], y[C++], y[C++], y[C++], y[C], y[C + 1], e, n, i))
                            return !0
                    } else
                        _ += x(m, k, y[C++], y[C++], y[C++], y[C++], y[C], y[C + 1], n, i) || 0;
                    m = y[C++],
                    k = y[C++];
                    break;
                case d.Q:
                    if (r) {
                        if (u(m, k, y[C++], y[C++], y[C], y[C + 1], e, n, i))
                            return !0
                    } else
                        _ += w(m, k, y[C++], y[C++], y[C], y[C + 1], n, i) || 0;
                    m = y[C++],
                    k = y[C++];
                    break;
                case d.A:
                    var Z = y[C++]
                      , A = y[C++]
                      , L = y[C++]
                      , D = y[C++]
                      , O = y[C++]
                      , z = y[C++];
                    C += 1;
                    var R = !!(1 - y[C++]);
                    o = Math.cos(O) * L + Z,
                    s = Math.sin(O) * D + A,
                    M ? (S = o,
                    T = s) : _ += (0,
                    p.Z)(m, k, o, s, n, i);
                    var I = (n - Z) * D / L + Z;
                    if (r) {
                        if (f(Z, A, D, O, O + z, R, e, I, i))
                            return !0
                    } else
                        _ += b(Z, A, D, O, O + z, R, I, i);
                    m = Math.cos(O + z) * L + Z,
                    k = Math.sin(O + z) * D + A;
                    break;
                case d.R:
                    if (S = m = y[C++],
                    T = k = y[C++],
                    o = S + y[C++],
                    s = T + y[C++],
                    r) {
                        if (a(S, T, o, T, e, n, i) || a(o, T, o, s, e, n, i) || a(o, s, S, s, e, n, i) || a(S, s, S, T, e, n, i))
                            return !0
                    } else
                        _ += (0,
                        p.Z)(o, T, o, s, n, i),
                        _ += (0,
                        p.Z)(S, s, S, T, n, i);
                    break;
                case d.Z:
                    if (r) {
                        if (a(m, k, S, T, e, n, i))
                            return !0
                    } else
                        _ += (0,
                        p.Z)(m, k, S, T, n, i);
                    m = S,
                    k = T
                }
            }
            return r || (l = k,
            c = T,
            Math.abs(l - c) < v) || (_ += (0,
            p.Z)(m, k, S, T, n, i) || 0),
            0 !== _
        }
        var S = r(40207)
          , T = r(4490)
          , C = r(83169)
          , P = r(20064)
          , M = r(93933)
          , Z = (0,
        S.defaults)({
            fill: "#000",
            stroke: null,
            strokePercent: 1,
            fillOpacity: 1,
            strokeOpacity: 1,
            lineDashOffset: 0,
            lineWidth: 1,
            lineCap: "butt",
            miterLimit: 10,
            strokeNoScale: !1,
            strokeFirst: !1
        }, i.tj)
          , A = {
            style: (0,
            S.defaults)({
                fill: !0,
                stroke: !0,
                strokePercent: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineDashOffset: !0,
                lineWidth: !0,
                miterLimit: !0
            }, i.ik.style)
        }
          , L = M.dN.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"])
          , D = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.update = function() {
                var r = this;
                t.prototype.update.call(this);
                var n = this.style;
                if (n.decal) {
                    var i = this._decalEl = this._decalEl || new e;
                    i.buildPath === e.prototype.buildPath && (i.buildPath = function(t) {
                        r.buildPath(t, r.shape)
                    }
                    ),
                    i.silent = !0;
                    var o = i.style;
                    for (var a in n)
                        o[a] !== n[a] && (o[a] = n[a]);
                    o.fill = n.fill ? n.decal : null,
                    o.decal = null,
                    o.shadowColor = null,
                    n.strokeFirst && (o.stroke = null);
                    for (var s = 0; s < L.length; ++s)
                        i[L[s]] = this[L[s]];
                    i.__dirty |= P.YV
                } else
                    this._decalEl && (this._decalEl = null)
            }
            ,
            e.prototype.getDecalElement = function() {
                return this._decalEl
            }
            ,
            e.prototype._init = function(e) {
                var r = (0,
                S.keys)(e);
                this.shape = this.getDefaultShape();
                var n = this.getDefaultStyle();
                n && this.useStyle(n);
                for (var i = 0; i < r.length; i++) {
                    var o = r[i]
                      , a = e[o];
                    "style" === o ? this.style ? (0,
                    S.extend)(this.style, a) : this.useStyle(a) : "shape" === o ? (0,
                    S.extend)(this.shape, a) : t.prototype.attrKV.call(this, o, a)
                }
                this.style || this.useStyle({})
            }
            ,
            e.prototype.getDefaultStyle = function() {
                return null
            }
            ,
            e.prototype.getDefaultShape = function() {
                return {}
            }
            ,
            e.prototype.canBeInsideText = function() {
                return this.hasFill()
            }
            ,
            e.prototype.getInsideTextFill = function() {
                var t = this.style.fill;
                if ("none" !== t) {
                    if ((0,
                    S.isString)(t)) {
                        var e = (0,
                        T.lum)(t, 0);
                        return e > .5 ? C.vU : e > .2 ? C.iv : C.GD
                    }
                    if (t)
                        return C.GD
                }
                return C.vU
            }
            ,
            e.prototype.getInsideTextStroke = function(t) {
                var e = this.style.fill;
                if ((0,
                S.isString)(e)) {
                    var r = this.__zr;
                    if (!(!r || !r.isDarkMode()) === (0,
                    T.lum)(t, 0) < C.Ak)
                        return e
                }
            }
            ,
            e.prototype.buildPath = function(t, e, r) {}
            ,
            e.prototype.pathUpdated = function() {
                this.__dirty &= ~P.RH
            }
            ,
            e.prototype.getUpdatedPathProxy = function(t) {
                return !this.path && this.createPathProxy(),
                this.path.beginPath(),
                this.buildPath(this.path, this.shape, t),
                this.path
            }
            ,
            e.prototype.createPathProxy = function() {
                this.path = new o.Z(!1)
            }
            ,
            e.prototype.hasStroke = function() {
                var t = this.style
                  , e = t.stroke;
                return !(null == e || "none" === e || !(t.lineWidth > 0))
            }
            ,
            e.prototype.hasFill = function() {
                var t = this.style.fill;
                return null != t && "none" !== t
            }
            ,
            e.prototype.getBoundingRect = function() {
                var t = this._rect
                  , e = this.style
                  , r = !t;
                if (r) {
                    var n = !1;
                    this.path || (n = !0,
                    this.createPathProxy());
                    var i = this.path;
                    (n || this.__dirty & P.RH) && (i.beginPath(),
                    this.buildPath(i, this.shape, !1),
                    this.pathUpdated()),
                    t = i.getBoundingRect()
                }
                if (this._rect = t,
                this.hasStroke() && this.path && this.path.len() > 0) {
                    var o = this._rectStroke || (this._rectStroke = t.clone());
                    if (this.__dirty || r) {
                        o.copy(t);
                        var a = e.strokeNoScale ? this.getLineScale() : 1
                          , s = e.lineWidth;
                        if (!this.hasFill()) {
                            var h = this.strokeContainThreshold;
                            s = Math.max(s, null == h ? 4 : h)
                        }
                        a > 1e-10 && (o.width += s / a,
                        o.height += s / a,
                        o.x -= s / a / 2,
                        o.y -= s / a / 2)
                    }
                    return o
                }
                return t
            }
            ,
            e.prototype.contain = function(t, e) {
                var r = this.transformCoordToLocal(t, e)
                  , n = this.getBoundingRect()
                  , i = this.style;
                if (t = r[0],
                e = r[1],
                n.contain(t, e)) {
                    var o = this.path;
                    if (this.hasStroke()) {
                        var a = i.lineWidth
                          , s = i.strokeNoScale ? this.getLineScale() : 1;
                        if (s > 1e-10 && (this.hasFill() || (a = Math.max(a, this.strokeContainThreshold)),
                        function(t, e, r, n) {
                            return k(t, e, !0, r, n)
                        }(o, a / s, t, e)))
                            return !0
                    }
                    if (this.hasFill())
                        return function(t, e, r) {
                            return k(t, 0, !1, e, r)
                        }(o, t, e)
                }
                return !1
            }
            ,
            e.prototype.dirtyShape = function() {
                this.__dirty |= P.RH,
                this._rect && (this._rect = null),
                this._decalEl && this._decalEl.dirtyShape(),
                this.markRedraw()
            }
            ,
            e.prototype.dirty = function() {
                this.dirtyStyle(),
                this.dirtyShape()
            }
            ,
            e.prototype.animateShape = function(t) {
                return this.animate("shape", t)
            }
            ,
            e.prototype.updateDuringAnimation = function(t) {
                "style" === t ? this.dirtyStyle() : "shape" === t ? this.dirtyShape() : this.markRedraw()
            }
            ,
            e.prototype.attrKV = function(e, r) {
                "shape" === e ? this.setShape(r) : t.prototype.attrKV.call(this, e, r)
            }
            ,
            e.prototype.setShape = function(t, e) {
                var r = this.shape;
                return r || (r = this.shape = {}),
                "string" === typeof t ? r[t] = e : (0,
                S.extend)(r, t),
                this.dirtyShape(),
                this
            }
            ,
            e.prototype.shapeChanged = function() {
                return !!(this.__dirty & P.RH)
            }
            ,
            e.prototype.createStyle = function(t) {
                return (0,
                S.createObject)(Z, t)
            }
            ,
            e.prototype._innerSaveToNormal = function(e) {
                t.prototype._innerSaveToNormal.call(this, e);
                var r = this._normalState;
                e.shape && !r.shape && (r.shape = (0,
                S.extend)({}, this.shape))
            }
            ,
            e.prototype._applyStateObj = function(e, r, n, i, o, a) {
                t.prototype._applyStateObj.call(this, e, r, n, i, o, a);
                var s, h = !(r && i);
                if (r && r.shape ? o ? i ? s = r.shape : (s = (0,
                S.extend)({}, n.shape),
                (0,
                S.extend)(s, r.shape)) : (s = (0,
                S.extend)({}, i ? this.shape : n.shape),
                (0,
                S.extend)(s, r.shape)) : h && (s = n.shape),
                s)
                    if (o) {
                        this.shape = (0,
                        S.extend)({}, this.shape);
                        for (var u = {}, l = (0,
                        S.keys)(s), c = 0; c < l.length; c++) {
                            var f = l[c];
                            "object" === typeof s[f] ? this.shape[f] = s[f] : u[f] = s[f]
                        }
                        this._transitionState(e, {
                            shape: u
                        }, a)
                    } else
                        this.shape = s,
                        this.dirtyShape()
            }
            ,
            e.prototype._mergeStates = function(e) {
                for (var r, n = t.prototype._mergeStates.call(this, e), i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.shape && (r = r || {},
                    this._mergeStyle(r, o.shape))
                }
                return r && (n.shape = r),
                n
            }
            ,
            e.prototype.getAnimationStyleProps = function() {
                return A
            }
            ,
            e.prototype.isZeroArea = function() {
                return !1
            }
            ,
            e.extend = function(t) {
                var r = function(e) {
                    function r(r) {
                        var n = e.call(this, r) || this;
                        return t.init && t.init.call(n, r),
                        n
                    }
                    return (0,
                    n.ZT)(r, e),
                    r.prototype.getDefaultStyle = function() {
                        return (0,
                        S.clone)(t.style)
                    }
                    ,
                    r.prototype.getDefaultShape = function() {
                        return (0,
                        S.clone)(t.shape)
                    }
                    ,
                    r
                }(e);
                for (var i in t)
                    "function" === typeof t[i] && (r.prototype[i] = t[i]);
                return r
            }
            ,
            e.initDefaultProps = function() {
                var t = e.prototype;
                t.type = "path",
                t.strokeContainThreshold = 5,
                t.segmentIgnoreThreshold = 0,
                t.subPixelOptimize = !1,
                t.autoBatch = !1,
                t.__dirty = P.YV | P.SE | P.RH
            }(),
            e
        }(i.ZP)
    },
    27491: function(t, e, r) {
        var n = r(51126)
          , i = function(t) {
            function e(e, r, n, i, o) {
                var a = t.call(this, i) || this;
                return a.x = null == e ? .5 : e,
                a.y = null == r ? .5 : r,
                a.r = null == n ? .5 : n,
                a.type = "radial",
                a.global = o || !1,
                a
            }
            return (0,
            n.ZT)(e, t),
            e
        }(r(41565).Z);
        e.Z = i
    },
    1449: function(t, e, r) {
        var n = r(51126)
          , i = r(30194)
          , o = r(41116)
          , a = r(15706)
          , s = r(40207)
          , h = r(13959)
          , u = (0,
        s.defaults)({
            strokeFirst: !0,
            font: h.Uo,
            x: 0,
            y: 0,
            textAlign: "left",
            textBaseline: "top",
            miterLimit: 2
        }, a.$t)
          , l = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.hasStroke = function() {
                var t = this.style
                  , e = t.stroke;
                return null != e && "none" !== e && t.lineWidth > 0
            }
            ,
            e.prototype.hasFill = function() {
                var t = this.style.fill;
                return null != t && "none" !== t
            }
            ,
            e.prototype.createStyle = function(t) {
                return (0,
                s.createObject)(u, t)
            }
            ,
            e.prototype.setBoundingRect = function(t) {
                this._rect = t
            }
            ,
            e.prototype.getBoundingRect = function() {
                var t = this.style;
                if (!this._rect) {
                    var e = t.text;
                    null != e ? e += "" : e = "";
                    var r = (0,
                    o.lP)(e, t.font, t.textAlign, t.textBaseline);
                    if (r.x += t.x || 0,
                    r.y += t.y || 0,
                    this.hasStroke()) {
                        var n = t.lineWidth;
                        r.x -= n / 2,
                        r.y -= n / 2,
                        r.width += n,
                        r.height += n
                    }
                    this._rect = r
                }
                return this._rect
            }
            ,
            e.initDefaultProps = void (e.prototype.dirtyRectTolerance = 10),
            e
        }(i.ZP);
        l.prototype.type = "tspan",
        e.Z = l
    },
    56271: function(t, e, r) {
        var n = r(51126)
          , i = r(96082)
          , o = r(1449)
          , a = r(40207)
          , s = r(41116)
          , h = r(63540)
          , u = r(98041)
          , l = r(75579)
          , c = r(30194)
          , f = r(13959)
          , p = {
            fill: "#000"
        }
          , d = {
            style: (0,
            a.defaults)({
                fill: !0,
                stroke: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineWidth: !0,
                fontSize: !0,
                lineHeight: !0,
                width: !0,
                height: !0,
                textShadowColor: !0,
                textShadowBlur: !0,
                textShadowOffsetX: !0,
                textShadowOffsetY: !0,
                backgroundColor: !0,
                padding: !0,
                borderColor: !0,
                borderWidth: !0,
                borderRadius: !0
            }, c.ik.style)
        }
          , y = function(t) {
            function e(e) {
                var r = t.call(this) || this;
                return r.type = "text",
                r._children = [],
                r._defaultStyle = p,
                r.attr(e),
                r
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.childrenRef = function() {
                return this._children
            }
            ,
            e.prototype.update = function() {
                t.prototype.update.call(this),
                this.styleChanged() && this._updateSubTexts();
                for (var e = 0; e < this._children.length; e++) {
                    var r = this._children[e];
                    r.zlevel = this.zlevel,
                    r.z = this.z,
                    r.z2 = this.z2,
                    r.culling = this.culling,
                    r.cursor = this.cursor,
                    r.invisible = this.invisible
                }
            }
            ,
            e.prototype.updateTransform = function() {
                var e = this.innerTransformable;
                e ? (e.updateTransform(),
                e.transform && (this.transform = e.transform)) : t.prototype.updateTransform.call(this)
            }
            ,
            e.prototype.getLocalTransform = function(e) {
                var r = this.innerTransformable;
                return r ? r.getLocalTransform(e) : t.prototype.getLocalTransform.call(this, e)
            }
            ,
            e.prototype.getComputedTransform = function() {
                return this.__hostTarget && (this.__hostTarget.getComputedTransform(),
                this.__hostTarget.updateInnerText(!0)),
                t.prototype.getComputedTransform.call(this)
            }
            ,
            e.prototype._updateSubTexts = function() {
                var t;
                this._childCursor = 0,
                w(t = this.style),
                (0,
                a.each)(t.rich, w),
                this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
                this._children.length = this._childCursor,
                this.styleUpdated()
            }
            ,
            e.prototype.addSelfToZr = function(e) {
                t.prototype.addSelfToZr.call(this, e);
                for (var r = 0; r < this._children.length; r++)
                    this._children[r].__zr = e
            }
            ,
            e.prototype.removeSelfFromZr = function(e) {
                t.prototype.removeSelfFromZr.call(this, e);
                for (var r = 0; r < this._children.length; r++)
                    this._children[r].__zr = null
            }
            ,
            e.prototype.getBoundingRect = function() {
                if (this.styleChanged() && this._updateSubTexts(),
                !this._rect) {
                    for (var t = new l.Z(0,0,0,0), e = this._children, r = [], n = null, i = 0; i < e.length; i++) {
                        var o = e[i]
                          , a = o.getBoundingRect()
                          , s = o.getLocalTransform(r);
                        s ? (t.copy(a),
                        t.applyTransform(s),
                        (n = n || t.clone()).union(t)) : (n = n || a.clone()).union(a)
                    }
                    this._rect = n || t
                }
                return this._rect
            }
            ,
            e.prototype.setDefaultTextStyle = function(t) {
                this._defaultStyle = t || p
            }
            ,
            e.prototype.setTextContent = function(t) {
                0
            }
            ,
            e.prototype._mergeStyle = function(t, e) {
                if (!e)
                    return t;
                var r = e.rich
                  , n = t.rich || r && {};
                return (0,
                a.extend)(t, e),
                r && n ? (this._mergeRich(n, r),
                t.rich = n) : n && (t.rich = n),
                t
            }
            ,
            e.prototype._mergeRich = function(t, e) {
                for (var r = (0,
                a.keys)(e), n = 0; n < r.length; n++) {
                    var i = r[n];
                    t[i] = t[i] || {},
                    (0,
                    a.extend)(t[i], e[i])
                }
            }
            ,
            e.prototype.getAnimationStyleProps = function() {
                return d
            }
            ,
            e.prototype._getOrCreateChild = function(t) {
                var e = this._children[this._childCursor];
                return e && e instanceof t || (e = new t),
                this._children[this._childCursor++] = e,
                e.__zr = this.__zr,
                e.parent = this,
                e
            }
            ,
            e.prototype._updatePlainTexts = function() {
                var t = this.style
                  , e = t.font || f.Uo
                  , r = t.padding
                  , n = T(t)
                  , a = (0,
                i.NY)(n, t)
                  , h = C(t)
                  , u = !!t.backgroundColor
                  , c = a.outerHeight
                  , p = a.outerWidth
                  , d = a.contentWidth
                  , y = a.lines
                  , v = a.lineHeight
                  , g = this._defaultStyle
                  , _ = t.x || 0
                  , m = t.y || 0
                  , w = t.align || g.align || "left"
                  , P = t.verticalAlign || g.verticalAlign || "top"
                  , M = _
                  , Z = (0,
                s.mU)(m, a.contentHeight, P);
                if (h || r) {
                    var A = (0,
                    s.M3)(_, p, w)
                      , L = (0,
                    s.mU)(m, c, P);
                    h && this._renderBackground(t, t, A, L, p, c)
                }
                Z += v / 2,
                r && (M = S(_, w, r),
                "top" === P ? Z += r[0] : "bottom" === P && (Z -= r[2]));
                for (var D = 0, O = !1, z = (k("fill"in t ? t.fill : (O = !0,
                g.fill))), R = (b("stroke"in t ? t.stroke : u || g.autoStroke && !O ? null : (D = 2,
                g.stroke))), I = t.textShadowBlur > 0, F = null != t.width && ("truncate" === t.overflow || "break" === t.overflow || "breakAll" === t.overflow), B = a.calculatedLineHeight, H = 0; H < y.length; H++) {
                    var E = this._getOrCreateChild(o.Z)
                      , W = E.createStyle();
                    E.useStyle(W),
                    W.text = y[H],
                    W.x = M,
                    W.y = Z,
                    w && (W.textAlign = w),
                    W.textBaseline = "middle",
                    W.opacity = t.opacity,
                    W.strokeFirst = !0,
                    I && (W.shadowBlur = t.textShadowBlur || 0,
                    W.shadowColor = t.textShadowColor || "transparent",
                    W.shadowOffsetX = t.textShadowOffsetX || 0,
                    W.shadowOffsetY = t.textShadowOffsetY || 0),
                    W.stroke = R,
                    W.fill = z,
                    R && (W.lineWidth = t.lineWidth || D,
                    W.lineDash = t.lineDash,
                    W.lineDashOffset = t.lineDashOffset || 0),
                    W.font = e,
                    x(W, t),
                    Z += v,
                    F && E.setBoundingRect(new l.Z((0,
                    s.M3)(W.x, t.width, W.textAlign),(0,
                    s.mU)(W.y, B, W.textBaseline),d,B))
                }
            }
            ,
            e.prototype._updateRichTexts = function() {
                var t = this.style
                  , e = T(t)
                  , r = (0,
                i.$F)(e, t)
                  , n = r.width
                  , o = r.outerWidth
                  , a = r.outerHeight
                  , h = t.padding
                  , u = t.x || 0
                  , l = t.y || 0
                  , c = this._defaultStyle
                  , f = t.align || c.align
                  , p = t.verticalAlign || c.verticalAlign
                  , d = (0,
                s.M3)(u, o, f)
                  , y = (0,
                s.mU)(l, a, p)
                  , v = d
                  , g = y;
                h && (v += h[3],
                g += h[0]);
                var _ = v + n;
                C(t) && this._renderBackground(t, t, d, y, o, a);
                for (var m = !!t.backgroundColor, x = 0; x < r.lines.length; x++) {
                    for (var w = r.lines[x], b = w.tokens, k = b.length, S = w.lineHeight, P = w.width, M = 0, Z = v, A = _, L = k - 1, D = void 0; M < k && (!(D = b[M]).align || "left" === D.align); )
                        this._placeToken(D, t, S, g, Z, "left", m),
                        P -= D.width,
                        Z += D.width,
                        M++;
                    for (; L >= 0 && "right" === (D = b[L]).align; )
                        this._placeToken(D, t, S, g, A, "right", m),
                        P -= D.width,
                        A -= D.width,
                        L--;
                    for (Z += (n - (Z - v) - (_ - A) - P) / 2; M <= L; )
                        D = b[M],
                        this._placeToken(D, t, S, g, Z + D.width / 2, "center", m),
                        Z += D.width,
                        M++;
                    g += S
                }
            }
            ,
            e.prototype._placeToken = function(t, e, r, n, i, h, u) {
                var c = e.rich[t.styleName] || {};
                c.text = t.text;
                var p = t.verticalAlign
                  , d = n + r / 2;
                "top" === p ? d = n + t.height / 2 : "bottom" === p && (d = n + r - t.height / 2),
                !t.isLineHolder && C(c) && this._renderBackground(c, e, "right" === h ? i - t.width : "center" === h ? i - t.width / 2 : i, d - t.height / 2, t.width, t.height);
                var y = !!c.backgroundColor
                  , v = t.textPadding;
                v && (i = S(i, h, v),
                d -= t.height / 2 - v[0] - t.innerHeight / 2);
                var g = this._getOrCreateChild(o.Z)
                  , _ = g.createStyle();
                g.useStyle(_);
                var m = this._defaultStyle
                  , w = !1
                  , T = 0
                  , P = k("fill"in c ? c.fill : "fill"in e ? e.fill : (w = !0,
                m.fill))
                  , M = b("stroke"in c ? c.stroke : "stroke"in e ? e.stroke : y || u || m.autoStroke && !w ? null : (T = 2,
                m.stroke))
                  , Z = c.textShadowBlur > 0 || e.textShadowBlur > 0;
                _.text = t.text,
                _.x = i,
                _.y = d,
                Z && (_.shadowBlur = c.textShadowBlur || e.textShadowBlur || 0,
                _.shadowColor = c.textShadowColor || e.textShadowColor || "transparent",
                _.shadowOffsetX = c.textShadowOffsetX || e.textShadowOffsetX || 0,
                _.shadowOffsetY = c.textShadowOffsetY || e.textShadowOffsetY || 0),
                _.textAlign = h,
                _.textBaseline = "middle",
                _.font = t.font || f.Uo,
                _.opacity = (0,
                a.retrieve3)(c.opacity, e.opacity, 1),
                x(_, c),
                M && (_.lineWidth = (0,
                a.retrieve3)(c.lineWidth, e.lineWidth, T),
                _.lineDash = (0,
                a.retrieve2)(c.lineDash, e.lineDash),
                _.lineDashOffset = e.lineDashOffset || 0,
                _.stroke = M),
                P && (_.fill = P);
                var A = t.contentWidth
                  , L = t.contentHeight;
                g.setBoundingRect(new l.Z((0,
                s.M3)(_.x, A, _.textAlign),(0,
                s.mU)(_.y, L, _.textBaseline),A,L))
            }
            ,
            e.prototype._renderBackground = function(t, e, r, n, i, o) {
                var s, l, c, f = t.backgroundColor, p = t.borderWidth, d = t.borderColor, y = f && f.image, v = f && !y, g = t.borderRadius, _ = this;
                if (v || t.lineHeight || p && d) {
                    (s = this._getOrCreateChild(u.Z)).useStyle(s.createStyle()),
                    s.style.fill = null;
                    var m = s.shape;
                    m.x = r,
                    m.y = n,
                    m.width = i,
                    m.height = o,
                    m.r = g,
                    s.dirtyShape()
                }
                if (v)
                    (c = s.style).fill = f || null,
                    c.fillOpacity = (0,
                    a.retrieve2)(t.fillOpacity, 1);
                else if (y) {
                    (l = this._getOrCreateChild(h.ZP)).onload = function() {
                        _.dirtyStyle()
                    }
                    ;
                    var x = l.style;
                    x.image = f.image,
                    x.x = r,
                    x.y = n,
                    x.width = i,
                    x.height = o
                }
                p && d && ((c = s.style).lineWidth = p,
                c.stroke = d,
                c.strokeOpacity = (0,
                a.retrieve2)(t.strokeOpacity, 1),
                c.lineDash = t.borderDash,
                c.lineDashOffset = t.borderDashOffset || 0,
                s.strokeContainThreshold = 0,
                s.hasFill() && s.hasStroke() && (c.strokeFirst = !0,
                c.lineWidth *= 2));
                var w = (s || l).style;
                w.shadowBlur = t.shadowBlur || 0,
                w.shadowColor = t.shadowColor || "transparent",
                w.shadowOffsetX = t.shadowOffsetX || 0,
                w.shadowOffsetY = t.shadowOffsetY || 0,
                w.opacity = (0,
                a.retrieve3)(t.opacity, e.opacity, 1)
            }
            ,
            e.makeFont = function(t) {
                var e = "";
                return function(t) {
                    return null != t.fontSize || t.fontFamily || t.fontWeight
                }(t) && (e = [t.fontStyle, t.fontWeight, m(t.fontSize), t.fontFamily || "sans-serif"].join(" ")),
                e && (0,
                a.trim)(e) || t.textFont || t.font
            }
            ,
            e
        }(c.ZP)
          , v = {
            left: !0,
            right: 1,
            center: 1
        }
          , g = {
            top: 1,
            bottom: 1,
            middle: 1
        }
          , _ = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
        function m(t) {
            return "string" !== typeof t || -1 === t.indexOf("px") && -1 === t.indexOf("rem") && -1 === t.indexOf("em") ? isNaN(+t) ? f.n5 + "px" : t + "px" : t
        }
        function x(t, e) {
            for (var r = 0; r < _.length; r++) {
                var n = _[r]
                  , i = e[n];
                null != i && (t[n] = i)
            }
        }
        function w(t) {
            if (t) {
                t.font = y.makeFont(t);
                var e = t.align;
                "middle" === e && (e = "center"),
                t.align = null == e || v[e] ? e : "left";
                var r = t.verticalAlign;
                "center" === r && (r = "middle"),
                t.verticalAlign = null == r || g[r] ? r : "top",
                t.padding && (t.padding = (0,
                a.normalizeCssArray)(t.padding))
            }
        }
        function b(t, e) {
            return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }
        function k(t) {
            return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }
        function S(t, e, r) {
            return "right" === e ? t - r[1] : "center" === e ? t + r[3] / 2 - r[1] / 2 : t + r[3]
        }
        function T(t) {
            var e = t.text;
            return null != e && (e += ""),
            e
        }
        function C(t) {
            return !!(t.backgroundColor || t.lineHeight || t.borderWidth && t.borderColor)
        }
        e.ZP = y
    },
    20064: function(t, e, r) {
        r.d(e, {
            RH: function() {
                return o
            },
            SE: function() {
                return i
            },
            YV: function() {
                return n
            }
        });
        var n = 1
          , i = 2
          , o = 4
    },
    8358: function(t, e, r) {
        r.d(e, {
            Gq: function() {
                return s
            },
            ko: function() {
                return a
            },
            v5: function() {
                return u
            }
        });
        var n = r(8352)
          , i = r(13959)
          , o = new n.ZP(50);
        function a(t) {
            if ("string" === typeof t) {
                var e = o.get(t);
                return e && e.image
            }
            return t
        }
        function s(t, e, r, n, a) {
            if (t) {
                if ("string" === typeof t) {
                    if (e && e.__zrImageSrc === t || !r)
                        return e;
                    var s = o.get(t)
                      , l = {
                        hostEl: r,
                        cb: n,
                        cbPayload: a
                    };
                    return s ? !u(e = s.image) && s.pending.push(l) : ((e = i.qW.loadImage(t, h, h)).__zrImageSrc = t,
                    o.put(t, e.__cachedImgObj = {
                        image: e,
                        pending: [l]
                    })),
                    e
                }
                return t
            }
            return e
        }
        function h() {
            var t = this.__cachedImgObj;
            this.onload = this.onerror = this.__cachedImgObj = null;
            for (var e = 0; e < t.pending.length; e++) {
                var r = t.pending[e]
                  , n = r.cb;
                n && n(this, r.cbPayload),
                r.hostEl.dirty()
            }
            t.pending.length = 0
        }
        function u(t) {
            return t && t.width && t.height
        }
    },
    96082: function(t, e, r) {
        r.d(e, {
            $F: function() {
                return y
            },
            NY: function() {
                return c
            },
            aF: function() {
                return s
            }
        });
        var n = r(8358)
          , i = r(40207)
          , o = r(41116)
          , a = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
        function s(t, e, r, n, i) {
            if (!e)
                return "";
            var o = (t + "").split("\n");
            i = h(e, r, n, i);
            for (var a = 0, s = o.length; a < s; a++)
                o[a] = u(o[a], i);
            return o.join("\n")
        }
        function h(t, e, r, n) {
            n = n || {};
            var a = (0,
            i.extend)({}, n);
            a.font = e,
            r = (0,
            i.retrieve2)(r, "..."),
            a.maxIterations = (0,
            i.retrieve2)(n.maxIterations, 2);
            var s = a.minChar = (0,
            i.retrieve2)(n.minChar, 0);
            a.cnCharWidth = (0,
            o.dz)("\u56fd", e);
            var h = a.ascCharWidth = (0,
            o.dz)("a", e);
            a.placeholder = (0,
            i.retrieve2)(n.placeholder, "");
            for (var u = t = Math.max(0, t - 1), l = 0; l < s && u >= h; l++)
                u -= h;
            var c = (0,
            o.dz)(r, e);
            return c > u && (r = "",
            c = 0),
            u = t - c,
            a.ellipsis = r,
            a.ellipsisWidth = c,
            a.contentWidth = u,
            a.containerWidth = t,
            a
        }
        function u(t, e) {
            var r = e.containerWidth
              , n = e.font
              , i = e.contentWidth;
            if (!r)
                return "";
            var a = (0,
            o.dz)(t, n);
            if (a <= r)
                return t;
            for (var s = 0; ; s++) {
                if (a <= i || s >= e.maxIterations) {
                    t += e.ellipsis;
                    break
                }
                var h = 0 === s ? l(t, i, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * i / a) : 0;
                t = t.substr(0, h),
                a = (0,
                o.dz)(t, n)
            }
            return "" === t && (t = e.placeholder),
            t
        }
        function l(t, e, r, n) {
            for (var i = 0, o = 0, a = t.length; o < a && i < e; o++) {
                var s = t.charCodeAt(o);
                i += 0 <= s && s <= 127 ? r : n
            }
            return o
        }
        function c(t, e) {
            null != t && (t += "");
            var r, n = e.overflow, a = e.padding, s = e.font, l = "truncate" === n, c = (0,
            o.Dp)(s), f = (0,
            i.retrieve2)(e.lineHeight, c), p = !!e.backgroundColor, d = "truncate" === e.lineOverflow, y = e.width, v = (r = null == y || "break" !== n && "breakAll" !== n ? t ? t.split("\n") : [] : t ? m(t, e.font, y, "breakAll" === n, 0).lines : []).length * f, g = (0,
            i.retrieve2)(e.height, v);
            if (v > g && d) {
                var _ = Math.floor(g / f);
                r = r.slice(0, _)
            }
            if (t && l && null != y)
                for (var x = h(y, s, e.ellipsis, {
                    minChar: e.truncateMinChar,
                    placeholder: e.placeholder
                }), w = 0; w < r.length; w++)
                    r[w] = u(r[w], x);
            var b = g
              , k = 0;
            for (w = 0; w < r.length; w++)
                k = Math.max((0,
                o.dz)(r[w], s), k);
            null == y && (y = k);
            var S = k;
            return a && (b += a[0] + a[2],
            S += a[1] + a[3],
            y += a[1] + a[3]),
            p && (S = y),
            {
                lines: r,
                height: g,
                outerWidth: S,
                outerHeight: b,
                lineHeight: f,
                calculatedLineHeight: c,
                contentWidth: k,
                contentHeight: v,
                width: y
            }
        }
        var f = function() {}
          , p = function(t) {
            this.tokens = [],
            t && (this.tokens = t)
        }
          , d = function() {
            this.width = 0,
            this.height = 0,
            this.contentWidth = 0,
            this.contentHeight = 0,
            this.outerWidth = 0,
            this.outerHeight = 0,
            this.lines = []
        };
        function y(t, e) {
            var r = new d;
            if (null != t && (t += ""),
            !t)
                return r;
            for (var h, u = e.width, l = e.height, c = e.overflow, f = "break" !== c && "breakAll" !== c || null == u ? null : {
                width: u,
                accumWidth: 0,
                breakAll: "breakAll" === c
            }, p = a.lastIndex = 0; null != (h = a.exec(t)); ) {
                var y = h.index;
                y > p && v(r, t.substring(p, y), e, f),
                v(r, h[2], e, f, h[1]),
                p = a.lastIndex
            }
            p < t.length && v(r, t.substring(p, t.length), e, f);
            var g = []
              , _ = 0
              , m = 0
              , x = e.padding
              , w = "truncate" === c
              , b = "truncate" === e.lineOverflow;
            function k(t, e, r) {
                t.width = e,
                t.lineHeight = r,
                _ += r,
                m = Math.max(m, e)
            }
            t: for (var S = 0; S < r.lines.length; S++) {
                for (var T = r.lines[S], C = 0, P = 0, M = 0; M < T.tokens.length; M++) {
                    var Z = (H = T.tokens[M]).styleName && e.rich[H.styleName] || {}
                      , A = H.textPadding = Z.padding
                      , L = A ? A[1] + A[3] : 0
                      , D = H.font = Z.font || e.font;
                    H.contentHeight = (0,
                    o.Dp)(D);
                    var O = (0,
                    i.retrieve2)(Z.height, H.contentHeight);
                    if (H.innerHeight = O,
                    A && (O += A[0] + A[2]),
                    H.height = O,
                    H.lineHeight = (0,
                    i.retrieve3)(Z.lineHeight, e.lineHeight, O),
                    H.align = Z && Z.align || e.align,
                    H.verticalAlign = Z && Z.verticalAlign || "middle",
                    b && null != l && _ + H.lineHeight > l) {
                        M > 0 ? (T.tokens = T.tokens.slice(0, M),
                        k(T, P, C),
                        r.lines = r.lines.slice(0, S + 1)) : r.lines = r.lines.slice(0, S);
                        break t
                    }
                    var z = Z.width
                      , R = null == z || "auto" === z;
                    if ("string" === typeof z && "%" === z.charAt(z.length - 1))
                        H.percentWidth = z,
                        g.push(H),
                        H.contentWidth = (0,
                        o.dz)(H.text, D);
                    else {
                        if (R) {
                            var I = Z.backgroundColor
                              , F = I && I.image;
                            F && (F = n.ko(F),
                            n.v5(F) && (H.width = Math.max(H.width, F.width * O / F.height)))
                        }
                        var B = w && null != u ? u - P : null;
                        null != B && B < H.width ? !R || B < L ? (H.text = "",
                        H.width = H.contentWidth = 0) : (H.text = s(H.text, B - L, D, e.ellipsis, {
                            minChar: e.truncateMinChar
                        }),
                        H.width = H.contentWidth = (0,
                        o.dz)(H.text, D)) : H.contentWidth = (0,
                        o.dz)(H.text, D)
                    }
                    H.width += L,
                    P += H.width,
                    Z && (C = Math.max(C, H.lineHeight))
                }
                k(T, P, C)
            }
            r.outerWidth = r.width = (0,
            i.retrieve2)(u, m),
            r.outerHeight = r.height = (0,
            i.retrieve2)(l, _),
            r.contentHeight = _,
            r.contentWidth = m,
            x && (r.outerWidth += x[1] + x[3],
            r.outerHeight += x[0] + x[2]);
            for (S = 0; S < g.length; S++) {
                var H, E = (H = g[S]).percentWidth;
                H.width = parseInt(E, 10) / 100 * r.width
            }
            return r
        }
        function v(t, e, r, n, i) {
            var a, s, h = "" === e, u = i && r.rich[i] || {}, l = t.lines, c = u.font || r.font, d = !1;
            if (n) {
                var y = u.padding
                  , v = y ? y[1] + y[3] : 0;
                if (null != u.width && "auto" !== u.width) {
                    var g = (0,
                    o.GM)(u.width, n.width) + v;
                    l.length > 0 && g + n.accumWidth > n.width && (a = e.split("\n"),
                    d = !0),
                    n.accumWidth = g
                } else {
                    var _ = m(e, c, n.width, n.breakAll, n.accumWidth);
                    n.accumWidth = _.accumWidth + v,
                    s = _.linesWidths,
                    a = _.lines
                }
            } else
                a = e.split("\n");
            for (var x = 0; x < a.length; x++) {
                var w = a[x]
                  , b = new f;
                if (b.styleName = i,
                b.text = w,
                b.isLineHolder = !w && !h,
                "number" === typeof u.width ? b.width = u.width : b.width = s ? s[x] : (0,
                o.dz)(w, c),
                x || d)
                    l.push(new p([b]));
                else {
                    var k = (l[l.length - 1] || (l[0] = new p)).tokens
                      , S = k.length;
                    1 === S && k[0].isLineHolder ? k[0] = b : (w || !S || h) && k.push(b)
                }
            }
        }
        var g = (0,
        i.reduce)(",&?/;] ".split(""), (function(t, e) {
            return t[e] = !0,
            t
        }
        ), {});
        function _(t) {
            return !function(t) {
                var e = t.charCodeAt(0);
                return e >= 32 && e <= 591 || e >= 880 && e <= 4351 || e >= 4608 && e <= 5119 || e >= 7680 && e <= 8303
            }(t) || !!g[t]
        }
        function m(t, e, r, n, i) {
            for (var a = [], s = [], h = "", u = "", l = 0, c = 0, f = 0; f < t.length; f++) {
                var p = t.charAt(f);
                if ("\n" !== p) {
                    var d = (0,
                    o.dz)(p, e)
                      , y = !n && !_(p);
                    (a.length ? c + d > r : i + c + d > r) ? c ? (h || u) && (y ? (h || (h = u,
                    u = "",
                    c = l = 0),
                    a.push(h),
                    s.push(c - l),
                    u += p,
                    h = "",
                    c = l += d) : (u && (h += u,
                    u = "",
                    l = 0),
                    a.push(h),
                    s.push(c),
                    h = p,
                    c = d)) : y ? (a.push(u),
                    s.push(l),
                    u = p,
                    l = d) : (a.push(p),
                    s.push(d)) : (c += d,
                    y ? (u += p,
                    l += d) : (u && (h += u,
                    u = "",
                    l = 0),
                    h += p))
                } else
                    u && (h += u,
                    c += l),
                    a.push(h),
                    s.push(c),
                    h = "",
                    u = "",
                    l = 0,
                    c = 0
            }
            return a.length || h || (h = t,
            u = "",
            l = 0),
            u && (h += u),
            h && (a.push(h),
            s.push(c)),
            1 === a.length && (c += i),
            {
                accumWidth: c,
                lines: a,
                linesWidths: s
            }
        }
    },
    12975: function(t, e, r) {
        r.d(e, {
            L: function() {
                return i
            }
        });
        var n = r(81614);
        function i(t, e, r) {
            var i = e.smooth
              , o = e.points;
            if (o && o.length >= 2) {
                if (i) {
                    var a = function(t, e, r, i) {
                        var o, a, s, h, u = [], l = [], c = [], f = [];
                        if (i) {
                            s = [1 / 0, 1 / 0],
                            h = [-1 / 0, -1 / 0];
                            for (var p = 0, d = t.length; p < d; p++)
                                (0,
                                n.min)(s, s, t[p]),
                                (0,
                                n.max)(h, h, t[p]);
                            (0,
                            n.min)(s, s, i[0]),
                            (0,
                            n.max)(h, h, i[1])
                        }
                        for (p = 0,
                        d = t.length; p < d; p++) {
                            var y = t[p];
                            if (r)
                                o = t[p ? p - 1 : d - 1],
                                a = t[(p + 1) % d];
                            else {
                                if (0 === p || p === d - 1) {
                                    u.push((0,
                                    n.clone)(t[p]));
                                    continue
                                }
                                o = t[p - 1],
                                a = t[p + 1]
                            }
                            (0,
                            n.sub)(l, a, o),
                            (0,
                            n.scale)(l, l, e);
                            var v = (0,
                            n.distance)(y, o)
                              , g = (0,
                            n.distance)(y, a)
                              , _ = v + g;
                            0 !== _ && (v /= _,
                            g /= _),
                            (0,
                            n.scale)(c, l, -v),
                            (0,
                            n.scale)(f, l, g);
                            var m = (0,
                            n.add)([], y, c)
                              , x = (0,
                            n.add)([], y, f);
                            i && ((0,
                            n.max)(m, m, s),
                            (0,
                            n.min)(m, m, h),
                            (0,
                            n.max)(x, x, s),
                            (0,
                            n.min)(x, x, h)),
                            u.push(m),
                            u.push(x)
                        }
                        return r && u.push(u.shift()),
                        u
                    }(o, i, r, e.smoothConstraint);
                    t.moveTo(o[0][0], o[0][1]);
                    for (var s = o.length, h = 0; h < (r ? s : s - 1); h++) {
                        var u = a[2 * h]
                          , l = a[2 * h + 1]
                          , c = o[(h + 1) % s];
                        t.bezierCurveTo(u[0], u[1], l[0], l[1], c[0], c[1])
                    }
                } else {
                    t.moveTo(o[0][0], o[0][1]);
                    h = 1;
                    for (var f = o.length; h < f; h++)
                        t.lineTo(o[h][0], o[h][1])
                }
                r && t.closePath()
            }
        }
    },
    86171: function(t, e, r) {
        r.d(e, {
            Pw: function() {
                return o
            },
            _3: function() {
                return i
            },
            vu: function() {
                return a
            }
        });
        var n = Math.round;
        function i(t, e, r) {
            if (e) {
                var i = e.x1
                  , o = e.x2
                  , s = e.y1
                  , h = e.y2;
                t.x1 = i,
                t.x2 = o,
                t.y1 = s,
                t.y2 = h;
                var u = r && r.lineWidth;
                return u ? (n(2 * i) === n(2 * o) && (t.x1 = t.x2 = a(i, u, !0)),
                n(2 * s) === n(2 * h) && (t.y1 = t.y2 = a(s, u, !0)),
                t) : t
            }
        }
        function o(t, e, r) {
            if (e) {
                var n = e.x
                  , i = e.y
                  , o = e.width
                  , s = e.height;
                t.x = n,
                t.y = i,
                t.width = o,
                t.height = s;
                var h = r && r.lineWidth;
                return h ? (t.x = a(n, h, !0),
                t.y = a(i, h, !0),
                t.width = Math.max(a(n + o, h, !1) - t.x, 0 === o ? 0 : 1),
                t.height = Math.max(a(i + s, h, !1) - t.y, 0 === s ? 0 : 1),
                t) : t
            }
        }
        function a(t, e, r) {
            if (!e)
                return t;
            var i = n(2 * t);
            return (i + n(e)) % 2 === 0 ? i / 2 : (i + (r ? 1 : -1)) / 2
        }
    },
    12785: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = function() {
            this.cx = 0,
            this.cy = 0,
            this.r = 0,
            this.startAngle = 0,
            this.endAngle = 2 * Math.PI,
            this.clockwise = !0
        }
          , a = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultStyle = function() {
                return {
                    stroke: "#000",
                    fill: null
                }
            }
            ,
            e.prototype.getDefaultShape = function() {
                return new o
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r = e.cx
                  , n = e.cy
                  , i = Math.max(e.r, 0)
                  , o = e.startAngle
                  , a = e.endAngle
                  , s = e.clockwise
                  , h = Math.cos(o)
                  , u = Math.sin(o);
                t.moveTo(h * i + r, u * i + n),
                t.arc(r, n, i, o, a, !s)
            }
            ,
            e
        }(i.ZP);
        a.prototype.type = "arc",
        e.Z = a
    },
    24294: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = r(81614)
          , a = r(42772)
          , s = []
          , h = function() {
            this.x1 = 0,
            this.y1 = 0,
            this.x2 = 0,
            this.y2 = 0,
            this.cpx1 = 0,
            this.cpy1 = 0,
            this.percent = 1
        };
        function u(t, e, r) {
            var n = t.cpx2
              , i = t.cpy2;
            return null != n || null != i ? [(r ? a.X_ : a.af)(t.x1, t.cpx1, t.cpx2, t.x2, e), (r ? a.X_ : a.af)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(r ? a.AZ : a.Zm)(t.x1, t.cpx1, t.x2, e), (r ? a.AZ : a.Zm)(t.y1, t.cpy1, t.y2, e)]
        }
        var l = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultStyle = function() {
                return {
                    stroke: "#000",
                    fill: null
                }
            }
            ,
            e.prototype.getDefaultShape = function() {
                return new h
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r = e.x1
                  , n = e.y1
                  , i = e.x2
                  , o = e.y2
                  , h = e.cpx1
                  , u = e.cpy1
                  , l = e.cpx2
                  , c = e.cpy2
                  , f = e.percent;
                0 !== f && (t.moveTo(r, n),
                null == l || null == c ? (f < 1 && ((0,
                a.Lx)(r, h, i, f, s),
                h = s[1],
                i = s[2],
                (0,
                a.Lx)(n, u, o, f, s),
                u = s[1],
                o = s[2]),
                t.quadraticCurveTo(h, u, i, o)) : (f < 1 && ((0,
                a.Vz)(r, h, l, i, f, s),
                h = s[1],
                l = s[2],
                i = s[3],
                (0,
                a.Vz)(n, u, c, o, f, s),
                u = s[1],
                c = s[2],
                o = s[3]),
                t.bezierCurveTo(h, u, l, c, i, o)))
            }
            ,
            e.prototype.pointAt = function(t) {
                return u(this.shape, t, !1)
            }
            ,
            e.prototype.tangentAt = function(t) {
                var e = u(this.shape, t, !0);
                return o.normalize(e, e)
            }
            ,
            e
        }(i.ZP);
        l.prototype.type = "bezier-curve",
        e.Z = l
    },
    39440: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = function() {
            this.cx = 0,
            this.cy = 0,
            this.r = 0
        }
          , a = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultShape = function() {
                return new o
            }
            ,
            e.prototype.buildPath = function(t, e) {
                t.moveTo(e.cx + e.r, e.cy),
                t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI)
            }
            ,
            e
        }(i.ZP);
        a.prototype.type = "circle",
        e.Z = a
    },
    67060: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = function() {
            this.cx = 0,
            this.cy = 0,
            this.rx = 0,
            this.ry = 0
        }
          , a = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultShape = function() {
                return new o
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r = .5522848
                  , n = e.cx
                  , i = e.cy
                  , o = e.rx
                  , a = e.ry
                  , s = o * r
                  , h = a * r;
                t.moveTo(n - o, i),
                t.bezierCurveTo(n - o, i - h, n - s, i - a, n, i - a),
                t.bezierCurveTo(n + s, i - a, n + o, i - h, n + o, i),
                t.bezierCurveTo(n + o, i + h, n + s, i + a, n, i + a),
                t.bezierCurveTo(n - s, i + a, n - o, i + h, n - o, i),
                t.closePath()
            }
            ,
            e
        }(i.ZP);
        a.prototype.type = "ellipse",
        e.Z = a
    },
    28869: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = r(86171)
          , a = {}
          , s = function() {
            this.x1 = 0,
            this.y1 = 0,
            this.x2 = 0,
            this.y2 = 0,
            this.percent = 1
        }
          , h = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultStyle = function() {
                return {
                    stroke: "#000",
                    fill: null
                }
            }
            ,
            e.prototype.getDefaultShape = function() {
                return new s
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r, n, i, s;
                if (this.subPixelOptimize) {
                    var h = (0,
                    o._3)(a, e, this.style);
                    r = h.x1,
                    n = h.y1,
                    i = h.x2,
                    s = h.y2
                } else
                    r = e.x1,
                    n = e.y1,
                    i = e.x2,
                    s = e.y2;
                var u = e.percent;
                0 !== u && (t.moveTo(r, n),
                u < 1 && (i = r * (1 - u) + i * u,
                s = n * (1 - u) + s * u),
                t.lineTo(i, s))
            }
            ,
            e.prototype.pointAt = function(t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
            ,
            e
        }(i.ZP);
        h.prototype.type = "line",
        e.Z = h
    },
    70152: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = r(12975)
          , a = function() {
            this.points = null,
            this.smooth = 0,
            this.smoothConstraint = null
        }
          , s = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultShape = function() {
                return new a
            }
            ,
            e.prototype.buildPath = function(t, e) {
                o.L(t, e, !0)
            }
            ,
            e
        }(i.ZP);
        s.prototype.type = "polygon",
        e.Z = s
    },
    32094: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = r(12975)
          , a = function() {
            this.points = null,
            this.percent = 1,
            this.smooth = 0,
            this.smoothConstraint = null
        }
          , s = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultStyle = function() {
                return {
                    stroke: "#000",
                    fill: null
                }
            }
            ,
            e.prototype.getDefaultShape = function() {
                return new a
            }
            ,
            e.prototype.buildPath = function(t, e) {
                o.L(t, e, !1)
            }
            ,
            e
        }(i.ZP);
        s.prototype.type = "polyline",
        e.Z = s
    },
    98041: function(t, e, r) {
        r.d(e, {
            Z: function() {
                return u
            }
        });
        var n = r(51126)
          , i = r(15706);
        var o = r(86171)
          , a = function() {
            this.x = 0,
            this.y = 0,
            this.width = 0,
            this.height = 0
        }
          , s = {}
          , h = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultShape = function() {
                return new a
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r, n, i, a;
                if (this.subPixelOptimize) {
                    var h = (0,
                    o.Pw)(s, e, this.style);
                    r = h.x,
                    n = h.y,
                    i = h.width,
                    a = h.height,
                    h.r = e.r,
                    e = h
                } else
                    r = e.x,
                    n = e.y,
                    i = e.width,
                    a = e.height;
                e.r ? function(t, e) {
                    var r, n, i, o, a, s = e.x, h = e.y, u = e.width, l = e.height, c = e.r;
                    u < 0 && (s += u,
                    u = -u),
                    l < 0 && (h += l,
                    l = -l),
                    "number" === typeof c ? r = n = i = o = c : c instanceof Array ? 1 === c.length ? r = n = i = o = c[0] : 2 === c.length ? (r = i = c[0],
                    n = o = c[1]) : 3 === c.length ? (r = c[0],
                    n = o = c[1],
                    i = c[2]) : (r = c[0],
                    n = c[1],
                    i = c[2],
                    o = c[3]) : r = n = i = o = 0,
                    r + n > u && (r *= u / (a = r + n),
                    n *= u / a),
                    i + o > u && (i *= u / (a = i + o),
                    o *= u / a),
                    n + i > l && (n *= l / (a = n + i),
                    i *= l / a),
                    r + o > l && (r *= l / (a = r + o),
                    o *= l / a),
                    t.moveTo(s + r, h),
                    t.lineTo(s + u - n, h),
                    0 !== n && t.arc(s + u - n, h + n, n, -Math.PI / 2, 0),
                    t.lineTo(s + u, h + l - i),
                    0 !== i && t.arc(s + u - i, h + l - i, i, 0, Math.PI / 2),
                    t.lineTo(s + o, h + l),
                    0 !== o && t.arc(s + o, h + l - o, o, Math.PI / 2, Math.PI),
                    t.lineTo(s, h + r),
                    0 !== r && t.arc(s + r, h + r, r, Math.PI, 1.5 * Math.PI)
                }(t, e) : t.rect(r, n, i, a)
            }
            ,
            e.prototype.isZeroArea = function() {
                return !this.shape.width || !this.shape.height
            }
            ,
            e
        }(i.ZP);
        h.prototype.type = "rect";
        var u = h
    },
    99798: function(t, e, r) {
        var n = r(51126)
          , i = r(15706)
          , o = function() {
            this.cx = 0,
            this.cy = 0,
            this.r = 0,
            this.r0 = 0
        }
          , a = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultShape = function() {
                return new o
            }
            ,
            e.prototype.buildPath = function(t, e) {
                var r = e.cx
                  , n = e.cy
                  , i = 2 * Math.PI;
                t.moveTo(r + e.r, n),
                t.arc(r, n, e.r, 0, i, !1),
                t.moveTo(r + e.r0, n),
                t.arc(r, n, e.r0, 0, i, !0)
            }
            ,
            e
        }(i.ZP);
        a.prototype.type = "ring",
        e.Z = a
    },
    40202: function(t, e, r) {
        r.d(e, {
            C: function() {
                return w
            }
        });
        var n = r(51126)
          , i = r(15706)
          , o = r(40207)
          , a = Math.PI
          , s = 2 * a
          , h = Math.sin
          , u = Math.cos
          , l = Math.acos
          , c = Math.atan2
          , f = Math.abs
          , p = Math.sqrt
          , d = Math.max
          , y = Math.min
          , v = 1e-4;
        function g(t, e, r, n, i, o, a) {
            var s = t - r
              , h = e - n
              , u = (a ? o : -o) / p(s * s + h * h)
              , l = u * h
              , c = -u * s
              , f = t + l
              , y = e + c
              , v = r + l
              , g = n + c
              , _ = (f + v) / 2
              , m = (y + g) / 2
              , x = v - f
              , w = g - y
              , b = x * x + w * w
              , k = i - o
              , S = f * g - v * y
              , T = (w < 0 ? -1 : 1) * p(d(0, k * k * b - S * S))
              , C = (S * w - x * T) / b
              , P = (-S * x - w * T) / b
              , M = (S * w + x * T) / b
              , Z = (-S * x + w * T) / b
              , A = C - _
              , L = P - m
              , D = M - _
              , O = Z - m;
            return A * A + L * L > D * D + O * O && (C = M,
            P = Z),
            {
                cx: C,
                cy: P,
                x0: -l,
                y0: -c,
                x1: C * (i / k - 1),
                y1: P * (i / k - 1)
            }
        }
        function _(t, e) {
            var r, n = d(e.r, 0), i = d(e.r0 || 0, 0), _ = n > 0;
            if (_ || i > 0) {
                if (_ || (n = i,
                i = 0),
                i > n) {
                    var m = n;
                    n = i,
                    i = m
                }
                var x = e.startAngle
                  , w = e.endAngle;
                if (!isNaN(x) && !isNaN(w)) {
                    var b = e.cx
                      , k = e.cy
                      , S = !!e.clockwise
                      , T = f(w - x)
                      , C = T > s && T % s;
                    if (C > v && (T = C),
                    n > v)
                        if (T > s - v)
                            t.moveTo(b + n * u(x), k + n * h(x)),
                            t.arc(b, k, n, x, w, !S),
                            i > v && (t.moveTo(b + i * u(w), k + i * h(w)),
                            t.arc(b, k, i, w, x, S));
                        else {
                            var P = void 0
                              , M = void 0
                              , Z = void 0
                              , A = void 0
                              , L = void 0
                              , D = void 0
                              , O = void 0
                              , z = void 0
                              , R = void 0
                              , I = void 0
                              , F = void 0
                              , B = void 0
                              , H = void 0
                              , E = void 0
                              , W = void 0
                              , N = void 0
                              , q = n * u(x)
                              , Y = n * h(x)
                              , X = i * u(w)
                              , j = i * h(w)
                              , V = T > v;
                            if (V) {
                                var G = e.cornerRadius;
                                G && (P = (r = function(t) {
                                    var e;
                                    if ((0,
                                    o.isArray)(t)) {
                                        var r = t.length;
                                        if (!r)
                                            return t;
                                        e = 1 === r ? [t[0], t[0], 0, 0] : 2 === r ? [t[0], t[0], t[1], t[1]] : 3 === r ? t.concat(t[2]) : t
                                    } else
                                        e = [t, t, t, t];
                                    return e
                                }(G))[0],
                                M = r[1],
                                Z = r[2],
                                A = r[3]);
                                var U = f(n - i) / 2;
                                if (L = y(U, Z),
                                D = y(U, A),
                                O = y(U, P),
                                z = y(U, M),
                                F = R = d(L, D),
                                B = I = d(O, z),
                                (R > v || I > v) && (H = n * u(w),
                                E = n * h(w),
                                W = i * u(x),
                                N = i * h(x),
                                T < a)) {
                                    var K = function(t, e, r, n, i, o, a, s) {
                                        var h = r - t
                                          , u = n - e
                                          , l = a - i
                                          , c = s - o
                                          , f = c * h - l * u;
                                        if (!(f * f < v))
                                            return [t + (f = (l * (e - o) - c * (t - i)) / f) * h, e + f * u]
                                    }(q, Y, W, N, H, E, X, j);
                                    if (K) {
                                        var Q = q - K[0]
                                          , $ = Y - K[1]
                                          , J = H - K[0]
                                          , tt = E - K[1]
                                          , et = 1 / h(l((Q * J + $ * tt) / (p(Q * Q + $ * $) * p(J * J + tt * tt))) / 2)
                                          , rt = p(K[0] * K[0] + K[1] * K[1]);
                                        F = y(R, (n - rt) / (et + 1)),
                                        B = y(I, (i - rt) / (et - 1))
                                    }
                                }
                            }
                            if (V)
                                if (F > v) {
                                    var nt = y(Z, F)
                                      , it = y(A, F)
                                      , ot = g(W, N, q, Y, n, nt, S)
                                      , at = g(H, E, X, j, n, it, S);
                                    t.moveTo(b + ot.cx + ot.x0, k + ot.cy + ot.y0),
                                    F < R && nt === it ? t.arc(b + ot.cx, k + ot.cy, F, c(ot.y0, ot.x0), c(at.y0, at.x0), !S) : (nt > 0 && t.arc(b + ot.cx, k + ot.cy, nt, c(ot.y0, ot.x0), c(ot.y1, ot.x1), !S),
                                    t.arc(b, k, n, c(ot.cy + ot.y1, ot.cx + ot.x1), c(at.cy + at.y1, at.cx + at.x1), !S),
                                    it > 0 && t.arc(b + at.cx, k + at.cy, it, c(at.y1, at.x1), c(at.y0, at.x0), !S))
                                } else
                                    t.moveTo(b + q, k + Y),
                                    t.arc(b, k, n, x, w, !S);
                            else
                                t.moveTo(b + q, k + Y);
                            if (i > v && V)
                                if (B > v) {
                                    nt = y(P, B),
                                    ot = g(X, j, H, E, i, -(it = y(M, B)), S),
                                    at = g(q, Y, W, N, i, -nt, S);
                                    t.lineTo(b + ot.cx + ot.x0, k + ot.cy + ot.y0),
                                    B < I && nt === it ? t.arc(b + ot.cx, k + ot.cy, B, c(ot.y0, ot.x0), c(at.y0, at.x0), !S) : (it > 0 && t.arc(b + ot.cx, k + ot.cy, it, c(ot.y0, ot.x0), c(ot.y1, ot.x1), !S),
                                    t.arc(b, k, i, c(ot.cy + ot.y1, ot.cx + ot.x1), c(at.cy + at.y1, at.cx + at.x1), S),
                                    nt > 0 && t.arc(b + at.cx, k + at.cy, nt, c(at.y1, at.x1), c(at.y0, at.x0), !S))
                                } else
                                    t.lineTo(b + X, k + j),
                                    t.arc(b, k, i, w, x, S);
                            else
                                t.lineTo(b + X, k + j)
                        }
                    else
                        t.moveTo(b, k);
                    t.closePath()
                }
            }
        }
        var m = function() {
            this.cx = 0,
            this.cy = 0,
            this.r0 = 0,
            this.r = 0,
            this.startAngle = 0,
            this.endAngle = 2 * Math.PI,
            this.clockwise = !0,
            this.cornerRadius = 0
        }
          , x = function(t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.getDefaultShape = function() {
                return new m
            }
            ,
            e.prototype.buildPath = function(t, e) {
                _(t, e)
            }
            ,
            e.prototype.isZeroArea = function() {
                return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0
            }
            ,
            e
        }(i.ZP);
        x.prototype.type = "sector";
        var w = x
    },
    4490: function(t, e, r) {
        r.r(e),
        r.d(e, {
            fastLerp: function() {
                return x
            },
            fastMapToColor: function() {
                return w
            },
            lerp: function() {
                return b
            },
            lift: function() {
                return _
            },
            lum: function() {
                return P
            },
            mapToColor: function() {
                return k
            },
            modifyAlpha: function() {
                return T
            },
            modifyHSL: function() {
                return S
            },
            parse: function() {
                return v
            },
            random: function() {
                return M
            },
            stringify: function() {
                return C
            },
            toHex: function() {
                return m
            }
        });
        var n = r(8352)
          , i = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        };
        function o(t) {
            return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
        }
        function a(t) {
            return t < 0 ? 0 : t > 1 ? 1 : t
        }
        function s(t) {
            var e = t;
            return e.length && "%" === e.charAt(e.length - 1) ? o(parseFloat(e) / 100 * 255) : o(parseInt(e, 10))
        }
        function h(t) {
            var e = t;
            return e.length && "%" === e.charAt(e.length - 1) ? a(parseFloat(e) / 100) : a(parseFloat(e))
        }
        function u(t, e, r) {
            return r < 0 ? r += 1 : r > 1 && (r -= 1),
            6 * r < 1 ? t + (e - t) * r * 6 : 2 * r < 1 ? e : 3 * r < 2 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }
        function l(t, e, r) {
            return t + (e - t) * r
        }
        function c(t, e, r, n, i) {
            return t[0] = e,
            t[1] = r,
            t[2] = n,
            t[3] = i,
            t
        }
        function f(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t
        }
        var p = new n.ZP(20)
          , d = null;
        function y(t, e) {
            d && f(d, e),
            d = p.put(t, d || e.slice())
        }
        function v(t, e) {
            if (t) {
                e = e || [];
                var r = p.get(t);
                if (r)
                    return f(e, r);
                var n = (t += "").replace(/ /g, "").toLowerCase();
                if (n in i)
                    return f(e, i[n]),
                    y(t, e),
                    e;
                var o, a = n.length;
                if ("#" === n.charAt(0))
                    return 4 === a || 5 === a ? (o = parseInt(n.slice(1, 4), 16)) >= 0 && o <= 4095 ? (c(e, (3840 & o) >> 4 | (3840 & o) >> 8, 240 & o | (240 & o) >> 4, 15 & o | (15 & o) << 4, 5 === a ? parseInt(n.slice(4), 16) / 15 : 1),
                    y(t, e),
                    e) : void c(e, 0, 0, 0, 1) : 7 === a || 9 === a ? (o = parseInt(n.slice(1, 7), 16)) >= 0 && o <= 16777215 ? (c(e, (16711680 & o) >> 16, (65280 & o) >> 8, 255 & o, 9 === a ? parseInt(n.slice(7), 16) / 255 : 1),
                    y(t, e),
                    e) : void c(e, 0, 0, 0, 1) : void 0;
                var u = n.indexOf("(")
                  , l = n.indexOf(")");
                if (-1 !== u && l + 1 === a) {
                    var d = n.substr(0, u)
                      , v = n.substr(u + 1, l - (u + 1)).split(",")
                      , _ = 1;
                    switch (d) {
                    case "rgba":
                        if (4 !== v.length)
                            return 3 === v.length ? c(e, +v[0], +v[1], +v[2], 1) : c(e, 0, 0, 0, 1);
                        _ = h(v.pop());
                    case "rgb":
                        return v.length >= 3 ? (c(e, s(v[0]), s(v[1]), s(v[2]), 3 === v.length ? _ : h(v[3])),
                        y(t, e),
                        e) : void c(e, 0, 0, 0, 1);
                    case "hsla":
                        return 4 !== v.length ? void c(e, 0, 0, 0, 1) : (v[3] = h(v[3]),
                        g(v, e),
                        y(t, e),
                        e);
                    case "hsl":
                        return 3 !== v.length ? void c(e, 0, 0, 0, 1) : (g(v, e),
                        y(t, e),
                        e);
                    default:
                        return
                    }
                }
                c(e, 0, 0, 0, 1)
            }
        }
        function g(t, e) {
            var r = (parseFloat(t[0]) % 360 + 360) % 360 / 360
              , n = h(t[1])
              , i = h(t[2])
              , a = i <= .5 ? i * (n + 1) : i + n - i * n
              , s = 2 * i - a;
            return c(e = e || [], o(255 * u(s, a, r + 1 / 3)), o(255 * u(s, a, r)), o(255 * u(s, a, r - 1 / 3)), 1),
            4 === t.length && (e[3] = t[3]),
            e
        }
        function _(t, e) {
            var r = v(t);
            if (r) {
                for (var n = 0; n < 3; n++)
                    r[n] = e < 0 ? r[n] * (1 - e) | 0 : (255 - r[n]) * e + r[n] | 0,
                    r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
                return C(r, 4 === r.length ? "rgba" : "rgb")
            }
        }
        function m(t) {
            var e = v(t);
            if (e)
                return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
        }
        function x(t, e, r) {
            if (e && e.length && t >= 0 && t <= 1) {
                r = r || [];
                var n = t * (e.length - 1)
                  , i = Math.floor(n)
                  , s = Math.ceil(n)
                  , h = e[i]
                  , u = e[s]
                  , c = n - i;
                return r[0] = o(l(h[0], u[0], c)),
                r[1] = o(l(h[1], u[1], c)),
                r[2] = o(l(h[2], u[2], c)),
                r[3] = a(l(h[3], u[3], c)),
                r
            }
        }
        var w = x;
        function b(t, e, r) {
            if (e && e.length && t >= 0 && t <= 1) {
                var n = t * (e.length - 1)
                  , i = Math.floor(n)
                  , s = Math.ceil(n)
                  , h = v(e[i])
                  , u = v(e[s])
                  , c = n - i
                  , f = C([o(l(h[0], u[0], c)), o(l(h[1], u[1], c)), o(l(h[2], u[2], c)), a(l(h[3], u[3], c))], "rgba");
                return r ? {
                    color: f,
                    leftIndex: i,
                    rightIndex: s,
                    value: n
                } : f
            }
        }
        var k = b;
        function S(t, e, r, n) {
            var i, o = v(t);
            if (t)
                return o = function(t) {
                    if (t) {
                        var e, r, n = t[0] / 255, i = t[1] / 255, o = t[2] / 255, a = Math.min(n, i, o), s = Math.max(n, i, o), h = s - a, u = (s + a) / 2;
                        if (0 === h)
                            e = 0,
                            r = 0;
                        else {
                            r = u < .5 ? h / (s + a) : h / (2 - s - a);
                            var l = ((s - n) / 6 + h / 2) / h
                              , c = ((s - i) / 6 + h / 2) / h
                              , f = ((s - o) / 6 + h / 2) / h;
                            n === s ? e = f - c : i === s ? e = 1 / 3 + l - f : o === s && (e = 2 / 3 + c - l),
                            e < 0 && (e += 1),
                            e > 1 && (e -= 1)
                        }
                        var p = [360 * e, r, u];
                        return null != t[3] && p.push(t[3]),
                        p
                    }
                }(o),
                null != e && (o[0] = (i = e,
                (i = Math.round(i)) < 0 ? 0 : i > 360 ? 360 : i)),
                null != r && (o[1] = h(r)),
                null != n && (o[2] = h(n)),
                C(g(o), "rgba")
        }
        function T(t, e) {
            var r = v(t);
            if (r && null != e)
                return r[3] = a(e),
                C(r, "rgba")
        }
        function C(t, e) {
            if (t && t.length) {
                var r = t[0] + "," + t[1] + "," + t[2];
                return "rgba" !== e && "hsva" !== e && "hsla" !== e || (r += "," + t[3]),
                e + "(" + r + ")"
            }
        }
        function P(t, e) {
            var r = v(t);
            return r ? (.299 * r[0] + .587 * r[1] + .114 * r[2]) * r[3] / 255 + (1 - r[3]) * e : 0
        }
        function M() {
            return C([Math.round(255 * Math.random()), Math.round(255 * Math.random()), Math.round(255 * Math.random())], "rgb")
        }
    },
    23537: function(t, e, r) {
        r.d(e, {
            iR: function() {
                return T
            },
            Pc: function() {
                return C
            },
            AA: function() {
                return P
            }
        });
        var n = r(51126)
          , i = r(15706)
          , o = r(2070)
          , a = r(81614)
          , s = o.Z.CMD
          , h = [[], [], []]
          , u = Math.sqrt
          , l = Math.atan2;
        var c = r(40207)
          , f = Math.sqrt
          , p = Math.sin
          , d = Math.cos
          , y = Math.PI;
        function v(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }
        function g(t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (v(t) * v(e))
        }
        function _(t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(g(t, e))
        }
        function m(t, e, r, n, i, o, a, s, h, u, l) {
            var c = h * (y / 180)
              , v = d(c) * (t - r) / 2 + p(c) * (e - n) / 2
              , m = -1 * p(c) * (t - r) / 2 + d(c) * (e - n) / 2
              , x = v * v / (a * a) + m * m / (s * s);
            x > 1 && (a *= f(x),
            s *= f(x));
            var w = (i === o ? -1 : 1) * f((a * a * (s * s) - a * a * (m * m) - s * s * (v * v)) / (a * a * (m * m) + s * s * (v * v))) || 0
              , b = w * a * m / s
              , k = w * -s * v / a
              , S = (t + r) / 2 + d(c) * b - p(c) * k
              , T = (e + n) / 2 + p(c) * b + d(c) * k
              , C = _([1, 0], [(v - b) / a, (m - k) / s])
              , P = [(v - b) / a, (m - k) / s]
              , M = [(-1 * v - b) / a, (-1 * m - k) / s]
              , Z = _(P, M);
            if (g(P, M) <= -1 && (Z = y),
            g(P, M) >= 1 && (Z = 0),
            Z < 0) {
                var A = Math.round(Z / y * 1e6) / 1e6;
                Z = 2 * y + A % 2 * y
            }
            l.addData(u, S, T, a, s, C, Z, c, o)
        }
        var x = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi
          , w = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
        var b = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return (0,
            n.ZT)(e, t),
            e.prototype.applyTransform = function(t) {}
            ,
            e
        }(i.ZP);
        function k(t) {
            return null != t.setData
        }
        function S(t, e) {
            var r = function(t) {
                var e = new o.Z;
                if (!t)
                    return e;
                var r, n = 0, i = 0, a = n, s = i, h = o.Z.CMD, u = t.match(x);
                if (!u)
                    return e;
                for (var l = 0; l < u.length; l++) {
                    for (var c = u[l], f = c.charAt(0), p = void 0, d = c.match(w) || [], y = d.length, v = 0; v < y; v++)
                        d[v] = parseFloat(d[v]);
                    for (var g = 0; g < y; ) {
                        var _ = void 0
                          , b = void 0
                          , k = void 0
                          , S = void 0
                          , T = void 0
                          , C = void 0
                          , P = void 0
                          , M = n
                          , Z = i
                          , A = void 0
                          , L = void 0;
                        switch (f) {
                        case "l":
                            n += d[g++],
                            i += d[g++],
                            p = h.L,
                            e.addData(p, n, i);
                            break;
                        case "L":
                            n = d[g++],
                            i = d[g++],
                            p = h.L,
                            e.addData(p, n, i);
                            break;
                        case "m":
                            n += d[g++],
                            i += d[g++],
                            p = h.M,
                            e.addData(p, n, i),
                            a = n,
                            s = i,
                            f = "l";
                            break;
                        case "M":
                            n = d[g++],
                            i = d[g++],
                            p = h.M,
                            e.addData(p, n, i),
                            a = n,
                            s = i,
                            f = "L";
                            break;
                        case "h":
                            n += d[g++],
                            p = h.L,
                            e.addData(p, n, i);
                            break;
                        case "H":
                            n = d[g++],
                            p = h.L,
                            e.addData(p, n, i);
                            break;
                        case "v":
                            i += d[g++],
                            p = h.L,
                            e.addData(p, n, i);
                            break;
                        case "V":
                            i = d[g++],
                            p = h.L,
                            e.addData(p, n, i);
                            break;
                        case "C":
                            p = h.C,
                            e.addData(p, d[g++], d[g++], d[g++], d[g++], d[g++], d[g++]),
                            n = d[g - 2],
                            i = d[g - 1];
                            break;
                        case "c":
                            p = h.C,
                            e.addData(p, d[g++] + n, d[g++] + i, d[g++] + n, d[g++] + i, d[g++] + n, d[g++] + i),
                            n += d[g - 2],
                            i += d[g - 1];
                            break;
                        case "S":
                            _ = n,
                            b = i,
                            A = e.len(),
                            L = e.data,
                            r === h.C && (_ += n - L[A - 4],
                            b += i - L[A - 3]),
                            p = h.C,
                            M = d[g++],
                            Z = d[g++],
                            n = d[g++],
                            i = d[g++],
                            e.addData(p, _, b, M, Z, n, i);
                            break;
                        case "s":
                            _ = n,
                            b = i,
                            A = e.len(),
                            L = e.data,
                            r === h.C && (_ += n - L[A - 4],
                            b += i - L[A - 3]),
                            p = h.C,
                            M = n + d[g++],
                            Z = i + d[g++],
                            n += d[g++],
                            i += d[g++],
                            e.addData(p, _, b, M, Z, n, i);
                            break;
                        case "Q":
                            M = d[g++],
                            Z = d[g++],
                            n = d[g++],
                            i = d[g++],
                            p = h.Q,
                            e.addData(p, M, Z, n, i);
                            break;
                        case "q":
                            M = d[g++] + n,
                            Z = d[g++] + i,
                            n += d[g++],
                            i += d[g++],
                            p = h.Q,
                            e.addData(p, M, Z, n, i);
                            break;
                        case "T":
                            _ = n,
                            b = i,
                            A = e.len(),
                            L = e.data,
                            r === h.Q && (_ += n - L[A - 4],
                            b += i - L[A - 3]),
                            n = d[g++],
                            i = d[g++],
                            p = h.Q,
                            e.addData(p, _, b, n, i);
                            break;
                        case "t":
                            _ = n,
                            b = i,
                            A = e.len(),
                            L = e.data,
                            r === h.Q && (_ += n - L[A - 4],
                            b += i - L[A - 3]),
                            n += d[g++],
                            i += d[g++],
                            p = h.Q,
                            e.addData(p, _, b, n, i);
                            break;
                        case "A":
                            k = d[g++],
                            S = d[g++],
                            T = d[g++],
                            C = d[g++],
                            P = d[g++],
                            m(M = n, Z = i, n = d[g++], i = d[g++], C, P, k, S, T, p = h.A, e);
                            break;
                        case "a":
                            k = d[g++],
                            S = d[g++],
                            T = d[g++],
                            C = d[g++],
                            P = d[g++],
                            m(M = n, Z = i, n += d[g++], i += d[g++], C, P, k, S, T, p = h.A, e)
                        }
                    }
                    "z" !== f && "Z" !== f || (p = h.Z,
                    e.addData(p),
                    n = a,
                    i = s),
                    r = p
                }
                return e.toStatic(),
                e
            }(t)
              , n = (0,
            c.extend)({}, e);
            return n.buildPath = function(t) {
                if (k(t)) {
                    t.setData(r.data),
                    (e = t.getContext()) && t.rebuildPath(e, 1)
                } else {
                    var e = t;
                    r.rebuildPath(e, 1)
                }
            }
            ,
            n.applyTransform = function(t) {
                !function(t, e) {
                    if (e) {
                        var r, n, i, o, c, f, p = t.data, d = t.len(), y = s.M, v = s.C, g = s.L, _ = s.R, m = s.A, x = s.Q;
                        for (i = 0,
                        o = 0; i < d; ) {
                            switch (r = p[i++],
                            o = i,
                            n = 0,
                            r) {
                            case y:
                            case g:
                                n = 1;
                                break;
                            case v:
                                n = 3;
                                break;
                            case x:
                                n = 2;
                                break;
                            case m:
                                var w = e[4]
                                  , b = e[5]
                                  , k = u(e[0] * e[0] + e[1] * e[1])
                                  , S = u(e[2] * e[2] + e[3] * e[3])
                                  , T = l(-e[1] / S, e[0] / k);
                                p[i] *= k,
                                p[i++] += w,
                                p[i] *= S,
                                p[i++] += b,
                                p[i++] *= k,
                                p[i++] *= S,
                                p[i++] += T,
                                p[i++] += T,
                                o = i += 2;
                                break;
                            case _:
                                f[0] = p[i++],
                                f[1] = p[i++],
                                (0,
                                a.applyTransform)(f, f, e),
                                p[o++] = f[0],
                                p[o++] = f[1],
                                f[0] += p[i++],
                                f[1] += p[i++],
                                (0,
                                a.applyTransform)(f, f, e),
                                p[o++] = f[0],
                                p[o++] = f[1]
                            }
                            for (c = 0; c < n; c++) {
                                var C = h[c];
                                C[0] = p[i++],
                                C[1] = p[i++],
                                (0,
                                a.applyTransform)(C, C, e),
                                p[o++] = C[0],
                                p[o++] = C[1]
                            }
                        }
                        t.increaseVersion()
                    }
                }(r, t),
                this.dirtyShape()
            }
            ,
            n
        }
        function T(t, e) {
            return new b(S(t, e))
        }
        function C(t, e) {
            var r = S(t, e);
            return function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.applyTransform = r.applyTransform,
                    n.buildPath = r.buildPath,
                    n
                }
                return (0,
                n.ZT)(e, t),
                e
            }(b)
        }
        function P(t, e) {
            for (var r = [], n = t.length, o = 0; o < n; o++) {
                var a = t[o];
                r.push(a.getUpdatedPathProxy(!0))
            }
            var s = new i.ZP(e);
            return s.createPathProxy(),
            s.buildPath = function(t) {
                if (k(t)) {
                    t.appendPath(r);
                    var e = t.getContext();
                    e && t.rebuildPath(e, 1)
                }
            }
            ,
            s
        }
    },
    21462: function(t, e, r) {
        r.r(e),
        r.d(e, {
            dispose: function() {
                return at
            },
            disposeAll: function() {
                return st
            },
            getInstance: function() {
                return ht
            },
            init: function() {
                return ot
            },
            registerPainter: function() {
                return ut
            },
            version: function() {
                return lt
            }
        });
        var n = r(51978)
          , i = r(40207)
          , o = r(51126)
          , a = r(81614)
          , s = function(t, e) {
            this.target = t,
            this.topTarget = e && e.topTarget
        }
          , h = function() {
            function t(t) {
                this.handler = t,
                t.on("mousedown", this._dragStart, this),
                t.on("mousemove", this._drag, this),
                t.on("mouseup", this._dragEnd, this)
            }
            return t.prototype._dragStart = function(t) {
                for (var e = t.target; e && !e.draggable; )
                    e = e.parent || e.__hostTarget;
                e && (this._draggingTarget = e,
                e.dragging = !0,
                this._x = t.offsetX,
                this._y = t.offsetY,
                this.handler.dispatchToElement(new s(e,t), "dragstart", t.event))
            }
            ,
            t.prototype._drag = function(t) {
                var e = this._draggingTarget;
                if (e) {
                    var r = t.offsetX
                      , n = t.offsetY
                      , i = r - this._x
                      , o = n - this._y;
                    this._x = r,
                    this._y = n,
                    e.drift(i, o, t),
                    this.handler.dispatchToElement(new s(e,t), "drag", t.event);
                    var a = this.handler.findHover(r, n, e).target
                      , h = this._dropTarget;
                    this._dropTarget = a,
                    e !== a && (h && a !== h && this.handler.dispatchToElement(new s(h,t), "dragleave", t.event),
                    a && a !== h && this.handler.dispatchToElement(new s(a,t), "dragenter", t.event))
                }
            }
            ,
            t.prototype._dragEnd = function(t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1),
                this.handler.dispatchToElement(new s(e,t), "dragend", t.event),
                this._dropTarget && this.handler.dispatchToElement(new s(this._dropTarget,t), "drop", t.event),
                this._draggingTarget = null,
                this._dropTarget = null
            }
            ,
            t
        }()
          , u = r(82797)
          , l = r(6159)
          , c = function() {
            function t() {
                this._track = []
            }
            return t.prototype.recognize = function(t, e, r) {
                return this._doTrack(t, e, r),
                this._recognize(t)
            }
            ,
            t.prototype.clear = function() {
                return this._track.length = 0,
                this
            }
            ,
            t.prototype._doTrack = function(t, e, r) {
                var n = t.touches;
                if (n) {
                    for (var i = {
                        points: [],
                        touches: [],
                        target: e,
                        event: t
                    }, o = 0, a = n.length; o < a; o++) {
                        var s = n[o]
                          , h = l.eV(r, s, {});
                        i.points.push([h.zrX, h.zrY]),
                        i.touches.push(s)
                    }
                    this._track.push(i)
                }
            }
            ,
            t.prototype._recognize = function(t) {
                for (var e in p)
                    if (p.hasOwnProperty(e)) {
                        var r = p[e](this._track, t);
                        if (r)
                            return r
                    }
            }
            ,
            t
        }();
        function f(t) {
            var e = t[1][0] - t[0][0]
              , r = t[1][1] - t[0][1];
            return Math.sqrt(e * e + r * r)
        }
        var p = {
            pinch: function(t, e) {
                var r = t.length;
                if (r) {
                    var n, i = (t[r - 1] || {}).points, o = (t[r - 2] || {}).points || i;
                    if (o && o.length > 1 && i && i.length > 1) {
                        var a = f(i) / f(o);
                        !isFinite(a) && (a = 1),
                        e.pinchScale = a;
                        var s = [((n = i)[0][0] + n[1][0]) / 2, (n[0][1] + n[1][1]) / 2];
                        return e.pinchX = s[0],
                        e.pinchY = s[1],
                        {
                            type: "pinch",
                            target: t[0].target,
                            event: e
                        }
                    }
                }
            }
        }
          , d = r(75579)
          , y = "silent";
        function v() {
            l.sT(this.event)
        }
        var g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.handler = null,
                e
            }
            return (0,
            o.ZT)(e, t),
            e.prototype.dispose = function() {}
            ,
            e.prototype.setCursor = function() {}
            ,
            e
        }(u.Z)
          , _ = function(t, e) {
            this.x = t,
            this.y = e
        }
          , m = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"]
          , x = new d.Z(0,0,0,0)
          , w = function(t) {
            function e(e, r, n, i, o) {
                var a = t.call(this) || this;
                return a._hovered = new _(0,0),
                a.storage = e,
                a.painter = r,
                a.painterRoot = i,
                a._pointerSize = o,
                n = n || new g,
                a.proxy = null,
                a.setHandlerProxy(n),
                a._draggingMgr = new h(a),
                a
            }
            return (0,
            o.ZT)(e, t),
            e.prototype.setHandlerProxy = function(t) {
                this.proxy && this.proxy.dispose(),
                t && (i.each(m, (function(e) {
                    t.on && t.on(e, this[e], this)
                }
                ), this),
                t.handler = this),
                this.proxy = t
            }
            ,
            e.prototype.mousemove = function(t) {
                var e = t.zrX
                  , r = t.zrY
                  , n = S(this, e, r)
                  , i = this._hovered
                  , o = i.target;
                o && !o.__zr && (o = (i = this.findHover(i.x, i.y)).target);
                var a = this._hovered = n ? new _(e,r) : this.findHover(e, r)
                  , s = a.target
                  , h = this.proxy;
                h.setCursor && h.setCursor(s ? s.cursor : "default"),
                o && s !== o && this.dispatchToElement(i, "mouseout", t),
                this.dispatchToElement(a, "mousemove", t),
                s && s !== o && this.dispatchToElement(a, "mouseover", t)
            }
            ,
            e.prototype.mouseout = function(t) {
                var e = t.zrEventControl;
                "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t),
                "no_globalout" !== e && this.trigger("globalout", {
                    type: "globalout",
                    event: t
                })
            }
            ,
            e.prototype.resize = function() {
                this._hovered = new _(0,0)
            }
            ,
            e.prototype.dispatch = function(t, e) {
                var r = this[t];
                r && r.call(this, e)
            }
            ,
            e.prototype.dispose = function() {
                this.proxy.dispose(),
                this.storage = null,
                this.proxy = null,
                this.painter = null
            }
            ,
            e.prototype.setCursorStyle = function(t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            }
            ,
            e.prototype.dispatchToElement = function(t, e, r) {
                var n = (t = t || {}).target;
                if (!n || !n.silent) {
                    for (var i = "on" + e, o = function(t, e, r) {
                        return {
                            type: t,
                            event: r,
                            target: e.target,
                            topTarget: e.topTarget,
                            cancelBubble: !1,
                            offsetX: r.zrX,
                            offsetY: r.zrY,
                            gestureEvent: r.gestureEvent,
                            pinchX: r.pinchX,
                            pinchY: r.pinchY,
                            pinchScale: r.pinchScale,
                            wheelDelta: r.zrDelta,
                            zrByTouch: r.zrByTouch,
                            which: r.which,
                            stop: v
                        }
                    }(e, t, r); n && (n[i] && (o.cancelBubble = !!n[i].call(n, o)),
                    n.trigger(e, o),
                    n = n.__hostTarget ? n.__hostTarget : n.parent,
                    !o.cancelBubble); )
                        ;
                    o.cancelBubble || (this.trigger(e, o),
                    this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer((function(t) {
                        "function" === typeof t[i] && t[i].call(t, o),
                        t.trigger && t.trigger(e, o)
                    }
                    )))
                }
            }
            ,
            e.prototype.findHover = function(t, e, r) {
                var n = this.storage.getDisplayList()
                  , i = new _(t,e);
                if (k(n, i, t, e, r),
                this._pointerSize && !i.target) {
                    for (var o = [], a = this._pointerSize, s = a / 2, h = new d.Z(t - s,e - s,a,a), u = n.length - 1; u >= 0; u--) {
                        var l = n[u];
                        l === r || l.ignore || l.ignoreCoarsePointer || l.parent && l.parent.ignoreCoarsePointer || (x.copy(l.getBoundingRect()),
                        l.transform && x.applyTransform(l.transform),
                        x.intersect(h) && o.push(l))
                    }
                    if (o.length)
                        for (var c = Math.PI / 12, f = 2 * Math.PI, p = 0; p < s; p += 4)
                            for (var y = 0; y < f; y += c) {
                                if (k(o, i, t + p * Math.cos(y), e + p * Math.sin(y), r),
                                i.target)
                                    return i
                            }
                }
                return i
            }
            ,
            e.prototype.processGesture = function(t, e) {
                this._gestureMgr || (this._gestureMgr = new c);
                var r = this._gestureMgr;
                "start" === e && r.clear();
                var n = r.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
                if ("end" === e && r.clear(),
                n) {
                    var i = n.type;
                    t.gestureEvent = i;
                    var o = new _;
                    o.target = n.target,
                    this.dispatchToElement(o, i, n.event)
                }
            }
            ,
            e
        }(u.Z);
        function b(t, e, r) {
            if (t[t.rectHover ? "rectContain" : "contain"](e, r)) {
                for (var n = t, i = void 0, o = !1; n; ) {
                    if (n.ignoreClip && (o = !0),
                    !o) {
                        var a = n.getClipPath();
                        if (a && !a.contain(e, r))
                            return !1;
                        n.silent && (i = !0)
                    }
                    var s = n.__hostTarget;
                    n = s || n.parent
                }
                return !i || y
            }
            return !1
        }
        function k(t, e, r, n, i) {
            for (var o = t.length - 1; o >= 0; o--) {
                var a = t[o]
                  , s = void 0;
                if (a !== i && !a.ignore && (s = b(a, r, n)) && (!e.topTarget && (e.topTarget = a),
                s !== y)) {
                    e.target = a;
                    break
                }
            }
        }
        function S(t, e, r) {
            var n = t.painter;
            return e < 0 || e > n.getWidth() || r < 0 || r > n.getHeight()
        }
        i.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], (function(t) {
            w.prototype[t] = function(e) {
                var r, n, i = e.zrX, o = e.zrY, s = S(this, i, o);
                if ("mouseup" === t && s || (n = (r = this.findHover(i, o)).target),
                "mousedown" === t)
                    this._downEl = n,
                    this._downPoint = [e.zrX, e.zrY],
                    this._upEl = n;
                else if ("mouseup" === t)
                    this._upEl = n;
                else if ("click" === t) {
                    if (this._downEl !== this._upEl || !this._downPoint || a.dist(this._downPoint, [e.zrX, e.zrY]) > 4)
                        return;
                    this._downPoint = null
                }
                this.dispatchToElement(r, t, e)
            }
        }
        ));
        var T = w
          , C = r(17028)
          , P = r(20064)
          , M = !1;
        function Z() {
            M || (M = !0,
            console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))
        }
        function A(t, e) {
            return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
        }
        var L = function() {
            function t() {
                this._roots = [],
                this._displayList = [],
                this._displayListLen = 0,
                this.displayableSortFunc = A
            }
            return t.prototype.traverse = function(t, e) {
                for (var r = 0; r < this._roots.length; r++)
                    this._roots[r].traverse(t, e)
            }
            ,
            t.prototype.getDisplayList = function(t, e) {
                e = e || !1;
                var r = this._displayList;
                return !t && r.length || this.updateDisplayList(e),
                r
            }
            ,
            t.prototype.updateDisplayList = function(t) {
                this._displayListLen = 0;
                for (var e = this._roots, r = this._displayList, n = 0, i = e.length; n < i; n++)
                    this._updateAndAddDisplayable(e[n], null, t);
                r.length = this._displayListLen,
                (0,
                C.Z)(r, A)
            }
            ,
            t.prototype._updateAndAddDisplayable = function(t, e, r) {
                if (!t.ignore || r) {
                    t.beforeUpdate(),
                    t.update(),
                    t.afterUpdate();
                    var n = t.getClipPath();
                    if (t.ignoreClip)
                        e = null;
                    else if (n) {
                        e = e ? e.slice() : [];
                        for (var i = n, o = t; i; )
                            i.parent = o,
                            i.updateTransform(),
                            e.push(i),
                            o = i,
                            i = i.getClipPath()
                    }
                    if (t.childrenRef) {
                        for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
                            var h = a[s];
                            t.__dirty && (h.__dirty |= P.YV),
                            this._updateAndAddDisplayable(h, e, r)
                        }
                        t.__dirty = 0
                    } else {
                        var u = t;
                        e && e.length ? u.__clipPaths = e : u.__clipPaths && u.__clipPaths.length > 0 && (u.__clipPaths = []),
                        isNaN(u.z) && (Z(),
                        u.z = 0),
                        isNaN(u.z2) && (Z(),
                        u.z2 = 0),
                        isNaN(u.zlevel) && (Z(),
                        u.zlevel = 0),
                        this._displayList[this._displayListLen++] = u
                    }
                    var l = t.getDecalElement && t.getDecalElement();
                    l && this._updateAndAddDisplayable(l, e, r);
                    var c = t.getTextGuideLine();
                    c && this._updateAndAddDisplayable(c, e, r);
                    var f = t.getTextContent();
                    f && this._updateAndAddDisplayable(f, e, r)
                }
            }
            ,
            t.prototype.addRoot = function(t) {
                t.__zr && t.__zr.storage === this || this._roots.push(t)
            }
            ,
            t.prototype.delRoot = function(t) {
                if (t instanceof Array)
                    for (var e = 0, r = t.length; e < r; e++)
                        this.delRoot(t[e]);
                else {
                    var n = i.indexOf(this._roots, t);
                    n >= 0 && this._roots.splice(n, 1)
                }
            }
            ,
            t.prototype.delAllRoots = function() {
                this._roots = [],
                this._displayList = [],
                this._displayListLen = 0
            }
            ,
            t.prototype.getRoots = function() {
                return this._roots
            }
            ,
            t.prototype.dispose = function() {
                this._displayList = null,
                this._roots = null
            }
            ,
            t
        }()
          , D = r(42102)
          , O = r(25073);
        function z() {
            return (new Date).getTime()
        }
        var R = function(t) {
            function e(e) {
                var r = t.call(this) || this;
                return r._running = !1,
                r._time = 0,
                r._pausedTime = 0,
                r._pauseStart = 0,
                r._paused = !1,
                e = e || {},
                r.stage = e.stage || {},
                r
            }
            return (0,
            o.ZT)(e, t),
            e.prototype.addClip = function(t) {
                t.animation && this.removeClip(t),
                this._head ? (this._tail.next = t,
                t.prev = this._tail,
                t.next = null,
                this._tail = t) : this._head = this._tail = t,
                t.animation = this
            }
            ,
            e.prototype.addAnimator = function(t) {
                t.animation = this;
                var e = t.getClip();
                e && this.addClip(e)
            }
            ,
            e.prototype.removeClip = function(t) {
                if (t.animation) {
                    var e = t.prev
                      , r = t.next;
                    e ? e.next = r : this._head = r,
                    r ? r.prev = e : this._tail = e,
                    t.next = t.prev = t.animation = null
                }
            }
            ,
            e.prototype.removeAnimator = function(t) {
                var e = t.getClip();
                e && this.removeClip(e),
                t.animation = null
            }
            ,
            e.prototype.update = function(t) {
                for (var e = z() - this._pausedTime, r = e - this._time, n = this._head; n; ) {
                    var i = n.next;
                    n.step(e, r) ? (n.ondestroy(),
                    this.removeClip(n),
                    n = i) : n = i
                }
                this._time = e,
                t || (this.trigger("frame", r),
                this.stage.update && this.stage.update())
            }
            ,
            e.prototype._startLoop = function() {
                var t = this;
                this._running = !0,
                (0,
                D.Z)((function e() {
                    t._running && ((0,
                    D.Z)(e),
                    !t._paused && t.update())
                }
                ))
            }
            ,
            e.prototype.start = function() {
                this._running || (this._time = z(),
                this._pausedTime = 0,
                this._startLoop())
            }
            ,
            e.prototype.stop = function() {
                this._running = !1
            }
            ,
            e.prototype.pause = function() {
                this._paused || (this._pauseStart = z(),
                this._paused = !0)
            }
            ,
            e.prototype.resume = function() {
                this._paused && (this._pausedTime += z() - this._pauseStart,
                this._paused = !1)
            }
            ,
            e.prototype.clear = function() {
                for (var t = this._head; t; ) {
                    var e = t.next;
                    t.prev = t.next = t.animation = null,
                    t = e
                }
                this._head = this._tail = null
            }
            ,
            e.prototype.isFinished = function() {
                return null == this._head
            }
            ,
            e.prototype.animate = function(t, e) {
                e = e || {},
                this.start();
                var r = new O.Z(t,e.loop);
                return this.addAnimator(r),
                r
            }
            ,
            e
        }(u.Z)
          , I = n.Z.domSupported
          , F = function() {
            var t = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"]
              , e = {
                pointerdown: 1,
                pointerup: 1,
                pointermove: 1,
                pointerout: 1
            };
            return {
                mouse: t,
                touch: ["touchstart", "touchend", "touchmove"],
                pointer: i.map(t, (function(t) {
                    var r = t.replace("mouse", "pointer");
                    return e.hasOwnProperty(r) ? r : t
                }
                ))
            }
        }()
          , B = ["mousemove", "mouseup"]
          , H = ["pointermove", "pointerup"]
          , E = !1;
        function W(t) {
            var e = t.pointerType;
            return "pen" === e || "touch" === e
        }
        function N(t) {
            t && (t.zrByTouch = !0)
        }
        function q(t, e) {
            for (var r = e, n = !1; r && 9 !== r.nodeType && !(n = r.domBelongToZr || r !== e && r === t.painterRoot); )
                r = r.parentNode;
            return n
        }
        var Y = function(t, e) {
            this.stopPropagation = i.noop,
            this.stopImmediatePropagation = i.noop,
            this.preventDefault = i.noop,
            this.type = e.type,
            this.target = this.currentTarget = t.dom,
            this.pointerType = e.pointerType,
            this.clientX = e.clientX,
            this.clientY = e.clientY
        }
          , X = {
            mousedown: function(t) {
                t = (0,
                l.OD)(this.dom, t),
                this.__mayPointerCapture = [t.zrX, t.zrY],
                this.trigger("mousedown", t)
            },
            mousemove: function(t) {
                t = (0,
                l.OD)(this.dom, t);
                var e = this.__mayPointerCapture;
                !e || t.zrX === e[0] && t.zrY === e[1] || this.__togglePointerCapture(!0),
                this.trigger("mousemove", t)
            },
            mouseup: function(t) {
                t = (0,
                l.OD)(this.dom, t),
                this.__togglePointerCapture(!1),
                this.trigger("mouseup", t)
            },
            mouseout: function(t) {
                q(this, (t = (0,
                l.OD)(this.dom, t)).toElement || t.relatedTarget) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"),
                this.trigger("mouseout", t))
            },
            wheel: function(t) {
                E = !0,
                t = (0,
                l.OD)(this.dom, t),
                this.trigger("mousewheel", t)
            },
            mousewheel: function(t) {
                E || (t = (0,
                l.OD)(this.dom, t),
                this.trigger("mousewheel", t))
            },
            touchstart: function(t) {
                N(t = (0,
                l.OD)(this.dom, t)),
                this.__lastTouchMoment = new Date,
                this.handler.processGesture(t, "start"),
                X.mousemove.call(this, t),
                X.mousedown.call(this, t)
            },
            touchmove: function(t) {
                N(t = (0,
                l.OD)(this.dom, t)),
                this.handler.processGesture(t, "change"),
                X.mousemove.call(this, t)
            },
            touchend: function(t) {
                N(t = (0,
                l.OD)(this.dom, t)),
                this.handler.processGesture(t, "end"),
                X.mouseup.call(this, t),
                +new Date - +this.__lastTouchMoment < 300 && X.click.call(this, t)
            },
            pointerdown: function(t) {
                X.mousedown.call(this, t)
            },
            pointermove: function(t) {
                W(t) || X.mousemove.call(this, t)
            },
            pointerup: function(t) {
                X.mouseup.call(this, t)
            },
            pointerout: function(t) {
                W(t) || X.mouseout.call(this, t)
            }
        };
        i.each(["click", "dblclick", "contextmenu"], (function(t) {
            X[t] = function(e) {
                e = (0,
                l.OD)(this.dom, e),
                this.trigger(t, e)
            }
        }
        ));
        var j = {
            pointermove: function(t) {
                W(t) || j.mousemove.call(this, t)
            },
            pointerup: function(t) {
                j.mouseup.call(this, t)
            },
            mousemove: function(t) {
                this.trigger("mousemove", t)
            },
            mouseup: function(t) {
                var e = this.__pointerCapturing;
                this.__togglePointerCapture(!1),
                this.trigger("mouseup", t),
                e && (t.zrEventControl = "only_globalout",
                this.trigger("mouseout", t))
            }
        };
        function V(t, e) {
            var r = e.domHandlers;
            n.Z.pointerEventsSupported ? i.each(F.pointer, (function(n) {
                U(e, n, (function(e) {
                    r[n].call(t, e)
                }
                ))
            }
            )) : (n.Z.touchEventsSupported && i.each(F.touch, (function(n) {
                U(e, n, (function(i) {
                    r[n].call(t, i),
                    function(t) {
                        t.touching = !0,
                        null != t.touchTimer && (clearTimeout(t.touchTimer),
                        t.touchTimer = null),
                        t.touchTimer = setTimeout((function() {
                            t.touching = !1,
                            t.touchTimer = null
                        }
                        ), 700)
                    }(e)
                }
                ))
            }
            )),
            i.each(F.mouse, (function(n) {
                U(e, n, (function(i) {
                    i = (0,
                    l.iP)(i),
                    e.touching || r[n].call(t, i)
                }
                ))
            }
            )))
        }
        function G(t, e) {
            function r(r) {
                U(e, r, (function(n) {
                    n = (0,
                    l.iP)(n),
                    q(t, n.target) || (n = function(t, e) {
                        return (0,
                        l.OD)(t.dom, new Y(t,e), !0)
                    }(t, n),
                    e.domHandlers[r].call(t, n))
                }
                ), {
                    capture: !0
                })
            }
            n.Z.pointerEventsSupported ? i.each(H, r) : n.Z.touchEventsSupported || i.each(B, r)
        }
        function U(t, e, r, n) {
            t.mounted[e] = r,
            t.listenerOpts[e] = n,
            (0,
            l.Oo)(t.domTarget, e, r, n)
        }
        function K(t) {
            var e = t.mounted;
            for (var r in e)
                e.hasOwnProperty(r) && (0,
                l.xg)(t.domTarget, r, e[r], t.listenerOpts[r]);
            t.mounted = {}
        }
        var Q = function(t, e) {
            this.mounted = {},
            this.listenerOpts = {},
            this.touching = !1,
            this.domTarget = t,
            this.domHandlers = e
        }
          , $ = function(t) {
            function e(e, r) {
                var n = t.call(this) || this;
                return n.__pointerCapturing = !1,
                n.dom = e,
                n.painterRoot = r,
                n._localHandlerScope = new Q(e,X),
                I && (n._globalHandlerScope = new Q(document,j)),
                V(n, n._localHandlerScope),
                n
            }
            return (0,
            o.ZT)(e, t),
            e.prototype.dispose = function() {
                K(this._localHandlerScope),
                I && K(this._globalHandlerScope)
            }
            ,
            e.prototype.setCursor = function(t) {
                this.dom.style && (this.dom.style.cursor = t || "default")
            }
            ,
            e.prototype.__togglePointerCapture = function(t) {
                if (this.__mayPointerCapture = null,
                I && +this.__pointerCapturing ^ +t) {
                    this.__pointerCapturing = t;
                    var e = this._globalHandlerScope;
                    t ? G(this, e) : K(e)
                }
            }
            ,
            e
        }(u.Z)
          , J = r(4490)
          , tt = r(83169)
          , et = r(70077)
          , rt = {}
          , nt = {};
        var it = function() {
            function t(t, e, r) {
                var o = this;
                this._sleepAfterStill = 10,
                this._stillFrameAccum = 0,
                this._needsRefresh = !0,
                this._needsRefreshHover = !0,
                this._darkMode = !1,
                r = r || {},
                this.dom = e,
                this.id = t;
                var a = new L
                  , s = r.renderer || "canvas";
                rt[s] || (s = i.keys(rt)[0]),
                r.useDirtyRect = null != r.useDirtyRect && r.useDirtyRect;
                var h = new rt[s](e,a,r,t)
                  , u = r.ssr || h.ssrOnly;
                this.storage = a,
                this.painter = h;
                var l, c = n.Z.node || n.Z.worker || u ? null : new $(h.getViewportRoot(),h.root), f = r.useCoarsePointer;
                (null == f || "auto" === f ? n.Z.touchEventsSupported : !!f) && (l = i.retrieve2(r.pointerSize, 44)),
                this.handler = new T(a,h,c,h.root,l),
                this.animation = new R({
                    stage: {
                        update: u ? null : function() {
                            return o._flush(!0)
                        }
                    }
                }),
                u || this.animation.start()
            }
            return t.prototype.add = function(t) {
                t && (this.storage.addRoot(t),
                t.addSelfToZr(this),
                this.refresh())
            }
            ,
            t.prototype.remove = function(t) {
                t && (this.storage.delRoot(t),
                t.removeSelfFromZr(this),
                this.refresh())
            }
            ,
            t.prototype.configLayer = function(t, e) {
                this.painter.configLayer && this.painter.configLayer(t, e),
                this.refresh()
            }
            ,
            t.prototype.setBackgroundColor = function(t) {
                this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
                this.refresh(),
                this._backgroundColor = t,
                this._darkMode = function(t) {
                    if (!t)
                        return !1;
                    if ("string" === typeof t)
                        return (0,
                        J.lum)(t, 1) < tt.Ak;
                    if (t.colorStops) {
                        for (var e = t.colorStops, r = 0, n = e.length, i = 0; i < n; i++)
                            r += (0,
                            J.lum)(e[i].color, 1);
                        return (r /= n) < tt.Ak
                    }
                    return !1
                }(t)
            }
            ,
            t.prototype.getBackgroundColor = function() {
                return this._backgroundColor
            }
            ,
            t.prototype.setDarkMode = function(t) {
                this._darkMode = t
            }
            ,
            t.prototype.isDarkMode = function() {
                return this._darkMode
            }
            ,
            t.prototype.refreshImmediately = function(t) {
                t || this.animation.update(!0),
                this._needsRefresh = !1,
                this.painter.refresh(),
                this._needsRefresh = !1
            }
            ,
            t.prototype.refresh = function() {
                this._needsRefresh = !0,
                this.animation.start()
            }
            ,
            t.prototype.flush = function() {
                this._flush(!1)
            }
            ,
            t.prototype._flush = function(t) {
                var e, r = z();
                this._needsRefresh && (e = !0,
                this.refreshImmediately(t)),
                this._needsRefreshHover && (e = !0,
                this.refreshHoverImmediately());
                var n = z();
                e ? (this._stillFrameAccum = 0,
                this.trigger("rendered", {
                    elapsedTime: n - r
                })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++,
                this._stillFrameAccum > this._sleepAfterStill && this.animation.stop())
            }
            ,
            t.prototype.setSleepAfterStill = function(t) {
                this._sleepAfterStill = t
            }
            ,
            t.prototype.wakeUp = function() {
                this.animation.start(),
                this._stillFrameAccum = 0
            }
            ,
            t.prototype.refreshHover = function() {
                this._needsRefreshHover = !0
            }
            ,
            t.prototype.refreshHoverImmediately = function() {
                this._needsRefreshHover = !1,
                this.painter.refreshHover && "canvas" === this.painter.getType() && this.painter.refreshHover()
            }
            ,
            t.prototype.resize = function(t) {
                t = t || {},
                this.painter.resize(t.width, t.height),
                this.handler.resize()
            }
            ,
            t.prototype.clearAnimation = function() {
                this.animation.clear()
            }
            ,
            t.prototype.getWidth = function() {
                return this.painter.getWidth()
            }
            ,
            t.prototype.getHeight = function() {
                return this.painter.getHeight()
            }
            ,
            t.prototype.setCursorStyle = function(t) {
                this.handler.setCursorStyle(t)
            }
            ,
            t.prototype.findHover = function(t, e) {
                return this.handler.findHover(t, e)
            }
            ,
            t.prototype.on = function(t, e, r) {
                return this.handler.on(t, e, r),
                this
            }
            ,
            t.prototype.off = function(t, e) {
                this.handler.off(t, e)
            }
            ,
            t.prototype.trigger = function(t, e) {
                this.handler.trigger(t, e)
            }
            ,
            t.prototype.clear = function() {
                for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
                    t[e]instanceof et.Z && t[e].removeSelfFromZr(this);
                this.storage.delAllRoots(),
                this.painter.clear()
            }
            ,
            t.prototype.dispose = function() {
                var t;
                this.animation.stop(),
                this.clear(),
                this.storage.dispose(),
                this.painter.dispose(),
                this.handler.dispose(),
                this.animation = this.storage = this.painter = this.handler = null,
                t = this.id,
                delete nt[t]
            }
            ,
            t
        }();
        function ot(t, e) {
            var r = new it(i.guid(),t,e);
            return nt[r.id] = r,
            r
        }
        function at(t) {
            t.dispose()
        }
        function st() {
            for (var t in nt)
                nt.hasOwnProperty(t) && nt[t].dispose();
            nt = {}
        }
        function ht(t) {
            return nt[t]
        }
        function ut(t, e) {
            rt[t] = e
        }
        var lt = "5.4.3"
    },
    51126: function(t, e, r) {
        r.d(e, {
            ZT: function() {
                return i
            }
        });
        var n = function(t, e) {
            return n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            ,
            n(t, e)
        };
        function i(t, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function r() {
                this.constructor = t
            }
            n(t, e),
            t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
            new r)
        }
        Object.create;
        Object.create
    }
}]);
