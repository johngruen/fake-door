(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(155);




var NotFoundPage = function NotFoundPage() {
  var meta = {
    title: "404",
    description: "404"
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object.assign({
    meta: meta
  }, {
    rootClass: "404"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/firefox-logo-27d319b45926552180640e6c91290e5e.png";

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(156);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_firefox_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(153);
/* harmony import */ var _images_firefox_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_firefox_logo_png__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(_ref) {
  var title = _ref.title,
      description = _ref.description,
      rootClass = _ref.rootClass,
      _ref$favicon = _ref.favicon,
      favicon = _ref$favicon === void 0 ? null : _ref$favicon,
      children = _ref.children;
  var pageFavicon = favicon ? favicon : _images_firefox_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, {
    title: title,
    meta: [{
      name: 'description',
      content: description
    }]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: pageFavicon
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "layout layout--" + rootClass + " " + rootClass
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=component---src-pages-404-js-31a32596c9d2242aeb2c.js.map