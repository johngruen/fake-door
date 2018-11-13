(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/components/Layout/index.js
var Layout = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(177);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(179);

// CONCATENATED MODULE: ./src/utils/utils.js


var isValidHex = function isValidHex(hex) {
  return /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(hex);
};
var lightenDarkenColor = function lightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;else if (r < 0) r = 0;
  var b = (num >> 8 & 0x00FF) + amt;
  if (b > 255) b = 255;else if (b < 0) b = 0;
  var g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;else if (g < 0) g = 0;
  return (usePound ? '#' : '') + (g | b << 8 | r << 16).toString(16);
};
// EXTERNAL MODULE: ./src/templates/ProductFacets/index.scss
var templates_ProductFacets = __webpack_require__(180);

// CONCATENATED MODULE: ./src/templates/ProductFacets/index.js





var ProductFacets_ProductFacets = function ProductFacets(_ref) {
  var facets = _ref.facets,
      bgColor = _ref.bgColor;
  return react_default.a.createElement(react_default.a.Fragment, null, facets.map(function (facet, index) {
    return react_default.a.createElement("div", {
      className: "product-facet",
      key: index
    }, index % 2 === 0 && react_default.a.createElement("div", {
      className: "product-facet__bg",
      style: {
        background: "linear-gradient(135deg, " + bgColor + "," + lightenDarkenColor(bgColor, -20) + ")"
      }
    }), react_default.a.createElement("section", null, react_default.a.createElement("div", {
      className: "product-facet__content"
    }, react_default.a.createElement("h2", null, facet.title), react_default.a.createElement("p", null, facet.text)), react_default.a.createElement("div", {
      className: "product-facet__image"
    }, react_default.a.createElement("img", {
      alt: "",
      src: facet.image.publicURL,
      width: "100%",
      height: "auto"
    }))));
  }));
};

/* harmony default export */ var src_templates_ProductFacets = (ProductFacets_ProductFacets);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(152);

// EXTERNAL MODULE: ./src/templates/ProductFooter/index.scss
var templates_ProductFooter = __webpack_require__(181);

// CONCATENATED MODULE: ./src/templates/ProductFooter/index.js




var ProductFooter_ProductFooter = function ProductFooter() {
  return react_default.a.createElement("footer", {
    className: "product-footer"
  }, react_default.a.createElement("h4", null, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/"
  }, "Legal")), react_default.a.createElement("h4", null, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/"
  }, "Privacy")), react_default.a.createElement("h4", null, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/"
  }, "Our Team")), react_default.a.createElement("h4", null, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/"
  }, "Careers")));
};

/* harmony default export */ var src_templates_ProductFooter = (ProductFooter_ProductFooter);
// EXTERNAL MODULE: ./src/templates/ProductHeader/index.scss
var templates_ProductHeader = __webpack_require__(182);

// CONCATENATED MODULE: ./src/templates/ProductHeader/index.js





var ProductHeader_ProductHeader = function ProductHeader(_ref) {
  var name = _ref.name,
      icon = _ref.icon;
  return react_default.a.createElement("div", {
    className: "product-header"
  }, react_default.a.createElement("div", {
    className: "product-header__container"
  }, react_default.a.createElement("h2", null, react_default.a.createElement("span", {
    className: "product-header__app-icon",
    style: {
      backgroundImage: "url(" + icon + ")"
    }
  }), name), react_default.a.createElement("ul", null, react_default.a.createElement("li", null, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/"
  }, "Learn More")), react_default.a.createElement("li", null, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/"
  }, "Our Story")), react_default.a.createElement("li", null, react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/"
  }, "Download Now")))));
};

/* harmony default export */ var src_templates_ProductHeader = (ProductHeader_ProductHeader);
// EXTERNAL MODULE: ./src/templates/ProductHero/index.scss
var templates_ProductHero = __webpack_require__(183);

// CONCATENATED MODULE: ./src/templates/ProductHero/index.js






var ProductHero_ProductHero = function ProductHero(_ref) {
  var hero = _ref.hero;
  var _hero$ = hero[0],
      title = _hero$.title,
      text = _hero$.text,
      image = _hero$.image,
      cta = _hero$.cta;

  var getColor = function getColor() {
    var bc = '0a84ff';

    if (typeof URLSearchParams === 'function') {
      var urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has('button') && isValidHex(urlParams.get('button'))) {
        bc = urlParams.get('button');
      }
    }

    console.log(bc);
    return "#" + bc;
  };

  return react_default.a.createElement("div", {
    className: "product-hero"
  }, react_default.a.createElement("header", null, react_default.a.createElement("div", {
    className: "product-hero__content"
  }, react_default.a.createElement("h1", null, title), react_default.a.createElement("p", null, text), react_default.a.createElement(gatsby_browser_entry["Link"], {
    to: "/"
  }, console.log('rendering'), react_default.a.createElement("button", {
    style: {
      backgroundColor: getColor()
    }
  }, cta))), react_default.a.createElement("div", {
    className: "product-hero__image"
  }, react_default.a.createElement("img", {
    src: image.publicURL,
    alt: text,
    width: "100%",
    height: "auto"
  }))));
};

/* harmony default export */ var src_templates_ProductHero = (ProductHero_ProductHero);
// EXTERNAL MODULE: ./src/templates/Product/index.scss
var templates_Product = __webpack_require__(184);

// EXTERNAL MODULE: ./src/images/firefox-logo.png
var firefox_logo = __webpack_require__(153);
var firefox_logo_default = /*#__PURE__*/__webpack_require__.n(firefox_logo);

// CONCATENATED MODULE: ./src/templates/Product/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });












var Product_Product = function Product(_ref) {
  var data = _ref.data;
  var urlParams, isFirefox, bgColor;
  var classList = 'product';

  if (typeof URLSearchParams === 'function') {
    urlParams = new URLSearchParams(window.location.search);
    isFirefox = urlParams.has('branding') && urlParams.get('branding') === 'firefox';
    classList = isFirefox ? classList + " product--is-firefox" : classList;
    bgColor = urlParams.has('bg') && isValidHex(urlParams.get('bg')) ? urlParams.get('bg') : 'd1e6f5';
    urlParams.get('button');
  } else {
    bgColor = 'd1e6f5';
  }

  bgColor = "#" + bgColor;
  var _data$markdownRemark$ = data.markdownRemark.frontmatter.product[0],
      name = _data$markdownRemark$.name,
      icon = _data$markdownRemark$.icon,
      hero = _data$markdownRemark$.hero,
      facets = _data$markdownRemark$.facets;
  var productName = isFirefox ? "Firefox " + name : name;
  var productIconPath = isFirefox ? firefox_logo_default.a : icon.publicURL;
  return react_default.a.createElement(Layout["a" /* default */], {
    rootClass: classList,
    title: productName,
    description: hero[0].title,
    favicon: productIconPath
  }, react_default.a.createElement(src_templates_ProductHeader, {
    icon: productIconPath,
    name: productName
  }), react_default.a.createElement(src_templates_ProductHero, {
    hero: hero
  }), react_default.a.createElement(src_templates_ProductFacets, {
    facets: facets,
    bgColor: bgColor
  }), react_default.a.createElement(src_templates_ProductFooter, null));
};

/* harmony default export */ var src_templates_Product = __webpack_exports__["default"] = (Product_Product);
var query = "264460395";

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(35);

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(157));

var _extends2 = _interopRequireDefault(__webpack_require__(158));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(7));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(51));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(52));

var _propTypes = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(15);

var _gatsby = __webpack_require__(152);

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("/fake-door" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isCurrent = _ref.isCurrent;

      if (isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    this.props.innerRef && this.props.innerRef(ref);

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _gatsby.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $ref = _this$props.ref,
        $innerRef = _this$props.innerRef,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "ref", "innerRef", "state", "replace"]);
    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        // eslint-disable-line
        _onMouseEnter && _onMouseEnter(e);

        ___loader.hovering((0, _gatsby.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        // eslint-disable-line
        _onClick && _onClick(e);

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  innerRef: _propTypes.default.func,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});
var _default = GatsbyLink;
exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(151);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(154);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["a"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/firefox-logo-27d319b45926552180640e6c91290e5e.png";

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (true) {
  module.exports = preferDefault(__webpack_require__(159));
} else {}

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

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






var ProdPageRenderer = function ProdPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_4__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object.assign({
    location: location,
    pageResources: pageResources
  }, pageResources.json));
};

ProdPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(16) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(10);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(178);
var anObject = __webpack_require__(10);
var $flags = __webpack_require__(169);
var DESCRIPTORS = __webpack_require__(16);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(17)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(18)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(16) && /./g.flags != 'g') __webpack_require__(25).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(169)
});


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(17)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=component---src-templates-product-index-js-86e72f2f0578bd7499c8.js.map