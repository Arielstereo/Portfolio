(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(t,e,n){var content=n(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("7e2466d7",content,!0,{sourceMap:!1})},175:function(t,e,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("788645da",content,!0,{sourceMap:!1})},187:function(t,e,n){"use strict";n.r(e);var r=n(17),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"flex flex-col-reverse lg:flex-row items-center lg:justify-center w-full dark:text-slate-50"},[n("p",{staticClass:"py-12"},[t._v("\n    © Copyright 2022. Developed by Ariel Martinez\n  ")]),t._v(" "),n("ul",{staticClass:"flex absolute items-center lg:right-24 gap-3"},[n("li",[n("a",{attrs:{href:"mailto:arielstereo@msn.com"}},[n("i",{staticClass:"bx bx-mail-send bx-sm"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Arielstereo",target:"blank"}},[n("i",{staticClass:"bx bxl-github bx-sm"})])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.linkedin.com/in/ariel-mart%C3%ADnez-013507219/",target:"blank"}},[n("i",{staticClass:"bx bxl-linkedin-square bx-sm"})])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(187).default})},195:function(t,e,n){"use strict";var r={data:function(){return{Links:[{name:"Home",route:"/"},{name:"About",route:"/about"},{name:"Skills",route:"/skills"},{name:"Education",route:"/education"},{name:"Contact",route:"/contact"}],isDark:!1,isOpen:!1}},methods:{openClose:function(){this.isOpen=!this.isOpen}}},l=(n(254),n(17)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.isDark?"dark":""},[r("Background",[r("nav",{staticClass:"lg:fixed top-0 shadow-xl w-full py-8 lg:py-6 bg-gradient-to-l lg:from-sky-400 to-transparent"},[r("div",{staticClass:"\n      container\n      flex\n      items-center\n      justify-center\n      mx-auto\n    "},[r("div",{staticClass:"w-full lg:block md:w-auto"},[r("button",{staticClass:"lg:hidden absolute right-6 top-8",attrs:{type:"button"},on:{click:t.openClose}},[t.isOpen?r("span",[t.isDark?r("i",{staticClass:"bx bx-x bx-md dark:text-slate-50"}):r("i",{staticClass:"bx bx-x bx-md"})]):r("span",{staticClass:"flex"},[t.isDark?r("i",{staticClass:"bx bx-menu-alt-left bx-md dark:text-slate-50"}):r("i",{staticClass:"bx bx-menu-alt-left bx-md"})])]),t._v(" "),t.isOpen?t._e():r("span",{staticClass:"flex gap-3 items-center ml-3 lg:hidden"},[r("img",{staticClass:"w-10",attrs:{src:n(253),alt:"logo"}}),t._v(" "),r("h6",{staticClass:"text-2xl font-semibold dark:text-slate-50"},[t._v("Ariel Martinez")])]),t._v(" "),r("ul",{staticClass:"flex flex-wrap lg:inline-flex pt-8 lg:pt-0 justify-center",class:[t.isOpen?"visible":"hidden"]},[r("li",{staticClass:"hidden xl:block mx-5"},[r("Spinner")],1),t._v(" "),t._l(t.Links,(function(link){return r("li",{key:link.name},[r("nuxt-link",{staticClass:"\n              inline-block\n              px-2\n              md:px-5\n              lg:px-10\n              mx-3\n              py-2\n              text-lg\n              font-semibold\n            text-slate-800 dark:text-slate-50 focus:bg-sky-900 focus:text-slate-100 focus:dark:bg-slate-100 focus:dark:text-slate-700 rounded-full  hover:bg-slate-100 hover:dark:bg-sky-900",attrs:{to:link.route}},[t._v("\n                "+t._s(link.name)+"\n              ")])],1)})),t._v(" "),r("li",{staticClass:"absolute lg:relative left-2 top-5  lg:top-2 lg:mx-5"},[r("label",{staticClass:"switch text-sm lg:text-base m-3 lg:m-auto"},[r("input",{attrs:{type:"checkbox"},on:{click:function(e){t.isDark=!t.isDark}}}),t._v(" "),r("span",{staticClass:"slider"})])])],2)])])]),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)],1)}),[],!1,null,"fa0a31ba",null);e.a=component.exports;installComponents(component,{Spinner:n(267).default,Footer:n(187).default,Background:n(196).default})},196:function(t,e,n){"use strict";n.r(e);var r=n(17),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:" bg-slate-50 dark:bg-slate-900"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,n){n(200),t.exports=n(201)},249:function(t,e,n){var content=n(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("54d1a926",content,!0,{sourceMap:!1})},250:function(t,e,n){var r=n(39)((function(i){return i[1]}));r.push([t.i,'*{margin:0;padding:0;box-sizing:border-box}body{font-family:"Roboto Slab"}h1,h2{font-family:"Dela Gothic One"}h6{font-family:"Macondo"}',""]),r.locals={},t.exports=r},253:function(t,e,n){t.exports=n.p+"img/logo.2999aa8.png"},254:function(t,e,n){"use strict";n(174)},255:function(t,e,n){var r=n(39)((function(i){return i[1]}));r.push([t.i,'.switch[data-v-fa0a31ba]{position:relative;display:inline-block;width:4em;height:2em}.switch input[data-v-fa0a31ba]{opacity:0;width:0;height:0}.slider[data-v-fa0a31ba]{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:rgba(250,241,106,.6392156862745098);border-radius:30px}.slider[data-v-fa0a31ba],.slider[data-v-fa0a31ba]:before{position:absolute;transition:.4s}.slider[data-v-fa0a31ba]:before{content:"";height:1.4em;width:1.4em;border-radius:20px;left:.3em;bottom:.3em;background:linear-gradient(40deg,#ff0080,#ff8c00 70%)}input:checked+.slider[data-v-fa0a31ba]{background-color:#303136}input:checked+.slider[data-v-fa0a31ba]:before{transform:translateX(1.5em);background:#303136;box-shadow:inset -3px -2px 5px -2px #8983f7,inset -10px -5px 0 0 #a3dafb}',""]),r.locals={},t.exports=r},256:function(t,e,n){"use strict";n(175)},257:function(t,e,n){var r=n(39)((function(i){return i[1]}));r.push([t.i,'.loader[data-v-9dc6e2b2]{width:4em;height:4em;font-size:12px;position:relative;display:flex;align-items:center;justify-content:center}.loader .face[data-v-9dc6e2b2]{position:absolute;border-radius:50%;border-style:solid;-webkit-animation:animate023845-data-v-9dc6e2b2 3s linear infinite;animation:animate023845-data-v-9dc6e2b2 3s linear infinite}.loader .face[data-v-9dc6e2b2]:first-child{width:100%;height:100%;border-color:currentColor transparent transparent currentColor;border-width:.2em .2em 0 0;--deg:-45deg;-webkit-animation-direction:normal;animation-direction:normal}.loader .face[data-v-9dc6e2b2]:nth-child(2){width:70%;height:70%;border-color:currentColor currentColor transparent transparent;border-width:.2em 0 0 .2em;--deg:-135deg;animation-direction:reverse}.loader .face .circle[data-v-9dc6e2b2]{position:absolute;width:50%;height:.1em;top:50%;left:50%;background-color:transparent;transform:rotate(var(--deg));transform-origin:left}.loader .face .circle[data-v-9dc6e2b2]:before{position:absolute;top:-.5em;right:-.5em;content:"";width:1em;height:1em;background-color:currentColor;border-radius:50%}@-webkit-keyframes animate023845-data-v-9dc6e2b2{to{transform:rotate(1turn)}}@keyframes animate023845-data-v-9dc6e2b2{to{transform:rotate(1turn)}}',""]),r.locals={},t.exports=r},267:function(t,e,n){"use strict";n.r(e);n(256);var r=n(17),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader text-black dark:text-white"},[n("div",{staticClass:"face"},[n("div",{staticClass:"circle"})]),t._v(" "),n("div",{staticClass:"face"},[n("div",{staticClass:"circle"})])])}],!1,null,"9dc6e2b2",null);e.default=component.exports}},[[199,10,1,11]]]);