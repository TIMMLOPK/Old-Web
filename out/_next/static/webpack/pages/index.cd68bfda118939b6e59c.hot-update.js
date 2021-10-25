webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flexbox-grid */ "./node_modules/react-flexbox-grid/lib/index.js");
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dateUtils */ "./utils/dateUtils.js");
/* harmony import */ var _BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BlackLivesMatter */ "./components/BlackLivesMatter.js");



var _jsxFileName = "C:\\Users\\user\\Downloads\\telmo-master\\telmo-master\\components\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var menu = [{
  path: '/',
  name: 'Home'
}, {
  path: '/about',
  name: 'About'
}, {
  path: '/uses',
  name: 'More'
}];
var SHORTCUTS = ['Digit0', 'Digit1', 'Digit2'];
var icon = {
  photoURL: photoURL
};
var SALUTS = ['Hey you.', 'Welcome.', "What's up?", "How's life?", '👋', 'Long time no see.', 'Yo!'];

function getPhoto(a) {
  // validation for instagram usernames
  var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
  var validation = regex.test(a);

  if (validation) {
    $.get("https://www.instagram.com/" + a + "/?__a=1").done(function (data) {
      // getting the url
      var photoURL = data["graphql"]["user"]["profile_pic_url_hd"]; // update img element

      $("#photoReturn").attr("src", photoURL);
    }).fail(function () {
      // code for 404 error 
      alert('Username was not found!');
    });
  } else {
    alert('The username is invalid!');
  }
}

function Layout(_ref) {
  _s();

  var _this = this;

  var children = _ref.children,
      isHomepage = _ref.isHomepage,
      secondaryPage = _ref.secondaryPage;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var onLoadTheme = typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(onLoadTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(SALUTS[Math.floor(Math.random() * SALUTS.length)]),
      salut = _useState3[0];

  var switchTheme = function switchTheme() {
    var setTo = theme === 'dark' ? 'light' : 'dark';
    setTheme(setTo);
  };

  function triggerShortcut(e) {
    if (SHORTCUTS.includes(e.code)) {
      // Split code to get only the number
      var code = e.code.split('t')[1]; // Get route from menu

      var path = menu[code].path;
      router.push(path);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.addEventListener('keypress', triggerShortcut);
    if (onLoadTheme) return;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('BLOG_THEME', theme);
    setMounted(true);
  }, [theme]);

  var containerProps = _objectSpread(_objectSpread({}, isHomepage && {
    md: 12
  }), !isHomepage && {
    md: 5,
    mdOffset: 2
  });

  if (!mounted) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 24
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "top-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  })))), menu.map(function (_ref2) {
    var path = _ref2.path,
        name = _ref2.name;
    return __jsx("li", {
      key: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: path,
      as: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }, name)));
  }))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 2,
    style: {
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "theme-switch-button",
    onClick: function onClick() {
      return switchTheme();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, theme === 'dark' ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Sun"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 35
    }
  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Moon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 45
    }
  }))))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, containerProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }), !secondaryPage && __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "blog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, salut), __jsx("p", {
    className: "entry-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, "Welcome to Once. 2.0 Enjoy it\uFF01 \u2014 Timmy")), children, secondaryPage && __jsx("div", {
    className: "bottom-mobile-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "theme-switch-button-mobile",
    onClick: function onClick() {
      return switchTheme();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, theme === 'dark' ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Sun"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 27
    }
  }), " Light") : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Moon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 27
    }
  }), " Dark")))))))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, "No tracking. No ads. Happy ", Object(_utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__["currentDayName"])(), "!"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, "IG@once"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, "\xA9 ", new Date().getFullYear())));
}

_s(Layout, "rLcjC0FttT01+Ri66r01MbIe0go=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsibWVudSIsInBhdGgiLCJuYW1lIiwiU0hPUlRDVVRTIiwiaWNvbiIsInBob3RvVVJMIiwiU0FMVVRTIiwiZ2V0UGhvdG8iLCJhIiwicmVnZXgiLCJSZWdFeHAiLCJ2YWxpZGF0aW9uIiwidGVzdCIsIiQiLCJnZXQiLCJkb25lIiwiZGF0YSIsImF0dHIiLCJmYWlsIiwiYWxlcnQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzSG9tZXBhZ2UiLCJzZWNvbmRhcnlQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25Mb2FkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzYWx1dCIsInN3aXRjaFRoZW1lIiwic2V0VG8iLCJ0cmlnZ2VyU2hvcnRjdXQiLCJlIiwiaW5jbHVkZXMiLCJjb2RlIiwic3BsaXQiLCJwdXNoIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiY29udGFpbmVyUHJvcHMiLCJtZCIsIm1kT2Zmc2V0IiwibWFwIiwidGV4dEFsaWduIiwiY3VycmVudERheU5hbWUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0EsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEVyxFQUtYO0FBQ0VELE1BQUksRUFBRSxRQURS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VixHQUNDLG1FQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFdBREQsR0FLQyxtRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixVQU5KLENBREYsQ0FIRixDQURGLENBaEJKLENBREYsQ0FERixDQWpDRixFQTJFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBaUMrQix1RUFBYyxFQUEvQyxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFhLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFiLENBSEYsQ0EzRUYsQ0FERjtBQW1GRDs7R0FwSVEzQyxNO1VBQ1FLLHFEOzs7S0FEUkwsTTtBQXNJTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Q2OGJmZGExMTg5MzliNmU1OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHcmlkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCdcbmltcG9ydCB7IFN1biwgTW9vbiB9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgY3VycmVudERheU5hbWUgfSBmcm9tICcuLi91dGlscy9kYXRlVXRpbHMnXG5cbmltcG9ydCBCbGFja0xpdmVzTWF0dGVyIGZyb20gJy4vQmxhY2tMaXZlc01hdHRlcidcblxuXG5jb25zdCBtZW51ID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdIb21lJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWJvdXQnLFxuICAgIG5hbWU6ICdBYm91dCcsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3VzZXMnLFxuICAgIG5hbWU6ICdNb3JlJyxcbiAgfSxcbl1cblxuY29uc3QgU0hPUlRDVVRTID0gWydEaWdpdDAnLCAnRGlnaXQxJywgJ0RpZ2l0MiddXG5jb25zdCBpY29uPSB7cGhvdG9VUkx9XG5jb25zdCBTQUxVVFMgPSBbXG4gICdIZXkgeW91LicsXG4gICdXZWxjb21lLicsXG4gIGBXaGF0J3MgdXA/YCxcbiAgYEhvdydzIGxpZmU/YCxcbiAgJ/CfkYsnLFxuICAnTG9uZyB0aW1lIG5vIHNlZS4nLFxuICAnWW8hJyxcbl1cblxuZnVuY3Rpb24gZ2V0UGhvdG8oYSkge1xuXG4gIC8vIHZhbGlkYXRpb24gZm9yIGluc3RhZ3JhbSB1c2VybmFtZXNcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLyk7XG4gIHZhciB2YWxpZGF0aW9uID0gcmVnZXgudGVzdChhKTtcblxuICBpZiAodmFsaWRhdGlvbikge1xuXG4gICAgJC5nZXQoXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiICsgYSArIFwiLz9fX2E9MVwiKVxuICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAvLyBnZXR0aW5nIHRoZSB1cmxcbiAgICAgICAgdmFyIHBob3RvVVJMID0gZGF0YVtcImdyYXBocWxcIl1bXCJ1c2VyXCJdW1wicHJvZmlsZV9waWNfdXJsX2hkXCJdO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBpbWcgZWxlbWVudFxuICAgICAgICAkKFwiI3Bob3RvUmV0dXJuXCIpLmF0dHIoXCJzcmNcIiwgcGhvdG9VUkwpXG5cbiAgICAgIH0pXG4gICAgICAuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvZGUgZm9yIDQwNCBlcnJvciBcbiAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIHdhcyBub3QgZm91bmQhJylcbiAgICAgIH0pXG5cbiAgfSBlbHNlIHtcblxuICAgIGFsZXJ0KCdUaGUgdXNlcm5hbWUgaXMgaW52YWxpZCEnKVxuICB9XG5cbn1cblxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaXNIb21lcGFnZSwgc2Vjb25kYXJ5UGFnZSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IG9uTG9hZFRoZW1lID0gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0JMT0dfVEhFTUUnKVxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKG9uTG9hZFRoZW1lKVxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NhbHV0XSA9IHVzZVN0YXRlKFNBTFVUU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTQUxVVFMubGVuZ3RoKV0pXG4gIGNvbnN0IHN3aXRjaFRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldFRvID0gdGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaydcblxuICAgIHNldFRoZW1lKHNldFRvKVxuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlclNob3J0Y3V0KGUpIHtcbiAgICBpZiAoU0hPUlRDVVRTLmluY2x1ZGVzKGUuY29kZSkpIHtcbiAgICAgIC8vIFNwbGl0IGNvZGUgdG8gZ2V0IG9ubHkgdGhlIG51bWJlclxuICAgICAgY29uc3QgY29kZSA9IGUuY29kZS5zcGxpdCgndCcpWzFdXG5cbiAgICAgIC8vIEdldCByb3V0ZSBmcm9tIG1lbnVcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gbWVudVtjb2RlXVxuXG4gICAgICByb3V0ZXIucHVzaChwYXRoKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0cmlnZ2VyU2hvcnRjdXQpXG5cbiAgICBpZiAob25Mb2FkVGhlbWUpIHJldHVyblxuXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XG4gICAgICBzZXRUaGVtZSgnZGFyaycpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSlcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdCTE9HX1RIRU1FJywgdGhlbWUpXG5cbiAgICBzZXRNb3VudGVkKHRydWUpXG4gIH0sIFt0aGVtZV0pXG5cbiAgY29uc3QgY29udGFpbmVyUHJvcHMgPSB7XG4gICAgLi4uaXNIb21lcGFnZSAmJiB7IG1kOiAxMiB9LFxuICAgIC4uLiFpc0hvbWVwYWdlICYmIHsgbWQ6IDUsIG1kT2Zmc2V0OiAyIH0sXG4gIH1cblxuICBpZiAoIW1vdW50ZWQpIHJldHVybiA8ZGl2IC8+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJsYWNrTGl2ZXNNYXR0ZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEwfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICB7bWVudS5tYXAoKHsgcGF0aCwgbmFtZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYXRofSBhcz17cGF0aH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICA8Q29sIHhzPXsyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRoZW1lLXN3aXRjaC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hUaGVtZSgpfT5cbiAgICAgICAgICAgICAge3RoZW1lID09PSAnZGFyaycgPyA8U3VuIC8+IDogPE1vb24gLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB7Li4uY29udGFpbmVyUHJvcHN9PlxuICAgICAgICAgICAgeyFzZWNvbmRhcnlQYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7c2FsdXR9XG4gICAgICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVudHJ5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIE9uY2UuIDIuMCBFbmpveSBpdO+8gSDigJQgVGltbXlcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICB7c2Vjb25kYXJ5UGFnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLW1vYmlsZS1uYXZcIj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gLz5cblxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGhlbWUtc3dpdGNoLWJ1dHRvbi1tb2JpbGVcIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hUaGVtZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdW4gLz4gTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9vbiAvPiBEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2Pk5vIHRyYWNraW5nLiBObyBhZHMuIEhhcHB5IHtjdXJyZW50RGF5TmFtZSgpfSE8L2Rpdj5cbiAgICAgICAgPGRpdj5JR0BvbmNlPC9kaXY+XG4gICAgICAgIDxkaXY+JmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=