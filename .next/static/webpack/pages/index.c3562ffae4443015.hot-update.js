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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    var toggleSidebar = //Sidebar Toggle\n    function toggleSidebar() {\n        if (ham.current.classList.contains(\"active\")) {\n            ham.current.classList.remove(\"active\");\n            nav.current.classList.remove(\"active\");\n            aside.current.classList.remove(\"active\");\n            document.getElementsByTagName(\"body\")[0].style.overflowY = \"initial\";\n        } else {\n            ham.current.classList.add(\"active\");\n            nav.current.classList.add(\"active\");\n            aside.current.classList.add(\"active\");\n            document.getElementsByTagName(\"body\")[0].style.overflowY = \"hidden\";\n        }\n    };\n    _s();\n    //Refs\n    var ham = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var nav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var aside = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //Hide Nav\n    if (true) {\n        var scrollY = window.scrollY;\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            var hideNav = function() {\n                if (nav.current !== null) {\n                    if (window.scrollY > scrollY) {\n                        nav.current.classList.add(\"hide\");\n                    } else {\n                        nav.current.classList.remove(\"hide\");\n                    }\n                    scrollY = window.scrollY;\n                }\n            };\n            window.addEventListener(\"scroll\", hideNav);\n            return function() {\n                return window.removeEventListener(\"scroll\", hideNav);\n            };\n        }, []);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                ref: nav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-container container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"brand sixty-four big-text-style\",\n                                    children: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"brand sixty-four big-text-style\",\n                                    children: \"Movie\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"right\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"text-style\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/search\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-style\",\n                                                children: \"Search\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/contact\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-style\",\n                                                children: \"Contact\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/about\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-style\",\n                                                children: \"About\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ham\",\n                            ref: ham,\n                            onClick: toggleSidebar,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 38\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 51\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                ref: aside,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"aside-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/search\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-style\",\n                                        children: \"Search\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 84,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/contact\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-style\",\n                                        children: \"Contact\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 89,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/about\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-style\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"zbU3mSly6Dj6vXNU1xSsAox+Jl4=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUU7MENBQ0MsNEVBQUN6QixrREFBSTtvQ0FBQzBCLElBQUksRUFBRSxTQUFTOzhDQUNqQiw0RUFBQ0MsR0FBQzt3Q0FBQ0wsU0FBUyxFQUFDLFlBQVk7a0RBQUMsUUFBTTs7Ozs7NENBQUk7Ozs7O3dDQUNqQzs7Ozs7b0NBQ047MENBQ0wsOERBQUNHLElBQUU7MENBQ0MsNEVBQUN6QixrREFBSTtvQ0FBQzBCLElBQUksRUFBRSxVQUFVOzhDQUNsQiw0RUFBQ0MsR0FBQzt3Q0FBQ0wsU0FBUyxFQUFDLFlBQVk7a0RBQUMsU0FBTzs7Ozs7NENBQUk7Ozs7O3dDQUNsQzs7Ozs7b0NBQ047MENBQ0wsOERBQUNHLElBQUU7MENBQ0MsNEVBQUN6QixrREFBSTtvQ0FBQzBCLElBQUksRUFBRSxRQUFROzhDQUNoQiw0RUFBQ0MsR0FBQzt3Q0FBQ0wsU0FBUyxFQUFDLFlBQVk7a0RBQUMsT0FBSzs7Ozs7NENBQUk7Ozs7O3dDQUNoQzs7Ozs7b0NBQ047Ozs7Ozs0QkFDSjs7Ozs7d0JBQ0g7Ozs7O29CQUNGOztvQkFDVCxDQUNOO0FBQ0wsQ0FBQztHQXBHdUJyQixNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG5cclxuICAgIC8vUmVmc1xyXG4gICAgY29uc3QgaGFtID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgbmF2ID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgYXNpZGUgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gICAgLy9TaWRlYmFyIFRvZ2dsZVxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgICAgICBpZiAoaGFtLmN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIGhhbS5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIG5hdi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGFzaWRlLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnN0eWxlLm92ZXJmbG93WSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIG5hdi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGFzaWRlLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vSGlkZSBOYXZcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGxldCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGlkZU5hdiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChuYXYuY3VycmVudCAhPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiBzY3JvbGxZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoaWRlTmF2KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoaWRlTmF2KTtcclxuICAgICAgICB9LCBbXSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxuYXYgcmVmPXtuYXZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmFuZCBzaXh0eS1mb3VyIGJpZy10ZXh0LXN0eWxlXCI+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJhbmQgc2l4dHktZm91ciBiaWctdGV4dC1zdHlsZVwiPk1vdmllPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9zZWFyY2hcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc3R5bGVcIj5TZWFyY2g8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9jb250YWN0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2Fib3V0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbVwiIHJlZj17aGFtfSBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxhc2lkZSByZWY9e2FzaWRlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9zZWFyY2hcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zdHlsZVwiPlNlYXJjaDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvY29udGFjdFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvYWJvdXRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zdHlsZVwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaW5rIiwiTmF2YmFyIiwidG9nZ2xlU2lkZWJhciIsImhhbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsIm5hdiIsImFzaWRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwib3ZlcmZsb3dZIiwiYWRkIiwic2Nyb2xsWSIsIndpbmRvdyIsImhpZGVOYXYiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ1bCIsImxpIiwiaHJlZiIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});