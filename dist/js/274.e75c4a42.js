"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[274],{6418:function(e,t,a){a.d(t,{Cf:function(){return r},E4:function(){return d},mU:function(){return o},nl:function(){return i}});var l=a(1076);const n="http://67.205.164.216:3000/api/v1";function i(e){return l.Z.post(`${n}/allResponses`,{cod_cliente:e})}function o(e){return l.Z.post(`${n}/createResponse`,e)}function r(e){return l.Z.put(`${n}/editResponse`,e)}function d(e){return l.Z.post(`${n}/deleteResponse`,e)}},6528:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var l=a(3396);const n={class:"flex justify-between w-full"},i=(0,l._)("div",null,[(0,l._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Respuestas predefinidas")],-1);function o(e,t,a,o,r,d){const s=(0,l.up)("CreateAnswersVue"),c=(0,l.up)("TableAnswersVue"),u=(0,l.up)("EditAnswersVue");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[(0,l._)("div",n,[i,(0,l.Wm)(s,{onCreateItem:o.onCreateItem},null,8,["onCreateItem"])]),(0,l.Wm)(c,{desserts:o.listAnswersData,onDeleteItem:o.onDeleteItem,onEditItem:o.onEditItem},null,8,["desserts","onDeleteItem","onEditItem"])]),(0,l.Wm)(u,{openModal:o.editDialog,itemEdit:o.editItem,onCancelItem:t[0]||(t[0]=e=>o.editDialog=!1),onEditItem:o.onUpdateItem},null,8,["openModal","itemEdit","onEditItem"])],64)}var r=a(6418),d=a(7312),s=a(678);const c={class:"flex gap-1 justify-center"},u=["onClick"],m=["onClick"];function p(e,t,a,n,i,o){const r=(0,l.up)("v-data-table");return(0,l.wg)(),(0,l.j4)(r,{headers:i.headers,items:a.desserts,class:"elevation-1 text-sm rounded-lg"},{["item.actions"]:(0,l.w5)((({item:e})=>[(0,l._)("div",c,[(0,l._)("span",{onClick:t=>n.editItem(e)},[(0,l.Wm)(d.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,l.Wm)(s.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("Editar")])),_:1})],8,u),(0,l._)("span",{onClick:t=>n.deleteItem(e)},[(0,l.Wm)(d.T,{icon:"mdi-delete-empty",size:"small",variant:"text",color:"red"}),(0,l.Wm)(s.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("Eliminar")])),_:1})],8,m)])])),_:2},1032,["headers","items"])}var g=a(5470),f={props:{desserts:Array},components:{VDataTable:g.y_},emits:["delete-item","edit-item"],data(){return{headers:[{title:"Código",align:"start",key:"codigo"},{title:"Sigla",align:"start",key:"sigla"},{title:"Texto",align:"start",key:"text"},{title:"Acción",key:"actions",align:"center"}]}},setup(e,{emit:t}){const a=e=>{t("edit-item",{item:e})},l=e=>{t("delete-item",{item:e})};return{editItem:a,deleteItem:l}}},v=a(89);const w=(0,v.Z)(f,[["render",p]]);var _=w,h=a(5039),b=a(1888),k=a(1334),x=a(3601),C=a(8521),W=a(9234),I=a(3289),y=a(165),V=a(4842),E=a(1328);const A=(0,l._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Crear respuesta predefinida",-1);function U(e,t,a,n,i,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(d.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>n.dialog=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(I.t,{icon:"mdi-plus"}),(0,l.Uk)(" Crear Nuevo")])),_:1}),(0,l.Wm)(x.B,{modelValue:n.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>n.dialog=e),width:"500"},{default:(0,l.w5)((()=>[(0,l.Wm)(h._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(E.i,null,{default:(0,l.w5)((()=>[A])),_:1}),(0,l.Wm)(b.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(y.h,{variant:"outlined",label:"Sigla","prepend-inner-icon":"mdi-alphabetical-variant",color:"indigo",modelValue:n.sigla,"onUpdate:modelValue":t[1]||(t[1]=e=>n.sigla=e)},null,8,["modelValue"]),(0,l.Wm)(V.z,{variant:"outlined",label:"Texto","prepend-inner-icon":"mdi-text-box-check-outline",color:"indigo",modelValue:n.text,"onUpdate:modelValue":t[2]||(t[2]=e=>n.text=e),rows:"3"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(k.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W.C),(0,l.Wm)(d.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[3]||(t[3]=e=>n.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1}),(0,l.Wm)(d.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.createItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var Z=a(4870),D=a(4239),H={emits:["create-item"],setup(e,{emit:t}){const a=(0,Z.iH)(!1),l=(0,Z.iH)(""),n=(0,Z.iH)(""),i=()=>{t("create-item",{cod_cuenta:D.Z.state.codcuenta,cod_cliente:D.Z.state.codclienteAdmin,sigla:l.value,text:n.value}),l.value=n.value="",a.value=!1};return{dialog:a,sigla:l,text:n,createItem:i}}};const T=(0,v.Z)(H,[["render",U]]);var j=T;const N=(0,l._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Editar respuesta predefinida",-1);function R(e,t,a,n,i,o){return(0,l.wg)(),(0,l.j4)(x.B,{modelValue:n.dialog,"onUpdate:modelValue":t[3]||(t[3]=e=>n.dialog=e),width:"500","onClick:outside":n.cancelItem},{default:(0,l.w5)((()=>[(0,l.Wm)(h._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(E.i,null,{default:(0,l.w5)((()=>[N])),_:1}),(0,l.Wm)(b.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(y.h,{variant:"outlined",label:"Sigla","prepend-inner-icon":"mdi-alphabetical-variant",color:"indigo",modelValue:n.sigla,"onUpdate:modelValue":t[0]||(t[0]=e=>n.sigla=e)},null,8,["modelValue"]),(0,l.Wm)(V.z,{variant:"outlined",label:"Texto","prepend-inner-icon":"mdi-text-box-check-outline",color:"indigo",modelValue:n.text,"onUpdate:modelValue":t[1]||(t[1]=e=>n.text=e),rows:"3"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(k.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W.C),(0,l.Wm)(d.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[2]||(t[2]=e=>n.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1}),(0,l.Wm)(d.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.editItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var S={props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const a=(0,Z.iH)(!1),n=(0,Z.iH)(""),i=(0,Z.iH)("");(0,l.YP)((()=>e.openModal),(e=>{a.value=e})),(0,l.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(n.value=e.item.sigla,i.value=e.item.text)}));const o=()=>{t("edit-item",{cod_cuenta:D.Z.state.codcuenta,cod_cliente:D.Z.state.codclienteAdmin,codigo:e.itemEdit.item.codigo,sigla:n.value,text:i.value}),n.value=i.value="",r()},r=()=>{t("cancel-item")};return{dialog:a,sigla:n,text:i,editItem:o,cancelItem:r}}};const z=(0,v.Z)(S,[["render",R]]);var M=z,Y=a(3512),$={components:{TableAnswersVue:_,CreateAnswersVue:j,EditAnswersVue:M},setup(){const e=(0,Z.iH)([]),t=(0,Z.iH)({}),a=(0,Z.iH)(!1);(0,l.bv)((async()=>{await n()}));const n=async()=>{(0,r.nl)(D.Z.state.codclienteAdmin).then((t=>{e.value=t.data.data[0].respuestas}))},i=e=>{""!=e.sigla&&""!=e.text?(0,r.mU)(e).then((()=>{(0,Y.y)((async()=>{await n()}),"success","Logrado","Se ha creado la respuesta predefinida correctamente")})).catch((()=>{(0,Y.y)((()=>{}),"error","Hubo un error","No se logro crear el evento")})):(0,Y.y)((()=>{}),"warning","Advertencia","Rellene todos los campos")},o=e=>{const t={codigo:e.item.codigo,cod_cuenta:D.Z.state.codcuenta,cod_cliente:D.Z.state.codclienteAdmin};(0,Y.M)((async()=>{await(0,r.E4)(t).then((()=>{(0,Y.y)((async()=>{await n()}),"success","Logrado","Se ha eliminado la respuesta predefinida correctamente")})).catch((e=>{console.log(e),(0,Y.y)((()=>{}),"error","Hubo un error","No se logro eliminar")}))}),"¿Estás seguro de eliminar esta respuesta predefinida?","Aceptar")},d=e=>{t.value=e,a.value=!0},s=e=>{(0,r.Cf)(e).then((()=>{(0,Y.y)((async()=>{await n()}),"success","Logrado","Se ha editado la respuesta predefinida correctamente")})).catch((()=>{(0,Y.y)((()=>{}),"error","Hubo un error","No se logro editar la respuesta predifinida")}))};return{listAnswersData:e,editDialog:a,editItem:t,onUpdateItem:s,onDeleteItem:o,onCreateItem:i,onEditItem:d}}};const B=(0,v.Z)($,[["render",o]]);var L=B}}]);
//# sourceMappingURL=274.e75c4a42.js.map