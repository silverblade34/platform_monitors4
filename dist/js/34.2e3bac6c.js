"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[34],{3917:function(e,t,l){l.r(t),l.d(t,{default:function(){return Pe}});var a=l(3396),o=l(5039),n=l(9166),i=(l(560),l(3712)),r=l(4870),u=l(3766),s=l(7514),c=l(131);const d=Symbol.for("vuetify:layout"),v=Symbol.for("vuetify:layout-item"),m=1e3,p=(0,u.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),g=(0,u.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function f(){const e=(0,a.f3)(d);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function h(e){const t=(0,a.f3)(d);if(!t)throw new Error("[Vuetify] Could not find injected layout");const l=e.id??`layout-item-${(0,s.sq)()}`,o=(0,s.FN)("useLayoutItem");(0,a.JJ)(v,{id:l});const n=(0,r.XI)(!1);(0,a.se)((()=>n.value=!0)),(0,a.dl)((()=>n.value=!1));const{layoutItemStyles:i,layoutItemScrimStyles:u}=t.register(o,{...e,active:(0,a.Fl)((()=>!n.value&&e.active.value)),id:l});return(0,a.Jd)((()=>t.unregister(l))),{layoutItemStyles:i,layoutRect:t.layoutRect,layoutItemScrimStyles:u}}const y=(e,t,l,a)=>{let o={top:0,left:0,right:0,bottom:0};const n=[{id:"",layer:{...o}}];for(const i of e){const e=t.get(i),r=l.get(i),u=a.get(i);if(!e||!r||!u)continue;const s={...o,[e.value]:parseInt(o[e.value],10)+(u.value?parseInt(r.value,10):0)};n.push({id:i,layer:s}),o=s}return n};function b(e){const t=(0,a.f3)(d,null),l=(0,a.Fl)((()=>t?t.rootZIndex.value-100:m)),o=(0,r.iH)([]),n=(0,r.qj)(new Map),u=(0,r.qj)(new Map),p=(0,r.qj)(new Map),g=(0,r.qj)(new Map),f=(0,r.qj)(new Map),{resizeRef:h,contentRect:b}=(0,i.y)(),w=(0,a.Fl)((()=>{const t=new Map,l=e.overlaps??[];for(const e of l.filter((e=>e.includes(":")))){const[l,a]=e.split(":");if(!o.value.includes(l)||!o.value.includes(a))continue;const i=n.get(l),r=n.get(a),s=u.get(l),c=u.get(a);i&&r&&s&&c&&(t.set(a,{position:i.value,amount:parseInt(s.value,10)}),t.set(l,{position:r.value,amount:-parseInt(c.value,10)}))}return t})),x=(0,a.Fl)((()=>{const e=[...new Set([...p.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const l of e){const e=o.value.filter((e=>p.get(e)?.value===l));t.push(...e)}return y(t,n,u,g)})),S=(0,a.Fl)((()=>!Array.from(f.values()).some((e=>e.value)))),k=(0,a.Fl)((()=>x.value[x.value.length-1].layer)),C=(0,a.Fl)((()=>({"--v-layout-left":(0,c.kb)(k.value.left),"--v-layout-right":(0,c.kb)(k.value.right),"--v-layout-top":(0,c.kb)(k.value.top),"--v-layout-bottom":(0,c.kb)(k.value.bottom),...S.value?void 0:{transition:"none"}}))),_=(0,a.Fl)((()=>x.value.slice(1).map(((e,t)=>{let{id:l}=e;const{layer:a}=x.value[t],o=u.get(l),i=n.get(l);return{id:l,...a,size:Number(o.value),position:i.value}})))),I=e=>_.value.find((t=>t.id===e)),W=(0,s.FN)("createLayout"),F=(0,r.XI)(!1);(0,a.bv)((()=>{F.value=!0})),(0,a.JJ)(d,{register:(e,t)=>{let{id:i,order:r,position:s,layoutSize:d,elementSize:h,active:y,disableTransitions:b,absolute:k}=t;p.set(i,r),n.set(i,s),u.set(i,d),g.set(i,y),b&&f.set(i,b);const C=(0,c.bY)(v,W?.vnode),I=C.indexOf(e);I>-1?o.value.splice(I,0,i):o.value.push(i);const E=(0,a.Fl)((()=>_.value.findIndex((e=>e.id===i)))),M=(0,a.Fl)((()=>l.value+2*x.value.length-2*E.value)),R=(0,a.Fl)((()=>{const e="left"===s.value||"right"===s.value,t="right"===s.value,a="bottom"===s.value,o={[s.value]:0,zIndex:M.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-110)*(t||a?-1:1)}%)`,position:k.value||l.value!==m?"absolute":"fixed",...S.value?void 0:{transition:"none"}};if(!F.value)return o;const n=_.value[E.value];if(!n)throw new Error(`[Vuetify] Could not find layout item "${i}"`);const r=w.value.get(i);return r&&(n[r.position]+=r.amount),{...o,height:e?`calc(100% - ${n.top}px - ${n.bottom}px)`:h.value?`${h.value}px`:void 0,left:t?void 0:`${n.left}px`,right:t?`${n.right}px`:void 0,top:"bottom"!==s.value?`${n.top}px`:void 0,bottom:"top"!==s.value?`${n.bottom}px`:void 0,width:e?h.value?`${h.value}px`:void 0:`calc(100% - ${n.left}px - ${n.right}px)`}})),L=(0,a.Fl)((()=>({zIndex:M.value-1})));return{layoutItemStyles:R,layoutItemScrimStyles:L,zIndex:M}},unregister:e=>{p.delete(e),n.delete(e),u.delete(e),g.delete(e),f.delete(e),o.value=o.value.filter((t=>t!==e))},mainRect:k,mainStyles:C,getLayoutItem:I,items:_,layoutRect:b,rootZIndex:l});const E=(0,a.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),M=(0,a.Fl)((()=>({zIndex:t?l.value:void 0,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:E,layoutStyles:M,getLayoutItem:I,items:_,layoutRect:b,layoutRef:h}}var w=l(1107),x=l(9888);const S=(0,u.U)({...(0,n.l)(),...p()},"VLayout"),k=(0,w.ev)()({name:"VLayout",props:S(),setup(e,t){let{slots:l}=t;const{layoutClasses:o,layoutStyles:n,getLayoutItem:i,items:r,layoutRef:u}=b(e);return(0,x.L)((()=>(0,a.Wm)("div",{ref:u,class:[o.value,e.class],style:[n.value,e.style]},[l.default?.()]))),{getLayoutItem:i,items:r}}});var C=l(1372),_=l(1138);const I=(0,u.U)({scrollable:Boolean,...(0,n.l)(),...(0,_.Q)({tag:"main"})},"VMain"),W=(0,w.ev)()({name:"VMain",props:I(),setup(e,t){let{slots:l}=t;const{mainStyles:o}=f(),{ssrBootStyles:n}=(0,C.u)();return(0,x.L)((()=>(0,a.Wm)(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,n.value,e.style]},{default:()=>[e.scrollable?(0,a.Wm)("div",{class:"v-main__scroller"},[l.default?.()]):l.default?.()]}))),{}}});function F(e){let{rootEl:t,isSticky:l,layoutItemStyles:o}=e;const n=(0,r.XI)(!1),i=(0,r.XI)(0),u=(0,a.Fl)((()=>{const e="boolean"===typeof n.value?"top":n.value;return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[e]:(0,c.kb)(i.value)}:{top:o.value.top}]}));(0,a.bv)((()=>{(0,a.YP)(l,(e=>{e?window.addEventListener("scroll",d,{passive:!0}):window.removeEventListener("scroll",d)}),{immediate:!0})})),(0,a.Jd)((()=>{window.removeEventListener("scroll",d)}));let s=0;function d(){const e=s>window.scrollY?"up":"down",l=t.value.getBoundingClientRect(),a=parseFloat(o.value.top??0),r=window.scrollY-Math.max(0,i.value-a),u=l.height+Math.max(i.value,a)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(t.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-a?(n.value="top",i.value=a):"up"===e&&"bottom"===n.value||"down"===e&&"top"===n.value?(i.value=window.scrollY+l.top-c,n.value=!0):"down"===e&&u<=0?(i.value=0,n.value="bottom"):"up"===e&&r<=0&&(c?"top"!==n.value&&(i.value=-r+c+a,n.value="top"):(i.value=l.top+r,n.value="top")),s=window.scrollY}return{isStuck:n,stickyStyles:u}}const E=100,M=20;function R(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function L(e){if(e.length<2)return 0;if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let l=e.length-1;l>0;l--){if(e[l].t===e[l-1].t)continue;const a=R(t),o=(e[l].d-e[l-1].d)/(e[l].t-e[l-1].t);t+=(o-a)*Math.abs(o),l===e.length-1&&(t*=.5)}return 1e3*R(t)}function V(){const e={};function t(t){Array.from(t.changedTouches).forEach((l=>{const a=e[l.identifier]??(e[l.identifier]=new c.PU(M));a.push([t.timeStamp,l])}))}function l(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))}function a(t){const l=e[t]?.values().reverse();if(!l)throw new Error(`No samples for touch id ${t}`);const a=l[0],o=[],n=[];for(const e of l){if(a[0]-e[0]>E)break;o.push({t:e[0],d:e[1].clientX}),n.push({t:e[0],d:e[1].clientY})}return{x:L(o),y:L(n),get direction(){const{x:e,y:t}=this,[l,a]=[Math.abs(e),Math.abs(t)];return l>a&&e>=0?"right":l>a&&e<=0?"left":a>l&&t>=0?"down":a>l&&t<=0?"up":z()}}}return{addMovement:t,endTouch:l,getVelocity:a}}function z(){throw new Error}function B(e){let{isActive:t,isTemporary:l,width:o,touchless:n,position:i}=e;(0,a.bv)((()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})})),(0,a.Jd)((()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",x)}));const u=(0,a.Fl)((()=>["left","right"].includes(i.value))),{addMovement:s,endTouch:c,getVelocity:d}=V();let v=!1;const m=(0,r.XI)(!1),p=(0,r.XI)(0),g=(0,r.XI)(0);let f;function h(e,t){return("left"===i.value?e:"right"===i.value?document.documentElement.clientWidth-e:"top"===i.value?e:"bottom"===i.value?document.documentElement.clientHeight-e:H())-(t?o.value:0)}function y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const l="left"===i.value?(e-g.value)/o.value:"right"===i.value?(document.documentElement.clientWidth-e-g.value)/o.value:"top"===i.value?(e-g.value)/o.value:"bottom"===i.value?(document.documentElement.clientHeight-e-g.value)/o.value:H();return t?Math.max(0,Math.min(1,l)):l}function b(e){if(n.value)return;const a=e.changedTouches[0].clientX,r=e.changedTouches[0].clientY,d=25,m="left"===i.value?a<d:"right"===i.value?a>document.documentElement.clientWidth-d:"top"===i.value?r<d:"bottom"===i.value?r>document.documentElement.clientHeight-d:H(),b=t.value&&("left"===i.value?a<o.value:"right"===i.value?a>document.documentElement.clientWidth-o.value:"top"===i.value?r<o.value:"bottom"===i.value?r>document.documentElement.clientHeight-o.value:H());(m||b||t.value&&l.value)&&(v=!0,f=[a,r],g.value=h(u.value?a:r,t.value),p.value=y(u.value?a:r),c(e),s(e))}function w(e){const t=e.changedTouches[0].clientX,l=e.changedTouches[0].clientY;if(v){if(!e.cancelable)return void(v=!1);const a=Math.abs(t-f[0]),o=Math.abs(l-f[1]),n=u.value?a>o&&a>3:o>a&&o>3;n?(m.value=!0,v=!1):(u.value?o:a)>3&&(v=!1)}if(!m.value)return;e.preventDefault(),s(e);const a=y(u.value?t:l,!1);p.value=Math.max(0,Math.min(1,a)),a>1?g.value=h(u.value?t:l,!0):a<0&&(g.value=h(u.value?t:l,!1))}function x(e){if(v=!1,!m.value)return;s(e),m.value=!1;const l=d(e.changedTouches[0].identifier),a=Math.abs(l.x),o=Math.abs(l.y),n=u.value?a>o&&a>400:o>a&&o>3;t.value=n?l.direction===({left:"right",right:"left",top:"down",bottom:"up"}[i.value]||H()):p.value>.5}const S=(0,a.Fl)((()=>m.value?{transform:"left"===i.value?`translateX(calc(-100% + ${p.value*o.value}px))`:"right"===i.value?`translateX(calc(100% - ${p.value*o.value}px))`:"top"===i.value?`translateY(calc(-100% + ${p.value*o.value}px))`:"bottom"===i.value?`translateY(calc(100% - ${p.value*o.value}px))`:H(),transition:"none"}:void 0));return{isDragging:m,dragProgress:p,dragStyles:S}}function H(){throw new Error}var Y=l(1629),$=l(2718),A=l(2370),P=l(6107),T=l(8157),U=l(2465),N=l(8717),D=l(4231),j=l(6183),Z=l(5975),X=l(5935),q=l(4770),G=l(9242),J=l(2879);const O=["start","end","left","right","top","bottom"],Q=(0,u.U)({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>O.includes(e)},sticky:Boolean,...(0,$.m)(),...(0,n.l)(),...(0,U.c)(),...g(),...(0,D.I)(),...(0,_.Q)({tag:"nav"}),...(0,X.x$)()},"VNavigationDrawer"),K=(0,w.ev)()({name:"VNavigationDrawer",props:Q(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,t){let{attrs:l,emit:o,slots:n}=t;const{isRtl:i}=(0,Y.Vw)(),{themeClasses:u}=(0,X.ER)(e),{borderClasses:s}=(0,$.P)(e),{backgroundColorClasses:c,backgroundColorStyles:d}=(0,A.Y5)((0,r.Vh)(e,"color")),{elevationClasses:v}=(0,U.Y)(e),{mobile:m}=(0,T.AW)(),{roundedClasses:p}=(0,D.b)(e),g=(0,j.tv)(),f=(0,N.z)(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:y}=(0,C.u)(),{scopeId:b}=(0,Z.a)(),w=(0,r.iH)(),S=(0,r.XI)(!1),k=(0,a.Fl)((()=>e.rail&&e.expandOnHover&&S.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),_=(0,a.Fl)((()=>(0,J.Wc)(e.location,i.value))),I=(0,a.Fl)((()=>!e.permanent&&(m.value||e.temporary))),W=(0,a.Fl)((()=>e.sticky&&!I.value&&"bottom"!==_.value));(0,q.U)((()=>e.expandOnHover&&null!=e.rail),(()=>{(0,a.YP)(S,(e=>o("update:rail",!e)))})),(0,q.U)((()=>!e.disableResizeWatcher),(()=>{(0,a.YP)(I,(t=>!e.permanent&&(0,a.Y3)((()=>f.value=!t))))})),(0,q.U)((()=>!e.disableRouteWatcher&&!!g),(()=>{(0,a.YP)(g.currentRoute,(()=>I.value&&(f.value=!1)))})),(0,a.YP)((()=>e.permanent),(e=>{e&&(f.value=!0)})),(0,a.wF)((()=>{null!=e.modelValue||I.value||(f.value=e.permanent||!m.value)}));const{isDragging:E,dragProgress:M,dragStyles:R}=B({isActive:f,isTemporary:I,width:k,touchless:(0,r.Vh)(e,"touchless"),position:_}),L=(0,a.Fl)((()=>{const t=I.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):k.value;return E.value?t*M.value:t})),{layoutItemStyles:V,layoutItemScrimStyles:z}=h({id:e.name,order:(0,a.Fl)((()=>parseInt(e.order,10))),position:_,layoutSize:L,elementSize:k,active:(0,a.Fl)((()=>f.value||E.value)),disableTransitions:(0,a.Fl)((()=>E.value)),absolute:(0,a.Fl)((()=>e.absolute||W.value&&"string"!==typeof H.value))}),{isStuck:H,stickyStyles:O}=F({rootEl:w,isSticky:W,layoutItemStyles:V}),Q=(0,A.Y5)((0,a.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),K=(0,a.Fl)((()=>({...E.value?{opacity:.2*M.value,transition:"none"}:void 0,...z.value})));function ee(){S.value=!0}function te(){S.value=!1}return(0,P.AF)({VList:{bgColor:"transparent"}}),(0,x.L)((()=>{const t=n.image||e.image;return(0,a.Wm)(a.HY,null,[(0,a.Wm)(e.tag,(0,a.dG)({ref:w,onMouseenter:ee,onMouseleave:te,class:["v-navigation-drawer",`v-navigation-drawer--${_.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":S.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":I.value,"v-navigation-drawer--active":f.value,"v-navigation-drawer--sticky":W.value},u.value,c.value,s.value,v.value,p.value,e.class],style:[d.value,V.value,R.value,y.value,O.value,e.style]},b,l),{default:()=>[t&&(0,a.Wm)("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?n.image?.({image:e.image}):(0,a.Wm)("img",{src:e.image,alt:""},null)]),n.prepend&&(0,a.Wm)("div",{class:"v-navigation-drawer__prepend"},[n.prepend?.()]),(0,a.Wm)("div",{class:"v-navigation-drawer__content"},[n.default?.()]),n.append&&(0,a.Wm)("div",{class:"v-navigation-drawer__append"},[n.append?.()])]}),(0,a.Wm)(G.uT,{name:"fade-transition"},{default:()=>[I.value&&(E.value||f.value)&&!!e.scrim&&(0,a.Wm)("div",(0,a.dG)({class:["v-navigation-drawer__scrim",Q.backgroundColorClasses.value],style:[K.value,Q.backgroundColorStyles.value],onClick:()=>f.value=!1},b),null)]})])})),{isStuck:H}}}),ee={class:"p-2 py-8 flex items-center justify-center"},te=["src"],le={class:"overflow-y-auto section_main p-8"};function ae(e,t,l,n,i,r){const u=(0,a.up)("SidebarLayout"),s=(0,a.up)("HeaderLayout"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(o._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[(0,a.Wm)(K,{modelValue:n.drawer,"onUpdate:modelValue":t[0]||(t[0]=e=>n.drawer=e),rail:n.rail,permanent:"",onClick:t[1]||(t[1]=e=>n.rail=!1),color:"indigo-darken-1",class:"border-2 border-sky-500"},{default:(0,a.w5)((()=>[(0,a._)("div",ee,[(0,a._)("img",{src:r.selectedLogo,class:"w-[6rem] bg-white p-2 rounded-md"},null,8,te)]),(0,a.Wm)(u,{itemsNavegation:n.filteredItems,rail:n.rail},null,8,["itemsNavegation","rail"])])),_:1},8,["modelValue","rail"]),(0,a.Wm)(W,{class:"h-screen bg-slate-100 block"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{avatarPath:i.avatarPath,onActionRail:t[2]||(t[2]=e=>n.rail=!n.rail)},null,8,["avatarPath"]),(0,a._)("section",le,[(0,a.Wm)(c)])])),_:1})])),_:1})])),_:1})}var oe=l.p+"img/iconuser_hombre.66103c98.png",ne=l.p+"img/duragas_logo.393600f6.png",ie=l.p+"img/signia_logo.a0657a76.png",re=l(5127),ue=l(7312),se=l(6052),ce=l(8777);const de={class:"w-full bg-white flex justify-between items-center px-3 container-header shadow-sm"},ve={class:"flex items-center text-start text-xs"};function me(e,t,l,o,n,i){const r=(0,a.up)("MenuAsPopover");return(0,a.wg)(),(0,a.iD)("div",de,[(0,a.Wm)(ue.T,{variant:"text",icon:"mdi-menu",color:"blue-grey-lighten-1",class:"cursor-pointer btn-action-sidebar",onClick:(0,G.iM)(o.onActionRail,["stop"])},null,8,["onClick"]),(0,a._)("div",ve,[(0,a.Wm)(se.i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ce.l,{class:"text-start text-xs item-personalizado","prepend-avatar":l.avatarPath,title:`Hola, ${n.username}`,subtitle:n.rol},null,8,["prepend-avatar","title","subtitle"])])),_:1}),(0,a.Wm)(r)])])}var pe=l(4239),ge=l(4075),fe=l(4193);const he=e=>((0,a.dD)("data-v-42a02404"),e=e(),(0,a.Cn)(),e),ye={class:"text-center"},be=he((()=>(0,a._)("div",{class:"cursor-pointer transition hover:text-indigo-400 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm py-2"},[(0,a._)("i",{class:"fa-solid fa-user"}),(0,a._)("span",null," Perfil")],-1))),we=he((()=>(0,a._)("div",{class:"cursor-pointer transition hover:text-indigo-400 ease-in duration-100 flex gap-2 rounded-lg items-center text-gray-400 text-sm py-2"},[(0,a._)("i",{class:"fa-solid fa-gear"}),(0,a._)("span",null," Configuración")],-1))),xe=he((()=>(0,a._)("span",null," Cerrar sesión",-1))),Se=he((()=>(0,a._)("i",{class:"fa-solid fa-right-from-bracket"},null,-1))),ke=[xe,Se];function Ce(e,t,l,n,i,r){return(0,a.wg)(),(0,a.iD)("div",ye,[(0,a.Wm)(fe.T,{modelValue:e.menu,"onUpdate:modelValue":t[1]||(t[1]=t=>e.menu=t),"close-on-content-click":!1,location:"end","onClick:outside":n.rotateIcon},{activator:(0,a.w5)((({props:e})=>[(0,a.Wm)(ue.T,(0,a.dG)({icon:"mdi-chevron-down",size:"small",variant:"text"},e,{class:{rotated:n.isRotated},onClick:n.rotateIcon}),null,16,["class","onClick"])])),default:(0,a.w5)((()=>[(0,a.Wm)(o._,{"min-width":"200"},{default:(0,a.w5)((()=>[(0,a.Wm)(ge.J),(0,a.Wm)(se.i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ce.l,{class:"px-5"},{default:(0,a.w5)((()=>[be,we])),_:1}),(0,a.Wm)(ce.l,{class:"px-3"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"py-2 px-5 bg-indigo-400 hover:bg-indigo-500 cursor-pointer transition ease-in duration-100 flex justify-between rounded-lg items-center text-white text-sm",onClick:t[0]||(t[0]=(...e)=>n.logout&&n.logout(...e))},ke)])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])])}var _e={data:()=>({fav:!0,menu:!1,message:!1,hints:!0}),setup(){const e=(0,r.iH)(!1),t=()=>{e.value=!e.value},l=()=>{localStorage.clear(),location.reload()};return{logout:l,rotateIcon:t,isRotated:e}}},Ie=l(89);const We=(0,Ie.Z)(_e,[["render",Ce],["__scopeId","data-v-42a02404"]]);var Fe=We,Ee={components:{MenuAsPopover:Fe},props:{avatarPath:String},data(){return{username:pe.Z.state.username,rol:pe.Z.state.rol}},emits:["action-rail"],setup(e,{emit:t}){const l=()=>{t("action-rail")};return{onActionRail:l}}};const Me=(0,Ie.Z)(Ee,[["render",me],["__scopeId","data-v-03f21cf8"]]);var Re=Me,Le=l(7139),Ve=l(917);function ze(e,t,l,o,n,i){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(se.i,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.itemsNavegation,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.value},[0==e.children.length?((0,a.wg)(),(0,a.j4)(r,{key:0,to:e.to},{default:(0,a.w5)((()=>[(0,a.Wm)(ce.l,{"prepend-icon":e.icon,title:e.title,value:e.value},null,8,["prepend-icon","title","value"])])),_:2},1032,["to"])):((0,a.wg)(),(0,a.j4)(Ve.N,{key:1,value:e.value,fluid:""},{activator:(0,a.w5)((({props:t})=>[(0,a.Wm)(ce.l,(0,a.dG)(t,{"prepend-icon":e.icon,title:e.title,"active-class":"bg-indigo-lighten-1"}),null,16,["prepend-icon","title"])])),default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,Le.C_)([{"my-2 border-l-4 border-indigo-500 ml-3":!l.rail,"my-2":l.rail},""])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(e=>((0,a.wg)(),(0,a.j4)(r,{to:e.to,key:e.value,class:"rounded-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(ce.l,{"prepend-icon":e.icon,title:e.title,value:e.value,"active-class":"bg-indigo-darken-1 rounded-md"},null,8,["prepend-icon","title","value"])])),_:2},1032,["to"])))),128))],2)])),_:2},1032,["value"]))])))),128))])),_:1})}var Be={props:{rail:Boolean,itemsNavegation:Array}};const He=(0,Ie.Z)(Be,[["render",ze]]);var Ye=He,$e={components:{HeaderLayout:Re,SidebarLayout:Ye},data(){return{avatarPath:oe,logoBusinessDuragas:ne,logoBusinessSignia:ie,logoBusinessSysnet:re}},computed:{selectedLogo(){return"Administrador"===this.role&&"All"===this.codcliente?this.logoBusinessSysnet:"SI001"===this.codcliente?this.logoBusinessSignia:this.logoBusinessDuragas}},setup(){const e=(0,r.iH)(!0),t=(0,r.iH)(!0),l=(0,r.iH)([{icon:"mdi-home",title:"Dashboard",value:"Dashboard",to:"home",children:[]},{icon:"mdi-bell",title:"Eventos",value:"Eventos",to:"",children:[{icon:"mdi-format-list-bulleted",title:"Pendientes listados",value:"Pendientes listados",to:"pendienteslistados",children:[]},{icon:"mdi-image",title:"Pendientes iconos",value:"Pendientes iconos",to:"pendientesiconos",children:[]},{icon:"mdi-bell-check",title:"Confirmados",value:"Confirmados",to:"confirmados",children:[]},{icon:"mdi-bell-remove",title:"Descartados",value:"Descartados",to:"descartados",children:[]}]},{icon:"mdi-file-table",title:"Reportes",value:"Reportes",to:"reportes",children:[]},{icon:"mdi-cog",title:"Mantenimientos",value:"Mantenimientos",to:"",children:[{icon:"mdi-account",title:"Usuarios",value:"Usuarios",to:"usuarios",children:[]},{icon:"mdi-bell-plus-outline",title:"Tipo eventos",value:"Tipo eventos",to:"tipoeventos",children:[]},{icon:"mdi-forum",title:"Respuestas predefinidas",value:"Respuestas predefinidas",to:"respuestaspredefinidas",children:[]},{icon:"mdi-account-clock",title:"Turnos",value:"Turnos",to:"turnos",children:[]},{icon:"mdi-form-select",title:"Procedimientos",value:"Procedimientos",to:"procedimientos",children:[]},{icon:"mdi-truck",title:"Vehiculos",value:"Vehiculos",to:"vehiculos",children:[]}]},{icon:"mdi-cog",title:"Mantenimientos",value:"MantenimientosCuentas",to:"",children:[{icon:"mdi-account",title:"Usuarios",value:"Usuarios",to:"usuarios",children:[]},{icon:"mdi-bell-plus-outline",title:"Tipo eventos",value:"Tipo eventos",to:"tipoeventos",children:[]},{icon:"mdi-truck",title:"Vehiculos",value:"Vehiculos",to:"vehiculos",children:[]}]},{icon:"mdi-group",title:"Grupos",value:"Grupos",to:"",children:[{icon:"mdi-account-multiple",title:"Usuarios",value:"GUsuarios",to:"grupousuarios",children:[]},{icon:"mdi-truck",title:"Unidades",value:"GUnidades",to:"grupounidades",children:[]},{icon:"mdi-bell-alert",title:"Eventos",value:"GEventos",to:"grupoeventos",children:[]}]},{icon:"mdi-account-lock",title:"Reglas",value:"Reglas",to:"reglas",children:[]}]),o=(0,r.iH)(""),n=(0,r.iH)(""),i=(0,a.Fl)((()=>"Administrador"===pe.Z.state.rol?"All"==pe.Z.state.codclienteAdmin?l.value.filter((e=>"Dashboard"===e.value||"Eventos"===e.value||"MantenimientosCuentas"===e.value)):l.value.filter((e=>"MantenimientosCuentas"!=e.value)):"Operador"===pe.Z.state.rol?l.value.filter((e=>"Eventos"===e.value||"Reportes"===e.value)):[])),u=()=>{t.value=window.innerWidth<=1e3};return(0,a.bv)((()=>{o.value=pe.Z.state.rol,n.value=pe.Z.state.codclienteAdmin,u(),window.addEventListener("resize",u)})),{filteredItems:i,ItemsNavegation:l,codcliente:n,drawer:e,rail:t,role:o}}};const Ae=(0,Ie.Z)($e,[["render",ae]]);var Pe=Ae},5127:function(e,t,l){e.exports=l.p+"img/logo_sysnet.27bcaa54.png"},3289:function(e,t,l){l.d(t,{t:function(){return f}});var a=l(3396),o=l(2370),n=l(9166),i=l(4960),r=l(9374),u=l(1138),s=l(5935),c=l(4870),d=l(3766),v=l(1107),m=l(9888),p=l(131);const g=(0,d.U)({color:String,start:Boolean,end:Boolean,icon:i.lE,...(0,n.l)(),...(0,r.Z)(),...(0,u.Q)({tag:"i"}),...(0,s.x$)()},"VIcon"),f=(0,v.ev)()({name:"VIcon",props:g(),setup(e,t){let{attrs:l,slots:n}=t;const u=(0,c.iH)(),{themeClasses:d}=(0,s.ER)(e),{iconData:v}=(0,i.bi)((0,a.Fl)((()=>u.value||e.icon))),{sizeClasses:g}=(0,r.t)(e),{textColorClasses:f,textColorStyles:h}=(0,o.rY)((0,c.Vh)(e,"color"));return(0,m.L)((()=>{const t=n.default?.();return t&&(u.value=(0,p.RA)(t).filter((e=>e.type===a.xv&&e.children&&"string"===typeof e.children))[0]?.children),(0,a.Wm)(v.value.component,{tag:e.tag,icon:v.value.icon,class:["v-icon","notranslate",d.value,g.value,f.value,{"v-icon--clickable":!!l.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[g.value?void 0:{fontSize:(0,p.kb)(e.size),height:(0,p.kb)(e.size),width:(0,p.kb)(e.size)},h.value,e.style],role:l.onClick?"button":void 0,"aria-hidden":!l.onClick},{default:()=>[t]})})),{}}})},2370:function(e,t,l){l.d(t,{Y5:function(){return s},rY:function(){return u},rd:function(){return r}});l(560);var a=l(3396),o=l(4870),n=l(131),i=l(1303);function r(e){return(0,n.S3)((()=>{const t=[],l={};if(e.value.background)if((0,i.NA)(e.value.background)){if(l.backgroundColor=e.value.background,!e.value.text&&(0,i.Q1)(e.value.background)){const t=(0,i.lu)(e.value.background);if(null==t.a||1===t.a){const e=(0,i.YB)(t);l.color=e,l.caretColor=e}}}else t.push(`bg-${e.value.background}`);return e.value.text&&((0,i.NA)(e.value.text)?(l.color=e.value.text,l.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:l}}))}function u(e,t){const l=(0,a.Fl)((()=>({text:(0,o.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:n,colorStyles:i}=r(l);return{textColorClasses:n,textColorStyles:i}}function s(e,t){const l=(0,a.Fl)((()=>({background:(0,o.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:n,colorStyles:i}=r(l);return{backgroundColorClasses:n,backgroundColorStyles:i}}},9166:function(e,t,l){l.d(t,{l:function(){return o}});var a=l(3766);const o=(0,a.U)({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component")},9374:function(e,t,l){l.d(t,{Z:function(){return r},t:function(){return u}});var a=l(3766),o=l(7514),n=l(131);const i=["x-small","small","default","large","x-large"],r=(0,a.U)({size:{type:[String,Number],default:"default"}},"size");function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();return(0,n.S3)((()=>{let l,a;return(0,n.q9)(i,e.size)?l=`${t}--size-${e.size}`:e.size&&(a={width:(0,n.kb)(e.size),height:(0,n.kb)(e.size)}),{sizeClasses:l,sizeStyles:a}}))}},1138:function(e,t,l){l.d(t,{Q:function(){return o}});var a=l(3766);const o=(0,a.U)({tag:{type:String,default:"div"}},"tag")},9888:function(e,t,l){l.d(t,{L:function(){return o}});var a=l(7514);function o(e){const t=(0,a.FN)("useRender");t.render=e}}}]);
//# sourceMappingURL=34.2e3bac6c.js.map