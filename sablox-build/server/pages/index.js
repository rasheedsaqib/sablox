(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2316:
/***/ ((module) => {

// Exports
module.exports = {
	"post": "post_post__xQkDU",
	"image": "post_image__QfS4X",
	"tag": "post_tag__idkYa",
	"owner": "post_owner__yoScy"
};


/***/ }),

/***/ 5915:
/***/ ((module) => {

// Exports
module.exports = {
	"blogs": "blogs_blogs__wIx3F",
	"allBlogs": "blogs_allBlogs__B5v_2"
};


/***/ }),

/***/ 3088:
/***/ ((module) => {

// Exports
module.exports = {
	"categories": "categories_categories__9jID3",
	"active": "categories_active__tq95C"
};


/***/ }),

/***/ 6962:
/***/ ((module) => {

// Exports
module.exports = {
	"selectedBlog": "selectedBlog_selectedBlog__SQiCu",
	"upperTitle": "selectedBlog_upperTitle__wL4xg",
	"upperLine": "selectedBlog_upperLine__2yyly",
	"blog": "selectedBlog_blog__sldFY",
	"image": "selectedBlog_image__2qQUO",
	"text": "selectedBlog_text__tW5FK",
	"tag": "selectedBlog_tag__VrmzD",
	"title": "selectedBlog_title__pidW_",
	"description": "selectedBlog_description__NK_D_",
	"owner": "selectedBlog_owner__O5t0l"
};


/***/ }),

/***/ 9056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./HOC/withWidth.js
var withWidth = __webpack_require__(5725);
// EXTERNAL MODULE: ./Components/Index/SelectedBlog/selectedBlog.module.scss
var selectedBlog_module = __webpack_require__(6962);
var selectedBlog_module_default = /*#__PURE__*/__webpack_require__.n(selectedBlog_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/Index/SelectedBlog/selectedBlog.js



const SelectedBlog = (props)=>{
    const post = props.posts.sort((a, b)=>a.views < b.views ? -1 : 1
    ).at(-1);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (selectedBlog_module_default()).selectedBlog,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (selectedBlog_module_default()).upperTitle,
                children: "OUR BLOG"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: (selectedBlog_module_default()).upperLine,
                children: [
                    "Insight and advice ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {
                    }),
                    "from our expert team."
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/posts/${post._id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (selectedBlog_module_default()).blog,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (selectedBlog_module_default()).image,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (selectedBlog_module_default()).layer
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: post.image,
                                        alt: "Blog Image"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (selectedBlog_module_default()).text,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (selectedBlog_module_default()).tag,
                                        children: post.category.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (selectedBlog_module_default()).title,
                                        children: post.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (selectedBlog_module_default()).description,
                                        children: post.slug.substr(0, 180)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (selectedBlog_module_default()).owner,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: post.owner
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: post.date
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const selectedBlog = (SelectedBlog);

// EXTERNAL MODULE: ./Components/Index/Categories/categories.module.scss
var categories_module = __webpack_require__(3088);
var categories_module_default = /*#__PURE__*/__webpack_require__.n(categories_module);
;// CONCATENATED MODULE: ./Components/Index/Categories/categories.js


const Categories = (props)=>{
    const categories = [
        {
            _id: '001',
            name: 'All Categories'
        },
        ...props.categories
    ];
    const { selected , setSelected  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (categories_module_default()).categories,
        children: categories.map((category)=>{
            return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: category._id === selected ? (categories_module_default()).active : null,
                onClick: ()=>setSelected(category._id)
                ,
                children: category.name
            }, category._id));
        })
    }));
};
/* harmony default export */ const categories = (Categories);

// EXTERNAL MODULE: ./Components/Index/Blogs/blogs.module.scss
var blogs_module = __webpack_require__(5915);
var blogs_module_default = /*#__PURE__*/__webpack_require__.n(blogs_module);
// EXTERNAL MODULE: ./Components/Index/Blogs/Post/post.module.scss
var post_module = __webpack_require__(2316);
var post_module_default = /*#__PURE__*/__webpack_require__.n(post_module);
;// CONCATENATED MODULE: ./Components/Index/Blogs/Post/post.js



const Post = (props)=>{
    const post = props.post;
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: `/posts/${post._id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (post_module_default()).post,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (post_module_default()).image,
                    style: {
                        backgroundImage: "url('" + post.image + "')"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (post_module_default()).tag,
                    children: post.category.name
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                    children: [
                        post.title.substr(0, 50),
                        ".."
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (post_module_default()).owner,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: post.owner
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: post.date
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Post_post = (Post);

// EXTERNAL MODULE: ./UI/Sidebar/ad.js
var ad = __webpack_require__(5125);
// EXTERNAL MODULE: ./UI/Sidebar/newsleteer.js
var newsleteer = __webpack_require__(469);
// EXTERNAL MODULE: ./UI/Sidebar/socials.js
var socials = __webpack_require__(8054);
// EXTERNAL MODULE: ./UI/Sidebar/topPosts.js
var topPosts = __webpack_require__(4724);
;// CONCATENATED MODULE: ./Components/Index/Blogs/blogs.js







const Blogs = (props)=>{
    const sortedPost = props.posts.sort((post1, post2)=>{
        if (new Date(post1.createdAt) > new Date(post2.createdAt)) {
            return -1;
        } else if (new Date(post1.createdAt) < new Date(post2.createdAt)) {
            return 1;
        }
        return 0;
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (blogs_module_default()).blogs,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: sortedPost.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        textAlign: 'center',
                        margin: '2rem 0'
                    },
                    children: "No posts found."
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (blogs_module_default()).allBlogs,
                    children: sortedPost.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(Post_post, {
                            post: post
                        }, post._id)
                    )
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    marginTop: '-1.2rem'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ad/* default */.Z, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(newsleteer/* default */.Z, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(socials/* default */.Z, {
                        constants: props.constants
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ad/* default */.Z, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(topPosts/* default */.Z, {
                        posts: props.posts
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const blogs = (Blogs);

// EXTERNAL MODULE: ./util/axios.js
var axios = __webpack_require__(4596);
// EXTERNAL MODULE: ./UI/Newsletter/newsletter.js
var newsletter = __webpack_require__(641);
// EXTERNAL MODULE: ./UI/Footer/footer.js
var footer = __webpack_require__(719);
// EXTERNAL MODULE: ./UI/Navbar/navbar.js
var navbar = __webpack_require__(7793);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/index.js










const Home = (props)=>{
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)('001');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(selectedBlog, {
                posts: props.posts
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(categories, {
                categories: props.categories,
                selected: selected,
                setSelected: setSelected
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(blogs, {
                posts: selected === '001' ? props.posts : props.posts.filter((post)=>post.category._id === selected
                ),
                constants: props.constants
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(newsletter/* default */.Z, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {
            })
        ]
    }));
};
async function getStaticProps() {
    const posts = await axios/* default.get */.Z.get('/posts');
    const categories = await axios/* default.get */.Z.get('/categories');
    const constants = await axios/* default.get */.Z.get('/constants');
    return {
        props: {
            posts: posts.data ? posts.data.map((post)=>{
                const date = new Date(post.createdAt);
                return {
                    ...post,
                    owner: post.owner.firstName + ' ' + post.owner.lastName,
                    about: post.owner.about,
                    date: date.toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                };
            }) : [],
            categories: categories.data,
            constants: constants.data
        },
        revalidate: 10
    };
}
/* harmony default export */ const pages = ((0,withWidth/* default */.Z)(Home));


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,833,409,966], () => (__webpack_exec__(9056)));
module.exports = __webpack_exports__;

})();