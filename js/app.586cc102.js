(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ca801a45","chunk-0aa1a684":"47331b6f","chunk-00172020":"4505814f","chunk-2d0c96fe":"eacb1391","chunk-2d238097":"542f77bf","chunk-c607f48a":"106936d6","chunk-12c392fa":"9690728f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0aa1a684":1,"chunk-00172020":1,"chunk-c607f48a":1,"chunk-12c392fa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-0aa1a684":"1ec8a559","chunk-00172020":"04bdf06a","chunk-2d0c96fe":"31d6cfe0","chunk-2d238097":"31d6cfe0","chunk-c607f48a":"8ab50092","chunk-12c392fa":"c7315fda"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("DrawerMenu")],1),n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"white deep-orange--text darken-2",dense:"",elevation:0}},[n("v-app-bar-nav-icon",{staticClass:"deep-orange--text",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-spacer"),n("v-toolbar-title",[e._v("BodyTRACKER")])],1),n("v-content",{staticClass:"white"},[n("v-container",{staticClass:"white",attrs:{fluid:""}},[n("v-row",{attrs:{align:"start",justify:"space-around"}},[n("v-col",{attrs:{cols:"12"}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)],1)],1)],1),n("v-footer",{attrs:{app:"",absolute:!0}},[n("span",[e._v("© 2019")])])],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{attrs:{dense:""}},e._l(e.menuItems,(function(t){return n("v-list-item",{key:t.path,attrs:{to:{path:"/"+t.path}}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-"+e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)},u=[],s={name:"drawermenu",data:function(){return{menuItems:[{path:"",title:"Dashboard",icon:"view-dashboard"},{path:"users",title:"Users",icon:"account-group"},{path:"adduser",title:"Add User",icon:"account-plus"},{path:"about",title:"About",icon:"information"}]}}},l=s,p=n("2877"),f=n("6544"),d=n.n(f),h=n("132d"),b=n("8860"),m=n("da13"),v=n("1800"),g=n("5d23"),y=Object(p["a"])(l,i,u,!1,null,null,null),w=y.exports;d()(y,{VIcon:h["a"],VList:b["a"],VListItem:m["a"],VListItemAction:v["a"],VListItemContent:g["a"],VListItemTitle:g["c"]});var k={name:"App",props:{source:String},components:{DrawerMenu:w},data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!1},methods:{goTo:function(e){this.$router.push({name:e})}}},O=k,j=n("7496"),_=n("40dc"),P=n("5bc1"),V=n("62ad"),C=n("a523"),A=n("a75b"),E=n("0789"),T=n("553a"),x=n("f774"),S=n("0fd9"),D=n("2fa4"),I=n("2a7f"),L=Object(p["a"])(O,o,c,!1,null,null,null),B=L.exports;d()(L,{VApp:j["a"],VAppBar:_["a"],VAppBarNavIcon:P["a"],VCol:V["a"],VContainer:C["a"],VContent:A["a"],VFadeTransition:E["b"],VFooter:T["a"],VNavigationDrawer:x["a"],VRow:S["a"],VSpacer:D["a"],VToolbarTitle:I["a"]});n("d3b7");var U=n("8c4f"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"blue lighten-5"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{"no-gutters":"",justify:"center"}},[n("h3",[e._v("Home")]),n("p",[e._v(" TODO: put information on home page ")])])],1)],1)],1)},M=[],$={name:"home",components:{}},R=$,K=Object(p["a"])(R,N,M,!1,null,null,null),q=K.exports;d()(K,{VCol:V["a"],VContainer:C["a"],VRow:S["a"]}),a["a"].use(U["a"]);var F=[{path:"/",name:"home",component:q},{path:"/adduser",name:"Add user",component:function(){return Promise.all([n.e("chunk-0aa1a684"),n.e("chunk-00172020"),n.e("chunk-2d0c96fe")]).then(n.bind(null,"58af"))}},{path:"/user/:id",name:"User",component:function(){return Promise.all([n.e("chunk-0aa1a684"),n.e("chunk-c607f48a")]).then(n.bind(null,"1511"))}},{path:"/edituser/:uid",name:"Edit User",component:function(){return Promise.all([n.e("chunk-0aa1a684"),n.e("chunk-00172020"),n.e("chunk-2d238097")]).then(n.bind(null,"fe57"))}},{path:"/users",name:"Users",component:function(){return n.e("chunk-12c392fa").then(n.bind(null,"ed81"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],H=new U["a"]({base:"",routes:F}),z=H,J=n("f309");a["a"].use(J["a"]);var X=new J["a"]({}),Y=n("8aa50"),G=n.n(Y),Q=(n("e71f"),{apiKey:"AIzaSyDb6yUnyTB4c3mBpaKq27exB9OUHXXx4iY",authDomain:"trackfit-9a0c0.firebaseapp.com",databaseURL:"https://trackfit-9a0c0.firebaseio.com",projectId:"trackfit-9a0c0",storageBucket:"trackfit-9a0c0.appspot.com",messagingSenderId:"1083075412043",appId:"1:1083075412043:web:b4273d32159a6b82500dce"});function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"db",(function(){return te}));var ee=G.a.initializeApp(Z({},Q)),te=ee.firestore();a["a"].config.productionTip=!1,new a["a"]({router:z,vuetify:X,render:function(e){return e(B)}}).$mount("#app")}});
//# sourceMappingURL=app.586cc102.js.map