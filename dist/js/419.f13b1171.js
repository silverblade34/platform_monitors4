(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[419],{6050:function(e,t,n){n(560);var o={utf8:{stringToBytes:function(e){return o.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(o.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=o},8258:function(e,t,n){n(560),function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,o=0;n<e.length;n++,o+=8)t[o>>>5]|=e[n]<<24-o%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],o=0;o<e.length;o+=3)for(var a=e[o]<<16|e[o+1]<<8|e[o+2],i=0;i<4;i++)8*o+6*i<=8*e.length?n.push(t.charAt(a>>>6*(3-i)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],o=0,a=0;o<e.length;a=++o%4)0!=a&&n.push((t.indexOf(e.charAt(o-1))&Math.pow(2,-2*a+8)-1)<<2*a|t.indexOf(e.charAt(o))>>>6-2*a);return n}};e.exports=n}()},8566:function(e){function t(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&t(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||n(e)||!!e._isBuffer)}},9564:function(e,t,n){n(4224),n(1121),n(7133),function(){var t=n(8258),o=n(6050).utf8,a=n(8566),i=n(6050).bin,r=function(e,n){e.constructor==String?e=n&&"binary"===n.encoding?i.stringToBytes(e):o.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var l=t.bytesToWords(e),s=8*e.length,u=1732584193,c=-271733879,d=-1732584194,m=271733878,p=0;p<l.length;p++)l[p]=16711935&(l[p]<<8|l[p]>>>24)|4278255360&(l[p]<<24|l[p]>>>8);l[s>>>5]|=128<<s%32,l[14+(s+64>>>9<<4)]=s;var f=r._ff,v=r._gg,g=r._hh,h=r._ii;for(p=0;p<l.length;p+=16){var b=u,_=c,w=d,y=m;u=f(u,c,d,m,l[p+0],7,-680876936),m=f(m,u,c,d,l[p+1],12,-389564586),d=f(d,m,u,c,l[p+2],17,606105819),c=f(c,d,m,u,l[p+3],22,-1044525330),u=f(u,c,d,m,l[p+4],7,-176418897),m=f(m,u,c,d,l[p+5],12,1200080426),d=f(d,m,u,c,l[p+6],17,-1473231341),c=f(c,d,m,u,l[p+7],22,-45705983),u=f(u,c,d,m,l[p+8],7,1770035416),m=f(m,u,c,d,l[p+9],12,-1958414417),d=f(d,m,u,c,l[p+10],17,-42063),c=f(c,d,m,u,l[p+11],22,-1990404162),u=f(u,c,d,m,l[p+12],7,1804603682),m=f(m,u,c,d,l[p+13],12,-40341101),d=f(d,m,u,c,l[p+14],17,-1502002290),c=f(c,d,m,u,l[p+15],22,1236535329),u=v(u,c,d,m,l[p+1],5,-165796510),m=v(m,u,c,d,l[p+6],9,-1069501632),d=v(d,m,u,c,l[p+11],14,643717713),c=v(c,d,m,u,l[p+0],20,-373897302),u=v(u,c,d,m,l[p+5],5,-701558691),m=v(m,u,c,d,l[p+10],9,38016083),d=v(d,m,u,c,l[p+15],14,-660478335),c=v(c,d,m,u,l[p+4],20,-405537848),u=v(u,c,d,m,l[p+9],5,568446438),m=v(m,u,c,d,l[p+14],9,-1019803690),d=v(d,m,u,c,l[p+3],14,-187363961),c=v(c,d,m,u,l[p+8],20,1163531501),u=v(u,c,d,m,l[p+13],5,-1444681467),m=v(m,u,c,d,l[p+2],9,-51403784),d=v(d,m,u,c,l[p+7],14,1735328473),c=v(c,d,m,u,l[p+12],20,-1926607734),u=g(u,c,d,m,l[p+5],4,-378558),m=g(m,u,c,d,l[p+8],11,-2022574463),d=g(d,m,u,c,l[p+11],16,1839030562),c=g(c,d,m,u,l[p+14],23,-35309556),u=g(u,c,d,m,l[p+1],4,-1530992060),m=g(m,u,c,d,l[p+4],11,1272893353),d=g(d,m,u,c,l[p+7],16,-155497632),c=g(c,d,m,u,l[p+10],23,-1094730640),u=g(u,c,d,m,l[p+13],4,681279174),m=g(m,u,c,d,l[p+0],11,-358537222),d=g(d,m,u,c,l[p+3],16,-722521979),c=g(c,d,m,u,l[p+6],23,76029189),u=g(u,c,d,m,l[p+9],4,-640364487),m=g(m,u,c,d,l[p+12],11,-421815835),d=g(d,m,u,c,l[p+15],16,530742520),c=g(c,d,m,u,l[p+2],23,-995338651),u=h(u,c,d,m,l[p+0],6,-198630844),m=h(m,u,c,d,l[p+7],10,1126891415),d=h(d,m,u,c,l[p+14],15,-1416354905),c=h(c,d,m,u,l[p+5],21,-57434055),u=h(u,c,d,m,l[p+12],6,1700485571),m=h(m,u,c,d,l[p+3],10,-1894986606),d=h(d,m,u,c,l[p+10],15,-1051523),c=h(c,d,m,u,l[p+1],21,-2054922799),u=h(u,c,d,m,l[p+8],6,1873313359),m=h(m,u,c,d,l[p+15],10,-30611744),d=h(d,m,u,c,l[p+6],15,-1560198380),c=h(c,d,m,u,l[p+13],21,1309151649),u=h(u,c,d,m,l[p+4],6,-145523070),m=h(m,u,c,d,l[p+11],10,-1120210379),d=h(d,m,u,c,l[p+2],15,718787259),c=h(c,d,m,u,l[p+9],21,-343485551),u=u+b>>>0,c=c+_>>>0,d=d+w>>>0,m=m+y>>>0}return t.endian([u,c,d,m])};r._ff=function(e,t,n,o,a,i,r){var l=e+(t&n|~t&o)+(a>>>0)+r;return(l<<i|l>>>32-i)+t},r._gg=function(e,t,n,o,a,i,r){var l=e+(t&o|n&~o)+(a>>>0)+r;return(l<<i|l>>>32-i)+t},r._hh=function(e,t,n,o,a,i,r){var l=e+(t^n^o)+(a>>>0)+r;return(l<<i|l>>>32-i)+t},r._ii=function(e,t,n,o,a,i,r){var l=e+(n^(t|~o))+(a>>>0)+r;return(l<<i|l>>>32-i)+t},r._blocksize=16,r._digestsize=16,e.exports=function(e,n){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var o=t.wordsToBytes(r(e,n));return n&&n.asBytes?o:n&&n.asString?i.bytesToString(o):t.bytesToHex(o)}}()},201:function(e,t,n){"use strict";n.d(t,{Lo:function(){return r},e:function(){return i},rX:function(){return l}});var o=n(1076);const a="http://67.205.164.216:3000/api/v1";function i(e,t){return o.Z.post(`${a}/allShifts`,{cod_cuenta:e,cod_cliente:t})}function r(e){return o.Z.post(`${a}/createShifts`,e)}function l(e){return o.Z.put(`${a}/editShifts`,e)}},6365:function(e,t,n){"use strict";n.d(t,{$d:function(){return i},DL:function(){return l},Ex:function(){return c},Kb:function(){return r},Zd:function(){return u},dN:function(){return s}});var o=n(1076);const a="http://67.205.164.216:3000/api/v1";function i(e){return o.Z.post(`${a}/listAccounts`,{cod_cuenta:e})}function r(e,t){return o.Z.post(`${a}/listClients`,{cod_cuenta:e,empresa:t})}function l(e){return o.Z.post(`${a}/createClient`,e)}function s(e){return o.Z.put(`${a}/editClient`,e)}function u(e){return o.Z.post(`${a}/deleteClient`,e)}function c(e){return o.Z.post(`${a}/repeatUser`,{usuario:e})}},4658:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var o=n(3396);const a={class:"flex justify-between w-full"},i=(0,o._)("div",null,[(0,o._)("h1",{class:"font-bold text-xl title_poppins pb-5"},"Administrar usuarios")],-1);function r(e,t,n,r,l,s){const u=(0,o.up)("CreateUsersVue"),c=(0,o.up)("TableUsersVue"),d=(0,o.up)("EditUserVue");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o._)("div",a,[i,(0,o.Wm)(u,{onCreateItem:r.onCreateItem},null,8,["onCreateItem"])]),(0,o.Wm)(c,{desserts:r.dataUsers,onDeleteItem:r.onDeleteItem,shiftsDataProps:r.dataShifts,onEditItem:r.onEditItem},null,8,["desserts","onDeleteItem","shiftsDataProps","onEditItem"])]),(0,o.Wm)(d,{openModal:r.editDialog,itemEdit:r.editItem,onCancelItem:t[0]||(t[0]=e=>r.editDialog=!1),onEditItem:r.onUpdateItem},null,8,["openModal","itemEdit","onEditItem"])],64)}var l=n(6365),s=n(201),u=n(4870),c=n(4239),d=n(7139),m=n(7312),p=n(7103),f=n(678);const v={class:"flex gap-1 justify-center"},g=["onClick"],h=["onClick"];function b(e,t,n,a,i,r){const l=(0,o.up)("v-data-table");return(0,o.wg)(),(0,o.j4)(l,{headers:i.headers,items:n.desserts,class:"elevation-1 text-sm rounded-lg"},{["item.codigo_turno"]:(0,o.w5)((({item:e})=>[(0,o.Uk)((0,d.zw)(a.findDescriptionShift(e.codigo_turno)),1)])),["item.estado"]:(0,o.w5)((({item:e})=>[(0,o.Wm)(p.v,{color:e.estado?"green":"red"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(e.estado?"Activo":"Desactivado"),1)])),_:2},1032,["color"])])),["item.actions"]:(0,o.w5)((({item:e})=>[(0,o._)("div",v,[(0,o._)("span",{onClick:t=>a.editItem(e)},[(0,o.Wm)(m.T,{icon:"mdi-pencil",size:"small",variant:"text",color:"green"}),(0,o.Wm)(f.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("Editar")])),_:1})],8,g),(0,o._)("span",{onClick:t=>a.deleteItem(e)},[(0,o.Wm)(m.T,{icon:"mdi-delete-empty",size:"small",variant:"text",color:"red"}),(0,o.Wm)(f.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("Eliminar")])),_:1})],8,h)])])),_:2},1032,["headers","items"])}var _=n(5470),w={props:{desserts:Array,shiftsDataProps:Array},components:{VDataTable:_.y_},emits:["delete-item","edit-item"],data(){return{headers:[{title:"Usuario",align:"start",key:"usuario"},{title:"Nombre",align:"start",key:"nombre_completo"},{title:"Turno",align:"start",key:"codigo_turno"},{title:"Rol",align:"start",key:"rol"},{title:"Estado",align:"center",key:"estado"},{title:"Acciones",key:"actions",align:"center"}]}},setup(e,{emit:t}){const n=(0,u.iH)([]);(0,o.YP)((()=>e.shiftsDataProps),(e=>{n.value=e}));const a=e=>{t("edit-item",{item:e})},i=e=>{t("delete-item",{item:e})},r=e=>{if(e.length>0){const t=n.value.find((t=>t.cod_turno==e)).descripcion;return t}return"Completo"};return{editItem:a,deleteItem:i,findDescriptionShift:r}}},y=n(89);const V=(0,y.Z)(w,[["render",b]]);var k=V,C=n(5039),U=n(1888),I=n(1334),W=n(3601),x=n(8521),H=n(9234),Z=n(3289),T=n(240),D=n(165),A=n(1328);const E=(0,o._)("span",{class:"px-4 w-full text-center text-indigo-500 font-bold title_views"},"Crear nuevo usuario",-1);function S(e,t,n,a,i,r){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m.T,{size:"small",color:"blue",onClick:t[0]||(t[0]=e=>a.dialog=!0)},{default:(0,o.w5)((()=>[(0,o.Wm)(Z.t,{icon:"mdi-plus"}),(0,o.Uk)(" Crear Nuevo")])),_:1}),(0,o.Wm)(W.B,{modelValue:a.dialog,"onUpdate:modelValue":t[9]||(t[9]=e=>a.dialog=e),width:"500"},{default:(0,o.w5)((()=>[(0,o.Wm)(C._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A.i,null,{default:(0,o.w5)((()=>[E])),_:1}),(0,o.Wm)(U.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x.D,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(D.h,{variant:"outlined",label:"Nombre","prepend-inner-icon":"mdi-text-account",color:"indigo",modelValue:a.name,"onUpdate:modelValue":t[1]||(t[1]=e=>a.name=e)},null,8,["modelValue"]),(0,o.Wm)(D.h,{variant:"outlined",label:"Usuario","prepend-inner-icon":"mdi-clipboard-account",color:"indigo",modelValue:a.username,"onUpdate:modelValue":t[2]||(t[2]=e=>a.username=e),onInput:a.checkUsernameAvailability,"hide-details":""},null,8,["modelValue","onInput"]),(0,o._)("span",{class:(0,d.C_)([a.statusValidateUser?"text-green-400":"text-red-400","text-xs pl-3 pb-1"])},(0,d.zw)(a.messageValidateUser),3),(0,o.Wm)(T.rL,{"prepend-inner-icon":"mdi-shield-account",label:"Rol",items:["Operador","Supervisor"],variant:"outlined",class:"col-span-2",color:"indigo",modelValue:a.role,"onUpdate:modelValue":t[3]||(t[3]=e=>a.role=e)},null,8,["modelValue"]),"Operador"==a.role?((0,o.wg)(),(0,o.j4)(T.rL,{key:0,"prepend-inner-icon":"mdi-account-clock",label:"Turno",items:a.shiftsData.map((e=>e.descripcion)),variant:"outlined",class:"col-span-2",color:"indigo",modelValue:a.shift,"onUpdate:modelValue":t[4]||(t[4]=e=>a.shift=e)},null,8,["items","modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(D.h,{color:"indigo","append-inner-icon":a.visible?"mdi-eye-off":"mdi-eye",type:a.visible?"text":"password",label:"Ingrese una contraseña","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":t[5]||(t[5]=e=>a.visible=!a.visible),modelValue:a.password,"onUpdate:modelValue":t[6]||(t[6]=e=>a.password=e)},null,8,["append-inner-icon","type","modelValue"]),(0,o.Wm)(D.h,{color:"indigo","append-inner-icon":a.visible2?"mdi-eye-off":"mdi-eye",type:a.visible2?"text":"password",label:"Repetir contraseña","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":t[7]||(t[7]=e=>a.visible2=!a.visible2),modelValue:a.passwordRepeat,"onUpdate:modelValue":t[8]||(t[8]=e=>a.passwordRepeat=e),"hide-details":""},null,8,["append-inner-icon","type","modelValue"]),(0,o._)("span",{class:(0,d.C_)([a.statusValidatePassword?"text-green-400":"text-red-400","text-xs pl-3 pb-1"])},(0,d.zw)(a.messageValidatePassword),3)])),_:1})])),_:1}),(0,o.Wm)(I.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(H.C),(0,o.Wm)(m.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:a.cancelItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,o.Wm)(m.T,{color:"blue-lighten-1",variant:"tonal",onClick:a.createItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var B={emits:["create-item"],setup(e,{emit:t}){const n=(0,u.iH)(!1),a=(0,u.iH)(""),i=(0,u.iH)(""),r=(0,u.iH)(""),d=(0,u.iH)(""),m=(0,u.iH)([]),p=(0,u.iH)(""),f=(0,u.iH)(""),v=(0,u.iH)(!1),g=(0,u.iH)(!1),h=(0,u.iH)(!1),b=(0,u.iH)(""),_=(0,u.iH)(!1),w=(0,u.iH)("");(0,o.YP)((()=>n.value),(e=>{e&&(0,s.e)(c.Z.state.codcuenta,c.Z.state.codclienteAdmin).then((e=>{m.value=e.data.data[0].turnos}))}));const y=()=>{1==_.value&&1==h.value&&(t("create-item",{name:a.value,username:d.value,role:i.value,shift:r.value,password:p.value}),V())},V=()=>{a.value=i.value=r.value=d.value="",p.value=f.value=b.value=w.value="",n.value=!1},k=()=>{""!=d.value?d.value.length>=5?(0,l.Ex)(d.value).then((e=>{b.value=e.data.message,h.value=e.data.status})).catch((e=>{b.value=e.response.data.message,h.value=e.response.data.status})):(b.value="El username debe tener al menos 5 caracteres",h.value=!1):(b.value="Campo obligatorio",h.value=!1)};return(0,o.YP)((()=>f.value),(e=>{""!=p.value&&(e==p.value?(w.value="Las contraseñas coinciden",_.value=!0):(w.value="Las contraseñas no coinciden",_.value=!1))})),{visible:v,visible2:g,dialog:n,name:a,username:d,role:i,shift:r,shiftsData:m,password:p,passwordRepeat:f,messageValidateUser:b,statusValidateUser:h,statusValidatePassword:_,messageValidatePassword:w,createItem:y,cancelItem:V,checkUsernameAvailability:k}}};const P=(0,y.Z)(B,[["render",S]]);var L=P,N=n(3104);const j=(0,o._)("span",{class:"px-4 w-full text-center text-indigo-500 font-bold title_views"},"Editar usuario",-1);function R(e,t,n,a,i,r){return(0,o.wg)(),(0,o.j4)(W.B,{modelValue:a.dialog,"onUpdate:modelValue":t[7]||(t[7]=e=>a.dialog=e),width:"500","onClick:outside":a.cancelItem},{default:(0,o.w5)((()=>[(0,o.Wm)(C._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(A.i,null,{default:(0,o.w5)((()=>[j])),_:1}),(0,o.Wm)(U.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x.D,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(D.h,{variant:"outlined",label:"Nombre","prepend-inner-icon":"mdi-text-account",color:"indigo",modelValue:a.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.name=e)},null,8,["modelValue"]),(0,o.Wm)(D.h,{variant:"outlined",label:"Usuario","prepend-inner-icon":"mdi-clipboard-account",color:"indigo",modelValue:a.username,"onUpdate:modelValue":t[1]||(t[1]=e=>a.username=e),disabled:""},null,8,["modelValue"]),(0,o.Wm)(T.rL,{"prepend-inner-icon":"mdi-shield-account",label:"Rol",items:["Operador","Supervisor"],variant:"outlined",class:"col-span-2",color:"indigo",modelValue:a.role,"onUpdate:modelValue":t[2]||(t[2]=e=>a.role=e),disabled:""},null,8,["modelValue"]),"Operador"==a.role?((0,o.wg)(),(0,o.j4)(T.rL,{key:0,"prepend-inner-icon":"mdi-account-clock",label:"Turno",items:a.shiftsData.map((e=>e.descripcion)),variant:"outlined",class:"col-span-2",color:"indigo",modelValue:a.shift,"onUpdate:modelValue":t[3]||(t[3]=e=>a.shift=e)},null,8,["items","modelValue"])):(0,o.kq)("",!0),(0,o.Wm)(D.h,{color:"indigo","append-inner-icon":a.visible?"mdi-eye-off":"mdi-eye",type:a.visible?"text":"password",label:"Ingrese su contraseña","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":t[4]||(t[4]=e=>a.visible=!a.visible),modelValue:a.password,"onUpdate:modelValue":t[5]||(t[5]=e=>a.password=e),"hide-details":""},null,8,["append-inner-icon","type","modelValue"]),(0,o.Wm)(N.G,{label:"Estado",modelValue:a.state,"onUpdate:modelValue":t[6]||(t[6]=e=>a.state=e),color:"blue","hide-details":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)(I.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(H.C),(0,o.Wm)(m.T,{color:"blue-grey-lighten-2",variant:"tonal",onClick:a.cancelItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Cancelar ")])),_:1},8,["onClick"]),(0,o.Wm)(m.T,{color:"blue-lighten-1",variant:"tonal",onClick:a.editItem},{default:(0,o.w5)((()=>[(0,o.Uk)(" Aceptar ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onClick:outside"])}var $={props:{itemEdit:Object,openModal:Boolean},emits:["edit-item","cancel-item"],setup(e,{emit:t}){const n=(0,u.iH)(!1),a=(0,u.iH)(""),i=(0,u.iH)(""),r=(0,u.iH)(""),l=(0,u.iH)(""),d=(0,u.iH)(!0),m=(0,u.iH)([]),p=(0,u.iH)(""),f=(0,u.iH)(!1),v=(0,u.iH)(!1);(0,o.YP)((()=>e.openModal),(e=>{n.value=e,e&&(0,s.e)(c.Z.state.codcuenta,c.Z.state.codclienteAdmin).then((e=>{m.value=e.data.data[0].turnos}))})),(0,o.YP)((()=>e.itemEdit),(e=>{0!==Object.keys(e).length&&(a.value=e.item.nombre_completo,l.value=e.item.usuario,i.value=e.item.rol,r.value=e.item.turno,p.value=e.item.contrasena,d.value=e.item.estado)}));const g=()=>{t("edit-item",{name:a.value,username:l.value,role:i.value,shift:r.value,password:p.value,state:d.value}),h()},h=()=>{a.value=i.value=r.value=l.value="",p.value="",t("cancel-item")};return{visible:f,visible2:v,dialog:n,name:a,username:l,role:i,shift:r,state:d,shiftsData:m,password:p,editItem:g,cancelItem:h}}};const z=(0,y.Z)($,[["render",R]]);var M=z,O=n(3512),Y=n(9564),q=n.n(Y),F={components:{TableUsersVue:k,EditUserVue:M,CreateUsersVue:L},setup(){const e=(0,u.iH)([]),t=(0,u.iH)([]),n=(0,u.iH)(""),a=(0,u.iH)({}),i=(0,u.iH)(!1);(0,o.bv)((async()=>{await r()}));const r=async()=>{const[o,a]=await Promise.all([(0,l.$d)(c.Z.state.codcuenta),(0,s.e)(c.Z.state.codcuenta,c.Z.state.codclienteAdmin)]);n.value=o.data.data[0].ID;const i=o.data.data[0].clientes?o.data.data[0].clientes:[];e.value=i.filter((e=>e.empresa==c.Z.state.empresa&&"Administrador"!=e.rol)),t.value=a.data.data[0].turnos?a.data.data[0].turnos:[]},d=e=>{if(""!=e.password&&""!=e.username&&""!=e.name&&""!=e.role){const o={id:n.value,cod_cliente:"",cod_cuenta:c.Z.state.codcuenta,contrasena:q()(e.password),sigla:"",usuario:e.username,ruc:c.Z.state.ruc,nombre_completo:e.name,nombre_contacto1:"",telefono_contacto1:"",codigo_turno:e.shift.length>0?t.value.find((t=>t.descripcion==e.shift)).cod_turno:"",nombre_contacto2:"",telefono_contacto2:"",empresa:c.Z.state.empresa,rol:e.role,estado:!0};(0,l.DL)(o).then((()=>{(0,O.y)((async()=>{await r()}),"success","Logrado","Se ha creado el usuario correctamente")})).catch((()=>{(0,O.y)((()=>{}),"error","Hubo un error","No se logro crear el usuario")}))}else(0,O.y)((()=>{}),"warning","Advertencia","Rellene todos los campos")},m=e=>{const t={cod_cuenta:c.Z.state.codcuenta,cod_cliente:e.item.cod_cliente,usuario:e.item.usuario};(0,O.M)((async()=>{(0,l.Zd)(t).then((()=>{(0,O.y)((async()=>{await r()}),"success","Logrado","Se ha eliminado el usuario correctamente")})).catch((()=>{(0,O.y)((()=>{}),"error","Hubo un error","No se logro eliminar el usuario")}))}),"¿Estás seguro de eliminar este usuario?","Aceptar")},p=e=>{console.log(e),e.item.turno=e.item.codigo_turno.length>0?t.value.find((t=>t.cod_turno==e.item.codigo_turno)).descripcion:"",a.value=e,i.value=!0},f=e=>{const o={id:n.value,cod_cliente:a.value.item.cod_cliente,cod_cuenta:c.Z.state.codcuenta,contrasena:a.value.item.contrasena==e.password?e.password:q()(e.password),sigla:a.value.item.sigla,usuario:e.username,ruc:a.value.item.ruc,nombre_completo:e.name,nombre_contacto1:a.value.item.nombre_contacto1,telefono_contacto1:a.value.item.telefono_contacto1,codigo_turno:e.shift.length>0?t.value.find((t=>t.descripcion==e.shift)).cod_turno:"",nombre_contacto2:a.value.item.nombre_contacto2,telefono_contacto2:a.value.item.telefono_contacto2,empresa:c.Z.state.empresa,rol:e.role,estado:e.state};(0,l.dN)(o).then((()=>{(0,O.y)((async()=>{await r()}),"success","Logrado","Se ha editado el usuario correctamente")})).catch((()=>{(0,O.y)((()=>{}),"error","Hubo un error","No se logro editar el usuario")}))};return{dataShifts:t,dataUsers:e,editDialog:i,editItem:a,onEditItem:p,onCreateItem:d,onDeleteItem:m,onUpdateItem:f}}};const G=(0,y.Z)(F,[["render",r]]);var K=G}}]);
//# sourceMappingURL=419.f13b1171.js.map