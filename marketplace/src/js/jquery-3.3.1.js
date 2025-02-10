/* eslint-disable */

import $ from "jquery";
import "bootstrap";

void (function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {};

  function g(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  }

  function y(e) {
    return null != e && e === e.window;
  }

  var v = { type: !0, src: !0, noModule: !0 };

  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }

  var b = "3.3.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    };

  // Ajout des définitions de jQuery
  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function () {
      return o.call(this);
    },
    get: function (e) {
      return null == e
        ? o.call(this)
        : e < 0
        ? this[e + this.length]
        : this[e];
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        w.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice,
  };

  // Extension de jQuery
  w.extend = w.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;

    for (
      "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
        "object" == typeof a || g(a) || (a = {}),
        s === u && ((a = this), s--);
      s < u;
      s++
    )
      if (null != (e = arguments[s]))
        for (t in e)
          (n = a[t]),
            a !== (r = e[t]) &&
              (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                ? (i
                    ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                    : (o = n && w.isPlainObject(n) ? n : {}),
                  (a[t] = w.extend(l, o, r)))
                : void 0 !== r && (a[t] = r));

    return a;
  };

  w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return (
        !(!e || "[object Object]" !== c.call(e)) &&
        (!(t = i(e)) ||
          ("function" ==
            typeof (n = f.call(t, "constructor") && t.constructor) &&
            p.call(n) === d))
      );
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function (e) {
      m(e);
    },
  });

  // Ajout d'une compatibilité avec Symbol
  "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]);

  w.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " "
    ),
    function (e, t) {
      l["[object " + t + "]"] = t.toLowerCase();
    }
  );

  return w;
});
