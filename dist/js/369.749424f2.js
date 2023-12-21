"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[369],{3518:function(e,t,a){a.d(t,{bo:function(){return o},cD:function(){return c},di:function(){return i},md:function(){return d}});var l=a(1076);const n="http://192.168.0.46:3000/api/v1";function o(e,t){return l.Z.post(`${n}/allUnits`,{cod_cuenta:e,cod_cliente:t})}function i(e){return l.Z.post(`${n}/createUnits`,e)}function c(e){return l.Z.put(`${n}/editUnits`,e)}function d(e){return l.Z.post(`${n}/deleteUnits`,e)}},3187:function(e,t,a){a.d(t,{Z:function(){return k}});var l=a(3396),n=a(7312),o=a(5039),i=a(1888),c=a(1334),d=a(3601),r=a(8521),u=a(9234),s=a(3104),m=a(165),p=a(1328);const v=(0,l._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Editar vehículo",-1);function f(e,t,a,f,_,h){return(0,l.wg)(),(0,l.j4)(d.B,{modelValue:f.dialog,"onUpdate:modelValue":t[3]||(t[3]=e=>f.dialog=e),width:"500","onClick:outside":f.cancelItem},{default:(0,l.w5)((()=>[(0,l.Wm)(o._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p.i,null,{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(i.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(m.h,{variant:"outlined",label:"Placa","prepend-inner-icon":"mdi-card-bulleted",color:"indigo",modelValue:f.plate,"onUpdate:modelValue":t[0]||(t[0]=e=>f.plate=e),"hide-details":""},null,8,["modelValue"]),(0,l.Wm)(s.G,{label:"Estado",modelValue:f.estado,"onUpdate:modelValue":t[1]||(t[1]=e=>f.estado=e),color:"blue","hide-details":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(c.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u.C),(0,l.Wm)(n.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[2]||(t[2]=e=>f.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1}),(0,l.Wm)(n.T,{color:"blue-lighten-1",variant:"tonal",onClick:f.editItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var _=a(4870),h=a(4239),g={props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const a=(0,_.iH)(!1),n=(0,_.iH)(""),o=(0,_.iH)(!1);(0,l.YP)((()=>e.openModal),(e=>{a.value=e})),(0,l.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(n.value=e.item.placa,o.value=e.item.status)}));const i=()=>{t("edit-item",{cod_cuenta:h.Z.state.codcuenta,cod_cliente:h.Z.state.codcliente,cod_unidad:e.itemEdit.item.cod_unidad,placa:n.value,status:o.value}),n.value="",o.value=!1,c()},c=()=>{t("cancel-item")};return{dialog:a,plate:n,estado:o,editItem:i,cancelItem:c}}},w=a(89);const b=(0,w.Z)(g,[["render",f]]);var k=b},8696:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var l=a(3396);const n={class:"flex justify-between w-full"},o=(0,l._)("div",null,[(0,l._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Vehiculos")],-1);function i(e,t,a,i,c,d){const r=(0,l.up)("CreateVehiclesVue"),u=(0,l.up)("TableVehiclesVue"),s=(0,l.up)("EditVehiclesVue");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[(0,l._)("div",n,[o,(0,l.Wm)(r,{onCreateItem:i.onCreateItem},null,8,["onCreateItem"])]),(0,l.Wm)(u,{desserts:i.listUnitsData,onEditItem:i.onEditItem,onDeleteItem:i.onDeleteItem},null,8,["desserts","onEditItem","onDeleteItem"])]),(0,l.Wm)(s,{openModal:i.editDialog,itemEdit:i.editItem,onCancelItem:t[0]||(t[0]=e=>i.editDialog=!1),onEditItem:i.onUpdateItem},null,8,["openModal","itemEdit","onEditItem"])],64)}var c=a(3518),d=a(7139),r=a(7312),u=a(7103),s=a(678);const m={class:"flex gap-1 justify-center"},p=["onClick"],v=["onClick"];function f(e,t,a,n,o,i){const c=(0,l.up)("v-data-table");return(0,l.wg)(),(0,l.j4)(c,{headers:o.headers,items:a.desserts,class:"elevation-1 text-sm rounded-lg"},{["item.status"]:(0,l.w5)((({item:e})=>[(0,l.Wm)(u.v,{color:e.status?"green":"red"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)(e.status?"Activo":"Desactivado"),1)])),_:2},1032,["color"])])),["item.actions"]:(0,l.w5)((({item:e})=>[(0,l._)("div",m,[(0,l._)("span",{onClick:t=>n.editItem(e)},[(0,l.Wm)(r.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,l.Wm)(s.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("Editar")])),_:1})],8,p),(0,l._)("span",{onClick:t=>n.deleteItem(e)},[(0,l.Wm)(r.T,{icon:"mdi-delete-empty",size:"small",variant:"text",color:"red"}),(0,l.Wm)(s.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("Eliminar")])),_:1})],8,v)])])),_:2},1032,["headers","items"])}var _=a(5470),h={props:{desserts:Array},components:{VDataTable:_.y_},emits:["delete-item","edit-item"],data(){return{headers:[{title:"Placa",align:"start",key:"placa"},{title:"Fecha creación",align:"start",key:"fecha_creacion"},{title:"Estado",align:"start",key:"status"},{title:"Acción",align:"center",key:"actions"}]}},setup(e,{emit:t}){const a=e=>{t("edit-item",{item:e})},l=e=>{t("delete-item",{item:e})};return{editItem:a,deleteItem:l}}},g=a(89);const w=(0,g.Z)(h,[["render",f]]);var b=w,k=a(5039),W=a(1888),I=a(1334),V=a(3601),C=a(8521),y=a(9234),U=a(3289),Z=a(165),D=a(1328);const E=(0,l._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Crear vehículo",-1);function x(e,t,a,n,o,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>n.dialog=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(U.t,{icon:"mdi-plus"}),(0,l.Uk)(" Crear Nuevo")])),_:1}),(0,l.Wm)(V.B,{modelValue:n.dialog,"onUpdate:modelValue":t[3]||(t[3]=e=>n.dialog=e),width:"500"},{default:(0,l.w5)((()=>[(0,l.Wm)(k._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D.i,null,{default:(0,l.w5)((()=>[E])),_:1}),(0,l.Wm)(W.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z.h,{variant:"outlined",label:"Placa","prepend-inner-icon":"mdi-card-bulleted",color:"indigo",modelValue:n.plate,"onUpdate:modelValue":t[1]||(t[1]=e=>n.plate=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(I.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y.C),(0,l.Wm)(r.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[2]||(t[2]=e=>n.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1}),(0,l.Wm)(r.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.createItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var H=a(4870),T=a(4239),A={emits:["create-item"],setup(e,{emit:t}){const a=(0,H.iH)(!1),l=(0,H.iH)(""),n=()=>{const e=new Date,n=e.getDate().toString().padStart(2,"0"),o=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getFullYear(),c=`${n}-${o}-${i}`;t("create-item",{cod_cuenta:T.Z.state.codcuenta,cod_cliente:T.Z.state.codcliente,cod_unidad:"",fecha_creacion:c,placa:l.value,status:!0}),l.value="",a.value=!1};return{dialog:a,plate:l,createItem:n}}};const S=(0,g.Z)(A,[["render",x]]);var $=S,j=a(3187),M=a(3512),N={components:{TableVehiclesVue:b,CreateVehiclesVue:$,EditVehiclesVue:j.Z},setup(){const e=(0,H.iH)([]),t=(0,H.iH)({}),a=(0,H.iH)(!1);(0,l.bv)((async()=>{await n()}));const n=async()=>{(0,c.bo)(T.Z.state.codcuenta,T.Z.state.codclienteAdmin).then((t=>{e.value=t.data.data[0].unidades}))},o=e=>{""!=e.placa?(0,c.di)(e).then((()=>{(0,M.y)((async()=>{await n()}),"success","Logrado","Se ha registrado el vehiculo correctamente")})).catch((()=>{(0,M.y)((()=>{}),"error","Hubo un error","No se logro registrar el vehiculo")})):(0,M.y)((()=>{}),"warning","Advertencia","Rellene todos los campos")},i=e=>{const t={placa:e.item.placa,cod_unidad:e.item.cod_unidad,cod_cuenta:T.Z.state.codcuenta,cod_cliente:T.Z.state.codclienteAdmin};(0,M.M)((async()=>{await(0,c.md)(t).then((()=>{(0,M.y)((async()=>{await n()}),"success","Logrado","Se ha eliminado el vehículo correctamente")})).catch((e=>{console.log(e),(0,M.y)((()=>{}),"error","Hubo un error","No se logro eliminar")}))}),"¿Estás seguro de eliminar este vehículo?","Aceptar")},d=e=>{t.value=e,a.value=!0},r=e=>{(0,c.cD)(e).then((()=>{(0,M.y)((async()=>{await n()}),"success","Logrado","Se ha editado el vehículo correctamente")})).catch((()=>{(0,M.y)((()=>{}),"error","Hubo un error","No se logro editar el vehículo")}))};return{listUnitsData:e,editDialog:a,editItem:t,onUpdateItem:r,onDeleteItem:i,onCreateItem:o,onEditItem:d}}};const P=(0,g.Z)(N,[["render",i]]);var Y=P}}]);
//# sourceMappingURL=369.749424f2.js.map