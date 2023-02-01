exports.id = 681;
exports.ids = [681];
exports.modules = {

/***/ 3681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalData": () => (/* binding */ GlobalData),
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Nav.jsx




function Nav() {
    const [time, setTime] = (0,external_react_.useState)(new Date());
    (0,external_react_.useEffect)(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return ()=>clearInterval(intervalId);
    }, []);
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const day = days[time.getUTCDay()];
    const date = time.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navbar bg-base-100 bg-[#11e29] sticky shadow-md top-0 z-50",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navbar-start",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " hidden md:block Laato font-semibold ",
                        children: `${day},${date}`
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar-center flex flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "lg:h-[40px] h-[30px]",
                                    src: "/logo.svg"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "ml-1 normal-case loho text-2xl",
                                        children: "The DU Express"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " md:hidden font-semibold ",
                            children: `${day},${date}`
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navbar-end"
                })
            ]
        })
    });
}
/* harmony default export */ const components_Nav = (Nav);

;// CONCATENATED MODULE: ./src/pages/_app.js




const GlobalData = /*#__PURE__*/ (0,external_react_.createContext)();
function App({ Component , pageProps  }) {
    const [FeaturedPost, setFeaturedPost] = (0,external_react_.useState)("");
    const [Article, setArticle] = (0,external_react_.useState)("");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GlobalData.Provider, {
            value: {
                FeaturedPost,
                setFeaturedPost,
                Article,
                setArticle
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;