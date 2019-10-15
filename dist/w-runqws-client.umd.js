/*!
 * w-runqws-client v1.0.15
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("ws")):"function"==typeof define&&define.amd?define(["ws"],e):(t=t||self)["w-runqws-client"]=e(t.ws)}(this,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e=function(){this.__data__=[],this.size=0};var r=function(t,e){return t===e||t!=t&&e!=e};var n=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1},o=Array.prototype.splice;var i=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)};var u=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]};var a=function(t){return n(this.__data__,t)>-1};var c=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};function f(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}f.prototype.clear=e,f.prototype.delete=i,f.prototype.get=u,f.prototype.has=a,f.prototype.set=c;var s=f;var l=function(){this.__data__=new s,this.size=0};var v=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var p=function(t){return this.__data__.get(t)};var h=function(t){return this.__data__.has(t)};function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function b(t,e){return t(e={exports:{}},e.exports),e.exports}var g="object"==d(y)&&y&&y.Object===Object&&y,j="object"==("undefined"==typeof self?"undefined":d(self))&&self&&self.Object===Object&&self,_=g||j||Function("return this")(),m=_.Symbol,w=Object.prototype,A=w.hasOwnProperty,O=w.toString,x=m?m.toStringTag:void 0;var S=function(t){var e=A.call(t,x),r=t[x];try{t[x]=void 0;var n=!0}catch(t){}var o=O.call(t);return n&&(e?t[x]=r:delete t[x]),o},B=Object.prototype.toString;var L=function(t){return B.call(t)},U="[object Null]",E="[object Undefined]",k=m?m.toStringTag:void 0;var P=function(t){return null==t?void 0===t?E:U:k&&k in Object(t)?S(t):L(t)};var I=function(t){var e=d(t);return null!=t&&("object"==e||"function"==e)},M="[object AsyncFunction]",z="[object Function]",T="[object GeneratorFunction]",D="[object Proxy]";var F,R=function(t){if(!I(t))return!1;var e=P(t);return e==z||e==T||e==M||e==D},C=_["__core-js_shared__"],N=(F=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"";var Q=function(t){return!!N&&N in t},W=Function.prototype.toString;var $=function(t){if(null!=t){try{return W.call(t)}catch(t){}try{return t+""}catch(t){}}return""},V=/^\[object .+?Constructor\]$/,H=Function.prototype,q=Object.prototype,G=H.toString,J=q.hasOwnProperty,K=RegExp("^"+G.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var X=function(t){return!(!I(t)||Q(t))&&(R(t)?K:V).test($(t))};var Y=function(t,e){return null==t?void 0:t[e]};var Z=function(t,e){var r=Y(t,e);return X(r)?r:void 0},tt=Z(_,"Map"),et=Z(Object,"create");var rt=function(){this.__data__=et?et(null):{},this.size=0};var nt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot="__lodash_hash_undefined__",it=Object.prototype.hasOwnProperty;var ut=function(t){var e=this.__data__;if(et){var r=e[t];return r===ot?void 0:r}return it.call(e,t)?e[t]:void 0},at=Object.prototype.hasOwnProperty;var ct=function(t){var e=this.__data__;return et?void 0!==e[t]:at.call(e,t)},ft="__lodash_hash_undefined__";var st=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=et&&void 0===e?ft:e,this};function lt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}lt.prototype.clear=rt,lt.prototype.delete=nt,lt.prototype.get=ut,lt.prototype.has=ct,lt.prototype.set=st;var vt=lt;var pt=function(){this.size=0,this.__data__={hash:new vt,map:new(tt||s),string:new vt}};var ht=function(t){var e=d(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var dt=function(t,e){var r=t.__data__;return ht(e)?r["string"==typeof e?"string":"hash"]:r.map};var yt=function(t){var e=dt(this,t).delete(t);return this.size-=e?1:0,e};var bt=function(t){return dt(this,t).get(t)};var gt=function(t){return dt(this,t).has(t)};var jt=function(t,e){var r=dt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function _t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}_t.prototype.clear=pt,_t.prototype.delete=yt,_t.prototype.get=bt,_t.prototype.has=gt,_t.prototype.set=jt;var mt=_t,wt=200;var At=function(t,e){var r=this.__data__;if(r instanceof s){var n=r.__data__;if(!tt||n.length<wt-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new mt(n)}return r.set(t,e),this.size=r.size,this};function Ot(t){var e=this.__data__=new s(t);this.size=e.size}Ot.prototype.clear=l,Ot.prototype.delete=v,Ot.prototype.get=p,Ot.prototype.has=h,Ot.prototype.set=At;var xt=Ot;var St=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},Bt=function(){try{var t=Z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Lt=function(t,e,r){"__proto__"==e&&Bt?Bt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},Ut=Object.prototype.hasOwnProperty;var Et=function(t,e,n){var o=t[e];Ut.call(t,e)&&r(o,n)&&(void 0!==n||e in t)||Lt(t,e,n)};var kt=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,u=e.length;++i<u;){var a=e[i],c=n?n(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),o?Lt(r,a,c):Et(r,a,c)}return r};var Pt=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var It=function(t){return null!=t&&"object"==d(t)},Mt="[object Arguments]";var zt=function(t){return It(t)&&P(t)==Mt},Tt=Object.prototype,Dt=Tt.hasOwnProperty,Ft=Tt.propertyIsEnumerable,Rt=zt(function(){return arguments}())?zt:function(t){return It(t)&&Dt.call(t,"callee")&&!Ft.call(t,"callee")},Ct=Array.isArray;var Nt=function(){return!1},Qt=b((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?_.Buffer:void 0,i=(o?o.isBuffer:void 0)||Nt;t.exports=i})),Wt=9007199254740991,$t=/^(?:0|[1-9]\d*)$/;var Vt=function(t,e){var r=d(t);return!!(e=null==e?Wt:e)&&("number"==r||"symbol"!=r&&$t.test(t))&&t>-1&&t%1==0&&t<e},Ht=9007199254740991;var qt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Ht},Gt={};Gt["[object Float32Array]"]=Gt["[object Float64Array]"]=Gt["[object Int8Array]"]=Gt["[object Int16Array]"]=Gt["[object Int32Array]"]=Gt["[object Uint8Array]"]=Gt["[object Uint8ClampedArray]"]=Gt["[object Uint16Array]"]=Gt["[object Uint32Array]"]=!0,Gt["[object Arguments]"]=Gt["[object Array]"]=Gt["[object ArrayBuffer]"]=Gt["[object Boolean]"]=Gt["[object DataView]"]=Gt["[object Date]"]=Gt["[object Error]"]=Gt["[object Function]"]=Gt["[object Map]"]=Gt["[object Number]"]=Gt["[object Object]"]=Gt["[object RegExp]"]=Gt["[object Set]"]=Gt["[object String]"]=Gt["[object WeakMap]"]=!1;var Jt=function(t){return It(t)&&qt(t.length)&&!!Gt[P(t)]};var Kt=function(t){return function(e){return t(e)}},Xt=b((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&g.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),Yt=Xt&&Xt.isTypedArray,Zt=Yt?Kt(Yt):Jt,te=Object.prototype.hasOwnProperty;var ee=function(t,e){var r=Ct(t),n=!r&&Rt(t),o=!r&&!n&&Qt(t),i=!r&&!n&&!o&&Zt(t),u=r||n||o||i,a=u?Pt(t.length,String):[],c=a.length;for(var f in t)!e&&!te.call(t,f)||u&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Vt(f,c))||a.push(f);return a},re=Object.prototype;var ne=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||re)};var oe=function(t,e){return function(r){return t(e(r))}},ie=oe(Object.keys,Object),ue=Object.prototype.hasOwnProperty;var ae=function(t){if(!ne(t))return ie(t);var e=[];for(var r in Object(t))ue.call(t,r)&&"constructor"!=r&&e.push(r);return e};var ce=function(t){return null!=t&&qt(t.length)&&!R(t)};var fe=function(t){return ce(t)?ee(t):ae(t)};var se=function(t,e){return t&&kt(e,fe(e),t)};var le=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},ve=Object.prototype.hasOwnProperty;var pe=function(t){if(!I(t))return le(t);var e=ne(t),r=[];for(var n in t)("constructor"!=n||!e&&ve.call(t,n))&&r.push(n);return r};var he=function(t){return ce(t)?ee(t,!0):pe(t)};var de=function(t,e){return t&&kt(e,he(e),t)},ye=b((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?_.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}));var be=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var ge=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i};var je=function(){return[]},_e=Object.prototype.propertyIsEnumerable,me=Object.getOwnPropertySymbols,we=me?function(t){return null==t?[]:(t=Object(t),ge(me(t),(function(e){return _e.call(t,e)})))}:je;var Ae=function(t,e){return kt(t,we(t),e)};var Oe=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},xe=oe(Object.getPrototypeOf,Object),Se=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Oe(e,we(t)),t=xe(t);return e}:je;var Be=function(t,e){return kt(t,Se(t),e)};var Le=function(t,e,r){var n=e(t);return Ct(t)?n:Oe(n,r(t))};var Ue=function(t){return Le(t,fe,we)};var Ee=function(t){return Le(t,he,Se)},ke=Z(_,"DataView"),Pe=Z(_,"Promise"),Ie=Z(_,"Set"),Me=Z(_,"WeakMap"),ze=$(ke),Te=$(tt),De=$(Pe),Fe=$(Ie),Re=$(Me),Ce=P;(ke&&"[object DataView]"!=Ce(new ke(new ArrayBuffer(1)))||tt&&"[object Map]"!=Ce(new tt)||Pe&&"[object Promise]"!=Ce(Pe.resolve())||Ie&&"[object Set]"!=Ce(new Ie)||Me&&"[object WeakMap]"!=Ce(new Me))&&(Ce=function(t){var e=P(t),r="[object Object]"==e?t.constructor:void 0,n=r?$(r):"";if(n)switch(n){case ze:return"[object DataView]";case Te:return"[object Map]";case De:return"[object Promise]";case Fe:return"[object Set]";case Re:return"[object WeakMap]"}return e});var Ne=Ce,Qe=Object.prototype.hasOwnProperty;var We=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Qe.call(t,"index")&&(r.index=t.index,r.input=t.input),r},$e=_.Uint8Array;var Ve=function(t){var e=new t.constructor(t.byteLength);return new $e(e).set(new $e(t)),e};var He=function(t,e){var r=e?Ve(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},qe=/\w*$/;var Ge=function(t){var e=new t.constructor(t.source,qe.exec(t));return e.lastIndex=t.lastIndex,e},Je=m?m.prototype:void 0,Ke=Je?Je.valueOf:void 0;var Xe=function(t){return Ke?Object(Ke.call(t)):{}};var Ye=function(t,e){var r=e?Ve(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)},Ze="[object Boolean]",tr="[object Date]",er="[object Map]",rr="[object Number]",nr="[object RegExp]",or="[object Set]",ir="[object String]",ur="[object Symbol]",ar="[object ArrayBuffer]",cr="[object DataView]",fr="[object Float32Array]",sr="[object Float64Array]",lr="[object Int8Array]",vr="[object Int16Array]",pr="[object Int32Array]",hr="[object Uint8Array]",dr="[object Uint8ClampedArray]",yr="[object Uint16Array]",br="[object Uint32Array]";var gr=function(t,e,r){var n=t.constructor;switch(e){case ar:return Ve(t);case Ze:case tr:return new n(+t);case cr:return He(t,r);case fr:case sr:case lr:case vr:case pr:case hr:case dr:case yr:case br:return Ye(t,r);case er:return new n;case rr:case ir:return new n(t);case nr:return Ge(t);case or:return new n;case ur:return Xe(t)}},jr=Object.create,_r=function(){function t(){}return function(e){if(!I(e))return{};if(jr)return jr(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var mr=function(t){return"function"!=typeof t.constructor||ne(t)?{}:_r(xe(t))},wr="[object Map]";var Ar=function(t){return It(t)&&Ne(t)==wr},Or=Xt&&Xt.isMap,xr=Or?Kt(Or):Ar,Sr="[object Set]";var Br=function(t){return It(t)&&Ne(t)==Sr},Lr=Xt&&Xt.isSet,Ur=Lr?Kt(Lr):Br,Er=1,kr=2,Pr=4,Ir="[object Arguments]",Mr="[object Function]",zr="[object GeneratorFunction]",Tr="[object Object]",Dr={};Dr[Ir]=Dr["[object Array]"]=Dr["[object ArrayBuffer]"]=Dr["[object DataView]"]=Dr["[object Boolean]"]=Dr["[object Date]"]=Dr["[object Float32Array]"]=Dr["[object Float64Array]"]=Dr["[object Int8Array]"]=Dr["[object Int16Array]"]=Dr["[object Int32Array]"]=Dr["[object Map]"]=Dr["[object Number]"]=Dr[Tr]=Dr["[object RegExp]"]=Dr["[object Set]"]=Dr["[object String]"]=Dr["[object Symbol]"]=Dr["[object Uint8Array]"]=Dr["[object Uint8ClampedArray]"]=Dr["[object Uint16Array]"]=Dr["[object Uint32Array]"]=!0,Dr["[object Error]"]=Dr[Mr]=Dr["[object WeakMap]"]=!1;var Fr=function t(e,r,n,o,i,u){var a,c=r&Er,f=r&kr,s=r&Pr;if(n&&(a=i?n(e,o,i,u):n(e)),void 0!==a)return a;if(!I(e))return e;var l=Ct(e);if(l){if(a=We(e),!c)return be(e,a)}else{var v=Ne(e),p=v==Mr||v==zr;if(Qt(e))return ye(e,c);if(v==Tr||v==Ir||p&&!i){if(a=f||p?{}:mr(e),!c)return f?Be(e,de(a,e)):Ae(e,se(a,e))}else{if(!Dr[v])return i?e:{};a=gr(e,v,c)}}u||(u=new xt);var h=u.get(e);if(h)return h;u.set(e,a),Ur(e)?e.forEach((function(o){a.add(t(o,r,n,o,e,u))})):xr(e)&&e.forEach((function(o,i){a.set(i,t(o,r,n,i,e,u))}));var d=s?f?Ee:Ue:f?keysIn:fe,y=l?void 0:d(e);return St(y||e,(function(o,i){y&&(o=e[i=o]),Et(a,i,t(o,r,n,i,e,u))})),a},Rr=1,Cr=4;var Nr=function(t){return Fr(t,Rr|Cr)},Qr="[object Symbol]";var Wr=function(t){return"symbol"==d(t)||It(t)&&P(t)==Qr},$r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Vr=/^\w*$/;var Hr=function(t,e){if(Ct(t))return!1;var r=d(t);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Wr(t))||(Vr.test(t)||!$r.test(t)||null!=e&&t in Object(e))},qr="Expected a function";function Gr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(qr);var r=function r(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u)||i,u};return r.cache=new(Gr.Cache||mt),r}Gr.Cache=mt;var Jr=Gr,Kr=500;var Xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yr=/\\(\\)?/g,Zr=function(t){var e=Jr(t,(function(t){return r.size===Kr&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Xr,(function(t,r,n,o){e.push(n?o.replace(Yr,"$1"):r||t)})),e}));var tn=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},en=1/0,rn=m?m.prototype:void 0,nn=rn?rn.toString:void 0;var on=function t(e){if("string"==typeof e)return e;if(Ct(e))return tn(e,t)+"";if(Wr(e))return nn?nn.call(e):"";var r=e+"";return"0"==r&&1/e==-en?"-0":r};var un=function(t){return null==t?"":on(t)};var an=function(t,e){return Ct(t)?t:Hr(t,e)?[t]:Zr(un(t))},cn=1/0;var fn=function(t){if("string"==typeof t||Wr(t))return t;var e=t+"";return"0"==e&&1/t==-cn?"-0":e};var sn=function(t,e){for(var r=0,n=(e=an(e,t)).length;null!=t&&r<n;)t=t[fn(e[r++])];return r&&r==n?t:void 0};var ln=function(t,e,r){var n=null==t?void 0:sn(t,e);return void 0===n?r:n},vn=b((function(t){!function(e){function r(){}var n=r.prototype,o=e.EventEmitter;function i(t,e){for(var r=t.length;r--;)if(t[r].listener===e)return r;return-1}function u(t){return function(){return this[t].apply(this,arguments)}}n.getListeners=function(t){var e,r,n=this._getEvents();if(t instanceof RegExp)for(r in e={},n)n.hasOwnProperty(r)&&t.test(r)&&(e[r]=n[r]);else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,r=[];for(e=0;e<t.length;e+=1)r.push(t[e].listener);return r},n.getListenersAsObject=function(t){var e,r=this.getListeners(t);return r instanceof Array&&((e={})[t]=r),e||r},n.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!==d(e))&&t(e.listener)}(e))throw new TypeError("listener must be a function");var r,n=this.getListenersAsObject(t),o="object"===d(e);for(r in n)n.hasOwnProperty(r)&&-1===i(n[r],e)&&n[r].push(o?e:{listener:e,once:!1});return this},n.on=u("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=u("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,e){var r,n,o=this.getListenersAsObject(t);for(n in o)o.hasOwnProperty(n)&&-1!==(r=i(o[n],e))&&o[n].splice(r,1);return this},n.off=u("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,r){var n,o,i=t?this.removeListener:this.addListener,u=t?this.removeListeners:this.addListeners;if("object"!==d(e)||e instanceof RegExp)for(n=r.length;n--;)i.call(this,e,r[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?i.call(this,n,o):u.call(this,n,o));return this},n.removeEvent=function(t){var e,r=d(t),n=this._getEvents();if("string"===r)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=u("removeEvent"),n.emitEvent=function(t,e){var r,n,o,i,u=this.getListenersAsObject(t);for(i in u)if(u.hasOwnProperty(i))for(r=u[i].slice(0),o=0;o<r.length;o++)!0===(n=r[o]).once&&this.removeListener(t,n.listener),n.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},n.trigger=u("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},n._getEvents=function(){return this._events||(this._events={})},r.noConflict=function(){return e.EventEmitter=o,r},t.exports?t.exports=r:e.EventEmitter=r}("undefined"!=typeof window?window:y||{})}));function pn(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e||"[object AsyncFunction]"===e}function hn(e){var r=null;e.url||(e.url="ws://localhost:8080"),e.token||(e.token="*");var n,o=function(){var t="undefined"!=typeof window&&void 0!==window.document,e="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope;return{isBrowser:t=t||e,isWebWorker:e,isNode:"undefined"!=typeof process&&null!=process.versions&&null!=process.versions.node}}().isBrowser;n=o?("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:null).WebSocket:t;try{r=new n(e.url+"/?token="+e.token)}catch(t){r=null}if(null===r)return{error:"can not new MixWS"};function i(){pn(e.open)&&e.open()}function u(){pn(e.close)&&e.close()}function a(t){pn(e.message)&&e.message(t)}function c(t){pn(e.error)&&e.error(t),r.close()}return o?(r.onopen=i,r.onmessage=function(t){a(t.data)},r.onclose=u,r.onerror=c):(r.on("open",i),r.on("message",a),r.on("close",u),r.on("error",c)),r}function dn(){var t,e,r=new Promise((function(){t=arguments[0],e=arguments[1]}));return r.resolve=t,r.reject=e,r}var yn=NaN,bn=/^\s+|\s+$/g,gn=/^[-+]0x[0-9a-f]+$/i,jn=/^0b[01]+$/i,_n=/^0o[0-7]+$/i,mn=parseInt;var wn=function(t){if("number"==typeof t)return t;if(Wr(t))return yn;if(I(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=I(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(bn,"");var r=jn.test(t);return r||_n.test(t)?mn(t.slice(2),r?2:8):gn.test(t)?yn:+t},An=1/0,On=17976931348623157e292;var xn=function(t){return t?(t=wn(t))===An||t===-An?(t<0?-1:1)*On:t==t?t:0:0===t?t:0};var Sn=function(t){var e=xn(t),r=e%1;return e==e?r?e-r:e:0};var Bn=function(t){return"number"==typeof t&&t==Sn(t)};function Ln(t){return"[object String]"===Object.prototype.toString.call(t)}function Un(t){return!(!Ln(t)||""===t)}function En(t){var e=!1;return Un(t)?e=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(e=!0),e}function kn(t){return En(t)?xn(t):0}var Pn=_.isFinite,In=Math.min;var Mn=function(t){var e=Math[t];return function(t,r){if(t=wn(t),(r=null==r?0:In(Sn(r),292))&&Pn(t)){var n=(un(t)+"e").split("e"),o=e(n[0]+"e"+(+n[1]+r));return+((n=(un(o)+"e").split("e"))[0]+"e"+(+n[1]-r))}return e(t)}}("round");function zn(t){return!!function(t){return!!En(t)&&(t=kn(t),Bn(t))}(t)&&function(t){if(!En(t))return 0;t=kn(t);var e=Mn(t);return"0"===String(e)?0:e}(t)>0}function Tn(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),n=[],o=r.length;if(zn(e))for(t=0;t<e;t++)n[t]=r[0|Math.random()*o];else{if("rfc4122"!==e)return"";var i;for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",t=0;t<36;t++)n[t]||(i=0|16*Math.random(),n[t]=r[19===t?3&i|8:i])}return n.join("")}function Dn(t){return"[object Object]"===Object.prototype.toString.call(t)}function Fn(t,e){return function(t){if(Dn(t)){for(var e in t)return!0;return!1}return!1}(t)&&Un(e)?ln(t,e,""):""}function Rn(t,e){var r,n=Fn(t,e);return n=Un(r=n)||En(r)?String(r):""}var Cn=function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i};var Nn=function(t,e,n){if(!I(n))return!1;var o=d(e);return!!("number"==o?ce(n)&&Vt(e,n.length):"string"==o&&e in n)&&r(n[e],t)},Qn=Math.ceil,Wn=Math.max;var $n=function(t,e,r){e=(r?Nn(t,e,r):void 0===e)?1:Wn(Sn(e),0);var n=null==t?0:t.length;if(!n||e<1)return[];for(var o=0,i=0,u=Array(Qn(n/e));o<n;)u[i++]=Cn(t,o,o+=e);return u},Vn=Array.prototype.join;var Hn=function(t,e){return null==t?"":Vn.call(t,e)};var qn=function(t){return function(e,r,n){for(var o=-1,i=Object(e),u=n(e),a=u.length;a--;){var c=u[t?a:++o];if(!1===r(i[c],c,i))break}return e}}();var Gn=function(t,e){return function(r,n){if(null==r)return r;if(!ce(r))return t(r,n);for(var o=r.length,i=e?o:-1,u=Object(r);(e?i--:++i<o)&&!1!==n(u[i],i,u););return r}}((function(t,e){return t&&qn(t,e,fe)}));var Jn=function(t){return t};var Kn=function(t){return"function"==typeof t?t:Jn};var Xn=function(t,e){return(Ct(t)?St:Gn)(t,Kn(e))};function Yn(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)}function Zn(t){return"[object Uint16Array]"===Object.prototype.toString.call(t)}function to(t,e){return Un(t)&&zn(e)?t.substr(0,e):""}function eo(t,e){return Un(t)&&zn(e)?function(t,e){if(!Un(t))return"";if(!zn(e))return"";var r=t.length-e;return r<0&&(r=0),t.substr(r,e)}(t,t.length-e):""}var ro=b((function(t,e){var r;t.exports=(r=r||function(t,e){var r=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),n={},o=n.lib={},i=o.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},u=o.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,o=t.sigBytes;if(this.clamp(),n%4)for(var i=0;i<o;i++){var u=r[i>>>2]>>>24-i%4*8&255;e[n+i>>>2]|=u<<24-(n+i)%4*8}else for(i=0;i<o;i+=4)e[n+i>>>2]=r[i>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r,n=[],o=function(e){e=e;var r=987654321,n=4294967295;return function(){var o=((r=36969*(65535&r)+(r>>16)&n)<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n;return o/=4294967296,(o+=.5)*(t.random()>.5?1:-1)}},i=0;i<e;i+=4){var a=o(4294967296*(r||t.random()));r=987654071*a(),n.push(4294967296*a()|0)}return new u.init(n,e)}}),a=n.enc={},c=a.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],o=0;o<r;o++){var i=e[o>>>2]>>>24-o%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new u.init(r,e/2)}},f=a.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],o=0;o<r;o++){var i=e[o>>>2]>>>24-o%4*8&255;n.push(String.fromCharCode(i))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new u.init(r,e)}},s=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=s.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r=this._data,n=r.words,o=r.sigBytes,i=this.blockSize,a=o/(4*i),c=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*i,f=t.min(4*c,o);if(c){for(var s=0;s<c;s+=i)this._doProcessBlock(n,s);var l=n.splice(0,c);r.sigBytes-=f}return new u.init(l,f)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),v=(o.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new v.HMAC.init(t,r).finalize(e)}}}),n.algo={});return n}(Math),r)})),no=b((function(t,e){var r,n,o;t.exports=(n=(r=o=ro).lib.WordArray,r.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var o=[],i=0;i<r;i+=3)for(var u=(e[i>>>2]>>>24-i%4*8&255)<<16|(e[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|e[i+2>>>2]>>>24-(i+2)%4*8&255,a=0;a<4&&i+.75*a<r;a++)o.push(n.charAt(u>>>6*(3-a)&63));var c=n.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var e=t.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<r.length;i++)o[r.charCodeAt(i)]=i}var u=r.charAt(64);if(u){var a=t.indexOf(u);-1!==a&&(e=a)}return function(t,e,r){for(var o=[],i=0,u=0;u<e;u++)if(u%4){var a=r[t.charCodeAt(u-1)]<<u%4*2,c=r[t.charCodeAt(u)]>>>6-u%4*2;o[i>>>2]|=(a|c)<<24-i%4*8,i++}return n.create(o,i)}(t,e,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},o.enc.Base64)})),oo=b((function(t,e){var r;t.exports=(r=ro,function(){if("function"==typeof ArrayBuffer){var t=r.lib.WordArray,e=t.init;(t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var r=t.byteLength,n=[],o=0;o<r;o++)n[o>>>2]|=t[o]<<24-o%4*8;e.call(this,n,r)}else e.apply(this,arguments)}).prototype=t}}(),r.lib.WordArray)}));function io(t){return Yn(t)?oo.create(t).toString(no):""}function uo(t){if(!Ln(t))return new Uint8Array;for(var e=no.parse(t),r=e.words,n=e.sigBytes,o=new Uint8Array(n),i=0;i<n;i++){var u=r[i>>>2]>>>24-i%4*8&255;o[i]=u}return o}function ao(t){return Zn(t)?io(function(t){return Zn(t)?new Uint8Array(t):new Uint8Array}(t)):""}function co(t){return Ln(t)?function(t){return Yn(t)?new Uint16Array(t):new Uint16Array}(uo(t)):new Uint16Array}var fo="[Uint8Array]::";var so="[Uint16Array]::";var lo={tagU8A:fo,u8arr2b64:function(t){return Yn(t)?fo+io(t):t},b642u8arr:function(t){return Ln(t)&&to(t,fo.length)===fo?uo(t=eo(t,fo.length)):t},tagU16A:so,u16arr2b64:function(t){return Zn(t)?so+ao(t):t},b642u16arr:function(t){return Ln(t)&&to(t,so.length)===so?co(t=eo(t,so.length)):t}};function vo(t){return"[object Array]"===Object.prototype.toString.call(t)}function po(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(e=t,"[object Undefined]"===Object.prototype.toString.call(e))return"";if(Ln(r))r=[r];else if(!vo(r))return"";var n="";try{n=JSON.stringify(t,(function(t,e){return r.indexOf("Uint8Array")>=0&&(e=lo.u8arr2b64(e)),r.indexOf("Uint16Array")>=0&&(e=lo.u16arr2b64(e)),e}))}catch(t){n=""}return n}var ho=function(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:Cn(t,e,r)},yo=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var bo=function(t){return yo.test(t)},go="[object RegExp]";var jo=function(t){return It(t)&&P(t)==go},_o=Xt&&Xt.isRegExp,mo=_o?Kt(_o):jo;var wo=function(t){return t.split("")},Ao="[\\ud800-\\udfff]",Oo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",xo="\\ud83c[\\udffb-\\udfff]",So="[^\\ud800-\\udfff]",Bo="(?:\\ud83c[\\udde6-\\uddff]){2}",Lo="[\\ud800-\\udbff][\\udc00-\\udfff]",Uo="(?:"+Oo+"|"+xo+")"+"?",Eo="[\\ufe0e\\ufe0f]?"+Uo+("(?:\\u200d(?:"+[So,Bo,Lo].join("|")+")[\\ufe0e\\ufe0f]?"+Uo+")*"),ko="(?:"+[So+Oo+"?",Oo,Bo,Lo,Ao].join("|")+")",Po=RegExp(xo+"(?="+xo+")|"+ko+Eo,"g");var Io=function(t){return t.match(Po)||[]};var Mo=function(t){return bo(t)?Io(t):wo(t)},zo=4294967295;var To=function(t,e,r){return r&&"number"!=typeof r&&Nn(t,e,r)&&(e=r=void 0),(r=void 0===r?zo:r>>>0)?(t=un(t))&&("string"==typeof e||null!=e&&!mo(e))&&!(e=on(e))&&bo(t)?ho(Mo(t),0,r):t.split(e,r):[]};var Do=function(t,e,r){var n=null==t?0:t.length;return n?(e=r||void 0===e?1:Sn(e),Cn(t,e<0?0:e,n)):[]},Fo=Math.ceil,Ro=Math.max;var Co=function(t,e,r,n){for(var o=-1,i=Ro(Fo((e-t)/(r||1)),0),u=Array(i);i--;)u[n?i:++o]=t,t+=r;return u};var No=function(t){return function(e,r,n){return n&&"number"!=typeof n&&Nn(e,r,n)&&(r=n=void 0),e=xn(e),void 0===r?(r=e,e=0):r=xn(r),n=void 0===n?e<r?1:-1:xn(n),Co(e,r,n,t)}}();var Qo={};function Wo(t,e){var r,n,o=To(t,"|"),i=o[0],u=wn(o[1]),a=wn(o[2]),c=Hn(Do(o,3),"|");if(n=i,Dn(r=Qo)&&Un(n)&&n in r||(Qo[i]={}),Qo[i]["_"+u]=c,u===a-1){var f="";Xn(No(a),(function(t){f+=Qo[i]["_"+t]})),delete Qo[i],e(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(Ln(e))e=[e];else if(!vo(e))return{};var r={};try{r=JSON.parse(t,(function(t,r){return e.indexOf("Uint8Array")>=0&&(r=lo.b642u8arr(r)),e.indexOf("Uint16Array")>=0&&(r=lo.b642u16arr(r)),r}))}catch(t){r={}}return r}(f))}}function $o(t){var e=!1,r=null,n=new vn,o=new vn;function i(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];setTimeout((function(){n.emit.apply(n,[t].concat(r))}),1)}function u(){t.url||(t.url="ws://localhost:8080"),t.token||(t.token="*"),t.strSplitLength||(t.strSplitLength=1e6);var u={url:t.url,token:t.token,open:function(){i("open"),e||(i("openOnce"),e=!0)},close:function(){i("close"),a()},message:function(t){!function(t){Wo(t,f)}(t)},error:function(t){c(t)}};try{r=new hn(u)}catch(t){return i("error",{msg:"can not create websocket",err:t}),void a()}if(ln(r,"error"))return i("error",{msg:"can not create websocket",err:"can not new MixWS in WWebsocketClient"}),void a();function c(t){i("error",{msg:"websocket error",err:t}),r.close()}function f(t){var e=Rn(t,"_mode");if("execute"===e)if(ln(t,"_id")&&ln(t,"output")){var r=ln(t,"_id"),n=ln(t,"output");o.emit(r,n)}else i("error",{msg:"can not find _id and output in data",err:t});else"broadcast"===e?i("broadcast",ln(t,"data")):"deliver"===e?i("deliver",ln(t,"data")):c({msg:"can not find _mode in data",err:t})}function s(e,n){r.readyState===r.OPEN&&function(t,e,r,n,o){var i=po(r),u=$n(i,e),a=Tn(),c=u.length;Xn(u,(function(e,r){e=Hn(e,"");var i="".concat(a,"|").concat(r,"|").concat(c,"|").concat(e);t.send(i,(function(t){t&&R(o)&&o(t)})),R(n)&&n((r+1)/c*100)}))}(r,t.strSplitLength,e,n,(function(t){i("error",{msg:"can not send message",err:t})}))}n.removeAllListeners("triggerExecute"),n.on("triggerExecute",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=Tn();s({_mode:"execute",_id:i,func:t,input:e},n),o.on(i,(function(t){r(t),o.removeAllListeners(i)}))})),n.removeAllListeners("triggerBroadcast"),n.on("triggerBroadcast",(function(t,e){s({_mode:"broadcast",data:t},e)})),n.removeAllListeners("triggerDeliver"),n.on("triggerDeliver",(function(t,e){s({_mode:"deliver",data:t},e)}))}function a(){setTimeout((function(){i("reconn"),u()}),1e3)}return n.execute=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=dn();return i("triggerExecute",t,e,(function(t){n.resolve(t)}),r),n},n.broadcast=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};i("triggerBroadcast",t,e)},n.deliver=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};i("triggerDeliver",t,e)},u(),n}function Vo(){var t={};return{on:function(e,r){t[e]||(t[e]=[]),t[e].push(r)},emit:function(e){if(t[e]){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(var i=0;i<t[e].length;i++){var u;(u=t[e])[i].apply(u,n)}}}}}function Ho(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.takeNumLimit||(t.takeNumLimit=0);var e=0,r=[],n=new Vo;return n.get=function(){return r.length>0?(e+=1,r.splice(0,1)[0]):null},n.cb=function(){e-=1,r.length>0&&n.emit("message",r)},n.push=function(o){r.push(o),(t.takeNumLimit<=0||e<t.takeNumLimit)&&n.emit("message",r)},n}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(t=Nr(t)).url||(t.url="ws://localhost:8080"),t.token||(t.token="*"),t.takeNumLimit||(t.takeNumLimit=0);var e=new $o(t),r=new Ho(t);return r.on("message",(function(t){var n=r.get();n&&e.emit("queueChange",ln(n,"topic",null),ln(n,"id",null),ln(n,"input",null),ln(n,"output",null),ln(n,"state",null),(function(){r.cb()}))})),e.on("deliver",(function(t){ln(t,"topic",null)&&r.push(t)})),e.pushQueue=function(t,r){var n={topic:t,input:r,option:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}};return e.execute("pushQueue",n)},e.modifyQueue=function(t,r,n,o,i){var u={topic:t,id:r,input:n,output:o,state:i};return e.execute("modifyQueue",u)},e.subTopic=function(t){var r={topic:t};return e.execute("subTopic",r)},e.unsubTopic=function(t){var r={topic:t};return e.execute("unsubTopic",r)},e.getQueueByTopic=function(t){var r={topic:t};return e.execute("getQueueByTopic",r)},e.getQueueByID=function(t){var r={id:t};return e.execute("getQueueByID",r)},e.getQueueByIDs=function(t){var r={ids:t};return e.execute("getQueueByIDs",r)},e.getQueueByMatches=function(t){var r={find:t};return e.execute("getQueueByMatches",r)},e.delQueueByTopic=function(t){var r={topic:t};return e.execute("delQueueByTopic",r)},e.delQueueByID=function(t){var r={id:t};return e.execute("delQueueByID",r)},e.delQueueByIDs=function(t){var r={ids:t};return e.execute("delQueueByIDs",r)},e.delQueueByMatches=function(t){var r={find:t};return e.execute("delQueueByMatches",r)},e}}));
//# sourceMappingURL=w-runqws-client.umd.js.map
