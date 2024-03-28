const l = (n) => Object.prototype.toString.call(n).split(" ")[1].slice(0, -1).toLowerCase(), m = (n, t) => typeof t == "string" ? l(n) === t.toLocaleLowerCase() : l(n) === t;
function a() {
  const n = typeof window < "u", t = typeof window.WXEnvironment < "u" && !!window.WXEnvironment.platform, o = t && window.WXEnvironment.platform.toLowerCase(), e = n && window.navigator.userAgent.toLowerCase(), i = e && /msie|trident/.test(e), r = e && e.indexOf("msie 9.0") > 0, s = e && e.indexOf("edge/") > 0, c = e && e.indexOf("android") > 0 || o === "android", u = e && /iphone|ipad|ipod|ios/.test(e) || o === "ios", d = e && /chrome\/\d+/.test(e) && !s, f = e && /safari/.test(e) && !d && !c;
  return {
    isWeex: t,
    isIE: i,
    isIE9: r,
    isEdge: s,
    isAndroid: c,
    isIOS: u,
    isChrome: d,
    isSafari: f
  };
}
function w(n) {
  const t = document.querySelectorAll(n);
  if (t.length !== 0)
    return t.length === 1 ? t[0] : t;
}
function p(n) {
  const t = document.querySelector(n);
  if (t) {
    const { top: o, left: e } = t.getBoundingClientRect(), i = document.documentElement.scrollLeft, r = document.documentElement.scrollTop;
    return {
      x: e + i,
      y: o + r
    };
  }
}
export {
  w as $,
  p as getDomPageXY,
  a as getRuntimeEnv,
  l as getValueType,
  m as isCorrectType
};
