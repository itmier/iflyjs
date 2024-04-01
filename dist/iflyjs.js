const l = (e) => Object.prototype.toString.call(e).split(" ")[1].slice(0, -1).toLowerCase(), m = (e, n) => typeof n == "string" ? l(e) === n.toLocaleLowerCase() : l(e) === n;
function p() {
  const e = typeof window < "u", n = typeof window.WXEnvironment < "u" && !!window.WXEnvironment.platform, o = n && window.WXEnvironment.platform.toLowerCase(), t = e && window.navigator.userAgent.toLowerCase(), i = t && /msie|trident/.test(t), r = t && t.indexOf("msie 9.0") > 0, s = t && t.indexOf("edge/") > 0, u = t && t.indexOf("android") > 0 || o === "android", c = t && /iphone|ipad|ipod|ios/.test(t) || o === "ios", d = t && /chrome\/\d+/.test(t) && !s, a = t && /safari/.test(t) && !d && !u;
  return {
    isWeex: n,
    isIE: i,
    isIE9: r,
    isEdge: s,
    isAndroid: u,
    isIOS: c,
    isChrome: d,
    isSafari: a
  };
}
function g(e) {
  const n = document.querySelectorAll(e);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : n;
}
function h(e) {
  const n = document.querySelector(e);
  if (n) {
    const { top: o, left: t } = n.getBoundingClientRect(), i = document.documentElement.scrollLeft, r = document.documentElement.scrollTop;
    return {
      x: t + i,
      y: o + r
    };
  }
}
function x(e) {
  const n = document.querySelector(e);
  if (n) {
    const { top: o, left: t } = n.getBoundingClientRect();
    return {
      x: t,
      y: o
    };
  }
}
function C(e, n) {
  const o = n ? "?" : "", t = [];
  for (const i in e) {
    const r = e[i];
    ["", void 0, null].includes(r) || (r.constructor === Array ? r.forEach((s) => {
      t.push(encodeURIComponent(i) + "[]=" + encodeURIComponent(s));
    }) : t.push(encodeURIComponent(i) + "=" + encodeURIComponent(r)));
  }
  return t.length ? o + t.join("&") : "";
}
function y(e) {
  const n = {}, o = e.split("&");
  for (let t of o) {
    let [i, r] = t.split("=");
    n[decodeURIComponent(i)] = decodeURIComponent(r);
  }
  return n;
}
function E(e) {
  if (typeof e != "string")
    throw new Error("Please enter correct parameters.");
  return ~e.indexOf("?") && (e = e.slice(1)), y(e);
}
function v(e, n) {
  const o = new Date(e), i = new Date(n).getTime() - o.getTime(), r = Math.floor(i);
  return r > 1e3 ? (r / 1e3).toFixed(2) + "s" : r > 1e3 * 60 ? (r / 1e3 / 60).toFixed(1) + "min" : r > 1e3 * 60 * 60 ? (r / 1e3 / 60 / 60).toFixed(1) + "h" : Math.floor(r) + "ms";
}
class S {
  constructor() {
  }
  static createUpload({ accept: n } = {}) {
    const o = document.createElement("input");
    return o.type = "file", n && (o.accept = n), o.style.display = "none", p(), document.body.appendChild(o), Promise.resolve(o);
  }
  static destroy(n) {
    var o;
    (o = n == null ? void 0 : n.parentNode) == null || o.removeChild(n);
  }
}
function k(e) {
  window.location.href = e;
}
const O = (e) => e.replace(
  /[&<>'"]/g,
  (n) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[n] || n
);
function R(e, n = "-") {
  const o = /([a-z0-9_])([A-Z])|([A-Z])([A-Z][a-z])/g;
  return e.replace(o, `$1$3${n}$2$4`).toLowerCase();
}
function f(e) {
  if (e === null)
    return null;
  if (e instanceof Set)
    return /* @__PURE__ */ new Set([...e]);
  if (e instanceof Map)
    return new Map([...e]);
  if (e instanceof WeakMap) {
    let t = /* @__PURE__ */ new WeakMap();
    return t = e, t;
  }
  if (e instanceof WeakSet) {
    let t = /* @__PURE__ */ new WeakSet();
    return t = e, t;
  }
  if (e instanceof RegExp)
    return new RegExp(e);
  if (typeof e > "u")
    return;
  if (Array.isArray(e))
    return e.map(f);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (typeof e != "object")
    return e;
  const n = {};
  for (const [t, i] of Object.entries(e))
    n[t] = f(i);
  const o = Object.getOwnPropertySymbols(e);
  for (const t of o)
    n[t] = f(e[t]);
  return n;
}
const w = {
  keyField: "id",
  childField: "children",
  parentField: "pid"
  // emptyIsNull: true
};
function A(e = [], n = {}) {
  var u;
  const { keyField: o, childField: t, parentField: i } = {
    ...w,
    ...n
  };
  let r = [];
  const s = {};
  return e.forEach((c) => {
    s[c[o]] = {
      ...c,
      [t]: []
    }, s[c[i]] ? (s[c[i]][t] || (s[c[i]][t] = []), s[c[i]][t].push({
      ...s[c[o]]
    })) : c[i] && (s[c[i]] = {
      [o]: c[i],
      [t]: [s[c[o]]]
    });
  }), Object.keys(s).forEach((c) => {
    s[c][i] || r.push(s[c]);
  }), r.length === 1 && r[0][i] === void 0 && (r = ((u = r == null ? void 0 : r[0]) == null ? void 0 : u[t]) || []), r;
}
export {
  g as $,
  A as array__tree,
  f as cloneDeep,
  h as getDomPageXY,
  x as getDomScreenXY,
  p as getRuntimeEnv,
  v as getTimeInterval,
  l as getValueType,
  R as hyphenate,
  S as iflyUpload,
  m as isCorrectType,
  C as obj__url,
  k as redirect,
  E as url__obj,
  O as xss
};
