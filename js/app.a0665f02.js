(function(e){function n(n){for(var r,i,c=n[0],s=n[1],u=n[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(n);while(d.length)d.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var s=t[c];0!==o[s]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"46ad":function(e,n,t){},"49f8":function(e,n,t){var r={"./en.json":"edd4","./fr.json":"f693"};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.isInitialized?t("v-app",[t("v-app-bar",{attrs:{app:"",dark:"",fixed:""}},[t("div",{staticClass:"d-flex align-center"},[t("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(n){e.drawer=!0}}}),t("v-toolbar-title",[e._v("Rémi Frontiere")])],1),t("v-spacer"),t("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t("v-container",[t("v-btn",{attrs:{text:"",link:""},on:{click:function(n){return e.changeLang("fr")}}},[e._v("FR")]),t("v-btn",{attrs:{text:"",link:""},on:{click:function(n){return e.changeLang("en")}}},[e._v("EN")])],1)],1)],1),t("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(n){e.drawer=n},expression:"drawer"}}),t("v-main",[t("router-view")],1)],1):e._e()},a=[],i={name:"App",components:{},data:function(){return{isInitialized:!1,drawer:!1}},mounted:function(){this.isInitialized=!0},methods:{changeLang:function(e){this.$i18n.locale=e}}},c=i,s=(t("5c0b"),t("2877")),u=t("6544"),l=t.n(u),f=t("7496"),d=t("40dc"),p=t("5bc1"),v=t("8336"),b=t("a523"),m=t("f6c4"),g=t("f774"),h=t("2fa4"),w=t("2a7f"),y=Object(s["a"])(c,o,a,!1,null,null,null),k=y.exports;l()(y,{VApp:f["a"],VAppBar:d["a"],VAppBarNavIcon:p["a"],VBtn:v["a"],VContainer:b["a"],VMain:m["a"],VNavigationDrawer:g["a"],VSpacer:h["a"],VToolbarItems:w["a"],VToolbarTitle:w["b"]});var O=t("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var _=t("8c4f"),j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("video",{attrs:{id:"videoBackground",autoplay:"",loop:"",src:"https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/Abstract02.mp4?alt=media&token=35c1656c-c8c8-42ef-818a-a36c41bdf213"}}),t("div",{staticClass:"homeContent"},[t("v-container",[t("Me")],1)],1)])},x=[],C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"me"},[t("v-card",{attrs:{elevation:"2"}},[t("v-card-title",[e._v(e._s(e.$t("message")))]),t("v-container",[t("ul")])],1)],1)},V=[],N={name:"Me",mounted:function(){},data:function(){return{}}},S=N,A=(t("d1bd"),t("b0af")),E=t("99d9"),M=Object(s["a"])(S,C,V,!1,null,"207b2f72",null),T=M.exports;l()(M,{VCard:A["a"],VCardTitle:E["a"],VContainer:b["a"]});var P={name:"Home",components:{Me:T}},F=P,$=(t("ae32"),Object(s["a"])(F,j,x,!1,null,"9892aee2",null)),B=$.exports;l()($,{VContainer:b["a"]}),r["a"].use(_["a"]);var I=[{path:"/",name:"Home",component:B}],L=new _["a"]({mode:"history",base:"/",routes:I}),z=L,J=t("2f62");r["a"].use(J["a"]);var D=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=t("f309");r["a"].use(R["a"]);var H=new R["a"]({}),U=(t("159b"),t("d3b7"),t("ddb0"),t("466d"),t("ac1f"),t("a925"));function q(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];n[o]=e(t)}})),n}r["a"].use(U["a"]);var Z=new U["a"]({locale:"fr",fallbackLocale:"fr",messages:q()});r["a"].config.productionTip=!1,new r["a"]({router:z,store:D,vuetify:H,i18n:Z,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},9242:function(e,n,t){},"9c0c":function(e,n,t){},ae32:function(e,n,t){"use strict";t("9242")},d1bd:function(e,n,t){"use strict";t("46ad")},edd4:function(e){e.exports=JSON.parse('{"message":"hello i18n EN !!"}')},f693:function(e){e.exports=JSON.parse('{"message":"hello i18n FR !!"}')}});
//# sourceMappingURL=app.a0665f02.js.map