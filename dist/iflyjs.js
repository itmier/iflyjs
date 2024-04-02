const d = (e) => Object.prototype.toString.call(e).split(" ")[1].slice(0, -1).toLowerCase(), h = (e, n) => typeof n == "string" ? d(e) === n.toLocaleLowerCase() : d(e) === n;
function g() {
  const e = typeof window < "u", n = typeof window.WXEnvironment < "u" && !!window.WXEnvironment.platform, o = n && window.WXEnvironment.platform.toLowerCase(), t = e && window.navigator.userAgent.toLowerCase(), i = t && /msie|trident/.test(t), r = t && t.indexOf("msie 9.0") > 0, c = t && t.indexOf("edge/") > 0, a = t && t.indexOf("android") > 0 || o === "android", s = t && /iphone|ipad|ipod|ios/.test(t) || o === "ios", u = t && /chrome\/\d+/.test(t) && !c, f = t && /safari/.test(t) && !u && !a;
  return {
    isWeex: n,
    isIE: i,
    isIE9: r,
    isEdge: c,
    isAndroid: a,
    isIOS: s,
    isChrome: u,
    isSafari: f
  };
}
function S(e) {
  const n = document.querySelectorAll(e);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : n;
}
function x(e) {
  const n = document.querySelector(e);
  if (n) {
    const { top: o, left: t } = n.getBoundingClientRect(), i = document.documentElement.scrollLeft, r = document.documentElement.scrollTop;
    return {
      x: t + i,
      y: o + r
    };
  }
}
function C(e) {
  const n = document.querySelector(e);
  if (n) {
    const { top: o, left: t } = n.getBoundingClientRect();
    return {
      x: t,
      y: o
    };
  }
}
function D(e, n) {
  const o = n ? "?" : "", t = [];
  for (const i in e) {
    const r = e[i];
    ["", void 0, null].includes(r) || (r.constructor === Array ? r.forEach((c) => {
      t.push(encodeURIComponent(i) + "[]=" + encodeURIComponent(c));
    }) : t.push(encodeURIComponent(i) + "=" + encodeURIComponent(r)));
  }
  return t.length ? o + t.join("&") : "";
}
function m(e) {
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
  return ~e.indexOf("?") && (e = e.slice(1)), m(e);
}
function v(e, n) {
  const o = new Date(e), i = new Date(n).getTime() - o.getTime(), r = Math.floor(i);
  return r > 1e3 ? (r / 1e3).toFixed(2) + "s" : r > 1e3 * 60 ? (r / 1e3 / 60).toFixed(1) + "min" : r > 1e3 * 60 * 60 ? (r / 1e3 / 60 / 60).toFixed(1) + "h" : Math.floor(r) + "ms";
}
class k {
  constructor() {
  }
  static createUpload({ accept: n } = {}) {
    const o = document.createElement("input");
    return o.type = "file", n && (o.accept = n), o.style.display = "none", g(), document.body.appendChild(o), Promise.resolve(o);
  }
  static destroy(n) {
    var o;
    (o = n == null ? void 0 : n.parentNode) == null || o.removeChild(n);
  }
}
function M(e) {
  window.location.href = e;
}
const A = (e) => e.replace(
  /[&<>'"]/g,
  (n) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[n] || n
);
function O(e, n = "-") {
  const o = /([a-z0-9_])([A-Z])|([A-Z])([A-Z][a-z])/g;
  return e.replace(o, `$1$3${n}$2$4`).toLowerCase();
}
function l(e) {
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
    return e.map(l);
  if (e instanceof Date)
    return new Date(e.getTime());
  if (typeof e != "object")
    return e;
  const n = {};
  for (const [t, i] of Object.entries(e))
    n[t] = l(i);
  const o = Object.getOwnPropertySymbols(e);
  for (const t of o)
    n[t] = l(e[t]);
  return n;
}
const y = {
  keyField: "id",
  childField: "children",
  parentField: "pid"
  // emptyIsNull: true
};
function R(e = [], n = {}) {
  var a;
  const { keyField: o, childField: t, parentField: i } = {
    ...y,
    ...n
  };
  let r = [];
  const c = {};
  return e.forEach((s) => {
    c[s[o]] = {
      ...s,
      [t]: []
    }, c[s[i]] ? (c[s[i]][t] || (c[s[i]][t] = []), c[s[i]][t].push({
      ...c[s[o]]
    })) : s[i] && (c[s[i]] = {
      [o]: s[i],
      [t]: [c[s[o]]]
    });
  }), Object.keys(c).forEach((s) => {
    c[s][i] || r.push(c[s]);
  }), r.length === 1 && r[0][i] === void 0 && (r = ((a = r == null ? void 0 : r[0]) == null ? void 0 : a[t]) || []), r;
}
function F(e, n = "YY-MM-DD hh:mm:ss") {
  const o = new Date(e), t = o.getFullYear(), i = o.getMonth() + 1, r = o.getDate(), c = o.getHours(), a = o.getMinutes(), s = o.getSeconds(), u = [...Array(10)].map(function(w, p) {
    return "0" + p;
  });
  return n.replace(/YY/g, String(t)).replace(/MM/g, String(u[i] || i)).replace(/DD/g, String(u[r] || r)).replace(/hh/g, String(u[c] || c)).replace(/mm/g, String(u[a] || a)).replace(/ss/g, String(u[s] || s));
}
export {
  S as $,
  R as array__tree,
  l as cloneDeep,
  F as formatDate,
  x as getDomPageXY,
  C as getDomScreenXY,
  g as getRuntimeEnv,
  v as getTimeInterval,
  d as getValueType,
  O as hyphenate,
  k as iflyUpload,
  h as isCorrectType,
  D as obj__url,
  M as redirect,
  E as url__obj,
  A as xss
};
