"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[472],{9398:function(e,t,n){n.d(t,{AV:function(){return o},Ck:function(){return i},pt:function(){return r}});var a=n(1076);const l="http://67.205.164.216:3000/api/v1";function i(e,t,n,i){return a.Z.post(`${l}/notifications/Account`,{cod_cuenta:e,cod_cliente:t,usuario:n,codigo:i})}function o(e,t,n){return a.Z.post(`${l}/massiveDiscard`,{ids:e,cod_cliente:n,cod_cuenta:t,descripcion_estado:"Descartado",estado:1})}function r(e){return a.Z.post(`${l}/addComment`,e)}},8935:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3396),l=n(7139),i=n(7312),o=n(678);const r={class:"flex justify-center"},s={class:"flex gap-1 w-full justify-center"},c={key:0},d={key:1};function u(e,t,n,u,p,v){const m=(0,a.up)("v-data-table");return(0,a.wg)(),(0,a.j4)(m,{items:n.desserts,headers:n.listedHeaders,"sort-by":[{key:"fecha_actual",order:"desc"}],class:"text-sm table_events",search:n.search},{["item.fecha"]:(0,a.w5)((({item:e})=>[(0,a._)("span",null,(0,l.zw)(e.fecha)+" "+(0,l.zw)(e.hora),1)])),["item.prioridad"]:(0,a.w5)((({item:e})=>[(0,a._)("div",r,[(0,a._)("div",{class:(0,l.C_)(["h-5 w-5 rounded-full mr-2",{"bg-orange-300":"URGENTE"===e.prioridad,"bg-red-300":"CRITICO"===e.prioridad,"bg-blue-300":"REGULAR"===e.prioridad}])},null,2)])])),["item.evidence"]:(0,a.w5)((({item:e})=>[(0,a._)("div",s,[""==e.link_video&&""==e.link_imagen?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(i.T,{size:"x-small",icon:"mdi-video",color:"grey"}),(0,a.Wm)(o.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("No hay evidencias")])),_:1})])):((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(i.T,{icon:"mdi-video",size:"x-small",color:"indigo-lighten-2",onClick:t=>u.seeEvidence(e.link_imagen,e.link_video)},null,8,["onClick"]),(0,a.Wm)(o.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Ver evidencias")])),_:1})]))])])),_:2},1032,["items","headers","search"])}var p=n(5470),v=n(7357),m=n(2492),f=n.n(m),g={props:{search:String,desserts:Array,listedHeaders:Array},components:{VDataTable:p.y_},setup(){const e=(t,n)=>{const a=()=>{f().fire({html:`<img src="${t}" alt="" class=w-full>`,showCancelButton:!0,cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar",confirmButtonColor:"#6D68B8",reverseButtons:!0}).then((a=>{a.isConfirmed||a.dismiss===f().DismissReason.cancel&&e(t,n)}))},l=()=>{f().fire({html:`\n              <div class="flex justify-center">\n                <video width="400" height="320" controls>\n                  <source src="${n}" type="video/mp4">\n                </video>\n              </div>\n              `,showCloseButton:!0,showCancelButton:!0,cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar",confirmButtonColor:"#6D68B8",reverseButtons:!0}).then((a=>{a.isConfirmed||a.dismiss===f().DismissReason.cancel&&e(t,n)}))};f().fire({html:`<p class="text-xl font-bold pt-1 text-gray-500">Ver evidencias disponibles</p>\n        <div class="w-full flex justify-center">\n        <img src="${v}" alt="" class=w-[50%]>\n        </div>\n        `,showCancelButton:!0,confirmButtonText:"Ver imagen",cancelButtonText:"Ver video",reverseButtons:!0,focusConfirm:!1,confirmButtonColor:"#6D68B8",focusCancel:!1}).then((i=>{i.isConfirmed?""!==t?a():f().fire({html:'<p class="pt-4">No hay imagen disponible</p>',showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#6D68B8",cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar"}).then((a=>{a.isConfirmed||a.dismiss===f().DismissReason.cancel&&e(t,n)})):i.dismiss===f().DismissReason.cancel&&(""!==n?l():f().fire({html:'<p class="pt-4">No hay video disponible</p>',showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#6D68B8",cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar"}).then((a=>{a.isConfirmed||a.dismiss===f().DismissReason.cancel&&e(t,n)})))}))};return{seeEvidence:e}}},y=n(89);const b=(0,y.Z)(g,[["render",u]]);var h=b},7357:function(e,t,n){e.exports=n.p+"img/evidencias.648484c3.jpg"},5039:function(e,t,n){n.d(t,{_:function(){return E}});var a=n(3396),l=n(1334),i=n(1114);const o=(0,i.J)("v-card-subtitle"),r=(0,i.J)("v-card-title");var s=n(652),c=n(836),d=n(9166),u=n(9694),p=n(4960),v=n(3766),m=n(1107),f=n(9888);const g=(0,v.U)({appendAvatar:String,appendIcon:p.lE,prependAvatar:String,prependIcon:p.lE,subtitle:String,title:String,...(0,d.l)(),...(0,u.f)()},"VCardItem"),y=(0,m.ev)()({name:"VCardItem",props:g(),setup(e,t){let{slots:n}=t;return(0,f.L)((()=>{const t=!(!e.prependAvatar&&!e.prependIcon),l=!(!t&&!n.prepend),i=!(!e.appendAvatar&&!e.appendIcon),d=!(!i&&!n.append),u=!(!e.title&&!n.title),p=!(!e.subtitle&&!n.subtitle);return(0,a.Wm)("div",{class:["v-card-item",e.class],style:e.style},[l&&(0,a.Wm)("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?(0,a.Wm)(c.z,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):t&&(0,a.Wm)(s.V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),(0,a.Wm)("div",{class:"v-card-item__content"},[u&&(0,a.Wm)(r,{key:"title"},{default:()=>[n.title?.()??e.title]}),p&&(0,a.Wm)(o,{key:"subtitle"},{default:()=>[n.subtitle?.()??e.subtitle]}),n.default?.()]),d&&(0,a.Wm)("div",{key:"append",class:"v-card-item__append"},[n.append?(0,a.Wm)(c.z,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):i&&(0,a.Wm)(s.V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])})),{}}});var b=n(1888),h=n(8694),C=n(2718),B=n(4544),k=n(2465),x=n(1710),V=n(5180),_=n(489),w=n(4231),A=n(6183),W=n(1138),I=n(5935),S=n(5221),T=n(3824);const D=(0,v.U)({appendAvatar:String,appendIcon:p.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:p.lE,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...(0,C.m)(),...(0,d.l)(),...(0,u.f)(),...(0,B.x)(),...(0,k.c)(),...(0,x.fF)(),...(0,V.y)(),...(0,_.F)(),...(0,w.I)(),...(0,A.GN)(),...(0,W.Q)(),...(0,I.x$)(),...(0,S.bk)({variant:"elevated"})},"VCard"),E=(0,m.ev)()({name:"VCard",directives:{Ripple:T.H},props:D(),setup(e,t){let{attrs:n,slots:i}=t;const{themeClasses:o}=(0,I.ER)(e),{borderClasses:r}=(0,C.P)(e),{colorClasses:s,colorStyles:d,variantClasses:p}=(0,S.c1)(e),{densityClasses:v}=(0,u.t)(e),{dimensionStyles:m}=(0,B.$)(e),{elevationClasses:g}=(0,k.Y)(e),{loaderClasses:W}=(0,x.U2)(e),{locationStyles:T}=(0,V.T)(e),{positionClasses:D}=(0,_.K)(e),{roundedClasses:E}=(0,w.b)(e),F=(0,A.nB)(e,n),R=(0,a.Fl)((()=>!1!==e.link&&F.isLink.value)),U=(0,a.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||F.isClickable.value)));return(0,f.L)((()=>{const t=R.value?"a":e.tag,n=!(!i.title&&!e.title),u=!(!i.subtitle&&!e.subtitle),f=n||u,C=!!(i.append||e.appendAvatar||e.appendIcon),B=!!(i.prepend||e.prependAvatar||e.prependIcon),k=!(!i.image&&!e.image),V=f||B||C,_=!(!i.text&&!e.text);return(0,a.wy)((0,a.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":U.value},o.value,r.value,s.value,v.value,g.value,W.value,D.value,E.value,p.value,e.class],style:[d.value,m.value,T.value,e.style],href:F.href.value,onClick:U.value&&F.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[k&&(0,a.Wm)("div",{key:"image",class:"v-card__image"},[i.image?(0,a.Wm)(c.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},i.image):(0,a.Wm)(h.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,a.Wm)(x.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:i.loader}),V&&(0,a.Wm)(y,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:i.item,prepend:i.prepend,title:i.title,subtitle:i.subtitle,append:i.append}),_&&(0,a.Wm)(b.Z,{key:"text"},{default:()=>[i.text?.()??e.text]}),i.default?.(),i.actions&&(0,a.Wm)(l.h,null,{default:i.actions}),(0,S.Ux)(U.value,"v-card")]}),[[(0,a.Q2)("ripple"),U.value&&e.ripple]])})),{}}})},1334:function(e,t,n){n.d(t,{h:function(){return s}});var a=n(3396),l=n(9166),i=n(6107),o=n(1107),r=n(9888);const s=(0,o.ev)()({name:"VCardActions",props:(0,l.l)(),setup(e,t){let{slots:n}=t;return(0,i.AF)({VBtn:{variant:"text"}}),(0,r.L)((()=>(0,a.Wm)("div",{class:["v-card-actions",e.class],style:e.style},[n.default?.()]))),{}}})},1888:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1114);const l=(0,a.J)("v-card-text")},3601:function(e,t,n){n.d(t,{B:function(){return y}});var a=n(3396),l=n(2583),i=n(836),o=n(5164),r=n(3185),s=n(8717),c=n(5975),d=n(4870),u=n(3766),p=n(1107),v=n(131),m=n(2385),f=n(9888);const g=(0,u.U)({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...(0,o.B)({origin:"center center",scrollStrategy:"block",transition:{component:l.v},zIndex:2400})},"VDialog"),y=(0,p.ev)()({name:"VDialog",props:g(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const l=(0,s.z)(e,"modelValue"),{scopeId:u}=(0,c.a)(),p=(0,d.iH)();function g(e){const t=e.relatedTarget,n=e.target;if(t!==n&&p.value?.contentEl&&p.value?.globalTop&&![document,p.value.contentEl].includes(n)&&!p.value.contentEl.contains(n)){const e=(0,v.ef)(p.value.contentEl);if(!e.length)return;const n=e[0],a=e[e.length-1];t===n?a.focus():n.focus()}}m.BR&&(0,a.YP)((()=>l.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",g):document.removeEventListener("focusin",g)}),{immediate:!0}),(0,a.YP)(l,(async e=>{await(0,a.Y3)(),e?p.value.contentEl?.focus({preventScroll:!0}):p.value.activatorEl?.focus({preventScroll:!0})}));const y=(0,a.Fl)((()=>(0,a.dG)({"aria-haspopup":"dialog","aria-expanded":String(l.value)},e.activatorProps)));return(0,f.L)((()=>{const[t]=o.y.filterProps(e);return(0,a.Wm)(o.y,(0,a.dG)({ref:p,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},t,{modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,"aria-modal":"true",activatorProps:y.value,role:"dialog"},u),{activator:n.activator,default:function(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,a.Wm)(i.z,{root:"VDialog"},{default:()=>[n.default?.(...t)]})}})})),(0,r.F)({},p)}})},678:function(e,t,n){n.d(t,{N:function(){return f}});var a=n(3396),l=n(5164),i=n(3185),o=n(8717),r=n(5975),s=n(4870),c=n(3766),d=n(131),u=n(1107),p=n(7514),v=n(9888);const m=(0,c.U)({id:String,text:String,...(0,d.CE)((0,l.B)({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),f=(0,u.ev)()({name:"VTooltip",props:m(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=(0,o.z)(e,"modelValue"),{scopeId:d}=(0,r.a)(),u=(0,p.sq)(),m=(0,a.Fl)((()=>e.id||`v-tooltip-${u}`)),f=(0,s.iH)(),g=(0,a.Fl)((()=>e.location.split(" ").length>1?e.location:e.location+" center")),y=(0,a.Fl)((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),b=(0,a.Fl)((()=>e.transition?e.transition:c.value?"scale-transition":"fade-transition")),h=(0,a.Fl)((()=>(0,a.dG)({"aria-describedby":m.value},e.activatorProps)));return(0,v.L)((()=>{const[t]=l.y.filterProps(e);return(0,a.Wm)(l.y,(0,a.dG)({ref:f,class:["v-tooltip",e.class],style:e.style,id:m.value},t,{modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,transition:b.value,absolute:!0,location:g.value,origin:y.value,persistent:!0,role:"tooltip",activatorProps:h.value,_disableGlobalStack:!0},d),{activator:n.activator,default:function(){for(var t=arguments.length,a=new Array(t),l=0;l<t;l++)a[l]=arguments[l];return n.default?.(...a)??e.text}})})),(0,i.F)({},f)}})}}]);
//# sourceMappingURL=472.48c031ab.js.map