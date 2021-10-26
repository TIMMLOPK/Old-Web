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
  }, "Twitter"), ", ", ' ', "so here it is."), _constants_Uses__WEBPACK_IMPORTED_MODULE_2__["USES"].map(function (_ref2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcy5qcyJdLCJuYW1lcyI6WyJVc2VzIiwib2ciLCJVU0VTIiwibWFwIiwidGl0bGUiLCJzdGFjayIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJnZXRJbml0aWFsUHJvcHMiLCJkYXRhIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBc0I7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07QUFDcEIsU0FDRSxtRUFDRSxNQUFDLDBEQUFEO0FBQVEsaUJBQWEsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUdFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrR0FFaUQsR0FGakQsRUFHRTtBQUFHLFFBQUksRUFBQyx3QkFBUjtBQUFpQyxVQUFNLEVBQUMsUUFBeEM7QUFBaUQsT0FBRyxFQUFDLDhCQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsUUFLUyxHQUxULG1CQUhGLEVBWUdDLG9EQUFJLENBQUNDLEdBQUwsQ0FBUztBQUFBLFFBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFFBQVVDLEtBQVYsU0FBVUEsS0FBVjtBQUFBLFdBQ1I7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUEwQixTQUFHLEVBQUVELEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0JBLEtBQXRCLENBREYsRUFHR0MsS0FBSyxDQUFDRixHQUFOLENBQVU7QUFBQSxVQUFHRyxJQUFILFNBQUdBLElBQUg7QUFBQSxVQUFTQyxXQUFULFNBQVNBLFdBQVQ7QUFBQSxVQUFzQkMsSUFBdEIsU0FBc0JBLElBQXRCO0FBQUEsYUFDVDtBQUFJLFdBQUcsRUFBRUYsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxZQUFJLEVBQUVFLElBQVQ7QUFBZSxjQUFNLEVBQUMsUUFBdEI7QUFBK0IsV0FBRyxFQUFDLDhCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1FRixJQUFuRSxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFPQyxXQUFQLENBRkYsQ0FEUztBQUFBLEtBQVYsQ0FISCxDQURRO0FBQUEsR0FBVCxDQVpILENBREYsQ0FERjtBQTZCRDs7S0E5QlFQLEk7O0FBZ0NUQSxJQUFJLENBQUNTLGVBQUwsR0FBdUIsWUFBTTtBQUMzQixTQUFPO0FBQ0xDLFFBQUksRUFBRTtBQUNKVCxRQUFFLEVBQUU7QUFDRk0sbUJBQVcsRUFBRSxtQ0FEWDtBQUVGSSxhQUFLLEVBQUU7QUFGTDtBQURBO0FBREQsR0FBUDtBQVFELENBVEQ7O0FBV2VYLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXMuZmI3Nzk5ODQxYzc4ZDhjYTlhMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IFVTRVMgfSBmcm9tICcuLi9jb25zdGFudHMvVXNlcydcblxuZnVuY3Rpb24gVXNlcyh7IG9nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCBzZWNvbmRhcnlQYWdlPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi1oMVwiPldoYXQgSSB1c2UuPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXMtaW50cm9cIj5cbiAgICAgICAgICBJIG9mdGVuIGdldCBhc2tlZCBhYm91dCB3aGF0J3MgbXkgc2V0dXAgYXMgd2VsbCBhcyB3aGF0XG4gICAgICAgICAgSSB1c2UgdG8gc2hhcmUgYWxsIHRoZSB0aXBzIEkgdXN1YWxseSBwb3N0IG9uIHsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCI+XG4gICAgICAgICAgICBUd2l0dGVyXG4gICAgICAgICAgPC9hPiwgeycgJ31cbiAgICAgICAgICBzbyBoZXJlIGl0IGlzLlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7VVNFUy5tYXAoKHsgdGl0bGUsIHN0YWNrIH0pID0+IChcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidXNlcy1saXN0XCIga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZFwiPnt0aXRsZX08L2xpPlxuXG4gICAgICAgICAgICB7c3RhY2subWFwKCh7IG5hbWUsIGRlc2NyaXB0aW9uLCBsaW5rIH0pID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiPntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSl9XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5Vc2VzLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiB7XG4gICAgICBvZzoge1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJXaGF0IFRlbG1vIHVzZXMgb24gYSBkYWlseSBiYXNpcy5cIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly90ZWxtby5pbS9vZy91c2VzLnBuZ1wiXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=