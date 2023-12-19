"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[57],{5911:function(e,t,l){l.d(t,{WY:function(){return c},kQ:function(){return n},qW:function(){return i},v6:function(){return s}});var o=l(1076);const a="http://67.205.164.216:3000/api/v1";function n(e,t){return o.Z.post(`${a}/allEvents`,{cod_cuenta:e,cod_cliente:t})}function i(e){return o.Z.post(`${a}/createEvents`,e)}function s(e){return o.Z.post(`${a}/deleteEvents`,e)}function c(e){return o.Z.put(`${a}/editEvents`,e)}},5090:function(e,t,l){l.d(t,{A3:function(){return s},DN:function(){return i},Ez:function(){return n},vQ:function(){return c}});var o=l(1076);const a="http://67.205.164.216:3000/api/v1";function n(e,t){return o.Z.post(`${a}/allGroupsEventtypes`,{cod_cuenta:e,cod_cliente:t})}function i(e){return o.Z.post(`${a}/createGroupEventtypes`,e)}function s(e){return o.Z.post(`${a}/deleteGroupEventtypes`,e)}function c(e){return o.Z.post(`${a}/editGroupsEventtypes`,e)}},9057:function(e,t,l){l.r(t),l.d(t,{default:function(){return se}});var o=l(3396),a=l(7139),n=l(9242),i=l(7771),s=l(4108),c=l(3446),d=l(6191),u=l(4580),r=l(3289),m=l(678);const v={class:"flex justify-between w-full"},p=(0,o._)("div",null,[(0,o._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Grupo de eventos")],-1),f={class:"w-full rounded-lg bg-white grid grid-cols-2 gap-3 p-4 shadow-md"},g={class:"p-3 border-2 border-blue-400 rounded-lg mt-3 min-h-[5rem]"},w={class:"mt-3"},b={class:"flex gap-2"},_={class:"p-3 rounded-lg border min-h-[4rem]"};function k(e,t,l,k,I,h){const W=(0,o.up)("CreateGroupEventsVue"),A=(0,o.up)("EditGroupEventsVue");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o._)("div",v,[p,(0,o.Wm)(W,{onCreateItem:k.onCreateItem},null,8,["onCreateItem"])]),(0,o._)("div",f,[(0,o._)("div",null,[(0,o.Wm)(i.w,{color:"#3b82f6",theme:"dark",icon:"mdi-bell-check",density:"compact",border:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" Lista de eventos ")])),_:1}),(0,o._)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.dataEvents,(e=>((0,o.wg)(),(0,o.j4)(i.w,{color:"#bfdbfe",theme:"dark",icon:"mdi-bell",density:"compact",class:"my-1",key:e.cod_evento},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.cod_evento),1)])),_:2},1024)))),128))])]),(0,o._)("div",null,[(0,o.Wm)(i.w,{color:"#3b82f6",theme:"dark",icon:"mdi-clipboard-check-multiple-outline",density:"compact",border:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" Grupos de eventos ")])),_:1}),(0,o._)("div",w,[(0,o.Wm)(s.Vc,{multiple:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.dataGroupEvents,(e=>((0,o.wg)(),(0,o.j4)(c.M,{key:e.codigo},{default:(0,o.w5)((()=>[(0,o.Wm)(d.V,{color:"blue-grey-lighten-5"},{default:(0,o.w5)((()=>[(0,o._)("div",b,[(0,o._)("span",{onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},[(0,o.Wm)(r.t,{color:"green",size:"small",onClick:t=>k.editGroup(e)},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-square-edit-outline")])),_:2},1032,["onClick"]),(0,o.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("Editar")])),_:1})]),(0,o._)("span",{onClick:t[1]||(t[1]=(0,n.iM)((()=>{}),["stop"]))},[(0,o.Wm)(r.t,{color:"red",size:"small",onClick:t=>k.deleteGroup(e.codigo)},{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-delete-empty")])),_:2},1032,["onClick"]),(0,o.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("Eliminar")])),_:1})]),(0,o._)("span",null,(0,a.zw)(e.nombre),1)])])),_:2},1024),(0,o.Wm)(u.H,null,{default:(0,o.w5)((()=>[(0,o._)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.tiposeventos,(e=>((0,o.wg)(),(0,o.j4)(i.w,{color:"#bfdbfe",theme:"dark",icon:"mdi-bell",density:"compact",class:"my-1",key:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e),1)])),_:2},1024)))),128))])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])])]),(0,o.Wm)(A,{itemEdit:k.editItem,openModal:k.editDialog,onCancelItem:t[2]||(t[2]=e=>k.editDialog=!1),onEditItem:k.onUpdateItem},null,8,["itemEdit","openModal","onEditItem"])],64)}var I=l(5911),h=l(5090),W=l(7312),A=l(5039),S=l(1888),y=l(1334),C=l(3601),E=l(8521),G=l(9234),H=l(165),U=l(1328);const Z=(0,o._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Crear grupo de eventos",-1),x={class:"w-full block lg:flex gap-1 items-center"},V={class:"w-full"},T={class:"flex justify-center lg:block"},M={class:"my-1"},N={class:"my-1"},D={class:"w-full"};function L(e,t,l,a,i,s){const c=(0,o.up)("SelectItemsAndMoveVue");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(W.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>a.dialog=!0)},{default:(0,o.w5)((()=>[(0,o.Wm)(r.t,{icon:"mdi-plus"}),(0,o.Uk)(" Crear Nuevo")])),_:1}),(0,o.Wm)(C.B,{modelValue:a.dialog,"onUpdate:modelValue":t[2]||(t[2]=e=>a.dialog=e),width:"600","onClick:outside":a.cancelItem},{default:(0,o.w5)((()=>[(0,o.Wm)(A._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U.i,null,{default:(0,o.w5)((()=>[Z])),_:1}),(0,o.Wm)(S.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E.D,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(H.h,{variant:"outlined",label:"Nombre","prepend-inner-icon":"mdi-form-textbox",color:"indigo",modelValue:a.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.name=e)},null,8,["modelValue"]),(0,o._)("div",x,[(0,o._)("div",V,[(0,o.Wm)(W.T,{density:"compact",class:"w-full mb-2 text-none",color:"blue-lighten-1",variant:"tonal"},{default:(0,o.w5)((()=>[(0,o.Uk)(" EVENTOS DISPONIBLES ")])),_:1}),(0,o.Wm)(c,{listGroups:a.itemsAvailable,onListSeleccionados:a.emitSelectedItemsAvailable,nameGrupo:"Obras libres"},null,8,["listGroups","onListSeleccionados"])]),(0,o._)("div",T,[(0,o._)("div",M,[(0,o.Wm)(W.T,{icon:a.isMobile?"mdi-arrow-down":"mdi-arrow-right",variant:"tonal",size:"small",color:"indigo",onClick:(0,n.iM)(a.moveSelectedItemsToAssigned,["prevent"])},null,8,["icon","onClick"]),(0,o.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("Agregar")])),_:1})]),(0,o._)("div",N,[(0,o.Wm)(W.T,{icon:a.isMobile?"mdi-arrow-up":"mdi-arrow-left",variant:"tonal",size:"small",color:"indigo",onClick:(0,n.iM)(a.moveSelectedItemsToAvailable,["prevent"])},null,8,["icon","onClick"]),(0,o.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("Quitar")])),_:1})])]),(0,o._)("div",D,[(0,o.Wm)(W.T,{density:"compact",class:"w-full mb-2 text-none",color:"blue-lighten-1",variant:"tonal"},{default:(0,o.w5)((()=>[(0,o.Uk)(" EVENTOS ASIGNADOS ")])),_:1}),(0,o.Wm)(c,{listGroups:a.itemsAssigned,onListSeleccionados:a.emitSelectedItemsAssigned,nameGrupo:"Obras asignadas"},null,8,["listGroups","onListSeleccionados"])])])])),_:1})])),_:1}),(0,o.Wm)(y.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(G.C),(0,o.Wm)(W.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:a.cancelItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,o.Wm)(W.T,{color:"blue-lighten-1",variant:"tonal",onClick:a.createItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])],64)}l(560);var z=l(4239),O=l(4870),Y=l(8609),j={components:{SelectItemsAndMoveVue:Y.Z},emits:["create-item"],setup(e,{emit:t}){const l=(0,O.iH)([]),a=(0,O.iH)(!1),n=(0,O.iH)(""),i=(0,O.iH)([]),s=(0,O.iH)([]),c=(0,O.iH)([]),d=(0,O.iH)([]),u=(0,O.iH)(!1);(0,o.YP)((()=>a.value),(e=>{1==e&&(r(),window.addEventListener("resize",r),(0,I.kQ)(z.Z.state.codcuenta,z.Z.state.codcliente).then((e=>{l.value=e.data.data?e.data.data[0].eventos:[],d.value=l.value.map((e=>({name:e.cod_evento})))})))}));const r=()=>{u.value=window.innerWidth<=500},m=()=>{t("create-item",{cod_cuenta:z.Z.state.codcuenta,cod_cliente:z.Z.state.codcliente,codigo:"",nombre:n.value,tiposeventos:c.value.map((e=>e.name))}),v()},v=()=>{n.value="",c.value=[],a.value=!1},p=e=>{s.value=e},f=e=>{i.value=e},g=()=>{if(0!=i.value.length){const e=i.value.map((e=>({name:e})));c.value.push(...e),d.value=d.value.filter((t=>-1===e.findIndex((e=>e.name===t.name))))}},w=()=>{if(0!=s.value.length){const e=s.value.map((e=>({name:e})));d.value.push(...e),c.value=c.value.filter((t=>-1===e.findIndex((e=>e.name===t.name))))}};return{dialog:a,name:n,isMobile:u,createItem:m,cancelItem:v,selectedItemsAvailable:i,selectedItemsAssigned:s,itemsAssigned:c,itemsAvailable:d,emitSelectedItemsAssigned:p,emitSelectedItemsAvailable:f,moveSelectedItemsToAssigned:g,moveSelectedItemsToAvailable:w}}},Q=l(89);const $=(0,Q.Z)(j,[["render",L]]);var P=$;const B=(0,o._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Editar grupo de unidades",-1),K={class:"w-full block lg:flex gap-1 items-center"},q={class:"w-full"},F={class:"flex justify-center lg:block"},J={class:"my-1"},R={class:"my-1"},X={class:"w-full"};function ee(e,t,l,a,i,s){const c=(0,o.up)("SelectItemsAndMoveVue");return(0,o.wg)(),(0,o.j4)(C.B,{modelValue:a.dialog,"onUpdate:modelValue":t[1]||(t[1]=e=>a.dialog=e),width:"600","onClick:outside":a.cancelItem},{default:(0,o.w5)((()=>[(0,o.Wm)(A._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U.i,null,{default:(0,o.w5)((()=>[B])),_:1}),(0,o.Wm)(S.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E.D,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(H.h,{variant:"outlined",label:"Nombre","prepend-inner-icon":"mdi-form-textbox",color:"indigo",modelValue:a.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.name=e)},null,8,["modelValue"]),(0,o._)("div",K,[(0,o._)("div",q,[(0,o.Wm)(W.T,{density:"compact",class:"w-full mb-2 text-none",color:"blue-lighten-1",variant:"tonal"},{default:(0,o.w5)((()=>[(0,o.Uk)(" UNIDADES DISPONIBLES ")])),_:1}),(0,o.Wm)(c,{listGroups:a.itemsAvailable,onListSeleccionados:a.emitSelectedItemsAvailable,nameGrupo:"Obras libres"},null,8,["listGroups","onListSeleccionados"])]),(0,o._)("div",F,[(0,o._)("div",J,[(0,o.Wm)(W.T,{icon:a.isMobile?"mdi-arrow-down":"mdi-arrow-right",variant:"tonal",size:"small",color:"indigo",onClick:(0,n.iM)(a.moveSelectedItemsToAssigned,["prevent"])},null,8,["icon","onClick"]),(0,o.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("Agregar")])),_:1})]),(0,o._)("div",R,[(0,o.Wm)(W.T,{icon:a.isMobile?"mdi-arrow-up":"mdi-arrow-left",variant:"tonal",size:"small",color:"indigo",onClick:(0,n.iM)(a.moveSelectedItemsToAvailable,["prevent"])},null,8,["icon","onClick"]),(0,o.Wm)(m.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("Quitar")])),_:1})])]),(0,o._)("div",X,[(0,o.Wm)(W.T,{density:"compact",class:"w-full mb-2 text-none",color:"blue-lighten-1",variant:"tonal"},{default:(0,o.w5)((()=>[(0,o.Uk)(" UNIDADES ASIGNADAS ")])),_:1}),(0,o.Wm)(c,{listGroups:a.itemsAssigned,onListSeleccionados:a.emitSelectedItemsAssigned,nameGrupo:"Obras asignadas"},null,8,["listGroups","onListSeleccionados"])])])])),_:1})])),_:1}),(0,o.Wm)(y.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(G.C),(0,o.Wm)(W.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:a.cancelItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,o.Wm)(W.T,{color:"blue-lighten-1",variant:"tonal",onClick:a.editItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var te={components:{SelectItemsAndMoveVue:Y.Z},props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const l=(0,O.iH)([]),a=(0,O.iH)(!1),n=(0,O.iH)(""),i=(0,O.iH)(""),s=(0,O.iH)([]),c=(0,O.iH)([]),d=(0,O.iH)([]),u=(0,O.iH)([]),r=(0,O.iH)(!1);(0,o.YP)((()=>e.openModal),(e=>{a.value=e})),(0,o.YP)((()=>a.value),(e=>{1==e&&(m(),window.addEventListener("resize",m))})),(0,o.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(i.value=e.codigo,n.value=e.nombre,d.value=e.tiposeventos.map((e=>({name:e}))),(0,I.kQ)(z.Z.state.codcuenta,z.Z.state.codcliente).then((t=>{l.value=t.data.data?t.data.data[0].eventos:[],u.value=l.value.filter((t=>!e.tiposeventos.includes(t.cod_evento))).map((e=>({name:e.cod_evento})))})))}));const m=()=>{r.value=window.innerWidth<=500},v=()=>{t("edit-item",{cod_cuenta:z.Z.state.codcuenta,cod_cliente:z.Z.state.codcliente,codigo:i.value,nombre:n.value,tiposeventos:d.value.map((e=>e.name))}),p()},p=()=>{t("cancel-item")},f=e=>{c.value=e},g=e=>{s.value=e},w=()=>{if(0!=s.value.length){const e=s.value.map((e=>({name:e})));d.value.push(...e),u.value=u.value.filter((t=>-1===e.findIndex((e=>e.name===t.name))))}},b=()=>{if(0!=c.value.length){const e=c.value.map((e=>({name:e})));u.value.push(...e),d.value=d.value.filter((t=>-1===e.findIndex((e=>e.name===t.name))))}};return{dialog:a,name:n,isMobile:r,editItem:v,cancelItem:p,selectedItemsAvailable:s,selectedItemsAssigned:c,itemsAssigned:d,itemsAvailable:u,emitSelectedItemsAssigned:f,emitSelectedItemsAvailable:g,moveSelectedItemsToAssigned:w,moveSelectedItemsToAvailable:b}}};const le=(0,Q.Z)(te,[["render",ee]]);var oe=le,ae=l(3512),ne={components:{CreateGroupEventsVue:P,EditGroupEventsVue:oe},setup(){const e=(0,O.iH)([]),t=(0,O.iH)([]),l=(0,O.iH)({}),a=(0,O.iH)(!1);(0,o.bv)((async()=>{await n()}));const n=async()=>{const[l,o]=await Promise.all([(0,I.kQ)(z.Z.state.codcuenta,z.Z.state.codclienteAdmin),(0,h.Ez)(z.Z.state.codcuenta,z.Z.state.codclienteAdmin)]);e.value=l.data.data?l.data.data[0].eventos:[],t.value=o.data.data?o.data.data[0].grupos_tiposdeventos:[]},i=e=>{""!=e.nombre?(0,h.DN)(e).then((()=>{(0,ae.y)((async()=>{await n()}),"success","Logrado","Se ha creado el grupo correctamente")})).catch((()=>{(0,ae.y)((()=>{}),"error","Hubo un error","No se logro crear el grupo")})):(0,ae.y)((()=>{}),"warning","Advertencia","Ingrese un nombre")},s=e=>{(0,ae.M)((async()=>{const t={cod_cuenta:z.Z.state.codcuenta,cod_cliente:z.Z.state.codclienteAdmin,codigo:e};(0,h.A3)(t).then((()=>{(0,ae.y)((async()=>{await n()}),"success","Logrado","Se ha eliminado el grupo correctamente")})).catch((()=>{(0,ae.y)((()=>{}),"error","Hubo un error","No se logro eliminar el grupo")}))}),"¿Estás seguro de eliminar este grupo?","Aceptar")},c=e=>{a.value=!0,l.value=e},d=e=>{(0,h.vQ)(e).then((()=>{(0,ae.y)((async()=>{await n()}),"success","Logrado","Se ha editado el grupo correctamente")})).catch((()=>{(0,ae.y)((()=>{}),"error","Hubo un error","No se logro editar el grupo")}))};return{editItem:l,editDialog:a,dataEvents:e,dataGroupEvents:t,onCreateItem:i,deleteGroup:s,editGroup:c,onUpdateItem:d}}};const ie=(0,Q.Z)(ne,[["render",k]]);var se=ie}}]);
//# sourceMappingURL=57.27e77fa8.js.map