"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[485],{9398:function(e,t,n){n.d(t,{AV:function(){return s},Ck:function(){return o},lA:function(){return r},pt:function(){return i}});var a=n(1076);const l="http://67.205.164.216:3000/api/v1";function o(e,t,n,o){return a.Z.post(`${l}/notifications/Account`,{cod_cuenta:e,cod_cliente:t,usuario:n,codigo:o})}function s(e,t,n){return a.Z.post(`${l}/massiveDiscard`,{ids:e,cod_cliente:n,cod_cuenta:t,descripcion_estado:"Descartado",estado:1})}function i(e){return a.Z.post(`${l}/addComment`,e)}function r(e){return a.Z.post(`${l}/allNotifications`,e)}},3512:function(e,t,n){n.d(t,{M:function(){return s},y:function(){return o}});var a=n(2492),l=n.n(a);function o(e,t,n,a){l().fire({icon:t,html:`<p class="text-lg font-semibold">${n}</p>\n          <p class="text-base">${a}</p>`,showCancelButton:!1,confirmButtonText:"Aceptar",confirmButtonColor:"#006cac",reverseButtons:!0}).then((t=>{t.isConfirmed&&e()}))}function s(e,t,n){l().fire({icon:"question",html:`<p class="text-lg">${t}</p>`,showCancelButton:!0,reverseButtons:!0,confirmButtonText:n,confirmButtonColor:"#3b82f6",cancelButtonText:"Cancelar"}).then((t=>{t.isConfirmed&&e()}))}},8485:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var a=n(3396),l=n(7139),o=n(7312),s=n(5039),i=n(1888),r=n(1959),c=n(9114),d=n(8969),u=n(8717),p=n(3766),v=n(131),m=n(1107),f=n(7514),g=n(9888);const h=(0,p.U)({...(0,c.c)(),...(0,v.CE)((0,r.w)(),["inline"])},"VCheckbox"),x=(0,m.ev)()({name:"VCheckbox",inheritAttrs:!1,props:h(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,t){let{attrs:n,slots:l}=t;const o=(0,u.z)(e,"modelValue"),{isFocused:s,focus:i,blur:p}=(0,d.K)(e),m=(0,f.sq)(),h=(0,a.Fl)((()=>e.id||`checkbox-${m}`));return(0,g.L)((()=>{const[t,d]=(0,v.An)(n),[u,m]=c.q.filterProps(e),[f,g]=r.p.filterProps(e);return(0,a.Wm)(c.q,(0,a.dG)({class:["v-checkbox",e.class]},t,u,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,id:h.value,focused:s.value,style:e.style}),{...l,default:e=>{let{id:t,messagesId:n,isDisabled:s,isReadonly:c}=e;return(0,a.Wm)(r.p,(0,a.dG)(f,{id:t.value,"aria-describedby":n.value,disabled:s.value,readonly:c.value},d,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,onFocus:i,onBlur:p}),l)}})})),{}}});var y=n(3601),b=n(4108),_=n(3446),w=n(6191),C=n(4580),V=n(3289),k=n(7325),B=n(165);const S=e=>((0,a.dD)("data-v-1438bcae"),e=e(),(0,a.Cn)(),e),E=S((()=>(0,a._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Eventos pendientes",-1))),W={class:"w-full rounded-lg bg-white shadow-md"},T={class:"p-5"},A={class:"rounded-lg overflow-hidden shadow mb-3"},H={class:"flex items-center"},D=S((()=>(0,a._)("span",{class:"pl-5"},"Seleccionar columnas",-1))),F={class:"lg:grid lg:grid-cols-10 md:grid md:grid-cols-6 grid grid-cols-3 gap-1"},I={class:"text-xs"},U={class:"w-full flex justify-between pt-4"},P={class:"lg:w-[30%] pb-4 w-full"};function Z(e,t,n,r,c,d){const u=(0,a.up)("TableEventsVue");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[E,(0,a._)("div",W,[(0,a._)("div",T,[(0,a._)("div",A,[(0,a.Wm)(b.Vc,{variant:"accordion"},{default:(0,a.w5)((()=>[(0,a.Wm)(_.M,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w.V,{color:"indigo-lighten-2",class:"rounded-md"},{default:(0,a.w5)((()=>[(0,a._)("div",H,[(0,a.Wm)(V.t,null,{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-filter-menu")])),_:1}),D])])),_:1}),(0,a.Wm)(C.H,{class:"rounded-md"},{default:(0,a.w5)((()=>[(0,a._)("div",F,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.listedHeaders.filter((e=>"actions"!=e.key)),(e=>((0,a.wg)(),(0,a.j4)(x,{modelValue:r.selectedColumns,"onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedColumns=e),color:"blue",value:e.key,"hide-details":"",key:e.key},{label:(0,a.w5)((()=>[(0,a._)("span",I,(0,l.zw)(e.title),1)])),_:2},1032,["modelValue","value"])))),128))])])),_:1})])),_:1})])),_:1})]),(0,a._)("div",U,[(0,a._)("div",P,[(0,a.Wm)(B.h,{clearable:"",color:"indigo",modelValue:r.search,"onUpdate:modelValue":t[1]||(t[1]=e=>r.search=e),"prepend-inner-icon":"mdi-magnify",label:"Buscar","hide-details":"",density:"compact",variant:"outlined"},null,8,["modelValue"])]),(0,a._)("div",null,[(0,a.Wm)(o.T,{color:"red",size:"small",onClick:r.onMassDiscard},{default:(0,a.w5)((()=>[(0,a.Wm)(V.t,null,{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-bell-remove")])),_:1}),(0,a.Uk)(" Descarte masivo")])),_:1},8,["onClick"])])]),(0,a.Wm)(u,{desserts:r.pendingEvents,listedHeaders:r.listedHeadersFilter,search:r.search,onSelectedEvents:r.onSelectedEvents},null,8,["desserts","listedHeaders","search","onSelectedEvents"])])])]),(0,a.Wm)(y.B,{modelValue:r.dialogLoader,"onUpdate:modelValue":t[2]||(t[2]=e=>r.dialogLoader=e),scrim:!1,persistent:"",width:"auto"},{default:(0,a.w5)((()=>[(0,a.Wm)(s._,{color:"blue"},{default:(0,a.w5)((()=>[(0,a.Wm)(i.Z,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Construyendo "),(0,a.Wm)(k.K,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}n(1719);var $=n(678);const L={class:"flex justify-center"},j={class:"flex gap-1"},R=["onClick"],N={key:0},z={key:1};function Y(e,t,n,s,i,r){const c=(0,a.up)("v-data-table");return(0,a.wg)(),(0,a.j4)(c,{"item-value":"ID",modelValue:s.selected,"onUpdate:modelValue":t[0]||(t[0]=e=>s.selected=e),items:n.desserts,headers:n.listedHeaders,"sort-by":[{key:"fecha_actual",order:"desc"}],"show-select":"",class:"text-sm table_events",search:n.search},{["item.fecha"]:(0,a.w5)((({item:e})=>[(0,a._)("span",null,(0,l.zw)(e.fecha)+" "+(0,l.zw)(e.hora),1)])),["item.prioridad"]:(0,a.w5)((({item:e})=>[(0,a._)("div",L,[(0,a._)("div",{class:(0,l.C_)(["h-5 w-5 rounded-full mr-2",{"bg-orange-400":"URGENTE"===e.prioridad,"bg-red-400":"CRITICO"===e.prioridad,"bg-blue-400":"REGULAR"===e.prioridad}])},null,2)])])),["item.actions"]:(0,a.w5)((({item:e})=>[(0,a._)("div",j,[(0,a._)("span",{onClick:t=>s.editItem(e)},[(0,a.Wm)(o.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,a.Wm)($.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Atender")])),_:1})],8,R),(0,a._)("div",null,[""==e.link_video&&""==e.link_imagen?((0,a.wg)(),(0,a.iD)("div",N,[(0,a.Wm)(o.T,{size:"x-small",icon:"mdi-video",color:"grey"}),(0,a.Wm)($.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("No hay evidencias")])),_:1})])):((0,a.wg)(),(0,a.iD)("div",z,[(0,a.Wm)(o.T,{icon:"mdi-video",size:"x-small",color:"indigo-lighten-2",onClick:t=>s.seeEvidence(e.link_imagen,e.link_video)},null,8,["onClick"]),(0,a.Wm)($.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Ver evidencias")])),_:1})]))])])])),_:2},1032,["modelValue","items","headers","search"])}n(560);var G=n(7357),M=n(4870),q=n(5470),O=n(2483),Q=n(2492),K=n.n(Q),J=n(4239),X={props:{search:String,desserts:Array,listedHeaders:Array},components:{VDataTable:q.y_},emits:["selected-events"],setup(e,{emit:t}){const n=(0,M.iH)([]),l=(0,O.tv)(),o=(e,t)=>{const n=()=>{K().fire({html:`<img src="${e}" alt="" class=w-full>`,showCancelButton:!0,cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar",confirmButtonColor:"#6D68B8",reverseButtons:!0}).then((n=>{n.isConfirmed||n.dismiss===K().DismissReason.cancel&&o(e,t)}))},a=()=>{K().fire({html:`\n              <div class="flex justify-center">\n                <video width="400" height="320" controls>\n                  <source src="${t}" type="video/mp4">\n                </video>\n              </div>\n              `,showCloseButton:!0,showCancelButton:!0,cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar",confirmButtonColor:"#6D68B8",reverseButtons:!0}).then((n=>{n.isConfirmed||n.dismiss===K().DismissReason.cancel&&o(e,t)}))};K().fire({html:`<p class="text-xl font-bold pt-1 text-gray-500">Ver evidencias disponibles</p>\n        <div class="w-full flex justify-center">\n        <img src="${G}" alt="" class=w-[50%]>\n        </div>\n        `,showCancelButton:!0,confirmButtonText:"Ver imagen",cancelButtonText:"Ver video",reverseButtons:!0,focusConfirm:!1,confirmButtonColor:"#6D68B8",focusCancel:!1}).then((l=>{l.isConfirmed?""!==e?n():K().fire({html:'<p class="pt-4">No hay imagen disponible</p>',showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#6D68B8",cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar"}).then((n=>{n.isConfirmed||n.dismiss===K().DismissReason.cancel&&o(e,t)})):l.dismiss===K().DismissReason.cancel&&(""!==t?a():K().fire({html:'<p class="pt-4">No hay video disponible</p>',showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#6D68B8",cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar"}).then((n=>{n.isConfirmed||n.dismiss===K().DismissReason.cancel&&o(e,t)})))}))};(0,a.YP)((()=>n.value),(e=>{t("selected-events",{selected:e})}));const s=e=>{J.Z.commit("setEventAtended",e),l.push("/atenderevento")};return{selected:n,seeEvidence:o,editItem:s}}},ee=n(89);const te=(0,ee.Z)(X,[["render",Y]]);var ne=te,ae=n(9398),le=n(3512),oe={name:"ListedEarringsView",components:{TableEventsVue:ne},setup(){const e=(0,M.iH)(""),t=(0,M.iH)([]),n=(0,M.iH)([]),l=(0,M.iH)(!1),o=(0,M.iH)(["cod_evento","placa","conductor","fleet_name","fecha","fecha_actual","velocidad","direccion","descripcion_estado","fecha_ultima_accion","prioridad","actions"]),s=(0,M.iH)([{title:"Codigo evento",align:"start",key:"cod_evento",sortable:!0},{title:"Placa",align:"start",key:"placa",sortable:!0},{title:"Conductor",align:"start",key:"conductor",sortable:!0},{title:"Flota",align:"start",key:"fleet_name",sortable:!0},{title:"Fecha evento",align:"start",key:"fecha",sortable:!0},{title:"Fecha recepción",align:"start",key:"fecha_actual",sortable:!0},{title:"Velocidad",align:"start",key:"velocidad",sortable:!0},{title:"Dirección",align:"start",key:"direccion",sortable:!0},{title:"Estado",align:"start",key:"descripcion_estado",sortable:!0},{title:"Última acción",align:"start",key:"fecha_ultima_accion",sortable:!0},{title:"Prioridad",align:"center",key:"prioridad",sortable:!0},{title:"Acciones",align:"start",key:"actions",sortable:!0}]),i=(0,M.iH)([]),r=()=>{"All"===J.Z.state.codclienteAdmin&&(s.value.unshift({title:"Sigla cliente",align:"start",key:"sigla_cliente",sortable:!0}),o.value.unshift("sigla_cliente"),"0000"===J.Z.state.codcuenta&&(s.value.unshift({title:"Sigla cuenta",align:"start",key:"sigla_cuenta",sortable:!0}),o.value.unshift("sigla_cuenta"),o.value=o.value.filter((e=>"actions"!==e&&"fecha_ultima_accion"!==e))))},c=async()=>{const e=await(0,ae.Ck)(J.Z.state.codcuenta,J.Z.state.codclienteAdmin,J.Z.state.username,J.Z.state.codregla);n.value=e.data.data?e.data.data.filter((e=>"Sin Atender"===e.descripcion_estado||"En Gestion"===e.descripcion_estado)):[]};(0,a.bv)((async()=>{l.value=!0,r(),await c(),d(),l.value=!1})),setInterval((()=>{c()}),15e3);const d=()=>{i.value=s.value.filter((e=>o.value.includes(e.key)))};(0,a.YP)((()=>o.value),(()=>{d()}));const u=e=>{t.value=e.selected},p=()=>{t.value.length>0?(0,le.M)((async()=>{(0,ae.AV)(t.value,J.Z.state.codcuenta,J.Z.state.codclienteAdmin).then((()=>{(0,le.y)((()=>{c()}),"success","Logrado","Se ha descartado los eventos correctamente")})).catch((()=>{(0,le.y)((()=>{c()}),"error","Hubo un error","No se logro descartar los eventos")}))}),"¿Estás seguro de realizar el descarte de los eventos seleccionados?","Aceptar"):(0,le.y)((()=>{}),"warning","Advertencia","No hay eventos seleccionados para el descarte masivo")};return{onMassDiscard:p,onSelectedEvents:u,dialogLoader:l,listedHeadersFilter:i,selectedColumns:o,pendingEvents:n,listedHeaders:s,search:e}}};const se=(0,ee.Z)(oe,[["render",Z],["__scopeId","data-v-1438bcae"]]);var ie=se},7357:function(e,t,n){e.exports=n.p+"img/evidencias.648484c3.jpg"},3446:function(e,t,n){n.d(t,{M:function(){return b}});n(560);var a=n(3396),l=n(4108),o=n(4580),s=n(6191),i=n(2370),r=n(9166),c=n(6107),d=n(2465),u=n(1970),p=n(1136),v=n(4231),m=n(1138),f=n(4870),g=n(3766),h=n(1107),x=n(9888);const y=(0,g.U)({title:String,text:String,bgColor:String,...(0,r.l)(),...(0,d.c)(),...(0,u.YQ)(),...(0,p.H)(),...(0,v.I)(),...(0,m.Q)(),...(0,s.w)()},"VExpansionPanel"),b=(0,h.ev)()({name:"VExpansionPanel",props:y(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const r=(0,u.Yt)(e,l.jS),{backgroundColorClasses:p,backgroundColorStyles:m}=(0,i.Y5)(e,"bgColor"),{elevationClasses:g}=(0,d.Y)(e),{roundedClasses:h}=(0,v.b)(e),y=(0,a.Fl)((()=>r?.disabled.value||e.disabled)),b=(0,a.Fl)((()=>r.group.items.value.reduce(((e,t,n)=>(r.group.selected.value.includes(t.id)&&e.push(n),e)),[]))),_=(0,a.Fl)((()=>{const e=r.group.items.value.findIndex((e=>e.id===r.id));return!r.isSelected.value&&b.value.some((t=>t-e===1))})),w=(0,a.Fl)((()=>{const e=r.group.items.value.findIndex((e=>e.id===r.id));return!r.isSelected.value&&b.value.some((t=>t-e===-1))}));return(0,a.JJ)(l.jS,r),(0,c.AF)({VExpansionPanelText:{eager:(0,f.Vh)(e,"eager")}}),(0,x.L)((()=>{const t=!(!n.text&&!e.text),l=!(!n.title&&!e.title);return(0,a.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":r.isSelected.value,"v-expansion-panel--before-active":_.value,"v-expansion-panel--after-active":w.value,"v-expansion-panel--disabled":y.value},h.value,p.value,e.class],style:[m.value,e.style]},{default:()=>[(0,a.Wm)("div",{class:["v-expansion-panel__shadow",...g.value]},null),l&&(0,a.Wm)(s.V,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),t&&(0,a.Wm)(o.H,{key:"text"},{default:()=>[n.text?n.text():e.text]}),n.default?.()]})})),{}}})},4580:function(e,t,n){n.d(t,{H:function(){return v}});var a=n(3396),l=n(9242),o=n(4108),s=n(8952),i=n(9166),r=n(1136),c=n(3766),d=n(1107),u=n(9888);const p=(0,c.U)({...(0,i.l)(),...(0,r.H)()},"VExpansionPanelText"),v=(0,d.ev)()({name:"VExpansionPanelText",props:p(),setup(e,t){let{slots:n}=t;const i=(0,a.f3)(o.jS);if(!i)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:c,onAfterLeave:d}=(0,r.l)(e,i.isSelected);return(0,u.L)((()=>(0,a.Wm)(s.Fx,{onAfterLeave:d},{default:()=>[(0,a.wy)((0,a.Wm)("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&c.value&&(0,a.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[n.default?.()])]),[[l.F8,i.isSelected.value]])]}))),{}}})},6191:function(e,t,n){n.d(t,{V:function(){return m},w:function(){return v}});var a=n(3396),l=n(4108),o=n(3289),s=n(2370),i=n(9166),r=n(4960),c=n(3824),d=n(3766),u=n(1107),p=n(9888);const v=(0,d.U)({color:String,expandIcon:{type:r.lE,default:"$expand"},collapseIcon:{type:r.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...(0,i.l)()},"VExpansionPanelTitle"),m=(0,u.ev)()({name:"VExpansionPanelTitle",directives:{Ripple:c.H},props:v(),setup(e,t){let{slots:n}=t;const i=(0,a.f3)(l.jS);if(!i)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=(0,s.Y5)(e,"color"),d=(0,a.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:i.disabled.value,expanded:i.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,p.L)((()=>(0,a.wy)((0,a.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":i.isSelected.value},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:i.disabled.value?-1:void 0,disabled:i.disabled.value,"aria-expanded":i.isSelected.value,onClick:e.readonly?void 0:i.toggle},[(0,a.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),n.default?.(d.value),!e.hideActions&&(0,a.Wm)("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(d.value):(0,a.Wm)(o.t,{icon:i.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,a.Q2)("ripple"),e.ripple]]))),{}}})},4108:function(e,t,n){n.d(t,{jS:function(){return v},Vc:function(){return g}});var a=n(3396),l=n(9166),o=n(6107),s=n(1970),i=n(1138),r=n(5935),c=n(4870),d=n(3766),u=n(1107),p=n(9888);const v=Symbol.for("vuetify:v-expansion-panel"),m=["default","accordion","inset","popout"],f=(0,d.U)({color:String,variant:{type:String,default:"default",validator:e=>m.includes(e)},readonly:Boolean,...(0,l.l)(),...(0,s.k4)(),...(0,i.Q)(),...(0,r.x$)()},"VExpansionPanels"),g=(0,u.ev)()({name:"VExpansionPanels",props:f(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;(0,s._v)(e,v);const{themeClasses:l}=(0,r.ER)(e),i=(0,a.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,o.AF)({VExpansionPanel:{color:(0,c.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,c.Vh)(e,"readonly")}}),(0,p.L)((()=>(0,a.Wm)(e.tag,{class:["v-expansion-panels",l.value,i.value,e.class],style:e.style},n))),{}}})},678:function(e,t,n){n.d(t,{N:function(){return f}});var a=n(3396),l=n(5164),o=n(3185),s=n(8717),i=n(5975),r=n(4870),c=n(3766),d=n(131),u=n(1107),p=n(7514),v=n(9888);const m=(0,c.U)({id:String,text:String,...(0,d.CE)((0,l.B)({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),f=(0,u.ev)()({name:"VTooltip",props:m(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=(0,s.z)(e,"modelValue"),{scopeId:d}=(0,i.a)(),u=(0,p.sq)(),m=(0,a.Fl)((()=>e.id||`v-tooltip-${u}`)),f=(0,r.iH)(),g=(0,a.Fl)((()=>e.location.split(" ").length>1?e.location:e.location+" center")),h=(0,a.Fl)((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),x=(0,a.Fl)((()=>e.transition?e.transition:c.value?"scale-transition":"fade-transition")),y=(0,a.Fl)((()=>(0,a.dG)({"aria-describedby":m.value},e.activatorProps)));return(0,v.L)((()=>{const[t]=l.y.filterProps(e);return(0,a.Wm)(l.y,(0,a.dG)({ref:f,class:["v-tooltip",e.class],style:e.style,id:m.value},t,{modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,transition:x.value,absolute:!0,location:g.value,origin:h.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},d),{activator:n.activator,default:function(){for(var t=arguments.length,a=new Array(t),l=0;l<t;l++)a[l]=arguments[l];return n.default?.(...a)??e.text}})})),(0,o.F)({},f)}})}}]);
//# sourceMappingURL=485.e70d956d.js.map