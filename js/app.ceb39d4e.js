(function(e){function n(n){for(var r,i,s=n[0],c=n[1],l=n[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(n);while(p.length)p.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var c=t[s];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0b33":function(e,n,t){e.exports=t.p+"img/france.968aaa24.svg"},"49f8":function(e,n,t){var r={"./en.json":"edd4","./fr.json":"f693"};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},5094:function(e,n,t){"use strict";t("96bb")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return e.isInitialized?r("v-app",[r("v-app-bar",{attrs:{app:"",dark:"",fixed:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-toolbar-title",[e._v(e._s(e.$t("0001")))])],1),r("v-spacer"),r("v-toolbar-items",[r("v-container",["en"==e.$i18n.locale?r("v-btn",{attrs:{rounded:"",text:"",link:""},on:{click:function(n){return e.changeLang("fr")}}},[r("img",{attrs:{src:t("0b33")}})]):e._e(),"fr"==e.$i18n.locale?r("v-btn",{attrs:{rounded:"",text:"",link:""},on:{click:function(n){return e.changeLang("en")}}},[r("img",{attrs:{src:t("b57c")}})]):e._e()],1)],1)],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(n){e.drawer=n},expression:"drawer"}}),r("v-main",[r("router-view")],1)],1):e._e()},o=[],i={name:"App",components:{},data:function(){return{isInitialized:!1,drawer:!1}},mounted:function(){this.$i18n.locale="fr",this.isInitialized=!0},methods:{changeLang:function(e){this.$i18n.locale=e}}},s=i,c=(t("5c0b"),t("2877")),l=t("6544"),u=t.n(l),f=t("7496"),p=t("40dc"),d=t("8336"),v=t("a523"),m=t("f6c4"),b=t("f774"),g=t("2fa4"),h=t("2a7f"),w=Object(c["a"])(s,a,o,!1,null,null,null),_=w.exports;u()(w,{VApp:f["a"],VAppBar:p["a"],VBtn:d["a"],VContainer:v["a"],VMain:m["a"],VNavigationDrawer:b["a"],VSpacer:g["a"],VToolbarItems:h["a"],VToolbarTitle:h["b"]});var y=t("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var k=t("8c4f"),j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("video",{attrs:{id:"videoBackground",autoplay:"",loop:"",src:"https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/Abstract02.mp4?alt=media&token=35c1656c-c8c8-42ef-818a-a36c41bdf213"}}),t("div",{staticClass:"homeContent"},[t("v-container",[t("Me")],1)],1)])},C=[],O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"me"},[t("v-row",[t("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"3"}}),t("v-col",{attrs:{cols:"12",md:"6"}},[t("v-card",[t("v-img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/portfolio-frontiere.appspot.com/o/me.jpg?alt=media&token=81ef9b32-d9a6-47a1-8947-6c724db385a7"}}),t("v-card-title",[e._v("Présentation")]),t("v-container",[t("div",[e._v(" Je m'appelle Rémi Frontiere, j'ai 25 ans et je suis Développeur Front-End. ")]),t("br"),t("div",[e._v(" Je suis "),t("strong",[e._v("Bac+3")]),e._v(" et j'ai "),t("strong",[e._v("3 ans d'expérience professionnelle")]),e._v(" dans le domaine du développement web. ")]),t("div",[e._v(" Actuellement domicilié sur Annecy (74000) - Haute-Savoie - France ")]),t("br"),t("div",[e._v(" Après avoir été 3 ans apprenti Menuisier, j'ai choisi de changer de voie. Je suis diplomé d'un "),t("strong",{staticClass:"canClick"},[t("a",{attrs:{href:"https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers",target:"_blank"}},[e._v("BTS Services informatiques aux organisations option SLAM")])]),e._v(" ainsi que d'une licence professionnelle "),t("strong",{staticClass:"canClick"},[t("a",{attrs:{href:"https://formations.univ-smb.fr/fr/catalogue/licence-professionnelle-DP/sciences-technologies-sante-STS/licence-professionnelle-metiers-de-l-informatique-conception-developpement-et-test-logiciels-I2WYFB5X/lp-developpeur-informatique-multi-supports-alternance-I2WYLMKA.html",target:"_blank"}},[e._v("Développeur informatique multi-supports")])]),e._v(" que j'ai effectué en alternance sur Annecy. ")]),t("br"),t("div",[e._v(" C'est l'entreprise "),t("strong",{staticClass:"canClick"},[t("a",{attrs:{href:"https://www.daesign.com/",target:"_blank"}},[e._v("Daesign")])]),e._v(" qui m'a accompagnée et formée en alternance. J'ai ensuite obtenu un CDI dans cette même entreprise pour finalement y rester 3 ans et 6 mois. ")]),t("div",[e._v("J'ai principalement travaillé sur Angular au sein de Daesign, je me suis également beaucoup interessé à VueJs en autodidacte.")])])],1)],1),t("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"3"}})],1)],1)},x=[],V={name:"Me",mounted:function(){},data:function(){return{}}},S=V,A=(t("662a"),t("b0af")),E=t("99d9"),F=t("62ad"),M=t("adda"),T=t("0fd9"),J=Object(c["a"])(S,O,x,!1,null,"0824d3d4",null),N=J.exports;u()(J,{VCard:A["a"],VCardTitle:E["a"],VCol:F["a"],VContainer:v["a"],VImg:M["a"],VRow:T["a"]});var D={name:"Home",components:{Me:N}},I=D,P=(t("5094"),Object(c["a"])(I,j,C,!1,null,"cb9f4696",null)),R=P.exports;u()(P,{VContainer:v["a"]}),r["a"].use(k["a"]);var q=[{path:"/",name:"Home",component:R}],$=new k["a"]({mode:"history",base:"/",routes:q}),B=$,L=t("2f62");r["a"].use(L["a"]);var z=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),H=t("f309");r["a"].use(H["a"]);var U=new H["a"]({}),W=(t("159b"),t("d3b7"),t("ddb0"),t("466d"),t("ac1f"),t("a925"));function Y(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];n[a]=e(t)}})),n}r["a"].use(W["a"]);var K=new W["a"]({locale:"fr",fallbackLocale:"fr",messages:Y()});r["a"].config.productionTip=!1,new r["a"]({router:B,store:z,vuetify:U,i18n:K,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"662a":function(e,n,t){"use strict";t("b8ea")},"96bb":function(e,n,t){},"9c0c":function(e,n,t){},b57c:function(e,n,t){e.exports=t.p+"img/united-kingdom.e5564902.svg"},b8ea:function(e,n,t){},edd4:function(e){e.exports=JSON.parse('{"0001":"Remi FRONTIERE"}')},f693:function(e){e.exports=JSON.parse('{"0001":"Rémi FRONTIERE","0002":"Je m\'appelle Rémi Frontiere, j\'ai 25 ans et je suis Développeur Front-End.","0003":"EN"}')}});
//# sourceMappingURL=app.ceb39d4e.js.map