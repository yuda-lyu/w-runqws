/*!
 * w-runqws-client v1.0.21
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("ws")):"function"==typeof define&&define.amd?define(["ws"],e):(t=t||self)["w-runqws-client"]=e(t.ws)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var e=function(){this.__data__=[],this.size=0};var r=function(t,e){return t===e||t!=t&&e!=e};var n=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1},o=Array.prototype.splice;var i=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)};var u=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]};var a=function(t){return n(this.__data__,t)>-1};var c=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};function f(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}f.prototype.clear=e,f.prototype.delete=i,f.prototype.get=u,f.prototype.has=a,f.prototype.set=c;var s=f;var l=function(){this.__data__=new s,this.size=0};var v=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var p=function(t){return this.__data__.get(t)};var y=function(t){return this.__data__.has(t)},h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(t,e){return t(e={exports:{}},e.exports),e.exports}var b=d((function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e})),g="object"==b(h)&&h&&h.Object===Object&&h,j="object"==("undefined"==typeof self?"undefined":b(self))&&self&&self.Object===Object&&self,_=g||j||Function("return this")(),w=_.Symbol,m=Object.prototype,A=m.hasOwnProperty,O=m.toString,x=w?w.toStringTag:void 0;var S=function(t){var e=A.call(t,x),r=t[x];try{t[x]=void 0;var n=!0}catch(t){}var o=O.call(t);return n&&(e?t[x]=r:delete t[x]),o},B=Object.prototype.toString;var U=function(t){return B.call(t)},k=w?w.toStringTag:void 0;var I=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?S(t):U(t)};var M=function(t){var e=b(t);return null!=t&&("object"==e||"function"==e)};var P,z=function(t){if(!M(t))return!1;var e=I(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},C=_["__core-js_shared__"],T=(P=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var E=function(t){return!!T&&T in t},F=Function.prototype.toString;var D=function(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""},L=/^\[object .+?Constructor\]$/,N=Function.prototype,Q=Object.prototype,W=N.toString,$=Q.hasOwnProperty,R=RegExp("^"+W.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var H=function(t){return!(!M(t)||E(t))&&(z(t)?R:L).test(D(t))};var V=function(t,e){return null==t?void 0:t[e]};var q=function(t,e){var r=V(t,e);return H(r)?r:void 0},G=q(_,"Map"),J=q(Object,"create");var K=function(){this.__data__=J?J(null):{},this.size=0};var X=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Y=Object.prototype.hasOwnProperty;var Z=function(t){var e=this.__data__;if(J){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Y.call(e,t)?e[t]:void 0},tt=Object.prototype.hasOwnProperty;var et=function(t){var e=this.__data__;return J?void 0!==e[t]:tt.call(e,t)};var rt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this};function nt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}nt.prototype.clear=K,nt.prototype.delete=X,nt.prototype.get=Z,nt.prototype.has=et,nt.prototype.set=rt;var ot=nt;var it=function(){this.size=0,this.__data__={hash:new ot,map:new(G||s),string:new ot}};var ut=function(t){var e=b(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var at=function(t,e){var r=t.__data__;return ut(e)?r["string"==typeof e?"string":"hash"]:r.map};var ct=function(t){var e=at(this,t).delete(t);return this.size-=e?1:0,e};var ft=function(t){return at(this,t).get(t)};var st=function(t){return at(this,t).has(t)};var lt=function(t,e){var r=at(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}vt.prototype.clear=it,vt.prototype.delete=ct,vt.prototype.get=ft,vt.prototype.has=st,vt.prototype.set=lt;var pt=vt;var yt=function(t,e){var r=this.__data__;if(r instanceof s){var n=r.__data__;if(!G||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new pt(n)}return r.set(t,e),this.size=r.size,this};function ht(t){var e=this.__data__=new s(t);this.size=e.size}ht.prototype.clear=l,ht.prototype.delete=v,ht.prototype.get=p,ht.prototype.has=y,ht.prototype.set=yt;var dt=ht;var bt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},gt=function(){try{var t=q(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var jt=function(t,e,r){"__proto__"==e&&gt?gt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},_t=Object.prototype.hasOwnProperty;var wt=function(t,e,n){var o=t[e];_t.call(t,e)&&r(o,n)&&(void 0!==n||e in t)||jt(t,e,n)};var mt=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,u=e.length;++i<u;){var a=e[i],c=n?n(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),o?jt(r,a,c):wt(r,a,c)}return r};var At=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var Ot=function(t){return null!=t&&"object"==b(t)};var xt=function(t){return Ot(t)&&"[object Arguments]"==I(t)},St=Object.prototype,Bt=St.hasOwnProperty,Ut=St.propertyIsEnumerable,kt=xt(function(){return arguments}())?xt:function(t){return Ot(t)&&Bt.call(t,"callee")&&!Ut.call(t,"callee")},It=Array.isArray;var Mt=function(){return!1},Pt=d((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?_.Buffer:void 0,i=(o?o.isBuffer:void 0)||Mt;t.exports=i})),zt=/^(?:0|[1-9]\d*)$/;var Ct=function(t,e){var r=b(t);return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&zt.test(t))&&t>-1&&t%1==0&&t<e};var Tt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Et={};Et["[object Float32Array]"]=Et["[object Float64Array]"]=Et["[object Int8Array]"]=Et["[object Int16Array]"]=Et["[object Int32Array]"]=Et["[object Uint8Array]"]=Et["[object Uint8ClampedArray]"]=Et["[object Uint16Array]"]=Et["[object Uint32Array]"]=!0,Et["[object Arguments]"]=Et["[object Array]"]=Et["[object ArrayBuffer]"]=Et["[object Boolean]"]=Et["[object DataView]"]=Et["[object Date]"]=Et["[object Error]"]=Et["[object Function]"]=Et["[object Map]"]=Et["[object Number]"]=Et["[object Object]"]=Et["[object RegExp]"]=Et["[object Set]"]=Et["[object String]"]=Et["[object WeakMap]"]=!1;var Ft=function(t){return Ot(t)&&Tt(t.length)&&!!Et[I(t)]};var Dt=function(t){return function(e){return t(e)}},Lt=d((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&g.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),Nt=Lt&&Lt.isTypedArray,Qt=Nt?Dt(Nt):Ft,Wt=Object.prototype.hasOwnProperty;var $t=function(t,e){var r=It(t),n=!r&&kt(t),o=!r&&!n&&Pt(t),i=!r&&!n&&!o&&Qt(t),u=r||n||o||i,a=u?At(t.length,String):[],c=a.length;for(var f in t)!e&&!Wt.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Ct(f,c))||a.push(f);return a},Rt=Object.prototype;var Ht=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Rt)};var Vt=function(t,e){return function(r){return t(e(r))}},qt=Vt(Object.keys,Object),Gt=Object.prototype.hasOwnProperty;var Jt=function(t){if(!Ht(t))return qt(t);var e=[];for(var r in Object(t))Gt.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Kt=function(t){return null!=t&&Tt(t.length)&&!z(t)};var Xt=function(t){return Kt(t)?$t(t):Jt(t)};var Yt=function(t,e){return t&&mt(e,Xt(e),t)};var Zt=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},te=Object.prototype.hasOwnProperty;var ee=function(t){if(!M(t))return Zt(t);var e=Ht(t),r=[];for(var n in t)("constructor"!=n||!e&&te.call(t,n))&&r.push(n);return r};var re=function(t){return Kt(t)?$t(t,!0):ee(t)};var ne=function(t,e){return t&&mt(e,re(e),t)},oe=d((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?_.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}));var ie=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var ue=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i};var ae=function(){return[]},ce=Object.prototype.propertyIsEnumerable,fe=Object.getOwnPropertySymbols,se=fe?function(t){return null==t?[]:(t=Object(t),ue(fe(t),(function(e){return ce.call(t,e)})))}:ae;var le=function(t,e){return mt(t,se(t),e)};var ve=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},pe=Vt(Object.getPrototypeOf,Object),ye=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)ve(e,se(t)),t=pe(t);return e}:ae;var he=function(t,e){return mt(t,ye(t),e)};var de=function(t,e,r){var n=e(t);return It(t)?n:ve(n,r(t))};var be=function(t){return de(t,Xt,se)};var ge=function(t){return de(t,re,ye)},je=q(_,"DataView"),_e=q(_,"Promise"),we=q(_,"Set"),me=q(_,"WeakMap"),Ae=D(je),Oe=D(G),xe=D(_e),Se=D(we),Be=D(me),Ue=I;(je&&"[object DataView]"!=Ue(new je(new ArrayBuffer(1)))||G&&"[object Map]"!=Ue(new G)||_e&&"[object Promise]"!=Ue(_e.resolve())||we&&"[object Set]"!=Ue(new we)||me&&"[object WeakMap]"!=Ue(new me))&&(Ue=function(t){var e=I(t),r="[object Object]"==e?t.constructor:void 0,n=r?D(r):"";if(n)switch(n){case Ae:return"[object DataView]";case Oe:return"[object Map]";case xe:return"[object Promise]";case Se:return"[object Set]";case Be:return"[object WeakMap]"}return e});var ke=Ue,Ie=Object.prototype.hasOwnProperty;var Me=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Ie.call(t,"index")&&(r.index=t.index,r.input=t.input),r},Pe=_.Uint8Array;var ze=function(t){var e=new t.constructor(t.byteLength);return new Pe(e).set(new Pe(t)),e};var Ce=function(t,e){var r=e?ze(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},Te=/\w*$/;var Ee=function(t){var e=new t.constructor(t.source,Te.exec(t));return e.lastIndex=t.lastIndex,e},Fe=w?w.prototype:void 0,De=Fe?Fe.valueOf:void 0;var Le=function(t){return De?Object(De.call(t)):{}};var Ne=function(t,e){var r=e?ze(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var Qe=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return ze(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return Ce(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ne(t,r);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return Ee(t);case"[object Set]":return new n;case"[object Symbol]":return Le(t)}},We=Object.create,$e=function(){function t(){}return function(e){if(!M(e))return{};if(We)return We(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var Re=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:$e(pe(t))};var He=function(t){return Ot(t)&&"[object Map]"==ke(t)},Ve=Lt&&Lt.isMap,qe=Ve?Dt(Ve):He;var Ge=function(t){return Ot(t)&&"[object Set]"==ke(t)},Je=Lt&&Lt.isSet,Ke=Je?Dt(Je):Ge,Xe={};Xe["[object Arguments]"]=Xe["[object Array]"]=Xe["[object ArrayBuffer]"]=Xe["[object DataView]"]=Xe["[object Boolean]"]=Xe["[object Date]"]=Xe["[object Float32Array]"]=Xe["[object Float64Array]"]=Xe["[object Int8Array]"]=Xe["[object Int16Array]"]=Xe["[object Int32Array]"]=Xe["[object Map]"]=Xe["[object Number]"]=Xe["[object Object]"]=Xe["[object RegExp]"]=Xe["[object Set]"]=Xe["[object String]"]=Xe["[object Symbol]"]=Xe["[object Uint8Array]"]=Xe["[object Uint8ClampedArray]"]=Xe["[object Uint16Array]"]=Xe["[object Uint32Array]"]=!0,Xe["[object Error]"]=Xe["[object Function]"]=Xe["[object WeakMap]"]=!1;var Ye=function t(e,r,n,o,i,u){var a,c=1&r,f=2&r,s=4&r;if(n&&(a=i?n(e,o,i,u):n(e)),void 0!==a)return a;if(!M(e))return e;var l=It(e);if(l){if(a=Me(e),!c)return ie(e,a)}else{var v=ke(e),p="[object Function]"==v||"[object GeneratorFunction]"==v;if(Pt(e))return oe(e,c);if("[object Object]"==v||"[object Arguments]"==v||p&&!i){if(a=f||p?{}:Re(e),!c)return f?he(e,ne(a,e)):le(e,Yt(a,e))}else{if(!Xe[v])return i?e:{};a=Qe(e,v,c)}}u||(u=new dt);var y=u.get(e);if(y)return y;u.set(e,a),Ke(e)?e.forEach((function(o){a.add(t(o,r,n,o,e,u))})):qe(e)&&e.forEach((function(o,i){a.set(i,t(o,r,n,i,e,u))}));var h=s?f?ge:be:f?keysIn:Xt,d=l?void 0:h(e);return bt(d||e,(function(o,i){d&&(o=e[i=o]),wt(a,i,t(o,r,n,i,e,u))})),a};var Ze=function(t){return Ye(t,5)};var tr=function(t){return"symbol"==b(t)||Ot(t)&&"[object Symbol]"==I(t)},er=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rr=/^\w*$/;var nr=function(t,e){if(It(t))return!1;var r=b(t);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!tr(t))||(rr.test(t)||!er.test(t)||null!=e&&t in Object(e))};function or(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u)||i,u};return r.cache=new(or.Cache||pt),r}or.Cache=pt;var ir=or;var ur=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ar=/\\(\\)?/g,cr=function(t){var e=ir(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ur,(function(t,r,n,o){e.push(n?o.replace(ar,"$1"):r||t)})),e}));var fr=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},sr=w?w.prototype:void 0,lr=sr?sr.toString:void 0;var vr=function t(e){if("string"==typeof e)return e;if(It(e))return fr(e,t)+"";if(tr(e))return lr?lr.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var pr=function(t){return null==t?"":vr(t)};var yr=function(t,e){return It(t)?t:nr(t,e)?[t]:cr(pr(t))};var hr=function(t){if("string"==typeof t||tr(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var dr=function(t,e){for(var r=0,n=(e=yr(e,t)).length;null!=t&&r<n;)t=t[hr(e[r++])];return r&&r==n?t:void 0};var br=function(t,e,r){var n=null==t?void 0:dr(t,e);return void 0===n?r:n},gr=d((function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}function o(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function i(t,e,n,i,u){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new o(n,i||t,u),c=r?r+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function u(t,e){0==--t._eventsCount?t._events=new n:delete t._events[e]}function a(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(r=!1)),a.prototype.eventNames=function(){var t,n,o=[];if(0===this._eventsCount)return o;for(n in t=this._events)e.call(t,n)&&o.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},a.prototype.listeners=function(t){var e=r?r+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var o=0,i=n.length,u=new Array(i);o<i;o++)u[o]=n[o].fn;return u},a.prototype.listenerCount=function(t){var e=r?r+t:t,n=this._events[e];return n?n.fn?1:n.length:0},a.prototype.emit=function(t,e,n,o,i,u){var a=r?r+t:t;if(!this._events[a])return!1;var c,f,s=this._events[a],l=arguments.length;if(s.fn){switch(s.once&&this.removeListener(t,s.fn,void 0,!0),l){case 1:return s.fn.call(s.context),!0;case 2:return s.fn.call(s.context,e),!0;case 3:return s.fn.call(s.context,e,n),!0;case 4:return s.fn.call(s.context,e,n,o),!0;case 5:return s.fn.call(s.context,e,n,o,i),!0;case 6:return s.fn.call(s.context,e,n,o,i,u),!0}for(f=1,c=new Array(l-1);f<l;f++)c[f-1]=arguments[f];s.fn.apply(s.context,c)}else{var v,p=s.length;for(f=0;f<p;f++)switch(s[f].once&&this.removeListener(t,s[f].fn,void 0,!0),l){case 1:s[f].fn.call(s[f].context);break;case 2:s[f].fn.call(s[f].context,e);break;case 3:s[f].fn.call(s[f].context,e,n);break;case 4:s[f].fn.call(s[f].context,e,n,o);break;default:if(!c)for(v=1,c=new Array(l-1);v<l;v++)c[v-1]=arguments[v];s[f].fn.apply(s[f].context,c)}}return!0},a.prototype.on=function(t,e,r){return i(this,t,e,r,!1)},a.prototype.once=function(t,e,r){return i(this,t,e,r,!0)},a.prototype.removeListener=function(t,e,n,o){var i=r?r+t:t;if(!this._events[i])return this;if(!e)return u(this,i),this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||n&&a.context!==n||u(this,i);else{for(var c=0,f=[],s=a.length;c<s;c++)(a[c].fn!==e||o&&!a[c].once||n&&a[c].context!==n)&&f.push(a[c]);f.length?this._events[i]=1===f.length?f[0]:f:u(this,i)}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=r?r+t:t,this._events[e]&&u(this,e)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,t.exports=a}));function jr(){return new gr}var _r=/^\s+|\s+$/g,wr=/^[-+]0x[0-9a-f]+$/i,mr=/^0b[01]+$/i,Ar=/^0o[0-7]+$/i,Or=parseInt;var xr=function(t){if("number"==typeof t)return t;if(tr(t))return NaN;if(M(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=M(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(_r,"");var r=mr.test(t);return r||Ar.test(t)?Or(t.slice(2),r?2:8):wr.test(t)?NaN:+t};var Sr=function(t){return t?(t=xr(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Br=function(t){var e=Sr(t),r=e%1;return e==e?r?e-r:e:0};var Ur=function(t){return"number"==typeof t&&t==Br(t)};function kr(t){return"[object String]"===Object.prototype.toString.call(t)}function Ir(t){return!(!kr(t)||""===t)}function Mr(t){var e=!1;return Ir(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function Pr(t){return Mr(t)?Sr(t):0}function zr(t){return!!Mr(t)&&(t=Pr(t),Ur(t))}var Cr=_.isFinite,Tr=Math.min;var Er=function(t){var e=Math[t];return function(t,r){if(t=xr(t),(r=null==r?0:Tr(Br(r),292))&&Cr(t)){var n=(pr(t)+"e").split("e"),o=e(n[0]+"e"+(+n[1]+r));return+((n=(pr(o)+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}("round");function Fr(t){if(!Mr(t))return 0;t=Pr(t);var e=Er(t);return"0"===String(e)?0:e}function Dr(t){return!!zr(t)&&Fr(t)<0}function Lr(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=0,r=[];Dr(t)&&(t=0),t=Fr(t);var n=jr();function o(){if(r.length>0)return e+=1,r.splice(0,1)[0];return null}function i(){(e-=1)<0&&(e=0),r.length>0&&n.emit("message",r)}function u(o){r.push(o),(t<=0||e<t)&&n.emit("message",r)}function a(){e=0,r=[]}return n.get=o,n.cb=i,n.push=u,n.clear=a,n}function Nr(){return"undefined"!=typeof window&&void 0!==window.document}function Qr(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function Wr(e){var r=null;e.url||(e.url="ws://localhost:8080"),e.token||(e.token="*");var n,o=function(){var t=Nr(),e="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;return{isBrowser:t=t||e,isWebWorker:e,isNode:"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node}}().isBrowser;n=o?("undefined"!=typeof self?self:Nr()?window:"undefined"!=typeof global?global:null).WebSocket:t;try{r=new n(e.url+"/?token="+e.token)}catch(t){r=null}if(null===r)return{error:"can not new MixWS"};function i(){Qr(e.open)&&e.open()}function u(){Qr(e.close)&&e.close()}function a(t){Qr(e.message)&&e.message(t)}function c(t){Qr(e.error)&&e.error(t),r.close()}return o?(r.onopen=i,r.onmessage=function(t){a(t.data)},r.onclose=u,r.onerror=c):(r.on("open",i),r.on("message",a),r.on("close",u),r.on("error",c)),r}function $r(){var t,e,r=new Promise((function(){t=arguments[0],e=arguments[1]}));return r.resolve=t,r.reject=e,r}function Rr(t){return!!zr(t)&&Fr(t)>0}var Hr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),Vr=Hr.length;function qr(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e=[];t=Rr(t)?Fr(t):32;for(var r=0;r<t;r++)e[r]=Hr[0|Math.random()*Vr];var n=e.join("");return n}var Gr=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i};var Jr=function(t,e,n){if(!M(n))return!1;var o=b(e);return!!("number"==o?Kt(n)&&Ct(e,n.length):"string"==o&&e in n)&&r(n[e],t)},Kr=Math.ceil,Xr=Math.max;var Yr=function(t,e,r){e=(r?Jr(t,e,r):void 0===e)?1:Xr(Br(e),0);var n=null==t?0:t.length;if(!n||e<1)return[];for(var o=0,i=0,u=Array(Kr(n/e));o<n;)u[i++]=Gr(t,o,o+=e);return u},Zr=Array.prototype.join;var tn=function(t,e){return null==t?"":Zr.call(t,e)};var en=function(t){return function(e,r,n){for(var o=-1,i=Object(e),u=n(e),a=u.length;a--;){var c=u[t?a:++o];if(!1===r(i[c],c,i))break}return e}}();var rn=function(t,e){return function(r,n){if(null==r)return r;if(!Kt(r))return t(r,n);for(var o=r.length,i=e?o:-1,u=Object(r);(e?i--:++i<o)&&!1!==n(u[i],i,u););return r}}((function(t,e){return t&&en(t,e,Xt)}));var nn=function(t){return t};var on=function(t){return"function"==typeof t?t:nn};var un=function(t,e){return(It(t)?bt:rn)(t,on(e))};function an(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)}function cn(t){return"[object Uint16Array]"===Object.prototype.toString.call(t)}function fn(t,e){return Ir(t)&&Rr(e)?t.substr(0,e):""}function sn(t,e){return Ir(t)&&Rr(e)?function(t,e){if(!Ir(t))return"";if(!Rr(e))return"";var r=t.length-e;return r<0&&(r=0),t.substr(r,e)}(t,t.length-e):""}var ln=d((function(t,e){var r;t.exports=(r=r||function(t,e){var r=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),n={},o=n.lib={},i=o.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},u=o.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,o=t.sigBytes;if(this.clamp(),n%4)for(var i=0;i<o;i++){var u=r[i>>>2]>>>24-i%4*8&255;e[n+i>>>2]|=u<<24-(n+i)%4*8}else for(i=0;i<o;i+=4)e[n+i>>>2]=r[i>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r,n=[],o=function(e){e=e;var r=987654321,n=4294967295;return function(){var o=((r=36969*(65535&r)+(r>>16)&n)<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n;return o/=4294967296,(o+=.5)*(t.random()>.5?1:-1)}},i=0;i<e;i+=4){var a=o(4294967296*(r||t.random()));r=987654071*a(),n.push(4294967296*a()|0)}return new u.init(n,e)}}),a=n.enc={},c=a.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],o=0;o<r;o++){var i=e[o>>>2]>>>24-o%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new u.init(r,e/2)}},f=a.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],o=0;o<r;o++){var i=e[o>>>2]>>>24-o%4*8&255;n.push(String.fromCharCode(i))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new u.init(r,e)}},s=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=s.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,o=r.sigBytes,i=this.blockSize,a=o/(4*i),c=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*i,f=t.min(4*c,o);if(c){for(var s=0;s<c;s+=i)this._doProcessBlock(n,s);var l=n.splice(0,c);r.sigBytes-=f}return new u.init(l,f)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),v=(o.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new v.HMAC.init(t,r).finalize(e)}}}),n.algo={});return n}(Math),r)})),vn=d((function(t,e){var r,n,o;t.exports=(n=(r=o=ln).lib.WordArray,r.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var o=[],i=0;i<r;i+=3)for(var u=(e[i>>>2]>>>24-i%4*8&255)<<16|(e[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|e[i+2>>>2]>>>24-(i+2)%4*8&255,a=0;a<4&&i+.75*a<r;a++)o.push(n.charAt(u>>>6*(3-a)&63));var c=n.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var e=t.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<r.length;i++)o[r.charCodeAt(i)]=i}var u=r.charAt(64);if(u){var a=t.indexOf(u);-1!==a&&(e=a)}return function(t,e,r){for(var o=[],i=0,u=0;u<e;u++)if(u%4){var a=r[t.charCodeAt(u-1)]<<u%4*2,c=r[t.charCodeAt(u)]>>>6-u%4*2;o[i>>>2]|=(a|c)<<24-i%4*8,i++}return n.create(o,i)}(t,e,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},o.enc.Base64)})),pn=d((function(t,e){var r;t.exports=(r=ln,function(){if("function"==typeof ArrayBuffer){var t=r.lib.WordArray,e=t.init;(t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var r=t.byteLength,n=[],o=0;o<r;o++)n[o>>>2]|=t[o]<<24-o%4*8;e.call(this,n,r)}else e.apply(this,arguments)}).prototype=t}}(),r.lib.WordArray)}));function yn(t){return an(t)?pn.create(t).toString(vn):""}function hn(t){if(!kr(t))return new Uint8Array;for(var e=vn.parse(t),r=e.words,n=e.sigBytes,o=new Uint8Array(n),i=0;i<n;i++){var u=r[i>>>2]>>>24-i%4*8&255;o[i]=u}return o}function dn(t){return cn(t)?yn(function(t){return cn(t)?new Uint8Array(t):new Uint8Array}(t)):""}function bn(t){return kr(t)?function(t){return an(t)?new Uint16Array(t):new Uint16Array}(hn(t)):new Uint16Array}var gn="[Uint8Array]::";var jn="[Uint16Array]::";var _n={tagU8A:gn,u8arr2b64:function(t){return an(t)?gn+yn(t):t},b642u8arr:function(t){return kr(t)&&fn(t,gn.length)===gn?hn(t=sn(t,gn.length)):t},tagU16A:jn,u16arr2b64:function(t){return cn(t)?jn+dn(t):t},b642u16arr:function(t){return kr(t)&&fn(t,jn.length)===jn?bn(t=sn(t,jn.length)):t}};function wn(t){return"[object Undefined]"===Object.prototype.toString.call(t)}function mn(t){return"[object Array]"===Object.prototype.toString.call(t)}function An(t,e,r,n,o){var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(wn(t))return"";if(kr(e))e=[e];else if(!mn(e))return"";function r(t,r){return e.indexOf("Uint8Array")>=0&&(r=_n.u8arr2b64(r)),e.indexOf("Uint16Array")>=0&&(r=_n.u16arr2b64(r)),r}var n="";try{n=JSON.stringify(t,r)}catch(t){n=""}return n}(r),u=Yr(i,e),a=qr(),c=u.length;un(u,(function(e,r){e=tn(e,"");var i="".concat(a,"|").concat(r,"|").concat(c,"|").concat(e);t.send(i,(function(t){t&&z(o)&&o(t)})),z(n)&&n((r+1)/c*100)}))}var On=function(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:Gr(t,e,r)},xn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Sn=function(t){return xn.test(t)};var Bn=function(t){return Ot(t)&&"[object RegExp]"==I(t)},Un=Lt&&Lt.isRegExp,kn=Un?Dt(Un):Bn;var In=function(t){return t.split("")},Mn="[\\ud800-\\udfff]",Pn="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",zn="\\ud83c[\\udffb-\\udfff]",Cn="[^\\ud800-\\udfff]",Tn="(?:\\ud83c[\\udde6-\\uddff]){2}",En="[\\ud800-\\udbff][\\udc00-\\udfff]",Fn="(?:"+Pn+"|"+zn+")"+"?",Dn="[\\ufe0e\\ufe0f]?"+Fn+("(?:\\u200d(?:"+[Cn,Tn,En].join("|")+")[\\ufe0e\\ufe0f]?"+Fn+")*"),Ln="(?:"+[Cn+Pn+"?",Pn,Tn,En,Mn].join("|")+")",Nn=RegExp(zn+"(?="+zn+")|"+Ln+Dn,"g");var Qn=function(t){return t.match(Nn)||[]};var Wn=function(t){return Sn(t)?Qn(t):In(t)};var $n=function(t,e,r){return r&&"number"!=typeof r&&Jr(t,e,r)&&(e=r=void 0),(r=void 0===r?4294967295:r>>>0)?(t=pr(t))&&("string"==typeof e||null!=e&&!kn(e))&&!(e=vr(e))&&Sn(t)?On(Wn(t),0,r):t.split(e,r):[]};var Rn=function(t,e,r){var n=null==t?0:t.length;return n?(e=r||void 0===e?1:Br(e),Gr(t,e<0?0:e,n)):[]},Hn=Math.ceil,Vn=Math.max;var qn=function(t,e,r,n){for(var o=-1,i=Vn(Hn((e-t)/(r||1)),0),u=Array(i);i--;)u[n?i:++o]=t,t+=r;return u};var Gn=function(t){return function(e,r,n){return n&&"number"!=typeof n&&Jr(e,r,n)&&(r=n=void 0),e=Sr(e),void 0===r?(r=e,e=0):r=Sr(r),n=void 0===n?e<r?1:-1:Sr(n),qn(e,r,n,t)}}();function Jn(t,e){return r=t,"[object Object]"===Object.prototype.toString.call(r)&&(!!Ir(e)&&e in t);var r}var Kn={};function Xn(t,e){var r=$n(t,"|"),n=r[0],o=xr(r[1]),i=xr(r[2]),u=tn(Rn(r,3),"|");if(Jn(Kn,n)||(Kn[n]={}),Kn[n]["_"+o]=u,o===i-1){var a="";un(Gn(i),(function(t){a+=Kn[n]["_"+t]})),delete Kn[n],e(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(kr(e))e=[e];else if(!mn(e))return{};function r(t,r){return e.indexOf("Uint8Array")>=0&&(r=_n.b642u8arr(r)),e.indexOf("Uint16Array")>=0&&(r=_n.b642u16arr(r)),r}var n={};try{n=JSON.parse(t,r)}catch(t){n={}}return n}(a))}}function Yn(t){var e=!1,r=null,n=new jr,o=new jr;function i(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];setTimeout((function(){n.emit.apply(n,[t].concat(r))}),1)}function u(){t.url||(t.url="ws://localhost:8080"),t.token||(t.token="*"),t.strSplitLength||(t.strSplitLength=1e6);var u={url:t.url,token:t.token,open:function(){i("open"),e||(i("openOnce"),e=!0)},close:function(){i("close"),a()},message:function(t){!function(t){Xn(t,f)}(t)},error:function(t){c(t)}};try{r=new Wr(u)}catch(t){return i("error",{msg:"can not create websocket",err:t}),void a()}if(br(r,"error"))return i("error",{msg:"can not create websocket",err:"can not new MixWS in WWebsocketClient"}),void a();function c(t){i("error",{msg:"websocket error",err:t}),r.close()}function f(t){var e=br(t,"_mode","");if("execute"===e)if(br(t,"_id")&&br(t,"output")){var r=br(t,"_id"),n=br(t,"output");o.emit(r,n)}else i("error",{msg:"can not find _id and output in data",err:t});else"broadcast"===e?i("broadcast",br(t,"data")):"deliver"===e?i("deliver",br(t,"data")):c({msg:"can not find _mode in data",err:t})}function s(e,n){r.readyState===r.OPEN&&An(r,t.strSplitLength,e,n,(function(t){i("error",{msg:"can not send message",err:t})}))}n.removeAllListeners("triggerExecute"),n.on("triggerExecute",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=qr(),u={_mode:"execute",_id:i,func:t,input:e};s(u,n),o.on(i,(function(t){r(t),o.removeAllListeners(i)}))})),n.removeAllListeners("triggerBroadcast"),n.on("triggerBroadcast",(function(t,e){s({_mode:"broadcast",data:t},e)})),n.removeAllListeners("triggerDeliver"),n.on("triggerDeliver",(function(t,e){s({_mode:"deliver",data:t},e)}))}function a(){setTimeout((function(){i("reconn"),u()}),1e3)}return n.execute=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=$r();return i("triggerExecute",t,e,(function(t){n.resolve(t)}),r),n},n.broadcast=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};i("triggerBroadcast",t,e)},n.deliver=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};i("triggerDeliver",t,e)},u(),n}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(t=Ze(t)).url||(t.url="ws://localhost:8080"),t.token||(t.token="*"),t.takeNumLimit||(t.takeNumLimit=0);var e=new Yn(t),r=Lr(t.takeNumLimit);function n(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o={topic:t,input:r,option:n};return e.execute("pushQueue",o)}function o(t,r,n,o,i){var u={topic:t,id:r,input:n,output:o,state:i};return e.execute("modifyQueue",u)}function i(t){var r={topic:t};return e.execute("subTopic",r)}function u(t){var r={topic:t};return e.execute("unsubTopic",r)}function a(t){var r={topic:t};return e.execute("getQueueByTopic",r)}function c(t){var r={id:t};return e.execute("getQueueByID",r)}function f(t){var r={ids:t};return e.execute("getQueueByIDs",r)}function s(t){var r={find:t};return e.execute("getQueueByMatches",r)}function l(t){var r={topic:t};return e.execute("delQueueByTopic",r)}function v(t){var r={id:t};return e.execute("delQueueByID",r)}function p(t){var r={ids:t};return e.execute("delQueueByIDs",r)}function y(t){var r={find:t};return e.execute("delQueueByMatches",r)}return r.on("message",(function(t){var n=r.get();n&&e.emit("queueChange",br(n,"topic",null),br(n,"id",null),br(n,"input",null),br(n,"output",null),br(n,"state",null),(function(){r.cb()}))})),e.on("deliver",(function(t){br(t,"topic",null)&&r.push(t)})),e.pushQueue=n,e.modifyQueue=o,e.subTopic=i,e.unsubTopic=u,e.getQueueByTopic=a,e.getQueueByID=c,e.getQueueByIDs=f,e.getQueueByMatches=s,e.delQueueByTopic=l,e.delQueueByID=v,e.delQueueByIDs=p,e.delQueueByMatches=y,e}}));
//# sourceMappingURL=w-runqws-client.umd.js.map
