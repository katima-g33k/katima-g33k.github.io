"use strict";(self.webpackChunkkatima_g33k_github_io=self.webpackChunkkatima_g33k_github_io||[]).push([[242],{3786:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(1413),a=r(4925),c=(r(2791),r(5626)),l=r(184),s=["name"],o=function(e){var n=e.name,r=(0,a.Z)(e,s),o=c[n];return(0,l.jsx)(o,(0,t.Z)({},r))}},7529:function(e,n,r){r.d(n,{Z:function(){return Z}});var t=r(1413),a=r(4925),c=r(2791),l=r(1418),s=r.n(l),o=r(184),i=function(e){var n=e.children,r=e.isHome;return(0,o.jsx)("main",{className:"flex flex-1 px-6 md:px-3 mt-[100px] md:mt-[104px] lg:mt-[52px] justify-center",children:(0,o.jsx)("div",{className:s()("flex flex-col flex-1 justify-center md:max-w-[75%]",r?"gap-2":"mt-8 lg:mt-0 items-center md:items-start"),children:n})})},u=r(9230),f=function(){var e=(0,u.$G)().i18n,n=(new Date).getFullYear(),r=e.t("globals.footer.copyright",{returnObjects:!0,year:n});return(0,o.jsx)("footer",{className:"mt-10 p-3 flex flex-col md:flex-row items-center md:justify-end",children:r.map((function(e,n){return(0,o.jsxs)("span",{children:[e,"\xa0"]},n)}))})},d=r(7876),m=r(7689),b=r(3763),h=function(){var e=(0,u.$G)().i18n,n=(0,m.TH)(),r=n.pathname,t=n.search,a=(0,m.s0)();(0,c.useEffect)((function(){var n=b.z5.exec(r),t=n&&n[1]?n[1]:b.MV.EN;e.changeLanguage(t).catch()}),[r]);return{toggleLocale:function(){a(function(e,n,r){switch(e){case"/":case"/".concat(b.MV.EN):return"/".concat(b.MV.FR);case"/".concat(b.MV.FR):return"/".concat(b.MV.EN);default:return"/"!==e?"".concat(e.replace(b.z5,"/".concat(n))).concat(r):""}}(r,e.language===b.MV.EN?b.MV.FR:b.MV.EN,t))}}},x=function(e){var n=e.className,r=(0,u.$G)().i18n,t=h().toggleLocale;return(0,o.jsx)("button",{className:s()("bg-none border-none cursor-pointer font-semibold text-lg",n),onClick:t,children:r.t("globals.changeLocale")})},g=r(1087),v=r(3786);function p(e){var n=e.href,r=e.icon,t=e.isActive,a=e.label;return(0,o.jsx)("li",{children:(0,o.jsxs)(g.OL,{className:s()("flex gap-1 text-lg border-b border-b-solid hover:border-b-white",t?"font-semibold border-b-white":"border-b-transparent"),to:n,children:[(0,o.jsx)(v.Z,{"aria-label":a,className:"mb-2 md:hidden",name:r}),(0,o.jsx)("span",{className:"hidden md:inline",children:a})]})})}var j=function(e){var n=e.className,r=function(){var e=(0,m.TH)().pathname,n=(0,u.$G)().i18n,r=n.language;return{locale:r,navItems:[{href:"/".concat(r),icon:"Home",label:n.t("globals.nav.home")},{href:"/".concat(r,"/about"),icon:"User",label:n.t("globals.nav.about")},{href:"/".concat(r,"/experience"),icon:"Code",label:n.t("globals.nav.experience")},{href:"/".concat(r,"/contact"),icon:"MessageSquare",label:n.t("globals.nav.contact")}],pathname:e}}(),a=r.locale,l=r.navItems,i=r.pathname;return(0,o.jsx)("nav",{className:s()("flex-1",n),children:(0,o.jsx)("ul",{className:"flex gap-5 items-center justify-around md:justify-start",children:l.map((function(e){return(0,c.createElement)(p,(0,t.Z)((0,t.Z)({},e),{},{key:e.href,isActive:e.href===i||"/"===i&&e.href==="/".concat(a)}))}))})})},N=r(9439),w=function(){var e=(0,u.$G)().i18n,n=function(){var e=(0,c.useState)(!0),n=(0,N.Z)(e,2),r=n[0],t=n[1],a=function(){return t(window.scrollY<50)};return(0,c.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}),[]),{isTransparent:r}}(),r=n.isTransparent;return(0,o.jsxs)("header",{className:s()("fixed w-full flex gap-6 items-center py-3 px-6 md:px-3 flex-wrap justify-between",r?"bg-transparent":"bg-gray-700"),children:[(0,o.jsx)(d.H2,{className:"!mb-0",children:e.t("globals.title")}),(0,o.jsx)(j,{className:"basis-full lg:basis-auto order-3 lg:order-2"}),(0,o.jsx)(x,{className:"order-2 lg:order-3"})]})},k=["backgroundClass","children"],Z=function(e){var n=e.backgroundClass,r=e.children,c=(0,a.Z)(e,k);return(0,o.jsxs)("div",{className:s()("flex flex-col w-full min-h-screen","before:content-[''] before:fixed before:left-0 before:right-0 before:z-[-1] before:block before:h-full","before:w-full, before:blur-sm before:brightness-50 before:bg-no-repeat before:bg-cover",n),children:[(0,o.jsx)(w,{}),(0,o.jsx)(i,(0,t.Z)((0,t.Z)({},c),{},{children:r})),(0,o.jsx)(f,{})]})}},7876:function(e,n,r){r.d(n,{H1:function(){return l},H2:function(){return s}});r(2791);var t=r(1418),a=r.n(t),c=r(184),l=function(e){var n=e.children,r=e.className;return(0,c.jsx)("h1",{className:a()("text-6xl font-bold mb-8",r),children:n})},s=function(e){var n=e.children,r=e.className;return(0,c.jsx)("h2",{className:a()("font-semibold text-xl mb-2",r),children:n})}},5242:function(e,n,r){r.r(n),r.d(n,{default:function(){return s}});r(2791);var t=r(9230),a=r(7876),c=r(7529),l=r(184);function s(){var e=(0,t.$G)().i18n;return(0,l.jsxs)(c.Z,{backgroundClass:"before:bg-viewpoint",isHome:!0,children:[(0,l.jsx)(a.H1,{className:"!mb-0",children:e.t("home.title")}),(0,l.jsx)(a.H2,{children:e.t("home.subtitle")})]})}}}]);
//# sourceMappingURL=242.7746eec7.chunk.js.map