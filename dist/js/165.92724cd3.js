"use strict";(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[165],{348:function(){},2816:function(e,l,n){n.d(l,{_:function(){return v}});var a=n(3396),t=n(9242),i=n(8952),s=n(9166),o=n(4906),r=n(3766),u=n(1107),d=n(9888);const c=(0,r.U)({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...(0,s.l)(),...(0,o.X)({transition:{component:i.cu}})},"VCounter"),v=(0,u.ev)()({name:"VCounter",functional:!0,props:c(),setup(e,l){let{slots:n}=l;const i=(0,a.Fl)((()=>e.max?`${e.value} / ${e.max}`:String(e.value)));return(0,d.L)((()=>(0,a.Wm)(o.J,{transition:e.transition},{default:()=>[(0,a.wy)((0,a.Wm)("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[t.F8,e.active]])]}))),{}}})},7173:function(e,l,n){n.d(l,{hF:function(){return S},g8:function(){return B},hy:function(){return k}});var a=n(3396),t=n(9242),i=n(7302),s=n(9166),o=n(3766),r=n(1107),u=n(9888);const d=(0,o.U)({floating:Boolean,...(0,s.l)()},"VFieldLabel"),c=(0,r.ev)()({name:"VFieldLabel",props:d(),setup(e,l){let{slots:n}=l;return(0,u.L)((()=>(0,a.Wm)(i.J,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n))),{}}});var v=n(8952),p=n(6308),f=n(2370),m=n(8969),y=n(4960),g=n(1710),b=n(1629),h=n(4231),x=n(5935),F=n(4870),_=n(131),C=n(7514),V=n(3122),W=n(8587);const I=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],k=(0,o.U)({appendInnerIcon:y.lE,bgColor:String,clearable:Boolean,clearIcon:{type:y.lE,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:y.lE,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>I.includes(e)},"onClick:clear":(0,_.as)(),"onClick:appendInner":(0,_.as)(),"onClick:prependInner":(0,_.as)(),...(0,s.l)(),...(0,g.fF)(),...(0,h.I)(),...(0,x.x$)()},"VField"),S=(0,r.ev)()({name:"VField",inheritAttrs:!1,props:{id:String,...(0,m.B)(),...k()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:n,emit:i,slots:s}=l;const{themeClasses:o}=(0,x.ER)(e),{loaderClasses:r}=(0,g.U2)(e),{focusClasses:d,isFocused:y,focus:I,blur:k}=(0,m.K)(e),{InputIcon:S}=(0,p.v)(e),{roundedClasses:B}=(0,h.b)(e),{rtlClasses:$}=(0,b.Vw)(),w=(0,a.Fl)((()=>e.dirty||e.active)),A=(0,a.Fl)((()=>!e.singleLine&&!(!e.label&&!s.label))),D=(0,C.sq)(),L=(0,a.Fl)((()=>e.id||`input-${D}`)),P=(0,a.Fl)((()=>`${L.value}-messages`)),U=(0,F.iH)(),M=(0,F.iH)(),Y=(0,F.iH)(),H=(0,a.Fl)((()=>["plain","underlined"].includes(e.variant))),{backgroundColorClasses:z,backgroundColorStyles:E}=(0,f.Y5)((0,F.Vh)(e,"bgColor")),{textColorClasses:R,textColorStyles:q}=(0,f.rY)((0,a.Fl)((()=>e.error||e.disabled?void 0:w.value&&y.value?e.color:e.baseColor)));(0,a.YP)(w,(e=>{if(A.value){const l=U.value.$el,n=M.value.$el;requestAnimationFrame((()=>{const a=(0,V.G)(l),t=n.getBoundingClientRect(),i=t.x-a.x,s=t.y-a.y-(a.height/2-t.height/2),o=t.width/.75,r=Math.abs(o-a.width)>1?{maxWidth:(0,_.kb)(o)}:void 0,u=getComputedStyle(l),d=getComputedStyle(n),c=1e3*parseFloat(u.transitionDuration)||150,v=parseFloat(d.getPropertyValue("--v-field-label-scale")),p=d.getPropertyValue("color");l.style.visibility="visible",n.style.visibility="hidden",(0,V.j)(l,{transform:`translate(${i}px, ${s}px) scale(${v})`,color:p,...r},{duration:c,easing:W.Ly,direction:e?"normal":"reverse"}).finished.then((()=>{l.style.removeProperty("visibility"),n.style.removeProperty("visibility")}))}))}}),{flush:"post"});const O=(0,a.Fl)((()=>({isActive:w,isFocused:y,controlRef:Y,blur:k,focus:I})));function T(e){e.target!==document.activeElement&&e.preventDefault()}return(0,u.L)((()=>{const l="outlined"===e.variant,i=s["prepend-inner"]||e.prependInnerIcon,u=!(!e.clearable&&!s.clear),p=!!(s["append-inner"]||e.appendInnerIcon||u),f=s.label?s.label({...O.value,label:e.label,props:{for:L.value}}):e.label;return(0,a.Wm)("div",(0,a.dG)({class:["v-field",{"v-field--active":w.value,"v-field--appended":p,"v-field--center-affix":e.centerAffix??!H.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":i,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!f,[`v-field--variant-${e.variant}`]:!0},o.value,z.value,d.value,r.value,B.value,$.value,e.class],style:[E.value,e.style],onClick:T},n),[(0,a.Wm)("div",{class:"v-field__overlay"},null),(0,a.Wm)(g.rD,{name:"v-field",active:!!e.loading,color:e.error?"error":"string"===typeof e.loading?e.loading:e.color},{default:s.loader}),i&&(0,a.Wm)("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&(0,a.Wm)(S,{key:"prepend-icon",name:"prependInner"},null),s["prepend-inner"]?.(O.value)]),(0,a.Wm)("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&A.value&&(0,a.Wm)(c,{key:"floating-label",ref:M,class:[R.value],floating:!0,for:L.value,style:q.value},{default:()=>[f]}),(0,a.Wm)(c,{ref:U,for:L.value},{default:()=>[f]}),s.default?.({...O.value,props:{id:L.value,class:"v-field__input","aria-describedby":P.value},focus:I,blur:k})]),u&&(0,a.Wm)(v.Zq,{key:"clear"},{default:()=>[(0,a.wy)((0,a.Wm)("div",{class:"v-field__clearable",onMousedown:e=>{e.preventDefault(),e.stopPropagation()}},[s.clear?s.clear():(0,a.Wm)(S,{name:"clear"},null)]),[[t.F8,e.dirty]])]}),p&&(0,a.Wm)("div",{key:"append",class:"v-field__append-inner"},[s["append-inner"]?.(O.value),e.appendInnerIcon&&(0,a.Wm)(S,{key:"append-icon",name:"appendInner"},null)]),(0,a.Wm)("div",{class:["v-field__outline",R.value],style:q.value},[l&&(0,a.Wm)(a.HY,null,[(0,a.Wm)("div",{class:"v-field__outline__start"},null),A.value&&(0,a.Wm)("div",{class:"v-field__outline__notch"},[(0,a.Wm)(c,{ref:M,floating:!0,for:L.value},{default:()=>[f]})]),(0,a.Wm)("div",{class:"v-field__outline__end"},null)]),H.value&&A.value&&(0,a.Wm)(c,{ref:M,floating:!0,for:L.value},{default:()=>[f]})])])})),{controlRef:Y}}});function B(e){const l=Object.keys(S.props).filter((e=>!(0,_.F7)(e)&&"class"!==e&&"style"!==e));return(0,_.ei)(e,l)}},6308:function(e,l,n){n.d(l,{v:function(){return s}});var a=n(3396),t=n(3289),i=n(1629);function s(e){const{t:l}=(0,i.bU)();function n(n){let{name:i}=n;const s={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],o=e[`onClick:${i}`],r=o&&s?l(`$vuetify.input.${s}`,e.label??""):void 0;return(0,a.Wm)(t.t,{icon:e[`${i}Icon`],"aria-label":r,onClick:o},null)}return{InputIcon:n}}},9114:function(e,l,n){n.d(l,{q:function(){return k},c:function(){return I}});var a=n(3396),t=n(6308),i=n(8952),s=n(2370),o=n(9166),r=n(4906),u=n(3766),d=n(1107),c=n(131),v=n(9888);const p=(0,u.U)({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...(0,o.l)(),...(0,r.X)({transition:{component:i.cu,leaveAbsolute:!0,group:!0}})},"VMessages"),f=(0,d.ev)()({name:"VMessages",props:p(),setup(e,l){let{slots:n}=l;const t=(0,a.Fl)((()=>(0,c.FT)(e.messages))),{textColorClasses:i,textColorStyles:o}=(0,s.rY)((0,a.Fl)((()=>e.color)));return(0,v.L)((()=>(0,a.Wm)(r.J,{transition:e.transition,tag:"div",class:["v-messages",i.value,e.class],style:[o.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&t.value.map(((e,l)=>(0,a.Wm)("div",{class:"v-messages__message",key:`${l}-${t.value}`},[n.message?n.message({message:e}):e])))]}))),{}}});var m=n(9694),y=n(4960),g=n(1629),b=(n(560),n(8969)),h=n(4357),x=n(8717),F=n(4770),_=n(4870),C=n(7514);const V=(0,u.U)({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...(0,b.B)()},"validation");function W(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,C.BL)(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,C.sq)();const t=(0,x.z)(e,"modelValue"),i=(0,a.Fl)((()=>void 0===e.validationValue?t.value:e.validationValue)),s=(0,h.cI)(),o=(0,_.iH)([]),r=(0,_.XI)(!0),u=(0,a.Fl)((()=>!(!(0,c.FT)(""===t.value?null:t.value).length&&!(0,c.FT)(""===i.value?null:i.value).length))),d=(0,a.Fl)((()=>!!(e.disabled??s?.isDisabled.value))),v=(0,a.Fl)((()=>!!(e.readonly??s?.isReadonly.value))),p=(0,a.Fl)((()=>e.errorMessages?.length?(0,c.FT)(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):o.value)),f=(0,a.Fl)((()=>{let l=(e.validateOn??s?.validateOn.value)||"input";"lazy"===l&&(l="input lazy");const n=new Set(l?.split(" ")??[]);return{blur:n.has("blur")||n.has("input"),input:n.has("input"),submit:n.has("submit"),lazy:n.has("lazy")}})),m=(0,a.Fl)((()=>!e.error&&!e.errorMessages?.length&&(!e.rules.length||(r.value?!o.value.length&&!f.value.lazy||null:!o.value.length)))),y=(0,_.XI)(!1),g=(0,a.Fl)((()=>({[`${l}--error`]:!1===m.value,[`${l}--dirty`]:u.value,[`${l}--disabled`]:d.value,[`${l}--readonly`]:v.value}))),b=(0,a.Fl)((()=>e.name??(0,_.SU)(n)));function V(){t.value=null,(0,a.Y3)(W)}function W(){r.value=!0,f.value.lazy?o.value=[]:I(!0)}async function I(){let l=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const n=[];y.value=!0;for(const a of e.rules){if(n.length>=+(e.maxErrors??1))break;const l="function"===typeof a?a:()=>a,t=await l(i.value);!0!==t&&(!1===t||"string"===typeof t?n.push(t||""):console.warn(`${t} is not a valid value. Rule functions must return boolean true or a string.`))}return o.value=n,y.value=!1,r.value=l,o.value}return(0,a.wF)((()=>{s?.register({id:b.value,validate:I,reset:V,resetValidation:W})})),(0,a.Jd)((()=>{s?.unregister(b.value)})),(0,a.bv)((async()=>{f.value.lazy||await I(!0),s?.update(b.value,m.value,p.value)})),(0,F.U)((()=>f.value.input),(()=>{(0,a.YP)(i,(()=>{if(null!=i.value)I();else if(e.focused){const l=(0,a.YP)((()=>e.focused),(e=>{e||I(),l()}))}}))})),(0,F.U)((()=>f.value.blur),(()=>{(0,a.YP)((()=>e.focused),(e=>{e||I()}))})),(0,a.YP)(m,(()=>{s?.update(b.value,m.value,p.value)})),{errorMessages:p,isDirty:u,isDisabled:d,isReadonly:v,isPristine:r,isValid:m,isValidating:y,reset:V,resetValidation:W,validate:I,validationClasses:g}}const I=(0,u.U)({id:String,appendIcon:y.lE,centerAffix:{type:Boolean,default:!0},prependIcon:y.lE,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":(0,c.as)(),"onClick:append":(0,c.as)(),...(0,o.l)(),...(0,m.f)(),...V()},"VInput"),k=(0,d.ev)()({name:"VInput",props:{...I()},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:n,slots:i,emit:s}=l;const{densityClasses:o}=(0,m.t)(e),{rtlClasses:r}=(0,g.Vw)(),{InputIcon:u}=(0,t.v)(e),d=(0,C.sq)(),c=(0,a.Fl)((()=>e.id||`input-${d}`)),p=(0,a.Fl)((()=>`${c.value}-messages`)),{errorMessages:y,isDirty:b,isDisabled:h,isReadonly:x,isPristine:F,isValid:_,isValidating:V,reset:I,resetValidation:k,validate:S,validationClasses:B}=W(e,"v-input",c),$=(0,a.Fl)((()=>({id:c,messagesId:p,isDirty:b,isDisabled:h,isReadonly:x,isPristine:F,isValid:_,isValidating:V,reset:I,resetValidation:k,validate:S}))),w=(0,a.Fl)((()=>e.errorMessages?.length||!F.value&&y.value.length?y.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages));return(0,v.L)((()=>{const l=!(!i.prepend&&!e.prependIcon),n=!(!i.append&&!e.appendIcon),t=w.value.length>0,s=!e.hideDetails||"auto"===e.hideDetails&&(t||!!i.details);return(0,a.Wm)("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix},o.value,r.value,B.value,e.class],style:e.style},[l&&(0,a.Wm)("div",{key:"prepend",class:"v-input__prepend"},[i.prepend?.($.value),e.prependIcon&&(0,a.Wm)(u,{key:"prepend-icon",name:"prepend"},null)]),i.default&&(0,a.Wm)("div",{class:"v-input__control"},[i.default?.($.value)]),n&&(0,a.Wm)("div",{key:"append",class:"v-input__append"},[e.appendIcon&&(0,a.Wm)(u,{key:"append-icon",name:"append"},null),i.append?.($.value)]),s&&(0,a.Wm)("div",{class:"v-input__details"},[(0,a.Wm)(f,{id:p.value,active:t,messages:w.value},{message:i.message}),i.details?.($.value)])])})),{reset:I,resetValidation:k,validate:S}}})},7302:function(e,l,n){n.d(l,{J:function(){return d}});var a=n(3396),t=n(9166),i=n(5935),s=n(3766),o=n(1107),r=n(9888);const u=(0,s.U)({text:String,clickable:Boolean,...(0,t.l)(),...(0,i.x$)()},"VLabel"),d=(0,o.ev)()({name:"VLabel",props:u(),setup(e,l){let{slots:n}=l;return(0,r.L)((()=>(0,a.Wm)("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,n.default?.()]))),{}}})},165:function(e,l,n){n.d(l,{h:function(){return b},w:function(){return g}});var a=n(3396),t=(n(348),n(2816)),i=n(7173),s=n(9114),o=n(8969),r=n(3185),u=n(8717),d=n(7052),c=n(4870),v=n(3766),p=n(1107),f=n(131),m=n(9888);const y=["color","file","time","date","datetime-local","week","month"],g=(0,v.U)({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...(0,s.c)(),...(0,i.hy)()},"VTextField"),b=(0,p.ev)()({name:"VTextField",directives:{Intersect:d.Z},inheritAttrs:!1,props:g(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{attrs:n,emit:d,slots:v}=l;const p=(0,u.z)(e,"modelValue"),{isFocused:g,focus:b,blur:h}=(0,o.K)(e),x=(0,a.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(p.value):"number"===typeof e.counterValue?e.counterValue:(p.value??"").toString().length)),F=(0,a.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter)),_=(0,a.Fl)((()=>["plain","underlined"].includes(e.variant)));function C(l,n){e.autofocus&&l&&n[0].target?.focus?.()}const V=(0,c.iH)(),W=(0,c.iH)(),I=(0,c.iH)(),k=(0,a.Fl)((()=>y.includes(e.type)||e.persistentPlaceholder||g.value||e.active));function S(){I.value!==document.activeElement&&I.value?.focus(),g.value||b()}function B(e){d("mousedown:control",e),e.target!==I.value&&(S(),e.preventDefault())}function $(e){S(),d("click:control",e)}function w(l){l.stopPropagation(),S(),(0,a.Y3)((()=>{p.value=null,(0,f.dr)(e["onClick:clear"],l)}))}function A(l){const n=l.target;if(p.value=n.value,e.modelModifiers?.trim&&["text","search","password","tel","url"].includes(e.type)){const e=[n.selectionStart,n.selectionEnd];(0,a.Y3)((()=>{n.selectionStart=e[0],n.selectionEnd=e[1]}))}}return(0,m.L)((()=>{const l=!!(v.counter||!1!==e.counter&&null!=e.counter),o=!(!l&&!v.details),[r,u]=(0,f.An)(n),[{modelValue:d,...c}]=s.q.filterProps(e),[m]=(0,i.g8)(e);return(0,a.Wm)(s.q,(0,a.dG)({ref:V,modelValue:p.value,"onUpdate:modelValue":e=>p.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},r,c,{centerAffix:!_.value,focused:g.value}),{...v,default:l=>{let{id:n,isDisabled:t,isDirty:s,isReadonly:o,isValid:r}=l;return(0,a.Wm)(i.hF,(0,a.dG)({ref:W,onMousedown:B,onClick:$,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},m,{id:n.value,active:k.value||s.value,dirty:s.value||e.dirty,disabled:t.value,focused:g.value,error:!1===r.value}),{...v,default:l=>{let{props:{class:n,...i}}=l;const s=(0,a.wy)((0,a.Wm)("input",(0,a.dG)({ref:I,value:p.value,onInput:A,autofocus:e.autofocus,readonly:o.value,disabled:t.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:S,onBlur:h},i,u),null),[[(0,a.Q2)("intersect"),{handler:C},null,{once:!0}]]);return(0,a.Wm)(a.HY,null,[e.prefix&&(0,a.Wm)("span",{class:"v-text-field__prefix"},[(0,a.Wm)("span",{class:"v-text-field__prefix__text"},[e.prefix])]),v.default?(0,a.Wm)("div",{class:n,"data-no-activator":""},[v.default(),s]):(0,a.Ho)(s,{class:n}),e.suffix&&(0,a.Wm)("span",{class:"v-text-field__suffix"},[(0,a.Wm)("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:o?n=>(0,a.Wm)(a.HY,null,[v.details?.(n),l&&(0,a.Wm)(a.HY,null,[(0,a.Wm)("span",null,null),(0,a.Wm)(t._,{active:e.persistentCounter||g.value,value:x.value,max:F.value},v.counter)])]):void 0})})),(0,r.F)({},V,W,I)}})},8969:function(e,l,n){n.d(l,{B:function(){return r},K:function(){return u}});var a=n(8717),t=n(3396),i=n(3766),s=n(131),o=n(7514);const r=(0,i.U)({focused:Boolean,"onUpdate:focused":(0,s.as)()},"focus");function u(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,a.z)(e,"focused"),i=(0,t.Fl)((()=>({[`${l}--focused`]:n.value})));function s(){n.value=!0}function r(){n.value=!1}return{focusClasses:i,isFocused:n,focus:s,blur:r}}},4357:function(e,l,n){n.d(l,{cI:function(){return s}});n(560);var a=n(3396),t=n(3766);const i=Symbol.for("vuetify:form");(0,t.U)({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function s(){return(0,a.f3)(i,null)}}}]);
//# sourceMappingURL=165.92724cd3.js.map