/*!
 * w-runqws-client v1.0.25
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("ws")):"function"==typeof define&&define.amd?define(["ws"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-runqws-client"]=e(t.ws)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=e(t);var n=function(){this.__data__=[],this.size=0};var o=function(t,e){return t===e||t!=t&&e!=e};var i=function(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return-1},u=Array.prototype.splice;var a=function(t){var e=this.__data__,r=i(e,t);return!(r<0)&&(r==e.length-1?e.pop():u.call(e,r,1),--this.size,!0)};var c=function(t){var e=this.__data__,r=i(e,t);return r<0?void 0:e[r][1]};var f=function(t){return i(this.__data__,t)>-1};var s=function(t,e){var r=this.__data__,n=i(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype.delete=a,l.prototype.get=c,l.prototype.has=f,l.prototype.set=s;var v=l;var p=function(){this.__data__=new v,this.size=0};var y=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var h=function(t){return this.__data__.get(t)};var d=function(t){return this.__data__.has(t)};function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function _(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}function j(t){var e={exports:{}};return t(e,e.exports),e.exports}var w="object"==b(g)&&g&&g.Object===Object&&g,m="object"==("undefined"==typeof self?"undefined":b(self))&&self&&self.Object===Object&&self,A=w||m||Function("return this")(),O=A.Symbol,x=Object.prototype,S=x.hasOwnProperty,B=x.toString,U=O?O.toStringTag:void 0;var k=function(t){var e=S.call(t,U),r=t[U];try{t[U]=void 0;var n=!0}catch(t){}var o=B.call(t);return n&&(e?t[U]=r:delete t[U]),o},I=Object.prototype.toString;var M=function(t){return I.call(t)},P=O?O.toStringTag:void 0;var T=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":P&&P in Object(t)?k(t):M(t)};var z=function(t){var e=b(t);return null!=t&&("object"==e||"function"==e)};var C,E=function(t){if(!z(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},L=A["__core-js_shared__"],D=(C=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"";var F=function(t){return!!D&&D in t},N=Function.prototype.toString;var Q=function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""},W=/^\[object .+?Constructor\]$/,R=Function.prototype,$=Object.prototype,V=R.toString,H=$.hasOwnProperty,q=RegExp("^"+V.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var G=function(t){return!(!z(t)||F(t))&&(E(t)?q:W).test(Q(t))};var J=function(t,e){return null==t?void 0:t[e]};var K=function(t,e){var r=J(t,e);return G(r)?r:void 0},X=K(A,"Map"),Y=K(Object,"create");var Z=function(){this.__data__=Y?Y(null):{},this.size=0};var tt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},et=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;if(Y){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return et.call(e,t)?e[t]:void 0},nt=Object.prototype.hasOwnProperty;var ot=function(t){var e=this.__data__;return Y?void 0!==e[t]:nt.call(e,t)};var it=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Y&&void 0===e?"__lodash_hash_undefined__":e,this};function ut(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ut.prototype.clear=Z,ut.prototype.delete=tt,ut.prototype.get=rt,ut.prototype.has=ot,ut.prototype.set=it;var at=ut;var ct=function(){this.size=0,this.__data__={hash:new at,map:new(X||v),string:new at}};var ft=function(t){var e=b(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var st=function(t,e){var r=t.__data__;return ft(e)?r["string"==typeof e?"string":"hash"]:r.map};var lt=function(t){var e=st(this,t).delete(t);return this.size-=e?1:0,e};var vt=function(t){return st(this,t).get(t)};var pt=function(t){return st(this,t).has(t)};var yt=function(t,e){var r=st(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function ht(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ht.prototype.clear=ct,ht.prototype.delete=lt,ht.prototype.get=vt,ht.prototype.has=pt,ht.prototype.set=yt;var dt=ht;var bt=function(t,e){var r=this.__data__;if(r instanceof v){var n=r.__data__;if(!X||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new dt(n)}return r.set(t,e),this.size=r.size,this};function gt(t){var e=this.__data__=new v(t);this.size=e.size}gt.prototype.clear=p,gt.prototype.delete=y,gt.prototype.get=h,gt.prototype.has=d,gt.prototype.set=bt;var _t=gt;var jt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},wt=function(){try{var t=K(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var mt=function(t,e,r){"__proto__"==e&&wt?wt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},At=Object.prototype.hasOwnProperty;var Ot=function(t,e,r){var n=t[e];At.call(t,e)&&o(n,r)&&(void 0!==r||e in t)||mt(t,e,r)};var xt=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,u=e.length;++i<u;){var a=e[i],c=n?n(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),o?mt(r,a,c):Ot(r,a,c)}return r};var St=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var Bt=function(t){return null!=t&&"object"==b(t)};var Ut=function(t){return Bt(t)&&"[object Arguments]"==T(t)},kt=Object.prototype,It=kt.hasOwnProperty,Mt=kt.propertyIsEnumerable,Pt=Ut(function(){return arguments}())?Ut:function(t){return Bt(t)&&It.call(t,"callee")&&!Mt.call(t,"callee")},Tt=Pt,zt=Array.isArray;var Ct=function(){return!1},Et=j((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?A.Buffer:void 0,i=(o?o.isBuffer:void 0)||Ct;t.exports=i})),Lt=/^(?:0|[1-9]\d*)$/;var Dt=function(t,e){var r=b(t);return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Lt.test(t))&&t>-1&&t%1==0&&t<e};var Ft=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Nt={};Nt["[object Float32Array]"]=Nt["[object Float64Array]"]=Nt["[object Int8Array]"]=Nt["[object Int16Array]"]=Nt["[object Int32Array]"]=Nt["[object Uint8Array]"]=Nt["[object Uint8ClampedArray]"]=Nt["[object Uint16Array]"]=Nt["[object Uint32Array]"]=!0,Nt["[object Arguments]"]=Nt["[object Array]"]=Nt["[object ArrayBuffer]"]=Nt["[object Boolean]"]=Nt["[object DataView]"]=Nt["[object Date]"]=Nt["[object Error]"]=Nt["[object Function]"]=Nt["[object Map]"]=Nt["[object Number]"]=Nt["[object Object]"]=Nt["[object RegExp]"]=Nt["[object Set]"]=Nt["[object String]"]=Nt["[object WeakMap]"]=!1;var Qt=function(t){return Bt(t)&&Ft(t.length)&&!!Nt[T(t)]};var Wt=function(t){return function(e){return t(e)}},Rt=j((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&w.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),$t=Rt&&Rt.isTypedArray,Vt=$t?Wt($t):Qt,Ht=Object.prototype.hasOwnProperty;var qt=function(t,e){var r=zt(t),n=!r&&Tt(t),o=!r&&!n&&Et(t),i=!r&&!n&&!o&&Vt(t),u=r||n||o||i,a=u?St(t.length,String):[],c=a.length;for(var f in t)!e&&!Ht.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Dt(f,c))||a.push(f);return a},Gt=Object.prototype;var Jt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Gt)};var Kt=function(t,e){return function(r){return t(e(r))}},Xt=Kt(Object.keys,Object),Yt=Object.prototype.hasOwnProperty;var Zt=function(t){if(!Jt(t))return Xt(t);var e=[];for(var r in Object(t))Yt.call(t,r)&&"constructor"!=r&&e.push(r);return e};var te=function(t){return null!=t&&Ft(t.length)&&!E(t)};var ee=function(t){return te(t)?qt(t):Zt(t)};var re=function(t,e){return t&&xt(e,ee(e),t)};var ne=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},oe=Object.prototype.hasOwnProperty;var ie=function(t){if(!z(t))return ne(t);var e=Jt(t),r=[];for(var n in t)("constructor"!=n||!e&&oe.call(t,n))&&r.push(n);return r};var ue=function(t){return te(t)?qt(t,!0):ie(t)};var ae=function(t,e){return t&&xt(e,ue(e),t)},ce=j((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?A.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}));var fe=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var se=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i};var le=function(){return[]},ve=Object.prototype.propertyIsEnumerable,pe=Object.getOwnPropertySymbols,ye=pe?function(t){return null==t?[]:(t=Object(t),se(pe(t),(function(e){return ve.call(t,e)})))}:le;var he=function(t,e){return xt(t,ye(t),e)};var de=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},be=Kt(Object.getPrototypeOf,Object),ge=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)de(e,ye(t)),t=be(t);return e}:le;var _e=function(t,e){return xt(t,ge(t),e)};var je=function(t,e,r){var n=e(t);return zt(t)?n:de(n,r(t))};var we=function(t){return je(t,ee,ye)};var me=function(t){return je(t,ue,ge)},Ae=K(A,"DataView"),Oe=K(A,"Promise"),xe=K(A,"Set"),Se=K(A,"WeakMap"),Be="[object Map]",Ue="[object Promise]",ke="[object Set]",Ie="[object WeakMap]",Me="[object DataView]",Pe=Q(Ae),Te=Q(X),ze=Q(Oe),Ce=Q(xe),Ee=Q(Se),Le=T;(Ae&&Le(new Ae(new ArrayBuffer(1)))!=Me||X&&Le(new X)!=Be||Oe&&Le(Oe.resolve())!=Ue||xe&&Le(new xe)!=ke||Se&&Le(new Se)!=Ie)&&(Le=function(t){var e=T(t),r="[object Object]"==e?t.constructor:void 0,n=r?Q(r):"";if(n)switch(n){case Pe:return Me;case Te:return Be;case ze:return Ue;case Ce:return ke;case Ee:return Ie}return e});var De=Le,Fe=Object.prototype.hasOwnProperty;var Ne=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Fe.call(t,"index")&&(r.index=t.index,r.input=t.input),r},Qe=A.Uint8Array;var We=function(t){var e=new t.constructor(t.byteLength);return new Qe(e).set(new Qe(t)),e};var Re=function(t,e){var r=e?We(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},$e=/\w*$/;var Ve=function(t){var e=new t.constructor(t.source,$e.exec(t));return e.lastIndex=t.lastIndex,e},He=O?O.prototype:void 0,qe=He?He.valueOf:void 0;var Ge=function(t){return qe?Object(qe.call(t)):{}};var Je=function(t,e){var r=e?We(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var Ke=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return We(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return Re(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Je(t,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return Ve(t);case"[object Symbol]":return Ge(t)}},Xe=Object.create,Ye=function(){function t(){}return function(e){if(!z(e))return{};if(Xe)return Xe(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var Ze=function(t){return"function"!=typeof t.constructor||Jt(t)?{}:Ye(be(t))};var tr=function(t){return Bt(t)&&"[object Map]"==De(t)},er=Rt&&Rt.isMap,rr=er?Wt(er):tr;var nr=function(t){return Bt(t)&&"[object Set]"==De(t)},or=Rt&&Rt.isSet,ir=or?Wt(or):nr,ur="[object Arguments]",ar="[object Function]",cr="[object Object]",fr={};fr[ur]=fr["[object Array]"]=fr["[object ArrayBuffer]"]=fr["[object DataView]"]=fr["[object Boolean]"]=fr["[object Date]"]=fr["[object Float32Array]"]=fr["[object Float64Array]"]=fr["[object Int8Array]"]=fr["[object Int16Array]"]=fr["[object Int32Array]"]=fr["[object Map]"]=fr["[object Number]"]=fr[cr]=fr["[object RegExp]"]=fr["[object Set]"]=fr["[object String]"]=fr["[object Symbol]"]=fr["[object Uint8Array]"]=fr["[object Uint8ClampedArray]"]=fr["[object Uint16Array]"]=fr["[object Uint32Array]"]=!0,fr["[object Error]"]=fr[ar]=fr["[object WeakMap]"]=!1;var sr=function t(e,r,n,o,i,u){var a,c=1&r,f=2&r,s=4&r;if(n&&(a=i?n(e,o,i,u):n(e)),void 0!==a)return a;if(!z(e))return e;var l=zt(e);if(l){if(a=Ne(e),!c)return fe(e,a)}else{var v=De(e),p=v==ar||"[object GeneratorFunction]"==v;if(Et(e))return ce(e,c);if(v==cr||v==ur||p&&!i){if(a=f||p?{}:Ze(e),!c)return f?_e(e,ae(a,e)):he(e,re(a,e))}else{if(!fr[v])return i?e:{};a=Ke(e,v,c)}}u||(u=new _t);var y=u.get(e);if(y)return y;u.set(e,a),ir(e)?e.forEach((function(o){a.add(t(o,r,n,o,e,u))})):rr(e)&&e.forEach((function(o,i){a.set(i,t(o,r,n,i,e,u))}));var h=l?void 0:(s?f?me:we:f?ue:ee)(e);return jt(h||e,(function(o,i){h&&(o=e[i=o]),Ot(a,i,t(o,r,n,i,e,u))})),a};var lr=function(t){return sr(t,5)};var vr=function(t){return"symbol"==b(t)||Bt(t)&&"[object Symbol]"==T(t)},pr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yr=/^\w*$/;var hr=function(t,e){if(zt(t))return!1;var r=b(t);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!vr(t))||(yr.test(t)||!pr.test(t)||null!=e&&t in Object(e))};function dr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u)||i,u};return r.cache=new(dr.Cache||dt),r}dr.Cache=dt;var br=dr;var gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_r=/\\(\\)?/g,jr=function(t){var e=br(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(gr,(function(t,r,n,o){e.push(n?o.replace(_r,"$1"):r||t)})),e}));var wr=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},mr=O?O.prototype:void 0,Ar=mr?mr.toString:void 0;var Or=function t(e){if("string"==typeof e)return e;if(zt(e))return wr(e,t)+"";if(vr(e))return Ar?Ar.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r};var xr=function(t){return null==t?"":Or(t)};var Sr=function(t,e){return zt(t)?t:hr(t,e)?[t]:jr(xr(t))};var Br=function(t){if("string"==typeof t||vr(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Ur=function(t,e){for(var r=0,n=(e=Sr(e,t)).length;null!=t&&r<n;)t=t[Br(e[r++])];return r&&r==n?t:void 0};var kr=function(t,e,r){var n=null==t?void 0:Ur(t,e);return void 0===n?r:n},Ir=j((function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}function o(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function i(t,e,n,i,u){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new o(n,i||t,u),c=r?r+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function u(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function a(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),a.prototype.eventNames=function(){var t,n,o=[];if(0===this._eventsCount)return o;for(n in t=this._events)e.call(t,n)&&o.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},a.prototype.listeners=function(t){var e=r?r+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,i=n.length,u=new Array(i);o<i;o++)u[o]=n[o].fn;return u},a.prototype.listenerCount=function(t){var e=r?r+t:t,n=this._events[e];return n?n.fn?1:n.length:0},a.prototype.emit=function(t,e,n,o,i,u){var a=r?r+t:t;if(!this._events[a])return!1;var c,f,s=this._events[a],l=arguments.length;if(s.fn){switch(s.once&&this.removeListener(t,s.fn,void 0,!0),l){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,e),!0;case 3:return s.fn.call(s.context,e,n),!0;case 4:return s.fn.call(s.context,e,n,o),!0;case 5:return s.fn.call(s.context,e,n,o,i),!0;case 6:return s.fn.call(s.context,e,n,o,i,u),!0}for(f=1,c=new Array(l-1);f<l;f++)c[f-1]=arguments[f];s.fn.apply(s.context,c)}else{var v,p=s.length;for(f=0;f<p;f++)switch(s[f].once&&this.removeListener(t,s[f].fn,void 0,!0),l){case 1:s[f].fn.call(s[f].context);break;case 2:s[f].fn.call(s[f].context,e);break;case 3:s[f].fn.call(s[f].context,e,n);break;case 4:s[f].fn.call(s[f].context,e,n,o);break;default:if(!c)for(v=1,c=new Array(l-1);v<l;v++)c[v-1]=arguments[v];s[f].fn.apply(s[f].context,c)}}return!0},a.prototype.on=function(t,e,r){return i(this,t,e,r,!1)},a.prototype.once=function(t,e,r){return i(this,t,e,r,!0)},a.prototype.removeListener=function(t,e,n,o){var i=r?r+t:t;if(!this._events[i])return this;if(!e)return u(this,i),this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||n&&a.context!==n||u(this,i);else{for(var c=0,f=[],s=a.length;c<s;c++)(a[c].fn!==e||o&&!a[c].once||n&&a[c].context!==n)&&f.push(a[c]);f.length?this._events[i]=1===f.length?f[0]:f:u(this,i)}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=r?r+t:t,this._events[e]&&u(this,e)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,t.exports=a}));function Mr(){return new Ir}var Pr=/\s/;var Tr=function(t){for(var e=t.length;e--&&Pr.test(t.charAt(e)););return e},zr=/^\s+/;var Cr=function(t){return t?t.slice(0,Tr(t)+1).replace(zr,""):t},Er=/^[-+]0x[0-9a-f]+$/i,Lr=/^0b[01]+$/i,Dr=/^0o[0-7]+$/i,Fr=parseInt;var Nr=function(t){if("number"==typeof t)return t;if(vr(t))return NaN;if(z(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=z(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Cr(t);var r=Lr.test(t);return r||Dr.test(t)?Fr(t.slice(2),r?2:8):Er.test(t)?NaN:+t},Qr=1/0;var Wr=function(t){return t?(t=Nr(t))===Qr||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Rr=function(t){var e=Wr(t),r=e%1;return e==e?r?e-r:e:0};var $r=function(t){return"number"==typeof t&&t==Rr(t)};function Vr(t){return"[object String]"===Object.prototype.toString.call(t)}function Hr(t){return!(!Vr(t)||""===t)}function qr(t){var e=!1;return Hr(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Gr(t){return qr(t)?Wr(t):0}function Jr(t){return!!qr(t)&&(t=Gr(t),$r(t))}var Kr=A.isFinite,Xr=Math.min;var Yr=function(t){var e=Math[t];return function(t,r){if(t=Nr(t),(r=null==r?0:Xr(Rr(r),292))&&Kr(t)){var n=(xr(t)+"e").split("e"),o=e(n[0]+"e"+(+n[1]+r));return+((n=(xr(o)+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}("round");function Zr(t){if(!qr(t))return 0;t=Gr(t);var e=Yr(t);return"0"===String(e)?0:e}function tn(t){return!!Jr(t)&&Zr(t)<0}function en(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=0,r=[];tn(t)&&(t=0),t=Zr(t);var n=Mr();function o(){if(r.length>0)return e+=1,r.splice(0,1)[0];return null}function i(){(e-=1)<0&&(e=0),r.length>0&&n.emit("message",r)}function u(o){r.push(o),(t<=0||e<t)&&n.emit("message",r)}function a(){e=0,r=[]}return n.get=o,n.cb=i,n.push=u,n.clear=a,n}function rn(){return"undefined"!=typeof window&&void 0!==window.document}function nn(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function on(t){var e=null;t.url||(t.url="ws://localhost:8080"),t.token||(t.token="*");var n,o=function(){var t=rn(),e="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;return{isBrowser:t=t||e,isWebWorker:e,isNode:"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node}}().isBrowser;n=o?("undefined"!=typeof self?self:rn()?window:"undefined"!=typeof global?global:null).WebSocket:r.default;try{e=new n(t.url+"/?token="+t.token)}catch(t){e=null}if(null===e)return{error:"can not new MixWS"};function i(){nn(t.open)&&t.open()}function u(){nn(t.close)&&t.close()}function a(e){nn(t.message)&&t.message(e)}function c(r){nn(t.error)&&t.error(r),e.close()}return o?(e.onopen=i,e.onmessage=function(t){a(t.data)},e.onclose=u,e.onerror=c):(e.on("open",i),e.on("message",a),e.on("close",u),e.on("error",c)),e}function un(){var t,e,r=new Promise((function(){t=arguments[0],e=arguments[1]}));return r.resolve=t,r.reject=e,r}function an(t){return!!Jr(t)&&Zr(t)>0}var cn="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),fn=cn.length;function sn(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e=[];t=an(t)?Zr(t):32;for(var r=0;r<t;r++)e[r]=cn[0|Math.random()*fn];var n=e.join("");return n}var ln=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i};var vn=function(t,e,r){if(!z(r))return!1;var n=b(e);return!!("number"==n?te(r)&&Dt(e,r.length):"string"==n&&e in r)&&o(r[e],t)},pn=Math.ceil,yn=Math.max;var hn=function(t,e,r){e=(r?vn(t,e,r):void 0===e)?1:yn(Rr(e),0);var n=null==t?0:t.length;if(!n||e<1)return[];for(var o=0,i=0,u=Array(pn(n/e));o<n;)u[i++]=ln(t,o,o+=e);return u},dn=Array.prototype.join;var bn=function(t,e){return null==t?"":dn.call(t,e)};var gn=function(t){return function(e,r,n){for(var o=-1,i=Object(e),u=n(e),a=u.length;a--;){var c=u[t?a:++o];if(!1===r(i[c],c,i))break}return e}}();var _n=function(t,e){return function(r,n){if(null==r)return r;if(!te(r))return t(r,n);for(var o=r.length,i=e?o:-1,u=Object(r);(e?i--:++i<o)&&!1!==n(u[i],i,u););return r}}((function(t,e){return t&&gn(t,e,ee)}));var jn=function(t){return t};var wn=function(t){return"function"==typeof t?t:jn};var mn=function(t,e){return(zt(t)?jt:_n)(t,wn(e))};function An(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)}function On(t){return"[object Uint16Array]"===Object.prototype.toString.call(t)}function xn(t){return!!Jr(t)&&Zr(t)>=0}function Sn(t,e){return Hr(t)&&xn(e)?0===(e=Zr(e))?"":t.substring(0,e):""}function Bn(t,e){return Hr(t)&&xn(e)?0===(e=Zr(e))?t:function(t,e){if(!Hr(t))return"";if(!xn(e))return"";if(0===(e=Zr(e)))return"";var r=t.length-e;return r<0&&(r=0),t.substr(r,e)}(t,t.length-e):""}var Un=_(Object.freeze({__proto__:null,default:{}})),kn=j((function(t,e){var r;t.exports=(r=r||function(t,e){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),"undefined"!=typeof self&&self.crypto&&(r=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(r=globalThis.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&void 0!==g&&g.crypto&&(r=g.crypto),!r)try{r=Un}catch(t){}var n=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),i={},u=i.lib={},a=u.Base={extend:function(t){var e=o(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=u.WordArray=a.extend({init:function(t,r){t=this.words=t||[],this.sigBytes=r!=e?r:4*t.length},toString:function(t){return(t||s).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,o=t.sigBytes;if(this.clamp(),n%4)for(var i=0;i<o;i++){var u=r[i>>>2]>>>24-i%4*8&255;e[n+i>>>2]|=u<<24-(n+i)%4*8}else for(var a=0;a<o;a+=4)e[n+a>>>2]=r[a>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(n());return new c.init(e,t)}}),f=i.enc={},s=f.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],o=0;o<r;o++){var i=e[o>>>2]>>>24-o%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new c.init(r,e/2)}},l=f.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],o=0;o<r;o++){var i=e[o>>>2]>>>24-o%4*8&255;n.push(String.fromCharCode(i))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new c.init(r,e)}},v=f.Utf8={stringify:function(t){try{return decodeURIComponent(escape(l.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return l.parse(unescape(encodeURIComponent(t)))}},p=u.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=v.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r,n=this._data,o=n.words,i=n.sigBytes,u=this.blockSize,a=i/(4*u),f=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*u,s=t.min(4*f,i);if(f){for(var l=0;l<f;l+=u)this._doProcessBlock(o,l);r=o.splice(0,f),n.sigBytes-=s}return new c.init(r,s)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});u.Hasher=p.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new y.HMAC.init(t,r).finalize(e)}}});var y=i.algo={};return i}(Math),r)})),In=j((function(t,e){var r;t.exports=(r=kn,function(){var t=r,e=t.lib.WordArray;function n(t,r,n){for(var o=[],i=0,u=0;u<r;u++)if(u%4){var a=n[t.charCodeAt(u-1)]<<u%4*2|n[t.charCodeAt(u)]>>>6-u%4*2;o[i>>>2]|=a<<24-i%4*8,i++}return e.create(o,i)}t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var o=[],i=0;i<r;i+=3)for(var u=(e[i>>>2]>>>24-i%4*8&255)<<16|(e[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|e[i+2>>>2]>>>24-(i+2)%4*8&255,a=0;a<4&&i+.75*a<r;a++)o.push(n.charAt(u>>>6*(3-a)&63));var c=n.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var e=t.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<r.length;i++)o[r.charCodeAt(i)]=i}var u=r.charAt(64);if(u){var a=t.indexOf(u);-1!==a&&(e=a)}return n(t,e,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),r.enc.Base64)})),Mn=j((function(t,e){var r;t.exports=(r=kn,function(){if("function"==typeof ArrayBuffer){var t=r.lib.WordArray,e=t.init,n=t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var r=t.byteLength,n=[],o=0;o<r;o++)n[o>>>2]|=t[o]<<24-o%4*8;e.call(this,n,r)}else e.apply(this,arguments)};n.prototype=t}}(),r.lib.WordArray)}));function Pn(t){return An(t)?Mn.create(t).toString(In):""}function Tn(t){if(!Vr(t))return new Uint8Array;for(var e=In.parse(t),r=e.words,n=e.sigBytes,o=new Uint8Array(n),i=0;i<n;i++){var u=r[i>>>2]>>>24-i%4*8&255;o[i]=u}return o}function zn(t){return On(t)?Pn(function(t){return On(t)?new Uint8Array(t):new Uint8Array}(t)):""}function Cn(t){if(!Vr(t))return new Uint16Array;var e=function(t){return An(t)?new Uint16Array(t):new Uint16Array}(Tn(t));return e}var En="[Uint8Array]::";var Ln="[Uint16Array]::";var Dn={tagU8A:En,u8arr2b64:function(t){return An(t)?En+Pn(t):t},b642u8arr:function(t){return Vr(t)&&Sn(t,En.length)===En?Tn(t=Bn(t,En.length)):t},tagU16A:Ln,u16arr2b64:function(t){return On(t)?Ln+zn(t):t},b642u16arr:function(t){return Vr(t)&&Sn(t,Ln.length)===Ln?Cn(t=Bn(t,Ln.length)):t}};function Fn(t){return"[object Undefined]"===Object.prototype.toString.call(t)}function Nn(t){return"[object Array]"===Object.prototype.toString.call(t)}function Qn(t,e,r,n,o){var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(Fn(t))return"";if(Vr(e))e=[e];else if(!Nn(e))return"";function r(t,r){return e.indexOf("Uint8Array")>=0&&(r=Dn.u8arr2b64(r)),e.indexOf("Uint16Array")>=0&&(r=Dn.u16arr2b64(r)),r}var n="";try{n=JSON.stringify(t,r)}catch(t){n=""}return n}(r),u=hn(i,e),a=sn(),c=u.length;mn(u,(function(e,r){e=bn(e,"");var i="".concat(a,"|").concat(r,"|").concat(c,"|").concat(e);t.send(i,(function(t){t&&E(o)&&o(t)})),E(n)&&n((r+1)/c*100)}))}var Wn=function(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:ln(t,e,r)},Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var $n=function(t){return Rn.test(t)};var Vn=function(t){return Bt(t)&&"[object RegExp]"==T(t)},Hn=Rt&&Rt.isRegExp,qn=Hn?Wt(Hn):Vn;var Gn=function(t){return t.split("")},Jn="\\ud800-\\udfff",Kn="["+Jn+"]",Xn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Yn="\\ud83c[\\udffb-\\udfff]",Zn="[^"+Jn+"]",to="(?:\\ud83c[\\udde6-\\uddff]){2}",eo="[\\ud800-\\udbff][\\udc00-\\udfff]",ro="(?:"+Xn+"|"+Yn+")"+"?",no="[\\ufe0e\\ufe0f]?",oo=no+ro+("(?:\\u200d(?:"+[Zn,to,eo].join("|")+")"+no+ro+")*"),io="(?:"+[Zn+Xn+"?",Xn,to,eo,Kn].join("|")+")",uo=RegExp(Yn+"(?="+Yn+")|"+io+oo,"g");var ao=function(t){return t.match(uo)||[]};var co=function(t){return $n(t)?ao(t):Gn(t)};var fo=function(t,e,r){return r&&"number"!=typeof r&&vn(t,e,r)&&(e=r=void 0),(r=void 0===r?4294967295:r>>>0)?(t=xr(t))&&("string"==typeof e||null!=e&&!qn(e))&&!(e=Or(e))&&$n(t)?Wn(co(t),0,r):t.split(e,r):[]};var so=function(t,e,r){var n=null==t?0:t.length;return n?(e=r||void 0===e?1:Rr(e),ln(t,e<0?0:e,n)):[]},lo=Math.ceil,vo=Math.max;var po=function(t,e,r,n){for(var o=-1,i=vo(lo((e-t)/(r||1)),0),u=Array(i);i--;)u[n?i:++o]=t,t+=r;return u};var yo=function(t){return function(e,r,n){return n&&"number"!=typeof n&&vn(e,r,n)&&(r=n=void 0),e=Wr(e),void 0===r?(r=e,e=0):r=Wr(r),n=void 0===n?e<r?1:-1:Wr(n),po(e,r,n,t)}}();function ho(t,e){return r=t,"[object Object]"===Object.prototype.toString.call(r)&&(!(!Hr(e)&&!qr(e))&&e in t);var r}var bo={};function go(t,e){var r=fo(t,"|"),n=r[0],o=Nr(r[1]),i=Nr(r[2]),u=bn(so(r,3),"|");if(ho(bo,n)||(bo[n]={}),bo[n]["_"+o]=u,o===i-1){var a="";mn(yo(i),(function(t){a+=bo[n]["_"+t]})),delete bo[n];var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(Vr(e))e=[e];else if(!Nn(e))return{};function r(t,r){return e.indexOf("Uint8Array")>=0&&(r=Dn.b642u8arr(r)),e.indexOf("Uint16Array")>=0&&(r=Dn.b642u16arr(r)),r}var n={};try{n=JSON.parse(t,r)}catch(t){n={}}return n}(a);e(c)}}function _o(t){var e=!1,r=null,n=new Mr,o=new Mr;function i(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];setTimeout((function(){n.emit.apply(n,[t].concat(r))}),1)}function u(){t.url||(t.url="ws://localhost:8080"),t.token||(t.token="*"),t.strSplitLength||(t.strSplitLength=1e6);var u={url:t.url,token:t.token,open:function(){i("open"),e||(i("openOnce"),e=!0)},close:function(){i("close"),a()},message:function(t){!function(t){go(t,f)}(t)},error:function(t){c(t)}};try{r=new on(u)}catch(t){return i("error",{msg:"can not create websocket",err:t}),void a()}if(kr(r,"error"))return i("error",{msg:"can not create websocket",err:"can not new MixWS in WWebsocketClient"}),void a();function c(t){i("error",{msg:"websocket error",err:t}),r.close()}function f(t){var e=kr(t,"_mode","");if("execute"===e)if(kr(t,"_id")&&kr(t,"output")){var r=kr(t,"_id"),n=kr(t,"output");o.emit(r,n)}else i("error",{msg:"can not find _id and output in data",err:t});else"broadcast"===e?i("broadcast",kr(t,"data")):"deliver"===e?i("deliver",kr(t,"data")):c({msg:"can not find _mode in data",err:t})}function s(e,n){r.readyState===r.OPEN&&Qn(r,t.strSplitLength,e,n,(function(t){i("error",{msg:"can not send message",err:t})}))}n.removeAllListeners("triggerExecute"),n.on("triggerExecute",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=sn(),u={_mode:"execute",_id:i,func:t,input:e};s(u,n),o.on(i,(function(t){r(t),o.removeAllListeners(i)}))})),n.removeAllListeners("triggerBroadcast"),n.on("triggerBroadcast",(function(t,e){s({_mode:"broadcast",data:t},e)})),n.removeAllListeners("triggerDeliver"),n.on("triggerDeliver",(function(t,e){s({_mode:"deliver",data:t},e)}))}function a(){setTimeout((function(){i("reconn"),u()}),1e3)}return n.execute=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=un();return i("triggerExecute",t,e,(function(t){n.resolve(t)}),r),n},n.broadcast=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};i("triggerBroadcast",t,e)},n.deliver=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};i("triggerDeliver",t,e)},u(),n}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(t=lr(t)).url||(t.url="ws://localhost:8080"),t.token||(t.token="*"),t.takeNumLimit||(t.takeNumLimit=0);var e=new _o(t),r=en(t.takeNumLimit);function n(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o={topic:t,input:r,option:n};return e.execute("pushQueue",o)}function o(t,r,n,o,i){var u={topic:t,id:r,input:n,output:o,state:i};return e.execute("modifyQueue",u)}function i(t){var r={topic:t};return e.execute("subTopic",r)}function u(t){var r={topic:t};return e.execute("unsubTopic",r)}function a(t){var r={topic:t};return e.execute("getQueueByTopic",r)}function c(t){var r={id:t};return e.execute("getQueueByID",r)}function f(t){var r={ids:t};return e.execute("getQueueByIDs",r)}function s(t){var r={find:t};return e.execute("getQueueByMatches",r)}function l(t){var r={topic:t};return e.execute("delQueueByTopic",r)}function v(t){var r={id:t};return e.execute("delQueueByID",r)}function p(t){var r={ids:t};return e.execute("delQueueByIDs",r)}function y(t){var r={find:t};return e.execute("delQueueByMatches",r)}return r.on("message",(function(t){var n=r.get();n&&e.emit("queueChange",kr(n,"topic",null),kr(n,"id",null),kr(n,"input",null),kr(n,"output",null),kr(n,"state",null),(function(){r.cb()}))})),e.on("deliver",(function(t){kr(t,"topic",null)&&r.push(t)})),e.pushQueue=n,e.modifyQueue=o,e.subTopic=i,e.unsubTopic=u,e.getQueueByTopic=a,e.getQueueByID=c,e.getQueueByIDs=f,e.getQueueByMatches=s,e.delQueueByTopic=l,e.delQueueByID=v,e.delQueueByIDs=p,e.delQueueByMatches=y,e}}));
//# sourceMappingURL=w-runqws-client.umd.js.map
