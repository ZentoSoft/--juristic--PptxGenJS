(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(107)),o={id:"sections",title:"Slide Sections"},c={unversionedId:"sections",id:"sections",isDocsHomePage:!1,title:"Slide Sections",description:"Group slides using sections.",source:"@site/docs/sections.md",slug:"/sections",permalink:"/PptxGenJS/docs/sections",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1618282916,formattedLastUpdatedAt:"4/12/2021",sidebar:"docs",previous:{title:"Masters and Placeholders",permalink:"/PptxGenJS/docs/masters"},next:{title:"Shapes and Schemes",permalink:"/PptxGenJS/docs/shapes-and-schemes"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Section Options",id:"section-options",children:[]},{value:"Section Example",id:"section-example",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Group slides using sections."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'pptx.addSection({ title: "Tables" });\npptx.addSection({ title: "Tables", order: 3 });\n')),Object(i.b)("h2",{id:"section-options"},"Section Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Option"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Possible Values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"title")),Object(i.b)("td",{parentName:"tr",align:"left"},"string"),Object(i.b)("td",{parentName:"tr",align:"left"},"section title"),Object(i.b)("td",{parentName:"tr",align:"left"},"0-n OR 'n%'. (Ex: ",Object(i.b)("inlineCode",{parentName:"td"},"{x:'50%'}")," will place object in the middle of the Slide)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"order")),Object(i.b)("td",{parentName:"tr",align:"left"},"integer"),Object(i.b)("td",{parentName:"tr",align:"left"},"section order"),Object(i.b)("td",{parentName:"tr",align:"left"},"1-n. Used to add section at any index")))),Object(i.b)("h2",{id:"section-example"},"Section Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},'import pptxgen from "pptxgenjs";\nlet pptx = new pptxgen();\n\n// STEP 1: Create a section\npptx.addSection({ title: "Tables" });\n\n// STEP 2: Provide section title to a slide that you want in corresponding section\nlet slide = pptx.addSlide({ sectionTitle: "Tables" });\n\nslide.addText("This slide is in the Tables section!", { x: 1.5, y: 1.5, fontSize: 18, color: "363636" });\npptx.writeFile({ fileName: "Section Sample.pptx" });\n')))}s.isMDXComponent=!0}}]);