"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/NextMovie.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/NextMovie.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*Global Stylesheet*/\\r\\n\\r\\n/*Main*/\\r\\n\\r\\n*,\\r\\n*:after,\\r\\n*:before {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: \\\"Poppins\\\", sans-serif;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.sixty-four {\\r\\n    font-family: \\\"Sixtyfour\\\", sans-serif;\\r\\n    font-optical-sizing: auto;\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n    font-variation-settings: \\\"BLED\\\" 0,\\r\\n    \\\"SCAN\\\" 0;\\r\\n}\\r\\n\\r\\n.head-style {\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n.big-head-style {\\r\\n    font-size: 56px;\\r\\n}\\r\\n\\r\\n.text-style {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.big-text-style {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n/*Main End*/\\r\\n\\r\\n/*Container*/\\r\\n\\r\\n.container {\\r\\n    padding: 0 76px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    .container {\\r\\n        padding: 0 56px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 696px) {\\r\\n    .container {\\r\\n        padding: 0 32px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        padding: 0 16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*Container End*/\\r\\n\\r\\n/*==========Navbar==========*/\\r\\n\\r\\nnav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\nnav .navbar-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 32px;\\r\\n    padding-bottom: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .left {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .right ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n}\\r\\n\\r\\n/*==========Navbar End==========*/\\r\\n\\r\\n/*==========Movie Banner==========*/\\r\\n\\r\\n.mb {\\r\\n    margin: 150px 0 100px;\\r\\n}\\r\\n\\r\\n.mb .mb-container {\\r\\n    position: relative;\\r\\n    border-radius: 50px;\\r\\n    width: 100%;\\r\\n    height: 500px;\\r\\n    overflow: hidden;\\r\\n    padding: 32px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .abs-bg {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 101;\\r\\n}\\r\\n\\r\\n.mb .mb-container .overlay {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\\r\\n    z-index: 102;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content {\\r\\n    position: relative;\\r\\n    z-index: 105;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    color: white;\\r\\n    width: 40vw;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n/*==========Movie Banner End==========*/\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/NextMovie.css\"],\"names\":[],\"mappings\":\"AAAA,oBAAoB;;AAEpB,OAAO;;AAEP;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB;YACQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA,WAAW;;AAEX,YAAY;;AAEZ;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA,gBAAgB;;AAEhB,6BAA6B;;AAE7B;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA,iCAAiC;;AAEjC,mCAAmC;;AAEnC;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,mEAAmE;IACnE,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,QAAQ;AACZ;;AAEA,uCAAuC\",\"sourcesContent\":[\"/*Global Stylesheet*/\\r\\n\\r\\n/*Main*/\\r\\n\\r\\n*,\\r\\n*:after,\\r\\n*:before {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: \\\"Poppins\\\", sans-serif;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.sixty-four {\\r\\n    font-family: \\\"Sixtyfour\\\", sans-serif;\\r\\n    font-optical-sizing: auto;\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n    font-variation-settings: \\\"BLED\\\" 0,\\r\\n    \\\"SCAN\\\" 0;\\r\\n}\\r\\n\\r\\n.head-style {\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n.big-head-style {\\r\\n    font-size: 56px;\\r\\n}\\r\\n\\r\\n.text-style {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.big-text-style {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n/*Main End*/\\r\\n\\r\\n/*Container*/\\r\\n\\r\\n.container {\\r\\n    padding: 0 76px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    .container {\\r\\n        padding: 0 56px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 696px) {\\r\\n    .container {\\r\\n        padding: 0 32px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        padding: 0 16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*Container End*/\\r\\n\\r\\n/*==========Navbar==========*/\\r\\n\\r\\nnav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\nnav .navbar-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 32px;\\r\\n    padding-bottom: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .left {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .right ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n}\\r\\n\\r\\n/*==========Navbar End==========*/\\r\\n\\r\\n/*==========Movie Banner==========*/\\r\\n\\r\\n.mb {\\r\\n    margin: 150px 0 100px;\\r\\n}\\r\\n\\r\\n.mb .mb-container {\\r\\n    position: relative;\\r\\n    border-radius: 50px;\\r\\n    width: 100%;\\r\\n    height: 500px;\\r\\n    overflow: hidden;\\r\\n    padding: 32px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .abs-bg {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 101;\\r\\n}\\r\\n\\r\\n.mb .mb-container .overlay {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\\r\\n    z-index: 102;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content {\\r\\n    position: relative;\\r\\n    z-index: 105;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    color: white;\\r\\n    width: 40vw;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n/*==========Movie Banner End==========*/\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL05leHRNb3ZpZS5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG1IQUFtSCwrQkFBK0IsS0FBSyxjQUFjLG1CQUFtQixrQkFBa0IsNkNBQTZDLDJCQUEyQixLQUFLLG9CQUFvQiwyQkFBMkIsS0FBSyx5QkFBeUIsK0NBQStDLGtDQUFrQyx5QkFBeUIsMkJBQTJCLCtEQUErRCxLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyx5QkFBeUIsd0JBQXdCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLHlCQUF5Qix3QkFBd0IsS0FBSyw2REFBNkQsd0JBQXdCLDJCQUEyQixLQUFLLDhDQUE4QyxvQkFBb0IsNEJBQTRCLFNBQVMsS0FBSyw4Q0FBOEMsb0JBQW9CLDRCQUE0QixTQUFTLEtBQUssOENBQThDLG9CQUFvQiw0QkFBNEIsU0FBUyxLQUFLLDRFQUE0RSx3QkFBd0IsZUFBZSxnQkFBZ0IscUJBQXFCLHFCQUFxQixLQUFLLCtCQUErQixzQkFBc0IsNEJBQTRCLHVDQUF1QywwQkFBMEIsNkJBQTZCLEtBQUsscUNBQXFDLHNCQUFzQiwrQkFBK0IsaUJBQWlCLEtBQUsseUNBQXlDLDhCQUE4QixzQkFBc0IsNEJBQTRCLGtCQUFrQixLQUFLLG1HQUFtRyw4QkFBOEIsS0FBSywyQkFBMkIsMkJBQTJCLDRCQUE0QixvQkFBb0Isc0JBQXNCLHlCQUF5QixzQkFBc0IsS0FBSyxtQ0FBbUMsMkJBQTJCLGVBQWUsZ0JBQWdCLG9CQUFvQixxQkFBcUIscUJBQXFCLEtBQUssb0NBQW9DLDJCQUEyQixlQUFlLGdCQUFnQixxQkFBcUIsb0JBQW9CLDRFQUE0RSxxQkFBcUIsS0FBSyxvQ0FBb0MsMkJBQTJCLHFCQUFxQixzQkFBc0IsK0JBQStCLGdDQUFnQyxxQkFBcUIscUJBQXFCLG9CQUFvQixpQkFBaUIsS0FBSyx1REFBdUQsNkZBQTZGLFlBQVksT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFdBQVcsV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSx5R0FBeUcsK0JBQStCLEtBQUssY0FBYyxtQkFBbUIsa0JBQWtCLDZDQUE2QywyQkFBMkIsS0FBSyxvQkFBb0IsMkJBQTJCLEtBQUsseUJBQXlCLCtDQUErQyxrQ0FBa0MseUJBQXlCLDJCQUEyQiwrREFBK0QsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsseUJBQXlCLHdCQUF3QixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyx5QkFBeUIsd0JBQXdCLEtBQUssNkRBQTZELHdCQUF3QiwyQkFBMkIsS0FBSyw4Q0FBOEMsb0JBQW9CLDRCQUE0QixTQUFTLEtBQUssOENBQThDLG9CQUFvQiw0QkFBNEIsU0FBUyxLQUFLLDhDQUE4QyxvQkFBb0IsNEJBQTRCLFNBQVMsS0FBSyw0RUFBNEUsd0JBQXdCLGVBQWUsZ0JBQWdCLHFCQUFxQixxQkFBcUIsS0FBSywrQkFBK0Isc0JBQXNCLDRCQUE0Qix1Q0FBdUMsMEJBQTBCLDZCQUE2QixLQUFLLHFDQUFxQyxzQkFBc0IsK0JBQStCLGlCQUFpQixLQUFLLHlDQUF5Qyw4QkFBOEIsc0JBQXNCLDRCQUE0QixrQkFBa0IsS0FBSyxtR0FBbUcsOEJBQThCLEtBQUssMkJBQTJCLDJCQUEyQiw0QkFBNEIsb0JBQW9CLHNCQUFzQix5QkFBeUIsc0JBQXNCLEtBQUssbUNBQW1DLDJCQUEyQixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLHFCQUFxQixLQUFLLG9DQUFvQywyQkFBMkIsZUFBZSxnQkFBZ0IscUJBQXFCLG9CQUFvQiw0RUFBNEUscUJBQXFCLEtBQUssb0NBQW9DLDJCQUEyQixxQkFBcUIsc0JBQXNCLCtCQUErQixnQ0FBZ0MscUJBQXFCLHFCQUFxQixvQkFBb0IsaUJBQWlCLEtBQUssbUVBQW1FO0FBQ3B0TjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9OZXh0TW92aWUuY3NzPzBmZjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qR2xvYmFsIFN0eWxlc2hlZXQqL1xcclxcblxcclxcbi8qTWFpbiovXFxyXFxuXFxyXFxuKixcXHJcXG4qOmFmdGVyLFxcclxcbio6YmVmb3JlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBodG1sIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2l4dHktZm91ciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2l4dHlmb3VyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkJMRURcXFwiIDAsXFxyXFxuICAgIFxcXCJTQ0FOXFxcIiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1oZWFkLXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy10ZXh0LXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKk1haW4gRW5kKi9cXHJcXG5cXHJcXG4vKkNvbnRhaW5lciovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNzZweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTZweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMzJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKkNvbnRhaW5lciBFbmQqL1xcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhcj09PT09PT09PT0qL1xcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAubGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLnJpZ2h0IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhciBFbmQ9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1Nb3ZpZSBCYW5uZXI9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4ubWIge1xcclxcbiAgICBtYXJnaW46IDE1MHB4IDAgMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmFicy1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwwLjkpLCB0cmFuc3BhcmVudCk7XFxyXFxuICAgIHotaW5kZXg6IDEwMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmNvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwNTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU1vdmllIEJhbm5lciBFbmQ9PT09PT09PT09Ki9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL05leHRNb3ZpZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQW9COztBQUVwQixPQUFPOztBQUVQOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO1lBQ1E7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsV0FBVzs7QUFFWCxZQUFZOztBQUVaO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQSxnQkFBZ0I7O0FBRWhCLDZCQUE2Qjs7QUFFN0I7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQSxpQ0FBaUM7O0FBRWpDLG1DQUFtQzs7QUFFbkM7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLG1FQUFtRTtJQUNuRSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUEsdUNBQXVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qR2xvYmFsIFN0eWxlc2hlZXQqL1xcclxcblxcclxcbi8qTWFpbiovXFxyXFxuXFxyXFxuKixcXHJcXG4qOmFmdGVyLFxcclxcbio6YmVmb3JlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBodG1sIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2l4dHktZm91ciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2l4dHlmb3VyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkJMRURcXFwiIDAsXFxyXFxuICAgIFxcXCJTQ0FOXFxcIiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1oZWFkLXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy10ZXh0LXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKk1haW4gRW5kKi9cXHJcXG5cXHJcXG4vKkNvbnRhaW5lciovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNzZweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTZweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMzJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKkNvbnRhaW5lciBFbmQqL1xcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhcj09PT09PT09PT0qL1xcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAubGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLnJpZ2h0IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhciBFbmQ9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1Nb3ZpZSBCYW5uZXI9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4ubWIge1xcclxcbiAgICBtYXJnaW46IDE1MHB4IDAgMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmFicy1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwwLjkpLCB0cmFuc3BhcmVudCk7XFxyXFxuICAgIHotaW5kZXg6IDEwMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmNvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwNTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU1vdmllIEJhbm5lciBFbmQ9PT09PT09PT09Ki9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/NextMovie.css\n"));

/***/ })

});