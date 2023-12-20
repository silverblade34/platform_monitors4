"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[166],{7312:function(e,t,l){l.d(t,{T:function(){return z}});var n=l(3396),s=l(2718),i=l(9166),a=l(6107),o=l(9694),r=l(2465),u=l(4231),d=l(1138),c=l(5935),v=l(5221),p=l(4870),f=l(3766),y=l(1107),m=l(9888);const g=(0,f.U)({divided:Boolean,...(0,s.m)(),...(0,i.l)(),...(0,o.f)(),...(0,r.c)(),...(0,u.I)(),...(0,d.Q)(),...(0,c.x$)(),...(0,v.bk)()},"VBtnGroup"),b=(0,y.ev)()({name:"VBtnGroup",props:g(),setup(e,t){let{slots:l}=t;const{themeClasses:i}=(0,c.ER)(e),{densityClasses:d}=(0,o.t)(e),{borderClasses:v}=(0,s.P)(e),{elevationClasses:f}=(0,r.Y)(e),{roundedClasses:y}=(0,u.b)(e);(0,a.AF)({VBtn:{height:"auto",color:(0,p.Vh)(e,"color"),density:(0,p.Vh)(e,"density"),flat:!0,variant:(0,p.Vh)(e,"variant")}}),(0,m.L)((()=>(0,n.Wm)(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},i.value,v.value,d.value,f.value,y.value,e.class],style:e.style},l)))}});var h=l(1970);const x=Symbol.for("vuetify:v-btn-toggle"),S=(0,f.U)({...g(),...(0,h.k4)()},"VBtnToggle");(0,y.ev)()({name:"VBtnToggle",props:S(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const{isSelected:s,next:i,prev:a,select:o,selected:r}=(0,h._v)(e,x);return(0,m.L)((()=>{const[t]=b.filterProps(e);return(0,n.Wm)(b,(0,n.dG)({class:["v-btn-toggle",e.class]},t,{style:e.style}),{default:()=>[l.default?.({isSelected:s,next:i,prev:a,select:o,selected:r})]})})),{next:i,prev:a,select:o}}});var C=l(836),k=l(3289),w=l(3173),_=l(4544),B=l(4960),I=l(1710),F=l(5180),V=l(489),L=l(6183);function W(e,t){(0,n.YP)((()=>e.isActive?.value),(l=>{e.isLink.value&&l&&t&&(0,n.Y3)((()=>{t(!0)}))}),{immediate:!0})}var $=l(9374),A=l(3824);const E=(0,f.U)({active:{type:Boolean,default:void 0},symbol:{type:null,default:x},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:B.lE,appendIcon:B.lE,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...(0,s.m)(),...(0,i.l)(),...(0,o.f)(),...(0,_.x)(),...(0,r.c)(),...(0,h.YQ)(),...(0,I.fF)(),...(0,F.y)(),...(0,V.F)(),...(0,u.I)(),...(0,L.GN)(),...(0,$.Z)(),...(0,d.Q)({tag:"button"}),...(0,c.x$)(),...(0,v.bk)({variant:"elevated"})},"VBtn"),z=(0,y.ev)()({name:"VBtn",directives:{Ripple:A.H},props:E(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:l,slots:i}=t;const{themeClasses:a}=(0,c.ER)(e),{borderClasses:d}=(0,s.P)(e),{colorClasses:p,colorStyles:f,variantClasses:y}=(0,v.c1)(e),{densityClasses:g}=(0,o.t)(e),{dimensionStyles:b}=(0,_.$)(e),{elevationClasses:x}=(0,r.Y)(e),{loaderClasses:S}=(0,I.U2)(e),{locationStyles:B}=(0,F.T)(e),{positionClasses:A}=(0,V.K)(e),{roundedClasses:E}=(0,u.b)(e),{sizeClasses:z,sizeStyles:R}=(0,$.t)(e),Y=(0,h.Yt)(e,e.symbol,!1),N=(0,L.nB)(e,l),P=(0,n.Fl)((()=>void 0!==e.active?e.active:N.isLink.value?N.isActive?.value:Y?.isSelected.value)),T=(0,n.Fl)((()=>Y?.disabled.value||e.disabled)),O=(0,n.Fl)((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border))),U=(0,n.Fl)((()=>{if(void 0!==e.value)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value}));function G(e){T.value||N.isLink.value&&(e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button||"_blank"===l.target)||(N.navigate?.(e),Y?.toggle())}return W(N,Y?.select),(0,m.L)((()=>{const t=N.isLink.value?"a":e.tag,l=!(!e.prependIcon&&!i.prepend),s=!(!e.appendIcon&&!i.append),o=!(!e.icon||!0===e.icon),r=Y?.isSelected.value&&(!N.isLink.value||N.isActive?.value)||!Y||N.isActive?.value;return(0,n.wy)((0,n.Wm)(t,{type:"a"===t?void 0:"button",class:["v-btn",Y?.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":O.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,d.value,r?p.value:void 0,g.value,x.value,S.value,A.value,E.value,z.value,y.value,e.class],style:[r?f.value:void 0,b.value,B.value,R.value,e.style],disabled:T.value||void 0,href:N.href.value,onClick:G,value:U.value},{default:()=>[(0,v.Ux)(!0,"v-btn"),!e.icon&&l&&(0,n.Wm)("span",{key:"prepend",class:"v-btn__prepend"},[i.prepend?(0,n.Wm)(C.z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},i.prepend):(0,n.Wm)(k.t,{key:"prepend-icon",icon:e.prependIcon},null)]),(0,n.Wm)("span",{class:"v-btn__content","data-no-activator":""},[!i.default&&o?(0,n.Wm)(k.t,{key:"content-icon",icon:e.icon},null):(0,n.Wm)(C.z,{key:"content-defaults",disabled:!o,defaults:{VIcon:{icon:e.icon}}},{default:()=>[i.default?.()??e.text]})]),!e.icon&&s&&(0,n.Wm)("span",{key:"append",class:"v-btn__append"},[i.append?(0,n.Wm)(C.z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},i.append):(0,n.Wm)(k.t,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&(0,n.Wm)("span",{key:"loader",class:"v-btn__loader"},[i.loader?.()??(0,n.Wm)(w.L,{color:"boolean"===typeof e.loading?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[(0,n.Q2)("ripple"),!T.value&&e.ripple,null]])})),{}}})},3173:function(e,t,l){l.d(t,{L:function(){return g}});var n=l(3396),s=l(2370),i=l(9166),a=l(1477),o=l(3712),r=l(9374),u=l(1138),d=l(5935),c=l(4870),v=l(3766),p=l(1107),f=l(131),y=l(9888);const m=(0,v.U)({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...(0,i.l)(),...(0,r.Z)(),...(0,u.Q)({tag:"div"}),...(0,d.x$)()},"VProgressCircular"),g=(0,p.ev)()({name:"VProgressCircular",props:m(),setup(e,t){let{slots:l}=t;const i=20,u=2*Math.PI*i,v=(0,c.iH)(),{themeClasses:p}=(0,d.ER)(e),{sizeClasses:m,sizeStyles:g}=(0,r.t)(e),{textColorClasses:b,textColorStyles:h}=(0,s.rY)((0,c.Vh)(e,"color")),{textColorClasses:x,textColorStyles:S}=(0,s.rY)((0,c.Vh)(e,"bgColor")),{intersectionRef:C,isIntersecting:k}=(0,a.S)(),{resizeRef:w,contentRect:_}=(0,o.y)(),B=(0,n.Fl)((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),I=(0,n.Fl)((()=>Number(e.width))),F=(0,n.Fl)((()=>g.value?Number(e.size):_.value?_.value.width:Math.max(I.value,32))),V=(0,n.Fl)((()=>i/(1-I.value/F.value)*2)),L=(0,n.Fl)((()=>I.value/F.value*V.value)),W=(0,n.Fl)((()=>(0,f.kb)((100-B.value)/100*u)));return(0,n.m0)((()=>{C.value=v.value,w.value=v.value})),(0,y.L)((()=>(0,n.Wm)(e.tag,{ref:v,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":k.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},p.value,m.value,b.value,e.class],style:[g.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:B.value},{default:()=>[(0,n.Wm)("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${V.value} ${V.value}`},[(0,n.Wm)("circle",{class:["v-progress-circular__underlay",x.value],style:S.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":L.value,"stroke-dasharray":u,"stroke-dashoffset":0},null),(0,n.Wm)("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":L.value,"stroke-dasharray":u,"stroke-dashoffset":W.value},null)]),l.default&&(0,n.Wm)("div",{class:"v-progress-circular__content"},[l.default({value:B.value})])]}))),{}}})},8952:function(e,t,l){l.d(t,{Fx:function(){return f},Zq:function(){return y},T0:function(){return v},cu:function(){return p}});var n=l(9242),s=l(3396),i=l(3766),a=l(1107);const o=(0,i.U)({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function r(e,t,l){return(0,a.ev)()({name:e,props:o({mode:l,origin:t}),setup(t,l){let{slots:i}=l;const a={onBeforeEnter(e){t.origin&&(e.style.transformOrigin=t.origin)},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:l,offsetWidth:n,offsetHeight:s}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${l}px`,e.style.width=`${n}px`,e.style.height=`${s}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&e?._transitionInitialStyles){const{position:t,top:l,left:n,width:s,height:i}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=l||"",e.style.left=n||"",e.style.width=s||"",e.style.height=i||""}}};return()=>{const l=t.group?n.W3:n.uT;return(0,s.h)(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:a},i.default)}}})}function u(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,a.ev)()({name:e,props:{mode:{type:String,default:l},disabled:Boolean},setup(l,i){let{slots:a}=i;return()=>(0,s.h)(n.uT,{name:l.disabled?"":e,css:!l.disabled,...l.disabled?{}:t},a.default)}})}var d=l(7139);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const l=t?"width":"height",n=(0,d._A)(`offset-${l}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[l]:e.style[l]}},onEnter(t){const s=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const i=`${t[n]}px`;t.style[l]="0",t.offsetHeight,t.style.transition=s.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[l]=i}))},onAfterEnter:i,onEnterCancelled:i,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[l]:e.style[l]},e.style.overflow="hidden",e.style[l]=`${e[n]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[l]="0"))},onAfterLeave:s,onLeaveCancelled:s};function s(t){e&&t._parent&&t._parent.classList.remove(e),i(t)}function i(e){const t=e._initialStyle[l];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[l]=t),delete e._initialStyle}}r("fab-transition","center center","out-in"),r("dialog-bottom-transition"),r("dialog-top-transition"),r("fade-transition");const v=r("scale-transition"),p=(r("scroll-x-transition"),r("scroll-x-reverse-transition"),r("scroll-y-transition"),r("scroll-y-reverse-transition"),r("slide-x-transition"),r("slide-x-reverse-transition"),r("slide-y-transition")),f=(r("slide-y-reverse-transition"),u("expand-transition",c())),y=u("expand-x-transition",c("",!0))},1970:function(e,t,l){l.d(t,{YQ:function(){return c},Yt:function(){return v},_v:function(){return p},k4:function(){return d}});l(560);var n=l(8717),s=l(3396),i=l(4870),a=l(3766),o=l(7514),r=l(131),u=l(6033);const d=(0,a.U)({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),c=(0,a.U)({value:null,disabled:Boolean,selectedClass:String},"group-item");function v(e,t){let l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=(0,o.FN)("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=(0,o.sq)();(0,s.JJ)(Symbol.for(`${t.description}:id`),a);const r=(0,s.f3)(t,null);if(!r){if(!l)return r;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const u=(0,i.Vh)(e,"value"),d=(0,s.Fl)((()=>!(!r.disabled.value&&!e.disabled)));r.register({id:a,value:u,disabled:d},n),(0,s.Jd)((()=>{r.unregister(a)}));const c=(0,s.Fl)((()=>r.isSelected(a))),v=(0,s.Fl)((()=>c.value&&[r.selectedClass.value,e.selectedClass]));return(0,s.YP)(c,(e=>{n.emit("group:selected",{value:e})})),{id:a,isSelected:c,toggle:()=>r.select(a,!c.value),select:e=>r.select(a,e),selectedClass:v,value:u,disabled:d,group:r}}function p(e,t){let l=!1;const a=(0,i.qj)([]),d=(0,n.z)(e,"modelValue",[],(e=>null==e?[]:y(a,(0,r.FT)(e))),(t=>{const l=m(a,t);return e.multiple?l:l[0]})),c=(0,o.FN)("useGroup");function v(e,l){const n=e,s=Symbol.for(`${t.description}:id`),i=(0,r.bY)(s,c?.vnode),o=i.indexOf(l);o>-1?a.splice(o,0,n):a.push(n)}function p(e){if(l)return;g();const t=a.findIndex((t=>t.id===e));a.splice(t,1)}function g(){const t=a.find((e=>!e.disabled));t&&"force"===e.mandatory&&!d.value.length&&(d.value=[t.id])}function b(t,l){const n=a.find((e=>e.id===t));if(!l||!n?.disabled)if(e.multiple){const n=d.value.slice(),s=n.findIndex((e=>e===t)),i=~s;if(l=l??!i,i&&e.mandatory&&n.length<=1)return;if(!i&&null!=e.max&&n.length+1>e.max)return;s<0&&l?n.push(t):s>=0&&!l&&n.splice(s,1),d.value=n}else{const n=d.value.includes(t);if(e.mandatory&&n)return;d.value=l??!n?[t]:[]}}function h(t){if(e.multiple&&(0,u.Kd)('This method is not supported when using "multiple" prop'),d.value.length){const e=d.value[0],l=a.findIndex((t=>t.id===e));let n=(l+t)%a.length,s=a[n];while(s.disabled&&n!==l)n=(n+t)%a.length,s=a[n];if(s.disabled)return;d.value=[a[n].id]}else{const e=a.find((e=>!e.disabled));e&&(d.value=[e.id])}}(0,s.bv)((()=>{g()})),(0,s.Jd)((()=>{l=!0}));const x={register:v,unregister:p,selected:d,select:b,disabled:(0,i.Vh)(e,"disabled"),prev:()=>h(a.length-1),next:()=>h(1),isSelected:e=>d.value.includes(e),selectedClass:(0,s.Fl)((()=>e.selectedClass)),items:(0,s.Fl)((()=>a)),getItemIndex:e=>f(a,e)};return(0,s.JJ)(t,x),x}function f(e,t){const l=y(e,[t]);return l.length?e.findIndex((e=>e.id===l[0])):-1}function y(e,t){const l=[];return t.forEach((t=>{const n=e.find((e=>(0,r.vZ)(t,e.value))),s=e[t];null!=n?.value?l.push(n.id):null!=s&&l.push(s.id)})),l}function m(e,t){const l=[];return t.forEach((t=>{const n=e.findIndex((e=>e.id===t));if(~n){const t=e[n];l.push(null!=t.value?t.value:n)}})),l}},3712:function(e,t,l){l.d(t,{y:function(){return o}});var n=l(4870),s=l(3396),i=l(131),a=l(2385);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"content";const l=(0,n.iH)(),o=(0,n.iH)();if(a.BR){const n=new ResizeObserver((l=>{e?.(l,n),l.length&&(o.value="content"===t?l[0].contentRect:l[0].target.getBoundingClientRect())}));(0,s.Jd)((()=>{n.disconnect()})),(0,s.YP)(l,((e,t)=>{t&&(n.unobserve((0,i.vX)(t)),o.value=void 0),e&&n.observe((0,i.vX)(e))}),{flush:"post"})}return{resizeRef:l,contentRect:(0,n.OT)(o)}}}}]);
//# sourceMappingURL=166.45e063bb.js.map