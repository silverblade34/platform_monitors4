"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[543],{9398:function(e,t,n){n.d(t,{AV:function(){return s},Ck:function(){return o},lA:function(){return r},pt:function(){return i}});var l=n(1076);const a="http://192.168.1.45:3000/api/v1";function o(e,t,n,o){return l.Z.post(`${a}/notifications/Account`,{cod_cuenta:e,cod_cliente:t,usuario:n,codigo:o})}function s(e,t,n){return l.Z.post(`${a}/massiveDiscard`,{ids:e,cod_cliente:n,cod_cuenta:t,descripcion_estado:"Descartado",estado:1})}function i(e){return l.Z.post(`${a}/addComment`,e)}function r(e){return l.Z.post(`${a}/allNotifications`,e)}},3512:function(e,t,n){n.d(t,{M:function(){return s},y:function(){return o}});var l=n(2492),a=n.n(l);function o(e,t,n,l){a().fire({icon:t,html:`<p class="text-lg font-semibold">${n}</p>\n          <p class="text-base">${l}</p>`,showCancelButton:!1,confirmButtonText:"Aceptar",confirmButtonColor:"#006cac",reverseButtons:!0}).then((t=>{t.isConfirmed&&e()}))}function s(e,t,n){a().fire({icon:"question",html:`<p class="text-lg">${t}</p>`,showCancelButton:!0,reverseButtons:!0,confirmButtonText:n,confirmButtonColor:"#3b82f6",cancelButtonText:"Cancelar"}).then((t=>{t.isConfirmed&&e()}))}},7127:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var l=n(3396),a=n(7139),o=n(7312),s=n(5039),i=n(1888),r=n(1222),c=n(3601),d=n(4108),u=n(3446),p=n(6191),v=n(4580),m=n(3289),f=n(7325),g=n(165);const h=e=>((0,l.dD)("data-v-1cb03a4e"),e=e(),(0,l.Cn)(),e),x=h((()=>(0,l._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Eventos pendientes",-1))),y={class:"w-full rounded-lg bg-white shadow-md"},b={class:"p-5"},_={class:"rounded-lg overflow-hidden shadow mb-3"},w={class:"flex items-center"},C=h((()=>(0,l._)("span",{class:"pl-5"},"Seleccionar columnas",-1))),V={class:"lg:grid lg:grid-cols-10 md:grid md:grid-cols-6 grid grid-cols-3 gap-1"},k={class:"text-xs"},B={class:"w-full flex justify-between pt-4"},S={class:"lg:w-[30%] pb-4 w-full"};function E(e,t,n,h,E,W){const A=(0,l.up)("TableEventsVue");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[x,(0,l._)("div",y,[(0,l._)("div",b,[(0,l._)("div",_,[(0,l.Wm)(d.Vc,{variant:"accordion"},{default:(0,l.w5)((()=>[(0,l.Wm)(u.M,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p.V,{color:"indigo-lighten-2",class:"rounded-md"},{default:(0,l.w5)((()=>[(0,l._)("div",w,[(0,l.Wm)(m.t,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-filter-menu")])),_:1}),C])])),_:1}),(0,l.Wm)(v.H,{class:"rounded-md"},{default:(0,l.w5)((()=>[(0,l._)("div",V,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.listedHeaders.filter((e=>"actions"!=e.key)),(e=>((0,l.wg)(),(0,l.j4)(r.x,{modelValue:h.selectedColumns,"onUpdate:modelValue":t[0]||(t[0]=e=>h.selectedColumns=e),color:"blue",value:e.key,"hide-details":"",key:e.key},{label:(0,l.w5)((()=>[(0,l._)("span",k,(0,a.zw)(e.title),1)])),_:2},1032,["modelValue","value"])))),128))])])),_:1})])),_:1})])),_:1})]),(0,l._)("div",B,[(0,l._)("div",S,[(0,l.Wm)(g.h,{clearable:"",color:"indigo",modelValue:h.search,"onUpdate:modelValue":t[1]||(t[1]=e=>h.search=e),"prepend-inner-icon":"mdi-magnify",label:"Buscar","hide-details":"",density:"compact",variant:"outlined"},null,8,["modelValue"])]),(0,l._)("div",null,[(0,l.Wm)(o.T,{color:"red",size:"small",onClick:h.onMassDiscard},{default:(0,l.w5)((()=>[(0,l.Wm)(m.t,null,{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-bell-remove")])),_:1}),(0,l.Uk)(" Descarte masivo")])),_:1},8,["onClick"])])]),(0,l.Wm)(A,{desserts:h.pendingEvents,listedHeaders:h.listedHeadersFilter,search:h.search,onSelectedEvents:h.onSelectedEvents},null,8,["desserts","listedHeaders","search","onSelectedEvents"])])])]),(0,l.Wm)(c.B,{modelValue:h.dialogLoader,"onUpdate:modelValue":t[2]||(t[2]=e=>h.dialogLoader=e),scrim:!1,persistent:"",width:"auto"},{default:(0,l.w5)((()=>[(0,l.Wm)(s._,{color:"blue"},{default:(0,l.w5)((()=>[(0,l.Wm)(i.Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Construyendo "),(0,l.Wm)(f.K,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}n(1719);var W=n(678);const A={class:"flex justify-center"},T={class:"flex gap-1"},H=["onClick"],I=["src"],D={key:0},F={key:1};function U(e,t,n,s,i,r){const c=(0,l.up)("v-data-table");return(0,l.wg)(),(0,l.j4)(c,{"item-value":"ID",modelValue:s.selected,"onUpdate:modelValue":t[0]||(t[0]=e=>s.selected=e),items:n.desserts,headers:n.listedHeaders,"sort-by":[{key:"fecha_actual",order:"desc"}],"show-select":"",class:"text-sm table_events",search:n.search},{["item.fecha"]:(0,l.w5)((({item:e})=>[(0,l._)("span",null,(0,a.zw)(e.fecha)+" "+(0,a.zw)(e.hora),1)])),["item.prioridad"]:(0,l.w5)((({item:e})=>[(0,l._)("div",A,[(0,l._)("div",{class:(0,a.C_)(["h-5 w-5 rounded-full mr-2",{"bg-orange-400":"URGENTE"===e.prioridad,"bg-red-400":"CRITICO"===e.prioridad,"bg-blue-400":"REGULAR"===e.prioridad}])},null,2)])])),["item.actions"]:(0,l.w5)((({item:e})=>[(0,l._)("div",T,[(0,l._)("span",{onClick:t=>s.editItem(e)},[(0,l.Wm)(o.T,{size:"small",variant:"text",color:"green"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:i.imgAttendedIcon,alt:"",class:"w-7 h-6"},null,8,I)])),_:1}),(0,l.Wm)(W.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("Atender")])),_:1})],8,H),(0,l._)("div",null,[""==e.link_video&&""==e.link_imagen?((0,l.wg)(),(0,l.iD)("div",D,[(0,l.Wm)(o.T,{size:"x-small",icon:"mdi-video",color:"grey"}),(0,l.Wm)(W.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("No hay evidencias")])),_:1})])):((0,l.wg)(),(0,l.iD)("div",F,[(0,l.Wm)(o.T,{icon:"mdi-video",size:"x-small",color:"indigo-lighten-2",onClick:t=>s.seeEvidence(e.link_imagen,e.link_video)},null,8,["onClick"]),(0,l.Wm)(W.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("Ver evidencias")])),_:1})]))])])])),_:2},1032,["modelValue","items","headers","search"])}n(560);var P=n(7357),Z=n.p+"img/icon_atended.79c24195.png",$=n(4870),L=n(5470),N=n(2483),j=n(2492),R=n.n(j),z=n(4239),Y={props:{search:String,desserts:Array,listedHeaders:Array},data(){return{imgAttendedIcon:Z}},components:{VDataTable:L.y_},emits:["selected-events"],setup(e,{emit:t}){const n=(0,$.iH)([]),a=(0,N.tv)(),o=(e,t)=>{const n=()=>{R().fire({html:`<img src="${e}" alt="" class=w-full>`,showCancelButton:!0,cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar",confirmButtonColor:"#6D68B8",reverseButtons:!0}).then((n=>{n.isConfirmed||n.dismiss===R().DismissReason.cancel&&o(e,t)}))},l=()=>{R().fire({html:`\n              <div class="flex justify-center">\n                <video width="400" height="320" controls>\n                  <source src="${t}" type="video/mp4">\n                </video>\n              </div>\n              `,showCloseButton:!0,showCancelButton:!0,cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar",confirmButtonColor:"#6D68B8",reverseButtons:!0}).then((n=>{n.isConfirmed||n.dismiss===R().DismissReason.cancel&&o(e,t)}))};R().fire({html:`<p class="text-xl font-bold pt-1 text-gray-500">Ver evidencias disponibles</p>\n        <div class="w-full flex justify-center">\n        <img src="${P}" alt="" class=w-[50%]>\n        </div>\n        `,showCancelButton:!0,confirmButtonText:"Ver imagen",cancelButtonText:"Ver video",reverseButtons:!0,focusConfirm:!1,confirmButtonColor:"#6D68B8",focusCancel:!1}).then((a=>{a.isConfirmed?""!==e?n():R().fire({html:'<p class="pt-4">No hay imagen disponible</p>',showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#6D68B8",cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar"}).then((n=>{n.isConfirmed||n.dismiss===R().DismissReason.cancel&&o(e,t)})):a.dismiss===R().DismissReason.cancel&&(""!==t?l():R().fire({html:'<p class="pt-4">No hay video disponible</p>',showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#6D68B8",cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar"}).then((n=>{n.isConfirmed||n.dismiss===R().DismissReason.cancel&&o(e,t)})))}))};(0,l.YP)((()=>n.value),(e=>{t("selected-events",{selected:e})}));const s=e=>{z.Z.commit("setEventAtended",e),a.push("/atenderevento")};return{selected:n,seeEvidence:o,editItem:s}}},G=n(89);const M=(0,G.Z)(Y,[["render",U]]);var q=M,O=n(9398),Q=n(3512),K={name:"ListedEarringsView",components:{TableEventsVue:q},setup(){const e=(0,$.iH)(""),t=(0,$.iH)([]),n=(0,$.iH)([]),a=(0,$.iH)(!1),o=(0,$.iH)(z.Z.state.selectedColumnsNotifications),s=(0,$.iH)([{title:"Desc. evento",align:"start",key:"descripcion_evento",sortable:!0},{title:"Placa",align:"start",key:"placa",sortable:!0},{title:"Conductor",align:"start",key:"conductor",sortable:!0},{title:"Flota",align:"start",key:"fleet_name",sortable:!0},{title:"Fecha evento",align:"start",key:"fecha",sortable:!0},{title:"Fecha recepción",align:"start",key:"fecha_actual",sortable:!0},{title:"Velocidad",align:"start",key:"velocidad",sortable:!0},{title:"Dirección",align:"start",key:"direccion",sortable:!0},{title:"Estado",align:"start",key:"descripcion_estado",sortable:!0},{title:"Última acción",align:"start",key:"fecha_ultima_accion",sortable:!0},{title:"Prioridad",align:"center",key:"prioridad",sortable:!0},{title:"Acciones",align:"start",key:"actions",sortable:!0}]),i=(0,$.iH)([]),r=()=>{"All"===z.Z.state.codclienteAdmin&&(s.value.unshift({title:"Sigla cliente",align:"start",key:"sigla_cliente",sortable:!0}),o.value.unshift("sigla_cliente"),"0000"===z.Z.state.codcuenta&&(s.value.unshift({title:"Sigla cuenta",align:"start",key:"sigla_cuenta",sortable:!0}),o.value.unshift("sigla_cuenta"),o.value=o.value.filter((e=>"actions"!==e&&"fecha_ultima_accion"!==e))))},c=async()=>{const e=await(0,O.Ck)(z.Z.state.codcuenta,z.Z.state.codclienteAdmin,z.Z.state.username,z.Z.state.codregla);n.value=e.data.data?e.data.data.filter((e=>"Sin Atender"===e.descripcion_estado||"En Gestion"===e.descripcion_estado)):[]};(0,l.bv)((async()=>{a.value=!0,r(),await c(),d(),a.value=!1})),setInterval((()=>{c()}),15e3);const d=()=>{i.value=s.value.filter((e=>z.Z.state.selectedColumnsNotifications.includes(e.key)))};(0,l.YP)((()=>o.value),(()=>{z.Z.commit("setSelectedColumnsNotifications",o.value),d()}));const u=e=>{t.value=e.selected},p=()=>{t.value.length>0?(0,Q.M)((async()=>{(0,O.AV)(t.value,z.Z.state.codcuenta,z.Z.state.codclienteAdmin).then((()=>{(0,Q.y)((()=>{c()}),"success","Logrado","Se ha descartado los eventos correctamente")})).catch((()=>{(0,Q.y)((()=>{c()}),"error","Hubo un error","No se logro descartar los eventos")}))}),"¿Estás seguro de realizar el descarte de los eventos seleccionados?","Aceptar"):(0,Q.y)((()=>{}),"warning","Advertencia","No hay eventos seleccionados para el descarte masivo")};return{onMassDiscard:p,onSelectedEvents:u,dialogLoader:a,listedHeadersFilter:i,selectedColumns:o,pendingEvents:n,listedHeaders:s,search:e}}};const J=(0,G.Z)(K,[["render",E],["__scopeId","data-v-1cb03a4e"]]);var X=J},7357:function(e,t,n){e.exports=n.p+"img/evidencias.648484c3.jpg"},1222:function(e,t,n){n.d(t,{x:function(){return m}});var l=n(3396),a=n(1959),o=n(9114),s=n(8969),i=n(8717),r=n(3766),c=n(131),d=n(1107),u=n(7514),p=n(9888);const v=(0,r.U)({...(0,o.c)(),...(0,c.CE)((0,a.w)(),["inline"])},"VCheckbox"),m=(0,d.ev)()({name:"VCheckbox",inheritAttrs:!1,props:v(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,t){let{attrs:n,slots:r}=t;const d=(0,i.z)(e,"modelValue"),{isFocused:v,focus:m,blur:f}=(0,s.K)(e),g=(0,u.sq)(),h=(0,l.Fl)((()=>e.id||`checkbox-${g}`));return(0,p.L)((()=>{const[t,s]=(0,c.An)(n),[i,u]=o.q.filterProps(e),[p,g]=a.p.filterProps(e);return(0,l.Wm)(o.q,(0,l.dG)({class:["v-checkbox",e.class]},t,i,{modelValue:d.value,"onUpdate:modelValue":e=>d.value=e,id:h.value,focused:v.value,style:e.style}),{...r,default:e=>{let{id:t,messagesId:n,isDisabled:o,isReadonly:i}=e;return(0,l.Wm)(a.p,(0,l.dG)(p,{id:t.value,"aria-describedby":n.value,disabled:o.value,readonly:i.value},s,{modelValue:d.value,"onUpdate:modelValue":e=>d.value=e,onFocus:m,onBlur:f}),r)}})})),{}}})},3446:function(e,t,n){n.d(t,{M:function(){return b}});n(560);var l=n(3396),a=n(4108),o=n(4580),s=n(6191),i=n(2370),r=n(9166),c=n(6107),d=n(2465),u=n(1970),p=n(1136),v=n(4231),m=n(1138),f=n(4870),g=n(3766),h=n(1107),x=n(9888);const y=(0,g.U)({title:String,text:String,bgColor:String,...(0,r.l)(),...(0,d.c)(),...(0,u.YQ)(),...(0,p.H)(),...(0,v.I)(),...(0,m.Q)(),...(0,s.w)()},"VExpansionPanel"),b=(0,h.ev)()({name:"VExpansionPanel",props:y(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const r=(0,u.Yt)(e,a.jS),{backgroundColorClasses:p,backgroundColorStyles:m}=(0,i.Y5)(e,"bgColor"),{elevationClasses:g}=(0,d.Y)(e),{roundedClasses:h}=(0,v.b)(e),y=(0,l.Fl)((()=>r?.disabled.value||e.disabled)),b=(0,l.Fl)((()=>r.group.items.value.reduce(((e,t,n)=>(r.group.selected.value.includes(t.id)&&e.push(n),e)),[]))),_=(0,l.Fl)((()=>{const e=r.group.items.value.findIndex((e=>e.id===r.id));return!r.isSelected.value&&b.value.some((t=>t-e===1))})),w=(0,l.Fl)((()=>{const e=r.group.items.value.findIndex((e=>e.id===r.id));return!r.isSelected.value&&b.value.some((t=>t-e===-1))}));return(0,l.JJ)(a.jS,r),(0,c.AF)({VExpansionPanelText:{eager:(0,f.Vh)(e,"eager")}}),(0,x.L)((()=>{const t=!(!n.text&&!e.text),a=!(!n.title&&!e.title);return(0,l.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":r.isSelected.value,"v-expansion-panel--before-active":_.value,"v-expansion-panel--after-active":w.value,"v-expansion-panel--disabled":y.value},h.value,p.value,e.class],style:[m.value,e.style]},{default:()=>[(0,l.Wm)("div",{class:["v-expansion-panel__shadow",...g.value]},null),a&&(0,l.Wm)(s.V,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&(0,l.Wm)(o.H,{key:"text"},{default:()=>[n.text?n.text():e.text]}),n.default?.()]})})),{}}})},4580:function(e,t,n){n.d(t,{H:function(){return v}});var l=n(3396),a=n(9242),o=n(4108),s=n(8952),i=n(9166),r=n(1136),c=n(3766),d=n(1107),u=n(9888);const p=(0,c.U)({...(0,i.l)(),...(0,r.H)()},"VExpansionPanelText"),v=(0,d.ev)()({name:"VExpansionPanelText",props:p(),setup(e,t){let{slots:n}=t;const i=(0,l.f3)(o.jS);if(!i)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:c,onAfterLeave:d}=(0,r.l)(e,i.isSelected);return(0,u.L)((()=>(0,l.Wm)(s.Fx,{onAfterLeave:d},{default:()=>[(0,l.wy)((0,l.Wm)("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&c.value&&(0,l.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[n.default?.()])]),[[a.F8,i.isSelected.value]])]}))),{}}})},6191:function(e,t,n){n.d(t,{V:function(){return m},w:function(){return v}});var l=n(3396),a=n(4108),o=n(3289),s=n(2370),i=n(9166),r=n(4960),c=n(3824),d=n(3766),u=n(1107),p=n(9888);const v=(0,d.U)({color:String,expandIcon:{type:r.lE,default:"$expand"},collapseIcon:{type:r.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...(0,i.l)()},"VExpansionPanelTitle"),m=(0,u.ev)()({name:"VExpansionPanelTitle",directives:{Ripple:c.H},props:v(),setup(e,t){let{slots:n}=t;const i=(0,l.f3)(a.jS);if(!i)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=(0,s.Y5)(e,"color"),d=(0,l.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:i.disabled.value,expanded:i.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,p.L)((()=>(0,l.wy)((0,l.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":i.isSelected.value},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:i.disabled.value?-1:void 0,disabled:i.disabled.value,"aria-expanded":i.isSelected.value,onClick:e.readonly?void 0:i.toggle},[(0,l.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),n.default?.(d.value),!e.hideActions&&(0,l.Wm)("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):(0,l.Wm)(o.t,{icon:i.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,l.Q2)("ripple"),e.ripple]]))),{}}})},4108:function(e,t,n){n.d(t,{jS:function(){return v},Vc:function(){return g}});var l=n(3396),a=n(9166),o=n(6107),s=n(1970),i=n(1138),r=n(5935),c=n(4870),d=n(3766),u=n(1107),p=n(9888);const v=Symbol.for("vuetify:v-expansion-panel"),m=["default","accordion","inset","popout"],f=(0,d.U)({color:String,variant:{type:String,default:"default",validator:e=>m.includes(e)},readonly:Boolean,...(0,a.l)(),...(0,s.k4)(),...(0,i.Q)(),...(0,r.x$)()},"VExpansionPanels"),g=(0,u.ev)()({name:"VExpansionPanels",props:f(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;(0,s._v)(e,v);const{themeClasses:a}=(0,r.ER)(e),i=(0,l.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,o.AF)({VExpansionPanel:{color:(0,c.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,c.Vh)(e,"readonly")}}),(0,p.L)((()=>(0,l.Wm)(e.tag,{class:["v-expansion-panels",a.value,i.value,e.class],style:e.style},n))),{}}})},678:function(e,t,n){n.d(t,{N:function(){return f}});var l=n(3396),a=n(5164),o=n(3185),s=n(8717),i=n(5975),r=n(4870),c=n(3766),d=n(131),u=n(1107),p=n(7514),v=n(9888);const m=(0,c.U)({id:String,text:String,...(0,d.CE)((0,a.B)({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),f=(0,u.ev)()({name:"VTooltip",props:m(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=(0,s.z)(e,"modelValue"),{scopeId:d}=(0,i.a)(),u=(0,p.sq)(),m=(0,l.Fl)((()=>e.id||`v-tooltip-${u}`)),f=(0,r.iH)(),g=(0,l.Fl)((()=>e.location.split(" ").length>1?e.location:e.location+" center")),h=(0,l.Fl)((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),x=(0,l.Fl)((()=>e.transition?e.transition:c.value?"scale-transition":"fade-transition")),y=(0,l.Fl)((()=>(0,l.dG)({"aria-describedby":m.value},e.activatorProps)));return(0,v.L)((()=>{const[t]=a.y.filterProps(e);return(0,l.Wm)(a.y,(0,l.dG)({ref:f,class:["v-tooltip",e.class],style:e.style,id:m.value},t,{modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,transition:x.value,absolute:!0,location:g.value,origin:h.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},d),{activator:n.activator,default:function(){for(var t=arguments.length,l=new Array(t),a=0;a<t;a++)l[a]=arguments[a];return n.default?.(...l)??e.text}})})),(0,o.F)({},f)}})}}]);
//# sourceMappingURL=543.4b8d9b0e.js.map