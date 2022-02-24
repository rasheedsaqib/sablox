(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 3640:
/***/ ((module) => {

// Exports
module.exports = {
	"addComment": "addComment_addComment__TQ7K5",
	"post": "addComment_post__eOJ_k"
};


/***/ }),

/***/ 9534:
/***/ ((module) => {

// Exports
module.exports = {
	"comment": "comment_comment__JTZj2",
	"name": "comment_name__gzRm9",
	"text": "comment_text__kvuCh",
	"content": "comment_content__WE_9F",
	"reply": "comment_reply__hV_qI",
	"replies": "comment_replies__I5ypi"
};


/***/ }),

/***/ 5048:
/***/ ((module) => {

// Exports
module.exports = {
	"comments": "comments_comments__99Ajg",
	"hr": "comments_hr__jaryy"
};


/***/ }),

/***/ 7179:
/***/ ((module) => {

// Exports
module.exports = {
	"back": "post_back__mBJT6",
	"post": "post_post__2GeLM",
	"content": "post_content__uyU3J",
	"tag": "post_tag__7_HAj",
	"title": "post_title__KIYHI",
	"about": "post_about__NSjXo",
	"upper": "post_upper__M3Fr7",
	"text": "post_text__31eh5",
	"link": "post_link__DSzV9"
};


/***/ }),

/***/ 2548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addComment_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3640);
/* harmony import */ var _addComment_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_addComment_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4596);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8833);






const AddComment = (props)=>{
    const { token  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const onSubmit = (e)=>{
        e.preventDefault();
        if (e.target.elements.comment.value.length === 0) {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.warn('Please enter a comment.');
        } else {
            _util_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].post */ .Z.post('/comment', {
                postId: props.id,
                content: e.target.elements.comment.value
            }, {
                headers: {
                    Authorization: token
                }
            }).then((res)=>{
                if (res.status === 201) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Comment added successfully!');
                }
            });
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: (e)=>onSubmit(e)
        ,
        className: (_addComment_module_scss__WEBPACK_IMPORTED_MODULE_5___default().addComment),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                style: {
                    margin: '1rem 0'
                },
                children: "Leave a Comment"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                name: "comment",
                placeholder: "Add you comment"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_addComment_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),
                children: "Post"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddComment);


/***/ }),

/***/ 8758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ comments)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./Components/Post/Comments/comments.module.scss
var comments_module = __webpack_require__(5048);
var comments_module_default = /*#__PURE__*/__webpack_require__.n(comments_module);
// EXTERNAL MODULE: ./Components/Post/Comments/Comment/comment.module.scss
var comment_module = __webpack_require__(9534);
var comment_module_default = /*#__PURE__*/__webpack_require__.n(comment_module);
;// CONCATENATED MODULE: ./Components/Post/Comments/Comment/comment.js


const Comment = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (comment_module_default()).comment,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (comment_module_default()).name,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/admin.jpg",
                        alt: "Admin"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (comment_module_default()).text,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: props.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: new Date(props.date).toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (comment_module_default()).content,
                children: props.text
            })
        ]
    }));
};
/* harmony default export */ const Comment_comment = (Comment);

;// CONCATENATED MODULE: ./Components/Post/Comments/comments.js



const Comments = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (comments_module_default()).comments,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                style: {
                    margin: '1rem 0'
                },
                children: "Comments"
            }),
            props.comments.map((comment, index)=>{
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Comment_comment, {
                            text: comment.content,
                            name: comment.user.firstName + ' ' + comment.user.lastName,
                            date: comment.createdAt
                        }),
                        index !== props.comments.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: (comments_module_default()).hr
                        }) : null
                    ]
                }, comment._id));
            })
        ]
    }));
};
/* harmony default export */ const comments = (Comments);


/***/ }),

/***/ 7024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7179);
/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _UI_Sidebar_ad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5125);
/* harmony import */ var _UI_Sidebar_newsleteer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(469);
/* harmony import */ var _UI_Sidebar_socials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8054);
/* harmony import */ var _UI_Sidebar_topPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4724);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var _Comments_comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8758);
/* harmony import */ var _AddComment_addComment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2548);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8833);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_10__]);
react_markdown__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];












const Post = (props)=>{
    const { isAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_store_AuthContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
    const post1 = props.posts.find((post)=>'' + post._id === props.postId
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().back),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        }),
                        " Back to Blog "
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().post),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().content),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: post1.image,
                                alt: "Blog Post"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().tag),
                                children: post1.category
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
                                children: post1.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: post1.slug
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                children: post1.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().about),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().upper),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/admin.jpg",
                                                alt: "Admin"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().text),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "About the author"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        children: post1.owner
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: post1.about
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            }),
                            post1.comments.length !== 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Comments_comments__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        comments: post1.comments
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    })
                                ]
                            }),
                            isAuth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AddComment_addComment__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                id: post1._id
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        href: "/signin",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_11___default().link),
                                            children: "Sign in"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            display: 'inline'
                                        },
                                        children: " to post a comment."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginTop: '-1.2rem'
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Sidebar_ad__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Sidebar_newsleteer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Sidebar_socials__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                constants: props.constants
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Sidebar_ad__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Sidebar_topPosts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                posts: props.posts
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

});

/***/ }),

/***/ 1309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOC_withWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var _Components_Post_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7024);
/* harmony import */ var _util_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4596);
/* harmony import */ var _UI_Navbar_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7793);
/* harmony import */ var _UI_Newsletter_newsletter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(641);
/* harmony import */ var _UI_Footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(719);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Post_post__WEBPACK_IMPORTED_MODULE_3__]);
_Components_Post_post__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Post = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Navbar_navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Post_post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                posts: props.posts,
                postId: router.query.postId,
                constants: props.constants
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Newsletter_newsletter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                news: props.constants.news
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Footer_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            })
        ]
    }));
};
async function getStaticProps() {
    const posts = await _util_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get('/posts');
    const constants = await _util_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get('/constants');
    return {
        props: {
            posts: posts.data.map((post)=>{
                const date = new Date(post.createdAt);
                return {
                    ...post,
                    owner: post.owner.firstName + ' ' + post.owner.lastName,
                    category: post.category.name,
                    about: post.owner.about,
                    createdAt: date.toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                };
            }),
            constants: constants.data
        },
        revalidate: 10
    };
}
async function getStaticPaths() {
    const posts = await _util_axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get('/posts');
    const paths = posts.data.map((post)=>{
        return {
            params: {
                postId: '' + post._id
            }
        };
    });
    return {
        paths: paths,
        fallback: false
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_HOC_withWidth__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Post));

});

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ }),

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,833,409,966], () => (__webpack_exec__(1309)));
module.exports = __webpack_exports__;

})();