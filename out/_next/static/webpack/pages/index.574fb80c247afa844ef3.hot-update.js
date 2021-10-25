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
var icon = photoreturn;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsibWVudSIsInBhdGgiLCJuYW1lIiwiU0hPUlRDVVRTIiwiaWNvbiIsInBob3RvcmV0dXJuIiwiU0FMVVRTIiwiZ2V0UGhvdG8iLCJhIiwicmVnZXgiLCJSZWdFeHAiLCJ2YWxpZGF0aW9uIiwidGVzdCIsIiQiLCJnZXQiLCJkb25lIiwiZGF0YSIsInBob3RvVVJMIiwiYXR0ciIsImZhaWwiLCJhbGVydCIsIkxheW91dCIsImNoaWxkcmVuIiwiaXNIb21lcGFnZSIsInNlY29uZGFyeVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkxvYWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VTdGF0ZSIsInRoZW1lIiwic2V0VGhlbWUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInNhbHV0Iiwic3dpdGNoVGhlbWUiLCJzZXRUbyIsInRyaWdnZXJTaG9ydGN1dCIsImUiLCJpbmNsdWRlcyIsImNvZGUiLCJzcGxpdCIsInB1c2giLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJjb250YWluZXJQcm9wcyIsIm1kIiwibWRPZmZzZXQiLCJtYXAiLCJ0ZXh0QWxpZ24iLCJjdXJyZW50RGF5TmFtZSIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxNQUFJLEVBQUUsR0FEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQURXLEVBS1g7QUFDRUQs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bUVBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsV0FERCxHQUtDLG1FQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFVBTkosQ0FERixDQUhGLENBREYsQ0FoQkosQ0FERixDQURGLENBakNGLEVBMkVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUFpQytCLHVFQUFjLEVBQS9DLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWEsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQWIsQ0FIRixDQTNFRixDQURGO0FBbUZEOztHQXBJUTNDLE07VUFDUUsscUQ7OztLQURSTCxNO0FBc0lNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NzRmYjgwYzI0N2FmYTg0NGVmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdyaWQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZmxleGJveC1ncmlkJ1xuaW1wb3J0IHsgU3VuLCBNb29uIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBjdXJyZW50RGF5TmFtZSB9IGZyb20gJy4uL3V0aWxzL2RhdGVVdGlscydcblxuaW1wb3J0IEJsYWNrTGl2ZXNNYXR0ZXIgZnJvbSAnLi9CbGFja0xpdmVzTWF0dGVyJ1xuXG5cbmNvbnN0IG1lbnUgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbmFtZTogJ0hvbWUnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hYm91dCcsXG4gICAgbmFtZTogJ0Fib3V0JyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvdXNlcycsXG4gICAgbmFtZTogJ01vcmUnLFxuICB9LFxuXVxuXG5jb25zdCBTSE9SVENVVFMgPSBbJ0RpZ2l0MCcsICdEaWdpdDEnLCAnRGlnaXQyJ11cbmNvbnN0IGljb249cGhvdG9yZXR1cm5cbmNvbnN0IFNBTFVUUyA9IFtcbiAgJ0hleSB5b3UuJyxcbiAgJ1dlbGNvbWUuJyxcbiAgYFdoYXQncyB1cD9gLFxuICBgSG93J3MgbGlmZT9gLFxuICAn8J+RiycsXG4gICdMb25nIHRpbWUgbm8gc2VlLicsXG4gICdZbyEnLFxuXVxuXG5mdW5jdGlvbiBnZXRQaG90byhhKSB7XG5cbiAgLy8gdmFsaWRhdGlvbiBmb3IgaW5zdGFncmFtIHVzZXJuYW1lc1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKC9eKD8hLipcXC5cXC4pKD8hLipcXC4kKVteXFxXXVtcXHcuXXswLDI5fSQvKTtcbiAgdmFyIHZhbGlkYXRpb24gPSByZWdleC50ZXN0KGEpO1xuXG4gIGlmICh2YWxpZGF0aW9uKSB7XG5cbiAgICAkLmdldChcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgKyBhICsgXCIvP19fYT0xXCIpXG4gICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgIC8vIGdldHRpbmcgdGhlIHVybFxuICAgICAgICB2YXIgcGhvdG9VUkwgPSBkYXRhW1wiZ3JhcGhxbFwiXVtcInVzZXJcIl1bXCJwcm9maWxlX3BpY191cmxfaGRcIl07XG5cbiAgICAgICAgLy8gdXBkYXRlIGltZyBlbGVtZW50XG4gICAgICAgICQoXCIjcGhvdG9SZXR1cm5cIikuYXR0cihcInNyY1wiLCBwaG90b1VSTClcblxuICAgICAgfSlcbiAgICAgIC5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY29kZSBmb3IgNDA0IGVycm9yIFxuICAgICAgICBhbGVydCgnVXNlcm5hbWUgd2FzIG5vdCBmb3VuZCEnKVxuICAgICAgfSlcblxuICB9IGVsc2Uge1xuXG4gICAgYWxlcnQoJ1RoZSB1c2VybmFtZSBpcyBpbnZhbGlkIScpXG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBpc0hvbWVwYWdlLCBzZWNvbmRhcnlQYWdlIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3Qgb25Mb2FkVGhlbWUgPSB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQkxPR19USEVNRScpXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUob25Mb2FkVGhlbWUpXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2FsdXRdID0gdXNlU3RhdGUoU0FMVVRTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFNBTFVUUy5sZW5ndGgpXSlcbiAgY29uc3Qgc3dpdGNoVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2V0VG8gPSB0aGVtZSA9PT0gJ2RhcmsnID8gJ2xpZ2h0JyA6ICdkYXJrJ1xuXG4gICAgc2V0VGhlbWUoc2V0VG8pXG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyU2hvcnRjdXQoZSkge1xuICAgIGlmIChTSE9SVENVVFMuaW5jbHVkZXMoZS5jb2RlKSkge1xuICAgICAgLy8gU3BsaXQgY29kZSB0byBnZXQgb25seSB0aGUgbnVtYmVyXG4gICAgICBjb25zdCBjb2RlID0gZS5jb2RlLnNwbGl0KCd0JylbMV1cblxuICAgICAgLy8gR2V0IHJvdXRlIGZyb20gbWVudVxuICAgICAgY29uc3QgeyBwYXRoIH0gPSBtZW51W2NvZGVdXG5cbiAgICAgIHJvdXRlci5wdXNoKHBhdGgpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRyaWdnZXJTaG9ydGN1dClcblxuICAgIGlmIChvbkxvYWRUaGVtZSkgcmV0dXJuXG5cbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpIHtcbiAgICAgIHNldFRoZW1lKCdkYXJrJylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIHRoZW1lKVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0JMT0dfVEhFTUUnLCB0aGVtZSlcblxuICAgIHNldE1vdW50ZWQodHJ1ZSlcbiAgfSwgW3RoZW1lXSlcblxuICBjb25zdCBjb250YWluZXJQcm9wcyA9IHtcbiAgICAuLi5pc0hvbWVwYWdlICYmIHsgbWQ6IDEyIH0sXG4gICAgLi4uIWlzSG9tZXBhZ2UgJiYgeyBtZDogNSwgbWRPZmZzZXQ6IDIgfSxcbiAgfVxuXG4gIGlmICghbW91bnRlZCkgcmV0dXJuIDxkaXYgLz5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QmxhY2tMaXZlc01hdHRlciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1tZW51XCI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTB9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb259IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgIHttZW51Lm1hcCgoeyBwYXRoLCBuYW1lIH0pID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9IGFzPXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e25hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDxDb2wgeHM9ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGhlbWUtc3dpdGNoLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHN3aXRjaFRoZW1lKCl9PlxuICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IDxTdW4gLz4gOiA8TW9vbiAvPn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8R3JpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHsuLi5jb250YWluZXJQcm9wc30+XG4gICAgICAgICAgICB7IXNlY29uZGFyeVBhZ2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJsb2ctdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHtzYWx1dH1cbiAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZW50cnktZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gT25jZS4gMi4wIEVuam95IGl077yBIOKAlCBUaW1teVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgICAgIHtzZWNvbmRhcnlQYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbW9iaWxlLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSAvPlxuXG4gICAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0aGVtZS1zd2l0Y2gtYnV0dG9uLW1vYmlsZVwiIG9uQ2xpY2s9eygpID0+IHN3aXRjaFRoZW1lKCl9PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGVtZSA9PT0gJ2RhcmsnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1biAvPiBMaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNb29uIC8+IERhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0dyaWQ+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXY+Tm8gdHJhY2tpbmcuIE5vIGFkcy4gSGFwcHkge2N1cnJlbnREYXlOYW1lKCl9ITwvZGl2PlxuICAgICAgICA8ZGl2PklHQG9uY2U8L2Rpdj5cbiAgICAgICAgPGRpdj4mY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==