"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[401],{1329:function(e,t,l){l.d(t,{O1:function(){return i},Ow:function(){return s},el:function(){return r},ws:function(){return n}});var a=l(1076);const o="http://192.168.1.45:3000/api/v1";function n(e,t){return a.Z.post(`${o}/allGroupsUsers`,{cod_cuenta:e,cod_cliente:t})}function i(e){return a.Z.post(`${o}/createGroupUsers`,e)}function s(e){return a.Z.post(`${o}/deleteGroupUsers`,e)}function r(e){return a.Z.post(`${o}/editGroupsUsers`,e)}},6365:function(e,t,l){l.d(t,{$d:function(){return n},DL:function(){return s},Ex:function(){return c},Kb:function(){return i},Zd:function(){return u},dN:function(){return r}});var a=l(1076);const o="http://192.168.1.45:3000/api/v1";function n(e){return a.Z.post(`${o}/listAccounts`,{cod_cuenta:e})}function i(e,t){return a.Z.post(`${o}/listClients`,{cod_cuenta:e,empresa:t})}function s(e){return a.Z.post(`${o}/createClient`,e)}function r(e){return a.Z.put(`${o}/editClient`,e)}function u(e){return a.Z.post(`${o}/deleteClient`,e)}function c(e){return a.Z.post(`${o}/repeatUser`,{usuario:e})}},1401:function(e,t,l){l.r(t),l.d(t,{default:function(){return se}});var a=l(3396),o=l(7139),n=l(9242),i=l(7771),s=l(4108),r=l(3446),u=l(6191),c=l(4580),d=l(3289),m=l(678);const p={class:"flex justify-between w-full"},v=(0,a._)("div",null,[(0,a._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Grupo de usuarios")],-1),f={class:"w-full rounded-lg bg-white grid grid-cols-2 gap-3 p-4 shadow-md"},w={class:"p-3 border-2 border-blue-400 rounded-lg mt-3 min-h-[5rem]"},g={class:"mt-3"},b={class:"flex gap-2"},_={class:"p-3 rounded-lg border min-h-[4rem]"};function k(e,t,l,k,I,h){const A=(0,a.up)("CreateGroupVue"),W=(0,a.up)("EditGroupUsersVue");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[(0,a._)("div",p,[v,(0,a.Wm)(A,{onCreateItem:k.onCreateItem},null,8,["onCreateItem"])]),(0,a._)("div",f,[(0,a._)("div",null,[(0,a.Wm)(i.w,{color:"#3b82f6",theme:"dark",icon:"mdi-account-details",density:"compact",border:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" Lista de usuarios ")])),_:1}),(0,a._)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.dataUsers,(e=>((0,a.wg)(),(0,a.j4)(i.w,{color:"#bfdbfe",theme:"dark",icon:"mdi-account",density:"compact",class:"my-1",key:e.usuario},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.usuario),1)])),_:2},1024)))),128))])]),(0,a._)("div",null,[(0,a.Wm)(i.w,{color:"#3b82f6",theme:"dark",icon:"mdi-account-group",density:"compact",border:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" Grupos de usuarios ")])),_:1}),(0,a._)("div",g,[(0,a.Wm)(s.Vc,{multiple:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.dataGroupUsers,(e=>((0,a.wg)(),(0,a.j4)(r.M,{key:e.codigo},{default:(0,a.w5)((()=>[(0,a.Wm)(u.V,{color:"blue-grey-lighten-5"},{default:(0,a.w5)((()=>[(0,a._)("div",b,[(0,a._)("span",{onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},[(0,a.Wm)(d.t,{color:"green",size:"small",onClick:t=>k.editGroup(e)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-square-edit-outline")])),_:2},1032,["onClick"]),(0,a.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Editar")])),_:1})]),(0,a._)("span",{onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},[(0,a.Wm)(d.t,{color:"red",size:"small",onClick:t=>k.deleteGroup(e.codigo)},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-delete-empty")])),_:2},1032,["onClick"]),(0,a.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Eliminar")])),_:1})]),(0,a._)("span",null,(0,o.zw)(e.nombre),1)])])),_:2},1024),(0,a.Wm)(c.H,null,{default:(0,a.w5)((()=>[(0,a._)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.usuarios,(e=>((0,a.wg)(),(0,a.j4)(i.w,{color:"#bfdbfe",theme:"dark",icon:"mdi-account",density:"compact",key:e,class:"my-1"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e),1)])),_:2},1024)))),128))])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])])]),(0,a.Wm)(W,{itemEdit:k.editItem,openModal:k.editDialog,onCancelItem:t[2]||(t[2]=e=>k.editDialog=!1),onEditItem:k.onUpdateItem},null,8,["itemEdit","openModal","onEditItem"])],64)}var I=l(6365),h=l(1329),A=l(7312),W=l(5039),S=l(1888),C=l(1334),U=l(3601),y=l(8521),Z=l(9234),G=l(165),H=l(1328);const x=(0,a._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Crear grupo de usuarios",-1),M={class:"w-full block lg:flex gap-1 items-center"},V={class:"w-full"},T={class:"flex justify-center lg:block"},O={class:"my-1"},E={class:"my-1"},L={class:"w-full"};function N(e,t,l,o,i,s){const r=(0,a.up)("SelectItemsAndMoveVue");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(A.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>o.dialog=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(d.t,{icon:"mdi-plus"}),(0,a.Uk)(" Crear Nuevo")])),_:1}),(0,a.Wm)(U.B,{modelValue:o.dialog,"onUpdate:modelValue":t[2]||(t[2]=e=>o.dialog=e),width:"600","onClick:outside":o.cancelItem},{default:(0,a.w5)((()=>[(0,a.Wm)(W._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(H.i,null,{default:(0,a.w5)((()=>[x])),_:1}),(0,a.Wm)(S.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(G.h,{variant:"outlined",label:"Nombre","prepend-inner-icon":"mdi-form-textbox",color:"indigo",modelValue:o.name,"onUpdate:modelValue":t[1]||(t[1]=e=>o.name=e)},null,8,["modelValue"]),(0,a._)("div",M,[(0,a._)("div",V,[(0,a.Wm)(A.T,{density:"compact",class:"w-full mb-2 text-none",color:"blue-lighten-1",variant:"tonal"},{default:(0,a.w5)((()=>[(0,a.Uk)(" USUARIOS DISPONIBLES ")])),_:1}),(0,a.Wm)(r,{listGroups:o.itemsAvailable,onListSeleccionados:o.emitSelectedItemsAvailable,nameGrupo:"Obras libres"},null,8,["listGroups","onListSeleccionados"])]),(0,a._)("div",T,[(0,a._)("div",O,[(0,a.Wm)(A.T,{icon:o.isMobile?"mdi-arrow-down":"mdi-arrow-right",variant:"tonal",size:"small",color:"indigo",onClick:(0,n.iM)(o.moveSelectedItemsToAssigned,["prevent"])},null,8,["icon","onClick"]),(0,a.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Agregar")])),_:1})]),(0,a._)("div",E,[(0,a.Wm)(A.T,{icon:o.isMobile?"mdi-arrow-up":"mdi-arrow-left",variant:"tonal",size:"small",color:"indigo",onClick:(0,n.iM)(o.moveSelectedItemsToAvailable,["prevent"])},null,8,["icon","onClick"]),(0,a.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Quitar")])),_:1})])]),(0,a._)("div",L,[(0,a.Wm)(A.T,{density:"compact",class:"w-full mb-2 text-none",color:"blue-lighten-1",variant:"tonal"},{default:(0,a.w5)((()=>[(0,a.Uk)(" USUARIOS ASIGNADOS ")])),_:1}),(0,a.Wm)(r,{listGroups:o.itemsAssigned,onListSeleccionados:o.emitSelectedItemsAssigned,nameGrupo:"Obras asignadas"},null,8,["listGroups","onListSeleccionados"])])])])),_:1})])),_:1}),(0,a.Wm)(C.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Z.C),(0,a.Wm)(A.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:o.cancelItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,a.Wm)(A.T,{color:"blue-lighten-1",variant:"tonal",onClick:o.createItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])],64)}l(560);var D=l(4239),z=l(4870),$=l(8609),j={components:{SelectItemsAndMoveVue:$.Z},emits:["create-item"],setup(e,{emit:t}){const l=(0,z.iH)([]),o=(0,z.iH)(!1),n=(0,z.iH)(""),i=(0,z.iH)([]),s=(0,z.iH)([]),r=(0,z.iH)([]),u=(0,z.iH)([]),c=(0,z.iH)(!1);(0,a.YP)((()=>o.value),(e=>{1==e&&(d(),window.addEventListener("resize",d),(0,I.Kb)(D.Z.state.codcuenta,D.Z.state.empresa).then((e=>{l.value=e.data.data?e.data.data.filter((e=>"Administrador"!=e.rol)):[],u.value=l.value.map((e=>({name:e.usuario})))})))}));const d=()=>{c.value=window.innerWidth<=500},m=()=>{t("create-item",{cod_cuenta:D.Z.state.codcuenta,cod_cliente:D.Z.state.codcliente,nombre:n.value,usuarios:r.value.map((e=>e.name))}),p()},p=()=>{n.value="",r.value=[],o.value=!1},v=e=>{s.value=e},f=e=>{i.value=e},w=()=>{if(0!=i.value.length){const e=i.value.map((e=>({name:e})));r.value.push(...e),u.value=u.value.filter((t=>-1===e.findIndex((e=>e.name===t.name))))}},g=()=>{if(0!=s.value.length){const e=s.value.map((e=>({name:e})));u.value.push(...e),r.value=r.value.filter((t=>-1===e.findIndex((e=>e.name===t.name))))}};return{dialog:o,name:n,isMobile:c,createItem:m,cancelItem:p,selectedItemsAvailable:i,selectedItemsAssigned:s,itemsAssigned:r,itemsAvailable:u,emitSelectedItemsAssigned:v,emitSelectedItemsAvailable:f,moveSelectedItemsToAssigned:w,moveSelectedItemsToAvailable:g}}},Y=l(89);const K=(0,Y.Z)(j,[["render",N]]);var P=K;const B=(0,a._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Editar grupo de usuarios",-1),R={class:"w-full block lg:flex gap-1 items-center"},Q={class:"w-full"},q={class:"flex justify-center lg:block"},F={class:"my-1"},J={class:"my-1"},X={class:"w-full"};function ee(e,t,l,o,i,s){const r=(0,a.up)("SelectItemsAndMoveVue");return(0,a.wg)(),(0,a.j4)(U.B,{modelValue:o.dialog,"onUpdate:modelValue":t[1]||(t[1]=e=>o.dialog=e),width:"600","onClick:outside":o.cancelItem},{default:(0,a.w5)((()=>[(0,a.Wm)(W._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(H.i,null,{default:(0,a.w5)((()=>[B])),_:1}),(0,a.Wm)(S.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(G.h,{variant:"outlined",label:"Nombre","prepend-inner-icon":"mdi-form-textbox",color:"indigo",modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=e=>o.name=e)},null,8,["modelValue"]),(0,a._)("div",R,[(0,a._)("div",Q,[(0,a.Wm)(A.T,{density:"compact",class:"w-full mb-2 text-none",color:"blue-lighten-1",variant:"tonal"},{default:(0,a.w5)((()=>[(0,a.Uk)(" USUARIOS DISPONIBLES ")])),_:1}),(0,a.Wm)(r,{listGroups:o.itemsAvailable,onListSeleccionados:o.emitSelectedItemsAvailable,nameGrupo:"Obras libres"},null,8,["listGroups","onListSeleccionados"])]),(0,a._)("div",q,[(0,a._)("div",F,[(0,a.Wm)(A.T,{icon:o.isMobile?"mdi-arrow-down":"mdi-arrow-right",variant:"tonal",size:"small",color:"indigo",onClick:(0,n.iM)(o.moveSelectedItemsToAssigned,["prevent"])},null,8,["icon","onClick"]),(0,a.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Agregar")])),_:1})]),(0,a._)("div",J,[(0,a.Wm)(A.T,{icon:o.isMobile?"mdi-arrow-up":"mdi-arrow-left",variant:"tonal",size:"small",color:"indigo",onClick:(0,n.iM)(o.moveSelectedItemsToAvailable,["prevent"])},null,8,["icon","onClick"]),(0,a.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Quitar")])),_:1})])]),(0,a._)("div",X,[(0,a.Wm)(A.T,{density:"compact",class:"w-full mb-2 text-none",color:"blue-lighten-1",variant:"tonal"},{default:(0,a.w5)((()=>[(0,a.Uk)(" USUARIOS ASIGNADOS ")])),_:1}),(0,a.Wm)(r,{listGroups:o.itemsAssigned,onListSeleccionados:o.emitSelectedItemsAssigned,nameGrupo:"Obras asignadas"},null,8,["listGroups","onListSeleccionados"])])])])),_:1})])),_:1}),(0,a.Wm)(C.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Z.C),(0,a.Wm)(A.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:o.cancelItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,a.Wm)(A.T,{color:"blue-lighten-1",variant:"tonal",onClick:o.editItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var te={components:{SelectItemsAndMoveVue:$.Z},props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const l=(0,z.iH)([]),o=(0,z.iH)(!1),n=(0,z.iH)(""),i=(0,z.iH)(""),s=(0,z.iH)([]),r=(0,z.iH)([]),u=(0,z.iH)([]),c=(0,z.iH)([]),d=(0,z.iH)(!1);(0,a.YP)((()=>e.openModal),(e=>{o.value=e})),(0,a.YP)((()=>o.value),(e=>{1==e&&(m(),window.addEventListener("resize",m))})),(0,a.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(i.value=e.codigo,n.value=e.nombre,u.value=e.usuarios.map((e=>({name:e}))),(0,I.Kb)(D.Z.state.codcuenta,D.Z.state.empresa).then((t=>{l.value=t.data.data?t.data.data:[],c.value=l.value.filter((t=>!e.usuarios.includes(t.usuario)&&"Administrador"!=t.rol)).map((e=>({name:e.usuario})))})))}));const m=()=>{d.value=window.innerWidth<=500},p=()=>{t("edit-item",{cod_cuenta:D.Z.state.codcuenta,cod_cliente:D.Z.state.codcliente,codigo:i.value,nombre:n.value,usuarios:u.value.map((e=>e.name))}),v()},v=()=>{t("cancel-item")},f=e=>{r.value=e},w=e=>{s.value=e},g=()=>{if(0!=s.value.length){const e=s.value.map((e=>({name:e})));u.value.push(...e),c.value=c.value.filter((t=>-1===e.findIndex((e=>e.name===t.name))))}},b=()=>{if(0!=r.value.length){const e=r.value.map((e=>({name:e})));c.value.push(...e),u.value=u.value.filter((t=>-1===e.findIndex((e=>e.name===t.name))))}};return{dialog:o,name:n,isMobile:d,editItem:p,cancelItem:v,selectedItemsAvailable:s,selectedItemsAssigned:r,itemsAssigned:u,itemsAvailable:c,emitSelectedItemsAssigned:f,emitSelectedItemsAvailable:w,moveSelectedItemsToAssigned:g,moveSelectedItemsToAvailable:b}}};const le=(0,Y.Z)(te,[["render",ee]]);var ae=le,oe=l(3512),ne={components:{CreateGroupVue:P,EditGroupUsersVue:ae},setup(){const e=(0,z.iH)([]),t=(0,z.iH)([]),l=(0,z.iH)({}),o=(0,z.iH)(!1);(0,a.bv)((async()=>{await n()}));const n=async()=>{const[l,a]=await Promise.all([(0,I.Kb)(D.Z.state.codcuenta,D.Z.state.empresa),(0,h.ws)(D.Z.state.codcuenta,D.Z.state.codcliente)]);e.value=l.data.data.filter((e=>e.empresa==D.Z.state.empresa&&"Administrador"!=e.rol)),t.value=a.data.data?a.data.data[0].grupos_usuarios:[]},i=e=>{""!=e.nombre?(0,h.O1)(e).then((()=>{(0,oe.y)((async()=>{await n()}),"success","Logrado","Se ha creado el grupo correctamente")})).catch((()=>{(0,oe.y)((()=>{}),"error","Hubo un error","No se logro crear el grupo")})):(0,oe.y)((()=>{}),"warning","Advertencia","Ingrese un nombre")},s=e=>{(0,oe.M)((async()=>{const t={cod_cuenta:D.Z.state.codcuenta,cod_cliente:D.Z.state.codcliente,codigo:e,ruc_cuenta:D.Z.state.ruc};(0,h.Ow)(t).then((()=>{(0,oe.y)((async()=>{await n()}),"success","Logrado","Se ha eliminado el grupo correctamente")})).catch((e=>{(0,oe.y)((()=>{}),"error","Hubo un error",e.response.data.message)}))}),"¿Estás seguro de eliminar este grupo?","Aceptar")},r=e=>{o.value=!0,l.value=e},u=e=>{(0,h.el)(e).then((()=>{(0,oe.y)((async()=>{await n()}),"success","Logrado","Se ha editado el grupo correctamente")})).catch((()=>{(0,oe.y)((()=>{}),"error","Hubo un error","No se logro editar el grupo")}))};return{dataUsers:e,dataGroupUsers:t,editDialog:o,editItem:l,onCreateItem:i,deleteGroup:s,editGroup:r,onUpdateItem:u}}};const ie=(0,Y.Z)(ne,[["render",k]]);var se=ie}}]);
//# sourceMappingURL=401.d256b3b4.js.map