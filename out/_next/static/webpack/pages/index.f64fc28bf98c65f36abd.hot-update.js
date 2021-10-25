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
var icon = 'photoReturn';
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
      lineNumber: 116,
      columnNumber: 24
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "top-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
        lineNumber: 135,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: path,
      as: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
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
      lineNumber: 144,
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
      lineNumber: 145,
      columnNumber: 13
    }
  }, theme === 'dark' ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Sun"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 35
    }
  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Moon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 45
    }
  }))))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, containerProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }), !secondaryPage && __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "blog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, salut), __jsx("p", {
    className: "entry-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, "Welcome to Once. 2.0 Enjoy it\uFF01 \u2014 Timmy")), children, secondaryPage && __jsx("div", {
    className: "bottom-mobile-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 21
    }
  }, theme === 'dark' ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Sun"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 27
    }
  }), " Light") : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Moon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 27
    }
  }), " Dark")))))))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, "No tracking. No ads. Happy ", Object(_utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__["currentDayName"])(), "!"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, "IG@once"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsibWVudSIsInBhdGgiLCJuYW1lIiwiU0hPUlRDVVRTIiwiaWNvbiIsIlNBTFVUUyIsImdldFBob3RvIiwiYSIsInJlZ2V4IiwiUmVnRXhwIiwidmFsaWRhdGlvbiIsInRlc3QiLCIkIiwiZ2V0IiwiZG9uZSIsImRhdGEiLCJwaG90b1VSTCIsImF0dHIiLCJmYWlsIiwiYWxlcnQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzSG9tZXBhZ2UiLCJzZWNvbmRhcnlQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25Mb2FkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzYWx1dCIsInN3aXRjaFRoZW1lIiwic2V0VG8iLCJ0cmlnZ2VyU2hvcnRjdXQiLCJlIiwiaW5jbHVkZXMiLCJjb2RlIiwic3BsaXQiLCJwdXNoIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiY29udGFpbmVyUHJvcHMiLCJtZCIsIm1kT2Zmc2V0IiwibWFwIiwidGV4dEFsaWduIiwiY3VycmVudERheU5hbWUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEVyxFQUtYO0FBQ0VELE1BQUksRUFBRSxRQURS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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsV0FERCxHQUtDLG1FQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFVBTkosQ0FERixDQUhGLENBREYsQ0FoQkosQ0FERixDQURGLENBakNGLEVBMkVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUFpQytCLHVFQUFjLEVBQS9DLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWEsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQWIsQ0FIRixDQTNFRixDQURGO0FBbUZEOztHQXBJUTNDLE07VUFDUUsscUQ7OztLQURSTCxNO0FBc0lNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjRmYzI4YmY5OGM2NWYzNmFiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdyaWQsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZmxleGJveC1ncmlkJ1xuaW1wb3J0IHsgU3VuLCBNb29uIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBjdXJyZW50RGF5TmFtZSB9IGZyb20gJy4uL3V0aWxzL2RhdGVVdGlscydcblxuaW1wb3J0IEJsYWNrTGl2ZXNNYXR0ZXIgZnJvbSAnLi9CbGFja0xpdmVzTWF0dGVyJ1xuXG5jb25zdCBtZW51ID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdIb21lJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWJvdXQnLFxuICAgIG5hbWU6ICdBYm91dCcsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3VzZXMnLFxuICAgIG5hbWU6ICdNb3JlJyxcbiAgfSxcbl1cblxuY29uc3QgU0hPUlRDVVRTID0gWydEaWdpdDAnLCAnRGlnaXQxJywgJ0RpZ2l0MiddXG5jb25zdCBpY29uPSAncGhvdG9SZXR1cm4nXG5jb25zdCBTQUxVVFMgPSBbXG4gICdIZXkgeW91LicsXG4gICdXZWxjb21lLicsXG4gIGBXaGF0J3MgdXA/YCxcbiAgYEhvdydzIGxpZmU/YCxcbiAgJ/CfkYsnLFxuICAnTG9uZyB0aW1lIG5vIHNlZS4nLFxuICAnWW8hJyxcbl1cblxuZnVuY3Rpb24gZ2V0UGhvdG8oYSkge1xuXG4gIC8vIHZhbGlkYXRpb24gZm9yIGluc3RhZ3JhbSB1c2VybmFtZXNcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLyk7XG4gIHZhciB2YWxpZGF0aW9uID0gcmVnZXgudGVzdChhKTtcblxuICBpZiAodmFsaWRhdGlvbikge1xuXG4gICAgJC5nZXQoXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiICsgYSArIFwiLz9fX2E9MVwiKVxuICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAvLyBnZXR0aW5nIHRoZSB1cmxcbiAgICAgICAgdmFyIHBob3RvVVJMID0gZGF0YVtcImdyYXBocWxcIl1bXCJ1c2VyXCJdW1wicHJvZmlsZV9waWNfdXJsX2hkXCJdO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBpbWcgZWxlbWVudFxuICAgICAgICAkKFwiI3Bob3RvUmV0dXJuXCIpLmF0dHIoXCJzcmNcIiwgcGhvdG9VUkwpXG5cbiAgICAgIH0pXG4gICAgICAuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvZGUgZm9yIDQwNCBlcnJvciBcbiAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIHdhcyBub3QgZm91bmQhJylcbiAgICAgIH0pXG5cbiAgfSBlbHNlIHtcblxuICAgIGFsZXJ0KCdUaGUgdXNlcm5hbWUgaXMgaW52YWxpZCEnKVxuICB9XG5cbn1cblxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaXNIb21lcGFnZSwgc2Vjb25kYXJ5UGFnZSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IG9uTG9hZFRoZW1lID0gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0JMT0dfVEhFTUUnKVxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKG9uTG9hZFRoZW1lKVxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NhbHV0XSA9IHVzZVN0YXRlKFNBTFVUU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTQUxVVFMubGVuZ3RoKV0pXG4gIGNvbnN0IHN3aXRjaFRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldFRvID0gdGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaydcblxuICAgIHNldFRoZW1lKHNldFRvKVxuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlclNob3J0Y3V0KGUpIHtcbiAgICBpZiAoU0hPUlRDVVRTLmluY2x1ZGVzKGUuY29kZSkpIHtcbiAgICAgIC8vIFNwbGl0IGNvZGUgdG8gZ2V0IG9ubHkgdGhlIG51bWJlclxuICAgICAgY29uc3QgY29kZSA9IGUuY29kZS5zcGxpdCgndCcpWzFdXG5cbiAgICAgIC8vIEdldCByb3V0ZSBmcm9tIG1lbnVcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gbWVudVtjb2RlXVxuXG4gICAgICByb3V0ZXIucHVzaChwYXRoKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0cmlnZ2VyU2hvcnRjdXQpXG5cbiAgICBpZiAob25Mb2FkVGhlbWUpIHJldHVyblxuXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XG4gICAgICBzZXRUaGVtZSgnZGFyaycpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSlcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdCTE9HX1RIRU1FJywgdGhlbWUpXG5cbiAgICBzZXRNb3VudGVkKHRydWUpXG4gIH0sIFt0aGVtZV0pXG5cbiAgY29uc3QgY29udGFpbmVyUHJvcHMgPSB7XG4gICAgLi4uaXNIb21lcGFnZSAmJiB7IG1kOiAxMiB9LFxuICAgIC4uLiFpc0hvbWVwYWdlICYmIHsgbWQ6IDUsIG1kT2Zmc2V0OiAyIH0sXG4gIH1cblxuICBpZiAoIW1vdW50ZWQpIHJldHVybiA8ZGl2IC8+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJsYWNrTGl2ZXNNYXR0ZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEwfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICB7bWVudS5tYXAoKHsgcGF0aCwgbmFtZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYXRofSBhcz17cGF0aH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICA8Q29sIHhzPXsyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRoZW1lLXN3aXRjaC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hUaGVtZSgpfT5cbiAgICAgICAgICAgICAge3RoZW1lID09PSAnZGFyaycgPyA8U3VuIC8+IDogPE1vb24gLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB7Li4uY29udGFpbmVyUHJvcHN9PlxuICAgICAgICAgICAgeyFzZWNvbmRhcnlQYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7c2FsdXR9XG4gICAgICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVudHJ5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIE9uY2UuIDIuMCBFbmpveSBpdO+8gSDigJQgVGltbXlcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICB7c2Vjb25kYXJ5UGFnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLW1vYmlsZS1uYXZcIj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gLz5cblxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGhlbWUtc3dpdGNoLWJ1dHRvbi1tb2JpbGVcIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hUaGVtZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdW4gLz4gTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9vbiAvPiBEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2Pk5vIHRyYWNraW5nLiBObyBhZHMuIEhhcHB5IHtjdXJyZW50RGF5TmFtZSgpfSE8L2Rpdj5cbiAgICAgICAgPGRpdj5JR0BvbmNlPC9kaXY+XG4gICAgICAgIDxkaXY+JmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=