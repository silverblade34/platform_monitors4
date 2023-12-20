"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[559],{9398:function(e,t,n){n.d(t,{AV:function(){return s},Ck:function(){return a},lA:function(){return r},pt:function(){return l}});var i=n(1076);const o="http://67.205.164.216:3000/api/v1";function a(e,t,n,a){return i.Z.post(`${o}/notifications/Account`,{cod_cuenta:e,cod_cliente:t,usuario:n,codigo:a})}function s(e,t,n){return i.Z.post(`${o}/massiveDiscard`,{ids:e,cod_cliente:n,cod_cuenta:t,descripcion_estado:"Descartado",estado:1})}function l(e){return i.Z.post(`${o}/addComment`,e)}function r(e){return i.Z.post(`${o}/allNotifications`,e)}},8935:function(e,t,n){n.d(t,{Z:function(){return y}});var i=n(3396),o=n(7139),a=n(7312),s=n(678);const l={class:"flex justify-center"},r={class:"flex gap-1 w-full justify-center"},c={key:0},d={key:1};function u(e,t,n,u,m,f){const p=(0,i.up)("v-data-table");return(0,i.wg)(),(0,i.j4)(p,{items:n.desserts,headers:n.listedHeaders,"sort-by":[{key:"fecha_actual",order:"desc"}],class:"text-sm table_events",search:n.search},{["item.fecha"]:(0,i.w5)((({item:e})=>[(0,i._)("span",null,(0,o.zw)(e.fecha)+" "+(0,o.zw)(e.hora),1)])),["item.prioridad"]:(0,i.w5)((({item:e})=>[(0,i._)("div",l,[(0,i._)("div",{class:(0,o.C_)(["h-5 w-5 rounded-full mr-2",{"bg-orange-300":"URGENTE"===e.prioridad,"bg-red-300":"CRITICO"===e.prioridad,"bg-blue-300":"REGULAR"===e.prioridad}])},null,2)])])),["item.evidence"]:(0,i.w5)((({item:e})=>[(0,i._)("div",r,[""==e.link_video&&""==e.link_imagen?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(a.T,{size:"x-small",icon:"mdi-video",color:"grey"}),(0,i.Wm)(s.N,{activator:"parent",location:"top"},{default:(0,i.w5)((()=>[(0,i.Uk)("No hay evidencias")])),_:1})])):((0,i.wg)(),(0,i.iD)("div",d,[(0,i.Wm)(a.T,{icon:"mdi-video",size:"x-small",color:"indigo-lighten-2",onClick:t=>u.seeEvidence(e.link_imagen,e.link_video)},null,8,["onClick"]),(0,i.Wm)(s.N,{activator:"parent",location:"top"},{default:(0,i.w5)((()=>[(0,i.Uk)("Ver evidencias")])),_:1})]))])])),_:2},1032,["items","headers","search"])}var m=n(5470),f=n(7357),p=n(2492),v=n.n(p),g={props:{search:String,desserts:Array,listedHeaders:Array},components:{VDataTable:m.y_},setup(){const e=(t,n)=>{const i=()=>{v().fire({html:`<img src="${t}" alt="" class=w-full>`,showCancelButton:!0,cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar",confirmButtonColor:"#6D68B8",reverseButtons:!0}).then((i=>{i.isConfirmed||i.dismiss===v().DismissReason.cancel&&e(t,n)}))},o=()=>{v().fire({html:`\n              <div class="flex justify-center">\n                <video width="400" height="320" controls>\n                  <source src="${n}" type="video/mp4">\n                </video>\n              </div>\n              `,showCloseButton:!0,showCancelButton:!0,cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar",confirmButtonColor:"#6D68B8",reverseButtons:!0}).then((i=>{i.isConfirmed||i.dismiss===v().DismissReason.cancel&&e(t,n)}))};v().fire({html:`<p class="text-xl font-bold pt-1 text-gray-500">Ver evidencias disponibles</p>\n        <div class="w-full flex justify-center">\n        <img src="${f}" alt="" class=w-[50%]>\n        </div>\n        `,showCancelButton:!0,confirmButtonText:"Ver imagen",cancelButtonText:"Ver video",reverseButtons:!0,focusConfirm:!1,confirmButtonColor:"#6D68B8",focusCancel:!1}).then((a=>{a.isConfirmed?""!==t?i():v().fire({html:'<p class="pt-4">No hay imagen disponible</p>',showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#6D68B8",cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar"}).then((i=>{i.isConfirmed||i.dismiss===v().DismissReason.cancel&&e(t,n)})):a.dismiss===v().DismissReason.cancel&&(""!==n?o():v().fire({html:'<p class="pt-4">No hay video disponible</p>',showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#6D68B8",cancelButtonText:"Volver al menú",confirmButtonText:"Cerrar"}).then((i=>{i.isConfirmed||i.dismiss===v().DismissReason.cancel&&e(t,n)})))}))};return{seeEvidence:e}}},h=n(89);const b=(0,h.Z)(g,[["render",u]]);var y=b},3559:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var i=n(3396),o=n(5039),a=n(1888),s=n(3601),l=n(7325),r=n(165);const c=(0,i._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Eventos confirmados",-1),d={class:"w-full rounded-lg bg-white shadow-md p-5"},u={class:"w-full flex justify-between pt-4"},m={class:"lg:w-[30%] pb-4 w-full"};function f(e,t,n,f,p,v){const g=(0,i.up)("SimpleEventsTableVue");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[c,(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("div",m,[(0,i.Wm)(r.h,{clearable:"",color:"indigo",modelValue:f.search,"onUpdate:modelValue":t[0]||(t[0]=e=>f.search=e),"prepend-inner-icon":"mdi-magnify",label:"Buscar","hide-details":"",density:"compact",variant:"outlined"},null,8,["modelValue"])])]),(0,i.Wm)(g,{desserts:f.confirmedEvents,listedHeaders:f.listedHeaders,search:f.search},null,8,["desserts","listedHeaders","search"])])]),(0,i.Wm)(s.B,{modelValue:f.dialogLoader,"onUpdate:modelValue":t[1]||(t[1]=e=>f.dialogLoader=e),scrim:!1,persistent:"",width:"auto"},{default:(0,i.w5)((()=>[(0,i.Wm)(o._,{color:"blue"},{default:(0,i.w5)((()=>[(0,i.Wm)(a.Z,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Construyendo "),(0,i.Wm)(l.K,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var p=n(9398),v=n(8935),g=n(4870),h=n(4239),b={components:{SimpleEventsTableVue:v.Z},setup(){const e=(0,g.iH)(""),t=(0,g.iH)([]),n=(0,g.iH)(!1),o=(0,g.iH)([{title:"Codigo evento",align:"start",key:"cod_evento",sortable:!0},{title:"Placa",align:"start",key:"placa",sortable:!0},{title:"Conductor",align:"start",key:"conductor",sortable:!0},{title:"Fecha evento",align:"start",key:"fecha",sortable:!0},{title:"Fecha recepción",align:"start",key:"fecha_actual",sortable:!0},{title:"Velocidad",align:"start",key:"velocidad",sortable:!0},{title:"Dirección",align:"start",key:"direccion",sortable:!0},{title:"Estado",align:"start",key:"descripcion_estado",sortable:!0},{title:"Última acción",align:"start",key:"fecha_ultima_accion",sortable:!0},{title:"Prioridad",align:"center",key:"prioridad",sortable:!0},{title:"Evidencias",align:"center",key:"evidence",sortable:!0}]);(0,i.bv)((async()=>{n.value=!0,await a(),n.value=!1}));const a=async()=>{const e=await(0,p.Ck)(h.Z.state.codcuenta,h.Z.state.codclienteAdmin,h.Z.state.username,h.Z.state.codregla);t.value=e.data.data?e.data.data.filter((e=>"Confirmado"===e.descripcion_estado)):[]};return setInterval((()=>{a()}),15e3),{dialogLoader:n,listedHeaders:o,confirmedEvents:t,search:e}}},y=n(89);const w=(0,y.Z)(b,[["render",f]]);var _=w},7357:function(e,t,n){e.exports=n.p+"img/evidencias.648484c3.jpg"},678:function(e,t,n){n.d(t,{N:function(){return v}});var i=n(3396),o=n(5164),a=n(3185),s=n(8717),l=n(5975),r=n(4870),c=n(3766),d=n(131),u=n(1107),m=n(7514),f=n(9888);const p=(0,c.U)({id:String,text:String,...(0,d.CE)((0,o.B)({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),v=(0,u.ev)()({name:"VTooltip",props:p(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=(0,s.z)(e,"modelValue"),{scopeId:d}=(0,l.a)(),u=(0,m.sq)(),p=(0,i.Fl)((()=>e.id||`v-tooltip-${u}`)),v=(0,r.iH)(),g=(0,i.Fl)((()=>e.location.split(" ").length>1?e.location:e.location+" center")),h=(0,i.Fl)((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),b=(0,i.Fl)((()=>e.transition?e.transition:c.value?"scale-transition":"fade-transition")),y=(0,i.Fl)((()=>(0,i.dG)({"aria-describedby":p.value},e.activatorProps)));return(0,f.L)((()=>{const[t]=o.y.filterProps(e);return(0,i.Wm)(o.y,(0,i.dG)({ref:v,class:["v-tooltip",e.class],style:e.style,id:p.value},t,{modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,transition:b.value,absolute:!0,location:g.value,origin:h.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},d),{activator:n.activator,default:function(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return n.default?.(...i)??e.text}})})),(0,a.F)({},v)}})}}]);
//# sourceMappingURL=559.099b85a4.js.map