!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(e){const n=Object.freeze({default:0,warning:1,error:2}),r=Object.freeze({url:"url",json:"json",object:"object",javascript:"javascript"});let o=r.url,i={},u={},c=1e7,f="native",l=null,a=!1;const s=new function(){let e=null;function t(t,n,r){if("string"==typeof t){if("string"==typeof n){let o=new Date;"number"==typeof r?o.setTime(o.getTime()+1e3*r):o.setTime(o.getTime()+2592e6);let i=C(t),u=C(n);return document.cookie=i+"="+u+"; expires="+o.toUTCString(),e&&(e[t]=n),n}if(null===n){new Date;return date.setTime(date.getTime()-1),document.cookie=C(t)+"; expires="+date.toUTCString(),e&&(e[t]=n),n}return function(){if(e)return;e={},setTimeout(function(){e=null});let t=document.cookie;if(!t)return;let n=t.split("; ");for(;n.length>0;){let t=n.pop().split("=");if(!Array.isArray(t)||0===t.length)continue;let r=decodeURIComponent(t[0]);t.length>1?e[r]=decodeURIComponent(t[1]):e[r]=null}}(),e.hasOwnProperty(t)?e[t]:null}}function n(){return e=null,this}window.addEventListener("pageshow",function(){e=null}),Object.defineProperties(this,{value:{get:function(){return t}},synchronize:{get:function(){return n}}})};function p(t){switch(o){case r.url:return function(e){let t=[];for(let e=1;e<arguments.length;e+=1){let n=arguments[e];"function"==typeof n?t.push(d(n)):t.push(n)}let n=f+"://"+e+"?parameters="+C(t);if("function"==typeof l)return l(n);let r=document.createElement("iframe");r.style.display="none",r.setAttribute("src",n),document.body.appendChild(r),setTimeout(function(){document.body.removeChild(r)},2e3)}.apply(this,arguments);case r.json:return function(e){let t=[e];for(let e=1;e<arguments.length;e+=1){let n=arguments[e];switch(typeof n){case"number":case"string":case"boolean":t.push(n);break;case"function":t.push(d(n));break;default:t.push(JSON.stringify(n))}}S.apply(this,t)}.apply(this,arguments);case r.object:return S.apply(this,arguments);case r.javascript:return function(t){let n=[];for(let e=1;e<arguments.length;e++)"function"==typeof arguments[e]?n.push(d(arguments[e])):n.push(arguments[e]);setTimeout(function(){l.apply(e,[t,n])})}.apply(this,arguments);default:return P("native.js 暂不支持 "+o+" 交互模式，请使用 NativeMode 所枚举的交互模式！",n.error)}}function d(e,t){switch(typeof e){case"function":let r="NT"+c++;return i[r]=e,r;case"string":if(!i.hasOwnProperty(e))return P("没有找到标识符 "+e+" 所注册的回调函数！\n提示：如果回调函数须多次执行，请指定第二个参数为 false，以保证在回调函数执行后不被删除。",n.error);let o=i[e];return(void 0===t||t)&&delete i[e],o;default:return P("Parameters error: Only function or string is allowed for Native.callback()'s first argument.",Native.LogStyle.error)}}function g(e,t){"function"==typeof t&&"string"==typeof e&&0!=e.length&&(u.hasOwnProperty(e)?u.push(t):u[e]=[t])}function y(e,t){if("string"!=typeof e||0==e.length)return;if(!u.hasOwnProperty(e))return;if(!t)return void delete u[e];let n=u[e];for(var r=n.length-1;r>=0;r--)n[r]==t&&n.splice(r,1)}function h(e){if("string"!=typeof e||0==e.length)return;if(!u.hasOwnProperty(e))return;let t=[];for(var n=1;n<arguments.length;n++)t.push(arguments[n]);let r=u[e];for(n=0;n<r.length;n++)r[n].apply(this,t)}Object.defineProperties(e,{NativeLogStyle:{get:function(){return n}},NativeMode:{get:function(){return r}},NativeParseURLQuery:{get:function(){return L}},NativeParseURLQueryComponent:{get:function(){return C}},NativeLog:{get:function(){return P}},NativeMethod:{get:function(){return M}},NativeAction:{get:function(){return A}},NativeCookieKey:{get:function(){return U}},native:{get:function(){return t}}}),Object.defineProperties(t,{mode:{get:function(){return o}},scheme:{get:function(){return f}},isReady:{get:function(){return a}},delegate:{get:function(){return l}},performMethod:{get:function(){return p}},callback:{get:function(){return d}},addActionTarget:{get:function(){return g}},removeActionTarget:{get:function(){return y}},sendAction:{get:function(){return h}},ready:{get:function(){return O}},register:{get:function(){return N}},extend:{get:function(){return j}},cookie:{get:function(){return s}}}),M("ready","ready");let v={};const m=[];let b=null;const w=[];function N(t,n){if(l=t,o=n,a)return this;b&&d(b,!0);let r=this;function i(){b=p.call(r,M.ready,function(t){for(a=!0,b=null,t&&(v=t);m.length>0;){let e=m.shift();Object.defineProperties(r,e.apply(r,[v]))}for(;w.length>0;)w.shift().apply(e)})}if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)setTimeout(function(){i()});else{function u(){document.removeEventListener("DOMContentLoaded",u),window.removeEventListener("load",u),i()}document.addEventListener("DOMContentLoaded",u),window.addEventListener("load",u)}return this}function O(e){return a?(setTimeout(e),this):(w.push(e),this)}function j(e){return"function"!=typeof e?this:(a?Object.defineProperties(this,e.apply(this,[v])):m.push(e),this)}function S(t){let n=[];for(let e=1;e<arguments.length;e+=1)n.push(arguments[e]);setTimeout(function(){let r=t.split("/"),o=l;for(let e=0;e<r.length;e++)o=o[r[e]];o.apply(e,n)})}function P(e,t){return"number"!=typeof t||t===n.default?console.log("%c[Native]%c %s","color: #0b78d7; font-weight: bold;","color: #333333",e):t===n.warning?console.log("%c[Native]%c %s","color: #0b78d7; font-weight: bold;","color: #f98300",e):console.log("%c[Native]%c %s","color: #0b78d7; font-weight: bold;","color: #c2352d",e)}function C(e){if(!e)return"";switch(typeof e){case"string":return encodeURIComponent(e);case"undefined":return"";default:return encodeURIComponent(JSON.stringify(e))}}function L(e){if(!e)return"";if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++)t.push(C(e[n]));return t.join("&")}switch(typeof e){case"string":return encodeURIComponent(e);case"object":let t="";for(let n in e)e.hasOwnProperty(n)&&(t.length>0?t+="&"+encodeURIComponent(n):t=encodeURIComponent(n),e[n]&&(t+="="+C(e[n])));return t;case"undefined":return"";default:return encodeURIComponent(JSON.stringify(e))}}function T(e,t,n){return void 0===e?P("Define property error: Can not define properties for an undefined value.",2):"string"!=typeof t||0===t.length?P("Define property error: The name for "+e.constructor.name+"'s property must be a nonempty string.",2):e.hasOwnProperty(t)?P("Define property warning: The property "+t+" to be defined for "+e.constructor.name+" is already exist.",1):(n.enumerable=!0,Object.defineProperty(e,t,n),e)}function k(e,t){for(const n in e){const r=e[n];switch(typeof r){case"string":if(t(n,r))return!0;break;case"object":if(k(r,t))return!0}}return!1}function M(e,t){return"string"!=typeof e||0===e.length?P("NativeMethod 注册失败，方法名称必须为长度大于 0 的字符串！",NativeLogStyle.error):M.hasOwnProperty(e)?P("NativeMethod 注册失败，已存在名称为“"+e+"”的方法！",NativeLogStyle.error):k(M,function(e,n){return n===t})?P("NativeMethod 注册失败，已存在值为“"+t+"”的方法！",NativeLogStyle.error):(T(M,e,{get:function(){return t}}),t)}function A(e,t){return"string"!=typeof e||0===e.length?P("NativeAction 注册失败，事件名称必须为长度大于 0 的字符串！",NativeLogStyle.error):A.hasOwnProperty(e)?P("NativeAction 注册失败，已存在名称为“"+e+"”的事件！",NativeLogStyle.error):k(A,function(e,n){return n===t})?P("NativeAction 注册失败，已存在值为“"+t+"”的事件！",NativeLogStyle.error):(T(A,e,{get:function(){return t}}),t)}function U(e,t){return"string"!=typeof e||0===e.length?P("NativeCookieKey 注册失败，名称必须为长度大于 0 的字符串！",NativeLogStyle.error):"string"!=typeof t||0===t.length?P("NativeCookieKey 注册失败，值必须为大于 0 的字符串！",NativeLogStyle.error):U.hasOwnProperty(e)?P("NativeCookieKey 注册失败，已存在名称为“`"+e+"`”的 Cookie 键！",NativeLogStyle.error):k(U,function(e,n){return n===t})?P("NativeCookieKey 注册失败，已存在值为“"+t+"”的 Cookie 键！",NativeLogStyle.error):(T(U,e,{get:function(){return t}}),t)}}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);