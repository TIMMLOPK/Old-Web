webpackHotUpdate_N_E("pages/uses",{

/***/ "./pages/uses.js":
/*!***********************!*\
  !*** ./pages/uses.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _constants_Uses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/Uses */ "./constants/Uses.js");
var _jsxFileName = "C:\\Users\\user\\Downloads\\telmo-master\\telmo-master\\pages\\uses.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Uses(_ref) {
  var _this = this;

  var og = _ref.og;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    secondaryPage: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "main-h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "What I use."), __jsx("div", {
    className: "uses-intro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "I often get asked about what's my setup as well as what I use to share all the tips I usually post on ", ' ', __jsx("a", {
    href: "https://instagram.com/",
    target: "_blank",
    rel: "noopener noreferrer nofollow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Insrtagram"), ", ", ' ', "so here it is."), _constants_Uses__WEBPACK_IMPORTED_MODULE_2__["USES"].map(function (_ref2) {
    var title = _ref2.title,
        stack = _ref2.stack;
    return __jsx("ul", {
      className: "uses-list",
      key: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx("li", {
      className: "head",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, title), stack.map(function (_ref3) {
      var name = _ref3.name,
          description = _ref3.description,
          link = _ref3.link;
      return __jsx("li", {
        key: name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, name), __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }, description));
    }));
  })));
}

_c = Uses;

Uses.getInitialProps = function () {
  return {
    data: {
      og: {
        description: "What Telmo uses on a daily basis.",
        image: "https://telmo.im/og/uses.png"
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Uses);

var _c;

$RefreshReg$(_c, "Uses");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcy5qcyJdLCJuYW1lcyI6WyJVc2VzIiwib2ciLCJVU0VTIiwibWFwIiwidGl0bGUiLCJzdGFjayIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJnZXRJbml0aWFsUHJvcHMiLCJkYXRhIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBc0I7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07QUFDcEIsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQVEsaUJBQWEsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUdFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrR0FFaUQsR0FGakQsRUFHRTtBQUFHLFFBQUksRUFBQyx3QkFBUjtBQUFpQyxVQUFNLEVBQUMsUUFBeEM7QUFBaUQsT0FBRyxFQUFDLDhCQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLFFBS1MsR0FMVCxtQkFIRixFQVlHQyxvREFBSSxDQUFDQyxHQUFMLENBQVM7QUFBQSxRQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxRQUFVQyxLQUFWLFNBQVVBLEtBQVY7QUFBQSxXQUNSO0FBQUksZUFBUyxFQUFDLFdBQWQ7QUFBMEIsU0FBRyxFQUFFRCxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXNCQSxLQUF0QixDQURGLEVBR0dDLEtBQUssQ0FBQ0YsR0FBTixDQUFVO0FBQUEsVUFBR0csSUFBSCxTQUFHQSxJQUFIO0FBQUEsVUFBU0MsV0FBVCxTQUFTQSxXQUFUO0FBQUEsVUFBc0JDLElBQXRCLFNBQXNCQSxJQUF0QjtBQUFBLGFBQ1Q7QUFBSSxXQUFHLEVBQUVGLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsWUFBSSxFQUFFRSxJQUFUO0FBQWUsY0FBTSxFQUFDLFFBQXRCO0FBQStCLFdBQUcsRUFBQyw4QkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtRUYsSUFBbkUsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBT0MsV0FBUCxDQUZGLENBRFM7QUFBQSxLQUFWLENBSEgsQ0FEUTtBQUFBLEdBQVQsQ0FaSCxDQURGLENBREY7QUE2QkQ7O0tBOUJRUCxJOztBQWdDVEEsSUFBSSxDQUFDUyxlQUFMLEdBQXVCLFlBQU07QUFDM0IsU0FBTztBQUNMQyxRQUFJLEVBQUU7QUFDSlQsUUFBRSxFQUFFO0FBQ0ZNLG1CQUFXLEVBQUUsbUNBRFg7QUFFRkksYUFBSyxFQUFFO0FBRkw7QUFEQTtBQURELEdBQVA7QUFRRCxDQVREOztBQVdlWCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VzLjY4NjNiYmQ2ZDUwYzMxZTk5OGM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBVU0VTIH0gZnJvbSAnLi4vY29uc3RhbnRzL1VzZXMnXG5cbmZ1bmN0aW9uIFVzZXMoeyBvZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgc2Vjb25kYXJ5UGFnZT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW4taDFcIj5XaGF0IEkgdXNlLjwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VzLWludHJvXCI+XG4gICAgICAgICAgSSBvZnRlbiBnZXQgYXNrZWQgYWJvdXQgd2hhdCdzIG15IHNldHVwIGFzIHdlbGwgYXMgd2hhdFxuICAgICAgICAgIEkgdXNlIHRvIHNoYXJlIGFsbCB0aGUgdGlwcyBJIHVzdWFsbHkgcG9zdCBvbiB7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiPlxuICAgICAgICAgICAgSW5zcnRhZ3JhbVxuICAgICAgICAgIDwvYT4sIHsnICd9XG4gICAgICAgICAgc28gaGVyZSBpdCBpcy5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge1VTRVMubWFwKCh7IHRpdGxlLCBzdGFjayB9KSA9PiAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVzZXMtbGlzdFwiIGtleT17dGl0bGV9PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRcIj57dGl0bGV9PC9saT5cblxuICAgICAgICAgICAge3N0YWNrLm1hcCgoeyBuYW1lLCBkZXNjcmlwdGlvbiwgbGluayB9KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIj57bmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkpfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuVXNlcy5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGF0YToge1xuICAgICAgb2c6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2hhdCBUZWxtbyB1c2VzIG9uIGEgZGFpbHkgYmFzaXMuXCIsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vdGVsbW8uaW0vb2cvdXNlcy5wbmdcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VzXG4iXSwic291cmNlUm9vdCI6IiJ9