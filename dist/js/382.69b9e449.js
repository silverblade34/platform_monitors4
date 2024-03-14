"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[382],{8099:function(){},201:function(e,t,o){o.d(t,{Lo:function(){return i},e:function(){return a},rX:function(){return r}});var l=o(1076);const n="http://67.205.164.216:3000/api/v1";function a(e,t){return l.Z.post(`${n}/allShifts`,{cod_cuenta:e,cod_cliente:t})}function i(e){return l.Z.post(`${n}/createShifts`,e)}function r(e){return l.Z.put(`${n}/editShifts`,e)}},3512:function(e,t,o){o.d(t,{M:function(){return i},y:function(){return a}});var l=o(2492),n=o.n(l);function a(e,t,o,l){n().fire({icon:t,html:`<p class="text-lg font-semibold">${o}</p>\n          <p class="text-base">${l}</p>`,showCancelButton:!1,confirmButtonText:"Aceptar",confirmButtonColor:"#006cac",reverseButtons:!0}).then((t=>{t.isConfirmed&&e()}))}function i(e,t,o){n().fire({icon:"question",html:`<p class="text-lg">${t}</p>`,showCancelButton:!0,reverseButtons:!0,confirmButtonText:o,confirmButtonColor:"#3b82f6",cancelButtonText:"Cancelar"}).then((t=>{t.isConfirmed&&e()}))}},382:function(e,t,o){o.r(t),o.d(t,{default:function(){return O}});var l=o(3396);const n={class:"flex justify-between w-full"},a=(0,l._)("div",null,[(0,l._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Turnos")],-1);function i(e,t,o,i,r,s){const u=(0,l.up)("CreateShiftsVue"),c=(0,l.up)("TableShiftsVue"),d=(0,l.up)("EditShiftsVue");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[(0,l._)("div",n,[a,(0,l.Wm)(u,{onCreateItem:i.onCreateItem},null,8,["onCreateItem"])]),(0,l.Wm)(c,{desserts:i.listShiftsData,onEditItem:i.onEditItem},null,8,["desserts","onEditItem"])]),(0,l.Wm)(d,{openModal:i.editDialog,itemEdit:i.editItem,onCancelItem:t[0]||(t[0]=e=>i.editDialog=!1),onEditItem:i.onUpdateItem},null,8,["openModal","itemEdit","onEditItem"])],64)}var r=o(201),s=o(7312),u=o(678);const c={class:"flex gap-1 justify-center"},d=["onClick"];function m(e,t,o,n,a,i){const r=(0,l.up)("v-data-table");return(0,l.wg)(),(0,l.j4)(r,{headers:a.headers,items:o.desserts,class:"elevation-1 text-sm rounded-lg"},{["item.actions"]:(0,l.w5)((({item:e})=>[(0,l._)("div",c,[(0,l._)("span",{onClick:t=>n.editItem(e)},[(0,l.Wm)(s.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,l.Wm)(u.N,{activator:"parent",location:"top"},{default:(0,l.w5)((()=>[(0,l.Uk)("Editar")])),_:1})],8,d)])])),_:2},1032,["headers","items"])}var p=o(5470),f={props:{desserts:Array},components:{VDataTable:p.y_},emits:["delete-item","edit-item"],data(){return{headers:[{title:"Código",align:"start",key:"cod_turno"},{title:"Descripción",align:"start",key:"descripcion"},{title:"Desde",align:"start",key:"desde"},{title:"Hasta",align:"start",key:"hasta"},{title:"Acción",align:"center",key:"actions"}]}},setup(e,{emit:t}){const o=e=>{t("edit-item",{item:e})},l=e=>{t("delete-item",{item:e})};return{editItem:o,deleteItem:l}}},v=o(89);const g=(0,v.Z)(f,[["render",m]]);var b=g,h=o(11),y=o(1888),_=o(1334),V=o(3601),k=o(8521),C=o(9234),W=o(3289),x=o(165),w=o(1328);const H=(0,l._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Crear turno",-1);function S(e,t,o,n,a,i){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>n.dialog=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(W.t,{icon:"mdi-plus"}),(0,l.Uk)(" Crear Nuevo")])),_:1}),(0,l.Wm)(V.B,{modelValue:n.dialog,"onUpdate:modelValue":t[5]||(t[5]=e=>n.dialog=e),width:"500"},{default:(0,l.w5)((()=>[(0,l.Wm)(h._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w.i,null,{default:(0,l.w5)((()=>[H])),_:1}),(0,l.Wm)(y.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(x.h,{variant:"outlined",label:"Descripción","prepend-inner-icon":"mdi-text-box-check-outline",color:"indigo",modelValue:n.description,"onUpdate:modelValue":t[1]||(t[1]=e=>n.description=e)},null,8,["modelValue"]),(0,l.Wm)(x.h,{variant:"outlined",label:"Desde","prepend-inner-icon":"mdi-account-clock",color:"indigo",modelValue:n.fromHour,"onUpdate:modelValue":t[2]||(t[2]=e=>n.fromHour=e),type:"time"},null,8,["modelValue"]),(0,l.Wm)(x.h,{variant:"outlined",label:"Hasta","prepend-inner-icon":"mdi-account-clock",color:"indigo",modelValue:n.toHour,"onUpdate:modelValue":t[3]||(t[3]=e=>n.toHour=e),type:"time"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(_.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C.C),(0,l.Wm)(s.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[4]||(t[4]=e=>n.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1}),(0,l.Wm)(s.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.createItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var I=o(4870),T=o(4239),B={emits:["create-item"],setup(e,{emit:t}){const o=(0,I.iH)(!1),l=(0,I.iH)(""),n=(0,I.iH)(""),a=(0,I.iH)(""),i=()=>{t("create-item",{cod_cuenta:T.Z.state.codcuenta,cod_cliente:T.Z.state.codcliente,cod_turno:"",descripcion:l.value,desde:n.value,hasta:a.value}),l.value=n.value=a.value="",o.value=!1};return{dialog:o,description:l,fromHour:n,toHour:a,createItem:i}}};const U=(0,v.Z)(B,[["render",S]]);var E=U;const D=(0,l._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Editar turno",-1);function N(e,t,o,n,a,i){return(0,l.wg)(),(0,l.j4)(V.B,{modelValue:n.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>n.dialog=e),width:"500","onClick:outside":n.cancelItem},{default:(0,l.w5)((()=>[(0,l.Wm)(h._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w.i,null,{default:(0,l.w5)((()=>[D])),_:1}),(0,l.Wm)(y.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(x.h,{variant:"outlined",label:"Descripción","prepend-inner-icon":"mdi-text-box-check-outline",color:"indigo",modelValue:n.description,"onUpdate:modelValue":t[0]||(t[0]=e=>n.description=e)},null,8,["modelValue"]),(0,l.Wm)(x.h,{variant:"outlined",label:"Desde","prepend-inner-icon":"mdi-account-clock",color:"indigo",modelValue:n.fromHour,"onUpdate:modelValue":t[1]||(t[1]=e=>n.fromHour=e),type:"time"},null,8,["modelValue"]),(0,l.Wm)(x.h,{variant:"outlined",label:"Hasta","prepend-inner-icon":"mdi-account-clock",color:"indigo",modelValue:n.toHour,"onUpdate:modelValue":t[2]||(t[2]=e=>n.toHour=e),type:"time"},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(_.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C.C),(0,l.Wm)(s.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[3]||(t[3]=e=>n.dialog=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1}),(0,l.Wm)(s.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.editItem},{default:(0,l.w5)((()=>[(0,l.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var Z={props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const o=(0,I.iH)(!1),n=(0,I.iH)(""),a=(0,I.iH)(""),i=(0,I.iH)("");(0,l.YP)((()=>e.openModal),(e=>{o.value=e})),(0,l.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(n.value=e.item.descripcion,a.value=e.item.desde,i.value=e.item.hasta)}));const r=()=>{t("edit-item",{cod_cuenta:T.Z.state.codcuenta,cod_cliente:T.Z.state.codcliente,cod_turno:e.itemEdit.item.cod_turno,descripcion:n.value,desde:a.value,hasta:i.value}),n.value=a.value=i.value="",s()},s=()=>{t("cancel-item")};return{dialog:o,description:n,fromHour:a,toHour:i,editItem:r,cancelItem:s}}};const $=(0,v.Z)(Z,[["render",N]]);var A=$,F=o(3512),j={components:{TableShiftsVue:b,CreateShiftsVue:E,EditShiftsVue:A},setup(){const e=(0,I.iH)([]),t=(0,I.iH)({}),o=(0,I.iH)(!1);(0,l.bv)((async()=>{await n()}));const n=async()=>{(0,r.e)(T.Z.state.codcuenta,T.Z.state.codclienteAdmin).then((t=>{e.value=t.data.data[0].turnos}))},a=e=>{""!=e.descripcion&&""!=e.desde&&""!=e.hasta?(0,r.Lo)(e).then((()=>{(0,F.y)((async()=>{await n()}),"success","Logrado","Se ha creado el turno correctamente")})).catch((()=>{(0,F.y)((()=>{}),"error","Hubo un error","No se logro crear el turno")})):(0,F.y)((()=>{}),"warning","Advertencia","Rellene todos los campos")},i=e=>{t.value=e,o.value=!0},s=e=>{(0,r.rX)(e).then((()=>{(0,F.y)((async()=>{await n()}),"success","Logrado","Se ha editado el turno correctamente")})).catch((()=>{(0,F.y)((()=>{}),"error","Hubo un error","No se logro editar el turno")}))};return{listShiftsData:e,editDialog:o,editItem:t,onUpdateItem:s,onCreateItem:a,onEditItem:i}}};const L=(0,v.Z)(j,[["render",i]]);var O=L},8521:function(e,t,o){o.d(t,{D:function(){return b}});o(560),o(8099);var l=o(9166),n=o(8157),a=o(1138),i=o(7139),r=o(3396),s=o(3766),u=o(1107);const c=(()=>n.AV.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),d=(()=>n.AV.reduce(((e,t)=>{const o="offset"+(0,i.kC)(t);return e[o]={type:[String,Number],default:null},e}),{}))(),m=(()=>n.AV.reduce(((e,t)=>{const o="order"+(0,i.kC)(t);return e[o]={type:[String,Number],default:null},e}),{}))(),p={col:Object.keys(c),offset:Object.keys(d),order:Object.keys(m)};function f(e,t,o){let l=e;if(null!=o&&!1!==o){if(t){const o=t.replace(e,"");l+=`-${o}`}return"col"===e&&(l="v-"+l),"col"!==e||""!==o&&!0!==o?(l+=`-${o}`,l.toLowerCase()):l.toLowerCase()}}const v=["auto","start","end","center","baseline","stretch"],g=(0,s.U)({cols:{type:[Boolean,String,Number],default:!1},...c,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>v.includes(e)},...(0,l.l)(),...(0,a.Q)()},"VCol"),b=(0,u.ev)()({name:"VCol",props:g(),setup(e,t){let{slots:o}=t;const l=(0,r.Fl)((()=>{const t=[];let o;for(o in p)p[o].forEach((l=>{const n=e[l],a=f(o,l,n);a&&t.push(a)}));const l=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>(0,r.h)(e.tag,{class:[l.value,e.class],style:e.style},o.default?.())}})},9234:function(e,t,o){o.d(t,{C:function(){return n}});var l=o(1114);const n=(0,l.J)("v-spacer","div","VSpacer")},1328:function(e,t,o){o.d(t,{i:function(){return x}});var l=o(3396),n=o(9166),a=o(1138),i=o(3766),r=o(1107),s=o(9888);const u=(0,i.U)({text:String,...(0,n.l)(),...(0,a.Q)()},"VToolbarTitle"),c=(0,r.ev)()({name:"VToolbarTitle",props:u(),setup(e,t){let{slots:o}=t;return(0,s.L)((()=>{const t=!!(o.default||o.text||e.text);return(0,l.Wm)(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[t&&(0,l.Wm)("div",{class:"v-toolbar-title__placeholder"},[o.text?o.text():e.text,o.default?.()])]})})),{}}});var d=o(8952),m=o(836),p=o(8694),f=o(2718),v=o(2370),g=o(6107),b=o(2465),h=o(1629),y=o(4231),_=o(5935),V=o(4870),k=o(131);const C=[null,"prominent","default","comfortable","compact"],W=(0,i.U)({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>C.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...(0,f.m)(),...(0,n.l)(),...(0,b.c)(),...(0,y.I)(),...(0,a.Q)({tag:"header"}),...(0,_.x$)()},"VToolbar"),x=(0,r.ev)()({name:"VToolbar",props:W(),setup(e,t){let{slots:o}=t;const{backgroundColorClasses:n,backgroundColorStyles:a}=(0,v.Y5)((0,V.Vh)(e,"color")),{borderClasses:i}=(0,f.P)(e),{elevationClasses:r}=(0,b.Y)(e),{roundedClasses:u}=(0,y.b)(e),{themeClasses:C}=(0,_.ER)(e),{rtlClasses:W}=(0,h.Vw)(),x=(0,V.XI)(!(!e.extended&&!o.extension?.())),w=(0,l.Fl)((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),H=(0,l.Fl)((()=>x.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return(0,g.AF)({VBtn:{variant:"text"}}),(0,s.L)((()=>{const t=!(!e.title&&!o.title),s=!(!o.image&&!e.image),f=o.extension?.();return x.value=!(!e.extended&&!f),(0,l.Wm)(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,i.value,r.value,u.value,C.value,W.value,e.class],style:[a.value,e.style]},{default:()=>[s&&(0,l.Wm)("div",{key:"image",class:"v-toolbar__image"},[o.image?(0,l.Wm)(m.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},o.image):(0,l.Wm)(p.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,l.Wm)(m.z,{defaults:{VTabs:{height:(0,k.kb)(w.value)}}},{default:()=>[(0,l.Wm)("div",{class:"v-toolbar__content",style:{height:(0,k.kb)(w.value)}},[o.prepend&&(0,l.Wm)("div",{class:"v-toolbar__prepend"},[o.prepend?.()]),t&&(0,l.Wm)(c,{key:"title",text:e.title},{text:o.title}),o.default?.(),o.append&&(0,l.Wm)("div",{class:"v-toolbar__append"},[o.append?.()])])]}),(0,l.Wm)(m.z,{defaults:{VTabs:{height:(0,k.kb)(H.value)}}},{default:()=>[(0,l.Wm)(d.Fx,null,{default:()=>[x.value&&(0,l.Wm)("div",{class:"v-toolbar__extension",style:{height:(0,k.kb)(H.value)}},[f])]})]})]})})),{contentHeight:w,extensionHeight:H}}})},678:function(e,t,o){o.d(t,{N:function(){return v}});var l=o(3396),n=o(5164),a=o(3185),i=o(8717),r=o(5975),s=o(4870),u=o(3766),c=o(131),d=o(1107),m=o(7514),p=o(9888);const f=(0,u.U)({id:String,text:String,...(0,c.CE)((0,n.B)({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),v=(0,d.ev)()({name:"VTooltip",props:f(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const u=(0,i.z)(e,"modelValue"),{scopeId:c}=(0,r.a)(),d=(0,m.sq)(),f=(0,l.Fl)((()=>e.id||`v-tooltip-${d}`)),v=(0,s.iH)(),g=(0,l.Fl)((()=>e.location.split(" ").length>1?e.location:e.location+" center")),b=(0,l.Fl)((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),h=(0,l.Fl)((()=>e.transition?e.transition:u.value?"scale-transition":"fade-transition")),y=(0,l.Fl)((()=>(0,l.dG)({"aria-describedby":f.value},e.activatorProps)));return(0,p.L)((()=>{const[t]=n.y.filterProps(e);return(0,l.Wm)(n.y,(0,l.dG)({ref:v,class:["v-tooltip",e.class],style:e.style,id:f.value},t,{modelValue:u.value,"onUpdate:modelValue":e=>u.value=e,transition:h.value,absolute:!0,location:g.value,origin:b.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},c),{activator:o.activator,default:function(){for(var t=arguments.length,l=new Array(t),n=0;n<t;n++)l[n]=arguments[n];return o.default?.(...l)??e.text}})})),(0,a.F)({},v)}})}}]);
//# sourceMappingURL=382.69b9e449.js.map