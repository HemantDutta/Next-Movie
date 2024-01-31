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

/***/ "./components/GenreGrid.js":
/*!*********************************!*\
  !*** ./components/GenreGrid.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction GenreGrid(param) {\n    var genre = param.genre, data = param.data;\n    var _this = this;\n    _s();\n    //States\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Action: \"For all your action needs!\",\n        Drama: \"Need more Drama in life?\",\n        Horror: \"Spooky Season is here!\"\n    }), genreText = ref[0], setGenreText = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"gg container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gg-container \".concat(genre),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"head\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"genre head-style sixty-four\",\n                                children: genre\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"tag text-style\",\n                                children: genreText[genre]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid\",\n                        children: data.filter(function(value) {\n                            return value.primaryImage != null;\n                        }).slice(0, 4).map(function(value, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"movie-item\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"poster\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: value.primaryImage.url,\n                                            alt: value.titleText.text\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 45\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 41\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"content\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"title big-text-style\",\n                                                children: value.titleText.text\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 45\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"tag\",\n                                                children: value.primaryImage.caption.plainText\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                                lineNumber: 30,\n                                                columnNumber: 45\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 41\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                                lineNumber: 24,\n                                columnNumber: 37\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\GenreGrid.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(GenreGrid, \"JYHxBT0CqwNFs1+dGxk52+hxPwI=\");\n_c = GenreGrid;\nvar _c;\n$RefreshReg$(_c, \"GenreGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbnJlR3JpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUErQjtBQUVoQixTQUFTQyxTQUFTLENBQUMsS0FBYSxFQUFFO1FBQWRDLEtBQUssR0FBTixLQUFhLENBQVpBLEtBQUssRUFBRUMsSUFBSSxHQUFaLEtBQWEsQ0FBTEEsSUFBSTs7O0lBRTFDLFFBQVE7SUFDUixJQUFrQ0gsR0FJaEMsR0FKZ0NBLCtDQUFRLENBQUM7UUFDdkNJLE1BQU0sRUFBRSw0QkFBNEI7UUFDcENDLEtBQUssRUFBRSwwQkFBMEI7UUFDakNDLE1BQU0sRUFBRSx3QkFBd0I7S0FDbkMsQ0FBQyxFQUpLQyxTQUFTLEdBQWtCUCxHQUloQyxHQUpjLEVBQUVRLFlBQVksR0FBSVIsR0FJaEMsR0FKNEI7SUFNOUIscUJBQ0k7a0JBQ0ksNEVBQUNTLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGNBQWM7c0JBQ3pCLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUUsZUFBYyxDQUFRLE9BQU5SLEtBQUssQ0FBRTs7a0NBQ25DLDhEQUFDTyxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsTUFBTTs7MENBQ2pCLDhEQUFDQyxNQUFJO2dDQUFDRCxTQUFTLEVBQUMsNkJBQTZCOzBDQUFFUixLQUFLOzs7OztvQ0FBUTswQ0FDNUQsOERBQUNTLE1BQUk7Z0NBQUNELFNBQVMsRUFBQyxnQkFBZ0I7MENBQUVILFNBQVMsQ0FBQ0wsS0FBSyxDQUFDOzs7OztvQ0FBUTs7Ozs7OzRCQUN4RDtrQ0FDTiw4REFBQ08sS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07a0NBRWJQLElBQUksQ0FBQ1MsTUFBTSxDQUFDQyxTQUFBQSxLQUFLO21DQUFHQSxLQUFLLENBQUNDLFlBQVksSUFBRSxJQUFJO3lCQUFBLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNILEtBQUssRUFBRUksS0FBSyxFQUFLOzRCQUMzRSxxQkFDSSw4REFBQ1IsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFlBQVk7O2tEQUN2Qiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLFFBQVE7a0RBQ25CLDRFQUFDUSxLQUFHOzRDQUFDQyxHQUFHLEVBQUVOLEtBQUssQ0FBQ0MsWUFBWSxDQUFDTSxHQUFHOzRDQUFFQyxHQUFHLEVBQUVSLEtBQUssQ0FBQ1MsU0FBUyxDQUFDQyxJQUFJOzs7OztpREFBRzs7Ozs7NkNBQzVEO2tEQUNOLDhEQUFDZCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsU0FBUzs7MERBQ3BCLDhEQUFDQyxNQUFJO2dEQUFDRCxTQUFTLEVBQUMsc0JBQXNCOzBEQUFFRyxLQUFLLENBQUNTLFNBQVMsQ0FBQ0MsSUFBSTs7Ozs7cURBQVE7MERBQ3BFLDhEQUFDWixNQUFJO2dEQUFDRCxTQUFTLEVBQUMsS0FBSzswREFBRUcsS0FBSyxDQUFDQyxZQUFZLENBQUNVLE9BQU8sQ0FBQ0MsU0FBUzs7Ozs7cURBQVE7Ozs7Ozs2Q0FDakU7OytCQVB1QlIsS0FBSzs7OztxQ0FRaEMsQ0FDVDt3QkFDTCxDQUFDLENBQUM7Ozs7OzRCQUVKOzs7Ozs7b0JBQ0o7Ozs7O2dCQUNKO3FCQUNQLENBQ047QUFDTCxDQUFDO0dBdEN1QmhCLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dlbnJlR3JpZC5qcz81M2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VucmVHcmlkKHtnZW5yZSwgZGF0YX0pIHtcclxuXHJcbiAgICAvL1N0YXRlc1xyXG4gICAgY29uc3QgW2dlbnJlVGV4dCwgc2V0R2VucmVUZXh0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBBY3Rpb246IFwiRm9yIGFsbCB5b3VyIGFjdGlvbiBuZWVkcyFcIixcclxuICAgICAgICBEcmFtYTogXCJOZWVkIG1vcmUgRHJhbWEgaW4gbGlmZT9cIixcclxuICAgICAgICBIb3Jyb3I6IFwiU3Bvb2t5IFNlYXNvbiBpcyBoZXJlIVwiXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2cgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdnLWNvbnRhaW5lciAke2dlbnJlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnZW5yZSBoZWFkLXN0eWxlIHNpeHR5LWZvdXJcIj57Z2VucmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWcgdGV4dC1zdHlsZVwiPntnZW5yZVRleHRbZ2VucmVdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5maWx0ZXIodmFsdWU9PiB2YWx1ZS5wcmltYXJ5SW1hZ2UhPW51bGwpLnNsaWNlKDAsNCkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLnByaW1hcnlJbWFnZS51cmx9IGFsdD17dmFsdWUudGl0bGVUZXh0LnRleHR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUgYmlnLXRleHQtc3R5bGVcIj57dmFsdWUudGl0bGVUZXh0LnRleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiPnt2YWx1ZS5wcmltYXJ5SW1hZ2UuY2FwdGlvbi5wbGFpblRleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdlbnJlR3JpZCIsImdlbnJlIiwiZGF0YSIsIkFjdGlvbiIsIkRyYW1hIiwiSG9ycm9yIiwiZ2VucmVUZXh0Iiwic2V0R2VucmVUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImZpbHRlciIsInZhbHVlIiwicHJpbWFyeUltYWdlIiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImltZyIsInNyYyIsInVybCIsImFsdCIsInRpdGxlVGV4dCIsInRleHQiLCJjYXB0aW9uIiwicGxhaW5UZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GenreGrid.js\n"));

/***/ })

});