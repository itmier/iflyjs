(function(c,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(c=typeof globalThis<"u"?globalThis:c||self,f(c.IFlyJS={}))})(this,function(c){"use strict";const f=e=>Object.prototype.toString.call(e).split(" ")[1].slice(0,-1).toLowerCase(),m=(e,t)=>typeof t=="string"?f(e)===t.toLocaleLowerCase():f(e)===t;function p(){const e=typeof window<"u",t=typeof window.WXEnvironment<"u"&&!!window.WXEnvironment.platform,o=t&&window.WXEnvironment.platform.toLowerCase(),n=e&&window.navigator.userAgent.toLowerCase(),i=n&&/msie|trident/.test(n),r=n&&n.indexOf("msie 9.0")>0,s=n&&n.indexOf("edge/")>0,a=n&&n.indexOf("android")>0||o==="android",u=n&&/iphone|ipad|ipod|ios/.test(n)||o==="ios",l=n&&/chrome\/\d+/.test(n)&&!s,g=n&&/safari/.test(n)&&!l&&!a;return{isWeex:t,isIE:i,isIE9:r,isEdge:s,isAndroid:a,isIOS:u,isChrome:l,isSafari:g}}function y(e){const t=document.querySelectorAll(e);if(t.length!==0)return t.length===1?t[0]:t}function h(e){const t=document.querySelector(e);if(t){const{top:o,left:n}=t.getBoundingClientRect(),i=document.documentElement.scrollLeft,r=document.documentElement.scrollTop;return{x:n+i,y:o+r}}}function w(e){const t=document.querySelector(e);if(t){const{top:o,left:n}=t.getBoundingClientRect();return{x:n,y:o}}}function S(e,t){const o=t?"?":"",n=[];for(const i in e){const r=e[i];["",void 0,null].includes(r)||(r.constructor===Array?r.forEach(s=>{n.push(encodeURIComponent(i)+"[]="+encodeURIComponent(s))}):n.push(encodeURIComponent(i)+"="+encodeURIComponent(r)))}return n.length?o+n.join("&"):""}function D(e){const t={},o=e.split("&");for(let n of o){let[i,r]=n.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}return t}function v(e){if(typeof e!="string")throw new Error("Please enter correct parameters.");return~e.indexOf("?")&&(e=e.slice(1)),D(e)}function C(e,t){const o=new Date(e),i=new Date(t).getTime()-o.getTime(),r=Math.floor(i);return r>1e3?(r/1e3).toFixed(2)+"s":r>1e3*60?(r/1e3/60).toFixed(1)+"min":r>1e3*60*60?(r/1e3/60/60).toFixed(1)+"h":Math.floor(r)+"ms"}class E{constructor(){}static createUpload({accept:t}={}){const o=document.createElement("input");return o.type="file",t&&(o.accept=t),o.style.display="none",p(),document.body.appendChild(o),Promise.resolve(o)}static destroy(t){var o;(o=t==null?void 0:t.parentNode)==null||o.removeChild(t)}}function T(e){window.location.href=e}const _=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);function M(e,t="-"){const o=/([a-z0-9_])([A-Z])|([A-Z])([A-Z][a-z])/g;return e.replace(o,`$1$3${t}$2$4`).toLowerCase()}function d(e){if(e===null)return null;if(e instanceof Set)return new Set([...e]);if(e instanceof Map)return new Map([...e]);if(e instanceof WeakMap){let n=new WeakMap;return n=e,n}if(e instanceof WeakSet){let n=new WeakSet;return n=e,n}if(e instanceof RegExp)return new RegExp(e);if(typeof e>"u")return;if(Array.isArray(e))return e.map(d);if(e instanceof Date)return new Date(e.getTime());if(typeof e!="object")return e;const t={};for(const[n,i]of Object.entries(e))t[n]=d(i);const o=Object.getOwnPropertySymbols(e);for(const n of o)t[n]=d(e[n]);return t}const k={keyField:"id",childField:"children",parentField:"pid"};function O(e=[],t={}){var a;const{keyField:o,childField:n,parentField:i}={...k,...t};let r=[];const s={};return e.forEach(u=>{s[u[o]]={...u,[n]:[]},s[u[i]]?(s[u[i]][n]||(s[u[i]][n]=[]),s[u[i]][n].push({...s[u[o]]})):u[i]&&(s[u[i]]={[o]:u[i],[n]:[s[u[o]]]})}),Object.keys(s).forEach(u=>{s[u][i]||r.push(s[u])}),r.length===1&&r[0][i]===void 0&&(r=((a=r==null?void 0:r[0])==null?void 0:a[n])||[]),r}function R(e,t="YY-MM-DD hh:mm:ss"){const o=new Date(e),n=o.getFullYear(),i=o.getMonth()+1,r=o.getDate(),s=o.getHours(),a=o.getMinutes(),u=o.getSeconds(),l=[...Array(10)].map(function(I,A){return"0"+A});return t.replace(/YY/g,String(n)).replace(/MM/g,String(l[i]||i)).replace(/DD/g,String(l[r]||r)).replace(/hh/g,String(l[s]||s)).replace(/mm/g,String(l[a]||a)).replace(/ss/g,String(l[u]||u))}c.$=y,c.array__tree=O,c.cloneDeep=d,c.formatDate=R,c.getDomPageXY=h,c.getDomScreenXY=w,c.getRuntimeEnv=p,c.getTimeInterval=C,c.getValueType=f,c.hyphenate=M,c.iflyUpload=E,c.isCorrectType=m,c.obj__url=S,c.redirect=T,c.url__obj=v,c.xss=_,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
