(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8971:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(2787)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,s=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(o){a=!0,s=o}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,s=(a=t(7294))&&a.__esModule?a:{default:a},l=t(6273),i=t(387),o=t(7190);var c={};function u(e,n,t,r){if(e&&l.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,a=i.useRouter(),d=s.default.useMemo((function(){var n=r(l.resolveHref(a,e.href,!0),2),t=n[0],s=n[1];return{href:t,as:e.as?l.resolveHref(a,e.as):s||t}}),[a,e.href,e.as]),f=d.href,h=d.as,p=e.children,m=e.replace,v=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var j=(n=s.default.Children.only(p))&&"object"===typeof n&&n.ref,_=r(o.useIntersection({rootMargin:"200px"}),2),y=_[0],w=_[1],N=s.default.useCallback((function(e){y(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,y]);s.default.useEffect((function(){var e=w&&t&&l.isLocalURL(f),n="undefined"!==typeof x?x:a&&a.locale,r=c[f+"%"+h+(n?"%"+n:"")];e&&!r&&u(a,f,h,{locale:n})}),[h,f,w,x,t,a]);var b={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,s,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:s,locale:o,scroll:i}))}(e,a,f,h,m,v,g,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(f)&&u(a,f,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof x?x:a&&a.locale,k=a&&a.isLocaleDomain&&l.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);b.href=k||l.addBasePath(l.addLocale(h,E,a&&a.defaultLocale))}return s.default.cloneElement(n,b)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,s=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(o){a=!0,s=o}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!l,o=a.useRef(),c=r(a.useState(!1),2),u=c[0],d=c[1],f=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||u||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,s=r.observer,l=r.elements;return l.set(e,n),s.observe(e),function(){l.delete(e),s.unobserve(e),0===l.size&&(s.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,u]);return a.useEffect((function(){if(!l&&!u){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=t(7294),s=t(9311),l="undefined"!==typeof IntersectionObserver;var i=new Map},2787:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(5893),a=t(4420),s=t.n(a),l=t(1664),i=t(7294),o=function(e){var n=(0,i.useRef)(null),t=(0,i.useRef)(null);return(0,r.jsxs)("div",{className:s().auth,children:[(0,r.jsxs)("form",{onSubmit:function(r){return function(r){r.preventDefault(),console.log(r.target.elements),e.handleSignup(r.target.elements.firstName.value,r.target.elements.lastName.value,r.target.elements.email.value,r.target.elements.phone.value,r.target.elements.password.value,r.target.elements.confirmPassword.value,n.checked,t.checked)}(r)},className:s().form,children:[(0,r.jsx)(l.default,{href:"/",children:(0,r.jsxs)("a",{className:"logo",children:[(0,r.jsx)("img",{src:"/logo.png",alt:"SaBloX"}),(0,r.jsx)("h2",{children:"SaBloX"})]})}),(0,r.jsx)("h2",{className:s().title,children:"Sign up"}),(0,r.jsx)("p",{className:s().line,children:"Get access to all the blogs blogs"}),(0,r.jsxs)("div",{className:s().row,children:[(0,r.jsxs)("div",{className:s().input,children:[(0,r.jsxs)("p",{children:["First Name ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)("input",{type:"text",name:"firstName",placeholder:"Enter First name"})]}),(0,r.jsxs)("div",{className:s().input,children:[(0,r.jsxs)("p",{children:["Last Name ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)("input",{type:"text",name:"lastName",placeholder:"Enter Last name"})]}),(0,r.jsxs)("div",{className:s().input,children:[(0,r.jsxs)("p",{children:["Email ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Enter email"})]}),(0,r.jsxs)("div",{className:s().input,children:[(0,r.jsx)("p",{children:"Phone"}),(0,r.jsx)("input",{type:"phone",name:"phone",placeholder:"Enter phone"})]}),(0,r.jsxs)("div",{className:s().input,children:[(0,r.jsxs)("p",{children:["Password ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)("input",{type:"password",name:"password",placeholder:"Enter password"})]}),(0,r.jsxs)("div",{className:s().input,children:[(0,r.jsxs)("p",{children:["Confirm Password ",(0,r.jsx)("span",{children:"*"})]}),(0,r.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Enter password again"})]})]}),(0,r.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,r.jsxs)("label",{className:s().container,children:["I want to receive newsletter emails.",(0,r.jsx)("input",{ref:function(e){return n=e},type:"checkbox"}),(0,r.jsx)("span",{className:s().checkmark})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("label",{className:s().container,children:["I agree to ",(0,r.jsx)("a",{children:" terms "})," and ",(0,r.jsx)("a",{children:"privacy policy"}),".",(0,r.jsx)("input",{ref:function(e){return t=e},type:"checkbox"}),(0,r.jsx)("span",{className:s().checkmark})]})]}),(0,r.jsx)("button",{type:"submit",children:e.loading?"Loading...":"Sign up"}),(0,r.jsxs)("p",{children:["Already have an account?",(0,r.jsx)(l.default,{href:"/signin",children:(0,r.jsx)("a",{children:"Sign in"})})]})]}),(0,r.jsx)("div",{className:s().image,children:(0,r.jsx)("div",{className:s().img})})]})},c=t(5538),u=t(4596),d=function(e){var n=(0,i.useState)(!1),t=n[0],a=n[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o,{handleSignup:function(e,n,t,r,s,l,i,o){0===e.length||0===n.length||0===t.length||0===r.length||0===s.length||0===l.length?c.Am.warn("Enter all the fields!"):!function(e){return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}(t)?c.Am.warn("Enter a valid email!"):s.length<5?c.Am.warn("Passwords should be at least 5 characters long!!"):s!==l?c.Am.warn("Passwords don't match!"):o?(a(!0),u.Z.post("/signup",{firstName:e,lastName:n,email:t,phone:r,password:s}).then((function(e){201===e.status&&c.Am.success("Signup successful!"),a(!1)}))):c.Am.warn("Please accept terms and privacy policy!")},loading:t,setLoading:a})})}},4420:function(e){e.exports={auth:"auth_auth__mK_LY",form:"auth_form__xYb51",title:"auth_title__H9_cg",line:"auth_line__QDVZO",row:"auth_row__9Uz5o",input:"auth_input__kGg9m",container:"auth_container__rOg_n",checkmark:"auth_checkmark___w2cu",image:"auth_image__a8t7n",img:"auth_img__EAgAn"}},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=8971,e(e.s=n);var n}));var n=e.O();_N_E=n}]);