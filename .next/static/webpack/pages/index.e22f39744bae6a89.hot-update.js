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

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Navbar() {\n    var toggleSidebar = //Sidebar Toggle\n    function toggleSidebar() {\n        if (ham.current.classList.contains(\"active\")) {\n            ham.current.classList.remove(\"active\");\n        } else {\n            ham.current.classList.add(\"active\");\n        }\n    };\n    _s();\n    //Refs\n    var ham = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //Hide Nav\n    var scrollY = window.scrollY;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var hideNav = function() {};\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-container container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"brand sixty-four big-text-style\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"brand sixty-four big-text-style\",\n                                children: \"Movie\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"text-style\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ham\",\n                        ref: ham,\n                        onClick: toggleSidebar,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 42,\n                                columnNumber: 38\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 42,\n                                columnNumber: 51\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"QzS6u0LepHvHAoP9YmxJUIEQl5I=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQUV6QixTQUFTRSxNQUFNLEdBQUc7UUFNcEJDLGFBQWEsR0FEdEIsZ0JBQWdCO0lBQ2hCLFNBQVNBLGFBQWEsR0FBRztRQUNyQixJQUFHQyxHQUFHLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekNILEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxPQUNLO1lBQ0RKLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQztJQUNMLENBQUM7O0lBWEQsTUFBTTtJQUNOLElBQU1MLEdBQUcsR0FBR0gsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFZeEIsVUFBVTtJQUNWLElBQUlTLE9BQU8sR0FBR0MsTUFBTSxDQUFDRCxPQUFPO0lBQzVCVixnREFBUyxDQUFDLFdBQUk7UUFDVixJQUFNWSxPQUFPLEdBQUcsV0FBTSxDQUV0QixDQUFDO0lBQ0wsQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUVMLHFCQUNJO2tCQUNJLDRFQUFDQyxLQUFHO3NCQUNBLDRFQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNEJBQTRCOztrQ0FDdkMsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxNQUFNOzswQ0FDakIsOERBQUNDLE1BQUk7Z0NBQUNELFNBQVMsRUFBQyxpQ0FBaUM7MENBQUMsTUFBSTs7Ozs7b0NBQU87MENBQzdELDhEQUFDQyxNQUFJO2dDQUFDRCxTQUFTLEVBQUMsaUNBQWlDOzBDQUFDLE9BQUs7Ozs7O29DQUFPOzs7Ozs7NEJBQzVEO2tDQUNOLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsT0FBTztrQ0FDbEIsNEVBQUNFLElBQUU7NEJBQUNGLFNBQVMsRUFBQyxZQUFZOzs4Q0FDdEIsOERBQUNHLElBQUU7OENBQUMsUUFBTTs7Ozs7d0NBQUs7OENBQ2YsOERBQUNBLElBQUU7OENBQUMsU0FBTzs7Ozs7d0NBQUs7OENBQ2hCLDhEQUFDQSxJQUFFOzhDQUFDLE9BQUs7Ozs7O3dDQUFLOzs7Ozs7Z0NBQ2I7Ozs7OzRCQUNIO2tDQUNOLDhEQUFDSixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsS0FBSzt3QkFBQ0ksR0FBRyxFQUFFZixHQUFHO3dCQUFFZ0IsT0FBTyxFQUFFakIsYUFBYTs7MENBQ2pELDhEQUFDYSxNQUFJOzs7O29DQUFROzBDQUFBLDhEQUFDQSxNQUFJOzs7O29DQUFROzBDQUFBLDhEQUFDQSxNQUFJOzs7O29DQUFROzs7Ozs7NEJBQ3JDOzs7Ozs7b0JBQ0o7Ozs7O2dCQUNKO3FCQUNQLENBQ047QUFDTCxDQUFDO0dBN0N1QmQsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcblxyXG4gICAgLy9SZWZzXHJcbiAgICBjb25zdCBoYW0gPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgLy9TaWRlYmFyIFRvZ2dsZVxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgICAgICBpZihoYW0uY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgaGFtLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9IaWRlIE5hdlxyXG4gICAgbGV0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IGhpZGVOYXYgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmFuZCBzaXh0eS1mb3VyIGJpZy10ZXh0LXN0eWxlXCI+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJhbmQgc2l4dHktZm91ciBiaWctdGV4dC1zdHlsZVwiPk1vdmllPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TZWFyY2g8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFib3V0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbVwiIHJlZj17aGFtfSBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiTmF2YmFyIiwidG9nZ2xlU2lkZWJhciIsImhhbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInNjcm9sbFkiLCJ3aW5kb3ciLCJoaWRlTmF2IiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInVsIiwibGkiLCJyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});