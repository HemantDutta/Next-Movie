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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Navbar() {\n    var toggleSidebar = //Sidebar Toggle\n    function toggleSidebar() {\n        if (ham.current.classList.contains(\"active\")) {\n            ham.current.classList.remove(\"active\");\n        } else {\n            ham.current.classList.add(\"active\");\n        }\n    };\n    _s();\n    //Refs\n    var ham = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var nav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //Hide Nav\n    var scrollY = window.scrollY;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var hideNav = function() {\n            if (window.scrollY > scrollY) {\n                nav.current.classList.add(\"hide\");\n            } else {\n                nav.current.classList.remove(\"hide\");\n            }\n            scrollY = window.scrollY;\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            ref: nav,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-container container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"brand sixty-four big-text-style\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"brand sixty-four big-text-style\",\n                                children: \"Movie\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"text-style\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ham\",\n                        ref: ham,\n                        onClick: toggleSidebar,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 47,\n                                columnNumber: 38\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                                lineNumber: 47,\n                                columnNumber: 51\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\components\\\\Navbar.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"z0mNfHNUNAbjkwGKNgtzxVTUHvE=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQUV6QixTQUFTRSxNQUFNLEdBQUc7UUFPcEJDLGFBQWEsR0FEdEIsZ0JBQWdCO0lBQ2hCLFNBQVNBLGFBQWEsR0FBRztRQUNyQixJQUFJQyxHQUFHLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUNILEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxPQUFPO1lBQ0hKLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQztJQUNMLENBQUM7O0lBWEQsTUFBTTtJQUNOLElBQU1MLEdBQUcsR0FBR0gsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEIsSUFBTVMsR0FBRyxHQUFHVCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQVd4QixVQUFVO0lBQ1YsSUFBSVUsT0FBTyxHQUFHQyxNQUFNLENBQUNELE9BQU87SUFDNUJYLGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQU1hLE9BQU8sR0FBRyxXQUFNO1lBQ2xCLElBQUlELE1BQU0sQ0FBQ0QsT0FBTyxHQUFHQSxPQUFPLEVBQUU7Z0JBQzFCRCxHQUFHLENBQUNMLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsT0FBTztnQkFDSEMsR0FBRyxDQUFDTCxPQUFPLENBQUNDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFDREcsT0FBTyxHQUFHQyxNQUFNLENBQUNELE9BQU8sQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNJO2tCQUNJLDRFQUFDRCxLQUFHO1lBQUNJLEdBQUcsRUFBRUosR0FBRztzQkFDVCw0RUFBQ0ssS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7a0NBQ3ZDLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsTUFBTTs7MENBQ2pCLDhEQUFDQyxNQUFJO2dDQUFDRCxTQUFTLEVBQUMsaUNBQWlDOzBDQUFDLE1BQUk7Ozs7O29DQUFPOzBDQUM3RCw4REFBQ0MsTUFBSTtnQ0FBQ0QsU0FBUyxFQUFDLGlDQUFpQzswQ0FBQyxPQUFLOzs7OztvQ0FBTzs7Ozs7OzRCQUM1RDtrQ0FDTiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE9BQU87a0NBQ2xCLDRFQUFDRSxJQUFFOzRCQUFDRixTQUFTLEVBQUMsWUFBWTs7OENBQ3RCLDhEQUFDRyxJQUFFOzhDQUFDLFFBQU07Ozs7O3dDQUFLOzhDQUNmLDhEQUFDQSxJQUFFOzhDQUFDLFNBQU87Ozs7O3dDQUFLOzhDQUNoQiw4REFBQ0EsSUFBRTs4Q0FBQyxPQUFLOzs7Ozt3Q0FBSzs7Ozs7O2dDQUNiOzs7Ozs0QkFDSDtrQ0FDTiw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLEtBQUs7d0JBQUNGLEdBQUcsRUFBRVYsR0FBRzt3QkFBRWdCLE9BQU8sRUFBRWpCLGFBQWE7OzBDQUNqRCw4REFBQ2MsTUFBSTs7OztvQ0FBUTswQ0FBQSw4REFBQ0EsTUFBSTs7OztvQ0FBUTswQ0FBQSw4REFBQ0EsTUFBSTs7OztvQ0FBUTs7Ozs7OzRCQUNyQzs7Ozs7O29CQUNKOzs7OztnQkFDSjtxQkFDUCxDQUNOO0FBQ0wsQ0FBQztHQWxEdUJmLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qcz9mYmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG5cclxuICAgIC8vUmVmc1xyXG4gICAgY29uc3QgaGFtID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgbmF2ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIC8vU2lkZWJhciBUb2dnbGVcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XHJcbiAgICAgICAgaWYgKGhhbS5jdXJyZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBoYW0uY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbS5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9IaWRlIE5hdlxyXG4gICAgbGV0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGlkZU5hdiA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gc2Nyb2xsWSkge1xyXG4gICAgICAgICAgICAgICAgbmF2LmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXYuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bmF2IHJlZj17bmF2fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRhaW5lciBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJhbmQgc2l4dHktZm91ciBiaWctdGV4dC1zdHlsZVwiPk5leHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyYW5kIHNpeHR5LWZvdXIgYmlnLXRleHQtc3R5bGVcIj5Nb3ZpZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2VhcmNoPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BYm91dDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1cIiByZWY9e2hhbX0gb25DbGljaz17dG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIk5hdmJhciIsInRvZ2dsZVNpZGViYXIiLCJoYW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJuYXYiLCJzY3JvbGxZIiwid2luZG93IiwiaGlkZU5hdiIsInJlZiIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ1bCIsImxpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});