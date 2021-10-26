webpackHotUpdate_N_E("pages/writings/[slug]",{

/***/ "./pages/writings/[slug].js":
/*!**********************************!*\
  !*** ./pages/writings/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll-progress-bar */ "./node_modules/react-scroll-progress-bar/build/index.js");
/* harmony import */ var react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reading-time */ "./node_modules/reading-time/index.js");
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/CodeBlock */ "./components/CodeBlock.js");



var _jsxFileName = "C:\\Users\\user\\Downloads\\telmo-master\\telmo-master\\pages\\writings\\[slug].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function Writing(_ref) {
  var _this = this;

  var content = _ref.content,
      data = _ref.data;
  var frontmatter = data;
  var title = frontmatter.title,
      author = frontmatter.author;
  var avatar = "Timmy";

  var _readingTime = reading_time__WEBPACK_IMPORTED_MODULE_9___default()(content),
      text = _readingTime.text;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "writing-progress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    height: "5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    secondaryPage: true,
    noHead: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      marginTop: 50
    },
    className: "article-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "back-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "back")), __jsx("h1", {
    className: "main-h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, title), __jsx("div", {
    className: "reading-time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__["BookOpen"], {
    size: "16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), text), __jsx("div", {
    className: "author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://instagram.com/".concat(author.twitter),
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, avatar, author.name)), __jsx("div", {
    className: "writing-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: content,
    escapeHtml: false,
    renderers: {
      code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_11__["default"],
      link: function link(props) {
        if (!props.href.startsWith('http')) {
          return __jsx("a", {
            href: props.href,
            rel: "nofollow noreferrer noopener",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }
          }, props.children);
        }

        return __jsx("a", {
          href: props.href,
          rel: "nofollow noreferrer noopener",
          target: "_blank",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 26
          }
        }, props.children);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hope-liked",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Hope this helped you in any way.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), "\u2014 Telmo")))));
}

_c = Writing;

Writing.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var slug, content, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            slug = context.query.slug;
            _context.next = 3;
            return __webpack_require__("./writings lazy recursive ^\\.\\/.*\\.md$")("./".concat(slug, ".md"));

          case 3:
            content = _context.sent;
            data = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(content["default"]);
            return _context.abrupt("return", _objectSpread({}, data));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Writing);

var _c;

$RefreshReg$(_c, "Writing");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGluZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbIldyaXRpbmciLCJjb250ZW50IiwiZGF0YSIsImZyb250bWF0dGVyIiwidGl0bGUiLCJhdXRob3IiLCJhdmF0YXIiLCJyZWFkaW5nVGltZSIsInRleHQiLCJtYXJnaW5Ub3AiLCJ0d2l0dGVyIiwibmFtZSIsImNvZGUiLCJDb2RlQmxvY2siLCJsaW5rIiwicHJvcHMiLCJocmVmIiwic3RhcnRzV2l0aCIsImNoaWxkcmVuIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJxdWVyeSIsIm1hdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBakJDLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNsQyxNQUFNQyxXQUFXLEdBQUdELElBQXBCO0FBQ0EsTUFBUUUsS0FBUixHQUEwQkQsV0FBMUIsQ0FBUUMsS0FBUjtBQUFBLE1BQWVDLE1BQWYsR0FBMEJGLFdBQTFCLENBQWVFLE1BQWY7QUFDQSxNQUFNQyxNQUFNLFVBQVo7O0FBQ0EscUJBQWlCQyxtREFBVyxDQUFDTixPQUFELENBQTVCO0FBQUEsTUFBUU8sSUFBUixnQkFBUUEsSUFBUjs7QUFFQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQWEsVUFBTSxFQUFDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBS0UsTUFBQywyREFBRDtBQUFRLGlCQUFhLE1BQXJCO0FBQXNCLFVBQU0sTUFBNUI7QUFB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QUxZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFlRixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0aW5ncy9bc2x1Z10uY2EyZDA1OGQwMGRhNzNhYWNhN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJvb2tPcGVuIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICdyZWFjdC1zY3JvbGwtcHJvZ3Jlc3MtYmFyJ1xuaW1wb3J0IHJlYWRpbmdUaW1lIGZyb20gJ3JlYWRpbmctdGltZSdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2RlQmxvY2snXG5cbmZ1bmN0aW9uIFdyaXRpbmcoeyBjb250ZW50LCBkYXRhIH0pIHtcbiAgY29uc3QgZnJvbnRtYXR0ZXIgPSBkYXRhXG4gIGNvbnN0IHsgdGl0bGUsIGF1dGhvciB9ID0gZnJvbnRtYXR0ZXJcbiAgY29uc3QgYXZhdGFyID0gYFRpbW15YFxuICBjb25zdCB7IHRleHQgfSA9IHJlYWRpbmdUaW1lKGNvbnRlbnQpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nLXByb2dyZXNzXCI+XG4gICAgICAgIDxQcm9ncmVzc0JhciBoZWlnaHQ9XCI1cHhcIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxMYXlvdXQgc2Vjb25kYXJ5UGFnZSBub0hlYWQ+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiA1MCB9fSBjbGFzc05hbWU9XCJhcnRpY2xlLWJvZHlcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmFjay1idXR0b25cIj5cbiAgICAgICAgICAgICAgYmFja1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYWluLWgxXCI+e3RpdGxlfTwvaDE+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWRpbmctdGltZVwiPlxuICAgICAgICAgICAgPEJvb2tPcGVuIHNpemU9XCIxNnB4XCIgLz5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2luc3RhZ3JhbS5jb20vJHthdXRob3IudHdpdHRlcn1gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCI+XG4gICAgICAgICAgICAgIHthdmF0YXJ9XG4gICAgICAgICAgICAgIHthdXRob3IubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICAgIHNvdXJjZT17Y29udGVudH1cbiAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgICAgIHJlbmRlcmVycz17e1xuICAgICAgICAgICAgICAgIGNvZGU6IENvZGVCbG9jayxcbiAgICAgICAgICAgICAgICBsaW5rOiBwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXByb3BzLmhyZWYuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17cHJvcHMuaHJlZn0gcmVsPVwibm9mb2xsb3cgbm9yZWZlcnJlciBub29wZW5lclwiPntwcm9wcy5jaGlsZHJlbn08L2E+O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17cHJvcHMuaHJlZn0gcmVsPVwibm9mb2xsb3cgbm9yZWZlcnJlciBub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiPntwcm9wcy5jaGlsZHJlbn08L2E+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3BlLWxpa2VkXCI+XG4gICAgICAgICAgICAgIEhvcGUgdGhpcyBoZWxwZWQgeW91IGluIGFueSB3YXkuXG5cbiAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAg4oCUIFRlbG1vXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5Xcml0aW5nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5xdWVyeVxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi93cml0aW5ncy8ke3NsdWd9Lm1kYClcbiAgY29uc3QgZGF0YSA9IG1hdHRlcihjb250ZW50LmRlZmF1bHQpXG5cbiAgcmV0dXJuIHsgLi4uZGF0YSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRpbmdcbiJdLCJzb3VyY2VSb290IjoiIn0=