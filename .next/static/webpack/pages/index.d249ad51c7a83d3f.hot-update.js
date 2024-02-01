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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_MovieBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MovieBanner */ \"./components/MovieBanner.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_GenreGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GenreGrid */ \"./components/GenreGrid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var banner = param.banner;\n    var _this = this;\n    _s();\n    //States\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), genreData = ref[0], setGenreData = ref[1];\n    //Fetch Genres\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        [\n            \"Drama\",\n            \"Action\",\n            \"Horror\"\n        ].map(function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function(value) {\n                var options, response, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            options = {\n                                method: \"GET\",\n                                url: \"https://moviesdatabase.p.rapidapi.com/titles/x/upcoming\",\n                                params: {\n                                    genre: value\n                                },\n                                headers: {\n                                    \"X-RapidAPI-Key\": \"86cef1b198mshf81c79b973c9488p1b2cc2jsn91f06dae0c9e\",\n                                    \"X-RapidAPI-Host\": \"moviesdatabase.p.rapidapi.com\"\n                                }\n                            };\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                3,\n                                ,\n                                4\n                            ]);\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].request(options)\n                            ];\n                        case 2:\n                            response = _state.sent();\n                            setGenreData(function(curr) {\n                                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(curr).concat([\n                                    {\n                                        genre: value,\n                                        data: response.data.results\n                                    }\n                                ]);\n                            });\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.error(error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function(value) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next Movie\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.png\",\n                        sizes: \"any\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MovieBanner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Featured\",\n                banner: banner\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            genreData.length > 0 && genreData.map(function(value, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GenreGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    genre: value.genre,\n                    data: value.data\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 25\n                }, _this);\n            }),\n            genreData.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7Z0JBQUNsQixNQUFNLEVBQUVBLE1BQU07Ozs7O29CQUFHO1lBRTNDQyxTQUFTLENBQUMwQixNQUFNLEdBQUcsQ0FBQyxJQUNwQjFCLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRXdCLEtBQUssRUFBSztnQkFDNUIscUJBQ0ksOERBQUNqQyw2REFBUztvQkFBYWdCLEtBQUssRUFBRVAsS0FBSyxDQUFDTyxLQUFLO29CQUFFSSxJQUFJLEVBQUVYLEtBQUssQ0FBQ1csSUFBSTttQkFBM0NhLEtBQUs7Ozs7eUJBQXlDLENBQ2pFO1lBRUwsQ0FBQyxDQUFDO1lBR0YzQixTQUFTLENBQUMwQixNQUFNLEtBQUssQ0FBQyxrQkFDdEI7MEJBQ0ksNEVBQUM3QiwwREFBTTs7Ozt3QkFBRTs2QkFDVjs7b0JBR1IsQ0FDTjtBQUNMLENBQUM7R0FsRXVCQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBNb3ZpZUJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb3ZpZUJhbm5lclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBHZW5yZUdyaWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VucmVHcmlkXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtiYW5uZXJ9KSB7XHJcblxyXG4gICAgLy9TdGF0ZXNcclxuICAgIGNvbnN0IFtnZW5yZURhdGEsIHNldEdlbnJlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy9GZXRjaCBHZW5yZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgWydEcmFtYScsICdBY3Rpb24nLCAnSG9ycm9yJ10ubWFwKGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vbW92aWVzZGF0YWJhc2UucC5yYXBpZGFwaS5jb20vdGl0bGVzL3gvdXBjb21pbmcnLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7Z2VucmU6IHZhbHVlfSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiAnODZjZWYxYjE5OG1zaGY4MWM3OWI5NzNjOTQ4OHAxYjJjYzJqc245MWYwNmRhZTBjOWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnbW92aWVzZGF0YWJhc2UucC5yYXBpZGFwaS5jb20nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgc2V0R2VucmVEYXRhKGN1cnI9PiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbnJlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YS5yZXN1bHRzLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5leHQgTW92aWU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJmYXZpY29uLnBuZ1wiIHNpemVzPVwiYW55XCIvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW4vPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2l4dHlmb3VyJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIi8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiBjcm9zc09yaWdpbi8+XHJcbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgICAgICA8TW92aWVCYW5uZXIgdGl0bGU9XCJGZWF0dXJlZFwiIGJhbm5lcj17YmFubmVyfS8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdlbnJlRGF0YS5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICBnZW5yZURhdGEubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2VucmVHcmlkIGtleT17aW5kZXh9IGdlbnJlPXt2YWx1ZS5nZW5yZX0gZGF0YT17dmFsdWUuZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdlbnJlRGF0YS5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuICAgIC8vRmV0Y2ggRmVhdHVyZWQgQmFubmVyIFN0YXJ0ICsrXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9tb3ZpZXNkYXRhYmFzZS5wLnJhcGlkYXBpLmNvbS90aXRsZXMveC91cGNvbWluZycsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiAnODZjZWYxYjE5OG1zaGY4MWM3OWI5NzNjOTQ4OHAxYjJjYzJqc245MWYwNmRhZTBjOWUnLFxyXG4gICAgICAgICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ21vdmllc2RhdGFiYXNlLnAucmFwaWRhcGkuY29tJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbGV0IGJhbm5lciA9IHt9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgICAgcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmV2ZXJ5KHggPT4ge1xyXG4gICAgICAgICAgICBpZiAoeC5wcmltYXJ5SW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGJhbm5lciA9IHg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICAgIC8vRmV0Y2ggRmVhdHVyZWQgQmFubmVyIEVuZCArK1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGJhbm5lcixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIk5hdmJhciIsIk1vdmllQmFubmVyIiwiYXhpb3MiLCJHZW5yZUdyaWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRlciIsIkhvbWUiLCJiYW5uZXIiLCJnZW5yZURhdGEiLCJzZXRHZW5yZURhdGEiLCJtYXAiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJyZXNwb25zZSIsImVycm9yIiwibWV0aG9kIiwidXJsIiwicGFyYW1zIiwiZ2VucmUiLCJoZWFkZXJzIiwicmVxdWVzdCIsImN1cnIiLCJkYXRhIiwicmVzdWx0cyIsImNvbnNvbGUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwic2l6ZXMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjcm9zc09yaWdpbiIsImxlbmd0aCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});