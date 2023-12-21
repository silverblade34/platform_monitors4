"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[943],{5911:function(e,t,l){l.d(t,{WY:function(){return r},kQ:function(){return o},qW:function(){return i},v6:function(){return u}});var a=l(1076);const n="http://192.168.0.46:3000/api/v1";function o(e,t){return a.Z.post(`${n}/allEvents`,{cod_cuenta:e,cod_cliente:t})}function i(e){return a.Z.post(`${n}/createEvents`,e)}function u(e){return a.Z.post(`${n}/deleteEvents`,e)}function r(e){return a.Z.put(`${n}/editEvents`,e)}},7772:function(e,t,l){l.r(t),l.d(t,{default:function(){return ye}});var a=l(3396);const n={class:"flex justify-between w-full"},o=(0,a._)("div",null,[(0,a._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Procedimientos")],-1);function i(e,t,l,i,u,r){const c=(0,a.up)("CreateProceduresVue"),d=(0,a.up)("TableProceduresVue"),s=(0,a.up)("EditProceduresVue");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[(0,a._)("div",n,[o,(0,a.Wm)(c,{onCreateItem:i.onCreateItem},null,8,["onCreateItem"])]),(0,a.Wm)(d,{desserts:i.listProceduresData,onEditItem:i.onEditItem,onDeleteItem:i.onDeleteItem},null,8,["desserts","onEditItem","onDeleteItem"])]),(0,a.Wm)(s,{openModal:i.editDialog,itemEdit:i.editItem,onCancelItem:t[0]||(t[0]=e=>i.editDialog=!1),onEditItem:i.onUpdateItem},null,8,["openModal","itemEdit","onEditItem"])],64)}var u=l(1076);const r="http://192.168.0.46:3000/api/v1";function c(e,t){return u.Z.post(`${r}/allProcedures`,{cod_cuenta:e,cod_cliente:t})}function d(e){return u.Z.post(`${r}/createProcedures`,e)}function s(e){return u.Z.put(`${r}/editProcedures`,e)}function m(e){return u.Z.post(`${r}/deleteProcedures`,e)}var v=l(7139),p=l(7312),f=l(678);const g={class:"flex gap-1 justify-center"},h=["onClick"],_=["onClick"];function w(e,t,l,n,o,i){const u=(0,a.up)("v-data-table");return(0,a.wg)(),(0,a.j4)(u,{headers:o.headers,items:l.desserts,class:"elevation-1 text-sm rounded-lg"},{["item.detalles"]:(0,a.w5)((({item:e})=>[(0,a.Uk)((0,v.zw)(n.truncateText(e.detalles)),1)])),["item.actions"]:(0,a.w5)((({item:e})=>[(0,a._)("div",g,[(0,a._)("span",{onClick:t=>n.editItem(e)},[(0,a.Wm)(p.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,a.Wm)(f.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Editar")])),_:1})],8,h),(0,a._)("span",{onClick:t=>n.deleteItem(e)},[(0,a.Wm)(p.T,{icon:"mdi-delete-empty",size:"small",variant:"text",color:"red"}),(0,a.Wm)(f.N,{activator:"parent",location:"top"},{default:(0,a.w5)((()=>[(0,a.Uk)("Eliminar")])),_:1})],8,_)])])),_:2},1032,["headers","items"])}var b=l(5470),k={props:{desserts:Array},components:{VDataTable:b.y_},emits:["delete-item","edit-item"],data(){return{headers:[{title:"Código evento",align:"start",key:"cod_evento"},{title:"Nombre",align:"start",key:"descripcion"},{title:"Detalles",align:"start",key:"detalles"},{title:"Acción",align:"center",key:"actions"}]}},setup(e,{emit:t}){const l=e=>{t("edit-item",{item:e})},a=e=>{t("delete-item",{item:e})},n=e=>e&&e.length>60?e.slice(0,60)+"...":e;return{editItem:l,deleteItem:a,truncateText:n}}},y=l(89);const W=(0,y.Z)(k,[["render",w]]);var C=W,I=l(1959),V=l(7103),x=l(836),D=l(3289),E=l(6052),U=l(8777),H=l(4193),P=l(240),Z=l(165),A=l(7120),S=l(5863),T=l(2370),F=l(1819),Y=l(4357),z=l(3185),N=l(4019),M=l(1629),L=l(8717),B=l(4906),R=l(4870),$=l(3766),j=l(131),K=l(1107),O=l(2385),X=l(9888);function G(e,t,l){if(null==t)return e;if(Array.isArray(t))throw new Error("Multiple matches is not implemented");return"number"===typeof t&&~t?(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(0,t)]),(0,a.Wm)("span",{class:"v-autocomplete__mask"},[e.substr(t,l)]),(0,a.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(t+l)])]):e}const q=(0,$.U)({autoSelectFirst:{type:[Boolean,String]},search:String,...(0,F.Up)({filterKeys:["title"]}),...(0,P.fL)(),...(0,j.CE)((0,Z.w)({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...(0,B.X)({transition:!1})},"VAutocomplete"),Q=(0,K.ev)()({name:"VAutocomplete",props:q(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:l}=t;const{t:n}=(0,M.bU)(),o=(0,R.iH)(),i=(0,R.XI)(!1),u=(0,R.XI)(!0),r=(0,R.XI)(!1),c=(0,R.iH)(),d=(0,R.iH)(),s=(0,L.z)(e,"menu"),m=(0,a.Fl)({get:()=>s.value,set:e=>{s.value&&!e&&c.value?.ΨopenChildren||(s.value=e)}}),v=(0,R.XI)(-1),p=(0,a.Fl)((()=>o.value?.color)),f=(0,a.Fl)((()=>m.value?e.closeText:e.openText)),{items:g,transformIn:h,transformOut:_}=(0,N.Ce)(e),{textColorClasses:w,textColorStyles:b}=(0,T.rY)(p),k=(0,L.z)(e,"search",""),y=(0,L.z)(e,"modelValue",[],(e=>h(null===e?[null]:(0,j.FT)(e))),(t=>{const l=_(t);return e.multiple?l:l[0]??null})),W=(0,Y.cI)(),{filteredItems:C,getMatches:P}=(0,F.L0)(e,g,(()=>u.value?"":k.value)),B=(0,a.Fl)((()=>e.hideSelected?C.value.filter((e=>!y.value.some((t=>t.value===e.value)))):C.value)),$=(0,a.Fl)((()=>y.value.map((e=>e.props.value)))),K=(0,a.Fl)((()=>{const t=!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&k.value===B.value[0]?.title;return t&&B.value.length>0&&!u.value&&!r.value})),q=(0,a.Fl)((()=>e.hideNoData&&!g.value.length||e.readonly||W?.isReadonly.value)),Q=(0,R.iH)(),{onListScroll:J,onListKeydown:ee}=(0,S.B)(Q,o);function te(t){e.openOnClear&&(m.value=!0),k.value=""}function le(){q.value||(m.value=!0)}function ae(e){q.value||(i.value&&(e.preventDefault(),e.stopPropagation()),m.value=!m.value)}function ne(t){if(e.readonly||W?.isReadonly.value)return;const l=o.value.selectionStart,a=y.value.length;if((v.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(m.value=!0),["Escape"].includes(t.key)&&(m.value=!1),K.value&&["Enter","Tab"].includes(t.key)&&me(B.value[0]),"ArrowDown"===t.key&&K.value&&Q.value?.focus("next"),e.multiple){if(["Backspace","Delete"].includes(t.key)){if(v.value<0)return void("Backspace"!==t.key||k.value||(v.value=a-1));const e=v.value,l=y.value[v.value];l&&!l.props.disabled&&me(l),v.value=e>=a-1?a-2:e}if("ArrowLeft"===t.key){if(v.value<0&&l>0)return;const e=v.value>-1?v.value-1:a-1;y.value[e]?v.value=e:(v.value=-1,o.value.setSelectionRange(k.value?.length,k.value?.length))}if("ArrowRight"===t.key){if(v.value<0)return;const e=v.value+1;y.value[e]?v.value=e:(v.value=-1,o.value.setSelectionRange(0,0))}}}function oe(e){k.value=e.target.value}function ie(e){if((0,j.Ku)(o.value,":autofill")||(0,j.Ku)(o.value,":-webkit-autofill")){const t=g.value.find((t=>t.title===e.target.value));t&&me(t)}}function ue(){i.value&&(u.value=!0,o.value?.focus())}function re(e){i.value=!0,setTimeout((()=>{r.value=!0}))}function ce(e){r.value=!1}function de(t){(null==t||""===t&&!e.multiple)&&(y.value=[])}const se=(0,R.XI)(!1);function me(t){if(e.multiple){const l=y.value.findIndex((l=>e.valueComparator(l.value,t.value)));if(-1===l)y.value=[...y.value,t];else{const e=[...y.value];e.splice(l,1),y.value=e}}else y.value=[t],se.value=!0,k.value=t.title,m.value=!1,u.value=!0,(0,a.Y3)((()=>se.value=!1))}return(0,a.YP)(i,((t,l)=>{t!==l&&(t?(se.value=!0,k.value=e.multiple?"":String(y.value.at(-1)?.props.title??""),u.value=!0,(0,a.Y3)((()=>se.value=!1))):(e.multiple||k.value?!K.value||r.value||y.value.some((e=>{let{value:t}=e;return t===B.value[0].value}))||me(B.value[0]):y.value=[],m.value=!1,k.value="",v.value=-1))})),(0,a.YP)(k,(e=>{i.value&&!se.value&&(e&&(m.value=!0),u.value=!e)})),(0,a.YP)(m,(()=>{if(!e.hideSelected&&m.value&&y.value.length){const e=B.value.findIndex((e=>y.value.some((t=>e.value===t.value))));O.BR&&window.requestAnimationFrame((()=>{e>=0&&d.value?.scrollToIndex(e)}))}})),(0,X.L)((()=>{const t=!(!e.chips&&!l.chip),r=!!(!e.hideNoData||B.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),s=y.value.length>0,[p]=Z.h.filterProps(e);return(0,a.Wm)(Z.h,(0,a.dG)({ref:o},p,{modelValue:k.value,"onUpdate:modelValue":de,focused:i.value,"onUpdate:focused":e=>i.value=e,validationValue:y.externalValue,counterValue:y.value.length,dirty:s,onInput:oe,onChange:ie,class:["v-autocomplete","v-autocomplete--"+(e.multiple?"multiple":"single"),{"v-autocomplete--active-menu":m.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!l.selection,"v-autocomplete--selecting-index":v.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:s?void 0:e.placeholder,"onClick:clear":te,"onMousedown:control":le,onKeydown:ne}),{...l,default:()=>(0,a.Wm)(a.HY,null,[(0,a.Wm)(H.T,(0,a.dG)({ref:c,modelValue:m.value,"onUpdate:modelValue":e=>m.value=e,activator:"parent",contentClass:"v-autocomplete__content",disabled:q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ue},e.menuProps),{default:()=>[r&&(0,a.Wm)(E.i,{ref:Q,selected:$.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:ee,onFocusin:re,onFocusout:ce,onScrollPassive:J,tabindex:"-1",color:e.itemColor??e.color},{default:()=>[l["prepend-item"]?.(),!B.value.length&&!e.hideNoData&&(l["no-data"]?.()??(0,a.Wm)(U.l,{title:n(e.noDataText)},null)),(0,a.Wm)(A.t,{ref:d,renderless:!0,items:B.value},{default:t=>{let{item:n,index:o,itemRef:i}=t;const r=(0,a.dG)(n.props,{ref:i,key:o,active:!(!K.value||0!==o)||void 0,onClick:()=>me(n)});return l.item?.({item:n,index:o,props:r})??(0,a.Wm)(U.l,r,{prepend:t=>{let{isSelected:l}=t;return(0,a.Wm)(a.HY,null,[e.multiple&&!e.hideSelected?(0,a.Wm)(I.p,{key:n.value,modelValue:l,ripple:!1,tabindex:"-1"},null):void 0,n.props.prependIcon&&(0,a.Wm)(D.t,{icon:n.props.prependIcon},null)])},title:()=>u.value?n.title:G(n.title,P(n)?.title,k.value?.length??0)})}}),l["append-item"]?.()]})]}),y.value.map(((n,o)=>{function i(e){e.stopPropagation(),e.preventDefault(),me(n)}const u={"onClick:close":i,onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},r=t?!!l.chip:!!l.selection,c=r?(0,j._g)(t?l.chip({item:n,index:o,props:u}):l.selection({item:n,index:o})):void 0;if(!r||c)return(0,a.Wm)("div",{key:n.value,class:["v-autocomplete__selection",o===v.value&&["v-autocomplete__selection--selected",w.value]],style:o===v.value?b.value:{}},[t?l.chip?(0,a.Wm)(x.z,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>[c]}):(0,a.Wm)(V.v,(0,a.dG)({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},u),null):c??(0,a.Wm)("span",{class:"v-autocomplete__selection-text"},[n.title,e.multiple&&o<y.value.length-1&&(0,a.Wm)("span",{class:"v-autocomplete__selection-comma"},[(0,a.Uk)(",")])])])}))]),"append-inner":function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(0,a.Wm)(a.HY,null,[l["append-inner"]?.(...o),e.menuIcon?(0,a.Wm)(D.t,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:ae,onClick:j.ZT,"aria-label":n(f.value),title:n(f.value)},null):void 0])}})})),(0,z.F)({isFocused:i,isPristine:u,menu:m,search:k,filteredItems:C,select:me},o)}});var J=l(5039),ee=l(1888),te=l(1334),le=l(3601),ae=l(8521),ne=l(9234),oe=l(4842),ie=l(1328);const ue=(0,a._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Crear procedimiento",-1);function re(e,t,l,n,o,i){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(p.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>n.dialog=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(D.t,{icon:"mdi-plus"}),(0,a.Uk)(" Crear Nuevo")])),_:1}),(0,a.Wm)(le.B,{modelValue:n.dialog,"onUpdate:modelValue":t[5]||(t[5]=e=>n.dialog=e),width:"500"},{default:(0,a.w5)((()=>[(0,a.Wm)(J._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ie.i,null,{default:(0,a.w5)((()=>[ue])),_:1}),(0,a.Wm)(ee.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ae.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{label:"Seleccionar evento",items:n.dataEvents.map((e=>e.cod_evento)),variant:"outlined",color:"indigo",modelValue:n.event,"onUpdate:modelValue":t[1]||(t[1]=e=>n.event=e),"prepend-inner-icon":"mdi-bell"},null,8,["items","modelValue"]),(0,a.Wm)(Z.h,{variant:"outlined",label:"Nombre","prepend-inner-icon":"mdi-form-textbox",color:"indigo",modelValue:n.description,"onUpdate:modelValue":t[2]||(t[2]=e=>n.description=e)},null,8,["modelValue"]),(0,a.Wm)(oe.z,{variant:"outlined",label:"Detalles","prepend-inner-icon":"mdi-text-box-check-outline",color:"indigo",modelValue:n.details,"onUpdate:modelValue":t[3]||(t[3]=e=>n.details=e),rows:"5"},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(te.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ne.C),(0,a.Wm)(p.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[4]||(t[4]=e=>n.dialog=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cancelar ")])),_:1}),(0,a.Wm)(p.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.createItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var ce=l(5911),de=l(4239),se={emits:["create-item"],setup(e,{emit:t}){const l=(0,R.iH)(!1),n=(0,R.iH)([]),o=(0,R.iH)(""),i=(0,R.iH)(""),u=(0,R.iH)("");(0,a.bv)((()=>{(0,ce.kQ)(de.Z.state.codcuenta,de.Z.state.codcliente).then((e=>{n.value=e.data.data?e.data.data[0].eventos:[]}))}));const r=()=>{t("create-item",{cod_cuenta:de.Z.state.codcuenta,cod_cliente:de.Z.state.codcliente,cod_evento:o.value,descripcion:i.value,detalles:u.value}),o.value=i.value=u.value="",l.value=!1};return{dialog:l,dataEvents:n,event:o,description:i,details:u,createItem:r}}};const me=(0,y.Z)(se,[["render",re]]);var ve=me;const pe=(0,a._)("span",{class:"px-4 w-full text-center text-blue-400 font-bold title_views"},"Editar procedimiento",-1);function fe(e,t,l,n,o,i){return(0,a.wg)(),(0,a.j4)(le.B,{modelValue:n.dialog,"onUpdate:modelValue":t[4]||(t[4]=e=>n.dialog=e),width:"500","onClick:outside":n.cancelItem},{default:(0,a.w5)((()=>[(0,a.Wm)(J._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ie.i,null,{default:(0,a.w5)((()=>[pe])),_:1}),(0,a.Wm)(ee.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ae.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z.h,{variant:"outlined",label:"Evento","prepend-inner-icon":"mdi-bell",color:"indigo",modelValue:n.cod_evento,"onUpdate:modelValue":t[0]||(t[0]=e=>n.cod_evento=e),disabled:""},null,8,["modelValue"]),(0,a.Wm)(Z.h,{variant:"outlined",label:"Nombre","prepend-inner-icon":"mdi-form-textbox",color:"indigo",modelValue:n.description,"onUpdate:modelValue":t[1]||(t[1]=e=>n.description=e)},null,8,["modelValue"]),(0,a.Wm)(oe.z,{variant:"outlined",label:"Detalles","prepend-inner-icon":"mdi-text-box-check-outline",color:"indigo",modelValue:n.details,"onUpdate:modelValue":t[2]||(t[2]=e=>n.details=e),rows:"5"},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(te.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ne.C),(0,a.Wm)(p.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:t[3]||(t[3]=e=>n.dialog=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)(" Cancelar ")])),_:1}),(0,a.Wm)(p.T,{color:"blue-lighten-1",variant:"tonal",onClick:n.editItem},{default:(0,a.w5)((()=>[(0,a.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var ge={props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const l=(0,R.iH)(!1),n=(0,R.iH)(""),o=(0,R.iH)(""),i=(0,R.iH)("");(0,a.YP)((()=>e.openModal),(e=>{l.value=e})),(0,a.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(n.value=e.item.descripcion,o.value=e.item.detalles,i.value=e.item.cod_evento)}));const u=()=>{t("edit-item",{cod_cuenta:de.Z.state.codcuenta,cod_cliente:de.Z.state.codcliente,cod_evento:e.itemEdit.item.cod_evento,descripcion:n.value,detalles:o.value}),n.value=o.value="",r()},r=()=>{t("cancel-item")};return{dialog:l,description:n,cod_evento:i,details:o,editItem:u,cancelItem:r}}};const he=(0,y.Z)(ge,[["render",fe]]);var _e=he,we=l(3512),be={components:{TableProceduresVue:C,CreateProceduresVue:ve,EditProceduresVue:_e},setup(){const e=(0,R.iH)([]),t=(0,R.iH)({}),l=(0,R.iH)(!1);(0,a.bv)((async()=>{await n()}));const n=async()=>{c(de.Z.state.codcuenta,de.Z.state.codclienteAdmin).then((t=>{e.value=t.data.data[0].procedimientos}))},o=e=>{""!=e.cod_evento&&""!=e.descripcion&&""!=e.detalles?d(e).then((()=>{(0,we.y)((async()=>{await n()}),"success","Logrado","Se ha creado el procedimiento correctamente")})).catch((()=>{(0,we.y)((()=>{}),"error","Hubo un error","No se logro crear el procedimiento")})):(0,we.y)((()=>{}),"warning","Advertencia","Rellene todos los campos")},i=e=>{const t={cod_evento:e.item.cod_evento,cod_cuenta:de.Z.state.codcuenta,cod_cliente:de.Z.state.codclienteAdmin};(0,we.M)((async()=>{await m(t).then((()=>{(0,we.y)((async()=>{await n()}),"success","Logrado","Se ha eliminado el procedimiento correctamente")})).catch((e=>{console.log(e),(0,we.y)((()=>{}),"error","Hubo un error","No se logro eliminar")}))}),"¿Estás seguro de eliminar este procedimiento?","Aceptar")},u=e=>{t.value=e,l.value=!0},r=e=>{s(e).then((()=>{(0,we.y)((async()=>{await n()}),"success","Logrado","Se ha editado el procedimiento correctamente")})).catch((()=>{(0,we.y)((()=>{}),"error","Hubo un error","No se logro editar el procedimiento")}))};return{listProceduresData:e,editDialog:l,editItem:t,onUpdateItem:r,onDeleteItem:i,onCreateItem:o,onEditItem:u}}};const ke=(0,y.Z)(be,[["render",i]]);var ye=ke}}]);
//# sourceMappingURL=943.294ab0b6.js.map