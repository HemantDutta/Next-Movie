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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*Global Stylesheet*/\\r\\n\\r\\n/*Main*/\\r\\n\\r\\n:root {\\r\\n    --clr-sec: #FF9843;\\r\\n}\\r\\n\\r\\n*,\\r\\n*:after,\\r\\n*:before {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: \\\"Poppins\\\", sans-serif;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.sixty-four {\\r\\n    font-family: \\\"Sixtyfour\\\", sans-serif;\\r\\n    font-optical-sizing: auto;\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n    font-variation-settings: \\\"BLED\\\" 0,\\r\\n    \\\"SCAN\\\" 0;\\r\\n}\\r\\n\\r\\n.head-style {\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n.big-head-style {\\r\\n    font-size: 56px;\\r\\n}\\r\\n\\r\\n.text-style {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.big-text-style {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n/*Main End*/\\r\\n\\r\\n/*Container*/\\r\\n\\r\\n.container {\\r\\n    padding: 0 76px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    .container {\\r\\n        padding: 0 56px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 696px) {\\r\\n    .container {\\r\\n        padding: 0 32px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        padding: 0 16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*Container End*/\\r\\n\\r\\n/*==========Navbar==========*/\\r\\n\\r\\nnav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\nnav .navbar-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 32px;\\r\\n    padding-bottom: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .left {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .right ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n}\\r\\n\\r\\n/*==========Navbar End==========*/\\r\\n\\r\\n/*==========Movie Banner==========*/\\r\\n\\r\\n.mb {\\r\\n    margin: 150px 0 100px;\\r\\n}\\r\\n\\r\\n.mb .mb-container {\\r\\n    position: relative;\\r\\n    border-radius: 50px;\\r\\n    width: 100%;\\r\\n    height: 500px;\\r\\n    overflow: hidden;\\r\\n    padding: 32px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .abs-bg {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 101;\\r\\n    -o-object-fit: cover;\\r\\n       object-fit: cover;\\r\\n    -o-object-position: center;\\r\\n       object-position: center;\\r\\n}\\r\\n\\r\\n.mb .mb-container .overlay {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\\r\\n    z-index: 102;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content {\\r\\n    position: relative;\\r\\n    z-index: 105;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    color: white;\\r\\n    width: 60%;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content .head {\\r\\n    color: var(--clr-sec);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 810px) {\\r\\n    .mb .mb-container .content {\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Movie Banner End==========*/\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/NextMovie.css\"],\"names\":[],\"mappings\":\"AAAA,oBAAoB;;AAEpB,OAAO;;AAEP;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB;YACQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA,WAAW;;AAEX,YAAY;;AAEZ;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA,gBAAgB;;AAEhB,6BAA6B;;AAE7B;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA,iCAAiC;;AAEjC,mCAAmC;;AAEnC;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,oBAAiB;OAAjB,iBAAiB;IACjB,0BAAuB;OAAvB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,mEAAmE;IACnE,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,QAAQ;AACZ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI;;IAEA;AACJ;;AAEA,uCAAuC\",\"sourcesContent\":[\"/*Global Stylesheet*/\\r\\n\\r\\n/*Main*/\\r\\n\\r\\n:root {\\r\\n    --clr-sec: #FF9843;\\r\\n}\\r\\n\\r\\n*,\\r\\n*:after,\\r\\n*:before {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: \\\"Poppins\\\", sans-serif;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.sixty-four {\\r\\n    font-family: \\\"Sixtyfour\\\", sans-serif;\\r\\n    font-optical-sizing: auto;\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n    font-variation-settings: \\\"BLED\\\" 0,\\r\\n    \\\"SCAN\\\" 0;\\r\\n}\\r\\n\\r\\n.head-style {\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n.big-head-style {\\r\\n    font-size: 56px;\\r\\n}\\r\\n\\r\\n.text-style {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.big-text-style {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n/*Main End*/\\r\\n\\r\\n/*Container*/\\r\\n\\r\\n.container {\\r\\n    padding: 0 76px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    .container {\\r\\n        padding: 0 56px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 696px) {\\r\\n    .container {\\r\\n        padding: 0 32px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        padding: 0 16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*Container End*/\\r\\n\\r\\n/*==========Navbar==========*/\\r\\n\\r\\nnav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\nnav .navbar-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 32px;\\r\\n    padding-bottom: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .left {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .right ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n}\\r\\n\\r\\n/*==========Navbar End==========*/\\r\\n\\r\\n/*==========Movie Banner==========*/\\r\\n\\r\\n.mb {\\r\\n    margin: 150px 0 100px;\\r\\n}\\r\\n\\r\\n.mb .mb-container {\\r\\n    position: relative;\\r\\n    border-radius: 50px;\\r\\n    width: 100%;\\r\\n    height: 500px;\\r\\n    overflow: hidden;\\r\\n    padding: 32px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .abs-bg {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 101;\\r\\n    object-fit: cover;\\r\\n    object-position: center;\\r\\n}\\r\\n\\r\\n.mb .mb-container .overlay {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\\r\\n    z-index: 102;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content {\\r\\n    position: relative;\\r\\n    z-index: 105;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    color: white;\\r\\n    width: 60%;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content .head {\\r\\n    color: var(--clr-sec);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 810px) {\\r\\n    .mb .mb-container .content {\\r\\n\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Movie Banner End==========*/\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL05leHRNb3ZpZS5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDhGQUE4RiwyQkFBMkIsS0FBSyxvQ0FBb0MsK0JBQStCLEtBQUssY0FBYyxtQkFBbUIsa0JBQWtCLDZDQUE2QywyQkFBMkIsS0FBSyxvQkFBb0IsMkJBQTJCLEtBQUsseUJBQXlCLCtDQUErQyxrQ0FBa0MseUJBQXlCLDJCQUEyQiwrREFBK0QsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsseUJBQXlCLHdCQUF3QixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyx5QkFBeUIsd0JBQXdCLEtBQUssNkRBQTZELHdCQUF3QiwyQkFBMkIsS0FBSyw4Q0FBOEMsb0JBQW9CLDRCQUE0QixTQUFTLEtBQUssOENBQThDLG9CQUFvQiw0QkFBNEIsU0FBUyxLQUFLLDhDQUE4QyxvQkFBb0IsNEJBQTRCLFNBQVMsS0FBSyw0RUFBNEUsd0JBQXdCLGVBQWUsZ0JBQWdCLHFCQUFxQixxQkFBcUIsS0FBSywrQkFBK0Isc0JBQXNCLDRCQUE0Qix1Q0FBdUMsMEJBQTBCLDZCQUE2QixLQUFLLHFDQUFxQyxzQkFBc0IsK0JBQStCLGlCQUFpQixLQUFLLHlDQUF5Qyw4QkFBOEIsc0JBQXNCLDRCQUE0QixrQkFBa0IsS0FBSyxtR0FBbUcsOEJBQThCLEtBQUssMkJBQTJCLDJCQUEyQiw0QkFBNEIsb0JBQW9CLHNCQUFzQix5QkFBeUIsc0JBQXNCLEtBQUss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LEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL05leHRNb3ZpZS5jc3M/MGZmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypHbG9iYWwgU3R5bGVzaGVldCovXFxyXFxuXFxyXFxuLypNYWluKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tY2xyLXNlYzogI0ZGOTg0MztcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOmFmdGVyLFxcclxcbio6YmVmb3JlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBodG1sIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2l4dHktZm91ciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2l4dHlmb3VyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkJMRURcXFwiIDAsXFxyXFxuICAgIFxcXCJTQ0FOXFxcIiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1oZWFkLXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy10ZXh0LXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKk1haW4gRW5kKi9cXHJcXG5cXHJcXG4vKkNvbnRhaW5lciovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNzZweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTZweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMzJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKkNvbnRhaW5lciBFbmQqL1xcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhcj09PT09PT09PT0qL1xcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAubGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLnJpZ2h0IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhciBFbmQ9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1Nb3ZpZSBCYW5uZXI9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4ubWIge1xcclxcbiAgICBtYXJnaW46IDE1MHB4IDAgMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmFicy1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgLW8tb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciAub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMC45KSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgICB6LWluZGV4OiAxMDI7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5jb250ZW50IC5oZWFkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1zZWMpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTBweCkge1xcclxcbiAgICAubWIgLm1iLWNvbnRhaW5lciAuY29udGVudCB7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyo9PT09PT09PT09TW92aWUgQmFubmVyIEVuZD09PT09PT09PT0qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvTmV4dE1vdmllLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7O0FBRXBCLE9BQU87O0FBRVA7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEI7WUFDUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxXQUFXOztBQUVYLFlBQVk7O0FBRVo7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBLGdCQUFnQjs7QUFFaEIsNkJBQTZCOztBQUU3QjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBLGlDQUFpQzs7QUFFakMsbUNBQW1DOztBQUVuQztJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsMEJBQXVCO09BQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUVBQW1FO0lBQ25FLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJOztJQUVBO0FBQ0o7O0FBRUEsdUNBQXVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qR2xvYmFsIFN0eWxlc2hlZXQqL1xcclxcblxcclxcbi8qTWFpbiovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWNsci1zZWM6ICNGRjk4NDM7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjphZnRlcixcXHJcXG4qOmJlZm9yZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgaHRtbCB7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpeHR5LWZvdXIge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNpeHR5Zm91clxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJCTEVEXFxcIiAwLFxcclxcbiAgICBcXFwiU0NBTlxcXCIgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtc3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5iaWctaGVhZC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5iaWctdGV4dC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLypNYWluIEVuZCovXFxyXFxuXFxyXFxuLypDb250YWluZXIqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDc2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDU2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk2cHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDMycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLypDb250YWluZXIgRW5kKi9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1OYXZiYXI9PT09PT09PT09Ki9cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5yaWdodCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKj09PT09PT09PT1OYXZiYXIgRW5kPT09PT09PT09PSovXFxyXFxuXFxyXFxuLyo9PT09PT09PT09TW92aWUgQmFubmVyPT09PT09PT09PSovXFxyXFxuXFxyXFxuLm1iIHtcXHJcXG4gICAgbWFyZ2luOiAxNTBweCAwIDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5hYnMtYmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTAxO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLDAsMCwwLjkpLCB0cmFuc3BhcmVudCk7XFxyXFxuICAgIHotaW5kZXg6IDEwMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmNvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwNTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmNvbnRlbnQgLmhlYWQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXNlYyk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxMHB4KSB7XFxyXFxuICAgIC5tYiAubWItY29udGFpbmVyIC5jb250ZW50IHtcXHJcXG5cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKj09PT09PT09PT1Nb3ZpZSBCYW5uZXIgRW5kPT09PT09PT09PSovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/NextMovie.css\n"));

/***/ })

});