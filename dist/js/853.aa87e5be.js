"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[853],{5911:function(e,t,n){n.d(t,{WY:function(){return d},kQ:function(){return i},qW:function(){return l},v6:function(){return r}});var a=n(1076);const o="http://67.205.164.216:3000/api/v1";function i(e,t){return a.Z.post(`${o}/allEvents`,{cod_cuenta:e,cod_cliente:t})}function l(e){return a.Z.post(`${o}/createEvents`,e)}function r(e){return a.Z.post(`${o}/deleteEvents`,e)}function d(e){return a.Z.put(`${o}/editEvents`,e)}},6365:function(e,t,n){n.d(t,{$d:function(){return i},DL:function(){return r},Ex:function(){return u},Kb:function(){return l},Zd:function(){return c},dN:function(){return d}});var a=n(1076);const o="http://67.205.164.216:3000/api/v1";function i(e){return a.Z.post(`${o}/listAccounts`,{cod_cuenta:e})}function l(e,t){return a.Z.post(`${o}/listClients`,{cod_cuenta:e,empresa:t})}function r(e){return a.Z.post(`${o}/createClient`,e)}function d(e){return a.Z.put(`${o}/editClient`,e)}function c(e){return a.Z.post(`${o}/deleteClient`,e)}function u(e){return a.Z.post(`${o}/repeatUser`,{usuario:e})}},5719:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(3396),o=n(7312),i=n(5039),l=n(1888),r=n(1334),d=n(3601),c=n(8521),u=n(9234),s=n(240),m=n(3104),p=n(165),v=n(1328);const f=(0,a._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Editar tipo de evento",-1);function _(e,t,n,_,g,w){return(0,a.wg)(),(0,a.j4)(d.B,{modelValue:_.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>_.dialog=e),width:"500","onClick:outside":_.cancelItem},{default:(0,a.w5)((()=>[(0,a.Wm)(i._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v.i,null,{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(l.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(p.h,{variant:"outlined",label:"Codigo de evento","prepend-inner-icon":"mdi-qrcode",color:"indigo",modelValue:_.cod_evento,"onUpdate:modelValue":t[0]||(t[0]=e=>_.cod_evento=e),disabled:""},null,8,["modelValue"]),(0,a.Wm)(p.h,{variant:"outlined",label:"Descripción","prepend-inner-icon":"mdi-text-box",color:"indigo",modelValue:_.descripcion,"onUpdate:modelValue":t[1]||(t[1]=e=>_.descripcion=e)},null,8,["modelValue"]),(0,a.Wm)(s.rL,{"prepend-inner-icon":"mdi-priority-high",label:"Prioridad",items:["REGULAR","URGENTE","CRITICO"],variant:"outlined",class:"col-span-2",color:"indigo",modelValue:_.prioridad,"onUpdate:modelValue":t[2]||(t[2]=e=>_.prioridad=e),"hide-details":""},null,8,["modelValue"]),(0,a.Wm)(m.G,{label:"Estado",modelValue:_.estado,"onUpdate:modelValue":t[3]||(t[3]=e=>_.estado=e),color:"blue","hide-details":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(r.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u.C),(0,a.Wm)(o.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:_.cancelItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,a.Wm)(o.T,{color:"blue-lighten-1",variant:"tonal",onClick:_.editItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var g=n(4870),w=n(4239),h={props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const n=(0,g.iH)(!1),o=(0,g.iH)(""),i=(0,g.iH)(""),l=(0,g.iH)(""),r=(0,g.iH)(!1);(0,a.YP)((()=>e.openModal),(e=>{n.value=e})),(0,a.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(o.value=e.item.cod_evento,i.value=e.item.descripcion,l.value=e.item.prioridad,r.value=e.item.status)}));const d=()=>{t("edit-item",{cod_cuenta:w.Z.state.codcuenta,cod_cliente:w.Z.state.codclienteAdmin,cod_evento:o.value,descripcion:i.value,fecha_creacion:e.itemEdit.item.fecha_creacion,prioridad:l.value,usuario:w.Z.state.username,status:r.value}),o.value=i.value=l.value="",r.value=!1,c()},c=()=>{t("cancel-item")};return{dialog:n,cod_evento:o,descripcion:i,prioridad:l,estado:r,editItem:d,cancelItem:c}}},E=n(89);const b=(0,E.Z)(h,[["render",_]]);var C=b},3613:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(3396);const o={class:"flex justify-between w-full"},i=(0,a._)("div",null,[(0,a._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Tipo de eventos")],-1);function l(e,t,n,l,r,d){const c=(0,a.up)("CreateEventsAccountsVue"),u=(0,a.up)("TableEventsAccountsVue"),s=(0,a.up)("EditEventsVue");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[(0,a._)("div",o,[i,(0,a.Wm)(c,{onCreateItem:l.onCreateItem},null,8,["onCreateItem"])]),(0,a.Wm)(u,{desserts:l.listEventsData,onDeleteItem:l.onDeleteItem,onEditItem:l.onEditItem},null,8,["desserts","onDeleteItem","onEditItem"])]),(0,a.Wm)(s,{openModal:l.editDialog,itemEdit:l.editEvent,onCancelItem:t[0]||(t[0]=e=>l.editDialog=!1),onEditItem:l.onUpdateItem},null,8,["openModal","itemEdit","onEditItem"])],64)}var r=n(5911),d=n(6365),c=n(7312),u=n(5039),s=n(1888),m=n(1334),p=n(3601),v=n(8521),f=n(9234),_=n(3289),g=n(240),w=n(165),h=n(1328);const E=(0,a._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Crear tipo de evento",-1);function b(e,t,n,o,i,l){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>o.dialog=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(_.t,{icon:"mdi-plus"}),(0,a.Uk)(" Crear Nuevo")])),_:1}),(0,a.Wm)(p.B,{modelValue:o.dialog,"onUpdate:modelValue":t[6]||(t[6]=e=>o.dialog=e),width:"500"},{default:(0,a.w5)((()=>[(0,a.Wm)(u._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h.i,null,{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(s.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(g.rL,{"prepend-inner-icon":"mdi-domain",label:"Empresa",items:o.clientsAdmin.map((e=>e.empresa)),variant:"outlined",class:"col-span-2",color:"indigo",modelValue:o.business,"onUpdate:modelValue":t[1]||(t[1]=e=>o.business=e)},null,8,["items","modelValue"]),(0,a.Wm)(w.h,{variant:"outlined",label:"Codigo de evento","prepend-inner-icon":"mdi-qrcode",color:"indigo",modelValue:o.cod_evento,"onUpdate:modelValue":t[2]||(t[2]=e=>o.cod_evento=e)},null,8,["modelValue"]),(0,a.Wm)(w.h,{variant:"outlined",label:"Descripción","prepend-inner-icon":"mdi-text-box",color:"indigo",modelValue:o.descripcion,"onUpdate:modelValue":t[3]||(t[3]=e=>o.descripcion=e)},null,8,["modelValue"]),(0,a.Wm)(g.rL,{"prepend-inner-icon":"mdi-priority-high",label:"Prioridad",items:["REGULAR","URGENTE","CRITICO"],variant:"outlined",class:"col-span-2",color:"indigo",modelValue:o.prioridad,"onUpdate:modelValue":t[4]||(t[4]=e=>o.prioridad=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(m.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f.C),(0,a.Wm)(c.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[5]||(t[5]=e=>o.dialog=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cancelar ")])),_:1}),(0,a.Wm)(c.T,{color:"blue-lighten-1",variant:"tonal",onClick:o.createItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var C=n(4870),W=n(4239),V={emits:["create-item"],setup(e,{emit:t}){const n=(0,C.iH)(!1),o=(0,C.iH)(""),i=(0,C.iH)(""),l=(0,C.iH)(""),r=(0,C.iH)(""),c=(0,C.iH)([]);(0,a.YP)((()=>n.value),(async e=>{if(1==e){const e=await(0,d.$d)(W.Z.state.codcuenta),t=e.data.data[0].clientes?e.data.data[0].clientes:[];c.value=t.filter((e=>"Administrador"==e.rol))}}));const u=()=>{t("create-item",{cod_cliente:c.value.find((e=>e.empresa==o.value)).cod_cliente,cod_evento:i.value,descripcion:l.value,prioridad:r.value}),i.value=l.value=r.value=o.value="",n.value=!1};return{dialog:n,business:o,cod_evento:i,descripcion:l,prioridad:r,clientsAdmin:c,createItem:u}}},k=n(89);const I=(0,k.Z)(V,[["render",b]]);var y=I,Z=n(5719),U=n(7139),D=n(7103),A=n(678);const H={class:"flex gap-1 justify-center"},x=["onClick"],$=["onClick"];function T(e,t,n,o,i,l){const r=(0,a.up)("v-data-table");return(0,a.wg)(),(0,a.j4)(r,{headers:i.headers,items:n.desserts,class:"elevation-1 text-sm rounded-lg"},{["item.status"]:(0,a.w5)((({item:e})=>[(0,a.Wm)(D.v,{color:e.status?"green":"red"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,U.zw)(e.status?"Activo":"Desactivado"),1)])),_:2},1032,["color"])])),["item.actions"]:(0,a.w5)((({item:e})=>[(0,a._)("div",H,[(0,a._)("span",{onClick:t=>o.editItem(e)},[(0,a.Wm)(c.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,a.Wm)(A.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Editar")])),_:1})],8,x),(0,a._)("span",{onClick:t=>o.deleteItem(e)},[(0,a.Wm)(c.T,{icon:"mdi-delete-empty",size:"small",variant:"text",color:"red"}),(0,a.Wm)(A.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Eliminar")])),_:1})],8,$)])])),_:2},1032,["headers","items"])}var L=n(5470),N={props:{desserts:Array},components:{VDataTable:L.y_},emits:["delete-item","edit-item"],data(){return{headers:[{title:"Empresa",align:"start",key:"empresa"},{title:"Código",align:"start",key:"cod_evento"},{title:"Descripción",align:"start",key:"descripcion"},{title:"Prioridad",align:"start",key:"prioridad"},{title:"Fecha creación",align:"start",key:"fecha_creacion"},{title:"Estado",align:"center",key:"status"},{title:"Acciones",key:"actions",align:"center"}]}},setup(e,{emit:t}){const n=e=>{t("edit-item",{item:e})},a=e=>{t("delete-item",{item:e})};return{editItem:n,deleteItem:a}}};const R=(0,k.Z)(N,[["render",T]]);var Y=R,M=n(3512),P={components:{CreateEventsAccountsVue:y,TableEventsAccountsVue:Y,EditEventsVue:Z.Z},setup(){const e=(0,C.iH)([]),t=(0,C.iH)({}),n=(0,C.iH)(!1),o=(0,C.iH)("");(0,a.bv)((async()=>{await i()}));const i=async()=>{const[t,n]=await Promise.all([(0,r.kQ)(W.Z.state.codcuenta,W.Z.state.codclienteAdmin),(0,d.$d)(W.Z.state.codcuenta)]),a=n.data.data[0].clientes?n.data.data[0].clientes:[];o.value=a.filter((e=>"Administrador"==e.rol));const i=t.data.data?t.data.data:[];e.value=i.flatMap((e=>{const t=o.value.find((t=>t.cod_cliente==e.cod_cliente)),n=e.eventos.map((e=>({...e,empresa:t.empresa})));return n}))},l=()=>{const e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear(),o=`${t}-${n}-${a}`;return o},c=e=>{""!=e.cod_evento&&""!=e.descripcion&&""!=e.prioridad?(e.cod_cuenta=W.Z.state.codcuenta,e.usuario=W.Z.state.username,e.status=!0,e.fecha_creacion=l(),(0,r.qW)(e).then((()=>{(0,M.y)((async()=>{await i()}),"success","Logrado","Se ha creado el evento correctamente")})).catch((()=>{(0,M.y)((()=>{}),"error","Hubo un error","No se logro crear el evento")}))):(0,M.y)((()=>{}),"warning","Advertencia","Rellene todos los campos")},u=e=>{t.value=e,n.value=!0},s=e=>{e.cod_cliente=o.value.find((e=>e.empresa==t.value.item.empresa)).cod_cliente,(0,r.WY)(e).then((()=>{(0,M.y)((async()=>{await i()}),"success","Logrado","Se ha editado el evento correctamente")})).catch((()=>{(0,M.y)((()=>{}),"error","Hubo un error","No se logro editar el evento")}))},m=e=>{const t={cod_evento:e.item.cod_evento,cod_cuenta:W.Z.state.codcuenta,cod_cliente:o.value.find((t=>t.empresa==e.item.empresa)).cod_cliente};(0,M.M)((async()=>{await(0,r.v6)(t).then((()=>{(0,M.y)((async()=>{await i()}),"success","Logrado","Se ha eliminado el evento correctamente")})).catch((()=>{(0,M.y)((()=>{}),"error","Hubo un error","No se logro eliminar el evento")}))}),"¿Estás seguro de eliminar este evento?","Aceptar")};return{onCreateItem:c,onUpdateItem:s,onDeleteItem:m,onEditItem:u,editEvent:t,editDialog:n,listEventsData:e}}};const S=(0,k.Z)(P,[["render",l]]);var j=S}}]);
//# sourceMappingURL=853.aa87e5be.js.map