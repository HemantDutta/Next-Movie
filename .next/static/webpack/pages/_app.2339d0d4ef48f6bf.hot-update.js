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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*Global Stylesheet*/\\r\\n\\r\\n/*Main*/\\r\\n\\r\\n:root {\\r\\n    --clr-sec: #FF9843;\\r\\n}\\r\\n\\r\\n*,\\r\\n*:after,\\r\\n*:before {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: \\\"Poppins\\\", sans-serif;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.sixty-four {\\r\\n    font-family: \\\"Sixtyfour\\\", sans-serif;\\r\\n    font-optical-sizing: auto;\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n    font-variation-settings: \\\"BLED\\\" 0,\\r\\n    \\\"SCAN\\\" 0;\\r\\n}\\r\\n\\r\\n.head-style {\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n.big-head-style {\\r\\n    font-size: 56px;\\r\\n}\\r\\n\\r\\n.text-style {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.big-text-style {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .big-head-style {\\r\\n        font-size: 36px;\\r\\n    }\\r\\n\\r\\n    .text-style {\\r\\n        font-size: 16px;\\r\\n    }\\r\\n\\r\\n    .big-text-style {\\r\\n        font-size: 18px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.loader {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n/*Main End*/\\r\\n\\r\\n/*Container*/\\r\\n\\r\\n.container {\\r\\n    padding: 0 76px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    .container {\\r\\n        padding: 0 56px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 696px) {\\r\\n    .container {\\r\\n        padding: 0 32px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        padding: 0 16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*Container End*/\\r\\n\\r\\n/*==========Navbar==========*/\\r\\n\\r\\nnav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\nnav .navbar-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 32px;\\r\\n    padding-bottom: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .left {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .right ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham {\\r\\n    display: none;\\r\\n    gap: 5px;\\r\\n    flex-direction: column;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham span {\\r\\n    height: 2px;\\r\\n    background-color: #000000;\\r\\n    width: 20px;\\r\\n    transition: all 1.2s cubic-bezier(0.87, 0, 0.13, 1);\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(1) {\\r\\n    rotate: 405deg;\\r\\n    translate: 0 7px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(3) {\\r\\n    rotate: -405deg;\\r\\n    translate: 0 -7px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(2) {\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    nav .navbar-container .right {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    nav .navbar-container .ham {\\r\\n        display: flex;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Navbar End==========*/\\r\\n\\r\\n/*==========Movie Banner==========*/\\r\\n\\r\\n.mb {\\r\\n    margin: 150px 0 100px;\\r\\n}\\r\\n\\r\\n.mb .mb-container {\\r\\n    position: relative;\\r\\n    border-radius: 50px;\\r\\n    width: 100%;\\r\\n    height: 500px;\\r\\n    overflow: hidden;\\r\\n    padding: 16px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .abs-bg {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 101;\\r\\n    -o-object-fit: cover;\\r\\n       object-fit: cover;\\r\\n    -o-object-position: center;\\r\\n       object-position: center;\\r\\n}\\r\\n\\r\\n.mb .mb-container .overlay {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\\r\\n    z-index: 102;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content {\\r\\n    position: relative;\\r\\n    z-index: 105;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    color: white;\\r\\n    width: 60%;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content .head {\\r\\n    color: var(--clr-sec);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 810px) {\\r\\n    .mb .mb-container .content {\\r\\n        width: 80%;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Movie Banner End==========*/\\r\\n\\r\\n/*==========Genre Grid==========*/\\r\\n\\r\\n.gg {\\r\\n    margin: 100px 0;\\r\\n}\\r\\n\\r\\n.gg .gg-container {\\r\\n    padding: 16px;\\r\\n}\\r\\n\\r\\n/*==========Genre Grid End==========*/\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/NextMovie.css\"],\"names\":[],\"mappings\":\"AAAA,oBAAoB;;AAEpB,OAAO;;AAEP;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,SAAS;IACT,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,oCAAoC;IACpC,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB;YACQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI,kBAAkB;AACtB;;AAEA,WAAW;;AAEX,YAAY;;AAEZ;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA,gBAAgB;;AAEhB,6BAA6B;;AAE7B;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,mDAAmD;AACvD;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA,iCAAiC;;AAEjC,mCAAmC;;AAEnC;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,oBAAiB;OAAjB,iBAAiB;IACjB,0BAAuB;OAAvB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,mEAAmE;IACnE,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,QAAQ;AACZ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA,uCAAuC;;AAEvC,iCAAiC;;AAEjC;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA,qCAAqC\",\"sourcesContent\":[\"/*Global Stylesheet*/\\r\\n\\r\\n/*Main*/\\r\\n\\r\\n:root {\\r\\n    --clr-sec: #FF9843;\\r\\n}\\r\\n\\r\\n*,\\r\\n*:after,\\r\\n*:before {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: \\\"Poppins\\\", sans-serif;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody, html {\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n\\r\\n.sixty-four {\\r\\n    font-family: \\\"Sixtyfour\\\", sans-serif;\\r\\n    font-optical-sizing: auto;\\r\\n    font-weight: 400;\\r\\n    font-style: normal;\\r\\n    font-variation-settings: \\\"BLED\\\" 0,\\r\\n    \\\"SCAN\\\" 0;\\r\\n}\\r\\n\\r\\n.head-style {\\r\\n    font-size: 32px;\\r\\n}\\r\\n\\r\\n.big-head-style {\\r\\n    font-size: 56px;\\r\\n}\\r\\n\\r\\n.text-style {\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.big-text-style {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .big-head-style {\\r\\n        font-size: 36px;\\r\\n    }\\r\\n\\r\\n    .text-style {\\r\\n        font-size: 16px;\\r\\n    }\\r\\n\\r\\n    .big-text-style {\\r\\n        font-size: 18px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.loader {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n/*Main End*/\\r\\n\\r\\n/*Container*/\\r\\n\\r\\n.container {\\r\\n    padding: 0 76px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    .container {\\r\\n        padding: 0 56px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 696px) {\\r\\n    .container {\\r\\n        padding: 0 32px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 500px) {\\r\\n    .container {\\r\\n        padding: 0 16px;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*Container End*/\\r\\n\\r\\n/*==========Navbar==========*/\\r\\n\\r\\nnav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100vw;\\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\nnav .navbar-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 32px;\\r\\n    padding-bottom: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .left {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .right ul {\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 32px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham {\\r\\n    display: none;\\r\\n    gap: 5px;\\r\\n    flex-direction: column;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham span {\\r\\n    height: 2px;\\r\\n    background-color: #000000;\\r\\n    width: 20px;\\r\\n    transition: all 1.2s cubic-bezier(0.87, 0, 0.13, 1);\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(1) {\\r\\n    rotate: 405deg;\\r\\n    translate: 0 7px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(3) {\\r\\n    rotate: -405deg;\\r\\n    translate: 0 -7px;\\r\\n}\\r\\n\\r\\nnav .navbar-container .ham.active span:nth-child(2) {\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 991px) {\\r\\n    nav .navbar-container .right {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    nav .navbar-container .ham {\\r\\n        display: flex;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Navbar End==========*/\\r\\n\\r\\n/*==========Movie Banner==========*/\\r\\n\\r\\n.mb {\\r\\n    margin: 150px 0 100px;\\r\\n}\\r\\n\\r\\n.mb .mb-container {\\r\\n    position: relative;\\r\\n    border-radius: 50px;\\r\\n    width: 100%;\\r\\n    height: 500px;\\r\\n    overflow: hidden;\\r\\n    padding: 16px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .abs-bg {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 101;\\r\\n    object-fit: cover;\\r\\n    object-position: center;\\r\\n}\\r\\n\\r\\n.mb .mb-container .overlay {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);\\r\\n    z-index: 102;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content {\\r\\n    position: relative;\\r\\n    z-index: 105;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    color: white;\\r\\n    width: 60%;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n.mb .mb-container .content .head {\\r\\n    color: var(--clr-sec);\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 810px) {\\r\\n    .mb .mb-container .content {\\r\\n        width: 80%;\\r\\n    }\\r\\n}\\r\\n\\r\\n/*==========Movie Banner End==========*/\\r\\n\\r\\n/*==========Genre Grid==========*/\\r\\n\\r\\n.gg {\\r\\n    margin: 100px 0;\\r\\n}\\r\\n\\r\\n.gg .gg-container {\\r\\n    padding: 16px;\\r\\n}\\r\\n\\r\\n/*==========Genre Grid End==========*/\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL05leHRNb3ZpZS5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDhGQUE4RiwyQkFBMkIsS0FBSyxvQ0FBb0MsK0JBQStCLEtBQUssY0FBYyxtQkFBbUIsa0JBQWtCLDZDQUE2QywyQkFBMkIsS0FBSyxvQkFBb0IsMkJBQTJCLEtBQUsseUJBQXlCLCtDQUErQyxrQ0FBa0MseUJBQXlCLDJCQUEyQiwrREFBK0QsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsseUJBQXlCLHdCQUF3QixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyx5QkFBeUIsd0JBQXdCLEtBQUssOENBQThDLHlCQUF5Qiw0QkFBNEIsU0FBUyx5QkFBeUIsNEJBQTRCLFNBQVMsNkJBQTZCLDRCQUE0QixTQUFTLEtBQUssaUJBQWlCLDJCQUEyQixLQUFLLDZEQUE2RCx3QkFBd0IsMkJBQTJCLEtBQUssOENBQThDLG9CQUFvQiw0QkFBNEIsU0FBUyxLQUFLLDhDQUE4QyxvQkFBb0IsNEJBQTRCLFNBQVMsS0FBSyw4Q0FBOEMsb0JBQW9CLDRCQUE0QixTQUFTLEtBQUssNEVBQTRFLHdCQUF3QixlQUFlLGdCQUFnQixxQkFBcUIscUJBQXFCLEtBQUssK0JBQStCLHNCQUFzQiw0QkFBNEIsdUNBQXVDLDBCQUEwQiw2QkFBNkIsS0FBSyxxQ0FBcUMsc0JBQXNCLCtCQUErQixpQkFBaUIsS0FBSyx5Q0FBeUMsOEJBQThCLHNCQUFzQiw0QkFB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QixLQUFLLGlFQUFpRTtBQUM3OFU7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvTmV4dE1vdmllLmNzcz8wZmY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKkdsb2JhbCBTdHlsZXNoZWV0Ki9cXHJcXG5cXHJcXG4vKk1haW4qL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1jbHItc2VjOiAjRkY5ODQzO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6YWZ0ZXIsXFxyXFxuKjpiZWZvcmUge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmJvZHksIGh0bWwge1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaXh0eS1mb3VyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTaXh0eWZvdXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LW9wdGljYWwtc2l6aW5nOiBhdXRvO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiQkxFRFxcXCIgMCxcXHJcXG4gICAgXFxcIlNDQU5cXFwiIDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkLXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLWhlYWQtc3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDU2cHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LXN0eWxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLXRleHQtc3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5iaWctaGVhZC1zdHlsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRleHQtc3R5bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5iaWctdGV4dC1zdHlsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypNYWluIEVuZCovXFxyXFxuXFxyXFxuLypDb250YWluZXIqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwIDc2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDU2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk2cHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDMycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmNvbnRhaW5lciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLypDb250YWluZXIgRW5kKi9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1OYXZiYXI9PT09PT09PT09Ki9cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDMycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5yaWdodCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmhhbSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtIHNwYW4ge1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxLjJzIGN1YmljLWJlemllcigwLjg3LCAwLCAwLjEzLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5oYW0uYWN0aXZlIHNwYW46bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgcm90YXRlOiA0MDVkZWc7XFxyXFxuICAgIHRyYW5zbGF0ZTogMCA3cHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtLmFjdGl2ZSBzcGFuOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIHJvdGF0ZTogLTQwNWRlZztcXHJcXG4gICAgdHJhbnNsYXRlOiAwIC03cHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtLmFjdGl2ZSBzcGFuOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICAgIG5hdiAubmF2YmFyLWNvbnRhaW5lciAucmlnaHQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYgLm5hdmJhci1jb250YWluZXIgLmhhbSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhciBFbmQ9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1Nb3ZpZSBCYW5uZXI9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4ubWIge1xcclxcbiAgICBtYXJnaW46IDE1MHB4IDAgMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIgLmFicy1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDE7XFxyXFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgLW8tb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciAub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMC45KSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgICB6LWluZGV4OiAxMDI7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5jb250ZW50IC5oZWFkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1zZWMpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTBweCkge1xcclxcbiAgICAubWIgLm1iLWNvbnRhaW5lciAuY29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU1vdmllIEJhbm5lciBFbmQ9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1HZW5yZSBHcmlkPT09PT09PT09PSovXFxyXFxuXFxyXFxuLmdnIHtcXHJcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2cgLmdnLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PUdlbnJlIEdyaWQgRW5kPT09PT09PT09PSovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9OZXh0TW92aWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9CQUFvQjs7QUFFcEIsT0FBTzs7QUFFUDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtZQUNRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxXQUFXOztBQUVYLFlBQVk7O0FBRVo7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBLGdCQUFnQjs7QUFFaEIsNkJBQTZCOztBQUU3QjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBLGlDQUFpQzs7QUFFakMsbUNBQW1DOztBQUVuQztJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsMEJBQXVCO09BQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUVBQW1FO0lBQ25FLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUEsdUNBQXVDOztBQUV2QyxpQ0FBaUM7O0FBRWpDO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEscUNBQXFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qR2xvYmFsIFN0eWxlc2hlZXQqL1xcclxcblxcclxcbi8qTWFpbiovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWNsci1zZWM6ICNGRjk4NDM7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjphZnRlcixcXHJcXG4qOmJlZm9yZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgaHRtbCB7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpeHR5LWZvdXIge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlNpeHR5Zm91clxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJCTEVEXFxcIiAwLFxcclxcbiAgICBcXFwiU0NBTlxcXCIgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtc3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5iaWctaGVhZC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtc3R5bGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5iaWctdGV4dC1zdHlsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgLmJpZy1oZWFkLXN0eWxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGV4dC1zdHlsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJpZy10ZXh0LXN0eWxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKk1haW4gRW5kKi9cXHJcXG5cXHJcXG4vKkNvbnRhaW5lciovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNzZweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTZweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMzJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKkNvbnRhaW5lciBFbmQqL1xcclxcblxcclxcbi8qPT09PT09PT09PU5hdmJhcj09PT09PT09PT0qL1xcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAubGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLnJpZ2h0IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5oYW0gc3BhbiB7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDEuMnMgY3ViaWMtYmV6aWVyKDAuODcsIDAsIDAuMTMsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLm5hdmJhci1jb250YWluZXIgLmhhbS5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICByb3RhdGU6IDQwNWRlZztcXHJcXG4gICAgdHJhbnNsYXRlOiAwIDdweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5oYW0uYWN0aXZlIHNwYW46bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgcm90YXRlOiAtNDA1ZGVnO1xcclxcbiAgICB0cmFuc2xhdGU6IDAgLTdweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5uYXZiYXItY29udGFpbmVyIC5oYW0uYWN0aXZlIHNwYW46bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXHJcXG4gICAgbmF2IC5uYXZiYXItY29udGFpbmVyIC5yaWdodCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG5hdiAubmF2YmFyLWNvbnRhaW5lciAuaGFtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyo9PT09PT09PT09TmF2YmFyIEVuZD09PT09PT09PT0qL1xcclxcblxcclxcbi8qPT09PT09PT09PU1vdmllIEJhbm5lcj09PT09PT09PT0qL1xcclxcblxcclxcbi5tYiB7XFxyXFxuICAgIG1hcmdpbjogMTUwcHggMCAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIC5tYi1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciAuYWJzLWJnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwMTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWIgLm1iLWNvbnRhaW5lciAub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMC45KSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgICB6LWluZGV4OiAxMDI7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tYiAubWItY29udGFpbmVyIC5jb250ZW50IC5oZWFkIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1zZWMpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTBweCkge1xcclxcbiAgICAubWIgLm1iLWNvbnRhaW5lciAuY29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PU1vdmllIEJhbm5lciBFbmQ9PT09PT09PT09Ki9cXHJcXG5cXHJcXG4vKj09PT09PT09PT1HZW5yZSBHcmlkPT09PT09PT09PSovXFxyXFxuXFxyXFxuLmdnIHtcXHJcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2cgLmdnLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi8qPT09PT09PT09PUdlbnJlIEdyaWQgRW5kPT09PT09PT09PSovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/NextMovie.css\n"));

/***/ })

});