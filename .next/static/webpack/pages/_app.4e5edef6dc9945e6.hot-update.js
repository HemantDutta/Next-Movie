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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*Global Stylesheet*/\\r\\n\\r\\n/*Main*/\\r\\n\\r\\n:root {\\r\\n    --clr-sec: #FF9843;\\r\\n}\\r\\n\\r\\n*,\\r\\n*:after,\\r\\n*:before {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: \\\"Poppins\\\", sans-serif;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.sixty-four {\\r\\n    font-family: \\\"Sixtyfour\\\", sans-serif;\\r\\n    font-optical-sizing: auto;\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n    font-variation-settings: \\\"BLED\\\" 0,\\r\\n    \\\"SCAN\\\" 0;\\r\\n}\\r\\n\\r\\n.head-style {\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n.big-head-style {\\r\\n    font-size: 56px;\\r\\n}\\r\\n\\r\\n.text-style {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.big-text-style {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .big-head-style {\\r\\n        font-size: 36px;\\r\\n    }\\r\\n\\r\\n    .text-style {\\r\\n        font-size: 16px;\\r\\n    }\\r\\n\\r\\n    .big-text-style {\\r\\n        font-size: 18px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.loader {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n/*Main End*/\\r\\n\\r\\n/*Container*/\\r\\n\\r\\n.container {\\r\\n    padding: 0 76px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    .container {\\r\\n        padding: 0 56px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 696px) {\\r\\n    .container {\\r\\n        padding: 0 32px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        padding: 0 16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*Container End*/\\r\\n\\r\\n/*==========Navbar==========*/\\r\\n\\r\\nnav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\nnav .navbar-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 32px;\\r\\n    padding-bottom: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .left {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .right ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham {\\r\\n    display: none;\\r\\n    gap: 5px;\\r\\n    flex-direction: column;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham span {\\r\\n    height: 2px;\\r\\n    background-color: #000000;\\r\\n    width: 20px;\\r\\n    transition: all 1.2s cubic-bezier(0.87, 0, 0.13, 1);\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(1) {\\r\\n    rotate: 405deg;\\r\\n    translate: 0 7px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(3) {\\r\\n    rotate: -405deg;\\r\\n    translate: 0 -7px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(2) {\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    nav .navbar-container .right {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    nav .navbar-container .ham {\\r\\n        display: flex;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Navbar End==========*/\\r\\n\\r\\n/*==========Movie Banner==========*/\\r\\n\\r\\n.mb {\\r\\n    margin: 150px 0 100px;\\r\\n}\\r\\n\\r\\n.mb .mb-container {\\r\\n    position: relative;\\r\\n    border-radius: 50px;\\r\\n    width: 100%;\\r\\n    height: 500px;\\r\\n    overflow: hidden;\\r\\n    padding: 16px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .abs-bg {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 101;\\r\\n    -o-object-fit: cover;\\r\\n       object-fit: cover;\\r\\n    -o-object-position: center;\\r\\n       object-position: center;\\r\\n}\\r\\n\\r\\n.mb .mb-container .overlay {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\\r\\n    z-index: 102;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content {\\r\\n    position: relative;\\r\\n    z-index: 105;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    color: white;\\r\\n    width: 60%;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content .head {\\r\\n    color: var(--clr-sec);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 810px) {\\r\\n    .mb .mb-container .content {\\r\\n        width: 80%;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Movie Banner End==========*/\\r\\n\\r\\n/*==========Genre Grid==========*/\\r\\n\\r\\n.gg {\\r\\n    margin: 100px 0;\\r\\n}\\r\\n\\r\\n.gg .gg-container {\\r\\n    padding: 16px;\\r\\n    border-radius: 50px;\\r\\n}\\r\\n\\r\\n/*==========Genre Grid End==========*/\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/NextMovie.css\"],\"names\":[],\"mappings\":\"AAAA,oBAAoB;;AAEpB,OAAO;;AAEP;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB;YACQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,kBAAkB;AACtB;;AAEA,WAAW;;AAEX,YAAY;;AAEZ;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA,gBAAgB;;AAEhB,6BAA6B;;AAE7B;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,mDAAmD;AACvD;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA,iCAAiC;;AAEjC,mCAAmC;;AAEnC;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,oBAAiB;OAAjB,iBAAiB;IACjB,0BAAuB;OAAvB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,mEAAmE;IACnE,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,QAAQ;AACZ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA,uCAAuC;;AAEvC,iCAAiC;;AAEjC;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA,qCAAqC\",\"sourcesContent\":[\"/*Global Stylesheet*/\\r\\n\\r\\n/*Main*/\\r\\n\\r\\n:root {\\r\\n    --clr-sec: #FF9843;\\r\\n}\\r\\n\\r\\n*,\\r\\n*:after,\\r\\n*:before {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: \\\"Poppins\\\", sans-serif;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.sixty-four {\\r\\n    font-family: \\\"Sixtyfour\\\", sans-serif;\\r\\n    font-optical-sizing: auto;\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n    font-variation-settings: \\\"BLED\\\" 0,\\r\\n    \\\"SCAN\\\" 0;\\r\\n}\\r\\n\\r\\n.head-style {\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n.big-head-style {\\r\\n    font-size: 56px;\\r\\n}\\r\\n\\r\\n.text-style {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.big-text-style {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .big-head-style {\\r\\n        font-size: 36px;\\r\\n    }\\r\\n\\r\\n    .text-style {\\r\\n        font-size: 16px;\\r\\n    }\\r\\n\\r\\n    .big-text-style {\\r\\n        font-size: 18px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.loader {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n/*Main End*/\\r\\n\\r\\n/*Container*/\\r\\n\\r\\n.container {\\r\\n    padding: 0 76px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    .container {\\r\\n        padding: 0 56px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 696px) {\\r\\n    .container {\\r\\n        padding: 0 32px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        padding: 0 16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*Container End*/\\r\\n\\r\\n/*==========Navbar==========*/\\r\\n\\r\\nnav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\nnav .navbar-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 32px;\\r\\n    padding-bottom: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .left {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .right ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham {\\r\\n    display: none;\\r\\n    gap: 5px;\\r\\n    flex-direction: column;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham span {\\r\\n    height: 2px;\\r\\n    background-color: #000000;\\r\\n    width: 20px;\\r\\n    transition: all 1.2s cubic-bezier(0.87, 0, 0.13, 1);\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(1) {\\r\\n    rotate: 405deg;\\r\\n    translate: 0 7px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(3) {\\r\\n    rotate: -405deg;\\r\\n    translate: 0 -7px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(2) {\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    nav .navbar-container .right {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    nav .navbar-container .ham {\\r\\n        display: flex;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Navbar End==========*/\\r\\n\\r\\n/*==========Movie Banner==========*/\\r\\n\\r\\n.mb {\\r\\n    margin: 150px 0 100px;\\r\\n}\\r\\n\\r\\n.mb .mb-container {\\r\\n    position: relative;\\r\\n    border-radius: 50px;\\r\\n    width: 100%;\\r\\n    height: 500px;\\r\\n    overflow: hidden;\\r\\n    padding: 16px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .abs-bg {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 101;\\r\\n    object-fit: cover;\\r\\n    object-position: center;\\r\\n}\\r\\n\\r\\n.mb .mb-container .overlay {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\\r\\n    z-index: 102;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content {\\r\\n    position: relative;\\r\\n    z-index: 105;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    color: white;\\r\\n    width: 60%;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content .head {\\r\\n    color: var(--clr-sec);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 810px) {\\r\\n    .mb .mb-container .content {\\r\\n        width: 80%;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Movie Banner End==========*/\\r\\n\\r\\n/*==========Genre Grid==========*/\\r\\n\\r\\n.gg {\\r\\n    margin: 100px 0;\\r\\n}\\r\\n\\r\\n.gg .gg-container {\\r\\n    padding: 16px;\\r\\n    border-radius: 50px;\\r\\n}\\r\\n\\r\\n/*==========Genre Grid End==========*/\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL05leHRNb3ZpZS5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDhGQUE4RiwyQkFBMkIsS0FBSyxvQ0FBb0MsK0JBQStCLEtBQUssY0FBYyxtQkFBbUIsa0JBQWtCLDZDQUE2QywyQkFBMkIsS0FBSyxvQkFBb0IsMkJBQTJCLEtBQUsseUJBQXlCLCtDQUErQyxrQ0FBa0MseUJBQXlCLDJCQUEyQiwrREFBK0QsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsseUJBQXlCLHdCQUF3QixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyx5QkFBeUIsd0JBQXdCLEtBQUssOENBQThDLHlCQUF5Qiw0QkFBNEIsU0FBUyx5QkFBeUIsNEJBQTRCLFNBQVMsNkJBQTZCLDRCQUE0QixTQUFTLEtBQUssaUJBQWlCLDJCQUEyQixLQUFLLDZEQUE2RCx3QkFBd0IsMkJBQTJCLEtBQUssOENBQThDLG9CQUFvQiw0QkFBNEIsU0FBUyxLQUFLLDhDQUE4QyxvQkFBb0IsNEJBQTRCLFNBQVMsS0FBSyw4Q0FBOEMsb0JBQW9CLDRCQUE0QixTQUFTLEtBQUssNEVBQTRFLHdCQUF3QixlQUFlLGdCQUFnQixxQkFBcUIscUJBQXFCLEtBQUssK0JBQStCLHNCQUFzQiw0QkFBNEIsdUNBQXVDLDBCQUEwQiw2QkFBNkIsS0FBSyxxQ0FBcUMsc0JBQXNCLCtCQUErQixpQkFBaUIsS0FBSyx5Q0FBeUMsOEJBQThCLHNCQUFzQiw0QkFB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MkJBQTJCLHNCQUFzQiw0QkFBNEIsS0FBSyxpRUFBaUU7QUFDamhWO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL05leHRNb3ZpZS5jc3M/MGZmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypHbG9iYWwgU3R5bGVzaGVldCovXFxyXFxuXFxyXFxuLypNYWluKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tY2xyLXNlYzogI0ZGOTg0MztcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOmFmdGVyLFxcclxcbio6YmVmb3JlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBodG1sIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2l4dHktZm91ciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2l4dHlmb3VyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkJMRURcXFwiIDAsXFxyXFxuICAgIFxcXCJTQ0FOXFxcIiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1oZWFkLXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJpZy10ZXh0LXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuYmlnLWhlYWQtc3R5bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXh0LXN0eWxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYmlnLXRleHQtc3R5bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5sb2FkZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qTWFpbiBFbmQqL1xcclxcblxcclxcbi8qQ29udGFpbmVyKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMCA3NnB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMCA1NnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NnB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAzMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qQ29udGFpbmVyIEVuZCovXFxyXFxuXFxyXFxuLyo9PT09PT09PT09TmF2YmFyPT09PT09PT09PSovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAucmlnaHQgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5oYW0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmhhbSBzcGFuIHtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMS4ycyBjdWJpYy1iZXppZXIoMC44NywgMCwgMC4xMywgMSk7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtLmFjdGl2ZSBzcGFuOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHJvdGF0ZTogNDA1ZGVnO1xcclxcbiAgICB0cmFuc2xhdGU6IDAgN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmhhbS5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMykge1xcclxcbiAgICByb3RhdGU6IC00MDVkZWc7XFxyXFxuICAgIHRyYW5zbGF0ZTogMCAtN3B4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmhhbS5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMikge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICBuYXYgLm5hdmJhci1jb250YWluZXIgLnJpZ2h0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbmF2IC5uYXZiYXItY29udGFpbmVyIC5oYW0ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKj09PT09PT09PT1OYXZiYXIgRW5kPT09PT09PT09PSovXFxyXFxuXFxyXFxuLyo9PT09PT09PT09TW92aWUgQmFubmVyPT09PT09PT09PSovXFxyXFxuXFxyXFxuLm1iIHtcXHJcXG4gICAgbWFyZ2luOiAxNTBweCAwIDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5hYnMtYmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTAxO1xcclxcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIC1vLW9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDAuOSksIHRyYW5zcGFyZW50KTtcXHJcXG4gICAgei1pbmRleDogMTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciAuY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTA1O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciAuY29udGVudCAuaGVhZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItc2VjKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEwcHgpIHtcXHJcXG4gICAgLm1iIC5tYi1jb250YWluZXIgLmNvbnRlbnQge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKj09PT09PT09PT1Nb3ZpZSBCYW5uZXIgRW5kPT09PT09PT09PSovXFxyXFxuXFxyXFxuLyo9PT09PT09PT09R2VucmUgR3JpZD09PT09PT09PT0qL1xcclxcblxcclxcbi5nZyB7XFxyXFxuICAgIG1hcmdpbjogMTAwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdnIC5nZy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKj09PT09PT09PT1HZW5yZSBHcmlkIEVuZD09PT09PT09PT0qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvTmV4dE1vdmllLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7O0FBRXBCLE9BQU87O0FBRVA7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEI7WUFDUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsV0FBVzs7QUFFWCxZQUFZOztBQUVaO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQSxnQkFBZ0I7O0FBRWhCLDZCQUE2Qjs7QUFFN0I7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQSxpQ0FBaUM7O0FBRWpDLG1DQUFtQzs7QUFFbkM7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLDBCQUF1QjtPQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLG1FQUFtRTtJQUNuRSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBLHVDQUF1Qzs7QUFFdkMsaUNBQWlDOztBQUVqQztJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBLHFDQUFxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKkdsb2JhbCBTdHlsZXNoZWV0Ki9cXHJcXG5cXHJcXG4vKk1haW4qL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1jbHItc2VjOiAjRkY5ODQzO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6YWZ0ZXIsXFxyXFxuKjpiZWZvcmUge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmJvZHksIGh0bWwge1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaXh0eS1mb3VyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaXh0eWZvdXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiQkxFRFxcXCIgMCxcXHJcXG4gICAgXFxcIlNDQU5cXFwiIDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkLXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLWhlYWQtc3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDU2cHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLXRleHQtc3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5iaWctaGVhZC1zdHlsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRleHQtc3R5bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5iaWctdGV4dC1zdHlsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypNYWluIEVuZCovXFxyXFxuXFxyXFxuLypDb250YWluZXIqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDc2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDU2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk2cHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDMycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLypDb250YWluZXIgRW5kKi9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1OYXZiYXI9PT09PT09PT09Ki9cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5yaWdodCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmhhbSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtIHNwYW4ge1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxLjJzIGN1YmljLWJlemllcigwLjg3LCAwLCAwLjEzLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5oYW0uYWN0aXZlIHNwYW46bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgcm90YXRlOiA0MDVkZWc7XFxyXFxuICAgIHRyYW5zbGF0ZTogMCA3cHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtLmFjdGl2ZSBzcGFuOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIHJvdGF0ZTogLTQwNWRlZztcXHJcXG4gICAgdHJhbnNsYXRlOiAwIC03cHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtLmFjdGl2ZSBzcGFuOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICAgIG5hdiAubmF2YmFyLWNvbnRhaW5lciAucmlnaHQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYgLm5hdmJhci1jb250YWluZXIgLmhhbSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhciBFbmQ9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1Nb3ZpZSBCYW5uZXI9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4ubWIge1xcclxcbiAgICBtYXJnaW46IDE1MHB4IDAgMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmFicy1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDAuOSksIHRyYW5zcGFyZW50KTtcXHJcXG4gICAgei1pbmRleDogMTAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciAuY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTA1O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciAuY29udGVudCAuaGVhZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItc2VjKTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODEwcHgpIHtcXHJcXG4gICAgLm1iIC5tYi1jb250YWluZXIgLmNvbnRlbnQge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKj09PT09PT09PT1Nb3ZpZSBCYW5uZXIgRW5kPT09PT09PT09PSovXFxyXFxuXFxyXFxuLyo9PT09PT09PT09R2VucmUgR3JpZD09PT09PT09PT0qL1xcclxcblxcclxcbi5nZyB7XFxyXFxuICAgIG1hcmdpbjogMTAwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdnIC5nZy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKj09PT09PT09PT1HZW5yZSBHcmlkIEVuZD09PT09PT09PT0qL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/NextMovie.css\n"));

/***/ })

});