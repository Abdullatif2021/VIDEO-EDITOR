import{g as T,e as Q,u as D,f as z,h as L,n as W,i as m,j as M,w as y,k as U,l as V}from"./index.6bfd5743.js";var E;const d=typeof window<"u",K=e=>typeof e=="function",F=e=>typeof e=="string",G=()=>{};d&&((E=window==null?void 0:window.navigator)==null?void 0:E.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const H=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);function I(e){return typeof e=="function"?e():D(e)}function q(e){return e}function w(e){return T()?(Q(e),!0):!1}function J(e,t=!0){z()?L(e):t?e():W(e)}function X(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:l=!1}=n;let c=null;const i=m(!1);function s(){c&&(clearInterval(c),c=null)}function o(){i.value=!1,s()}function a(){const u=I(t);u<=0||(i.value=!0,l&&e(),s(),c=setInterval(e,u))}if(r&&d&&a(),M(t)||K(t)){const u=y(t,()=>{i.value&&d&&a()});w(u)}return w(o),{isActive:i,pause:o,resume:a}}function O(e){var t;const n=I(e);return(t=n==null?void 0:n.$el)!=null?t:n}const h=d?window:void 0,Y=d?window.document:void 0;d&&window.navigator;d&&window.location;function Z(...e){let t,n,r,l;if(F(e[0])||Array.isArray(e[0])?([n,r,l]=e,t=h):[t,n,r,l]=e,!t)return G;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const c=[],i=()=>{c.forEach(u=>u()),c.length=0},s=(u,f,p,_)=>(u.addEventListener(f,p,_),()=>u.removeEventListener(f,p,_)),o=y(()=>[O(t),I(l)],([u,f])=>{i(),u&&c.push(...n.flatMap(p=>r.map(_=>s(u,p,_,f))))},{immediate:!0,flush:"post"}),a=()=>{o(),i()};return w(a),a}var k=Object.defineProperty,ee=Object.defineProperties,te=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,$=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oe=(e,t)=>{for(var n in t||(t={}))ne.call(t,n)&&$(e,n,t[n]);if(S)for(var n of S(t))re.call(t,n)&&$(e,n,t[n]);return e},se=(e,t)=>ee(e,te(t));const ae=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function ie(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:l=h,eventName:c="keydown",passive:i=!1}=r,s=ae(t);return Z(l,c,a=>{s(a)&&n(a)},i)}function ge(e,t,n={}){return ie(e,t,se(oe({},n),{eventName:"keydown"}))}function B(e,t=!1){const n=m(),r=()=>n.value=Boolean(e());return r(),J(r,t),n}const g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P="__vueuse_ssr_handlers__";g[P]=g[P]||{};g[P];var x=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,ce=(e,t)=>{var n={};for(var r in e)ue.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&x)for(var r of x(e))t.indexOf(r)<0&&le.call(e,r)&&(n[r]=e[r]);return n};function fe(e,t,n={}){const r=n,{window:l=h}=r,c=ce(r,["window"]);let i;const s=B(()=>l&&"ResizeObserver"in l),o=()=>{i&&(i.disconnect(),i=void 0)},a=y(()=>O(e),f=>{o(),s.value&&l&&f&&(i=new ResizeObserver(t),i.observe(f,c))},{immediate:!0,flush:"post"}),u=()=>{o(),a()};return w(u),{isSupported:s,stop:u}}function Pe(e,t={width:0,height:0},n={}){const{window:r=h,box:l="content-box"}=n,c=U(()=>{var o,a;return(a=(o=O(e))==null?void 0:o.namespaceURI)==null?void 0:a.includes("svg")}),i=m(t.width),s=m(t.height);return fe(e,([o])=>{const a=l==="border-box"?o.borderBoxSize:l==="content-box"?o.contentBoxSize:o.devicePixelContentBoxSize;if(r&&c.value){const u=O(e);if(u){const f=r.getComputedStyle(u);i.value=parseFloat(f.width),s.value=parseFloat(f.height)}}else if(a){const u=Array.isArray(a)?a:[a];i.value=u.reduce((f,{inlineSize:p})=>f+p,0),s.value=u.reduce((f,{blockSize:p})=>f+p,0)}else i.value=o.contentRect.width,s.value=o.contentRect.height},n),y(()=>O(e),o=>{i.value=o?t.width:0,s.value=o?t.height:0}),{width:i,height:s}}const v=new Map;function Ie(e){const t=T();function n(s){var o;const a=v.get(e)||[];a.push(s),v.set(e,a);const u=()=>l(s);return(o=t==null?void 0:t.cleanups)==null||o.push(u),u}function r(s){function o(...a){l(o),s(...a)}return n(o)}function l(s){const o=v.get(e);if(!o)return;const a=o.indexOf(s);a>-1&&o.splice(a,1),o.length||v.delete(e)}function c(){v.delete(e)}function i(s,o){var a;(a=v.get(e))==null||a.forEach(u=>u(s,o))}return{on:n,once:r,off:l,emit:i,reset:c}}var pe=Object.defineProperty,j=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))de.call(t,n)&&A(e,n,t[n]);if(j)for(var n of j(t))ve.call(t,n)&&A(e,n,t[n]);return e};const me={multiple:!0,accept:"*"};function Ee(e={}){const{document:t=Y}=e,n=m(null);let r;t&&(r=t.createElement("input"),r.type="file",r.onchange=i=>{const s=i.target;n.value=s.files});const l=i=>{if(!r)return;const s=b(b(b({},me),e),i);r.multiple=s.multiple,r.accept=s.accept,H(s,"capture")&&(r.capture=s.capture),r.click()},c=()=>{n.value=null,r&&(r.value="")};return{files:V(n),open:l,reset:c}}function Se(e={}){const t=m(),n=B(()=>typeof performance<"u"&&"memory"in performance);if(n.value){const{interval:r=1e3}=e;X(()=>{t.value=performance.memory},r,{immediate:e.immediate,immediateCallback:e.immediateCallback})}return{isSupported:n,memory:t}}var C;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(C||(C={}));var Oe=Object.defineProperty,N=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ye=(e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&R(e,n,t[n]);if(N)for(var n of N(t))we.call(t,n)&&R(e,n,t[n]);return e};const he={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ye({linear:q},he);export{Ee as a,Se as b,Pe as c,Z as d,ge as o,Ie as u};
