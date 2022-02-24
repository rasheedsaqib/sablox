(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2913:
/***/ ((module) => {

// Exports
module.exports = {
	"notification": "notification_notification__fs1pN"
};


/***/ }),

/***/ 3906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./UI/Notification/notification.module.scss
var notification_module = __webpack_require__(2913);
var notification_module_default = /*#__PURE__*/__webpack_require__.n(notification_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./util/axios.js
var axios = __webpack_require__(4596);
;// CONCATENATED MODULE: ./UI/Notification/notification.js




const Notification = ()=>{
    const { 0: news , 1: setNews  } = (0,external_react_.useState)('');
    (0,external_react_.useEffect)(()=>{
        axios/* default.get */.Z.get('/constants').then((res)=>{
            setNews(res.data.news);
        }).catch((err)=>{
            console.log(err);
        });
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (notification_module_default()).notification,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: news
        })
    }));
};
/* harmony default export */ const notification = (Notification);

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./store/AuthContext.js
var AuthContext = __webpack_require__(8833);
;// CONCATENATED MODULE: ./pages/_app.js








const MyApp = ({ Component , pageProps  })=>{
    const router = (0,router_.useRouter)();
    let showNewsletter = true;
    if ([
        '/signup',
        '/signin'
    ].includes(router.pathname)) {
        showNewsletter = false;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(AuthContext/* AuthContextProvider */.H, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "SaBloX"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: +true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
                autoClose: 2000
            }),
            showNewsletter ? /*#__PURE__*/ jsx_runtime_.jsx(notification, {
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);


const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: 'https://sablox-admin.herokuapp.com/api'
});
instance.interceptors.response.use((response)=>response
, (error)=>{
    if (error.response) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error.response.data.message);
    } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(error.message);
    }
    return error;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5515:
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [833], () => (__webpack_exec__(3906)));
module.exports = __webpack_exports__;

})();