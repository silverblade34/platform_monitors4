"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[83],{8099:function(){},9398:function(e,a,t){t.d(a,{AV:function(){return s},Ck:function(){return i},lA:function(){return r},pt:function(){return o}});var l=t(1076);const n="http://67.205.164.216:3000/api/v1";function i(e,a,t,i){return l.Z.post(`${n}/notifications/Account`,{cod_cuenta:e,cod_cliente:a,usuario:t,codigo:i})}function s(e,a,t){return l.Z.post(`${n}/massiveDiscard`,{ids:e,cod_cliente:t,cod_cuenta:a,descripcion_estado:"Descartado",estado:1})}function o(e){return l.Z.post(`${n}/addComment`,e)}function r(e){return l.Z.post(`${n}/allNotifications`,e)}},3512:function(e,a,t){t.d(a,{M:function(){return s},y:function(){return i}});var l=t(2492),n=t.n(l);function i(e,a,t,l){n().fire({icon:a,html:`<p class="text-lg font-semibold">${t}</p>\n          <p class="text-base">${l}</p>`,showCancelButton:!1,confirmButtonText:"Aceptar",confirmButtonColor:"#006cac",reverseButtons:!0}).then((a=>{a.isConfirmed&&e()}))}function s(e,a,t){n().fire({icon:"question",html:`<p class="text-lg">${a}</p>`,showCancelButton:!0,reverseButtons:!0,confirmButtonText:t,confirmButtonColor:"#3b82f6",cancelButtonText:"Cancelar"}).then((a=>{a.isConfirmed&&e()}))}},9068:function(e,a,t){t.r(a),t.d(a,{default:function(){return ue}});var l=t(3396),n=t(7312),i=t(5039),s=t(1888),o=t(3601),r=t(3289),u=t(7325),c=t(240);const d=(0,l._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Eventos pendientes",-1),v={class:"w-full rounded-lg bg-white shadow-md p-4"},p={class:"pl-2"},f=(0,l._)("p",{class:"text-xl text-gray-400"},"Realizar filtros",-1),g={class:"w-full block lg:flex lg:justify-between pt-3"},m={class:"lg:w-[45%] w-full block lg:grid lg:grid-cols-5 gap-4"};function b(e,a,t,b,h,_){const y=(0,l.up)("DataIteratorsVue");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[d,(0,l._)("div",v,[(0,l._)("div",p,[f,(0,l._)("div",g,[(0,l._)("div",m,[(0,l.Wm)(c.rL,{label:"Orden",items:["Ascendente","Descendente"],variant:"outlined",density:"compact",color:"indigo","prepend-inner-icon":"mdi-calendar-range",class:"col-span-2",modelValue:b.order,"onUpdate:modelValue":a[0]||(a[0]=e=>b.order=e)},null,8,["modelValue"]),(0,l.Wm)(c.rL,{label:"Tipo de eventos",items:b.eventCodes,variant:"outlined",density:"compact",color:"indigo","prepend-inner-icon":"mdi-format-list-bulleted-type",class:"col-span-3",modelValue:b.eventfilter,"onUpdate:modelValue":a[1]||(a[1]=e=>b.eventfilter=e)},null,8,["items","modelValue"])]),(0,l.Wm)(n.T,{color:"red",size:"small",onClick:b.onMassDiscard},{default:(0,l.w5)((()=>[(0,l.Wm)(r.t,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-bell-remove")])),_:1}),(0,l.Uk)(" Descarte masivo")])),_:1},8,["onClick"])])]),(0,l.Wm)(y,{dataEvents:b.listEventsFilter,onSelectedEvents:b.onSelectedEvents},null,8,["dataEvents","onSelectedEvents"])])]),(0,l.Wm)(o.B,{modelValue:b.dialogLoader,"onUpdate:modelValue":a[2]||(a[2]=e=>b.dialogLoader=e),scrim:!1,persistent:"",width:"auto"},{default:(0,l.w5)((()=>[(0,l.Wm)(i._,{color:"blue"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Construyendo "),(0,l.Wm)(u.K,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}t(1719);var h=t(7139),_=(t(8099),t(9166)),y=t(1629),w=t(1138),x=t(3766),V=t(1107),L=t(9888);const k=(0,x.U)({fluid:{type:Boolean,default:!1},...(0,_.l)(),...(0,w.Q)()},"VContainer"),A=(0,V.ev)()({name:"VContainer",props:k(),setup(e,a){let{slots:t}=a;const{rtlClasses:n}=(0,y.Vw)();return(0,L.L)((()=>(0,l.Wm)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},t))),{}}});var C=t(8694),W=t(8777),P=t(8157),D=t(2718),I=t(6107),S=t(9694),E=t(2465),F=t(4960),$=t(8717),T=t(4870);function B(){const e=(0,T.iH)([]);function a(a,t){e.value[t]=a}return(0,l.Xn)((()=>e.value=[])),{refs:e,updateRef:a}}var H=t(3712),M=t(4231),Z=t(9374),z=t(5935),N=t(5221),U=t(131);const R=(0,x.U)({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:F.lE,default:"$first"},prevIcon:{type:F.lE,default:"$prev"},nextIcon:{type:F.lE,default:"$next"},lastIcon:{type:F.lE,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...(0,D.m)(),...(0,_.l)(),...(0,S.f)(),...(0,E.c)(),...(0,M.I)(),...(0,Z.Z)(),...(0,w.Q)({tag:"nav"}),...(0,z.x$)(),...(0,N.bk)({variant:"text"})},"VPagination"),G=(0,V.ev)()({name:"VPagination",props:R(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,a){let{slots:t,emit:i}=a;const s=(0,$.z)(e,"modelValue"),{t:o,n:r}=(0,y.bU)(),{isRtl:u}=(0,y.Vw)(),{themeClasses:c}=(0,z.ER)(e),{width:d}=(0,P.AW)(),v=(0,T.XI)(-1);(0,I.AF)(void 0,{scoped:!0});const{resizeRef:p}=(0,H.y)((e=>{if(!e.length)return;const{target:a,contentRect:t}=e[0],l=a.querySelector(".v-pagination__list > *");if(!l)return;const n=t.width,i=l.offsetWidth+2*parseFloat(getComputedStyle(l).marginRight);v.value=b(n,i)})),f=(0,l.Fl)((()=>parseInt(e.length,10))),g=(0,l.Fl)((()=>parseInt(e.start,10))),m=(0,l.Fl)((()=>e.totalVisible?parseInt(e.totalVisible,10):v.value>=0?v.value:b(d.value,58)));function b(a,t){const l=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((a-t*l)/t).toFixed(2)))}const h=(0,l.Fl)((()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[];if(m.value<=1)return[s.value];if(f.value<=m.value)return(0,U.MT)(f.value,g.value);const a=m.value%2===0,t=a?m.value/2:Math.floor(m.value/2),l=a?t:t+1,n=f.value-t;if(l-s.value>=0)return[...(0,U.MT)(Math.max(1,m.value-1),g.value),e.ellipsis,f.value];if(s.value-n>=(a?1:0)){const a=m.value-1,t=f.value-a+g.value;return[g.value,e.ellipsis,...(0,U.MT)(a,t)]}{const a=Math.max(1,m.value-3),t=1===a?s.value:s.value-Math.ceil(a/2)+g.value;return[g.value,e.ellipsis,...(0,U.MT)(a,t),e.ellipsis,f.value]}}));function _(e,a,t){e.preventDefault(),s.value=a,t&&i(t,a)}const{refs:w,updateRef:x}=B();(0,I.AF)({VPaginationBtn:{color:(0,T.Vh)(e,"color"),border:(0,T.Vh)(e,"border"),density:(0,T.Vh)(e,"density"),size:(0,T.Vh)(e,"size"),variant:(0,T.Vh)(e,"variant"),rounded:(0,T.Vh)(e,"rounded"),elevation:(0,T.Vh)(e,"elevation")}});const V=(0,l.Fl)((()=>h.value.map(((a,t)=>{const l=e=>x(e,t);if("string"===typeof a)return{isActive:!1,key:`ellipsis-${t}`,page:a,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}};{const t=a===s.value;return{isActive:t,key:a,page:r(a),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:t?e.activeColor:e.color,ariaCurrent:t,ariaLabel:o(t?e.currentPageAriaLabel:e.pageAriaLabel,a),onClick:e=>_(e,a)}}}})))),k=(0,l.Fl)((()=>{const a=!!e.disabled||s.value<=g.value,t=!!e.disabled||s.value>=g.value+f.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:e=>_(e,g.value,"first"),disabled:a,ariaLabel:o(e.firstAriaLabel),ariaDisabled:a}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:e=>_(e,s.value-1,"prev"),disabled:a,ariaLabel:o(e.previousAriaLabel),ariaDisabled:a},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:e=>_(e,s.value+1,"next"),disabled:t,ariaLabel:o(e.nextAriaLabel),ariaDisabled:t},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:e=>_(e,g.value+f.value-1,"last"),disabled:t,ariaLabel:o(e.lastAriaLabel),ariaDisabled:t}:void 0}}));function A(){const e=s.value-g.value;w.value[e]?.$el.focus()}function C(a){a.key===U.ff.left&&!e.disabled&&s.value>+e.start?(s.value=s.value-1,(0,l.Y3)(A)):a.key===U.ff.right&&!e.disabled&&s.value<g.value+f.value-1&&(s.value=s.value+1,(0,l.Y3)(A))}return(0,L.L)((()=>(0,l.Wm)(e.tag,{ref:p,class:["v-pagination",c.value,e.class],style:e.style,role:"navigation","aria-label":o(e.ariaLabel),onKeydown:C,"data-test":"v-pagination-root"},{default:()=>[(0,l.Wm)("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&(0,l.Wm)("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(k.value.first):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},k.value.first),null)]),(0,l.Wm)("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(k.value.prev):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},k.value.prev),null)]),V.value.map(((e,a)=>(0,l.Wm)("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(e):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})]))),(0,l.Wm)("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(k.value.next):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},k.value.next),null)]),e.showFirstLastPage&&(0,l.Wm)("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(k.value.last):(0,l.Wm)(n.T,(0,l.dG)({_as:"VPaginationBtn"},k.value.last),null)])])]}))),{}}}),Y={class:"grid gap-3"},j={style:{position:"relative"}},K=["value","onChange"],X={class:"text-h6 mb-2"},q={class:"d-flex justify-space-between px-4"},Q={class:"d-flex align-center text-caption text-medium-emphasis me-1"},O={class:"text-truncate"};function J(e,a,s,o,u,c){return(0,l.wg)(),(0,l.j4)(i._,{class:"elevation-0"},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{class:"pa-2",fluid:""},{default:(0,l.w5)((()=>[(0,l._)("div",Y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.paginatedDesserts,((e,a)=>((0,l.wg)(),(0,l.j4)(i._,{class:"pb-3",border:"",flat:"",key:a},{default:(0,l.w5)((()=>[(0,l._)("div",j,[(0,l._)("input",{type:"checkbox",style:{position:"absolute",top:"10px",right:"10px","z-index":"2",transform:"scale(1.3)"},value:e.ID,onChange:a=>o.toggleSelection(e.ID)},null,40,K),(0,l.Wm)(C.f,{src:e.link_imagen||t(4017),"max-height":e.link_imagen?"":"200"},null,8,["src","max-height"])]),(0,l.Wm)(W.l,{class:"mb-2",subtitle:e.placa+" - "+e.conductor},{title:(0,l.w5)((()=>[(0,l._)("strong",X,(0,h.zw)(e.cod_evento),1)])),_:2},1032,["subtitle"]),(0,l._)("div",q,[(0,l._)("div",Q,[(0,l.Wm)(r.t,{icon:"mdi-clock",start:""}),(0,l._)("div",O,(0,h.zw)(e.hora),1)]),(0,l.Wm)(n.T,{border:"",flat:"",size:"small",class:"text-none",color:"indigo",text:"Atender"})])])),_:2},1024)))),128))]),(0,l.Wm)(G,{modelValue:o.currentPage,"onUpdate:modelValue":a[0]||(a[0]=e=>o.currentPage=e),length:o.totalPages,rounded:"circle"},null,8,["modelValue","length"])])),_:1})])),_:1})}var ee={props:{dataEvents:Array},emits:["selected-events"],setup(e,{emit:a}){const t=(0,T.iH)(""),n=(0,T.iH)(1),i=(0,T.iH)(18),s=(0,T.iH)([]),o=(0,T.iH)(new Set);(0,l.bv)((()=>{s.value=e.dataEvents})),(0,l.YP)((()=>e.dataEvents),(e=>{s.value=e}));const r=(0,l.Fl)((()=>{const e=(n.value-1)*i.value,a=e+i.value;return s.value.slice(e,a)})),u=(0,l.Fl)((()=>Math.ceil(s.value.length/i.value))),c=e=>{n.value=e},d=e=>{o.value.has(e)?o.value.delete(e):o.value.add(e),a("selected-events",{selected:Array.from(o.value)})};return{search:t,desserts:s,currentPage:n,itemsPerPage:i,paginatedDesserts:r,totalPages:u,toggleSelection:d,goToPage:c}}},ae=t(89);const te=(0,ae.Z)(ee,[["render",J],["__scopeId","data-v-1ab5076a"]]);var le=te,ne=t(9398),ie=t(3512),se=t(4239),oe={name:"IconsEarringsView",components:{DataIteratorsVue:le},setup(){const e=(0,T.iH)([]),a=(0,T.iH)([]),t=(0,T.iH)("Descendente"),n=(0,T.iH)("Todos"),i=(0,T.iH)([]),s=(0,T.iH)(!1),o=(0,T.iH)([]);(0,l.bv)((async()=>{s.value=!0,await r(),await u(),s.value=!1}));const r=async()=>{const a=await(0,ne.Ck)(se.Z.state.codcuenta,se.Z.state.codclienteAdmin,se.Z.state.username,se.Z.state.codregla);e.value=a.data.data?a.data.data.filter((e=>"Sin Atender"===e.descripcion_estado||"En Gestion"===e.descripcion_estado)):[];const t=[...new Set(e.value.map((e=>e.cod_evento)))];t.unshift("Todos"),i.value=t};setInterval((()=>{r()}),15e3),(0,l.YP)((()=>t.value),(async()=>{await u()})),(0,l.YP)((()=>n.value),(async()=>{await u()}));const u=async()=>{"Todos"!==n.value?a.value=e.value.filter((e=>e.cod_evento===n.value)):a.value=e.value,"Descendente"==t.value?a.value.sort(((e,a)=>{const t=new Date(e.fecha_actual),l=new Date(a.fecha_actual);return l-t})):a.value.sort(((e,a)=>{const t=new Date(e.fecha_actual),l=new Date(a.fecha_actual);return t-l}))},c=e=>{o.value=e.selected},d=()=>{o.value.length>0?(0,ie.M)((async()=>{(0,ne.AV)(o.value,se.Z.state.codcuenta,se.Z.state.codclienteAdmin).then((()=>{(0,ie.y)((async()=>{await r(),await u()}),"success","Logrado","Se ha descartado los eventos correctamente")})).catch((()=>{(0,ie.y)((()=>{}),"error","Hubo un error","No se logro descartar los eventos")}))}),"¿Estás seguro de realizar el descarte de los eventos seleccionados?","Aceptar"):(0,ie.y)((()=>{}),"warning","Advertencia","No se ha encontrado eventos seleccionados para el descarte masivo")};return{onSelectedEvents:c,onMassDiscard:d,listEventsFilter:a,dialogLoader:s,pendingEvents:e,eventCodes:i,eventfilter:n,order:t}}};const re=(0,ae.Z)(oe,[["render",b]]);var ue=re},4017:function(e,a,t){e.exports=t.p+"img/imagen_vacia.734ca956.jpg"}}]);
//# sourceMappingURL=83.5a507d2f.js.map