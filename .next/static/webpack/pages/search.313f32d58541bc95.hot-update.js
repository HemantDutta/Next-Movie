"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/GenreGrid.js":
/*!*********************************!*\
  !*** ./components/GenreGrid.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCard */ \"./components/MovieCard.js\");\n\n\nfunction GenreGrid(param) {\n    var genre = param.genre, data = param.data, search = param.search;\n    var _this = this;\n    //Static Data\n    var genreText = {\n        Action: \"For all your action needs!\",\n        Drama: \"Need more Drama in life?\",\n        Horror: \"Spooky Season is here!\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gg container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gg-container \".concat(genre),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"head\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"genre head-style sixty-four\",\n                                children: genre\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"tag text-style\",\n                                children: genreText[genre] || data.length + \" results found...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid\",\n                        children: data.filter(function(value) {\n                            return value.primaryImage != null;\n                        }).slice(0, 4).map(function(value, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                value: value\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                lineNumber: 24,\n                                columnNumber: 37\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = GenreGrid;\nvar _c;\n$RefreshReg$(_c, \"GenreGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbnJlR3JpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBb0M7QUFFckIsU0FBU0MsU0FBUyxDQUFDLEtBQXFCLEVBQUU7UUFBdEJDLEtBQUssR0FBTixLQUFxQixDQUFwQkEsS0FBSyxFQUFFQyxJQUFJLEdBQVosS0FBcUIsQ0FBYkEsSUFBSSxFQUFFQyxNQUFNLEdBQXBCLEtBQXFCLENBQVBBLE1BQU07O0lBRWxELGFBQWE7SUFDYixJQUFNQyxTQUFTLEdBQUc7UUFDZEMsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQ0MsS0FBSyxFQUFFLDBCQUEwQjtRQUNqQ0MsTUFBTSxFQUFFLHdCQUF3QjtLQUNuQztJQUVELHFCQUNJO2tCQUNJLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxjQUFjO3NCQUN6Qiw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFFLGVBQWMsQ0FBUSxPQUFOUixLQUFLLENBQUU7O2tDQUNuQyw4REFBQ08sS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzBDQUNqQiw4REFBQ0MsTUFBSTtnQ0FBQ0QsU0FBUyxFQUFDLDZCQUE2QjswQ0FBRVIsS0FBSzs7Ozs7b0NBQVE7MENBQzVELDhEQUFDUyxNQUFJO2dDQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOzBDQUFFTCxTQUFTLENBQUNILEtBQUssQ0FBQyxJQUFJQyxJQUFJLENBQUNTLE1BQU0sR0FBQyxtQkFBbUI7Ozs7O29DQUFROzs7Ozs7NEJBQzNGO2tDQUNOLDhEQUFDSCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsTUFBTTtrQ0FFYlAsSUFBSSxDQUFDVSxNQUFNLENBQUNDLFNBQUFBLEtBQUs7bUNBQUdBLEtBQUssQ0FBQ0MsWUFBWSxJQUFFLElBQUk7eUJBQUEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsU0FBQ0gsS0FBSyxFQUFFSSxLQUFLLEVBQUs7NEJBQzNFLHFCQUNJLDhEQUFDbEIsa0RBQVM7Z0NBQUNjLEtBQUssRUFBRUEsS0FBSzsrQkFBT0ksS0FBSzs7OztxQ0FBRyxDQUN6Qzt3QkFDTCxDQUFDLENBQUM7Ozs7OzRCQUVKOzs7Ozs7b0JBQ0o7Ozs7O2dCQUNKO3FCQUNQLENBQ047QUFDTCxDQUFDO0FBOUJ1QmpCLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW5yZUdyaWQuanM/NTNjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVDYXJkIGZyb20gXCIuL01vdmllQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VucmVHcmlkKHtnZW5yZSwgZGF0YSwgc2VhcmNofSkge1xyXG5cclxuICAgIC8vU3RhdGljIERhdGFcclxuICAgIGNvbnN0IGdlbnJlVGV4dCA9IHtcclxuICAgICAgICBBY3Rpb246IFwiRm9yIGFsbCB5b3VyIGFjdGlvbiBuZWVkcyFcIixcclxuICAgICAgICBEcmFtYTogXCJOZWVkIG1vcmUgRHJhbWEgaW4gbGlmZT9cIixcclxuICAgICAgICBIb3Jyb3I6IFwiU3Bvb2t5IFNlYXNvbiBpcyBoZXJlIVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZyBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ2ctY29udGFpbmVyICR7Z2VucmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdlbnJlIGhlYWQtc3R5bGUgc2l4dHktZm91clwiPntnZW5yZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZyB0ZXh0LXN0eWxlXCI+e2dlbnJlVGV4dFtnZW5yZV0gfHwgZGF0YS5sZW5ndGgrXCIgcmVzdWx0cyBmb3VuZC4uLlwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5maWx0ZXIodmFsdWU9PiB2YWx1ZS5wcmltYXJ5SW1hZ2UhPW51bGwpLnNsaWNlKDAsNCkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVDYXJkIHZhbHVlPXt2YWx1ZX0ga2V5PXtpbmRleH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJNb3ZpZUNhcmQiLCJHZW5yZUdyaWQiLCJnZW5yZSIsImRhdGEiLCJzZWFyY2giLCJnZW5yZVRleHQiLCJBY3Rpb24iLCJEcmFtYSIsIkhvcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJsZW5ndGgiLCJmaWx0ZXIiLCJ2YWx1ZSIsInByaW1hcnlJbWFnZSIsInNsaWNlIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GenreGrid.js\n"));

/***/ })

});