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

/***/ "./components/MovieBanner.js":
/*!***********************************!*\
  !*** ./components/MovieBanner.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieBanner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MovieBanner(param) {\n    var banner = param.banner;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: banner.primaryImage.url,\n                        alt: banner.titleText.text,\n                        className: \"abs-bg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\next-movie\\\\components\\\\MovieBanner.js\",\n                        lineNumber: 6,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overlay\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\next-movie\\\\components\\\\MovieBanner.js\",\n                        lineNumber: 7,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"head-style head sixty-four\",\n                                children: banner.titleText.text\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\next-movie\\\\components\\\\MovieBanner.js\",\n                                lineNumber: 9,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"big-text-style tag\",\n                                children: banner.primaryImage.caption.plainText\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\next-movie\\\\components\\\\MovieBanner.js\",\n                                lineNumber: 10,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\next-movie\\\\components\\\\MovieBanner.js\",\n                        lineNumber: 8,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91987\\\\next-movie\\\\components\\\\MovieBanner.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91987\\\\next-movie\\\\components\\\\MovieBanner.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = MovieBanner;\nvar _c;\n$RefreshReg$(_c, \"MovieBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vdmllQmFubmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWUsU0FBU0EsV0FBVyxDQUFDLEtBQVEsRUFBRTtRQUFWLE1BQU8sR0FBUCxLQUFRLENBQVBDLE1BQU07SUFDdkMscUJBQ0k7a0JBQ0ksNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGNBQWM7c0JBQ3pCLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsY0FBYzs7a0NBQ3pCLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVKLE1BQU0sQ0FBQ0ssWUFBWSxDQUFDQyxHQUFHO3dCQUFFQyxHQUFHLEVBQUVQLE1BQU0sQ0FBQ1EsU0FBUyxDQUFDQyxJQUFJO3dCQUFFUCxTQUFTLEVBQUMsUUFBUTs7Ozs7NEJBQUU7a0NBQ25GLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsU0FBUzs7Ozs7NEJBQUU7a0NBQzFCLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsU0FBUzs7MENBQ3BCLDhEQUFDUSxNQUFJO2dDQUFDUixTQUFTLEVBQUMsNEJBQTRCOzBDQUFFRixNQUFNLENBQUNRLFNBQVMsQ0FBQ0MsSUFBSTs7Ozs7b0NBQVE7MENBQzNFLDhEQUFDQyxNQUFJO2dDQUFDUixTQUFTLEVBQUMsb0JBQW9COzBDQUFFRixNQUFNLENBQUNLLFlBQVksQ0FBQ00sT0FBTyxDQUFDQyxTQUFTOzs7OztvQ0FBUTs7Ozs7OzRCQUNqRjs7Ozs7O29CQUNKOzs7OztnQkFDSjtxQkFDUCxDQUNOO0FBQ0wsQ0FBQztBQWZ1QmIsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vdmllQmFubmVyLmpzPzFhMmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVCYW5uZXIoe2Jhbm5lcn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYiBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jhbm5lci5wcmltYXJ5SW1hZ2UudXJsfSBhbHQ9e2Jhbm5lci50aXRsZVRleHQudGV4dH0gY2xhc3NOYW1lPVwiYWJzLWJnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZC1zdHlsZSBoZWFkIHNpeHR5LWZvdXJcIj57YmFubmVyLnRpdGxlVGV4dC50ZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlnLXRleHQtc3R5bGUgdGFnXCI+e2Jhbm5lci5wcmltYXJ5SW1hZ2UuY2FwdGlvbi5wbGFpblRleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIk1vdmllQmFubmVyIiwiYmFubmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicHJpbWFyeUltYWdlIiwidXJsIiwiYWx0IiwidGl0bGVUZXh0IiwidGV4dCIsInNwYW4iLCJjYXB0aW9uIiwicGxhaW5UZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MovieBanner.js\n"));

/***/ })

});