"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9262:(M,_,r)=>{r.d(_,{c:()=>i});var f=r(8411),c=r(967),d=r(9203);const i=(n,s)=>{let e,t;const u=(a,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(a,p);E&&s(E)?E!==e&&(o(),l(E,w)):o()},l=(a,p)=>{e=a,t||(t=e);const w=e;(0,f.w)(()=>w.classList.add("ion-activated")),p()},o=(a=!1)=>{if(!e)return;const p=e;(0,f.w)(()=>p.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,d.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,c.a),onMove:a=>u(a.currentX,a.currentY,c.b),onEnd:()=>{o(!0),(0,c.h)(),t=void 0}})}},4874:(M,_,r)=>{r.d(_,{g:()=>c});var f=r(6225);const c=()=>{if(void 0!==f.w)return f.w.Capacitor}},5149:(M,_,r)=>{r.d(_,{g:()=>f});const f=(s,e,t,u,l)=>d(s[1],e[1],t[1],u[1],l).map(o=>c(s[0],e[0],t[0],u[0],o)),c=(s,e,t,u,l)=>l*(3*e*Math.pow(l-1,2)+l*(-3*t*l+3*t+u*l))-s*Math.pow(l-1,3),d=(s,e,t,u,l)=>n((u-=l)-3*(t-=l)+3*(e-=l)-(s-=l),3*t-6*e+3*s,3*e-3*s,s).filter(a=>a>=0&&a<=1),n=(s,e,t,u)=>{if(0===s)return((s,e,t)=>{const u=e*e-4*s*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*s),(-e-Math.sqrt(u))/(2*s)]})(e,t,u);const l=(3*(t/=s)-(e/=s)*e)/3,o=(2*e*e*e-9*e*t+27*(u/=s))/27;if(0===l)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-l),-Math.sqrt(-l)];const a=Math.pow(o/2,2)+Math.pow(l/3,3);if(0===a)return[Math.pow(o/2,.5)-e/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-e/3];const p=Math.sqrt(Math.pow(-l/3,3)),w=Math.acos(-o/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-e/3,E*Math.cos((w+2*Math.PI)/3)-e/3,E*Math.cos((w+4*Math.PI)/3)-e/3]}},5085:(M,_,r)=>{r.d(_,{i:()=>f});const f=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(M,_,r)=>{r.r(_),r.d(_,{startFocusVisible:()=>i});const f="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let s=[],e=!0;const t=n?n.shadowRoot:document,u=n||document.body,l=y=>{s.forEach(h=>h.classList.remove(f)),y.forEach(h=>h.classList.add(f)),s=y},o=()=>{e=!1,l([])},a=y=>{e=d.includes(y.key),e||l([])},p=y=>{if(e&&void 0!==y.composedPath){const h=y.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(h)}},w=()=>{t.activeElement===u&&l([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",p),t.addEventListener("focusout",w),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",p),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:l}}},5487:(M,_,r)=>{r.d(_,{c:()=>c});var f=r(839);const c=s=>{const e=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const l=void 0!==e.label||d(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,f.h)(e);t=!0===e.legacy||!l&&!o&&null!==a}return t}}},d=s=>null!==s.shadowRoot&&!!(i.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||n.includes(s.tagName)&&""!==s.textContent),i=["ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(M,_,r)=>{r.d(_,{I:()=>c,a:()=>e,b:()=>t,c:()=>s,d:()=>l,h:()=>u});var f=r(4874),c=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(c||{});const i={getEngine(){const o=window.TapticEngine;if(o)return o;const a=(0,f.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,f.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,f.g)(),impact(o){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?o.style:o.style.toLowerCase();a.impact({style:p})},notification(o){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?o.type:o.type.toLowerCase();a.notification({type:p})},selection(){const o=this.isCapacitor()?c.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},n=()=>i.available(),s=()=>{n()&&i.selection()},e=()=>{n()&&i.selectionStart()},t=()=>{n()&&i.selectionChanged()},u=()=>{n()&&i.selectionEnd()},l=o=>{n()&&i.impact(o)}},8360:(M,_,r)=>{r.d(_,{I:()=>s,a:()=>l,b:()=>n,c:()=>p,d:()=>E,f:()=>o,g:()=>u,i:()=>t,p:()=>w,r:()=>y,s:()=>a});var f=r(5861),c=r(839),d=r(6710);const n="ion-content",s=".ion-content-scroll-host",e=`${n}, ${s}`,t=h=>"ION-CONTENT"===h.tagName,u=function(){var h=(0,f.Z)(function*(m){return t(m)?(yield new Promise(g=>(0,c.c)(m,g)),m.getScrollElement()):m});return function(g){return h.apply(this,arguments)}}(),l=h=>h.querySelector(s)||h.querySelector(e),o=h=>h.closest(e),a=(h,m)=>t(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(h,m,g,O)=>t(h)?h.scrollByPoint(m,g,O):Promise.resolve(h.scrollBy({top:g,left:m,behavior:O>0?"smooth":"auto"})),w=h=>(0,d.b)(h,n),E=h=>{if(t(h)){const g=h.scrollY;return h.scrollY=!1,g}return h.style.setProperty("overflow","hidden"),!0},y=(h,m)=>{t(h)?h.scrollY=m:h.style.removeProperty("overflow")}},5307:(M,_,r)=>{r.d(_,{a:()=>f,b:()=>p,c:()=>e,d:()=>w,e:()=>D,f:()=>s,g:()=>E,h:()=>d,i:()=>c,j:()=>O,k:()=>C,l:()=>t,m:()=>o,n:()=>y,o:()=>l,p:()=>n,q:()=>i,r:()=>g,s:()=>v,t:()=>a,u:()=>h,v:()=>m,w:()=>u});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(M,_,r)=>{r.d(_,{c:()=>i,g:()=>n});var f=r(6225),c=r(839),d=r(6710);const i=(e,t,u)=>{let l,o;void 0!==f.w&&"MutationObserver"in f.w&&(l=new MutationObserver(E=>{for(const y of E)for(const h of y.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===t)return u(),void(0,c.r)(()=>a(h))}),l.observe(e,{childList:!0}));const a=E=>{var y;o&&(o.disconnect(),o=void 0),o=new MutationObserver(h=>{u();for(const m of h)for(const g of m.removedNodes)g.nodeType===Node.ELEMENT_NODE&&g.slot===t&&w()}),o.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},w=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),w()}}},n=(e,t,u)=>{const l=null==e?0:e.toString().length,o=s(l,t);if(void 0===u)return o;try{return u(l,t)}catch(a){return(0,d.a)("Exception in provided `counterFormatter`.",a),o}},s=(e,t)=>`${e} / ${t}`},7484:(M,_,r)=>{r.d(_,{K:()=>i,a:()=>d});var f=r(4874),c=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(c||{}),d=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(d||{});const i={getEngine(){const n=(0,f.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(s=>{if(s.code!==c.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(M,_,r)=>{r.r(_),r.d(_,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>l,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var f=r(7484);r(4874),r(6225);const i="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},u=!1;const l=()=>{e={},t={},u=!1},o=v=>{if(f.K.getEngine())a(v);else{if(!v.visualViewport)return;t=C(v.visualViewport),v.visualViewport.onresize=()=>{O(v),E()||y(v)?p(v):h(v)&&w(v)}}},a=v=>{v.addEventListener("keyboardDidShow",D=>p(v,D)),v.addEventListener("keyboardDidHide",()=>w(v))},p=(v,D)=>{m(v,D),u=!0},w=v=>{g(v),u=!1},E=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,y=v=>u&&!h(v),h=v=>u&&t.height===v.innerHeight,m=(v,D)=>{const L=new CustomEvent(i,{detail:{keyboardHeight:D?D.keyboardHeight:v.innerHeight-t.height}});v.dispatchEvent(L)},g=v=>{const D=new CustomEvent(n);v.dispatchEvent(D)},O=v=>{e=Object.assign({},t),t=C(v.visualViewport)},C=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},3459:(M,_,r)=>{r.d(_,{c:()=>s});var f=r(5861),c=r(6225),d=r(7484);const i=e=>{if(void 0===c.d||e===d.a.None||void 0===e)return null;const t=c.d.querySelector("ion-app");return null!=t?t:c.d.body},n=e=>{const t=i(e);return null===t?0:t.clientHeight},s=function(){var e=(0,f.Z)(function*(t){let u,l,o,a;const p=function(){var m=(0,f.Z)(function*(){const g=yield d.K.getResizeMode(),O=void 0===g?void 0:g.mode;u=()=>{void 0===a&&(a=n(O)),o=!0,w(o,O)},l=()=>{o=!1,w(o,O)},null==c.w||c.w.addEventListener("keyboardWillShow",u),null==c.w||c.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),w=(m,g)=>{t&&t(m,E(g))},E=m=>{if(0===a||a===n(m))return;const g=i(m);return null!==g?new Promise(O=>{const v=new ResizeObserver(()=>{g.clientHeight===a&&(v.disconnect(),O())});v.observe(g)}):void 0};return yield p(),{init:p,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",u),null==c.w||c.w.removeEventListener("keyboardWillHide",l),u=l=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},1716:(M,_,r)=>{r.d(_,{c:()=>c});var f=r(5861);const c=()=>{let d;return{lock:function(){var n=(0,f.Z)(function*(){const s=d;let e;return d=new Promise(t=>e=t),void 0!==s&&(yield s),e});return function(){return n.apply(this,arguments)}}()}}},5857:(M,_,r)=>{r.d(_,{c:()=>d});var f=r(6225),c=r(839);const d=(i,n,s)=>{let e;const t=()=>!(void 0===n()||void 0!==i.label||null===s()),l=()=>{const a=n();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const p=s().scrollWidth;if(0===p&&null===a.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==e)return;const w=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),w.disconnect(),e=void 0)},{threshold:.01,root:i});w.observe(a)}else a.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,c.r)(()=>{l()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(M,_,r)=>{r.d(_,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(d,i,n)=>{const s=d*i/n-d+"ms",e=2*Math.PI*i/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(d,i,n)=>{const s=i/n,e=d*s-d+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":d*i/n-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":d*i/n-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/n-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/n-d+"ms"}})}}},8663:(M,_,r)=>{r.r(_),r.d(_,{createSwipeBackGesture:()=>n});var f=r(839),c=r(5085),d=r(9203);r(619);const n=(s,e,t,u,l)=>{const o=s.ownerDocument.defaultView;let a=(0,c.i)(s);const w=g=>a?-g.deltaX:g.deltaX;return(0,d.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:g=>(a=(0,c.i)(s),(g=>{const{startX:C}=g;return a?C>=o.innerWidth-50:C<=50})(g)&&e()),onStart:t,onMove:g=>{const C=w(g)/o.innerWidth;u(C)},onEnd:g=>{const O=w(g),C=o.innerWidth,v=O/C,D=(g=>a?-g.velocityX:g.velocityX)(g),L=D>=0&&(D>.2||O>C/2),P=(L?1-v:v)*C;let T=0;if(P>5){const B=P/Math.abs(D);T=Math.min(B,540)}l(L,v<=0?.01:(0,f.l)(0,v,.9999),T)}})}},7063:(M,_,r)=>{r.d(_,{w:()=>f});const f=(i,n,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(c(t,n))});return e.observe(i,{childList:!0,subtree:!0}),e},c=(i,n)=>{let s;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=d(e.addedNodes[t],n)||s}),s},d=(i,n)=>1!==i.nodeType?void 0:(i.tagName===n.toUpperCase()?[i]:Array.from(i.querySelectorAll(n))).find(e=>e.value===i.value)},1269:(M,_,r)=>{r.d(_,{O:()=>i});var f=r(9862),c=r(6689),d=r(1454);let i=(()=>{var n;class s{constructor(t,u){this.http=t,this.server=u,this.baseUrl="http://45a85c94-b0ba-42a1-8a24-3c24537de5f8.tunnel4.com"}getBaseUrl(){return this.baseUrl}getTalesData(t){return t<600?this.server.server.all_tales.all_tales_tiny:600<=t&&t<=900?this.server.server.all_tales.all_tales_small:900<=t&&t<=1200?this.server.server.all_tales.all_tales_medium:t>1200?this.server.server.all_tales.all_tales_big:void 0}getTaleData(){return this.server.server.tales}getGlossaryData(){return this.server.server.grammar}getHeader(){return{headers:new f.WM({"Content-Type":"application/json"})}}}return(n=s).\u0275fac=function(t){return new(t||n)(c.LFG(f.eN),c.LFG(d.N))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),s})()}}]);