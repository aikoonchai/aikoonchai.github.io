(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1771:function(t,e,a){var n={"./avasia.png":"782f","./cambridge.jpg":"31bb","./json/db":"215f","./json/db.json":"215f","./myPicture.png":"b346","./xrpltools.png":"9cf3"};function o(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=i,t.exports=o,o.id="1771"},"215f":function(t){t.exports=JSON.parse('{"apps":[{"name":"Avasia Information System","logo":"avasia.png","description":"This is my first intern job. Here, I don\'t do codes but I was assigned at technical department as a techincal support. Not my forte, but being able to learn things that I don\'t usually do, i found it fascinating and a must do as a Computer Enginneer. Even up to this day, the things I learned here at the company is till applicable everyday as a developer and a gamer."},{"name":"Cambridge University Press","logo":"cambridge.jpg","description":"Here, this is my dream come true internship. I wished and prayed that I get the job. I learned a lot of stuff here in terms of coding. At first, I experienced an overflow of knowledge. At first, I feel knowledge overflow but as the day goes by, it became a strength to me. I got so many firsts here. I contributed a lot solution and ideas in this project, and they use the first code I made up to this day. Good memories.","technologies":[{"name":"Node JS","icon":"mdi-nodejs","link":""},{"name":"Angular","icon":"mdi-angularjs","link":""},{"name":"MongoDB","icon":"","link":""},{"name":"ExpressJS","icon":"","link":""}]},{"name":"XRPL Tools","logo":"xrpltools.png","description":"This is my first intern job. Here, I don\'t do codes but I was assign at technical department as a techincal support. Not my forte, but being able to learn things that I don\'t usually do, i found it fascinating and a must do as an engineer that majors computer. And even up to this day, the things I learned here at the company is till applicable everyday as a developer and a gamer.","technologies":[{"name":"Vue","icon":"mdi-vuejs","link":""},{"name":"Vuetify","icon":"mdi-vuetify","link":""},{"name":"Element JS","icon":"","link":""}]}],"contactLinks":[{"name":"Email","value":"jamesangeloergina@gmail.com","link":"mailto:jamesangeloergina","icon":"mdi-email"},{"name":"Github","value":"aikooncchai","link":"https://github.com/aikoonchai","icon":"mdi-github"},{"name":"Facebook","value":"Ergina James","link":"https://www.facebook.com/aikoonchaiii/","icon":"mdi-facebook"},{"name":"Twitter","value":"aikoonchaiii","link":"https://twitter.com/aikoonchaiii","icon":"mdi-twitter"},{"name":"Instagram","value":"aikoonchaiii","link":"https://www.instagram.com/aikoonchaiii/","icon":"mdi-instagram"}]}')},"31bb":function(t,e,a){t.exports=a.p+"img/cambridge.8c971ff6.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("p-toolbar"),a("v-content",{staticStyle:{"background-color":"white"}},[a("router-view")],1),a("p-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{flat:"",absolute:"",color:"transparent",dark:"",height:"120px"}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-container",[a("v-layout",[a("div",{class:{"display-1 font-weight-bold":t.$vuetify.breakpoint.smAndUp,"title font-weight-bold":t.$vuetify.breakpoint.smAndDown}},[t._v("ERG")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"text-right"},[a("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#about",t.options)}}},[t._v("About")]),a("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#portfolio",t.options)}}},[t._v("My Experience")]),a("v-btn",{attrs:{"x-small":t.$vuetify.breakpoint.smAndDown,text:""},on:{click:function(e){return t.$vuetify.goTo("#contact",t.options)}}},[t._v("Contact")])],1)],1)],1)],1)],1)},s=[],l={data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}}},c=l,u=a("2877"),p=a("6544"),d=a.n(p),f=a("40dc"),m=a("8336"),v=a("a523"),b=a("a722"),g=a("2fa4"),h=a("2a7f"),y=Object(u["a"])(c,r,s,!1,null,null,null),x=y.exports;d()(y,{VAppBar:f["a"],VBtn:m["a"],VContainer:v["a"],VLayout:b["a"],VSpacer:g["a"],VToolbarItems:h["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"font-weight-medium",attrs:{app:"",absolute:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Ergina James")])])],1)},k=[],_={},I=_,j=a("62ad"),V=a("553a"),C=Object(u["a"])(I,w,k,!1,null,null,null),O=C.exports;d()(C,{VCol:j["a"],VFooter:V["a"]});var A={name:"App",components:{PToolbar:x,PFooter:O}},T=A,E=a("7496"),$=a("a75b"),P=Object(u["a"])(T,o,i,!1,null,null,null),S=P.exports;d()(P,{VApp:E["a"],VContent:$["a"]});var L=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-img",{attrs:{dark:"","max-height":"500px",src:"https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}},[a("v-layout",{attrs:{"fill-height":"","align-center":""}},[a("v-container",[a("v-row",{staticClass:"white--text",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{class:{"display-2 font-weight-bold ":t.$vuetify.breakpoint.smAndUp,"title font-weight-bold":t.$vuetify.breakpoint.smAndDown}},[t._v("Welcome to my page.")]),a("div",{class:{headline:t.$vuetify.breakpoint.smAndUp,"subtitle-1":t.$vuetify.breakpoint.smAndDown}},[t._v("I make applications.")])])],1)],1)],1)],1),a("v-container",{staticClass:"mt-5"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"about"}},[t._v("This is me")])]),a("v-flex",{attrs:{xs12:"","mt-5":""}},[a("div",{staticClass:"body-1"},[t._v(t._s(t.aboutText.myIntro))])])],1),a("v-layout",{attrs:{wrap:"","my-5":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"portfolio"}},[t._v("Experience")])]),a("v-flex",{staticClass:"mt-5",attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[t._l(t.apps,(function(t,e){return[a("v-flex",{key:e,attrs:{xs12:"",sm6:"",md4:""}},[a("p-portfolio-app",{attrs:{app:t}})],1)]}))],2)],1)],1),a("v-layout",{attrs:{wrap:"","my-5":""}},[a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("div",{staticClass:"display-1 font-weight-bold",attrs:{id:"contact"}},[t._v("Send me a message :)")])]),t._l(t.contactLinks,(function(t,e){return[a("v-flex",{key:e,attrs:{sm6:"",md4:"",xs12:""}},[a("p-contact-info",{attrs:{contact:t}})],1)]}))],2)],1)],1)},M=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:"",color:"transparent","max-width":"350px"}},[a("v-card-title",[a("v-layout",[a("v-flex",[a("v-card",{staticStyle:{"border-radius":"20px"},attrs:{target:"_blank",elevation:"5",width:"100px",height:"100px"}},[a("v-img",{attrs:{src:t.logo(t.app.logo)}})],1)],1),a("v-flex",{attrs:{xs7:""}},[a("div",{staticClass:"title"},[t._v(t._s(t.app.name))])])],1)],1),a("v-card-text",[a("div",[t._v(t._s(t.app.description))]),t.app.technologies?[a("div",{staticClass:"title mt-2"},[t._v("Technologies Used")]),a("v-layout",[t._l(t.app.technologies,(function(e,n){return[a("v-flex",{key:n,attrs:{xs3:""}},[a("div",{staticClass:"text-center"},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(t._s(e.icon))])],1),a("div",{staticClass:"caption"},[t._v(t._s(e.name))])],1)])]}))],2)]:t._e()],2)],1)},B=[],J={props:{app:{type:Object,default:function(){return{}}}},methods:{logo:function(t){return a("1771")("./"+t)}}},F=J,U=(a("afd9"),a("b0af")),G=a("99d9"),N=a("0e8f"),R=a("132d"),W=a("adda"),Y=Object(u["a"])(F,H,B,!1,null,null,null),q=Y.exports;d()(Y,{VBtn:m["a"],VCard:U["a"],VCardText:G["a"],VCardTitle:G["b"],VFlex:N["a"],VIcon:R["a"],VImg:W["a"],VLayout:b["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",[a("v-list-item-icon",{staticClass:"pa-0 mr-2"},[a("v-btn",{attrs:{icon:"",href:t.contact.link,target:"_blank"}},[a("v-icon",[t._v(t._s(t.contact.icon))])],1)],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.contact.value))]),a("v-list-item-subtitle",[t._v(t._s(t.contact.name))])],1)],1)},z=[],K={props:{contact:{type:Object,default:function(){return{}}}}},Q=K,Z=a("da13"),tt=a("5d23"),et=a("34c3"),at=Object(u["a"])(Q,X,z,!1,null,null,null),nt=at.exports;d()(at,{VBtn:m["a"],VIcon:R["a"],VListItem:Z["a"],VListItemContent:tt["a"],VListItemIcon:et["a"],VListItemSubtitle:tt["b"],VListItemTitle:tt["c"]});var ot=a("215f"),it={name:"Home",components:{PContactInfo:nt,PPortfolioApp:q},data:function(){return{apps:ot.apps,aboutText:{myIntro:"Hi! I am ERG. I enjoy building apps in my free time. I'm also looking for opportunities to get into machine learning and try to automate as many things as possible. I am not very smart, just curious to see how things function. I am also not that good of a writer as you can see. lol. But, Anyway, you may download any of the codes on my github for free! To all new coders out there, you can do it, too. I hope you have a great day!"},contactLinks:ot.contactLinks}}},rt=it,st=a("0fd9"),lt=Object(u["a"])(rt,D,M,!1,null,null,null),ct=lt.exports;d()(lt,{VCol:j["a"],VContainer:v["a"],VFlex:N["a"],VImg:W["a"],VLayout:b["a"],VRow:st["a"]}),n["a"].use(L["a"]);var ut=[{path:"/",name:"Home",component:ct}],pt=new L["a"]({mode:"history",base:"/",routes:ut}),dt=pt,ft=a("f309");n["a"].use(ft["a"]);var mt=new ft["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:dt,vuetify:mt,render:function(t){return t(S)}}).$mount("#app")},"5a0a":function(t,e,a){},"782f":function(t,e,a){t.exports=a.p+"img/avasia.df26c82c.png"},"9cf3":function(t,e,a){t.exports=a.p+"img/xrpltools.c53c365c.png"},afd9:function(t,e,a){"use strict";a("5a0a")},b346:function(t,e,a){t.exports=a.p+"img/myPicture.2ba6f999.png"}});
//# sourceMappingURL=app.a291d211.js.map