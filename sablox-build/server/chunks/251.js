exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 7715:
/***/ ((module) => {

// Exports
module.exports = {
	"auth": "auth_auth__mK_LY",
	"form": "auth_form__xYb51",
	"title": "auth_title__H9_cg",
	"line": "auth_line__QDVZO",
	"row": "auth_row__9Uz5o",
	"input": "auth_input__kGg9m",
	"container": "auth_container__rOg_n",
	"checkmark": "auth_checkmark___w2cu",
	"image": "auth_image__a8t7n",
	"img": "auth_img__EAgAn"
};


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


/***/ })

};
;