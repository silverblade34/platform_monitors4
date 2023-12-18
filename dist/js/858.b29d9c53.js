"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[858],{3512:function(e,t,l){l.d(t,{M:function(){return s},y:function(){return o}});var n=l(2492),a=l.n(n);function o(e,t,l,n){a().fire({icon:t,html:`<p class="text-lg font-semibold">${l}</p>\n          <p class="text-base">${n}</p>`,showCancelButton:!1,confirmButtonText:"Aceptar",confirmButtonColor:"#006cac",reverseButtons:!0}).then((t=>{t.isConfirmed&&e()}))}function s(e,t,l){a().fire({icon:"question",html:`<p class="text-lg">${t}</p>`,showCancelButton:!0,reverseButtons:!0,confirmButtonText:l,confirmButtonColor:"#3b82f6",cancelButtonText:"Cancelar"}).then((t=>{t.isConfirmed&&e()}))}},8609:function(e,t,l){l.d(t,{Z:function(){return v}});var n=l(3396),a=l(7139);const o={class:"w-full"},s={class:"w-full rounded h-[16rem] overflow-y-auto p-2 border container_scroll",id:"grupos-disponibles"},i=["onClick"];function r(e,t,l,r,c,u){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",s,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.listGroupsInitial,(e=>((0,n.wg)(),(0,n.iD)("p",{key:e.name,class:(0,a.C_)(["p-2 pl-2 text-sm my-1 ease-in duration-100 cursor-pointer rounded-sm",{"bg-blue-200":r.selectedItems.includes(e.name),"bg-gray-200 hover:bg-gray-300":!r.selectedItems.includes(e.name)}]),onClick:t=>r.toggleSelection(e.name,t)},(0,a.zw)(r.truncateText(e.name)),11,i)))),128))])])}l(560);var c=l(4870),u={props:{listGroups:Array,nameGrupo:String},emits:["list-seleccionados"],setup(e,{emit:t}){const l=(0,c.iH)(e.listGroups),a=(0,c.iH)([]);(0,n.YP)((()=>e.listGroups),(e=>{l.value=e})),(0,n.YP)((()=>a.value),(e=>{t("list-seleccionados",e)}));const o=(e,l)=>{const n=a.value.indexOf(e);n>-1?a.value.splice(n,1):(l.ctrlKey||l.metaKey?a.value.push(e):a.value=[e],t("list-seleccionados",a.value))},s=()=>{a.value=l.value.map((e=>e.name))},i=e=>e&&e.length>20?e.slice(0,20)+"...":e;return{selectedItems:a,listGroupsInitial:l,toggleSelectionAll:s,toggleSelection:o,truncateText:i}}},d=l(89);const p=(0,d.Z)(u,[["render",r]]);var v=p},7771:function(e,t,l){l.d(t,{w:function(){return w}});var n=l(3396),a=l(1114);const o=(0,a.J)("v-alert-title");var s=l(7312),i=l(836),r=l(3289),c=l(2370),u=l(9166),d=l(9694),p=l(4544),v=l(2465),f=l(4960),m=l(1629),y=l(5180),x=l(489),g=l(8717),b=l(4231),S=l(1138),C=l(5935),V=l(5221),h=l(4870),k=l(3766),I=l(1107);const W=["success","info","warning","error"],_=(0,k.U)({border:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:f.lE,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>W.includes(e)},...(0,u.l)(),...(0,d.f)(),...(0,p.x)(),...(0,v.c)(),...(0,y.y)(),...(0,x.F)(),...(0,b.I)(),...(0,S.Q)(),...(0,C.x$)(),...(0,V.bk)({variant:"flat"})},"VAlert"),w=(0,I.ev)()({name:"VAlert",props:_(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:l,slots:a}=t;const u=(0,g.z)(e,"modelValue"),f=(0,n.Fl)((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),S=(0,n.Fl)((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:k}=(0,C.ER)(e),{colorClasses:I,colorStyles:W,variantClasses:_}=(0,V.c1)(S),{densityClasses:w}=(0,d.t)(e),{dimensionStyles:B}=(0,p.$)(e),{elevationClasses:F}=(0,v.Y)(e),{locationStyles:E}=(0,y.T)(e),{positionClasses:P}=(0,x.K)(e),{roundedClasses:T}=(0,b.b)(e),{textColorClasses:$,textColorStyles:A}=(0,c.rY)((0,h.Vh)(e,"borderColor")),{t:G}=(0,m.bU)(),H=(0,n.Fl)((()=>({"aria-label":G(e.closeLabel),onClick(e){u.value=!1,l("click:close",e)}})));return()=>{const t=!(!a.prepend&&!f.value),l=!(!a.title&&!e.title),c=!(!a.close&&!e.closable);return u.value&&(0,n.Wm)(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},k.value,I.value,w.value,F.value,P.value,T.value,_.value,e.class],style:[W.value,B.value,E.value,e.style],role:"alert"},{default:()=>[(0,V.Ux)(!1,"v-alert"),e.border&&(0,n.Wm)("div",{key:"border",class:["v-alert__border",$.value],style:A.value},null),t&&(0,n.Wm)("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?(0,n.Wm)(i.z,{key:"prepend-defaults",disabled:!f.value,defaults:{VIcon:{density:e.density,icon:f.value,size:e.prominent?44:28}}},a.prepend):(0,n.Wm)(r.t,{key:"prepend-icon",density:e.density,icon:f.value,size:e.prominent?44:28},null)]),(0,n.Wm)("div",{class:"v-alert__content"},[l&&(0,n.Wm)(o,{key:"title"},{default:()=>[a.title?.()??e.title]}),a.text?.()??e.text,a.default?.()]),a.append&&(0,n.Wm)("div",{key:"append",class:"v-alert__append"},[a.append()]),c&&(0,n.Wm)("div",{key:"close",class:"v-alert__close"},[a.close?(0,n.Wm)(i.z,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[a.close?.({props:H.value})]}):(0,n.Wm)(s.T,(0,n.dG)({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},H.value),null)])]})}}})},3446:function(e,t,l){l.d(t,{M:function(){return S}});l(560);var n=l(3396),a=l(4108),o=l(4580),s=l(6191),i=l(2370),r=l(9166),c=l(6107),u=l(2465),d=l(1970),p=l(1136),v=l(4231),f=l(1138),m=l(4870),y=l(3766),x=l(1107),g=l(9888);const b=(0,y.U)({title:String,text:String,bgColor:String,...(0,r.l)(),...(0,u.c)(),...(0,d.YQ)(),...(0,p.H)(),...(0,v.I)(),...(0,f.Q)(),...(0,s.w)()},"VExpansionPanel"),S=(0,x.ev)()({name:"VExpansionPanel",props:b(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:l}=t;const r=(0,d.Yt)(e,a.jS),{backgroundColorClasses:p,backgroundColorStyles:f}=(0,i.Y5)(e,"bgColor"),{elevationClasses:y}=(0,u.Y)(e),{roundedClasses:x}=(0,v.b)(e),b=(0,n.Fl)((()=>r?.disabled.value||e.disabled)),S=(0,n.Fl)((()=>r.group.items.value.reduce(((e,t,l)=>(r.group.selected.value.includes(t.id)&&e.push(l),e)),[]))),C=(0,n.Fl)((()=>{const e=r.group.items.value.findIndex((e=>e.id===r.id));return!r.isSelected.value&&S.value.some((t=>t-e===1))})),V=(0,n.Fl)((()=>{const e=r.group.items.value.findIndex((e=>e.id===r.id));return!r.isSelected.value&&S.value.some((t=>t-e===-1))}));return(0,n.JJ)(a.jS,r),(0,c.AF)({VExpansionPanelText:{eager:(0,m.Vh)(e,"eager")}}),(0,g.L)((()=>{const t=!(!l.text&&!e.text),a=!(!l.title&&!e.title);return(0,n.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":r.isSelected.value,"v-expansion-panel--before-active":C.value,"v-expansion-panel--after-active":V.value,"v-expansion-panel--disabled":b.value},x.value,p.value,e.class],style:[f.value,e.style]},{default:()=>[(0,n.Wm)("div",{class:["v-expansion-panel__shadow",...y.value]},null),a&&(0,n.Wm)(s.V,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[l.title?l.title():e.title]}),t&&(0,n.Wm)(o.H,{key:"text"},{default:()=>[l.text?l.text():e.text]}),l.default?.()]})})),{}}})},4580:function(e,t,l){l.d(t,{H:function(){return v}});var n=l(3396),a=l(9242),o=l(4108),s=l(8952),i=l(9166),r=l(1136),c=l(3766),u=l(1107),d=l(9888);const p=(0,c.U)({...(0,i.l)(),...(0,r.H)()},"VExpansionPanelText"),v=(0,u.ev)()({name:"VExpansionPanelText",props:p(),setup(e,t){let{slots:l}=t;const i=(0,n.f3)(o.jS);if(!i)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:c,onAfterLeave:u}=(0,r.l)(e,i.isSelected);return(0,d.L)((()=>(0,n.Wm)(s.Fx,{onAfterLeave:u},{default:()=>[(0,n.wy)((0,n.Wm)("div",{class:["v-expansion-panel-text",e.class],style:e.style},[l.default&&c.value&&(0,n.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[l.default?.()])]),[[a.F8,i.isSelected.value]])]}))),{}}})},6191:function(e,t,l){l.d(t,{V:function(){return f},w:function(){return v}});var n=l(3396),a=l(4108),o=l(3289),s=l(2370),i=l(9166),r=l(4960),c=l(3824),u=l(3766),d=l(1107),p=l(9888);const v=(0,u.U)({color:String,expandIcon:{type:r.lE,default:"$expand"},collapseIcon:{type:r.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...(0,i.l)()},"VExpansionPanelTitle"),f=(0,d.ev)()({name:"VExpansionPanelTitle",directives:{Ripple:c.H},props:v(),setup(e,t){let{slots:l}=t;const i=(0,n.f3)(a.jS);if(!i)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=(0,s.Y5)(e,"color"),u=(0,n.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:i.disabled.value,expanded:i.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,p.L)((()=>(0,n.wy)((0,n.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":i.isSelected.value},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:i.disabled.value?-1:void 0,disabled:i.disabled.value,"aria-expanded":i.isSelected.value,onClick:e.readonly?void 0:i.toggle},[(0,n.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),l.default?.(u.value),!e.hideActions&&(0,n.Wm)("span",{class:"v-expansion-panel-title__icon"},[l.actions?l.actions(u.value):(0,n.Wm)(o.t,{icon:i.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,n.Q2)("ripple"),e.ripple]]))),{}}})},4108:function(e,t,l){l.d(t,{jS:function(){return v},Vc:function(){return y}});var n=l(3396),a=l(9166),o=l(6107),s=l(1970),i=l(1138),r=l(5935),c=l(4870),u=l(3766),d=l(1107),p=l(9888);const v=Symbol.for("vuetify:v-expansion-panel"),f=["default","accordion","inset","popout"],m=(0,u.U)({color:String,variant:{type:String,default:"default",validator:e=>f.includes(e)},readonly:Boolean,...(0,a.l)(),...(0,s.k4)(),...(0,i.Q)(),...(0,r.x$)()},"VExpansionPanels"),y=(0,d.ev)()({name:"VExpansionPanels",props:m(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;(0,s._v)(e,v);const{themeClasses:a}=(0,r.ER)(e),i=(0,n.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,o.AF)({VExpansionPanel:{color:(0,c.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,c.Vh)(e,"readonly")}}),(0,p.L)((()=>(0,n.Wm)(e.tag,{class:["v-expansion-panels",a.value,i.value,e.class],style:e.style},l))),{}}})},678:function(e,t,l){l.d(t,{N:function(){return m}});var n=l(3396),a=l(5164),o=l(3185),s=l(8717),i=l(5975),r=l(4870),c=l(3766),u=l(131),d=l(1107),p=l(7514),v=l(9888);const f=(0,c.U)({id:String,text:String,...(0,u.CE)((0,a.B)({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),m=(0,d.ev)()({name:"VTooltip",props:f(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const c=(0,s.z)(e,"modelValue"),{scopeId:u}=(0,i.a)(),d=(0,p.sq)(),f=(0,n.Fl)((()=>e.id||`v-tooltip-${d}`)),m=(0,r.iH)(),y=(0,n.Fl)((()=>e.location.split(" ").length>1?e.location:e.location+" center")),x=(0,n.Fl)((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),g=(0,n.Fl)((()=>e.transition?e.transition:c.value?"scale-transition":"fade-transition")),b=(0,n.Fl)((()=>(0,n.dG)({"aria-describedby":f.value},e.activatorProps)));return(0,v.L)((()=>{const[t]=a.y.filterProps(e);return(0,n.Wm)(a.y,(0,n.dG)({ref:m,class:["v-tooltip",e.class],style:e.style,id:f.value},t,{modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,transition:g.value,absolute:!0,location:y.value,origin:x.value,persistent:!0,role:"tooltip",activatorProps:b.value,_disableGlobalStack:!0},u),{activator:l.activator,default:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return l.default?.(...n)??e.text}})})),(0,o.F)({},m)}})}}]);
//# sourceMappingURL=858.b29d9c53.js.map