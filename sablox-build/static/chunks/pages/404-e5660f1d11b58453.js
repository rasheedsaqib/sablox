(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2448:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(1635)}])},5725:function(e,n,r){"use strict";var t=r(5893),o=r(8897),a=r.n(o);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}n.Z=function(e,n){return function(r){return(0,t.jsx)("div",{style:l({},n,{width:"100%"}),children:(0,t.jsx)("div",{className:a().width,children:(0,t.jsx)(e,l({},r))})})}}},719:function(e,n,r){"use strict";var t=r(5893),o=r(1343),a=r.n(o),i=r(1664);n.Z=function(e){return(0,t.jsxs)("div",{className:a().footer,children:[(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:a().bottom,children:[(0,t.jsx)(i.default,{href:"/",children:(0,t.jsxs)("a",{className:a().logo,children:[(0,t.jsx)("img",{src:"/logo.png",alt:"SaBloX"}),(0,t.jsx)("h2",{children:"SaBloX"})]})}),(0,t.jsx)("p",{children:"SaBlox | All Rights Reserved, 2021."})]})]})}},7793:function(e,n,r){"use strict";var t=r(5893),o=r(5829),a=r.n(o),i=r(1664),l=r(7294),c=r(3136);n.Z=function(e){var n=(0,l.useContext)(c.Z),r=n.signOut,o=n.isAuth;return(0,t.jsxs)("div",{className:a().navbar,children:[(0,t.jsx)(i.default,{href:"/",children:(0,t.jsxs)("a",{className:"logo",children:[(0,t.jsx)("img",{src:"/logo.png",alt:"SaBloX"}),(0,t.jsx)("h2",{children:"SaBloX"})]})}),(0,t.jsxs)("ul",{className:a().navItems,children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/",children:(0,t.jsxs)("a",{children:["Categories ",(0,t.jsxs)("div",{children:[" ",(0,t.jsx)("i",{className:"fas fa-chevron-down"})," "]})," "]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{children:"Demo"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{children:"Contact"})})})]}),(0,t.jsx)("div",{className:a().buttons,children:o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{children:"Profile"}),(0,t.jsx)("a",{onClick:function(e){return function(e){e.preventDefault(),r()}(e)},children:"Sign out"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{href:"/signin",children:(0,t.jsx)("a",{children:"Signin"})}),(0,t.jsx)(i.default,{href:"/signup",children:(0,t.jsx)("a",{children:"Signup"})})]})})]})}},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(6273),l=r(387),c=r(7190);var s={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=l.useRouter(),f=a.default.useMemo((function(){var n=t(i.resolveHref(o,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?i.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,x=e.shallow,j=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,y=t(c.useIntersection({rootMargin:"200px"}),2),b=y[0],_=y[1],w=a.default.useCallback((function(e){b(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,b]);a.default.useEffect((function(){var e=_&&r&&i.isLocalURL(d),n="undefined"!==typeof g?g:o&&o.locale,t=s[d+"%"+h+(n?"%"+n:"")];e&&!t&&u(o,d,h,{locale:n})}),[h,d,_,g,r,o]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&t.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:c,scroll:l}))}(e,o,d,h,p,x,j,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(o,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof g?g:o&&o.locale,k=o&&o.isLocaleDomain&&i.getDomainLocale(h,N,o&&o.locales,o&&o.domainLocales);E.href=k||i.addBasePath(i.addLocale(h,N,o&&o.defaultLocale))}return a.default.cloneElement(n,E)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,c=o.useRef(),s=t(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||u||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=l.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=r(7294),a=r(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},1635:function(e,n,r){"use strict";r.r(n);var t=r(5893),o=r(1664),a=r(5725),i=r(7793),l=r(719);n.default=(0,a.Z)((function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{}),(0,t.jsxs)("div",{className:"not-found",children:[(0,t.jsx)("p",{children:"Page you are looking for was not Found!"}),(0,t.jsx)(o.default,{href:"/",children:(0,t.jsx)("a",{children:"Return to Home"})})]}),(0,t.jsx)(l.Z,{})]})}))},8897:function(e){e.exports={width:"withWidth_width__RKVxd"}},1343:function(e){e.exports={footer:"footer_footer__U3hJC",bottom:"footer_bottom__9HK7u",logo:"footer_logo__4J3Ks"}},5829:function(e){e.exports={navbar:"navbar_navbar__B1mUH",navItems:"navbar_navItems__95jnO",buttons:"navbar_buttons__GkfkI"}},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=2448,e(e.s=n);var n}));var n=e.O();_N_E=n}]);