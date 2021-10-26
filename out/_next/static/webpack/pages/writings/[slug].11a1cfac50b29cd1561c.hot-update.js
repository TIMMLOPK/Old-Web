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

  var _readingTime = reading_time__WEBPACK_IMPORTED_MODULE_9___default()(content),
      text = _readingTime.text;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "writing-progress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_8___default.a, {
    height: "5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    secondaryPage: true,
    noHead: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
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
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "back-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "back")), __jsx("h1", {
    className: "main-h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, title), __jsx("div", {
    className: "reading-time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__["BookOpen"], {
    size: "16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), text), __jsx("div", {
    className: "author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://instagram.com/".concat(author.twitter),
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, author.name)), __jsx("div", {
    className: "writing-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
              lineNumber: 52,
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
            lineNumber: 55,
            columnNumber: 26
          }
        }, props.children);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hope-liked",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Reading Cotinuing.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }), "\u2014 Timmy")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGluZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbIldyaXRpbmciLCJjb250ZW50IiwiZGF0YSIsImZyb250bWF0dGVyIiwidGl0bGUiLCJhdXRob3IiLCJyZWFkaW5nVGltZSIsInRleHQiLCJtYXJnaW5Ub3AiLCJ0d2l0dGVyIiwibmFtZSIsImNvZGUiLCJDb2RlQmxvY2siLCJsaW5rIiwicHJvcHMiLCJocmVmIiwic3RhcnRzV2l0aCIsImNoaWxkcmVuIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJxdWVyeSIsIm1hdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBakJDLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNsQyxNQUFNQyxXQUFXLEdBQUdELElBQXBCO0FBQ0EsTUFBUUUsS0FBUixHQUEwQkQsV0FBMUIsQ0FBUUMsS0FBUjtBQUFBLE1BQWVDLE1BQWYsR0FBMEJGLFdBQTFCLENBQWVFLE1BQWY7O0FBQ0EscUJBQWlCQyxtREFBVyxDQUFDTCxPQUFELENBQTVCO0FBQUEsTUFBUU0sSUFBUixnQkFBUUEsSUFBUjs7QUFFQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQWEsVUFBTSxFQUFDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBS0UsTUFBQywyREFBRDtBQUFRLGlCQUFhLE1BQXJCO0FBQXNCLFVBQU0sTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVo7QUFBK0IsYUFBUyxFQUFDLGNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxNQUFFLEVBQUMsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFPRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJKLEtBQXpCLENBUEYsRUFTRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVUsUUFBSSxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdHLElBRkgsQ0FURixFQWNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxrQ0FBMkJGLE1BQU0sQ0FBQ0ksT0FBbEMsQ0FBUDtBQUFvRCxVQUFNLEVBQUMsUUFBM0Q7QUFBb0UsT0FBRyxFQUFDLDhCQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLE1BQU0sQ0FBQ0ssSUFEVixDQURGLENBZEYsRUFvQkU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxVQUFNLEVBQUVULE9BRFY7QUFFRSxjQUFVLEVBQUUsS0FGZDtBQUdFLGFBQVMsRUFBRTtBQUNUVSxVQUFJLEVBQUVDLDhEQURHO0FBRVRDLFVBQUksRUFBRSxjQUFBQyxLQUFLLEVBQUk7QUFDYixZQUFJLENBQUNBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxVQUFYLENBQXNCLE1BQXRCLENBQUwsRUFBb0M7QUFDakMsaUJBQU87QUFBRyxnQkFBSSxFQUFFRixLQUFLLENBQUNDLElBQWY7QUFBcUIsZUFBRyxFQUFDLDhCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXlERCxLQUFLLENBQUNHLFFBQS9ELENBQVA7QUFDRjs7QUFFRCxlQUFPO0FBQUcsY0FBSSxFQUFFSCxLQUFLLENBQUNDLElBQWY7QUFBcUIsYUFBRyxFQUFDLDhCQUF6QjtBQUF3RCxnQkFBTSxFQUFDLFFBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBeUVELEtBQUssQ0FBQ0csUUFBL0UsQ0FBUDtBQUNEO0FBUlEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWtCRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLGlCQWxCRixDQXBCRixDQURGLENBTEYsQ0FERjtBQXlERDs7S0E5RFFqQixPOztBQWdFVEEsT0FBTyxDQUFDa0IsZUFBUjtBQUFBLCtMQUEwQixpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJDLGdCQURnQixHQUNQRCxPQUFPLENBQUNFLEtBREQsQ0FDaEJELElBRGdCO0FBQUE7QUFBQSxtQkFFRixpRUFBTyxZQUFrQkEsSUFBekIsU0FGRTs7QUFBQTtBQUVsQm5CLG1CQUZrQjtBQUdsQkMsZ0JBSGtCLEdBR1hvQixrREFBTSxDQUFDckIsT0FBTyxXQUFSLENBSEs7QUFBQSwrREFLWkMsSUFMWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZUYsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGluZ3MvW3NsdWddLjExYTFjZmFjNTBiMjljZDE1NjFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBCb29rT3BlbiB9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAncmVhY3Qtc2Nyb2xsLXByb2dyZXNzLWJhcidcbmltcG9ydCByZWFkaW5nVGltZSBmcm9tICdyZWFkaW5nLXRpbWUnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZUJsb2NrJ1xuXG5mdW5jdGlvbiBXcml0aW5nKHsgY29udGVudCwgZGF0YSB9KSB7XG4gIGNvbnN0IGZyb250bWF0dGVyID0gZGF0YVxuICBjb25zdCB7IHRpdGxlLCBhdXRob3IgfSA9IGZyb250bWF0dGVyXG4gIGNvbnN0IHsgdGV4dCB9ID0gcmVhZGluZ1RpbWUoY29udGVudClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyaXRpbmctcHJvZ3Jlc3NcIj5cbiAgICAgICAgPFByb2dyZXNzQmFyIGhlaWdodD1cIjVweFwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPExheW91dCBzZWNvbmRhcnlQYWdlIG5vSGVhZD5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDUwIH19IGNsYXNzTmFtZT1cImFydGljbGUtYm9keVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9XCIvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiYWNrLWJ1dHRvblwiPlxuICAgICAgICAgICAgICBiYWNrXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4taDFcIj57dGl0bGV9PC9oMT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZGluZy10aW1lXCI+XG4gICAgICAgICAgICA8Qm9va09wZW4gc2l6ZT1cIjE2cHhcIiAvPlxuICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxuICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vaW5zdGFncmFtLmNvbS8ke2F1dGhvci50d2l0dGVyfWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAge2F1dGhvci5uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgc291cmNlPXtjb250ZW50fVxuICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICAgICAgcmVuZGVyZXJzPXt7XG4gICAgICAgICAgICAgICAgY29kZTogQ29kZUJsb2NrLFxuICAgICAgICAgICAgICAgIGxpbms6IHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghcHJvcHMuaHJlZi5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YSBocmVmPXtwcm9wcy5ocmVmfSByZWw9XCJub2ZvbGxvdyBub3JlZmVycmVyIG5vb3BlbmVyXCI+e3Byb3BzLmNoaWxkcmVufTwvYT47XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiA8YSBocmVmPXtwcm9wcy5ocmVmfSByZWw9XCJub2ZvbGxvdyBub3JlZmVycmVyIG5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3Byb3BzLmNoaWxkcmVufTwvYT47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvcGUtbGlrZWRcIj5cbiAgICAgICAgICAgICAgUmVhZGluZyBDb3RpbnVpbmcuXG5cbiAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAg4oCUIFRpbW15XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5Xcml0aW5nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5xdWVyeVxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi93cml0aW5ncy8ke3NsdWd9Lm1kYClcbiAgY29uc3QgZGF0YSA9IG1hdHRlcihjb250ZW50LmRlZmF1bHQpXG5cbiAgcmV0dXJuIHsgLi4uZGF0YSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyaXRpbmdcbiJdLCJzb3VyY2VSb290IjoiIn0=