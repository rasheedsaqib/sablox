"use strict";
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 8833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "H": () => (/* binding */ AuthContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5515);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);



const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isAuth: false,
    user: null,
    signIn: ()=>{
    },
    signOut: ()=>{
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);
const AuthContextProvider = (props)=>{
    const { 0: isAuth , 1: setIsAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: token1 , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [cookie, setCookie, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)([
        'token'
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (cookie.isAuth && cookie.token && cookie.userData) {
            setIsAuth(cookie.isAuth === 'true');
            setToken(cookie.token);
            setUser(cookie.userData);
        }
    }, []);
    const signIn = (token, user)=>{
        setIsAuth(true);
        setToken(token);
        setUser(user);
        const stringUser = JSON.stringify(user);
        const expires = new Date();
        expires.setDate(expires.getDate() + 30);
        setCookie('isAuth', true, {
            path: '/',
            expires: expires
        });
        setCookie('token', token, {
            path: '/',
            expires: expires
        });
        setCookie('userData', user, {
            path: '/',
            expires: expires
        });
    };
    const signOut = ()=>{
        setIsAuth(false);
        setToken(null);
        setUser(null);
        removeCookie('isAuth');
        removeCookie('token');
        removeCookie('user');
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_cookie__WEBPACK_IMPORTED_MODULE_2__.CookiesProvider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
            value: {
                isAuth,
                token: token1,
                user: user1,
                signIn,
                signOut
            },
            children: props.children
        })
    }));
};


/***/ })

};
;