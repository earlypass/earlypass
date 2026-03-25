var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a3, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a3, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a3, prop, b[prop]);
    }
  return a3;
};
var __spreadProps = (a3, b) => __defProps(a3, __getOwnPropDescs(b));

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n3, l3) {
  for (var u3 in l3) n3[u3] = l3[u3];
  return n3;
}
function g(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function _(l3, u3, t4) {
  var i3, r3, o3, e3 = {};
  for (o3 in u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : e3[o3] = u3[o3];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
  return m(l3, e3, i3, r3, null);
}
function m(n3, t4, i3, r3, o3) {
  var e3 = { type: n3, props: t4, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e3), e3;
}
function k(n3) {
  return n3.children;
}
function x(n3, l3) {
  this.props = n3, this.context = l3;
}
function S(n3, l3) {
  if (null == l3) return n3.__ ? S(n3.__, n3.__i + 1) : null;
  for (var u3; l3 < n3.__k.length; l3++) if (null != (u3 = n3.__k[l3]) && null != u3.__e) return u3.__e;
  return "function" == typeof n3.type ? S(n3) : null;
}
function C(n3) {
  if (n3.__P && n3.__d) {
    var u3 = n3.__v, t4 = u3.__e, i3 = [], r3 = [], o3 = w({}, u3);
    o3.__v = u3.__v + 1, l.vnode && l.vnode(o3), z(n3.__P, o3, u3, n3.__n, n3.__P.namespaceURI, 32 & u3.__u ? [t4] : null, i3, null == t4 ? S(u3) : t4, !!(32 & u3.__u), r3), o3.__v = u3.__v, o3.__.__k[o3.__i] = o3, V(i3, o3, r3), u3.__e = u3.__ = null, o3.__e != t4 && M(o3);
  }
}
function M(n3) {
  if (null != (n3 = n3.__) && null != n3.__c) return n3.__e = n3.__c.base = null, n3.__k.some(function(l3) {
    if (null != l3 && null != l3.__e) return n3.__e = n3.__c.base = l3.__e;
  }), M(n3);
}
function $(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !I.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(I);
}
function I() {
  try {
    for (var n3, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n3 = i.shift(), l3 = i.length, C(n3);
  } finally {
    i.length = I.__r = 0;
  }
}
function P(n3, l3, u3, t4, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, y3, d3, w3, g2, _3, m4 = t4 && t4.__k || v, b = l3.length;
  for (f3 = A(u3, l3, m4, f3, b), a3 = 0; a3 < b; a3++) null != (y3 = u3.__k[a3]) && (h3 = -1 != y3.__i && m4[y3.__i] || p, y3.__i = a3, g2 = z(n3, y3, h3, i3, r3, o3, e3, f3, c3, s3), d3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && D(h3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), (_3 = !!(4 & y3.__u)) || h3.__k === y3.__k ? f3 = H(y3, f3, n3, _3) : "function" == typeof y3.type && void 0 !== g2 ? f3 = g2 : d3 && (f3 = d3.nextSibling), y3.__u &= -7);
  return u3.__e = w3, f3;
}
function A(n3, l3, u3, t4, i3) {
  var r3, o3, e3, f3, c3, s3 = u3.length, a3 = s3, h3 = 0;
  for (n3.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? ("string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? o3 = n3.__k[r3] = m(null, o3, null, null, null) : d(o3) ? o3 = n3.__k[r3] = m(k, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? o3 = n3.__k[r3] = m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : n3.__k[r3] = o3, f3 = r3 + h3, o3.__ = n3, o3.__b = n3.__b + 1, e3 = null, -1 != (c3 = o3.__i = T(o3, u3, f3, a3)) && (a3--, (e3 = u3[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, o3.__u |= 4))) : n3.__k[r3] = null;
  if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u3[r3]) && 0 == (2 & e3.__u) && (e3.__e == t4 && (t4 = S(e3)), E(e3, e3));
  return t4;
}
function H(n3, l3, u3, t4) {
  var i3, r3;
  if ("function" == typeof n3.type) {
    for (i3 = n3.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n3, l3 = H(i3[r3], l3, u3, t4));
    return l3;
  }
  n3.__e != l3 && (t4 && (l3 && n3.type && !l3.parentNode && (l3 = S(n3)), u3.insertBefore(n3.__e, l3 || null)), l3 = n3.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function T(n3, l3, u3, t4) {
  var i3, r3, o3, e3 = n3.key, f3 = n3.type, c3 = l3[u3], s3 = null != c3 && 0 == (2 & c3.__u);
  if (null === c3 && null == e3 || s3 && e3 == c3.key && f3 == c3.type) return u3;
  if (t4 > (s3 ? 1 : 0)) {
    for (i3 = u3 - 1, r3 = u3 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f3 == c3.type) return o3;
  }
  return -1;
}
function j(n3, l3, u3) {
  "-" == l3[0] ? n3.setProperty(l3, null == u3 ? "" : u3) : n3[l3] = null == u3 ? "" : "number" != typeof u3 || y.test(l3) ? u3 : u3 + "px";
}
function F(n3, l3, u3, t4, i3) {
  var r3, o3;
  n: if ("style" == l3) if ("string" == typeof u3) n3.style.cssText = u3;
  else {
    if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l3 in t4) u3 && l3 in u3 || j(n3.style, l3, "");
    if (u3) for (l3 in u3) t4 && u3[l3] == t4[l3] || j(n3.style, l3, u3[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n3 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + r3] = u3, u3 ? t4 ? u3.u = t4.u : (u3.u = c, n3.addEventListener(l3, r3 ? a : s, r3)) : n3.removeEventListener(l3, r3 ? a : s, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n3) try {
      n3[l3] = null == u3 ? "" : u3;
      break n;
    } catch (n4) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l3[4] ? n3.removeAttribute(l3) : n3.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
  }
}
function O(n3) {
  return function(u3) {
    if (this.l) {
      var t4 = this.l[u3.type + n3];
      if (null == u3.t) u3.t = c++;
      else if (u3.t < t4.u) return;
      return t4(l.event ? l.event(u3) : u3);
    }
  };
}
function z(n3, u3, t4, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, p3, y3, _3, m4, b, S2, C3, M3, $2, I2, A3, H2, L, T3 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t4.__u && (c3 = !!(32 & t4.__u), o3 = [f3 = u3.__e = t4.__e]), (a3 = l.__b) && a3(u3);
  n: if ("function" == typeof T3) try {
    if (S2 = u3.props, C3 = T3.prototype && T3.prototype.render, M3 = (a3 = T3.contextType) && i3[a3.__c], $2 = a3 ? M3 ? M3.props.value : a3.__ : i3, t4.__c ? b = (h3 = u3.__c = t4.__c).__ = h3.__E : (C3 ? u3.__c = h3 = new T3(S2, $2) : (u3.__c = h3 = new x(S2, $2), h3.constructor = T3, h3.render = G), M3 && M3.sub(h3), h3.state || (h3.state = {}), h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), C3 && null == h3.__s && (h3.__s = h3.state), C3 && null != T3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, T3.getDerivedStateFromProps(S2, h3.__s))), y3 = h3.props, _3 = h3.state, h3.__v = u3, p3) C3 && null == T3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), C3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (C3 && null == T3.getDerivedStateFromProps && S2 !== y3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(S2, $2), u3.__v == t4.__v || !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(S2, h3.__s, $2)) {
        u3.__v != t4.__v && (h3.props = S2, h3.state = h3.__s, h3.__d = false), u3.__e = t4.__e, u3.__k = t4.__k, u3.__k.some(function(n4) {
          n4 && (n4.__ = u3);
        }), v.push.apply(h3.__h, h3._sb), h3._sb = [], h3.__h.length && e3.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(S2, h3.__s, $2), C3 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(y3, _3, m4);
      });
    }
    if (h3.context = $2, h3.props = S2, h3.__P = n3, h3.__e = false, I2 = l.__r, A3 = 0, C3) h3.state = h3.__s, h3.__d = false, I2 && I2(u3), a3 = h3.render(h3.props, h3.state, h3.context), v.push.apply(h3.__h, h3._sb), h3._sb = [];
    else do {
      h3.__d = false, I2 && I2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A3 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i3 = w(w({}, i3), h3.getChildContext())), C3 && !p3 && null != h3.getSnapshotBeforeUpdate && (m4 = h3.getSnapshotBeforeUpdate(y3, _3)), H2 = null != a3 && a3.type === k && null == a3.key ? q(a3.props.children) : a3, f3 = P(n3, d(H2) ? H2 : [H2], u3, t4, i3, r3, o3, e3, f3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && e3.push(h3), b && (h3.__E = h3.__ = null);
  } catch (n4) {
    if (u3.__v = null, c3 || null != o3) if (n4.then) {
      for (u3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
      o3[o3.indexOf(f3)] = null, u3.__e = f3;
    } else {
      for (L = o3.length; L--; ) g(o3[L]);
      N(u3);
    }
    else u3.__e = t4.__e, u3.__k = t4.__k, n4.then || N(u3);
    l.__e(n4, u3, t4);
  }
  else null == o3 && u3.__v == t4.__v ? (u3.__k = t4.__k, u3.__e = t4.__e) : f3 = u3.__e = B(t4.__e, u3, t4, i3, r3, o3, e3, c3, s3);
  return (a3 = l.diffed) && a3(u3), 128 & u3.__u ? void 0 : f3;
}
function N(n3) {
  n3 && (n3.__c && (n3.__c.__e = true), n3.__k && n3.__k.some(N));
}
function V(n3, u3, t4) {
  for (var i3 = 0; i3 < t4.length; i3++) D(t4[i3], t4[++i3], t4[++i3]);
  l.__c && l.__c(u3, n3), n3.some(function(u4) {
    try {
      n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
        n4.call(u4);
      });
    } catch (n4) {
      l.__e(n4, u4.__v);
    }
  });
}
function q(n3) {
  return "object" != typeof n3 || null == n3 || n3.__b > 0 ? n3 : d(n3) ? n3.map(q) : w({}, n3);
}
function B(u3, t4, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, v3, y3, w3, _3, m4, b = i3.props || p, k3 = t4.props, x2 = t4.type;
  if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (a3 = 0; a3 < e3.length; a3++) if ((w3 = e3[a3]) && "setAttribute" in w3 == !!x2 && (x2 ? w3.localName == x2 : 3 == w3.nodeType)) {
      u3 = w3, e3[a3] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x2) return document.createTextNode(k3);
    u3 = document.createElementNS(o3, x2, k3.is && k3), c3 && (l.__m && l.__m(t4, e3), c3 = false), e3 = null;
  }
  if (null == x2) b === k3 || c3 && u3.data == k3 || (u3.data = k3);
  else {
    if (e3 = e3 && n.call(u3.childNodes), !c3 && null != e3) for (b = {}, a3 = 0; a3 < u3.attributes.length; a3++) b[(w3 = u3.attributes[a3]).name] = w3.value;
    for (a3 in b) w3 = b[a3], "dangerouslySetInnerHTML" == a3 ? v3 = w3 : "children" == a3 || a3 in k3 || "value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3 || F(u3, a3, null, w3, o3);
    for (a3 in k3) w3 = k3[a3], "children" == a3 ? y3 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? _3 = w3 : "checked" == a3 ? m4 = w3 : c3 && "function" != typeof w3 || b[a3] === w3 || F(u3, a3, w3, b[a3], o3);
    if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t4.__k = [];
    else if (v3 && (u3.innerHTML = ""), P("template" == t4.type ? u3.content : u3, d(y3) ? y3 : [y3], t4, i3, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e3, f3, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
    c3 || (a3 = "value", "progress" == x2 && null == _3 ? u3.removeAttribute("value") : null != _3 && (_3 !== u3[a3] || "progress" == x2 && !_3 || "option" == x2 && _3 != b[a3]) && F(u3, a3, _3, b[a3], o3), a3 = "checked", null != m4 && m4 != u3[a3] && F(u3, a3, m4, b[a3], o3));
  }
  return u3;
}
function D(n3, u3, t4) {
  try {
    if ("function" == typeof n3) {
      var i3 = "function" == typeof n3.__u;
      i3 && n3.__u(), i3 && null == u3 || (n3.__u = n3(u3));
    } else n3.current = u3;
  } catch (n4) {
    l.__e(n4, t4);
  }
}
function E(n3, u3, t4) {
  var i3, r3;
  if (l.unmount && l.unmount(n3), (i3 = n3.ref) && (i3.current && i3.current != n3.__e || D(i3, null, u3)), null != (i3 = n3.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n4) {
      l.__e(n4, u3);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n3.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && E(i3[r3], u3, t4 || "function" != typeof n3.type);
  t4 || g(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
function G(n3, l3, u3) {
  return this.constructor(n3, u3);
}
function J(u3, t4, i3) {
  var r3, o3, e3, f3;
  t4 == document && (t4 = document.documentElement), l.__ && l.__(u3, t4), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t4.__k, e3 = [], f3 = [], z(t4, u3 = (!r3 && i3 || t4).__k = _(k, null, [u3]), o3 || p, p, t4.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t4.firstChild, r3, f3), V(e3, u3, f3);
}
n = v.slice, l = { __e: function(n3, l3, u3, t4) {
  for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
    if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n3)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n3, t4 || {}), o3 = i3.__d), o3) return i3.__E = i3;
  } catch (l4) {
    n3 = l4;
  }
  throw n3;
} }, u = 0, t = function(n3) {
  return null != n3 && void 0 === n3.constructor;
}, x.prototype.setState = function(n3, l3) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n3 && (n3 = n3(w({}, u3), this.props)), n3 && w(u3, n3), null != n3 && this.__v && (l3 && this._sb.push(l3), $(this));
}, x.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), $(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l3) {
  return n3.__v.__b - l3.__v.__b;
}, I.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n3, t4) {
  c2.__h && c2.__h(r2, n3, o2 || t4), o2 = 0;
  var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n3 >= u3.__.length && u3.__.push({}), u3.__[n3];
}
function d2(n3) {
  return o2 = 1, h2(D2, n3);
}
function h2(n3, u3, i3) {
  var o3 = p2(t2++, 2);
  if (o3.t = n3, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n4) {
    var t4 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t4, n4);
    t4 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f3 = function(n4, t4, r3) {
      if (!o3.__c.__H) return true;
      var u4 = o3.__c.__H.__.filter(function(n5) {
        return n5.__c;
      });
      if (u4.every(function(n5) {
        return !n5.__N;
      })) return !c3 || c3.call(this, n4, t4, r3);
      var i4 = o3.__c.props !== n4;
      return u4.some(function(n5) {
        if (n5.__N) {
          var t5 = n5.__[0];
          n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i4 = true);
        }
      }), c3 && c3.call(this, n4, t4, r3) || i4;
    };
    r2.__f = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n4, t4, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n4, t4, r3), c3 = u4;
      }
      e3 && e3.call(this, n4, t4, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function y2(n3, u3) {
  var i3 = p2(t2++, 3);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n3, i3.u = u3, r2.__H.__h.push(i3));
}
function A2(n3) {
  return o2 = 5, T2(function() {
    return { current: n3 };
  }, []);
}
function T2(n3, r3) {
  var u3 = p2(t2++, 7);
  return C2(u3.__H, r3) && (u3.__ = n3(), u3.__H = r3, u3.__h = n3), u3.__;
}
function q2(n3, t4) {
  return o2 = 8, T2(function() {
    return n3;
  }, t4);
}
function j2() {
  for (var n3; n3 = f2.shift(); ) {
    var t4 = n3.__H;
    if (n3.__P && t4) try {
      t4.__h.some(z2), t4.__h.some(B2), t4.__h = [];
    } catch (r3) {
      t4.__h = [], c2.__e(r3, n3.__v);
    }
  }
}
c2.__b = function(n3) {
  r2 = null, e2 && e2(n3);
}, c2.__ = function(n3, t4) {
  n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), s2 && s2(n3, t4);
}, c2.__r = function(n3) {
  a2 && a2(n3), t2 = 0;
  var i3 = (r2 = n3.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n4) {
    n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
  })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n3) {
  v2 && v2(n3);
  var t4 = n3.__c;
  t4 && t4.__H && (t4.__H.__h.length && (1 !== f2.push(t4) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.some(function(n4) {
    n4.u && (n4.__H = n4.u), n4.u = void 0;
  })), u2 = r2 = null;
}, c2.__c = function(n3, t4) {
  t4.some(function(n4) {
    try {
      n4.__h.some(z2), n4.__h = n4.__h.filter(function(n5) {
        return !n5.__ || B2(n5);
      });
    } catch (r3) {
      t4.some(function(n5) {
        n5.__h && (n5.__h = []);
      }), t4 = [], c2.__e(r3, n4.__v);
    }
  }), l2 && l2(n3, t4);
}, c2.unmount = function(n3) {
  m2 && m2(n3);
  var t4, r3 = n3.__c;
  r3 && r3.__H && (r3.__H.__.some(function(n4) {
    try {
      z2(n4);
    } catch (n5) {
      t4 = n5;
    }
  }), r3.__H = void 0, t4 && c2.__e(t4, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n3) {
  var t4, r3 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t4), setTimeout(n3);
  }, u3 = setTimeout(r3, 35);
  k2 && (t4 = requestAnimationFrame(r3));
}
function z2(n3) {
  var t4 = r2, u3 = n3.__c;
  "function" == typeof u3 && (n3.__c = void 0, u3()), r2 = t4;
}
function B2(n3) {
  var t4 = r2;
  n3.__c = n3.__(), r2 = t4;
}
function C2(n3, t4) {
  return !n3 || n3.length !== t4.length || t4.some(function(t5, r3) {
    return t5 !== n3[r3];
  });
}
function D2(n3, t4) {
  return "function" == typeof t4 ? t4(n3) : t4;
}

// node_modules/htm/dist/htm.module.js
var n2 = function(t4, s3, r3, e3) {
  var u3;
  s3[0] = 0;
  for (var h3 = 1; h3 < s3.length; h3++) {
    var p3 = s3[h3++], a3 = s3[h3] ? (s3[0] |= p3 ? 1 : 2, r3[s3[h3++]]) : s3[++h3];
    3 === p3 ? e3[0] = a3 : 4 === p3 ? e3[1] = Object.assign(e3[1] || {}, a3) : 5 === p3 ? (e3[1] = e3[1] || {})[s3[++h3]] = a3 : 6 === p3 ? e3[1][s3[++h3]] += a3 + "" : p3 ? (u3 = t4.apply(a3, n2(t4, a3, r3, ["", null])), e3.push(u3), a3[0] ? s3[0] |= 2 : (s3[h3 - 2] = 0, s3[h3] = u3)) : e3.push(a3);
  }
  return e3;
};
var t3 = /* @__PURE__ */ new Map();
function htm_module_default(s3) {
  var r3 = t3.get(this);
  return r3 || (r3 = /* @__PURE__ */ new Map(), t3.set(this, r3)), (r3 = n2(this, r3.get(s3) || (r3.set(s3, r3 = (function(n3) {
    for (var t4, s4, r4 = 1, e3 = "", u3 = "", h3 = [0], p3 = function(n4) {
      1 === r4 && (n4 || (e3 = e3.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n4, e3) : 3 === r4 && (n4 || e3) ? (h3.push(3, n4, e3), r4 = 2) : 2 === r4 && "..." === e3 && n4 ? h3.push(4, n4, 0) : 2 === r4 && e3 && !n4 ? h3.push(5, 0, true, e3) : r4 >= 5 && ((e3 || !n4 && 5 === r4) && (h3.push(r4, 0, e3, s4), r4 = 6), n4 && (h3.push(r4, n4, 0, s4), r4 = 6)), e3 = "";
    }, a3 = 0; a3 < n3.length; a3++) {
      a3 && (1 === r4 && p3(), p3(a3));
      for (var l3 = 0; l3 < n3[a3].length; l3++) t4 = n3[a3][l3], 1 === r4 ? "<" === t4 ? (p3(), h3 = [h3], r4 = 3) : e3 += t4 : 4 === r4 ? "--" === e3 && ">" === t4 ? (r4 = 1, e3 = "") : e3 = t4 + e3[0] : u3 ? t4 === u3 ? u3 = "" : e3 += t4 : '"' === t4 || "'" === t4 ? u3 = t4 : ">" === t4 ? (p3(), r4 = 1) : r4 && ("=" === t4 ? (r4 = 5, s4 = e3, e3 = "") : "/" === t4 && (r4 < 5 || ">" === n3[a3][l3 + 1]) ? (p3(), 3 === r4 && (h3 = h3[0]), r4 = h3, (h3 = h3[0]).push(2, 0, r4), r4 = 0) : " " === t4 || "	" === t4 || "\n" === t4 || "\r" === t4 ? (p3(), r4 = 2) : e3 += t4), 3 === r4 && "!--" === e3 && (r4 = 4, h3 = h3[0]);
    }
    return p3(), h3;
  })(s3)), r3), arguments, [])).length > 1 ? r3 : r3[0];
}

// node_modules/htm/preact/index.module.js
var m3 = htm_module_default.bind(_);

// node_modules/uplot/dist/uPlot.esm.js
var FEAT_TIME = true;
var pre = "u-";
var UPLOT = "uplot";
var ORI_HZ = pre + "hz";
var ORI_VT = pre + "vt";
var TITLE = pre + "title";
var WRAP = pre + "wrap";
var UNDER = pre + "under";
var OVER = pre + "over";
var AXIS = pre + "axis";
var OFF = pre + "off";
var SELECT = pre + "select";
var CURSOR_X = pre + "cursor-x";
var CURSOR_Y = pre + "cursor-y";
var CURSOR_PT = pre + "cursor-pt";
var LEGEND = pre + "legend";
var LEGEND_LIVE = pre + "live";
var LEGEND_INLINE = pre + "inline";
var LEGEND_SERIES = pre + "series";
var LEGEND_MARKER = pre + "marker";
var LEGEND_LABEL = pre + "label";
var LEGEND_VALUE = pre + "value";
var WIDTH = "width";
var HEIGHT = "height";
var TOP = "top";
var BOTTOM = "bottom";
var LEFT = "left";
var RIGHT = "right";
var hexBlack = "#000";
var transparent = hexBlack + "0";
var mousemove = "mousemove";
var mousedown = "mousedown";
var mouseup = "mouseup";
var mouseenter = "mouseenter";
var mouseleave = "mouseleave";
var dblclick = "dblclick";
var resize = "resize";
var scroll = "scroll";
var change = "change";
var dppxchange = "dppxchange";
var LEGEND_DISP = "--";
var domEnv = typeof window != "undefined";
var doc = domEnv ? document : null;
var win = domEnv ? window : null;
var nav = domEnv ? navigator : null;
var pxRatio;
var query;
function setPxRatio() {
  let _pxRatio = devicePixelRatio;
  if (pxRatio != _pxRatio) {
    pxRatio = _pxRatio;
    query && off(change, query, setPxRatio);
    query = matchMedia(`(min-resolution: ${pxRatio - 1e-3}dppx) and (max-resolution: ${pxRatio + 1e-3}dppx)`);
    on(change, query, setPxRatio);
    win.dispatchEvent(new CustomEvent(dppxchange));
  }
}
function addClass(el, c3) {
  if (c3 != null) {
    let cl = el.classList;
    !cl.contains(c3) && cl.add(c3);
  }
}
function remClass(el, c3) {
  let cl = el.classList;
  cl.contains(c3) && cl.remove(c3);
}
function setStylePx(el, name, value) {
  el.style[name] = value + "px";
}
function placeTag(tag, cls, targ, refEl) {
  let el = doc.createElement(tag);
  if (cls != null)
    addClass(el, cls);
  if (targ != null)
    targ.insertBefore(el, refEl);
  return el;
}
function placeDiv(cls, targ) {
  return placeTag("div", cls, targ);
}
var xformCache = /* @__PURE__ */ new WeakMap();
function elTrans(el, xPos, yPos, xMax, yMax) {
  let xform = "translate(" + xPos + "px," + yPos + "px)";
  let xformOld = xformCache.get(el);
  if (xform != xformOld) {
    el.style.transform = xform;
    xformCache.set(el, xform);
    if (xPos < 0 || yPos < 0 || xPos > xMax || yPos > yMax)
      addClass(el, OFF);
    else
      remClass(el, OFF);
  }
}
var colorCache = /* @__PURE__ */ new WeakMap();
function elColor(el, background, borderColor) {
  let newColor = background + borderColor;
  let oldColor = colorCache.get(el);
  if (newColor != oldColor) {
    colorCache.set(el, newColor);
    el.style.background = background;
    el.style.borderColor = borderColor;
  }
}
var sizeCache = /* @__PURE__ */ new WeakMap();
function elSize(el, newWid, newHgt, centered) {
  let newSize = newWid + "" + newHgt;
  let oldSize = sizeCache.get(el);
  if (newSize != oldSize) {
    sizeCache.set(el, newSize);
    el.style.height = newHgt + "px";
    el.style.width = newWid + "px";
    el.style.marginLeft = centered ? -newWid / 2 + "px" : 0;
    el.style.marginTop = centered ? -newHgt / 2 + "px" : 0;
  }
}
var evOpts = { passive: true };
var evOpts2 = __spreadProps(__spreadValues({}, evOpts), { capture: true });
function on(ev, el, cb, capt) {
  el.addEventListener(ev, cb, capt ? evOpts2 : evOpts);
}
function off(ev, el, cb, capt) {
  el.removeEventListener(ev, cb, evOpts);
}
domEnv && setPxRatio();
function closestIdx(num, arr, lo, hi) {
  let mid;
  lo = lo || 0;
  hi = hi || arr.length - 1;
  let bitwise = hi <= 2147483647;
  while (hi - lo > 1) {
    mid = bitwise ? lo + hi >> 1 : floor((lo + hi) / 2);
    if (arr[mid] < num)
      lo = mid;
    else
      hi = mid;
  }
  if (num - arr[lo] <= arr[hi] - num)
    return lo;
  return hi;
}
function makeIndexOfs(predicate) {
  let indexOfs = (data, _i0, _i1) => {
    let i0 = -1;
    let i1 = -1;
    for (let i3 = _i0; i3 <= _i1; i3++) {
      if (predicate(data[i3])) {
        i0 = i3;
        break;
      }
    }
    for (let i3 = _i1; i3 >= _i0; i3--) {
      if (predicate(data[i3])) {
        i1 = i3;
        break;
      }
    }
    return [i0, i1];
  };
  return indexOfs;
}
var notNullish = (v3) => v3 != null;
var isPositive = (v3) => v3 != null && v3 > 0;
var nonNullIdxs = makeIndexOfs(notNullish);
var positiveIdxs = makeIndexOfs(isPositive);
function getMinMax(data, _i0, _i1, sorted = 0, log = false) {
  let getEdgeIdxs = log ? positiveIdxs : nonNullIdxs;
  let predicate = log ? isPositive : notNullish;
  [_i0, _i1] = getEdgeIdxs(data, _i0, _i1);
  let _min = data[_i0];
  let _max = data[_i0];
  if (_i0 > -1) {
    if (sorted == 1) {
      _min = data[_i0];
      _max = data[_i1];
    } else if (sorted == -1) {
      _min = data[_i1];
      _max = data[_i0];
    } else {
      for (let i3 = _i0; i3 <= _i1; i3++) {
        let v3 = data[i3];
        if (predicate(v3)) {
          if (v3 < _min)
            _min = v3;
          else if (v3 > _max)
            _max = v3;
        }
      }
    }
  }
  return [_min != null ? _min : inf, _max != null ? _max : -inf];
}
function rangeLog(min2, max2, base, fullMags) {
  let minSign = sign(min2);
  let maxSign = sign(max2);
  if (min2 == max2) {
    if (minSign == -1) {
      min2 *= base;
      max2 /= base;
    } else {
      min2 /= base;
      max2 *= base;
    }
  }
  let logFn = base == 10 ? log10 : log2;
  let growMinAbs = minSign == 1 ? floor : ceil;
  let growMaxAbs = maxSign == 1 ? ceil : floor;
  let minExp = growMinAbs(logFn(abs(min2)));
  let maxExp = growMaxAbs(logFn(abs(max2)));
  let minIncr = pow(base, minExp);
  let maxIncr = pow(base, maxExp);
  if (base == 10) {
    if (minExp < 0)
      minIncr = roundDec(minIncr, -minExp);
    if (maxExp < 0)
      maxIncr = roundDec(maxIncr, -maxExp);
  }
  if (fullMags || base == 2) {
    min2 = minIncr * minSign;
    max2 = maxIncr * maxSign;
  } else {
    min2 = incrRoundDn(min2, minIncr);
    max2 = incrRoundUp(max2, maxIncr);
  }
  return [min2, max2];
}
function rangeAsinh(min2, max2, base, fullMags) {
  let minMax = rangeLog(min2, max2, base, fullMags);
  if (min2 == 0)
    minMax[0] = 0;
  if (max2 == 0)
    minMax[1] = 0;
  return minMax;
}
var rangePad = 0.1;
var autoRangePart = {
  mode: 3,
  pad: rangePad
};
var _eqRangePart = {
  pad: 0,
  soft: null,
  mode: 0
};
var _eqRange = {
  min: _eqRangePart,
  max: _eqRangePart
};
function rangeNum(_min, _max, mult, extra) {
  if (isObj(mult))
    return _rangeNum(_min, _max, mult);
  _eqRangePart.pad = mult;
  _eqRangePart.soft = extra ? 0 : null;
  _eqRangePart.mode = extra ? 3 : 0;
  return _rangeNum(_min, _max, _eqRange);
}
function ifNull(lh, rh) {
  return lh == null ? rh : lh;
}
function hasData(data, idx0, idx1) {
  idx0 = ifNull(idx0, 0);
  idx1 = ifNull(idx1, data.length - 1);
  while (idx0 <= idx1) {
    if (data[idx0] != null)
      return true;
    idx0++;
  }
  return false;
}
function _rangeNum(_min, _max, cfg) {
  let cmin = cfg.min;
  let cmax = cfg.max;
  let padMin = ifNull(cmin.pad, 0);
  let padMax = ifNull(cmax.pad, 0);
  let hardMin = ifNull(cmin.hard, -inf);
  let hardMax = ifNull(cmax.hard, inf);
  let softMin = ifNull(cmin.soft, inf);
  let softMax = ifNull(cmax.soft, -inf);
  let softMinMode = ifNull(cmin.mode, 0);
  let softMaxMode = ifNull(cmax.mode, 0);
  let delta = _max - _min;
  let deltaMag = log10(delta);
  let scalarMax = max(abs(_min), abs(_max));
  let scalarMag = log10(scalarMax);
  let scalarMagDelta = abs(scalarMag - deltaMag);
  if (delta < 1e-24 || scalarMagDelta > 10) {
    delta = 0;
    if (_min == 0 || _max == 0) {
      delta = 1e-24;
      if (softMinMode == 2 && softMin != inf)
        padMin = 0;
      if (softMaxMode == 2 && softMax != -inf)
        padMax = 0;
    }
  }
  let nonZeroDelta = delta || scalarMax || 1e3;
  let mag = log10(nonZeroDelta);
  let base = pow(10, floor(mag));
  let _padMin = nonZeroDelta * (delta == 0 ? _min == 0 ? 0.1 : 1 : padMin);
  let _newMin = roundDec(incrRoundDn(_min - _padMin, base / 10), 24);
  let _softMin = _min >= softMin && (softMinMode == 1 || softMinMode == 3 && _newMin <= softMin || softMinMode == 2 && _newMin >= softMin) ? softMin : inf;
  let minLim = max(hardMin, _newMin < _softMin && _min >= _softMin ? _softMin : min(_softMin, _newMin));
  let _padMax = nonZeroDelta * (delta == 0 ? _max == 0 ? 0.1 : 1 : padMax);
  let _newMax = roundDec(incrRoundUp(_max + _padMax, base / 10), 24);
  let _softMax = _max <= softMax && (softMaxMode == 1 || softMaxMode == 3 && _newMax >= softMax || softMaxMode == 2 && _newMax <= softMax) ? softMax : -inf;
  let maxLim = min(hardMax, _newMax > _softMax && _max <= _softMax ? _softMax : max(_softMax, _newMax));
  if (minLim == maxLim && minLim == 0)
    maxLim = 100;
  return [minLim, maxLim];
}
var numFormatter = new Intl.NumberFormat(domEnv ? nav.language : "en-US");
var fmtNum = (val) => numFormatter.format(val);
var M2 = Math;
var PI = M2.PI;
var abs = M2.abs;
var floor = M2.floor;
var round = M2.round;
var ceil = M2.ceil;
var min = M2.min;
var max = M2.max;
var pow = M2.pow;
var sign = M2.sign;
var log10 = M2.log10;
var log2 = M2.log2;
var sinh = (v3, linthresh = 1) => M2.sinh(v3) * linthresh;
var asinh = (v3, linthresh = 1) => M2.asinh(v3 / linthresh);
var inf = Infinity;
function numIntDigits(x2) {
  return (log10((x2 ^ x2 >> 31) - (x2 >> 31)) | 0) + 1;
}
function clamp(num, _min, _max) {
  return min(max(num, _min), _max);
}
function isFn(v3) {
  return typeof v3 == "function";
}
function fnOrSelf(v3) {
  return isFn(v3) ? v3 : () => v3;
}
var noop = () => {
};
var retArg0 = (_0) => _0;
var retArg1 = (_0, _1) => _1;
var retNull = (_3) => null;
var retTrue = (_3) => true;
var retEq = (a3, b) => a3 == b;
var regex6 = /\.\d*?(?=9{6,}|0{6,})/gm;
var fixFloat = (val) => {
  if (isInt(val) || fixedDec.has(val))
    return val;
  const str = `${val}`;
  const match = str.match(regex6);
  if (match == null)
    return val;
  let len = match[0].length - 1;
  if (str.indexOf("e-") != -1) {
    let [num, exp] = str.split("e");
    return +`${fixFloat(num)}e${exp}`;
  }
  return roundDec(val, len);
};
function incrRound(num, incr) {
  return fixFloat(roundDec(fixFloat(num / incr)) * incr);
}
function incrRoundUp(num, incr) {
  return fixFloat(ceil(fixFloat(num / incr)) * incr);
}
function incrRoundDn(num, incr) {
  return fixFloat(floor(fixFloat(num / incr)) * incr);
}
function roundDec(val, dec = 0) {
  if (isInt(val))
    return val;
  let p3 = 10 ** dec;
  let n3 = val * p3 * (1 + Number.EPSILON);
  return round(n3) / p3;
}
var fixedDec = /* @__PURE__ */ new Map();
function guessDec(num) {
  return (("" + num).split(".")[1] || "").length;
}
function genIncrs(base, minExp, maxExp, mults) {
  let incrs = [];
  let multDec = mults.map(guessDec);
  for (let exp = minExp; exp < maxExp; exp++) {
    let expa = abs(exp);
    let mag = roundDec(pow(base, exp), expa);
    for (let i3 = 0; i3 < mults.length; i3++) {
      let _incr = base == 10 ? +`${mults[i3]}e${exp}` : mults[i3] * mag;
      let dec = (exp >= 0 ? 0 : expa) + (exp >= multDec[i3] ? 0 : multDec[i3]);
      let incr = base == 10 ? _incr : roundDec(_incr, dec);
      incrs.push(incr);
      fixedDec.set(incr, dec);
    }
  }
  return incrs;
}
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var nullNullTuple = [null, null];
var isArr = Array.isArray;
var isInt = Number.isInteger;
var isUndef = (v3) => v3 === void 0;
function isStr(v3) {
  return typeof v3 == "string";
}
function isObj(v3) {
  let is = false;
  if (v3 != null) {
    let c3 = v3.constructor;
    is = c3 == null || c3 == Object;
  }
  return is;
}
function fastIsObj(v3) {
  return v3 != null && typeof v3 == "object";
}
var TypedArray = Object.getPrototypeOf(Uint8Array);
var __proto__ = "__proto__";
function copy(o3, _isObj = isObj) {
  let out;
  if (isArr(o3)) {
    let val = o3.find((v3) => v3 != null);
    if (isArr(val) || _isObj(val)) {
      out = Array(o3.length);
      for (let i3 = 0; i3 < o3.length; i3++)
        out[i3] = copy(o3[i3], _isObj);
    } else
      out = o3.slice();
  } else if (o3 instanceof TypedArray)
    out = o3.slice();
  else if (_isObj(o3)) {
    out = {};
    for (let k3 in o3) {
      if (k3 != __proto__)
        out[k3] = copy(o3[k3], _isObj);
    }
  } else
    out = o3;
  return out;
}
function assign(targ) {
  let args = arguments;
  for (let i3 = 1; i3 < args.length; i3++) {
    let src = args[i3];
    for (let key in src) {
      if (key != __proto__) {
        if (isObj(targ[key]))
          assign(targ[key], copy(src[key]));
        else
          targ[key] = copy(src[key]);
      }
    }
  }
  return targ;
}
var NULL_REMOVE = 0;
var NULL_RETAIN = 1;
var NULL_EXPAND = 2;
function nullExpand(yVals, nullIdxs, alignedLen) {
  for (let i3 = 0, xi, lastNullIdx = -1; i3 < nullIdxs.length; i3++) {
    let nullIdx = nullIdxs[i3];
    if (nullIdx > lastNullIdx) {
      xi = nullIdx - 1;
      while (xi >= 0 && yVals[xi] == null)
        yVals[xi--] = null;
      xi = nullIdx + 1;
      while (xi < alignedLen && yVals[xi] == null)
        yVals[lastNullIdx = xi++] = null;
    }
  }
}
function join(tables, nullModes) {
  if (allHeadersSame(tables)) {
    let table = tables[0].slice();
    for (let i3 = 1; i3 < tables.length; i3++)
      table.push(...tables[i3].slice(1));
    if (!isAsc(table[0]))
      table = sortCols(table);
    return table;
  }
  let xVals = /* @__PURE__ */ new Set();
  for (let ti = 0; ti < tables.length; ti++) {
    let t4 = tables[ti];
    let xs = t4[0];
    let len = xs.length;
    for (let i3 = 0; i3 < len; i3++)
      xVals.add(xs[i3]);
  }
  let data = [Array.from(xVals).sort((a3, b) => a3 - b)];
  let alignedLen = data[0].length;
  let xIdxs = /* @__PURE__ */ new Map();
  for (let i3 = 0; i3 < alignedLen; i3++)
    xIdxs.set(data[0][i3], i3);
  for (let ti = 0; ti < tables.length; ti++) {
    let t4 = tables[ti];
    let xs = t4[0];
    for (let si = 1; si < t4.length; si++) {
      let ys = t4[si];
      let yVals = Array(alignedLen).fill(void 0);
      let nullMode = nullModes ? nullModes[ti][si] : NULL_RETAIN;
      let nullIdxs = [];
      for (let i3 = 0; i3 < ys.length; i3++) {
        let yVal = ys[i3];
        let alignedIdx = xIdxs.get(xs[i3]);
        if (yVal === null) {
          if (nullMode != NULL_REMOVE) {
            yVals[alignedIdx] = yVal;
            if (nullMode == NULL_EXPAND)
              nullIdxs.push(alignedIdx);
          }
        } else
          yVals[alignedIdx] = yVal;
      }
      nullExpand(yVals, nullIdxs, alignedLen);
      data.push(yVals);
    }
  }
  return data;
}
var microTask = typeof queueMicrotask == "undefined" ? (fn) => Promise.resolve().then(fn) : queueMicrotask;
function sortCols(table) {
  let head = table[0];
  let rlen = head.length;
  let idxs = Array(rlen);
  for (let i3 = 0; i3 < idxs.length; i3++)
    idxs[i3] = i3;
  idxs.sort((i0, i1) => head[i0] - head[i1]);
  let table2 = [];
  for (let i3 = 0; i3 < table.length; i3++) {
    let row = table[i3];
    let row2 = Array(rlen);
    for (let j3 = 0; j3 < rlen; j3++)
      row2[j3] = row[idxs[j3]];
    table2.push(row2);
  }
  return table2;
}
function allHeadersSame(tables) {
  let vals0 = tables[0][0];
  let len0 = vals0.length;
  for (let i3 = 1; i3 < tables.length; i3++) {
    let vals1 = tables[i3][0];
    if (vals1.length != len0)
      return false;
    if (vals1 != vals0) {
      for (let j3 = 0; j3 < len0; j3++) {
        if (vals1[j3] != vals0[j3])
          return false;
      }
    }
  }
  return true;
}
function isAsc(vals, samples = 100) {
  const len = vals.length;
  if (len <= 1)
    return true;
  let firstIdx = 0;
  let lastIdx = len - 1;
  while (firstIdx <= lastIdx && vals[firstIdx] == null)
    firstIdx++;
  while (lastIdx >= firstIdx && vals[lastIdx] == null)
    lastIdx--;
  if (lastIdx <= firstIdx)
    return true;
  const stride = max(1, floor((lastIdx - firstIdx + 1) / samples));
  for (let prevVal = vals[firstIdx], i3 = firstIdx + stride; i3 <= lastIdx; i3 += stride) {
    const v3 = vals[i3];
    if (v3 != null) {
      if (v3 <= prevVal)
        return false;
      prevVal = v3;
    }
  }
  return true;
}
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function slice3(str) {
  return str.slice(0, 3);
}
var days3 = days.map(slice3);
var months3 = months.map(slice3);
var engNames = {
  MMMM: months,
  MMM: months3,
  WWWW: days,
  WWW: days3
};
function zeroPad2(int) {
  return (int < 10 ? "0" : "") + int;
}
function zeroPad3(int) {
  return (int < 10 ? "00" : int < 100 ? "0" : "") + int;
}
var subs = {
  // 2019
  YYYY: (d3) => d3.getFullYear(),
  // 19
  YY: (d3) => (d3.getFullYear() + "").slice(2),
  // July
  MMMM: (d3, names) => names.MMMM[d3.getMonth()],
  // Jul
  MMM: (d3, names) => names.MMM[d3.getMonth()],
  // 07
  MM: (d3) => zeroPad2(d3.getMonth() + 1),
  // 7
  M: (d3) => d3.getMonth() + 1,
  // 09
  DD: (d3) => zeroPad2(d3.getDate()),
  // 9
  D: (d3) => d3.getDate(),
  // Monday
  WWWW: (d3, names) => names.WWWW[d3.getDay()],
  // Mon
  WWW: (d3, names) => names.WWW[d3.getDay()],
  // 03
  HH: (d3) => zeroPad2(d3.getHours()),
  // 3
  H: (d3) => d3.getHours(),
  // 9 (12hr, unpadded)
  h: (d3) => {
    let h3 = d3.getHours();
    return h3 == 0 ? 12 : h3 > 12 ? h3 - 12 : h3;
  },
  // AM
  AA: (d3) => d3.getHours() >= 12 ? "PM" : "AM",
  // am
  aa: (d3) => d3.getHours() >= 12 ? "pm" : "am",
  // a
  a: (d3) => d3.getHours() >= 12 ? "p" : "a",
  // 09
  mm: (d3) => zeroPad2(d3.getMinutes()),
  // 9
  m: (d3) => d3.getMinutes(),
  // 09
  ss: (d3) => zeroPad2(d3.getSeconds()),
  // 9
  s: (d3) => d3.getSeconds(),
  // 374
  fff: (d3) => zeroPad3(d3.getMilliseconds())
};
function fmtDate(tpl, names) {
  names = names || engNames;
  let parts = [];
  let R = /\{([a-z]+)\}|[^{]+/gi, m4;
  while (m4 = R.exec(tpl))
    parts.push(m4[0][0] == "{" ? subs[m4[1]] : m4[0]);
  return (d3) => {
    let out = "";
    for (let i3 = 0; i3 < parts.length; i3++)
      out += typeof parts[i3] == "string" ? parts[i3] : parts[i3](d3, names);
    return out;
  };
}
var localTz = new Intl.DateTimeFormat().resolvedOptions().timeZone;
function tzDate(date, tz) {
  let date2;
  if (tz == "UTC" || tz == "Etc/UTC")
    date2 = new Date(+date + date.getTimezoneOffset() * 6e4);
  else if (tz == localTz)
    date2 = date;
  else {
    date2 = new Date(date.toLocaleString("en-US", { timeZone: tz }));
    date2.setMilliseconds(date.getMilliseconds());
  }
  return date2;
}
var onlyWhole = (v3) => v3 % 1 == 0;
var allMults = [1, 2, 2.5, 5];
var decIncrs = genIncrs(10, -32, 0, allMults);
var oneIncrs = genIncrs(10, 0, 32, allMults);
var wholeIncrs = oneIncrs.filter(onlyWhole);
var numIncrs = decIncrs.concat(oneIncrs);
var NL = "\n";
var yyyy = "{YYYY}";
var NLyyyy = NL + yyyy;
var md = "{M}/{D}";
var NLmd = NL + md;
var NLmdyy = NLmd + "/{YY}";
var aa = "{aa}";
var hmm = "{h}:{mm}";
var hmmaa = hmm + aa;
var NLhmmaa = NL + hmmaa;
var ss = ":{ss}";
var _2 = null;
function genTimeStuffs(ms) {
  let s3 = ms * 1e3, m4 = s3 * 60, h3 = m4 * 60, d3 = h3 * 24, mo = d3 * 30, y3 = d3 * 365;
  let subSecIncrs = ms == 1 ? genIncrs(10, 0, 3, allMults).filter(onlyWhole) : genIncrs(10, -3, 0, allMults);
  let timeIncrs = subSecIncrs.concat([
    // minute divisors (# of secs)
    s3,
    s3 * 5,
    s3 * 10,
    s3 * 15,
    s3 * 30,
    // hour divisors (# of mins)
    m4,
    m4 * 5,
    m4 * 10,
    m4 * 15,
    m4 * 30,
    // day divisors (# of hrs)
    h3,
    h3 * 2,
    h3 * 3,
    h3 * 4,
    h3 * 6,
    h3 * 8,
    h3 * 12,
    // month divisors TODO: need more?
    d3,
    d3 * 2,
    d3 * 3,
    d3 * 4,
    d3 * 5,
    d3 * 6,
    d3 * 7,
    d3 * 8,
    d3 * 9,
    d3 * 10,
    d3 * 15,
    // year divisors (# months, approx)
    mo,
    mo * 2,
    mo * 3,
    mo * 4,
    mo * 6,
    // century divisors
    y3,
    y3 * 2,
    y3 * 5,
    y3 * 10,
    y3 * 25,
    y3 * 50,
    y3 * 100
  ]);
  const _timeAxisStamps = [
    //   tick incr    default          year                    month   day                   hour    min       sec   mode
    [y3, yyyy, _2, _2, _2, _2, _2, _2, 1],
    [d3 * 28, "{MMM}", NLyyyy, _2, _2, _2, _2, _2, 1],
    [d3, md, NLyyyy, _2, _2, _2, _2, _2, 1],
    [h3, "{h}" + aa, NLmdyy, _2, NLmd, _2, _2, _2, 1],
    [m4, hmmaa, NLmdyy, _2, NLmd, _2, _2, _2, 1],
    [s3, ss, NLmdyy + " " + hmmaa, _2, NLmd + " " + hmmaa, _2, NLhmmaa, _2, 1],
    [ms, ss + ".{fff}", NLmdyy + " " + hmmaa, _2, NLmd + " " + hmmaa, _2, NLhmmaa, _2, 1]
  ];
  function timeAxisSplits(tzDate2) {
    return (self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace) => {
      let splits = [];
      let isYr = foundIncr >= y3;
      let isMo = foundIncr >= mo && foundIncr < y3;
      let minDate = tzDate2(scaleMin);
      let minDateTs = roundDec(minDate * ms, 3);
      let minMin = mkDate(minDate.getFullYear(), isYr ? 0 : minDate.getMonth(), isMo || isYr ? 1 : minDate.getDate());
      let minMinTs = roundDec(minMin * ms, 3);
      if (isMo || isYr) {
        let moIncr = isMo ? foundIncr / mo : 0;
        let yrIncr = isYr ? foundIncr / y3 : 0;
        let split = minDateTs == minMinTs ? minDateTs : roundDec(mkDate(minMin.getFullYear() + yrIncr, minMin.getMonth() + moIncr, 1) * ms, 3);
        let splitDate = new Date(round(split / ms));
        let baseYear = splitDate.getFullYear();
        let baseMonth = splitDate.getMonth();
        for (let i3 = 0; split <= scaleMax; i3++) {
          let next = mkDate(baseYear + yrIncr * i3, baseMonth + moIncr * i3, 1);
          let offs = next - tzDate2(roundDec(next * ms, 3));
          split = roundDec((+next + offs) * ms, 3);
          if (split <= scaleMax)
            splits.push(split);
        }
      } else {
        let incr0 = foundIncr >= d3 ? d3 : foundIncr;
        let tzOffset = floor(scaleMin) - floor(minDateTs);
        let split = minMinTs + tzOffset + incrRoundUp(minDateTs - minMinTs, incr0);
        splits.push(split);
        let date0 = tzDate2(split);
        let prevHour = date0.getHours() + date0.getMinutes() / m4 + date0.getSeconds() / h3;
        let incrHours = foundIncr / h3;
        let minSpace = self.axes[axisIdx]._space;
        let pctSpace = foundSpace / minSpace;
        while (1) {
          split = roundDec(split + foundIncr, ms == 1 ? 0 : 3);
          if (split > scaleMax)
            break;
          if (incrHours > 1) {
            let expectedHour = floor(roundDec(prevHour + incrHours, 6)) % 24;
            let splitDate = tzDate2(split);
            let actualHour = splitDate.getHours();
            let dstShift = actualHour - expectedHour;
            if (dstShift > 1)
              dstShift = -1;
            split -= dstShift * h3;
            prevHour = (prevHour + incrHours) % 24;
            let prevSplit = splits[splits.length - 1];
            let pctIncr = roundDec((split - prevSplit) / foundIncr, 3);
            if (pctIncr * pctSpace >= 0.7)
              splits.push(split);
          } else
            splits.push(split);
        }
      }
      return splits;
    };
  }
  return [
    timeIncrs,
    _timeAxisStamps,
    timeAxisSplits
  ];
}
var [timeIncrsMs, _timeAxisStampsMs, timeAxisSplitsMs] = genTimeStuffs(1);
var [timeIncrsS, _timeAxisStampsS, timeAxisSplitsS] = genTimeStuffs(1e-3);
genIncrs(2, -53, 53, [1]);
function timeAxisStamps(stampCfg, fmtDate3) {
  return stampCfg.map((s3) => s3.map(
    (v3, i3) => i3 == 0 || i3 == 8 || v3 == null ? v3 : fmtDate3(i3 == 1 || s3[8] == 0 ? v3 : s3[1] + v3)
  ));
}
function timeAxisVals(tzDate2, stamps) {
  return (self, splits, axisIdx, foundSpace, foundIncr) => {
    let s3 = stamps.find((s4) => foundIncr >= s4[0]) || stamps[stamps.length - 1];
    let prevYear;
    let prevMnth;
    let prevDate;
    let prevHour;
    let prevMins;
    let prevSecs;
    return splits.map((split) => {
      let date = tzDate2(split);
      let newYear = date.getFullYear();
      let newMnth = date.getMonth();
      let newDate = date.getDate();
      let newHour = date.getHours();
      let newMins = date.getMinutes();
      let newSecs = date.getSeconds();
      let stamp = newYear != prevYear && s3[2] || newMnth != prevMnth && s3[3] || newDate != prevDate && s3[4] || newHour != prevHour && s3[5] || newMins != prevMins && s3[6] || newSecs != prevSecs && s3[7] || s3[1];
      prevYear = newYear;
      prevMnth = newMnth;
      prevDate = newDate;
      prevHour = newHour;
      prevMins = newMins;
      prevSecs = newSecs;
      return stamp(date);
    });
  };
}
function timeAxisVal(tzDate2, dateTpl) {
  let stamp = fmtDate(dateTpl);
  return (self, splits, axisIdx, foundSpace, foundIncr) => splits.map((split) => stamp(tzDate2(split)));
}
function mkDate(y3, m4, d3) {
  return new Date(y3, m4, d3);
}
function timeSeriesStamp(stampCfg, fmtDate3) {
  return fmtDate3(stampCfg);
}
var _timeSeriesStamp = "{YYYY}-{MM}-{DD} {h}:{mm}{aa}";
function timeSeriesVal(tzDate2, stamp) {
  return (self, val, seriesIdx, dataIdx) => dataIdx == null ? LEGEND_DISP : stamp(tzDate2(val));
}
function legendStroke(self, seriesIdx) {
  let s3 = self.series[seriesIdx];
  return s3.width ? s3.stroke(self, seriesIdx) : s3.points.width ? s3.points.stroke(self, seriesIdx) : null;
}
function legendFill(self, seriesIdx) {
  return self.series[seriesIdx].fill(self, seriesIdx);
}
var legendOpts = {
  show: true,
  live: true,
  isolate: false,
  mount: noop,
  markers: {
    show: true,
    width: 2,
    stroke: legendStroke,
    fill: legendFill,
    dash: "solid"
  },
  idx: null,
  idxs: null,
  values: []
};
function cursorPointShow(self, si) {
  let o3 = self.cursor.points;
  let pt = placeDiv();
  let size = o3.size(self, si);
  setStylePx(pt, WIDTH, size);
  setStylePx(pt, HEIGHT, size);
  let mar = size / -2;
  setStylePx(pt, "marginLeft", mar);
  setStylePx(pt, "marginTop", mar);
  let width = o3.width(self, si, size);
  width && setStylePx(pt, "borderWidth", width);
  return pt;
}
function cursorPointFill(self, si) {
  let sp = self.series[si].points;
  return sp._fill || sp._stroke;
}
function cursorPointStroke(self, si) {
  let sp = self.series[si].points;
  return sp._stroke || sp._fill;
}
function cursorPointSize(self, si) {
  let sp = self.series[si].points;
  return sp.size;
}
var moveTuple = [0, 0];
function cursorMove(self, mouseLeft1, mouseTop1) {
  moveTuple[0] = mouseLeft1;
  moveTuple[1] = mouseTop1;
  return moveTuple;
}
function filtBtn0(self, targ, handle, onlyTarg = true) {
  return (e3) => {
    e3.button == 0 && (!onlyTarg || e3.target == targ) && handle(e3);
  };
}
function filtTarg(self, targ, handle, onlyTarg = true) {
  return (e3) => {
    (!onlyTarg || e3.target == targ) && handle(e3);
  };
}
var cursorOpts = {
  show: true,
  x: true,
  y: true,
  lock: false,
  move: cursorMove,
  points: {
    one: false,
    show: cursorPointShow,
    size: cursorPointSize,
    width: 0,
    stroke: cursorPointStroke,
    fill: cursorPointFill
  },
  bind: {
    mousedown: filtBtn0,
    mouseup: filtBtn0,
    click: filtBtn0,
    // legend clicks, not .u-over clicks
    dblclick: filtBtn0,
    mousemove: filtTarg,
    mouseleave: filtTarg,
    mouseenter: filtTarg
  },
  drag: {
    setScale: true,
    x: true,
    y: false,
    dist: 0,
    uni: null,
    click: (self, e3) => {
      e3.stopPropagation();
      e3.stopImmediatePropagation();
    },
    _x: false,
    _y: false
  },
  focus: {
    dist: (self, seriesIdx, dataIdx, valPos, curPos) => valPos - curPos,
    prox: -1,
    bias: 0
  },
  hover: {
    skip: [void 0],
    prox: null,
    bias: 0
  },
  left: -10,
  top: -10,
  idx: null,
  dataIdx: null,
  idxs: null,
  event: null
};
var axisLines = {
  show: true,
  stroke: "rgba(0,0,0,0.07)",
  width: 2
  //	dash: [],
};
var grid = assign({}, axisLines, {
  filter: retArg1
});
var ticks = assign({}, grid, {
  size: 10
});
var border = assign({}, axisLines, {
  show: false
});
var font = '12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
var labelFont = "bold " + font;
var lineGap = 1.5;
var xAxisOpts = {
  show: true,
  scale: "x",
  stroke: hexBlack,
  space: 50,
  gap: 5,
  alignTo: 1,
  size: 50,
  labelGap: 0,
  labelSize: 30,
  labelFont,
  side: 2,
  //	class: "x-vals",
  //	incrs: timeIncrs,
  //	values: timeVals,
  //	filter: retArg1,
  grid,
  ticks,
  border,
  font,
  lineGap,
  rotate: 0
};
var numSeriesLabel = "Value";
var timeSeriesLabel = "Time";
var xSeriesOpts = {
  show: true,
  scale: "x",
  auto: false,
  sorted: 1,
  //	label: "Time",
  //	value: v => stamp(new Date(v * 1e3)),
  // internal caches
  min: inf,
  max: -inf,
  idxs: []
};
function numAxisVals(self, splits, axisIdx, foundSpace, foundIncr) {
  return splits.map((v3) => v3 == null ? "" : fmtNum(v3));
}
function numAxisSplits(self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace, forceMin) {
  let splits = [];
  let numDec = fixedDec.get(foundIncr) || 0;
  scaleMin = forceMin ? scaleMin : roundDec(incrRoundUp(scaleMin, foundIncr), numDec);
  for (let val = scaleMin; val <= scaleMax; val = roundDec(val + foundIncr, numDec))
    splits.push(Object.is(val, -0) ? 0 : val);
  return splits;
}
function logAxisSplits(self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace, forceMin) {
  const splits = [];
  const logBase = self.scales[self.axes[axisIdx].scale].log;
  const logFn = logBase == 10 ? log10 : log2;
  const exp = floor(logFn(scaleMin));
  foundIncr = pow(logBase, exp);
  if (logBase == 10)
    foundIncr = numIncrs[closestIdx(foundIncr, numIncrs)];
  let split = scaleMin;
  let nextMagIncr = foundIncr * logBase;
  if (logBase == 10)
    nextMagIncr = numIncrs[closestIdx(nextMagIncr, numIncrs)];
  do {
    splits.push(split);
    split = split + foundIncr;
    if (logBase == 10 && !fixedDec.has(split))
      split = roundDec(split, fixedDec.get(foundIncr));
    if (split >= nextMagIncr) {
      foundIncr = split;
      nextMagIncr = foundIncr * logBase;
      if (logBase == 10)
        nextMagIncr = numIncrs[closestIdx(nextMagIncr, numIncrs)];
    }
  } while (split <= scaleMax);
  return splits;
}
function asinhAxisSplits(self, axisIdx, scaleMin, scaleMax, foundIncr, foundSpace, forceMin) {
  let sc = self.scales[self.axes[axisIdx].scale];
  let linthresh = sc.asinh;
  let posSplits = scaleMax > linthresh ? logAxisSplits(self, axisIdx, max(linthresh, scaleMin), scaleMax, foundIncr) : [linthresh];
  let zero = scaleMax >= 0 && scaleMin <= 0 ? [0] : [];
  let negSplits = scaleMin < -linthresh ? logAxisSplits(self, axisIdx, max(linthresh, -scaleMax), -scaleMin, foundIncr) : [linthresh];
  return negSplits.reverse().map((v3) => -v3).concat(zero, posSplits);
}
var RE_ALL = /./;
var RE_12357 = /[12357]/;
var RE_125 = /[125]/;
var RE_1 = /1/;
var _filt = (splits, distr, re, keepMod) => splits.map((v3, i3) => distr == 4 && v3 == 0 || i3 % keepMod == 0 && re.test(v3.toExponential()[v3 < 0 ? 1 : 0]) ? v3 : null);
function log10AxisValsFilt(self, splits, axisIdx, foundSpace, foundIncr) {
  let axis = self.axes[axisIdx];
  let scaleKey = axis.scale;
  let sc = self.scales[scaleKey];
  let valToPos = self.valToPos;
  let minSpace = axis._space;
  let _10 = valToPos(10, scaleKey);
  let re = valToPos(9, scaleKey) - _10 >= minSpace ? RE_ALL : valToPos(7, scaleKey) - _10 >= minSpace ? RE_12357 : valToPos(5, scaleKey) - _10 >= minSpace ? RE_125 : RE_1;
  if (re == RE_1) {
    let magSpace = abs(valToPos(1, scaleKey) - _10);
    if (magSpace < minSpace)
      return _filt(splits.slice().reverse(), sc.distr, re, ceil(minSpace / magSpace)).reverse();
  }
  return _filt(splits, sc.distr, re, 1);
}
function log2AxisValsFilt(self, splits, axisIdx, foundSpace, foundIncr) {
  let axis = self.axes[axisIdx];
  let scaleKey = axis.scale;
  let minSpace = axis._space;
  let valToPos = self.valToPos;
  let magSpace = abs(valToPos(1, scaleKey) - valToPos(2, scaleKey));
  if (magSpace < minSpace)
    return _filt(splits.slice().reverse(), 3, RE_ALL, ceil(minSpace / magSpace)).reverse();
  return splits;
}
function numSeriesVal(self, val, seriesIdx, dataIdx) {
  return dataIdx == null ? LEGEND_DISP : val == null ? "" : fmtNum(val);
}
var yAxisOpts = {
  show: true,
  scale: "y",
  stroke: hexBlack,
  space: 30,
  gap: 5,
  alignTo: 1,
  size: 50,
  labelGap: 0,
  labelSize: 30,
  labelFont,
  side: 3,
  //	class: "y-vals",
  //	incrs: numIncrs,
  //	values: (vals, space) => vals,
  //	filter: retArg1,
  grid,
  ticks,
  border,
  font,
  lineGap,
  rotate: 0
};
function ptDia(width, mult) {
  let dia = 3 + (width || 1) * 2;
  return roundDec(dia * mult, 3);
}
function seriesPointsShow(self, si) {
  let { scale, idxs } = self.series[0];
  let xData = self._data[0];
  let p0 = self.valToPos(xData[idxs[0]], scale, true);
  let p1 = self.valToPos(xData[idxs[1]], scale, true);
  let dim = abs(p1 - p0);
  let s3 = self.series[si];
  let maxPts = dim / (s3.points.space * pxRatio);
  return idxs[1] - idxs[0] <= maxPts;
}
var facet = {
  scale: null,
  auto: true,
  sorted: 0,
  // internal caches
  min: inf,
  max: -inf
};
var gaps = (self, seriesIdx, idx0, idx1, nullGaps) => nullGaps;
var xySeriesOpts = {
  show: true,
  auto: true,
  sorted: 0,
  gaps,
  alpha: 1,
  facets: [
    assign({}, facet, { scale: "x" }),
    assign({}, facet, { scale: "y" })
  ]
};
var ySeriesOpts = {
  scale: "y",
  auto: true,
  sorted: 0,
  show: true,
  spanGaps: false,
  gaps,
  alpha: 1,
  points: {
    show: seriesPointsShow,
    filter: null
    //  paths:
    //	stroke: "#000",
    //	fill: "#fff",
    //	width: 1,
    //	size: 10,
  },
  //	label: "Value",
  //	value: v => v,
  values: null,
  // internal caches
  min: inf,
  max: -inf,
  idxs: [],
  path: null,
  clip: null
};
function clampScale(self, val, scaleMin, scaleMax, scaleKey) {
  return scaleMin / 10;
}
var xScaleOpts = {
  time: FEAT_TIME,
  auto: true,
  distr: 1,
  log: 10,
  asinh: 1,
  min: null,
  max: null,
  dir: 1,
  ori: 0
};
var yScaleOpts = assign({}, xScaleOpts, {
  time: false,
  ori: 1
});
var syncs = {};
function _sync(key, opts) {
  let s3 = syncs[key];
  if (!s3) {
    s3 = {
      key,
      plots: [],
      sub(plot) {
        s3.plots.push(plot);
      },
      unsub(plot) {
        s3.plots = s3.plots.filter((c3) => c3 != plot);
      },
      pub(type, self, x2, y3, w3, h3, i3) {
        for (let j3 = 0; j3 < s3.plots.length; j3++)
          s3.plots[j3] != self && s3.plots[j3].pub(type, self, x2, y3, w3, h3, i3);
      }
    };
    if (key != null)
      syncs[key] = s3;
  }
  return s3;
}
var BAND_CLIP_FILL = 1 << 0;
var BAND_CLIP_STROKE = 1 << 1;
function orient(u3, seriesIdx, cb) {
  const mode = u3.mode;
  const series = u3.series[seriesIdx];
  const data = mode == 2 ? u3._data[seriesIdx] : u3._data;
  const scales = u3.scales;
  const bbox = u3.bbox;
  let dx = data[0], dy = mode == 2 ? data[1] : data[seriesIdx], sx = mode == 2 ? scales[series.facets[0].scale] : scales[u3.series[0].scale], sy = mode == 2 ? scales[series.facets[1].scale] : scales[series.scale], l3 = bbox.left, t4 = bbox.top, w3 = bbox.width, h3 = bbox.height, H2 = u3.valToPosH, V2 = u3.valToPosV;
  return sx.ori == 0 ? cb(
    series,
    dx,
    dy,
    sx,
    sy,
    H2,
    V2,
    l3,
    t4,
    w3,
    h3,
    moveToH,
    lineToH,
    rectH,
    arcH,
    bezierCurveToH
  ) : cb(
    series,
    dx,
    dy,
    sx,
    sy,
    V2,
    H2,
    t4,
    l3,
    h3,
    w3,
    moveToV,
    lineToV,
    rectV,
    arcV,
    bezierCurveToV
  );
}
function bandFillClipDirs(self, seriesIdx) {
  let fillDir = 0;
  let clipDirs = 0;
  let bands = ifNull(self.bands, EMPTY_ARR);
  for (let i3 = 0; i3 < bands.length; i3++) {
    let b = bands[i3];
    if (b.series[0] == seriesIdx)
      fillDir = b.dir;
    else if (b.series[1] == seriesIdx) {
      if (b.dir == 1)
        clipDirs |= 1;
      else
        clipDirs |= 2;
    }
  }
  return [
    fillDir,
    clipDirs == 1 ? -1 : (
      // neg only
      clipDirs == 2 ? 1 : (
        // pos only
        clipDirs == 3 ? 2 : (
          // both
          0
        )
      )
    )
  ];
}
function seriesFillTo(self, seriesIdx, dataMin, dataMax, bandFillDir) {
  let mode = self.mode;
  let series = self.series[seriesIdx];
  let scaleKey = mode == 2 ? series.facets[1].scale : series.scale;
  let scale = self.scales[scaleKey];
  return bandFillDir == -1 ? scale.min : bandFillDir == 1 ? scale.max : scale.distr == 3 ? scale.dir == 1 ? scale.min : scale.max : 0;
}
function clipBandLine(self, seriesIdx, idx0, idx1, strokePath, clipDir) {
  return orient(self, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
    let pxRound = series.pxRound;
    const dir = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
    const lineTo = scaleX.ori == 0 ? lineToH : lineToV;
    let frIdx, toIdx;
    if (dir == 1) {
      frIdx = idx0;
      toIdx = idx1;
    } else {
      frIdx = idx1;
      toIdx = idx0;
    }
    let x0 = pxRound(valToPosX(dataX[frIdx], scaleX, xDim, xOff));
    let y0 = pxRound(valToPosY(dataY[frIdx], scaleY, yDim, yOff));
    let x1 = pxRound(valToPosX(dataX[toIdx], scaleX, xDim, xOff));
    let yLimit = pxRound(valToPosY(clipDir == 1 ? scaleY.max : scaleY.min, scaleY, yDim, yOff));
    let clip = new Path2D(strokePath);
    lineTo(clip, x1, yLimit);
    lineTo(clip, x0, yLimit);
    lineTo(clip, x0, y0);
    return clip;
  });
}
function clipGaps(gaps2, ori, plotLft, plotTop, plotWid, plotHgt) {
  let clip = null;
  if (gaps2.length > 0) {
    clip = new Path2D();
    const rect2 = ori == 0 ? rectH : rectV;
    let prevGapEnd = plotLft;
    for (let i3 = 0; i3 < gaps2.length; i3++) {
      let g2 = gaps2[i3];
      if (g2[1] > g2[0]) {
        let w4 = g2[0] - prevGapEnd;
        w4 > 0 && rect2(clip, prevGapEnd, plotTop, w4, plotTop + plotHgt);
        prevGapEnd = g2[1];
      }
    }
    let w3 = plotLft + plotWid - prevGapEnd;
    let maxStrokeWidth = 10;
    w3 > 0 && rect2(clip, prevGapEnd, plotTop - maxStrokeWidth / 2, w3, plotTop + plotHgt + maxStrokeWidth);
  }
  return clip;
}
function addGap(gaps2, fromX, toX) {
  let prevGap = gaps2[gaps2.length - 1];
  if (prevGap && prevGap[0] == fromX)
    prevGap[1] = toX;
  else
    gaps2.push([fromX, toX]);
}
function findGaps(xs, ys, idx0, idx1, dir, pixelForX, align) {
  let gaps2 = [];
  let len = xs.length;
  for (let i3 = dir == 1 ? idx0 : idx1; i3 >= idx0 && i3 <= idx1; i3 += dir) {
    let yVal = ys[i3];
    if (yVal === null) {
      let fr = i3, to = i3;
      if (dir == 1) {
        while (++i3 <= idx1 && ys[i3] === null)
          to = i3;
      } else {
        while (--i3 >= idx0 && ys[i3] === null)
          to = i3;
      }
      let frPx = pixelForX(xs[fr]);
      let toPx = to == fr ? frPx : pixelForX(xs[to]);
      let fri2 = fr - dir;
      let frPx2 = align <= 0 && fri2 >= 0 && fri2 < len ? pixelForX(xs[fri2]) : frPx;
      frPx = frPx2;
      let toi2 = to + dir;
      let toPx2 = align >= 0 && toi2 >= 0 && toi2 < len ? pixelForX(xs[toi2]) : toPx;
      toPx = toPx2;
      if (toPx >= frPx)
        gaps2.push([frPx, toPx]);
    }
  }
  return gaps2;
}
function pxRoundGen(pxAlign) {
  return pxAlign == 0 ? retArg0 : pxAlign == 1 ? round : (v3) => incrRound(v3, pxAlign);
}
function rect(ori) {
  let moveTo = ori == 0 ? moveToH : moveToV;
  let arcTo = ori == 0 ? (p3, x1, y1, x2, y22, r3) => {
    p3.arcTo(x1, y1, x2, y22, r3);
  } : (p3, y1, x1, y22, x2, r3) => {
    p3.arcTo(x1, y1, x2, y22, r3);
  };
  let rect2 = ori == 0 ? (p3, x2, y3, w3, h3) => {
    p3.rect(x2, y3, w3, h3);
  } : (p3, y3, x2, h3, w3) => {
    p3.rect(x2, y3, w3, h3);
  };
  return (p3, x2, y3, w3, h3, endRad = 0, baseRad = 0) => {
    if (endRad == 0 && baseRad == 0)
      rect2(p3, x2, y3, w3, h3);
    else {
      endRad = min(endRad, w3 / 2, h3 / 2);
      baseRad = min(baseRad, w3 / 2, h3 / 2);
      moveTo(p3, x2 + endRad, y3);
      arcTo(p3, x2 + w3, y3, x2 + w3, y3 + h3, endRad);
      arcTo(p3, x2 + w3, y3 + h3, x2, y3 + h3, baseRad);
      arcTo(p3, x2, y3 + h3, x2, y3, baseRad);
      arcTo(p3, x2, y3, x2 + w3, y3, endRad);
      p3.closePath();
    }
  };
}
var moveToH = (p3, x2, y3) => {
  p3.moveTo(x2, y3);
};
var moveToV = (p3, y3, x2) => {
  p3.moveTo(x2, y3);
};
var lineToH = (p3, x2, y3) => {
  p3.lineTo(x2, y3);
};
var lineToV = (p3, y3, x2) => {
  p3.lineTo(x2, y3);
};
var rectH = rect(0);
var rectV = rect(1);
var arcH = (p3, x2, y3, r3, startAngle, endAngle) => {
  p3.arc(x2, y3, r3, startAngle, endAngle);
};
var arcV = (p3, y3, x2, r3, startAngle, endAngle) => {
  p3.arc(x2, y3, r3, startAngle, endAngle);
};
var bezierCurveToH = (p3, bp1x, bp1y, bp2x, bp2y, p2x, p2y) => {
  p3.bezierCurveTo(bp1x, bp1y, bp2x, bp2y, p2x, p2y);
};
var bezierCurveToV = (p3, bp1y, bp1x, bp2y, bp2x, p2y, p2x) => {
  p3.bezierCurveTo(bp1x, bp1y, bp2x, bp2y, p2x, p2y);
};
function points(opts) {
  return (u3, seriesIdx, idx0, idx1, filtIdxs) => {
    return orient(u3, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
      let { pxRound, points: points2 } = series;
      let moveTo, arc;
      if (scaleX.ori == 0) {
        moveTo = moveToH;
        arc = arcH;
      } else {
        moveTo = moveToV;
        arc = arcV;
      }
      const width = roundDec(points2.width * pxRatio, 3);
      let rad = (points2.size - points2.width) / 2 * pxRatio;
      let dia = roundDec(rad * 2, 3);
      let fill = new Path2D();
      let clip = new Path2D();
      let { left: lft, top, width: wid, height: hgt } = u3.bbox;
      rectH(
        clip,
        lft - dia,
        top - dia,
        wid + dia * 2,
        hgt + dia * 2
      );
      const drawPoint = (pi) => {
        if (dataY[pi] != null) {
          let x2 = pxRound(valToPosX(dataX[pi], scaleX, xDim, xOff));
          let y3 = pxRound(valToPosY(dataY[pi], scaleY, yDim, yOff));
          moveTo(fill, x2 + rad, y3);
          arc(fill, x2, y3, rad, 0, PI * 2);
        }
      };
      if (filtIdxs)
        filtIdxs.forEach(drawPoint);
      else {
        for (let pi = idx0; pi <= idx1; pi++)
          drawPoint(pi);
      }
      return {
        stroke: width > 0 ? fill : null,
        fill,
        clip,
        flags: BAND_CLIP_FILL | BAND_CLIP_STROKE
      };
    });
  };
}
function _drawAcc(lineTo) {
  return (stroke, accX, minY, maxY, inY, outY) => {
    if (minY != maxY) {
      if (inY != minY && outY != minY)
        lineTo(stroke, accX, minY);
      if (inY != maxY && outY != maxY)
        lineTo(stroke, accX, maxY);
      lineTo(stroke, accX, outY);
    }
  };
}
var drawAccH = _drawAcc(lineToH);
var drawAccV = _drawAcc(lineToV);
function linear(opts) {
  const alignGaps = ifNull(opts == null ? void 0 : opts.alignGaps, 0);
  return (u3, seriesIdx, idx0, idx1) => {
    return orient(u3, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
      [idx0, idx1] = nonNullIdxs(dataY, idx0, idx1);
      let pxRound = series.pxRound;
      let pixelForX = (val) => pxRound(valToPosX(val, scaleX, xDim, xOff));
      let pixelForY = (val) => pxRound(valToPosY(val, scaleY, yDim, yOff));
      let lineTo, drawAcc;
      if (scaleX.ori == 0) {
        lineTo = lineToH;
        drawAcc = drawAccH;
      } else {
        lineTo = lineToV;
        drawAcc = drawAccV;
      }
      const dir = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
      const _paths = { stroke: new Path2D(), fill: null, clip: null, band: null, gaps: null, flags: BAND_CLIP_FILL };
      const stroke = _paths.stroke;
      let hasGap = false;
      const decimate = idx1 - idx0 >= xDim * 4;
      if (decimate) {
        let xForPixel = (pos) => u3.posToVal(pos, scaleX.key, true);
        let minY = null, maxY = null, inY, outY, drawnAtX;
        let accX = pixelForX(dataX[dir == 1 ? idx0 : idx1]);
        let idx0px = pixelForX(dataX[idx0]);
        let idx1px = pixelForX(dataX[idx1]);
        let nextAccXVal = xForPixel(dir == 1 ? idx0px + 1 : idx1px - 1);
        for (let i3 = dir == 1 ? idx0 : idx1; i3 >= idx0 && i3 <= idx1; i3 += dir) {
          let xVal = dataX[i3];
          let reuseAccX = dir == 1 ? xVal < nextAccXVal : xVal > nextAccXVal;
          let x2 = reuseAccX ? accX : pixelForX(xVal);
          let yVal = dataY[i3];
          if (x2 == accX) {
            if (yVal != null) {
              outY = yVal;
              if (minY == null) {
                lineTo(stroke, x2, pixelForY(outY));
                inY = minY = maxY = outY;
              } else {
                if (outY < minY)
                  minY = outY;
                else if (outY > maxY)
                  maxY = outY;
              }
            } else {
              if (yVal === null)
                hasGap = true;
            }
          } else {
            if (minY != null)
              drawAcc(stroke, accX, pixelForY(minY), pixelForY(maxY), pixelForY(inY), pixelForY(outY));
            if (yVal != null) {
              outY = yVal;
              lineTo(stroke, x2, pixelForY(outY));
              minY = maxY = inY = outY;
            } else {
              minY = maxY = null;
              if (yVal === null)
                hasGap = true;
            }
            accX = x2;
            nextAccXVal = xForPixel(accX + dir);
          }
        }
        if (minY != null && minY != maxY && drawnAtX != accX)
          drawAcc(stroke, accX, pixelForY(minY), pixelForY(maxY), pixelForY(inY), pixelForY(outY));
      } else {
        for (let i3 = dir == 1 ? idx0 : idx1; i3 >= idx0 && i3 <= idx1; i3 += dir) {
          let yVal = dataY[i3];
          if (yVal === null)
            hasGap = true;
          else if (yVal != null)
            lineTo(stroke, pixelForX(dataX[i3]), pixelForY(yVal));
        }
      }
      let [bandFillDir, bandClipDir] = bandFillClipDirs(u3, seriesIdx);
      if (series.fill != null || bandFillDir != 0) {
        let fill = _paths.fill = new Path2D(stroke);
        let fillToVal = series.fillTo(u3, seriesIdx, series.min, series.max, bandFillDir);
        let fillToY = pixelForY(fillToVal);
        let frX = pixelForX(dataX[idx0]);
        let toX = pixelForX(dataX[idx1]);
        if (dir == -1)
          [toX, frX] = [frX, toX];
        lineTo(fill, toX, fillToY);
        lineTo(fill, frX, fillToY);
      }
      if (!series.spanGaps) {
        let gaps2 = [];
        hasGap && gaps2.push(...findGaps(dataX, dataY, idx0, idx1, dir, pixelForX, alignGaps));
        _paths.gaps = gaps2 = series.gaps(u3, seriesIdx, idx0, idx1, gaps2);
        _paths.clip = clipGaps(gaps2, scaleX.ori, xOff, yOff, xDim, yDim);
      }
      if (bandClipDir != 0) {
        _paths.band = bandClipDir == 2 ? [
          clipBandLine(u3, seriesIdx, idx0, idx1, stroke, -1),
          clipBandLine(u3, seriesIdx, idx0, idx1, stroke, 1)
        ] : clipBandLine(u3, seriesIdx, idx0, idx1, stroke, bandClipDir);
      }
      return _paths;
    });
  };
}
function stepped(opts) {
  const align = ifNull(opts.align, 1);
  const ascDesc = ifNull(opts.ascDesc, false);
  const alignGaps = ifNull(opts.alignGaps, 0);
  const extend = ifNull(opts.extend, false);
  return (u3, seriesIdx, idx0, idx1) => {
    return orient(u3, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
      [idx0, idx1] = nonNullIdxs(dataY, idx0, idx1);
      let pxRound = series.pxRound;
      let { left, width } = u3.bbox;
      let pixelForX = (val) => pxRound(valToPosX(val, scaleX, xDim, xOff));
      let pixelForY = (val) => pxRound(valToPosY(val, scaleY, yDim, yOff));
      let lineTo = scaleX.ori == 0 ? lineToH : lineToV;
      const _paths = { stroke: new Path2D(), fill: null, clip: null, band: null, gaps: null, flags: BAND_CLIP_FILL };
      const stroke = _paths.stroke;
      const dir = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
      let prevYPos = pixelForY(dataY[dir == 1 ? idx0 : idx1]);
      let firstXPos = pixelForX(dataX[dir == 1 ? idx0 : idx1]);
      let prevXPos = firstXPos;
      let firstXPosExt = firstXPos;
      if (extend && align == -1) {
        firstXPosExt = left;
        lineTo(stroke, firstXPosExt, prevYPos);
      }
      lineTo(stroke, firstXPos, prevYPos);
      for (let i3 = dir == 1 ? idx0 : idx1; i3 >= idx0 && i3 <= idx1; i3 += dir) {
        let yVal1 = dataY[i3];
        if (yVal1 == null)
          continue;
        let x1 = pixelForX(dataX[i3]);
        let y1 = pixelForY(yVal1);
        if (align == 1)
          lineTo(stroke, x1, prevYPos);
        else
          lineTo(stroke, prevXPos, y1);
        lineTo(stroke, x1, y1);
        prevYPos = y1;
        prevXPos = x1;
      }
      let prevXPosExt = prevXPos;
      if (extend && align == 1) {
        prevXPosExt = left + width;
        lineTo(stroke, prevXPosExt, prevYPos);
      }
      let [bandFillDir, bandClipDir] = bandFillClipDirs(u3, seriesIdx);
      if (series.fill != null || bandFillDir != 0) {
        let fill = _paths.fill = new Path2D(stroke);
        let fillTo = series.fillTo(u3, seriesIdx, series.min, series.max, bandFillDir);
        let fillToY = pixelForY(fillTo);
        lineTo(fill, prevXPosExt, fillToY);
        lineTo(fill, firstXPosExt, fillToY);
      }
      if (!series.spanGaps) {
        let gaps2 = [];
        gaps2.push(...findGaps(dataX, dataY, idx0, idx1, dir, pixelForX, alignGaps));
        let halfStroke = series.width * pxRatio / 2;
        let startsOffset = ascDesc || align == 1 ? halfStroke : -halfStroke;
        let endsOffset = ascDesc || align == -1 ? -halfStroke : halfStroke;
        gaps2.forEach((g2) => {
          g2[0] += startsOffset;
          g2[1] += endsOffset;
        });
        _paths.gaps = gaps2 = series.gaps(u3, seriesIdx, idx0, idx1, gaps2);
        _paths.clip = clipGaps(gaps2, scaleX.ori, xOff, yOff, xDim, yDim);
      }
      if (bandClipDir != 0) {
        _paths.band = bandClipDir == 2 ? [
          clipBandLine(u3, seriesIdx, idx0, idx1, stroke, -1),
          clipBandLine(u3, seriesIdx, idx0, idx1, stroke, 1)
        ] : clipBandLine(u3, seriesIdx, idx0, idx1, stroke, bandClipDir);
      }
      return _paths;
    });
  };
}
function findColWidth(dataX, dataY, valToPosX, scaleX, xDim, xOff, colWid = inf) {
  if (dataX.length > 1) {
    let prevIdx = null;
    for (let i3 = 0, minDelta = Infinity; i3 < dataX.length; i3++) {
      if (dataY[i3] !== void 0) {
        if (prevIdx != null) {
          let delta = abs(dataX[i3] - dataX[prevIdx]);
          if (delta < minDelta) {
            minDelta = delta;
            colWid = abs(valToPosX(dataX[i3], scaleX, xDim, xOff) - valToPosX(dataX[prevIdx], scaleX, xDim, xOff));
          }
        }
        prevIdx = i3;
      }
    }
  }
  return colWid;
}
function bars(opts) {
  opts = opts || EMPTY_OBJ;
  const size = ifNull(opts.size, [0.6, inf, 1]);
  const align = opts.align || 0;
  const _extraGap = opts.gap || 0;
  let ro = opts.radius;
  ro = // [valueRadius, baselineRadius]
  ro == null ? [0, 0] : typeof ro == "number" ? [ro, 0] : ro;
  const radiusFn = fnOrSelf(ro);
  const gapFactor = 1 - size[0];
  const _maxWidth = ifNull(size[1], inf);
  const _minWidth = ifNull(size[2], 1);
  const disp = ifNull(opts.disp, EMPTY_OBJ);
  const _each = ifNull(opts.each, (_3) => {
  });
  const { fill: dispFills, stroke: dispStrokes } = disp;
  return (u3, seriesIdx, idx0, idx1) => {
    return orient(u3, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
      var _a, _b;
      let pxRound = series.pxRound;
      let _align = align;
      let extraGap = _extraGap * pxRatio;
      let maxWidth = _maxWidth * pxRatio;
      let minWidth = _minWidth * pxRatio;
      let valRadius, baseRadius;
      if (scaleX.ori == 0)
        [valRadius, baseRadius] = radiusFn(u3, seriesIdx);
      else
        [baseRadius, valRadius] = radiusFn(u3, seriesIdx);
      const _dirX = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
      let rect2 = scaleX.ori == 0 ? rectH : rectV;
      let each = scaleX.ori == 0 ? _each : (u4, seriesIdx2, i3, top, lft, hgt, wid) => {
        _each(u4, seriesIdx2, i3, lft, top, wid, hgt);
      };
      let band = ifNull(u3.bands, EMPTY_ARR).find((b) => b.series[0] == seriesIdx);
      let fillDir = band != null ? band.dir : 0;
      let fillTo = series.fillTo(u3, seriesIdx, series.min, series.max, fillDir);
      let fillToY = pxRound(valToPosY(fillTo, scaleY, yDim, yOff));
      let xShift, barWid, fullGap, colWid = xDim;
      let strokeWidth = pxRound(series.width * pxRatio);
      let multiPath = false;
      let fillColors = null;
      let fillPaths = null;
      let strokeColors = null;
      let strokePaths = null;
      if (dispFills != null && (strokeWidth == 0 || dispStrokes != null)) {
        multiPath = true;
        fillColors = dispFills.values(u3, seriesIdx, idx0, idx1);
        fillPaths = /* @__PURE__ */ new Map();
        new Set(fillColors).forEach((color) => {
          if (color != null)
            fillPaths.set(color, new Path2D());
        });
        if (strokeWidth > 0) {
          strokeColors = dispStrokes.values(u3, seriesIdx, idx0, idx1);
          strokePaths = /* @__PURE__ */ new Map();
          new Set(strokeColors).forEach((color) => {
            if (color != null)
              strokePaths.set(color, new Path2D());
          });
        }
      }
      let { x0, size: size2 } = disp;
      if (x0 != null && size2 != null) {
        _align = 1;
        dataX = x0.values(u3, seriesIdx, idx0, idx1);
        if (x0.unit == 2)
          dataX = dataX.map((pct) => u3.posToVal(xOff + pct * xDim, scaleX.key, true));
        let sizes = size2.values(u3, seriesIdx, idx0, idx1);
        if (size2.unit == 2)
          barWid = sizes[0] * xDim;
        else
          barWid = valToPosX(sizes[0], scaleX, xDim, xOff) - valToPosX(0, scaleX, xDim, xOff);
        colWid = findColWidth(dataX, dataY, valToPosX, scaleX, xDim, xOff, colWid);
        let gapWid = colWid - barWid;
        fullGap = gapWid + extraGap;
      } else {
        colWid = findColWidth(dataX, dataY, valToPosX, scaleX, xDim, xOff, colWid);
        let gapWid = colWid * gapFactor;
        fullGap = gapWid + extraGap;
        barWid = colWid - fullGap;
      }
      if (fullGap < 1)
        fullGap = 0;
      if (strokeWidth >= barWid / 2)
        strokeWidth = 0;
      if (fullGap < 5)
        pxRound = retArg0;
      let insetStroke = fullGap > 0;
      let rawBarWid = colWid - fullGap - (insetStroke ? strokeWidth : 0);
      barWid = pxRound(clamp(rawBarWid, minWidth, maxWidth));
      xShift = (_align == 0 ? barWid / 2 : _align == _dirX ? 0 : barWid) - _align * _dirX * ((_align == 0 ? extraGap / 2 : 0) + (insetStroke ? strokeWidth / 2 : 0));
      const _paths = { stroke: null, fill: null, clip: null, band: null, gaps: null, flags: 0 };
      const stroke = multiPath ? null : new Path2D();
      let dataY0 = null;
      if (band != null)
        dataY0 = u3.data[band.series[1]];
      else {
        let { y0, y1 } = disp;
        if (y0 != null && y1 != null) {
          dataY = y1.values(u3, seriesIdx, idx0, idx1);
          dataY0 = y0.values(u3, seriesIdx, idx0, idx1);
        }
      }
      let radVal = valRadius * barWid;
      let radBase = baseRadius * barWid;
      for (let i3 = _dirX == 1 ? idx0 : idx1; i3 >= idx0 && i3 <= idx1; i3 += _dirX) {
        let yVal = dataY[i3];
        if (yVal == null)
          continue;
        if (dataY0 != null) {
          let yVal0 = (_a = dataY0[i3]) != null ? _a : 0;
          if (yVal - yVal0 == 0)
            continue;
          fillToY = valToPosY(yVal0, scaleY, yDim, yOff);
        }
        let xVal = scaleX.distr != 2 || disp != null ? dataX[i3] : i3;
        let xPos = valToPosX(xVal, scaleX, xDim, xOff);
        let yPos = valToPosY(ifNull(yVal, fillTo), scaleY, yDim, yOff);
        let lft = pxRound(xPos - xShift);
        let btm = pxRound(max(yPos, fillToY));
        let top = pxRound(min(yPos, fillToY));
        let barHgt = btm - top;
        if (yVal != null) {
          let rv = yVal < 0 ? radBase : radVal;
          let rb = yVal < 0 ? radVal : radBase;
          if (multiPath) {
            if (strokeWidth > 0 && strokeColors[i3] != null)
              rect2(strokePaths.get(strokeColors[i3]), lft, top + floor(strokeWidth / 2), barWid, max(0, barHgt - strokeWidth), rv, rb);
            if (fillColors[i3] != null)
              rect2(fillPaths.get(fillColors[i3]), lft, top + floor(strokeWidth / 2), barWid, max(0, barHgt - strokeWidth), rv, rb);
          } else
            rect2(stroke, lft, top + floor(strokeWidth / 2), barWid, max(0, barHgt - strokeWidth), rv, rb);
          each(
            u3,
            seriesIdx,
            i3,
            lft - strokeWidth / 2,
            top,
            barWid + strokeWidth,
            barHgt
          );
        }
      }
      if (strokeWidth > 0)
        _paths.stroke = multiPath ? strokePaths : stroke;
      else if (!multiPath) {
        _paths._fill = series.width == 0 ? series._fill : (_b = series._stroke) != null ? _b : series._fill;
        _paths.width = 0;
      }
      _paths.fill = multiPath ? fillPaths : stroke;
      return _paths;
    });
  };
}
function splineInterp(interp, opts) {
  const alignGaps = ifNull(opts == null ? void 0 : opts.alignGaps, 0);
  return (u3, seriesIdx, idx0, idx1) => {
    return orient(u3, seriesIdx, (series, dataX, dataY, scaleX, scaleY, valToPosX, valToPosY, xOff, yOff, xDim, yDim) => {
      [idx0, idx1] = nonNullIdxs(dataY, idx0, idx1);
      let pxRound = series.pxRound;
      let pixelForX = (val) => pxRound(valToPosX(val, scaleX, xDim, xOff));
      let pixelForY = (val) => pxRound(valToPosY(val, scaleY, yDim, yOff));
      let moveTo, bezierCurveTo, lineTo;
      if (scaleX.ori == 0) {
        moveTo = moveToH;
        lineTo = lineToH;
        bezierCurveTo = bezierCurveToH;
      } else {
        moveTo = moveToV;
        lineTo = lineToV;
        bezierCurveTo = bezierCurveToV;
      }
      const dir = scaleX.dir * (scaleX.ori == 0 ? 1 : -1);
      let firstXPos = pixelForX(dataX[dir == 1 ? idx0 : idx1]);
      let prevXPos = firstXPos;
      let xCoords = [];
      let yCoords = [];
      for (let i3 = dir == 1 ? idx0 : idx1; i3 >= idx0 && i3 <= idx1; i3 += dir) {
        let yVal = dataY[i3];
        if (yVal != null) {
          let xVal = dataX[i3];
          let xPos = pixelForX(xVal);
          xCoords.push(prevXPos = xPos);
          yCoords.push(pixelForY(dataY[i3]));
        }
      }
      const _paths = { stroke: interp(xCoords, yCoords, moveTo, lineTo, bezierCurveTo, pxRound), fill: null, clip: null, band: null, gaps: null, flags: BAND_CLIP_FILL };
      const stroke = _paths.stroke;
      let [bandFillDir, bandClipDir] = bandFillClipDirs(u3, seriesIdx);
      if (series.fill != null || bandFillDir != 0) {
        let fill = _paths.fill = new Path2D(stroke);
        let fillTo = series.fillTo(u3, seriesIdx, series.min, series.max, bandFillDir);
        let fillToY = pixelForY(fillTo);
        lineTo(fill, prevXPos, fillToY);
        lineTo(fill, firstXPos, fillToY);
      }
      if (!series.spanGaps) {
        let gaps2 = [];
        gaps2.push(...findGaps(dataX, dataY, idx0, idx1, dir, pixelForX, alignGaps));
        _paths.gaps = gaps2 = series.gaps(u3, seriesIdx, idx0, idx1, gaps2);
        _paths.clip = clipGaps(gaps2, scaleX.ori, xOff, yOff, xDim, yDim);
      }
      if (bandClipDir != 0) {
        _paths.band = bandClipDir == 2 ? [
          clipBandLine(u3, seriesIdx, idx0, idx1, stroke, -1),
          clipBandLine(u3, seriesIdx, idx0, idx1, stroke, 1)
        ] : clipBandLine(u3, seriesIdx, idx0, idx1, stroke, bandClipDir);
      }
      return _paths;
    });
  };
}
function monotoneCubic(opts) {
  return splineInterp(_monotoneCubic, opts);
}
function _monotoneCubic(xs, ys, moveTo, lineTo, bezierCurveTo, pxRound) {
  const n3 = xs.length;
  if (n3 < 2)
    return null;
  const path = new Path2D();
  moveTo(path, xs[0], ys[0]);
  if (n3 == 2)
    lineTo(path, xs[1], ys[1]);
  else {
    let ms = Array(n3), ds = Array(n3 - 1), dys = Array(n3 - 1), dxs = Array(n3 - 1);
    for (let i3 = 0; i3 < n3 - 1; i3++) {
      dys[i3] = ys[i3 + 1] - ys[i3];
      dxs[i3] = xs[i3 + 1] - xs[i3];
      ds[i3] = dys[i3] / dxs[i3];
    }
    ms[0] = ds[0];
    for (let i3 = 1; i3 < n3 - 1; i3++) {
      if (ds[i3] === 0 || ds[i3 - 1] === 0 || ds[i3 - 1] > 0 !== ds[i3] > 0)
        ms[i3] = 0;
      else {
        ms[i3] = 3 * (dxs[i3 - 1] + dxs[i3]) / ((2 * dxs[i3] + dxs[i3 - 1]) / ds[i3 - 1] + (dxs[i3] + 2 * dxs[i3 - 1]) / ds[i3]);
        if (!isFinite(ms[i3]))
          ms[i3] = 0;
      }
    }
    ms[n3 - 1] = ds[n3 - 2];
    for (let i3 = 0; i3 < n3 - 1; i3++) {
      bezierCurveTo(
        path,
        xs[i3] + dxs[i3] / 3,
        ys[i3] + ms[i3] * dxs[i3] / 3,
        xs[i3 + 1] - dxs[i3] / 3,
        ys[i3 + 1] - ms[i3 + 1] * dxs[i3] / 3,
        xs[i3 + 1],
        ys[i3 + 1]
      );
    }
  }
  return path;
}
var cursorPlots = /* @__PURE__ */ new Set();
function invalidateRects() {
  for (let u3 of cursorPlots)
    u3.syncRect(true);
}
if (domEnv) {
  on(resize, win, invalidateRects);
  on(scroll, win, invalidateRects, true);
  on(dppxchange, win, () => {
    uPlot.pxRatio = pxRatio;
  });
}
var linearPath = linear();
var pointsPath = points();
function setDefaults(d3, xo, yo, initY) {
  let d22 = initY ? [d3[0], d3[1]].concat(d3.slice(2)) : [d3[0]].concat(d3.slice(1));
  return d22.map((o3, i3) => setDefault(o3, i3, xo, yo));
}
function setDefaults2(d3, xyo) {
  return d3.map((o3, i3) => i3 == 0 ? {} : assign({}, xyo, o3));
}
function setDefault(o3, i3, xo, yo) {
  return assign({}, i3 == 0 ? xo : yo, o3);
}
function snapNumX(self, dataMin, dataMax) {
  return dataMin == null ? nullNullTuple : [dataMin, dataMax];
}
var snapTimeX = snapNumX;
function snapNumY(self, dataMin, dataMax) {
  return dataMin == null ? nullNullTuple : rangeNum(dataMin, dataMax, rangePad, true);
}
function snapLogY(self, dataMin, dataMax, scale) {
  return dataMin == null ? nullNullTuple : rangeLog(dataMin, dataMax, self.scales[scale].log, false);
}
var snapLogX = snapLogY;
function snapAsinhY(self, dataMin, dataMax, scale) {
  return dataMin == null ? nullNullTuple : rangeAsinh(dataMin, dataMax, self.scales[scale].log, false);
}
var snapAsinhX = snapAsinhY;
function findIncr(minVal, maxVal, incrs, dim, minSpace) {
  let intDigits = max(numIntDigits(minVal), numIntDigits(maxVal));
  let delta = maxVal - minVal;
  let incrIdx = closestIdx(minSpace / dim * delta, incrs);
  do {
    let foundIncr = incrs[incrIdx];
    let foundSpace = dim * foundIncr / delta;
    if (foundSpace >= minSpace && intDigits + (foundIncr < 5 ? fixedDec.get(foundIncr) : 0) <= 17)
      return [foundIncr, foundSpace];
  } while (++incrIdx < incrs.length);
  return [0, 0];
}
function pxRatioFont(font2) {
  let fontSize, fontSizeCss;
  font2 = font2.replace(/(\d+)px/, (m4, p1) => (fontSize = round((fontSizeCss = +p1) * pxRatio)) + "px");
  return [font2, fontSize, fontSizeCss];
}
function syncFontSize(axis) {
  if (axis.show) {
    [axis.font, axis.labelFont].forEach((f3) => {
      let size = roundDec(f3[2] * pxRatio, 1);
      f3[0] = f3[0].replace(/[0-9.]+px/, size + "px");
      f3[1] = size;
    });
  }
}
function uPlot(opts, data, then) {
  var _a, _b;
  const self = {
    mode: ifNull(opts.mode, 1)
  };
  const mode = self.mode;
  function getHPos(val, scale, dim, off2) {
    let pct = scale.valToPct(val);
    return off2 + dim * (scale.dir == -1 ? 1 - pct : pct);
  }
  function getVPos(val, scale, dim, off2) {
    let pct = scale.valToPct(val);
    return off2 + dim * (scale.dir == -1 ? pct : 1 - pct);
  }
  function getPos(val, scale, dim, off2) {
    return scale.ori == 0 ? getHPos(val, scale, dim, off2) : getVPos(val, scale, dim, off2);
  }
  self.valToPosH = getHPos;
  self.valToPosV = getVPos;
  let ready = false;
  self.status = 0;
  const root = self.root = placeDiv(UPLOT);
  if (opts.id != null)
    root.id = opts.id;
  addClass(root, opts.class);
  if (opts.title) {
    let title = placeDiv(TITLE, root);
    title.textContent = opts.title;
  }
  const can = placeTag("canvas");
  const ctx = self.ctx = can.getContext("2d");
  const wrap = placeDiv(WRAP, root);
  on("click", wrap, (e3) => {
    if (e3.target === over) {
      let didDrag = mouseLeft1 != mouseLeft0 || mouseTop1 != mouseTop0;
      didDrag && drag.click(self, e3);
    }
  }, true);
  const under = self.under = placeDiv(UNDER, wrap);
  wrap.appendChild(can);
  const over = self.over = placeDiv(OVER, wrap);
  opts = copy(opts);
  const pxAlign = +ifNull(opts.pxAlign, 1);
  const pxRound = pxRoundGen(pxAlign);
  (opts.plugins || []).forEach((p3) => {
    if (p3.opts)
      opts = p3.opts(self, opts) || opts;
  });
  const ms = opts.ms || 1e-3;
  const series = self.series = mode == 1 ? setDefaults(opts.series || [], xSeriesOpts, ySeriesOpts, false) : setDefaults2(opts.series || [null], xySeriesOpts);
  const axes = self.axes = setDefaults(opts.axes || [], xAxisOpts, yAxisOpts, true);
  const scales = self.scales = {};
  const bands = self.bands = opts.bands || [];
  bands.forEach((b) => {
    b.fill = fnOrSelf(b.fill || null);
    b.dir = ifNull(b.dir, -1);
  });
  const xScaleKey = mode == 2 ? series[1].facets[0].scale : series[0].scale;
  const drawOrderMap = {
    axes: drawAxesGrid,
    series: drawSeries
  };
  const drawOrder = (opts.drawOrder || ["axes", "series"]).map((key2) => drawOrderMap[key2]);
  function initValToPct(sc) {
    const getVal = sc.distr == 3 ? (val) => log10(val > 0 ? val : sc.clamp(self, val, sc.min, sc.max, sc.key)) : sc.distr == 4 ? (val) => asinh(val, sc.asinh) : sc.distr == 100 ? (val) => sc.fwd(val) : (val) => val;
    return (val) => {
      let _val = getVal(val);
      let { _min, _max } = sc;
      let delta = _max - _min;
      return (_val - _min) / delta;
    };
  }
  function initScale(scaleKey) {
    let sc = scales[scaleKey];
    if (sc == null) {
      let scaleOpts = (opts.scales || EMPTY_OBJ)[scaleKey] || EMPTY_OBJ;
      if (scaleOpts.from != null) {
        initScale(scaleOpts.from);
        let sc2 = assign({}, scales[scaleOpts.from], scaleOpts, { key: scaleKey });
        sc2.valToPct = initValToPct(sc2);
        scales[scaleKey] = sc2;
      } else {
        sc = scales[scaleKey] = assign({}, scaleKey == xScaleKey ? xScaleOpts : yScaleOpts, scaleOpts);
        sc.key = scaleKey;
        let isTime = sc.time;
        let rn = sc.range;
        let rangeIsArr = isArr(rn);
        if (scaleKey != xScaleKey || mode == 2 && !isTime) {
          if (rangeIsArr && (rn[0] == null || rn[1] == null)) {
            rn = {
              min: rn[0] == null ? autoRangePart : {
                mode: 1,
                hard: rn[0],
                soft: rn[0]
              },
              max: rn[1] == null ? autoRangePart : {
                mode: 1,
                hard: rn[1],
                soft: rn[1]
              }
            };
            rangeIsArr = false;
          }
          if (!rangeIsArr && isObj(rn)) {
            let cfg = rn;
            rn = (self2, dataMin, dataMax) => dataMin == null ? nullNullTuple : rangeNum(dataMin, dataMax, cfg);
          }
        }
        sc.range = fnOrSelf(rn || (isTime ? snapTimeX : scaleKey == xScaleKey ? sc.distr == 3 ? snapLogX : sc.distr == 4 ? snapAsinhX : snapNumX : sc.distr == 3 ? snapLogY : sc.distr == 4 ? snapAsinhY : snapNumY));
        sc.auto = fnOrSelf(rangeIsArr ? false : sc.auto);
        sc.clamp = fnOrSelf(sc.clamp || clampScale);
        sc._min = sc._max = null;
        sc.valToPct = initValToPct(sc);
      }
    }
  }
  initScale("x");
  initScale("y");
  if (mode == 1) {
    series.forEach((s3) => {
      initScale(s3.scale);
    });
  }
  axes.forEach((a3) => {
    initScale(a3.scale);
  });
  for (let k3 in opts.scales)
    initScale(k3);
  const scaleX = scales[xScaleKey];
  const xScaleDistr = scaleX.distr;
  let valToPosX, valToPosY;
  if (scaleX.ori == 0) {
    addClass(root, ORI_HZ);
    valToPosX = getHPos;
    valToPosY = getVPos;
  } else {
    addClass(root, ORI_VT);
    valToPosX = getVPos;
    valToPosY = getHPos;
  }
  const pendScales = {};
  for (let k3 in scales) {
    let sc = scales[k3];
    if (sc.min != null || sc.max != null) {
      pendScales[k3] = { min: sc.min, max: sc.max };
      sc.min = sc.max = null;
    }
  }
  const _tzDate = opts.tzDate || ((ts) => new Date(round(ts / ms)));
  const _fmtDate = opts.fmtDate || fmtDate;
  const _timeAxisSplits = ms == 1 ? timeAxisSplitsMs(_tzDate) : timeAxisSplitsS(_tzDate);
  const _timeAxisVals = timeAxisVals(_tzDate, timeAxisStamps(ms == 1 ? _timeAxisStampsMs : _timeAxisStampsS, _fmtDate));
  const _timeSeriesVal = timeSeriesVal(_tzDate, timeSeriesStamp(_timeSeriesStamp, _fmtDate));
  const activeIdxs = [];
  const legend = self.legend = assign({}, legendOpts, opts.legend);
  const cursor = self.cursor = assign({}, cursorOpts, { drag: { y: mode == 2 } }, opts.cursor);
  const showLegend = legend.show;
  const showCursor = cursor.show;
  const markers = legend.markers;
  {
    legend.idxs = activeIdxs;
    markers.width = fnOrSelf(markers.width);
    markers.dash = fnOrSelf(markers.dash);
    markers.stroke = fnOrSelf(markers.stroke);
    markers.fill = fnOrSelf(markers.fill);
  }
  let legendTable;
  let legendHead;
  let legendBody;
  let legendRows = [];
  let legendCells = [];
  let legendCols;
  let multiValLegend = false;
  let NULL_LEGEND_VALUES = {};
  if (legend.live) {
    const getMultiVals = series[1] ? series[1].values : null;
    multiValLegend = getMultiVals != null;
    legendCols = multiValLegend ? getMultiVals(self, 1, 0) : { _: 0 };
    for (let k3 in legendCols)
      NULL_LEGEND_VALUES[k3] = LEGEND_DISP;
  }
  if (showLegend) {
    legendTable = placeTag("table", LEGEND, root);
    legendBody = placeTag("tbody", null, legendTable);
    legend.mount(self, legendTable);
    if (multiValLegend) {
      legendHead = placeTag("thead", null, legendTable, legendBody);
      let head = placeTag("tr", null, legendHead);
      placeTag("th", null, head);
      for (var key in legendCols)
        placeTag("th", LEGEND_LABEL, head).textContent = key;
    } else {
      addClass(legendTable, LEGEND_INLINE);
      legend.live && addClass(legendTable, LEGEND_LIVE);
    }
  }
  const son = { show: true };
  const soff = { show: false };
  function initLegendRow(s3, i3) {
    if (i3 == 0 && (multiValLegend || !legend.live || mode == 2))
      return nullNullTuple;
    let cells = [];
    let row = placeTag("tr", LEGEND_SERIES, legendBody, legendBody.childNodes[i3]);
    addClass(row, s3.class);
    if (!s3.show)
      addClass(row, OFF);
    let label = placeTag("th", null, row);
    if (markers.show) {
      let indic = placeDiv(LEGEND_MARKER, label);
      if (i3 > 0) {
        let width = markers.width(self, i3);
        if (width)
          indic.style.border = width + "px " + markers.dash(self, i3) + " " + markers.stroke(self, i3);
        indic.style.background = markers.fill(self, i3);
      }
    }
    let text = placeDiv(LEGEND_LABEL, label);
    if (s3.label instanceof HTMLElement)
      text.appendChild(s3.label);
    else
      text.textContent = s3.label;
    if (i3 > 0) {
      if (!markers.show)
        text.style.color = s3.width > 0 ? markers.stroke(self, i3) : markers.fill(self, i3);
      onMouse("click", label, (e3) => {
        if (cursor._lock)
          return;
        setCursorEvent(e3);
        let seriesIdx = series.indexOf(s3);
        if ((e3.ctrlKey || e3.metaKey) != legend.isolate) {
          let isolate = series.some((s4, i4) => i4 > 0 && i4 != seriesIdx && s4.show);
          series.forEach((s4, i4) => {
            i4 > 0 && setSeries(i4, isolate ? i4 == seriesIdx ? son : soff : son, true, syncOpts.setSeries);
          });
        } else
          setSeries(seriesIdx, { show: !s3.show }, true, syncOpts.setSeries);
      }, false);
      if (cursorFocus) {
        onMouse(mouseenter, label, (e3) => {
          if (cursor._lock)
            return;
          setCursorEvent(e3);
          setSeries(series.indexOf(s3), FOCUS_TRUE, true, syncOpts.setSeries);
        }, false);
      }
    }
    for (var _ in legendCols) {
      let v3 = placeTag("td", LEGEND_VALUE, row);
      v3.textContent = "--";
      cells.push(v3);
    }
    return [row, cells];
  }
  const mouseListeners = /* @__PURE__ */ new Map();
  function onMouse(ev, targ, fn, onlyTarg = true) {
    const targListeners = mouseListeners.get(targ) || {};
    const listener = cursor.bind[ev](self, targ, fn, onlyTarg);
    if (listener) {
      on(ev, targ, targListeners[ev] = listener);
      mouseListeners.set(targ, targListeners);
    }
  }
  function offMouse(ev, targ, fn) {
    const targListeners = mouseListeners.get(targ) || {};
    for (let k3 in targListeners) {
      if (ev == null || k3 == ev) {
        off(k3, targ, targListeners[k3]);
        delete targListeners[k3];
      }
    }
    if (ev == null)
      mouseListeners.delete(targ);
  }
  let fullWidCss = 0;
  let fullHgtCss = 0;
  let plotWidCss = 0;
  let plotHgtCss = 0;
  let plotLftCss = 0;
  let plotTopCss = 0;
  let _plotLftCss = plotLftCss;
  let _plotTopCss = plotTopCss;
  let _plotWidCss = plotWidCss;
  let _plotHgtCss = plotHgtCss;
  let plotLft = 0;
  let plotTop = 0;
  let plotWid = 0;
  let plotHgt = 0;
  self.bbox = {};
  let shouldSetScales = false;
  let shouldSetSize = false;
  let shouldConvergeSize = false;
  let shouldSetCursor = false;
  let shouldSetSelect = false;
  let shouldSetLegend = false;
  function _setSize(width, height, force) {
    if (force || (width != self.width || height != self.height))
      calcSize(width, height);
    resetYSeries(false);
    shouldConvergeSize = true;
    shouldSetSize = true;
    commit();
  }
  function calcSize(width, height) {
    self.width = fullWidCss = plotWidCss = width;
    self.height = fullHgtCss = plotHgtCss = height;
    plotLftCss = plotTopCss = 0;
    calcPlotRect();
    calcAxesRects();
    let bb = self.bbox;
    plotLft = bb.left = incrRound(plotLftCss * pxRatio, 0.5);
    plotTop = bb.top = incrRound(plotTopCss * pxRatio, 0.5);
    plotWid = bb.width = incrRound(plotWidCss * pxRatio, 0.5);
    plotHgt = bb.height = incrRound(plotHgtCss * pxRatio, 0.5);
  }
  const CYCLE_LIMIT = 3;
  function convergeSize() {
    let converged = false;
    let cycleNum = 0;
    while (!converged) {
      cycleNum++;
      let axesConverged = axesCalc(cycleNum);
      let paddingConverged = paddingCalc(cycleNum);
      converged = cycleNum == CYCLE_LIMIT || axesConverged && paddingConverged;
      if (!converged) {
        calcSize(self.width, self.height);
        shouldSetSize = true;
      }
    }
  }
  function setSize({ width, height }) {
    _setSize(width, height);
  }
  self.setSize = setSize;
  function calcPlotRect() {
    let hasTopAxis = false;
    let hasBtmAxis = false;
    let hasRgtAxis = false;
    let hasLftAxis = false;
    axes.forEach((axis, i3) => {
      if (axis.show && axis._show) {
        let { side, _size } = axis;
        let isVt = side % 2;
        let labelSize = axis.label != null ? axis.labelSize : 0;
        let fullSize = _size + labelSize;
        if (fullSize > 0) {
          if (isVt) {
            plotWidCss -= fullSize;
            if (side == 3) {
              plotLftCss += fullSize;
              hasLftAxis = true;
            } else
              hasRgtAxis = true;
          } else {
            plotHgtCss -= fullSize;
            if (side == 0) {
              plotTopCss += fullSize;
              hasTopAxis = true;
            } else
              hasBtmAxis = true;
          }
        }
      }
    });
    sidesWithAxes[0] = hasTopAxis;
    sidesWithAxes[1] = hasRgtAxis;
    sidesWithAxes[2] = hasBtmAxis;
    sidesWithAxes[3] = hasLftAxis;
    plotWidCss -= _padding[1] + _padding[3];
    plotLftCss += _padding[3];
    plotHgtCss -= _padding[2] + _padding[0];
    plotTopCss += _padding[0];
  }
  function calcAxesRects() {
    let off1 = plotLftCss + plotWidCss;
    let off2 = plotTopCss + plotHgtCss;
    let off3 = plotLftCss;
    let off0 = plotTopCss;
    function incrOffset(side, size) {
      switch (side) {
        case 1:
          off1 += size;
          return off1 - size;
        case 2:
          off2 += size;
          return off2 - size;
        case 3:
          off3 -= size;
          return off3 + size;
        case 0:
          off0 -= size;
          return off0 + size;
      }
    }
    axes.forEach((axis, i3) => {
      if (axis.show && axis._show) {
        let side = axis.side;
        axis._pos = incrOffset(side, axis._size);
        if (axis.label != null)
          axis._lpos = incrOffset(side, axis.labelSize);
      }
    });
  }
  if (cursor.dataIdx == null) {
    let hov = cursor.hover;
    let skip = hov.skip = new Set((_a = hov.skip) != null ? _a : []);
    skip.add(void 0);
    let prox = hov.prox = fnOrSelf(hov.prox);
    let bias = (_b = hov.bias) != null ? _b : hov.bias = 0;
    cursor.dataIdx = (self2, seriesIdx, cursorIdx, valAtPosX) => {
      var _a2;
      if (seriesIdx == 0)
        return cursorIdx;
      let idx2 = cursorIdx;
      let _prox = (_a2 = prox(self2, seriesIdx, cursorIdx, valAtPosX)) != null ? _a2 : inf;
      let withProx = _prox >= 0 && _prox < inf;
      let xDim = scaleX.ori == 0 ? plotWidCss : plotHgtCss;
      let cursorLft = cursor.left;
      let xValues = data[0];
      let yValues = data[seriesIdx];
      if (skip.has(yValues[cursorIdx])) {
        idx2 = null;
        let nonNullLft = null, nonNullRgt = null, j3;
        if (bias == 0 || bias == -1) {
          j3 = cursorIdx;
          while (nonNullLft == null && j3-- > 0) {
            if (!skip.has(yValues[j3]))
              nonNullLft = j3;
          }
        }
        if (bias == 0 || bias == 1) {
          j3 = cursorIdx;
          while (nonNullRgt == null && j3++ < yValues.length) {
            if (!skip.has(yValues[j3]))
              nonNullRgt = j3;
          }
        }
        if (nonNullLft != null || nonNullRgt != null) {
          if (withProx) {
            let lftPos = nonNullLft == null ? -Infinity : valToPosX(xValues[nonNullLft], scaleX, xDim, 0);
            let rgtPos = nonNullRgt == null ? Infinity : valToPosX(xValues[nonNullRgt], scaleX, xDim, 0);
            let lftDelta = cursorLft - lftPos;
            let rgtDelta = rgtPos - cursorLft;
            if (lftDelta <= rgtDelta) {
              if (lftDelta <= _prox)
                idx2 = nonNullLft;
            } else {
              if (rgtDelta <= _prox)
                idx2 = nonNullRgt;
            }
          } else {
            idx2 = nonNullRgt == null ? nonNullLft : nonNullLft == null ? nonNullRgt : cursorIdx - nonNullLft <= nonNullRgt - cursorIdx ? nonNullLft : nonNullRgt;
          }
        }
      } else if (withProx) {
        let dist = abs(cursorLft - valToPosX(xValues[cursorIdx], scaleX, xDim, 0));
        if (dist > _prox)
          idx2 = null;
      }
      return idx2;
    };
  }
  const setCursorEvent = (e3) => {
    cursor.event = e3;
  };
  cursor.idxs = activeIdxs;
  cursor._lock = false;
  let points2 = cursor.points;
  points2.show = fnOrSelf(points2.show);
  points2.size = fnOrSelf(points2.size);
  points2.stroke = fnOrSelf(points2.stroke);
  points2.width = fnOrSelf(points2.width);
  points2.fill = fnOrSelf(points2.fill);
  const focus = self.focus = assign({}, opts.focus || { alpha: 0.3 }, cursor.focus);
  const cursorFocus = focus.prox >= 0;
  const cursorOnePt = cursorFocus && points2.one;
  let cursorPts = [];
  let cursorPtsLft = [];
  let cursorPtsTop = [];
  function initCursorPt(s3, si) {
    let pt = points2.show(self, si);
    if (pt instanceof HTMLElement) {
      addClass(pt, CURSOR_PT);
      addClass(pt, s3.class);
      elTrans(pt, -10, -10, plotWidCss, plotHgtCss);
      over.insertBefore(pt, cursorPts[si]);
      return pt;
    }
  }
  function initSeries(s3, i3) {
    if (mode == 1 || i3 > 0) {
      let isTime = mode == 1 && scales[s3.scale].time;
      let sv = s3.value;
      s3.value = isTime ? isStr(sv) ? timeSeriesVal(_tzDate, timeSeriesStamp(sv, _fmtDate)) : sv || _timeSeriesVal : sv || numSeriesVal;
      s3.label = s3.label || (isTime ? timeSeriesLabel : numSeriesLabel);
    }
    if (cursorOnePt || i3 > 0) {
      s3.width = s3.width == null ? 1 : s3.width;
      s3.paths = s3.paths || linearPath || retNull;
      s3.fillTo = fnOrSelf(s3.fillTo || seriesFillTo);
      s3.pxAlign = +ifNull(s3.pxAlign, pxAlign);
      s3.pxRound = pxRoundGen(s3.pxAlign);
      s3.stroke = fnOrSelf(s3.stroke || null);
      s3.fill = fnOrSelf(s3.fill || null);
      s3._stroke = s3._fill = s3._paths = s3._focus = null;
      let _ptDia = ptDia(max(1, s3.width), 1);
      let points3 = s3.points = assign({}, {
        size: _ptDia,
        width: max(1, _ptDia * 0.2),
        stroke: s3.stroke,
        space: _ptDia * 2,
        paths: pointsPath,
        _stroke: null,
        _fill: null
      }, s3.points);
      points3.show = fnOrSelf(points3.show);
      points3.filter = fnOrSelf(points3.filter);
      points3.fill = fnOrSelf(points3.fill);
      points3.stroke = fnOrSelf(points3.stroke);
      points3.paths = fnOrSelf(points3.paths);
      points3.pxAlign = s3.pxAlign;
    }
    if (showLegend) {
      let rowCells = initLegendRow(s3, i3);
      legendRows.splice(i3, 0, rowCells[0]);
      legendCells.splice(i3, 0, rowCells[1]);
      legend.values.push(null);
    }
    if (showCursor) {
      activeIdxs.splice(i3, 0, null);
      let pt = null;
      if (cursorOnePt) {
        if (i3 == 0)
          pt = initCursorPt(s3, i3);
      } else if (i3 > 0)
        pt = initCursorPt(s3, i3);
      cursorPts.splice(i3, 0, pt);
      cursorPtsLft.splice(i3, 0, 0);
      cursorPtsTop.splice(i3, 0, 0);
    }
    fire("addSeries", i3);
  }
  function addSeries(opts2, si) {
    si = si == null ? series.length : si;
    opts2 = mode == 1 ? setDefault(opts2, si, xSeriesOpts, ySeriesOpts) : setDefault(opts2, si, {}, xySeriesOpts);
    series.splice(si, 0, opts2);
    initSeries(series[si], si);
  }
  self.addSeries = addSeries;
  function delSeries(i3) {
    series.splice(i3, 1);
    if (showLegend) {
      legend.values.splice(i3, 1);
      legendCells.splice(i3, 1);
      let tr = legendRows.splice(i3, 1)[0];
      offMouse(null, tr.firstChild);
      tr.remove();
    }
    if (showCursor) {
      activeIdxs.splice(i3, 1);
      cursorPts.splice(i3, 1)[0].remove();
      cursorPtsLft.splice(i3, 1);
      cursorPtsTop.splice(i3, 1);
    }
    fire("delSeries", i3);
  }
  self.delSeries = delSeries;
  const sidesWithAxes = [false, false, false, false];
  function initAxis(axis, i3) {
    axis._show = axis.show;
    if (axis.show) {
      let isVt = axis.side % 2;
      let sc = scales[axis.scale];
      if (sc == null) {
        axis.scale = isVt ? series[1].scale : xScaleKey;
        sc = scales[axis.scale];
      }
      let isTime = sc.time;
      axis.size = fnOrSelf(axis.size);
      axis.space = fnOrSelf(axis.space);
      axis.rotate = fnOrSelf(axis.rotate);
      if (isArr(axis.incrs)) {
        axis.incrs.forEach((incr) => {
          !fixedDec.has(incr) && fixedDec.set(incr, guessDec(incr));
        });
      }
      axis.incrs = fnOrSelf(axis.incrs || (sc.distr == 2 ? wholeIncrs : isTime ? ms == 1 ? timeIncrsMs : timeIncrsS : numIncrs));
      axis.splits = fnOrSelf(axis.splits || (isTime && sc.distr == 1 ? _timeAxisSplits : sc.distr == 3 ? logAxisSplits : sc.distr == 4 ? asinhAxisSplits : numAxisSplits));
      axis.stroke = fnOrSelf(axis.stroke);
      axis.grid.stroke = fnOrSelf(axis.grid.stroke);
      axis.ticks.stroke = fnOrSelf(axis.ticks.stroke);
      axis.border.stroke = fnOrSelf(axis.border.stroke);
      let av = axis.values;
      axis.values = // static array of tick values
      isArr(av) && !isArr(av[0]) ? fnOrSelf(av) : (
        // temporal
        isTime ? (
          // config array of fmtDate string tpls
          isArr(av) ? timeAxisVals(_tzDate, timeAxisStamps(av, _fmtDate)) : (
            // fmtDate string tpl
            isStr(av) ? timeAxisVal(_tzDate, av) : av || _timeAxisVals
          )
        ) : av || numAxisVals
      );
      axis.filter = fnOrSelf(axis.filter || (sc.distr >= 3 && sc.log == 10 ? log10AxisValsFilt : sc.distr == 3 && sc.log == 2 ? log2AxisValsFilt : retArg1));
      axis.font = pxRatioFont(axis.font);
      axis.labelFont = pxRatioFont(axis.labelFont);
      axis._size = axis.size(self, null, i3, 0);
      axis._space = axis._rotate = axis._incrs = axis._found = // foundIncrSpace
      axis._splits = axis._values = null;
      if (axis._size > 0) {
        sidesWithAxes[i3] = true;
        axis._el = placeDiv(AXIS, wrap);
      }
    }
  }
  function autoPadSide(self2, side, sidesWithAxes2, cycleNum) {
    let [hasTopAxis, hasRgtAxis, hasBtmAxis, hasLftAxis] = sidesWithAxes2;
    let ori = side % 2;
    let size = 0;
    if (ori == 0 && (hasLftAxis || hasRgtAxis))
      size = side == 0 && !hasTopAxis || side == 2 && !hasBtmAxis ? round(xAxisOpts.size / 3) : 0;
    if (ori == 1 && (hasTopAxis || hasBtmAxis))
      size = side == 1 && !hasRgtAxis || side == 3 && !hasLftAxis ? round(yAxisOpts.size / 2) : 0;
    return size;
  }
  const padding = self.padding = (opts.padding || [autoPadSide, autoPadSide, autoPadSide, autoPadSide]).map((p3) => fnOrSelf(ifNull(p3, autoPadSide)));
  const _padding = self._padding = padding.map((p3, i3) => p3(self, i3, sidesWithAxes, 0));
  let dataLen;
  let i0 = null;
  let i1 = null;
  const idxs = mode == 1 ? series[0].idxs : null;
  let data0 = null;
  let viaAutoScaleX = false;
  function setData(_data, _resetScales) {
    data = _data == null ? [] : _data;
    self.data = self._data = data;
    if (mode == 2) {
      dataLen = 0;
      for (let i3 = 1; i3 < series.length; i3++)
        dataLen += data[i3][0].length;
    } else {
      if (data.length == 0)
        self.data = self._data = data = [[]];
      data0 = data[0];
      dataLen = data0.length;
      let scaleData = data;
      if (xScaleDistr == 2) {
        scaleData = data.slice();
        let _data0 = scaleData[0] = Array(dataLen);
        for (let i3 = 0; i3 < dataLen; i3++)
          _data0[i3] = i3;
      }
      self._data = data = scaleData;
    }
    resetYSeries(true);
    fire("setData");
    if (xScaleDistr == 2) {
      shouldConvergeSize = true;
    }
    if (_resetScales !== false) {
      let xsc = scaleX;
      if (xsc.auto(self, viaAutoScaleX))
        autoScaleX();
      else
        _setScale(xScaleKey, xsc.min, xsc.max);
      shouldSetCursor = shouldSetCursor || cursor.left >= 0;
      shouldSetLegend = true;
      commit();
    }
  }
  self.setData = setData;
  function autoScaleX() {
    viaAutoScaleX = true;
    let _min, _max;
    if (mode == 1) {
      if (dataLen > 0) {
        i0 = idxs[0] = 0;
        i1 = idxs[1] = dataLen - 1;
        _min = data[0][i0];
        _max = data[0][i1];
        if (xScaleDistr == 2) {
          _min = i0;
          _max = i1;
        } else if (_min == _max) {
          if (xScaleDistr == 3)
            [_min, _max] = rangeLog(_min, _min, scaleX.log, false);
          else if (xScaleDistr == 4)
            [_min, _max] = rangeAsinh(_min, _min, scaleX.log, false);
          else if (scaleX.time)
            _max = _min + round(86400 / ms);
          else
            [_min, _max] = rangeNum(_min, _max, rangePad, true);
        }
      } else {
        i0 = idxs[0] = _min = null;
        i1 = idxs[1] = _max = null;
      }
    }
    _setScale(xScaleKey, _min, _max);
  }
  let ctxStroke, ctxFill, ctxWidth, ctxDash, ctxJoin, ctxCap, ctxFont, ctxAlign, ctxBaseline;
  let ctxAlpha;
  function setCtxStyle(stroke, width, dash, cap, fill, join2) {
    stroke != null ? stroke : stroke = transparent;
    dash != null ? dash : dash = EMPTY_ARR;
    cap != null ? cap : cap = "butt";
    fill != null ? fill : fill = transparent;
    join2 != null ? join2 : join2 = "round";
    if (stroke != ctxStroke)
      ctx.strokeStyle = ctxStroke = stroke;
    if (fill != ctxFill)
      ctx.fillStyle = ctxFill = fill;
    if (width != ctxWidth)
      ctx.lineWidth = ctxWidth = width;
    if (join2 != ctxJoin)
      ctx.lineJoin = ctxJoin = join2;
    if (cap != ctxCap)
      ctx.lineCap = ctxCap = cap;
    if (dash != ctxDash)
      ctx.setLineDash(ctxDash = dash);
  }
  function setFontStyle(font2, fill, align, baseline) {
    if (fill != ctxFill)
      ctx.fillStyle = ctxFill = fill;
    if (font2 != ctxFont)
      ctx.font = ctxFont = font2;
    if (align != ctxAlign)
      ctx.textAlign = ctxAlign = align;
    if (baseline != ctxBaseline)
      ctx.textBaseline = ctxBaseline = baseline;
  }
  function accScale(wsc, psc, facet2, data2, sorted = 0) {
    if (data2.length > 0 && wsc.auto(self, viaAutoScaleX) && (psc == null || psc.min == null)) {
      let _i0 = ifNull(i0, 0);
      let _i1 = ifNull(i1, data2.length - 1);
      let minMax = facet2.min == null ? getMinMax(data2, _i0, _i1, sorted, wsc.distr == 3) : [facet2.min, facet2.max];
      wsc.min = min(wsc.min, facet2.min = minMax[0]);
      wsc.max = max(wsc.max, facet2.max = minMax[1]);
    }
  }
  const AUTOSCALE = { min: null, max: null };
  function setScales() {
    for (let k3 in scales) {
      let sc = scales[k3];
      if (pendScales[k3] == null && // scales that have never been set (on init)
      (sc.min == null || // or auto scales when the x scale was explicitly set
      pendScales[xScaleKey] != null && sc.auto(self, viaAutoScaleX))) {
        pendScales[k3] = AUTOSCALE;
      }
    }
    for (let k3 in scales) {
      let sc = scales[k3];
      if (pendScales[k3] == null && sc.from != null && pendScales[sc.from] != null)
        pendScales[k3] = AUTOSCALE;
    }
    if (pendScales[xScaleKey] != null)
      resetYSeries(true);
    let wipScales = {};
    for (let k3 in pendScales) {
      let psc = pendScales[k3];
      if (psc != null) {
        let wsc = wipScales[k3] = copy(scales[k3], fastIsObj);
        if (psc.min != null)
          assign(wsc, psc);
        else if (k3 != xScaleKey || mode == 2) {
          if (dataLen == 0 && wsc.from == null) {
            let minMax = wsc.range(self, null, null, k3);
            wsc.min = minMax[0];
            wsc.max = minMax[1];
          } else {
            wsc.min = inf;
            wsc.max = -inf;
          }
        }
      }
    }
    if (dataLen > 0) {
      series.forEach((s3, i3) => {
        if (mode == 1) {
          let k3 = s3.scale;
          let psc = pendScales[k3];
          if (psc == null)
            return;
          let wsc = wipScales[k3];
          if (i3 == 0) {
            let minMax = wsc.range(self, wsc.min, wsc.max, k3);
            wsc.min = minMax[0];
            wsc.max = minMax[1];
            i0 = closestIdx(wsc.min, data[0]);
            i1 = closestIdx(wsc.max, data[0]);
            if (i1 - i0 > 1) {
              if (data[0][i0] < wsc.min)
                i0++;
              if (data[0][i1] > wsc.max)
                i1--;
            }
            s3.min = data0[i0];
            s3.max = data0[i1];
          } else if (s3.show && s3.auto)
            accScale(wsc, psc, s3, data[i3], s3.sorted);
          s3.idxs[0] = i0;
          s3.idxs[1] = i1;
        } else {
          if (i3 > 0) {
            if (s3.show && s3.auto) {
              let [xFacet, yFacet] = s3.facets;
              let xScaleKey2 = xFacet.scale;
              let yScaleKey = yFacet.scale;
              let [xData, yData] = data[i3];
              let wscx = wipScales[xScaleKey2];
              let wscy = wipScales[yScaleKey];
              wscx != null && accScale(wscx, pendScales[xScaleKey2], xFacet, xData, xFacet.sorted);
              wscy != null && accScale(wscy, pendScales[yScaleKey], yFacet, yData, yFacet.sorted);
              s3.min = yFacet.min;
              s3.max = yFacet.max;
            }
          }
        }
      });
      for (let k3 in wipScales) {
        let wsc = wipScales[k3];
        let psc = pendScales[k3];
        if (wsc.from == null && (psc == null || psc.min == null)) {
          let minMax = wsc.range(
            self,
            wsc.min == inf ? null : wsc.min,
            wsc.max == -inf ? null : wsc.max,
            k3
          );
          wsc.min = minMax[0];
          wsc.max = minMax[1];
        }
      }
    }
    for (let k3 in wipScales) {
      let wsc = wipScales[k3];
      if (wsc.from != null) {
        let base = wipScales[wsc.from];
        if (base.min == null)
          wsc.min = wsc.max = null;
        else {
          let minMax = wsc.range(self, base.min, base.max, k3);
          wsc.min = minMax[0];
          wsc.max = minMax[1];
        }
      }
    }
    let changed = {};
    let anyChanged = false;
    for (let k3 in wipScales) {
      let wsc = wipScales[k3];
      let sc = scales[k3];
      if (sc.min != wsc.min || sc.max != wsc.max) {
        sc.min = wsc.min;
        sc.max = wsc.max;
        let distr = sc.distr;
        sc._min = distr == 3 ? log10(sc.min) : distr == 4 ? asinh(sc.min, sc.asinh) : distr == 100 ? sc.fwd(sc.min) : sc.min;
        sc._max = distr == 3 ? log10(sc.max) : distr == 4 ? asinh(sc.max, sc.asinh) : distr == 100 ? sc.fwd(sc.max) : sc.max;
        changed[k3] = anyChanged = true;
      }
    }
    if (anyChanged) {
      series.forEach((s3, i3) => {
        if (mode == 2) {
          if (i3 > 0 && changed.y)
            s3._paths = null;
        } else {
          if (changed[s3.scale])
            s3._paths = null;
        }
      });
      for (let k3 in changed) {
        shouldConvergeSize = true;
        fire("setScale", k3);
      }
      if (showCursor && cursor.left >= 0)
        shouldSetCursor = shouldSetLegend = true;
    }
    for (let k3 in pendScales)
      pendScales[k3] = null;
  }
  function getOuterIdxs(ydata) {
    let _i0 = clamp(i0 - 1, 0, dataLen - 1);
    let _i1 = clamp(i1 + 1, 0, dataLen - 1);
    while (ydata[_i0] == null && _i0 > 0)
      _i0--;
    while (ydata[_i1] == null && _i1 < dataLen - 1)
      _i1++;
    return [_i0, _i1];
  }
  function drawSeries() {
    if (dataLen > 0) {
      let shouldAlpha = series.some((s3) => s3._focus) && ctxAlpha != focus.alpha;
      if (shouldAlpha)
        ctx.globalAlpha = ctxAlpha = focus.alpha;
      series.forEach((s3, i3) => {
        if (i3 > 0 && s3.show) {
          cacheStrokeFill(i3, false);
          cacheStrokeFill(i3, true);
          if (s3._paths == null) {
            let _ctxAlpha = ctxAlpha;
            if (ctxAlpha != s3.alpha)
              ctx.globalAlpha = ctxAlpha = s3.alpha;
            let _idxs = mode == 2 ? [0, data[i3][0].length - 1] : getOuterIdxs(data[i3]);
            s3._paths = s3.paths(self, i3, _idxs[0], _idxs[1]);
            if (ctxAlpha != _ctxAlpha)
              ctx.globalAlpha = ctxAlpha = _ctxAlpha;
          }
        }
      });
      series.forEach((s3, i3) => {
        if (i3 > 0 && s3.show) {
          let _ctxAlpha = ctxAlpha;
          if (ctxAlpha != s3.alpha)
            ctx.globalAlpha = ctxAlpha = s3.alpha;
          s3._paths != null && drawPath(i3, false);
          {
            let _gaps = s3._paths != null ? s3._paths.gaps : null;
            let show = s3.points.show(self, i3, i0, i1, _gaps);
            let idxs2 = s3.points.filter(self, i3, show, _gaps);
            if (show || idxs2) {
              s3.points._paths = s3.points.paths(self, i3, i0, i1, idxs2);
              drawPath(i3, true);
            }
          }
          if (ctxAlpha != _ctxAlpha)
            ctx.globalAlpha = ctxAlpha = _ctxAlpha;
          fire("drawSeries", i3);
        }
      });
      if (shouldAlpha)
        ctx.globalAlpha = ctxAlpha = 1;
    }
  }
  function cacheStrokeFill(si, _points) {
    let s3 = _points ? series[si].points : series[si];
    s3._stroke = s3.stroke(self, si);
    s3._fill = s3.fill(self, si);
  }
  function drawPath(si, _points) {
    let s3 = _points ? series[si].points : series[si];
    let {
      stroke,
      fill,
      clip: gapsClip,
      flags,
      _stroke: strokeStyle = s3._stroke,
      _fill: fillStyle = s3._fill,
      _width: width = s3.width
    } = s3._paths;
    width = roundDec(width * pxRatio, 3);
    let boundsClip = null;
    let offset = width % 2 / 2;
    if (_points && fillStyle == null)
      fillStyle = width > 0 ? "#fff" : strokeStyle;
    let _pxAlign = s3.pxAlign == 1 && offset > 0;
    _pxAlign && ctx.translate(offset, offset);
    if (!_points) {
      let lft = plotLft - width / 2, top = plotTop - width / 2, wid = plotWid + width, hgt = plotHgt + width;
      boundsClip = new Path2D();
      boundsClip.rect(lft, top, wid, hgt);
    }
    if (_points)
      strokeFill(strokeStyle, width, s3.dash, s3.cap, fillStyle, stroke, fill, flags, gapsClip);
    else
      fillStroke(si, strokeStyle, width, s3.dash, s3.cap, fillStyle, stroke, fill, flags, boundsClip, gapsClip);
    _pxAlign && ctx.translate(-offset, -offset);
  }
  function fillStroke(si, strokeStyle, lineWidth, lineDash, lineCap, fillStyle, strokePath, fillPath, flags, boundsClip, gapsClip) {
    let didStrokeFill = false;
    flags != 0 && bands.forEach((b, bi) => {
      if (b.series[0] == si) {
        let lowerEdge = series[b.series[1]];
        let lowerData = data[b.series[1]];
        let bandClip = (lowerEdge._paths || EMPTY_OBJ).band;
        if (isArr(bandClip))
          bandClip = b.dir == 1 ? bandClip[0] : bandClip[1];
        let gapsClip2;
        let _fillStyle = null;
        if (lowerEdge.show && bandClip && hasData(lowerData, i0, i1)) {
          _fillStyle = b.fill(self, bi) || fillStyle;
          gapsClip2 = lowerEdge._paths.clip;
        } else
          bandClip = null;
        strokeFill(strokeStyle, lineWidth, lineDash, lineCap, _fillStyle, strokePath, fillPath, flags, boundsClip, gapsClip, gapsClip2, bandClip);
        didStrokeFill = true;
      }
    });
    if (!didStrokeFill)
      strokeFill(strokeStyle, lineWidth, lineDash, lineCap, fillStyle, strokePath, fillPath, flags, boundsClip, gapsClip);
  }
  const CLIP_FILL_STROKE = BAND_CLIP_FILL | BAND_CLIP_STROKE;
  function strokeFill(strokeStyle, lineWidth, lineDash, lineCap, fillStyle, strokePath, fillPath, flags, boundsClip, gapsClip, gapsClip2, bandClip) {
    setCtxStyle(strokeStyle, lineWidth, lineDash, lineCap, fillStyle);
    if (boundsClip || gapsClip || bandClip) {
      ctx.save();
      boundsClip && ctx.clip(boundsClip);
      gapsClip && ctx.clip(gapsClip);
    }
    if (bandClip) {
      if ((flags & CLIP_FILL_STROKE) == CLIP_FILL_STROKE) {
        ctx.clip(bandClip);
        gapsClip2 && ctx.clip(gapsClip2);
        doFill(fillStyle, fillPath);
        doStroke(strokeStyle, strokePath, lineWidth);
      } else if (flags & BAND_CLIP_STROKE) {
        doFill(fillStyle, fillPath);
        ctx.clip(bandClip);
        doStroke(strokeStyle, strokePath, lineWidth);
      } else if (flags & BAND_CLIP_FILL) {
        ctx.save();
        ctx.clip(bandClip);
        gapsClip2 && ctx.clip(gapsClip2);
        doFill(fillStyle, fillPath);
        ctx.restore();
        doStroke(strokeStyle, strokePath, lineWidth);
      }
    } else {
      doFill(fillStyle, fillPath);
      doStroke(strokeStyle, strokePath, lineWidth);
    }
    if (boundsClip || gapsClip || bandClip)
      ctx.restore();
  }
  function doStroke(strokeStyle, strokePath, lineWidth) {
    if (lineWidth > 0) {
      if (strokePath instanceof Map) {
        strokePath.forEach((strokePath2, strokeStyle2) => {
          ctx.strokeStyle = ctxStroke = strokeStyle2;
          ctx.stroke(strokePath2);
        });
      } else
        strokePath != null && strokeStyle && ctx.stroke(strokePath);
    }
  }
  function doFill(fillStyle, fillPath) {
    if (fillPath instanceof Map) {
      fillPath.forEach((fillPath2, fillStyle2) => {
        ctx.fillStyle = ctxFill = fillStyle2;
        ctx.fill(fillPath2);
      });
    } else
      fillPath != null && fillStyle && ctx.fill(fillPath);
  }
  function getIncrSpace(axisIdx, min2, max2, fullDim) {
    let axis = axes[axisIdx];
    let incrSpace;
    if (fullDim <= 0)
      incrSpace = [0, 0];
    else {
      let minSpace = axis._space = axis.space(self, axisIdx, min2, max2, fullDim);
      let incrs = axis._incrs = axis.incrs(self, axisIdx, min2, max2, fullDim, minSpace);
      incrSpace = findIncr(min2, max2, incrs, fullDim, minSpace);
    }
    return axis._found = incrSpace;
  }
  function drawOrthoLines(offs, filts, ori, side, pos0, len, width, stroke, dash, cap) {
    let offset = width % 2 / 2;
    pxAlign == 1 && ctx.translate(offset, offset);
    setCtxStyle(stroke, width, dash, cap, stroke);
    ctx.beginPath();
    let x0, y0, x1, y1, pos1 = pos0 + (side == 0 || side == 3 ? -len : len);
    if (ori == 0) {
      y0 = pos0;
      y1 = pos1;
    } else {
      x0 = pos0;
      x1 = pos1;
    }
    for (let i3 = 0; i3 < offs.length; i3++) {
      if (filts[i3] != null) {
        if (ori == 0)
          x0 = x1 = offs[i3];
        else
          y0 = y1 = offs[i3];
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
      }
    }
    ctx.stroke();
    pxAlign == 1 && ctx.translate(-offset, -offset);
  }
  function axesCalc(cycleNum) {
    let converged = true;
    axes.forEach((axis, i3) => {
      if (!axis.show)
        return;
      let scale = scales[axis.scale];
      if (scale.min == null) {
        if (axis._show) {
          converged = false;
          axis._show = false;
          resetYSeries(false);
        }
        return;
      } else {
        if (!axis._show) {
          converged = false;
          axis._show = true;
          resetYSeries(false);
        }
      }
      let side = axis.side;
      let ori = side % 2;
      let { min: min2, max: max2 } = scale;
      let [_incr, _space] = getIncrSpace(i3, min2, max2, ori == 0 ? plotWidCss : plotHgtCss);
      if (_space == 0)
        return;
      let forceMin = scale.distr == 2;
      let _splits = axis._splits = axis.splits(self, i3, min2, max2, _incr, _space, forceMin);
      let splits = scale.distr == 2 ? _splits.map((i4) => data0[i4]) : _splits;
      let incr = scale.distr == 2 ? data0[_splits[1]] - data0[_splits[0]] : _incr;
      let values = axis._values = axis.values(self, axis.filter(self, splits, i3, _space, incr), i3, _space, incr);
      axis._rotate = side == 2 ? axis.rotate(self, values, i3, _space) : 0;
      let oldSize = axis._size;
      axis._size = ceil(axis.size(self, values, i3, cycleNum));
      if (oldSize != null && axis._size != oldSize)
        converged = false;
    });
    return converged;
  }
  function paddingCalc(cycleNum) {
    let converged = true;
    padding.forEach((p3, i3) => {
      let _p = p3(self, i3, sidesWithAxes, cycleNum);
      if (_p != _padding[i3])
        converged = false;
      _padding[i3] = _p;
    });
    return converged;
  }
  function drawAxesGrid() {
    for (let i3 = 0; i3 < axes.length; i3++) {
      let axis = axes[i3];
      if (!axis.show || !axis._show)
        continue;
      let side = axis.side;
      let ori = side % 2;
      let x2, y3;
      let fillStyle = axis.stroke(self, i3);
      let shiftDir = side == 0 || side == 3 ? -1 : 1;
      let [_incr, _space] = axis._found;
      if (axis.label != null) {
        let shiftAmt2 = axis.labelGap * shiftDir;
        let baseLpos = round((axis._lpos + shiftAmt2) * pxRatio);
        setFontStyle(axis.labelFont[0], fillStyle, "center", side == 2 ? TOP : BOTTOM);
        ctx.save();
        if (ori == 1) {
          x2 = y3 = 0;
          ctx.translate(
            baseLpos,
            round(plotTop + plotHgt / 2)
          );
          ctx.rotate((side == 3 ? -PI : PI) / 2);
        } else {
          x2 = round(plotLft + plotWid / 2);
          y3 = baseLpos;
        }
        let _label = isFn(axis.label) ? axis.label(self, i3, _incr, _space) : axis.label;
        ctx.fillText(_label, x2, y3);
        ctx.restore();
      }
      if (_space == 0)
        continue;
      let scale = scales[axis.scale];
      let plotDim = ori == 0 ? plotWid : plotHgt;
      let plotOff = ori == 0 ? plotLft : plotTop;
      let _splits = axis._splits;
      let splits = scale.distr == 2 ? _splits.map((i4) => data0[i4]) : _splits;
      let incr = scale.distr == 2 ? data0[_splits[1]] - data0[_splits[0]] : _incr;
      let ticks2 = axis.ticks;
      let border2 = axis.border;
      let _tickSize = ticks2.show ? ticks2.size : 0;
      let tickSize = round(_tickSize * pxRatio);
      let axisGap = round((axis.alignTo == 2 ? axis._size - _tickSize - axis.gap : axis.gap) * pxRatio);
      let angle = axis._rotate * -PI / 180;
      let basePos = pxRound(axis._pos * pxRatio);
      let shiftAmt = (tickSize + axisGap) * shiftDir;
      let finalPos = basePos + shiftAmt;
      y3 = ori == 0 ? finalPos : 0;
      x2 = ori == 1 ? finalPos : 0;
      let font2 = axis.font[0];
      let textAlign = axis.align == 1 ? LEFT : axis.align == 2 ? RIGHT : angle > 0 ? LEFT : angle < 0 ? RIGHT : ori == 0 ? "center" : side == 3 ? RIGHT : LEFT;
      let textBaseline = angle || ori == 1 ? "middle" : side == 2 ? TOP : BOTTOM;
      setFontStyle(font2, fillStyle, textAlign, textBaseline);
      let lineHeight = axis.font[1] * axis.lineGap;
      let canOffs = _splits.map((val) => pxRound(getPos(val, scale, plotDim, plotOff)));
      let _values = axis._values;
      for (let i4 = 0; i4 < _values.length; i4++) {
        let val = _values[i4];
        if (val != null) {
          if (ori == 0)
            x2 = canOffs[i4];
          else
            y3 = canOffs[i4];
          val = "" + val;
          let _parts = val.indexOf("\n") == -1 ? [val] : val.split(/\n/gm);
          for (let j3 = 0; j3 < _parts.length; j3++) {
            let text = _parts[j3];
            if (angle) {
              ctx.save();
              ctx.translate(x2, y3 + j3 * lineHeight);
              ctx.rotate(angle);
              ctx.fillText(text, 0, 0);
              ctx.restore();
            } else
              ctx.fillText(text, x2, y3 + j3 * lineHeight);
          }
        }
      }
      if (ticks2.show) {
        drawOrthoLines(
          canOffs,
          ticks2.filter(self, splits, i3, _space, incr),
          ori,
          side,
          basePos,
          tickSize,
          roundDec(ticks2.width * pxRatio, 3),
          ticks2.stroke(self, i3),
          ticks2.dash,
          ticks2.cap
        );
      }
      let grid2 = axis.grid;
      if (grid2.show) {
        drawOrthoLines(
          canOffs,
          grid2.filter(self, splits, i3, _space, incr),
          ori,
          ori == 0 ? 2 : 1,
          ori == 0 ? plotTop : plotLft,
          ori == 0 ? plotHgt : plotWid,
          roundDec(grid2.width * pxRatio, 3),
          grid2.stroke(self, i3),
          grid2.dash,
          grid2.cap
        );
      }
      if (border2.show) {
        drawOrthoLines(
          [basePos],
          [1],
          ori == 0 ? 1 : 0,
          ori == 0 ? 1 : 2,
          ori == 1 ? plotTop : plotLft,
          ori == 1 ? plotHgt : plotWid,
          roundDec(border2.width * pxRatio, 3),
          border2.stroke(self, i3),
          border2.dash,
          border2.cap
        );
      }
    }
    fire("drawAxes");
  }
  function resetYSeries(minMax) {
    series.forEach((s3, i3) => {
      if (i3 > 0) {
        s3._paths = null;
        if (minMax) {
          if (mode == 1) {
            s3.min = null;
            s3.max = null;
          } else {
            s3.facets.forEach((f3) => {
              f3.min = null;
              f3.max = null;
            });
          }
        }
      }
    });
  }
  let queuedCommit = false;
  let deferHooks = false;
  let hooksQueue = [];
  function flushHooks() {
    deferHooks = false;
    for (let i3 = 0; i3 < hooksQueue.length; i3++)
      fire(...hooksQueue[i3]);
    hooksQueue.length = 0;
  }
  function commit() {
    if (!queuedCommit) {
      microTask(_commit);
      queuedCommit = true;
    }
  }
  function batch(fn, _deferHooks = false) {
    queuedCommit = true;
    deferHooks = _deferHooks;
    fn(self);
    _commit();
    if (_deferHooks && hooksQueue.length > 0)
      queueMicrotask(flushHooks);
  }
  self.batch = batch;
  function _commit() {
    if (shouldSetScales) {
      setScales();
      shouldSetScales = false;
    }
    if (shouldConvergeSize) {
      convergeSize();
      shouldConvergeSize = false;
    }
    if (shouldSetSize) {
      setStylePx(under, LEFT, plotLftCss);
      setStylePx(under, TOP, plotTopCss);
      setStylePx(under, WIDTH, plotWidCss);
      setStylePx(under, HEIGHT, plotHgtCss);
      setStylePx(over, LEFT, plotLftCss);
      setStylePx(over, TOP, plotTopCss);
      setStylePx(over, WIDTH, plotWidCss);
      setStylePx(over, HEIGHT, plotHgtCss);
      setStylePx(wrap, WIDTH, fullWidCss);
      setStylePx(wrap, HEIGHT, fullHgtCss);
      can.width = round(fullWidCss * pxRatio);
      can.height = round(fullHgtCss * pxRatio);
      axes.forEach(({ _el, _show, _size, _pos, side }) => {
        if (_el != null) {
          if (_show) {
            let posOffset = side === 3 || side === 0 ? _size : 0;
            let isVt = side % 2 == 1;
            setStylePx(_el, isVt ? "left" : "top", _pos - posOffset);
            setStylePx(_el, isVt ? "width" : "height", _size);
            setStylePx(_el, isVt ? "top" : "left", isVt ? plotTopCss : plotLftCss);
            setStylePx(_el, isVt ? "height" : "width", isVt ? plotHgtCss : plotWidCss);
            remClass(_el, OFF);
          } else
            addClass(_el, OFF);
        }
      });
      ctxStroke = ctxFill = ctxWidth = ctxJoin = ctxCap = ctxFont = ctxAlign = ctxBaseline = ctxDash = null;
      ctxAlpha = 1;
      syncRect(true);
      if (plotLftCss != _plotLftCss || plotTopCss != _plotTopCss || plotWidCss != _plotWidCss || plotHgtCss != _plotHgtCss) {
        resetYSeries(false);
        let pctWid = plotWidCss / _plotWidCss;
        let pctHgt = plotHgtCss / _plotHgtCss;
        if (showCursor && !shouldSetCursor && cursor.left >= 0) {
          cursor.left *= pctWid;
          cursor.top *= pctHgt;
          vCursor && elTrans(vCursor, round(cursor.left), 0, plotWidCss, plotHgtCss);
          hCursor && elTrans(hCursor, 0, round(cursor.top), plotWidCss, plotHgtCss);
          for (let i3 = 0; i3 < cursorPts.length; i3++) {
            let pt = cursorPts[i3];
            if (pt != null) {
              cursorPtsLft[i3] *= pctWid;
              cursorPtsTop[i3] *= pctHgt;
              elTrans(pt, ceil(cursorPtsLft[i3]), ceil(cursorPtsTop[i3]), plotWidCss, plotHgtCss);
            }
          }
        }
        if (select.show && !shouldSetSelect && select.left >= 0 && select.width > 0) {
          select.left *= pctWid;
          select.width *= pctWid;
          select.top *= pctHgt;
          select.height *= pctHgt;
          for (let prop in _hideProps)
            setStylePx(selectDiv, prop, select[prop]);
        }
        _plotLftCss = plotLftCss;
        _plotTopCss = plotTopCss;
        _plotWidCss = plotWidCss;
        _plotHgtCss = plotHgtCss;
      }
      fire("setSize");
      shouldSetSize = false;
    }
    if (fullWidCss > 0 && fullHgtCss > 0) {
      ctx.clearRect(0, 0, can.width, can.height);
      fire("drawClear");
      drawOrder.forEach((fn) => fn());
      fire("draw");
    }
    if (select.show && shouldSetSelect) {
      setSelect(select);
      shouldSetSelect = false;
    }
    if (showCursor && shouldSetCursor) {
      updateCursor(null, true, false);
      shouldSetCursor = false;
    }
    if (legend.show && legend.live && shouldSetLegend) {
      setLegend();
      shouldSetLegend = false;
    }
    if (!ready) {
      ready = true;
      self.status = 1;
      fire("ready");
    }
    viaAutoScaleX = false;
    queuedCommit = false;
  }
  self.redraw = (rebuildPaths, recalcAxes) => {
    shouldConvergeSize = recalcAxes || false;
    if (rebuildPaths !== false)
      _setScale(xScaleKey, scaleX.min, scaleX.max);
    else
      commit();
  };
  function setScale(key2, opts2) {
    let sc = scales[key2];
    if (sc.from == null) {
      if (dataLen == 0) {
        let minMax = sc.range(self, opts2.min, opts2.max, key2);
        opts2.min = minMax[0];
        opts2.max = minMax[1];
      }
      if (opts2.min > opts2.max) {
        let _min = opts2.min;
        opts2.min = opts2.max;
        opts2.max = _min;
      }
      if (dataLen > 1 && opts2.min != null && opts2.max != null && opts2.max - opts2.min < 1e-16)
        return;
      if (key2 == xScaleKey) {
        if (sc.distr == 2 && dataLen > 0) {
          opts2.min = closestIdx(opts2.min, data[0]);
          opts2.max = closestIdx(opts2.max, data[0]);
          if (opts2.min == opts2.max)
            opts2.max++;
        }
      }
      pendScales[key2] = opts2;
      shouldSetScales = true;
      commit();
    }
  }
  self.setScale = setScale;
  let xCursor;
  let yCursor;
  let vCursor;
  let hCursor;
  let rawMouseLeft0;
  let rawMouseTop0;
  let mouseLeft0;
  let mouseTop0;
  let rawMouseLeft1;
  let rawMouseTop1;
  let mouseLeft1;
  let mouseTop1;
  let dragging = false;
  const drag = cursor.drag;
  let dragX = drag.x;
  let dragY = drag.y;
  if (showCursor) {
    if (cursor.x)
      xCursor = placeDiv(CURSOR_X, over);
    if (cursor.y)
      yCursor = placeDiv(CURSOR_Y, over);
    if (scaleX.ori == 0) {
      vCursor = xCursor;
      hCursor = yCursor;
    } else {
      vCursor = yCursor;
      hCursor = xCursor;
    }
    mouseLeft1 = cursor.left;
    mouseTop1 = cursor.top;
  }
  const select = self.select = assign({
    show: true,
    over: true,
    left: 0,
    width: 0,
    top: 0,
    height: 0
  }, opts.select);
  const selectDiv = select.show ? placeDiv(SELECT, select.over ? over : under) : null;
  function setSelect(opts2, _fire) {
    if (select.show) {
      for (let prop in opts2) {
        select[prop] = opts2[prop];
        if (prop in _hideProps)
          setStylePx(selectDiv, prop, opts2[prop]);
      }
      _fire !== false && fire("setSelect");
    }
  }
  self.setSelect = setSelect;
  function toggleDOM(i3) {
    let s3 = series[i3];
    if (s3.show)
      showLegend && remClass(legendRows[i3], OFF);
    else {
      showLegend && addClass(legendRows[i3], OFF);
      if (showCursor) {
        let pt = cursorOnePt ? cursorPts[0] : cursorPts[i3];
        pt != null && elTrans(pt, -10, -10, plotWidCss, plotHgtCss);
      }
    }
  }
  function _setScale(key2, min2, max2) {
    setScale(key2, { min: min2, max: max2 });
  }
  function setSeries(i3, opts2, _fire, _pub) {
    if (opts2.focus != null)
      setFocus(i3);
    if (opts2.show != null) {
      series.forEach((s3, si) => {
        if (si > 0 && (i3 == si || i3 == null)) {
          s3.show = opts2.show;
          toggleDOM(si);
          if (mode == 2) {
            _setScale(s3.facets[0].scale, null, null);
            _setScale(s3.facets[1].scale, null, null);
          } else
            _setScale(s3.scale, null, null);
          commit();
        }
      });
    }
    _fire !== false && fire("setSeries", i3, opts2);
    _pub && pubSync("setSeries", self, i3, opts2);
  }
  self.setSeries = setSeries;
  function setBand(bi, opts2) {
    assign(bands[bi], opts2);
  }
  function addBand(opts2, bi) {
    opts2.fill = fnOrSelf(opts2.fill || null);
    opts2.dir = ifNull(opts2.dir, -1);
    bi = bi == null ? bands.length : bi;
    bands.splice(bi, 0, opts2);
  }
  function delBand(bi) {
    if (bi == null)
      bands.length = 0;
    else
      bands.splice(bi, 1);
  }
  self.addBand = addBand;
  self.setBand = setBand;
  self.delBand = delBand;
  function setAlpha(i3, value) {
    series[i3].alpha = value;
    if (showCursor && cursorPts[i3] != null)
      cursorPts[i3].style.opacity = value;
    if (showLegend && legendRows[i3])
      legendRows[i3].style.opacity = value;
  }
  let closestDist;
  let closestSeries;
  let focusedSeries;
  const FOCUS_TRUE = { focus: true };
  function setFocus(i3) {
    if (i3 != focusedSeries) {
      let allFocused = i3 == null;
      let _setAlpha = focus.alpha != 1;
      series.forEach((s3, i22) => {
        if (mode == 1 || i22 > 0) {
          let isFocused = allFocused || i22 == 0 || i22 == i3;
          s3._focus = allFocused ? null : isFocused;
          _setAlpha && setAlpha(i22, isFocused ? 1 : focus.alpha);
        }
      });
      focusedSeries = i3;
      _setAlpha && commit();
    }
  }
  if (showLegend && cursorFocus) {
    onMouse(mouseleave, legendTable, (e3) => {
      if (cursor._lock)
        return;
      setCursorEvent(e3);
      if (focusedSeries != null)
        setSeries(null, FOCUS_TRUE, true, syncOpts.setSeries);
    });
  }
  function posToVal(pos, scale, can2) {
    let sc = scales[scale];
    if (can2)
      pos = pos / pxRatio - (sc.ori == 1 ? plotTopCss : plotLftCss);
    let dim = plotWidCss;
    if (sc.ori == 1) {
      dim = plotHgtCss;
      pos = dim - pos;
    }
    if (sc.dir == -1)
      pos = dim - pos;
    let _min = sc._min, _max = sc._max, pct = pos / dim;
    let sv = _min + (_max - _min) * pct;
    let distr = sc.distr;
    return distr == 3 ? pow(10, sv) : distr == 4 ? sinh(sv, sc.asinh) : distr == 100 ? sc.bwd(sv) : sv;
  }
  function closestIdxFromXpos(pos, can2) {
    let v3 = posToVal(pos, xScaleKey, can2);
    return closestIdx(v3, data[0], i0, i1);
  }
  self.valToIdx = (val) => closestIdx(val, data[0]);
  self.posToIdx = closestIdxFromXpos;
  self.posToVal = posToVal;
  self.valToPos = (val, scale, can2) => scales[scale].ori == 0 ? getHPos(
    val,
    scales[scale],
    can2 ? plotWid : plotWidCss,
    can2 ? plotLft : 0
  ) : getVPos(
    val,
    scales[scale],
    can2 ? plotHgt : plotHgtCss,
    can2 ? plotTop : 0
  );
  self.setCursor = (opts2, _fire, _pub) => {
    mouseLeft1 = opts2.left;
    mouseTop1 = opts2.top;
    updateCursor(null, _fire, _pub);
  };
  function setSelH(off2, dim) {
    setStylePx(selectDiv, LEFT, select.left = off2);
    setStylePx(selectDiv, WIDTH, select.width = dim);
  }
  function setSelV(off2, dim) {
    setStylePx(selectDiv, TOP, select.top = off2);
    setStylePx(selectDiv, HEIGHT, select.height = dim);
  }
  let setSelX = scaleX.ori == 0 ? setSelH : setSelV;
  let setSelY = scaleX.ori == 1 ? setSelH : setSelV;
  function syncLegend() {
    if (showLegend && legend.live) {
      for (let i3 = mode == 2 ? 1 : 0; i3 < series.length; i3++) {
        if (i3 == 0 && multiValLegend)
          continue;
        let vals = legend.values[i3];
        let j3 = 0;
        for (let k3 in vals)
          legendCells[i3][j3++].firstChild.nodeValue = vals[k3];
      }
    }
  }
  function setLegend(opts2, _fire) {
    if (opts2 != null) {
      if (opts2.idxs) {
        opts2.idxs.forEach((didx, sidx) => {
          activeIdxs[sidx] = didx;
        });
      } else if (!isUndef(opts2.idx))
        activeIdxs.fill(opts2.idx);
      legend.idx = activeIdxs[0];
    }
    if (showLegend && legend.live) {
      for (let sidx = 0; sidx < series.length; sidx++) {
        if (sidx > 0 || mode == 1 && !multiValLegend)
          setLegendValues(sidx, activeIdxs[sidx]);
      }
      syncLegend();
    }
    shouldSetLegend = false;
    _fire !== false && fire("setLegend");
  }
  self.setLegend = setLegend;
  function setLegendValues(sidx, idx) {
    var _a2;
    let s3 = series[sidx];
    let src = sidx == 0 && xScaleDistr == 2 ? data0 : data[sidx];
    let val;
    if (multiValLegend)
      val = (_a2 = s3.values(self, sidx, idx)) != null ? _a2 : NULL_LEGEND_VALUES;
    else {
      val = s3.value(self, idx == null ? null : src[idx], sidx, idx);
      val = val == null ? NULL_LEGEND_VALUES : { _: val };
    }
    legend.values[sidx] = val;
  }
  function updateCursor(src, _fire, _pub) {
    rawMouseLeft1 = mouseLeft1;
    rawMouseTop1 = mouseTop1;
    [mouseLeft1, mouseTop1] = cursor.move(self, mouseLeft1, mouseTop1);
    cursor.left = mouseLeft1;
    cursor.top = mouseTop1;
    if (showCursor) {
      vCursor && elTrans(vCursor, round(mouseLeft1), 0, plotWidCss, plotHgtCss);
      hCursor && elTrans(hCursor, 0, round(mouseTop1), plotWidCss, plotHgtCss);
    }
    let idx;
    let noDataInRange = i0 > i1;
    closestDist = inf;
    closestSeries = null;
    let xDim = scaleX.ori == 0 ? plotWidCss : plotHgtCss;
    let yDim = scaleX.ori == 1 ? plotWidCss : plotHgtCss;
    if (mouseLeft1 < 0 || dataLen == 0 || noDataInRange) {
      idx = cursor.idx = null;
      for (let i3 = 0; i3 < series.length; i3++) {
        let pt = cursorPts[i3];
        pt != null && elTrans(pt, -10, -10, plotWidCss, plotHgtCss);
      }
      if (cursorFocus)
        setSeries(null, FOCUS_TRUE, true, src == null && syncOpts.setSeries);
      if (legend.live) {
        activeIdxs.fill(idx);
        shouldSetLegend = true;
      }
    } else {
      let mouseXPos, valAtPosX, xPos;
      if (mode == 1) {
        mouseXPos = scaleX.ori == 0 ? mouseLeft1 : mouseTop1;
        valAtPosX = posToVal(mouseXPos, xScaleKey);
        idx = cursor.idx = closestIdx(valAtPosX, data[0], i0, i1);
        xPos = valToPosX(data[0][idx], scaleX, xDim, 0);
      }
      let _ptLft = -10;
      let _ptTop = -10;
      let _ptWid = 0;
      let _ptHgt = 0;
      let _centered = true;
      let _ptFill = "";
      let _ptStroke = "";
      for (let i3 = mode == 2 ? 1 : 0; i3 < series.length; i3++) {
        let s3 = series[i3];
        let idx1 = activeIdxs[i3];
        let yVal1 = idx1 == null ? null : mode == 1 ? data[i3][idx1] : data[i3][1][idx1];
        let idx2 = cursor.dataIdx(self, i3, idx, valAtPosX);
        let yVal2 = idx2 == null ? null : mode == 1 ? data[i3][idx2] : data[i3][1][idx2];
        shouldSetLegend = shouldSetLegend || yVal2 != yVal1 || idx2 != idx1;
        activeIdxs[i3] = idx2;
        if (i3 > 0 && s3.show) {
          let xPos2 = idx2 == null ? -10 : idx2 == idx ? xPos : valToPosX(mode == 1 ? data[0][idx2] : data[i3][0][idx2], scaleX, xDim, 0);
          let yPos = yVal2 == null ? -10 : valToPosY(yVal2, mode == 1 ? scales[s3.scale] : scales[s3.facets[1].scale], yDim, 0);
          if (cursorFocus && yVal2 != null) {
            let mouseYPos = scaleX.ori == 1 ? mouseLeft1 : mouseTop1;
            let dist = abs(focus.dist(self, i3, idx2, yPos, mouseYPos));
            if (dist < closestDist) {
              let bias = focus.bias;
              if (bias != 0) {
                let mouseYVal = posToVal(mouseYPos, s3.scale);
                let seriesYValSign = yVal2 >= 0 ? 1 : -1;
                let mouseYValSign = mouseYVal >= 0 ? 1 : -1;
                if (mouseYValSign == seriesYValSign && (mouseYValSign == 1 ? bias == 1 ? yVal2 >= mouseYVal : yVal2 <= mouseYVal : (
                  // >= 0
                  bias == 1 ? yVal2 <= mouseYVal : yVal2 >= mouseYVal
                ))) {
                  closestDist = dist;
                  closestSeries = i3;
                }
              } else {
                closestDist = dist;
                closestSeries = i3;
              }
            }
          }
          if (shouldSetLegend || cursorOnePt) {
            let hPos, vPos;
            if (scaleX.ori == 0) {
              hPos = xPos2;
              vPos = yPos;
            } else {
              hPos = yPos;
              vPos = xPos2;
            }
            let ptWid, ptHgt, ptLft, ptTop, ptStroke, ptFill, centered = true, getBBox = points2.bbox;
            if (getBBox != null) {
              centered = false;
              let bbox = getBBox(self, i3);
              ptLft = bbox.left;
              ptTop = bbox.top;
              ptWid = bbox.width;
              ptHgt = bbox.height;
            } else {
              ptLft = hPos;
              ptTop = vPos;
              ptWid = ptHgt = points2.size(self, i3);
            }
            ptFill = points2.fill(self, i3);
            ptStroke = points2.stroke(self, i3);
            if (cursorOnePt) {
              if (i3 == closestSeries && closestDist <= focus.prox) {
                _ptLft = ptLft;
                _ptTop = ptTop;
                _ptWid = ptWid;
                _ptHgt = ptHgt;
                _centered = centered;
                _ptFill = ptFill;
                _ptStroke = ptStroke;
              }
            } else {
              let pt = cursorPts[i3];
              if (pt != null) {
                cursorPtsLft[i3] = ptLft;
                cursorPtsTop[i3] = ptTop;
                elSize(pt, ptWid, ptHgt, centered);
                elColor(pt, ptFill, ptStroke);
                elTrans(pt, ceil(ptLft), ceil(ptTop), plotWidCss, plotHgtCss);
              }
            }
          }
        }
      }
      if (cursorOnePt) {
        let p3 = focus.prox;
        let focusChanged = focusedSeries == null ? closestDist <= p3 : closestDist > p3 || closestSeries != focusedSeries;
        if (shouldSetLegend || focusChanged) {
          let pt = cursorPts[0];
          if (pt != null) {
            cursorPtsLft[0] = _ptLft;
            cursorPtsTop[0] = _ptTop;
            elSize(pt, _ptWid, _ptHgt, _centered);
            elColor(pt, _ptFill, _ptStroke);
            elTrans(pt, ceil(_ptLft), ceil(_ptTop), plotWidCss, plotHgtCss);
          }
        }
      }
    }
    if (select.show && dragging) {
      if (src != null) {
        let [xKey, yKey] = syncOpts.scales;
        let [matchXKeys, matchYKeys] = syncOpts.match;
        let [xKeySrc, yKeySrc] = src.cursor.sync.scales;
        let sdrag = src.cursor.drag;
        dragX = sdrag._x;
        dragY = sdrag._y;
        if (dragX || dragY) {
          let { left, top, width, height } = src.select;
          let sori = src.scales[xKeySrc].ori;
          let sPosToVal = src.posToVal;
          let sOff, sDim, sc, a3, b;
          let matchingX = xKey != null && matchXKeys(xKey, xKeySrc);
          let matchingY = yKey != null && matchYKeys(yKey, yKeySrc);
          if (matchingX && dragX) {
            if (sori == 0) {
              sOff = left;
              sDim = width;
            } else {
              sOff = top;
              sDim = height;
            }
            sc = scales[xKey];
            a3 = valToPosX(sPosToVal(sOff, xKeySrc), sc, xDim, 0);
            b = valToPosX(sPosToVal(sOff + sDim, xKeySrc), sc, xDim, 0);
            setSelX(min(a3, b), abs(b - a3));
          } else
            setSelX(0, xDim);
          if (matchingY && dragY) {
            if (sori == 1) {
              sOff = left;
              sDim = width;
            } else {
              sOff = top;
              sDim = height;
            }
            sc = scales[yKey];
            a3 = valToPosY(sPosToVal(sOff, yKeySrc), sc, yDim, 0);
            b = valToPosY(sPosToVal(sOff + sDim, yKeySrc), sc, yDim, 0);
            setSelY(min(a3, b), abs(b - a3));
          } else
            setSelY(0, yDim);
        } else
          hideSelect();
      } else {
        let rawDX = abs(rawMouseLeft1 - rawMouseLeft0);
        let rawDY = abs(rawMouseTop1 - rawMouseTop0);
        if (scaleX.ori == 1) {
          let _rawDX = rawDX;
          rawDX = rawDY;
          rawDY = _rawDX;
        }
        dragX = drag.x && rawDX >= drag.dist;
        dragY = drag.y && rawDY >= drag.dist;
        let uni = drag.uni;
        if (uni != null) {
          if (dragX && dragY) {
            dragX = rawDX >= uni;
            dragY = rawDY >= uni;
            if (!dragX && !dragY) {
              if (rawDY > rawDX)
                dragY = true;
              else
                dragX = true;
            }
          }
        } else if (drag.x && drag.y && (dragX || dragY))
          dragX = dragY = true;
        let p0, p1;
        if (dragX) {
          if (scaleX.ori == 0) {
            p0 = mouseLeft0;
            p1 = mouseLeft1;
          } else {
            p0 = mouseTop0;
            p1 = mouseTop1;
          }
          setSelX(min(p0, p1), abs(p1 - p0));
          if (!dragY)
            setSelY(0, yDim);
        }
        if (dragY) {
          if (scaleX.ori == 1) {
            p0 = mouseLeft0;
            p1 = mouseLeft1;
          } else {
            p0 = mouseTop0;
            p1 = mouseTop1;
          }
          setSelY(min(p0, p1), abs(p1 - p0));
          if (!dragX)
            setSelX(0, xDim);
        }
        if (!dragX && !dragY) {
          setSelX(0, 0);
          setSelY(0, 0);
        }
      }
    }
    drag._x = dragX;
    drag._y = dragY;
    if (src == null) {
      if (_pub) {
        if (syncKey != null) {
          let [xSyncKey, ySyncKey] = syncOpts.scales;
          syncOpts.values[0] = xSyncKey != null ? posToVal(scaleX.ori == 0 ? mouseLeft1 : mouseTop1, xSyncKey) : null;
          syncOpts.values[1] = ySyncKey != null ? posToVal(scaleX.ori == 1 ? mouseLeft1 : mouseTop1, ySyncKey) : null;
        }
        pubSync(mousemove, self, mouseLeft1, mouseTop1, plotWidCss, plotHgtCss, idx);
      }
      if (cursorFocus) {
        let shouldPub = _pub && syncOpts.setSeries;
        let p3 = focus.prox;
        if (focusedSeries == null) {
          if (closestDist <= p3)
            setSeries(closestSeries, FOCUS_TRUE, true, shouldPub);
        } else {
          if (closestDist > p3)
            setSeries(null, FOCUS_TRUE, true, shouldPub);
          else if (closestSeries != focusedSeries)
            setSeries(closestSeries, FOCUS_TRUE, true, shouldPub);
        }
      }
    }
    if (shouldSetLegend) {
      legend.idx = idx;
      setLegend();
    }
    _fire !== false && fire("setCursor");
  }
  let rect2 = null;
  Object.defineProperty(self, "rect", {
    get() {
      if (rect2 == null)
        syncRect(false);
      return rect2;
    }
  });
  function syncRect(defer = false) {
    if (defer)
      rect2 = null;
    else {
      rect2 = over.getBoundingClientRect();
      fire("syncRect", rect2);
    }
  }
  function mouseMove(e3, src, _l, _t, _w, _h, _i) {
    if (cursor._lock)
      return;
    if (dragging && e3 != null && e3.movementX == 0 && e3.movementY == 0)
      return;
    cacheMouse(e3, src, _l, _t, _w, _h, _i, false, e3 != null);
    if (e3 != null)
      updateCursor(null, true, true);
    else
      updateCursor(src, true, false);
  }
  function cacheMouse(e3, src, _l, _t, _w, _h, _i, initial, snap) {
    if (rect2 == null)
      syncRect(false);
    setCursorEvent(e3);
    if (e3 != null) {
      _l = e3.clientX - rect2.left;
      _t = e3.clientY - rect2.top;
    } else {
      if (_l < 0 || _t < 0) {
        mouseLeft1 = -10;
        mouseTop1 = -10;
        return;
      }
      let [xKey, yKey] = syncOpts.scales;
      let syncOptsSrc = src.cursor.sync;
      let [xValSrc, yValSrc] = syncOptsSrc.values;
      let [xKeySrc, yKeySrc] = syncOptsSrc.scales;
      let [matchXKeys, matchYKeys] = syncOpts.match;
      let rotSrc = src.axes[0].side % 2 == 1;
      let xDim = scaleX.ori == 0 ? plotWidCss : plotHgtCss, yDim = scaleX.ori == 1 ? plotWidCss : plotHgtCss, _xDim = rotSrc ? _h : _w, _yDim = rotSrc ? _w : _h, _xPos = rotSrc ? _t : _l, _yPos = rotSrc ? _l : _t;
      if (xKeySrc != null)
        _l = matchXKeys(xKey, xKeySrc) ? getPos(xValSrc, scales[xKey], xDim, 0) : -10;
      else
        _l = xDim * (_xPos / _xDim);
      if (yKeySrc != null)
        _t = matchYKeys(yKey, yKeySrc) ? getPos(yValSrc, scales[yKey], yDim, 0) : -10;
      else
        _t = yDim * (_yPos / _yDim);
      if (scaleX.ori == 1) {
        let __l = _l;
        _l = _t;
        _t = __l;
      }
    }
    if (snap && (src == null || src.cursor.event.type == mousemove)) {
      if (_l <= 1 || _l >= plotWidCss - 1)
        _l = incrRound(_l, plotWidCss);
      if (_t <= 1 || _t >= plotHgtCss - 1)
        _t = incrRound(_t, plotHgtCss);
    }
    if (initial) {
      rawMouseLeft0 = _l;
      rawMouseTop0 = _t;
      [mouseLeft0, mouseTop0] = cursor.move(self, _l, _t);
    } else {
      mouseLeft1 = _l;
      mouseTop1 = _t;
    }
  }
  const _hideProps = {
    width: 0,
    height: 0,
    left: 0,
    top: 0
  };
  function hideSelect() {
    setSelect(_hideProps, false);
  }
  let downSelectLeft;
  let downSelectTop;
  let downSelectWidth;
  let downSelectHeight;
  function mouseDown(e3, src, _l, _t, _w, _h, _i) {
    dragging = true;
    dragX = dragY = drag._x = drag._y = false;
    cacheMouse(e3, src, _l, _t, _w, _h, _i, true, false);
    if (e3 != null) {
      onMouse(mouseup, doc, mouseUp, false);
      pubSync(mousedown, self, mouseLeft0, mouseTop0, plotWidCss, plotHgtCss, null);
    }
    let { left, top, width, height } = select;
    downSelectLeft = left;
    downSelectTop = top;
    downSelectWidth = width;
    downSelectHeight = height;
  }
  function mouseUp(e3, src, _l, _t, _w, _h, _i) {
    dragging = drag._x = drag._y = false;
    cacheMouse(e3, src, _l, _t, _w, _h, _i, false, true);
    let { left, top, width, height } = select;
    let hasSelect = width > 0 || height > 0;
    let chgSelect = downSelectLeft != left || downSelectTop != top || downSelectWidth != width || downSelectHeight != height;
    hasSelect && chgSelect && setSelect(select);
    if (drag.setScale && hasSelect && chgSelect) {
      let xOff = left, xDim = width, yOff = top, yDim = height;
      if (scaleX.ori == 1) {
        xOff = top, xDim = height, yOff = left, yDim = width;
      }
      if (dragX) {
        _setScale(
          xScaleKey,
          posToVal(xOff, xScaleKey),
          posToVal(xOff + xDim, xScaleKey)
        );
      }
      if (dragY) {
        for (let k3 in scales) {
          let sc = scales[k3];
          if (k3 != xScaleKey && sc.from == null && sc.min != inf) {
            _setScale(
              k3,
              posToVal(yOff + yDim, k3),
              posToVal(yOff, k3)
            );
          }
        }
      }
      hideSelect();
    } else if (cursor.lock) {
      cursor._lock = !cursor._lock;
      updateCursor(src, true, e3 != null);
    }
    if (e3 != null) {
      offMouse(mouseup, doc);
      pubSync(mouseup, self, mouseLeft1, mouseTop1, plotWidCss, plotHgtCss, null);
    }
  }
  function mouseLeave(e3, src, _l, _t, _w, _h, _i) {
    if (cursor._lock)
      return;
    setCursorEvent(e3);
    let _dragging = dragging;
    if (dragging) {
      let snapH = true;
      let snapV = true;
      let snapProx = 10;
      let dragH, dragV;
      if (scaleX.ori == 0) {
        dragH = dragX;
        dragV = dragY;
      } else {
        dragH = dragY;
        dragV = dragX;
      }
      if (dragH && dragV) {
        snapH = mouseLeft1 <= snapProx || mouseLeft1 >= plotWidCss - snapProx;
        snapV = mouseTop1 <= snapProx || mouseTop1 >= plotHgtCss - snapProx;
      }
      if (dragH && snapH)
        mouseLeft1 = mouseLeft1 < mouseLeft0 ? 0 : plotWidCss;
      if (dragV && snapV)
        mouseTop1 = mouseTop1 < mouseTop0 ? 0 : plotHgtCss;
      updateCursor(null, true, true);
      dragging = false;
    }
    mouseLeft1 = -10;
    mouseTop1 = -10;
    activeIdxs.fill(null);
    updateCursor(null, true, true);
    if (_dragging)
      dragging = _dragging;
  }
  function dblClick(e3, src, _l, _t, _w, _h, _i) {
    if (cursor._lock)
      return;
    setCursorEvent(e3);
    autoScaleX();
    hideSelect();
    if (e3 != null)
      pubSync(dblclick, self, mouseLeft1, mouseTop1, plotWidCss, plotHgtCss, null);
  }
  function syncPxRatio() {
    axes.forEach(syncFontSize);
    _setSize(self.width, self.height, true);
  }
  on(dppxchange, win, syncPxRatio);
  const events = {};
  events.mousedown = mouseDown;
  events.mousemove = mouseMove;
  events.mouseup = mouseUp;
  events.dblclick = dblClick;
  events["setSeries"] = (e3, src, idx, opts2) => {
    let seriesIdxMatcher2 = syncOpts.match[2];
    idx = seriesIdxMatcher2(self, src, idx);
    idx != -1 && setSeries(idx, opts2, true, false);
  };
  if (showCursor) {
    onMouse(mousedown, over, mouseDown);
    onMouse(mousemove, over, mouseMove);
    onMouse(mouseenter, over, (e3) => {
      setCursorEvent(e3);
      syncRect(false);
    });
    onMouse(mouseleave, over, mouseLeave);
    onMouse(dblclick, over, dblClick);
    cursorPlots.add(self);
    self.syncRect = syncRect;
  }
  const hooks = self.hooks = opts.hooks || {};
  function fire(evName, a1, a22) {
    if (deferHooks)
      hooksQueue.push([evName, a1, a22]);
    else {
      if (evName in hooks) {
        hooks[evName].forEach((fn) => {
          fn.call(null, self, a1, a22);
        });
      }
    }
  }
  (opts.plugins || []).forEach((p3) => {
    for (let evName in p3.hooks)
      hooks[evName] = (hooks[evName] || []).concat(p3.hooks[evName]);
  });
  const seriesIdxMatcher = (self2, src, srcSeriesIdx) => srcSeriesIdx;
  const syncOpts = assign({
    key: null,
    setSeries: false,
    filters: {
      pub: retTrue,
      sub: retTrue
    },
    scales: [xScaleKey, series[1] ? series[1].scale : null],
    match: [retEq, retEq, seriesIdxMatcher],
    values: [null, null]
  }, cursor.sync);
  if (syncOpts.match.length == 2)
    syncOpts.match.push(seriesIdxMatcher);
  cursor.sync = syncOpts;
  const syncKey = syncOpts.key;
  const sync = _sync(syncKey);
  function pubSync(type, src, x2, y3, w3, h3, i3) {
    if (syncOpts.filters.pub(type, src, x2, y3, w3, h3, i3))
      sync.pub(type, src, x2, y3, w3, h3, i3);
  }
  sync.sub(self);
  function pub(type, src, x2, y3, w3, h3, i3) {
    if (syncOpts.filters.sub(type, src, x2, y3, w3, h3, i3))
      events[type](null, src, x2, y3, w3, h3, i3);
  }
  self.pub = pub;
  function destroy() {
    sync.unsub(self);
    cursorPlots.delete(self);
    mouseListeners.clear();
    off(dppxchange, win, syncPxRatio);
    root.remove();
    legendTable == null ? void 0 : legendTable.remove();
    fire("destroy");
  }
  self.destroy = destroy;
  function _init() {
    fire("init", opts, data);
    setData(data || opts.data, false);
    if (pendScales[xScaleKey])
      setScale(xScaleKey, pendScales[xScaleKey]);
    else
      autoScaleX();
    shouldSetSelect = select.show && (select.width > 0 || select.height > 0);
    shouldSetCursor = shouldSetLegend = true;
    _setSize(opts.width, opts.height);
  }
  series.forEach(initSeries);
  axes.forEach(initAxis);
  if (then) {
    if (then instanceof HTMLElement) {
      then.appendChild(root);
      _init();
    } else
      then(self, _init);
  } else
    _init();
  return self;
}
uPlot.assign = assign;
uPlot.fmtNum = fmtNum;
uPlot.rangeNum = rangeNum;
uPlot.rangeLog = rangeLog;
uPlot.rangeAsinh = rangeAsinh;
uPlot.orient = orient;
uPlot.pxRatio = pxRatio;
{
  uPlot.join = join;
}
{
  uPlot.fmtDate = fmtDate;
  uPlot.tzDate = tzDate;
}
uPlot.sync = _sync;
{
  uPlot.addGap = addGap;
  uPlot.clipGaps = clipGaps;
  let paths = uPlot.paths = {
    points
  };
  paths.linear = linear;
  paths.stepped = stepped;
  paths.bars = bars;
  paths.spline = monotoneCubic;
}

// src/app.ts
var pathParts = window.location.pathname.split("/").filter(Boolean);
var slug = pathParts.length > 1 ? pathParts[1] : "";
var isHome = slug === "";
async function apiFetch(path, opts = {}) {
  const res = await fetch(path, __spreadProps(__spreadValues({}, opts), {
    headers: __spreadValues({ "Content-Type": "application/json" }, opts.headers || {}),
    credentials: "same-origin"
  }));
  if (!res.ok) {
    if (res.status === 401) {
      window.location.href = "/dashboard/login";
      throw new Error("Session expired");
    }
    const body = await res.json().catch(() => ({}));
    throw new Error(body.detail || `HTTP ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}
var api = {
  getStats: () => apiFetch(`/dashboard/api/${slug}/stats`),
  getTimeseries: (days2 = 30) => apiFetch(`/dashboard/api/${slug}/timeseries?days=${days2}`),
  getLeaderboard: () => apiFetch(`/dashboard/api/${slug}/leaderboard`),
  listSignups: (params) => {
    const q3 = new URLSearchParams(params).toString();
    return apiFetch(`/dashboard/api/${slug}/signups?${q3}`);
  },
  listWebhooks: () => apiFetch(`/dashboard/api/${slug}/webhooks`),
  createWebhook: (body) => apiFetch(`/dashboard/api/${slug}/webhooks`, { method: "POST", body: JSON.stringify(body) }),
  deleteWebhook: (id) => apiFetch(`/dashboard/api/${slug}/webhooks/${id}`, { method: "DELETE" }),
  listDeliveries: () => apiFetch(`/dashboard/api/${slug}/deliveries`),
  getSettings: () => apiFetch(`/dashboard/api/${slug}/settings`),
  updateSettings: (body) => apiFetch(`/dashboard/api/${slug}/settings`, { method: "PATCH", body: JSON.stringify(body) }),
  inviteTopN: (count) => apiFetch(`/dashboard/api/${slug}/invite`, { method: "POST", body: JSON.stringify({ count }) }),
  listInvited: (params = {}) => apiFetch(`/dashboard/api/${slug}/invited?` + new URLSearchParams(params).toString()),
  listAPIKeys: () => apiFetch(`/dashboard/api/${slug}/api-keys`),
  createAPIKey: (name) => apiFetch(`/dashboard/api/${slug}/api-keys`, { method: "POST", body: JSON.stringify({ name }) }),
  revokeAPIKey: (id) => apiFetch(`/dashboard/api/${slug}/api-keys/${id}`, { method: "DELETE" })
};
var accountApi = {
  listCampaigns: () => apiFetch("/dashboard/api/campaigns"),
  createCampaign: (name, productURL) => apiFetch("/dashboard/api/campaigns", {
    method: "POST",
    body: JSON.stringify({ name, product_url: productURL })
  })
};
function fmtDate2(iso) {
  if (!iso) return "\u2014";
  return new Date(iso).toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
}
function statusBadge(status) {
  const cls = { verified: "badge-success", pending: "badge-warning", expired: "badge-muted", rejected: "badge-danger" }[status] || "badge-muted";
  return m3`<span class=${`badge ${cls}`}>${status}</span>`;
}
function deliveryBadge(status) {
  const cls = { delivered: "badge-success", pending: "badge-warning", failed: "badge-danger" }[status] || "badge-muted";
  return m3`<span class=${`badge ${cls}`}>${status}</span>`;
}
function Tooltip({ text }) {
  return m3`<span class="tooltip-icon" data-tip=${text}>?</span>`;
}
function useAsync(fn, deps = []) {
  const [state, setState] = d2({ data: null, loading: true, error: null });
  const reload = q2(() => {
    setState((s3) => __spreadProps(__spreadValues({}, s3), { loading: true, error: null }));
    fn().then((data) => setState({ data, loading: false, error: null })).catch((err) => setState({ data: null, loading: false, error: err.message }));
  }, deps);
  y2(() => {
    reload();
  }, [reload]);
  return __spreadProps(__spreadValues({}, state), { reload });
}
function SignupChart({ days: days2 = 30 }) {
  const containerRef = A2(null);
  const plotRef = A2(null);
  const { data, loading, error } = useAsync(() => api.getTimeseries(days2), [days2]);
  y2(() => {
    if (!data || !containerRef.current) return;
    if (plotRef.current) {
      plotRef.current.destroy();
      plotRef.current = null;
    }
    const timestamps = data.map((d3) => new Date(d3.date).getTime() / 1e3);
    const counts = data.map((d3) => d3.count);
    const opts = {
      width: containerRef.current.offsetWidth || 700,
      height: 200,
      series: [
        {},
        { label: "Signups", stroke: "#4f46e5", fill: "rgba(79,70,229,0.08)", width: 2 }
      ],
      axes: [
        { values: (u3, vals) => vals.map((v3) => new Date(v3 * 1e3).toLocaleDateString(void 0, { month: "short", day: "numeric" })) },
        {}
      ],
      scales: { x: { time: true } },
      cursor: { show: false },
      legend: { show: false }
    };
    plotRef.current = new uPlot(opts, [timestamps, counts], containerRef.current);
    return () => {
      if (plotRef.current) {
        plotRef.current.destroy();
        plotRef.current = null;
      }
    };
  }, [data]);
  if (loading) return m3`<div class="loading">Loading chart…</div>`;
  if (error) return m3`<div class="alert alert-error">${error}</div>`;
  return m3`<div ref=${containerRef}></div>`;
}
function OverviewPage() {
  var _a;
  const stats = useAsync(() => api.getStats(), []);
  const leaders = useAsync(() => api.getLeaderboard(), []);
  return m3`
    <h1 class="page-title">Overview</h1>
    ${stats.loading ? m3`<div class="loading">Loading stats…</div>` : stats.error ? m3`<div class="alert alert-error">${stats.error}</div>` : m3`
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-label">Total Signups</div>
          <div class="stat-value">${stats.data.total_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Verified</div>
          <div class="stat-value">${stats.data.verified_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Today</div>
          <div class="stat-value">${stats.data.today_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label" style="display:flex;align-items:center">Viral Coefficient <${Tooltip} text="Average number of new signups each existing signup generates through referrals. Above 1.0 means exponential growth." /></div>
          <div class="stat-value">${stats.data.viral_coefficient.toFixed(2)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label" style="display:flex;align-items:center">Referral Rate <${Tooltip} text="Percentage of total signups who joined via a referral link." /></div>
          <div class="stat-value">${(stats.data.referral_rate * 100).toFixed(1)}%</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Invited</div>
          <div class="stat-value">${(stats.data.invited_signups || 0).toLocaleString()}</div>
        </div>
      </div>
    `}

    ${((_a = stats.data) == null ? void 0 : _a.total_signups) === 0 && m3`
      <div class="settings-section" style="text-align:center;padding:32px;margin-bottom:24px">
        <p style="color:var(--muted);margin-bottom:12px">No signups yet. Have you embedded the widget on your page?</p>
        <a class="btn btn-primary" href="#setup">Get embed code →</a>
      </div>
    `}

    <div class="chart-card">
      <div class="chart-title">Signup Trend (last 30 days)</div>
      <${SignupChart} days=${30} />
    </div>

    <div class="table-card">
      <div class="table-header"><span class="table-title">Top Referrers</span></div>
      ${leaders.loading ? m3`<div class="loading">Loading…</div>` : leaders.error ? m3`<div class="alert alert-error">${leaders.error}</div>` : m3`
        <table>
          <thead><tr><th>#</th><th>Email</th><th>Referrals</th><th>Position</th></tr></thead>
          <tbody>
            ${leaders.data.slice(0, 10).map((s3, i3) => m3`
              <tr key=${s3.id}>
                <td>${i3 + 1}</td>
                <td>${s3.email}</td>
                <td>${s3.referral_count}</td>
                <td>${s3.effective_position}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${leaders.data.length === 0 && m3`<div class="empty">No signups yet.</div>`}
      `}
    </div>
  `;
}
function SignupsPage() {
  const [page, setPage] = d2(1);
  const [limit] = d2(50);
  const [status, setStatus] = d2("");
  const [search, setSearch] = d2("");
  const [searchInput, setSearchInput] = d2("");
  const [sort, setSort] = d2("date");
  const { data, loading, error } = useAsync(
    () => api.listSignups({ page, limit, status, search, sort }),
    [page, limit, status, search, sort]
  );
  const signups = (data == null ? void 0 : data.signups) || [];
  const total = (data == null ? void 0 : data.total) || 0;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  function handleSearch(e3) {
    e3.preventDefault();
    setSearch(searchInput);
    setPage(1);
  }
  return m3`
    <h1 class="page-title">Signups</h1>
    <div class="table-card">
      <div class="table-header">
        <span class="table-title">${total.toLocaleString()} total</span>
        <form onSubmit=${handleSearch} style="display:flex;gap:8px;align-items:center">
          <input type="text" placeholder="Search email…" value=${searchInput}
            onInput=${(e3) => setSearchInput(e3.target.value)} style="width:200px" />
          <button class="btn btn-secondary btn-sm" type="submit">Search</button>
        </form>
        <select value=${status} onChange=${(e3) => {
    setStatus(e3.target.value);
    setPage(1);
  }}>
          <option value="">All statuses</option>
          <option value="verified">Verified</option>
          <option value="pending">Pending</option>
          <option value="expired">Expired</option>
          <option value="rejected">Rejected</option>
        </select>
        <select value=${sort} onChange=${(e3) => {
    setSort(e3.target.value);
    setPage(1);
  }}>
          <option value="date">Newest first</option>
          <option value="position">By position</option>
          <option value="referrals">By referrals</option>
        </select>
        <a class="btn btn-secondary btn-sm" href=${`/dashboard/api/${slug}/signups/export.csv`} download>Export CSV</a>
      </div>

      ${loading ? m3`<div class="loading">Loading…</div>` : error ? m3`<div class="alert alert-error" style="margin:16px">${error}</div>` : m3`
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Status</th>
              <th>Position</th>
              <th>Referrals</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            ${signups.map((s3) => m3`
              <tr key=${s3.id}>
                <td>${s3.email}</td>
                <td>${statusBadge(s3.status)}</td>
                <td>${s3.effective_position}</td>
                <td>${s3.referral_count}</td>
                <td>${fmtDate2(s3.created_at)}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${signups.length === 0 && m3`<div class="empty">No signups match your filters.</div>`}
        <div class="pagination">
          <span class="info">Page ${page} of ${totalPages} (${total.toLocaleString()} results)</span>
          <button class="btn btn-secondary btn-sm" disabled=${page <= 1} onClick=${() => setPage((p3) => p3 - 1)}>← Prev</button>
          <button class="btn btn-secondary btn-sm" disabled=${page >= totalPages} onClick=${() => setPage((p3) => p3 + 1)}>Next →</button>
        </div>
      `}
    </div>
  `;
}
function LeaderboardPage() {
  const { data, loading, error } = useAsync(() => api.getLeaderboard(), []);
  return m3`
    <h1 class="page-title">Leaderboard</h1>
    <div class="table-card">
      <div class="table-header"><span class="table-title">Top Referrers</span></div>
      ${loading ? m3`<div class="loading">Loading…</div>` : error ? m3`<div class="alert alert-error" style="margin:16px">${error}</div>` : m3`
        <table>
          <thead><tr><th>Rank</th><th>Email</th><th>Referral Code</th><th>Referrals</th><th>Position</th></tr></thead>
          <tbody>
            ${data.map((s3, i3) => m3`
              <tr key=${s3.id}>
                <td>${i3 + 1}</td>
                <td>${s3.email}</td>
                <td><code>${s3.referral_code}</code></td>
                <td>${s3.referral_count}</td>
                <td>${s3.effective_position}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${data.length === 0 && m3`<div class="empty">No signups yet.</div>`}
      `}
    </div>
  `;
}
function WebhooksPage() {
  const webhooks = useAsync(() => api.listWebhooks(), []);
  const deliveries = useAsync(() => api.listDeliveries(), []);
  const [form, setForm] = d2({ url: "", secret: "", events: [] });
  const [saving, setSaving] = d2(false);
  const [msg, setMsg] = d2(null);
  const allEvents = ["signup.created", "email.verified", "referral.converted"];
  function toggleEvent(ev) {
    setForm((f3) => __spreadProps(__spreadValues({}, f3), {
      events: f3.events.includes(ev) ? f3.events.filter((e3) => e3 !== ev) : [...f3.events, ev]
    }));
  }
  async function handleCreate(e3) {
    e3.preventDefault();
    if (form.events.length === 0) {
      setMsg({ type: "error", text: "Select at least one event." });
      return;
    }
    setSaving(true);
    setMsg(null);
    try {
      await api.createWebhook({ url: form.url, secret: form.secret, events: form.events });
      setForm({ url: "", secret: "", events: [] });
      setMsg({ type: "success", text: "Webhook endpoint created." });
      webhooks.reload();
    } catch (err) {
      setMsg({ type: "error", text: err.message });
    } finally {
      setSaving(false);
    }
  }
  async function handleDelete(id) {
    if (!confirm("Delete this webhook endpoint?")) return;
    try {
      await api.deleteWebhook(id);
      webhooks.reload();
      deliveries.reload();
    } catch (err) {
      setMsg({ type: "error", text: err.message });
    }
  }
  return m3`
    <h1 class="page-title">Webhooks</h1>
    ${msg && m3`<div class=${`alert alert-${msg.type}`}>${msg.text}</div>`}

    <div class="table-card">
      <div class="table-header"><span class="table-title">Endpoints</span></div>
      ${webhooks.loading ? m3`<div class="loading">Loading…</div>` : webhooks.error ? m3`<div class="alert alert-error" style="margin:16px">${webhooks.error}</div>` : m3`
        <table>
          <thead><tr><th>URL</th><th>Events</th><th>Active</th><th></th></tr></thead>
          <tbody>
            ${webhooks.data.map((w3) => m3`
              <tr key=${w3.id}>
                <td style="word-break:break-all">${w3.url}</td>
                <td>${w3.events.join(", ")}</td>
                <td>${w3.active ? m3`<span class="badge badge-success">Active</span>` : m3`<span class="badge badge-muted">Paused</span>`}</td>
                <td><button class="btn btn-danger btn-sm" onClick=${() => handleDelete(w3.id)}>Delete</button></td>
              </tr>
            `)}
          </tbody>
        </table>
        ${webhooks.data.length === 0 && m3`<div class="empty">No webhook endpoints.</div>`}
        <form class="inline-form" onSubmit=${handleCreate}>
          <div class="form-group" style="flex:1;min-width:200px">
            <label>Endpoint URL</label>
            <input required type="url" value=${form.url} onInput=${(e3) => setForm((f3) => __spreadProps(__spreadValues({}, f3), { url: e3.target.value }))} placeholder="https://example.com/webhook" />
          </div>
          <div class="form-group">
            <label>Secret (optional)</label>
            <input value=${form.secret} onInput=${(e3) => setForm((f3) => __spreadProps(__spreadValues({}, f3), { secret: e3.target.value }))} placeholder="for HMAC signing" style="width:160px" />
          </div>
          <div class="form-group">
            <label>Events</label>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${allEvents.map((ev) => m3`
                <label style="display:flex;gap:4px;align-items:center;font-size:13px;font-weight:normal;color:var(--text)">
                  <input type="checkbox" checked=${form.events.includes(ev)} onChange=${() => toggleEvent(ev)} />
                  ${ev}
                </label>
              `)}
            </div>
          </div>
          <button class="btn btn-primary" type="submit" disabled=${saving}>Add</button>
        </form>
      `}
    </div>

    <div class="table-card">
      <div class="table-header"><span class="table-title">Recent Deliveries</span></div>
      ${deliveries.loading ? m3`<div class="loading">Loading…</div>` : deliveries.error ? m3`<div class="alert alert-error" style="margin:16px">${deliveries.error}</div>` : m3`
        <table>
          <thead><tr><th>Endpoint</th><th>Event</th><th>Status</th><th>HTTP</th><th>Attempts</th><th>Time</th></tr></thead>
          <tbody>
            ${deliveries.data.map((d3, i3) => m3`
              <tr key=${i3}>
                <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title=${d3.endpoint_url}>${d3.endpoint_url}</td>
                <td><code>${d3.event_type}</code></td>
                <td>${deliveryBadge(d3.status)}</td>
                <td>${d3.response_status || "\u2014"}</td>
                <td>${d3.attempts}</td>
                <td>${fmtDate2(d3.created_at)}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${deliveries.data.length === 0 && m3`<div class="empty">No deliveries yet.</div>`}
      `}
    </div>
  `;
}
function CopyButton({ text }) {
  const [copied, setCopied] = d2(false);
  function copy2(e3) {
    e3.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  }
  return m3`<button class="btn btn-secondary btn-sm" style="padding:2px 6px;font-size:11px" onClick=${copy2}>${copied ? "\u2713" : "Copy"}</button>`;
}
function InviteHowItWorks() {
  return m3`
    <div class="settings-section" style="margin-bottom:24px;border-left:3px solid var(--primary);padding-left:16px">
      <div class="settings-title" style="margin-bottom:8px">How invitations work</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:12px">
        When a user is invited, they receive an email with a unique link containing <code>${"?invite=<token>"}</code>.
        Your product should detect this query parameter when the user lands on your site and use the code to verify access.
      </p>
      <p style="font-size:13px;font-weight:600;margin-bottom:6px">Ways to validate an invite code:</p>
      <ul style="font-size:13px;color:var(--muted);margin:0;padding-left:20px;line-height:1.8">
        <li>
          <strong>API</strong> — check status with
          <code>GET /api/v1/invites/{"{token}"}</code>, then mark as used with
          <code>POST /api/v1/invites/{"{token}"}/redeem</code>.
          Both endpoints are public (the token is the credential).
        </li>
        <li>
          <strong>Dashboard</strong> — paste or type the invite code into the search box below to look it up manually and confirm its status.
        </li>
        <li>
          <strong>MCP</strong> — use <code>list_signups</code> with <code>status=invited</code> and search by token, or ask Claude to look up a specific invite code.
        </li>
      </ul>
    </div>
  `;
}
var INVITED_PAGE_SIZE = 50;
function InvitationsPage() {
  var _a, _b;
  const statsAsync = useAsync(() => api.getStats(), []);
  const [count, setCount] = d2(100);
  const [inviting, setInviting] = d2(false);
  const [msg, setMsg] = d2(null);
  const [search, setSearch] = d2("");
  const [offset, setOffset] = d2(0);
  const [debouncedSearch, setDebouncedSearch] = d2("");
  y2(() => {
    const t4 = setTimeout(() => {
      setDebouncedSearch(search);
      setOffset(0);
    }, 300);
    return () => clearTimeout(t4);
  }, [search]);
  const invitedAsync = useAsync(
    () => api.listInvited({ limit: INVITED_PAGE_SIZE, offset, search: debouncedSearch }),
    [offset, debouncedSearch]
  );
  async function handleInvite(e3) {
    e3.preventDefault();
    const n3 = parseInt(count, 10);
    if (!n3 || n3 < 1) {
      setMsg({ type: "error", text: "Enter a valid count." });
      return;
    }
    if (!confirm(`Invite the top ${n3} people? They will receive an email immediately.`)) return;
    setInviting(true);
    setMsg(null);
    try {
      const res = await api.inviteTopN(n3);
      setMsg({ type: "success", text: `\u2705 Invited ${res.invited} people. Total invited: ${res.total_invited}.` });
      statsAsync.reload();
      invitedAsync.reload();
    } catch (err) {
      setMsg({ type: "error", text: err.message });
    } finally {
      setInviting(false);
    }
  }
  const stats = statsAsync.data;
  const verified = stats ? stats.verified_signups || 0 : 0;
  const invited = stats ? stats.invited_signups || 0 : 0;
  const total = ((_a = invitedAsync.data) == null ? void 0 : _a.total) || 0;
  const hasPrev = offset > 0;
  const hasNext = offset + INVITED_PAGE_SIZE < total;
  return m3`
    <h1 class="page-title">Invitations</h1>

    <${InviteHowItWorks} />

    ${statsAsync.loading ? m3`<div class="loading">Loading…</div>` : m3`
      <div class="stat-grid" style="margin-bottom:24px">
        <div class="stat-card">
          <div class="stat-label">Invited</div>
          <div class="stat-value">${invited.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Verified (eligible)</div>
          <div class="stat-value">${(verified - invited).toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Verified</div>
          <div class="stat-value">${verified.toLocaleString()}</div>
        </div>
      </div>
    `}

    ${msg && m3`<div class=${`alert alert-${msg.type}`}>${msg.text}</div>`}

    <div class="settings-section">
      <div class="settings-title">Invite top N</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:16px">
        Marks the top N verified signups (by queue position) as invited and sends them an email immediately.
        Already-invited people are skipped — this is safe to run multiple times.
      </p>
      <form onSubmit=${handleInvite} style="display:flex;align-items:flex-end;gap:12px">
        <div class="form-group" style="margin:0">
          <label>Number of people to invite</label>
          <input type="number" min="1" max="10000" value=${count}
            onInput=${(e3) => setCount(e3.target.value)} style="width:120px" />
        </div>
        <button class="btn btn-primary" type="submit" disabled=${inviting}>
          ${inviting ? "Inviting\u2026" : "Invite"}
        </button>
      </form>
    </div>

    <div class="table-card" style="margin-top:24px">
      <div class="table-header">
        <span class="table-title">Invited signups</span>
        <input
          type="search"
          placeholder="Search by email or invite code…"
          value=${search}
          onInput=${(e3) => setSearch(e3.target.value)}
          style="width:260px;padding:6px 10px;font-size:13px;border:1px solid var(--border);border-radius:6px;background:var(--bg);color:var(--text)"
        />
      </div>
      ${invitedAsync.loading ? m3`<div class="loading">Loading…</div>` : invitedAsync.error ? m3`<div class="alert alert-error">${invitedAsync.error}</div>` : m3`
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Invite Code</th>
              <th>Redeemed</th>
              <th>Position</th>
              <th>Referrals</th>
              <th>Invited at</th>
            </tr>
          </thead>
          <tbody>
            ${(((_b = invitedAsync.data) == null ? void 0 : _b.signups) || []).map((s3) => m3`
              <tr key=${s3.id}>
                <td>${s3.email}</td>
                <td>
                  ${s3.invite_token ? m3`
                    <span style="display:flex;align-items:center;gap:6px">
                      <code style="font-size:12px;color:var(--muted)">${s3.invite_token.slice(0, 12)}…</code>
                      <${CopyButton} text=${s3.invite_token} />
                    </span>
                  ` : m3`<span style="color:var(--muted)">—</span>`}
                </td>
                <td>
                  ${s3.invite_token_redeemed_at ? m3`<span style="color:var(--success)">✓ ${fmtDate2(s3.invite_token_redeemed_at)}</span>` : m3`<span style="color:var(--muted)">—</span>`}
                </td>
                <td>${s3.effective_position}</td>
                <td>${s3.referral_count}</td>
                <td>${s3.invited_at ? new Date(s3.invited_at).toLocaleString() : "\u2014"}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${total === 0 && m3`<div class="empty">${debouncedSearch ? "No results for that search." : "No one invited yet."}</div>`}
        ${total > INVITED_PAGE_SIZE && m3`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;font-size:13px;color:var(--muted);border-top:1px solid var(--border)">
            <span>Showing ${offset + 1}–${Math.min(offset + INVITED_PAGE_SIZE, total)} of ${total.toLocaleString()}</span>
            <div style="display:flex;gap:8px">
              <button class="btn btn-secondary btn-sm" disabled=${!hasPrev} onClick=${() => setOffset((o3) => o3 - INVITED_PAGE_SIZE)}>← Prev</button>
              <button class="btn btn-secondary btn-sm" disabled=${!hasNext} onClick=${() => setOffset((o3) => o3 + INVITED_PAGE_SIZE)}>Next →</button>
            </div>
          </div>
        `}
      `}
    </div>
  `;
}
function APIKeysSection() {
  var _a, _b;
  const keysAsync = useAsync(() => api.listAPIKeys(), []);
  const [newKeyName, setNewKeyName] = d2("");
  const [creating, setCreating] = d2(false);
  const [revealedKey, setRevealedKey] = d2(null);
  const [err, setErr] = d2(null);
  async function handleCreate(e3) {
    e3.preventDefault();
    if (!newKeyName.trim()) return;
    setCreating(true);
    setErr(null);
    try {
      const res = await api.createAPIKey(newKeyName.trim());
      setRevealedKey({ id: res.id, value: res.api_key });
      setNewKeyName("");
      keysAsync.reload();
    } catch (e4) {
      setErr(e4.message);
    } finally {
      setCreating(false);
    }
  }
  async function handleRevoke(id, name) {
    if (!confirm(`Revoke key "${name}"? It will stop working immediately.`)) return;
    setErr(null);
    try {
      await api.revokeAPIKey(id);
      if ((revealedKey == null ? void 0 : revealedKey.id) === id) setRevealedKey(null);
      keysAsync.reload();
    } catch (e3) {
      setErr(e3.message);
    }
  }
  return m3`
    <div class="settings-section">
      <div class="settings-title">API Keys</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:16px">
        API keys authenticate programmatic access to your campaign via the REST API or MCP server.
      </p>
      ${err && m3`<div class="alert alert-error" style="margin-bottom:12px">${err}</div>`}

      ${revealedKey && m3`
        <div class="alert alert-success" style="margin-bottom:16px">
          <div style="margin-bottom:6px;font-weight:600">New key created — copy it now. It will not be shown again.</div>
          <div class="api-key-display">
            <span class="api-key-mono" style="word-break:break-all">${revealedKey.value}</span>
            <${CopyButton} text=${revealedKey.value} />
          </div>
        </div>
      `}

      ${keysAsync.loading && m3`<div class="loading" style="margin-bottom:12px">Loading…</div>`}
      ${((_a = keysAsync.data) == null ? void 0 : _a.length) > 0 && m3`
        <table style="margin-bottom:16px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Last used</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${keysAsync.data.map((k3) => m3`
              <tr>
                <td style="font-weight:500">${k3.name}</td>
                <td style="color:var(--muted);font-size:13px">${fmtDate2(k3.created_at)}</td>
                <td style="color:var(--muted);font-size:13px">${k3.last_used_at ? fmtDate2(k3.last_used_at) : "\u2014"}</td>
                <td style="text-align:right">
                  <button class="btn btn-danger btn-sm" onClick=${() => handleRevoke(k3.id, k3.name)}>Revoke</button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      `}
      ${!keysAsync.loading && ((_b = keysAsync.data) == null ? void 0 : _b.length) === 0 && m3`
        <p style="font-size:13px;color:var(--muted);margin-bottom:16px">No active API keys.</p>
      `}

      <form onSubmit=${handleCreate} style="display:flex;gap:8px;align-items:flex-end">
        <div class="form-group" style="flex:1;margin-bottom:0">
          <label>New key name</label>
          <input placeholder="e.g. production, CI" value=${newKeyName}
            onInput=${(e3) => setNewKeyName(e3.target.value)} />
        </div>
        <button class="btn btn-primary" type="submit" disabled=${creating || !newKeyName.trim()}>
          ${creating ? "Creating\u2026" : "Create API Key"}
        </button>
      </form>
    </div>
  `;
}
function SettingsPage() {
  var _a;
  const settingsAsync = useAsync(() => api.getSettings(), []);
  const [form, setForm] = d2(null);
  const [saving, setSaving] = d2(false);
  const [msg, setMsg] = d2(null);
  y2(() => {
    if (settingsAsync.data && !form) {
      setForm(settingsAsync.data);
    }
  }, [settingsAsync.data]);
  async function handleSave(e3) {
    e3.preventDefault();
    setSaving(true);
    setMsg(null);
    try {
      await api.updateSettings({
        name: form.name,
        boost_weight: parseFloat(form.boost_weight),
        max_signups: form.max_signups ? parseInt(form.max_signups, 10) : null,
        status: form.status,
        product_url: form.product_url
      });
      setMsg({ type: "success", text: "Settings saved." });
      settingsAsync.reload();
    } catch (err) {
      setMsg({ type: "error", text: err.message });
    } finally {
      setSaving(false);
    }
  }
  if (settingsAsync.loading) return m3`<div class="loading">Loading…</div>`;
  if (settingsAsync.error) return m3`<div class="alert alert-error">${settingsAsync.error}</div>`;
  return m3`
    <h1 class="page-title">Settings</h1>
    ${msg && m3`<div class=${`alert alert-${msg.type}`}>${msg.text}</div>`}

    ${form && m3`
      <div class="settings-section">
        <div class="settings-title">Campaign Settings</div>
        <form onSubmit=${handleSave}>
          <div class="form-row">
            <div class="form-group" style="flex:1;min-width:200px">
              <label>Campaign Name</label>
              <input required value=${form.name || ""} onInput=${(e3) => setForm((f3) => __spreadProps(__spreadValues({}, f3), { name: e3.target.value }))} />
            </div>
            <div class="form-group">
              <label>Status</label>
              <select value=${form.status || ""} onChange=${(e3) => setForm((f3) => __spreadProps(__spreadValues({}, f3), { status: e3.target.value }))}>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label style="display:flex;align-items:center">Boost Weight <${Tooltip} text="How many queue positions each referral is worth. Default 1.0 means 1 referral moves you up 1 spot. Increase to make referrals more powerful." /></label>
              <input type="number" step="0.1" min="0" value=${(_a = form.boost_weight) != null ? _a : 1}
                onInput=${(e3) => setForm((f3) => __spreadProps(__spreadValues({}, f3), { boost_weight: e3.target.value }))} style="width:120px" />
            </div>
            <div class="form-group">
              <label style="display:flex;align-items:center">Max Signups <${Tooltip} text="Cap the total number of signups. New registrations are rejected once the cap is reached. Leave blank for unlimited." /></label>
              <input type="number" min="1" value=${form.max_signups || ""}
                onInput=${(e3) => setForm((f3) => __spreadProps(__spreadValues({}, f3), { max_signups: e3.target.value || null }))} style="width:140px" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" style="flex:1">
              <label style="display:flex;align-items:center">Product URL <${Tooltip} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
              <input required type="url" placeholder="https://yourproduct.com" value=${form.product_url || ""}
                onInput=${(e3) => setForm((f3) => __spreadProps(__spreadValues({}, f3), { product_url: e3.target.value }))} />
            </div>
          </div>
          <button class="btn btn-primary" type="submit" disabled=${saving}>Save settings</button>
        </form>
      </div>

      <${APIKeysSection} />

      <div class="settings-section settings-danger">
        <div class="settings-title">Danger Zone</div>
        <p style="font-size:14px;margin-bottom:16px">Pausing stops new signups while preserving existing data.</p>
        <div style="display:flex;gap:12px">
          <button class="btn btn-danger"
            disabled=${form.status === "paused"}
            onClick=${async () => {
    if (!confirm("Pause this campaign?")) return;
    try {
      await api.updateSettings({ status: "paused" });
      settingsAsync.reload();
      setForm((f3) => __spreadProps(__spreadValues({}, f3), { status: "paused" }));
    } catch (err) {
      setMsg({ type: "error", text: err.message });
    }
  }}>
            Pause Campaign
          </button>
          <button class="btn btn-secondary"
            disabled=${form.status === "active"}
            onClick=${async () => {
    try {
      await api.updateSettings({ status: "active" });
      settingsAsync.reload();
      setForm((f3) => __spreadProps(__spreadValues({}, f3), { status: "active" }));
    } catch (err) {
      setMsg({ type: "error", text: err.message });
    }
  }}>
            Resume Campaign
          </button>
        </div>
      </div>
    `}
  `;
}
var PREVIEW_TABS = [
  { id: "none", label: "Not signed in" },
  { id: "signed_in", label: "Signed in" },
  { id: "invited", label: "Invited" }
];
var ACCENT_PRESETS = [
  { color: "#6366f1", label: "Indigo" },
  { color: "#3b82f6", label: "Blue" },
  { color: "#10b981", label: "Emerald" },
  { color: "#f59e0b", label: "Amber" },
  { color: "#ef4444", label: "Red" },
  { color: "#8b5cf6", label: "Violet" },
  { color: "#ec4899", label: "Pink" },
  { color: "#000000", label: "Black" }
];
function buildPreviewMockScript(campaignSlug, signupView) {
  const baseSignup = { id: "preview", campaign_id: "preview-cid", email: "you@example.com", referral_code: "PRVW0001", base_position: 1, effective_position: 1, referral_count: 0, status: "verified" };
  const signupData = signupView === "invited" ? __spreadProps(__spreadValues({}, baseSignup), { status: "invited" }) : baseSignup;
  const hasSignup = signupView !== "none";
  const mockData = __spreadValues({
    campaign_id: "preview-cid",
    campaign_name: "My Product",
    slug: campaignSlug,
    total_signups: 0
  }, hasSignup ? { signup: signupData } : {});
  const lsKey = JSON.stringify(`ep_${campaignSlug}`);
  const lsVal = JSON.stringify(JSON.stringify(signupData));
  const lsMock = hasSignup ? `var _ls={};_ls[${lsKey}]=${lsVal};try{Object.defineProperty(window,'localStorage',{get:function(){return{getItem:function(k){return Object.prototype.hasOwnProperty.call(_ls,k)?_ls[k]:null;},setItem:function(k,v){_ls[k]=String(v);},removeItem:function(k){delete _ls[k];},clear:function(){_ls={};},key:function(i){return Object.keys(_ls)[i]||null;},get length(){return Object.keys(_ls).length;}};},configurable:true});}catch(e){}` : "";
  return `<script>(function(){${lsMock};var _d=${JSON.stringify(mockData)};var _s=${JSON.stringify(signupData)};var _f=window.fetch.bind(window);window.fetch=function(u,o){var us=String(u);if(us.indexOf('/api/v1/w/')!==-1)return Promise.resolve(new Response(JSON.stringify(_d),{status:200,headers:{'Content-Type':'application/json'}}));if(us.indexOf('/api/v1/campaigns/')!==-1&&o&&o.method==='POST')return Promise.resolve(new Response(JSON.stringify(_s),{status:200,headers:{'Content-Type':'application/json'}}));return _f(u,o);};})();<\/script>`;
}
function buildPreviewSrcdoc(theme, accent, campaignSlug, signupView, origin, pageUrl) {
  const bg = theme === "dark" ? "#111827" : "#f3f4f6";
  const mockScript = buildPreviewMockScript(campaignSlug, signupView);
  return [
    '<!DOCTYPE html><html><head><meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width,initial-scale=1">',
    `<base href="${pageUrl}/">`,
    "<style>*{box-sizing:border-box;margin:0;padding:0}",
    `body{padding:24px 16px;background:${bg};min-height:100%;display:flex;justify-content:center;}`,
    // Fixed width prevents the widget from changing size between idle and success states
    `early-pass{width:min(28rem,100%)}</style>`,
    "</head><body>",
    mockScript,
    `<early-pass data-campaign="${campaignSlug}" data-theme="${theme}" data-accent="${accent}"></early-pass>`,
    `<script src="${origin}/widget/widget.js"><\/script>`,
    "</body></html>"
  ].join("");
}
function SetupPage() {
  const settingsAsync = useAsync(() => api.getSettings(), []);
  const [theme, setTheme] = d2("light");
  const [accent, setAccent] = d2("#6366f1");
  const [previewTheme, setPreviewTheme] = d2("light");
  const [previewAccent, setPreviewAccent] = d2("#6366f1");
  const [activePreview, setActivePreview] = d2("none");
  const [codeCopied, setCodeCopied] = d2(false);
  if (settingsAsync.loading) return m3`<div class="loading">Loading…</div>`;
  if (settingsAsync.error) return m3`<div class="alert alert-error">${settingsAsync.error}</div>`;
  const baseUrl = settingsAsync.data.base_url || window.location.origin;
  const origin = window.location.origin;
  const pageUrl = settingsAsync.data.product_url || "https://your-product.com";
  const attrs = [`data-campaign="${slug}"`];
  if (theme !== "light") attrs.push(`data-theme="${theme}"`);
  if (accent.toLowerCase() !== "#6366f1") attrs.push(`data-accent="${accent}"`);
  const attrStr = attrs.length > 1 ? "\n        " + attrs.join("\n        ") : " " + attrs[0];
  const snippet = `<script src="${baseUrl}/widget/widget.js"${attrStr} async><\/script>`;
  const iframeKey = `${previewTheme}:${previewAccent}`;
  const srcdocByTab = {
    none: buildPreviewSrcdoc(previewTheme, previewAccent, slug, "none", origin, pageUrl),
    signed_in: buildPreviewSrcdoc(previewTheme, previewAccent, slug, "signed_in", origin, pageUrl),
    invited: buildPreviewSrcdoc(previewTheme, previewAccent, slug, "invited", origin, pageUrl)
  };
  const activeIframeKey = `${activePreview}:${iframeKey}`;
  function handleThemeChange(t4) {
    setTheme(t4);
    setPreviewTheme(t4);
  }
  function handleAccentInput(v3) {
    setAccent(v3);
  }
  function handleAccentCommit(v3) {
    setAccent(v3);
    if (/^#[0-9a-fA-F]{6}$/.test(v3)) setPreviewAccent(v3);
  }
  function selectPreset(c3) {
    setAccent(c3);
    setPreviewAccent(c3);
  }
  function copyCode() {
    navigator.clipboard.writeText(snippet).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2e3);
    });
  }
  return m3`
    <h1 class="page-title">Setup</h1>

    <div class="setup-grid">

      <div class="setup-left-col">

        <div class="settings-section">
          <div class="settings-title">Customize widget</div>

          <div class="form-group" style="margin-bottom:20px">
            <label>Theme</label>
            <div class="setup-theme-cards">
              ${["light", "dark"].map((t4) => m3`
                <button
                  key=${t4}
                  class=${"setup-theme-card" + (theme === t4 ? " active" : "")}
                  onClick=${() => handleThemeChange(t4)}
                >
                  <div class=${"setup-theme-thumb setup-theme-thumb-" + t4}></div>
                  <div class="setup-theme-label">
                    ${t4 === "light" ? "\u2600\uFE0F Light" : "\u{1F319} Dark"}
                  </div>
                </button>
              `)}
            </div>
          </div>

          <div class="form-group">
            <label>Accent color</label>
            <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
              <input
                type="color"
                value=${accent}
                onInput=${(e3) => handleAccentInput(e3.target.value)}
                onChange=${(e3) => handleAccentCommit(e3.target.value)}
                style="width:38px;height:34px;border:1px solid var(--border);border-radius:6px;padding:2px;cursor:pointer;background:var(--surface)"
              />
              <input
                type="text"
                value=${accent}
                onInput=${(e3) => handleAccentInput(e3.target.value)}
                onChange=${(e3) => handleAccentCommit(e3.target.value)}
                style="width:84px;font-family:monospace;font-size:13px"
                maxlength="7"
                placeholder="#6366f1"
              />
            </div>
            <div class="setup-swatches">
              ${ACCENT_PRESETS.map(({ color, label }) => m3`
                <button
                  key=${color}
                  title=${label}
                  class=${"setup-swatch" + (accent === color ? " active" : "")}
                  style=${"background:" + color}
                  onClick=${() => selectPreset(color)}
                ></button>
              `)}
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-title">Embed code</div>
          <p style="font-size:13px;color:var(--muted);margin-bottom:14px;line-height:1.5">
            Paste this snippet into your page. Updates as you customize above.
          </p>
          <div class="setup-code-block">
            <pre class="setup-code-pre">${snippet}</pre>
            <div class="setup-code-footer">
              <button class=${"setup-code-copy" + (codeCopied ? " copied" : "")} onClick=${copyCode}>
                ${codeCopied ? "\u2713 Copied!" : "\u{1F4CB} Copy code"}
              </button>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-title">Getting started</div>
          <div class="setup-steps">
            ${[
    "Customize the widget theme and color above",
    "Copy the embed code",
    m3`Paste it before <code>${"</body>"}</code> in your page HTML`,
    "Publish your page",
    "Share your link and watch signups roll in"
  ].map((step, i3) => m3`
              <div key=${i3} class="setup-step">
                <div class="setup-step-num">${i3 + 1}</div>
                <div class="setup-step-text">${step}</div>
              </div>
            `)}
          </div>
        </div>

      </div>

      <div class="setup-preview-col">
        <div class="settings-section">

          <div style="padding:14px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
            <div class="settings-title" style="margin:0">Preview</div>
            <span style="font-size:12px;color:var(--muted);font-family:ui-monospace,monospace">${previewTheme} · ${previewAccent}</span>
          </div>

          <div class="preview-chrome">
            <div class="preview-chrome-dots">
              <span class="preview-chrome-dot"></span>
              <span class="preview-chrome-dot"></span>
              <span class="preview-chrome-dot"></span>
            </div>
            <div class="preview-chrome-url">${pageUrl}</div>
          </div>

          <div class="preview-tabs">
            ${PREVIEW_TABS.map((tab) => m3`
              <button
                key=${tab.id}
                class=${"preview-tab" + (activePreview === tab.id ? " active" : "")}
                onClick=${() => setActivePreview(tab.id)}
              >${tab.label}</button>
            `)}
          </div>

          <iframe
            key=${activeIframeKey}
            srcdoc=${srcdocByTab[activePreview]}
            style="width:100%;border:none;display:block"
            height="300"
            title=${"Widget preview \u2014 " + activePreview}
          ></iframe>

        </div>
      </div>

    </div>
  `;
}
function AccountHome() {
  const { data: campaigns, loading, error } = useAsync(() => accountApi.listCampaigns(), []);
  const [name, setName] = d2("");
  const [productURL, setProductURL] = d2("");
  const [creating, setCreating] = d2(false);
  const [showForm, setShowForm] = d2(false);
  const [msg, setMsg] = d2(null);
  async function handleCreate(e3) {
    e3.preventDefault();
    setCreating(true);
    setMsg(null);
    try {
      const res = await accountApi.createCampaign(name.trim(), productURL.trim());
      window.location.href = `/dashboard/${res.slug}/`;
    } catch (err) {
      setMsg({ type: "error", text: err.message });
      setCreating(false);
    }
  }
  const statusBadgeClass = (status) => ({ active: "badge-success", paused: "badge-warning" })[status] || "badge-muted";
  const hasCampaigns = !loading && !error && campaigns && campaigns.length > 0;
  const isFirstCampaign = !loading && !error && campaigns && campaigns.length === 0;
  return m3`<${k}>
    <div class="header">
      <a href="/dashboard/" style="display:flex;align-items:center;gap:8px;text-decoration:none"><img src="/assets/logo.svg" alt="EarlyPass" class="header-logo" /><span style="font-weight:700;font-size:16px;color:var(--primary)">EarlyPass</span></a>
      <form method="POST" action="/dashboard/logout" style="margin-left:auto">
        <button class="btn btn-secondary btn-sm" type="submit">Sign out</button>
      </form>
    </div>
    <div class="main-content">
      ${hasCampaigns && m3`
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
          <h1 class="page-title" style="margin:0">My Campaigns</h1>
          <button class="btn btn-primary" onClick=${() => {
    setShowForm(true);
    setMsg(null);
  }}>+ New campaign</button>
        </div>
      `}

      ${msg && m3`<div class=${`alert alert-${msg.type}`}>${msg.text}</div>`}

      ${loading ? m3`<div class="loading">Loading campaigns…</div>` : error ? m3`<div class="alert alert-error">${error}</div>` : isFirstCampaign && !showForm ? m3`
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px;max-width:520px;margin:0 auto">
            <h2 style="font-size:22px;font-weight:700;margin:0 0 12px">Create your first campaign</h2>
            <p style="color:var(--muted);font-size:15px;line-height:1.6;margin:0 0 32px;max-width:380px">
              Set up a waitlist in minutes. Add the widget to your site and start collecting signups with built-in referral tracking.
            </p>
            <button class="btn btn-primary" style="font-size:15px;padding:10px 24px"
              onClick=${() => setShowForm(true)}>
              Create your first campaign
            </button>
          </div>
        ` : isFirstCampaign && showForm ? m3`
          <div style="max-width:480px;margin:40px auto 0">
            <h2 style="font-size:20px;font-weight:700;margin:0 0 24px">Create your first campaign</h2>
            ${msg && m3`<div class=${`alert alert-${msg.type}`} style="margin-bottom:16px">${msg.text}</div>`}
            <form onSubmit=${handleCreate}>
              <div class="form-group" style="margin-bottom:16px">
                <label>Campaign name</label>
                <input required autoFocus value=${name}
                  onInput=${(e3) => setName(e3.target.value)}
                  placeholder="My Product Waitlist" maxlength="200" />
              </div>
              <div class="form-group" style="margin-bottom:16px">
                <label style="display:flex;align-items:center">Product URL <${Tooltip} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
                <input required type="url" value=${productURL}
                  onInput=${(e3) => setProductURL(e3.target.value)}
                  placeholder="https://yoursite.com/product" />
              </div>
              <div style="display:flex;gap:8px">
                <button class="btn btn-primary" type="submit" disabled=${creating}>
                  ${creating ? "Creating\u2026" : "Create campaign"}
                </button>
                <button class="btn btn-secondary" type="button"
                  onClick=${() => {
    setShowForm(false);
    setName("");
    setProductURL("");
    setMsg(null);
  }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ` : m3`
          <div>
            ${showForm && m3`
              <div class="settings-section" style="margin-bottom:24px;max-width:480px">
                <div class="settings-title">Create campaign</div>
                ${msg && m3`<div class=${`alert alert-${msg.type}`} style="margin-bottom:16px">${msg.text}</div>`}
                <form onSubmit=${handleCreate}>
                  <div class="form-group" style="margin-bottom:16px">
                    <label>Campaign name</label>
                    <input required autoFocus value=${name}
                      onInput=${(e3) => setName(e3.target.value)}
                      placeholder="My Product Waitlist" maxlength="200" />
                  </div>
                  <div class="form-group" style="margin-bottom:16px">
                    <label style="display:flex;align-items:center">Product URL <${Tooltip} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
                    <input required type="url" value=${productURL}
                      onInput=${(e3) => setProductURL(e3.target.value)}
                      placeholder="https://yoursite.com/product" />
                  </div>
                  <div style="display:flex;gap:8px">
                    <button class="btn btn-primary" type="submit" disabled=${creating}>
                      ${creating ? "Creating\u2026" : "Create campaign"}
                    </button>
                    <button class="btn btn-secondary" type="button"
                      onClick=${() => {
    setShowForm(false);
    setName("");
    setProductURL("");
    setMsg(null);
  }}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            `}
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px">
              ${campaigns && campaigns.map((c3) => m3`
                <a key=${c3.slug} href=${`/dashboard/${c3.slug}/`}
                  style="display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;text-decoration:none;color:inherit;transition:border-color 0.15s"
                  onMouseOver=${(e3) => e3.currentTarget.style.borderColor = "var(--primary)"}
                  onMouseOut=${(e3) => e3.currentTarget.style.borderColor = "var(--border)"}>
                  <div style="display:flex;align-items:center;justify-content:space-between">
                    <div>
                      <div style="font-weight:600;font-size:15px;margin-bottom:4px">${c3.name}</div>
                      <div style="color:var(--muted);font-size:13px">${c3.slug}</div>
                    </div>
                    <span class=${`badge ${statusBadgeClass(c3.status)}`}>${c3.status}</span>
                  </div>
                </a>
              `)}
            </div>
          </div>
        `}
    </div>
  </${k}>`;
}
var PAGES = [
  { id: "overview", label: "\u{1F4CA} Overview", Component: OverviewPage },
  { id: "setup", label: "\u{1F680} Setup", Component: SetupPage },
  { id: "signups", label: "\u{1F465} Signups", Component: SignupsPage },
  { id: "leaderboard", label: "\u{1F3C6} Leaderboard", Component: LeaderboardPage },
  { id: "invitations", label: "\u{1F4EC} Invitations", Component: InvitationsPage },
  { id: "webhooks", label: "\u{1F517} Webhooks", Component: WebhooksPage },
  { id: "settings", label: "\u2699\uFE0F Settings", Component: SettingsPage }
];
function App() {
  const getPage = () => window.location.hash.slice(1) || "overview";
  const [activePage, setActivePage] = d2(getPage);
  const [campaignName, setCampaignName] = d2("");
  const [campaigns, setCampaigns] = d2([]);
  y2(() => {
    if (window.location.hash === "#access") window.location.replace("#invitations");
    api.getSettings().then((s3) => setCampaignName(s3.name || slug)).catch(() => {
    });
    accountApi.listCampaigns().then((list) => setCampaigns(list)).catch(() => {
    });
  }, []);
  y2(() => {
    const onHashChange = () => setActivePage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  const page = PAGES.find((p3) => p3.id === activePage) || PAGES[0];
  return m3`<${k}>
    <div class="header">
      <a href="/dashboard/" style="display:flex;align-items:center;gap:8px;text-decoration:none"><img src="/assets/logo.svg" alt="EarlyPass" class="header-logo" /><span style="font-weight:700;font-size:16px;color:var(--primary)">EarlyPass</span></a>
      <div style="display:flex;align-items:center;gap:8px;margin-left:auto">
        ${campaigns.length > 1 ? m3`
          <select
            value=${slug}
            onChange=${(e3) => {
    window.location.href = `/dashboard/${e3.target.value}/`;
  }}
            style="font-size:13px;padding:4px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)">
            ${campaigns.map((c3) => m3`
              <option key=${c3.slug} value=${c3.slug}>${c3.name}</option>
            `)}
          </select>
        ` : m3`
          <span class="header-campaign">${campaignName || slug}</span>
        `}
        <a href="/dashboard/"
          style="font-size:12px;color:var(--muted);text-decoration:none;padding:4px 10px;border:1px solid var(--border);border-radius:6px;white-space:nowrap">
          ← All campaigns
        </a>
        <form method="POST" action="/dashboard/logout">
          <button class="btn btn-secondary btn-sm" type="submit">Sign out</button>
        </form>
      </div>
    </div>
    <div class="layout">
      <nav class="sidebar">
        ${PAGES.map((p3) => m3`
          <a key=${p3.id}
            class=${`nav-item${activePage === p3.id ? " active" : ""}`}
            href=${`#${p3.id}`}
            onClick=${() => setActivePage(p3.id)}>
            ${p3.label}
          </a>
        `)}
      </nav>
      <main class="main-content">
        <${page.Component} />
      </main>
    </div>
  </${k}>`;
}
J(
  isHome ? m3`<${AccountHome} />` : m3`<${App} />`,
  document.getElementById("app")
);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy9odG0vZGlzdC9odG0ubW9kdWxlLmpzIiwgIi4uLy4uLy4uL2Rhc2hib2FyZC9ub2RlX21vZHVsZXMvaHRtL3ByZWFjdC9pbmRleC5tb2R1bGUuanMiLCAiLi4vLi4vLi4vZGFzaGJvYXJkL25vZGVfbW9kdWxlcy91cGxvdC9kaXN0L3VQbG90LmVzbS5qcyIsICIuLi8uLi8uLi9kYXNoYm9hcmQvc3JjL2FwcC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqIE5vcm1hbCBoeWRyYXRpb24gdGhhdCBhdHRhY2hlcyB0byBhIERPTSB0cmVlIGJ1dCBkb2VzIG5vdCBkaWZmIGl0LiAqL1xuZXhwb3J0IGNvbnN0IE1PREVfSFlEUkFURSA9IDEgPDwgNTtcbi8qKiBTaWduaWZpZXMgdGhpcyBWTm9kZSBzdXNwZW5kZWQgb24gdGhlIHByZXZpb3VzIHJlbmRlciAqL1xuZXhwb3J0IGNvbnN0IE1PREVfU1VTUEVOREVEID0gMSA8PCA3O1xuLyoqIEluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSBuZWVkcyB0byBiZSBpbnNlcnRlZCB3aGlsZSBwYXRjaGluZyBjaGlsZHJlbiAqL1xuZXhwb3J0IGNvbnN0IElOU0VSVF9WTk9ERSA9IDEgPDwgMjtcbi8qKiBJbmRpY2F0ZXMgYSBWTm9kZSBoYXMgYmVlbiBtYXRjaGVkIHdpdGggYW5vdGhlciBWTm9kZSBpbiB0aGUgZGlmZiAqL1xuZXhwb3J0IGNvbnN0IE1BVENIRUQgPSAxIDw8IDE7XG5cbi8qKiBSZXNldCBhbGwgbW9kZSBmbGFncyAqL1xuZXhwb3J0IGNvbnN0IFJFU0VUX01PREUgPSB+KE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEKTtcblxuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuZXhwb3J0IGNvbnN0IFhIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmV4cG9ydCBjb25zdCBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcblxuZXhwb3J0IGNvbnN0IE5VTEwgPSBudWxsO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSAvKiogQHR5cGUge2FueX0gKi8gKHt9KTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPVxuXHQvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwgImltcG9ydCB7IEVNUFRZX0FSUiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIEFzc2lnbiBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCB0byBgb2JqYFxuICogQHRlbXBsYXRlIE8sIFAgVGhlIG9iaiBhbmQgcHJvcHMgdHlwZXNcbiAqIEBwYXJhbSB7T30gb2JqIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvXG4gKiBAcGFyYW0ge1B9IHByb3BzIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm5zIHtPICYgUH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3BzKSB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgY2hhbmdlIHRoZSB0eXBlIG9mIGBvYmpgIHRvIGJlIGBPICYgUGBcblx0Zm9yIChsZXQgaSBpbiBwcm9wcykgb2JqW2ldID0gcHJvcHNbaV07XG5cdHJldHVybiAvKiogQHR5cGUge08gJiBQfSAqLyAob2JqKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjaGlsZCBub2RlIGZyb20gaXRzIHBhcmVudCBpZiBhdHRhY2hlZC4gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yXG4gKiBJRTExIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlKClgLiBVc2luZyB0aGlzIGZ1bmN0aW9uXG4gKiBpcyBzbWFsbGVyIHRoYW4gaW5jbHVkaW5nIGEgZGVkaWNhdGVkIHBvbHlmaWxsLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5Db250YWluZXJOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5leHBvcnQgY29uc3Qgc2xpY2UgPSBFTVBUWV9BUlIuc2xpY2U7XG4iLCAiaW1wb3J0IHsgX2NhdGNoRXJyb3IgfSBmcm9tICcuL2RpZmYvY2F0Y2gtZXJyb3InO1xuXG4vKipcbiAqIFRoZSBgb3B0aW9uYCBvYmplY3QgY2FuIHBvdGVudGlhbGx5IGNvbnRhaW4gY2FsbGJhY2sgZnVuY3Rpb25zXG4gKiB0aGF0IGFyZSBjYWxsZWQgZHVyaW5nIHZhcmlvdXMgc3RhZ2VzIG9mIG91ciByZW5kZXJlci4gVGhpcyBpcyB0aGVcbiAqIGZvdW5kYXRpb24gb24gd2hpY2ggYWxsIG91ciBhZGRvbnMgbGlrZSBgcHJlYWN0L2RlYnVnYCwgYHByZWFjdC9jb21wYXRgLFxuICogYW5kIGBwcmVhY3QvaG9va3NgIGFyZSBiYXNlZCBvbi4gU2VlIHRoZSBgT3B0aW9uc2AgdHlwZSBpbiBgaW50ZXJuYWwuZC50c2BcbiAqIGZvciBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgb3B0aW9uIGhvb2tzIChtb3N0IGVkaXRvcnMvSURFcyBhbGxvdyB5b3UgdG9cbiAqIGN0cmwrY2xpY2sgb3IgY21kK2NsaWNrIG9uIG1hYyB0aGUgdHlwZSBkZWZpbml0aW9uIGJlbG93KS5cbiAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfVxuICovXG5jb25zdCBvcHRpb25zID0ge1xuXHRfY2F0Y2hFcnJvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3B0aW9ucztcbiIsICJpbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgTlVMTCwgVU5ERUZJTkVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5sZXQgdm5vZGVJZCA9IDA7XG5cbi8qKlxuICogQ3JlYXRlIGFuIHZpcnR1YWwgbm9kZSAodXNlZCBmb3IgSlNYKVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInR5cGVcIl19IHR5cGUgVGhlIG5vZGUgbmFtZSBvciBDb21wb25lbnQgY29uc3RydWN0b3IgZm9yIHRoaXNcbiAqIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkfSBbcHJvcHNdIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuJykuQ29tcG9uZW50Q2hpbGRyZW4+fSBbY2hpbGRyZW5dIFRoZSBjaGlsZHJlbiBvZiB0aGVcbiAqIHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHt9LFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wc1xuXHQvLyBOb3RlOiB0eXBlIG1heSBiZSB1bmRlZmluZWQgaW4gZGV2ZWxvcG1lbnQsIG11c3QgbmV2ZXIgZXJyb3IgaGVyZS5cblx0aWYgKHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicgJiYgdHlwZS5kZWZhdWx0UHJvcHMgIT0gTlVMTCkge1xuXHRcdGZvciAoaSBpbiB0eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHR5cGUuZGVmYXVsdFByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBub3JtYWxpemVkUHJvcHMsIGtleSwgcmVmLCBOVUxMKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBWTm9kZSAodXNlZCBpbnRlcm5hbGx5IGJ5IFByZWFjdClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhpcyB2aXJ0dWFsIG5vZGUuXG4gKiBJZiB0aGlzIHZpcnR1YWwgbm9kZSByZXByZXNlbnRzIGEgdGV4dCBub2RlLCB0aGlzIGlzIHRoZSB0ZXh0IG9mIHRoZSBub2RlIChzdHJpbmcgb3IgbnVtYmVyKS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0ga2V5IFRoZSBrZXkgZm9yIHRoaXMgdmlydHVhbCBub2RlLCB1c2VkIHdoZW5cbiAqIGRpZmZpbmcgaXQgYWdhaW5zdCBpdHMgY2hpbGRyZW5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJyZWZcIl19IHJlZiBUaGUgcmVmIHByb3BlcnR5IHRoYXQgd2lsbFxuICogcmVjZWl2ZSBhIHJlZmVyZW5jZSB0byBpdHMgY3JlYXRlZCBjaGlsZFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgcmVmLCBvcmlnaW5hbCkge1xuXHQvLyBWOCBzZWVtcyB0byBiZSBiZXR0ZXIgYXQgZGV0ZWN0aW5nIHR5cGUgc2hhcGVzIGlmIHRoZSBvYmplY3QgaXMgYWxsb2NhdGVkIGZyb20gdGhlIHNhbWUgY2FsbCBzaXRlXG5cdC8vIERvIG5vdCBpbmxpbmUgaW50byBjcmVhdGVFbGVtZW50IGFuZCBjb2VyY2VUb1ZOb2RlIVxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSAqL1xuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBOVUxMLFxuXHRcdF9wYXJlbnQ6IE5VTEwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IE5VTEwsXG5cdFx0X2NvbXBvbmVudDogTlVMTCxcblx0XHRjb25zdHJ1Y3RvcjogVU5ERUZJTkVELFxuXHRcdF9vcmlnaW5hbDogb3JpZ2luYWwgPT0gTlVMTCA/ICsrdm5vZGVJZCA6IG9yaWdpbmFsLFxuXHRcdF9pbmRleDogLTEsXG5cdFx0X2ZsYWdzOiAwXG5cdH07XG5cblx0Ly8gT25seSBpbnZva2UgdGhlIHZub2RlIGhvb2sgaWYgdGhpcyB3YXMgKm5vdCogYSBkaXJlY3QgY29weTpcblx0aWYgKG9yaWdpbmFsID09IE5VTEwgJiYgb3B0aW9ucy52bm9kZSAhPSBOVUxMKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblxuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG5cdHJldHVybiB7IGN1cnJlbnQ6IE5VTEwgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZyYWdtZW50KHByb3BzKSB7XG5cdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRoZSBhcmd1bWVudCBpcyBhIHZhbGlkIFByZWFjdCBWTm9kZS5cbiAqIEBwYXJhbSB7Kn0gdm5vZGVcbiAqIEByZXR1cm5zIHt2bm9kZSBpcyBWTm9kZX1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRFbGVtZW50ID0gdm5vZGUgPT5cblx0dm5vZGUgIT0gTlVMTCAmJiB2bm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEO1xuIiwgImltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBkaWZmLCBjb21taXRSb290IH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgTU9ERV9IWURSQVRFLCBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEJhc2UgQ29tcG9uZW50IGNsYXNzLiBQcm92aWRlcyBgc2V0U3RhdGUoKWAgYW5kIGBmb3JjZVVwZGF0ZSgpYCwgd2hpY2hcbiAqIHRyaWdnZXIgcmVuZGVyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgVGhlIGluaXRpYWwgY29tcG9uZW50IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5pdGlhbCBjb250ZXh0IGZyb20gcGFyZW50IGNvbXBvbmVudHMnXG4gKiBnZXRDaGlsZENvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VDb21wb25lbnQocHJvcHMsIGNvbnRleHQpIHtcblx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBjb21wb25lbnQgc3RhdGUgYW5kIHNjaGVkdWxlIGEgcmUtcmVuZGVyLlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH1cbiAqIEBwYXJhbSB7b2JqZWN0IHwgKChzOiBvYmplY3QsIHA6IG9iamVjdCkgPT4gb2JqZWN0KX0gdXBkYXRlIEEgaGFzaCBvZiBzdGF0ZVxuICogcHJvcGVydGllcyB0byB1cGRhdGUgd2l0aCBuZXcgdmFsdWVzIG9yIGEgZnVuY3Rpb24gdGhhdCBnaXZlbiB0aGUgY3VycmVudFxuICogc3RhdGUgYW5kIHByb3BzIHJldHVybnMgYSBuZXcgcGFydGlhbCBzdGF0ZVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgY29tcG9uZW50IHN0YXRlIGlzXG4gKiB1cGRhdGVkXG4gKi9cbkJhc2VDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHVwZGF0ZSwgY2FsbGJhY2spIHtcblx0Ly8gb25seSBjbG9uZSBzdGF0ZSB3aGVuIGNvcHlpbmcgdG8gbmV4dFN0YXRlIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgcztcblx0aWYgKHRoaXMuX25leHRTdGF0ZSAhPSBOVUxMICYmIHRoaXMuX25leHRTdGF0ZSAhPSB0aGlzLnN0YXRlKSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZTtcblx0fSBlbHNlIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlID0gYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdXBkYXRlID09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBTb21lIGxpYnJhcmllcyBsaWtlIGBpbW1lcmAgbWFyayB0aGUgY3VycmVudCBzdGF0ZSBhcyByZWFkb25seSxcblx0XHQvLyBwcmV2ZW50aW5nIHVzIGZyb20gbXV0YXRpbmcgaXQsIHNvIHdlIG5lZWQgdG8gY2xvbmUgaXQuIFNlZSAjMjcxNlxuXHRcdHVwZGF0ZSA9IHVwZGF0ZShhc3NpZ24oe30sIHMpLCB0aGlzLnByb3BzKTtcblx0fVxuXG5cdGlmICh1cGRhdGUpIHtcblx0XHRhc3NpZ24ocywgdXBkYXRlKTtcblx0fVxuXG5cdC8vIFNraXAgdXBkYXRlIGlmIHVwZGF0ZXIgZnVuY3Rpb24gcmV0dXJuZWQgbnVsbFxuXHRpZiAodXBkYXRlID09IE5VTEwpIHJldHVybjtcblxuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdHRoaXMuX3N0YXRlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdH1cblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEltbWVkaWF0ZWx5IHBlcmZvcm0gYSBzeW5jaHJvbm91cyByZS1yZW5kZXIgb2YgdGhlIGNvbXBvbmVudFxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH1cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhZnRlciBjb21wb25lbnQgaXNcbiAqIHJlLXJlbmRlcmVkXG4gKi9cbkJhc2VDb21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdC8vIFNldCByZW5kZXIgbW9kZSBzbyB0aGF0IHdlIGNhbiBkaWZmZXJlbnRpYXRlIHdoZXJlIHRoZSByZW5kZXIgcmVxdWVzdFxuXHRcdC8vIGlzIGNvbWluZyBmcm9tLiBXZSBuZWVkIHRoaXMgYmVjYXVzZSBmb3JjZVVwZGF0ZSBzaG91bGQgbmV2ZXIgY2FsbFxuXHRcdC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZVxuXHRcdHRoaXMuX2ZvcmNlID0gdHJ1ZTtcblx0XHRpZiAoY2FsbGJhY2spIHRoaXMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgYHByb3BzYCBhbmQgYHN0YXRlYCwgYW5kIHJldHVybnMgYSBuZXcgVmlydHVhbCBET00gdHJlZSB0byBidWlsZC5cbiAqIFZpcnR1YWwgRE9NIGlzIGdlbmVyYWxseSBjb25zdHJ1Y3RlZCB2aWEgW0pTWF0oaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vd3RmLWlzLWpzeCkuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgUHJvcHMgKGVnOiBKU1ggYXR0cmlidXRlcykgcmVjZWl2ZWQgZnJvbSBwYXJlbnRcbiAqIGVsZW1lbnQvY29tcG9uZW50XG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgVGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IENvbnRleHQgb2JqZWN0LCBhcyByZXR1cm5lZCBieSB0aGUgbmVhcmVzdFxuICogYW5jZXN0b3IncyBgZ2V0Q2hpbGRDb250ZXh0KClgXG4gKiBAcmV0dXJucyB7Q29tcG9uZW50Q2hpbGRyZW4gfCB2b2lkfVxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBGcmFnbWVudDtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBbY2hpbGRJbmRleF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERvbVNpYmxpbmcodm5vZGUsIGNoaWxkSW5kZXgpIHtcblx0aWYgKGNoaWxkSW5kZXggPT0gTlVMTCkge1xuXHRcdC8vIFVzZSBjaGlsZEluZGV4PT1udWxsIGFzIGEgc2lnbmFsIHRvIHJlc3VtZSB0aGUgc2VhcmNoIGZyb20gdGhlIHZub2RlJ3Mgc2libGluZ1xuXHRcdHJldHVybiB2bm9kZS5fcGFyZW50XG5cdFx0XHQ/IGdldERvbVNpYmxpbmcodm5vZGUuX3BhcmVudCwgdm5vZGUuX2luZGV4ICsgMSlcblx0XHRcdDogTlVMTDtcblx0fVxuXG5cdGxldCBzaWJsaW5nO1xuXHRmb3IgKDsgY2hpbGRJbmRleCA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuXHRcdHNpYmxpbmcgPSB2bm9kZS5fY2hpbGRyZW5bY2hpbGRJbmRleF07XG5cblx0XHRpZiAoc2libGluZyAhPSBOVUxMICYmIHNpYmxpbmcuX2RvbSAhPSBOVUxMKSB7XG5cdFx0XHQvLyBTaW5jZSB1cGRhdGVQYXJlbnREb21Qb2ludGVycyBrZWVwcyBfZG9tIHBvaW50ZXIgY29ycmVjdCxcblx0XHRcdC8vIHdlIGNhbiByZWx5IG9uIF9kb20gdG8gdGVsbCB1cyBpZiB0aGlzIHN1YnRyZWUgY29udGFpbnMgYVxuXHRcdFx0Ly8gcmVuZGVyZWQgRE9NIG5vZGUsIGFuZCB3aGF0IHRoZSBmaXJzdCByZW5kZXJlZCBET00gbm9kZSBpc1xuXHRcdFx0cmV0dXJuIHNpYmxpbmcuX2RvbTtcblx0XHR9XG5cdH1cblxuXHQvLyBJZiB3ZSBnZXQgaGVyZSwgd2UgaGF2ZSBub3QgZm91bmQgYSBET00gbm9kZSBpbiB0aGlzIHZub2RlJ3MgY2hpbGRyZW4uXG5cdC8vIFdlIG11c3QgcmVzdW1lIGZyb20gdGhpcyB2bm9kZSdzIHNpYmxpbmcgKGluIGl0J3MgcGFyZW50IF9jaGlsZHJlbiBhcnJheSlcblx0Ly8gT25seSBjbGltYiB1cCBhbmQgc2VhcmNoIHRoZSBwYXJlbnQgaWYgd2UgYXJlbid0IHNlYXJjaGluZyB0aHJvdWdoIGEgRE9NXG5cdC8vIFZOb2RlIChtZWFuaW5nIHdlIHJlYWNoZWQgdGhlIERPTSBwYXJlbnQgb2YgdGhlIG9yaWdpbmFsIHZub2RlIHRoYXQgYmVnYW5cblx0Ly8gdGhlIHNlYXJjaClcblx0cmV0dXJuIHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicgPyBnZXREb21TaWJsaW5nKHZub2RlKSA6IE5VTEw7XG59XG5cbi8qKlxuICogVHJpZ2dlciBpbi1wbGFjZSByZS1yZW5kZXJpbmcgb2YgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRpZiAoY29tcG9uZW50Ll9wYXJlbnREb20gJiYgY29tcG9uZW50Ll9kaXJ0eSkge1xuXHRcdGxldCBvbGRWTm9kZSA9IGNvbXBvbmVudC5fdm5vZGUsXG5cdFx0XHRvbGREb20gPSBvbGRWTm9kZS5fZG9tLFxuXHRcdFx0Y29tbWl0UXVldWUgPSBbXSxcblx0XHRcdHJlZlF1ZXVlID0gW10sXG5cdFx0XHRuZXdWTm9kZSA9IGFzc2lnbih7fSwgb2xkVk5vZGUpO1xuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IG9sZFZOb2RlLl9vcmlnaW5hbCArIDE7XG5cdFx0aWYgKG9wdGlvbnMudm5vZGUpIG9wdGlvbnMudm5vZGUobmV3Vk5vZGUpO1xuXG5cdFx0ZGlmZihcblx0XHRcdGNvbXBvbmVudC5fcGFyZW50RG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGNvbXBvbmVudC5fZ2xvYmFsQ29udGV4dCxcblx0XHRcdGNvbXBvbmVudC5fcGFyZW50RG9tLm5hbWVzcGFjZVVSSSxcblx0XHRcdG9sZFZOb2RlLl9mbGFncyAmIE1PREVfSFlEUkFURSA/IFtvbGREb21dIDogTlVMTCxcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0b2xkRG9tID09IE5VTEwgPyBnZXREb21TaWJsaW5nKG9sZFZOb2RlKSA6IG9sZERvbSxcblx0XHRcdCEhKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfSFlEUkFURSksXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWw7XG5cdFx0bmV3Vk5vZGUuX3BhcmVudC5fY2hpbGRyZW5bbmV3Vk5vZGUuX2luZGV4XSA9IG5ld1ZOb2RlO1xuXHRcdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIG5ld1ZOb2RlLCByZWZRdWV1ZSk7XG5cdFx0b2xkVk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9wYXJlbnQgPSBudWxsO1xuXG5cdFx0aWYgKG5ld1ZOb2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0XHR1cGRhdGVQYXJlbnREb21Qb2ludGVycyhuZXdWTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpIHtcblx0aWYgKCh2bm9kZSA9IHZub2RlLl9wYXJlbnQpICE9IE5VTEwgJiYgdm5vZGUuX2NvbXBvbmVudCAhPSBOVUxMKSB7XG5cdFx0dm5vZGUuX2RvbSA9IHZub2RlLl9jb21wb25lbnQuYmFzZSA9IE5VTEw7XG5cdFx0dm5vZGUuX2NoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0aWYgKGNoaWxkICE9IE5VTEwgJiYgY2hpbGQuX2RvbSAhPSBOVUxMKSB7XG5cdFx0XHRcdHJldHVybiAodm5vZGUuX2RvbSA9IHZub2RlLl9jb21wb25lbnQuYmFzZSA9IGNoaWxkLl9kb20pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSByZW5kZXIgcXVldWVcbiAqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fVxuICovXG5sZXQgcmVyZW5kZXJRdWV1ZSA9IFtdO1xuXG4vKlxuICogVGhlIHZhbHVlIG9mIGBDb21wb25lbnQuZGVib3VuY2VgIG11c3QgYXN5bmNocm9ub3VzbHkgaW52b2tlIHRoZSBwYXNzZWQgaW4gY2FsbGJhY2suIEl0IGlzXG4gKiBpbXBvcnRhbnQgdGhhdCBjb250cmlidXRvcnMgdG8gUHJlYWN0IGNhbiBjb25zaXN0ZW50bHkgcmVhc29uIGFib3V0IHdoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCwgZXRjLlxuICogZG8sIGFuZCB3aGVuIHRoZWlyIGVmZmVjdHMgd2lsbCBiZSBhcHBsaWVkLiBTZWUgdGhlIGxpbmtzIGJlbG93IGZvciBzb21lIGZ1cnRoZXIgcmVhZGluZyBvbiBkZXNpZ25pbmdcbiAqIGFzeW5jaHJvbm91cyBBUElzLlxuICogKiBbRGVzaWduaW5nIEFQSXMgZm9yIEFzeW5jaHJvbnldKGh0dHBzOi8vYmxvZy5penMubWUvMjAxMy8wOC9kZXNpZ25pbmctYXBpcy1mb3ItYXN5bmNocm9ueSlcbiAqICogW0NhbGxiYWNrcyBzeW5jaHJvbm91cyBhbmQgYXN5bmNocm9ub3VzXShodHRwczovL2Jsb2cub21ldGVyLmNvbS8yMDExLzA3LzI0L2NhbGxiYWNrcy1zeW5jaHJvbm91cy1hbmQtYXN5bmNocm9ub3VzLylcbiAqL1xuXG5sZXQgcHJldkRlYm91bmNlO1xuXG5jb25zdCBkZWZlciA9XG5cdHR5cGVvZiBQcm9taXNlID09ICdmdW5jdGlvbidcblx0XHQ/IFByb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSlcblx0XHQ6IHNldFRpbWVvdXQ7XG5cbi8qKlxuICogRW5xdWV1ZSBhIHJlcmVuZGVyIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYyBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnF1ZXVlUmVuZGVyKGMpIHtcblx0aWYgKFxuXHRcdCghYy5fZGlydHkgJiZcblx0XHRcdChjLl9kaXJ0eSA9IHRydWUpICYmXG5cdFx0XHRyZXJlbmRlclF1ZXVlLnB1c2goYykgJiZcblx0XHRcdCFwcm9jZXNzLl9yZXJlbmRlckNvdW50KyspIHx8XG5cdFx0cHJldkRlYm91bmNlICE9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmdcblx0KSB7XG5cdFx0cHJldkRlYm91bmNlID0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZztcblx0XHQocHJldkRlYm91bmNlIHx8IGRlZmVyKShwcm9jZXNzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBhXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYlxuICovXG5jb25zdCBkZXB0aFNvcnQgPSAoYSwgYikgPT4gYS5fdm5vZGUuX2RlcHRoIC0gYi5fdm5vZGUuX2RlcHRoO1xuXG4vKiogRmx1c2ggdGhlIHJlbmRlciBxdWV1ZSBieSByZXJlbmRlcmluZyBhbGwgcXVldWVkIGNvbXBvbmVudHMgKi9cbmZ1bmN0aW9uIHByb2Nlc3MoKSB7XG5cdHRyeSB7XG5cdFx0bGV0IGMsXG5cdFx0XHRsID0gMTtcblxuXHRcdC8vIERvbid0IHVwZGF0ZSBgcmVuZGVyQ291bnRgIHlldC4gS2VlcCBpdHMgdmFsdWUgbm9uLXplcm8gdG8gcHJldmVudCB1bm5lY2Vzc2FyeVxuXHRcdC8vIHByb2Nlc3MoKSBjYWxscyBmcm9tIGdldHRpbmcgc2NoZWR1bGVkIHdoaWxlIGBxdWV1ZWAgaXMgc3RpbGwgYmVpbmcgY29uc3VtZWQuXG5cdFx0d2hpbGUgKHJlcmVuZGVyUXVldWUubGVuZ3RoKSB7XG5cdFx0XHQvLyBLZWVwIHRoZSByZXJlbmRlciBxdWV1ZSBzb3J0ZWQgYnkgKGRlcHRoLCBpbnNlcnRpb24gb3JkZXIpLiBUaGUgcXVldWVcblx0XHRcdC8vIHdpbGwgaW5pdGlhbGx5IGJlIHNvcnRlZCBvbiB0aGUgZmlyc3QgaXRlcmF0aW9uIG9ubHkgaWYgaXQgaGFzIG1vcmUgdGhhbiAxIGl0ZW0uXG5cdFx0XHQvL1xuXHRcdFx0Ly8gTmV3IGl0ZW1zIGNhbiBiZSBhZGRlZCB0byB0aGUgcXVldWUgZS5nLiB3aGVuIHJlcmVuZGVyaW5nIGEgcHJvdmlkZXIsIHNvIHdlIHdhbnQgdG9cblx0XHRcdC8vIGtlZXAgdGhlIG9yZGVyIGZyb20gdG9wIHRvIGJvdHRvbSB3aXRoIHRob3NlIG5ldyBpdGVtcyBzbyB3ZSBjYW4gaGFuZGxlIHRoZW0gaW4gYVxuXHRcdFx0Ly8gc2luZ2xlIHBhc3Ncblx0XHRcdGlmIChyZXJlbmRlclF1ZXVlLmxlbmd0aCA+IGwpIHtcblx0XHRcdFx0cmVyZW5kZXJRdWV1ZS5zb3J0KGRlcHRoU29ydCk7XG5cdFx0XHR9XG5cblx0XHRcdGMgPSByZXJlbmRlclF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRsID0gcmVyZW5kZXJRdWV1ZS5sZW5ndGg7XG5cblx0XHRcdHJlbmRlckNvbXBvbmVudChjKTtcblx0XHR9XG5cdH0gZmluYWxseSB7XG5cdFx0cmVyZW5kZXJRdWV1ZS5sZW5ndGggPSBwcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gMDtcblx0fVxufVxuXG5wcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gMDtcbiIsICJpbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwsIE5VTEwsIFNWR19OQU1FU1BBQ0UgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlLCBrZXksIHZhbHVlKSB7XG5cdGlmIChrZXlbMF0gPT0gJy0nKSB7XG5cdFx0c3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSA9PSBOVUxMID8gJycgOiB2YWx1ZSk7XG5cdH0gZWxzZSBpZiAodmFsdWUgPT0gTlVMTCkge1xuXHRcdHN0eWxlW2tleV0gPSAnJztcblx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgfHwgSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3Qoa2V5KSkge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWUgKyAncHgnO1xuXHR9XG59XG5cbmNvbnN0IENBUFRVUkVfUkVHRVggPSAvKFBvaW50ZXJDYXB0dXJlKSR8Q2FwdHVyZSQvaTtcblxuLy8gQSBsb2dpY2FsIGNsb2NrIHRvIHNvbHZlIGlzc3VlcyBsaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM5MjcuXG4vLyBXaGVuIHRoZSBET00gcGVyZm9ybXMgYW4gZXZlbnQgaXQgbGVhdmVzIG1pY3JvLXRpY2tzIGluIGJldHdlZW4gYnViYmxpbmcgdXAgd2hpY2ggbWVhbnMgdGhhdFxuLy8gYW4gZXZlbnQgY2FuIHRyaWdnZXIgb24gYSBuZXdseSByZWF0ZWQgRE9NLW5vZGUgd2hpbGUgdGhlIGV2ZW50IGJ1YmJsZXMgdXAuXG4vL1xuLy8gT3JpZ2luYWxseSBpbnNwaXJlZCBieSBWdWVcbi8vIChodHRwczovL2dpdGh1Yi5jb20vdnVlanMvY29yZS9ibG9iL2NhZWI4YTY4ODExYTFiMGY3OS9wYWNrYWdlcy9ydW50aW1lLWRvbS9zcmMvbW9kdWxlcy9ldmVudHMudHMjTDkwLUwxMDEpLFxuLy8gYnV0IG1vZGlmaWVkIHRvIHVzZSBhIGxvZ2ljYWwgY2xvY2sgaW5zdGVhZCBvZiBEYXRlLm5vdygpIGluIGNhc2UgZXZlbnQgaGFuZGxlcnMgZ2V0IGF0dGFjaGVkXG4vLyBhbmQgZXZlbnRzIGdldCBkaXNwYXRjaGVkIGR1cmluZyB0aGUgc2FtZSBtaWxsaXNlY29uZC5cbi8vXG4vLyBUaGUgY2xvY2sgaXMgaW5jcmVtZW50ZWQgYWZ0ZXIgZWFjaCBuZXcgZXZlbnQgZGlzcGF0Y2guIFRoaXMgYWxsb3dzIDEgMDAwIDAwMCBuZXcgZXZlbnRzXG4vLyBwZXIgc2Vjb25kIGZvciBvdmVyIDI4MCB5ZWFycyBiZWZvcmUgdGhlIHZhbHVlIHJlYWNoZXMgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgKDIqKjUzIC0gMSkuXG5sZXQgZXZlbnRDbG9jayA9IDA7XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgdmFsdWUgb24gYSBET00gbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gbm9kZSB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCB0aGUgcHJvcGVydHkgdG9cbiAqIEBwYXJhbSB7Kn0gb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSB0aGUgcHJvcGVydHkgaGFkXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGUgb3Igbm90XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShkb20sIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSwgbmFtZXNwYWNlKSB7XG5cdGxldCB1c2VDYXB0dXJlO1xuXG5cdG86IGlmIChuYW1lID09ICdzdHlsZScpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG5cdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZFZhbHVlID09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gb2xkVmFsdWUgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9sZFZhbHVlKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiBvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdGlmICghKHZhbHVlICYmIG5hbWUgaW4gdmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICghb2xkVmFsdWUgfHwgdmFsdWVbbmFtZV0gIT0gb2xkVmFsdWVbbmFtZV0pIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgdmFsdWVbbmFtZV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBCZW5jaG1hcmsgZm9yIGNvbXBhcmlzb246IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTc0Yzk1NGJkYjk2NWI5YTAwOTY1YWM2XG5cdGVsc2UgaWYgKG5hbWVbMF0gPT0gJ28nICYmIG5hbWVbMV0gPT0gJ24nKSB7XG5cdFx0dXNlQ2FwdHVyZSA9IG5hbWUgIT0gKG5hbWUgPSBuYW1lLnJlcGxhY2UoQ0FQVFVSRV9SRUdFWCwgJyQxJykpO1xuXHRcdGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHQvLyBJbmZlciBjb3JyZWN0IGNhc2luZyBmb3IgRE9NIGJ1aWx0LWluIGV2ZW50czpcblx0XHRpZiAobG93ZXJDYXNlTmFtZSBpbiBkb20gfHwgbmFtZSA9PSAnb25Gb2N1c091dCcgfHwgbmFtZSA9PSAnb25Gb2N1c0luJylcblx0XHRcdG5hbWUgPSBsb3dlckNhc2VOYW1lLnNsaWNlKDIpO1xuXHRcdGVsc2UgbmFtZSA9IG5hbWUuc2xpY2UoMik7XG5cblx0XHRpZiAoIWRvbS5fbGlzdGVuZXJzKSBkb20uX2xpc3RlbmVycyA9IHt9O1xuXHRcdGRvbS5fbGlzdGVuZXJzW25hbWUgKyB1c2VDYXB0dXJlXSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIW9sZFZhbHVlKSB7XG5cdFx0XHRcdHZhbHVlLl9hdHRhY2hlZCA9IGV2ZW50Q2xvY2s7XG5cdFx0XHRcdGRvbS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0XHR1c2VDYXB0dXJlXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZS5fYXR0YWNoZWQgPSBvbGRWYWx1ZS5fYXR0YWNoZWQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHR1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5LFxuXHRcdFx0XHR1c2VDYXB0dXJlXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAobmFtZXNwYWNlID09IFNWR19OQU1FU1BBQ0UpIHtcblx0XHRcdC8vIE5vcm1hbGl6ZSBpbmNvcnJlY3QgcHJvcCB1c2FnZSBmb3IgU1ZHOlxuXHRcdFx0Ly8gLSB4bGluazpocmVmIC8geGxpbmtIcmVmIC0tPiBocmVmICh4bGluazpocmVmIHdhcyByZW1vdmVkIGZyb20gU1ZHIGFuZCBpc24ndCBuZWVkZWQpXG5cdFx0XHQvLyAtIGNsYXNzTmFtZSAtLT4gY2xhc3Ncblx0XHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL3hsaW5rKEh8OmgpLywgJ2gnKS5yZXBsYWNlKC9zTmFtZSQvLCAncycpO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRuYW1lICE9ICd3aWR0aCcgJiZcblx0XHRcdG5hbWUgIT0gJ2hlaWdodCcgJiZcblx0XHRcdG5hbWUgIT0gJ2hyZWYnICYmXG5cdFx0XHRuYW1lICE9ICdsaXN0JyAmJlxuXHRcdFx0bmFtZSAhPSAnZm9ybScgJiZcblx0XHRcdC8vIERlZmF1bHQgdmFsdWUgaW4gYnJvd3NlcnMgaXMgYC0xYCBhbmQgYW4gZW1wdHkgc3RyaW5nIGlzXG5cdFx0XHQvLyBjYXN0IHRvIGAwYCBpbnN0ZWFkXG5cdFx0XHRuYW1lICE9ICd0YWJJbmRleCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Rvd25sb2FkJyAmJlxuXHRcdFx0bmFtZSAhPSAncm93U3BhbicgJiZcblx0XHRcdG5hbWUgIT0gJ2NvbFNwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdyb2xlJyAmJlxuXHRcdFx0bmFtZSAhPSAncG9wb3ZlcicgJiZcblx0XHRcdG5hbWUgaW4gZG9tXG5cdFx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkb21bbmFtZV0gPSB2YWx1ZSA9PSBOVUxMID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0Ly8gbGFiZWxsZWQgYnJlYWsgaXMgMWIgc21hbGxlciBoZXJlIHRoYW4gYSByZXR1cm4gc3RhdGVtZW50IChzb3JyeSlcblx0XHRcdFx0YnJlYWsgbztcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fVxuXG5cdFx0Ly8gYXJpYS0gYW5kIGRhdGEtIGF0dHJpYnV0ZXMgaGF2ZSBubyBib29sZWFuIHJlcHJlc2VudGF0aW9uLlxuXHRcdC8vIEEgYGZhbHNlYCB2YWx1ZSBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYXR0cmlidXRlIG5vdCBiZWluZ1xuXHRcdC8vIHByZXNlbnQsIHNvIHdlIGNhbid0IHJlbW92ZSBpdC4gRm9yIG5vbi1ib29sZWFuIGFyaWFcblx0XHQvLyBhdHRyaWJ1dGVzIHdlIGNvdWxkIHRyZWF0IGZhbHNlIGFzIGEgcmVtb3ZhbCwgYnV0IHRoZVxuXHRcdC8vIGFtb3VudCBvZiBleGNlcHRpb25zIHdvdWxkIGNvc3QgdG9vIG1hbnkgYnl0ZXMuIE9uIHRvcCBvZlxuXHRcdC8vIHRoYXQgb3RoZXIgZnJhbWV3b3JrcyBnZW5lcmFsbHkgc3RyaW5naWZ5IGBmYWxzZWAuXG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdC8vIG5ldmVyIHNlcmlhbGl6ZSBmdW5jdGlvbnMgYXMgYXR0cmlidXRlIHZhbHVlc1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgIT0gTlVMTCAmJiAodmFsdWUgIT09IGZhbHNlIHx8IG5hbWVbNF0gPT0gJy0nKSkge1xuXHRcdFx0ZG9tLnNldEF0dHJpYnV0ZShuYW1lLCBuYW1lID09ICdwb3BvdmVyJyAmJiB2YWx1ZSA9PSB0cnVlID8gJycgOiB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV2ZW50IHByb3h5IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSB1c2VDYXB0dXJlIElzIHRoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgY2FwdHVyZSBwaGFzZS5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50UHJveHkodXNlQ2FwdHVyZSkge1xuXHQvKipcblx0ICogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzXG5cdCAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEV2ZW50fSBlIFRoZSBldmVudCBvYmplY3QgZnJvbSB0aGUgYnJvd3NlclxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0cmV0dXJuIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKHRoaXMuX2xpc3RlbmVycykge1xuXHRcdFx0Y29uc3QgZXZlbnRIYW5kbGVyID0gdGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIHVzZUNhcHR1cmVdO1xuXHRcdFx0aWYgKGUuX2Rpc3BhdGNoZWQgPT0gTlVMTCkge1xuXHRcdFx0XHRlLl9kaXNwYXRjaGVkID0gZXZlbnRDbG9jaysrO1xuXG5cdFx0XHRcdC8vIFdoZW4gYGUuX2Rpc3BhdGNoZWRgIGlzIHNtYWxsZXIgdGhhbiB0aGUgdGltZSB3aGVuIHRoZSB0YXJnZXRlZCBldmVudFxuXHRcdFx0XHQvLyBoYW5kbGVyIHdhcyBhdHRhY2hlZCB3ZSBrbm93IHdlIGhhdmUgYnViYmxlZCB1cCB0byBhbiBlbGVtZW50IHRoYXQgd2FzIGFkZGVkXG5cdFx0XHRcdC8vIGR1cmluZyBwYXRjaGluZyB0aGUgRE9NLlxuXHRcdFx0fSBlbHNlIGlmIChlLl9kaXNwYXRjaGVkIDwgZXZlbnRIYW5kbGVyLl9hdHRhY2hlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZlbnRIYW5kbGVyKG9wdGlvbnMuZXZlbnQgPyBvcHRpb25zLmV2ZW50KGUpIDogZSk7XG5cdFx0fVxuXHR9O1xufVxuXG5jb25zdCBldmVudFByb3h5ID0gY3JlYXRlRXZlbnRQcm94eShmYWxzZSk7XG5jb25zdCBldmVudFByb3h5Q2FwdHVyZSA9IGNyZWF0ZUV2ZW50UHJveHkodHJ1ZSk7XG4iLCAiaW1wb3J0IHsgZW5xdWV1ZVJlbmRlciB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBsZXQgaSA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuXHRmdW5jdGlvbiBDb250ZXh0KHByb3BzKSB7XG5cdFx0aWYgKCF0aGlzLmdldENoaWxkQ29udGV4dCkge1xuXHRcdFx0LyoqIEB0eXBlIHtTZXQ8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50PiB8IG51bGx9ICovXG5cdFx0XHRsZXQgc3VicyA9IG5ldyBTZXQoKTtcblx0XHRcdGxldCBjdHggPSB7fTtcblx0XHRcdGN0eFtDb250ZXh0Ll9pZF0gPSB0aGlzO1xuXG5cdFx0XHR0aGlzLmdldENoaWxkQ29udGV4dCA9ICgpID0+IGN0eDtcblxuXHRcdFx0dGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcblx0XHRcdFx0c3VicyA9IE5VTEw7XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChfcHJvcHMpIHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBldmVuXG5cdFx0XHRcdGlmICh0aGlzLnByb3BzLnZhbHVlICE9IF9wcm9wcy52YWx1ZSkge1xuXHRcdFx0XHRcdHN1YnMuZm9yRWFjaChjID0+IHtcblx0XHRcdFx0XHRcdGMuX2ZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGVucXVldWVSZW5kZXIoYyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuc3ViID0gYyA9PiB7XG5cdFx0XHRcdHN1YnMuYWRkKGMpO1xuXHRcdFx0XHRsZXQgb2xkID0gYy5jb21wb25lbnRXaWxsVW5tb3VudDtcblx0XHRcdFx0Yy5jb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAoc3Vicykge1xuXHRcdFx0XHRcdFx0c3Vicy5kZWxldGUoYyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChvbGQpIG9sZC5jYWxsKGMpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG5cdH1cblxuXHRDb250ZXh0Ll9pZCA9ICdfX2NDJyArIGkrKztcblx0Q29udGV4dC5fZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdENvbnRleHQuQ29uc3VtZXIgPSAocHJvcHMsIGNvbnRleHRWYWx1ZSkgPT4ge1xuXHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0VmFsdWUpO1xuXHR9O1xuXG5cdC8vIHdlIGNvdWxkIGFsc28gZ2V0IHJpZCBvZiBfY29udGV4dFJlZiBlbnRpcmVseVxuXHRDb250ZXh0LlByb3ZpZGVyID1cblx0XHRDb250ZXh0Ll9jb250ZXh0UmVmID1cblx0XHRDb250ZXh0LkNvbnN1bWVyLmNvbnRleHRUeXBlID1cblx0XHRcdENvbnRleHQ7XG5cblx0cmV0dXJuIENvbnRleHQ7XG59XG4iLCAiaW1wb3J0IHsgZGlmZiwgdW5tb3VudCwgYXBwbHlSZWYgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7XG5cdEVNUFRZX09CSixcblx0RU1QVFlfQVJSLFxuXHRJTlNFUlRfVk5PREUsXG5cdE1BVENIRUQsXG5cdFVOREVGSU5FRCxcblx0TlVMTFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbn0gQ29tcG9uZW50Q2hpbGRyZW5cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSBDb21wb25lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gUHJlYWN0RWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gVk5vZGVcbiAqL1xuXG4vKipcbiAqIERpZmYgdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgd2hvc2UgY2hpbGRyZW4gYXJlIGJlaW5nXG4gKiBkaWZmZWRcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdQYXJlbnRWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmVcbiAqIGRpZmYnZWQgYWdhaW5zdCBvbGRQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkUGFyZW50Vk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3QgbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0IC0gbW9kaWZpZWQgYnlcbiAqIGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBDdXJyZW50IG5hbWVzcGFjZSBvZiB0aGUgRE9NIG5vZGUgKEhUTUwsIFNWRywgb3IgTWF0aE1MKVxuICogQHBhcmFtIHtBcnJheTxQcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8Q29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzIHdoaWNoIGhhdmUgY2FsbGJhY2tzXG4gKiB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb20gVGhlIGN1cnJlbnQgYXR0YWNoZWQgRE9NIGVsZW1lbnQgYW55IG5ldyBkb21cbiAqIGVsZW1lbnRzIHNob3VsZCBiZSBwbGFjZWQgYXJvdW5kLiBMaWtlbHkgYG51bGxgIG9uIGZpcnN0IHJlbmRlciAoZXhjZXB0IHdoZW5cbiAqIGh5ZHJhdGluZykuIENhbiBiZSBhIHNpYmxpbmcgRE9NIGVsZW1lbnQgd2hlbiBkaWZmaW5nIEZyYWdtZW50cyB0aGF0IGhhdmVcbiAqIHNpYmxpbmdzLiBJbiBtb3N0IGNhc2VzLCBpdCBzdGFydHMgb3V0IGFzIGBvbGRDaGlsZHJlblswXS5fZG9tYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICogQHBhcmFtIHthbnlbXX0gcmVmUXVldWUgYW4gYXJyYXkgb2YgZWxlbWVudHMgbmVlZGVkIHRvIGludm9rZSByZWZzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ2hpbGRyZW4oXG5cdHBhcmVudERvbSxcblx0cmVuZGVyUmVzdWx0LFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0b2xkUGFyZW50Vk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdGxldCBpLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0b2xkVk5vZGUsXG5cdFx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0XHRjaGlsZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRuZXdEb20sXG5cdFx0LyoqIEB0eXBlIHtQcmVhY3RFbGVtZW50fSAqL1xuXHRcdGZpcnN0Q2hpbGREb207XG5cblx0Ly8gVGhpcyBpcyBhIGNvbXByZXNzaW9uIG9mIG9sZFBhcmVudFZOb2RlIT1udWxsICYmIG9sZFBhcmVudFZOb2RlICE9IEVNUFRZX09CSiAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4gfHwgRU1QVFlfQVJSXG5cdC8vIGFzIEVNUFRZX09CSi5fY2hpbGRyZW4gc2hvdWxkIGJlIGB1bmRlZmluZWRgLlxuXHQvKiogQHR5cGUge1ZOb2RlW119ICovXG5cdGxldCBvbGRDaGlsZHJlbiA9IChvbGRQYXJlbnRWTm9kZSAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4pIHx8IEVNUFRZX0FSUjtcblxuXHRsZXQgbmV3Q2hpbGRyZW5MZW5ndGggPSByZW5kZXJSZXN1bHQubGVuZ3RoO1xuXG5cdG9sZERvbSA9IGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdFx0bmV3UGFyZW50Vk5vZGUsXG5cdFx0cmVuZGVyUmVzdWx0LFxuXHRcdG9sZENoaWxkcmVuLFxuXHRcdG9sZERvbSxcblx0XHRuZXdDaGlsZHJlbkxlbmd0aFxuXHQpO1xuXG5cdGZvciAoaSA9IDA7IGkgPCBuZXdDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXTtcblx0XHRpZiAoY2hpbGRWTm9kZSA9PSBOVUxMKSBjb250aW51ZTtcblxuXHRcdC8vIEF0IHRoaXMgcG9pbnQsIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkgaGFzIGFzc2lnbmVkIF9pbmRleCB0byBiZSB0aGVcblx0XHQvLyBtYXRjaGluZ0luZGV4IGZvciB0aGlzIFZOb2RlJ3Mgb2xkVk5vZGUgKG9yIC0xIGlmIHRoZXJlIGlzIG5vIG9sZFZOb2RlKS5cblx0XHRvbGRWTm9kZSA9XG5cdFx0XHQoY2hpbGRWTm9kZS5faW5kZXggIT0gLTEgJiYgb2xkQ2hpbGRyZW5bY2hpbGRWTm9kZS5faW5kZXhdKSB8fCBFTVBUWV9PQko7XG5cblx0XHQvLyBVcGRhdGUgY2hpbGRWTm9kZS5faW5kZXggdG8gaXRzIGZpbmFsIGluZGV4XG5cdFx0Y2hpbGRWTm9kZS5faW5kZXggPSBpO1xuXG5cdFx0Ly8gTW9ycGggdGhlIG9sZCBlbGVtZW50IGludG8gdGhlIG5ldyBvbmUsIGJ1dCBkb24ndCBhcHBlbmQgaXQgdG8gdGhlIGRvbSB5ZXRcblx0XHRsZXQgcmVzdWx0ID0gZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0b2xkRG9tLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cblx0XHQvLyBBZGp1c3QgRE9NIG5vZGVzXG5cdFx0bmV3RG9tID0gY2hpbGRWTm9kZS5fZG9tO1xuXHRcdGlmIChjaGlsZFZOb2RlLnJlZiAmJiBvbGRWTm9kZS5yZWYgIT0gY2hpbGRWTm9kZS5yZWYpIHtcblx0XHRcdGlmIChvbGRWTm9kZS5yZWYpIHtcblx0XHRcdFx0YXBwbHlSZWYob2xkVk5vZGUucmVmLCBOVUxMLCBjaGlsZFZOb2RlKTtcblx0XHRcdH1cblx0XHRcdHJlZlF1ZXVlLnB1c2goXG5cdFx0XHRcdGNoaWxkVk5vZGUucmVmLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9jb21wb25lbnQgfHwgbmV3RG9tLFxuXHRcdFx0XHRjaGlsZFZOb2RlXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChmaXJzdENoaWxkRG9tID09IE5VTEwgJiYgbmV3RG9tICE9IE5VTEwpIHtcblx0XHRcdGZpcnN0Q2hpbGREb20gPSBuZXdEb207XG5cdFx0fVxuXG5cdFx0bGV0IHNob3VsZFBsYWNlID0gISEoY2hpbGRWTm9kZS5fZmxhZ3MgJiBJTlNFUlRfVk5PREUpO1xuXHRcdGlmIChzaG91bGRQbGFjZSB8fCBvbGRWTm9kZS5fY2hpbGRyZW4gPT09IGNoaWxkVk5vZGUuX2NoaWxkcmVuKSB7XG5cdFx0XHRvbGREb20gPSBpbnNlcnQoY2hpbGRWTm9kZSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyAmJiByZXN1bHQgIT09IFVOREVGSU5FRCkge1xuXHRcdFx0b2xkRG9tID0gcmVzdWx0O1xuXHRcdH0gZWxzZSBpZiAobmV3RG9tKSB7XG5cdFx0XHRvbGREb20gPSBuZXdEb20ubmV4dFNpYmxpbmc7XG5cdFx0fVxuXG5cdFx0Ly8gVW5zZXQgZGlmZmluZyBmbGFnc1xuXHRcdGNoaWxkVk5vZGUuX2ZsYWdzICY9IH4oSU5TRVJUX1ZOT0RFIHwgTUFUQ0hFRCk7XG5cdH1cblxuXHRuZXdQYXJlbnRWTm9kZS5fZG9tID0gZmlyc3RDaGlsZERvbTtcblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICovXG5mdW5jdGlvbiBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0cmVuZGVyUmVzdWx0LFxuXHRvbGRDaGlsZHJlbixcblx0b2xkRG9tLFxuXHRuZXdDaGlsZHJlbkxlbmd0aFxuKSB7XG5cdC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuXHRsZXQgaTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IGNoaWxkVk5vZGU7XG5cdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdGxldCBvbGRWTm9kZTtcblxuXHRsZXQgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRDaGlsZHJlbi5sZW5ndGgsXG5cdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4gPSBvbGRDaGlsZHJlbkxlbmd0aDtcblxuXHRsZXQgc2tldyA9IDA7XG5cblx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuID0gbmV3IEFycmF5KG5ld0NoaWxkcmVuTGVuZ3RoKTtcblx0Zm9yIChpID0gMDsgaSA8IG5ld0NoaWxkcmVuTGVuZ3RoOyBpKyspIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGFyZSByZXVzaW5nIHRoZSBjaGlsZFZOb2RlIHZhcmlhYmxlIHRvIGhvbGQgYm90aCB0aGVcblx0XHQvLyBwcmUgYW5kIHBvc3Qgbm9ybWFsaXplZCBjaGlsZFZOb2RlXG5cdFx0Y2hpbGRWTm9kZSA9IHJlbmRlclJlc3VsdFtpXTtcblxuXHRcdGlmIChcblx0XHRcdGNoaWxkVk5vZGUgPT0gTlVMTCB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2Jvb2xlYW4nIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnZnVuY3Rpb24nXG5cdFx0KSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBOVUxMO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdC8vIElmIHRoaXMgbmV3Vk5vZGUgaXMgYmVpbmcgcmV1c2VkIChlLmcuIDxkaXY+e3JldXNlfXtyZXVzZX08L2Rpdj4pIGluIHRoZSBzYW1lIGRpZmYsXG5cdFx0Ly8gb3Igd2UgYXJlIHJlbmRlcmluZyBhIGNvbXBvbmVudCAoZS5nLiBzZXRTdGF0ZSkgY29weSB0aGUgb2xkVk5vZGVzIHNvIGl0IGNhbiBoYXZlXG5cdFx0Ly8gaXQncyBvd24gRE9NICYgZXRjLiBwb2ludGVyc1xuXHRcdGVsc2UgaWYgKFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ3N0cmluZycgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdudW1iZXInIHx8XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYmlnaW50JyB8fFxuXHRcdFx0Y2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmdcblx0XHQpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRWTm9kZSkpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdHsgY2hpbGRyZW46IGNoaWxkVk5vZGUgfSxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTCxcblx0XHRcdFx0TlVMTFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGNoaWxkVk5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRCAmJiBjaGlsZFZOb2RlLl9kZXB0aCA+IDApIHtcblx0XHRcdC8vIFZOb2RlIGlzIGFscmVhZHkgaW4gdXNlLCBjbG9uZSBpdC4gVGhpcyBjYW4gaGFwcGVuIGluIHRoZSBmb2xsb3dpbmdcblx0XHRcdC8vIHNjZW5hcmlvOlxuXHRcdFx0Ly8gICBjb25zdCByZXVzZSA9IDxkaXYgLz5cblx0XHRcdC8vICAgPGRpdj57cmV1c2V9PHNwYW4gLz57cmV1c2V9PC9kaXY+XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5wcm9wcyxcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXksXG5cdFx0XHRcdGNoaWxkVk5vZGUucmVmID8gY2hpbGRWTm9kZS5yZWYgOiBOVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY2hpbGRWTm9kZTtcblx0XHR9XG5cblx0XHRjb25zdCBza2V3ZWRJbmRleCA9IGkgKyBza2V3O1xuXHRcdGNoaWxkVk5vZGUuX3BhcmVudCA9IG5ld1BhcmVudFZOb2RlO1xuXHRcdGNoaWxkVk5vZGUuX2RlcHRoID0gbmV3UGFyZW50Vk5vZGUuX2RlcHRoICsgMTtcblxuXHRcdC8vIFRlbXBvcmFyaWx5IHN0b3JlIHRoZSBtYXRjaGluZ0luZGV4IG9uIHRoZSBfaW5kZXggcHJvcGVydHkgc28gd2UgY2FuIHB1bGxcblx0XHQvLyBvdXQgdGhlIG9sZFZOb2RlIGluIGRpZmZDaGlsZHJlbi4gV2UnbGwgb3ZlcnJpZGUgdGhpcyB0byB0aGUgVk5vZGUnc1xuXHRcdC8vIGZpbmFsIGluZGV4IGFmdGVyIHVzaW5nIHRoaXMgcHJvcGVydHkgdG8gZ2V0IHRoZSBvbGRWTm9kZVxuXHRcdGNvbnN0IG1hdGNoaW5nSW5kZXggPSAoY2hpbGRWTm9kZS5faW5kZXggPSBmaW5kTWF0Y2hpbmdJbmRleChcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRDaGlsZHJlbixcblx0XHRcdHNrZXdlZEluZGV4LFxuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW5cblx0XHQpKTtcblxuXHRcdG9sZFZOb2RlID0gTlVMTDtcblx0XHRpZiAobWF0Y2hpbmdJbmRleCAhPSAtMSkge1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlblttYXRjaGluZ0luZGV4XTtcblx0XHRcdHJlbWFpbmluZ09sZENoaWxkcmVuLS07XG5cdFx0XHRpZiAob2xkVk5vZGUpIHtcblx0XHRcdFx0b2xkVk5vZGUuX2ZsYWdzIHw9IE1BVENIRUQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSGVyZSwgd2UgZGVmaW5lIGlzTW91bnRpbmcgZm9yIHRoZSBwdXJwb3NlcyBvZiB0aGUgc2tldyBkaWZmaW5nXG5cdFx0Ly8gYWxnb3JpdGhtLiBOb2RlcyB0aGF0IGFyZSB1bnN1c3BlbmRpbmcgYXJlIGNvbnNpZGVyZWQgbW91bnRpbmcgYW5kIHdlIGRldGVjdFxuXHRcdC8vIHRoaXMgYnkgY2hlY2tpbmcgaWYgb2xkVk5vZGUuX29yaWdpbmFsID09IG51bGxcblx0XHRjb25zdCBpc01vdW50aW5nID0gb2xkVk5vZGUgPT0gTlVMTCB8fCBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gTlVMTDtcblxuXHRcdGlmIChpc01vdW50aW5nKSB7XG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSAtMSkge1xuXHRcdFx0XHQvLyBXaGVuIHRoZSBhcnJheSBvZiBjaGlsZHJlbiBpcyBncm93aW5nIHdlIG5lZWQgdG8gZGVjcmVhc2UgdGhlIHNrZXdcblx0XHRcdFx0Ly8gYXMgd2UgYXJlIGFkZGluZyBhIG5ldyBlbGVtZW50IHRvIHRoZSBhcnJheS5cblx0XHRcdFx0Ly8gRXhhbXBsZTpcblx0XHRcdFx0Ly8gWzEsIDIsIDNdIC0tPiBbMCwgMSwgMiwgM11cblx0XHRcdFx0Ly8gb2xkQ2hpbGRyZW4gICBuZXdDaGlsZHJlblxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBUaGUgbmV3IGVsZW1lbnQgaXMgYXQgaW5kZXggMCwgc28gb3VyIHNrZXcgaXMgMCxcblx0XHRcdFx0Ly8gd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tldyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQuXG5cdFx0XHRcdC8vIFRoZSBkZWNyZWFzZSB3aWxsIGNhdXNlIHVzIHRvIGNvbXBhcmUgdGhlIGVsZW1lbnQgYXQgcG9zaXRpb24gMVxuXHRcdFx0XHQvLyB3aXRoIHZhbHVlIDEgd2l0aCB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAwIHdpdGggdmFsdWUgMC5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gQSBsaW5lYXIgY29uY2VwdCBpcyBhcHBsaWVkIHdoZW4gdGhlIGFycmF5IGlzIHNocmlua2luZyxcblx0XHRcdFx0Ly8gaWYgdGhlIGxlbmd0aCBpcyB1bmNoYW5nZWQgd2UgY2FuIGFzc3VtZSB0aGF0IG5vIHNrZXdcblx0XHRcdFx0Ly8gY2hhbmdlcyBhcmUgbmVlZGVkLlxuXHRcdFx0XHRpZiAobmV3Q2hpbGRyZW5MZW5ndGggPiBvbGRDaGlsZHJlbkxlbmd0aCkge1xuXHRcdFx0XHRcdHNrZXctLTtcblx0XHRcdFx0fSBlbHNlIGlmIChuZXdDaGlsZHJlbkxlbmd0aCA8IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldysrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGFyZSBtb3VudGluZyBhIERPTSBWTm9kZSwgbWFyayBpdCBmb3IgaW5zZXJ0aW9uXG5cdFx0XHRpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSAhPSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNoaWxkVk5vZGUuX2ZsYWdzIHw9IElOU0VSVF9WTk9ERTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG1hdGNoaW5nSW5kZXggIT0gc2tld2VkSW5kZXgpIHtcblx0XHRcdC8vIFdoZW4gd2UgbW92ZSBlbGVtZW50cyBhcm91bmQgaS5lLiBbMCwgMSwgMl0gLS0+IFsxLCAwLCAyXVxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMSwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAxIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgMCBhbmQgb3VyIHNrZXcgaXMgMFxuXHRcdFx0Ly8gICAgIHdlIHNldCB0aGUgc2tldyB0byAxIGFzIHdlIGZvdW5kIGFuIG9mZnNldC5cblx0XHRcdC8vIC0tPiB3ZSBkaWZmIDAsIHdlIGZpbmQgaXQgYXQgcG9zaXRpb24gMCB3aGlsZSBvdXIgc2tld2VkIGluZGV4IGlzIGF0IDIgYW5kIG91ciBza2V3IGlzIDFcblx0XHRcdC8vICAgICB0aGlzIG1ha2VzIHVzIGluY3JlYXNlIHRoZSBza2V3IGFnYWluLlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMiwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAyIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgNCBhbmQgb3VyIHNrZXcgaXMgMlxuXHRcdFx0Ly9cblx0XHRcdC8vIHRoaXMgYmVjb21lcyBhbiBvcHRpbWl6YXRpb24gcXVlc3Rpb24gd2hlcmUgY3VycmVudGx5IHdlIHNlZSBhIDEgZWxlbWVudCBvZmZzZXQgYXMgYW4gaW5zZXJ0aW9uXG5cdFx0XHQvLyBvciBkZWxldGlvbiBpLmUuIHdlIG9wdGltaXplIGZvciBbMCwgMSwgMl0gLS0+IFs5LCAwLCAxLCAyXVxuXHRcdFx0Ly8gd2hpbGUgYSBtb3JlIHRoYW4gMSBvZmZzZXQgd2Ugc2VlIGFzIGEgc3dhcC5cblx0XHRcdC8vIFdlIGNvdWxkIHByb2JhYmx5IGJ1aWxkIGhldXJpc3RpY3MgZm9yIGhhdmluZyBhbiBvcHRpbWl6ZWQgY291cnNlIG9mIGFjdGlvbiBoZXJlIGFzIHdlbGwsIGJ1dFxuXHRcdFx0Ly8gbWlnaHQgZ28gYXQgdGhlIGNvc3Qgb2Ygc29tZSBieXRlcy5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiB3ZSB3YW50ZWQgdG8gb3B0aW1pemUgZm9yIGkuZS4gb25seSBzd2FwcyB3ZSdkIGp1c3QgZG8gdGhlIGxhc3QgdHdvIGNvZGUtYnJhbmNoZXMgYW5kIGhhdmVcblx0XHRcdC8vIG9ubHkgdGhlIGZpcnN0IGl0ZW0gYmUgYSByZS1zY291dGluZyBhbmQgYWxsIHRoZSBvdGhlcnMgZmFsbCBpbiB0aGVpciBza2V3ZWQgY291bnRlci1wYXJ0LlxuXHRcdFx0Ly8gV2UgY291bGQgYWxzbyBmdXJ0aGVyIG9wdGltaXplIGZvciBzd2Fwc1xuXHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPT0gc2tld2VkSW5kZXggLSAxKSB7XG5cdFx0XHRcdHNrZXctLTtcblx0XHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCArIDEpIHtcblx0XHRcdFx0c2tldysrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG1hdGNoaW5nSW5kZXggPiBza2V3ZWRJbmRleCkge1xuXHRcdFx0XHRcdHNrZXctLTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIHRoaXMgVk5vZGUncyBET00gaWYgdGhlIG9yaWdpbmFsIGluZGV4IChtYXRjaGluZ0luZGV4KSBkb2Vzbid0XG5cdFx0XHRcdC8vIG1hdGNoIHRoZSBuZXcgc2tldyBpbmRleCAoaSArIG5ldyBza2V3KVxuXHRcdFx0XHQvLyBJbiB0aGUgZm9ybWVyIHR3byBicmFuY2hlcyB3ZSBrbm93IHRoYXQgaXQgbWF0Y2hlcyBhZnRlciBza2V3aW5nXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2ZsYWdzIHw9IElOU0VSVF9WTk9ERTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgcmVtYWluaW5nIG9sZENoaWxkcmVuIGlmIHRoZXJlIGFyZSBhbnkuIExvb3AgZm9yd2FyZHMgc28gdGhhdCBhcyB3ZVxuXHQvLyB1bm1vdW50IERPTSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG9sZENoaWxkcmVuLCB3ZSBjYW4gYWRqdXN0IG9sZERvbSB0b1xuXHQvLyBwb2ludCB0byB0aGUgbmV4dCBjaGlsZCwgd2hpY2ggbmVlZHMgdG8gYmUgdGhlIGZpcnN0IERPTSBub2RlIHRoYXQgd29uJ3QgYmVcblx0Ly8gdW5tb3VudGVkLlxuXHRpZiAocmVtYWluaW5nT2xkQ2hpbGRyZW4pIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgb2xkQ2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcblx0XHRcdGlmIChvbGRWTm9kZSAhPSBOVUxMICYmIChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwKSB7XG5cdFx0XHRcdGlmIChvbGRWTm9kZS5fZG9tID09IG9sZERvbSkge1xuXHRcdFx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcob2xkVk5vZGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dW5tb3VudChvbGRWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tXG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IHBhcmVudERvbVxuICogQHBhcmFtIHtib29sZWFufSBzaG91bGRQbGFjZVxuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGluc2VydChwYXJlbnRWTm9kZSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKSB7XG5cdC8vIE5vdGU6IFZOb2RlcyBpbiBuZXN0ZWQgc3VzcGVuZGVkIHRyZWVzIG1heSBiZSBtaXNzaW5nIF9jaGlsZHJlbi5cblxuXHRpZiAodHlwZW9mIHBhcmVudFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBjaGlsZHJlbiA9IHBhcmVudFZOb2RlLl9jaGlsZHJlbjtcblx0XHRmb3IgKGxldCBpID0gMDsgY2hpbGRyZW4gJiYgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoY2hpbGRyZW5baV0pIHtcblx0XHRcdFx0Ly8gSWYgd2UgZW50ZXIgdGhpcyBjb2RlIHBhdGggb24gc0NVIGJhaWxvdXQsIHdoZXJlIHdlIGNvcHlcblx0XHRcdFx0Ly8gb2xkVk5vZGUuX2NoaWxkcmVuIHRvIG5ld1ZOb2RlLl9jaGlsZHJlbiwgd2UgbmVlZCB0byB1cGRhdGUgdGhlIG9sZFxuXHRcdFx0XHQvLyBjaGlsZHJlbidzIF9wYXJlbnQgcG9pbnRlciB0byBwb2ludCB0byB0aGUgbmV3Vk5vZGUgKHBhcmVudFZOb2RlXG5cdFx0XHRcdC8vIGhlcmUpLlxuXHRcdFx0XHRjaGlsZHJlbltpXS5fcGFyZW50ID0gcGFyZW50Vk5vZGU7XG5cdFx0XHRcdG9sZERvbSA9IGluc2VydChjaGlsZHJlbltpXSwgb2xkRG9tLCBwYXJlbnREb20sIHNob3VsZFBsYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2xkRG9tO1xuXHR9IGVsc2UgaWYgKHBhcmVudFZOb2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0aWYgKHNob3VsZFBsYWNlKSB7XG5cdFx0XHRpZiAob2xkRG9tICYmIHBhcmVudFZOb2RlLnR5cGUgJiYgIW9sZERvbS5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcocGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0cGFyZW50RG9tLmluc2VydEJlZm9yZShwYXJlbnRWTm9kZS5fZG9tLCBvbGREb20gfHwgTlVMTCk7XG5cdFx0fVxuXHRcdG9sZERvbSA9IHBhcmVudFZOb2RlLl9kb207XG5cdH1cblxuXHRkbyB7XG5cdFx0b2xkRG9tID0gb2xkRG9tICYmIG9sZERvbS5uZXh0U2libGluZztcblx0fSB3aGlsZSAob2xkRG9tICE9IE5VTEwgJiYgb2xkRG9tLm5vZGVUeXBlID09IDgpO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbmQgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtDb21wb25lbnRDaGlsZHJlbn0gY2hpbGRyZW4gVGhlIHVuZmxhdHRlbmVkIGNoaWxkcmVuIG9mIGEgdmlydHVhbFxuICogbm9kZVxuICogQHJldHVybnMge1ZOb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0NoaWxkQXJyYXkoY2hpbGRyZW4sIG91dCkge1xuXHRvdXQgPSBvdXQgfHwgW107XG5cdGlmIChjaGlsZHJlbiA9PSBOVUxMIHx8IHR5cGVvZiBjaGlsZHJlbiA9PSAnYm9vbGVhbicpIHtcblx0fSBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0dG9DaGlsZEFycmF5KGNoaWxkLCBvdXQpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG91dC5wdXNoKGNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Vk5vZGV9IGNoaWxkVk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGVbXX0gb2xkQ2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBza2V3ZWRJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IHJlbWFpbmluZ09sZENoaWxkcmVuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBmaW5kTWF0Y2hpbmdJbmRleChcblx0Y2hpbGRWTm9kZSxcblx0b2xkQ2hpbGRyZW4sXG5cdHNrZXdlZEluZGV4LFxuXHRyZW1haW5pbmdPbGRDaGlsZHJlblxuKSB7XG5cdGNvbnN0IGtleSA9IGNoaWxkVk5vZGUua2V5O1xuXHRjb25zdCB0eXBlID0gY2hpbGRWTm9kZS50eXBlO1xuXHRsZXQgb2xkVk5vZGUgPSBvbGRDaGlsZHJlbltza2V3ZWRJbmRleF07XG5cdGNvbnN0IG1hdGNoZWQgPSBvbGRWTm9kZSAhPSBOVUxMICYmIChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwO1xuXG5cdC8vIFdlIG9ubHkgbmVlZCB0byBwZXJmb3JtIGEgc2VhcmNoIGlmIHRoZXJlIGFyZSBtb3JlIGNoaWxkcmVuXG5cdC8vIChyZW1haW5pbmdPbGRDaGlsZHJlbikgdG8gc2VhcmNoLiBIb3dldmVyLCBpZiB0aGUgb2xkVk5vZGUgd2UganVzdCBsb29rZWRcblx0Ly8gYXQgc2tld2VkSW5kZXggd2FzIG5vdCBhbHJlYWR5IHVzZWQgaW4gdGhpcyBkaWZmLCB0aGVuIHRoZXJlIG11c3QgYmUgYXRcblx0Ly8gbGVhc3QgMSBvdGhlciAoc28gZ3JlYXRlciB0aGFuIDEpIHJlbWFpbmluZ09sZENoaWxkcmVuIHRvIGF0dGVtcHQgdG8gbWF0Y2hcblx0Ly8gYWdhaW5zdC4gU28gdGhlIGZvbGxvd2luZyBjb25kaXRpb24gY2hlY2tzIHRoYXQgZW5zdXJpbmdcblx0Ly8gcmVtYWluaW5nT2xkQ2hpbGRyZW4gPiAxIGlmIHRoZSBvbGRWTm9kZSBpcyBub3QgYWxyZWFkeSB1c2VkL21hdGNoZWQuIEVsc2Vcblx0Ly8gaWYgdGhlIG9sZFZOb2RlIHdhcyBudWxsIG9yIG1hdGNoZWQsIHRoZW4gdGhlcmUgY291bGQgbmVlZHMgdG8gYmUgYXQgbGVhc3Rcblx0Ly8gMSAoYWthIGByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDBgKSBjaGlsZHJlbiB0byBmaW5kIGFuZCBjb21wYXJlIGFnYWluc3QuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGlzIGFuIHVua2V5ZWQgZnVuY3Rpb25hbCBWTm9kZSwgdGhhdCBpc24ndCBhIGJ1aWx0LWluIGxpa2Ugb3VyIEZyYWdtZW50LFxuXHQvLyB3ZSBzaG91bGQgbm90IHNlYXJjaCBhcyB3ZSByaXNrIHJlLXVzaW5nIHN0YXRlIG9mIGFuIHVucmVsYXRlZCBWTm9kZS4gKHJldmVydGVkIGZvciBub3cpXG5cdGxldCBzaG91bGRTZWFyY2ggPVxuXHRcdC8vICh0eXBlb2YgdHlwZSAhPSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09IEZyYWdtZW50IHx8IGtleSkgJiZcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA+IChtYXRjaGVkID8gMSA6IDApO1xuXG5cdGlmIChcblx0XHQob2xkVk5vZGUgPT09IE5VTEwgJiYga2V5ID09IG51bGwpIHx8XG5cdFx0KG1hdGNoZWQgJiYga2V5ID09IG9sZFZOb2RlLmtleSAmJiB0eXBlID09IG9sZFZOb2RlLnR5cGUpXG5cdCkge1xuXHRcdHJldHVybiBza2V3ZWRJbmRleDtcblx0fSBlbHNlIGlmIChzaG91bGRTZWFyY2gpIHtcblx0XHRsZXQgeCA9IHNrZXdlZEluZGV4IC0gMTtcblx0XHRsZXQgeSA9IHNrZXdlZEluZGV4ICsgMTtcblx0XHR3aGlsZSAoeCA+PSAwIHx8IHkgPCBvbGRDaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGNoaWxkSW5kZXggPSB4ID49IDAgPyB4LS0gOiB5Kys7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRvbGRWTm9kZSAhPSBOVUxMICYmXG5cdFx0XHRcdChvbGRWTm9kZS5fZmxhZ3MgJiBNQVRDSEVEKSA9PSAwICYmXG5cdFx0XHRcdGtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0dHlwZSA9PSBvbGRWTm9kZS50eXBlXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIGNoaWxkSW5kZXg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIC0xO1xufVxuIiwgImltcG9ydCB7XG5cdEVNUFRZX0FSUixcblx0RU1QVFlfT0JKLFxuXHRNQVRIX05BTUVTUEFDRSxcblx0TU9ERV9IWURSQVRFLFxuXHRNT0RFX1NVU1BFTkRFRCxcblx0TlVMTCxcblx0UkVTRVRfTU9ERSxcblx0U1ZHX05BTUVTUEFDRSxcblx0VU5ERUZJTkVELFxuXHRYSFRNTF9OQU1FU1BBQ0Vcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQsIGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBkaWZmQ2hpbGRyZW4gfSBmcm9tICcuL2NoaWxkcmVuJztcbmltcG9ydCB7IHNldFByb3BlcnR5IH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBhc3NpZ24sIGlzQXJyYXksIHJlbW92ZU5vZGUsIHNsaWNlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVufSBDb21wb25lbnRDaGlsZHJlblxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9IENvbXBvbmVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBQcmVhY3RFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBWTm9kZVxuICovXG5cbi8qKlxuICogQHRlbXBsYXRlIHthbnl9IFRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUmVmPFQ+fSBSZWY8VD5cbiAqL1xuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgYW5kIGFwcGx5IHByb3BlciBjaGFuZ2VzIHRvIHRoZSBET01cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBwYXJlbnQgb2YgdGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0LiBNb2RpZmllZCBieVxuICogZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET00gZWxlbWVudCBhbnkgbmV3IGRvbVxuICogZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3QgcmVuZGVyIChleGNlcHQgd2hlblxuICogaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmcgRnJhZ21lbnRzIHRoYXQgaGF2ZVxuICogc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcGFyYW0ge2FueVtdfSByZWZRdWV1ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBuZWVkZWQgdG8gaW52b2tlIHJlZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoXG5cdHBhcmVudERvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHQvKiogQHR5cGUge2FueX0gKi9cblx0bGV0IHRtcCxcblx0XHRuZXdUeXBlID0gbmV3Vk5vZGUudHlwZTtcblxuXHQvLyBXaGVuIHBhc3NpbmcgdGhyb3VnaCBjcmVhdGVFbGVtZW50IGl0IGFzc2lnbnMgdGhlIG9iamVjdFxuXHQvLyBjb25zdHJ1Y3RvciBhcyB1bmRlZmluZWQuIFRoaXMgdG8gcHJldmVudCBKU09OLWluamVjdGlvbi5cblx0aWYgKG5ld1ZOb2RlLmNvbnN0cnVjdG9yICE9PSBVTkRFRklORUQpIHJldHVybiBOVUxMO1xuXG5cdC8vIElmIHRoZSBwcmV2aW91cyBkaWZmIGJhaWxlZCBvdXQsIHJlc3VtZSBjcmVhdGluZy9oeWRyYXRpbmcuXG5cdGlmIChvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX1NVU1BFTkRFRCkge1xuXHRcdGlzSHlkcmF0aW5nID0gISEob2xkVk5vZGUuX2ZsYWdzICYgTU9ERV9IWURSQVRFKTtcblx0XHRvbGREb20gPSBuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IFtvbGREb21dO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLl9kaWZmKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRvdXRlcjogaWYgKHR5cGVvZiBuZXdUeXBlID09ICdmdW5jdGlvbicpIHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltleGNlc3NEb21DaGlsZHJlbi5pbmRleE9mKG9sZERvbSldID0gTlVMTDtcblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkRG9tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcpIHtcblx0XHRcdGkgPSAndmFsdWUnO1xuXHRcdFx0aWYgKG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgaW5wdXRWYWx1ZSA9PSBOVUxMKSB7XG5cdFx0XHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpbnB1dFZhbHVlICE9IFVOREVGSU5FRCAmJlxuXHRcdFx0XHQvLyAjMjc1NiBGb3IgdGhlIDxwcm9ncmVzcz4tZWxlbWVudCB0aGUgaW5pdGlhbCB2YWx1ZSBpcyAwLFxuXHRcdFx0XHQvLyBkZXNwaXRlIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nIHByZXNlbnQuIFdoZW4gdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyBpcyBtaXNzaW5nIHRoZSBwcm9ncmVzcyBiYXIgaXMgdHJlYXRlZCBhcyBpbmRldGVybWluYXRlLlxuXHRcdFx0XHQvLyBUbyBmaXggdGhhdCB3ZSdsbCBhbHdheXMgdXBkYXRlIGl0IHdoZW4gaXQgaXMgMCBmb3IgcHJvZ3Jlc3MgZWxlbWVudHNcblx0XHRcdFx0KGlucHV0VmFsdWUgIT09IGRvbVtpXSB8fFxuXHRcdFx0XHRcdChub2RlVHlwZSA9PSAncHJvZ3Jlc3MnICYmICFpbnB1dFZhbHVlKSB8fFxuXHRcdFx0XHRcdC8vIFRoaXMgaXMgb25seSBmb3IgSUUgMTEgdG8gZml4IDxzZWxlY3Q+IHZhbHVlIG5vdCBiZWluZyB1cGRhdGVkLlxuXHRcdFx0XHRcdC8vIFRvIGF2b2lkIGEgc3RhbGUgc2VsZWN0IHZhbHVlIHdlIG5lZWQgdG8gc2V0IHRoZSBvcHRpb24udmFsdWVcblx0XHRcdFx0XHQvLyBhZ2Fpbiwgd2hpY2ggdHJpZ2dlcnMgSUUxMSB0byByZS1ldmFsdWF0ZSB0aGUgc2VsZWN0IHZhbHVlXG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdvcHRpb24nICYmIGlucHV0VmFsdWUgIT0gb2xkUHJvcHNbaV0pKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgaW5wdXRWYWx1ZSwgb2xkUHJvcHNbaV0sIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cblx0XHRcdGkgPSAnY2hlY2tlZCc7XG5cdFx0XHRpZiAoY2hlY2tlZCAhPSBVTkRFRklORUQgJiYgY2hlY2tlZCAhPSBkb21baV0pIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBjaGVja2VkLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG4vKipcbiAqIEludm9rZSBvciB1cGRhdGUgYSByZWYsIGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0IGlzIGEgZnVuY3Rpb24gb3Igb2JqZWN0IHJlZi5cbiAqIEBwYXJhbSB7UmVmPGFueT4gJiB7IF91bm1vdW50PzogdW5rbm93biB9fSByZWZcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtWTm9kZX0gdm5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUsIHZub2RlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bGV0IGhhc1JlZlVubW91bnQgPSB0eXBlb2YgcmVmLl91bm1vdW50ID09ICdmdW5jdGlvbic7XG5cdFx0XHRpZiAoaGFzUmVmVW5tb3VudCkge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3QgbGlrZSBtb3ZpbmcgbmFycm93aW5nIGNoZWNrcyBpbnRvIHZhcmlhYmxlc1xuXHRcdFx0XHRyZWYuX3VubW91bnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFoYXNSZWZVbm1vdW50IHx8IHZhbHVlICE9IE5VTEwpIHtcblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGNsZWFudXAgZnVuY3Rpb24gb24gdGhlIGZ1bmN0aW9uXG5cdFx0XHRcdC8vIGluc3RhbmNlIG9iamVjdCBpdHNlbGYgdG8gYXZvaWQgc2hhcGVcblx0XHRcdFx0Ly8gdHJhbnNpdGlvbmluZyB2bm9kZVxuXHRcdFx0XHRyZWYuX3VubW91bnQgPSByZWYodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSByZWYuY3VycmVudCA9IHZhbHVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCB2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBVbm1vdW50IGEgdmlydHVhbCBub2RlIGZyb20gdGhlIHRyZWUgYW5kIGFwcGx5IERPTSBjaGFuZ2VzXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHVubW91bnRcbiAqIEBwYXJhbSB7Vk5vZGV9IHBhcmVudFZOb2RlIFRoZSBwYXJlbnQgb2YgdGhlIFZOb2RlIHRoYXQgaW5pdGlhdGVkIHRoZSB1bm1vdW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwUmVtb3ZlXSBGbGFnIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBwYXJlbnQgbm9kZSBvZiB0aGVcbiAqIGN1cnJlbnQgZWxlbWVudCBpcyBhbHJlYWR5IGRldGFjaGVkIGZyb20gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQodm5vZGUsIHBhcmVudFZOb2RlLCBza2lwUmVtb3ZlKSB7XG5cdGxldCByO1xuXHRpZiAob3B0aW9ucy51bm1vdW50KSBvcHRpb25zLnVubW91bnQodm5vZGUpO1xuXG5cdGlmICgociA9IHZub2RlLnJlZikpIHtcblx0XHRpZiAoIXIuY3VycmVudCB8fCByLmN1cnJlbnQgPT0gdm5vZGUuX2RvbSkge1xuXHRcdFx0YXBwbHlSZWYociwgTlVMTCwgcGFyZW50Vk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jb21wb25lbnQpICE9IE5VTEwpIHtcblx0XHRpZiAoci5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHBhcmVudFZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyLmJhc2UgPSByLl9wYXJlbnREb20gPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQgd2l0aCBkYXRhIGZyb20gYSBQcmVhY3QgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHVwZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZSh2bm9kZSwgcGFyZW50RG9tKSB7XG5cdHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCBoeWRyYXRlKTtcbn1cbiIsICJpbXBvcnQgeyBhc3NpZ24sIHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlIH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBOVUxMLCBVTkRFRklORUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBnaXZlbiBWTm9kZSwgb3B0aW9uYWxseSBhZGRpbmcgYXR0cmlidXRlcy9wcm9wcyBhbmQgcmVwbGFjaW5nIGl0c1xuICogY2hpbGRyZW4uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbj59IHJlc3QgQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZFxuICogYXMgcmVwbGFjZW1lbnQgY2hpbGRyZW4uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnQodm5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gYXNzaWduKHt9LCB2bm9kZS5wcm9wcyksXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXG5cdGxldCBkZWZhdWx0UHJvcHM7XG5cblx0aWYgKHZub2RlLnR5cGUgJiYgdm5vZGUudHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRkZWZhdWx0UHJvcHMgPSB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcztcblx0fVxuXG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChwcm9wc1tpXSA9PT0gVU5ERUZJTkVEICYmIGRlZmF1bHRQcm9wcyAhPSBVTkRFRklORUQpIHtcblx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IGRlZmF1bHRQcm9wc1tpXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdFx0fVxuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUoXG5cdFx0dm5vZGUudHlwZSxcblx0XHRub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5IHx8IHZub2RlLmtleSxcblx0XHRyZWYgfHwgdm5vZGUucmVmLFxuXHRcdE5VTExcblx0KTtcbn1cbiIsICJpbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IGVycm9yIGJvdW5kYXJ5IHRvIGEgdGhyb3duIGVycm9yIGFuZCBjYWxsIGl0XG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgVGhlIHRocm93biB2YWx1ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2bm9kZSB0aGF0IHRocmV3IHRoZSBlcnJvciB0aGF0IHdhcyBjYXVnaHQgKGV4Y2VwdFxuICogZm9yIHVubW91bnRpbmcgd2hlbiB0aGlzIHBhcmFtZXRlciBpcyB0aGUgaGlnaGVzdCBwYXJlbnQgdGhhdCB3YXMgYmVpbmdcbiAqIHVubW91bnRlZClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBbb2xkVk5vZGVdXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5FcnJvckluZm99IFtlcnJvckluZm9dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hFcnJvcihlcnJvciwgdm5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50LFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudFR5cGV9ICovXG5cdFx0Y3Rvcixcblx0XHQvKiogQHR5cGUge2Jvb2xlYW59ICovXG5cdFx0aGFuZGxlZDtcblxuXHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5fcHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y3RvciA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuXHRcdFx0XHRpZiAoY3RvciAmJiBjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciAhPSBOVUxMKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LnNldFN0YXRlKGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyB8fCB7fSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaGlzIGlzIGFuIGVycm9yIGJvdW5kYXJ5LiBNYXJrIGl0IGFzIGhhdmluZyBiYWlsZWQgb3V0LCBhbmQgd2hldGhlciBpdCB3YXMgbWlkLWh5ZHJhdGlvbi5cblx0XHRcdFx0aWYgKGhhbmRsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGNvbXBvbmVudC5fcGVuZGluZ0Vycm9yID0gY29tcG9uZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgZXJyb3I7XG59XG4iLCAiaW1wb3J0IHsgb3B0aW9ucyBhcyBfb3B0aW9ucyB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRJbmRleDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgY3VycmVudENvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgcHJldmlvdXNDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRIb29rID0gMDtcblxuLyoqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSAqL1xubGV0IGFmdGVyUGFpbnRFZmZlY3RzID0gW107XG5cbi8vIENhc3QgdG8gdXNlIGludGVybmFsIE9wdGlvbnMgdHlwZVxuY29uc3Qgb3B0aW9ucyA9IC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc30gKi8gKF9vcHRpb25zKTtcblxubGV0IG9sZEJlZm9yZURpZmYgPSBvcHRpb25zLl9kaWZmO1xubGV0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbmxldCBvbGRBZnRlckRpZmYgPSBvcHRpb25zLmRpZmZlZDtcbmxldCBvbGRDb21taXQgPSBvcHRpb25zLl9jb21taXQ7XG5sZXQgb2xkQmVmb3JlVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcbmxldCBvbGRSb290ID0gb3B0aW9ucy5fcm9vdDtcblxuLy8gV2UgdGFrZSB0aGUgbWluaW11bSB0aW1lb3V0IGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gZW5zdXJlIHRoYXRcbi8vIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkIGFmdGVyIHRoZSBuZXh0IGZyYW1lLiAzNW1zIGlzIGJhc2VkIG9uIGEgMzBoelxuLy8gcmVmcmVzaCByYXRlLCB3aGljaCBpcyB0aGUgbWluaW11bSByYXRlIGZvciBhIHNtb290aCB1c2VyIGV4cGVyaWVuY2UuXG5jb25zdCBSQUZfVElNRU9VVCA9IDM1O1xubGV0IHByZXZSYWY7XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuXHRpZiAob2xkQmVmb3JlRGlmZikgb2xkQmVmb3JlRGlmZih2bm9kZSk7XG59O1xuXG5vcHRpb25zLl9yb290ID0gKHZub2RlLCBwYXJlbnREb20pID0+IHtcblx0aWYgKHZub2RlICYmIHBhcmVudERvbS5fY2hpbGRyZW4gJiYgcGFyZW50RG9tLl9jaGlsZHJlbi5fbWFzaykge1xuXHRcdHZub2RlLl9tYXNrID0gcGFyZW50RG9tLl9jaGlsZHJlbi5fbWFzaztcblx0fVxuXG5cdGlmIChvbGRSb290KSBvbGRSb290KHZub2RlLCBwYXJlbnREb20pO1xufTtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fcmVuZGVyID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlUmVuZGVyKSBvbGRCZWZvcmVSZW5kZXIodm5vZGUpO1xuXG5cdGN1cnJlbnRDb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRjdXJyZW50SW5kZXggPSAwO1xuXG5cdGNvbnN0IGhvb2tzID0gY3VycmVudENvbXBvbmVudC5fX2hvb2tzO1xuXHRpZiAoaG9va3MpIHtcblx0XHRpZiAocHJldmlvdXNDb21wb25lbnQgPT09IGN1cnJlbnRDb21wb25lbnQpIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50SW5kZXggPSAwO1xuXHRcdH1cblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLmRpZmZlZCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEFmdGVyRGlmZikgb2xkQWZ0ZXJEaWZmKHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0aWYgKGMuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMubGVuZ3RoKSBhZnRlclBhaW50KGFmdGVyUGFpbnRFZmZlY3RzLnB1c2goYykpO1xuXHRcdGMuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ0FyZ3MpIHtcblx0XHRcdFx0aG9va0l0ZW0uX2FyZ3MgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3M7XG5cdFx0XHR9XG5cdFx0XHRob29rSXRlbS5fcGVuZGluZ0FyZ3MgPSB1bmRlZmluZWQ7XG5cdFx0fSk7XG5cdH1cblx0cHJldmlvdXNDb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50ID0gbnVsbDtcbn07XG5cbi8vIFRPRE86IEltcHJvdmUgdHlwaW5nIG9mIGNvbW1pdFF1ZXVlIHBhcmFtZXRlclxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlLCBjb21taXRRdWV1ZTogYW55KSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fY29tbWl0ID0gKHZub2RlLCBjb21taXRRdWV1ZSkgPT4ge1xuXHRjb21taXRRdWV1ZS5zb21lKGNvbXBvbmVudCA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmZpbHRlcihjYiA9PlxuXHRcdFx0XHRjYi5fdmFsdWUgPyBpbnZva2VFZmZlY3QoY2IpIDogdHJ1ZVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzKSBjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdH0pO1xuXHRcdFx0Y29tbWl0UXVldWUgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAob2xkQ29tbWl0KSBvbGRDb21taXQodm5vZGUsIGNvbW1pdFF1ZXVlKTtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMudW5tb3VudCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVVubW91bnQpIG9sZEJlZm9yZVVubW91bnQodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRsZXQgaGFzRXJyb3JlZDtcblx0XHRjLl9faG9va3MuX2xpc3Quc29tZShzID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGludm9rZUNsZWFudXAocyk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGhhc0Vycm9yZWQgPSBlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGMuX19ob29rcyA9IHVuZGVmaW5lZDtcblx0XHRpZiAoaGFzRXJyb3JlZCkgb3B0aW9ucy5fY2F0Y2hFcnJvcihoYXNFcnJvcmVkLCBjLl92bm9kZSk7XG5cdH1cbn07XG5cbi8qKlxuICogR2V0IGEgaG9vaydzIHN0YXRlIGZyb20gdGhlIGN1cnJlbnRDb21wb25lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBnZXRIb29rU3RhdGUoaW5kZXgsIHR5cGUpIHtcblx0aWYgKG9wdGlvbnMuX2hvb2spIHtcblx0XHRvcHRpb25zLl9ob29rKGN1cnJlbnRDb21wb25lbnQsIGluZGV4LCBjdXJyZW50SG9vayB8fCB0eXBlKTtcblx0fVxuXHRjdXJyZW50SG9vayA9IDA7XG5cblx0Ly8gTGFyZ2VseSBpbnNwaXJlZCBieTpcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iL2Y2YmU3MzQ2OGU2ZWM0NmIwZmY1YWEzY2M0YzliYWY3MmEyOTAyNWEvc3JjL2hvb2tzL2NvcmVfaG9va3MubWpzXG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi82NTBiZWFhNThjNDNjMzNhNzQ4MjBhM2M5OGIzYzcwNzljZjJlMzMzL3NyYy9yZW5kZXJlci5tanNcblx0Ly8gT3RoZXIgaW1wbGVtZW50YXRpb25zIHRvIGxvb2sgYXQ6XG5cdC8vICogaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL21ub3gwNXFwOFxuXHRjb25zdCBob29rcyA9XG5cdFx0Y3VycmVudENvbXBvbmVudC5fX2hvb2tzIHx8XG5cdFx0KGN1cnJlbnRDb21wb25lbnQuX19ob29rcyA9IHtcblx0XHRcdF9saXN0OiBbXSxcblx0XHRcdF9wZW5kaW5nRWZmZWN0czogW11cblx0XHR9KTtcblxuXHRpZiAoaW5kZXggPj0gaG9va3MuX2xpc3QubGVuZ3RoKSB7XG5cdFx0aG9va3MuX2xpc3QucHVzaCh7fSk7XG5cdH1cblxuXHRyZXR1cm4gaG9va3MuX2xpc3RbaW5kZXhdO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5EaXNwYXRjaDxpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8Uz4+fSBbaW5pdGlhbFN0YXRlXVxuICogQHJldHVybnMge1tTLCAoc3RhdGU6IFMpID0+IHZvaWRdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG5cdGN1cnJlbnRIb29rID0gMTtcblx0cmV0dXJuIHVzZVJlZHVjZXIoaW52b2tlT3JSZXR1cm4sIGluaXRpYWxTdGF0ZSk7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIHt1bmtub3dufSBTXG4gKiBAdGVtcGxhdGUge3Vua25vd259IEFcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuUmVkdWNlcjxTLCBBPn0gcmVkdWNlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5EaXNwYXRjaDxpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8Uz4+fSBpbml0aWFsU3RhdGVcbiAqIEBwYXJhbSB7KGluaXRpYWxTdGF0ZTogYW55KSA9PiB2b2lkfSBbaW5pdF1cbiAqIEByZXR1cm5zIHtbIFMsIChzdGF0ZTogUykgPT4gdm9pZCBdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGluaXQpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5SZWR1Y2VySG9va1N0YXRlfSAqL1xuXHRjb25zdCBob29rU3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDIpO1xuXHRob29rU3RhdGUuX3JlZHVjZXIgPSByZWR1Y2VyO1xuXHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50KSB7XG5cdFx0aG9va1N0YXRlLl92YWx1ZSA9IFtcblx0XHRcdCFpbml0ID8gaW52b2tlT3JSZXR1cm4odW5kZWZpbmVkLCBpbml0aWFsU3RhdGUpIDogaW5pdChpbml0aWFsU3RhdGUpLFxuXG5cdFx0XHRhY3Rpb24gPT4ge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rU3RhdGUuX25leHRWYWx1ZVxuXHRcdFx0XHRcdD8gaG9va1N0YXRlLl9uZXh0VmFsdWVbMF1cblx0XHRcdFx0XHQ6IGhvb2tTdGF0ZS5fdmFsdWVbMF07XG5cdFx0XHRcdGNvbnN0IG5leHRWYWx1ZSA9IGhvb2tTdGF0ZS5fcmVkdWNlcihjdXJyZW50VmFsdWUsIGFjdGlvbik7XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9uZXh0VmFsdWUgPSBbbmV4dFZhbHVlLCBob29rU3RhdGUuX3ZhbHVlWzFdXTtcblx0XHRcdFx0XHRob29rU3RhdGUuX2NvbXBvbmVudC5zZXRTdGF0ZSh7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0aG9va1N0YXRlLl9jb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50O1xuXG5cdFx0aWYgKCFjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MpIHtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcyA9IHRydWU7XG5cdFx0XHRsZXQgcHJldlNjdSA9IGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlO1xuXHRcdFx0Y29uc3QgcHJldkNXVSA9IGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuXHRcdFx0Ly8gSWYgd2UncmUgZGVhbGluZyB3aXRoIGEgZm9yY2VkIHVwZGF0ZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCB3aWxsXG5cdFx0XHQvLyBub3QgYmUgY2FsbGVkLiBCdXQgd2UgdXNlIHRoYXQgdG8gdXBkYXRlIHRoZSBob29rIHZhbHVlcywgc28gd2Vcblx0XHRcdC8vIG5lZWQgdG8gY2FsbCBpdC5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGZ1bmN0aW9uIChwLCBzLCBjKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9mb3JjZSkge1xuXHRcdFx0XHRcdGxldCB0bXAgPSBwcmV2U2N1O1xuXHRcdFx0XHRcdC8vIENsZWFyIHRvIGF2b2lkIG90aGVyIHNDVSBob29rcyBmcm9tIGJlaW5nIGNhbGxlZFxuXHRcdFx0XHRcdHByZXZTY3UgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0dXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpO1xuXHRcdFx0XHRcdHByZXZTY3UgPSB0bXA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocHJldkNXVSkgcHJldkNXVS5jYWxsKHRoaXMsIHAsIHMsIGMpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gVGhpcyBTQ1UgaGFzIHRoZSBwdXJwb3NlIG9mIGJhaWxpbmcgb3V0IGFmdGVyIHJlcGVhdGVkIHVwZGF0ZXNcblx0XHRcdC8vIHRvIHN0YXRlZnVsIGhvb2tzLlxuXHRcdFx0Ly8gd2Ugc3RvcmUgdGhlIG5leHQgdmFsdWUgaW4gX25leHRWYWx1ZVswXSBhbmQga2VlcCBkb2luZyB0aGF0IGZvciBhbGxcblx0XHRcdC8vIHN0YXRlIHNldHRlcnMsIGlmIHdlIGhhdmUgbmV4dCBzdGF0ZXMgYW5kXG5cdFx0XHQvLyBhbGwgbmV4dCBzdGF0ZXMgd2l0aGluIGEgY29tcG9uZW50IGVuZCB1cCBiZWluZyBlcXVhbCB0byB0aGVpciBvcmlnaW5hbCBzdGF0ZVxuXHRcdFx0Ly8gd2UgYXJlIHNhZmUgdG8gYmFpbCBvdXQgZm9yIHRoaXMgc3BlY2lmaWMgY29tcG9uZW50LlxuXHRcdFx0LyoqXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudFtcInNob3VsZENvbXBvbmVudFVwZGF0ZVwiXX1cblx0XHRcdCAqL1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSAtIFdlIGRvbid0IHVzZSBUUyB0byBkb3dudHJhbnNwaWxlXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW5uZXItZGVjbGFyYXRpb25zXG5cdFx0XHRmdW5jdGlvbiB1cGRhdGVIb29rU3RhdGUocCwgcywgYykge1xuXHRcdFx0XHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MpIHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdGNvbnN0IHN0YXRlSG9va3MgPSBob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzLl9saXN0LmZpbHRlcihcblx0XHRcdFx0XHR4ID0+IHguX2NvbXBvbmVudFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGNvbnN0IGFsbEhvb2tzRW1wdHkgPSBzdGF0ZUhvb2tzLmV2ZXJ5KHggPT4gIXguX25leHRWYWx1ZSk7XG5cdFx0XHRcdC8vIFdoZW4gd2UgaGF2ZSBubyB1cGRhdGVkIGhvb2tzIGluIHRoZSBjb21wb25lbnQgd2UgaW52b2tlIHRoZSBwcmV2aW91cyBTQ1Ugb3Jcblx0XHRcdFx0Ly8gdHJhdmVyc2UgdGhlIFZET00gdHJlZSBmdXJ0aGVyLlxuXHRcdFx0XHRpZiAoYWxsSG9va3NFbXB0eSkge1xuXHRcdFx0XHRcdHJldHVybiBwcmV2U2N1ID8gcHJldlNjdS5jYWxsKHRoaXMsIHAsIHMsIGMpIDogdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBjb21wb25lbnRzIHdpdGggYSBuZXh0VmFsdWUgc2V0IHRoYXRcblx0XHRcdFx0Ly8gaGF2ZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgZXF1YWwgdG8gb25lIGFub3RoZXIgdGhpcyBwdXNoZXNcblx0XHRcdFx0Ly8gdXMgdG8gdXBkYXRlIGZ1cnRoZXIgZG93biB0aGUgdHJlZVxuXHRcdFx0XHRsZXQgc2hvdWxkVXBkYXRlID0gaG9va1N0YXRlLl9jb21wb25lbnQucHJvcHMgIT09IHA7XG5cdFx0XHRcdHN0YXRlSG9va3Muc29tZShob29rSXRlbSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tJdGVtLl92YWx1ZVswXTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gaG9va0l0ZW0uX3ZhbHVlWzBdKSBzaG91bGRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHByZXZTY3Vcblx0XHRcdFx0XHQ/IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKSB8fCBzaG91bGRVcGRhdGVcblx0XHRcdFx0XHQ6IHNob3VsZFVwZGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0Y3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSB1cGRhdGVIb29rU3RhdGU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGhvb2tTdGF0ZS5fbmV4dFZhbHVlIHx8IGhvb2tTdGF0ZS5fdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAzKTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5wdXNoKHN0YXRlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgNCk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5wdXNoKHN0YXRlKTtcblx0fVxufVxuXG4vKiogQHR5cGUgeyhpbml0aWFsVmFsdWU6IHVua25vd24pID0+IHVua25vd259ICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuXHRjdXJyZW50SG9vayA9IDU7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+ICh7IGN1cnJlbnQ6IGluaXRpYWxWYWx1ZSB9KSwgW10pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7KCkgPT4gb2JqZWN0fSBjcmVhdGVIYW5kbGVcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGVIYW5kbGUsIGFyZ3MpIHtcblx0Y3VycmVudEhvb2sgPSA2O1xuXHR1c2VMYXlvdXRFZmZlY3QoXG5cdFx0KCkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSByZWYoY3JlYXRlSGFuZGxlKCkpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0XHRcdHJlZihudWxsKTtcblx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT0gJ2Z1bmN0aW9uJykgcmVzdWx0KCk7XG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2UgaWYgKHJlZikge1xuXHRcdFx0XHRyZWYuY3VycmVudCA9IGNyZWF0ZUhhbmRsZSgpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gKHJlZi5jdXJyZW50ID0gbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcmdzID09IG51bGwgPyBhcmdzIDogYXJncy5jb25jYXQocmVmKVxuXHQpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gVFxuICogQHBhcmFtIHsoKSA9PiBUfSBmYWN0b3J5XG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge1R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZW1vKGZhY3RvcnksIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5NZW1vSG9va1N0YXRlPFQ+fSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgNyk7XG5cdGlmIChhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBmYWN0b3J5KCk7XG5cdFx0c3RhdGUuX2FyZ3MgPSBhcmdzO1xuXHRcdHN0YXRlLl9mYWN0b3J5ID0gZmFjdG9yeTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZS5fdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHsoKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGFyZ3MpIHtcblx0Y3VycmVudEhvb2sgPSA4O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiBjYWxsYmFjaywgYXJncyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RDb250ZXh0fSBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnRleHQpIHtcblx0Y29uc3QgcHJvdmlkZXIgPSBjdXJyZW50Q29tcG9uZW50LmNvbnRleHRbY29udGV4dC5faWRdO1xuXHQvLyBXZSBjb3VsZCBza2lwIHRoaXMgY2FsbCBoZXJlLCBidXQgdGhhbiB3ZSdkIG5vdCBjYWxsXG5cdC8vIGBvcHRpb25zLl9ob29rYC4gV2UgbmVlZCB0byBkbyB0aGF0IGluIG9yZGVyIHRvIG1ha2Vcblx0Ly8gdGhlIGRldnRvb2xzIGF3YXJlIG9mIHRoaXMgaG9vay5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db250ZXh0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgOSk7XG5cdC8vIFRoZSBkZXZ0b29scyBuZWVkcyBhY2Nlc3MgdG8gdGhlIGNvbnRleHQgb2JqZWN0IHRvXG5cdC8vIGJlIGFibGUgdG8gcHVsbCBvZiB0aGUgZGVmYXVsdCB2YWx1ZSB3aGVuIG5vIHByb3ZpZGVyXG5cdC8vIGlzIHByZXNlbnQgaW4gdGhlIHRyZWUuXG5cdHN0YXRlLl9jb250ZXh0ID0gY29udGV4dDtcblx0aWYgKCFwcm92aWRlcikgcmV0dXJuIGNvbnRleHQuX2RlZmF1bHRWYWx1ZTtcblx0Ly8gVGhpcyBpcyBwcm9iYWJseSBub3Qgc2FmZSB0byBjb252ZXJ0IHRvIFwiIVwiXG5cdGlmIChzdGF0ZS5fdmFsdWUgPT0gbnVsbCkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IHRydWU7XG5cdFx0cHJvdmlkZXIuc3ViKGN1cnJlbnRDb21wb25lbnQpO1xuXHR9XG5cdHJldHVybiBwcm92aWRlci5wcm9wcy52YWx1ZTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IGEgY3VzdG9tIGxhYmVsIGZvciBhIGN1c3RvbSBob29rIGZvciB0aGUgZGV2dG9vbHMgcGFuZWxcbiAqIEB0eXBlIHs8VD4odmFsdWU6IFQsIGNiPzogKHZhbHVlOiBUKSA9PiBzdHJpbmcgfCBudW1iZXIpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXIpIHtcblx0aWYgKG9wdGlvbnMudXNlRGVidWdWYWx1ZSkge1xuXHRcdG9wdGlvbnMudXNlRGVidWdWYWx1ZShcblx0XHRcdGZvcm1hdHRlciA/IGZvcm1hdHRlcih2YWx1ZSkgOiAvKiogQHR5cGUge2FueX0qLyAodmFsdWUpXG5cdFx0KTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7KGVycm9yOiB1bmtub3duLCBlcnJvckluZm86IGltcG9ydCgncHJlYWN0JykuRXJyb3JJbmZvKSA9PiB2b2lkfSBjYlxuICogQHJldHVybnMge1t1bmtub3duLCAoKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVycm9yQm91bmRhcnkoY2IpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FcnJvckJvdW5kYXJ5SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMTApO1xuXHRjb25zdCBlcnJTdGF0ZSA9IHVzZVN0YXRlKCk7XG5cdHN0YXRlLl92YWx1ZSA9IGNiO1xuXHRpZiAoIWN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2gpIHtcblx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoID0gKGVyciwgZXJyb3JJbmZvKSA9PiB7XG5cdFx0XHRpZiAoc3RhdGUuX3ZhbHVlKSBzdGF0ZS5fdmFsdWUoZXJyLCBlcnJvckluZm8pO1xuXHRcdFx0ZXJyU3RhdGVbMV0oZXJyKTtcblx0XHR9O1xuXHR9XG5cdHJldHVybiBbXG5cdFx0ZXJyU3RhdGVbMF0sXG5cdFx0KCkgPT4ge1xuXHRcdFx0ZXJyU3RhdGVbMV0odW5kZWZpbmVkKTtcblx0XHR9XG5cdF07XG59XG5cbi8qKiBAdHlwZSB7KCkgPT4gc3RyaW5nfSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUlkKCkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLklkSG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMTEpO1xuXHRpZiAoIXN0YXRlLl92YWx1ZSkge1xuXHRcdC8vIEdyYWIgZWl0aGVyIHRoZSByb290IG5vZGUgb3IgdGhlIG5lYXJlc3QgYXN5bmMgYm91bmRhcnkgbm9kZS5cblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSAqL1xuXHRcdGxldCByb290ID0gY3VycmVudENvbXBvbmVudC5fdm5vZGU7XG5cdFx0d2hpbGUgKHJvb3QgIT09IG51bGwgJiYgIXJvb3QuX21hc2sgJiYgcm9vdC5fcGFyZW50ICE9PSBudWxsKSB7XG5cdFx0XHRyb290ID0gcm9vdC5fcGFyZW50O1xuXHRcdH1cblxuXHRcdGxldCBtYXNrID0gcm9vdC5fbWFzayB8fCAocm9vdC5fbWFzayA9IFswLCAwXSk7XG5cdFx0c3RhdGUuX3ZhbHVlID0gJ1AnICsgbWFza1swXSArICctJyArIG1hc2tbMV0rKztcblx0fVxuXG5cdHJldHVybiBzdGF0ZS5fdmFsdWU7XG59XG5cbi8qKlxuICogQWZ0ZXIgcGFpbnQgZWZmZWN0cyBjb25zdW1lci5cbiAqL1xuZnVuY3Rpb24gZmx1c2hBZnRlclBhaW50RWZmZWN0cygpIHtcblx0bGV0IGNvbXBvbmVudDtcblx0d2hpbGUgKChjb21wb25lbnQgPSBhZnRlclBhaW50RWZmZWN0cy5zaGlmdCgpKSkge1xuXHRcdGNvbnN0IGhvb2tzID0gY29tcG9uZW50Ll9faG9va3M7XG5cdFx0aWYgKCFjb21wb25lbnQuX3BhcmVudERvbSB8fCAhaG9va3MpIGNvbnRpbnVlO1xuXHRcdHRyeSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmxldCBIQVNfUkFGID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PSAnZnVuY3Rpb24nO1xuXG4vKipcbiAqIFNjaGVkdWxlIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgYnJvd3NlciBoYXMgYSBjaGFuY2UgdG8gcGFpbnQgYSBuZXcgZnJhbWUuXG4gKiBEbyB0aGlzIGJ5IGNvbWJpbmluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKHJBRikgKyBzZXRUaW1lb3V0IHRvIGludm9rZSBhIGNhbGxiYWNrIGFmdGVyXG4gKiB0aGUgbmV4dCBicm93c2VyIGZyYW1lLlxuICpcbiAqIEFsc28sIHNjaGVkdWxlIGEgdGltZW91dCBpbiBwYXJhbGxlbCB0byB0aGUgdGhlIHJBRiB0byBlbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGludm9rZWRcbiAqIGV2ZW4gaWYgUkFGIGRvZXNuJ3QgZmlyZSAoZm9yIGV4YW1wbGUgaWYgdGhlIGJyb3dzZXIgdGFiIGlzIG5vdCB2aXNpYmxlKVxuICpcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJOZXh0RnJhbWUoY2FsbGJhY2spIHtcblx0Y29uc3QgZG9uZSA9ICgpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0aWYgKEhBU19SQUYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG5cdFx0c2V0VGltZW91dChjYWxsYmFjayk7XG5cdH07XG5cdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRvbmUsIFJBRl9USU1FT1VUKTtcblxuXHRsZXQgcmFmO1xuXHRpZiAoSEFTX1JBRikge1xuXHRcdHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkb25lKTtcblx0fVxufVxuXG4vLyBOb3RlOiBpZiBzb21lb25lIHVzZWQgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSxcbi8vIHRoZW4gZWZmZWN0cyB3aWxsIEFMV0FZUyBydW4gb24gdGhlIE5FWFQgZnJhbWUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBvbmUsIGluY3VycmluZyBhIH4xNm1zIGRlbGF5LlxuLy8gUGVyaGFwcyB0aGlzIGlzIG5vdCBzdWNoIGEgYmlnIGRlYWwuXG4vKipcbiAqIFNjaGVkdWxlIGFmdGVyUGFpbnRFZmZlY3RzIGZsdXNoIGFmdGVyIHRoZSBicm93c2VyIHBhaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5ld1F1ZXVlTGVuZ3RoXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gYWZ0ZXJQYWludChuZXdRdWV1ZUxlbmd0aCkge1xuXHRpZiAobmV3UXVldWVMZW5ndGggPT09IDEgfHwgcHJldlJhZiAhPT0gb3B0aW9ucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcblx0XHRwcmV2UmFmID0gb3B0aW9ucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cdFx0KHByZXZSYWYgfHwgYWZ0ZXJOZXh0RnJhbWUpKGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Ib29rU3RhdGV9IGhvb2tcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbnZva2VDbGVhbnVwKGhvb2spIHtcblx0Ly8gQSBob29rIGNsZWFudXAgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0bGV0IGNsZWFudXAgPSBob29rLl9jbGVhbnVwO1xuXHRpZiAodHlwZW9mIGNsZWFudXAgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGhvb2suX2NsZWFudXAgPSB1bmRlZmluZWQ7XG5cdFx0Y2xlYW51cCgpO1xuXHR9XG5cblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogSW52b2tlIGEgSG9vaydzIGVmZmVjdFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9IGhvb2tcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbnZva2VFZmZlY3QoaG9vaykge1xuXHQvLyBBIGhvb2sgY2FsbCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRob29rLl9jbGVhbnVwID0gaG9vay5fdmFsdWUoKTtcblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogQHBhcmFtIHt1bmtub3duW119IG9sZEFyZ3NcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBuZXdBcmdzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuXHRyZXR1cm4gKFxuXHRcdCFvbGRBcmdzIHx8XG5cdFx0b2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3MubGVuZ3RoIHx8XG5cdFx0bmV3QXJncy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKVxuXHQpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSBBcmdcbiAqIEBwYXJhbSB7QXJnfSBhcmdcbiAqIEBwYXJhbSB7KGFyZzogQXJnKSA9PiBhbnl9IGZcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGludm9rZU9yUmV0dXJuKGFyZywgZikge1xuXHRyZXR1cm4gdHlwZW9mIGYgPT0gJ2Z1bmN0aW9uJyA/IGYoYXJnKSA6IGY7XG59XG4iLCAidmFyIG49ZnVuY3Rpb24odCxzLHIsZSl7dmFyIHU7c1swXT0wO2Zvcih2YXIgaD0xO2g8cy5sZW5ndGg7aCsrKXt2YXIgcD1zW2grK10sYT1zW2hdPyhzWzBdfD1wPzE6MixyW3NbaCsrXV0pOnNbKytoXTszPT09cD9lWzBdPWE6ND09PXA/ZVsxXT1PYmplY3QuYXNzaWduKGVbMV18fHt9LGEpOjU9PT1wPyhlWzFdPWVbMV18fHt9KVtzWysraF1dPWE6Nj09PXA/ZVsxXVtzWysraF1dKz1hK1wiXCI6cD8odT10LmFwcGx5KGEsbih0LGEscixbXCJcIixudWxsXSkpLGUucHVzaCh1KSxhWzBdP3NbMF18PTI6KHNbaC0yXT0wLHNbaF09dSkpOmUucHVzaChhKX1yZXR1cm4gZX0sdD1uZXcgTWFwO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpe3ZhciByPXQuZ2V0KHRoaXMpO3JldHVybiByfHwocj1uZXcgTWFwLHQuc2V0KHRoaXMscikpLChyPW4odGhpcyxyLmdldChzKXx8KHIuc2V0KHMscj1mdW5jdGlvbihuKXtmb3IodmFyIHQscyxyPTEsZT1cIlwiLHU9XCJcIixoPVswXSxwPWZ1bmN0aW9uKG4pezE9PT1yJiYobnx8KGU9ZS5yZXBsYWNlKC9eXFxzKlxcblxccyp8XFxzKlxcblxccyokL2csXCJcIikpKT9oLnB1c2goMCxuLGUpOjM9PT1yJiYobnx8ZSk/KGgucHVzaCgzLG4sZSkscj0yKToyPT09ciYmXCIuLi5cIj09PWUmJm4/aC5wdXNoKDQsbiwwKToyPT09ciYmZSYmIW4/aC5wdXNoKDUsMCwhMCxlKTpyPj01JiYoKGV8fCFuJiY1PT09cikmJihoLnB1c2gociwwLGUscykscj02KSxuJiYoaC5wdXNoKHIsbiwwLHMpLHI9NikpLGU9XCJcIn0sYT0wO2E8bi5sZW5ndGg7YSsrKXthJiYoMT09PXImJnAoKSxwKGEpKTtmb3IodmFyIGw9MDtsPG5bYV0ubGVuZ3RoO2wrKyl0PW5bYV1bbF0sMT09PXI/XCI8XCI9PT10PyhwKCksaD1baF0scj0zKTplKz10OjQ9PT1yP1wiLS1cIj09PWUmJlwiPlwiPT09dD8ocj0xLGU9XCJcIik6ZT10K2VbMF06dT90PT09dT91PVwiXCI6ZSs9dDonXCInPT09dHx8XCInXCI9PT10P3U9dDpcIj5cIj09PXQ/KHAoKSxyPTEpOnImJihcIj1cIj09PXQ/KHI9NSxzPWUsZT1cIlwiKTpcIi9cIj09PXQmJihyPDV8fFwiPlwiPT09blthXVtsKzFdKT8ocCgpLDM9PT1yJiYoaD1oWzBdKSxyPWgsKGg9aFswXSkucHVzaCgyLDAscikscj0wKTpcIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcblwiPT09dHx8XCJcXHJcIj09PXQ/KHAoKSxyPTIpOmUrPXQpLDM9PT1yJiZcIiEtLVwiPT09ZSYmKHI9NCxoPWhbMF0pfXJldHVybiBwKCksaH0ocykpLHIpLGFyZ3VtZW50cyxbXSkpLmxlbmd0aD4xP3I6clswXX1cbiIsICJpbXBvcnR7aCBhcyByLENvbXBvbmVudCBhcyBvLHJlbmRlciBhcyB0fWZyb21cInByZWFjdFwiO2V4cG9ydHtoLHJlbmRlcixDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7aW1wb3J0IGUgZnJvbVwiaHRtXCI7dmFyIG09ZS5iaW5kKHIpO2V4cG9ydHttIGFzIGh0bWx9O1xuIiwgIi8qKlxuKiBDb3B5cmlnaHQgKGMpIDIwMjUsIExlb24gU29yb2tpblxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLiAoTUlUIExpY2Vuc2VkKVxuKlxuKiB1UGxvdC5qcyAoXHUwM0JDUGxvdClcbiogQSBzbWFsbCwgZmFzdCBjaGFydCBmb3IgdGltZSBzZXJpZXMsIGxpbmVzLCBhcmVhcywgb2hsYyAmIGJhcnNcbiogaHR0cHM6Ly9naXRodWIuY29tL2xlZW9uaXlhL3VQbG90ICh2MS42LjMyKVxuKi9cblxuY29uc3QgRkVBVF9USU1FICAgICAgICAgID0gdHJ1ZTtcblxuY29uc3QgcHJlID0gXCJ1LVwiO1xuXG5jb25zdCBVUExPVCAgICAgICAgICA9ICAgICAgIFwidXBsb3RcIjtcbmNvbnN0IE9SSV9IWiAgICAgICAgID0gcHJlICsgXCJoelwiO1xuY29uc3QgT1JJX1ZUICAgICAgICAgPSBwcmUgKyBcInZ0XCI7XG5jb25zdCBUSVRMRSAgICAgICAgICA9IHByZSArIFwidGl0bGVcIjtcbmNvbnN0IFdSQVAgICAgICAgICAgID0gcHJlICsgXCJ3cmFwXCI7XG5jb25zdCBVTkRFUiAgICAgICAgICA9IHByZSArIFwidW5kZXJcIjtcbmNvbnN0IE9WRVIgICAgICAgICAgID0gcHJlICsgXCJvdmVyXCI7XG5jb25zdCBBWElTICAgICAgICAgICA9IHByZSArIFwiYXhpc1wiO1xuY29uc3QgT0ZGICAgICAgICAgICAgPSBwcmUgKyBcIm9mZlwiO1xuY29uc3QgU0VMRUNUICAgICAgICAgPSBwcmUgKyBcInNlbGVjdFwiO1xuY29uc3QgQ1VSU09SX1ggICAgICAgPSBwcmUgKyBcImN1cnNvci14XCI7XG5jb25zdCBDVVJTT1JfWSAgICAgICA9IHByZSArIFwiY3Vyc29yLXlcIjtcbmNvbnN0IENVUlNPUl9QVCAgICAgID0gcHJlICsgXCJjdXJzb3ItcHRcIjtcbmNvbnN0IExFR0VORCAgICAgICAgID0gcHJlICsgXCJsZWdlbmRcIjtcbmNvbnN0IExFR0VORF9MSVZFICAgID0gcHJlICsgXCJsaXZlXCI7XG5jb25zdCBMRUdFTkRfSU5MSU5FICA9IHByZSArIFwiaW5saW5lXCI7XG5jb25zdCBMRUdFTkRfU0VSSUVTICA9IHByZSArIFwic2VyaWVzXCI7XG5jb25zdCBMRUdFTkRfTUFSS0VSICA9IHByZSArIFwibWFya2VyXCI7XG5jb25zdCBMRUdFTkRfTEFCRUwgICA9IHByZSArIFwibGFiZWxcIjtcbmNvbnN0IExFR0VORF9WQUxVRSAgID0gcHJlICsgXCJ2YWx1ZVwiO1xuXG5jb25zdCBXSURUSCAgICAgICA9IFwid2lkdGhcIjtcbmNvbnN0IEhFSUdIVCAgICAgID0gXCJoZWlnaHRcIjtcbmNvbnN0IFRPUCAgICAgICAgID0gXCJ0b3BcIjtcbmNvbnN0IEJPVFRPTSAgICAgID0gXCJib3R0b21cIjtcbmNvbnN0IExFRlQgICAgICAgID0gXCJsZWZ0XCI7XG5jb25zdCBSSUdIVCAgICAgICA9IFwicmlnaHRcIjtcbmNvbnN0IGhleEJsYWNrICAgID0gXCIjMDAwXCI7XG5jb25zdCB0cmFuc3BhcmVudCA9IGhleEJsYWNrICsgXCIwXCI7XG5cbmNvbnN0IG1vdXNlbW92ZSAgID0gXCJtb3VzZW1vdmVcIjtcbmNvbnN0IG1vdXNlZG93biAgID0gXCJtb3VzZWRvd25cIjtcbmNvbnN0IG1vdXNldXAgICAgID0gXCJtb3VzZXVwXCI7XG5jb25zdCBtb3VzZWVudGVyICA9IFwibW91c2VlbnRlclwiO1xuY29uc3QgbW91c2VsZWF2ZSAgPSBcIm1vdXNlbGVhdmVcIjtcbmNvbnN0IGRibGNsaWNrICAgID0gXCJkYmxjbGlja1wiO1xuY29uc3QgcmVzaXplICAgICAgPSBcInJlc2l6ZVwiO1xuY29uc3Qgc2Nyb2xsICAgICAgPSBcInNjcm9sbFwiO1xuXG5jb25zdCBjaGFuZ2UgICAgICA9IFwiY2hhbmdlXCI7XG5jb25zdCBkcHB4Y2hhbmdlICA9IFwiZHBweGNoYW5nZVwiO1xuXG5jb25zdCBMRUdFTkRfRElTUCA9IFwiLS1cIjtcblxuY29uc3QgZG9tRW52ID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJztcblxuY29uc3QgZG9jID0gZG9tRW52ID8gZG9jdW1lbnQgIDogbnVsbDtcbmNvbnN0IHdpbiA9IGRvbUVudiA/IHdpbmRvdyAgICA6IG51bGw7XG5jb25zdCBuYXYgPSBkb21FbnYgPyBuYXZpZ2F0b3IgOiBudWxsO1xuXG5sZXQgcHhSYXRpbztcblxuLy9leHBvcnQgY29uc3QgY2FuSG92ZXIgPSBkb21FbnYgJiYgIXdpbi5tYXRjaE1lZGlhKCcoaG92ZXI6IG5vbmUpJykubWF0Y2hlcztcblxubGV0IHF1ZXJ5O1xuXG5mdW5jdGlvbiBzZXRQeFJhdGlvKCkge1xuXHRsZXQgX3B4UmF0aW8gPSBkZXZpY2VQaXhlbFJhdGlvO1xuXG5cdC8vIGR1cmluZyBwcmludCBwcmV2aWV3LCBDaHJvbWUgZmlyZXMgb2ZmIHRoZXNlIGRwcHggcXVlcmllcyBldmVuIHdpdGhvdXQgY2hhbmdlc1xuXHRpZiAocHhSYXRpbyAhPSBfcHhSYXRpbykge1xuXHRcdHB4UmF0aW8gPSBfcHhSYXRpbztcblxuXHRcdHF1ZXJ5ICYmIG9mZihjaGFuZ2UsIHF1ZXJ5LCBzZXRQeFJhdGlvKTtcblx0XHRxdWVyeSA9IG1hdGNoTWVkaWEoYChtaW4tcmVzb2x1dGlvbjogJHtweFJhdGlvIC0gMC4wMDF9ZHBweCkgYW5kIChtYXgtcmVzb2x1dGlvbjogJHtweFJhdGlvICsgMC4wMDF9ZHBweClgKTtcblx0XHRvbihjaGFuZ2UsIHF1ZXJ5LCBzZXRQeFJhdGlvKTtcblxuXHRcdHdpbi5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChkcHB4Y2hhbmdlKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGMpIHtcblx0aWYgKGMgIT0gbnVsbCkge1xuXHRcdGxldCBjbCA9IGVsLmNsYXNzTGlzdDtcblx0XHQhY2wuY29udGFpbnMoYykgJiYgY2wuYWRkKGMpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbUNsYXNzKGVsLCBjKSB7XG5cdGxldCBjbCA9IGVsLmNsYXNzTGlzdDtcblx0Y2wuY29udGFpbnMoYykgJiYgY2wucmVtb3ZlKGMpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZVB4KGVsLCBuYW1lLCB2YWx1ZSkge1xuXHRlbC5zdHlsZVtuYW1lXSA9IHZhbHVlICsgXCJweFwiO1xufVxuXG5mdW5jdGlvbiBwbGFjZVRhZyh0YWcsIGNscywgdGFyZywgcmVmRWwpIHtcblx0bGV0IGVsID0gZG9jLmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuXHRpZiAoY2xzICE9IG51bGwpXG5cdFx0YWRkQ2xhc3MoZWwsIGNscyk7XG5cblx0aWYgKHRhcmcgIT0gbnVsbClcblx0XHR0YXJnLmluc2VydEJlZm9yZShlbCwgcmVmRWwpO1xuXG5cdHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gcGxhY2VEaXYoY2xzLCB0YXJnKSB7XG5cdHJldHVybiBwbGFjZVRhZyhcImRpdlwiLCBjbHMsIHRhcmcpO1xufVxuXG5jb25zdCB4Zm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gZWxUcmFucyhlbCwgeFBvcywgeVBvcywgeE1heCwgeU1heCkge1xuXHRsZXQgeGZvcm0gPSBcInRyYW5zbGF0ZShcIiArIHhQb3MgKyBcInB4LFwiICsgeVBvcyArIFwicHgpXCI7XG5cdGxldCB4Zm9ybU9sZCA9IHhmb3JtQ2FjaGUuZ2V0KGVsKTtcblxuXHRpZiAoeGZvcm0gIT0geGZvcm1PbGQpIHtcblx0XHRlbC5zdHlsZS50cmFuc2Zvcm0gPSB4Zm9ybTtcblx0XHR4Zm9ybUNhY2hlLnNldChlbCwgeGZvcm0pO1xuXG5cdFx0aWYgKHhQb3MgPCAwIHx8IHlQb3MgPCAwIHx8IHhQb3MgPiB4TWF4IHx8IHlQb3MgPiB5TWF4KVxuXHRcdFx0YWRkQ2xhc3MoZWwsIE9GRik7XG5cdFx0ZWxzZVxuXHRcdFx0cmVtQ2xhc3MoZWwsIE9GRik7XG5cdH1cbn1cblxuY29uc3QgY29sb3JDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGVsQ29sb3IoZWwsIGJhY2tncm91bmQsIGJvcmRlckNvbG9yKSB7XG5cdGxldCBuZXdDb2xvciA9IGJhY2tncm91bmQgKyBib3JkZXJDb2xvcjtcblx0bGV0IG9sZENvbG9yID0gY29sb3JDYWNoZS5nZXQoZWwpO1xuXG5cdGlmIChuZXdDb2xvciAhPSBvbGRDb2xvcikge1xuXHRcdGNvbG9yQ2FjaGUuc2V0KGVsLCBuZXdDb2xvcik7XG5cdFx0ZWwuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cdFx0ZWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcblx0fVxufVxuXG5jb25zdCBzaXplQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBlbFNpemUoZWwsIG5ld1dpZCwgbmV3SGd0LCBjZW50ZXJlZCkge1xuXHRsZXQgbmV3U2l6ZSA9IG5ld1dpZCArIFwiXCIgKyBuZXdIZ3Q7XG5cdGxldCBvbGRTaXplID0gc2l6ZUNhY2hlLmdldChlbCk7XG5cblx0aWYgKG5ld1NpemUgIT0gb2xkU2l6ZSkge1xuXHRcdHNpemVDYWNoZS5zZXQoZWwsIG5ld1NpemUpO1xuXHRcdGVsLnN0eWxlLmhlaWdodCA9IG5ld0hndCArIFwicHhcIjtcblx0XHRlbC5zdHlsZS53aWR0aCA9IG5ld1dpZCArIFwicHhcIjtcblx0XHRlbC5zdHlsZS5tYXJnaW5MZWZ0ID0gY2VudGVyZWQgPyAtbmV3V2lkLzIgKyBcInB4XCIgOiAwO1xuXHRcdGVsLnN0eWxlLm1hcmdpblRvcCA9IGNlbnRlcmVkID8gLW5ld0hndC8yICsgXCJweFwiIDogMDtcblx0fVxufVxuXG5jb25zdCBldk9wdHMgPSB7cGFzc2l2ZTogdHJ1ZX07XG5jb25zdCBldk9wdHMyID0gey4uLmV2T3B0cywgY2FwdHVyZTogdHJ1ZX07XG5cbmZ1bmN0aW9uIG9uKGV2LCBlbCwgY2IsIGNhcHQpIHtcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihldiwgY2IsIGNhcHQgPyBldk9wdHMyIDogZXZPcHRzKTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2LCBlbCwgY2IsIGNhcHQpIHtcblx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldiwgY2IsIGV2T3B0cyk7XG59XG5cbmRvbUVudiAmJiBzZXRQeFJhdGlvKCk7XG5cbi8vIGJpbmFyeSBzZWFyY2ggZm9yIGluZGV4IG9mIGNsb3Nlc3QgdmFsdWVcbmZ1bmN0aW9uIGNsb3Nlc3RJZHgobnVtLCBhcnIsIGxvLCBoaSkge1xuXHRsZXQgbWlkO1xuXHRsbyA9IGxvIHx8IDA7XG5cdGhpID0gaGkgfHwgYXJyLmxlbmd0aCAtIDE7XG5cdGxldCBiaXR3aXNlID0gaGkgPD0gMjE0NzQ4MzY0NztcblxuXHR3aGlsZSAoaGkgLSBsbyA+IDEpIHtcblx0XHRtaWQgPSBiaXR3aXNlID8gKGxvICsgaGkpID4+IDEgOiBmbG9vcigobG8gKyBoaSkgLyAyKTtcblxuXHRcdGlmIChhcnJbbWlkXSA8IG51bSlcblx0XHRcdGxvID0gbWlkO1xuXHRcdGVsc2Vcblx0XHRcdGhpID0gbWlkO1xuXHR9XG5cblx0aWYgKG51bSAtIGFycltsb10gPD0gYXJyW2hpXSAtIG51bSlcblx0XHRyZXR1cm4gbG87XG5cblx0cmV0dXJuIGhpO1xufVxuXG5mdW5jdGlvbiBtYWtlSW5kZXhPZnMocHJlZGljYXRlKSB7XG5cdCBsZXQgaW5kZXhPZnMgPSAoZGF0YSwgX2kwLCBfaTEpID0+IHtcblx0XHRsZXQgaTAgPSAtMTtcblx0XHRsZXQgaTEgPSAtMTtcblxuXHRcdGZvciAobGV0IGkgPSBfaTA7IGkgPD0gX2kxOyBpKyspIHtcblx0XHRcdGlmIChwcmVkaWNhdGUoZGF0YVtpXSkpIHtcblx0XHRcdFx0aTAgPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gX2kxOyBpID49IF9pMDsgaS0tKSB7XG5cdFx0XHRpZiAocHJlZGljYXRlKGRhdGFbaV0pKSB7XG5cdFx0XHRcdGkxID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtpMCwgaTFdO1xuXHQgfTtcblxuXHQgcmV0dXJuIGluZGV4T2ZzO1xufVxuXG5jb25zdCBub3ROdWxsaXNoID0gdiA9PiB2ICE9IG51bGw7XG5jb25zdCBpc1Bvc2l0aXZlID0gdiA9PiB2ICE9IG51bGwgJiYgdiA+IDA7XG5cbmNvbnN0IG5vbk51bGxJZHhzID0gbWFrZUluZGV4T2ZzKG5vdE51bGxpc2gpO1xuY29uc3QgcG9zaXRpdmVJZHhzID0gbWFrZUluZGV4T2ZzKGlzUG9zaXRpdmUpO1xuXG5mdW5jdGlvbiBnZXRNaW5NYXgoZGF0YSwgX2kwLCBfaTEsIHNvcnRlZCA9IDAsIGxvZyA9IGZhbHNlKSB7XG4vL1x0Y29uc29sZS5sb2coXCJnZXRNaW5NYXgoKVwiKTtcblxuXHRsZXQgZ2V0RWRnZUlkeHMgPSBsb2cgPyBwb3NpdGl2ZUlkeHMgOiBub25OdWxsSWR4cztcblx0bGV0IHByZWRpY2F0ZSA9IGxvZyA/IGlzUG9zaXRpdmUgOiBub3ROdWxsaXNoO1xuXG5cdFtfaTAsIF9pMV0gPSBnZXRFZGdlSWR4cyhkYXRhLCBfaTAsIF9pMSk7XG5cblx0bGV0IF9taW4gPSBkYXRhW19pMF07XG5cdGxldCBfbWF4ID0gZGF0YVtfaTBdO1xuXG5cdGlmIChfaTAgPiAtMSkge1xuXHRcdGlmIChzb3J0ZWQgPT0gMSkge1xuXHRcdFx0X21pbiA9IGRhdGFbX2kwXTtcblx0XHRcdF9tYXggPSBkYXRhW19pMV07XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHNvcnRlZCA9PSAtMSkge1xuXHRcdFx0X21pbiA9IGRhdGFbX2kxXTtcblx0XHRcdF9tYXggPSBkYXRhW19pMF07XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Zm9yIChsZXQgaSA9IF9pMDsgaSA8PSBfaTE7IGkrKykge1xuXHRcdFx0XHRsZXQgdiA9IGRhdGFbaV07XG5cblx0XHRcdFx0aWYgKHByZWRpY2F0ZSh2KSkge1xuXHRcdFx0XHRcdGlmICh2IDwgX21pbilcblx0XHRcdFx0XHRcdF9taW4gPSB2O1xuXHRcdFx0XHRcdGVsc2UgaWYgKHYgPiBfbWF4KVxuXHRcdFx0XHRcdFx0X21heCA9IHY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW19taW4gPz8gaW5mLCBfbWF4ID8/IC1pbmZdOyAvLyB0b2RvOiBmaXggdG8gcmV0dXJuIG51bGxzXG59XG5cbmZ1bmN0aW9uIHJhbmdlTG9nKG1pbiwgbWF4LCBiYXNlLCBmdWxsTWFncykge1xuXHRsZXQgbWluU2lnbiA9IHNpZ24obWluKTtcblx0bGV0IG1heFNpZ24gPSBzaWduKG1heCk7XG5cblx0aWYgKG1pbiA9PSBtYXgpIHtcblx0XHRpZiAobWluU2lnbiA9PSAtMSkge1xuXHRcdFx0bWluICo9IGJhc2U7XG5cdFx0XHRtYXggLz0gYmFzZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRtaW4gLz0gYmFzZTtcblx0XHRcdG1heCAqPSBiYXNlO1xuXHRcdH1cblx0fVxuXG5cdGxldCBsb2dGbiA9IGJhc2UgPT0gMTAgPyBsb2cxMCA6IGxvZzI7XG5cblx0bGV0IGdyb3dNaW5BYnMgPSBtaW5TaWduID09IDEgPyBmbG9vciA6IGNlaWw7XG5cdGxldCBncm93TWF4QWJzID0gbWF4U2lnbiA9PSAxID8gY2VpbCA6IGZsb29yO1xuXG5cdGxldCBtaW5FeHAgPSBncm93TWluQWJzKGxvZ0ZuKGFicyhtaW4pKSk7XG5cdGxldCBtYXhFeHAgPSBncm93TWF4QWJzKGxvZ0ZuKGFicyhtYXgpKSk7XG5cblx0bGV0IG1pbkluY3IgPSBwb3coYmFzZSwgbWluRXhwKTtcblx0bGV0IG1heEluY3IgPSBwb3coYmFzZSwgbWF4RXhwKTtcblxuXHQvLyBmaXggdmFsdWVzIGxpa2UgTWF0aC5wb3coMTAsIC01KSA9PT0gMC4wMDAwMDk5OTk5OTk5OTk5OTk5OTlcblx0aWYgKGJhc2UgPT0gMTApIHtcblx0XHRpZiAobWluRXhwIDwgMClcblx0XHRcdG1pbkluY3IgPSByb3VuZERlYyhtaW5JbmNyLCAtbWluRXhwKTtcblx0XHRpZiAobWF4RXhwIDwgMClcblx0XHRcdG1heEluY3IgPSByb3VuZERlYyhtYXhJbmNyLCAtbWF4RXhwKTtcblx0fVxuXG5cdGlmIChmdWxsTWFncyB8fCBiYXNlID09IDIpIHtcblx0XHRtaW4gPSBtaW5JbmNyICogbWluU2lnbjtcblx0XHRtYXggPSBtYXhJbmNyICogbWF4U2lnbjtcblx0fVxuXHRlbHNlIHtcblx0XHRtaW4gPSBpbmNyUm91bmREbihtaW4sIG1pbkluY3IpO1xuXHRcdG1heCA9IGluY3JSb3VuZFVwKG1heCwgbWF4SW5jcik7XG5cdH1cblxuXHRyZXR1cm4gW21pbiwgbWF4XTtcbn1cblxuZnVuY3Rpb24gcmFuZ2VBc2luaChtaW4sIG1heCwgYmFzZSwgZnVsbE1hZ3MpIHtcblx0bGV0IG1pbk1heCA9IHJhbmdlTG9nKG1pbiwgbWF4LCBiYXNlLCBmdWxsTWFncyk7XG5cblx0aWYgKG1pbiA9PSAwKVxuXHRcdG1pbk1heFswXSA9IDA7XG5cblx0aWYgKG1heCA9PSAwKVxuXHRcdG1pbk1heFsxXSA9IDA7XG5cblx0cmV0dXJuIG1pbk1heDtcbn1cblxuY29uc3QgcmFuZ2VQYWQgPSAwLjE7XG5cbmNvbnN0IGF1dG9SYW5nZVBhcnQgPSB7XG5cdG1vZGU6IDMsXG5cdHBhZDogcmFuZ2VQYWQsXG59O1xuXG5jb25zdCBfZXFSYW5nZVBhcnQgPSB7XG5cdHBhZDogIDAsXG5cdHNvZnQ6IG51bGwsXG5cdG1vZGU6IDAsXG59O1xuXG5jb25zdCBfZXFSYW5nZSA9IHtcblx0bWluOiBfZXFSYW5nZVBhcnQsXG5cdG1heDogX2VxUmFuZ2VQYXJ0LFxufTtcblxuLy8gdGhpcyBlbnN1cmVzIHRoYXQgbm9uLXRlbXBvcmFsL251bWVyaWMgeS1heGVzIGdldCBtdWx0aXBsZS1zbmFwcGVkIHBhZGRpbmcgYWRkZWQgYWJvdmUvYmVsb3dcbi8vIFRPRE86IGFsc28gYWNjb3VudCBmb3IgaW5jcnMgd2hlbiBzbmFwcGluZyB0byBlbnN1cmUgdG9wIG9mIGF4aXMgZ2V0cyBhIHRpY2sgJiB2YWx1ZVxuZnVuY3Rpb24gcmFuZ2VOdW0oX21pbiwgX21heCwgbXVsdCwgZXh0cmEpIHtcblx0aWYgKGlzT2JqKG11bHQpKVxuXHRcdHJldHVybiBfcmFuZ2VOdW0oX21pbiwgX21heCwgbXVsdCk7XG5cblx0X2VxUmFuZ2VQYXJ0LnBhZCAgPSBtdWx0O1xuXHRfZXFSYW5nZVBhcnQuc29mdCA9IGV4dHJhID8gMCA6IG51bGw7XG5cdF9lcVJhbmdlUGFydC5tb2RlID0gZXh0cmEgPyAzIDogMDtcblxuXHRyZXR1cm4gX3JhbmdlTnVtKF9taW4sIF9tYXgsIF9lcVJhbmdlKTtcbn1cblxuLy8gbnVsbGlzaCBjb2FsZXNjZVxuZnVuY3Rpb24gaWZOdWxsKGxoLCByaCkge1xuXHRyZXR1cm4gbGggPT0gbnVsbCA/IHJoIDogbGg7XG59XG5cbi8vIGNoZWNrcyBpZiBnaXZlbiBpbmRleCByYW5nZSBpbiBhbiBhcnJheSBjb250YWlucyBhIG5vbi1udWxsIHZhbHVlXG4vLyBha2EgYSByYW5nZS1ib3VuZGVkIEFycmF5LnNvbWUoKVxuZnVuY3Rpb24gaGFzRGF0YShkYXRhLCBpZHgwLCBpZHgxKSB7XG5cdGlkeDAgPSBpZk51bGwoaWR4MCwgMCk7XG5cdGlkeDEgPSBpZk51bGwoaWR4MSwgZGF0YS5sZW5ndGggLSAxKTtcblxuXHR3aGlsZSAoaWR4MCA8PSBpZHgxKSB7XG5cdFx0aWYgKGRhdGFbaWR4MF0gIT0gbnVsbClcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGlkeDArKztcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3JhbmdlTnVtKF9taW4sIF9tYXgsIGNmZykge1xuXHRsZXQgY21pbiA9IGNmZy5taW47XG5cdGxldCBjbWF4ID0gY2ZnLm1heDtcblxuXHRsZXQgcGFkTWluID0gaWZOdWxsKGNtaW4ucGFkLCAwKTtcblx0bGV0IHBhZE1heCA9IGlmTnVsbChjbWF4LnBhZCwgMCk7XG5cblx0bGV0IGhhcmRNaW4gPSBpZk51bGwoY21pbi5oYXJkLCAtaW5mKTtcblx0bGV0IGhhcmRNYXggPSBpZk51bGwoY21heC5oYXJkLCAgaW5mKTtcblxuXHRsZXQgc29mdE1pbiA9IGlmTnVsbChjbWluLnNvZnQsICBpbmYpO1xuXHRsZXQgc29mdE1heCA9IGlmTnVsbChjbWF4LnNvZnQsIC1pbmYpO1xuXG5cdGxldCBzb2Z0TWluTW9kZSA9IGlmTnVsbChjbWluLm1vZGUsIDApO1xuXHRsZXQgc29mdE1heE1vZGUgPSBpZk51bGwoY21heC5tb2RlLCAwKTtcblxuXHRsZXQgZGVsdGEgPSBfbWF4IC0gX21pbjtcblx0bGV0IGRlbHRhTWFnID0gbG9nMTAoZGVsdGEpO1xuXG5cdGxldCBzY2FsYXJNYXggPSBtYXgoYWJzKF9taW4pLCBhYnMoX21heCkpO1xuXHRsZXQgc2NhbGFyTWFnID0gbG9nMTAoc2NhbGFyTWF4KTtcblxuXHRsZXQgc2NhbGFyTWFnRGVsdGEgPSBhYnMoc2NhbGFyTWFnIC0gZGVsdGFNYWcpO1xuXG5cdC8vIHRoaXMgaGFuZGxlcyBzaXR1YXRpb25zIGxpa2UgODkuNywgODkuNjk5OTk5OTk5OTk5OTlcblx0Ly8gYnkgYXNzdW1pbmcgMC4wMDF4IGRlbHRhcyBhcmUgcHJlY2lzaW9uIGVycm9yc1xuLy9cdGlmIChkZWx0YSA+IDAgJiYgZGVsdGEgPCBhYnMoX21heCkgLyAxZTMpXG4vL1x0XHRkZWx0YSA9IDA7XG5cblx0Ly8gdHJlYXQgZGF0YSBhcyBmbGF0IGlmIGRlbHRhIGlzIGxlc3MgdGhhbiAxZS0yNFxuXHQvLyBvciByYW5nZSBpcyAxMSsgb3JkZXJzIG9mIG1hZ25pdHVkZSBiZWxvdyByYXcgdmFsdWVzLCBlLmcuIDk5OTk5OTk5Ljk5OTk5OTk2IC0gMTAwMDAwMDAwLjAwMDAwMDA0XG5cdGlmIChkZWx0YSA8IDFlLTI0IHx8IHNjYWxhck1hZ0RlbHRhID4gMTApIHtcblx0XHRkZWx0YSA9IDA7XG5cblx0XHQvLyBpZiBzb2Z0IG1vZGUgaXMgMiBhbmQgYWxsIHZhbHMgYXJlIGZsYXQgYXQgMCwgYXZvaWQgdGhlIDAuMSAqIDFlMyBmYWxsYmFja1xuXHRcdC8vIHRoaXMgcHJldmVudHMgMCwwLDAgZnJvbSByYW5naW5nIHRvIC0xMDAsMTAwIHdoZW4gc29mdE1pbi9zb2Z0TWF4IGFyZSAtMSwxXG5cdFx0aWYgKF9taW4gPT0gMCB8fCBfbWF4ID09IDApIHtcblx0XHRcdGRlbHRhID0gMWUtMjQ7XG5cblx0XHRcdGlmIChzb2Z0TWluTW9kZSA9PSAyICYmIHNvZnRNaW4gIT0gaW5mKVxuXHRcdFx0XHRwYWRNaW4gPSAwO1xuXG5cdFx0XHRpZiAoc29mdE1heE1vZGUgPT0gMiAmJiBzb2Z0TWF4ICE9IC1pbmYpXG5cdFx0XHRcdHBhZE1heCA9IDA7XG5cdFx0fVxuXHR9XG5cblx0bGV0IG5vblplcm9EZWx0YSA9IGRlbHRhIHx8IHNjYWxhck1heCB8fCAxZTM7XG5cdGxldCBtYWcgICAgICAgICAgPSBsb2cxMChub25aZXJvRGVsdGEpO1xuXHRsZXQgYmFzZSAgICAgICAgID0gcG93KDEwLCBmbG9vcihtYWcpKTtcblxuXHRsZXQgX3BhZE1pbiAgPSBub25aZXJvRGVsdGEgKiAoZGVsdGEgPT0gMCA/IChfbWluID09IDAgPyAuMSA6IDEpIDogcGFkTWluKTtcblx0bGV0IF9uZXdNaW4gID0gcm91bmREZWMoaW5jclJvdW5kRG4oX21pbiAtIF9wYWRNaW4sIGJhc2UvMTApLCAyNCk7XG5cdGxldCBfc29mdE1pbiA9IF9taW4gPj0gc29mdE1pbiAmJiAoc29mdE1pbk1vZGUgPT0gMSB8fCBzb2Z0TWluTW9kZSA9PSAzICYmIF9uZXdNaW4gPD0gc29mdE1pbiB8fCBzb2Z0TWluTW9kZSA9PSAyICYmIF9uZXdNaW4gPj0gc29mdE1pbikgPyBzb2Z0TWluIDogaW5mO1xuXHRsZXQgbWluTGltICAgPSBtYXgoaGFyZE1pbiwgX25ld01pbiA8IF9zb2Z0TWluICYmIF9taW4gPj0gX3NvZnRNaW4gPyBfc29mdE1pbiA6IG1pbihfc29mdE1pbiwgX25ld01pbikpO1xuXG5cdGxldCBfcGFkTWF4ICA9IG5vblplcm9EZWx0YSAqIChkZWx0YSA9PSAwID8gKF9tYXggPT0gMCA/IC4xIDogMSkgOiBwYWRNYXgpO1xuXHRsZXQgX25ld01heCAgPSByb3VuZERlYyhpbmNyUm91bmRVcChfbWF4ICsgX3BhZE1heCwgYmFzZS8xMCksIDI0KTtcblx0bGV0IF9zb2Z0TWF4ID0gX21heCA8PSBzb2Z0TWF4ICYmIChzb2Z0TWF4TW9kZSA9PSAxIHx8IHNvZnRNYXhNb2RlID09IDMgJiYgX25ld01heCA+PSBzb2Z0TWF4IHx8IHNvZnRNYXhNb2RlID09IDIgJiYgX25ld01heCA8PSBzb2Z0TWF4KSA/IHNvZnRNYXggOiAtaW5mO1xuXHRsZXQgbWF4TGltICAgPSBtaW4oaGFyZE1heCwgX25ld01heCA+IF9zb2Z0TWF4ICYmIF9tYXggPD0gX3NvZnRNYXggPyBfc29mdE1heCA6IG1heChfc29mdE1heCwgX25ld01heCkpO1xuXG5cdGlmIChtaW5MaW0gPT0gbWF4TGltICYmIG1pbkxpbSA9PSAwKVxuXHRcdG1heExpbSA9IDEwMDtcblxuXHRyZXR1cm4gW21pbkxpbSwgbWF4TGltXTtcbn1cblxuLy8gYWx0ZXJuYXRpdmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjU0ODk2XG5jb25zdCBudW1Gb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoZG9tRW52ID8gbmF2Lmxhbmd1YWdlIDogJ2VuLVVTJyk7XG5jb25zdCBmbXROdW0gPSB2YWwgPT4gbnVtRm9ybWF0dGVyLmZvcm1hdCh2YWwpO1xuXG5jb25zdCBNID0gTWF0aDtcblxuY29uc3QgUEkgPSBNLlBJO1xuY29uc3QgYWJzID0gTS5hYnM7XG5jb25zdCBmbG9vciA9IE0uZmxvb3I7XG5jb25zdCByb3VuZCA9IE0ucm91bmQ7XG5jb25zdCBjZWlsID0gTS5jZWlsO1xuY29uc3QgbWluID0gTS5taW47XG5jb25zdCBtYXggPSBNLm1heDtcbmNvbnN0IHBvdyA9IE0ucG93O1xuY29uc3Qgc2lnbiA9IE0uc2lnbjtcbmNvbnN0IGxvZzEwID0gTS5sb2cxMDtcbmNvbnN0IGxvZzIgPSBNLmxvZzI7XG4vLyBUT0RPOiBzZWVtcyBsaWtlIHRoaXMgbmVlZHMgdG8gbWF0Y2ggYXNpbmggaW1wbCBpZiB0aGUgcGFzc2VkIHYgaXMgdHdlYWtlZD9cbmNvbnN0IHNpbmggPSAgKHYsIGxpbnRocmVzaCA9IDEpID0+IE0uc2luaCh2KSAqIGxpbnRocmVzaDtcbmNvbnN0IGFzaW5oID0gKHYsIGxpbnRocmVzaCA9IDEpID0+IE0uYXNpbmgodiAvIGxpbnRocmVzaCk7XG5cbmNvbnN0IGluZiA9IEluZmluaXR5O1xuXG5mdW5jdGlvbiBudW1JbnREaWdpdHMoeCkge1xuXHRyZXR1cm4gKGxvZzEwKCh4IF4gKHggPj4gMzEpKSAtICh4ID4+IDMxKSkgfCAwKSArIDE7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG51bSwgX21pbiwgX21heCkge1xuXHRyZXR1cm4gbWluKG1heChudW0sIF9taW4pLCBfbWF4KTtcbn1cblxuZnVuY3Rpb24gaXNGbih2KSB7XG5cdHJldHVybiB0eXBlb2YgdiA9PSBcImZ1bmN0aW9uXCI7XG59XG5cbmZ1bmN0aW9uIGZuT3JTZWxmKHYpIHtcblx0cmV0dXJuIGlzRm4odikgPyB2IDogKCkgPT4gdjtcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vLyBub3RlOiB0aGVzZSBpZGVudGl0eSBmbnMgbWF5IGdldCBkZW9wdGltaXplZCBpZiByZXVzZWQgZm9yIGRpZmZlcmVudCBhcmcgdHlwZXNcbi8vIGEgVFMgdmVyc2lvbiB3b3VsZCBlbmZvcmNlIHRoZXkgc3RheSBtb25vdHlwZWQgYW5kIHJlcXVpcmUgbWFraW5nIHZhcmlhbnRzXG5jb25zdCByZXRBcmcwID0gXzAgPT4gXzA7XG5cbmNvbnN0IHJldEFyZzEgPSAoXzAsIF8xKSA9PiBfMTtcblxuY29uc3QgcmV0TnVsbCA9IF8gPT4gbnVsbDtcblxuY29uc3QgcmV0VHJ1ZSA9IF8gPT4gdHJ1ZTtcblxuY29uc3QgcmV0RXEgPSAoYSwgYikgPT4gYSA9PSBiO1xuXG5jb25zdCByZWdleDYgPSAvXFwuXFxkKj8oPz05ezYsfXwwezYsfSkvZ207XG5cbi8vIGUuZy4gMTc5OTkuMjA0OTk5OTk5OTk4IC0+IDE3OTk5LjIwNVxuY29uc3QgZml4RmxvYXQgPSB2YWwgPT4ge1xuXHRpZiAoaXNJbnQodmFsKSB8fCBmaXhlZERlYy5oYXModmFsKSlcblx0XHRyZXR1cm4gdmFsO1xuXG5cdGNvbnN0IHN0ciA9IGAke3ZhbH1gO1xuXG5cdGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKHJlZ2V4Nik7XG5cblx0aWYgKG1hdGNoID09IG51bGwpXG5cdFx0cmV0dXJuIHZhbDtcblxuXHRsZXQgbGVuID0gbWF0Y2hbMF0ubGVuZ3RoIC0gMTtcblxuXHQvLyBlLmcuIDEuMDAwMDAwMDAwMDAwMDAwMWUtMjRcblx0aWYgKHN0ci5pbmRleE9mKCdlLScpICE9IC0xKSB7XG5cdFx0bGV0IFtudW0sIGV4cF0gPSBzdHIuc3BsaXQoJ2UnKTtcblx0XHRyZXR1cm4gK2Ake2ZpeEZsb2F0KG51bSl9ZSR7ZXhwfWA7XG5cdH1cblxuXHRyZXR1cm4gcm91bmREZWModmFsLCBsZW4pO1xufTtcblxuZnVuY3Rpb24gaW5jclJvdW5kKG51bSwgaW5jcikge1xuXHRyZXR1cm4gZml4RmxvYXQocm91bmREZWMoZml4RmxvYXQobnVtL2luY3IpKSppbmNyKTtcbn1cblxuZnVuY3Rpb24gaW5jclJvdW5kVXAobnVtLCBpbmNyKSB7XG5cdHJldHVybiBmaXhGbG9hdChjZWlsKGZpeEZsb2F0KG51bS9pbmNyKSkqaW5jcik7XG59XG5cbmZ1bmN0aW9uIGluY3JSb3VuZERuKG51bSwgaW5jcikge1xuXHRyZXR1cm4gZml4RmxvYXQoZmxvb3IoZml4RmxvYXQobnVtL2luY3IpKSppbmNyKTtcbn1cblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ4NzY0NDM2XG4vLyByb3VuZHMgaGFsZiBhd2F5IGZyb20gemVyb1xuZnVuY3Rpb24gcm91bmREZWModmFsLCBkZWMgPSAwKSB7XG5cdGlmIChpc0ludCh2YWwpKVxuXHRcdHJldHVybiB2YWw7XG4vL1x0ZWxzZSBpZiAoZGVjID09IDApXG4vL1x0XHRyZXR1cm4gcm91bmQodmFsKTtcblxuXHRsZXQgcCA9IDEwICoqIGRlYztcblx0bGV0IG4gPSAodmFsICogcCkgKiAoMSArIE51bWJlci5FUFNJTE9OKTtcblx0cmV0dXJuIHJvdW5kKG4pIC8gcDtcbn1cblxuY29uc3QgZml4ZWREZWMgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGd1ZXNzRGVjKG51bSkge1xuXHRyZXR1cm4gKChcIlwiK251bSkuc3BsaXQoXCIuXCIpWzFdIHx8IFwiXCIpLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gZ2VuSW5jcnMoYmFzZSwgbWluRXhwLCBtYXhFeHAsIG11bHRzKSB7XG5cdGxldCBpbmNycyA9IFtdO1xuXG5cdGxldCBtdWx0RGVjID0gbXVsdHMubWFwKGd1ZXNzRGVjKTtcblxuXHRmb3IgKGxldCBleHAgPSBtaW5FeHA7IGV4cCA8IG1heEV4cDsgZXhwKyspIHtcblx0XHRsZXQgZXhwYSA9IGFicyhleHApO1xuXHRcdGxldCBtYWcgPSByb3VuZERlYyhwb3coYmFzZSwgZXhwKSwgZXhwYSk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG11bHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgX2luY3IgPSBiYXNlID09IDEwID8gK2Ake211bHRzW2ldfWUke2V4cH1gIDogbXVsdHNbaV0gKiBtYWc7XG5cdFx0XHRsZXQgZGVjID0gKGV4cCA+PSAwID8gMCA6IGV4cGEpICsgKGV4cCA+PSBtdWx0RGVjW2ldID8gMCA6IG11bHREZWNbaV0pO1xuXHRcdFx0bGV0IGluY3IgPSBiYXNlID09IDEwID8gX2luY3IgOiByb3VuZERlYyhfaW5jciwgZGVjKTtcblx0XHRcdGluY3JzLnB1c2goaW5jcik7XG5cdFx0XHRmaXhlZERlYy5zZXQoaW5jciwgZGVjKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW5jcnM7XG59XG5cbi8vZXhwb3J0IGNvbnN0IGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbmNvbnN0IEVNUFRZX09CSiA9IHt9O1xuY29uc3QgRU1QVFlfQVJSID0gW107XG5cbmNvbnN0IG51bGxOdWxsVHVwbGUgPSBbbnVsbCwgbnVsbF07XG5cbmNvbnN0IGlzQXJyID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzSW50ID0gTnVtYmVyLmlzSW50ZWdlcjtcbmNvbnN0IGlzVW5kZWYgPSB2ID0+IHYgPT09IHZvaWQgMDtcblxuZnVuY3Rpb24gaXNTdHIodikge1xuXHRyZXR1cm4gdHlwZW9mIHYgPT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzT2JqKHYpIHtcblx0bGV0IGlzID0gZmFsc2U7XG5cblx0aWYgKHYgIT0gbnVsbCkge1xuXHRcdGxldCBjID0gdi5jb25zdHJ1Y3Rvcjtcblx0XHRpcyA9IGMgPT0gbnVsbCB8fCBjID09IE9iamVjdDtcblx0fVxuXG5cdHJldHVybiBpcztcbn1cblxuZnVuY3Rpb24gZmFzdElzT2JqKHYpIHtcblx0cmV0dXJuIHYgIT0gbnVsbCAmJiB0eXBlb2YgdiA9PSAnb2JqZWN0Jztcbn1cblxuY29uc3QgVHlwZWRBcnJheSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihVaW50OEFycmF5KTtcblxuY29uc3QgX19wcm90b19fID0gXCJfX3Byb3RvX19cIjtcblxuZnVuY3Rpb24gY29weShvLCBfaXNPYmogPSBpc09iaikge1xuXHRsZXQgb3V0O1xuXG5cdGlmIChpc0FycihvKSkge1xuXHRcdGxldCB2YWwgPSBvLmZpbmQodiA9PiB2ICE9IG51bGwpO1xuXG5cdFx0aWYgKGlzQXJyKHZhbCkgfHwgX2lzT2JqKHZhbCkpIHtcblx0XHRcdG91dCA9IEFycmF5KG8ubGVuZ3RoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgby5sZW5ndGg7IGkrKylcblx0XHRcdFx0b3V0W2ldID0gY29weShvW2ldLCBfaXNPYmopO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHRvdXQgPSBvLnNsaWNlKCk7XG5cdH1cblx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFR5cGVkQXJyYXkpIC8vIGFsc28gKEFycmF5QnVmZmVyLmlzVmlldyhvKSAmJiAhKG8gaW5zdGFuY2VvZiBEYXRhVmlldykpXG5cdFx0b3V0ID0gby5zbGljZSgpO1xuXHRlbHNlIGlmIChfaXNPYmoobykpIHtcblx0XHRvdXQgPSB7fTtcblx0XHRmb3IgKGxldCBrIGluIG8pIHtcblx0XHRcdGlmIChrICE9IF9fcHJvdG9fXylcblx0XHRcdFx0b3V0W2tdID0gY29weShvW2tdLCBfaXNPYmopO1xuXHRcdH1cblx0fVxuXHRlbHNlXG5cdFx0b3V0ID0gbztcblxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyZykge1xuXHRsZXQgYXJncyA9IGFyZ3VtZW50cztcblxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgc3JjID0gYXJnc1tpXTtcblxuXHRcdGZvciAobGV0IGtleSBpbiBzcmMpIHtcblx0XHRcdGlmIChrZXkgIT0gX19wcm90b19fKSB7XG5cdFx0XHRcdGlmIChpc09iaih0YXJnW2tleV0pKVxuXHRcdFx0XHRcdGFzc2lnbih0YXJnW2tleV0sIGNvcHkoc3JjW2tleV0pKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHRhcmdba2V5XSA9IGNvcHkoc3JjW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0YXJnO1xufVxuXG4vLyBudWxsTW9kZXNcbmNvbnN0IE5VTExfUkVNT1ZFID0gMDsgIC8vIG51bGxzIGFyZSBjb252ZXJ0ZWQgdG8gdW5kZWZpbmVkIChlLmcuIGZvciBzcGFuR2FwczogdHJ1ZSlcbmNvbnN0IE5VTExfUkVUQUlOID0gMTsgIC8vIG51bGxzIGFyZSByZXRhaW5lZCwgd2l0aCBhbGlnbm1lbnQgYXJ0aWZhY3RzIHNldCB0byB1bmRlZmluZWQgKGRlZmF1bHQpXG5jb25zdCBOVUxMX0VYUEFORCA9IDI7ICAvLyBudWxscyBhcmUgZXhwYW5kZWQgdG8gaW5jbHVkZSBhbnkgYWRqYWNlbnQgYWxpZ25tZW50IGFydGlmYWN0c1xuXG4vLyBzZXRzIHVuZGVmaW5lZCB2YWx1ZXMgdG8gbnVsbHMgd2hlbiBhZGphY2VudCB0byBleGlzdGluZyBudWxscyAobWluZXN3ZWVwZXIpXG5mdW5jdGlvbiBudWxsRXhwYW5kKHlWYWxzLCBudWxsSWR4cywgYWxpZ25lZExlbikge1xuXHRmb3IgKGxldCBpID0gMCwgeGksIGxhc3ROdWxsSWR4ID0gLTE7IGkgPCBudWxsSWR4cy5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBudWxsSWR4ID0gbnVsbElkeHNbaV07XG5cblx0XHRpZiAobnVsbElkeCA+IGxhc3ROdWxsSWR4KSB7XG5cdFx0XHR4aSA9IG51bGxJZHggLSAxO1xuXHRcdFx0d2hpbGUgKHhpID49IDAgJiYgeVZhbHNbeGldID09IG51bGwpXG5cdFx0XHRcdHlWYWxzW3hpLS1dID0gbnVsbDtcblxuXHRcdFx0eGkgPSBudWxsSWR4ICsgMTtcblx0XHRcdHdoaWxlICh4aSA8IGFsaWduZWRMZW4gJiYgeVZhbHNbeGldID09IG51bGwpXG5cdFx0XHRcdHlWYWxzW2xhc3ROdWxsSWR4ID0geGkrK10gPSBudWxsO1xuXHRcdH1cblx0fVxufVxuXG4vLyBudWxsTW9kZXMgaXMgYSB0YWJsZXMtbWF0Y2hlZCBhcnJheSBpbmRpY2F0aW5nIGhvdyB0byB0cmVhdCBudWxscyBpbiBlYWNoIHNlcmllc1xuLy8gb3V0cHV0IGlzIHNvcnRlZCBBU0Mgb24gdGhlIGpvaW5lZCBmaWVsZCAodGFibGVbMF0pIGFuZCBkdXBsaWNhdGUgam9pbiB2YWx1ZXMgYXJlIGNvbGxhcHNlZFxuZnVuY3Rpb24gam9pbih0YWJsZXMsIG51bGxNb2Rlcykge1xuXHRpZiAoYWxsSGVhZGVyc1NhbWUodGFibGVzKSkge1xuXHQvL1x0Y29uc29sZS5sb2coJ2NoZWFwIGpvaW4hJyk7XG5cblx0XHRsZXQgdGFibGUgPSB0YWJsZXNbMF0uc2xpY2UoKTtcblxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgdGFibGVzLmxlbmd0aDsgaSsrKVxuXHRcdFx0dGFibGUucHVzaCguLi50YWJsZXNbaV0uc2xpY2UoMSkpO1xuXG5cdFx0aWYgKCFpc0FzYyh0YWJsZVswXSkpXG5cdFx0XHR0YWJsZSA9IHNvcnRDb2xzKHRhYmxlKTtcblxuXHRcdHJldHVybiB0YWJsZTtcblx0fVxuXG5cdGxldCB4VmFscyA9IG5ldyBTZXQoKTtcblxuXHRmb3IgKGxldCB0aSA9IDA7IHRpIDwgdGFibGVzLmxlbmd0aDsgdGkrKykge1xuXHRcdGxldCB0ID0gdGFibGVzW3RpXTtcblx0XHRsZXQgeHMgPSB0WzBdO1xuXHRcdGxldCBsZW4gPSB4cy5sZW5ndGg7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxuXHRcdFx0eFZhbHMuYWRkKHhzW2ldKTtcblx0fVxuXG5cdGxldCBkYXRhID0gW0FycmF5LmZyb20oeFZhbHMpLnNvcnQoKGEsIGIpID0+IGEgLSBiKV07XG5cblx0bGV0IGFsaWduZWRMZW4gPSBkYXRhWzBdLmxlbmd0aDtcblxuXHRsZXQgeElkeHMgPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhbGlnbmVkTGVuOyBpKyspXG5cdFx0eElkeHMuc2V0KGRhdGFbMF1baV0sIGkpO1xuXG5cdGZvciAobGV0IHRpID0gMDsgdGkgPCB0YWJsZXMubGVuZ3RoOyB0aSsrKSB7XG5cdFx0bGV0IHQgPSB0YWJsZXNbdGldO1xuXHRcdGxldCB4cyA9IHRbMF07XG5cblx0XHRmb3IgKGxldCBzaSA9IDE7IHNpIDwgdC5sZW5ndGg7IHNpKyspIHtcblx0XHRcdGxldCB5cyA9IHRbc2ldO1xuXG5cdFx0XHRsZXQgeVZhbHMgPSBBcnJheShhbGlnbmVkTGVuKS5maWxsKHVuZGVmaW5lZCk7XG5cblx0XHRcdGxldCBudWxsTW9kZSA9IG51bGxNb2RlcyA/IG51bGxNb2Rlc1t0aV1bc2ldIDogTlVMTF9SRVRBSU47XG5cblx0XHRcdGxldCBudWxsSWR4cyA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCB5VmFsID0geXNbaV07XG5cdFx0XHRcdGxldCBhbGlnbmVkSWR4ID0geElkeHMuZ2V0KHhzW2ldKTtcblxuXHRcdFx0XHRpZiAoeVZhbCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChudWxsTW9kZSAhPSBOVUxMX1JFTU9WRSkge1xuXHRcdFx0XHRcdFx0eVZhbHNbYWxpZ25lZElkeF0gPSB5VmFsO1xuXG5cdFx0XHRcdFx0XHRpZiAobnVsbE1vZGUgPT0gTlVMTF9FWFBBTkQpXG5cdFx0XHRcdFx0XHRcdG51bGxJZHhzLnB1c2goYWxpZ25lZElkeCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR5VmFsc1thbGlnbmVkSWR4XSA9IHlWYWw7XG5cdFx0XHR9XG5cblx0XHRcdG51bGxFeHBhbmQoeVZhbHMsIG51bGxJZHhzLCBhbGlnbmVkTGVuKTtcblxuXHRcdFx0ZGF0YS5wdXNoKHlWYWxzKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuY29uc3QgbWljcm9UYXNrID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrID09IFwidW5kZWZpbmVkXCIgPyBmbiA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZuKSA6IHF1ZXVlTWljcm90YXNrO1xuXG4vLyBUT0RPOiBodHRwczovL2dpdGh1Yi5jb20vZHkvc29ydC1pZHMgKH4yeCBmYXN0ZXIgZm9yIDFlNSsgYXJyYXlzKVxuZnVuY3Rpb24gc29ydENvbHModGFibGUpIHtcblx0bGV0IGhlYWQgPSB0YWJsZVswXTtcblx0bGV0IHJsZW4gPSBoZWFkLmxlbmd0aDtcblxuXHRsZXQgaWR4cyA9IEFycmF5KHJsZW4pO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGlkeHMubGVuZ3RoOyBpKyspXG5cdFx0aWR4c1tpXSA9IGk7XG5cblx0aWR4cy5zb3J0KChpMCwgaTEpID0+IGhlYWRbaTBdIC0gaGVhZFtpMV0pO1xuXG5cdGxldCB0YWJsZTIgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCByb3cgPSB0YWJsZVtpXTtcblx0XHRsZXQgcm93MiA9IEFycmF5KHJsZW4pO1xuXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBybGVuOyBqKyspXG5cdFx0XHRyb3cyW2pdID0gcm93W2lkeHNbal1dO1xuXG5cdFx0dGFibGUyLnB1c2gocm93Mik7XG5cdH1cblxuXHRyZXR1cm4gdGFibGUyO1xufVxuXG4vLyB0ZXN0IGlmIHdlIGNhbiBkbyBjaGVhcCBqb2luIChhbGwgam9pbiBmaWVsZHMgc2FtZSlcbmZ1bmN0aW9uIGFsbEhlYWRlcnNTYW1lKHRhYmxlcykge1xuXHRsZXQgdmFsczAgPSB0YWJsZXNbMF1bMF07XG5cdGxldCBsZW4wID0gdmFsczAubGVuZ3RoO1xuXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgdGFibGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHZhbHMxID0gdGFibGVzW2ldWzBdO1xuXG5cdFx0aWYgKHZhbHMxLmxlbmd0aCAhPSBsZW4wKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0aWYgKHZhbHMxICE9IHZhbHMwKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxlbjA7IGorKykge1xuXHRcdFx0XHRpZiAodmFsczFbal0gIT0gdmFsczBbal0pXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc0FzYyh2YWxzLCBzYW1wbGVzID0gMTAwKSB7XG5cdGNvbnN0IGxlbiA9IHZhbHMubGVuZ3RoO1xuXG5cdC8vIGVtcHR5IG9yIHNpbmdsZSB2YWx1ZVxuXHRpZiAobGVuIDw9IDEpXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0Ly8gc2tpcCBsZWFkaW5nICYgdHJhaWxpbmcgbnVsbGlzaFxuXHRsZXQgZmlyc3RJZHggPSAwO1xuXHRsZXQgbGFzdElkeCA9IGxlbiAtIDE7XG5cblx0d2hpbGUgKGZpcnN0SWR4IDw9IGxhc3RJZHggJiYgdmFsc1tmaXJzdElkeF0gPT0gbnVsbClcblx0XHRmaXJzdElkeCsrO1xuXG5cdHdoaWxlIChsYXN0SWR4ID49IGZpcnN0SWR4ICYmIHZhbHNbbGFzdElkeF0gPT0gbnVsbClcblx0XHRsYXN0SWR4LS07XG5cblx0Ly8gYWxsIG51bGxpc2ggb3Igb25lIHZhbHVlIHN1cnJvdW5kZWQgYnkgbnVsbGlzaFxuXHRpZiAobGFzdElkeCA8PSBmaXJzdElkeClcblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRjb25zdCBzdHJpZGUgPSBtYXgoMSwgZmxvb3IoKGxhc3RJZHggLSBmaXJzdElkeCArIDEpIC8gc2FtcGxlcykpO1xuXG5cdGZvciAobGV0IHByZXZWYWwgPSB2YWxzW2ZpcnN0SWR4XSwgaSA9IGZpcnN0SWR4ICsgc3RyaWRlOyBpIDw9IGxhc3RJZHg7IGkgKz0gc3RyaWRlKSB7XG5cdFx0Y29uc3QgdiA9IHZhbHNbaV07XG5cblx0XHRpZiAodiAhPSBudWxsKSB7XG5cdFx0XHRpZiAodiA8PSBwcmV2VmFsKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdHByZXZWYWwgPSB2O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBtb250aHMgPSBbXG5cdFwiSmFudWFyeVwiLFxuXHRcIkZlYnJ1YXJ5XCIsXG5cdFwiTWFyY2hcIixcblx0XCJBcHJpbFwiLFxuXHRcIk1heVwiLFxuXHRcIkp1bmVcIixcblx0XCJKdWx5XCIsXG5cdFwiQXVndXN0XCIsXG5cdFwiU2VwdGVtYmVyXCIsXG5cdFwiT2N0b2JlclwiLFxuXHRcIk5vdmVtYmVyXCIsXG5cdFwiRGVjZW1iZXJcIixcbl07XG5cbmNvbnN0IGRheXMgPSBbXG5cdFwiU3VuZGF5XCIsXG5cdFwiTW9uZGF5XCIsXG5cdFwiVHVlc2RheVwiLFxuXHRcIldlZG5lc2RheVwiLFxuXHRcIlRodXJzZGF5XCIsXG5cdFwiRnJpZGF5XCIsXG5cdFwiU2F0dXJkYXlcIixcbl07XG5cbmZ1bmN0aW9uIHNsaWNlMyhzdHIpIHtcblx0cmV0dXJuIHN0ci5zbGljZSgwLCAzKTtcbn1cblxuY29uc3QgZGF5czMgPSBkYXlzLm1hcChzbGljZTMpO1xuXG5jb25zdCBtb250aHMzID0gbW9udGhzLm1hcChzbGljZTMpO1xuXG5jb25zdCBlbmdOYW1lcyA9IHtcblx0TU1NTTogbW9udGhzLFxuXHRNTU06ICBtb250aHMzLFxuXHRXV1dXOiBkYXlzLFxuXHRXV1c6ICBkYXlzMyxcbn07XG5cbmZ1bmN0aW9uIHplcm9QYWQyKGludCkge1xuXHRyZXR1cm4gKGludCA8IDEwID8gJzAnIDogJycpICsgaW50O1xufVxuXG5mdW5jdGlvbiB6ZXJvUGFkMyhpbnQpIHtcblx0cmV0dXJuIChpbnQgPCAxMCA/ICcwMCcgOiBpbnQgPCAxMDAgPyAnMCcgOiAnJykgKyBpbnQ7XG59XG5cbi8qXG5mdW5jdGlvbiBzdWZmaXgoaW50KSB7XG5cdGxldCBtb2QxMCA9IGludCAlIDEwO1xuXG5cdHJldHVybiBpbnQgKyAoXG5cdFx0bW9kMTAgPT0gMSAmJiBpbnQgIT0gMTEgPyBcInN0XCIgOlxuXHRcdG1vZDEwID09IDIgJiYgaW50ICE9IDEyID8gXCJuZFwiIDpcblx0XHRtb2QxMCA9PSAzICYmIGludCAhPSAxMyA/IFwicmRcIiA6IFwidGhcIlxuXHQpO1xufVxuKi9cblxuY29uc3Qgc3VicyA9IHtcblx0Ly8gMjAxOVxuXHRZWVlZOlx0ZCA9PiBkLmdldEZ1bGxZZWFyKCksXG5cdC8vIDE5XG5cdFlZOlx0XHRkID0+IChkLmdldEZ1bGxZZWFyKCkrJycpLnNsaWNlKDIpLFxuXHQvLyBKdWx5XG5cdE1NTU06XHQoZCwgbmFtZXMpID0+IG5hbWVzLk1NTU1bZC5nZXRNb250aCgpXSxcblx0Ly8gSnVsXG5cdE1NTTpcdChkLCBuYW1lcykgPT4gbmFtZXMuTU1NW2QuZ2V0TW9udGgoKV0sXG5cdC8vIDA3XG5cdE1NOlx0XHRkID0+IHplcm9QYWQyKGQuZ2V0TW9udGgoKSsxKSxcblx0Ly8gN1xuXHRNOlx0XHRkID0+IGQuZ2V0TW9udGgoKSsxLFxuXHQvLyAwOVxuXHRERDpcdFx0ZCA9PiB6ZXJvUGFkMihkLmdldERhdGUoKSksXG5cdC8vIDlcblx0RDpcdFx0ZCA9PiBkLmdldERhdGUoKSxcblx0Ly8gTW9uZGF5XG5cdFdXV1c6XHQoZCwgbmFtZXMpID0+IG5hbWVzLldXV1dbZC5nZXREYXkoKV0sXG5cdC8vIE1vblxuXHRXV1c6XHQoZCwgbmFtZXMpID0+IG5hbWVzLldXV1tkLmdldERheSgpXSxcblx0Ly8gMDNcblx0SEg6XHRcdGQgPT4gemVyb1BhZDIoZC5nZXRIb3VycygpKSxcblx0Ly8gM1xuXHRIOlx0XHRkID0+IGQuZ2V0SG91cnMoKSxcblx0Ly8gOSAoMTJociwgdW5wYWRkZWQpXG5cdGg6XHRcdGQgPT4ge2xldCBoID0gZC5nZXRIb3VycygpOyByZXR1cm4gaCA9PSAwID8gMTIgOiBoID4gMTIgPyBoIC0gMTIgOiBoO30sXG5cdC8vIEFNXG5cdEFBOlx0XHRkID0+IGQuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nLFxuXHQvLyBhbVxuXHRhYTpcdFx0ZCA9PiBkLmdldEhvdXJzKCkgPj0gMTIgPyAncG0nIDogJ2FtJyxcblx0Ly8gYVxuXHRhOlx0XHRkID0+IGQuZ2V0SG91cnMoKSA+PSAxMiA/ICdwJyA6ICdhJyxcblx0Ly8gMDlcblx0bW06XHRcdGQgPT4gemVyb1BhZDIoZC5nZXRNaW51dGVzKCkpLFxuXHQvLyA5XG5cdG06XHRcdGQgPT4gZC5nZXRNaW51dGVzKCksXG5cdC8vIDA5XG5cdHNzOlx0XHRkID0+IHplcm9QYWQyKGQuZ2V0U2Vjb25kcygpKSxcblx0Ly8gOVxuXHRzOlx0XHRkID0+IGQuZ2V0U2Vjb25kcygpLFxuXHQvLyAzNzRcblx0ZmZmOlx0ZCA9PiB6ZXJvUGFkMyhkLmdldE1pbGxpc2Vjb25kcygpKSxcbn07XG5cbmZ1bmN0aW9uIGZtdERhdGUodHBsLCBuYW1lcykge1xuXHRuYW1lcyA9IG5hbWVzIHx8IGVuZ05hbWVzO1xuXHRsZXQgcGFydHMgPSBbXTtcblxuXHRsZXQgUiA9IC9cXHsoW2Etel0rKVxcfXxbXntdKy9naSwgbTtcblxuXHR3aGlsZSAobSA9IFIuZXhlYyh0cGwpKVxuXHRcdHBhcnRzLnB1c2gobVswXVswXSA9PSAneycgPyBzdWJzW21bMV1dIDogbVswXSk7XG5cblx0cmV0dXJuIGQgPT4ge1xuXHRcdGxldCBvdXQgPSAnJztcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspXG5cdFx0XHRvdXQgKz0gdHlwZW9mIHBhcnRzW2ldID09IFwic3RyaW5nXCIgPyBwYXJ0c1tpXSA6IHBhcnRzW2ldKGQsIG5hbWVzKTtcblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cbn1cblxuY29uc3QgbG9jYWxUeiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1MTQxNzYyL2hvdy10by1pbml0aWFsaXplLWEtamF2YXNjcmlwdC1kYXRlLXRvLWEtcGFydGljdWxhci10aW1lLXpvbmUvNTM2NTIxMzEjNTM2NTIxMzFcbmZ1bmN0aW9uIHR6RGF0ZShkYXRlLCB0eikge1xuXHRsZXQgZGF0ZTI7XG5cblx0Ly8gcGVyZiBvcHRpbWl6YXRpb25cblx0aWYgKHR6ID09ICdVVEMnIHx8IHR6ID09ICdFdGMvVVRDJylcblx0XHRkYXRlMiA9IG5ldyBEYXRlKCtkYXRlICsgZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNmU0KTtcblx0ZWxzZSBpZiAodHogPT0gbG9jYWxUeilcblx0XHRkYXRlMiA9IGRhdGU7XG5cdGVsc2Uge1xuXHRcdGRhdGUyID0gbmV3IERhdGUoZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7dGltZVpvbmU6IHR6fSkpO1xuXHRcdGRhdGUyLnNldE1pbGxpc2Vjb25kcyhkYXRlLmdldE1pbGxpc2Vjb25kcygpKTtcblx0fVxuXG5cdHJldHVybiBkYXRlMjtcbn1cblxuLy9leHBvcnQgY29uc3Qgc2VyaWVzID0gW107XG5cbi8vIGRlZmF1bHQgZm9ybWF0dGVyczpcblxuY29uc3Qgb25seVdob2xlID0gdiA9PiB2ICUgMSA9PSAwO1xuXG5jb25zdCBhbGxNdWx0cyA9IFsxLDIsMi41LDVdO1xuXG4vLyAuLi4wLjAxLCAwLjAyLCAwLjAyNSwgMC4wNSwgMC4xLCAwLjIsIDAuMjUsIDAuNVxuY29uc3QgZGVjSW5jcnMgPSBnZW5JbmNycygxMCwgLTMyLCAwLCBhbGxNdWx0cyk7XG5cbi8vIDEsIDIsIDIuNSwgNSwgMTAsIDIwLCAyNSwgNTAuLi5cbmNvbnN0IG9uZUluY3JzID0gZ2VuSW5jcnMoMTAsIDAsIDMyLCBhbGxNdWx0cyk7XG5cbi8vIDEsIDIsICAgICAgNSwgMTAsIDIwLCAyNSwgNTAuLi5cbmNvbnN0IHdob2xlSW5jcnMgPSBvbmVJbmNycy5maWx0ZXIob25seVdob2xlKTtcblxuY29uc3QgbnVtSW5jcnMgPSBkZWNJbmNycy5jb25jYXQob25lSW5jcnMpO1xuXG5jb25zdCBOTCA9IFwiXFxuXCI7XG5cbmNvbnN0IHl5eXkgICAgPSBcIntZWVlZfVwiO1xuY29uc3QgTkx5eXl5ICA9IE5MICsgeXl5eTtcbmNvbnN0IG1kICAgICAgPSBcIntNfS97RH1cIjtcbmNvbnN0IE5MbWQgICAgPSBOTCArIG1kO1xuY29uc3QgTkxtZHl5ICA9IE5MbWQgKyBcIi97WVl9XCI7XG5cbmNvbnN0IGFhICAgICAgPSBcInthYX1cIjtcbmNvbnN0IGhtbSAgICAgPSBcIntofTp7bW19XCI7XG5jb25zdCBobW1hYSAgID0gaG1tICsgYWE7XG5jb25zdCBOTGhtbWFhID0gTkwgKyBobW1hYTtcbmNvbnN0IHNzICAgICAgPSBcIjp7c3N9XCI7XG5cbmNvbnN0IF8gPSBudWxsO1xuXG5mdW5jdGlvbiBnZW5UaW1lU3R1ZmZzKG1zKSB7XG5cdGxldFx0cyAgPSBtcyAqIDFlMyxcblx0XHRtICA9IHMgICogNjAsXG5cdFx0aCAgPSBtICAqIDYwLFxuXHRcdGQgID0gaCAgKiAyNCxcblx0XHRtbyA9IGQgICogMzAsXG5cdFx0eSAgPSBkICAqIDM2NTtcblxuXHQvLyBtaW4gb2YgMWUtMyBwcmV2ZW50cyBzZXR0aW5nIGEgdGVtcG9yYWwgeCB0aWNrcyB0b28gc21hbGwgc2luY2UgRGF0ZSBvYmplY3RzIGNhbm5vdCBhZHZhbmNlIHRpY2tzIHNtYWxsZXIgdGhhbiAxbXNcblx0bGV0IHN1YlNlY0luY3JzID0gbXMgPT0gMSA/IGdlbkluY3JzKDEwLCAwLCAzLCBhbGxNdWx0cykuZmlsdGVyKG9ubHlXaG9sZSkgOiBnZW5JbmNycygxMCwgLTMsIDAsIGFsbE11bHRzKTtcblxuXHRsZXQgdGltZUluY3JzID0gc3ViU2VjSW5jcnMuY29uY2F0KFtcblx0XHQvLyBtaW51dGUgZGl2aXNvcnMgKCMgb2Ygc2Vjcylcblx0XHRzLFxuXHRcdHMgKiA1LFxuXHRcdHMgKiAxMCxcblx0XHRzICogMTUsXG5cdFx0cyAqIDMwLFxuXHRcdC8vIGhvdXIgZGl2aXNvcnMgKCMgb2YgbWlucylcblx0XHRtLFxuXHRcdG0gKiA1LFxuXHRcdG0gKiAxMCxcblx0XHRtICogMTUsXG5cdFx0bSAqIDMwLFxuXHRcdC8vIGRheSBkaXZpc29ycyAoIyBvZiBocnMpXG5cdFx0aCxcblx0XHRoICogMixcblx0XHRoICogMyxcblx0XHRoICogNCxcblx0XHRoICogNixcblx0XHRoICogOCxcblx0XHRoICogMTIsXG5cdFx0Ly8gbW9udGggZGl2aXNvcnMgVE9ETzogbmVlZCBtb3JlP1xuXHRcdGQsXG5cdFx0ZCAqIDIsXG5cdFx0ZCAqIDMsXG5cdFx0ZCAqIDQsXG5cdFx0ZCAqIDUsXG5cdFx0ZCAqIDYsXG5cdFx0ZCAqIDcsXG5cdFx0ZCAqIDgsXG5cdFx0ZCAqIDksXG5cdFx0ZCAqIDEwLFxuXHRcdGQgKiAxNSxcblx0XHQvLyB5ZWFyIGRpdmlzb3JzICgjIG1vbnRocywgYXBwcm94KVxuXHRcdG1vLFxuXHRcdG1vICogMixcblx0XHRtbyAqIDMsXG5cdFx0bW8gKiA0LFxuXHRcdG1vICogNixcblx0XHQvLyBjZW50dXJ5IGRpdmlzb3JzXG5cdFx0eSxcblx0XHR5ICogMixcblx0XHR5ICogNSxcblx0XHR5ICogMTAsXG5cdFx0eSAqIDI1LFxuXHRcdHkgKiA1MCxcblx0XHR5ICogMTAwLFxuXHRdKTtcblxuXHQvLyBbMF06ICAgbWluaW11bSBudW0gc2VjcyBpbiB0aGUgdGljayBpbmNyXG5cdC8vIFsxXTogICBkZWZhdWx0IHRpY2sgZm9ybWF0XG5cdC8vIFsyLTddOiByb2xsb3ZlciB0aWNrIGZvcm1hdHNcblx0Ly8gWzhdOiAgIG1vZGU6IDA6IHJlcGxhY2UgWzFdIC0+IFsyLTddLCAxOiBjb25jYXQgWzFdICsgWzItN11cblx0Y29uc3QgX3RpbWVBeGlzU3RhbXBzID0gW1xuXHQvLyAgIHRpY2sgaW5jciAgICBkZWZhdWx0ICAgICAgICAgIHllYXIgICAgICAgICAgICAgICAgICAgIG1vbnRoICAgZGF5ICAgICAgICAgICAgICAgICAgIGhvdXIgICAgbWluICAgICAgIHNlYyAgIG1vZGVcblx0XHRbeSwgICAgICAgICAgIHl5eXksICAgICAgICAgICAgXywgICAgICAgICAgICAgICAgICAgICAgXywgICAgICBfLCAgICAgICAgICAgICAgICAgICAgXywgICAgICBfLCAgICAgICAgXywgICAgICAgMV0sXG5cdFx0W2QgKiAyOCwgICAgICBcIntNTU19XCIsICAgICAgICAgTkx5eXl5LCAgICAgICAgICAgICAgICAgXywgICAgICBfLCAgICAgICAgICAgICAgICAgICAgXywgICAgICBfLCAgICAgICAgXywgICAgICAgMV0sXG5cdFx0W2QsICAgICAgICAgICBtZCwgICAgICAgICAgICAgIE5MeXl5eSwgICAgICAgICAgICAgICAgIF8sICAgICAgXywgICAgICAgICAgICAgICAgICAgIF8sICAgICAgXywgICAgICAgIF8sICAgICAgIDFdLFxuXHRcdFtoLCAgICAgICAgICAgXCJ7aH1cIiArIGFhLCAgICAgIE5MbWR5eSwgICAgICAgICAgICAgICAgIF8sICAgICAgTkxtZCwgICAgICAgICAgICAgICAgIF8sICAgICAgXywgICAgICAgIF8sICAgICAgIDFdLFxuXHRcdFttLCAgICAgICAgICAgaG1tYWEsICAgICAgICAgICBOTG1keXksICAgICAgICAgICAgICAgICBfLCAgICAgIE5MbWQsICAgICAgICAgICAgICAgICBfLCAgICAgIF8sICAgICAgICBfLCAgICAgICAxXSxcblx0XHRbcywgICAgICAgICAgIHNzLCAgICAgICAgICAgICAgTkxtZHl5ICsgXCIgXCIgKyBobW1hYSwgICBfLCAgICAgIE5MbWQgKyBcIiBcIiArIGhtbWFhLCAgIF8sICAgICAgTkxobW1hYSwgIF8sICAgICAgIDFdLFxuXHRcdFttcywgICAgICAgICAgc3MgKyBcIi57ZmZmfVwiLCAgIE5MbWR5eSArIFwiIFwiICsgaG1tYWEsICAgXywgICAgICBOTG1kICsgXCIgXCIgKyBobW1hYSwgICBfLCAgICAgIE5MaG1tYWEsICBfLCAgICAgICAxXSxcblx0XTtcblxuXHQvLyB0aGUgZW5zdXJlcyB0aGF0IGF4aXMgdGlja3MsIHZhbHVlcyAmIGdyaWQgYXJlIGFsaWduZWQgdG8gbG9naWNhbCB0ZW1wb3JhbCBicmVha3BvaW50cyBhbmQgbm90IGFuIGFyYml0cmFyeSB0aW1lc3RhbXBcblx0Ly8gaHR0cHM6Ly93d3cudGltZWFuZGRhdGUuY29tL3RpbWUvZHN0L1xuXHQvLyBodHRwczovL3d3dy50aW1lYW5kZGF0ZS5jb20vdGltZS9kc3QvMjAxOS5odG1sXG5cdC8vIGh0dHBzOi8vd3d3LmVwb2NoY29udmVydGVyLmNvbS90aW1lem9uZXNcblx0ZnVuY3Rpb24gdGltZUF4aXNTcGxpdHModHpEYXRlKSB7XG5cdFx0cmV0dXJuIChzZWxmLCBheGlzSWR4LCBzY2FsZU1pbiwgc2NhbGVNYXgsIGZvdW5kSW5jciwgZm91bmRTcGFjZSkgPT4ge1xuXHRcdFx0bGV0IHNwbGl0cyA9IFtdO1xuXHRcdFx0bGV0IGlzWXIgPSBmb3VuZEluY3IgPj0geTtcblx0XHRcdGxldCBpc01vID0gZm91bmRJbmNyID49IG1vICYmIGZvdW5kSW5jciA8IHk7XG5cblx0XHRcdC8vIGdldCB0aGUgdGltZXpvbmUtYWRqdXN0ZWQgZGF0ZVxuXHRcdFx0bGV0IG1pbkRhdGUgPSB0ekRhdGUoc2NhbGVNaW4pO1xuXHRcdFx0bGV0IG1pbkRhdGVUcyA9IHJvdW5kRGVjKG1pbkRhdGUgKiBtcywgMyk7XG5cblx0XHRcdC8vIGdldCB0cyBvZiAxMmFtICh0aGlzIGxhbmRzIHVzIGF0IG9yIGJlZm9yZSB0aGUgb3JpZ2luYWwgc2NhbGVNaW4pXG5cdFx0XHRsZXQgbWluTWluID0gbWtEYXRlKG1pbkRhdGUuZ2V0RnVsbFllYXIoKSwgaXNZciA/IDAgOiBtaW5EYXRlLmdldE1vbnRoKCksIGlzTW8gfHwgaXNZciA/IDEgOiBtaW5EYXRlLmdldERhdGUoKSk7XG5cdFx0XHRsZXQgbWluTWluVHMgPSByb3VuZERlYyhtaW5NaW4gKiBtcywgMyk7XG5cblx0XHRcdGlmIChpc01vIHx8IGlzWXIpIHtcblx0XHRcdFx0bGV0IG1vSW5jciA9IGlzTW8gPyBmb3VuZEluY3IgLyBtbyA6IDA7XG5cdFx0XHRcdGxldCB5ckluY3IgPSBpc1lyID8gZm91bmRJbmNyIC8geSAgOiAwO1xuXHRcdFx0Ly9cdGxldCB0ek9mZnNldCA9IHNjYWxlTWluIC0gbWluRGF0ZVRzO1x0XHQvLyBuZWVkZWQ/XG5cdFx0XHRcdGxldCBzcGxpdCA9IG1pbkRhdGVUcyA9PSBtaW5NaW5UcyA/IG1pbkRhdGVUcyA6IHJvdW5kRGVjKG1rRGF0ZShtaW5NaW4uZ2V0RnVsbFllYXIoKSArIHlySW5jciwgbWluTWluLmdldE1vbnRoKCkgKyBtb0luY3IsIDEpICogbXMsIDMpO1xuXHRcdFx0XHRsZXQgc3BsaXREYXRlID0gbmV3IERhdGUocm91bmQoc3BsaXQgLyBtcykpO1xuXHRcdFx0XHRsZXQgYmFzZVllYXIgPSBzcGxpdERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0bGV0IGJhc2VNb250aCA9IHNwbGl0RGF0ZS5nZXRNb250aCgpO1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBzcGxpdCA8PSBzY2FsZU1heDsgaSsrKSB7XG5cdFx0XHRcdFx0bGV0IG5leHQgPSBta0RhdGUoYmFzZVllYXIgKyB5ckluY3IgKiBpLCBiYXNlTW9udGggKyBtb0luY3IgKiBpLCAxKTtcblx0XHRcdFx0XHRsZXQgb2ZmcyA9IG5leHQgLSB0ekRhdGUocm91bmREZWMobmV4dCAqIG1zLCAzKSk7XG5cblx0XHRcdFx0XHRzcGxpdCA9IHJvdW5kRGVjKCgrbmV4dCArIG9mZnMpICogbXMsIDMpO1xuXG5cdFx0XHRcdFx0aWYgKHNwbGl0IDw9IHNjYWxlTWF4KVxuXHRcdFx0XHRcdFx0c3BsaXRzLnB1c2goc3BsaXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bGV0IGluY3IwID0gZm91bmRJbmNyID49IGQgPyBkIDogZm91bmRJbmNyO1xuXHRcdFx0XHRsZXQgdHpPZmZzZXQgPSBmbG9vcihzY2FsZU1pbikgLSBmbG9vcihtaW5EYXRlVHMpO1xuXHRcdFx0XHRsZXQgc3BsaXQgPSBtaW5NaW5UcyArIHR6T2Zmc2V0ICsgaW5jclJvdW5kVXAobWluRGF0ZVRzIC0gbWluTWluVHMsIGluY3IwKTtcblx0XHRcdFx0c3BsaXRzLnB1c2goc3BsaXQpO1xuXG5cdFx0XHRcdGxldCBkYXRlMCA9IHR6RGF0ZShzcGxpdCk7XG5cblx0XHRcdFx0bGV0IHByZXZIb3VyID0gZGF0ZTAuZ2V0SG91cnMoKSArIChkYXRlMC5nZXRNaW51dGVzKCkgLyBtKSArIChkYXRlMC5nZXRTZWNvbmRzKCkgLyBoKTtcblx0XHRcdFx0bGV0IGluY3JIb3VycyA9IGZvdW5kSW5jciAvIGg7XG5cblx0XHRcdFx0bGV0IG1pblNwYWNlID0gc2VsZi5heGVzW2F4aXNJZHhdLl9zcGFjZTtcblx0XHRcdFx0bGV0IHBjdFNwYWNlID0gZm91bmRTcGFjZSAvIG1pblNwYWNlO1xuXG5cdFx0XHRcdHdoaWxlICgxKSB7XG5cdFx0XHRcdFx0c3BsaXQgPSByb3VuZERlYyhzcGxpdCArIGZvdW5kSW5jciwgbXMgPT0gMSA/IDAgOiAzKTtcblxuXHRcdFx0XHRcdGlmIChzcGxpdCA+IHNjYWxlTWF4KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRpZiAoaW5jckhvdXJzID4gMSkge1xuXHRcdFx0XHRcdFx0bGV0IGV4cGVjdGVkSG91ciA9IGZsb29yKHJvdW5kRGVjKHByZXZIb3VyICsgaW5jckhvdXJzLCA2KSkgJSAyNDtcblx0XHRcdFx0XHRcdGxldCBzcGxpdERhdGUgPSB0ekRhdGUoc3BsaXQpO1xuXHRcdFx0XHRcdFx0bGV0IGFjdHVhbEhvdXIgPSBzcGxpdERhdGUuZ2V0SG91cnMoKTtcblxuXHRcdFx0XHRcdFx0bGV0IGRzdFNoaWZ0ID0gYWN0dWFsSG91ciAtIGV4cGVjdGVkSG91cjtcblxuXHRcdFx0XHRcdFx0aWYgKGRzdFNoaWZ0ID4gMSlcblx0XHRcdFx0XHRcdFx0ZHN0U2hpZnQgPSAtMTtcblxuXHRcdFx0XHRcdFx0c3BsaXQgLT0gZHN0U2hpZnQgKiBoO1xuXG5cdFx0XHRcdFx0XHRwcmV2SG91ciA9IChwcmV2SG91ciArIGluY3JIb3VycykgJSAyNDtcblxuXHRcdFx0XHRcdFx0Ly8gYWRkIGEgdGljayBvbmx5IGlmIGl0J3MgZnVydGhlciB0aGFuIDcwJSBvZiB0aGUgbWluIGFsbG93ZWQgbGFiZWwgc3BhY2luZ1xuXHRcdFx0XHRcdFx0bGV0IHByZXZTcGxpdCA9IHNwbGl0c1tzcGxpdHMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0XHRsZXQgcGN0SW5jciA9IHJvdW5kRGVjKChzcGxpdCAtIHByZXZTcGxpdCkgLyBmb3VuZEluY3IsIDMpO1xuXG5cdFx0XHRcdFx0XHRpZiAocGN0SW5jciAqIHBjdFNwYWNlID49IC43KVxuXHRcdFx0XHRcdFx0XHRzcGxpdHMucHVzaChzcGxpdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHNwbGl0cy5wdXNoKHNwbGl0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc3BsaXRzO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0dGltZUluY3JzLFxuXHRcdF90aW1lQXhpc1N0YW1wcyxcblx0XHR0aW1lQXhpc1NwbGl0cyxcblx0XTtcbn1cblxuY29uc3QgWyB0aW1lSW5jcnNNcywgX3RpbWVBeGlzU3RhbXBzTXMsIHRpbWVBeGlzU3BsaXRzTXMgXSA9IGdlblRpbWVTdHVmZnMoMSk7XG5jb25zdCBbIHRpbWVJbmNyc1MsICBfdGltZUF4aXNTdGFtcHNTLCAgdGltZUF4aXNTcGxpdHNTICBdID0gZ2VuVGltZVN0dWZmcygxZS0zKTtcblxuLy8gYmFzZSAyXG5nZW5JbmNycygyLCAtNTMsIDUzLCBbMV0pO1xuXG4vKlxuY29uc29sZS5sb2coe1xuXHRkZWNJbmNycyxcblx0b25lSW5jcnMsXG5cdHdob2xlSW5jcnMsXG5cdG51bUluY3JzLFxuXHR0aW1lSW5jcnMsXG5cdGZpeGVkRGVjLFxufSk7XG4qL1xuXG5mdW5jdGlvbiB0aW1lQXhpc1N0YW1wcyhzdGFtcENmZywgZm10RGF0ZSkge1xuXHRyZXR1cm4gc3RhbXBDZmcubWFwKHMgPT4gcy5tYXAoKHYsIGkpID0+XG5cdFx0aSA9PSAwIHx8IGkgPT0gOCB8fCB2ID09IG51bGwgPyB2IDogZm10RGF0ZShpID09IDEgfHwgc1s4XSA9PSAwID8gdiA6IHNbMV0gKyB2KVxuXHQpKTtcbn1cblxuLy8gVE9ETzogd2lsbCBuZWVkIHRvIGFjY2VwdCBzcGFjZXNbXSBhbmQgcHVsbCBpbmNyIGludG8gdGhlIGxvb3Agd2hlbiBncmlkIHdpbGwgYmUgbm9uLXVuaWZvcm0sIGVnIGZvciBsb2cgc2NhbGVzLlxuLy8gY3VycmVudGx5IHdlIGlnbm9yZSB0aGlzIGZvciBtb250aHMgc2luY2UgdGhleSdyZSAqbmVhcmx5KiB1bmlmb3JtIGFuZCB0aGUgYWRkZWQgY29tcGxleGl0eSBpcyBub3Qgd29ydGggaXRcbmZ1bmN0aW9uIHRpbWVBeGlzVmFscyh0ekRhdGUsIHN0YW1wcykge1xuXHRyZXR1cm4gKHNlbGYsIHNwbGl0cywgYXhpc0lkeCwgZm91bmRTcGFjZSwgZm91bmRJbmNyKSA9PiB7XG5cdFx0bGV0IHMgPSBzdGFtcHMuZmluZChzID0+IGZvdW5kSW5jciA+PSBzWzBdKSB8fCBzdGFtcHNbc3RhbXBzLmxlbmd0aCAtIDFdO1xuXG5cdFx0Ly8gdGhlc2UgdHJhY2sgYm91bmRhcmllcyB3aGVuIGEgZnVsbCBsYWJlbCBpcyBuZWVkZWQgYWdhaW5cblx0XHRsZXQgcHJldlllYXI7XG5cdFx0bGV0IHByZXZNbnRoO1xuXHRcdGxldCBwcmV2RGF0ZTtcblx0XHRsZXQgcHJldkhvdXI7XG5cdFx0bGV0IHByZXZNaW5zO1xuXHRcdGxldCBwcmV2U2VjcztcblxuXHRcdHJldHVybiBzcGxpdHMubWFwKHNwbGl0ID0+IHtcblx0XHRcdGxldCBkYXRlID0gdHpEYXRlKHNwbGl0KTtcblxuXHRcdFx0bGV0IG5ld1llYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRsZXQgbmV3TW50aCA9IGRhdGUuZ2V0TW9udGgoKTtcblx0XHRcdGxldCBuZXdEYXRlID0gZGF0ZS5nZXREYXRlKCk7XG5cdFx0XHRsZXQgbmV3SG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcblx0XHRcdGxldCBuZXdNaW5zID0gZGF0ZS5nZXRNaW51dGVzKCk7XG5cdFx0XHRsZXQgbmV3U2VjcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuXG5cdFx0XHRsZXQgc3RhbXAgPSAoXG5cdFx0XHRcdG5ld1llYXIgIT0gcHJldlllYXIgJiYgc1syXSB8fFxuXHRcdFx0XHRuZXdNbnRoICE9IHByZXZNbnRoICYmIHNbM10gfHxcblx0XHRcdFx0bmV3RGF0ZSAhPSBwcmV2RGF0ZSAmJiBzWzRdIHx8XG5cdFx0XHRcdG5ld0hvdXIgIT0gcHJldkhvdXIgJiYgc1s1XSB8fFxuXHRcdFx0XHRuZXdNaW5zICE9IHByZXZNaW5zICYmIHNbNl0gfHxcblx0XHRcdFx0bmV3U2VjcyAhPSBwcmV2U2VjcyAmJiBzWzddIHx8XG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgc1sxXVxuXHRcdFx0KTtcblxuXHRcdFx0cHJldlllYXIgPSBuZXdZZWFyO1xuXHRcdFx0cHJldk1udGggPSBuZXdNbnRoO1xuXHRcdFx0cHJldkRhdGUgPSBuZXdEYXRlO1xuXHRcdFx0cHJldkhvdXIgPSBuZXdIb3VyO1xuXHRcdFx0cHJldk1pbnMgPSBuZXdNaW5zO1xuXHRcdFx0cHJldlNlY3MgPSBuZXdTZWNzO1xuXG5cdFx0XHRyZXR1cm4gc3RhbXAoZGF0ZSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gZm9yIHdoZW4gYXhpcy52YWx1ZXMgaXMgZGVmaW5lZCBhcyBhIHN0YXRpYyBmbXREYXRlIHRlbXBsYXRlIHN0cmluZ1xuZnVuY3Rpb24gdGltZUF4aXNWYWwodHpEYXRlLCBkYXRlVHBsKSB7XG5cdGxldCBzdGFtcCA9IGZtdERhdGUoZGF0ZVRwbCk7XG5cdHJldHVybiAoc2VsZiwgc3BsaXRzLCBheGlzSWR4LCBmb3VuZFNwYWNlLCBmb3VuZEluY3IpID0+IHNwbGl0cy5tYXAoc3BsaXQgPT4gc3RhbXAodHpEYXRlKHNwbGl0KSkpO1xufVxuXG5mdW5jdGlvbiBta0RhdGUoeSwgbSwgZCkge1xuXHRyZXR1cm4gbmV3IERhdGUoeSwgbSwgZCk7XG59XG5cbmZ1bmN0aW9uIHRpbWVTZXJpZXNTdGFtcChzdGFtcENmZywgZm10RGF0ZSkge1xuXHRyZXR1cm4gZm10RGF0ZShzdGFtcENmZyk7XG59XG5jb25zdCBfdGltZVNlcmllc1N0YW1wID0gJ3tZWVlZfS17TU19LXtERH0ge2h9OnttbX17YWF9JztcblxuZnVuY3Rpb24gdGltZVNlcmllc1ZhbCh0ekRhdGUsIHN0YW1wKSB7XG5cdHJldHVybiAoc2VsZiwgdmFsLCBzZXJpZXNJZHgsIGRhdGFJZHgpID0+IGRhdGFJZHggPT0gbnVsbCA/IExFR0VORF9ESVNQIDogc3RhbXAodHpEYXRlKHZhbCkpO1xufVxuXG5mdW5jdGlvbiBsZWdlbmRTdHJva2Uoc2VsZiwgc2VyaWVzSWR4KSB7XG5cdGxldCBzID0gc2VsZi5zZXJpZXNbc2VyaWVzSWR4XTtcblx0cmV0dXJuIHMud2lkdGggPyBzLnN0cm9rZShzZWxmLCBzZXJpZXNJZHgpIDogcy5wb2ludHMud2lkdGggPyBzLnBvaW50cy5zdHJva2Uoc2VsZiwgc2VyaWVzSWR4KSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGxlZ2VuZEZpbGwoc2VsZiwgc2VyaWVzSWR4KSB7XG5cdHJldHVybiBzZWxmLnNlcmllc1tzZXJpZXNJZHhdLmZpbGwoc2VsZiwgc2VyaWVzSWR4KTtcbn1cblxuY29uc3QgbGVnZW5kT3B0cyA9IHtcblx0c2hvdzogdHJ1ZSxcblx0bGl2ZTogdHJ1ZSxcblx0aXNvbGF0ZTogZmFsc2UsXG5cdG1vdW50OiBub29wLFxuXHRtYXJrZXJzOiB7XG5cdFx0c2hvdzogdHJ1ZSxcblx0XHR3aWR0aDogMixcblx0XHRzdHJva2U6IGxlZ2VuZFN0cm9rZSxcblx0XHRmaWxsOiBsZWdlbmRGaWxsLFxuXHRcdGRhc2g6IFwic29saWRcIixcblx0fSxcblx0aWR4OiBudWxsLFxuXHRpZHhzOiBudWxsLFxuXHR2YWx1ZXM6IFtdLFxufTtcblxuZnVuY3Rpb24gY3Vyc29yUG9pbnRTaG93KHNlbGYsIHNpKSB7XG5cdGxldCBvID0gc2VsZi5jdXJzb3IucG9pbnRzO1xuXG5cdGxldCBwdCA9IHBsYWNlRGl2KCk7XG5cblx0bGV0IHNpemUgPSBvLnNpemUoc2VsZiwgc2kpO1xuXHRzZXRTdHlsZVB4KHB0LCBXSURUSCwgc2l6ZSk7XG5cdHNldFN0eWxlUHgocHQsIEhFSUdIVCwgc2l6ZSk7XG5cblx0bGV0IG1hciA9IHNpemUgLyAtMjtcblx0c2V0U3R5bGVQeChwdCwgXCJtYXJnaW5MZWZ0XCIsIG1hcik7XG5cdHNldFN0eWxlUHgocHQsIFwibWFyZ2luVG9wXCIsIG1hcik7XG5cblx0bGV0IHdpZHRoID0gby53aWR0aChzZWxmLCBzaSwgc2l6ZSk7XG5cdHdpZHRoICYmIHNldFN0eWxlUHgocHQsIFwiYm9yZGVyV2lkdGhcIiwgd2lkdGgpO1xuXG5cdHJldHVybiBwdDtcbn1cblxuZnVuY3Rpb24gY3Vyc29yUG9pbnRGaWxsKHNlbGYsIHNpKSB7XG5cdGxldCBzcCA9IHNlbGYuc2VyaWVzW3NpXS5wb2ludHM7XG5cdHJldHVybiBzcC5fZmlsbCB8fCBzcC5fc3Ryb2tlO1xufVxuXG5mdW5jdGlvbiBjdXJzb3JQb2ludFN0cm9rZShzZWxmLCBzaSkge1xuXHRsZXQgc3AgPSBzZWxmLnNlcmllc1tzaV0ucG9pbnRzO1xuXHRyZXR1cm4gc3AuX3N0cm9rZSB8fCBzcC5fZmlsbDtcbn1cblxuZnVuY3Rpb24gY3Vyc29yUG9pbnRTaXplKHNlbGYsIHNpKSB7XG5cdGxldCBzcCA9IHNlbGYuc2VyaWVzW3NpXS5wb2ludHM7XG5cdHJldHVybiBzcC5zaXplO1xufVxuXG5jb25zdCBtb3ZlVHVwbGUgPSBbMCwwXTtcblxuZnVuY3Rpb24gY3Vyc29yTW92ZShzZWxmLCBtb3VzZUxlZnQxLCBtb3VzZVRvcDEpIHtcblx0bW92ZVR1cGxlWzBdID0gbW91c2VMZWZ0MTtcblx0bW92ZVR1cGxlWzFdID0gbW91c2VUb3AxO1xuXHRyZXR1cm4gbW92ZVR1cGxlO1xufVxuXG5mdW5jdGlvbiBmaWx0QnRuMChzZWxmLCB0YXJnLCBoYW5kbGUsIG9ubHlUYXJnID0gdHJ1ZSkge1xuXHRyZXR1cm4gZSA9PiB7XG5cdFx0ZS5idXR0b24gPT0gMCAmJiAoIW9ubHlUYXJnIHx8IGUudGFyZ2V0ID09IHRhcmcpICYmIGhhbmRsZShlKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZmlsdFRhcmcoc2VsZiwgdGFyZywgaGFuZGxlLCBvbmx5VGFyZyA9IHRydWUpIHtcblx0cmV0dXJuIGUgPT4ge1xuXHRcdCghb25seVRhcmcgfHwgZS50YXJnZXQgPT0gdGFyZykgJiYgaGFuZGxlKGUpO1xuXHR9O1xufVxuXG5jb25zdCBjdXJzb3JPcHRzID0ge1xuXHRzaG93OiB0cnVlLFxuXHR4OiB0cnVlLFxuXHR5OiB0cnVlLFxuXHRsb2NrOiBmYWxzZSxcblx0bW92ZTogY3Vyc29yTW92ZSxcblx0cG9pbnRzOiB7XG5cdFx0b25lOiAgICBmYWxzZSxcblx0XHRzaG93OiAgIGN1cnNvclBvaW50U2hvdyxcblx0XHRzaXplOiAgIGN1cnNvclBvaW50U2l6ZSxcblx0XHR3aWR0aDogIDAsXG5cdFx0c3Ryb2tlOiBjdXJzb3JQb2ludFN0cm9rZSxcblx0XHRmaWxsOiAgIGN1cnNvclBvaW50RmlsbCxcblx0fSxcblxuXHRiaW5kOiB7XG5cdFx0bW91c2Vkb3duOiAgIGZpbHRCdG4wLFxuXHRcdG1vdXNldXA6ICAgICBmaWx0QnRuMCxcblx0XHRjbGljazogICAgICAgZmlsdEJ0bjAsIC8vIGxlZ2VuZCBjbGlja3MsIG5vdCAudS1vdmVyIGNsaWNrc1xuXHRcdGRibGNsaWNrOiAgICBmaWx0QnRuMCxcblxuXHRcdG1vdXNlbW92ZTogICBmaWx0VGFyZyxcblx0XHRtb3VzZWxlYXZlOiAgZmlsdFRhcmcsXG5cdFx0bW91c2VlbnRlcjogIGZpbHRUYXJnLFxuXHR9LFxuXG5cdGRyYWc6IHtcblx0XHRzZXRTY2FsZTogdHJ1ZSxcblx0XHR4OiB0cnVlLFxuXHRcdHk6IGZhbHNlLFxuXHRcdGRpc3Q6IDAsXG5cdFx0dW5pOiBudWxsLFxuXHRcdGNsaWNrOiAoc2VsZiwgZSkgPT4ge1xuXHRcdC8vXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9LFxuXHRcdF94OiBmYWxzZSxcblx0XHRfeTogZmFsc2UsXG5cdH0sXG5cblx0Zm9jdXM6IHtcblx0XHRkaXN0OiAoc2VsZiwgc2VyaWVzSWR4LCBkYXRhSWR4LCB2YWxQb3MsIGN1clBvcykgPT4gdmFsUG9zIC0gY3VyUG9zLFxuXHRcdHByb3g6IC0xLFxuXHRcdGJpYXM6IDAsXG5cdH0sXG5cblx0aG92ZXI6IHtcblx0XHRza2lwOiBbdm9pZCAwXSxcblx0XHRwcm94OiBudWxsLFxuXHRcdGJpYXM6IDAsXG5cdH0sXG5cblx0bGVmdDogLTEwLFxuXHR0b3A6IC0xMCxcblx0aWR4OiBudWxsLFxuXHRkYXRhSWR4OiBudWxsLFxuXHRpZHhzOiBudWxsLFxuXG5cdGV2ZW50OiBudWxsLFxufTtcblxuY29uc3QgYXhpc0xpbmVzID0ge1xuXHRzaG93OiB0cnVlLFxuXHRzdHJva2U6IFwicmdiYSgwLDAsMCwwLjA3KVwiLFxuXHR3aWR0aDogMixcbi8vXHRkYXNoOiBbXSxcbn07XG5cbmNvbnN0IGdyaWQgPSBhc3NpZ24oe30sIGF4aXNMaW5lcywge1xuXHRmaWx0ZXI6IHJldEFyZzEsXG59KTtcblxuY29uc3QgdGlja3MgPSBhc3NpZ24oe30sIGdyaWQsIHtcblx0c2l6ZTogMTAsXG59KTtcblxuY29uc3QgYm9yZGVyID0gYXNzaWduKHt9LCBheGlzTGluZXMsIHtcblx0c2hvdzogZmFsc2UsXG59KTtcblxuY29uc3QgZm9udCAgICAgID0gJzEycHggc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiJztcbmNvbnN0IGxhYmVsRm9udCA9IFwiYm9sZCBcIiArIGZvbnQ7XG5jb25zdCBsaW5lR2FwID0gMS41O1x0Ly8gZm9udC1zaXplIG11bHRpcGxpZXJcblxuY29uc3QgeEF4aXNPcHRzID0ge1xuXHRzaG93OiB0cnVlLFxuXHRzY2FsZTogXCJ4XCIsXG5cdHN0cm9rZTogaGV4QmxhY2ssXG5cdHNwYWNlOiA1MCxcblx0Z2FwOiA1LFxuXHRhbGlnblRvOiAxLFxuXHRzaXplOiA1MCxcblx0bGFiZWxHYXA6IDAsXG5cdGxhYmVsU2l6ZTogMzAsXG5cdGxhYmVsRm9udCxcblx0c2lkZTogMixcbi8vXHRjbGFzczogXCJ4LXZhbHNcIixcbi8vXHRpbmNyczogdGltZUluY3JzLFxuLy9cdHZhbHVlczogdGltZVZhbHMsXG4vL1x0ZmlsdGVyOiByZXRBcmcxLFxuXHRncmlkLFxuXHR0aWNrcyxcblx0Ym9yZGVyLFxuXHRmb250LFxuXHRsaW5lR2FwLFxuXHRyb3RhdGU6IDAsXG59O1xuXG5jb25zdCBudW1TZXJpZXNMYWJlbCA9IFwiVmFsdWVcIjtcbmNvbnN0IHRpbWVTZXJpZXNMYWJlbCA9IFwiVGltZVwiO1xuXG5jb25zdCB4U2VyaWVzT3B0cyA9IHtcblx0c2hvdzogdHJ1ZSxcblx0c2NhbGU6IFwieFwiLFxuXHRhdXRvOiBmYWxzZSxcblx0c29ydGVkOiAxLFxuLy9cdGxhYmVsOiBcIlRpbWVcIixcbi8vXHR2YWx1ZTogdiA9PiBzdGFtcChuZXcgRGF0ZSh2ICogMWUzKSksXG5cblx0Ly8gaW50ZXJuYWwgY2FjaGVzXG5cdG1pbjogaW5mLFxuXHRtYXg6IC1pbmYsXG5cdGlkeHM6IFtdLFxufTtcblxuZnVuY3Rpb24gbnVtQXhpc1ZhbHMoc2VsZiwgc3BsaXRzLCBheGlzSWR4LCBmb3VuZFNwYWNlLCBmb3VuZEluY3IpIHtcblx0cmV0dXJuIHNwbGl0cy5tYXAodiA9PiB2ID09IG51bGwgPyBcIlwiIDogZm10TnVtKHYpKTtcbn1cblxuZnVuY3Rpb24gbnVtQXhpc1NwbGl0cyhzZWxmLCBheGlzSWR4LCBzY2FsZU1pbiwgc2NhbGVNYXgsIGZvdW5kSW5jciwgZm91bmRTcGFjZSwgZm9yY2VNaW4pIHtcblx0bGV0IHNwbGl0cyA9IFtdO1xuXG5cdGxldCBudW1EZWMgPSBmaXhlZERlYy5nZXQoZm91bmRJbmNyKSB8fCAwO1xuXG5cdHNjYWxlTWluID0gZm9yY2VNaW4gPyBzY2FsZU1pbiA6IHJvdW5kRGVjKGluY3JSb3VuZFVwKHNjYWxlTWluLCBmb3VuZEluY3IpLCBudW1EZWMpO1xuXG5cdGZvciAobGV0IHZhbCA9IHNjYWxlTWluOyB2YWwgPD0gc2NhbGVNYXg7IHZhbCA9IHJvdW5kRGVjKHZhbCArIGZvdW5kSW5jciwgbnVtRGVjKSlcblx0XHRzcGxpdHMucHVzaChPYmplY3QuaXModmFsLCAtMCkgPyAwIDogdmFsKTtcdFx0Ly8gY29hbGVzY2VzIC0wXG5cblx0cmV0dXJuIHNwbGl0cztcbn1cblxuLy8gdGhpcyBkb2VzbnQgd29yayBmb3Igc2luLCB3aGljaCBuZWVkcyB0byBjb21lIG9mZiBmcm9tIDAgaW5kZXBlbmRlbnRseSBpbiBwb3MgYW5kIG5lZyBkaXJzXG5mdW5jdGlvbiBsb2dBeGlzU3BsaXRzKHNlbGYsIGF4aXNJZHgsIHNjYWxlTWluLCBzY2FsZU1heCwgZm91bmRJbmNyLCBmb3VuZFNwYWNlLCBmb3JjZU1pbikge1xuXHRjb25zdCBzcGxpdHMgPSBbXTtcblxuXHRjb25zdCBsb2dCYXNlID0gc2VsZi5zY2FsZXNbc2VsZi5heGVzW2F4aXNJZHhdLnNjYWxlXS5sb2c7XG5cblx0Y29uc3QgbG9nRm4gPSBsb2dCYXNlID09IDEwID8gbG9nMTAgOiBsb2cyO1xuXG5cdGNvbnN0IGV4cCA9IGZsb29yKGxvZ0ZuKHNjYWxlTWluKSk7XG5cblx0Zm91bmRJbmNyID0gcG93KGxvZ0Jhc2UsIGV4cCk7XG5cblx0Ly8gYm9vOiAxMCAqKiAtMjQgPT09IDEuMDAwMDAwMDAwMDAwMDAwMWUtMjRcblx0Ly8gdGhpcyBncmFicyB0aGUgcHJvcGVyIDFlLTI0IG9uZVxuXHRpZiAobG9nQmFzZSA9PSAxMClcblx0XHRmb3VuZEluY3IgPSBudW1JbmNyc1tjbG9zZXN0SWR4KGZvdW5kSW5jciwgbnVtSW5jcnMpXTtcblxuXHRsZXQgc3BsaXQgPSBzY2FsZU1pbjtcblx0bGV0IG5leHRNYWdJbmNyID0gZm91bmRJbmNyICogbG9nQmFzZTtcblxuXHRpZiAobG9nQmFzZSA9PSAxMClcblx0XHRuZXh0TWFnSW5jciA9IG51bUluY3JzW2Nsb3Nlc3RJZHgobmV4dE1hZ0luY3IsIG51bUluY3JzKV07XG5cblx0ZG8ge1xuXHRcdHNwbGl0cy5wdXNoKHNwbGl0KTtcblx0XHRzcGxpdCA9IHNwbGl0ICsgZm91bmRJbmNyO1xuXG5cdFx0aWYgKGxvZ0Jhc2UgPT0gMTAgJiYgIWZpeGVkRGVjLmhhcyhzcGxpdCkpXG5cdFx0XHRzcGxpdCA9IHJvdW5kRGVjKHNwbGl0LCBmaXhlZERlYy5nZXQoZm91bmRJbmNyKSk7XG5cblx0XHRpZiAoc3BsaXQgPj0gbmV4dE1hZ0luY3IpIHtcblx0XHRcdGZvdW5kSW5jciA9IHNwbGl0O1xuXHRcdFx0bmV4dE1hZ0luY3IgPSBmb3VuZEluY3IgKiBsb2dCYXNlO1xuXG5cdFx0XHRpZiAobG9nQmFzZSA9PSAxMClcblx0XHRcdFx0bmV4dE1hZ0luY3IgPSBudW1JbmNyc1tjbG9zZXN0SWR4KG5leHRNYWdJbmNyLCBudW1JbmNycyldO1xuXHRcdH1cblx0fSB3aGlsZSAoc3BsaXQgPD0gc2NhbGVNYXgpO1xuXG5cdHJldHVybiBzcGxpdHM7XG59XG5cbmZ1bmN0aW9uIGFzaW5oQXhpc1NwbGl0cyhzZWxmLCBheGlzSWR4LCBzY2FsZU1pbiwgc2NhbGVNYXgsIGZvdW5kSW5jciwgZm91bmRTcGFjZSwgZm9yY2VNaW4pIHtcblx0bGV0IHNjID0gc2VsZi5zY2FsZXNbc2VsZi5heGVzW2F4aXNJZHhdLnNjYWxlXTtcblxuXHRsZXQgbGludGhyZXNoID0gc2MuYXNpbmg7XG5cblx0bGV0IHBvc1NwbGl0cyA9IHNjYWxlTWF4ID4gbGludGhyZXNoID8gbG9nQXhpc1NwbGl0cyhzZWxmLCBheGlzSWR4LCBtYXgobGludGhyZXNoLCBzY2FsZU1pbiksIHNjYWxlTWF4LCBmb3VuZEluY3IpIDogW2xpbnRocmVzaF07XG5cdGxldCB6ZXJvID0gc2NhbGVNYXggPj0gMCAmJiBzY2FsZU1pbiA8PSAwID8gWzBdIDogW107XG5cdGxldCBuZWdTcGxpdHMgPSBzY2FsZU1pbiA8IC1saW50aHJlc2ggPyBsb2dBeGlzU3BsaXRzKHNlbGYsIGF4aXNJZHgsIG1heChsaW50aHJlc2gsIC1zY2FsZU1heCksIC1zY2FsZU1pbiwgZm91bmRJbmNyKTogW2xpbnRocmVzaF07XG5cblx0cmV0dXJuIG5lZ1NwbGl0cy5yZXZlcnNlKCkubWFwKHYgPT4gLXYpLmNvbmNhdCh6ZXJvLCBwb3NTcGxpdHMpO1xufVxuXG5jb25zdCBSRV9BTEwgICA9IC8uLztcbmNvbnN0IFJFXzEyMzU3ID0gL1sxMjM1N10vO1xuY29uc3QgUkVfMTI1ICAgPSAvWzEyNV0vO1xuY29uc3QgUkVfMSAgICAgPSAvMS87XG5cbmNvbnN0IF9maWx0ID0gKHNwbGl0cywgZGlzdHIsIHJlLCBrZWVwTW9kKSA9PiBzcGxpdHMubWFwKCh2LCBpKSA9PiAoKGRpc3RyID09IDQgJiYgdiA9PSAwKSB8fCBpICUga2VlcE1vZCA9PSAwICYmIHJlLnRlc3Qodi50b0V4cG9uZW50aWFsKClbdiA8IDAgPyAxIDogMF0pKSA/IHYgOiBudWxsKTtcblxuZnVuY3Rpb24gbG9nMTBBeGlzVmFsc0ZpbHQoc2VsZiwgc3BsaXRzLCBheGlzSWR4LCBmb3VuZFNwYWNlLCBmb3VuZEluY3IpIHtcblx0bGV0IGF4aXMgPSBzZWxmLmF4ZXNbYXhpc0lkeF07XG5cdGxldCBzY2FsZUtleSA9IGF4aXMuc2NhbGU7XG5cdGxldCBzYyA9IHNlbGYuc2NhbGVzW3NjYWxlS2V5XTtcblxuLy9cdGlmIChzYy5kaXN0ciA9PSAzICYmIHNjLmxvZyA9PSAyKVxuLy9cdFx0cmV0dXJuIHNwbGl0cztcblxuXHRsZXQgdmFsVG9Qb3MgPSBzZWxmLnZhbFRvUG9zO1xuXG5cdGxldCBtaW5TcGFjZSA9IGF4aXMuX3NwYWNlO1xuXG5cdGxldCBfMTAgPSB2YWxUb1BvcygxMCwgc2NhbGVLZXkpO1xuXG5cdGxldCByZSA9IChcblx0XHR2YWxUb1Bvcyg5LCBzY2FsZUtleSkgLSBfMTAgPj0gbWluU3BhY2UgPyBSRV9BTEwgOlxuXHRcdHZhbFRvUG9zKDcsIHNjYWxlS2V5KSAtIF8xMCA+PSBtaW5TcGFjZSA/IFJFXzEyMzU3IDpcblx0XHR2YWxUb1Bvcyg1LCBzY2FsZUtleSkgLSBfMTAgPj0gbWluU3BhY2UgPyBSRV8xMjUgOlxuXHRcdFJFXzFcblx0KTtcblxuXHRpZiAocmUgPT0gUkVfMSkge1xuXHRcdGxldCBtYWdTcGFjZSA9IGFicyh2YWxUb1BvcygxLCBzY2FsZUtleSkgLSBfMTApO1xuXG5cdFx0aWYgKG1hZ1NwYWNlIDwgbWluU3BhY2UpXG5cdFx0XHRyZXR1cm4gX2ZpbHQoc3BsaXRzLnNsaWNlKCkucmV2ZXJzZSgpLCBzYy5kaXN0ciwgcmUsIGNlaWwobWluU3BhY2UgLyBtYWdTcGFjZSkpLnJldmVyc2UoKTsgLy8gbWF4LT5taW4gc2tpcFxuXHR9XG5cblx0cmV0dXJuIF9maWx0KHNwbGl0cywgc2MuZGlzdHIsIHJlLCAxKTtcbn1cblxuZnVuY3Rpb24gbG9nMkF4aXNWYWxzRmlsdChzZWxmLCBzcGxpdHMsIGF4aXNJZHgsIGZvdW5kU3BhY2UsIGZvdW5kSW5jcikge1xuXHRsZXQgYXhpcyA9IHNlbGYuYXhlc1theGlzSWR4XTtcblx0bGV0IHNjYWxlS2V5ID0gYXhpcy5zY2FsZTtcblx0bGV0IG1pblNwYWNlID0gYXhpcy5fc3BhY2U7XG5cdGxldCB2YWxUb1BvcyA9IHNlbGYudmFsVG9Qb3M7XG5cblx0bGV0IG1hZ1NwYWNlID0gYWJzKHZhbFRvUG9zKDEsIHNjYWxlS2V5KSAtIHZhbFRvUG9zKDIsIHNjYWxlS2V5KSk7XG5cblx0aWYgKG1hZ1NwYWNlIDwgbWluU3BhY2UpXG5cdFx0cmV0dXJuIF9maWx0KHNwbGl0cy5zbGljZSgpLnJldmVyc2UoKSwgMywgUkVfQUxMLCBjZWlsKG1pblNwYWNlIC8gbWFnU3BhY2UpKS5yZXZlcnNlKCk7IC8vIG1heC0+bWluIHNraXBcblxuXHRyZXR1cm4gc3BsaXRzO1xufVxuXG5mdW5jdGlvbiBudW1TZXJpZXNWYWwoc2VsZiwgdmFsLCBzZXJpZXNJZHgsIGRhdGFJZHgpIHtcblx0cmV0dXJuIGRhdGFJZHggPT0gbnVsbCA/IExFR0VORF9ESVNQIDogdmFsID09IG51bGwgPyBcIlwiIDogZm10TnVtKHZhbCk7XG59XG5cbmNvbnN0IHlBeGlzT3B0cyA9IHtcblx0c2hvdzogdHJ1ZSxcblx0c2NhbGU6IFwieVwiLFxuXHRzdHJva2U6IGhleEJsYWNrLFxuXHRzcGFjZTogMzAsXG5cdGdhcDogNSxcblx0YWxpZ25UbzogMSxcblx0c2l6ZTogNTAsXG5cdGxhYmVsR2FwOiAwLFxuXHRsYWJlbFNpemU6IDMwLFxuXHRsYWJlbEZvbnQsXG5cdHNpZGU6IDMsXG4vL1x0Y2xhc3M6IFwieS12YWxzXCIsXG4vL1x0aW5jcnM6IG51bUluY3JzLFxuLy9cdHZhbHVlczogKHZhbHMsIHNwYWNlKSA9PiB2YWxzLFxuLy9cdGZpbHRlcjogcmV0QXJnMSxcblx0Z3JpZCxcblx0dGlja3MsXG5cdGJvcmRlcixcblx0Zm9udCxcblx0bGluZUdhcCxcblx0cm90YXRlOiAwLFxufTtcblxuLy8gdGFrZXMgc3Ryb2tlIHdpZHRoXG5mdW5jdGlvbiBwdERpYSh3aWR0aCwgbXVsdCkge1xuXHRsZXQgZGlhID0gMyArICh3aWR0aCB8fCAxKSAqIDI7XG5cdHJldHVybiByb3VuZERlYyhkaWEgKiBtdWx0LCAzKTtcbn1cblxuZnVuY3Rpb24gc2VyaWVzUG9pbnRzU2hvdyhzZWxmLCBzaSkge1xuXHRsZXQgeyBzY2FsZSwgaWR4cyB9ID0gc2VsZi5zZXJpZXNbMF07XG5cdGxldCB4RGF0YSA9IHNlbGYuX2RhdGFbMF07XG5cdGxldCBwMCA9IHNlbGYudmFsVG9Qb3MoeERhdGFbaWR4c1swXV0sIHNjYWxlLCB0cnVlKTtcblx0bGV0IHAxID0gc2VsZi52YWxUb1Bvcyh4RGF0YVtpZHhzWzFdXSwgc2NhbGUsIHRydWUpO1xuXHRsZXQgZGltID0gYWJzKHAxIC0gcDApO1xuXG5cdGxldCBzID0gc2VsZi5zZXJpZXNbc2ldO1xuLy9cdGNvbnN0IGRpYSA9IHB0RGlhKHMud2lkdGgsIHB4UmF0aW8pO1xuXHRsZXQgbWF4UHRzID0gZGltIC8gKHMucG9pbnRzLnNwYWNlICogcHhSYXRpbyk7XG5cdHJldHVybiBpZHhzWzFdIC0gaWR4c1swXSA8PSBtYXhQdHM7XG59XG5cbmNvbnN0IGZhY2V0ID0ge1xuXHRzY2FsZTogbnVsbCxcblx0YXV0bzogdHJ1ZSxcblx0c29ydGVkOiAwLFxuXG5cdC8vIGludGVybmFsIGNhY2hlc1xuXHRtaW46IGluZixcblx0bWF4OiAtaW5mLFxufTtcblxuY29uc3QgZ2FwcyA9IChzZWxmLCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIG51bGxHYXBzKSA9PiBudWxsR2FwcztcblxuY29uc3QgeHlTZXJpZXNPcHRzID0ge1xuXHRzaG93OiB0cnVlLFxuXHRhdXRvOiB0cnVlLFxuXHRzb3J0ZWQ6IDAsXG5cdGdhcHMsXG5cdGFscGhhOiAxLFxuXHRmYWNldHM6IFtcblx0XHRhc3NpZ24oe30sIGZhY2V0LCB7c2NhbGU6ICd4J30pLFxuXHRcdGFzc2lnbih7fSwgZmFjZXQsIHtzY2FsZTogJ3knfSksXG5cdF0sXG59O1xuXG5jb25zdCB5U2VyaWVzT3B0cyA9IHtcblx0c2NhbGU6IFwieVwiLFxuXHRhdXRvOiB0cnVlLFxuXHRzb3J0ZWQ6IDAsXG5cdHNob3c6IHRydWUsXG5cdHNwYW5HYXBzOiBmYWxzZSxcblx0Z2Fwcyxcblx0YWxwaGE6IDEsXG5cdHBvaW50czoge1xuXHRcdHNob3c6IHNlcmllc1BvaW50c1Nob3csXG5cdFx0ZmlsdGVyOiBudWxsLFxuXHQvLyAgcGF0aHM6XG5cdC8vXHRzdHJva2U6IFwiIzAwMFwiLFxuXHQvL1x0ZmlsbDogXCIjZmZmXCIsXG5cdC8vXHR3aWR0aDogMSxcblx0Ly9cdHNpemU6IDEwLFxuXHR9LFxuLy9cdGxhYmVsOiBcIlZhbHVlXCIsXG4vL1x0dmFsdWU6IHYgPT4gdixcblx0dmFsdWVzOiBudWxsLFxuXG5cdC8vIGludGVybmFsIGNhY2hlc1xuXHRtaW46IGluZixcblx0bWF4OiAtaW5mLFxuXHRpZHhzOiBbXSxcblxuXHRwYXRoOiBudWxsLFxuXHRjbGlwOiBudWxsLFxufTtcblxuZnVuY3Rpb24gY2xhbXBTY2FsZShzZWxmLCB2YWwsIHNjYWxlTWluLCBzY2FsZU1heCwgc2NhbGVLZXkpIHtcbi8qXG5cdGlmICh2YWwgPCAwKSB7XG5cdFx0bGV0IGNzc0hndCA9IHNlbGYuYmJveC5oZWlnaHQgLyBweFJhdGlvO1xuXHRcdGxldCBhYnNQb3MgPSBzZWxmLnZhbFRvUG9zKGFicyh2YWwpLCBzY2FsZUtleSk7XG5cdFx0bGV0IGZyb21CdG0gPSBjc3NIZ3QgLSBhYnNQb3M7XG5cdFx0cmV0dXJuIHNlbGYucG9zVG9WYWwoY3NzSGd0ICsgZnJvbUJ0bSwgc2NhbGVLZXkpO1xuXHR9XG4qL1xuXHRyZXR1cm4gc2NhbGVNaW4gLyAxMDtcbn1cblxuY29uc3QgeFNjYWxlT3B0cyA9IHtcblx0dGltZTogRkVBVF9USU1FLFxuXHRhdXRvOiB0cnVlLFxuXHRkaXN0cjogMSxcblx0bG9nOiAxMCxcblx0YXNpbmg6IDEsXG5cdG1pbjogbnVsbCxcblx0bWF4OiBudWxsLFxuXHRkaXI6IDEsXG5cdG9yaTogMCxcbn07XG5cbmNvbnN0IHlTY2FsZU9wdHMgPSBhc3NpZ24oe30sIHhTY2FsZU9wdHMsIHtcblx0dGltZTogZmFsc2UsXG5cdG9yaTogMSxcbn0pO1xuXG5jb25zdCBzeW5jcyA9IHt9O1xuXG5mdW5jdGlvbiBfc3luYyhrZXksIG9wdHMpIHtcblx0bGV0IHMgPSBzeW5jc1trZXldO1xuXG5cdGlmICghcykge1xuXHRcdHMgPSB7XG5cdFx0XHRrZXksXG5cdFx0XHRwbG90czogW10sXG5cdFx0XHRzdWIocGxvdCkge1xuXHRcdFx0XHRzLnBsb3RzLnB1c2gocGxvdCk7XG5cdFx0XHR9LFxuXHRcdFx0dW5zdWIocGxvdCkge1xuXHRcdFx0XHRzLnBsb3RzID0gcy5wbG90cy5maWx0ZXIoYyA9PiBjICE9IHBsb3QpO1xuXHRcdFx0fSxcblx0XHRcdHB1Yih0eXBlLCBzZWxmLCB4LCB5LCB3LCBoLCBpKSB7XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcy5wbG90cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRzLnBsb3RzW2pdICE9IHNlbGYgJiYgcy5wbG90c1tqXS5wdWIodHlwZSwgc2VsZiwgeCwgeSwgdywgaCwgaSk7XG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHRpZiAoa2V5ICE9IG51bGwpXG5cdFx0XHRzeW5jc1trZXldID0gcztcblx0fVxuXG5cdHJldHVybiBzO1xufVxuXG5jb25zdCBCQU5EX0NMSVBfRklMTCAgID0gMSA8PCAwO1xuY29uc3QgQkFORF9DTElQX1NUUk9LRSA9IDEgPDwgMTtcblxuZnVuY3Rpb24gb3JpZW50KHUsIHNlcmllc0lkeCwgY2IpIHtcblx0Y29uc3QgbW9kZSA9IHUubW9kZTtcblx0Y29uc3Qgc2VyaWVzID0gdS5zZXJpZXNbc2VyaWVzSWR4XTtcblx0Y29uc3QgZGF0YSA9IG1vZGUgPT0gMiA/IHUuX2RhdGFbc2VyaWVzSWR4XSA6IHUuX2RhdGE7XG5cdGNvbnN0IHNjYWxlcyA9IHUuc2NhbGVzO1xuXHRjb25zdCBiYm94ICAgPSB1LmJib3g7XG5cblx0bGV0IGR4ID0gZGF0YVswXSxcblx0XHRkeSA9IG1vZGUgPT0gMiA/IGRhdGFbMV0gOiBkYXRhW3Nlcmllc0lkeF0sXG5cdFx0c3ggPSBtb2RlID09IDIgPyBzY2FsZXNbc2VyaWVzLmZhY2V0c1swXS5zY2FsZV0gOiBzY2FsZXNbdS5zZXJpZXNbMF0uc2NhbGVdLFxuXHRcdHN5ID0gbW9kZSA9PSAyID8gc2NhbGVzW3Nlcmllcy5mYWNldHNbMV0uc2NhbGVdIDogc2NhbGVzW3Nlcmllcy5zY2FsZV0sXG5cdFx0bCA9IGJib3gubGVmdCxcblx0XHR0ID0gYmJveC50b3AsXG5cdFx0dyA9IGJib3gud2lkdGgsXG5cdFx0aCA9IGJib3guaGVpZ2h0LFxuXHRcdEggPSB1LnZhbFRvUG9zSCxcblx0XHRWID0gdS52YWxUb1Bvc1Y7XG5cblx0cmV0dXJuIChzeC5vcmkgPT0gMFxuXHRcdD8gY2IoXG5cdFx0XHRzZXJpZXMsXG5cdFx0XHRkeCxcblx0XHRcdGR5LFxuXHRcdFx0c3gsXG5cdFx0XHRzeSxcblx0XHRcdEgsXG5cdFx0XHRWLFxuXHRcdFx0bCxcblx0XHRcdHQsXG5cdFx0XHR3LFxuXHRcdFx0aCxcblx0XHRcdG1vdmVUb0gsXG5cdFx0XHRsaW5lVG9ILFxuXHRcdFx0cmVjdEgsXG5cdFx0XHRhcmNILFxuXHRcdFx0YmV6aWVyQ3VydmVUb0gsXG5cdFx0KVxuXHRcdDogY2IoXG5cdFx0XHRzZXJpZXMsXG5cdFx0XHRkeCxcblx0XHRcdGR5LFxuXHRcdFx0c3gsXG5cdFx0XHRzeSxcblx0XHRcdFYsXG5cdFx0XHRILFxuXHRcdFx0dCxcblx0XHRcdGwsXG5cdFx0XHRoLFxuXHRcdFx0dyxcblx0XHRcdG1vdmVUb1YsXG5cdFx0XHRsaW5lVG9WLFxuXHRcdFx0cmVjdFYsXG5cdFx0XHRhcmNWLFxuXHRcdFx0YmV6aWVyQ3VydmVUb1YsXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBiYW5kRmlsbENsaXBEaXJzKHNlbGYsIHNlcmllc0lkeCkge1xuXHRsZXQgZmlsbERpciA9IDA7XG5cblx0Ly8gMiBiaXRzLCAtMSB8IDFcblx0bGV0IGNsaXBEaXJzID0gMDtcblxuXHRsZXQgYmFuZHMgPSBpZk51bGwoc2VsZi5iYW5kcywgRU1QVFlfQVJSKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGJhbmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGIgPSBiYW5kc1tpXTtcblxuXHRcdC8vIGlzIGEgXCJmcm9tXCIgYmFuZCBlZGdlXG5cdFx0aWYgKGIuc2VyaWVzWzBdID09IHNlcmllc0lkeClcblx0XHRcdGZpbGxEaXIgPSBiLmRpcjtcblx0XHQvLyBpcyBhIFwidG9cIiBiYW5kIGVkZ2Vcblx0XHRlbHNlIGlmIChiLnNlcmllc1sxXSA9PSBzZXJpZXNJZHgpIHtcblx0XHRcdGlmIChiLmRpciA9PSAxKVxuXHRcdFx0XHRjbGlwRGlycyB8PSAxO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjbGlwRGlycyB8PSAyO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0ZmlsbERpcixcblx0XHQoXG5cdFx0XHRjbGlwRGlycyA9PSAxID8gLTEgOiAvLyBuZWcgb25seVxuXHRcdFx0Y2xpcERpcnMgPT0gMiA/ICAxIDogLy8gcG9zIG9ubHlcblx0XHRcdGNsaXBEaXJzID09IDMgPyAgMiA6IC8vIGJvdGhcblx0XHRcdCAgICAgICAgICAgICAgICAgMCAgIC8vIG5laXRoZXJcblx0XHQpXG5cdF07XG59XG5cbmZ1bmN0aW9uIHNlcmllc0ZpbGxUbyhzZWxmLCBzZXJpZXNJZHgsIGRhdGFNaW4sIGRhdGFNYXgsIGJhbmRGaWxsRGlyKSB7XG5cdGxldCBtb2RlID0gc2VsZi5tb2RlO1xuXHRsZXQgc2VyaWVzID0gc2VsZi5zZXJpZXNbc2VyaWVzSWR4XTtcblx0bGV0IHNjYWxlS2V5ID0gbW9kZSA9PSAyID8gc2VyaWVzLmZhY2V0c1sxXS5zY2FsZSA6IHNlcmllcy5zY2FsZTtcblx0bGV0IHNjYWxlID0gc2VsZi5zY2FsZXNbc2NhbGVLZXldO1xuXG5cdHJldHVybiAoXG5cdFx0YmFuZEZpbGxEaXIgPT0gLTEgPyBzY2FsZS5taW4gOlxuXHRcdGJhbmRGaWxsRGlyID09ICAxID8gc2NhbGUubWF4IDpcblx0XHRzY2FsZS5kaXN0ciA9PSAgMyA/IChcblx0XHRcdHNjYWxlLmRpciA9PSAxID8gc2NhbGUubWluIDpcblx0XHRcdHNjYWxlLm1heFxuXHRcdCkgOiAwXG5cdCk7XG59XG5cbi8vIGNyZWF0ZXMgaW52ZXJ0ZWQgYmFuZCBjbGlwIHBhdGggKGZyb20gc3Ryb2tlIHBhdGggLT4geU1heCB8fCB5TWluKVxuLy8gY2xpcERpciBpcyBhbHdheXMgaW52ZXJzZSBvZiBmaWxsRGlyXG4vLyBkZWZhdWx0IGNsaXAgZGlyIGlzIHVwd2FyZHMgKDEpLCBzaW5jZSBkZWZhdWx0IGJhbmQgZmlsbCBpcyBkb3dud2FyZHMvZmlsbEJlbG93VG8gKC0xKSAoaGlnaElkeCAtPiBsb3dJZHgpXG5mdW5jdGlvbiBjbGlwQmFuZExpbmUoc2VsZiwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBzdHJva2VQYXRoLCBjbGlwRGlyKSB7XG5cdHJldHVybiBvcmllbnQoc2VsZiwgc2VyaWVzSWR4LCAoc2VyaWVzLCBkYXRhWCwgZGF0YVksIHNjYWxlWCwgc2NhbGVZLCB2YWxUb1Bvc1gsIHZhbFRvUG9zWSwgeE9mZiwgeU9mZiwgeERpbSwgeURpbSkgPT4ge1xuXHRcdGxldCBweFJvdW5kID0gc2VyaWVzLnB4Um91bmQ7XG5cblx0XHRjb25zdCBkaXIgPSBzY2FsZVguZGlyICogKHNjYWxlWC5vcmkgPT0gMCA/IDEgOiAtMSk7XG5cdFx0Y29uc3QgbGluZVRvID0gc2NhbGVYLm9yaSA9PSAwID8gbGluZVRvSCA6IGxpbmVUb1Y7XG5cblx0XHRsZXQgZnJJZHgsIHRvSWR4O1xuXG5cdFx0aWYgKGRpciA9PSAxKSB7XG5cdFx0XHRmcklkeCA9IGlkeDA7XG5cdFx0XHR0b0lkeCA9IGlkeDE7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZnJJZHggPSBpZHgxO1xuXHRcdFx0dG9JZHggPSBpZHgwO1xuXHRcdH1cblxuXHRcdC8vIHBhdGggc3RhcnRcblx0XHRsZXQgeDAgPSBweFJvdW5kKHZhbFRvUG9zWChkYXRhWFtmcklkeF0sIHNjYWxlWCwgeERpbSwgeE9mZikpO1xuXHRcdGxldCB5MCA9IHB4Um91bmQodmFsVG9Qb3NZKGRhdGFZW2ZySWR4XSwgc2NhbGVZLCB5RGltLCB5T2ZmKSk7XG5cdFx0Ly8gcGF0aCBlbmQgeFxuXHRcdGxldCB4MSA9IHB4Um91bmQodmFsVG9Qb3NYKGRhdGFYW3RvSWR4XSwgc2NhbGVYLCB4RGltLCB4T2ZmKSk7XG5cdFx0Ly8gdXBwZXIgb3IgbG93ZXIgeSBsaW1pdFxuXHRcdGxldCB5TGltaXQgPSBweFJvdW5kKHZhbFRvUG9zWShjbGlwRGlyID09IDEgPyBzY2FsZVkubWF4IDogc2NhbGVZLm1pbiwgc2NhbGVZLCB5RGltLCB5T2ZmKSk7XG5cblx0XHRsZXQgY2xpcCA9IG5ldyBQYXRoMkQoc3Ryb2tlUGF0aCk7XG5cblx0XHRsaW5lVG8oY2xpcCwgeDEsIHlMaW1pdCk7XG5cdFx0bGluZVRvKGNsaXAsIHgwLCB5TGltaXQpO1xuXHRcdGxpbmVUbyhjbGlwLCB4MCwgeTApO1xuXG5cdFx0cmV0dXJuIGNsaXA7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbGlwR2FwcyhnYXBzLCBvcmksIHBsb3RMZnQsIHBsb3RUb3AsIHBsb3RXaWQsIHBsb3RIZ3QpIHtcblx0bGV0IGNsaXAgPSBudWxsO1xuXG5cdC8vIGNyZWF0ZSBjbGlwIHBhdGggKGludmVydCBnYXBzIGFuZCBub24tZ2Fwcylcblx0aWYgKGdhcHMubGVuZ3RoID4gMCkge1xuXHRcdGNsaXAgPSBuZXcgUGF0aDJEKCk7XG5cblx0XHRjb25zdCByZWN0ID0gb3JpID09IDAgPyByZWN0SCA6IHJlY3RWO1xuXG5cdFx0bGV0IHByZXZHYXBFbmQgPSBwbG90TGZ0O1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBnYXBzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgZyA9IGdhcHNbaV07XG5cblx0XHRcdGlmIChnWzFdID4gZ1swXSkge1xuXHRcdFx0XHRsZXQgdyA9IGdbMF0gLSBwcmV2R2FwRW5kO1xuXG5cdFx0XHRcdHcgPiAwICYmIHJlY3QoY2xpcCwgcHJldkdhcEVuZCwgcGxvdFRvcCwgdywgcGxvdFRvcCArIHBsb3RIZ3QpO1xuXG5cdFx0XHRcdHByZXZHYXBFbmQgPSBnWzFdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCB3ID0gcGxvdExmdCArIHBsb3RXaWQgLSBwcmV2R2FwRW5kO1xuXG5cdFx0Ly8gaGFjayB0byBlbnN1cmUgd2UgZXhwYW5kIHRoZSBjbGlwIGVub3VnaCB0byBhdm9pZCBjdXR0aW5nIG9mZiBzdHJva2VzIGF0IGVkZ2VzXG5cdFx0bGV0IG1heFN0cm9rZVdpZHRoID0gMTA7XG5cblx0XHR3ID4gMCAmJiByZWN0KGNsaXAsIHByZXZHYXBFbmQsIHBsb3RUb3AgLSBtYXhTdHJva2VXaWR0aCAvIDIsIHcsIHBsb3RUb3AgKyBwbG90SGd0ICsgbWF4U3Ryb2tlV2lkdGgpO1xuXHR9XG5cblx0cmV0dXJuIGNsaXA7XG59XG5cbmZ1bmN0aW9uIGFkZEdhcChnYXBzLCBmcm9tWCwgdG9YKSB7XG5cdGxldCBwcmV2R2FwID0gZ2Fwc1tnYXBzLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChwcmV2R2FwICYmIHByZXZHYXBbMF0gPT0gZnJvbVgpXHRcdFx0Ly8gVE9ETzogZ2FwcyBtdXN0IGJlIGVuY29kZWQgYXQgc3Ryb2tlIHdpZHRocz9cblx0XHRwcmV2R2FwWzFdID0gdG9YO1xuXHRlbHNlXG5cdFx0Z2Fwcy5wdXNoKFtmcm9tWCwgdG9YXSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRHYXBzKHhzLCB5cywgaWR4MCwgaWR4MSwgZGlyLCBwaXhlbEZvclgsIGFsaWduKSB7XG5cdGxldCBnYXBzID0gW107XG5cdGxldCBsZW4gPSB4cy5sZW5ndGg7XG5cblx0Zm9yIChsZXQgaSA9IGRpciA9PSAxID8gaWR4MCA6IGlkeDE7IGkgPj0gaWR4MCAmJiBpIDw9IGlkeDE7IGkgKz0gZGlyKSB7XG5cdFx0bGV0IHlWYWwgPSB5c1tpXTtcblxuXHRcdGlmICh5VmFsID09PSBudWxsKSB7XG5cdFx0XHRsZXQgZnIgPSBpLCB0byA9IGk7XG5cblx0XHRcdGlmIChkaXIgPT0gMSkge1xuXHRcdFx0XHR3aGlsZSAoKytpIDw9IGlkeDEgJiYgeXNbaV0gPT09IG51bGwpXG5cdFx0XHRcdFx0dG8gPSBpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHdoaWxlICgtLWkgPj0gaWR4MCAmJiB5c1tpXSA9PT0gbnVsbClcblx0XHRcdFx0XHR0byA9IGk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBmclB4ID0gcGl4ZWxGb3JYKHhzW2ZyXSk7XG5cdFx0XHRsZXQgdG9QeCA9IHRvID09IGZyID8gZnJQeCA6IHBpeGVsRm9yWCh4c1t0b10pO1xuXG5cdFx0XHQvLyBpZiB2YWx1ZSBhZGphY2VudCB0byBlZGdlIG51bGwgaXMgc2FtZSBwaXhlbCwgdGhlbiBpdCdzIHBhcnRpYWxseVxuXHRcdFx0Ly8gZmlsbGVkIGFuZCBnYXAgc2hvdWxkIHN0YXJ0IGF0IG5leHQgcGl4ZWxcblx0XHRcdGxldCBmcmkyID0gZnIgLSBkaXI7XG5cdFx0XHRsZXQgZnJQeDIgPSBhbGlnbiA8PSAwICYmIGZyaTIgPj0gMCAmJiBmcmkyIDwgbGVuID8gcGl4ZWxGb3JYKHhzW2ZyaTJdKSA6IGZyUHg7XG5cdFx0Ly9cdGlmIChmclB4MiA9PSBmclB4KVxuXHRcdC8vXHRcdGZyUHgrKztcblx0XHQvL1x0ZWxzZVxuXHRcdFx0XHRmclB4ID0gZnJQeDI7XG5cblx0XHRcdGxldCB0b2kyID0gdG8gKyBkaXI7XG5cdFx0XHRsZXQgdG9QeDIgPSBhbGlnbiA+PSAwICYmIHRvaTIgPj0gMCAmJiB0b2kyIDwgbGVuID8gcGl4ZWxGb3JYKHhzW3RvaTJdKSA6IHRvUHg7XG5cdFx0Ly9cdGlmICh0b1B4MiA9PSB0b1B4KVxuXHRcdC8vXHRcdHRvUHgtLTtcblx0XHQvL1x0ZWxzZVxuXHRcdFx0XHR0b1B4ID0gdG9QeDI7XG5cblx0XHRcdGlmICh0b1B4ID49IGZyUHgpXG5cdFx0XHRcdGdhcHMucHVzaChbZnJQeCwgdG9QeF0pOyAvLyBhZGRHYXBcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ2Fwcztcbn1cblxuZnVuY3Rpb24gcHhSb3VuZEdlbihweEFsaWduKSB7XG5cdHJldHVybiBweEFsaWduID09IDAgPyByZXRBcmcwIDogcHhBbGlnbiA9PSAxID8gcm91bmQgOiB2ID0+IGluY3JSb3VuZCh2LCBweEFsaWduKTtcbn1cblxuLypcbi8vIGluZWZmaWNpZW50IGxpbmVhciBpbnRlcnBvbGF0aW9uIHRoYXQgZG9lcyBiaS1kaXJlY3RpbmFsIHNjYW5zIG9uIGVhY2ggY2FsbFxuZXhwb3J0IGZ1bmN0aW9uIGNvc3RseUxlcnAoaSwgaWR4MCwgaWR4MSwgX2RpclgsIGRhdGFZKSB7XG5cdGxldCBwcmV2Tm9uTnVsbCA9IG5vbk51bGxJZHgoZGF0YVksIF9kaXJYID09IDEgPyBpZHgwIDogaWR4MSwgaSwgLV9kaXJYKTtcblx0bGV0IG5leHROb25OdWxsID0gbm9uTnVsbElkeChkYXRhWSwgaSwgX2RpclggPT0gMSA/IGlkeDEgOiBpZHgwLCAgX2RpclgpO1xuXG5cdGxldCBwcmV2VmFsID0gZGF0YVlbcHJldk5vbk51bGxdO1xuXHRsZXQgbmV4dFZhbCA9IGRhdGFZW25leHROb25OdWxsXTtcblxuXHRyZXR1cm4gcHJldlZhbCArIChpIC0gcHJldk5vbk51bGwpIC8gKG5leHROb25OdWxsIC0gcHJldk5vbk51bGwpICogKG5leHRWYWwgLSBwcmV2VmFsKTtcbn1cbiovXG5cbmZ1bmN0aW9uIHJlY3Qob3JpKSB7XG5cdGxldCBtb3ZlVG8gPSBvcmkgPT0gMCA/XG5cdFx0bW92ZVRvSCA6XG5cdFx0bW92ZVRvVjtcblxuXHRsZXQgYXJjVG8gPSBvcmkgPT0gMCA/XG5cdFx0KHAsIHgxLCB5MSwgeDIsIHkyLCByKSA9PiB7IHAuYXJjVG8oeDEsIHkxLCB4MiwgeTIsIHIpOyB9IDpcblx0XHQocCwgeTEsIHgxLCB5MiwgeDIsIHIpID0+IHsgcC5hcmNUbyh4MSwgeTEsIHgyLCB5Miwgcik7IH07XG5cblx0bGV0IHJlY3QgPSBvcmkgPT0gMCA/XG5cdFx0KHAsIHgsIHksIHcsIGgpID0+IHsgcC5yZWN0KHgsIHksIHcsIGgpOyB9IDpcblx0XHQocCwgeSwgeCwgaCwgdykgPT4geyBwLnJlY3QoeCwgeSwgdywgaCk7IH07XG5cblx0Ly8gVE9ETyAocGVuZGluZyBiZXR0ZXIgYnJvd3NlciBzdXBwb3J0KTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC9yb3VuZFJlY3Rcblx0cmV0dXJuIChwLCB4LCB5LCB3LCBoLCBlbmRSYWQgPSAwLCBiYXNlUmFkID0gMCkgPT4ge1xuXHRcdGlmIChlbmRSYWQgPT0gMCAmJiBiYXNlUmFkID09IDApXG5cdFx0XHRyZWN0KHAsIHgsIHksIHcsIGgpO1xuXHRcdGVsc2Uge1xuXHRcdFx0ZW5kUmFkICA9IG1pbihlbmRSYWQsICB3IC8gMiwgaCAvIDIpO1xuXHRcdFx0YmFzZVJhZCA9IG1pbihiYXNlUmFkLCB3IC8gMiwgaCAvIDIpO1xuXG5cdFx0XHQvLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI1NTUxMi9ob3ctdG8tZHJhdy1hLXJvdW5kZWQtcmVjdGFuZ2xlLXVzaW5nLWh0bWwtY2FudmFzLzc4Mzg4NzEjNzgzODg3MVxuXHRcdFx0bW92ZVRvKHAsIHggKyBlbmRSYWQsIHkpO1xuXHRcdFx0YXJjVG8ocCwgeCArIHcsIHksIHggKyB3LCB5ICsgaCwgZW5kUmFkKTtcblx0XHRcdGFyY1RvKHAsIHggKyB3LCB5ICsgaCwgeCwgeSArIGgsIGJhc2VSYWQpO1xuXHRcdFx0YXJjVG8ocCwgeCwgeSArIGgsIHgsIHksIGJhc2VSYWQpO1xuXHRcdFx0YXJjVG8ocCwgeCwgeSwgeCArIHcsIHksIGVuZFJhZCk7XG5cdFx0XHRwLmNsb3NlUGF0aCgpO1xuXHRcdH1cblx0fTtcbn1cblxuLy8gb3JpZW50YXRpb24taW52ZXJ0aW5nIGNhbnZhcyBmdW5jdGlvbnNcbmNvbnN0IG1vdmVUb0ggPSAocCwgeCwgeSkgPT4geyBwLm1vdmVUbyh4LCB5KTsgfTtcbmNvbnN0IG1vdmVUb1YgPSAocCwgeSwgeCkgPT4geyBwLm1vdmVUbyh4LCB5KTsgfTtcbmNvbnN0IGxpbmVUb0ggPSAocCwgeCwgeSkgPT4geyBwLmxpbmVUbyh4LCB5KTsgfTtcbmNvbnN0IGxpbmVUb1YgPSAocCwgeSwgeCkgPT4geyBwLmxpbmVUbyh4LCB5KTsgfTtcbmNvbnN0IHJlY3RIID0gcmVjdCgwKTtcbmNvbnN0IHJlY3RWID0gcmVjdCgxKTtcbmNvbnN0IGFyY0ggPSAocCwgeCwgeSwgciwgc3RhcnRBbmdsZSwgZW5kQW5nbGUpID0+IHsgcC5hcmMoeCwgeSwgciwgc3RhcnRBbmdsZSwgZW5kQW5nbGUpOyB9O1xuY29uc3QgYXJjViA9IChwLCB5LCB4LCByLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkgPT4geyBwLmFyYyh4LCB5LCByLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7IH07XG5jb25zdCBiZXppZXJDdXJ2ZVRvSCA9IChwLCBicDF4LCBicDF5LCBicDJ4LCBicDJ5LCBwMngsIHAyeSkgPT4geyBwLmJlemllckN1cnZlVG8oYnAxeCwgYnAxeSwgYnAyeCwgYnAyeSwgcDJ4LCBwMnkpOyB9O1xuY29uc3QgYmV6aWVyQ3VydmVUb1YgPSAocCwgYnAxeSwgYnAxeCwgYnAyeSwgYnAyeCwgcDJ5LCBwMngpID0+IHsgcC5iZXppZXJDdXJ2ZVRvKGJwMXgsIGJwMXksIGJwMngsIGJwMnksIHAyeCwgcDJ5KTsgfTtcblxuLy8gVE9ETzogZHJhd1dyYXAoc2VyaWVzSWR4LCBkcmF3UG9pbnRzKSAoc2F2ZSwgcmVzdG9yZSwgdHJhbnNsYXRlLCBjbGlwKVxuZnVuY3Rpb24gcG9pbnRzKG9wdHMpIHtcblx0cmV0dXJuICh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIGZpbHRJZHhzKSA9PiB7XG5cdC8vXHRsb2coXCJkcmF3UG9pbnRzKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdHJldHVybiBvcmllbnQodSwgc2VyaWVzSWR4LCAoc2VyaWVzLCBkYXRhWCwgZGF0YVksIHNjYWxlWCwgc2NhbGVZLCB2YWxUb1Bvc1gsIHZhbFRvUG9zWSwgeE9mZiwgeU9mZiwgeERpbSwgeURpbSkgPT4ge1xuXHRcdFx0bGV0IHsgcHhSb3VuZCwgcG9pbnRzIH0gPSBzZXJpZXM7XG5cblx0XHRcdGxldCBtb3ZlVG8sIGFyYztcblxuXHRcdFx0aWYgKHNjYWxlWC5vcmkgPT0gMCkge1xuXHRcdFx0XHRtb3ZlVG8gPSBtb3ZlVG9IO1xuXHRcdFx0XHRhcmMgPSBhcmNIO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG1vdmVUbyA9IG1vdmVUb1Y7XG5cdFx0XHRcdGFyYyA9IGFyY1Y7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHdpZHRoID0gcm91bmREZWMocG9pbnRzLndpZHRoICogcHhSYXRpbywgMyk7XG5cblx0XHRcdGxldCByYWQgPSAocG9pbnRzLnNpemUgLSBwb2ludHMud2lkdGgpIC8gMiAqIHB4UmF0aW87XG5cdFx0XHRsZXQgZGlhID0gcm91bmREZWMocmFkICogMiwgMyk7XG5cblx0XHRcdGxldCBmaWxsID0gbmV3IFBhdGgyRCgpO1xuXHRcdFx0bGV0IGNsaXAgPSBuZXcgUGF0aDJEKCk7XG5cblx0XHRcdGxldCB7IGxlZnQ6IGxmdCwgdG9wOiB0b3AsIHdpZHRoOiB3aWQsIGhlaWdodDogaGd0IH0gPSB1LmJib3g7XG5cblx0XHRcdHJlY3RIKGNsaXAsXG5cdFx0XHRcdGxmdCAtIGRpYSxcblx0XHRcdFx0dG9wIC0gZGlhLFxuXHRcdFx0XHR3aWQgKyBkaWEgKiAyLFxuXHRcdFx0XHRoZ3QgKyBkaWEgKiAyLFxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgZHJhd1BvaW50ID0gcGkgPT4ge1xuXHRcdFx0XHRpZiAoZGF0YVlbcGldICE9IG51bGwpIHtcblx0XHRcdFx0XHRsZXQgeCA9IHB4Um91bmQodmFsVG9Qb3NYKGRhdGFYW3BpXSwgc2NhbGVYLCB4RGltLCB4T2ZmKSk7XG5cdFx0XHRcdFx0bGV0IHkgPSBweFJvdW5kKHZhbFRvUG9zWShkYXRhWVtwaV0sIHNjYWxlWSwgeURpbSwgeU9mZikpO1xuXG5cdFx0XHRcdFx0bW92ZVRvKGZpbGwsIHggKyByYWQsIHkpO1xuXHRcdFx0XHRcdGFyYyhmaWxsLCB4LCB5LCByYWQsIDAsIFBJICogMik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGlmIChmaWx0SWR4cylcblx0XHRcdFx0ZmlsdElkeHMuZm9yRWFjaChkcmF3UG9pbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IHBpID0gaWR4MDsgcGkgPD0gaWR4MTsgcGkrKylcblx0XHRcdFx0XHRkcmF3UG9pbnQocGkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdHJva2U6IHdpZHRoID4gMCA/IGZpbGwgOiBudWxsLFxuXHRcdFx0XHRmaWxsLFxuXHRcdFx0XHRjbGlwLFxuXHRcdFx0XHRmbGFnczogQkFORF9DTElQX0ZJTEwgfCBCQU5EX0NMSVBfU1RST0tFLFxuXHRcdFx0fTtcblx0XHR9KTtcblx0fTtcbn1cblxuZnVuY3Rpb24gX2RyYXdBY2MobGluZVRvKSB7XG5cdHJldHVybiAoc3Ryb2tlLCBhY2NYLCBtaW5ZLCBtYXhZLCBpblksIG91dFkpID0+IHtcblx0XHRpZiAobWluWSAhPSBtYXhZKSB7XG5cdFx0XHRpZiAoaW5ZICE9IG1pblkgJiYgb3V0WSAhPSBtaW5ZKVxuXHRcdFx0XHRsaW5lVG8oc3Ryb2tlLCBhY2NYLCBtaW5ZKTtcblx0XHRcdGlmIChpblkgIT0gbWF4WSAmJiBvdXRZICE9IG1heFkpXG5cdFx0XHRcdGxpbmVUbyhzdHJva2UsIGFjY1gsIG1heFkpO1xuXG5cdFx0XHRsaW5lVG8oc3Ryb2tlLCBhY2NYLCBvdXRZKTtcblx0XHR9XG5cdH07XG59XG5cbmNvbnN0IGRyYXdBY2NIID0gX2RyYXdBY2MobGluZVRvSCk7XG5jb25zdCBkcmF3QWNjViA9IF9kcmF3QWNjKGxpbmVUb1YpO1xuXG5mdW5jdGlvbiBsaW5lYXIob3B0cykge1xuXHRjb25zdCBhbGlnbkdhcHMgPSBpZk51bGwob3B0cz8uYWxpZ25HYXBzLCAwKTtcblxuXHRyZXR1cm4gKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSkgPT4ge1xuXHRcdHJldHVybiBvcmllbnQodSwgc2VyaWVzSWR4LCAoc2VyaWVzLCBkYXRhWCwgZGF0YVksIHNjYWxlWCwgc2NhbGVZLCB2YWxUb1Bvc1gsIHZhbFRvUG9zWSwgeE9mZiwgeU9mZiwgeERpbSwgeURpbSkgPT4ge1xuXHRcdFx0W2lkeDAsIGlkeDFdID0gbm9uTnVsbElkeHMoZGF0YVksIGlkeDAsIGlkeDEpO1xuXG5cdFx0XHRsZXQgcHhSb3VuZCA9IHNlcmllcy5weFJvdW5kO1xuXG5cdFx0XHRsZXQgcGl4ZWxGb3JYID0gdmFsID0+IHB4Um91bmQodmFsVG9Qb3NYKHZhbCwgc2NhbGVYLCB4RGltLCB4T2ZmKSk7XG5cdFx0XHRsZXQgcGl4ZWxGb3JZID0gdmFsID0+IHB4Um91bmQodmFsVG9Qb3NZKHZhbCwgc2NhbGVZLCB5RGltLCB5T2ZmKSk7XG5cblx0XHRcdGxldCBsaW5lVG8sIGRyYXdBY2M7XG5cblx0XHRcdGlmIChzY2FsZVgub3JpID09IDApIHtcblx0XHRcdFx0bGluZVRvID0gbGluZVRvSDtcblx0XHRcdFx0ZHJhd0FjYyA9IGRyYXdBY2NIO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGxpbmVUbyA9IGxpbmVUb1Y7XG5cdFx0XHRcdGRyYXdBY2MgPSBkcmF3QWNjVjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGlyID0gc2NhbGVYLmRpciAqIChzY2FsZVgub3JpID09IDAgPyAxIDogLTEpO1xuXG5cdFx0XHRjb25zdCBfcGF0aHMgPSB7c3Ryb2tlOiBuZXcgUGF0aDJEKCksIGZpbGw6IG51bGwsIGNsaXA6IG51bGwsIGJhbmQ6IG51bGwsIGdhcHM6IG51bGwsIGZsYWdzOiBCQU5EX0NMSVBfRklMTH07XG5cdFx0XHRjb25zdCBzdHJva2UgPSBfcGF0aHMuc3Ryb2tlO1xuXG5cdFx0XHRsZXQgaGFzR2FwID0gZmFsc2U7XG5cblx0XHRcdC8vIGRlY2ltYXRlIHdoZW4gbnVtYmVyIG9mIHBvaW50cyA+PSA0eCBhdmFpbGFibGUgcGl4ZWxzXG5cdFx0XHRjb25zdCBkZWNpbWF0ZSA9IGlkeDEgLSBpZHgwID49IHhEaW0gKiA0O1xuXG5cdFx0XHRpZiAoZGVjaW1hdGUpIHtcblx0XHRcdFx0bGV0IHhGb3JQaXhlbCA9IHBvcyA9PiB1LnBvc1RvVmFsKHBvcywgc2NhbGVYLmtleSwgdHJ1ZSk7XG5cblx0XHRcdFx0bGV0IG1pblkgPSBudWxsLFxuXHRcdFx0XHRcdG1heFkgPSBudWxsLFxuXHRcdFx0XHRcdGluWSwgb3V0WSwgZHJhd25BdFg7XG5cblx0XHRcdFx0bGV0IGFjY1ggPSBwaXhlbEZvclgoZGF0YVhbZGlyID09IDEgPyBpZHgwIDogaWR4MV0pO1xuXG5cdFx0XHRcdGxldCBpZHgwcHggPSBwaXhlbEZvclgoZGF0YVhbaWR4MF0pO1xuXHRcdFx0XHRsZXQgaWR4MXB4ID0gcGl4ZWxGb3JYKGRhdGFYW2lkeDFdKTtcblxuXHRcdFx0XHQvLyB0cmFja3MgbGltaXQgb2YgY3VycmVudCB4IGJ1Y2tldCB0byBhdm9pZCBoYXZpbmcgdG8gZ2V0IHggcGl4ZWwgZm9yIGV2ZXJ5IHggdmFsdWVcblx0XHRcdFx0bGV0IG5leHRBY2NYVmFsID0geEZvclBpeGVsKGRpciA9PSAxID8gaWR4MHB4ICsgMSA6IGlkeDFweCAtIDEpO1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSBkaXIgPT0gMSA/IGlkeDAgOiBpZHgxOyBpID49IGlkeDAgJiYgaSA8PSBpZHgxOyBpICs9IGRpcikge1xuXHRcdFx0XHRcdGxldCB4VmFsID0gZGF0YVhbaV07XG5cdFx0XHRcdFx0bGV0IHJldXNlQWNjWCA9IGRpciA9PSAxID8gKHhWYWwgPCBuZXh0QWNjWFZhbCkgOiAoeFZhbCA+IG5leHRBY2NYVmFsKTtcblx0XHRcdFx0XHRsZXQgeCA9IHJldXNlQWNjWCA/IGFjY1ggOiAgcGl4ZWxGb3JYKHhWYWwpO1xuXG5cdFx0XHRcdFx0bGV0IHlWYWwgPSBkYXRhWVtpXTtcblxuXHRcdFx0XHRcdGlmICh4ID09IGFjY1gpIHtcblx0XHRcdFx0XHRcdGlmICh5VmFsICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0b3V0WSA9IHlWYWw7XG5cblx0XHRcdFx0XHRcdFx0aWYgKG1pblkgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRcdGxpbmVUbyhzdHJva2UsIHgsIHBpeGVsRm9yWShvdXRZKSk7XG5cdFx0XHRcdFx0XHRcdFx0aW5ZID0gbWluWSA9IG1heFkgPSBvdXRZO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChvdXRZIDwgbWluWSlcblx0XHRcdFx0XHRcdFx0XHRcdG1pblkgPSBvdXRZO1xuXHRcdFx0XHRcdFx0XHRcdGVsc2UgaWYgKG91dFkgPiBtYXhZKVxuXHRcdFx0XHRcdFx0XHRcdFx0bWF4WSA9IG91dFk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAoeVZhbCA9PT0gbnVsbClcblx0XHRcdFx0XHRcdFx0XHRoYXNHYXAgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChtaW5ZICE9IG51bGwpXG5cdFx0XHRcdFx0XHRcdGRyYXdBY2Moc3Ryb2tlLCBhY2NYLCBwaXhlbEZvclkobWluWSksIHBpeGVsRm9yWShtYXhZKSwgcGl4ZWxGb3JZKGluWSksIHBpeGVsRm9yWShvdXRZKSk7XG5cblx0XHRcdFx0XHRcdGlmICh5VmFsICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0b3V0WSA9IHlWYWw7XG5cdFx0XHRcdFx0XHRcdGxpbmVUbyhzdHJva2UsIHgsIHBpeGVsRm9yWShvdXRZKSk7XG5cdFx0XHRcdFx0XHRcdG1pblkgPSBtYXhZID0gaW5ZID0gb3V0WTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtaW5ZID0gbWF4WSA9IG51bGw7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHlWYWwgPT09IG51bGwpXG5cdFx0XHRcdFx0XHRcdFx0aGFzR2FwID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0YWNjWCA9IHg7XG5cdFx0XHRcdFx0XHRuZXh0QWNjWFZhbCA9IHhGb3JQaXhlbChhY2NYICsgZGlyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobWluWSAhPSBudWxsICYmIG1pblkgIT0gbWF4WSAmJiBkcmF3bkF0WCAhPSBhY2NYKVxuXHRcdFx0XHRcdGRyYXdBY2Moc3Ryb2tlLCBhY2NYLCBwaXhlbEZvclkobWluWSksIHBpeGVsRm9yWShtYXhZKSwgcGl4ZWxGb3JZKGluWSksIHBpeGVsRm9yWShvdXRZKSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IGRpciA9PSAxID8gaWR4MCA6IGlkeDE7IGkgPj0gaWR4MCAmJiBpIDw9IGlkeDE7IGkgKz0gZGlyKSB7XG5cdFx0XHRcdFx0bGV0IHlWYWwgPSBkYXRhWVtpXTtcblxuXHRcdFx0XHRcdGlmICh5VmFsID09PSBudWxsKVxuXHRcdFx0XHRcdFx0aGFzR2FwID0gdHJ1ZTtcblx0XHRcdFx0XHRlbHNlIGlmICh5VmFsICE9IG51bGwpXG5cdFx0XHRcdFx0XHRsaW5lVG8oc3Ryb2tlLCBwaXhlbEZvclgoZGF0YVhbaV0pLCBwaXhlbEZvclkoeVZhbCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBbIGJhbmRGaWxsRGlyLCBiYW5kQ2xpcERpciBdID0gYmFuZEZpbGxDbGlwRGlycyh1LCBzZXJpZXNJZHgpO1xuXG5cdFx0XHRpZiAoc2VyaWVzLmZpbGwgIT0gbnVsbCB8fCBiYW5kRmlsbERpciAhPSAwKSB7XG5cdFx0XHRcdGxldCBmaWxsID0gX3BhdGhzLmZpbGwgPSBuZXcgUGF0aDJEKHN0cm9rZSk7XG5cblx0XHRcdFx0bGV0IGZpbGxUb1ZhbCA9IHNlcmllcy5maWxsVG8odSwgc2VyaWVzSWR4LCBzZXJpZXMubWluLCBzZXJpZXMubWF4LCBiYW5kRmlsbERpcik7XG5cdFx0XHRcdGxldCBmaWxsVG9ZID0gcGl4ZWxGb3JZKGZpbGxUb1ZhbCk7XG5cblx0XHRcdFx0bGV0IGZyWCA9IHBpeGVsRm9yWChkYXRhWFtpZHgwXSk7XG5cdFx0XHRcdGxldCB0b1ggPSBwaXhlbEZvclgoZGF0YVhbaWR4MV0pO1xuXG5cdFx0XHRcdGlmIChkaXIgPT0gLTEpXG5cdFx0XHRcdFx0W3RvWCwgZnJYXSA9IFtmclgsIHRvWF07XG5cblx0XHRcdFx0bGluZVRvKGZpbGwsIHRvWCwgZmlsbFRvWSk7XG5cdFx0XHRcdGxpbmVUbyhmaWxsLCBmclgsIGZpbGxUb1kpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXNlcmllcy5zcGFuR2FwcykgeyAvLyBza2lwIGluIG1vZGU6IDI/XG5cdFx0XHQvL1x0Y29uc29sZS50aW1lKCdnYXBzJyk7XG5cdFx0XHRcdGxldCBnYXBzID0gW107XG5cblx0XHRcdFx0aGFzR2FwICYmIGdhcHMucHVzaCguLi5maW5kR2FwcyhkYXRhWCwgZGF0YVksIGlkeDAsIGlkeDEsIGRpciwgcGl4ZWxGb3JYLCBhbGlnbkdhcHMpKTtcblxuXHRcdFx0Ly9cdGNvbnNvbGUudGltZUVuZCgnZ2FwcycpO1xuXG5cdFx0XHQvL1x0Y29uc29sZS5sb2coJ2dhcHMnLCBKU09OLnN0cmluZ2lmeShnYXBzKSk7XG5cblx0XHRcdFx0X3BhdGhzLmdhcHMgPSBnYXBzID0gc2VyaWVzLmdhcHModSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBnYXBzKTtcblxuXHRcdFx0XHRfcGF0aHMuY2xpcCA9IGNsaXBHYXBzKGdhcHMsIHNjYWxlWC5vcmksIHhPZmYsIHlPZmYsIHhEaW0sIHlEaW0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYmFuZENsaXBEaXIgIT0gMCkge1xuXHRcdFx0XHRfcGF0aHMuYmFuZCA9IGJhbmRDbGlwRGlyID09IDIgPyBbXG5cdFx0XHRcdFx0Y2xpcEJhbmRMaW5lKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSwgc3Ryb2tlLCAtMSksXG5cdFx0XHRcdFx0Y2xpcEJhbmRMaW5lKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSwgc3Ryb2tlLCAgMSksXG5cdFx0XHRcdF0gOiBjbGlwQmFuZExpbmUodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxLCBzdHJva2UsIGJhbmRDbGlwRGlyKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF9wYXRocztcblx0XHR9KTtcblx0fTtcbn1cblxuLy8gQlVHOiBhbGlnbjogLTEgYmVoYXZlcyBsaWtlIGFsaWduOiAxIHdoZW4gc2NhbGUuZGlyOiAtMVxuZnVuY3Rpb24gc3RlcHBlZChvcHRzKSB7XG5cdGNvbnN0IGFsaWduID0gaWZOdWxsKG9wdHMuYWxpZ24sIDEpO1xuXHQvLyB3aGV0aGVyIHRvIGRyYXcgYXNjZW5kZXJzL2Rlc2NlbmRlcnMgYXQgbnVsbC9nYXAgYm9uZGFyaWVzXG5cdGNvbnN0IGFzY0Rlc2MgPSBpZk51bGwob3B0cy5hc2NEZXNjLCBmYWxzZSk7XG5cdGNvbnN0IGFsaWduR2FwcyA9IGlmTnVsbChvcHRzLmFsaWduR2FwcywgMCk7XG5cdGNvbnN0IGV4dGVuZCA9IGlmTnVsbChvcHRzLmV4dGVuZCwgZmFsc2UpO1xuXG5cdHJldHVybiAodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxKSA9PiB7XG5cdFx0cmV0dXJuIG9yaWVudCh1LCBzZXJpZXNJZHgsIChzZXJpZXMsIGRhdGFYLCBkYXRhWSwgc2NhbGVYLCBzY2FsZVksIHZhbFRvUG9zWCwgdmFsVG9Qb3NZLCB4T2ZmLCB5T2ZmLCB4RGltLCB5RGltKSA9PiB7XG5cdFx0XHRbaWR4MCwgaWR4MV0gPSBub25OdWxsSWR4cyhkYXRhWSwgaWR4MCwgaWR4MSk7XG5cblx0XHRcdGxldCBweFJvdW5kID0gc2VyaWVzLnB4Um91bmQ7XG5cblx0XHRcdGxldCB7IGxlZnQsIHdpZHRoIH0gPSB1LmJib3g7XG5cblx0XHRcdGxldCBwaXhlbEZvclggPSB2YWwgPT4gcHhSb3VuZCh2YWxUb1Bvc1godmFsLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcblx0XHRcdGxldCBwaXhlbEZvclkgPSB2YWwgPT4gcHhSb3VuZCh2YWxUb1Bvc1kodmFsLCBzY2FsZVksIHlEaW0sIHlPZmYpKTtcblxuXHRcdFx0bGV0IGxpbmVUbyA9IHNjYWxlWC5vcmkgPT0gMCA/IGxpbmVUb0ggOiBsaW5lVG9WO1xuXG5cdFx0XHRjb25zdCBfcGF0aHMgPSB7c3Ryb2tlOiBuZXcgUGF0aDJEKCksIGZpbGw6IG51bGwsIGNsaXA6IG51bGwsIGJhbmQ6IG51bGwsIGdhcHM6IG51bGwsIGZsYWdzOiBCQU5EX0NMSVBfRklMTH07XG5cdFx0XHRjb25zdCBzdHJva2UgPSBfcGF0aHMuc3Ryb2tlO1xuXG5cdFx0XHRjb25zdCBkaXIgPSBzY2FsZVguZGlyICogKHNjYWxlWC5vcmkgPT0gMCA/IDEgOiAtMSk7XG5cblx0XHRcdGxldCBwcmV2WVBvcyAgPSBwaXhlbEZvclkoZGF0YVlbZGlyID09IDEgPyBpZHgwIDogaWR4MV0pO1xuXHRcdFx0bGV0IGZpcnN0WFBvcyA9IHBpeGVsRm9yWChkYXRhWFtkaXIgPT0gMSA/IGlkeDAgOiBpZHgxXSk7XG5cdFx0XHRsZXQgcHJldlhQb3MgPSBmaXJzdFhQb3M7XG5cblx0XHRcdGxldCBmaXJzdFhQb3NFeHQgPSBmaXJzdFhQb3M7XG5cblx0XHRcdGlmIChleHRlbmQgJiYgYWxpZ24gPT0gLTEpIHtcblx0XHRcdFx0Zmlyc3RYUG9zRXh0ID0gbGVmdDtcblx0XHRcdFx0bGluZVRvKHN0cm9rZSwgZmlyc3RYUG9zRXh0LCBwcmV2WVBvcyk7XG5cdFx0XHR9XG5cblx0XHRcdGxpbmVUbyhzdHJva2UsIGZpcnN0WFBvcywgcHJldllQb3MpO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gZGlyID09IDEgPyBpZHgwIDogaWR4MTsgaSA+PSBpZHgwICYmIGkgPD0gaWR4MTsgaSArPSBkaXIpIHtcblx0XHRcdFx0bGV0IHlWYWwxID0gZGF0YVlbaV07XG5cblx0XHRcdFx0aWYgKHlWYWwxID09IG51bGwpXG5cdFx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdFx0bGV0IHgxID0gcGl4ZWxGb3JYKGRhdGFYW2ldKTtcblx0XHRcdFx0bGV0IHkxID0gcGl4ZWxGb3JZKHlWYWwxKTtcblxuXHRcdFx0XHRpZiAoYWxpZ24gPT0gMSlcblx0XHRcdFx0XHRsaW5lVG8oc3Ryb2tlLCB4MSwgcHJldllQb3MpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bGluZVRvKHN0cm9rZSwgcHJldlhQb3MsIHkxKTtcblxuXHRcdFx0XHRsaW5lVG8oc3Ryb2tlLCB4MSwgeTEpO1xuXG5cdFx0XHRcdHByZXZZUG9zID0geTE7XG5cdFx0XHRcdHByZXZYUG9zID0geDE7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBwcmV2WFBvc0V4dCA9IHByZXZYUG9zO1xuXG5cdFx0XHRpZiAoZXh0ZW5kICYmIGFsaWduID09IDEpIHtcblx0XHRcdFx0cHJldlhQb3NFeHQgPSBsZWZ0ICsgd2lkdGg7XG5cdFx0XHRcdGxpbmVUbyhzdHJva2UsIHByZXZYUG9zRXh0LCBwcmV2WVBvcyk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBbIGJhbmRGaWxsRGlyLCBiYW5kQ2xpcERpciBdID0gYmFuZEZpbGxDbGlwRGlycyh1LCBzZXJpZXNJZHgpO1xuXG5cdFx0XHRpZiAoc2VyaWVzLmZpbGwgIT0gbnVsbCB8fCBiYW5kRmlsbERpciAhPSAwKSB7XG5cdFx0XHRcdGxldCBmaWxsID0gX3BhdGhzLmZpbGwgPSBuZXcgUGF0aDJEKHN0cm9rZSk7XG5cblx0XHRcdFx0bGV0IGZpbGxUbyA9IHNlcmllcy5maWxsVG8odSwgc2VyaWVzSWR4LCBzZXJpZXMubWluLCBzZXJpZXMubWF4LCBiYW5kRmlsbERpcik7XG5cdFx0XHRcdGxldCBmaWxsVG9ZID0gcGl4ZWxGb3JZKGZpbGxUbyk7XG5cblx0XHRcdFx0bGluZVRvKGZpbGwsIHByZXZYUG9zRXh0LCBmaWxsVG9ZKTtcblx0XHRcdFx0bGluZVRvKGZpbGwsIGZpcnN0WFBvc0V4dCwgZmlsbFRvWSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghc2VyaWVzLnNwYW5HYXBzKSB7XG5cdFx0XHQvL1x0Y29uc29sZS50aW1lKCdnYXBzJyk7XG5cdFx0XHRcdGxldCBnYXBzID0gW107XG5cblx0XHRcdFx0Z2Fwcy5wdXNoKC4uLmZpbmRHYXBzKGRhdGFYLCBkYXRhWSwgaWR4MCwgaWR4MSwgZGlyLCBwaXhlbEZvclgsIGFsaWduR2FwcykpO1xuXG5cdFx0XHQvL1x0Y29uc29sZS50aW1lRW5kKCdnYXBzJyk7XG5cblx0XHRcdC8vXHRjb25zb2xlLmxvZygnZ2FwcycsIEpTT04uc3RyaW5naWZ5KGdhcHMpKTtcblxuXHRcdFx0XHQvLyBleHBhbmQvY29udHJhY3QgY2xpcHMgZm9yIGFzY2VuZGVycy9kZXNjZW5kZXJzXG5cdFx0XHRcdGxldCBoYWxmU3Ryb2tlID0gKHNlcmllcy53aWR0aCAqIHB4UmF0aW8pIC8gMjtcblx0XHRcdFx0bGV0IHN0YXJ0c09mZnNldCA9IChhc2NEZXNjIHx8IGFsaWduID09ICAxKSA/ICBoYWxmU3Ryb2tlIDogLWhhbGZTdHJva2U7XG5cdFx0XHRcdGxldCBlbmRzT2Zmc2V0ICAgPSAoYXNjRGVzYyB8fCBhbGlnbiA9PSAtMSkgPyAtaGFsZlN0cm9rZSA6ICBoYWxmU3Ryb2tlO1xuXG5cdFx0XHRcdGdhcHMuZm9yRWFjaChnID0+IHtcblx0XHRcdFx0XHRnWzBdICs9IHN0YXJ0c09mZnNldDtcblx0XHRcdFx0XHRnWzFdICs9IGVuZHNPZmZzZXQ7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdF9wYXRocy5nYXBzID0gZ2FwcyA9IHNlcmllcy5nYXBzKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSwgZ2Fwcyk7XG5cblx0XHRcdFx0X3BhdGhzLmNsaXAgPSBjbGlwR2FwcyhnYXBzLCBzY2FsZVgub3JpLCB4T2ZmLCB5T2ZmLCB4RGltLCB5RGltKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGJhbmRDbGlwRGlyICE9IDApIHtcblx0XHRcdFx0X3BhdGhzLmJhbmQgPSBiYW5kQ2xpcERpciA9PSAyID8gW1xuXHRcdFx0XHRcdGNsaXBCYW5kTGluZSh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIHN0cm9rZSwgLTEpLFxuXHRcdFx0XHRcdGNsaXBCYW5kTGluZSh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIHN0cm9rZSwgIDEpLFxuXHRcdFx0XHRdIDogY2xpcEJhbmRMaW5lKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSwgc3Ryb2tlLCBiYW5kQ2xpcERpcik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfcGF0aHM7XG5cdFx0fSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGZpbmRDb2xXaWR0aChkYXRhWCwgZGF0YVksIHZhbFRvUG9zWCwgc2NhbGVYLCB4RGltLCB4T2ZmLCBjb2xXaWQgPSBpbmYpIHtcblx0aWYgKGRhdGFYLmxlbmd0aCA+IDEpIHtcblx0XHQvLyBwcmlvciBpbmRleCB3aXRoIG5vbi11bmRlZmluZWQgeSBkYXRhXG5cdFx0bGV0IHByZXZJZHggPSBudWxsO1xuXG5cdFx0Ly8gc2NhbiBmdWxsIGRhdGFzZXQgZm9yIHNtYWxsZXN0IGFkamFjZW50IGRlbHRhXG5cdFx0Ly8gd2lsbCBub3Qgd29yayBwcm9wZXJseSBmb3Igbm9uLWxpbmVhciB4IHNjYWxlcywgc2luY2UgZG9lcyBub3QgZG8gZXhwZW5zaXZlIHZhbFRvUG9zWCBjYWxjcyB0aWxsIGVuZFxuXHRcdGZvciAobGV0IGkgPSAwLCBtaW5EZWx0YSA9IEluZmluaXR5OyBpIDwgZGF0YVgubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChkYXRhWVtpXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChwcmV2SWR4ICE9IG51bGwpIHtcblx0XHRcdFx0XHRsZXQgZGVsdGEgPSBhYnMoZGF0YVhbaV0gLSBkYXRhWFtwcmV2SWR4XSk7XG5cblx0XHRcdFx0XHRpZiAoZGVsdGEgPCBtaW5EZWx0YSkge1xuXHRcdFx0XHRcdFx0bWluRGVsdGEgPSBkZWx0YTtcblx0XHRcdFx0XHRcdGNvbFdpZCA9IGFicyh2YWxUb1Bvc1goZGF0YVhbaV0sIHNjYWxlWCwgeERpbSwgeE9mZikgLSB2YWxUb1Bvc1goZGF0YVhbcHJldklkeF0sIHNjYWxlWCwgeERpbSwgeE9mZikpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHByZXZJZHggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjb2xXaWQ7XG59XG5cbmZ1bmN0aW9uIGJhcnMob3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCBFTVBUWV9PQko7XG5cdGNvbnN0IHNpemUgPSBpZk51bGwob3B0cy5zaXplLCBbMC42LCBpbmYsIDFdKTtcblx0Y29uc3QgYWxpZ24gPSBvcHRzLmFsaWduIHx8IDA7XG5cdGNvbnN0IF9leHRyYUdhcCA9IChvcHRzLmdhcCB8fCAwKTtcblxuXHRsZXQgcm8gPSBvcHRzLnJhZGl1cztcblxuXHRybyA9XG5cdFx0Ly8gW3ZhbHVlUmFkaXVzLCBiYXNlbGluZVJhZGl1c11cblx0XHRybyA9PSBudWxsID8gWzAsIDBdIDpcblx0XHR0eXBlb2Ygcm8gPT0gJ251bWJlcicgPyBbcm8sIDBdIDogcm87XG5cblx0Y29uc3QgcmFkaXVzRm4gPSBmbk9yU2VsZihybyk7XG5cblx0Y29uc3QgZ2FwRmFjdG9yID0gMSAtIHNpemVbMF07XG5cdGNvbnN0IF9tYXhXaWR0aCAgPSBpZk51bGwoc2l6ZVsxXSwgaW5mKTtcblx0Y29uc3QgX21pbldpZHRoICA9IGlmTnVsbChzaXplWzJdLCAxKTtcblxuXHRjb25zdCBkaXNwID0gaWZOdWxsKG9wdHMuZGlzcCwgRU1QVFlfT0JKKTtcblx0Y29uc3QgX2VhY2ggPSBpZk51bGwob3B0cy5lYWNoLCBfID0+IHt9KTtcblxuXHRjb25zdCB7IGZpbGw6IGRpc3BGaWxscywgc3Ryb2tlOiBkaXNwU3Ryb2tlcyB9ID0gZGlzcDtcblxuXHRyZXR1cm4gKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSkgPT4ge1xuXHRcdHJldHVybiBvcmllbnQodSwgc2VyaWVzSWR4LCAoc2VyaWVzLCBkYXRhWCwgZGF0YVksIHNjYWxlWCwgc2NhbGVZLCB2YWxUb1Bvc1gsIHZhbFRvUG9zWSwgeE9mZiwgeU9mZiwgeERpbSwgeURpbSkgPT4ge1xuXHRcdFx0bGV0IHB4Um91bmQgPSBzZXJpZXMucHhSb3VuZDtcblx0XHRcdGxldCBfYWxpZ24gPSBhbGlnbjtcblxuXHRcdFx0bGV0IGV4dHJhR2FwID0gX2V4dHJhR2FwICogcHhSYXRpbztcblx0XHRcdGxldCBtYXhXaWR0aCA9IF9tYXhXaWR0aCAqIHB4UmF0aW87XG5cdFx0XHRsZXQgbWluV2lkdGggPSBfbWluV2lkdGggKiBweFJhdGlvO1xuXG5cdFx0XHRsZXQgdmFsUmFkaXVzLCBiYXNlUmFkaXVzO1xuXG5cdFx0XHRpZiAoc2NhbGVYLm9yaSA9PSAwKVxuXHRcdFx0XHRbdmFsUmFkaXVzLCBiYXNlUmFkaXVzXSA9IHJhZGl1c0ZuKHUsIHNlcmllc0lkeCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdFtiYXNlUmFkaXVzLCB2YWxSYWRpdXNdID0gcmFkaXVzRm4odSwgc2VyaWVzSWR4KTtcblxuXHRcdFx0Y29uc3QgX2RpclggPSBzY2FsZVguZGlyICogKHNjYWxlWC5vcmkgPT0gMCA/IDEgOiAtMSk7XG5cdFx0Ly9cdGNvbnN0IF9kaXJZID0gc2NhbGVZLmRpciAqIChzY2FsZVkub3JpID09IDEgPyAxIDogLTEpO1xuXG5cdFx0XHRsZXQgcmVjdCA9IHNjYWxlWC5vcmkgPT0gMCA/IHJlY3RIIDogcmVjdFY7XG5cblx0XHRcdGxldCBlYWNoID0gc2NhbGVYLm9yaSA9PSAwID8gX2VhY2ggOiAodSwgc2VyaWVzSWR4LCBpLCB0b3AsIGxmdCwgaGd0LCB3aWQpID0+IHtcblx0XHRcdFx0X2VhY2godSwgc2VyaWVzSWR4LCBpLCBsZnQsIHRvcCwgd2lkLCBoZ3QpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gYmFuZCB3aGVyZSB0aGlzIHNlcmllcyBpcyB0aGUgXCJmcm9tXCIgZWRnZVxuXHRcdFx0bGV0IGJhbmQgPSBpZk51bGwodS5iYW5kcywgRU1QVFlfQVJSKS5maW5kKGIgPT4gYi5zZXJpZXNbMF0gPT0gc2VyaWVzSWR4KTtcblxuXHRcdFx0bGV0IGZpbGxEaXIgPSBiYW5kICE9IG51bGwgPyBiYW5kLmRpciA6IDA7XG5cdFx0XHRsZXQgZmlsbFRvID0gc2VyaWVzLmZpbGxUbyh1LCBzZXJpZXNJZHgsIHNlcmllcy5taW4sIHNlcmllcy5tYXgsIGZpbGxEaXIpO1xuXHRcdFx0bGV0IGZpbGxUb1kgPSBweFJvdW5kKHZhbFRvUG9zWShmaWxsVG8sIHNjYWxlWSwgeURpbSwgeU9mZikpO1xuXG5cdFx0XHQvLyBiYXJXaWQgaXMgdG8gY2VudGVyIG9mIHN0cm9rZVxuXHRcdFx0bGV0IHhTaGlmdCwgYmFyV2lkLCBmdWxsR2FwLCBjb2xXaWQgPSB4RGltO1xuXG5cdFx0XHRsZXQgc3Ryb2tlV2lkdGggPSBweFJvdW5kKHNlcmllcy53aWR0aCAqIHB4UmF0aW8pO1xuXG5cdFx0XHRsZXQgbXVsdGlQYXRoID0gZmFsc2U7XG5cblx0XHRcdGxldCBmaWxsQ29sb3JzID0gbnVsbDtcblx0XHRcdGxldCBmaWxsUGF0aHMgPSBudWxsO1xuXHRcdFx0bGV0IHN0cm9rZUNvbG9ycyA9IG51bGw7XG5cdFx0XHRsZXQgc3Ryb2tlUGF0aHMgPSBudWxsO1xuXG5cdFx0XHRpZiAoZGlzcEZpbGxzICE9IG51bGwgJiYgKHN0cm9rZVdpZHRoID09IDAgfHwgZGlzcFN0cm9rZXMgIT0gbnVsbCkpIHtcblx0XHRcdFx0bXVsdGlQYXRoID0gdHJ1ZTtcblxuXHRcdFx0XHRmaWxsQ29sb3JzID0gZGlzcEZpbGxzLnZhbHVlcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpO1xuXHRcdFx0XHRmaWxsUGF0aHMgPSBuZXcgTWFwKCk7XG5cdFx0XHRcdChuZXcgU2V0KGZpbGxDb2xvcnMpKS5mb3JFYWNoKGNvbG9yID0+IHtcblx0XHRcdFx0XHRpZiAoY29sb3IgIT0gbnVsbClcblx0XHRcdFx0XHRcdGZpbGxQYXRocy5zZXQoY29sb3IsIG5ldyBQYXRoMkQoKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChzdHJva2VXaWR0aCA+IDApIHtcblx0XHRcdFx0XHRzdHJva2VDb2xvcnMgPSBkaXNwU3Ryb2tlcy52YWx1ZXModSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxKTtcblx0XHRcdFx0XHRzdHJva2VQYXRocyA9IG5ldyBNYXAoKTtcblx0XHRcdFx0XHQobmV3IFNldChzdHJva2VDb2xvcnMpKS5mb3JFYWNoKGNvbG9yID0+IHtcblx0XHRcdFx0XHRcdGlmIChjb2xvciAhPSBudWxsKVxuXHRcdFx0XHRcdFx0XHRzdHJva2VQYXRocy5zZXQoY29sb3IsIG5ldyBQYXRoMkQoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IHsgeDAsIHNpemUgfSA9IGRpc3A7XG5cblx0XHRcdGlmICh4MCAhPSBudWxsICYmIHNpemUgIT0gbnVsbCkge1xuXHRcdFx0XHRfYWxpZ24gPSAxO1xuXHRcdFx0XHRkYXRhWCA9IHgwLnZhbHVlcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpO1xuXG5cdFx0XHRcdGlmICh4MC51bml0ID09IDIpXG5cdFx0XHRcdFx0ZGF0YVggPSBkYXRhWC5tYXAocGN0ID0+IHUucG9zVG9WYWwoeE9mZiArIHBjdCAqIHhEaW0sIHNjYWxlWC5rZXksIHRydWUpKTtcblxuXHRcdFx0XHQvLyBhc3N1bWVzIHVuaWZvcm0gc2l6ZXMsIGZvciBub3dcblx0XHRcdFx0bGV0IHNpemVzID0gc2l6ZS52YWx1ZXModSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxKTtcblxuXHRcdFx0XHRpZiAoc2l6ZS51bml0ID09IDIpXG5cdFx0XHRcdFx0YmFyV2lkID0gc2l6ZXNbMF0gKiB4RGltO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0YmFyV2lkID0gdmFsVG9Qb3NYKHNpemVzWzBdLCBzY2FsZVgsIHhEaW0sIHhPZmYpIC0gdmFsVG9Qb3NYKDAsIHNjYWxlWCwgeERpbSwgeE9mZik7IC8vIGFzc3VtZXMgbGluZWFyIHNjYWxlIChkZWx0YSBmcm9tIDApXG5cblx0XHRcdFx0Y29sV2lkID0gZmluZENvbFdpZHRoKGRhdGFYLCBkYXRhWSwgdmFsVG9Qb3NYLCBzY2FsZVgsIHhEaW0sIHhPZmYsIGNvbFdpZCk7XG5cblx0XHRcdFx0bGV0IGdhcFdpZCA9IGNvbFdpZCAtIGJhcldpZDtcblx0XHRcdFx0ZnVsbEdhcCA9IGdhcFdpZCArIGV4dHJhR2FwO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbFdpZCA9IGZpbmRDb2xXaWR0aChkYXRhWCwgZGF0YVksIHZhbFRvUG9zWCwgc2NhbGVYLCB4RGltLCB4T2ZmLCBjb2xXaWQpO1xuXG5cdFx0XHRcdGxldCBnYXBXaWQgPSBjb2xXaWQgKiBnYXBGYWN0b3I7XG5cblx0XHRcdFx0ZnVsbEdhcCA9IGdhcFdpZCArIGV4dHJhR2FwO1xuXHRcdFx0XHRiYXJXaWQgPSBjb2xXaWQgLSBmdWxsR2FwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZnVsbEdhcCA8IDEpXG5cdFx0XHRcdGZ1bGxHYXAgPSAwO1xuXG5cdFx0XHRpZiAoc3Ryb2tlV2lkdGggPj0gYmFyV2lkIC8gMilcblx0XHRcdFx0c3Ryb2tlV2lkdGggPSAwO1xuXG5cdFx0XHQvLyBmb3Igc21hbGwgZ2FwcywgZGlzYWJsZSBwaXhlbCBzbmFwcGluZyBzaW5jZSBnYXAgaW5jb25zaXN0ZW5jaWVzIGJlY29tZSBub3RpY2libGUgYW5kIGFubm95aW5nXG5cdFx0XHRpZiAoZnVsbEdhcCA8IDUpXG5cdFx0XHRcdHB4Um91bmQgPSByZXRBcmcwO1xuXG5cdFx0XHRsZXQgaW5zZXRTdHJva2UgPSBmdWxsR2FwID4gMDtcblxuXHRcdFx0bGV0IHJhd0JhcldpZCA9IGNvbFdpZCAtIGZ1bGxHYXAgLSAoaW5zZXRTdHJva2UgPyBzdHJva2VXaWR0aCA6IDApO1xuXG5cdFx0XHRiYXJXaWQgPSBweFJvdW5kKGNsYW1wKHJhd0JhcldpZCwgbWluV2lkdGgsIG1heFdpZHRoKSk7XG5cblx0XHRcdHhTaGlmdCA9IChfYWxpZ24gPT0gMCA/IGJhcldpZCAvIDIgOiBfYWxpZ24gPT0gX2RpclggPyAwIDogYmFyV2lkKSAtIF9hbGlnbiAqIF9kaXJYICogKChfYWxpZ24gPT0gMCA/IGV4dHJhR2FwIC8gMiA6IDApICsgKGluc2V0U3Ryb2tlID8gc3Ryb2tlV2lkdGggLyAyIDogMCkpO1xuXG5cblx0XHRcdGNvbnN0IF9wYXRocyA9IHtzdHJva2U6IG51bGwsIGZpbGw6IG51bGwsIGNsaXA6IG51bGwsIGJhbmQ6IG51bGwsIGdhcHM6IG51bGwsIGZsYWdzOiAwfTsgIC8vIGRpc3AsIGdlb21cblxuXHRcdFx0Y29uc3Qgc3Ryb2tlID0gbXVsdGlQYXRoID8gbnVsbCA6IG5ldyBQYXRoMkQoKTtcblxuXHRcdFx0bGV0IGRhdGFZMCA9IG51bGw7XG5cblx0XHRcdGlmIChiYW5kICE9IG51bGwpXG5cdFx0XHRcdGRhdGFZMCA9IHUuZGF0YVtiYW5kLnNlcmllc1sxXV07XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bGV0IHsgeTAsIHkxIH0gPSBkaXNwO1xuXG5cdFx0XHRcdGlmICh5MCAhPSBudWxsICYmIHkxICE9IG51bGwpIHtcblx0XHRcdFx0XHRkYXRhWSA9IHkxLnZhbHVlcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpO1xuXHRcdFx0XHRcdGRhdGFZMCA9IHkwLnZhbHVlcyh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCByYWRWYWwgPSB2YWxSYWRpdXMgKiBiYXJXaWQ7XG5cdFx0XHRsZXQgcmFkQmFzZSA9IGJhc2VSYWRpdXMgKiBiYXJXaWQ7XG5cblx0XHRcdGZvciAobGV0IGkgPSBfZGlyWCA9PSAxID8gaWR4MCA6IGlkeDE7IGkgPj0gaWR4MCAmJiBpIDw9IGlkeDE7IGkgKz0gX2RpclgpIHtcblx0XHRcdFx0bGV0IHlWYWwgPSBkYXRhWVtpXTtcblxuXHRcdFx0XHRpZiAoeVZhbCA9PSBudWxsKVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRcdGlmIChkYXRhWTAgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGxldCB5VmFsMCA9IGRhdGFZMFtpXSA/PyAwO1xuXG5cdFx0XHRcdFx0aWYgKHlWYWwgLSB5VmFsMCA9PSAwKVxuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdFx0XHRmaWxsVG9ZID0gdmFsVG9Qb3NZKHlWYWwwLCBzY2FsZVksIHlEaW0sIHlPZmYpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IHhWYWwgPSBzY2FsZVguZGlzdHIgIT0gMiB8fCBkaXNwICE9IG51bGwgPyBkYXRhWFtpXSA6IGk7XG5cblx0XHRcdFx0Ly8gVE9ETzogYWxsIHhQb3MgY2FuIGJlIHByZS1jb21wdXRlZCBvbmNlIGZvciBhbGwgc2VyaWVzIGluIGFsaWduZWQgc2V0XG5cdFx0XHRcdGxldCB4UG9zID0gdmFsVG9Qb3NYKHhWYWwsIHNjYWxlWCwgeERpbSwgeE9mZik7XG5cdFx0XHRcdGxldCB5UG9zID0gdmFsVG9Qb3NZKGlmTnVsbCh5VmFsLCBmaWxsVG8pLCBzY2FsZVksIHlEaW0sIHlPZmYpO1xuXG5cdFx0XHRcdGxldCBsZnQgPSBweFJvdW5kKHhQb3MgLSB4U2hpZnQpO1xuXHRcdFx0XHRsZXQgYnRtID0gcHhSb3VuZChtYXgoeVBvcywgZmlsbFRvWSkpO1xuXHRcdFx0XHRsZXQgdG9wID0gcHhSb3VuZChtaW4oeVBvcywgZmlsbFRvWSkpO1xuXHRcdFx0XHQvLyB0aGlzIGluY2x1ZGVzIHRoZSBzdHJva2Vcblx0XHRcdFx0bGV0IGJhckhndCA9IGJ0bSAtIHRvcDtcblxuXHRcdFx0XHRpZiAoeVZhbCAhPSBudWxsKSB7ICAvLyAmJiB5VmFsICE9IGZpbGxUbyAoMCBoZWlnaHQgYmFyKVxuXHRcdFx0XHRcdGxldCBydiA9IHlWYWwgPCAwID8gcmFkQmFzZSA6IHJhZFZhbDtcblx0XHRcdFx0XHRsZXQgcmIgPSB5VmFsIDwgMCA/IHJhZFZhbCA6IHJhZEJhc2U7XG5cblx0XHRcdFx0XHRpZiAobXVsdGlQYXRoKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3Ryb2tlV2lkdGggPiAwICYmIHN0cm9rZUNvbG9yc1tpXSAhPSBudWxsKVxuXHRcdFx0XHRcdFx0XHRyZWN0KHN0cm9rZVBhdGhzLmdldChzdHJva2VDb2xvcnNbaV0pLCBsZnQsIHRvcCArIGZsb29yKHN0cm9rZVdpZHRoIC8gMiksIGJhcldpZCwgbWF4KDAsIGJhckhndCAtIHN0cm9rZVdpZHRoKSwgcnYsIHJiKTtcblxuXHRcdFx0XHRcdFx0aWYgKGZpbGxDb2xvcnNbaV0gIT0gbnVsbClcblx0XHRcdFx0XHRcdFx0cmVjdChmaWxsUGF0aHMuZ2V0KGZpbGxDb2xvcnNbaV0pLCBsZnQsIHRvcCArIGZsb29yKHN0cm9rZVdpZHRoIC8gMiksIGJhcldpZCwgbWF4KDAsIGJhckhndCAtIHN0cm9rZVdpZHRoKSwgcnYsIHJiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cmVjdChzdHJva2UsIGxmdCwgdG9wICsgZmxvb3Ioc3Ryb2tlV2lkdGggLyAyKSwgYmFyV2lkLCBtYXgoMCwgYmFySGd0IC0gc3Ryb2tlV2lkdGgpLCBydiwgcmIpO1xuXG5cdFx0XHRcdFx0ZWFjaCh1LCBzZXJpZXNJZHgsIGksXG5cdFx0XHRcdFx0XHRsZnQgICAgLSBzdHJva2VXaWR0aCAvIDIsXG5cdFx0XHRcdFx0XHR0b3AsXG5cdFx0XHRcdFx0XHRiYXJXaWQgKyBzdHJva2VXaWR0aCxcblx0XHRcdFx0XHRcdGJhckhndCxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdHJva2VXaWR0aCA+IDApXG5cdFx0XHRcdF9wYXRocy5zdHJva2UgPSBtdWx0aVBhdGggPyBzdHJva2VQYXRocyA6IHN0cm9rZTtcblx0XHRcdGVsc2UgaWYgKCFtdWx0aVBhdGgpIHtcblx0XHRcdFx0X3BhdGhzLl9maWxsID0gc2VyaWVzLndpZHRoID09IDAgPyBzZXJpZXMuX2ZpbGwgOiBzZXJpZXMuX3N0cm9rZSA/PyBzZXJpZXMuX2ZpbGw7XG5cdFx0XHRcdF9wYXRocy53aWR0aCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdF9wYXRocy5maWxsID0gbXVsdGlQYXRoID8gZmlsbFBhdGhzIDogc3Ryb2tlO1xuXG5cdFx0XHRyZXR1cm4gX3BhdGhzO1xuXHRcdH0pO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzcGxpbmVJbnRlcnAoaW50ZXJwLCBvcHRzKSB7XG5cdGNvbnN0IGFsaWduR2FwcyA9IGlmTnVsbChvcHRzPy5hbGlnbkdhcHMsIDApO1xuXG5cdHJldHVybiAodSwgc2VyaWVzSWR4LCBpZHgwLCBpZHgxKSA9PiB7XG5cdFx0cmV0dXJuIG9yaWVudCh1LCBzZXJpZXNJZHgsIChzZXJpZXMsIGRhdGFYLCBkYXRhWSwgc2NhbGVYLCBzY2FsZVksIHZhbFRvUG9zWCwgdmFsVG9Qb3NZLCB4T2ZmLCB5T2ZmLCB4RGltLCB5RGltKSA9PiB7XG5cdFx0XHRbaWR4MCwgaWR4MV0gPSBub25OdWxsSWR4cyhkYXRhWSwgaWR4MCwgaWR4MSk7XG5cblx0XHRcdGxldCBweFJvdW5kID0gc2VyaWVzLnB4Um91bmQ7XG5cblx0XHRcdGxldCBwaXhlbEZvclggPSB2YWwgPT4gcHhSb3VuZCh2YWxUb1Bvc1godmFsLCBzY2FsZVgsIHhEaW0sIHhPZmYpKTtcblx0XHRcdGxldCBwaXhlbEZvclkgPSB2YWwgPT4gcHhSb3VuZCh2YWxUb1Bvc1kodmFsLCBzY2FsZVksIHlEaW0sIHlPZmYpKTtcblxuXHRcdFx0bGV0IG1vdmVUbywgYmV6aWVyQ3VydmVUbywgbGluZVRvO1xuXG5cdFx0XHRpZiAoc2NhbGVYLm9yaSA9PSAwKSB7XG5cdFx0XHRcdG1vdmVUbyA9IG1vdmVUb0g7XG5cdFx0XHRcdGxpbmVUbyA9IGxpbmVUb0g7XG5cdFx0XHRcdGJlemllckN1cnZlVG8gPSBiZXppZXJDdXJ2ZVRvSDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRtb3ZlVG8gPSBtb3ZlVG9WO1xuXHRcdFx0XHRsaW5lVG8gPSBsaW5lVG9WO1xuXHRcdFx0XHRiZXppZXJDdXJ2ZVRvID0gYmV6aWVyQ3VydmVUb1Y7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRpciA9IHNjYWxlWC5kaXIgKiAoc2NhbGVYLm9yaSA9PSAwID8gMSA6IC0xKTtcblxuXHRcdFx0bGV0IGZpcnN0WFBvcyA9IHBpeGVsRm9yWChkYXRhWFtkaXIgPT0gMSA/IGlkeDAgOiBpZHgxXSk7XG5cdFx0XHRsZXQgcHJldlhQb3MgPSBmaXJzdFhQb3M7XG5cblx0XHRcdGxldCB4Q29vcmRzID0gW107XG5cdFx0XHRsZXQgeUNvb3JkcyA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gZGlyID09IDEgPyBpZHgwIDogaWR4MTsgaSA+PSBpZHgwICYmIGkgPD0gaWR4MTsgaSArPSBkaXIpIHtcblx0XHRcdFx0bGV0IHlWYWwgPSBkYXRhWVtpXTtcblxuXHRcdFx0XHRpZiAoeVZhbCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0bGV0IHhWYWwgPSBkYXRhWFtpXTtcblx0XHRcdFx0XHRsZXQgeFBvcyA9IHBpeGVsRm9yWCh4VmFsKTtcblxuXHRcdFx0XHRcdHhDb29yZHMucHVzaChwcmV2WFBvcyA9IHhQb3MpO1xuXHRcdFx0XHRcdHlDb29yZHMucHVzaChwaXhlbEZvclkoZGF0YVlbaV0pKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBfcGF0aHMgPSB7c3Ryb2tlOiBpbnRlcnAoeENvb3JkcywgeUNvb3JkcywgbW92ZVRvLCBsaW5lVG8sIGJlemllckN1cnZlVG8sIHB4Um91bmQpLCBmaWxsOiBudWxsLCBjbGlwOiBudWxsLCBiYW5kOiBudWxsLCBnYXBzOiBudWxsLCBmbGFnczogQkFORF9DTElQX0ZJTEx9O1xuXHRcdFx0Y29uc3Qgc3Ryb2tlID0gX3BhdGhzLnN0cm9rZTtcblxuXHRcdFx0bGV0IFsgYmFuZEZpbGxEaXIsIGJhbmRDbGlwRGlyIF0gPSBiYW5kRmlsbENsaXBEaXJzKHUsIHNlcmllc0lkeCk7XG5cblx0XHRcdGlmIChzZXJpZXMuZmlsbCAhPSBudWxsIHx8IGJhbmRGaWxsRGlyICE9IDApIHtcblx0XHRcdFx0bGV0IGZpbGwgPSBfcGF0aHMuZmlsbCA9IG5ldyBQYXRoMkQoc3Ryb2tlKTtcblxuXHRcdFx0XHRsZXQgZmlsbFRvID0gc2VyaWVzLmZpbGxUbyh1LCBzZXJpZXNJZHgsIHNlcmllcy5taW4sIHNlcmllcy5tYXgsIGJhbmRGaWxsRGlyKTtcblx0XHRcdFx0bGV0IGZpbGxUb1kgPSBwaXhlbEZvclkoZmlsbFRvKTtcblxuXHRcdFx0XHRsaW5lVG8oZmlsbCwgcHJldlhQb3MsIGZpbGxUb1kpO1xuXHRcdFx0XHRsaW5lVG8oZmlsbCwgZmlyc3RYUG9zLCBmaWxsVG9ZKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFzZXJpZXMuc3BhbkdhcHMpIHtcblx0XHRcdC8vXHRjb25zb2xlLnRpbWUoJ2dhcHMnKTtcblx0XHRcdFx0bGV0IGdhcHMgPSBbXTtcblxuXHRcdFx0XHRnYXBzLnB1c2goLi4uZmluZEdhcHMoZGF0YVgsIGRhdGFZLCBpZHgwLCBpZHgxLCBkaXIsIHBpeGVsRm9yWCwgYWxpZ25HYXBzKSk7XG5cblx0XHRcdC8vXHRjb25zb2xlLnRpbWVFbmQoJ2dhcHMnKTtcblxuXHRcdFx0Ly9cdGNvbnNvbGUubG9nKCdnYXBzJywgSlNPTi5zdHJpbmdpZnkoZ2FwcykpO1xuXG5cdFx0XHRcdF9wYXRocy5nYXBzID0gZ2FwcyA9IHNlcmllcy5nYXBzKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSwgZ2Fwcyk7XG5cblx0XHRcdFx0X3BhdGhzLmNsaXAgPSBjbGlwR2FwcyhnYXBzLCBzY2FsZVgub3JpLCB4T2ZmLCB5T2ZmLCB4RGltLCB5RGltKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGJhbmRDbGlwRGlyICE9IDApIHtcblx0XHRcdFx0X3BhdGhzLmJhbmQgPSBiYW5kQ2xpcERpciA9PSAyID8gW1xuXHRcdFx0XHRcdGNsaXBCYW5kTGluZSh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIHN0cm9rZSwgLTEpLFxuXHRcdFx0XHRcdGNsaXBCYW5kTGluZSh1LCBzZXJpZXNJZHgsIGlkeDAsIGlkeDEsIHN0cm9rZSwgIDEpLFxuXHRcdFx0XHRdIDogY2xpcEJhbmRMaW5lKHUsIHNlcmllc0lkeCwgaWR4MCwgaWR4MSwgc3Ryb2tlLCBiYW5kQ2xpcERpcik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfcGF0aHM7XG5cblx0XHRcdC8vICBpZiBGRUFUX1BBVEhTOiBmYWxzZSBpbiByb2xsdXAuY29uZmlnLmpzXG5cdFx0XHQvL1x0dS5jdHguc2F2ZSgpO1xuXHRcdFx0Ly9cdHUuY3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0Ly9cdHUuY3R4LnJlY3QodS5iYm94LmxlZnQsIHUuYmJveC50b3AsIHUuYmJveC53aWR0aCwgdS5iYm94LmhlaWdodCk7XG5cdFx0XHQvL1x0dS5jdHguY2xpcCgpO1xuXHRcdFx0Ly9cdHUuY3R4LnN0cm9rZVN0eWxlID0gdS5zZXJpZXNbc2lkeF0uc3Ryb2tlO1xuXHRcdFx0Ly9cdHUuY3R4LnN0cm9rZShzdHJva2UpO1xuXHRcdFx0Ly9cdHUuY3R4LmZpbGxTdHlsZSA9IHUuc2VyaWVzW3NpZHhdLmZpbGw7XG5cdFx0XHQvL1x0dS5jdHguZmlsbChmaWxsKTtcblx0XHRcdC8vXHR1LmN0eC5yZXN0b3JlKCk7XG5cdFx0XHQvL1x0cmV0dXJuIG51bGw7XG5cdFx0fSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIG1vbm90b25lQ3ViaWMob3B0cykge1xuXHRyZXR1cm4gc3BsaW5lSW50ZXJwKF9tb25vdG9uZUN1YmljLCBvcHRzKTtcbn1cblxuLy8gTW9ub3RvbmUgQ3ViaWMgU3BsaW5lIGludGVycG9sYXRpb24sIGFkYXB0ZWQgZnJvbSB0aGUgQ2hhcnRpc3QuanMgaW1wbGVtZW50YXRpb246XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2lvbmt1bnovY2hhcnRpc3QtanMvYmxvYi9lN2U3ODIwMWJmZmU5NjA5OTE1ZTVlNTNjZmFmYTI5YTVkNmM0OWY5L3NyYy9zY3JpcHRzL2ludGVycG9sYXRpb24uanMjTDI0MC1MMzY5XG5mdW5jdGlvbiBfbW9ub3RvbmVDdWJpYyh4cywgeXMsIG1vdmVUbywgbGluZVRvLCBiZXppZXJDdXJ2ZVRvLCBweFJvdW5kKSB7XG5cdGNvbnN0IG4gPSB4cy5sZW5ndGg7XG5cblx0aWYgKG4gPCAyKVxuXHRcdHJldHVybiBudWxsO1xuXG5cdGNvbnN0IHBhdGggPSBuZXcgUGF0aDJEKCk7XG5cblx0bW92ZVRvKHBhdGgsIHhzWzBdLCB5c1swXSk7XG5cblx0aWYgKG4gPT0gMilcblx0XHRsaW5lVG8ocGF0aCwgeHNbMV0sIHlzWzFdKTtcblx0ZWxzZSB7XG5cdFx0bGV0IG1zICA9IEFycmF5KG4pLFxuXHRcdFx0ZHMgID0gQXJyYXkobiAtIDEpLFxuXHRcdFx0ZHlzID0gQXJyYXkobiAtIDEpLFxuXHRcdFx0ZHhzID0gQXJyYXkobiAtIDEpO1xuXG5cdFx0Ly8gY2FsYyBkZWx0YXMgYW5kIGRlcml2YXRpdmVcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcblx0XHRcdGR5c1tpXSA9IHlzW2kgKyAxXSAtIHlzW2ldO1xuXHRcdFx0ZHhzW2ldID0geHNbaSArIDFdIC0geHNbaV07XG5cdFx0XHRkc1tpXSAgPSBkeXNbaV0gLyBkeHNbaV07XG5cdFx0fVxuXG5cdFx0Ly8gZGV0ZXJtaW5lIGRlc2lyZWQgc2xvcGUgKG0pIGF0IGVhY2ggcG9pbnQgdXNpbmcgRnJpdHNjaC1DYXJsc29uIG1ldGhvZFxuXHRcdC8vIGh0dHA6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy80NTIxOC9pbXBsZW1lbnRhdGlvbi1vZi1tb25vdG9uZS1jdWJpYy1pbnRlcnBvbGF0aW9uXG5cdFx0bXNbMF0gPSBkc1swXTtcblxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgbiAtIDE7IGkrKykge1xuXHRcdFx0aWYgKGRzW2ldID09PSAwIHx8IGRzW2kgLSAxXSA9PT0gMCB8fCAoZHNbaSAtIDFdID4gMCkgIT09IChkc1tpXSA+IDApKVxuXHRcdFx0XHRtc1tpXSA9IDA7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bXNbaV0gPSAzICogKGR4c1tpIC0gMV0gKyBkeHNbaV0pIC8gKFxuXHRcdFx0XHRcdCgyICogZHhzW2ldICsgZHhzW2kgLSAxXSkgLyBkc1tpIC0gMV0gK1xuXHRcdFx0XHRcdChkeHNbaV0gKyAyICogZHhzW2kgLSAxXSkgLyBkc1tpXVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICghaXNGaW5pdGUobXNbaV0pKVxuXHRcdFx0XHRcdG1zW2ldID0gMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtc1tuIC0gMV0gPSBkc1tuIC0gMl07XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIHtcblx0XHRcdGJlemllckN1cnZlVG8oXG5cdFx0XHRcdHBhdGgsXG5cdFx0XHRcdHhzW2ldICsgZHhzW2ldIC8gMyxcblx0XHRcdFx0eXNbaV0gKyBtc1tpXSAqIGR4c1tpXSAvIDMsXG5cdFx0XHRcdHhzW2kgKyAxXSAtIGR4c1tpXSAvIDMsXG5cdFx0XHRcdHlzW2kgKyAxXSAtIG1zW2kgKyAxXSAqIGR4c1tpXSAvIDMsXG5cdFx0XHRcdHhzW2kgKyAxXSxcblx0XHRcdFx0eXNbaSArIDFdLFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcGF0aDtcbn1cblxuY29uc3QgY3Vyc29yUGxvdHMgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGludmFsaWRhdGVSZWN0cygpIHtcblx0Zm9yIChsZXQgdSBvZiBjdXJzb3JQbG90cylcblx0XHR1LnN5bmNSZWN0KHRydWUpO1xufVxuXG5pZiAoZG9tRW52KSB7XG5cdG9uKHJlc2l6ZSwgd2luLCBpbnZhbGlkYXRlUmVjdHMpO1xuXHRvbihzY3JvbGwsIHdpbiwgaW52YWxpZGF0ZVJlY3RzLCB0cnVlKTtcblx0b24oZHBweGNoYW5nZSwgd2luLCAoKSA9PiB7IHVQbG90LnB4UmF0aW8gPSBweFJhdGlvOyB9KTtcbn1cblxuY29uc3QgbGluZWFyUGF0aCA9IGxpbmVhcigpIDtcbmNvbnN0IHBvaW50c1BhdGggPSBwb2ludHMoKSA7XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRzKGQsIHhvLCB5bywgaW5pdFkpIHtcblx0bGV0IGQyID0gaW5pdFkgPyBbZFswXSwgZFsxXV0uY29uY2F0KGQuc2xpY2UoMikpIDogW2RbMF1dLmNvbmNhdChkLnNsaWNlKDEpKTtcblx0cmV0dXJuIGQyLm1hcCgobywgaSkgPT4gc2V0RGVmYXVsdChvLCBpLCB4bywgeW8pKTtcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdHMyKGQsIHh5bykge1xuXHRyZXR1cm4gZC5tYXAoKG8sIGkpID0+IGkgPT0gMCA/IHt9IDogYXNzaWduKHt9LCB4eW8sIG8pKTsgIC8vIHRvZG86IGFzc2lnbigpIHdpbGwgbm90IG1lcmdlIGZhY2V0IGFycmF5c1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0KG8sIGksIHhvLCB5bykge1xuXHRyZXR1cm4gYXNzaWduKHt9LCAoaSA9PSAwID8geG8gOiB5byksIG8pO1xufVxuXG5mdW5jdGlvbiBzbmFwTnVtWChzZWxmLCBkYXRhTWluLCBkYXRhTWF4KSB7XG5cdHJldHVybiBkYXRhTWluID09IG51bGwgPyBudWxsTnVsbFR1cGxlIDogW2RhdGFNaW4sIGRhdGFNYXhdO1xufVxuXG5jb25zdCBzbmFwVGltZVggPSBzbmFwTnVtWDtcblxuLy8gdGhpcyBlbnN1cmVzIHRoYXQgbm9uLXRlbXBvcmFsL251bWVyaWMgeS1heGVzIGdldCBtdWx0aXBsZS1zbmFwcGVkIHBhZGRpbmcgYWRkZWQgYWJvdmUvYmVsb3dcbi8vIFRPRE86IGFsc28gYWNjb3VudCBmb3IgaW5jcnMgd2hlbiBzbmFwcGluZyB0byBlbnN1cmUgdG9wIG9mIGF4aXMgZ2V0cyBhIHRpY2sgJiB2YWx1ZVxuZnVuY3Rpb24gc25hcE51bVkoc2VsZiwgZGF0YU1pbiwgZGF0YU1heCkge1xuXHRyZXR1cm4gZGF0YU1pbiA9PSBudWxsID8gbnVsbE51bGxUdXBsZSA6IHJhbmdlTnVtKGRhdGFNaW4sIGRhdGFNYXgsIHJhbmdlUGFkLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc25hcExvZ1koc2VsZiwgZGF0YU1pbiwgZGF0YU1heCwgc2NhbGUpIHtcblx0cmV0dXJuIGRhdGFNaW4gPT0gbnVsbCA/IG51bGxOdWxsVHVwbGUgOiByYW5nZUxvZyhkYXRhTWluLCBkYXRhTWF4LCBzZWxmLnNjYWxlc1tzY2FsZV0ubG9nLCBmYWxzZSk7XG59XG5cbmNvbnN0IHNuYXBMb2dYID0gc25hcExvZ1k7XG5cbmZ1bmN0aW9uIHNuYXBBc2luaFkoc2VsZiwgZGF0YU1pbiwgZGF0YU1heCwgc2NhbGUpIHtcblx0cmV0dXJuIGRhdGFNaW4gPT0gbnVsbCA/IG51bGxOdWxsVHVwbGUgOiByYW5nZUFzaW5oKGRhdGFNaW4sIGRhdGFNYXgsIHNlbGYuc2NhbGVzW3NjYWxlXS5sb2csIGZhbHNlKTtcbn1cblxuY29uc3Qgc25hcEFzaW5oWCA9IHNuYXBBc2luaFk7XG5cbi8vIGRpbSBpcyBsb2dpY2FsIChnZXRDbGllbnRCb3VuZGluZ1JlY3QpIHBpeGVscywgbm90IGNhbnZhcyBwaXhlbHNcbmZ1bmN0aW9uIGZpbmRJbmNyKG1pblZhbCwgbWF4VmFsLCBpbmNycywgZGltLCBtaW5TcGFjZSkge1xuXHRsZXQgaW50RGlnaXRzID0gbWF4KG51bUludERpZ2l0cyhtaW5WYWwpLCBudW1JbnREaWdpdHMobWF4VmFsKSk7XG5cblx0bGV0IGRlbHRhID0gbWF4VmFsIC0gbWluVmFsO1xuXG5cdGxldCBpbmNySWR4ID0gY2xvc2VzdElkeCgobWluU3BhY2UgLyBkaW0pICogZGVsdGEsIGluY3JzKTtcblxuXHRkbyB7XG5cdFx0bGV0IGZvdW5kSW5jciA9IGluY3JzW2luY3JJZHhdO1xuXHRcdGxldCBmb3VuZFNwYWNlID0gZGltICogZm91bmRJbmNyIC8gZGVsdGE7XG5cblx0XHRpZiAoZm91bmRTcGFjZSA+PSBtaW5TcGFjZSAmJiBpbnREaWdpdHMgKyAoZm91bmRJbmNyIDwgNSA/IGZpeGVkRGVjLmdldChmb3VuZEluY3IpIDogMCkgPD0gMTcpXG5cdFx0XHRyZXR1cm4gW2ZvdW5kSW5jciwgZm91bmRTcGFjZV07XG5cdH0gd2hpbGUgKCsraW5jcklkeCA8IGluY3JzLmxlbmd0aCk7XG5cblx0cmV0dXJuIFswLCAwXTtcbn1cblxuZnVuY3Rpb24gcHhSYXRpb0ZvbnQoZm9udCkge1xuXHRsZXQgZm9udFNpemUsIGZvbnRTaXplQ3NzO1xuXHRmb250ID0gZm9udC5yZXBsYWNlKC8oXFxkKylweC8sIChtLCBwMSkgPT4gKGZvbnRTaXplID0gcm91bmQoKGZvbnRTaXplQ3NzID0gK3AxKSAqIHB4UmF0aW8pKSArICdweCcpO1xuXHRyZXR1cm4gW2ZvbnQsIGZvbnRTaXplLCBmb250U2l6ZUNzc107XG59XG5cbmZ1bmN0aW9uIHN5bmNGb250U2l6ZShheGlzKSB7XG5cdGlmIChheGlzLnNob3cpIHtcblx0XHRbYXhpcy5mb250LCBheGlzLmxhYmVsRm9udF0uZm9yRWFjaChmID0+IHtcblx0XHRcdGxldCBzaXplID0gcm91bmREZWMoZlsyXSAqIHB4UmF0aW8sIDEpO1xuXHRcdFx0ZlswXSA9IGZbMF0ucmVwbGFjZSgvWzAtOS5dK3B4Lywgc2l6ZSArICdweCcpO1xuXHRcdFx0ZlsxXSA9IHNpemU7XG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdVBsb3Qob3B0cywgZGF0YSwgdGhlbikge1xuXHRjb25zdCBzZWxmID0ge1xuXHRcdG1vZGU6IGlmTnVsbChvcHRzLm1vZGUsIDEpLFxuXHR9O1xuXG5cdGNvbnN0IG1vZGUgPSBzZWxmLm1vZGU7XG5cblx0ZnVuY3Rpb24gZ2V0SFBvcyh2YWwsIHNjYWxlLCBkaW0sIG9mZikge1xuXHRcdGxldCBwY3QgPSBzY2FsZS52YWxUb1BjdCh2YWwpO1xuXHRcdHJldHVybiBvZmYgKyBkaW0gKiAoc2NhbGUuZGlyID09IC0xID8gKDEgLSBwY3QpIDogcGN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFZQb3ModmFsLCBzY2FsZSwgZGltLCBvZmYpIHtcblx0XHRsZXQgcGN0ID0gc2NhbGUudmFsVG9QY3QodmFsKTtcblx0XHRyZXR1cm4gb2ZmICsgZGltICogKHNjYWxlLmRpciA9PSAtMSA/IHBjdCA6ICgxIC0gcGN0KSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRQb3ModmFsLCBzY2FsZSwgZGltLCBvZmYpIHtcblx0XHRyZXR1cm4gc2NhbGUub3JpID09IDAgPyBnZXRIUG9zKHZhbCwgc2NhbGUsIGRpbSwgb2ZmKSA6IGdldFZQb3ModmFsLCBzY2FsZSwgZGltLCBvZmYpO1xuXHR9XG5cblx0c2VsZi52YWxUb1Bvc0ggPSBnZXRIUG9zO1xuXHRzZWxmLnZhbFRvUG9zViA9IGdldFZQb3M7XG5cblx0bGV0IHJlYWR5ID0gZmFsc2U7XG5cdHNlbGYuc3RhdHVzID0gMDtcblxuXHRjb25zdCByb290ID0gc2VsZi5yb290ID0gcGxhY2VEaXYoVVBMT1QpO1xuXG5cdGlmIChvcHRzLmlkICE9IG51bGwpXG5cdFx0cm9vdC5pZCA9IG9wdHMuaWQ7XG5cblx0YWRkQ2xhc3Mocm9vdCwgb3B0cy5jbGFzcyk7XG5cblx0aWYgKG9wdHMudGl0bGUpIHtcblx0XHRsZXQgdGl0bGUgPSBwbGFjZURpdihUSVRMRSwgcm9vdCk7XG5cdFx0dGl0bGUudGV4dENvbnRlbnQgPSBvcHRzLnRpdGxlO1xuXHR9XG5cblx0Y29uc3QgY2FuID0gcGxhY2VUYWcoXCJjYW52YXNcIik7XG5cdGNvbnN0IGN0eCA9IHNlbGYuY3R4ID0gY2FuLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRjb25zdCB3cmFwID0gcGxhY2VEaXYoV1JBUCwgcm9vdCk7XG5cblx0b24oXCJjbGlja1wiLCB3cmFwLCBlID0+IHtcblx0XHRpZiAoZS50YXJnZXQgPT09IG92ZXIpIHtcblx0XHRcdGxldCBkaWREcmFnID0gbW91c2VMZWZ0MSAhPSBtb3VzZUxlZnQwIHx8IG1vdXNlVG9wMSAhPSBtb3VzZVRvcDA7XG5cdFx0XHRkaWREcmFnICYmIGRyYWcuY2xpY2soc2VsZiwgZSk7XG5cdFx0fVxuXHR9LCB0cnVlKTtcblxuXHRjb25zdCB1bmRlciA9IHNlbGYudW5kZXIgPSBwbGFjZURpdihVTkRFUiwgd3JhcCk7XG5cdHdyYXAuYXBwZW5kQ2hpbGQoY2FuKTtcblx0Y29uc3Qgb3ZlciA9IHNlbGYub3ZlciA9IHBsYWNlRGl2KE9WRVIsIHdyYXApO1xuXG5cdG9wdHMgPSBjb3B5KG9wdHMpO1xuXG5cdGNvbnN0IHB4QWxpZ24gPSAraWZOdWxsKG9wdHMucHhBbGlnbiwgMSk7XG5cblx0Y29uc3QgcHhSb3VuZCA9IHB4Um91bmRHZW4ocHhBbGlnbik7XG5cblx0KG9wdHMucGx1Z2lucyB8fCBbXSkuZm9yRWFjaChwID0+IHtcblx0XHRpZiAocC5vcHRzKVxuXHRcdFx0b3B0cyA9IHAub3B0cyhzZWxmLCBvcHRzKSB8fCBvcHRzO1xuXHR9KTtcblxuXHRjb25zdCBtcyA9IG9wdHMubXMgfHwgMWUtMztcblxuXHRjb25zdCBzZXJpZXMgID0gc2VsZi5zZXJpZXMgPSBtb2RlID09IDEgP1xuXHRcdHNldERlZmF1bHRzKG9wdHMuc2VyaWVzIHx8IFtdLCB4U2VyaWVzT3B0cywgeVNlcmllc09wdHMsIGZhbHNlKSA6XG5cdFx0c2V0RGVmYXVsdHMyKG9wdHMuc2VyaWVzIHx8IFtudWxsXSwgeHlTZXJpZXNPcHRzKTtcblx0Y29uc3QgYXhlcyAgICA9IHNlbGYuYXhlcyAgID0gc2V0RGVmYXVsdHMob3B0cy5heGVzICAgfHwgW10sIHhBeGlzT3B0cywgICB5QXhpc09wdHMsICAgIHRydWUpO1xuXHRjb25zdCBzY2FsZXMgID0gc2VsZi5zY2FsZXMgPSB7fTtcblx0Y29uc3QgYmFuZHMgICA9IHNlbGYuYmFuZHMgID0gb3B0cy5iYW5kcyB8fCBbXTtcblxuXHRiYW5kcy5mb3JFYWNoKGIgPT4ge1xuXHRcdGIuZmlsbCA9IGZuT3JTZWxmKGIuZmlsbCB8fCBudWxsKTtcblx0XHRiLmRpciA9IGlmTnVsbChiLmRpciwgLTEpO1xuXHR9KTtcblxuXHRjb25zdCB4U2NhbGVLZXkgPSBtb2RlID09IDIgPyBzZXJpZXNbMV0uZmFjZXRzWzBdLnNjYWxlIDogc2VyaWVzWzBdLnNjYWxlO1xuXG5cdGNvbnN0IGRyYXdPcmRlck1hcCA9IHtcblx0XHRheGVzOiBkcmF3QXhlc0dyaWQsXG5cdFx0c2VyaWVzOiBkcmF3U2VyaWVzLFxuXHR9O1xuXG5cdGNvbnN0IGRyYXdPcmRlciA9IChvcHRzLmRyYXdPcmRlciB8fCBbXCJheGVzXCIsIFwic2VyaWVzXCJdKS5tYXAoa2V5ID0+IGRyYXdPcmRlck1hcFtrZXldKTtcblxuXHRmdW5jdGlvbiBpbml0VmFsVG9QY3Qoc2MpIHtcblx0XHRjb25zdCBnZXRWYWwgPSAoXG5cdFx0XHRzYy5kaXN0ciA9PSAzICAgPyB2YWwgPT4gbG9nMTAodmFsID4gMCA/IHZhbCA6IHNjLmNsYW1wKHNlbGYsIHZhbCwgc2MubWluLCBzYy5tYXgsIHNjLmtleSkpIDpcblx0XHRcdHNjLmRpc3RyID09IDQgICA/IHZhbCA9PiBhc2luaCh2YWwsIHNjLmFzaW5oKSA6XG5cdFx0XHRzYy5kaXN0ciA9PSAxMDAgPyB2YWwgPT4gc2MuZndkKHZhbCkgOlxuXHRcdFx0dmFsID0+IHZhbFxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdmFsID0+IHtcblx0XHRcdGxldCBfdmFsID0gZ2V0VmFsKHZhbCk7XG5cdFx0XHRsZXQgeyBfbWluLCBfbWF4IH0gPSBzYztcblx0XHRcdGxldCBkZWx0YSA9IF9tYXggLSBfbWluO1xuXHRcdFx0cmV0dXJuIChfdmFsIC0gX21pbikgLyBkZWx0YTtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdFNjYWxlKHNjYWxlS2V5KSB7XG5cdFx0bGV0IHNjID0gc2NhbGVzW3NjYWxlS2V5XTtcblxuXHRcdGlmIChzYyA9PSBudWxsKSB7XG5cdFx0XHRsZXQgc2NhbGVPcHRzID0gKG9wdHMuc2NhbGVzIHx8IEVNUFRZX09CSilbc2NhbGVLZXldIHx8IEVNUFRZX09CSjtcblxuXHRcdFx0aWYgKHNjYWxlT3B0cy5mcm9tICE9IG51bGwpIHtcblx0XHRcdFx0Ly8gZW5zdXJlIHBhcmVudCBpcyBpbml0aWFsaXplZFxuXHRcdFx0XHRpbml0U2NhbGUoc2NhbGVPcHRzLmZyb20pO1xuXHRcdFx0XHQvLyBkZXBlbmRlbnQgc2NhbGVzIGluaGVyaXRcblx0XHRcdFx0bGV0IHNjID0gYXNzaWduKHt9LCBzY2FsZXNbc2NhbGVPcHRzLmZyb21dLCBzY2FsZU9wdHMsIHtrZXk6IHNjYWxlS2V5fSk7XG5cdFx0XHRcdHNjLnZhbFRvUGN0ID0gaW5pdFZhbFRvUGN0KHNjKTtcblx0XHRcdFx0c2NhbGVzW3NjYWxlS2V5XSA9IHNjO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNjID0gc2NhbGVzW3NjYWxlS2V5XSA9IGFzc2lnbih7fSwgKHNjYWxlS2V5ID09IHhTY2FsZUtleSA/IHhTY2FsZU9wdHMgOiB5U2NhbGVPcHRzKSwgc2NhbGVPcHRzKTtcblxuXHRcdFx0XHRzYy5rZXkgPSBzY2FsZUtleTtcblxuXHRcdFx0XHRsZXQgaXNUaW1lID0gc2MudGltZTtcblxuXHRcdFx0XHRsZXQgcm4gPSBzYy5yYW5nZTtcblxuXHRcdFx0XHRsZXQgcmFuZ2VJc0FyciA9IGlzQXJyKHJuKTtcblxuXHRcdFx0XHRpZiAoc2NhbGVLZXkgIT0geFNjYWxlS2V5IHx8IChtb2RlID09IDIgJiYgIWlzVGltZSkpIHtcblx0XHRcdFx0XHQvLyBpZiByYW5nZSBhcnJheSBoYXMgbnVsbCBsaW1pdHMsIGl0IHNob3VsZCBiZSBhdXRvXG5cdFx0XHRcdFx0aWYgKHJhbmdlSXNBcnIgJiYgKHJuWzBdID09IG51bGwgfHwgcm5bMV0gPT0gbnVsbCkpIHtcblx0XHRcdFx0XHRcdHJuID0ge1xuXHRcdFx0XHRcdFx0XHRtaW46IHJuWzBdID09IG51bGwgPyBhdXRvUmFuZ2VQYXJ0IDoge1xuXHRcdFx0XHRcdFx0XHRcdG1vZGU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0aGFyZDogcm5bMF0sXG5cdFx0XHRcdFx0XHRcdFx0c29mdDogcm5bMF0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdG1heDogcm5bMV0gPT0gbnVsbCA/IGF1dG9SYW5nZVBhcnQgOiB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kZTogMSxcblx0XHRcdFx0XHRcdFx0XHRoYXJkOiByblsxXSxcblx0XHRcdFx0XHRcdFx0XHRzb2Z0OiByblsxXSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyYW5nZUlzQXJyID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyYW5nZUlzQXJyICYmIGlzT2JqKHJuKSkge1xuXHRcdFx0XHRcdFx0bGV0IGNmZyA9IHJuO1xuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBzaW1pbGFyIHRvIHNuYXBOdW1ZXG5cdFx0XHRcdFx0XHRybiA9IChzZWxmLCBkYXRhTWluLCBkYXRhTWF4KSA9PiBkYXRhTWluID09IG51bGwgPyBudWxsTnVsbFR1cGxlIDogcmFuZ2VOdW0oZGF0YU1pbiwgZGF0YU1heCwgY2ZnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzYy5yYW5nZSA9IGZuT3JTZWxmKHJuIHx8IChpc1RpbWUgPyBzbmFwVGltZVggOiBzY2FsZUtleSA9PSB4U2NhbGVLZXkgP1xuXHRcdFx0XHRcdChzYy5kaXN0ciA9PSAzID8gc25hcExvZ1ggOiBzYy5kaXN0ciA9PSA0ID8gc25hcEFzaW5oWCA6IHNuYXBOdW1YKSA6XG5cdFx0XHRcdFx0KHNjLmRpc3RyID09IDMgPyBzbmFwTG9nWSA6IHNjLmRpc3RyID09IDQgPyBzbmFwQXNpbmhZIDogc25hcE51bVkpXG5cdFx0XHRcdCkpO1xuXG5cdFx0XHRcdHNjLmF1dG8gPSBmbk9yU2VsZihyYW5nZUlzQXJyID8gZmFsc2UgOiBzYy5hdXRvKTtcblxuXHRcdFx0XHRzYy5jbGFtcCA9IGZuT3JTZWxmKHNjLmNsYW1wIHx8IGNsYW1wU2NhbGUpO1xuXG5cdFx0XHRcdC8vIGNhY2hlcyBmb3IgZXhwZW5zaXZlIG9wcyBsaWtlIGFzaW5oKCkgJiBsb2coKVxuXHRcdFx0XHRzYy5fbWluID0gc2MuX21heCA9IG51bGw7XG5cblx0XHRcdFx0c2MudmFsVG9QY3QgPSBpbml0VmFsVG9QY3Qoc2MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGluaXRTY2FsZShcInhcIik7XG5cdGluaXRTY2FsZShcInlcIik7XG5cblx0Ly8gVE9ETzogaW5pdCBzY2FsZXMgZnJvbSBmYWNldHMgaW4gbW9kZTogMlxuXHRpZiAobW9kZSA9PSAxKSB7XG5cdFx0c2VyaWVzLmZvckVhY2gocyA9PiB7XG5cdFx0XHRpbml0U2NhbGUocy5zY2FsZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRheGVzLmZvckVhY2goYSA9PiB7XG5cdFx0aW5pdFNjYWxlKGEuc2NhbGUpO1xuXHR9KTtcblxuXHRmb3IgKGxldCBrIGluIG9wdHMuc2NhbGVzKVxuXHRcdGluaXRTY2FsZShrKTtcblxuXHRjb25zdCBzY2FsZVggPSBzY2FsZXNbeFNjYWxlS2V5XTtcblxuXHRjb25zdCB4U2NhbGVEaXN0ciA9IHNjYWxlWC5kaXN0cjtcblxuXHRsZXQgdmFsVG9Qb3NYLCB2YWxUb1Bvc1k7XG5cblx0aWYgKHNjYWxlWC5vcmkgPT0gMCkge1xuXHRcdGFkZENsYXNzKHJvb3QsIE9SSV9IWik7XG5cdFx0dmFsVG9Qb3NYID0gZ2V0SFBvcztcblx0XHR2YWxUb1Bvc1kgPSBnZXRWUG9zO1xuXHRcdC8qXG5cdFx0dXBkT3JpRGltcyA9ICgpID0+IHtcblx0XHRcdHhEaW1DYW4gPSBwbG90V2lkO1xuXHRcdFx0eE9mZkNhbiA9IHBsb3RMZnQ7XG5cdFx0XHR5RGltQ2FuID0gcGxvdEhndDtcblx0XHRcdHlPZmZDYW4gPSBwbG90VG9wO1xuXG5cdFx0XHR4RGltQ3NzID0gcGxvdFdpZENzcztcblx0XHRcdHhPZmZDc3MgPSBwbG90TGZ0Q3NzO1xuXHRcdFx0eURpbUNzcyA9IHBsb3RIZ3RDc3M7XG5cdFx0XHR5T2ZmQ3NzID0gcGxvdFRvcENzcztcblx0XHR9O1xuXHRcdCovXG5cdH1cblx0ZWxzZSB7XG5cdFx0YWRkQ2xhc3Mocm9vdCwgT1JJX1ZUKTtcblx0XHR2YWxUb1Bvc1ggPSBnZXRWUG9zO1xuXHRcdHZhbFRvUG9zWSA9IGdldEhQb3M7XG5cdFx0Lypcblx0XHR1cGRPcmlEaW1zID0gKCkgPT4ge1xuXHRcdFx0eERpbUNhbiA9IHBsb3RIZ3Q7XG5cdFx0XHR4T2ZmQ2FuID0gcGxvdFRvcDtcblx0XHRcdHlEaW1DYW4gPSBwbG90V2lkO1xuXHRcdFx0eU9mZkNhbiA9IHBsb3RMZnQ7XG5cblx0XHRcdHhEaW1Dc3MgPSBwbG90SGd0Q3NzO1xuXHRcdFx0eE9mZkNzcyA9IHBsb3RUb3BDc3M7XG5cdFx0XHR5RGltQ3NzID0gcGxvdFdpZENzcztcblx0XHRcdHlPZmZDc3MgPSBwbG90TGZ0Q3NzO1xuXHRcdH07XG5cdFx0Ki9cblx0fVxuXG5cdGNvbnN0IHBlbmRTY2FsZXMgPSB7fTtcblxuXHQvLyBleHBsaWNpdGx5LXNldCBpbml0aWFsIHNjYWxlc1xuXHRmb3IgKGxldCBrIGluIHNjYWxlcykge1xuXHRcdGxldCBzYyA9IHNjYWxlc1trXTtcblxuXHRcdGlmIChzYy5taW4gIT0gbnVsbCB8fCBzYy5tYXggIT0gbnVsbCkge1xuXHRcdFx0cGVuZFNjYWxlc1trXSA9IHttaW46IHNjLm1pbiwgbWF4OiBzYy5tYXh9O1xuXHRcdFx0c2MubWluID0gc2MubWF4ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuLy9cdHNlbGYudHogPSBvcHRzLnR6IHx8IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcblx0Y29uc3QgX3R6RGF0ZSAgPSAob3B0cy50ekRhdGUgfHwgKHRzID0+IG5ldyBEYXRlKHJvdW5kKHRzIC8gbXMpKSkpO1xuXHRjb25zdCBfZm10RGF0ZSA9IChvcHRzLmZtdERhdGUgfHwgZm10RGF0ZSk7XG5cblx0Y29uc3QgX3RpbWVBeGlzU3BsaXRzID0gKG1zID09IDEgPyB0aW1lQXhpc1NwbGl0c01zKF90ekRhdGUpIDogdGltZUF4aXNTcGxpdHNTKF90ekRhdGUpKTtcblx0Y29uc3QgX3RpbWVBeGlzVmFscyAgID0gdGltZUF4aXNWYWxzKF90ekRhdGUsIHRpbWVBeGlzU3RhbXBzKChtcyA9PSAxID8gX3RpbWVBeGlzU3RhbXBzTXMgOiBfdGltZUF4aXNTdGFtcHNTKSwgX2ZtdERhdGUpKTtcblx0Y29uc3QgX3RpbWVTZXJpZXNWYWwgID0gdGltZVNlcmllc1ZhbChfdHpEYXRlLCB0aW1lU2VyaWVzU3RhbXAoX3RpbWVTZXJpZXNTdGFtcCwgX2ZtdERhdGUpKTtcblxuXHRjb25zdCBhY3RpdmVJZHhzID0gW107XG5cblx0Y29uc3QgbGVnZW5kICAgICA9IChzZWxmLmxlZ2VuZCA9IGFzc2lnbih7fSwgbGVnZW5kT3B0cywgb3B0cy5sZWdlbmQpKTtcblx0Y29uc3QgY3Vyc29yICAgICA9ICAgICAgICAgICAgICAgIChzZWxmLmN1cnNvciA9IGFzc2lnbih7fSwgY3Vyc29yT3B0cywge2RyYWc6IHt5OiBtb2RlID09IDJ9fSwgb3B0cy5jdXJzb3IpKTtcblx0Y29uc3Qgc2hvd0xlZ2VuZCA9IGxlZ2VuZC5zaG93O1xuXHRjb25zdCBzaG93Q3Vyc29yID0gICAgICAgICAgICAgICAgY3Vyc29yLnNob3c7XG5cdGNvbnN0IG1hcmtlcnMgICAgPSBsZWdlbmQubWFya2VycztcblxuXHR7XG5cdFx0bGVnZW5kLmlkeHMgPSBhY3RpdmVJZHhzO1xuXG5cdFx0bWFya2Vycy53aWR0aCAgPSBmbk9yU2VsZihtYXJrZXJzLndpZHRoKTtcblx0XHRtYXJrZXJzLmRhc2ggICA9IGZuT3JTZWxmKG1hcmtlcnMuZGFzaCk7XG5cdFx0bWFya2Vycy5zdHJva2UgPSBmbk9yU2VsZihtYXJrZXJzLnN0cm9rZSk7XG5cdFx0bWFya2Vycy5maWxsICAgPSBmbk9yU2VsZihtYXJrZXJzLmZpbGwpO1xuXHR9XG5cblx0bGV0IGxlZ2VuZFRhYmxlO1xuXHRsZXQgbGVnZW5kSGVhZDtcblx0bGV0IGxlZ2VuZEJvZHk7XG5cdGxldCBsZWdlbmRSb3dzID0gW107XG5cdGxldCBsZWdlbmRDZWxscyA9IFtdO1xuXHRsZXQgbGVnZW5kQ29scztcblx0bGV0IG11bHRpVmFsTGVnZW5kID0gZmFsc2U7XG5cdGxldCBOVUxMX0xFR0VORF9WQUxVRVMgPSB7fTtcblxuXHRpZiAobGVnZW5kLmxpdmUpIHtcblx0XHRjb25zdCBnZXRNdWx0aVZhbHMgPSBzZXJpZXNbMV0gPyBzZXJpZXNbMV0udmFsdWVzIDogbnVsbDtcblx0XHRtdWx0aVZhbExlZ2VuZCA9IGdldE11bHRpVmFscyAhPSBudWxsO1xuXHRcdGxlZ2VuZENvbHMgPSBtdWx0aVZhbExlZ2VuZCA/IGdldE11bHRpVmFscyhzZWxmLCAxLCAwKSA6IHtfOiAwfTtcblxuXHRcdGZvciAobGV0IGsgaW4gbGVnZW5kQ29scylcblx0XHRcdE5VTExfTEVHRU5EX1ZBTFVFU1trXSA9IExFR0VORF9ESVNQO1xuXHR9XG5cblx0aWYgKHNob3dMZWdlbmQpIHtcblx0XHRsZWdlbmRUYWJsZSA9IHBsYWNlVGFnKFwidGFibGVcIiwgTEVHRU5ELCByb290KTtcblx0XHRsZWdlbmRCb2R5ID0gcGxhY2VUYWcoXCJ0Ym9keVwiLCBudWxsLCBsZWdlbmRUYWJsZSk7XG5cblx0XHQvLyBhbGxvd3MgbGVnZW5kIHRvIGJlIG1vdmVkIG91dCBvZiByb290XG5cdFx0bGVnZW5kLm1vdW50KHNlbGYsIGxlZ2VuZFRhYmxlKTtcblxuXHRcdGlmIChtdWx0aVZhbExlZ2VuZCkge1xuXHRcdFx0bGVnZW5kSGVhZCA9IHBsYWNlVGFnKFwidGhlYWRcIiwgbnVsbCwgbGVnZW5kVGFibGUsIGxlZ2VuZEJvZHkpO1xuXG5cdFx0XHRsZXQgaGVhZCA9IHBsYWNlVGFnKFwidHJcIiwgbnVsbCwgbGVnZW5kSGVhZCk7XG5cdFx0XHRwbGFjZVRhZyhcInRoXCIsIG51bGwsIGhlYWQpO1xuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gbGVnZW5kQ29scylcblx0XHRcdFx0cGxhY2VUYWcoXCJ0aFwiLCBMRUdFTkRfTEFCRUwsIGhlYWQpLnRleHRDb250ZW50ID0ga2V5O1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGFkZENsYXNzKGxlZ2VuZFRhYmxlLCBMRUdFTkRfSU5MSU5FKTtcblx0XHRcdGxlZ2VuZC5saXZlICYmIGFkZENsYXNzKGxlZ2VuZFRhYmxlLCBMRUdFTkRfTElWRSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgc29uICA9IHtzaG93OiB0cnVlfTtcblx0Y29uc3Qgc29mZiA9IHtzaG93OiBmYWxzZX07XG5cblx0ZnVuY3Rpb24gaW5pdExlZ2VuZFJvdyhzLCBpKSB7XG5cdFx0aWYgKGkgPT0gMCAmJiAobXVsdGlWYWxMZWdlbmQgfHwgIWxlZ2VuZC5saXZlIHx8IG1vZGUgPT0gMikpXG5cdFx0XHRyZXR1cm4gbnVsbE51bGxUdXBsZTtcblxuXHRcdGxldCBjZWxscyA9IFtdO1xuXG5cdFx0bGV0IHJvdyA9IHBsYWNlVGFnKFwidHJcIiwgTEVHRU5EX1NFUklFUywgbGVnZW5kQm9keSwgbGVnZW5kQm9keS5jaGlsZE5vZGVzW2ldKTtcblxuXHRcdGFkZENsYXNzKHJvdywgcy5jbGFzcyk7XG5cblx0XHRpZiAoIXMuc2hvdylcblx0XHRcdGFkZENsYXNzKHJvdywgT0ZGKTtcblxuXHRcdGxldCBsYWJlbCA9IHBsYWNlVGFnKFwidGhcIiwgbnVsbCwgcm93KTtcblxuXHRcdGlmIChtYXJrZXJzLnNob3cpIHtcblx0XHRcdGxldCBpbmRpYyA9IHBsYWNlRGl2KExFR0VORF9NQVJLRVIsIGxhYmVsKTtcblxuXHRcdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRcdGxldCB3aWR0aCAgPSBtYXJrZXJzLndpZHRoKHNlbGYsIGkpO1xuXG5cdFx0XHRcdGlmICh3aWR0aClcblx0XHRcdFx0XHRpbmRpYy5zdHlsZS5ib3JkZXIgPSB3aWR0aCArIFwicHggXCIgKyBtYXJrZXJzLmRhc2goc2VsZiwgaSkgKyBcIiBcIiArIG1hcmtlcnMuc3Ryb2tlKHNlbGYsIGkpO1xuXG5cdFx0XHRcdGluZGljLnN0eWxlLmJhY2tncm91bmQgPSBtYXJrZXJzLmZpbGwoc2VsZiwgaSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHRleHQgPSBwbGFjZURpdihMRUdFTkRfTEFCRUwsIGxhYmVsKTtcblxuXHRcdGlmIChzLmxhYmVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXG5cdFx0XHR0ZXh0LmFwcGVuZENoaWxkKHMubGFiZWwpO1xuXHRcdGVsc2Vcblx0XHRcdHRleHQudGV4dENvbnRlbnQgPSBzLmxhYmVsO1xuXG5cdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRpZiAoIW1hcmtlcnMuc2hvdylcblx0XHRcdFx0dGV4dC5zdHlsZS5jb2xvciA9IHMud2lkdGggPiAwID8gbWFya2Vycy5zdHJva2Uoc2VsZiwgaSkgOiBtYXJrZXJzLmZpbGwoc2VsZiwgaSk7XG5cblx0XHRcdG9uTW91c2UoXCJjbGlja1wiLCBsYWJlbCwgZSA9PiB7XG5cdFx0XHRcdGlmIChjdXJzb3IuX2xvY2spXG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdHNldEN1cnNvckV2ZW50KGUpO1xuXG5cdFx0XHRcdGxldCBzZXJpZXNJZHggPSBzZXJpZXMuaW5kZXhPZihzKTtcblxuXHRcdFx0XHRpZiAoKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpICE9IGxlZ2VuZC5pc29sYXRlKSB7XG5cdFx0XHRcdFx0Ly8gaWYgYW55IG90aGVyIHNlcmllcyBpcyBzaG93biwgaXNvbGF0ZSB0aGlzIG9uZS4gZWxzZSBzaG93IGFsbFxuXHRcdFx0XHRcdGxldCBpc29sYXRlID0gc2VyaWVzLnNvbWUoKHMsIGkpID0+IGkgPiAwICYmIGkgIT0gc2VyaWVzSWR4ICYmIHMuc2hvdyk7XG5cblx0XHRcdFx0XHRzZXJpZXMuZm9yRWFjaCgocywgaSkgPT4ge1xuXHRcdFx0XHRcdFx0aSA+IDAgJiYgc2V0U2VyaWVzKGksIGlzb2xhdGUgPyAoaSA9PSBzZXJpZXNJZHggPyBzb24gOiBzb2ZmKSA6IHNvbiwgdHJ1ZSwgc3luY09wdHMuc2V0U2VyaWVzKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0c2V0U2VyaWVzKHNlcmllc0lkeCwge3Nob3c6ICFzLnNob3d9LCB0cnVlLCBzeW5jT3B0cy5zZXRTZXJpZXMpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXG5cdFx0XHRpZiAoY3Vyc29yRm9jdXMpIHtcblx0XHRcdFx0b25Nb3VzZShtb3VzZWVudGVyLCBsYWJlbCwgZSA9PiB7XG5cdFx0XHRcdFx0aWYgKGN1cnNvci5fbG9jaylcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdHNldEN1cnNvckV2ZW50KGUpO1xuXG5cdFx0XHRcdFx0c2V0U2VyaWVzKHNlcmllcy5pbmRleE9mKHMpLCBGT0NVU19UUlVFLCB0cnVlLCBzeW5jT3B0cy5zZXRTZXJpZXMpO1xuXHRcdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIga2V5IGluIGxlZ2VuZENvbHMpIHtcblx0XHRcdGxldCB2ID0gcGxhY2VUYWcoXCJ0ZFwiLCBMRUdFTkRfVkFMVUUsIHJvdyk7XG5cdFx0XHR2LnRleHRDb250ZW50ID0gXCItLVwiO1xuXHRcdFx0Y2VsbHMucHVzaCh2KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW3JvdywgY2VsbHNdO1xuXHR9XG5cblx0Y29uc3QgbW91c2VMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG5cblx0ZnVuY3Rpb24gb25Nb3VzZShldiwgdGFyZywgZm4sIG9ubHlUYXJnID0gdHJ1ZSkge1xuXHRcdGNvbnN0IHRhcmdMaXN0ZW5lcnMgPSBtb3VzZUxpc3RlbmVycy5nZXQodGFyZykgfHwge307XG5cdFx0Y29uc3QgbGlzdGVuZXIgPSBjdXJzb3IuYmluZFtldl0oc2VsZiwgdGFyZywgZm4sIG9ubHlUYXJnKTtcblxuXHRcdGlmIChsaXN0ZW5lcikge1xuXHRcdFx0b24oZXYsIHRhcmcsIHRhcmdMaXN0ZW5lcnNbZXZdID0gbGlzdGVuZXIpO1xuXHRcdFx0bW91c2VMaXN0ZW5lcnMuc2V0KHRhcmcsIHRhcmdMaXN0ZW5lcnMpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9mZk1vdXNlKGV2LCB0YXJnLCBmbikge1xuXHRcdGNvbnN0IHRhcmdMaXN0ZW5lcnMgPSBtb3VzZUxpc3RlbmVycy5nZXQodGFyZykgfHwge307XG5cblx0XHRmb3IgKGxldCBrIGluIHRhcmdMaXN0ZW5lcnMpIHtcblx0XHRcdGlmIChldiA9PSBudWxsIHx8IGsgPT0gZXYpIHtcblx0XHRcdFx0b2ZmKGssIHRhcmcsIHRhcmdMaXN0ZW5lcnNba10pO1xuXHRcdFx0XHRkZWxldGUgdGFyZ0xpc3RlbmVyc1trXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXYgPT0gbnVsbClcblx0XHRcdG1vdXNlTGlzdGVuZXJzLmRlbGV0ZSh0YXJnKTtcblx0fVxuXG5cdGxldCBmdWxsV2lkQ3NzID0gMDtcblx0bGV0IGZ1bGxIZ3RDc3MgPSAwO1xuXG5cdGxldCBwbG90V2lkQ3NzID0gMDtcblx0bGV0IHBsb3RIZ3RDc3MgPSAwO1xuXG5cdC8vIHBsb3QgbWFyZ2lucyB0byBhY2NvdW50IGZvciBheGVzXG5cdGxldCBwbG90TGZ0Q3NzID0gMDtcblx0bGV0IHBsb3RUb3BDc3MgPSAwO1xuXG5cdC8vIHByZXZpb3VzIHZhbHVlcyBmb3IgZGlmZmluZ1xuXHRsZXQgX3Bsb3RMZnRDc3MgPSBwbG90TGZ0Q3NzO1xuXHRsZXQgX3Bsb3RUb3BDc3MgPSBwbG90VG9wQ3NzO1xuXHRsZXQgX3Bsb3RXaWRDc3MgPSBwbG90V2lkQ3NzO1xuXHRsZXQgX3Bsb3RIZ3RDc3MgPSBwbG90SGd0Q3NzO1xuXG5cblx0bGV0IHBsb3RMZnQgPSAwO1xuXHRsZXQgcGxvdFRvcCA9IDA7XG5cdGxldCBwbG90V2lkID0gMDtcblx0bGV0IHBsb3RIZ3QgPSAwO1xuXG5cdHNlbGYuYmJveCA9IHt9O1xuXG5cdGxldCBzaG91bGRTZXRTY2FsZXMgPSBmYWxzZTtcblx0bGV0IHNob3VsZFNldFNpemUgPSBmYWxzZTtcblx0bGV0IHNob3VsZENvbnZlcmdlU2l6ZSA9IGZhbHNlO1xuXHRsZXQgc2hvdWxkU2V0Q3Vyc29yID0gZmFsc2U7XG5cdGxldCBzaG91bGRTZXRTZWxlY3QgPSBmYWxzZTtcblx0bGV0IHNob3VsZFNldExlZ2VuZCA9IGZhbHNlO1xuXG5cdGZ1bmN0aW9uIF9zZXRTaXplKHdpZHRoLCBoZWlnaHQsIGZvcmNlKSB7XG5cdFx0aWYgKGZvcmNlIHx8ICh3aWR0aCAhPSBzZWxmLndpZHRoIHx8IGhlaWdodCAhPSBzZWxmLmhlaWdodCkpXG5cdFx0XHRjYWxjU2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuXHRcdHJlc2V0WVNlcmllcyhmYWxzZSk7XG5cblx0XHRzaG91bGRDb252ZXJnZVNpemUgPSB0cnVlO1xuXHRcdHNob3VsZFNldFNpemUgPSB0cnVlO1xuXG5cdFx0Y29tbWl0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBjYWxjU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG5cdC8vXHRsb2coXCJjYWxjU2l6ZSgpXCIsIGFyZ3VtZW50cyk7XG5cblx0XHRzZWxmLndpZHRoICA9IGZ1bGxXaWRDc3MgPSBwbG90V2lkQ3NzID0gd2lkdGg7XG5cdFx0c2VsZi5oZWlnaHQgPSBmdWxsSGd0Q3NzID0gcGxvdEhndENzcyA9IGhlaWdodDtcblx0XHRwbG90TGZ0Q3NzICA9IHBsb3RUb3BDc3MgPSAwO1xuXG5cdFx0Y2FsY1Bsb3RSZWN0KCk7XG5cdFx0Y2FsY0F4ZXNSZWN0cygpO1xuXG5cdFx0bGV0IGJiID0gc2VsZi5iYm94O1xuXG5cdFx0cGxvdExmdCA9IGJiLmxlZnQgICA9IGluY3JSb3VuZChwbG90TGZ0Q3NzICogcHhSYXRpbywgMC41KTtcblx0XHRwbG90VG9wID0gYmIudG9wICAgID0gaW5jclJvdW5kKHBsb3RUb3BDc3MgKiBweFJhdGlvLCAwLjUpO1xuXHRcdHBsb3RXaWQgPSBiYi53aWR0aCAgPSBpbmNyUm91bmQocGxvdFdpZENzcyAqIHB4UmF0aW8sIDAuNSk7XG5cdFx0cGxvdEhndCA9IGJiLmhlaWdodCA9IGluY3JSb3VuZChwbG90SGd0Q3NzICogcHhSYXRpbywgMC41KTtcblxuXHQvL1x0dXBkT3JpRGltcygpO1xuXHR9XG5cblx0Ly8gZW5zdXJlcyBzaXplIGNhbGMgY29udmVyZ2VuY2Vcblx0Y29uc3QgQ1lDTEVfTElNSVQgPSAzO1xuXG5cdGZ1bmN0aW9uIGNvbnZlcmdlU2l6ZSgpIHtcblx0XHRsZXQgY29udmVyZ2VkID0gZmFsc2U7XG5cblx0XHRsZXQgY3ljbGVOdW0gPSAwO1xuXG5cdFx0d2hpbGUgKCFjb252ZXJnZWQpIHtcblx0XHRcdGN5Y2xlTnVtKys7XG5cblx0XHRcdGxldCBheGVzQ29udmVyZ2VkID0gYXhlc0NhbGMoY3ljbGVOdW0pO1xuXHRcdFx0bGV0IHBhZGRpbmdDb252ZXJnZWQgPSBwYWRkaW5nQ2FsYyhjeWNsZU51bSk7XG5cblx0XHRcdGNvbnZlcmdlZCA9IGN5Y2xlTnVtID09IENZQ0xFX0xJTUlUIHx8IChheGVzQ29udmVyZ2VkICYmIHBhZGRpbmdDb252ZXJnZWQpO1xuXG5cdFx0XHRpZiAoIWNvbnZlcmdlZCkge1xuXHRcdFx0XHRjYWxjU2l6ZShzZWxmLndpZHRoLCBzZWxmLmhlaWdodCk7XG5cdFx0XHRcdHNob3VsZFNldFNpemUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNpemUoe3dpZHRoLCBoZWlnaHR9KSB7XG5cdFx0X3NldFNpemUod2lkdGgsIGhlaWdodCk7XG5cdH1cblxuXHRzZWxmLnNldFNpemUgPSBzZXRTaXplO1xuXG5cdC8vIGFjY3VtdWxhdGUgYXhpcyBvZmZzZXRzLCByZWR1Y2UgY2FudmFzIHdpZHRoXG5cdGZ1bmN0aW9uIGNhbGNQbG90UmVjdCgpIHtcblx0XHQvLyBlYXNlbWVudHMgZm9yIGVkZ2UgbGFiZWxzXG5cdFx0bGV0IGhhc1RvcEF4aXMgPSBmYWxzZTtcblx0XHRsZXQgaGFzQnRtQXhpcyA9IGZhbHNlO1xuXHRcdGxldCBoYXNSZ3RBeGlzID0gZmFsc2U7XG5cdFx0bGV0IGhhc0xmdEF4aXMgPSBmYWxzZTtcblxuXHRcdGF4ZXMuZm9yRWFjaCgoYXhpcywgaSkgPT4ge1xuXHRcdFx0aWYgKGF4aXMuc2hvdyAmJiBheGlzLl9zaG93KSB7XG5cdFx0XHRcdGxldCB7c2lkZSwgX3NpemV9ID0gYXhpcztcblx0XHRcdFx0bGV0IGlzVnQgPSBzaWRlICUgMjtcblx0XHRcdFx0bGV0IGxhYmVsU2l6ZSA9IGF4aXMubGFiZWwgIT0gbnVsbCA/IGF4aXMubGFiZWxTaXplIDogMDtcblxuXHRcdFx0XHRsZXQgZnVsbFNpemUgPSBfc2l6ZSArIGxhYmVsU2l6ZTtcblxuXHRcdFx0XHRpZiAoZnVsbFNpemUgPiAwKSB7XG5cdFx0XHRcdFx0aWYgKGlzVnQpIHtcblx0XHRcdFx0XHRcdHBsb3RXaWRDc3MgLT0gZnVsbFNpemU7XG5cblx0XHRcdFx0XHRcdGlmIChzaWRlID09IDMpIHtcblx0XHRcdFx0XHRcdFx0cGxvdExmdENzcyArPSBmdWxsU2l6ZTtcblx0XHRcdFx0XHRcdFx0aGFzTGZ0QXhpcyA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGhhc1JndEF4aXMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHBsb3RIZ3RDc3MgLT0gZnVsbFNpemU7XG5cblx0XHRcdFx0XHRcdGlmIChzaWRlID09IDApIHtcblx0XHRcdFx0XHRcdFx0cGxvdFRvcENzcyArPSBmdWxsU2l6ZTtcblx0XHRcdFx0XHRcdFx0aGFzVG9wQXhpcyA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdGhhc0J0bUF4aXMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0c2lkZXNXaXRoQXhlc1swXSA9IGhhc1RvcEF4aXM7XG5cdFx0c2lkZXNXaXRoQXhlc1sxXSA9IGhhc1JndEF4aXM7XG5cdFx0c2lkZXNXaXRoQXhlc1syXSA9IGhhc0J0bUF4aXM7XG5cdFx0c2lkZXNXaXRoQXhlc1szXSA9IGhhc0xmdEF4aXM7XG5cblx0XHQvLyBoeiBwYWRkaW5nXG5cdFx0cGxvdFdpZENzcyAtPSBfcGFkZGluZ1sxXSArIF9wYWRkaW5nWzNdO1xuXHRcdHBsb3RMZnRDc3MgKz0gX3BhZGRpbmdbM107XG5cblx0XHQvLyB2dCBwYWRkaW5nXG5cdFx0cGxvdEhndENzcyAtPSBfcGFkZGluZ1syXSArIF9wYWRkaW5nWzBdO1xuXHRcdHBsb3RUb3BDc3MgKz0gX3BhZGRpbmdbMF07XG5cdH1cblxuXHRmdW5jdGlvbiBjYWxjQXhlc1JlY3RzKCkge1xuXHRcdC8vIHdpbGwgYWNjdW0gK1xuXHRcdGxldCBvZmYxID0gcGxvdExmdENzcyArIHBsb3RXaWRDc3M7XG5cdFx0bGV0IG9mZjIgPSBwbG90VG9wQ3NzICsgcGxvdEhndENzcztcblx0XHQvLyB3aWxsIGFjY3VtIC1cblx0XHRsZXQgb2ZmMyA9IHBsb3RMZnRDc3M7XG5cdFx0bGV0IG9mZjAgPSBwbG90VG9wQ3NzO1xuXG5cdFx0ZnVuY3Rpb24gaW5jck9mZnNldChzaWRlLCBzaXplKSB7XG5cdFx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdFx0Y2FzZSAxOiBvZmYxICs9IHNpemU7IHJldHVybiBvZmYxIC0gc2l6ZTtcblx0XHRcdFx0Y2FzZSAyOiBvZmYyICs9IHNpemU7IHJldHVybiBvZmYyIC0gc2l6ZTtcblx0XHRcdFx0Y2FzZSAzOiBvZmYzIC09IHNpemU7IHJldHVybiBvZmYzICsgc2l6ZTtcblx0XHRcdFx0Y2FzZSAwOiBvZmYwIC09IHNpemU7IHJldHVybiBvZmYwICsgc2l6ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRheGVzLmZvckVhY2goKGF4aXMsIGkpID0+IHtcblx0XHRcdGlmIChheGlzLnNob3cgJiYgYXhpcy5fc2hvdykge1xuXHRcdFx0XHRsZXQgc2lkZSA9IGF4aXMuc2lkZTtcblxuXHRcdFx0XHRheGlzLl9wb3MgPSBpbmNyT2Zmc2V0KHNpZGUsIGF4aXMuX3NpemUpO1xuXG5cdFx0XHRcdGlmIChheGlzLmxhYmVsICE9IG51bGwpXG5cdFx0XHRcdFx0YXhpcy5fbHBvcyA9IGluY3JPZmZzZXQoc2lkZSwgYXhpcy5sYWJlbFNpemUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKGN1cnNvci5kYXRhSWR4ID09IG51bGwpIHtcblx0XHRsZXQgaG92ID0gY3Vyc29yLmhvdmVyO1xuXG5cdFx0bGV0IHNraXAgPSBob3Yuc2tpcCA9IG5ldyBTZXQoaG92LnNraXAgPz8gW10pO1xuXHRcdHNraXAuYWRkKHZvaWQgMCk7IC8vIGFsaWdubWVudCBhcnRpZmFjdHNcblx0XHRsZXQgcHJveCA9IGhvdi5wcm94ID0gZm5PclNlbGYoaG92LnByb3gpO1xuXHRcdGxldCBiaWFzID0gaG92LmJpYXMgPz89IDA7XG5cblx0XHQvLyBUT0RPOiBvbmx5IHNjYW4gYmV0d2VlbiBpbi12aWV3IGlkeHMgKGkwLCBpMSlcblx0XHRjdXJzb3IuZGF0YUlkeCA9IChzZWxmLCBzZXJpZXNJZHgsIGN1cnNvcklkeCwgdmFsQXRQb3NYKSA9PiB7XG5cdFx0XHRpZiAoc2VyaWVzSWR4ID09IDApXG5cdFx0XHRcdHJldHVybiBjdXJzb3JJZHg7XG5cblx0XHRcdGxldCBpZHgyID0gY3Vyc29ySWR4O1xuXG5cdFx0XHRsZXQgX3Byb3ggPSBwcm94KHNlbGYsIHNlcmllc0lkeCwgY3Vyc29ySWR4LCB2YWxBdFBvc1gpID8/IGluZjtcblx0XHRcdGxldCB3aXRoUHJveCA9IF9wcm94ID49IDAgJiYgX3Byb3ggPCBpbmY7XG5cdFx0XHRsZXQgeERpbSA9IHNjYWxlWC5vcmkgPT0gMCA/IHBsb3RXaWRDc3MgOiBwbG90SGd0Q3NzO1xuXHRcdFx0bGV0IGN1cnNvckxmdCA9IGN1cnNvci5sZWZ0O1xuXG5cdFx0XHRsZXQgeFZhbHVlcyA9IGRhdGFbMF07XG5cdFx0XHRsZXQgeVZhbHVlcyA9IGRhdGFbc2VyaWVzSWR4XTtcblxuXHRcdFx0aWYgKHNraXAuaGFzKHlWYWx1ZXNbY3Vyc29ySWR4XSkpIHtcblx0XHRcdFx0aWR4MiA9IG51bGw7XG5cblx0XHRcdFx0bGV0IG5vbk51bGxMZnQgPSBudWxsLFxuXHRcdFx0XHRcdG5vbk51bGxSZ3QgPSBudWxsLFxuXHRcdFx0XHRcdGo7XG5cblx0XHRcdFx0aWYgKGJpYXMgPT0gMCB8fCBiaWFzID09IC0xKSB7XG5cdFx0XHRcdFx0aiA9IGN1cnNvcklkeDtcblx0XHRcdFx0XHR3aGlsZSAobm9uTnVsbExmdCA9PSBudWxsICYmIGotLSA+IDApIHtcblx0XHRcdFx0XHRcdGlmICghc2tpcC5oYXMoeVZhbHVlc1tqXSkpXG5cdFx0XHRcdFx0XHRcdG5vbk51bGxMZnQgPSBqO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChiaWFzID09IDAgfHwgYmlhcyA9PSAxKSB7XG5cdFx0XHRcdFx0aiA9IGN1cnNvcklkeDtcblx0XHRcdFx0XHR3aGlsZSAobm9uTnVsbFJndCA9PSBudWxsICYmIGorKyA8IHlWYWx1ZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXNraXAuaGFzKHlWYWx1ZXNbal0pKVxuXHRcdFx0XHRcdFx0XHRub25OdWxsUmd0ID0gajtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobm9uTnVsbExmdCAhPSBudWxsIHx8IG5vbk51bGxSZ3QgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmICh3aXRoUHJveCkge1xuXHRcdFx0XHRcdFx0bGV0IGxmdFBvcyA9IG5vbk51bGxMZnQgPT0gbnVsbCA/IC1JbmZpbml0eSA6IHZhbFRvUG9zWCh4VmFsdWVzW25vbk51bGxMZnRdLCBzY2FsZVgsIHhEaW0sIDApO1xuXHRcdFx0XHRcdFx0bGV0IHJndFBvcyA9IG5vbk51bGxSZ3QgPT0gbnVsbCA/ICBJbmZpbml0eSA6IHZhbFRvUG9zWCh4VmFsdWVzW25vbk51bGxSZ3RdLCBzY2FsZVgsIHhEaW0sIDApO1xuXG5cdFx0XHRcdFx0XHRsZXQgbGZ0RGVsdGEgPSBjdXJzb3JMZnQgLSBsZnRQb3M7XG5cdFx0XHRcdFx0XHRsZXQgcmd0RGVsdGEgPSByZ3RQb3MgLSBjdXJzb3JMZnQ7XG5cblx0XHRcdFx0XHRcdGlmIChsZnREZWx0YSA8PSByZ3REZWx0YSkge1xuXHRcdFx0XHRcdFx0XHRpZiAobGZ0RGVsdGEgPD0gX3Byb3gpXG5cdFx0XHRcdFx0XHRcdFx0aWR4MiA9IG5vbk51bGxMZnQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAocmd0RGVsdGEgPD0gX3Byb3gpXG5cdFx0XHRcdFx0XHRcdFx0aWR4MiA9IG5vbk51bGxSZ3Q7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0aWR4MiA9XG5cdFx0XHRcdFx0XHRcdG5vbk51bGxSZ3QgPT0gbnVsbCA/IG5vbk51bGxMZnQgOlxuXHRcdFx0XHRcdFx0XHRub25OdWxsTGZ0ID09IG51bGwgPyBub25OdWxsUmd0IDpcblx0XHRcdFx0XHRcdFx0Y3Vyc29ySWR4IC0gbm9uTnVsbExmdCA8PSBub25OdWxsUmd0IC0gY3Vyc29ySWR4ID8gbm9uTnVsbExmdCA6IG5vbk51bGxSZ3Q7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICh3aXRoUHJveCkge1xuXHRcdFx0XHRsZXQgZGlzdCA9IGFicyhjdXJzb3JMZnQgLSB2YWxUb1Bvc1goeFZhbHVlc1tjdXJzb3JJZHhdLCBzY2FsZVgsIHhEaW0sIDApKTtcblxuXHRcdFx0XHRpZiAoZGlzdCA+IF9wcm94KVxuXHRcdFx0XHRcdGlkeDIgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gaWR4Mjtcblx0XHR9O1xuXHR9XG5cblx0Y29uc3Qgc2V0Q3Vyc29yRXZlbnQgPSBlID0+IHsgY3Vyc29yLmV2ZW50ID0gZTsgfTtcblxuXHRjdXJzb3IuaWR4cyA9IGFjdGl2ZUlkeHM7XG5cblx0Y3Vyc29yLl9sb2NrID0gZmFsc2U7XG5cblx0bGV0IHBvaW50cyA9IGN1cnNvci5wb2ludHM7XG5cblx0cG9pbnRzLnNob3cgICA9IGZuT3JTZWxmKHBvaW50cy5zaG93KTtcblx0cG9pbnRzLnNpemUgICA9IGZuT3JTZWxmKHBvaW50cy5zaXplKTtcblx0cG9pbnRzLnN0cm9rZSA9IGZuT3JTZWxmKHBvaW50cy5zdHJva2UpO1xuXHRwb2ludHMud2lkdGggID0gZm5PclNlbGYocG9pbnRzLndpZHRoKTtcblx0cG9pbnRzLmZpbGwgICA9IGZuT3JTZWxmKHBvaW50cy5maWxsKTtcblxuXHRjb25zdCBmb2N1cyA9IHNlbGYuZm9jdXMgPSBhc3NpZ24oe30sIG9wdHMuZm9jdXMgfHwge2FscGhhOiAwLjN9LCBjdXJzb3IuZm9jdXMpO1xuXG5cdGNvbnN0IGN1cnNvckZvY3VzID0gZm9jdXMucHJveCA+PSAwO1xuXHRjb25zdCBjdXJzb3JPbmVQdCA9IGN1cnNvckZvY3VzICYmIHBvaW50cy5vbmU7XG5cblx0Ly8gc2VyaWVzLWludGVyc2VjdGlvbiBtYXJrZXJzXG5cdGxldCBjdXJzb3JQdHMgPSBbXTtcblx0Ly8gcG9zaXRpb24gY2FjaGVzIGluIENTUyBwaXhlbHNcblx0bGV0IGN1cnNvclB0c0xmdCA9IFtdO1xuXHRsZXQgY3Vyc29yUHRzVG9wID0gW107XG5cblx0ZnVuY3Rpb24gaW5pdEN1cnNvclB0KHMsIHNpKSB7XG5cdFx0bGV0IHB0ID0gcG9pbnRzLnNob3coc2VsZiwgc2kpO1xuXG5cdFx0aWYgKHB0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGFkZENsYXNzKHB0LCBDVVJTT1JfUFQpO1xuXHRcdFx0YWRkQ2xhc3MocHQsIHMuY2xhc3MpO1xuXHRcdFx0ZWxUcmFucyhwdCwgLTEwLCAtMTAsIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MpO1xuXHRcdFx0b3Zlci5pbnNlcnRCZWZvcmUocHQsIGN1cnNvclB0c1tzaV0pO1xuXG5cdFx0XHRyZXR1cm4gcHQ7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdFNlcmllcyhzLCBpKSB7XG5cdFx0aWYgKG1vZGUgPT0gMSB8fCBpID4gMCkge1xuXHRcdFx0bGV0IGlzVGltZSA9IG1vZGUgPT0gMSAmJiBzY2FsZXNbcy5zY2FsZV0udGltZTtcblxuXHRcdFx0bGV0IHN2ID0gcy52YWx1ZTtcblx0XHRcdHMudmFsdWUgPSBpc1RpbWUgPyAoaXNTdHIoc3YpID8gdGltZVNlcmllc1ZhbChfdHpEYXRlLCB0aW1lU2VyaWVzU3RhbXAoc3YsIF9mbXREYXRlKSkgOiBzdiB8fCBfdGltZVNlcmllc1ZhbCkgOiBzdiB8fCBudW1TZXJpZXNWYWw7XG5cdFx0XHRzLmxhYmVsID0gcy5sYWJlbCB8fCAoaXNUaW1lID8gdGltZVNlcmllc0xhYmVsIDogbnVtU2VyaWVzTGFiZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjdXJzb3JPbmVQdCB8fCBpID4gMCkge1xuXHRcdFx0cy53aWR0aCAgPSBzLndpZHRoID09IG51bGwgPyAxIDogcy53aWR0aDtcblx0XHRcdHMucGF0aHMgID0gcy5wYXRocyB8fCBsaW5lYXJQYXRoIHx8IHJldE51bGw7XG5cdFx0XHRzLmZpbGxUbyA9IGZuT3JTZWxmKHMuZmlsbFRvIHx8IHNlcmllc0ZpbGxUbyk7XG5cdFx0XHRzLnB4QWxpZ24gPSAraWZOdWxsKHMucHhBbGlnbiwgcHhBbGlnbik7XG5cdFx0XHRzLnB4Um91bmQgPSBweFJvdW5kR2VuKHMucHhBbGlnbik7XG5cblx0XHRcdHMuc3Ryb2tlID0gZm5PclNlbGYocy5zdHJva2UgfHwgbnVsbCk7XG5cdFx0XHRzLmZpbGwgICA9IGZuT3JTZWxmKHMuZmlsbCB8fCBudWxsKTtcblx0XHRcdHMuX3N0cm9rZSA9IHMuX2ZpbGwgPSBzLl9wYXRocyA9IHMuX2ZvY3VzID0gbnVsbDtcblxuXHRcdFx0bGV0IF9wdERpYSA9IHB0RGlhKG1heCgxLCBzLndpZHRoKSwgMSk7XG5cdFx0XHRsZXQgcG9pbnRzID0gcy5wb2ludHMgPSBhc3NpZ24oe30sIHtcblx0XHRcdFx0c2l6ZTogX3B0RGlhLFxuXHRcdFx0XHR3aWR0aDogbWF4KDEsIF9wdERpYSAqIC4yKSxcblx0XHRcdFx0c3Ryb2tlOiBzLnN0cm9rZSxcblx0XHRcdFx0c3BhY2U6IF9wdERpYSAqIDIsXG5cdFx0XHRcdHBhdGhzOiBwb2ludHNQYXRoLFxuXHRcdFx0XHRfc3Ryb2tlOiBudWxsLFxuXHRcdFx0XHRfZmlsbDogbnVsbCxcblx0XHRcdH0sIHMucG9pbnRzKTtcblx0XHRcdHBvaW50cy5zaG93ICAgPSBmbk9yU2VsZihwb2ludHMuc2hvdyk7XG5cdFx0XHRwb2ludHMuZmlsdGVyID0gZm5PclNlbGYocG9pbnRzLmZpbHRlcik7XG5cdFx0XHRwb2ludHMuZmlsbCAgID0gZm5PclNlbGYocG9pbnRzLmZpbGwpO1xuXHRcdFx0cG9pbnRzLnN0cm9rZSA9IGZuT3JTZWxmKHBvaW50cy5zdHJva2UpO1xuXHRcdFx0cG9pbnRzLnBhdGhzICA9IGZuT3JTZWxmKHBvaW50cy5wYXRocyk7XG5cdFx0XHRwb2ludHMucHhBbGlnbiA9IHMucHhBbGlnbjtcblx0XHR9XG5cblx0XHRpZiAoc2hvd0xlZ2VuZCkge1xuXHRcdFx0bGV0IHJvd0NlbGxzID0gaW5pdExlZ2VuZFJvdyhzLCBpKTtcblx0XHRcdGxlZ2VuZFJvd3Muc3BsaWNlKGksIDAsIHJvd0NlbGxzWzBdKTtcblx0XHRcdGxlZ2VuZENlbGxzLnNwbGljZShpLCAwLCByb3dDZWxsc1sxXSk7XG5cdFx0XHRsZWdlbmQudmFsdWVzLnB1c2gobnVsbCk7XHQvLyBOVUxMX0xFR0VORF9WQUxTIG5vdCB5ZXQgYXZpbCBoZXJlIDooXG5cdFx0fVxuXG5cdFx0aWYgKHNob3dDdXJzb3IpIHtcblx0XHRcdGFjdGl2ZUlkeHMuc3BsaWNlKGksIDAsIG51bGwpO1xuXG5cdFx0XHRsZXQgcHQgPSBudWxsO1xuXG5cdFx0XHRpZiAoY3Vyc29yT25lUHQpIHtcblx0XHRcdFx0aWYgKGkgPT0gMClcblx0XHRcdFx0XHRwdCA9IGluaXRDdXJzb3JQdChzLCBpKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGkgPiAwKVxuXHRcdFx0XHRwdCA9IGluaXRDdXJzb3JQdChzLCBpKTtcblxuXHRcdFx0Y3Vyc29yUHRzLnNwbGljZShpLCAwLCBwdCk7XG5cdFx0XHRjdXJzb3JQdHNMZnQuc3BsaWNlKGksIDAsIDApO1xuXHRcdFx0Y3Vyc29yUHRzVG9wLnNwbGljZShpLCAwLCAwKTtcblx0XHR9XG5cblx0XHRmaXJlKFwiYWRkU2VyaWVzXCIsIGkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkU2VyaWVzKG9wdHMsIHNpKSB7XG5cdFx0c2kgPSBzaSA9PSBudWxsID8gc2VyaWVzLmxlbmd0aCA6IHNpO1xuXG5cdFx0b3B0cyA9IG1vZGUgPT0gMSA/IHNldERlZmF1bHQob3B0cywgc2ksIHhTZXJpZXNPcHRzLCB5U2VyaWVzT3B0cykgOiBzZXREZWZhdWx0KG9wdHMsIHNpLCB7fSwgeHlTZXJpZXNPcHRzKTtcblxuXHRcdHNlcmllcy5zcGxpY2Uoc2ksIDAsIG9wdHMpO1xuXHRcdGluaXRTZXJpZXMoc2VyaWVzW3NpXSwgc2kpO1xuXHR9XG5cblx0c2VsZi5hZGRTZXJpZXMgPSBhZGRTZXJpZXM7XG5cblx0ZnVuY3Rpb24gZGVsU2VyaWVzKGkpIHtcblx0XHRzZXJpZXMuc3BsaWNlKGksIDEpO1xuXG5cdFx0aWYgKHNob3dMZWdlbmQpIHtcblx0XHRcdGxlZ2VuZC52YWx1ZXMuc3BsaWNlKGksIDEpO1xuXG5cdFx0XHRsZWdlbmRDZWxscy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRsZXQgdHIgPSBsZWdlbmRSb3dzLnNwbGljZShpLCAxKVswXTtcblx0XHRcdG9mZk1vdXNlKG51bGwsIHRyLmZpcnN0Q2hpbGQpO1xuXHRcdFx0dHIucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3dDdXJzb3IpIHtcblx0XHRcdGFjdGl2ZUlkeHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0Y3Vyc29yUHRzLnNwbGljZShpLCAxKVswXS5yZW1vdmUoKTtcblx0XHRcdGN1cnNvclB0c0xmdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRjdXJzb3JQdHNUb3Auc3BsaWNlKGksIDEpO1xuXHRcdH1cblxuXHRcdC8vIFRPRE86IGRlLWluaXQgbm8tbG9uZ2VyLW5lZWRlZCBzY2FsZXM/XG5cblx0XHRmaXJlKFwiZGVsU2VyaWVzXCIsIGkpO1xuXHR9XG5cblx0c2VsZi5kZWxTZXJpZXMgPSBkZWxTZXJpZXM7XG5cblx0Y29uc3Qgc2lkZXNXaXRoQXhlcyA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV07XG5cblx0ZnVuY3Rpb24gaW5pdEF4aXMoYXhpcywgaSkge1xuXHRcdGF4aXMuX3Nob3cgPSBheGlzLnNob3c7XG5cblx0XHRpZiAoYXhpcy5zaG93KSB7XG5cdFx0XHRsZXQgaXNWdCA9IGF4aXMuc2lkZSAlIDI7XG5cblx0XHRcdGxldCBzYyA9IHNjYWxlc1theGlzLnNjYWxlXTtcblxuXHRcdFx0Ly8gdGhpcyBjYW4gb2NjdXIgaWYgYWxsIHNlcmllcyBzcGVjaWZ5IG5vbi1kZWZhdWx0IHNjYWxlc1xuXHRcdFx0aWYgKHNjID09IG51bGwpIHtcblx0XHRcdFx0YXhpcy5zY2FsZSA9IGlzVnQgPyBzZXJpZXNbMV0uc2NhbGUgOiB4U2NhbGVLZXk7XG5cdFx0XHRcdHNjID0gc2NhbGVzW2F4aXMuc2NhbGVdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhbHNvIHNldCBkZWZhdWx0cyBmb3IgaW5jcnMgJiB2YWx1ZXMgYmFzZWQgb24gYXhpcyBkaXN0clxuXHRcdFx0bGV0IGlzVGltZSA9IHNjLnRpbWU7XG5cblx0XHRcdGF4aXMuc2l6ZSAgID0gZm5PclNlbGYoYXhpcy5zaXplKTtcblx0XHRcdGF4aXMuc3BhY2UgID0gZm5PclNlbGYoYXhpcy5zcGFjZSk7XG5cdFx0XHRheGlzLnJvdGF0ZSA9IGZuT3JTZWxmKGF4aXMucm90YXRlKTtcblxuXHRcdFx0aWYgKGlzQXJyKGF4aXMuaW5jcnMpKSB7XG5cdFx0XHRcdGF4aXMuaW5jcnMuZm9yRWFjaChpbmNyID0+IHtcblx0XHRcdFx0XHQhZml4ZWREZWMuaGFzKGluY3IpICYmIGZpeGVkRGVjLnNldChpbmNyLCBndWVzc0RlYyhpbmNyKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRheGlzLmluY3JzICA9IGZuT3JTZWxmKGF4aXMuaW5jcnMgIHx8ICggICAgICAgICAgc2MuZGlzdHIgPT0gMiA/IHdob2xlSW5jcnMgOiAoaXNUaW1lID8gKG1zID09IDEgPyB0aW1lSW5jcnNNcyA6IHRpbWVJbmNyc1MpIDogbnVtSW5jcnMpKSk7XG5cdFx0XHRheGlzLnNwbGl0cyA9IGZuT3JTZWxmKGF4aXMuc3BsaXRzIHx8IChpc1RpbWUgJiYgc2MuZGlzdHIgPT0gMSA/IF90aW1lQXhpc1NwbGl0cyA6IHNjLmRpc3RyID09IDMgPyBsb2dBeGlzU3BsaXRzIDogc2MuZGlzdHIgPT0gNCA/IGFzaW5oQXhpc1NwbGl0cyA6IG51bUF4aXNTcGxpdHMpKTtcblxuXHRcdFx0YXhpcy5zdHJva2UgICAgICAgID0gZm5PclNlbGYoYXhpcy5zdHJva2UpO1xuXHRcdFx0YXhpcy5ncmlkLnN0cm9rZSAgID0gZm5PclNlbGYoYXhpcy5ncmlkLnN0cm9rZSk7XG5cdFx0XHRheGlzLnRpY2tzLnN0cm9rZSAgPSBmbk9yU2VsZihheGlzLnRpY2tzLnN0cm9rZSk7XG5cdFx0XHRheGlzLmJvcmRlci5zdHJva2UgPSBmbk9yU2VsZihheGlzLmJvcmRlci5zdHJva2UpO1xuXG5cdFx0XHRsZXQgYXYgPSBheGlzLnZhbHVlcztcblxuXHRcdFx0YXhpcy52YWx1ZXMgPSAoXG5cdFx0XHRcdC8vIHN0YXRpYyBhcnJheSBvZiB0aWNrIHZhbHVlc1xuXHRcdFx0XHRpc0FycihhdikgJiYgIWlzQXJyKGF2WzBdKSA/IGZuT3JTZWxmKGF2KSA6XG5cdFx0XHRcdC8vIHRlbXBvcmFsXG5cdFx0XHRcdGlzVGltZSA/IChcblx0XHRcdFx0XHQvLyBjb25maWcgYXJyYXkgb2YgZm10RGF0ZSBzdHJpbmcgdHBsc1xuXHRcdFx0XHRcdGlzQXJyKGF2KSA/XG5cdFx0XHRcdFx0XHR0aW1lQXhpc1ZhbHMoX3R6RGF0ZSwgdGltZUF4aXNTdGFtcHMoYXYsIF9mbXREYXRlKSkgOlxuXHRcdFx0XHRcdC8vIGZtdERhdGUgc3RyaW5nIHRwbFxuXHRcdFx0XHRcdGlzU3RyKGF2KSA/XG5cdFx0XHRcdFx0XHR0aW1lQXhpc1ZhbChfdHpEYXRlLCBhdikgOlxuXHRcdFx0XHRcdGF2IHx8IF90aW1lQXhpc1ZhbHNcblx0XHRcdFx0KSA6IGF2IHx8IG51bUF4aXNWYWxzXG5cdFx0XHQpO1xuXG5cdFx0XHRheGlzLmZpbHRlciA9IGZuT3JTZWxmKGF4aXMuZmlsdGVyIHx8ICggICAgICAgICAgc2MuZGlzdHIgPj0gMyAmJiBzYy5sb2cgPT0gMTAgPyBsb2cxMEF4aXNWYWxzRmlsdCA6IHNjLmRpc3RyID09IDMgJiYgc2MubG9nID09IDIgPyBsb2cyQXhpc1ZhbHNGaWx0IDogcmV0QXJnMSkpO1xuXG5cdFx0XHRheGlzLmZvbnQgICAgICA9IHB4UmF0aW9Gb250KGF4aXMuZm9udCk7XG5cdFx0XHRheGlzLmxhYmVsRm9udCA9IHB4UmF0aW9Gb250KGF4aXMubGFiZWxGb250KTtcblxuXHRcdFx0YXhpcy5fc2l6ZSAgID0gYXhpcy5zaXplKHNlbGYsIG51bGwsIGksIDApO1xuXG5cdFx0XHRheGlzLl9zcGFjZSAgPVxuXHRcdFx0YXhpcy5fcm90YXRlID1cblx0XHRcdGF4aXMuX2luY3JzICA9XG5cdFx0XHRheGlzLl9mb3VuZCAgPVx0Ly8gZm91bmRJbmNyU3BhY2Vcblx0XHRcdGF4aXMuX3NwbGl0cyA9XG5cdFx0XHRheGlzLl92YWx1ZXMgPSBudWxsO1xuXG5cdFx0XHRpZiAoYXhpcy5fc2l6ZSA+IDApIHtcblx0XHRcdFx0c2lkZXNXaXRoQXhlc1tpXSA9IHRydWU7XG5cdFx0XHRcdGF4aXMuX2VsID0gcGxhY2VEaXYoQVhJUywgd3JhcCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRlYnVnXG5cdFx0Ly9cdGF4aXMuX2VsLnN0eWxlLmJhY2tncm91bmQgPSBcIiNcIiAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTY3NzcyMTUpLnRvU3RyaW5nKDE2KSArICc4MCc7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYXV0b1BhZFNpZGUoc2VsZiwgc2lkZSwgc2lkZXNXaXRoQXhlcywgY3ljbGVOdW0pIHtcblx0XHRsZXQgW2hhc1RvcEF4aXMsIGhhc1JndEF4aXMsIGhhc0J0bUF4aXMsIGhhc0xmdEF4aXNdID0gc2lkZXNXaXRoQXhlcztcblxuXHRcdGxldCBvcmkgPSBzaWRlICUgMjtcblx0XHRsZXQgc2l6ZSA9IDA7XG5cblx0XHRpZiAob3JpID09IDAgJiYgKGhhc0xmdEF4aXMgfHwgaGFzUmd0QXhpcykpXG5cdFx0XHRzaXplID0gKHNpZGUgPT0gMCAmJiAhaGFzVG9wQXhpcyB8fCBzaWRlID09IDIgJiYgIWhhc0J0bUF4aXMgPyByb3VuZCh4QXhpc09wdHMuc2l6ZSAvIDMpIDogMCk7XG5cdFx0aWYgKG9yaSA9PSAxICYmIChoYXNUb3BBeGlzIHx8IGhhc0J0bUF4aXMpKVxuXHRcdFx0c2l6ZSA9IChzaWRlID09IDEgJiYgIWhhc1JndEF4aXMgfHwgc2lkZSA9PSAzICYmICFoYXNMZnRBeGlzID8gcm91bmQoeUF4aXNPcHRzLnNpemUgLyAyKSA6IDApO1xuXG5cdFx0cmV0dXJuIHNpemU7XG5cdH1cblxuXHRjb25zdCBwYWRkaW5nID0gc2VsZi5wYWRkaW5nID0gKG9wdHMucGFkZGluZyB8fCBbYXV0b1BhZFNpZGUsYXV0b1BhZFNpZGUsYXV0b1BhZFNpZGUsYXV0b1BhZFNpZGVdKS5tYXAocCA9PiBmbk9yU2VsZihpZk51bGwocCwgYXV0b1BhZFNpZGUpKSk7XG5cdGNvbnN0IF9wYWRkaW5nID0gc2VsZi5fcGFkZGluZyA9IHBhZGRpbmcubWFwKChwLCBpKSA9PiBwKHNlbGYsIGksIHNpZGVzV2l0aEF4ZXMsIDApKTtcblxuXHRsZXQgZGF0YUxlbjtcblxuXHQvLyByZW5kZXJlZCBkYXRhIHdpbmRvd1xuXHRsZXQgaTAgPSBudWxsO1xuXHRsZXQgaTEgPSBudWxsO1xuXHRjb25zdCBpZHhzID0gbW9kZSA9PSAxID8gc2VyaWVzWzBdLmlkeHMgOiBudWxsO1xuXG5cdGxldCBkYXRhMCA9IG51bGw7XG5cblx0bGV0IHZpYUF1dG9TY2FsZVggPSBmYWxzZTtcblxuXHRmdW5jdGlvbiBzZXREYXRhKF9kYXRhLCBfcmVzZXRTY2FsZXMpIHtcblx0XHRkYXRhID0gX2RhdGEgPT0gbnVsbCA/IFtdIDogX2RhdGE7XG5cblx0XHRzZWxmLmRhdGEgPSBzZWxmLl9kYXRhID0gZGF0YTtcblxuXHRcdGlmIChtb2RlID09IDIpIHtcblx0XHRcdGRhdGFMZW4gPSAwO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzZXJpZXMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdGRhdGFMZW4gKz0gZGF0YVtpXVswXS5sZW5ndGg7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID09IDApXG5cdFx0XHRcdHNlbGYuZGF0YSA9IHNlbGYuX2RhdGEgPSBkYXRhID0gW1tdXTtcblxuXHRcdFx0ZGF0YTAgPSBkYXRhWzBdO1xuXHRcdFx0ZGF0YUxlbiA9IGRhdGEwLmxlbmd0aDtcblxuXHRcdFx0bGV0IHNjYWxlRGF0YSA9IGRhdGE7XG5cblx0XHRcdGlmICh4U2NhbGVEaXN0ciA9PSAyKSB7XG5cdFx0XHRcdHNjYWxlRGF0YSA9IGRhdGEuc2xpY2UoKTtcblxuXHRcdFx0XHRsZXQgX2RhdGEwID0gc2NhbGVEYXRhWzBdID0gQXJyYXkoZGF0YUxlbik7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxlbjsgaSsrKVxuXHRcdFx0XHRcdF9kYXRhMFtpXSA9IGk7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYuX2RhdGEgPSBkYXRhID0gc2NhbGVEYXRhO1xuXHRcdH1cblxuXHRcdHJlc2V0WVNlcmllcyh0cnVlKTtcblxuXHRcdGZpcmUoXCJzZXREYXRhXCIpO1xuXG5cdFx0Ly8gZm9yY2VzIHggYXhpcyB0aWNrIHZhbHVlcyB0byByZS1nZW5lcmF0ZSB3aGVuIG5laXRoZXIgeCBzY2FsZSBub3IgeSBzY2FsZSBjaGFuZ2VzXG5cdFx0Ly8gaW4gb3JkaW5hbCBtb2RlLCBzY2FsZSByYW5nZSBpcyBieSBpbmRleCwgc28gd2lsbCBub3QgY2hhbmdlIGlmIG5ldyBkYXRhIGhhcyBzYW1lIGxlbmd0aCwgYnV0IHRpY2sgdmFsdWVzIGFyZSBmcm9tIGRhdGFcblx0XHRpZiAoeFNjYWxlRGlzdHIgPT0gMikge1xuXHRcdFx0c2hvdWxkQ29udmVyZ2VTaXplID0gdHJ1ZTtcblxuXHRcdFx0Lyogb3Igc29tZXdoYXQgY2hlYXBlciwgYW5kIHVnbGllcjpcblx0XHRcdGlmIChyZWFkeSkge1xuXHRcdFx0XHQvLyBsb2dpYyBleHRyYWN0ZWQgZnJvbSBheGVzQ2FsYygpXG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0bGV0IGF4aXMgPSBheGVzW2ldO1xuXHRcdFx0XHRsZXQgX3NwbGl0cyA9IGF4aXMuX3NwbGl0cy5tYXAoaSA9PiBkYXRhMFtpXSk7XG5cdFx0XHRcdGxldCBbX2luY3IsIF9zcGFjZV0gPSBheGlzLl9mb3VuZDtcblx0XHRcdFx0bGV0IGluY3IgPSBkYXRhMFtfc3BsaXRzWzFdXSAtIGRhdGEwW19zcGxpdHNbMF1dO1xuXHRcdFx0XHRheGlzLl92YWx1ZXMgPSBheGlzLnZhbHVlcyhzZWxmLCBheGlzLmZpbHRlcihzZWxmLCBfc3BsaXRzLCBpLCBfc3BhY2UsIGluY3IpLCBpLCBfc3BhY2UsIGluY3IpO1xuXHRcdFx0fVxuXHRcdFx0Ki9cblx0XHR9XG5cblx0XHRpZiAoX3Jlc2V0U2NhbGVzICE9PSBmYWxzZSkge1xuXHRcdFx0bGV0IHhzYyA9IHNjYWxlWDtcblxuXHRcdFx0aWYgKHhzYy5hdXRvKHNlbGYsIHZpYUF1dG9TY2FsZVgpKVxuXHRcdFx0XHRhdXRvU2NhbGVYKCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdF9zZXRTY2FsZSh4U2NhbGVLZXksIHhzYy5taW4sIHhzYy5tYXgpO1xuXG5cdFx0XHRzaG91bGRTZXRDdXJzb3IgPSBzaG91bGRTZXRDdXJzb3IgfHwgY3Vyc29yLmxlZnQgPj0gMDtcblx0XHRcdHNob3VsZFNldExlZ2VuZCA9IHRydWU7XG5cdFx0XHRjb21taXQoKTtcblx0XHR9XG5cdH1cblxuXHRzZWxmLnNldERhdGEgPSBzZXREYXRhO1xuXG5cdGZ1bmN0aW9uIGF1dG9TY2FsZVgoKSB7XG5cdFx0dmlhQXV0b1NjYWxlWCA9IHRydWU7XG5cblx0XHRsZXQgX21pbiwgX21heDtcblxuXHRcdGlmIChtb2RlID09IDEpIHtcblx0XHRcdGlmIChkYXRhTGVuID4gMCkge1xuXHRcdFx0XHRpMCA9IGlkeHNbMF0gPSAwO1xuXHRcdFx0XHRpMSA9IGlkeHNbMV0gPSBkYXRhTGVuIC0gMTtcblxuXHRcdFx0XHRfbWluID0gZGF0YVswXVtpMF07XG5cdFx0XHRcdF9tYXggPSBkYXRhWzBdW2kxXTtcblxuXHRcdFx0XHRpZiAoeFNjYWxlRGlzdHIgPT0gMikge1xuXHRcdFx0XHRcdF9taW4gPSBpMDtcblx0XHRcdFx0XHRfbWF4ID0gaTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoX21pbiA9PSBfbWF4KSB7XG5cdFx0XHRcdFx0aWYgKHhTY2FsZURpc3RyID09IDMpXG5cdFx0XHRcdFx0XHRbX21pbiwgX21heF0gPSByYW5nZUxvZyhfbWluLCBfbWluLCBzY2FsZVgubG9nLCBmYWxzZSk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoeFNjYWxlRGlzdHIgPT0gNClcblx0XHRcdFx0XHRcdFtfbWluLCBfbWF4XSA9IHJhbmdlQXNpbmgoX21pbiwgX21pbiwgc2NhbGVYLmxvZywgZmFsc2UpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKHNjYWxlWC50aW1lKVxuXHRcdFx0XHRcdFx0X21heCA9IF9taW4gKyByb3VuZCg4NjQwMCAvIG1zKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRbX21pbiwgX21heF0gPSByYW5nZU51bShfbWluLCBfbWF4LCByYW5nZVBhZCwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpMCA9IGlkeHNbMF0gPSBfbWluID0gbnVsbDtcblx0XHRcdFx0aTEgPSBpZHhzWzFdID0gX21heCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0X3NldFNjYWxlKHhTY2FsZUtleSwgX21pbiwgX21heCk7XG5cdH1cblxuXHRsZXQgY3R4U3Ryb2tlLCBjdHhGaWxsLCBjdHhXaWR0aCwgY3R4RGFzaCwgY3R4Sm9pbiwgY3R4Q2FwLCBjdHhGb250LCBjdHhBbGlnbiwgY3R4QmFzZWxpbmU7XG5cdGxldCBjdHhBbHBoYTtcblxuXHRmdW5jdGlvbiBzZXRDdHhTdHlsZShzdHJva2UsIHdpZHRoLCBkYXNoLCBjYXAsIGZpbGwsIGpvaW4pIHtcblx0XHRzdHJva2UgPz89IHRyYW5zcGFyZW50O1xuXHRcdGRhc2ggICA/Pz0gRU1QVFlfQVJSO1xuXHRcdGNhcCAgICA/Pz0gXCJidXR0XCI7IC8vIChcdTIwM0Z8XHUyMDNGKVxuXHRcdGZpbGwgICA/Pz0gdHJhbnNwYXJlbnQ7XG5cdFx0am9pbiAgID8/PSBcInJvdW5kXCI7XG5cblx0XHRpZiAoc3Ryb2tlICE9IGN0eFN0cm9rZSlcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IGN0eFN0cm9rZSA9IHN0cm9rZTtcblx0XHRpZiAoZmlsbCAhPSBjdHhGaWxsKVxuXHRcdFx0Y3R4LmZpbGxTdHlsZSA9IGN0eEZpbGwgPSBmaWxsO1xuXHRcdGlmICh3aWR0aCAhPSBjdHhXaWR0aClcblx0XHRcdGN0eC5saW5lV2lkdGggPSBjdHhXaWR0aCA9IHdpZHRoO1xuXHRcdGlmIChqb2luICE9IGN0eEpvaW4pXG5cdFx0XHRjdHgubGluZUpvaW4gPSBjdHhKb2luID0gam9pbjtcblx0XHRpZiAoY2FwICE9IGN0eENhcClcblx0XHRcdGN0eC5saW5lQ2FwID0gY3R4Q2FwID0gY2FwO1xuXHRcdGlmIChkYXNoICE9IGN0eERhc2gpXG5cdFx0XHRjdHguc2V0TGluZURhc2goY3R4RGFzaCA9IGRhc2gpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0Rm9udFN0eWxlKGZvbnQsIGZpbGwsIGFsaWduLCBiYXNlbGluZSkge1xuXHRcdGlmIChmaWxsICE9IGN0eEZpbGwpXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gY3R4RmlsbCA9IGZpbGw7XG5cdFx0aWYgKGZvbnQgIT0gY3R4Rm9udClcblx0XHRcdGN0eC5mb250ID0gY3R4Rm9udCA9IGZvbnQ7XG5cdFx0aWYgKGFsaWduICE9IGN0eEFsaWduKVxuXHRcdFx0Y3R4LnRleHRBbGlnbiA9IGN0eEFsaWduID0gYWxpZ247XG5cdFx0aWYgKGJhc2VsaW5lICE9IGN0eEJhc2VsaW5lKVxuXHRcdFx0Y3R4LnRleHRCYXNlbGluZSA9IGN0eEJhc2VsaW5lID0gYmFzZWxpbmU7XG5cdH1cblxuXHRmdW5jdGlvbiBhY2NTY2FsZSh3c2MsIHBzYywgZmFjZXQsIGRhdGEsIHNvcnRlZCA9IDApIHtcblx0XHRpZiAoZGF0YS5sZW5ndGggPiAwICYmIHdzYy5hdXRvKHNlbGYsIHZpYUF1dG9TY2FsZVgpICYmIChwc2MgPT0gbnVsbCB8fCBwc2MubWluID09IG51bGwpKSB7XG5cdFx0XHRsZXQgX2kwID0gaWZOdWxsKGkwLCAwKTtcblx0XHRcdGxldCBfaTEgPSBpZk51bGwoaTEsIGRhdGEubGVuZ3RoIC0gMSk7XG5cblx0XHRcdC8vIG9ubHkgcnVuIGdldE1pbk1heCgpIGZvciBpbnZhbGlkYXRlZCBzZXJpZXMgZGF0YSwgZWxzZSByZXVzZVxuXHRcdFx0bGV0IG1pbk1heCA9IGZhY2V0Lm1pbiA9PSBudWxsID8gZ2V0TWluTWF4KGRhdGEsIF9pMCwgX2kxLCBzb3J0ZWQsIHdzYy5kaXN0ciA9PSAzKSA6IFtmYWNldC5taW4sIGZhY2V0Lm1heF07XG5cblx0XHRcdC8vIGluaXRpYWwgbWluL21heFxuXHRcdFx0d3NjLm1pbiA9IG1pbih3c2MubWluLCBmYWNldC5taW4gPSBtaW5NYXhbMF0pO1xuXHRcdFx0d3NjLm1heCA9IG1heCh3c2MubWF4LCBmYWNldC5tYXggPSBtaW5NYXhbMV0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IEFVVE9TQ0FMRSA9IHttaW46IG51bGwsIG1heDogbnVsbH07XG5cblx0ZnVuY3Rpb24gc2V0U2NhbGVzKCkge1xuXHQvL1x0bG9nKFwic2V0U2NhbGVzKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdC8vIGltcGxpY2l0bHkgYWRkIGF1dG8gc2NhbGVzLCBhbmQgdW5yYW5nZWQgc2NhbGVzXG5cdFx0Zm9yIChsZXQgayBpbiBzY2FsZXMpIHtcblx0XHRcdGxldCBzYyA9IHNjYWxlc1trXTtcblxuXHRcdFx0aWYgKHBlbmRTY2FsZXNba10gPT0gbnVsbCAmJlxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0Ly8gc2NhbGVzIHRoYXQgaGF2ZSBuZXZlciBiZWVuIHNldCAob24gaW5pdClcblx0XHRcdFx0XHRzYy5taW4gPT0gbnVsbCB8fFxuXHRcdFx0XHRcdC8vIG9yIGF1dG8gc2NhbGVzIHdoZW4gdGhlIHggc2NhbGUgd2FzIGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRcdFx0cGVuZFNjYWxlc1t4U2NhbGVLZXldICE9IG51bGwgJiYgc2MuYXV0byhzZWxmLCB2aWFBdXRvU2NhbGVYKVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0cGVuZFNjYWxlc1trXSA9IEFVVE9TQ0FMRTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBpbXBsaWNpdGx5IGFkZCBkZXBlbmRlbnQgc2NhbGVzXG5cdFx0Zm9yIChsZXQgayBpbiBzY2FsZXMpIHtcblx0XHRcdGxldCBzYyA9IHNjYWxlc1trXTtcblxuXHRcdFx0aWYgKHBlbmRTY2FsZXNba10gPT0gbnVsbCAmJiBzYy5mcm9tICE9IG51bGwgJiYgcGVuZFNjYWxlc1tzYy5mcm9tXSAhPSBudWxsKVxuXHRcdFx0XHRwZW5kU2NhbGVzW2tdID0gQVVUT1NDQUxFO1xuXHRcdH1cblxuXHRcdC8vIGV4cGxpY2l0bHkgc2V0dGluZyB0aGUgeC1zY2FsZSBpbnZhbGlkYXRlcyBldmVyeXRoaW5nIChhY3RzIGFzIHJlZHJhdylcblx0XHRpZiAocGVuZFNjYWxlc1t4U2NhbGVLZXldICE9IG51bGwpXG5cdFx0XHRyZXNldFlTZXJpZXModHJ1ZSk7IC8vIFRPRE86IG9ubHkgcmVzZXQgc2VyaWVzIG9uIGF1dG8gc2NhbGVzP1xuXG5cdFx0bGV0IHdpcFNjYWxlcyA9IHt9O1xuXG5cdFx0Zm9yIChsZXQgayBpbiBwZW5kU2NhbGVzKSB7XG5cdFx0XHRsZXQgcHNjID0gcGVuZFNjYWxlc1trXTtcblxuXHRcdFx0aWYgKHBzYyAhPSBudWxsKSB7XG5cdFx0XHRcdGxldCB3c2MgPSB3aXBTY2FsZXNba10gPSBjb3B5KHNjYWxlc1trXSwgZmFzdElzT2JqKTtcblxuXHRcdFx0XHRpZiAocHNjLm1pbiAhPSBudWxsKVxuXHRcdFx0XHRcdGFzc2lnbih3c2MsIHBzYyk7XG5cdFx0XHRcdGVsc2UgaWYgKGsgIT0geFNjYWxlS2V5IHx8IG1vZGUgPT0gMikge1xuXHRcdFx0XHRcdGlmIChkYXRhTGVuID09IDAgJiYgd3NjLmZyb20gPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0bGV0IG1pbk1heCA9IHdzYy5yYW5nZShzZWxmLCBudWxsLCBudWxsLCBrKTtcblx0XHRcdFx0XHRcdHdzYy5taW4gPSBtaW5NYXhbMF07XG5cdFx0XHRcdFx0XHR3c2MubWF4ID0gbWluTWF4WzFdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHdzYy5taW4gPSBpbmY7XG5cdFx0XHRcdFx0XHR3c2MubWF4ID0gLWluZjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGF0YUxlbiA+IDApIHtcblx0XHRcdC8vIHByZS1yYW5nZSB5LXNjYWxlcyBmcm9tIHkgc2VyaWVzJyBkYXRhIHZhbHVlc1xuXHRcdFx0c2VyaWVzLmZvckVhY2goKHMsIGkpID0+IHtcblx0XHRcdFx0aWYgKG1vZGUgPT0gMSkge1xuXHRcdFx0XHRcdGxldCBrID0gcy5zY2FsZTtcblx0XHRcdFx0XHRsZXQgcHNjID0gcGVuZFNjYWxlc1trXTtcblxuXHRcdFx0XHRcdGlmIChwc2MgPT0gbnVsbClcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdGxldCB3c2MgPSB3aXBTY2FsZXNba107XG5cblx0XHRcdFx0XHRpZiAoaSA9PSAwKSB7XG5cdFx0XHRcdFx0XHRsZXQgbWluTWF4ID0gd3NjLnJhbmdlKHNlbGYsIHdzYy5taW4sIHdzYy5tYXgsIGspO1xuXG5cdFx0XHRcdFx0XHR3c2MubWluID0gbWluTWF4WzBdO1xuXHRcdFx0XHRcdFx0d3NjLm1heCA9IG1pbk1heFsxXTtcblxuXHRcdFx0XHRcdFx0aTAgPSBjbG9zZXN0SWR4KHdzYy5taW4sIGRhdGFbMF0pO1xuXHRcdFx0XHRcdFx0aTEgPSBjbG9zZXN0SWR4KHdzYy5tYXgsIGRhdGFbMF0pO1xuXG5cdFx0XHRcdFx0XHQvLyBkb24ndCB0cnkgdG8gY29udHJhY3Qgc2FtZSBvciBhZGphY2VudCBpZHhzXG5cdFx0XHRcdFx0XHRpZiAoaTEgLSBpMCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0Ly8gY2xvc2VzdCBpbmRpY2VzIGNhbiBiZSBvdXRzaWRlIG9mIHZpZXdcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGFbMF1baTBdIDwgd3NjLm1pbilcblx0XHRcdFx0XHRcdFx0XHRpMCsrO1xuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YVswXVtpMV0gPiB3c2MubWF4KVxuXHRcdFx0XHRcdFx0XHRcdGkxLS07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHMubWluID0gZGF0YTBbaTBdO1xuXHRcdFx0XHRcdFx0cy5tYXggPSBkYXRhMFtpMV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHMuc2hvdyAmJiBzLmF1dG8pXG5cdFx0XHRcdFx0XHRhY2NTY2FsZSh3c2MsIHBzYywgcywgZGF0YVtpXSwgcy5zb3J0ZWQpO1xuXG5cdFx0XHRcdFx0cy5pZHhzWzBdID0gaTA7XG5cdFx0XHRcdFx0cy5pZHhzWzFdID0gaTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAocy5zaG93ICYmIHMuYXV0bykge1xuXHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBvbmx5IGhhbmRsZXMsIGFzc3VtZXMgYW5kIHJlcXVpcmVzIGZhY2V0c1swXSAvICd4JyBzY2FsZSwgYW5kIGZhY2V0c1sxXSAvICd5JyBzY2FsZVxuXHRcdFx0XHRcdFx0XHRsZXQgWyB4RmFjZXQsIHlGYWNldCBdID0gcy5mYWNldHM7XG5cdFx0XHRcdFx0XHRcdGxldCB4U2NhbGVLZXkgPSB4RmFjZXQuc2NhbGU7XG5cdFx0XHRcdFx0XHRcdGxldCB5U2NhbGVLZXkgPSB5RmFjZXQuc2NhbGU7XG5cdFx0XHRcdFx0XHRcdGxldCBbIHhEYXRhLCB5RGF0YSBdID0gZGF0YVtpXTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgd3NjeCA9IHdpcFNjYWxlc1t4U2NhbGVLZXldO1xuXHRcdFx0XHRcdFx0XHRsZXQgd3NjeSA9IHdpcFNjYWxlc1t5U2NhbGVLZXldO1xuXG5cdFx0XHRcdFx0XHRcdC8vIG51bGwgY2FuIGhhcHBlbiB3aGVuIG9ubHkgeCBpcyB6b29tZWQsIGJ1dCB5IGhhcyBzdGF0aWMgcmFuZ2UgYW5kIGRvZXNudCBnZXQgYXV0by1hZGRlZCB0byBwZW5kaW5nXG5cdFx0XHRcdFx0XHRcdHdzY3ggIT0gbnVsbCAmJiBhY2NTY2FsZSh3c2N4LCBwZW5kU2NhbGVzW3hTY2FsZUtleV0sIHhGYWNldCwgeERhdGEsIHhGYWNldC5zb3J0ZWQpO1xuXHRcdFx0XHRcdFx0XHR3c2N5ICE9IG51bGwgJiYgYWNjU2NhbGUod3NjeSwgcGVuZFNjYWxlc1t5U2NhbGVLZXldLCB5RmFjZXQsIHlEYXRhLCB5RmFjZXQuc29ydGVkKTtcblxuXHRcdFx0XHRcdFx0XHQvLyB0ZW1wXG5cdFx0XHRcdFx0XHRcdHMubWluID0geUZhY2V0Lm1pbjtcblx0XHRcdFx0XHRcdFx0cy5tYXggPSB5RmFjZXQubWF4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHJhbmdlIGluZGVwZW5kZW50IHNjYWxlc1xuXHRcdFx0Zm9yIChsZXQgayBpbiB3aXBTY2FsZXMpIHtcblx0XHRcdFx0bGV0IHdzYyA9IHdpcFNjYWxlc1trXTtcblx0XHRcdFx0bGV0IHBzYyA9IHBlbmRTY2FsZXNba107XG5cblx0XHRcdFx0aWYgKHdzYy5mcm9tID09IG51bGwgJiYgKHBzYyA9PSBudWxsIHx8IHBzYy5taW4gPT0gbnVsbCkpIHtcblx0XHRcdFx0XHRsZXQgbWluTWF4ID0gd3NjLnJhbmdlKFxuXHRcdFx0XHRcdFx0c2VsZixcblx0XHRcdFx0XHRcdHdzYy5taW4gPT0gIGluZiA/IG51bGwgOiB3c2MubWluLFxuXHRcdFx0XHRcdFx0d3NjLm1heCA9PSAtaW5mID8gbnVsbCA6IHdzYy5tYXgsXG5cdFx0XHRcdFx0XHRrXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR3c2MubWluID0gbWluTWF4WzBdO1xuXHRcdFx0XHRcdHdzYy5tYXggPSBtaW5NYXhbMV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyByYW5nZSBkZXBlbmRlbnQgc2NhbGVzXG5cdFx0Zm9yIChsZXQgayBpbiB3aXBTY2FsZXMpIHtcblx0XHRcdGxldCB3c2MgPSB3aXBTY2FsZXNba107XG5cblx0XHRcdGlmICh3c2MuZnJvbSAhPSBudWxsKSB7XG5cdFx0XHRcdGxldCBiYXNlID0gd2lwU2NhbGVzW3dzYy5mcm9tXTtcblxuXHRcdFx0XHRpZiAoYmFzZS5taW4gPT0gbnVsbClcblx0XHRcdFx0XHR3c2MubWluID0gd3NjLm1heCA9IG51bGw7XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGxldCBtaW5NYXggPSB3c2MucmFuZ2Uoc2VsZiwgYmFzZS5taW4sIGJhc2UubWF4LCBrKTtcblx0XHRcdFx0XHR3c2MubWluID0gbWluTWF4WzBdO1xuXHRcdFx0XHRcdHdzYy5tYXggPSBtaW5NYXhbMV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgY2hhbmdlZCA9IHt9O1xuXHRcdGxldCBhbnlDaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRmb3IgKGxldCBrIGluIHdpcFNjYWxlcykge1xuXHRcdFx0bGV0IHdzYyA9IHdpcFNjYWxlc1trXTtcblx0XHRcdGxldCBzYyA9IHNjYWxlc1trXTtcblxuXHRcdFx0aWYgKHNjLm1pbiAhPSB3c2MubWluIHx8IHNjLm1heCAhPSB3c2MubWF4KSB7XG5cdFx0XHRcdHNjLm1pbiA9IHdzYy5taW47XG5cdFx0XHRcdHNjLm1heCA9IHdzYy5tYXg7XG5cblx0XHRcdFx0bGV0IGRpc3RyID0gc2MuZGlzdHI7XG5cblx0XHRcdFx0c2MuX21pbiA9IGRpc3RyID09IDMgPyBsb2cxMChzYy5taW4pIDogZGlzdHIgPT0gNCA/IGFzaW5oKHNjLm1pbiwgc2MuYXNpbmgpIDogZGlzdHIgPT0gMTAwID8gc2MuZndkKHNjLm1pbikgOiBzYy5taW47XG5cdFx0XHRcdHNjLl9tYXggPSBkaXN0ciA9PSAzID8gbG9nMTAoc2MubWF4KSA6IGRpc3RyID09IDQgPyBhc2luaChzYy5tYXgsIHNjLmFzaW5oKSA6IGRpc3RyID09IDEwMCA/IHNjLmZ3ZChzYy5tYXgpIDogc2MubWF4O1xuXG5cdFx0XHRcdGNoYW5nZWRba10gPSBhbnlDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYW55Q2hhbmdlZCkge1xuXHRcdFx0Ly8gaW52YWxpZGF0ZSBwYXRocyBvZiBhbGwgc2VyaWVzIG9uIGNoYW5nZWQgc2NhbGVzXG5cdFx0XHRzZXJpZXMuZm9yRWFjaCgocywgaSkgPT4ge1xuXHRcdFx0XHRpZiAobW9kZSA9PSAyKSB7XG5cdFx0XHRcdFx0aWYgKGkgPiAwICYmIGNoYW5nZWQueSlcblx0XHRcdFx0XHRcdHMuX3BhdGhzID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFtzLnNjYWxlXSlcblx0XHRcdFx0XHRcdHMuX3BhdGhzID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGZvciAobGV0IGsgaW4gY2hhbmdlZCkge1xuXHRcdFx0XHRzaG91bGRDb252ZXJnZVNpemUgPSB0cnVlO1xuXHRcdFx0XHRmaXJlKFwic2V0U2NhbGVcIiwgayk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzaG93Q3Vyc29yICYmIGN1cnNvci5sZWZ0ID49IDApXG5cdFx0XHRcdHNob3VsZFNldEN1cnNvciA9IHNob3VsZFNldExlZ2VuZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgayBpbiBwZW5kU2NhbGVzKVxuXHRcdFx0cGVuZFNjYWxlc1trXSA9IG51bGw7XG5cdH1cblxuXHQvLyBncmFicyB0aGUgbmVhcmVzdCBpbmRpY2VzIHdpdGggeSBkYXRhIG91dHNpZGUgb2YgeC1zY2FsZSBsaW1pdHNcblx0ZnVuY3Rpb24gZ2V0T3V0ZXJJZHhzKHlkYXRhKSB7XG5cdFx0bGV0IF9pMCA9IGNsYW1wKGkwIC0gMSwgMCwgZGF0YUxlbiAtIDEpO1xuXHRcdGxldCBfaTEgPSBjbGFtcChpMSArIDEsIDAsIGRhdGFMZW4gLSAxKTtcblxuXHRcdHdoaWxlICh5ZGF0YVtfaTBdID09IG51bGwgJiYgX2kwID4gMClcblx0XHRcdF9pMC0tO1xuXG5cdFx0d2hpbGUgKHlkYXRhW19pMV0gPT0gbnVsbCAmJiBfaTEgPCBkYXRhTGVuIC0gMSlcblx0XHRcdF9pMSsrO1xuXG5cdFx0cmV0dXJuIFtfaTAsIF9pMV07XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3U2VyaWVzKCkge1xuXHRcdGlmIChkYXRhTGVuID4gMCkge1xuXHRcdFx0bGV0IHNob3VsZEFscGhhID0gc2VyaWVzLnNvbWUocyA9PiBzLl9mb2N1cykgJiYgY3R4QWxwaGEgIT0gZm9jdXMuYWxwaGE7XG5cblx0XHRcdGlmIChzaG91bGRBbHBoYSlcblx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gY3R4QWxwaGEgPSBmb2N1cy5hbHBoYTtcblxuXHRcdFx0c2VyaWVzLmZvckVhY2goKHMsIGkpID0+IHtcblx0XHRcdFx0aWYgKGkgPiAwICYmIHMuc2hvdykge1xuXHRcdFx0XHRcdGNhY2hlU3Ryb2tlRmlsbChpLCBmYWxzZSk7XG5cdFx0XHRcdFx0Y2FjaGVTdHJva2VGaWxsKGksIHRydWUpO1xuXG5cdFx0XHRcdFx0aWYgKHMuX3BhdGhzID09IG51bGwpIHtcblx0XHRcdFx0XHRcdGxldCBfY3R4QWxwaGEgPSBjdHhBbHBoYTtcblxuXHRcdFx0XHRcdFx0aWYgKGN0eEFscGhhICE9IHMuYWxwaGEpXG5cdFx0XHRcdFx0XHRcdGN0eC5nbG9iYWxBbHBoYSA9IGN0eEFscGhhID0gcy5hbHBoYTtcblxuXHRcdFx0XHRcdFx0bGV0IF9pZHhzID0gbW9kZSA9PSAyID8gWzAsIGRhdGFbaV1bMF0ubGVuZ3RoIC0gMV0gOiBnZXRPdXRlcklkeHMoZGF0YVtpXSk7XG5cdFx0XHRcdFx0XHRzLl9wYXRocyA9IHMucGF0aHMoc2VsZiwgaSwgX2lkeHNbMF0sIF9pZHhzWzFdKTtcblxuXHRcdFx0XHRcdFx0aWYgKGN0eEFscGhhICE9IF9jdHhBbHBoYSlcblx0XHRcdFx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gY3R4QWxwaGEgPSBfY3R4QWxwaGE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VyaWVzLmZvckVhY2goKHMsIGkpID0+IHtcblx0XHRcdFx0aWYgKGkgPiAwICYmIHMuc2hvdykge1xuXHRcdFx0XHRcdGxldCBfY3R4QWxwaGEgPSBjdHhBbHBoYTtcblxuXHRcdFx0XHRcdGlmIChjdHhBbHBoYSAhPSBzLmFscGhhKVxuXHRcdFx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gY3R4QWxwaGEgPSBzLmFscGhhO1xuXG5cdFx0XHRcdFx0cy5fcGF0aHMgIT0gbnVsbCAmJiBkcmF3UGF0aChpLCBmYWxzZSk7XG5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRsZXQgX2dhcHMgPSBzLl9wYXRocyAhPSBudWxsID8gcy5fcGF0aHMuZ2FwcyA6IG51bGw7XG5cblx0XHRcdFx0XHRcdGxldCBzaG93ID0gcy5wb2ludHMuc2hvdyhzZWxmLCBpLCBpMCwgaTEsIF9nYXBzKTtcblx0XHRcdFx0XHRcdGxldCBpZHhzID0gcy5wb2ludHMuZmlsdGVyKHNlbGYsIGksIHNob3csIF9nYXBzKTtcblxuXHRcdFx0XHRcdFx0aWYgKHNob3cgfHwgaWR4cykge1xuXHRcdFx0XHRcdFx0XHRzLnBvaW50cy5fcGF0aHMgPSBzLnBvaW50cy5wYXRocyhzZWxmLCBpLCBpMCwgaTEsIGlkeHMpO1xuXHRcdFx0XHRcdFx0XHRkcmF3UGF0aChpLCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoY3R4QWxwaGEgIT0gX2N0eEFscGhhKVxuXHRcdFx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gY3R4QWxwaGEgPSBfY3R4QWxwaGE7XG5cblx0XHRcdFx0XHRmaXJlKFwiZHJhd1Nlcmllc1wiLCBpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChzaG91bGRBbHBoYSlcblx0XHRcdFx0Y3R4Lmdsb2JhbEFscGhhID0gY3R4QWxwaGEgPSAxO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNhY2hlU3Ryb2tlRmlsbChzaSwgX3BvaW50cykge1xuXHRcdGxldCBzID0gX3BvaW50cyA/IHNlcmllc1tzaV0ucG9pbnRzIDogc2VyaWVzW3NpXTtcblxuXHRcdHMuX3N0cm9rZSA9IHMuc3Ryb2tlKHNlbGYsIHNpKTtcblx0XHRzLl9maWxsICAgPSBzLmZpbGwoc2VsZiwgc2kpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd1BhdGgoc2ksIF9wb2ludHMpIHtcblx0XHRsZXQgcyA9IF9wb2ludHMgPyBzZXJpZXNbc2ldLnBvaW50cyA6IHNlcmllc1tzaV07XG5cblx0XHRsZXQge1xuXHRcdFx0c3Ryb2tlLFxuXHRcdFx0ZmlsbCxcblx0XHRcdGNsaXA6IGdhcHNDbGlwLFxuXHRcdFx0ZmxhZ3MsXG5cblx0XHRcdF9zdHJva2U6IHN0cm9rZVN0eWxlID0gcy5fc3Ryb2tlLFxuXHRcdFx0X2ZpbGw6ICAgZmlsbFN0eWxlICAgPSBzLl9maWxsLFxuXHRcdFx0X3dpZHRoOiAgd2lkdGggICAgICAgPSBzLndpZHRoLFxuXHRcdH0gPSBzLl9wYXRocztcblxuXHRcdHdpZHRoID0gcm91bmREZWMod2lkdGggKiBweFJhdGlvLCAzKTtcblxuXHRcdGxldCBib3VuZHNDbGlwID0gbnVsbDtcblx0XHRsZXQgb2Zmc2V0ID0gKHdpZHRoICUgMikgLyAyO1xuXG5cdFx0aWYgKF9wb2ludHMgJiYgZmlsbFN0eWxlID09IG51bGwpXG5cdFx0XHRmaWxsU3R5bGUgPSB3aWR0aCA+IDAgPyBcIiNmZmZcIiA6IHN0cm9rZVN0eWxlO1xuXG5cdFx0bGV0IF9weEFsaWduID0gcy5weEFsaWduID09IDEgJiYgb2Zmc2V0ID4gMDtcblxuXHRcdF9weEFsaWduICYmIGN0eC50cmFuc2xhdGUob2Zmc2V0LCBvZmZzZXQpO1xuXG5cdFx0aWYgKCFfcG9pbnRzKSB7XG5cdFx0XHRsZXQgbGZ0ID0gcGxvdExmdCAtIHdpZHRoIC8gMixcblx0XHRcdFx0dG9wID0gcGxvdFRvcCAtIHdpZHRoIC8gMixcblx0XHRcdFx0d2lkID0gcGxvdFdpZCArIHdpZHRoLFxuXHRcdFx0XHRoZ3QgPSBwbG90SGd0ICsgd2lkdGg7XG5cblx0XHRcdGJvdW5kc0NsaXAgPSBuZXcgUGF0aDJEKCk7XG5cdFx0XHRib3VuZHNDbGlwLnJlY3QobGZ0LCB0b3AsIHdpZCwgaGd0KTtcblx0XHR9XG5cblx0XHQvLyB0aGUgcG9pbnRzIHBhdGhidWlsZGVyJ3MgZ2Fwc0NsaXAgaXMgaXRzIGJvdW5kc0NsaXAsIHNpbmNlIHBvaW50cyBkb250IG5lZWQgZ2FwcyBjbGlwcGluZywgYW5kIGJvdW5kcyBkZXBlbmQgb24gcG9pbnQgc2l6ZVxuXHRcdGlmIChfcG9pbnRzKVxuXHRcdFx0c3Ryb2tlRmlsbChzdHJva2VTdHlsZSwgd2lkdGgsIHMuZGFzaCwgcy5jYXAsIGZpbGxTdHlsZSwgc3Ryb2tlLCBmaWxsLCBmbGFncywgZ2Fwc0NsaXApO1xuXHRcdGVsc2Vcblx0XHRcdGZpbGxTdHJva2Uoc2ksIHN0cm9rZVN0eWxlLCB3aWR0aCwgcy5kYXNoLCBzLmNhcCwgZmlsbFN0eWxlLCBzdHJva2UsIGZpbGwsIGZsYWdzLCBib3VuZHNDbGlwLCBnYXBzQ2xpcCk7XG5cblx0XHRfcHhBbGlnbiAmJiBjdHgudHJhbnNsYXRlKC1vZmZzZXQsIC1vZmZzZXQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZmlsbFN0cm9rZShzaSwgc3Ryb2tlU3R5bGUsIGxpbmVXaWR0aCwgbGluZURhc2gsIGxpbmVDYXAsIGZpbGxTdHlsZSwgc3Ryb2tlUGF0aCwgZmlsbFBhdGgsIGZsYWdzLCBib3VuZHNDbGlwLCBnYXBzQ2xpcCkge1xuXHRcdGxldCBkaWRTdHJva2VGaWxsID0gZmFsc2U7XG5cblx0XHQvLyBmb3IgYWxsIGJhbmRzIHdoZXJlIHRoaXMgc2VyaWVzIGlzIHRoZSB0b3AgZWRnZSwgY3JlYXRlIHVwd2FyZHMgY2xpcHMgdXNpbmcgdGhlIGJvdHRvbSBlZGdlc1xuXHRcdC8vIGFuZCBhcHBseSBjbGlwcyArIGZpbGwgd2l0aCBiYW5kIGZpbGwgb3IgZGZsdEZpbGxcblx0XHRmbGFncyAhPSAwICYmIGJhbmRzLmZvckVhY2goKGIsIGJpKSA9PiB7XG5cdFx0XHQvLyBpc1VwcGVyRWRnZT9cblx0XHRcdGlmIChiLnNlcmllc1swXSA9PSBzaSkge1xuXHRcdFx0XHRsZXQgbG93ZXJFZGdlID0gc2VyaWVzW2Iuc2VyaWVzWzFdXTtcblx0XHRcdFx0bGV0IGxvd2VyRGF0YSA9IGRhdGFbYi5zZXJpZXNbMV1dO1xuXG5cdFx0XHRcdGxldCBiYW5kQ2xpcCA9IChsb3dlckVkZ2UuX3BhdGhzIHx8IEVNUFRZX09CSikuYmFuZDtcblxuXHRcdFx0XHRpZiAoaXNBcnIoYmFuZENsaXApKVxuXHRcdFx0XHRcdGJhbmRDbGlwID0gYi5kaXIgPT0gMSA/IGJhbmRDbGlwWzBdIDogYmFuZENsaXBbMV07XG5cblx0XHRcdFx0bGV0IGdhcHNDbGlwMjtcblxuXHRcdFx0XHRsZXQgX2ZpbGxTdHlsZSA9IG51bGw7XG5cblx0XHRcdFx0Ly8gaGFzTG93ZXJFZGdlP1xuXHRcdFx0XHRpZiAobG93ZXJFZGdlLnNob3cgJiYgYmFuZENsaXAgJiYgaGFzRGF0YShsb3dlckRhdGEsIGkwLCBpMSkpIHtcblx0XHRcdFx0XHRfZmlsbFN0eWxlID0gYi5maWxsKHNlbGYsIGJpKSB8fCBmaWxsU3R5bGU7XG5cdFx0XHRcdFx0Z2Fwc0NsaXAyID0gbG93ZXJFZGdlLl9wYXRocy5jbGlwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRiYW5kQ2xpcCA9IG51bGw7XG5cblx0XHRcdFx0c3Ryb2tlRmlsbChzdHJva2VTdHlsZSwgbGluZVdpZHRoLCBsaW5lRGFzaCwgbGluZUNhcCwgX2ZpbGxTdHlsZSwgc3Ryb2tlUGF0aCwgZmlsbFBhdGgsIGZsYWdzLCBib3VuZHNDbGlwLCBnYXBzQ2xpcCwgZ2Fwc0NsaXAyLCBiYW5kQ2xpcCk7XG5cblx0XHRcdFx0ZGlkU3Ryb2tlRmlsbCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoIWRpZFN0cm9rZUZpbGwpXG5cdFx0XHRzdHJva2VGaWxsKHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIGxpbmVEYXNoLCBsaW5lQ2FwLCBmaWxsU3R5bGUsIHN0cm9rZVBhdGgsIGZpbGxQYXRoLCBmbGFncywgYm91bmRzQ2xpcCwgZ2Fwc0NsaXApO1xuXHR9XG5cblx0Y29uc3QgQ0xJUF9GSUxMX1NUUk9LRSA9IEJBTkRfQ0xJUF9GSUxMIHwgQkFORF9DTElQX1NUUk9LRTtcblxuXHRmdW5jdGlvbiBzdHJva2VGaWxsKHN0cm9rZVN0eWxlLCBsaW5lV2lkdGgsIGxpbmVEYXNoLCBsaW5lQ2FwLCBmaWxsU3R5bGUsIHN0cm9rZVBhdGgsIGZpbGxQYXRoLCBmbGFncywgYm91bmRzQ2xpcCwgZ2Fwc0NsaXAsIGdhcHNDbGlwMiwgYmFuZENsaXApIHtcblx0XHRzZXRDdHhTdHlsZShzdHJva2VTdHlsZSwgbGluZVdpZHRoLCBsaW5lRGFzaCwgbGluZUNhcCwgZmlsbFN0eWxlKTtcblxuXHRcdGlmIChib3VuZHNDbGlwIHx8IGdhcHNDbGlwIHx8IGJhbmRDbGlwKSB7XG5cdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0Ym91bmRzQ2xpcCAmJiBjdHguY2xpcChib3VuZHNDbGlwKTtcblx0XHRcdGdhcHNDbGlwICYmIGN0eC5jbGlwKGdhcHNDbGlwKTtcblx0XHR9XG5cblx0XHRpZiAoYmFuZENsaXApIHtcblx0XHRcdGlmICgoZmxhZ3MgJiBDTElQX0ZJTExfU1RST0tFKSA9PSBDTElQX0ZJTExfU1RST0tFKSB7XG5cdFx0XHRcdGN0eC5jbGlwKGJhbmRDbGlwKTtcblx0XHRcdFx0Z2Fwc0NsaXAyICYmIGN0eC5jbGlwKGdhcHNDbGlwMik7XG5cdFx0XHRcdGRvRmlsbChmaWxsU3R5bGUsIGZpbGxQYXRoKTtcblx0XHRcdFx0ZG9TdHJva2Uoc3Ryb2tlU3R5bGUsIHN0cm9rZVBhdGgsIGxpbmVXaWR0aCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChmbGFncyAmIEJBTkRfQ0xJUF9TVFJPS0UpIHtcblx0XHRcdFx0ZG9GaWxsKGZpbGxTdHlsZSwgZmlsbFBhdGgpO1xuXHRcdFx0XHRjdHguY2xpcChiYW5kQ2xpcCk7XG5cdFx0XHRcdGRvU3Ryb2tlKHN0cm9rZVN0eWxlLCBzdHJva2VQYXRoLCBsaW5lV2lkdGgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoZmxhZ3MgJiBCQU5EX0NMSVBfRklMTCkge1xuXHRcdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0XHRjdHguY2xpcChiYW5kQ2xpcCk7XG5cdFx0XHRcdGdhcHNDbGlwMiAmJiBjdHguY2xpcChnYXBzQ2xpcDIpO1xuXHRcdFx0XHRkb0ZpbGwoZmlsbFN0eWxlLCBmaWxsUGF0aCk7XG5cdFx0XHRcdGN0eC5yZXN0b3JlKCk7XG5cdFx0XHRcdGRvU3Ryb2tlKHN0cm9rZVN0eWxlLCBzdHJva2VQYXRoLCBsaW5lV2lkdGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGRvRmlsbChmaWxsU3R5bGUsIGZpbGxQYXRoKTtcblx0XHRcdGRvU3Ryb2tlKHN0cm9rZVN0eWxlLCBzdHJva2VQYXRoLCBsaW5lV2lkdGgpO1xuXHRcdH1cblxuXHRcdGlmIChib3VuZHNDbGlwIHx8IGdhcHNDbGlwIHx8IGJhbmRDbGlwKVxuXHRcdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRvU3Ryb2tlKHN0cm9rZVN0eWxlLCBzdHJva2VQYXRoLCBsaW5lV2lkdGgpIHtcblx0XHRpZiAobGluZVdpZHRoID4gMCkge1xuXHRcdFx0aWYgKHN0cm9rZVBhdGggaW5zdGFuY2VvZiBNYXApIHtcblx0XHRcdFx0c3Ryb2tlUGF0aC5mb3JFYWNoKChzdHJva2VQYXRoLCBzdHJva2VTdHlsZSkgPT4ge1xuXHRcdFx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IGN0eFN0cm9rZSA9IHN0cm9rZVN0eWxlO1xuXHRcdFx0XHRcdGN0eC5zdHJva2Uoc3Ryb2tlUGF0aCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzdHJva2VQYXRoICE9IG51bGwgJiYgc3Ryb2tlU3R5bGUgJiYgY3R4LnN0cm9rZShzdHJva2VQYXRoKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBkb0ZpbGwoZmlsbFN0eWxlLCBmaWxsUGF0aCkge1xuXHRcdGlmIChmaWxsUGF0aCBpbnN0YW5jZW9mIE1hcCkge1xuXHRcdFx0ZmlsbFBhdGguZm9yRWFjaCgoZmlsbFBhdGgsIGZpbGxTdHlsZSkgPT4ge1xuXHRcdFx0XHRjdHguZmlsbFN0eWxlID0gY3R4RmlsbCA9IGZpbGxTdHlsZTtcblx0XHRcdFx0Y3R4LmZpbGwoZmlsbFBhdGgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdGZpbGxQYXRoICE9IG51bGwgJiYgZmlsbFN0eWxlICYmIGN0eC5maWxsKGZpbGxQYXRoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEluY3JTcGFjZShheGlzSWR4LCBtaW4sIG1heCwgZnVsbERpbSkge1xuXHRcdGxldCBheGlzID0gYXhlc1theGlzSWR4XTtcblxuXHRcdGxldCBpbmNyU3BhY2U7XG5cblx0XHRpZiAoZnVsbERpbSA8PSAwKVxuXHRcdFx0aW5jclNwYWNlID0gWzAsIDBdO1xuXHRcdGVsc2Uge1xuXHRcdFx0bGV0IG1pblNwYWNlID0gYXhpcy5fc3BhY2UgPSBheGlzLnNwYWNlKHNlbGYsIGF4aXNJZHgsIG1pbiwgbWF4LCBmdWxsRGltKTtcblx0XHRcdGxldCBpbmNycyAgICA9IGF4aXMuX2luY3JzID0gYXhpcy5pbmNycyhzZWxmLCBheGlzSWR4LCBtaW4sIG1heCwgZnVsbERpbSwgbWluU3BhY2UpO1xuXHRcdFx0aW5jclNwYWNlICAgID0gZmluZEluY3IobWluLCBtYXgsIGluY3JzLCBmdWxsRGltLCBtaW5TcGFjZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChheGlzLl9mb3VuZCA9IGluY3JTcGFjZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBkcmF3T3J0aG9MaW5lcyhvZmZzLCBmaWx0cywgb3JpLCBzaWRlLCBwb3MwLCBsZW4sIHdpZHRoLCBzdHJva2UsIGRhc2gsIGNhcCkge1xuXHRcdGxldCBvZmZzZXQgPSAod2lkdGggJSAyKSAvIDI7XG5cblx0XHRweEFsaWduID09IDEgJiYgY3R4LnRyYW5zbGF0ZShvZmZzZXQsIG9mZnNldCk7XG5cblx0XHRzZXRDdHhTdHlsZShzdHJva2UsIHdpZHRoLCBkYXNoLCBjYXAsIHN0cm9rZSk7XG5cblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cblx0XHRsZXQgeDAsIHkwLCB4MSwgeTEsIHBvczEgPSBwb3MwICsgKHNpZGUgPT0gMCB8fCBzaWRlID09IDMgPyAtbGVuIDogbGVuKTtcblxuXHRcdGlmIChvcmkgPT0gMCkge1xuXHRcdFx0eTAgPSBwb3MwO1xuXHRcdFx0eTEgPSBwb3MxO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHgwID0gcG9zMDtcblx0XHRcdHgxID0gcG9zMTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG9mZnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChmaWx0c1tpXSAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChvcmkgPT0gMClcblx0XHRcdFx0XHR4MCA9IHgxID0gb2Zmc1tpXTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHkwID0geTEgPSBvZmZzW2ldO1xuXG5cdFx0XHRcdGN0eC5tb3ZlVG8oeDAsIHkwKTtcblx0XHRcdFx0Y3R4LmxpbmVUbyh4MSwgeTEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGN0eC5zdHJva2UoKTtcblxuXHRcdHB4QWxpZ24gPT0gMSAmJiBjdHgudHJhbnNsYXRlKC1vZmZzZXQsIC1vZmZzZXQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXhlc0NhbGMoY3ljbGVOdW0pIHtcblx0Ly9cdGxvZyhcImF4ZXNDYWxjKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdGxldCBjb252ZXJnZWQgPSB0cnVlO1xuXG5cdFx0YXhlcy5mb3JFYWNoKChheGlzLCBpKSA9PiB7XG5cdFx0XHRpZiAoIWF4aXMuc2hvdylcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRsZXQgc2NhbGUgPSBzY2FsZXNbYXhpcy5zY2FsZV07XG5cblx0XHRcdGlmIChzY2FsZS5taW4gPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoYXhpcy5fc2hvdykge1xuXHRcdFx0XHRcdGNvbnZlcmdlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdGF4aXMuX3Nob3cgPSBmYWxzZTtcblx0XHRcdFx0XHRyZXNldFlTZXJpZXMoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAoIWF4aXMuX3Nob3cpIHtcblx0XHRcdFx0XHRjb252ZXJnZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRheGlzLl9zaG93ID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXNldFlTZXJpZXMoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzaWRlID0gYXhpcy5zaWRlO1xuXHRcdFx0bGV0IG9yaSA9IHNpZGUgJSAyO1xuXG5cdFx0XHRsZXQge21pbiwgbWF4fSA9IHNjYWxlO1x0XHQvLyBcdFx0Ly8gc2hvdWxkIHRoaXMgdG9nZ2xlIHRoZW0gLl9zaG93ID0gZmFsc2VcblxuXHRcdFx0bGV0IFtfaW5jciwgX3NwYWNlXSA9IGdldEluY3JTcGFjZShpLCBtaW4sIG1heCwgb3JpID09IDAgPyBwbG90V2lkQ3NzIDogcGxvdEhndENzcyk7XG5cblx0XHRcdGlmIChfc3BhY2UgPT0gMClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHQvLyBpZiB3ZSdyZSB1c2luZyBpbmRleCBwb3NpdGlvbnMsIGZvcmNlIGZpcnN0IHRpY2sgdG8gbWF0Y2ggcGFzc2VkIGluZGV4XG5cdFx0XHRsZXQgZm9yY2VNaW4gPSBzY2FsZS5kaXN0ciA9PSAyO1xuXG5cdFx0XHRsZXQgX3NwbGl0cyA9IGF4aXMuX3NwbGl0cyA9IGF4aXMuc3BsaXRzKHNlbGYsIGksIG1pbiwgbWF4LCBfaW5jciwgX3NwYWNlLCBmb3JjZU1pbik7XG5cblx0XHRcdC8vIHRpY2sgbGFiZWxzXG5cdFx0XHQvLyBCT08gdGhpcyBhc3N1bWVzIGEgc3BlY2lmaWMgZGF0YS9zZXJpZXNcblx0XHRcdGxldCBzcGxpdHMgPSBzY2FsZS5kaXN0ciA9PSAyID8gX3NwbGl0cy5tYXAoaSA9PiBkYXRhMFtpXSkgOiBfc3BsaXRzO1xuXHRcdFx0bGV0IGluY3IgICA9IHNjYWxlLmRpc3RyID09IDIgPyBkYXRhMFtfc3BsaXRzWzFdXSAtIGRhdGEwW19zcGxpdHNbMF1dIDogX2luY3I7XG5cblx0XHRcdGxldCB2YWx1ZXMgPSBheGlzLl92YWx1ZXMgPSBheGlzLnZhbHVlcyhzZWxmLCBheGlzLmZpbHRlcihzZWxmLCBzcGxpdHMsIGksIF9zcGFjZSwgaW5jciksIGksIF9zcGFjZSwgaW5jcik7XG5cblx0XHRcdC8vIHJvdGF0aW5nIG9mIGxhYmVscyBvbmx5IHN1cHBvcnRlZCBvbiBib3R0b20geCBheGlzXG5cdFx0XHRheGlzLl9yb3RhdGUgPSBzaWRlID09IDIgPyBheGlzLnJvdGF0ZShzZWxmLCB2YWx1ZXMsIGksIF9zcGFjZSkgOiAwO1xuXG5cdFx0XHRsZXQgb2xkU2l6ZSA9IGF4aXMuX3NpemU7XG5cblx0XHRcdGF4aXMuX3NpemUgPSBjZWlsKGF4aXMuc2l6ZShzZWxmLCB2YWx1ZXMsIGksIGN5Y2xlTnVtKSk7XG5cblx0XHRcdGlmIChvbGRTaXplICE9IG51bGwgJiYgYXhpcy5fc2l6ZSAhPSBvbGRTaXplKVx0XHRcdC8vIHJlYWR5ICYmID9cblx0XHRcdFx0Y29udmVyZ2VkID0gZmFsc2U7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29udmVyZ2VkO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFkZGluZ0NhbGMoY3ljbGVOdW0pIHtcblx0XHRsZXQgY29udmVyZ2VkID0gdHJ1ZTtcblxuXHRcdHBhZGRpbmcuZm9yRWFjaCgocCwgaSkgPT4ge1xuXHRcdFx0bGV0IF9wID0gcChzZWxmLCBpLCBzaWRlc1dpdGhBeGVzLCBjeWNsZU51bSk7XG5cblx0XHRcdGlmIChfcCAhPSBfcGFkZGluZ1tpXSlcblx0XHRcdFx0Y29udmVyZ2VkID0gZmFsc2U7XG5cblx0XHRcdF9wYWRkaW5nW2ldID0gX3A7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29udmVyZ2VkO1xuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0F4ZXNHcmlkKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGF4aXMgPSBheGVzW2ldO1xuXG5cdFx0XHRpZiAoIWF4aXMuc2hvdyB8fCAhYXhpcy5fc2hvdylcblx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdGxldCBzaWRlID0gYXhpcy5zaWRlO1xuXHRcdFx0bGV0IG9yaSA9IHNpZGUgJSAyO1xuXG5cdFx0XHRsZXQgeCwgeTtcblxuXHRcdFx0bGV0IGZpbGxTdHlsZSA9IGF4aXMuc3Ryb2tlKHNlbGYsIGkpO1xuXG5cdFx0XHRsZXQgc2hpZnREaXIgPSBzaWRlID09IDAgfHwgc2lkZSA9PSAzID8gLTEgOiAxO1xuXG5cdFx0XHRsZXQgW19pbmNyLCBfc3BhY2VdID0gYXhpcy5fZm91bmQ7XG5cblx0XHRcdC8vIGF4aXMgbGFiZWxcblx0XHRcdGlmIChheGlzLmxhYmVsICE9IG51bGwpIHtcblx0XHRcdFx0bGV0IHNoaWZ0QW10ID0gYXhpcy5sYWJlbEdhcCAqIHNoaWZ0RGlyO1xuXHRcdFx0XHRsZXQgYmFzZUxwb3MgPSByb3VuZCgoYXhpcy5fbHBvcyArIHNoaWZ0QW10KSAqIHB4UmF0aW8pO1xuXG5cdFx0XHRcdHNldEZvbnRTdHlsZShheGlzLmxhYmVsRm9udFswXSwgZmlsbFN0eWxlLCBcImNlbnRlclwiLCBzaWRlID09IDIgPyBUT1AgOiBCT1RUT00pO1xuXG5cdFx0XHRcdGN0eC5zYXZlKCk7XG5cblx0XHRcdFx0aWYgKG9yaSA9PSAxKSB7XG5cdFx0XHRcdFx0eCA9IHkgPSAwO1xuXG5cdFx0XHRcdFx0Y3R4LnRyYW5zbGF0ZShcblx0XHRcdFx0XHRcdGJhc2VMcG9zLFxuXHRcdFx0XHRcdFx0cm91bmQocGxvdFRvcCArIHBsb3RIZ3QgLyAyKSxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGN0eC5yb3RhdGUoKHNpZGUgPT0gMyA/IC1QSSA6IFBJKSAvIDIpO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0eCA9IHJvdW5kKHBsb3RMZnQgKyBwbG90V2lkIC8gMik7XG5cdFx0XHRcdFx0eSA9IGJhc2VMcG9zO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IF9sYWJlbCA9IGlzRm4oYXhpcy5sYWJlbCkgPyBheGlzLmxhYmVsKHNlbGYsIGksIF9pbmNyLCBfc3BhY2UpIDogYXhpcy5sYWJlbDtcblxuXHRcdFx0XHRjdHguZmlsbFRleHQoX2xhYmVsLCB4LCB5KTtcblxuXHRcdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX3NwYWNlID09IDApXG5cdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRsZXQgc2NhbGUgPSBzY2FsZXNbYXhpcy5zY2FsZV07XG5cblx0XHRcdGxldCBwbG90RGltID0gb3JpID09IDAgPyBwbG90V2lkIDogcGxvdEhndDtcblx0XHRcdGxldCBwbG90T2ZmID0gb3JpID09IDAgPyBwbG90TGZ0IDogcGxvdFRvcDtcblxuXHRcdFx0bGV0IF9zcGxpdHMgPSBheGlzLl9zcGxpdHM7XG5cblx0XHRcdC8vIHRpY2sgbGFiZWxzXG5cdFx0XHQvLyBCT08gdGhpcyBhc3N1bWVzIGEgc3BlY2lmaWMgZGF0YS9zZXJpZXNcblx0XHRcdGxldCBzcGxpdHMgPSBzY2FsZS5kaXN0ciA9PSAyID8gX3NwbGl0cy5tYXAoaSA9PiBkYXRhMFtpXSkgOiBfc3BsaXRzO1xuXHRcdFx0bGV0IGluY3IgICA9IHNjYWxlLmRpc3RyID09IDIgPyBkYXRhMFtfc3BsaXRzWzFdXSAtIGRhdGEwW19zcGxpdHNbMF1dIDogX2luY3I7XG5cblx0XHRcdGxldCB0aWNrcyA9IGF4aXMudGlja3M7XG5cdFx0XHRsZXQgYm9yZGVyID0gYXhpcy5ib3JkZXI7XG5cdFx0XHRsZXQgX3RpY2tTaXplID0gdGlja3Muc2hvdyA/IHRpY2tzLnNpemUgOiAwO1xuXHRcdFx0bGV0IHRpY2tTaXplID0gcm91bmQoX3RpY2tTaXplICogcHhSYXRpbyk7XG5cdFx0XHRsZXQgYXhpc0dhcCA9IHJvdW5kKChheGlzLmFsaWduVG8gPT0gMiA/IGF4aXMuX3NpemUgLSBfdGlja1NpemUgLSBheGlzLmdhcCA6IGF4aXMuZ2FwKSAqIHB4UmF0aW8pO1xuXG5cdFx0XHQvLyByb3RhdGluZyBvZiBsYWJlbHMgb25seSBzdXBwb3J0ZWQgb24gYm90dG9tIHggYXhpc1xuXHRcdFx0bGV0IGFuZ2xlID0gYXhpcy5fcm90YXRlICogLVBJLzE4MDtcblxuXHRcdFx0bGV0IGJhc2VQb3MgID0gcHhSb3VuZChheGlzLl9wb3MgKiBweFJhdGlvKTtcblx0XHRcdGxldCBzaGlmdEFtdCA9ICh0aWNrU2l6ZSArIGF4aXNHYXApICogc2hpZnREaXI7XG5cdFx0XHRsZXQgZmluYWxQb3MgPSBiYXNlUG9zICsgc2hpZnRBbXQ7XG5cdFx0XHQgICAgeSAgICAgICAgPSBvcmkgPT0gMCA/IGZpbmFsUG9zIDogMDtcblx0XHRcdCAgICB4ICAgICAgICA9IG9yaSA9PSAxID8gZmluYWxQb3MgOiAwO1xuXG5cdFx0XHRsZXQgZm9udCAgICAgICAgID0gYXhpcy5mb250WzBdO1xuXHRcdFx0bGV0IHRleHRBbGlnbiAgICA9IGF4aXMuYWxpZ24gPT0gMSA/IExFRlQgOlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgIGF4aXMuYWxpZ24gPT0gMiA/IFJJR0hUIDpcblx0XHRcdCAgICAgICAgICAgICAgICAgICBhbmdsZSA+IDAgPyBMRUZUIDpcblx0XHRcdCAgICAgICAgICAgICAgICAgICBhbmdsZSA8IDAgPyBSSUdIVCA6XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgb3JpID09IDAgPyBcImNlbnRlclwiIDogc2lkZSA9PSAzID8gUklHSFQgOiBMRUZUO1xuXHRcdFx0bGV0IHRleHRCYXNlbGluZSA9IGFuZ2xlIHx8XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgb3JpID09IDEgPyBcIm1pZGRsZVwiIDogc2lkZSA9PSAyID8gVE9QICAgOiBCT1RUT007XG5cblx0XHRcdHNldEZvbnRTdHlsZShmb250LCBmaWxsU3R5bGUsIHRleHRBbGlnbiwgdGV4dEJhc2VsaW5lKTtcblxuXHRcdFx0bGV0IGxpbmVIZWlnaHQgPSBheGlzLmZvbnRbMV0gKiBheGlzLmxpbmVHYXA7XG5cblx0XHRcdGxldCBjYW5PZmZzID0gX3NwbGl0cy5tYXAodmFsID0+IHB4Um91bmQoZ2V0UG9zKHZhbCwgc2NhbGUsIHBsb3REaW0sIHBsb3RPZmYpKSk7XG5cblx0XHRcdGxldCBfdmFsdWVzID0gYXhpcy5fdmFsdWVzO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IF92YWx1ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHZhbCA9IF92YWx1ZXNbaV07XG5cblx0XHRcdFx0aWYgKHZhbCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKG9yaSA9PSAwKVxuXHRcdFx0XHRcdFx0eCA9IGNhbk9mZnNbaV07XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0eSA9IGNhbk9mZnNbaV07XG5cblx0XHRcdFx0XHR2YWwgPSBcIlwiICsgdmFsO1xuXG5cdFx0XHRcdFx0bGV0IF9wYXJ0cyA9IHZhbC5pbmRleE9mKFwiXFxuXCIpID09IC0xID8gW3ZhbF0gOiB2YWwuc3BsaXQoL1xcbi9nbSk7XG5cblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IF9wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0bGV0IHRleHQgPSBfcGFydHNbal07XG5cblx0XHRcdFx0XHRcdGlmIChhbmdsZSkge1xuXHRcdFx0XHRcdFx0XHRjdHguc2F2ZSgpO1xuXHRcdFx0XHRcdFx0XHRjdHgudHJhbnNsYXRlKHgsIHkgKyBqICogbGluZUhlaWdodCk7IC8vIGNhbiB0aGlzIGJlIHJlcGxhY2VkIHdpdGggcG9zaXRpb24gbWF0aD9cblx0XHRcdFx0XHRcdFx0Y3R4LnJvdGF0ZShhbmdsZSk7IC8vIGNhbiB0aGlzIGJlIGRvbmUgb25jZT9cblx0XHRcdFx0XHRcdFx0Y3R4LmZpbGxUZXh0KHRleHQsIDAsIDApO1xuXHRcdFx0XHRcdFx0XHRjdHgucmVzdG9yZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRjdHguZmlsbFRleHQodGV4dCwgeCwgeSArIGogKiBsaW5lSGVpZ2h0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gdGlja3Ncblx0XHRcdGlmICh0aWNrcy5zaG93KSB7XG5cdFx0XHRcdGRyYXdPcnRob0xpbmVzKFxuXHRcdFx0XHRcdGNhbk9mZnMsXG5cdFx0XHRcdFx0dGlja3MuZmlsdGVyKHNlbGYsIHNwbGl0cywgaSwgX3NwYWNlLCBpbmNyKSxcblx0XHRcdFx0XHRvcmksXG5cdFx0XHRcdFx0c2lkZSxcblx0XHRcdFx0XHRiYXNlUG9zLFxuXHRcdFx0XHRcdHRpY2tTaXplLFxuXHRcdFx0XHRcdHJvdW5kRGVjKHRpY2tzLndpZHRoICogcHhSYXRpbywgMyksXG5cdFx0XHRcdFx0dGlja3Muc3Ryb2tlKHNlbGYsIGkpLFxuXHRcdFx0XHRcdHRpY2tzLmRhc2gsXG5cdFx0XHRcdFx0dGlja3MuY2FwLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBncmlkXG5cdFx0XHRsZXQgZ3JpZCA9IGF4aXMuZ3JpZDtcblxuXHRcdFx0aWYgKGdyaWQuc2hvdykge1xuXHRcdFx0XHRkcmF3T3J0aG9MaW5lcyhcblx0XHRcdFx0XHRjYW5PZmZzLFxuXHRcdFx0XHRcdGdyaWQuZmlsdGVyKHNlbGYsIHNwbGl0cywgaSwgX3NwYWNlLCBpbmNyKSxcblx0XHRcdFx0XHRvcmksXG5cdFx0XHRcdFx0b3JpID09IDAgPyAyIDogMSxcblx0XHRcdFx0XHRvcmkgPT0gMCA/IHBsb3RUb3AgOiBwbG90TGZ0LFxuXHRcdFx0XHRcdG9yaSA9PSAwID8gcGxvdEhndCA6IHBsb3RXaWQsXG5cdFx0XHRcdFx0cm91bmREZWMoZ3JpZC53aWR0aCAqIHB4UmF0aW8sIDMpLFxuXHRcdFx0XHRcdGdyaWQuc3Ryb2tlKHNlbGYsIGkpLFxuXHRcdFx0XHRcdGdyaWQuZGFzaCxcblx0XHRcdFx0XHRncmlkLmNhcCxcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGJvcmRlci5zaG93KSB7XG5cdFx0XHRcdGRyYXdPcnRob0xpbmVzKFxuXHRcdFx0XHRcdFtiYXNlUG9zXSxcblx0XHRcdFx0XHRbMV0sXG5cdFx0XHRcdFx0b3JpID09IDAgPyAxIDogMCxcblx0XHRcdFx0XHRvcmkgPT0gMCA/IDEgOiAyLFxuXHRcdFx0XHRcdG9yaSA9PSAxID8gcGxvdFRvcCA6IHBsb3RMZnQsXG5cdFx0XHRcdFx0b3JpID09IDEgPyBwbG90SGd0IDogcGxvdFdpZCxcblx0XHRcdFx0XHRyb3VuZERlYyhib3JkZXIud2lkdGggKiBweFJhdGlvLCAzKSxcblx0XHRcdFx0XHRib3JkZXIuc3Ryb2tlKHNlbGYsIGkpLFxuXHRcdFx0XHRcdGJvcmRlci5kYXNoLFxuXHRcdFx0XHRcdGJvcmRlci5jYXAsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZmlyZShcImRyYXdBeGVzXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVzZXRZU2VyaWVzKG1pbk1heCkge1xuXHQvL1x0bG9nKFwicmVzZXRZU2VyaWVzKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdHNlcmllcy5mb3JFYWNoKChzLCBpKSA9PiB7XG5cdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0cy5fcGF0aHMgPSBudWxsO1xuXG5cdFx0XHRcdGlmIChtaW5NYXgpIHtcblx0XHRcdFx0XHRpZiAobW9kZSA9PSAxKSB7XG5cdFx0XHRcdFx0XHRzLm1pbiA9IG51bGw7XG5cdFx0XHRcdFx0XHRzLm1heCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0cy5mYWNldHMuZm9yRWFjaChmID0+IHtcblx0XHRcdFx0XHRcdFx0Zi5taW4gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRmLm1heCA9IG51bGw7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGxldCBxdWV1ZWRDb21taXQgPSBmYWxzZTtcblx0bGV0IGRlZmVySG9va3MgPSBmYWxzZTtcblx0bGV0IGhvb2tzUXVldWUgPSBbXTtcblxuXHRmdW5jdGlvbiBmbHVzaEhvb2tzKCkge1xuXHRcdGRlZmVySG9va3MgPSBmYWxzZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgaG9va3NRdWV1ZS5sZW5ndGg7IGkrKylcblx0XHRcdGZpcmUoLi4uaG9va3NRdWV1ZVtpXSk7XG5cblx0XHRob29rc1F1ZXVlLmxlbmd0aCA9IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjb21taXQoKSB7XG5cdFx0aWYgKCFxdWV1ZWRDb21taXQpIHtcblx0XHRcdG1pY3JvVGFzayhfY29tbWl0KTtcblx0XHRcdHF1ZXVlZENvbW1pdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Ly8gbWFudWFsIGJhdGNoaW5nIChha2EgaW1tZWRpYXRlIG1vZGUpLCBza2lwcyBtaWNyb3Rhc2sgcXVldWVcblx0ZnVuY3Rpb24gYmF0Y2goZm4sIF9kZWZlckhvb2tzID0gZmFsc2UpIHtcblx0XHRxdWV1ZWRDb21taXQgPSB0cnVlO1xuXHRcdGRlZmVySG9va3MgPSBfZGVmZXJIb29rcztcblxuXHRcdGZuKHNlbGYpO1xuXHRcdF9jb21taXQoKTtcblxuXHRcdGlmIChfZGVmZXJIb29rcyAmJiBob29rc1F1ZXVlLmxlbmd0aCA+IDApXG5cdFx0XHRxdWV1ZU1pY3JvdGFzayhmbHVzaEhvb2tzKTtcblx0fVxuXG5cdHNlbGYuYmF0Y2ggPSBiYXRjaDtcblxuXHRmdW5jdGlvbiBfY29tbWl0KCkge1xuXHQvL1x0bG9nKFwiX2NvbW1pdCgpXCIsIGFyZ3VtZW50cyk7XG5cblx0XHRpZiAoc2hvdWxkU2V0U2NhbGVzKSB7XG5cdFx0XHRzZXRTY2FsZXMoKTtcblx0XHRcdHNob3VsZFNldFNjYWxlcyA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChzaG91bGRDb252ZXJnZVNpemUpIHtcblx0XHRcdGNvbnZlcmdlU2l6ZSgpO1xuXHRcdFx0c2hvdWxkQ29udmVyZ2VTaXplID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3VsZFNldFNpemUpIHtcblx0XHRcdHNldFN0eWxlUHgodW5kZXIsIExFRlQsICAgcGxvdExmdENzcyk7XG5cdFx0XHRzZXRTdHlsZVB4KHVuZGVyLCBUT1AsICAgIHBsb3RUb3BDc3MpO1xuXHRcdFx0c2V0U3R5bGVQeCh1bmRlciwgV0lEVEgsICBwbG90V2lkQ3NzKTtcblx0XHRcdHNldFN0eWxlUHgodW5kZXIsIEhFSUdIVCwgcGxvdEhndENzcyk7XG5cblx0XHRcdHNldFN0eWxlUHgob3ZlciwgTEVGVCwgICAgcGxvdExmdENzcyk7XG5cdFx0XHRzZXRTdHlsZVB4KG92ZXIsIFRPUCwgICAgIHBsb3RUb3BDc3MpO1xuXHRcdFx0c2V0U3R5bGVQeChvdmVyLCBXSURUSCwgICBwbG90V2lkQ3NzKTtcblx0XHRcdHNldFN0eWxlUHgob3ZlciwgSEVJR0hULCAgcGxvdEhndENzcyk7XG5cblx0XHRcdHNldFN0eWxlUHgod3JhcCwgV0lEVEgsICAgZnVsbFdpZENzcyk7XG5cdFx0XHRzZXRTdHlsZVB4KHdyYXAsIEhFSUdIVCwgIGZ1bGxIZ3RDc3MpO1xuXG5cdFx0XHQvLyBOT1RFOiBtdXRhdGluZyB0aGlzIGR1cmluZyBwcmludCBwcmV2aWV3IGluIENocm9tZSBmb3JjZXMgdHJhbnNwYXJlbnRcblx0XHRcdC8vIGNhbnZhcyBwaXhlbHMgdG8gd2hpdGUsIGV2ZW4gd2hlbiBmb2xsb3dlZCB1cCB3aXRoIGNsZWFyUmVjdCgpIGJlbG93XG5cdFx0XHRjYW4ud2lkdGggID0gcm91bmQoZnVsbFdpZENzcyAqIHB4UmF0aW8pO1xuXHRcdFx0Y2FuLmhlaWdodCA9IHJvdW5kKGZ1bGxIZ3RDc3MgKiBweFJhdGlvKTtcblxuXHRcdFx0YXhlcy5mb3JFYWNoKCh7IF9lbCwgX3Nob3csIF9zaXplLCBfcG9zLCBzaWRlIH0pID0+IHtcblx0XHRcdFx0aWYgKF9lbCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKF9zaG93KSB7XG5cdFx0XHRcdFx0XHRsZXQgcG9zT2Zmc2V0ID0gKHNpZGUgPT09IDMgfHwgc2lkZSA9PT0gMCA/IF9zaXplIDogMCk7XG5cdFx0XHRcdFx0XHRsZXQgaXNWdCA9IHNpZGUgJSAyID09IDE7XG5cblx0XHRcdFx0XHRcdHNldFN0eWxlUHgoX2VsLCBpc1Z0ID8gXCJsZWZ0XCIgICA6IFwidG9wXCIsICAgIF9wb3MgLSBwb3NPZmZzZXQpO1xuXHRcdFx0XHRcdFx0c2V0U3R5bGVQeChfZWwsIGlzVnQgPyBcIndpZHRoXCIgIDogXCJoZWlnaHRcIiwgX3NpemUpO1xuXHRcdFx0XHRcdFx0c2V0U3R5bGVQeChfZWwsIGlzVnQgPyBcInRvcFwiICAgIDogXCJsZWZ0XCIsICAgaXNWdCA/IHBsb3RUb3BDc3MgOiBwbG90TGZ0Q3NzKTtcblx0XHRcdFx0XHRcdHNldFN0eWxlUHgoX2VsLCBpc1Z0ID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIiwgIGlzVnQgPyBwbG90SGd0Q3NzIDogcGxvdFdpZENzcyk7XG5cblx0XHRcdFx0XHRcdHJlbUNsYXNzKF9lbCwgT0ZGKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoX2VsLCBPRkYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gaW52YWxpZGF0ZSBjdHggc3R5bGUgY2FjaGVcblx0XHRcdGN0eFN0cm9rZSA9IGN0eEZpbGwgPSBjdHhXaWR0aCA9IGN0eEpvaW4gPSBjdHhDYXAgPSBjdHhGb250ID0gY3R4QWxpZ24gPSBjdHhCYXNlbGluZSA9IGN0eERhc2ggPSBudWxsO1xuXHRcdFx0Y3R4QWxwaGEgPSAxO1xuXG5cdFx0XHRzeW5jUmVjdCh0cnVlKTtcblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRwbG90TGZ0Q3NzICE9IF9wbG90TGZ0Q3NzIHx8XG5cdFx0XHRcdHBsb3RUb3BDc3MgIT0gX3Bsb3RUb3BDc3MgfHxcblx0XHRcdFx0cGxvdFdpZENzcyAhPSBfcGxvdFdpZENzcyB8fFxuXHRcdFx0XHRwbG90SGd0Q3NzICE9IF9wbG90SGd0Q3NzXG5cdFx0XHQpIHtcblx0XHRcdFx0cmVzZXRZU2VyaWVzKGZhbHNlKTtcblxuXHRcdFx0XHRsZXQgcGN0V2lkID0gcGxvdFdpZENzcyAvIF9wbG90V2lkQ3NzO1xuXHRcdFx0XHRsZXQgcGN0SGd0ID0gcGxvdEhndENzcyAvIF9wbG90SGd0Q3NzO1xuXG5cdFx0XHRcdGlmIChzaG93Q3Vyc29yICYmICFzaG91bGRTZXRDdXJzb3IgJiYgY3Vyc29yLmxlZnQgPj0gMCkge1xuXHRcdFx0XHRcdGN1cnNvci5sZWZ0ICo9IHBjdFdpZDtcblx0XHRcdFx0XHRjdXJzb3IudG9wICAqPSBwY3RIZ3Q7XG5cblx0XHRcdFx0XHR2Q3Vyc29yICYmIGVsVHJhbnModkN1cnNvciwgcm91bmQoY3Vyc29yLmxlZnQpLCAwLCBwbG90V2lkQ3NzLCBwbG90SGd0Q3NzKTtcblx0XHRcdFx0XHRoQ3Vyc29yICYmIGVsVHJhbnMoaEN1cnNvciwgMCwgcm91bmQoY3Vyc29yLnRvcCksIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MpO1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJzb3JQdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGxldCBwdCA9IGN1cnNvclB0c1tpXTtcblxuXHRcdFx0XHRcdFx0aWYgKHB0ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yUHRzTGZ0W2ldICo9IHBjdFdpZDtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yUHRzVG9wW2ldICo9IHBjdEhndDtcblx0XHRcdFx0XHRcdFx0ZWxUcmFucyhwdCwgY2VpbChjdXJzb3JQdHNMZnRbaV0pLCBjZWlsKGN1cnNvclB0c1RvcFtpXSksIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzZWxlY3Quc2hvdyAmJiAhc2hvdWxkU2V0U2VsZWN0ICYmIHNlbGVjdC5sZWZ0ID49IDAgJiYgc2VsZWN0LndpZHRoID4gMCkge1xuXHRcdFx0XHRcdHNlbGVjdC5sZWZ0ICAgKj0gcGN0V2lkO1xuXHRcdFx0XHRcdHNlbGVjdC53aWR0aCAgKj0gcGN0V2lkO1xuXHRcdFx0XHRcdHNlbGVjdC50b3AgICAgKj0gcGN0SGd0O1xuXHRcdFx0XHRcdHNlbGVjdC5oZWlnaHQgKj0gcGN0SGd0O1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgcHJvcCBpbiBfaGlkZVByb3BzKVxuXHRcdFx0XHRcdFx0c2V0U3R5bGVQeChzZWxlY3REaXYsIHByb3AsIHNlbGVjdFtwcm9wXSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfcGxvdExmdENzcyA9IHBsb3RMZnRDc3M7XG5cdFx0XHRcdF9wbG90VG9wQ3NzID0gcGxvdFRvcENzcztcblx0XHRcdFx0X3Bsb3RXaWRDc3MgPSBwbG90V2lkQ3NzO1xuXHRcdFx0XHRfcGxvdEhndENzcyA9IHBsb3RIZ3RDc3M7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmUoXCJzZXRTaXplXCIpO1xuXG5cdFx0XHRzaG91bGRTZXRTaXplID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGZ1bGxXaWRDc3MgPiAwICYmIGZ1bGxIZ3RDc3MgPiAwKSB7XG5cdFx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIGNhbi53aWR0aCwgY2FuLmhlaWdodCk7XG5cdFx0XHRmaXJlKFwiZHJhd0NsZWFyXCIpO1xuXHRcdFx0ZHJhd09yZGVyLmZvckVhY2goZm4gPT4gZm4oKSk7XG5cdFx0XHRmaXJlKFwiZHJhd1wiKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZWN0LnNob3cgJiYgc2hvdWxkU2V0U2VsZWN0KSB7XG5cdFx0XHRzZXRTZWxlY3Qoc2VsZWN0KTtcblx0XHRcdHNob3VsZFNldFNlbGVjdCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChzaG93Q3Vyc29yICYmIHNob3VsZFNldEN1cnNvcikge1xuXHRcdFx0dXBkYXRlQ3Vyc29yKG51bGwsIHRydWUsIGZhbHNlKTtcblx0XHRcdHNob3VsZFNldEN1cnNvciA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChsZWdlbmQuc2hvdyAmJiBsZWdlbmQubGl2ZSAmJiBzaG91bGRTZXRMZWdlbmQpIHtcblx0XHRcdHNldExlZ2VuZCgpO1xuXHRcdFx0c2hvdWxkU2V0TGVnZW5kID0gZmFsc2U7IC8vIHJlZHVuZGFudCBjdXJyZW50bHlcblx0XHR9XG5cblx0XHRpZiAoIXJlYWR5KSB7XG5cdFx0XHRyZWFkeSA9IHRydWU7XG5cdFx0XHRzZWxmLnN0YXR1cyA9IDE7XG5cblx0XHRcdGZpcmUoXCJyZWFkeVwiKTtcblx0XHR9XG5cblx0XHR2aWFBdXRvU2NhbGVYID0gZmFsc2U7XG5cblx0XHRxdWV1ZWRDb21taXQgPSBmYWxzZTtcblx0fVxuXG5cdHNlbGYucmVkcmF3ID0gKHJlYnVpbGRQYXRocywgcmVjYWxjQXhlcykgPT4ge1xuXHRcdHNob3VsZENvbnZlcmdlU2l6ZSA9IHJlY2FsY0F4ZXMgfHwgZmFsc2U7XG5cblx0XHRpZiAocmVidWlsZFBhdGhzICE9PSBmYWxzZSlcblx0XHRcdF9zZXRTY2FsZSh4U2NhbGVLZXksIHNjYWxlWC5taW4sIHNjYWxlWC5tYXgpO1xuXHRcdGVsc2Vcblx0XHRcdGNvbW1pdCgpO1xuXHR9O1xuXG5cdC8vIHJlZHJhdygpID0+IHNldFNjYWxlKCd4Jywgc2NhbGVzLngubWluLCBzY2FsZXMueC5tYXgpO1xuXG5cdC8vIGV4cGxpY2l0LCBuZXZlciByZS1yYW5nZWQgKGlzIHRoaXMgYWN0dWFsbHkgdHJ1ZT8gZm9yIHggYW5kIHkpXG5cdGZ1bmN0aW9uIHNldFNjYWxlKGtleSwgb3B0cykge1xuXHRcdGxldCBzYyA9IHNjYWxlc1trZXldO1xuXG5cdFx0aWYgKHNjLmZyb20gPT0gbnVsbCkge1xuXHRcdFx0aWYgKGRhdGFMZW4gPT0gMCkge1xuXHRcdFx0XHRsZXQgbWluTWF4ID0gc2MucmFuZ2Uoc2VsZiwgb3B0cy5taW4sIG9wdHMubWF4LCBrZXkpO1xuXHRcdFx0XHRvcHRzLm1pbiA9IG1pbk1heFswXTtcblx0XHRcdFx0b3B0cy5tYXggPSBtaW5NYXhbMV07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcHRzLm1pbiA+IG9wdHMubWF4KSB7XG5cdFx0XHRcdGxldCBfbWluID0gb3B0cy5taW47XG5cdFx0XHRcdG9wdHMubWluID0gb3B0cy5tYXg7XG5cdFx0XHRcdG9wdHMubWF4ID0gX21pbjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRhdGFMZW4gPiAxICYmIG9wdHMubWluICE9IG51bGwgJiYgb3B0cy5tYXggIT0gbnVsbCAmJiBvcHRzLm1heCAtIG9wdHMubWluIDwgMWUtMTYpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYgKGtleSA9PSB4U2NhbGVLZXkpIHtcblx0XHRcdFx0aWYgKHNjLmRpc3RyID09IDIgJiYgZGF0YUxlbiA+IDApIHtcblx0XHRcdFx0XHRvcHRzLm1pbiA9IGNsb3Nlc3RJZHgob3B0cy5taW4sIGRhdGFbMF0pO1xuXHRcdFx0XHRcdG9wdHMubWF4ID0gY2xvc2VzdElkeChvcHRzLm1heCwgZGF0YVswXSk7XG5cblx0XHRcdFx0XHRpZiAob3B0cy5taW4gPT0gb3B0cy5tYXgpXG5cdFx0XHRcdFx0XHRvcHRzLm1heCsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvL1x0bG9nKFwic2V0U2NhbGUoKVwiLCBhcmd1bWVudHMpO1xuXG5cdFx0XHRwZW5kU2NhbGVzW2tleV0gPSBvcHRzO1xuXG5cdFx0XHRzaG91bGRTZXRTY2FsZXMgPSB0cnVlO1xuXHRcdFx0Y29tbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0c2VsZi5zZXRTY2FsZSA9IHNldFNjYWxlO1xuXG4vL1x0SU5URVJBQ1RJT05cblxuXHRsZXQgeEN1cnNvcjtcblx0bGV0IHlDdXJzb3I7XG5cdGxldCB2Q3Vyc29yO1xuXHRsZXQgaEN1cnNvcjtcblxuXHQvLyBzdGFydGluZyBwb3NpdGlvbiBiZWZvcmUgY3Vyc29yLm1vdmVcblx0bGV0IHJhd01vdXNlTGVmdDA7XG5cdGxldCByYXdNb3VzZVRvcDA7XG5cblx0Ly8gc3RhcnRpbmcgcG9zaXRpb25cblx0bGV0IG1vdXNlTGVmdDA7XG5cdGxldCBtb3VzZVRvcDA7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvbiBiZWZvcmUgY3Vyc29yLm1vdmVcblx0bGV0IHJhd01vdXNlTGVmdDE7XG5cdGxldCByYXdNb3VzZVRvcDE7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvblxuXHRsZXQgbW91c2VMZWZ0MTtcblx0bGV0IG1vdXNlVG9wMTtcblxuXHRsZXQgZHJhZ2dpbmcgPSBmYWxzZTtcblxuXHRjb25zdCBkcmFnID0gY3Vyc29yLmRyYWc7XG5cblx0bGV0IGRyYWdYID0gZHJhZy54O1xuXHRsZXQgZHJhZ1kgPSBkcmFnLnk7XG5cblx0aWYgKHNob3dDdXJzb3IpIHtcblx0XHRpZiAoY3Vyc29yLngpXG5cdFx0XHR4Q3Vyc29yID0gcGxhY2VEaXYoQ1VSU09SX1gsIG92ZXIpO1xuXHRcdGlmIChjdXJzb3IueSlcblx0XHRcdHlDdXJzb3IgPSBwbGFjZURpdihDVVJTT1JfWSwgb3Zlcik7XG5cblx0XHRpZiAoc2NhbGVYLm9yaSA9PSAwKSB7XG5cdFx0XHR2Q3Vyc29yID0geEN1cnNvcjtcblx0XHRcdGhDdXJzb3IgPSB5Q3Vyc29yO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZDdXJzb3IgPSB5Q3Vyc29yO1xuXHRcdFx0aEN1cnNvciA9IHhDdXJzb3I7XG5cdFx0fVxuXG5cdFx0bW91c2VMZWZ0MSA9IGN1cnNvci5sZWZ0O1xuXHRcdG1vdXNlVG9wMSA9IGN1cnNvci50b3A7XG5cdH1cblxuXHRjb25zdCBzZWxlY3QgPSBzZWxmLnNlbGVjdCA9IGFzc2lnbih7XG5cdFx0c2hvdzogICB0cnVlLFxuXHRcdG92ZXI6ICAgdHJ1ZSxcblx0XHRsZWZ0OiAgIDAsXG5cdFx0d2lkdGg6ICAwLFxuXHRcdHRvcDogICAgMCxcblx0XHRoZWlnaHQ6IDAsXG5cdH0sIG9wdHMuc2VsZWN0KTtcblxuXHRjb25zdCBzZWxlY3REaXYgPSBzZWxlY3Quc2hvdyA/IHBsYWNlRGl2KFNFTEVDVCwgc2VsZWN0Lm92ZXIgPyBvdmVyIDogdW5kZXIpIDogbnVsbDtcblxuXHRmdW5jdGlvbiBzZXRTZWxlY3Qob3B0cywgX2ZpcmUpIHtcblx0XHRpZiAoc2VsZWN0LnNob3cpIHtcblx0XHRcdGZvciAobGV0IHByb3AgaW4gb3B0cykge1xuXHRcdFx0XHRzZWxlY3RbcHJvcF0gPSBvcHRzW3Byb3BdO1xuXG5cdFx0XHRcdGlmIChwcm9wIGluIF9oaWRlUHJvcHMpXG5cdFx0XHRcdFx0c2V0U3R5bGVQeChzZWxlY3REaXYsIHByb3AsIG9wdHNbcHJvcF0pO1xuXHRcdFx0fVxuXG5cdFx0XHRfZmlyZSAhPT0gZmFsc2UgJiYgZmlyZShcInNldFNlbGVjdFwiKTtcblx0XHR9XG5cdH1cblxuXHRzZWxmLnNldFNlbGVjdCA9IHNldFNlbGVjdDtcblxuXHRmdW5jdGlvbiB0b2dnbGVET00oaSkge1xuXHRcdGxldCBzID0gc2VyaWVzW2ldO1xuXG5cdFx0aWYgKHMuc2hvdylcblx0XHRcdHNob3dMZWdlbmQgJiYgcmVtQ2xhc3MobGVnZW5kUm93c1tpXSwgT0ZGKTtcblx0XHRlbHNlIHtcblx0XHRcdHNob3dMZWdlbmQgJiYgYWRkQ2xhc3MobGVnZW5kUm93c1tpXSwgT0ZGKTtcblxuXHRcdFx0aWYgKHNob3dDdXJzb3IpIHtcblx0XHRcdFx0bGV0IHB0ID0gY3Vyc29yT25lUHQgPyBjdXJzb3JQdHNbMF0gOiBjdXJzb3JQdHNbaV07XG5cdFx0XHRcdHB0ICE9IG51bGwgJiYgZWxUcmFucyhwdCwgLTEwLCAtMTAsIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIF9zZXRTY2FsZShrZXksIG1pbiwgbWF4KSB7XG5cdFx0c2V0U2NhbGUoa2V5LCB7bWluLCBtYXh9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNlcmllcyhpLCBvcHRzLCBfZmlyZSwgX3B1Yikge1xuXHQvL1x0bG9nKFwic2V0U2VyaWVzKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdGlmIChvcHRzLmZvY3VzICE9IG51bGwpXG5cdFx0XHRzZXRGb2N1cyhpKTtcblxuXHRcdGlmIChvcHRzLnNob3cgIT0gbnVsbCkge1xuXHRcdFx0c2VyaWVzLmZvckVhY2goKHMsIHNpKSA9PiB7XG5cdFx0XHRcdGlmIChzaSA+IDAgJiYgKGkgPT0gc2kgfHwgaSA9PSBudWxsKSkge1xuXHRcdFx0XHRcdHMuc2hvdyA9IG9wdHMuc2hvdztcblx0XHRcdFx0XHR0b2dnbGVET00oc2kpO1xuXG5cdFx0XHRcdFx0aWYgKG1vZGUgPT0gMikge1xuXHRcdFx0XHRcdFx0X3NldFNjYWxlKHMuZmFjZXRzWzBdLnNjYWxlLCBudWxsLCBudWxsKTtcblx0XHRcdFx0XHRcdF9zZXRTY2FsZShzLmZhY2V0c1sxXS5zY2FsZSwgbnVsbCwgbnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdF9zZXRTY2FsZShzLnNjYWxlLCBudWxsLCBudWxsKTtcblxuXHRcdFx0XHRcdGNvbW1pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRfZmlyZSAhPT0gZmFsc2UgJiYgZmlyZShcInNldFNlcmllc1wiLCBpLCBvcHRzKTtcblxuXHRcdF9wdWIgJiYgcHViU3luYyhcInNldFNlcmllc1wiLCBzZWxmLCBpLCBvcHRzKTtcblx0fVxuXG5cdHNlbGYuc2V0U2VyaWVzID0gc2V0U2VyaWVzO1xuXG5cdGZ1bmN0aW9uIHNldEJhbmQoYmksIG9wdHMpIHtcblx0XHRhc3NpZ24oYmFuZHNbYmldLCBvcHRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEJhbmQob3B0cywgYmkpIHtcblx0XHRvcHRzLmZpbGwgPSBmbk9yU2VsZihvcHRzLmZpbGwgfHwgbnVsbCk7XG5cdFx0b3B0cy5kaXIgPSBpZk51bGwob3B0cy5kaXIsIC0xKTtcblx0XHRiaSA9IGJpID09IG51bGwgPyBiYW5kcy5sZW5ndGggOiBiaTtcblx0XHRiYW5kcy5zcGxpY2UoYmksIDAsIG9wdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVsQmFuZChiaSkge1xuXHRcdGlmIChiaSA9PSBudWxsKVxuXHRcdFx0YmFuZHMubGVuZ3RoID0gMDtcblx0XHRlbHNlXG5cdFx0XHRiYW5kcy5zcGxpY2UoYmksIDEpO1xuXHR9XG5cblx0c2VsZi5hZGRCYW5kID0gYWRkQmFuZDtcblx0c2VsZi5zZXRCYW5kID0gc2V0QmFuZDtcblx0c2VsZi5kZWxCYW5kID0gZGVsQmFuZDtcblxuXHRmdW5jdGlvbiBzZXRBbHBoYShpLCB2YWx1ZSkge1xuXHRcdHNlcmllc1tpXS5hbHBoYSA9IHZhbHVlO1xuXG5cdFx0aWYgKHNob3dDdXJzb3IgJiYgY3Vyc29yUHRzW2ldICE9IG51bGwpXG5cdFx0XHRjdXJzb3JQdHNbaV0uc3R5bGUub3BhY2l0eSA9IHZhbHVlO1xuXG5cdFx0aWYgKHNob3dMZWdlbmQgJiYgbGVnZW5kUm93c1tpXSlcblx0XHRcdGxlZ2VuZFJvd3NbaV0uc3R5bGUub3BhY2l0eSA9IHZhbHVlO1xuXHR9XG5cblx0Ly8geS1kaXN0YW5jZVxuXHRsZXQgY2xvc2VzdERpc3Q7XG5cdGxldCBjbG9zZXN0U2VyaWVzO1xuXHRsZXQgZm9jdXNlZFNlcmllcztcblx0Y29uc3QgRk9DVVNfVFJVRSAgPSB7Zm9jdXM6IHRydWV9O1xuXG5cdGZ1bmN0aW9uIHNldEZvY3VzKGkpIHtcblx0XHRpZiAoaSAhPSBmb2N1c2VkU2VyaWVzKSB7XG5cdFx0Ly9cdGxvZyhcInNldEZvY3VzKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdFx0bGV0IGFsbEZvY3VzZWQgPSBpID09IG51bGw7XG5cblx0XHRcdGxldCBfc2V0QWxwaGEgPSBmb2N1cy5hbHBoYSAhPSAxO1xuXG5cdFx0XHRzZXJpZXMuZm9yRWFjaCgocywgaTIpID0+IHtcblx0XHRcdFx0aWYgKG1vZGUgPT0gMSB8fCBpMiA+IDApIHtcblx0XHRcdFx0XHRsZXQgaXNGb2N1c2VkID0gYWxsRm9jdXNlZCB8fCBpMiA9PSAwIHx8IGkyID09IGk7XG5cdFx0XHRcdFx0cy5fZm9jdXMgPSBhbGxGb2N1c2VkID8gbnVsbCA6IGlzRm9jdXNlZDtcblx0XHRcdFx0XHRfc2V0QWxwaGEgJiYgc2V0QWxwaGEoaTIsIGlzRm9jdXNlZCA/IDEgOiBmb2N1cy5hbHBoYSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmb2N1c2VkU2VyaWVzID0gaTtcblx0XHRcdF9zZXRBbHBoYSAmJiBjb21taXQoKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoc2hvd0xlZ2VuZCAmJiBjdXJzb3JGb2N1cykge1xuXHRcdG9uTW91c2UobW91c2VsZWF2ZSwgbGVnZW5kVGFibGUsIGUgPT4ge1xuXHRcdFx0aWYgKGN1cnNvci5fbG9jaylcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRzZXRDdXJzb3JFdmVudChlKTtcblxuXHRcdFx0aWYgKGZvY3VzZWRTZXJpZXMgIT0gbnVsbClcblx0XHRcdFx0c2V0U2VyaWVzKG51bGwsIEZPQ1VTX1RSVUUsIHRydWUsIHN5bmNPcHRzLnNldFNlcmllcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBwb3NUb1ZhbChwb3MsIHNjYWxlLCBjYW4pIHtcblx0XHRsZXQgc2MgPSBzY2FsZXNbc2NhbGVdO1xuXG5cdFx0aWYgKGNhbilcblx0XHRcdHBvcyA9IHBvcyAvIHB4UmF0aW8gLSAoc2Mub3JpID09IDEgPyBwbG90VG9wQ3NzIDogcGxvdExmdENzcyk7XG5cblx0XHRsZXQgZGltID0gcGxvdFdpZENzcztcblxuXHRcdGlmIChzYy5vcmkgPT0gMSkge1xuXHRcdFx0ZGltID0gcGxvdEhndENzcztcblx0XHRcdHBvcyA9IGRpbSAtIHBvcztcblx0XHR9XG5cblx0XHRpZiAoc2MuZGlyID09IC0xKVxuXHRcdFx0cG9zID0gZGltIC0gcG9zO1xuXG5cdFx0bGV0IF9taW4gPSBzYy5fbWluLFxuXHRcdFx0X21heCA9IHNjLl9tYXgsXG5cdFx0XHRwY3QgPSBwb3MgLyBkaW07XG5cblx0XHRsZXQgc3YgPSBfbWluICsgKF9tYXggLSBfbWluKSAqIHBjdDtcblxuXHRcdGxldCBkaXN0ciA9IHNjLmRpc3RyO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdGRpc3RyID09IDMgPyBwb3coMTAsIHN2KSA6XG5cdFx0XHRkaXN0ciA9PSA0ID8gc2luaChzdiwgc2MuYXNpbmgpIDpcblx0XHRcdGRpc3RyID09IDEwMCA/IHNjLmJ3ZChzdikgOlxuXHRcdFx0c3Zcblx0XHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VzdElkeEZyb21YcG9zKHBvcywgY2FuKSB7XG5cdFx0bGV0IHYgPSBwb3NUb1ZhbChwb3MsIHhTY2FsZUtleSwgY2FuKTtcblx0XHRyZXR1cm4gY2xvc2VzdElkeCh2LCBkYXRhWzBdLCBpMCwgaTEpO1xuXHR9XG5cblx0c2VsZi52YWxUb0lkeCA9IHZhbCA9PiBjbG9zZXN0SWR4KHZhbCwgZGF0YVswXSk7XG5cdHNlbGYucG9zVG9JZHggPSBjbG9zZXN0SWR4RnJvbVhwb3M7XG5cdHNlbGYucG9zVG9WYWwgPSBwb3NUb1ZhbDtcblx0c2VsZi52YWxUb1BvcyA9ICh2YWwsIHNjYWxlLCBjYW4pID0+IChcblx0XHRzY2FsZXNbc2NhbGVdLm9yaSA9PSAwID9cblx0XHRnZXRIUG9zKHZhbCwgc2NhbGVzW3NjYWxlXSxcblx0XHRcdGNhbiA/IHBsb3RXaWQgOiBwbG90V2lkQ3NzLFxuXHRcdFx0Y2FuID8gcGxvdExmdCA6IDAsXG5cdFx0KSA6XG5cdFx0Z2V0VlBvcyh2YWwsIHNjYWxlc1tzY2FsZV0sXG5cdFx0XHRjYW4gPyBwbG90SGd0IDogcGxvdEhndENzcyxcblx0XHRcdGNhbiA/IHBsb3RUb3AgOiAwLFxuXHRcdClcblx0KTtcblxuXHRzZWxmLnNldEN1cnNvciA9IChvcHRzLCBfZmlyZSwgX3B1YikgPT4ge1xuXHRcdG1vdXNlTGVmdDEgPSBvcHRzLmxlZnQ7XG5cdFx0bW91c2VUb3AxID0gb3B0cy50b3A7XG5cdC8vXHRhc3NpZ24oY3Vyc29yLCBvcHRzKTtcblx0XHR1cGRhdGVDdXJzb3IobnVsbCwgX2ZpcmUsIF9wdWIpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHNldFNlbEgob2ZmLCBkaW0pIHtcblx0XHRzZXRTdHlsZVB4KHNlbGVjdERpdiwgTEVGVCwgIHNlbGVjdC5sZWZ0ID0gb2ZmKTtcblx0XHRzZXRTdHlsZVB4KHNlbGVjdERpdiwgV0lEVEgsIHNlbGVjdC53aWR0aCA9IGRpbSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRTZWxWKG9mZiwgZGltKSB7XG5cdFx0c2V0U3R5bGVQeChzZWxlY3REaXYsIFRPUCwgICAgc2VsZWN0LnRvcCA9IG9mZik7XG5cdFx0c2V0U3R5bGVQeChzZWxlY3REaXYsIEhFSUdIVCwgc2VsZWN0LmhlaWdodCA9IGRpbSk7XG5cdH1cblxuXHRsZXQgc2V0U2VsWCA9IHNjYWxlWC5vcmkgPT0gMCA/IHNldFNlbEggOiBzZXRTZWxWO1xuXHRsZXQgc2V0U2VsWSA9IHNjYWxlWC5vcmkgPT0gMSA/IHNldFNlbEggOiBzZXRTZWxWO1xuXG5cdGZ1bmN0aW9uIHN5bmNMZWdlbmQoKSB7XG5cdFx0aWYgKHNob3dMZWdlbmQgJiYgbGVnZW5kLmxpdmUpIHtcblx0XHRcdGZvciAobGV0IGkgPSBtb2RlID09IDIgPyAxIDogMDsgaSA8IHNlcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoaSA9PSAwICYmIG11bHRpVmFsTGVnZW5kKVxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRcdGxldCB2YWxzID0gbGVnZW5kLnZhbHVlc1tpXTtcblxuXHRcdFx0XHRsZXQgaiA9IDA7XG5cblx0XHRcdFx0Zm9yIChsZXQgayBpbiB2YWxzKVxuXHRcdFx0XHRcdGxlZ2VuZENlbGxzW2ldW2orK10uZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2YWxzW2tdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHNldExlZ2VuZChvcHRzLCBfZmlyZSkge1xuXHRcdGlmIChvcHRzICE9IG51bGwpIHtcblx0XHRcdGlmIChvcHRzLmlkeHMpIHtcblx0XHRcdFx0b3B0cy5pZHhzLmZvckVhY2goKGRpZHgsIHNpZHgpID0+IHtcblx0XHRcdFx0XHRhY3RpdmVJZHhzW3NpZHhdID0gZGlkeDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICghaXNVbmRlZihvcHRzLmlkeCkpXG5cdFx0XHRcdGFjdGl2ZUlkeHMuZmlsbChvcHRzLmlkeCk7XG5cblx0XHRcdGxlZ2VuZC5pZHggPSBhY3RpdmVJZHhzWzBdO1xuXHRcdH1cblxuXHRcdGlmIChzaG93TGVnZW5kICYmIGxlZ2VuZC5saXZlKSB7XG5cdFx0XHRmb3IgKGxldCBzaWR4ID0gMDsgc2lkeCA8IHNlcmllcy5sZW5ndGg7IHNpZHgrKykge1xuXHRcdFx0XHRpZiAoc2lkeCA+IDAgfHwgbW9kZSA9PSAxICYmICFtdWx0aVZhbExlZ2VuZClcblx0XHRcdFx0XHRzZXRMZWdlbmRWYWx1ZXMoc2lkeCwgYWN0aXZlSWR4c1tzaWR4XSk7XG5cdFx0XHR9XG5cblx0XHRcdHN5bmNMZWdlbmQoKTtcblx0XHR9XG5cblx0XHRzaG91bGRTZXRMZWdlbmQgPSBmYWxzZTtcblxuXHRcdF9maXJlICE9PSBmYWxzZSAmJiBmaXJlKFwic2V0TGVnZW5kXCIpO1xuXHR9XG5cblx0c2VsZi5zZXRMZWdlbmQgPSBzZXRMZWdlbmQ7XG5cblx0ZnVuY3Rpb24gc2V0TGVnZW5kVmFsdWVzKHNpZHgsIGlkeCkge1xuXHRcdGxldCBzID0gc2VyaWVzW3NpZHhdO1xuXHRcdGxldCBzcmMgPSBzaWR4ID09IDAgJiYgeFNjYWxlRGlzdHIgPT0gMiA/IGRhdGEwIDogZGF0YVtzaWR4XTtcblx0XHRsZXQgdmFsO1xuXG5cdFx0aWYgKG11bHRpVmFsTGVnZW5kKVxuXHRcdFx0dmFsID0gcy52YWx1ZXMoc2VsZiwgc2lkeCwgaWR4KSA/PyBOVUxMX0xFR0VORF9WQUxVRVM7XG5cdFx0ZWxzZSB7XG5cdFx0XHR2YWwgPSBzLnZhbHVlKHNlbGYsIGlkeCA9PSBudWxsID8gbnVsbCA6IHNyY1tpZHhdLCBzaWR4LCBpZHgpO1xuXHRcdFx0dmFsID0gdmFsID09IG51bGwgPyBOVUxMX0xFR0VORF9WQUxVRVMgOiB7XzogdmFsfTtcblx0XHR9XG5cblx0XHRsZWdlbmQudmFsdWVzW3NpZHhdID0gdmFsO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlQ3Vyc29yKHNyYywgX2ZpcmUsIF9wdWIpIHtcblx0Ly9cdHRzID09IG51bGwgJiYgbG9nKFwidXBkYXRlQ3Vyc29yKClcIiwgYXJndW1lbnRzKTtcblxuXHRcdHJhd01vdXNlTGVmdDEgPSBtb3VzZUxlZnQxO1xuXHRcdHJhd01vdXNlVG9wMSA9IG1vdXNlVG9wMTtcblxuXHRcdFttb3VzZUxlZnQxLCBtb3VzZVRvcDFdID0gY3Vyc29yLm1vdmUoc2VsZiwgbW91c2VMZWZ0MSwgbW91c2VUb3AxKTtcblxuXHRcdGN1cnNvci5sZWZ0ID0gbW91c2VMZWZ0MTtcblx0XHRjdXJzb3IudG9wID0gbW91c2VUb3AxO1xuXG5cdFx0aWYgKHNob3dDdXJzb3IpIHtcblx0XHRcdHZDdXJzb3IgJiYgZWxUcmFucyh2Q3Vyc29yLCByb3VuZChtb3VzZUxlZnQxKSwgMCwgcGxvdFdpZENzcywgcGxvdEhndENzcyk7XG5cdFx0XHRoQ3Vyc29yICYmIGVsVHJhbnMoaEN1cnNvciwgMCwgcm91bmQobW91c2VUb3AxKSwgcGxvdFdpZENzcywgcGxvdEhndENzcyk7XG5cdFx0fVxuXG5cdFx0bGV0IGlkeDtcblxuXHRcdC8vIHdoZW4gem9vbWluZyB0byBhbiB4IHNjYWxlIHJhbmdlIGJldHdlZW4gZGF0YXBvaW50cyB0aGUgYmluYXJ5IHNlYXJjaFxuXHRcdC8vIGZvciBuZWFyZXN0IG1pbi9tYXggaW5kaWNlcyByZXN1bHRzIGluIHRoaXMgY29uZGl0aW9uLiBjaGVhcCBoYWNrIDpEXG5cdFx0bGV0IG5vRGF0YUluUmFuZ2UgPSBpMCA+IGkxOyAvLyB3b3JrcyBmb3IgbW9kZSAxIG9ubHlcblxuXHRcdGNsb3Nlc3REaXN0ID0gaW5mO1xuXHRcdGNsb3Nlc3RTZXJpZXMgPSBudWxsO1xuXG5cdFx0Ly8gVE9ETzogZXh0cmFjdFxuXHRcdGxldCB4RGltID0gc2NhbGVYLm9yaSA9PSAwID8gcGxvdFdpZENzcyA6IHBsb3RIZ3RDc3M7XG5cdFx0bGV0IHlEaW0gPSBzY2FsZVgub3JpID09IDEgPyBwbG90V2lkQ3NzIDogcGxvdEhndENzcztcblxuXHRcdC8vIGlmIGN1cnNvciBoaWRkZW4sIGhpZGUgcG9pbnRzICYgY2xlYXIgbGVnZW5kIHZhbHNcblx0XHRpZiAobW91c2VMZWZ0MSA8IDAgfHwgZGF0YUxlbiA9PSAwIHx8IG5vRGF0YUluUmFuZ2UpIHtcblx0XHRcdGlkeCA9IGN1cnNvci5pZHggPSBudWxsO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgcHQgPSBjdXJzb3JQdHNbaV07XG5cdFx0XHRcdHB0ICE9IG51bGwgJiYgZWxUcmFucyhwdCwgLTEwLCAtMTAsIHBsb3RXaWRDc3MsIHBsb3RIZ3RDc3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY3Vyc29yRm9jdXMpXG5cdFx0XHRcdHNldFNlcmllcyhudWxsLCBGT0NVU19UUlVFLCB0cnVlLCBzcmMgPT0gbnVsbCAmJiBzeW5jT3B0cy5zZXRTZXJpZXMpO1xuXG5cdFx0XHRpZiAobGVnZW5kLmxpdmUpIHtcblx0XHRcdFx0YWN0aXZlSWR4cy5maWxsKGlkeCk7XG5cdFx0XHRcdHNob3VsZFNldExlZ2VuZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdC8vXHRsZXQgcGN0WSA9IDEgLSAoeSAvIHJlY3QuaGVpZ2h0KTtcblxuXHRcdFx0bGV0IG1vdXNlWFBvcywgdmFsQXRQb3NYLCB4UG9zO1xuXG5cdFx0XHRpZiAobW9kZSA9PSAxKSB7XG5cdFx0XHRcdG1vdXNlWFBvcyA9IHNjYWxlWC5vcmkgPT0gMCA/IG1vdXNlTGVmdDEgOiBtb3VzZVRvcDE7XG5cdFx0XHRcdHZhbEF0UG9zWCA9IHBvc1RvVmFsKG1vdXNlWFBvcywgeFNjYWxlS2V5KTtcblx0XHRcdFx0aWR4ID0gY3Vyc29yLmlkeCA9IGNsb3Nlc3RJZHgodmFsQXRQb3NYLCBkYXRhWzBdLCBpMCwgaTEpO1xuXHRcdFx0XHR4UG9zID0gdmFsVG9Qb3NYKGRhdGFbMF1baWR4XSwgc2NhbGVYLCB4RGltLCAwKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2xvc2VzdCBwdCB2YWx1ZXNcblx0XHRcdGxldCBfcHRMZnQgPSAtMTA7XG5cdFx0XHRsZXQgX3B0VG9wID0gLTEwO1xuXHRcdFx0bGV0IF9wdFdpZCA9IDA7XG5cdFx0XHRsZXQgX3B0SGd0ID0gMDtcblx0XHRcdGxldCBfY2VudGVyZWQgPSB0cnVlO1xuXHRcdFx0bGV0IF9wdEZpbGwgPSAnJztcblx0XHRcdGxldCBfcHRTdHJva2UgPSAnJztcblxuXHRcdFx0Zm9yIChsZXQgaSA9IG1vZGUgPT0gMiA/IDEgOiAwOyBpIDwgc2VyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBzID0gc2VyaWVzW2ldO1xuXG5cdFx0XHRcdGxldCBpZHgxICA9IGFjdGl2ZUlkeHNbaV07XG5cdFx0XHRcdGxldCB5VmFsMSA9IGlkeDEgPT0gbnVsbCA/IG51bGwgOiAobW9kZSA9PSAxID8gZGF0YVtpXVtpZHgxXSA6IGRhdGFbaV1bMV1baWR4MV0pO1xuXG5cdFx0XHRcdGxldCBpZHgyICA9IGN1cnNvci5kYXRhSWR4KHNlbGYsIGksIGlkeCwgdmFsQXRQb3NYKTtcblx0XHRcdFx0bGV0IHlWYWwyID0gaWR4MiA9PSBudWxsID8gbnVsbCA6IChtb2RlID09IDEgPyBkYXRhW2ldW2lkeDJdIDogZGF0YVtpXVsxXVtpZHgyXSk7XG5cblx0XHRcdFx0c2hvdWxkU2V0TGVnZW5kID0gc2hvdWxkU2V0TGVnZW5kIHx8IHlWYWwyICE9IHlWYWwxIHx8IGlkeDIgIT0gaWR4MTtcblxuXHRcdFx0XHRhY3RpdmVJZHhzW2ldID0gaWR4MjtcblxuXHRcdFx0XHRpZiAoaSA+IDAgJiYgcy5zaG93KSB7XG5cdFx0XHRcdFx0bGV0IHhQb3MyID0gaWR4MiA9PSBudWxsID8gLTEwIDogaWR4MiA9PSBpZHggPyB4UG9zIDogdmFsVG9Qb3NYKG1vZGUgPT0gMSA/IGRhdGFbMF1baWR4Ml0gOiBkYXRhW2ldWzBdW2lkeDJdLCBzY2FsZVgsIHhEaW0sIDApO1xuXG5cdFx0XHRcdFx0Ly8gdGhpcyBkb2VzbnQgcmVhbGx5IHdvcmsgZm9yIHN0YXRlIHRpbWVsaW5lLCBoZWF0bWFwLCBzdGF0dXMgaGlzdG9yeSAod2hlcmUgdGhlIHZhbHVlIG1hcHMgdG8gY29sb3IsIG5vdCB5IGNvb3Jkcylcblx0XHRcdFx0XHRsZXQgeVBvcyA9IHlWYWwyID09IG51bGwgPyAtMTAgOiB2YWxUb1Bvc1koeVZhbDIsIG1vZGUgPT0gMSA/IHNjYWxlc1tzLnNjYWxlXSA6IHNjYWxlc1tzLmZhY2V0c1sxXS5zY2FsZV0sIHlEaW0sIDApO1xuXG5cdFx0XHRcdFx0aWYgKGN1cnNvckZvY3VzICYmIHlWYWwyICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGxldCBtb3VzZVlQb3MgPSBzY2FsZVgub3JpID09IDEgPyBtb3VzZUxlZnQxIDogbW91c2VUb3AxO1xuXHRcdFx0XHRcdFx0bGV0IGRpc3QgPSBhYnMoZm9jdXMuZGlzdChzZWxmLCBpLCBpZHgyLCB5UG9zLCBtb3VzZVlQb3MpKTtcblxuXHRcdFx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuXHRcdFx0XHRcdFx0XHRsZXQgYmlhcyA9IGZvY3VzLmJpYXM7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGJpYXMgIT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGxldCBtb3VzZVlWYWwgPSBwb3NUb1ZhbChtb3VzZVlQb3MsIHMuc2NhbGUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHNlcmllc1lWYWxTaWduID0geVZhbDIgICAgID49IDAgPyAxIDogLTE7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IG1vdXNlWVZhbFNpZ24gID0gbW91c2VZVmFsID49IDAgPyAxIDogLTE7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyB3aXRoIGEgZm9jdXMgYmlhcywgd2Ugd2lsbCBuZXZlciBjcm9zcyB6ZXJvIHdoZW4gcHJveCB0ZXN0aW5nXG5cdFx0XHRcdFx0XHRcdFx0Ly8gaXQncyBlaXRoZXIgY2xvc2VzdCB0b3dhcmRzIHplcm8sIG9yIGNsb3Nlc3QgYXdheSBmcm9tIHplcm9cblx0XHRcdFx0XHRcdFx0XHRpZiAobW91c2VZVmFsU2lnbiA9PSBzZXJpZXNZVmFsU2lnbiAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRtb3VzZVlWYWxTaWduID09IDEgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoYmlhcyA9PSAxID8geVZhbDIgPj0gbW91c2VZVmFsIDogeVZhbDIgPD0gbW91c2VZVmFsKSA6ICAvLyA+PSAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdChiaWFzID09IDEgPyB5VmFsMiA8PSBtb3VzZVlWYWwgOiB5VmFsMiA+PSBtb3VzZVlWYWwpICAgIC8vICA8IDBcblx0XHRcdFx0XHRcdFx0XHQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9zZXN0U2VyaWVzID0gaTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHRcdFx0XHRcdGNsb3Nlc3RTZXJpZXMgPSBpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHNob3VsZFNldExlZ2VuZCB8fCBjdXJzb3JPbmVQdCkge1xuXHRcdFx0XHRcdFx0bGV0IGhQb3MsIHZQb3M7XG5cblx0XHRcdFx0XHRcdGlmIChzY2FsZVgub3JpID09IDApIHtcblx0XHRcdFx0XHRcdFx0aFBvcyA9IHhQb3MyO1xuXHRcdFx0XHRcdFx0XHR2UG9zID0geVBvcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRoUG9zID0geVBvcztcblx0XHRcdFx0XHRcdFx0dlBvcyA9IHhQb3MyO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgcHRXaWQsIHB0SGd0LCBwdExmdCwgcHRUb3AsXG5cdFx0XHRcdFx0XHRcdHB0U3Ryb2tlLCBwdEZpbGwsXG5cdFx0XHRcdFx0XHRcdGNlbnRlcmVkID0gdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Z2V0QkJveCA9IHBvaW50cy5iYm94O1xuXG5cdFx0XHRcdFx0XHRpZiAoZ2V0QkJveCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGNlbnRlcmVkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdFx0bGV0IGJib3ggPSBnZXRCQm94KHNlbGYsIGkpO1xuXG5cdFx0XHRcdFx0XHRcdHB0TGZ0ID0gYmJveC5sZWZ0O1xuXHRcdFx0XHRcdFx0XHRwdFRvcCA9IGJib3gudG9wO1xuXHRcdFx0XHRcdFx0XHRwdFdpZCA9IGJib3gud2lkdGg7XG5cdFx0XHRcdFx0XHRcdHB0SGd0ID0gYmJveC5oZWlnaHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0cHRMZnQgPSBoUG9zO1xuXHRcdFx0XHRcdFx0XHRwdFRvcCA9IHZQb3M7XG5cdFx0XHRcdFx0XHRcdHB0V2lkID0gcHRIZ3QgPSBwb2ludHMuc2l6ZShzZWxmLCBpKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cHRGaWxsID0gcG9pbnRzLmZpbGwoc2VsZiwgaSk7XG5cdFx0XHRcdFx0XHRwdFN0cm9rZSA9IHBvaW50cy5zdHJva2Uoc2VsZiwgaSk7XG5cblx0XHRcdFx0XHRcdGlmIChjdXJzb3JPbmVQdCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoaSA9PSBjbG9zZXN0U2VyaWVzICYmIGNsb3Nlc3REaXN0IDw9IGZvY3VzLnByb3gpIHtcblx0XHRcdFx0XHRcdFx0XHRfcHRMZnQgPSBwdExmdDtcblx0XHRcdFx0XHRcdFx0XHRfcHRUb3AgPSBwdFRvcDtcblx0XHRcdFx0XHRcdFx0XHRfcHRXaWQgPSBwdFdpZDtcblx0XHRcdFx0XHRcdFx0XHRfcHRIZ3QgPSBwdEhndDtcblx0XHRcdFx0XHRcdFx0XHRfY2VudGVyZWQgPSBjZW50ZXJlZDtcblx0XHRcdFx0XHRcdFx0XHRfcHRGaWxsID0gcHRGaWxsO1xuXHRcdFx0XHRcdFx0XHRcdF9wdFN0cm9rZSA9IHB0U3Ryb2tlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0bGV0IHB0ID0gY3Vyc29yUHRzW2ldO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChwdCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y3Vyc29yUHRzTGZ0W2ldID0gcHRMZnQ7XG5cdFx0XHRcdFx0XHRcdFx0Y3Vyc29yUHRzVG9wW2ldID0gcHRUb3A7XG5cblx0XHRcdFx0XHRcdFx0XHRlbFNpemUocHQsIHB0V2lkLCBwdEhndCwgY2VudGVyZWQpO1xuXHRcdFx0XHRcdFx0XHRcdGVsQ29sb3IocHQsIHB0RmlsbCwgcHRTdHJva2UpO1xuXHRcdFx0XHRcdFx0XHRcdGVsVHJhbnMocHQsIGNlaWwocHRMZnQpLCBjZWlsKHB0VG9wKSwgcGxvdFdpZENzcywgcGxvdEhndENzcyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gaWYgb25seSB1c2luZyBzaW5nbGUgaG92ZXIgcG9pbnQgKGF0IGN1cnNvclB0c1swXSlcblx0XHRcdC8vIHdlIGhhdmUgdHJpZ2dlciBzdHlsaW5nIGF0IGxhc3QgdmlzaWJsZSBzZXJpZXMgKG9uY2UgY2xvc2VzdFNlcmllcyBpcyBzZXR0bGVkKVxuXHRcdFx0aWYgKGN1cnNvck9uZVB0KSB7XG5cdFx0XHRcdC8vIHNvbWUgb2YgdGhpcyBsb2dpYyBpcyBzaW1pbGFyIHRvIHNlcmllcyBmb2N1cyBiZWxvdywgc2luY2UgaXQgbWF0Y2hlcyB0aGUgYmVoYXZpb3IgYnkgZGVzaWduXG5cblx0XHRcdFx0bGV0IHAgPSBmb2N1cy5wcm94O1xuXG5cdFx0XHRcdGxldCBmb2N1c0NoYW5nZWQgPSBmb2N1c2VkU2VyaWVzID09IG51bGwgPyBjbG9zZXN0RGlzdCA8PSBwIDogKGNsb3Nlc3REaXN0ID4gcCB8fCBjbG9zZXN0U2VyaWVzICE9IGZvY3VzZWRTZXJpZXMpO1xuXG5cdFx0XHRcdGlmIChzaG91bGRTZXRMZWdlbmQgfHwgZm9jdXNDaGFuZ2VkKSB7XG5cdFx0XHRcdFx0bGV0IHB0ID0gY3Vyc29yUHRzWzBdO1xuXG5cdFx0XHRcdFx0aWYgKHB0ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdGN1cnNvclB0c0xmdFswXSA9IF9wdExmdDtcblx0XHRcdFx0XHRcdGN1cnNvclB0c1RvcFswXSA9IF9wdFRvcDtcblxuXHRcdFx0XHRcdFx0ZWxTaXplKHB0LCBfcHRXaWQsIF9wdEhndCwgX2NlbnRlcmVkKTtcblx0XHRcdFx0XHRcdGVsQ29sb3IocHQsIF9wdEZpbGwsIF9wdFN0cm9rZSk7XG5cdFx0XHRcdFx0XHRlbFRyYW5zKHB0LCBjZWlsKF9wdExmdCksIGNlaWwoX3B0VG9wKSwgcGxvdFdpZENzcywgcGxvdEhndENzcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gbml0OiBjdXJzb3IuZHJhZy5zZXRTZWxlY3QgaXMgYXNzdW1lZCBhbHdheXMgdHJ1ZVxuXHRcdGlmIChzZWxlY3Quc2hvdyAmJiBkcmFnZ2luZykge1xuXHRcdFx0aWYgKHNyYyAhPSBudWxsKSB7XG5cdFx0XHRcdGxldCBbeEtleSwgeUtleV0gPSBzeW5jT3B0cy5zY2FsZXM7XG5cdFx0XHRcdGxldCBbbWF0Y2hYS2V5cywgbWF0Y2hZS2V5c10gPSBzeW5jT3B0cy5tYXRjaDtcblx0XHRcdFx0bGV0IFt4S2V5U3JjLCB5S2V5U3JjXSA9IHNyYy5jdXJzb3Iuc3luYy5zY2FsZXM7XG5cblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIGRyYWdYL2RyYWdZIGltcGxpY2l0bmVzcy9leHBsaWNpdG5lc3Mgb2Ygc3JjXG5cdFx0XHRcdGxldCBzZHJhZyA9IHNyYy5jdXJzb3IuZHJhZztcblx0XHRcdFx0ZHJhZ1ggPSBzZHJhZy5feDtcblx0XHRcdFx0ZHJhZ1kgPSBzZHJhZy5feTtcblxuXHRcdFx0XHRpZiAoZHJhZ1ggfHwgZHJhZ1kpIHtcblx0XHRcdFx0XHRsZXQgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IHNyYy5zZWxlY3Q7XG5cblx0XHRcdFx0XHRsZXQgc29yaSA9IHNyYy5zY2FsZXNbeEtleVNyY10ub3JpO1xuXHRcdFx0XHRcdGxldCBzUG9zVG9WYWwgPSBzcmMucG9zVG9WYWw7XG5cblx0XHRcdFx0XHRsZXQgc09mZiwgc0RpbSwgc2MsIGEsIGI7XG5cblx0XHRcdFx0XHRsZXQgbWF0Y2hpbmdYID0geEtleSAhPSBudWxsICYmIG1hdGNoWEtleXMoeEtleSwgeEtleVNyYyk7XG5cdFx0XHRcdFx0bGV0IG1hdGNoaW5nWSA9IHlLZXkgIT0gbnVsbCAmJiBtYXRjaFlLZXlzKHlLZXksIHlLZXlTcmMpO1xuXG5cdFx0XHRcdFx0aWYgKG1hdGNoaW5nWCAmJiBkcmFnWCkge1xuXHRcdFx0XHRcdFx0aWYgKHNvcmkgPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRzT2ZmID0gbGVmdDtcblx0XHRcdFx0XHRcdFx0c0RpbSA9IHdpZHRoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNPZmYgPSB0b3A7XG5cdFx0XHRcdFx0XHRcdHNEaW0gPSBoZWlnaHQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHNjID0gc2NhbGVzW3hLZXldO1xuXG5cdFx0XHRcdFx0XHRhID0gdmFsVG9Qb3NYKHNQb3NUb1ZhbChzT2ZmLCB4S2V5U3JjKSwgICAgICAgIHNjLCB4RGltLCAwKTtcblx0XHRcdFx0XHRcdGIgPSB2YWxUb1Bvc1goc1Bvc1RvVmFsKHNPZmYgKyBzRGltLCB4S2V5U3JjKSwgc2MsIHhEaW0sIDApO1xuXG5cdFx0XHRcdFx0XHRzZXRTZWxYKG1pbihhLGIpLCBhYnMoYi1hKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHNldFNlbFgoMCwgeERpbSk7XG5cblx0XHRcdFx0XHRpZiAobWF0Y2hpbmdZICYmIGRyYWdZKSB7XG5cdFx0XHRcdFx0XHRpZiAoc29yaSA9PSAxKSB7XG5cdFx0XHRcdFx0XHRcdHNPZmYgPSBsZWZ0O1xuXHRcdFx0XHRcdFx0XHRzRGltID0gd2lkdGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0c09mZiA9IHRvcDtcblx0XHRcdFx0XHRcdFx0c0RpbSA9IGhlaWdodDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c2MgPSBzY2FsZXNbeUtleV07XG5cblx0XHRcdFx0XHRcdGEgPSB2YWxUb1Bvc1koc1Bvc1RvVmFsKHNPZmYsIHlLZXlTcmMpLCAgICAgICAgc2MsIHlEaW0sIDApO1xuXHRcdFx0XHRcdFx0YiA9IHZhbFRvUG9zWShzUG9zVG9WYWwoc09mZiArIHNEaW0sIHlLZXlTcmMpLCBzYywgeURpbSwgMCk7XG5cblx0XHRcdFx0XHRcdHNldFNlbFkobWluKGEsYiksIGFicyhiLWEpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0c2V0U2VsWSgwLCB5RGltKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aGlkZVNlbGVjdCgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGxldCByYXdEWCA9IGFicyhyYXdNb3VzZUxlZnQxIC0gcmF3TW91c2VMZWZ0MCk7XG5cdFx0XHRcdGxldCByYXdEWSA9IGFicyhyYXdNb3VzZVRvcDEgLSByYXdNb3VzZVRvcDApO1xuXG5cdFx0XHRcdGlmIChzY2FsZVgub3JpID09IDEpIHtcblx0XHRcdFx0XHRsZXQgX3Jhd0RYID0gcmF3RFg7XG5cdFx0XHRcdFx0cmF3RFggPSByYXdEWTtcblx0XHRcdFx0XHRyYXdEWSA9IF9yYXdEWDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRyYWdYID0gZHJhZy54ICYmIHJhd0RYID49IGRyYWcuZGlzdDtcblx0XHRcdFx0ZHJhZ1kgPSBkcmFnLnkgJiYgcmF3RFkgPj0gZHJhZy5kaXN0O1xuXG5cdFx0XHRcdGxldCB1bmkgPSBkcmFnLnVuaTtcblxuXHRcdFx0XHRpZiAodW5pICE9IG51bGwpIHtcblx0XHRcdFx0XHQvLyBvbmx5IGNhbGMgZHJhZyBzdGF0dXMgaWYgdGhleSBwYXNzIHRoZSBkaXN0IHRocmVzaFxuXHRcdFx0XHRcdGlmIChkcmFnWCAmJiBkcmFnWSkge1xuXHRcdFx0XHRcdFx0ZHJhZ1ggPSByYXdEWCA+PSB1bmk7XG5cdFx0XHRcdFx0XHRkcmFnWSA9IHJhd0RZID49IHVuaTtcblxuXHRcdFx0XHRcdFx0Ly8gZm9yY2UgdW5pZGlyZWN0aW9uYWxpdHkgd2hlbiBib3RoIGFyZSB1bmRlciB1bmkgbGltaXRcblx0XHRcdFx0XHRcdGlmICghZHJhZ1ggJiYgIWRyYWdZKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChyYXdEWSA+IHJhd0RYKVxuXHRcdFx0XHRcdFx0XHRcdGRyYWdZID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdGRyYWdYID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoZHJhZy54ICYmIGRyYWcueSAmJiAoZHJhZ1ggfHwgZHJhZ1kpKVxuXHRcdFx0XHRcdC8vIGlmIG9tbmkgd2l0aCBubyB1bmkgdGhlbiBib3RoIGRyYWdYIC8gZHJhZ1kgc2hvdWxkIGJlIHRydWUgaWYgZWl0aGVyIGlzIHRydWVcblx0XHRcdFx0XHRkcmFnWCA9IGRyYWdZID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgcDAsIHAxO1xuXG5cdFx0XHRcdGlmIChkcmFnWCkge1xuXHRcdFx0XHRcdGlmIChzY2FsZVgub3JpID09IDApIHtcblx0XHRcdFx0XHRcdHAwID0gbW91c2VMZWZ0MDtcblx0XHRcdFx0XHRcdHAxID0gbW91c2VMZWZ0MTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRwMCA9IG1vdXNlVG9wMDtcblx0XHRcdFx0XHRcdHAxID0gbW91c2VUb3AxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNldFNlbFgobWluKHAwLCBwMSksIGFicyhwMSAtIHAwKSk7XG5cblx0XHRcdFx0XHRpZiAoIWRyYWdZKVxuXHRcdFx0XHRcdFx0c2V0U2VsWSgwLCB5RGltKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkcmFnWSkge1xuXHRcdFx0XHRcdGlmIChzY2FsZVgub3JpID09IDEpIHtcblx0XHRcdFx0XHRcdHAwID0gbW91c2VMZWZ0MDtcblx0XHRcdFx0XHRcdHAxID0gbW91c2VMZWZ0MTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRwMCA9IG1vdXNlVG9wMDtcblx0XHRcdFx0XHRcdHAxID0gbW91c2VUb3AxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNldFNlbFkobWluKHAwLCBwMSksIGFicyhwMSAtIHAwKSk7XG5cblx0XHRcdFx0XHRpZiAoIWRyYWdYKVxuXHRcdFx0XHRcdFx0c2V0U2VsWCgwLCB4RGltKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHRoZSBkcmFnIGRpZG4ndCBwYXNzIHRoZSBkaXN0IHJlcXVpcmVtZW50XG5cdFx0XHRcdGlmICghZHJhZ1ggJiYgIWRyYWdZKSB7XG5cdFx0XHRcdFx0c2V0U2VsWCgwLCAwKTtcblx0XHRcdFx0XHRzZXRTZWxZKDAsIDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZHJhZy5feCA9IGRyYWdYO1xuXHRcdGRyYWcuX3kgPSBkcmFnWTtcblxuXHRcdGlmIChzcmMgPT0gbnVsbCkge1xuXHRcdFx0aWYgKF9wdWIpIHtcblx0XHRcdFx0aWYgKHN5bmNLZXkgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGxldCBbeFN5bmNLZXksIHlTeW5jS2V5XSA9IHN5bmNPcHRzLnNjYWxlcztcblxuXHRcdFx0XHRcdHN5bmNPcHRzLnZhbHVlc1swXSA9IHhTeW5jS2V5ICE9IG51bGwgPyBwb3NUb1ZhbChzY2FsZVgub3JpID09IDAgPyBtb3VzZUxlZnQxIDogbW91c2VUb3AxLCB4U3luY0tleSkgOiBudWxsO1xuXHRcdFx0XHRcdHN5bmNPcHRzLnZhbHVlc1sxXSA9IHlTeW5jS2V5ICE9IG51bGwgPyBwb3NUb1ZhbChzY2FsZVgub3JpID09IDEgPyBtb3VzZUxlZnQxIDogbW91c2VUb3AxLCB5U3luY0tleSkgOiBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cHViU3luYyhtb3VzZW1vdmUsIHNlbGYsIG1vdXNlTGVmdDEsIG1vdXNlVG9wMSwgcGxvdFdpZENzcywgcGxvdEhndENzcywgaWR4KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGN1cnNvckZvY3VzKSB7XG5cdFx0XHRcdGxldCBzaG91bGRQdWIgPSBfcHViICYmIHN5bmNPcHRzLnNldFNlcmllcztcblx0XHRcdFx0bGV0IHAgPSBmb2N1cy5wcm94O1xuXG5cdFx0XHRcdGlmIChmb2N1c2VkU2VyaWVzID09IG51bGwpIHtcblx0XHRcdFx0XHRpZiAoY2xvc2VzdERpc3QgPD0gcClcblx0XHRcdFx0XHRcdHNldFNlcmllcyhjbG9zZXN0U2VyaWVzLCBGT0NVU19UUlVFLCB0cnVlLCBzaG91bGRQdWIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmIChjbG9zZXN0RGlzdCA+IHApXG5cdFx0XHRcdFx0XHRzZXRTZXJpZXMobnVsbCwgRk9DVVNfVFJVRSwgdHJ1ZSwgc2hvdWxkUHViKTtcblx0XHRcdFx0XHRlbHNlIGlmIChjbG9zZXN0U2VyaWVzICE9IGZvY3VzZWRTZXJpZXMpXG5cdFx0XHRcdFx0XHRzZXRTZXJpZXMoY2xvc2VzdFNlcmllcywgRk9DVVNfVFJVRSwgdHJ1ZSwgc2hvdWxkUHViKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzaG91bGRTZXRMZWdlbmQpIHtcblx0XHRcdGxlZ2VuZC5pZHggPSBpZHg7XG5cdFx0XHRzZXRMZWdlbmQoKTtcblx0XHR9XG5cblx0XHRfZmlyZSAhPT0gZmFsc2UgJiYgZmlyZShcInNldEN1cnNvclwiKTtcblx0fVxuXG5cdGxldCByZWN0ID0gbnVsbDtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgJ3JlY3QnLCB7XG5cdFx0Z2V0KCkge1xuXHRcdFx0aWYgKHJlY3QgPT0gbnVsbClcblx0XHRcdFx0c3luY1JlY3QoZmFsc2UpO1xuXG5cdFx0XHRyZXR1cm4gcmVjdDtcblx0XHR9LFxuXHR9KTtcblxuXHRmdW5jdGlvbiBzeW5jUmVjdChkZWZlciA9IGZhbHNlKSB7XG5cdFx0aWYgKGRlZmVyKVxuXHRcdFx0cmVjdCA9IG51bGw7XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZWN0ID0gb3Zlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdGZpcmUoXCJzeW5jUmVjdFwiLCByZWN0KTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBtb3VzZU1vdmUoZSwgc3JjLCBfbCwgX3QsIF93LCBfaCwgX2kpIHtcblx0XHRpZiAoY3Vyc29yLl9sb2NrKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Ly8gQ2hyb21lIG9uIFdpbmRvd3MgaGFzIGEgYnVnIHdoaWNoIHRyaWdnZXJzIGEgc3RyYXkgbW91c2Vtb3ZlIGV2ZW50IGFmdGVyIGFuIGluaXRpYWwgbW91c2Vkb3duIGV2ZW50XG5cdFx0Ly8gd2hlbiBjbGlja2luZyBpbnRvIGEgcGxvdCBhcyBwYXJ0IG9mIHJlLWZvY3VzaW5nIHRoZSBicm93c2VyIHdpbmRvdy5cblx0XHQvLyB3ZSBnb3R0YSBpZ25vcmUgaXQgdG8gYXZvaWQgdHJpZ2dlcmluZyBhIHBoYW50b20gZHJhZyAvIHNldFNlbGVjdFxuXHRcdC8vIEhvd2V2ZXIsIG9uIHRvdWNoLW9ubHkgZGV2aWNlcyBDaHJvbWUtYmFzZWQgYnJvd3NlcnMgdHJpZ2dlciBhIDAtZGlzdGFuY2UgbW91c2Vtb3ZlIGJlZm9yZSBtb3VzZWRvd25cblx0XHQvLyBzbyB3ZSBkb24ndCBpZ25vcmUgaXQgd2hlbiBtb3VzZWRvd24gaGFzIHNldCB0aGUgZHJhZ2dpbmcgZmxhZ1xuXHRcdGlmIChkcmFnZ2luZyAmJiBlICE9IG51bGwgJiYgZS5tb3ZlbWVudFggPT0gMCAmJiBlLm1vdmVtZW50WSA9PSAwKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FjaGVNb3VzZShlLCBzcmMsIF9sLCBfdCwgX3csIF9oLCBfaSwgZmFsc2UsIGUgIT0gbnVsbCk7XG5cblx0XHRpZiAoZSAhPSBudWxsKVxuXHRcdFx0dXBkYXRlQ3Vyc29yKG51bGwsIHRydWUsIHRydWUpO1xuXHRcdGVsc2Vcblx0XHRcdHVwZGF0ZUN1cnNvcihzcmMsIHRydWUsIGZhbHNlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhY2hlTW91c2UoZSwgc3JjLCBfbCwgX3QsIF93LCBfaCwgX2ksIGluaXRpYWwsIHNuYXApIHtcblx0XHRpZiAocmVjdCA9PSBudWxsKVxuXHRcdFx0c3luY1JlY3QoZmFsc2UpO1xuXG5cdFx0c2V0Q3Vyc29yRXZlbnQoZSk7XG5cblx0XHRpZiAoZSAhPSBudWxsKSB7XG5cdFx0XHRfbCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcblx0XHRcdF90ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKF9sIDwgMCB8fCBfdCA8IDApIHtcblx0XHRcdFx0bW91c2VMZWZ0MSA9IC0xMDtcblx0XHRcdFx0bW91c2VUb3AxID0gLTEwO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxldCBbeEtleSwgeUtleV0gPSBzeW5jT3B0cy5zY2FsZXM7XG5cblx0XHRcdGxldCBzeW5jT3B0c1NyYyA9IHNyYy5jdXJzb3Iuc3luYztcblx0XHRcdGxldCBbeFZhbFNyYywgeVZhbFNyY10gPSBzeW5jT3B0c1NyYy52YWx1ZXM7XG5cdFx0XHRsZXQgW3hLZXlTcmMsIHlLZXlTcmNdID0gc3luY09wdHNTcmMuc2NhbGVzO1xuXHRcdFx0bGV0IFttYXRjaFhLZXlzLCBtYXRjaFlLZXlzXSA9IHN5bmNPcHRzLm1hdGNoO1xuXG5cdFx0XHRsZXQgcm90U3JjID0gc3JjLmF4ZXNbMF0uc2lkZSAlIDIgPT0gMTtcblxuXHRcdFx0bGV0IHhEaW0gPSBzY2FsZVgub3JpID09IDAgPyBwbG90V2lkQ3NzIDogcGxvdEhndENzcyxcblx0XHRcdFx0eURpbSA9IHNjYWxlWC5vcmkgPT0gMSA/IHBsb3RXaWRDc3MgOiBwbG90SGd0Q3NzLFxuXHRcdFx0XHRfeERpbSA9IHJvdFNyYyA/IF9oIDogX3csXG5cdFx0XHRcdF95RGltID0gcm90U3JjID8gX3cgOiBfaCxcblx0XHRcdFx0X3hQb3MgPSByb3RTcmMgPyBfdCA6IF9sLFxuXHRcdFx0XHRfeVBvcyA9IHJvdFNyYyA/IF9sIDogX3Q7XG5cblx0XHRcdGlmICh4S2V5U3JjICE9IG51bGwpXG5cdFx0XHRcdF9sID0gbWF0Y2hYS2V5cyh4S2V5LCB4S2V5U3JjKSA/IGdldFBvcyh4VmFsU3JjLCBzY2FsZXNbeEtleV0sIHhEaW0sIDApIDogLTEwO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRfbCA9IHhEaW0gKiAoX3hQb3MvX3hEaW0pO1xuXG5cdFx0XHRpZiAoeUtleVNyYyAhPSBudWxsKVxuXHRcdFx0XHRfdCA9IG1hdGNoWUtleXMoeUtleSwgeUtleVNyYykgPyBnZXRQb3MoeVZhbFNyYywgc2NhbGVzW3lLZXldLCB5RGltLCAwKSA6IC0xMDtcblx0XHRcdGVsc2Vcblx0XHRcdFx0X3QgPSB5RGltICogKF95UG9zL195RGltKTtcblxuXHRcdFx0aWYgKHNjYWxlWC5vcmkgPT0gMSkge1xuXHRcdFx0XHRsZXQgX19sID0gX2w7XG5cdFx0XHRcdF9sID0gX3Q7XG5cdFx0XHRcdF90ID0gX19sO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzbmFwICYmIChzcmMgPT0gbnVsbCB8fCBzcmMuY3Vyc29yLmV2ZW50LnR5cGUgPT0gbW91c2Vtb3ZlKSkge1xuXHRcdFx0aWYgKF9sIDw9IDEgfHwgX2wgPj0gcGxvdFdpZENzcyAtIDEpXG5cdFx0XHRcdF9sID0gaW5jclJvdW5kKF9sLCBwbG90V2lkQ3NzKTtcblxuXHRcdFx0aWYgKF90IDw9IDEgfHwgX3QgPj0gcGxvdEhndENzcyAtIDEpXG5cdFx0XHRcdF90ID0gaW5jclJvdW5kKF90LCBwbG90SGd0Q3NzKTtcblx0XHR9XG5cblx0XHRpZiAoaW5pdGlhbCkge1xuXHRcdFx0cmF3TW91c2VMZWZ0MCA9IF9sO1xuXHRcdFx0cmF3TW91c2VUb3AwID0gX3Q7XG5cblx0XHRcdFttb3VzZUxlZnQwLCBtb3VzZVRvcDBdID0gY3Vyc29yLm1vdmUoc2VsZiwgX2wsIF90KTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRtb3VzZUxlZnQxID0gX2w7XG5cdFx0XHRtb3VzZVRvcDEgPSBfdDtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBfaGlkZVByb3BzID0ge1xuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHRvcDogMCxcblx0fTtcblxuXHRmdW5jdGlvbiBoaWRlU2VsZWN0KCkge1xuXHRcdHNldFNlbGVjdChfaGlkZVByb3BzLCBmYWxzZSk7XG5cdH1cblxuXHRsZXQgZG93blNlbGVjdExlZnQ7XG5cdGxldCBkb3duU2VsZWN0VG9wO1xuXHRsZXQgZG93blNlbGVjdFdpZHRoO1xuXHRsZXQgZG93blNlbGVjdEhlaWdodDtcblxuXHRmdW5jdGlvbiBtb3VzZURvd24oZSwgc3JjLCBfbCwgX3QsIF93LCBfaCwgX2kpIHtcblx0XHRkcmFnZ2luZyA9IHRydWU7XG5cdFx0ZHJhZ1ggPSBkcmFnWSA9IGRyYWcuX3ggPSBkcmFnLl95ID0gZmFsc2U7XG5cblx0XHRjYWNoZU1vdXNlKGUsIHNyYywgX2wsIF90LCBfdywgX2gsIF9pLCB0cnVlLCBmYWxzZSk7XG5cblx0XHRpZiAoZSAhPSBudWxsKSB7XG5cdFx0XHRvbk1vdXNlKG1vdXNldXAsIGRvYywgbW91c2VVcCwgZmFsc2UpO1xuXHRcdFx0cHViU3luYyhtb3VzZWRvd24sIHNlbGYsIG1vdXNlTGVmdDAsIG1vdXNlVG9wMCwgcGxvdFdpZENzcywgcGxvdEhndENzcywgbnVsbCk7XG5cdFx0fVxuXG5cdFx0bGV0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBzZWxlY3Q7XG5cblx0XHRkb3duU2VsZWN0TGVmdCAgID0gbGVmdDtcblx0XHRkb3duU2VsZWN0VG9wICAgID0gdG9wO1xuXHRcdGRvd25TZWxlY3RXaWR0aCAgPSB3aWR0aDtcblx0XHRkb3duU2VsZWN0SGVpZ2h0ID0gaGVpZ2h0O1xuXG5cdC8vXHRoaWRlU2VsZWN0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBtb3VzZVVwKGUsIHNyYywgX2wsIF90LCBfdywgX2gsIF9pKSB7XG5cdFx0ZHJhZ2dpbmcgPSBkcmFnLl94ID0gZHJhZy5feSA9IGZhbHNlO1xuXG5cdFx0Y2FjaGVNb3VzZShlLCBzcmMsIF9sLCBfdCwgX3csIF9oLCBfaSwgZmFsc2UsIHRydWUpO1xuXG5cdFx0bGV0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBzZWxlY3Q7XG5cblx0XHRsZXQgaGFzU2VsZWN0ID0gd2lkdGggPiAwIHx8IGhlaWdodCA+IDA7XG5cdFx0bGV0IGNoZ1NlbGVjdCA9IChcblx0XHRcdGRvd25TZWxlY3RMZWZ0ICAgIT0gbGVmdCAgIHx8XG5cdFx0XHRkb3duU2VsZWN0VG9wICAgICE9IHRvcCAgICB8fFxuXHRcdFx0ZG93blNlbGVjdFdpZHRoICAhPSB3aWR0aCAgfHxcblx0XHRcdGRvd25TZWxlY3RIZWlnaHQgIT0gaGVpZ2h0XG5cdFx0KTtcblxuXHRcdGhhc1NlbGVjdCAmJiBjaGdTZWxlY3QgJiYgc2V0U2VsZWN0KHNlbGVjdCk7XG5cblx0XHRpZiAoZHJhZy5zZXRTY2FsZSAmJiBoYXNTZWxlY3QgJiYgY2hnU2VsZWN0KSB7XG5cdFx0Ly9cdGlmIChzeW5jS2V5ICE9IG51bGwpIHtcblx0XHQvL1x0XHRkcmFnWCA9IGRyYWcueDtcblx0XHQvL1x0XHRkcmFnWSA9IGRyYWcueTtcblx0XHQvL1x0fVxuXG5cdFx0XHRsZXQgeE9mZiA9IGxlZnQsXG5cdFx0XHRcdHhEaW0gPSB3aWR0aCxcblx0XHRcdFx0eU9mZiA9IHRvcCxcblx0XHRcdFx0eURpbSA9IGhlaWdodDtcblxuXHRcdFx0aWYgKHNjYWxlWC5vcmkgPT0gMSkge1xuXHRcdFx0XHR4T2ZmID0gdG9wLFxuXHRcdFx0XHR4RGltID0gaGVpZ2h0LFxuXHRcdFx0XHR5T2ZmID0gbGVmdCxcblx0XHRcdFx0eURpbSA9IHdpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZHJhZ1gpIHtcblx0XHRcdFx0X3NldFNjYWxlKHhTY2FsZUtleSxcblx0XHRcdFx0XHRwb3NUb1ZhbCh4T2ZmLCB4U2NhbGVLZXkpLFxuXHRcdFx0XHRcdHBvc1RvVmFsKHhPZmYgKyB4RGltLCB4U2NhbGVLZXkpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkcmFnWSkge1xuXHRcdFx0XHRmb3IgKGxldCBrIGluIHNjYWxlcykge1xuXHRcdFx0XHRcdGxldCBzYyA9IHNjYWxlc1trXTtcblxuXHRcdFx0XHRcdGlmIChrICE9IHhTY2FsZUtleSAmJiBzYy5mcm9tID09IG51bGwgJiYgc2MubWluICE9IGluZikge1xuXHRcdFx0XHRcdFx0X3NldFNjYWxlKGssXG5cdFx0XHRcdFx0XHRcdHBvc1RvVmFsKHlPZmYgKyB5RGltLCBrKSxcblx0XHRcdFx0XHRcdFx0cG9zVG9WYWwoeU9mZiwgaylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGhpZGVTZWxlY3QoKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoY3Vyc29yLmxvY2spIHtcblx0XHRcdGN1cnNvci5fbG9jayA9ICFjdXJzb3IuX2xvY2s7XG5cdFx0XHR1cGRhdGVDdXJzb3Ioc3JjLCB0cnVlLCBlICE9IG51bGwpO1xuXHRcdH1cblxuXHRcdGlmIChlICE9IG51bGwpIHtcblx0XHRcdG9mZk1vdXNlKG1vdXNldXAsIGRvYyk7XG5cdFx0XHRwdWJTeW5jKG1vdXNldXAsIHNlbGYsIG1vdXNlTGVmdDEsIG1vdXNlVG9wMSwgcGxvdFdpZENzcywgcGxvdEhndENzcywgbnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbW91c2VMZWF2ZShlLCBzcmMsIF9sLCBfdCwgX3csIF9oLCBfaSkge1xuXHRcdGlmIChjdXJzb3IuX2xvY2spXG5cdFx0XHRyZXR1cm47XG5cblx0XHRzZXRDdXJzb3JFdmVudChlKTtcblxuXHRcdGxldCBfZHJhZ2dpbmcgPSBkcmFnZ2luZztcblxuXHRcdGlmIChkcmFnZ2luZykge1xuXHRcdFx0Ly8gaGFuZGxlIGNhc2Ugd2hlbiBtb3VzZW1vdmUgYXJlbid0IGZpcmVkIGFsbCB0aGUgd2F5IHRvIGVkZ2VzIGJ5IGJyb3dzZXJcblx0XHRcdGxldCBzbmFwSCA9IHRydWU7XG5cdFx0XHRsZXQgc25hcFYgPSB0cnVlO1xuXHRcdFx0bGV0IHNuYXBQcm94ID0gMTA7XG5cblx0XHRcdGxldCBkcmFnSCwgZHJhZ1Y7XG5cblx0XHRcdGlmIChzY2FsZVgub3JpID09IDApIHtcblx0XHRcdFx0ZHJhZ0ggPSBkcmFnWDtcblx0XHRcdFx0ZHJhZ1YgPSBkcmFnWTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRkcmFnSCA9IGRyYWdZO1xuXHRcdFx0XHRkcmFnViA9IGRyYWdYO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZHJhZ0ggJiYgZHJhZ1YpIHtcblx0XHRcdFx0Ly8gbWF5YmUgb21uaSBjb3JuZXIgc25hcFxuXHRcdFx0XHRzbmFwSCA9IG1vdXNlTGVmdDEgPD0gc25hcFByb3ggfHwgbW91c2VMZWZ0MSA+PSBwbG90V2lkQ3NzIC0gc25hcFByb3g7XG5cdFx0XHRcdHNuYXBWID0gbW91c2VUb3AxICA8PSBzbmFwUHJveCB8fCBtb3VzZVRvcDEgID49IHBsb3RIZ3RDc3MgLSBzbmFwUHJveDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRyYWdIICYmIHNuYXBIKVxuXHRcdFx0XHRtb3VzZUxlZnQxID0gbW91c2VMZWZ0MSA8IG1vdXNlTGVmdDAgPyAwIDogcGxvdFdpZENzcztcblxuXHRcdFx0aWYgKGRyYWdWICYmIHNuYXBWKVxuXHRcdFx0XHRtb3VzZVRvcDEgPSBtb3VzZVRvcDEgPCBtb3VzZVRvcDAgPyAwIDogcGxvdEhndENzcztcblxuXHRcdFx0dXBkYXRlQ3Vyc29yKG51bGwsIHRydWUsIHRydWUpO1xuXG5cdFx0XHRkcmFnZ2luZyA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdG1vdXNlTGVmdDEgPSAtMTA7XG5cdFx0bW91c2VUb3AxID0gLTEwO1xuXG5cdFx0YWN0aXZlSWR4cy5maWxsKG51bGwpO1xuXG5cdFx0Ly8gcGFzc2luZyBhIG5vbi1udWxsIHRpbWVzdGFtcCB0byBmb3JjZSBzeW5jL21vdXNlbW92ZSBldmVudFxuXHRcdHVwZGF0ZUN1cnNvcihudWxsLCB0cnVlLCB0cnVlKTtcblxuXHRcdGlmIChfZHJhZ2dpbmcpXG5cdFx0XHRkcmFnZ2luZyA9IF9kcmFnZ2luZztcblx0fVxuXG5cdGZ1bmN0aW9uIGRibENsaWNrKGUsIHNyYywgX2wsIF90LCBfdywgX2gsIF9pKSB7XG5cdFx0aWYgKGN1cnNvci5fbG9jaylcblx0XHRcdHJldHVybjtcblxuXHRcdHNldEN1cnNvckV2ZW50KGUpO1xuXG5cdFx0YXV0b1NjYWxlWCgpO1xuXG5cdFx0aGlkZVNlbGVjdCgpO1xuXG5cdFx0aWYgKGUgIT0gbnVsbClcblx0XHRcdHB1YlN5bmMoZGJsY2xpY2ssIHNlbGYsIG1vdXNlTGVmdDEsIG1vdXNlVG9wMSwgcGxvdFdpZENzcywgcGxvdEhndENzcywgbnVsbCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzeW5jUHhSYXRpbygpIHtcblx0XHRheGVzLmZvckVhY2goc3luY0ZvbnRTaXplKTtcblx0XHRfc2V0U2l6ZShzZWxmLndpZHRoLCBzZWxmLmhlaWdodCwgdHJ1ZSk7XG5cdH1cblxuXHRvbihkcHB4Y2hhbmdlLCB3aW4sIHN5bmNQeFJhdGlvKTtcblxuXHQvLyBpbnRlcm5hbCBwdWIvc3ViXG5cdGNvbnN0IGV2ZW50cyA9IHt9O1xuXG5cdGV2ZW50cy5tb3VzZWRvd24gPSBtb3VzZURvd247XG5cdGV2ZW50cy5tb3VzZW1vdmUgPSBtb3VzZU1vdmU7XG5cdGV2ZW50cy5tb3VzZXVwID0gbW91c2VVcDtcblx0ZXZlbnRzLmRibGNsaWNrID0gZGJsQ2xpY2s7XG5cdGV2ZW50c1tcInNldFNlcmllc1wiXSA9IChlLCBzcmMsIGlkeCwgb3B0cykgPT4ge1xuXHRcdGxldCBzZXJpZXNJZHhNYXRjaGVyID0gc3luY09wdHMubWF0Y2hbMl07XG5cdFx0aWR4ID0gc2VyaWVzSWR4TWF0Y2hlcihzZWxmLCBzcmMsIGlkeCk7XG5cdFx0aWR4ICE9IC0xICYmIHNldFNlcmllcyhpZHgsIG9wdHMsIHRydWUsIGZhbHNlKTtcblx0fTtcblxuXHRpZiAoc2hvd0N1cnNvcikge1xuXHRcdG9uTW91c2UobW91c2Vkb3duLCAgb3ZlciwgbW91c2VEb3duKTtcblx0XHRvbk1vdXNlKG1vdXNlbW92ZSwgIG92ZXIsIG1vdXNlTW92ZSk7XG5cdFx0b25Nb3VzZShtb3VzZWVudGVyLCBvdmVyLCBlID0+IHtcblx0XHRcdHNldEN1cnNvckV2ZW50KGUpO1xuXHRcdFx0c3luY1JlY3QoZmFsc2UpO1xuXHRcdH0pO1xuXHRcdG9uTW91c2UobW91c2VsZWF2ZSwgb3ZlciwgbW91c2VMZWF2ZSk7XG5cblx0XHRvbk1vdXNlKGRibGNsaWNrLCBvdmVyLCBkYmxDbGljayk7XG5cblx0XHRjdXJzb3JQbG90cy5hZGQoc2VsZik7XG5cblx0XHRzZWxmLnN5bmNSZWN0ID0gc3luY1JlY3Q7XG5cdH1cblxuXHQvLyBleHRlcm5hbCBvbi9vZmZcblx0Y29uc3QgaG9va3MgPSBzZWxmLmhvb2tzID0gb3B0cy5ob29rcyB8fCB7fTtcblxuXHRmdW5jdGlvbiBmaXJlKGV2TmFtZSwgYTEsIGEyKSB7XG5cdFx0aWYgKGRlZmVySG9va3MpXG5cdFx0XHRob29rc1F1ZXVlLnB1c2goW2V2TmFtZSwgYTEsIGEyXSk7XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoZXZOYW1lIGluIGhvb2tzKSB7XG5cdFx0XHRcdGhvb2tzW2V2TmFtZV0uZm9yRWFjaChmbiA9PiB7XG5cdFx0XHRcdFx0Zm4uY2FsbChudWxsLCBzZWxmLCBhMSwgYTIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQob3B0cy5wbHVnaW5zIHx8IFtdKS5mb3JFYWNoKHAgPT4ge1xuXHRcdGZvciAobGV0IGV2TmFtZSBpbiBwLmhvb2tzKVxuXHRcdFx0aG9va3NbZXZOYW1lXSA9IChob29rc1tldk5hbWVdIHx8IFtdKS5jb25jYXQocC5ob29rc1tldk5hbWVdKTtcblx0fSk7XG5cblx0Y29uc3Qgc2VyaWVzSWR4TWF0Y2hlciA9IChzZWxmLCBzcmMsIHNyY1Nlcmllc0lkeCkgPT4gc3JjU2VyaWVzSWR4O1xuXG5cdGNvbnN0IHN5bmNPcHRzID0gYXNzaWduKHtcblx0XHRrZXk6IG51bGwsXG5cdFx0c2V0U2VyaWVzOiBmYWxzZSxcblx0XHRmaWx0ZXJzOiB7XG5cdFx0XHRwdWI6IHJldFRydWUsXG5cdFx0XHRzdWI6IHJldFRydWUsXG5cdFx0fSxcblx0XHRzY2FsZXM6IFt4U2NhbGVLZXksIHNlcmllc1sxXSA/IHNlcmllc1sxXS5zY2FsZSA6IG51bGxdLFxuXHRcdG1hdGNoOiBbcmV0RXEsIHJldEVxLCBzZXJpZXNJZHhNYXRjaGVyXSxcblx0XHR2YWx1ZXM6IFtudWxsLCBudWxsXSxcblx0fSwgY3Vyc29yLnN5bmMpO1xuXG5cdGlmIChzeW5jT3B0cy5tYXRjaC5sZW5ndGggPT0gMilcblx0XHRzeW5jT3B0cy5tYXRjaC5wdXNoKHNlcmllc0lkeE1hdGNoZXIpO1xuXG5cdGN1cnNvci5zeW5jID0gc3luY09wdHM7XG5cblx0Y29uc3Qgc3luY0tleSA9IHN5bmNPcHRzLmtleTtcblxuXHRjb25zdCBzeW5jID0gX3N5bmMoc3luY0tleSk7XG5cblx0ZnVuY3Rpb24gcHViU3luYyh0eXBlLCBzcmMsIHgsIHksIHcsIGgsIGkpIHtcblx0XHRpZiAoc3luY09wdHMuZmlsdGVycy5wdWIodHlwZSwgc3JjLCB4LCB5LCB3LCBoLCBpKSlcblx0XHRcdHN5bmMucHViKHR5cGUsIHNyYywgeCwgeSwgdywgaCwgaSk7XG5cdH1cblxuXHRzeW5jLnN1YihzZWxmKTtcblxuXHRmdW5jdGlvbiBwdWIodHlwZSwgc3JjLCB4LCB5LCB3LCBoLCBpKSB7XG5cdFx0aWYgKHN5bmNPcHRzLmZpbHRlcnMuc3ViKHR5cGUsIHNyYywgeCwgeSwgdywgaCwgaSkpXG5cdFx0XHRldmVudHNbdHlwZV0obnVsbCwgc3JjLCB4LCB5LCB3LCBoLCBpKTtcblx0fVxuXG5cdHNlbGYucHViID0gcHViO1xuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0c3luYy51bnN1YihzZWxmKTtcblx0XHRjdXJzb3JQbG90cy5kZWxldGUoc2VsZik7XG5cdFx0bW91c2VMaXN0ZW5lcnMuY2xlYXIoKTtcblx0XHRvZmYoZHBweGNoYW5nZSwgd2luLCBzeW5jUHhSYXRpbyk7XG5cdFx0cm9vdC5yZW1vdmUoKTtcblx0XHRsZWdlbmRUYWJsZT8ucmVtb3ZlKCk7IC8vIGluIGNhc2UgbW91bnRlZCBvdXRzaWRlIG9mIHJvb3Rcblx0XHRmaXJlKFwiZGVzdHJveVwiKTtcblx0fVxuXG5cdHNlbGYuZGVzdHJveSA9IGRlc3Ryb3k7XG5cblx0ZnVuY3Rpb24gX2luaXQoKSB7XG5cdFx0ZmlyZShcImluaXRcIiwgb3B0cywgZGF0YSk7XG5cblx0XHRzZXREYXRhKGRhdGEgfHwgb3B0cy5kYXRhLCBmYWxzZSk7XG5cblx0XHRpZiAocGVuZFNjYWxlc1t4U2NhbGVLZXldKVxuXHRcdFx0c2V0U2NhbGUoeFNjYWxlS2V5LCBwZW5kU2NhbGVzW3hTY2FsZUtleV0pO1xuXHRcdGVsc2Vcblx0XHRcdGF1dG9TY2FsZVgoKTtcblxuXHRcdHNob3VsZFNldFNlbGVjdCA9IHNlbGVjdC5zaG93ICYmIChzZWxlY3Qud2lkdGggPiAwIHx8IHNlbGVjdC5oZWlnaHQgPiAwKTtcblx0XHRzaG91bGRTZXRDdXJzb3IgPSBzaG91bGRTZXRMZWdlbmQgPSB0cnVlO1xuXG5cdFx0X3NldFNpemUob3B0cy53aWR0aCwgb3B0cy5oZWlnaHQpO1xuXHR9XG5cblx0c2VyaWVzLmZvckVhY2goaW5pdFNlcmllcyk7XG5cblx0YXhlcy5mb3JFYWNoKGluaXRBeGlzKTtcblxuXHRpZiAodGhlbikge1xuXHRcdGlmICh0aGVuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdHRoZW4uYXBwZW5kQ2hpbGQocm9vdCk7XG5cdFx0XHRfaW5pdCgpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHR0aGVuKHNlbGYsIF9pbml0KTtcblx0fVxuXHRlbHNlXG5cdFx0X2luaXQoKTtcblxuXHRyZXR1cm4gc2VsZjtcbn1cblxudVBsb3QuYXNzaWduID0gYXNzaWduO1xudVBsb3QuZm10TnVtID0gZm10TnVtO1xudVBsb3QucmFuZ2VOdW0gPSByYW5nZU51bTtcbnVQbG90LnJhbmdlTG9nID0gcmFuZ2VMb2c7XG51UGxvdC5yYW5nZUFzaW5oID0gcmFuZ2VBc2luaDtcbnVQbG90Lm9yaWVudCAgID0gb3JpZW50O1xudVBsb3QucHhSYXRpbyA9IHB4UmF0aW87XG5cbntcblx0dVBsb3Quam9pbiA9IGpvaW47XG59XG5cbntcblx0dVBsb3QuZm10RGF0ZSA9IGZtdERhdGU7XG5cdHVQbG90LnR6RGF0ZSAgPSB0ekRhdGU7XG59XG5cbnVQbG90LnN5bmMgPSBfc3luYztcblxue1xuXHR1UGxvdC5hZGRHYXAgPSBhZGRHYXA7XG5cdHVQbG90LmNsaXBHYXBzID0gY2xpcEdhcHM7XG5cblx0bGV0IHBhdGhzID0gdVBsb3QucGF0aHMgPSB7XG5cdFx0cG9pbnRzLFxuXHR9O1xuXG5cdChwYXRocy5saW5lYXIgID0gbGluZWFyKTtcblx0KHBhdGhzLnN0ZXBwZWQgPSBzdGVwcGVkKTtcblx0KHBhdGhzLmJhcnMgICAgPSBiYXJzKTtcblx0KHBhdGhzLnNwbGluZSAgPSBtb25vdG9uZUN1YmljKTtcbn1cblxuZXhwb3J0IHsgdVBsb3QgYXMgZGVmYXVsdCB9O1xuIiwgImltcG9ydCB7IHJlbmRlciwgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnaHRtL3ByZWFjdCc7XG5pbXBvcnQgdVBsb3QgZnJvbSAndXBsb3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFQSSBjbGllbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBwYXRoUGFydHM6IFsnZGFzaGJvYXJkJ10gZm9yIC9kYXNoYm9hcmQvLCBbJ2Rhc2hib2FyZCcsICdteS1zbHVnJ10gZm9yIC9kYXNoYm9hcmQvbXktc2x1Zy9cbmNvbnN0IHBhdGhQYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKTtcbmNvbnN0IHNsdWcgPSBwYXRoUGFydHMubGVuZ3RoID4gMSA/IHBhdGhQYXJ0c1sxXSA6ICcnO1xuY29uc3QgaXNIb21lID0gc2x1ZyA9PT0gJyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFwaUZldGNoKHBhdGgsIG9wdHMgPSB7fSkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwYXRoLCB7XG4gICAgLi4ub3B0cyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIC4uLihvcHRzLmhlYWRlcnMgfHwge30pIH0sXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pO1xuICBpZiAoIXJlcy5vaykge1xuICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQvbG9naW4nO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXNzaW9uIGV4cGlyZWQnKTtcbiAgICB9XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHt9KSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGJvZHkuZGV0YWlsIHx8IGBIVFRQICR7cmVzLnN0YXR1c31gKTtcbiAgfVxuICBpZiAocmVzLnN0YXR1cyA9PT0gMjA0KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5cbmNvbnN0IGFwaSA9IHtcbiAgZ2V0U3RhdHM6ICgpID0+IGFwaUZldGNoKGAvZGFzaGJvYXJkL2FwaS8ke3NsdWd9L3N0YXRzYCksXG4gIGdldFRpbWVzZXJpZXM6IChkYXlzID0gMzApID0+IGFwaUZldGNoKGAvZGFzaGJvYXJkL2FwaS8ke3NsdWd9L3RpbWVzZXJpZXM/ZGF5cz0ke2RheXN9YCksXG4gIGdldExlYWRlcmJvYXJkOiAoKSA9PiBhcGlGZXRjaChgL2Rhc2hib2FyZC9hcGkvJHtzbHVnfS9sZWFkZXJib2FyZGApLFxuXG4gIGxpc3RTaWdudXBzOiAocGFyYW1zKSA9PiB7XG4gICAgY29uc3QgcSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpO1xuICAgIHJldHVybiBhcGlGZXRjaChgL2Rhc2hib2FyZC9hcGkvJHtzbHVnfS9zaWdudXBzPyR7cX1gKTtcbiAgfSxcblxuICBsaXN0V2ViaG9va3M6ICgpID0+IGFwaUZldGNoKGAvZGFzaGJvYXJkL2FwaS8ke3NsdWd9L3dlYmhvb2tzYCksXG4gIGNyZWF0ZVdlYmhvb2s6IChib2R5KSA9PiBhcGlGZXRjaChgL2Rhc2hib2FyZC9hcGkvJHtzbHVnfS93ZWJob29rc2AsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH0pLFxuICBkZWxldGVXZWJob29rOiAoaWQpID0+IGFwaUZldGNoKGAvZGFzaGJvYXJkL2FwaS8ke3NsdWd9L3dlYmhvb2tzLyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pLFxuICBsaXN0RGVsaXZlcmllczogKCkgPT4gYXBpRmV0Y2goYC9kYXNoYm9hcmQvYXBpLyR7c2x1Z30vZGVsaXZlcmllc2ApLFxuXG4gIGdldFNldHRpbmdzOiAoKSA9PiBhcGlGZXRjaChgL2Rhc2hib2FyZC9hcGkvJHtzbHVnfS9zZXR0aW5nc2ApLFxuICB1cGRhdGVTZXR0aW5nczogKGJvZHkpID0+IGFwaUZldGNoKGAvZGFzaGJvYXJkL2FwaS8ke3NsdWd9L3NldHRpbmdzYCwgeyBtZXRob2Q6ICdQQVRDSCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpIH0pLFxuICBpbnZpdGVUb3BOOiAoY291bnQpID0+IGFwaUZldGNoKGAvZGFzaGJvYXJkL2FwaS8ke3NsdWd9L2ludml0ZWAsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY291bnQgfSkgfSksXG4gIGxpc3RJbnZpdGVkOiAocGFyYW1zID0ge30pID0+IGFwaUZldGNoKGAvZGFzaGJvYXJkL2FwaS8ke3NsdWd9L2ludml0ZWQ/YCArIG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKS50b1N0cmluZygpKSxcblxuICBsaXN0QVBJS2V5czogKCkgPT4gYXBpRmV0Y2goYC9kYXNoYm9hcmQvYXBpLyR7c2x1Z30vYXBpLWtleXNgKSxcbiAgY3JlYXRlQVBJS2V5OiAobmFtZTogc3RyaW5nKSA9PiBhcGlGZXRjaChgL2Rhc2hib2FyZC9hcGkvJHtzbHVnfS9hcGkta2V5c2AsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSB9KSB9KSxcbiAgcmV2b2tlQVBJS2V5OiAoaWQ6IHN0cmluZykgPT4gYXBpRmV0Y2goYC9kYXNoYm9hcmQvYXBpLyR7c2x1Z30vYXBpLWtleXMvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSksXG59O1xuXG5jb25zdCBhY2NvdW50QXBpID0ge1xuICBsaXN0Q2FtcGFpZ25zOiAoKSA9PiBhcGlGZXRjaCgnL2Rhc2hib2FyZC9hcGkvY2FtcGFpZ25zJyksXG4gIGNyZWF0ZUNhbXBhaWduOiAobmFtZSwgcHJvZHVjdFVSTCkgPT4gYXBpRmV0Y2goJy9kYXNoYm9hcmQvYXBpL2NhbXBhaWducycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIHByb2R1Y3RfdXJsOiBwcm9kdWN0VVJMIH0pLFxuICB9KSxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGVscGVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIEVtYmVkQ29kZSh7IHNuaXBwZXQgfTogeyBzbmlwcGV0OiBzdHJpbmcgfSkge1xuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBmdW5jdGlvbiBjb3B5KCkge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNuaXBwZXQpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0Q29waWVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCAyMDAwKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwiYXBpLWtleS1kaXNwbGF5XCI+XG4gICAgICA8Y29kZSBjbGFzcz1cImFwaS1rZXktbW9ub1wiIHN0eWxlPVwid29yZC1icmVhazpicmVhay1hbGw7d2hpdGUtc3BhY2U6cHJlLXdyYXA7Zm9udC1zaXplOjEycHhcIj4ke3NuaXBwZXR9PC9jb2RlPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIG9uQ2xpY2s9JHtjb3B5fT4ke2NvcGllZCA/ICdcdTI3MTMgQ29waWVkIScgOiAnQ29weSd9PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIGA7XG59XG5cbmZ1bmN0aW9uIGZtdERhdGUoaXNvKSB7XG4gIGlmICghaXNvKSByZXR1cm4gJ1x1MjAxNCc7XG4gIHJldHVybiBuZXcgRGF0ZShpc28pLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXR1c0JhZGdlKHN0YXR1cykge1xuICBjb25zdCBjbHMgPSB7IHZlcmlmaWVkOiAnYmFkZ2Utc3VjY2VzcycsIHBlbmRpbmc6ICdiYWRnZS13YXJuaW5nJywgZXhwaXJlZDogJ2JhZGdlLW11dGVkJywgcmVqZWN0ZWQ6ICdiYWRnZS1kYW5nZXInIH1bc3RhdHVzXSB8fCAnYmFkZ2UtbXV0ZWQnO1xuICByZXR1cm4gaHRtbGA8c3BhbiBjbGFzcz0ke2BiYWRnZSAke2Nsc31gfT4ke3N0YXR1c308L3NwYW4+YDtcbn1cblxuZnVuY3Rpb24gZGVsaXZlcnlCYWRnZShzdGF0dXMpIHtcbiAgY29uc3QgY2xzID0geyBkZWxpdmVyZWQ6ICdiYWRnZS1zdWNjZXNzJywgcGVuZGluZzogJ2JhZGdlLXdhcm5pbmcnLCBmYWlsZWQ6ICdiYWRnZS1kYW5nZXInIH1bc3RhdHVzXSB8fCAnYmFkZ2UtbXV0ZWQnO1xuICByZXR1cm4gaHRtbGA8c3BhbiBjbGFzcz0ke2BiYWRnZSAke2Nsc31gfT4ke3N0YXR1c308L3NwYW4+YDtcbn1cblxuZnVuY3Rpb24gVG9vbHRpcCh7IHRleHQgfTogeyB0ZXh0OiBzdHJpbmcgfSkge1xuICByZXR1cm4gaHRtbGA8c3BhbiBjbGFzcz1cInRvb2x0aXAtaWNvblwiIGRhdGEtdGlwPSR7dGV4dH0+Pzwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiB1c2VBc3luYyhmbiwgZGVwcyA9IFtdKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBkYXRhOiBudWxsLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogbnVsbCB9KTtcbiAgY29uc3QgcmVsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN0YXRlKHMgPT4gKHsgLi4ucywgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSkpO1xuICAgIGZuKCkudGhlbihkYXRhID0+IHNldFN0YXRlKHsgZGF0YSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBudWxsIH0pKVxuICAgICAgICAuY2F0Y2goZXJyID0+IHNldFN0YXRlKHsgZGF0YTogbnVsbCwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBlcnIubWVzc2FnZSB9KSk7XG4gIH0sIGRlcHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB1c2VFZmZlY3QoKCkgPT4geyByZWxvYWQoKTsgfSwgW3JlbG9hZF0pO1xuICByZXR1cm4geyAuLi5zdGF0ZSwgcmVsb2FkIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ2hhcnQgY29tcG9uZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gU2lnbnVwQ2hhcnQoeyBkYXlzID0gMzAgfSkge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHBsb3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZUFzeW5jKCgpID0+IGFwaS5nZXRUaW1lc2VyaWVzKGRheXMpLCBbZGF5c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhIHx8ICFjb250YWluZXJSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGlmIChwbG90UmVmLmN1cnJlbnQpIHsgcGxvdFJlZi5jdXJyZW50LmRlc3Ryb3koKTsgcGxvdFJlZi5jdXJyZW50ID0gbnVsbDsgfVxuXG4gICAgY29uc3QgdGltZXN0YW1wcyA9IGRhdGEubWFwKGQgPT4gbmV3IERhdGUoZC5kYXRlKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICBjb25zdCBjb3VudHMgPSBkYXRhLm1hcChkID0+IGQuY291bnQpO1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGggfHwgNzAwLFxuICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICBzZXJpZXM6IFtcbiAgICAgICAge30sXG4gICAgICAgIHsgbGFiZWw6ICdTaWdudXBzJywgc3Ryb2tlOiAnIzRmNDZlNScsIGZpbGw6ICdyZ2JhKDc5LDcwLDIyOSwwLjA4KScsIHdpZHRoOiAyIH0sXG4gICAgICBdLFxuICAgICAgYXhlczogW1xuICAgICAgICB7IHZhbHVlczogKHUsIHZhbHMpID0+IHZhbHMubWFwKHYgPT4gbmV3IERhdGUodiAqIDEwMDApLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH0pKSB9LFxuICAgICAgICB7fSxcbiAgICAgIF0sXG4gICAgICBzY2FsZXM6IHsgeDogeyB0aW1lOiB0cnVlIH0gfSxcbiAgICAgIGN1cnNvcjogeyBzaG93OiBmYWxzZSB9LFxuICAgICAgbGVnZW5kOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgfTtcbiAgICBwbG90UmVmLmN1cnJlbnQgPSBuZXcgdVBsb3Qob3B0cywgW3RpbWVzdGFtcHMsIGNvdW50c10sIGNvbnRhaW5lclJlZi5jdXJyZW50KTtcblxuICAgIHJldHVybiAoKSA9PiB7IGlmIChwbG90UmVmLmN1cnJlbnQpIHsgcGxvdFJlZi5jdXJyZW50LmRlc3Ryb3koKTsgcGxvdFJlZi5jdXJyZW50ID0gbnVsbDsgfSB9O1xuICB9LCBbZGF0YV0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiPkxvYWRpbmcgY2hhcnRcdTIwMjY8L2Rpdj5gO1xuICBpZiAoZXJyb3IpIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1lcnJvclwiPiR7ZXJyb3J9PC9kaXY+YDtcbiAgcmV0dXJuIGh0bWxgPGRpdiByZWY9JHtjb250YWluZXJSZWZ9PjwvZGl2PmA7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUGFnZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBPdmVydmlld1BhZ2UoKSB7XG4gIGNvbnN0IHN0YXRzID0gdXNlQXN5bmMoKCkgPT4gYXBpLmdldFN0YXRzKCksIFtdKTtcbiAgY29uc3QgbGVhZGVycyA9IHVzZUFzeW5jKCgpID0+IGFwaS5nZXRMZWFkZXJib2FyZCgpLCBbXSk7XG5cbiAgcmV0dXJuIGh0bWxgXG4gICAgPGgxIGNsYXNzPVwicGFnZS10aXRsZVwiPk92ZXJ2aWV3PC9oMT5cbiAgICAke3N0YXRzLmxvYWRpbmcgPyBodG1sYDxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+TG9hZGluZyBzdGF0c1x1MjAyNjwvZGl2PmAgOiBzdGF0cy5lcnJvciA/IGh0bWxgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWVycm9yXCI+JHtzdGF0cy5lcnJvcn08L2Rpdj5gIDogaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+VG90YWwgU2lnbnVwczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHtzdGF0cy5kYXRhLnRvdGFsX3NpZ251cHMudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPlZlcmlmaWVkPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke3N0YXRzLmRhdGEudmVyaWZpZWRfc2lnbnVwcy50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+VG9kYXk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7c3RhdHMuZGF0YS50b2RheV9zaWdudXBzLnRvTG9jYWxlU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIiBzdHlsZT1cImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJcIj5WaXJhbCBDb2VmZmljaWVudCA8JHtUb29sdGlwfSB0ZXh0PVwiQXZlcmFnZSBudW1iZXIgb2YgbmV3IHNpZ251cHMgZWFjaCBleGlzdGluZyBzaWdudXAgZ2VuZXJhdGVzIHRocm91Z2ggcmVmZXJyYWxzLiBBYm92ZSAxLjAgbWVhbnMgZXhwb25lbnRpYWwgZ3Jvd3RoLlwiIC8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke3N0YXRzLmRhdGEudmlyYWxfY29lZmZpY2llbnQudG9GaXhlZCgyKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiIHN0eWxlPVwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlclwiPlJlZmVycmFsIFJhdGUgPCR7VG9vbHRpcH0gdGV4dD1cIlBlcmNlbnRhZ2Ugb2YgdG90YWwgc2lnbnVwcyB3aG8gam9pbmVkIHZpYSBhIHJlZmVycmFsIGxpbmsuXCIgLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7KHN0YXRzLmRhdGEucmVmZXJyYWxfcmF0ZSAqIDEwMCkudG9GaXhlZCgxKX0lPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIj5JbnZpdGVkPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtdmFsdWVcIj4keyhzdGF0cy5kYXRhLmludml0ZWRfc2lnbnVwcyB8fCAwKS50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGB9XG5cbiAgICAke3N0YXRzLmRhdGE/LnRvdGFsX3NpZ251cHMgPT09IDAgJiYgaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1zZWN0aW9uXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjMycHg7bWFyZ2luLWJvdHRvbToyNHB4XCI+XG4gICAgICAgIDxwIHN0eWxlPVwiY29sb3I6dmFyKC0tbXV0ZWQpO21hcmdpbi1ib3R0b206MTJweFwiPk5vIHNpZ251cHMgeWV0LiBIYXZlIHlvdSBlbWJlZGRlZCB0aGUgd2lkZ2V0IG9uIHlvdXIgcGFnZT88L3A+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIiNzZXR1cFwiPkdldCBlbWJlZCBjb2RlIFx1MjE5MjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIGB9XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRpdGxlXCI+U2lnbnVwIFRyZW5kIChsYXN0IDMwIGRheXMpPC9kaXY+XG4gICAgICA8JHtTaWdudXBDaGFydH0gZGF5cz0kezMwfSAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj48c3BhbiBjbGFzcz1cInRhYmxlLXRpdGxlXCI+VG9wIFJlZmVycmVyczwvc3Bhbj48L2Rpdj5cbiAgICAgICR7bGVhZGVycy5sb2FkaW5nID8gaHRtbGA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiPkxvYWRpbmdcdTIwMjY8L2Rpdj5gIDogbGVhZGVycy5lcnJvciA/IGh0bWxgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWVycm9yXCI+JHtsZWFkZXJzLmVycm9yfTwvZGl2PmAgOiBodG1sYFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPjx0cj48dGg+IzwvdGg+PHRoPkVtYWlsPC90aD48dGg+UmVmZXJyYWxzPC90aD48dGg+UG9zaXRpb248L3RoPjwvdHI+PC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAke2xlYWRlcnMuZGF0YS5zbGljZSgwLCAxMCkubWFwKChzLCBpKSA9PiBodG1sYFxuICAgICAgICAgICAgICA8dHIga2V5PSR7cy5pZH0+XG4gICAgICAgICAgICAgICAgPHRkPiR7aSArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtzLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7cy5yZWZlcnJhbF9jb3VudH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3MuZWZmZWN0aXZlX3Bvc2l0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICAke2xlYWRlcnMuZGF0YS5sZW5ndGggPT09IDAgJiYgaHRtbGA8ZGl2IGNsYXNzPVwiZW1wdHlcIj5ObyBzaWdudXBzIHlldC48L2Rpdj5gfVxuICAgICAgYH1cbiAgICA8L2Rpdj5cbiAgYDtcbn1cblxuZnVuY3Rpb24gU2lnbnVwc1BhZ2UoKSB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbbGltaXRdID0gdXNlU3RhdGUoNTApO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NvcnQsIHNldFNvcnRdID0gdXNlU3RhdGUoJ2RhdGUnKTtcblxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VBc3luYyhcbiAgICAoKSA9PiBhcGkubGlzdFNpZ251cHMoeyBwYWdlLCBsaW1pdCwgc3RhdHVzLCBzZWFyY2gsIHNvcnQgfSksXG4gICAgW3BhZ2UsIGxpbWl0LCBzdGF0dXMsIHNlYXJjaCwgc29ydF1cbiAgKTtcblxuICBjb25zdCBzaWdudXBzID0gZGF0YT8uc2lnbnVwcyB8fCBbXTtcbiAgY29uc3QgdG90YWwgPSBkYXRhPy50b3RhbCB8fCAwO1xuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHRvdGFsIC8gbGltaXQpKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWFyY2goc2VhcmNoSW5wdXQpO1xuICAgIHNldFBhZ2UoMSk7XG4gIH1cblxuICByZXR1cm4gaHRtbGBcbiAgICA8aDEgY2xhc3M9XCJwYWdlLXRpdGxlXCI+U2lnbnVwczwvaDE+XG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWJsZS10aXRsZVwiPiR7dG90YWwudG9Mb2NhbGVTdHJpbmcoKX0gdG90YWw8L3NwYW4+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PSR7aGFuZGxlU2VhcmNofSBzdHlsZT1cImRpc3BsYXk6ZmxleDtnYXA6OHB4O2FsaWduLWl0ZW1zOmNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGVtYWlsXHUyMDI2XCIgdmFsdWU9JHtzZWFyY2hJbnB1dH1cbiAgICAgICAgICAgIG9uSW5wdXQ9JHtlID0+IHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKX0gc3R5bGU9XCJ3aWR0aDoyMDBweFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8c2VsZWN0IHZhbHVlPSR7c3RhdHVzfSBvbkNoYW5nZT0ke2UgPT4geyBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpOyBzZXRQYWdlKDEpOyB9fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsIHN0YXR1c2VzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZlcmlmaWVkXCI+VmVyaWZpZWQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVuZGluZ1wiPlBlbmRpbmc8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZXhwaXJlZFwiPkV4cGlyZWQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVqZWN0ZWRcIj5SZWplY3RlZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPHNlbGVjdCB2YWx1ZT0ke3NvcnR9IG9uQ2hhbmdlPSR7ZSA9PiB7IHNldFNvcnQoZS50YXJnZXQudmFsdWUpOyBzZXRQYWdlKDEpOyB9fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGF0ZVwiPk5ld2VzdCBmaXJzdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb3NpdGlvblwiPkJ5IHBvc2l0aW9uPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZmVycmFsc1wiPkJ5IHJlZmVycmFsczwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBocmVmPSR7YC9kYXNoYm9hcmQvYXBpLyR7c2x1Z30vc2lnbnVwcy9leHBvcnQuY3N2YH0gZG93bmxvYWQ+RXhwb3J0IENTVjwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAke2xvYWRpbmcgPyBodG1sYDxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+TG9hZGluZ1x1MjAyNjwvZGl2PmAgOiBlcnJvciA/IGh0bWxgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWVycm9yXCIgc3R5bGU9XCJtYXJnaW46MTZweFwiPiR7ZXJyb3J9PC9kaXY+YCA6IGh0bWxgXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICA8dGg+UG9zaXRpb248L3RoPlxuICAgICAgICAgICAgICA8dGg+UmVmZXJyYWxzPC90aD5cbiAgICAgICAgICAgICAgPHRoPkpvaW5lZDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgJHtzaWdudXBzLm1hcChzID0+IGh0bWxgXG4gICAgICAgICAgICAgIDx0ciBrZXk9JHtzLmlkfT5cbiAgICAgICAgICAgICAgICA8dGQ+JHtzLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7c3RhdHVzQmFkZ2Uocy5zdGF0dXMpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7cy5lZmZlY3RpdmVfcG9zaXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtzLnJlZmVycmFsX2NvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7Zm10RGF0ZShzLmNyZWF0ZWRfYXQpfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICAke3NpZ251cHMubGVuZ3RoID09PSAwICYmIGh0bWxgPGRpdiBjbGFzcz1cImVtcHR5XCI+Tm8gc2lnbnVwcyBtYXRjaCB5b3VyIGZpbHRlcnMuPC9kaXY+YH1cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm9cIj5QYWdlICR7cGFnZX0gb2YgJHt0b3RhbFBhZ2VzfSAoJHt0b3RhbC50b0xvY2FsZVN0cmluZygpfSByZXN1bHRzKTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9JHtwYWdlIDw9IDF9IG9uQ2xpY2s9JHsoKSA9PiBzZXRQYWdlKHAgPT4gcCAtIDEpfT5cdTIxOTAgUHJldjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBkaXNhYmxlZD0ke3BhZ2UgPj0gdG90YWxQYWdlc30gb25DbGljaz0keygpID0+IHNldFBhZ2UocCA9PiBwICsgMSl9Pk5leHQgXHUyMTkyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cbiAgICA8L2Rpdj5cbiAgYDtcbn1cblxuZnVuY3Rpb24gTGVhZGVyYm9hcmRQYWdlKCkge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VBc3luYygoKSA9PiBhcGkuZ2V0TGVhZGVyYm9hcmQoKSwgW10pO1xuXG4gIHJldHVybiBodG1sYFxuICAgIDxoMSBjbGFzcz1cInBhZ2UtdGl0bGVcIj5MZWFkZXJib2FyZDwvaDE+XG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj48c3BhbiBjbGFzcz1cInRhYmxlLXRpdGxlXCI+VG9wIFJlZmVycmVyczwvc3Bhbj48L2Rpdj5cbiAgICAgICR7bG9hZGluZyA/IGh0bWxgPGRpdiBjbGFzcz1cImxvYWRpbmdcIj5Mb2FkaW5nXHUyMDI2PC9kaXY+YCA6IGVycm9yID8gaHRtbGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZXJyb3JcIiBzdHlsZT1cIm1hcmdpbjoxNnB4XCI+JHtlcnJvcn08L2Rpdj5gIDogaHRtbGBcbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0aGVhZD48dHI+PHRoPlJhbms8L3RoPjx0aD5FbWFpbDwvdGg+PHRoPlJlZmVycmFsIENvZGU8L3RoPjx0aD5SZWZlcnJhbHM8L3RoPjx0aD5Qb3NpdGlvbjwvdGg+PC90cj48L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICR7ZGF0YS5tYXAoKHMsIGkpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDx0ciBrZXk9JHtzLmlkfT5cbiAgICAgICAgICAgICAgICA8dGQ+JHtpICsgMX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3MuZW1haWx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGNvZGU+JHtzLnJlZmVycmFsX2NvZGV9PC9jb2RlPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7cy5yZWZlcnJhbF9jb3VudH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3MuZWZmZWN0aXZlX3Bvc2l0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICAke2RhdGEubGVuZ3RoID09PSAwICYmIGh0bWxgPGRpdiBjbGFzcz1cImVtcHR5XCI+Tm8gc2lnbnVwcyB5ZXQuPC9kaXY+YH1cbiAgICAgIGB9XG4gICAgPC9kaXY+XG4gIGA7XG59XG5cbmZ1bmN0aW9uIFdlYmhvb2tzUGFnZSgpIHtcbiAgY29uc3Qgd2ViaG9va3MgPSB1c2VBc3luYygoKSA9PiBhcGkubGlzdFdlYmhvb2tzKCksIFtdKTtcbiAgY29uc3QgZGVsaXZlcmllcyA9IHVzZUFzeW5jKCgpID0+IGFwaS5saXN0RGVsaXZlcmllcygpLCBbXSk7XG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHsgdXJsOiAnJywgc2VjcmV0OiAnJywgZXZlbnRzOiBbXSB9KTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21zZywgc2V0TXNnXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGFsbEV2ZW50cyA9IFsnc2lnbnVwLmNyZWF0ZWQnLCAnZW1haWwudmVyaWZpZWQnLCAncmVmZXJyYWwuY29udmVydGVkJ107XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRXZlbnQoZXYpIHtcbiAgICBzZXRGb3JtKGYgPT4gKHtcbiAgICAgIC4uLmYsXG4gICAgICBldmVudHM6IGYuZXZlbnRzLmluY2x1ZGVzKGV2KSA/IGYuZXZlbnRzLmZpbHRlcihlID0+IGUgIT09IGV2KSA6IFsuLi5mLmV2ZW50cywgZXZdLFxuICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtLmV2ZW50cy5sZW5ndGggPT09IDApIHsgc2V0TXNnKHsgdHlwZTogJ2Vycm9yJywgdGV4dDogJ1NlbGVjdCBhdCBsZWFzdCBvbmUgZXZlbnQuJyB9KTsgcmV0dXJuOyB9XG4gICAgc2V0U2F2aW5nKHRydWUpO1xuICAgIHNldE1zZyhudWxsKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpLmNyZWF0ZVdlYmhvb2soeyB1cmw6IGZvcm0udXJsLCBzZWNyZXQ6IGZvcm0uc2VjcmV0LCBldmVudHM6IGZvcm0uZXZlbnRzIH0pO1xuICAgICAgc2V0Rm9ybSh7IHVybDogJycsIHNlY3JldDogJycsIGV2ZW50czogW10gfSk7XG4gICAgICBzZXRNc2coeyB0eXBlOiAnc3VjY2VzcycsIHRleHQ6ICdXZWJob29rIGVuZHBvaW50IGNyZWF0ZWQuJyB9KTtcbiAgICAgIHdlYmhvb2tzLnJlbG9hZCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0TXNnKHsgdHlwZTogJ2Vycm9yJywgdGV4dDogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKGlkKSB7XG4gICAgaWYgKCFjb25maXJtKCdEZWxldGUgdGhpcyB3ZWJob29rIGVuZHBvaW50PycpKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwaS5kZWxldGVXZWJob29rKGlkKTtcbiAgICAgIHdlYmhvb2tzLnJlbG9hZCgpO1xuICAgICAgZGVsaXZlcmllcy5yZWxvYWQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldE1zZyh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBodG1sYFxuICAgIDxoMSBjbGFzcz1cInBhZ2UtdGl0bGVcIj5XZWJob29rczwvaDE+XG4gICAgJHttc2cgJiYgaHRtbGA8ZGl2IGNsYXNzPSR7YGFsZXJ0IGFsZXJ0LSR7bXNnLnR5cGV9YH0+JHttc2cudGV4dH08L2Rpdj5gfVxuXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj48c3BhbiBjbGFzcz1cInRhYmxlLXRpdGxlXCI+RW5kcG9pbnRzPC9zcGFuPjwvZGl2PlxuICAgICAgJHt3ZWJob29rcy5sb2FkaW5nID8gaHRtbGA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiPkxvYWRpbmdcdTIwMjY8L2Rpdj5gIDogd2ViaG9va3MuZXJyb3IgPyBodG1sYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1lcnJvclwiIHN0eWxlPVwibWFyZ2luOjE2cHhcIj4ke3dlYmhvb2tzLmVycm9yfTwvZGl2PmAgOiBodG1sYFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPjx0cj48dGg+VVJMPC90aD48dGg+RXZlbnRzPC90aD48dGg+QWN0aXZlPC90aD48dGg+PC90aD48L3RyPjwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgJHt3ZWJob29rcy5kYXRhLm1hcCh3ID0+IGh0bWxgXG4gICAgICAgICAgICAgIDx0ciBrZXk9JHt3LmlkfT5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ3b3JkLWJyZWFrOmJyZWFrLWFsbFwiPiR7dy51cmx9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHt3LmV2ZW50cy5qb2luKCcsICcpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7dy5hY3RpdmUgPyBodG1sYDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiPkFjdGl2ZTwvc3Bhbj5gIDogaHRtbGA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLW11dGVkXCI+UGF1c2VkPC9zcGFuPmB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIG9uQ2xpY2s9JHsoKSA9PiBoYW5kbGVEZWxldGUody5pZCl9PkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICAke3dlYmhvb2tzLmRhdGEubGVuZ3RoID09PSAwICYmIGh0bWxgPGRpdiBjbGFzcz1cImVtcHR5XCI+Tm8gd2ViaG9vayBlbmRwb2ludHMuPC9kaXY+YH1cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJpbmxpbmUtZm9ybVwiIG9uU3VibWl0PSR7aGFuZGxlQ3JlYXRlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHN0eWxlPVwiZmxleDoxO21pbi13aWR0aDoyMDBweFwiPlxuICAgICAgICAgICAgPGxhYmVsPkVuZHBvaW50IFVSTDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInVybFwiIHZhbHVlPSR7Zm9ybS51cmx9IG9uSW5wdXQ9JHtlID0+IHNldEZvcm0oZiA9PiAoeyAuLi5mLCB1cmw6IGUudGFyZ2V0LnZhbHVlIH0pKX0gcGxhY2Vob2xkZXI9XCJodHRwczovL2V4YW1wbGUuY29tL3dlYmhvb2tcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+U2VjcmV0IChvcHRpb25hbCk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPSR7Zm9ybS5zZWNyZXR9IG9uSW5wdXQ9JHtlID0+IHNldEZvcm0oZiA9PiAoeyAuLi5mLCBzZWNyZXQ6IGUudGFyZ2V0LnZhbHVlIH0pKX0gcGxhY2Vob2xkZXI9XCJmb3IgSE1BQyBzaWduaW5nXCIgc3R5bGU9XCJ3aWR0aDoxNjBweFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbD5FdmVudHM8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtnYXA6OHB4O2ZsZXgtd3JhcDp3cmFwXCI+XG4gICAgICAgICAgICAgICR7YWxsRXZlbnRzLm1hcChldiA9PiBodG1sYFxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6ZmxleDtnYXA6NHB4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MTNweDtmb250LXdlaWdodDpub3JtYWw7Y29sb3I6dmFyKC0tdGV4dClcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPSR7Zm9ybS5ldmVudHMuaW5jbHVkZXMoZXYpfSBvbkNoYW5nZT0keygpID0+IHRvZ2dsZUV2ZW50KGV2KX0gLz5cbiAgICAgICAgICAgICAgICAgICR7ZXZ9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPSR7c2F2aW5nfT5BZGQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgYH1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1jYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFibGUtaGVhZGVyXCI+PHNwYW4gY2xhc3M9XCJ0YWJsZS10aXRsZVwiPlJlY2VudCBEZWxpdmVyaWVzPC9zcGFuPjwvZGl2PlxuICAgICAgJHtkZWxpdmVyaWVzLmxvYWRpbmcgPyBodG1sYDxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+TG9hZGluZ1x1MjAyNjwvZGl2PmAgOiBkZWxpdmVyaWVzLmVycm9yID8gaHRtbGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZXJyb3JcIiBzdHlsZT1cIm1hcmdpbjoxNnB4XCI+JHtkZWxpdmVyaWVzLmVycm9yfTwvZGl2PmAgOiBodG1sYFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPjx0cj48dGg+RW5kcG9pbnQ8L3RoPjx0aD5FdmVudDwvdGg+PHRoPlN0YXR1czwvdGg+PHRoPkhUVFA8L3RoPjx0aD5BdHRlbXB0czwvdGg+PHRoPlRpbWU8L3RoPjwvdHI+PC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAke2RlbGl2ZXJpZXMuZGF0YS5tYXAoKGQsIGkpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDx0ciBrZXk9JHtpfT5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJtYXgtd2lkdGg6MjAwcHg7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwXCIgdGl0bGU9JHtkLmVuZHBvaW50X3VybH0+JHtkLmVuZHBvaW50X3VybH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48Y29kZT4ke2QuZXZlbnRfdHlwZX08L2NvZGU+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtkZWxpdmVyeUJhZGdlKGQuc3RhdHVzKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke2QucmVzcG9uc2Vfc3RhdHVzIHx8ICdcdTIwMTQnfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7ZC5hdHRlbXB0c308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke2ZtdERhdGUoZC5jcmVhdGVkX2F0KX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYCl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgJHtkZWxpdmVyaWVzLmRhdGEubGVuZ3RoID09PSAwICYmIGh0bWxgPGRpdiBjbGFzcz1cImVtcHR5XCI+Tm8gZGVsaXZlcmllcyB5ZXQuPC9kaXY+YH1cbiAgICAgIGB9XG4gICAgPC9kaXY+XG4gIGA7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSW52aXRhdGlvbnMgKGludml0ZSkgcGFnZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIENvcHlCdXR0b24oeyB0ZXh0IH06IHsgdGV4dDogc3RyaW5nIH0pIHtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgZnVuY3Rpb24gY29weShlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KS50aGVuKCgpID0+IHtcbiAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgMjAwMCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGh0bWxgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIHN0eWxlPVwicGFkZGluZzoycHggNnB4O2ZvbnQtc2l6ZToxMXB4XCIgb25DbGljaz0ke2NvcHl9PiR7Y29waWVkID8gJ1x1MjcxMycgOiAnQ29weSd9PC9idXR0b24+YDtcbn1cblxuZnVuY3Rpb24gSW52aXRlSG93SXRXb3JrcygpIHtcbiAgcmV0dXJuIGh0bWxgXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXNlY3Rpb25cIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MjRweDtib3JkZXItbGVmdDozcHggc29saWQgdmFyKC0tcHJpbWFyeSk7cGFkZGluZy1sZWZ0OjE2cHhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10aXRsZVwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTo4cHhcIj5Ib3cgaW52aXRhdGlvbnMgd29yazwvZGl2PlxuICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweDtjb2xvcjp2YXIoLS1tdXRlZCk7bWFyZ2luLWJvdHRvbToxMnB4XCI+XG4gICAgICAgIFdoZW4gYSB1c2VyIGlzIGludml0ZWQsIHRoZXkgcmVjZWl2ZSBhbiBlbWFpbCB3aXRoIGEgdW5pcXVlIGxpbmsgY29udGFpbmluZyA8Y29kZT4keyc/aW52aXRlPTx0b2tlbj4nfTwvY29kZT4uXG4gICAgICAgIFlvdXIgcHJvZHVjdCBzaG91bGQgZGV0ZWN0IHRoaXMgcXVlcnkgcGFyYW1ldGVyIHdoZW4gdGhlIHVzZXIgbGFuZHMgb24geW91ciBzaXRlIGFuZCB1c2UgdGhlIGNvZGUgdG8gdmVyaWZ5IGFjY2Vzcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NjAwO21hcmdpbi1ib3R0b206NnB4XCI+V2F5cyB0byB2YWxpZGF0ZSBhbiBpbnZpdGUgY29kZTo8L3A+XG4gICAgICA8dWwgc3R5bGU9XCJmb250LXNpemU6MTNweDtjb2xvcjp2YXIoLS1tdXRlZCk7bWFyZ2luOjA7cGFkZGluZy1sZWZ0OjIwcHg7bGluZS1oZWlnaHQ6MS44XCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkFQSTwvc3Ryb25nPiBcdTIwMTQgY2hlY2sgc3RhdHVzIHdpdGhcbiAgICAgICAgICA8Y29kZT5HRVQgL2FwaS92MS9pbnZpdGVzL3tcInt0b2tlbn1cIn08L2NvZGU+LCB0aGVuIG1hcmsgYXMgdXNlZCB3aXRoXG4gICAgICAgICAgPGNvZGU+UE9TVCAvYXBpL3YxL2ludml0ZXMve1wie3Rva2VufVwifS9yZWRlZW08L2NvZGU+LlxuICAgICAgICAgIEJvdGggZW5kcG9pbnRzIGFyZSBwdWJsaWMgKHRoZSB0b2tlbiBpcyB0aGUgY3JlZGVudGlhbCkuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkRhc2hib2FyZDwvc3Ryb25nPiBcdTIwMTQgcGFzdGUgb3IgdHlwZSB0aGUgaW52aXRlIGNvZGUgaW50byB0aGUgc2VhcmNoIGJveCBiZWxvdyB0byBsb29rIGl0IHVwIG1hbnVhbGx5IGFuZCBjb25maXJtIGl0cyBzdGF0dXMuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPk1DUDwvc3Ryb25nPiBcdTIwMTQgdXNlIDxjb2RlPmxpc3Rfc2lnbnVwczwvY29kZT4gd2l0aCA8Y29kZT5zdGF0dXM9aW52aXRlZDwvY29kZT4gYW5kIHNlYXJjaCBieSB0b2tlbiwgb3IgYXNrIENsYXVkZSB0byBsb29rIHVwIGEgc3BlY2lmaWMgaW52aXRlIGNvZGUuXG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgO1xufVxuXG5jb25zdCBJTlZJVEVEX1BBR0VfU0laRSA9IDUwO1xuXG5mdW5jdGlvbiBJbnZpdGF0aW9uc1BhZ2UoKSB7XG4gIGNvbnN0IHN0YXRzQXN5bmMgPSB1c2VBc3luYygoKSA9PiBhcGkuZ2V0U3RhdHMoKSwgW10pO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDEwMCk7XG4gIGNvbnN0IFtpbnZpdGluZywgc2V0SW52aXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbXNnLCBzZXRNc2ddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RlYm91bmNlZFNlYXJjaCwgc2V0RGVib3VuY2VkU2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBEZWJvdW5jZSBzZWFyY2ggaW5wdXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXREZWJvdW5jZWRTZWFyY2goc2VhcmNoKTtcbiAgICAgIHNldE9mZnNldCgwKTtcbiAgICB9LCAzMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodCk7XG4gIH0sIFtzZWFyY2hdKTtcblxuICBjb25zdCBpbnZpdGVkQXN5bmMgPSB1c2VBc3luYyhcbiAgICAoKSA9PiBhcGkubGlzdEludml0ZWQoeyBsaW1pdDogSU5WSVRFRF9QQUdFX1NJWkUsIG9mZnNldCwgc2VhcmNoOiBkZWJvdW5jZWRTZWFyY2ggfSksXG4gICAgW29mZnNldCwgZGVib3VuY2VkU2VhcmNoXSxcbiAgKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVJbnZpdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuID0gcGFyc2VJbnQoY291bnQsIDEwKTtcbiAgICBpZiAoIW4gfHwgbiA8IDEpIHsgc2V0TXNnKHsgdHlwZTogJ2Vycm9yJywgdGV4dDogJ0VudGVyIGEgdmFsaWQgY291bnQuJyB9KTsgcmV0dXJuOyB9XG4gICAgaWYgKCFjb25maXJtKGBJbnZpdGUgdGhlIHRvcCAke259IHBlb3BsZT8gVGhleSB3aWxsIHJlY2VpdmUgYW4gZW1haWwgaW1tZWRpYXRlbHkuYCkpIHJldHVybjtcbiAgICBzZXRJbnZpdGluZyh0cnVlKTtcbiAgICBzZXRNc2cobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5pbnZpdGVUb3BOKG4pO1xuICAgICAgc2V0TXNnKHsgdHlwZTogJ3N1Y2Nlc3MnLCB0ZXh0OiBgXHUyNzA1IEludml0ZWQgJHtyZXMuaW52aXRlZH0gcGVvcGxlLiBUb3RhbCBpbnZpdGVkOiAke3Jlcy50b3RhbF9pbnZpdGVkfS5gIH0pO1xuICAgICAgc3RhdHNBc3luYy5yZWxvYWQoKTtcbiAgICAgIGludml0ZWRBc3luYy5yZWxvYWQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldE1zZyh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IGVyci5tZXNzYWdlIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJbnZpdGluZyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RhdHMgPSBzdGF0c0FzeW5jLmRhdGE7XG4gIGNvbnN0IHZlcmlmaWVkID0gc3RhdHMgPyBzdGF0cy52ZXJpZmllZF9zaWdudXBzIHx8IDAgOiAwO1xuICBjb25zdCBpbnZpdGVkID0gc3RhdHMgPyBzdGF0cy5pbnZpdGVkX3NpZ251cHMgfHwgMCA6IDA7XG5cbiAgY29uc3QgdG90YWwgPSBpbnZpdGVkQXN5bmMuZGF0YT8udG90YWwgfHwgMDtcbiAgY29uc3QgaGFzUHJldiA9IG9mZnNldCA+IDA7XG4gIGNvbnN0IGhhc05leHQgPSBvZmZzZXQgKyBJTlZJVEVEX1BBR0VfU0laRSA8IHRvdGFsO1xuXG4gIHJldHVybiBodG1sYFxuICAgIDxoMSBjbGFzcz1cInBhZ2UtdGl0bGVcIj5JbnZpdGF0aW9uczwvaDE+XG5cbiAgICA8JHtJbnZpdGVIb3dJdFdvcmtzfSAvPlxuXG4gICAgJHtzdGF0c0FzeW5jLmxvYWRpbmcgPyBodG1sYDxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+TG9hZGluZ1x1MjAyNjwvZGl2PmAgOiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cInN0YXQtZ3JpZFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbToyNHB4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPkludml0ZWQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7aW52aXRlZC50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+VmVyaWZpZWQgKGVsaWdpYmxlKTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LXZhbHVlXCI+JHsodmVyaWZpZWQgLSBpbnZpdGVkKS50b0xvY2FsZVN0cmluZygpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+VG90YWwgVmVyaWZpZWQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7dmVyaWZpZWQudG9Mb2NhbGVTdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgfVxuXG4gICAgJHttc2cgJiYgaHRtbGA8ZGl2IGNsYXNzPSR7YGFsZXJ0IGFsZXJ0LSR7bXNnLnR5cGV9YH0+JHttc2cudGV4dH08L2Rpdj5gfVxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXNlY3Rpb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10aXRsZVwiPkludml0ZSB0b3AgTjwvZGl2PlxuICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTRweDtjb2xvcjp2YXIoLS1tdXRlZCk7bWFyZ2luLWJvdHRvbToxNnB4XCI+XG4gICAgICAgIE1hcmtzIHRoZSB0b3AgTiB2ZXJpZmllZCBzaWdudXBzIChieSBxdWV1ZSBwb3NpdGlvbikgYXMgaW52aXRlZCBhbmQgc2VuZHMgdGhlbSBhbiBlbWFpbCBpbW1lZGlhdGVseS5cbiAgICAgICAgQWxyZWFkeS1pbnZpdGVkIHBlb3BsZSBhcmUgc2tpcHBlZCBcdTIwMTQgdGhpcyBpcyBzYWZlIHRvIHJ1biBtdWx0aXBsZSB0aW1lcy5cbiAgICAgIDwvcD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PSR7aGFuZGxlSW52aXRlfSBzdHlsZT1cImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LWVuZDtnYXA6MTJweFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHN0eWxlPVwibWFyZ2luOjBcIj5cbiAgICAgICAgICA8bGFiZWw+TnVtYmVyIG9mIHBlb3BsZSB0byBpbnZpdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIG1heD1cIjEwMDAwXCIgdmFsdWU9JHtjb3VudH1cbiAgICAgICAgICAgIG9uSW5wdXQ9JHtlID0+IHNldENvdW50KGUudGFyZ2V0LnZhbHVlKX0gc3R5bGU9XCJ3aWR0aDoxMjBweFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPSR7aW52aXRpbmd9PlxuICAgICAgICAgICR7aW52aXRpbmcgPyAnSW52aXRpbmdcdTIwMjYnIDogJ0ludml0ZSd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLWNhcmRcIiBzdHlsZT1cIm1hcmdpbi10b3A6MjRweFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWhlYWRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRhYmxlLXRpdGxlXCI+SW52aXRlZCBzaWdudXBzPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBlbWFpbCBvciBpbnZpdGUgY29kZVx1MjAyNlwiXG4gICAgICAgICAgdmFsdWU9JHtzZWFyY2h9XG4gICAgICAgICAgb25JbnB1dD0ke2UgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBzdHlsZT1cIndpZHRoOjI2MHB4O3BhZGRpbmc6NnB4IDEwcHg7Zm9udC1zaXplOjEzcHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQ6dmFyKC0tYmcpO2NvbG9yOnZhcigtLXRleHQpXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgJHtpbnZpdGVkQXN5bmMubG9hZGluZyA/IGh0bWxgPGRpdiBjbGFzcz1cImxvYWRpbmdcIj5Mb2FkaW5nXHUyMDI2PC9kaXY+YCA6XG4gICAgICAgIGludml0ZWRBc3luYy5lcnJvciA/IGh0bWxgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWVycm9yXCI+JHtpbnZpdGVkQXN5bmMuZXJyb3J9PC9kaXY+YCA6IGh0bWxgXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5JbnZpdGUgQ29kZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5SZWRlZW1lZDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Qb3NpdGlvbjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5SZWZlcnJhbHM8L3RoPlxuICAgICAgICAgICAgICA8dGg+SW52aXRlZCBhdDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgJHsoaW52aXRlZEFzeW5jLmRhdGE/LnNpZ251cHMgfHwgW10pLm1hcChzID0+IGh0bWxgXG4gICAgICAgICAgICAgIDx0ciBrZXk9JHtzLmlkfT5cbiAgICAgICAgICAgICAgICA8dGQ+JHtzLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgJHtzLmludml0ZV90b2tlbiA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NnB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGNvZGUgc3R5bGU9XCJmb250LXNpemU6MTJweDtjb2xvcjp2YXIoLS1tdXRlZClcIj4ke3MuaW52aXRlX3Rva2VuLnNsaWNlKDAsIDEyKX1cdTIwMjY8L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgPCR7Q29weUJ1dHRvbn0gdGV4dD0ke3MuaW52aXRlX3Rva2VufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICBgIDogaHRtbGA8c3BhbiBzdHlsZT1cImNvbG9yOnZhcigtLW11dGVkKVwiPlx1MjAxNDwvc3Bhbj5gfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgJHtzLmludml0ZV90b2tlbl9yZWRlZW1lZF9hdFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgPHNwYW4gc3R5bGU9XCJjb2xvcjp2YXIoLS1zdWNjZXNzKVwiPlx1MjcxMyAke2ZtdERhdGUocy5pbnZpdGVfdG9rZW5fcmVkZWVtZWRfYXQpfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgICAgIDogaHRtbGA8c3BhbiBzdHlsZT1cImNvbG9yOnZhcigtLW11dGVkKVwiPlx1MjAxNDwvc3Bhbj5gfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7cy5lZmZlY3RpdmVfcG9zaXRpb259PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtzLnJlZmVycmFsX2NvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7cy5pbnZpdGVkX2F0ID8gbmV3IERhdGUocy5pbnZpdGVkX2F0KS50b0xvY2FsZVN0cmluZygpIDogJ1x1MjAxNCd9PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGApfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgICR7dG90YWwgPT09IDAgJiYgaHRtbGA8ZGl2IGNsYXNzPVwiZW1wdHlcIj4ke2RlYm91bmNlZFNlYXJjaCA/ICdObyByZXN1bHRzIGZvciB0aGF0IHNlYXJjaC4nIDogJ05vIG9uZSBpbnZpdGVkIHlldC4nfTwvZGl2PmB9XG4gICAgICAgICR7dG90YWwgPiBJTlZJVEVEX1BBR0VfU0laRSAmJiBodG1sYFxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MTJweCAxNnB4O2ZvbnQtc2l6ZToxM3B4O2NvbG9yOnZhcigtLW11dGVkKTtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1ib3JkZXIpXCI+XG4gICAgICAgICAgICA8c3Bhbj5TaG93aW5nICR7b2Zmc2V0ICsgMX1cdTIwMTMke01hdGgubWluKG9mZnNldCArIElOVklURURfUEFHRV9TSVpFLCB0b3RhbCl9IG9mICR7dG90YWwudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O2dhcDo4cHhcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIGRpc2FibGVkPSR7IWhhc1ByZXZ9IG9uQ2xpY2s9JHsoKSA9PiBzZXRPZmZzZXQobyA9PiBvIC0gSU5WSVRFRF9QQUdFX1NJWkUpfT5cdTIxOTAgUHJldjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgZGlzYWJsZWQ9JHshaGFzTmV4dH0gb25DbGljaz0keygpID0+IHNldE9mZnNldChvID0+IG8gKyBJTlZJVEVEX1BBR0VfU0laRSl9Pk5leHQgXHUyMTkyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYH1cbiAgICAgIGB9XG4gICAgPC9kaXY+XG4gIGA7XG59XG5cbmZ1bmN0aW9uIEFQSUtleXNTZWN0aW9uKCkge1xuICBjb25zdCBrZXlzQXN5bmMgPSB1c2VBc3luYygoKSA9PiBhcGkubGlzdEFQSUtleXMoKSwgW10pO1xuICBjb25zdCBbbmV3S2V5TmFtZSwgc2V0TmV3S2V5TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjcmVhdGluZywgc2V0Q3JlYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmV2ZWFsZWRLZXksIHNldFJldmVhbGVkS2V5XSA9IHVzZVN0YXRlPHtpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXJyLCBzZXRFcnJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFuZXdLZXlOYW1lLnRyaW0oKSkgcmV0dXJuO1xuICAgIHNldENyZWF0aW5nKHRydWUpO1xuICAgIHNldEVycihudWxsKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmNyZWF0ZUFQSUtleShuZXdLZXlOYW1lLnRyaW0oKSk7XG4gICAgICBzZXRSZXZlYWxlZEtleSh7IGlkOiByZXMuaWQsIHZhbHVlOiByZXMuYXBpX2tleSB9KTtcbiAgICAgIHNldE5ld0tleU5hbWUoJycpO1xuICAgICAga2V5c0FzeW5jLnJlbG9hZCgpO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgc2V0RXJyKGUubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldENyZWF0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVSZXZva2UoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCFjb25maXJtKGBSZXZva2Uga2V5IFwiJHtuYW1lfVwiPyBJdCB3aWxsIHN0b3Agd29ya2luZyBpbW1lZGlhdGVseS5gKSkgcmV0dXJuO1xuICAgIHNldEVycihudWxsKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpLnJldm9rZUFQSUtleShpZCk7XG4gICAgICBpZiAocmV2ZWFsZWRLZXk/LmlkID09PSBpZCkgc2V0UmV2ZWFsZWRLZXkobnVsbCk7XG4gICAgICBrZXlzQXN5bmMucmVsb2FkKCk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBzZXRFcnIoZS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaHRtbGBcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtc2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRpdGxlXCI+QVBJIEtleXM8L2Rpdj5cbiAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7Y29sb3I6dmFyKC0tbXV0ZWQpO21hcmdpbi1ib3R0b206MTZweFwiPlxuICAgICAgICBBUEkga2V5cyBhdXRoZW50aWNhdGUgcHJvZ3JhbW1hdGljIGFjY2VzcyB0byB5b3VyIGNhbXBhaWduIHZpYSB0aGUgUkVTVCBBUEkgb3IgTUNQIHNlcnZlci5cbiAgICAgIDwvcD5cbiAgICAgICR7ZXJyICYmIGh0bWxgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWVycm9yXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEycHhcIj4ke2Vycn08L2Rpdj5gfVxuXG4gICAgICAke3JldmVhbGVkS2V5ICYmIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjE2cHhcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbTo2cHg7Zm9udC13ZWlnaHQ6NjAwXCI+TmV3IGtleSBjcmVhdGVkIFx1MjAxNCBjb3B5IGl0IG5vdy4gSXQgd2lsbCBub3QgYmUgc2hvd24gYWdhaW4uPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFwaS1rZXktZGlzcGxheVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhcGkta2V5LW1vbm9cIiBzdHlsZT1cIndvcmQtYnJlYWs6YnJlYWstYWxsXCI+JHtyZXZlYWxlZEtleS52YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICA8JHtDb3B5QnV0dG9ufSB0ZXh0PSR7cmV2ZWFsZWRLZXkudmFsdWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cblxuICAgICAgJHtrZXlzQXN5bmMubG9hZGluZyAmJiBodG1sYDxkaXYgY2xhc3M9XCJsb2FkaW5nXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEycHhcIj5Mb2FkaW5nXHUyMDI2PC9kaXY+YH1cbiAgICAgICR7a2V5c0FzeW5jLmRhdGE/Lmxlbmd0aCA+IDAgJiYgaHRtbGBcbiAgICAgICAgPHRhYmxlIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxNnB4XCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5DcmVhdGVkPC90aD5cbiAgICAgICAgICAgICAgPHRoPkxhc3QgdXNlZDwvdGg+XG4gICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICR7a2V5c0FzeW5jLmRhdGEubWFwKGsgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImZvbnQtd2VpZ2h0OjUwMFwiPiR7ay5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiY29sb3I6dmFyKC0tbXV0ZWQpO2ZvbnQtc2l6ZToxM3B4XCI+JHtmbXREYXRlKGsuY3JlYXRlZF9hdCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJjb2xvcjp2YXIoLS1tdXRlZCk7Zm9udC1zaXplOjEzcHhcIj4ke2subGFzdF91c2VkX2F0ID8gZm10RGF0ZShrLmxhc3RfdXNlZF9hdCkgOiAnXHUyMDE0J308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIiBvbkNsaWNrPSR7KCkgPT4gaGFuZGxlUmV2b2tlKGsuaWQsIGsubmFtZSl9PlJldm9rZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgYH1cbiAgICAgICR7IWtleXNBc3luYy5sb2FkaW5nICYmIGtleXNBc3luYy5kYXRhPy5sZW5ndGggPT09IDAgJiYgaHRtbGBcbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6MTNweDtjb2xvcjp2YXIoLS1tdXRlZCk7bWFyZ2luLWJvdHRvbToxNnB4XCI+Tm8gYWN0aXZlIEFQSSBrZXlzLjwvcD5cbiAgICAgIGB9XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PSR7aGFuZGxlQ3JlYXRlfSBzdHlsZT1cImRpc3BsYXk6ZmxleDtnYXA6OHB4O2FsaWduLWl0ZW1zOmZsZXgtZW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJmbGV4OjE7bWFyZ2luLWJvdHRvbTowXCI+XG4gICAgICAgICAgPGxhYmVsPk5ldyBrZXkgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiZS5nLiBwcm9kdWN0aW9uLCBDSVwiIHZhbHVlPSR7bmV3S2V5TmFtZX1cbiAgICAgICAgICAgIG9uSW5wdXQ9JHtlID0+IHNldE5ld0tleU5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD0ke2NyZWF0aW5nIHx8ICFuZXdLZXlOYW1lLnRyaW0oKX0+XG4gICAgICAgICAgJHtjcmVhdGluZyA/ICdDcmVhdGluZ1x1MjAyNicgOiAnQ3JlYXRlIEFQSSBLZXknfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYDtcbn1cblxuZnVuY3Rpb24gU2V0dGluZ3NQYWdlKCkge1xuICBjb25zdCBzZXR0aW5nc0FzeW5jID0gdXNlQXN5bmMoKCkgPT4gYXBpLmdldFNldHRpbmdzKCksIFtdKTtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXR0aW5nc0FzeW5jLmRhdGEgJiYgIWZvcm0pIHtcbiAgICAgIHNldEZvcm0oc2V0dGluZ3NBc3luYy5kYXRhKTtcbiAgICB9XG4gIH0sIFtzZXR0aW5nc0FzeW5jLmRhdGFdKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTYXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U2F2aW5nKHRydWUpO1xuICAgIHNldE1zZyhudWxsKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpLnVwZGF0ZVNldHRpbmdzKHtcbiAgICAgICAgbmFtZTogZm9ybS5uYW1lLFxuICAgICAgICBib29zdF93ZWlnaHQ6IHBhcnNlRmxvYXQoZm9ybS5ib29zdF93ZWlnaHQpLFxuICAgICAgICBtYXhfc2lnbnVwczogZm9ybS5tYXhfc2lnbnVwcyA/IHBhcnNlSW50KGZvcm0ubWF4X3NpZ251cHMsIDEwKSA6IG51bGwsXG4gICAgICAgIHN0YXR1czogZm9ybS5zdGF0dXMsXG4gICAgICAgIHByb2R1Y3RfdXJsOiBmb3JtLnByb2R1Y3RfdXJsLFxuICAgICAgfSk7XG4gICAgICBzZXRNc2coeyB0eXBlOiAnc3VjY2VzcycsIHRleHQ6ICdTZXR0aW5ncyBzYXZlZC4nIH0pO1xuICAgICAgc2V0dGluZ3NBc3luYy5yZWxvYWQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldE1zZyh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IGVyci5tZXNzYWdlIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzZXR0aW5nc0FzeW5jLmxvYWRpbmcpIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+TG9hZGluZ1x1MjAyNjwvZGl2PmA7XG4gIGlmIChzZXR0aW5nc0FzeW5jLmVycm9yKSByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZXJyb3JcIj4ke3NldHRpbmdzQXN5bmMuZXJyb3J9PC9kaXY+YDtcblxuICByZXR1cm4gaHRtbGBcbiAgICA8aDEgY2xhc3M9XCJwYWdlLXRpdGxlXCI+U2V0dGluZ3M8L2gxPlxuICAgICR7bXNnICYmIGh0bWxgPGRpdiBjbGFzcz0ke2BhbGVydCBhbGVydC0ke21zZy50eXBlfWB9PiR7bXNnLnRleHR9PC9kaXY+YH1cblxuICAgICR7Zm9ybSAmJiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRpdGxlXCI+Q2FtcGFpZ24gU2V0dGluZ3M8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9JHtoYW5kbGVTYXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJmbGV4OjE7bWluLXdpZHRoOjIwMHB4XCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5DYW1wYWlnbiBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHZhbHVlPSR7Zm9ybS5uYW1lIHx8ICcnfSBvbklucHV0PSR7ZSA9PiBzZXRGb3JtKGYgPT4gKHsgLi4uZiwgbmFtZTogZS50YXJnZXQudmFsdWUgfSkpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT0ke2Zvcm0uc3RhdHVzIHx8ICcnfSBvbkNoYW5nZT0ke2UgPT4gc2V0Rm9ybShmID0+ICh7IC4uLmYsIHN0YXR1czogZS50YXJnZXQudmFsdWUgfSkpfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWN0aXZlXCI+QWN0aXZlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBhdXNlZFwiPlBhdXNlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmdWxsXCI+RnVsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlclwiPkJvb3N0IFdlaWdodCA8JHtUb29sdGlwfSB0ZXh0PVwiSG93IG1hbnkgcXVldWUgcG9zaXRpb25zIGVhY2ggcmVmZXJyYWwgaXMgd29ydGguIERlZmF1bHQgMS4wIG1lYW5zIDEgcmVmZXJyYWwgbW92ZXMgeW91IHVwIDEgc3BvdC4gSW5jcmVhc2UgdG8gbWFrZSByZWZlcnJhbHMgbW9yZSBwb3dlcmZ1bC5cIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjAuMVwiIG1pbj1cIjBcIiB2YWx1ZT0ke2Zvcm0uYm9vc3Rfd2VpZ2h0ID8/IDF9XG4gICAgICAgICAgICAgICAgb25JbnB1dD0ke2UgPT4gc2V0Rm9ybShmID0+ICh7IC4uLmYsIGJvb3N0X3dlaWdodDogZS50YXJnZXQudmFsdWUgfSkpfSBzdHlsZT1cIndpZHRoOjEyMHB4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlclwiPk1heCBTaWdudXBzIDwke1Rvb2x0aXB9IHRleHQ9XCJDYXAgdGhlIHRvdGFsIG51bWJlciBvZiBzaWdudXBzLiBOZXcgcmVnaXN0cmF0aW9ucyBhcmUgcmVqZWN0ZWQgb25jZSB0aGUgY2FwIGlzIHJlYWNoZWQuIExlYXZlIGJsYW5rIGZvciB1bmxpbWl0ZWQuXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiB2YWx1ZT0ke2Zvcm0ubWF4X3NpZ251cHMgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25JbnB1dD0ke2UgPT4gc2V0Rm9ybShmID0+ICh7IC4uLmYsIG1heF9zaWdudXBzOiBlLnRhcmdldC52YWx1ZSB8fCBudWxsIH0pKX0gc3R5bGU9XCJ3aWR0aDoxNDBweFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJmbGV4OjFcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlclwiPlByb2R1Y3QgVVJMIDwke1Rvb2x0aXB9IHRleHQ9XCJZb3VyIHByb2R1Y3QncyBVUkwuIFVzZWQgYXMgdGhlIENUQSBsaW5rIGluIGludml0ZSBlbWFpbHMgYW5kIHRvIHJlc3RyaWN0IHRoZSB3aWRnZXQgdG8geW91ciBkb21haW4gXHUyMDE0IHRoZSB3aWRnZXQgd2lsbCBvbmx5IHdvcmsgd2hlbiBlbWJlZGRlZCBvbiB0aGlzIG9yaWdpbiAoZS5nLiBodHRwczovL3lvdXJzaXRlLmNvbSkuXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cInVybFwiIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly95b3VycHJvZHVjdC5jb21cIiB2YWx1ZT0ke2Zvcm0ucHJvZHVjdF91cmwgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25JbnB1dD0ke2UgPT4gc2V0Rm9ybShmID0+ICh7IC4uLmYsIHByb2R1Y3RfdXJsOiBlLnRhcmdldC52YWx1ZSB9KSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPSR7c2F2aW5nfT5TYXZlIHNldHRpbmdzPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8JHtBUElLZXlzU2VjdGlvbn0gLz5cblxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXNlY3Rpb24gc2V0dGluZ3MtZGFuZ2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10aXRsZVwiPkRhbmdlciBab25lPC9kaXY+XG4gICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOjE0cHg7bWFyZ2luLWJvdHRvbToxNnB4XCI+UGF1c2luZyBzdG9wcyBuZXcgc2lnbnVwcyB3aGlsZSBwcmVzZXJ2aW5nIGV4aXN0aW5nIGRhdGEuPC9wPlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O2dhcDoxMnB4XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCJcbiAgICAgICAgICAgIGRpc2FibGVkPSR7Zm9ybS5zdGF0dXMgPT09ICdwYXVzZWQnfVxuICAgICAgICAgICAgb25DbGljaz0ke2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdQYXVzZSB0aGlzIGNhbXBhaWduPycpKSByZXR1cm47XG4gICAgICAgICAgICAgIHRyeSB7IGF3YWl0IGFwaS51cGRhdGVTZXR0aW5ncyh7IHN0YXR1czogJ3BhdXNlZCcgfSk7IHNldHRpbmdzQXN5bmMucmVsb2FkKCk7IHNldEZvcm0oZiA9PiAoeyAuLi5mLCBzdGF0dXM6ICdwYXVzZWQnIH0pKTsgfVxuICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7IHNldE1zZyh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IGVyci5tZXNzYWdlIH0pOyB9XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIFBhdXNlIENhbXBhaWduXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGRpc2FibGVkPSR7Zm9ybS5zdGF0dXMgPT09ICdhY3RpdmUnfVxuICAgICAgICAgICAgb25DbGljaz0ke2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHsgYXdhaXQgYXBpLnVwZGF0ZVNldHRpbmdzKHsgc3RhdHVzOiAnYWN0aXZlJyB9KTsgc2V0dGluZ3NBc3luYy5yZWxvYWQoKTsgc2V0Rm9ybShmID0+ICh7IC4uLmYsIHN0YXR1czogJ2FjdGl2ZScgfSkpOyB9XG4gICAgICAgICAgICAgIGNhdGNoIChlcnIpIHsgc2V0TXNnKHsgdHlwZTogJ2Vycm9yJywgdGV4dDogZXJyLm1lc3NhZ2UgfSk7IH1cbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgUmVzdW1lIENhbXBhaWduXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYH1cbiAgYDtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZXR1cCBwYWdlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbmNvbnN0IFBSRVZJRVdfVEFCUzogeyBpZDogU2lnbnVwVmlldzsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gIHsgaWQ6ICdub25lJywgICAgICBsYWJlbDogJ05vdCBzaWduZWQgaW4nIH0sXG4gIHsgaWQ6ICdzaWduZWRfaW4nLCBsYWJlbDogJ1NpZ25lZCBpbicgfSxcbiAgeyBpZDogJ2ludml0ZWQnLCAgIGxhYmVsOiAnSW52aXRlZCcgfSxcbl07XG5cbmNvbnN0IEFDQ0VOVF9QUkVTRVRTID0gW1xuICB7IGNvbG9yOiAnIzYzNjZmMScsIGxhYmVsOiAnSW5kaWdvJyB9LFxuICB7IGNvbG9yOiAnIzNiODJmNicsIGxhYmVsOiAnQmx1ZScgfSxcbiAgeyBjb2xvcjogJyMxMGI5ODEnLCBsYWJlbDogJ0VtZXJhbGQnIH0sXG4gIHsgY29sb3I6ICcjZjU5ZTBiJywgbGFiZWw6ICdBbWJlcicgfSxcbiAgeyBjb2xvcjogJyNlZjQ0NDQnLCBsYWJlbDogJ1JlZCcgfSxcbiAgeyBjb2xvcjogJyM4YjVjZjYnLCBsYWJlbDogJ1Zpb2xldCcgfSxcbiAgeyBjb2xvcjogJyNlYzQ4OTknLCBsYWJlbDogJ1BpbmsnIH0sXG4gIHsgY29sb3I6ICcjMDAwMDAwJywgbGFiZWw6ICdCbGFjaycgfSxcbl07XG5cbi8vIEJ1aWxkcyB0aGUgaW5saW5lIDxzY3JpcHQ+IHRoYXQgaW50ZXJjZXB0cyBmZXRjaCAoYW5kIG9wdGlvbmFsbHkgbG9jYWxTdG9yYWdlKSBpbnNpZGUgYVxuLy8gcHJldmlldyBzcmNkb2MgaWZyYW1lIHNvIHRoZSByZWFsIHdpZGdldCBKUyByZW5kZXJzIHdpdGggZmFrZSBkYXRhIGluc3RlYWQgb2YgbGl2ZSBBUEkgY2FsbHMuXG50eXBlIFNpZ251cFZpZXcgPSAnbm9uZScgfCAnc2lnbmVkX2luJyB8ICdpbnZpdGVkJztcblxuZnVuY3Rpb24gYnVpbGRQcmV2aWV3TW9ja1NjcmlwdChjYW1wYWlnblNsdWc6IHN0cmluZywgc2lnbnVwVmlldzogU2lnbnVwVmlldyk6IHN0cmluZyB7XG4gIGNvbnN0IGJhc2VTaWdudXAgPSB7IGlkOiAncHJldmlldycsIGNhbXBhaWduX2lkOiAncHJldmlldy1jaWQnLCBlbWFpbDogJ3lvdUBleGFtcGxlLmNvbScsIHJlZmVycmFsX2NvZGU6ICdQUlZXMDAwMScsIGJhc2VfcG9zaXRpb246IDEsIGVmZmVjdGl2ZV9wb3NpdGlvbjogMSwgcmVmZXJyYWxfY291bnQ6IDAsIHN0YXR1czogJ3ZlcmlmaWVkJyB9O1xuICBjb25zdCBzaWdudXBEYXRhID0gc2lnbnVwVmlldyA9PT0gJ2ludml0ZWQnXG4gICAgPyB7IC4uLmJhc2VTaWdudXAsIHN0YXR1czogJ2ludml0ZWQnIH1cbiAgICA6IGJhc2VTaWdudXA7XG4gIGNvbnN0IGhhc1NpZ251cCA9IHNpZ251cFZpZXcgIT09ICdub25lJztcbiAgY29uc3QgbW9ja0RhdGEgPSB7XG4gICAgY2FtcGFpZ25faWQ6ICdwcmV2aWV3LWNpZCcsIGNhbXBhaWduX25hbWU6ICdNeSBQcm9kdWN0Jywgc2x1ZzogY2FtcGFpZ25TbHVnLFxuICAgIHRvdGFsX3NpZ251cHM6IDAsXG4gICAgLi4uKGhhc1NpZ251cCA/IHsgc2lnbnVwOiBzaWdudXBEYXRhIH0gOiB7fSksXG4gIH07XG5cbiAgY29uc3QgbHNLZXkgPSBKU09OLnN0cmluZ2lmeShgZXBfJHtjYW1wYWlnblNsdWd9YCk7XG4gIGNvbnN0IGxzVmFsID0gSlNPTi5zdHJpbmdpZnkoSlNPTi5zdHJpbmdpZnkoc2lnbnVwRGF0YSkpO1xuXG4gIC8vIFNoYWRvdyB3aW5kb3cubG9jYWxTdG9yYWdlIGluIHRoZSBpZnJhbWUgc28gdGhlIHBhcmVudCdzIHJlYWwgbG9jYWxTdG9yYWdlIGlzIHVudG91Y2hlZC5cbiAgY29uc3QgbHNNb2NrID0gaGFzU2lnbnVwXG4gICAgPyBgdmFyIF9scz17fTtfbHNbJHtsc0tleX1dPSR7bHNWYWx9O3RyeXtPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCdsb2NhbFN0b3JhZ2UnLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57Z2V0SXRlbTpmdW5jdGlvbihrKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9scyxrKT9fbHNba106bnVsbDt9LHNldEl0ZW06ZnVuY3Rpb24oayx2KXtfbHNba109U3RyaW5nKHYpO30scmVtb3ZlSXRlbTpmdW5jdGlvbihrKXtkZWxldGUgX2xzW2tdO30sY2xlYXI6ZnVuY3Rpb24oKXtfbHM9e307fSxrZXk6ZnVuY3Rpb24oaSl7cmV0dXJuIE9iamVjdC5rZXlzKF9scylbaV18fG51bGw7fSxnZXQgbGVuZ3RoKCl7cmV0dXJuIE9iamVjdC5rZXlzKF9scykubGVuZ3RoO319O30sY29uZmlndXJhYmxlOnRydWV9KTt9Y2F0Y2goZSl7fWBcbiAgICA6ICcnO1xuXG4gIHJldHVybiBgPHNjcmlwdD4oZnVuY3Rpb24oKXske2xzTW9ja307dmFyIF9kPSR7SlNPTi5zdHJpbmdpZnkobW9ja0RhdGEpfTt2YXIgX3M9JHtKU09OLnN0cmluZ2lmeShzaWdudXBEYXRhKX07dmFyIF9mPXdpbmRvdy5mZXRjaC5iaW5kKHdpbmRvdyk7d2luZG93LmZldGNoPWZ1bmN0aW9uKHUsbyl7dmFyIHVzPVN0cmluZyh1KTtpZih1cy5pbmRleE9mKCcvYXBpL3YxL3cvJykhPT0tMSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShfZCkse3N0YXR1czoyMDAsaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfX0pKTtpZih1cy5pbmRleE9mKCcvYXBpL3YxL2NhbXBhaWducy8nKSE9PS0xJiZvJiZvLm1ldGhvZD09PSdQT1NUJylyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShfcykse3N0YXR1czoyMDAsaGVhZGVyczp7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfX0pKTtyZXR1cm4gX2YodSxvKTt9O30pKCk7PFxcL3NjcmlwdD5gO1xufVxuXG4vLyBCdWlsZHMgYSBjb21wbGV0ZSBzcmNkb2Mgc3RyaW5nIGZvciBhIHByZXZpZXcgaWZyYW1lLlxuLy8gZWFybHktcGFzcyBnZXRzIGFuIGV4cGxpY2l0IHdpZHRoIHNvIGJvdGggc2lnbmVkLWluIGFuZCBub3Qtc2lnbmVkLWluIHZpZXdzIHN0YXkgdGhlIHNhbWUgc2l6ZS5cbmZ1bmN0aW9uIGJ1aWxkUHJldmlld1NyY2RvYyhcbiAgdGhlbWU6ICdsaWdodCcgfCAnZGFyaycsXG4gIGFjY2VudDogc3RyaW5nLFxuICBjYW1wYWlnblNsdWc6IHN0cmluZyxcbiAgc2lnbnVwVmlldzogU2lnbnVwVmlldyxcbiAgb3JpZ2luOiBzdHJpbmcsXG4gIHBhZ2VVcmw6IHN0cmluZyxcbik6IHN0cmluZyB7XG4gIGNvbnN0IGJnID0gdGhlbWUgPT09ICdkYXJrJyA/ICcjMTExODI3JyA6ICcjZjNmNGY2JztcbiAgY29uc3QgbW9ja1NjcmlwdCA9IGJ1aWxkUHJldmlld01vY2tTY3JpcHQoY2FtcGFpZ25TbHVnLCBzaWdudXBWaWV3KTtcbiAgcmV0dXJuIFtcbiAgICAnPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD1cIlVURi04XCI+JyxcbiAgICAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIj4nLFxuICAgIGA8YmFzZSBocmVmPVwiJHtwYWdlVXJsfS9cIj5gLFxuICAgICc8c3R5bGU+Kntib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjA7cGFkZGluZzowfScsXG4gICAgYGJvZHl7cGFkZGluZzoyNHB4IDE2cHg7YmFja2dyb3VuZDoke2JnfTttaW4taGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7fWAsXG4gICAgLy8gRml4ZWQgd2lkdGggcHJldmVudHMgdGhlIHdpZGdldCBmcm9tIGNoYW5naW5nIHNpemUgYmV0d2VlbiBpZGxlIGFuZCBzdWNjZXNzIHN0YXRlc1xuICAgIGBlYXJseS1wYXNze3dpZHRoOm1pbigyOHJlbSwxMDAlKX08L3N0eWxlPmAsXG4gICAgJzwvaGVhZD48Ym9keT4nLFxuICAgIG1vY2tTY3JpcHQsXG4gICAgYDxlYXJseS1wYXNzIGRhdGEtY2FtcGFpZ249XCIke2NhbXBhaWduU2x1Z31cIiBkYXRhLXRoZW1lPVwiJHt0aGVtZX1cIiBkYXRhLWFjY2VudD1cIiR7YWNjZW50fVwiPjwvZWFybHktcGFzcz5gLFxuICAgIGA8c2NyaXB0IHNyYz1cIiR7b3JpZ2lufS93aWRnZXQvd2lkZ2V0LmpzXCI+PFxcL3NjcmlwdD5gLFxuICAgICc8L2JvZHk+PC9odG1sPicsXG4gIF0uam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIFNldHVwUGFnZSgpIHtcbiAgY29uc3Qgc2V0dGluZ3NBc3luYyA9IHVzZUFzeW5jKCgpID0+IGFwaS5nZXRTZXR0aW5ncygpLCBbXSk7XG4gIC8vIFNuaXBwZXQgc3RhdGUgXHUyMDE0IHVwZGF0ZXMgbGl2ZSBhcyB1c2VyIHR3ZWFrcyBjb250cm9sc1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlPCdsaWdodCcgfCAnZGFyayc+KCdsaWdodCcpO1xuICBjb25zdCBbYWNjZW50LCBzZXRBY2NlbnRdID0gdXNlU3RhdGUoJyM2MzY2ZjEnKTtcbiAgLy8gUHJldmlldyBzdGF0ZSBcdTIwMTQgb25seSB1cGRhdGVzIG9uIGNvbG9yIHBpY2tlciByZWxlYXNlIG9yIHByZXNldCBjbGljayAobm90IG1pZC1kcmFnKVxuICBjb25zdCBbcHJldmlld1RoZW1lLCBzZXRQcmV2aWV3VGhlbWVdID0gdXNlU3RhdGU8J2xpZ2h0JyB8ICdkYXJrJz4oJ2xpZ2h0Jyk7XG4gIGNvbnN0IFtwcmV2aWV3QWNjZW50LCBzZXRQcmV2aWV3QWNjZW50XSA9IHVzZVN0YXRlKCcjNjM2NmYxJyk7XG4gIC8vIEFjdGl2ZSBwcmV2aWV3IHRhYlxuICBjb25zdCBbYWN0aXZlUHJldmlldywgc2V0QWN0aXZlUHJldmlld10gPSB1c2VTdGF0ZTxTaWdudXBWaWV3Pignbm9uZScpO1xuICAvLyBFbWJlZCBjb2RlIGNvcHkgZmVlZGJhY2tcbiAgY29uc3QgW2NvZGVDb3BpZWQsIHNldENvZGVDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGlmIChzZXR0aW5nc0FzeW5jLmxvYWRpbmcpIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJsb2FkaW5nXCI+TG9hZGluZ1x1MjAyNjwvZGl2PmA7XG4gIGlmIChzZXR0aW5nc0FzeW5jLmVycm9yKSByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZXJyb3JcIj4ke3NldHRpbmdzQXN5bmMuZXJyb3J9PC9kaXY+YDtcblxuICBjb25zdCBiYXNlVXJsID0gc2V0dGluZ3NBc3luYy5kYXRhLmJhc2VfdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gIGNvbnN0IG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gIGNvbnN0IHBhZ2VVcmwgPSBzZXR0aW5nc0FzeW5jLmRhdGEucHJvZHVjdF91cmwgfHwgJ2h0dHBzOi8veW91ci1wcm9kdWN0LmNvbSc7XG5cbiAgLy8gQnVpbGQgc25pcHBldCBcdTIwMTQgb21pdCBhdHRyaWJ1dGVzIHRoYXQgbWF0Y2ggdGhlaXIgZGVmYXVsdHNcbiAgY29uc3QgYXR0cnM6IHN0cmluZ1tdID0gW2BkYXRhLWNhbXBhaWduPVwiJHtzbHVnfVwiYF07XG4gIGlmICh0aGVtZSAhPT0gJ2xpZ2h0JykgYXR0cnMucHVzaChgZGF0YS10aGVtZT1cIiR7dGhlbWV9XCJgKTtcbiAgaWYgKGFjY2VudC50b0xvd2VyQ2FzZSgpICE9PSAnIzYzNjZmMScpIGF0dHJzLnB1c2goYGRhdGEtYWNjZW50PVwiJHthY2NlbnR9XCJgKTtcbiAgY29uc3QgYXR0clN0ciA9IGF0dHJzLmxlbmd0aCA+IDEgPyAnXFxuICAgICAgICAnICsgYXR0cnMuam9pbignXFxuICAgICAgICAnKSA6ICcgJyArIGF0dHJzWzBdO1xuICBjb25zdCBzbmlwcGV0ID0gYDxzY3JpcHQgc3JjPVwiJHtiYXNlVXJsfS93aWRnZXQvd2lkZ2V0LmpzXCIke2F0dHJTdHJ9IGFzeW5jPjwvc2NyaXB0PmA7XG5cbiAgY29uc3QgaWZyYW1lS2V5ID0gYCR7cHJldmlld1RoZW1lfToke3ByZXZpZXdBY2NlbnR9YDtcbiAgY29uc3Qgc3JjZG9jQnlUYWI6IFJlY29yZDxTaWdudXBWaWV3LCBzdHJpbmc+ID0ge1xuICAgIG5vbmU6ICAgICAgYnVpbGRQcmV2aWV3U3JjZG9jKHByZXZpZXdUaGVtZSwgcHJldmlld0FjY2VudCwgc2x1ZywgJ25vbmUnLCAgICAgIG9yaWdpbiwgcGFnZVVybCksXG4gICAgc2lnbmVkX2luOiBidWlsZFByZXZpZXdTcmNkb2MocHJldmlld1RoZW1lLCBwcmV2aWV3QWNjZW50LCBzbHVnLCAnc2lnbmVkX2luJywgb3JpZ2luLCBwYWdlVXJsKSxcbiAgICBpbnZpdGVkOiAgIGJ1aWxkUHJldmlld1NyY2RvYyhwcmV2aWV3VGhlbWUsIHByZXZpZXdBY2NlbnQsIHNsdWcsICdpbnZpdGVkJywgICBvcmlnaW4sIHBhZ2VVcmwpLFxuICB9O1xuICBjb25zdCBhY3RpdmVJZnJhbWVLZXkgPSBgJHthY3RpdmVQcmV2aWV3fToke2lmcmFtZUtleX1gO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZW1lQ2hhbmdlKHQ6ICdsaWdodCcgfCAnZGFyaycpIHtcbiAgICBzZXRUaGVtZSh0KTtcbiAgICBzZXRQcmV2aWV3VGhlbWUodCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBY2NlbnRJbnB1dCh2OiBzdHJpbmcpIHtcbiAgICBzZXRBY2NlbnQodik7IC8vIHNuaXBwZXQgdXBkYXRlcyBsaXZlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBY2NlbnRDb21taXQodjogc3RyaW5nKSB7XG4gICAgc2V0QWNjZW50KHYpO1xuICAgIGlmICgvXiNbMC05YS1mQS1GXXs2fSQvLnRlc3QodikpIHNldFByZXZpZXdBY2NlbnQodik7IC8vIHByZXZpZXcgcmVsb2Fkc1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0UHJlc2V0KGM6IHN0cmluZykge1xuICAgIHNldEFjY2VudChjKTtcbiAgICBzZXRQcmV2aWV3QWNjZW50KGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29weUNvZGUoKSB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc25pcHBldCkudGhlbigoKSA9PiB7XG4gICAgICBzZXRDb2RlQ29waWVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb2RlQ29waWVkKGZhbHNlKSwgMjAwMCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gaHRtbGBcbiAgICA8aDEgY2xhc3M9XCJwYWdlLXRpdGxlXCI+U2V0dXA8L2gxPlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHVwLWdyaWRcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cInNldHVwLWxlZnQtY29sXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtdGl0bGVcIj5DdXN0b21pemUgd2lkZ2V0PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbToyMHB4XCI+XG4gICAgICAgICAgICA8bGFiZWw+VGhlbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHVwLXRoZW1lLWNhcmRzXCI+XG4gICAgICAgICAgICAgICR7KFsnbGlnaHQnLCAnZGFyayddIGFzIGNvbnN0KS5tYXAodCA9PiBodG1sYFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT0ke3R9XG4gICAgICAgICAgICAgICAgICBjbGFzcz0keydzZXR1cC10aGVtZS1jYXJkJyArICh0aGVtZSA9PT0gdCA/ICcgYWN0aXZlJyA6ICcnKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiBoYW5kbGVUaGVtZUNoYW5nZSh0KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSR7J3NldHVwLXRoZW1lLXRodW1iIHNldHVwLXRoZW1lLXRodW1iLScgKyB0fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR1cC10aGVtZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAke3QgPT09ICdsaWdodCcgPyAnXHUyNjAwXHVGRTBGIExpZ2h0JyA6ICdcdUQ4M0NcdURGMTkgRGFyayd9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgYCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+QWNjZW50IGNvbG9yPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo4cHg7bWFyZ2luLXRvcDo4cHhcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT0ke2FjY2VudH1cbiAgICAgICAgICAgICAgICBvbklucHV0PSR7KGU6IEV2ZW50KSA9PiBoYW5kbGVBY2NlbnRJbnB1dCgoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPSR7KGU6IEV2ZW50KSA9PiBoYW5kbGVBY2NlbnRDb21taXQoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKX1cbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOjM4cHg7aGVpZ2h0OjM0cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO2JvcmRlci1yYWRpdXM6NnB4O3BhZGRpbmc6MnB4O2N1cnNvcjpwb2ludGVyO2JhY2tncm91bmQ6dmFyKC0tc3VyZmFjZSlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9JHthY2NlbnR9XG4gICAgICAgICAgICAgICAgb25JbnB1dD0keyhlOiBFdmVudCkgPT4gaGFuZGxlQWNjZW50SW5wdXQoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT0keyhlOiBFdmVudCkgPT4gaGFuZGxlQWNjZW50Q29tbWl0KChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSl9XG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDo4NHB4O2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTtmb250LXNpemU6MTNweFwiXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiN1wiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIjNjM2NmYxXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHVwLXN3YXRjaGVzXCI+XG4gICAgICAgICAgICAgICR7QUNDRU5UX1BSRVNFVFMubWFwKCh7IGNvbG9yLCBsYWJlbCB9KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT0ke2NvbG9yfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9JHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzPSR7J3NldHVwLXN3YXRjaCcgKyAoYWNjZW50ID09PSBjb2xvciA/ICcgYWN0aXZlJyA6ICcnKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPSR7J2JhY2tncm91bmQ6JyArIGNvbG9yfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz0keygpID0+IHNlbGVjdFByZXNldChjb2xvcil9XG4gICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICBgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtc2VjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10aXRsZVwiPkVtYmVkIGNvZGU8L2Rpdj5cbiAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZToxM3B4O2NvbG9yOnZhcigtLW11dGVkKTttYXJnaW4tYm90dG9tOjE0cHg7bGluZS1oZWlnaHQ6MS41XCI+XG4gICAgICAgICAgICBQYXN0ZSB0aGlzIHNuaXBwZXQgaW50byB5b3VyIHBhZ2UuIFVwZGF0ZXMgYXMgeW91IGN1c3RvbWl6ZSBhYm92ZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNldHVwLWNvZGUtYmxvY2tcIj5cbiAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJzZXR1cC1jb2RlLXByZVwiPiR7c25pcHBldH08L3ByZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR1cC1jb2RlLWZvb3RlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSR7J3NldHVwLWNvZGUtY29weScgKyAoY29kZUNvcGllZCA/ICcgY29waWVkJyA6ICcnKX0gb25DbGljaz0ke2NvcHlDb2RlfT5cbiAgICAgICAgICAgICAgICAke2NvZGVDb3BpZWQgPyAnXHUyNzEzIENvcGllZCEnIDogJ1x1RDgzRFx1RENDQiBDb3B5IGNvZGUnfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtc2VjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10aXRsZVwiPkdldHRpbmcgc3RhcnRlZDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR1cC1zdGVwc1wiPlxuICAgICAgICAgICAgJHtbXG4gICAgICAgICAgICAgICdDdXN0b21pemUgdGhlIHdpZGdldCB0aGVtZSBhbmQgY29sb3IgYWJvdmUnLFxuICAgICAgICAgICAgICAnQ29weSB0aGUgZW1iZWQgY29kZScsXG4gICAgICAgICAgICAgIGh0bWxgUGFzdGUgaXQgYmVmb3JlIDxjb2RlPiR7JzwvYm9keT4nfTwvY29kZT4gaW4geW91ciBwYWdlIEhUTUxgLFxuICAgICAgICAgICAgICAnUHVibGlzaCB5b3VyIHBhZ2UnLFxuICAgICAgICAgICAgICAnU2hhcmUgeW91ciBsaW5rIGFuZCB3YXRjaCBzaWdudXBzIHJvbGwgaW4nLFxuICAgICAgICAgICAgXS5tYXAoKHN0ZXAsIGkpID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYga2V5PSR7aX0gY2xhc3M9XCJzZXR1cC1zdGVwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHVwLXN0ZXAtbnVtXCI+JHtpICsgMX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dXAtc3RlcC10ZXh0XCI+JHtzdGVwfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR1cC1wcmV2aWV3LWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtc2VjdGlvblwiPlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MTRweCAyMHB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlcik7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXRpdGxlXCIgc3R5bGU9XCJtYXJnaW46MFwiPlByZXZpZXc8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjEycHg7Y29sb3I6dmFyKC0tbXV0ZWQpO2ZvbnQtZmFtaWx5OnVpLW1vbm9zcGFjZSxtb25vc3BhY2VcIj4ke3ByZXZpZXdUaGVtZX0gXHUwMEI3ICR7cHJldmlld0FjY2VudH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jaHJvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWNocm9tZS1kb3RzXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJldmlldy1jaHJvbWUtZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXZpZXctY2hyb21lLWRvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmV2aWV3LWNocm9tZS1kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWNocm9tZS11cmxcIj4ke3BhZ2VVcmx9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy10YWJzXCI+XG4gICAgICAgICAgICAke1BSRVZJRVdfVEFCUy5tYXAodGFiID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9JHt0YWIuaWR9XG4gICAgICAgICAgICAgICAgY2xhc3M9JHsncHJldmlldy10YWInICsgKGFjdGl2ZVByZXZpZXcgPT09IHRhYi5pZCA/ICcgYWN0aXZlJyA6ICcnKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPSR7KCkgPT4gc2V0QWN0aXZlUHJldmlldyh0YWIuaWQpfVxuICAgICAgICAgICAgICA+JHt0YWIubGFiZWx9PC9idXR0b24+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgIGtleT0ke2FjdGl2ZUlmcmFtZUtleX1cbiAgICAgICAgICAgIHNyY2RvYz0ke3NyY2RvY0J5VGFiW2FjdGl2ZVByZXZpZXddfVxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlO2JvcmRlcjpub25lO2Rpc3BsYXk6YmxvY2tcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcbiAgICAgICAgICAgIHRpdGxlPSR7J1dpZGdldCBwcmV2aWV3IFx1MjAxNCAnICsgYWN0aXZlUHJldmlld31cbiAgICAgICAgICA+PC9pZnJhbWU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICBgO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFjY291bnQgaG9tZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIEFjY291bnRIb21lKCkge1xuICBjb25zdCB7IGRhdGE6IGNhbXBhaWducywgbG9hZGluZywgZXJyb3IgfSA9IHVzZUFzeW5jKCgpID0+IGFjY291bnRBcGkubGlzdENhbXBhaWducygpLCBbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Byb2R1Y3RVUkwsIHNldFByb2R1Y3RVUkxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3JlYXRpbmcsIHNldENyZWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDcmVhdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRDcmVhdGluZyh0cnVlKTtcbiAgICBzZXRNc2cobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjY291bnRBcGkuY3JlYXRlQ2FtcGFpZ24obmFtZS50cmltKCksIHByb2R1Y3RVUkwudHJpbSgpKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9kYXNoYm9hcmQvJHtyZXMuc2x1Z30vYDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldE1zZyh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgc2V0Q3JlYXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0YXR1c0JhZGdlQ2xhc3MgPSAoc3RhdHVzKSA9PlxuICAgICh7IGFjdGl2ZTogJ2JhZGdlLXN1Y2Nlc3MnLCBwYXVzZWQ6ICdiYWRnZS13YXJuaW5nJyB9W3N0YXR1c10gfHwgJ2JhZGdlLW11dGVkJyk7XG5cbiAgY29uc3QgaGFzQ2FtcGFpZ25zID0gIWxvYWRpbmcgJiYgIWVycm9yICYmIGNhbXBhaWducyAmJiBjYW1wYWlnbnMubGVuZ3RoID4gMDtcbiAgY29uc3QgaXNGaXJzdENhbXBhaWduID0gIWxvYWRpbmcgJiYgIWVycm9yICYmIGNhbXBhaWducyAmJiBjYW1wYWlnbnMubGVuZ3RoID09PSAwO1xuXG4gIHJldHVybiBodG1sYDwke0ZyYWdtZW50fT5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8YSBocmVmPVwiL2Rhc2hib2FyZC9cIiBzdHlsZT1cImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjhweDt0ZXh0LWRlY29yYXRpb246bm9uZVwiPjxpbWcgc3JjPVwiL2Fzc2V0cy9sb2dvLnN2Z1wiIGFsdD1cIkVhcmx5UGFzc1wiIGNsYXNzPVwiaGVhZGVyLWxvZ29cIiAvPjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxNnB4O2NvbG9yOnZhcigtLXByaW1hcnkpXCI+RWFybHlQYXNzPC9zcGFuPjwvYT5cbiAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvZGFzaGJvYXJkL2xvZ291dFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6YXV0b1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgdHlwZT1cInN1Ym1pdFwiPlNpZ24gb3V0PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxuICAgICAgJHtoYXNDYW1wYWlnbnMgJiYgaHRtbGBcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbToyNHB4XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwicGFnZS10aXRsZVwiIHN0eWxlPVwibWFyZ2luOjBcIj5NeSBDYW1wYWlnbnM8L2gxPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPSR7KCkgPT4geyBzZXRTaG93Rm9ybSh0cnVlKTsgc2V0TXNnKG51bGwpOyB9fT4rIE5ldyBjYW1wYWlnbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cbiAgICAgICR7bXNnICYmIGh0bWxgPGRpdiBjbGFzcz0ke2BhbGVydCBhbGVydC0ke21zZy50eXBlfWB9PiR7bXNnLnRleHR9PC9kaXY+YH1cblxuICAgICAgJHtsb2FkaW5nID8gaHRtbGA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiPkxvYWRpbmcgY2FtcGFpZ25zXHUyMDI2PC9kaXY+YCA6XG4gICAgICAgIGVycm9yID8gaHRtbGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZXJyb3JcIj4ke2Vycm9yfTwvZGl2PmAgOlxuICAgICAgICBpc0ZpcnN0Q2FtcGFpZ24gJiYgIXNob3dGb3JtID8gaHRtbGBcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjgwcHggMjRweDttYXgtd2lkdGg6NTIwcHg7bWFyZ2luOjAgYXV0b1wiPlxuICAgICAgICAgICAgPGgyIHN0eWxlPVwiZm9udC1zaXplOjIycHg7Zm9udC13ZWlnaHQ6NzAwO21hcmdpbjowIDAgMTJweFwiPkNyZWF0ZSB5b3VyIGZpcnN0IGNhbXBhaWduPC9oMj5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6dmFyKC0tbXV0ZWQpO2ZvbnQtc2l6ZToxNXB4O2xpbmUtaGVpZ2h0OjEuNjttYXJnaW46MCAwIDMycHg7bWF4LXdpZHRoOjM4MHB4XCI+XG4gICAgICAgICAgICAgIFNldCB1cCBhIHdhaXRsaXN0IGluIG1pbnV0ZXMuIEFkZCB0aGUgd2lkZ2V0IHRvIHlvdXIgc2l0ZSBhbmQgc3RhcnQgY29sbGVjdGluZyBzaWdudXBzIHdpdGggYnVpbHQtaW4gcmVmZXJyYWwgdHJhY2tpbmcuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9XCJmb250LXNpemU6MTVweDtwYWRkaW5nOjEwcHggMjRweFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiBzZXRTaG93Rm9ybSh0cnVlKX0+XG4gICAgICAgICAgICAgIENyZWF0ZSB5b3VyIGZpcnN0IGNhbXBhaWduXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCA6XG4gICAgICAgIGlzRmlyc3RDYW1wYWlnbiAmJiBzaG93Rm9ybSA/IGh0bWxgXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDo0ODBweDttYXJnaW46NDBweCBhdXRvIDBcIj5cbiAgICAgICAgICAgIDxoMiBzdHlsZT1cImZvbnQtc2l6ZToyMHB4O2ZvbnQtd2VpZ2h0OjcwMDttYXJnaW46MCAwIDI0cHhcIj5DcmVhdGUgeW91ciBmaXJzdCBjYW1wYWlnbjwvaDI+XG4gICAgICAgICAgICAke21zZyAmJiBodG1sYDxkaXYgY2xhc3M9JHtgYWxlcnQgYWxlcnQtJHttc2cudHlwZX1gfSBzdHlsZT1cIm1hcmdpbi1ib3R0b206MTZweFwiPiR7bXNnLnRleHR9PC9kaXY+YH1cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PSR7aGFuZGxlQ3JlYXRlfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MTZweFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5DYW1wYWlnbiBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgYXV0b0ZvY3VzIHZhbHVlPSR7bmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9JHtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNeSBQcm9kdWN0IFdhaXRsaXN0XCIgbWF4bGVuZ3RoPVwiMjAwXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjE2cHhcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyXCI+UHJvZHVjdCBVUkwgPCR7VG9vbHRpcH0gdGV4dD1cIllvdXIgcHJvZHVjdCdzIFVSTC4gVXNlZCBhcyB0aGUgQ1RBIGxpbmsgaW4gaW52aXRlIGVtYWlscyBhbmQgdG8gcmVzdHJpY3QgdGhlIHdpZGdldCB0byB5b3VyIGRvbWFpbiBcdTIwMTQgdGhlIHdpZGdldCB3aWxsIG9ubHkgd29yayB3aGVuIGVtYmVkZGVkIG9uIHRoaXMgb3JpZ2luIChlLmcuIGh0dHBzOi8veW91cnNpdGUuY29tKS5cIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ1cmxcIiB2YWx1ZT0ke3Byb2R1Y3RVUkx9XG4gICAgICAgICAgICAgICAgICBvbklucHV0PSR7ZSA9PiBzZXRQcm9kdWN0VVJMKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cHM6Ly95b3Vyc2l0ZS5jb20vcHJvZHVjdFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O2dhcDo4cHhcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPSR7Y3JlYXRpbmd9PlxuICAgICAgICAgICAgICAgICAgJHtjcmVhdGluZyA/ICdDcmVhdGluZ1x1MjAyNicgOiAnQ3JlYXRlIGNhbXBhaWduJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiB7IHNldFNob3dGb3JtKGZhbHNlKTsgc2V0TmFtZSgnJyk7IHNldFByb2R1Y3RVUkwoJycpOyBzZXRNc2cobnVsbCk7IH19PlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogaHRtbGBcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgJHtzaG93Rm9ybSAmJiBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtc2VjdGlvblwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbToyNHB4O21heC13aWR0aDo0ODBweFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy10aXRsZVwiPkNyZWF0ZSBjYW1wYWlnbjwvZGl2PlxuICAgICAgICAgICAgICAgICR7bXNnICYmIGh0bWxgPGRpdiBjbGFzcz0ke2BhbGVydCBhbGVydC0ke21zZy50eXBlfWB9IHN0eWxlPVwibWFyZ2luLWJvdHRvbToxNnB4XCI+JHttc2cudGV4dH08L2Rpdj5gfVxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PSR7aGFuZGxlQ3JlYXRlfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjE2cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNhbXBhaWduIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgYXV0b0ZvY3VzIHZhbHVlPSR7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PSR7ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IFByb2R1Y3QgV2FpdGxpc3RcIiBtYXhsZW5ndGg9XCIyMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxNnB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJcIj5Qcm9kdWN0IFVSTCA8JHtUb29sdGlwfSB0ZXh0PVwiWW91ciBwcm9kdWN0J3MgVVJMLiBVc2VkIGFzIHRoZSBDVEEgbGluayBpbiBpbnZpdGUgZW1haWxzIGFuZCB0byByZXN0cmljdCB0aGUgd2lkZ2V0IHRvIHlvdXIgZG9tYWluIFx1MjAxNCB0aGUgd2lkZ2V0IHdpbGwgb25seSB3b3JrIHdoZW4gZW1iZWRkZWQgb24gdGhpcyBvcmlnaW4gKGUuZy4gaHR0cHM6Ly95b3Vyc2l0ZS5jb20pLlwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ1cmxcIiB2YWx1ZT0ke3Byb2R1Y3RVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD0ke2UgPT4gc2V0UHJvZHVjdFVSTChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL3lvdXJzaXRlLmNvbS9wcm9kdWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtnYXA6OHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9JHtjcmVhdGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgJHtjcmVhdGluZyA/ICdDcmVhdGluZ1x1MjAyNicgOiAnQ3JlYXRlIGNhbXBhaWduJ31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiB7IHNldFNob3dGb3JtKGZhbHNlKTsgc2V0TmFtZSgnJyk7IHNldFByb2R1Y3RVUkwoJycpOyBzZXRNc2cobnVsbCk7IH19PlxuICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMzIwcHgsMWZyKSk7Z2FwOjE2cHhcIj5cbiAgICAgICAgICAgICAgJHtjYW1wYWlnbnMgJiYgY2FtcGFpZ25zLm1hcChjID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgPGEga2V5PSR7Yy5zbHVnfSBocmVmPSR7YC9kYXNoYm9hcmQvJHtjLnNsdWd9L2B9XG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6YmxvY2s7YmFja2dyb3VuZDp2YXIoLS1zdXJmYWNlKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWJvcmRlcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1yYWRpdXMpO3BhZGRpbmc6MjBweDt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjppbmhlcml0O3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIDAuMTVzXCJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPSR7ZSA9PiBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAndmFyKC0tcHJpbWFyeSknfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZU91dD0ke2UgPT4gZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3ZhcigtLWJvcmRlciknfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTVweDttYXJnaW4tYm90dG9tOjRweFwiPiR7Yy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjp2YXIoLS1tdXRlZCk7Zm9udC1zaXplOjEzcHhcIj4ke2Muc2x1Z308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSR7YGJhZGdlICR7c3RhdHVzQmFkZ2VDbGFzcyhjLnN0YXR1cyl9YH0+JHtjLnN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC8ke0ZyYWdtZW50fT5gO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFwcCBzaGVsbCAvIHJvdXRlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IFBBR0VTID0gW1xuICB7IGlkOiAnb3ZlcnZpZXcnLCAgICBsYWJlbDogJ1x1RDgzRFx1RENDQSBPdmVydmlldycsICAgIENvbXBvbmVudDogT3ZlcnZpZXdQYWdlIH0sXG4gIHsgaWQ6ICdzZXR1cCcsICAgICAgIGxhYmVsOiAnXHVEODNEXHVERTgwIFNldHVwJywgICAgICAgIENvbXBvbmVudDogU2V0dXBQYWdlIH0sXG4gIHsgaWQ6ICdzaWdudXBzJywgICAgIGxhYmVsOiAnXHVEODNEXHVEQzY1IFNpZ251cHMnLCAgICAgIENvbXBvbmVudDogU2lnbnVwc1BhZ2UgfSxcbiAgeyBpZDogJ2xlYWRlcmJvYXJkJywgbGFiZWw6ICdcdUQ4M0NcdURGQzYgTGVhZGVyYm9hcmQnLCAgQ29tcG9uZW50OiBMZWFkZXJib2FyZFBhZ2UgfSxcbiAgeyBpZDogJ2ludml0YXRpb25zJywgbGFiZWw6ICdcdUQ4M0RcdURDRUMgSW52aXRhdGlvbnMnLCAgIENvbXBvbmVudDogSW52aXRhdGlvbnNQYWdlIH0sXG4gIHsgaWQ6ICd3ZWJob29rcycsICAgIGxhYmVsOiAnXHVEODNEXHVERDE3IFdlYmhvb2tzJywgICAgIENvbXBvbmVudDogV2ViaG9va3NQYWdlIH0sXG4gIHsgaWQ6ICdzZXR0aW5ncycsICAgbGFiZWw6ICdcdTI2OTlcdUZFMEYgU2V0dGluZ3MnLCAgICAgQ29tcG9uZW50OiBTZXR0aW5nc1BhZ2UgfSxcbl07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgZ2V0UGFnZSA9ICgpID0+ICh3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSB8fCAnb3ZlcnZpZXcnKTtcbiAgY29uc3QgW2FjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2VdID0gdXNlU3RhdGUoZ2V0UGFnZSk7XG4gIGNvbnN0IFtjYW1wYWlnbk5hbWUsIHNldENhbXBhaWduTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjYW1wYWlnbnMsIHNldENhbXBhaWduc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBCYWNrd2FyZCBjb21wYXQ6IHJlZGlyZWN0IG9sZCAjYWNjZXNzIGhhc2ggdG8gI2ludml0YXRpb25zXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnI2FjY2VzcycpIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcjaW52aXRhdGlvbnMnKTtcbiAgICBhcGkuZ2V0U2V0dGluZ3MoKS50aGVuKHMgPT4gc2V0Q2FtcGFpZ25OYW1lKHMubmFtZSB8fCBzbHVnKSkuY2F0Y2goKCkgPT4ge30pO1xuICAgIGFjY291bnRBcGkubGlzdENhbXBhaWducygpLnRoZW4obGlzdCA9PiBzZXRDYW1wYWlnbnMobGlzdCkpLmNhdGNoKCgpID0+IHt9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25IYXNoQ2hhbmdlID0gKCkgPT4gc2V0QWN0aXZlUGFnZShnZXRQYWdlKCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcGFnZSA9IFBBR0VTLmZpbmQocCA9PiBwLmlkID09PSBhY3RpdmVQYWdlKSB8fCBQQUdFU1swXTtcblxuICByZXR1cm4gaHRtbGA8JHtGcmFnbWVudH0+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGEgaHJlZj1cIi9kYXNoYm9hcmQvXCIgc3R5bGU9XCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo4cHg7dGV4dC1kZWNvcmF0aW9uOm5vbmVcIj48aW1nIHNyYz1cIi9hc3NldHMvbG9nby5zdmdcIiBhbHQ9XCJFYXJseVBhc3NcIiBjbGFzcz1cImhlYWRlci1sb2dvXCIgLz48c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MTZweDtjb2xvcjp2YXIoLS1wcmltYXJ5KVwiPkVhcmx5UGFzczwvc3Bhbj48L2E+XG4gICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6OHB4O21hcmdpbi1sZWZ0OmF1dG9cIj5cbiAgICAgICAgJHtjYW1wYWlnbnMubGVuZ3RoID4gMSA/IGh0bWxgXG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgdmFsdWU9JHtzbHVnfVxuICAgICAgICAgICAgb25DaGFuZ2U9JHtlID0+IHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2Rhc2hib2FyZC8ke2UudGFyZ2V0LnZhbHVlfS9gOyB9fVxuICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6MTNweDtwYWRkaW5nOjRweCA4cHg7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO2JvcmRlci1yYWRpdXM6NnB4O2JhY2tncm91bmQ6dmFyKC0tc3VyZmFjZSk7Y29sb3I6dmFyKC0tdGV4dClcIj5cbiAgICAgICAgICAgICR7Y2FtcGFpZ25zLm1hcChjID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PSR7Yy5zbHVnfSB2YWx1ZT0ke2Muc2x1Z30+JHtjLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICBgKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgYCA6IGh0bWxgXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItY2FtcGFpZ25cIj4ke2NhbXBhaWduTmFtZSB8fCBzbHVnfTwvc3Bhbj5cbiAgICAgICAgYH1cbiAgICAgICAgPGEgaHJlZj1cIi9kYXNoYm9hcmQvXCJcbiAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZToxMnB4O2NvbG9yOnZhcigtLW11dGVkKTt0ZXh0LWRlY29yYXRpb246bm9uZTtwYWRkaW5nOjRweCAxMHB4O2JvcmRlcjoxcHggc29saWQgdmFyKC0tYm9yZGVyKTtib3JkZXItcmFkaXVzOjZweDt3aGl0ZS1zcGFjZTpub3dyYXBcIj5cbiAgICAgICAgICBcdTIxOTAgQWxsIGNhbXBhaWduc1xuICAgICAgICA8L2E+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvZGFzaGJvYXJkL2xvZ291dFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiB0eXBlPVwic3VibWl0XCI+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgPG5hdiBjbGFzcz1cInNpZGViYXJcIj5cbiAgICAgICAgJHtQQUdFUy5tYXAocCA9PiBodG1sYFxuICAgICAgICAgIDxhIGtleT0ke3AuaWR9XG4gICAgICAgICAgICBjbGFzcz0ke2BuYXYtaXRlbSR7YWN0aXZlUGFnZSA9PT0gcC5pZCA/ICcgYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICBocmVmPSR7YCMke3AuaWR9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9JHsoKSA9PiBzZXRBY3RpdmVQYWdlKHAuaWQpfT5cbiAgICAgICAgICAgICR7cC5sYWJlbH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIGApfVxuICAgICAgPC9uYXY+XG4gICAgICA8bWFpbiBjbGFzcz1cIm1haW4tY29udGVudFwiPlxuICAgICAgICA8JHtwYWdlLkNvbXBvbmVudH0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgPC8ke0ZyYWdtZW50fT5gO1xufVxuXG5yZW5kZXIoXG4gIGlzSG9tZSA/IGh0bWxgPCR7QWNjb3VudEhvbWV9IC8+YCA6IGh0bWxgPCR7QXBwfSAvPmAsXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQzBCTUE7QUQxQk4sSUVVREM7QUZWQyxJR0dIQztBSEhHLElHOEZNQztBSDlGTixJSStLSEM7QUovS0csSUkwTEhDO0FKMUxHLElJNExEQztBSjVMQyxJSXNOREM7QUp0TkMsSUtjREM7QUxkQyxJSzJCSEM7QUwzQkcsSUswS0RDO0FMMUtDLElLMktEQztBTDNLQyxJTUVJQztBTkZKLElBaUJNQyxJQUFnQyxDQUFHO0FBakJ6QyxJQWtCTUMsSUFBWSxDQUFBO0FBbEJsQixJQW1CTUMsSUFDWjtBQXBCTSxJQ0NNQyxJQUFVQyxNQUFNRDtBQVN0QixTQUFTRSxFQUFPQyxJQUFLQyxJQUFBQTtBQUUzQixXQUFTUixNQUFLUSxHQUFPRCxDQUFBQSxHQUFJUCxFQUFBQSxJQUFLUSxHQUFNUixFQUFBQTtBQUNwQyxTQUE2Qk87QUFDOUI7QUFRZ0IsU0FBQUUsRUFBV0MsSUFBQUE7QUFDdEJBLEVBQUFBLE1BQVFBLEdBQUtDLGNBQVlELEdBQUtDLFdBQVdDLFlB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LENBQUNKLE1BQUcsTUFBSUcsUUFBS0csR0FBRSxLQUFLSCxJQUFFLEdBQUVDLElBQUVGLEVBQUMsR0FBRUMsS0FBRSxJQUFHSCxPQUFJTSxHQUFFLEtBQUtILElBQUVILElBQUUsR0FBRUUsRUFBQyxHQUFFQyxLQUFFLEtBQUlDLEtBQUU7QUFBQSxJQUFFLEdBQUVJLEtBQUUsR0FBRUEsS0FBRVIsR0FBRSxRQUFPUSxNQUFJO0FBQUMsTUFBQUEsT0FBSSxNQUFJTCxNQUFHSSxHQUFFLEdBQUVBLEdBQUVDLEVBQUM7QUFBRyxlQUFRQyxLQUFFLEdBQUVBLEtBQUVULEdBQUVRLEVBQUMsRUFBRSxRQUFPQyxLQUFJLENBQUFSLEtBQUVELEdBQUVRLEVBQUMsRUFBRUMsRUFBQyxHQUFFLE1BQUlOLEtBQUUsUUFBTUYsTUFBR00sR0FBRSxHQUFFRCxLQUFFLENBQUNBLEVBQUMsR0FBRUgsS0FBRSxLQUFHQyxNQUFHSCxLQUFFLE1BQUlFLEtBQUUsU0FBT0MsTUFBRyxRQUFNSCxNQUFHRSxLQUFFLEdBQUVDLEtBQUUsTUFBSUEsS0FBRUgsS0FBRUcsR0FBRSxDQUFDLElBQUVDLEtBQUVKLE9BQUlJLEtBQUVBLEtBQUUsS0FBR0QsTUFBR0gsS0FBRSxRQUFNQSxNQUFHLFFBQU1BLEtBQUVJLEtBQUVKLEtBQUUsUUFBTUEsTUFBR00sR0FBRSxHQUFFSixLQUFFLEtBQUdBLE9BQUksUUFBTUYsTUFBR0UsS0FBRSxHQUFFRCxLQUFFRSxJQUFFQSxLQUFFLE1BQUksUUFBTUgsT0FBSUUsS0FBRSxLQUFHLFFBQU1ILEdBQUVRLEVBQUMsRUFBRUMsS0FBRSxDQUFDLE1BQUlGLEdBQUUsR0FBRSxNQUFJSixPQUFJRyxLQUFFQSxHQUFFLENBQUMsSUFBR0gsS0FBRUcsS0FBR0EsS0FBRUEsR0FBRSxDQUFDLEdBQUcsS0FBSyxHQUFFLEdBQUVILEVBQUMsR0FBRUEsS0FBRSxLQUFHLFFBQU1GLE1BQUcsUUFBT0EsTUFBRyxTQUFPQSxNQUFHLFNBQU9BLE1BQUdNLEdBQUUsR0FBRUosS0FBRSxLQUFHQyxNQUFHSCxLQUFHLE1BQUlFLE1BQUcsVUFBUUMsT0FBSUQsS0FBRSxHQUFFRyxLQUFFQSxHQUFFLENBQUM7QUFBQSxJQUFFO0FBQUMsV0FBT0MsR0FBRSxHQUFFRDtBQUFBLEVBQUMsR0FBRUosRUFBQyxDQUFDLEdBQUVDLEtBQUcsV0FBVSxDQUFDLENBQUMsR0FBRyxTQUFPLElBQUVBLEtBQUVBLEdBQUUsQ0FBQztBQUFDOzs7QUNBcmtDLElBQUlPLEtBQUUsbUJBQUUsS0FBSyxDQUFDOzs7QUNTOUgsSUFBTSxZQUFxQjtBQUUzQixJQUFNLE1BQU07QUFFWixJQUFNLFFBQXVCO0FBQzdCLElBQU0sU0FBaUIsTUFBTTtBQUM3QixJQUFNLFNBQWlCLE1BQU07QUFDN0IsSUFBTSxRQUFpQixNQUFNO0FBQzdCLElBQU0sT0FBaUIsTUFBTTtBQUM3QixJQUFNLFFBQWlCLE1BQU07QUFDN0IsSUFBTSxPQUFpQixNQUFNO0FBQzdCLElBQU0sT0FBaUIsTUFBTTtBQUM3QixJQUFNLE1BQWlCLE1BQU07QUFDN0IsSUFBTSxTQUFpQixNQUFNO0FBQzdCLElBQU0sV0FBaUIsTUFBTTtBQUM3QixJQUFNLFdBQWlCLE1BQU07QUFDN0IsSUFBTSxZQUFpQixNQUFNO0FBQzdCLElBQU0sU0FBaUIsTUFBTTtBQUM3QixJQUFNLGNBQWlCLE1BQU07QUFDN0IsSUFBTSxnQkFBaUIsTUFBTTtBQUM3QixJQUFNLGdCQUFpQixNQUFNO0FBQzdCLElBQU0sZ0JBQWlCLE1BQU07QUFDN0IsSUFBTSxlQUFpQixNQUFNO0FBQzdCLElBQU0sZUFBaUIsTUFBTTtBQUU3QixJQUFNLFFBQWM7QUFDcEIsSUFBTSxTQUFjO0FBQ3BCLElBQU0sTUFBYztBQUNwQixJQUFNLFNBQWM7QUFDcEIsSUFBTSxPQUFjO0FBQ3BCLElBQU0sUUFBYztBQUNwQixJQUFNLFdBQWM7QUFDcEIsSUFBTSxjQUFjLFdBQVc7QUFFL0IsSUFBTSxZQUFjO0FBQ3BCLElBQU0sWUFBYztBQUNwQixJQUFNLFVBQWM7QUFDcEIsSUFBTSxhQUFjO0FBQ3BCLElBQU0sYUFBYztBQUNwQixJQUFNLFdBQWM7QUFDcEIsSUFBTSxTQUFjO0FBQ3BCLElBQU0sU0FBYztBQUVwQixJQUFNLFNBQWM7QUFDcEIsSUFBTSxhQUFjO0FBRXBCLElBQU0sY0FBYztBQUVwQixJQUFNLFNBQVMsT0FBTyxVQUFVO0FBRWhDLElBQU0sTUFBTSxTQUFTLFdBQVk7QUFDakMsSUFBTSxNQUFNLFNBQVMsU0FBWTtBQUNqQyxJQUFNLE1BQU0sU0FBUyxZQUFZO0FBRWpDLElBQUk7QUFJSixJQUFJO0FBRUosU0FBUyxhQUFhO0FBQ3JCLE1BQUksV0FBVztBQUdmLE1BQUksV0FBVyxVQUFVO0FBQ3hCLGNBQVU7QUFFVixhQUFTLElBQUksUUFBUSxPQUFPLFVBQVU7QUFDdEMsWUFBUSxXQUFXLG9CQUFvQixVQUFVLElBQUssOEJBQThCLFVBQVUsSUFBSyxPQUFPO0FBQzFHLE9BQUcsUUFBUSxPQUFPLFVBQVU7QUFFNUIsUUFBSSxjQUFjLElBQUksWUFBWSxVQUFVLENBQUM7QUFBQSxFQUM5QztBQUNEO0FBRUEsU0FBUyxTQUFTLElBQUlDLElBQUc7QUFDeEIsTUFBSUEsTUFBSyxNQUFNO0FBQ2QsUUFBSSxLQUFLLEdBQUc7QUFDWixLQUFDLEdBQUcsU0FBU0EsRUFBQyxLQUFLLEdBQUcsSUFBSUEsRUFBQztBQUFBLEVBQzVCO0FBQ0Q7QUFFQSxTQUFTLFNBQVMsSUFBSUEsSUFBRztBQUN4QixNQUFJLEtBQUssR0FBRztBQUNaLEtBQUcsU0FBU0EsRUFBQyxLQUFLLEdBQUcsT0FBT0EsRUFBQztBQUM5QjtBQUVBLFNBQVMsV0FBVyxJQUFJLE1BQU0sT0FBTztBQUNwQyxLQUFHLE1BQU0sSUFBSSxJQUFJLFFBQVE7QUFDMUI7QUFFQSxTQUFTLFNBQVMsS0FBSyxLQUFLLE1BQU0sT0FBTztBQUN4QyxNQUFJLEtBQUssSUFBSSxjQUFjLEdBQUc7QUFFOUIsTUFBSSxPQUFPO0FBQ1YsYUFBUyxJQUFJLEdBQUc7QUFFakIsTUFBSSxRQUFRO0FBQ1gsU0FBSyxhQUFhLElBQUksS0FBSztBQUU1QixTQUFPO0FBQ1I7QUFFQSxTQUFTLFNBQVMsS0FBSyxNQUFNO0FBQzVCLFNBQU8sU0FBUyxPQUFPLEtBQUssSUFBSTtBQUNqQztBQUVBLElBQU0sYUFBYSxvQkFBSSxRQUFRO0FBRS9CLFNBQVMsUUFBUSxJQUFJLE1BQU0sTUFBTSxNQUFNLE1BQU07QUFDNUMsTUFBSSxRQUFRLGVBQWUsT0FBTyxRQUFRLE9BQU87QUFDakQsTUFBSSxXQUFXLFdBQVcsSUFBSSxFQUFFO0FBRWhDLE1BQUksU0FBUyxVQUFVO0FBQ3RCLE9BQUcsTUFBTSxZQUFZO0FBQ3JCLGVBQVcsSUFBSSxJQUFJLEtBQUs7QUFFeEIsUUFBSSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sUUFBUSxPQUFPO0FBQ2pELGVBQVMsSUFBSSxHQUFHO0FBQUE7QUFFaEIsZUFBUyxJQUFJLEdBQUc7QUFBQSxFQUNsQjtBQUNEO0FBRUEsSUFBTSxhQUFhLG9CQUFJLFFBQVE7QUFFL0IsU0FBUyxRQUFRLElBQUksWUFBWSxhQUFhO0FBQzdDLE1BQUksV0FBVyxhQUFhO0FBQzVCLE1BQUksV0FBVyxXQUFXLElBQUksRUFBRTtBQUVoQyxNQUFJLFlBQVksVUFBVTtBQUN6QixlQUFXLElBQUksSUFBSSxRQUFRO0FBQzNCLE9BQUcsTUFBTSxhQUFhO0FBQ3RCLE9BQUcsTUFBTSxjQUFjO0FBQUEsRUFDeEI7QUFDRDtBQUVBLElBQU0sWUFBWSxvQkFBSSxRQUFRO0FBRTlCLFNBQVMsT0FBTyxJQUFJLFFBQVEsUUFBUSxVQUFVO0FBQzdDLE1BQUksVUFBVSxTQUFTLEtBQUs7QUFDNUIsTUFBSSxVQUFVLFVBQVUsSUFBSSxFQUFFO0FBRTlCLE1BQUksV0FBVyxTQUFTO0FBQ3ZCLGNBQVUsSUFBSSxJQUFJLE9BQU87QUFDekIsT0FBRyxNQUFNLFNBQVMsU0FBUztBQUMzQixPQUFHLE1BQU0sUUFBUSxTQUFTO0FBQzFCLE9BQUcsTUFBTSxhQUFhLFdBQVcsQ0FBQyxTQUFPLElBQUksT0FBTztBQUNwRCxPQUFHLE1BQU0sWUFBWSxXQUFXLENBQUMsU0FBTyxJQUFJLE9BQU87QUFBQSxFQUNwRDtBQUNEO0FBRUEsSUFBTSxTQUFTLEVBQUMsU0FBUyxLQUFJO0FBQzdCLElBQU0sVUFBVSxpQ0FBSSxTQUFKLEVBQVksU0FBUyxLQUFJO0FBRXpDLFNBQVMsR0FBRyxJQUFJLElBQUksSUFBSSxNQUFNO0FBQzdCLEtBQUcsaUJBQWlCLElBQUksSUFBSSxPQUFPLFVBQVUsTUFBTTtBQUNwRDtBQUVBLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxNQUFNO0FBQzlCLEtBQUcsb0JBQW9CLElBQUksSUFBSSxNQUFNO0FBQ3RDO0FBRUEsVUFBVSxXQUFXO0FBR3JCLFNBQVMsV0FBVyxLQUFLLEtBQUssSUFBSSxJQUFJO0FBQ3JDLE1BQUk7QUFDSixPQUFLLE1BQU07QUFDWCxPQUFLLE1BQU0sSUFBSSxTQUFTO0FBQ3hCLE1BQUksVUFBVSxNQUFNO0FBRXBCLFNBQU8sS0FBSyxLQUFLLEdBQUc7QUFDbkIsVUFBTSxVQUFXLEtBQUssTUFBTyxJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUM7QUFFcEQsUUFBSSxJQUFJLEdBQUcsSUFBSTtBQUNkLFdBQUs7QUFBQTtBQUVMLFdBQUs7QUFBQSxFQUNQO0FBRUEsTUFBSSxNQUFNLElBQUksRUFBRSxLQUFLLElBQUksRUFBRSxJQUFJO0FBQzlCLFdBQU87QUFFUixTQUFPO0FBQ1I7QUFFQSxTQUFTLGFBQWEsV0FBVztBQUMvQixNQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssUUFBUTtBQUNuQyxRQUFJLEtBQUs7QUFDVCxRQUFJLEtBQUs7QUFFVCxhQUFTQyxLQUFJLEtBQUtBLE1BQUssS0FBS0EsTUFBSztBQUNoQyxVQUFJLFVBQVUsS0FBS0EsRUFBQyxDQUFDLEdBQUc7QUFDdkIsYUFBS0E7QUFDTDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBRUEsYUFBU0EsS0FBSSxLQUFLQSxNQUFLLEtBQUtBLE1BQUs7QUFDaEMsVUFBSSxVQUFVLEtBQUtBLEVBQUMsQ0FBQyxHQUFHO0FBQ3ZCLGFBQUtBO0FBQ0w7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUVBLFdBQU8sQ0FBQyxJQUFJLEVBQUU7QUFBQSxFQUNkO0FBRUEsU0FBTztBQUNUO0FBRUEsSUFBTSxhQUFhLENBQUFDLE9BQUtBLE1BQUs7QUFDN0IsSUFBTSxhQUFhLENBQUFBLE9BQUtBLE1BQUssUUFBUUEsS0FBSTtBQUV6QyxJQUFNLGNBQWMsYUFBYSxVQUFVO0FBQzNDLElBQU0sZUFBZSxhQUFhLFVBQVU7QUFFNUMsU0FBUyxVQUFVLE1BQU0sS0FBSyxLQUFLLFNBQVMsR0FBRyxNQUFNLE9BQU87QUFHM0QsTUFBSSxjQUFjLE1BQU0sZUFBZTtBQUN2QyxNQUFJLFlBQVksTUFBTSxhQUFhO0FBRW5DLEdBQUMsS0FBSyxHQUFHLElBQUksWUFBWSxNQUFNLEtBQUssR0FBRztBQUV2QyxNQUFJLE9BQU8sS0FBSyxHQUFHO0FBQ25CLE1BQUksT0FBTyxLQUFLLEdBQUc7QUFFbkIsTUFBSSxNQUFNLElBQUk7QUFDYixRQUFJLFVBQVUsR0FBRztBQUNoQixhQUFPLEtBQUssR0FBRztBQUNmLGFBQU8sS0FBSyxHQUFHO0FBQUEsSUFDaEIsV0FDUyxVQUFVLElBQUk7QUFDdEIsYUFBTyxLQUFLLEdBQUc7QUFDZixhQUFPLEtBQUssR0FBRztBQUFBLElBQ2hCLE9BQ0s7QUFDSixlQUFTRCxLQUFJLEtBQUtBLE1BQUssS0FBS0EsTUFBSztBQUNoQyxZQUFJQyxLQUFJLEtBQUtELEVBQUM7QUFFZCxZQUFJLFVBQVVDLEVBQUMsR0FBRztBQUNqQixjQUFJQSxLQUFJO0FBQ1AsbUJBQU9BO0FBQUEsbUJBQ0NBLEtBQUk7QUFDWixtQkFBT0E7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBRUEsU0FBTyxDQUFDLHNCQUFRLEtBQUssc0JBQVEsQ0FBQyxHQUFHO0FBQ2xDO0FBRUEsU0FBUyxTQUFTQyxNQUFLQyxNQUFLLE1BQU0sVUFBVTtBQUMzQyxNQUFJLFVBQVUsS0FBS0QsSUFBRztBQUN0QixNQUFJLFVBQVUsS0FBS0MsSUFBRztBQUV0QixNQUFJRCxRQUFPQyxNQUFLO0FBQ2YsUUFBSSxXQUFXLElBQUk7QUFDbEIsTUFBQUQsUUFBTztBQUNQLE1BQUFDLFFBQU87QUFBQSxJQUNSLE9BQ0s7QUFDSixNQUFBRCxRQUFPO0FBQ1AsTUFBQUMsUUFBTztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBRUEsTUFBSSxRQUFRLFFBQVEsS0FBSyxRQUFRO0FBRWpDLE1BQUksYUFBYSxXQUFXLElBQUksUUFBUTtBQUN4QyxNQUFJLGFBQWEsV0FBVyxJQUFJLE9BQU87QUFFdkMsTUFBSSxTQUFTLFdBQVcsTUFBTSxJQUFJRCxJQUFHLENBQUMsQ0FBQztBQUN2QyxNQUFJLFNBQVMsV0FBVyxNQUFNLElBQUlDLElBQUcsQ0FBQyxDQUFDO0FBRXZDLE1BQUksVUFBVSxJQUFJLE1BQU0sTUFBTTtBQUM5QixNQUFJLFVBQVUsSUFBSSxNQUFNLE1BQU07QUFHOUIsTUFBSSxRQUFRLElBQUk7QUFDZixRQUFJLFNBQVM7QUFDWixnQkFBVSxTQUFTLFNBQVMsQ0FBQyxNQUFNO0FBQ3BDLFFBQUksU0FBUztBQUNaLGdCQUFVLFNBQVMsU0FBUyxDQUFDLE1BQU07QUFBQSxFQUNyQztBQUVBLE1BQUksWUFBWSxRQUFRLEdBQUc7QUFDMUIsSUFBQUQsT0FBTSxVQUFVO0FBQ2hCLElBQUFDLE9BQU0sVUFBVTtBQUFBLEVBQ2pCLE9BQ0s7QUFDSixJQUFBRCxPQUFNLFlBQVlBLE1BQUssT0FBTztBQUM5QixJQUFBQyxPQUFNLFlBQVlBLE1BQUssT0FBTztBQUFBLEVBQy9CO0FBRUEsU0FBTyxDQUFDRCxNQUFLQyxJQUFHO0FBQ2pCO0FBRUEsU0FBUyxXQUFXRCxNQUFLQyxNQUFLLE1BQU0sVUFBVTtBQUM3QyxNQUFJLFNBQVMsU0FBU0QsTUFBS0MsTUFBSyxNQUFNLFFBQVE7QUFFOUMsTUFBSUQsUUFBTztBQUNWLFdBQU8sQ0FBQyxJQUFJO0FBRWIsTUFBSUMsUUFBTztBQUNWLFdBQU8sQ0FBQyxJQUFJO0FBRWIsU0FBTztBQUNSO0FBRUEsSUFBTSxXQUFXO0FBRWpCLElBQU0sZ0JBQWdCO0FBQUEsRUFDckIsTUFBTTtBQUFBLEVBQ04sS0FBSztBQUNOO0FBRUEsSUFBTSxlQUFlO0FBQUEsRUFDcEIsS0FBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUNQO0FBRUEsSUFBTSxXQUFXO0FBQUEsRUFDaEIsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUNOO0FBSUEsU0FBUyxTQUFTLE1BQU0sTUFBTSxNQUFNLE9BQU87QUFDMUMsTUFBSSxNQUFNLElBQUk7QUFDYixXQUFPLFVBQVUsTUFBTSxNQUFNLElBQUk7QUFFbEMsZUFBYSxNQUFPO0FBQ3BCLGVBQWEsT0FBTyxRQUFRLElBQUk7QUFDaEMsZUFBYSxPQUFPLFFBQVEsSUFBSTtBQUVoQyxTQUFPLFVBQVUsTUFBTSxNQUFNLFFBQVE7QUFDdEM7QUFHQSxTQUFTLE9BQU8sSUFBSSxJQUFJO0FBQ3ZCLFNBQU8sTUFBTSxPQUFPLEtBQUs7QUFDMUI7QUFJQSxTQUFTLFFBQVEsTUFBTSxNQUFNLE1BQU07QUFDbEMsU0FBTyxPQUFPLE1BQU0sQ0FBQztBQUNyQixTQUFPLE9BQU8sTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUVuQyxTQUFPLFFBQVEsTUFBTTtBQUNwQixRQUFJLEtBQUssSUFBSSxLQUFLO0FBQ2pCLGFBQU87QUFDUjtBQUFBLEVBQ0Q7QUFFQSxTQUFPO0FBQ1I7QUFFQSxTQUFTLFVBQVUsTUFBTSxNQUFNLEtBQUs7QUFDbkMsTUFBSSxPQUFPLElBQUk7QUFDZixNQUFJLE9BQU8sSUFBSTtBQUVmLE1BQUksU0FBUyxPQUFPLEtBQUssS0FBSyxDQUFDO0FBQy9CLE1BQUksU0FBUyxPQUFPLEtBQUssS0FBSyxDQUFDO0FBRS9CLE1BQUksVUFBVSxPQUFPLEtBQUssTUFBTSxDQUFDLEdBQUc7QUFDcEMsTUFBSSxVQUFVLE9BQU8sS0FBSyxNQUFPLEdBQUc7QUFFcEMsTUFBSSxVQUFVLE9BQU8sS0FBSyxNQUFPLEdBQUc7QUFDcEMsTUFBSSxVQUFVLE9BQU8sS0FBSyxNQUFNLENBQUMsR0FBRztBQUVwQyxNQUFJLGNBQWMsT0FBTyxLQUFLLE1BQU0sQ0FBQztBQUNyQyxNQUFJLGNBQWMsT0FBTyxLQUFLLE1BQU0sQ0FBQztBQUVyQyxNQUFJLFFBQVEsT0FBTztBQUNuQixNQUFJLFdBQVcsTUFBTSxLQUFLO0FBRTFCLE1BQUksWUFBWSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDO0FBQ3hDLE1BQUksWUFBWSxNQUFNLFNBQVM7QUFFL0IsTUFBSSxpQkFBaUIsSUFBSSxZQUFZLFFBQVE7QUFTN0MsTUFBSSxRQUFRLFNBQVMsaUJBQWlCLElBQUk7QUFDekMsWUFBUTtBQUlSLFFBQUksUUFBUSxLQUFLLFFBQVEsR0FBRztBQUMzQixjQUFRO0FBRVIsVUFBSSxlQUFlLEtBQUssV0FBVztBQUNsQyxpQkFBUztBQUVWLFVBQUksZUFBZSxLQUFLLFdBQVcsQ0FBQztBQUNuQyxpQkFBUztBQUFBLElBQ1g7QUFBQSxFQUNEO0FBRUEsTUFBSSxlQUFlLFNBQVMsYUFBYTtBQUN6QyxNQUFJLE1BQWUsTUFBTSxZQUFZO0FBQ3JDLE1BQUksT0FBZSxJQUFJLElBQUksTUFBTSxHQUFHLENBQUM7QUFFckMsTUFBSSxVQUFXLGdCQUFnQixTQUFTLElBQUssUUFBUSxJQUFJLE1BQUssSUFBSztBQUNuRSxNQUFJLFVBQVcsU0FBUyxZQUFZLE9BQU8sU0FBUyxPQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ2hFLE1BQUksV0FBVyxRQUFRLFlBQVksZUFBZSxLQUFLLGVBQWUsS0FBSyxXQUFXLFdBQVcsZUFBZSxLQUFLLFdBQVcsV0FBVyxVQUFVO0FBQ3JKLE1BQUksU0FBVyxJQUFJLFNBQVMsVUFBVSxZQUFZLFFBQVEsV0FBVyxXQUFXLElBQUksVUFBVSxPQUFPLENBQUM7QUFFdEcsTUFBSSxVQUFXLGdCQUFnQixTQUFTLElBQUssUUFBUSxJQUFJLE1BQUssSUFBSztBQUNuRSxNQUFJLFVBQVcsU0FBUyxZQUFZLE9BQU8sU0FBUyxPQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ2hFLE1BQUksV0FBVyxRQUFRLFlBQVksZUFBZSxLQUFLLGVBQWUsS0FBSyxXQUFXLFdBQVcsZUFBZSxLQUFLLFdBQVcsV0FBVyxVQUFVLENBQUM7QUFDdEosTUFBSSxTQUFXLElBQUksU0FBUyxVQUFVLFlBQVksUUFBUSxXQUFXLFdBQVcsSUFBSSxVQUFVLE9BQU8sQ0FBQztBQUV0RyxNQUFJLFVBQVUsVUFBVSxVQUFVO0FBQ2pDLGFBQVM7QUFFVixTQUFPLENBQUMsUUFBUSxNQUFNO0FBQ3ZCO0FBR0EsSUFBTSxlQUFlLElBQUksS0FBSyxhQUFhLFNBQVMsSUFBSSxXQUFXLE9BQU87QUFDMUUsSUFBTSxTQUFTLFNBQU8sYUFBYSxPQUFPLEdBQUc7QUFFN0MsSUFBTUMsS0FBSTtBQUVWLElBQU0sS0FBS0EsR0FBRTtBQUNiLElBQU0sTUFBTUEsR0FBRTtBQUNkLElBQU0sUUFBUUEsR0FBRTtBQUNoQixJQUFNLFFBQVFBLEdBQUU7QUFDaEIsSUFBTSxPQUFPQSxHQUFFO0FBQ2YsSUFBTSxNQUFNQSxHQUFFO0FBQ2QsSUFBTSxNQUFNQSxHQUFFO0FBQ2QsSUFBTSxNQUFNQSxHQUFFO0FBQ2QsSUFBTSxPQUFPQSxHQUFFO0FBQ2YsSUFBTSxRQUFRQSxHQUFFO0FBQ2hCLElBQU0sT0FBT0EsR0FBRTtBQUVmLElBQU0sT0FBUSxDQUFDSCxJQUFHLFlBQVksTUFBTUcsR0FBRSxLQUFLSCxFQUFDLElBQUk7QUFDaEQsSUFBTSxRQUFRLENBQUNBLElBQUcsWUFBWSxNQUFNRyxHQUFFLE1BQU1ILEtBQUksU0FBUztBQUV6RCxJQUFNLE1BQU07QUFFWixTQUFTLGFBQWFJLElBQUc7QUFDeEIsVUFBUSxPQUFPQSxLQUFLQSxNQUFLLE9BQVFBLE1BQUssR0FBRyxJQUFJLEtBQUs7QUFDbkQ7QUFFQSxTQUFTLE1BQU0sS0FBSyxNQUFNLE1BQU07QUFDL0IsU0FBTyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSTtBQUNoQztBQUVBLFNBQVMsS0FBS0osSUFBRztBQUNoQixTQUFPLE9BQU9BLE1BQUs7QUFDcEI7QUFFQSxTQUFTLFNBQVNBLElBQUc7QUFDcEIsU0FBTyxLQUFLQSxFQUFDLElBQUlBLEtBQUksTUFBTUE7QUFDNUI7QUFFQSxJQUFNLE9BQU8sTUFBTTtBQUFDO0FBSXBCLElBQU0sVUFBVSxRQUFNO0FBRXRCLElBQU0sVUFBVSxDQUFDLElBQUksT0FBTztBQUU1QixJQUFNLFVBQVUsQ0FBQUssT0FBSztBQUVyQixJQUFNLFVBQVUsQ0FBQUEsT0FBSztBQUVyQixJQUFNLFFBQVEsQ0FBQ0MsSUFBRyxNQUFNQSxNQUFLO0FBRTdCLElBQU0sU0FBUztBQUdmLElBQU0sV0FBVyxTQUFPO0FBQ3ZCLE1BQUksTUFBTSxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUc7QUFDakMsV0FBTztBQUVSLFFBQU0sTUFBTSxHQUFHLEdBQUc7QUFFbEIsUUFBTSxRQUFRLElBQUksTUFBTSxNQUFNO0FBRTlCLE1BQUksU0FBUztBQUNaLFdBQU87QUFFUixNQUFJLE1BQU0sTUFBTSxDQUFDLEVBQUUsU0FBUztBQUc1QixNQUFJLElBQUksUUFBUSxJQUFJLEtBQUssSUFBSTtBQUM1QixRQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxNQUFNLEdBQUc7QUFDOUIsV0FBTyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsSUFBSSxHQUFHO0FBQUEsRUFDaEM7QUFFQSxTQUFPLFNBQVMsS0FBSyxHQUFHO0FBQ3pCO0FBRUEsU0FBUyxVQUFVLEtBQUssTUFBTTtBQUM3QixTQUFPLFNBQVMsU0FBUyxTQUFTLE1BQUksSUFBSSxDQUFDLElBQUUsSUFBSTtBQUNsRDtBQUVBLFNBQVMsWUFBWSxLQUFLLE1BQU07QUFDL0IsU0FBTyxTQUFTLEtBQUssU0FBUyxNQUFJLElBQUksQ0FBQyxJQUFFLElBQUk7QUFDOUM7QUFFQSxTQUFTLFlBQVksS0FBSyxNQUFNO0FBQy9CLFNBQU8sU0FBUyxNQUFNLFNBQVMsTUFBSSxJQUFJLENBQUMsSUFBRSxJQUFJO0FBQy9DO0FBSUEsU0FBUyxTQUFTLEtBQUssTUFBTSxHQUFHO0FBQy9CLE1BQUksTUFBTSxHQUFHO0FBQ1osV0FBTztBQUlSLE1BQUlDLEtBQUksTUFBTTtBQUNkLE1BQUlDLEtBQUssTUFBTUQsTUFBTSxJQUFJLE9BQU87QUFDaEMsU0FBTyxNQUFNQyxFQUFDLElBQUlEO0FBQ25CO0FBRUEsSUFBTSxXQUFXLG9CQUFJLElBQUk7QUFFekIsU0FBUyxTQUFTLEtBQUs7QUFDdEIsV0FBUyxLQUFHLEtBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLElBQUk7QUFDdkM7QUFFQSxTQUFTLFNBQVMsTUFBTSxRQUFRLFFBQVEsT0FBTztBQUM5QyxNQUFJLFFBQVEsQ0FBQztBQUViLE1BQUksVUFBVSxNQUFNLElBQUksUUFBUTtBQUVoQyxXQUFTLE1BQU0sUUFBUSxNQUFNLFFBQVEsT0FBTztBQUMzQyxRQUFJLE9BQU8sSUFBSSxHQUFHO0FBQ2xCLFFBQUksTUFBTSxTQUFTLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSTtBQUV2QyxhQUFTUixLQUFJLEdBQUdBLEtBQUksTUFBTSxRQUFRQSxNQUFLO0FBQ3RDLFVBQUksUUFBUSxRQUFRLEtBQUssQ0FBQyxHQUFHLE1BQU1BLEVBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxNQUFNQSxFQUFDLElBQUk7QUFDNUQsVUFBSSxPQUFPLE9BQU8sSUFBSSxJQUFJLFNBQVMsT0FBTyxRQUFRQSxFQUFDLElBQUksSUFBSSxRQUFRQSxFQUFDO0FBQ3BFLFVBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxTQUFTLE9BQU8sR0FBRztBQUNuRCxZQUFNLEtBQUssSUFBSTtBQUNmLGVBQVMsSUFBSSxNQUFNLEdBQUc7QUFBQSxJQUN2QjtBQUFBLEVBQ0Q7QUFFQSxTQUFPO0FBQ1I7QUFJQSxJQUFNLFlBQVksQ0FBQztBQUNuQixJQUFNLFlBQVksQ0FBQztBQUVuQixJQUFNLGdCQUFnQixDQUFDLE1BQU0sSUFBSTtBQUVqQyxJQUFNLFFBQVEsTUFBTTtBQUNwQixJQUFNLFFBQVEsT0FBTztBQUNyQixJQUFNLFVBQVUsQ0FBQUMsT0FBS0EsT0FBTTtBQUUzQixTQUFTLE1BQU1BLElBQUc7QUFDakIsU0FBTyxPQUFPQSxNQUFLO0FBQ3BCO0FBRUEsU0FBUyxNQUFNQSxJQUFHO0FBQ2pCLE1BQUksS0FBSztBQUVULE1BQUlBLE1BQUssTUFBTTtBQUNkLFFBQUlGLEtBQUlFLEdBQUU7QUFDVixTQUFLRixNQUFLLFFBQVFBLE1BQUs7QUFBQSxFQUN4QjtBQUVBLFNBQU87QUFDUjtBQUVBLFNBQVMsVUFBVUUsSUFBRztBQUNyQixTQUFPQSxNQUFLLFFBQVEsT0FBT0EsTUFBSztBQUNqQztBQUVBLElBQU0sYUFBYSxPQUFPLGVBQWUsVUFBVTtBQUVuRCxJQUFNLFlBQVk7QUFFbEIsU0FBUyxLQUFLUyxJQUFHLFNBQVMsT0FBTztBQUNoQyxNQUFJO0FBRUosTUFBSSxNQUFNQSxFQUFDLEdBQUc7QUFDYixRQUFJLE1BQU1BLEdBQUUsS0FBSyxDQUFBVCxPQUFLQSxNQUFLLElBQUk7QUFFL0IsUUFBSSxNQUFNLEdBQUcsS0FBSyxPQUFPLEdBQUcsR0FBRztBQUM5QixZQUFNLE1BQU1TLEdBQUUsTUFBTTtBQUNwQixlQUFTVixLQUFJLEdBQUdBLEtBQUlVLEdBQUUsUUFBUVY7QUFDN0IsWUFBSUEsRUFBQyxJQUFJLEtBQUtVLEdBQUVWLEVBQUMsR0FBRyxNQUFNO0FBQUEsSUFDNUI7QUFFQyxZQUFNVSxHQUFFLE1BQU07QUFBQSxFQUNoQixXQUNTQSxjQUFhO0FBQ3JCLFVBQU1BLEdBQUUsTUFBTTtBQUFBLFdBQ04sT0FBT0EsRUFBQyxHQUFHO0FBQ25CLFVBQU0sQ0FBQztBQUNQLGFBQVNDLE1BQUtELElBQUc7QUFDaEIsVUFBSUMsTUFBSztBQUNSLFlBQUlBLEVBQUMsSUFBSSxLQUFLRCxHQUFFQyxFQUFDLEdBQUcsTUFBTTtBQUFBLElBQzVCO0FBQUEsRUFDRDtBQUVDLFVBQU1EO0FBRVAsU0FBTztBQUNSO0FBRUEsU0FBUyxPQUFPLE1BQU07QUFDckIsTUFBSSxPQUFPO0FBRVgsV0FBU1YsS0FBSSxHQUFHQSxLQUFJLEtBQUssUUFBUUEsTUFBSztBQUNyQyxRQUFJLE1BQU0sS0FBS0EsRUFBQztBQUVoQixhQUFTLE9BQU8sS0FBSztBQUNwQixVQUFJLE9BQU8sV0FBVztBQUNyQixZQUFJLE1BQU0sS0FBSyxHQUFHLENBQUM7QUFDbEIsaUJBQU8sS0FBSyxHQUFHLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQUE7QUFFaEMsZUFBSyxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQztBQUFBLE1BQzNCO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFFQSxTQUFPO0FBQ1I7QUFHQSxJQUFNLGNBQWM7QUFDcEIsSUFBTSxjQUFjO0FBQ3BCLElBQU0sY0FBYztBQUdwQixTQUFTLFdBQVcsT0FBTyxVQUFVLFlBQVk7QUFDaEQsV0FBU0EsS0FBSSxHQUFHLElBQUksY0FBYyxJQUFJQSxLQUFJLFNBQVMsUUFBUUEsTUFBSztBQUMvRCxRQUFJLFVBQVUsU0FBU0EsRUFBQztBQUV4QixRQUFJLFVBQVUsYUFBYTtBQUMxQixXQUFLLFVBQVU7QUFDZixhQUFPLE1BQU0sS0FBSyxNQUFNLEVBQUUsS0FBSztBQUM5QixjQUFNLElBQUksSUFBSTtBQUVmLFdBQUssVUFBVTtBQUNmLGFBQU8sS0FBSyxjQUFjLE1BQU0sRUFBRSxLQUFLO0FBQ3RDLGNBQU0sY0FBYyxJQUFJLElBQUk7QUFBQSxJQUM5QjtBQUFBLEVBQ0Q7QUFDRDtBQUlBLFNBQVMsS0FBSyxRQUFRLFdBQVc7QUFDaEMsTUFBSSxlQUFlLE1BQU0sR0FBRztBQUczQixRQUFJLFFBQVEsT0FBTyxDQUFDLEVBQUUsTUFBTTtBQUU1QixhQUFTQSxLQUFJLEdBQUdBLEtBQUksT0FBTyxRQUFRQTtBQUNsQyxZQUFNLEtBQUssR0FBRyxPQUFPQSxFQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFakMsUUFBSSxDQUFDLE1BQU0sTUFBTSxDQUFDLENBQUM7QUFDbEIsY0FBUSxTQUFTLEtBQUs7QUFFdkIsV0FBTztBQUFBLEVBQ1I7QUFFQSxNQUFJLFFBQVEsb0JBQUksSUFBSTtBQUVwQixXQUFTLEtBQUssR0FBRyxLQUFLLE9BQU8sUUFBUSxNQUFNO0FBQzFDLFFBQUlZLEtBQUksT0FBTyxFQUFFO0FBQ2pCLFFBQUksS0FBS0EsR0FBRSxDQUFDO0FBQ1osUUFBSSxNQUFNLEdBQUc7QUFFYixhQUFTWixLQUFJLEdBQUdBLEtBQUksS0FBS0E7QUFDeEIsWUFBTSxJQUFJLEdBQUdBLEVBQUMsQ0FBQztBQUFBLEVBQ2pCO0FBRUEsTUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRSxLQUFLLENBQUNPLElBQUcsTUFBTUEsS0FBSSxDQUFDLENBQUM7QUFFbkQsTUFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO0FBRXpCLE1BQUksUUFBUSxvQkFBSSxJQUFJO0FBRXBCLFdBQVNQLEtBQUksR0FBR0EsS0FBSSxZQUFZQTtBQUMvQixVQUFNLElBQUksS0FBSyxDQUFDLEVBQUVBLEVBQUMsR0FBR0EsRUFBQztBQUV4QixXQUFTLEtBQUssR0FBRyxLQUFLLE9BQU8sUUFBUSxNQUFNO0FBQzFDLFFBQUlZLEtBQUksT0FBTyxFQUFFO0FBQ2pCLFFBQUksS0FBS0EsR0FBRSxDQUFDO0FBRVosYUFBUyxLQUFLLEdBQUcsS0FBS0EsR0FBRSxRQUFRLE1BQU07QUFDckMsVUFBSSxLQUFLQSxHQUFFLEVBQUU7QUFFYixVQUFJLFFBQVEsTUFBTSxVQUFVLEVBQUUsS0FBSyxNQUFTO0FBRTVDLFVBQUksV0FBVyxZQUFZLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSTtBQUUvQyxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTWixLQUFJLEdBQUdBLEtBQUksR0FBRyxRQUFRQSxNQUFLO0FBQ25DLFlBQUksT0FBTyxHQUFHQSxFQUFDO0FBQ2YsWUFBSSxhQUFhLE1BQU0sSUFBSSxHQUFHQSxFQUFDLENBQUM7QUFFaEMsWUFBSSxTQUFTLE1BQU07QUFDbEIsY0FBSSxZQUFZLGFBQWE7QUFDNUIsa0JBQU0sVUFBVSxJQUFJO0FBRXBCLGdCQUFJLFlBQVk7QUFDZix1QkFBUyxLQUFLLFVBQVU7QUFBQSxVQUMxQjtBQUFBLFFBQ0Q7QUFFQyxnQkFBTSxVQUFVLElBQUk7QUFBQSxNQUN0QjtBQUVBLGlCQUFXLE9BQU8sVUFBVSxVQUFVO0FBRXRDLFdBQUssS0FBSyxLQUFLO0FBQUEsSUFDaEI7QUFBQSxFQUNEO0FBRUEsU0FBTztBQUNSO0FBRUEsSUFBTSxZQUFZLE9BQU8sa0JBQWtCLGNBQWMsUUFBTSxRQUFRLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSTtBQUc1RixTQUFTLFNBQVMsT0FBTztBQUN4QixNQUFJLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLE1BQUksT0FBTyxLQUFLO0FBRWhCLE1BQUksT0FBTyxNQUFNLElBQUk7QUFDckIsV0FBU0EsS0FBSSxHQUFHQSxLQUFJLEtBQUssUUFBUUE7QUFDaEMsU0FBS0EsRUFBQyxJQUFJQTtBQUVYLE9BQUssS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUV6QyxNQUFJLFNBQVMsQ0FBQztBQUNkLFdBQVNBLEtBQUksR0FBR0EsS0FBSSxNQUFNLFFBQVFBLE1BQUs7QUFDdEMsUUFBSSxNQUFNLE1BQU1BLEVBQUM7QUFDakIsUUFBSSxPQUFPLE1BQU0sSUFBSTtBQUVyQixhQUFTYSxLQUFJLEdBQUdBLEtBQUksTUFBTUE7QUFDekIsV0FBS0EsRUFBQyxJQUFJLElBQUksS0FBS0EsRUFBQyxDQUFDO0FBRXRCLFdBQU8sS0FBSyxJQUFJO0FBQUEsRUFDakI7QUFFQSxTQUFPO0FBQ1I7QUFHQSxTQUFTLGVBQWUsUUFBUTtBQUMvQixNQUFJLFFBQVEsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUN2QixNQUFJLE9BQU8sTUFBTTtBQUVqQixXQUFTYixLQUFJLEdBQUdBLEtBQUksT0FBTyxRQUFRQSxNQUFLO0FBQ3ZDLFFBQUksUUFBUSxPQUFPQSxFQUFDLEVBQUUsQ0FBQztBQUV2QixRQUFJLE1BQU0sVUFBVTtBQUNuQixhQUFPO0FBRVIsUUFBSSxTQUFTLE9BQU87QUFDbkIsZUFBU2EsS0FBSSxHQUFHQSxLQUFJLE1BQU1BLE1BQUs7QUFDOUIsWUFBSSxNQUFNQSxFQUFDLEtBQUssTUFBTUEsRUFBQztBQUN0QixpQkFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUVBLFNBQU87QUFDUjtBQUVBLFNBQVMsTUFBTSxNQUFNLFVBQVUsS0FBSztBQUNuQyxRQUFNLE1BQU0sS0FBSztBQUdqQixNQUFJLE9BQU87QUFDVixXQUFPO0FBR1IsTUFBSSxXQUFXO0FBQ2YsTUFBSSxVQUFVLE1BQU07QUFFcEIsU0FBTyxZQUFZLFdBQVcsS0FBSyxRQUFRLEtBQUs7QUFDL0M7QUFFRCxTQUFPLFdBQVcsWUFBWSxLQUFLLE9BQU8sS0FBSztBQUM5QztBQUdELE1BQUksV0FBVztBQUNkLFdBQU87QUFFUixRQUFNLFNBQVMsSUFBSSxHQUFHLE9BQU8sVUFBVSxXQUFXLEtBQUssT0FBTyxDQUFDO0FBRS9ELFdBQVMsVUFBVSxLQUFLLFFBQVEsR0FBR2IsS0FBSSxXQUFXLFFBQVFBLE1BQUssU0FBU0EsTUFBSyxRQUFRO0FBQ3BGLFVBQU1DLEtBQUksS0FBS0QsRUFBQztBQUVoQixRQUFJQyxNQUFLLE1BQU07QUFDZCxVQUFJQSxNQUFLO0FBQ1IsZUFBTztBQUVSLGdCQUFVQTtBQUFBLElBQ1g7QUFBQSxFQUNEO0FBRUEsU0FBTztBQUNSO0FBRUEsSUFBTSxTQUFTO0FBQUEsRUFDZDtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Q7QUFFQSxJQUFNLE9BQU87QUFBQSxFQUNaO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Q7QUFFQSxTQUFTLE9BQU8sS0FBSztBQUNwQixTQUFPLElBQUksTUFBTSxHQUFHLENBQUM7QUFDdEI7QUFFQSxJQUFNLFFBQVEsS0FBSyxJQUFJLE1BQU07QUFFN0IsSUFBTSxVQUFVLE9BQU8sSUFBSSxNQUFNO0FBRWpDLElBQU0sV0FBVztBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLEtBQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLEtBQU07QUFDUDtBQUVBLFNBQVMsU0FBUyxLQUFLO0FBQ3RCLFVBQVEsTUFBTSxLQUFLLE1BQU0sTUFBTTtBQUNoQztBQUVBLFNBQVMsU0FBUyxLQUFLO0FBQ3RCLFVBQVEsTUFBTSxLQUFLLE9BQU8sTUFBTSxNQUFNLE1BQU0sTUFBTTtBQUNuRDtBQWNBLElBQU0sT0FBTztBQUFBO0FBQUEsRUFFWixNQUFNLENBQUFhLE9BQUtBLEdBQUUsWUFBWTtBQUFBO0FBQUEsRUFFekIsSUFBSyxDQUFBQSxRQUFNQSxHQUFFLFlBQVksSUFBRSxJQUFJLE1BQU0sQ0FBQztBQUFBO0FBQUEsRUFFdEMsTUFBTSxDQUFDQSxJQUFHLFVBQVUsTUFBTSxLQUFLQSxHQUFFLFNBQVMsQ0FBQztBQUFBO0FBQUEsRUFFM0MsS0FBSyxDQUFDQSxJQUFHLFVBQVUsTUFBTSxJQUFJQSxHQUFFLFNBQVMsQ0FBQztBQUFBO0FBQUEsRUFFekMsSUFBSyxDQUFBQSxPQUFLLFNBQVNBLEdBQUUsU0FBUyxJQUFFLENBQUM7QUFBQTtBQUFBLEVBRWpDLEdBQUksQ0FBQUEsT0FBS0EsR0FBRSxTQUFTLElBQUU7QUFBQTtBQUFBLEVBRXRCLElBQUssQ0FBQUEsT0FBSyxTQUFTQSxHQUFFLFFBQVEsQ0FBQztBQUFBO0FBQUEsRUFFOUIsR0FBSSxDQUFBQSxPQUFLQSxHQUFFLFFBQVE7QUFBQTtBQUFBLEVBRW5CLE1BQU0sQ0FBQ0EsSUFBRyxVQUFVLE1BQU0sS0FBS0EsR0FBRSxPQUFPLENBQUM7QUFBQTtBQUFBLEVBRXpDLEtBQUssQ0FBQ0EsSUFBRyxVQUFVLE1BQU0sSUFBSUEsR0FBRSxPQUFPLENBQUM7QUFBQTtBQUFBLEVBRXZDLElBQUssQ0FBQUEsT0FBSyxTQUFTQSxHQUFFLFNBQVMsQ0FBQztBQUFBO0FBQUEsRUFFL0IsR0FBSSxDQUFBQSxPQUFLQSxHQUFFLFNBQVM7QUFBQTtBQUFBLEVBRXBCLEdBQUksQ0FBQUEsT0FBSztBQUFDLFFBQUlDLEtBQUlELEdBQUUsU0FBUztBQUFHLFdBQU9DLE1BQUssSUFBSSxLQUFLQSxLQUFJLEtBQUtBLEtBQUksS0FBS0E7QUFBQSxFQUFFO0FBQUE7QUFBQSxFQUV6RSxJQUFLLENBQUFELE9BQUtBLEdBQUUsU0FBUyxLQUFLLEtBQUssT0FBTztBQUFBO0FBQUEsRUFFdEMsSUFBSyxDQUFBQSxPQUFLQSxHQUFFLFNBQVMsS0FBSyxLQUFLLE9BQU87QUFBQTtBQUFBLEVBRXRDLEdBQUksQ0FBQUEsT0FBS0EsR0FBRSxTQUFTLEtBQUssS0FBSyxNQUFNO0FBQUE7QUFBQSxFQUVwQyxJQUFLLENBQUFBLE9BQUssU0FBU0EsR0FBRSxXQUFXLENBQUM7QUFBQTtBQUFBLEVBRWpDLEdBQUksQ0FBQUEsT0FBS0EsR0FBRSxXQUFXO0FBQUE7QUFBQSxFQUV0QixJQUFLLENBQUFBLE9BQUssU0FBU0EsR0FBRSxXQUFXLENBQUM7QUFBQTtBQUFBLEVBRWpDLEdBQUksQ0FBQUEsT0FBS0EsR0FBRSxXQUFXO0FBQUE7QUFBQSxFQUV0QixLQUFLLENBQUFBLE9BQUssU0FBU0EsR0FBRSxnQkFBZ0IsQ0FBQztBQUN2QztBQUVBLFNBQVMsUUFBUSxLQUFLLE9BQU87QUFDNUIsVUFBUSxTQUFTO0FBQ2pCLE1BQUksUUFBUSxDQUFDO0FBRWIsTUFBSSxJQUFJLHdCQUF3QkU7QUFFaEMsU0FBT0EsS0FBSSxFQUFFLEtBQUssR0FBRztBQUNwQixVQUFNLEtBQUtBLEdBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLEtBQUtBLEdBQUUsQ0FBQyxDQUFDLElBQUlBLEdBQUUsQ0FBQyxDQUFDO0FBRTlDLFNBQU8sQ0FBQUYsT0FBSztBQUNYLFFBQUksTUFBTTtBQUVWLGFBQVNkLEtBQUksR0FBR0EsS0FBSSxNQUFNLFFBQVFBO0FBQ2pDLGFBQU8sT0FBTyxNQUFNQSxFQUFDLEtBQUssV0FBVyxNQUFNQSxFQUFDLElBQUksTUFBTUEsRUFBQyxFQUFFYyxJQUFHLEtBQUs7QUFFbEUsV0FBTztBQUFBLEVBQ1I7QUFDRDtBQUVBLElBQU0sVUFBVSxJQUFJLEtBQUssZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBRzVELFNBQVMsT0FBTyxNQUFNLElBQUk7QUFDekIsTUFBSTtBQUdKLE1BQUksTUFBTSxTQUFTLE1BQU07QUFDeEIsWUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssa0JBQWtCLElBQUksR0FBRztBQUFBLFdBQy9DLE1BQU07QUFDZCxZQUFRO0FBQUEsT0FDSjtBQUNKLFlBQVEsSUFBSSxLQUFLLEtBQUssZUFBZSxTQUFTLEVBQUMsVUFBVSxHQUFFLENBQUMsQ0FBQztBQUM3RCxVQUFNLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDO0FBQUEsRUFDN0M7QUFFQSxTQUFPO0FBQ1I7QUFNQSxJQUFNLFlBQVksQ0FBQWIsT0FBS0EsS0FBSSxLQUFLO0FBRWhDLElBQU0sV0FBVyxDQUFDLEdBQUUsR0FBRSxLQUFJLENBQUM7QUFHM0IsSUFBTSxXQUFXLFNBQVMsSUFBSSxLQUFLLEdBQUcsUUFBUTtBQUc5QyxJQUFNLFdBQVcsU0FBUyxJQUFJLEdBQUcsSUFBSSxRQUFRO0FBRzdDLElBQU0sYUFBYSxTQUFTLE9BQU8sU0FBUztBQUU1QyxJQUFNLFdBQVcsU0FBUyxPQUFPLFFBQVE7QUFFekMsSUFBTSxLQUFLO0FBRVgsSUFBTSxPQUFVO0FBQ2hCLElBQU0sU0FBVSxLQUFLO0FBQ3JCLElBQU0sS0FBVTtBQUNoQixJQUFNLE9BQVUsS0FBSztBQUNyQixJQUFNLFNBQVUsT0FBTztBQUV2QixJQUFNLEtBQVU7QUFDaEIsSUFBTSxNQUFVO0FBQ2hCLElBQU0sUUFBVSxNQUFNO0FBQ3RCLElBQU0sVUFBVSxLQUFLO0FBQ3JCLElBQU0sS0FBVTtBQUVoQixJQUFNSyxLQUFJO0FBRVYsU0FBUyxjQUFjLElBQUk7QUFDMUIsTUFBSVcsS0FBSyxLQUFLLEtBQ2JELEtBQUtDLEtBQUssSUFDVkYsS0FBS0MsS0FBSyxJQUNWRixLQUFLQyxLQUFLLElBQ1YsS0FBS0QsS0FBSyxJQUNWSSxLQUFLSixLQUFLO0FBR1gsTUFBSSxjQUFjLE1BQU0sSUFBSSxTQUFTLElBQUksR0FBRyxHQUFHLFFBQVEsRUFBRSxPQUFPLFNBQVMsSUFBSSxTQUFTLElBQUksSUFBSSxHQUFHLFFBQVE7QUFFekcsTUFBSSxZQUFZLFlBQVksT0FBTztBQUFBO0FBQUEsSUFFbENHO0FBQUEsSUFDQUEsS0FBSTtBQUFBLElBQ0pBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBO0FBQUEsSUFFSkQ7QUFBQSxJQUNBQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBLElBQ0pBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUE7QUFBQSxJQUVKRDtBQUFBLElBQ0FBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBLElBQ0pBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBO0FBQUEsSUFFSkQ7QUFBQSxJQUNBQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBLElBQ0pBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBLElBQ0pBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBLElBQ0pBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUE7QUFBQSxJQUVKO0FBQUEsSUFDQSxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUEsSUFDTCxLQUFLO0FBQUE7QUFBQSxJQUVMSTtBQUFBLElBQ0FBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBLElBQ0pBLEtBQUk7QUFBQSxJQUNKQSxLQUFJO0FBQUEsSUFDSkEsS0FBSTtBQUFBLEVBQ0wsQ0FBQztBQU1ELFFBQU0sa0JBQWtCO0FBQUE7QUFBQSxJQUV2QixDQUFDQSxJQUFhLE1BQWlCWixJQUF3QkEsSUFBUUEsSUFBc0JBLElBQVFBLElBQVVBLElBQVMsQ0FBQztBQUFBLElBQ2pILENBQUNRLEtBQUksSUFBUyxTQUFpQixRQUF3QlIsSUFBUUEsSUFBc0JBLElBQVFBLElBQVVBLElBQVMsQ0FBQztBQUFBLElBQ2pILENBQUNRLElBQWEsSUFBaUIsUUFBd0JSLElBQVFBLElBQXNCQSxJQUFRQSxJQUFVQSxJQUFTLENBQUM7QUFBQSxJQUNqSCxDQUFDUyxJQUFhLFFBQVEsSUFBUyxRQUF3QlQsSUFBUSxNQUFzQkEsSUFBUUEsSUFBVUEsSUFBUyxDQUFDO0FBQUEsSUFDakgsQ0FBQ1UsSUFBYSxPQUFpQixRQUF3QlYsSUFBUSxNQUFzQkEsSUFBUUEsSUFBVUEsSUFBUyxDQUFDO0FBQUEsSUFDakgsQ0FBQ1csSUFBYSxJQUFpQixTQUFTLE1BQU0sT0FBU1gsSUFBUSxPQUFPLE1BQU0sT0FBU0EsSUFBUSxTQUFVQSxJQUFTLENBQUM7QUFBQSxJQUNqSCxDQUFDLElBQWEsS0FBSyxVQUFZLFNBQVMsTUFBTSxPQUFTQSxJQUFRLE9BQU8sTUFBTSxPQUFTQSxJQUFRLFNBQVVBLElBQVMsQ0FBQztBQUFBLEVBQ2xIO0FBTUEsV0FBUyxlQUFlYSxTQUFRO0FBQy9CLFdBQU8sQ0FBQyxNQUFNLFNBQVMsVUFBVSxVQUFVLFdBQVcsZUFBZTtBQUNwRSxVQUFJLFNBQVMsQ0FBQztBQUNkLFVBQUksT0FBTyxhQUFhRDtBQUN4QixVQUFJLE9BQU8sYUFBYSxNQUFNLFlBQVlBO0FBRzFDLFVBQUksVUFBVUMsUUFBTyxRQUFRO0FBQzdCLFVBQUksWUFBWSxTQUFTLFVBQVUsSUFBSSxDQUFDO0FBR3hDLFVBQUksU0FBUyxPQUFPLFFBQVEsWUFBWSxHQUFHLE9BQU8sSUFBSSxRQUFRLFNBQVMsR0FBRyxRQUFRLE9BQU8sSUFBSSxRQUFRLFFBQVEsQ0FBQztBQUM5RyxVQUFJLFdBQVcsU0FBUyxTQUFTLElBQUksQ0FBQztBQUV0QyxVQUFJLFFBQVEsTUFBTTtBQUNqQixZQUFJLFNBQVMsT0FBTyxZQUFZLEtBQUs7QUFDckMsWUFBSSxTQUFTLE9BQU8sWUFBWUQsS0FBSztBQUVyQyxZQUFJLFFBQVEsYUFBYSxXQUFXLFlBQVksU0FBUyxPQUFPLE9BQU8sWUFBWSxJQUFJLFFBQVEsT0FBTyxTQUFTLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3JJLFlBQUksWUFBWSxJQUFJLEtBQUssTUFBTSxRQUFRLEVBQUUsQ0FBQztBQUMxQyxZQUFJLFdBQVcsVUFBVSxZQUFZO0FBQ3JDLFlBQUksWUFBWSxVQUFVLFNBQVM7QUFFbkMsaUJBQVNsQixLQUFJLEdBQUcsU0FBUyxVQUFVQSxNQUFLO0FBQ3ZDLGNBQUksT0FBTyxPQUFPLFdBQVcsU0FBU0EsSUFBRyxZQUFZLFNBQVNBLElBQUcsQ0FBQztBQUNsRSxjQUFJLE9BQU8sT0FBT21CLFFBQU8sU0FBUyxPQUFPLElBQUksQ0FBQyxDQUFDO0FBRS9DLGtCQUFRLFVBQVUsQ0FBQyxPQUFPLFFBQVEsSUFBSSxDQUFDO0FBRXZDLGNBQUksU0FBUztBQUNaLG1CQUFPLEtBQUssS0FBSztBQUFBLFFBQ25CO0FBQUEsTUFDRCxPQUNLO0FBQ0osWUFBSSxRQUFRLGFBQWFMLEtBQUlBLEtBQUk7QUFDakMsWUFBSSxXQUFXLE1BQU0sUUFBUSxJQUFJLE1BQU0sU0FBUztBQUNoRCxZQUFJLFFBQVEsV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLEtBQUs7QUFDekUsZUFBTyxLQUFLLEtBQUs7QUFFakIsWUFBSSxRQUFRSyxRQUFPLEtBQUs7QUFFeEIsWUFBSSxXQUFXLE1BQU0sU0FBUyxJQUFLLE1BQU0sV0FBVyxJQUFJSCxLQUFNLE1BQU0sV0FBVyxJQUFJRDtBQUNuRixZQUFJLFlBQVksWUFBWUE7QUFFNUIsWUFBSSxXQUFXLEtBQUssS0FBSyxPQUFPLEVBQUU7QUFDbEMsWUFBSSxXQUFXLGFBQWE7QUFFNUIsZUFBTyxHQUFHO0FBQ1Qsa0JBQVEsU0FBUyxRQUFRLFdBQVcsTUFBTSxJQUFJLElBQUksQ0FBQztBQUVuRCxjQUFJLFFBQVE7QUFDWDtBQUVELGNBQUksWUFBWSxHQUFHO0FBQ2xCLGdCQUFJLGVBQWUsTUFBTSxTQUFTLFdBQVcsV0FBVyxDQUFDLENBQUMsSUFBSTtBQUM5RCxnQkFBSSxZQUFZSSxRQUFPLEtBQUs7QUFDNUIsZ0JBQUksYUFBYSxVQUFVLFNBQVM7QUFFcEMsZ0JBQUksV0FBVyxhQUFhO0FBRTVCLGdCQUFJLFdBQVc7QUFDZCx5QkFBVztBQUVaLHFCQUFTLFdBQVdKO0FBRXBCLHdCQUFZLFdBQVcsYUFBYTtBQUdwQyxnQkFBSSxZQUFZLE9BQU8sT0FBTyxTQUFTLENBQUM7QUFDeEMsZ0JBQUksVUFBVSxVQUFVLFFBQVEsYUFBYSxXQUFXLENBQUM7QUFFekQsZ0JBQUksVUFBVSxZQUFZO0FBQ3pCLHFCQUFPLEtBQUssS0FBSztBQUFBLFVBQ25CO0FBRUMsbUJBQU8sS0FBSyxLQUFLO0FBQUEsUUFDbkI7QUFBQSxNQUNEO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBRUEsU0FBTztBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFDRDtBQUVBLElBQU0sQ0FBRSxhQUFhLG1CQUFtQixnQkFBaUIsSUFBSSxjQUFjLENBQUM7QUFDNUUsSUFBTSxDQUFFLFlBQWEsa0JBQW1CLGVBQWlCLElBQUksY0FBYyxJQUFJO0FBRy9FLFNBQVMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7QUFheEIsU0FBUyxlQUFlLFVBQVVLLFVBQVM7QUFDMUMsU0FBTyxTQUFTLElBQUksQ0FBQUgsT0FBS0EsR0FBRTtBQUFBLElBQUksQ0FBQ2hCLElBQUdELE9BQ2xDQSxNQUFLLEtBQUtBLE1BQUssS0FBS0MsTUFBSyxPQUFPQSxLQUFJbUIsU0FBUXBCLE1BQUssS0FBS2lCLEdBQUUsQ0FBQyxLQUFLLElBQUloQixLQUFJZ0IsR0FBRSxDQUFDLElBQUloQixFQUFDO0FBQUEsRUFDL0UsQ0FBQztBQUNGO0FBSUEsU0FBUyxhQUFha0IsU0FBUSxRQUFRO0FBQ3JDLFNBQU8sQ0FBQyxNQUFNLFFBQVEsU0FBUyxZQUFZLGNBQWM7QUFDeEQsUUFBSUYsS0FBSSxPQUFPLEtBQUssQ0FBQUEsT0FBSyxhQUFhQSxHQUFFLENBQUMsQ0FBQyxLQUFLLE9BQU8sT0FBTyxTQUFTLENBQUM7QUFHdkUsUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBQ0osUUFBSTtBQUNKLFFBQUk7QUFDSixRQUFJO0FBRUosV0FBTyxPQUFPLElBQUksV0FBUztBQUMxQixVQUFJLE9BQU9FLFFBQU8sS0FBSztBQUV2QixVQUFJLFVBQVUsS0FBSyxZQUFZO0FBQy9CLFVBQUksVUFBVSxLQUFLLFNBQVM7QUFDNUIsVUFBSSxVQUFVLEtBQUssUUFBUTtBQUMzQixVQUFJLFVBQVUsS0FBSyxTQUFTO0FBQzVCLFVBQUksVUFBVSxLQUFLLFdBQVc7QUFDOUIsVUFBSSxVQUFVLEtBQUssV0FBVztBQUU5QixVQUFJLFFBQ0gsV0FBVyxZQUFZRixHQUFFLENBQUMsS0FDMUIsV0FBVyxZQUFZQSxHQUFFLENBQUMsS0FDMUIsV0FBVyxZQUFZQSxHQUFFLENBQUMsS0FDMUIsV0FBVyxZQUFZQSxHQUFFLENBQUMsS0FDMUIsV0FBVyxZQUFZQSxHQUFFLENBQUMsS0FDMUIsV0FBVyxZQUFZQSxHQUFFLENBQUMsS0FDSEEsR0FBRSxDQUFDO0FBRzNCLGlCQUFXO0FBQ1gsaUJBQVc7QUFDWCxpQkFBVztBQUNYLGlCQUFXO0FBQ1gsaUJBQVc7QUFDWCxpQkFBVztBQUVYLGFBQU8sTUFBTSxJQUFJO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0Y7QUFDRDtBQUdBLFNBQVMsWUFBWUUsU0FBUSxTQUFTO0FBQ3JDLE1BQUksUUFBUSxRQUFRLE9BQU87QUFDM0IsU0FBTyxDQUFDLE1BQU0sUUFBUSxTQUFTLFlBQVksY0FBYyxPQUFPLElBQUksV0FBUyxNQUFNQSxRQUFPLEtBQUssQ0FBQyxDQUFDO0FBQ2xHO0FBRUEsU0FBUyxPQUFPRCxJQUFHRixJQUFHRixJQUFHO0FBQ3hCLFNBQU8sSUFBSSxLQUFLSSxJQUFHRixJQUFHRixFQUFDO0FBQ3hCO0FBRUEsU0FBUyxnQkFBZ0IsVUFBVU0sVUFBUztBQUMzQyxTQUFPQSxTQUFRLFFBQVE7QUFDeEI7QUFDQSxJQUFNLG1CQUFtQjtBQUV6QixTQUFTLGNBQWNELFNBQVEsT0FBTztBQUNyQyxTQUFPLENBQUMsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLE9BQU8sY0FBYyxNQUFNQSxRQUFPLEdBQUcsQ0FBQztBQUM1RjtBQUVBLFNBQVMsYUFBYSxNQUFNLFdBQVc7QUFDdEMsTUFBSUYsS0FBSSxLQUFLLE9BQU8sU0FBUztBQUM3QixTQUFPQSxHQUFFLFFBQVFBLEdBQUUsT0FBTyxNQUFNLFNBQVMsSUFBSUEsR0FBRSxPQUFPLFFBQVFBLEdBQUUsT0FBTyxPQUFPLE1BQU0sU0FBUyxJQUFJO0FBQ2xHO0FBRUEsU0FBUyxXQUFXLE1BQU0sV0FBVztBQUNwQyxTQUFPLEtBQUssT0FBTyxTQUFTLEVBQUUsS0FBSyxNQUFNLFNBQVM7QUFDbkQ7QUFFQSxJQUFNLGFBQWE7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0EsS0FBSztBQUFBLEVBQ0wsTUFBTTtBQUFBLEVBQ04sUUFBUSxDQUFDO0FBQ1Y7QUFFQSxTQUFTLGdCQUFnQixNQUFNLElBQUk7QUFDbEMsTUFBSVAsS0FBSSxLQUFLLE9BQU87QUFFcEIsTUFBSSxLQUFLLFNBQVM7QUFFbEIsTUFBSSxPQUFPQSxHQUFFLEtBQUssTUFBTSxFQUFFO0FBQzFCLGFBQVcsSUFBSSxPQUFPLElBQUk7QUFDMUIsYUFBVyxJQUFJLFFBQVEsSUFBSTtBQUUzQixNQUFJLE1BQU0sT0FBTztBQUNqQixhQUFXLElBQUksY0FBYyxHQUFHO0FBQ2hDLGFBQVcsSUFBSSxhQUFhLEdBQUc7QUFFL0IsTUFBSSxRQUFRQSxHQUFFLE1BQU0sTUFBTSxJQUFJLElBQUk7QUFDbEMsV0FBUyxXQUFXLElBQUksZUFBZSxLQUFLO0FBRTVDLFNBQU87QUFDUjtBQUVBLFNBQVMsZ0JBQWdCLE1BQU0sSUFBSTtBQUNsQyxNQUFJLEtBQUssS0FBSyxPQUFPLEVBQUUsRUFBRTtBQUN6QixTQUFPLEdBQUcsU0FBUyxHQUFHO0FBQ3ZCO0FBRUEsU0FBUyxrQkFBa0IsTUFBTSxJQUFJO0FBQ3BDLE1BQUksS0FBSyxLQUFLLE9BQU8sRUFBRSxFQUFFO0FBQ3pCLFNBQU8sR0FBRyxXQUFXLEdBQUc7QUFDekI7QUFFQSxTQUFTLGdCQUFnQixNQUFNLElBQUk7QUFDbEMsTUFBSSxLQUFLLEtBQUssT0FBTyxFQUFFLEVBQUU7QUFDekIsU0FBTyxHQUFHO0FBQ1g7QUFFQSxJQUFNLFlBQVksQ0FBQyxHQUFFLENBQUM7QUFFdEIsU0FBUyxXQUFXLE1BQU0sWUFBWSxXQUFXO0FBQ2hELFlBQVUsQ0FBQyxJQUFJO0FBQ2YsWUFBVSxDQUFDLElBQUk7QUFDZixTQUFPO0FBQ1I7QUFFQSxTQUFTLFNBQVMsTUFBTSxNQUFNLFFBQVEsV0FBVyxNQUFNO0FBQ3RELFNBQU8sQ0FBQVcsT0FBSztBQUNYLElBQUFBLEdBQUUsVUFBVSxNQUFNLENBQUMsWUFBWUEsR0FBRSxVQUFVLFNBQVMsT0FBT0EsRUFBQztBQUFBLEVBQzdEO0FBQ0Q7QUFFQSxTQUFTLFNBQVMsTUFBTSxNQUFNLFFBQVEsV0FBVyxNQUFNO0FBQ3RELFNBQU8sQ0FBQUEsT0FBSztBQUNYLEtBQUMsQ0FBQyxZQUFZQSxHQUFFLFVBQVUsU0FBUyxPQUFPQSxFQUFDO0FBQUEsRUFDNUM7QUFDRDtBQUVBLElBQU0sYUFBYTtBQUFBLEVBQ2xCLE1BQU07QUFBQSxFQUNOLEdBQUc7QUFBQSxFQUNILEdBQUc7QUFBQSxFQUNILE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNQLEtBQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxJQUNSLE9BQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLE1BQVE7QUFBQSxFQUNUO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDTCxXQUFhO0FBQUEsSUFDYixTQUFhO0FBQUEsSUFDYixPQUFhO0FBQUE7QUFBQSxJQUNiLFVBQWE7QUFBQSxJQUViLFdBQWE7QUFBQSxJQUNiLFlBQWE7QUFBQSxJQUNiLFlBQWE7QUFBQSxFQUNkO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDTCxVQUFVO0FBQUEsSUFDVixHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFDSCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxPQUFPLENBQUMsTUFBTUEsT0FBTTtBQUVuQixNQUFBQSxHQUFFLGdCQUFnQjtBQUNsQixNQUFBQSxHQUFFLHlCQUF5QjtBQUFBLElBQzVCO0FBQUEsSUFDQSxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsRUFDTDtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ04sTUFBTSxDQUFDLE1BQU0sV0FBVyxTQUFTLFFBQVEsV0FBVyxTQUFTO0FBQUEsSUFDN0QsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1A7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNOLE1BQU0sQ0FBQyxNQUFNO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUDtBQUFBLEVBRUEsTUFBTTtBQUFBLEVBQ04sS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUNSO0FBRUEsSUFBTSxZQUFZO0FBQUEsRUFDakIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBO0FBRVI7QUFFQSxJQUFNLE9BQU8sT0FBTyxDQUFDLEdBQUcsV0FBVztBQUFBLEVBQ2xDLFFBQVE7QUFDVCxDQUFDO0FBRUQsSUFBTSxRQUFRLE9BQU8sQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUM5QixNQUFNO0FBQ1AsQ0FBQztBQUVELElBQU0sU0FBUyxPQUFPLENBQUMsR0FBRyxXQUFXO0FBQUEsRUFDcEMsTUFBTTtBQUNQLENBQUM7QUFFRCxJQUFNLE9BQVk7QUFDbEIsSUFBTSxZQUFZLFVBQVU7QUFDNUIsSUFBTSxVQUFVO0FBRWhCLElBQU0sWUFBWTtBQUFBLEVBQ2pCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLFNBQVM7QUFBQSxFQUNULE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFdBQVc7QUFBQSxFQUNYO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtOO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsUUFBUTtBQUNUO0FBRUEsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxrQkFBa0I7QUFFeEIsSUFBTSxjQUFjO0FBQUEsRUFDbkIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS1IsS0FBSztBQUFBLEVBQ0wsS0FBSyxDQUFDO0FBQUEsRUFDTixNQUFNLENBQUM7QUFDUjtBQUVBLFNBQVMsWUFBWSxNQUFNLFFBQVEsU0FBUyxZQUFZLFdBQVc7QUFDbEUsU0FBTyxPQUFPLElBQUksQ0FBQXBCLE9BQUtBLE1BQUssT0FBTyxLQUFLLE9BQU9BLEVBQUMsQ0FBQztBQUNsRDtBQUVBLFNBQVMsY0FBYyxNQUFNLFNBQVMsVUFBVSxVQUFVLFdBQVcsWUFBWSxVQUFVO0FBQzFGLE1BQUksU0FBUyxDQUFDO0FBRWQsTUFBSSxTQUFTLFNBQVMsSUFBSSxTQUFTLEtBQUs7QUFFeEMsYUFBVyxXQUFXLFdBQVcsU0FBUyxZQUFZLFVBQVUsU0FBUyxHQUFHLE1BQU07QUFFbEYsV0FBUyxNQUFNLFVBQVUsT0FBTyxVQUFVLE1BQU0sU0FBUyxNQUFNLFdBQVcsTUFBTTtBQUMvRSxXQUFPLEtBQUssT0FBTyxHQUFHLEtBQUssRUFBRSxJQUFJLElBQUksR0FBRztBQUV6QyxTQUFPO0FBQ1I7QUFHQSxTQUFTLGNBQWMsTUFBTSxTQUFTLFVBQVUsVUFBVSxXQUFXLFlBQVksVUFBVTtBQUMxRixRQUFNLFNBQVMsQ0FBQztBQUVoQixRQUFNLFVBQVUsS0FBSyxPQUFPLEtBQUssS0FBSyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBRXRELFFBQU0sUUFBUSxXQUFXLEtBQUssUUFBUTtBQUV0QyxRQUFNLE1BQU0sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxjQUFZLElBQUksU0FBUyxHQUFHO0FBSTVCLE1BQUksV0FBVztBQUNkLGdCQUFZLFNBQVMsV0FBVyxXQUFXLFFBQVEsQ0FBQztBQUVyRCxNQUFJLFFBQVE7QUFDWixNQUFJLGNBQWMsWUFBWTtBQUU5QixNQUFJLFdBQVc7QUFDZCxrQkFBYyxTQUFTLFdBQVcsYUFBYSxRQUFRLENBQUM7QUFFekQsS0FBRztBQUNGLFdBQU8sS0FBSyxLQUFLO0FBQ2pCLFlBQVEsUUFBUTtBQUVoQixRQUFJLFdBQVcsTUFBTSxDQUFDLFNBQVMsSUFBSSxLQUFLO0FBQ3ZDLGNBQVEsU0FBUyxPQUFPLFNBQVMsSUFBSSxTQUFTLENBQUM7QUFFaEQsUUFBSSxTQUFTLGFBQWE7QUFDekIsa0JBQVk7QUFDWixvQkFBYyxZQUFZO0FBRTFCLFVBQUksV0FBVztBQUNkLHNCQUFjLFNBQVMsV0FBVyxhQUFhLFFBQVEsQ0FBQztBQUFBLElBQzFEO0FBQUEsRUFDRCxTQUFTLFNBQVM7QUFFbEIsU0FBTztBQUNSO0FBRUEsU0FBUyxnQkFBZ0IsTUFBTSxTQUFTLFVBQVUsVUFBVSxXQUFXLFlBQVksVUFBVTtBQUM1RixNQUFJLEtBQUssS0FBSyxPQUFPLEtBQUssS0FBSyxPQUFPLEVBQUUsS0FBSztBQUU3QyxNQUFJLFlBQVksR0FBRztBQUVuQixNQUFJLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxTQUFTLElBQUksV0FBVyxRQUFRLEdBQUcsVUFBVSxTQUFTLElBQUksQ0FBQyxTQUFTO0FBQy9ILE1BQUksT0FBTyxZQUFZLEtBQUssWUFBWSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDbkQsTUFBSSxZQUFZLFdBQVcsQ0FBQyxZQUFZLGNBQWMsTUFBTSxTQUFTLElBQUksV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLFVBQVUsU0FBUyxJQUFHLENBQUMsU0FBUztBQUVqSSxTQUFPLFVBQVUsUUFBUSxFQUFFLElBQUksQ0FBQUEsT0FBSyxDQUFDQSxFQUFDLEVBQUUsT0FBTyxNQUFNLFNBQVM7QUFDL0Q7QUFFQSxJQUFNLFNBQVc7QUFDakIsSUFBTSxXQUFXO0FBQ2pCLElBQU0sU0FBVztBQUNqQixJQUFNLE9BQVc7QUFFakIsSUFBTSxRQUFRLENBQUMsUUFBUSxPQUFPLElBQUksWUFBWSxPQUFPLElBQUksQ0FBQ0EsSUFBR0QsT0FBUSxTQUFTLEtBQUtDLE1BQUssS0FBTUQsS0FBSSxXQUFXLEtBQUssR0FBRyxLQUFLQyxHQUFFLGNBQWMsRUFBRUEsS0FBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUtBLEtBQUksSUFBSTtBQUV2SyxTQUFTLGtCQUFrQixNQUFNLFFBQVEsU0FBUyxZQUFZLFdBQVc7QUFDeEUsTUFBSSxPQUFPLEtBQUssS0FBSyxPQUFPO0FBQzVCLE1BQUksV0FBVyxLQUFLO0FBQ3BCLE1BQUksS0FBSyxLQUFLLE9BQU8sUUFBUTtBQUs3QixNQUFJLFdBQVcsS0FBSztBQUVwQixNQUFJLFdBQVcsS0FBSztBQUVwQixNQUFJLE1BQU0sU0FBUyxJQUFJLFFBQVE7QUFFL0IsTUFBSSxLQUNILFNBQVMsR0FBRyxRQUFRLElBQUksT0FBTyxXQUFXLFNBQzFDLFNBQVMsR0FBRyxRQUFRLElBQUksT0FBTyxXQUFXLFdBQzFDLFNBQVMsR0FBRyxRQUFRLElBQUksT0FBTyxXQUFXLFNBQzFDO0FBR0QsTUFBSSxNQUFNLE1BQU07QUFDZixRQUFJLFdBQVcsSUFBSSxTQUFTLEdBQUcsUUFBUSxJQUFJLEdBQUc7QUFFOUMsUUFBSSxXQUFXO0FBQ2QsYUFBTyxNQUFNLE9BQU8sTUFBTSxFQUFFLFFBQVEsR0FBRyxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsUUFBUSxDQUFDLEVBQUUsUUFBUTtBQUFBLEVBQzFGO0FBRUEsU0FBTyxNQUFNLFFBQVEsR0FBRyxPQUFPLElBQUksQ0FBQztBQUNyQztBQUVBLFNBQVMsaUJBQWlCLE1BQU0sUUFBUSxTQUFTLFlBQVksV0FBVztBQUN2RSxNQUFJLE9BQU8sS0FBSyxLQUFLLE9BQU87QUFDNUIsTUFBSSxXQUFXLEtBQUs7QUFDcEIsTUFBSSxXQUFXLEtBQUs7QUFDcEIsTUFBSSxXQUFXLEtBQUs7QUFFcEIsTUFBSSxXQUFXLElBQUksU0FBUyxHQUFHLFFBQVEsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBRWhFLE1BQUksV0FBVztBQUNkLFdBQU8sTUFBTSxPQUFPLE1BQU0sRUFBRSxRQUFRLEdBQUcsR0FBRyxRQUFRLEtBQUssV0FBVyxRQUFRLENBQUMsRUFBRSxRQUFRO0FBRXRGLFNBQU87QUFDUjtBQUVBLFNBQVMsYUFBYSxNQUFNLEtBQUssV0FBVyxTQUFTO0FBQ3BELFNBQU8sV0FBVyxPQUFPLGNBQWMsT0FBTyxPQUFPLEtBQUssT0FBTyxHQUFHO0FBQ3JFO0FBRUEsSUFBTSxZQUFZO0FBQUEsRUFDakIsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUFBLEVBQ1AsS0FBSztBQUFBLEVBQ0wsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUFBLEVBQ04sVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1g7QUFBQSxFQUNBLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS047QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxRQUFRO0FBQ1Q7QUFHQSxTQUFTLE1BQU0sT0FBTyxNQUFNO0FBQzNCLE1BQUksTUFBTSxLQUFLLFNBQVMsS0FBSztBQUM3QixTQUFPLFNBQVMsTUFBTSxNQUFNLENBQUM7QUFDOUI7QUFFQSxTQUFTLGlCQUFpQixNQUFNLElBQUk7QUFDbkMsTUFBSSxFQUFFLE9BQU8sS0FBSyxJQUFJLEtBQUssT0FBTyxDQUFDO0FBQ25DLE1BQUksUUFBUSxLQUFLLE1BQU0sQ0FBQztBQUN4QixNQUFJLEtBQUssS0FBSyxTQUFTLE1BQU0sS0FBSyxDQUFDLENBQUMsR0FBRyxPQUFPLElBQUk7QUFDbEQsTUFBSSxLQUFLLEtBQUssU0FBUyxNQUFNLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxJQUFJO0FBQ2xELE1BQUksTUFBTSxJQUFJLEtBQUssRUFBRTtBQUVyQixNQUFJZ0IsS0FBSSxLQUFLLE9BQU8sRUFBRTtBQUV0QixNQUFJLFNBQVMsT0FBT0EsR0FBRSxPQUFPLFFBQVE7QUFDckMsU0FBTyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSztBQUM3QjtBQUVBLElBQU0sUUFBUTtBQUFBLEVBQ2IsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBO0FBQUEsRUFHUixLQUFLO0FBQUEsRUFDTCxLQUFLLENBQUM7QUFDUDtBQUVBLElBQU0sT0FBTyxDQUFDLE1BQU0sV0FBVyxNQUFNLE1BQU0sYUFBYTtBQUV4RCxJQUFNLGVBQWU7QUFBQSxFQUNwQixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLElBQ1AsT0FBTyxDQUFDLEdBQUcsT0FBTyxFQUFDLE9BQU8sSUFBRyxDQUFDO0FBQUEsSUFDOUIsT0FBTyxDQUFDLEdBQUcsT0FBTyxFQUFDLE9BQU8sSUFBRyxDQUFDO0FBQUEsRUFDL0I7QUFDRDtBQUVBLElBQU0sY0FBYztBQUFBLEVBQ25CLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWO0FBQUEsRUFDQSxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVQ7QUFBQTtBQUFBO0FBQUEsRUFHQSxRQUFRO0FBQUE7QUFBQSxFQUdSLEtBQUs7QUFBQSxFQUNMLEtBQUssQ0FBQztBQUFBLEVBQ04sTUFBTSxDQUFDO0FBQUEsRUFFUCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQ1A7QUFFQSxTQUFTLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVO0FBUzVELFNBQU8sV0FBVztBQUNuQjtBQUVBLElBQU0sYUFBYTtBQUFBLEVBQ2xCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFDTjtBQUVBLElBQU0sYUFBYSxPQUFPLENBQUMsR0FBRyxZQUFZO0FBQUEsRUFDekMsTUFBTTtBQUFBLEVBQ04sS0FBSztBQUNOLENBQUM7QUFFRCxJQUFNLFFBQVEsQ0FBQztBQUVmLFNBQVMsTUFBTSxLQUFLLE1BQU07QUFDekIsTUFBSUEsS0FBSSxNQUFNLEdBQUc7QUFFakIsTUFBSSxDQUFDQSxJQUFHO0FBQ1AsSUFBQUEsS0FBSTtBQUFBLE1BQ0g7QUFBQSxNQUNBLE9BQU8sQ0FBQztBQUFBLE1BQ1IsSUFBSSxNQUFNO0FBQ1QsUUFBQUEsR0FBRSxNQUFNLEtBQUssSUFBSTtBQUFBLE1BQ2xCO0FBQUEsTUFDQSxNQUFNLE1BQU07QUFDWCxRQUFBQSxHQUFFLFFBQVFBLEdBQUUsTUFBTSxPQUFPLENBQUFsQixPQUFLQSxNQUFLLElBQUk7QUFBQSxNQUN4QztBQUFBLE1BQ0EsSUFBSSxNQUFNLE1BQU1NLElBQUdhLElBQUdJLElBQUdQLElBQUdmLElBQUc7QUFDOUIsaUJBQVNhLEtBQUksR0FBR0EsS0FBSUksR0FBRSxNQUFNLFFBQVFKO0FBQ25DLFVBQUFJLEdBQUUsTUFBTUosRUFBQyxLQUFLLFFBQVFJLEdBQUUsTUFBTUosRUFBQyxFQUFFLElBQUksTUFBTSxNQUFNUixJQUFHYSxJQUFHSSxJQUFHUCxJQUFHZixFQUFDO0FBQUEsTUFDaEU7QUFBQSxJQUNEO0FBRUEsUUFBSSxPQUFPO0FBQ1YsWUFBTSxHQUFHLElBQUlpQjtBQUFBLEVBQ2Y7QUFFQSxTQUFPQTtBQUNSO0FBRUEsSUFBTSxpQkFBbUIsS0FBSztBQUM5QixJQUFNLG1CQUFtQixLQUFLO0FBRTlCLFNBQVMsT0FBT00sSUFBRyxXQUFXLElBQUk7QUFDakMsUUFBTSxPQUFPQSxHQUFFO0FBQ2YsUUFBTSxTQUFTQSxHQUFFLE9BQU8sU0FBUztBQUNqQyxRQUFNLE9BQU8sUUFBUSxJQUFJQSxHQUFFLE1BQU0sU0FBUyxJQUFJQSxHQUFFO0FBQ2hELFFBQU0sU0FBU0EsR0FBRTtBQUNqQixRQUFNLE9BQVNBLEdBQUU7QUFFakIsTUFBSSxLQUFLLEtBQUssQ0FBQyxHQUNkLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxHQUN6QyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLE9BQU9BLEdBQUUsT0FBTyxDQUFDLEVBQUUsS0FBSyxHQUMxRSxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLE9BQU8sT0FBTyxLQUFLLEdBQ3JFQyxLQUFJLEtBQUssTUFDVFosS0FBSSxLQUFLLEtBQ1RVLEtBQUksS0FBSyxPQUNUUCxLQUFJLEtBQUssUUFDVFUsS0FBSUYsR0FBRSxXQUNORyxLQUFJSCxHQUFFO0FBRVAsU0FBUSxHQUFHLE9BQU8sSUFDZjtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQUU7QUFBQSxJQUNBQztBQUFBLElBQ0FGO0FBQUEsSUFDQVo7QUFBQSxJQUNBVTtBQUFBLElBQ0FQO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNELElBQ0U7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0FXO0FBQUEsSUFDQUQ7QUFBQSxJQUNBYjtBQUFBLElBQ0FZO0FBQUEsSUFDQVQ7QUFBQSxJQUNBTztBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRDtBQUVGO0FBRUEsU0FBUyxpQkFBaUIsTUFBTSxXQUFXO0FBQzFDLE1BQUksVUFBVTtBQUdkLE1BQUksV0FBVztBQUVmLE1BQUksUUFBUSxPQUFPLEtBQUssT0FBTyxTQUFTO0FBRXhDLFdBQVN0QixLQUFJLEdBQUdBLEtBQUksTUFBTSxRQUFRQSxNQUFLO0FBQ3RDLFFBQUksSUFBSSxNQUFNQSxFQUFDO0FBR2YsUUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLO0FBQ2xCLGdCQUFVLEVBQUU7QUFBQSxhQUVKLEVBQUUsT0FBTyxDQUFDLEtBQUssV0FBVztBQUNsQyxVQUFJLEVBQUUsT0FBTztBQUNaLG9CQUFZO0FBQUE7QUFFWixvQkFBWTtBQUFBLElBQ2Q7QUFBQSxFQUNEO0FBRUEsU0FBTztBQUFBLElBQ047QUFBQSxJQUVDLFlBQVksSUFBSTtBQUFBO0FBQUEsTUFDaEIsWUFBWSxJQUFLO0FBQUE7QUFBQSxRQUNqQixZQUFZLElBQUs7QUFBQTtBQUFBLFVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUVuQjtBQUNEO0FBRUEsU0FBUyxhQUFhLE1BQU0sV0FBVyxTQUFTLFNBQVMsYUFBYTtBQUNyRSxNQUFJLE9BQU8sS0FBSztBQUNoQixNQUFJLFNBQVMsS0FBSyxPQUFPLFNBQVM7QUFDbEMsTUFBSSxXQUFXLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxFQUFFLFFBQVEsT0FBTztBQUMzRCxNQUFJLFFBQVEsS0FBSyxPQUFPLFFBQVE7QUFFaEMsU0FDQyxlQUFlLEtBQUssTUFBTSxNQUMxQixlQUFnQixJQUFJLE1BQU0sTUFDMUIsTUFBTSxTQUFVLElBQ2YsTUFBTSxPQUFPLElBQUksTUFBTSxNQUN2QixNQUFNLE1BQ0g7QUFFTjtBQUtBLFNBQVMsYUFBYSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksU0FBUztBQUN2RSxTQUFPLE9BQU8sTUFBTSxXQUFXLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxTQUFTO0FBQ3RILFFBQUksVUFBVSxPQUFPO0FBRXJCLFVBQU0sTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLElBQUksSUFBSTtBQUNoRCxVQUFNLFNBQVMsT0FBTyxPQUFPLElBQUksVUFBVTtBQUUzQyxRQUFJLE9BQU87QUFFWCxRQUFJLE9BQU8sR0FBRztBQUNiLGNBQVE7QUFDUixjQUFRO0FBQUEsSUFDVCxPQUNLO0FBQ0osY0FBUTtBQUNSLGNBQVE7QUFBQSxJQUNUO0FBR0EsUUFBSSxLQUFLLFFBQVEsVUFBVSxNQUFNLEtBQUssR0FBRyxRQUFRLE1BQU0sSUFBSSxDQUFDO0FBQzVELFFBQUksS0FBSyxRQUFRLFVBQVUsTUFBTSxLQUFLLEdBQUcsUUFBUSxNQUFNLElBQUksQ0FBQztBQUU1RCxRQUFJLEtBQUssUUFBUSxVQUFVLE1BQU0sS0FBSyxHQUFHLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFFNUQsUUFBSSxTQUFTLFFBQVEsVUFBVSxXQUFXLElBQUksT0FBTyxNQUFNLE9BQU8sS0FBSyxRQUFRLE1BQU0sSUFBSSxDQUFDO0FBRTFGLFFBQUksT0FBTyxJQUFJLE9BQU8sVUFBVTtBQUVoQyxXQUFPLE1BQU0sSUFBSSxNQUFNO0FBQ3ZCLFdBQU8sTUFBTSxJQUFJLE1BQU07QUFDdkIsV0FBTyxNQUFNLElBQUksRUFBRTtBQUVuQixXQUFPO0FBQUEsRUFDUixDQUFDO0FBQ0Y7QUFFQSxTQUFTLFNBQVMyQixPQUFNLEtBQUssU0FBUyxTQUFTLFNBQVMsU0FBUztBQUNoRSxNQUFJLE9BQU87QUFHWCxNQUFJQSxNQUFLLFNBQVMsR0FBRztBQUNwQixXQUFPLElBQUksT0FBTztBQUVsQixVQUFNQyxRQUFPLE9BQU8sSUFBSSxRQUFRO0FBRWhDLFFBQUksYUFBYTtBQUVqQixhQUFTNUIsS0FBSSxHQUFHQSxLQUFJMkIsTUFBSyxRQUFRM0IsTUFBSztBQUNyQyxVQUFJNkIsS0FBSUYsTUFBSzNCLEVBQUM7QUFFZCxVQUFJNkIsR0FBRSxDQUFDLElBQUlBLEdBQUUsQ0FBQyxHQUFHO0FBQ2hCLFlBQUlQLEtBQUlPLEdBQUUsQ0FBQyxJQUFJO0FBRWYsUUFBQVAsS0FBSSxLQUFLTSxNQUFLLE1BQU0sWUFBWSxTQUFTTixJQUFHLFVBQVUsT0FBTztBQUU3RCxxQkFBYU8sR0FBRSxDQUFDO0FBQUEsTUFDakI7QUFBQSxJQUNEO0FBRUEsUUFBSVAsS0FBSSxVQUFVLFVBQVU7QUFHNUIsUUFBSSxpQkFBaUI7QUFFckIsSUFBQUEsS0FBSSxLQUFLTSxNQUFLLE1BQU0sWUFBWSxVQUFVLGlCQUFpQixHQUFHTixJQUFHLFVBQVUsVUFBVSxjQUFjO0FBQUEsRUFDcEc7QUFFQSxTQUFPO0FBQ1I7QUFFQSxTQUFTLE9BQU9LLE9BQU0sT0FBTyxLQUFLO0FBQ2pDLE1BQUksVUFBVUEsTUFBS0EsTUFBSyxTQUFTLENBQUM7QUFFbEMsTUFBSSxXQUFXLFFBQVEsQ0FBQyxLQUFLO0FBQzVCLFlBQVEsQ0FBQyxJQUFJO0FBQUE7QUFFYixJQUFBQSxNQUFLLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQztBQUN4QjtBQUVBLFNBQVMsU0FBUyxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPO0FBQzVELE1BQUlBLFFBQU8sQ0FBQztBQUNaLE1BQUksTUFBTSxHQUFHO0FBRWIsV0FBUzNCLEtBQUksT0FBTyxJQUFJLE9BQU8sTUFBTUEsTUFBSyxRQUFRQSxNQUFLLE1BQU1BLE1BQUssS0FBSztBQUN0RSxRQUFJLE9BQU8sR0FBR0EsRUFBQztBQUVmLFFBQUksU0FBUyxNQUFNO0FBQ2xCLFVBQUksS0FBS0EsSUFBRyxLQUFLQTtBQUVqQixVQUFJLE9BQU8sR0FBRztBQUNiLGVBQU8sRUFBRUEsTUFBSyxRQUFRLEdBQUdBLEVBQUMsTUFBTTtBQUMvQixlQUFLQTtBQUFBLE1BQ1AsT0FDSztBQUNKLGVBQU8sRUFBRUEsTUFBSyxRQUFRLEdBQUdBLEVBQUMsTUFBTTtBQUMvQixlQUFLQTtBQUFBLE1BQ1A7QUFFQSxVQUFJLE9BQU8sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUMzQixVQUFJLE9BQU8sTUFBTSxLQUFLLE9BQU8sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUk3QyxVQUFJLE9BQU8sS0FBSztBQUNoQixVQUFJLFFBQVEsU0FBUyxLQUFLLFFBQVEsS0FBSyxPQUFPLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJO0FBSXpFLGFBQU87QUFFUixVQUFJLE9BQU8sS0FBSztBQUNoQixVQUFJLFFBQVEsU0FBUyxLQUFLLFFBQVEsS0FBSyxPQUFPLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJO0FBSXpFLGFBQU87QUFFUixVQUFJLFFBQVE7QUFDWCxRQUFBMkIsTUFBSyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7QUFBQSxJQUN4QjtBQUFBLEVBQ0Q7QUFFQSxTQUFPQTtBQUNSO0FBRUEsU0FBUyxXQUFXLFNBQVM7QUFDNUIsU0FBTyxXQUFXLElBQUksVUFBVSxXQUFXLElBQUksUUFBUSxDQUFBMUIsT0FBSyxVQUFVQSxJQUFHLE9BQU87QUFDakY7QUFlQSxTQUFTLEtBQUssS0FBSztBQUNsQixNQUFJLFNBQVMsT0FBTyxJQUNuQixVQUNBO0FBRUQsTUFBSSxRQUFRLE9BQU8sSUFDbEIsQ0FBQ08sSUFBRyxJQUFJLElBQUksSUFBSXNCLEtBQUlDLE9BQU07QUFBRSxJQUFBdkIsR0FBRSxNQUFNLElBQUksSUFBSSxJQUFJc0IsS0FBSUMsRUFBQztBQUFBLEVBQUcsSUFDeEQsQ0FBQ3ZCLElBQUcsSUFBSSxJQUFJc0IsS0FBSSxJQUFJQyxPQUFNO0FBQUUsSUFBQXZCLEdBQUUsTUFBTSxJQUFJLElBQUksSUFBSXNCLEtBQUlDLEVBQUM7QUFBQSxFQUFHO0FBRXpELE1BQUlILFFBQU8sT0FBTyxJQUNqQixDQUFDcEIsSUFBR0gsSUFBR2EsSUFBR0ksSUFBR1AsT0FBTTtBQUFFLElBQUFQLEdBQUUsS0FBS0gsSUFBR2EsSUFBR0ksSUFBR1AsRUFBQztBQUFBLEVBQUcsSUFDekMsQ0FBQ1AsSUFBR1UsSUFBR2IsSUFBR1UsSUFBR08sT0FBTTtBQUFFLElBQUFkLEdBQUUsS0FBS0gsSUFBR2EsSUFBR0ksSUFBR1AsRUFBQztBQUFBLEVBQUc7QUFHMUMsU0FBTyxDQUFDUCxJQUFHSCxJQUFHYSxJQUFHSSxJQUFHUCxJQUFHLFNBQVMsR0FBRyxVQUFVLE1BQU07QUFDbEQsUUFBSSxVQUFVLEtBQUssV0FBVztBQUM3QixNQUFBYSxNQUFLcEIsSUFBR0gsSUFBR2EsSUFBR0ksSUFBR1AsRUFBQztBQUFBLFNBQ2Q7QUFDSixlQUFVLElBQUksUUFBU08sS0FBSSxHQUFHUCxLQUFJLENBQUM7QUFDbkMsZ0JBQVUsSUFBSSxTQUFTTyxLQUFJLEdBQUdQLEtBQUksQ0FBQztBQUduQyxhQUFPUCxJQUFHSCxLQUFJLFFBQVFhLEVBQUM7QUFDdkIsWUFBTVYsSUFBR0gsS0FBSWlCLElBQUdKLElBQUdiLEtBQUlpQixJQUFHSixLQUFJSCxJQUFHLE1BQU07QUFDdkMsWUFBTVAsSUFBR0gsS0FBSWlCLElBQUdKLEtBQUlILElBQUdWLElBQUdhLEtBQUlILElBQUcsT0FBTztBQUN4QyxZQUFNUCxJQUFHSCxJQUFHYSxLQUFJSCxJQUFHVixJQUFHYSxJQUFHLE9BQU87QUFDaEMsWUFBTVYsSUFBR0gsSUFBR2EsSUFBR2IsS0FBSWlCLElBQUdKLElBQUcsTUFBTTtBQUMvQixNQUFBVixHQUFFLFVBQVU7QUFBQSxJQUNiO0FBQUEsRUFDRDtBQUNEO0FBR0EsSUFBTSxVQUFVLENBQUNBLElBQUdILElBQUdhLE9BQU07QUFBRSxFQUFBVixHQUFFLE9BQU9ILElBQUdhLEVBQUM7QUFBRztBQUMvQyxJQUFNLFVBQVUsQ0FBQ1YsSUFBR1UsSUFBR2IsT0FBTTtBQUFFLEVBQUFHLEdBQUUsT0FBT0gsSUFBR2EsRUFBQztBQUFHO0FBQy9DLElBQU0sVUFBVSxDQUFDVixJQUFHSCxJQUFHYSxPQUFNO0FBQUUsRUFBQVYsR0FBRSxPQUFPSCxJQUFHYSxFQUFDO0FBQUc7QUFDL0MsSUFBTSxVQUFVLENBQUNWLElBQUdVLElBQUdiLE9BQU07QUFBRSxFQUFBRyxHQUFFLE9BQU9ILElBQUdhLEVBQUM7QUFBRztBQUMvQyxJQUFNLFFBQVEsS0FBSyxDQUFDO0FBQ3BCLElBQU0sUUFBUSxLQUFLLENBQUM7QUFDcEIsSUFBTSxPQUFPLENBQUNWLElBQUdILElBQUdhLElBQUdhLElBQUcsWUFBWSxhQUFhO0FBQUUsRUFBQXZCLEdBQUUsSUFBSUgsSUFBR2EsSUFBR2EsSUFBRyxZQUFZLFFBQVE7QUFBRztBQUMzRixJQUFNLE9BQU8sQ0FBQ3ZCLElBQUdVLElBQUdiLElBQUcwQixJQUFHLFlBQVksYUFBYTtBQUFFLEVBQUF2QixHQUFFLElBQUlILElBQUdhLElBQUdhLElBQUcsWUFBWSxRQUFRO0FBQUc7QUFDM0YsSUFBTSxpQkFBaUIsQ0FBQ3ZCLElBQUcsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFFBQVE7QUFBRSxFQUFBQSxHQUFFLGNBQWMsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLEdBQUc7QUFBRztBQUNySCxJQUFNLGlCQUFpQixDQUFDQSxJQUFHLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxRQUFRO0FBQUUsRUFBQUEsR0FBRSxjQUFjLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxHQUFHO0FBQUc7QUFHckgsU0FBUyxPQUFPLE1BQU07QUFDckIsU0FBTyxDQUFDZSxJQUFHLFdBQVcsTUFBTSxNQUFNLGFBQWE7QUFHOUMsV0FBTyxPQUFPQSxJQUFHLFdBQVcsQ0FBQyxRQUFRLE9BQU8sT0FBTyxRQUFRLFFBQVEsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFNBQVM7QUFDbkgsVUFBSSxFQUFFLFNBQVMsUUFBQVMsUUFBTyxJQUFJO0FBRTFCLFVBQUksUUFBUTtBQUVaLFVBQUksT0FBTyxPQUFPLEdBQUc7QUFDcEIsaUJBQVM7QUFDVCxjQUFNO0FBQUEsTUFDUCxPQUNLO0FBQ0osaUJBQVM7QUFDVCxjQUFNO0FBQUEsTUFDUDtBQUVBLFlBQU0sUUFBUSxTQUFTQSxRQUFPLFFBQVEsU0FBUyxDQUFDO0FBRWhELFVBQUksT0FBT0EsUUFBTyxPQUFPQSxRQUFPLFNBQVMsSUFBSTtBQUM3QyxVQUFJLE1BQU0sU0FBUyxNQUFNLEdBQUcsQ0FBQztBQUU3QixVQUFJLE9BQU8sSUFBSSxPQUFPO0FBQ3RCLFVBQUksT0FBTyxJQUFJLE9BQU87QUFFdEIsVUFBSSxFQUFFLE1BQU0sS0FBSyxLQUFVLE9BQU8sS0FBSyxRQUFRLElBQUksSUFBSVQsR0FBRTtBQUV6RDtBQUFBLFFBQU07QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU0sTUFBTTtBQUFBLFFBQ1osTUFBTSxNQUFNO0FBQUEsTUFDYjtBQUVBLFlBQU0sWUFBWSxRQUFNO0FBQ3ZCLFlBQUksTUFBTSxFQUFFLEtBQUssTUFBTTtBQUN0QixjQUFJbEIsS0FBSSxRQUFRLFVBQVUsTUFBTSxFQUFFLEdBQUcsUUFBUSxNQUFNLElBQUksQ0FBQztBQUN4RCxjQUFJYSxLQUFJLFFBQVEsVUFBVSxNQUFNLEVBQUUsR0FBRyxRQUFRLE1BQU0sSUFBSSxDQUFDO0FBRXhELGlCQUFPLE1BQU1iLEtBQUksS0FBS2EsRUFBQztBQUN2QixjQUFJLE1BQU1iLElBQUdhLElBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUFBLFFBQy9CO0FBQUEsTUFDRDtBQUVBLFVBQUk7QUFDSCxpQkFBUyxRQUFRLFNBQVM7QUFBQSxXQUN0QjtBQUNKLGlCQUFTLEtBQUssTUFBTSxNQUFNLE1BQU07QUFDL0Isb0JBQVUsRUFBRTtBQUFBLE1BQ2Q7QUFFQSxhQUFPO0FBQUEsUUFDTixRQUFRLFFBQVEsSUFBSSxPQUFPO0FBQUEsUUFDM0I7QUFBQSxRQUNBO0FBQUEsUUFDQSxPQUFPLGlCQUFpQjtBQUFBLE1BQ3pCO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUNEO0FBRUEsU0FBUyxTQUFTLFFBQVE7QUFDekIsU0FBTyxDQUFDLFFBQVEsTUFBTSxNQUFNLE1BQU0sS0FBSyxTQUFTO0FBQy9DLFFBQUksUUFBUSxNQUFNO0FBQ2pCLFVBQUksT0FBTyxRQUFRLFFBQVE7QUFDMUIsZUFBTyxRQUFRLE1BQU0sSUFBSTtBQUMxQixVQUFJLE9BQU8sUUFBUSxRQUFRO0FBQzFCLGVBQU8sUUFBUSxNQUFNLElBQUk7QUFFMUIsYUFBTyxRQUFRLE1BQU0sSUFBSTtBQUFBLElBQzFCO0FBQUEsRUFDRDtBQUNEO0FBRUEsSUFBTSxXQUFXLFNBQVMsT0FBTztBQUNqQyxJQUFNLFdBQVcsU0FBUyxPQUFPO0FBRWpDLFNBQVMsT0FBTyxNQUFNO0FBQ3JCLFFBQU0sWUFBWSxPQUFPLDZCQUFNLFdBQVcsQ0FBQztBQUUzQyxTQUFPLENBQUNLLElBQUcsV0FBVyxNQUFNLFNBQVM7QUFDcEMsV0FBTyxPQUFPQSxJQUFHLFdBQVcsQ0FBQyxRQUFRLE9BQU8sT0FBTyxRQUFRLFFBQVEsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFNBQVM7QUFDbkgsT0FBQyxNQUFNLElBQUksSUFBSSxZQUFZLE9BQU8sTUFBTSxJQUFJO0FBRTVDLFVBQUksVUFBVSxPQUFPO0FBRXJCLFVBQUksWUFBWSxTQUFPLFFBQVEsVUFBVSxLQUFLLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFDakUsVUFBSSxZQUFZLFNBQU8sUUFBUSxVQUFVLEtBQUssUUFBUSxNQUFNLElBQUksQ0FBQztBQUVqRSxVQUFJLFFBQVE7QUFFWixVQUFJLE9BQU8sT0FBTyxHQUFHO0FBQ3BCLGlCQUFTO0FBQ1Qsa0JBQVU7QUFBQSxNQUNYLE9BQ0s7QUFDSixpQkFBUztBQUNULGtCQUFVO0FBQUEsTUFDWDtBQUVBLFlBQU0sTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLElBQUksSUFBSTtBQUVoRCxZQUFNLFNBQVMsRUFBQyxRQUFRLElBQUksT0FBTyxHQUFHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxPQUFPLGVBQWM7QUFDM0csWUFBTSxTQUFTLE9BQU87QUFFdEIsVUFBSSxTQUFTO0FBR2IsWUFBTSxXQUFXLE9BQU8sUUFBUSxPQUFPO0FBRXZDLFVBQUksVUFBVTtBQUNiLFlBQUksWUFBWSxTQUFPQSxHQUFFLFNBQVMsS0FBSyxPQUFPLEtBQUssSUFBSTtBQUV2RCxZQUFJLE9BQU8sTUFDVixPQUFPLE1BQ1AsS0FBSyxNQUFNO0FBRVosWUFBSSxPQUFPLFVBQVUsTUFBTSxPQUFPLElBQUksT0FBTyxJQUFJLENBQUM7QUFFbEQsWUFBSSxTQUFTLFVBQVUsTUFBTSxJQUFJLENBQUM7QUFDbEMsWUFBSSxTQUFTLFVBQVUsTUFBTSxJQUFJLENBQUM7QUFHbEMsWUFBSSxjQUFjLFVBQVUsT0FBTyxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUM7QUFFOUQsaUJBQVN2QixLQUFJLE9BQU8sSUFBSSxPQUFPLE1BQU1BLE1BQUssUUFBUUEsTUFBSyxNQUFNQSxNQUFLLEtBQUs7QUFDdEUsY0FBSSxPQUFPLE1BQU1BLEVBQUM7QUFDbEIsY0FBSSxZQUFZLE9BQU8sSUFBSyxPQUFPLGNBQWdCLE9BQU87QUFDMUQsY0FBSUssS0FBSSxZQUFZLE9BQVEsVUFBVSxJQUFJO0FBRTFDLGNBQUksT0FBTyxNQUFNTCxFQUFDO0FBRWxCLGNBQUlLLE1BQUssTUFBTTtBQUNkLGdCQUFJLFFBQVEsTUFBTTtBQUNqQixxQkFBTztBQUVQLGtCQUFJLFFBQVEsTUFBTTtBQUNqQix1QkFBTyxRQUFRQSxJQUFHLFVBQVUsSUFBSSxDQUFDO0FBQ2pDLHNCQUFNLE9BQU8sT0FBTztBQUFBLGNBQ3JCLE9BQU87QUFDTixvQkFBSSxPQUFPO0FBQ1YseUJBQU87QUFBQSx5QkFDQyxPQUFPO0FBQ2YseUJBQU87QUFBQSxjQUNUO0FBQUEsWUFDRCxPQUNLO0FBQ0osa0JBQUksU0FBUztBQUNaLHlCQUFTO0FBQUEsWUFDWDtBQUFBLFVBQ0QsT0FDSztBQUNKLGdCQUFJLFFBQVE7QUFDWCxzQkFBUSxRQUFRLE1BQU0sVUFBVSxJQUFJLEdBQUcsVUFBVSxJQUFJLEdBQUcsVUFBVSxHQUFHLEdBQUcsVUFBVSxJQUFJLENBQUM7QUFFeEYsZ0JBQUksUUFBUSxNQUFNO0FBQ2pCLHFCQUFPO0FBQ1AscUJBQU8sUUFBUUEsSUFBRyxVQUFVLElBQUksQ0FBQztBQUNqQyxxQkFBTyxPQUFPLE1BQU07QUFBQSxZQUNyQixPQUNLO0FBQ0oscUJBQU8sT0FBTztBQUVkLGtCQUFJLFNBQVM7QUFDWix5QkFBUztBQUFBLFlBQ1g7QUFFQSxtQkFBT0E7QUFDUCwwQkFBYyxVQUFVLE9BQU8sR0FBRztBQUFBLFVBQ25DO0FBQUEsUUFDRDtBQUVBLFlBQUksUUFBUSxRQUFRLFFBQVEsUUFBUSxZQUFZO0FBQy9DLGtCQUFRLFFBQVEsTUFBTSxVQUFVLElBQUksR0FBRyxVQUFVLElBQUksR0FBRyxVQUFVLEdBQUcsR0FBRyxVQUFVLElBQUksQ0FBQztBQUFBLE1BQ3pGLE9BQ0s7QUFDSixpQkFBU0wsS0FBSSxPQUFPLElBQUksT0FBTyxNQUFNQSxNQUFLLFFBQVFBLE1BQUssTUFBTUEsTUFBSyxLQUFLO0FBQ3RFLGNBQUksT0FBTyxNQUFNQSxFQUFDO0FBRWxCLGNBQUksU0FBUztBQUNaLHFCQUFTO0FBQUEsbUJBQ0QsUUFBUTtBQUNoQixtQkFBTyxRQUFRLFVBQVUsTUFBTUEsRUFBQyxDQUFDLEdBQUcsVUFBVSxJQUFJLENBQUM7QUFBQSxRQUNyRDtBQUFBLE1BQ0Q7QUFFQSxVQUFJLENBQUUsYUFBYSxXQUFZLElBQUksaUJBQWlCdUIsSUFBRyxTQUFTO0FBRWhFLFVBQUksT0FBTyxRQUFRLFFBQVEsZUFBZSxHQUFHO0FBQzVDLFlBQUksT0FBTyxPQUFPLE9BQU8sSUFBSSxPQUFPLE1BQU07QUFFMUMsWUFBSSxZQUFZLE9BQU8sT0FBT0EsSUFBRyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVztBQUMvRSxZQUFJLFVBQVUsVUFBVSxTQUFTO0FBRWpDLFlBQUksTUFBTSxVQUFVLE1BQU0sSUFBSSxDQUFDO0FBQy9CLFlBQUksTUFBTSxVQUFVLE1BQU0sSUFBSSxDQUFDO0FBRS9CLFlBQUksT0FBTztBQUNWLFdBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUc7QUFFdkIsZUFBTyxNQUFNLEtBQUssT0FBTztBQUN6QixlQUFPLE1BQU0sS0FBSyxPQUFPO0FBQUEsTUFDMUI7QUFFQSxVQUFJLENBQUMsT0FBTyxVQUFVO0FBRXJCLFlBQUlJLFFBQU8sQ0FBQztBQUVaLGtCQUFVQSxNQUFLLEtBQUssR0FBRyxTQUFTLE9BQU8sT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLFNBQVMsQ0FBQztBQU1wRixlQUFPLE9BQU9BLFFBQU8sT0FBTyxLQUFLSixJQUFHLFdBQVcsTUFBTSxNQUFNSSxLQUFJO0FBRS9ELGVBQU8sT0FBTyxTQUFTQSxPQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQUEsTUFDaEU7QUFFQSxVQUFJLGVBQWUsR0FBRztBQUNyQixlQUFPLE9BQU8sZUFBZSxJQUFJO0FBQUEsVUFDaEMsYUFBYUosSUFBRyxXQUFXLE1BQU0sTUFBTSxRQUFRLEVBQUU7QUFBQSxVQUNqRCxhQUFhQSxJQUFHLFdBQVcsTUFBTSxNQUFNLFFBQVMsQ0FBQztBQUFBLFFBQ2xELElBQUksYUFBYUEsSUFBRyxXQUFXLE1BQU0sTUFBTSxRQUFRLFdBQVc7QUFBQSxNQUMvRDtBQUVBLGFBQU87QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNGO0FBQ0Q7QUFHQSxTQUFTLFFBQVEsTUFBTTtBQUN0QixRQUFNLFFBQVEsT0FBTyxLQUFLLE9BQU8sQ0FBQztBQUVsQyxRQUFNLFVBQVUsT0FBTyxLQUFLLFNBQVMsS0FBSztBQUMxQyxRQUFNLFlBQVksT0FBTyxLQUFLLFdBQVcsQ0FBQztBQUMxQyxRQUFNLFNBQVMsT0FBTyxLQUFLLFFBQVEsS0FBSztBQUV4QyxTQUFPLENBQUNBLElBQUcsV0FBVyxNQUFNLFNBQVM7QUFDcEMsV0FBTyxPQUFPQSxJQUFHLFdBQVcsQ0FBQyxRQUFRLE9BQU8sT0FBTyxRQUFRLFFBQVEsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFNBQVM7QUFDbkgsT0FBQyxNQUFNLElBQUksSUFBSSxZQUFZLE9BQU8sTUFBTSxJQUFJO0FBRTVDLFVBQUksVUFBVSxPQUFPO0FBRXJCLFVBQUksRUFBRSxNQUFNLE1BQU0sSUFBSUEsR0FBRTtBQUV4QixVQUFJLFlBQVksU0FBTyxRQUFRLFVBQVUsS0FBSyxRQUFRLE1BQU0sSUFBSSxDQUFDO0FBQ2pFLFVBQUksWUFBWSxTQUFPLFFBQVEsVUFBVSxLQUFLLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFFakUsVUFBSSxTQUFTLE9BQU8sT0FBTyxJQUFJLFVBQVU7QUFFekMsWUFBTSxTQUFTLEVBQUMsUUFBUSxJQUFJLE9BQU8sR0FBRyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sT0FBTyxlQUFjO0FBQzNHLFlBQU0sU0FBUyxPQUFPO0FBRXRCLFlBQU0sTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLElBQUksSUFBSTtBQUVoRCxVQUFJLFdBQVksVUFBVSxNQUFNLE9BQU8sSUFBSSxPQUFPLElBQUksQ0FBQztBQUN2RCxVQUFJLFlBQVksVUFBVSxNQUFNLE9BQU8sSUFBSSxPQUFPLElBQUksQ0FBQztBQUN2RCxVQUFJLFdBQVc7QUFFZixVQUFJLGVBQWU7QUFFbkIsVUFBSSxVQUFVLFNBQVMsSUFBSTtBQUMxQix1QkFBZTtBQUNmLGVBQU8sUUFBUSxjQUFjLFFBQVE7QUFBQSxNQUN0QztBQUVBLGFBQU8sUUFBUSxXQUFXLFFBQVE7QUFFbEMsZUFBU3ZCLEtBQUksT0FBTyxJQUFJLE9BQU8sTUFBTUEsTUFBSyxRQUFRQSxNQUFLLE1BQU1BLE1BQUssS0FBSztBQUN0RSxZQUFJLFFBQVEsTUFBTUEsRUFBQztBQUVuQixZQUFJLFNBQVM7QUFDWjtBQUVELFlBQUksS0FBSyxVQUFVLE1BQU1BLEVBQUMsQ0FBQztBQUMzQixZQUFJLEtBQUssVUFBVSxLQUFLO0FBRXhCLFlBQUksU0FBUztBQUNaLGlCQUFPLFFBQVEsSUFBSSxRQUFRO0FBQUE7QUFFM0IsaUJBQU8sUUFBUSxVQUFVLEVBQUU7QUFFNUIsZUFBTyxRQUFRLElBQUksRUFBRTtBQUVyQixtQkFBVztBQUNYLG1CQUFXO0FBQUEsTUFDWjtBQUVBLFVBQUksY0FBYztBQUVsQixVQUFJLFVBQVUsU0FBUyxHQUFHO0FBQ3pCLHNCQUFjLE9BQU87QUFDckIsZUFBTyxRQUFRLGFBQWEsUUFBUTtBQUFBLE1BQ3JDO0FBRUEsVUFBSSxDQUFFLGFBQWEsV0FBWSxJQUFJLGlCQUFpQnVCLElBQUcsU0FBUztBQUVoRSxVQUFJLE9BQU8sUUFBUSxRQUFRLGVBQWUsR0FBRztBQUM1QyxZQUFJLE9BQU8sT0FBTyxPQUFPLElBQUksT0FBTyxNQUFNO0FBRTFDLFlBQUksU0FBUyxPQUFPLE9BQU9BLElBQUcsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVc7QUFDNUUsWUFBSSxVQUFVLFVBQVUsTUFBTTtBQUU5QixlQUFPLE1BQU0sYUFBYSxPQUFPO0FBQ2pDLGVBQU8sTUFBTSxjQUFjLE9BQU87QUFBQSxNQUNuQztBQUVBLFVBQUksQ0FBQyxPQUFPLFVBQVU7QUFFckIsWUFBSUksUUFBTyxDQUFDO0FBRVosUUFBQUEsTUFBSyxLQUFLLEdBQUcsU0FBUyxPQUFPLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxTQUFTLENBQUM7QUFPMUUsWUFBSSxhQUFjLE9BQU8sUUFBUSxVQUFXO0FBQzVDLFlBQUksZUFBZ0IsV0FBVyxTQUFVLElBQU0sYUFBYSxDQUFDO0FBQzdELFlBQUksYUFBZ0IsV0FBVyxTQUFTLEtBQU0sQ0FBQyxhQUFjO0FBRTdELFFBQUFBLE1BQUssUUFBUSxDQUFBRSxPQUFLO0FBQ2pCLFVBQUFBLEdBQUUsQ0FBQyxLQUFLO0FBQ1IsVUFBQUEsR0FBRSxDQUFDLEtBQUs7QUFBQSxRQUNULENBQUM7QUFFRCxlQUFPLE9BQU9GLFFBQU8sT0FBTyxLQUFLSixJQUFHLFdBQVcsTUFBTSxNQUFNSSxLQUFJO0FBRS9ELGVBQU8sT0FBTyxTQUFTQSxPQUFNLE9BQU8sS0FBSyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQUEsTUFDaEU7QUFFQSxVQUFJLGVBQWUsR0FBRztBQUNyQixlQUFPLE9BQU8sZUFBZSxJQUFJO0FBQUEsVUFDaEMsYUFBYUosSUFBRyxXQUFXLE1BQU0sTUFBTSxRQUFRLEVBQUU7QUFBQSxVQUNqRCxhQUFhQSxJQUFHLFdBQVcsTUFBTSxNQUFNLFFBQVMsQ0FBQztBQUFBLFFBQ2xELElBQUksYUFBYUEsSUFBRyxXQUFXLE1BQU0sTUFBTSxRQUFRLFdBQVc7QUFBQSxNQUMvRDtBQUVBLGFBQU87QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNGO0FBQ0Q7QUFFQSxTQUFTLGFBQWEsT0FBTyxPQUFPLFdBQVcsUUFBUSxNQUFNLE1BQU0sU0FBUyxLQUFLO0FBQ2hGLE1BQUksTUFBTSxTQUFTLEdBQUc7QUFFckIsUUFBSSxVQUFVO0FBSWQsYUFBU3ZCLEtBQUksR0FBRyxXQUFXLFVBQVVBLEtBQUksTUFBTSxRQUFRQSxNQUFLO0FBQzNELFVBQUksTUFBTUEsRUFBQyxNQUFNLFFBQVc7QUFDM0IsWUFBSSxXQUFXLE1BQU07QUFDcEIsY0FBSSxRQUFRLElBQUksTUFBTUEsRUFBQyxJQUFJLE1BQU0sT0FBTyxDQUFDO0FBRXpDLGNBQUksUUFBUSxVQUFVO0FBQ3JCLHVCQUFXO0FBQ1gscUJBQVMsSUFBSSxVQUFVLE1BQU1BLEVBQUMsR0FBRyxRQUFRLE1BQU0sSUFBSSxJQUFJLFVBQVUsTUFBTSxPQUFPLEdBQUcsUUFBUSxNQUFNLElBQUksQ0FBQztBQUFBLFVBQ3JHO0FBQUEsUUFDRDtBQUVBLGtCQUFVQTtBQUFBLE1BQ1g7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUVBLFNBQU87QUFDUjtBQUVBLFNBQVMsS0FBSyxNQUFNO0FBQ25CLFNBQU8sUUFBUTtBQUNmLFFBQU0sT0FBTyxPQUFPLEtBQUssTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7QUFDNUMsUUFBTSxRQUFRLEtBQUssU0FBUztBQUM1QixRQUFNLFlBQWEsS0FBSyxPQUFPO0FBRS9CLE1BQUksS0FBSyxLQUFLO0FBRWQ7QUFBQSxFQUVDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUNsQixPQUFPLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJO0FBRW5DLFFBQU0sV0FBVyxTQUFTLEVBQUU7QUFFNUIsUUFBTSxZQUFZLElBQUksS0FBSyxDQUFDO0FBQzVCLFFBQU0sWUFBYSxPQUFPLEtBQUssQ0FBQyxHQUFHLEdBQUc7QUFDdEMsUUFBTSxZQUFhLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUVwQyxRQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU0sU0FBUztBQUN4QyxRQUFNLFFBQVEsT0FBTyxLQUFLLE1BQU0sQ0FBQU0sT0FBSztBQUFBLEVBQUMsQ0FBQztBQUV2QyxRQUFNLEVBQUUsTUFBTSxXQUFXLFFBQVEsWUFBWSxJQUFJO0FBRWpELFNBQU8sQ0FBQ2lCLElBQUcsV0FBVyxNQUFNLFNBQVM7QUFDcEMsV0FBTyxPQUFPQSxJQUFHLFdBQVcsQ0FBQyxRQUFRLE9BQU8sT0FBTyxRQUFRLFFBQVEsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFNBQVM7QUF4NUV0SDtBQXk1RUcsVUFBSSxVQUFVLE9BQU87QUFDckIsVUFBSSxTQUFTO0FBRWIsVUFBSSxXQUFXLFlBQVk7QUFDM0IsVUFBSSxXQUFXLFlBQVk7QUFDM0IsVUFBSSxXQUFXLFlBQVk7QUFFM0IsVUFBSSxXQUFXO0FBRWYsVUFBSSxPQUFPLE9BQU87QUFDakIsU0FBQyxXQUFXLFVBQVUsSUFBSSxTQUFTQSxJQUFHLFNBQVM7QUFBQTtBQUUvQyxTQUFDLFlBQVksU0FBUyxJQUFJLFNBQVNBLElBQUcsU0FBUztBQUVoRCxZQUFNLFFBQVEsT0FBTyxPQUFPLE9BQU8sT0FBTyxJQUFJLElBQUk7QUFHbEQsVUFBSUssUUFBTyxPQUFPLE9BQU8sSUFBSSxRQUFRO0FBRXJDLFVBQUksT0FBTyxPQUFPLE9BQU8sSUFBSSxRQUFRLENBQUNMLElBQUdVLFlBQVdqQyxJQUFHLEtBQUssS0FBSyxLQUFLLFFBQVE7QUFDN0UsY0FBTXVCLElBQUdVLFlBQVdqQyxJQUFHLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFBQSxNQUMxQztBQUdBLFVBQUksT0FBTyxPQUFPdUIsR0FBRSxPQUFPLFNBQVMsRUFBRSxLQUFLLE9BQUssRUFBRSxPQUFPLENBQUMsS0FBSyxTQUFTO0FBRXhFLFVBQUksVUFBVSxRQUFRLE9BQU8sS0FBSyxNQUFNO0FBQ3hDLFVBQUksU0FBUyxPQUFPLE9BQU9BLElBQUcsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU87QUFDeEUsVUFBSSxVQUFVLFFBQVEsVUFBVSxRQUFRLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFHM0QsVUFBSSxRQUFRLFFBQVEsU0FBUyxTQUFTO0FBRXRDLFVBQUksY0FBYyxRQUFRLE9BQU8sUUFBUSxPQUFPO0FBRWhELFVBQUksWUFBWTtBQUVoQixVQUFJLGFBQWE7QUFDakIsVUFBSSxZQUFZO0FBQ2hCLFVBQUksZUFBZTtBQUNuQixVQUFJLGNBQWM7QUFFbEIsVUFBSSxhQUFhLFNBQVMsZUFBZSxLQUFLLGVBQWUsT0FBTztBQUNuRSxvQkFBWTtBQUVaLHFCQUFhLFVBQVUsT0FBT0EsSUFBRyxXQUFXLE1BQU0sSUFBSTtBQUN0RCxvQkFBWSxvQkFBSSxJQUFJO0FBQ3BCLFFBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRyxRQUFRLFdBQVM7QUFDdEMsY0FBSSxTQUFTO0FBQ1osc0JBQVUsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDO0FBQUEsUUFDbkMsQ0FBQztBQUVELFlBQUksY0FBYyxHQUFHO0FBQ3BCLHlCQUFlLFlBQVksT0FBT0EsSUFBRyxXQUFXLE1BQU0sSUFBSTtBQUMxRCx3QkFBYyxvQkFBSSxJQUFJO0FBQ3RCLFVBQUMsSUFBSSxJQUFJLFlBQVksRUFBRyxRQUFRLFdBQVM7QUFDeEMsZ0JBQUksU0FBUztBQUNaLDBCQUFZLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQztBQUFBLFVBQ3JDLENBQUM7QUFBQSxRQUNGO0FBQUEsTUFDRDtBQUVBLFVBQUksRUFBRSxJQUFJLE1BQUFXLE1BQUssSUFBSTtBQUVuQixVQUFJLE1BQU0sUUFBUUEsU0FBUSxNQUFNO0FBQy9CLGlCQUFTO0FBQ1QsZ0JBQVEsR0FBRyxPQUFPWCxJQUFHLFdBQVcsTUFBTSxJQUFJO0FBRTFDLFlBQUksR0FBRyxRQUFRO0FBQ2Qsa0JBQVEsTUFBTSxJQUFJLFNBQU9BLEdBQUUsU0FBUyxPQUFPLE1BQU0sTUFBTSxPQUFPLEtBQUssSUFBSSxDQUFDO0FBR3pFLFlBQUksUUFBUVcsTUFBSyxPQUFPWCxJQUFHLFdBQVcsTUFBTSxJQUFJO0FBRWhELFlBQUlXLE1BQUssUUFBUTtBQUNoQixtQkFBUyxNQUFNLENBQUMsSUFBSTtBQUFBO0FBRXBCLG1CQUFTLFVBQVUsTUFBTSxDQUFDLEdBQUcsUUFBUSxNQUFNLElBQUksSUFBSSxVQUFVLEdBQUcsUUFBUSxNQUFNLElBQUk7QUFFbkYsaUJBQVMsYUFBYSxPQUFPLE9BQU8sV0FBVyxRQUFRLE1BQU0sTUFBTSxNQUFNO0FBRXpFLFlBQUksU0FBUyxTQUFTO0FBQ3RCLGtCQUFVLFNBQVM7QUFBQSxNQUNwQixPQUNLO0FBQ0osaUJBQVMsYUFBYSxPQUFPLE9BQU8sV0FBVyxRQUFRLE1BQU0sTUFBTSxNQUFNO0FBRXpFLFlBQUksU0FBUyxTQUFTO0FBRXRCLGtCQUFVLFNBQVM7QUFDbkIsaUJBQVMsU0FBUztBQUFBLE1BQ25CO0FBRUEsVUFBSSxVQUFVO0FBQ2Isa0JBQVU7QUFFWCxVQUFJLGVBQWUsU0FBUztBQUMzQixzQkFBYztBQUdmLFVBQUksVUFBVTtBQUNiLGtCQUFVO0FBRVgsVUFBSSxjQUFjLFVBQVU7QUFFNUIsVUFBSSxZQUFZLFNBQVMsV0FBVyxjQUFjLGNBQWM7QUFFaEUsZUFBUyxRQUFRLE1BQU0sV0FBVyxVQUFVLFFBQVEsQ0FBQztBQUVyRCxnQkFBVSxVQUFVLElBQUksU0FBUyxJQUFJLFVBQVUsUUFBUSxJQUFJLFVBQVUsU0FBUyxVQUFVLFVBQVUsSUFBSSxXQUFXLElBQUksTUFBTSxjQUFjLGNBQWMsSUFBSTtBQUczSixZQUFNLFNBQVMsRUFBQyxRQUFRLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE9BQU8sRUFBQztBQUV0RixZQUFNLFNBQVMsWUFBWSxPQUFPLElBQUksT0FBTztBQUU3QyxVQUFJLFNBQVM7QUFFYixVQUFJLFFBQVE7QUFDWCxpQkFBU1gsR0FBRSxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUM7QUFBQSxXQUMxQjtBQUNKLFlBQUksRUFBRSxJQUFJLEdBQUcsSUFBSTtBQUVqQixZQUFJLE1BQU0sUUFBUSxNQUFNLE1BQU07QUFDN0Isa0JBQVEsR0FBRyxPQUFPQSxJQUFHLFdBQVcsTUFBTSxJQUFJO0FBQzFDLG1CQUFTLEdBQUcsT0FBT0EsSUFBRyxXQUFXLE1BQU0sSUFBSTtBQUFBLFFBQzVDO0FBQUEsTUFDRDtBQUVBLFVBQUksU0FBUyxZQUFZO0FBQ3pCLFVBQUksVUFBVSxhQUFhO0FBRTNCLGVBQVN2QixLQUFJLFNBQVMsSUFBSSxPQUFPLE1BQU1BLE1BQUssUUFBUUEsTUFBSyxNQUFNQSxNQUFLLE9BQU87QUFDMUUsWUFBSSxPQUFPLE1BQU1BLEVBQUM7QUFFbEIsWUFBSSxRQUFRO0FBQ1g7QUFFRCxZQUFJLFVBQVUsTUFBTTtBQUNuQixjQUFJLFNBQVEsWUFBT0EsRUFBQyxNQUFSLFlBQWE7QUFFekIsY0FBSSxPQUFPLFNBQVM7QUFDbkI7QUFFRCxvQkFBVSxVQUFVLE9BQU8sUUFBUSxNQUFNLElBQUk7QUFBQSxRQUM5QztBQUVBLFlBQUksT0FBTyxPQUFPLFNBQVMsS0FBSyxRQUFRLE9BQU8sTUFBTUEsRUFBQyxJQUFJQTtBQUcxRCxZQUFJLE9BQU8sVUFBVSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQzdDLFlBQUksT0FBTyxVQUFVLE9BQU8sTUFBTSxNQUFNLEdBQUcsUUFBUSxNQUFNLElBQUk7QUFFN0QsWUFBSSxNQUFNLFFBQVEsT0FBTyxNQUFNO0FBQy9CLFlBQUksTUFBTSxRQUFRLElBQUksTUFBTSxPQUFPLENBQUM7QUFDcEMsWUFBSSxNQUFNLFFBQVEsSUFBSSxNQUFNLE9BQU8sQ0FBQztBQUVwQyxZQUFJLFNBQVMsTUFBTTtBQUVuQixZQUFJLFFBQVEsTUFBTTtBQUNqQixjQUFJLEtBQUssT0FBTyxJQUFJLFVBQVU7QUFDOUIsY0FBSSxLQUFLLE9BQU8sSUFBSSxTQUFTO0FBRTdCLGNBQUksV0FBVztBQUNkLGdCQUFJLGNBQWMsS0FBSyxhQUFhQSxFQUFDLEtBQUs7QUFDekMsY0FBQTRCLE1BQUssWUFBWSxJQUFJLGFBQWE1QixFQUFDLENBQUMsR0FBRyxLQUFLLE1BQU0sTUFBTSxjQUFjLENBQUMsR0FBRyxRQUFRLElBQUksR0FBRyxTQUFTLFdBQVcsR0FBRyxJQUFJLEVBQUU7QUFFdkgsZ0JBQUksV0FBV0EsRUFBQyxLQUFLO0FBQ3BCLGNBQUE0QixNQUFLLFVBQVUsSUFBSSxXQUFXNUIsRUFBQyxDQUFDLEdBQUcsS0FBSyxNQUFNLE1BQU0sY0FBYyxDQUFDLEdBQUcsUUFBUSxJQUFJLEdBQUcsU0FBUyxXQUFXLEdBQUcsSUFBSSxFQUFFO0FBQUEsVUFDcEg7QUFFQyxZQUFBNEIsTUFBSyxRQUFRLEtBQUssTUFBTSxNQUFNLGNBQWMsQ0FBQyxHQUFHLFFBQVEsSUFBSSxHQUFHLFNBQVMsV0FBVyxHQUFHLElBQUksRUFBRTtBQUU3RjtBQUFBLFlBQUtMO0FBQUEsWUFBRztBQUFBLFlBQVd2QjtBQUFBLFlBQ2xCLE1BQVMsY0FBYztBQUFBLFlBQ3ZCO0FBQUEsWUFDQSxTQUFTO0FBQUEsWUFDVDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUVBLFVBQUksY0FBYztBQUNqQixlQUFPLFNBQVMsWUFBWSxjQUFjO0FBQUEsZUFDbEMsQ0FBQyxXQUFXO0FBQ3BCLGVBQU8sUUFBUSxPQUFPLFNBQVMsSUFBSSxPQUFPLFNBQVEsWUFBTyxZQUFQLFlBQWtCLE9BQU87QUFDM0UsZUFBTyxRQUFRO0FBQUEsTUFDaEI7QUFFQSxhQUFPLE9BQU8sWUFBWSxZQUFZO0FBRXRDLGFBQU87QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNGO0FBQ0Q7QUFFQSxTQUFTLGFBQWEsUUFBUSxNQUFNO0FBQ25DLFFBQU0sWUFBWSxPQUFPLDZCQUFNLFdBQVcsQ0FBQztBQUUzQyxTQUFPLENBQUN1QixJQUFHLFdBQVcsTUFBTSxTQUFTO0FBQ3BDLFdBQU8sT0FBT0EsSUFBRyxXQUFXLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxTQUFTO0FBQ25ILE9BQUMsTUFBTSxJQUFJLElBQUksWUFBWSxPQUFPLE1BQU0sSUFBSTtBQUU1QyxVQUFJLFVBQVUsT0FBTztBQUVyQixVQUFJLFlBQVksU0FBTyxRQUFRLFVBQVUsS0FBSyxRQUFRLE1BQU0sSUFBSSxDQUFDO0FBQ2pFLFVBQUksWUFBWSxTQUFPLFFBQVEsVUFBVSxLQUFLLFFBQVEsTUFBTSxJQUFJLENBQUM7QUFFakUsVUFBSSxRQUFRLGVBQWU7QUFFM0IsVUFBSSxPQUFPLE9BQU8sR0FBRztBQUNwQixpQkFBUztBQUNULGlCQUFTO0FBQ1Qsd0JBQWdCO0FBQUEsTUFDakIsT0FDSztBQUNKLGlCQUFTO0FBQ1QsaUJBQVM7QUFDVCx3QkFBZ0I7QUFBQSxNQUNqQjtBQUVBLFlBQU0sTUFBTSxPQUFPLE9BQU8sT0FBTyxPQUFPLElBQUksSUFBSTtBQUVoRCxVQUFJLFlBQVksVUFBVSxNQUFNLE9BQU8sSUFBSSxPQUFPLElBQUksQ0FBQztBQUN2RCxVQUFJLFdBQVc7QUFFZixVQUFJLFVBQVUsQ0FBQztBQUNmLFVBQUksVUFBVSxDQUFDO0FBRWYsZUFBU3ZCLEtBQUksT0FBTyxJQUFJLE9BQU8sTUFBTUEsTUFBSyxRQUFRQSxNQUFLLE1BQU1BLE1BQUssS0FBSztBQUN0RSxZQUFJLE9BQU8sTUFBTUEsRUFBQztBQUVsQixZQUFJLFFBQVEsTUFBTTtBQUNqQixjQUFJLE9BQU8sTUFBTUEsRUFBQztBQUNsQixjQUFJLE9BQU8sVUFBVSxJQUFJO0FBRXpCLGtCQUFRLEtBQUssV0FBVyxJQUFJO0FBQzVCLGtCQUFRLEtBQUssVUFBVSxNQUFNQSxFQUFDLENBQUMsQ0FBQztBQUFBLFFBQ2pDO0FBQUEsTUFDRDtBQUVBLFlBQU0sU0FBUyxFQUFDLFFBQVEsT0FBTyxTQUFTLFNBQVMsUUFBUSxRQUFRLGVBQWUsT0FBTyxHQUFHLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxPQUFPLGVBQWM7QUFDL0osWUFBTSxTQUFTLE9BQU87QUFFdEIsVUFBSSxDQUFFLGFBQWEsV0FBWSxJQUFJLGlCQUFpQnVCLElBQUcsU0FBUztBQUVoRSxVQUFJLE9BQU8sUUFBUSxRQUFRLGVBQWUsR0FBRztBQUM1QyxZQUFJLE9BQU8sT0FBTyxPQUFPLElBQUksT0FBTyxNQUFNO0FBRTFDLFlBQUksU0FBUyxPQUFPLE9BQU9BLElBQUcsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVc7QUFDNUUsWUFBSSxVQUFVLFVBQVUsTUFBTTtBQUU5QixlQUFPLE1BQU0sVUFBVSxPQUFPO0FBQzlCLGVBQU8sTUFBTSxXQUFXLE9BQU87QUFBQSxNQUNoQztBQUVBLFVBQUksQ0FBQyxPQUFPLFVBQVU7QUFFckIsWUFBSUksUUFBTyxDQUFDO0FBRVosUUFBQUEsTUFBSyxLQUFLLEdBQUcsU0FBUyxPQUFPLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxTQUFTLENBQUM7QUFNMUUsZUFBTyxPQUFPQSxRQUFPLE9BQU8sS0FBS0osSUFBRyxXQUFXLE1BQU0sTUFBTUksS0FBSTtBQUUvRCxlQUFPLE9BQU8sU0FBU0EsT0FBTSxPQUFPLEtBQUssTUFBTSxNQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ2hFO0FBRUEsVUFBSSxlQUFlLEdBQUc7QUFDckIsZUFBTyxPQUFPLGVBQWUsSUFBSTtBQUFBLFVBQ2hDLGFBQWFKLElBQUcsV0FBVyxNQUFNLE1BQU0sUUFBUSxFQUFFO0FBQUEsVUFDakQsYUFBYUEsSUFBRyxXQUFXLE1BQU0sTUFBTSxRQUFTLENBQUM7QUFBQSxRQUNsRCxJQUFJLGFBQWFBLElBQUcsV0FBVyxNQUFNLE1BQU0sUUFBUSxXQUFXO0FBQUEsTUFDL0Q7QUFFQSxhQUFPO0FBQUEsSUFhUixDQUFDO0FBQUEsRUFDRjtBQUNEO0FBRUEsU0FBUyxjQUFjLE1BQU07QUFDNUIsU0FBTyxhQUFhLGdCQUFnQixJQUFJO0FBQ3pDO0FBSUEsU0FBUyxlQUFlLElBQUksSUFBSSxRQUFRLFFBQVEsZUFBZSxTQUFTO0FBQ3ZFLFFBQU1kLEtBQUksR0FBRztBQUViLE1BQUlBLEtBQUk7QUFDUCxXQUFPO0FBRVIsUUFBTSxPQUFPLElBQUksT0FBTztBQUV4QixTQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFFekIsTUFBSUEsTUFBSztBQUNSLFdBQU8sTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUFBLE9BQ3JCO0FBQ0osUUFBSSxLQUFNLE1BQU1BLEVBQUMsR0FDaEIsS0FBTSxNQUFNQSxLQUFJLENBQUMsR0FDakIsTUFBTSxNQUFNQSxLQUFJLENBQUMsR0FDakIsTUFBTSxNQUFNQSxLQUFJLENBQUM7QUFHbEIsYUFBU1QsS0FBSSxHQUFHQSxLQUFJUyxLQUFJLEdBQUdULE1BQUs7QUFDL0IsVUFBSUEsRUFBQyxJQUFJLEdBQUdBLEtBQUksQ0FBQyxJQUFJLEdBQUdBLEVBQUM7QUFDekIsVUFBSUEsRUFBQyxJQUFJLEdBQUdBLEtBQUksQ0FBQyxJQUFJLEdBQUdBLEVBQUM7QUFDekIsU0FBR0EsRUFBQyxJQUFLLElBQUlBLEVBQUMsSUFBSSxJQUFJQSxFQUFDO0FBQUEsSUFDeEI7QUFJQSxPQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7QUFFWixhQUFTQSxLQUFJLEdBQUdBLEtBQUlTLEtBQUksR0FBR1QsTUFBSztBQUMvQixVQUFJLEdBQUdBLEVBQUMsTUFBTSxLQUFLLEdBQUdBLEtBQUksQ0FBQyxNQUFNLEtBQU0sR0FBR0EsS0FBSSxDQUFDLElBQUksTUFBUSxHQUFHQSxFQUFDLElBQUk7QUFDbEUsV0FBR0EsRUFBQyxJQUFJO0FBQUEsV0FDSjtBQUNKLFdBQUdBLEVBQUMsSUFBSSxLQUFLLElBQUlBLEtBQUksQ0FBQyxJQUFJLElBQUlBLEVBQUMsT0FDN0IsSUFBSSxJQUFJQSxFQUFDLElBQUksSUFBSUEsS0FBSSxDQUFDLEtBQUssR0FBR0EsS0FBSSxDQUFDLEtBQ25DLElBQUlBLEVBQUMsSUFBSSxJQUFJLElBQUlBLEtBQUksQ0FBQyxLQUFLLEdBQUdBLEVBQUM7QUFHakMsWUFBSSxDQUFDLFNBQVMsR0FBR0EsRUFBQyxDQUFDO0FBQ2xCLGFBQUdBLEVBQUMsSUFBSTtBQUFBLE1BQ1Y7QUFBQSxJQUNEO0FBRUEsT0FBR1MsS0FBSSxDQUFDLElBQUksR0FBR0EsS0FBSSxDQUFDO0FBRXBCLGFBQVNULEtBQUksR0FBR0EsS0FBSVMsS0FBSSxHQUFHVCxNQUFLO0FBQy9CO0FBQUEsUUFDQztBQUFBLFFBQ0EsR0FBR0EsRUFBQyxJQUFJLElBQUlBLEVBQUMsSUFBSTtBQUFBLFFBQ2pCLEdBQUdBLEVBQUMsSUFBSSxHQUFHQSxFQUFDLElBQUksSUFBSUEsRUFBQyxJQUFJO0FBQUEsUUFDekIsR0FBR0EsS0FBSSxDQUFDLElBQUksSUFBSUEsRUFBQyxJQUFJO0FBQUEsUUFDckIsR0FBR0EsS0FBSSxDQUFDLElBQUksR0FBR0EsS0FBSSxDQUFDLElBQUksSUFBSUEsRUFBQyxJQUFJO0FBQUEsUUFDakMsR0FBR0EsS0FBSSxDQUFDO0FBQUEsUUFDUixHQUFHQSxLQUFJLENBQUM7QUFBQSxNQUNUO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFFQSxTQUFPO0FBQ1I7QUFFQSxJQUFNLGNBQWMsb0JBQUksSUFBSTtBQUU1QixTQUFTLGtCQUFrQjtBQUMxQixXQUFTdUIsTUFBSztBQUNiLElBQUFBLEdBQUUsU0FBUyxJQUFJO0FBQ2pCO0FBRUEsSUFBSSxRQUFRO0FBQ1gsS0FBRyxRQUFRLEtBQUssZUFBZTtBQUMvQixLQUFHLFFBQVEsS0FBSyxpQkFBaUIsSUFBSTtBQUNyQyxLQUFHLFlBQVksS0FBSyxNQUFNO0FBQUUsVUFBTSxVQUFVO0FBQUEsRUFBUyxDQUFDO0FBQ3ZEO0FBRUEsSUFBTSxhQUFhLE9BQU87QUFDMUIsSUFBTSxhQUFhLE9BQU87QUFFMUIsU0FBUyxZQUFZVCxJQUFHLElBQUksSUFBSSxPQUFPO0FBQ3RDLE1BQUlxQixNQUFLLFFBQVEsQ0FBQ3JCLEdBQUUsQ0FBQyxHQUFHQSxHQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU9BLEdBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU9BLEdBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0UsU0FBT3FCLElBQUcsSUFBSSxDQUFDekIsSUFBR1YsT0FBTSxXQUFXVSxJQUFHVixJQUFHLElBQUksRUFBRSxDQUFDO0FBQ2pEO0FBRUEsU0FBUyxhQUFhYyxJQUFHLEtBQUs7QUFDN0IsU0FBT0EsR0FBRSxJQUFJLENBQUNKLElBQUdWLE9BQU1BLE1BQUssSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsS0FBS1UsRUFBQyxDQUFDO0FBQ3hEO0FBRUEsU0FBUyxXQUFXQSxJQUFHVixJQUFHLElBQUksSUFBSTtBQUNqQyxTQUFPLE9BQU8sQ0FBQyxHQUFJQSxNQUFLLElBQUksS0FBSyxJQUFLVSxFQUFDO0FBQ3hDO0FBRUEsU0FBUyxTQUFTLE1BQU0sU0FBUyxTQUFTO0FBQ3pDLFNBQU8sV0FBVyxPQUFPLGdCQUFnQixDQUFDLFNBQVMsT0FBTztBQUMzRDtBQUVBLElBQU0sWUFBWTtBQUlsQixTQUFTLFNBQVMsTUFBTSxTQUFTLFNBQVM7QUFDekMsU0FBTyxXQUFXLE9BQU8sZ0JBQWdCLFNBQVMsU0FBUyxTQUFTLFVBQVUsSUFBSTtBQUNuRjtBQUVBLFNBQVMsU0FBUyxNQUFNLFNBQVMsU0FBUyxPQUFPO0FBQ2hELFNBQU8sV0FBVyxPQUFPLGdCQUFnQixTQUFTLFNBQVMsU0FBUyxLQUFLLE9BQU8sS0FBSyxFQUFFLEtBQUssS0FBSztBQUNsRztBQUVBLElBQU0sV0FBVztBQUVqQixTQUFTLFdBQVcsTUFBTSxTQUFTLFNBQVMsT0FBTztBQUNsRCxTQUFPLFdBQVcsT0FBTyxnQkFBZ0IsV0FBVyxTQUFTLFNBQVMsS0FBSyxPQUFPLEtBQUssRUFBRSxLQUFLLEtBQUs7QUFDcEc7QUFFQSxJQUFNLGFBQWE7QUFHbkIsU0FBUyxTQUFTLFFBQVEsUUFBUSxPQUFPLEtBQUssVUFBVTtBQUN2RCxNQUFJLFlBQVksSUFBSSxhQUFhLE1BQU0sR0FBRyxhQUFhLE1BQU0sQ0FBQztBQUU5RCxNQUFJLFFBQVEsU0FBUztBQUVyQixNQUFJLFVBQVUsV0FBWSxXQUFXLE1BQU8sT0FBTyxLQUFLO0FBRXhELEtBQUc7QUFDRixRQUFJLFlBQVksTUFBTSxPQUFPO0FBQzdCLFFBQUksYUFBYSxNQUFNLFlBQVk7QUFFbkMsUUFBSSxjQUFjLFlBQVksYUFBYSxZQUFZLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxNQUFNO0FBQzFGLGFBQU8sQ0FBQyxXQUFXLFVBQVU7QUFBQSxFQUMvQixTQUFTLEVBQUUsVUFBVSxNQUFNO0FBRTNCLFNBQU8sQ0FBQyxHQUFHLENBQUM7QUFDYjtBQUVBLFNBQVMsWUFBWTBCLE9BQU07QUFDMUIsTUFBSSxVQUFVO0FBQ2QsRUFBQUEsUUFBT0EsTUFBSyxRQUFRLFdBQVcsQ0FBQ3BCLElBQUcsUUFBUSxXQUFXLE9BQU8sY0FBYyxDQUFDLE1BQU0sT0FBTyxLQUFLLElBQUk7QUFDbEcsU0FBTyxDQUFDb0IsT0FBTSxVQUFVLFdBQVc7QUFDcEM7QUFFQSxTQUFTLGFBQWEsTUFBTTtBQUMzQixNQUFJLEtBQUssTUFBTTtBQUNkLEtBQUMsS0FBSyxNQUFNLEtBQUssU0FBUyxFQUFFLFFBQVEsQ0FBQUMsT0FBSztBQUN4QyxVQUFJLE9BQU8sU0FBU0EsR0FBRSxDQUFDLElBQUksU0FBUyxDQUFDO0FBQ3JDLE1BQUFBLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsRUFBRSxRQUFRLGFBQWEsT0FBTyxJQUFJO0FBQzVDLE1BQUFBLEdBQUUsQ0FBQyxJQUFJO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDRjtBQUNEO0FBRUEsU0FBUyxNQUFNLE1BQU0sTUFBTSxNQUFNO0FBMzFGakM7QUE0MUZDLFFBQU0sT0FBTztBQUFBLElBQ1osTUFBTSxPQUFPLEtBQUssTUFBTSxDQUFDO0FBQUEsRUFDMUI7QUFFQSxRQUFNLE9BQU8sS0FBSztBQUVsQixXQUFTLFFBQVEsS0FBSyxPQUFPLEtBQUtDLE1BQUs7QUFDdEMsUUFBSSxNQUFNLE1BQU0sU0FBUyxHQUFHO0FBQzVCLFdBQU9BLE9BQU0sT0FBTyxNQUFNLE9BQU8sS0FBTSxJQUFJLE1BQU87QUFBQSxFQUNuRDtBQUVBLFdBQVMsUUFBUSxLQUFLLE9BQU8sS0FBS0EsTUFBSztBQUN0QyxRQUFJLE1BQU0sTUFBTSxTQUFTLEdBQUc7QUFDNUIsV0FBT0EsT0FBTSxPQUFPLE1BQU0sT0FBTyxLQUFLLE1BQU8sSUFBSTtBQUFBLEVBQ2xEO0FBRUEsV0FBUyxPQUFPLEtBQUssT0FBTyxLQUFLQSxNQUFLO0FBQ3JDLFdBQU8sTUFBTSxPQUFPLElBQUksUUFBUSxLQUFLLE9BQU8sS0FBS0EsSUFBRyxJQUFJLFFBQVEsS0FBSyxPQUFPLEtBQUtBLElBQUc7QUFBQSxFQUNyRjtBQUVBLE9BQUssWUFBWTtBQUNqQixPQUFLLFlBQVk7QUFFakIsTUFBSSxRQUFRO0FBQ1osT0FBSyxTQUFTO0FBRWQsUUFBTSxPQUFPLEtBQUssT0FBTyxTQUFTLEtBQUs7QUFFdkMsTUFBSSxLQUFLLE1BQU07QUFDZCxTQUFLLEtBQUssS0FBSztBQUVoQixXQUFTLE1BQU0sS0FBSyxLQUFLO0FBRXpCLE1BQUksS0FBSyxPQUFPO0FBQ2YsUUFBSSxRQUFRLFNBQVMsT0FBTyxJQUFJO0FBQ2hDLFVBQU0sY0FBYyxLQUFLO0FBQUEsRUFDMUI7QUFFQSxRQUFNLE1BQU0sU0FBUyxRQUFRO0FBQzdCLFFBQU0sTUFBTSxLQUFLLE1BQU0sSUFBSSxXQUFXLElBQUk7QUFFMUMsUUFBTSxPQUFPLFNBQVMsTUFBTSxJQUFJO0FBRWhDLEtBQUcsU0FBUyxNQUFNLENBQUFqQixPQUFLO0FBQ3RCLFFBQUlBLEdBQUUsV0FBVyxNQUFNO0FBQ3RCLFVBQUksVUFBVSxjQUFjLGNBQWMsYUFBYTtBQUN2RCxpQkFBVyxLQUFLLE1BQU0sTUFBTUEsRUFBQztBQUFBLElBQzlCO0FBQUEsRUFDRCxHQUFHLElBQUk7QUFFUCxRQUFNLFFBQVEsS0FBSyxRQUFRLFNBQVMsT0FBTyxJQUFJO0FBQy9DLE9BQUssWUFBWSxHQUFHO0FBQ3BCLFFBQU0sT0FBTyxLQUFLLE9BQU8sU0FBUyxNQUFNLElBQUk7QUFFNUMsU0FBTyxLQUFLLElBQUk7QUFFaEIsUUFBTSxVQUFVLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQztBQUV2QyxRQUFNLFVBQVUsV0FBVyxPQUFPO0FBRWxDLEdBQUMsS0FBSyxXQUFXLENBQUMsR0FBRyxRQUFRLENBQUFiLE9BQUs7QUFDakMsUUFBSUEsR0FBRTtBQUNMLGFBQU9BLEdBQUUsS0FBSyxNQUFNLElBQUksS0FBSztBQUFBLEVBQy9CLENBQUM7QUFFRCxRQUFNLEtBQUssS0FBSyxNQUFNO0FBRXRCLFFBQU0sU0FBVSxLQUFLLFNBQVMsUUFBUSxJQUNyQyxZQUFZLEtBQUssVUFBVSxDQUFDLEdBQUcsYUFBYSxhQUFhLEtBQUssSUFDOUQsYUFBYSxLQUFLLFVBQVUsQ0FBQyxJQUFJLEdBQUcsWUFBWTtBQUNqRCxRQUFNLE9BQVUsS0FBSyxPQUFTLFlBQVksS0FBSyxRQUFVLENBQUMsR0FBRyxXQUFhLFdBQWMsSUFBSTtBQUM1RixRQUFNLFNBQVUsS0FBSyxTQUFTLENBQUM7QUFDL0IsUUFBTSxRQUFVLEtBQUssUUFBUyxLQUFLLFNBQVMsQ0FBQztBQUU3QyxRQUFNLFFBQVEsT0FBSztBQUNsQixNQUFFLE9BQU8sU0FBUyxFQUFFLFFBQVEsSUFBSTtBQUNoQyxNQUFFLE1BQU0sT0FBTyxFQUFFLEtBQUssRUFBRTtBQUFBLEVBQ3pCLENBQUM7QUFFRCxRQUFNLFlBQVksUUFBUSxJQUFJLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsT0FBTyxDQUFDLEVBQUU7QUFFcEUsUUFBTSxlQUFlO0FBQUEsSUFDcEIsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1Q7QUFFQSxRQUFNLGFBQWEsS0FBSyxhQUFhLENBQUMsUUFBUSxRQUFRLEdBQUcsSUFBSSxDQUFBK0IsU0FBTyxhQUFhQSxJQUFHLENBQUM7QUFFckYsV0FBUyxhQUFhLElBQUk7QUFDekIsVUFBTSxTQUNMLEdBQUcsU0FBUyxJQUFNLFNBQU8sTUFBTSxNQUFNLElBQUksTUFBTSxHQUFHLE1BQU0sTUFBTSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsSUFDMUYsR0FBRyxTQUFTLElBQU0sU0FBTyxNQUFNLEtBQUssR0FBRyxLQUFLLElBQzVDLEdBQUcsU0FBUyxNQUFNLFNBQU8sR0FBRyxJQUFJLEdBQUcsSUFDbkMsU0FBTztBQUdSLFdBQU8sU0FBTztBQUNiLFVBQUksT0FBTyxPQUFPLEdBQUc7QUFDckIsVUFBSSxFQUFFLE1BQU0sS0FBSyxJQUFJO0FBQ3JCLFVBQUksUUFBUSxPQUFPO0FBQ25CLGNBQVEsT0FBTyxRQUFRO0FBQUEsSUFDeEI7QUFBQSxFQUNEO0FBRUEsV0FBUyxVQUFVLFVBQVU7QUFDNUIsUUFBSSxLQUFLLE9BQU8sUUFBUTtBQUV4QixRQUFJLE1BQU0sTUFBTTtBQUNmLFVBQUksYUFBYSxLQUFLLFVBQVUsV0FBVyxRQUFRLEtBQUs7QUFFeEQsVUFBSSxVQUFVLFFBQVEsTUFBTTtBQUUzQixrQkFBVSxVQUFVLElBQUk7QUFFeEIsWUFBSUMsTUFBSyxPQUFPLENBQUMsR0FBRyxPQUFPLFVBQVUsSUFBSSxHQUFHLFdBQVcsRUFBQyxLQUFLLFNBQVEsQ0FBQztBQUN0RSxRQUFBQSxJQUFHLFdBQVcsYUFBYUEsR0FBRTtBQUM3QixlQUFPLFFBQVEsSUFBSUE7QUFBQSxNQUNwQixPQUNLO0FBQ0osYUFBSyxPQUFPLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBSSxZQUFZLFlBQVksYUFBYSxZQUFhLFNBQVM7QUFFL0YsV0FBRyxNQUFNO0FBRVQsWUFBSSxTQUFTLEdBQUc7QUFFaEIsWUFBSSxLQUFLLEdBQUc7QUFFWixZQUFJLGFBQWEsTUFBTSxFQUFFO0FBRXpCLFlBQUksWUFBWSxhQUFjLFFBQVEsS0FBSyxDQUFDLFFBQVM7QUFFcEQsY0FBSSxlQUFlLEdBQUcsQ0FBQyxLQUFLLFFBQVEsR0FBRyxDQUFDLEtBQUssT0FBTztBQUNuRCxpQkFBSztBQUFBLGNBQ0osS0FBSyxHQUFHLENBQUMsS0FBSyxPQUFPLGdCQUFnQjtBQUFBLGdCQUNwQyxNQUFNO0FBQUEsZ0JBQ04sTUFBTSxHQUFHLENBQUM7QUFBQSxnQkFDVixNQUFNLEdBQUcsQ0FBQztBQUFBLGNBQ1g7QUFBQSxjQUNBLEtBQUssR0FBRyxDQUFDLEtBQUssT0FBTyxnQkFBZ0I7QUFBQSxnQkFDcEMsTUFBTTtBQUFBLGdCQUNOLE1BQU0sR0FBRyxDQUFDO0FBQUEsZ0JBQ1YsTUFBTSxHQUFHLENBQUM7QUFBQSxjQUNYO0FBQUEsWUFDRDtBQUNBLHlCQUFhO0FBQUEsVUFDZDtBQUVBLGNBQUksQ0FBQyxjQUFjLE1BQU0sRUFBRSxHQUFHO0FBQzdCLGdCQUFJLE1BQU07QUFFVixpQkFBSyxDQUFDQyxPQUFNLFNBQVMsWUFBWSxXQUFXLE9BQU8sZ0JBQWdCLFNBQVMsU0FBUyxTQUFTLEdBQUc7QUFBQSxVQUNsRztBQUFBLFFBQ0Q7QUFFQSxXQUFHLFFBQVEsU0FBUyxPQUFPLFNBQVMsWUFBWSxZQUFZLFlBQzFELEdBQUcsU0FBUyxJQUFJLFdBQVcsR0FBRyxTQUFTLElBQUksYUFBYSxXQUN4RCxHQUFHLFNBQVMsSUFBSSxXQUFXLEdBQUcsU0FBUyxJQUFJLGFBQWEsU0FDekQ7QUFFRCxXQUFHLE9BQU8sU0FBUyxhQUFhLFFBQVEsR0FBRyxJQUFJO0FBRS9DLFdBQUcsUUFBUSxTQUFTLEdBQUcsU0FBUyxVQUFVO0FBRzFDLFdBQUcsT0FBTyxHQUFHLE9BQU87QUFFcEIsV0FBRyxXQUFXLGFBQWEsRUFBRTtBQUFBLE1BQzlCO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFFQSxZQUFVLEdBQUc7QUFDYixZQUFVLEdBQUc7QUFHYixNQUFJLFFBQVEsR0FBRztBQUNkLFdBQU8sUUFBUSxDQUFBeEIsT0FBSztBQUNuQixnQkFBVUEsR0FBRSxLQUFLO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0Y7QUFFQSxPQUFLLFFBQVEsQ0FBQVYsT0FBSztBQUNqQixjQUFVQSxHQUFFLEtBQUs7QUFBQSxFQUNsQixDQUFDO0FBRUQsV0FBU0ksTUFBSyxLQUFLO0FBQ2xCLGNBQVVBLEVBQUM7QUFFWixRQUFNLFNBQVMsT0FBTyxTQUFTO0FBRS9CLFFBQU0sY0FBYyxPQUFPO0FBRTNCLE1BQUksV0FBVztBQUVmLE1BQUksT0FBTyxPQUFPLEdBQUc7QUFDcEIsYUFBUyxNQUFNLE1BQU07QUFDckIsZ0JBQVk7QUFDWixnQkFBWTtBQUFBLEVBY2IsT0FDSztBQUNKLGFBQVMsTUFBTSxNQUFNO0FBQ3JCLGdCQUFZO0FBQ1osZ0JBQVk7QUFBQSxFQWNiO0FBRUEsUUFBTSxhQUFhLENBQUM7QUFHcEIsV0FBU0EsTUFBSyxRQUFRO0FBQ3JCLFFBQUksS0FBSyxPQUFPQSxFQUFDO0FBRWpCLFFBQUksR0FBRyxPQUFPLFFBQVEsR0FBRyxPQUFPLE1BQU07QUFDckMsaUJBQVdBLEVBQUMsSUFBSSxFQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssR0FBRyxJQUFHO0FBQ3pDLFNBQUcsTUFBTSxHQUFHLE1BQU07QUFBQSxJQUNuQjtBQUFBLEVBQ0Q7QUFHQSxRQUFNLFVBQVksS0FBSyxXQUFXLFFBQU0sSUFBSSxLQUFLLE1BQU0sS0FBSyxFQUFFLENBQUM7QUFDL0QsUUFBTSxXQUFZLEtBQUssV0FBVztBQUVsQyxRQUFNLGtCQUFtQixNQUFNLElBQUksaUJBQWlCLE9BQU8sSUFBSSxnQkFBZ0IsT0FBTztBQUN0RixRQUFNLGdCQUFrQixhQUFhLFNBQVMsZUFBZ0IsTUFBTSxJQUFJLG9CQUFvQixrQkFBbUIsUUFBUSxDQUFDO0FBQ3hILFFBQU0saUJBQWtCLGNBQWMsU0FBUyxnQkFBZ0Isa0JBQWtCLFFBQVEsQ0FBQztBQUUxRixRQUFNLGFBQWEsQ0FBQztBQUVwQixRQUFNLFNBQWMsS0FBSyxTQUFTLE9BQU8sQ0FBQyxHQUFHLFlBQVksS0FBSyxNQUFNO0FBQ3BFLFFBQU0sU0FBNkIsS0FBSyxTQUFTLE9BQU8sQ0FBQyxHQUFHLFlBQVksRUFBQyxNQUFNLEVBQUMsR0FBRyxRQUFRLEVBQUMsRUFBQyxHQUFHLEtBQUssTUFBTTtBQUMzRyxRQUFNLGFBQWEsT0FBTztBQUMxQixRQUFNLGFBQTRCLE9BQU87QUFDekMsUUFBTSxVQUFhLE9BQU87QUFFMUI7QUFDQyxXQUFPLE9BQU87QUFFZCxZQUFRLFFBQVMsU0FBUyxRQUFRLEtBQUs7QUFDdkMsWUFBUSxPQUFTLFNBQVMsUUFBUSxJQUFJO0FBQ3RDLFlBQVEsU0FBUyxTQUFTLFFBQVEsTUFBTTtBQUN4QyxZQUFRLE9BQVMsU0FBUyxRQUFRLElBQUk7QUFBQSxFQUN2QztBQUVBLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUksYUFBYSxDQUFDO0FBQ2xCLE1BQUksY0FBYyxDQUFDO0FBQ25CLE1BQUk7QUFDSixNQUFJLGlCQUFpQjtBQUNyQixNQUFJLHFCQUFxQixDQUFDO0FBRTFCLE1BQUksT0FBTyxNQUFNO0FBQ2hCLFVBQU0sZUFBZSxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRSxTQUFTO0FBQ3BELHFCQUFpQixnQkFBZ0I7QUFDakMsaUJBQWEsaUJBQWlCLGFBQWEsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQztBQUU5RCxhQUFTQSxNQUFLO0FBQ2IseUJBQW1CQSxFQUFDLElBQUk7QUFBQSxFQUMxQjtBQUVBLE1BQUksWUFBWTtBQUNmLGtCQUFjLFNBQVMsU0FBUyxRQUFRLElBQUk7QUFDNUMsaUJBQWEsU0FBUyxTQUFTLE1BQU0sV0FBVztBQUdoRCxXQUFPLE1BQU0sTUFBTSxXQUFXO0FBRTlCLFFBQUksZ0JBQWdCO0FBQ25CLG1CQUFhLFNBQVMsU0FBUyxNQUFNLGFBQWEsVUFBVTtBQUU1RCxVQUFJLE9BQU8sU0FBUyxNQUFNLE1BQU0sVUFBVTtBQUMxQyxlQUFTLE1BQU0sTUFBTSxJQUFJO0FBRXpCLGVBQVMsT0FBTztBQUNmLGlCQUFTLE1BQU0sY0FBYyxJQUFJLEVBQUUsY0FBYztBQUFBLElBQ25ELE9BQ0s7QUFDSixlQUFTLGFBQWEsYUFBYTtBQUNuQyxhQUFPLFFBQVEsU0FBUyxhQUFhLFdBQVc7QUFBQSxJQUNqRDtBQUFBLEVBQ0Q7QUFFQSxRQUFNLE1BQU8sRUFBQyxNQUFNLEtBQUk7QUFDeEIsUUFBTSxPQUFPLEVBQUMsTUFBTSxNQUFLO0FBRXpCLFdBQVMsY0FBY00sSUFBR2pCLElBQUc7QUFDNUIsUUFBSUEsTUFBSyxNQUFNLGtCQUFrQixDQUFDLE9BQU8sUUFBUSxRQUFRO0FBQ3hELGFBQU87QUFFUixRQUFJLFFBQVEsQ0FBQztBQUViLFFBQUksTUFBTSxTQUFTLE1BQU0sZUFBZSxZQUFZLFdBQVcsV0FBV0EsRUFBQyxDQUFDO0FBRTVFLGFBQVMsS0FBS2lCLEdBQUUsS0FBSztBQUVyQixRQUFJLENBQUNBLEdBQUU7QUFDTixlQUFTLEtBQUssR0FBRztBQUVsQixRQUFJLFFBQVEsU0FBUyxNQUFNLE1BQU0sR0FBRztBQUVwQyxRQUFJLFFBQVEsTUFBTTtBQUNqQixVQUFJLFFBQVEsU0FBUyxlQUFlLEtBQUs7QUFFekMsVUFBSWpCLEtBQUksR0FBRztBQUNWLFlBQUksUUFBUyxRQUFRLE1BQU0sTUFBTUEsRUFBQztBQUVsQyxZQUFJO0FBQ0gsZ0JBQU0sTUFBTSxTQUFTLFFBQVEsUUFBUSxRQUFRLEtBQUssTUFBTUEsRUFBQyxJQUFJLE1BQU0sUUFBUSxPQUFPLE1BQU1BLEVBQUM7QUFFMUYsY0FBTSxNQUFNLGFBQWEsUUFBUSxLQUFLLE1BQU1BLEVBQUM7QUFBQSxNQUM5QztBQUFBLElBQ0Q7QUFFQSxRQUFJLE9BQU8sU0FBUyxjQUFjLEtBQUs7QUFFdkMsUUFBSWlCLEdBQUUsaUJBQWlCO0FBQ3RCLFdBQUssWUFBWUEsR0FBRSxLQUFLO0FBQUE7QUFFeEIsV0FBSyxjQUFjQSxHQUFFO0FBRXRCLFFBQUlqQixLQUFJLEdBQUc7QUFDVixVQUFJLENBQUMsUUFBUTtBQUNaLGFBQUssTUFBTSxRQUFRaUIsR0FBRSxRQUFRLElBQUksUUFBUSxPQUFPLE1BQU1qQixFQUFDLElBQUksUUFBUSxLQUFLLE1BQU1BLEVBQUM7QUFFaEYsY0FBUSxTQUFTLE9BQU8sQ0FBQXFCLE9BQUs7QUFDNUIsWUFBSSxPQUFPO0FBQ1Y7QUFFRCx1QkFBZUEsRUFBQztBQUVoQixZQUFJLFlBQVksT0FBTyxRQUFRSixFQUFDO0FBRWhDLGFBQUtJLEdBQUUsV0FBV0EsR0FBRSxZQUFZLE9BQU8sU0FBUztBQUUvQyxjQUFJLFVBQVUsT0FBTyxLQUFLLENBQUNKLElBQUdqQixPQUFNQSxLQUFJLEtBQUtBLE1BQUssYUFBYWlCLEdBQUUsSUFBSTtBQUVyRSxpQkFBTyxRQUFRLENBQUNBLElBQUdqQixPQUFNO0FBQ3hCLFlBQUFBLEtBQUksS0FBSyxVQUFVQSxJQUFHLFVBQVdBLE1BQUssWUFBWSxNQUFNLE9BQVEsS0FBSyxNQUFNLFNBQVMsU0FBUztBQUFBLFVBQzlGLENBQUM7QUFBQSxRQUNGO0FBRUMsb0JBQVUsV0FBVyxFQUFDLE1BQU0sQ0FBQ2lCLEdBQUUsS0FBSSxHQUFHLE1BQU0sU0FBUyxTQUFTO0FBQUEsTUFDaEUsR0FBRyxLQUFLO0FBRVIsVUFBSSxhQUFhO0FBQ2hCLGdCQUFRLFlBQVksT0FBTyxDQUFBSSxPQUFLO0FBQy9CLGNBQUksT0FBTztBQUNWO0FBRUQseUJBQWVBLEVBQUM7QUFFaEIsb0JBQVUsT0FBTyxRQUFRSixFQUFDLEdBQUcsWUFBWSxNQUFNLFNBQVMsU0FBUztBQUFBLFFBQ2xFLEdBQUcsS0FBSztBQUFBLE1BQ1Q7QUFBQSxJQUNEO0FBRUEsYUFBU3NCLFFBQU8sWUFBWTtBQUMzQixVQUFJdEMsS0FBSSxTQUFTLE1BQU0sY0FBYyxHQUFHO0FBQ3hDLE1BQUFBLEdBQUUsY0FBYztBQUNoQixZQUFNLEtBQUtBLEVBQUM7QUFBQSxJQUNiO0FBRUEsV0FBTyxDQUFDLEtBQUssS0FBSztBQUFBLEVBQ25CO0FBRUEsUUFBTSxpQkFBaUIsb0JBQUksSUFBSTtBQUUvQixXQUFTLFFBQVEsSUFBSSxNQUFNLElBQUksV0FBVyxNQUFNO0FBQy9DLFVBQU0sZ0JBQWdCLGVBQWUsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUNuRCxVQUFNLFdBQVcsT0FBTyxLQUFLLEVBQUUsRUFBRSxNQUFNLE1BQU0sSUFBSSxRQUFRO0FBRXpELFFBQUksVUFBVTtBQUNiLFNBQUcsSUFBSSxNQUFNLGNBQWMsRUFBRSxJQUFJLFFBQVE7QUFDekMscUJBQWUsSUFBSSxNQUFNLGFBQWE7QUFBQSxJQUN2QztBQUFBLEVBQ0Q7QUFFQSxXQUFTLFNBQVMsSUFBSSxNQUFNLElBQUk7QUFDL0IsVUFBTSxnQkFBZ0IsZUFBZSxJQUFJLElBQUksS0FBSyxDQUFDO0FBRW5ELGFBQVNVLE1BQUssZUFBZTtBQUM1QixVQUFJLE1BQU0sUUFBUUEsTUFBSyxJQUFJO0FBQzFCLFlBQUlBLElBQUcsTUFBTSxjQUFjQSxFQUFDLENBQUM7QUFDN0IsZUFBTyxjQUFjQSxFQUFDO0FBQUEsTUFDdkI7QUFBQSxJQUNEO0FBRUEsUUFBSSxNQUFNO0FBQ1QscUJBQWUsT0FBTyxJQUFJO0FBQUEsRUFDNUI7QUFFQSxNQUFJLGFBQWE7QUFDakIsTUFBSSxhQUFhO0FBRWpCLE1BQUksYUFBYTtBQUNqQixNQUFJLGFBQWE7QUFHakIsTUFBSSxhQUFhO0FBQ2pCLE1BQUksYUFBYTtBQUdqQixNQUFJLGNBQWM7QUFDbEIsTUFBSSxjQUFjO0FBQ2xCLE1BQUksY0FBYztBQUNsQixNQUFJLGNBQWM7QUFHbEIsTUFBSSxVQUFVO0FBQ2QsTUFBSSxVQUFVO0FBQ2QsTUFBSSxVQUFVO0FBQ2QsTUFBSSxVQUFVO0FBRWQsT0FBSyxPQUFPLENBQUM7QUFFYixNQUFJLGtCQUFrQjtBQUN0QixNQUFJLGdCQUFnQjtBQUNwQixNQUFJLHFCQUFxQjtBQUN6QixNQUFJLGtCQUFrQjtBQUN0QixNQUFJLGtCQUFrQjtBQUN0QixNQUFJLGtCQUFrQjtBQUV0QixXQUFTLFNBQVMsT0FBTyxRQUFRLE9BQU87QUFDdkMsUUFBSSxVQUFVLFNBQVMsS0FBSyxTQUFTLFVBQVUsS0FBSztBQUNuRCxlQUFTLE9BQU8sTUFBTTtBQUV2QixpQkFBYSxLQUFLO0FBRWxCLHlCQUFxQjtBQUNyQixvQkFBZ0I7QUFFaEIsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLFNBQVMsT0FBTyxRQUFRO0FBR2hDLFNBQUssUUFBUyxhQUFhLGFBQWE7QUFDeEMsU0FBSyxTQUFTLGFBQWEsYUFBYTtBQUN4QyxpQkFBYyxhQUFhO0FBRTNCLGlCQUFhO0FBQ2Isa0JBQWM7QUFFZCxRQUFJLEtBQUssS0FBSztBQUVkLGNBQVUsR0FBRyxPQUFTLFVBQVUsYUFBYSxTQUFTLEdBQUc7QUFDekQsY0FBVSxHQUFHLE1BQVMsVUFBVSxhQUFhLFNBQVMsR0FBRztBQUN6RCxjQUFVLEdBQUcsUUFBUyxVQUFVLGFBQWEsU0FBUyxHQUFHO0FBQ3pELGNBQVUsR0FBRyxTQUFTLFVBQVUsYUFBYSxTQUFTLEdBQUc7QUFBQSxFQUcxRDtBQUdBLFFBQU0sY0FBYztBQUVwQixXQUFTLGVBQWU7QUFDdkIsUUFBSSxZQUFZO0FBRWhCLFFBQUksV0FBVztBQUVmLFdBQU8sQ0FBQyxXQUFXO0FBQ2xCO0FBRUEsVUFBSSxnQkFBZ0IsU0FBUyxRQUFRO0FBQ3JDLFVBQUksbUJBQW1CLFlBQVksUUFBUTtBQUUzQyxrQkFBWSxZQUFZLGVBQWdCLGlCQUFpQjtBQUV6RCxVQUFJLENBQUMsV0FBVztBQUNmLGlCQUFTLEtBQUssT0FBTyxLQUFLLE1BQU07QUFDaEMsd0JBQWdCO0FBQUEsTUFDakI7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUVBLFdBQVMsUUFBUSxFQUFDLE9BQU8sT0FBTSxHQUFHO0FBQ2pDLGFBQVMsT0FBTyxNQUFNO0FBQUEsRUFDdkI7QUFFQSxPQUFLLFVBQVU7QUFHZixXQUFTLGVBQWU7QUFFdkIsUUFBSSxhQUFhO0FBQ2pCLFFBQUksYUFBYTtBQUNqQixRQUFJLGFBQWE7QUFDakIsUUFBSSxhQUFhO0FBRWpCLFNBQUssUUFBUSxDQUFDLE1BQU1YLE9BQU07QUFDekIsVUFBSSxLQUFLLFFBQVEsS0FBSyxPQUFPO0FBQzVCLFlBQUksRUFBQyxNQUFNLE1BQUssSUFBSTtBQUNwQixZQUFJLE9BQU8sT0FBTztBQUNsQixZQUFJLFlBQVksS0FBSyxTQUFTLE9BQU8sS0FBSyxZQUFZO0FBRXRELFlBQUksV0FBVyxRQUFRO0FBRXZCLFlBQUksV0FBVyxHQUFHO0FBQ2pCLGNBQUksTUFBTTtBQUNULDBCQUFjO0FBRWQsZ0JBQUksUUFBUSxHQUFHO0FBQ2QsNEJBQWM7QUFDZCwyQkFBYTtBQUFBLFlBQ2Q7QUFFQywyQkFBYTtBQUFBLFVBQ2YsT0FDSztBQUNKLDBCQUFjO0FBRWQsZ0JBQUksUUFBUSxHQUFHO0FBQ2QsNEJBQWM7QUFDZCwyQkFBYTtBQUFBLFlBQ2Q7QUFFQywyQkFBYTtBQUFBLFVBQ2Y7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0QsQ0FBQztBQUVELGtCQUFjLENBQUMsSUFBSTtBQUNuQixrQkFBYyxDQUFDLElBQUk7QUFDbkIsa0JBQWMsQ0FBQyxJQUFJO0FBQ25CLGtCQUFjLENBQUMsSUFBSTtBQUduQixrQkFBYyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7QUFDdEMsa0JBQWMsU0FBUyxDQUFDO0FBR3hCLGtCQUFjLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztBQUN0QyxrQkFBYyxTQUFTLENBQUM7QUFBQSxFQUN6QjtBQUVBLFdBQVMsZ0JBQWdCO0FBRXhCLFFBQUksT0FBTyxhQUFhO0FBQ3hCLFFBQUksT0FBTyxhQUFhO0FBRXhCLFFBQUksT0FBTztBQUNYLFFBQUksT0FBTztBQUVYLGFBQVMsV0FBVyxNQUFNLE1BQU07QUFDL0IsY0FBUSxNQUFNO0FBQUEsUUFDYixLQUFLO0FBQUcsa0JBQVE7QUFBTSxpQkFBTyxPQUFPO0FBQUEsUUFDcEMsS0FBSztBQUFHLGtCQUFRO0FBQU0saUJBQU8sT0FBTztBQUFBLFFBQ3BDLEtBQUs7QUFBRyxrQkFBUTtBQUFNLGlCQUFPLE9BQU87QUFBQSxRQUNwQyxLQUFLO0FBQUcsa0JBQVE7QUFBTSxpQkFBTyxPQUFPO0FBQUEsTUFDckM7QUFBQSxJQUNEO0FBRUEsU0FBSyxRQUFRLENBQUMsTUFBTUEsT0FBTTtBQUN6QixVQUFJLEtBQUssUUFBUSxLQUFLLE9BQU87QUFDNUIsWUFBSSxPQUFPLEtBQUs7QUFFaEIsYUFBSyxPQUFPLFdBQVcsTUFBTSxLQUFLLEtBQUs7QUFFdkMsWUFBSSxLQUFLLFNBQVM7QUFDakIsZUFBSyxRQUFRLFdBQVcsTUFBTSxLQUFLLFNBQVM7QUFBQSxNQUM5QztBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFFQSxNQUFJLE9BQU8sV0FBVyxNQUFNO0FBQzNCLFFBQUksTUFBTSxPQUFPO0FBRWpCLFFBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxLQUFJLFNBQUksU0FBSixZQUFZLENBQUMsQ0FBQztBQUM1QyxTQUFLLElBQUksTUFBTTtBQUNmLFFBQUksT0FBTyxJQUFJLE9BQU8sU0FBUyxJQUFJLElBQUk7QUFDdkMsUUFBSSxRQUFPLFNBQUksU0FBSixnQkFBSSxPQUFTO0FBR3hCLFdBQU8sVUFBVSxDQUFDeUMsT0FBTSxXQUFXLFdBQVcsY0FBYztBQXQ3RzlELFVBQUFDO0FBdTdHRyxVQUFJLGFBQWE7QUFDaEIsZUFBTztBQUVSLFVBQUksT0FBTztBQUVYLFVBQUksU0FBUUEsTUFBQSxLQUFLRCxPQUFNLFdBQVcsV0FBVyxTQUFTLE1BQTFDLE9BQUFDLE1BQStDO0FBQzNELFVBQUksV0FBVyxTQUFTLEtBQUssUUFBUTtBQUNyQyxVQUFJLE9BQU8sT0FBTyxPQUFPLElBQUksYUFBYTtBQUMxQyxVQUFJLFlBQVksT0FBTztBQUV2QixVQUFJLFVBQVUsS0FBSyxDQUFDO0FBQ3BCLFVBQUksVUFBVSxLQUFLLFNBQVM7QUFFNUIsVUFBSSxLQUFLLElBQUksUUFBUSxTQUFTLENBQUMsR0FBRztBQUNqQyxlQUFPO0FBRVAsWUFBSSxhQUFhLE1BQ2hCLGFBQWEsTUFDYjdCO0FBRUQsWUFBSSxRQUFRLEtBQUssUUFBUSxJQUFJO0FBQzVCLFVBQUFBLEtBQUk7QUFDSixpQkFBTyxjQUFjLFFBQVFBLE9BQU0sR0FBRztBQUNyQyxnQkFBSSxDQUFDLEtBQUssSUFBSSxRQUFRQSxFQUFDLENBQUM7QUFDdkIsMkJBQWFBO0FBQUEsVUFDZjtBQUFBLFFBQ0Q7QUFFQSxZQUFJLFFBQVEsS0FBSyxRQUFRLEdBQUc7QUFDM0IsVUFBQUEsS0FBSTtBQUNKLGlCQUFPLGNBQWMsUUFBUUEsT0FBTSxRQUFRLFFBQVE7QUFDbEQsZ0JBQUksQ0FBQyxLQUFLLElBQUksUUFBUUEsRUFBQyxDQUFDO0FBQ3ZCLDJCQUFhQTtBQUFBLFVBQ2Y7QUFBQSxRQUNEO0FBRUEsWUFBSSxjQUFjLFFBQVEsY0FBYyxNQUFNO0FBQzdDLGNBQUksVUFBVTtBQUNiLGdCQUFJLFNBQVMsY0FBYyxPQUFPLFlBQVksVUFBVSxRQUFRLFVBQVUsR0FBRyxRQUFRLE1BQU0sQ0FBQztBQUM1RixnQkFBSSxTQUFTLGNBQWMsT0FBUSxXQUFXLFVBQVUsUUFBUSxVQUFVLEdBQUcsUUFBUSxNQUFNLENBQUM7QUFFNUYsZ0JBQUksV0FBVyxZQUFZO0FBQzNCLGdCQUFJLFdBQVcsU0FBUztBQUV4QixnQkFBSSxZQUFZLFVBQVU7QUFDekIsa0JBQUksWUFBWTtBQUNmLHVCQUFPO0FBQUEsWUFDVCxPQUFPO0FBQ04sa0JBQUksWUFBWTtBQUNmLHVCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0QsT0FDSztBQUNKLG1CQUNDLGNBQWMsT0FBTyxhQUNyQixjQUFjLE9BQU8sYUFDckIsWUFBWSxjQUFjLGFBQWEsWUFBWSxhQUFhO0FBQUEsVUFDbEU7QUFBQSxRQUNEO0FBQUEsTUFDRCxXQUNTLFVBQVU7QUFDbEIsWUFBSSxPQUFPLElBQUksWUFBWSxVQUFVLFFBQVEsU0FBUyxHQUFHLFFBQVEsTUFBTSxDQUFDLENBQUM7QUFFekUsWUFBSSxPQUFPO0FBQ1YsaUJBQU87QUFBQSxNQUNUO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBRUEsUUFBTSxpQkFBaUIsQ0FBQVEsT0FBSztBQUFFLFdBQU8sUUFBUUE7QUFBQSxFQUFHO0FBRWhELFNBQU8sT0FBTztBQUVkLFNBQU8sUUFBUTtBQUVmLE1BQUlXLFVBQVMsT0FBTztBQUVwQixFQUFBQSxRQUFPLE9BQVMsU0FBU0EsUUFBTyxJQUFJO0FBQ3BDLEVBQUFBLFFBQU8sT0FBUyxTQUFTQSxRQUFPLElBQUk7QUFDcEMsRUFBQUEsUUFBTyxTQUFTLFNBQVNBLFFBQU8sTUFBTTtBQUN0QyxFQUFBQSxRQUFPLFFBQVMsU0FBU0EsUUFBTyxLQUFLO0FBQ3JDLEVBQUFBLFFBQU8sT0FBUyxTQUFTQSxRQUFPLElBQUk7QUFFcEMsUUFBTSxRQUFRLEtBQUssUUFBUSxPQUFPLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBQyxPQUFPLElBQUcsR0FBRyxPQUFPLEtBQUs7QUFFOUUsUUFBTSxjQUFjLE1BQU0sUUFBUTtBQUNsQyxRQUFNLGNBQWMsZUFBZUEsUUFBTztBQUcxQyxNQUFJLFlBQVksQ0FBQztBQUVqQixNQUFJLGVBQWUsQ0FBQztBQUNwQixNQUFJLGVBQWUsQ0FBQztBQUVwQixXQUFTLGFBQWFmLElBQUcsSUFBSTtBQUM1QixRQUFJLEtBQUtlLFFBQU8sS0FBSyxNQUFNLEVBQUU7QUFFN0IsUUFBSSxjQUFjLGFBQWE7QUFDOUIsZUFBUyxJQUFJLFNBQVM7QUFDdEIsZUFBUyxJQUFJZixHQUFFLEtBQUs7QUFDcEIsY0FBUSxJQUFJLEtBQUssS0FBSyxZQUFZLFVBQVU7QUFDNUMsV0FBSyxhQUFhLElBQUksVUFBVSxFQUFFLENBQUM7QUFFbkMsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBRUEsV0FBUyxXQUFXQSxJQUFHakIsSUFBRztBQUN6QixRQUFJLFFBQVEsS0FBS0EsS0FBSSxHQUFHO0FBQ3ZCLFVBQUksU0FBUyxRQUFRLEtBQUssT0FBT2lCLEdBQUUsS0FBSyxFQUFFO0FBRTFDLFVBQUksS0FBS0EsR0FBRTtBQUNYLE1BQUFBLEdBQUUsUUFBUSxTQUFVLE1BQU0sRUFBRSxJQUFJLGNBQWMsU0FBUyxnQkFBZ0IsSUFBSSxRQUFRLENBQUMsSUFBSSxNQUFNLGlCQUFrQixNQUFNO0FBQ3RILE1BQUFBLEdBQUUsUUFBUUEsR0FBRSxVQUFVLFNBQVMsa0JBQWtCO0FBQUEsSUFDbEQ7QUFFQSxRQUFJLGVBQWVqQixLQUFJLEdBQUc7QUFDekIsTUFBQWlCLEdBQUUsUUFBU0EsR0FBRSxTQUFTLE9BQU8sSUFBSUEsR0FBRTtBQUNuQyxNQUFBQSxHQUFFLFFBQVNBLEdBQUUsU0FBUyxjQUFjO0FBQ3BDLE1BQUFBLEdBQUUsU0FBUyxTQUFTQSxHQUFFLFVBQVUsWUFBWTtBQUM1QyxNQUFBQSxHQUFFLFVBQVUsQ0FBQyxPQUFPQSxHQUFFLFNBQVMsT0FBTztBQUN0QyxNQUFBQSxHQUFFLFVBQVUsV0FBV0EsR0FBRSxPQUFPO0FBRWhDLE1BQUFBLEdBQUUsU0FBUyxTQUFTQSxHQUFFLFVBQVUsSUFBSTtBQUNwQyxNQUFBQSxHQUFFLE9BQVMsU0FBU0EsR0FBRSxRQUFRLElBQUk7QUFDbEMsTUFBQUEsR0FBRSxVQUFVQSxHQUFFLFFBQVFBLEdBQUUsU0FBU0EsR0FBRSxTQUFTO0FBRTVDLFVBQUksU0FBUyxNQUFNLElBQUksR0FBR0EsR0FBRSxLQUFLLEdBQUcsQ0FBQztBQUNyQyxVQUFJZSxVQUFTZixHQUFFLFNBQVMsT0FBTyxDQUFDLEdBQUc7QUFBQSxRQUNsQyxNQUFNO0FBQUEsUUFDTixPQUFPLElBQUksR0FBRyxTQUFTLEdBQUU7QUFBQSxRQUN6QixRQUFRQSxHQUFFO0FBQUEsUUFDVixPQUFPLFNBQVM7QUFBQSxRQUNoQixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsTUFDUixHQUFHQSxHQUFFLE1BQU07QUFDWCxNQUFBZSxRQUFPLE9BQVMsU0FBU0EsUUFBTyxJQUFJO0FBQ3BDLE1BQUFBLFFBQU8sU0FBUyxTQUFTQSxRQUFPLE1BQU07QUFDdEMsTUFBQUEsUUFBTyxPQUFTLFNBQVNBLFFBQU8sSUFBSTtBQUNwQyxNQUFBQSxRQUFPLFNBQVMsU0FBU0EsUUFBTyxNQUFNO0FBQ3RDLE1BQUFBLFFBQU8sUUFBUyxTQUFTQSxRQUFPLEtBQUs7QUFDckMsTUFBQUEsUUFBTyxVQUFVZixHQUFFO0FBQUEsSUFDcEI7QUFFQSxRQUFJLFlBQVk7QUFDZixVQUFJLFdBQVcsY0FBY0EsSUFBR2pCLEVBQUM7QUFDakMsaUJBQVcsT0FBT0EsSUFBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLGtCQUFZLE9BQU9BLElBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUNwQyxhQUFPLE9BQU8sS0FBSyxJQUFJO0FBQUEsSUFDeEI7QUFFQSxRQUFJLFlBQVk7QUFDZixpQkFBVyxPQUFPQSxJQUFHLEdBQUcsSUFBSTtBQUU1QixVQUFJLEtBQUs7QUFFVCxVQUFJLGFBQWE7QUFDaEIsWUFBSUEsTUFBSztBQUNSLGVBQUssYUFBYWlCLElBQUdqQixFQUFDO0FBQUEsTUFDeEIsV0FDU0EsS0FBSTtBQUNaLGFBQUssYUFBYWlCLElBQUdqQixFQUFDO0FBRXZCLGdCQUFVLE9BQU9BLElBQUcsR0FBRyxFQUFFO0FBQ3pCLG1CQUFhLE9BQU9BLElBQUcsR0FBRyxDQUFDO0FBQzNCLG1CQUFhLE9BQU9BLElBQUcsR0FBRyxDQUFDO0FBQUEsSUFDNUI7QUFFQSxTQUFLLGFBQWFBLEVBQUM7QUFBQSxFQUNwQjtBQUVBLFdBQVMsVUFBVTJDLE9BQU0sSUFBSTtBQUM1QixTQUFLLE1BQU0sT0FBTyxPQUFPLFNBQVM7QUFFbEMsSUFBQUEsUUFBTyxRQUFRLElBQUksV0FBV0EsT0FBTSxJQUFJLGFBQWEsV0FBVyxJQUFJLFdBQVdBLE9BQU0sSUFBSSxDQUFDLEdBQUcsWUFBWTtBQUV6RyxXQUFPLE9BQU8sSUFBSSxHQUFHQSxLQUFJO0FBQ3pCLGVBQVcsT0FBTyxFQUFFLEdBQUcsRUFBRTtBQUFBLEVBQzFCO0FBRUEsT0FBSyxZQUFZO0FBRWpCLFdBQVMsVUFBVTNDLElBQUc7QUFDckIsV0FBTyxPQUFPQSxJQUFHLENBQUM7QUFFbEIsUUFBSSxZQUFZO0FBQ2YsYUFBTyxPQUFPLE9BQU9BLElBQUcsQ0FBQztBQUV6QixrQkFBWSxPQUFPQSxJQUFHLENBQUM7QUFDdkIsVUFBSSxLQUFLLFdBQVcsT0FBT0EsSUFBRyxDQUFDLEVBQUUsQ0FBQztBQUNsQyxlQUFTLE1BQU0sR0FBRyxVQUFVO0FBQzVCLFNBQUcsT0FBTztBQUFBLElBQ1g7QUFFQSxRQUFJLFlBQVk7QUFDZixpQkFBVyxPQUFPQSxJQUFHLENBQUM7QUFDdEIsZ0JBQVUsT0FBT0EsSUFBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU87QUFDakMsbUJBQWEsT0FBT0EsSUFBRyxDQUFDO0FBQ3hCLG1CQUFhLE9BQU9BLElBQUcsQ0FBQztBQUFBLElBQ3pCO0FBSUEsU0FBSyxhQUFhQSxFQUFDO0FBQUEsRUFDcEI7QUFFQSxPQUFLLFlBQVk7QUFFakIsUUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBRWpELFdBQVMsU0FBUyxNQUFNQSxJQUFHO0FBQzFCLFNBQUssUUFBUSxLQUFLO0FBRWxCLFFBQUksS0FBSyxNQUFNO0FBQ2QsVUFBSSxPQUFPLEtBQUssT0FBTztBQUV2QixVQUFJLEtBQUssT0FBTyxLQUFLLEtBQUs7QUFHMUIsVUFBSSxNQUFNLE1BQU07QUFDZixhQUFLLFFBQVEsT0FBTyxPQUFPLENBQUMsRUFBRSxRQUFRO0FBQ3RDLGFBQUssT0FBTyxLQUFLLEtBQUs7QUFBQSxNQUN2QjtBQUdBLFVBQUksU0FBUyxHQUFHO0FBRWhCLFdBQUssT0FBUyxTQUFTLEtBQUssSUFBSTtBQUNoQyxXQUFLLFFBQVMsU0FBUyxLQUFLLEtBQUs7QUFDakMsV0FBSyxTQUFTLFNBQVMsS0FBSyxNQUFNO0FBRWxDLFVBQUksTUFBTSxLQUFLLEtBQUssR0FBRztBQUN0QixhQUFLLE1BQU0sUUFBUSxVQUFRO0FBQzFCLFdBQUMsU0FBUyxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksTUFBTSxTQUFTLElBQUksQ0FBQztBQUFBLFFBQ3pELENBQUM7QUFBQSxNQUNGO0FBRUEsV0FBSyxRQUFTLFNBQVMsS0FBSyxVQUFxQixHQUFHLFNBQVMsSUFBSSxhQUFjLFNBQVUsTUFBTSxJQUFJLGNBQWMsYUFBYyxTQUFVO0FBQ3pJLFdBQUssU0FBUyxTQUFTLEtBQUssV0FBVyxVQUFVLEdBQUcsU0FBUyxJQUFJLGtCQUFrQixHQUFHLFNBQVMsSUFBSSxnQkFBZ0IsR0FBRyxTQUFTLElBQUksa0JBQWtCLGNBQWM7QUFFbkssV0FBSyxTQUFnQixTQUFTLEtBQUssTUFBTTtBQUN6QyxXQUFLLEtBQUssU0FBVyxTQUFTLEtBQUssS0FBSyxNQUFNO0FBQzlDLFdBQUssTUFBTSxTQUFVLFNBQVMsS0FBSyxNQUFNLE1BQU07QUFDL0MsV0FBSyxPQUFPLFNBQVMsU0FBUyxLQUFLLE9BQU8sTUFBTTtBQUVoRCxVQUFJLEtBQUssS0FBSztBQUVkLFdBQUs7QUFBQSxNQUVKLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtBQUFBO0FBQUEsUUFFeEM7QUFBQTtBQUFBLFVBRUMsTUFBTSxFQUFFLElBQ1AsYUFBYSxTQUFTLGVBQWUsSUFBSSxRQUFRLENBQUM7QUFBQTtBQUFBLFlBRW5ELE1BQU0sRUFBRSxJQUNQLFlBQVksU0FBUyxFQUFFLElBQ3hCLE1BQU07QUFBQTtBQUFBLFlBQ0gsTUFBTTtBQUFBO0FBR1gsV0FBSyxTQUFTLFNBQVMsS0FBSyxXQUFxQixHQUFHLFNBQVMsS0FBSyxHQUFHLE9BQU8sS0FBSyxvQkFBb0IsR0FBRyxTQUFTLEtBQUssR0FBRyxPQUFPLElBQUksbUJBQW1CLFFBQVE7QUFFL0osV0FBSyxPQUFZLFlBQVksS0FBSyxJQUFJO0FBQ3RDLFdBQUssWUFBWSxZQUFZLEtBQUssU0FBUztBQUUzQyxXQUFLLFFBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTUEsSUFBRyxDQUFDO0FBRXpDLFdBQUssU0FDTCxLQUFLLFVBQ0wsS0FBSyxTQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUssVUFDTCxLQUFLLFVBQVU7QUFFZixVQUFJLEtBQUssUUFBUSxHQUFHO0FBQ25CLHNCQUFjQSxFQUFDLElBQUk7QUFDbkIsYUFBSyxNQUFNLFNBQVMsTUFBTSxJQUFJO0FBQUEsTUFDL0I7QUFBQSxJQUlEO0FBQUEsRUFDRDtBQUVBLFdBQVMsWUFBWXlDLE9BQU0sTUFBTUcsZ0JBQWUsVUFBVTtBQUN6RCxRQUFJLENBQUMsWUFBWSxZQUFZLFlBQVksVUFBVSxJQUFJQTtBQUV2RCxRQUFJLE1BQU0sT0FBTztBQUNqQixRQUFJLE9BQU87QUFFWCxRQUFJLE9BQU8sTUFBTSxjQUFjO0FBQzlCLGFBQVEsUUFBUSxLQUFLLENBQUMsY0FBYyxRQUFRLEtBQUssQ0FBQyxhQUFhLE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBSTtBQUM1RixRQUFJLE9BQU8sTUFBTSxjQUFjO0FBQzlCLGFBQVEsUUFBUSxLQUFLLENBQUMsY0FBYyxRQUFRLEtBQUssQ0FBQyxhQUFhLE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBSTtBQUU1RixXQUFPO0FBQUEsRUFDUjtBQUVBLFFBQU0sVUFBVSxLQUFLLFdBQVcsS0FBSyxXQUFXLENBQUMsYUFBWSxhQUFZLGFBQVksV0FBVyxHQUFHLElBQUksQ0FBQXBDLE9BQUssU0FBUyxPQUFPQSxJQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQzVJLFFBQU0sV0FBVyxLQUFLLFdBQVcsUUFBUSxJQUFJLENBQUNBLElBQUdSLE9BQU1RLEdBQUUsTUFBTVIsSUFBRyxlQUFlLENBQUMsQ0FBQztBQUVuRixNQUFJO0FBR0osTUFBSSxLQUFLO0FBQ1QsTUFBSSxLQUFLO0FBQ1QsUUFBTSxPQUFPLFFBQVEsSUFBSSxPQUFPLENBQUMsRUFBRSxPQUFPO0FBRTFDLE1BQUksUUFBUTtBQUVaLE1BQUksZ0JBQWdCO0FBRXBCLFdBQVMsUUFBUSxPQUFPLGNBQWM7QUFDckMsV0FBTyxTQUFTLE9BQU8sQ0FBQyxJQUFJO0FBRTVCLFNBQUssT0FBTyxLQUFLLFFBQVE7QUFFekIsUUFBSSxRQUFRLEdBQUc7QUFDZCxnQkFBVTtBQUNWLGVBQVNBLEtBQUksR0FBR0EsS0FBSSxPQUFPLFFBQVFBO0FBQ2xDLG1CQUFXLEtBQUtBLEVBQUMsRUFBRSxDQUFDLEVBQUU7QUFBQSxJQUN4QixPQUNLO0FBQ0osVUFBSSxLQUFLLFVBQVU7QUFDbEIsYUFBSyxPQUFPLEtBQUssUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXBDLGNBQVEsS0FBSyxDQUFDO0FBQ2QsZ0JBQVUsTUFBTTtBQUVoQixVQUFJLFlBQVk7QUFFaEIsVUFBSSxlQUFlLEdBQUc7QUFDckIsb0JBQVksS0FBSyxNQUFNO0FBRXZCLFlBQUksU0FBUyxVQUFVLENBQUMsSUFBSSxNQUFNLE9BQU87QUFDekMsaUJBQVNBLEtBQUksR0FBR0EsS0FBSSxTQUFTQTtBQUM1QixpQkFBT0EsRUFBQyxJQUFJQTtBQUFBLE1BQ2Q7QUFFQSxXQUFLLFFBQVEsT0FBTztBQUFBLElBQ3JCO0FBRUEsaUJBQWEsSUFBSTtBQUVqQixTQUFLLFNBQVM7QUFJZCxRQUFJLGVBQWUsR0FBRztBQUNyQiwyQkFBcUI7QUFBQSxJQWF0QjtBQUVBLFFBQUksaUJBQWlCLE9BQU87QUFDM0IsVUFBSSxNQUFNO0FBRVYsVUFBSSxJQUFJLEtBQUssTUFBTSxhQUFhO0FBQy9CLG1CQUFXO0FBQUE7QUFFWCxrQkFBVSxXQUFXLElBQUksS0FBSyxJQUFJLEdBQUc7QUFFdEMsd0JBQWtCLG1CQUFtQixPQUFPLFFBQVE7QUFDcEQsd0JBQWtCO0FBQ2xCLGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUVBLE9BQUssVUFBVTtBQUVmLFdBQVMsYUFBYTtBQUNyQixvQkFBZ0I7QUFFaEIsUUFBSSxNQUFNO0FBRVYsUUFBSSxRQUFRLEdBQUc7QUFDZCxVQUFJLFVBQVUsR0FBRztBQUNoQixhQUFLLEtBQUssQ0FBQyxJQUFJO0FBQ2YsYUFBSyxLQUFLLENBQUMsSUFBSSxVQUFVO0FBRXpCLGVBQU8sS0FBSyxDQUFDLEVBQUUsRUFBRTtBQUNqQixlQUFPLEtBQUssQ0FBQyxFQUFFLEVBQUU7QUFFakIsWUFBSSxlQUFlLEdBQUc7QUFDckIsaUJBQU87QUFDUCxpQkFBTztBQUFBLFFBQ1IsV0FDUyxRQUFRLE1BQU07QUFDdEIsY0FBSSxlQUFlO0FBQ2xCLGFBQUMsTUFBTSxJQUFJLElBQUksU0FBUyxNQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUs7QUFBQSxtQkFDN0MsZUFBZTtBQUN2QixhQUFDLE1BQU0sSUFBSSxJQUFJLFdBQVcsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLO0FBQUEsbUJBQy9DLE9BQU87QUFDZixtQkFBTyxPQUFPLE1BQU0sUUFBUSxFQUFFO0FBQUE7QUFFOUIsYUFBQyxNQUFNLElBQUksSUFBSSxTQUFTLE1BQU0sTUFBTSxVQUFVLElBQUk7QUFBQSxRQUNwRDtBQUFBLE1BQ0QsT0FDSztBQUNKLGFBQUssS0FBSyxDQUFDLElBQUksT0FBTztBQUN0QixhQUFLLEtBQUssQ0FBQyxJQUFJLE9BQU87QUFBQSxNQUN2QjtBQUFBLElBQ0Q7QUFFQSxjQUFVLFdBQVcsTUFBTSxJQUFJO0FBQUEsRUFDaEM7QUFFQSxNQUFJLFdBQVcsU0FBUyxVQUFVLFNBQVMsU0FBUyxRQUFRLFNBQVMsVUFBVTtBQUMvRSxNQUFJO0FBRUosV0FBUyxZQUFZLFFBQVEsT0FBTyxNQUFNLEtBQUssTUFBTTZDLE9BQU07QUFDMUQsdUNBQVc7QUFDWCxpQ0FBVztBQUNYLDhCQUFXO0FBQ1gsaUNBQVc7QUFDWCxJQUFBQSxTQUFBLE9BQUFBLGdCQUFXO0FBRVgsUUFBSSxVQUFVO0FBQ2IsVUFBSSxjQUFjLFlBQVk7QUFDL0IsUUFBSSxRQUFRO0FBQ1gsVUFBSSxZQUFZLFVBQVU7QUFDM0IsUUFBSSxTQUFTO0FBQ1osVUFBSSxZQUFZLFdBQVc7QUFDNUIsUUFBSUEsU0FBUTtBQUNYLFVBQUksV0FBVyxVQUFVQTtBQUMxQixRQUFJLE9BQU87QUFDVixVQUFJLFVBQVUsU0FBUztBQUN4QixRQUFJLFFBQVE7QUFDWCxVQUFJLFlBQVksVUFBVSxJQUFJO0FBQUEsRUFDaEM7QUFFQSxXQUFTLGFBQWFULE9BQU0sTUFBTSxPQUFPLFVBQVU7QUFDbEQsUUFBSSxRQUFRO0FBQ1gsVUFBSSxZQUFZLFVBQVU7QUFDM0IsUUFBSUEsU0FBUTtBQUNYLFVBQUksT0FBTyxVQUFVQTtBQUN0QixRQUFJLFNBQVM7QUFDWixVQUFJLFlBQVksV0FBVztBQUM1QixRQUFJLFlBQVk7QUFDZixVQUFJLGVBQWUsY0FBYztBQUFBLEVBQ25DO0FBRUEsV0FBUyxTQUFTLEtBQUssS0FBS1UsUUFBT0MsT0FBTSxTQUFTLEdBQUc7QUFDcEQsUUFBSUEsTUFBSyxTQUFTLEtBQUssSUFBSSxLQUFLLE1BQU0sYUFBYSxNQUFNLE9BQU8sUUFBUSxJQUFJLE9BQU8sT0FBTztBQUN6RixVQUFJLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDdEIsVUFBSSxNQUFNLE9BQU8sSUFBSUEsTUFBSyxTQUFTLENBQUM7QUFHcEMsVUFBSSxTQUFTRCxPQUFNLE9BQU8sT0FBTyxVQUFVQyxPQUFNLEtBQUssS0FBSyxRQUFRLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQ0QsT0FBTSxLQUFLQSxPQUFNLEdBQUc7QUFHMUcsVUFBSSxNQUFNLElBQUksSUFBSSxLQUFLQSxPQUFNLE1BQU0sT0FBTyxDQUFDLENBQUM7QUFDNUMsVUFBSSxNQUFNLElBQUksSUFBSSxLQUFLQSxPQUFNLE1BQU0sT0FBTyxDQUFDLENBQUM7QUFBQSxJQUM3QztBQUFBLEVBQ0Q7QUFFQSxRQUFNLFlBQVksRUFBQyxLQUFLLE1BQU0sS0FBSyxLQUFJO0FBRXZDLFdBQVMsWUFBWTtBQUlwQixhQUFTbkMsTUFBSyxRQUFRO0FBQ3JCLFVBQUksS0FBSyxPQUFPQSxFQUFDO0FBRWpCLFVBQUksV0FBV0EsRUFBQyxLQUFLO0FBQUEsT0FHbkIsR0FBRyxPQUFPO0FBQUEsTUFFVixXQUFXLFNBQVMsS0FBSyxRQUFRLEdBQUcsS0FBSyxNQUFNLGFBQWEsSUFFNUQ7QUFDRCxtQkFBV0EsRUFBQyxJQUFJO0FBQUEsTUFDakI7QUFBQSxJQUNEO0FBR0EsYUFBU0EsTUFBSyxRQUFRO0FBQ3JCLFVBQUksS0FBSyxPQUFPQSxFQUFDO0FBRWpCLFVBQUksV0FBV0EsRUFBQyxLQUFLLFFBQVEsR0FBRyxRQUFRLFFBQVEsV0FBVyxHQUFHLElBQUksS0FBSztBQUN0RSxtQkFBV0EsRUFBQyxJQUFJO0FBQUEsSUFDbEI7QUFHQSxRQUFJLFdBQVcsU0FBUyxLQUFLO0FBQzVCLG1CQUFhLElBQUk7QUFFbEIsUUFBSSxZQUFZLENBQUM7QUFFakIsYUFBU0EsTUFBSyxZQUFZO0FBQ3pCLFVBQUksTUFBTSxXQUFXQSxFQUFDO0FBRXRCLFVBQUksT0FBTyxNQUFNO0FBQ2hCLFlBQUksTUFBTSxVQUFVQSxFQUFDLElBQUksS0FBSyxPQUFPQSxFQUFDLEdBQUcsU0FBUztBQUVsRCxZQUFJLElBQUksT0FBTztBQUNkLGlCQUFPLEtBQUssR0FBRztBQUFBLGlCQUNQQSxNQUFLLGFBQWEsUUFBUSxHQUFHO0FBQ3JDLGNBQUksV0FBVyxLQUFLLElBQUksUUFBUSxNQUFNO0FBQ3JDLGdCQUFJLFNBQVMsSUFBSSxNQUFNLE1BQU0sTUFBTSxNQUFNQSxFQUFDO0FBQzFDLGdCQUFJLE1BQU0sT0FBTyxDQUFDO0FBQ2xCLGdCQUFJLE1BQU0sT0FBTyxDQUFDO0FBQUEsVUFDbkIsT0FDSztBQUNKLGdCQUFJLE1BQU07QUFDVixnQkFBSSxNQUFNLENBQUM7QUFBQSxVQUNaO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBRUEsUUFBSSxVQUFVLEdBQUc7QUFFaEIsYUFBTyxRQUFRLENBQUNNLElBQUdqQixPQUFNO0FBQ3hCLFlBQUksUUFBUSxHQUFHO0FBQ2QsY0FBSVcsS0FBSU0sR0FBRTtBQUNWLGNBQUksTUFBTSxXQUFXTixFQUFDO0FBRXRCLGNBQUksT0FBTztBQUNWO0FBRUQsY0FBSSxNQUFNLFVBQVVBLEVBQUM7QUFFckIsY0FBSVgsTUFBSyxHQUFHO0FBQ1gsZ0JBQUksU0FBUyxJQUFJLE1BQU0sTUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLVyxFQUFDO0FBRWhELGdCQUFJLE1BQU0sT0FBTyxDQUFDO0FBQ2xCLGdCQUFJLE1BQU0sT0FBTyxDQUFDO0FBRWxCLGlCQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLGlCQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBR2hDLGdCQUFJLEtBQUssS0FBSyxHQUFHO0FBRWhCLGtCQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJO0FBQ3JCO0FBQ0Qsa0JBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUk7QUFDckI7QUFBQSxZQUNGO0FBRUEsWUFBQU0sR0FBRSxNQUFNLE1BQU0sRUFBRTtBQUNoQixZQUFBQSxHQUFFLE1BQU0sTUFBTSxFQUFFO0FBQUEsVUFDakIsV0FDU0EsR0FBRSxRQUFRQSxHQUFFO0FBQ3BCLHFCQUFTLEtBQUssS0FBS0EsSUFBRyxLQUFLakIsRUFBQyxHQUFHaUIsR0FBRSxNQUFNO0FBRXhDLFVBQUFBLEdBQUUsS0FBSyxDQUFDLElBQUk7QUFDWixVQUFBQSxHQUFFLEtBQUssQ0FBQyxJQUFJO0FBQUEsUUFDYixPQUNLO0FBQ0osY0FBSWpCLEtBQUksR0FBRztBQUNWLGdCQUFJaUIsR0FBRSxRQUFRQSxHQUFFLE1BQU07QUFFckIsa0JBQUksQ0FBRSxRQUFRLE1BQU8sSUFBSUEsR0FBRTtBQUMzQixrQkFBSStCLGFBQVksT0FBTztBQUN2QixrQkFBSSxZQUFZLE9BQU87QUFDdkIsa0JBQUksQ0FBRSxPQUFPLEtBQU0sSUFBSSxLQUFLaEQsRUFBQztBQUU3QixrQkFBSSxPQUFPLFVBQVVnRCxVQUFTO0FBQzlCLGtCQUFJLE9BQU8sVUFBVSxTQUFTO0FBRzlCLHNCQUFRLFFBQVEsU0FBUyxNQUFNLFdBQVdBLFVBQVMsR0FBRyxRQUFRLE9BQU8sT0FBTyxNQUFNO0FBQ2xGLHNCQUFRLFFBQVEsU0FBUyxNQUFNLFdBQVcsU0FBUyxHQUFHLFFBQVEsT0FBTyxPQUFPLE1BQU07QUFHbEYsY0FBQS9CLEdBQUUsTUFBTSxPQUFPO0FBQ2YsY0FBQUEsR0FBRSxNQUFNLE9BQU87QUFBQSxZQUNoQjtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRCxDQUFDO0FBR0QsZUFBU04sTUFBSyxXQUFXO0FBQ3hCLFlBQUksTUFBTSxVQUFVQSxFQUFDO0FBQ3JCLFlBQUksTUFBTSxXQUFXQSxFQUFDO0FBRXRCLFlBQUksSUFBSSxRQUFRLFNBQVMsT0FBTyxRQUFRLElBQUksT0FBTyxPQUFPO0FBQ3pELGNBQUksU0FBUyxJQUFJO0FBQUEsWUFDaEI7QUFBQSxZQUNBLElBQUksT0FBUSxNQUFNLE9BQU8sSUFBSTtBQUFBLFlBQzdCLElBQUksT0FBTyxDQUFDLE1BQU0sT0FBTyxJQUFJO0FBQUEsWUFDN0JBO0FBQUEsVUFDRDtBQUNBLGNBQUksTUFBTSxPQUFPLENBQUM7QUFDbEIsY0FBSSxNQUFNLE9BQU8sQ0FBQztBQUFBLFFBQ25CO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFHQSxhQUFTQSxNQUFLLFdBQVc7QUFDeEIsVUFBSSxNQUFNLFVBQVVBLEVBQUM7QUFFckIsVUFBSSxJQUFJLFFBQVEsTUFBTTtBQUNyQixZQUFJLE9BQU8sVUFBVSxJQUFJLElBQUk7QUFFN0IsWUFBSSxLQUFLLE9BQU87QUFDZixjQUFJLE1BQU0sSUFBSSxNQUFNO0FBQUEsYUFDaEI7QUFDSixjQUFJLFNBQVMsSUFBSSxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBS0EsRUFBQztBQUNsRCxjQUFJLE1BQU0sT0FBTyxDQUFDO0FBQ2xCLGNBQUksTUFBTSxPQUFPLENBQUM7QUFBQSxRQUNuQjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBRUEsUUFBSSxVQUFVLENBQUM7QUFDZixRQUFJLGFBQWE7QUFFakIsYUFBU0EsTUFBSyxXQUFXO0FBQ3hCLFVBQUksTUFBTSxVQUFVQSxFQUFDO0FBQ3JCLFVBQUksS0FBSyxPQUFPQSxFQUFDO0FBRWpCLFVBQUksR0FBRyxPQUFPLElBQUksT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLO0FBQzNDLFdBQUcsTUFBTSxJQUFJO0FBQ2IsV0FBRyxNQUFNLElBQUk7QUFFYixZQUFJLFFBQVEsR0FBRztBQUVmLFdBQUcsT0FBTyxTQUFTLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksU0FBUyxNQUFNLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHO0FBQ2pILFdBQUcsT0FBTyxTQUFTLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLElBQUksU0FBUyxNQUFNLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHO0FBRWpILGdCQUFRQSxFQUFDLElBQUksYUFBYTtBQUFBLE1BQzNCO0FBQUEsSUFDRDtBQUVBLFFBQUksWUFBWTtBQUVmLGFBQU8sUUFBUSxDQUFDTSxJQUFHakIsT0FBTTtBQUN4QixZQUFJLFFBQVEsR0FBRztBQUNkLGNBQUlBLEtBQUksS0FBSyxRQUFRO0FBQ3BCLFlBQUFpQixHQUFFLFNBQVM7QUFBQSxRQUNiLE9BQ0s7QUFDSixjQUFJLFFBQVFBLEdBQUUsS0FBSztBQUNsQixZQUFBQSxHQUFFLFNBQVM7QUFBQSxRQUNiO0FBQUEsTUFDRCxDQUFDO0FBRUQsZUFBU04sTUFBSyxTQUFTO0FBQ3RCLDZCQUFxQjtBQUNyQixhQUFLLFlBQVlBLEVBQUM7QUFBQSxNQUNuQjtBQUVBLFVBQUksY0FBYyxPQUFPLFFBQVE7QUFDaEMsMEJBQWtCLGtCQUFrQjtBQUFBLElBQ3RDO0FBRUEsYUFBU0EsTUFBSztBQUNiLGlCQUFXQSxFQUFDLElBQUk7QUFBQSxFQUNsQjtBQUdBLFdBQVMsYUFBYSxPQUFPO0FBQzVCLFFBQUksTUFBTSxNQUFNLEtBQUssR0FBRyxHQUFHLFVBQVUsQ0FBQztBQUN0QyxRQUFJLE1BQU0sTUFBTSxLQUFLLEdBQUcsR0FBRyxVQUFVLENBQUM7QUFFdEMsV0FBTyxNQUFNLEdBQUcsS0FBSyxRQUFRLE1BQU07QUFDbEM7QUFFRCxXQUFPLE1BQU0sR0FBRyxLQUFLLFFBQVEsTUFBTSxVQUFVO0FBQzVDO0FBRUQsV0FBTyxDQUFDLEtBQUssR0FBRztBQUFBLEVBQ2pCO0FBRUEsV0FBUyxhQUFhO0FBQ3JCLFFBQUksVUFBVSxHQUFHO0FBQ2hCLFVBQUksY0FBYyxPQUFPLEtBQUssQ0FBQU0sT0FBS0EsR0FBRSxNQUFNLEtBQUssWUFBWSxNQUFNO0FBRWxFLFVBQUk7QUFDSCxZQUFJLGNBQWMsV0FBVyxNQUFNO0FBRXBDLGFBQU8sUUFBUSxDQUFDQSxJQUFHakIsT0FBTTtBQUN4QixZQUFJQSxLQUFJLEtBQUtpQixHQUFFLE1BQU07QUFDcEIsMEJBQWdCakIsSUFBRyxLQUFLO0FBQ3hCLDBCQUFnQkEsSUFBRyxJQUFJO0FBRXZCLGNBQUlpQixHQUFFLFVBQVUsTUFBTTtBQUNyQixnQkFBSSxZQUFZO0FBRWhCLGdCQUFJLFlBQVlBLEdBQUU7QUFDakIsa0JBQUksY0FBYyxXQUFXQSxHQUFFO0FBRWhDLGdCQUFJLFFBQVEsUUFBUSxJQUFJLENBQUMsR0FBRyxLQUFLakIsRUFBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxhQUFhLEtBQUtBLEVBQUMsQ0FBQztBQUN6RSxZQUFBaUIsR0FBRSxTQUFTQSxHQUFFLE1BQU0sTUFBTWpCLElBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFFOUMsZ0JBQUksWUFBWTtBQUNmLGtCQUFJLGNBQWMsV0FBVztBQUFBLFVBQy9CO0FBQUEsUUFDRDtBQUFBLE1BQ0QsQ0FBQztBQUVELGFBQU8sUUFBUSxDQUFDaUIsSUFBR2pCLE9BQU07QUFDeEIsWUFBSUEsS0FBSSxLQUFLaUIsR0FBRSxNQUFNO0FBQ3BCLGNBQUksWUFBWTtBQUVoQixjQUFJLFlBQVlBLEdBQUU7QUFDakIsZ0JBQUksY0FBYyxXQUFXQSxHQUFFO0FBRWhDLFVBQUFBLEdBQUUsVUFBVSxRQUFRLFNBQVNqQixJQUFHLEtBQUs7QUFFckM7QUFDQyxnQkFBSSxRQUFRaUIsR0FBRSxVQUFVLE9BQU9BLEdBQUUsT0FBTyxPQUFPO0FBRS9DLGdCQUFJLE9BQU9BLEdBQUUsT0FBTyxLQUFLLE1BQU1qQixJQUFHLElBQUksSUFBSSxLQUFLO0FBQy9DLGdCQUFJaUQsUUFBT2hDLEdBQUUsT0FBTyxPQUFPLE1BQU1qQixJQUFHLE1BQU0sS0FBSztBQUUvQyxnQkFBSSxRQUFRaUQsT0FBTTtBQUNqQixjQUFBaEMsR0FBRSxPQUFPLFNBQVNBLEdBQUUsT0FBTyxNQUFNLE1BQU1qQixJQUFHLElBQUksSUFBSWlELEtBQUk7QUFDdEQsdUJBQVNqRCxJQUFHLElBQUk7QUFBQSxZQUNqQjtBQUFBLFVBQ0Q7QUFFQSxjQUFJLFlBQVk7QUFDZixnQkFBSSxjQUFjLFdBQVc7QUFFOUIsZUFBSyxjQUFjQSxFQUFDO0FBQUEsUUFDckI7QUFBQSxNQUNELENBQUM7QUFFRCxVQUFJO0FBQ0gsWUFBSSxjQUFjLFdBQVc7QUFBQSxJQUMvQjtBQUFBLEVBQ0Q7QUFFQSxXQUFTLGdCQUFnQixJQUFJLFNBQVM7QUFDckMsUUFBSWlCLEtBQUksVUFBVSxPQUFPLEVBQUUsRUFBRSxTQUFTLE9BQU8sRUFBRTtBQUUvQyxJQUFBQSxHQUFFLFVBQVVBLEdBQUUsT0FBTyxNQUFNLEVBQUU7QUFDN0IsSUFBQUEsR0FBRSxRQUFVQSxHQUFFLEtBQUssTUFBTSxFQUFFO0FBQUEsRUFDNUI7QUFFQSxXQUFTLFNBQVMsSUFBSSxTQUFTO0FBQzlCLFFBQUlBLEtBQUksVUFBVSxPQUFPLEVBQUUsRUFBRSxTQUFTLE9BQU8sRUFBRTtBQUUvQyxRQUFJO0FBQUEsTUFDSDtBQUFBLE1BQ0E7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOO0FBQUEsTUFFQSxTQUFTLGNBQWNBLEdBQUU7QUFBQSxNQUN6QixPQUFTLFlBQWNBLEdBQUU7QUFBQSxNQUN6QixRQUFTLFFBQWNBLEdBQUU7QUFBQSxJQUMxQixJQUFJQSxHQUFFO0FBRU4sWUFBUSxTQUFTLFFBQVEsU0FBUyxDQUFDO0FBRW5DLFFBQUksYUFBYTtBQUNqQixRQUFJLFNBQVUsUUFBUSxJQUFLO0FBRTNCLFFBQUksV0FBVyxhQUFhO0FBQzNCLGtCQUFZLFFBQVEsSUFBSSxTQUFTO0FBRWxDLFFBQUksV0FBV0EsR0FBRSxXQUFXLEtBQUssU0FBUztBQUUxQyxnQkFBWSxJQUFJLFVBQVUsUUFBUSxNQUFNO0FBRXhDLFFBQUksQ0FBQyxTQUFTO0FBQ2IsVUFBSSxNQUFNLFVBQVUsUUFBUSxHQUMzQixNQUFNLFVBQVUsUUFBUSxHQUN4QixNQUFNLFVBQVUsT0FDaEIsTUFBTSxVQUFVO0FBRWpCLG1CQUFhLElBQUksT0FBTztBQUN4QixpQkFBVyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFBQSxJQUNuQztBQUdBLFFBQUk7QUFDSCxpQkFBVyxhQUFhLE9BQU9BLEdBQUUsTUFBTUEsR0FBRSxLQUFLLFdBQVcsUUFBUSxNQUFNLE9BQU8sUUFBUTtBQUFBO0FBRXRGLGlCQUFXLElBQUksYUFBYSxPQUFPQSxHQUFFLE1BQU1BLEdBQUUsS0FBSyxXQUFXLFFBQVEsTUFBTSxPQUFPLFlBQVksUUFBUTtBQUV2RyxnQkFBWSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTTtBQUFBLEVBQzNDO0FBRUEsV0FBUyxXQUFXLElBQUksYUFBYSxXQUFXLFVBQVUsU0FBUyxXQUFXLFlBQVksVUFBVSxPQUFPLFlBQVksVUFBVTtBQUNoSSxRQUFJLGdCQUFnQjtBQUlwQixhQUFTLEtBQUssTUFBTSxRQUFRLENBQUMsR0FBRyxPQUFPO0FBRXRDLFVBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxJQUFJO0FBQ3RCLFlBQUksWUFBWSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEMsWUFBSSxZQUFZLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUVoQyxZQUFJLFlBQVksVUFBVSxVQUFVLFdBQVc7QUFFL0MsWUFBSSxNQUFNLFFBQVE7QUFDakIscUJBQVcsRUFBRSxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksU0FBUyxDQUFDO0FBRWpELFlBQUk7QUFFSixZQUFJLGFBQWE7QUFHakIsWUFBSSxVQUFVLFFBQVEsWUFBWSxRQUFRLFdBQVcsSUFBSSxFQUFFLEdBQUc7QUFDN0QsdUJBQWEsRUFBRSxLQUFLLE1BQU0sRUFBRSxLQUFLO0FBQ2pDLHNCQUFZLFVBQVUsT0FBTztBQUFBLFFBQzlCO0FBRUMscUJBQVc7QUFFWixtQkFBVyxhQUFhLFdBQVcsVUFBVSxTQUFTLFlBQVksWUFBWSxVQUFVLE9BQU8sWUFBWSxVQUFVLFdBQVcsUUFBUTtBQUV4SSx3QkFBZ0I7QUFBQSxNQUNqQjtBQUFBLElBQ0QsQ0FBQztBQUVELFFBQUksQ0FBQztBQUNKLGlCQUFXLGFBQWEsV0FBVyxVQUFVLFNBQVMsV0FBVyxZQUFZLFVBQVUsT0FBTyxZQUFZLFFBQVE7QUFBQSxFQUNwSDtBQUVBLFFBQU0sbUJBQW1CLGlCQUFpQjtBQUUxQyxXQUFTLFdBQVcsYUFBYSxXQUFXLFVBQVUsU0FBUyxXQUFXLFlBQVksVUFBVSxPQUFPLFlBQVksVUFBVSxXQUFXLFVBQVU7QUFDakosZ0JBQVksYUFBYSxXQUFXLFVBQVUsU0FBUyxTQUFTO0FBRWhFLFFBQUksY0FBYyxZQUFZLFVBQVU7QUFDdkMsVUFBSSxLQUFLO0FBQ1Qsb0JBQWMsSUFBSSxLQUFLLFVBQVU7QUFDakMsa0JBQVksSUFBSSxLQUFLLFFBQVE7QUFBQSxJQUM5QjtBQUVBLFFBQUksVUFBVTtBQUNiLFdBQUssUUFBUSxxQkFBcUIsa0JBQWtCO0FBQ25ELFlBQUksS0FBSyxRQUFRO0FBQ2pCLHFCQUFhLElBQUksS0FBSyxTQUFTO0FBQy9CLGVBQU8sV0FBVyxRQUFRO0FBQzFCLGlCQUFTLGFBQWEsWUFBWSxTQUFTO0FBQUEsTUFDNUMsV0FDUyxRQUFRLGtCQUFrQjtBQUNsQyxlQUFPLFdBQVcsUUFBUTtBQUMxQixZQUFJLEtBQUssUUFBUTtBQUNqQixpQkFBUyxhQUFhLFlBQVksU0FBUztBQUFBLE1BQzVDLFdBQ1MsUUFBUSxnQkFBZ0I7QUFDaEMsWUFBSSxLQUFLO0FBQ1QsWUFBSSxLQUFLLFFBQVE7QUFDakIscUJBQWEsSUFBSSxLQUFLLFNBQVM7QUFDL0IsZUFBTyxXQUFXLFFBQVE7QUFDMUIsWUFBSSxRQUFRO0FBQ1osaUJBQVMsYUFBYSxZQUFZLFNBQVM7QUFBQSxNQUM1QztBQUFBLElBQ0QsT0FDSztBQUNKLGFBQU8sV0FBVyxRQUFRO0FBQzFCLGVBQVMsYUFBYSxZQUFZLFNBQVM7QUFBQSxJQUM1QztBQUVBLFFBQUksY0FBYyxZQUFZO0FBQzdCLFVBQUksUUFBUTtBQUFBLEVBQ2Q7QUFFQSxXQUFTLFNBQVMsYUFBYSxZQUFZLFdBQVc7QUFDckQsUUFBSSxZQUFZLEdBQUc7QUFDbEIsVUFBSSxzQkFBc0IsS0FBSztBQUM5QixtQkFBVyxRQUFRLENBQUNpQyxhQUFZQyxpQkFBZ0I7QUFDL0MsY0FBSSxjQUFjLFlBQVlBO0FBQzlCLGNBQUksT0FBT0QsV0FBVTtBQUFBLFFBQ3RCLENBQUM7QUFBQSxNQUNGO0FBRUMsc0JBQWMsUUFBUSxlQUFlLElBQUksT0FBTyxVQUFVO0FBQUEsSUFDNUQ7QUFBQSxFQUNEO0FBRUEsV0FBUyxPQUFPLFdBQVcsVUFBVTtBQUNwQyxRQUFJLG9CQUFvQixLQUFLO0FBQzVCLGVBQVMsUUFBUSxDQUFDRSxXQUFVQyxlQUFjO0FBQ3pDLFlBQUksWUFBWSxVQUFVQTtBQUMxQixZQUFJLEtBQUtELFNBQVE7QUFBQSxNQUNsQixDQUFDO0FBQUEsSUFDRjtBQUVDLGtCQUFZLFFBQVEsYUFBYSxJQUFJLEtBQUssUUFBUTtBQUFBLEVBQ3BEO0FBRUEsV0FBUyxhQUFhLFNBQVNsRCxNQUFLQyxNQUFLLFNBQVM7QUFDakQsUUFBSSxPQUFPLEtBQUssT0FBTztBQUV2QixRQUFJO0FBRUosUUFBSSxXQUFXO0FBQ2Qsa0JBQVksQ0FBQyxHQUFHLENBQUM7QUFBQSxTQUNiO0FBQ0osVUFBSSxXQUFXLEtBQUssU0FBUyxLQUFLLE1BQU0sTUFBTSxTQUFTRCxNQUFLQyxNQUFLLE9BQU87QUFDeEUsVUFBSSxRQUFXLEtBQUssU0FBUyxLQUFLLE1BQU0sTUFBTSxTQUFTRCxNQUFLQyxNQUFLLFNBQVMsUUFBUTtBQUNsRixrQkFBZSxTQUFTRCxNQUFLQyxNQUFLLE9BQU8sU0FBUyxRQUFRO0FBQUEsSUFDM0Q7QUFFQSxXQUFRLEtBQUssU0FBUztBQUFBLEVBQ3ZCO0FBRUEsV0FBUyxlQUFlLE1BQU0sT0FBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLE9BQU8sUUFBUSxNQUFNLEtBQUs7QUFDcEYsUUFBSSxTQUFVLFFBQVEsSUFBSztBQUUzQixlQUFXLEtBQUssSUFBSSxVQUFVLFFBQVEsTUFBTTtBQUU1QyxnQkFBWSxRQUFRLE9BQU8sTUFBTSxLQUFLLE1BQU07QUFFNUMsUUFBSSxVQUFVO0FBRWQsUUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sUUFBUSxRQUFRLEtBQUssUUFBUSxJQUFJLENBQUMsTUFBTTtBQUVuRSxRQUFJLE9BQU8sR0FBRztBQUNiLFdBQUs7QUFDTCxXQUFLO0FBQUEsSUFDTixPQUNLO0FBQ0osV0FBSztBQUNMLFdBQUs7QUFBQSxJQUNOO0FBRUEsYUFBU0gsS0FBSSxHQUFHQSxLQUFJLEtBQUssUUFBUUEsTUFBSztBQUNyQyxVQUFJLE1BQU1BLEVBQUMsS0FBSyxNQUFNO0FBQ3JCLFlBQUksT0FBTztBQUNWLGVBQUssS0FBSyxLQUFLQSxFQUFDO0FBQUE7QUFFaEIsZUFBSyxLQUFLLEtBQUtBLEVBQUM7QUFFakIsWUFBSSxPQUFPLElBQUksRUFBRTtBQUNqQixZQUFJLE9BQU8sSUFBSSxFQUFFO0FBQUEsTUFDbEI7QUFBQSxJQUNEO0FBRUEsUUFBSSxPQUFPO0FBRVgsZUFBVyxLQUFLLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNO0FBQUEsRUFDL0M7QUFFQSxXQUFTLFNBQVMsVUFBVTtBQUczQixRQUFJLFlBQVk7QUFFaEIsU0FBSyxRQUFRLENBQUMsTUFBTUEsT0FBTTtBQUN6QixVQUFJLENBQUMsS0FBSztBQUNUO0FBRUQsVUFBSSxRQUFRLE9BQU8sS0FBSyxLQUFLO0FBRTdCLFVBQUksTUFBTSxPQUFPLE1BQU07QUFDdEIsWUFBSSxLQUFLLE9BQU87QUFDZixzQkFBWTtBQUNaLGVBQUssUUFBUTtBQUNiLHVCQUFhLEtBQUs7QUFBQSxRQUNuQjtBQUNBO0FBQUEsTUFDRCxPQUNLO0FBQ0osWUFBSSxDQUFDLEtBQUssT0FBTztBQUNoQixzQkFBWTtBQUNaLGVBQUssUUFBUTtBQUNiLHVCQUFhLEtBQUs7QUFBQSxRQUNuQjtBQUFBLE1BQ0Q7QUFFQSxVQUFJLE9BQU8sS0FBSztBQUNoQixVQUFJLE1BQU0sT0FBTztBQUVqQixVQUFJLEVBQUMsS0FBQUUsTUFBSyxLQUFBQyxLQUFHLElBQUk7QUFFakIsVUFBSSxDQUFDLE9BQU8sTUFBTSxJQUFJLGFBQWFILElBQUdFLE1BQUtDLE1BQUssT0FBTyxJQUFJLGFBQWEsVUFBVTtBQUVsRixVQUFJLFVBQVU7QUFDYjtBQUdELFVBQUksV0FBVyxNQUFNLFNBQVM7QUFFOUIsVUFBSSxVQUFVLEtBQUssVUFBVSxLQUFLLE9BQU8sTUFBTUgsSUFBR0UsTUFBS0MsTUFBSyxPQUFPLFFBQVEsUUFBUTtBQUluRixVQUFJLFNBQVMsTUFBTSxTQUFTLElBQUksUUFBUSxJQUFJLENBQUFILE9BQUssTUFBTUEsRUFBQyxDQUFDLElBQUk7QUFDN0QsVUFBSSxPQUFTLE1BQU0sU0FBUyxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUMsSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDLElBQUk7QUFFeEUsVUFBSSxTQUFTLEtBQUssVUFBVSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxRQUFRQSxJQUFHLFFBQVEsSUFBSSxHQUFHQSxJQUFHLFFBQVEsSUFBSTtBQUd6RyxXQUFLLFVBQVUsUUFBUSxJQUFJLEtBQUssT0FBTyxNQUFNLFFBQVFBLElBQUcsTUFBTSxJQUFJO0FBRWxFLFVBQUksVUFBVSxLQUFLO0FBRW5CLFdBQUssUUFBUSxLQUFLLEtBQUssS0FBSyxNQUFNLFFBQVFBLElBQUcsUUFBUSxDQUFDO0FBRXRELFVBQUksV0FBVyxRQUFRLEtBQUssU0FBUztBQUNwQyxvQkFBWTtBQUFBLElBQ2QsQ0FBQztBQUVELFdBQU87QUFBQSxFQUNSO0FBRUEsV0FBUyxZQUFZLFVBQVU7QUFDOUIsUUFBSSxZQUFZO0FBRWhCLFlBQVEsUUFBUSxDQUFDUSxJQUFHUixPQUFNO0FBQ3pCLFVBQUksS0FBS1EsR0FBRSxNQUFNUixJQUFHLGVBQWUsUUFBUTtBQUUzQyxVQUFJLE1BQU0sU0FBU0EsRUFBQztBQUNuQixvQkFBWTtBQUViLGVBQVNBLEVBQUMsSUFBSTtBQUFBLElBQ2YsQ0FBQztBQUVELFdBQU87QUFBQSxFQUNSO0FBRUEsV0FBUyxlQUFlO0FBQ3ZCLGFBQVNBLEtBQUksR0FBR0EsS0FBSSxLQUFLLFFBQVFBLE1BQUs7QUFDckMsVUFBSSxPQUFPLEtBQUtBLEVBQUM7QUFFakIsVUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLEtBQUs7QUFDdkI7QUFFRCxVQUFJLE9BQU8sS0FBSztBQUNoQixVQUFJLE1BQU0sT0FBTztBQUVqQixVQUFJSyxJQUFHYTtBQUVQLFVBQUksWUFBWSxLQUFLLE9BQU8sTUFBTWxCLEVBQUM7QUFFbkMsVUFBSSxXQUFXLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSztBQUU3QyxVQUFJLENBQUMsT0FBTyxNQUFNLElBQUksS0FBSztBQUczQixVQUFJLEtBQUssU0FBUyxNQUFNO0FBQ3ZCLFlBQUlzRCxZQUFXLEtBQUssV0FBVztBQUMvQixZQUFJLFdBQVcsT0FBTyxLQUFLLFFBQVFBLGFBQVksT0FBTztBQUV0RCxxQkFBYSxLQUFLLFVBQVUsQ0FBQyxHQUFHLFdBQVcsVUFBVSxRQUFRLElBQUksTUFBTSxNQUFNO0FBRTdFLFlBQUksS0FBSztBQUVULFlBQUksT0FBTyxHQUFHO0FBQ2IsVUFBQWpELEtBQUlhLEtBQUk7QUFFUixjQUFJO0FBQUEsWUFDSDtBQUFBLFlBQ0EsTUFBTSxVQUFVLFVBQVUsQ0FBQztBQUFBLFVBQzVCO0FBQ0EsY0FBSSxRQUFRLFFBQVEsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDO0FBQUEsUUFFdEMsT0FDSztBQUNKLFVBQUFiLEtBQUksTUFBTSxVQUFVLFVBQVUsQ0FBQztBQUMvQixVQUFBYSxLQUFJO0FBQUEsUUFDTDtBQUVBLFlBQUksU0FBUyxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssTUFBTSxNQUFNbEIsSUFBRyxPQUFPLE1BQU0sSUFBSSxLQUFLO0FBRTFFLFlBQUksU0FBUyxRQUFRSyxJQUFHYSxFQUFDO0FBRXpCLFlBQUksUUFBUTtBQUFBLE1BQ2I7QUFFQSxVQUFJLFVBQVU7QUFDYjtBQUVELFVBQUksUUFBUSxPQUFPLEtBQUssS0FBSztBQUU3QixVQUFJLFVBQVUsT0FBTyxJQUFJLFVBQVU7QUFDbkMsVUFBSSxVQUFVLE9BQU8sSUFBSSxVQUFVO0FBRW5DLFVBQUksVUFBVSxLQUFLO0FBSW5CLFVBQUksU0FBUyxNQUFNLFNBQVMsSUFBSSxRQUFRLElBQUksQ0FBQWxCLE9BQUssTUFBTUEsRUFBQyxDQUFDLElBQUk7QUFDN0QsVUFBSSxPQUFTLE1BQU0sU0FBUyxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUMsSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDLElBQUk7QUFFeEUsVUFBSXVELFNBQVEsS0FBSztBQUNqQixVQUFJQyxVQUFTLEtBQUs7QUFDbEIsVUFBSSxZQUFZRCxPQUFNLE9BQU9BLE9BQU0sT0FBTztBQUMxQyxVQUFJLFdBQVcsTUFBTSxZQUFZLE9BQU87QUFDeEMsVUFBSSxVQUFVLE9BQU8sS0FBSyxXQUFXLElBQUksS0FBSyxRQUFRLFlBQVksS0FBSyxNQUFNLEtBQUssT0FBTyxPQUFPO0FBR2hHLFVBQUksUUFBUSxLQUFLLFVBQVUsQ0FBQyxLQUFHO0FBRS9CLFVBQUksVUFBVyxRQUFRLEtBQUssT0FBTyxPQUFPO0FBQzFDLFVBQUksWUFBWSxXQUFXLFdBQVc7QUFDdEMsVUFBSSxXQUFXLFVBQVU7QUFDckIsTUFBQXJDLEtBQVcsT0FBTyxJQUFJLFdBQVc7QUFDakMsTUFBQWIsS0FBVyxPQUFPLElBQUksV0FBVztBQUVyQyxVQUFJK0IsUUFBZSxLQUFLLEtBQUssQ0FBQztBQUM5QixVQUFJLFlBQWUsS0FBSyxTQUFTLElBQUksT0FDbEIsS0FBSyxTQUFTLElBQUksUUFDbEIsUUFBUSxJQUFJLE9BQ1osUUFBUSxJQUFJLFFBQ1osT0FBTyxJQUFJLFdBQVcsUUFBUSxJQUFJLFFBQVE7QUFDN0QsVUFBSSxlQUFlLFNBQ0EsT0FBTyxJQUFJLFdBQVcsUUFBUSxJQUFJLE1BQVE7QUFFN0QsbUJBQWFBLE9BQU0sV0FBVyxXQUFXLFlBQVk7QUFFckQsVUFBSSxhQUFhLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSztBQUVyQyxVQUFJLFVBQVUsUUFBUSxJQUFJLFNBQU8sUUFBUSxPQUFPLEtBQUssT0FBTyxTQUFTLE9BQU8sQ0FBQyxDQUFDO0FBRTlFLFVBQUksVUFBVSxLQUFLO0FBRW5CLGVBQVNwQyxLQUFJLEdBQUdBLEtBQUksUUFBUSxRQUFRQSxNQUFLO0FBQ3hDLFlBQUksTUFBTSxRQUFRQSxFQUFDO0FBRW5CLFlBQUksT0FBTyxNQUFNO0FBQ2hCLGNBQUksT0FBTztBQUNWLFlBQUFLLEtBQUksUUFBUUwsRUFBQztBQUFBO0FBRWIsWUFBQWtCLEtBQUksUUFBUWxCLEVBQUM7QUFFZCxnQkFBTSxLQUFLO0FBRVgsY0FBSSxTQUFTLElBQUksUUFBUSxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLE1BQU0sTUFBTTtBQUUvRCxtQkFBU2EsS0FBSSxHQUFHQSxLQUFJLE9BQU8sUUFBUUEsTUFBSztBQUN2QyxnQkFBSSxPQUFPLE9BQU9BLEVBQUM7QUFFbkIsZ0JBQUksT0FBTztBQUNWLGtCQUFJLEtBQUs7QUFDVCxrQkFBSSxVQUFVUixJQUFHYSxLQUFJTCxLQUFJLFVBQVU7QUFDbkMsa0JBQUksT0FBTyxLQUFLO0FBQ2hCLGtCQUFJLFNBQVMsTUFBTSxHQUFHLENBQUM7QUFDdkIsa0JBQUksUUFBUTtBQUFBLFlBQ2I7QUFFQyxrQkFBSSxTQUFTLE1BQU1SLElBQUdhLEtBQUlMLEtBQUksVUFBVTtBQUFBLFVBQzFDO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFHQSxVQUFJMEMsT0FBTSxNQUFNO0FBQ2Y7QUFBQSxVQUNDO0FBQUEsVUFDQUEsT0FBTSxPQUFPLE1BQU0sUUFBUXZELElBQUcsUUFBUSxJQUFJO0FBQUEsVUFDMUM7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBLFNBQVN1RCxPQUFNLFFBQVEsU0FBUyxDQUFDO0FBQUEsVUFDakNBLE9BQU0sT0FBTyxNQUFNdkQsRUFBQztBQUFBLFVBQ3BCdUQsT0FBTTtBQUFBLFVBQ05BLE9BQU07QUFBQSxRQUNQO0FBQUEsTUFDRDtBQUdBLFVBQUlFLFFBQU8sS0FBSztBQUVoQixVQUFJQSxNQUFLLE1BQU07QUFDZDtBQUFBLFVBQ0M7QUFBQSxVQUNBQSxNQUFLLE9BQU8sTUFBTSxRQUFRekQsSUFBRyxRQUFRLElBQUk7QUFBQSxVQUN6QztBQUFBLFVBQ0EsT0FBTyxJQUFJLElBQUk7QUFBQSxVQUNmLE9BQU8sSUFBSSxVQUFVO0FBQUEsVUFDckIsT0FBTyxJQUFJLFVBQVU7QUFBQSxVQUNyQixTQUFTeUQsTUFBSyxRQUFRLFNBQVMsQ0FBQztBQUFBLFVBQ2hDQSxNQUFLLE9BQU8sTUFBTXpELEVBQUM7QUFBQSxVQUNuQnlELE1BQUs7QUFBQSxVQUNMQSxNQUFLO0FBQUEsUUFDTjtBQUFBLE1BQ0Q7QUFFQSxVQUFJRCxRQUFPLE1BQU07QUFDaEI7QUFBQSxVQUNDLENBQUMsT0FBTztBQUFBLFVBQ1IsQ0FBQyxDQUFDO0FBQUEsVUFDRixPQUFPLElBQUksSUFBSTtBQUFBLFVBQ2YsT0FBTyxJQUFJLElBQUk7QUFBQSxVQUNmLE9BQU8sSUFBSSxVQUFVO0FBQUEsVUFDckIsT0FBTyxJQUFJLFVBQVU7QUFBQSxVQUNyQixTQUFTQSxRQUFPLFFBQVEsU0FBUyxDQUFDO0FBQUEsVUFDbENBLFFBQU8sT0FBTyxNQUFNeEQsRUFBQztBQUFBLFVBQ3JCd0QsUUFBTztBQUFBLFVBQ1BBLFFBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFFQSxTQUFLLFVBQVU7QUFBQSxFQUNoQjtBQUVBLFdBQVMsYUFBYSxRQUFRO0FBRzdCLFdBQU8sUUFBUSxDQUFDdkMsSUFBR2pCLE9BQU07QUFDeEIsVUFBSUEsS0FBSSxHQUFHO0FBQ1YsUUFBQWlCLEdBQUUsU0FBUztBQUVYLFlBQUksUUFBUTtBQUNYLGNBQUksUUFBUSxHQUFHO0FBQ2QsWUFBQUEsR0FBRSxNQUFNO0FBQ1IsWUFBQUEsR0FBRSxNQUFNO0FBQUEsVUFDVCxPQUNLO0FBQ0osWUFBQUEsR0FBRSxPQUFPLFFBQVEsQ0FBQW9CLE9BQUs7QUFDckIsY0FBQUEsR0FBRSxNQUFNO0FBQ1IsY0FBQUEsR0FBRSxNQUFNO0FBQUEsWUFDVCxDQUFDO0FBQUEsVUFDRjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUVBLE1BQUksZUFBZTtBQUNuQixNQUFJLGFBQWE7QUFDakIsTUFBSSxhQUFhLENBQUM7QUFFbEIsV0FBUyxhQUFhO0FBQ3JCLGlCQUFhO0FBRWIsYUFBU3JDLEtBQUksR0FBR0EsS0FBSSxXQUFXLFFBQVFBO0FBQ3RDLFdBQUssR0FBRyxXQUFXQSxFQUFDLENBQUM7QUFFdEIsZUFBVyxTQUFTO0FBQUEsRUFDckI7QUFFQSxXQUFTLFNBQVM7QUFDakIsUUFBSSxDQUFDLGNBQWM7QUFDbEIsZ0JBQVUsT0FBTztBQUNqQixxQkFBZTtBQUFBLElBQ2hCO0FBQUEsRUFDRDtBQUdBLFdBQVMsTUFBTSxJQUFJLGNBQWMsT0FBTztBQUN2QyxtQkFBZTtBQUNmLGlCQUFhO0FBRWIsT0FBRyxJQUFJO0FBQ1AsWUFBUTtBQUVSLFFBQUksZUFBZSxXQUFXLFNBQVM7QUFDdEMscUJBQWUsVUFBVTtBQUFBLEVBQzNCO0FBRUEsT0FBSyxRQUFRO0FBRWIsV0FBUyxVQUFVO0FBR2xCLFFBQUksaUJBQWlCO0FBQ3BCLGdCQUFVO0FBQ1Ysd0JBQWtCO0FBQUEsSUFDbkI7QUFFQSxRQUFJLG9CQUFvQjtBQUN2QixtQkFBYTtBQUNiLDJCQUFxQjtBQUFBLElBQ3RCO0FBRUEsUUFBSSxlQUFlO0FBQ2xCLGlCQUFXLE9BQU8sTUFBUSxVQUFVO0FBQ3BDLGlCQUFXLE9BQU8sS0FBUSxVQUFVO0FBQ3BDLGlCQUFXLE9BQU8sT0FBUSxVQUFVO0FBQ3BDLGlCQUFXLE9BQU8sUUFBUSxVQUFVO0FBRXBDLGlCQUFXLE1BQU0sTUFBUyxVQUFVO0FBQ3BDLGlCQUFXLE1BQU0sS0FBUyxVQUFVO0FBQ3BDLGlCQUFXLE1BQU0sT0FBUyxVQUFVO0FBQ3BDLGlCQUFXLE1BQU0sUUFBUyxVQUFVO0FBRXBDLGlCQUFXLE1BQU0sT0FBUyxVQUFVO0FBQ3BDLGlCQUFXLE1BQU0sUUFBUyxVQUFVO0FBSXBDLFVBQUksUUFBUyxNQUFNLGFBQWEsT0FBTztBQUN2QyxVQUFJLFNBQVMsTUFBTSxhQUFhLE9BQU87QUFFdkMsV0FBSyxRQUFRLENBQUMsRUFBRSxLQUFLLE9BQU8sT0FBTyxNQUFNLEtBQUssTUFBTTtBQUNuRCxZQUFJLE9BQU8sTUFBTTtBQUNoQixjQUFJLE9BQU87QUFDVixnQkFBSSxZQUFhLFNBQVMsS0FBSyxTQUFTLElBQUksUUFBUTtBQUNwRCxnQkFBSSxPQUFPLE9BQU8sS0FBSztBQUV2Qix1QkFBVyxLQUFLLE9BQU8sU0FBVyxPQUFVLE9BQU8sU0FBUztBQUM1RCx1QkFBVyxLQUFLLE9BQU8sVUFBVyxVQUFVLEtBQUs7QUFDakQsdUJBQVcsS0FBSyxPQUFPLFFBQVcsUUFBVSxPQUFPLGFBQWEsVUFBVTtBQUMxRSx1QkFBVyxLQUFLLE9BQU8sV0FBVyxTQUFVLE9BQU8sYUFBYSxVQUFVO0FBRTFFLHFCQUFTLEtBQUssR0FBRztBQUFBLFVBQ2xCO0FBRUMscUJBQVMsS0FBSyxHQUFHO0FBQUEsUUFDbkI7QUFBQSxNQUNELENBQUM7QUFHRCxrQkFBWSxVQUFVLFdBQVcsVUFBVSxTQUFTLFVBQVUsV0FBVyxjQUFjLFVBQVU7QUFDakcsaUJBQVc7QUFFWCxlQUFTLElBQUk7QUFFYixVQUNDLGNBQWMsZUFDZCxjQUFjLGVBQ2QsY0FBYyxlQUNkLGNBQWMsYUFDYjtBQUNELHFCQUFhLEtBQUs7QUFFbEIsWUFBSSxTQUFTLGFBQWE7QUFDMUIsWUFBSSxTQUFTLGFBQWE7QUFFMUIsWUFBSSxjQUFjLENBQUMsbUJBQW1CLE9BQU8sUUFBUSxHQUFHO0FBQ3ZELGlCQUFPLFFBQVE7QUFDZixpQkFBTyxPQUFRO0FBRWYscUJBQVcsUUFBUSxTQUFTLE1BQU0sT0FBTyxJQUFJLEdBQUcsR0FBRyxZQUFZLFVBQVU7QUFDekUscUJBQVcsUUFBUSxTQUFTLEdBQUcsTUFBTSxPQUFPLEdBQUcsR0FBRyxZQUFZLFVBQVU7QUFFeEUsbUJBQVNBLEtBQUksR0FBR0EsS0FBSSxVQUFVLFFBQVFBLE1BQUs7QUFDMUMsZ0JBQUksS0FBSyxVQUFVQSxFQUFDO0FBRXBCLGdCQUFJLE1BQU0sTUFBTTtBQUNmLDJCQUFhQSxFQUFDLEtBQUs7QUFDbkIsMkJBQWFBLEVBQUMsS0FBSztBQUNuQixzQkFBUSxJQUFJLEtBQUssYUFBYUEsRUFBQyxDQUFDLEdBQUcsS0FBSyxhQUFhQSxFQUFDLENBQUMsR0FBRyxZQUFZLFVBQVU7QUFBQSxZQUNqRjtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBRUEsWUFBSSxPQUFPLFFBQVEsQ0FBQyxtQkFBbUIsT0FBTyxRQUFRLEtBQUssT0FBTyxRQUFRLEdBQUc7QUFDNUUsaUJBQU8sUUFBVTtBQUNqQixpQkFBTyxTQUFVO0FBQ2pCLGlCQUFPLE9BQVU7QUFDakIsaUJBQU8sVUFBVTtBQUVqQixtQkFBUyxRQUFRO0FBQ2hCLHVCQUFXLFdBQVcsTUFBTSxPQUFPLElBQUksQ0FBQztBQUFBLFFBQzFDO0FBRUEsc0JBQWM7QUFDZCxzQkFBYztBQUNkLHNCQUFjO0FBQ2Qsc0JBQWM7QUFBQSxNQUNmO0FBRUEsV0FBSyxTQUFTO0FBRWQsc0JBQWdCO0FBQUEsSUFDakI7QUFFQSxRQUFJLGFBQWEsS0FBSyxhQUFhLEdBQUc7QUFDckMsVUFBSSxVQUFVLEdBQUcsR0FBRyxJQUFJLE9BQU8sSUFBSSxNQUFNO0FBQ3pDLFdBQUssV0FBVztBQUNoQixnQkFBVSxRQUFRLFFBQU0sR0FBRyxDQUFDO0FBQzVCLFdBQUssTUFBTTtBQUFBLElBQ1o7QUFFQSxRQUFJLE9BQU8sUUFBUSxpQkFBaUI7QUFDbkMsZ0JBQVUsTUFBTTtBQUNoQix3QkFBa0I7QUFBQSxJQUNuQjtBQUVBLFFBQUksY0FBYyxpQkFBaUI7QUFDbEMsbUJBQWEsTUFBTSxNQUFNLEtBQUs7QUFDOUIsd0JBQWtCO0FBQUEsSUFDbkI7QUFFQSxRQUFJLE9BQU8sUUFBUSxPQUFPLFFBQVEsaUJBQWlCO0FBQ2xELGdCQUFVO0FBQ1Ysd0JBQWtCO0FBQUEsSUFDbkI7QUFFQSxRQUFJLENBQUMsT0FBTztBQUNYLGNBQVE7QUFDUixXQUFLLFNBQVM7QUFFZCxXQUFLLE9BQU87QUFBQSxJQUNiO0FBRUEsb0JBQWdCO0FBRWhCLG1CQUFlO0FBQUEsRUFDaEI7QUFFQSxPQUFLLFNBQVMsQ0FBQyxjQUFjLGVBQWU7QUFDM0MseUJBQXFCLGNBQWM7QUFFbkMsUUFBSSxpQkFBaUI7QUFDcEIsZ0JBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxHQUFHO0FBQUE7QUFFM0MsYUFBTztBQUFBLEVBQ1Q7QUFLQSxXQUFTLFNBQVN1QyxNQUFLSSxPQUFNO0FBQzVCLFFBQUksS0FBSyxPQUFPSixJQUFHO0FBRW5CLFFBQUksR0FBRyxRQUFRLE1BQU07QUFDcEIsVUFBSSxXQUFXLEdBQUc7QUFDakIsWUFBSSxTQUFTLEdBQUcsTUFBTSxNQUFNSSxNQUFLLEtBQUtBLE1BQUssS0FBS0osSUFBRztBQUNuRCxRQUFBSSxNQUFLLE1BQU0sT0FBTyxDQUFDO0FBQ25CLFFBQUFBLE1BQUssTUFBTSxPQUFPLENBQUM7QUFBQSxNQUNwQjtBQUVBLFVBQUlBLE1BQUssTUFBTUEsTUFBSyxLQUFLO0FBQ3hCLFlBQUksT0FBT0EsTUFBSztBQUNoQixRQUFBQSxNQUFLLE1BQU1BLE1BQUs7QUFDaEIsUUFBQUEsTUFBSyxNQUFNO0FBQUEsTUFDWjtBQUVBLFVBQUksVUFBVSxLQUFLQSxNQUFLLE9BQU8sUUFBUUEsTUFBSyxPQUFPLFFBQVFBLE1BQUssTUFBTUEsTUFBSyxNQUFNO0FBQ2hGO0FBRUQsVUFBSUosUUFBTyxXQUFXO0FBQ3JCLFlBQUksR0FBRyxTQUFTLEtBQUssVUFBVSxHQUFHO0FBQ2pDLFVBQUFJLE1BQUssTUFBTSxXQUFXQSxNQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7QUFDdkMsVUFBQUEsTUFBSyxNQUFNLFdBQVdBLE1BQUssS0FBSyxLQUFLLENBQUMsQ0FBQztBQUV2QyxjQUFJQSxNQUFLLE9BQU9BLE1BQUs7QUFDcEIsWUFBQUEsTUFBSztBQUFBLFFBQ1A7QUFBQSxNQUNEO0FBSUEsaUJBQVdKLElBQUcsSUFBSUk7QUFFbEIsd0JBQWtCO0FBQ2xCLGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRDtBQUVBLE9BQUssV0FBVztBQUloQixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJO0FBR0osTUFBSTtBQUNKLE1BQUk7QUFHSixNQUFJO0FBQ0osTUFBSTtBQUdKLE1BQUk7QUFDSixNQUFJO0FBR0osTUFBSTtBQUNKLE1BQUk7QUFFSixNQUFJLFdBQVc7QUFFZixRQUFNLE9BQU8sT0FBTztBQUVwQixNQUFJLFFBQVEsS0FBSztBQUNqQixNQUFJLFFBQVEsS0FBSztBQUVqQixNQUFJLFlBQVk7QUFDZixRQUFJLE9BQU87QUFDVixnQkFBVSxTQUFTLFVBQVUsSUFBSTtBQUNsQyxRQUFJLE9BQU87QUFDVixnQkFBVSxTQUFTLFVBQVUsSUFBSTtBQUVsQyxRQUFJLE9BQU8sT0FBTyxHQUFHO0FBQ3BCLGdCQUFVO0FBQ1YsZ0JBQVU7QUFBQSxJQUNYLE9BQ0s7QUFDSixnQkFBVTtBQUNWLGdCQUFVO0FBQUEsSUFDWDtBQUVBLGlCQUFhLE9BQU87QUFDcEIsZ0JBQVksT0FBTztBQUFBLEVBQ3BCO0FBRUEsUUFBTSxTQUFTLEtBQUssU0FBUyxPQUFPO0FBQUEsSUFDbkMsTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsT0FBUTtBQUFBLElBQ1IsS0FBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1QsR0FBRyxLQUFLLE1BQU07QUFFZCxRQUFNLFlBQVksT0FBTyxPQUFPLFNBQVMsUUFBUSxPQUFPLE9BQU8sT0FBTyxLQUFLLElBQUk7QUFFL0UsV0FBUyxVQUFVQSxPQUFNLE9BQU87QUFDL0IsUUFBSSxPQUFPLE1BQU07QUFDaEIsZUFBUyxRQUFRQSxPQUFNO0FBQ3RCLGVBQU8sSUFBSSxJQUFJQSxNQUFLLElBQUk7QUFFeEIsWUFBSSxRQUFRO0FBQ1gscUJBQVcsV0FBVyxNQUFNQSxNQUFLLElBQUksQ0FBQztBQUFBLE1BQ3hDO0FBRUEsZ0JBQVUsU0FBUyxLQUFLLFdBQVc7QUFBQSxJQUNwQztBQUFBLEVBQ0Q7QUFFQSxPQUFLLFlBQVk7QUFFakIsV0FBUyxVQUFVM0MsSUFBRztBQUNyQixRQUFJaUIsS0FBSSxPQUFPakIsRUFBQztBQUVoQixRQUFJaUIsR0FBRTtBQUNMLG9CQUFjLFNBQVMsV0FBV2pCLEVBQUMsR0FBRyxHQUFHO0FBQUEsU0FDckM7QUFDSixvQkFBYyxTQUFTLFdBQVdBLEVBQUMsR0FBRyxHQUFHO0FBRXpDLFVBQUksWUFBWTtBQUNmLFlBQUksS0FBSyxjQUFjLFVBQVUsQ0FBQyxJQUFJLFVBQVVBLEVBQUM7QUFDakQsY0FBTSxRQUFRLFFBQVEsSUFBSSxLQUFLLEtBQUssWUFBWSxVQUFVO0FBQUEsTUFDM0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUVBLFdBQVMsVUFBVXVDLE1BQUtyQyxNQUFLQyxNQUFLO0FBQ2pDLGFBQVNvQyxNQUFLLEVBQUMsS0FBQXJDLE1BQUssS0FBQUMsS0FBRyxDQUFDO0FBQUEsRUFDekI7QUFFQSxXQUFTLFVBQVVILElBQUcyQyxPQUFNLE9BQU8sTUFBTTtBQUd4QyxRQUFJQSxNQUFLLFNBQVM7QUFDakIsZUFBUzNDLEVBQUM7QUFFWCxRQUFJMkMsTUFBSyxRQUFRLE1BQU07QUFDdEIsYUFBTyxRQUFRLENBQUMxQixJQUFHLE9BQU87QUFDekIsWUFBSSxLQUFLLE1BQU1qQixNQUFLLE1BQU1BLE1BQUssT0FBTztBQUNyQyxVQUFBaUIsR0FBRSxPQUFPMEIsTUFBSztBQUNkLG9CQUFVLEVBQUU7QUFFWixjQUFJLFFBQVEsR0FBRztBQUNkLHNCQUFVMUIsR0FBRSxPQUFPLENBQUMsRUFBRSxPQUFPLE1BQU0sSUFBSTtBQUN2QyxzQkFBVUEsR0FBRSxPQUFPLENBQUMsRUFBRSxPQUFPLE1BQU0sSUFBSTtBQUFBLFVBQ3hDO0FBRUMsc0JBQVVBLEdBQUUsT0FBTyxNQUFNLElBQUk7QUFFOUIsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRCxDQUFDO0FBQUEsSUFDRjtBQUVBLGNBQVUsU0FBUyxLQUFLLGFBQWFqQixJQUFHMkMsS0FBSTtBQUU1QyxZQUFRLFFBQVEsYUFBYSxNQUFNM0MsSUFBRzJDLEtBQUk7QUFBQSxFQUMzQztBQUVBLE9BQUssWUFBWTtBQUVqQixXQUFTLFFBQVEsSUFBSUEsT0FBTTtBQUMxQixXQUFPLE1BQU0sRUFBRSxHQUFHQSxLQUFJO0FBQUEsRUFDdkI7QUFFQSxXQUFTLFFBQVFBLE9BQU0sSUFBSTtBQUMxQixJQUFBQSxNQUFLLE9BQU8sU0FBU0EsTUFBSyxRQUFRLElBQUk7QUFDdEMsSUFBQUEsTUFBSyxNQUFNLE9BQU9BLE1BQUssS0FBSyxFQUFFO0FBQzlCLFNBQUssTUFBTSxPQUFPLE1BQU0sU0FBUztBQUNqQyxVQUFNLE9BQU8sSUFBSSxHQUFHQSxLQUFJO0FBQUEsRUFDekI7QUFFQSxXQUFTLFFBQVEsSUFBSTtBQUNwQixRQUFJLE1BQU07QUFDVCxZQUFNLFNBQVM7QUFBQTtBQUVmLFlBQU0sT0FBTyxJQUFJLENBQUM7QUFBQSxFQUNwQjtBQUVBLE9BQUssVUFBVTtBQUNmLE9BQUssVUFBVTtBQUNmLE9BQUssVUFBVTtBQUVmLFdBQVMsU0FBUzNDLElBQUcsT0FBTztBQUMzQixXQUFPQSxFQUFDLEVBQUUsUUFBUTtBQUVsQixRQUFJLGNBQWMsVUFBVUEsRUFBQyxLQUFLO0FBQ2pDLGdCQUFVQSxFQUFDLEVBQUUsTUFBTSxVQUFVO0FBRTlCLFFBQUksY0FBYyxXQUFXQSxFQUFDO0FBQzdCLGlCQUFXQSxFQUFDLEVBQUUsTUFBTSxVQUFVO0FBQUEsRUFDaEM7QUFHQSxNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFDSixRQUFNLGFBQWMsRUFBQyxPQUFPLEtBQUk7QUFFaEMsV0FBUyxTQUFTQSxJQUFHO0FBQ3BCLFFBQUlBLE1BQUssZUFBZTtBQUd2QixVQUFJLGFBQWFBLE1BQUs7QUFFdEIsVUFBSSxZQUFZLE1BQU0sU0FBUztBQUUvQixhQUFPLFFBQVEsQ0FBQ2lCLElBQUd5QyxRQUFPO0FBQ3pCLFlBQUksUUFBUSxLQUFLQSxNQUFLLEdBQUc7QUFDeEIsY0FBSSxZQUFZLGNBQWNBLE9BQU0sS0FBS0EsT0FBTTFEO0FBQy9DLFVBQUFpQixHQUFFLFNBQVMsYUFBYSxPQUFPO0FBQy9CLHVCQUFhLFNBQVN5QyxLQUFJLFlBQVksSUFBSSxNQUFNLEtBQUs7QUFBQSxRQUN0RDtBQUFBLE1BQ0QsQ0FBQztBQUVELHNCQUFnQjFEO0FBQ2hCLG1CQUFhLE9BQU87QUFBQSxJQUNyQjtBQUFBLEVBQ0Q7QUFFQSxNQUFJLGNBQWMsYUFBYTtBQUM5QixZQUFRLFlBQVksYUFBYSxDQUFBcUIsT0FBSztBQUNyQyxVQUFJLE9BQU87QUFDVjtBQUVELHFCQUFlQSxFQUFDO0FBRWhCLFVBQUksaUJBQWlCO0FBQ3BCLGtCQUFVLE1BQU0sWUFBWSxNQUFNLFNBQVMsU0FBUztBQUFBLElBQ3RELENBQUM7QUFBQSxFQUNGO0FBRUEsV0FBUyxTQUFTLEtBQUssT0FBT3NDLE1BQUs7QUFDbEMsUUFBSSxLQUFLLE9BQU8sS0FBSztBQUVyQixRQUFJQTtBQUNILFlBQU0sTUFBTSxXQUFXLEdBQUcsT0FBTyxJQUFJLGFBQWE7QUFFbkQsUUFBSSxNQUFNO0FBRVYsUUFBSSxHQUFHLE9BQU8sR0FBRztBQUNoQixZQUFNO0FBQ04sWUFBTSxNQUFNO0FBQUEsSUFDYjtBQUVBLFFBQUksR0FBRyxPQUFPO0FBQ2IsWUFBTSxNQUFNO0FBRWIsUUFBSSxPQUFPLEdBQUcsTUFDYixPQUFPLEdBQUcsTUFDVixNQUFNLE1BQU07QUFFYixRQUFJLEtBQUssUUFBUSxPQUFPLFFBQVE7QUFFaEMsUUFBSSxRQUFRLEdBQUc7QUFFZixXQUNDLFNBQVMsSUFBSSxJQUFJLElBQUksRUFBRSxJQUN2QixTQUFTLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUM5QixTQUFTLE1BQU0sR0FBRyxJQUFJLEVBQUUsSUFDeEI7QUFBQSxFQUVGO0FBRUEsV0FBUyxtQkFBbUIsS0FBS0EsTUFBSztBQUNyQyxRQUFJMUQsS0FBSSxTQUFTLEtBQUssV0FBVzBELElBQUc7QUFDcEMsV0FBTyxXQUFXMUQsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFBQSxFQUNyQztBQUVBLE9BQUssV0FBVyxTQUFPLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUM5QyxPQUFLLFdBQVc7QUFDaEIsT0FBSyxXQUFXO0FBQ2hCLE9BQUssV0FBVyxDQUFDLEtBQUssT0FBTzBELFNBQzVCLE9BQU8sS0FBSyxFQUFFLE9BQU8sSUFDckI7QUFBQSxJQUFRO0FBQUEsSUFBSyxPQUFPLEtBQUs7QUFBQSxJQUN4QkEsT0FBTSxVQUFVO0FBQUEsSUFDaEJBLE9BQU0sVUFBVTtBQUFBLEVBQ2pCLElBQ0E7QUFBQSxJQUFRO0FBQUEsSUFBSyxPQUFPLEtBQUs7QUFBQSxJQUN4QkEsT0FBTSxVQUFVO0FBQUEsSUFDaEJBLE9BQU0sVUFBVTtBQUFBLEVBQ2pCO0FBR0QsT0FBSyxZQUFZLENBQUNoQixPQUFNLE9BQU8sU0FBUztBQUN2QyxpQkFBYUEsTUFBSztBQUNsQixnQkFBWUEsTUFBSztBQUVqQixpQkFBYSxNQUFNLE9BQU8sSUFBSTtBQUFBLEVBQy9CO0FBRUEsV0FBUyxRQUFRTCxNQUFLLEtBQUs7QUFDMUIsZUFBVyxXQUFXLE1BQU8sT0FBTyxPQUFPQSxJQUFHO0FBQzlDLGVBQVcsV0FBVyxPQUFPLE9BQU8sUUFBUSxHQUFHO0FBQUEsRUFDaEQ7QUFFQSxXQUFTLFFBQVFBLE1BQUssS0FBSztBQUMxQixlQUFXLFdBQVcsS0FBUSxPQUFPLE1BQU1BLElBQUc7QUFDOUMsZUFBVyxXQUFXLFFBQVEsT0FBTyxTQUFTLEdBQUc7QUFBQSxFQUNsRDtBQUVBLE1BQUksVUFBVSxPQUFPLE9BQU8sSUFBSSxVQUFVO0FBQzFDLE1BQUksVUFBVSxPQUFPLE9BQU8sSUFBSSxVQUFVO0FBRTFDLFdBQVMsYUFBYTtBQUNyQixRQUFJLGNBQWMsT0FBTyxNQUFNO0FBQzlCLGVBQVN0QyxLQUFJLFFBQVEsSUFBSSxJQUFJLEdBQUdBLEtBQUksT0FBTyxRQUFRQSxNQUFLO0FBQ3ZELFlBQUlBLE1BQUssS0FBSztBQUNiO0FBRUQsWUFBSSxPQUFPLE9BQU8sT0FBT0EsRUFBQztBQUUxQixZQUFJYSxLQUFJO0FBRVIsaUJBQVNGLE1BQUs7QUFDYixzQkFBWVgsRUFBQyxFQUFFYSxJQUFHLEVBQUUsV0FBVyxZQUFZLEtBQUtGLEVBQUM7QUFBQSxNQUNuRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBRUEsV0FBUyxVQUFVZ0MsT0FBTSxPQUFPO0FBQy9CLFFBQUlBLFNBQVEsTUFBTTtBQUNqQixVQUFJQSxNQUFLLE1BQU07QUFDZCxRQUFBQSxNQUFLLEtBQUssUUFBUSxDQUFDLE1BQU0sU0FBUztBQUNqQyxxQkFBVyxJQUFJLElBQUk7QUFBQSxRQUNwQixDQUFDO0FBQUEsTUFDRixXQUNTLENBQUMsUUFBUUEsTUFBSyxHQUFHO0FBQ3pCLG1CQUFXLEtBQUtBLE1BQUssR0FBRztBQUV6QixhQUFPLE1BQU0sV0FBVyxDQUFDO0FBQUEsSUFDMUI7QUFFQSxRQUFJLGNBQWMsT0FBTyxNQUFNO0FBQzlCLGVBQVMsT0FBTyxHQUFHLE9BQU8sT0FBTyxRQUFRLFFBQVE7QUFDaEQsWUFBSSxPQUFPLEtBQUssUUFBUSxLQUFLLENBQUM7QUFDN0IsMEJBQWdCLE1BQU0sV0FBVyxJQUFJLENBQUM7QUFBQSxNQUN4QztBQUVBLGlCQUFXO0FBQUEsSUFDWjtBQUVBLHNCQUFrQjtBQUVsQixjQUFVLFNBQVMsS0FBSyxXQUFXO0FBQUEsRUFDcEM7QUFFQSxPQUFLLFlBQVk7QUFFakIsV0FBUyxnQkFBZ0IsTUFBTSxLQUFLO0FBbnFLckMsUUFBQUQ7QUFvcUtFLFFBQUl6QixLQUFJLE9BQU8sSUFBSTtBQUNuQixRQUFJLE1BQU0sUUFBUSxLQUFLLGVBQWUsSUFBSSxRQUFRLEtBQUssSUFBSTtBQUMzRCxRQUFJO0FBRUosUUFBSTtBQUNILGFBQU15QixNQUFBekIsR0FBRSxPQUFPLE1BQU0sTUFBTSxHQUFHLE1BQXhCLE9BQUF5QixNQUE2QjtBQUFBLFNBQy9CO0FBQ0osWUFBTXpCLEdBQUUsTUFBTSxNQUFNLE9BQU8sT0FBTyxPQUFPLElBQUksR0FBRyxHQUFHLE1BQU0sR0FBRztBQUM1RCxZQUFNLE9BQU8sT0FBTyxxQkFBcUIsRUFBQyxHQUFHLElBQUc7QUFBQSxJQUNqRDtBQUVBLFdBQU8sT0FBTyxJQUFJLElBQUk7QUFBQSxFQUN2QjtBQUVBLFdBQVMsYUFBYSxLQUFLLE9BQU8sTUFBTTtBQUd2QyxvQkFBZ0I7QUFDaEIsbUJBQWU7QUFFZixLQUFDLFlBQVksU0FBUyxJQUFJLE9BQU8sS0FBSyxNQUFNLFlBQVksU0FBUztBQUVqRSxXQUFPLE9BQU87QUFDZCxXQUFPLE1BQU07QUFFYixRQUFJLFlBQVk7QUFDZixpQkFBVyxRQUFRLFNBQVMsTUFBTSxVQUFVLEdBQUcsR0FBRyxZQUFZLFVBQVU7QUFDeEUsaUJBQVcsUUFBUSxTQUFTLEdBQUcsTUFBTSxTQUFTLEdBQUcsWUFBWSxVQUFVO0FBQUEsSUFDeEU7QUFFQSxRQUFJO0FBSUosUUFBSSxnQkFBZ0IsS0FBSztBQUV6QixrQkFBYztBQUNkLG9CQUFnQjtBQUdoQixRQUFJLE9BQU8sT0FBTyxPQUFPLElBQUksYUFBYTtBQUMxQyxRQUFJLE9BQU8sT0FBTyxPQUFPLElBQUksYUFBYTtBQUcxQyxRQUFJLGFBQWEsS0FBSyxXQUFXLEtBQUssZUFBZTtBQUNwRCxZQUFNLE9BQU8sTUFBTTtBQUVuQixlQUFTakIsS0FBSSxHQUFHQSxLQUFJLE9BQU8sUUFBUUEsTUFBSztBQUN2QyxZQUFJLEtBQUssVUFBVUEsRUFBQztBQUNwQixjQUFNLFFBQVEsUUFBUSxJQUFJLEtBQUssS0FBSyxZQUFZLFVBQVU7QUFBQSxNQUMzRDtBQUVBLFVBQUk7QUFDSCxrQkFBVSxNQUFNLFlBQVksTUFBTSxPQUFPLFFBQVEsU0FBUyxTQUFTO0FBRXBFLFVBQUksT0FBTyxNQUFNO0FBQ2hCLG1CQUFXLEtBQUssR0FBRztBQUNuQiwwQkFBa0I7QUFBQSxNQUNuQjtBQUFBLElBQ0QsT0FDSztBQUdKLFVBQUksV0FBVyxXQUFXO0FBRTFCLFVBQUksUUFBUSxHQUFHO0FBQ2Qsb0JBQVksT0FBTyxPQUFPLElBQUksYUFBYTtBQUMzQyxvQkFBWSxTQUFTLFdBQVcsU0FBUztBQUN6QyxjQUFNLE9BQU8sTUFBTSxXQUFXLFdBQVcsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFO0FBQ3hELGVBQU8sVUFBVSxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsUUFBUSxNQUFNLENBQUM7QUFBQSxNQUMvQztBQUdBLFVBQUksU0FBUztBQUNiLFVBQUksU0FBUztBQUNiLFVBQUksU0FBUztBQUNiLFVBQUksU0FBUztBQUNiLFVBQUksWUFBWTtBQUNoQixVQUFJLFVBQVU7QUFDZCxVQUFJLFlBQVk7QUFFaEIsZUFBU0EsS0FBSSxRQUFRLElBQUksSUFBSSxHQUFHQSxLQUFJLE9BQU8sUUFBUUEsTUFBSztBQUN2RCxZQUFJaUIsS0FBSSxPQUFPakIsRUFBQztBQUVoQixZQUFJLE9BQVEsV0FBV0EsRUFBQztBQUN4QixZQUFJLFFBQVEsUUFBUSxPQUFPLE9BQVEsUUFBUSxJQUFJLEtBQUtBLEVBQUMsRUFBRSxJQUFJLElBQUksS0FBS0EsRUFBQyxFQUFFLENBQUMsRUFBRSxJQUFJO0FBRTlFLFlBQUksT0FBUSxPQUFPLFFBQVEsTUFBTUEsSUFBRyxLQUFLLFNBQVM7QUFDbEQsWUFBSSxRQUFRLFFBQVEsT0FBTyxPQUFRLFFBQVEsSUFBSSxLQUFLQSxFQUFDLEVBQUUsSUFBSSxJQUFJLEtBQUtBLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSTtBQUU5RSwwQkFBa0IsbUJBQW1CLFNBQVMsU0FBUyxRQUFRO0FBRS9ELG1CQUFXQSxFQUFDLElBQUk7QUFFaEIsWUFBSUEsS0FBSSxLQUFLaUIsR0FBRSxNQUFNO0FBQ3BCLGNBQUksUUFBUSxRQUFRLE9BQU8sTUFBTSxRQUFRLE1BQU0sT0FBTyxVQUFVLFFBQVEsSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUksS0FBS2pCLEVBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLFFBQVEsTUFBTSxDQUFDO0FBRzdILGNBQUksT0FBTyxTQUFTLE9BQU8sTUFBTSxVQUFVLE9BQU8sUUFBUSxJQUFJLE9BQU9pQixHQUFFLEtBQUssSUFBSSxPQUFPQSxHQUFFLE9BQU8sQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUM7QUFFbEgsY0FBSSxlQUFlLFNBQVMsTUFBTTtBQUNqQyxnQkFBSSxZQUFZLE9BQU8sT0FBTyxJQUFJLGFBQWE7QUFDL0MsZ0JBQUksT0FBTyxJQUFJLE1BQU0sS0FBSyxNQUFNakIsSUFBRyxNQUFNLE1BQU0sU0FBUyxDQUFDO0FBRXpELGdCQUFJLE9BQU8sYUFBYTtBQUN2QixrQkFBSSxPQUFPLE1BQU07QUFFakIsa0JBQUksUUFBUSxHQUFHO0FBQ2Qsb0JBQUksWUFBWSxTQUFTLFdBQVdpQixHQUFFLEtBQUs7QUFFM0Msb0JBQUksaUJBQWlCLFNBQWEsSUFBSSxJQUFJO0FBQzFDLG9CQUFJLGdCQUFpQixhQUFhLElBQUksSUFBSTtBQUkxQyxvQkFBSSxpQkFBaUIsbUJBQ3BCLGlCQUFpQixJQUNmLFFBQVEsSUFBSSxTQUFTLFlBQVksU0FBUztBQUFBO0FBQUEsa0JBQzFDLFFBQVEsSUFBSSxTQUFTLFlBQVksU0FBUztBQUFBLG9CQUMxQztBQUNGLGdDQUFjO0FBQ2Qsa0NBQWdCakI7QUFBQSxnQkFDakI7QUFBQSxjQUNELE9BQ0s7QUFDSiw4QkFBYztBQUNkLGdDQUFnQkE7QUFBQSxjQUNqQjtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBRUEsY0FBSSxtQkFBbUIsYUFBYTtBQUNuQyxnQkFBSSxNQUFNO0FBRVYsZ0JBQUksT0FBTyxPQUFPLEdBQUc7QUFDcEIscUJBQU87QUFDUCxxQkFBTztBQUFBLFlBQ1IsT0FDSztBQUNKLHFCQUFPO0FBQ1AscUJBQU87QUFBQSxZQUNSO0FBRUEsZ0JBQUksT0FBTyxPQUFPLE9BQU8sT0FDeEIsVUFBVSxRQUNWLFdBQVcsTUFDWCxVQUFVZ0MsUUFBTztBQUVsQixnQkFBSSxXQUFXLE1BQU07QUFDcEIseUJBQVc7QUFFWCxrQkFBSSxPQUFPLFFBQVEsTUFBTWhDLEVBQUM7QUFFMUIsc0JBQVEsS0FBSztBQUNiLHNCQUFRLEtBQUs7QUFDYixzQkFBUSxLQUFLO0FBQ2Isc0JBQVEsS0FBSztBQUFBLFlBQ2QsT0FDSztBQUNKLHNCQUFRO0FBQ1Isc0JBQVE7QUFDUixzQkFBUSxRQUFRZ0MsUUFBTyxLQUFLLE1BQU1oQyxFQUFDO0FBQUEsWUFDcEM7QUFFQSxxQkFBU2dDLFFBQU8sS0FBSyxNQUFNaEMsRUFBQztBQUM1Qix1QkFBV2dDLFFBQU8sT0FBTyxNQUFNaEMsRUFBQztBQUVoQyxnQkFBSSxhQUFhO0FBQ2hCLGtCQUFJQSxNQUFLLGlCQUFpQixlQUFlLE1BQU0sTUFBTTtBQUNwRCx5QkFBUztBQUNULHlCQUFTO0FBQ1QseUJBQVM7QUFDVCx5QkFBUztBQUNULDRCQUFZO0FBQ1osMEJBQVU7QUFDViw0QkFBWTtBQUFBLGNBQ2I7QUFBQSxZQUNELE9BQ0s7QUFDSixrQkFBSSxLQUFLLFVBQVVBLEVBQUM7QUFFcEIsa0JBQUksTUFBTSxNQUFNO0FBQ2YsNkJBQWFBLEVBQUMsSUFBSTtBQUNsQiw2QkFBYUEsRUFBQyxJQUFJO0FBRWxCLHVCQUFPLElBQUksT0FBTyxPQUFPLFFBQVE7QUFDakMsd0JBQVEsSUFBSSxRQUFRLFFBQVE7QUFDNUIsd0JBQVEsSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLEtBQUssR0FBRyxZQUFZLFVBQVU7QUFBQSxjQUM3RDtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFJQSxVQUFJLGFBQWE7QUFHaEIsWUFBSVEsS0FBSSxNQUFNO0FBRWQsWUFBSSxlQUFlLGlCQUFpQixPQUFPLGVBQWVBLEtBQUssY0FBY0EsTUFBSyxpQkFBaUI7QUFFbkcsWUFBSSxtQkFBbUIsY0FBYztBQUNwQyxjQUFJLEtBQUssVUFBVSxDQUFDO0FBRXBCLGNBQUksTUFBTSxNQUFNO0FBQ2YseUJBQWEsQ0FBQyxJQUFJO0FBQ2xCLHlCQUFhLENBQUMsSUFBSTtBQUVsQixtQkFBTyxJQUFJLFFBQVEsUUFBUSxTQUFTO0FBQ3BDLG9CQUFRLElBQUksU0FBUyxTQUFTO0FBQzlCLG9CQUFRLElBQUksS0FBSyxNQUFNLEdBQUcsS0FBSyxNQUFNLEdBQUcsWUFBWSxVQUFVO0FBQUEsVUFDL0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFHQSxRQUFJLE9BQU8sUUFBUSxVQUFVO0FBQzVCLFVBQUksT0FBTyxNQUFNO0FBQ2hCLFlBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxTQUFTO0FBQzVCLFlBQUksQ0FBQyxZQUFZLFVBQVUsSUFBSSxTQUFTO0FBQ3hDLFlBQUksQ0FBQyxTQUFTLE9BQU8sSUFBSSxJQUFJLE9BQU8sS0FBSztBQUd6QyxZQUFJLFFBQVEsSUFBSSxPQUFPO0FBQ3ZCLGdCQUFRLE1BQU07QUFDZCxnQkFBUSxNQUFNO0FBRWQsWUFBSSxTQUFTLE9BQU87QUFDbkIsY0FBSSxFQUFFLE1BQU0sS0FBSyxPQUFPLE9BQU8sSUFBSSxJQUFJO0FBRXZDLGNBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxFQUFFO0FBQy9CLGNBQUksWUFBWSxJQUFJO0FBRXBCLGNBQUksTUFBTSxNQUFNLElBQUlELElBQUc7QUFFdkIsY0FBSSxZQUFZLFFBQVEsUUFBUSxXQUFXLE1BQU0sT0FBTztBQUN4RCxjQUFJLFlBQVksUUFBUSxRQUFRLFdBQVcsTUFBTSxPQUFPO0FBRXhELGNBQUksYUFBYSxPQUFPO0FBQ3ZCLGdCQUFJLFFBQVEsR0FBRztBQUNkLHFCQUFPO0FBQ1AscUJBQU87QUFBQSxZQUNSLE9BQ0s7QUFDSixxQkFBTztBQUNQLHFCQUFPO0FBQUEsWUFDUjtBQUVBLGlCQUFLLE9BQU8sSUFBSTtBQUVoQixZQUFBQSxLQUFJLFVBQVUsVUFBVSxNQUFNLE9BQU8sR0FBVSxJQUFJLE1BQU0sQ0FBQztBQUMxRCxnQkFBSSxVQUFVLFVBQVUsT0FBTyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUUxRCxvQkFBUSxJQUFJQSxJQUFFLENBQUMsR0FBRyxJQUFJLElBQUVBLEVBQUMsQ0FBQztBQUFBLFVBQzNCO0FBRUMsb0JBQVEsR0FBRyxJQUFJO0FBRWhCLGNBQUksYUFBYSxPQUFPO0FBQ3ZCLGdCQUFJLFFBQVEsR0FBRztBQUNkLHFCQUFPO0FBQ1AscUJBQU87QUFBQSxZQUNSLE9BQ0s7QUFDSixxQkFBTztBQUNQLHFCQUFPO0FBQUEsWUFDUjtBQUVBLGlCQUFLLE9BQU8sSUFBSTtBQUVoQixZQUFBQSxLQUFJLFVBQVUsVUFBVSxNQUFNLE9BQU8sR0FBVSxJQUFJLE1BQU0sQ0FBQztBQUMxRCxnQkFBSSxVQUFVLFVBQVUsT0FBTyxNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUUxRCxvQkFBUSxJQUFJQSxJQUFFLENBQUMsR0FBRyxJQUFJLElBQUVBLEVBQUMsQ0FBQztBQUFBLFVBQzNCO0FBRUMsb0JBQVEsR0FBRyxJQUFJO0FBQUEsUUFDakI7QUFFQyxxQkFBVztBQUFBLE1BQ2IsT0FDSztBQUNKLFlBQUksUUFBUSxJQUFJLGdCQUFnQixhQUFhO0FBQzdDLFlBQUksUUFBUSxJQUFJLGVBQWUsWUFBWTtBQUUzQyxZQUFJLE9BQU8sT0FBTyxHQUFHO0FBQ3BCLGNBQUksU0FBUztBQUNiLGtCQUFRO0FBQ1Isa0JBQVE7QUFBQSxRQUNUO0FBRUEsZ0JBQVEsS0FBSyxLQUFLLFNBQVMsS0FBSztBQUNoQyxnQkFBUSxLQUFLLEtBQUssU0FBUyxLQUFLO0FBRWhDLFlBQUksTUFBTSxLQUFLO0FBRWYsWUFBSSxPQUFPLE1BQU07QUFFaEIsY0FBSSxTQUFTLE9BQU87QUFDbkIsb0JBQVEsU0FBUztBQUNqQixvQkFBUSxTQUFTO0FBR2pCLGdCQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87QUFDckIsa0JBQUksUUFBUTtBQUNYLHdCQUFRO0FBQUE7QUFFUix3QkFBUTtBQUFBLFlBQ1Y7QUFBQSxVQUNEO0FBQUEsUUFDRCxXQUNTLEtBQUssS0FBSyxLQUFLLE1BQU0sU0FBUztBQUV0QyxrQkFBUSxRQUFRO0FBRWpCLFlBQUksSUFBSTtBQUVSLFlBQUksT0FBTztBQUNWLGNBQUksT0FBTyxPQUFPLEdBQUc7QUFDcEIsaUJBQUs7QUFDTCxpQkFBSztBQUFBLFVBQ04sT0FDSztBQUNKLGlCQUFLO0FBQ0wsaUJBQUs7QUFBQSxVQUNOO0FBRUEsa0JBQVEsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBRWpDLGNBQUksQ0FBQztBQUNKLG9CQUFRLEdBQUcsSUFBSTtBQUFBLFFBQ2pCO0FBRUEsWUFBSSxPQUFPO0FBQ1YsY0FBSSxPQUFPLE9BQU8sR0FBRztBQUNwQixpQkFBSztBQUNMLGlCQUFLO0FBQUEsVUFDTixPQUNLO0FBQ0osaUJBQUs7QUFDTCxpQkFBSztBQUFBLFVBQ047QUFFQSxrQkFBUSxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFFakMsY0FBSSxDQUFDO0FBQ0osb0JBQVEsR0FBRyxJQUFJO0FBQUEsUUFDakI7QUFHQSxZQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87QUFDckIsa0JBQVEsR0FBRyxDQUFDO0FBQ1osa0JBQVEsR0FBRyxDQUFDO0FBQUEsUUFDYjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBRUEsU0FBSyxLQUFLO0FBQ1YsU0FBSyxLQUFLO0FBRVYsUUFBSSxPQUFPLE1BQU07QUFDaEIsVUFBSSxNQUFNO0FBQ1QsWUFBSSxXQUFXLE1BQU07QUFDcEIsY0FBSSxDQUFDLFVBQVUsUUFBUSxJQUFJLFNBQVM7QUFFcEMsbUJBQVMsT0FBTyxDQUFDLElBQUksWUFBWSxPQUFPLFNBQVMsT0FBTyxPQUFPLElBQUksYUFBYSxXQUFXLFFBQVEsSUFBSTtBQUN2RyxtQkFBUyxPQUFPLENBQUMsSUFBSSxZQUFZLE9BQU8sU0FBUyxPQUFPLE9BQU8sSUFBSSxhQUFhLFdBQVcsUUFBUSxJQUFJO0FBQUEsUUFDeEc7QUFFQSxnQkFBUSxXQUFXLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxHQUFHO0FBQUEsTUFDNUU7QUFFQSxVQUFJLGFBQWE7QUFDaEIsWUFBSSxZQUFZLFFBQVEsU0FBUztBQUNqQyxZQUFJQyxLQUFJLE1BQU07QUFFZCxZQUFJLGlCQUFpQixNQUFNO0FBQzFCLGNBQUksZUFBZUE7QUFDbEIsc0JBQVUsZUFBZSxZQUFZLE1BQU0sU0FBUztBQUFBLFFBQ3RELE9BQ0s7QUFDSixjQUFJLGNBQWNBO0FBQ2pCLHNCQUFVLE1BQU0sWUFBWSxNQUFNLFNBQVM7QUFBQSxtQkFDbkMsaUJBQWlCO0FBQ3pCLHNCQUFVLGVBQWUsWUFBWSxNQUFNLFNBQVM7QUFBQSxRQUN0RDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBRUEsUUFBSSxpQkFBaUI7QUFDcEIsYUFBTyxNQUFNO0FBQ2IsZ0JBQVU7QUFBQSxJQUNYO0FBRUEsY0FBVSxTQUFTLEtBQUssV0FBVztBQUFBLEVBQ3BDO0FBRUEsTUFBSW9CLFFBQU87QUFFWCxTQUFPLGVBQWUsTUFBTSxRQUFRO0FBQUEsSUFDbkMsTUFBTTtBQUNMLFVBQUlBLFNBQVE7QUFDWCxpQkFBUyxLQUFLO0FBRWYsYUFBT0E7QUFBQSxJQUNSO0FBQUEsRUFDRCxDQUFDO0FBRUQsV0FBUyxTQUFTLFFBQVEsT0FBTztBQUNoQyxRQUFJO0FBQ0gsTUFBQUEsUUFBTztBQUFBLFNBQ0g7QUFDSixNQUFBQSxRQUFPLEtBQUssc0JBQXNCO0FBQ2xDLFdBQUssWUFBWUEsS0FBSTtBQUFBLElBQ3RCO0FBQUEsRUFDRDtBQUVBLFdBQVMsVUFBVVAsSUFBRyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUM5QyxRQUFJLE9BQU87QUFDVjtBQU9ELFFBQUksWUFBWUEsTUFBSyxRQUFRQSxHQUFFLGFBQWEsS0FBS0EsR0FBRSxhQUFhO0FBQy9EO0FBRUQsZUFBV0EsSUFBRyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPQSxNQUFLLElBQUk7QUFFdkQsUUFBSUEsTUFBSztBQUNSLG1CQUFhLE1BQU0sTUFBTSxJQUFJO0FBQUE7QUFFN0IsbUJBQWEsS0FBSyxNQUFNLEtBQUs7QUFBQSxFQUMvQjtBQUVBLFdBQVMsV0FBV0EsSUFBRyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTLE1BQU07QUFDOUQsUUFBSU8sU0FBUTtBQUNYLGVBQVMsS0FBSztBQUVmLG1CQUFlUCxFQUFDO0FBRWhCLFFBQUlBLE1BQUssTUFBTTtBQUNkLFdBQUtBLEdBQUUsVUFBVU8sTUFBSztBQUN0QixXQUFLUCxHQUFFLFVBQVVPLE1BQUs7QUFBQSxJQUN2QixPQUNLO0FBQ0osVUFBSSxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQ3JCLHFCQUFhO0FBQ2Isb0JBQVk7QUFDWjtBQUFBLE1BQ0Q7QUFFQSxVQUFJLENBQUMsTUFBTSxJQUFJLElBQUksU0FBUztBQUU1QixVQUFJLGNBQWMsSUFBSSxPQUFPO0FBQzdCLFVBQUksQ0FBQyxTQUFTLE9BQU8sSUFBSSxZQUFZO0FBQ3JDLFVBQUksQ0FBQyxTQUFTLE9BQU8sSUFBSSxZQUFZO0FBQ3JDLFVBQUksQ0FBQyxZQUFZLFVBQVUsSUFBSSxTQUFTO0FBRXhDLFVBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxFQUFFLE9BQU8sS0FBSztBQUVyQyxVQUFJLE9BQU8sT0FBTyxPQUFPLElBQUksYUFBYSxZQUN6QyxPQUFPLE9BQU8sT0FBTyxJQUFJLGFBQWEsWUFDdEMsUUFBUSxTQUFTLEtBQUssSUFDdEIsUUFBUSxTQUFTLEtBQUssSUFDdEIsUUFBUSxTQUFTLEtBQUssSUFDdEIsUUFBUSxTQUFTLEtBQUs7QUFFdkIsVUFBSSxXQUFXO0FBQ2QsYUFBSyxXQUFXLE1BQU0sT0FBTyxJQUFJLE9BQU8sU0FBUyxPQUFPLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSTtBQUFBO0FBRTFFLGFBQUssUUFBUSxRQUFNO0FBRXBCLFVBQUksV0FBVztBQUNkLGFBQUssV0FBVyxNQUFNLE9BQU8sSUFBSSxPQUFPLFNBQVMsT0FBTyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUk7QUFBQTtBQUUxRSxhQUFLLFFBQVEsUUFBTTtBQUVwQixVQUFJLE9BQU8sT0FBTyxHQUFHO0FBQ3BCLFlBQUksTUFBTTtBQUNWLGFBQUs7QUFDTCxhQUFLO0FBQUEsTUFDTjtBQUFBLElBQ0Q7QUFFQSxRQUFJLFNBQVMsT0FBTyxRQUFRLElBQUksT0FBTyxNQUFNLFFBQVEsWUFBWTtBQUNoRSxVQUFJLE1BQU0sS0FBSyxNQUFNLGFBQWE7QUFDakMsYUFBSyxVQUFVLElBQUksVUFBVTtBQUU5QixVQUFJLE1BQU0sS0FBSyxNQUFNLGFBQWE7QUFDakMsYUFBSyxVQUFVLElBQUksVUFBVTtBQUFBLElBQy9CO0FBRUEsUUFBSSxTQUFTO0FBQ1osc0JBQWdCO0FBQ2hCLHFCQUFlO0FBRWYsT0FBQyxZQUFZLFNBQVMsSUFBSSxPQUFPLEtBQUssTUFBTSxJQUFJLEVBQUU7QUFBQSxJQUNuRCxPQUNLO0FBQ0osbUJBQWE7QUFDYixrQkFBWTtBQUFBLElBQ2I7QUFBQSxFQUNEO0FBRUEsUUFBTSxhQUFhO0FBQUEsSUFDbEIsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ047QUFFQSxXQUFTLGFBQWE7QUFDckIsY0FBVSxZQUFZLEtBQUs7QUFBQSxFQUM1QjtBQUVBLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFFSixXQUFTLFVBQVVQLElBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDOUMsZUFBVztBQUNYLFlBQVEsUUFBUSxLQUFLLEtBQUssS0FBSyxLQUFLO0FBRXBDLGVBQVdBLElBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxLQUFLO0FBRWxELFFBQUlBLE1BQUssTUFBTTtBQUNkLGNBQVEsU0FBUyxLQUFLLFNBQVMsS0FBSztBQUNwQyxjQUFRLFdBQVcsTUFBTSxZQUFZLFdBQVcsWUFBWSxZQUFZLElBQUk7QUFBQSxJQUM3RTtBQUVBLFFBQUksRUFBRSxNQUFNLEtBQUssT0FBTyxPQUFPLElBQUk7QUFFbkMscUJBQW1CO0FBQ25CLG9CQUFtQjtBQUNuQixzQkFBbUI7QUFDbkIsdUJBQW1CO0FBQUEsRUFHcEI7QUFFQSxXQUFTLFFBQVFBLElBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDNUMsZUFBVyxLQUFLLEtBQUssS0FBSyxLQUFLO0FBRS9CLGVBQVdBLElBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJO0FBRWxELFFBQUksRUFBRSxNQUFNLEtBQUssT0FBTyxPQUFPLElBQUk7QUFFbkMsUUFBSSxZQUFZLFFBQVEsS0FBSyxTQUFTO0FBQ3RDLFFBQUksWUFDSCxrQkFBb0IsUUFDcEIsaUJBQW9CLE9BQ3BCLG1CQUFvQixTQUNwQixvQkFBb0I7QUFHckIsaUJBQWEsYUFBYSxVQUFVLE1BQU07QUFFMUMsUUFBSSxLQUFLLFlBQVksYUFBYSxXQUFXO0FBTTVDLFVBQUksT0FBTyxNQUNWLE9BQU8sT0FDUCxPQUFPLEtBQ1AsT0FBTztBQUVSLFVBQUksT0FBTyxPQUFPLEdBQUc7QUFDcEIsZUFBTyxLQUNQLE9BQU8sUUFDUCxPQUFPLE1BQ1AsT0FBTztBQUFBLE1BQ1I7QUFFQSxVQUFJLE9BQU87QUFDVjtBQUFBLFVBQVU7QUFBQSxVQUNULFNBQVMsTUFBTSxTQUFTO0FBQUEsVUFDeEIsU0FBUyxPQUFPLE1BQU0sU0FBUztBQUFBLFFBQ2hDO0FBQUEsTUFDRDtBQUVBLFVBQUksT0FBTztBQUNWLGlCQUFTVixNQUFLLFFBQVE7QUFDckIsY0FBSSxLQUFLLE9BQU9BLEVBQUM7QUFFakIsY0FBSUEsTUFBSyxhQUFhLEdBQUcsUUFBUSxRQUFRLEdBQUcsT0FBTyxLQUFLO0FBQ3ZEO0FBQUEsY0FBVUE7QUFBQSxjQUNULFNBQVMsT0FBTyxNQUFNQSxFQUFDO0FBQUEsY0FDdkIsU0FBUyxNQUFNQSxFQUFDO0FBQUEsWUFDakI7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFFQSxpQkFBVztBQUFBLElBQ1osV0FDUyxPQUFPLE1BQU07QUFDckIsYUFBTyxRQUFRLENBQUMsT0FBTztBQUN2QixtQkFBYSxLQUFLLE1BQU1VLE1BQUssSUFBSTtBQUFBLElBQ2xDO0FBRUEsUUFBSUEsTUFBSyxNQUFNO0FBQ2QsZUFBUyxTQUFTLEdBQUc7QUFDckIsY0FBUSxTQUFTLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxJQUFJO0FBQUEsSUFDM0U7QUFBQSxFQUNEO0FBRUEsV0FBUyxXQUFXQSxJQUFHLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQy9DLFFBQUksT0FBTztBQUNWO0FBRUQsbUJBQWVBLEVBQUM7QUFFaEIsUUFBSSxZQUFZO0FBRWhCLFFBQUksVUFBVTtBQUViLFVBQUksUUFBUTtBQUNaLFVBQUksUUFBUTtBQUNaLFVBQUksV0FBVztBQUVmLFVBQUksT0FBTztBQUVYLFVBQUksT0FBTyxPQUFPLEdBQUc7QUFDcEIsZ0JBQVE7QUFDUixnQkFBUTtBQUFBLE1BQ1QsT0FDSztBQUNKLGdCQUFRO0FBQ1IsZ0JBQVE7QUFBQSxNQUNUO0FBRUEsVUFBSSxTQUFTLE9BQU87QUFFbkIsZ0JBQVEsY0FBYyxZQUFZLGNBQWMsYUFBYTtBQUM3RCxnQkFBUSxhQUFjLFlBQVksYUFBYyxhQUFhO0FBQUEsTUFDOUQ7QUFFQSxVQUFJLFNBQVM7QUFDWixxQkFBYSxhQUFhLGFBQWEsSUFBSTtBQUU1QyxVQUFJLFNBQVM7QUFDWixvQkFBWSxZQUFZLFlBQVksSUFBSTtBQUV6QyxtQkFBYSxNQUFNLE1BQU0sSUFBSTtBQUU3QixpQkFBVztBQUFBLElBQ1o7QUFFQSxpQkFBYTtBQUNiLGdCQUFZO0FBRVosZUFBVyxLQUFLLElBQUk7QUFHcEIsaUJBQWEsTUFBTSxNQUFNLElBQUk7QUFFN0IsUUFBSTtBQUNILGlCQUFXO0FBQUEsRUFDYjtBQUVBLFdBQVMsU0FBU0EsSUFBRyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUM3QyxRQUFJLE9BQU87QUFDVjtBQUVELG1CQUFlQSxFQUFDO0FBRWhCLGVBQVc7QUFFWCxlQUFXO0FBRVgsUUFBSUEsTUFBSztBQUNSLGNBQVEsVUFBVSxNQUFNLFlBQVksV0FBVyxZQUFZLFlBQVksSUFBSTtBQUFBLEVBQzdFO0FBRUEsV0FBUyxjQUFjO0FBQ3RCLFNBQUssUUFBUSxZQUFZO0FBQ3pCLGFBQVMsS0FBSyxPQUFPLEtBQUssUUFBUSxJQUFJO0FBQUEsRUFDdkM7QUFFQSxLQUFHLFlBQVksS0FBSyxXQUFXO0FBRy9CLFFBQU0sU0FBUyxDQUFDO0FBRWhCLFNBQU8sWUFBWTtBQUNuQixTQUFPLFlBQVk7QUFDbkIsU0FBTyxVQUFVO0FBQ2pCLFNBQU8sV0FBVztBQUNsQixTQUFPLFdBQVcsSUFBSSxDQUFDQSxJQUFHLEtBQUssS0FBS3NCLFVBQVM7QUFDNUMsUUFBSWlCLG9CQUFtQixTQUFTLE1BQU0sQ0FBQztBQUN2QyxVQUFNQSxrQkFBaUIsTUFBTSxLQUFLLEdBQUc7QUFDckMsV0FBTyxNQUFNLFVBQVUsS0FBS2pCLE9BQU0sTUFBTSxLQUFLO0FBQUEsRUFDOUM7QUFFQSxNQUFJLFlBQVk7QUFDZixZQUFRLFdBQVksTUFBTSxTQUFTO0FBQ25DLFlBQVEsV0FBWSxNQUFNLFNBQVM7QUFDbkMsWUFBUSxZQUFZLE1BQU0sQ0FBQXRCLE9BQUs7QUFDOUIscUJBQWVBLEVBQUM7QUFDaEIsZUFBUyxLQUFLO0FBQUEsSUFDZixDQUFDO0FBQ0QsWUFBUSxZQUFZLE1BQU0sVUFBVTtBQUVwQyxZQUFRLFVBQVUsTUFBTSxRQUFRO0FBRWhDLGdCQUFZLElBQUksSUFBSTtBQUVwQixTQUFLLFdBQVc7QUFBQSxFQUNqQjtBQUdBLFFBQU0sUUFBUSxLQUFLLFFBQVEsS0FBSyxTQUFTLENBQUM7QUFFMUMsV0FBUyxLQUFLLFFBQVEsSUFBSXdDLEtBQUk7QUFDN0IsUUFBSTtBQUNILGlCQUFXLEtBQUssQ0FBQyxRQUFRLElBQUlBLEdBQUUsQ0FBQztBQUFBLFNBQzVCO0FBQ0osVUFBSSxVQUFVLE9BQU87QUFDcEIsY0FBTSxNQUFNLEVBQUUsUUFBUSxRQUFNO0FBQzNCLGFBQUcsS0FBSyxNQUFNLE1BQU0sSUFBSUEsR0FBRTtBQUFBLFFBQzNCLENBQUM7QUFBQSxNQUNGO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFFQSxHQUFDLEtBQUssV0FBVyxDQUFDLEdBQUcsUUFBUSxDQUFBckQsT0FBSztBQUNqQyxhQUFTLFVBQVVBLEdBQUU7QUFDcEIsWUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssQ0FBQyxHQUFHLE9BQU9BLEdBQUUsTUFBTSxNQUFNLENBQUM7QUFBQSxFQUM5RCxDQUFDO0FBRUQsUUFBTSxtQkFBbUIsQ0FBQ2lDLE9BQU0sS0FBSyxpQkFBaUI7QUFFdEQsUUFBTSxXQUFXLE9BQU87QUFBQSxJQUN2QixLQUFLO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsTUFDUixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDTjtBQUFBLElBQ0EsUUFBUSxDQUFDLFdBQVcsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsUUFBUSxJQUFJO0FBQUEsSUFDdEQsT0FBTyxDQUFDLE9BQU8sT0FBTyxnQkFBZ0I7QUFBQSxJQUN0QyxRQUFRLENBQUMsTUFBTSxJQUFJO0FBQUEsRUFDcEIsR0FBRyxPQUFPLElBQUk7QUFFZCxNQUFJLFNBQVMsTUFBTSxVQUFVO0FBQzVCLGFBQVMsTUFBTSxLQUFLLGdCQUFnQjtBQUVyQyxTQUFPLE9BQU87QUFFZCxRQUFNLFVBQVUsU0FBUztBQUV6QixRQUFNLE9BQU8sTUFBTSxPQUFPO0FBRTFCLFdBQVMsUUFBUSxNQUFNLEtBQUtwQyxJQUFHYSxJQUFHSSxJQUFHUCxJQUFHZixJQUFHO0FBQzFDLFFBQUksU0FBUyxRQUFRLElBQUksTUFBTSxLQUFLSyxJQUFHYSxJQUFHSSxJQUFHUCxJQUFHZixFQUFDO0FBQ2hELFdBQUssSUFBSSxNQUFNLEtBQUtLLElBQUdhLElBQUdJLElBQUdQLElBQUdmLEVBQUM7QUFBQSxFQUNuQztBQUVBLE9BQUssSUFBSSxJQUFJO0FBRWIsV0FBUyxJQUFJLE1BQU0sS0FBS0ssSUFBR2EsSUFBR0ksSUFBR1AsSUFBR2YsSUFBRztBQUN0QyxRQUFJLFNBQVMsUUFBUSxJQUFJLE1BQU0sS0FBS0ssSUFBR2EsSUFBR0ksSUFBR1AsSUFBR2YsRUFBQztBQUNoRCxhQUFPLElBQUksRUFBRSxNQUFNLEtBQUtLLElBQUdhLElBQUdJLElBQUdQLElBQUdmLEVBQUM7QUFBQSxFQUN2QztBQUVBLE9BQUssTUFBTTtBQUVYLFdBQVMsVUFBVTtBQUNsQixTQUFLLE1BQU0sSUFBSTtBQUNmLGdCQUFZLE9BQU8sSUFBSTtBQUN2QixtQkFBZSxNQUFNO0FBQ3JCLFFBQUksWUFBWSxLQUFLLFdBQVc7QUFDaEMsU0FBSyxPQUFPO0FBQ1osK0NBQWE7QUFDYixTQUFLLFNBQVM7QUFBQSxFQUNmO0FBRUEsT0FBSyxVQUFVO0FBRWYsV0FBUyxRQUFRO0FBQ2hCLFNBQUssUUFBUSxNQUFNLElBQUk7QUFFdkIsWUFBUSxRQUFRLEtBQUssTUFBTSxLQUFLO0FBRWhDLFFBQUksV0FBVyxTQUFTO0FBQ3ZCLGVBQVMsV0FBVyxXQUFXLFNBQVMsQ0FBQztBQUFBO0FBRXpDLGlCQUFXO0FBRVosc0JBQWtCLE9BQU8sU0FBUyxPQUFPLFFBQVEsS0FBSyxPQUFPLFNBQVM7QUFDdEUsc0JBQWtCLGtCQUFrQjtBQUVwQyxhQUFTLEtBQUssT0FBTyxLQUFLLE1BQU07QUFBQSxFQUNqQztBQUVBLFNBQU8sUUFBUSxVQUFVO0FBRXpCLE9BQUssUUFBUSxRQUFRO0FBRXJCLE1BQUksTUFBTTtBQUNULFFBQUksZ0JBQWdCLGFBQWE7QUFDaEMsV0FBSyxZQUFZLElBQUk7QUFDckIsWUFBTTtBQUFBLElBQ1A7QUFFQyxXQUFLLE1BQU0sS0FBSztBQUFBLEVBQ2xCO0FBRUMsVUFBTTtBQUVQLFNBQU87QUFDUjtBQUVBLE1BQU0sU0FBUztBQUNmLE1BQU0sU0FBUztBQUNmLE1BQU0sV0FBVztBQUNqQixNQUFNLFdBQVc7QUFDakIsTUFBTSxhQUFhO0FBQ25CLE1BQU0sU0FBVztBQUNqQixNQUFNLFVBQVU7QUFFaEI7QUFDQyxRQUFNLE9BQU87QUFDZDtBQUVBO0FBQ0MsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sU0FBVTtBQUNqQjtBQUVBLE1BQU0sT0FBTztBQUViO0FBQ0MsUUFBTSxTQUFTO0FBQ2YsUUFBTSxXQUFXO0FBRWpCLE1BQUksUUFBUSxNQUFNLFFBQVE7QUFBQSxJQUN6QjtBQUFBLEVBQ0Q7QUFFQSxFQUFDLE1BQU0sU0FBVTtBQUNqQixFQUFDLE1BQU0sVUFBVTtBQUNqQixFQUFDLE1BQU0sT0FBVTtBQUNqQixFQUFDLE1BQU0sU0FBVTtBQUNsQjs7O0FDLytMQSxJQUFNLFlBQVksT0FBTyxTQUFTLFNBQVMsTUFBTSxHQUFHLEVBQUUsT0FBTyxPQUFPO0FBQ3BFLElBQU0sT0FBTyxVQUFVLFNBQVMsSUFBSSxVQUFVLENBQUMsSUFBSTtBQUNuRCxJQUFNLFNBQVMsU0FBUztBQUV4QixlQUFlLFNBQVMsTUFBTSxPQUFPLENBQUMsR0FBRztBQUN2QyxRQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0saUNBQ3pCLE9BRHlCO0FBQUEsSUFFNUIsU0FBUyxpQkFBRSxnQkFBZ0Isc0JBQXdCLEtBQUssV0FBVyxDQUFDO0FBQUEsSUFDcEUsYUFBYTtBQUFBLEVBQ2YsRUFBQztBQUNELE1BQUksQ0FBQyxJQUFJLElBQUk7QUFDWCxRQUFJLElBQUksV0FBVyxLQUFLO0FBQ3RCLGFBQU8sU0FBUyxPQUFPO0FBQ3ZCLFlBQU0sSUFBSSxNQUFNLGlCQUFpQjtBQUFBLElBQ25DO0FBQ0EsVUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLLEVBQUUsTUFBTSxPQUFPLENBQUMsRUFBRTtBQUM5QyxVQUFNLElBQUksTUFBTSxLQUFLLFVBQVUsUUFBUSxJQUFJLE1BQU0sRUFBRTtBQUFBLEVBQ3JEO0FBQ0EsTUFBSSxJQUFJLFdBQVcsSUFBSyxRQUFPO0FBQy9CLFNBQU8sSUFBSSxLQUFLO0FBQ2xCO0FBRUEsSUFBTSxNQUFNO0FBQUEsRUFDVixVQUFVLE1BQU0sU0FBUyxrQkFBa0IsSUFBSSxRQUFRO0FBQUEsRUFDdkQsZUFBZSxDQUFDOEQsUUFBTyxPQUFPLFNBQVMsa0JBQWtCLElBQUksb0JBQW9CQSxLQUFJLEVBQUU7QUFBQSxFQUN2RixnQkFBZ0IsTUFBTSxTQUFTLGtCQUFrQixJQUFJLGNBQWM7QUFBQSxFQUVuRSxhQUFhLENBQUMsV0FBVztBQUN2QixVQUFNQyxLQUFJLElBQUksZ0JBQWdCLE1BQU0sRUFBRSxTQUFTO0FBQy9DLFdBQU8sU0FBUyxrQkFBa0IsSUFBSSxZQUFZQSxFQUFDLEVBQUU7QUFBQSxFQUN2RDtBQUFBLEVBRUEsY0FBYyxNQUFNLFNBQVMsa0JBQWtCLElBQUksV0FBVztBQUFBLEVBQzlELGVBQWUsQ0FBQyxTQUFTLFNBQVMsa0JBQWtCLElBQUksYUFBYSxFQUFFLFFBQVEsUUFBUSxNQUFNLEtBQUssVUFBVSxJQUFJLEVBQUUsQ0FBQztBQUFBLEVBQ25ILGVBQWUsQ0FBQyxPQUFPLFNBQVMsa0JBQWtCLElBQUksYUFBYSxFQUFFLElBQUksRUFBRSxRQUFRLFNBQVMsQ0FBQztBQUFBLEVBQzdGLGdCQUFnQixNQUFNLFNBQVMsa0JBQWtCLElBQUksYUFBYTtBQUFBLEVBRWxFLGFBQWEsTUFBTSxTQUFTLGtCQUFrQixJQUFJLFdBQVc7QUFBQSxFQUM3RCxnQkFBZ0IsQ0FBQyxTQUFTLFNBQVMsa0JBQWtCLElBQUksYUFBYSxFQUFFLFFBQVEsU0FBUyxNQUFNLEtBQUssVUFBVSxJQUFJLEVBQUUsQ0FBQztBQUFBLEVBQ3JILFlBQVksQ0FBQyxVQUFVLFNBQVMsa0JBQWtCLElBQUksV0FBVyxFQUFFLFFBQVEsUUFBUSxNQUFNLEtBQUssVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFBQSxFQUNwSCxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sU0FBUyxrQkFBa0IsSUFBSSxjQUFjLElBQUksZ0JBQWdCLE1BQU0sRUFBRSxTQUFTLENBQUM7QUFBQSxFQUVqSCxhQUFhLE1BQU0sU0FBUyxrQkFBa0IsSUFBSSxXQUFXO0FBQUEsRUFDN0QsY0FBYyxDQUFDLFNBQWlCLFNBQVMsa0JBQWtCLElBQUksYUFBYSxFQUFFLFFBQVEsUUFBUSxNQUFNLEtBQUssVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFBQSxFQUM5SCxjQUFjLENBQUMsT0FBZSxTQUFTLGtCQUFrQixJQUFJLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxTQUFTLENBQUM7QUFDdEc7QUFFQSxJQUFNLGFBQWE7QUFBQSxFQUNqQixlQUFlLE1BQU0sU0FBUywwQkFBMEI7QUFBQSxFQUN4RCxnQkFBZ0IsQ0FBQyxNQUFNLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxJQUN6RSxRQUFRO0FBQUEsSUFDUixNQUFNLEtBQUssVUFBVSxFQUFFLE1BQU0sYUFBYSxXQUFXLENBQUM7QUFBQSxFQUN4RCxDQUFDO0FBQ0g7QUFzQkEsU0FBU0MsU0FBUSxLQUFLO0FBQ3BCLE1BQUksQ0FBQyxJQUFLLFFBQU87QUFDakIsU0FBTyxJQUFJLEtBQUssR0FBRyxFQUFFLG1CQUFtQixRQUFXLEVBQUUsTUFBTSxXQUFXLE9BQU8sU0FBUyxLQUFLLFVBQVUsQ0FBQztBQUN4RztBQUVBLFNBQVMsWUFBWSxRQUFRO0FBQzNCLFFBQU0sTUFBTSxFQUFFLFVBQVUsaUJBQWlCLFNBQVMsaUJBQWlCLFNBQVMsZUFBZSxVQUFVLGVBQWUsRUFBRSxNQUFNLEtBQUs7QUFDakksU0FBT0MsaUJBQW1CLFNBQVMsR0FBRyxFQUFFLElBQUksTUFBTTtBQUNwRDtBQUVBLFNBQVMsY0FBYyxRQUFRO0FBQzdCLFFBQU0sTUFBTSxFQUFFLFdBQVcsaUJBQWlCLFNBQVMsaUJBQWlCLFFBQVEsZUFBZSxFQUFFLE1BQU0sS0FBSztBQUN4RyxTQUFPQSxpQkFBbUIsU0FBUyxHQUFHLEVBQUUsSUFBSSxNQUFNO0FBQ3BEO0FBRUEsU0FBUyxRQUFRLEVBQUUsS0FBSyxHQUFxQjtBQUMzQyxTQUFPQSx5Q0FBMkMsSUFBSTtBQUN4RDtBQUVBLFNBQVMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxHQUFHO0FBQy9CLFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSUMsR0FBUyxFQUFFLE1BQU0sTUFBTSxTQUFTLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFDN0UsUUFBTSxTQUFTQyxHQUFZLE1BQU07QUFDL0IsYUFBUyxDQUFBQyxPQUFNLGlDQUFLQSxLQUFMLEVBQVEsU0FBUyxNQUFNLE9BQU8sS0FBSyxFQUFFO0FBQ3BELE9BQUcsRUFBRSxLQUFLLFVBQVEsU0FBUyxFQUFFLE1BQU0sU0FBUyxPQUFPLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFDNUQsTUFBTSxTQUFPLFNBQVMsRUFBRSxNQUFNLE1BQU0sU0FBUyxPQUFPLE9BQU8sSUFBSSxRQUFRLENBQUMsQ0FBQztBQUFBLEVBQ2hGLEdBQUcsSUFBSTtBQUNQLEVBQUFDLEdBQVUsTUFBTTtBQUFFLFdBQU87QUFBQSxFQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDdkMsU0FBTyxpQ0FBSyxRQUFMLEVBQVksT0FBTztBQUM1QjtBQU1BLFNBQVMsWUFBWSxFQUFFLE1BQUFDLFFBQU8sR0FBRyxHQUFHO0FBQ2xDLFFBQU0sZUFBZUMsR0FBTyxJQUFJO0FBQ2hDLFFBQU0sVUFBVUEsR0FBTyxJQUFJO0FBQzNCLFFBQU0sRUFBRSxNQUFNLFNBQVMsTUFBTSxJQUFJLFNBQVMsTUFBTSxJQUFJLGNBQWNELEtBQUksR0FBRyxDQUFDQSxLQUFJLENBQUM7QUFFL0UsRUFBQUQsR0FBVSxNQUFNO0FBQ2QsUUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLFFBQVM7QUFDcEMsUUFBSSxRQUFRLFNBQVM7QUFBRSxjQUFRLFFBQVEsUUFBUTtBQUFHLGNBQVEsVUFBVTtBQUFBLElBQU07QUFFMUUsVUFBTSxhQUFhLEtBQUssSUFBSSxDQUFBSCxPQUFLLElBQUksS0FBS0EsR0FBRSxJQUFJLEVBQUUsUUFBUSxJQUFJLEdBQUk7QUFDbEUsVUFBTSxTQUFTLEtBQUssSUFBSSxDQUFBQSxPQUFLQSxHQUFFLEtBQUs7QUFDcEMsVUFBTSxPQUFPO0FBQUEsTUFDWCxPQUFPLGFBQWEsUUFBUSxlQUFlO0FBQUEsTUFDM0MsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ04sQ0FBQztBQUFBLFFBQ0QsRUFBRSxPQUFPLFdBQVcsUUFBUSxXQUFXLE1BQU0sd0JBQXdCLE9BQU8sRUFBRTtBQUFBLE1BQ2hGO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixFQUFFLFFBQVEsQ0FBQ00sSUFBRyxTQUFTLEtBQUssSUFBSSxDQUFBQyxPQUFLLElBQUksS0FBS0EsS0FBSSxHQUFJLEVBQUUsbUJBQW1CLFFBQVcsRUFBRSxPQUFPLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxFQUFFO0FBQUEsUUFDM0gsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLEVBQUU7QUFBQSxNQUM1QixRQUFRLEVBQUUsTUFBTSxNQUFNO0FBQUEsTUFDdEIsUUFBUSxFQUFFLE1BQU0sTUFBTTtBQUFBLElBQ3hCO0FBQ0EsWUFBUSxVQUFVLElBQUksTUFBTSxNQUFNLENBQUMsWUFBWSxNQUFNLEdBQUcsYUFBYSxPQUFPO0FBRTVFLFdBQU8sTUFBTTtBQUFFLFVBQUksUUFBUSxTQUFTO0FBQUUsZ0JBQVEsUUFBUSxRQUFRO0FBQUcsZ0JBQVEsVUFBVTtBQUFBLE1BQU07QUFBQSxJQUFFO0FBQUEsRUFDN0YsR0FBRyxDQUFDLElBQUksQ0FBQztBQUVULE1BQUksUUFBUyxRQUFPUjtBQUNwQixNQUFJLE1BQU8sUUFBT0Esb0NBQXNDLEtBQUs7QUFDN0QsU0FBT0EsY0FBZ0IsWUFBWTtBQUNyQztBQU1BLFNBQVMsZUFBZTtBQS9KeEI7QUFnS0UsUUFBTSxRQUFRLFNBQVMsTUFBTSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDL0MsUUFBTSxVQUFVLFNBQVMsTUFBTSxJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFFdkQsU0FBT0E7QUFBQTtBQUFBLE1BRUgsTUFBTSxVQUFVQSxnREFBa0QsTUFBTSxRQUFRQSxvQ0FBc0MsTUFBTSxLQUFLLFdBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBSTlHLE1BQU0sS0FBSyxjQUFjLGVBQWUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUl6QyxNQUFNLEtBQUssaUJBQWlCLGVBQWUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUk1QyxNQUFNLEtBQUssY0FBYyxlQUFlLENBQUM7QUFBQTtBQUFBO0FBQUEsK0ZBR2tCLE9BQU87QUFBQSxvQ0FDbEUsTUFBTSxLQUFLLGtCQUFrQixRQUFRLENBQUMsQ0FBQztBQUFBO0FBQUE7QUFBQSwyRkFHZ0IsT0FBTztBQUFBLHFDQUM3RCxNQUFNLEtBQUssZ0JBQWdCLEtBQUssUUFBUSxDQUFDLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FJMUMsTUFBTSxLQUFLLG1CQUFtQixHQUFHLGVBQWUsQ0FBQztBQUFBO0FBQUE7QUFBQSxLQUdqRjtBQUFBO0FBQUEsUUFFQyxXQUFNLFNBQU4sbUJBQVksbUJBQWtCLEtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUksV0FBVyxTQUFTLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS3ZCLFFBQVEsVUFBVUEsMENBQTRDLFFBQVEsUUFBUUEsb0NBQXNDLFFBQVEsS0FBSyxXQUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSXRJLFFBQVEsS0FBSyxNQUFNLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQ0csSUFBR00sT0FBTVQ7QUFBQSx3QkFDOUJHLEdBQUUsRUFBRTtBQUFBLHNCQUNOTSxLQUFJLENBQUM7QUFBQSxzQkFDTE4sR0FBRSxLQUFLO0FBQUEsc0JBQ1BBLEdBQUUsY0FBYztBQUFBLHNCQUNoQkEsR0FBRSxrQkFBa0I7QUFBQTtBQUFBLGFBRTdCLENBQUM7QUFBQTtBQUFBO0FBQUEsVUFHSixRQUFRLEtBQUssV0FBVyxLQUFLSCw0Q0FBOEM7QUFBQSxPQUM5RTtBQUFBO0FBQUE7QUFHUDtBQUVBLFNBQVMsY0FBYztBQUNyQixRQUFNLENBQUMsTUFBTSxPQUFPLElBQUlDLEdBQVMsQ0FBQztBQUNsQyxRQUFNLENBQUMsS0FBSyxJQUFJQSxHQUFTLEVBQUU7QUFDM0IsUUFBTSxDQUFDLFFBQVEsU0FBUyxJQUFJQSxHQUFTLEVBQUU7QUFDdkMsUUFBTSxDQUFDLFFBQVEsU0FBUyxJQUFJQSxHQUFTLEVBQUU7QUFDdkMsUUFBTSxDQUFDLGFBQWEsY0FBYyxJQUFJQSxHQUFTLEVBQUU7QUFDakQsUUFBTSxDQUFDLE1BQU0sT0FBTyxJQUFJQSxHQUFTLE1BQU07QUFFdkMsUUFBTSxFQUFFLE1BQU0sU0FBUyxNQUFNLElBQUk7QUFBQSxJQUMvQixNQUFNLElBQUksWUFBWSxFQUFFLE1BQU0sT0FBTyxRQUFRLFFBQVEsS0FBSyxDQUFDO0FBQUEsSUFDM0QsQ0FBQyxNQUFNLE9BQU8sUUFBUSxRQUFRLElBQUk7QUFBQSxFQUNwQztBQUVBLFFBQU0sV0FBVSw2QkFBTSxZQUFXLENBQUM7QUFDbEMsUUFBTSxTQUFRLDZCQUFNLFVBQVM7QUFDN0IsUUFBTSxhQUFhLEtBQUssSUFBSSxHQUFHLEtBQUssS0FBSyxRQUFRLEtBQUssQ0FBQztBQUV2RCxXQUFTLGFBQWFTLElBQUc7QUFDdkIsSUFBQUEsR0FBRSxlQUFlO0FBQ2pCLGNBQVUsV0FBVztBQUNyQixZQUFRLENBQUM7QUFBQSxFQUNYO0FBRUEsU0FBT1Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FJMkIsTUFBTSxlQUFlLENBQUM7QUFBQSx5QkFDakMsWUFBWTtBQUFBLGlFQUM0QixXQUFXO0FBQUEsc0JBQ3RELENBQUFVLE9BQUssZUFBZUEsR0FBRSxPQUFPLEtBQUssQ0FBQztBQUFBO0FBQUE7QUFBQSx3QkFHakMsTUFBTSxhQUFhLENBQUFBLE9BQUs7QUFBRSxjQUFVQSxHQUFFLE9BQU8sS0FBSztBQUFHLFlBQVEsQ0FBQztBQUFBLEVBQUcsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU9sRSxJQUFJLGFBQWEsQ0FBQUEsT0FBSztBQUFFLFlBQVFBLEdBQUUsT0FBTyxLQUFLO0FBQUcsWUFBUSxDQUFDO0FBQUEsRUFBRyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFLbkMsa0JBQWtCLElBQUkscUJBQXFCO0FBQUE7QUFBQTtBQUFBLFFBR3RGLFVBQVVWLDBDQUE0QyxRQUFRQSx3REFBMEQsS0FBSyxXQUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVlsSSxRQUFRLElBQUksQ0FBQUcsT0FBS0g7QUFBQSx3QkFDUEcsR0FBRSxFQUFFO0FBQUEsc0JBQ05BLEdBQUUsS0FBSztBQUFBLHNCQUNQLFlBQVlBLEdBQUUsTUFBTSxDQUFDO0FBQUEsc0JBQ3JCQSxHQUFFLGtCQUFrQjtBQUFBLHNCQUNwQkEsR0FBRSxjQUFjO0FBQUEsc0JBQ2hCSixTQUFRSSxHQUFFLFVBQVUsQ0FBQztBQUFBO0FBQUEsYUFFOUIsQ0FBQztBQUFBO0FBQUE7QUFBQSxVQUdKLFFBQVEsV0FBVyxLQUFLSCwyREFBNkQ7QUFBQTtBQUFBLG9DQUUzRCxJQUFJLE9BQU8sVUFBVSxLQUFLLE1BQU0sZUFBZSxDQUFDO0FBQUEsOERBQ3RCLFFBQVEsQ0FBQyxZQUFZLE1BQU0sUUFBUSxDQUFBVyxPQUFLQSxLQUFJLENBQUMsQ0FBQztBQUFBLDhEQUM5QyxRQUFRLFVBQVUsWUFBWSxNQUFNLFFBQVEsQ0FBQUEsT0FBS0EsS0FBSSxDQUFDLENBQUM7QUFBQTtBQUFBLE9BRTlHO0FBQUE7QUFBQTtBQUdQO0FBRUEsU0FBUyxrQkFBa0I7QUFDekIsUUFBTSxFQUFFLE1BQU0sU0FBUyxNQUFNLElBQUksU0FBUyxNQUFNLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQUV4RSxTQUFPWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSUQsVUFBVUEsMENBQTRDLFFBQVFBLHdEQUEwRCxLQUFLLFdBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FJbEksS0FBSyxJQUFJLENBQUNHLElBQUdNLE9BQU1UO0FBQUEsd0JBQ1RHLEdBQUUsRUFBRTtBQUFBLHNCQUNOTSxLQUFJLENBQUM7QUFBQSxzQkFDTE4sR0FBRSxLQUFLO0FBQUEsNEJBQ0RBLEdBQUUsYUFBYTtBQUFBLHNCQUNyQkEsR0FBRSxjQUFjO0FBQUEsc0JBQ2hCQSxHQUFFLGtCQUFrQjtBQUFBO0FBQUEsYUFFN0IsQ0FBQztBQUFBO0FBQUE7QUFBQSxVQUdKLEtBQUssV0FBVyxLQUFLSCw0Q0FBOEM7QUFBQSxPQUN0RTtBQUFBO0FBQUE7QUFHUDtBQUVBLFNBQVMsZUFBZTtBQUN0QixRQUFNLFdBQVcsU0FBUyxNQUFNLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN0RCxRQUFNLGFBQWEsU0FBUyxNQUFNLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQUMxRCxRQUFNLENBQUMsTUFBTSxPQUFPLElBQUlDLEdBQVMsRUFBRSxLQUFLLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDcEUsUUFBTSxDQUFDLFFBQVEsU0FBUyxJQUFJQSxHQUFTLEtBQUs7QUFDMUMsUUFBTSxDQUFDLEtBQUssTUFBTSxJQUFJQSxHQUFTLElBQUk7QUFFbkMsUUFBTSxZQUFZLENBQUMsa0JBQWtCLGtCQUFrQixvQkFBb0I7QUFFM0UsV0FBUyxZQUFZLElBQUk7QUFDdkIsWUFBUSxDQUFBVyxPQUFNLGlDQUNUQSxLQURTO0FBQUEsTUFFWixRQUFRQSxHQUFFLE9BQU8sU0FBUyxFQUFFLElBQUlBLEdBQUUsT0FBTyxPQUFPLENBQUFGLE9BQUtBLE9BQU0sRUFBRSxJQUFJLENBQUMsR0FBR0UsR0FBRSxRQUFRLEVBQUU7QUFBQSxJQUNuRixFQUFFO0FBQUEsRUFDSjtBQUVBLGlCQUFlLGFBQWFGLElBQUc7QUFDN0IsSUFBQUEsR0FBRSxlQUFlO0FBQ2pCLFFBQUksS0FBSyxPQUFPLFdBQVcsR0FBRztBQUFFLGFBQU8sRUFBRSxNQUFNLFNBQVMsTUFBTSw2QkFBNkIsQ0FBQztBQUFHO0FBQUEsSUFBUTtBQUN2RyxjQUFVLElBQUk7QUFDZCxXQUFPLElBQUk7QUFDWCxRQUFJO0FBQ0YsWUFBTSxJQUFJLGNBQWMsRUFBRSxLQUFLLEtBQUssS0FBSyxRQUFRLEtBQUssUUFBUSxRQUFRLEtBQUssT0FBTyxDQUFDO0FBQ25GLGNBQVEsRUFBRSxLQUFLLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDM0MsYUFBTyxFQUFFLE1BQU0sV0FBVyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELGVBQVMsT0FBTztBQUFBLElBQ2xCLFNBQVMsS0FBSztBQUNaLGFBQU8sRUFBRSxNQUFNLFNBQVMsTUFBTSxJQUFJLFFBQVEsQ0FBQztBQUFBLElBQzdDLFVBQUU7QUFDQSxnQkFBVSxLQUFLO0FBQUEsSUFDakI7QUFBQSxFQUNGO0FBRUEsaUJBQWUsYUFBYSxJQUFJO0FBQzlCLFFBQUksQ0FBQyxRQUFRLCtCQUErQixFQUFHO0FBQy9DLFFBQUk7QUFDRixZQUFNLElBQUksY0FBYyxFQUFFO0FBQzFCLGVBQVMsT0FBTztBQUNoQixpQkFBVyxPQUFPO0FBQUEsSUFDcEIsU0FBUyxLQUFLO0FBQ1osYUFBTyxFQUFFLE1BQU0sU0FBUyxNQUFNLElBQUksUUFBUSxDQUFDO0FBQUEsSUFDN0M7QUFBQSxFQUNGO0FBRUEsU0FBT1Y7QUFBQTtBQUFBLE1BRUgsT0FBT0EsZ0JBQWtCLGVBQWUsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSXBFLFNBQVMsVUFBVUEsMENBQTRDLFNBQVMsUUFBUUEsd0RBQTBELFNBQVMsS0FBSyxXQUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSTdKLFNBQVMsS0FBSyxJQUFJLENBQUFhLE9BQUtiO0FBQUEsd0JBQ2JhLEdBQUUsRUFBRTtBQUFBLG1EQUN1QkEsR0FBRSxHQUFHO0FBQUEsc0JBQ2xDQSxHQUFFLE9BQU8sS0FBSyxJQUFJLENBQUM7QUFBQSxzQkFDbkJBLEdBQUUsU0FBU2Isc0RBQXdEQSxpREFBbUQ7QUFBQSxvRUFDeEUsTUFBTSxhQUFhYSxHQUFFLEVBQUUsQ0FBQztBQUFBO0FBQUEsYUFFL0UsQ0FBQztBQUFBO0FBQUE7QUFBQSxVQUdKLFNBQVMsS0FBSyxXQUFXLEtBQUtiLGtEQUFvRDtBQUFBLDZDQUMvQyxZQUFZO0FBQUE7QUFBQTtBQUFBLCtDQUdWLEtBQUssR0FBRyxZQUFZLENBQUFVLE9BQUssUUFBUSxDQUFBRSxPQUFNLGlDQUFLQSxLQUFMLEVBQVEsS0FBS0YsR0FBRSxPQUFPLE1BQU0sRUFBRSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSTFGLEtBQUssTUFBTSxZQUFZLENBQUFBLE9BQUssUUFBUSxDQUFBRSxPQUFNLGlDQUFLQSxLQUFMLEVBQVEsUUFBUUYsR0FBRSxPQUFPLE1BQU0sRUFBRSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFLdkYsVUFBVSxJQUFJLFFBQU1WO0FBQUE7QUFBQSxtREFFZSxLQUFLLE9BQU8sU0FBUyxFQUFFLENBQUMsYUFBYSxNQUFNLFlBQVksRUFBRSxDQUFDO0FBQUEsb0JBQ3pGLEVBQUU7QUFBQTtBQUFBLGVBRVAsQ0FBQztBQUFBO0FBQUE7QUFBQSxtRUFHbUQsTUFBTTtBQUFBO0FBQUEsT0FFbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBS0MsV0FBVyxVQUFVQSwwQ0FBNEMsV0FBVyxRQUFRQSx3REFBMEQsV0FBVyxLQUFLLFdBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FJbkssV0FBVyxLQUFLLElBQUksQ0FBQ0MsSUFBR1EsT0FBTVQ7QUFBQSx3QkFDcEJTLEVBQUM7QUFBQSw4R0FDcUZSLEdBQUUsWUFBWSxJQUFJQSxHQUFFLFlBQVk7QUFBQSw0QkFDbEhBLEdBQUUsVUFBVTtBQUFBLHNCQUNsQixjQUFjQSxHQUFFLE1BQU0sQ0FBQztBQUFBLHNCQUN2QkEsR0FBRSxtQkFBbUIsUUFBRztBQUFBLHNCQUN4QkEsR0FBRSxRQUFRO0FBQUEsc0JBQ1ZGLFNBQVFFLEdBQUUsVUFBVSxDQUFDO0FBQUE7QUFBQSxhQUU5QixDQUFDO0FBQUE7QUFBQTtBQUFBLFVBR0osV0FBVyxLQUFLLFdBQVcsS0FBS0QsK0NBQWlEO0FBQUEsT0FDcEY7QUFBQTtBQUFBO0FBR1A7QUFNQSxTQUFTLFdBQVcsRUFBRSxLQUFLLEdBQXFCO0FBQzlDLFFBQU0sQ0FBQyxRQUFRLFNBQVMsSUFBSUMsR0FBUyxLQUFLO0FBQzFDLFdBQVNhLE1BQUtKLElBQUc7QUFDZixJQUFBQSxHQUFFLGdCQUFnQjtBQUNsQixjQUFVLFVBQVUsVUFBVSxJQUFJLEVBQUUsS0FBSyxNQUFNO0FBQzdDLGdCQUFVLElBQUk7QUFDZCxpQkFBVyxNQUFNLFVBQVUsS0FBSyxHQUFHLEdBQUk7QUFBQSxJQUN6QyxDQUFDO0FBQUEsRUFDSDtBQUNBLFNBQU9WLDZGQUErRmMsS0FBSSxJQUFJLFNBQVMsV0FBTSxNQUFNO0FBQ3JJO0FBRUEsU0FBUyxtQkFBbUI7QUFDMUIsU0FBT2Q7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RkFJbUYsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQjdHO0FBRUEsSUFBTSxvQkFBb0I7QUFFMUIsU0FBUyxrQkFBa0I7QUFqZjNCO0FBa2ZFLFFBQU0sYUFBYSxTQUFTLE1BQU0sSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSUMsR0FBUyxHQUFHO0FBQ3RDLFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSUEsR0FBUyxLQUFLO0FBQzlDLFFBQU0sQ0FBQyxLQUFLLE1BQU0sSUFBSUEsR0FBUyxJQUFJO0FBQ25DLFFBQU0sQ0FBQyxRQUFRLFNBQVMsSUFBSUEsR0FBUyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxRQUFRLFNBQVMsSUFBSUEsR0FBUyxDQUFDO0FBQ3RDLFFBQU0sQ0FBQyxpQkFBaUIsa0JBQWtCLElBQUlBLEdBQVMsRUFBRTtBQUd6RCxFQUFBRyxHQUFVLE1BQU07QUFDZCxVQUFNVyxLQUFJLFdBQVcsTUFBTTtBQUN6Qix5QkFBbUIsTUFBTTtBQUN6QixnQkFBVSxDQUFDO0FBQUEsSUFDYixHQUFHLEdBQUc7QUFDTixXQUFPLE1BQU0sYUFBYUEsRUFBQztBQUFBLEVBQzdCLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFFWCxRQUFNLGVBQWU7QUFBQSxJQUNuQixNQUFNLElBQUksWUFBWSxFQUFFLE9BQU8sbUJBQW1CLFFBQVEsUUFBUSxnQkFBZ0IsQ0FBQztBQUFBLElBQ25GLENBQUMsUUFBUSxlQUFlO0FBQUEsRUFDMUI7QUFFQSxpQkFBZSxhQUFhTCxJQUFHO0FBQzdCLElBQUFBLEdBQUUsZUFBZTtBQUNqQixVQUFNTSxLQUFJLFNBQVMsT0FBTyxFQUFFO0FBQzVCLFFBQUksQ0FBQ0EsTUFBS0EsS0FBSSxHQUFHO0FBQUUsYUFBTyxFQUFFLE1BQU0sU0FBUyxNQUFNLHVCQUF1QixDQUFDO0FBQUc7QUFBQSxJQUFRO0FBQ3BGLFFBQUksQ0FBQyxRQUFRLGtCQUFrQkEsRUFBQyxrREFBa0QsRUFBRztBQUNyRixnQkFBWSxJQUFJO0FBQ2hCLFdBQU8sSUFBSTtBQUNYLFFBQUk7QUFDRixZQUFNLE1BQU0sTUFBTSxJQUFJLFdBQVdBLEVBQUM7QUFDbEMsYUFBTyxFQUFFLE1BQU0sV0FBVyxNQUFNLGtCQUFhLElBQUksT0FBTywyQkFBMkIsSUFBSSxhQUFhLElBQUksQ0FBQztBQUN6RyxpQkFBVyxPQUFPO0FBQ2xCLG1CQUFhLE9BQU87QUFBQSxJQUN0QixTQUFTLEtBQUs7QUFDWixhQUFPLEVBQUUsTUFBTSxTQUFTLE1BQU0sSUFBSSxRQUFRLENBQUM7QUFBQSxJQUM3QyxVQUFFO0FBQ0Esa0JBQVksS0FBSztBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUVBLFFBQU0sUUFBUSxXQUFXO0FBQ3pCLFFBQU0sV0FBVyxRQUFRLE1BQU0sb0JBQW9CLElBQUk7QUFDdkQsUUFBTSxVQUFVLFFBQVEsTUFBTSxtQkFBbUIsSUFBSTtBQUVyRCxRQUFNLFVBQVEsa0JBQWEsU0FBYixtQkFBbUIsVUFBUztBQUMxQyxRQUFNLFVBQVUsU0FBUztBQUN6QixRQUFNLFVBQVUsU0FBUyxvQkFBb0I7QUFFN0MsU0FBT2hCO0FBQUE7QUFBQTtBQUFBLE9BR0YsZ0JBQWdCO0FBQUE7QUFBQSxNQUVqQixXQUFXLFVBQVVBLDBDQUE0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FJbkMsUUFBUSxlQUFlLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FJdkIsV0FBVyxTQUFTLGVBQWUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUlyQyxTQUFTLGVBQWUsQ0FBQztBQUFBO0FBQUE7QUFBQSxLQUd4RDtBQUFBO0FBQUEsTUFFQyxPQUFPQSxnQkFBa0IsZUFBZSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFRckQsWUFBWTtBQUFBO0FBQUE7QUFBQSwyREFHd0IsS0FBSztBQUFBLHNCQUMxQyxDQUFBVSxPQUFLLFNBQVNBLEdBQUUsT0FBTyxLQUFLLENBQUM7QUFBQTtBQUFBLGlFQUVjLFFBQVE7QUFBQSxZQUM3RCxXQUFXLG1CQUFjLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVczQixNQUFNO0FBQUEsb0JBQ0osQ0FBQUEsT0FBSyxVQUFVQSxHQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFJMUMsYUFBYSxVQUFVViwwQ0FDdkIsYUFBYSxRQUFRQSxvQ0FBc0MsYUFBYSxLQUFLLFdBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYWpGLGtCQUFhLFNBQWIsbUJBQW1CLFlBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQUcsT0FBS0g7QUFBQSx3QkFDbENHLEdBQUUsRUFBRTtBQUFBLHNCQUNOQSxHQUFFLEtBQUs7QUFBQTtBQUFBLG9CQUVUQSxHQUFFLGVBQWVIO0FBQUE7QUFBQSx3RUFFbUNHLEdBQUUsYUFBYSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQUEseUJBQzFFLFVBQVUsU0FBU0EsR0FBRSxZQUFZO0FBQUE7QUFBQSxzQkFFcENILDZDQUErQztBQUFBO0FBQUE7QUFBQSxvQkFHakRHLEdBQUUsMkJBQ0FILDBDQUE0Q0QsU0FBUUksR0FBRSx3QkFBd0IsQ0FBQyxZQUMvRUgsNkNBQStDO0FBQUE7QUFBQSxzQkFFL0NHLEdBQUUsa0JBQWtCO0FBQUEsc0JBQ3BCQSxHQUFFLGNBQWM7QUFBQSxzQkFDaEJBLEdBQUUsYUFBYSxJQUFJLEtBQUtBLEdBQUUsVUFBVSxFQUFFLGVBQWUsSUFBSSxRQUFHO0FBQUE7QUFBQSxhQUVyRSxDQUFDO0FBQUE7QUFBQTtBQUFBLFVBR0osVUFBVSxLQUFLSCx3QkFBMEIsa0JBQWtCLGdDQUFnQyxxQkFBcUIsUUFBUTtBQUFBLFVBQ3hILFFBQVEscUJBQXFCQTtBQUFBO0FBQUEsNEJBRVgsU0FBUyxDQUFDLElBQUksS0FBSyxJQUFJLFNBQVMsbUJBQW1CLEtBQUssQ0FBQyxPQUFPLE1BQU0sZUFBZSxDQUFDO0FBQUE7QUFBQSxrRUFFaEQsQ0FBQyxPQUFPLFlBQVksTUFBTSxVQUFVLENBQUFpQixPQUFLQSxLQUFJLGlCQUFpQixDQUFDO0FBQUEsa0VBQy9ELENBQUMsT0FBTyxZQUFZLE1BQU0sVUFBVSxDQUFBQSxPQUFLQSxLQUFJLGlCQUFpQixDQUFDO0FBQUE7QUFBQTtBQUFBLFNBR3hIO0FBQUEsT0FDRjtBQUFBO0FBQUE7QUFHUDtBQUVBLFNBQVMsaUJBQWlCO0FBNW9CMUI7QUE2b0JFLFFBQU0sWUFBWSxTQUFTLE1BQU0sSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSWhCLEdBQVMsRUFBRTtBQUMvQyxRQUFNLENBQUMsVUFBVSxXQUFXLElBQUlBLEdBQVMsS0FBSztBQUM5QyxRQUFNLENBQUMsYUFBYSxjQUFjLElBQUlBLEdBQTZDLElBQUk7QUFDdkYsUUFBTSxDQUFDLEtBQUssTUFBTSxJQUFJQSxHQUF3QixJQUFJO0FBRWxELGlCQUFlLGFBQWFTLElBQUc7QUFDN0IsSUFBQUEsR0FBRSxlQUFlO0FBQ2pCLFFBQUksQ0FBQyxXQUFXLEtBQUssRUFBRztBQUN4QixnQkFBWSxJQUFJO0FBQ2hCLFdBQU8sSUFBSTtBQUNYLFFBQUk7QUFDRixZQUFNLE1BQU0sTUFBTSxJQUFJLGFBQWEsV0FBVyxLQUFLLENBQUM7QUFDcEQscUJBQWUsRUFBRSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksUUFBUSxDQUFDO0FBQ2pELG9CQUFjLEVBQUU7QUFDaEIsZ0JBQVUsT0FBTztBQUFBLElBQ25CLFNBQVNBLElBQVE7QUFDZixhQUFPQSxHQUFFLE9BQU87QUFBQSxJQUNsQixVQUFFO0FBQ0Esa0JBQVksS0FBSztBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUVBLGlCQUFlLGFBQWEsSUFBWSxNQUFjO0FBQ3BELFFBQUksQ0FBQyxRQUFRLGVBQWUsSUFBSSxzQ0FBc0MsRUFBRztBQUN6RSxXQUFPLElBQUk7QUFDWCxRQUFJO0FBQ0YsWUFBTSxJQUFJLGFBQWEsRUFBRTtBQUN6QixXQUFJLDJDQUFhLFFBQU8sR0FBSSxnQkFBZSxJQUFJO0FBQy9DLGdCQUFVLE9BQU87QUFBQSxJQUNuQixTQUFTQSxJQUFRO0FBQ2YsYUFBT0EsR0FBRSxPQUFPO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBRUEsU0FBT1Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFNRCxPQUFPQSwrREFBaUUsR0FBRyxRQUFRO0FBQUE7QUFBQSxRQUVuRixlQUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQUkrQyxZQUFZLEtBQUs7QUFBQSxlQUN4RSxVQUFVLFNBQVMsWUFBWSxLQUFLO0FBQUE7QUFBQTtBQUFBLE9BRzVDO0FBQUE7QUFBQSxRQUVDLFVBQVUsV0FBV0Esa0VBQW9FO0FBQUEsVUFDekYsZUFBVSxTQUFWLG1CQUFnQixVQUFTLEtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVd4QixVQUFVLEtBQUssSUFBSSxDQUFBa0IsT0FBS2xCO0FBQUE7QUFBQSw4Q0FFUWtCLEdBQUUsSUFBSTtBQUFBLGdFQUNZbkIsU0FBUW1CLEdBQUUsVUFBVSxDQUFDO0FBQUEsZ0VBQ3JCQSxHQUFFLGVBQWVuQixTQUFRbUIsR0FBRSxZQUFZLElBQUksUUFBRztBQUFBO0FBQUEsa0VBRTVDLE1BQU0sYUFBYUEsR0FBRSxJQUFJQSxHQUFFLElBQUksQ0FBQztBQUFBO0FBQUE7QUFBQSxhQUdyRixDQUFDO0FBQUE7QUFBQTtBQUFBLE9BR1A7QUFBQSxRQUNDLENBQUMsVUFBVSxhQUFXLGVBQVUsU0FBVixtQkFBZ0IsWUFBVyxLQUFLbEI7QUFBQTtBQUFBLE9BRXZEO0FBQUE7QUFBQSx1QkFFZ0IsWUFBWTtBQUFBO0FBQUE7QUFBQSwyREFHd0IsVUFBVTtBQUFBLHNCQUMvQyxDQUFBVSxPQUFLLGNBQWNBLEdBQUUsT0FBTyxLQUFLLENBQUM7QUFBQTtBQUFBLGlFQUVTLFlBQVksQ0FBQyxXQUFXLEtBQUssQ0FBQztBQUFBLFlBQ25GLFdBQVcsbUJBQWMsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLckQ7QUFFQSxTQUFTLGVBQWU7QUE3dUJ4QjtBQTh1QkUsUUFBTSxnQkFBZ0IsU0FBUyxNQUFNLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUMxRCxRQUFNLENBQUMsTUFBTSxPQUFPLElBQUlULEdBQVMsSUFBSTtBQUNyQyxRQUFNLENBQUMsUUFBUSxTQUFTLElBQUlBLEdBQVMsS0FBSztBQUMxQyxRQUFNLENBQUMsS0FBSyxNQUFNLElBQUlBLEdBQVMsSUFBSTtBQUVuQyxFQUFBRyxHQUFVLE1BQU07QUFDZCxRQUFJLGNBQWMsUUFBUSxDQUFDLE1BQU07QUFDL0IsY0FBUSxjQUFjLElBQUk7QUFBQSxJQUM1QjtBQUFBLEVBQ0YsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDO0FBRXZCLGlCQUFlLFdBQVdNLElBQUc7QUFDM0IsSUFBQUEsR0FBRSxlQUFlO0FBQ2pCLGNBQVUsSUFBSTtBQUNkLFdBQU8sSUFBSTtBQUNYLFFBQUk7QUFDRixZQUFNLElBQUksZUFBZTtBQUFBLFFBQ3ZCLE1BQU0sS0FBSztBQUFBLFFBQ1gsY0FBYyxXQUFXLEtBQUssWUFBWTtBQUFBLFFBQzFDLGFBQWEsS0FBSyxjQUFjLFNBQVMsS0FBSyxhQUFhLEVBQUUsSUFBSTtBQUFBLFFBQ2pFLFFBQVEsS0FBSztBQUFBLFFBQ2IsYUFBYSxLQUFLO0FBQUEsTUFDcEIsQ0FBQztBQUNELGFBQU8sRUFBRSxNQUFNLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUNuRCxvQkFBYyxPQUFPO0FBQUEsSUFDdkIsU0FBUyxLQUFLO0FBQ1osYUFBTyxFQUFFLE1BQU0sU0FBUyxNQUFNLElBQUksUUFBUSxDQUFDO0FBQUEsSUFDN0MsVUFBRTtBQUNBLGdCQUFVLEtBQUs7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLGNBQWMsUUFBUyxRQUFPVjtBQUNsQyxNQUFJLGNBQWMsTUFBTyxRQUFPQSxvQ0FBc0MsY0FBYyxLQUFLO0FBRXpGLFNBQU9BO0FBQUE7QUFBQSxNQUVILE9BQU9BLGdCQUFrQixlQUFlLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLFFBQVE7QUFBQTtBQUFBLE1BRXRFLFFBQVFBO0FBQUE7QUFBQTtBQUFBLHlCQUdXLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FJRyxLQUFLLFFBQVEsRUFBRSxZQUFZLENBQUFVLE9BQUssUUFBUSxDQUFBRSxPQUFNLGlDQUFLQSxLQUFMLEVBQVEsTUFBTUYsR0FBRSxPQUFPLE1BQU0sRUFBRSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSXRGLEtBQUssVUFBVSxFQUFFLGFBQWEsQ0FBQUEsT0FBSyxRQUFRLENBQUFFLE9BQU0saUNBQUtBLEtBQUwsRUFBUSxRQUFRRixHQUFFLE9BQU8sTUFBTSxFQUFFLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkVBU3BDLE9BQU87QUFBQSwrREFDdEIsVUFBSyxpQkFBTCxZQUFxQixDQUFDO0FBQUEsMEJBQzFELENBQUFBLE9BQUssUUFBUSxDQUFBRSxPQUFNLGlDQUFLQSxLQUFMLEVBQVEsY0FBY0YsR0FBRSxPQUFPLE1BQU0sRUFBRSxDQUFDO0FBQUE7QUFBQTtBQUFBLDRFQUdULE9BQU87QUFBQSxtREFDaEMsS0FBSyxlQUFlLEVBQUU7QUFBQSwwQkFDL0MsQ0FBQUEsT0FBSyxRQUFRLENBQUFFLE9BQU0saUNBQUtBLEtBQUwsRUFBUSxhQUFhRixHQUFFLE9BQU8sU0FBUyxLQUFLLEVBQUUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBS2hCLE9BQU87QUFBQSx1RkFDSSxLQUFLLGVBQWUsRUFBRTtBQUFBLDBCQUNuRixDQUFBQSxPQUFLLFFBQVEsQ0FBQUUsT0FBTSxpQ0FBS0EsS0FBTCxFQUFRLGFBQWFGLEdBQUUsT0FBTyxNQUFNLEVBQUUsQ0FBQztBQUFBO0FBQUE7QUFBQSxtRUFHakIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSWhFLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFPQSxLQUFLLFdBQVcsUUFBUTtBQUFBLHNCQUN6QixZQUFZO0FBQ3BCLFFBQUksQ0FBQyxRQUFRLHNCQUFzQixFQUFHO0FBQ3RDLFFBQUk7QUFBRSxZQUFNLElBQUksZUFBZSxFQUFFLFFBQVEsU0FBUyxDQUFDO0FBQUcsb0JBQWMsT0FBTztBQUFHLGNBQVEsQ0FBQUUsT0FBTSxpQ0FBS0EsS0FBTCxFQUFRLFFBQVEsU0FBUyxFQUFFO0FBQUEsSUFBRyxTQUNuSCxLQUFLO0FBQUUsYUFBTyxFQUFFLE1BQU0sU0FBUyxNQUFNLElBQUksUUFBUSxDQUFDO0FBQUEsSUFBRztBQUFBLEVBQzlELENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFJVSxLQUFLLFdBQVcsUUFBUTtBQUFBLHNCQUN6QixZQUFZO0FBQ3BCLFFBQUk7QUFBRSxZQUFNLElBQUksZUFBZSxFQUFFLFFBQVEsU0FBUyxDQUFDO0FBQUcsb0JBQWMsT0FBTztBQUFHLGNBQVEsQ0FBQUEsT0FBTSxpQ0FBS0EsS0FBTCxFQUFRLFFBQVEsU0FBUyxFQUFFO0FBQUEsSUFBRyxTQUNuSCxLQUFLO0FBQUUsYUFBTyxFQUFFLE1BQU0sU0FBUyxNQUFNLElBQUksUUFBUSxDQUFDO0FBQUEsSUFBRztBQUFBLEVBQzlELENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS1I7QUFBQTtBQUVMO0FBUUEsSUFBTSxlQUFvRDtBQUFBLEVBQ3hELEVBQUUsSUFBSSxRQUFhLE9BQU8sZ0JBQWdCO0FBQUEsRUFDMUMsRUFBRSxJQUFJLGFBQWEsT0FBTyxZQUFZO0FBQUEsRUFDdEMsRUFBRSxJQUFJLFdBQWEsT0FBTyxVQUFVO0FBQ3RDO0FBRUEsSUFBTSxpQkFBaUI7QUFBQSxFQUNyQixFQUFFLE9BQU8sV0FBVyxPQUFPLFNBQVM7QUFBQSxFQUNwQyxFQUFFLE9BQU8sV0FBVyxPQUFPLE9BQU87QUFBQSxFQUNsQyxFQUFFLE9BQU8sV0FBVyxPQUFPLFVBQVU7QUFBQSxFQUNyQyxFQUFFLE9BQU8sV0FBVyxPQUFPLFFBQVE7QUFBQSxFQUNuQyxFQUFFLE9BQU8sV0FBVyxPQUFPLE1BQU07QUFBQSxFQUNqQyxFQUFFLE9BQU8sV0FBVyxPQUFPLFNBQVM7QUFBQSxFQUNwQyxFQUFFLE9BQU8sV0FBVyxPQUFPLE9BQU87QUFBQSxFQUNsQyxFQUFFLE9BQU8sV0FBVyxPQUFPLFFBQVE7QUFDckM7QUFNQSxTQUFTLHVCQUF1QixjQUFzQixZQUFnQztBQUNwRixRQUFNLGFBQWEsRUFBRSxJQUFJLFdBQVcsYUFBYSxlQUFlLE9BQU8sbUJBQW1CLGVBQWUsWUFBWSxlQUFlLEdBQUcsb0JBQW9CLEdBQUcsZ0JBQWdCLEdBQUcsUUFBUSxXQUFXO0FBQ3BNLFFBQU0sYUFBYSxlQUFlLFlBQzlCLGlDQUFLLGFBQUwsRUFBaUIsUUFBUSxVQUFVLEtBQ25DO0FBQ0osUUFBTSxZQUFZLGVBQWU7QUFDakMsUUFBTSxXQUFXO0FBQUEsSUFDZixhQUFhO0FBQUEsSUFBZSxlQUFlO0FBQUEsSUFBYyxNQUFNO0FBQUEsSUFDL0QsZUFBZTtBQUFBLEtBQ1gsWUFBWSxFQUFFLFFBQVEsV0FBVyxJQUFJLENBQUM7QUFHNUMsUUFBTSxRQUFRLEtBQUssVUFBVSxNQUFNLFlBQVksRUFBRTtBQUNqRCxRQUFNLFFBQVEsS0FBSyxVQUFVLEtBQUssVUFBVSxVQUFVLENBQUM7QUFHdkQsUUFBTSxTQUFTLFlBQ1gsa0JBQWtCLEtBQUssS0FBSyxLQUFLLCtZQUNqQztBQUVKLFNBQU8sdUJBQXVCLE1BQU0sV0FBVyxLQUFLLFVBQVUsUUFBUSxDQUFDLFdBQVcsS0FBSyxVQUFVLFVBQVUsQ0FBQztBQUM5RztBQUlBLFNBQVMsbUJBQ1AsT0FDQSxRQUNBLGNBQ0EsWUFDQSxRQUNBLFNBQ1E7QUFDUixRQUFNLEtBQUssVUFBVSxTQUFTLFlBQVk7QUFDMUMsUUFBTSxhQUFhLHVCQUF1QixjQUFjLFVBQVU7QUFDbEUsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQSxlQUFlLE9BQU87QUFBQSxJQUN0QjtBQUFBLElBQ0EscUNBQXFDLEVBQUU7QUFBQTtBQUFBLElBRXZDO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBLDhCQUE4QixZQUFZLGlCQUFpQixLQUFLLGtCQUFrQixNQUFNO0FBQUEsSUFDeEYsZ0JBQWdCLE1BQU07QUFBQSxJQUN0QjtBQUFBLEVBQ0YsRUFBRSxLQUFLLEVBQUU7QUFDWDtBQUVBLFNBQVMsWUFBWTtBQUNuQixRQUFNLGdCQUFnQixTQUFTLE1BQU0sSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRTFELFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSVgsR0FBMkIsT0FBTztBQUM1RCxRQUFNLENBQUMsUUFBUSxTQUFTLElBQUlBLEdBQVMsU0FBUztBQUU5QyxRQUFNLENBQUMsY0FBYyxlQUFlLElBQUlBLEdBQTJCLE9BQU87QUFDMUUsUUFBTSxDQUFDLGVBQWUsZ0JBQWdCLElBQUlBLEdBQVMsU0FBUztBQUU1RCxRQUFNLENBQUMsZUFBZSxnQkFBZ0IsSUFBSUEsR0FBcUIsTUFBTTtBQUVyRSxRQUFNLENBQUMsWUFBWSxhQUFhLElBQUlBLEdBQVMsS0FBSztBQUVsRCxNQUFJLGNBQWMsUUFBUyxRQUFPRDtBQUNsQyxNQUFJLGNBQWMsTUFBTyxRQUFPQSxvQ0FBc0MsY0FBYyxLQUFLO0FBRXpGLFFBQU0sVUFBVSxjQUFjLEtBQUssWUFBWSxPQUFPLFNBQVM7QUFDL0QsUUFBTSxTQUFTLE9BQU8sU0FBUztBQUMvQixRQUFNLFVBQVUsY0FBYyxLQUFLLGVBQWU7QUFHbEQsUUFBTSxRQUFrQixDQUFDLGtCQUFrQixJQUFJLEdBQUc7QUFDbEQsTUFBSSxVQUFVLFFBQVMsT0FBTSxLQUFLLGVBQWUsS0FBSyxHQUFHO0FBQ3pELE1BQUksT0FBTyxZQUFZLE1BQU0sVUFBVyxPQUFNLEtBQUssZ0JBQWdCLE1BQU0sR0FBRztBQUM1RSxRQUFNLFVBQVUsTUFBTSxTQUFTLElBQUksZUFBZSxNQUFNLEtBQUssWUFBWSxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzFGLFFBQU0sVUFBVSxnQkFBZ0IsT0FBTyxxQkFBcUIsT0FBTztBQUVuRSxRQUFNLFlBQVksR0FBRyxZQUFZLElBQUksYUFBYTtBQUNsRCxRQUFNLGNBQTBDO0FBQUEsSUFDOUMsTUFBVyxtQkFBbUIsY0FBYyxlQUFlLE1BQU0sUUFBYSxRQUFRLE9BQU87QUFBQSxJQUM3RixXQUFXLG1CQUFtQixjQUFjLGVBQWUsTUFBTSxhQUFhLFFBQVEsT0FBTztBQUFBLElBQzdGLFNBQVcsbUJBQW1CLGNBQWMsZUFBZSxNQUFNLFdBQWEsUUFBUSxPQUFPO0FBQUEsRUFDL0Y7QUFDQSxRQUFNLGtCQUFrQixHQUFHLGFBQWEsSUFBSSxTQUFTO0FBRXJELFdBQVMsa0JBQWtCZSxJQUFxQjtBQUM5QyxhQUFTQSxFQUFDO0FBQ1Ysb0JBQWdCQSxFQUFDO0FBQUEsRUFDbkI7QUFFQSxXQUFTLGtCQUFrQlAsSUFBVztBQUNwQyxjQUFVQSxFQUFDO0FBQUEsRUFDYjtBQUVBLFdBQVMsbUJBQW1CQSxJQUFXO0FBQ3JDLGNBQVVBLEVBQUM7QUFDWCxRQUFJLG9CQUFvQixLQUFLQSxFQUFDLEVBQUcsa0JBQWlCQSxFQUFDO0FBQUEsRUFDckQ7QUFFQSxXQUFTLGFBQWFXLElBQVc7QUFDL0IsY0FBVUEsRUFBQztBQUNYLHFCQUFpQkEsRUFBQztBQUFBLEVBQ3BCO0FBRUEsV0FBUyxXQUFXO0FBQ2xCLGNBQVUsVUFBVSxVQUFVLE9BQU8sRUFBRSxLQUFLLE1BQU07QUFDaEQsb0JBQWMsSUFBSTtBQUNsQixpQkFBVyxNQUFNLGNBQWMsS0FBSyxHQUFHLEdBQUk7QUFBQSxJQUM3QyxDQUFDO0FBQUEsRUFDSDtBQUVBLFNBQU9uQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWFRLENBQUMsU0FBUyxNQUFNLEVBQVksSUFBSSxDQUFBZSxPQUFLZjtBQUFBO0FBQUEsd0JBRTlCZSxFQUFDO0FBQUEsMEJBQ0Msc0JBQXNCLFVBQVVBLEtBQUksWUFBWSxHQUFHO0FBQUEsNEJBQ2pELE1BQU0sa0JBQWtCQSxFQUFDLENBQUM7QUFBQTtBQUFBLCtCQUV2Qix5Q0FBeUNBLEVBQUM7QUFBQTtBQUFBLHNCQUVuREEsT0FBTSxVQUFVLHVCQUFhLGdCQUFTO0FBQUE7QUFBQTtBQUFBLGVBRzdDLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBU1EsTUFBTTtBQUFBLDBCQUNKLENBQUNMLE9BQWEsa0JBQW1CQSxHQUFFLE9BQTRCLEtBQUssQ0FBQztBQUFBLDJCQUNwRSxDQUFDQSxPQUFhLG1CQUFvQkEsR0FBRSxPQUE0QixLQUFLLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUt6RSxNQUFNO0FBQUEsMEJBQ0osQ0FBQ0EsT0FBYSxrQkFBbUJBLEdBQUUsT0FBNEIsS0FBSyxDQUFDO0FBQUEsMkJBQ3BFLENBQUNBLE9BQWEsbUJBQW9CQSxHQUFFLE9BQTRCLEtBQUssQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU9qRixlQUFlLElBQUksQ0FBQyxFQUFFLE9BQU8sTUFBTSxNQUFNVjtBQUFBO0FBQUEsd0JBRWpDLEtBQUs7QUFBQSwwQkFDSCxLQUFLO0FBQUEsMEJBQ0wsa0JBQWtCLFdBQVcsUUFBUSxZQUFZLEdBQUc7QUFBQSwwQkFDcEQsZ0JBQWdCLEtBQUs7QUFBQSw0QkFDbkIsTUFBTSxhQUFhLEtBQUssQ0FBQztBQUFBO0FBQUEsZUFFdEMsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBVzBCLE9BQU87QUFBQTtBQUFBLDhCQUVuQixxQkFBcUIsYUFBYSxZQUFZLEdBQUcsWUFBWSxRQUFRO0FBQUEsa0JBQ2pGLGFBQWEsbUJBQWMscUJBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FTN0M7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0FBLDJCQUE2QixTQUFTO0FBQUEsSUFDdEM7QUFBQSxJQUNBO0FBQUEsRUFDRixFQUFFLElBQUksQ0FBQyxNQUFNUyxPQUFNVDtBQUFBLHlCQUNOUyxFQUFDO0FBQUEsOENBQ29CQSxLQUFJLENBQUM7QUFBQSwrQ0FDSixJQUFJO0FBQUE7QUFBQSxhQUV0QyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpR0FXbUYsWUFBWSxNQUFNLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBU2xGLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUl2QyxhQUFhLElBQUksU0FBT1Q7QUFBQTtBQUFBLHNCQUVoQixJQUFJLEVBQUU7QUFBQSx3QkFDSixpQkFBaUIsa0JBQWtCLElBQUksS0FBSyxZQUFZLEdBQUc7QUFBQSwwQkFDekQsTUFBTSxpQkFBaUIsSUFBSSxFQUFFLENBQUM7QUFBQSxpQkFDdkMsSUFBSSxLQUFLO0FBQUEsYUFDYixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSUksZUFBZTtBQUFBLHFCQUNaLFlBQVksYUFBYSxDQUFDO0FBQUE7QUFBQTtBQUFBLG9CQUczQiwyQkFBc0IsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUXZEO0FBTUEsU0FBUyxjQUFjO0FBQ3JCLFFBQU0sRUFBRSxNQUFNLFdBQVcsU0FBUyxNQUFNLElBQUksU0FBUyxNQUFNLFdBQVcsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6RixRQUFNLENBQUMsTUFBTSxPQUFPLElBQUlDLEdBQVMsRUFBRTtBQUNuQyxRQUFNLENBQUMsWUFBWSxhQUFhLElBQUlBLEdBQVMsRUFBRTtBQUMvQyxRQUFNLENBQUMsVUFBVSxXQUFXLElBQUlBLEdBQVMsS0FBSztBQUM5QyxRQUFNLENBQUMsVUFBVSxXQUFXLElBQUlBLEdBQVMsS0FBSztBQUM5QyxRQUFNLENBQUMsS0FBSyxNQUFNLElBQUlBLEdBQVMsSUFBSTtBQUVuQyxpQkFBZSxhQUFhUyxJQUFHO0FBQzdCLElBQUFBLEdBQUUsZUFBZTtBQUNqQixnQkFBWSxJQUFJO0FBQ2hCLFdBQU8sSUFBSTtBQUNYLFFBQUk7QUFDRixZQUFNLE1BQU0sTUFBTSxXQUFXLGVBQWUsS0FBSyxLQUFLLEdBQUcsV0FBVyxLQUFLLENBQUM7QUFDMUUsYUFBTyxTQUFTLE9BQU8sY0FBYyxJQUFJLElBQUk7QUFBQSxJQUMvQyxTQUFTLEtBQUs7QUFDWixhQUFPLEVBQUUsTUFBTSxTQUFTLE1BQU0sSUFBSSxRQUFRLENBQUM7QUFDM0Msa0JBQVksS0FBSztBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUVBLFFBQU0sbUJBQW1CLENBQUMsWUFDdkIsRUFBRSxRQUFRLGlCQUFpQixRQUFRLGdCQUFnQixHQUFFLE1BQU0sS0FBSztBQUVuRSxRQUFNLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxhQUFhLFVBQVUsU0FBUztBQUMzRSxRQUFNLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxTQUFTLGFBQWEsVUFBVSxXQUFXO0FBRWhGLFNBQU9WLE1BQVEsQ0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFRakIsZ0JBQWdCQTtBQUFBO0FBQUE7QUFBQSxvREFHNEIsTUFBTTtBQUFFLGdCQUFZLElBQUk7QUFBRyxXQUFPLElBQUk7QUFBQSxFQUFHLENBQUM7QUFBQTtBQUFBLE9BRXZGO0FBQUE7QUFBQSxRQUVDLE9BQU9BLGdCQUFrQixlQUFlLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLFFBQVE7QUFBQTtBQUFBLFFBRXRFLFVBQVVBLG9EQUNWLFFBQVFBLG9DQUFzQyxLQUFLLFdBQ25ELG1CQUFtQixDQUFDLFdBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBT2YsTUFBTSxZQUFZLElBQUksQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBS3ZDLG1CQUFtQixXQUFXQTtBQUFBO0FBQUE7QUFBQSxjQUd4QixPQUFPQSxnQkFBa0IsZUFBZSxJQUFJLElBQUksRUFBRSwrQkFBK0IsSUFBSSxJQUFJLFFBQVE7QUFBQSw2QkFDbEYsWUFBWTtBQUFBO0FBQUE7QUFBQSxrREFHUyxJQUFJO0FBQUEsNEJBQzFCLENBQUFVLE9BQUssUUFBUUEsR0FBRSxPQUFPLEtBQUssQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLDhFQUlzQixPQUFPO0FBQUEsbURBQ2xDLFVBQVU7QUFBQSw0QkFDakMsQ0FBQUEsT0FBSyxjQUFjQSxHQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUVBSVcsUUFBUTtBQUFBLG9CQUM3RCxXQUFXLG1CQUFjLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSw0QkFHbEMsTUFBTTtBQUFFLGdCQUFZLEtBQUs7QUFBRyxZQUFRLEVBQUU7QUFBRyxrQkFBYyxFQUFFO0FBQUcsV0FBTyxJQUFJO0FBQUEsRUFBRyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTTNGVjtBQUFBO0FBQUEsY0FFRSxZQUFZQTtBQUFBO0FBQUE7QUFBQSxrQkFHUixPQUFPQSxnQkFBa0IsZUFBZSxJQUFJLElBQUksRUFBRSwrQkFBK0IsSUFBSSxJQUFJLFFBQVE7QUFBQSxpQ0FDbEYsWUFBWTtBQUFBO0FBQUE7QUFBQSxzREFHUyxJQUFJO0FBQUEsZ0NBQzFCLENBQUFVLE9BQUssUUFBUUEsR0FBRSxPQUFPLEtBQUssQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtGQUlzQixPQUFPO0FBQUEsdURBQ2xDLFVBQVU7QUFBQSxnQ0FDakMsQ0FBQUEsT0FBSyxjQUFjQSxHQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkVBSVcsUUFBUTtBQUFBLHdCQUM3RCxXQUFXLG1CQUFjLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxnQ0FHbEMsTUFBTTtBQUFFLGdCQUFZLEtBQUs7QUFBRyxZQUFRLEVBQUU7QUFBRyxrQkFBYyxFQUFFO0FBQUcsV0FBTyxJQUFJO0FBQUEsRUFBRyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTTlGO0FBQUE7QUFBQSxnQkFFRyxhQUFhLFVBQVUsSUFBSSxDQUFBUyxPQUFLbkI7QUFBQSx5QkFDdkJtQixHQUFFLElBQUksU0FBUyxjQUFjQSxHQUFFLElBQUksR0FBRztBQUFBO0FBQUEsZ0NBRS9CLENBQUFULE9BQUtBLEdBQUUsY0FBYyxNQUFNLGNBQWMsZ0JBQWdCO0FBQUEsK0JBQzFELENBQUFBLE9BQUtBLEdBQUUsY0FBYyxNQUFNLGNBQWMsZUFBZTtBQUFBO0FBQUE7QUFBQSxzRkFHRFMsR0FBRSxJQUFJO0FBQUEsdUVBQ3JCQSxHQUFFLElBQUk7QUFBQTtBQUFBLGtDQUUzQyxTQUFTLGlCQUFpQkEsR0FBRSxNQUFNLENBQUMsRUFBRSxJQUFJQSxHQUFFLE1BQU07QUFBQTtBQUFBO0FBQUEsZUFHcEUsQ0FBQztBQUFBO0FBQUE7QUFBQSxTQUlWO0FBQUE7QUFBQSxNQUVBLENBQVE7QUFDZDtBQU1BLElBQU0sUUFBUTtBQUFBLEVBQ1osRUFBRSxJQUFJLFlBQWUsT0FBTyxzQkFBa0IsV0FBVyxhQUFhO0FBQUEsRUFDdEUsRUFBRSxJQUFJLFNBQWUsT0FBTyxtQkFBbUIsV0FBVyxVQUFVO0FBQUEsRUFDcEUsRUFBRSxJQUFJLFdBQWUsT0FBTyxxQkFBbUIsV0FBVyxZQUFZO0FBQUEsRUFDdEUsRUFBRSxJQUFJLGVBQWUsT0FBTyx5QkFBbUIsV0FBVyxnQkFBZ0I7QUFBQSxFQUMxRSxFQUFFLElBQUksZUFBZSxPQUFPLHlCQUFvQixXQUFXLGdCQUFnQjtBQUFBLEVBQzNFLEVBQUUsSUFBSSxZQUFlLE9BQU8sc0JBQW1CLFdBQVcsYUFBYTtBQUFBLEVBQ3ZFLEVBQUUsSUFBSSxZQUFjLE9BQU8seUJBQW1CLFdBQVcsYUFBYTtBQUN4RTtBQUVBLFNBQVMsTUFBTTtBQUNiLFFBQU0sVUFBVSxNQUFPLE9BQU8sU0FBUyxLQUFLLE1BQU0sQ0FBQyxLQUFLO0FBQ3hELFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSWxCLEdBQVMsT0FBTztBQUNwRCxRQUFNLENBQUMsY0FBYyxlQUFlLElBQUlBLEdBQVMsRUFBRTtBQUNuRCxRQUFNLENBQUMsV0FBVyxZQUFZLElBQUlBLEdBQVMsQ0FBQyxDQUFDO0FBRTdDLEVBQUFHLEdBQVUsTUFBTTtBQUVkLFFBQUksT0FBTyxTQUFTLFNBQVMsVUFBVyxRQUFPLFNBQVMsUUFBUSxjQUFjO0FBQzlFLFFBQUksWUFBWSxFQUFFLEtBQUssQ0FBQUQsT0FBSyxnQkFBZ0JBLEdBQUUsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLE1BQU07QUFBQSxJQUFDLENBQUM7QUFDM0UsZUFBVyxjQUFjLEVBQUUsS0FBSyxVQUFRLGFBQWEsSUFBSSxDQUFDLEVBQUUsTUFBTSxNQUFNO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFDNUUsR0FBRyxDQUFDLENBQUM7QUFFTCxFQUFBQyxHQUFVLE1BQU07QUFDZCxVQUFNLGVBQWUsTUFBTSxjQUFjLFFBQVEsQ0FBQztBQUNsRCxXQUFPLGlCQUFpQixjQUFjLFlBQVk7QUFDbEQsV0FBTyxNQUFNLE9BQU8sb0JBQW9CLGNBQWMsWUFBWTtBQUFBLEVBQ3BFLEdBQUcsQ0FBQyxDQUFDO0FBRUwsUUFBTSxPQUFPLE1BQU0sS0FBSyxDQUFBTyxPQUFLQSxHQUFFLE9BQU8sVUFBVSxLQUFLLE1BQU0sQ0FBQztBQUU1RCxTQUFPWCxNQUFRLENBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlmLFVBQVUsU0FBUyxJQUFJQTtBQUFBO0FBQUEsb0JBRWIsSUFBSTtBQUFBLHVCQUNELENBQUFVLE9BQUs7QUFBRSxXQUFPLFNBQVMsT0FBTyxjQUFjQSxHQUFFLE9BQU8sS0FBSztBQUFBLEVBQUssQ0FBQztBQUFBO0FBQUEsY0FFekUsVUFBVSxJQUFJLENBQUFTLE9BQUtuQjtBQUFBLDRCQUNMbUIsR0FBRSxJQUFJLFVBQVVBLEdBQUUsSUFBSSxJQUFJQSxHQUFFLElBQUk7QUFBQSxhQUMvQyxDQUFDO0FBQUE7QUFBQSxZQUVGbkI7QUFBQSwwQ0FDOEIsZ0JBQWdCLElBQUk7QUFBQSxTQUNyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVlDLE1BQU0sSUFBSSxDQUFBVyxPQUFLWDtBQUFBLG1CQUNOVyxHQUFFLEVBQUU7QUFBQSxvQkFDSCxXQUFXLGVBQWVBLEdBQUUsS0FBSyxZQUFZLEVBQUUsRUFBRTtBQUFBLG1CQUNsRCxJQUFJQSxHQUFFLEVBQUUsRUFBRTtBQUFBLHNCQUNQLE1BQU0sY0FBY0EsR0FBRSxFQUFFLENBQUM7QUFBQSxjQUNqQ0EsR0FBRSxLQUFLO0FBQUE7QUFBQSxTQUVaLENBQUM7QUFBQTtBQUFBO0FBQUEsV0FHQyxLQUFLLFNBQVM7QUFBQTtBQUFBO0FBQUEsTUFHbkIsQ0FBUTtBQUNkO0FBRUE7QUFBQSxFQUNFLFNBQVNYLE1BQVEsV0FBVyxRQUFRQSxNQUFRLEdBQUc7QUFBQSxFQUMvQyxTQUFTLGVBQWUsS0FBSztBQUMvQjsiLAogICJuYW1lcyI6IFsic2xpY2UiLCAib3B0aW9ucyIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgInJlcmVuZGVyUXVldWUiLCAicHJldkRlYm91bmNlIiwgImRlZmVyIiwgImRlcHRoU29ydCIsICJDQVBUVVJFX1JFR0VYIiwgImV2ZW50Q2xvY2siLCAiZXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJpIiwgIkVNUFRZX09CSiIsICJFTVBUWV9BUlIiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgImlzQXJyYXkiLCAiQXJyYXkiLCAiYXNzaWduIiwgIm9iaiIsICJwcm9wcyIsICJyZW1vdmVOb2RlIiwgIm5vZGUiLCAicGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2hpbGRyZW4iLCAia2V5IiwgInJlZiIsICJub3JtYWxpemVkUHJvcHMiLCAiYXJndW1lbnRzIiwgImxlbmd0aCIsICJjYWxsIiwgImRlZmF1bHRQcm9wcyIsICJjcmVhdGVWTm9kZSIsICJvcmlnaW5hbCIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgIl9faSIsICJfX3UiLCAiRnJhZ21lbnQiLCAicHJvcHMiLCAiY2hpbGRyZW4iLCAiQmFzZUNvbXBvbmVudCIsICJjb250ZXh0IiwgInRoaXMiLCAiZ2V0RG9tU2libGluZyIsICJ2bm9kZSIsICJjaGlsZEluZGV4IiwgIl9fIiwgIl9faSIsICJzaWJsaW5nIiwgIl9fayIsICJsZW5ndGgiLCAiX19lIiwgInR5cGUiLCAicmVuZGVyQ29tcG9uZW50IiwgImNvbXBvbmVudCIsICJfX1AiLCAiX19kIiwgIm9sZFZOb2RlIiwgIl9fdiIsICJvbGREb20iLCAiY29tbWl0UXVldWUiLCAicmVmUXVldWUiLCAibmV3Vk5vZGUiLCAiYXNzaWduIiwgIm9wdGlvbnMiLCAiZGlmZiIsICJfX24iLCAibmFtZXNwYWNlVVJJIiwgIl9fdSIsICJjb21taXRSb290IiwgInVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIiwgIl9fYyIsICJiYXNlIiwgInNvbWUiLCAiY2hpbGQiLCAiZW5xdWV1ZVJlbmRlciIsICJjIiwgInJlcmVuZGVyUXVldWUiLCAicHVzaCIsICJwcm9jZXNzIiwgIl9fciIsICJwcmV2RGVib3VuY2UiLCAiZGVib3VuY2VSZW5kZXJpbmciLCAiZGVmZXIiLCAibCIsICJzb3J0IiwgImRlcHRoU29ydCIsICJzaGlmdCIsICJkaWZmQ2hpbGRyZW4iLCAicGFyZW50RG9tIiwgInJlbmRlclJlc3VsdCIsICJuZXdQYXJlbnRWTm9kZSIsICJvbGRQYXJlbnRWTm9kZSIsICJnbG9iYWxDb250ZXh0IiwgIm5hbWVzcGFjZSIsICJleGNlc3NEb21DaGlsZHJlbiIsICJpc0h5ZHJhdGluZyIsICJpIiwgImNoaWxkVk5vZGUiLCAibmV3RG9tIiwgImZpcnN0Q2hpbGREb20iLCAicmVzdWx0IiwgInNob3VsZFBsYWNlIiwgIm9sZENoaWxkcmVuIiwgIkVNUFRZX0FSUiIsICJuZXdDaGlsZHJlbkxlbmd0aCIsICJjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IiwgIkVNUFRZX09CSiIsICJyZWYiLCAiYXBwbHlSZWYiLCAiaW5zZXJ0IiwgIm5leHRTaWJsaW5nIiwgInNrZXdlZEluZGV4IiwgIm1hdGNoaW5nSW5kZXgiLCAib2xkQ2hpbGRyZW5MZW5ndGgiLCAicmVtYWluaW5nT2xkQ2hpbGRyZW4iLCAic2tldyIsICJBcnJheSIsICJjb25zdHJ1Y3RvciIsICJTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAiaXNBcnJheSIsICJfX2IiLCAia2V5IiwgImZpbmRNYXRjaGluZ0luZGV4IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAicGFyZW50Tm9kZSIsICJpbnNlcnRCZWZvcmUiLCAibm9kZVR5cGUiLCAiZmluZE1hdGNoaW5nSW5kZXgiLCAiY2hpbGRWTm9kZSIsICJvbGRDaGlsZHJlbiIsICJza2V3ZWRJbmRleCIsICJyZW1haW5pbmdPbGRDaGlsZHJlbiIsICJ4IiwgInkiLCAiY2hpbGRJbmRleCIsICJrZXkiLCAidHlwZSIsICJvbGRWTm9kZSIsICJtYXRjaGVkIiwgIl9fdSIsICJzaG91bGRTZWFyY2giLCAibGVuZ3RoIiwgInNldFN0eWxlIiwgInN0eWxlIiwgInZhbHVlIiwgInNldFByb3BlcnR5IiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJ0ZXN0IiwgImRvbSIsICJuYW1lIiwgIm9sZFZhbHVlIiwgIm5hbWVzcGFjZSIsICJ1c2VDYXB0dXJlIiwgImxvd2VyQ2FzZU5hbWUiLCAibyIsICJjc3NUZXh0IiwgInJlcGxhY2UiLCAiQ0FQVFVSRV9SRUdFWCIsICJ0b0xvd2VyQ2FzZSIsICJzbGljZSIsICJsIiwgIl9hdHRhY2hlZCIsICJldmVudENsb2NrIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiZXZlbnRQcm94eSIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJjcmVhdGVFdmVudFByb3h5IiwgInRoaXMiLCAiZXZlbnRIYW5kbGVyIiwgIl9kaXNwYXRjaGVkIiwgIm9wdGlvbnMiLCAiZXZlbnQiLCAiZGlmZiIsICJwYXJlbnREb20iLCAibmV3Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJleGNlc3NEb21DaGlsZHJlbiIsICJjb21taXRRdWV1ZSIsICJvbGREb20iLCAiaXNIeWRyYXRpbmciLCAicmVmUXVldWUiLCAidG1wIiwgImMiLCAiaXNOZXciLCAib2xkUHJvcHMiLCAib2xkU3RhdGUiLCAic25hcHNob3QiLCAiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwgIm5ld1Byb3BzIiwgImlzQ2xhc3NDb21wb25lbnQiLCAicHJvdmlkZXIiLCAiY29tcG9uZW50Q29udGV4dCIsICJyZW5kZXJIb29rIiwgImNvdW50IiwgInJlbmRlclJlc3VsdCIsICJpIiwgIm5ld1R5cGUiLCAiY29uc3RydWN0b3IiLCAiX19lIiwgIl9fYiIsICJvdXRlciIsICJwcm9wcyIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgImNvbnRleHRUeXBlIiwgIl9fYyIsICJfXyIsICJfX0UiLCAiQmFzZUNvbXBvbmVudCIsICJkb1JlbmRlciIsICJzdWIiLCAic3RhdGUiLCAiX19uIiwgIl9fZCIsICJfX2giLCAiX3NiIiwgIl9fcyIsICJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCAiYXNzaWduIiwgIl9fdiIsICJjb21wb25lbnRXaWxsTW91bnQiLCAiY29tcG9uZW50RGlkTW91bnQiLCAicHVzaCIsICJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJfX2siLCAic29tZSIsICJ2bm9kZSIsICJFTVBUWV9BUlIiLCAiYXBwbHkiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJjb21wb25lbnREaWRVcGRhdGUiLCAiY29udGV4dCIsICJfX1AiLCAiX19yIiwgImdldENoaWxkQ29udGV4dCIsICJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsICJGcmFnbWVudCIsICJjbG9uZU5vZGUiLCAiY2hpbGRyZW4iLCAiZGlmZkNoaWxkcmVuIiwgImlzQXJyYXkiLCAiYmFzZSIsICJ0aGVuIiwgIk1PREVfSFlEUkFURSIsICJub2RlVHlwZSIsICJuZXh0U2libGluZyIsICJpbmRleE9mIiwgInJlbW92ZU5vZGUiLCAibWFya0FzRm9yY2UiLCAiZGlmZkVsZW1lbnROb2RlcyIsICJkaWZmZWQiLCAiY29tbWl0Um9vdCIsICJyb290IiwgImFwcGx5UmVmIiwgImNiIiwgImNhbGwiLCAibm9kZSIsICJtYXAiLCAibmV3SHRtbCIsICJvbGRIdG1sIiwgIm5ld0NoaWxkcmVuIiwgImlucHV0VmFsdWUiLCAiY2hlY2tlZCIsICJFTVBUWV9PQkoiLCAibG9jYWxOYW1lIiwgImRvY3VtZW50IiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnROUyIsICJpcyIsICJfX20iLCAiZGF0YSIsICJjaGlsZE5vZGVzIiwgImF0dHJpYnV0ZXMiLCAiX19odG1sIiwgImlubmVySFRNTCIsICJjb250ZW50IiwgImdldERvbVNpYmxpbmciLCAidW5kZWZpbmVkIiwgInJlZiIsICJoYXNSZWZVbm1vdW50IiwgImN1cnJlbnQiLCAidW5tb3VudCIsICJwYXJlbnRWTm9kZSIsICJza2lwUmVtb3ZlIiwgInIiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAicmVwbGFjZU5vZGUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAibmFtZXNwYWNlVVJJIiwgImZpcnN0Q2hpbGQiLCAic2xpY2UiLCAiRU1QVFlfQVJSIiwgIm9wdGlvbnMiLCAiX19lIiwgImVycm9yIiwgInZub2RlIiwgIm9sZFZOb2RlIiwgImVycm9ySW5mbyIsICJjb21wb25lbnQiLCAiY3RvciIsICJoYW5kbGVkIiwgIl9fIiwgIl9fYyIsICJjb25zdHJ1Y3RvciIsICJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCAic2V0U3RhdGUiLCAiX19kIiwgImNvbXBvbmVudERpZENhdGNoIiwgIl9fRSIsICJlIiwgInZub2RlSWQiLCAiaXNWYWxpZEVsZW1lbnQiLCAiQmFzZUNvbXBvbmVudCIsICJwcm90b3R5cGUiLCAidXBkYXRlIiwgImNhbGxiYWNrIiwgInMiLCAidGhpcyIsICJfX3MiLCAic3RhdGUiLCAiYXNzaWduIiwgInByb3BzIiwgIl9fdiIsICJfc2IiLCAicHVzaCIsICJlbnF1ZXVlUmVuZGVyIiwgImZvcmNlVXBkYXRlIiwgIl9faCIsICJyZW5kZXIiLCAiRnJhZ21lbnQiLCAicmVyZW5kZXJRdWV1ZSIsICJkZWZlciIsICJQcm9taXNlIiwgInRoZW4iLCAiYmluZCIsICJyZXNvbHZlIiwgInNldFRpbWVvdXQiLCAiZGVwdGhTb3J0IiwgImEiLCAiYiIsICJfX2IiLCAicHJvY2VzcyIsICJfX3IiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJpIiwgImN1cnJlbnRJbmRleCIsICJjdXJyZW50Q29tcG9uZW50IiwgInByZXZpb3VzQ29tcG9uZW50IiwgInByZXZSYWYiLCAiY3VycmVudEhvb2siLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAib3B0aW9ucyIsICJfb3B0aW9ucyIsICJvbGRCZWZvcmVEaWZmIiwgIl9fYiIsICJvbGRCZWZvcmVSZW5kZXIiLCAiX19yIiwgIm9sZEFmdGVyRGlmZiIsICJkaWZmZWQiLCAib2xkQ29tbWl0IiwgIl9fYyIsICJvbGRCZWZvcmVVbm1vdW50IiwgInVubW91bnQiLCAib2xkUm9vdCIsICJfXyIsICJnZXRIb29rU3RhdGUiLCAiaW5kZXgiLCAidHlwZSIsICJfX2giLCAiaG9va3MiLCAiX19IIiwgImxlbmd0aCIsICJwdXNoIiwgInVzZVN0YXRlIiwgImluaXRpYWxTdGF0ZSIsICJ1c2VSZWR1Y2VyIiwgImludm9rZU9yUmV0dXJuIiwgInJlZHVjZXIiLCAiaW5pdCIsICJob29rU3RhdGUiLCAiX3JlZHVjZXIiLCAiYWN0aW9uIiwgImN1cnJlbnRWYWx1ZSIsICJfX04iLCAibmV4dFZhbHVlIiwgInNldFN0YXRlIiwgIl9fZiIsICJ1cGRhdGVIb29rU3RhdGUiLCAicCIsICJzIiwgImMiLCAic3RhdGVIb29rcyIsICJmaWx0ZXIiLCAieCIsICJldmVyeSIsICJwcmV2U2N1IiwgImNhbGwiLCAidGhpcyIsICJzaG91bGRVcGRhdGUiLCAicHJvcHMiLCAic29tZSIsICJob29rSXRlbSIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAicHJldkNXVSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgIl9fZSIsICJ0bXAiLCAidXNlRWZmZWN0IiwgImNhbGxiYWNrIiwgImFyZ3MiLCAic3RhdGUiLCAiX19zIiwgImFyZ3NDaGFuZ2VkIiwgIl9wZW5kaW5nQXJncyIsICJ1c2VSZWYiLCAiaW5pdGlhbFZhbHVlIiwgImN1cnJlbnRIb29rIiwgInVzZU1lbW8iLCAiY3VycmVudCIsICJ1c2VNZW1vIiwgImZhY3RvcnkiLCAiYXJncyIsICJzdGF0ZSIsICJnZXRIb29rU3RhdGUiLCAiY3VycmVudEluZGV4IiwgImFyZ3NDaGFuZ2VkIiwgIl9fSCIsICJfXyIsICJfX2giLCAidXNlQ2FsbGJhY2siLCAiY2FsbGJhY2siLCAiY3VycmVudEhvb2siLCAiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsICJjb21wb25lbnQiLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAic2hpZnQiLCAiaG9va3MiLCAiX19IIiwgIl9fUCIsICJfX2giLCAic29tZSIsICJpbnZva2VDbGVhbnVwIiwgImludm9rZUVmZmVjdCIsICJlIiwgIm9wdGlvbnMiLCAiX19lIiwgIl9fdiIsICJfX2IiLCAidm5vZGUiLCAiY3VycmVudENvbXBvbmVudCIsICJvbGRCZWZvcmVEaWZmIiwgIl9fIiwgInBhcmVudERvbSIsICJfX2siLCAiX19tIiwgIm9sZFJvb3QiLCAiX19yIiwgIm9sZEJlZm9yZVJlbmRlciIsICJjdXJyZW50SW5kZXgiLCAiX19jIiwgInByZXZpb3VzQ29tcG9uZW50IiwgImhvb2tJdGVtIiwgIl9fTiIsICJfcGVuZGluZ0FyZ3MiLCAiZGlmZmVkIiwgIm9sZEFmdGVyRGlmZiIsICJjIiwgImxlbmd0aCIsICJwdXNoIiwgInByZXZSYWYiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFmdGVyTmV4dEZyYW1lIiwgImNvbW1pdFF1ZXVlIiwgImZpbHRlciIsICJjYiIsICJvbGRDb21taXQiLCAidW5tb3VudCIsICJvbGRCZWZvcmVVbm1vdW50IiwgImhhc0Vycm9yZWQiLCAicyIsICJIQVNfUkFGIiwgImNhbGxiYWNrIiwgInJhZiIsICJkb25lIiwgImNsZWFyVGltZW91dCIsICJ0aW1lb3V0IiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgInNldFRpbWVvdXQiLCAiaG9vayIsICJjb21wIiwgImNsZWFudXAiLCAiYXJnc0NoYW5nZWQiLCAib2xkQXJncyIsICJuZXdBcmdzIiwgImFyZyIsICJpbmRleCIsICJpbnZva2VPclJldHVybiIsICJmIiwgIm4iLCAidCIsICJzIiwgInIiLCAiZSIsICJ1IiwgImgiLCAicCIsICJhIiwgImwiLCAibSIsICJjIiwgImkiLCAidiIsICJtaW4iLCAibWF4IiwgIk0iLCAieCIsICJfIiwgImEiLCAicCIsICJuIiwgIm8iLCAiayIsICJ0IiwgImoiLCAiZCIsICJoIiwgIm0iLCAicyIsICJ5IiwgInR6RGF0ZSIsICJmbXREYXRlIiwgImUiLCAidyIsICJ1IiwgImwiLCAiSCIsICJWIiwgImdhcHMiLCAicmVjdCIsICJnIiwgInkyIiwgInIiLCAicG9pbnRzIiwgInNlcmllc0lkeCIsICJzaXplIiwgImQyIiwgImZvbnQiLCAiZiIsICJvZmYiLCAia2V5IiwgInNjIiwgInNlbGYiLCAiX2EiLCAib3B0cyIsICJzaWRlc1dpdGhBeGVzIiwgImpvaW4iLCAiZmFjZXQiLCAiZGF0YSIsICJ4U2NhbGVLZXkiLCAiaWR4cyIsICJzdHJva2VQYXRoIiwgInN0cm9rZVN0eWxlIiwgImZpbGxQYXRoIiwgImZpbGxTdHlsZSIsICJzaGlmdEFtdCIsICJ0aWNrcyIsICJib3JkZXIiLCAiZ3JpZCIsICJpMiIsICJjYW4iLCAic2VyaWVzSWR4TWF0Y2hlciIsICJhMiIsICJkYXlzIiwgInEiLCAiZm10RGF0ZSIsICJtIiwgImQiLCAicSIsICJzIiwgInkiLCAiZGF5cyIsICJBIiwgInUiLCAidiIsICJpIiwgImUiLCAicCIsICJmIiwgInciLCAiY29weSIsICJ0IiwgIm4iLCAibyIsICJrIiwgImMiXQp9Cg==
