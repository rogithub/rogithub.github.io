(function(t){function a(a){for(var s,n,l=a[0],c=a[1],o=a[2],v=0,u=[];v<l.length;v++)n=l[v],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(u.length)u.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,l=1;l<e.length;l++){var c=e[l];0!==r[c]&&(s=!1)}s&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},i=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var d=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),r=e.n(s);r.a},"222d":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("TopMenu"),e("router-view")],1)},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("svg",{staticClass:"bi bi-code-slash",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"}})]),t._v(" Rodrigo Jiménez ")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v(" Home ")])],1),t._m(1),t._m(2),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v(" Contact ")])],1),t._m(3)])])],1)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"resume/RodrigoJimenezProfile.pdf"}},[t._v(" Download ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"https://app.pluralsight.com/profile/rodrigo-jimenez-16"}},[t._v(" Recent Training ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Toy Projects ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"https://roserviceschat.azurewebsites.net/"}},[t._v(" Chat ")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",attrs:{href:"https://dejatupuntito.com/"}},[t._v("Web")]),e("a",{staticClass:"dropdown-item",attrs:{href:"https://api.dejatupuntito.com/"}},[t._v(" Api ")]),e("a",{staticClass:"dropdown-item",attrs:{href:"https://identity.dejatupuntito.com/"}},[t._v(" Identity Server ")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",attrs:{href:"qr.html"}},[t._v("QR")])])])}],c=e("2877"),o={},d=Object(c["a"])(o,n,l,!1,null,null,null),v=d.exports,u={name:"App",components:{TopMenu:v}},p=u,b=(e("034f"),Object(c["a"])(p,r,i,!1,null,null,null)),m=b.exports,g=e("8c4f"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Contact")]),e("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v("México")]),e("p",[e("svg",{staticClass:"bi bi-phone",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}})]),t._v(" +52 452 132 9604 ")]),e("p",[e("svg",{staticClass:"bi bi-envelope-open",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z"}})]),t._v(" correo.rodrigo@gmail.com ")]),t._m(0),t._m(1)])])])])])},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" Github "),e("br"),e("a",{staticClass:"text-muted",attrs:{href:"https://github.com/rogithub"}},[t._v(" @rogithub ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" Stack Overflow "),e("br"),e("a",{staticClass:"text-muted",attrs:{href:"https://stackoverflow.com/users/146560/ro"}},[t._v(" @ro ")])])}],f={},_=Object(c["a"])(f,h,C,!1,null,null,null),w=_.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"cv rounded mb-4"},[e("h1",{staticClass:"display-4"},[t._v("Rodrigo Jiménez")]),e("p",{staticClass:"lead"},[t._v("Software developer")]),e("p",[t._v(" Object oriented and functional programming, design patterns, multithreading, unit testing, microservices, containers, virtualization, and networking. ")]),e("hr",{staticClass:"my-4"}),e("p",{staticClass:"lead"},[t._v("Skills")]),t._m(0),e("p",{staticClass:"lead mt-4"},[t._v("Experience")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),e("p",{staticClass:"lead mt-4"},[t._v("Education")]),t._m(6),e("div",{staticClass:"text-right"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"#",role:"button"}},[t._v(" Top "),e("svg",{staticClass:"bi bi-arrow-up-square",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"}})])])])])])},x=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"skills"},[e("small",[t._v("Languages")]),e("span",{staticClass:"badge badge-primary"},[t._v("C#")]),e("span",{staticClass:"badge badge-primary"},[t._v("SQL")]),e("span",{staticClass:"badge badge-primary"},[t._v("JavaScript")]),e("span",{staticClass:"badge badge-primary"},[t._v("TypeScript")]),e("span",{staticClass:"badge badge-primary"},[t._v("Haskell")]),e("span",{staticClass:"badge badge-primary"},[t._v("F#")]),e("span",{staticClass:"badge badge-primary"},[t._v("Rust")]),e("span",{staticClass:"badge badge-primary"},[t._v("Bash")]),e("span",{staticClass:"badge badge-primary"},[t._v("Python")]),e("small",[t._v("Web Frameworks")]),e("span",{staticClass:"badge badge-warning"},[t._v("knockout")]),e("span",{staticClass:"badge badge-warning"},[t._v("angular")]),e("span",{staticClass:"badge badge-warning"},[t._v("react")]),e("span",{staticClass:"badge badge-warning"},[t._v("vue")]),e("small",[t._v("Runtime")]),e("span",{staticClass:"badge badge-info"},[t._v("dotnet core")]),e("span",{staticClass:"badge badge-info"},[t._v("node")]),e("small",[t._v("Containers")]),e("span",{staticClass:"badge badge-dark"},[t._v("docker")]),e("span",{staticClass:"badge badge-dark"},[t._v("docker-compose")]),e("span",{staticClass:"badge badge-dark"},[t._v("kubernetes")]),e("span",{staticClass:"badge badge-dark"},[t._v("portainer")]),e("small",[t._v("Other")]),e("span",{staticClass:"badge badge-success"},[t._v("linux")]),e("span",{staticClass:"badge badge-success"},[t._v("nginx")]),e("span",{staticClass:"badge badge-success"},[t._v("signalr")]),e("span",{staticClass:"badge badge-success"},[t._v("graphql")]),e("span",{staticClass:"badge badge-success"},[t._v("identity server")]),e("span",{staticClass:"badge badge-success"},[t._v("DevOps")]),e("span",{staticClass:"badge badge-success"},[t._v("git")]),e("span",{staticClass:"badge badge-success"},[t._v("tfs")]),e("span",{staticClass:"badge badge-success"},[t._v("github actions")]),e("span",{staticClass:"badge badge-success"},[t._v("npm")]),e("span",{staticClass:"badge badge-success"},[t._v("nuget")]),e("span",{staticClass:"badge badge-success"},[t._v("raspberry pi")]),e("small",[t._v("Testing")]),e("span",{staticClass:"badge badge-secondary"},[t._v("jasmine/js")]),e("span",{staticClass:"badge badge-secondary"},[t._v("NUnit")]),e("span",{staticClass:"badge badge-secondary"},[t._v("xUnit")]),e("span",{staticClass:"badge badge-secondary"},[t._v("selenium")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("UL")]),e("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" Albany, New York Area ")]),e("div",[e("h6",{staticClass:"card-title"},[t._v(".Net Software Developer")]),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" September 2015 - Present ")])]),e("p",{staticClass:"card-text"},[t._v(" Working on a Data Entry software for capturing and sharing chemical information at industry level. High use of Knockout JS framework, .Net MVC, data sharing via Web Services and XML transformations. ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("THE WERCS")]),e("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" Albany, New York Area ")]),e("div",[e("h6",{staticClass:"card-title"},[t._v(".Net Software Developer")]),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" May 2010 - September 2015 ")])]),e("p",{staticClass:"card-text"},[t._v(" Developing and maintaining software for the chemical industry using .net technology. Creation of web services to interact with other companies, web pages and software to design documents related to chemical regulatory compliance. Some of the software products are translated into more than 50 languages. MS SQL/ORACLE/.NET. ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Quantuvis Consulting (Softtek)")]),e("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" Monterrey NL, México ")]),e("div",[e("h6",{staticClass:"card-title"},[t._v(".Net Software Developer")]),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" June 2009 - May 2010 ")])]),e("p",{staticClass:"card-text"},[t._v(" MVC .Net cross-browser web page for companies that wanted to be compared with their competitors so they can manage their milestones and achieve better competitiveness in their areas. ")]),e("p",{staticClass:"card-text"},[t._v(" During this time I worked in the migration of Quantuvis Java based system to .Net MVC 1.0 Microsoft technology. Once the migration was completed new development took place. I worked on developing new modules and user controls. Requirements for this project included cross browser support and heavy use of charts for displaying results to the end users. ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("GMO (Softtek)")]),e("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" Monterrey NL, México ")]),e("div",[e("h6",{staticClass:"card-title"},[t._v(".Net Software Developer")]),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" July 2008 - July 2009 ")])]),e("p",{staticClass:"card-text"},[t._v(" MVC .Net cross-browser web page for companies that wanted to be compared with their competitors so they can manage their milestones and achieve better competitiveness in their areas. ")]),e("p",{staticClass:"card-text"},[t._v(" This software allows GMO to better manage the assets for their clients. High accuracy in the amounts was very important since this company was tradingshares for their clients. Everything was double-checked and unit tested to ensure a highly accurate software that shows status of the transactions on realtime. ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v("Vallarta Online")]),e("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" Puerto Vallarta, Jalisco, México ")]),e("div",[e("h6",{staticClass:"card-title"},[t._v(".Net Software Developer")]),e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" July 2007 - June 2008 ")])]),e("p",{staticClass:"card-text"},[t._v(" Tourism oriented web site to book hotel reservations, tour reservations, car rental and suggesting points of interest in the Puerto Vallarta Bay area. Site was following design guidelines from amazon for web interfaces. ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h4",{staticClass:"card-title"},[t._v("Universidad de Guadalajara")]),e("h5",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(" Bachelor's degree, Telecommunications Engineering ")])])}],k=(e("d44d"),{}),M=Object(c["a"])(k,y,x,!1,null,null,null),S=M.exports;s["a"].config.productionTip=!1;var E=[{path:"/",redirect:"/index"},{path:"/index",name:"index",component:S},{path:"/contact",name:"contact",component:w},{path:"*",component:S}];s["a"].use(g["a"]);var O=new g["a"]({routes:E});new s["a"]({router:O,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,a,e){},d44d:function(t,a,e){"use strict";var s=e("222d"),r=e.n(s);r.a}});
//# sourceMappingURL=app.73bead1d.js.map