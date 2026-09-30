(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zg={exports:{}},kl={},$g={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),Kw=Symbol.for("react.portal"),Gw=Symbol.for("react.fragment"),Qw=Symbol.for("react.strict_mode"),Yw=Symbol.for("react.profiler"),Xw=Symbol.for("react.provider"),Jw=Symbol.for("react.context"),Zw=Symbol.for("react.forward_ref"),eE=Symbol.for("react.suspense"),tE=Symbol.for("react.memo"),nE=Symbol.for("react.lazy"),yp=Symbol.iterator;function rE(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var Hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,qg={};function ji(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Hg}ji.prototype.isReactComponent={};ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kg(){}Kg.prototype=ji.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Hg}var bh=Oh.prototype=new Kg;bh.constructor=Oh;Wg(bh,ji.prototype);bh.isPureReactComponent=!0;var _p=Array.isArray,Gg=Object.prototype.hasOwnProperty,Lh={current:null},Qg={key:!0,ref:!0,__self:!0,__source:!0};function Yg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gg.call(e,r)&&!Qg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:mo,type:t,key:s,ref:o,props:i,_owner:Lh.current}}function iE(t,e){return{$$typeof:mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===mo}function sE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sE(""+t.key):e.toString(36)}function _a(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case mo:case Kw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ou(o,0):r,_p(i)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),_a(i,e,n,"",function(h){return h})):i!=null&&(Mh(i)&&(i=iE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_p(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ou(s,l);o+=_a(s,e,n,u,i)}else if(u=rE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ou(s,l++),o+=_a(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var r=[],i=0;return _a(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},va={transition:null},aE={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:va,ReactCurrentOwner:Lh};function Xg(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=ji;J.Fragment=Gw;J.Profiler=Yw;J.PureComponent=Oh;J.StrictMode=Qw;J.Suspense=eE;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE;J.act=Xg;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Gg.call(e,u)&&!Qg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:mo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:Jw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xw,_context:t},t.Consumer=t};J.createElement=Yg;J.createFactory=function(t){var e=Yg.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:Zw,render:t}};J.isValidElement=Mh;J.lazy=function(t){return{$$typeof:nE,_payload:{_status:-1,_result:t},_init:oE}};J.memo=function(t,e){return{$$typeof:tE,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=va.transition;va.transition={};try{t()}finally{va.transition=e}};J.unstable_act=Xg;J.useCallback=function(t,e){return lt.current.useCallback(t,e)};J.useContext=function(t){return lt.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};J.useEffect=function(t,e){return lt.current.useEffect(t,e)};J.useId=function(){return lt.current.useId()};J.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return lt.current.useMemo(t,e)};J.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};J.useRef=function(t){return lt.current.useRef(t)};J.useState=function(t){return lt.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return lt.current.useTransition()};J.version="18.3.1";$g.exports=J;var se=$g.exports;const lE=qw(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE=se,cE=Symbol.for("react.element"),hE=Symbol.for("react.fragment"),dE=Object.prototype.hasOwnProperty,fE=uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pE={key:!0,ref:!0,__self:!0,__source:!0};function Jg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dE.call(e,r)&&!pE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cE,type:t,key:s,ref:o,props:i,_owner:fE.current}}kl.Fragment=hE;kl.jsx=Jg;kl.jsxs=Jg;zg.exports=kl;var S=zg.exports,yc={},Zg={exports:{}},Tt={},ey={exports:{}},ty={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var X=B.length;B.push(G);e:for(;0<X;){var ge=X-1>>>1,le=B[ge];if(0<i(le,G))B[ge]=G,B[X]=le,X=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],X=B.pop();if(X!==G){B[0]=X;e:for(var ge=0,le=B.length,Ie=le>>>1;ge<Ie;){var tn=2*(ge+1)-1,nn=B[tn],rn=tn+1,sn=B[rn];if(0>i(nn,X))rn<le&&0>i(sn,nn)?(B[ge]=sn,B[rn]=X,ge=rn):(B[ge]=nn,B[tn]=X,ge=tn);else if(rn<le&&0>i(sn,X))B[ge]=sn,B[rn]=X,ge=rn;else break e}}return G}function i(B,G){var X=B.sortIndex-G.sortIndex;return X!==0?X:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,R=!1,x=!1,D=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function O(B){if(D=!1,k(B),!x)if(n(u)!==null)x=!0,Pn(j);else{var G=n(h);G!==null&&en(O,G.startTime-B)}}function j(B,G){x=!1,D&&(D=!1,I(g),g=-1),R=!0;var X=y;try{for(k(G),m=n(u);m!==null&&(!(m.expirationTime>G)||B&&!A());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,y=m.priorityLevel;var le=ge(m.expirationTime<=G);G=t.unstable_now(),typeof le=="function"?m.callback=le:m===n(u)&&r(u),k(G)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var tn=n(h);tn!==null&&en(O,tn.startTime-G),Ie=!1}return Ie}finally{m=null,y=X,R=!1}}var F=!1,w=null,g=-1,v=5,_=-1;function A(){return!(t.unstable_now()-_<v)}function C(){if(w!==null){var B=t.unstable_now();_=B;var G=!0;try{G=w(!0,B)}finally{G?T():(F=!1,w=null)}}else F=!1}var T;if(typeof E=="function")T=function(){E(C)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,xt=nt.port2;nt.port1.onmessage=C,T=function(){xt.postMessage(null)}}else T=function(){V(C,0)};function Pn(B){w=B,F||(F=!0,T())}function en(B,G){g=V(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||R||(x=!0,Pn(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var X=y;y=G;try{return B()}finally{y=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=y;y=B;try{return G()}finally{y=X}},t.unstable_scheduleCallback=function(B,G,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=X+le,B={id:f++,callback:G,priorityLevel:B,startTime:X,expirationTime:le,sortIndex:-1},X>ge?(B.sortIndex=X,e(h,B),n(u)===null&&B===n(h)&&(D?(I(g),g=-1):D=!0,en(O,X-ge))):(B.sortIndex=le,e(u,B),x||R||(x=!0,Pn(j))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var G=y;return function(){var X=y;y=G;try{return B.apply(this,arguments)}finally{y=X}}}})(ty);ey.exports=ty;var mE=ey.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE=se,Et=mE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ny=new Set,zs={};function Br(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(zs[t]=e,t=0;t<e.length;t++)ny.add(e[t])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,yE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wp={},Ep={};function _E(t){return _c.call(Ep,t)?!0:_c.call(wp,t)?!1:yE.test(t)?Ep[t]=!0:(wp[t]=!0,!1)}function vE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wE(t,e,n,r){if(e===null||typeof e>"u"||vE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function Uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fh,Uh);$e[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fh,Uh);$e[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fh,Uh);$e[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function jh(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wE(e,n,i,r)&&(n=null),r||i===null?_E(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=gE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),zh=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Ec=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),sy=Symbol.for("react.offscreen"),Tp=Symbol.iterator;function ls(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,bu;function ys(t){if(bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||""}return`
`+bu+t}var Lu=!1;function Mu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function EE(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case vc:return"Profiler";case Bh:return"StrictMode";case wc:return"Suspense";case Ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iy:return(t.displayName||"Context")+".Consumer";case ry:return(t._context.displayName||"Context")+".Provider";case zh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Tc(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return Tc(t(e))}catch{}}return null}function TE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function IE(t){var e=oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xo(t){t._valueTracker||(t._valueTracker=IE(t))}function ay(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ip(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ly(t,e){e=e.checked,e!=null&&jh(t,"checked",e,!1)}function Sc(t,e){ly(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||Ua(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _s=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(_s(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function uy(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,hy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SE=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){SE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function dy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function fy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AE=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cc(t,e){if(e){if(AE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nc=null,pi=null,mi=null;function kp(t){if(t=_o(t)){if(typeof Nc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Dl(e),Nc(t.stateNode,t.type,e))}}function py(t){pi?mi?mi.push(t):mi=[t]:pi=t}function my(){if(pi){var t=pi,e=mi;if(mi=pi=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function gy(t,e){return t(e)}function yy(){}var Fu=!1;function _y(t,e,n){if(Fu)return t(e,n);Fu=!0;try{return gy(t,e,n)}finally{Fu=!1,(pi!==null||mi!==null)&&(yy(),my())}}function Hs(t,e){var n=t.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Dc=!1;if(_n)try{var us={};Object.defineProperty(us,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{Dc=!1}function RE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ps=!1,ja=null,Ba=!1,Vc=null,kE={onError:function(t){Ps=!0,ja=t}};function CE(t,e,n,r,i,s,o,l,u){Ps=!1,ja=null,RE.apply(kE,arguments)}function PE(t,e,n,r,i,s,o,l,u){if(CE.apply(this,arguments),Ps){if(Ps){var h=ja;Ps=!1,ja=null}else throw Error(M(198));Ba||(Ba=!0,Vc=h)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cp(t){if(zr(t)!==t)throw Error(M(188))}function xE(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cp(i),t;if(s===r)return Cp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function wy(t){return t=xE(t),t!==null?Ey(t):null}function Ey(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ey(t);if(e!==null)return e;t=t.sibling}return null}var Ty=Et.unstable_scheduleCallback,Pp=Et.unstable_cancelCallback,NE=Et.unstable_shouldYield,DE=Et.unstable_requestPaint,Ae=Et.unstable_now,VE=Et.unstable_getCurrentPriorityLevel,Wh=Et.unstable_ImmediatePriority,Iy=Et.unstable_UserBlockingPriority,za=Et.unstable_NormalPriority,OE=Et.unstable_LowPriority,Sy=Et.unstable_IdlePriority,Cl=null,qt=null;function bE(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:FE,LE=Math.log,ME=Math.LN2;function FE(t){return t>>>=0,t===0?32:31-(LE(t)/ME|0)|0}var Zo=64,ea=4194304;function vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $a(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=vs(l):(s&=o,s!==0&&(r=vs(s)))}else o=n&~i,o!==0?r=vs(o):s!==0&&(r=vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function UE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=UE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ay(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function BE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Ry(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ky,Kh,Cy,Py,xy,bc=!1,ta=[],qn=null,Kn=null,Gn=null,Ws=new Map,qs=new Map,Mn=[],zE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_o(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $E(t,e,n,r,i){switch(e){case"focusin":return qn=cs(qn,t,e,n,r,i),!0;case"dragenter":return Kn=cs(Kn,t,e,n,r,i),!0;case"mouseover":return Gn=cs(Gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ws.set(s,cs(Ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qs.set(s,cs(qs.get(s)||null,t,e,n,r,i)),!0}return!1}function Ny(t){var e=Ir(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=vy(n),e!==null){t.blockedOn=e,xy(t.priority,function(){Cy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return e=_o(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Np(t,e,n){wa(t)&&n.delete(e)}function HE(){bc=!1,qn!==null&&wa(qn)&&(qn=null),Kn!==null&&wa(Kn)&&(Kn=null),Gn!==null&&wa(Gn)&&(Gn=null),Ws.forEach(Np),qs.forEach(Np)}function hs(t,e){t.blockedOn===e&&(t.blockedOn=null,bc||(bc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,HE)))}function Ks(t){function e(i){return hs(i,t)}if(0<ta.length){hs(ta[0],t);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&hs(qn,t),Kn!==null&&hs(Kn,t),Gn!==null&&hs(Gn,t),Ws.forEach(e),qs.forEach(e),n=0;n<Mn.length;n++)r=Mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mn.length&&(n=Mn[0],n.blockedOn===null);)Ny(n),n.blockedOn===null&&Mn.shift()}var gi=Rn.ReactCurrentBatchConfig,Ha=!0;function WE(t,e,n,r){var i=oe,s=gi.transition;gi.transition=null;try{oe=1,Gh(t,e,n,r)}finally{oe=i,gi.transition=s}}function qE(t,e,n,r){var i=oe,s=gi.transition;gi.transition=null;try{oe=4,Gh(t,e,n,r)}finally{oe=i,gi.transition=s}}function Gh(t,e,n,r){if(Ha){var i=Lc(t,e,n,r);if(i===null)Qu(t,e,r,Wa,n),xp(t,r);else if($E(i,t,e,n,r))r.stopPropagation();else if(xp(t,r),e&4&&-1<zE.indexOf(t)){for(;i!==null;){var s=_o(i);if(s!==null&&ky(s),s=Lc(t,e,n,r),s===null&&Qu(t,e,r,Wa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Qu(t,e,r,null,n)}}var Wa=null;function Lc(t,e,n,r){if(Wa=null,t=Hh(r),t=Ir(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wa=t,null}function Dy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VE()){case Wh:return 1;case Iy:return 4;case za:case OE:return 16;case Sy:return 536870912;default:return 16}default:return 16}}var $n=null,Qh=null,Ea=null;function Vy(){if(Ea)return Ea;var t,e=Qh,n=e.length,r,i="value"in $n?$n.value:$n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ea=i.slice(t,1<r?1-r:void 0)}function Ta(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function Dp(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:Dp,this.isPropagationStopped=Dp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=It(Bi),yo=ve({},Bi,{view:0,detail:0}),KE=It(yo),ju,Bu,ds,Pl=ve({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ds&&(ds&&t.type==="mousemove"?(ju=t.screenX-ds.screenX,Bu=t.screenY-ds.screenY):Bu=ju=0,ds=t),ju)},movementY:function(t){return"movementY"in t?t.movementY:Bu}}),Vp=It(Pl),GE=ve({},Pl,{dataTransfer:0}),QE=It(GE),YE=ve({},yo,{relatedTarget:0}),zu=It(YE),XE=ve({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),JE=It(XE),ZE=ve({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eT=It(ZE),tT=ve({},Bi,{data:0}),Op=It(tT),nT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iT[t])?!!e[t]:!1}function Xh(){return sT}var oT=ve({},yo,{key:function(t){if(t.key){var e=nT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?Ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aT=It(oT),lT=ve({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=It(lT),uT=ve({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),cT=It(uT),hT=ve({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),dT=It(hT),fT=ve({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pT=It(fT),mT=[9,13,27,32],Jh=_n&&"CompositionEvent"in window,xs=null;_n&&"documentMode"in document&&(xs=document.documentMode);var gT=_n&&"TextEvent"in window&&!xs,Oy=_n&&(!Jh||xs&&8<xs&&11>=xs),Lp=" ",Mp=!1;function by(t,e){switch(t){case"keyup":return mT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ly(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function yT(t,e){switch(t){case"compositionend":return Ly(e);case"keypress":return e.which!==32?null:(Mp=!0,Lp);case"textInput":return t=e.data,t===Lp&&Mp?null:t;default:return null}}function _T(t,e){if(ti)return t==="compositionend"||!Jh&&by(t,e)?(t=Vy(),Ea=Qh=$n=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Oy&&e.locale!=="ko"?null:e.data;default:return null}}var vT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vT[t.type]:e==="textarea"}function My(t,e,n,r){py(r),e=qa(e,"onChange"),0<e.length&&(n=new Yh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ns=null,Gs=null;function wT(t){Gy(t,0)}function xl(t){var e=ii(t);if(ay(e))return t}function ET(t,e){if(t==="change")return e}var Fy=!1;if(_n){var $u;if(_n){var Hu="oninput"in document;if(!Hu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Hu=typeof Up.oninput=="function"}$u=Hu}else $u=!1;Fy=$u&&(!document.documentMode||9<document.documentMode)}function jp(){Ns&&(Ns.detachEvent("onpropertychange",Uy),Gs=Ns=null)}function Uy(t){if(t.propertyName==="value"&&xl(Gs)){var e=[];My(e,Gs,t,Hh(t)),_y(wT,e)}}function TT(t,e,n){t==="focusin"?(jp(),Ns=e,Gs=n,Ns.attachEvent("onpropertychange",Uy)):t==="focusout"&&jp()}function IT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(Gs)}function ST(t,e){if(t==="click")return xl(e)}function AT(t,e){if(t==="input"||t==="change")return xl(e)}function RT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:RT;function Qs(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var n=Bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function jy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function By(){for(var t=window,e=Ua();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ua(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kT(t){var e=By(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jy(n.ownerDocument.documentElement,n)){if(r!==null&&Zh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zp(n,s);var o=zp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CT=_n&&"documentMode"in document&&11>=document.documentMode,ni=null,Mc=null,Ds=null,Fc=!1;function $p(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||ni==null||ni!==Ua(r)||(r=ni,"selectionStart"in r&&Zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&Qs(Ds,r)||(Ds=r,r=qa(Mc,"onSelect"),0<r.length&&(e=new Yh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Wu={},zy={};_n&&(zy=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function Nl(t){if(Wu[t])return Wu[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zy)return Wu[t]=e[n];return t}var $y=Nl("animationend"),Hy=Nl("animationiteration"),Wy=Nl("animationstart"),qy=Nl("transitionend"),Ky=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){Ky.set(t,e),Br(e,[t])}for(var qu=0;qu<Hp.length;qu++){var Ku=Hp[qu],PT=Ku.toLowerCase(),xT=Ku[0].toUpperCase()+Ku.slice(1);hr(PT,"on"+xT)}hr($y,"onAnimationEnd");hr(Hy,"onAnimationIteration");hr(Wy,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(qy,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function Wp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PE(r,e,void 0,t),t.currentTarget=null}function Gy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Wp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Wp(i,l,h),s=u}}}if(Ba)throw t=Vc,Ba=!1,Vc=null,t}function de(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(Qy(e,t,2,!1),n.add(r))}function Gu(t,e,n){var r=0;e&&(r|=4),Qy(n,t,r,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Ys(t){if(!t[ia]){t[ia]=!0,ny.forEach(function(n){n!=="selectionchange"&&(NT.has(n)||Gu(n,!1,t),Gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,Gu("selectionchange",!1,e))}}function Qy(t,e,n,r){switch(Dy(e)){case 1:var i=WE;break;case 4:i=qE;break;default:i=Gh}n=i.bind(null,e,n,t),i=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ir(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}_y(function(){var h=s,f=Hh(n),m=[];e:{var y=Ky.get(t);if(y!==void 0){var R=Yh,x=t;switch(t){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":R=aT;break;case"focusin":x="focus",R=zu;break;case"focusout":x="blur",R=zu;break;case"beforeblur":case"afterblur":R=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=QE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=cT;break;case $y:case Hy:case Wy:R=JE;break;case qy:R=dT;break;case"scroll":R=KE;break;case"wheel":R=pT;break;case"copy":case"cut":case"paste":R=eT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=bp}var D=(e&4)!==0,V=!D&&t==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var E=h,k;E!==null;){k=E;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,I!==null&&(O=Hs(E,I),O!=null&&D.push(Xs(E,O,k)))),V)break;E=E.return}0<D.length&&(y=new R(y,x,null,n,f),m.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",y&&n!==xc&&(x=n.relatedTarget||n.fromElement)&&(Ir(x)||x[vn]))break e;if((R||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,R?(x=n.relatedTarget||n.toElement,R=h,x=x?Ir(x):null,x!==null&&(V=zr(x),x!==V||x.tag!==5&&x.tag!==6)&&(x=null)):(R=null,x=h),R!==x)){if(D=Vp,O="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=bp,O="onPointerLeave",I="onPointerEnter",E="pointer"),V=R==null?y:ii(R),k=x==null?y:ii(x),y=new D(O,E+"leave",R,n,f),y.target=V,y.relatedTarget=k,O=null,Ir(f)===h&&(D=new D(I,E+"enter",x,n,f),D.target=k,D.relatedTarget=V,O=D),V=O,R&&x)t:{for(D=R,I=x,E=0,k=D;k;k=Qr(k))E++;for(k=0,O=I;O;O=Qr(O))k++;for(;0<E-k;)D=Qr(D),E--;for(;0<k-E;)I=Qr(I),k--;for(;E--;){if(D===I||I!==null&&D===I.alternate)break t;D=Qr(D),I=Qr(I)}D=null}else D=null;R!==null&&qp(m,y,R,D,!1),x!==null&&V!==null&&qp(m,V,x,D,!0)}}e:{if(y=h?ii(h):window,R=y.nodeName&&y.nodeName.toLowerCase(),R==="select"||R==="input"&&y.type==="file")var j=ET;else if(Fp(y))if(Fy)j=AT;else{j=IT;var F=TT}else(R=y.nodeName)&&R.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=ST);if(j&&(j=j(t,h))){My(m,j,n,f);break e}F&&F(t,y,h),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&Ac(y,"number",y.value)}switch(F=h?ii(h):window,t){case"focusin":(Fp(F)||F.contentEditable==="true")&&(ni=F,Mc=h,Ds=null);break;case"focusout":Ds=Mc=ni=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,$p(m,n,f);break;case"selectionchange":if(CT)break;case"keydown":case"keyup":$p(m,n,f)}var w;if(Jh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ti?by(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Oy&&n.locale!=="ko"&&(ti||g!=="onCompositionStart"?g==="onCompositionEnd"&&ti&&(w=Vy()):($n=f,Qh="value"in $n?$n.value:$n.textContent,ti=!0)),F=qa(h,g),0<F.length&&(g=new Op(g,t,null,n,f),m.push({event:g,listeners:F}),w?g.data=w:(w=Ly(n),w!==null&&(g.data=w)))),(w=gT?yT(t,n):_T(t,n))&&(h=qa(h,"onBeforeInput"),0<h.length&&(f=new Op("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}Gy(m,e)})}function Xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Hs(t,n),s!=null&&r.unshift(Xs(t,s,i)),s=Hs(t,e),s!=null&&r.push(Xs(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Hs(n,s),u!=null&&o.unshift(Xs(n,u,l))):i||(u=Hs(n,s),u!=null&&o.push(Xs(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var DT=/\r\n?/g,VT=/\u0000|\uFFFD/g;function Kp(t){return(typeof t=="string"?t:""+t).replace(DT,`
`).replace(VT,"")}function sa(t,e,n){if(e=Kp(e),Kp(t)!==e&&n)throw Error(M(425))}function Ka(){}var Uc=null,jc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,OT=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,bT=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(LT)}:zc;function LT(t){setTimeout(function(){throw t})}function Yu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ks(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ks(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+zi,Js="__reactProps$"+zi,vn="__reactContainer$"+zi,$c="__reactEvents$"+zi,MT="__reactListeners$"+zi,FT="__reactHandles$"+zi;function Ir(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qp(t);t!==null;){if(n=t[Wt])return n;t=Qp(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[Wt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Dl(t){return t[Js]||null}var Hc=[],si=-1;function dr(t){return{current:t}}function fe(t){0>si||(t.current=Hc[si],Hc[si]=null,si--)}function ce(t,e){si++,Hc[si]=t.current,t.current=e}var ar={},et=dr(ar),ft=dr(!1),xr=ar;function Si(t,e){var n=t.type.contextTypes;if(!n)return ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Ga(){fe(ft),fe(et)}function Yp(t,e,n){if(et.current!==ar)throw Error(M(168));ce(et,e),ce(ft,n)}function Yy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,TE(t)||"Unknown",i));return ve({},n,r)}function Qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,xr=et.current,ce(et,t),ce(ft,ft.current),!0}function Xp(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Yy(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,fe(ft),fe(et),ce(et,t)):fe(ft),ce(ft,n)}var un=null,Vl=!1,Xu=!1;function Xy(t){un===null?un=[t]:un.push(t)}function UT(t){Vl=!0,Xy(t)}function fr(){if(!Xu&&un!==null){Xu=!0;var t=0,e=oe;try{var n=un;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Vl=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),Ty(Wh,fr),i}finally{oe=e,Xu=!1}}return null}var oi=[],ai=0,Ya=null,Xa=0,St=[],At=0,Nr=null,cn=1,hn="";function wr(t,e){oi[ai++]=Xa,oi[ai++]=Ya,Ya=t,Xa=e}function Jy(t,e,n){St[At++]=cn,St[At++]=hn,St[At++]=Nr,Nr=t;var r=cn;t=hn;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-Mt(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function ed(t){t.return!==null&&(wr(t,1),Jy(t,1,0))}function td(t){for(;t===Ya;)Ya=oi[--ai],oi[ai]=null,Xa=oi[--ai],oi[ai]=null;for(;t===Nr;)Nr=St[--At],St[At]=null,hn=St[--At],St[At]=null,cn=St[--At],St[At]=null}var wt=null,_t=null,pe=!1,bt=null;function Zy(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,_t=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,_t=null,!0):!1;default:return!1}}function Wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(pe){var e=_t;if(e){var n=e;if(!Jp(t,e)){if(Wc(t))throw Error(M(418));e=Qn(n.nextSibling);var r=wt;e&&Jp(t,e)?Zy(r,n):(t.flags=t.flags&-4097|2,pe=!1,wt=t)}}else{if(Wc(t))throw Error(M(418));t.flags=t.flags&-4097|2,pe=!1,wt=t}}}function Zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function oa(t){if(t!==wt)return!1;if(!pe)return Zp(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=_t)){if(Wc(t))throw e_(),Error(M(418));for(;e;)Zy(t,e),e=Qn(e.nextSibling)}if(Zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=wt?Qn(t.stateNode.nextSibling):null;return!0}function e_(){for(var t=_t;t;)t=Qn(t.nextSibling)}function Ai(){_t=wt=null,pe=!1}function nd(t){bt===null?bt=[t]:bt.push(t)}var jT=Rn.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function aa(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function em(t){var e=t._init;return e(t._payload)}function t_(t){function e(I,E){if(t){var k=I.deletions;k===null?(I.deletions=[E],I.flags|=16):k.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=Zn(I,E),I.index=0,I.sibling=null,I}function s(I,E,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<E?(I.flags|=2,E):k):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,k,O){return E===null||E.tag!==6?(E=ic(k,I.mode,O),E.return=I,E):(E=i(E,k),E.return=I,E)}function u(I,E,k,O){var j=k.type;return j===ei?f(I,E,k.props.children,O,k.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&em(j)===E.type)?(O=i(E,k.props),O.ref=fs(I,E,k),O.return=I,O):(O=Pa(k.type,k.key,k.props,null,I.mode,O),O.ref=fs(I,E,k),O.return=I,O)}function h(I,E,k,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=sc(k,I.mode,O),E.return=I,E):(E=i(E,k.children||[]),E.return=I,E)}function f(I,E,k,O,j){return E===null||E.tag!==7?(E=Cr(k,I.mode,O,j),E.return=I,E):(E=i(E,k),E.return=I,E)}function m(I,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ic(""+E,I.mode,k),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Yo:return k=Pa(E.type,E.key,E.props,null,I.mode,k),k.ref=fs(I,null,E),k.return=I,k;case Zr:return E=sc(E,I.mode,k),E.return=I,E;case bn:var O=E._init;return m(I,O(E._payload),k)}if(_s(E)||ls(E))return E=Cr(E,I.mode,k,null),E.return=I,E;aa(I,E)}return null}function y(I,E,k,O){var j=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return j!==null?null:l(I,E,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Yo:return k.key===j?u(I,E,k,O):null;case Zr:return k.key===j?h(I,E,k,O):null;case bn:return j=k._init,y(I,E,j(k._payload),O)}if(_s(k)||ls(k))return j!==null?null:f(I,E,k,O,null);aa(I,k)}return null}function R(I,E,k,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(k)||null,l(E,I,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Yo:return I=I.get(O.key===null?k:O.key)||null,u(E,I,O,j);case Zr:return I=I.get(O.key===null?k:O.key)||null,h(E,I,O,j);case bn:var F=O._init;return R(I,E,k,F(O._payload),j)}if(_s(O)||ls(O))return I=I.get(k)||null,f(E,I,O,j,null);aa(E,O)}return null}function x(I,E,k,O){for(var j=null,F=null,w=E,g=E=0,v=null;w!==null&&g<k.length;g++){w.index>g?(v=w,w=null):v=w.sibling;var _=y(I,w,k[g],O);if(_===null){w===null&&(w=v);break}t&&w&&_.alternate===null&&e(I,w),E=s(_,E,g),F===null?j=_:F.sibling=_,F=_,w=v}if(g===k.length)return n(I,w),pe&&wr(I,g),j;if(w===null){for(;g<k.length;g++)w=m(I,k[g],O),w!==null&&(E=s(w,E,g),F===null?j=w:F.sibling=w,F=w);return pe&&wr(I,g),j}for(w=r(I,w);g<k.length;g++)v=R(w,I,g,k[g],O),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?g:v.key),E=s(v,E,g),F===null?j=v:F.sibling=v,F=v);return t&&w.forEach(function(A){return e(I,A)}),pe&&wr(I,g),j}function D(I,E,k,O){var j=ls(k);if(typeof j!="function")throw Error(M(150));if(k=j.call(k),k==null)throw Error(M(151));for(var F=j=null,w=E,g=E=0,v=null,_=k.next();w!==null&&!_.done;g++,_=k.next()){w.index>g?(v=w,w=null):v=w.sibling;var A=y(I,w,_.value,O);if(A===null){w===null&&(w=v);break}t&&w&&A.alternate===null&&e(I,w),E=s(A,E,g),F===null?j=A:F.sibling=A,F=A,w=v}if(_.done)return n(I,w),pe&&wr(I,g),j;if(w===null){for(;!_.done;g++,_=k.next())_=m(I,_.value,O),_!==null&&(E=s(_,E,g),F===null?j=_:F.sibling=_,F=_);return pe&&wr(I,g),j}for(w=r(I,w);!_.done;g++,_=k.next())_=R(w,I,g,_.value,O),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?g:_.key),E=s(_,E,g),F===null?j=_:F.sibling=_,F=_);return t&&w.forEach(function(C){return e(I,C)}),pe&&wr(I,g),j}function V(I,E,k,O){if(typeof k=="object"&&k!==null&&k.type===ei&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Yo:e:{for(var j=k.key,F=E;F!==null;){if(F.key===j){if(j=k.type,j===ei){if(F.tag===7){n(I,F.sibling),E=i(F,k.props.children),E.return=I,I=E;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&em(j)===F.type){n(I,F.sibling),E=i(F,k.props),E.ref=fs(I,F,k),E.return=I,I=E;break e}n(I,F);break}else e(I,F);F=F.sibling}k.type===ei?(E=Cr(k.props.children,I.mode,O,k.key),E.return=I,I=E):(O=Pa(k.type,k.key,k.props,null,I.mode,O),O.ref=fs(I,E,k),O.return=I,I=O)}return o(I);case Zr:e:{for(F=k.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){n(I,E.sibling),E=i(E,k.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=sc(k,I.mode,O),E.return=I,I=E}return o(I);case bn:return F=k._init,V(I,E,F(k._payload),O)}if(_s(k))return x(I,E,k,O);if(ls(k))return D(I,E,k,O);aa(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,k),E.return=I,I=E):(n(I,E),E=ic(k,I.mode,O),E.return=I,I=E),o(I)):n(I,E)}return V}var Ri=t_(!0),n_=t_(!1),Ja=dr(null),Za=null,li=null,rd=null;function id(){rd=li=Za=null}function sd(t){var e=Ja.current;fe(Ja),t._currentValue=e}function Kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){Za=t,rd=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(Za===null)throw Error(M(308));li=t,Za.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var Sr=null;function od(t){Sr===null?Sr=[t]:Sr.push(t)}function r_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,od(e)):(n.next=i.next,i.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ln=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wn(t,n)}return i=r.interleaved,i===null?(e.next=e,od(r)):(e.next=i.next,i.next=e),r.interleaved=e,wn(t,n)}function Ia(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}function tm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function el(t,e,n,r){var i=t.updateQueue;Ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,R=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(y=e,R=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){m=x.call(R,m,y);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,y=typeof x=="function"?x.call(R,m,y):x,y==null)break e;m=ve({},m,y);break e;case 2:Ln=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else R={eventTime:R,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=m):f=f.next=R,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=m}}function nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var vo={},Kt=dr(vo),Zs=dr(vo),eo=dr(vo);function Ar(t){if(t===vo)throw Error(M(174));return t}function ld(t,e){switch(ce(eo,e),ce(Zs,t),ce(Kt,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kc(e,t)}fe(Kt),ce(Kt,e)}function ki(){fe(Kt),fe(Zs),fe(eo)}function s_(t){Ar(eo.current);var e=Ar(Kt.current),n=kc(e,t.type);e!==n&&(ce(Zs,t),ce(Kt,n))}function ud(t){Zs.current===t&&(fe(Kt),fe(Zs))}var ye=dr(0);function tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ju=[];function cd(){for(var t=0;t<Ju.length;t++)Ju[t]._workInProgressVersionPrimary=null;Ju.length=0}var Sa=Rn.ReactCurrentDispatcher,Zu=Rn.ReactCurrentBatchConfig,Dr=0,_e=null,Ce=null,Oe=null,nl=!1,Vs=!1,to=0,BT=0;function Ge(){throw Error(M(321))}function hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function dd(t,e,n,r,i,s){if(Dr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sa.current=t===null||t.memoizedState===null?WT:qT,t=n(r,i),Vs){s=0;do{if(Vs=!1,to=0,25<=s)throw Error(M(301));s+=1,Oe=Ce=null,e.updateQueue=null,Sa.current=KT,t=n(r,i)}while(Vs)}if(Sa.current=rl,e=Ce!==null&&Ce.next!==null,Dr=0,Oe=Ce=_e=null,nl=!1,e)throw Error(M(300));return t}function fd(){var t=to!==0;return to=0,t}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Pt(){if(Ce===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Oe===null?_e.memoizedState:Oe.next;if(e!==null)Oe=e,Ce=t;else{if(t===null)throw Error(M(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Oe===null?_e.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function no(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=Pt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Dr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=f,Vr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Bt(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function o_(){}function a_(t,e){var n=_e,r=Pt(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,pd(c_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,ro(9,u_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(M(349));Dr&30||l_(n,e,i)}return i}function l_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u_(t,e,n,r){e.value=n,e.getSnapshot=r,h_(e)&&d_(t)}function c_(t,e,n){return n(function(){h_(e)&&d_(t)})}function h_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function d_(t){var e=wn(t,1);e!==null&&Ft(e,t,1,-1)}function rm(t){var e=Ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:t},e.queue=t,t=t.dispatch=HT.bind(null,_e,t),[e.memoizedState,t]}function ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f_(){return Pt().memoizedState}function Aa(t,e,n,r){var i=Ht();_e.flags|=t,i.memoizedState=ro(1|e,n,void 0,r===void 0?null:r)}function Ol(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&hd(r,o.deps)){i.memoizedState=ro(e,n,s,r);return}}_e.flags|=t,i.memoizedState=ro(1|e,n,s,r)}function im(t,e){return Aa(8390656,8,t,e)}function pd(t,e){return Ol(2048,8,t,e)}function p_(t,e){return Ol(4,2,t,e)}function m_(t,e){return Ol(4,4,t,e)}function g_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y_(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4,4,g_.bind(null,e,t),n)}function md(){}function __(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function w_(t,e,n){return Dr&21?(Bt(n,e)||(n=Ay(),_e.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function zT(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Zu.transition;Zu.transition={};try{t(!1),e()}finally{oe=n,Zu.transition=r}}function E_(){return Pt().memoizedState}function $T(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},T_(t))I_(e,n);else if(n=r_(t,e,n,r),n!==null){var i=ot();Ft(n,t,r,i),S_(n,e,r)}}function HT(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(T_(t))I_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bt(l,o)){var u=e.interleaved;u===null?(i.next=i,od(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=r_(t,e,i,r),n!==null&&(i=ot(),Ft(n,t,r,i),S_(n,e,r))}}function T_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function I_(t,e){Vs=nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}var rl={readContext:Ct,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},WT={readContext:Ct,useCallback:function(t,e){return Ht().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,g_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$T.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Ht();return t={current:t},e.memoizedState=t},useState:rm,useDebugValue:md,useDeferredValue:function(t){return Ht().memoizedState=t},useTransition:function(){var t=rm(!1),e=t[0];return t=zT.bind(null,t[1]),Ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Ht();if(pe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),be===null)throw Error(M(349));Dr&30||l_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,im(c_.bind(null,r,s,t),[t]),r.flags|=2048,ro(9,u_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ht(),e=be.identifierPrefix;if(pe){var n=hn,r=cn;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=to++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qT={readContext:Ct,useCallback:__,useContext:Ct,useEffect:pd,useImperativeHandle:y_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:v_,useReducer:ec,useRef:f_,useState:function(){return ec(no)},useDebugValue:md,useDeferredValue:function(t){var e=Pt();return w_(e,Ce.memoizedState,t)},useTransition:function(){var t=ec(no)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:a_,useId:E_,unstable_isNewReconciler:!1},KT={readContext:Ct,useCallback:__,useContext:Ct,useEffect:pd,useImperativeHandle:y_,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:v_,useReducer:tc,useRef:f_,useState:function(){return tc(no)},useDebugValue:md,useDeferredValue:function(t){var e=Pt();return Ce===null?e.memoizedState=t:w_(e,Ce.memoizedState,t)},useTransition:function(){var t=tc(no)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:o_,useSyncExternalStore:a_,useId:E_,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Jn(t),s=gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Ft(e,t,i,r),Ia(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=Jn(t),s=gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Ft(e,t,i,r),Ia(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Jn(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yn(t,i,r),e!==null&&(Ft(e,t,r,n),Ia(e,t,r))}};function sm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qs(n,r)||!Qs(i,s):!0}function A_(t,e,n){var r=!1,i=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=pt(e)?xr:et.current,r=e.contextTypes,s=(r=r!=null)?Si(t,i):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function om(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bl.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=pt(e)?xr:et.current,i.context=Si(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bl.enqueueReplaceState(i,i.state,null),el(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e){try{var n="",r=e;do n+=EE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GT=typeof WeakMap=="function"?WeakMap:Map;function R_(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sl||(sl=!0,oh=r),Yc(t,e)},n}function k_(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yc(t,e),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function am(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lI.bind(null,t,e,n),e.then(t,t))}function lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function um(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Yn(n,e,1))),n.lanes|=1),t)}var QT=Rn.ReactCurrentOwner,dt=!1;function st(t,e,n,r){e.child=t===null?n_(e,null,n,r):Ri(e,t.child,n,r)}function cm(t,e,n,r,i){n=n.render;var s=e.ref;return yi(e,i),r=dd(t,e,n,r,s,i),n=fd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(pe&&n&&ed(e),e.flags|=1,st(t,e,r,i),e.child)}function hm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C_(t,e,s,r,i)):(t=Pa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qs,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function C_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qs(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,En(t,e,i)}return Xc(t,e,n,r,i)}function P_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ci,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ci,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ci,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ci,yt),yt|=r;return st(t,e,i,n),e.child}function x_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,r,i){var s=pt(n)?xr:et.current;return s=Si(e,s),yi(e,i),n=dd(t,e,n,r,s,i),r=fd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(pe&&r&&ed(e),e.flags|=1,st(t,e,n,i),e.child)}function dm(t,e,n,r,i){if(pt(n)){var s=!0;Qa(e)}else s=!1;if(yi(e,i),e.stateNode===null)Ra(t,e),A_(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=pt(n)?xr:et.current,h=Si(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&om(e,o,r,h),Ln=!1;var y=e.memoizedState;o.state=y,el(e,r,o,i),u=e.memoizedState,l!==r||y!==u||ft.current||Ln?(typeof f=="function"&&(Gc(e,n,f,r),u=e.memoizedState),(l=Ln||sm(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,i_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=pt(n)?xr:et.current,u=Si(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&om(e,o,r,u),Ln=!1,y=e.memoizedState,o.state=y,el(e,r,o,i);var x=e.memoizedState;l!==m||y!==x||ft.current||Ln?(typeof R=="function"&&(Gc(e,n,R,r),x=e.memoizedState),(h=Ln||sm(e,n,h,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Jc(t,e,n,r,s,i)}function Jc(t,e,n,r,i,s){x_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xp(e,n,!1),En(t,e,s);r=e.stateNode,QT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ri(e,t.child,null,s),e.child=Ri(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Xp(e,n,!0),e.child}function N_(t){var e=t.stateNode;e.pendingContext?Yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yp(t,e.context,!1),ld(t,e.containerInfo)}function fm(t,e,n,r,i){return Ai(),nd(i),e.flags|=256,st(t,e,n,r),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function D_(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fl(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Zc,t):gd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return YT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Zn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Zn(l,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,r}return s=t.child,t=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gd(t,e){return e=Fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function la(t,e,n,r){return r!==null&&nd(r),Ri(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=nc(Error(M(422))),la(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fl({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ri(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Zc,s);if(!(e.mode&1))return la(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=nc(s,r,void 0),la(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(t,i),Ft(r,t,i,-1))}return Td(),r=nc(Error(M(421))),la(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Qn(i.nextSibling),wt=e,pe=!0,bt=null,t!==null&&(St[At++]=cn,St[At++]=hn,St[At++]=Nr,cn=t.id,hn=t.overflow,Nr=e),e=gd(e,r.children),e.flags|=4096,e)}function pm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kc(t.return,e,n)}function rc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function V_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),rc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}rc(e,!0,n,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XT(t,e,n){switch(e.tag){case 3:N_(e),Ai();break;case 5:s_(e);break;case 1:pt(e.type)&&Qa(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Ja,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?D_(t,e,n):(ce(ye,ye.current&1),t=En(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return V_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,P_(t,e,n)}return En(t,e,n)}var O_,th,b_,L_;O_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};b_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ar(Kt.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ka)}Cc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};L_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JT(t,e,n){var r=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return pt(e.type)&&Ga(),Qe(e),null;case 3:return r=e.stateNode,ki(),fe(ft),fe(et),cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bt!==null&&(uh(bt),bt=null))),th(t,e),Qe(e),null;case 5:ud(e);var i=Ar(eo.current);if(n=e.type,t!==null&&e.stateNode!=null)b_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Qe(e),null}if(t=Ar(Kt.current),oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[Js]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<ws.length;i++)de(ws[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Ip(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Ap(r,s),de("invalid",r)}Cc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",""+l]):zs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Xo(r),Sp(r,s,!0);break;case"textarea":Xo(r),Rp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ka)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[Js]=r,O_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<ws.length;i++)de(ws[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Ip(t,r),i=Ic(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":Ap(t,r),i=Rc(t,r),de("invalid",t);break;default:i=r}Cc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?fy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$s(t,u):typeof u=="number"&&$s(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&jh(t,s,u,o))}switch(n){case"input":Xo(t),Sp(t,r,!1);break;case"textarea":Xo(t),Rp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)L_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Ar(eo.current),Ar(Kt.current),oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return Qe(e),null;case 13:if(fe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&_t!==null&&e.mode&1&&!(e.flags&128))e_(),Ai(),e.flags|=98560,s=!1;else if(s=oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Wt]=e}else Ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else bt!==null&&(uh(bt),bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ne===0&&(Ne=3):Td())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return ki(),th(t,e),t===null&&Ys(e.stateNode.containerInfo),Qe(e),null;case 10:return sd(e.type._context),Qe(e),null;case 17:return pt(e.type)&&Ga(),Qe(e),null;case 19:if(fe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tl(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Pi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=tl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Qe(e),null}else 2*Ae()-s.renderingStartTime>Pi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return Ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function ZT(t,e){switch(td(e),e.tag){case 1:return pt(e.type)&&Ga(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(),fe(ft),fe(et),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ud(e),null;case 13:if(fe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ye),null;case 4:return ki(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var ua=!1,Je=!1,eI=typeof WeakSet=="function"?WeakSet:Set,z=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function nh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var mm=!1;function tI(t,e){if(Uc=Ha,t=By(),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)y=m,m=R;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(R=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},Ha=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,V=x.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:Vt(e.type,D),V);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(O){Te(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return x=mm,mm=!1,x}function Os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nh(e,n,s)}i=i.next}while(i!==r)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function M_(t){var e=t.alternate;e!==null&&(t.alternate=null,M_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[Js],delete e[$c],delete e[MT],delete e[FT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F_(t){return t.tag===5||t.tag===3||t.tag===4}function gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ka));else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Fe=null,Ot=!1;function Vn(t,e,n){for(n=n.child;n!==null;)U_(t,e,n),n=n.sibling}function U_(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:Je||ui(n,e);case 6:var r=Fe,i=Ot;Fe=null,Vn(t,e,n),Fe=r,Ot=i,Fe!==null&&(Ot?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Ot?(t=Fe,n=n.stateNode,t.nodeType===8?Yu(t.parentNode,n):t.nodeType===1&&Yu(t,n),Ks(t)):Yu(Fe,n.stateNode));break;case 4:r=Fe,i=Ot,Fe=n.stateNode.containerInfo,Ot=!0,Vn(t,e,n),Fe=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Je&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Vn(t,e,n),Je=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function ym(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eI),e.forEach(function(r){var i=cI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Ot=!1;break e;case 3:Fe=l.stateNode.containerInfo,Ot=!0;break e;case 4:Fe=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(Fe===null)throw Error(M(160));U_(s,o,i),Fe=null,Ot=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)j_(e,t),e=e.sibling}function j_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),$t(t),r&4){try{Os(3,t,t.return),Ll(3,t)}catch(D){Te(t,t.return,D)}try{Os(5,t,t.return)}catch(D){Te(t,t.return,D)}}break;case 1:Dt(e,t),$t(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(Dt(e,t),$t(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{$s(i,"")}catch(D){Te(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ly(i,s),Pc(l,o);var h=Pc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?fy(i,m):f==="dangerouslySetInnerHTML"?hy(i,m):f==="children"?$s(i,m):jh(i,f,m,h)}switch(l){case"input":Sc(i,s);break;case"textarea":uy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?fi(i,!!s.multiple,R,!1):y!==!!s.multiple&&(s.defaultValue!=null?fi(i,!!s.multiple,s.defaultValue,!0):fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Js]=s}catch(D){Te(t,t.return,D)}}break;case 6:if(Dt(e,t),$t(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Te(t,t.return,D)}}break;case 3:if(Dt(e,t),$t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(D){Te(t,t.return,D)}break;case 4:Dt(e,t),$t(t);break;case 13:Dt(e,t),$t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vd=Ae())),r&4&&ym(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Dt(e,t),Je=h):Dt(e,t),$t(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(z=t,f=t.child;f!==null;){for(m=z=f;z!==null;){switch(y=z,R=y.child,y.tag){case 0:case 11:case 14:case 15:Os(4,y,y.return);break;case 1:ui(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){Te(r,n,D)}}break;case 5:ui(y,y.return);break;case 22:if(y.memoizedState!==null){vm(m);continue}}R!==null?(R.return=y,z=R):vm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=dy("display",o))}catch(D){Te(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){Te(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Dt(e,t),$t(t),r&4&&ym(t);break;case 21:break;default:Dt(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($s(i,""),r.flags&=-33);var s=gm(t);sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gm(t);ih(t,l,o);break;default:throw Error(M(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nI(t,e,n){z=t,B_(t)}function B_(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=ua;var h=Je;if(ua=o,(Je=u)&&!h)for(z=i;z!==null;)o=z,u=o.child,o.tag===22&&o.memoizedState!==null?wm(i):u!==null?(u.return=o,z=u):wm(i);for(;s!==null;)z=s,B_(s),s=s.sibling;z=i,ua=l,Je=h}_m(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,z=s):_m(t)}}function _m(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Ll(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ks(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Je||e.flags&512&&rh(e)}catch(y){Te(e,e.return,y)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function vm(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function wm(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{rh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{rh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){z=null;break}var l=e.sibling;if(l!==null){l.return=e.return,z=l;break}z=e.return}}var rI=Math.ceil,il=Rn.ReactCurrentDispatcher,yd=Rn.ReactCurrentOwner,kt=Rn.ReactCurrentBatchConfig,ne=0,be=null,ke=null,Be=0,yt=0,ci=dr(0),Ne=0,io=null,Vr=0,Ml=0,_d=0,bs=null,ct=null,vd=0,Pi=1/0,ln=null,sl=!1,oh=null,Xn=null,ca=!1,Hn=null,ol=0,Ls=0,ah=null,ka=-1,Ca=0;function ot(){return ne&6?Ae():ka!==-1?ka:ka=Ae()}function Jn(t){return t.mode&1?ne&2&&Be!==0?Be&-Be:jT.transition!==null?(Ca===0&&(Ca=Ay()),Ca):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Dy(t.type)),t):1}function Ft(t,e,n,r){if(50<Ls)throw Ls=0,ah=null,Error(M(185));go(t,n,r),(!(ne&2)||t!==be)&&(t===be&&(!(ne&2)&&(Ml|=n),Ne===4&&Fn(t,Be)),mt(t,r),n===1&&ne===0&&!(e.mode&1)&&(Pi=Ae()+500,Vl&&fr()))}function mt(t,e){var n=t.callbackNode;jE(t,e);var r=$a(t,t===be?Be:0);if(r===0)n!==null&&Pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pp(n),e===1)t.tag===0?UT(Em.bind(null,t)):Xy(Em.bind(null,t)),bT(function(){!(ne&6)&&fr()}),n=null;else{switch(Ry(r)){case 1:n=Wh;break;case 4:n=Iy;break;case 16:n=za;break;case 536870912:n=Sy;break;default:n=za}n=Q_(n,z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z_(t,e){if(ka=-1,Ca=0,ne&6)throw Error(M(327));var n=t.callbackNode;if(_i()&&t.callbackNode!==n)return null;var r=$a(t,t===be?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=al(t,r);else{e=r;var i=ne;ne|=2;var s=H_();(be!==t||Be!==e)&&(ln=null,Pi=Ae()+500,kr(t,e));do try{oI();break}catch(l){$_(t,l)}while(!0);id(),il.current=s,ne=i,ke!==null?e=0:(be=null,Be=0,e=Ne)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=lh(t,i))),e===1)throw n=io,kr(t,0),Fn(t,r),mt(t,Ae()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,!(r&30)&&!iI(i)&&(e=al(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=lh(t,s))),e===1))throw n=io,kr(t,0),Fn(t,r),mt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Er(t,ct,ln);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=vd+500-Ae(),10<e)){if($a(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zc(Er.bind(null,t,ct,ln),e);break}Er(t,ct,ln);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rI(r/1960))-r,10<r){t.timeoutHandle=zc(Er.bind(null,t,ct,ln),r);break}Er(t,ct,ln);break;case 5:Er(t,ct,ln);break;default:throw Error(M(329))}}}return mt(t,Ae()),t.callbackNode===n?z_.bind(null,t):null}function lh(t,e){var n=bs;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=al(t,e),t!==2&&(e=ct,ct=n,e!==null&&uh(e)),t}function uh(t){ct===null?ct=t:ct.push.apply(ct,t)}function iI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~_d,e&=~Ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function Em(t){if(ne&6)throw Error(M(327));_i();var e=$a(t,0);if(!(e&1))return mt(t,Ae()),null;var n=al(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=lh(t,r))}if(n===1)throw n=io,kr(t,0),Fn(t,e),mt(t,Ae()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,ct,ln),mt(t,Ae()),null}function wd(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Pi=Ae()+500,Vl&&fr())}}function Or(t){Hn!==null&&Hn.tag===0&&!(ne&6)&&_i();var e=ne;ne|=1;var n=kt.transition,r=oe;try{if(kt.transition=null,oe=1,t)return t()}finally{oe=r,kt.transition=n,ne=e,!(ne&6)&&fr()}}function Ed(){yt=ci.current,fe(ci)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OT(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:ki(),fe(ft),fe(et),cd();break;case 5:ud(r);break;case 4:ki();break;case 13:fe(ye);break;case 19:fe(ye);break;case 10:sd(r.type._context);break;case 22:case 23:Ed()}n=n.return}if(be=t,ke=t=Zn(t.current,null),Be=yt=e,Ne=0,io=null,_d=Ml=Vr=0,ct=bs=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Sr=null}return t}function $_(t,e){do{var n=ke;try{if(id(),Sa.current=rl,nl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nl=!1}if(Dr=0,Oe=Ce=_e=null,Vs=!1,to=0,yd.current=null,n===null||n.return===null){Ne=1,io=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=lm(o);if(R!==null){R.flags&=-257,um(R,o,l,s,e),R.mode&1&&am(s,h,e),e=R,u=h;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){am(s,h,e),Td();break e}u=Error(M(426))}}else if(pe&&l.mode&1){var V=lm(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),um(V,o,l,s,e),nd(Ci(u,l));break e}}s=u=Ci(u,l),Ne!==4&&(Ne=2),bs===null?bs=[s]:bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=R_(s,u,e);tm(s,I);break e;case 1:l=u;var E=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Xn===null||!Xn.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=k_(s,l,e);tm(s,O);break e}}s=s.return}while(s!==null)}q_(n)}catch(j){e=j,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function H_(){var t=il.current;return il.current=rl,t===null?rl:t}function Td(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),be===null||!(Vr&268435455)&&!(Ml&268435455)||Fn(be,Be)}function al(t,e){var n=ne;ne|=2;var r=H_();(be!==t||Be!==e)&&(ln=null,kr(t,e));do try{sI();break}catch(i){$_(t,i)}while(!0);if(id(),ne=n,il.current=r,ke!==null)throw Error(M(261));return be=null,Be=0,Ne}function sI(){for(;ke!==null;)W_(ke)}function oI(){for(;ke!==null&&!NE();)W_(ke)}function W_(t){var e=G_(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?q_(t):ke=e,yd.current=null}function q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ZT(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,ke=null;return}}else if(n=JT(n,e,yt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Ne===0&&(Ne=5)}function Er(t,e,n){var r=oe,i=kt.transition;try{kt.transition=null,oe=1,aI(t,e,n,r)}finally{kt.transition=i,oe=r}return null}function aI(t,e,n,r){do _i();while(Hn!==null);if(ne&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BE(t,s),t===be&&(ke=be=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,Q_(za,function(){return _i(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=oe;oe=1;var l=ne;ne|=4,yd.current=null,tI(t,n),j_(n,t),kT(jc),Ha=!!Uc,jc=Uc=null,t.current=n,nI(n),DE(),ne=l,oe=o,kt.transition=s}else t.current=n;if(ca&&(ca=!1,Hn=t,ol=i),s=t.pendingLanes,s===0&&(Xn=null),bE(n.stateNode),mt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,t=oh,oh=null,t;return ol&1&&t.tag!==0&&_i(),s=t.pendingLanes,s&1?t===ah?Ls++:(Ls=0,ah=t):Ls=0,fr(),null}function _i(){if(Hn!==null){var t=Ry(ol),e=kt.transition,n=oe;try{if(kt.transition=null,oe=16>t?16:t,Hn===null)var r=!1;else{if(t=Hn,Hn=null,ol=0,ne&6)throw Error(M(331));var i=ne;for(ne|=4,z=t.current;z!==null;){var s=z,o=s.child;if(z.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(z=h;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Os(8,f,s)}var m=f.child;if(m!==null)m.return=f,z=m;else for(;z!==null;){f=z;var y=f.sibling,R=f.return;if(M_(f),f===h){z=null;break}if(y!==null){y.return=R,z=y;break}z=R}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var V=D.sibling;D.sibling=null,D=V}while(D!==null)}}z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Os(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,z=I;break e}z=s.return}}var E=t.current;for(z=E;z!==null;){o=z;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,z=k;else e:for(o=E;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ll(9,l)}}catch(j){Te(l,l.return,j)}if(l===o){z=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,z=O;break e}z=l.return}}if(ne=i,fr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Cl,t)}catch{}r=!0}return r}finally{oe=n,kt.transition=e}}return!1}function Tm(t,e,n){e=Ci(n,e),e=R_(t,e,1),t=Yn(t,e,1),e=ot(),t!==null&&(go(t,1,e),mt(t,e))}function Te(t,e,n){if(t.tag===3)Tm(t,t,n);else for(;e!==null;){if(e.tag===3){Tm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){t=Ci(n,t),t=k_(e,t,1),e=Yn(e,t,1),t=ot(),e!==null&&(go(e,1,t),mt(e,t));break}}e=e.return}}function lI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(Be&n)===n&&(Ne===4||Ne===3&&(Be&130023424)===Be&&500>Ae()-vd?kr(t,0):_d|=n),mt(t,e)}function K_(t,e){e===0&&(t.mode&1?(e=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):e=1);var n=ot();t=wn(t,e),t!==null&&(go(t,e,n),mt(t,n))}function uI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K_(t,n)}function cI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),K_(t,n)}var G_;G_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,XT(t,e,n);dt=!!(t.flags&131072)}else dt=!1,pe&&e.flags&1048576&&Jy(e,Xa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ra(t,e),t=e.pendingProps;var i=Si(e,et.current);yi(e,n),i=dd(null,e,r,t,i,n);var s=fd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,Qa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(e),i.updater=bl,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Jc(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&ed(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ra(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dI(r),t=Vt(r,t),i){case 0:e=Xc(null,e,r,t,n);break e;case 1:e=dm(null,e,r,t,n);break e;case 11:e=cm(null,e,r,t,n);break e;case 14:e=hm(null,e,r,Vt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),dm(t,e,r,i,n);case 3:e:{if(N_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,i_(t,e),el(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ci(Error(M(423)),e),e=fm(t,e,r,n,i);break e}else if(r!==i){i=Ci(Error(M(424)),e),e=fm(t,e,r,n,i);break e}else for(_t=Qn(e.stateNode.containerInfo.firstChild),wt=e,pe=!0,bt=null,n=n_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ai(),r===i){e=En(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return s_(e),t===null&&qc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bc(r,i)?o=null:s!==null&&Bc(r,s)&&(e.flags|=32),x_(t,e),st(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return D_(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ri(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),cm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Ja,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!ft.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=gn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=Ct(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),hm(t,e,r,i,n);case 15:return C_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Ra(t,e),e.tag=1,pt(r)?(t=!0,Qa(e)):t=!1,yi(e,n),A_(e,r,i),Qc(e,r,i,n),Jc(null,e,r,!0,t,n);case 19:return V_(t,e,n);case 22:return P_(t,e,n)}throw Error(M(156,e.tag))};function Q_(t,e){return Ty(t,e)}function hI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new hI(t,e,n,r)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dI(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zh)return 11;if(t===$h)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Cr(n.children,i,s,e);case Bh:o=8,i|=8;break;case vc:return t=Rt(12,n,e,i|2),t.elementType=vc,t.lanes=s,t;case wc:return t=Rt(13,n,e,i),t.elementType=wc,t.lanes=s,t;case Ec:return t=Rt(19,n,e,i),t.elementType=Ec,t.lanes=s,t;case sy:return Fl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ry:o=10;break e;case iy:o=9;break e;case zh:o=11;break e;case $h:o=14;break e;case bn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function Fl(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=sy,t.lanes=n,t.stateNode={isHidden:!1},t}function ic(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function sc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sd(t,e,n,r,i,s,o,l,u){return t=new fI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function pI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Y_(t){if(!t)return ar;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(pt(n))return Yy(t,n,e)}return e}function X_(t,e,n,r,i,s,o,l,u){return t=Sd(n,r,!0,t,i,s,o,l,u),t.context=Y_(null),n=t.current,r=ot(),i=Jn(n),s=gn(r,i),s.callback=e??null,Yn(n,s,i),t.current.lanes=i,go(t,i,r),mt(t,r),t}function Ul(t,e,n,r){var i=e.current,s=ot(),o=Jn(i);return n=Y_(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yn(i,e,o),t!==null&&(Ft(t,i,o,s),Ia(t,i,o)),o}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ad(t,e){Im(t,e),(t=t.alternate)&&Im(t,e)}function mI(){return null}var J_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rd(t){this._internalRoot=t}jl.prototype.render=Rd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Ul(t,e,null,null)};jl.prototype.unmount=Rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Ul(null,t,null,null)}),e[vn]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Py();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mn.length&&e!==0&&e<Mn[n].priority;n++);Mn.splice(n,0,t),n===0&&Ny(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sm(){}function gI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ll(o);s.call(h)}}var o=X_(e,r,t,0,null,!1,!1,"",Sm);return t._reactRootContainer=o,t[vn]=o.current,Ys(t.nodeType===8?t.parentNode:t),Or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ll(u);l.call(h)}}var u=Sd(t,0,!1,null,null,!1,!1,"",Sm);return t._reactRootContainer=u,t[vn]=u.current,Ys(t.nodeType===8?t.parentNode:t),Or(function(){Ul(e,u,n,r)}),u}function zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ll(o);l.call(u)}}Ul(e,o,t,i)}else o=gI(n,e,t,i,r);return ll(o)}ky=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vs(e.pendingLanes);n!==0&&(qh(e,n|1),mt(e,Ae()),!(ne&6)&&(Pi=Ae()+500,fr()))}break;case 13:Or(function(){var r=wn(t,1);if(r!==null){var i=ot();Ft(r,t,1,i)}}),Ad(t,1)}};Kh=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=ot();Ft(e,t,134217728,n)}Ad(t,134217728)}};Cy=function(t){if(t.tag===13){var e=Jn(t),n=wn(t,e);if(n!==null){var r=ot();Ft(n,t,e,r)}Ad(t,e)}};Py=function(){return oe};xy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Nc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dl(r);if(!i)throw Error(M(90));ay(r),Sc(r,i)}}}break;case"textarea":uy(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};gy=wd;yy=Or;var yI={usingClientEntryPoint:!1,Events:[_o,ii,Dl,py,my,wd]},ms={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_I={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wy(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||mI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Cl=ha.inject(_I),qt=ha}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yI;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(M(200));return pI(t,e,null,n)};Tt.createRoot=function(t,e){if(!kd(t))throw Error(M(299));var n=!1,r="",i=J_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sd(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,Ys(t.nodeType===8?t.parentNode:t),new Rd(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=wy(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Or(t)};Tt.hydrate=function(t,e,n){if(!Bl(e))throw Error(M(200));return zl(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=J_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=X_(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,Ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jl(e)};Tt.render=function(t,e,n){if(!Bl(e))throw Error(M(200));return zl(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(M(40));return t._reactRootContainer?(Or(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};Tt.unstable_batchedUpdates=wd;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bl(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return zl(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function Z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z_)}catch(t){console.error(t)}}Z_(),Zg.exports=Tt;var vI=Zg.exports,Am=vI;yc.createRoot=Am.createRoot,yc.hydrateRoot=Am.hydrateRoot;var Rm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(y=64)),r.push(n[f],n[m],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ev(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new EI;const y=s<<2|l>>4;if(r.push(y),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const x=h<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TI=function(t){const e=ev(t);return tv.encodeByteArray(e,!0)},ul=function(t){return TI(t).replace(/\./g,"")},nv=function(t){try{return tv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=()=>II().__FIREBASE_DEFAULTS__,AI=()=>{if(typeof process>"u"||typeof Rm>"u")return;const t=Rm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nv(t[1]);return e&&JSON.parse(e)},$l=()=>{try{return SI()||AI()||RI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rv=t=>{var e,n;return(n=(e=$l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kI=t=>{const e=rv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iv=()=>{var t;return(t=$l())===null||t===void 0?void 0:t.config},sv=t=>{var e;return(e=$l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ul(JSON.stringify(n)),ul(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function NI(){var t;const e=(t=$l())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bI(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LI(){return!NI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MI(){try{return typeof indexedDB=="object"}catch{return!1}}function FI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UI,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,r)}}function jI(t,e){return t.replace(BI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BI=/\{\$([^}]+)}/g;function zI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(km(s)&&km(o)){if(!cl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function km(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Es(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ts(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $I(t,e){const n=new HI(t,e);return n.subscribe.bind(n)}class HI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=oc),i.error===void 0&&(i.error=oc),i.complete===void 0&&(i.complete=oc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GI(e))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tr){return this.instances.has(e)}getOptions(e=Tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tr){return this.component?this.component.multipleInstances?e:Tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===Tr?void 0:t}function GI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const YI={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},XI=ee.INFO,JI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},ZI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cd{constructor(e){this.name=e,this._logLevel=XI,this._logHandler=ZI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const eS=(t,e)=>e.some(n=>t instanceof n);let Cm,Pm;function tS(){return Cm||(Cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nS(){return Pm||(Pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ov=new WeakMap,ch=new WeakMap,av=new WeakMap,ac=new WeakMap,Pd=new WeakMap;function rS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ov.set(n,t)}).catch(()=>{}),Pd.set(e,t),e}function iS(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||av.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sS(t){hh=t(hh)}function oS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lc(this),e,...n);return av.set(r,e.sort?e.sort():[e]),er(r)}:nS().includes(t)?function(...e){return t.apply(lc(this),e),er(ov.get(this))}:function(...e){return er(t.apply(lc(this),e))}}function aS(t){return typeof t=="function"?oS(t):(t instanceof IDBTransaction&&iS(t),eS(t,tS())?new Proxy(t,hh):t)}function er(t){if(t instanceof IDBRequest)return rS(t);if(ac.has(t))return ac.get(t);const e=aS(t);return e!==t&&(ac.set(t,e),Pd.set(e,t)),e}const lc=t=>Pd.get(t);function lS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(er(o.result),u.oldVersion,u.newVersion,er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const uS=["get","getKey","getAll","getAllKeys","count"],cS=["put","add","delete","clear"],uc=new Map;function xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return uc.set(e,s),s}sS(t=>({...t,get:(e,n,r)=>xm(e,n)||t.get(e,n,r),has:(e,n)=>!!xm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dh="@firebase/app",Nm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Cd("@firebase/app"),fS="@firebase/app-compat",pS="@firebase/analytics-compat",mS="@firebase/analytics",gS="@firebase/app-check-compat",yS="@firebase/app-check",_S="@firebase/auth",vS="@firebase/auth-compat",wS="@firebase/database",ES="@firebase/data-connect",TS="@firebase/database-compat",IS="@firebase/functions",SS="@firebase/functions-compat",AS="@firebase/installations",RS="@firebase/installations-compat",kS="@firebase/messaging",CS="@firebase/messaging-compat",PS="@firebase/performance",xS="@firebase/performance-compat",NS="@firebase/remote-config",DS="@firebase/remote-config-compat",VS="@firebase/storage",OS="@firebase/storage-compat",bS="@firebase/firestore",LS="@firebase/vertexai-preview",MS="@firebase/firestore-compat",FS="firebase",US="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="[DEFAULT]",jS={[dh]:"fire-core",[fS]:"fire-core-compat",[mS]:"fire-analytics",[pS]:"fire-analytics-compat",[yS]:"fire-app-check",[gS]:"fire-app-check-compat",[_S]:"fire-auth",[vS]:"fire-auth-compat",[wS]:"fire-rtdb",[ES]:"fire-data-connect",[TS]:"fire-rtdb-compat",[IS]:"fire-fn",[SS]:"fire-fn-compat",[AS]:"fire-iid",[RS]:"fire-iid-compat",[kS]:"fire-fcm",[CS]:"fire-fcm-compat",[PS]:"fire-perf",[xS]:"fire-perf-compat",[NS]:"fire-rc",[DS]:"fire-rc-compat",[VS]:"fire-gcs",[OS]:"fire-gcs-compat",[bS]:"fire-fst",[MS]:"fire-fst-compat",[LS]:"fire-vertex","fire-js":"fire-js",[FS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map,BS=new Map,ph=new Map;function Dm(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xi(t){const e=t.name;if(ph.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of hl.values())Dm(n,t);for(const n of BS.values())Dm(n,t);return!0}function xd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new wo("app","Firebase",zS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=US;function lv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=iv()),!n)throw tr.create("no-options");const s=hl.get(i);if(s){if(cl(n,s.options)&&cl(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new QI(i);for(const u of ph.values())o.addComponent(u);const l=new $S(n,r,o);return hl.set(i,l),l}function uv(t=fh){const e=hl.get(t);if(!e&&t===fh&&iv())return lv();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let i=(r=jS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}xi(new br(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="firebase-heartbeat-database",WS=1,so="firebase-heartbeat-store";let cc=null;function cv(){return cc||(cc=lS(HS,WS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(so)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),cc}async function qS(t){try{const n=(await cv()).transaction(so),r=await n.objectStore(so).get(hv(t));return await n.done,r}catch(e){if(e instanceof kn)Tn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function Vm(t,e){try{const r=(await cv()).transaction(so,"readwrite");await r.objectStore(so).put(e,hv(t)),await r.done}catch(n){if(n instanceof kn)Tn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function hv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=1024,GS=30*24*60*60*1e3;class QS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Om();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=GS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Om(),{heartbeatsToSend:r,unsentEntries:i}=YS(this._heartbeatsCache.heartbeats),s=ul(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Tn.warn(n),""}}}function Om(){return new Date().toISOString().substring(0,10)}function YS(t,e=KS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bm(t){return ul(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){xi(new br("platform-logger",e=>new hS(e),"PRIVATE")),xi(new br("heartbeat",e=>new QS(e),"PRIVATE")),nr(dh,Nm,t),nr(dh,Nm,"esm2017"),nr("fire-js","")}JS("");function Nd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZS=dv,fv=new wo("auth","Firebase",dv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Cd("@firebase/auth");function eA(t,...e){dl.logLevel<=ee.WARN&&dl.warn(`Auth (${$i}): ${t}`,...e)}function xa(t,...e){dl.logLevel<=ee.ERROR&&dl.error(`Auth (${$i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Dd(t,...e)}function Gt(t,...e){return Dd(t,...e)}function pv(t,e,n){const r=Object.assign(Object.assign({},ZS()),{[e]:n});return new wo("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return pv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fv.create(t,...e)}function W(t,e,...n){if(!t)throw Dd(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xa(e),new Error(e)}function In(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tA(){return Lm()==="http:"||Lm()==="https:"}function Lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tA()||VI()||"connection"in navigator)?navigator.onLine:!0}function rA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=xI()||OI()}get(){return nA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new To(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,r,i={}){return gv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return DI()||(h.referrerPolicy="no-referrer"),mv.fetch()(yv(t,t.config.apiHost,n,l),h)})}async function gv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iA),e);try{const i=new aA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw da(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw da(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw da(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pv(t,f,h);zt(t,f)}}catch(i){if(i instanceof kn)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function Hl(t,e,n,r,i={}){const s=await Cn(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vd(t.config,i):`${t.config.apiScheme}://${i}`}function oA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),sA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}function Mm(t){return t!==void 0&&t.enterprise!==void 0}class lA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uA(t,e){return Cn(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function _v(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hA(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=Od(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ms(hc(i.auth_time)),issuedAtTime:Ms(hc(i.iat)),expirationTime:Ms(hc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hc(t){return Number(t)*1e3}function Od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const i=nv(n);return i?JSON.parse(i):(xa("Failed to decode base64 JWT payload"),null)}catch(i){return xa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fm(t){const e=Od(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&dA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await oo(t,_v(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?vv(s.providerUserInfo):[],l=mA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new mh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function pA(t){const e=Le(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function vv(t){return t.map(e=>{var{providerId:n}=e,r=Nd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e){const n=await gv(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",mv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yA(t,e){return Cn(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Fm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await oo(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hA(this,e)}reload(){return pA(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await oo(this,cA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:O,isAnonymous:j,providerData:F,stsTokenManager:w}=n;W(k&&w,e,"internal-error");const g=vi.fromJSON(this.name,w);W(typeof k=="string",e,"internal-error"),On(m,e.name),On(y,e.name),W(typeof O=="boolean",e,"internal-error"),W(typeof j=="boolean",e,"internal-error"),On(R,e.name),On(x,e.name),On(D,e.name),On(V,e.name),On(I,e.name),On(E,e.name);const v=new pn({uid:k,auth:e,email:y,emailVerified:O,displayName:m,isAnonymous:j,photoURL:x,phoneNumber:R,tenantId:D,stsTokenManager:g,createdAt:I,lastLoginAt:E});return F&&Array.isArray(F)&&(v.providerData=F.map(_=>Object.assign({},_))),V&&(v._redirectEventId=V),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new vi;i.updateFromServerResponse(n);const s=new pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new vi;l.updateFromIdToken(r);const u=new pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new mh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Map;function mn(t){In(t instanceof Function,"Expected a class definition");let e=Um.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Um.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wv.type="NONE";const jm=wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Na(this.userKey,i.apiKey,s),this.fullPersistenceKey=Na("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(mn(jm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||mn(jm);const o=Na(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=pn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new wi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rv(e))return"Blackberry";if(kv(e))return"Webos";if(Tv(e))return"Safari";if((e.includes("chrome/")||Iv(e))&&!e.includes("edge/"))return"Chrome";if(Av(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ev(t=tt()){return/firefox\//i.test(t)}function Tv(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Iv(t=tt()){return/crios\//i.test(t)}function Sv(t=tt()){return/iemobile/i.test(t)}function Av(t=tt()){return/android/i.test(t)}function Rv(t=tt()){return/blackberry/i.test(t)}function kv(t=tt()){return/webos/i.test(t)}function bd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _A(t=tt()){var e;return bd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vA(){return bI()&&document.documentMode===10}function Cv(t=tt()){return bd(t)||Av(t)||kv(t)||Rv(t)||/windows phone/i.test(t)||Sv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t,e=[]){let n;switch(t){case"Browser":n=Bm(tt());break;case"Worker":n=`${Bm(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e={}){return Cn(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=6;class IA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zm(this),this.idTokenSubscription=new zm(this),this.beforeStateQueue=new wA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _v(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(rr(this));const n=e?Le(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EA(this),n=new IA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hi(t){return Le(t)}class zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=$I(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AA(t){Wl=t}function xv(t){return Wl.loadJS(t)}function RA(){return Wl.recaptchaEnterpriseScript}function kA(){return Wl.gapiScript}function CA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const PA="recaptcha-enterprise",xA="NO_RECAPTCHA";class NA{constructor(e){this.type=PA,this.auth=Hi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{uA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new lA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Mm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(xA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Mm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=RA();u.length!==0&&(u+=l),xv(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function $m(t,e,n,r=!1){const i=new NA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $m(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $m(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t,e){const n=xd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cl(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function VA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OA(t,e,n){const r=Hi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Nv(e),{host:o,port:l}=bA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),LA()}function Nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bA(t){const e=Nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hm(o)}}}function Hm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function MA(t,e){return Cn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e){return Hl(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}async function UA(t,e){return Cn(t,"POST","/v1/accounts:sendOobCode",pr(t,e))}async function jA(t,e){return UA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){return Hl(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function zA(t,e){return Hl(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Ld{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gh(e,n,"signInWithPassword",FA);case"emailLink":return BA(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gh(e,r,"signUpPassword",MA);case"emailLink":return zA(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e){return Hl(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="http://localhost";class Lr extends Ld{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:$A,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WA(t){const e=Es(Ts(t)).link,n=e?Es(Ts(e)).deep_link_id:null,r=Es(Ts(t)).deep_link_id;return(r?Es(Ts(r)).link:null)||r||n||e||t}class ql{constructor(e){var n,r,i,s,o,l;const u=Es(Ts(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=HA((i=u.mode)!==null&&i!==void 0?i:null);W(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=WA(e);try{return new ql(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.providerId=Wi.PROVIDER_ID}static credential(e,n){return ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ql.parseLink(n);return W(r,"argument-error"),ao._fromEmailAndCode(e,r.code,r.tenantId)}}Wi.PROVIDER_ID="password";Wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Dv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Io{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Io{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Io{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pn._fromIdTokenResponse(e,r,i),o=Wm(r);return new Ni({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wm(r);return new Ni({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ml(e,n,r,i)}}function Vv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(t,s,e,r):s})}async function qA(t,e,n=!1){const r=await oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ni._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await oo(t,Vv(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Od(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),Ni._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(t,e,n=!1){if(dn(t.app))return Promise.reject(rr(t));const r="signIn",i=await Vv(t,r,e),s=await Ni._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function GA(t,e){return Ov(Hi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t,e,n){var r;W(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e,n){const r=Hi(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){W(l.handleCodeInApp,r,"argument-error"),l&&QA(r,o,l)}s(i,n),await gh(r,i,"getOobCode",jA)}function XA(t,e){const n=ql.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function JA(t,e,n){if(dn(t.app))return Promise.reject(rr(t));const r=Le(t),i=Wi.credentialWithLink(e,n||fl());return W(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),GA(r,i)}function ZA(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function eR(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function tR(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function nR(t){return Le(t).signOut()}const gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=1e3,iR=10;class Lv extends bv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lv.type="LOCAL";const sR=Lv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv extends bv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mv.type="SESSION";const Fv=Mv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await oR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Md("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function lR(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function uR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hR(){return Uv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="firebaseLocalStorageDb",dR=1,yl="firebaseLocalStorage",Bv="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gl(t,e){return t.transaction([yl],e?"readwrite":"readonly").objectStore(yl)}function fR(){const t=indexedDB.deleteDatabase(jv);return new So(t).toPromise()}function yh(){const t=indexedDB.open(jv,dR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yl,{keyPath:Bv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yl)?e(r):(r.close(),await fR(),e(await yh()))})})}async function qm(t,e,n){const r=Gl(t,!0).put({[Bv]:e,value:n});return new So(r).toPromise()}async function pR(t,e){const n=Gl(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function Km(t,e){const n=Gl(t,!0).delete(e);return new So(n).toPromise()}const mR=800,gR=3;class zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(hR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uR(),!this.activeServiceWorker)return;this.sender=new aR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yh();return await qm(e,gl,"1"),await Km(e,gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Km(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Gl(i,!1).getAll();return new So(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zv.type="LOCAL";const yR=zv;new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t,e){return e?mn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends Ld{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vR(t){return Ov(t.auth,new Fd(t),t.bypassAuthState)}function wR(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),KA(n,new Fd(t),t.bypassAuthState)}async function ER(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),qA(n,new Fd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vR;case"linkViaPopup":case"linkViaRedirect":return ER;case"reauthViaPopup":case"reauthViaRedirect":return wR;default:zt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new To(2e3,1e4);class hi extends $v{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TR.get())};e()}}hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="pendingRedirect",Da=new Map;class SR extends $v{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await AR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AR(t,e){const n=CR(e),r=kR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RR(t,e){Da.set(t._key(),e)}function kR(t){return mn(t._redirectPersistence)}function CR(t){return Na(IR,t.config.apiKey,t.name)}async function PR(t,e,n=!1){if(dn(t.app))return Promise.reject(rr(t));const r=Hi(t),i=_R(r,e),o=await new SR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=10*60*1e3;class NR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gm(e))}saveEventToCache(e){this.cachedEventUids.add(Gm(e)),this.lastProcessedEventTime=Date.now()}}function Gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bR=/^https?/;async function LR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VR(t);for(const n of e)try{if(MR(n))return}catch{}zt(t,"unauthorized-domain")}function MR(t){const e=fl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bR.test(n))return!1;if(OR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new To(3e4,6e4);function Qm(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UR(t){return new Promise((e,n)=>{var r,i,s;function o(){Qm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qm(),n(Gt(t,"network-request-failed"))},timeout:FR.get()})}if(!((i=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qt().gapi)===null||s===void 0)&&s.load)o();else{const l=CA("iframefcb");return Qt()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},xv(`${kA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Va=null,e})}let Va=null;function jR(t){return Va=Va||UR(t),Va}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=new To(5e3,15e3),zR="__/auth/iframe",$R="emulator/auth/iframe",HR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qR(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vd(e,$R):`https://${t.config.authDomain}/${zR}`,r={apiKey:e.apiKey,appName:t.name,v:$i},i=WR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function KR(t){const e=await jR(t),n=Qt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:qR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=Qt().setTimeout(()=>{s(o)},BR.get());function u(){Qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QR=500,YR=600,XR="_blank",JR="http://localhost";class Ym{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZR(t,e,n,r=QR,i=YR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},GR),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=Iv(h)?XR:n),Ev(h)&&(e=e||JR,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[R,x])=>`${y}${R}=${x},`,"");if(_A(h)&&l!=="_self")return ek(e||"",l),new Ym(null);const m=window.open(e||"",l,f);W(m,t,"popup-blocked");try{m.focus()}catch{}return new Ym(m)}function ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="__/auth/handler",nk="emulator/auth/handler",rk=encodeURIComponent("fac");async function Xm(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(e instanceof Dv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Io){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${rk}=${encodeURIComponent(u)}`:"";return`${ik(t)}?${Eo(l).slice(1)}${h}`}function ik({config:t}){return t.emulator?Vd(t,nk):`https://${t.authDomain}/${tk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fv,this._completeRedirectFn=PR,this._overrideRedirectResult=RR}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xm(e,n,r,fl(),i);return ZR(e,o,Md())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xm(e,n,r,fl(),i);return lR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KR(e),r=new NR(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dc];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cv()||Tv()||bd()}}const ok=sk;var Jm="@firebase/auth",Zm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uk(t){xi(new br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pv(t)},h=new SA(r,i,s,u);return VA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xi(new br("auth-internal",e=>{const n=Hi(e.getProvider("auth").getImmediate());return(r=>new ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(Jm,Zm,lk(t)),nr(Jm,Zm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=5*60,hk=sv("authIdTokenMaxAge")||ck;let eg=null;const dk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hk)return;const i=n==null?void 0:n.token;eg!==i&&(eg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fk(t=uv()){const e=xd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DA(t,{popupRedirectResolver:ok,persistence:[yR,sR,Fv]}),r=sv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=dk(s.toString());eR(n,o,()=>o(n.currentUser)),ZA(n,l=>o(l))}}const i=rv("auth");return i&&OA(n,`http://${i}`),n}function pk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uk("Browser");var tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,Wv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.D=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(_,A,C){for(var T=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)T[nt-2]=arguments[nt];return g.prototype[A].apply(_,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);var _=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)_[A]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(A=0;16>A;++A)_[A]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],A=w.g[2];var C=w.g[3],T=g+(C^v&(A^C))+_[0]+3614090360&4294967295;g=v+(T<<7&4294967295|T>>>25),T=C+(A^g&(v^A))+_[1]+3905402710&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(v^C&(g^v))+_[2]+606105819&4294967295,A=C+(T<<17&4294967295|T>>>15),T=v+(g^A&(C^g))+_[3]+3250441966&4294967295,v=A+(T<<22&4294967295|T>>>10),T=g+(C^v&(A^C))+_[4]+4118548399&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(A^g&(v^A))+_[5]+1200080426&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(v^C&(g^v))+_[6]+2821735955&4294967295,A=C+(T<<17&4294967295|T>>>15),T=v+(g^A&(C^g))+_[7]+4249261313&4294967295,v=A+(T<<22&4294967295|T>>>10),T=g+(C^v&(A^C))+_[8]+1770035416&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(A^g&(v^A))+_[9]+2336552879&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(v^C&(g^v))+_[10]+4294925233&4294967295,A=C+(T<<17&4294967295|T>>>15),T=v+(g^A&(C^g))+_[11]+2304563134&4294967295,v=A+(T<<22&4294967295|T>>>10),T=g+(C^v&(A^C))+_[12]+1804603682&4294967295,g=v+(T<<7&4294967295|T>>>25),T=C+(A^g&(v^A))+_[13]+4254626195&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(v^C&(g^v))+_[14]+2792965006&4294967295,A=C+(T<<17&4294967295|T>>>15),T=v+(g^A&(C^g))+_[15]+1236535329&4294967295,v=A+(T<<22&4294967295|T>>>10),T=g+(A^C&(v^A))+_[1]+4129170786&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^A&(g^v))+_[6]+3225465664&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^v&(C^g))+_[11]+643717713&4294967295,A=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(A^C))+_[0]+3921069994&4294967295,v=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(v^A))+_[5]+3593408605&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^A&(g^v))+_[10]+38016083&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^v&(C^g))+_[15]+3634488961&4294967295,A=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(A^C))+_[4]+3889429448&4294967295,v=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(v^A))+_[9]+568446438&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^A&(g^v))+_[14]+3275163606&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^v&(C^g))+_[3]+4107603335&4294967295,A=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(A^C))+_[8]+1163531501&4294967295,v=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(v^A))+_[13]+2850285829&4294967295,g=v+(T<<5&4294967295|T>>>27),T=C+(v^A&(g^v))+_[2]+4243563512&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^v&(C^g))+_[7]+1735328473&4294967295,A=C+(T<<14&4294967295|T>>>18),T=v+(C^g&(A^C))+_[12]+2368359562&4294967295,v=A+(T<<20&4294967295|T>>>12),T=g+(v^A^C)+_[5]+4294588738&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^A)+_[8]+2272392833&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^v)+_[11]+1839030562&4294967295,A=C+(T<<16&4294967295|T>>>16),T=v+(A^C^g)+_[14]+4259657740&4294967295,v=A+(T<<23&4294967295|T>>>9),T=g+(v^A^C)+_[1]+2763975236&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^A)+_[4]+1272893353&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^v)+_[7]+4139469664&4294967295,A=C+(T<<16&4294967295|T>>>16),T=v+(A^C^g)+_[10]+3200236656&4294967295,v=A+(T<<23&4294967295|T>>>9),T=g+(v^A^C)+_[13]+681279174&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^A)+_[0]+3936430074&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^v)+_[3]+3572445317&4294967295,A=C+(T<<16&4294967295|T>>>16),T=v+(A^C^g)+_[6]+76029189&4294967295,v=A+(T<<23&4294967295|T>>>9),T=g+(v^A^C)+_[9]+3654602809&4294967295,g=v+(T<<4&4294967295|T>>>28),T=C+(g^v^A)+_[12]+3873151461&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^v)+_[15]+530742520&4294967295,A=C+(T<<16&4294967295|T>>>16),T=v+(A^C^g)+_[2]+3299628645&4294967295,v=A+(T<<23&4294967295|T>>>9),T=g+(A^(v|~C))+_[0]+4096336452&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~A))+_[7]+1126891415&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~v))+_[14]+2878612391&4294967295,A=C+(T<<15&4294967295|T>>>17),T=v+(C^(A|~g))+_[5]+4237533241&4294967295,v=A+(T<<21&4294967295|T>>>11),T=g+(A^(v|~C))+_[12]+1700485571&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~A))+_[3]+2399980690&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~v))+_[10]+4293915773&4294967295,A=C+(T<<15&4294967295|T>>>17),T=v+(C^(A|~g))+_[1]+2240044497&4294967295,v=A+(T<<21&4294967295|T>>>11),T=g+(A^(v|~C))+_[8]+1873313359&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~A))+_[15]+4264355552&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~v))+_[6]+2734768916&4294967295,A=C+(T<<15&4294967295|T>>>17),T=v+(C^(A|~g))+_[13]+1309151649&4294967295,v=A+(T<<21&4294967295|T>>>11),T=g+(A^(v|~C))+_[4]+4149444226&4294967295,g=v+(T<<6&4294967295|T>>>26),T=C+(v^(g|~A))+_[11]+3174756917&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~v))+_[2]+718787259&4294967295,A=C+(T<<15&4294967295|T>>>17),T=v+(C^(A|~g))+_[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var v=g-this.blockSize,_=this.B,A=this.h,C=0;C<g;){if(A==0)for(;C<=v;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<g;)if(_[A++]=w.charCodeAt(C++),A==this.blockSize){i(this,_),A=0;break}}else for(;C<g;)if(_[A++]=w[C++],A==this.blockSize){i(this,_),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var v=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.u(w),w=Array(16),g=v=0;4>g;++g)for(var _=0;32>_;_+=8)w[v++]=this.g[g]>>>_&255;return w};function s(w,g){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function o(w,g){this.h=g;for(var v=[],_=!0,A=w.length-1;0<=A;A--){var C=w[A]|0;_&&C==g||(v[A]=C,_=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return V(h(-w));for(var g=[],v=1,_=0;w>=v;_++)g[_]=w/v|0,v*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return V(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),_=m,A=0;A<w.length;A+=8){var C=Math.min(8,w.length-A),T=parseInt(w.substring(A,A+C),g);8>C?(C=h(Math.pow(g,C)),_=_.j(C).add(h(T))):(_=_.j(v),_=_.add(h(T)))}return _}var m=u(0),y=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-V(this).m();for(var w=0,g=1,v=0;v<this.g.length;v++){var _=this.i(v);w+=(0<=_?_:4294967296+_)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x(this))return"0";if(D(this))return"-"+V(this).toString(w);for(var g=h(Math.pow(w,6)),v=this,_="";;){var A=O(v,g).g;v=I(v,A.j(g));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,x(v))return C+_;for(;6>C.length;)C="0"+C;_=C+_}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function x(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=I(this,w),D(w)?-1:x(w)?0:1};function V(w){for(var g=w.g.length,v=[],_=0;_<g;_++)v[_]=~w.g[_];return new o(v,~w.h).add(y)}t.abs=function(){return D(this)?V(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],_=0,A=0;A<=g;A++){var C=_+(this.i(A)&65535)+(w.i(A)&65535),T=(C>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);_=T>>>16,C&=65535,T&=65535,v[A]=T<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(w,g){return w.add(V(g))}t.j=function(w){if(x(this)||x(w))return m;if(D(this))return D(w)?V(this).j(V(w)):V(V(this).j(w));if(D(w))return V(this.j(V(w)));if(0>this.l(R)&&0>w.l(R))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,v=[],_=0;_<2*g;_++)v[_]=0;for(_=0;_<this.g.length;_++)for(var A=0;A<w.g.length;A++){var C=this.i(_)>>>16,T=this.i(_)&65535,nt=w.i(A)>>>16,xt=w.i(A)&65535;v[2*_+2*A]+=T*xt,E(v,2*_+2*A),v[2*_+2*A+1]+=C*xt,E(v,2*_+2*A+1),v[2*_+2*A+1]+=T*nt,E(v,2*_+2*A+1),v[2*_+2*A+2]+=C*nt,E(v,2*_+2*A+2)}for(_=0;_<g;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=g;_<2*g;_++)v[_]=0;return new o(v,0)};function E(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function k(w,g){this.g=w,this.h=g}function O(w,g){if(x(g))throw Error("division by zero");if(x(w))return new k(m,m);if(D(w))return g=O(V(w),g),new k(V(g.g),V(g.h));if(D(g))return g=O(w,V(g)),new k(V(g.g),g.h);if(30<w.g.length){if(D(w)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=y,_=g;0>=_.l(w);)v=j(v),_=j(_);var A=F(v,1),C=F(_,1);for(_=F(_,2),v=F(v,2);!x(_);){var T=C.add(_);0>=T.l(w)&&(A=A.add(v),C=T),_=F(_,1),v=F(v,1)}return g=I(w,A.j(g)),new k(A,g)}for(A=m;0<=w.l(g);){for(v=Math.max(1,Math.floor(w.m()/g.m())),_=Math.ceil(Math.log(v)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),C=h(v),T=C.j(g);D(T)||0<T.l(w);)v-=_,C=h(v),T=C.j(g);x(C)&&(C=y),A=A.add(C),w=I(w,T)}return new k(A,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],_=0;_<g;_++)v[_]=this.i(_)&w.i(_);return new o(v,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],_=0;_<g;_++)v[_]=this.i(_)|w.i(_);return new o(v,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),v=[],_=0;_<g;_++)v[_]=this.i(_)^w.i(_);return new o(v,this.h^w.h)};function j(w){for(var g=w.g.length+1,v=[],_=0;_<g;_++)v[_]=w.i(_)<<1|w.i(_-1)>>>31;return new o(v,w.h)}function F(w,g){var v=g>>5;g%=32;for(var _=w.g.length-v,A=[],C=0;C<_;C++)A[C]=0<g?w.i(C+v)>>>g|w.i(C+v+1)<<32-g:w.i(C+v);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Pr=o}).apply(typeof tg<"u"?tg:typeof self<"u"?self:typeof window<"u"?window:{});var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qv,Is,Kv,Oa,_h,Gv,Qv,Yv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fa=="object"&&fa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var P=a[p];if(!(P in d))break e;d=d[P]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,P={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function x(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,P,N){for(var U=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)U[ue-2]=arguments[ue];return c.prototype[P].apply(p,U)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const P=a.length||0,N=p.length||0;a.length=P+N;for(let U=0;U<N;U++)a[P+U]=p[U]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var j=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function F(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(a,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)a[d]=p[d];for(let N=0;N<v.length;N++)d=v[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class nt{constructor(){this.h=this.g=null}add(c,d){const p=xt.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var xt=new I(()=>new Pn,a=>a.reset());class Pn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let en,B=!1,G=new nt,X=()=>{const a=l.Promise.resolve(void 0);en=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){C(d)}var c=xt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function nn(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}x(nn,Ie);var rn={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),mw=0;function gw(a,c,d,p,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++mw,this.da=this.fa=!1}function No(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Do(a){this.src=a,this.g={},this.h=0}Do.prototype.add=function(a,c,d,p,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=du(a,c,p,P);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new gw(c,this.src,N,!!p,P),c.fa=d,a.push(c)),c};function hu(a,c){var d=c.type;if(d in a.g){var p=a.g[d],P=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=P)&&Array.prototype.splice.call(p,P,1),N&&(No(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function du(a,c,d,p){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return P}return-1}var fu="closure_lm_"+(1e6*Math.random()|0),pu={};function _f(a,c,d,p,P){if(Array.isArray(c)){for(var N=0;N<c.length;N++)_f(a,c[N],d,p,P);return null}return d=Ef(d),a&&a[sn]?a.K(c,d,h(p)?!!p.capture:!1,P):yw(a,c,d,!1,p,P)}function yw(a,c,d,p,P,N){if(!c)throw Error("Invalid event type");var U=h(P)?!!P.capture:!!P,ue=gu(a);if(ue||(a[fu]=ue=new Do(a)),d=ue.add(c,d,p,U,N),d.proxy)return d;if(p=_w(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)tn||(P=U),P===void 0&&(P=!1),a.addEventListener(c.toString(),p,P);else if(a.attachEvent)a.attachEvent(wf(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _w(){function a(d){return c.call(a.src,a.listener,d)}const c=vw;return a}function vf(a,c,d,p,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)vf(a,c[N],d,p,P);else p=h(p)?!!p.capture:!!p,d=Ef(d),a&&a[sn]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=du(N,d,p,P),-1<d&&(No(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=gu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=du(c,d,p,P)),(d=-1<a?c[a]:null)&&mu(d))}function mu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[sn])hu(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(wf(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=gu(c))?(hu(d,a),d.h==0&&(d.src=null,c[fu]=null)):No(a)}}}function wf(a){return a in pu?pu[a]:pu[a]="on"+a}function vw(a,c){if(a.da)a=!0;else{c=new nn(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&mu(a),a=d.call(p,c)}return a}function gu(a){return a=a[fu],a instanceof Do?a:null}var yu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ef(a){return typeof a=="function"?a:(a[yu]||(a[yu]=function(c){return a.handleEvent(c)}),a[yu])}function We(){le.call(this),this.i=new Do(this),this.M=this,this.F=null}x(We,le),We.prototype[sn]=!0,We.prototype.removeEventListener=function(a,c,d,p){vf(this,a,c,d,p)};function rt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var P=c;c=new Ie(p,a),_(c,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var U=c.g=d[N];P=Vo(U,p,!0,c)&&P}if(U=c.g=a,P=Vo(U,p,!0,c)&&P,P=Vo(U,p,!1,c)&&P,d)for(N=0;N<d.length;N++)U=c.g=d[N],P=Vo(U,p,!1,c)&&P}We.prototype.N=function(){if(We.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)No(d[p]);delete a.g[c],a.h--}}this.F=null},We.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},We.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Vo(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,N=0;N<c.length;++N){var U=c[N];if(U&&!U.da&&U.capture==d){var ue=U.listener,Me=U.ha||U.src;U.fa&&hu(a.i,U),P=ue.call(Me,p)!==!1&&P}}return P&&!p.defaultPrevented}function Tf(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function If(a){a.g=Tf(()=>{a.g=null,a.i&&(a.i=!1,If(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ww extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:If(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(a){le.call(this),this.h=a,this.g={}}x(Qi,le);var Sf=[];function Af(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&mu(c)},a),a.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),Af(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _u=l.JSON.stringify,Ew=l.JSON.parse,Tw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vu(){}vu.prototype.h=null;function Rf(a){return a.h||(a.h=a.i())}function kf(){}var Yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wu(){Ie.call(this,"d")}x(wu,Ie);function Eu(){Ie.call(this,"c")}x(Eu,Ie);var gr={},Cf=null;function Oo(){return Cf=Cf||new We}gr.La="serverreachability";function Pf(a){Ie.call(this,gr.La,a)}x(Pf,Ie);function Xi(a){const c=Oo();rt(c,new Pf(c))}gr.STAT_EVENT="statevent";function xf(a,c){Ie.call(this,gr.STAT_EVENT,a),this.stat=c}x(xf,Ie);function it(a){const c=Oo();rt(c,new xf(c,a))}gr.Ma="timingevent";function Nf(a,c){Ie.call(this,gr.Ma,a),this.size=c}x(Nf,Ie);function Ji(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Zi(){this.g=!0}Zi.prototype.xa=function(){this.g=!1};function Iw(a,c,d,p,P,N){a.info(function(){if(a.g)if(N)for(var U="",ue=N.split("&"),Me=0;Me<ue.length;Me++){var re=ue[Me].split("=");if(1<re.length){var qe=re[0];re=re[1];var Ke=qe.split("_");U=2<=Ke.length&&Ke[1]=="type"?U+(qe+"="+re+"&"):U+(qe+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+U})}function Sw(a,c,d,p,P,N,U){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+U})}function Wr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Rw(a,d)+(p?" "+p:"")})}function Aw(a,c){a.info(function(){return"TIMEOUT: "+c})}Zi.prototype.info=function(){};function Rw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return _u(d)}catch{return c}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Df={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tu;function Lo(){}x(Lo,vu),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},Tu=new Lo;function xn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vf}function Vf(){this.i=null,this.g="",this.h=!1}var Of={},Iu={};function Su(a,c,d){a.L=1,a.v=jo(on(c)),a.m=d,a.P=!0,bf(a,null)}function bf(a,c){a.F=Date.now(),Mo(a),a.A=on(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Qf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Vf,a.g=fp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new ww(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Sf[0]=P.toString()),P=Sf);for(var N=0;N<P.length;N++){var U=_f(d,P[N],p||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Xi(),Iw(a.i,a.u,a.A,a.l,a.R,a.m)}xn.prototype.ca=function(a){a=a.target;const c=this.M;c&&an(a)==3?c.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=an(this.g);var c=this.g.Ba();const Gr=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||np(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=Gr?Xi(3):Xi(2)),Au(this);var d=this.g.Z();this.X=d;t:if(Lf(this)){var p=np(this.g);a="";var P=p.length,N=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),es(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==P-1)});p.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,Sw(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ue)){var re=ue;break t}}re=null}if(d=re)Wr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ru(this,d);else{this.o=!1,this.s=3,it(12),yr(this),es(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<U.length;)if(Nt=kw(this,U),Nt==Iu){Ke==4&&(this.s=4,it(14),d=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Of){this.s=4,it(15),Wr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Wr(this.i,this.l,Nt,null),Ru(this,Nt);if(Lf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||U.length!=0||this.h.h||(this.s=1,it(16),d=!1),this.o=this.o&&d,!d)Wr(this.i,this.l,U,"[Invalid Chunked Response]"),yr(this),es(this);else if(0<U.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Du(qe),qe.M=!0,it(11))}}else Wr(this.i,this.l,U,null),Ru(this,U);Ke==4&&yr(this),this.o&&!this.J&&(Ke==4?up(this.j,this):(this.o=!1,Mo(this)))}else Hw(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),yr(this),es(this)}}}catch{}finally{}};function Lf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?Iu:(d=Number(c.substring(d,p)),isNaN(d)?Of:(p+=1,p+d>c.length?Iu:(c=c.slice(p,p+d),a.C=p+d,c)))}xn.prototype.cancel=function(){this.J=!0,yr(this)};function Mo(a){a.S=Date.now()+a.I,Mf(a,a.I)}function Mf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ji(y(a.ba,a),c)}function Au(a){a.B&&(l.clearTimeout(a.B),a.B=null)}xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Aw(this.i,this.A),this.L!=2&&(Xi(),it(17)),yr(this),this.s=2,es(this)):Mf(this,this.S-a)};function es(a){a.j.G==0||a.J||up(a.j,a)}function yr(a){Au(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Af(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ru(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||ku(d.h,a))){if(!a.K&&ku(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)qo(d),Ho(d);else break e;Nu(d),it(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ji(y(d.Za,d),6e3));if(1>=jf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vr(d,11)}else if((a.K||d.g==a)&&qo(d),!E(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let re=P[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const qe=re[3];qe!=null&&(d.la=qe,d.j.info("VER="+d.la));const Ke=re[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const Gr=re[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(p=1.5*Gr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Nt=a.g;if(Nt){const Go=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Go){var N=p.h;N.g||Go.indexOf("spdy")==-1&&Go.indexOf("quic")==-1&&Go.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Cu(N,N.h),N.h=null))}if(p.D){const Vu=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vu&&(p.ya=Vu,he(p.I,p.D,Vu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var U=a;if(p.qa=dp(p,p.J?p.ia:null,p.W),U.K){Bf(p.h,U);var ue=U,Me=p.L;Me&&(ue.I=Me),ue.B&&(Au(ue),Mo(ue)),p.g=U}else ap(p);0<d.i.length&&Wo(d)}else re[0]!="stop"&&re[0]!="close"||vr(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?vr(d,7):xu(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Xi(4)}catch{}}var Cw=class{constructor(a,c){this.g=a,this.map=c}};function Ff(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jf(a){return a.h?1:a.g?a.g.size:0}function ku(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Cu(a,c){a.g?a.g.add(c):a.h=c}function Bf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ff.prototype.cancel=function(){if(this.i=zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function Pw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function xw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function $f(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=xw(a),p=Pw(a),P=p.length,N=0;N<P;N++)c.call(void 0,p[N],d&&d[N],a)}var Hf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),P=null;if(0<=p){var N=a[d].substring(0,p);P=a[d].substring(p+1)}else N=a[d];c(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function _r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof _r){this.h=a.h,Fo(this,a.j),this.o=a.o,this.g=a.g,Uo(this,a.s),this.l=a.l;var c=a.i,d=new rs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Wf(this,d),this.m=a.m}else a&&(c=String(a).match(Hf))?(this.h=!1,Fo(this,c[1]||"",!0),this.o=ts(c[2]||""),this.g=ts(c[3]||"",!0),Uo(this,c[4]),this.l=ts(c[5]||"",!0),Wf(this,c[6]||"",!0),this.m=ts(c[7]||"")):(this.h=!1,this.i=new rs(null,this.h))}_r.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ns(c,qf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ns(c,qf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ns(d,d.charAt(0)=="/"?Ow:Vw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ns(d,Lw)),a.join("")};function on(a){return new _r(a)}function Fo(a,c,d){a.j=d?ts(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Uo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Wf(a,c,d){c instanceof rs?(a.i=c,Mw(a.i,a.h)):(d||(c=ns(c,bw)),a.i=new rs(c,a.h))}function he(a,c,d){a.i.set(c,d)}function jo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ts(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ns(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Dw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Dw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var qf=/[#\/\?@]/g,Vw=/[#\?:]/g,Ow=/[#\?]/g,bw=/[#\?@]/g,Lw=/#/g;function rs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&Nw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=rs.prototype,t.add=function(a,c){Nn(this),this.i=null,a=qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Kf(a,c){Nn(a),c=qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Gf(a,c){return Nn(a),c=qr(a,c),a.g.has(c)}t.forEach=function(a,c){Nn(this),this.g.forEach(function(d,p){d.forEach(function(P){a.call(c,P,p,this)},this)},this)},t.na=function(){Nn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const P=a[p];for(let N=0;N<P.length;N++)d.push(c[p])}return d},t.V=function(a){Nn(this);let c=[];if(typeof a=="string")Gf(this,a)&&(c=c.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Nn(this),this.i=null,a=qr(this,a),Gf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Qf(a,c,d){Kf(a,c),0<d.length&&(a.i=null,a.g.set(qr(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var P=N;U[p]!==""&&(P+="="+encodeURIComponent(String(U[p]))),a.push(P)}}return this.i=a.join("&")};function qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Mw(a,c){c&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(Kf(this,p),Qf(this,P,d))},a)),a.j=c}function Fw(a,c){const d=new Zi;if(l.Image){const p=new Image;p.onload=R(Dn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=R(Dn,d,"TestLoadImage: error",!1,c,p),p.onabort=R(Dn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(Dn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Uw(a,c){const d=new Zi,p=new AbortController,P=setTimeout(()=>{p.abort(),Dn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(P),N.ok?Dn(d,"TestPingServer: ok",!0,c):Dn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Dn(d,"TestPingServer: error",!1,c)})}function Dn(a,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function jw(){this.g=new Tw}function Bw(a,c,d){const p=d||"";try{$f(a,function(P,N){let U=P;h(P)&&(U=_u(P)),c.push(p+N+"="+encodeURIComponent(U))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function Bo(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Bo,vu),Bo.prototype.g=function(){return new zo(this.l,this.j)},Bo.prototype.i=function(a){return function(){return a}}({});function zo(a,c){We.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(zo,We),t=zo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ss(this)),this.g&&(this.readyState=3,ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?is(this):ss(this),this.readyState==3&&Yf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,is(this))},t.Qa=function(a){this.g&&(this.response=a,is(this))},t.ga=function(){this.g&&is(this)};function is(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ss(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xf(a){let c="";return F(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Pu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Xf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function Ee(a){We.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ee,We);var zw=/^https?$/i,$w=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tu.g(),this.v=this.o?Rf(this.o):Rf(Tu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Jf(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call($w,c,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of d)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tp(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Jf(this,N)}};function Jf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Zf(a),$o(a)}function Zf(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),$o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$o(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ep(this):this.bb())},t.bb=function(){ep(this)};function ep(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)Tf(a.Ea,0,a);else if(rt(a,"readystatechange"),an(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=U===0){var P=String(a.D).match(Hf)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!zw.test(P?P.toLowerCase():"")}d=p}if(d)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var N=2<an(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Zf(a)}}finally{$o(a)}}}}function $o(a,c){if(a.g){tp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||rt(a,"ready");try{d.onreadystatechange=p}catch{}}}function tp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ew(c)}};function np(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Hw(a){const c={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=A(a[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function os(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function rp(a){this.Aa=0,this.i=[],this.j=new Zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=os("baseRetryDelayMs",5e3,a),this.cb=os("retryDelaySeedMs",1e4,a),this.Wa=os("forwardChannelMaxRetries",2,a),this.wa=os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ff(a&&a.concurrentRequestLimit),this.Da=new jw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){it(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=dp(this,null,this.W),Wo(this)};function xu(a){if(ip(a),a.G==3){var c=a.U++,d=on(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),as(a,d),c=new xn(a,a.j,c),c.L=2,c.v=jo(on(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=fp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Mo(c)}hp(a)}function Ho(a){a.g&&(Du(a),a.g.cancel(),a.g=null)}function ip(a){Ho(a),a.u&&(l.clearTimeout(a.u),a.u=null),qo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Wo(a){if(!Uf(a.h)&&!a.s){a.s=!0;var c=a.Ga;en||X(),B||(en(),B=!0),G.add(c,a),a.B=0}}function Ww(a,c){return jf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ji(y(a.Ga,a,c),cp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new xn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=g(N),_(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=op(this,P,c),d=on(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),as(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(Xf(N)))+"&"+c:this.m&&Pu(d,this.m,N)),Cu(this.h,P),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),P.T=!0,Su(P,d,null)):Su(P,d,c),this.G=2}}else this.G==3&&(a?sp(this,a):this.i.length==0||Uf(this.h)||sp(this))};function sp(a,c){var d;c?d=c.l:d=a.U++;const p=on(a.I);he(p,"SID",a.K),he(p,"RID",d),he(p,"AID",a.T),as(a,p),a.m&&a.o&&Pu(p,a.m,a.o),d=new xn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=op(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Cu(a.h,d),Su(d,p,c)}function as(a,c){a.H&&F(a.H,function(d,p){he(c,p,d)}),a.l&&$f({},function(d,p){he(c,p,d)})}function op(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const U=["count="+d];N==-1?0<d?(N=P[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let ue=!0;for(let Me=0;Me<d;Me++){let re=P[Me].g;const qe=P[Me].map;if(re-=N,0>re)N=Math.max(0,P[Me].g-100),ue=!1;else try{Bw(qe,U,"req"+re+"_")}catch{p&&p(qe)}}if(ue){p=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function ap(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;en||X(),B||(en(),B=!0),G.add(c,a),a.v=0}}function Nu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ji(y(a.Fa,a),cp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,lp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ji(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ho(this),lp(this))};function Du(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function lp(a){a.g=new xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=on(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),as(a,c),a.m&&a.o&&Pu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=jo(on(c)),d.m=null,d.P=!0,bf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ho(this),Nu(this),it(19))};function qo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function up(a,c){var d=null;if(a.g==c){qo(a),Du(a),a.g=null;var p=2}else if(ku(a.h,c))d=c.D,Bf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;p=Oo(),rt(p,new Nf(p,d)),Wo(a)}else ap(a);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&Ww(a,c)||p==2&&Nu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:vr(a,5);break;case 4:vr(a,10);break;case 3:vr(a,6);break;default:vr(a,2)}}}function cp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function vr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const P=!p;p=new _r(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fo(p,"https"),jo(p),P?Fw(p.toString(),d):Uw(p.toString(),d)}else it(2);a.G=0,a.l&&a.l.sa(c),hp(a),ip(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function hp(a){if(a.G=0,a.ka=[],a.l){const c=zf(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function dp(a,c,d){var p=d instanceof _r?on(d):new _r(d);if(p.g!="")c&&(p.g=c+"."+p.g),Uo(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var N=new _r(null);p&&Fo(N,p),c&&(N.g=c),P&&Uo(N,P),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&he(p,d,c),he(p,"VER",a.la),as(a,p),p}function fp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ee(new Bo({eb:d})):new Ee(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pp(){}t=pp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ko(){}Ko.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){We.call(this),this.g=new rp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Kr(this)}x(gt,We),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){xu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=_u(a),a=d);c.i.push(new Cw(c.Ya++,a)),c.G==3&&Wo(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,xu(this.g),delete this.g,gt.aa.N.call(this)};function mp(a){wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(mp,wu);function gp(){Eu.call(this),this.status=1}x(gp,Eu);function Kr(a){this.g=a}x(Kr,pp),Kr.prototype.ua=function(){rt(this.g,"a")},Kr.prototype.ta=function(a){rt(this.g,new mp(a))},Kr.prototype.sa=function(a){rt(this.g,new gp)},Kr.prototype.ra=function(){rt(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Yv=function(){return new Ko},Qv=function(){return Oo()},Gv=gr,_h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,Oa=bo,Df.COMPLETE="complete",Kv=Df,kf.EventType=Yi,Yi.OPEN="a",Yi.CLOSE="b",Yi.ERROR="c",Yi.MESSAGE="d",We.prototype.listen=We.prototype.K,Is=kf,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,qv=Ee}).apply(typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{});const ng="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Cd("@firebase/firestore");function gs(){return Mr.logLevel}function $(t,...e){if(Mr.logLevel<=ee.DEBUG){const n=e.map(Ud);Mr.debug(`Firestore (${qi}): ${t}`,...n)}}function Sn(t,...e){if(Mr.logLevel<=ee.ERROR){const n=e.map(Ud);Mr.error(`Firestore (${qi}): ${t}`,...n)}}function Di(t,...e){if(Mr.logLevel<=ee.WARN){const n=e.map(Ud);Mr.warn(`Firestore (${qi}): ${t}`,...n)}}function Ud(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${qi}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function ae(t,e){t||K()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class gk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yk{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ir,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new Xv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Xe(e)}}class _k{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _k(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ek{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new wk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Tk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Vi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new De(0,0))}static max(){return new Q(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends lo{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const Ik=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends lo{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return Ik.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(me.fromString(e))}static fromName(e){return new q(me.fromString(e).popFirst(5))}static empty(){return new q(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new me(e.slice()))}}function Sk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new lr(i,q.empty(),e)}function Ak(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(Q.min(),q.empty(),-1)}static max(){return new lr(Q.max(),q.empty(),-1)}}function Rk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ck{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==kk)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Pk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jd.oe=-1;function Ql(t){return t==null}function _l(t){return t===0&&1/t==-1/0}function xk(t){return typeof t=="number"&&Number.isInteger(t)&&!_l(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ig(this.data.getIterator())}getIteratorFrom(e){return new ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new vt([])}unionWith(e){let n=new ze(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new e0("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Nk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(ae(!!t),typeof t=="string"){let e=0;const n=Nk.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zd(t){const e=t.mapValue.fields.__previous_value__;return Bd(e)?zd(e):e}function uo(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class co{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new co("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof co&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma={mapValue:{}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bd(t)?4:Ok(t)?9007199254740991:Vk(t)?10:11:K()}function Jt(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uo(t).isEqual(uo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ur(i.timestampValue),l=ur(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?_l(o)===_l(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Vi(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(rg(o)!==rg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Jt(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function ho(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Oi(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return sg(t.timestampValue,e.timestampValue);case 4:return sg(uo(t),uo(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Fr(s),u=Fr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Se(s.latitude),Se(o.latitude));return l!==0?l:ie(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return og(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},y=o.fields||{},R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=y.value)===null||u===void 0?void 0:u.arrayValue,D=ie(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:og(R,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ma.mapValue&&o===ma.mapValue)return 0;if(s===ma.mapValue)return 1;if(o===ma.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=ie(u[m],f[m]);if(y!==0)return y;const R=Oi(l[u[m]],h[f[m]]);if(R!==0)return R}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K()}}function sg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=ur(t),r=ur(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function og(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Oi(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function bi(t){return vh(t)}function vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vh(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function wh(t){return!!t&&"integerValue"in t}function $d(t){return!!t&&"arrayValue"in t}function ag(t){return!!t&&"nullValue"in t}function lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ba(t){return!!t&&"mapValue"in t}function Vk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ok(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Fs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht(Fs(this.value))}}function t0(t){const e=[];return $r(t.fields,(n,r)=>{const i=new je([n]);if(ba(r)){const s=t0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Q.min(),Q.min(),Q.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Q.min(),Q.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Q.min(),Q.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.position=e,this.inclusive=n}}function ug(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Oi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n="asc"){this.field=e,this.dir=n}}function bk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{}class xe extends n0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Mk(e,n,r):n==="array-contains"?new jk(e,r):n==="in"?new Bk(e,r):n==="not-in"?new zk(e,r):n==="array-contains-any"?new $k(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Fk(e,r):new Uk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Oi(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends n0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Zt(e,n)}matches(e){return r0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r0(t){return t.op==="and"}function i0(t){return Lk(t)&&r0(t)}function Lk(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function Eh(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+bi(t.value);if(i0(t))return t.filters.map(e=>Eh(e)).join(",");{const e=t.filters.map(n=>Eh(n)).join(",");return`${t.op}(${e})`}}function s0(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&Jt(r.value,i.value)}(t,e):t instanceof Zt?function(r,i){return i instanceof Zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&s0(o,i.filters[l]),!0):!1}(t,e):void K()}function o0(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${bi(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(o0).join(" ,")+"}"}(t):"Filter"}class Mk extends xe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fk extends xe{constructor(e,n){super(e,"in",n),this.keys=a0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Uk extends xe{constructor(e,n){super(e,"not-in",n),this.keys=a0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class jk extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $d(n)&&ho(n.arrayValue,this.value)}}class Bk extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class zk extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class $k extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$d(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function hg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Hk(t,e,n,r,i,s,o)}function Hd(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Eh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bi(r)).join(",")),e.ue=n}return e.ue}function Wd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!s0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cg(t.startAt,e.startAt)&&cg(t.endAt,e.endAt)}function Th(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wk(t,e,n,r,i,s,o,l){return new Yl(t,e,n,r,i,s,o,l)}function Xl(t){return new Yl(t)}function dg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qk(t){return t.collectionGroup!==null}function Us(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ze(je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new wl(s,r))}),n.has(je.keyField().canonicalString())||e.ce.push(new wl(je.keyField(),r))}return e.ce}function Yt(t){const e=Y(t);return e.le||(e.le=Kk(e,Us(t))),e.le}function Kk(t,e){if(t.limitType==="F")return hg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wl(i.field,s)});const n=t.endAt?new vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vl(t.startAt.position,t.startAt.inclusive):null;return hg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ih(t,e,n){return new Yl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Jl(t,e){return Wd(Yt(t),Yt(e))&&t.limitType===e.limitType}function l0(t){return`${Hd(Yt(t))}|lt:${t.limitType}`}function Yr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>o0(i)).join(", ")}]`),Ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>bi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>bi(i)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function Zl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Us(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=ug(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Us(r),i)||r.endAt&&!function(o,l,u){const h=ug(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Us(r),i))}(t,e)}function Gk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u0(t){return(e,n)=>{let r=!1;for(const i of Us(t)){const s=Qk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Qk(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Oi(u,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Zv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new we(q.comparator);function An(){return Yk}const c0=new we(q.comparator);function Ss(...t){let e=c0;for(const n of t)e=e.insert(n.key,n);return e}function h0(t){let e=c0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rr(){return js()}function d0(){return js()}function js(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const Xk=new we(q.comparator),Jk=new ze(q.comparator);function Z(...t){let e=Jk;for(const n of t)e=e.add(n);return e}const Zk=new ze(ie);function eC(){return Zk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(e)?"-0":e}}function f0(t){return{integerValue:""+t}}function tC(t,e){return xk(e)?f0(e):qd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this._=void 0}}function nC(t,e,n){return t instanceof El?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Bd(s)&&(s=zd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof fo?m0(t,e):t instanceof po?g0(t,e):function(i,s){const o=p0(i,s),l=fg(o)+fg(i.Pe);return wh(o)&&wh(i.Pe)?f0(l):qd(i.serializer,l)}(t,e)}function rC(t,e,n){return t instanceof fo?m0(t,e):t instanceof po?g0(t,e):n}function p0(t,e){return t instanceof Tl?function(r){return wh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class El extends eu{}class fo extends eu{constructor(e){super(),this.elements=e}}function m0(t,e){const n=y0(e);for(const r of t.elements)n.some(i=>Jt(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends eu{constructor(e){super(),this.elements=e}}function g0(t,e){let n=y0(e);for(const r of t.elements)n=n.filter(i=>!Jt(i,r));return{arrayValue:{values:n}}}class Tl extends eu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function fg(t){return Se(t.integerValue||t.doubleValue)}function y0(t){return $d(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof fo&&i instanceof fo||r instanceof po&&i instanceof po?Vi(r.elements,i.elements,Jt):r instanceof Tl&&i instanceof Tl?Jt(r.Pe,i.Pe):r instanceof El&&i instanceof El}(t.transform,e.transform)}class sC{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tu{}function _0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new w0(t.key,Ut.none()):new ko(t.key,t.data,Ut.none());{const n=t.data,r=ht.empty();let i=new ze(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(t.key,r,new vt(i.toArray()),Ut.none())}}function oC(t,e,n){t instanceof ko?function(i,s,o){const l=i.value.clone(),u=mg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(i,s,o){if(!La(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=mg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(v0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof ko?function(s,o,l,u){if(!La(s.precondition,o))return l;const h=s.value.clone(),f=gg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(s,o,l,u){if(!La(s.precondition,o))return l;const h=gg(s.fieldTransforms,u,o),f=o.data;return f.setAll(v0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return La(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function aC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=p0(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function pg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Vi(r,i,(s,o)=>iC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends tu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends tu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function v0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mg(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,rC(o,l,n[i]))}return r}function gg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nC(s,o,e))}return r}class w0 extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lC extends tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=_0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Vi(this.mutations,e.mutations,(n,r)=>pg(n,r))&&Vi(this.baseMutations,e.baseMutations,(n,r)=>pg(n,r))}}class Kd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return Xk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,te;function dC(t){switch(t){default:return K();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function E0(t){if(t===void 0)return Sn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Re.OK:return b.OK;case Re.CANCELLED:return b.CANCELLED;case Re.UNKNOWN:return b.UNKNOWN;case Re.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Re.INTERNAL:return b.INTERNAL;case Re.UNAVAILABLE:return b.UNAVAILABLE;case Re.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Re.NOT_FOUND:return b.NOT_FOUND;case Re.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Re.ABORTED:return b.ABORTED;case Re.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Re.DATA_LOSS:return b.DATA_LOSS;default:return K()}}(te=Re||(Re={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Pr([4294967295,4294967295],0);function yg(t){const e=fC().encode(t),n=new Wv;return n.update(e),new Uint8Array(n.digest())}function _g(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pr([n,r],0),new Pr([i,s],0)]}class Gd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new As(`Invalid padding: ${n}`);if(r<0)throw new As(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new As(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new As(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Pr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Pr.fromNumber(r)));return i.compare(pC)===1&&(i=new Pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=yg(e),[r,i]=_g(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=yg(e),[r,i]=_g(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class As extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nu(Q.min(),i,new we(ie),An(),Z())}}class Co{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Co(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class T0{constructor(e,n){this.targetId=e,this.me=n}}class I0{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vg{constructor(){this.fe=0,this.ge=Eg(),this.pe=He.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Co(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Eg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mC{constructor(e){this.Le=e,this.Be=new Map,this.ke=An(),this.qe=wg(),this.Qe=new we(ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Th(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Ze.newNoDocument(o,Q.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof e0)return Di("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Gd(o,i,s)}catch(u){return Di(u instanceof As?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Th(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new nu(e,n,this.Qe,this.ke,r);return this.ke=An(),this.qe=wg(),this.Qe=new we(ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new vg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wg(){return new we(q.comparator)}function Eg(){return new we(q.comparator)}const gC={asc:"ASCENDING",desc:"DESCENDING"},yC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_C={and:"AND",or:"OR"};class vC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sh(t,e){return t.useProto3Json||Ql(e)?e:{value:e}}function Il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wC(t,e){return Il(t,e.toTimestamp())}function Xt(t){return ae(!!t),Q.fromTimestamp(function(n){const r=ur(n);return new De(r.seconds,r.nanos)}(t))}function Qd(t,e){return Ah(t,e).canonicalString()}function Ah(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function A0(t){const e=me.fromString(t);return ae(x0(e)),e}function Rh(t,e){return Qd(t.databaseId,e.path)}function fc(t,e){const n=A0(e);if(n.get(1)!==t.databaseId.projectId)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(k0(n))}function R0(t,e){return Qd(t.databaseId,e)}function EC(t){const e=A0(t);return e.length===4?me.emptyPath():k0(e)}function kh(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function k0(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tg(t,e,n){return{name:Rh(t,e),fields:n.value.mapValue.fields}}function TC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),He.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),He.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:E0(h.code);return new H(f,h.message||"")}(o);n=new I0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fc(t,r.document.name),s=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):Q.min(),l=new ht({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ma(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fc(t,r.document),s=r.readTime?Xt(r.readTime):Q.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ma([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fc(t,r.document),s=r.removedTargetIds||[];n=new Ma([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hC(i,s),l=r.targetId;n=new T0(l,o)}}return n}function IC(t,e){let n;if(e instanceof ko)n={update:Tg(t,e.key,e.value)};else if(e instanceof w0)n={delete:Rh(t,e.key)};else if(e instanceof mr)n={update:Tg(t,e.key,e.data),updateMask:DC(e.fieldMask)};else{if(!(e instanceof lC))return K();n={verify:Rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof El)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function SC(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Xt(i.updateTime):Xt(s);return o.isEqual(Q.min())&&(o=Xt(s)),new sC(o,i.transformResults||[])}(n,e))):[]}function AC(t,e){return{documents:[R0(t,e.path)]}}function RC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=R0(t,i);const s=function(h){if(h.length!==0)return P0(Zt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Xr(y.field),direction:PC(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function kC(t){let e=EC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=C0(m);return y instanceof Zt&&i0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(x){return new wl(Jr(x.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,Ql(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,R=m.values||[];return new vl(R,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,R=m.values||[];return new vl(R,y)}(n.endAt)),Wk(e,i,o,s,l,"F",u,h)}function CC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jr(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jr(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Jr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>C0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function PC(t){return gC[t]}function xC(t){return yC[t]}function NC(t){return _C[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return je.fromServerFormat(t.fieldPath)}function P0(t){return t instanceof xe?function(n){if(n.op==="=="){if(lg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(ag(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lg(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(ag(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:xC(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(i=>P0(i));return r.length===1?r[0]:{compositeFilter:{op:NC(n.op),filters:r}}}(t):K()}function DC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.ct=e}}function OC(t){const e=kC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ih(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.un=new LC}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(lr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class LC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Li(0)}static kn(){return new Li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,vt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ss();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=An();const o=js(),l=function(){return js()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof mr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Bs(f.mutation,h,f.mutation.getFieldMask(),De.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new FC(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let i=new we((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=d0();f.forEach(y=>{if(!s.has(y)){const R=_0(n.get(y),r.get(y));R!==null&&m.set(y,R),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Rr());let l=-1,u=s;return o.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:h0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Ss();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ss();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(m,y){return new Yl(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Ss();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Bs(f.mutation,h,vt.empty(),De.now()),Zl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xt(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:OC(i.bundledQuery),readTime:Xt(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.overlays=new we(q.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Rr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Rr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Rr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cC(n,r));let s=this.Ir.get(n);s===void 0&&(s=Z(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.Tr=new ze(Ve.Er),this.dr=new ze(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new me([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new me([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ze(Ve.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ie);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new q(s),0);let l=new ze(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.Mr=e,this.docs=function(){return new we(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Rk(Ak(f),r)<=0||(i.has(f.key)||Zl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WC(this)}getSize(e){return L.resolve(this.size)}}class WC extends MC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.persistence=e,this.Nr=new Ki(n=>Hd(n),Wd),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Yd,this.targetCount=0,this.kr=Li.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new jd(0),this.Kr=!1,this.Kr=!0,this.$r=new zC,this.referenceDelegate=e(this),this.Ur=new qC(this),this.indexManager=new bC,this.remoteDocumentCache=function(i){return new HC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VC(n),this.Gr=new jC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $C(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new GC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class GC extends Ck{constructor(e){super(),this.currentSequenceNumber=e}}class Xd{constructor(e){this.persistence=e,this.Jr=new Yd,this.Yr=null}static Zr(e){return new Xd(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LI()?8:Pk(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QC;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(gs()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Yr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(gs()<=ee.DEBUG&&$("QueryEngine","Query:",Yr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(gs()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Yr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):L.resolve())}Yi(e,n){if(dg(n))return L.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ih(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ih(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return dg(n)||i.isEqual(Q.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(gs()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yr(n)),this.rs(e,o,n,Sk(i,-1)).next(l=>l))})}ts(e,n){let r=new ze(u0(e));return n.forEach((i,s)=>{Zl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return gs()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Yr(n)),this.Ji.getDocumentsMatchingQuery(e,n,lr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(ie),this._s=new Ki(s=>Hd(s),Wd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function JC(t,e,n,r){return new XC(t,e,n,r)}async function N0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function ZC(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let R=L.resolve();return y.forEach(x=>{R=R.next(()=>f.getEntry(u,x)).next(D=>{const V=h.docVersions.get(x);ae(V!==null),D.version.compareTo(V)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function D0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function eP(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let R=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(He.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(m,R),function(D,V,I){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,R,f)&&l.push(n.Ur.updateTargetData(s,R))});let u=An(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(tP(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function tP(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function nP(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rP(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ch(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ro(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ig(t,e,n){const r=Y(t);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Y(u),y=m._s.get(f);return y!==void 0?L.resolve(m.os.get(y)):m.Ur.getTargetData(h,f)}(r,o,Yt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:Z())).next(l=>(iP(r,Gk(e),l),{documents:l,Ts:s})))}function iP(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Sg{constructor(){this.activeTargetIds=eC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sP{constructor(){this.so=new Sg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Sg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga=null;function pc(){return ga===null?ga=function(){return 268435456+Math.round(2147483648*Math.random())}():ga++,"0x"+ga.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class uP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=pc(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>($("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Di("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=aP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=pc();return new Promise((o,l)=>{const u=new qv;u.setWithCredentials(!0),u.listenOnce(Kv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Oa.NO_ERROR:const f=u.getResponseJson();$(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Oa.TIMEOUT:$(Ye,`RPC '${e}' ${s} timed out`),l(new H(b.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const m=u.getStatus();if($(Ye,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const x=function(V){const I=V.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(R.status);l(new H(x,R.message))}else l(new H(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(b.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$(Ye,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);$(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=pc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yv(),l=Qv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,R=!1;const x=new lP({Io:V=>{R?$(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(y||($(Ye,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),$(Ye,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},To:()=>m.close()}),D=(V,I,E)=>{V.listen(I,k=>{try{E(k)}catch(O){setTimeout(()=>{throw O},0)}})};return D(m,Is.EventType.OPEN,()=>{R||($(Ye,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),D(m,Is.EventType.CLOSE,()=>{R||(R=!0,$(Ye,`RPC '${e}' stream ${i} transport closed`),x.So())}),D(m,Is.EventType.ERROR,V=>{R||(R=!0,Di(Ye,`RPC '${e}' stream ${i} transport errored:`,V),x.So(new H(b.UNAVAILABLE,"The operation could not be completed")))}),D(m,Is.EventType.MESSAGE,V=>{var I;if(!R){const E=V.data[0];ae(!!E);const k=E,O=k.error||((I=k[0])===null||I===void 0?void 0:I.error);if(O){$(Ye,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let F=function(v){const _=Re[v];if(_!==void 0)return E0(_)}(j),w=O.message;F===void 0&&(F=b.INTERNAL,w="Unknown error status: "+j+" with message "+O.message),R=!0,x.So(new H(F,w)),m.close()}else $(Ye,`RPC '${e}' stream ${i} received:`,E),x.bo(E)}}),D(l,Gv.STAT_EVENT,V=>{V.stat===_h.PROXY?$(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===_h.NOPROXY&&$(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){return new vC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new V0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cP extends O0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=TC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Xt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=kh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Th(u)?{documents:AC(s,u)}:{query:RC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=S0(s,o.resumeToken);const h=Sh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Il(s,o.snapshotVersion.toTimestamp());const h=Sh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=CC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=kh(this.serializer),n.removeTarget=e,this.a_(n)}}class hP extends O0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=SC(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=kh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IC(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ah(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(b.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ah(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(b.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Sn(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Hr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await Po(h),h.q_.set("Unknown"),h.L_.delete(4),await iu(h)}(this))})}),this.q_=new fP(r,i)}}async function iu(t){if(Hr(t))for(const e of t.B_)await e(!0)}async function Po(t){for(const e of t.B_)await e(!1)}function b0(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),nf(n)?tf(n):Gi(n).r_()&&ef(n,e))}function Zd(t,e){const n=Y(t),r=Gi(n);n.N_.delete(e),r.r_()&&L0(n,e),n.N_.size===0&&(r.r_()?r.o_():Hr(n)&&n.q_.set("Unknown"))}function ef(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gi(t).A_(e)}function L0(t,e){t.Q_.xe(e),Gi(t).R_(e)}function tf(t){t.Q_=new mC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gi(t).start(),t.q_.v_()}function nf(t){return Hr(t)&&!Gi(t).n_()&&t.N_.size>0}function Hr(t){return Y(t).L_.size===0}function M0(t){t.Q_=void 0}async function mP(t){t.q_.set("Online")}async function gP(t){t.N_.forEach((e,n)=>{ef(t,e)})}async function yP(t,e){M0(t),nf(t)?(t.q_.M_(e),tf(t)):t.q_.set("Unknown")}async function _P(t,e,n){if(t.q_.set("Online"),e instanceof I0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sl(t,r)}else if(e instanceof Ma?t.Q_.Ke(e):e instanceof T0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await D0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(He.EMPTY_BYTE_STRING,f.snapshotVersion)),L0(s,u);const m=new Wn(f.target,u,h,f.sequenceNumber);ef(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Sl(t,r)}}async function Sl(t,e,n){if(!Ro(e))throw e;t.L_.add(1),await Po(t),t.q_.set("Offline"),n||(n=()=>D0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await iu(t)})}function F0(t,e){return e().catch(n=>Sl(t,n,e))}async function su(t){const e=Y(t),n=cr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;vP(e);)try{const i=await nP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,wP(e,i)}catch(i){await Sl(e,i)}U0(e)&&j0(e)}function vP(t){return Hr(t)&&t.O_.length<10}function wP(t,e){t.O_.push(e);const n=cr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function U0(t){return Hr(t)&&!cr(t).n_()&&t.O_.length>0}function j0(t){cr(t).start()}async function EP(t){cr(t).p_()}async function TP(t){const e=cr(t);for(const n of t.O_)e.m_(n.mutations)}async function IP(t,e,n){const r=t.O_.shift(),i=Kd.from(r,e,n);await F0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await su(t)}async function SP(t,e){e&&cr(t).V_&&await async function(r,i){if(function(o){return dC(o)&&o!==b.ABORTED}(i.code)){const s=r.O_.shift();cr(r).s_(),await F0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await su(r)}}(t,e),U0(t)&&j0(t)}async function Rg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Hr(n);n.L_.add(3),await Po(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await iu(n)}async function AP(t,e){const n=Y(t);e?(n.L_.delete(2),await iu(n)):e||(n.L_.add(2),await Po(n),n.q_.set("Unknown"))}function Gi(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new cP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:mP.bind(null,t),Ro:gP.bind(null,t),mo:yP.bind(null,t),d_:_P.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),nf(t)?tf(t):t.q_.set("Unknown")):(await t.K_.stop(),M0(t))})),t.K_}function cr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new hP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:EP.bind(null,t),mo:SP.bind(null,t),f_:TP.bind(null,t),g_:IP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await su(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new rf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sf(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),Ro(t))return new H(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ss(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.W_=new we(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Mi(e,n,Ti.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kP{constructor(){this.queries=Cg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Cg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(b.ABORTED,"Firestore shutting down"))}}function Cg(){return new Ki(t=>l0(t),Jl)}async function B0(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new RP,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=sf(o,`Initialization of query '${Yr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&of(n)}async function z0(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CP(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&of(n)}function PP(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function of(t){t.Y_.forEach(e=>{e.next()})}var Ph,Pg;(Pg=Ph||(Ph={})).ea="default",Pg.Cache="cache";class $0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ph.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.key=e}}class W0{constructor(e){this.key=e}}class xP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=u0(e),this.Ra=new Ti(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new kg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),R=Zl(this.query,m)?m:null,x=!!y&&this.mutatedKeys.has(y.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;y&&R?y.data.isEqual(R.data)?x!==D&&(r.track({type:3,doc:R}),V=!0):this.ga(y,R)||(r.track({type:2,doc:R}),V=!0,(u&&this.Aa(R,u)>0||h&&this.Aa(R,h)<0)&&(l=!0)):!y&&R?(r.track({type:0,doc:R}),V=!0):y&&!R&&(r.track({type:1,doc:y}),V=!0,(u||h)&&(l=!0)),V&&(R?(o=o.add(R),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(R,x){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return D(R)-D(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Mi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new kg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new W0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new H0(r))}),n}ba(e){this.Ta=e.Ts,this.da=Z();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Mi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class NP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DP{constructor(e){this.key=e,this.va=!1}}class VP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ki(l=>l0(l),Jl),this.Ma=new Map,this.xa=new Set,this.Oa=new we(q.comparator),this.Na=new Map,this.La=new Yd,this.Ba={},this.ka=new Map,this.qa=Li.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function OP(t,e,n=!0){const r=X0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await q0(r,e,n,!0),i}async function bP(t,e){const n=X0(t);await q0(n,e,!0,!1)}async function q0(t,e,n,r){const i=await rP(t.localStore,Yt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await LP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&b0(t.remoteStore,i),l}async function LP(t,e,n,r,i){t.Ka=(m,y,R)=>async function(D,V,I,E){let k=V.view.ma(I);k.ns&&(k=await Ig(D.localStore,V.query,!1).then(({documents:w})=>V.view.ma(w,k)));const O=E&&E.targetChanges.get(V.targetId),j=E&&E.targetMismatches.get(V.targetId)!=null,F=V.view.applyChanges(k,D.isPrimaryClient,O,j);return Ng(D,V.targetId,F.wa),F.snapshot}(t,m,y,R);const s=await Ig(t.localStore,e,!0),o=new xP(e,s.Ts),l=o.ma(s.documents),u=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Ng(t,n,h.wa);const f=new NP(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function MP(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Jl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ch(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zd(r.remoteStore,i.targetId),xh(r,i.targetId)}).catch(Ao)):(xh(r,i.targetId),await Ch(r.localStore,i.targetId,!0))}async function FP(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zd(n.remoteStore,r.targetId))}async function UP(t,e,n){const r=qP(t);try{const i=await function(o,l){const u=Y(o),h=De.now(),f=l.reduce((R,x)=>R.add(x.key),Z());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let x=An(),D=Z();return u.cs.getEntries(R,f).next(V=>{x=V,x.forEach((I,E)=>{E.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,x)).next(V=>{m=V;const I=[];for(const E of l){const k=aC(E,m.get(E.key).overlayedDocument);k!=null&&I.push(new mr(E.key,k,t0(k.value.mapValue),Ut.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,I,l)}).next(V=>{y=V;const I=V.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(R,V.batchId,I)})}).then(()=>({batchId:y.batchId,changes:h0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new we(ie)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await xo(r,i.changes),await su(r.remoteStore)}catch(i){const s=sf(i,"Failed to persist write");n.reject(s)}}async function K0(t,e){const n=Y(t);try{const r=await eP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await xo(n,r,e)}catch(r){await Ao(r)}}function xg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&of(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jP(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(q.comparator);o=o.insert(s,Ze.newNoDocument(s,Q.min()));const l=Z().add(s),u=new nu(Q.min(),new Map,new we(ie),o,l);await K0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),af(r)}else await Ch(r.localStore,e,!1).then(()=>xh(r,e,n)).catch(Ao)}async function BP(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await ZC(n.localStore,e);Q0(n,r,null),G0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xo(n,i)}catch(i){await Ao(i)}}async function zP(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ae(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Q0(r,e,n),G0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xo(r,i)}catch(i){await Ao(i)}}function G0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Q0(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function xh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Y0(t,r)})}function Y0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Zd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),af(t))}function Ng(t,e,n){for(const r of n)r instanceof H0?(t.La.addReference(r.key,e),$P(t,r)):r instanceof W0?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Y0(t,r.key)):K()}function $P(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),af(t))}function af(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(me.fromString(e)),r=t.qa.next();t.Na.set(r,new DP(n)),t.Oa=t.Oa.insert(n,r),b0(t.remoteStore,new Wn(Yt(Xl(n.path)),r,"TargetPurposeLimboResolution",jd.oe))}}async function xo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Jd.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,y=>L.forEach(y.$i,R=>f.persistence.referenceDelegate.addReference(m,y.targetId,R)).next(()=>L.forEach(y.Ui,R=>f.persistence.referenceDelegate.removeReference(m,y.targetId,R)))))}catch(m){if(!Ro(m))throw m;$("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const R=f.os.get(y),x=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(y,D)}}}(r.localStore,s))}async function HP(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await N0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(b.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xo(n,r.hs)}}function WP(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function X0(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=K0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jP.bind(null,e),e.Ca.d_=CP.bind(null,e.eventManager),e.Ca.$a=PP.bind(null,e.eventManager),e}function qP(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zP.bind(null,e),e}class Al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ru(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return JC(this.persistence,new YC,e.initialUser,this.serializer)}Ga(e){return new KC(Xd.Zr,this.serializer)}Wa(e){return new sP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Al.provider={build:()=>new Al};class Nh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HP.bind(null,this.syncEngine),await AP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kP}()}createDatastore(e){const n=ru(e.databaseInfo.databaseId),r=function(s){return new uP(s)}(e.databaseInfo);return function(s,o,l,u){return new dP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new pP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>xg(this.syncEngine,n,0),function(){return Ag.D()?new Ag:new oP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new VP(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Po(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nh.provider={build:()=>new Nh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=Jv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await N0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Dg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GP(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Rg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Rg(e.remoteStore,i)),t._onlineComponents=e}async function GP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Di("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new Al)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await gc(t,new Al);return t._offlineComponents}async function Z0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Dg(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Dg(t,new Nh))),t._onlineComponents}function QP(t){return Z0(t).then(e=>e.syncEngine)}async function Dh(t){const e=await Z0(t),n=e.eventManager;return n.onListen=OP.bind(null,e.syncEngine),n.onUnlisten=MP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=bP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FP.bind(null,e.syncEngine),n}function YP(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new J0({next:y=>{f.Za(),o.enqueueAndForget(()=>z0(s,m));const R=y.docs.has(l);!R&&y.fromCache?h.reject(new H(b.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&y.fromCache&&u&&u.source==="server"?h.reject(new H(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new $0(Xl(l.path),f,{includeMetadataChanges:!0,_a:!0});return B0(s,m)}(await Dh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(t,e,n){if(!n)throw new H(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XP(t,e,n,r){if(e===!0&&r===!0)throw new H(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Og(t){if(!q.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bg(t){if(q.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lf(t);throw new H(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ew((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ou{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mk;switch(r.type){case"firstParty":return new vk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vg.get(n);r&&($("ComponentProvider","Removing Datastore"),Vg.delete(n),r.terminate())}(this),Promise.resolve()}}function JP(t,e,n,r={}){var i;const s=(t=jt(t,ou))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=PI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new gk(new Xv(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new au(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class sr extends au{constructor(e,n,r){super(e,n,Xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new q(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function yn(t,e,...n){if(t=Le(t),tw("collection","path",e),t instanceof ou){const r=me.fromString(e,...n);return bg(r),new sr(t,null,r)}{if(!(t instanceof at||t instanceof sr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return bg(r),new sr(t.firestore,null,r)}}function Lt(t,e,...n){if(t=Le(t),arguments.length===1&&(e=Jv.newId()),tw("doc","path",e),t instanceof ou){const r=me.fromString(e,...n);return Og(r),new at(t,null,new q(r))}{if(!(t instanceof at||t instanceof sr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return Og(r),new at(t.firestore,t instanceof sr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new V0(this,"async_queue_retry"),this.Vu=()=>{const r=mc();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ro(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Sn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=rf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Fg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class jr extends ou{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Mg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mg(e),this._firestoreClient=void 0,await e}}}function ZP(t,e){const n=typeof t=="object"?t:uv(),r=typeof t=="string"?t:"(default)",i=xd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kI("firestore");s&&JP(i,...s)}return i}function uf(t){if(t._terminated)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||e1(t),t._firestoreClient}function e1(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Dk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ew(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new KP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fi(He.fromBase64String(e))}catch(n){throw new H(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fi(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=/^__.*__$/;class n1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}class nw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class ff{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ff(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(rw(this.Cu)&&t1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class r1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ru(e)}Qu(e,n,r,i=!1){return new ff({Cu:e,methodName:n,qu:r,path:je.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pf(t){const e=t._freezeSettings(),n=ru(t._databaseId);return new r1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iw(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);mf("Data must be an object, but it was:",o,r);const l=sw(r,o);let u,h;if(s.merge)u=new vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=Vh(e,m,n);if(!o.contains(y))throw new H(b.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);aw(f,y)||f.push(y)}u=new vt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new n1(new ht(l),u,h)}class uu extends cf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uu}}function i1(t,e,n,r){const i=t.Qu(1,e,n);mf("Data must be an object, but it was:",i,r);const s=[],o=ht.empty();$r(r,(u,h)=>{const f=gf(e,u,n);h=Le(h);const m=i.Nu(f);if(h instanceof uu)s.push(f);else{const y=cu(h,m);y!=null&&(s.push(f),o.set(f,y))}});const l=new vt(s);return new nw(o,l,i.fieldTransforms)}function s1(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Vh(e,r,n)],u=[i];if(s.length%2!=0)throw new H(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Vh(e,s[y])),u.push(s[y+1]);const h=[],f=ht.empty();for(let y=l.length-1;y>=0;--y)if(!aw(h,l[y])){const R=l[y];let x=u[y];x=Le(x);const D=o.Nu(R);if(x instanceof uu)h.push(R);else{const V=cu(x,D);V!=null&&(h.push(R),f.set(R,V))}}const m=new vt(h);return new nw(f,m,o.fieldTransforms)}function cu(t,e){if(ow(t=Le(t)))return mf("Unsupported field value:",e,t),sw(t,e);if(t instanceof cf)return function(r,i){if(!rw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=cu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:Il(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Il(i.serializer,s)}}if(r instanceof hf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fi)return{bytesValue:S0(i.serializer,r._byteString)};if(r instanceof at){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof df)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return qd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${lf(r)}`)}(t,e)}function sw(t,e){const n={};return Zv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(t,(r,i)=>{const s=cu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ow(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof hf||t instanceof Fi||t instanceof at||t instanceof cf||t instanceof df)}function mf(t,e,n){if(!ow(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=lf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Vh(t,e,n){if((e=Le(e))instanceof lu)return e._internalPath;if(typeof e=="string")return gf(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const o1=new RegExp("[~\\*/\\[\\]]");function gf(t,e,n){if(e.search(o1)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new lu(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(b.INVALID_ARGUMENT,l+t+u)}function aw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new a1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(uw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class a1 extends lw{data(){return super.data()}}function uw(t,e){return typeof e=="string"?gf(t,e):e instanceof lu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class u1{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $r(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new df(s)}convertGeoPoint(e){return new hf(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uo(e));default:return null}}convertTimestamp(e){const n=ur(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ae(x0(r));const i=new co(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hw extends lw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(uw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fa extends hw{data(e={}){return super.data(e)}}class c1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Rs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fa(this._firestore,this._userDataWriter,r.key,r,new Rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Fa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Rs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Fa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Rs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:h1(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function h1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){t=jt(t,at);const e=jt(t.firestore,jr);return YP(uf(e),t._key).then(n=>fw(e,t,n))}class dw extends u1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function Ug(t,e,n){t=jt(t,at);const r=jt(t.firestore,jr),i=cw(t.converter,e);return yf(r,[iw(pf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ut.none())])}function di(t,e,n,...r){t=jt(t,at);const i=jt(t.firestore,jr),s=pf(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof lu?s1(s,"updateDoc",t._key,e,n,r):i1(s,"updateDoc",t._key,e),yf(i,[o.toMutation(t._key,Ut.exists(!0))])}function Ui(t,e){const n=jt(t.firestore,jr),r=Lt(t),i=cw(t.converter,e);return yf(n,[iw(pf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function ya(t,...e){var n,r,i;t=Le(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Fg(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Fg(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof at)h=jt(t.firestore,jr),f=Xl(t._key.path),u={next:m=>{e[o]&&e[o](fw(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=jt(t,au);h=jt(m.firestore,jr),f=m._query;const y=new dw(h);u={next:R=>{e[o]&&e[o](new c1(h,y,m,R))},error:e[o+1],complete:e[o+2]},l1(t._query)}return function(y,R,x,D){const V=new J0(D),I=new $0(R,V,x);return y.asyncQueue.enqueueAndForget(async()=>B0(await Dh(y),I)),()=>{V.Za(),y.asyncQueue.enqueueAndForget(async()=>z0(await Dh(y),I))}}(uf(h),f,l,u)}function yf(t,e){return function(r,i){const s=new ir;return r.asyncQueue.enqueueAndForget(async()=>UP(await QP(r),i,s)),s.promise}(uf(t),e)}function fw(t,e,n){const r=n.docs.get(e._key),i=new dw(t);return new hw(t,i,e._key,r,new Rs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){qi=i})($i),xi(new br("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new jr(new yk(r.getProvider("auth-internal")),new Ek(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new co(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nr(ng,"4.7.3",e),nr(ng,"4.7.3","esm2017")})();var f1="firebase",p1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(f1,p1,"app");const m1={apiKey:"AIzaSyDFA2PLwpHqgX9GwHCbK8c-7tymJGygf_c",authDomain:"steam-quest-hub.firebaseapp.com",projectId:"steam-quest-hub",storageBucket:"steam-quest-hub.firebasestorage.app",messagingSenderId:"357931401290",appId:"1:357931401290:web:d2647c315ef4d5c0c4e6b3"},pw=lv(m1),ks=fk(pw),Pe=ZP(pw),g1=({onShowLegal:t,onToast:e})=>{const[n,r]=se.useState(""),[i,s]=se.useState("child"),[o,l]=se.useState(""),[u,h]=se.useState(!1),[f,m]=se.useState(!1),y=async R=>{if(R.preventDefault(),!u){e("Необходимо принять условия и политику!","warning");return}try{window.localStorage.setItem("emailForSignIn",n),window.localStorage.setItem("pendingRole",i),o?window.localStorage.setItem("pendingFamilyCode",o):window.localStorage.removeItem("pendingFamilyCode"),await YA(ks,n,{url:window.location.href,handleCodeInApp:!0}),m(!0),e("Ссылка для входа отправлена на почту!","success")}catch(x){e("Ошибка: "+x.message,"error")}};return S.jsx("div",{className:"max-w-md mx-auto p-4 min-h-screen flex flex-col justify-center",children:S.jsxs("div",{className:"bg-[#1a2232] p-6 rounded-xl hud-border space-y-6",children:[S.jsxs("div",{className:"text-center space-y-2",children:[S.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 mx-auto flex items-center justify-center text-3xl font-bold text-white glow-accent",children:S.jsx("i",{className:"fa-solid fa-gamepad"})}),S.jsx("h1",{className:"text-2xl font-black text-white uppercase tracking-wider",children:"Quest Play HUB"}),S.jsx("p",{className:"text-xs text-gray-400",children:"Вход и регистрация по ссылки на Email"})]}),f?S.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg border border-indigo-500/40 text-center space-y-2",children:[S.jsx("i",{className:"fa-solid fa-envelope-circle-check text-3xl text-indigo-400 mb-1"}),S.jsx("h3",{className:"text-sm font-bold text-white",children:"Ссылка отправлена!"}),S.jsxs("p",{className:"text-xs text-gray-400",children:["Перейдите по ссылке в письме на ",S.jsx("strong",{className:"text-white",children:n})," для входа."]})]}):S.jsxs("form",{onSubmit:y,className:"space-y-4",children:[S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Email"}),S.jsx("input",{type:"email",required:!0,value:n,onChange:R=>r(R.target.value),placeholder:"name@example.com",className:"w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-xs text-white focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Кто вы?"}),S.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[S.jsxs("button",{type:"button",onClick:()=>s("child"),className:`py-2 rounded text-xs font-bold transition border ${i==="child"?"bg-indigo-600 border-indigo-400 text-white":"bg-slate-900 border-slate-700 text-gray-400"}`,children:[S.jsx("i",{className:"fa-solid fa-child mr-1"})," Ребенок"]}),S.jsxs("button",{type:"button",onClick:()=>s("adult"),className:`py-2 rounded text-xs font-bold transition border ${i==="adult"?"bg-amber-600 border-amber-400 text-white":"bg-slate-900 border-slate-700 text-gray-400"}`,children:[S.jsx("i",{className:"fa-solid fa-user-shield mr-1"})," Родитель"]})]})]}),i==="child"&&S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Код Семейной Комнаты (от родителя)"}),S.jsx("input",{type:"text",required:!0,placeholder:"Например: HUB-123456",value:o,onChange:R=>l(R.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-xs text-white uppercase font-mono focus:border-indigo-500 outline-none"})]}),S.jsxs("div",{className:"flex items-start gap-2 pt-1",children:[S.jsx("input",{type:"checkbox",id:"terms",checked:u,onChange:R=>h(R.target.checked),className:"mt-0.5 rounded border-slate-700 bg-slate-900 text-indigo-500"}),S.jsxs("label",{htmlFor:"terms",className:"text-[11px] text-gray-400 leading-tight",children:["Согласен с ",S.jsx("button",{type:"button",onClick:()=>t("terms"),className:"text-indigo-400 underline",children:"Условиями"})," и ",S.jsx("button",{type:"button",onClick:()=>t("privacy"),className:"text-indigo-400 underline",children:"Политикой конфиденциальности"}),"."]})]}),S.jsxs("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded text-xs uppercase tracking-wider transition",children:["Получить ссылку для входа ",S.jsx("i",{className:"fa-solid fa-arrow-right ml-1"})]})]})]})})},y1=({userProfile:t,familyData:e,onSignOut:n})=>S.jsxs("header",{className:"bg-[#1a2232] p-4 rounded-xl hud-border mb-6 flex flex-col md:flex-row justify-between items-center gap-4",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center text-white text-xl font-bold glow-accent",children:S.jsx("i",{className:"fa-solid fa-gamepad"})}),S.jsxs("div",{children:[S.jsxs("h1",{className:"text-lg font-black text-white tracking-wider uppercase flex items-center gap-2",children:["HUB СЕМЬИ: ",S.jsx("span",{className:"text-indigo-400",children:t.familyId})]}),S.jsxs("p",{className:"text-[11px] text-gray-400",children:[t.email," (",t.role==="adult"?"Родитель":"Участник",")"]})]})]}),S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsxs("div",{className:"flex items-center gap-3 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-xs",children:[S.jsxs("span",{className:"text-amber-400 font-bold flex items-center gap-1",children:[S.jsx("i",{className:"fa-solid fa-coins"})," +",e.bonusBank,"ч"]}),S.jsx("span",{className:"text-gray-500",children:"|"}),S.jsxs("span",{className:"text-indigo-400 font-bold",children:["Lvl ",e.level]}),S.jsx("span",{className:"text-gray-500",children:"|"}),S.jsxs("span",{className:"text-red-400 font-bold flex items-center gap-1",children:[S.jsx("i",{className:"fa-solid fa-fire"})," ",e.streak," дн"]})]}),S.jsxs("button",{onClick:n,className:"bg-slate-800 hover:bg-slate-700 text-xs text-gray-300 px-3 py-2 rounded-lg font-bold border border-slate-700 transition flex items-center gap-2",children:[S.jsx("i",{className:"fa-solid fa-right-from-bracket"})," Выйти"]})]})]}),_1=({familyId:t,familyData:e,quests:n,requests:r,shopItems:i,onOpenQuestModal:s,onOpenShopModal:o,onToast:l})=>{const[u,h]=se.useState(1),[f,m]=se.useState(""),y=r.filter(V=>V.status==="pending"),R=async V=>{const I=e.bonusBank+V.bonus,E=V.bonus*50;let k=e.xp+E,O=e.level;k>=O*300&&(O+=1),await di(Lt(Pe,"families",t,"requests",V.id),{status:"approved"}),await di(Lt(Pe,"families",t),{bonusBank:I,xp:k,level:O}),await Ui(yn(Pe,"families",t,"history"),{text:`Одобрен квест "${V.questTitle}". Начислено +${V.bonus}ч и +${E} XP!`,date:new Date().toLocaleDateString("ru-RU")}),l(`Квест одобрен! +${V.bonus}ч отправлено в банк.`,"success")},x=async V=>{await di(Lt(Pe,"families",t,"requests",V.id),{status:"rejected"}),l("Запрос отклонен","info")},D=async V=>{V.preventDefault();const I=Math.max(0,e.bonusBank-u);await di(Lt(Pe,"families",t),{bonusBank:I,streak:0}),await Ui(yn(Pe,"families",t,"history"),{text:`Штраф -${u}ч. Причина: ${f||"Нарушение дисциплины"}`,date:new Date().toLocaleDateString("ru-RU")}),m(""),l(`Применен штраф -${u}ч`,"warning")};return S.jsxs("div",{className:"space-y-6",children:[S.jsxs("div",{className:"bg-amber-950/30 p-5 rounded-xl border border-amber-500/40 space-y-4",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("h3",{className:"text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2",children:[S.jsx("i",{className:"fa-solid fa-sliders"})," Панель Управления Родителя"]}),S.jsxs("span",{className:"text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30",children:["Квестов: ",n.length," | В магазине: ",i.length]})]}),y.length>0?S.jsxs("div",{className:"space-y-3 bg-slate-900/90 p-4 rounded-lg border border-amber-500/50",children:[S.jsx("span",{className:"text-xs font-bold text-amber-300 block mb-2",children:"⚡ Ожидают вашего подтверждения:"}),y.map(V=>S.jsxs("div",{className:"bg-slate-800 p-3 rounded-md flex items-center justify-between gap-3 border border-slate-700",children:[S.jsxs("div",{children:[S.jsx("span",{className:"text-xs text-white font-bold block",children:V.questTitle}),S.jsxs("span",{className:"text-[10px] text-gray-400",children:["Награда: +",V.bonus,"ч (+",V.bonus*50," XP) • ",V.timestamp]})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("button",{onClick:()=>R(V),className:"bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded font-bold transition",children:[S.jsx("i",{className:"fa-solid fa-check"})," Одобрить"]}),S.jsx("button",{onClick:()=>x(V),className:"bg-red-600 hover:bg-red-500 text-white text-xs px-2 py-1.5 rounded transition",children:S.jsx("i",{className:"fa-solid fa-xmark"})})]})]},V.id))]}):S.jsx("div",{className:"text-xs text-gray-400 bg-slate-900/50 p-3 rounded border border-slate-800",children:"Нет новых запросов на проверку."}),S.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[S.jsxs("button",{onClick:s,className:"bg-indigo-600 hover:bg-indigo-500 text-xs text-white px-3 py-2 rounded-lg font-bold transition flex items-center gap-2",children:[S.jsx("i",{className:"fa-solid fa-plus"})," Создать Квест"]}),S.jsxs("button",{onClick:()=>o(),className:"bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs px-3 py-2 rounded-lg font-bold transition flex items-center gap-2",children:[S.jsx("i",{className:"fa-solid fa-cart-plus"})," Добавить в Магазин"]})]})]}),i.length>0&&S.jsxs("div",{className:"bg-[#1a2232] p-5 rounded-xl hud-border space-y-3",children:[S.jsxs("h4",{className:"text-xs font-bold text-gray-300 uppercase flex items-center gap-2",children:[S.jsx("i",{className:"fa-solid fa-store text-amber-400"})," Редактирование товаров магазина"]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:i.map(V=>S.jsxs("div",{className:"bg-slate-900 p-2.5 rounded border border-slate-800 flex items-center justify-between text-xs",children:[S.jsxs("span",{className:"text-white font-semibold",children:[V.title," (",V.cost,"ч)"]}),S.jsx("button",{onClick:()=>o(V),className:"text-amber-400 hover:text-amber-300 p-1 transition",title:"Редактировать",children:S.jsx("i",{className:"fa-solid fa-pen"})})]},V.id))})]}),S.jsxs("div",{className:"bg-[#1a2232] p-5 rounded-xl hud-border border-red-500/30",children:[S.jsxs("h4",{className:"text-xs font-bold text-red-400 uppercase mb-3",children:[S.jsx("i",{className:"fa-solid fa-triangle-exclamation"})," Применить Списание / Штраф"]}),S.jsxs("form",{onSubmit:D,className:"flex gap-2",children:[S.jsx("input",{type:"text",placeholder:"Причина (двойка, обман)",value:f,onChange:V=>m(V.target.value),className:"flex-1 bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"}),S.jsxs("select",{value:u,onChange:V=>h(Number(V.target.value)),className:"bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white",children:[S.jsx("option",{value:"1",children:"-1 час"}),S.jsx("option",{value:"2",children:"-2 часа"})]}),S.jsx("button",{type:"submit",className:"bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-3 py-2 rounded",children:"Списать"})]})]})]})},v1=({familyId:t,familyData:e,quests:n,requests:r,shopItems:i,onToast:s})=>{const o=async u=>{if(r.some(h=>h.questId===u.id&&h.status==="pending")){s("Запрос уже отправлен на проверку!","warning");return}await Ui(yn(Pe,"families",t,"requests"),{questId:u.id,questTitle:u.title,bonus:u.bonus,timestamp:new Date().toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),status:"pending"}),s(`Запрос на "${u.title}" отправлен родителю!`,"success")},l=async u=>{if(e.bonusBank<u.cost){s("Недостаточно бонусных часов!","error");return}const h=e.bonusBank-u.cost;await di(Lt(Pe,"families",t),{bonusBank:h}),await Ui(yn(Pe,"families",t,"history"),{text:`Приобретено: "${u.title}" за ${u.cost} бонус-часа!`,date:new Date().toLocaleDateString("ru-RU")}),s(`Успешно куплено: ${u.title}!`,"success")};return S.jsxs("div",{className:"space-y-6",children:[S.jsxs("div",{className:"bg-[#1a2232] p-5 rounded-xl hud-border",children:[S.jsxs("h3",{className:"text-sm font-bold text-white uppercase mb-4 flex items-center justify-between",children:[S.jsxs("span",{children:[S.jsx("i",{className:"fa-solid fa-crosshairs text-indigo-400 mr-2"}),"Доступные Квесты"]}),S.jsxs("span",{className:"text-xs text-gray-400",children:[n.length," активных"]})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:n.map(u=>{const h=r.some(f=>f.questId===u.id&&f.status==="pending");return S.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex justify-between items-start mb-2",children:[S.jsx("span",{className:"text-xs font-bold text-white uppercase",children:u.title}),S.jsxs("span",{className:"bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black px-2 py-0.5 rounded",children:["+",u.bonus," ЧАС (+",u.bonus*50," XP)"]})]}),S.jsx("p",{className:"text-xs text-gray-400 mb-3",children:u.desc})]}),S.jsxs("div",{className:"pt-2 border-t border-slate-800 flex justify-between items-center",children:[S.jsx("span",{className:"text-[10px] text-gray-500 uppercase",children:u.category}),h?S.jsxs("span",{className:"text-[11px] text-amber-400 font-bold bg-amber-950/40 px-2 py-1 rounded border border-amber-500/30",children:[S.jsx("i",{className:"fa-solid fa-hourglass-half animate-pulse"})," На проверке"]}):S.jsxs("button",{onClick:()=>o(u),className:"bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded font-bold transition",children:["Выполнил! ",S.jsx("i",{className:"fa-solid fa-paper-plane ml-1"})]})]})]},u.id)})})]}),S.jsxs("div",{className:"bg-[#1a2232] p-5 rounded-xl hud-border",children:[S.jsxs("h3",{className:"text-sm font-bold text-white uppercase mb-4",children:[S.jsx("i",{className:"fa-solid fa-store text-amber-400 mr-2"}),"Магазин Наград"]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:i.map(u=>S.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("i",{className:`fa-solid ${u.icon||"fa-gift"} text-amber-400 text-lg`}),S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-bold text-white block",children:u.title}),S.jsxs("span",{className:"text-[10px] text-gray-400",children:[u.cost," бонус-часа"]})]})]}),S.jsx("button",{onClick:()=>l(u),className:"bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-2.5 py-1 rounded transition",children:"Купить"})]},u.id))})]})]})},jg=({activeTab:t,onTabChange:e,onClose:n})=>S.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",children:S.jsxs("div",{className:"bg-[#1a2232] p-6 rounded-xl hud-border max-w-2xl w-full space-y-4 max-h-[80vh] overflow-y-auto text-xs text-gray-300",children:[S.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("button",{onClick:()=>e("privacy"),className:`font-bold uppercase ${t==="privacy"?"text-indigo-400 border-b-2 border-indigo-400":"text-gray-500"}`,children:"Политика конфиденциальности"}),S.jsx("button",{onClick:()=>e("terms"),className:`font-bold uppercase ${t==="terms"?"text-indigo-400 border-b-2 border-indigo-400":"text-gray-500"}`,children:"Условия использования"})]}),S.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white",children:S.jsx("i",{className:"fa-solid fa-xmark"})})]}),t==="privacy"?S.jsxs("div",{className:"space-y-3 leading-relaxed",children:[S.jsx("h4",{className:"font-bold text-white",children:"1. Сбор данных"}),S.jsx("p",{children:"Мы собираем только ваш Email для авторизации. Пароли не хранятся, вход выполняется по одноразовой ссылке."}),S.jsx("h4",{className:"font-bold text-white",children:"2. Использование данных"}),S.jsx("p",{children:"Данные используются исключительно для функционирования сервиса внутри вашей семьи."}),S.jsx("h4",{className:"font-bold text-white",children:"3. Авторские права"}),S.jsx("p",{children:"Сервис является независимым проектом и не использует чужие коммерческие бренды."})]}):S.jsxs("div",{className:"space-y-3 leading-relaxed",children:[S.jsx("h4",{className:"font-bold text-white",children:"1. Назначение сервиса"}),S.jsx("p",{children:"Quest Play HUB — это инструмент для внутрисемейного планирования времени и геймификации обязанностей."}),S.jsx("h4",{className:"font-bold text-white",children:"2. Ответственность"}),S.jsx("p",{children:"Родители самостоятельно регулируют нормы времени и задания для детей."})]}),S.jsx("button",{onClick:n,className:"w-full bg-slate-800 text-white font-bold py-2 rounded",children:"Закрыть"})]})}),w1=({familyId:t,onClose:e,onToast:n})=>{const[r,i]=se.useState(""),[s,o]=se.useState(1),[l,u]=se.useState("school"),h=async f=>{f.preventDefault(),r&&(await Ui(yn(Pe,"families",t,"quests"),{title:r,bonus:Number(s),category:l,desc:"Пользовательский квест от родителя"}),n("Новый квест успешно создан!","success"),e())};return S.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",children:S.jsxs("div",{className:"bg-[#1a2232] p-6 rounded-xl hud-border max-w-md w-full space-y-4",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("h3",{className:"text-sm font-bold text-white uppercase",children:[S.jsx("i",{className:"fa-solid fa-plus text-indigo-400 mr-2"}),"Добавить квест"]}),S.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white",children:S.jsx("i",{className:"fa-solid fa-xmark"})})]}),S.jsxs("form",{onSubmit:h,className:"space-y-3",children:[S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Название квеста"}),S.jsx("input",{type:"text",required:!0,value:r,onChange:f=>i(f.target.value),placeholder:"Например: Убраться в комнате",className:"w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Награда (Часы)"}),S.jsxs("select",{value:s,onChange:f=>o(Number(f.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white",children:[S.jsx("option",{value:"1",children:"+1 час (+50 XP)"}),S.jsx("option",{value:"2",children:"+2 часа (+100 XP)"})]})]}),S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Категория"}),S.jsxs("select",{value:l,onChange:f=>u(f.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white",children:[S.jsx("option",{value:"school",children:"Учеба"}),S.jsx("option",{value:"scooter",children:"Скутер / Гараж"}),S.jsx("option",{value:"discipline",children:"Дисциплина"})]})]})]}),S.jsx("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded text-xs uppercase transition mt-2",children:"Создать"})]})]})})},E1=({familyId:t,editingItem:e,onClose:n,onToast:r})=>{const[i,s]=se.useState((e==null?void 0:e.title)||""),[o,l]=se.useState((e==null?void 0:e.cost)||1),[u,h]=se.useState((e==null?void 0:e.icon)||"fa-gamepad"),f=async m=>{m.preventDefault(),i&&(e?(await di(Lt(Pe,"families",t,"shop_items",e.id),{title:i,cost:Number(o),icon:u}),r("Товар обновлен!","success")):(await Ui(yn(Pe,"families",t,"shop_items"),{title:i,cost:Number(o),icon:u}),r("Товар добавлен в Магазин!","success")),n())};return S.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",children:S.jsxs("div",{className:"bg-[#1a2232] p-6 rounded-xl hud-border max-w-md w-full space-y-4",children:[S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("h3",{className:"text-sm font-bold text-white uppercase",children:[S.jsx("i",{className:"fa-solid fa-store text-amber-400 mr-2"}),e?"Редактировать":"Добавить в магазин"]}),S.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white",children:S.jsx("i",{className:"fa-solid fa-xmark"})})]}),S.jsxs("form",{onSubmit:f,className:"space-y-3",children:[S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Название награды"}),S.jsx("input",{type:"text",required:!0,value:i,onChange:m=>s(m.target.value),placeholder:"Например: Поездка на картинг",className:"w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"})]}),S.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Стоимость (Часов)"}),S.jsx("input",{type:"number",min:"1",value:o,onChange:m=>l(Number(m.target.value)),className:"w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"})]}),S.jsxs("div",{children:[S.jsx("label",{className:"text-xs text-gray-400 block mb-1",children:"Иконка"}),S.jsxs("select",{value:u,onChange:m=>h(m.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white",children:[S.jsx("option",{value:"fa-gamepad",children:"🎮 Игры"}),S.jsx("option",{value:"fa-motorcycle",children:"🛵 Скутер"}),S.jsx("option",{value:"fa-gas-pump",children:"⛽ Бензин"}),S.jsx("option",{value:"fa-gift",children:"🎁 Подарок"})]})]})]}),S.jsx("button",{type:"submit",className:"w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded text-xs uppercase transition mt-2",children:"Сохранить"})]})]})})},Bg={baseHours:2,bonusBank:0,usedToday:0,xp:0,level:1,streak:0,lastResetDate:new Date().toISOString().split("T")[0],unlockedAchievements:[]},T1=()=>{const[t,e]=se.useState(null),[n,r]=se.useState(null),[i,s]=se.useState(Bg),[o,l]=se.useState([]),[u,h]=se.useState([]),[f,m]=se.useState([]),[y,R]=se.useState(!1),[x,D]=se.useState("privacy"),[V,I]=se.useState(!1),[E,k]=se.useState(!1),[O,j]=se.useState(null),[F,w]=se.useState(null),g=(_,A="info")=>{w({msg:_,type:A}),setTimeout(()=>w(null),3500)};se.useEffect(()=>{if(XA(ks,window.location.href)){let _=window.localStorage.getItem("emailForSignIn");_||(_=window.prompt("Подтвердите ваш Email:")),_&&JA(ks,_,window.location.href).then(()=>window.localStorage.removeItem("emailForSignIn")).catch(A=>g("Ошибка входа: "+A.message,"error"))}return tR(ks,async _=>{if(e(_),_){const A=await d1(Lt(Pe,"users",_.uid));if(A.exists()){const C=A.data();r(C),v(C.familyId)}else{const T=window.localStorage.getItem("pendingRole")||"child",nt=window.localStorage.getItem("pendingFamilyCode")||"",xt=nt?nt.toUpperCase():"HUB-"+Math.floor(1e5+Math.random()*9e5),Pn={email:_.email,role:T,familyId:xt,createdAt:new Date().toISOString()};await Ug(Lt(Pe,"users",_.uid),Pn),T==="adult"&&await Ug(Lt(Pe,"families",xt),Bg),window.localStorage.removeItem("pendingRole"),window.localStorage.removeItem("pendingFamilyCode"),r(Pn),v(xt)}}else r(null)})},[]);const v=_=>{ya(Lt(Pe,"families",_),A=>{A.exists()&&s(A.data())}),ya(yn(Pe,"families",_,"quests"),A=>{l(A.docs.map(C=>({id:C.id,...C.data()})))}),ya(yn(Pe,"families",_,"requests"),A=>{h(A.docs.map(C=>({id:C.id,...C.data()})))}),ya(yn(Pe,"families",_,"shop_items"),A=>{m(A.docs.map(C=>({id:C.id,...C.data()})))})};return!t||!n?S.jsxs(S.Fragment,{children:[S.jsx(g1,{onShowLegal:_=>{D(_),R(!0)},onToast:g}),y&&S.jsx(jg,{activeTab:x,onTabChange:D,onClose:()=>R(!1)})]}):S.jsxs("div",{className:"max-w-6xl mx-auto p-3 sm:p-6 min-h-screen flex flex-col justify-between",children:[S.jsxs("div",{children:[S.jsx(y1,{userProfile:n,familyData:i,onSignOut:()=>nR(ks)}),F&&S.jsx("div",{className:"fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-xl text-sm font-semibold bg-indigo-900 border border-indigo-500 text-white",children:F.msg}),n.role==="adult"?S.jsx(_1,{familyId:n.familyId,familyData:i,quests:o,requests:u,shopItems:f,onOpenQuestModal:()=>I(!0),onOpenShopModal:_=>{j(_||null),k(!0)},onToast:g}):S.jsx(v1,{familyId:n.familyId,familyData:i,quests:o,requests:u,shopItems:f,onToast:g})]}),V&&S.jsx(w1,{familyId:n.familyId,onClose:()=>I(!1),onToast:g}),E&&S.jsx(E1,{familyId:n.familyId,editingItem:O,onClose:()=>k(!1),onToast:g}),y&&S.jsx(jg,{activeTab:x,onTabChange:D,onClose:()=>R(!1)}),S.jsxs("footer",{className:"mt-8 text-center text-xs text-gray-600 border-t border-slate-900 pt-4 flex justify-between items-center",children:[S.jsx("span",{children:"Quest Play HUB v3.2 (TypeScript)"}),S.jsx("button",{onClick:()=>R(!0),className:"hover:text-gray-400",children:"Политика конфиденциальности"})]})]})};yc.createRoot(document.getElementById("root")).render(S.jsx(lE.StrictMode,{children:S.jsx(T1,{})}));
