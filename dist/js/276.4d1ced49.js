(self["webpackChunkplatform_monitors4"]=self["webpackChunkplatform_monitors4"]||[]).push([[276],{8099:function(){},6050:function(t,e,n){n(560);var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=r},8258:function(t,e,n){n(560),function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var n=[],r=0;r<t.length;r+=3)for(var o=t[r]<<16|t[r+1]<<8|t[r+2],a=0;a<4;a++)8*r+6*a<=8*t.length?n.push(e.charAt(o>>>6*(3-a)&63)):n.push("=");return n.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,o=0;r<t.length;o=++r%4)0!=o&&n.push((e.indexOf(t.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|e.indexOf(t.charAt(r))>>>6-2*o);return n}};t.exports=n}()},8566:function(t){function e(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&e(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(e(t)||n(t)||!!t._isBuffer)}},9564:function(t,e,n){n(4224),n(1121),n(7133),function(){var e=n(8258),r=n(6050).utf8,o=n(8566),a=n(6050).bin,s=function(t,n){t.constructor==String?t=n&&"binary"===n.encoding?a.stringToBytes(t):r.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var i=e.bytesToWords(t),l=8*t.length,u=1732584193,c=-271733879,d=-1732584194,f=271733878,p=0;p<i.length;p++)i[p]=16711935&(i[p]<<8|i[p]>>>24)|4278255360&(i[p]<<24|i[p]>>>8);i[l>>>5]|=128<<l%32,i[14+(l+64>>>9<<4)]=l;var m=s._ff,g=s._gg,h=s._hh,v=s._ii;for(p=0;p<i.length;p+=16){var y=u,b=c,C=d,x=f;u=m(u,c,d,f,i[p+0],7,-680876936),f=m(f,u,c,d,i[p+1],12,-389564586),d=m(d,f,u,c,i[p+2],17,606105819),c=m(c,d,f,u,i[p+3],22,-1044525330),u=m(u,c,d,f,i[p+4],7,-176418897),f=m(f,u,c,d,i[p+5],12,1200080426),d=m(d,f,u,c,i[p+6],17,-1473231341),c=m(c,d,f,u,i[p+7],22,-45705983),u=m(u,c,d,f,i[p+8],7,1770035416),f=m(f,u,c,d,i[p+9],12,-1958414417),d=m(d,f,u,c,i[p+10],17,-42063),c=m(c,d,f,u,i[p+11],22,-1990404162),u=m(u,c,d,f,i[p+12],7,1804603682),f=m(f,u,c,d,i[p+13],12,-40341101),d=m(d,f,u,c,i[p+14],17,-1502002290),c=m(c,d,f,u,i[p+15],22,1236535329),u=g(u,c,d,f,i[p+1],5,-165796510),f=g(f,u,c,d,i[p+6],9,-1069501632),d=g(d,f,u,c,i[p+11],14,643717713),c=g(c,d,f,u,i[p+0],20,-373897302),u=g(u,c,d,f,i[p+5],5,-701558691),f=g(f,u,c,d,i[p+10],9,38016083),d=g(d,f,u,c,i[p+15],14,-660478335),c=g(c,d,f,u,i[p+4],20,-405537848),u=g(u,c,d,f,i[p+9],5,568446438),f=g(f,u,c,d,i[p+14],9,-1019803690),d=g(d,f,u,c,i[p+3],14,-187363961),c=g(c,d,f,u,i[p+8],20,1163531501),u=g(u,c,d,f,i[p+13],5,-1444681467),f=g(f,u,c,d,i[p+2],9,-51403784),d=g(d,f,u,c,i[p+7],14,1735328473),c=g(c,d,f,u,i[p+12],20,-1926607734),u=h(u,c,d,f,i[p+5],4,-378558),f=h(f,u,c,d,i[p+8],11,-2022574463),d=h(d,f,u,c,i[p+11],16,1839030562),c=h(c,d,f,u,i[p+14],23,-35309556),u=h(u,c,d,f,i[p+1],4,-1530992060),f=h(f,u,c,d,i[p+4],11,1272893353),d=h(d,f,u,c,i[p+7],16,-155497632),c=h(c,d,f,u,i[p+10],23,-1094730640),u=h(u,c,d,f,i[p+13],4,681279174),f=h(f,u,c,d,i[p+0],11,-358537222),d=h(d,f,u,c,i[p+3],16,-722521979),c=h(c,d,f,u,i[p+6],23,76029189),u=h(u,c,d,f,i[p+9],4,-640364487),f=h(f,u,c,d,i[p+12],11,-421815835),d=h(d,f,u,c,i[p+15],16,530742520),c=h(c,d,f,u,i[p+2],23,-995338651),u=v(u,c,d,f,i[p+0],6,-198630844),f=v(f,u,c,d,i[p+7],10,1126891415),d=v(d,f,u,c,i[p+14],15,-1416354905),c=v(c,d,f,u,i[p+5],21,-57434055),u=v(u,c,d,f,i[p+12],6,1700485571),f=v(f,u,c,d,i[p+3],10,-1894986606),d=v(d,f,u,c,i[p+10],15,-1051523),c=v(c,d,f,u,i[p+1],21,-2054922799),u=v(u,c,d,f,i[p+8],6,1873313359),f=v(f,u,c,d,i[p+15],10,-30611744),d=v(d,f,u,c,i[p+6],15,-1560198380),c=v(c,d,f,u,i[p+13],21,1309151649),u=v(u,c,d,f,i[p+4],6,-145523070),f=v(f,u,c,d,i[p+11],10,-1120210379),d=v(d,f,u,c,i[p+2],15,718787259),c=v(c,d,f,u,i[p+9],21,-343485551),u=u+y>>>0,c=c+b>>>0,d=d+C>>>0,f=f+x>>>0}return e.endian([u,c,d,f])};s._ff=function(t,e,n,r,o,a,s){var i=t+(e&n|~e&r)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},s._gg=function(t,e,n,r,o,a,s){var i=t+(e&r|n&~r)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},s._hh=function(t,e,n,r,o,a,s){var i=t+(e^n^r)+(o>>>0)+s;return(i<<a|i>>>32-a)+e},s._ii=function(t,e,n,r,o,a,s){var i=t+(n^(e|~r))+(o>>>0)+s;return(i<<a|i>>>32-a)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,n){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var r=e.wordsToBytes(s(t,n));return n&&n.asBytes?r:n&&n.asString?a.bytesToString(r):e.bytesToHex(r)}}()},3512:function(t,e,n){"use strict";n.d(e,{M:function(){return s},y:function(){return a}});var r=n(2492),o=n.n(r);function a(t,e,n,r){o().fire({icon:e,html:`<p class="text-lg font-semibold">${n}</p>\n          <p class="text-base">${r}</p>`,showCancelButton:!1,confirmButtonText:"Aceptar",confirmButtonColor:"#006cac",reverseButtons:!0}).then((e=>{e.isConfirmed&&t()}))}function s(t,e,n){o().fire({icon:"question",html:`<p class="text-lg">${e}</p>`,showCancelButton:!0,reverseButtons:!0,confirmButtonText:n,confirmButtonColor:"#3b82f6",cancelButtonText:"Cancelar"}).then((e=>{e.isConfirmed&&t()}))}},5276:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return I}});var r=n(3396),o=n(7312),a=n(8521),s=n(165);const i=t=>((0,r.dD)("data-v-6132c82e"),t=t(),(0,r.Cn)(),t),l={class:"flex w-full h-screen overflow-y-hidden"},u={class:"left"},c=i((()=>(0,r._)("div",{class:"text-indigo font-bold text-center text-2xl pb-4"},"MONITORS4",-1))),d=["src"],f={class:"flex justify-center"},p={id:"login-form",class:"lg:w-[80%] w-full flex flex-col justify-center text-center"},m=i((()=>(0,r._)("span",{class:"text-gray-600 pb-1 label text-start"},"Usuario",-1))),g=i((()=>(0,r._)("div",{class:"flex justify-between"},[(0,r._)("span",{class:"text-gray-600 pb-1 label"},"Contraseña"),(0,r._)("a",{class:"text-caption text-decoration-none text-blue",href:"#",rel:"noopener noreferrer",target:"_blank"}," Olvidaste tu contraseña?")],-1))),h=i((()=>(0,r._)("div",{id:"right"},null,-1)));function v(t,e,n,i,v,y){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("div",u,[c,(0,r._)("img",{src:t.LogoSysnet,class:"animation a6 pb-5",style:{margin:"0 auto 10px",width:"150px"}},null,8,d),(0,r._)("div",f,[(0,r._)("form",p,[m,(0,r.Wm)(s.h,{color:"indigo",density:"compact",placeholder:"Ingrese su usuario","prepend-inner-icon":"mdi mdi-account",variant:"outlined",modelValue:i.username,"onUpdate:modelValue":e[0]||(e[0]=t=>i.username=t)},null,8,["modelValue"]),g,(0,r.Wm)(s.h,{color:"indigo","append-inner-icon":t.visible?"mdi-eye-off":"mdi-eye",type:t.visible?"text":"password",density:"compact",placeholder:"Ingrese su contraseña","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":e[1]||(e[1]=e=>t.visible=!t.visible),modelValue:i.password,"onUpdate:modelValue":e[2]||(e[2]=t=>i.password=t)},null,8,["append-inner-icon","type","modelValue"]),(0,r._)("div",null,[(0,r.Wm)(a.D,{cols:"auto"},{default:(0,r.w5)((()=>[(0,r.Wm)(o.T,{size:"large",color:"indigo",onClick:i.validateCredential},{default:(0,r.w5)((()=>[(0,r.Uk)("Ingresar")])),_:1},8,["onClick"])])),_:1})])])])]),h])}n(560);var y=n(4870),b=n(1076);const C="http://192.168.0.46:3000/api/v1";function x(t,e){return b.Z.post(`${C}/login`,{usuario:t,contrasena:e})}var _=n(3512),w=n(5127),B=n(2483),S=n(4239),T=n(9564),A=n.n(T),k={setup(){const t=(0,y.iH)(""),e=(0,y.iH)(""),n=(0,B.tv)(),r=async()=>{const r=A()(e.value);await x(t.value,r).then((t=>{1==t.data.status&&(S.Z.commit("setCodCuenta",t.data.data.CodCuenta),S.Z.commit("setCodCliente",t.data.data.CodCliente),S.Z.commit("setCodClienteAdmin",t.data.CodClienteAdmin),S.Z.commit("setRol",t.data.data.Rol),S.Z.commit("setRuc",t.data.data.Ruc),S.Z.commit("setEmpresa",t.data.data.Empresa),S.Z.commit("setCodRegla",t.data.data.Cod_Regla),S.Z.commit("setUsername",t.data.data.Usuario),S.Z.commit("setUsernameAdmin",t.data.data.UsuarioClienteAdmin),S.Z.commit("setIsAuthenticated",!0),n.push("/"))})).catch((t=>{0==t.response.data.status?(0,_.y)((()=>{}),"warning","Usuario invalido","Las credenciales son incorrectas"):(0,_.y)((()=>{}),"error","Error de conexión","Hubo un problema de conexión con el origen de datos")}))};return{validateCredential:r,username:t,password:e}},data:()=>({visible:!1,LogoSysnet:w})},U=n(89);const Z=(0,U.Z)(k,[["render",v],["__scopeId","data-v-6132c82e"]]);var I=Z},5127:function(t,e,n){"use strict";t.exports=n.p+"img/logo_sysnet.27bcaa54.png"},8521:function(t,e,n){"use strict";n.d(e,{D:function(){return v}});n(560),n(8099);var r=n(9166),o=n(8157),a=n(1138),s=n(7139),i=n(3396),l=n(3766),u=n(1107);const c=(()=>o.AV.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),d=(()=>o.AV.reduce(((t,e)=>{const n="offset"+(0,s.kC)(e);return t[n]={type:[String,Number],default:null},t}),{}))(),f=(()=>o.AV.reduce(((t,e)=>{const n="order"+(0,s.kC)(e);return t[n]={type:[String,Number],default:null},t}),{}))(),p={col:Object.keys(c),offset:Object.keys(d),order:Object.keys(f)};function m(t,e,n){let r=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");r+=`-${n}`}return"col"===t&&(r="v-"+r),"col"!==t||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const g=["auto","start","end","center","baseline","stretch"],h=(0,l.U)({cols:{type:[Boolean,String,Number],default:!1},...c,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...f,alignSelf:{type:String,default:null,validator:t=>g.includes(t)},...(0,r.l)(),...(0,a.Q)()},"VCol"),v=(0,u.ev)()({name:"VCol",props:h(),setup(t,e){let{slots:n}=e;const r=(0,i.Fl)((()=>{const e=[];let n;for(n in p)p[n].forEach((r=>{const o=t[r],a=m(n,r,o);a&&e.push(a)}));const r=e.some((t=>t.startsWith("v-col-")));return e.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),e}));return()=>(0,i.h)(t.tag,{class:[r.value,t.class],style:t.style},n.default?.())}})}}]);
//# sourceMappingURL=276.4d1ced49.js.map