"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[906],{9398:function(e,t,a){a.d(t,{AP:function(){return r},AV:function(){return i},Ck:function(){return n},lA:function(){return s},pt:function(){return u}});var l=a(1076);const o="http://67.205.164.216:3000/api/v1";function n(e,t,a,n){return l.Z.post(`${o}/notifications/Account`,{cod_cuenta:e,cod_cliente:t,usuario:a,codigo:n})}function i(e,t,a){return l.Z.post(`${o}/massiveDiscard`,{ids:e,cod_cliente:a,cod_cuenta:t,descripcion_estado:"Descartado",estado:1})}function u(e){return l.Z.post(`${o}/addComment`,e)}function s(e){return l.Z.post(`${o}/allNotifications`,e)}function r(e){return l.Z.post(`${o}/notificationsById`,e)}},8616:function(e,t,a){a.r(t),a.d(t,{default:function(){return qe}});var l=a(3396),o=a(9242),n=a(7139),i=a(7312),u=a(11),s=a(3289),r=a(9166),c=(a(560),a(3712)),d=a(4870),v=a(3766),m=a(7514),p=a(131);const g=Symbol.for("vuetify:layout"),f=Symbol.for("vuetify:layout-item"),h=1e3,y=(0,v.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),w=(0,v.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function b(){const e=(0,l.f3)(g);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function _(e){const t=(0,l.f3)(g);if(!t)throw new Error("[Vuetify] Could not find injected layout");const a=e.id??`layout-item-${(0,m.sq)()}`,o=(0,m.FN)("useLayoutItem");(0,l.JJ)(f,{id:a});const n=(0,d.XI)(!1);(0,l.se)((()=>n.value=!0)),(0,l.dl)((()=>n.value=!1));const{layoutItemStyles:i,layoutItemScrimStyles:u}=t.register(o,{...e,active:(0,l.Fl)((()=>!n.value&&e.active.value)),id:a});return(0,l.Jd)((()=>t.unregister(a))),{layoutItemStyles:i,layoutRect:t.layoutRect,layoutItemScrimStyles:u}}const x=(e,t,a,l)=>{let o={top:0,left:0,right:0,bottom:0};const n=[{id:"",layer:{...o}}];for(const i of e){const e=t.get(i),u=a.get(i),s=l.get(i);if(!e||!u||!s)continue;const r={...o,[e.value]:parseInt(o[e.value],10)+(s.value?parseInt(u.value,10):0)};n.push({id:i,layer:r}),o=r}return n};function k(e){const t=(0,l.f3)(g,null),a=(0,l.Fl)((()=>t?t.rootZIndex.value-100:h)),o=(0,d.iH)([]),n=(0,d.qj)(new Map),i=(0,d.qj)(new Map),u=(0,d.qj)(new Map),s=(0,d.qj)(new Map),r=(0,d.qj)(new Map),{resizeRef:v,contentRect:y}=(0,c.y)(),w=(0,l.Fl)((()=>{const t=new Map,a=e.overlaps??[];for(const e of a.filter((e=>e.includes(":")))){const[a,l]=e.split(":");if(!o.value.includes(a)||!o.value.includes(l))continue;const u=n.get(a),s=n.get(l),r=i.get(a),c=i.get(l);u&&s&&r&&c&&(t.set(l,{position:u.value,amount:parseInt(r.value,10)}),t.set(a,{position:s.value,amount:-parseInt(c.value,10)}))}return t})),b=(0,l.Fl)((()=>{const e=[...new Set([...u.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const a of e){const e=o.value.filter((e=>u.get(e)?.value===a));t.push(...e)}return x(t,n,i,s)})),_=(0,l.Fl)((()=>!Array.from(r.values()).some((e=>e.value)))),k=(0,l.Fl)((()=>b.value[b.value.length-1].layer)),S=(0,l.Fl)((()=>({"--v-layout-left":(0,p.kb)(k.value.left),"--v-layout-right":(0,p.kb)(k.value.right),"--v-layout-top":(0,p.kb)(k.value.top),"--v-layout-bottom":(0,p.kb)(k.value.bottom),..._.value?void 0:{transition:"none"}}))),C=(0,l.Fl)((()=>b.value.slice(1).map(((e,t)=>{let{id:a}=e;const{layer:l}=b.value[t],o=i.get(a),u=n.get(a);return{id:a,...l,size:Number(o.value),position:u.value}})))),I=e=>C.value.find((t=>t.id===e)),W=(0,m.FN)("createLayout"),L=(0,d.XI)(!1);(0,l.bv)((()=>{L.value=!0})),(0,l.JJ)(g,{register:(e,t)=>{let{id:c,order:d,position:v,layoutSize:m,elementSize:g,active:y,disableTransitions:x,absolute:k}=t;u.set(c,d),n.set(c,v),i.set(c,m),s.set(c,y),x&&r.set(c,x);const S=(0,p.bY)(f,W?.vnode),I=S.indexOf(e);I>-1?o.value.splice(I,0,c):o.value.push(c);const M=(0,l.Fl)((()=>C.value.findIndex((e=>e.id===c)))),E=(0,l.Fl)((()=>a.value+2*b.value.length-2*M.value)),F=(0,l.Fl)((()=>{const e="left"===v.value||"right"===v.value,t="right"===v.value,l="bottom"===v.value,o={[v.value]:0,zIndex:E.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-110)*(t||l?-1:1)}%)`,position:k.value||a.value!==h?"absolute":"fixed",..._.value?void 0:{transition:"none"}};if(!L.value)return o;const n=C.value[M.value];if(!n)throw new Error(`[Vuetify] Could not find layout item "${c}"`);const i=w.value.get(c);return i&&(n[i.position]+=i.amount),{...o,height:e?`calc(100% - ${n.top}px - ${n.bottom}px)`:g.value?`${g.value}px`:void 0,left:t?void 0:`${n.left}px`,right:t?`${n.right}px`:void 0,top:"bottom"!==v.value?`${n.top}px`:void 0,bottom:"top"!==v.value?`${n.bottom}px`:void 0,width:e?g.value?`${g.value}px`:void 0:`calc(100% - ${n.left}px - ${n.right}px)`}})),R=(0,l.Fl)((()=>({zIndex:E.value-1})));return{layoutItemStyles:F,layoutItemScrimStyles:R,zIndex:E}},unregister:e=>{u.delete(e),n.delete(e),i.delete(e),s.delete(e),r.delete(e),o.value=o.value.filter((t=>t!==e))},mainRect:k,mainStyles:S,getLayoutItem:I,items:C,layoutRect:y,rootZIndex:a});const M=(0,l.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),E=(0,l.Fl)((()=>({zIndex:t?a.value:void 0,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:M,layoutStyles:E,getLayoutItem:I,items:C,layoutRect:y,layoutRef:v}}var S=a(1107),C=a(9888);const I=(0,v.U)({...(0,r.l)(),...y()},"VLayout"),W=(0,S.ev)()({name:"VLayout",props:I(),setup(e,t){let{slots:a}=t;const{layoutClasses:o,layoutStyles:n,getLayoutItem:i,items:u,layoutRef:s}=k(e);return(0,C.L)((()=>(0,l.Wm)("div",{ref:s,class:[o.value,e.class],style:[n.value,e.style]},[a.default?.()]))),{getLayoutItem:i,items:u}}});var L=a(1372),M=a(1138);const E=(0,v.U)({scrollable:Boolean,...(0,r.l)(),...(0,M.Q)({tag:"main"})},"VMain"),F=(0,S.ev)()({name:"VMain",props:E(),setup(e,t){let{slots:a}=t;const{mainStyles:o}=b(),{ssrBootStyles:n}=(0,L.u)();return(0,C.L)((()=>(0,l.Wm)(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,n.value,e.style]},{default:()=>[e.scrollable?(0,l.Wm)("div",{class:"v-main__scroller"},[a.default?.()]):a.default?.()]}))),{}}});function R(e){let{rootEl:t,isSticky:a,layoutItemStyles:o}=e;const n=(0,d.XI)(!1),i=(0,d.XI)(0),u=(0,l.Fl)((()=>{const e="boolean"===typeof n.value?"top":n.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[e]:(0,p.kb)(i.value)}:{top:o.value.top}]}));(0,l.bv)((()=>{(0,l.YP)(a,(e=>{e?window.addEventListener("scroll",r,{passive:!0}):window.removeEventListener("scroll",r)}),{immediate:!0})})),(0,l.Jd)((()=>{window.removeEventListener("scroll",r)}));let s=0;function r(){const e=s>window.scrollY?"up":"down",a=t.value.getBoundingClientRect(),l=parseFloat(o.value.top??0),u=window.scrollY-Math.max(0,i.value-l),r=a.height+Math.max(i.value,l)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y"))||0;a.height<window.innerHeight-l?(n.value="top",i.value=l):"up"===e&&"bottom"===n.value||"down"===e&&"top"===n.value?(i.value=window.scrollY+a.top-c,n.value=!0):"down"===e&&r<=0?(i.value=0,n.value="bottom"):"up"===e&&u<=0&&(c?"top"!==n.value&&(i.value=-u+c+l,n.value="top"):(i.value=a.top+u,n.value="top")),s=window.scrollY}return{isStuck:n,stickyStyles:u}}const H=100,V=20;function A(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function D(e){if(e.length<2)return 0;if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const l=A(t),o=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);t+=(o-l)*Math.abs(o),a===e.length-1&&(t*=.5)}return 1e3*A(t)}function P(){const e={};function t(t){Array.from(t.changedTouches).forEach((a=>{const l=e[a.identifier]??(e[a.identifier]=new p.PU(V));l.push([t.timeStamp,a])}))}function a(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))}function l(t){const a=e[t]?.values().reverse();if(!a)throw new Error(`No samples for touch id ${t}`);const l=a[0],o=[],n=[];for(const e of a){if(l[0]-e[0]>H)break;o.push({t:e[0],d:e[1].clientX}),n.push({t:e[0],d:e[1].clientY})}return{x:D(o),y:D(n),get direction(){const{x:e,y:t}=this,[a,l]=[Math.abs(e),Math.abs(t)];return a>l&&e>=0?"right":a>l&&e<=0?"left":l>a&&t>=0?"down":l>a&&t<=0?"up":Y()}}}return{addMovement:t,endTouch:a,getVelocity:l}}function Y(){throw new Error}function $(e){let{isActive:t,isTemporary:a,width:o,touchless:n,position:i}=e;(0,l.bv)((()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",_,{passive:!0})})),(0,l.Jd)((()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",_)}));const u=(0,l.Fl)((()=>["left","right"].includes(i.value))),{addMovement:s,endTouch:r,getVelocity:c}=P();let v=!1;const m=(0,d.XI)(!1),p=(0,d.XI)(0),g=(0,d.XI)(0);let f;function h(e,t){return("left"===i.value?e:"right"===i.value?document.documentElement.clientWidth-e:"top"===i.value?e:"bottom"===i.value?document.documentElement.clientHeight-e:B())-(t?o.value:0)}function y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const a="left"===i.value?(e-g.value)/o.value:"right"===i.value?(document.documentElement.clientWidth-e-g.value)/o.value:"top"===i.value?(e-g.value)/o.value:"bottom"===i.value?(document.documentElement.clientHeight-e-g.value)/o.value:B();return t?Math.max(0,Math.min(1,a)):a}function w(e){if(n.value)return;const l=e.changedTouches[0].clientX,c=e.changedTouches[0].clientY,d=25,m="left"===i.value?l<d:"right"===i.value?l>document.documentElement.clientWidth-d:"top"===i.value?c<d:"bottom"===i.value?c>document.documentElement.clientHeight-d:B(),w=t.value&&("left"===i.value?l<o.value:"right"===i.value?l>document.documentElement.clientWidth-o.value:"top"===i.value?c<o.value:"bottom"===i.value?c>document.documentElement.clientHeight-o.value:B());(m||w||t.value&&a.value)&&(v=!0,f=[l,c],g.value=h(u.value?l:c,t.value),p.value=y(u.value?l:c),r(e),s(e))}function b(e){const t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY;if(v){if(!e.cancelable)return void(v=!1);const l=Math.abs(t-f[0]),o=Math.abs(a-f[1]),n=u.value?l>o&&l>3:o>l&&o>3;n?(m.value=!0,v=!1):(u.value?o:l)>3&&(v=!1)}if(!m.value)return;e.preventDefault(),s(e);const l=y(u.value?t:a,!1);p.value=Math.max(0,Math.min(1,l)),l>1?g.value=h(u.value?t:a,!0):l<0&&(g.value=h(u.value?t:a,!1))}function _(e){if(v=!1,!m.value)return;s(e),m.value=!1;const a=c(e.changedTouches[0].identifier),l=Math.abs(a.x),o=Math.abs(a.y),n=u.value?l>o&&l>400:o>l&&o>3;t.value=n?a.direction===({left:"right",right:"left",top:"down",bottom:"up"}[i.value]||B()):p.value>.5}const x=(0,l.Fl)((()=>m.value?{transform:"left"===i.value?`translateX(calc(-100% + ${p.value*o.value}px))`:"right"===i.value?`translateX(calc(100% - ${p.value*o.value}px))`:"top"===i.value?`translateY(calc(-100% + ${p.value*o.value}px))`:"bottom"===i.value?`translateY(calc(100% - ${p.value*o.value}px))`:B(),transition:"none"}:void 0));return{isDragging:m,dragProgress:p,dragStyles:x}}function B(){throw new Error}var T=a(1629),Z=a(2718),U=a(2370),z=a(6107),N=a(8157),j=a(2465),X=a(8717),G=a(4231),q=a(6183),J=a(5975),O=a(5935),K=a(4770),Q=a(2879);const ee=["start","end","left","right","top","bottom"],te=(0,v.U)({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ee.includes(e)},sticky:Boolean,...(0,Z.m)(),...(0,r.l)(),...(0,j.c)(),...w(),...(0,G.I)(),...(0,M.Q)({tag:"nav"}),...(0,O.x$)()},"VNavigationDrawer"),ae=(0,S.ev)()({name:"VNavigationDrawer",props:te(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,t){let{attrs:a,emit:n,slots:i}=t;const{isRtl:u}=(0,T.Vw)(),{themeClasses:s}=(0,O.ER)(e),{borderClasses:r}=(0,Z.P)(e),{backgroundColorClasses:c,backgroundColorStyles:v}=(0,U.Y5)((0,d.Vh)(e,"color")),{elevationClasses:m}=(0,j.Y)(e),{mobile:p}=(0,N.AW)(),{roundedClasses:g}=(0,G.b)(e),f=(0,q.tv)(),h=(0,X.z)(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:y}=(0,L.u)(),{scopeId:w}=(0,J.a)(),b=(0,d.iH)(),x=(0,d.XI)(!1),k=(0,l.Fl)((()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),S=(0,l.Fl)((()=>(0,Q.Wc)(e.location,u.value))),I=(0,l.Fl)((()=>!e.permanent&&(p.value||e.temporary))),W=(0,l.Fl)((()=>e.sticky&&!I.value&&"bottom"!==S.value));(0,K.U)((()=>e.expandOnHover&&null!=e.rail),(()=>{(0,l.YP)(x,(e=>n("update:rail",!e)))})),(0,K.U)((()=>!e.disableResizeWatcher),(()=>{(0,l.YP)(I,(t=>!e.permanent&&(0,l.Y3)((()=>h.value=!t))))})),(0,K.U)((()=>!e.disableRouteWatcher&&!!f),(()=>{(0,l.YP)(f.currentRoute,(()=>I.value&&(h.value=!1)))})),(0,l.YP)((()=>e.permanent),(e=>{e&&(h.value=!0)})),(0,l.wF)((()=>{null!=e.modelValue||I.value||(h.value=e.permanent||!p.value)}));const{isDragging:M,dragProgress:E,dragStyles:F}=$({isActive:h,isTemporary:I,width:k,touchless:(0,d.Vh)(e,"touchless"),position:S}),H=(0,l.Fl)((()=>{const t=I.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):k.value;return M.value?t*E.value:t})),{layoutItemStyles:V,layoutItemScrimStyles:A}=_({id:e.name,order:(0,l.Fl)((()=>parseInt(e.order,10))),position:S,layoutSize:H,elementSize:k,active:(0,l.Fl)((()=>h.value||M.value)),disableTransitions:(0,l.Fl)((()=>M.value)),absolute:(0,l.Fl)((()=>e.absolute||W.value&&"string"!==typeof D.value))}),{isStuck:D,stickyStyles:P}=R({rootEl:b,isSticky:W,layoutItemStyles:V}),Y=(0,U.Y5)((0,l.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),B=(0,l.Fl)((()=>({...M.value?{opacity:.2*E.value,transition:"none"}:void 0,...A.value})));function ee(){x.value=!0}function te(){x.value=!1}return(0,z.AF)({VList:{bgColor:"transparent"}}),(0,C.L)((()=>{const t=i.image||e.image;return(0,l.Wm)(l.HY,null,[(0,l.Wm)(e.tag,(0,l.dG)({ref:b,onMouseenter:ee,onMouseleave:te,class:["v-navigation-drawer",`v-navigation-drawer--${S.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":I.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":W.value},s.value,c.value,r.value,m.value,g.value,e.class],style:[v.value,V.value,F.value,y.value,P.value,e.style]},w,a),{default:()=>[t&&(0,l.Wm)("div",{key:"image",class:"v-navigation-drawer__img"},[i.image?i.image?.({image:e.image}):(0,l.Wm)("img",{src:e.image,alt:""},null)]),i.prepend&&(0,l.Wm)("div",{class:"v-navigation-drawer__prepend"},[i.prepend?.()]),(0,l.Wm)("div",{class:"v-navigation-drawer__content"},[i.default?.()]),i.append&&(0,l.Wm)("div",{class:"v-navigation-drawer__append"},[i.append?.()])]}),(0,l.Wm)(o.uT,{name:"fade-transition"},{default:()=>[I.value&&(M.value||h.value)&&!!e.scrim&&(0,l.Wm)("div",(0,l.dG)({class:["v-navigation-drawer__scrim",Y.backgroundColorClasses.value],style:[B.value,Y.backgroundColorStyles.value],onClick:()=>h.value=!1},w),null)]})])})),{isStuck:D}}}),le={class:"p-2 py-8 flex items-center justify-center"},oe=["src"],ne={class:"overflow-y-auto section_main p-8"},ie={key:0,class:"fixed bottom-2 right-3"},ue={key:0,class:"fixed bottom-3 right-3 max-w-[25rem] min-w-[23rem] bg-white text-xs rounded-md overflow-hidden shadow-lg"},se={class:"max-h-[15rem] min-h-[13rem] overflow-y-auto container_scroll"},re={class:"w-full text-blue-500 pt-2 flex gap-1 items-center"},ce=(0,l._)("div",{class:"flex items-center pl-2"},[(0,l._)("div",{class:"rounded-full w-2 h-2 bg-blue-500 mr-2"})],-1),de={class:"flex items-center"},ve={class:"flex-1 pb-2 px-3 pl-1"};function me(e,t,a,r,c,d){const v=(0,l.up)("SidebarLayout"),m=(0,l.up)("HeaderLayout"),p=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(u._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(ae,{modelValue:r.drawer,"onUpdate:modelValue":t[0]||(t[0]=e=>r.drawer=e),rail:r.rail,permanent:"",onClick:t[1]||(t[1]=e=>r.rail=!1),color:"indigo-darken-1",class:"border-2 border-sky-500"},{default:(0,l.w5)((()=>[(0,l._)("div",le,[(0,l._)("img",{src:d.selectedLogo,class:"w-[6rem] bg-white p-2 rounded-md"},null,8,oe)]),(0,l.Wm)(v,{itemsNavegation:r.filteredItems,rail:r.rail},null,8,["itemsNavegation","rail"])])),_:1},8,["modelValue","rail"]),(0,l.Wm)(F,{class:"h-screen bg-slate-100 block"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{avatarPath:c.avatarPath,onActionRail:t[2]||(t[2]=e=>r.rail=!r.rail)},null,8,["avatarPath"]),(0,l._)("section",ne,[(0,l.Wm)(p)])])),_:1})])),_:1})])),_:1}),"All"===r.codcliente?((0,l.wg)(),(0,l.iD)("div",ie,[(0,l.Wm)(i.T,{icon:"",onClick:t[3]||(t[3]=e=>r.showContainerLogs=!r.showContainerLogs),color:"blue"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.t,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-code-greater-than-or-equal")])),_:1})])),_:1})])):(0,l.kq)("",!0),(0,l.Wm)(o.uT,{name:"slide-fade"},{default:(0,l.w5)((()=>[r.showContainerLogs?((0,l.wg)(),(0,l.iD)("div",ue,[(0,l._)("div",{class:"flex justify-center bg-blue-500 text-white cursor-pointer",onClick:t[4]||(t[4]=e=>r.showContainerLogs=!r.showContainerLogs)},[(0,l.Wm)(s.t,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-chevron-down")])),_:1})]),(0,l._)("div",se,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.itemsLogs,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"item_event border-b border-gray-300",key:t},[(0,l._)("div",re,[ce,(0,l._)("div",null,(0,n.zw)(e.Fecha)+" "+(0,n.zw)(e.Hora),1)]),(0,l._)("div",de,[(0,l._)("div",ve,(0,n.zw)(e),1)])])))),128))])])):(0,l.kq)("",!0)])),_:1})],64)}var pe=a(9398),ge=a.p+"img/iconuser_hombre.66103c98.png",fe=a.p+"img/duragas_logo.393600f6.png",he=a.p+"img/signia_logo.a0657a76.png",ye=a(5127),we=a(6052),be=a(8777);const _e={class:"w-full bg-white flex justify-between items-center px-3 container-header shadow-sm"},xe={class:"flex items-center text-start text-xs"};function ke(e,t,a,n,u,s){const r=(0,l.up)("MenuAsPopover");return(0,l.wg)(),(0,l.iD)("div",_e,[(0,l.Wm)(i.T,{variant:"text",icon:"mdi-menu",color:"blue-grey-lighten-1",class:"cursor-pointer btn-action-sidebar",onClick:(0,o.iM)(n.onActionRail,["stop"])},null,8,["onClick"]),(0,l._)("div",xe,[(0,l.Wm)(we.i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(be.l,{class:"text-start text-xs item-personalizado","prepend-avatar":a.avatarPath,title:`Hola, ${u.username}`,subtitle:u.rol},null,8,["prepend-avatar","title","subtitle"])])),_:1}),(0,l.Wm)(r)])])}var Se=a(4239),Ce=a(4075),Ie=a(4193);const We=e=>((0,l.dD)("data-v-42a02404"),e=e(),(0,l.Cn)(),e),Le={class:"text-center"},Me=We((()=>(0,l._)("div",{class:"cursor-pointer transition hover:text-indigo-400 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm py-2"},[(0,l._)("i",{class:"fa-solid fa-user"}),(0,l._)("span",null," Perfil")],-1))),Ee=We((()=>(0,l._)("div",{class:"cursor-pointer transition hover:text-indigo-400 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm py-2"},[(0,l._)("i",{class:"fa-solid fa-gear"}),(0,l._)("span",null," Configuración")],-1))),Fe=We((()=>(0,l._)("span",null," Cerrar sesión",-1))),Re=We((()=>(0,l._)("i",{class:"fa-solid fa-right-from-bracket"},null,-1))),He=[Fe,Re];function Ve(e,t,a,o,n,s){return(0,l.wg)(),(0,l.iD)("div",Le,[(0,l.Wm)(Ie.T,{modelValue:e.menu,"onUpdate:modelValue":t[1]||(t[1]=t=>e.menu=t),"close-on-content-click":!1,location:"end","onClick:outside":o.rotateIcon},{activator:(0,l.w5)((({props:e})=>[(0,l.Wm)(i.T,(0,l.dG)({icon:"mdi-chevron-down",size:"small",variant:"text"},e,{class:{rotated:o.isRotated},onClick:o.rotateIcon}),null,16,["class","onClick"])])),default:(0,l.w5)((()=>[(0,l.Wm)(u._,{"min-width":"200"},{default:(0,l.w5)((()=>[(0,l.Wm)(Ce.J),(0,l.Wm)(we.i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(be.l,{class:"px-5"},{default:(0,l.w5)((()=>[Me,Ee])),_:1}),(0,l.Wm)(be.l,{class:"px-3"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:"py-2 px-5 bg-indigo-400 hover:bg-indigo-500 cursor-pointer transition ease-in duration-100 flex justify-between rounded-lg items-center text-white text-sm",onClick:t[0]||(t[0]=(...e)=>o.logout&&o.logout(...e))},He)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])])}var Ae={data:()=>({fav:!0,menu:!1,message:!1,hints:!0}),setup(){const e=(0,d.iH)(!1),t=()=>{e.value=!e.value},a=()=>{localStorage.clear(),location.reload()};return{logout:a,rotateIcon:t,isRotated:e}}},De=a(89);const Pe=(0,De.Z)(Ae,[["render",Ve],["__scopeId","data-v-42a02404"]]);var Ye=Pe,$e={components:{MenuAsPopover:Ye},props:{avatarPath:String},data(){return{username:Se.Z.state.username,codcliente:Se.Z.state.codclienteAdmin,rol:Se.Z.state.rol}},emits:["action-rail"],setup(e,{emit:t}){const a=()=>{t("action-rail")};return{onActionRail:a}}};const Be=(0,De.Z)($e,[["render",ke],["__scopeId","data-v-5328ecc5"]]);var Te=Be,Ze=a(917);function Ue(e,t,a,o,i,u){const s=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(we.i,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.itemsNavegation,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.value},[0==e.children.length?((0,l.wg)(),(0,l.j4)(s,{key:0,to:e.to},{default:(0,l.w5)((()=>[(0,l.Wm)(be.l,{"prepend-icon":e.icon,title:e.title,value:e.value},null,8,["prepend-icon","title","value"])])),_:2},1032,["to"])):((0,l.wg)(),(0,l.j4)(Ze.N,{key:1,value:e.value,fluid:""},{activator:(0,l.w5)((({props:t})=>[(0,l.Wm)(be.l,(0,l.dG)(t,{"prepend-icon":e.icon,title:e.title,"active-class":"bg-indigo-lighten-1"}),null,16,["prepend-icon","title"])])),default:(0,l.w5)((()=>[(0,l._)("div",{class:(0,n.C_)([{"my-2 border-l-4 border-indigo-500 ml-3":!a.rail,"my-2 border-l-4 border-indigo-500":a.rail},""])},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.children,(e=>((0,l.wg)(),(0,l.j4)(s,{to:e.to,key:e.value,class:"rounded-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(be.l,{"prepend-icon":e.icon,title:e.title,value:e.value,"active-class":"bg-indigo-darken-1 rounded-md"},null,8,["prepend-icon","title","value"])])),_:2},1032,["to"])))),128))],2)])),_:2},1032,["value"]))])))),128))])),_:1})}var ze={props:{rail:Boolean,itemsNavegation:Array}};const Ne=(0,De.Z)(ze,[["render",Ue]]);var je=Ne,Xe={components:{HeaderLayout:Te,SidebarLayout:je},data(){return{avatarPath:ge,logoBusinessDuragas:fe,logoBusinessSignia:he,logoBusinessSysnet:ye}},computed:{selectedLogo(){return"Administrador"===this.role&&"All"===this.codcliente?this.logoBusinessSysnet:"SI001"===this.codcliente?this.logoBusinessSignia:"DU001"===this.codcliente?this.logoBusinessDuragas:this.logoBusinessSysnet}},setup(){const e=(0,d.iH)(!0),t=(0,d.iH)(!0),a=(0,d.iH)([{icon:"mdi-home",title:"Dashboard",value:"Dashboard",to:"home",children:[]},{icon:"mdi-bell",title:"Eventos",value:"Eventos",to:"",children:[{icon:"mdi-format-list-bulleted",title:"Pendientes listados",value:"Pendientes listados",to:"pendienteslistados",children:[]},{icon:"mdi-image",title:"Pendientes iconos",value:"Pendientes iconos",to:"pendientesiconos",children:[]},{icon:"mdi-bell-check",title:"Confirmados",value:"Confirmados",to:"confirmados",children:[]},{icon:"mdi-bell-remove",title:"Descartados",value:"Descartados",to:"descartados",children:[]}]},{icon:"mdi-file-table",title:"Reportes",value:"Reportes",to:"reportes",children:[]},{icon:"mdi-cog",title:"Mantenimientos",value:"Mantenimientos",to:"",children:[{icon:"mdi-account",title:"Usuarios",value:"Usuarios",to:"usuarios",children:[]},{icon:"mdi-bell-plus-outline",title:"Tipo eventos",value:"Tipo eventos",to:"tipoeventos",children:[]},{icon:"mdi-forum",title:"Respuestas predefinidas",value:"Respuestas predefinidas",to:"respuestaspredefinidas",children:[]},{icon:"mdi-account-clock",title:"Turnos",value:"Turnos",to:"turnos",children:[]},{icon:"mdi-form-select",title:"Procedimientos",value:"Procedimientos",to:"procedimientos",children:[]},{icon:"mdi-truck",title:"Vehiculos",value:"Vehiculos",to:"vehiculos",children:[]}]},{icon:"mdi-cog",title:"Mantenimientos",value:"MantenimientosCuentas",to:"",children:[{icon:"mdi-account",title:"Clientes",value:"Clientes",to:"clientes",children:[]},{icon:"mdi-bell-plus-outline",title:"Tipo eventos",value:"Tipo eventos",to:"tiposeventos_cuentas",children:[]},{icon:"mdi-truck",title:"Vehiculos",value:"Vehiculos",to:"vehiculos_cuentas",children:[]}]},{icon:"mdi-cog",title:"Mantenimientos",value:"MantenimientosRoot",to:"",children:[{icon:"mdi-account",title:"Cuentas",value:"Cuentas",to:"cuentas",children:[]}]},{icon:"mdi-group",title:"Grupos",value:"Grupos",to:"",children:[{icon:"mdi-account-multiple",title:"Usuarios",value:"GUsuarios",to:"grupousuarios",children:[]},{icon:"mdi-truck",title:"Unidades",value:"GUnidades",to:"grupounidades",children:[]},{icon:"mdi-bell-alert",title:"Eventos",value:"GEventos",to:"grupoeventos",children:[]}]},{icon:"mdi-account-lock",title:"Reglas",value:"Reglas",to:"reglas",children:[]}]),o=(0,d.iH)(""),n=(0,d.iH)(""),i=(0,d.iH)([]),u=(0,d.iH)(!1);(0,l.YP)(u,(e=>{if(e){const e=setInterval(s,1e4);s(),(0,l.Jd)((()=>{clearInterval(e)}))}}));const s=async()=>{const e={cod_cuenta:Se.Z.state.codcuenta,cod_cliente:Se.Z.state.codclienteAdmin,rows:10};(0,pe.lA)(e).then((e=>{const t=e.data.data;i.value=t.map((e=>{const{ID:t,Cod_Cliente:a,Cod_Cuenta:l,Geocerca:o,Grupo:n,Fecha_Ultima_Accion:i,Link_Imagen:u,List_Comentarios:s,Link_Video:r,...c}=e;return c}))}))},r=(0,l.Fl)((()=>"Administrador"===Se.Z.state.rol?"All"==Se.Z.state.codclienteAdmin?"0000"===Se.Z.state.codcuenta?a.value.filter((e=>"Dashboard"===e.value||"Eventos"===e.value||"MantenimientosRoot"===e.value)):a.value.filter((e=>"Dashboard"===e.value||"Eventos"===e.value||"MantenimientosCuentas"===e.value)):a.value.filter((e=>"MantenimientosCuentas"!=e.value&&"MantenimientosRoot"!=e.value)):"Operador"===Se.Z.state.rol?a.value.filter((e=>"Eventos"===e.value||"Reportes"===e.value)):"Supervisor"===Se.Z.state.rol?a.value.filter((e=>"Dashboard"===e.value||"Eventos"===e.value||"Reportes"===e.value)):[])),c=()=>{t.value=window.innerWidth<=1e3};return(0,l.bv)((async()=>{o.value=Se.Z.state.rol,n.value=Se.Z.state.codclienteAdmin,"All"==n.value&&"0000"!=Se.Z.state.codcuenta&&await s(),c(),window.addEventListener("resize",c)})),{showContainerLogs:u,filteredItems:r,ItemsNavegation:a,codcliente:n,itemsLogs:i,drawer:e,rail:t,role:o}}};const Ge=(0,De.Z)(Xe,[["render",me]]);var qe=Ge},5127:function(e,t,a){e.exports=a.p+"img/logo_sysnet.27bcaa54.png"}}]);
//# sourceMappingURL=906.ef673e25.js.map