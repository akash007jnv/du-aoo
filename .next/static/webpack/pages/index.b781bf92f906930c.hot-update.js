"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Coura.jsx":
/*!**********************************!*\
  !*** ./src/components/Coura.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Sanity_sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sanity/sanity */ \"./src/Sanity/sanity.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/_app */ \"./src/pages/_app.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Coura() {\n    _s();\n    const [News, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { FeaturedPost , setFeaturedPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_8__.GlobalData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _Sanity_sanity__WEBPACK_IMPORTED_MODULE_5__[\"default\"].fetch(\"\\n        *[_type == 'featuredNews'] | order(publishedAt desc) {\\n          _id,\\n          body,\\n          categories,\\n          \\\"imageUrl\\\": image.asset->url,\\n          importantLinks,\\n          publishedAt,\\n          source,\\n          title\\n        }\\n      \").then((data)=>{\n            console.log(data);\n            setNews(data);\n        });\n    }, []);\n    const settings = {\n        infinite: true,\n        speed: 600,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        autoplay: true\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-full bg-gradient-to-t from-black to-transparent bg-gradient\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    ...settings,\n                    children: News.map((g)=>{\n                        const { imageUrl , title , publishedAt , Slug  } = g;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            href: \"\".concat(Slug),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-[500px] bg-cover relative z-40\",\n                                    style: {\n                                        backgroundImage: \"url(\".concat(imageUrl, \")\")\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"absolute z-20 inset-0 bg-gradient-to-t from-black to-transparent\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"absolute bottom-10 left-0 ml-3 Laato z-50 text-white text-xl \",\n                                            children: title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"absolute bottom-6 left-0 ml-3 z-50 text-white text-[12px] \",\n                                            children: [\n                                                \"Updated on \",\n                                                moment__WEBPACK_IMPORTED_MODULE_6___default()(publishedAt).format(\"dddd, MMMM Do YYYY\")\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, this)\n                            }, g._id, false, {\n                                fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mkuma\\\\Desktop\\\\News Du Web\\\\lasty\\\\src\\\\components\\\\Coura.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Coura, \"qjApfel0P8YrIBi/dyS55Obyjzk=\");\n_c = Coura;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coura);\nvar _c;\n$RefreshReg$(_c, \"Coura\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db3VyYS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQzlCO0FBRU87QUFDTTtBQUNSO0FBQ1Y7QUFDQztBQUNjO0FBRTNDLFNBQVNTLFFBQVE7O0lBQ2YsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxFQUFFUyxhQUFZLEVBQUVDLGdCQUFlLEVBQUUsR0FBR1osaURBQVVBLENBQUNPLGtEQUFVQTtJQUUvRE4sZ0RBQVNBLENBQUMsSUFBTTtRQUNkRyw0REFDUSxDQUFFLGlSQVlQVSxJQUFJLENBQUMsQ0FBQ0MsT0FBUztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pMLFFBQVFLO1FBQ1Y7SUFDSixHQUFHLEVBQUU7SUFHTCxNQUFNRyxXQUFXO1FBQ2ZDLFVBQVUsSUFBSTtRQUNkQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxVQUFVLElBQUk7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUN0QixtREFBTUE7b0JBQUUsR0FBR2UsUUFBUTs4QkFDakJULEtBQUtpQixHQUFHLENBQUMsQ0FBQ0MsSUFBTTt3QkFDZixNQUFNLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFDQyxZQUFXLEVBQUNDLEtBQUksRUFBRSxHQUFHSjt3QkFDN0MscUJBQ0UsOERBQUNyQixrREFBSUE7NEJBQ04wQixNQUFNLEdBQVEsT0FBTEQ7c0NBR1IsNEVBQUNQOzBDQUNDLDRFQUFDQTtvQ0FDQ0MsV0FBVTtvQ0FDVlEsT0FBTzt3Q0FBRUMsaUJBQWlCLE9BQWdCLE9BQVROLFVBQVM7b0NBQUc7O3NEQUU3Qyw4REFBQ0o7NENBQUlDLFdBQVU7Ozs7OztzREFDZiw4REFBQ1U7NENBQUdWLFdBQVU7c0RBQ1hJOzs7Ozs7c0RBRUgsOERBQUNPOzRDQUFFWCxXQUFVOztnREFBOEQ7Z0RBQzdEcEIsNkNBQU1BLENBQUN5QixhQUFhTyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7K0JBVm5DVixFQUFFVyxHQUFHOzs7Ozs7Ozs7O29CQWdCbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0FsRVM5QjtLQUFBQTtBQW9FVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db3VyYS5qc3g/YzE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9TYW5pdHkvc2FuaXR5XCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEdsb2JhbERhdGEgfSBmcm9tIFwiLi4vcGFnZXMvX2FwcFwiO1xyXG5cclxuZnVuY3Rpb24gQ291cmEoKSB7XHJcbiAgY29uc3QgW05ld3MsIHNldE5ld3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgRmVhdHVyZWRQb3N0LCBzZXRGZWF0dXJlZFBvc3QgfSA9IHVzZUNvbnRleHQoR2xvYmFsRGF0YSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjbGllbnRcclxuICAgICAgLmZldGNoKGBcclxuICAgICAgICAqW190eXBlID09ICdmZWF0dXJlZE5ld3MnXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpIHtcclxuICAgICAgICAgIF9pZCxcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICAgICAgXCJpbWFnZVVybFwiOiBpbWFnZS5hc3NldC0+dXJsLFxyXG4gICAgICAgICAgaW1wb3J0YW50TGlua3MsXHJcbiAgICAgICAgICBwdWJsaXNoZWRBdCxcclxuICAgICAgICAgIHNvdXJjZSxcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgfVxyXG4gICAgICBgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldE5ld3MoZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA2MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB0by10cmFuc3BhcmVudCBiZy1ncmFkaWVudFwiPjwvZGl2PlxyXG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgIHtOZXdzLm1hcCgoZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGltYWdlVXJsLCB0aXRsZSxwdWJsaXNoZWRBdCxTbHVnIH0gPSBnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICBocmVmPXtgJHtTbHVnfWB9IFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtnLl9pZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVs1MDBweF0gYmctY292ZXIgcmVsYXRpdmUgei00MFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0yMCBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB0by10cmFuc3BhcmVudFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMCBtbC0zIExhYXRvIHotNTAgdGV4dC13aGl0ZSB0ZXh0LXhsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTYgbGVmdC0wIG1sLTMgIHotNTAgdGV4dC13aGl0ZSB0ZXh0LVsxMnB4XSBcIj5cclxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVkIG9uIHttb21lbnQocHVibGlzaGVkQXQpLmZvcm1hdCgnZGRkZCwgTU1NTSBEbyBZWVlZJyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJhO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJjbGllbnQiLCJtb21lbnQiLCJMaW5rIiwiR2xvYmFsRGF0YSIsIkNvdXJhIiwiTmV3cyIsInNldE5ld3MiLCJGZWF0dXJlZFBvc3QiLCJzZXRGZWF0dXJlZFBvc3QiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldHRpbmdzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJnIiwiaW1hZ2VVcmwiLCJ0aXRsZSIsInB1Ymxpc2hlZEF0IiwiU2x1ZyIsImhyZWYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgxIiwicCIsImZvcm1hdCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Coura.jsx\n"));

/***/ })

});