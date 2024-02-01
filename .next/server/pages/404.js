"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ErrorPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ErrorPage() {\n    //Router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //States\n    const { 0: timer , 1: setTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    //Run Timer\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTimer((timer)=>timer - 1);\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, []);\n    if (timer <= 1) {\n        router.replace(\"/\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"error-page container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"error-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"left\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"big-head-style sixty-four\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\404.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"big-head-style sixty-four\",\n                                children: \"Movie\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\404.js\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\404.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"title big-text-style\",\n                                children: \"Seems like you're lost\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\404.js\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"tag\",\n                                children: [\n                                    \"Don't worry, we're taking you back in \",\n                                    timer,\n                                    \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\404.js\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\404.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\404.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91987\\\\Next-Movie\\\\pages\\\\404.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ0o7QUFFdkIsU0FBU0csU0FBUyxHQUFHO0lBRWhDLFFBQVE7SUFDUixNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFFMUIsUUFBUTtJQUNSLE1BQU0sS0FBQ0csS0FBSyxNQUFFQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXJDLFdBQVc7SUFDWEQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1osTUFBTU8sUUFBUSxHQUFHQyxXQUFXLENBQUMsSUFBTTtZQUMvQkYsUUFBUSxDQUFDRCxDQUFBQSxLQUFLLEdBQUlBLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1FBRVIsT0FBTyxJQUFNSSxhQUFhLENBQUNGLFFBQVEsQ0FBQztJQUN4QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBSUYsS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNaRCxNQUFNLENBQUNNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQscUJBQ0k7a0JBQ0ksNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjtzQkFDakMsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpQkFBaUI7O2tDQUM1Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzBDQUNqQiw4REFBQ0MsTUFBSTtnQ0FBQ0QsU0FBUyxFQUFDLDJCQUEyQjswQ0FBQyxNQUFJOzs7OztvQ0FBTzswQ0FDdkQsOERBQUNDLE1BQUk7Z0NBQUNELFNBQVMsRUFBQywyQkFBMkI7MENBQUMsT0FBSzs7Ozs7b0NBQU87Ozs7Ozs0QkFDdEQ7a0NBQ04sOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxPQUFPOzswQ0FDbEIsOERBQUNDLE1BQUk7Z0NBQUNELFNBQVMsRUFBQyxzQkFBc0I7MENBQUMsd0JBQXNCOzs7OztvQ0FBTzswQ0FDcEUsOERBQUNDLE1BQUk7Z0NBQUNELFNBQVMsRUFBQyxLQUFLOztvQ0FBQyx3Q0FBc0M7b0NBQUNQLEtBQUs7b0NBQUMsS0FBRzs7Ozs7O29DQUFPOzs7Ozs7NEJBQzNFOzs7Ozs7b0JBQ0o7Ozs7O2dCQUNKO3FCQUNQLENBQ047QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1tb3ZpZS8uL3BhZ2VzLzQwNC5qcz8zZWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yUGFnZSgpIHtcclxuXHJcbiAgICAvL1JvdXRlclxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy9TdGF0ZXNcclxuICAgIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoNSk7XHJcblxyXG4gICAgLy9SdW4gVGltZXJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVyKHRpbWVyID0+IHRpbWVyIC0gMSk7XHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBpZiAodGltZXIgPD0gMSkge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItcGFnZSBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpZy1oZWFkLXN0eWxlIHNpeHR5LWZvdXJcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaWctaGVhZC1zdHlsZSBzaXh0eS1mb3VyXCI+TW92aWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZSBiaWctdGV4dC1zdHlsZVwiPlNlZW1zIGxpa2UgeW91J3JlIGxvc3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiPkRvbid0IHdvcnJ5LCB3ZSdyZSB0YWtpbmcgeW91IGJhY2sgaW4ge3RpbWVyfS4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkVycm9yUGFnZSIsInJvdXRlciIsInRpbWVyIiwic2V0VGltZXIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.js"));
module.exports = __webpack_exports__;

})();