!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("vue")) : "function" == typeof define && define.amd ? define("VMdEditor", ["vue"], e) : "object" == typeof exports ? exports.VMdEditor = e(require("vue")) : t.VMdEditor = e(t.Vue)
}("undefined" != typeof self ? self : this, (function (t) {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }

        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
                return t[e]
            }.bind(null, i));
            return r
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 114)
    }([function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return r
        })), n.d(e, "b", (function () {
            return i
        })), n.d(e, "c", (function () {
            return o
        })), n.d(e, "d", (function () {
            return a
        })), n.d(e, "e", (function () {
            return s
        })), n.d(e, "f", (function () {
            return c
        })), n.d(e, "g", (function () {
            return l
        })), n.d(e, "h", (function () {
            return u
        })), n.d(e, "i", (function () {
            return d
        })), n.d(e, "j", (function () {
            return f
        })), n.d(e, "k", (function () {
            return h
        })), n.d(e, "l", (function () {
            return m
        })), n.d(e, "m", (function () {
            return p
        })), n.d(e, "n", (function () {
            return v
        })), n.d(e, "o", (function () {
            return g
        })), n.d(e, "p", (function () {
            return b
        })), n.d(e, "q", (function () {
            return w
        })), n.d(e, "r", (function () {
            return y
        })), n.d(e, "s", (function () {
            return _
        })), n.d(e, "t", (function () {
            return x
        })), n.d(e, "u", (function () {
            return C
        })), n.d(e, "v", (function () {
            return k
        }));
        var r = "bold", i = "clear", o = "code", a = "fullscreen", s = "h1", c = "h2", l = "h3", u = "h4", d = "h5",
            f = "h6", h = "hr", m = "image", p = "italic", v = "link", g = "ol", b = "quote", w = "redo",
            y = "strikethrough", _ = "sync-scroll", x = "table", C = "ul", k = "undo"
    }, function (t, e, n) {
        "use strict";
        n.d(e, "d", (function () {
            return i
        })), n.d(e, "a", (function () {
            return a
        })), n.d(e, "c", (function () {
            return s
        })), n.d(e, "b", (function () {
            return c
        }));
        var r = Object.prototype.toString, i = function (t) {
            return "[object Object]" === r.call(t)
        };

        function o(t, e) {
            return Object.keys(e).forEach((function (n) {
                t[n] = e[n]
            })), t
        }

        function a(t) {
            for (var e = {}, n = 0; n < t.length; n++) t[n] && o(e, t[n]);
            return e
        }

        function s(t, e) {
            e.keys().forEach((function (n) {
                t[n] = e(n)
            }))
        }

        function c(t) {
            var e, n, r = t.selected, i = t.InsertGetter, o = t.selectedGetter, a = void 0 === o ? function (t) {
                return t
            } : o, s = t.ignoreEmptyLine, c = void 0 === s || s;
            return r ? (n = a(r), e = i(r, 1), -1 !== r.indexOf("\n") && (n = e = r.split("\n").map((function (t, e) {
                return c && !t ? "" : i(t, e + 1).replace(a(null), "")
            })).join("\n"))) : (e = i(null, 1), n = a(r)), {insertContent: e, newSelected: n}
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e, n, r, i, o, a, s) {
            var c, l = "function" == typeof t ? t.options : t;
            if (e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), o && (l._scopeId = "data-v-" + o), a ? (c = function (t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
            }, l._ssrRegister = c) : i && (c = s ? function () {
                i.call(this, this.$root.$options.shadowRoot)
            } : i), c) if (l.functional) {
                l._injectStyles = c;
                var u = l.render;
                l.render = function (t, e) {
                    return c.call(e), u(t, e)
                }
            } else {
                var d = l.beforeCreate;
                l.beforeCreate = d ? [].concat(d, c) : [c]
            }
            return {exports: t, options: l}
        }

        n.d(e, "a", (function () {
            return r
        }))
    }, function (t, e, n) {
        "use strict";
        e.a = {PREVIEW: "preview", EDITABLE: "editable", EDIT: "edit"}
    }, function (t, e, n) {
        "use strict";

        function r() {
            return (r = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }).apply(this, arguments)
        }

        n.d(e, "a", (function () {
            return r
        }))
    }, function (t, e, n) {
        "use strict";
        n.d(e, "c", (function () {
            return r
        })), n.d(e, "b", (function () {
            return i
        })), n.d(e, "a", (function () {
            return o
        }));
        var r = "data-v-md-line", i = "data-v-md-heading", o = "data-v-md-anchor"
    }, function (t, e, n) {
        "use strict";
        var r = n(4), i = n(14), o = n.n(i), a = {
                svg: [],
                altGlyph: [],
                altGlyphDef: [],
                altGlyphItem: [],
                animate: [],
                animateColor: [],
                animateMotion: [],
                animateTransform: [],
                circle: [],
                clipPath: [],
                "color-profile": [],
                cursor: [],
                "definition-src": [],
                defs: [],
                desc: [],
                ellipse: [],
                feBlend: [],
                feColorMatrix: [],
                feComponentTransfer: [],
                feComposite: [],
                feConvolveMatrix: [],
                feDiffuseLighting: [],
                feDisplacementMap: [],
                feDistantLight: [],
                feFlood: [],
                feFuncA: [],
                feFuncB: [],
                feFuncG: [],
                feFuncR: [],
                feGaussianBlur: [],
                feImage: [],
                feMerge: [],
                feMergeNode: [],
                feMorphology: [],
                feOffset: [],
                fePointLight: [],
                feSpecularLighting: [],
                feSpotLight: [],
                feTile: [],
                feTurbulence: [],
                filter: [],
                font: [],
                foreignObject: [],
                g: [],
                glyph: [],
                glyphRef: [],
                hkern: [],
                image: [],
                line: [],
                linearGradient: [],
                marker: [],
                mask: [],
                metadata: [],
                "missing-glyph": [],
                mpath: [],
                path: [],
                pattern: [],
                polygon: [],
                polyline: [],
                radialGradient: [],
                rect: [],
                set: [],
                stop: [],
                style: [],
                switch: [],
                symbol: [],
                text: [],
                textPath: [],
                title: [],
                tref: [],
                tspan: [],
                use: [],
                view: [],
                vkern: []
            }, s = {
                math: [],
                annotation: [],
                semantics: [],
                mtext: [],
                mn: [],
                mo: [],
                mi: [],
                mspace: [],
                mover: [],
                munder: [],
                munderover: [],
                msup: [],
                msub: [],
                msubsup: [],
                mfrac: [],
                mroot: [],
                msqrt: [],
                mtable: [],
                mtr: [],
                mtd: [],
                mlabeledtr: [],
                mrow: [],
                menclose: [],
                mstyle: [],
                mpadded: [],
                mphantom: [],
                mglyph: []
            }, c = ["style", "align", "class", "id"], l = ["data-"],
            u = Object(r.a)({}, {input: ["type"], ol: ["reversed", "start", "type"], button: ["type"]}, {}, s, {}, a),
            d = {
                whiteList: Object(r.a)({}, o.a.getDefaultWhiteList(), {}, u), onIgnoreTagAttr: function (t, e, n) {
                    if (a[t] || s[t] || c.find((function (t) {
                        return t === e
                    })) || l.find((function (t) {
                        return e.startsWith(t)
                    }))) return e + '="' + o.a.escapeAttrValue(n) + '"'
                }
            }, f = new o.a.FilterXSS(d);
        f.extend = function (t) {
            var e = f.options;
            Object.keys(t).forEach((function (n) {
                if ("whiteList" === n) Object.keys(t.whiteList).forEach((function (n) {
                    var r = t.whiteList[n], i = e.whiteList;
                    i[n] ? i[n] = [].concat(i[n], r) : i[n] = r
                })); else if ("onIgnoreTagAttr" === n) {
                    var r = e.onIgnoreTagAttr;
                    e.onIgnoreTagAttr = function () {
                        for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                        var a = r.call.apply(r, [this].concat(i)),
                            s = (e = t.onIgnoreTagAttr).call.apply(e, [this].concat(i));
                        return a || s
                    }
                } else e[n] = t[n]
            }))
        };
        e.a = f
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            var e = 0;
            return t === window ? e = t.pageYOffset : t && (e = t.scrollTop), e
        }

        function i(t, e) {
            t === window ? window.scrollTo(window.pageYOffset, e) : t && (t.scrollTop = e)
        }

        n.d(e, "a", (function () {
            return r
        })), n.d(e, "b", (function () {
            return i
        }))
    }, function (t, e, n) {
        "use strict";
        var r = n(13), i = n.n(r), o = n(1), a = Object.prototype.hasOwnProperty;

        function s(t, e) {
            return Object.keys(e).forEach((function (n) {
                !function (t, e, n) {
                    var r = e[n];
                    null != r && (a.call(t, n) && Object(o.d)(r) ? t[n] = s(Object(t[n]), e[n]) : t[n] = r)
                }(t, e, n)
            })), t
        }

        var c = i.a.prototype, l = i.a.util.defineReactive;
        l(c, "$vMdEditorLang", "zh-CN"), l(c, "$vMdEditorLangConfig", {"zh-CN": {}});
        e.a = {
            use: function (t, e) {
                var n;
                c.$vMdEditorLang = t, this.add(((n = {})[t] = e, n))
            }, add: function (t) {
                void 0 === t && (t = {}), s(c.$vMdEditorLangConfig, t)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "v-md-editor-preview",
                class: [t.themeConfig.previewClass],
                on: {click: t.handlePreviewClick}
            }, [n("div", {domProps: {innerHTML: t._s(t.html)}}), t.previewSrc ? n("v-md-image-preview", {
                attrs: {
                    src: t.previewSrc,
                    "on-close": t.handleClosePreview
                }
            }) : t._e()], 1)
        };
        r._withStripped = !0;
        var i = n(6), o = n(7), a = n(12), s = n(5), c = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("transition", {attrs: {name: "viewer-fade", appear: ""}}, [n("div", {
                ref: "v-md-viewer__wrapper",
                staticClass: "v-md-viewer__wrapper",
                style: {"z-index": t.zIndex},
                attrs: {tabindex: "-1"}
            }, [n("div", {
                staticClass: "v-md-viewer__mask",
                on: {click: t.hide}
            }), n("div", {staticClass: "v-md-viewer__btn v-md-viewer__actions"}, [n("div", {staticClass: "v-md-viewer__actions__inner"}, [n("i", {
                staticClass: "v-md-icon-zoom-out",
                on: {
                    click: function (e) {
                        return t.handleActions("zoomOut")
                    }
                }
            }), n("i", {
                staticClass: "v-md-icon-zoom-in", on: {
                    click: function (e) {
                        return t.handleActions("zoomIn")
                    }
                }
            }), n("i", {
                staticClass: "v-md-icon-refresh-left", on: {
                    click: function (e) {
                        return t.handleActions("anticlocelise")
                    }
                }
            }), n("i", {
                staticClass: "v-md-icon-refresh-right", on: {
                    click: function (e) {
                        return t.handleActions("clocelise")
                    }
                }
            })])]), n("div", {staticClass: "v-md-viewer__canvas"}, [n("img", {
                ref: "img",
                staticClass: "v-md-viewer__img",
                style: t.imgStyle,
                attrs: {src: t.src},
                on: {load: t.handleImgLoad, error: t.handleImgError, mousedown: t.handleMouseDown}
            })])])])
        };
        c._withStripped = !0;
        var l = n(4),
            u = void 0 !== window && window.navigator.userAgent.match(/firefox/i) ? "DOMMouseScroll" : "mousewheel",
            d = "", f = {
                name: "v-md-image-preview",
                props: {
                    src: String, zIndex: {type: Number, default: 2e3}, onClose: {
                        type: Function, default: function () {
                        }
                    }
                },
                data: function () {
                    return {
                        isShow: !1,
                        infinite: !0,
                        loading: !1,
                        transform: {scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: !1}
                    }
                },
                computed: {
                    imgStyle: function () {
                        var t = this.transform, e = t.scale, n = t.deg, r = t.offsetX, i = t.offsetY;
                        return {
                            transform: "scale(" + e + ") rotate(" + n + "deg)",
                            transition: t.enableTransition ? "transform .3s" : "",
                            "margin-left": r + "px",
                            "margin-top": i + "px",
                            maxWidth: "100%",
                            maxHeight: "100%"
                        }
                    }
                },
                mounted: function () {
                    this.deviceSupportInstall(), this.$refs["v-md-viewer__wrapper"].focus(), d = document.body.style.overflow, document.body.style.overflow = "hidden"
                },
                beforeDestroy: function () {
                    document.body.style.overflow = d
                },
                methods: {
                    hide: function () {
                        this.deviceSupportUninstall(), this.onClose()
                    }, deviceSupportInstall: function () {
                        var t = this;
                        this.keyDownHandler = function (e) {
                            switch (e.keyCode) {
                                case 38:
                                    t.handleActions("zoomIn");
                                    break;
                                case 40:
                                    t.handleActions("zoomOut")
                            }
                        }, this.mouseWheelHandler = function (e) {
                            (e.wheelDelta ? e.wheelDelta : -e.detail) > 0 ? t.handleActions("zoomIn", {
                                zoomRate: .015,
                                enableTransition: !1
                            }) : t.handleActions("zoomOut", {zoomRate: .015, enableTransition: !1})
                        }, document.addEventListener("keydown", this.keyDownHandler), document.addEventListener(u, this.mouseWheelHandler)
                    }, deviceSupportUninstall: function () {
                        document.removeEventListener("keydown", this.keyDownHandler), document.removeEventListener(u, this.mouseWheelHandler), this.keyDownHandler = null, this.mouseWheelHandler = null
                    }, handleImgLoad: function () {
                        this.loading = !1
                    }, handleImgError: function (t) {
                        this.loading = !1, t.target.alt = "加载失败"
                    }, handleMouseDown: function (t) {
                        var e = this;
                        if (!this.loading && 0 === t.button) {
                            var n = this.transform, r = n.offsetX, i = n.offsetY, o = t.pageX, a = t.pageY;
                            this.dragHandler = function (t) {
                                e.transform.offsetX = r + t.pageX - o, e.transform.offsetY = i + t.pageY - a
                            }, document.addEventListener("mousemove", this.dragHandler), document.addEventListener("mouseup", (function () {
                                document.removeEventListener("mousemove", e.dragHandler)
                            })), t.preventDefault()
                        }
                    }, reset: function () {
                        this.transform = {scale: 1, deg: 0, offsetX: 0, offsetY: 0, enableTransition: !1}
                    }, handleActions: function (t, e) {
                        if (void 0 === e && (e = {}), !this.loading) {
                            var n = Object(l.a)({zoomRate: .2, rotateDeg: 90, enableTransition: !0}, e), r = n.zoomRate,
                                i = n.rotateDeg, o = n.enableTransition, a = this.transform;
                            switch (t) {
                                case"zoomOut":
                                    a.scale > .2 && (a.scale = parseFloat((a.scale - r).toFixed(3)));
                                    break;
                                case"zoomIn":
                                    a.scale = parseFloat((a.scale + r).toFixed(3));
                                    break;
                                case"clocelise":
                                    a.deg += i;
                                    break;
                                case"anticlocelise":
                                    a.deg -= i
                            }
                            a.enableTransition = o
                        }
                    }
                }
            }, h = (n(37), n(2)), m = Object(h.a)(f, c, [], !1, null, null, null);
        m.options.__file = "src/components/image-preview.vue";
        var p, v = m.exports, g = n(17), b = function (t) {
            return t
        }, w = {
            name: "v-md-preview",
            mixins: [g.a],
            props: {
                text: {type: String, default: ""},
                theme: Object,
                scrollContainer: {
                    type: Function, default: function () {
                        return window
                    }
                },
                top: {type: Number, default: 0}
            },
            components: (p = {}, p[v.name] = v, p),
            data: function () {
                return {html: "", previewSrc: ""}
            },
            computed: {
                themeConfig: function () {
                    return w.themeConfig || {}
                }, markdownParser: function () {
                    return this.themeConfig.markdownParser
                }, markdownLoader: function () {
                    var t;
                    return (null == (t = this.markdownParser) ? void 0 : t.render.bind(this.markdownParser)) || b
                }
            },
            watch: {
                text: function () {
                    this.handleTextChange()
                }, langConfig: function () {
                    this.handleTextChange()
                }
            },
            created: function () {
                var t = this;
                (this.theme && w.use(this.theme), "function" != typeof this.markdownLoader || this.markdownLoader === b) ? console.warn("Please configure your markdown parser") : w.markdownExtenders.forEach((function (e) {
                    e(t.markdownParser, (function () {
                        return t.langConfig
                    }))
                }));
                this.handleTextChange()
            },
            methods: {
                handleClosePreview: function () {
                    this.previewSrc = ""
                }, handlePreviewClick: function (t) {
                    var e = t.target;
                    if ("IMG" !== e.tagName) {
                        var n = e.getAttribute(s.a), r = this.$el.querySelector("[" + s.b + '="' + n + '"]');
                        r && this.scrollToTarget({target: r, scrollContainer: this.scrollContainer(), top: this.top})
                    } else {
                        var i = e.getAttribute("src");
                        this.previewSrc = i
                    }
                }, getOffsetTop: function (t, e) {
                    var n = t.getBoundingClientRect();
                    return e === window || e === document.documentElement ? n.top : n.top - e.getBoundingClientRect().top
                }, scrollToTarget: function (t) {
                    var e = t.target, n = t.scrollContainer, r = void 0 === n ? this.scrollContainer() : n, i = t.top,
                        s = void 0 === i ? 0 : i, c = t.onScrollEnd, l = this.getOffsetTop(e, r),
                        u = Object(o.a)(r) + l - s;
                    Object(a.a)({scrollTarget: r, scrollToTop: u, onScrollEnd: c})
                }, scrollToLine: function (t) {
                    var e = t.lineIndex, n = t.onScrollEnd;
                    if (e) {
                        var r = this.$el.querySelector("[" + s.c + '="' + e + '"]');
                        r && this.scrollToTarget({target: r, onScrollEnd: n})
                    }
                }, handleTextChange: function () {
                    this.html = i.a.process(this.markdownLoader(this.text)), this.$emit("change", this.text, this.html)
                }
            },
            theme: function (t) {
                w.themeConfig = t
            },
            markdownExtenders: [],
            extendMarkdown: function (t) {
                w.markdownExtenders.push(t)
            }
        }, y = w, _ = (n(38), Object(h.a)(y, r, [], !1, null, null, null));
        _.options.__file = "src/preview.vue";
        var x = _.exports, C = n(8), k = (n(32), function (t) {
            t.component(x.name, x)
        });
        x.version = "1.5.3", x.install = k, x.xss = i.a, x.lang = C.a, x.use = function (t, e) {
            return "function" == typeof t ? t(x, e) : t.install(x, e), x
        }, "undefined" != typeof window && window.Vue && k(window.Vue);
        e.default = x
    }, function (t, e, n) {
    }, function (t, e, n) {
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", (function () {
            return i
        })), n.d(e, "a", (function () {
            return o
        }));
        var r = n(7);

        function i(t) {
            var e = t.currentScrollTop, n = t.scrollToTop, r = t.scrollFn, i = t.percent, o = void 0 === i ? 10 : i,
                a = t.onScrollEnd, s = n > e ? "down" : "up", c = o / 100 * (n - e);
            window.requestAnimationFrame((function t() {
                e += c, "down" === s && e >= n || "up" === s && e <= n ? (r(n), window.cancelAnimationFrame(void 0), a && window.requestAnimationFrame(a)) : (r(e), window.requestAnimationFrame(t))
            }))
        }

        function o(t) {
            var e = t.scrollTarget, n = t.scrollToTop, o = t.percent, a = void 0 === o ? 10 : o, s = t.onScrollEnd;
            i({
                currentScrollTop: Object(r.a)(e), scrollToTop: n, scrollFn: function (t) {
                    return Object(r.b)(e, t)
                }, percent: a, onScrollEnd: s
            })
        }
    }, function (e, n) {
        e.exports = t
    }, function (t, e, n) {
        var r = n(28), i = n(31), o = n(36);

        function a(t, e) {
            return new o(e).process(t)
        }

        for (var s in (e = t.exports = a).filterXSS = a, e.FilterXSS = o, r) e[s] = r[s];
        for (var s in i) e[s] = i[s];
        "undefined" != typeof window && (window.filterXSS = t.exports), "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = t.exports)
    }, function (t, e, n) {
        t.exports = n(74)
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            var n = e.accept;
            return Object.keys(t).filter((function (e) {
                var r = t[e], i = r.type, o = r.name, a = o.indexOf(".") > -1 ? "." + o.split(".").pop() : "",
                    s = i.replace(/\/.*$/, "");
                return n.split(",").map((function (t) {
                    return t.trim()
                })).filter((function (t) {
                    return t
                })).some((function (t) {
                    return /\..+$/.test(t) ? a === t : /\/\*$/.test(t) ? s === t.replace(/\/\*$/, "") : !!/^[^\/]+\/[^\/]+$/.test(t) && i === t
                }))
            })).map((function (e) {
                return t[e]
            }))
        }

        function i(t) {
            var e = [];
            return Object.keys(t.items).forEach((function (n) {
                var r = t.items[n];
                if ("file" === r.kind) {
                    var i = r.getAsFile();
                    i && e.push(i)
                }
            })), e
        }

        n.d(e, "a", (function () {
            return r
        })), n.d(e, "b", (function () {
            return i
        }))
    }, function (t, e, n) {
        "use strict";
        e.a = {
            computed: {
                langConfig: function () {
                    return this.$vMdEditorLangConfig[this.$vMdEditorLang]
                }
            }
        }
    }, function (t, e, n) {
        var r = n(29), i = n(34);
        for (var o in (e = t.exports = function (t, e) {
            return new i(e).process(t)
        }).FilterCSS = i, r) e[o] = r[o];
        "undefined" != typeof window && (window.filterCSS = t.exports)
    }, function (t, e) {
        t.exports = {
            indexOf: function (t, e) {
                var n, r;
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                return -1
            }, forEach: function (t, e, n) {
                var r, i;
                if (Array.prototype.forEach) return t.forEach(e, n);
                for (r = 0, i = t.length; r < i; r++) e.call(n, t[r], r, t)
            }, trim: function (t) {
                return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
            }, spaceIndex: function (t) {
                var e = /\s|\n|\t/.exec(t);
                return e ? e.index : -1
            }
        }
    }, function (t, e, n) {
    }, function (t, e, n) {
    }, function (t, e, n) {
    }, function (t, e, n) {
    }, function (t, e, n) {
    }, function (t, e, n) {
    }, function (t, e, n) {
    }, function (t, e, n) {
        "use strict";

        function r(t, e, n, r, i, o, a) {
            try {
                var s = t[o](a), c = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(r, i)
        }

        function i(t) {
            return function () {
                var e = this, n = arguments;
                return new Promise((function (i, o) {
                    var a = t.apply(e, n);

                    function s(t) {
                        r(a, i, o, s, c, "next", t)
                    }

                    function c(t) {
                        r(a, i, o, s, c, "throw", t)
                    }

                    s(void 0)
                }))
            }
        }

        n.d(e, "a", (function () {
            return i
        }))
    }, function (t, e, n) {
        var r = n(18).FilterCSS, i = n(18).getDefaultWhiteList, o = n(19);

        function a() {
            return {
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "loop", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
            }
        }

        var s = new r;

        function c(t) {
            return t.replace(l, "&lt;").replace(u, "&gt;")
        }

        var l = /</g, u = />/g, d = /"/g, f = /&quot;/g, h = /&#([a-zA-Z0-9]*);?/gim, m = /&colon;?/gim,
            p = /&newline;?/gim,
            v = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
            g = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, b = /u\s*r\s*l\s*\(.*/gi;

        function w(t) {
            return t.replace(d, "&quot;")
        }

        function y(t) {
            return t.replace(f, '"')
        }

        function _(t) {
            return t.replace(h, (function (t, e) {
                return "x" === e[0] || "X" === e[0] ? String.fromCharCode(parseInt(e.substr(1), 16)) : String.fromCharCode(parseInt(e, 10))
            }))
        }

        function x(t) {
            return t.replace(m, ":").replace(p, " ")
        }

        function C(t) {
            for (var e = "", n = 0, r = t.length; n < r; n++) e += t.charCodeAt(n) < 32 ? " " : t.charAt(n);
            return o.trim(e)
        }

        function k(t) {
            return t = C(t = x(t = _(t = y(t))))
        }

        function S(t) {
            return t = c(t = w(t))
        }

        var T = /<!--[\s\S]*?-->/g;
        e.whiteList = {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "loop", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
        }, e.getDefaultWhiteList = a, e.onTag = function (t, e, n) {
        }, e.onIgnoreTag = function (t, e, n) {
        }, e.onTagAttr = function (t, e, n) {
        }, e.onIgnoreTagAttr = function (t, e, n) {
        }, e.safeAttrValue = function (t, e, n, r) {
            if (n = k(n), "href" === e || "src" === e) {
                if ("#" === (n = o.trim(n))) return "#";
                if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "#" !== n[0] && "/" !== n[0]) return ""
            } else if ("background" === e) {
                if (v.lastIndex = 0, v.test(n)) return ""
            } else if ("style" === e) {
                if (g.lastIndex = 0, g.test(n)) return "";
                if (b.lastIndex = 0, b.test(n) && (v.lastIndex = 0, v.test(n))) return "";
                !1 !== r && (n = (r = r || s).process(n))
            }
            return n = S(n)
        }, e.escapeHtml = c, e.escapeQuote = w, e.unescapeQuote = y, e.escapeHtmlEntities = _, e.escapeDangerHtml5Entities = x, e.clearNonPrintableCharacter = C, e.friendlyAttrValue = k, e.escapeAttrValue = S, e.onIgnoreTagStripAll = function () {
            return ""
        }, e.StripTagBody = function (t, e) {
            "function" != typeof e && (e = function () {
            });
            var n = !Array.isArray(t), r = [], i = !1;
            return {
                onIgnoreTag: function (a, s, c) {
                    if (function (e) {
                        return !!n || -1 !== o.indexOf(t, e)
                    }(a)) {
                        if (c.isClosing) {
                            var l = "[/removed]", u = c.position + l.length;
                            return r.push([!1 !== i ? i : c.position, u]), i = !1, l
                        }
                        return i || (i = c.position), "[removed]"
                    }
                    return e(a, s, c)
                }, remove: function (t) {
                    var e = "", n = 0;
                    return o.forEach(r, (function (r) {
                        e += t.slice(n, r[0]), n = r[1]
                    })), e += t.slice(n)
                }
            }
        }, e.stripCommentTag = function (t) {
            return t.replace(T, "")
        }, e.stripBlankChar = function (t) {
            var e = t.split("");
            return (e = e.filter((function (t) {
                var e = t.charCodeAt(0);
                return 127 !== e && (!(e <= 31) || (10 === e || 13 === e))
            }))).join("")
        }, e.cssFilter = s, e.getDefaultCSSWhiteList = i
    }, function (t, e) {
        function n() {
            var t = {
                "align-content": !1,
                "align-items": !1,
                "align-self": !1,
                "alignment-adjust": !1,
                "alignment-baseline": !1,
                all: !1,
                "anchor-point": !1,
                animation: !1,
                "animation-delay": !1,
                "animation-direction": !1,
                "animation-duration": !1,
                "animation-fill-mode": !1,
                "animation-iteration-count": !1,
                "animation-name": !1,
                "animation-play-state": !1,
                "animation-timing-function": !1,
                azimuth: !1,
                "backface-visibility": !1,
                background: !0,
                "background-attachment": !0,
                "background-clip": !0,
                "background-color": !0,
                "background-image": !0,
                "background-origin": !0,
                "background-position": !0,
                "background-repeat": !0,
                "background-size": !0,
                "baseline-shift": !1,
                binding: !1,
                bleed: !1,
                "bookmark-label": !1,
                "bookmark-level": !1,
                "bookmark-state": !1,
                border: !0,
                "border-bottom": !0,
                "border-bottom-color": !0,
                "border-bottom-left-radius": !0,
                "border-bottom-right-radius": !0,
                "border-bottom-style": !0,
                "border-bottom-width": !0,
                "border-collapse": !0,
                "border-color": !0,
                "border-image": !0,
                "border-image-outset": !0,
                "border-image-repeat": !0,
                "border-image-slice": !0,
                "border-image-source": !0,
                "border-image-width": !0,
                "border-left": !0,
                "border-left-color": !0,
                "border-left-style": !0,
                "border-left-width": !0,
                "border-radius": !0,
                "border-right": !0,
                "border-right-color": !0,
                "border-right-style": !0,
                "border-right-width": !0,
                "border-spacing": !0,
                "border-style": !0,
                "border-top": !0,
                "border-top-color": !0,
                "border-top-left-radius": !0,
                "border-top-right-radius": !0,
                "border-top-style": !0,
                "border-top-width": !0,
                "border-width": !0,
                bottom: !1,
                "box-decoration-break": !0,
                "box-shadow": !0,
                "box-sizing": !0,
                "box-snap": !0,
                "box-suppress": !0,
                "break-after": !0,
                "break-before": !0,
                "break-inside": !0,
                "caption-side": !1,
                chains: !1,
                clear: !0,
                clip: !1,
                "clip-path": !1,
                "clip-rule": !1,
                color: !0,
                "color-interpolation-filters": !0,
                "column-count": !1,
                "column-fill": !1,
                "column-gap": !1,
                "column-rule": !1,
                "column-rule-color": !1,
                "column-rule-style": !1,
                "column-rule-width": !1,
                "column-span": !1,
                "column-width": !1,
                columns: !1,
                contain: !1,
                content: !1,
                "counter-increment": !1,
                "counter-reset": !1,
                "counter-set": !1,
                crop: !1,
                cue: !1,
                "cue-after": !1,
                "cue-before": !1,
                cursor: !1,
                direction: !1,
                display: !0,
                "display-inside": !0,
                "display-list": !0,
                "display-outside": !0,
                "dominant-baseline": !1,
                elevation: !1,
                "empty-cells": !1,
                filter: !1,
                flex: !1,
                "flex-basis": !1,
                "flex-direction": !1,
                "flex-flow": !1,
                "flex-grow": !1,
                "flex-shrink": !1,
                "flex-wrap": !1,
                float: !1,
                "float-offset": !1,
                "flood-color": !1,
                "flood-opacity": !1,
                "flow-from": !1,
                "flow-into": !1,
                font: !0,
                "font-family": !0,
                "font-feature-settings": !0,
                "font-kerning": !0,
                "font-language-override": !0,
                "font-size": !0,
                "font-size-adjust": !0,
                "font-stretch": !0,
                "font-style": !0,
                "font-synthesis": !0,
                "font-variant": !0,
                "font-variant-alternates": !0,
                "font-variant-caps": !0,
                "font-variant-east-asian": !0,
                "font-variant-ligatures": !0,
                "font-variant-numeric": !0,
                "font-variant-position": !0,
                "font-weight": !0,
                grid: !1,
                "grid-area": !1,
                "grid-auto-columns": !1,
                "grid-auto-flow": !1,
                "grid-auto-rows": !1,
                "grid-column": !1,
                "grid-column-end": !1,
                "grid-column-start": !1,
                "grid-row": !1,
                "grid-row-end": !1,
                "grid-row-start": !1,
                "grid-template": !1,
                "grid-template-areas": !1,
                "grid-template-columns": !1,
                "grid-template-rows": !1,
                "hanging-punctuation": !1,
                height: !0,
                hyphens: !1,
                icon: !1,
                "image-orientation": !1,
                "image-resolution": !1,
                "ime-mode": !1,
                "initial-letters": !1,
                "inline-box-align": !1,
                "justify-content": !1,
                "justify-items": !1,
                "justify-self": !1,
                left: !1,
                "letter-spacing": !0,
                "lighting-color": !0,
                "line-box-contain": !1,
                "line-break": !1,
                "line-grid": !1,
                "line-height": !1,
                "line-snap": !1,
                "line-stacking": !1,
                "line-stacking-ruby": !1,
                "line-stacking-shift": !1,
                "line-stacking-strategy": !1,
                "list-style": !0,
                "list-style-image": !0,
                "list-style-position": !0,
                "list-style-type": !0,
                margin: !0,
                "margin-bottom": !0,
                "margin-left": !0,
                "margin-right": !0,
                "margin-top": !0,
                "marker-offset": !1,
                "marker-side": !1,
                marks: !1,
                mask: !1,
                "mask-box": !1,
                "mask-box-outset": !1,
                "mask-box-repeat": !1,
                "mask-box-slice": !1,
                "mask-box-source": !1,
                "mask-box-width": !1,
                "mask-clip": !1,
                "mask-image": !1,
                "mask-origin": !1,
                "mask-position": !1,
                "mask-repeat": !1,
                "mask-size": !1,
                "mask-source-type": !1,
                "mask-type": !1,
                "max-height": !0,
                "max-lines": !1,
                "max-width": !0,
                "min-height": !0,
                "min-width": !0,
                "move-to": !1,
                "nav-down": !1,
                "nav-index": !1,
                "nav-left": !1,
                "nav-right": !1,
                "nav-up": !1,
                "object-fit": !1,
                "object-position": !1,
                opacity: !1,
                order: !1,
                orphans: !1,
                outline: !1,
                "outline-color": !1,
                "outline-offset": !1,
                "outline-style": !1,
                "outline-width": !1,
                overflow: !1,
                "overflow-wrap": !1,
                "overflow-x": !1,
                "overflow-y": !1,
                padding: !0,
                "padding-bottom": !0,
                "padding-left": !0,
                "padding-right": !0,
                "padding-top": !0,
                page: !1,
                "page-break-after": !1,
                "page-break-before": !1,
                "page-break-inside": !1,
                "page-policy": !1,
                pause: !1,
                "pause-after": !1,
                "pause-before": !1,
                perspective: !1,
                "perspective-origin": !1,
                pitch: !1,
                "pitch-range": !1,
                "play-during": !1,
                position: !1,
                "presentation-level": !1,
                quotes: !1,
                "region-fragment": !1,
                resize: !1,
                rest: !1,
                "rest-after": !1,
                "rest-before": !1,
                richness: !1,
                right: !1,
                rotation: !1,
                "rotation-point": !1,
                "ruby-align": !1,
                "ruby-merge": !1,
                "ruby-position": !1,
                "shape-image-threshold": !1,
                "shape-outside": !1,
                "shape-margin": !1,
                size: !1,
                speak: !1,
                "speak-as": !1,
                "speak-header": !1,
                "speak-numeral": !1,
                "speak-punctuation": !1,
                "speech-rate": !1,
                stress: !1,
                "string-set": !1,
                "tab-size": !1,
                "table-layout": !1,
                "text-align": !0,
                "text-align-last": !0,
                "text-combine-upright": !0,
                "text-decoration": !0,
                "text-decoration-color": !0,
                "text-decoration-line": !0,
                "text-decoration-skip": !0,
                "text-decoration-style": !0,
                "text-emphasis": !0,
                "text-emphasis-color": !0,
                "text-emphasis-position": !0,
                "text-emphasis-style": !0,
                "text-height": !0,
                "text-indent": !0,
                "text-justify": !0,
                "text-orientation": !0,
                "text-overflow": !0,
                "text-shadow": !0,
                "text-space-collapse": !0,
                "text-transform": !0,
                "text-underline-position": !0,
                "text-wrap": !0,
                top: !1,
                transform: !1,
                "transform-origin": !1,
                "transform-style": !1,
                transition: !1,
                "transition-delay": !1,
                "transition-duration": !1,
                "transition-property": !1,
                "transition-timing-function": !1,
                "unicode-bidi": !1,
                "vertical-align": !1,
                visibility: !1,
                "voice-balance": !1,
                "voice-duration": !1,
                "voice-family": !1,
                "voice-pitch": !1,
                "voice-range": !1,
                "voice-rate": !1,
                "voice-stress": !1,
                "voice-volume": !1,
                volume: !1,
                "white-space": !1,
                widows: !1,
                width: !0,
                "will-change": !1,
                "word-break": !0,
                "word-spacing": !0,
                "word-wrap": !0,
                "wrap-flow": !1,
                "wrap-through": !1,
                "writing-mode": !1,
                "z-index": !1
            };
            return t
        }

        var r = /javascript\s*\:/gim;
        e.whiteList = n(), e.getDefaultWhiteList = n, e.onAttr = function (t, e, n) {
        }, e.onIgnoreAttr = function (t, e, n) {
        }, e.safeAttrValue = function (t, e) {
            return r.test(e) ? "" : e
        }
    }, function (t, e) {
        t.exports = {
            indexOf: function (t, e) {
                var n, r;
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                return -1
            }, forEach: function (t, e, n) {
                var r, i;
                if (Array.prototype.forEach) return t.forEach(e, n);
                for (r = 0, i = t.length; r < i; r++) e.call(n, t[r], r, t)
            }, trim: function (t) {
                return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
            }, trimRight: function (t) {
                return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "")
            }
        }
    }, function (t, e, n) {
        var r = n(19);

        function i(t) {
            var e = r.spaceIndex(t);
            if (-1 === e) var n = t.slice(1, -1); else n = t.slice(1, e + 1);
            return "/" === (n = r.trim(n).toLowerCase()).slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n
        }

        function o(t) {
            return "</" === t.slice(0, 2)
        }

        var a = /[^a-zA-Z0-9_:\.\-]/gim;

        function s(t, e) {
            for (; e < t.length; e++) {
                var n = t[e];
                if (" " !== n) return "=" === n ? e : -1
            }
        }

        function c(t, e) {
            for (; e > 0; e--) {
                var n = t[e];
                if (" " !== n) return "=" === n ? e : -1
            }
        }

        function l(t) {
            return function (t) {
                return '"' === t[0] && '"' === t[t.length - 1] || "'" === t[0] && "'" === t[t.length - 1]
            }(t) ? t.substr(1, t.length - 2) : t
        }

        e.parseTag = function (t, e, n) {
            var r = "", a = 0, s = !1, c = !1, l = 0, u = t.length, d = "", f = "";
            for (l = 0; l < u; l++) {
                var h = t.charAt(l);
                if (!1 === s) {
                    if ("<" === h) {
                        s = l;
                        continue
                    }
                } else if (!1 === c) {
                    if ("<" === h) {
                        r += n(t.slice(a, l)), s = l, a = l;
                        continue
                    }
                    if (">" === h) {
                        r += n(t.slice(a, s)), d = i(f = t.slice(s, l + 1)), r += e(s, r.length, d, f, o(f)), a = l + 1, s = !1;
                        continue
                    }
                    if (('"' === h || "'" === h) && "=" === t.charAt(l - 1)) {
                        c = h;
                        continue
                    }
                } else if (h === c) {
                    c = !1;
                    continue
                }
            }
            return a < t.length && (r += n(t.substr(a))), r
        }, e.parseAttr = function (t, e) {
            var n = 0, i = [], o = !1, u = t.length;

            function d(t, n) {
                if (!((t = (t = r.trim(t)).replace(a, "").toLowerCase()).length < 1)) {
                    var o = e(t, n || "");
                    o && i.push(o)
                }
            }

            for (var f = 0; f < u; f++) {
                var h, m = t.charAt(f);
                if (!1 !== o || "=" !== m) if (!1 === o || f !== n || '"' !== m && "'" !== m || "=" !== t.charAt(f - 1)) if (/\s|\n|\t/.test(m)) {
                    if (t = t.replace(/\s|\n|\t/g, " "), !1 === o) {
                        if (-1 === (h = s(t, f))) {
                            d(r.trim(t.slice(n, f))), o = !1, n = f + 1;
                            continue
                        }
                        f = h - 1;
                        continue
                    }
                    if (-1 === (h = c(t, f - 1))) {
                        d(o, l(r.trim(t.slice(n, f)))), o = !1, n = f + 1;
                        continue
                    }
                } else ; else {
                    if (-1 === (h = t.indexOf(m, f + 1))) break;
                    d(o, r.trim(t.slice(n + 1, h))), o = !1, n = (f = h) + 1
                } else o = t.slice(n, f), n = f + 1
            }
            return n < t.length && (!1 === o ? d(t.slice(n)) : d(o, l(r.trim(t.slice(n))))), r.trim(i.join(" "))
        }
    }, function (t, e, n) {
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(15), i = n.n(r), o = n(27), a = n(0), s = n(16);
        e.default = {
            name: a.l, icon: "v-md-icon-img", title: function (t) {
                return t.langConfig.image.toolbar
            }, menus: [{
                name: "image-link", text: function (t) {
                    return t.langConfig.imageLink.toolbar
                }, action: function (t) {
                    t.execCommand(a.l)
                }
            }, {
                name: "upload-image", text: function (t) {
                    return t.langConfig.uploadImage.toolbar
                }, action: function (t) {
                    t.uploadConfig = t.uploadImgConfig, t.$nextTick(Object(o.a)(i.a.mark((function e() {
                        var n, r;
                        return i.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.$refs.uploadFile.upload();
                                case 2:
                                    n = e.sent, r = Object(s.a)(n.target.files, t.uploadImgConfig), t.emitUploadImage(n, r);
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))))
                }
            }]
        }
    }, function (t, e, n) {
        var r = n(29), i = n(35);
        n(30);

        function o(t) {
            return null == t
        }

        function a(t) {
            (t = function (t) {
                var e = {};
                for (var n in t) e[n] = t[n];
                return e
            }(t || {})).whiteList = t.whiteList || r.whiteList, t.onAttr = t.onAttr || r.onAttr, t.onIgnoreAttr = t.onIgnoreAttr || r.onIgnoreAttr, t.safeAttrValue = t.safeAttrValue || r.safeAttrValue, this.options = t
        }

        a.prototype.process = function (t) {
            if (!(t = (t = t || "").toString())) return "";
            var e = this.options, n = e.whiteList, r = e.onAttr, a = e.onIgnoreAttr, s = e.safeAttrValue;
            return i(t, (function (t, e, i, c, l) {
                var u = n[i], d = !1;
                if (!0 === u ? d = u : "function" == typeof u ? d = u(c) : u instanceof RegExp && (d = u.test(c)), !0 !== d && (d = !1), c = s(i, c)) {
                    var f, h = {position: e, sourcePosition: t, source: l, isWhite: d};
                    return d ? o(f = r(i, c, h)) ? i + ":" + c : f : o(f = a(i, c, h)) ? void 0 : f
                }
            }))
        }, t.exports = a
    }, function (t, e, n) {
        var r = n(30);
        t.exports = function (t, e) {
            ";" !== (t = r.trimRight(t))[t.length - 1] && (t += ";");
            var n = t.length, i = !1, o = 0, a = 0, s = "";

            function c() {
                if (!i) {
                    var n = r.trim(t.slice(o, a)), c = n.indexOf(":");
                    if (-1 !== c) {
                        var l = r.trim(n.slice(0, c)), u = r.trim(n.slice(c + 1));
                        if (l) {
                            var d = e(o, s.length, l, u, n);
                            d && (s += d + "; ")
                        }
                    }
                }
                o = a + 1
            }

            for (; a < n; a++) {
                var l = t[a];
                if ("/" === l && "*" === t[a + 1]) {
                    var u = t.indexOf("*/", a + 2);
                    if (-1 === u) break;
                    o = (a = u + 1) + 1, i = !1
                } else "(" === l ? i = !0 : ")" === l ? i = !1 : ";" === l ? i || c() : "\n" === l && c()
            }
            return r.trim(s)
        }
    }, function (t, e, n) {
        var r = n(18).FilterCSS, i = n(28), o = n(31), a = o.parseTag, s = o.parseAttr, c = n(19);

        function l(t) {
            return null == t
        }

        function u(t) {
            (t = function (t) {
                var e = {};
                for (var n in t) e[n] = t[n];
                return e
            }(t || {})).stripIgnoreTag && (t.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), t.onIgnoreTag = i.onIgnoreTagStripAll), t.whiteList = t.whiteList || i.whiteList, t.onTag = t.onTag || i.onTag, t.onTagAttr = t.onTagAttr || i.onTagAttr, t.onIgnoreTag = t.onIgnoreTag || i.onIgnoreTag, t.onIgnoreTagAttr = t.onIgnoreTagAttr || i.onIgnoreTagAttr, t.safeAttrValue = t.safeAttrValue || i.safeAttrValue, t.escapeHtml = t.escapeHtml || i.escapeHtml, this.options = t, !1 === t.css ? this.cssFilter = !1 : (t.css = t.css || {}, this.cssFilter = new r(t.css))
        }

        u.prototype.process = function (t) {
            if (!(t = (t = t || "").toString())) return "";
            var e = this.options, n = e.whiteList, r = e.onTag, o = e.onIgnoreTag, u = e.onTagAttr,
                d = e.onIgnoreTagAttr, f = e.safeAttrValue, h = e.escapeHtml, m = this.cssFilter;
            e.stripBlankChar && (t = i.stripBlankChar(t)), e.allowCommentTag || (t = i.stripCommentTag(t));
            var p = !1;
            if (e.stripIgnoreTagBody) {
                p = i.StripTagBody(e.stripIgnoreTagBody, o);
                o = p.onIgnoreTag
            }
            var v = a(t, (function (t, e, i, a, p) {
                var v, g = {sourcePosition: t, position: e, isClosing: p, isWhite: n.hasOwnProperty(i)};
                if (!l(v = r(i, a, g))) return v;
                if (g.isWhite) {
                    if (g.isClosing) return "</" + i + ">";
                    var b = function (t) {
                        var e = c.spaceIndex(t);
                        if (-1 === e) return {html: "", closing: "/" === t[t.length - 2]};
                        var n = "/" === (t = c.trim(t.slice(e + 1, -1)))[t.length - 1];
                        return n && (t = c.trim(t.slice(0, -1))), {html: t, closing: n}
                    }(a), w = n[i], y = s(b.html, (function (t, e) {
                        var n, r = -1 !== c.indexOf(w, t);
                        return l(n = u(i, t, e, r)) ? r ? (e = f(i, t, e, m)) ? t + '="' + e + '"' : t : l(n = d(i, t, e, r)) ? void 0 : n : n
                    }));
                    a = "<" + i;
                    return y && (a += " " + y), b.closing && (a += " /"), a += ">"
                }
                return l(v = o(i, a, g)) ? h(a) : v
            }), h);
            return p && (v = p.remove(v)), v
        }, t.exports = u
    }, function (t, e, n) {
        "use strict";
        var r = n(10);
        n.n(r).a
    }, function (t, e, n) {
        "use strict";
        var r = n(11);
        n.n(r).a
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            var n = function () {
                    if ("undefined" != typeof Map) return Map;

                    function t(t, e) {
                        var n = -1;
                        return t.some((function (t, r) {
                            return t[0] === e && (n = r, !0)
                        })), n
                    }

                    return function () {
                        function e() {
                            this.__entries__ = []
                        }

                        return Object.defineProperty(e.prototype, "size", {
                            get: function () {
                                return this.__entries__.length
                            }, enumerable: !0, configurable: !0
                        }), e.prototype.get = function (e) {
                            var n = t(this.__entries__, e), r = this.__entries__[n];
                            return r && r[1]
                        }, e.prototype.set = function (e, n) {
                            var r = t(this.__entries__, e);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                        }, e.prototype.delete = function (e) {
                            var n = this.__entries__, r = t(n, e);
                            ~r && n.splice(r, 1)
                        }, e.prototype.has = function (e) {
                            return !!~t(this.__entries__, e)
                        }, e.prototype.clear = function () {
                            this.__entries__.splice(0)
                        }, e.prototype.forEach = function (t, e) {
                            void 0 === e && (e = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var i = r[n];
                                t.call(e, i[1], i[0])
                            }
                        }, e
                    }()
                }(), r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                i = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                o = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function (t) {
                    return setTimeout((function () {
                        return t(Date.now())
                    }), 1e3 / 60)
                };
            var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                s = "undefined" != typeof MutationObserver, c = function () {
                    function t() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) {
                            var n = !1, r = !1, i = 0;

                            function a() {
                                n && (n = !1, t()), r && c()
                            }

                            function s() {
                                o(a)
                            }

                            function c() {
                                var t = Date.now();
                                if (n) {
                                    if (t - i < 2) return;
                                    r = !0
                                } else n = !0, r = !1, setTimeout(s, e);
                                i = t
                            }

                            return c
                        }(this.refresh.bind(this), 20)
                    }

                    return t.prototype.addObserver = function (t) {
                        ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
                    }, t.prototype.removeObserver = function (t) {
                        var e = this.observers_, n = e.indexOf(t);
                        ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
                    }, t.prototype.refresh = function () {
                        this.updateObservers_() && this.refresh()
                    }, t.prototype.updateObservers_ = function () {
                        var t = this.observers_.filter((function (t) {
                            return t.gatherActive(), t.hasActive()
                        }));
                        return t.forEach((function (t) {
                            return t.broadcastActive()
                        })), t.length > 0
                    }, t.prototype.connect_ = function () {
                        r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, t.prototype.disconnect_ = function () {
                        r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, t.prototype.onTransitionEnd_ = function (t) {
                        var e = t.propertyName, n = void 0 === e ? "" : e;
                        a.some((function (t) {
                            return !!~n.indexOf(t)
                        })) && this.refresh()
                    }, t.getInstance = function () {
                        return this.instance_ || (this.instance_ = new t), this.instance_
                    }, t.instance_ = null, t
                }(), l = function (t, e) {
                    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                        var i = r[n];
                        Object.defineProperty(t, i, {value: e[i], enumerable: !1, writable: !1, configurable: !0})
                    }
                    return t
                }, u = function (t) {
                    return t && t.ownerDocument && t.ownerDocument.defaultView || i
                }, d = g(0, 0, 0, 0);

            function f(t) {
                return parseFloat(t) || 0
            }

            function h(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.reduce((function (e, n) {
                    return e + f(t["border-" + n + "-width"])
                }), 0)
            }

            function m(t) {
                var e = t.clientWidth, n = t.clientHeight;
                if (!e && !n) return d;
                var r = u(t).getComputedStyle(t), i = function (t) {
                    for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                        var i = r[n], o = t["padding-" + i];
                        e[i] = f(o)
                    }
                    return e
                }(r), o = i.left + i.right, a = i.top + i.bottom, s = f(r.width), c = f(r.height);
                if ("border-box" === r.boxSizing && (Math.round(s + o) !== e && (s -= h(r, "left", "right") + o), Math.round(c + a) !== n && (c -= h(r, "top", "bottom") + a)), !function (t) {
                    return t === u(t).document.documentElement
                }(t)) {
                    var l = Math.round(s + o) - e, m = Math.round(c + a) - n;
                    1 !== Math.abs(l) && (s -= l), 1 !== Math.abs(m) && (c -= m)
                }
                return g(i.left, i.top, s, c)
            }

            var p = "undefined" != typeof SVGGraphicsElement ? function (t) {
                return t instanceof u(t).SVGGraphicsElement
            } : function (t) {
                return t instanceof u(t).SVGElement && "function" == typeof t.getBBox
            };

            function v(t) {
                return r ? p(t) ? function (t) {
                    var e = t.getBBox();
                    return g(0, 0, e.width, e.height)
                }(t) : m(t) : d
            }

            function g(t, e, n, r) {
                return {x: t, y: e, width: n, height: r}
            }

            var b = function () {
                function t(t) {
                    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = t
                }

                return t.prototype.isActive = function () {
                    var t = v(this.target);
                    return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                }, t.prototype.broadcastRect = function () {
                    var t = this.contentRect_;
                    return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
                }, t
            }(), w = function (t, e) {
                var n, r, i, o, a, s, c,
                    u = (r = (n = e).x, i = n.y, o = n.width, a = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), l(c, {
                        x: r,
                        y: i,
                        width: o,
                        height: a,
                        top: i,
                        right: r + o,
                        bottom: a + i,
                        left: r
                    }), c);
                l(this, {target: t, contentRect: u})
            }, y = function () {
                function t(t, e, r) {
                    if (this.activeObservations_ = [], this.observations_ = new n, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                    this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r
                }

                return t.prototype.observe = function (t) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var e = this.observations_;
                        e.has(t) || (e.set(t, new b(t)), this.controller_.addObserver(this), this.controller_.refresh())
                    }
                }, t.prototype.unobserve = function (t) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    if ("undefined" != typeof Element && Element instanceof Object) {
                        if (!(t instanceof u(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var e = this.observations_;
                        e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                    }
                }, t.prototype.disconnect = function () {
                    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                }, t.prototype.gatherActive = function () {
                    var t = this;
                    this.clearActive(), this.observations_.forEach((function (e) {
                        e.isActive() && t.activeObservations_.push(e)
                    }))
                }, t.prototype.broadcastActive = function () {
                    if (this.hasActive()) {
                        var t = this.callbackCtx_, e = this.activeObservations_.map((function (t) {
                            return new w(t.target, t.broadcastRect())
                        }));
                        this.callback_.call(t, e, t), this.clearActive()
                    }
                }, t.prototype.clearActive = function () {
                    this.activeObservations_.splice(0)
                }, t.prototype.hasActive = function () {
                    return this.activeObservations_.length > 0
                }, t
            }(), _ = "undefined" != typeof WeakMap ? new WeakMap : new n, x = function t(e) {
                if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                var n = c.getInstance(), r = new y(e, n, this);
                _.set(this, r)
            };
            ["observe", "unobserve", "disconnect"].forEach((function (t) {
                x.prototype[t] = function () {
                    var e;
                    return (e = _.get(this))[t].apply(e, arguments)
                }
            }));
            var C = void 0 !== i.ResizeObserver ? i.ResizeObserver : x;
            e.a = C
        }).call(this, n(93))
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
            return Pt
        }));
        var r = n(8), i = n(1), o = {};

        function a(t, e, n) {
            e ? t[e] ? console.error("The command name is already in use: " + e) : "function" == typeof n ? t[e] = n : console.error("The command must be registered as a function: " + e) : console.error("Command name is required")
        }

        Object(i.c)(o, n(44));
        var s = n(4), c = {};

        function l(t, e, n) {
            e ? t[e] ? console.error("The toolbar name is already in use: " + e) : t[e] = Object(s.a)({}, n) : console.error("Toolbar name is required")
        }

        Object(i.c)(c, n(67));
        n(88);
        var u = n(9), d = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "v-md-editor",
                class: ["v-md-editor--" + t.mode, {"v-md-editor--fullscreen": t.fullscreen}],
                style: {height: t.heightGetter}
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isPreviewMode,
                    expression: "!isPreviewMode"
                }],
                staticClass: "v-md-editor__left-area",
                style: {width: t.leftAreaVisible ? t.leftAreaWidth : 0, borderWidth: t.leftAreaVisible ? "1px" : 0}
            }, [n("div", {
                staticClass: "v-md-editor__left-area-title",
                style: {height: t.toolbarHeight + "px", lineHeight: t.toolbarHeight + "px"}
            }, [t._v("\n      " + t._s(t.leftAreaTitle) + "\n    ")]), n("div", {staticClass: "v-md-editor__left-area-body"}, [t._t("left-area")], 2)]), n("div", {staticClass: "v-md-editor__right-area"}, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isPreviewMode,
                    expression: "!isPreviewMode"
                }], ref: "toolbarWrapper", staticClass: "v-md-editor__toolbar"
            }, [n("editor-toolbar", {
                staticClass: "v-md-editor__toolbar-left",
                attrs: {groups: t.leftToolbarGroup, toolbars: t.toolbars, "disabled-menus": t.disabledMenus},
                on: {"item-click": t.handleToolbarItemClick, "toolbar-menu-click": t.handleToolbarMenuClick}
            }), n("editor-toolbar", {
                staticClass: "v-md-editor__toolbar-right",
                attrs: {groups: t.rightToolbarGroup, toolbars: t.toolbars, "disabled-mens": t.disabledMenus},
                on: {"item-click": t.handleToolbarItemClick, "toolbar-menu-click": t.handleToolbarMenuClick}
            })], 1), n("div", {staticClass: "v-md-editor__main"}, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isPreviewMode,
                    expression: "!isPreviewMode"
                }],
                ref: "editorWrapper",
                staticClass: "v-md-editor__editor-wrapper",
                on: {click: t.handleEditorWrapperClick}
            }, [t._t("editor")], 2), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isEditMode,
                    expression: "!isEditMode"
                }], ref: "previewWrapper", staticClass: "v-md-editor__preview-wrapper"
            }, [t._t("preview")], 2), t._t("default")], 2)])])
        };
        d._withStripped = !0;
        var f = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.groups.length ? n("ul", [t._l(t.groups, (function (e, r) {
                return [t._l(e, (function (e) {
                    return n("toolbar-item", {
                        key: e,
                        attrs: {
                            name: e,
                            title: t.getConfig(e, "title"),
                            icon: t.getConfig(e, "icon"),
                            text: t.getConfig(e, "text"),
                            active: t.getConfig(e, "active"),
                            menus: t.getConfig(e, "menus"),
                            "disabled-menus": t.disabledMenus
                        },
                        on: {
                            click: function (n) {
                                return t.$emit("item-click", t.toolbars[e])
                            }, "menu-click": function (e) {
                                return t.$emit("toolbar-menu-click", arguments[0])
                            }
                        }
                    })
                })), r !== t.groups.length - 1 ? n("li", {staticClass: "v-md-editor__toolbar-divider"}) : t._e()]
            }))], 2) : t._e()
        };
        f._withStripped = !0;
        var h = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("li", {
                directives: [{
                    name: "clickoutside",
                    rawName: "v-clickoutside",
                    value: t.hideMenu,
                    expression: "hideMenu"
                }],
                staticClass: "v-md-editor__toolbar-item",
                class: [t.icon, "v-md-editor__toolbar-item-" + t.name, {"v-md-editor__toolbar-item--active": t.active || t.menuActive}, {"v-md-editor__toolbar-item--menu": t.hasMenu}],
                on: {
                    mousedown: function (t) {
                        t.preventDefault()
                    }, mouseleave: t.handleHideTooltip, mousemove: t.showTooltip, click: function (e) {
                        return e.stopPropagation(), t.handleClick(e)
                    }
                }
            }, [t._v("\n  " + t._s(t.text) + "\n  "), n("v-md-tooltip", {
                ref: "tooltip",
                attrs: {text: t.title}
            }), t.hasMenu ? n("v-md-menu", {
                ref: "menu",
                attrs: {
                    mode: t.menuMode,
                    menus: t.menuItems,
                    "item-width": t.menus.itemWidth,
                    "row-num": t.menus.rowNum,
                    visible: t.menuActive
                },
                on: {
                    "update:visible": function (e) {
                        t.menuActive = e
                    }, "item-click": function (e) {
                        return t.$emit("menu-click", arguments[0])
                    }
                }
            }) : t._e(), t.hasMenu ? n("i", {
                ref: "menuCtrl",
                staticClass: "v-md-icon-arrow-down v-md-editor__menu-ctrl"
            }) : t._e()], 1)
        };
        h._withStripped = !0;
        var m = function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("transition", {attrs: {name: "v-md-fade-in"}}, [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: this.visible,
                    expression: "visible"
                }],
                staticClass: "v-md-editor__tooltip",
                style: {left: this.position.x + "px", top: this.position.y + "px"}
            }, [this._v("\n    " + this._s(this.text) + "\n  ")])])
        };
        m._withStripped = !0;
        var p = {
            name: "v-md-tooltip", props: {text: String}, data: function () {
                return {position: {x: 0, y: 0}, visible: !1}
            }, methods: {
                show: function (t) {
                    this.position = {x: t.x, y: t.y}, this.visible = !0, this.$nextTick(this.calculateLayout)
                }, hide: function () {
                    this.visible = !1
                }, calculateLayout: function () {
                    var t = this.$el.getBoundingClientRect().right, e = document.documentElement.clientWidth;
                    e - t < 0 && (this.position.x -= t - e)
                }
            }
        }, v = (n(89), n(2)), g = Object(v.a)(p, m, [], !1, null, null, null);
        g.options.__file = "src/components/toolbar-item/tooltip.vue";
        var b = g.exports, w = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("transition", {attrs: {name: "v-md-zoom-in-top"}}, [n("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.visible,
                    expression: "visible"
                }],
                staticClass: "v-md-editor__menu",
                class: ["v-md-editor__menu--" + t.mode],
                style: t.style,
                on: {
                    mousemove: function (t) {
                        t.stopPropagation()
                    }, click: function (t) {
                        t.stopPropagation()
                    }
                }
            }, [t.isListMode ? t._l(t.menus, (function (e) {
                return n("li", {
                    key: e.name,
                    staticClass: "v-md-editor__menu-item",
                    class: ["v-md-editor__menu-item-" + e.name, e.class],
                    on: {
                        click: function (n) {
                            return n.stopPropagation(), t.handleClick(e)
                        }
                    }
                }, [e.render ? n("v-md-render", {
                    attrs: {
                        render: e.render,
                        editor: t.$self
                    }
                }) : [t._v(t._s(t.getText(e.text)))]], 2)
            })) : [n("li", t._l(t.rowCount, (function (e) {
                return n("div", {staticClass: "v-md-editor__menu-row"}, t._l(t.getRowMenus(e), (function (e) {
                    return n("span", {
                        key: e.name,
                        staticClass: "v-md-editor__menu-item",
                        class: ["v-md-editor__menu-item-" + e.name, e.class],
                        style: {width: t.itemWidth},
                        on: {
                            click: function (n) {
                                return n.stopPropagation(), t.handleClick(e)
                            }
                        }
                    }, [t._v(t._s(e.text))])
                })), 0)
            })), 0)]], 2)])
        };
        w._withStripped = !0;
        var y, _ = {
            name: "v-md-render", functional: !0, props: {render: Function}, render: function (t, e) {
                var n = e.data, r = e.props;
                return r.render.apply(r, [t].concat(n.$attrs))
            }
        }, x = "list", C = "panel", k = {
            name: "v-md-menu",
            components: (y = {}, y[_.name] = _, y),
            inject: ["markdownEditor"],
            props: {
                mode: {type: String, default: C},
                menus: Array,
                itemWidth: {type: String, default: "30px"},
                rowNum: {type: Number, default: 10},
                visible: Boolean
            },
            data: function () {
                return {style: {left: 0}}
            },
            computed: {
                rowCount: function () {
                    return Math.ceil(this.menus.length / this.rowNum)
                }, isListMode: function () {
                    return this.mode === x
                }
            },
            watch: {
                visible: function () {
                    this.visible && this.$nextTick(this.calculateLayout)
                }
            },
            methods: {
                calculateLayout: function () {
                    var t = this.$el.getBoundingClientRect().right;
                    document.documentElement.clientWidth - t < 0 && (this.style = {right: 0})
                }, getRowMenus: function (t) {
                    var e = t * this.rowNum, n = e - this.rowNum;
                    return this.menus.slice(n, e)
                }, getText: function (t) {
                    return "function" == typeof t ? t(this.markdownEditor) : t
                }, hide: function () {
                    this.$emit("update:visible", !1)
                }, handleClick: function (t) {
                    this.$emit("item-click", t), this.hide()
                }
            }
        }, S = (n(90), Object(v.a)(k, w, [], !1, null, null, null));
        S.options.__file = "src/components/toolbar-item/menu.vue";
        var T, E = S.exports, j = [], O = "@@clickoutsideContext", I = "undefined" == typeof window, A = 0;

        function L(t, e, n) {
            return function (r, i) {
                void 0 === r && (r = {}), void 0 === i && (i = {}), n && n.context && r.target && i.target && !t.contains(r.target) && !t.contains(i.target) && t !== r.target && (e.expression && t[O].methodName && n.context[t[O].methodName] ? n.context[t[O].methodName]() : t[O].bindingFn && t[O].bindingFn())
            }
        }

        I || (document.addEventListener("mousedown", (function (t) {
            T = t
        })), document.addEventListener("mouseup", (function (t) {
            j.forEach((function (e) {
                return e[O].documentHandler(t, T)
            }))
        })));
        var M, $ = {
            name: "toolbar-item",
            directives: {
                Clickoutside: {
                    bind: function (t, e, n) {
                        j.push(t);
                        var r = A++;
                        t[O] = {id: r, documentHandler: L(t, e, n), methodName: e.expression, bindingFn: e.value}
                    }, update: function (t, e, n) {
                        t[O].documentHandler = L(t, e, n), t[O].methodName = e.expression, t[O].bindingFn = e.value
                    }, unbind: function (t) {
                        for (var e = j.length, n = 0; n < e; n++) if (j[n][O].id === t[O].id) {
                            j.splice(n, 1);
                            break
                        }
                        delete t[O]
                    }
                }
            },
            components: (M = {}, M[b.name] = b, M[E.name] = E, M),
            props: {
                name: String,
                title: String,
                active: Boolean,
                text: String,
                icon: String,
                menus: [Array, Object],
                disabledMenus: Array
            },
            data: function () {
                return {menuActive: !1}
            },
            computed: {
                hasMenu: function () {
                    var t;
                    return null == (t = this.menuItems) ? void 0 : t.length
                }, menuItems: function () {
                    var t = this, e = Object(i.d)(this.menus) ? this.menus.items : this.menus;
                    return null == e ? void 0 : e.filter((function (e) {
                        var n, r = e.name;
                        return !(null == (n = t.disabledMenus) ? void 0 : n.includes(t.name + "/" + r))
                    }))
                }, menuMode: function () {
                    return Object(i.d)(this.menus) ? this.menus.mode : x
                }
            },
            methods: {
                hideMenu: function () {
                    this.hasMenu && (this.menuActive = !1)
                }, showMenu: function () {
                    this.hasMenu && (this.menuActive = !0)
                }, handleClick: function (t) {
                    this.$emit("click"), this.menuActive ? this.hideMenu() : this.showMenu(), this.hasMenu ? this.handleHideTooltip() : this.showTooltip(t)
                }, showTooltip: function (t) {
                    var e = this, n = this.$el, r = t.target, i = this.$refs.menuCtrl;
                    if (r !== n && r !== i || this.menuActive) this.handleHideTooltip(); else {
                        this.timmer && clearTimeout(this.timmer);
                        var o = n.getBoundingClientRect(), a = t.clientX - o.left, s = t.clientY - o.top;
                        this.timmer = setTimeout((function () {
                            var t;
                            null == (t = e.$refs.tooltip) || t.show({x: a - 2, y: s + 20})
                        }), 100)
                    }
                }, handleHideTooltip: function () {
                    this.timmer && clearTimeout(this.timmer), this.$refs.tooltip.hide()
                }
            }
        }, z = (n(91), Object(v.a)($, h, [], !1, null, null, null));
        z.options.__file = "src/components/toolbar-item/index.vue";
        var D, F = z.exports, H = {
            name: "editor-toolbar",
            inject: ["markdownEditor"],
            components: (D = {}, D[F.name] = F, D),
            props: {groups: Array, toolbars: Object, disabledMenus: Array},
            methods: {
                getConfig: function (t, e) {
                    var n = this.toolbars[t][e];
                    return "function" == typeof n ? n(this.markdownEditor) : n
                }
            }
        }, W = (n(92), Object(v.a)(H, f, [], !1, null, null, null));
        W.options.__file = "src/components/toolbar.vue";
        var P, N = W.exports, R = n(39), G = "undefined" == typeof window, B = function (t) {
            t.forEach((function (t) {
                var e = t.target.__resizeListeners__ || [];
                e.length && e.forEach((function (t) {
                    t()
                }))
            }))
        }, V = function (t, e) {
            G || (t.__resizeListeners__ || (t.__resizeListeners__ = [], t.__ro__ = new R.a(B), t.__ro__.observe(t)), t.__resizeListeners__.push(e))
        }, q = function (t, e) {
            t && t.__resizeListeners__ && (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1), t.__resizeListeners__.length || t.__ro__.disconnect())
        }, U = n(3), X = {
            name: "v-md-container",
            components: (P = {}, P[N.name] = N, P),
            props: {
                leftToolbar: String,
                rightToolbar: String,
                toolbars: Object,
                fullscreen: Boolean,
                height: String,
                noresize: Boolean,
                disabledMenus: Array,
                leftAreaVisible: Boolean,
                leftAreaTitle: String,
                leftAreaWidth: {type: String, default: "200px"},
                mode: {type: String, default: U.a.EDITABLE}
            },
            data: function () {
                return {toolbarHeight: 0}
            },
            computed: {
                heightGetter: function () {
                    return this.fullscreen ? "auto" : this.height
                }, leftToolbarGroup: function () {
                    return this.getToolbarConfig(this.leftToolbar)
                }, rightToolbarGroup: function () {
                    return this.getToolbarConfig(this.rightToolbar)
                }, isPreviewMode: function () {
                    return this.mode === U.a.PREVIEW
                }, isEditMode: function () {
                    return this.mode === U.a.EDIT
                }
            },
            mounted: function () {
                this.noresize || (V(this.$refs.editorWrapper, this.handleResize), V(this.$refs.toolbarWrapper, this.handleToolbarWrapperResize))
            },
            beforeDestroy: function () {
                this.noresize || (q(this.$refs.editorWrapper, this.handleResize), q(this.$refs.toolbarWrapper, this.handleToolbarWrapperResize))
            },
            methods: {
                handleResize: function () {
                    this.$emit("resize")
                }, handleToolbarWrapperResize: function () {
                    var t = this.$refs.toolbarWrapper;
                    t && (this.toolbarHeight = t.offsetHeight)
                }, getToolbarConfig: function (t) {
                    var e = this;
                    return t.split("|").map((function (t) {
                        return t.split(" ").filter((function (t) {
                            return t && e.toolbars[t]
                        }))
                    }))
                }, handleEditorWrapperClick: function (t) {
                    this.$emit("editor-wrapper-click", t)
                }, handleToolbarItemClick: function (t) {
                    this.$emit("toolbar-item-click", t)
                }, handleToolbarMenuClick: function (t) {
                    this.$emit("toolbar-menu-click", t)
                }
            }
        }, Y = (n(94), Object(v.a)(X, d, [], !1, null, null, null));
        Y.options.__file = "src/components/container.vue";
        var K, Q = Y.exports, Z = "undefined" == typeof window, J = {
            vertical: {
                offset: "offsetHeight",
                scroll: "scrollTop",
                scrollSize: "scrollHeight",
                size: "height",
                key: "vertical",
                axis: "Y",
                client: "clientY",
                direction: "top"
            },
            horizontal: {
                offset: "offsetWidth",
                scroll: "scrollLeft",
                scrollSize: "scrollWidth",
                size: "width",
                key: "horizontal",
                axis: "X",
                client: "clientX",
                direction: "left"
            }
        };

        function tt(t) {
            var e = t.move, n = t.size, r = t.bar, i = {}, o = "translate" + r.axis + "(" + e + "%)";
            return i[r.size] = n, i.transform = o, i.msTransform = o, i.webkitTransform = o, i
        }

        var et = {
            name: "Bar", props: {vertical: Boolean, size: String, move: Number}, computed: {
                bar: function () {
                    return J[this.vertical ? "vertical" : "horizontal"]
                }, wrap: function () {
                    return this.$parent.wrap
                }
            }, render: function () {
                var t = arguments[0], e = this.size, n = this.move, r = this.bar;
                return t("div", {
                    class: ["scrollbar__bar", "is-" + r.key],
                    on: {
                        mousedown: this.clickTrackHandler, click: function (t) {
                            return t.stopPropagation()
                        }
                    }
                }, [t("div", {
                    ref: "thumb",
                    class: "scrollbar__thumb",
                    on: {mousedown: this.clickThumbHandler},
                    style: tt({size: e, move: n, bar: r})
                })])
            }, methods: {
                clickThumbHandler: function (t) {
                    t.ctrlKey || 2 === t.button || (this.startDrag(t), this[this.bar.axis] = t.currentTarget[this.bar.offset] - (t[this.bar.client] - t.currentTarget.getBoundingClientRect()[this.bar.direction]))
                }, clickTrackHandler: function (t) {
                    var e = 100 * (Math.abs(t.target.getBoundingClientRect()[this.bar.direction] - t[this.bar.client]) - this.$refs.thumb[this.bar.offset] / 2) / this.$el[this.bar.offset];
                    this.wrap[this.bar.scroll] = e * this.wrap[this.bar.scrollSize] / 100
                }, startDrag: function (t) {
                    t.stopImmediatePropagation(), this.cursorDown = !0, document.addEventListener("mousemove", this.mouseMoveDocumentHandler, !1), document.addEventListener("mouseup", this.mouseUpDocumentHandler, !1), document.onselectstart = function () {
                        return !1
                    }
                }, mouseMoveDocumentHandler: function (t) {
                    if (!1 !== this.cursorDown) {
                        var e = this[this.bar.axis];
                        if (e) {
                            var n = 100 * (-1 * (this.$el.getBoundingClientRect()[this.bar.direction] - t[this.bar.client]) - (this.$refs.thumb[this.bar.offset] - e)) / this.$el[this.bar.offset];
                            this.wrap[this.bar.scroll] = n * this.wrap[this.bar.scrollSize] / 100
                        }
                    }
                }, mouseUpDocumentHandler: function () {
                    this.cursorDown = !1, this[this.bar.axis] = 0, document.removeEventListener("mousemove", this.mouseMoveDocumentHandler, !1), document.onselectstart = null
                }
            }, destroyed: function () {
                document.removeEventListener("mouseup", this.mouseUpDocumentHandler, !1)
            }
        }, nt = n(12), rt = {
            name: "scrollbar",
            components: {Bar: et},
            props: {
                native: Boolean,
                disabled: Boolean,
                wrapStyle: null,
                wrapClass: null,
                viewClass: null,
                viewStyle: null,
                noresize: Boolean,
                tag: {type: String, default: "div"}
            },
            data: function () {
                return {sizeWidth: "0", sizeHeight: "0", moveX: 0, moveY: 0}
            },
            computed: {
                wrap: function () {
                    return this.$refs.wrap
                }
            },
            mounted: function () {
                this.native || this.disabled || (this.$nextTick(this.update), !this.noresize && V(this.$refs.resize, this.update))
            },
            beforeDestroy: function () {
                this.native || this.disabled || !this.noresize && q(this.$refs.resize, this.update)
            },
            methods: {
                getScrollInfo: function () {
                    var t = this.wrap;
                    return {
                        left: t.scrollLeft,
                        top: t.scrollTop,
                        width: t.scrollWidth,
                        height: t.scrollHeight,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight
                    }
                }, scrollTo: function (t) {
                    Object(nt.a)({scrollTarget: this.wrap, scrollToTop: t})
                }, handleScroll: function () {
                    var t = this.wrap;
                    this.moveY = 100 * t.scrollTop / t.clientHeight, this.moveX = 100 * t.scrollLeft / t.clientWidth, this.$emit("scroll")
                }, update: function () {
                    var t = this.wrap;
                    if (t) {
                        var e = 100 * t.clientHeight / t.scrollHeight, n = 100 * t.clientWidth / t.scrollWidth;
                        this.sizeHeight = e < 100 ? e + "%" : "", this.sizeWidth = n < 100 ? n + "%" : ""
                    }
                }
            },
            render: function (t) {
                if (this.disabled) return this.$slots.default;
                var e = function () {
                    if (Z) return 0;
                    if (void 0 !== K) return K;
                    var t = document.createElement("div");
                    t.className = "scrollbar__wrap", t.style.visibility = "hidden", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
                    var e = t.offsetWidth;
                    t.style.overflow = "scroll";
                    var n = document.createElement("div");
                    n.style.width = "100%", t.appendChild(n);
                    var r = n.offsetWidth;
                    return t.parentNode.removeChild(t), K = e - r
                }(), n = this.wrapStyle;
                if (e) {
                    var r = this.$refs.resize, o = this.$refs.wrap, a = null == r ? void 0 : r.scrollHeight,
                        s = null == r ? void 0 : r.scrollWidth, c = null == o ? void 0 : o.clientHeight,
                        l = "-" + e + "px",
                        u = "margin-bottom: " + (s > (null == o ? void 0 : o.clientWidth) ? l : 0) + "; margin-right: " + (a > c ? l : 0) + ";";
                    Array.isArray(this.wrapStyle) ? ((n = Object(i.a)(this.wrapStyle)).marginRight = l, n.marginBottom = l) : "string" == typeof this.wrapStyle ? n += u : n = u
                }
                var d, f = t(this.tag, {
                    class: ["scrollbar__view", this.viewClass],
                    style: this.viewStyle,
                    ref: "resize"
                }, this.$slots.default), h = t("div", {
                    ref: "wrap",
                    style: n,
                    on: {scroll: this.handleScroll},
                    class: [this.wrapClass, "scrollbar__wrap", e ? "" : "scrollbar__wrap--hidden-default"]
                }, [[f]]);
                return d = this.native ? [t("div", {
                    ref: "wrap",
                    class: [this.wrapClass, "scrollbar__wrap"],
                    style: n
                }, [[f]])] : [h, t(et, {attrs: {move: this.moveX, size: this.sizeWidth}}), t(et, {
                    attrs: {
                        vertical: !0,
                        move: this.moveY,
                        size: this.sizeHeight
                    }
                })], t("div", {class: "scrollbar"}, d)
            }
        }, it = (n(95), Object(v.a)(rt, void 0, void 0, !1, null, null, null));
        it.options.__file = "src/components/scrollbar/index.vue";
        var ot = it.exports, at = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("ul", {staticClass: "v-md-editor__toc-nav"}, t._l(t.titles, (function (e) {
                return n("li", {
                    staticClass: "v-md-editor__toc-nav-item",
                    style: {paddingLeft: t.indent * e.indent + "px"},
                    on: {
                        click: function (n) {
                            return t.$emit("nav-click", e)
                        }
                    }
                }, [n("span", {staticClass: "v-md-editor__toc-nav-title"}, [t._v(t._s(e.title))])])
            })), 0)
        };
        at._withStripped = !0;
        var st = {name: "toc-nav", props: {titles: Array, indent: {type: Number, default: 16}}},
            ct = (n(96), Object(v.a)(st, at, [], !1, null, null, null));
        ct.options.__file = "src/components/toc-nav.vue";
        var lt, ut = ct.exports, dt = {
            inheritAttrs: !1,
            components: (lt = {}, lt[u.default.name] = u.default, lt[Q.name] = Q, lt[ot.name] = ot, lt[ut.name] = ut, lt),
            provide: function () {
                return {markdownEditor: this}
            },
            props: {
                height: String,
                theme: Object,
                themeConfig: Object,
                mode: {type: String, default: U.a.EDITABLE},
                autofocus: Boolean,
                placeholder: String
            },
            data: function () {
                return {currentMode: this.mode, uploadConfig: {}}
            },
            watch: {
                mode: function () {
                    this.currentMode = this.mode
                }, currentMode: function () {
                    this.currentMode === U.a.EDITABLE && this.enableSyncScroll && this.$nextTick(this.previewSyncScroll)
                }
            },
            created: function () {
                this.theme && this.$options.use(this.theme, this.themeConfig)
            },
            computed: {
                isPreviewMode: function () {
                    return this.currentMode === U.a.PREVIEW
                }, isEditMode: function () {
                    return this.currentMode === U.a.EDIT
                }
            },
            mounted: function () {
                this.autofocus && this.$nextTick(this.setFocusEnd)
            },
            methods: {
                setFocusEnd: function () {
                    this.editorFocusEnd(), this.editorScrollToTop(9999), this.previewScrollTo(9999)
                }, handleChange: function (t, e) {
                    this.$emit("change", t, e)
                }, save: function () {
                    this.$emit("save", this.text, this.$refs.preview.html)
                }, insert: function (t) {
                    var e = this;
                    this.focus();
                    var n = t(this.getCurrentSelectedStr()), r = n.selected, i = n.text;
                    this.replaceSelectionText(i), this.$nextTick((function () {
                        e.changeSelctionTo(i, r)
                    }))
                }
            }
        }, ft = {
            props: {value: {type: String, default: ""}}, data: function () {
                return {text: this.value}
            }, methods: {
                handleInput: function (t) {
                    this.text = t, this.$emit("input", t)
                }
            }
        }, ht = {
            props: {defaultFullscreen: Boolean}, data: function () {
                return {fullscreen: !1}
            }, watch: {
                fullscreen: function () {
                    this.$emit("fullscreen-change", this.fullscreen)
                }
            }, mounted: function () {
                window.addEventListener("keyup", this.handleWindowKeyup, !1), this.defaultFullscreen && this.toggleFullScreen()
            }, beforeDestroy: function () {
                window.removeEventListener("keyup", this.handleWindowKeyup, !1)
            }, methods: {
                handleWindowKeyup: function (t) {
                    27 === t.keyCode && this.fullscreen && this.toggleFullScreen(!1)
                }, toggleFullScreen: function (t) {
                    void 0 === t && (t = !this.fullscreen), this.fullscreen = t;
                    var e = document.querySelectorAll("html, body"), n = e[0], r = e[1],
                        i = this.fullscreen ? "hidden" : null;
                    r.style.overflow = i, n.style.overflow = i
                }
            }
        }, mt = function () {
            var t = this.$createElement;
            return (this._self._c || t)("input", {
                key: this.key,
                ref: "fileInput",
                staticStyle: {display: "none"},
                attrs: {type: "file", accept: this.uploadConfig.accept, multiple: this.uploadConfig.multiple},
                on: {input: this.handleUpload}
            })
        };
        mt._withStripped = !0;
        var pt = n(15), vt = n.n(pt), gt = n(27), bt = {
            name: "v-md-upload-file", props: {uploadConfig: Object}, data: function () {
                return {
                    handleUpload: function () {
                    }, key: 0
                }
            }, methods: {
                upload: function () {
                    var t = this;
                    return Object(gt.a)(vt.a.mark((function e() {
                        var n;
                        return vt.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.chooseFile();
                                case 2:
                                    return n = e.sent, e.abrupt("return", n);
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }, chooseFile: function () {
                    var t = this;
                    return new Promise((function (e) {
                        t.handleUpload = function (n) {
                            e(n), t.key++
                        }, t.$refs.fileInput.click()
                    }))
                }
            }
        }, wt = Object(v.a)(bt, mt, [], !1, null, null, null);
        wt.options.__file = "src/components/upload-file.vue";
        var yt, _t = wt.exports, xt = n(33), Ct = n(16), kt = n(0), St = {accept: "image/*", multiple: !1}, Tt = {
            components: (yt = {}, yt[_t.name] = _t, yt),
            props: {uploadImageConfig: Object},
            computed: {
                uploadImgConfig: function () {
                    return Object(s.a)({}, St, {}, this.uploadImageConfig)
                }, hasUploadImage: function () {
                    return !this.disabledMenus.includes(xt.default.name + "/upload-image")
                }
            },
            methods: {
                handleDrop: function (t) {
                    var e = Object(Ct.a)(t.dataTransfer.files, this.uploadImgConfig);
                    this.emitUploadImage(t, e)
                }, handlePaste: function (t) {
                    var e = t.clipboardData;
                    if (e) {
                        var n = Object(Ct.a)(Object(Ct.b)(e), this.uploadImgConfig);
                        this.emitUploadImage(t, n)
                    }
                }, emitUploadImage: function (t, e) {
                    var n = this;
                    this.hasUploadImage && e.length && (t.preventDefault(), this.$emit("upload-image", t, (function (t) {
                        var e = t.url, r = t.desc;
                        n.execCommand(kt.l, {url: e, desc: r})
                    }), e))
                }
            }
        }, Et = n(5), jt = {
            data: function () {
                return {enableSyncScroll: !0}
            }, methods: {
                toggleSyncScroll: function (t) {
                    void 0 === t && (t = !this.enableSyncScroll), this.enableSyncScroll = t, t && this.previewSyncScroll()
                }, previewSyncScroll: function () {
                    if (!this.isEditMode) {
                        var t = this.$refs.preview.$el, e = this.$refs.previewScroller.$el,
                            n = t.querySelectorAll("[" + Et.c + "]"), r = this.getScrollInfo(), i = r.clientHeight,
                            o = r.top, a = r.height, s = e.querySelector(".scrollbar__wrap");
                        if (i + o === a) {
                            var c = s.clientHeight, l = s.scrollHeight;
                            this.previewScrollTo(l - c)
                        } else {
                            for (var u, d, f = 0; f < n.length; f++) {
                                var h = n[f].getAttribute(Et.c);
                                if (!(this.heightAtLine(h - 1, "local") < o)) {
                                    d = h;
                                    break
                                }
                                u = h
                            }
                            var m = 0;
                            if (u && d && u !== d) {
                                var p = this.heightAtLine(u - 1, "local");
                                m = (o - p) / (this.heightAtLine(d - 1, "local") - p)
                            }
                            var v = 0, g = s.scrollHeight - s.clientHeight;
                            u && (v = t.querySelector("[" + Et.c + '="' + u + '"]').offsetTop), d && (g = t.querySelector("[" + Et.c + '="' + d + '"]').offsetTop);
                            var b = v + (g - v) * m;
                            this.previewScrollTo(b)
                        }
                    }
                }, handleEditorScroll: function () {
                    this.enableSyncScroll && !this.ignoreSyncScroll && (clearTimeout(this.scrollTimmer), this.scrollTimmer = setTimeout(this.previewSyncScroll, 60))
                }
            }
        }, Ot = function (t) {
            return {
                created: function () {
                    var e = this, n = t.commands;
                    this.commands = {}, Object.keys(n).forEach((function (t) {
                        e.registerCommand(t, n[t])
                    }))
                }, methods: {
                    registerCommand: function (t, e) {
                        a(this.commands, t, e)
                    }, execCommand: function (t) {
                        var e = this.commands[t];
                        if (e) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            e.apply(void 0, [this].concat(r))
                        } else console.error("Command not found: " + t)
                    }
                }
            }
        }, It = {
            data: function () {
                return {tocVisible: !1, titles: []}
            }, props: {
                includeLevel: {
                    type: Array, default: function () {
                        return [2, 3]
                    }
                }
            }, watch: {
                text: {
                    immediate: !0, handler: function (t, e) {
                        void 0 !== e ? (this.updateTocNavTimmer && clearTimeout(this.updateTocNavTimmer), this.updateTocNavTimmer = setTimeout(this.updateTocNav, 800)) : this.$nextTick(this.updateTocNav)
                    }
                }
            }, computed: {
                anchorsSelector: function () {
                    return this.includeLevel.map((function (t) {
                        return "h" + t
                    })).join(",")
                }
            }, methods: {
                toggleToc: function (t) {
                    void 0 === t && (t = !this.tocVisible), this.tocVisible = t
                }, updateTocNav: function () {
                    var t, e = null == (t = this.$refs.preview) ? void 0 : t.$el;
                    if (e) {
                        var n = e.querySelectorAll(this.anchorsSelector), r = Array.from(n).filter((function (t) {
                            return !!t.innerText.trim()
                        }));
                        if (r.length) {
                            var i = Array.from(new Set(r.map((function (t) {
                                return t.tagName
                            })))).sort();
                            this.titles = r.map((function (t) {
                                return {
                                    title: t.innerText,
                                    lineIndex: t.getAttribute(Et.c),
                                    indent: i.indexOf(t.tagName)
                                }
                            }))
                        } else this.titles = []
                    }
                }, handleNavClick: function (t) {
                    var e = t.lineIndex;
                    this.scrollToLine(e)
                }
            }
        }, At = {
            props: {previewScrollContainer: Function}, computed: {
                getPreviewScrollContainer: function () {
                    var t = this;
                    return function () {
                        var e = t.$refs.previewScroller.$el.querySelector(".scrollbar__wrap"),
                            n = t.isPreviewMode ? window : e;
                        return t.previewScrollContainer ? t.previewScrollContainer() : n
                    }
                }
            }, methods: {
                previewScrollTo: function (t) {
                    this.$refs.previewScroller.scrollTo(t)
                }, scrollToLine: function (t) {
                    var e = this;
                    this.isPreviewMode || this.editorScrollToLine(t), this.isEditMode || (this.ignoreSyncScroll = !0, this.previewScrollToLine({
                        lineIndex: t,
                        onScrollEnd: function () {
                            e.ignoreSyncScroll = !1
                        }
                    }))
                }, editorScrollToLine: function (t) {
                    var e = this.heightAtLine(t - 1, "local");
                    this.editorScrollToTop(e)
                }, previewScrollToTarget: function () {
                    var t;
                    (t = this.$refs.preview).scrollToTarget.apply(t, arguments)
                }, previewScrollToLine: function (t) {
                    var e = t.lineIndex, n = t.onScrollEnd;
                    this.$refs.preview.scrollToLine({lineIndex: e, onScrollEnd: n})
                }
            }
        }, Lt = {};
        Object(i.c)(Lt, n(97));
        var Mt = function (t) {
                return {
                    mounted: function () {
                        var e = this;
                        if (!this.isPreviewMode) {
                            var n = t.hotkeys;
                            Object.keys(Lt).forEach((function (t) {
                                e.registerHotkeys(Lt[t].default)
                            })), n.forEach((function (t) {
                                e.registerHotkeys(t)
                            }))
                        }
                    }, methods: {
                        registerHotkeys: function (t) {
                            var e = this, n = t.modifier, r = t.key, i = t.action;
                            this.editorRegisterHotkeys({
                                modifier: n, key: r, action: function () {
                                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return i.apply(void 0, [e].concat(n))
                                }
                            })
                        }
                    }
                }
            }, $t = /^\s*([\d]+\.)( \[[ xX]])? /, zt = /^\s*([-*])( \[[ xX]])? /, Dt = /([*-] |[\d]+\. )/,
            Ft = /([\d])+\.( \[[ xX]])? /, Ht = {
                mounted: function () {
                    var t = this;
                    this.isPreviewMode || this.registerHotkeys({
                        key: "enter", action: function () {
                            var e, n, r = t.getCursorLineLeftText();
                            if ($t.test(r)) e = "x. ", n = Ft; else {
                                if (!zt.test(r)) return void t.replaceSelectionText("\n", "end");
                                e = "- ", n = Dt
                            }
                            var i = r.search(n) + e.length, o = r.slice(0, i);
                            r.slice(i, r.length) ? ("x. " === e && (o = o.replace(/(\d+)/, window.parseInt(o) + 1)), t.replaceSelectionText("\n" + o, "end")) : (t.delLineLeft(), t.replaceSelectionText("\n", "end"))
                        }
                    })
                }
            }, Wt = n(17);

        function Pt(t) {
            var e;
            !function (t) {
                t.commands = {}, t.command = function (e, n) {
                    a(t.commands, e, n)
                }, Object.keys(o).forEach((function (e) {
                    var n = o[e], r = n.name, i = n.default;
                    t.command(r, i)
                }))
            }(t), function (t) {
                t.toolbars = {}, t.toolbar = function (e, n) {
                    l(t.toolbars, e, n)
                }, Object.keys(c).forEach((function (e) {
                    var n = c[e].default;
                    t.toolbar(n.name, n)
                }))
            }(t), t.name = "v-md-editor", t.theme = function (e) {
                t.themeConfig = e, u.default.theme(e)
            }, t.extendMarkdown = u.default.extendMarkdown, t.hotkeys = [], t.hotkey = function (e) {
                t.hotkeys.push(e)
            }, t.mixins = [dt, ft, (e = t, {
                props: {
                    leftToolbar: {
                        type: String,
                        default: "undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save"
                    },
                    rightToolbar: {type: String, default: "preview toc sync-scroll fullscreen"},
                    toolbar: {
                        type: Object, default: function () {
                            return {}
                        }
                    },
                    disabledMenus: {
                        type: Array, default: function () {
                            return ["image/upload-image"]
                        }
                    }
                }, created: function () {
                    var t = this, n = e.toolbars;
                    this.toolbars = {}, Object.keys(n).forEach((function (e) {
                        t.registerToolbar(e, n[e])
                    })), Object.keys(this.toolbar).forEach((function (e) {
                        t.registerToolbar(e, t.toolbar[e])
                    }))
                }, methods: {
                    registerToolbar: function (t, e) {
                        l(this.toolbars, t, e)
                    }, handleToolbarItemClick: function (t) {
                        var e;
                        t.action && !(null == (e = t.menus) ? void 0 : e.length) && "function" == typeof t.action && t.action(this)
                    }, handleToolbarMenuClick: function (t) {
                        t.action && "function" == typeof t.action && t.action(this)
                    }
                }
            }), Ot(t), Mt(t), ht, Tt, jt, It, At, Ht, Wt.a]
        }

        r.a.add({
            "zh-CN": {
                undo: {toolbar: "撤销"},
                redo: {toolbar: "重做"},
                clear: {toolbar: "清空"},
                h: {toolbar: "标题"},
                h1: {toolbar: "一级标题", placeholder: "一级标题"},
                h2: {toolbar: "二级标题", placeholder: "二级标题"},
                h3: {toolbar: "三级标题", placeholder: "三级标题"},
                h4: {toolbar: "四级标题", placeholder: "四级标题"},
                h5: {toolbar: "五级标题", placeholder: "五级标题"},
                h6: {toolbar: "六级标题", placeholder: "六级标题"},
                bold: {toolbar: "粗体", placeholder: "粗体"},
                italic: {toolbar: "斜体", placeholder: "斜体"},
                strikethrough: {toolbar: "删除线", placeholder: "删除线"},
                quote: {toolbar: "插入引用", placeholder: "引用"},
                ul: {toolbar: "无序列表", placeholder: "无序列表"},
                ol: {toolbar: "有序列表", placeholder: "有序列表"},
                table: {toolbar: "表格"},
                hr: {toolbar: "插入分割线"},
                link: {toolbar: "插入链接", descPlaceholder: "链接"},
                image: {toolbar: "插入图片"},
                imageLink: {toolbar: "添加图片链接"},
                uploadImage: {toolbar: "上传本地图片"},
                code: {toolbar: "插入代码块"},
                save: {toolbar: "保存"},
                preview: {enabled: "开启预览", disabled: "关闭预览"},
                toc: {title: "目录导航", enabled: "开启目录导航", disabled: "关闭目录导航"},
                syncScroll: {enabled: "开启同步滚动", disabled: "关闭同步滚动"},
                fullscreen: {enabled: "全屏（按ESC还原）", disabled: "退出全屏"}
            }
        })
    }, function (t, e, n) {
        "use strict";
        var r = {
            48: 0,
            49: 1,
            50: 2,
            51: 3,
            52: 4,
            53: 5,
            54: 6,
            55: 7,
            56: 8,
            57: 9,
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12"
        }, i = {
            esc: ["Esc", "Escape"],
            tab: "Tab",
            enter: "Enter",
            space: [" ", "Spacebar"],
            up: ["Up", "ArrowUp"],
            left: ["Left", "ArrowLeft"],
            right: ["Right", "ArrowRight"],
            down: ["Down", "ArrowDown"],
            delete: ["Backspace", "Delete", "Del"]
        }, o = function () {
            function t() {
                this.hotkeys = {ctrl: {}, shift: {}, ctrlAlt: {}, ctrlShift: {}, keys: {}}
            }

            var e = t.prototype;
            return e.dispatch = function (t) {
                var e, n = this.getKeyName(t).toLowerCase();
                n && (this.isKeyEnterExact(t) ? e = this.hotkeys.keys[n] : this.isCtrlEnterExact(t) ? e = this.hotkeys.ctrl[n] : this.isShiftEnterExact(t) ? e = this.hotkeys.shift[n] : this.isCtrlAltEnterExact(t) ? e = this.hotkeys.ctrlAlt[n] : this.isCtrlShiftEnterExact(t) && (e = this.hotkeys.ctrlShift[n]), e && (t.preventDefault(), e(t)))
            }, e.isKeyEnterExact = function (t) {
                return !this.isCtrlEnter(t) && !this.isShiftEnter(t) && !this.isAltEnter(t)
            }, e.isCtrlShiftEnterExact = function (t) {
                return this.isCtrlEnter(t) && this.isShiftEnter(t) && !this.isAltEnter(t)
            }, e.isCtrlAltEnterExact = function (t) {
                return this.isCtrlEnter(t) && this.isAltEnter(t) && !this.isShiftEnter(t)
            }, e.isCtrlEnterExact = function (t) {
                return this.isCtrlEnter(t) && !this.isShiftEnter(t) && !this.isAltEnter(t)
            }, e.isShiftEnterExact = function (t) {
                return this.isShiftEnter(t) && !this.isCtrlEnter(t) && !this.isAltEnter(t)
            }, e.isCtrlEnter = function (t) {
                return t.ctrlKey || t.metaKey
            }, e.isShiftEnter = function (t) {
                return t.shiftKey
            }, e.isAltEnter = function (t) {
                return t.altKey
            }, e.registerHotkeys = function (t) {
                var e = t.modifier, n = t.key, r = t.action;
                e ? this.hotkeys[e][n] = r : this.hotkeys.keys[n] = r
            }, e.getKeyName = function (t) {
                var e = t.key, n = t.keyCode;
                return void 0 !== e ? Object.keys(i).find((function (t) {
                    var n = i[t];
                    return "string" == typeof n ? n === e : -1 !== n.indexOf(e)
                })) || e : r[n]
            }, t
        }();
        e.a = o
    }, , function (t, e, n) {
    }, function (t, e, n) {
        var r = {
            "./bold.js": 45,
            "./clear.js": 46,
            "./code.js": 47,
            "./fullscreen.js": 48,
            "./h1.js": 49,
            "./h2.js": 50,
            "./h3.js": 51,
            "./h4.js": 52,
            "./h5.js": 53,
            "./h6.js": 54,
            "./hr.js": 55,
            "./image.js": 56,
            "./italic.js": 57,
            "./link.js": 58,
            "./ol.js": 59,
            "./quote.js": 60,
            "./redo.js": 61,
            "./strikethrough.js": 62,
            "./sync-scroll.js": 63,
            "./table.js": 64,
            "./ul.js": 65,
            "./undo.js": 66
        };

        function i(t) {
            var e = o(t);
            return n(e)
        }

        function o(t) {
            if (!n.o(r, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return r[t]
        }

        i.keys = function () {
            return Object.keys(r)
        }, i.resolve = o, t.exports = i, i.id = 44
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.a
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.bold.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "**" + i(t) + "**"
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.b
        })), e.default = function (t) {
            t.clear()
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.c
        })), e.default = function (t) {
            t.insert((function (t) {
                var e = "``` language\n```";
                return t && (e = "``` language\n  " + t + "\n```"), {text: e, selected: "language"}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.d
        })), e.default = function (t, e) {
            t.toggleFullScreen(e)
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.e
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.h1.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "# " + i(t)
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.f
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.h2.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "## " + i(t)
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.g
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.h3.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "### " + i(t)
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.h
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.h4.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "#### " + i(t)
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.i
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.h5.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "##### " + i(t)
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.j
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.h6.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "###### " + i(t)
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.k
        })), e.default = function (t) {
            t.insert((function () {
                return {text: "------------------------------------"}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.l
        })), e.default = function (t, e) {
            var n = void 0 === e ? {} : e, r = n.url, i = n.desc, o = n.width, a = n.height;
            t.insert((function () {
                var t = "http://", e = "![" + (i || "Description") + "](" + (r || "http://") + ")", n = [];
                return o && n.push('width="' + o + '"'), a && n.push('height="' + a + '"'), n.length && (e += "{{{" + n.join(" ") + "}}}"), r && i ? t = null : r ? t = "Description" : i && (t = "http://"), {
                    text: e,
                    selected: t
                }
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.m
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.italic.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "*" + i(t) + "*"
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.n
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.link.descPlaceholder, i = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "[" + (t || n) + "](http://)"
                    }, selectedGetter: function (t) {
                        return t ? "http://" : n
                    }
                });
                return {text: i.insertContent, selected: i.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.o
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.ol.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t, e) {
                        return e + ". " + i(t)
                    }, selectedGetter: i, ignoreEmptyLine: !1
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.p
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = e || t.langConfig.quote.placeholder;
                return {text: "> " + n, selected: n}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.q
        })), e.default = function (t) {
            t.redo()
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.r
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.strikethrough.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "~~" + i(t) + "~~"
                    }, selectedGetter: i
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.s
        })), e.default = function (t, e) {
            t.toggleSyncScroll(e)
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.t
        })), e.default = function (t) {
            t.insert((function () {
                return {text: "|column1|column2|column3|\n|-|-|-|\n|content1|content2|content3|", selected: "column1"}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(1), i = n(0);
        n.d(e, "name", (function () {
            return i.u
        })), e.default = function (t) {
            t.insert((function (e) {
                var n = t.langConfig.ul.placeholder, i = function (t) {
                    return t || n
                }, o = Object(r.b)({
                    selected: e, InsertGetter: function (t) {
                        return "- " + i(t)
                    }, selectedGetter: i, ignoreEmptyLine: !1
                });
                return {text: o.insertContent, selected: o.newSelected}
            }))
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        n.d(e, "name", (function () {
            return r.v
        })), e.default = function (t) {
            t.undo()
        }
    }, function (t, e, n) {
        var r = {
            "./bold.js": 68,
            "./clear.js": 69,
            "./code.js": 70,
            "./fullscreen.js": 71,
            "./h.js": 72,
            "./hr.js": 73,
            "./image.js": 33,
            "./italic.js": 75,
            "./link.js": 76,
            "./ol.js": 77,
            "./preview.js": 78,
            "./quote.js": 79,
            "./redo.js": 80,
            "./save.js": 81,
            "./strikethrough.js": 82,
            "./sync-scroll.js": 83,
            "./table.js": 84,
            "./toc.js": 85,
            "./ul.js": 86,
            "./undo.js": 87
        };

        function i(t) {
            var e = o(t);
            return n(e)
        }

        function o(t) {
            if (!n.o(r, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return r[t]
        }

        i.keys = function () {
            return Object.keys(r)
        }, i.resolve = o, t.exports = i, i.id = 67
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.a, icon: "v-md-icon-bold", title: function (t) {
                return t.langConfig.bold.toolbar + "（Ctrl+B）"
            }, action: function (t) {
                t.execCommand(r.a)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.b, icon: "v-md-icon-clear", title: function (t) {
                return t.langConfig.clear.toolbar
            }, action: function (t) {
                t.execCommand(r.b)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.c, icon: "v-md-icon-code", title: function (t) {
                return t.langConfig.code.toolbar
            }, action: function (t) {
                t.execCommand(r.c)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.d, icon: "v-md-icon-fullscreen", title: function (t) {
                var e = t.langConfig.fullscreen;
                return t.fullscreen ? e.disabled : e.enabled
            }, active: function (t) {
                return t.fullscreen
            }, action: function (t) {
                t.execCommand(r.d, !t.fullscreen)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: "h", text: "H", title: function (t) {
                return t.langConfig.h.toolbar + "（Ctrl+1~6）"
            }, menus: [{
                name: r.e, text: function (t) {
                    return t.langConfig.h1.toolbar
                }, action: function (t) {
                    t.execCommand(r.e)
                }
            }, {
                name: r.f, text: function (t) {
                    return t.langConfig.h2.toolbar
                }, action: function (t) {
                    t.execCommand(r.f)
                }
            }, {
                name: r.g, text: function (t) {
                    return t.langConfig.h3.toolbar
                }, action: function (t) {
                    t.execCommand(r.g)
                }
            }, {
                name: r.h, text: function (t) {
                    return t.langConfig.h4.toolbar
                }, action: function (t) {
                    t.execCommand(r.h)
                }
            }, {
                name: r.i, text: function (t) {
                    return t.langConfig.h5.toolbar
                }, action: function (t) {
                    t.execCommand(r.i)
                }
            }, {
                name: r.j, text: function (t) {
                    return t.langConfig.h6.toolbar
                }, action: function (t) {
                    t.execCommand(r.j)
                }
            }]
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.k, icon: "v-md-icon-horizontal", title: function (t) {
                return t.langConfig.hr.toolbar
            }, action: function (t) {
                t.execCommand(r.k)
            }
        }
    }, function (t, e, n) {
        var r = function (t) {
            "use strict";
            var e = Object.prototype, n = e.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {},
                i = r.iterator || "@@iterator", o = r.asyncIterator || "@@asyncIterator",
                a = r.toStringTag || "@@toStringTag";

            function s(t, e, n, r) {
                var i = e && e.prototype instanceof u ? e : u, o = Object.create(i.prototype), a = new x(r || []);
                return o._invoke = function (t, e, n) {
                    var r = "suspendedStart";
                    return function (i, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i) throw o;
                            return k()
                        }
                        for (n.method = i, n.arg = o; ;) {
                            var a = n.delegate;
                            if (a) {
                                var s = w(a, n);
                                if (s) {
                                    if (s === l) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var u = c(t, e, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? "completed" : "suspendedYield", u.arg === l) continue;
                                return {value: u.arg, done: n.done}
                            }
                            "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(t, n, a), o
            }

            function c(t, e, n) {
                try {
                    return {type: "normal", arg: t.call(e, n)}
                } catch (t) {
                    return {type: "throw", arg: t}
                }
            }

            t.wrap = s;
            var l = {};

            function u() {
            }

            function d() {
            }

            function f() {
            }

            var h = {};
            h[i] = function () {
                return this
            };
            var m = Object.getPrototypeOf, p = m && m(m(C([])));
            p && p !== e && n.call(p, i) && (h = p);
            var v = f.prototype = u.prototype = Object.create(h);

            function g(t) {
                ["next", "throw", "return"].forEach((function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                }))
            }

            function b(t, e) {
                var r;
                this._invoke = function (i, o) {
                    function a() {
                        return new e((function (r, a) {
                            !function r(i, o, a, s) {
                                var l = c(t[i], t, o);
                                if ("throw" !== l.type) {
                                    var u = l.arg, d = u.value;
                                    return d && "object" == typeof d && n.call(d, "__await") ? e.resolve(d.__await).then((function (t) {
                                        r("next", t, a, s)
                                    }), (function (t) {
                                        r("throw", t, a, s)
                                    })) : e.resolve(d).then((function (t) {
                                        u.value = t, a(u)
                                    }), (function (t) {
                                        return r("throw", t, a, s)
                                    }))
                                }
                                s(l.arg)
                            }(i, o, r, a)
                        }))
                    }

                    return r = r ? r.then(a, a) : a()
                }
            }

            function w(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var r = c(n, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                var i = r.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
            }

            function y(t) {
                var e = {tryLoc: t[0]};
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function _(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function x(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(y, this), this.reset(!0)
            }

            function C(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (; ++r < t.length;) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                        return o.next = o
                    }
                }
                return {next: k}
            }

            function k() {
                return {value: void 0, done: !0}
            }

            return d.prototype = v.constructor = f, f.constructor = d, f[a] = d.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(v), t
            }, t.awrap = function (t) {
                return {__await: t}
            }, g(b.prototype), b.prototype[o] = function () {
                return this
            }, t.AsyncIterator = b, t.async = function (e, n, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new b(s(e, n, r, i), o);
                return t.isGeneratorFunction(n) ? a : a.next().then((function (t) {
                    return t.done ? t.value : a.next()
                }))
            }, g(v), v[a] = "Generator", v[i] = function () {
                return this
            }, v.toString = function () {
                return "[object Generator]"
            }, t.keys = function (t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(), function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
            }, t.values = C, x.prototype = {
                constructor: x, reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                }, dispatchException: function (t) {
                    if (this.done) throw t;
                    var e = this;

                    function r(n, r) {
                        return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                    }

                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i], a = o.completion;
                        if ("root" === o.tryLoc) return r("end");
                        if (o.tryLoc <= this.prev) {
                            var s = n.call(o, "catchLoc"), c = n.call(o, "finallyLoc");
                            if (s && c) {
                                if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(a)
                }, complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                }, finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), _(n), l
                    }
                }, catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                _(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (t, e, n) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), l
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = r
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.m, icon: "v-md-icon-italic", title: function (t) {
                return t.langConfig.italic.toolbar + "（Ctrl+I）"
            }, action: function (t) {
                t.execCommand(r.m)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.n, icon: "v-md-icon-link", title: function (t) {
                return t.langConfig.link.toolbar + "（Ctrl+L）"
            }, action: function (t) {
                t.execCommand(r.n)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.o, icon: "v-md-icon-ol", title: function (t) {
                return t.langConfig.ol.toolbar + "（Ctrl+O）"
            }, action: function (t) {
                t.execCommand(r.o)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(3);
        e.default = {
            name: "preview", icon: "v-md-icon-preview", title: function (t) {
                var e = t.langConfig.preview;
                return t.currentMode === r.a.EDITABLE ? e.disabled : e.enabled
            }, active: function (t) {
                return t.currentMode === r.a.EDITABLE
            }, action: function (t) {
                t.currentMode = t.currentMode === r.a.EDITABLE ? r.a.EDIT : r.a.EDITABLE
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.p, icon: "v-md-icon-quote", title: function (t) {
                return t.langConfig.quote.toolbar + "（Ctrl+Q）"
            }, action: function (t) {
                t.execCommand(r.p)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.q, icon: "v-md-icon-redo", title: function (t) {
                return t.langConfig.redo.toolbar + "（Ctrl+Y）"
            }, action: function (t) {
                t.execCommand(r.q)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e), e.default = {
            name: "save", icon: "v-md-icon-save", title: function (t) {
                return t.langConfig.save.toolbar + "（Ctrl+S）"
            }, action: function (t) {
                t.save()
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.r, icon: "v-md-icon-strikethrough", title: function (t) {
                return t.langConfig.strikethrough.toolbar
            }, action: function (t) {
                t.execCommand(r.r)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.s, icon: "v-md-icon-sync", title: function (t) {
                var e = t.langConfig.syncScroll;
                return t.enableSyncScroll ? e.disabled : e.enabled
            }, active: function (t) {
                return t.enableSyncScroll
            }, action: function (t) {
                t.execCommand(r.s, !t.enableSyncScroll)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.t, icon: "v-md-icon-table", title: function (t) {
                return t.langConfig.table.toolbar
            }, action: function (t) {
                t.execCommand(r.t)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e), e.default = {
            name: "toc", icon: "v-md-icon-toc", title: function (t) {
                var e = t.langConfig.toc;
                return t.tocVisible ? e.disabled : e.enabled
            }, active: function (t) {
                return t.tocVisible
            }, action: function (t) {
                t.toggleToc()
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.u, icon: "v-md-icon-ul", title: function (t) {
                return t.langConfig.ul.toolbar + "（Ctrl+U）"
            }, action: function (t) {
                t.execCommand(r.u)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            name: r.v, icon: "v-md-icon-undo", title: function (t) {
                return t.langConfig.undo.toolbar + "（Ctrl+Z）"
            }, action: function (t) {
                t.execCommand(r.v)
            }
        }
    }, function (t, e, n) {
    }, function (t, e, n) {
        "use strict";
        var r = n(20);
        n.n(r).a
    }, function (t, e, n) {
        "use strict";
        var r = n(21);
        n.n(r).a
    }, function (t, e, n) {
        "use strict";
        var r = n(22);
        n.n(r).a
    }, function (t, e, n) {
        "use strict";
        var r = n(23);
        n.n(r).a
    }, function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function (t, e, n) {
        "use strict";
        var r = n(24);
        n.n(r).a
    }, function (t, e, n) {
        "use strict";
        var r = n(25);
        n.n(r).a
    }, function (t, e, n) {
        "use strict";
        var r = n(26);
        n.n(r).a
    }, function (t, e, n) {
        var r = {
            "./bold.js": 98,
            "./h1.js": 99,
            "./h2.js": 100,
            "./h3.js": 101,
            "./h4.js": 102,
            "./h5.js": 103,
            "./h6.js": 104,
            "./italic.js": 105,
            "./link.js": 106,
            "./ol.js": 107,
            "./quote.js": 108,
            "./save.js": 109,
            "./ul.js": 110
        };

        function i(t) {
            var e = o(t);
            return n(e)
        }

        function o(t) {
            if (!n.o(r, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return r[t]
        }

        i.keys = function () {
            return Object.keys(r)
        }, i.resolve = o, t.exports = i, i.id = 97
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "b", action: function (t) {
                t.execCommand(r.a)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "1", action: function (t) {
                t.execCommand(r.e)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "2", action: function (t) {
                t.execCommand(r.f)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "3", action: function (t) {
                t.execCommand(r.g)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "4", action: function (t) {
                t.execCommand(r.h)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "5", action: function (t) {
                t.execCommand(r.i)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "6", action: function (t) {
                t.execCommand(r.j)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "i", action: function (t) {
                t.execCommand(r.m)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "l", action: function (t) {
                t.execCommand(r.n)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "o", action: function (t) {
                t.execCommand(r.o)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "q", action: function (t) {
                t.execCommand(r.p)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e), e.default = {
            modifier: "ctrl", key: "s", action: function (t) {
                t.save()
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0);
        e.default = {
            modifier: "ctrl", key: "u", action: function (t) {
                t.execCommand(r.u)
            }
        }
    }, , function (t, e, n) {
        "use strict";
        var r = n(43);
        n.n(r).a
    }, , function (t, e, n) {
        "use strict";
        n.r(e);
        var r = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-md-container", {
                ref: "contaner",
                attrs: {
                    "left-toolbar": t.leftToolbar,
                    "right-toolbar": t.rightToolbar,
                    toolbars: t.toolbars,
                    "disabled-menus": t.disabledMenus,
                    height: t.height,
                    fullscreen: t.fullscreen,
                    "left-area-visible": t.tocVisible,
                    "left-area-title": t.langConfig.toc.title,
                    mode: t.currentMode
                },
                on: {
                    "toolbar-item-click": t.handleToolbarItemClick,
                    "toolbar-menu-click": t.handleToolbarMenuClick,
                    resize: t.handleContainerResize
                }
            }, [n("scrollbar", {
                attrs: {slot: "left-area"},
                slot: "left-area"
            }, [n("toc-nav", {
                attrs: {titles: t.titles},
                on: {"nav-click": t.handleNavClick}
            })], 1), n("div", {
                ref: "codemirrorEditor",
                staticClass: "codemirror-wrapper",
                class: {"codemirror-reset": t.codemirrorStyleReset},
                attrs: {slot: "editor"},
                slot: "editor"
            }), n("scrollbar", {
                ref: "previewScroller",
                attrs: {slot: "preview"},
                slot: "preview"
            }, [n("v-md-preview", {
                ref: "preview",
                attrs: {text: t.text, "scroll-container": t.getPreviewScrollContainer},
                on: {change: t.handleChange}
            })], 1), t.hasUploadImage ? n("v-md-upload-file", {
                ref: "uploadFile",
                attrs: {"upload-config": t.uploadConfig}
            }) : t._e()], 1)
        };
        r._withStripped = !0;
        var i = n(4), o = n(40), a = n(12), s = n(41), c = {
            props: {codemirrorConfig: Object, codemirrorStyleReset: {type: Boolean, default: !0}},
            watch: {
                value: function () {
                    this.value !== this.text && (this.text = this.value, this.codemirrorInstance.setValue(this.text))
                }
            },
            created: function () {
                this.hotkeysManager = new s.a
            },
            computed: {
                Codemirror: function () {
                    return this.$options.Codemirror
                }
            },
            mounted: function () {
                var t = this;
                if (!this.Codemirror) return console.error("1.5.0与2.1.0版本之后Codemirror将由用户自己配置，请配置Codemirror，如何配置请参考相关文档");
                this.codemirrorInstance = new this.Codemirror(this.$refs.codemirrorEditor, Object(i.a)({
                    tabSize: 2,
                    lineNumbers: !0,
                    styleActiveLine: !0,
                    value: this.text,
                    placeholder: this.placeholder,
                    mode: "markdown",
                    lineWrapping: "wrap",
                    scrollbarStyle: "overlay"
                }, this.codemirrorConfig)), this.codemirrorInstance.on("change", (function () {
                    var e = t.getValue();
                    t.handleInput(e)
                })), this.codemirrorInstance.on("scroll", (function () {
                    t.handleEditorScroll()
                })), this.codemirrorInstance.on("keydown", (function (e, n) {
                    t.hotkeysManager.dispatch(n)
                })), this.codemirrorInstance.on("drop", (function (e, n) {
                    t.handleDrop(n)
                })), this.codemirrorInstance.on("paste", (function (e, n) {
                    t.handlePaste(n)
                }))
            },
            beforeDestory: function () {
                var t = this.codemirrorInstance.doc.cm.getWrapperElement();
                null == t || null == t.remove || t.remove()
            },
            methods: {
                handleContainerResize: function () {
                    this.Codemirror && this.codemirrorInstance.refresh()
                }, getValue: function () {
                    return this.codemirrorInstance.getValue()
                }, getIndexInInterval: function (t, e, n) {
                    if (e <= t && t <= n) return t - e
                }, delLineLeft: function () {
                    this.codemirrorInstance.execCommand("delLineLeft")
                }, getCursorLineLeftText: function () {
                    var t = this.codemirrorInstance, e = t.getCursor("from"), n = e.line, r = e.ch,
                        i = t.getCursor("to"), o = i.line, a = i.ch;
                    if (n === o && r === a) return t.getLine(n).slice(0, r)
                }, editorRegisterHotkeys: function () {
                    var t;
                    (t = this.hotkeysManager).registerHotkeys.apply(t, arguments)
                }, editorScrollToTop: function (t) {
                    var e = this, n = this.getScrollInfo().top;
                    Object(a.b)({
                        currentScrollTop: n, scrollToTop: t, scrollFn: function (t) {
                            return e.codemirrorInstance.scrollTo(0, t)
                        }
                    })
                }, getScrollInfo: function () {
                    return this.codemirrorInstance.getScrollInfo()
                }, heightAtLine: function () {
                    var t;
                    return (t = this.codemirrorInstance).heightAtLine.apply(t, arguments)
                }, focus: function () {
                    this.codemirrorInstance.focus()
                }, undo: function () {
                    this.codemirrorInstance.undo()
                }, redo: function () {
                    this.codemirrorInstance.redo()
                }, clear: function () {
                    this.codemirrorInstance.setValue("")
                }, editorFocusEnd: function () {
                    this.focus();
                    var t = this.codemirrorInstance.lastLine(), e = this.codemirrorInstance.getLine(t);
                    this.codemirrorInstance.setCursor({line: t, ch: e.length})
                }, replaceSelectionText: function (t, e) {
                    void 0 === e && (e = "around"), this.codemirrorInstance.replaceSelection(t, e)
                }, changeSelctionTo: function (t, e) {
                    var n = this, r = this.codemirrorInstance.getCursor("from"),
                        i = this.codemirrorInstance.getCursor("to");
                    if (e) {
                        var o = this.text.split("\n").slice(r.line, i.line + 1), a = o.join("\n").indexOf(e, r.ch),
                            s = a + e.length, c = {line: 0, ch: null, indexOfSelected: a},
                            l = {line: 0, ch: null, indexOfSelected: s}, u = 0;
                        o.find((function (t, e) {
                            var i = t.length;
                            return [c, l].forEach((function (t) {
                                var o = n.getIndexInInterval(t.indexOfSelected, u, u + i);
                                void 0 !== o && (t.ch = o, t.line = r.line + e)
                            })), u += i + 1, null !== c.ch && null !== l.ch
                        })), this.codemirrorInstance.setSelection(l, c)
                    } else this.codemirrorInstance.setSelection(i)
                }, getCurrentSelectedStr: function () {
                    return this.codemirrorInstance.getSelection()
                }
            }
        };
        Object(o.a)(c);
        var l = c, u = (n(112), n(2)), d = Object(u.a)(l, r, [], !1, null, null, null);
        d.options.__file = "src/codemirror-editor.vue";
        var f = d.exports, h = n(6), m = n(8), p = (n(32), function (t) {
            t.component(f.name, f)
        });
        f.version = "1.5.3", f.install = p, f.xss = h.a, f.lang = m.a, f.use = function (t, e) {
            return "function" == typeof t ? t(f, e) : t.install(f, e), f
        }, "undefined" != typeof window && window.Vue && p(window.Vue);
        e.default = f
    }]).default
}));
