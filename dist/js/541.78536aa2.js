"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[541],{8099:function(){},9398:function(e,t,a){a.d(t,{AP:function(){return u},AV:function(){return o},Ck:function(){return i},lA:function(){return r},pt:function(){return s}});var l=a(1076);const n="http://67.205.164.216:3000/api/v1";function i(e,t,a,i){return l.Z.post(`${n}/notifications/Account`,{cod_cuenta:e,cod_cliente:t,usuario:a,codigo:i})}function o(e,t,a){return l.Z.post(`${n}/massiveDiscard`,{ids:e,cod_cliente:a,cod_cuenta:t,descripcion_estado:"Descartado",estado:1})}function s(e){return l.Z.post(`${n}/addComment`,e)}function r(e){return l.Z.post(`${n}/allNotifications`,e)}function u(e){return l.Z.post(`${n}/notificationsById`,e)}},808:function(e,t,a){a.d(t,{a:function(){return n}});var l=a(1076);function n(e){return l.Z.post("http://143.244.144.235:3020/convert",{video_url:e})}},3512:function(e,t,a){a.d(t,{M:function(){return o},y:function(){return i}});var l=a(2492),n=a.n(l);function i(e,t,a,l){n().fire({icon:t,html:`<p class="text-lg font-semibold">${a}</p>\n          <p class="text-base">${l}</p>`,showCancelButton:!1,confirmButtonText:"Aceptar",confirmButtonColor:"#006cac",reverseButtons:!0}).then((t=>{t.isConfirmed&&e()}))}function o(e,t,a){n().fire({icon:"question",html:`<p class="text-lg">${t}</p>`,showCancelButton:!0,reverseButtons:!0,confirmButtonText:a,confirmButtonColor:"#3b82f6",cancelButtonText:"Cancelar"}).then((t=>{t.isConfirmed&&e()}))}},8657:function(e,t,a){a.r(t),a.d(t,{default:function(){return fe}});var l=a(3396),n=a(7312),i=a(11),o=a(1888),s=a(3601),r=a(3289),u=a(7325),c=a(240);const d=(0,l._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Eventos pendientes",-1),v={class:"w-full rounded-lg bg-white shadow-md p-4"},p={class:"pl-2"},f=(0,l._)("p",{class:"text-xl text-gray-400"},"Realizar filtros",-1),m={class:"w-full block lg:flex lg:justify-between pt-3"},g={class:"lg:w-[45%] w-full block lg:grid lg:grid-cols-5 gap-4"};function b(e,t,a,b,_,h){const y=(0,l.up)("DataIteratorsVue");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[d,(0,l._)("div",v,[(0,l._)("div",p,[f,(0,l._)("div",m,[(0,l._)("div",g,[(0,l.Wm)(c.rL,{label:"Orden",items:["Ascendente","Descendente"],variant:"outlined",density:"compact",color:"indigo","prepend-inner-icon":"mdi-calendar-range",class:"col-span-2",modelValue:b.order,"onUpdate:modelValue":t[0]||(t[0]=e=>b.order=e)},null,8,["modelValue"]),(0,l.Wm)(c.rL,{label:"Tipo de eventos",items:b.eventCodes,variant:"outlined",density:"compact",color:"indigo","prepend-inner-icon":"mdi-format-list-bulleted-type",class:"col-span-3",modelValue:b.eventfilter,"onUpdate:modelValue":t[1]||(t[1]=e=>b.eventfilter=e)},null,8,["items","modelValue"])]),(0,l.Wm)(n.T,{color:"red",size:"small",onClick:b.onMassDiscard},{default:(0,l.w5)((()=>[(0,l.Wm)(r.t,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-bell-remove")])),_:1}),(0,l.Uk)(" Descarte masivo")])),_:1},8,["onClick"])])]),(0,l.Wm)(y,{dataEvents:b.listEventsFilter,onSelectedEvents:b.onSelectedEvents},null,8,["dataEvents","onSelectedEvents"])])]),(0,l.Wm)(s.B,{modelValue:b.dialogLoader,"onUpdate:modelValue":t[2]||(t[2]=e=>b.dialogLoader=e),scrim:!1,persistent:"",width:"auto"},{default:(0,l.w5)((()=>[(0,l.Wm)(i._,{color:"blue"},{default:(0,l.w5)((()=>[(0,l.Wm)(o.Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Construyendo "),(0,l.Wm)(u.K,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}a(1719);var _=a(7139),h=a(6572),y=a(1334),w=(a(8099),a(9166)),x=a(1629),V=a(1138),k=a(3766),L=a(1107),C=a(9888);const W=(0,k.U)({fluid:{type:Boolean,default:!1},...(0,w.l)(),...(0,V.Q)()},"VContainer"),A=(0,L.ev)()({name:"VContainer",props:W(),setup(e,t){let{slots:a}=t;const{rtlClasses:n}=(0,x.Vw)();return(0,C.L)((()=>(0,l.Wm)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},a))),{}}});var I=a(8694),P=a(8777),E=a(8157),D=a(2718),S=a(6107),M=a(9694),T=a(2465),$=a(4960),B=a(8717),F=a(4870);function H(){const e=(0,F.iH)([]);function t(t,a){e.value[a]=t}return(0,l.Xn)((()=>e.value=[])),{refs:e,updateRef:t}}var Z=a(3712),U=a(4231),z=a(9374),N=a(5935),R=a(5221),G=a(131);const Y=(0,k.U)({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:$.lE,default:"$first"},prevIcon:{type:$.lE,default:"$prev"},nextIcon:{type:$.lE,default:"$next"},lastIcon:{type:$.lE,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...(0,D.m)(),...(0,w.l)(),...(0,M.f)(),...(0,T.c)(),...(0,U.I)(),...(0,z.Z)(),...(0,V.Q)({tag:"nav"}),...(0,N.x$)(),...(0,R.bk)({variant:"text"})},"VPagination"),j=(0,L.ev)()({name:"VPagination",props:Y(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,t){let{slots:a,emit:i}=t;const o=(0,B.z)(e,"modelValue"),{t:s,n:r}=(0,x.bU)(),{isRtl:u}=(0,x.Vw)(),{themeClasses:c}=(0,N.ER)(e),{width:d}=(0,E.AW)(),v=(0,F.XI)(-1);(0,S.AF)(void 0,{scoped:!0});const{resizeRef:p}=(0,Z.y)((e=>{if(!e.length)return;const{target:t,contentRect:a}=e[0],l=t.querySelector(".v-pagination__list > *");if(!l)return;const n=a.width,i=l.offsetWidth+2*parseFloat(getComputedStyle(l).marginRight);v.value=b(n,i)})),f=(0,l.Fl)((()=>parseInt(e.length,10))),m=(0,l.Fl)((()=>parseInt(e.start,10))),g=(0,l.Fl)((()=>e.totalVisible?parseInt(e.totalVisible,10):v.value>=0?v.value:b(d.value,58)));function b(t,a){const l=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((t-a*l)/a).toFixed(2)))}const _=(0,l.Fl)((()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[];if(g.value<=1)return[o.value];if(f.value<=g.value)return(0,G.MT)(f.value,m.value);const t=g.value%2===0,a=t?g.value/2:Math.floor(g.value/2),l=t?a:a+1,n=f.value-a;if(l-o.value>=0)return[...(0,G.MT)(Math.max(1,g.value-1),m.value),e.ellipsis,f.value];if(o.value-n>=(t?1:0)){const t=g.value-1,a=f.value-t+m.value;return[m.value,e.ellipsis,...(0,G.MT)(t,a)]}{const t=Math.max(1,g.value-3),a=1===t?o.value:o.value-Math.ceil(t/2)+m.value;return[m.value,e.ellipsis,...(0,G.MT)(t,a),e.ellipsis,f.value]}}));function h(e,t,a){e.preventDefault(),o.value=t,a&&i(a,t)}const{refs:y,updateRef:w}=H();(0,S.AF)({VPaginationBtn:{color:(0,F.Vh)(e,"color"),border:(0,F.Vh)(e,"border"),density:(0,F.Vh)(e,"density"),size:(0,F.Vh)(e,"size"),variant:(0,F.Vh)(e,"variant"),rounded:(0,F.Vh)(e,"rounded"),elevation:(0,F.Vh)(e,"elevation")}});const V=(0,l.Fl)((()=>_.value.map(((t,a)=>{const l=e=>w(e,a);if("string"===typeof t)return{isActive:!1,key:`ellipsis-${a}`,page:t,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}};{const a=t===o.value;return{isActive:a,key:t,page:r(t),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:a?e.activeColor:e.color,ariaCurrent:a,ariaLabel:s(a?e.currentPageAriaLabel:e.pageAriaLabel,t),onClick:e=>h(e,t)}}}})))),k=(0,l.Fl)((()=>{const t=!!e.disabled||o.value<=m.value,a=!!e.disabled||o.value>=m.value+f.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:e=>h(e,m.value,"first"),disabled:t,ariaLabel:s(e.firstAriaLabel),ariaDisabled:t}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:e=>h(e,o.value-1,"prev"),disabled:t,ariaLabel:s(e.previousAriaLabel),ariaDisabled:t},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:e=>h(e,o.value+1,"next"),disabled:a,ariaLabel:s(e.nextAriaLabel),ariaDisabled:a},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:e=>h(e,m.value+f.value-1,"last"),disabled:a,ariaLabel:s(e.lastAriaLabel),ariaDisabled:a}:void 0}}));function L(){const e=o.value-m.value;y.value[e]?.$el.focus()}function W(t){t.key===G.ff.left&&!e.disabled&&o.value>+e.start?(o.value=o.value-1,(0,l.Y3)(L)):t.key===G.ff.right&&!e.disabled&&o.value<m.value+f.value-1&&(o.value=o.value+1,(0,l.Y3)(L))}return(0,C.L)((()=>(0,l.Wm)(e.tag,{ref:p,class:["v-pagination",c.value,e.class],style:e.style,role:"navigation","aria-label":s(e.ariaLabel),onKeydown:W,"data-test":"v-pagination-root"},{default:()=>[(0,l.Wm)("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&(0,l.Wm)("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(k.value.first):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},k.value.first),null)]),(0,l.Wm)("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(k.value.prev):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},k.value.prev),null)]),V.value.map(((e,t)=>(0,l.Wm)("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(e):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})]))),(0,l.Wm)("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(k.value.next):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},k.value.next),null)]),e.showFirstLastPage&&(0,l.Wm)("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(k.value.last):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},k.value.last),null)])])]}))),{}}}),K={class:"grid gap-3"},X={style:{position:"relative"}},q=["value","onChange"],Q={class:"text-md mb-2"},O={class:"d-flex justify-space-between px-4"},J={class:"d-flex align-center text-caption text-medium-emphasis me-1"},ee={class:"text-truncate"},te=["src"];function ae(e,t,u,c,d,v){return(0,l.wg)(),(0,l.j4)(i._,{class:"elevation-0"},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{class:"pa-2",fluid:""},{default:(0,l.w5)((()=>[(0,l._)("div",K,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.paginatedDesserts,((e,t)=>((0,l.wg)(),(0,l.j4)(i._,{class:"pb-3",border:"",flat:"",key:t},{default:(0,l.w5)((()=>[(0,l._)("div",X,[(0,l._)("input",{type:"checkbox",style:{position:"absolute",top:"10px",right:"10px","z-index":"2",transform:"scale(1.3)"},value:e.ID,onChange:t=>c.toggleSelection(e.ID)},null,40,q),(0,l.Wm)(I.f,{src:e.link_imagen||a(4017),"max-height":e.link_imagen?"":"200"},null,8,["src","max-height"])]),(0,l.Wm)(P.l,{class:"mb-2",subtitle:e.placa+" - "+e.conductor},{title:(0,l.w5)((()=>[(0,l._)("strong",Q,(0,_.zw)(e.descripcion_evento),1)])),_:2},1032,["subtitle"]),(0,l._)("div",O,[(0,l._)("div",J,[(0,l.Wm)(r.t,{icon:"mdi-clock",start:""}),(0,l._)("div",ee,(0,_.zw)(e.hora),1)]),(0,l.Wm)(n.T,{onClick:t=>c.openVideoModal(e.link_video),icon:"",width:"10"},{default:(0,l.w5)((()=>[(0,l.Wm)(r.t,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-video")])),_:1})])),_:2},1032,["onClick"]),(0,l.Wm)(n.T,{border:"",flat:"",size:"small",class:"text-none",color:"indigo",text:"Atender",onClick:t=>c.editItem(e)},null,8,["onClick"])])])),_:2},1024)))),128))]),(0,l.Wm)(j,{modelValue:c.currentPage,"onUpdate:modelValue":t[0]||(t[0]=e=>c.currentPage=e),length:c.totalPages,rounded:"circle"},null,8,["modelValue","length"]),(0,l.Wm)(s.B,{modelValue:c.videoModal,"onUpdate:modelValue":t[1]||(t[1]=e=>c.videoModal=e),width:"500"},{default:(0,l.w5)((()=>[(0,l.Wm)(i._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h.E,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Video")])),_:1}),(0,l.Wm)(o.Z,null,{default:(0,l.w5)((()=>[(0,l._)("video",{src:c.videoUrl,width:"900",height:"315",frameborder:"0",allowfullscreen:"",autoplay:"",controls:""},null,8,te)])),_:1}),(0,l.Wm)(y.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n.T,{onClick:c.closeVideoModal},{default:(0,l.w5)((()=>[(0,l.Uk)("Cerrar")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}a(560);var le=a(4239),ne=a(2483),ie=a(808),oe={props:{dataEvents:Array},emits:["selected-events"],setup(e,{emit:t}){const a=(0,F.iH)(""),n=(0,F.iH)(1),i=(0,F.iH)(18),o=(0,F.iH)([]),s=(0,F.iH)(new Set),r=(0,F.iH)([]),u=(0,ne.tv)();(0,l.bv)((()=>{o.value=e.dataEvents})),(0,l.YP)((()=>e.dataEvents),(e=>{o.value=e}));const c=(0,l.Fl)((()=>{const e=(n.value-1)*i.value,t=e+i.value;return o.value.slice(e,t)})),d=(0,l.Fl)((()=>Math.ceil(o.value.length/i.value))),v=e=>{n.value=e},p=e=>{s.value.has(e)?s.value.delete(e):s.value.add(e),t("selected-events",{selected:Array.from(s.value)})},f=e=>{le.Z.commit("setEventAtended",e),u.push("/atenderevento")},m=(0,F.iH)(!1),g=(0,F.iH)(""),b=async e=>{try{const t=await(0,ie.a)(e);g.value="http://143.244.144.235:3020"+t.data.video_url,m.value=!0}catch(t){console.error("Error al convertir el enlace del video:",t)}},_=()=>{m.value=!1,g.value=""};return{search:a,desserts:o,currentPage:n,itemsPerPage:i,editItem:f,paginatedDesserts:c,totalPages:d,toggleSelection:p,goToPage:v,selected:r,openVideoModal:b,closeVideoModal:_,videoModal:m,videoUrl:g}}},se=a(89);const re=(0,se.Z)(oe,[["render",ae],["__scopeId","data-v-5fbd7870"]]);var ue=re,ce=a(9398),de=a(3512),ve={name:"IconsEarringsView",components:{DataIteratorsVue:ue},setup(){const e=(0,F.iH)([]),t=(0,F.iH)([]),a=(0,F.iH)("Descendente"),n=(0,F.iH)("Todos"),i=(0,F.iH)([]),o=(0,F.iH)(!1),s=(0,F.iH)([]);(0,l.bv)((async()=>{o.value=!0,await r(),await c(),o.value=!1}));const r=async()=>{const t=await(0,ce.Ck)(le.Z.state.codcuenta,le.Z.state.codclienteAdmin,le.Z.state.username,le.Z.state.codregla);e.value=t.data.data?t.data.data.filter((e=>"Sin Atender"===e.descripcion_estado||"En Gestion"===e.descripcion_estado)):[];const a=[...new Set(e.value.map((e=>e.descripcion_evento)))];a.unshift("Todos"),i.value=a},u=setInterval((()=>{r()}),15e3);(0,l.Ah)((()=>{clearInterval(u)})),(0,l.YP)((()=>a.value),(async()=>{await c()})),(0,l.YP)((()=>n.value),(async()=>{await c()}));const c=async()=>{"Todos"!==n.value?t.value=e.value.filter((e=>e.descripcion_evento===n.value)):t.value=e.value,"Descendente"==a.value?t.value.sort(((e,t)=>{const a=new Date(e.fecha_actual),l=new Date(t.fecha_actual);return l-a})):t.value.sort(((e,t)=>{const a=new Date(e.fecha_actual),l=new Date(t.fecha_actual);return a-l}))},d=e=>{s.value=e.selected},v=()=>{s.value.length>0?(0,de.M)((async()=>{(0,ce.AV)(s.value,le.Z.state.codcuenta,le.Z.state.codclienteAdmin).then((()=>{(0,de.y)((async()=>{await r(),await c()}),"success","Logrado","Se ha descartado los eventos correctamente")})).catch((()=>{(0,de.y)((()=>{}),"error","Hubo un error","No se logro descartar los eventos")}))}),"¿Estás seguro de realizar el descarte de los eventos seleccionados?","Aceptar"):(0,de.y)((()=>{}),"warning","Advertencia","No se ha encontrado eventos seleccionados para el descarte masivo")};return{onSelectedEvents:d,onMassDiscard:v,listEventsFilter:t,dialogLoader:o,pendingEvents:e,eventCodes:i,eventfilter:n,order:a}}};const pe=(0,se.Z)(ve,[["render",b]]);var fe=pe},4017:function(e,t,a){e.exports=a.p+"img/imagen_vacia.734ca956.jpg"}}]);
//# sourceMappingURL=541.78536aa2.js.map