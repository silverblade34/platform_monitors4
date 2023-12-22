"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[313],{5911:function(e,t,o){o.d(t,{WY:function(){return c},kQ:function(){return i},qW:function(){return l},v6:function(){return d}});var n=o(1076);const a="http://67.205.164.216:3000/api/v1";function i(e,t){return n.Z.post(`${a}/allEvents`,{cod_cuenta:e,cod_cliente:t})}function l(e){return n.Z.post(`${a}/createEvents`,e)}function d(e){return n.Z.post(`${a}/deleteEvents`,e)}function c(e){return n.Z.put(`${a}/editEvents`,e)}},5719:function(e,t,o){o.d(t,{Z:function(){return W}});var n=o(3396),a=o(7312),i=o(5039),l=o(1888),d=o(1334),c=o(3601),r=o(8521),s=o(9234),u=o(240),m=o(3104),p=o(165),v=o(1328);const _=(0,n._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Editar tipo de evento",-1);function g(e,t,o,g,f,h){return(0,n.wg)(),(0,n.j4)(c.B,{modelValue:g.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>g.dialog=e),width:"500","onClick:outside":g.cancelItem},{default:(0,n.w5)((()=>[(0,n.Wm)(i._,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v.i,null,{default:(0,n.w5)((()=>[_])),_:1}),(0,n.Wm)(l.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r.D,{cols:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(p.h,{variant:"outlined",label:"Codigo de evento","prepend-inner-icon":"mdi-qrcode",color:"indigo",modelValue:g.cod_evento,"onUpdate:modelValue":t[0]||(t[0]=e=>g.cod_evento=e),disabled:""},null,8,["modelValue"]),(0,n.Wm)(p.h,{variant:"outlined",label:"Descripción","prepend-inner-icon":"mdi-text-box",color:"indigo",modelValue:g.descripcion,"onUpdate:modelValue":t[1]||(t[1]=e=>g.descripcion=e)},null,8,["modelValue"]),(0,n.Wm)(u.rL,{"prepend-inner-icon":"mdi-priority-high",label:"Prioridad",items:["REGULAR","URGENTE","CRITICO"],variant:"outlined",class:"col-span-2",color:"indigo",modelValue:g.prioridad,"onUpdate:modelValue":t[2]||(t[2]=e=>g.prioridad=e),"hide-details":""},null,8,["modelValue"]),(0,n.Wm)(m.G,{label:"Estado",modelValue:g.estado,"onUpdate:modelValue":t[3]||(t[3]=e=>g.estado=e),color:"blue","hide-details":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(d.h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s.C),(0,n.Wm)(a.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:g.cancelItem},{default:(0,n.w5)((()=>[(0,n.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,n.Wm)(a.T,{color:"blue-lighten-1",variant:"tonal",onClick:g.editItem},{default:(0,n.w5)((()=>[(0,n.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var f=o(4870),h=o(4239),w={props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const o=(0,f.iH)(!1),a=(0,f.iH)(""),i=(0,f.iH)(""),l=(0,f.iH)(""),d=(0,f.iH)(!1);(0,n.YP)((()=>e.openModal),(e=>{o.value=e})),(0,n.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(a.value=e.item.cod_evento,i.value=e.item.descripcion,l.value=e.item.prioridad,d.value=e.item.status)}));const c=()=>{t("edit-item",{cod_cuenta:h.Z.state.codcuenta,cod_cliente:h.Z.state.codclienteAdmin,cod_evento:a.value,descripcion:i.value,fecha_creacion:e.itemEdit.item.fecha_creacion,prioridad:l.value,usuario:h.Z.state.username,status:d.value}),a.value=i.value=l.value="",d.value=!1,r()},r=()=>{t("cancel-item")};return{dialog:o,cod_evento:a,descripcion:i,prioridad:l,estado:d,editItem:c,cancelItem:r}}},E=o(89);const C=(0,E.Z)(w,[["render",g]]);var W=C},8980:function(e,t,o){o.r(t),o.d(t,{default:function(){return z}});var n=o(3396);const a={class:"flex justify-between w-full"},i=(0,n._)("div",null,[(0,n._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Tipo de eventos")],-1);function l(e,t,o,l,d,c){const r=(0,n.up)("CreateEventsVue"),s=(0,n.up)("TableEventsVue"),u=(0,n.up)("EditEventsVue");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[(0,n._)("div",a,[i,(0,n.Wm)(r,{onCreateItem:l.onCreateItem},null,8,["onCreateItem"])]),(0,n.Wm)(s,{desserts:l.listEventsData,onDeleteItem:l.onDeleteItem,onEditItem:l.onEditItem},null,8,["desserts","onDeleteItem","onEditItem"])]),(0,n.Wm)(u,{openModal:l.editDialog,itemEdit:l.editEvent,onCancelItem:t[0]||(t[0]=e=>l.editDialog=!1),onEditItem:l.onUpdateItem},null,8,["openModal","itemEdit","onEditItem"])],64)}var d=o(5911),c=o(7312),r=o(5039),s=o(1888),u=o(1334),m=o(3601),p=o(8521),v=o(9234),_=o(3289),g=o(240),f=o(165),h=o(1328);const w=(0,n._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Crear tipo de evento",-1);function E(e,t,o,a,i,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>a.dialog=!0)},{default:(0,n.w5)((()=>[(0,n.Wm)(_.t,{icon:"mdi-plus"}),(0,n.Uk)(" Crear Nuevo")])),_:1}),(0,n.Wm)(m.B,{modelValue:a.dialog,"onUpdate:modelValue":t[5]||(t[5]=e=>a.dialog=e),width:"500"},{default:(0,n.w5)((()=>[(0,n.Wm)(r._,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h.i,null,{default:(0,n.w5)((()=>[w])),_:1}),(0,n.Wm)(s.Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p.D,{cols:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(f.h,{variant:"outlined",label:"Codigo de evento","prepend-inner-icon":"mdi-qrcode",color:"indigo",modelValue:a.cod_evento,"onUpdate:modelValue":t[1]||(t[1]=e=>a.cod_evento=e)},null,8,["modelValue"]),(0,n.Wm)(f.h,{variant:"outlined",label:"Descripción","prepend-inner-icon":"mdi-text-box",color:"indigo",modelValue:a.descripcion,"onUpdate:modelValue":t[2]||(t[2]=e=>a.descripcion=e)},null,8,["modelValue"]),(0,n.Wm)(g.rL,{"prepend-inner-icon":"mdi-priority-high",label:"Prioridad",items:["REGULAR","URGENTE","CRITICO"],variant:"outlined",class:"col-span-2",color:"indigo",modelValue:a.prioridad,"onUpdate:modelValue":t[3]||(t[3]=e=>a.prioridad=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(u.h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(v.C),(0,n.Wm)(c.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[4]||(t[4]=e=>a.dialog=!1)},{default:(0,n.w5)((()=>[(0,n.Uk)(" Cancelar ")])),_:1}),(0,n.Wm)(c.T,{color:"blue-lighten-1",variant:"tonal",onClick:a.createItem},{default:(0,n.w5)((()=>[(0,n.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var C=o(4870),W={emits:["create-item"],setup(e,{emit:t}){const o=(0,C.iH)(!1),n=(0,C.iH)(""),a=(0,C.iH)(""),i=(0,C.iH)(""),l=()=>{t("create-item",{cod_evento:n.value,descripcion:a.value,prioridad:i.value}),n.value=a.value=i.value="",o.value=!1};return{dialog:o,cod_evento:n,descripcion:a,prioridad:i,createItem:l}}},I=o(89);const k=(0,I.Z)(W,[["render",E]]);var b=k,y=o(5719),V=o(7139),U=o(7103),Z=o(678);const D={class:"flex gap-1 justify-center"},x=["onClick"],T=["onClick"],H=["onClick"];function A(e,t,o,a,i,l){const d=(0,n.up)("v-data-table");return(0,n.wg)(),(0,n.j4)(d,{headers:i.headers,items:o.desserts,class:"elevation-1 text-sm rounded-lg"},{["item.status"]:(0,n.w5)((({item:e})=>[(0,n.Wm)(U.v,{color:e.status?"green":"red"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,V.zw)(e.status?"Activo":"Desactivado"),1)])),_:2},1032,["color"])])),["item.actions"]:(0,n.w5)((({item:e})=>[(0,n._)("div",D,[(0,n._)("span",{onClick:t=>a.editItem(e)},[(0,n.Wm)(c.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,n.Wm)(Z.N,{activator:"parent",location:"top"},{default:(0,n.w5)((()=>[(0,n.Uk)("Editar")])),_:1})],8,x),(0,n._)("span",{onClick:t=>a.payloadItem(e)},[(0,n.Wm)(c.T,{icon:"mdi-code-array",size:"small",variant:"text",color:"indigo"}),(0,n.Wm)(Z.N,{activator:"parent",location:"top"},{default:(0,n.w5)((()=>[(0,n.Uk)("Payload")])),_:1})],8,T),(0,n._)("span",{onClick:t=>a.deleteItem(e)},[(0,n.Wm)(c.T,{icon:"mdi-delete-empty",size:"small",variant:"text",color:"red"}),(0,n.Wm)(Z.N,{activator:"parent",location:"top"},{default:(0,n.w5)((()=>[(0,n.Uk)("Eliminar")])),_:1})],8,H)])])),_:2},1032,["headers","items"])}var N=o(5470),L=o(2492),R=o.n(L),S=o(4239),O={props:{desserts:Array},components:{VDataTable:N.y_},emits:["delete-item","edit-item"],data(){return{headers:[{title:"Código",align:"start",key:"cod_evento"},{title:"Descripción",align:"start",key:"descripcion"},{title:"Prioridad",align:"start",key:"prioridad"},{title:"Fecha creación",align:"start",key:"fecha_creacion"},{title:"Estado",align:"center",key:"status"},{title:"Acciones",key:"actions",align:"center"}]}},setup(e,{emit:t}){const o=e=>{t("edit-item",{item:e})},n=e=>{t("delete-item",{item:e})},a=e=>{console.log(e);const t=JSON.stringify({cod_cuenta:S.Z.state.codcuenta,cod_cliente:S.Z.state.codcliente,cod_evento:e.cod_evento,sigla_cuenta:e.sigla_cuenta,sigla_cliente:e.sigla_cliente,prioridad:e.prioridad,placa:"%UNIT%",origen:"Sys4Log",latitud:"%LATD%",fecha:"%POS_TIME%",fecha_actual:"%CURR_TIME%",longitud:"%LOND%",velocidad:"%SPEED%",geocerca:"%ZONE_MIN%",grupo:"Z3",direccion:"%LOCATION%"},null,2);R().fire({html:`\n                    <h1 class="text-xl font-bold text-center w-full">Payload de evento</h1>\n                    <div class="code-json mt-3">\n                        <pre><code class="language-json">${t}</code></pre>\n                    </div>\n                    `,confirmButtonText:"Cerrar"})};return{editItem:o,deleteItem:n,payloadItem:a}}};const M=(0,I.Z)(O,[["render",A]]);var P=M,j=o(3512),$={components:{CreateEventsVue:b,TableEventsVue:P,EditEventsVue:y.Z},setup(){const e=(0,C.iH)([]),t=(0,C.iH)({}),o=(0,C.iH)(!1);(0,n.bv)((async()=>{await a()}));const a=async()=>{await(0,d.kQ)(S.Z.state.codcuenta,S.Z.state.codclienteAdmin).then((t=>{e.value=t.data.data?t.data.data[0].eventos:[]}))},i=()=>{const e=new Date,t=String(e.getDate()).padStart(2,"0"),o=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear(),a=`${t}-${o}-${n}`;return a},l=e=>{""!=e.cod_evento&&""!=e.descripcion&&""!=e.prioridad?(e.cod_cliente=S.Z.state.codclienteAdmin,e.cod_cuenta=S.Z.state.codcuenta,e.usuario=S.Z.state.username,e.status=!0,e.fecha_creacion=i(),(0,d.qW)(e).then((()=>{(0,j.y)((async()=>{await a()}),"success","Logrado","Se ha creado el evento correctamente")})).catch((()=>{(0,j.y)((()=>{}),"error","Hubo un error","No se logro crear el evento")}))):(0,j.y)((()=>{}),"warning","Advertencia","Rellene todos los campos")},c=e=>{t.value=e,o.value=!0},r=e=>{(0,d.WY)(e).then((()=>{(0,j.y)((async()=>{await a()}),"success","Logrado","Se ha editado el evento correctamente")})).catch((()=>{(0,j.y)((()=>{}),"error","Hubo un error","No se logro editar el evento")}))},s=e=>{const t={cod_evento:e.item.cod_evento,cod_cuenta:S.Z.state.codcuenta,cod_cliente:S.Z.state.codclienteAdmin};(0,j.M)((async()=>{await(0,d.v6)(t).then((()=>{(0,j.y)((async()=>{await a()}),"success","Logrado","Se ha eliminado el evento correctamente")})).catch((()=>{(0,j.y)((()=>{}),"error","Hubo un error","No se logro eliminar el evento")}))}),"¿Estás seguro de eliminar este evento?","Aceptar")};return{onCreateItem:l,onUpdateItem:r,onDeleteItem:s,onEditItem:c,editEvent:t,editDialog:o,listEventsData:e}}};const Y=(0,I.Z)($,[["render",l]]);var z=Y}}]);
//# sourceMappingURL=313.6a68b735.js.map