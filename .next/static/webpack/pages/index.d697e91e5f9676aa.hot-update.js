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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    var toggleSidebar = //Sidebar Toggle\n    function toggleSidebar() {\n        if (ham.current.classList.contains(\"active\")) {\n            ham.current.classList.remove(\"active\");\n        } else {\n            ham.current.classList.add(\"active\");\n        }\n    };\n    _s();\n    //Refs\n    var ham = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var nav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //Hide Nav\n    if (true) {\n        var scrollY = window.scrollY;\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            var hideNav = function() {\n                if (nav.current !== null) {\n                    if (window.scrollY > scrollY) {\n                        nav.current.classList.add(\"hide\");\n                    } else {\n                        nav.current.classList.remove(\"hide\");\n                    }\n                    scrollY = window.scrollY;\n                }\n            };\n            window.addEventListener(\"scroll\", hideNav);\n            return function() {\n                return window.removeEventListener(\"scroll\", hideNav);\n            };\n        }, []);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                ref: nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-container container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"brand sixty-four big-text-style\",\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"brand sixty-four big-text-style\",\n                                    children: \"Movie\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"right\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"text-style\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/search\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"#\",\n                                                className: \"text-style\",\n                                                children: \"Search\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-style\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-style\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ham\",\n                            ref: ham,\n                            onClick: toggleSidebar,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 38\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 51\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"bnoeaA0YHVyKn4C/2mdkcXr2R9A=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1g7QUFFZCxTQUFTRyxNQUFNLEdBQUc7UUFPcEJDLGFBQWEsR0FEdEIsZ0JBQWdCO0lBQ2hCLFNBQVNBLGFBQWEsR0FBRztRQUNyQixJQUFJQyxHQUFHLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUNILEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxPQUFPO1lBQ0hKLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQztJQUNMLENBQUM7O0lBWEQsTUFBTTtJQUNOLElBQU1MLEdBQUcsR0FBR0osNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEIsSUFBTVUsR0FBRyxHQUFHViw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQVd4QixVQUFVO0lBQ1YsSUFBSSxJQUE2QixFQUFFO1FBQy9CLElBQUlXLE9BQU8sR0FBR0MsTUFBTSxDQUFDRCxPQUFPO1FBQzVCWixnREFBUyxDQUFDLFdBQU07WUFDWixJQUFNYyxPQUFPLEdBQUcsV0FBTTtnQkFDbEIsSUFBSUgsR0FBRyxDQUFDTCxPQUFPLEtBQUssSUFBSSxFQUN4QjtvQkFDSSxJQUFJTyxNQUFNLENBQUNELE9BQU8sR0FBR0EsT0FBTyxFQUFFO3dCQUMxQkQsR0FBRyxDQUFDTCxPQUFPLENBQUNDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QyxPQUFPO3dCQUNIQyxHQUFHLENBQUNMLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pDLENBQUM7b0JBQ0RHLE9BQU8sR0FBR0MsTUFBTSxDQUFDRCxPQUFPLENBQUM7Z0JBQzdCLENBQUM7WUFFTCxDQUFDO1lBRURDLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFRCxPQUFPLENBQUMsQ0FBQztZQUUzQyxPQUFPO3VCQUFNRCxNQUFNLENBQUNHLG1CQUFtQixDQUFDLFFBQVEsRUFBRUYsT0FBTyxDQUFDO2FBQUEsQ0FBQztRQUMvRCxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELHFCQUNJOzswQkFDSSw4REFBQ0gsS0FBRztnQkFBQ00sR0FBRyxFQUFFTixHQUFHOzBCQUNULDRFQUFDTyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsNEJBQTRCOztzQ0FDdkMsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxNQUFNOzs4Q0FDakIsOERBQUNDLE1BQUk7b0NBQUNELFNBQVMsRUFBQyxpQ0FBaUM7OENBQUMsTUFBSTs7Ozs7d0NBQU87OENBQzdELDhEQUFDQyxNQUFJO29DQUFDRCxTQUFTLEVBQUMsaUNBQWlDOzhDQUFDLE9BQUs7Ozs7O3dDQUFPOzs7Ozs7Z0NBQzVEO3NDQUNOLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsT0FBTztzQ0FDbEIsNEVBQUNFLElBQUU7Z0NBQUNGLFNBQVMsRUFBQyxZQUFZOztrREFDdEIsOERBQUNHLElBQUU7a0RBQ0MsNEVBQUNwQixrREFBSTs0Q0FBQ3FCLElBQUksRUFBRSxTQUFTO3NEQUNqQiw0RUFBQ0MsR0FBQztnREFBQ0QsSUFBSSxFQUFDLEdBQUc7Z0RBQUNKLFNBQVMsRUFBQyxZQUFZOzBEQUFDLFFBQU07Ozs7O29EQUFJOzs7OztnREFDMUM7Ozs7OzRDQUNOO2tEQUNMLDhEQUFDRyxJQUFFO2tEQUFDLDRFQUFDRSxHQUFDOzRDQUFDRCxJQUFJLEVBQUMsR0FBRzs0Q0FBQ0osU0FBUyxFQUFDLFlBQVk7c0RBQUMsU0FBTzs7Ozs7Z0RBQUk7Ozs7OzRDQUFLO2tEQUN2RCw4REFBQ0csSUFBRTtrREFBQyw0RUFBQ0UsR0FBQzs0Q0FBQ0QsSUFBSSxFQUFDLEdBQUc7NENBQUNKLFNBQVMsRUFBQyxZQUFZO3NEQUFDLE9BQUs7Ozs7O2dEQUFJOzs7Ozs0Q0FBSzs7Ozs7O29DQUNwRDs7Ozs7Z0NBQ0g7c0NBQ04sOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxLQUFLOzRCQUFDRixHQUFHLEVBQUVaLEdBQUc7NEJBQUVvQixPQUFPLEVBQUVyQixhQUFhOzs4Q0FDakQsOERBQUNnQixNQUFJOzs7O3dDQUFROzhDQUFBLDhEQUFDQSxNQUFJOzs7O3dDQUFROzhDQUFBLDhEQUFDQSxNQUFJOzs7O3dDQUFROzs7Ozs7Z0NBQ3JDOzs7Ozs7d0JBQ0o7Ozs7O29CQUNKOzBCQUNOLDhEQUFDTSxPQUFLOzs7O29CQUVFOztvQkFDVCxDQUNOO0FBQ0wsQ0FBQztHQW5FdUJ2QixNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG5cclxuICAgIC8vUmVmc1xyXG4gICAgY29uc3QgaGFtID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgbmF2ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIC8vU2lkZWJhciBUb2dnbGVcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICAgICAgaWYgKGhhbS5jdXJyZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBoYW0uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9IaWRlIE5hdlxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbGV0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBoaWRlTmF2ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hdi5jdXJyZW50ICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IHNjcm9sbFkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2LmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2LmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhpZGVOYXYpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhpZGVOYXYpO1xyXG4gICAgICAgIH0sIFtdKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG5hdiByZWY9e25hdn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250YWluZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kIHNpeHR5LWZvdXIgYmlnLXRleHQtc3R5bGVcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmFuZCBzaXh0eS1mb3VyIGJpZy10ZXh0LXN0eWxlXCI+TW92aWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGV4dC1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NlYXJjaFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+U2VhcmNoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidGV4dC1zdHlsZVwiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1cIiByZWY9e2hhbX0gb25DbGljaz17dG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8YXNpZGU+XHJcblxyXG4gICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkxpbmsiLCJOYXZiYXIiLCJ0b2dnbGVTaWRlYmFyIiwiaGFtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwibmF2Iiwic2Nyb2xsWSIsIndpbmRvdyIsImhpZGVOYXYiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ1bCIsImxpIiwiaHJlZiIsImEiLCJvbkNsaWNrIiwiYXNpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});