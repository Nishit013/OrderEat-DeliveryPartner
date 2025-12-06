(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function ib(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var lf={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function CT(){if(Tv)return ll;Tv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:s,type:r,key:h,ref:o!==void 0?o:null,props:c}}return ll.Fragment=e,ll.jsx=n,ll.jsxs=n,ll}var Cv;function AT(){return Cv||(Cv=1,lf.exports=CT()),lf.exports}var b=AT(),of={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function NT(){if(Av)return ne;Av=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),E=Symbol.iterator;function k(w){return w===null||typeof w!="object"?null:(w=E&&w[E]||w["@@iterator"],typeof w=="function"?w:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,le={};function de(w,D,U){this.props=w,this.context=D,this.refs=le,this.updater=U||j}de.prototype.isReactComponent={},de.prototype.setState=function(w,D){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,D,"setState")},de.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function Pe(){}Pe.prototype=de.prototype;function ie(w,D,U){this.props=w,this.context=D,this.refs=le,this.updater=U||j}var we=ie.prototype=new Pe;we.constructor=ie,G(we,de.prototype),we.isPureReactComponent=!0;var Ee=Array.isArray;function Ue(){}var oe={H:null,A:null,T:null,S:null},Tt=Object.prototype.hasOwnProperty;function on(w,D,U){var B=U.ref;return{$$typeof:s,type:w,key:D,ref:B!==void 0?B:null,props:U}}function wi(w,D){return on(w.type,D,w.props)}function Nt(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function it(w){var D={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(U){return D[U]})}var An=/\/+/g;function Ft(w,D){return typeof w=="object"&&w!==null&&w.key!=null?it(""+w.key):D.toString(36)}function It(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(Ue,Ue):(w.status="pending",w.then(function(D){w.status==="pending"&&(w.status="fulfilled",w.value=D)},function(D){w.status==="pending"&&(w.status="rejected",w.reason=D)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function O(w,D,U,B,Q){var te=typeof w;(te==="undefined"||te==="boolean")&&(w=null);var ae=!1;if(w===null)ae=!0;else switch(te){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(w.$$typeof){case s:case e:ae=!0;break;case v:return ae=w._init,O(ae(w._payload),D,U,B,Q)}}if(ae)return Q=Q(w),ae=B===""?"."+Ft(w,0):B,Ee(Q)?(U="",ae!=null&&(U=ae.replace(An,"$&/")+"/"),O(Q,D,U,"",function(pa){return pa})):Q!=null&&(Nt(Q)&&(Q=wi(Q,U+(Q.key==null||w&&w.key===Q.key?"":(""+Q.key).replace(An,"$&/")+"/")+ae)),D.push(Q)),1;ae=0;var gt=B===""?".":B+":";if(Ee(w))for(var Ke=0;Ke<w.length;Ke++)B=w[Ke],te=gt+Ft(B,Ke),ae+=O(B,D,U,te,Q);else if(Ke=k(w),typeof Ke=="function")for(w=Ke.call(w),Ke=0;!(B=w.next()).done;)B=B.value,te=gt+Ft(B,Ke++),ae+=O(B,D,U,te,Q);else if(te==="object"){if(typeof w.then=="function")return O(It(w),D,U,B,Q);throw D=String(w),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return ae}function P(w,D,U){if(w==null)return w;var B=[],Q=0;return O(w,B,"","",function(te){return D.call(U,te,Q++)}),B}function V(w){if(w._status===-1){var D=w._result;D=D(),D.then(function(U){(w._status===0||w._status===-1)&&(w._status=1,w._result=U)},function(U){(w._status===0||w._status===-1)&&(w._status=2,w._result=U)}),w._status===-1&&(w._status=0,w._result=D)}if(w._status===1)return w._result.default;throw w._result}var J=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},$={map:P,forEach:function(w,D,U){P(w,function(){D.apply(this,arguments)},U)},count:function(w){var D=0;return P(w,function(){D++}),D},toArray:function(w){return P(w,function(D){return D})||[]},only:function(w){if(!Nt(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ne.Activity=y,ne.Children=$,ne.Component=de,ne.Fragment=n,ne.Profiler=o,ne.PureComponent=ie,ne.StrictMode=r,ne.Suspense=m,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,ne.__COMPILER_RUNTIME={__proto__:null,c:function(w){return oe.H.useMemoCache(w)}},ne.cache=function(w){return function(){return w.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(w,D,U){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var B=G({},w.props),Q=w.key;if(D!=null)for(te in D.key!==void 0&&(Q=""+D.key),D)!Tt.call(D,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&D.ref===void 0||(B[te]=D[te]);var te=arguments.length-2;if(te===1)B.children=U;else if(1<te){for(var ae=Array(te),gt=0;gt<te;gt++)ae[gt]=arguments[gt+2];B.children=ae}return on(w.type,Q,B)},ne.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},ne.createElement=function(w,D,U){var B,Q={},te=null;if(D!=null)for(B in D.key!==void 0&&(te=""+D.key),D)Tt.call(D,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Q[B]=D[B]);var ae=arguments.length-2;if(ae===1)Q.children=U;else if(1<ae){for(var gt=Array(ae),Ke=0;Ke<ae;Ke++)gt[Ke]=arguments[Ke+2];Q.children=gt}if(w&&w.defaultProps)for(B in ae=w.defaultProps,ae)Q[B]===void 0&&(Q[B]=ae[B]);return on(w,te,Q)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(w){return{$$typeof:f,render:w}},ne.isValidElement=Nt,ne.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:V}},ne.memo=function(w,D){return{$$typeof:g,type:w,compare:D===void 0?null:D}},ne.startTransition=function(w){var D=oe.T,U={};oe.T=U;try{var B=w(),Q=oe.S;Q!==null&&Q(U,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(Ue,J)}catch(te){J(te)}finally{D!==null&&U.types!==null&&(D.types=U.types),oe.T=D}},ne.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},ne.use=function(w){return oe.H.use(w)},ne.useActionState=function(w,D,U){return oe.H.useActionState(w,D,U)},ne.useCallback=function(w,D){return oe.H.useCallback(w,D)},ne.useContext=function(w){return oe.H.useContext(w)},ne.useDebugValue=function(){},ne.useDeferredValue=function(w,D){return oe.H.useDeferredValue(w,D)},ne.useEffect=function(w,D){return oe.H.useEffect(w,D)},ne.useEffectEvent=function(w){return oe.H.useEffectEvent(w)},ne.useId=function(){return oe.H.useId()},ne.useImperativeHandle=function(w,D,U){return oe.H.useImperativeHandle(w,D,U)},ne.useInsertionEffect=function(w,D){return oe.H.useInsertionEffect(w,D)},ne.useLayoutEffect=function(w,D){return oe.H.useLayoutEffect(w,D)},ne.useMemo=function(w,D){return oe.H.useMemo(w,D)},ne.useOptimistic=function(w,D){return oe.H.useOptimistic(w,D)},ne.useReducer=function(w,D,U){return oe.H.useReducer(w,D,U)},ne.useRef=function(w){return oe.H.useRef(w)},ne.useState=function(w){return oe.H.useState(w)},ne.useSyncExternalStore=function(w,D,U){return oe.H.useSyncExternalStore(w,D,U)},ne.useTransition=function(){return oe.H.useTransition()},ne.version="19.2.1",ne}var Nv;function dp(){return Nv||(Nv=1,of.exports=NT()),of.exports}var Z=dp();const RT=ib(Z);var cf={exports:{}},ol={},uf={exports:{}},df={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function xT(){return Rv||(Rv=1,(function(s){function e(O,P){var V=O.length;O.push(P);e:for(;0<V;){var J=V-1>>>1,$=O[J];if(0<o($,P))O[J]=P,O[V]=$,V=J;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var P=O[0],V=O.pop();if(V!==P){O[0]=V;e:for(var J=0,$=O.length,w=$>>>1;J<w;){var D=2*(J+1)-1,U=O[D],B=D+1,Q=O[B];if(0>o(U,V))B<$&&0>o(Q,U)?(O[J]=Q,O[B]=V,J=B):(O[J]=U,O[D]=V,J=D);else if(B<$&&0>o(Q,V))O[J]=Q,O[B]=V,J=B;else break e}}return P}function o(O,P){var V=O.sortIndex-P.sortIndex;return V!==0?V:O.id-P.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,f=h.now();s.unstable_now=function(){return h.now()-f}}var m=[],g=[],v=1,y=null,E=3,k=!1,j=!1,G=!1,le=!1,de=typeof setTimeout=="function"?setTimeout:null,Pe=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function we(O){for(var P=n(g);P!==null;){if(P.callback===null)r(g);else if(P.startTime<=O)r(g),P.sortIndex=P.expirationTime,e(m,P);else break;P=n(g)}}function Ee(O){if(G=!1,we(O),!j)if(n(m)!==null)j=!0,Ue||(Ue=!0,it());else{var P=n(g);P!==null&&It(Ee,P.startTime-O)}}var Ue=!1,oe=-1,Tt=5,on=-1;function wi(){return le?!0:!(s.unstable_now()-on<Tt)}function Nt(){if(le=!1,Ue){var O=s.unstable_now();on=O;var P=!0;try{e:{j=!1,G&&(G=!1,Pe(oe),oe=-1),k=!0;var V=E;try{t:{for(we(O),y=n(m);y!==null&&!(y.expirationTime>O&&wi());){var J=y.callback;if(typeof J=="function"){y.callback=null,E=y.priorityLevel;var $=J(y.expirationTime<=O);if(O=s.unstable_now(),typeof $=="function"){y.callback=$,we(O),P=!0;break t}y===n(m)&&r(m),we(O)}else r(m);y=n(m)}if(y!==null)P=!0;else{var w=n(g);w!==null&&It(Ee,w.startTime-O),P=!1}}break e}finally{y=null,E=V,k=!1}P=void 0}}finally{P?it():Ue=!1}}}var it;if(typeof ie=="function")it=function(){ie(Nt)};else if(typeof MessageChannel<"u"){var An=new MessageChannel,Ft=An.port2;An.port1.onmessage=Nt,it=function(){Ft.postMessage(null)}}else it=function(){de(Nt,0)};function It(O,P){oe=de(function(){O(s.unstable_now())},P)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_next=function(O){switch(E){case 1:case 2:case 3:var P=3;break;default:P=E}var V=E;E=P;try{return O()}finally{E=V}},s.unstable_requestPaint=function(){le=!0},s.unstable_runWithPriority=function(O,P){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=E;E=O;try{return P()}finally{E=V}},s.unstable_scheduleCallback=function(O,P,V){var J=s.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?J+V:J):V=J,O){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=V+$,O={id:v++,callback:P,priorityLevel:O,startTime:V,expirationTime:$,sortIndex:-1},V>J?(O.sortIndex=V,e(g,O),n(m)===null&&O===n(g)&&(G?(Pe(oe),oe=-1):G=!0,It(Ee,V-J))):(O.sortIndex=$,e(m,O),j||k||(j=!0,Ue||(Ue=!0,it()))),O},s.unstable_shouldYield=wi,s.unstable_wrapCallback=function(O){var P=E;return function(){var V=E;E=P;try{return O.apply(this,arguments)}finally{E=V}}}})(df)),df}var xv;function IT(){return xv||(xv=1,uf.exports=xT()),uf.exports}var hf={exports:{}},Ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function OT(){if(Iv)return Ct;Iv=1;var s=dp();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:m,containerInfo:g,implementation:v}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ct.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return c(m,g,null,v)},Ct.flushSync=function(m){var g=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=g,r.p=v,r.d.f()}},Ct.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(m,g))},Ct.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ct.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,y=f(v,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:k}):v==="script"&&r.d.X(m,{crossOrigin:y,integrity:E,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ct.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=f(g.as,g.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(m)},Ct.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=f(v,g.crossOrigin);r.d.L(m,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ct.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=f(g.as,g.crossOrigin);r.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(m)},Ct.requestFormReset=function(m){r.d.r(m)},Ct.unstable_batchedUpdates=function(m,g){return m(g)},Ct.useFormState=function(m,g,v){return h.H.useFormState(m,g,v)},Ct.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ct.version="19.2.1",Ct}var Ov;function kT(){if(Ov)return hf.exports;Ov=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hf.exports=OT(),hf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function DT(){if(kv)return ol;kv=1;var s=IT(),e=dp(),n=kT();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function h(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function g(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===l)return m(u),i;d=d.sibling}throw Error(r(188))}if(a.return!==l.return)a=u,l=d;else{for(var p=!1,_=u.child;_;){if(_===a){p=!0,a=u,l=d;break}if(_===l){p=!0,l=u,a=d;break}_=_.sibling}if(!p){for(_=d.child;_;){if(_===a){p=!0,a=d,l=u;break}if(_===l){p=!0,l=d,a=u;break}_=_.sibling}if(!p)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:i}function v(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=v(t),i!==null)return i;t=t.sibling}return null}var y=Object.assign,E=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),Pe=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),on=Symbol.for("react.activity"),wi=Symbol.for("react.memo_cache_sentinel"),Nt=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=Nt&&t[Nt]||t["@@iterator"],typeof t=="function"?t:null)}var An=Symbol.for("react.client.reference");function Ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===An?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case de:return"Profiler";case le:return"StrictMode";case Ee:return"Suspense";case Ue:return"SuspenseList";case on:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case j:return"Portal";case ie:return t.displayName||"Context";case Pe:return(t._context.displayName||"Context")+".Consumer";case we:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oe:return i=t.displayName||null,i!==null?i:Ft(t.type)||"Memo";case Tt:i=t._payload,t=t._init;try{return Ft(t(i))}catch{}}return null}var It=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},J=[],$=-1;function w(t){return{current:t}}function D(t){0>$||(t.current=J[$],J[$]=null,$--)}function U(t,i){$++,J[$]=t.current,t.current=i}var B=w(null),Q=w(null),te=w(null),ae=w(null);function gt(t,i){switch(U(te,i),U(Q,t),U(B,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Wy(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Wy(i),t=Qy(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}D(B),U(B,t)}function Ke(){D(B),D(Q),D(te)}function pa(t){t.memoizedState!==null&&U(ae,t);var i=B.current,a=Qy(i,t.type);i!==a&&(U(Q,t),U(B,a))}function po(t){Q.current===t&&(D(B),D(Q)),ae.current===t&&(D(ae),il._currentValue=V)}var Vu,wm;function gs(t){if(Vu===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Vu=i&&i[1]||"",wm=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vu+t+wm}var qu=!1;function Fu(t,i){if(!t||qu)return"";qu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(x){var R=x}Reflect.construct(t,[],L)}else{try{L.call()}catch(x){R=x}t.call(L.prototype)}}else{try{throw Error()}catch(x){R=x}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(x){if(x&&R&&typeof x.stack=="string")return[x.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),p=d[0],_=d[1];if(p&&_){var S=p.split(`
`),N=_.split(`
`);for(u=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;if(l===S.length||u===N.length)for(l=S.length-1,u=N.length-1;1<=l&&0<=u&&S[l]!==N[u];)u--;for(;1<=l&&0<=u;l--,u--)if(S[l]!==N[u]){if(l!==1||u!==1)do if(l--,u--,0>u||S[l]!==N[u]){var I=`
`+S[l].replace(" at new "," at ");return t.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",t.displayName)),I}while(1<=l&&0<=u);break}}}finally{qu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gs(a):""}function n1(t,i){switch(t.tag){case 26:case 27:case 5:return gs(t.type);case 16:return gs("Lazy");case 13:return t.child!==i&&i!==null?gs("Suspense Fallback"):gs("Suspense");case 19:return gs("SuspenseList");case 0:case 15:return Fu(t.type,!1);case 11:return Fu(t.type.render,!1);case 1:return Fu(t.type,!0);case 31:return gs("Activity");default:return""}}function Tm(t){try{var i="",a=null;do i+=n1(t,a),a=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Gu=Object.prototype.hasOwnProperty,Yu=s.unstable_scheduleCallback,Wu=s.unstable_cancelCallback,i1=s.unstable_shouldYield,s1=s.unstable_requestPaint,Gt=s.unstable_now,r1=s.unstable_getCurrentPriorityLevel,Cm=s.unstable_ImmediatePriority,Am=s.unstable_UserBlockingPriority,mo=s.unstable_NormalPriority,a1=s.unstable_LowPriority,Nm=s.unstable_IdlePriority,l1=s.log,o1=s.unstable_setDisableYieldValue,ma=null,Yt=null;function Ti(t){if(typeof l1=="function"&&o1(t),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(ma,t)}catch{}}var Wt=Math.clz32?Math.clz32:d1,c1=Math.log,u1=Math.LN2;function d1(t){return t>>>=0,t===0?32:31-(c1(t)/u1|0)|0}var go=256,_o=262144,yo=4194304;function _s(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vo(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var _=l&134217727;return _!==0?(l=_&~d,l!==0?u=_s(l):(p&=_,p!==0?u=_s(p):a||(a=_&~t,a!==0&&(u=_s(a))))):(_=l&~d,_!==0?u=_s(_):p!==0?u=_s(p):a||(a=l&~t,a!==0&&(u=_s(a)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:u}function ga(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function h1(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rm(){var t=yo;return yo<<=1,(yo&62914560)===0&&(yo=4194304),t}function Qu(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function _a(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function f1(t,i,a,l,u,d){var p=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var _=t.entanglements,S=t.expirationTimes,N=t.hiddenUpdates;for(a=p&~a;0<a;){var I=31-Wt(a),L=1<<I;_[I]=0,S[I]=-1;var R=N[I];if(R!==null)for(N[I]=null,I=0;I<R.length;I++){var x=R[I];x!==null&&(x.lane&=-536870913)}a&=~L}l!==0&&xm(t,l,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(p&~i))}function xm(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Wt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Im(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Wt(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}function Om(t,i){var a=i&-i;return a=(a&42)!==0?1:Ku(a),(a&(t.suspendedLanes|i))!==0?0:a}function Ku(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function km(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:_v(t.type))}function Dm(t,i){var a=P.p;try{return P.p=t,i()}finally{P.p=a}}var Ci=Math.random().toString(36).slice(2),_t="__reactFiber$"+Ci,Ot="__reactProps$"+Ci,nr="__reactContainer$"+Ci,Zu="__reactEvents$"+Ci,p1="__reactListeners$"+Ci,m1="__reactHandles$"+Ci,Mm="__reactResources$"+Ci,ya="__reactMarker$"+Ci;function Ju(t){delete t[_t],delete t[Ot],delete t[Zu],delete t[p1],delete t[m1]}function ir(t){var i=t[_t];if(i)return i;for(var a=t.parentNode;a;){if(i=a[nr]||a[_t]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=tv(t);t!==null;){if(a=t[_t])return a;t=tv(t)}return i}t=a,a=t.parentNode}return null}function sr(t){if(t=t[_t]||t[nr]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function va(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function rr(t){var i=t[Mm];return i||(i=t[Mm]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ot(t){t[ya]=!0}var Lm=new Set,Pm={};function ys(t,i){ar(t,i),ar(t+"Capture",i)}function ar(t,i){for(Pm[t]=i,t=0;t<i.length;t++)Lm.add(i[t])}var g1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Um={},zm={};function _1(t){return Gu.call(zm,t)?!0:Gu.call(Um,t)?!1:g1.test(t)?zm[t]=!0:(Um[t]=!0,!1)}function bo(t,i,a){if(_1(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function Eo(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Xn(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}function cn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function y1(t,i,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(p){a=""+p,d.call(this,p)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function $u(t){if(!t._valueTracker){var i=jm(t)?"checked":"value";t._valueTracker=y1(t,i,""+t[i])}}function Hm(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=jm(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function So(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var v1=/[\n"\\]/g;function un(t){return t.replace(v1,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ed(t,i,a,l,u,d,p,_){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),i!=null?p==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+cn(i)):t.value!==""+cn(i)&&(t.value=""+cn(i)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),i!=null?td(t,p,cn(i)):a!=null?td(t,p,cn(a)):l!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.name=""+cn(_):t.removeAttribute("name")}function Bm(t,i,a,l,u,d,p,_){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){$u(t);return}a=a!=null?""+cn(a):"",i=i!=null?""+cn(i):a,_||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=_?t.checked:!!l,t.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),$u(t)}function td(t,i,a){i==="number"&&So(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function lr(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+cn(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function Vm(t,i,a){if(i!=null&&(i=""+cn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+cn(a):""}function qm(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(r(92));if(It(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=cn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),$u(t)}function or(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var b1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fm(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||b1.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Gm(t,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&a[u]!==l&&Fm(t,u,l)}else for(var d in i)i.hasOwnProperty(d)&&Fm(t,d,i[d])}function nd(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var E1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),S1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wo(t){return S1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zn(){}var id=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cr=null,ur=null;function Ym(t){var i=sr(t);if(i&&(t=i.stateNode)){var a=t[Ot]||null;e:switch(t=i.stateNode,i.type){case"input":if(ed(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=l[Ot]||null;if(!u)throw Error(r(90));ed(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Hm(l)}break e;case"textarea":Vm(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&lr(t,!!a.multiple,i,!1)}}}var rd=!1;function Wm(t,i,a){if(rd)return t(i,a);rd=!0;try{var l=t(i);return l}finally{if(rd=!1,(cr!==null||ur!==null)&&(uc(),cr&&(i=cr,t=ur,ur=cr=null,Ym(i),t)))for(i=0;i<t.length;i++)Ym(t[i])}}function ba(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Ot]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=!1;if(Jn)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){ad=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{ad=!1}var Ai=null,ld=null,To=null;function Qm(){if(To)return To;var t,i=ld,a=i.length,l,u="value"in Ai?Ai.value:Ai.textContent,d=u.length;for(t=0;t<a&&i[t]===u[t];t++);var p=a-t;for(l=1;l<=p&&i[a-l]===u[d-l];l++);return To=u.slice(t,1<l?1-l:void 0)}function Co(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ao(){return!0}function Km(){return!1}function kt(t){function i(a,l,u,d,p){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(a=t[_],this[_]=a?a(d):d[_]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ao:Km,this.isPropagationStopped=Km,this}return y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=kt(vs),Sa=y({},vs,{view:0,detail:0}),w1=kt(Sa),od,cd,wa,Ro=y({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(od=t.screenX-wa.screenX,cd=t.screenY-wa.screenY):cd=od=0,wa=t),od)},movementY:function(t){return"movementY"in t?t.movementY:cd}}),Xm=kt(Ro),T1=y({},Ro,{dataTransfer:0}),C1=kt(T1),A1=y({},Sa,{relatedTarget:0}),ud=kt(A1),N1=y({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),R1=kt(N1),x1=y({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I1=kt(x1),O1=y({},vs,{data:0}),Zm=kt(O1),k1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L1(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=M1[t])?!!i[t]:!1}function dd(){return L1}var P1=y({},Sa,{key:function(t){if(t.key){var i=k1[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?Co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U1=kt(P1),z1=y({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=kt(z1),j1=y({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),H1=kt(j1),B1=y({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),V1=kt(B1),q1=y({},Ro,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=kt(q1),G1=y({},vs,{newState:0,oldState:0}),Y1=kt(G1),W1=[9,13,27,32],hd=Jn&&"CompositionEvent"in window,Ta=null;Jn&&"documentMode"in document&&(Ta=document.documentMode);var Q1=Jn&&"TextEvent"in window&&!Ta,$m=Jn&&(!hd||Ta&&8<Ta&&11>=Ta),eg=" ",tg=!1;function ng(t,i){switch(t){case"keyup":return W1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dr=!1;function K1(t,i){switch(t){case"compositionend":return ig(i);case"keypress":return i.which!==32?null:(tg=!0,eg);case"textInput":return t=i.data,t===eg&&tg?null:t;default:return null}}function X1(t,i){if(dr)return t==="compositionend"||!hd&&ng(t,i)?(t=Qm(),To=ld=Ai=null,dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $m&&i.locale!=="ko"?null:i.data;default:return null}}var Z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Z1[t.type]:i==="textarea"}function rg(t,i,a,l){cr?ur?ur.push(l):ur=[l]:cr=l,i=_c(i,"onChange"),0<i.length&&(a=new No("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Ca=null,Aa=null;function J1(t){By(t,0)}function xo(t){var i=va(t);if(Hm(i))return t}function ag(t,i){if(t==="change")return i}var lg=!1;if(Jn){var fd;if(Jn){var pd="oninput"in document;if(!pd){var og=document.createElement("div");og.setAttribute("oninput","return;"),pd=typeof og.oninput=="function"}fd=pd}else fd=!1;lg=fd&&(!document.documentMode||9<document.documentMode)}function cg(){Ca&&(Ca.detachEvent("onpropertychange",ug),Aa=Ca=null)}function ug(t){if(t.propertyName==="value"&&xo(Aa)){var i=[];rg(i,Aa,t,sd(t)),Wm(J1,i)}}function $1(t,i,a){t==="focusin"?(cg(),Ca=i,Aa=a,Ca.attachEvent("onpropertychange",ug)):t==="focusout"&&cg()}function ew(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xo(Aa)}function tw(t,i){if(t==="click")return xo(i)}function nw(t,i){if(t==="input"||t==="change")return xo(i)}function iw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qt=typeof Object.is=="function"?Object.is:iw;function Na(t,i){if(Qt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!Gu.call(i,u)||!Qt(t[u],i[u]))return!1}return!0}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,i){var a=dg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dg(a)}}function fg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?fg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function pg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=So(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=So(t.document)}return i}function md(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var sw=Jn&&"documentMode"in document&&11>=document.documentMode,hr=null,gd=null,Ra=null,_d=!1;function mg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_d||hr==null||hr!==So(l)||(l=hr,"selectionStart"in l&&md(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ra&&Na(Ra,l)||(Ra=l,l=_c(gd,"onSelect"),0<l.length&&(i=new No("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=hr)))}function bs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var fr={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},yd={},gg={};Jn&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Es(t){if(yd[t])return yd[t];if(!fr[t])return t;var i=fr[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in gg)return yd[t]=i[a];return t}var _g=Es("animationend"),yg=Es("animationiteration"),vg=Es("animationstart"),rw=Es("transitionrun"),aw=Es("transitionstart"),lw=Es("transitioncancel"),bg=Es("transitionend"),Eg=new Map,vd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vd.push("scrollEnd");function Nn(t,i){Eg.set(t,i),ys(i,[t])}var Io=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},dn=[],pr=0,bd=0;function Oo(){for(var t=pr,i=bd=pr=0;i<t;){var a=dn[i];dn[i++]=null;var l=dn[i];dn[i++]=null;var u=dn[i];dn[i++]=null;var d=dn[i];if(dn[i++]=null,l!==null&&u!==null){var p=l.pending;p===null?u.next=u:(u.next=p.next,p.next=u),l.pending=u}d!==0&&Sg(a,u,d)}}function ko(t,i,a,l){dn[pr++]=t,dn[pr++]=i,dn[pr++]=a,dn[pr++]=l,bd|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ed(t,i,a,l){return ko(t,i,a,l),Do(t)}function Ss(t,i){return ko(t,null,null,i),Do(t)}function Sg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Wt(a),t=d.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=a|536870912),d):null}function Do(t){if(50<Xa)throw Xa=0,Ih=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var mr={};function ow(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,i,a,l){return new ow(t,i,a,l)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $n(t,i){var a=t.alternate;return a===null?(a=Kt(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Mo(t,i,a,l,u,d){var p=0;if(l=t,typeof t=="function")Sd(t)&&(p=1);else if(typeof t=="string")p=fT(t,a,B.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case on:return t=Kt(31,a,i,u),t.elementType=on,t.lanes=d,t;case G:return ws(a.children,u,d,i);case le:p=8,u|=24;break;case de:return t=Kt(12,a,i,u|2),t.elementType=de,t.lanes=d,t;case Ee:return t=Kt(13,a,i,u),t.elementType=Ee,t.lanes=d,t;case Ue:return t=Kt(19,a,i,u),t.elementType=Ue,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ie:p=10;break e;case Pe:p=9;break e;case we:p=11;break e;case oe:p=14;break e;case Tt:p=16,l=null;break e}p=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Kt(p,a,i,u),i.elementType=t,i.type=l,i.lanes=d,i}function ws(t,i,a,l){return t=Kt(7,t,l,i),t.lanes=a,t}function wd(t,i,a){return t=Kt(6,t,null,i),t.lanes=a,t}function Tg(t){var i=Kt(18,null,null,0);return i.stateNode=t,i}function Td(t,i,a){return i=Kt(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Cg=new WeakMap;function hn(t,i){if(typeof t=="object"&&t!==null){var a=Cg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Tm(i)},Cg.set(t,i),i)}return{value:t,source:i,stack:Tm(i)}}var gr=[],_r=0,Lo=null,xa=0,fn=[],pn=0,Ni=null,Un=1,zn="";function ei(t,i){gr[_r++]=xa,gr[_r++]=Lo,Lo=t,xa=i}function Ag(t,i,a){fn[pn++]=Un,fn[pn++]=zn,fn[pn++]=Ni,Ni=t;var l=Un;t=zn;var u=32-Wt(l)-1;l&=~(1<<u),a+=1;var d=32-Wt(i)+u;if(30<d){var p=u-u%5;d=(l&(1<<p)-1).toString(32),l>>=p,u-=p,Un=1<<32-Wt(i)+u|a<<u|l,zn=d+t}else Un=1<<d|a<<u|l,zn=t}function Cd(t){t.return!==null&&(ei(t,1),Ag(t,1,0))}function Ad(t){for(;t===Lo;)Lo=gr[--_r],gr[_r]=null,xa=gr[--_r],gr[_r]=null;for(;t===Ni;)Ni=fn[--pn],fn[pn]=null,zn=fn[--pn],fn[pn]=null,Un=fn[--pn],fn[pn]=null}function Ng(t,i){fn[pn++]=Un,fn[pn++]=zn,fn[pn++]=Ni,Un=i.id,zn=i.overflow,Ni=t}var yt=null,ze=null,_e=!1,Ri=null,mn=!1,Nd=Error(r(519));function xi(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ia(hn(i,t)),Nd}function Rg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[_t]=t,i[Ot]=l,a){case"dialog":pe("cancel",i),pe("close",i);break;case"iframe":case"object":case"embed":pe("load",i);break;case"video":case"audio":for(a=0;a<Ja.length;a++)pe(Ja[a],i);break;case"source":pe("error",i);break;case"img":case"image":case"link":pe("error",i),pe("load",i);break;case"details":pe("toggle",i);break;case"input":pe("invalid",i),Bm(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":pe("invalid",i);break;case"textarea":pe("invalid",i),qm(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Gy(i.textContent,a)?(l.popover!=null&&(pe("beforetoggle",i),pe("toggle",i)),l.onScroll!=null&&pe("scroll",i),l.onScrollEnd!=null&&pe("scrollend",i),l.onClick!=null&&(i.onclick=Zn),i=!0):i=!1,i||xi(t,!0)}function xg(t){for(yt=t.return;yt;)switch(yt.tag){case 5:case 31:case 13:mn=!1;return;case 27:case 3:mn=!0;return;default:yt=yt.return}}function yr(t){if(t!==yt)return!1;if(!_e)return xg(t),_e=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gh(t.type,t.memoizedProps)),a=!a),a&&ze&&xi(t),xg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ze=ev(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ze=ev(t)}else i===27?(i=ze,qi(t.type)?(t=Xh,Xh=null,ze=t):ze=i):ze=yt?_n(t.stateNode.nextSibling):null;return!0}function Ts(){ze=yt=null,_e=!1}function Rd(){var t=Ri;return t!==null&&(Pt===null?Pt=t:Pt.push.apply(Pt,t),Ri=null),t}function Ia(t){Ri===null?Ri=[t]:Ri.push(t)}var xd=w(null),Cs=null,ti=null;function Ii(t,i,a){U(xd,i._currentValue),i._currentValue=a}function ni(t){t._currentValue=xd.current,D(xd)}function Id(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Od(t,i,a,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var p=u.child;d=d.firstContext;e:for(;d!==null;){var _=d;d=u;for(var S=0;S<i.length;S++)if(_.context===i[S]){d.lanes|=a,_=d.alternate,_!==null&&(_.lanes|=a),Id(d.return,a,t),l||(p=null);break e}d=_.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(r(341));p.lanes|=a,d=p.alternate,d!==null&&(d.lanes|=a),Id(p,a,t),p=null}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===t){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function vr(t,i,a,l){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var _=u.type;Qt(u.pendingProps.value,p.value)||(t!==null?t.push(_):t=[_])}}else if(u===ae.current){if(p=u.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}u=u.return}t!==null&&Od(i,t,a,l),i.flags|=262144}function Po(t){for(t=t.firstContext;t!==null;){if(!Qt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){Cs=t,ti=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vt(t){return Ig(Cs,t)}function Uo(t,i){return Cs===null&&As(t),Ig(t,i)}function Ig(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},ti===null){if(t===null)throw Error(r(308));ti=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ti=ti.next=i;return a}var cw=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},uw=s.unstable_scheduleCallback,dw=s.unstable_NormalPriority,Je={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new cw,data:new Map,refCount:0}}function Oa(t){t.refCount--,t.refCount===0&&uw(dw,function(){t.controller.abort()})}var ka=null,Dd=0,br=0,Er=null;function hw(t,i){if(ka===null){var a=ka=[];Dd=0,br=Ph(),Er={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Dd++,i.then(Og,Og),i}function Og(){if(--Dd===0&&ka!==null){Er!==null&&(Er.status="fulfilled");var t=ka;ka=null,br=0,Er=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function fw(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var kg=O.S;O.S=function(t,i){my=Gt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&hw(t,i),kg!==null&&kg(t,i)};var Ns=w(null);function Md(){var t=Ns.current;return t!==null?t:Oe.pooledCache}function zo(t,i){i===null?U(Ns,Ns.current):U(Ns,i.pool)}function Dg(){var t=Md();return t===null?null:{parent:Je._currentValue,pool:t}}var Sr=Error(r(460)),Ld=Error(r(474)),jo=Error(r(542)),Ho={then:function(){}};function Mg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Zn,Zn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ug(t),t;default:if(typeof i.status=="string")i.then(Zn,Zn);else{if(t=Oe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ug(t),t}throw xs=i,Sr}}function Rs(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,Sr):a}}var xs=null;function Pg(){if(xs===null)throw Error(r(459));var t=xs;return xs=null,t}function Ug(t){if(t===Sr||t===jo)throw Error(r(483))}var wr=null,Da=0;function Bo(t){var i=Da;return Da+=1,wr===null&&(wr=[]),Lg(wr,t,i)}function Ma(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Vo(t,i){throw i.$$typeof===E?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function zg(t){function i(C,T){if(t){var A=C.deletions;A===null?(C.deletions=[T],C.flags|=16):A.push(T)}}function a(C,T){if(!t)return null;for(;T!==null;)i(C,T),T=T.sibling;return null}function l(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function u(C,T){return C=$n(C,T),C.index=0,C.sibling=null,C}function d(C,T,A){return C.index=A,t?(A=C.alternate,A!==null?(A=A.index,A<T?(C.flags|=67108866,T):A):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function p(C){return t&&C.alternate===null&&(C.flags|=67108866),C}function _(C,T,A,M){return T===null||T.tag!==6?(T=wd(A,C.mode,M),T.return=C,T):(T=u(T,A),T.return=C,T)}function S(C,T,A,M){var Y=A.type;return Y===G?I(C,T,A.props.children,M,A.key):T!==null&&(T.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Tt&&Rs(Y)===T.type)?(T=u(T,A.props),Ma(T,A),T.return=C,T):(T=Mo(A.type,A.key,A.props,null,C.mode,M),Ma(T,A),T.return=C,T)}function N(C,T,A,M){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=Td(A,C.mode,M),T.return=C,T):(T=u(T,A.children||[]),T.return=C,T)}function I(C,T,A,M,Y){return T===null||T.tag!==7?(T=ws(A,C.mode,M,Y),T.return=C,T):(T=u(T,A),T.return=C,T)}function L(C,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=wd(""+T,C.mode,A),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case k:return A=Mo(T.type,T.key,T.props,null,C.mode,A),Ma(A,T),A.return=C,A;case j:return T=Td(T,C.mode,A),T.return=C,T;case Tt:return T=Rs(T),L(C,T,A)}if(It(T)||it(T))return T=ws(T,C.mode,A,null),T.return=C,T;if(typeof T.then=="function")return L(C,Bo(T),A);if(T.$$typeof===ie)return L(C,Uo(C,T),A);Vo(C,T)}return null}function R(C,T,A,M){var Y=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return Y!==null?null:_(C,T,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case k:return A.key===Y?S(C,T,A,M):null;case j:return A.key===Y?N(C,T,A,M):null;case Tt:return A=Rs(A),R(C,T,A,M)}if(It(A)||it(A))return Y!==null?null:I(C,T,A,M,null);if(typeof A.then=="function")return R(C,T,Bo(A),M);if(A.$$typeof===ie)return R(C,T,Uo(C,A),M);Vo(C,A)}return null}function x(C,T,A,M,Y){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return C=C.get(A)||null,_(T,C,""+M,Y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case k:return C=C.get(M.key===null?A:M.key)||null,S(T,C,M,Y);case j:return C=C.get(M.key===null?A:M.key)||null,N(T,C,M,Y);case Tt:return M=Rs(M),x(C,T,A,M,Y)}if(It(M)||it(M))return C=C.get(A)||null,I(T,C,M,Y,null);if(typeof M.then=="function")return x(C,T,A,Bo(M),Y);if(M.$$typeof===ie)return x(C,T,A,Uo(T,M),Y);Vo(T,M)}return null}function q(C,T,A,M){for(var Y=null,ye=null,F=T,re=T=0,ge=null;F!==null&&re<A.length;re++){F.index>re?(ge=F,F=null):ge=F.sibling;var ve=R(C,F,A[re],M);if(ve===null){F===null&&(F=ge);break}t&&F&&ve.alternate===null&&i(C,F),T=d(ve,T,re),ye===null?Y=ve:ye.sibling=ve,ye=ve,F=ge}if(re===A.length)return a(C,F),_e&&ei(C,re),Y;if(F===null){for(;re<A.length;re++)F=L(C,A[re],M),F!==null&&(T=d(F,T,re),ye===null?Y=F:ye.sibling=F,ye=F);return _e&&ei(C,re),Y}for(F=l(F);re<A.length;re++)ge=x(F,C,re,A[re],M),ge!==null&&(t&&ge.alternate!==null&&F.delete(ge.key===null?re:ge.key),T=d(ge,T,re),ye===null?Y=ge:ye.sibling=ge,ye=ge);return t&&F.forEach(function(Qi){return i(C,Qi)}),_e&&ei(C,re),Y}function W(C,T,A,M){if(A==null)throw Error(r(151));for(var Y=null,ye=null,F=T,re=T=0,ge=null,ve=A.next();F!==null&&!ve.done;re++,ve=A.next()){F.index>re?(ge=F,F=null):ge=F.sibling;var Qi=R(C,F,ve.value,M);if(Qi===null){F===null&&(F=ge);break}t&&F&&Qi.alternate===null&&i(C,F),T=d(Qi,T,re),ye===null?Y=Qi:ye.sibling=Qi,ye=Qi,F=ge}if(ve.done)return a(C,F),_e&&ei(C,re),Y;if(F===null){for(;!ve.done;re++,ve=A.next())ve=L(C,ve.value,M),ve!==null&&(T=d(ve,T,re),ye===null?Y=ve:ye.sibling=ve,ye=ve);return _e&&ei(C,re),Y}for(F=l(F);!ve.done;re++,ve=A.next())ve=x(F,C,re,ve.value,M),ve!==null&&(t&&ve.alternate!==null&&F.delete(ve.key===null?re:ve.key),T=d(ve,T,re),ye===null?Y=ve:ye.sibling=ve,ye=ve);return t&&F.forEach(function(TT){return i(C,TT)}),_e&&ei(C,re),Y}function Ie(C,T,A,M){if(typeof A=="object"&&A!==null&&A.type===G&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case k:e:{for(var Y=A.key;T!==null;){if(T.key===Y){if(Y=A.type,Y===G){if(T.tag===7){a(C,T.sibling),M=u(T,A.props.children),M.return=C,C=M;break e}}else if(T.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Tt&&Rs(Y)===T.type){a(C,T.sibling),M=u(T,A.props),Ma(M,A),M.return=C,C=M;break e}a(C,T);break}else i(C,T);T=T.sibling}A.type===G?(M=ws(A.props.children,C.mode,M,A.key),M.return=C,C=M):(M=Mo(A.type,A.key,A.props,null,C.mode,M),Ma(M,A),M.return=C,C=M)}return p(C);case j:e:{for(Y=A.key;T!==null;){if(T.key===Y)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){a(C,T.sibling),M=u(T,A.children||[]),M.return=C,C=M;break e}else{a(C,T);break}else i(C,T);T=T.sibling}M=Td(A,C.mode,M),M.return=C,C=M}return p(C);case Tt:return A=Rs(A),Ie(C,T,A,M)}if(It(A))return q(C,T,A,M);if(it(A)){if(Y=it(A),typeof Y!="function")throw Error(r(150));return A=Y.call(A),W(C,T,A,M)}if(typeof A.then=="function")return Ie(C,T,Bo(A),M);if(A.$$typeof===ie)return Ie(C,T,Uo(C,A),M);Vo(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(a(C,T.sibling),M=u(T,A),M.return=C,C=M):(a(C,T),M=wd(A,C.mode,M),M.return=C,C=M),p(C)):a(C,T)}return function(C,T,A,M){try{Da=0;var Y=Ie(C,T,A,M);return wr=null,Y}catch(F){if(F===Sr||F===jo)throw F;var ye=Kt(29,F,null,C.mode);return ye.lanes=M,ye.return=C,ye}finally{}}}var Is=zg(!0),jg=zg(!1),Oi=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ud(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ki(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Di(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Se&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Do(t),Sg(t,null,a),i}return ko(t,l,i,a),Do(t)}function La(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Im(t,a)}}function zd(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=p:d=d.next=p,a=a.next}while(a!==null);d===null?u=d=i:d=d.next=i}else u=d=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var jd=!1;function Pa(){if(jd){var t=Er;if(t!==null)throw t}}function Ua(t,i,a,l){jd=!1;var u=t.updateQueue;Oi=!1;var d=u.firstBaseUpdate,p=u.lastBaseUpdate,_=u.shared.pending;if(_!==null){u.shared.pending=null;var S=_,N=S.next;S.next=null,p===null?d=N:p.next=N,p=S;var I=t.alternate;I!==null&&(I=I.updateQueue,_=I.lastBaseUpdate,_!==p&&(_===null?I.firstBaseUpdate=N:_.next=N,I.lastBaseUpdate=S))}if(d!==null){var L=u.baseState;p=0,I=N=S=null,_=d;do{var R=_.lane&-536870913,x=R!==_.lane;if(x?(me&R)===R:(l&R)===R){R!==0&&R===br&&(jd=!0),I!==null&&(I=I.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var q=t,W=_;R=i;var Ie=a;switch(W.tag){case 1:if(q=W.payload,typeof q=="function"){L=q.call(Ie,L,R);break e}L=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=W.payload,R=typeof q=="function"?q.call(Ie,L,R):q,R==null)break e;L=y({},L,R);break e;case 2:Oi=!0}}R=_.callback,R!==null&&(t.flags|=64,x&&(t.flags|=8192),x=u.callbacks,x===null?u.callbacks=[R]:x.push(R))}else x={lane:R,tag:_.tag,payload:_.payload,callback:_.callback,next:null},I===null?(N=I=x,S=L):I=I.next=x,p|=R;if(_=_.next,_===null){if(_=u.shared.pending,_===null)break;x=_,_=x.next,x.next=null,u.lastBaseUpdate=x,u.shared.pending=null}}while(!0);I===null&&(S=L),u.baseState=S,u.firstBaseUpdate=N,u.lastBaseUpdate=I,d===null&&(u.shared.lanes=0),zi|=p,t.lanes=p,t.memoizedState=L}}function Hg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Bg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Hg(a[t],i)}var Tr=w(null),qo=w(0);function Vg(t,i){t=di,U(qo,t),U(Tr,i),di=t|i.baseLanes}function Hd(){U(qo,di),U(Tr,Tr.current)}function Bd(){di=qo.current,D(Tr),D(qo)}var Xt=w(null),gn=null;function Mi(t){var i=t.alternate;U(Xe,Xe.current&1),U(Xt,t),gn===null&&(i===null||Tr.current!==null||i.memoizedState!==null)&&(gn=t)}function Vd(t){U(Xe,Xe.current),U(Xt,t),gn===null&&(gn=t)}function qg(t){t.tag===22?(U(Xe,Xe.current),U(Xt,t),gn===null&&(gn=t)):Li()}function Li(){U(Xe,Xe.current),U(Xt,Xt.current)}function Zt(t){D(Xt),gn===t&&(gn=null),D(Xe)}var Xe=w(0);function Fo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qh(a)||Kh(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ii=0,se=null,Re=null,$e=null,Go=!1,Cr=!1,Os=!1,Yo=0,za=0,Ar=null,pw=0;function Ge(){throw Error(r(321))}function qd(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Qt(t[a],i[a]))return!1;return!0}function Fd(t,i,a,l,u,d){return ii=d,se=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=t===null||t.memoizedState===null?A_:rh,Os=!1,d=a(l,u),Os=!1,Cr&&(d=Gg(i,a,l,u)),Fg(t),d}function Fg(t){O.H=Ba;var i=Re!==null&&Re.next!==null;if(ii=0,$e=Re=se=null,Go=!1,za=0,Ar=null,i)throw Error(r(300));t===null||et||(t=t.dependencies,t!==null&&Po(t)&&(et=!0))}function Gg(t,i,a,l){se=t;var u=0;do{if(Cr&&(Ar=null),za=0,Cr=!1,25<=u)throw Error(r(301));if(u+=1,$e=Re=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=N_,d=i(a,l)}while(Cr);return d}function mw(){var t=O.H,i=t.useState()[0];return i=typeof i.then=="function"?ja(i):i,t=t.useState()[0],(Re!==null?Re.memoizedState:null)!==t&&(se.flags|=1024),i}function Gd(){var t=Yo!==0;return Yo=0,t}function Yd(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Wd(t){if(Go){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Go=!1}ii=0,$e=Re=se=null,Cr=!1,za=Yo=0,Ar=null}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?se.memoizedState=$e=t:$e=$e.next=t,$e}function Ze(){if(Re===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var i=$e===null?se.memoizedState:$e.next;if(i!==null)$e=i,Re=t;else{if(t===null)throw se.alternate===null?Error(r(467)):Error(r(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},$e===null?se.memoizedState=$e=t:$e=$e.next=t}return $e}function Wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ja(t){var i=za;return za+=1,Ar===null&&(Ar=[]),t=Lg(Ar,t,i),i=se,($e===null?i.memoizedState:$e.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?A_:rh),t}function Qo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ja(t);if(t.$$typeof===ie)return vt(t)}throw Error(r(438,String(t)))}function Qd(t){var i=null,a=se.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Wo(),se.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=wi;return i.index++,a}function si(t,i){return typeof i=="function"?i(t):i}function Ko(t){var i=Ze();return Kd(i,Re,t)}function Kd(t,i,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var u=t.baseQueue,d=l.pending;if(d!==null){if(u!==null){var p=u.next;u.next=d.next,d.next=p}i.baseQueue=u=d,l.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var _=p=null,S=null,N=i,I=!1;do{var L=N.lane&-536870913;if(L!==N.lane?(me&L)===L:(ii&L)===L){var R=N.revertLane;if(R===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),L===br&&(I=!0);else if((ii&R)===R){N=N.next,R===br&&(I=!0);continue}else L={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(_=S=L,p=d):S=S.next=L,se.lanes|=R,zi|=R;L=N.action,Os&&a(d,L),d=N.hasEagerState?N.eagerState:a(d,L)}else R={lane:L,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(_=S=R,p=d):S=S.next=R,se.lanes|=L,zi|=L;N=N.next}while(N!==null&&N!==i);if(S===null?p=d:S.next=_,!Qt(d,t.memoizedState)&&(et=!0,I&&(a=Er,a!==null)))throw a;t.memoizedState=d,t.baseState=p,t.baseQueue=S,l.lastRenderedState=d}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Xd(t){var i=Ze(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,d=i.memoizedState;if(u!==null){a.pending=null;var p=u=u.next;do d=t(d,p.action),p=p.next;while(p!==u);Qt(d,i.memoizedState)||(et=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Yg(t,i,a){var l=se,u=Ze(),d=_e;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=i();var p=!Qt((Re||u).memoizedState,a);if(p&&(u.memoizedState=a,et=!0),u=u.queue,$d(Kg.bind(null,l,u,t),[t]),u.getSnapshot!==i||p||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,Nr(9,{destroy:void 0},Qg.bind(null,l,u,a,i),null),Oe===null)throw Error(r(349));d||(ii&127)!==0||Wg(l,i,a)}return a}function Wg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=se.updateQueue,i===null?(i=Wo(),se.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Qg(t,i,a,l){i.value=a,i.getSnapshot=l,Xg(i)&&Zg(t)}function Kg(t,i,a){return a(function(){Xg(i)&&Zg(t)})}function Xg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Qt(t,a)}catch{return!0}}function Zg(t){var i=Ss(t,2);i!==null&&Ut(i,t,2)}function Zd(t){var i=Rt();if(typeof t=="function"){var a=t;if(t=a(),Os){Ti(!0);try{a()}finally{Ti(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:t},i}function Jg(t,i,a,l){return t.baseState=a,Kd(t,Re,typeof l=="function"?l:si)}function gw(t,i,a,l,u){if(Jo(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){d.listeners.push(p)}};O.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,$g(i,d)):(d.next=a.next,i.pending=a.next=d)}}function $g(t,i){var a=i.action,l=i.payload,u=t.state;if(i.isTransition){var d=O.T,p={};O.T=p;try{var _=a(u,l),S=O.S;S!==null&&S(p,_),e_(t,i,_)}catch(N){Jd(t,i,N)}finally{d!==null&&p.types!==null&&(d.types=p.types),O.T=d}}else try{d=a(u,l),e_(t,i,d)}catch(N){Jd(t,i,N)}}function e_(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){t_(t,i,l)},function(l){return Jd(t,i,l)}):t_(t,i,a)}function t_(t,i,a){i.status="fulfilled",i.value=a,n_(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,$g(t,a)))}function Jd(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,n_(i),i=i.next;while(i!==l)}t.action=null}function n_(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function i_(t,i){return i}function s_(t,i){if(_e){var a=Oe.formState;if(a!==null){e:{var l=se;if(_e){if(ze){t:{for(var u=ze,d=mn;u.nodeType!==8;){if(!d){u=null;break t}if(u=_n(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){ze=_n(u.nextSibling),l=u.data==="F!";break e}}xi(l)}l=!1}l&&(i=a[0])}}return a=Rt(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i_,lastRenderedState:i},a.queue=l,a=w_.bind(null,se,l),l.dispatch=a,l=Zd(!1),d=sh.bind(null,se,!1,l.queue),l=Rt(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,a=gw.bind(null,se,u,d,a),u.dispatch=a,l.memoizedState=t,[i,a,!1]}function r_(t){var i=Ze();return a_(i,Re,t)}function a_(t,i,a){if(i=Kd(t,i,i_)[0],t=Ko(si)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ja(i)}catch(p){throw p===Sr?jo:p}else l=i;i=Ze();var u=i.queue,d=u.dispatch;return a!==i.memoizedState&&(se.flags|=2048,Nr(9,{destroy:void 0},_w.bind(null,u,a),null)),[l,d,t]}function _w(t,i){t.action=i}function l_(t){var i=Ze(),a=Re;if(a!==null)return a_(i,a,t);Ze(),i=i.memoizedState,a=Ze();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Nr(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=se.updateQueue,i===null&&(i=Wo(),se.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function o_(){return Ze().memoizedState}function Xo(t,i,a,l){var u=Rt();se.flags|=t,u.memoizedState=Nr(1|i,{destroy:void 0},a,l===void 0?null:l)}function Zo(t,i,a,l){var u=Ze();l=l===void 0?null:l;var d=u.memoizedState.inst;Re!==null&&l!==null&&qd(l,Re.memoizedState.deps)?u.memoizedState=Nr(i,d,a,l):(se.flags|=t,u.memoizedState=Nr(1|i,d,a,l))}function c_(t,i){Xo(8390656,8,t,i)}function $d(t,i){Zo(2048,8,t,i)}function yw(t){se.flags|=4;var i=se.updateQueue;if(i===null)i=Wo(),se.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function u_(t){var i=Ze().memoizedState;return yw({ref:i,nextImpl:t}),function(){if((Se&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function d_(t,i){return Zo(4,2,t,i)}function h_(t,i){return Zo(4,4,t,i)}function f_(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function p_(t,i,a){a=a!=null?a.concat([t]):null,Zo(4,4,f_.bind(null,i,t),a)}function eh(){}function m_(t,i){var a=Ze();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&qd(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function g_(t,i){var a=Ze();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&qd(i,l[1]))return l[0];if(l=t(),Os){Ti(!0);try{t()}finally{Ti(!1)}}return a.memoizedState=[l,i],l}function th(t,i,a){return a===void 0||(ii&1073741824)!==0&&(me&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=_y(),se.lanes|=t,zi|=t,a)}function __(t,i,a,l){return Qt(a,i)?a:Tr.current!==null?(t=th(t,a,l),Qt(t,i)||(et=!0),t):(ii&42)===0||(ii&1073741824)!==0&&(me&261930)===0?(et=!0,t.memoizedState=a):(t=_y(),se.lanes|=t,zi|=t,i)}function y_(t,i,a,l,u){var d=P.p;P.p=d!==0&&8>d?d:8;var p=O.T,_={};O.T=_,sh(t,!1,i,a);try{var S=u(),N=O.S;if(N!==null&&N(_,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var I=fw(S,l);Ha(t,i,I,en(t))}else Ha(t,i,l,en(t))}catch(L){Ha(t,i,{then:function(){},status:"rejected",reason:L},en())}finally{P.p=d,p!==null&&_.types!==null&&(p.types=_.types),O.T=p}}function vw(){}function nh(t,i,a,l){if(t.tag!==5)throw Error(r(476));var u=v_(t).queue;y_(t,u,i,V,a===null?vw:function(){return b_(t),a(l)})}function v_(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:V},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function b_(t){var i=v_(t);i.next===null&&(i=t.alternate.memoizedState),Ha(t,i.next.queue,{},en())}function ih(){return vt(il)}function E_(){return Ze().memoizedState}function S_(){return Ze().memoizedState}function bw(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=en();t=ki(a);var l=Di(i,t,a);l!==null&&(Ut(l,i,a),La(l,i,a)),i={cache:kd()},t.payload=i;return}i=i.return}}function Ew(t,i,a){var l=en();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Jo(t)?T_(i,a):(a=Ed(t,i,a,l),a!==null&&(Ut(a,t,l),C_(a,i,l)))}function w_(t,i,a){var l=en();Ha(t,i,a,l)}function Ha(t,i,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jo(t))T_(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var p=i.lastRenderedState,_=d(p,a);if(u.hasEagerState=!0,u.eagerState=_,Qt(_,p))return ko(t,i,u,0),Oe===null&&Oo(),!1}catch{}finally{}if(a=Ed(t,i,u,l),a!==null)return Ut(a,t,l),C_(a,i,l),!0}return!1}function sh(t,i,a,l){if(l={lane:2,revertLane:Ph(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Jo(t)){if(i)throw Error(r(479))}else i=Ed(t,a,l,2),i!==null&&Ut(i,t,2)}function Jo(t){var i=t.alternate;return t===se||i!==null&&i===se}function T_(t,i){Cr=Go=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function C_(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Im(t,a)}}var Ba={readContext:vt,use:Qo,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Ba.useEffectEvent=Ge;var A_={readContext:vt,use:Qo,useCallback:function(t,i){return Rt().memoizedState=[t,i===void 0?null:i],t},useContext:vt,useEffect:c_,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Xo(4194308,4,f_.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Xo(4194308,4,t,i)},useInsertionEffect:function(t,i){Xo(4,2,t,i)},useMemo:function(t,i){var a=Rt();i=i===void 0?null:i;var l=t();if(Os){Ti(!0);try{t()}finally{Ti(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=Rt();if(a!==void 0){var u=a(i);if(Os){Ti(!0);try{a(i)}finally{Ti(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=Ew.bind(null,se,t),[l.memoizedState,t]},useRef:function(t){var i=Rt();return t={current:t},i.memoizedState=t},useState:function(t){t=Zd(t);var i=t.queue,a=w_.bind(null,se,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:eh,useDeferredValue:function(t,i){var a=Rt();return th(a,t,i)},useTransition:function(){var t=Zd(!1);return t=y_.bind(null,se,t.queue,!0,!1),Rt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=se,u=Rt();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),Oe===null)throw Error(r(349));(me&127)!==0||Wg(l,i,a)}u.memoizedState=a;var d={value:a,getSnapshot:i};return u.queue=d,c_(Kg.bind(null,l,d,t),[t]),l.flags|=2048,Nr(9,{destroy:void 0},Qg.bind(null,l,d,a,i),null),a},useId:function(){var t=Rt(),i=Oe.identifierPrefix;if(_e){var a=zn,l=Un;a=(l&~(1<<32-Wt(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Yo++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=pw++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:ih,useFormState:s_,useActionState:s_,useOptimistic:function(t){var i=Rt();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=sh.bind(null,se,!0,a),a.dispatch=i,[t,i]},useMemoCache:Qd,useCacheRefresh:function(){return Rt().memoizedState=bw.bind(null,se)},useEffectEvent:function(t){var i=Rt(),a={impl:t};return i.memoizedState=a,function(){if((Se&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},rh={readContext:vt,use:Qo,useCallback:m_,useContext:vt,useEffect:$d,useImperativeHandle:p_,useInsertionEffect:d_,useLayoutEffect:h_,useMemo:g_,useReducer:Ko,useRef:o_,useState:function(){return Ko(si)},useDebugValue:eh,useDeferredValue:function(t,i){var a=Ze();return __(a,Re.memoizedState,t,i)},useTransition:function(){var t=Ko(si)[0],i=Ze().memoizedState;return[typeof t=="boolean"?t:ja(t),i]},useSyncExternalStore:Yg,useId:E_,useHostTransitionStatus:ih,useFormState:r_,useActionState:r_,useOptimistic:function(t,i){var a=Ze();return Jg(a,Re,t,i)},useMemoCache:Qd,useCacheRefresh:S_};rh.useEffectEvent=u_;var N_={readContext:vt,use:Qo,useCallback:m_,useContext:vt,useEffect:$d,useImperativeHandle:p_,useInsertionEffect:d_,useLayoutEffect:h_,useMemo:g_,useReducer:Xd,useRef:o_,useState:function(){return Xd(si)},useDebugValue:eh,useDeferredValue:function(t,i){var a=Ze();return Re===null?th(a,t,i):__(a,Re.memoizedState,t,i)},useTransition:function(){var t=Xd(si)[0],i=Ze().memoizedState;return[typeof t=="boolean"?t:ja(t),i]},useSyncExternalStore:Yg,useId:E_,useHostTransitionStatus:ih,useFormState:l_,useActionState:l_,useOptimistic:function(t,i){var a=Ze();return Re!==null?Jg(a,Re,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qd,useCacheRefresh:S_};N_.useEffectEvent=u_;function ah(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:y({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var lh={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=en(),u=ki(l);u.payload=i,a!=null&&(u.callback=a),i=Di(t,u,l),i!==null&&(Ut(i,t,l),La(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=en(),u=ki(l);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=Di(t,u,l),i!==null&&(Ut(i,t,l),La(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=en(),l=ki(a);l.tag=2,i!=null&&(l.callback=i),i=Di(t,l,a),i!==null&&(Ut(i,t,a),La(i,t,a))}};function R_(t,i,a,l,u,d,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,p):i.prototype&&i.prototype.isPureReactComponent?!Na(a,l)||!Na(u,d):!0}function x_(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&lh.enqueueReplaceState(i,i.state,null)}function ks(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=y({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function I_(t){Io(t)}function O_(t){console.error(t)}function k_(t){Io(t)}function $o(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function D_(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function oh(t,i,a){return a=ki(a),a.tag=3,a.payload={element:null},a.callback=function(){$o(t,i)},a}function M_(t){return t=ki(t),t.tag=3,t}function L_(t,i,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;t.payload=function(){return u(d)},t.callback=function(){D_(i,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){D_(i,a,l),typeof u!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function Sw(t,i,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&vr(i,a,u,!0),a=Xt.current,a!==null){switch(a.tag){case 31:case 13:return gn===null?dc():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Ho?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Dh(t,l,u)),!1;case 22:return a.flags|=65536,l===Ho?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Dh(t,l,u)),!1}throw Error(r(435,a.tag))}return Dh(t,l,u),dc(),!1}if(_e)return i=Xt.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==Nd&&(t=Error(r(422),{cause:l}),Ia(hn(t,a)))):(l!==Nd&&(i=Error(r(423),{cause:l}),Ia(hn(i,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=hn(l,a),u=oh(t.stateNode,l,u),zd(t,u),Ye!==4&&(Ye=2)),!1;var d=Error(r(520),{cause:l});if(d=hn(d,a),Ka===null?Ka=[d]:Ka.push(d),Ye!==4&&(Ye=2),i===null)return!0;l=hn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=oh(a.stateNode,l,t),zd(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ji===null||!ji.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=M_(u),L_(u,t,a,l),zd(a,u),!1}a=a.return}while(a!==null);return!1}var ch=Error(r(461)),et=!1;function bt(t,i,a,l){i.child=t===null?jg(i,null,a,l):Is(i,t.child,a,l)}function P_(t,i,a,l,u){a=a.render;var d=i.ref;if("ref"in l){var p={};for(var _ in l)_!=="ref"&&(p[_]=l[_])}else p=l;return As(i),l=Fd(t,i,a,p,d,u),_=Gd(),t!==null&&!et?(Yd(t,i,u),ri(t,i,u)):(_e&&_&&Cd(i),i.flags|=1,bt(t,i,l,u),i.child)}function U_(t,i,a,l,u){if(t===null){var d=a.type;return typeof d=="function"&&!Sd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,z_(t,i,d,l,u)):(t=Mo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!_h(t,u)){var p=d.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(p,l)&&t.ref===i.ref)return ri(t,i,u)}return i.flags|=1,t=$n(d,l),t.ref=i.ref,t.return=i,i.child=t}function z_(t,i,a,l,u){if(t!==null){var d=t.memoizedProps;if(Na(d,l)&&t.ref===i.ref)if(et=!1,i.pendingProps=l=d,_h(t,u))(t.flags&131072)!==0&&(et=!0);else return i.lanes=t.lanes,ri(t,i,u)}return uh(t,i,a,l,u)}function j_(t,i,a,l){var u=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(l=i.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,i.child=null;return H_(t,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&zo(i,d!==null?d.cachePool:null),d!==null?Vg(i,d):Hd(),qg(i);else return l=i.lanes=536870912,H_(t,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(zo(i,d.cachePool),Vg(i,d),Li(),i.memoizedState=null):(t!==null&&zo(i,null),Hd(),Li());return bt(t,i,u,a),i.child}function Va(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function H_(t,i,a,l,u){var d=Md();return d=d===null?null:{parent:Je._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},t!==null&&zo(i,null),Hd(),qg(i),t!==null&&vr(t,i,l,!0),i.childLanes=u,null}function ec(t,i){return i=nc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function B_(t,i,a){return Is(i,t.child,null,a),t=ec(i,i.pendingProps),t.flags|=2,Zt(i),i.memoizedState=null,t}function ww(t,i,a){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(_e){if(l.mode==="hidden")return t=ec(i,l),i.lanes=536870912,Va(null,t);if(Vd(i),(t=ze)?(t=$y(t,mn),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ni!==null?{id:Un,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},a=Tg(t),a.return=i,i.child=a,yt=i,ze=null)):t=null,t===null)throw xi(i);return i.lanes=536870912,null}return ec(i,l)}var d=t.memoizedState;if(d!==null){var p=d.dehydrated;if(Vd(i),u)if(i.flags&256)i.flags&=-257,i=B_(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(et||vr(t,i,a,!1),u=(a&t.childLanes)!==0,et||u){if(l=Oe,l!==null&&(p=Om(l,a),p!==0&&p!==d.retryLane))throw d.retryLane=p,Ss(t,p),Ut(l,t,p),ch;dc(),i=B_(t,i,a)}else t=d.treeContext,ze=_n(p.nextSibling),yt=i,_e=!0,Ri=null,mn=!1,t!==null&&Ng(i,t),i=ec(i,l),i.flags|=4096;return i}return t=$n(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function tc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function uh(t,i,a,l,u){return As(i),a=Fd(t,i,a,l,void 0,u),l=Gd(),t!==null&&!et?(Yd(t,i,u),ri(t,i,u)):(_e&&l&&Cd(i),i.flags|=1,bt(t,i,a,u),i.child)}function V_(t,i,a,l,u,d){return As(i),i.updateQueue=null,a=Gg(i,l,a,u),Fg(t),l=Gd(),t!==null&&!et?(Yd(t,i,d),ri(t,i,d)):(_e&&l&&Cd(i),i.flags|=1,bt(t,i,a,d),i.child)}function q_(t,i,a,l,u){if(As(i),i.stateNode===null){var d=mr,p=a.contextType;typeof p=="object"&&p!==null&&(d=vt(p)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=lh,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Pd(i),p=a.contextType,d.context=typeof p=="object"&&p!==null?vt(p):mr,d.state=i.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(ah(i,a,p,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(p=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),p!==d.state&&lh.enqueueReplaceState(d,d.state,null),Ua(i,l,d,u),Pa(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var _=i.memoizedProps,S=ks(a,_);d.props=S;var N=d.context,I=a.contextType;p=mr,typeof I=="object"&&I!==null&&(p=vt(I));var L=a.getDerivedStateFromProps;I=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function",_=i.pendingProps!==_,I||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_||N!==p)&&x_(i,d,l,p),Oi=!1;var R=i.memoizedState;d.state=R,Ua(i,l,d,u),Pa(),N=i.memoizedState,_||R!==N||Oi?(typeof L=="function"&&(ah(i,a,L,l),N=i.memoizedState),(S=Oi||R_(i,a,S,l,R,N,p))?(I||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=N),d.props=l,d.state=N,d.context=p,l=S):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Ud(t,i),p=i.memoizedProps,I=ks(a,p),d.props=I,L=i.pendingProps,R=d.context,N=a.contextType,S=mr,typeof N=="object"&&N!==null&&(S=vt(N)),_=a.getDerivedStateFromProps,(N=typeof _=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==L||R!==S)&&x_(i,d,l,S),Oi=!1,R=i.memoizedState,d.state=R,Ua(i,l,d,u),Pa();var x=i.memoizedState;p!==L||R!==x||Oi||t!==null&&t.dependencies!==null&&Po(t.dependencies)?(typeof _=="function"&&(ah(i,a,_,l),x=i.memoizedState),(I=Oi||R_(i,a,I,l,R,x,S)||t!==null&&t.dependencies!==null&&Po(t.dependencies))?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,x,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,x,S)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===t.memoizedProps&&R===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&R===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=x),d.props=l,d.state=x,d.context=S,l=I):(typeof d.componentDidUpdate!="function"||p===t.memoizedProps&&R===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&R===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,tc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Is(i,t.child,null,u),i.child=Is(i,null,a,u)):bt(t,i,a,u),i.memoizedState=d.state,t=i.child):t=ri(t,i,u),t}function F_(t,i,a,l){return Ts(),i.flags|=256,bt(t,i,a,l),i.child}var dh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hh(t){return{baseLanes:t,cachePool:Dg()}}function fh(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=$t),t}function G_(t,i,a){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,p;if((p=d)||(p=t!==null&&t.memoizedState===null?!1:(Xe.current&2)!==0),p&&(u=!0,i.flags&=-129),p=(i.flags&32)!==0,i.flags&=-33,t===null){if(_e){if(u?Mi(i):Li(),(t=ze)?(t=$y(t,mn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ni!==null?{id:Un,overflow:zn}:null,retryLane:536870912,hydrationErrors:null},a=Tg(t),a.return=i,i.child=a,yt=i,ze=null)):t=null,t===null)throw xi(i);return Kh(t)?i.lanes=32:i.lanes=536870912,null}var _=l.children;return l=l.fallback,u?(Li(),u=i.mode,_=nc({mode:"hidden",children:_},u),l=ws(l,u,a,null),_.return=i,l.return=i,_.sibling=l,i.child=_,l=i.child,l.memoizedState=hh(a),l.childLanes=fh(t,p,a),i.memoizedState=dh,Va(null,l)):(Mi(i),ph(i,_))}var S=t.memoizedState;if(S!==null&&(_=S.dehydrated,_!==null)){if(d)i.flags&256?(Mi(i),i.flags&=-257,i=mh(t,i,a)):i.memoizedState!==null?(Li(),i.child=t.child,i.flags|=128,i=null):(Li(),_=l.fallback,u=i.mode,l=nc({mode:"visible",children:l.children},u),_=ws(_,u,a,null),_.flags|=2,l.return=i,_.return=i,l.sibling=_,i.child=l,Is(i,t.child,null,a),l=i.child,l.memoizedState=hh(a),l.childLanes=fh(t,p,a),i.memoizedState=dh,i=Va(null,l));else if(Mi(i),Kh(_)){if(p=_.nextSibling&&_.nextSibling.dataset,p)var N=p.dgst;p=N,l=Error(r(419)),l.stack="",l.digest=p,Ia({value:l,source:null,stack:null}),i=mh(t,i,a)}else if(et||vr(t,i,a,!1),p=(a&t.childLanes)!==0,et||p){if(p=Oe,p!==null&&(l=Om(p,a),l!==0&&l!==S.retryLane))throw S.retryLane=l,Ss(t,l),Ut(p,t,l),ch;Qh(_)||dc(),i=mh(t,i,a)}else Qh(_)?(i.flags|=192,i.child=t.child,i=null):(t=S.treeContext,ze=_n(_.nextSibling),yt=i,_e=!0,Ri=null,mn=!1,t!==null&&Ng(i,t),i=ph(i,l.children),i.flags|=4096);return i}return u?(Li(),_=l.fallback,u=i.mode,S=t.child,N=S.sibling,l=$n(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,N!==null?_=$n(N,_):(_=ws(_,u,a,null),_.flags|=2),_.return=i,l.return=i,l.sibling=_,i.child=l,Va(null,l),l=i.child,_=t.child.memoizedState,_===null?_=hh(a):(u=_.cachePool,u!==null?(S=Je._currentValue,u=u.parent!==S?{parent:S,pool:S}:u):u=Dg(),_={baseLanes:_.baseLanes|a,cachePool:u}),l.memoizedState=_,l.childLanes=fh(t,p,a),i.memoizedState=dh,Va(t.child,l)):(Mi(i),a=t.child,t=a.sibling,a=$n(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(p=i.deletions,p===null?(i.deletions=[t],i.flags|=16):p.push(t)),i.child=a,i.memoizedState=null,a)}function ph(t,i){return i=nc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function nc(t,i){return t=Kt(22,t,null,i),t.lanes=0,t}function mh(t,i,a){return Is(i,t.child,null,a),t=ph(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Y_(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Id(t.return,i,a)}function gh(t,i,a,l,u,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=u,p.treeForkCount=d)}function W_(t,i,a){var l=i.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var p=Xe.current,_=(p&2)!==0;if(_?(p=p&1|2,i.flags|=128):p&=1,U(Xe,p),bt(t,i,l,a),l=_e?xa:0,!_&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y_(t,a,i);else if(t.tag===19)Y_(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&Fo(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),gh(i,!1,u,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Fo(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}gh(i,!0,a,null,d,l);break;case"together":gh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ri(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),zi|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(vr(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,a=$n(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=$n(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function _h(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Po(t)))}function Tw(t,i,a){switch(i.tag){case 3:gt(i,i.stateNode.containerInfo),Ii(i,Je,t.memoizedState.cache),Ts();break;case 27:case 5:pa(i);break;case 4:gt(i,i.stateNode.containerInfo);break;case 10:Ii(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Vd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Mi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?G_(t,i,a):(Mi(i),t=ri(t,i,a),t!==null?t.sibling:null);Mi(i);break;case 19:var u=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(vr(t,i,a,!1),l=(a&i.childLanes)!==0),u){if(l)return W_(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),U(Xe,Xe.current),l)break;return null;case 22:return i.lanes=0,j_(t,i,a,i.pendingProps);case 24:Ii(i,Je,t.memoizedState.cache)}return ri(t,i,a)}function Q_(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)et=!0;else{if(!_h(t,a)&&(i.flags&128)===0)return et=!1,Tw(t,i,a);et=(t.flags&131072)!==0}else et=!1,_e&&(i.flags&1048576)!==0&&Ag(i,xa,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Rs(i.elementType),i.type=t,typeof t=="function")Sd(t)?(l=ks(t,l),i.tag=1,i=q_(null,i,t,l,a)):(i.tag=0,i=uh(null,i,t,l,a));else{if(t!=null){var u=t.$$typeof;if(u===we){i.tag=11,i=P_(null,i,t,l,a);break e}else if(u===oe){i.tag=14,i=U_(null,i,t,l,a);break e}}throw i=Ft(t)||t,Error(r(306,i,""))}}return i;case 0:return uh(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,u=ks(l,i.pendingProps),q_(t,i,l,u,a);case 3:e:{if(gt(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Ud(t,i),Ua(i,l,null,a);var p=i.memoizedState;if(l=p.cache,Ii(i,Je,l),l!==d.cache&&Od(i,[Je],a,!0),Pa(),l=p.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:p.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=F_(t,i,l,a);break e}else if(l!==u){u=hn(Error(r(424)),i),Ia(u),i=F_(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ze=_n(t.firstChild),yt=i,_e=!0,Ri=null,mn=!0,a=jg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ts(),l===u){i=ri(t,i,a);break e}bt(t,i,l,a)}i=i.child}return i;case 26:return tc(t,i),t===null?(a=rv(i.type,null,i.pendingProps,null))?i.memoizedState=a:_e||(a=i.type,t=i.pendingProps,l=yc(te.current).createElement(a),l[_t]=i,l[Ot]=t,Et(l,a,t),ot(l),i.stateNode=l):i.memoizedState=rv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return pa(i),t===null&&_e&&(l=i.stateNode=nv(i.type,i.pendingProps,te.current),yt=i,mn=!0,u=ze,qi(i.type)?(Xh=u,ze=_n(l.firstChild)):ze=u),bt(t,i,i.pendingProps.children,a),tc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&_e&&((u=l=ze)&&(l=eT(l,i.type,i.pendingProps,mn),l!==null?(i.stateNode=l,yt=i,ze=_n(l.firstChild),mn=!1,u=!0):u=!1),u||xi(i)),pa(i),u=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,l=d.children,Gh(u,d)?l=null:p!==null&&Gh(u,p)&&(i.flags|=32),i.memoizedState!==null&&(u=Fd(t,i,mw,null,null,a),il._currentValue=u),tc(t,i),bt(t,i,l,a),i.child;case 6:return t===null&&_e&&((t=a=ze)&&(a=tT(a,i.pendingProps,mn),a!==null?(i.stateNode=a,yt=i,ze=null,t=!0):t=!1),t||xi(i)),null;case 13:return G_(t,i,a);case 4:return gt(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Is(i,null,l,a):bt(t,i,l,a),i.child;case 11:return P_(t,i,i.type,i.pendingProps,a);case 7:return bt(t,i,i.pendingProps,a),i.child;case 8:return bt(t,i,i.pendingProps.children,a),i.child;case 12:return bt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ii(i,i.type,l.value),bt(t,i,l.children,a),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,As(i),u=vt(u),l=l(u),i.flags|=1,bt(t,i,l,a),i.child;case 14:return U_(t,i,i.type,i.pendingProps,a);case 15:return z_(t,i,i.type,i.pendingProps,a);case 19:return W_(t,i,a);case 31:return ww(t,i,a);case 22:return j_(t,i,a,i.pendingProps);case 24:return As(i),l=vt(Je),t===null?(u=Md(),u===null&&(u=Oe,d=kd(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),i.memoizedState={parent:l,cache:u},Pd(i),Ii(i,Je,u)):((t.lanes&a)!==0&&(Ud(t,i),Ua(i,null,null,a),Pa()),u=t.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ii(i,Je,l)):(l=d.cache,Ii(i,Je,l),l!==u.cache&&Od(i,[Je],a,!0))),bt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ai(t){t.flags|=4}function yh(t,i,a,l,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Ey())t.flags|=8192;else throw xs=Ho,Ld}else t.flags&=-16777217}function K_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!uv(i))if(Ey())t.flags|=8192;else throw xs=Ho,Ld}function ic(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Rm():536870912,t.lanes|=i,Or|=i)}function qa(t,i){if(!_e)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function je(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Cw(t,i,a){var l=i.pendingProps;switch(Ad(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ni(Je),Ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yr(i)?ai(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Rd())),je(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(ai(i),d!==null?(je(i),K_(i,d)):(je(i),yh(i,u,null,l,a))):d?d!==t.memoizedState?(ai(i),je(i),K_(i,d)):(je(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ai(i),je(i),yh(i,u,t,l,a)),null;case 27:if(po(i),a=te.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ai(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return je(i),null}t=B.current,yr(i)?Rg(i):(t=nv(u,l,a),i.stateNode=t,ai(i))}return je(i),null;case 5:if(po(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ai(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return je(i),null}if(d=B.current,yr(i))Rg(i);else{var p=yc(te.current);switch(d){case 1:d=p.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=p.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=p.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=p.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=p.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?p.createElement(u,{is:l.is}):p.createElement(u)}}d[_t]=i,d[Ot]=l;e:for(p=i.child;p!==null;){if(p.tag===5||p.tag===6)d.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===i)break e;for(;p.sibling===null;){if(p.return===null||p.return===i)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}i.stateNode=d;e:switch(Et(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ai(i)}}return je(i),yh(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ai(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=te.current,yr(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,u=yt,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[_t]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Gy(t.nodeValue,a)),t||xi(i,!0)}else t=yc(t).createTextNode(l),t[_t]=i,i.stateNode=t}return je(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(l=yr(i),a!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[_t]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),t=!1}else a=Rd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(Zt(i),i):(Zt(i),null);if((i.flags&128)!==0)throw Error(r(558))}return je(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=yr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[_t]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),u=!1}else u=Rd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Zt(i),i):(Zt(i),null)}return Zt(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),ic(i,i.updateQueue),je(i),null);case 4:return Ke(),t===null&&Hh(i.stateNode.containerInfo),je(i),null;case 10:return ni(i.type),je(i),null;case 19:if(D(Xe),l=i.memoizedState,l===null)return je(i),null;if(u=(i.flags&128)!==0,d=l.rendering,d===null)if(u)qa(l,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Fo(t),d!==null){for(i.flags|=128,qa(l,!1),t=d.updateQueue,i.updateQueue=t,ic(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)wg(a,t),a=a.sibling;return U(Xe,Xe.current&1|2),_e&&ei(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Gt()>oc&&(i.flags|=128,u=!0,qa(l,!1),i.lanes=4194304)}else{if(!u)if(t=Fo(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,ic(i,t),qa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!_e)return je(i),null}else 2*Gt()-l.renderingStartTime>oc&&a!==536870912&&(i.flags|=128,u=!0,qa(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Gt(),t.sibling=null,a=Xe.current,U(Xe,u?a&1|2:a&1),_e&&ei(i,l.treeForkCount),t):(je(i),null);case 22:case 23:return Zt(i),Bd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),a=i.updateQueue,a!==null&&ic(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&D(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ni(Je),je(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Aw(t,i){switch(Ad(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ni(Je),Ke(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return po(i),null;case 31:if(i.memoizedState!==null){if(Zt(i),i.alternate===null)throw Error(r(340));Ts()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Zt(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Ts()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return D(Xe),null;case 4:return Ke(),null;case 10:return ni(i.type),null;case 22:case 23:return Zt(i),Bd(),t!==null&&D(Ns),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ni(Je),null;case 25:return null;default:return null}}function X_(t,i){switch(Ad(i),i.tag){case 3:ni(Je),Ke();break;case 26:case 27:case 5:po(i);break;case 4:Ke();break;case 31:i.memoizedState!==null&&Zt(i);break;case 13:Zt(i);break;case 19:D(Xe);break;case 10:ni(i.type);break;case 22:case 23:Zt(i),Bd(),t!==null&&D(Ns);break;case 24:ni(Je)}}function Fa(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&t)===t){l=void 0;var d=a.create,p=a.inst;l=d(),p.destroy=l}a=a.next}while(a!==u)}}catch(_){Ae(i,i.return,_)}}function Pi(t,i,a){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&t)===t){var p=l.inst,_=p.destroy;if(_!==void 0){p.destroy=void 0,u=i;var S=a,N=_;try{N()}catch(I){Ae(u,S,I)}}}l=l.next}while(l!==d)}}catch(I){Ae(i,i.return,I)}}function Z_(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Bg(i,a)}catch(l){Ae(t,t.return,l)}}}function J_(t,i,a){a.props=ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ae(t,i,l)}}function Ga(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(u){Ae(t,i,u)}}function jn(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Ae(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ae(t,i,u)}else a.current=null}function $_(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Ae(t,t.return,u)}}function vh(t,i,a){try{var l=t.stateNode;Qw(l,t.type,a,i),l[Ot]=i}catch(u){Ae(t,t.return,u)}}function ey(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qi(t.type)||t.tag===4}function bh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ey(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eh(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Zn));else if(l!==4&&(l===27&&qi(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Eh(t,i,a),t=t.sibling;t!==null;)Eh(t,i,a),t=t.sibling}function sc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&qi(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(sc(t,i,a),t=t.sibling;t!==null;)sc(t,i,a),t=t.sibling}function ty(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Et(i,l,a),i[_t]=t,i[Ot]=a}catch(d){Ae(t,t.return,d)}}var li=!1,tt=!1,Sh=!1,ny=typeof WeakSet=="function"?WeakSet:Set,ct=null;function Nw(t,i){if(t=t.containerInfo,qh=Cc,t=pg(t),md(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var p=0,_=-1,S=-1,N=0,I=0,L=t,R=null;t:for(;;){for(var x;L!==a||u!==0&&L.nodeType!==3||(_=p+u),L!==d||l!==0&&L.nodeType!==3||(S=p+l),L.nodeType===3&&(p+=L.nodeValue.length),(x=L.firstChild)!==null;)R=L,L=x;for(;;){if(L===t)break t;if(R===a&&++N===u&&(_=p),R===d&&++I===l&&(S=p),(x=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=x}a=_===-1||S===-1?null:{start:_,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fh={focusedElem:t,selectionRange:a},Cc=!1,ct=i;ct!==null;)if(i=ct,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ct=t;else for(;ct!==null;){switch(i=ct,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,u=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var q=ks(a.type,u);t=l.getSnapshotBeforeUpdate(q,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(W){Ae(a,a.return,W)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Wh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,ct=t;break}ct=i.return}}function iy(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ci(t,a),l&4&&Fa(5,a);break;case 1:if(ci(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(p){Ae(a,a.return,p)}else{var u=ks(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Ae(a,a.return,p)}}l&64&&Z_(a),l&512&&Ga(a,a.return);break;case 3:if(ci(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Bg(t,i)}catch(p){Ae(a,a.return,p)}}break;case 27:i===null&&l&4&&ty(a);case 26:case 5:ci(t,a),i===null&&l&4&&$_(a),l&512&&Ga(a,a.return);break;case 12:ci(t,a);break;case 31:ci(t,a),l&4&&ay(t,a);break;case 13:ci(t,a),l&4&&ly(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Pw.bind(null,a),nT(t,a))));break;case 22:if(l=a.memoizedState!==null||li,!l){i=i!==null&&i.memoizedState!==null||tt,u=li;var d=tt;li=l,(tt=i)&&!d?ui(t,a,(a.subtreeFlags&8772)!==0):ci(t,a),li=u,tt=d}break;case 30:break;default:ci(t,a)}}function sy(t){var i=t.alternate;i!==null&&(t.alternate=null,sy(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ju(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var He=null,Dt=!1;function oi(t,i,a){for(a=a.child;a!==null;)ry(t,i,a),a=a.sibling}function ry(t,i,a){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(ma,a)}catch{}switch(a.tag){case 26:tt||jn(a,i),oi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tt||jn(a,i);var l=He,u=Dt;qi(a.type)&&(He=a.stateNode,Dt=!1),oi(t,i,a),el(a.stateNode),He=l,Dt=u;break;case 5:tt||jn(a,i);case 6:if(l=He,u=Dt,He=null,oi(t,i,a),He=l,Dt=u,He!==null)if(Dt)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(d){Ae(a,i,d)}else try{He.removeChild(a.stateNode)}catch(d){Ae(a,i,d)}break;case 18:He!==null&&(Dt?(t=He,Zy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),jr(t)):Zy(He,a.stateNode));break;case 4:l=He,u=Dt,He=a.stateNode.containerInfo,Dt=!0,oi(t,i,a),He=l,Dt=u;break;case 0:case 11:case 14:case 15:Pi(2,a,i),tt||Pi(4,a,i),oi(t,i,a);break;case 1:tt||(jn(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&J_(a,i,l)),oi(t,i,a);break;case 21:oi(t,i,a);break;case 22:tt=(l=tt)||a.memoizedState!==null,oi(t,i,a),tt=l;break;default:oi(t,i,a)}}function ay(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{jr(t)}catch(a){Ae(i,i.return,a)}}}function ly(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jr(t)}catch(a){Ae(i,i.return,a)}}function Rw(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ny),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ny),i;default:throw Error(r(435,t.tag))}}function rc(t,i){var a=Rw(t);i.forEach(function(l){if(!a.has(l)){a.add(l);var u=Uw.bind(null,t,l);l.then(u,u)}})}function Mt(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],d=t,p=i,_=p;e:for(;_!==null;){switch(_.tag){case 27:if(qi(_.type)){He=_.stateNode,Dt=!1;break e}break;case 5:He=_.stateNode,Dt=!1;break e;case 3:case 4:He=_.stateNode.containerInfo,Dt=!0;break e}_=_.return}if(He===null)throw Error(r(160));ry(d,p,u),He=null,Dt=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)oy(i,t),i=i.sibling}var Rn=null;function oy(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mt(i,t),Lt(t),l&4&&(Pi(3,t,t.return),Fa(3,t),Pi(5,t,t.return));break;case 1:Mt(i,t),Lt(t),l&512&&(tt||a===null||jn(a,a.return)),l&64&&li&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Rn;if(Mt(i,t),Lt(t),l&512&&(tt||a===null||jn(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ya]||d[_t]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Et(d,l,a),d[_t]=t,ot(d),l=d;break e;case"link":var p=ov("link","href",u).get(l+(a.href||""));if(p){for(var _=0;_<p.length;_++)if(d=p[_],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(_,1);break t}}d=u.createElement(l),Et(d,l,a),u.head.appendChild(d);break;case"meta":if(p=ov("meta","content",u).get(l+(a.content||""))){for(_=0;_<p.length;_++)if(d=p[_],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(_,1);break t}}d=u.createElement(l),Et(d,l,a),u.head.appendChild(d);break;default:throw Error(r(468,l))}d[_t]=t,ot(d),l=d}t.stateNode=l}else cv(u,t.type,t.stateNode);else t.stateNode=lv(u,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?cv(u,t.type,t.stateNode):lv(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&vh(t,t.memoizedProps,a.memoizedProps)}break;case 27:Mt(i,t),Lt(t),l&512&&(tt||a===null||jn(a,a.return)),a!==null&&l&4&&vh(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Mt(i,t),Lt(t),l&512&&(tt||a===null||jn(a,a.return)),t.flags&32){u=t.stateNode;try{or(u,"")}catch(q){Ae(t,t.return,q)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,vh(t,u,a!==null?a.memoizedProps:u)),l&1024&&(Sh=!0);break;case 6:if(Mt(i,t),Lt(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(q){Ae(t,t.return,q)}}break;case 3:if(Ec=null,u=Rn,Rn=vc(i.containerInfo),Mt(i,t),Rn=u,Lt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{jr(i.containerInfo)}catch(q){Ae(t,t.return,q)}Sh&&(Sh=!1,cy(t));break;case 4:l=Rn,Rn=vc(t.stateNode.containerInfo),Mt(i,t),Lt(t),Rn=l;break;case 12:Mt(i,t),Lt(t);break;case 31:Mt(i,t),Lt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 13:Mt(i,t),Lt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lc=Gt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 22:u=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,N=li,I=tt;if(li=N||u,tt=I||S,Mt(i,t),tt=I,li=N,Lt(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||S||li||tt||Ds(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){S=a=i;try{if(d=S.stateNode,u)p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{_=S.stateNode;var L=S.memoizedProps.style,R=L!=null&&L.hasOwnProperty("display")?L.display:null;_.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(q){Ae(S,S.return,q)}}}else if(i.tag===6){if(a===null){S=i;try{S.stateNode.nodeValue=u?"":S.memoizedProps}catch(q){Ae(S,S.return,q)}}}else if(i.tag===18){if(a===null){S=i;try{var x=S.stateNode;u?Jy(x,!0):Jy(S.stateNode,!1)}catch(q){Ae(S,S.return,q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,rc(t,a))));break;case 19:Mt(i,t),Lt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,rc(t,l)));break;case 30:break;case 21:break;default:Mt(i,t),Lt(t)}}function Lt(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(ey(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=bh(t);sc(t,d,u);break;case 5:var p=a.stateNode;a.flags&32&&(or(p,""),a.flags&=-33);var _=bh(t);sc(t,_,p);break;case 3:case 4:var S=a.stateNode.containerInfo,N=bh(t);Eh(t,N,S);break;default:throw Error(r(161))}}catch(I){Ae(t,t.return,I)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function cy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;cy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ci(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)iy(t,i.alternate,i),i=i.sibling}function Ds(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Pi(4,i,i.return),Ds(i);break;case 1:jn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&J_(i,i.return,a),Ds(i);break;case 27:el(i.stateNode);case 26:case 5:jn(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}t=t.sibling}}function ui(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,d=i,p=d.flags;switch(d.tag){case 0:case 11:case 15:ui(u,d,a),Fa(4,d);break;case 1:if(ui(u,d,a),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(N){Ae(l,l.return,N)}if(l=d,u=l.updateQueue,u!==null){var _=l.stateNode;try{var S=u.shared.hiddenCallbacks;if(S!==null)for(u.shared.hiddenCallbacks=null,u=0;u<S.length;u++)Hg(S[u],_)}catch(N){Ae(l,l.return,N)}}a&&p&64&&Z_(d),Ga(d,d.return);break;case 27:ty(d);case 26:case 5:ui(u,d,a),a&&l===null&&p&4&&$_(d),Ga(d,d.return);break;case 12:ui(u,d,a);break;case 31:ui(u,d,a),a&&p&4&&ay(u,d);break;case 13:ui(u,d,a),a&&p&4&&ly(u,d);break;case 22:d.memoizedState===null&&ui(u,d,a),Ga(d,d.return);break;case 30:break;default:ui(u,d,a)}i=i.sibling}}function wh(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Oa(a))}function Th(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Oa(t))}function xn(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)uy(t,i,a,l),i=i.sibling}function uy(t,i,a,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:xn(t,i,a,l),u&2048&&Fa(9,i);break;case 1:xn(t,i,a,l);break;case 3:xn(t,i,a,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Oa(t)));break;case 12:if(u&2048){xn(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,p=d.id,_=d.onPostCommit;typeof _=="function"&&_(p,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Ae(i,i.return,S)}}else xn(t,i,a,l);break;case 31:xn(t,i,a,l);break;case 13:xn(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,p=i.alternate,i.memoizedState!==null?d._visibility&2?xn(t,i,a,l):Ya(t,i):d._visibility&2?xn(t,i,a,l):(d._visibility|=2,Rr(t,i,a,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&wh(p,i);break;case 24:xn(t,i,a,l),u&2048&&Th(i.alternate,i);break;default:xn(t,i,a,l)}}function Rr(t,i,a,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,p=i,_=a,S=l,N=p.flags;switch(p.tag){case 0:case 11:case 15:Rr(d,p,_,S,u),Fa(8,p);break;case 23:break;case 22:var I=p.stateNode;p.memoizedState!==null?I._visibility&2?Rr(d,p,_,S,u):Ya(d,p):(I._visibility|=2,Rr(d,p,_,S,u)),u&&N&2048&&wh(p.alternate,p);break;case 24:Rr(d,p,_,S,u),u&&N&2048&&Th(p.alternate,p);break;default:Rr(d,p,_,S,u)}i=i.sibling}}function Ya(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,u=l.flags;switch(l.tag){case 22:Ya(a,l),u&2048&&wh(l.alternate,l);break;case 24:Ya(a,l),u&2048&&Th(l.alternate,l);break;default:Ya(a,l)}i=i.sibling}}var Wa=8192;function xr(t,i,a){if(t.subtreeFlags&Wa)for(t=t.child;t!==null;)dy(t,i,a),t=t.sibling}function dy(t,i,a){switch(t.tag){case 26:xr(t,i,a),t.flags&Wa&&t.memoizedState!==null&&pT(a,Rn,t.memoizedState,t.memoizedProps);break;case 5:xr(t,i,a);break;case 3:case 4:var l=Rn;Rn=vc(t.stateNode.containerInfo),xr(t,i,a),Rn=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Wa,Wa=16777216,xr(t,i,a),Wa=l):xr(t,i,a));break;default:xr(t,i,a)}}function hy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Qa(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];ct=l,py(l,t)}hy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fy(t),t=t.sibling}function fy(t){switch(t.tag){case 0:case 11:case 15:Qa(t),t.flags&2048&&Pi(9,t,t.return);break;case 3:Qa(t);break;case 12:Qa(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,ac(t)):Qa(t);break;default:Qa(t)}}function ac(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];ct=l,py(l,t)}hy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Pi(8,i,i.return),ac(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ac(i));break;default:ac(i)}t=t.sibling}}function py(t,i){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:Pi(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Oa(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ct=l;else e:for(a=t;ct!==null;){l=ct;var u=l.sibling,d=l.return;if(sy(l),l===a){ct=null;break e}if(u!==null){u.return=d,ct=u;break e}ct=d}}}var xw={getCacheForType:function(t){var i=vt(Je),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return vt(Je).controller.signal}},Iw=typeof WeakMap=="function"?WeakMap:Map,Se=0,Oe=null,fe=null,me=0,Ce=0,Jt=null,Ui=!1,Ir=!1,Ch=!1,di=0,Ye=0,zi=0,Ms=0,Ah=0,$t=0,Or=0,Ka=null,Pt=null,Nh=!1,lc=0,my=0,oc=1/0,cc=null,ji=null,st=0,Hi=null,kr=null,hi=0,Rh=0,xh=null,gy=null,Xa=0,Ih=null;function en(){return(Se&2)!==0&&me!==0?me&-me:O.T!==null?Ph():km()}function _y(){if($t===0)if((me&536870912)===0||_e){var t=_o;_o<<=1,(_o&3932160)===0&&(_o=262144),$t=t}else $t=536870912;return t=Xt.current,t!==null&&(t.flags|=32),$t}function Ut(t,i,a){(t===Oe&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)&&(Dr(t,0),Bi(t,me,$t,!1)),_a(t,a),((Se&2)===0||t!==Oe)&&(t===Oe&&((Se&2)===0&&(Ms|=a),Ye===4&&Bi(t,me,$t,!1)),Hn(t))}function yy(t,i,a){if((Se&6)!==0)throw Error(r(327));var l=!a&&(i&127)===0&&(i&t.expiredLanes)===0||ga(t,i),u=l?Dw(t,i):kh(t,i,!0),d=l;do{if(u===0){Ir&&!l&&Bi(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!Ow(a)){u=kh(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){i=p;e:{var _=t;u=Ka;var S=_.current.memoizedState.isDehydrated;if(S&&(Dr(_,p).flags|=256),p=kh(_,p,!1),p!==2){if(Ch&&!S){_.errorRecoveryDisabledLanes|=d,Ms|=d,u=4;break e}d=Pt,Pt=u,d!==null&&(Pt===null?Pt=d:Pt.push.apply(Pt,d))}u=p}if(d=!1,u!==2)continue}}if(u===1){Dr(t,0),Bi(t,i,0,!0);break}e:{switch(l=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Bi(l,i,$t,!Ui);break e;case 2:Pt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=lc+300-Gt(),10<u)){if(Bi(l,i,$t,!Ui),vo(l,0,!0)!==0)break e;hi=i,l.timeoutHandle=Ky(vy.bind(null,l,a,Pt,cc,Nh,i,$t,Ms,Or,Ui,d,"Throttled",-0,0),u);break e}vy(l,a,Pt,cc,Nh,i,$t,Ms,Or,Ui,d,null,-0,0)}}break}while(!0);Hn(t)}function vy(t,i,a,l,u,d,p,_,S,N,I,L,R,x){if(t.timeoutHandle=-1,L=i.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zn},dy(i,d,L);var q=(d&62914560)===d?lc-Gt():(d&4194048)===d?my-Gt():0;if(q=mT(L,q),q!==null){hi=d,t.cancelPendingCommit=q(Ny.bind(null,t,i,d,a,l,u,p,_,S,I,L,null,R,x)),Bi(t,d,p,!N);return}}Ny(t,i,d,a,l,u,p,_,S)}function Ow(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],d=u.getSnapshot;u=u.value;try{if(!Qt(d(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bi(t,i,a,l){i&=~Ah,i&=~Ms,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var d=31-Wt(u),p=1<<d;l[d]=-1,u&=~p}a!==0&&xm(t,a,i)}function uc(){return(Se&6)===0?(Za(0),!1):!0}function Oh(){if(fe!==null){if(Ce===0)var t=fe.return;else t=fe,ti=Cs=null,Wd(t),wr=null,Da=0,t=fe;for(;t!==null;)X_(t.alternate,t),t=t.return;fe=null}}function Dr(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zw(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),hi=0,Oh(),Oe=t,fe=a=$n(t.current,null),me=i,Ce=0,Jt=null,Ui=!1,Ir=ga(t,i),Ch=!1,Or=$t=Ah=Ms=zi=Ye=0,Pt=Ka=null,Nh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Wt(l),d=1<<u;i|=t[u],l&=~d}return di=i,Oo(),a}function by(t,i){se=null,O.H=Ba,i===Sr||i===jo?(i=Pg(),Ce=3):i===Ld?(i=Pg(),Ce=4):Ce=i===ch?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Jt=i,fe===null&&(Ye=1,$o(t,hn(i,t.current)))}function Ey(){var t=Xt.current;return t===null?!0:(me&4194048)===me?gn===null:(me&62914560)===me||(me&536870912)!==0?t===gn:!1}function Sy(){var t=O.H;return O.H=Ba,t===null?Ba:t}function wy(){var t=O.A;return O.A=xw,t}function dc(){Ye=4,Ui||(me&4194048)!==me&&Xt.current!==null||(Ir=!0),(zi&134217727)===0&&(Ms&134217727)===0||Oe===null||Bi(Oe,me,$t,!1)}function kh(t,i,a){var l=Se;Se|=2;var u=Sy(),d=wy();(Oe!==t||me!==i)&&(cc=null,Dr(t,i)),i=!1;var p=Ye;e:do try{if(Ce!==0&&fe!==null){var _=fe,S=Jt;switch(Ce){case 8:Oh(),p=6;break e;case 3:case 2:case 9:case 6:Xt.current===null&&(i=!0);var N=Ce;if(Ce=0,Jt=null,Mr(t,_,S,N),a&&Ir){p=0;break e}break;default:N=Ce,Ce=0,Jt=null,Mr(t,_,S,N)}}kw(),p=Ye;break}catch(I){by(t,I)}while(!0);return i&&t.shellSuspendCounter++,ti=Cs=null,Se=l,O.H=u,O.A=d,fe===null&&(Oe=null,me=0,Oo()),p}function kw(){for(;fe!==null;)Ty(fe)}function Dw(t,i){var a=Se;Se|=2;var l=Sy(),u=wy();Oe!==t||me!==i?(cc=null,oc=Gt()+500,Dr(t,i)):Ir=ga(t,i);e:do try{if(Ce!==0&&fe!==null){i=fe;var d=Jt;t:switch(Ce){case 1:Ce=0,Jt=null,Mr(t,i,d,1);break;case 2:case 9:if(Mg(d)){Ce=0,Jt=null,Cy(i);break}i=function(){Ce!==2&&Ce!==9||Oe!==t||(Ce=7),Hn(t)},d.then(i,i);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:Mg(d)?(Ce=0,Jt=null,Cy(i)):(Ce=0,Jt=null,Mr(t,i,d,7));break;case 5:var p=null;switch(fe.tag){case 26:p=fe.memoizedState;case 5:case 27:var _=fe;if(p?uv(p):_.stateNode.complete){Ce=0,Jt=null;var S=_.sibling;if(S!==null)fe=S;else{var N=_.return;N!==null?(fe=N,hc(N)):fe=null}break t}}Ce=0,Jt=null,Mr(t,i,d,5);break;case 6:Ce=0,Jt=null,Mr(t,i,d,6);break;case 8:Oh(),Ye=6;break e;default:throw Error(r(462))}}Mw();break}catch(I){by(t,I)}while(!0);return ti=Cs=null,O.H=l,O.A=u,Se=a,fe!==null?0:(Oe=null,me=0,Oo(),Ye)}function Mw(){for(;fe!==null&&!i1();)Ty(fe)}function Ty(t){var i=Q_(t.alternate,t,di);t.memoizedProps=t.pendingProps,i===null?hc(t):fe=i}function Cy(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=V_(a,i,i.pendingProps,i.type,void 0,me);break;case 11:i=V_(a,i,i.pendingProps,i.type.render,i.ref,me);break;case 5:Wd(i);default:X_(a,i),i=fe=wg(i,di),i=Q_(a,i,di)}t.memoizedProps=t.pendingProps,i===null?hc(t):fe=i}function Mr(t,i,a,l){ti=Cs=null,Wd(i),wr=null,Da=0;var u=i.return;try{if(Sw(t,u,i,a,me)){Ye=1,$o(t,hn(a,t.current)),fe=null;return}}catch(d){if(u!==null)throw fe=u,d;Ye=1,$o(t,hn(a,t.current)),fe=null;return}i.flags&32768?(_e||l===1?t=!0:Ir||(me&536870912)!==0?t=!1:(Ui=t=!0,(l===2||l===9||l===3||l===6)&&(l=Xt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ay(i,t)):hc(i)}function hc(t){var i=t;do{if((i.flags&32768)!==0){Ay(i,Ui);return}t=i.return;var a=Cw(i.alternate,i,di);if(a!==null){fe=a;return}if(i=i.sibling,i!==null){fe=i;return}fe=i=t}while(i!==null);Ye===0&&(Ye=5)}function Ay(t,i){do{var a=Aw(t.alternate,t);if(a!==null){a.flags&=32767,fe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){fe=t;return}fe=t=a}while(t!==null);Ye=6,fe=null}function Ny(t,i,a,l,u,d,p,_,S){t.cancelPendingCommit=null;do fc();while(st!==0);if((Se&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=bd,f1(t,a,d,p,_,S),t===Oe&&(fe=Oe=null,me=0),kr=i,Hi=t,hi=a,Rh=d,xh=u,gy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zw(mo,function(){return ky(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,u=P.p,P.p=2,p=Se,Se|=4;try{Nw(t,i,a)}finally{Se=p,P.p=u,O.T=l}}st=1,Ry(),xy(),Iy()}}function Ry(){if(st===1){st=0;var t=Hi,i=kr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var l=P.p;P.p=2;var u=Se;Se|=4;try{oy(i,t);var d=Fh,p=pg(t.containerInfo),_=d.focusedElem,S=d.selectionRange;if(p!==_&&_&&_.ownerDocument&&fg(_.ownerDocument.documentElement,_)){if(S!==null&&md(_)){var N=S.start,I=S.end;if(I===void 0&&(I=N),"selectionStart"in _)_.selectionStart=N,_.selectionEnd=Math.min(I,_.value.length);else{var L=_.ownerDocument||document,R=L&&L.defaultView||window;if(R.getSelection){var x=R.getSelection(),q=_.textContent.length,W=Math.min(S.start,q),Ie=S.end===void 0?W:Math.min(S.end,q);!x.extend&&W>Ie&&(p=Ie,Ie=W,W=p);var C=hg(_,W),T=hg(_,Ie);if(C&&T&&(x.rangeCount!==1||x.anchorNode!==C.node||x.anchorOffset!==C.offset||x.focusNode!==T.node||x.focusOffset!==T.offset)){var A=L.createRange();A.setStart(C.node,C.offset),x.removeAllRanges(),W>Ie?(x.addRange(A),x.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),x.addRange(A))}}}}for(L=[],x=_;x=x.parentNode;)x.nodeType===1&&L.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<L.length;_++){var M=L[_];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Cc=!!qh,Fh=qh=null}finally{Se=u,P.p=l,O.T=a}}t.current=i,st=2}}function xy(){if(st===2){st=0;var t=Hi,i=kr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var l=P.p;P.p=2;var u=Se;Se|=4;try{iy(t,i.alternate,i)}finally{Se=u,P.p=l,O.T=a}}st=3}}function Iy(){if(st===4||st===3){st=0,s1();var t=Hi,i=kr,a=hi,l=gy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?st=5:(st=0,kr=Hi=null,Oy(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ji=null),Xu(a),i=i.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(ma,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=O.T,u=P.p,P.p=2,O.T=null;try{for(var d=t.onRecoverableError,p=0;p<l.length;p++){var _=l[p];d(_.value,{componentStack:_.stack})}}finally{O.T=i,P.p=u}}(hi&3)!==0&&fc(),Hn(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Ih?Xa++:(Xa=0,Ih=t):Xa=0,Za(0)}}function Oy(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Oa(i)))}function fc(){return Ry(),xy(),Iy(),ky()}function ky(){if(st!==5)return!1;var t=Hi,i=Rh;Rh=0;var a=Xu(hi),l=O.T,u=P.p;try{P.p=32>a?32:a,O.T=null,a=xh,xh=null;var d=Hi,p=hi;if(st=0,kr=Hi=null,hi=0,(Se&6)!==0)throw Error(r(331));var _=Se;if(Se|=4,fy(d.current),uy(d,d.current,p,a),Se=_,Za(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(ma,d)}catch{}return!0}finally{P.p=u,O.T=l,Oy(t,i)}}function Dy(t,i,a){i=hn(a,i),i=oh(t.stateNode,i,2),t=Di(t,i,2),t!==null&&(_a(t,2),Hn(t))}function Ae(t,i,a){if(t.tag===3)Dy(t,t,a);else for(;i!==null;){if(i.tag===3){Dy(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ji===null||!ji.has(l))){t=hn(a,t),a=M_(2),l=Di(i,a,2),l!==null&&(L_(a,l,i,t),_a(l,2),Hn(l));break}}i=i.return}}function Dh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Iw;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(Ch=!0,u.add(a),t=Lw.bind(null,t,i,a),i.then(t,t))}function Lw(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Oe===t&&(me&a)===a&&(Ye===4||Ye===3&&(me&62914560)===me&&300>Gt()-lc?(Se&2)===0&&Dr(t,0):Ah|=a,Or===me&&(Or=0)),Hn(t)}function My(t,i){i===0&&(i=Rm()),t=Ss(t,i),t!==null&&(_a(t,i),Hn(t))}function Pw(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),My(t,a)}function Uw(t,i){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),My(t,a)}function zw(t,i){return Yu(t,i)}var pc=null,Lr=null,Mh=!1,mc=!1,Lh=!1,Vi=0;function Hn(t){t!==Lr&&t.next===null&&(Lr===null?pc=Lr=t:Lr=Lr.next=t),mc=!0,Mh||(Mh=!0,Hw())}function Za(t,i){if(!Lh&&mc){Lh=!0;do for(var a=!1,l=pc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var p=l.suspendedLanes,_=l.pingedLanes;d=(1<<31-Wt(42|t)+1)-1,d&=u&~(p&~_),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,zy(l,d))}else d=me,d=vo(l,l===Oe?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ga(l,d)||(a=!0,zy(l,d));l=l.next}while(a);Lh=!1}}function jw(){Ly()}function Ly(){mc=Mh=!1;var t=0;Vi!==0&&Xw()&&(t=Vi);for(var i=Gt(),a=null,l=pc;l!==null;){var u=l.next,d=Py(l,i);d===0?(l.next=null,a===null?pc=u:a.next=u,u===null&&(Lr=a)):(a=l,(t!==0||(d&3)!==0)&&(mc=!0)),l=u}st!==0&&st!==5||Za(t),Vi!==0&&(Vi=0)}function Py(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var p=31-Wt(d),_=1<<p,S=u[p];S===-1?((_&a)===0||(_&l)!==0)&&(u[p]=h1(_,i)):S<=i&&(t.expiredLanes|=_),d&=~_}if(i=Oe,a=me,a=vo(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Wu(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ga(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Wu(l),Xu(a)){case 2:case 8:a=Am;break;case 32:a=mo;break;case 268435456:a=Nm;break;default:a=mo}return l=Uy.bind(null,t),a=Yu(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Wu(l),t.callbackPriority=2,t.callbackNode=null,2}function Uy(t,i){if(st!==0&&st!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(fc()&&t.callbackNode!==a)return null;var l=me;return l=vo(t,t===Oe?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(yy(t,l,i),Py(t,Gt()),t.callbackNode!=null&&t.callbackNode===a?Uy.bind(null,t):null)}function zy(t,i){if(fc())return null;yy(t,i,!0)}function Hw(){Jw(function(){(Se&6)!==0?Yu(Cm,jw):Ly()})}function Ph(){if(Vi===0){var t=br;t===0&&(t=go,go<<=1,(go&261888)===0&&(go=256)),Vi=t}return Vi}function jy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wo(""+t)}function Hy(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Bw(t,i,a,l,u){if(i==="submit"&&a&&a.stateNode===u){var d=jy((u[Ot]||null).action),p=l.submitter;p&&(i=(i=p[Ot]||null)?jy(i.formAction):p.getAttribute("formAction"),i!==null&&(d=i,p=null));var _=new No("action","action",null,l,u);t.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Vi!==0){var S=p?Hy(u,p):new FormData(u);nh(a,{pending:!0,data:S,method:u.method,action:d},null,S)}}else typeof d=="function"&&(_.preventDefault(),S=p?Hy(u,p):new FormData(u),nh(a,{pending:!0,data:S,method:u.method,action:d},d,S))},currentTarget:u}]})}}for(var Uh=0;Uh<vd.length;Uh++){var zh=vd[Uh],Vw=zh.toLowerCase(),qw=zh[0].toUpperCase()+zh.slice(1);Nn(Vw,"on"+qw)}Nn(_g,"onAnimationEnd"),Nn(yg,"onAnimationIteration"),Nn(vg,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(rw,"onTransitionRun"),Nn(aw,"onTransitionStart"),Nn(lw,"onTransitionCancel"),Nn(bg,"onTransitionEnd"),ar("onMouseEnter",["mouseout","mouseover"]),ar("onMouseLeave",["mouseout","mouseover"]),ar("onPointerEnter",["pointerout","pointerover"]),ar("onPointerLeave",["pointerout","pointerover"]),ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ys("onBeforeInput",["compositionend","keypress","textInput","paste"]),ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));function By(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var p=l.length-1;0<=p;p--){var _=l[p],S=_.instance,N=_.currentTarget;if(_=_.listener,S!==d&&u.isPropagationStopped())break e;d=_,u.currentTarget=N;try{d(u)}catch(I){Io(I)}u.currentTarget=null,d=S}else for(p=0;p<l.length;p++){if(_=l[p],S=_.instance,N=_.currentTarget,_=_.listener,S!==d&&u.isPropagationStopped())break e;d=_,u.currentTarget=N;try{d(u)}catch(I){Io(I)}u.currentTarget=null,d=S}}}}function pe(t,i){var a=i[Zu];a===void 0&&(a=i[Zu]=new Set);var l=t+"__bubble";a.has(l)||(Vy(i,t,2,!1),a.add(l))}function jh(t,i,a){var l=0;i&&(l|=4),Vy(a,t,l,i)}var gc="_reactListening"+Math.random().toString(36).slice(2);function Hh(t){if(!t[gc]){t[gc]=!0,Lm.forEach(function(a){a!=="selectionchange"&&(Fw.has(a)||jh(a,!1,t),jh(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[gc]||(i[gc]=!0,jh("selectionchange",!1,i))}}function Vy(t,i,a,l){switch(_v(i)){case 2:var u=yT;break;case 8:u=vT;break;default:u=tf}a=u.bind(null,i,a,t),u=void 0,!ad||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function Bh(t,i,a,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var _=l.stateNode.containerInfo;if(_===u)break;if(p===4)for(p=l.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;_!==null;){if(p=ir(_),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){l=d=p;continue e}_=_.parentNode}}l=l.return}Wm(function(){var N=d,I=sd(a),L=[];e:{var R=Eg.get(t);if(R!==void 0){var x=No,q=t;switch(t){case"keypress":if(Co(a)===0)break e;case"keydown":case"keyup":x=U1;break;case"focusin":q="focus",x=ud;break;case"focusout":q="blur",x=ud;break;case"beforeblur":case"afterblur":x=ud;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=H1;break;case _g:case yg:case vg:x=R1;break;case bg:x=V1;break;case"scroll":case"scrollend":x=w1;break;case"wheel":x=F1;break;case"copy":case"cut":case"paste":x=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Jm;break;case"toggle":case"beforetoggle":x=Y1}var W=(i&4)!==0,Ie=!W&&(t==="scroll"||t==="scrollend"),C=W?R!==null?R+"Capture":null:R;W=[];for(var T=N,A;T!==null;){var M=T;if(A=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||A===null||C===null||(M=ba(T,C),M!=null&&W.push($a(T,M,A))),Ie)break;T=T.return}0<W.length&&(R=new x(R,q,null,a,I),L.push({event:R,listeners:W}))}}if((i&7)===0){e:{if(R=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",R&&a!==id&&(q=a.relatedTarget||a.fromElement)&&(ir(q)||q[nr]))break e;if((x||R)&&(R=I.window===I?I:(R=I.ownerDocument)?R.defaultView||R.parentWindow:window,x?(q=a.relatedTarget||a.toElement,x=N,q=q?ir(q):null,q!==null&&(Ie=c(q),W=q.tag,q!==Ie||W!==5&&W!==27&&W!==6)&&(q=null)):(x=null,q=N),x!==q)){if(W=Xm,M="onMouseLeave",C="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(W=Jm,M="onPointerLeave",C="onPointerEnter",T="pointer"),Ie=x==null?R:va(x),A=q==null?R:va(q),R=new W(M,T+"leave",x,a,I),R.target=Ie,R.relatedTarget=A,M=null,ir(I)===N&&(W=new W(C,T+"enter",q,a,I),W.target=A,W.relatedTarget=Ie,M=W),Ie=M,x&&q)t:{for(W=Gw,C=x,T=q,A=0,M=C;M;M=W(M))A++;M=0;for(var Y=T;Y;Y=W(Y))M++;for(;0<A-M;)C=W(C),A--;for(;0<M-A;)T=W(T),M--;for(;A--;){if(C===T||T!==null&&C===T.alternate){W=C;break t}C=W(C),T=W(T)}W=null}else W=null;x!==null&&qy(L,R,x,W,!1),q!==null&&Ie!==null&&qy(L,Ie,q,W,!0)}}e:{if(R=N?va(N):window,x=R.nodeName&&R.nodeName.toLowerCase(),x==="select"||x==="input"&&R.type==="file")var ye=ag;else if(sg(R))if(lg)ye=nw;else{ye=ew;var F=$1}else x=R.nodeName,!x||x.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?N&&nd(N.elementType)&&(ye=ag):ye=tw;if(ye&&(ye=ye(t,N))){rg(L,ye,a,I);break e}F&&F(t,R,N),t==="focusout"&&N&&R.type==="number"&&N.memoizedProps.value!=null&&td(R,"number",R.value)}switch(F=N?va(N):window,t){case"focusin":(sg(F)||F.contentEditable==="true")&&(hr=F,gd=N,Ra=null);break;case"focusout":Ra=gd=hr=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,mg(L,a,I);break;case"selectionchange":if(sw)break;case"keydown":case"keyup":mg(L,a,I)}var re;if(hd)e:{switch(t){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else dr?ng(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&($m&&a.locale!=="ko"&&(dr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&dr&&(re=Qm()):(Ai=I,ld="value"in Ai?Ai.value:Ai.textContent,dr=!0)),F=_c(N,ge),0<F.length&&(ge=new Zm(ge,t,null,a,I),L.push({event:ge,listeners:F}),re?ge.data=re:(re=ig(a),re!==null&&(ge.data=re)))),(re=Q1?K1(t,a):X1(t,a))&&(ge=_c(N,"onBeforeInput"),0<ge.length&&(F=new Zm("onBeforeInput","beforeinput",null,a,I),L.push({event:F,listeners:ge}),F.data=re)),Bw(L,t,N,a,I)}By(L,i)})}function $a(t,i,a){return{instance:t,listener:i,currentTarget:a}}function _c(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ba(t,a),u!=null&&l.unshift($a(t,u,d)),u=ba(t,i),u!=null&&l.push($a(t,u,d))),t.tag===3)return l;t=t.return}return[]}function Gw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qy(t,i,a,l,u){for(var d=i._reactName,p=[];a!==null&&a!==l;){var _=a,S=_.alternate,N=_.stateNode;if(_=_.tag,S!==null&&S===l)break;_!==5&&_!==26&&_!==27||N===null||(S=N,u?(N=ba(a,d),N!=null&&p.unshift($a(a,N,S))):u||(N=ba(a,d),N!=null&&p.push($a(a,N,S)))),a=a.return}p.length!==0&&t.push({event:i,listeners:p})}var Yw=/\r\n?/g,Ww=/\u0000|\uFFFD/g;function Fy(t){return(typeof t=="string"?t:""+t).replace(Yw,`
`).replace(Ww,"")}function Gy(t,i){return i=Fy(i),Fy(t)===i}function xe(t,i,a,l,u,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||or(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&or(t,""+l);break;case"className":Eo(t,"class",l);break;case"tabIndex":Eo(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Eo(t,a,l);break;case"style":Gm(t,l,d);break;case"data":if(i!=="object"){Eo(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=wo(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&xe(t,i,"name",u.name,u,null),xe(t,i,"formEncType",u.formEncType,u,null),xe(t,i,"formMethod",u.formMethod,u,null),xe(t,i,"formTarget",u.formTarget,u,null)):(xe(t,i,"encType",u.encType,u,null),xe(t,i,"method",u.method,u,null),xe(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=wo(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Zn);break;case"onScroll":l!=null&&pe("scroll",t);break;case"onScrollEnd":l!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=wo(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":pe("beforetoggle",t),pe("toggle",t),bo(t,"popover",l);break;case"xlinkActuate":Xn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":bo(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=E1.get(a)||a,bo(t,a,l))}}function Vh(t,i,a,l,u,d){switch(a){case"style":Gm(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?or(t,l):(typeof l=="number"||typeof l=="bigint")&&or(t,""+l);break;case"onScroll":l!=null&&pe("scroll",t);break;case"onScrollEnd":l!=null&&pe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Zn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pm.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),d=t[Ot]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,u);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):bo(t,a,l)}}}function Et(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var l=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var p=a[d];if(p!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:xe(t,i,d,p,a,null)}}u&&xe(t,i,"srcSet",a.srcSet,a,null),l&&xe(t,i,"src",a.src,a,null);return;case"input":pe("invalid",t);var _=d=p=u=null,S=null,N=null;for(l in a)if(a.hasOwnProperty(l)){var I=a[l];if(I!=null)switch(l){case"name":u=I;break;case"type":p=I;break;case"checked":S=I;break;case"defaultChecked":N=I;break;case"value":d=I;break;case"defaultValue":_=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,i));break;default:xe(t,i,l,I,a,null)}}Bm(t,d,_,S,N,p,u,!1);return;case"select":pe("invalid",t),l=p=d=null;for(u in a)if(a.hasOwnProperty(u)&&(_=a[u],_!=null))switch(u){case"value":d=_;break;case"defaultValue":p=_;break;case"multiple":l=_;default:xe(t,i,u,_,a,null)}i=d,a=p,t.multiple=!!l,i!=null?lr(t,!!l,i,!1):a!=null&&lr(t,!!l,a,!0);return;case"textarea":pe("invalid",t),d=u=l=null;for(p in a)if(a.hasOwnProperty(p)&&(_=a[p],_!=null))switch(p){case"value":l=_;break;case"defaultValue":u=_;break;case"children":d=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:xe(t,i,p,_,a,null)}qm(t,l,u,d);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xe(t,i,S,l,a,null)}return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(l=0;l<Ja.length;l++)pe(Ja[l],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:xe(t,i,N,l,a,null)}return;default:if(nd(i)){for(I in a)a.hasOwnProperty(I)&&(l=a[I],l!==void 0&&Vh(t,i,I,l,a,void 0));return}}for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!=null&&xe(t,i,_,l,a,null))}function Qw(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,p=null,_=null,S=null,N=null,I=null;for(x in a){var L=a[x];if(a.hasOwnProperty(x)&&L!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":S=L;default:l.hasOwnProperty(x)||xe(t,i,x,null,l,L)}}for(var R in l){var x=l[R];if(L=a[R],l.hasOwnProperty(R)&&(x!=null||L!=null))switch(R){case"type":d=x;break;case"name":u=x;break;case"checked":N=x;break;case"defaultChecked":I=x;break;case"value":p=x;break;case"defaultValue":_=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(r(137,i));break;default:x!==L&&xe(t,i,R,x,l,L)}}ed(t,p,_,S,N,I,d,u);return;case"select":x=p=_=R=null;for(d in a)if(S=a[d],a.hasOwnProperty(d)&&S!=null)switch(d){case"value":break;case"multiple":x=S;default:l.hasOwnProperty(d)||xe(t,i,d,null,l,S)}for(u in l)if(d=l[u],S=a[u],l.hasOwnProperty(u)&&(d!=null||S!=null))switch(u){case"value":R=d;break;case"defaultValue":_=d;break;case"multiple":p=d;default:d!==S&&xe(t,i,u,d,l,S)}i=_,a=p,l=x,R!=null?lr(t,!!a,R,!1):!!l!=!!a&&(i!=null?lr(t,!!a,i,!0):lr(t,!!a,a?[]:"",!1));return;case"textarea":x=R=null;for(_ in a)if(u=a[_],a.hasOwnProperty(_)&&u!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:xe(t,i,_,null,l,u)}for(p in l)if(u=l[p],d=a[p],l.hasOwnProperty(p)&&(u!=null||d!=null))switch(p){case"value":R=u;break;case"defaultValue":x=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&xe(t,i,p,u,l,d)}Vm(t,R,x);return;case"option":for(var q in a)if(R=a[q],a.hasOwnProperty(q)&&R!=null&&!l.hasOwnProperty(q))switch(q){case"selected":t.selected=!1;break;default:xe(t,i,q,null,l,R)}for(S in l)if(R=l[S],x=a[S],l.hasOwnProperty(S)&&R!==x&&(R!=null||x!=null))switch(S){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:xe(t,i,S,R,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)R=a[W],a.hasOwnProperty(W)&&R!=null&&!l.hasOwnProperty(W)&&xe(t,i,W,null,l,R);for(N in l)if(R=l[N],x=a[N],l.hasOwnProperty(N)&&R!==x&&(R!=null||x!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,i));break;default:xe(t,i,N,R,l,x)}return;default:if(nd(i)){for(var Ie in a)R=a[Ie],a.hasOwnProperty(Ie)&&R!==void 0&&!l.hasOwnProperty(Ie)&&Vh(t,i,Ie,void 0,l,R);for(I in l)R=l[I],x=a[I],!l.hasOwnProperty(I)||R===x||R===void 0&&x===void 0||Vh(t,i,I,R,l,x);return}}for(var C in a)R=a[C],a.hasOwnProperty(C)&&R!=null&&!l.hasOwnProperty(C)&&xe(t,i,C,null,l,R);for(L in l)R=l[L],x=a[L],!l.hasOwnProperty(L)||R===x||R==null&&x==null||xe(t,i,L,R,l,x)}function Yy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kw(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],d=u.transferSize,p=u.initiatorType,_=u.duration;if(d&&_&&Yy(p)){for(p=0,_=u.responseEnd,l+=1;l<a.length;l++){var S=a[l],N=S.startTime;if(N>_)break;var I=S.transferSize,L=S.initiatorType;I&&Yy(L)&&(S=S.responseEnd,p+=I*(S<_?1:(_-N)/(S-N)))}if(--l,i+=8*(d+p)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qh=null,Fh=null;function yc(t){return t.nodeType===9?t:t.ownerDocument}function Wy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qy(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Gh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Yh=null;function Xw(){var t=window.event;return t&&t.type==="popstate"?t===Yh?!1:(Yh=t,!0):(Yh=null,!1)}var Ky=typeof setTimeout=="function"?setTimeout:void 0,Zw=typeof clearTimeout=="function"?clearTimeout:void 0,Xy=typeof Promise=="function"?Promise:void 0,Jw=typeof queueMicrotask=="function"?queueMicrotask:typeof Xy<"u"?function(t){return Xy.resolve(null).then(t).catch($w)}:Ky;function $w(t){setTimeout(function(){throw t})}function qi(t){return t==="head"}function Zy(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(u),jr(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")el(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,el(a);for(var d=a.firstChild;d;){var p=d.nextSibling,_=d.nodeName;d[ya]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=p}}else a==="body"&&el(t.ownerDocument.body);a=u}while(a);jr(i)}function Jy(t,i){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Wh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wh(a),Ju(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function eT(t,i,a,l){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ya])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=_n(t.nextSibling),t===null)break}return null}function tT(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_n(t.nextSibling),t===null))return null;return t}function $y(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_n(t.nextSibling),t===null))return null;return t}function Qh(t){return t.data==="$?"||t.data==="$~"}function Kh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function nT(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _n(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Xh=null;function ev(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return _n(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function tv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function nv(t,i,a){switch(i=yc(a),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function el(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ju(t)}var yn=new Map,iv=new Set;function vc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fi=P.d;P.d={f:iT,r:sT,D:rT,C:aT,L:lT,m:oT,X:uT,S:cT,M:dT};function iT(){var t=fi.f(),i=uc();return t||i}function sT(t){var i=sr(t);i!==null&&i.tag===5&&i.type==="form"?b_(i):fi.r(t)}var Pr=typeof document>"u"?null:document;function sv(t,i,a){var l=Pr;if(l&&typeof i=="string"&&i){var u=un(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),iv.has(u)||(iv.add(u),t={rel:t,crossOrigin:a,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Et(i,"link",t),ot(i),l.head.appendChild(i)))}}function rT(t){fi.D(t),sv("dns-prefetch",t,null)}function aT(t,i){fi.C(t,i),sv("preconnect",t,i)}function lT(t,i,a){fi.L(t,i,a);var l=Pr;if(l&&t&&i){var u='link[rel="preload"][as="'+un(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(t)+'"]';var d=u;switch(i){case"style":d=Ur(t);break;case"script":d=zr(t)}yn.has(d)||(t=y({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),yn.set(d,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(tl(d))||i==="script"&&l.querySelector(nl(d))||(i=l.createElement("link"),Et(i,"link",t),ot(i),l.head.appendChild(i)))}}function oT(t,i){fi.m(t,i);var a=Pr;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+un(l)+'"][href="'+un(t)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=zr(t)}if(!yn.has(d)&&(t=y({rel:"modulepreload",href:t},i),yn.set(d,t),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(d)))return}l=a.createElement("link"),Et(l,"link",t),ot(l),a.head.appendChild(l)}}}function cT(t,i,a){fi.S(t,i,a);var l=Pr;if(l&&t){var u=rr(l).hoistableStyles,d=Ur(t);i=i||"default";var p=u.get(d);if(!p){var _={loading:0,preload:null};if(p=l.querySelector(tl(d)))_.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":i},a),(a=yn.get(d))&&Zh(t,a);var S=p=l.createElement("link");ot(S),Et(S,"link",t),S._p=new Promise(function(N,I){S.onload=N,S.onerror=I}),S.addEventListener("load",function(){_.loading|=1}),S.addEventListener("error",function(){_.loading|=2}),_.loading|=4,bc(p,i,l)}p={type:"stylesheet",instance:p,count:1,state:_},u.set(d,p)}}}function uT(t,i){fi.X(t,i);var a=Pr;if(a&&t){var l=rr(a).hoistableScripts,u=zr(t),d=l.get(u);d||(d=a.querySelector(nl(u)),d||(t=y({src:t,async:!0},i),(i=yn.get(u))&&Jh(t,i),d=a.createElement("script"),ot(d),Et(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function dT(t,i){fi.M(t,i);var a=Pr;if(a&&t){var l=rr(a).hoistableScripts,u=zr(t),d=l.get(u);d||(d=a.querySelector(nl(u)),d||(t=y({src:t,async:!0,type:"module"},i),(i=yn.get(u))&&Jh(t,i),d=a.createElement("script"),ot(d),Et(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function rv(t,i,a,l){var u=(u=te.current)?vc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ur(a.href),a=rr(u).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ur(a.href);var d=rr(u).hoistableStyles,p=d.get(t);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,p),(d=u.querySelector(tl(t)))&&!d._p&&(p.instance=d,p.state.loading=5),yn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yn.set(t,a),d||hT(u,t,a,p.state))),i&&l===null)throw Error(r(528,""));return p}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=zr(a),a=rr(u).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ur(t){return'href="'+un(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function av(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function hT(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Et(i,"link",a),ot(i),t.head.appendChild(i))}function zr(t){return'[src="'+un(t)+'"]'}function nl(t){return"script[async]"+t}function lv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+un(a.href)+'"]');if(l)return i.instance=l,ot(l),l;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ot(l),Et(l,"style",u),bc(l,a.precedence,t),i.instance=l;case"stylesheet":u=Ur(a.href);var d=t.querySelector(tl(u));if(d)return i.state.loading|=4,i.instance=d,ot(d),d;l=av(a),(u=yn.get(u))&&Zh(l,u),d=(t.ownerDocument||t).createElement("link"),ot(d);var p=d;return p._p=new Promise(function(_,S){p.onload=_,p.onerror=S}),Et(d,"link",l),i.state.loading|=4,bc(d,a.precedence,t),i.instance=d;case"script":return d=zr(a.src),(u=t.querySelector(nl(d)))?(i.instance=u,ot(u),u):(l=a,(u=yn.get(d))&&(l=y({},a),Jh(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),ot(u),Et(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,bc(l,a.precedence,t));return i.instance}function bc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,p=0;p<l.length;p++){var _=l[p];if(_.dataset.precedence===i)d=_;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Zh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Jh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Ec=null;function ov(t,i,a){if(Ec===null){var l=new Map,u=Ec=new Map;u.set(a,l)}else u=Ec,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ya]||d[_t]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var p=d.getAttribute(i)||"";p=t+p;var _=l.get(p);_?_.push(d):l.set(p,[d])}}return l}function cv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function fT(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function uv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function pT(t,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ur(l.href),d=i.querySelector(tl(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Sc.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=d,ot(d);return}d=i.ownerDocument||i,l=av(l),(u=yn.get(u))&&Zh(l,u),d=d.createElement("link"),ot(d);var p=d;p._p=new Promise(function(_,S){p.onload=_,p.onerror=S}),Et(d,"link",l),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Sc.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var $h=0;function mT(t,i){return t.stylesheets&&t.count===0&&Tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Tc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&$h===0&&($h=62500*Kw());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Tc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>$h?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wc=null;function Tc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wc=new Map,i.forEach(gT,t),wc=null,Sc.call(t))}function gT(t,i){if(!(i.state.loading&4)){var a=wc.get(t);if(a)var l=a.get(null);else{a=new Map,wc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var p=u[d];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}u=i.instance,p=u.getAttribute("data-precedence"),d=a.get(p)||l,d===l&&a.set(null,u),a.set(p,u),this.count++,l=Sc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var il={$$typeof:ie,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function _T(t,i,a,l,u,d,p,_,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qu(0),this.hiddenUpdates=Qu(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function dv(t,i,a,l,u,d,p,_,S,N,I,L){return t=new _T(t,i,a,p,S,N,I,L,_),i=1,d===!0&&(i|=24),d=Kt(3,null,null,i),t.current=d,d.stateNode=t,i=kd(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Pd(d),t}function hv(t){return t?(t=mr,t):mr}function fv(t,i,a,l,u,d){u=hv(u),l.context===null?l.context=u:l.pendingContext=u,l=ki(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Di(t,l,i),a!==null&&(Ut(a,t,i),La(a,t,i))}function pv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function ef(t,i){pv(t,i),(t=t.alternate)&&pv(t,i)}function mv(t){if(t.tag===13||t.tag===31){var i=Ss(t,67108864);i!==null&&Ut(i,t,67108864),ef(t,67108864)}}function gv(t){if(t.tag===13||t.tag===31){var i=en();i=Ku(i);var a=Ss(t,i);a!==null&&Ut(a,t,i),ef(t,i)}}var Cc=!0;function yT(t,i,a,l){var u=O.T;O.T=null;var d=P.p;try{P.p=2,tf(t,i,a,l)}finally{P.p=d,O.T=u}}function vT(t,i,a,l){var u=O.T;O.T=null;var d=P.p;try{P.p=8,tf(t,i,a,l)}finally{P.p=d,O.T=u}}function tf(t,i,a,l){if(Cc){var u=nf(l);if(u===null)Bh(t,i,l,Ac,a),yv(t,l);else if(ET(u,t,i,a,l))l.stopPropagation();else if(yv(t,l),i&4&&-1<bT.indexOf(t)){for(;u!==null;){var d=sr(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var p=_s(d.pendingLanes);if(p!==0){var _=d;for(_.pendingLanes|=2,_.entangledLanes|=2;p;){var S=1<<31-Wt(p);_.entanglements[1]|=S,p&=~S}Hn(d),(Se&6)===0&&(oc=Gt()+500,Za(0))}}break;case 31:case 13:_=Ss(d,2),_!==null&&Ut(_,d,2),uc(),ef(d,2)}if(d=nf(l),d===null&&Bh(t,i,l,Ac,a),d===u)break;u=d}u!==null&&l.stopPropagation()}else Bh(t,i,l,null,a)}}function nf(t){return t=sd(t),sf(t)}var Ac=null;function sf(t){if(Ac=null,t=ir(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=h(i),t!==null)return t;t=null}else if(a===31){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ac=t,null}function _v(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(r1()){case Cm:return 2;case Am:return 8;case mo:case a1:return 32;case Nm:return 268435456;default:return 32}default:return 32}}var rf=!1,Fi=null,Gi=null,Yi=null,sl=new Map,rl=new Map,Wi=[],bT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yv(t,i){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(i.pointerId)}}function al(t,i,a,l,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=sr(i),i!==null&&mv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function ET(t,i,a,l,u){switch(i){case"focusin":return Fi=al(Fi,t,i,a,l,u),!0;case"dragenter":return Gi=al(Gi,t,i,a,l,u),!0;case"mouseover":return Yi=al(Yi,t,i,a,l,u),!0;case"pointerover":var d=u.pointerId;return sl.set(d,al(sl.get(d)||null,t,i,a,l,u)),!0;case"gotpointercapture":return d=u.pointerId,rl.set(d,al(rl.get(d)||null,t,i,a,l,u)),!0}return!1}function vv(t){var i=ir(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){t.blockedOn=i,Dm(t.priority,function(){gv(a)});return}}else if(i===31){if(i=f(a),i!==null){t.blockedOn=i,Dm(t.priority,function(){gv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=nf(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);id=l,a.target.dispatchEvent(l),id=null}else return i=sr(a),i!==null&&mv(i),t.blockedOn=a,!1;i.shift()}return!0}function bv(t,i,a){Nc(t)&&a.delete(i)}function ST(){rf=!1,Fi!==null&&Nc(Fi)&&(Fi=null),Gi!==null&&Nc(Gi)&&(Gi=null),Yi!==null&&Nc(Yi)&&(Yi=null),sl.forEach(bv),rl.forEach(bv)}function Rc(t,i){t.blockedOn===i&&(t.blockedOn=null,rf||(rf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ST)))}var xc=null;function Ev(t){xc!==t&&(xc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(sf(l||a)===null)continue;break}var d=sr(a);d!==null&&(t.splice(i,3),i-=3,nh(d,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function jr(t){function i(S){return Rc(S,t)}Fi!==null&&Rc(Fi,t),Gi!==null&&Rc(Gi,t),Yi!==null&&Rc(Yi,t),sl.forEach(i),rl.forEach(i);for(var a=0;a<Wi.length;a++){var l=Wi[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Wi.length&&(a=Wi[0],a.blockedOn===null);)vv(a),a.blockedOn===null&&Wi.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],d=a[l+1],p=u[Ot]||null;if(typeof d=="function")p||Ev(a);else if(p){var _=null;if(d&&d.hasAttribute("formAction")){if(u=d,p=d[Ot]||null)_=p.formAction;else if(sf(u)!==null)continue}else _=p.action;typeof _=="function"?a[l+1]=_:(a.splice(l,3),l-=3),Ev(a)}}}function Sv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(p){return u=p})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function af(t){this._internalRoot=t}Ic.prototype.render=af.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,l=en();fv(a,l,t,i,null,null)},Ic.prototype.unmount=af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;fv(t.current,2,null,t,null,null),uc(),i[nr]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var i=km();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Wi.length&&i!==0&&i<Wi[a].priority;a++);Wi.splice(a,0,t),a===0&&vv(t)}};var wv=e.version;if(wv!=="19.2.1")throw Error(r(527,wv,"19.2.1"));P.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(i),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var wT={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{ma=Oc.inject(wT),Yt=Oc}catch{}}return ol.createRoot=function(t,i){if(!o(t))throw Error(r(299));var a=!1,l="",u=I_,d=O_,p=k_;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=dv(t,1,!1,null,null,a,l,null,u,d,p,Sv),t[nr]=i.current,Hh(t),new af(i)},ol.hydrateRoot=function(t,i,a){if(!o(t))throw Error(r(299));var l=!1,u="",d=I_,p=O_,_=k_,S=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),i=dv(t,1,!0,i,a??null,l,u,S,d,p,_,Sv),i.context=hv(null),a=i.current,l=en(),l=Ku(l),u=ki(l),u.callback=null,Di(a,u,l),a=l,i.current.lanes=a,_a(i,a),Hn(i),t[nr]=i.current,Hh(t),new Ic(i)},ol.version="19.2.1",ol}var Dv;function MT(){if(Dv)return cf.exports;Dv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),cf.exports=DT(),cf.exports}var LT=MT();const PT=ib(LT),UT=()=>{};var Mv={};/**
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
 */const sb={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const H=function(s,e){if(!s)throw ra(e)},ra=function(s){return new Error("Firebase Database ("+sb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
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
 */const rb=function(s){const e=[];let n=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},zT=function(s){const e=[];let n=0,r=0;for(;n<s.length;){const o=s[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[n++];e[r++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[n++],h=s[n++],f=s[n++],m=((o&7)<<18|(c&63)<<12|(h&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(m>>10)),e[r++]=String.fromCharCode(56320+(m&1023))}else{const c=s[n++],h=s[n++];e[r++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return e.join("")},hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const c=s[o],h=o+1<s.length,f=h?s[o+1]:0,m=o+2<s.length,g=m?s[o+2]:0,v=c>>2,y=(c&3)<<4|f>>4;let E=(f&15)<<2|g>>6,k=g&63;m||(k=64,h||(E=64)),r.push(n[v],n[y],n[E],n[k])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(rb(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):zT(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const c=n[s.charAt(o++)],f=o<s.length?n[s.charAt(o)]:0;++o;const g=o<s.length?n[s.charAt(o)]:64;++o;const y=o<s.length?n[s.charAt(o)]:64;if(++o,c==null||f==null||g==null||y==null)throw new jT;const E=c<<2|f>>4;if(r.push(E),g!==64){const k=f<<4&240|g>>2;if(r.push(k),y!==64){const j=g<<6&192|y;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ab=function(s){const e=rb(s);return hp.encodeByteArray(e,!0)},jc=function(s){return ab(s).replace(/\./g,"")},Il=function(s){try{return hp.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HT(s){return Ol(void 0,s)}function Ol(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BT(n)||(s[n]=Ol(s[n],e[n]));return s}function BT(s){return s!=="__proto__"}/**
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
 */function lb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VT=()=>lb().__FIREBASE_DEFAULTS__,qT=()=>{if(typeof process>"u"||typeof Mv>"u")return;const s=Mv.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},FT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Il(s[1]);return e&&JSON.parse(e)},fp=()=>{try{return UT()||VT()||qT()||FT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},pp=()=>{var s;return(s=fp())==null?void 0:s.config},GT=s=>{var e;return(e=fp())==null?void 0:e[`_${s}`]};/**
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
 */class jt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function aa(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ob(s){return(await fetch(s,{credentials:"include"})).ok}/**
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
 */function YT(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...s};return[jc(JSON.stringify(n)),jc(JSON.stringify(h)),""].join(".")}const bl={};function WT(){const s={prod:[],emulator:[]};for(const e of Object.keys(bl))bl[e]?s.emulator.push(e):s.prod.push(e);return s}function QT(s){let e=document.getElementById(s),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),n=!0),{created:n,element:e}}let Lv=!1;function cb(s,e){if(typeof window>"u"||typeof document>"u"||!aa(window.location.host)||bl[s]===e||bl[s]||Lv)return;bl[s]=e;function n(E){return`__firebase__banner__${E}`}const r="__firebase__banner",c=WT().prod.length>0;function h(){const E=document.getElementById(r);E&&E.remove()}function f(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function m(E,k){E.setAttribute("width","24"),E.setAttribute("id",k),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function g(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Lv=!0,h()},E}function v(E,k){E.setAttribute("id",k),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function y(){const E=QT(r),k=n("text"),j=document.getElementById(k)||document.createElement("span"),G=n("learnmore"),le=document.getElementById(G)||document.createElement("a"),de=n("preprendIcon"),Pe=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const ie=E.element;f(ie),v(le,G);const we=g();m(Pe,de),ie.append(Pe,j,le,we),document.body.appendChild(ie)}c?(j.innerText="Preview backend disconnected.",Pe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Pe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function ub(){var e;const s=(e=fp())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KT(){return typeof window<"u"||db()}function db(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function XT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hb(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function cu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fb(){const s=lt();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function ZT(){return sb.NODE_ADMIN===!0}function Hc(){try{return typeof indexedDB=="object"}catch{return!1}}function JT(){return new Promise((s,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;e(((c=o.error)==null?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const $T="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$T,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],h=c?eC(c,r):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Bt(o,f,r)}}function eC(s,e){return s.replace(tC,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const tC=/\{\$([^}]+)}/g;/**
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
 */function kl(s){return JSON.parse(s)}function rt(s){return JSON.stringify(s)}/**
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
 */const pb=function(s){let e={},n={},r={},o="";try{const c=s.split(".");e=kl(Il(c[0])||""),n=kl(Il(c[1])||""),o=c[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:o}},nC=function(s){const e=pb(s),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iC=function(s){const e=pb(s).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function an(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function qs(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function Bc(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Vc(s,e,n){const r={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(r[o]=e.call(n,s[o],o,s));return r}function Kr(s,e){if(s===e)return!0;const n=Object.keys(s),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const c=s[o],h=e[o];if(Pv(c)&&Pv(h)){if(!Kr(c,h))return!1}else if(c!==h)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Pv(s){return s!==null&&typeof s=="object"}/**
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
 */function Zs(s){const e=[];for(const[n,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vr(s){const e={};return s.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,c]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function _l(s){const e=s.indexOf("?");if(!e)return"";const n=s.indexOf("#",e);return s.substring(e,n>0?n:void 0)}/**
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
 */class sC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)r[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)r[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const E=r[y-3]^r[y-8]^r[y-14]^r[y-16];r[y]=(E<<1|E>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,v;for(let y=0;y<80;y++){y<40?y<20?(g=f^c&(h^f),v=1518500249):(g=c^h^f,v=1859775393):y<60?(g=c&h|f&(c|h),v=2400959708):(g=c^h^f,v=3395469782);const E=(o<<5|o>>>27)+g+m+v+r[y]&4294967295;m=f,f=h,h=(c<<30|c>>>2)&4294967295,c=o,o=E}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<n;){if(h===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(c[h]=e.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<n;)if(c[h]=e[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)e[r]=this.chain_[o]>>c&255,++r;return e}}function mb(s,e){const n=new rC(s,e);return n.subscribe.bind(n)}class rC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aC(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=ff),o.error===void 0&&(o.error=ff),o.complete===void 0&&(o.complete=ff);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aC(s,e){if(typeof s!="object"||s===null)return!1;for(const n of e)if(n in s&&typeof s[n]=="function")return!0;return!1}function ff(){}/**
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
 */const X=function(s,e,n,r){let o;if(r<e?o="at least "+e:r>n&&(o=n===0?"none":"no more than "+n),o){const c=s+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+o+".";throw new Error(c)}};function Vt(s,e){return`${s} failed: ${e} argument `}function dt(s,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(Vt(s,e)+"must be a valid function.")}function Uv(s,e,n,r){if(n&&(typeof n!="object"||n===null))throw new Error(Vt(s,e)+"must be a valid context object.")}/**
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
 */const lC=function(s){const e=[];let n=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);if(o>=55296&&o<=56319){const c=o-55296;r++,H(r<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(r)-56320;o=65536+(c<<10)+h}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},uu=function(s){let e=0;for(let n=0;n<s.length;n++){const r=s.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ee(s){return s&&s._delegate?s._delegate:s}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ls="[DEFAULT]";/**
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
 */class Of{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cC(e))try{this.getOrInitializeService({instanceIdentifier:Ls})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});r.resolve(c)}catch{}}}}clearInstance(e=Ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ls){return this.instances.has(e)}getOptions(e=Ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[c,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(c);r===f&&h.resolve(o)}return o}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ls){return this.component?this.component.multipleInstances?e:Ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oC(s){return s===Ls?void 0:s}function cC(s){return s.instantiationMode==="EAGER"}/**
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
 */class gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Of(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const _p=[];var Ne;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Ne||(Ne={}));const gb={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},uC=Ne.INFO,dC={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},hC=(s,e,...n)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),o=dC[e];if(o)console[o](`[${r}]  ${s.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=uC,this._logHandler=hC,this._userLogHandler=null,_p.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}function fC(s){_p.forEach(e=>{e.setLogLevel(s)})}function pC(s,e){for(const n of _p){let r=null;e&&e.level&&(r=gb[e.level]),s===null?n.userLogHandler=null:n.userLogHandler=(o,c,...h)=>{const f=h.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");c>=(r??o.logLevel)&&s({level:Ne[c].toLowerCase(),message:f,args:h,type:o.name})}}}const mC=(s,e)=>e.some(n=>s instanceof n);let zv,jv;function gC(){return zv||(zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _C(){return jv||(jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _b=new WeakMap,kf=new WeakMap,yb=new WeakMap,pf=new WeakMap,yp=new WeakMap;function yC(s){const e=new Promise((n,r)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",h)},c=()=>{n($i(s.result)),o()},h=()=>{r(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&_b.set(n,s)}).catch(()=>{}),yp.set(e,s),e}function vC(s){if(kf.has(s))return;const e=new Promise((n,r)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",h),s.removeEventListener("abort",h)},c=()=>{n(),o()},h=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",h),s.addEventListener("abort",h)});kf.set(s,e)}let Df={get(s,e,n){if(s instanceof IDBTransaction){if(e==="done")return kf.get(s);if(e==="objectStoreNames")return s.objectStoreNames||yb.get(s);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $i(s[e])},set(s,e,n){return s[e]=n,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function bC(s){Df=s(Df)}function EC(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=s.call(mf(this),e,...n);return yb.set(r,e.sort?e.sort():[e]),$i(r)}:_C().includes(s)?function(...e){return s.apply(mf(this),e),$i(_b.get(this))}:function(...e){return $i(s.apply(mf(this),e))}}function SC(s){return typeof s=="function"?EC(s):(s instanceof IDBTransaction&&vC(s),mC(s,gC())?new Proxy(s,Df):s)}function $i(s){if(s instanceof IDBRequest)return yC(s);if(pf.has(s))return pf.get(s);const e=SC(s);return e!==s&&(pf.set(s,e),yp.set(e,s)),e}const mf=s=>yp.get(s);function wC(s,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const h=indexedDB.open(s,e),f=$i(h);return r&&h.addEventListener("upgradeneeded",m=>{r($i(h.result),m.oldVersion,m.newVersion,$i(h.transaction),m)}),n&&h.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{c&&m.addEventListener("close",()=>c()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const TC=["get","getKey","getAll","getAllKeys","count"],CC=["put","add","delete","clear"],gf=new Map;function Hv(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(gf.get(e))return gf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=CC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||TC.includes(n)))return;const c=async function(h,...f){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),o&&m.done]))[0]};return gf.set(e,c),c}bC(s=>({...s,get:(e,n,r)=>Hv(e,n)||s.get(e,n,r),has:(e,n)=>!!Hv(e,n)||s.has(e,n)}));/**
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
 */class AC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NC(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qc="@firebase/app",Mf="0.14.6";/**
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
 */const yi=new Kl("@firebase/app"),RC="@firebase/app-compat",xC="@firebase/analytics-compat",IC="@firebase/analytics",OC="@firebase/app-check-compat",kC="@firebase/app-check",DC="@firebase/auth",MC="@firebase/auth-compat",LC="@firebase/database",PC="@firebase/data-connect",UC="@firebase/database-compat",zC="@firebase/functions",jC="@firebase/functions-compat",HC="@firebase/installations",BC="@firebase/installations-compat",VC="@firebase/messaging",qC="@firebase/messaging-compat",FC="@firebase/performance",GC="@firebase/performance-compat",YC="@firebase/remote-config",WC="@firebase/remote-config-compat",QC="@firebase/storage",KC="@firebase/storage-compat",XC="@firebase/firestore",ZC="@firebase/ai",JC="@firebase/firestore-compat",$C="firebase",eA="12.6.0";/**
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
 */const rs="[DEFAULT]",tA={[qc]:"fire-core",[RC]:"fire-core-compat",[IC]:"fire-analytics",[xC]:"fire-analytics-compat",[kC]:"fire-app-check",[OC]:"fire-app-check-compat",[DC]:"fire-auth",[MC]:"fire-auth-compat",[LC]:"fire-rtdb",[PC]:"fire-data-connect",[UC]:"fire-rtdb-compat",[zC]:"fire-fn",[jC]:"fire-fn-compat",[HC]:"fire-iid",[BC]:"fire-iid-compat",[VC]:"fire-fcm",[qC]:"fire-fcm-compat",[FC]:"fire-perf",[GC]:"fire-perf-compat",[YC]:"fire-rc",[WC]:"fire-rc-compat",[QC]:"fire-gcs",[KC]:"fire-gcs-compat",[XC]:"fire-fst",[JC]:"fire-fst-compat",[ZC]:"fire-vertex","fire-js":"fire-js",[$C]:"fire-js-all"};/**
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
 */const as=new Map,Xr=new Map,Zr=new Map;function Dl(s,e){try{s.container.addComponent(e)}catch(n){yi.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,n)}}function vb(s,e){s.container.addOrOverwriteComponent(e)}function ls(s){const e=s.name;if(Zr.has(e))return yi.debug(`There were multiple attempts to register component ${e}.`),!1;Zr.set(e,s);for(const n of as.values())Dl(n,s);for(const n of Xr.values())Dl(n,s);return!0}function bb(s,e){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(e)}function nA(s,e,n=rs){bb(s,e).clearInstance(n)}function vp(s){return s.options!==void 0}function Eb(s){return vp(s)?!1:"authIdToken"in s||"appCheckToken"in s||"releaseOnDeref"in s||"automaticDataCollectionEnabled"in s}function Be(s){return s==null?!1:s.settings!==void 0}function iA(){Zr.clear()}/**
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
 */const sA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rn=new Xs("app","Firebase",sA);/**
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
 */let Sb=class{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}};/**
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
 */function Bv(s,e){const n=Il(s.split(".")[1]);if(n===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(n).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const o=JSON.parse(n).exp*1e3,c=new Date().getTime();o-c<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class rA extends Sb{constructor(e,n,r,o){const c=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!0,h={name:r,automaticDataCollectionEnabled:c};if(e.apiKey!==void 0)super(e,h,o);else{const f=e;super(f.options,h,o)}this._serverConfig={automaticDataCollectionEnabled:c,...n},this._serverConfig.authIdToken&&Bv(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Bv(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Dn(qc,Mf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ep(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw rn.create("server-app-deleted")}}/**
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
 */const fs=eA;function bp(s,e={}){let n=s;typeof e!="object"&&(e={name:e});const r={name:rs,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw rn.create("bad-app-name",{appName:String(o)});if(n||(n=pp()),!n)throw rn.create("no-options");const c=as.get(o);if(c){if(Kr(n,c.options)&&Kr(r,c.config))return c;throw rn.create("duplicate-app",{appName:o})}const h=new gp(o);for(const m of Zr.values())h.addComponent(m);const f=new Sb(n,r,h);return as.set(o,f),f}function aA(s,e={}){if(KT()&&!db())throw rn.create("invalid-server-app-environment");let n,r=e||{};if(s&&(vp(s)?n=s.options:Eb(s)?r=s:n=s),r.automaticDataCollectionEnabled===void 0&&(r.automaticDataCollectionEnabled=!0),n||(n=pp()),!n)throw rn.create("no-options");const o={...r,...n};o.releaseOnDeref!==void 0&&delete o.releaseOnDeref;const c=v=>[...v].reduce((y,E)=>Math.imul(31,y)+E.charCodeAt(0)|0,0);if(r.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw rn.create("finalization-registry-not-supported",{});const h=""+c(JSON.stringify(o)),f=Xr.get(h);if(f)return f.incRefCount(r.releaseOnDeref),f;const m=new gp(h);for(const v of Zr.values())m.addComponent(v);const g=new rA(n,r,h,m);return Xr.set(h,g),g}function lA(s=rs){const e=as.get(s);if(!e&&s===rs&&pp())return bp();if(!e)throw rn.create("no-app",{appName:s});return e}function oA(){return Array.from(as.values())}async function Ep(s){let e=!1;const n=s.name;as.has(n)?(e=!0,as.delete(n)):Xr.has(n)&&s.decRefCount()<=0&&(Xr.delete(n),e=!0),e&&(await Promise.all(s.container.getProviders().map(r=>r.delete())),s.isDeleted=!0)}function Dn(s,e,n){let r=tA[s]??s;n&&(r+=`-${n}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const h=[`Unable to register library "${r}" with version "${e}":`];o&&h.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yi.warn(h.join(" "));return}ls(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function wb(s,e){if(s!==null&&typeof s!="function")throw rn.create("invalid-log-argument");pC(s,e)}function Tb(s){fC(s)}/**
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
 */const cA="firebase-heartbeat-database",uA=1,Ml="firebase-heartbeat-store";let _f=null;function Cb(){return _f||(_f=wC(cA,uA,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Ml)}catch(n){console.warn(n)}}}}).catch(s=>{throw rn.create("idb-open",{originalErrorMessage:s.message})})),_f}async function dA(s){try{const n=(await Cb()).transaction(Ml),r=await n.objectStore(Ml).get(Ab(s));return await n.done,r}catch(e){if(e instanceof Bt)yi.warn(e.message);else{const n=rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yi.warn(n.message)}}}async function Vv(s,e){try{const r=(await Cb()).transaction(Ml,"readwrite");await r.objectStore(Ml).put(e,Ab(s)),await r.done}catch(n){if(n instanceof Bt)yi.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yi.warn(r.message)}}}function Ab(s){return`${s.name}!${s.options.appId}`}/**
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
 */const hA=1024,fA=30;class pA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=qv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>fA){const h=_A(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qv(),{heartbeatsToSend:r,unsentEntries:o}=mA(this._heartbeatsCache.heartbeats),c=jc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return yi.warn(n),""}}}function qv(){return new Date().toISOString().substring(0,10)}function mA(s,e=hA){const n=[];let r=s.slice();for(const o of s){const c=n.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),Fv(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Fv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hc()?JT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fv(s){return jc(JSON.stringify({version:2,heartbeats:s})).length}function _A(s){if(s.length===0)return-1;let e=0,n=s[0].date;for(let r=1;r<s.length;r++)s[r].date<n&&(n=s[r].date,e=r);return e}/**
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
 */function yA(s){ls(new wn("platform-logger",e=>new AC(e),"PRIVATE")),ls(new wn("heartbeat",e=>new pA(e),"PRIVATE")),Dn(qc,Mf,s),Dn(qc,Mf,"esm2020"),Dn("fire-js","")}yA("");const vA=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Bt,SDK_VERSION:fs,_DEFAULT_ENTRY_NAME:rs,_addComponent:Dl,_addOrOverwriteComponent:vb,_apps:as,_clearComponents:iA,_components:Zr,_getProvider:bb,_isFirebaseApp:vp,_isFirebaseServerApp:Be,_isFirebaseServerAppSettings:Eb,_registerComponent:ls,_removeServiceInstance:nA,_serverApps:Xr,deleteApp:Ep,getApp:lA,getApps:oA,initializeApp:bp,initializeServerApp:aA,onLog:wb,registerVersion:Dn,setLogLevel:Tb},Symbol.toStringTag,{value:"Module"}));/**
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
 */class bA{constructor(e,n){this._delegate=e,this.firebase=n,Dl(e,new wn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ep(this._delegate)))}_getService(e,n=rs){var o;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((o=r.getComponent())==null?void 0:o.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=rs){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Dl(this._delegate,e)}_addOrOverwriteComponent(e){vb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const EA={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Gv=new Xs("app-compat","Firebase",EA);/**
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
 */function SA(s){const e={},n={__esModule:!0,initializeApp:c,app:o,registerVersion:Dn,setLogLevel:Tb,onLog:wb,apps:null,SDK_VERSION:fs,INTERNAL:{registerComponent:f,removeApp:r,useAsService:m,modularAPIs:vA}};n.default=n,Object.defineProperty(n,"apps",{get:h});function r(g){delete e[g]}function o(g){if(g=g||rs,!an(e,g))throw Gv.create("no-app",{appName:g});return e[g]}o.App=s;function c(g,v={}){const y=bp(g,v);if(an(e,y.name))return e[y.name];const E=new s(y,n);return e[y.name]=E,E}function h(){return Object.keys(e).map(g=>e[g])}function f(g){const v=g.name,y=v.replace("-compat","");if(ls(g)&&g.type==="PUBLIC"){const E=(k=o())=>{if(typeof k[y]!="function")throw Gv.create("invalid-app-argument",{appName:v});return k[y]()};g.serviceProps!==void 0&&Ol(E,g.serviceProps),n[y]=E,s.prototype[y]=function(...k){return this._getService.bind(this,v).apply(this,g.multipleInstances?k:[])}}return g.type==="PUBLIC"?n[y]:null}function m(g,v){return v==="serverAuth"?null:v}return n}/**
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
 */function Nb(){const s=SA(bA);s.INTERNAL={...s.INTERNAL,createFirebaseNamespace:Nb,extendNamespace:e,createSubscribe:mb,ErrorFactory:Xs,deepExtend:Ol};function e(n){Ol(s,n)}return s}const wA=Nb();/**
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
 */const Yv=new Kl("@firebase/app-compat"),TA="@firebase/app-compat",CA="0.5.6";/**
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
 */function AA(s){Dn(TA,CA,s)}/**
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
 */try{const s=lb();if(s.firebase!==void 0){Yv.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=s.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Yv.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const es=wA;AA();var NA="firebase",RA="12.6.0";/**
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
 */es.registerVersion(NA,RA,"app-compat");const cl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Hr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function xA(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Rb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IA=xA,OA=Rb,xb=new Xs("auth","Firebase",Rb());/**
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
 */const Fc=new Kl("@firebase/auth");function kA(s,...e){Fc.logLevel<=Ne.WARN&&Fc.warn(`Auth (${fs}): ${s}`,...e)}function Lc(s,...e){Fc.logLevel<=Ne.ERROR&&Fc.error(`Auth (${fs}): ${s}`,...e)}/**
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
 */function wt(s,...e){throw wp(s,...e)}function at(s,...e){return wp(s,...e)}function Sp(s,e,n){const r={...OA(),[e]:n};return new Xs("auth","Firebase",r).create(e,{appName:s.name})}function pt(s){return Sp(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function la(s,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(s,"argument-error"),Sp(s,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wp(s,...e){if(typeof s!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(n,...r)}return xb.create(s,...e)}function z(s,e,...n){if(!s)throw wp(e,...n)}function Gn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Lc(e),new Error(e)}function Ln(s,e){s||Gn(e)}/**
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
 */function Ll(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function Tp(){return Wv()==="http:"||Wv()==="https:"}function Wv(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
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
 */function DA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tp()||hb()||"connection"in navigator)?navigator.onLine:!0}function MA(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Xl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=mp()||cu()}get(){return DA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cp(s,e){Ln(s.emulator,"Emulator should always be set here");const{url:n}=s.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ib{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UA=new Xl(3e4,6e4);function We(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function Qe(s,e,n,r,o={}){return Ob(s,o,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const f=Zs({key:s.config.apiKey,...h}).slice(1),m=await s._getAdditionalHeaders();m["Content-Type"]="application/json",s.languageCode&&(m["X-Firebase-Locale"]=s.languageCode);const g={method:e,headers:m,...c};return XT()||(g.referrerPolicy="no-referrer"),s.emulatorConfig&&aa(s.emulatorConfig.host)&&(g.credentials="include"),Ib.fetch()(await kb(s,s.config.apiHost,n,f),g)})}async function Ob(s,e,n){s._canInitEmulator=!1;const r={...LA,...e};try{const o=new jA(s),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw yl(s,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const f=c.ok?h.errorMessage:h.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw yl(s,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw yl(s,"email-already-in-use",h);if(m==="USER_DISABLED")throw yl(s,"user-disabled",h);const v=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Sp(s,v,g);wt(s,v)}}catch(o){if(o instanceof Bt)throw o;wt(s,"network-request-failed",{message:String(o)})}}async function Ei(s,e,n,r,o={}){const c=await Qe(s,e,n,r,o);return"mfaPendingCredential"in c&&wt(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function kb(s,e,n,r){const o=`${e}${n}?${r}`,c=s,h=c.config.emulator?Cp(s.config,o):`${s.config.apiScheme}://${o}`;return PA.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function zA(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),UA.get())})}}function yl(s,e,n){const r={appName:s.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=at(s,e,r);return o.customData._tokenResponse=n,o}/**
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
 */function Qv(s){return s!==void 0&&s.getResponse!==void 0}function Kv(s){return s!==void 0&&s.enterprise!==void 0}class Db{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function HA(s){return(await Qe(s,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Mb(s,e){return Qe(s,"GET","/v2/recaptchaConfig",We(s,e))}/**
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
 */async function BA(s,e){return Qe(s,"POST","/v1/accounts:delete",e)}async function VA(s,e){return Qe(s,"POST","/v1/accounts:update",e)}async function Gc(s,e){return Qe(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function El(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qA(s,e=!1){const n=ee(s),r=await n.getIdToken(e),o=du(r);z(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:r,authTime:El(yf(o.auth_time)),issuedAtTime:El(yf(o.iat)),expirationTime:El(yf(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function yf(s){return Number(s)*1e3}function du(s){const[e,n,r]=s.split(".");if(e===void 0||n===void 0||r===void 0)return Lc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Il(n);return o?JSON.parse(o):(Lc("Failed to decode base64 JWT payload"),null)}catch(o){return Lc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Xv(s){const e=du(s);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(s,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&FA(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function FA({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class GA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=El(this.lastLoginAt),this.creationTime=El(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pl(s){var y;const e=s.auth,n=await s.getIdToken(),r=await vi(s,Gc(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const o=r.users[0];s._notifyReloadListener(o);const c=(y=o.providerUserInfo)!=null&&y.length?Lb(o.providerUserInfo):[],h=WA(s.providerData,c),f=s.isAnonymous,m=!(s.email&&o.passwordHash)&&!(h!=null&&h.length),g=f?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Lf(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(s,v)}async function YA(s){const e=ee(s);await Pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WA(s,e){return[...s.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Lb(s){return s.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function QA(s,e){const n=await Ob(s,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,h=await kb(s,o,"/v1/token",`key=${c}`),f=await s._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:r};return s.emulatorConfig&&aa(s.emulatorConfig.host)&&(m.credentials="include"),Ib.fetch()(h,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KA(s,e){return Qe(s,"POST","/v2/accounts:revokeToken",We(s,e))}/**
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
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=Xv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:c}=await QA(e,n);this.updateTokensAndExpiration(r,o,Number(c))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:c}=n,h=new qr;return r&&(z(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),o&&(z(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),c&&(z(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
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
 */function Ki(s,e){z(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class On{constructor({uid:e,auth:n,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new GA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Lf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qA(this,e)}reload(){return YA(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(pt(this.auth));const e=await this.getIdToken();return await vi(this,BA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,h=n.photoURL??void 0,f=n.tenantId??void 0,m=n._redirectEventId??void 0,g=n.createdAt??void 0,v=n.lastLoginAt??void 0,{uid:y,emailVerified:E,isAnonymous:k,providerData:j,stsTokenManager:G}=n;z(y&&G,e,"internal-error");const le=qr.fromJSON(this.name,G);z(typeof y=="string",e,"internal-error"),Ki(r,e.name),Ki(o,e.name),z(typeof E=="boolean",e,"internal-error"),z(typeof k=="boolean",e,"internal-error"),Ki(c,e.name),Ki(h,e.name),Ki(f,e.name),Ki(m,e.name),Ki(g,e.name),Ki(v,e.name);const de=new On({uid:y,auth:e,email:o,emailVerified:E,displayName:r,isAnonymous:k,photoURL:h,phoneNumber:c,tenantId:f,stsTokenManager:le,createdAt:g,lastLoginAt:v});return j&&Array.isArray(j)&&(de.providerData=j.map(Pe=>({...Pe}))),m&&(de._redirectEventId=m),de}static async _fromIdTokenResponse(e,n,r=!1){const o=new qr;o.updateFromServerResponse(n);const c=new On({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Pl(c),c}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];z(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Lb(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),f=new qr;f.updateFromIdToken(r);const m=new On({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Lf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(m,g),m}}/**
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
 */const Zv=new Map;function sn(s){Ln(s instanceof Function,"Expected a class definition");let e=Zv.get(s);return e?(Ln(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Zv.set(s,e),e)}/**
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
 */class Pb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pb.type="NONE";const Jr=Pb;/**
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
 */function Hs(s,e,n){return`firebase:${s}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:c}=this.auth;this.fullUserKey=Hs(this.userKey,o.apiKey,c),this.fullPersistenceKey=Hs("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Gc(this.auth,{idToken:e}).catch(()=>{});return n?On._fromGetAccountInfoResponse(this.auth,n,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(sn(Jr),e,r);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=o[0]||sn(Jr);const h=Hs(r,e.config.apiKey,e.name);let f=null;for(const g of n)try{const v=await g._get(h);if(v){let y;if(typeof v=="string"){const E=await Gc(e,{idToken:v}).catch(()=>{});if(!E)break;y=await On._fromGetAccountInfoResponse(e,E,v)}else y=On._fromJSON(e,v);g!==c&&(f=y),c=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new Fr(c,e,r):(c=m[0],f&&await c._set(h,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new Fr(c,e,r))}}/**
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
 */function Jv(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ub(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bb(e))return"Blackberry";if(Vb(e))return"Webos";if(zb(e))return"Safari";if((e.includes("chrome/")||jb(e))&&!e.includes("edge/"))return"Chrome";if(Zl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ub(s=lt()){return/firefox\//i.test(s)}function zb(s=lt()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jb(s=lt()){return/crios\//i.test(s)}function Hb(s=lt()){return/iemobile/i.test(s)}function Zl(s=lt()){return/android/i.test(s)}function Bb(s=lt()){return/blackberry/i.test(s)}function Vb(s=lt()){return/webos/i.test(s)}function Jl(s=lt()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function XA(s=lt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(s)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(s)}function ZA(s=lt()){var e;return Jl(s)&&!!((e=window.navigator)!=null&&e.standalone)}function JA(){return fb()&&document.documentMode===10}function qb(s=lt()){return Jl(s)||Zl(s)||Vb(s)||Bb(s)||/windows phone/i.test(s)||Hb(s)}/**
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
 */function Fb(s,e=[]){let n;switch(s){case"Browser":n=Jv(lt());break;case"Worker":n=`${Jv(lt())}-${s}`;break;default:n=s}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class $A{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=c=>new Promise((h,f)=>{try{const m=e(c);h(m)}catch(m){f(m)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eN(s,e={}){return Qe(s,"GET","/v2/passwordPolicy",We(s,e))}/**
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
 */const tN=6;class nN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class iN{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $v(this),this.idTokenSubscription=new $v(this),this.beforeStateQueue=new $A(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,o,c;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gc(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var c;if(Be(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(c=this.redirectUser)==null?void 0:c._redirectEventId,f=r==null?void 0:r._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===f)&&(m!=null&&m.user)&&(r=m.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(h){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(pt(this));const n=e?ee(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eN(this),n=new nN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(f,this,"internal-error"),f.then(()=>{h||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,r,o);return()=>{h=!0,m()}}else{const m=e.addObserver(n);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&kA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Fe(s){return ee(s)}class $v{constructor(e){this.auth=e,this.observer=null,this.addObserver=mb(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sN(s){$l=s}function Ap(s){return $l.loadJS(s)}function rN(){return $l.recaptchaV2Script}function aN(){return $l.recaptchaEnterpriseScript}function lN(){return $l.gapiScript}function Gb(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
 */const oN=500,cN=6e4,kc=1e12;class uN{constructor(e){this.auth=e,this.counter=kc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new fN(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||kc;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||kc;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||kc;return(r=this._widgets.get(n))==null||r.execute(),""}}class dN{constructor(){this.enterprise=new hN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class fN{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;z(o,"argument-error",{appName:n}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=pN(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cN)},oN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function pN(s){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<s;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const mN="recaptcha-enterprise",Sl="NO_RECAPTCHA";class Yb{constructor(e){this.type=mN,this.auth=Fe(e)}async verify(e="verify",n=!1){async function r(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,f)=>{Mb(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new Db(m);return c.tenantId==null?c._agentRecaptchaConfig=g:c._tenantRecaptchaConfigs[c.tenantId]=g,h(g.siteKey)}}).catch(m=>{f(m)})})}function o(c,h,f){const m=window.grecaptcha;Kv(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:e}).then(g=>{h(g)}).catch(()=>{h(Sl)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new dN().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{r(this.auth).then(f=>{if(!n&&Kv(window.grecaptcha))o(f,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=aN();m.length!==0&&(m+=f),Ap(m).then(()=>{o(f,c,h)}).catch(g=>{h(g)})}}).catch(f=>{h(f)})})}}async function ul(s,e,n,r=!1,o=!1){const c=new Yb(s);let h;if(o)h=Sl;else try{h=await c.verify(n)}catch{h=await c.verify(n,!0)}const f={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function ts(s,e,n,r,o){var c,h;if(o==="EMAIL_PASSWORD_PROVIDER")if((c=s._getRecaptchaConfig())!=null&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await ul(s,e,n,n==="getOobCode");return r(s,f)}else return r(s,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await ul(s,e,n,n==="getOobCode");return r(s,m)}else return Promise.reject(f)});else if(o==="PHONE_PROVIDER")if((h=s._getRecaptchaConfig())!=null&&h.isProviderEnabled("PHONE_PROVIDER")){const f=await ul(s,e,n);return r(s,f).catch(async m=>{var g;if(((g=s._getRecaptchaConfig())==null?void 0:g.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const v=await ul(s,e,n,!1,!0);return r(s,v)}return Promise.reject(m)})}else{const f=await ul(s,e,n,!1,!0);return r(s,f)}else return Promise.reject(o+" provider is not supported.")}async function gN(s){const e=Fe(s),n=await Mb(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Db(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Yb(e).verify()}function _N(s,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yN(s,e,n){const r=Fe(s);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(n!=null&&n.disableWarnings),c=Wb(e),{host:h,port:f}=vN(e),m=f===null?"":`:${f}`,g={url:`${c}//${h}${m}/`},v=Object.freeze({host:h,port:f,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(Kr(g,r.config.emulator)&&Kr(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,aa(h)?(ob(`${c}//${h}${m}`),cb("Auth",!0)):o||bN()}function Wb(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function vN(s){const e=Wb(s),n=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const c=o[1];return{host:c,port:e0(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:e0(h)}}}function e0(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function bN(){function s(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class oa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}/**
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
 */async function Qb(s,e){return Qe(s,"POST","/v1/accounts:resetPassword",We(s,e))}async function EN(s,e){return Qe(s,"POST","/v1/accounts:update",e)}async function SN(s,e){return Qe(s,"POST","/v1/accounts:signUp",e)}async function wN(s,e){return Qe(s,"POST","/v1/accounts:update",We(s,e))}/**
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
 */async function TN(s,e){return Ei(s,"POST","/v1/accounts:signInWithPassword",We(s,e))}async function hu(s,e){return Qe(s,"POST","/v1/accounts:sendOobCode",We(s,e))}async function CN(s,e){return hu(s,e)}async function AN(s,e){return hu(s,e)}async function NN(s,e){return hu(s,e)}async function RN(s,e){return hu(s,e)}/**
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
 */async function xN(s,e){return Ei(s,"POST","/v1/accounts:signInWithEmailLink",We(s,e))}async function IN(s,e){return Ei(s,"POST","/v1/accounts:signInWithEmailLink",We(s,e))}/**
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
 */class Ul extends oa{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ts(e,n,"signInWithPassword",TN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return xN(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ts(e,r,"signUpPassword",SN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return IN(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function gi(s,e){return Ei(s,"POST","/v1/accounts:signInWithIdp",We(s,e))}/**
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
 */const ON="http://localhost";class Wn extends oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...c}=n;if(!r||!o)return null;const h=new Wn(r,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:ON,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zs(n)}return e}}/**
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
 */async function t0(s,e){return Qe(s,"POST","/v1/accounts:sendVerificationCode",We(s,e))}async function kN(s,e){return Ei(s,"POST","/v1/accounts:signInWithPhoneNumber",We(s,e))}async function DN(s,e){const n=await Ei(s,"POST","/v1/accounts:signInWithPhoneNumber",We(s,e));if(n.temporaryProof)throw yl(s,"account-exists-with-different-credential",n);return n}const MN={USER_NOT_FOUND:"user-not-found"};async function LN(s,e){const n={...e,operation:"REAUTH"};return Ei(s,"POST","/v1/accounts:signInWithPhoneNumber",We(s,n),MN)}/**
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
 */class Bs extends oa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Bs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Bs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return kN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return DN(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return LN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:o}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:o,temporaryProof:c}=e;return!r&&!n&&!o&&!c?null:new Bs({verificationId:n,verificationCode:r,phoneNumber:o,temporaryProof:c})}}/**
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
 */function PN(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UN(s){const e=Vr(_l(s)).link,n=e?Vr(_l(e)).deep_link_id:null,r=Vr(_l(s)).deep_link_id;return(r?Vr(_l(r)).link:null)||r||n||e||s}class fu{constructor(e){const n=Vr(_l(e)),r=n.apiKey??null,o=n.oobCode??null,c=PN(n.mode??null);z(r&&o&&c,"argument-error"),this.apiKey=r,this.operation=c,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=UN(e);try{return new fu(n)}catch{return null}}}/**
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
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return Ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fu.parseLink(n);return z(r,"argument-error"),Ul._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Si{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ca extends Si{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Gr extends ca{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),Wn._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Wn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Gr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Gr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:c,nonce:h,providerId:f}=e;if(!r&&!o&&!n&&!c||!f)return null;try{return new Gr(f)._credential({idToken:n,accessToken:r,nonce:h,pendingToken:c})}catch{return null}}}/**
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
 */class Bn extends ca{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class Vn extends ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
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
 */class qn extends ca{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */const zN="http://localhost";class $r extends oa{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,pendingToken:c}=n;return!r||!o||!c||r!==o?null:new $r(r,c)}static _create(e,n){return new $r(e,n)}buildRequest(){return{requestUri:zN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const jN="saml.";class Yc extends Si{constructor(e){z(e.startsWith(jN),"argument-error"),super(e)}static credentialFromResult(e){return Yc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Yc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=$r.fromJSON(e);return z(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return $r._create(r,n)}catch{return null}}}/**
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
 */class Fn extends ca{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
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
 */async function Kb(s,e){return Ei(s,"POST","/v1/accounts:signUp",We(s,e))}/**
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
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const c=await On._fromIdTokenResponse(e,r,o),h=n0(r);return new Tn({user:c,providerId:h,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=n0(r);return new Tn({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function n0(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */async function HN(s){var o;if(Be(s.app))return Promise.reject(pt(s));const e=Fe(s);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new Tn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await Kb(e,{returnSecureToken:!0}),r=await Tn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class Wc extends Bt{constructor(e,n,r,o){super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Wc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new Wc(e,n,r,o)}}function Xb(s,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(s):n._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Wc._fromErrorAndOperation(s,c,e,r):c})}/**
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
 */function Zb(s){return new Set(s.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function BN(s,e){const n=ee(s);await pu(!0,n,e);const{providerUserInfo:r}=await VA(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),o=Zb(r||[]);return n.providerData=n.providerData.filter(c=>o.has(c.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Np(s,e,n=!1){const r=await vi(s,e._linkToIdToken(s.auth,await s.getIdToken()),n);return Tn._forOperation(s,"link",r)}async function pu(s,e,n){await Pl(e);const r=Zb(e.providerData),o=s===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===s,e.auth,o)}/**
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
 */async function Jb(s,e,n=!1){const{auth:r}=s;if(Be(r.app))return Promise.reject(pt(r));const o="reauthenticate";try{const c=await vi(s,Xb(r,o,e,s),n);z(c.idToken,r,"internal-error");const h=du(c.idToken);z(h,r,"internal-error");const{sub:f}=h;return z(s.uid===f,r,"user-mismatch"),Tn._forOperation(s,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),c}}/**
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
 */async function $b(s,e,n=!1){if(Be(s.app))return Promise.reject(pt(s));const r="signIn",o=await Xb(s,r,e),c=await Tn._fromIdTokenResponse(s,r,o);return n||await s._updateCurrentUser(c.user),c}async function mu(s,e){return $b(Fe(s),e)}async function eE(s,e){const n=ee(s);return await pu(!1,n,e.providerId),Np(n,e)}async function tE(s,e){return Jb(ee(s),e)}/**
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
 */async function VN(s,e){return Ei(s,"POST","/v1/accounts:signInWithCustomToken",We(s,e))}/**
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
 */async function qN(s,e){if(Be(s.app))return Promise.reject(pt(s));const n=Fe(s),r=await VN(n,{token:e,returnSecureToken:!0}),o=await Tn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(o.user),o}/**
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
 */class eo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Rp._fromServerResponse(e,n):"totpInfo"in n?xp._fromServerResponse(e,n):wt(e,"internal-error")}}class Rp extends eo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Rp(n)}}class xp extends eo{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new xp(n)}}/**
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
 */function gu(s,e,n){var r;z(((r=n.url)==null?void 0:r.length)>0,s,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,s,"invalid-dynamic-link-domain"),z(typeof n.linkDomain>"u"||n.linkDomain.length>0,s,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,s,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,s,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Ip(s){const e=Fe(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FN(s,e,n){const r=Fe(s),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&gu(r,o,n),await ts(r,o,"getOobCode",AN,"EMAIL_PASSWORD_PROVIDER")}async function GN(s,e,n){await Qb(ee(s),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ip(s),r})}async function YN(s,e){await wN(ee(s),{oobCode:e})}async function nE(s,e){const n=ee(s),r=await Qb(n,{oobCode:e}),o=r.requestType;switch(z(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,n,"internal-error");default:z(r.email,n,"internal-error")}let c=null;return r.mfaInfo&&(c=eo._fromServerResponse(Fe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:c},operation:o}}async function WN(s,e){const{data:n}=await nE(ee(s),e);return n.email}async function QN(s,e,n){if(Be(s.app))return Promise.reject(pt(s));const r=Fe(s),h=await ts(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Kb,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Ip(s),m}),f=await Tn._fromIdTokenResponse(r,"signIn",h);return await r._updateCurrentUser(f.user),f}function KN(s,e,n){return Be(s.app)?Promise.reject(pt(s)):mu(ee(s),ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ip(s),r})}/**
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
 */async function XN(s,e,n){const r=Fe(s),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function c(h,f){z(f.handleCodeInApp,r,"argument-error"),f&&gu(r,h,f)}c(o,n),await ts(r,o,"getOobCode",NN,"EMAIL_PASSWORD_PROVIDER")}function ZN(s,e){const n=fu.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function JN(s,e,n){if(Be(s.app))return Promise.reject(pt(s));const r=ee(s),o=ps.credentialWithLink(e,n||Ll());return z(o._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),mu(r,o)}/**
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
 */async function $N(s,e){return Qe(s,"POST","/v1/accounts:createAuthUri",We(s,e))}/**
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
 */async function eR(s,e){const n=Tp()?Ll():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:o}=await $N(ee(s),r);return o||[]}async function tR(s,e){const n=ee(s),o={requestType:"VERIFY_EMAIL",idToken:await s.getIdToken()};e&&gu(n.auth,o,e);const{email:c}=await CN(n.auth,o);c!==s.email&&await s.reload()}async function nR(s,e,n){const r=ee(s),c={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await s.getIdToken(),newEmail:e};n&&gu(r.auth,c,n);const{email:h}=await RN(r.auth,c);h!==s.email&&await s.reload()}/**
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
 */async function iR(s,e){return Qe(s,"POST","/v1/accounts:update",e)}/**
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
 */async function sR(s,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ee(s),c={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},h=await vi(r,iR(r.auth,c));r.displayName=h.displayName||null,r.photoURL=h.photoUrl||null;const f=r.providerData.find(({providerId:m})=>m==="password");f&&(f.displayName=r.displayName,f.photoURL=r.photoURL),await r._updateTokensIfNecessary(h)}function rR(s,e){const n=ee(s);return Be(n.auth.app)?Promise.reject(pt(n.auth)):iE(n,e,null)}function aR(s,e){return iE(ee(s),null,e)}async function iE(s,e,n){const{auth:r}=s,c={idToken:await s.getIdToken(),returnSecureToken:!0};e&&(c.email=e),n&&(c.password=n);const h=await vi(s,EN(r,c));await s._updateTokensIfNecessary(h,!0)}/**
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
 */function lR(s){var o,c;if(!s)return null;const{providerId:e}=s,n=s.rawUserInfo?JSON.parse(s.rawUserInfo):{},r=s.isNewUser||s.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(s!=null&&s.idToken)){const h=(c=(o=du(s.idToken))==null?void 0:o.firebase)==null?void 0:c.sign_in_provider;if(h){const f=h!=="anonymous"&&h!=="custom"?h:null;return new Yr(r,f)}}if(!e)return null;switch(e){case"facebook.com":return new oR(r,n);case"github.com":return new cR(r,n);case"google.com":return new uR(r,n);case"twitter.com":return new dR(r,n,s.screenName||null);case"custom":case"anonymous":return new Yr(r,null);default:return new Yr(r,e,n)}}class Yr{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class sE extends Yr{constructor(e,n,r,o){super(e,n,r),this.username=o}}class oR extends Yr{constructor(e,n){super(e,"facebook.com",n)}}class cR extends sE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class uR extends Yr{constructor(e,n){super(e,"google.com",n)}}class dR extends sE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function hR(s){const{user:e,_tokenResponse:n}=s;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:lR(n)}/**
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
 */class zs{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new zs("enroll",e,n)}static _fromMfaPendingCredential(e){return new zs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if((n=e.multiFactorSession)!=null&&n.pendingCredential)return zs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)!=null&&r.idToken)return zs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Op{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Fe(e),o=n.customData._serverResponse,c=(o.mfaInfo||[]).map(f=>eo._fromServerResponse(r,f));z(o.mfaPendingCredential,r,"internal-error");const h=zs._fromMfaPendingCredential(o.mfaPendingCredential);return new Op(h,c,async f=>{const m=await f._process(r,h);delete o.mfaInfo,delete o.mfaPendingCredential;const g={...o,idToken:m.idToken,refreshToken:m.refreshToken};switch(n.operationType){case"signIn":const v=await Tn._fromIdTokenResponse(r,n.operationType,g);return await r._updateCurrentUser(v.user),v;case"reauthenticate":return z(n.user,r,"internal-error"),Tn._forOperation(n.user,n.operationType,g);default:wt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function fR(s,e){var o;const n=ee(s),r=e;return z(e.customData.operationType,n,"argument-error"),z((o=r.customData._serverResponse)==null?void 0:o.mfaPendingCredential,n,"argument-error"),Op._fromError(n,r)}/**
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
 */function i0(s,e){return Qe(s,"POST","/v2/accounts/mfaEnrollment:start",We(s,e))}function pR(s,e){return Qe(s,"POST","/v2/accounts/mfaEnrollment:finalize",We(s,e))}function mR(s,e){return Qe(s,"POST","/v2/accounts/mfaEnrollment:withdraw",We(s,e))}class kp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>eo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new kp(e)}async getSession(){return zs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,o=await this.getSession(),c=await vi(this.user,r._process(this.user.auth,o,n));return await this.user._updateTokensIfNecessary(c),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const o=await vi(this.user,mR(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:c})=>c!==n),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const vf=new WeakMap;function gR(s){const e=ee(s);return vf.has(e)||vf.set(e,kp._fromUser(e)),vf.get(e)}const Qc="__sak";/**
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
 */class rE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qc,"1"),this.storage.removeItem(Qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _R=1e3,yR=10;class aE extends rE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((h,f,m)=>{this.notifyListeners(h,m)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(r);!n&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);JA()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,yR):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_R)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aE.type="LOCAL";const Dp=aE;/**
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
 */class lE extends rE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lE.type="SESSION";const Fs=lE;/**
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
 */function vR(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new _u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:c}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const f=Array.from(h).map(async g=>g(n.origin,c)),m=await vR(f);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_u.receivers=[];/**
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
 */function to(s="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return s+n}/**
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
 */class bR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((f,m)=>{const g=to("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},r);h={messageChannel:o,onMessage(y){const E=y;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(v),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),f(E.data.response);break;default:clearTimeout(v),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nt(){return window}function ER(s){nt().location.href=s}/**
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
 */function Mp(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function SR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wR(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function TR(){return Mp()?self:null}/**
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
 */const oE="firebaseLocalStorageDb",CR=1,Kc="firebaseLocalStorage",cE="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yu(s,e){return s.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function AR(){const s=indexedDB.deleteDatabase(oE);return new no(s).toPromise()}function Pf(){const s=indexedDB.open(oE,CR);return new Promise((e,n)=>{s.addEventListener("error",()=>{n(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Kc,{keyPath:cE})}catch(o){n(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Kc)?e(r):(r.close(),await AR(),e(await Pf()))})})}async function s0(s,e,n){const r=yu(s,!0).put({[cE]:e,value:n});return new no(r).toPromise()}async function NR(s,e){const n=yu(s,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function r0(s,e){const n=yu(s,!0).delete(e);return new no(n).toPromise()}const RR=800,xR=3;class uE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_u._getInstance(TR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await SR(),!this.activeServiceWorker)return;this.sender=new bR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pf();return await s0(e,Qc,"1"),await r0(e,Qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>s0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>r0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=yu(o,!1).getAll();return new no(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uE.type="LOCAL";const zl=uE;/**
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
 */function a0(s,e){return Qe(s,"POST","/v2/accounts/mfaSignIn:start",We(s,e))}function IR(s,e){return Qe(s,"POST","/v2/accounts/mfaSignIn:finalize",We(s,e))}/**
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
 */const bf=Gb("rcb"),OR=new Xl(3e4,6e4);class kR{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=nt().grecaptcha)!=null&&e.render)}load(e,n=""){return z(DR(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Qv(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((r,o)=>{const c=nt().setTimeout(()=>{o(at(e,"network-request-failed"))},OR.get());nt()[bf]=()=>{nt().clearTimeout(c),delete nt()[bf];const f=nt().grecaptcha;if(!f||!Qv(f)){o(at(e,"internal-error"));return}const m=f.render;f.render=(g,v)=>{const y=m(g,v);return this.counter++,y},this.hostLanguage=n,r(f)};const h=`${rN()}?${Zs({onload:bf,render:"explicit",hl:n})}`;Ap(h).catch(()=>{clearTimeout(c),o(at(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=nt().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function DR(s){return s.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(s)}class MR{async load(e){return new uN(e)}clearedOneInstance(){}}/**
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
 */const wl="recaptcha",LR={theme:"light",type:"image"};let PR=class{constructor(e,n,r={...LR}){this.parameters=r,this.type=wl,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof n=="string"?document.getElementById(n):n;z(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new MR:new kR,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(o=>{const c=h=>{h&&(this.tokenChangeListeners.delete(c),o(h))};this.tokenChangeListeners.add(c),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=nt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(Tp()&&!Mp(),this.auth,"internal-error"),await UR(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await HA(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function UR(){let s=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}s=()=>e(),window.addEventListener("load",s)}).catch(e=>{throw s&&window.removeEventListener("load",s),e})}/**
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
 */class Lp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Bs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function zR(s,e,n){if(Be(s.app))return Promise.reject(pt(s));const r=Fe(s),o=await vu(r,e,ee(n));return new Lp(o,c=>mu(r,c))}async function jR(s,e,n){const r=ee(s);await pu(!1,r,"phone");const o=await vu(r.auth,e,ee(n));return new Lp(o,c=>eE(r,c))}async function HR(s,e,n){const r=ee(s);if(Be(r.auth.app))return Promise.reject(pt(r.auth));const o=await vu(r.auth,e,ee(n));return new Lp(o,c=>tE(r,c))}async function vu(s,e,n){var r;if(!s._getRecaptchaConfig())try{await gN(s)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const c=o.session;if("phoneNumber"in o){z(c.type==="enroll",s,"internal-error");const h={idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ts(s,h,"mfaSmsEnrollment",async(v,y)=>{if(y.phoneEnrollmentInfo.captchaResponse===Sl){z((n==null?void 0:n.type)===wl,v,"argument-error");const E=await Ef(v,y,n);return i0(v,E)}return i0(v,y)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneSessionInfo.sessionInfo}else{z(c.type==="signin",s,"internal-error");const h=((r=o.multiFactorHint)==null?void 0:r.uid)||o.multiFactorUid;z(h,s,"missing-multi-factor-info");const f={mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ts(s,f,"mfaSmsSignIn",async(y,E)=>{if(E.phoneSignInInfo.captchaResponse===Sl){z((n==null?void 0:n.type)===wl,y,"argument-error");const k=await Ef(y,E,n);return a0(y,k)}return a0(y,E)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneResponseInfo.sessionInfo}}else{const c={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ts(s,c,"sendVerificationCode",async(g,v)=>{if(v.captchaResponse===Sl){z((n==null?void 0:n.type)===wl,g,"argument-error");const y=await Ef(g,v,n);return t0(g,y)}return t0(g,v)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).sessionInfo}}finally{n==null||n._reset()}}async function BR(s,e){const n=ee(s);if(Be(n.auth.app))return Promise.reject(pt(n.auth));await Np(n,e)}async function Ef(s,e,n){z(n.type===wl,s,"argument-error");const r=await n.verify();z(typeof r=="string",s,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,h=o.phoneEnrollmentInfo.captchaResponse,f=o.phoneEnrollmentInfo.clientType,m=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:r,captchaResponse:h,clientType:f,recaptchaVersion:m}}),o}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.captchaResponse,h=o.phoneSignInInfo.clientType,f=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:c,clientType:h,recaptchaVersion:f}}),o}else return Object.assign(o,{recaptchaToken:r}),o}/**
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
 */let Gs=class Pc{constructor(e){this.providerId=Pc.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,n){return vu(this.auth,e,ee(n))}static credential(e,n){return Bs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Pc.credentialFromTaggedObject(n)}static credentialFromError(e){return Pc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Bs._fromTokenResponse(n,r):null}};Gs.PROVIDER_ID="phone";Gs.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Js(s,e){return e?sn(e):(z(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Pp extends oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VR(s){return $b(s.auth,new Pp(s),s.bypassAuthState)}function qR(s){const{auth:e,user:n}=s;return z(n,e,"internal-error"),Jb(n,new Pp(s),s.bypassAuthState)}async function FR(s){const{auth:e,user:n}=s;return z(n,e,"internal-error"),Np(n,new Pp(s),s.bypassAuthState)}/**
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
 */class dE{constructor(e,n,r,o,c=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:c,error:h,type:f}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:n,sessionId:r,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VR;case"linkViaPopup":case"linkViaRedirect":return FR;case"reauthViaPopup":case"reauthViaRedirect":return qR;default:wt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const GR=new Xl(2e3,1e4);async function YR(s,e,n){if(Be(s.app))return Promise.reject(at(s,"operation-not-supported-in-this-environment"));const r=Fe(s);la(s,e,Si);const o=Js(r,n);return new pi(r,"signInViaPopup",e,o).executeNotNull()}async function WR(s,e,n){const r=ee(s);if(Be(r.auth.app))return Promise.reject(at(r.auth,"operation-not-supported-in-this-environment"));la(r.auth,e,Si);const o=Js(r.auth,n);return new pi(r.auth,"reauthViaPopup",e,o,r).executeNotNull()}async function QR(s,e,n){const r=ee(s);la(r.auth,e,Si);const o=Js(r.auth,n);return new pi(r.auth,"linkViaPopup",e,o,r).executeNotNull()}class pi extends dE{constructor(e,n,r,o,c){super(e,n,o,c),this.provider=r,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GR.get())};e()}}pi.currentPopupAction=null;/**
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
 */const KR="pendingRedirect",Tl=new Map;class XR extends dE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tl.get(this.auth._key());if(!e){try{const r=await ZR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tl.set(this.auth._key(),e)}return this.bypassAuthState||Tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZR(s,e){const n=fE(e),r=hE(s);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}async function Up(s,e){return hE(s)._set(fE(e),"true")}function JR(){Tl.clear()}function zp(s,e){Tl.set(s._key(),e)}function hE(s){return sn(s._redirectPersistence)}function fE(s){return Hs(KR,s.config.apiKey,s.name)}/**
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
 */function $R(s,e,n){return ex(s,e,n)}async function ex(s,e,n){if(Be(s.app))return Promise.reject(pt(s));const r=Fe(s);la(s,e,Si),await r._initializationPromise;const o=Js(r,n);return await Up(o,r),o._openRedirect(r,e,"signInViaRedirect")}function tx(s,e,n){return nx(s,e,n)}async function nx(s,e,n){const r=ee(s);if(la(r.auth,e,Si),Be(r.auth.app))return Promise.reject(pt(r.auth));await r.auth._initializationPromise;const o=Js(r.auth,n);await Up(o,r.auth);const c=await pE(r);return o._openRedirect(r.auth,e,"reauthViaRedirect",c)}function ix(s,e,n){return sx(s,e,n)}async function sx(s,e,n){const r=ee(s);la(r.auth,e,Si),await r.auth._initializationPromise;const o=Js(r.auth,n);await pu(!1,r,e.providerId),await Up(o,r.auth);const c=await pE(r);return o._openRedirect(r.auth,e,"linkViaRedirect",c)}async function rx(s,e){return await Fe(s)._initializationPromise,bu(s,e,!1)}async function bu(s,e,n=!1){if(Be(s.app))return Promise.reject(pt(s));const r=Fe(s),o=Js(r,e),h=await new XR(r,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}async function pE(s){const e=to(`${s.uid}:::`);return s._redirectEventId=e,await s.auth._setRedirectUser(s),await s.auth._persistUserIfCurrent(s),e}/**
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
 */const ax=600*1e3;class mE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gE(e)){const o=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ax&&this.cachedEventUids.clear(),this.cachedEventUids.has(l0(e))}saveEventToCache(e){this.cachedEventUids.add(l0(e)),this.lastProcessedEventTime=Date.now()}}function l0(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function gE({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lx(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gE(s);default:return!1}}/**
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
 */async function _E(s,e={}){return Qe(s,"GET","/v1/projects",e)}/**
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
 */const ox=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cx=/^https?/;async function ux(s){if(s.config.emulator)return;const{authorizedDomains:e}=await _E(s);for(const n of e)try{if(dx(n))return}catch{}wt(s,"unauthorized-domain")}function dx(s){const e=Ll(),{protocol:n,hostname:r}=new URL(e);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&r===""?n==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===r}if(!cx.test(n))return!1;if(ox.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const hx=new Xl(3e4,6e4);function o0(){const s=nt().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let n=0;n<s.CP.length;n++)s.CP[n]=null}}function fx(s){return new Promise((e,n)=>{var o,c,h;function r(){o0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{o0(),n(at(s,"network-request-failed"))},timeout:hx.get()})}if((c=(o=nt().gapi)==null?void 0:o.iframes)!=null&&c.Iframe)e(gapi.iframes.getContext());else if((h=nt().gapi)!=null&&h.load)r();else{const f=Gb("iframefcb");return nt()[f]=()=>{gapi.load?r():n(at(s,"network-request-failed"))},Ap(`${lN()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw Uc=null,e})}let Uc=null;function px(s){return Uc=Uc||fx(s),Uc}/**
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
 */const mx=new Xl(5e3,15e3),gx="__/auth/iframe",_x="emulator/auth/iframe",yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bx(s){const e=s.config;z(e.authDomain,s,"auth-domain-config-required");const n=e.emulator?Cp(e,_x):`https://${s.config.authDomain}/${gx}`,r={apiKey:e.apiKey,appName:s.name,v:fs},o=vx.get(s.config.apiHost);o&&(r.eid=o);const c=s._getFrameworks();return c.length&&(r.fw=c.join(",")),`${n}?${Zs(r).slice(1)}`}async function Ex(s){const e=await px(s),n=nt().gapi;return z(n,s,"internal-error"),e.open({where:document.body,url:bx(s),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yx,dontclear:!0},r=>new Promise(async(o,c)=>{await r.restyle({setHideOnLeave:!1});const h=at(s,"network-request-failed"),f=nt().setTimeout(()=>{c(h)},mx.get());function m(){nt().clearTimeout(f),o(r)}r.ping(m).then(m,()=>{c(h)})}))}/**
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
 */const Sx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wx=500,Tx=600,Cx="_blank",Ax="http://localhost";class c0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nx(s,e,n,r=wx,o=Tx){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const m={...Sx,width:r.toString(),height:o.toString(),top:c,left:h},g=lt().toLowerCase();n&&(f=jb(g)?Cx:n),Ub(g)&&(e=e||Ax,m.scrollbars="yes");const v=Object.entries(m).reduce((E,[k,j])=>`${E}${k}=${j},`,"");if(ZA(g)&&f!=="_self")return Rx(e||"",f),new c0(null);const y=window.open(e||"",f,v);z(y,s,"popup-blocked");try{y.focus()}catch{}return new c0(y)}function Rx(s,e){const n=document.createElement("a");n.href=s,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xx="__/auth/handler",Ix="emulator/auth/handler",Ox=encodeURIComponent("fac");async function Uf(s,e,n,r,o,c){z(s.config.authDomain,s,"auth-domain-config-required"),z(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:n,redirectUrl:r,v:fs,eventId:o};if(e instanceof Si){e.setDefaultLanguage(s.languageCode),h.providerId=e.providerId||"",Bc(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,y]of Object.entries(c||{}))h[v]=y}if(e instanceof ca){const v=e.getScopes().filter(y=>y!=="");v.length>0&&(h.scopes=v.join(","))}s.tenantId&&(h.tid=s.tenantId);const f=h;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const m=await s._getAppCheckToken(),g=m?`#${Ox}=${encodeURIComponent(m)}`:"";return`${kx(s)}?${Zs(f).slice(1)}${g}`}function kx({config:s}){return s.emulator?Cp(s,Ix):`https://${s.authDomain}/${xx}`}/**
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
 */const Sf="webStorageSupport";class Dx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fs,this._completeRedirectFn=bu,this._overrideRedirectResult=zp}async _openPopup(e,n,r,o){var h;Ln((h=this.eventManagers[e._key()])==null?void 0:h.manager,"_initialize() not called before _openPopup()");const c=await Uf(e,n,r,Ll(),o);return Nx(e,c,to())}async _openRedirect(e,n,r,o){await this._originValidation(e);const c=await Uf(e,n,r,Ll(),o);return ER(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(Ln(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ex(e),r=new mE(e);return n.register("authEvent",o=>(z(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sf,{type:Sf},o=>{var h;const c=(h=o==null?void 0:o[0])==null?void 0:h[Sf];c!==void 0&&n(!!c),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ux(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qb()||zb()||Jl()}}const Mx=Dx;class Lx{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Gn("unexpected MultiFactorSessionType")}}}class jp extends Lx{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new jp(e)}_finalizeEnroll(e,n,r){return pR(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return IR(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class yE{constructor(){}static assertion(e){return jp._fromCredential(e)}}yE.FACTOR_ID="phone";var u0="@firebase/auth",d0="1.11.1";/**
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
 */class Px{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ux(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zx(s){ls(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=r.options;z(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:h,authDomain:f,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fb(s)},g=new iN(r,o,c,m);return _N(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new wn("auth-internal",e=>{const n=Fe(e.getProvider("auth").getImmediate());return(r=>new Px(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(u0,d0,Ux(s)),Dn(u0,d0,"esm2020")}/**
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
 */const jx=300;GT("authIdTokenMaxAge");function Hx(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}sN({loadJS(s){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=e,r.onerror=o=>{const c=at("internal-error");c.customData=o,n(c)},r.type="text/javascript",r.charset="UTF-8",Hx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zx("Browser");/**
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
 */function Ys(){return window}/**
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
 */const Bx=2e3;async function Vx(s,e,n){const{BuildInfo:r}=Ys();Ln(e.sessionId,"AuthEvent did not contain a session ID");const o=await Wx(e.sessionId),c={};return Jl()?c.ibi=r.packageName:Zl()?c.apn=r.packageName:wt(s,"operation-not-supported-in-this-environment"),r.displayName&&(c.appDisplayName=r.displayName),c.sessionId=o,Uf(s,n,e.type,void 0,e.eventId??void 0,c)}async function qx(s){const{BuildInfo:e}=Ys(),n={};Jl()?n.iosBundleId=e.packageName:Zl()?n.androidPackageName=e.packageName:wt(s,"operation-not-supported-in-this-environment"),await _E(s,n)}function Fx(s){const{cordova:e}=Ys();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let o=null;r?e.plugins.browsertab.openUrl(s):o=e.InAppBrowser.open(s,XA()?"_blank":"_system","location=yes"),n(o)})})}async function Gx(s,e,n){const{cordova:r}=Ys();let o=()=>{};try{await new Promise((c,h)=>{let f=null;function m(){var E;c();const y=(E=r.plugins.browsertab)==null?void 0:E.close;typeof y=="function"&&y(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function g(){f||(f=window.setTimeout(()=>{h(at(s,"redirect-cancelled-by-user"))},Bx))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&g()}e.addPassiveListener(m),document.addEventListener("resume",g,!1),Zl()&&document.addEventListener("visibilitychange",v,!1),o=()=>{e.removePassiveListener(m),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",v,!1),f&&window.clearTimeout(f)}})}finally{o()}}function Yx(s){var n,r,o,c,h,f,m,g,v,y;const e=Ys();z(typeof((n=e==null?void 0:e.universalLinks)==null?void 0:n.subscribe)=="function",s,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),z(typeof((r=e==null?void 0:e.BuildInfo)==null?void 0:r.packageName)<"u",s,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),z(typeof((h=(c=(o=e==null?void 0:e.cordova)==null?void 0:o.plugins)==null?void 0:c.browsertab)==null?void 0:h.openUrl)=="function",s,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((g=(m=(f=e==null?void 0:e.cordova)==null?void 0:f.plugins)==null?void 0:m.browsertab)==null?void 0:g.isAvailable)=="function",s,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),z(typeof((y=(v=e==null?void 0:e.cordova)==null?void 0:v.InAppBrowser)==null?void 0:y.open)=="function",s,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Wx(s){const e=Qx(s),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(o=>o.toString(16).padStart(2,"0")).join("")}function Qx(s){if(Ln(/[0-9a-zA-Z]+/.test(s),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(s);const e=new ArrayBuffer(s.length),n=new Uint8Array(e);for(let r=0;r<s.length;r++)n[r]=s.charCodeAt(r);return n}/**
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
 */const Kx=20;class Xx extends mE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Zx(s,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:eI(),postBody:null,tenantId:s.tenantId,error:at(s,"no-auth-event")}}function Jx(s,e){return zf()._set(jf(s),e)}async function h0(s){const e=await zf()._get(jf(s));return e&&await zf()._remove(jf(s)),e}function $x(s,e){var r,o;const n=nI(e);if(n.includes("/__/auth/callback")){const c=zc(n),h=c.firebaseError?tI(decodeURIComponent(c.firebaseError)):null,f=(o=(r=h==null?void 0:h.code)==null?void 0:r.split("auth/"))==null?void 0:o[1],m=f?at(f):null;return m?{type:s.type,eventId:s.eventId,tenantId:s.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:s.type,eventId:s.eventId,tenantId:s.tenantId,sessionId:s.sessionId,urlResponse:n,postBody:null}}return null}function eI(){const s=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Kx;n++){const r=Math.floor(Math.random()*e.length);s.push(e.charAt(r))}return s.join("")}function zf(){return sn(Dp)}function jf(s){return Hs("authEvent",s.config.apiKey,s.name)}function tI(s){try{return JSON.parse(s)}catch{return null}}function nI(s){const e=zc(s),n=e.link?decodeURIComponent(e.link):void 0,r=zc(n).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return zc(o).link||o||r||n||s}function zc(s){if(!(s!=null&&s.includes("?")))return{};const[e,...n]=s.split("?");return Vr(n.join("?"))}/**
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
 */const iI=500;class sI{constructor(){this._redirectPersistence=Fs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=bu,this._overrideRedirectResult=zp}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Xx(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){wt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,o){Yx(e);const c=await this._initialize(e);await c.initialized(),c.resetRedirect(),JR(),await this._originValidation(e);const h=Zx(e,r,o);await Jx(e,h);const f=await Vx(e,h,n),m=await Fx(f);return Gx(e,c,m)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qx(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:o,BuildInfo:c}=Ys(),h=setTimeout(async()=>{await h0(e),n.onEvent(f0())},iI),f=async v=>{clearTimeout(h);const y=await h0(e);let E=null;y&&(v!=null&&v.url)&&(E=$x(y,v.url)),n.onEvent(E||f0())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,f);const m=o,g=`${c.packageName.toLowerCase()}://`;Ys().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(g)&&f({url:v}),typeof m=="function")try{m(v)}catch(y){console.error(y)}}}}const rI=sI;function f0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:at("no-auth-event")}}/**
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
 */function aI(s,e){Fe(s)._logFramework(e)}var lI="@firebase/auth-compat",oI="0.6.1";/**
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
 */const cI=1e3;function Cl(){var s;return((s=self==null?void 0:self.location)==null?void 0:s.protocol)||null}function uI(){return Cl()==="http:"||Cl()==="https:"}function vE(s=lt()){return!!((Cl()==="file:"||Cl()==="ionic:"||Cl()==="capacitor:")&&s.toLowerCase().match(/iphone|ipad|ipod|android/))}function dI(){return cu()||ub()}function hI(){return fb()&&(document==null?void 0:document.documentMode)===11}function fI(s=lt()){return/Edge\/\d+/.test(s)}function pI(s=lt()){return hI()||fI(s)}function bE(){try{const s=self.localStorage,e=to();if(s)return s.setItem(e,"1"),s.removeItem(e),pI()?Hc():!0}catch{return Hp()&&Hc()}return!1}function Hp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function wf(){return(uI()||hb()||vE())&&!dI()&&bE()&&!Hp()}function EE(){return vE()&&typeof document<"u"}async function mI(){return EE()?new Promise(s=>{const e=setTimeout(()=>{s(!1)},cI);document.addEventListener("deviceready",()=>{clearTimeout(e),s(!0)})}):!1}function gI(){return typeof window<"u"?window:null}/**
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
 */const tn={LOCAL:"local",NONE:"none",SESSION:"session"},dl=z,SE="persistence";function _I(s,e){if(dl(Object.values(tn).includes(e),s,"invalid-persistence-type"),cu()){dl(e!==tn.SESSION,s,"unsupported-persistence-type");return}if(ub()){dl(e===tn.NONE,s,"unsupported-persistence-type");return}if(Hp()){dl(e===tn.NONE||e===tn.LOCAL&&Hc(),s,"unsupported-persistence-type");return}dl(e===tn.NONE||bE(),s,"unsupported-persistence-type")}async function Hf(s){await s._initializationPromise;const e=wE(),n=Hs(SE,s.config.apiKey,s.name);e&&e.setItem(n,s._getPersistenceType())}function yI(s,e){const n=wE();if(!n)return[];const r=Hs(SE,s,e);switch(n.getItem(r)){case tn.NONE:return[Jr];case tn.LOCAL:return[zl,Fs];case tn.SESSION:return[Fs];default:return[]}}function wE(){var s;try{return((s=gI())==null?void 0:s.sessionStorage)||null}catch{return null}}/**
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
 */const vI=z;class Xi{constructor(){this.browserResolver=sn(Mx),this.cordovaResolver=sn(rI),this.underlyingResolver=null,this._redirectPersistence=Fs,this._completeRedirectFn=bu,this._overrideRedirectResult=zp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,o)}async _openRedirect(e,n,r,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,o)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return EE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return vI(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await mI();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function TE(s){return s.unwrap()}function bI(s){return s.wrapped()}/**
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
 */function EI(s){return CE(s)}function SI(s,e){var r;const n=(r=e.customData)==null?void 0:r._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const o=e;o.resolver=new wI(s,fR(s,e))}else if(n){const o=CE(e),c=e;o&&(c.credential=o,c.tenantId=n.tenantId||void 0,c.email=n.email||void 0,c.phoneNumber=n.phoneNumber||void 0)}}function CE(s){const{_tokenResponse:e}=s instanceof Bt?s.customData:s;if(!e)return null;if(!(s instanceof Bt)&&"temporaryProof"in e&&"phoneNumber"in e)return Gs.credentialFromResult(s);const n=e.providerId;if(!n||n===cl.PASSWORD)return null;let r;switch(n){case cl.GOOGLE:r=Vn;break;case cl.FACEBOOK:r=Bn;break;case cl.GITHUB:r=qn;break;case cl.TWITTER:r=Fn;break;default:const{oauthIdToken:o,oauthAccessToken:c,oauthTokenSecret:h,pendingToken:f,nonce:m}=e;return!c&&!h&&!o&&!f?null:f?n.startsWith("saml.")?$r._create(n,f):Wn._fromParams({providerId:n,signInMethod:n,pendingToken:f,idToken:o,accessToken:c}):new Gr(n).credential({idToken:o,accessToken:c,rawNonce:m})}return s instanceof Bt?r.credentialFromError(s):r.credentialFromResult(s)}function zt(s,e){return e.catch(n=>{throw n instanceof Bt&&SI(s,n),n}).then(n=>{const r=n.operationType,o=n.user;return{operationType:r,credential:EI(n),additionalUserInfo:hR(n),user:Eu.getOrCreate(o)}})}async function Bf(s,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>zt(s,n.confirm(r))}}class wI{constructor(e,n){this.resolver=n,this.auth=bI(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zt(TE(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Eu=class vl{constructor(e){this._delegate=e,this.multiFactor=gR(e)}static getOrCreate(e){return vl.USER_MAP.has(e)||vl.USER_MAP.set(e,new vl(e)),vl.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zt(this.auth,eE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Bf(this.auth,jR(this._delegate,e,n))}async linkWithPopup(e){return zt(this.auth,QR(this._delegate,e,Xi))}async linkWithRedirect(e){return await Hf(Fe(this.auth)),ix(this._delegate,e,Xi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zt(this.auth,tE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Bf(this.auth,HR(this._delegate,e,n))}reauthenticateWithPopup(e){return zt(this.auth,WR(this._delegate,e,Xi))}async reauthenticateWithRedirect(e){return await Hf(Fe(this.auth)),tx(this._delegate,e,Xi)}sendEmailVerification(e){return tR(this._delegate,e)}async unlink(e){return await BN(this._delegate,e),this}updateEmail(e){return rR(this._delegate,e)}updatePassword(e){return aR(this._delegate,e)}updatePhoneNumber(e){return BR(this._delegate,e)}updateProfile(e){return sR(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return nR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Eu.USER_MAP=new WeakMap;/**
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
 */const hl=z;let Vf=class{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;hl(r,"invalid-api-key",{appName:e.name}),hl(r,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?Xi:void 0;this._delegate=n.initialize({options:{persistence:TI(r,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(IA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Eu.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){yN(this._delegate,e,n)}applyActionCode(e){return YN(this._delegate,e)}checkActionCode(e){return nE(this._delegate,e)}confirmPasswordReset(e,n){return GN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return zt(this._delegate,QN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return eR(this._delegate,e)}isSignInWithEmailLink(e){return ZN(this._delegate,e)}async getRedirectResult(){hl(wf(),this._delegate,"operation-not-supported-in-this-environment");const e=await rx(this._delegate,Xi);return e?zt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){aI(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:o,error:c,complete:h}=p0(e,n,r);return this._delegate.onAuthStateChanged(o,c,h)}onIdTokenChanged(e,n,r){const{next:o,error:c,complete:h}=p0(e,n,r);return this._delegate.onIdTokenChanged(o,c,h)}sendSignInLinkToEmail(e,n){return XN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return FN(this._delegate,e,n||void 0)}async setPersistence(e){_I(this._delegate,e);let n;switch(e){case tn.SESSION:n=Fs;break;case tn.LOCAL:n=await sn(zl)._isAvailable()?zl:Dp;break;case tn.NONE:n=Jr;break;default:return wt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zt(this._delegate,HN(this._delegate))}signInWithCredential(e){return zt(this._delegate,mu(this._delegate,e))}signInWithCustomToken(e){return zt(this._delegate,qN(this._delegate,e))}signInWithEmailAndPassword(e,n){return zt(this._delegate,KN(this._delegate,e,n))}signInWithEmailLink(e,n){return zt(this._delegate,JN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Bf(this._delegate,zR(this._delegate,e,n))}async signInWithPopup(e){return hl(wf(),this._delegate,"operation-not-supported-in-this-environment"),zt(this._delegate,YR(this._delegate,e,Xi))}async signInWithRedirect(e){return hl(wf(),this._delegate,"operation-not-supported-in-this-environment"),await Hf(this._delegate),$R(this._delegate,e,Xi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return WN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};Vf.Persistence=tn;function p0(s,e,n){let r=s;typeof s!="function"&&({next:r,error:e,complete:n}=s);const o=r;return{next:h=>o(h&&Eu.getOrCreate(h)),error:e,complete:n}}function TI(s,e){const n=yI(s,e);if(typeof self<"u"&&!n.includes(zl)&&n.push(zl),typeof window<"u")for(const r of[Dp,Fs])n.includes(r)||n.push(r);return n.includes(Jr)||n.push(Jr),n}/**
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
 */class Bp{static credential(e,n){return Gs.credential(e,n)}constructor(){this.providerId="phone",this._delegate=new Gs(TE(es.auth()))}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Bp.PHONE_SIGN_IN_METHOD=Gs.PHONE_SIGN_IN_METHOD;Bp.PROVIDER_ID=Gs.PROVIDER_ID;/**
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
 */const CI=z;class AI{constructor(e,n,r=es.app()){var o;CI((o=r.options)==null?void 0:o.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new PR(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const NI="auth-compat";function RI(s){s.INTERNAL.registerComponent(new wn(NI,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Vf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hr.EMAIL_SIGNIN,PASSWORD_RESET:Hr.PASSWORD_RESET,RECOVER_EMAIL:Hr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hr.VERIFY_EMAIL}},EmailAuthProvider:ps,FacebookAuthProvider:Bn,GithubAuthProvider:qn,GoogleAuthProvider:Vn,OAuthProvider:Gr,SAMLAuthProvider:Yc,PhoneAuthProvider:Bp,PhoneMultiFactorGenerator:yE,RecaptchaVerifier:AI,TwitterAuthProvider:Fn,Auth:Vf,AuthCredential:oa,Error:Bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),s.registerVersion(lI,oI)}RI(es);var m0={};const g0="@firebase/database",_0="1.1.0";/**
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
 */let AE="";function NE(s){AE=s}/**
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
 */class xI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:kl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class II{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return an(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const RE=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xI(e)}}catch{}return new II},js=RE("localStorage"),qf=RE("sessionStorage");/**
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
 */const Wr=new Kl("@firebase/database"),xE=(function(){let s=1;return function(){return s++}})(),IE=function(s){const e=lC(s),n=new sC;n.update(e);const r=n.digest();return hp.encodeByteArray(r)},io=function(...s){let e="";for(let n=0;n<s.length;n++){const r=s[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=io.apply(null,r):typeof r=="object"?e+=rt(r):e+=r,e+=" "}return e};let Vs=null,y0=!0;const OE=function(s,e){H(!e||s===!0||s===!1,"Can't turn on custom loggers persistently."),s===!0?(Wr.logLevel=Ne.VERBOSE,Vs=Wr.log.bind(Wr),e&&qf.set("logging_enabled",!0)):typeof s=="function"?Vs=s:(Vs=null,qf.remove("logging_enabled"))},ft=function(...s){if(y0===!0&&(y0=!1,Vs===null&&qf.get("logging_enabled")===!0&&OE(!0)),Vs){const e=io.apply(null,s);Vs(e)}},so=function(s){return function(...e){ft(s,...e)}},Ff=function(...s){const e="FIREBASE INTERNAL ERROR: "+io(...s);Wr.error(e)},Qn=function(...s){const e=`FIREBASE FATAL ERROR: ${io(...s)}`;throw Wr.error(e),new Error(e)},At=function(...s){const e="FIREBASE WARNING: "+io(...s);Wr.warn(e)},OI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&At("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Su=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},kI=function(s){if(document.readyState==="complete")s();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},os="[MIN_NAME]",bi="[MAX_NAME]",$s=function(s,e){if(s===e)return 0;if(s===os||e===bi)return-1;if(e===os||s===bi)return 1;{const n=v0(s),r=v0(e);return n!==null?r!==null?n-r===0?s.length-e.length:n-r:-1:r!==null?1:s<e?-1:1}},DI=function(s,e){return s===e?0:s<e?-1:1},fl=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+rt(e))},Vp=function(s){if(typeof s!="object"||s===null)return rt(s);const e=[];for(const r in s)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=rt(e[r]),n+=":",n+=Vp(s[e[r]]);return n+="}",n},kE=function(s,e){const n=s.length;if(n<=e)return[s];const r=[];for(let o=0;o<n;o+=e)o+e>n?r.push(s.substring(o,n)):r.push(s.substring(o,o+e));return r};function mt(s,e){for(const n in s)s.hasOwnProperty(n)&&e(n,s[n])}const DE=function(s){H(!Su(s),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let o,c,h,f,m;s===0?(c=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-r)?(f=Math.min(Math.floor(Math.log(s)/Math.LN2),r),c=f+r,h=Math.round(s*Math.pow(2,n-f)-Math.pow(2,n))):(c=0,h=Math.round(s/Math.pow(2,1-r-n))));const g=[];for(m=n;m;m-=1)g.push(h%2?1:0),h=Math.floor(h/2);for(m=e;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);g.push(o?1:0),g.reverse();const v=g.join("");let y="";for(m=0;m<64;m+=8){let E=parseInt(v.substr(m,8),2).toString(16);E.length===1&&(E="0"+E),y=y+E}return y.toLowerCase()},MI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function PI(s,e){let n="Unknown Error";s==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?n="Client doesn't have permission to access the desired data.":s==="unavailable"&&(n="The service is unavailable");const r=new Error(s+" at "+e._path.toString()+": "+n);return r.code=s.toUpperCase(),r}const UI=new RegExp("^-?(0*)\\d{1,10}$"),zI=-2147483648,jI=2147483647,v0=function(s){if(UI.test(s)){const e=Number(s);if(e>=zI&&e<=jI)return e}return null},ua=function(s){try{s()}catch(e){setTimeout(()=>{const n=e.stack||"";throw At("Exception was thrown by user callback.",n),e},Math.floor(0))}},HI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Al=function(s,e){const n=setTimeout(s,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class BI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Be(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){At(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class VI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',At(e)}}class Qr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qr.OWNER="owner";/**
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
 */const qp="5",ME="v",LE="s",PE="r",UE="f",zE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jE="ls",HE="p",Gf="ac",BE="websocket",VE="long_polling";/**
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
 */class qE{constructor(e,n,r,o,c=!1,h="",f=!1,m=!1,g=null){this.secure=n,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=js.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&js.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qI(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function FE(s,e,n){H(typeof e=="string","typeof type must == string"),H(typeof n=="object","typeof params must == object");let r;if(e===BE)r=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===VE)r=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qI(s)&&(n.ns=s.namespace);const o=[];return mt(n,(c,h)=>{o.push(c+"="+h)}),r+o.join("&")}/**
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
 */class FI{constructor(){this.counters_={}}incrementCounter(e,n=1){an(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return HT(this.counters_)}}/**
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
 */const Tf={},Cf={};function Fp(s){const e=s.toString();return Tf[e]||(Tf[e]=new FI),Tf[e]}function GI(s,e){const n=s.toString();return Cf[n]||(Cf[n]=e()),Cf[n]}/**
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
 */class YI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&ua(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const b0="start",WI="close",QI="pLPCommand",KI="pRTLPCB",GE="id",YE="pw",WE="ser",XI="cb",ZI="seg",JI="ts",$I="d",eO="dframe",QE=1870,KE=30,tO=QE-KE,nO=25e3,iO=3e4;class Zi{constructor(e,n,r,o,c,h,f){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=so(e),this.stats_=Fp(n),this.urlFn=m=>(this.appCheckToken&&(m[Gf]=this.appCheckToken),FE(n,VE,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new YI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iO)),kI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Gp((...c)=>{const[h,f,m,g,v]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===b0)this.id=f,this.password=m;else if(h===WI)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,f]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,f)},()=>{this.onClosed_()},this.urlFn);const r={};r[b0]="t",r[WE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[XI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ME]=qp,this.transportSessionId&&(r[LE]=this.transportSessionId),this.lastSessionId&&(r[jE]=this.lastSessionId),this.applicationId&&(r[HE]=this.applicationId),this.appCheckToken&&(r[Gf]=this.appCheckToken),typeof location<"u"&&location.hostname&&zE.test(location.hostname)&&(r[PE]=UE);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zi.forceAllow_=!0}static forceDisallow(){Zi.forceDisallow_=!0}static isAvailable(){return Zi.forceAllow_?!0:!Zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!MI()&&!LI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ab(n),o=kE(r,tO);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[eO]="t",r[GE]=e,r[YE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Gp{constructor(e,n,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xE(),window[QI+this.uniqueCallbackIdentifier]=e,window[KI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Gp.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(f){ft("frame writing exception"),f.stack&&ft(f.stack),ft(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[GE]=this.myID,e[YE]=this.myPW,e[WE]=this.currentSerial;let n=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+KE+r.length<=QE;){const h=this.pendingSegs.shift();r=r+"&"+ZI+o+"="+h.seg+"&"+JI+o+"="+h.ts+"&"+$I+o+"="+h.d,o++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(r,Math.floor(nO)),c=()=>{clearTimeout(o),r()};this.addTag(e,c)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const sO=16384,rO=45e3;let Xc=null;typeof MozWebSocket<"u"?Xc=MozWebSocket:typeof WebSocket<"u"&&(Xc=WebSocket);class vn{constructor(e,n,r,o,c,h,f){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=so(this.connId),this.stats_=Fp(n),this.connURL=vn.connectionURL_(n,h,f,o,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,o,c){const h={};return h[ME]=qp,typeof location<"u"&&location.hostname&&zE.test(location.hostname)&&(h[PE]=UE),n&&(h[LE]=n),r&&(h[jE]=r),o&&(h[Gf]=o),c&&(h[HE]=c),FE(e,BE,h)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,js.set("previous_websocket_failure",!0);try{let r;ZT(),this.mySock=new Xc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xc!==null&&!vn.forceDisallow_}static previouslyFailed(){return js.isInMemoryStorage||js.get("previous_websocket_failure")===!0}markConnectionHealthy(){js.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=kl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kE(n,sO);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vn.responsesRequiredToBeHealthy=2;vn.healthyTimeout=3e4;/**
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
 */class ea{static get ALL_TRANSPORTS(){return[Zi,vn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=vn&&vn.isAvailable();let r=n&&!vn.previouslyFailed();if(e.webSocketOnly&&(n||At("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vn];else{const o=this.transports_=[];for(const c of ea.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);ea.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ea.globalTransportInitialized_=!1;/**
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
 */const aO=6e4,lO=5e3,oO=10*1024,cO=100*1024,Af="t",E0="d",uO="s",S0="r",dO="e",w0="o",T0="a",C0="n",A0="p",hO="h";class fO{constructor(e,n,r,o,c,h,f,m,g,v){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=so("c:"+this.id+":"),this.transportManager_=new ea(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Al(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Af in e){const n=e[Af];n===T0?this.upgradeIfSecondaryHealthy_():n===S0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===w0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fl("t",e),r=fl("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:A0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:T0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:C0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fl("t",e),r=fl("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fl(Af,e);if(E0 in e){const r=e[E0];if(n===hO){const o={...r};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===C0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uO?this.onConnectionShutdown_(r):n===S0?this.onReset_(r):n===dO?Ff("Server Error: "+r):n===w0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ff("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),qp!==r&&At("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Al(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Al(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:A0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(js.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class XE{put(e,n,r,o){}merge(e,n,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ZE{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const o=this.getInitialEvent(e);o&&n.apply(r,o)}off(e,n,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let c=0;c<o.length;c++)if(o[c].callback===n&&(!r||r===o[c].context)){o.splice(c,1);return}}validateEventType_(e){H(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Zc extends ZE{static getInstance(){return new Zc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const N0=32,R0=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new Te("")}function ce(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function cs(s){return s.pieces_.length-s.pieceNum_}function ke(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new Te(s.pieces_,e)}function Yp(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function pO(s){let e="";for(let n=s.pieceNum_;n<s.pieces_.length;n++)s.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[n])));return e||"/"}function jl(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function JE(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let n=s.pieceNum_;n<s.pieces_.length-1;n++)e.push(s.pieces_[n]);return new Te(e,0)}function Ve(s,e){const n=[];for(let r=s.pieceNum_;r<s.pieces_.length;r++)n.push(s.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&n.push(r[o])}return new Te(n,0)}function ue(s){return s.pieceNum_>=s.pieces_.length}function xt(s,e){const n=ce(s),r=ce(e);if(n===null)return e;if(n===r)return xt(ke(s),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function mO(s,e){const n=jl(s,0),r=jl(e,0);for(let o=0;o<n.length&&o<r.length;o++){const c=$s(n[o],r[o]);if(c!==0)return c}return n.length===r.length?0:n.length<r.length?-1:1}function Wp(s,e){if(cs(s)!==cs(e))return!1;for(let n=s.pieceNum_,r=e.pieceNum_;n<=s.pieces_.length;n++,r++)if(s.pieces_[n]!==e.pieces_[r])return!1;return!0}function En(s,e){let n=s.pieceNum_,r=e.pieceNum_;if(cs(s)>cs(e))return!1;for(;n<s.pieces_.length;){if(s.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class gO{constructor(e,n){this.errorPrefix_=n,this.parts_=jl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=uu(this.parts_[r]);$E(this)}}function _O(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=uu(e),$E(s)}function yO(s){const e=s.parts_.pop();s.byteLength_-=uu(e),s.parts_.length>0&&(s.byteLength_-=1)}function $E(s){if(s.byteLength_>R0)throw new Error(s.errorPrefix_+"has a key path longer than "+R0+" bytes ("+s.byteLength_+").");if(s.parts_.length>N0)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+N0+") or object contains a cycle "+Ps(s))}function Ps(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
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
 */class Qp extends ZE{static getInstance(){return new Qp}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const pl=1e3,vO=300*1e3,x0=30*1e3,bO=1.3,EO=3e4,SO="server_kill",I0=3;class _i extends XE{constructor(e,n,r,o,c,h,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=_i.nextPersistentConnectionId_++,this.log_=so("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pl,this.maxReconnectDelay_=vO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const o=++this.requestNumber_,c={r:o,a:e,b:n};this.log_(rt(c)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const n=new jt,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const f=h.d;h.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),n.promise}listen(e,n,r,o){this.initConnection_();const c=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:e,tag:r};this.listens.get(h).set(c,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+r+" for "+o);const c={p:r},h="q";e.tag&&(c.q=n._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(h,c,f=>{const m=f.d,g=f.s;_i.warnOnListenWarnings_(m,n),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&an(e,"w")){const r=qs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',c=n._path.toString();At(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=x0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,o=>{const c=o.s,h=o.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,n)}sendUnlisten_(e,n,r,o){this.log_("Unlisten on "+e+" for "+n);const c={p:e},h="n";o&&(c.q=r,c.t=o),this.sendRequest(h,c)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,o){const c={p:n,d:r};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(e,n,r,o){this.putInternal("p",e,n,r,o)}merge(e,n,r,o){this.putInternal("m",e,n,r,o)}putInternal(e,n,r,o,c){this.initConnection_();const h={p:n,d:r};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:e,request:h,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,c=>{this.log_(n+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const c=r.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ff("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>EO&&(this.reconnectDelay_=pl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+_i.nextConnectionId_++,c=this.lastSessionId;let h=!1,f=null;const m=function(){f?f.close():(h=!0,r())},g=function(y){H(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:m,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,E]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);h?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=E&&E.token,f=new fO(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,k=>{At(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(SO)},c))}catch(y){this.log_("Failed to get token: "+y),h||(this.repoInfo_.nodeAdmin&&At(y),m())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bc(this.interruptReasons_)&&(this.reconnectDelay_=pl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(c=>Vp(c)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let o;if(this.listens.has(r)){const c=this.listens.get(r);o=c.get(n),c.delete(n),c.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=I0&&(this.reconnectDelay_=x0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=I0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+AE.replace(/\./g,"-")]=1,mp()?e["framework.cordova"]=1:cu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zc.getInstance().currentlyOnline();return Bc(this.interruptReasons_)&&e}}_i.nextPersistentConnectionId_=0;_i.nextConnectionId_=0;/**
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
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
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
 */class wu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new he(os,e),o=new he(os,n);return this.compare(r,o)!==0}minPost(){return he.MIN}}/**
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
 */let Dc;class eS extends wu{static get __EMPTY_NODE(){return Dc}static set __EMPTY_NODE(e){Dc=e}compare(e,n){return $s(e.name,n.name)}isDefinedOn(e){throw ra("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(bi,Dc)}makePost(e,n){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,Dc)}toString(){return".key"}}const Yn=new eS;/**
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
 */class Mc{constructor(e,n,r,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=n?r(e.key,n):1,o&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,r,o,c){this.key=e,this.value=n,this.color=r??ht.RED,this.left=o??Ht.EMPTY_NODE,this.right=c??Ht.EMPTY_NODE}copy(e,n,r,o,c){return new ht(e??this.key,n??this.value,r??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let o=this;const c=r(e,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(e,n,r),null):c===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,o;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ht.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class wO{copy(e,n,r,o,c){return this}insert(e,n,r){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,n=Ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,o=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Mc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Mc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Mc(this.root_,null,this.comparator_,!0,e)}}Ht.EMPTY_NODE=new wO;/**
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
 */function TO(s,e){return $s(s.name,e.name)}function Kp(s,e){return $s(s,e)}/**
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
 */let Yf;function CO(s){Yf=s}const tS=function(s){return typeof s=="number"?"number:"+DE(s):"string:"+s},nS=function(s){if(s.isLeafNode()){const e=s.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&an(e,".sv"),"Priority must be a string or number.")}else H(s===Yf||s.isEmpty(),"priority of unexpected type.");H(s===Yf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let O0;class ut{static set __childrenNodeConstructor(e){O0=e}static get __childrenNodeConstructor(){return O0}constructor(e,n=ut.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ut(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:ce(e)===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ut.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||cs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ut.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=DE(this.value_):e+=this.value_,this.lazyHash_=IE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ut.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ut.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,o=ut.VALUE_TYPE_ORDER.indexOf(n),c=ut.VALUE_TYPE_ORDER.indexOf(r);return H(o>=0,"Unknown leaf type: "+n),H(c>=0,"Unknown leaf type: "+r),o===c?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let iS,sS;function AO(s){iS=s}function NO(s){sS=s}class RO extends wu{compare(e,n){const r=e.node.getPriority(),o=n.node.getPriority(),c=r.compareTo(o);return c===0?$s(e.name,n.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(bi,new ut("[PRIORITY-POST]",sS))}makePost(e,n){const r=iS(e);return new he(n,new ut("[PRIORITY-POST]",r))}toString(){return".priority"}}const Le=new RO;/**
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
 */const xO=Math.log(2);class IO{constructor(e){const n=c=>parseInt(Math.log(c)/xO,10),r=c=>parseInt(Array(c+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jc=function(s,e,n,r){s.sort(e);const o=function(m,g){const v=g-m;let y,E;if(v===0)return null;if(v===1)return y=s[m],E=n?n(y):y,new ht(E,y.node,ht.BLACK,null,null);{const k=parseInt(v/2,10)+m,j=o(m,k),G=o(k+1,g);return y=s[k],E=n?n(y):y,new ht(E,y.node,ht.BLACK,j,G)}},c=function(m){let g=null,v=null,y=s.length;const E=function(j,G){const le=y-j,de=y;y-=j;const Pe=o(le+1,de),ie=s[le],we=n?n(ie):ie;k(new ht(we,ie.node,G,null,Pe))},k=function(j){g?(g.left=j,g=j):(v=j,g=j)};for(let j=0;j<m.count;++j){const G=m.nextBitIsOne(),le=Math.pow(2,m.count-(j+1));G?E(le,ht.BLACK):(E(le,ht.BLACK),E(le,ht.RED))}return v},h=new IO(s.length),f=c(h);return new Ht(r||e,f)};/**
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
 */let Nf;const Br={};class mi{static get Default(){return H(Br&&Le,"ChildrenNode.ts has not been loaded"),Nf=Nf||new mi({".priority":Br},{".priority":Le}),Nf}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=qs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ht?n:null}hasIndex(e){return an(this.indexSet_,e.toString())}addIndex(e,n){H(e!==Yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const c=n.getIterator(he.Wrap);let h=c.getNext();for(;h;)o=o||e.isDefinedOn(h.node),r.push(h),h=c.getNext();let f;o?f=Jc(r,e.getCompare()):f=Br;const m=e.toString(),g={...this.indexSet_};g[m]=e;const v={...this.indexes_};return v[m]=f,new mi(v,g)}addToIndexes(e,n){const r=Vc(this.indexes_,(o,c)=>{const h=qs(this.indexSet_,c);if(H(h,"Missing index implementation for "+c),o===Br)if(h.isDefinedOn(e.node)){const f=[],m=n.getIterator(he.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),Jc(f,h.getCompare())}else return Br;else{const f=n.get(e.name);let m=o;return f&&(m=m.remove(new he(e.name,f))),m.insert(e,e.node)}});return new mi(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vc(this.indexes_,o=>{if(o===Br)return o;{const c=n.get(e.name);return c?o.remove(new he(e.name,c)):o}});return new mi(r,this.indexSet_)}}/**
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
 */let ml;class K{static get EMPTY_NODE(){return ml||(ml=new K(new Ht(Kp),null,mi.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nS(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ml}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ml:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(H(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new he(e,n);let o,c;n.isEmpty()?(o=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,n),c=this.indexMap_.addToIndexes(r,this.children_));const h=o.isEmpty()?ml:this.priorityNode_;return new K(o,h,c)}}updateChild(e,n){const r=ce(e);if(r===null)return n;{H(ce(e)!==".priority"||cs(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,o=0,c=!0;if(this.forEachChild(Le,(h,f)=>{n[h]=f.val(e),r++,c&&K.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!e&&c&&o<2*r){const h=[];for(const f in n)h[f]=n[f];return h}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tS(this.getPriority().val())+":"),this.forEachChild(Le,(n,r)=>{const o=r.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":IE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const o=this.resolveIndex_(r);if(o){const c=o.getPredecessorKey(new he(e,n));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,he.Wrap);let c=o.peek();for(;c!=null&&n.compare(c,e)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let c=o.peek();for(;c!=null&&n.compare(c,e)>0;)o.getNext(),c=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ro?-1:0}withIndex(e){if(e===Yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Le),o=n.getIterator(Le);let c=r.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=r.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===Yn?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OO extends K{constructor(){super(new Ht(Kp),K.EMPTY_NODE,mi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const ro=new OO;Object.defineProperties(he,{MIN:{value:new he(os,K.EMPTY_NODE)},MAX:{value:new he(bi,ro)}});eS.__EMPTY_NODE=K.EMPTY_NODE;ut.__childrenNodeConstructor=K;CO(ro);NO(ro);/**
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
 */const kO=!0;function qe(s,e=null){if(s===null)return K.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const n=s;return new ut(n,qe(e))}if(!(s instanceof Array)&&kO){const n=[];let r=!1;if(mt(s,(h,f)=>{if(h.substring(0,1)!=="."){const m=qe(f);m.isEmpty()||(r=r||!m.getPriority().isEmpty(),n.push(new he(h,m)))}}),n.length===0)return K.EMPTY_NODE;const c=Jc(n,TO,h=>h.name,Kp);if(r){const h=Jc(n,Le.getCompare());return new K(c,qe(e),new mi({".priority":h},{".priority":Le}))}else return new K(c,qe(e),mi.Default)}else{let n=K.EMPTY_NODE;return mt(s,(r,o)=>{if(an(s,r)&&r.substring(0,1)!=="."){const c=qe(o);(c.isLeafNode()||!c.isEmpty())&&(n=n.updateImmediateChild(r,c))}}),n.updatePriority(qe(e))}}AO(qe);/**
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
 */class Xp extends wu{constructor(e){super(),this.indexPath_=e,H(!ue(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),o=this.extractChild(n.node),c=r.compareTo(o);return c===0?$s(e.name,n.name):c}makePost(e,n){const r=qe(e),o=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new he(n,o)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,ro);return new he(bi,e)}toString(){return jl(this.indexPath_,0).join("/")}}/**
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
 */class DO extends wu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?$s(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const r=qe(e);return new he(n,r)}toString(){return".value"}}const Zp=new DO;/**
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
 */function rS(s){return{type:"value",snapshotNode:s}}function ta(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function Hl(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function Bl(s,e,n){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:n}}function MO(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
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
 */class Jp{constructor(e){this.index_=e}updateChild(e,n,r,o,c,h){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(o).equals(r.getChild(o))&&f.isEmpty()===r.isEmpty()||(h!=null&&(r.isEmpty()?e.hasChild(n)?h.trackChildChange(Hl(n,f)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?h.trackChildChange(ta(n,r)):h.trackChildChange(Bl(n,r,f))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Le,(o,c)=>{n.hasChild(o)||r.trackChildChange(Hl(o,c))}),n.isLeafNode()||n.forEachChild(Le,(o,c)=>{if(e.hasChild(o)){const h=e.getImmediateChild(o);h.equals(c)||r.trackChildChange(Bl(o,c,h))}else r.trackChildChange(ta(o,c))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Vl{constructor(e){this.indexedFilter_=new Jp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vl.getStartPost_(e),this.endPost_=Vl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,o,c,h){return this.matches(new he(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,o,c,h)}updateFullNode(e,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(K.EMPTY_NODE);const c=this;return n.forEachChild(Le,(h,f)=>{c.matches(new he(h,f))||(o=o.updateImmediateChild(h,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class LO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Vl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,o,c,h){return this.rangedFilter_.matches(new he(n,r))||(r=K.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,o,c,h):this.fullLimitUpdateChild_(e,n,r,c,h)}updateFullNode(e,n,r){let o;if(n.isLeafNode()||n.isEmpty())o=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=K.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const f=c.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),h++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(K.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const f=c.getNext();h<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?h++:o=o.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,o,c){let h;if(this.reverse_){const y=this.index_.getCompare();h=(E,k)=>y(k,E)}else h=this.index_.getCompare();const f=e;H(f.numChildren()===this.limit_,"");const m=new he(n,r),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(m);if(f.hasChild(n)){const y=f.getImmediateChild(n);let E=o.getChildAfterChild(this.index_,g,this.reverse_);for(;E!=null&&(E.name===n||f.hasChild(E.name));)E=o.getChildAfterChild(this.index_,E,this.reverse_);const k=E==null?1:h(E,m);if(v&&!r.isEmpty()&&k>=0)return c!=null&&c.trackChildChange(Bl(n,r,y)),f.updateImmediateChild(n,r);{c!=null&&c.trackChildChange(Hl(n,y));const G=f.updateImmediateChild(n,K.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(c!=null&&c.trackChildChange(ta(E.name,E.node)),G.updateImmediateChild(E.name,E.node)):G}}else return r.isEmpty()?e:v&&h(g,m)>=0?(c!=null&&(c.trackChildChange(Hl(g.name,g.node)),c.trackChildChange(ta(n,r))),f.updateImmediateChild(n,r).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
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
 */class Tu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:os}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new Tu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function PO(s){return s.loadsAllData()?new Jp(s.getIndex()):s.hasLimit()?new LO(s):new Vl(s)}function UO(s,e){const n=s.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function zO(s,e){const n=s.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Wf(s,e,n){const r=s.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function jO(s,e,n){let r;return s.index_===Yn||n?r=Wf(s,e,n):r=Wf(s,e,bi),r.startAfterSet_=!0,r}function Qf(s,e,n){const r=s.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function HO(s,e,n){let r;return s.index_===Yn||n?r=Qf(s,e,n):r=Qf(s,e,os),r.endBeforeSet_=!0,r}function Cu(s,e){const n=s.copy();return n.index_=e,n}function k0(s){const e={};if(s.isDefault())return e;let n;if(s.index_===Le?n="$priority":s.index_===Zp?n="$value":s.index_===Yn?n="$key":(H(s.index_ instanceof Xp,"Unrecognized index type!"),n=s.index_.toString()),e.orderBy=rt(n),s.startSet_){const r=s.startAfterSet_?"startAfter":"startAt";e[r]=rt(s.indexStartValue_),s.startNameSet_&&(e[r]+=","+rt(s.indexStartName_))}if(s.endSet_){const r=s.endBeforeSet_?"endBefore":"endAt";e[r]=rt(s.indexEndValue_),s.endNameSet_&&(e[r]+=","+rt(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function D0(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let n=s.viewFrom_;n===""&&(s.isViewFromLeft()?n="l":n="r"),e.vf=n}return s.index_!==Le&&(e.i=s.index_.toString()),e}/**
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
 */class $c extends XE{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=so("p:rest:"),this.listens_={}}listen(e,n,r,o){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const h=$c.getListenId_(e,r),f={};this.listens_[h]=f;const m=k0(e._queryParams);this.restRequest_(c+".json",m,(g,v)=>{let y=v;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(c,y,!1,r),qs(this.listens_,h)===f){let E;g?g===401?E="permission_denied":E="rest_error:"+g:E="ok",o(E,null)}})}unlisten(e,n){const r=$c.getListenId_(e,n);delete this.listens_[r]}get(e){const n=k0(e._queryParams),r=e._path.toString(),o=new jt;return this.restRequest_(r+".json",n,(c,h)=>{let f=h;c===404&&(f=null,c=null),c===null?(this.onDataUpdate_(r,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(n.auth=o.accessToken),c&&c.token&&(n.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zs(n);this.log_("Sending REST request for "+h);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(r&&f.readyState===4){this.log_("REST Response for "+h+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=kl(f.responseText)}catch{At("Failed to parse JSON response for "+h+": "+f.responseText)}r(null,m)}else f.status!==401&&f.status!==404&&At("Got unsuccessful REST response for "+h+" Status: "+f.status),r(f.status);r=null}},f.open("GET",h,!0),f.send()})}}/**
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
 */class BO{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function eu(){return{value:null,children:new Map}}function da(s,e,n){if(ue(e))s.value=n,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,n);else{const r=ce(e);s.children.has(r)||s.children.set(r,eu());const o=s.children.get(r);e=ke(e),da(o,e,n)}}function Kf(s,e){if(ue(e))return s.value=null,s.children.clear(),!0;if(s.value!==null){if(s.value.isLeafNode())return!1;{const n=s.value;return s.value=null,n.forEachChild(Le,(r,o)=>{da(s,new Te(r),o)}),Kf(s,e)}}else if(s.children.size>0){const n=ce(e);return e=ke(e),s.children.has(n)&&Kf(s.children.get(n),e)&&s.children.delete(n),s.children.size===0}else return!0}function Xf(s,e,n){s.value!==null?n(e,s.value):VO(s,(r,o)=>{const c=new Te(e.toString()+"/"+r);Xf(o,c,n)})}function VO(s,e){s.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class qO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&mt(this.last_,(r,o)=>{n[r]=n[r]-o}),this.last_=e,n}}/**
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
 */const M0=10*1e3,FO=30*1e3,GO=300*1e3;class YO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qO(e);const r=M0+(FO-M0)*Math.random();Al(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;mt(e,(o,c)=>{c>0&&an(this.statsToReport_,o)&&(n[o]=c,r=!0)}),r&&this.server_.reportStats(n),Al(this.reportStats_.bind(this),Math.floor(Math.random()*2*GO))}}/**
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
 */var kn;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(kn||(kn={}));function $p(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function em(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tm(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
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
 */class tu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=kn.ACK_USER_WRITE,this.source=$p()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new tu(be(),n,this.revert)}}else return H(ce(this.path)===e,"operationForChild called for unrelated child."),new tu(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class ql{constructor(e,n){this.source=e,this.path=n,this.type=kn.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new ql(this.source,be()):new ql(this.source,ke(this.path))}}/**
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
 */class Ws{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=kn.OVERWRITE}operationForChild(e){return ue(this.path)?new Ws(this.source,be(),this.snap.getImmediateChild(e)):new Ws(this.source,ke(this.path),this.snap)}}/**
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
 */class na{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=kn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Ws(this.source,be(),n.value):new na(this.source,be(),n)}else return H(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new na(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class us{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class WO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QO(s,e,n,r){const o=[],c=[];return e.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(MO(h.childName,h.snapshotNode))}),gl(s,o,"child_removed",e,r,n),gl(s,o,"child_added",e,r,n),gl(s,o,"child_moved",c,r,n),gl(s,o,"child_changed",e,r,n),gl(s,o,"value",e,r,n),o}function gl(s,e,n,r,o,c){const h=r.filter(f=>f.type===n);h.sort((f,m)=>XO(s,f,m)),h.forEach(f=>{const m=KO(s,f,c);o.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,s.query_))})})}function KO(s,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function XO(s,e,n){if(e.childName==null||n.childName==null)throw ra("Should only compare child_ events.");const r=new he(e.childName,e.snapshotNode),o=new he(n.childName,n.snapshotNode);return s.index_.compare(r,o)}/**
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
 */function Au(s,e){return{eventCache:s,serverCache:e}}function Nl(s,e,n,r){return Au(new us(e,n,r),s.serverCache)}function aS(s,e,n,r){return Au(s.eventCache,new us(e,n,r))}function nu(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Qs(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
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
 */let Rf;const ZO=()=>(Rf||(Rf=new Ht(DI)),Rf);class Me{static fromObject(e){let n=new Me(null);return mt(e,(r,o)=>{n=n.set(new Te(r),o)}),n}constructor(e,n=ZO()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(ue(e))return null;{const r=ce(e),o=this.children.get(r);if(o!==null){const c=o.findRootMostMatchingPathAndValue(ke(e),n);return c!=null?{path:Ve(new Te(r),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=ce(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new Me(null)}}set(e,n){if(ue(e))return new Me(n,this.children);{const r=ce(e),c=(this.children.get(r)||new Me(null)).set(ke(e),n),h=this.children.insert(r,c);return new Me(this.value,h)}}remove(e){if(ue(e))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const n=ce(e),r=this.children.get(n);if(r){const o=r.remove(ke(e));let c;return o.isEmpty()?c=this.children.remove(n):c=this.children.insert(n,o),this.value===null&&c.isEmpty()?new Me(null):new Me(this.value,c)}else return this}}get(e){if(ue(e))return this.value;{const n=ce(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(ue(e))return n;{const r=ce(e),c=(this.children.get(r)||new Me(null)).setTree(ke(e),n);let h;return c.isEmpty()?h=this.children.remove(r):h=this.children.insert(r,c),new Me(this.value,h)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((o,c)=>{r[o]=c.fold_(Ve(e,o),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,r){const o=this.value?r(n,this.value):!1;if(o)return o;if(ue(e))return null;{const c=ce(e),h=this.children.get(c);return h?h.findOnPath_(ke(e),Ve(n,c),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,r){if(ue(e))return this;{this.value&&r(n,this.value);const o=ce(e),c=this.children.get(o);return c?c.foreachOnPath_(ke(e),Ve(n,o),r):new Me(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((r,o)=>{o.foreach_(Ve(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Mn{constructor(e){this.writeTree_=e}static empty(){return new Mn(new Me(null))}}function Rl(s,e,n){if(ue(e))return new Mn(new Me(n));{const r=s.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let c=r.value;const h=xt(o,e);return c=c.updateChild(h,n),new Mn(s.writeTree_.set(o,c))}else{const o=new Me(n),c=s.writeTree_.setTree(e,o);return new Mn(c)}}}function Zf(s,e,n){let r=s;return mt(n,(o,c)=>{r=Rl(r,Ve(e,o),c)}),r}function L0(s,e){if(ue(e))return Mn.empty();{const n=s.writeTree_.setTree(e,new Me(null));return new Mn(n)}}function Jf(s,e){return er(s,e)!=null}function er(s,e){const n=s.writeTree_.findRootMostValueAndPath(e);return n!=null?s.writeTree_.get(n.path).getChild(xt(n.path,e)):null}function P0(s){const e=[],n=s.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(r,o)=>{e.push(new he(r,o))}):s.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new he(r,o.value))}),e}function ns(s,e){if(ue(e))return s;{const n=er(s,e);return n!=null?new Mn(new Me(n)):new Mn(s.writeTree_.subtree(e))}}function $f(s){return s.writeTree_.isEmpty()}function ia(s,e){return lS(be(),s.writeTree_,e)}function lS(s,e,n){if(e.value!=null)return n.updateChild(s,e.value);{let r=null;return e.children.inorderTraversal((o,c)=>{o===".priority"?(H(c.value!==null,"Priority writes must always be leaf nodes"),r=c.value):n=lS(Ve(s,o),c,n)}),!n.getChild(s).isEmpty()&&r!==null&&(n=n.updateChild(Ve(s,".priority"),r)),n}}/**
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
 */function Nu(s,e){return dS(e,s)}function JO(s,e,n,r,o){H(r>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:e,snap:n,writeId:r,visible:o}),o&&(s.visibleWrites=Rl(s.visibleWrites,e,n)),s.lastWriteId=r}function $O(s,e,n,r){H(r>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:e,children:n,writeId:r,visible:!0}),s.visibleWrites=Zf(s.visibleWrites,e,n),s.lastWriteId=r}function ek(s,e){for(let n=0;n<s.allWrites.length;n++){const r=s.allWrites[n];if(r.writeId===e)return r}return null}function tk(s,e){const n=s.allWrites.findIndex(f=>f.writeId===e);H(n>=0,"removeWrite called with nonexistent writeId.");const r=s.allWrites[n];s.allWrites.splice(n,1);let o=r.visible,c=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const f=s.allWrites[h];f.visible&&(h>=n&&nk(f,r.path)?o=!1:En(r.path,f.path)&&(c=!0)),h--}if(o){if(c)return ik(s),!0;if(r.snap)s.visibleWrites=L0(s.visibleWrites,r.path);else{const f=r.children;mt(f,m=>{s.visibleWrites=L0(s.visibleWrites,Ve(r.path,m))})}return!0}else return!1}function nk(s,e){if(s.snap)return En(s.path,e);for(const n in s.children)if(s.children.hasOwnProperty(n)&&En(Ve(s.path,n),e))return!0;return!1}function ik(s){s.visibleWrites=oS(s.allWrites,sk,be()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function sk(s){return s.visible}function oS(s,e,n){let r=Mn.empty();for(let o=0;o<s.length;++o){const c=s[o];if(e(c)){const h=c.path;let f;if(c.snap)En(n,h)?(f=xt(n,h),r=Rl(r,f,c.snap)):En(h,n)&&(f=xt(h,n),r=Rl(r,be(),c.snap.getChild(f)));else if(c.children){if(En(n,h))f=xt(n,h),r=Zf(r,f,c.children);else if(En(h,n))if(f=xt(h,n),ue(f))r=Zf(r,be(),c.children);else{const m=qs(c.children,ce(f));if(m){const g=m.getChild(ke(f));r=Rl(r,be(),g)}}}else throw ra("WriteRecord should have .snap or .children")}}return r}function cS(s,e,n,r,o){if(!r&&!o){const c=er(s.visibleWrites,e);if(c!=null)return c;{const h=ns(s.visibleWrites,e);if($f(h))return n;if(n==null&&!Jf(h,be()))return null;{const f=n||K.EMPTY_NODE;return ia(h,f)}}}else{const c=ns(s.visibleWrites,e);if(!o&&$f(c))return n;if(!o&&n==null&&!Jf(c,be()))return null;{const h=function(g){return(g.visible||o)&&(!r||!~r.indexOf(g.writeId))&&(En(g.path,e)||En(e,g.path))},f=oS(s.allWrites,h,e),m=n||K.EMPTY_NODE;return ia(f,m)}}}function rk(s,e,n){let r=K.EMPTY_NODE;const o=er(s.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Le,(c,h)=>{r=r.updateImmediateChild(c,h)}),r;if(n){const c=ns(s.visibleWrites,e);return n.forEachChild(Le,(h,f)=>{const m=ia(ns(c,new Te(h)),f);r=r.updateImmediateChild(h,m)}),P0(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}else{const c=ns(s.visibleWrites,e);return P0(c).forEach(h=>{r=r.updateImmediateChild(h.name,h.node)}),r}}function ak(s,e,n,r,o){H(r||o,"Either existingEventSnap or existingServerSnap must exist");const c=Ve(e,n);if(Jf(s.visibleWrites,c))return null;{const h=ns(s.visibleWrites,c);return $f(h)?o.getChild(n):ia(h,o.getChild(n))}}function lk(s,e,n,r){const o=Ve(e,n),c=er(s.visibleWrites,o);if(c!=null)return c;if(r.isCompleteForChild(n)){const h=ns(s.visibleWrites,o);return ia(h,r.getNode().getImmediateChild(n))}else return null}function ok(s,e){return er(s.visibleWrites,e)}function ck(s,e,n,r,o,c,h){let f;const m=ns(s.visibleWrites,e),g=er(m,be());if(g!=null)f=g;else if(n!=null)f=ia(m,n);else return[];if(f=f.withIndex(h),!f.isEmpty()&&!f.isLeafNode()){const v=[],y=h.getCompare(),E=c?f.getReverseIteratorFrom(r,h):f.getIteratorFrom(r,h);let k=E.getNext();for(;k&&v.length<o;)y(k,r)!==0&&v.push(k),k=E.getNext();return v}else return[]}function uk(){return{visibleWrites:Mn.empty(),allWrites:[],lastWriteId:-1}}function iu(s,e,n,r){return cS(s.writeTree,s.treePath,e,n,r)}function nm(s,e){return rk(s.writeTree,s.treePath,e)}function U0(s,e,n,r){return ak(s.writeTree,s.treePath,e,n,r)}function su(s,e){return ok(s.writeTree,Ve(s.treePath,e))}function dk(s,e,n,r,o,c){return ck(s.writeTree,s.treePath,e,n,r,o,c)}function im(s,e,n){return lk(s.writeTree,s.treePath,e,n)}function uS(s,e){return dS(Ve(s.treePath,e),s.writeTree)}function dS(s,e){return{treePath:s,writeTree:e}}/**
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
 */class hk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;H(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const c=o.type;if(n==="child_added"&&c==="child_removed")this.changeMap.set(r,Bl(r,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&c==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&c==="child_changed")this.changeMap.set(r,Hl(r,o.oldSnap));else if(n==="child_changed"&&c==="child_added")this.changeMap.set(r,ta(r,e.snapshotNode));else if(n==="child_changed"&&c==="child_changed")this.changeMap.set(r,Bl(r,e.snapshotNode,o.oldSnap));else throw ra("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class fk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const hS=new fk;class sm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new us(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return im(this.writes_,e,r)}}getChildAfterChild(e,n,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qs(this.viewCache_),c=dk(this.writes_,o,n,1,r,e);return c.length===0?null:c[0]}}/**
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
 */function pk(s){return{filter:s}}function mk(s,e){H(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function gk(s,e,n,r,o){const c=new hk;let h,f;if(n.type===kn.OVERWRITE){const g=n;g.source.fromUser?h=ep(s,e,g.path,g.snap,r,o,c):(H(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ue(g.path),h=ru(s,e,g.path,g.snap,r,o,f,c))}else if(n.type===kn.MERGE){const g=n;g.source.fromUser?h=yk(s,e,g.path,g.children,r,o,c):(H(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),h=tp(s,e,g.path,g.children,r,o,f,c))}else if(n.type===kn.ACK_USER_WRITE){const g=n;g.revert?h=Ek(s,e,g.path,r,o,c):h=vk(s,e,g.path,g.affectedTree,r,o,c)}else if(n.type===kn.LISTEN_COMPLETE)h=bk(s,e,n.path,r,c);else throw ra("Unknown operation type: "+n.type);const m=c.getChanges();return _k(e,h,m),{viewCache:h,changes:m}}function _k(s,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),c=nu(s);(n.length>0||!s.eventCache.isFullyInitialized()||o&&!r.getNode().equals(c)||!r.getNode().getPriority().equals(c.getPriority()))&&n.push(rS(nu(e)))}}function fS(s,e,n,r,o,c){const h=e.eventCache;if(su(r,n)!=null)return e;{let f,m;if(ue(n))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Qs(e),v=g instanceof K?g:K.EMPTY_NODE,y=nm(r,v);f=s.filter.updateFullNode(e.eventCache.getNode(),y,c)}else{const g=iu(r,Qs(e));f=s.filter.updateFullNode(e.eventCache.getNode(),g,c)}else{const g=ce(n);if(g===".priority"){H(cs(n)===1,"Can't have a priority with additional path components");const v=h.getNode();m=e.serverCache.getNode();const y=U0(r,n,v,m);y!=null?f=s.filter.updatePriority(v,y):f=h.getNode()}else{const v=ke(n);let y;if(h.isCompleteForChild(g)){m=e.serverCache.getNode();const E=U0(r,n,h.getNode(),m);E!=null?y=h.getNode().getImmediateChild(g).updateChild(v,E):y=h.getNode().getImmediateChild(g)}else y=im(r,g,e.serverCache);y!=null?f=s.filter.updateChild(h.getNode(),g,y,v,o,c):f=h.getNode()}}return Nl(e,f,h.isFullyInitialized()||ue(n),s.filter.filtersNodes())}}function ru(s,e,n,r,o,c,h,f){const m=e.serverCache;let g;const v=h?s.filter:s.filter.getIndexedFilter();if(ue(n))g=v.updateFullNode(m.getNode(),r,null);else if(v.filtersNodes()&&!m.isFiltered()){const k=m.getNode().updateChild(n,r);g=v.updateFullNode(m.getNode(),k,null)}else{const k=ce(n);if(!m.isCompleteForPath(n)&&cs(n)>1)return e;const j=ke(n),le=m.getNode().getImmediateChild(k).updateChild(j,r);k===".priority"?g=v.updatePriority(m.getNode(),le):g=v.updateChild(m.getNode(),k,le,j,hS,null)}const y=aS(e,g,m.isFullyInitialized()||ue(n),v.filtersNodes()),E=new sm(o,y,c);return fS(s,y,n,o,E,f)}function ep(s,e,n,r,o,c,h){const f=e.eventCache;let m,g;const v=new sm(o,e,c);if(ue(n))g=s.filter.updateFullNode(e.eventCache.getNode(),r,h),m=Nl(e,g,!0,s.filter.filtersNodes());else{const y=ce(n);if(y===".priority")g=s.filter.updatePriority(e.eventCache.getNode(),r),m=Nl(e,g,f.isFullyInitialized(),f.isFiltered());else{const E=ke(n),k=f.getNode().getImmediateChild(y);let j;if(ue(E))j=r;else{const G=v.getCompleteChild(y);G!=null?Yp(E)===".priority"&&G.getChild(JE(E)).isEmpty()?j=G:j=G.updateChild(E,r):j=K.EMPTY_NODE}if(k.equals(j))m=e;else{const G=s.filter.updateChild(f.getNode(),y,j,E,v,h);m=Nl(e,G,f.isFullyInitialized(),s.filter.filtersNodes())}}}return m}function z0(s,e){return s.eventCache.isCompleteForChild(e)}function yk(s,e,n,r,o,c,h){let f=e;return r.foreach((m,g)=>{const v=Ve(n,m);z0(e,ce(v))&&(f=ep(s,f,v,g,o,c,h))}),r.foreach((m,g)=>{const v=Ve(n,m);z0(e,ce(v))||(f=ep(s,f,v,g,o,c,h))}),f}function j0(s,e,n){return n.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function tp(s,e,n,r,o,c,h,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;ue(n)?g=r:g=new Me(null).setTree(n,r);const v=e.serverCache.getNode();return g.children.inorderTraversal((y,E)=>{if(v.hasChild(y)){const k=e.serverCache.getNode().getImmediateChild(y),j=j0(s,k,E);m=ru(s,m,new Te(y),j,o,c,h,f)}}),g.children.inorderTraversal((y,E)=>{const k=!e.serverCache.isCompleteForChild(y)&&E.value===null;if(!v.hasChild(y)&&!k){const j=e.serverCache.getNode().getImmediateChild(y),G=j0(s,j,E);m=ru(s,m,new Te(y),G,o,c,h,f)}}),m}function vk(s,e,n,r,o,c,h){if(su(o,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(r.value!=null){if(ue(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return ru(s,e,n,m.getNode().getChild(n),o,c,f,h);if(ue(n)){let g=new Me(null);return m.getNode().forEachChild(Yn,(v,y)=>{g=g.set(new Te(v),y)}),tp(s,e,n,g,o,c,f,h)}else return e}else{let g=new Me(null);return r.foreach((v,y)=>{const E=Ve(n,v);m.isCompleteForPath(E)&&(g=g.set(v,m.getNode().getChild(E)))}),tp(s,e,n,g,o,c,f,h)}}function bk(s,e,n,r,o){const c=e.serverCache,h=aS(e,c.getNode(),c.isFullyInitialized()||ue(n),c.isFiltered());return fS(s,h,n,r,hS,o)}function Ek(s,e,n,r,o,c){let h;if(su(r,n)!=null)return e;{const f=new sm(r,e,o),m=e.eventCache.getNode();let g;if(ue(n)||ce(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=iu(r,Qs(e));else{const y=e.serverCache.getNode();H(y instanceof K,"serverChildren would be complete if leaf node"),v=nm(r,y)}v=v,g=s.filter.updateFullNode(m,v,c)}else{const v=ce(n);let y=im(r,v,e.serverCache);y==null&&e.serverCache.isCompleteForChild(v)&&(y=m.getImmediateChild(v)),y!=null?g=s.filter.updateChild(m,v,y,ke(n),f,c):e.eventCache.getNode().hasChild(v)?g=s.filter.updateChild(m,v,K.EMPTY_NODE,ke(n),f,c):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=iu(r,Qs(e)),h.isLeafNode()&&(g=s.filter.updateFullNode(g,h,c)))}return h=e.serverCache.isFullyInitialized()||su(r,be())!=null,Nl(e,g,h,s.filter.filtersNodes())}}/**
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
 */class Sk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new Jp(r.getIndex()),c=PO(r);this.processor_=pk(c);const h=n.serverCache,f=n.eventCache,m=o.updateFullNode(K.EMPTY_NODE,h.getNode(),null),g=c.updateFullNode(K.EMPTY_NODE,f.getNode(),null),v=new us(m,h.isFullyInitialized(),o.filtersNodes()),y=new us(g,f.isFullyInitialized(),c.filtersNodes());this.viewCache_=Au(y,v),this.eventGenerator_=new WO(this.query_)}get query(){return this.query_}}function wk(s){return s.viewCache_.serverCache.getNode()}function Tk(s){return nu(s.viewCache_)}function Ck(s,e){const n=Qs(s.viewCache_);return n&&(s.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function H0(s){return s.eventRegistrations_.length===0}function Ak(s,e){s.eventRegistrations_.push(e)}function B0(s,e,n){const r=[];if(n){H(e==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(n,o);h&&r.push(h)})}if(e){let o=[];for(let c=0;c<s.eventRegistrations_.length;++c){const h=s.eventRegistrations_[c];if(!h.matches(e))o.push(h);else if(e.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return r}function V0(s,e,n,r){e.type===kn.MERGE&&e.source.queryId!==null&&(H(Qs(s.viewCache_),"We should always have a full cache before handling merges"),H(nu(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,c=gk(s.processor_,o,e,n,r);return mk(s.processor_,c.viewCache),H(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,pS(s,c.changes,c.viewCache.eventCache.getNode(),null)}function Nk(s,e){const n=s.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(c,h)=>{r.push(ta(c,h))}),n.isFullyInitialized()&&r.push(rS(n.getNode())),pS(s,r,n.getNode(),e)}function pS(s,e,n,r){const o=r?[r]:s.eventRegistrations_;return QO(s.eventGenerator_,e,n,o)}/**
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
 */let au;class mS{constructor(){this.views=new Map}}function Rk(s){H(!au,"__referenceConstructor has already been defined"),au=s}function xk(){return H(au,"Reference.ts has not been loaded"),au}function Ik(s){return s.views.size===0}function rm(s,e,n,r){const o=e.source.queryId;if(o!==null){const c=s.views.get(o);return H(c!=null,"SyncTree gave us an op for an invalid query."),V0(c,e,n,r)}else{let c=[];for(const h of s.views.values())c=c.concat(V0(h,e,n,r));return c}}function gS(s,e,n,r,o){const c=e._queryIdentifier,h=s.views.get(c);if(!h){let f=iu(n,o?r:null),m=!1;f?m=!0:r instanceof K?(f=nm(n,r),m=!1):(f=K.EMPTY_NODE,m=!1);const g=Au(new us(f,m,!1),new us(r,o,!1));return new Sk(e,g)}return h}function Ok(s,e,n,r,o,c){const h=gS(s,e,r,o,c);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,h),Ak(h,n),Nk(h,n)}function kk(s,e,n,r){const o=e._queryIdentifier,c=[];let h=[];const f=ds(s);if(o==="default")for(const[m,g]of s.views.entries())h=h.concat(B0(g,n,r)),H0(g)&&(s.views.delete(m),g.query._queryParams.loadsAllData()||c.push(g.query));else{const m=s.views.get(o);m&&(h=h.concat(B0(m,n,r)),H0(m)&&(s.views.delete(o),m.query._queryParams.loadsAllData()||c.push(m.query)))}return f&&!ds(s)&&c.push(new(xk())(e._repo,e._path)),{removed:c,events:h}}function _S(s){const e=[];for(const n of s.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function is(s,e){let n=null;for(const r of s.views.values())n=n||Ck(r,e);return n}function yS(s,e){if(e._queryParams.loadsAllData())return Ru(s);{const r=e._queryIdentifier;return s.views.get(r)}}function vS(s,e){return yS(s,e)!=null}function ds(s){return Ru(s)!=null}function Ru(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let lu;function Dk(s){H(!lu,"__referenceConstructor has already been defined"),lu=s}function Mk(){return H(lu,"Reference.ts has not been loaded"),lu}let Lk=1;class q0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Me(null),this.pendingWriteTree_=uk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function am(s,e,n,r,o){return JO(s.pendingWriteTree_,e,n,r,o),o?ha(s,new Ws($p(),e,n)):[]}function Pk(s,e,n,r){$O(s.pendingWriteTree_,e,n,r);const o=Me.fromObject(n);return ha(s,new na($p(),e,o))}function Ji(s,e,n=!1){const r=ek(s.pendingWriteTree_,e);if(tk(s.pendingWriteTree_,e)){let c=new Me(null);return r.snap!=null?c=c.set(be(),!0):mt(r.children,h=>{c=c.set(new Te(h),!0)}),ha(s,new tu(r.path,c,n))}else return[]}function ao(s,e,n){return ha(s,new Ws(em(),e,n))}function Uk(s,e,n){const r=Me.fromObject(n);return ha(s,new na(em(),e,r))}function zk(s,e){return ha(s,new ql(em(),e))}function jk(s,e,n){const r=lm(s,n);if(r){const o=om(r),c=o.path,h=o.queryId,f=xt(c,e),m=new ql(tm(h),f);return cm(s,c,m)}else return[]}function ou(s,e,n,r,o=!1){const c=e._path,h=s.syncPointTree_.get(c);let f=[];if(h&&(e._queryIdentifier==="default"||vS(h,e))){const m=kk(h,e,n,r);Ik(h)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const g=m.removed;if(f=m.events,!o){const v=g.findIndex(E=>E._queryParams.loadsAllData())!==-1,y=s.syncPointTree_.findOnPath(c,(E,k)=>ds(k));if(v&&!y){const E=s.syncPointTree_.subtree(c);if(!E.isEmpty()){const k=Vk(E);for(let j=0;j<k.length;++j){const G=k[j],le=G.query,de=wS(s,G);s.listenProvider_.startListening(xl(le),Fl(s,le),de.hashFn,de.onComplete)}}}!y&&g.length>0&&!r&&(v?s.listenProvider_.stopListening(xl(e),null):g.forEach(E=>{const k=s.queryToTagMap.get(Iu(E));s.listenProvider_.stopListening(xl(E),k)}))}qk(s,g)}return f}function bS(s,e,n,r){const o=lm(s,r);if(o!=null){const c=om(o),h=c.path,f=c.queryId,m=xt(h,e),g=new Ws(tm(f),m,n);return cm(s,h,g)}else return[]}function Hk(s,e,n,r){const o=lm(s,r);if(o){const c=om(o),h=c.path,f=c.queryId,m=xt(h,e),g=Me.fromObject(n),v=new na(tm(f),m,g);return cm(s,h,v)}else return[]}function np(s,e,n,r=!1){const o=e._path;let c=null,h=!1;s.syncPointTree_.foreachOnPath(o,(E,k)=>{const j=xt(E,o);c=c||is(k,j),h=h||ds(k)});let f=s.syncPointTree_.get(o);f?(h=h||ds(f),c=c||is(f,be())):(f=new mS,s.syncPointTree_=s.syncPointTree_.set(o,f));let m;c!=null?m=!0:(m=!1,c=K.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((k,j)=>{const G=is(j,be());G&&(c=c.updateImmediateChild(k,G))}));const g=vS(f,e);if(!g&&!e._queryParams.loadsAllData()){const E=Iu(e);H(!s.queryToTagMap.has(E),"View does not exist, but we have a tag");const k=Fk();s.queryToTagMap.set(E,k),s.tagToQueryMap.set(k,E)}const v=Nu(s.pendingWriteTree_,o);let y=Ok(f,e,n,v,c,m);if(!g&&!h&&!r){const E=yS(f,e);y=y.concat(Gk(s,e,E))}return y}function xu(s,e,n){const o=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(e,(h,f)=>{const m=xt(h,e),g=is(f,m);if(g)return g});return cS(o,e,c,n,!0)}function Bk(s,e){const n=e._path;let r=null;s.syncPointTree_.foreachOnPath(n,(g,v)=>{const y=xt(g,n);r=r||is(v,y)});let o=s.syncPointTree_.get(n);o?r=r||is(o,be()):(o=new mS,s.syncPointTree_=s.syncPointTree_.set(n,o));const c=r!=null,h=c?new us(r,!0,!1):null,f=Nu(s.pendingWriteTree_,e._path),m=gS(o,e,f,c?h.getNode():K.EMPTY_NODE,c);return Tk(m)}function ha(s,e){return ES(e,s.syncPointTree_,null,Nu(s.pendingWriteTree_,be()))}function ES(s,e,n,r){if(ue(s.path))return SS(s,e,n,r);{const o=e.get(be());n==null&&o!=null&&(n=is(o,be()));let c=[];const h=ce(s.path),f=s.operationForChild(h),m=e.children.get(h);if(m&&f){const g=n?n.getImmediateChild(h):null,v=uS(r,h);c=c.concat(ES(f,m,g,v))}return o&&(c=c.concat(rm(o,s,r,n))),c}}function SS(s,e,n,r){const o=e.get(be());n==null&&o!=null&&(n=is(o,be()));let c=[];return e.children.inorderTraversal((h,f)=>{const m=n?n.getImmediateChild(h):null,g=uS(r,h),v=s.operationForChild(h);v&&(c=c.concat(SS(v,f,m,g)))}),o&&(c=c.concat(rm(o,s,r,n))),c}function wS(s,e){const n=e.query,r=Fl(s,n);return{hashFn:()=>(wk(e)||K.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?jk(s,n._path,r):zk(s,n._path);{const c=PI(o,n);return ou(s,n,null,c)}}}}function Fl(s,e){const n=Iu(e);return s.queryToTagMap.get(n)}function Iu(s){return s._path.toString()+"$"+s._queryIdentifier}function lm(s,e){return s.tagToQueryMap.get(e)}function om(s){const e=s.indexOf("$");return H(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new Te(s.substr(0,e))}}function cm(s,e,n){const r=s.syncPointTree_.get(e);H(r,"Missing sync point for query tag that we're tracking");const o=Nu(s.pendingWriteTree_,e);return rm(r,n,o,null)}function Vk(s){return s.fold((e,n,r)=>{if(n&&ds(n))return[Ru(n)];{let o=[];return n&&(o=_S(n)),mt(r,(c,h)=>{o=o.concat(h)}),o}})}function xl(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(Mk())(s._repo,s._path):s}function qk(s,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const o=Iu(r),c=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(c)}}}function Fk(){return Lk++}function Gk(s,e,n){const r=e._path,o=Fl(s,e),c=wS(s,n),h=s.listenProvider_.startListening(xl(e),o,c.hashFn,c.onComplete),f=s.syncPointTree_.subtree(r);if(o)H(!ds(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,v,y)=>{if(!ue(g)&&v&&ds(v))return[Ru(v).query];{let E=[];return v&&(E=E.concat(_S(v).map(k=>k.query))),mt(y,(k,j)=>{E=E.concat(j)}),E}});for(let g=0;g<m.length;++g){const v=m[g];s.listenProvider_.stopListening(xl(v),Fl(s,v))}}return h}/**
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
 */class um{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new um(n)}node(){return this.node_}}class dm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new dm(this.syncTree_,n)}node(){return xu(this.syncTree_,this.path_)}}const Yk=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},F0=function(s,e,n){if(!s||typeof s!="object")return s;if(H(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return Wk(s[".sv"],e,n);if(typeof s[".sv"]=="object")return Qk(s[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},Wk=function(s,e,n){switch(s){case"timestamp":return n.timestamp;default:H(!1,"Unexpected server value: "+s)}},Qk=function(s,e,n){s.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const r=s.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const o=e.node();if(H(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const h=o.getValue();return typeof h!="number"?r:h+r},TS=function(s,e,n,r){return fm(e,new dm(n,s),r)},hm=function(s,e,n){return fm(s,new um(e),n)};function fm(s,e,n){const r=s.getPriority().val(),o=F0(r,e.getImmediateChild(".priority"),n);let c;if(s.isLeafNode()){const h=s,f=F0(h.getValue(),e,n);return f!==h.getValue()||o!==h.getPriority().val()?new ut(f,qe(o)):s}else{const h=s;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new ut(o))),h.forEachChild(Le,(f,m)=>{const g=fm(m,e.getImmediateChild(f),n);g!==m&&(c=c.updateImmediateChild(f,g))}),c}}/**
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
 */class pm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ou(s,e){let n=e instanceof Te?e:new Te(e),r=s,o=ce(n);for(;o!==null;){const c=qs(r.node.children,o)||{children:{},childCount:0};r=new pm(o,r,c),n=ke(n),o=ce(n)}return r}function tr(s){return s.node.value}function mm(s,e){s.node.value=e,ip(s)}function CS(s){return s.node.childCount>0}function Kk(s){return tr(s)===void 0&&!CS(s)}function ku(s,e){mt(s.node.children,(n,r)=>{e(new pm(n,s,r))})}function AS(s,e,n,r){n&&e(s),ku(s,o=>{AS(o,e,!0)})}function Xk(s,e,n){let r=s.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lo(s){return new Te(s.parent===null?s.name:lo(s.parent)+"/"+s.name)}function ip(s){s.parent!==null&&Zk(s.parent,s.name,s)}function Zk(s,e,n){const r=Kk(n),o=an(s.node.children,e);r&&o?(delete s.node.children[e],s.node.childCount--,ip(s)):!r&&!o&&(s.node.children[e]=n.node,s.node.childCount++,ip(s))}/**
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
 */const Jk=/[\[\].#$\/\u0000-\u001F\u007F]/,$k=/[\[\].#$\u0000-\u001F\u007F]/,xf=10*1024*1024,Du=function(s){return typeof s=="string"&&s.length!==0&&!Jk.test(s)},NS=function(s){return typeof s=="string"&&s.length!==0&&!$k.test(s)},eD=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),NS(s)},Gl=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!Su(s)||s&&typeof s=="object"&&an(s,".sv")},Kn=function(s,e,n,r){r&&e===void 0||oo(Vt(s,"value"),e,n)},oo=function(s,e,n){const r=n instanceof Te?new gO(n,s):n;if(e===void 0)throw new Error(s+"contains undefined "+Ps(r));if(typeof e=="function")throw new Error(s+"contains a function "+Ps(r)+" with contents = "+e.toString());if(Su(e))throw new Error(s+"contains "+e.toString()+" "+Ps(r));if(typeof e=="string"&&e.length>xf/3&&uu(e)>xf)throw new Error(s+"contains a string greater than "+xf+" utf8 bytes "+Ps(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,c=!1;if(mt(e,(h,f)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Du(h)))throw new Error(s+" contains an invalid key ("+h+") "+Ps(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_O(r,h),oo(s,f,r),yO(r)}),o&&c)throw new Error(s+' contains ".value" child '+Ps(r)+" in addition to actual children.")}},tD=function(s,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const c=jl(r);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Du(c[h]))throw new Error(s+"contains an invalid key ("+c[h]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(mO);let o=null;for(n=0;n<e.length;n++){if(r=e[n],o!==null&&En(o,r))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}},RS=function(s,e,n,r){const o=Vt(s,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const c=[];mt(e,(h,f)=>{const m=new Te(h);if(oo(o,f,Ve(n,m)),Yp(m)===".priority"&&!Gl(f))throw new Error(o+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(m)}),tD(o,c)},gm=function(s,e,n){if(Su(e))throw new Error(Vt(s,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Gl(e))throw new Error(Vt(s,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},co=function(s,e,n,r){if(n!==void 0&&!Du(n))throw new Error(Vt(s,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Yl=function(s,e,n,r){if(!NS(n))throw new Error(Vt(s,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nD=function(s,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yl(s,e,n)},Sn=function(s,e){if(ce(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},xS=function(s,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Du(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eD(n))throw new Error(Vt(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class iD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mu(s,e){let n=null;for(let r=0;r<e.length;r++){const o=e[r],c=o.getPath();n!==null&&!Wp(c,n.path)&&(s.eventLists_.push(n),n=null),n===null&&(n={events:[],path:c}),n.events.push(o)}n&&s.eventLists_.push(n)}function IS(s,e,n){Mu(s,n),OS(s,r=>Wp(r,e))}function ln(s,e,n){Mu(s,n),OS(s,r=>En(r,e)||En(e,r))}function OS(s,e){s.recursionDepth_++;let n=!0;for(let r=0;r<s.eventLists_.length;r++){const o=s.eventLists_[r];if(o){const c=o.path;e(c)?(sD(s.eventLists_[r]),s.eventLists_[r]=null):n=!1}}n&&(s.eventLists_=[]),s.recursionDepth_--}function sD(s){for(let e=0;e<s.events.length;e++){const n=s.events[e];if(n!==null){s.events[e]=null;const r=n.getEventRunner();Vs&&ft("event: "+n.toString()),ua(r)}}}/**
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
 */const kS="repo_interrupt",rD=25;class aD{constructor(e,n,r,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=eu(),this.transactionQueueTree_=new pm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lD(s,e,n){if(s.stats_=Fp(s.repoInfo_),s.forceRestClient_||HI())s.server_=new $c(s.repoInfo_,(r,o,c,h)=>{G0(s,r,o,c,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>Y0(s,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}s.persistentConnection_=new _i(s.repoInfo_,e,(r,o,c,h)=>{G0(s,r,o,c,h)},r=>{Y0(s,r)},r=>{oD(s,r)},s.authTokenProvider_,s.appCheckProvider_,n),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(r=>{s.server_.refreshAuthToken(r)}),s.appCheckProvider_.addTokenChangeListener(r=>{s.server_.refreshAppCheckToken(r.token)}),s.statsReporter_=GI(s.repoInfo_,()=>new YO(s.stats_,s.server_)),s.infoData_=new BO,s.infoSyncTree_=new q0({startListening:(r,o,c,h)=>{let f=[];const m=s.infoData_.getNode(r._path);return m.isEmpty()||(f=ao(s.infoSyncTree_,r._path,m),setTimeout(()=>{h("ok")},0)),f},stopListening:()=>{}}),_m(s,"connected",!1),s.serverSyncTree_=new q0({startListening:(r,o,c,h)=>(s.server_.listen(r,c,o,(f,m)=>{const g=h(f,m);ln(s.eventQueue_,r._path,g)}),[]),stopListening:(r,o)=>{s.server_.unlisten(r,o)}})}function DS(s){const n=s.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uo(s){return Yk({timestamp:DS(s)})}function G0(s,e,n,r,o){s.dataUpdateCount++;const c=new Te(e);n=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,n):n;let h=[];if(o)if(r){const m=Vc(n,g=>qe(g));h=Hk(s.serverSyncTree_,c,m,o)}else{const m=qe(n);h=bS(s.serverSyncTree_,c,m,o)}else if(r){const m=Vc(n,g=>qe(g));h=Uk(s.serverSyncTree_,c,m)}else{const m=qe(n);h=ao(s.serverSyncTree_,c,m)}let f=c;h.length>0&&(f=sa(s,c)),ln(s.eventQueue_,f,h)}function Y0(s,e){_m(s,"connected",e),e===!1&&dD(s)}function oD(s,e){mt(e,(n,r)=>{_m(s,n,r)})}function _m(s,e,n){const r=new Te("/.info/"+e),o=qe(n);s.infoData_.updateSnapshot(r,o);const c=ao(s.infoSyncTree_,r,o);ln(s.eventQueue_,r,c)}function Lu(s){return s.nextWriteId_++}function cD(s,e,n){const r=Bk(s.serverSyncTree_,e);return r!=null?Promise.resolve(r):s.server_.get(e).then(o=>{const c=qe(o).withIndex(e._queryParams.getIndex());np(s.serverSyncTree_,e,n,!0);let h;if(e._queryParams.loadsAllData())h=ao(s.serverSyncTree_,e._path,c);else{const f=Fl(s.serverSyncTree_,e);h=bS(s.serverSyncTree_,e._path,c,f)}return ln(s.eventQueue_,e._path,h),ou(s.serverSyncTree_,e,n,null,!0),c},o=>(fa(s,"get for query "+rt(e)+" failed: "+o),Promise.reject(new Error(o))))}function ym(s,e,n,r,o){fa(s,"set",{path:e.toString(),value:n,priority:r});const c=uo(s),h=qe(n,r),f=xu(s.serverSyncTree_,e),m=hm(h,f,c),g=Lu(s),v=am(s.serverSyncTree_,e,m,g,!0);Mu(s.eventQueue_,v),s.server_.put(e.toString(),h.val(!0),(E,k)=>{const j=E==="ok";j||At("set at "+e+" failed: "+E);const G=Ji(s.serverSyncTree_,g,!j);ln(s.eventQueue_,e,G),hs(s,o,E,k)});const y=bm(s,e);sa(s,y),ln(s.eventQueue_,y,[])}function uD(s,e,n,r){fa(s,"update",{path:e.toString(),value:n});let o=!0;const c=uo(s),h={};if(mt(n,(f,m)=>{o=!1,h[f]=TS(Ve(e,f),qe(m),s.serverSyncTree_,c)}),o)ft("update() called with empty data.  Don't do anything."),hs(s,r,"ok",void 0);else{const f=Lu(s),m=Pk(s.serverSyncTree_,e,h,f);Mu(s.eventQueue_,m),s.server_.merge(e.toString(),n,(g,v)=>{const y=g==="ok";y||At("update at "+e+" failed: "+g);const E=Ji(s.serverSyncTree_,f,!y),k=E.length>0?sa(s,e):e;ln(s.eventQueue_,k,E),hs(s,r,g,v)}),mt(n,g=>{const v=bm(s,Ve(e,g));sa(s,v)}),ln(s.eventQueue_,e,[])}}function dD(s){fa(s,"onDisconnectEvents");const e=uo(s),n=eu();Xf(s.onDisconnect_,be(),(o,c)=>{const h=TS(o,c,s.serverSyncTree_,e);da(n,o,h)});let r=[];Xf(n,be(),(o,c)=>{r=r.concat(ao(s.serverSyncTree_,o,c));const h=bm(s,o);sa(s,h)}),s.onDisconnect_=eu(),ln(s.eventQueue_,be(),r)}function hD(s,e,n){s.server_.onDisconnectCancel(e.toString(),(r,o)=>{r==="ok"&&Kf(s.onDisconnect_,e),hs(s,n,r,o)})}function W0(s,e,n,r){const o=qe(n);s.server_.onDisconnectPut(e.toString(),o.val(!0),(c,h)=>{c==="ok"&&da(s.onDisconnect_,e,o),hs(s,r,c,h)})}function fD(s,e,n,r,o){const c=qe(n,r);s.server_.onDisconnectPut(e.toString(),c.val(!0),(h,f)=>{h==="ok"&&da(s.onDisconnect_,e,c),hs(s,o,h,f)})}function pD(s,e,n,r){if(Bc(n)){ft("onDisconnect().update() called with empty data.  Don't do anything."),hs(s,r,"ok",void 0);return}s.server_.onDisconnectMerge(e.toString(),n,(o,c)=>{o==="ok"&&mt(n,(h,f)=>{const m=qe(f);da(s.onDisconnect_,Ve(e,h),m)}),hs(s,r,o,c)})}function mD(s,e,n){let r;ce(e._path)===".info"?r=np(s.infoSyncTree_,e,n):r=np(s.serverSyncTree_,e,n),IS(s.eventQueue_,e._path,r)}function sp(s,e,n){let r;ce(e._path)===".info"?r=ou(s.infoSyncTree_,e,n):r=ou(s.serverSyncTree_,e,n),IS(s.eventQueue_,e._path,r)}function MS(s){s.persistentConnection_&&s.persistentConnection_.interrupt(kS)}function gD(s){s.persistentConnection_&&s.persistentConnection_.resume(kS)}function fa(s,...e){let n="";s.persistentConnection_&&(n=s.persistentConnection_.id+":"),ft(n,...e)}function hs(s,e,n,r){e&&ua(()=>{if(n==="ok")e(null);else{const o=(n||"error").toUpperCase();let c=o;r&&(c+=": "+r);const h=new Error(c);h.code=o,e(h)}})}function _D(s,e,n,r,o,c){fa(s,"transaction on "+e);const h={path:e,update:n,onComplete:r,status:null,order:xE(),applyLocally:c,retryCount:0,unwatcher:o,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},f=vm(s,e,void 0);h.currentInputSnapshot=f;const m=h.update(f.val());if(m===void 0)h.unwatcher(),h.currentOutputSnapshotRaw=null,h.currentOutputSnapshotResolved=null,h.onComplete&&h.onComplete(null,!1,h.currentInputSnapshot);else{oo("transaction failed: Data returned ",m,h.path),h.status=0;const g=Ou(s.transactionQueueTree_,e),v=tr(g)||[];v.push(h),mm(g,v);let y;typeof m=="object"&&m!==null&&an(m,".priority")?(y=qs(m,".priority"),H(Gl(y),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):y=(xu(s.serverSyncTree_,e)||K.EMPTY_NODE).getPriority().val();const E=uo(s),k=qe(m,y),j=hm(k,f,E);h.currentOutputSnapshotRaw=k,h.currentOutputSnapshotResolved=j,h.currentWriteId=Lu(s);const G=am(s.serverSyncTree_,e,j,h.currentWriteId,h.applyLocally);ln(s.eventQueue_,e,G),Pu(s,s.transactionQueueTree_)}}function vm(s,e,n){return xu(s.serverSyncTree_,e,n)||K.EMPTY_NODE}function Pu(s,e=s.transactionQueueTree_){if(e||Uu(s,e),tr(e)){const n=PS(s,e);H(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&yD(s,lo(e),n)}else CS(e)&&ku(e,n=>{Pu(s,n)})}function yD(s,e,n){const r=n.map(g=>g.currentWriteId),o=vm(s,e,r);let c=o;const h=o.hash();for(let g=0;g<n.length;g++){const v=n[g];H(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const y=xt(e,v.path);c=c.updateChild(y,v.currentOutputSnapshotRaw)}const f=c.val(!0),m=e;s.server_.put(m.toString(),f,g=>{fa(s,"transaction put response",{path:m.toString(),status:g});let v=[];if(g==="ok"){const y=[];for(let E=0;E<n.length;E++)n[E].status=2,v=v.concat(Ji(s.serverSyncTree_,n[E].currentWriteId)),n[E].onComplete&&y.push(()=>n[E].onComplete(null,!0,n[E].currentOutputSnapshotResolved)),n[E].unwatcher();Uu(s,Ou(s.transactionQueueTree_,e)),Pu(s,s.transactionQueueTree_),ln(s.eventQueue_,e,v);for(let E=0;E<y.length;E++)ua(y[E])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{At("transaction at "+m.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}sa(s,e)}},h)}function sa(s,e){const n=LS(s,e),r=lo(n),o=PS(s,n);return vD(s,o,r),r}function vD(s,e,n){if(e.length===0)return;const r=[];let o=[];const h=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=xt(n,m.path);let v=!1,y;if(H(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)v=!0,y=m.abortReason,o=o.concat(Ji(s.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=rD)v=!0,y="maxretry",o=o.concat(Ji(s.serverSyncTree_,m.currentWriteId,!0));else{const E=vm(s,m.path,h);m.currentInputSnapshot=E;const k=e[f].update(E.val());if(k!==void 0){oo("transaction failed: Data returned ",k,m.path);let j=qe(k);typeof k=="object"&&k!=null&&an(k,".priority")||(j=j.updatePriority(E.getPriority()));const le=m.currentWriteId,de=uo(s),Pe=hm(j,E,de);m.currentOutputSnapshotRaw=j,m.currentOutputSnapshotResolved=Pe,m.currentWriteId=Lu(s),h.splice(h.indexOf(le),1),o=o.concat(am(s.serverSyncTree_,m.path,Pe,m.currentWriteId,m.applyLocally)),o=o.concat(Ji(s.serverSyncTree_,le,!0))}else v=!0,y="nodata",o=o.concat(Ji(s.serverSyncTree_,m.currentWriteId,!0))}ln(s.eventQueue_,n,o),o=[],v&&(e[f].status=2,(function(E){setTimeout(E,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?r.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):r.push(()=>e[f].onComplete(new Error(y),!1,null))))}Uu(s,s.transactionQueueTree_);for(let f=0;f<r.length;f++)ua(r[f]);Pu(s,s.transactionQueueTree_)}function LS(s,e){let n,r=s.transactionQueueTree_;for(n=ce(e);n!==null&&tr(r)===void 0;)r=Ou(r,n),e=ke(e),n=ce(e);return r}function PS(s,e){const n=[];return US(s,e,n),n.sort((r,o)=>r.order-o.order),n}function US(s,e,n){const r=tr(e);if(r)for(let o=0;o<r.length;o++)n.push(r[o]);ku(e,o=>{US(s,o,n)})}function Uu(s,e){const n=tr(e);if(n){let r=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[r]=n[o],r++);n.length=r,mm(e,n.length>0?n:void 0)}ku(e,r=>{Uu(s,r)})}function bm(s,e){const n=lo(LS(s,e)),r=Ou(s.transactionQueueTree_,e);return Xk(r,o=>{If(s,o)}),If(s,r),AS(r,o=>{If(s,o)}),n}function If(s,e){const n=tr(e);if(n){const r=[];let o=[],c=-1;for(let h=0;h<n.length;h++)n[h].status===3||(n[h].status===1?(H(c===h-1,"All SENT items should be at beginning of queue."),c=h,n[h].status=3,n[h].abortReason="set"):(H(n[h].status===0,"Unexpected transaction status in abort"),n[h].unwatcher(),o=o.concat(Ji(s.serverSyncTree_,n[h].currentWriteId,!0)),n[h].onComplete&&r.push(n[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?mm(e,void 0):n.length=c+1,ln(s.eventQueue_,lo(e),o);for(let h=0;h<r.length;h++)ua(r[h])}}/**
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
 */function bD(s){let e="";const n=s.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let o=n[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function ED(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const n of s.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):At(`Invalid query segment '${n}' in query '${s}'`)}return e}const rp=function(s,e){const n=SD(s),r=n.namespace;n.domain==="firebase.com"&&Qn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OI();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qE(n.host,n.secure,r,o,e,"",r!==n.subdomain),path:new Te(n.pathString)}},SD=function(s){let e="",n="",r="",o="",c="",h=!0,f="https",m=443;if(typeof s=="string"){let g=s.indexOf("//");g>=0&&(f=s.substring(0,g-1),s=s.substring(g+2));let v=s.indexOf("/");v===-1&&(v=s.length);let y=s.indexOf("?");y===-1&&(y=s.length),e=s.substring(0,Math.min(v,y)),v<y&&(o=bD(s.substring(v,y)));const E=ED(s.substring(Math.min(s.length,y)));g=e.indexOf(":"),g>=0?(h=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const k=e.slice(0,g);if(k.toLowerCase()==="localhost")n="localhost";else if(k.split(".").length<=2)n=k;else{const j=e.indexOf(".");r=e.substring(0,j).toLowerCase(),n=e.substring(j+1),c=r}"ns"in E&&(c=E.ns)}return{host:e,port:m,domain:n,subdomain:r,secure:h,scheme:f,pathString:o,namespace:c}};/**
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
 */const Q0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wD=(function(){let s=0;const e=[];return function(n){const r=n===s;s=n;let o;const c=new Array(8);for(o=7;o>=0;o--)c[o]=Q0.charAt(n%64),n=Math.floor(n/64);H(n===0,"Cannot push at time == 0");let h=c.join("");if(r){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)h+=Q0.charAt(e[o]);return H(h.length===20,"nextPushId: Length should be 20."),h}})();/**
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
 */class zS{constructor(e,n,r,o){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class jS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Em{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let TD=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new jt;return hD(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Sn("OnDisconnect.remove",this._path);const e=new jt;return W0(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Sn("OnDisconnect.set",this._path),Kn("OnDisconnect.set",e,this._path,!1);const n=new jt;return W0(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Sn("OnDisconnect.setWithPriority",this._path),Kn("OnDisconnect.setWithPriority",e,this._path,!1),gm("OnDisconnect.setWithPriority",n);const r=new jt;return fD(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Sn("OnDisconnect.update",this._path),RS("OnDisconnect.update",e,this._path);const n=new jt;return pD(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
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
 */class qt{constructor(e,n,r,o){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=o}get key(){return ue(this._path)?null:Yp(this._path)}get ref(){return new Cn(this._repo,this._path)}get _queryIdentifier(){const e=D0(this._queryParams),n=Vp(e);return n==="{}"?"default":n}get _queryObject(){return D0(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof qt))return!1;const n=this._repo===e._repo,r=Wp(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+pO(this._path)}}function zu(s,e){if(s._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ms(s){let e=null,n=null;if(s.hasStart()&&(e=s.getIndexStartValue()),s.hasEnd()&&(n=s.getIndexEndValue()),s.getIndex()===Yn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",o="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(s.hasStart()){if(s.getIndexStartName()!==os)throw new Error(r);if(typeof e!="string")throw new Error(o)}if(s.hasEnd()){if(s.getIndexEndName()!==bi)throw new Error(r);if(typeof n!="string")throw new Error(o)}}else if(s.getIndex()===Le){if(e!=null&&!Gl(e)||n!=null&&!Gl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(H(s.getIndex()instanceof Xp||s.getIndex()===Zp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ju(s){if(s.hasStart()&&s.hasEnd()&&s.hasLimit()&&!s.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Cn extends qt{constructor(e,n){super(e,n,new Tu,!1)}get parent(){const e=JE(this._path);return e===null?null:new Cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Hu=class ap{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),r=Ks(this.ref,e);return new ap(this._node.getChild(n),r,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>e(new ap(o,Ks(this.ref,r),Le)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function HS(s,e){return s=ee(s),s._checkNotDeleted("ref"),e!==void 0?Ks(s._root,e):s._root}function K0(s,e){s=ee(s),s._checkNotDeleted("refFromURL");const n=rp(e,s._repo.repoInfo_.nodeAdmin);xS("refFromURL",n);const r=n.repoInfo;return!s._repo.repoInfo_.isCustomHost()&&r.host!==s._repo.repoInfo_.host&&Qn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+s._repo.repoInfo_.host+")"),HS(s,n.path.toString())}function Ks(s,e){return s=ee(s),ce(s._path)===null?nD("child","path",e):Yl("child","path",e),new Cn(s._repo,Ve(s._path,e))}function CD(s,e){s=ee(s),Sn("push",s._path),Kn("push",e,s._path,!0);const n=DS(s._repo),r=wD(n),o=Ks(s,r),c=Ks(s,r);let h;return e!=null?h=Sm(c,e).then(()=>c):h=Promise.resolve(c),o.then=h.then.bind(h),o.catch=h.then.bind(h,void 0),o}function AD(s){return Sn("remove",s._path),Sm(s,null)}function Sm(s,e){s=ee(s),Sn("set",s._path),Kn("set",e,s._path,!1);const n=new jt;return ym(s._repo,s._path,e,null,n.wrapCallback(()=>{})),n.promise}function ND(s,e){s=ee(s),Sn("setPriority",s._path),gm("setPriority",e);const n=new jt;return ym(s._repo,Ve(s._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function RD(s,e,n){if(Sn("setWithPriority",s._path),Kn("setWithPriority",e,s._path,!1),gm("setWithPriority",n),s.key===".length"||s.key===".keys")throw"setWithPriority failed: "+s.key+" is a read-only object.";const r=new jt;return ym(s._repo,s._path,e,n,r.wrapCallback(()=>{})),r.promise}function xD(s,e){RS("update",e,s._path);const n=new jt;return uD(s._repo,s._path,e,n.wrapCallback(()=>{})),n.promise}function ID(s){s=ee(s);const e=new Em(()=>{}),n=new ho(e);return cD(s._repo,s,n).then(r=>new Hu(r,new Cn(s._repo,s._path),s._queryParams.getIndex()))}class ho{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new zS("value",this,new Hu(e.snapshotNode,new Cn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jS(this,e,n):null}matches(e){return e instanceof ho?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Bu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jS(this,e,n):null}createEvent(e,n){H(e.childName!=null,"Child events should have a childName.");const r=Ks(new Cn(n._repo,n._path),e.childName),o=n._queryParams.getIndex();return new zS(e.type,this,new Hu(e.snapshotNode,r,o),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Bu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fo(s,e,n,r,o){let c;if(typeof r=="object"&&(c=void 0,o=r),typeof r=="function"&&(c=r),o&&o.onlyOnce){const m=n,g=(v,y)=>{sp(s._repo,s,f),m(v,y)};g.userCallback=n.userCallback,g.context=n.context,n=g}const h=new Em(n,c||void 0),f=e==="value"?new ho(h):new Bu(e,h);return mD(s._repo,s,f),()=>sp(s._repo,s,f)}function lp(s,e,n,r){return fo(s,"value",e,n,r)}function X0(s,e,n,r){return fo(s,"child_added",e,n,r)}function Z0(s,e,n,r){return fo(s,"child_changed",e,n,r)}function J0(s,e,n,r){return fo(s,"child_moved",e,n,r)}function $0(s,e,n,r){return fo(s,"child_removed",e,n,r)}function eb(s,e,n){let r=null;const o=n?new Em(n):null;e==="value"?r=new ho(o):e&&(r=new Bu(e,o)),sp(s._repo,s,r)}class Pn{}class BS extends Pn{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Kn("endAt",this._value,e._path,!0);const n=Qf(e._queryParams,this._value,this._key);if(ju(n),ms(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qt(e._repo,e._path,n,e._orderByCalled)}}function OD(s,e){return co("endAt","key",e),new BS(s,e)}class kD extends Pn{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Kn("endBefore",this._value,e._path,!1);const n=HO(e._queryParams,this._value,this._key);if(ju(n),ms(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qt(e._repo,e._path,n,e._orderByCalled)}}function DD(s,e){return co("endBefore","key",e),new kD(s,e)}class VS extends Pn{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Kn("startAt",this._value,e._path,!0);const n=Wf(e._queryParams,this._value,this._key);if(ju(n),ms(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new qt(e._repo,e._path,n,e._orderByCalled)}}function MD(s=null,e){return co("startAt","key",e),new VS(s,e)}class LD extends Pn{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Kn("startAfter",this._value,e._path,!1);const n=jO(e._queryParams,this._value,this._key);if(ju(n),ms(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new qt(e._repo,e._path,n,e._orderByCalled)}}function PD(s,e){return co("startAfter","key",e),new LD(s,e)}class UD extends Pn{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new qt(e._repo,e._path,UO(e._queryParams,this._limit),e._orderByCalled)}}function zD(s){if(typeof s!="number"||Math.floor(s)!==s||s<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new UD(s)}class jD extends Pn{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new qt(e._repo,e._path,zO(e._queryParams,this._limit),e._orderByCalled)}}function HD(s){if(typeof s!="number"||Math.floor(s)!==s||s<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new jD(s)}class BD extends Pn{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){zu(e,"orderByChild");const n=new Te(this._path);if(ue(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Xp(n),o=Cu(e._queryParams,r);return ms(o),new qt(e._repo,e._path,o,!0)}}function VD(s){if(s==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(s==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(s==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Yl("orderByChild","path",s),new BD(s)}class qD extends Pn{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){zu(e,"orderByKey");const n=Cu(e._queryParams,Yn);return ms(n),new qt(e._repo,e._path,n,!0)}}function FD(){return new qD}class GD extends Pn{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){zu(e,"orderByPriority");const n=Cu(e._queryParams,Le);return ms(n),new qt(e._repo,e._path,n,!0)}}function YD(){return new GD}class WD extends Pn{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){zu(e,"orderByValue");const n=Cu(e._queryParams,Zp);return ms(n),new qt(e._repo,e._path,n,!0)}}function QD(){return new WD}class KD extends Pn{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Kn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new BS(this._value,this._key)._apply(new VS(this._value,this._key)._apply(e))}}function XD(s,e){return co("equalTo","key",e),new KD(s,e)}function In(s,...e){let n=ee(s);for(const r of e)n=r._apply(n);return n}Rk(Cn);Dk(Cn);/**
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
 */const ZD="FIREBASE_DATABASE_EMULATOR_HOST",op={};let JD=!1;function $D(s,e,n,r){const o=e.lastIndexOf(":"),c=e.substring(0,o),h=aa(c);s.repoInfo_=new qE(e,h,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(s.authTokenProvider_=r)}function qS(s,e,n,r,o){let c=r||s.options.databaseURL;c===void 0&&(s.options.projectId||Qn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=rp(c,o),f=h.repoInfo,m,g;typeof process<"u"&&m0&&(g=m0[ZD]),g?(m=!0,c=`http://${g}?ns=${f.namespace}`,h=rp(c,o),f=h.repoInfo):m=!h.repoInfo.secure;const v=o&&m?new Qr(Qr.OWNER):new VI(s.name,s.options,e);xS("Invalid Firebase Database URL",h),ue(h.path)||Qn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=t2(f,s,v,new BI(s,n));return new n2(y,s)}function e2(s,e){const n=op[e];(!n||n[s.key]!==s)&&Qn(`Database ${e}(${s.repoInfo_}) has already been deleted.`),MS(s),delete n[s.key]}function t2(s,e,n,r){let o=op[e.name];o||(o={},op[e.name]=o);let c=o[s.toURLString()];return c&&Qn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new aD(s,JD,n,r),o[s.toURLString()]=c,c}let n2=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cn(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(e2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qn("Cannot call "+e+" on a deleted database.")}};function FS(){ea.IS_TRANSPORT_INITIALIZED&&At("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function i2(){FS(),Zi.forceDisallow()}function s2(){FS(),vn.forceDisallow(),Zi.forceAllow()}function r2(s,e,n,r={}){s=ee(s),s._checkNotDeleted("useEmulator");const o=`${e}:${n}`,c=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Kr(r,c.repoInfo_.emulatorOptions))return;Qn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)r.mockUserToken&&Qn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Qr(Qr.OWNER);else if(r.mockUserToken){const f=typeof r.mockUserToken=="string"?r.mockUserToken:YT(r.mockUserToken,s.app.options.projectId);h=new Qr(f)}aa(e)&&(ob(e),cb("Database",!0)),$D(c,o,r,h)}function a2(s){s=ee(s),s._checkNotDeleted("goOffline"),MS(s._repo)}function l2(s){s=ee(s),s._checkNotDeleted("goOnline"),gD(s._repo)}function o2(s,e){OE(s,e)}/**
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
 */function c2(s){NE(fs),ls(new wn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return qS(r,o,c,n)},"PUBLIC").setMultipleInstances(!0)),Dn(g0,_0,s),Dn(g0,_0,"esm2020")}/**
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
 */const u2={".sv":"timestamp"};function d2(){return u2}function h2(s){return{".sv":{increment:s}}}/**
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
 */let f2=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function p2(s,e,n){if(s=ee(s),Sn("Reference.transaction",s._path),s.key===".length"||s.key===".keys")throw"Reference.transaction failed: "+s.key+" is a read-only object.";const r=(n==null?void 0:n.applyLocally)??!0,o=new jt,c=(f,m,g)=>{let v=null;f?o.reject(f):(v=new Hu(g,new Cn(s._repo,s._path),Le),o.resolve(new f2(m,v)))},h=lp(s,()=>{});return _D(s._repo,s._path,e,c,h,r),o.promise}_i.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};_i.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};c2();const m2="@firebase/database-compat",g2="2.1.0";/**
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
 */const _2=new Kl("@firebase/database-compat"),GS=function(s){const e="FIREBASE WARNING: "+s;_2.warn(e)};/**
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
 */const y2=function(s,e,n,r){if(n!==void 0&&typeof n!="boolean")throw new Error(Vt(s,e)+"must be a boolean.")},v2=function(s,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Vt(s,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class b2{constructor(e){this._delegate=e}cancel(e){X("OnDisconnect.cancel",0,1,arguments.length),dt("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){X("OnDisconnect.remove",0,1,arguments.length),dt("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){X("OnDisconnect.set",1,2,arguments.length),dt("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),o=>n(o)),r}setWithPriority(e,n,r){X("OnDisconnect.setWithPriority",2,3,arguments.length),dt("OnDisconnect.setWithPriority","onComplete",r,!0);const o=this._delegate.setWithPriority(e,n);return r&&o.then(()=>r(null),c=>r(c)),o}update(e,n){if(X("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const o={};for(let c=0;c<e.length;++c)o[""+c]=e[c];e=o,GS("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}dt("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),o=>n(o)),r}}/**
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
 */class E2{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return X("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class ss{constructor(e,n){this._database=e,this._delegate=n}val(){return X("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return X("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return X("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return X("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return X("DataSnapshot.child",0,1,arguments.length),e=String(e),Yl("DataSnapshot.child","path",e),new ss(this._database,this._delegate.child(e))}hasChild(e){return X("DataSnapshot.hasChild",1,1,arguments.length),Yl("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return X("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return X("DataSnapshot.forEach",1,1,arguments.length),dt("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new ss(this._database,n)))}hasChildren(){return X("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return X("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return X("DataSnapshot.ref",0,0,arguments.length),new nn(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class St{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,o){var m;X("Query.on",2,4,arguments.length),dt("Query.on","callback",n,!1);const c=St.getCancelAndContextArgs_("Query.on",r,o),h=(g,v)=>{n.call(c.context,new ss(this.database,g),v)};h.userCallback=n,h.context=c.context;const f=(m=c.cancel)==null?void 0:m.bind(c.context);switch(e){case"value":return lp(this._delegate,h,f),n;case"child_added":return X0(this._delegate,h,f),n;case"child_removed":return $0(this._delegate,h,f),n;case"child_changed":return Z0(this._delegate,h,f),n;case"child_moved":return J0(this._delegate,h,f),n;default:throw new Error(Vt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(X("Query.off",0,3,arguments.length),v2("Query.off",e),dt("Query.off","callback",n,!0),Uv("Query.off","context",r),n){const o=()=>{};o.userCallback=n,o.context=r,eb(this._delegate,e,o)}else eb(this._delegate,e)}get(){return ID(this._delegate).then(e=>new ss(this.database,e))}once(e,n,r,o){X("Query.once",1,4,arguments.length),dt("Query.once","callback",n,!0);const c=St.getCancelAndContextArgs_("Query.once",r,o),h=new jt,f=(g,v)=>{const y=new ss(this.database,g);n&&n.call(c.context,y,v),h.resolve(y)};f.userCallback=n,f.context=c.context;const m=g=>{c.cancel&&c.cancel.call(c.context,g),h.reject(g)};switch(e){case"value":lp(this._delegate,f,m,{onlyOnce:!0});break;case"child_added":X0(this._delegate,f,m,{onlyOnce:!0});break;case"child_removed":$0(this._delegate,f,m,{onlyOnce:!0});break;case"child_changed":Z0(this._delegate,f,m,{onlyOnce:!0});break;case"child_moved":J0(this._delegate,f,m,{onlyOnce:!0});break;default:throw new Error(Vt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return h.promise}limitToFirst(e){return X("Query.limitToFirst",1,1,arguments.length),new St(this.database,In(this._delegate,zD(e)))}limitToLast(e){return X("Query.limitToLast",1,1,arguments.length),new St(this.database,In(this._delegate,HD(e)))}orderByChild(e){return X("Query.orderByChild",1,1,arguments.length),new St(this.database,In(this._delegate,VD(e)))}orderByKey(){return X("Query.orderByKey",0,0,arguments.length),new St(this.database,In(this._delegate,FD()))}orderByPriority(){return X("Query.orderByPriority",0,0,arguments.length),new St(this.database,In(this._delegate,YD()))}orderByValue(){return X("Query.orderByValue",0,0,arguments.length),new St(this.database,In(this._delegate,QD()))}startAt(e=null,n){return X("Query.startAt",0,2,arguments.length),new St(this.database,In(this._delegate,MD(e,n)))}startAfter(e=null,n){return X("Query.startAfter",0,2,arguments.length),new St(this.database,In(this._delegate,PD(e,n)))}endAt(e=null,n){return X("Query.endAt",0,2,arguments.length),new St(this.database,In(this._delegate,OD(e,n)))}endBefore(e=null,n){return X("Query.endBefore",0,2,arguments.length),new St(this.database,In(this._delegate,DD(e,n)))}equalTo(e,n){return X("Query.equalTo",1,2,arguments.length),new St(this.database,In(this._delegate,XD(e,n)))}toString(){return X("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return X("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(X("Query.isEqual",1,1,arguments.length),!(e instanceof St)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const o={cancel:void 0,context:void 0};if(n&&r)o.cancel=n,dt(e,"cancel",o.cancel,!0),o.context=r,Uv(e,"context",o.context);else if(n)if(typeof n=="object"&&n!==null)o.context=n;else if(typeof n=="function")o.cancel=n;else throw new Error(Vt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return o}get ref(){return new nn(this.database,new Cn(this._delegate._repo,this._delegate._path))}}class nn extends St{constructor(e,n){super(e,new qt(n._repo,n._path,new Tu,!1)),this.database=e,this._delegate=n}getKey(){return X("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return X("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new nn(this.database,Ks(this._delegate,e))}getParent(){X("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new nn(this.database,e):null}getRoot(){return X("Reference.root",0,0,arguments.length),new nn(this.database,this._delegate.root)}set(e,n){X("Reference.set",1,2,arguments.length),dt("Reference.set","onComplete",n,!0);const r=Sm(this._delegate,e);return n&&r.then(()=>n(null),o=>n(o)),r}update(e,n){if(X("Reference.update",1,2,arguments.length),Array.isArray(e)){const o={};for(let c=0;c<e.length;++c)o[""+c]=e[c];e=o,GS("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Sn("Reference.update",this._delegate._path),dt("Reference.update","onComplete",n,!0);const r=xD(this._delegate,e);return n&&r.then(()=>n(null),o=>n(o)),r}setWithPriority(e,n,r){X("Reference.setWithPriority",2,3,arguments.length),dt("Reference.setWithPriority","onComplete",r,!0);const o=RD(this._delegate,e,n);return r&&o.then(()=>r(null),c=>r(c)),o}remove(e){X("Reference.remove",0,1,arguments.length),dt("Reference.remove","onComplete",e,!0);const n=AD(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){X("Reference.transaction",1,3,arguments.length),dt("Reference.transaction","transactionUpdate",e,!1),dt("Reference.transaction","onComplete",n,!0),y2("Reference.transaction","applyLocally",r);const o=p2(this._delegate,e,{applyLocally:r}).then(c=>new E2(c.committed,new ss(this.database,c.snapshot)));return n&&o.then(c=>n(null,c.committed,c.snapshot),c=>n(c,!1,null)),o}setPriority(e,n){X("Reference.setPriority",1,2,arguments.length),dt("Reference.setPriority","onComplete",n,!0);const r=ND(this._delegate,e);return n&&r.then(()=>n(null),o=>n(o)),r}push(e,n){X("Reference.push",0,2,arguments.length),dt("Reference.push","onComplete",n,!0);const r=CD(this._delegate,e),o=r.then(h=>new nn(this.database,h));n&&o.then(()=>n(null),h=>n(h));const c=new nn(this.database,r);return c.then=o.then.bind(o),c.catch=o.catch.bind(o,void 0),c}onDisconnect(){return Sn("Reference.onDisconnect",this._delegate._path),new b2(new TD(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Wl{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:i2,forceLongPolling:s2}}useEmulator(e,n,r={}){r2(this._delegate,e,n,r)}ref(e){if(X("database.ref",0,1,arguments.length),e instanceof nn){const n=K0(this._delegate,e.toString());return new nn(this,n)}else{const n=HS(this._delegate,e);return new nn(this,n)}}refFromURL(e){X("database.refFromURL",1,1,arguments.length);const r=K0(this._delegate,e);return new nn(this,r)}goOffline(){return X("database.goOffline",0,0,arguments.length),a2(this._delegate)}goOnline(){return X("database.goOnline",0,0,arguments.length),l2(this._delegate)}}Wl.ServerValue={TIMESTAMP:d2(),increment:s=>h2(s)};function S2({app:s,url:e,version:n,customAuthImpl:r,customAppCheckImpl:o,namespace:c,nodeAdmin:h=!1}){NE(n);const f=new gp("database-standalone"),m=new Of("auth-internal",f);m.setComponent(new wn("auth-internal",()=>r,"PRIVATE"));let g;return o&&(g=new Of("app-check-internal",f),g.setComponent(new wn("app-check-internal",()=>o,"PRIVATE"))),{instance:new Wl(qS(s,m,g,e,h),s),namespace:c}}var w2=Object.freeze({__proto__:null,initStandalone:S2});/**
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
 */const T2=Wl.ServerValue;function C2(s){s.INTERNAL.registerComponent(new wn("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),o=e.getProvider("database").getImmediate({identifier:n});return new Wl(o,r)},"PUBLIC").setServiceProps({Reference:nn,Query:St,Database:Wl,DataSnapshot:ss,enableLogging:o2,INTERNAL:w2,ServerValue:T2}).setMultipleInstances(!0)),s.registerVersion(m2,g2)}C2(es);const A2={apiKey:"AIzaSyAjxKEB1dqVksX408f18eUCb5v73LW6wrc",authDomain:"ordereat-1325.firebaseapp.com",projectId:"ordereat-1325",storageBucket:"ordereat-1325.firebasestorage.app",messagingSenderId:"810353651974",appId:"1:810353651974:web:2633a0ff7c7ece07bf2e87"},YS=es.apps.length?es.app():es.initializeApp(A2),Ql=YS.auth(),bn=YS.database();/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R2=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),tb=s=>{const e=R2(s);return e.charAt(0).toUpperCase()+e.slice(1)},WS=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),x2=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=Z.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:h,...f},m)=>Z.createElement("svg",{ref:m,...I2,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:WS("lucide",o),...!c&&!x2(f)&&{"aria-hidden":"true"},...f},[...h.map(([g,v])=>Z.createElement(g,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(s,e)=>{const n=Z.forwardRef(({className:r,...o},c)=>Z.createElement(O2,{ref:c,iconNode:e,className:WS(`lucide-${N2(tb(s))}`,`lucide-${s}`,r),...o}));return n.displayName=tb(s),n};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],cp=De("arrow-right",k2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],M2=De("banknote",D2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],QS=De("bike",L2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],U2=De("check",P2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],j2=De("clock",z2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],B2=De("credit-card",H2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],q2=De("dollar-sign",V2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],G2=De("external-link",F2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],W2=De("file-text",Y2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],K2=De("house",Q2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Z2=De("list",X2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],KS=De("lock",J2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],XS=De("mail",$2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ZS=De("map-pin",eM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],nM=De("moon",tM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],sM=De("navigation",iM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],up=De("package",rM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],lM=De("pen",aM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],JS=De("phone",oM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],uM=De("power",cM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],hM=De("save",dM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],pM=De("shield",fM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],gM=De("sun",mM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],yM=De("triangle-alert",_M);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],$S=De("user",vM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],EM=De("wallet",bM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],e1=De("x",SM),wM=()=>{const[s,e]=Z.useState(!0),[n,r]=Z.useState(!1),[o,c]=Z.useState(""),[h,f]=Z.useState(""),[m,g]=Z.useState(""),[v,y]=Z.useState(""),[E,k]=Z.useState(""),[j,G]=Z.useState("Bike"),[le,de]=Z.useState(""),[Pe,ie]=Z.useState(""),we=async Ee=>{Ee.preventDefault(),r(!0),c("");try{if(s)await Ql.signInWithEmailAndPassword(h,m);else{const Ue=await Ql.createUserWithEmailAndPassword(h,m);if(Ue.user){const oe={id:Ue.user.uid,name:v,email:h,phone:E,vehicleType:j,vehicleNumber:le,licenseNumber:Pe,isApproved:!1,isOnline:!1,joinedAt:Date.now()};await bn.ref(`deliveryPartners/${Ue.user.uid}`).set(oe)}}}catch(Ue){c(Ue.message),r(!1)}};return b.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-900 dark:bg-black p-4 font-sans",children:b.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden",children:[b.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white",children:[b.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30",children:b.jsx(QS,{className:"w-8 h-8 text-white"})}),b.jsx("h1",{className:"text-2xl font-black italic tracking-tighter mb-1",children:"OrderEat"}),b.jsx("p",{className:"text-blue-100 font-medium tracking-widest text-xs uppercase",children:"Delivery Partner Fleet"})]}),b.jsxs("div",{className:"p-8",children:[b.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-white mb-2",children:s?"Welcome Back":"Join the Fleet"}),b.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-xs mb-6",children:s?"Login to start accepting orders":"Complete your profile to get approved"}),b.jsxs("form",{onSubmit:we,className:"space-y-4",children:[!s&&b.jsxs(b.Fragment,{children:[b.jsxs("div",{children:[b.jsx("label",{className:"text-[10px] font-bold text-gray-400 uppercase",children:"Full Name"}),b.jsxs("div",{className:"relative",children:[b.jsx($S,{className:"absolute left-3 top-2.5 h-4 w-4 text-gray-400"}),b.jsx("input",{type:"text",className:"w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500",placeholder:"John Doe",value:v,onChange:Ee=>y(Ee.target.value),required:!0})]})]}),b.jsxs("div",{children:[b.jsx("label",{className:"text-[10px] font-bold text-gray-400 uppercase",children:"Phone"}),b.jsx("input",{type:"tel",className:"w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500",placeholder:"+91 9876543210",value:E,onChange:Ee=>k(Ee.target.value),required:!0})]}),b.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[b.jsxs("div",{children:[b.jsx("label",{className:"text-[10px] font-bold text-gray-400 uppercase",children:"Vehicle Type"}),b.jsxs("select",{className:"w-full px-2 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none",value:j,onChange:Ee=>G(Ee.target.value),children:[b.jsx("option",{value:"Bike",children:"Bike"}),b.jsx("option",{value:"Scooter",children:"Scooter"}),b.jsx("option",{value:"Car",children:"Car"}),b.jsx("option",{value:"Cycle",children:"Cycle"})]})]}),b.jsxs("div",{children:[b.jsx("label",{className:"text-[10px] font-bold text-gray-400 uppercase",children:"Vehicle No."}),b.jsx("input",{type:"text",className:"w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none",placeholder:"DL 01 AB 1234",value:le,onChange:Ee=>de(Ee.target.value),required:!0})]})]}),b.jsxs("div",{children:[b.jsx("label",{className:"text-[10px] font-bold text-gray-400 uppercase",children:"Driving License No."}),b.jsxs("div",{className:"relative",children:[b.jsx(W2,{className:"absolute left-3 top-2.5 h-4 w-4 text-gray-400"}),b.jsx("input",{type:"text",className:"w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500",placeholder:"License Number",value:Pe,onChange:Ee=>ie(Ee.target.value),required:!0})]})]})]}),b.jsxs("div",{children:[b.jsx("label",{className:"text-[10px] font-bold text-gray-400 uppercase",children:"Email"}),b.jsxs("div",{className:"relative",children:[b.jsx(XS,{className:"absolute left-3 top-2.5 h-4 w-4 text-gray-400"}),b.jsx("input",{type:"email",className:"w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500",placeholder:"partner@email.com",value:h,onChange:Ee=>f(Ee.target.value),required:!0})]})]}),b.jsxs("div",{children:[b.jsx("label",{className:"text-[10px] font-bold text-gray-400 uppercase",children:"Password"}),b.jsxs("div",{className:"relative",children:[b.jsx(KS,{className:"absolute left-3 top-2.5 h-4 w-4 text-gray-400"}),b.jsx("input",{type:"password",className:"w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-purple-500",placeholder:"••••••••",value:m,onChange:Ee=>g(Ee.target.value),required:!0,minLength:6})]})]}),o&&b.jsx("div",{className:"p-3 bg-red-50 text-red-500 text-xs rounded-lg font-medium",children:o}),b.jsxs("button",{type:"submit",disabled:n,className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-200 dark:shadow-blue-900/50",children:[n?"Processing...":s?"Login":"Submit Application",!n&&b.jsx(cp,{className:"w-4 h-4"})]})]}),b.jsxs("div",{className:"mt-6 text-center text-xs",children:[b.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:s?"New to OrderEat? ":"Already registered? "}),b.jsx("button",{onClick:()=>e(!s),className:"font-bold text-blue-600 dark:text-blue-400 hover:underline",children:s?"Apply Now":"Login Here"})]})]})]})})},TM=({partner:s,children:e,activeTab:n,onTabChange:r})=>{const[o,c]=Z.useState(()=>localStorage.getItem("theme")==="dark");Z.useEffect(()=>{let f;const m=g=>{"geolocation"in navigator?(f&&navigator.geolocation.clearWatch(f),f=navigator.geolocation.watchPosition(v=>{bn.ref(`deliveryPartners/${s.id}`).update({currentLocation:{lat:v.coords.latitude,lng:v.coords.longitude,updatedAt:Date.now()}})},v=>{console.error(`Location error (${v.code}): ${v.message}`),v.code===3&&g&&(console.warn("High Accuracy Timed Out. Switching to Low Accuracy..."),m(!1))},{enableHighAccuracy:g,maximumAge:1e4,timeout:45e3})):console.error("Geolocation is not supported by this browser.")};return s.isOnline&&m(!0),()=>{f&&navigator.geolocation.clearWatch(f)}},[s.isOnline,s.id]),Z.useEffect(()=>{o?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[o]);const h=async()=>{const f=Date.now(),m=new Date().toDateString(),g=s.isOnline;let v={isOnline:!s.isOnline,lastActiveDate:m};if(g){const y=s.lastOnlineAt||f,E=f-y;let k=s.lastActiveDate===m&&s.dailyActiveMs||0;v.dailyActiveMs=k+E,v.lastOnlineAt=null}else v.lastOnlineAt=f,s.lastActiveDate!==m&&(v.dailyActiveMs=0);await bn.ref(`deliveryPartners/${s.id}`).update(v)};return b.jsxs("div",{className:"h-screen w-full bg-gray-50 dark:bg-gray-900 flex flex-col font-sans overflow-hidden",children:[b.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 flex justify-between items-center shadow-sm shrink-0 z-20",children:[b.jsxs("div",{children:[b.jsx("h1",{className:"text-xl font-black italic tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"OrderEat"}),b.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400",children:[b.jsx(ZS,{className:"w-3 h-3"})," Delivery Partner"]})]}),b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("button",{onClick:()=>c(!o),className:"p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300",children:o?b.jsx(gM,{className:"w-5 h-5"}):b.jsx(nM,{className:"w-5 h-5"})}),b.jsxs("div",{onClick:h,className:`flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition ${s.isOnline?"bg-green-100 text-green-700 border border-green-200":"bg-gray-100 text-gray-500 border border-gray-200"}`,children:[b.jsx("div",{className:`w-2 h-2 rounded-full ${s.isOnline?"bg-green-500 animate-pulse":"bg-gray-400"}`}),b.jsx("span",{className:"text-xs font-bold uppercase",children:s.isOnline?"Online":"Offline"})]})]})]}),b.jsx("main",{className:"flex-1 overflow-y-auto relative pb-20",children:e}),b.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 px-6 py-3 flex justify-between items-center z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] safe-area-bottom",children:[b.jsxs("button",{onClick:()=>r("home"),className:`flex flex-col items-center gap-1 ${n==="home"?"text-blue-600":"text-gray-400 hover:text-gray-600"}`,children:[b.jsx(K2,{className:`w-6 h-6 ${n==="home"?"fill-current":""}`}),b.jsx("span",{className:"text-[10px] font-bold",children:"Duty"})]}),b.jsxs("button",{onClick:()=>r("dashboard"),className:`flex flex-col items-center gap-1 ${n==="dashboard"?"text-blue-600":"text-gray-400 hover:text-gray-600"}`,children:[b.jsx("div",{className:"bg-blue-600 text-white rounded-full p-3 -mt-8 shadow-lg border-4 border-white dark:border-gray-900",children:b.jsx("span",{className:"text-lg font-bold",children:"₹"})}),b.jsx("span",{className:"text-[10px] font-bold",children:"Earnings"})]}),b.jsxs("button",{onClick:()=>r("history"),className:`flex flex-col items-center gap-1 ${n==="history"?"text-blue-600":"text-gray-400 hover:text-gray-600"}`,children:[b.jsx(Z2,{className:"w-6 h-6"}),b.jsx("span",{className:"text-[10px] font-bold",children:"History"})]}),b.jsxs("button",{onClick:()=>r("profile"),className:`flex flex-col items-center gap-1 ${n==="profile"?"text-blue-600":"text-gray-400 hover:text-gray-600"}`,children:[b.jsx($S,{className:`w-6 h-6 ${n==="profile"?"fill-current":""}`}),b.jsx("span",{className:"text-[10px] font-bold",children:"Profile"})]})]})]})};var Us=(s=>(s.PLACED="PLACED",s.CONFIRMED="CONFIRMED",s.PREPARING="PREPARING",s.READY_FOR_PICKUP="READY_FOR_PICKUP",s.OUT_FOR_DELIVERY="OUT_FOR_DELIVERY",s.DELIVERED="DELIVERED",s.CANCELLED="CANCELLED",s))(Us||{});const nb=({partner:s})=>{var It,O;const[e,n]=Z.useState(null),[r,o]=Z.useState([]),[c,h]=Z.useState({}),[f,m]=Z.useState(null),[g,v]=Z.useState(null),y=Z.useRef(null),E=Z.useRef(null),k=Z.useRef(null);Z.useEffect(()=>{const P=bn.ref("adminSettings"),V=P.on("value",U=>U.exists()&&m(U.val())),J=bn.ref("restaurants"),$=J.on("value",U=>{U.exists()&&h(U.val())});let w;const D=U=>{if(!("geolocation"in navigator)){console.warn("Geolocation not supported");return}w&&navigator.geolocation.clearWatch(w);const B={enableHighAccuracy:U,timeout:3e4,maximumAge:3e4},Q=ae=>{v({lat:ae.coords.latitude,lng:ae.coords.longitude})},te=ae=>{console.warn(`Home Map Geo Error (${ae.code}): ${ae.message}`),ae.code===3&&U&&(console.log("Home Map: High accuracy timed out, switching to low accuracy..."),D(!1))};navigator.geolocation.getCurrentPosition(Q,te,B),w=navigator.geolocation.watchPosition(Q,te,B)};return D(!0),()=>{P.off("value",V),J.off("value",$),w&&navigator.geolocation.clearWatch(w)}},[]),Z.useEffect(()=>{if(!s.isOnline){o([]),n(null);return}const P=bn.ref("orders"),V=P.on("value",J=>{if(J.exists()){const $=J.val(),w=Object.keys($).map(U=>({...$[U],id:U})),D=w.find(U=>U.deliveryPartnerId===s.id&&U.status!==Us.DELIVERED&&U.status!==Us.CANCELLED);if(D)n(D),o([]);else{n(null);const U=w.filter(B=>B.status===Us.READY_FOR_PICKUP&&!B.deliveryPartnerId);o(U)}}});return()=>P.off("value",V)},[s.id,s.isOnline]);const j=(P,V,J,$)=>{const D=(J-P)*Math.PI/180,U=($-V)*Math.PI/180,B=Math.sin(D/2)*Math.sin(D/2)+Math.cos(P*Math.PI/180)*Math.cos(J*Math.PI/180)*Math.sin(U/2)*Math.sin(U/2);return 6371*(2*Math.atan2(Math.sqrt(B),Math.sqrt(1-B)))},G=P=>{var ae;const V=c[P.restaurantId],J=(V==null?void 0:V.lat)||28.6139,$=(V==null?void 0:V.lng)||77.209,w=P.customerLat||J+.02,D=P.customerLng||$+.02,U=j(J,$,w,D);if((ae=P.billDetails)!=null&&ae.deliveryFee)return{distance:parseFloat(U.toFixed(1)),payout:P.billDetails.deliveryFee};const B=Number((f==null?void 0:f.deliveryBaseFee)||40),Q=Number((f==null?void 0:f.deliveryPerKm)||10);let te=B;if(U>2){const gt=U-2;te+=gt*Q}return{distance:parseFloat(U.toFixed(1)),payout:Math.round(te)}},le=async P=>{const{payout:V}=G(P);await bn.ref(`orders/${P.id}`).update({deliveryPartnerId:s.id,deliveryPartner:{id:s.id,name:s.name,phone:s.phone,vehicleNumber:s.vehicleNumber},partnerPayout:V})},de=async P=>{e&&await bn.ref(`orders/${e.id}`).update({status:P})},Pe=(P,V,J,$)=>{const w=`https://www.google.com/maps/dir/?api=1&origin=${P},${V}&destination=${J},${$}&travelmode=driving`;window.open(w,"_blank")},ie=(e==null?void 0:e.status)===Us.OUT_FOR_DELIVERY?"DROP":"PICKUP",we=e?c[e.restaurantId]:null,Ee=(we==null?void 0:we.lat)||28.6139,Ue=(we==null?void 0:we.lng)||77.209,oe=((It=e==null?void 0:e.deliveryCoordinates)==null?void 0:It.lat)??(e==null?void 0:e.customerLat)??Ee+.01,Tt=((O=e==null?void 0:e.deliveryCoordinates)==null?void 0:O.lng)??(e==null?void 0:e.customerLng)??Ue+.01,on=(g==null?void 0:g.lat)||Ee,wi=(g==null?void 0:g.lng)||Ue,Nt=ie==="PICKUP"?on:Ee,it=ie==="PICKUP"?wi:Ue,An=ie==="PICKUP"?Ee:oe,Ft=ie==="PICKUP"?Ue:Tt;return Z.useEffect(()=>{if(!e||!y.current||!we)return;const P=window.L;if(!P)return;E.current||(E.current=P.map(y.current).setView([Nt,it],13),P.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(E.current));const V=E.current,J=P.icon({iconUrl:"https://cdn-icons-png.flaticon.com/512/3082/3082383.png",iconSize:[32,32],iconAnchor:[16,16]}),$=P.icon({iconUrl:"https://cdn-icons-png.flaticon.com/512/3448/3448606.png",iconSize:[32,32],iconAnchor:[16,32]}),w=P.icon({iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",iconSize:[32,32],iconAnchor:[16,32]}),D=ie==="PICKUP"?J:$,U=ie==="PICKUP"?$:w;if(k.current&&(V.removeControl(k.current),k.current=null),window.L.Routing)try{k.current=window.L.Routing.control({waypoints:[P.latLng(Nt,it),P.latLng(An,Ft)],lineOptions:{styles:[{color:ie==="PICKUP"?"#f97316":"#16a34a",weight:6}]},createMarker:function(B,Q,te){return P.marker(Q.latLng,{icon:B===0?D:U})},addWaypoints:!1,draggableWaypoints:!1,fitSelectedRoutes:!0,show:!1}).addTo(V)}catch(B){console.error("Routing Error:",B)}},[e==null?void 0:e.id,ie,Nt,it,An,Ft,we]),Z.useEffect(()=>{!e&&E.current&&(E.current.remove(),E.current=null,k.current=null)},[e]),s.isOnline?e?b.jsxs("div",{className:"h-full flex flex-col",children:[b.jsxs("div",{className:"flex-1 bg-gray-100 relative group overflow-hidden z-0",children:[b.jsx("div",{ref:y,className:"w-full h-full",style:{zIndex:0}}),b.jsxs("div",{className:`absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full shadow-lg font-bold text-sm flex items-center gap-2 animate-bounce z-[400] border border-gray-200 dark:border-gray-700 whitespace-nowrap ${ie==="PICKUP"?"bg-orange-600 text-white":"bg-green-600 text-white"}`,children:[b.jsx(sM,{className:"w-4 h-4 fill-current"}),ie==="PICKUP"?"Navigating to Restaurant":"Navigating to Customer"]}),b.jsxs("button",{onClick:()=>Pe(Nt,it,An,Ft),className:"absolute bottom-6 right-4 bg-white dark:bg-gray-800 text-blue-600 hover:text-blue-700 px-4 py-2 rounded-full shadow-xl z-[400] flex items-center gap-2 font-bold text-sm border border-gray-200 dark:border-gray-700",children:[b.jsx(G2,{className:"w-4 h-4"})," Open Google Maps"]})]}),b.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] -mt-6 relative z-[500]",children:[b.jsxs("div",{className:"flex justify-between items-center mb-6",children:[b.jsxs("div",{children:[b.jsx("h3",{className:"text-lg font-bold text-gray-800 dark:text-white",children:ie==="PICKUP"?e.restaurantName:"Customer Drop-off"}),b.jsx("p",{className:"text-sm text-gray-500 max-w-[200px] truncate",children:ie==="PICKUP"?we==null?void 0:we.address:e.deliveryAddress})]}),b.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${ie==="PICKUP"?"bg-orange-100 text-orange-600":"bg-green-100 text-green-600"}`,children:ie==="PICKUP"?b.jsx(up,{className:"w-6 h-6"}):b.jsx(ZS,{className:"w-6 h-6"})})]}),b.jsxs("div",{className:"flex gap-3 mb-6",children:[b.jsxs("button",{className:"flex-1 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl font-bold text-gray-700 dark:text-gray-200 flex items-center justify-center gap-2",children:[b.jsx(JS,{className:"w-4 h-4"})," Call"]}),e.paymentMethod==="COD"&&ie==="DROP"&&b.jsxs("div",{className:"flex-1 py-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl font-bold flex items-center justify-center gap-2 border border-green-200 dark:border-green-900/30",children:[b.jsx(q2,{className:"w-4 h-4"})," Collect ₹",e.totalAmount]})]}),ie==="PICKUP"?b.jsxs("button",{onClick:()=>de(Us.OUT_FOR_DELIVERY),className:"w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2",children:["Confirm Pickup ",b.jsx(cp,{className:"w-6 h-6"})]}):b.jsxs("button",{onClick:()=>de(Us.DELIVERED),className:"w-full py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-2",children:["Mark Delivered ",b.jsx(U2,{className:"w-6 h-6"})]})]})]}):b.jsx("div",{className:"p-4 space-y-4",children:r.length===0?b.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-center animate-pulse",children:[b.jsx("div",{className:"w-40 h-40 bg-blue-50 dark:bg-blue-900/10 rounded-full flex items-center justify-center mb-6",children:b.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full animate-ping"})}),b.jsx("h3",{className:"text-lg font-bold text-gray-800 dark:text-white",children:"Finding Orders..."}),b.jsx("p",{className:"text-gray-500 text-sm",children:"Stay online and keep moving to hotspots."})]}):b.jsxs("div",{className:"space-y-4",children:[b.jsxs("h3",{className:"font-bold text-gray-500 text-xs uppercase tracking-widest",children:["New Requests (",r.length,")"]}),r.map(P=>{const{distance:V,payout:J}=G(P),$=c[P.restaurantId];return b.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden relative animate-in slide-in-from-bottom duration-500",children:[b.jsxs("div",{className:"p-5",children:[b.jsxs("div",{className:"flex justify-between items-start mb-4",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center shrink-0",children:b.jsx(up,{className:"w-6 h-6 text-gray-500"})}),b.jsxs("div",{children:[b.jsxs("h4",{className:"font-bold text-gray-800 dark:text-white text-lg",children:["₹",J]}),b.jsx("p",{className:"text-xs text-gray-500",children:"Est. Earning"})]})]}),b.jsxs("div",{className:"text-right",children:[b.jsx("p",{className:"text-xs text-gray-400",children:"Total Distance"}),b.jsxs("p",{className:"font-bold text-gray-800 dark:text-gray-200",children:[V," km"]})]})]}),b.jsxs("div",{className:"space-y-3 relative pl-4 border-l-2 border-dashed border-gray-200 dark:border-gray-700 ml-2",children:[b.jsxs("div",{className:"relative",children:[b.jsx("div",{className:"absolute -left-[23px] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"}),b.jsx("p",{className:"font-bold text-gray-800 dark:text-gray-200 text-sm",children:P.restaurantName}),b.jsx("p",{className:"text-xs text-gray-500 truncate",children:($==null?void 0:$.address)||"Restaurant Location"})]}),b.jsxs("div",{className:"relative",children:[b.jsx("div",{className:"absolute -left-[23px] top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"}),b.jsx("p",{className:"font-bold text-gray-800 dark:text-gray-200 text-sm",children:"Customer"}),b.jsx("p",{className:"text-xs text-gray-500 truncate",children:P.deliveryAddress})]})]})]}),b.jsxs("div",{className:"flex border-t border-gray-100 dark:border-gray-700",children:[b.jsxs("button",{className:"flex-1 py-4 bg-gray-50 dark:bg-gray-700/50 text-red-500 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition flex items-center justify-center gap-2",children:[b.jsx(e1,{className:"w-5 h-5"})," Reject"]}),b.jsxs("button",{onClick:()=>le(P),className:"flex-[2] py-4 bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-inner",children:["Accept Order ",b.jsx(cp,{className:"w-5 h-5"})]})]})]},P.id)})]})}):b.jsxs("div",{className:"h-full flex flex-col items-center justify-center p-8 text-center text-gray-500",children:[b.jsx("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6",children:b.jsx(uM,{className:"w-10 h-10 text-gray-400"})}),b.jsx("h2",{className:"text-xl font-bold text-gray-800 dark:text-white mb-2",children:"You are Offline"}),b.jsx("p",{className:"text-sm",children:"Go online to start receiving delivery requests."})]})},CM=({partner:s})=>{const[e,n]=Z.useState([]),[r,o]=Z.useState("all"),[c,h]=Z.useState(0);Z.useEffect(()=>{const y=bn.ref("orders"),E=y.on("value",k=>{if(k.exists()){const j=k.val(),le=Object.keys(j).map(de=>({...j[de],id:de})).filter(de=>de.deliveryPartnerId===s.id&&de.status==="DELIVERED");n(le)}else n([])});return()=>y.off("value",E)},[s.id]),Z.useEffect(()=>{let y;if(s.isOnline&&s.lastOnlineAt){const E=()=>{const k=Date.now()-(s.lastOnlineAt||Date.now());h(Math.floor(k/1e3/60))};E(),y=setInterval(E,6e4)}else h(0);return()=>clearInterval(y)},[s.isOnline,s.lastOnlineAt]);const f=e.filter(y=>{const E=new Date(y.createdAt),k=new Date;if(r==="today")return E.toDateString()===k.toDateString();if(r==="week"){const j=new Date(k.setDate(k.getDate()-7));return E>=j}return!0}),m=f.reduce((y,E)=>y+(E.partnerPayout||0),0),g=f.reduce((y,E)=>E.paymentMethod==="COD"?y+E.totalAmount:y,0),v=()=>{const y=new Date().toDateString(),E=s.lastActiveDate===y&&s.dailyActiveMs||0,k=Math.floor(E/1e3/60)+c,j=Math.floor(k/60),G=k%60;return`${j}h ${G}m`};return b.jsxs("div",{className:"p-4 space-y-6",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Earnings"}),b.jsx("div",{className:"flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1",children:["today","week","all"].map(y=>b.jsx("button",{onClick:()=>o(y),className:`px-3 py-1 rounded-md text-xs font-bold capitalize transition ${r===y?"bg-white dark:bg-gray-700 shadow text-blue-600":"text-gray-500"}`,children:y},y))})]}),b.jsxs("div",{className:"bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/20",children:[b.jsxs("p",{className:"text-blue-100 text-xs font-bold uppercase tracking-wider mb-2",children:["Total Earnings (",r,")"]}),b.jsxs("h3",{className:"text-4xl font-black mb-4",children:["₹",m.toFixed(0)]}),b.jsxs("div",{className:"flex gap-4",children:[b.jsxs("div",{className:"bg-white/20 rounded-lg px-3 py-2 flex-1",children:[b.jsx("p",{className:"text-[10px] text-blue-100 uppercase",children:"Deliveries"}),b.jsx("p",{className:"text-lg font-bold",children:f.length})]}),b.jsxs("div",{className:"bg-white/20 rounded-lg px-3 py-2 flex-1",children:[b.jsx("p",{className:"text-[10px] text-blue-100 uppercase",children:"Avg / Order"}),b.jsxs("p",{className:"text-lg font-bold",children:["₹",f.length>0?(m/f.length).toFixed(0):0]})]})]})]}),b.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[b.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700",children:[b.jsx("div",{className:"w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2",children:b.jsx(j2,{className:"w-4 h-4"})}),b.jsx("p",{className:"text-xs text-gray-500",children:"Active Hours (Today)"}),b.jsx("p",{className:"text-lg font-bold text-gray-800 dark:text-white",children:v()})]}),b.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700",children:[b.jsx("div",{className:"w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-2",children:b.jsx(M2,{className:"w-4 h-4"})}),b.jsx("p",{className:"text-xs text-gray-500",children:"Cash to Deposit"}),b.jsxs("p",{className:"text-lg font-bold text-gray-800 dark:text-white",children:["₹",g.toLocaleString()]})]})]}),b.jsxs("div",{className:"bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-100 dark:border-purple-900/30 flex items-center justify-between",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400",children:b.jsx(EM,{className:"w-5 h-5"})}),b.jsxs("div",{children:[b.jsx("p",{className:"text-xs font-bold text-purple-700 dark:text-purple-400 uppercase",children:"Wallet Balance"}),b.jsx("p",{className:"text-sm text-purple-600/80 dark:text-purple-400/80",children:"Pending Payout"})]})]}),b.jsxs("h3",{className:"text-xl font-black text-purple-700 dark:text-purple-400",children:["₹",m.toFixed(0)]})]}),b.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4",children:[b.jsx("h3",{className:"font-bold text-gray-800 dark:text-white mb-4",children:"Recent Payouts Activity"}),b.jsx("div",{className:"space-y-4",children:f.length===0?b.jsx("p",{className:"text-center text-gray-400 text-sm py-4",children:"No deliveries in this period."}):f.slice(0,5).map(y=>{var E;return b.jsxs("div",{className:"flex justify-between items-center border-b border-gray-50 dark:border-gray-700 pb-3 last:border-0 last:pb-0",children:[b.jsxs("div",{children:[b.jsx("p",{className:"font-bold text-gray-800 dark:text-gray-200 text-sm",children:y.restaurantName}),b.jsx("p",{className:"text-xs text-gray-400",children:new Date(y.createdAt).toLocaleTimeString()})]}),b.jsxs("span",{className:"font-bold text-green-600 text-sm",children:["+ ₹",(E=y.partnerPayout)==null?void 0:E.toFixed(0)]})]},y.id)})})]})]})},AM=({partner:s})=>{const[e,n]=Z.useState([]);return Z.useEffect(()=>{const r=bn.ref("orders"),o=r.on("value",c=>{if(c.exists()){const h=c.val(),m=Object.keys(h).map(g=>({...h[g],id:g})).filter(g=>g.deliveryPartnerId===s.id&&(g.status==="DELIVERED"||g.status==="CANCELLED"));n(m.sort((g,v)=>v.createdAt-g.createdAt))}});return()=>r.off("value",o)},[s.id]),b.jsxs("div",{className:"p-4 space-y-4",children:[b.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Delivery History"}),e.length===0?b.jsx("p",{className:"text-center text-gray-400 py-10",children:"No history available."}):b.jsx("div",{className:"space-y-4",children:e.map(r=>{var o;return b.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700",children:[b.jsxs("div",{className:"flex justify-between items-start mb-2",children:[b.jsx("h4",{className:"font-bold text-gray-800 dark:text-white",children:r.restaurantName}),b.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${r.status==="DELIVERED"?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:r.status})]}),b.jsx("p",{className:"text-xs text-gray-500 mb-3",children:new Date(r.createdAt).toLocaleString()}),b.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-gray-50 dark:border-gray-700",children:[b.jsxs("div",{className:"flex items-center gap-1 text-green-600 font-bold",children:[b.jsx("span",{children:"₹"}),((o=r.partnerPayout)==null?void 0:o.toFixed(0))||0," Earning"]}),b.jsxs("div",{className:"flex items-center gap-1 text-gray-400 text-xs",children:[b.jsx(up,{className:"w-3 h-3"})," Order #",r.id.slice(-6)]})]})]},r.id)})})]})},NM=({partner:s})=>{const[e,n]=Z.useState(!1),[r,o]=Z.useState(s.name),[c,h]=Z.useState(s.phone),[f,m]=Z.useState(s.upiId||""),g=async()=>{if(window.confirm("Updating your profile will revoke your current approval. You will need to wait for Admin approval again to access the app. Continue?"))try{await bn.ref(`deliveryPartners/${s.id}`).update({name:r,phone:c,upiId:f,isApproved:!1})}catch(E){console.error("Failed to update profile",E),alert("Failed to update profile. Please try again.")}},v=()=>{o(s.name),h(s.phone),m(s.upiId||""),n(!1)};return b.jsxs("div",{className:"p-4 space-y-6",children:[b.jsxs("div",{className:"flex justify-between items-center",children:[b.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"My Profile"}),!e&&b.jsx("button",{onClick:()=>n(!0),className:"p-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-100 transition",children:b.jsx(lM,{className:"w-5 h-5"})})]}),b.jsxs("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center relative overflow-hidden",children:[b.jsx("div",{className:"w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 relative z-10",children:b.jsx("span",{className:"text-4xl font-black text-blue-600 dark:text-blue-400",children:s.name[0]})}),e?b.jsxs("div",{className:"w-full space-y-3 relative z-10",children:[b.jsxs("div",{className:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-900/30 text-xs text-left flex gap-2 items-start mb-4",children:[b.jsx(yM,{className:"w-4 h-4 text-yellow-600 shrink-0"}),b.jsx("span",{className:"text-yellow-700 dark:text-yellow-500 font-medium",children:"Warning: Saving changes will temporarily lock your account for Admin re-approval."})]}),b.jsxs("div",{children:[b.jsx("label",{className:"text-xs font-bold text-gray-500 uppercase block text-left mb-1",children:"Full Name"}),b.jsx("input",{type:"text",value:r,onChange:y=>o(y.target.value),className:"w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"})]})]}):b.jsxs(b.Fragment,{children:[b.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white",children:s.name}),b.jsxs("p",{className:"text-gray-500 text-sm",children:["Joined ",new Date(s.joinedAt).toLocaleDateString()]}),b.jsx("div",{className:`mt-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${s.isApproved?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:s.isApproved?"Verified Partner":"Pending Approval"})]})]}),b.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden",children:[b.jsx("div",{className:"p-4 border-b border-gray-100 dark:border-gray-700 font-bold text-gray-500 text-xs uppercase tracking-wider",children:"Personal Details"}),b.jsxs("div",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:[b.jsxs("div",{className:"p-4 flex items-center gap-4",children:[b.jsx(XS,{className:"w-5 h-5 text-gray-400"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("p",{className:"text-xs text-gray-400",children:"Email"}),b.jsx("p",{className:"font-medium text-gray-800 dark:text-gray-200",children:s.email})]})]}),b.jsxs("div",{className:"p-4 flex items-center gap-4",children:[b.jsx(JS,{className:"w-5 h-5 text-gray-400"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("p",{className:"text-xs text-gray-400",children:"Phone"}),e?b.jsx("input",{type:"tel",value:c,onChange:y=>h(y.target.value),className:"w-full p-1 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"}):b.jsx("p",{className:"font-medium text-gray-800 dark:text-gray-200",children:s.phone})]})]}),b.jsxs("div",{className:"p-4 flex items-center gap-4",children:[b.jsx(B2,{className:"w-5 h-5 text-gray-400"}),b.jsxs("div",{className:"flex-1",children:[b.jsx("p",{className:"text-xs text-gray-400",children:"UPI ID (For Payouts)"}),e?b.jsx("input",{type:"text",value:f,onChange:y=>m(y.target.value),placeholder:"e.g. name@upi",className:"w-full p-1 border rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm"}):b.jsx("p",{className:"font-medium text-gray-800 dark:text-gray-200",children:s.upiId||"Not Set"})]})]})]})]}),b.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden",children:[b.jsx("div",{className:"p-4 border-b border-gray-100 dark:border-gray-700 font-bold text-gray-500 text-xs uppercase tracking-wider",children:"Vehicle & License"}),b.jsxs("div",{className:"divide-y divide-gray-100 dark:divide-gray-700",children:[b.jsxs("div",{className:"p-4 flex items-center gap-4",children:[b.jsx(QS,{className:"w-5 h-5 text-gray-400"}),b.jsxs("div",{children:[b.jsx("p",{className:"text-xs text-gray-400",children:"Vehicle"}),b.jsxs("p",{className:"font-medium text-gray-800 dark:text-gray-200",children:[s.vehicleType," - ",s.vehicleNumber]})]})]}),b.jsxs("div",{className:"p-4 flex items-center gap-4",children:[b.jsx(pM,{className:"w-5 h-5 text-gray-400"}),b.jsxs("div",{children:[b.jsx("p",{className:"text-xs text-gray-400",children:"License Number"}),b.jsx("p",{className:"font-medium text-gray-800 dark:text-gray-200",children:s.licenseNumber})]})]})]})]}),e?b.jsxs("div",{className:"flex gap-3",children:[b.jsxs("button",{onClick:v,className:"flex-1 py-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold rounded-xl flex items-center justify-center gap-2",children:[b.jsx(e1,{className:"w-4 h-4"})," Cancel"]}),b.jsxs("button",{onClick:g,className:"flex-1 py-4 bg-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg",children:[b.jsx(hM,{className:"w-4 h-4"})," Save Changes"]})]}):b.jsx("button",{onClick:()=>Ql.signOut(),className:"w-full py-4 bg-red-50 dark:bg-red-900/20 text-red-600 font-bold rounded-xl flex items-center justify-center gap-2",children:"Logout"})]})};function RM(){const[s,e]=Z.useState(null),[n,r]=Z.useState(null),[o,c]=Z.useState(!0),[h,f]=Z.useState("home");if(Z.useEffect(()=>{const g=Ql.onAuthStateChanged(v=>{e(v),v?bn.ref(`deliveryPartners/${v.uid}`).on("value",E=>{E.exists()?r({...E.val(),id:v.uid}):r(null),c(!1)}):(r(null),c(!1))});return()=>g()},[]),o)return b.jsx("div",{className:"min-h-screen flex items-center justify-center bg-blue-50 text-blue-600 font-bold",children:"Loading Fleet..."});if(!s||!n)return b.jsx(wM,{});if(!n.isApproved)return b.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-center",children:[b.jsx("div",{className:"w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6",children:b.jsx(KS,{className:"w-8 h-8 text-orange-600"})}),b.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Account Pending"}),b.jsx("p",{className:"text-gray-500 mb-8 max-w-xs",children:"Your profile is currently under review by the admin team. Please check back later."}),b.jsx("button",{onClick:()=>Ql.signOut(),className:"text-blue-600 font-bold hover:underline",children:"Logout"})]});const m=()=>{switch(h){case"home":return b.jsx(nb,{partner:n});case"dashboard":return b.jsx(CM,{partner:n});case"history":return b.jsx(AM,{partner:n});case"profile":return b.jsx(NM,{partner:n});default:return b.jsx(nb,{partner:n})}};return b.jsx(TM,{partner:n,activeTab:h,onTabChange:f,children:m()})}const t1=document.getElementById("root");if(!t1)throw new Error("Could not find root element to mount to");const xM=PT.createRoot(t1);xM.render(b.jsx(RT.StrictMode,{children:b.jsx(RM,{})}));
