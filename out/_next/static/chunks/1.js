(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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

/***/ }),

/***/ "./node_modules/react-text-transition/lib-esm/components/TextTransition.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-text-transition/lib-esm/components/TextTransition.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-text-transition/node_modules/react-spring/web.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var newText = function (text) { return ({ key: "" + Date.now(), data: text }); };
var TextTransition = function (_a) {
    var text = _a.text, direction = _a.direction, inline = _a.inline, delay = _a.delay, className = _a.className, style = _a.style, noOverflow = _a.noOverflow, springConfig = _a.springConfig;
    var placeholderRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"](function () { return newText(text.toString()); }), content = _b[0], setContent = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0), timeoutId = _c[0], setTimeoutId = _c[1];
    var _d = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true), isFirstRun = _d[0], setIsFirstRun = _d[1];
    var _e = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({ width: inline ? 0 : "auto" }), width = _e[0], setWidth = _e[1];
    var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useTransition"])(content, function (item) { return item.key; }, {
        from: { opacity: 0, transform: "translateY(" + (direction === "down" ? "-100%" : "100%") + ")" },
        enter: { opacity: 1, transform: "translateY(0%)" },
        leave: { opacity: 0, transform: "translateY(" + (direction === "down" ? "100%" : "-100%") + ")" },
        config: springConfig,
        immediate: isFirstRun,
        onDestroyed: function () {
            setIsFirstRun(false);
        }
    });
    var animatedProps = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
        to: width,
        config: springConfig,
        immediate: isFirstRun,
    });
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        setTimeoutId(setTimeout(function () {
            if (!placeholderRef.current)
                return;
            placeholderRef.current.innerHTML = text.toString();
            if (inline)
                setWidth({ width: placeholderRef.current.offsetWidth });
            setContent(newText(text.toString()));
        }, delay));
    }, [text]);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () { return function () { return clearTimeout(timeoutId); }; }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, { className: "text-transition " + className, style: __assign(__assign(__assign({}, animatedProps), { whiteSpace: inline ? "nowrap" : "normal", display: inline ? "inline-block" : "block", position: "relative" }), style) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { ref: placeholderRef, style: { visibility: "hidden" }, className: "text-transition_placeholder" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "text-transition_inner", style: {
                overflow: noOverflow ? "hidden" : "visible",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%"
            } }, transitions.map(function (_a) {
            var item = _a.item, props = _a.props, key = _a.key;
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, { key: key, style: __assign(__assign({}, props), { position: "absolute" }) }, item.data));
        }))));
};
TextTransition.propTypes = {
    text: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]]).isRequired,
    direction: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"](["up", "down"]),
    inline: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
    noOverflow: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
    delay: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
    className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
    style: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
    springConfig: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
};
TextTransition.defaultProps = {
    direction: "up",
    noOverflow: false,
    inline: false,
    springConfig: react_spring__WEBPACK_IMPORTED_MODULE_2__["config"].default,
    delay: 0,
    className: "",
    style: {},
};
/* harmony default export */ __webpack_exports__["default"] = (TextTransition);
//# sourceMappingURL=TextTransition.js.map

/***/ }),

/***/ "./node_modules/react-text-transition/lib-esm/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-text-transition/lib-esm/index.js ***!
  \*************************************************************/
/*! exports provided: default, presets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-spring */ "./node_modules/react-text-transition/node_modules/react-spring/web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presets", function() { return react_spring__WEBPACK_IMPORTED_MODULE_0__["config"]; });

/* harmony import */ var _components_TextTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TextTransition */ "./node_modules/react-text-transition/lib-esm/components/TextTransition.js");


/* harmony default export */ __webpack_exports__["default"] = (_components_TextTransition__WEBPACK_IMPORTED_MODULE_1__["default"]);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-text-transition/node_modules/react-spring/web.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-text-transition/node_modules/react-spring/web.js ***!
  \*****************************************************************************/
/*! exports provided: apply, config, update, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ops[entry.delay], entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10ZXh0LXRyYW5zaXRpb24vbGliLWVzbS9jb21wb25lbnRzL1RleHRUcmFuc2l0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdGV4dC10cmFuc2l0aW9uL2xpYi1lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10ZXh0LXRyYW5zaXRpb24vbm9kZV9tb2R1bGVzL3JlYWN0LXNwcmluZy93ZWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUNTO0FBQ2tDO0FBQzFFLCtCQUErQixVQUFVLG1DQUFtQyxFQUFFO0FBQzlFO0FBQ0E7QUFDQSx5QkFBeUIsNENBQVk7QUFDckMsYUFBYSw4Q0FBYyxjQUFjLGlDQUFpQyxFQUFFO0FBQzVFLGFBQWEsOENBQWM7QUFDM0IsYUFBYSw4Q0FBYztBQUMzQixhQUFhLDhDQUFjLEVBQUUsNkJBQTZCO0FBQzFELHNCQUFzQixrRUFBYSwyQkFBMkIsaUJBQWlCLEVBQUU7QUFDakYsZUFBZSx5RkFBeUY7QUFDeEcsZ0JBQWdCLDBDQUEwQztBQUMxRCxnQkFBZ0IseUZBQXlGO0FBQ3pHO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDL0QsNkJBQTZCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDL0UsNkJBQTZCLEVBQUU7QUFDL0IsNkJBQTZCLEVBQUU7O0FBRS9CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtCQUErQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDckMsQ0FBQztBQUNEOzs7QUFHQSw2RUFBNkU7QUFDN0U7O0FBRUEsa0NBQWtDLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSwrQkFBK0IsSUFBSSxtQkFBbUI7O0FBRTlHLHVDQUF1Qyw4QkFBOEI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzR0FBc0csa0ZBQVEsR0FBRztBQUNqSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseUJBQXlCLElBQUkseUJBQXlCO0FBQ3JFO0FBQ0E7QUFDQSw0R0FBNEcsZUFBZSxJQUFJLGVBQWUsSUFBSSxlQUFlLElBQUksR0FBRztBQUN4SztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSwrSkFBK0o7O0FBRS9KO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1R0FBNkI7O0FBRXBEO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFLDZEQUE2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUwiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIHVzZVRyYW5zaXRpb24sIGFuaW1hdGVkLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG52YXIgbmV3VGV4dCA9IGZ1bmN0aW9uICh0ZXh0KSB7IHJldHVybiAoeyBrZXk6IFwiXCIgKyBEYXRlLm5vdygpLCBkYXRhOiB0ZXh0IH0pOyB9O1xudmFyIFRleHRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRleHQgPSBfYS50ZXh0LCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb24sIGlubGluZSA9IF9hLmlubGluZSwgZGVsYXkgPSBfYS5kZWxheSwgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBzdHlsZSA9IF9hLnN0eWxlLCBub092ZXJmbG93ID0gX2Eubm9PdmVyZmxvdywgc3ByaW5nQ29uZmlnID0gX2Euc3ByaW5nQ29uZmlnO1xuICAgIHZhciBwbGFjZWhvbGRlclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICB2YXIgX2IgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7IHJldHVybiBuZXdUZXh0KHRleHQudG9TdHJpbmcoKSk7IH0pLCBjb250ZW50ID0gX2JbMF0sIHNldENvbnRlbnQgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSBSZWFjdC51c2VTdGF0ZSgwKSwgdGltZW91dElkID0gX2NbMF0sIHNldFRpbWVvdXRJZCA9IF9jWzFdO1xuICAgIHZhciBfZCA9IFJlYWN0LnVzZVN0YXRlKHRydWUpLCBpc0ZpcnN0UnVuID0gX2RbMF0sIHNldElzRmlyc3RSdW4gPSBfZFsxXTtcbiAgICB2YXIgX2UgPSBSZWFjdC51c2VTdGF0ZSh7IHdpZHRoOiBpbmxpbmUgPyAwIDogXCJhdXRvXCIgfSksIHdpZHRoID0gX2VbMF0sIHNldFdpZHRoID0gX2VbMV07XG4gICAgdmFyIHRyYW5zaXRpb25zID0gdXNlVHJhbnNpdGlvbihjb250ZW50LCBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5rZXk7IH0sIHtcbiAgICAgICAgZnJvbTogeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWShcIiArIChkaXJlY3Rpb24gPT09IFwiZG93blwiID8gXCItMTAwJVwiIDogXCIxMDAlXCIpICsgXCIpXCIgfSxcbiAgICAgICAgZW50ZXI6IHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoMCUpXCIgfSxcbiAgICAgICAgbGVhdmU6IHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoXCIgKyAoZGlyZWN0aW9uID09PSBcImRvd25cIiA/IFwiMTAwJVwiIDogXCItMTAwJVwiKSArIFwiKVwiIH0sXG4gICAgICAgIGNvbmZpZzogc3ByaW5nQ29uZmlnLFxuICAgICAgICBpbW1lZGlhdGU6IGlzRmlyc3RSdW4sXG4gICAgICAgIG9uRGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRJc0ZpcnN0UnVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBhbmltYXRlZFByb3BzID0gdXNlU3ByaW5nKHtcbiAgICAgICAgdG86IHdpZHRoLFxuICAgICAgICBjb25maWc6IHNwcmluZ0NvbmZpZyxcbiAgICAgICAgaW1tZWRpYXRlOiBpc0ZpcnN0UnVuLFxuICAgIH0pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXRJZChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghcGxhY2Vob2xkZXJSZWYuY3VycmVudClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBwbGFjZWhvbGRlclJlZi5jdXJyZW50LmlubmVySFRNTCA9IHRleHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChpbmxpbmUpXG4gICAgICAgICAgICAgICAgc2V0V2lkdGgoeyB3aWR0aDogcGxhY2Vob2xkZXJSZWYuY3VycmVudC5vZmZzZXRXaWR0aCB9KTtcbiAgICAgICAgICAgIHNldENvbnRlbnQobmV3VGV4dCh0ZXh0LnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfSwgZGVsYXkpKTtcbiAgICB9LCBbdGV4dF0pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhclRpbWVvdXQodGltZW91dElkKTsgfTsgfSwgW10pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChhbmltYXRlZC5kaXYsIHsgY2xhc3NOYW1lOiBcInRleHQtdHJhbnNpdGlvbiBcIiArIGNsYXNzTmFtZSwgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBhbmltYXRlZFByb3BzKSwgeyB3aGl0ZVNwYWNlOiBpbmxpbmUgPyBcIm5vd3JhcFwiIDogXCJub3JtYWxcIiwgZGlzcGxheTogaW5saW5lID8gXCJpbmxpbmUtYmxvY2tcIiA6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9KSwgc3R5bGUpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgcmVmOiBwbGFjZWhvbGRlclJlZiwgc3R5bGU6IHsgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9LCBjbGFzc05hbWU6IFwidGV4dC10cmFuc2l0aW9uX3BsYWNlaG9sZGVyXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGV4dC10cmFuc2l0aW9uX2lubmVyXCIsIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IG5vT3ZlcmZsb3cgPyBcImhpZGRlblwiIDogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgIH0gfSwgdHJhbnNpdGlvbnMubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYS5pdGVtLCBwcm9wcyA9IF9hLnByb3BzLCBrZXkgPSBfYS5rZXk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoYW5pbWF0ZWQuZGl2LCB7IGtleToga2V5LCBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzKSwgeyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH0pIH0sIGl0ZW0uZGF0YSkpO1xuICAgICAgICB9KSkpKTtcbn07XG5UZXh0VHJhbnNpdGlvbi5wcm9wVHlwZXMgPSB7XG4gICAgdGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gICAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoW1widXBcIiwgXCJkb3duXCJdKSxcbiAgICBpbmxpbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5vT3ZlcmZsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzcHJpbmdDb25maWc6IFByb3BUeXBlcy5hbnksXG59O1xuVGV4dFRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICAgIGRpcmVjdGlvbjogXCJ1cFwiLFxuICAgIG5vT3ZlcmZsb3c6IGZhbHNlLFxuICAgIGlubGluZTogZmFsc2UsXG4gICAgc3ByaW5nQ29uZmlnOiBjb25maWcuZGVmYXVsdCxcbiAgICBkZWxheTogMCxcbiAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgc3R5bGU6IHt9LFxufTtcbmV4cG9ydCBkZWZhdWx0IFRleHRUcmFuc2l0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGV4dFRyYW5zaXRpb24uanMubWFwIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IFRleHRUcmFuc2l0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvVGV4dFRyYW5zaXRpb25cIjtcbmV4cG9ydCBkZWZhdWx0IFRleHRUcmFuc2l0aW9uO1xuZXhwb3J0IHsgY29uZmlnIGFzIHByZXNldHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIGZvcndhcmRSZWYsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBpcyA9IHtcbiAgYXJyOiBBcnJheS5pc0FycmF5LFxuICBvYmo6IGEgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSAnW29iamVjdCBPYmplY3RdJyxcbiAgZnVuOiBhID0+IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nLFxuICBzdHI6IGEgPT4gdHlwZW9mIGEgPT09ICdzdHJpbmcnLFxuICBudW06IGEgPT4gdHlwZW9mIGEgPT09ICdudW1iZXInLFxuICB1bmQ6IGEgPT4gYSA9PT0gdm9pZCAwLFxuICBudWw6IGEgPT4gYSA9PT0gbnVsbCxcbiAgc2V0OiBhID0+IGEgaW5zdGFuY2VvZiBTZXQsXG4gIG1hcDogYSA9PiBhIGluc3RhbmNlb2YgTWFwLFxuXG4gIGVxdShhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChpcy5zdHIoYSkgfHwgaXMubnVtKGEpKSByZXR1cm4gYSA9PT0gYjtcbiAgICBpZiAoaXMub2JqKGEpICYmIGlzLm9iaihiKSAmJiBPYmplY3Qua2V5cyhhKS5sZW5ndGggKyBPYmplY3Qua2V5cyhiKS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIGxldCBpO1xuXG4gICAgZm9yIChpIGluIGEpIGlmICghKGkgaW4gYikpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSBpbiBiKSBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGlzLnVuZChpKSA/IGEgPT09IGIgOiB0cnVlO1xuICB9XG5cbn07XG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIGxvd2VyY2FzZSkge1xuICBpZiAobG93ZXJjYXNlID09PSB2b2lkIDApIHtcbiAgICBsb3dlcmNhc2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdCA9PiAoaXMuYXJyKG9iamVjdCkgPyBvYmplY3QgOiBPYmplY3Qua2V5cyhvYmplY3QpKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGxvd2VyY2FzZSA/IGVsZW1lbnRbMF0udG9Mb3dlckNhc2UoKSArIGVsZW1lbnQuc3Vic3RyaW5nKDEpIDogZWxlbWVudDtcbiAgICBhY2Nba2V5XSA9IHRhcmdldChrZXkpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHRhcmdldCk7XG59XG5mdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgY29uc3QgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgICBmID0gX3VzZVN0YXRlWzFdO1xuXG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4gZih2ID0+ICF2KSwgW10pO1xuICByZXR1cm4gZm9yY2VVcGRhdGU7XG59XG5mdW5jdGlvbiB3aXRoRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIHJldHVybiBpcy51bmQodmFsdWUpIHx8IGlzLm51bCh2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRvQXJyYXkoYSkge1xuICByZXR1cm4gIWlzLnVuZChhKSA/IGlzLmFycihhKSA/IGEgOiBbYV0gOiBbXTtcbn1cbmZ1bmN0aW9uIGNhbGxQcm9wKG9iaikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gaXMuZnVuKG9iaikgPyBvYmooLi4uYXJncykgOiBvYmo7XG59XG5cbmZ1bmN0aW9uIGdldEZvcndhcmRQcm9wcyhwcm9wcykge1xuICBjb25zdCB0byA9IHByb3BzLnRvLFxuICAgICAgICBmcm9tID0gcHJvcHMuZnJvbSxcbiAgICAgICAgY29uZmlnID0gcHJvcHMuY29uZmlnLFxuICAgICAgICBvblN0YXJ0ID0gcHJvcHMub25TdGFydCxcbiAgICAgICAgb25SZXN0ID0gcHJvcHMub25SZXN0LFxuICAgICAgICBvbkZyYW1lID0gcHJvcHMub25GcmFtZSxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgcmVzZXQgPSBwcm9wcy5yZXNldCxcbiAgICAgICAgcmV2ZXJzZSA9IHByb3BzLnJldmVyc2UsXG4gICAgICAgIGZvcmNlID0gcHJvcHMuZm9yY2UsXG4gICAgICAgIGltbWVkaWF0ZSA9IHByb3BzLmltbWVkaWF0ZSxcbiAgICAgICAgZGVsYXkgPSBwcm9wcy5kZWxheSxcbiAgICAgICAgYXR0YWNoID0gcHJvcHMuYXR0YWNoLFxuICAgICAgICBkZXN0cm95ZWQgPSBwcm9wcy5kZXN0cm95ZWQsXG4gICAgICAgIGludGVycG9sYXRlVG8gPSBwcm9wcy5pbnRlcnBvbGF0ZVRvLFxuICAgICAgICByZWYgPSBwcm9wcy5yZWYsXG4gICAgICAgIGxhenkgPSBwcm9wcy5sYXp5LFxuICAgICAgICBmb3J3YXJkID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInRvXCIsIFwiZnJvbVwiLCBcImNvbmZpZ1wiLCBcIm9uU3RhcnRcIiwgXCJvblJlc3RcIiwgXCJvbkZyYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJyZXNldFwiLCBcInJldmVyc2VcIiwgXCJmb3JjZVwiLCBcImltbWVkaWF0ZVwiLCBcImRlbGF5XCIsIFwiYXR0YWNoXCIsIFwiZGVzdHJveWVkXCIsIFwiaW50ZXJwb2xhdGVUb1wiLCBcInJlZlwiLCBcImxhenlcIl0pO1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVRvKHByb3BzKSB7XG4gIGNvbnN0IGZvcndhcmQgPSBnZXRGb3J3YXJkUHJvcHMocHJvcHMpO1xuICBpZiAoaXMudW5kKGZvcndhcmQpKSByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHRvOiBmb3J3YXJkXG4gIH0sIHByb3BzKTtcbiAgY29uc3QgcmVzdCA9IE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoKGEsIGspID0+ICFpcy51bmQoZm9yd2FyZFtrXSkgPyBhIDogX2V4dGVuZHMoe30sIGEsIHtcbiAgICBba106IHByb3BzW2tdXG4gIH0pLCB7fSk7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgdG86IGZvcndhcmRcbiAgfSwgcmVzdCk7XG59XG5mdW5jdGlvbiBoYW5kbGVSZWYocmVmLCBmb3J3YXJkKSB7XG4gIGlmIChmb3J3YXJkKSB7XG4gICAgLy8gSWYgaXQncyBhIGZ1bmN0aW9uLCBhc3N1bWUgaXQncyBhIHJlZiBjYWxsYmFja1xuICAgIGlmIChpcy5mdW4oZm9yd2FyZCkpIGZvcndhcmQocmVmKTtlbHNlIGlmIChpcy5vYmooZm9yd2FyZCkpIHtcbiAgICAgIGZvcndhcmQuY3VycmVudCA9IHJlZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVmO1xufVxuXG5jbGFzcyBBbmltYXRlZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGF5bG9hZCA9IHZvaWQgMDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBnZXRBbmltYXRlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG4gIH1cblxuICBnZXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB0aGlzLnBheWxvYWQgfHwgdGhpcztcbiAgfVxuXG4gIGF0dGFjaCgpIHt9XG5cbiAgZGV0YWNoKCkge31cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB0aGlzLmF0dGFjaCgpO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcbiAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB0aGlzLmRldGFjaCgpO1xuICB9XG5cbn1cbmNsYXNzIEFuaW1hdGVkQXJyYXkgZXh0ZW5kcyBBbmltYXRlZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5wYXlsb2FkID0gW107XG5cbiAgICB0aGlzLmF0dGFjaCA9ICgpID0+IHRoaXMucGF5bG9hZC5mb3JFYWNoKHAgPT4gcCBpbnN0YW5jZW9mIEFuaW1hdGVkICYmIHAuYWRkQ2hpbGQodGhpcykpO1xuXG4gICAgdGhpcy5kZXRhY2ggPSAoKSA9PiB0aGlzLnBheWxvYWQuZm9yRWFjaChwID0+IHAgaW5zdGFuY2VvZiBBbmltYXRlZCAmJiBwLnJlbW92ZUNoaWxkKHRoaXMpKTtcbiAgfVxuXG59XG5jbGFzcyBBbmltYXRlZE9iamVjdCBleHRlbmRzIEFuaW1hdGVkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnBheWxvYWQgPSB7fTtcblxuICAgIHRoaXMuYXR0YWNoID0gKCkgPT4gT2JqZWN0LnZhbHVlcyh0aGlzLnBheWxvYWQpLmZvckVhY2gocyA9PiBzIGluc3RhbmNlb2YgQW5pbWF0ZWQgJiYgcy5hZGRDaGlsZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRldGFjaCA9ICgpID0+IE9iamVjdC52YWx1ZXModGhpcy5wYXlsb2FkKS5mb3JFYWNoKHMgPT4gcyBpbnN0YW5jZW9mIEFuaW1hdGVkICYmIHMucmVtb3ZlQ2hpbGQodGhpcykpO1xuICB9XG5cbiAgZ2V0VmFsdWUoYW5pbWF0ZWQpIHtcbiAgICBpZiAoYW5pbWF0ZWQgPT09IHZvaWQgMCkge1xuICAgICAgYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBheWxvYWQpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXlsb2FkW2tleV07XG4gICAgICBpZiAoYW5pbWF0ZWQgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFuaW1hdGVkKSkgY29udGludWU7XG4gICAgICBwYXlsb2FkW2tleV0gPSB2YWx1ZSBpbnN0YW5jZW9mIEFuaW1hdGVkID8gdmFsdWVbYW5pbWF0ZWQgPyAnZ2V0QW5pbWF0ZWRWYWx1ZScgOiAnZ2V0VmFsdWUnXSgpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBheWxvYWQ7XG4gIH1cblxuICBnZXRBbmltYXRlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKHRydWUpO1xuICB9XG5cbn1cblxubGV0IGFwcGx5QW5pbWF0ZWRWYWx1ZXM7XG5mdW5jdGlvbiBpbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzKGZuLCB0cmFuc2Zvcm0pIHtcbiAgYXBwbHlBbmltYXRlZFZhbHVlcyA9IHtcbiAgICBmbixcbiAgICB0cmFuc2Zvcm1cbiAgfTtcbn1cbmxldCBjb2xvck5hbWVzO1xuZnVuY3Rpb24gaW5qZWN0Q29sb3JOYW1lcyhuYW1lcykge1xuICBjb2xvck5hbWVzID0gbmFtZXM7XG59XG5sZXQgcmVxdWVzdEZyYW1lID0gY2IgPT4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IC0xO1xubGV0IGNhbmNlbEZyYW1lID0gaWQgPT4ge1xuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xufTtcbmZ1bmN0aW9uIGluamVjdEZyYW1lKHJhZiwgY2FmKSB7XG4gIHJlcXVlc3RGcmFtZSA9IHJhZjtcbiAgY2FuY2VsRnJhbWUgPSBjYWY7XG59XG5sZXQgaW50ZXJwb2xhdGlvbjtcbmZ1bmN0aW9uIGluamVjdFN0cmluZ0ludGVycG9sYXRvcihmbikge1xuICBpbnRlcnBvbGF0aW9uID0gZm47XG59XG5sZXQgbm93ID0gKCkgPT4gRGF0ZS5ub3coKTtcbmZ1bmN0aW9uIGluamVjdE5vdyhub3dGbikge1xuICBub3cgPSBub3dGbjtcbn1cbmxldCBkZWZhdWx0RWxlbWVudDtcbmZ1bmN0aW9uIGluamVjdERlZmF1bHRFbGVtZW50KGVsKSB7XG4gIGRlZmF1bHRFbGVtZW50ID0gZWw7XG59XG5sZXQgYW5pbWF0ZWRBcGkgPSBub2RlID0+IG5vZGUuY3VycmVudDtcbmZ1bmN0aW9uIGluamVjdEFuaW1hdGVkQXBpKGZuKSB7XG4gIGFuaW1hdGVkQXBpID0gZm47XG59XG5sZXQgY3JlYXRlQW5pbWF0ZWRTdHlsZTtcbmZ1bmN0aW9uIGluamVjdENyZWF0ZUFuaW1hdGVkU3R5bGUoZmFjdG9yeSkge1xuICBjcmVhdGVBbmltYXRlZFN0eWxlID0gZmFjdG9yeTtcbn1cbmxldCBtYW51YWxGcmFtZWxvb3A7XG5mdW5jdGlvbiBpbmplY3RNYW51YWxGcmFtZWxvb3AoY2FsbGJhY2spIHtcbiAgbWFudWFsRnJhbWVsb29wID0gY2FsbGJhY2s7XG59XG5cbnZhciBHbG9iYWxzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBnZXQgYXBwbHlBbmltYXRlZFZhbHVlcyAoKSB7IHJldHVybiBhcHBseUFuaW1hdGVkVmFsdWVzOyB9LFxuICBpbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzOiBpbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzLFxuICBnZXQgY29sb3JOYW1lcyAoKSB7IHJldHVybiBjb2xvck5hbWVzOyB9LFxuICBpbmplY3RDb2xvck5hbWVzOiBpbmplY3RDb2xvck5hbWVzLFxuICBnZXQgcmVxdWVzdEZyYW1lICgpIHsgcmV0dXJuIHJlcXVlc3RGcmFtZTsgfSxcbiAgZ2V0IGNhbmNlbEZyYW1lICgpIHsgcmV0dXJuIGNhbmNlbEZyYW1lOyB9LFxuICBpbmplY3RGcmFtZTogaW5qZWN0RnJhbWUsXG4gIGdldCBpbnRlcnBvbGF0aW9uICgpIHsgcmV0dXJuIGludGVycG9sYXRpb247IH0sXG4gIGluamVjdFN0cmluZ0ludGVycG9sYXRvcjogaW5qZWN0U3RyaW5nSW50ZXJwb2xhdG9yLFxuICBnZXQgbm93ICgpIHsgcmV0dXJuIG5vdzsgfSxcbiAgaW5qZWN0Tm93OiBpbmplY3ROb3csXG4gIGdldCBkZWZhdWx0RWxlbWVudCAoKSB7IHJldHVybiBkZWZhdWx0RWxlbWVudDsgfSxcbiAgaW5qZWN0RGVmYXVsdEVsZW1lbnQ6IGluamVjdERlZmF1bHRFbGVtZW50LFxuICBnZXQgYW5pbWF0ZWRBcGkgKCkgeyByZXR1cm4gYW5pbWF0ZWRBcGk7IH0sXG4gIGluamVjdEFuaW1hdGVkQXBpOiBpbmplY3RBbmltYXRlZEFwaSxcbiAgZ2V0IGNyZWF0ZUFuaW1hdGVkU3R5bGUgKCkgeyByZXR1cm4gY3JlYXRlQW5pbWF0ZWRTdHlsZTsgfSxcbiAgaW5qZWN0Q3JlYXRlQW5pbWF0ZWRTdHlsZTogaW5qZWN0Q3JlYXRlQW5pbWF0ZWRTdHlsZSxcbiAgZ2V0IG1hbnVhbEZyYW1lbG9vcCAoKSB7IHJldHVybiBtYW51YWxGcmFtZWxvb3A7IH0sXG4gIGluamVjdE1hbnVhbEZyYW1lbG9vcDogaW5qZWN0TWFudWFsRnJhbWVsb29wXG59KTtcblxuLyoqXG4gKiBXcmFwcyB0aGUgYHN0eWxlYCBwcm9wZXJ0eSB3aXRoIGBBbmltYXRlZFN0eWxlYC5cbiAqL1xuXG5jbGFzcyBBbmltYXRlZFByb3BzIGV4dGVuZHMgQW5pbWF0ZWRPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY2FsbGJhY2spIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXBkYXRlID0gdm9pZCAwO1xuICAgIHRoaXMucGF5bG9hZCA9ICFwcm9wcy5zdHlsZSA/IHByb3BzIDogX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBzdHlsZTogY3JlYXRlQW5pbWF0ZWRTdHlsZShwcm9wcy5zdHlsZSlcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZSA9IGNhbGxiYWNrO1xuICAgIHRoaXMuYXR0YWNoKCk7XG4gIH1cblxufVxuXG5jb25zdCBpc0Z1bmN0aW9uQ29tcG9uZW50ID0gdmFsID0+IGlzLmZ1bih2YWwpICYmICEodmFsLnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0LkNvbXBvbmVudCk7XG5cbmNvbnN0IGNyZWF0ZUFuaW1hdGVkQ29tcG9uZW50ID0gQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgQW5pbWF0ZWRDb21wb25lbnQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICAgIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gICAgY29uc3QgcHJvcHNBbmltYXRlZCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBub2RlID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGF0dGFjaFByb3BzID0gdXNlQ2FsbGJhY2socHJvcHMgPT4ge1xuICAgICAgY29uc3Qgb2xkUHJvcHNBbmltYXRlZCA9IHByb3BzQW5pbWF0ZWQuY3VycmVudDtcblxuICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkaWRVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAobm9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgZGlkVXBkYXRlID0gYXBwbHlBbmltYXRlZFZhbHVlcy5mbihub2RlLmN1cnJlbnQsIHByb3BzQW5pbWF0ZWQuY3VycmVudC5nZXRBbmltYXRlZFZhbHVlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFub2RlLmN1cnJlbnQgfHwgZGlkVXBkYXRlID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vIElmIG5vIHJlZmVyZW5jZWQgbm9kZSBoYXMgYmVlbiBmb3VuZCwgb3IgdGhlIHVwZGF0ZSB0YXJnZXQgZGlkbid0IGhhdmUgYVxuICAgICAgICAgIC8vIG5hdGl2ZS1yZXNwb25kZXIsIHRoZW4gZm9yY2VVcGRhdGUgdGhlIGFuaW1hdGlvbiAuLi5cbiAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwcm9wc0FuaW1hdGVkLmN1cnJlbnQgPSBuZXcgQW5pbWF0ZWRQcm9wcyhwcm9wcywgY2FsbGJhY2spO1xuICAgICAgb2xkUHJvcHNBbmltYXRlZCAmJiBvbGRQcm9wc0FuaW1hdGVkLmRldGFjaCgpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xuICAgICAgbW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBwcm9wc0FuaW1hdGVkLmN1cnJlbnQgJiYgcHJvcHNBbmltYXRlZC5jdXJyZW50LmRldGFjaCgpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gYW5pbWF0ZWRBcGkobm9kZSwgbW91bnRlZCwgZm9yY2VVcGRhdGUpKTtcbiAgICBhdHRhY2hQcm9wcyhwcm9wcyk7XG5cbiAgICBjb25zdCBfZ2V0VmFsdWUgPSBwcm9wc0FuaW1hdGVkLmN1cnJlbnQuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfZ2V0VmFsdWUuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfZ2V0VmFsdWUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhbmltYXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX2dldFZhbHVlLCBbXCJzY3JvbGxUb3BcIiwgXCJzY3JvbGxMZWZ0XCJdKTsgLy8gRnVuY3Rpb25zIGNhbm5vdCBoYXZlIHJlZnMsIHNlZTpcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1zcHJpbmcvcmVhY3Qtc3ByaW5nL2lzc3Vlcy81NjlcblxuXG4gICAgY29uc3QgcmVmRm4gPSBpc0Z1bmN0aW9uQ29tcG9uZW50KENvbXBvbmVudCkgPyB1bmRlZmluZWQgOiBjaGlsZFJlZiA9PiBub2RlLmN1cnJlbnQgPSBoYW5kbGVSZWYoY2hpbGRSZWYsIHJlZik7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgYW5pbWF0ZWRQcm9wcywge1xuICAgICAgcmVmOiByZWZGblxuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiBBbmltYXRlZENvbXBvbmVudDtcbn07XG5cbmxldCBhY3RpdmUgPSBmYWxzZTtcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IFNldCgpO1xuXG5jb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gIGlmICghYWN0aXZlKSByZXR1cm4gZmFsc2U7XG4gIGxldCB0aW1lID0gbm93KCk7XG5cbiAgZm9yIChsZXQgY29udHJvbGxlciBvZiBjb250cm9sbGVycykge1xuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgY29uZmlnSWR4ID0gMDsgY29uZmlnSWR4IDwgY29udHJvbGxlci5jb25maWdzLmxlbmd0aDsgY29uZmlnSWR4KyspIHtcbiAgICAgIGxldCBjb25maWcgPSBjb250cm9sbGVyLmNvbmZpZ3NbY29uZmlnSWR4XTtcbiAgICAgIGxldCBlbmRPZkFuaW1hdGlvbiwgbGFzdFRpbWU7XG5cbiAgICAgIGZvciAobGV0IHZhbElkeCA9IDA7IHZhbElkeCA8IGNvbmZpZy5hbmltYXRlZFZhbHVlcy5sZW5ndGg7IHZhbElkeCsrKSB7XG4gICAgICAgIGxldCBhbmltYXRpb24gPSBjb25maWcuYW5pbWF0ZWRWYWx1ZXNbdmFsSWR4XTsgLy8gSWYgYW4gYW5pbWF0aW9uIGlzIGRvbmUsIHNraXAsIHVudGlsIGFsbCBvZiB0aGVtIGNvbmNsdWRlXG5cbiAgICAgICAgaWYgKGFuaW1hdGlvbi5kb25lKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGZyb20gPSBjb25maWcuZnJvbVZhbHVlc1t2YWxJZHhdO1xuICAgICAgICBsZXQgdG8gPSBjb25maWcudG9WYWx1ZXNbdmFsSWR4XTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gYW5pbWF0aW9uLmxhc3RQb3NpdGlvbjtcbiAgICAgICAgbGV0IGlzQW5pbWF0ZWQgPSB0byBpbnN0YW5jZW9mIEFuaW1hdGVkO1xuICAgICAgICBsZXQgdmVsb2NpdHkgPSBBcnJheS5pc0FycmF5KGNvbmZpZy5pbml0aWFsVmVsb2NpdHkpID8gY29uZmlnLmluaXRpYWxWZWxvY2l0eVt2YWxJZHhdIDogY29uZmlnLmluaXRpYWxWZWxvY2l0eTtcbiAgICAgICAgaWYgKGlzQW5pbWF0ZWQpIHRvID0gdG8uZ2V0VmFsdWUoKTsgLy8gQ29uY2x1ZGUgYW5pbWF0aW9uIGlmIGl0J3MgZWl0aGVyIGltbWVkaWF0ZSwgb3IgZnJvbS12YWx1ZXMgbWF0Y2ggZW5kLXN0YXRlXG5cbiAgICAgICAgaWYgKGNvbmZpZy5pbW1lZGlhdGUpIHtcbiAgICAgICAgICBhbmltYXRpb24uc2V0VmFsdWUodG8pO1xuICAgICAgICAgIGFuaW1hdGlvbi5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBCcmVhayBhbmltYXRpb24gd2hlbiBzdHJpbmcgdmFsdWVzIGFyZSBpbnZvbHZlZFxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBmcm9tID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnNldFZhbHVlKHRvKTtcbiAgICAgICAgICBhbmltYXRpb24uZG9uZSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLmR1cmF0aW9uICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvKiogRHVyYXRpb24gZWFzaW5nICovXG4gICAgICAgICAgcG9zaXRpb24gPSBmcm9tICsgY29uZmlnLmVhc2luZygodGltZSAtIGFuaW1hdGlvbi5zdGFydFRpbWUpIC8gY29uZmlnLmR1cmF0aW9uKSAqICh0byAtIGZyb20pO1xuICAgICAgICAgIGVuZE9mQW5pbWF0aW9uID0gdGltZSA+PSBhbmltYXRpb24uc3RhcnRUaW1lICsgY29uZmlnLmR1cmF0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5kZWNheSkge1xuICAgICAgICAgIC8qKiBEZWNheSBlYXNpbmcgKi9cbiAgICAgICAgICBwb3NpdGlvbiA9IGZyb20gKyB2ZWxvY2l0eSAvICgxIC0gMC45OTgpICogKDEgLSBNYXRoLmV4cCgtKDEgLSAwLjk5OCkgKiAodGltZSAtIGFuaW1hdGlvbi5zdGFydFRpbWUpKSk7XG4gICAgICAgICAgZW5kT2ZBbmltYXRpb24gPSBNYXRoLmFicyhhbmltYXRpb24ubGFzdFBvc2l0aW9uIC0gcG9zaXRpb24pIDwgMC4xO1xuICAgICAgICAgIGlmIChlbmRPZkFuaW1hdGlvbikgdG8gPSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiogU3ByaW5nIGVhc2luZyAqL1xuICAgICAgICAgIGxhc3RUaW1lID0gYW5pbWF0aW9uLmxhc3RUaW1lICE9PSB2b2lkIDAgPyBhbmltYXRpb24ubGFzdFRpbWUgOiB0aW1lO1xuICAgICAgICAgIHZlbG9jaXR5ID0gYW5pbWF0aW9uLmxhc3RWZWxvY2l0eSAhPT0gdm9pZCAwID8gYW5pbWF0aW9uLmxhc3RWZWxvY2l0eSA6IGNvbmZpZy5pbml0aWFsVmVsb2NpdHk7IC8vIElmIHdlIGxvc3QgYSBsb3Qgb2YgZnJhbWVzIGp1c3QganVtcCB0byB0aGUgZW5kLlxuXG4gICAgICAgICAgaWYgKHRpbWUgPiBsYXN0VGltZSArIDY0KSBsYXN0VGltZSA9IHRpbWU7IC8vIGh0dHA6Ly9nYWZmZXJvbmdhbWVzLmNvbS9nYW1lLXBoeXNpY3MvZml4LXlvdXItdGltZXN0ZXAvXG5cbiAgICAgICAgICBsZXQgbnVtU3RlcHMgPSBNYXRoLmZsb29yKHRpbWUgLSBsYXN0VGltZSk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVN0ZXBzOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBmb3JjZSA9IC1jb25maWcudGVuc2lvbiAqIChwb3NpdGlvbiAtIHRvKTtcbiAgICAgICAgICAgIGxldCBkYW1waW5nID0gLWNvbmZpZy5mcmljdGlvbiAqIHZlbG9jaXR5O1xuICAgICAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IChmb3JjZSArIGRhbXBpbmcpIC8gY29uZmlnLm1hc3M7XG4gICAgICAgICAgICB2ZWxvY2l0eSA9IHZlbG9jaXR5ICsgYWNjZWxlcmF0aW9uICogMSAvIDEwMDA7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uICsgdmVsb2NpdHkgKiAxIC8gMTAwMDtcbiAgICAgICAgICB9IC8vIENvbmRpdGlvbnMgZm9yIHN0b3BwaW5nIHRoZSBzcHJpbmcgYW5pbWF0aW9uXG5cblxuICAgICAgICAgIGxldCBpc092ZXJzaG9vdGluZyA9IGNvbmZpZy5jbGFtcCAmJiBjb25maWcudGVuc2lvbiAhPT0gMCA/IGZyb20gPCB0byA/IHBvc2l0aW9uID4gdG8gOiBwb3NpdGlvbiA8IHRvIDogZmFsc2U7XG4gICAgICAgICAgbGV0IGlzVmVsb2NpdHkgPSBNYXRoLmFicyh2ZWxvY2l0eSkgPD0gY29uZmlnLnByZWNpc2lvbjtcbiAgICAgICAgICBsZXQgaXNEaXNwbGFjZW1lbnQgPSBjb25maWcudGVuc2lvbiAhPT0gMCA/IE1hdGguYWJzKHRvIC0gcG9zaXRpb24pIDw9IGNvbmZpZy5wcmVjaXNpb24gOiB0cnVlO1xuICAgICAgICAgIGVuZE9mQW5pbWF0aW9uID0gaXNPdmVyc2hvb3RpbmcgfHwgaXNWZWxvY2l0eSAmJiBpc0Rpc3BsYWNlbWVudDtcbiAgICAgICAgICBhbmltYXRpb24ubGFzdFZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgICAgYW5pbWF0aW9uLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgfSAvLyBUcmFpbHMgYXJlbid0IGRvbmUgdW50aWwgdGhlaXIgcGFyZW50cyBjb25jbHVkZVxuXG5cbiAgICAgICAgaWYgKGlzQW5pbWF0ZWQgJiYgIWNvbmZpZy50b1ZhbHVlc1t2YWxJZHhdLmRvbmUpIGVuZE9mQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGVuZE9mQW5pbWF0aW9uKSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHRoYXQgd2UgZW5kIHVwIHdpdGggYSByb3VuZCB2YWx1ZVxuICAgICAgICAgIGlmIChhbmltYXRpb24udmFsdWUgIT09IHRvKSBwb3NpdGlvbiA9IHRvO1xuICAgICAgICAgIGFuaW1hdGlvbi5kb25lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBhbmltYXRpb24uc2V0VmFsdWUocG9zaXRpb24pO1xuICAgICAgICBhbmltYXRpb24ubGFzdFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB9IC8vIEtlZXAgdHJhY2sgb2YgdXBkYXRlZCB2YWx1ZXMgb25seSB3aGVuIG5lY2Vzc2FyeVxuXG5cbiAgICAgIGlmIChjb250cm9sbGVyLnByb3BzLm9uRnJhbWUpIGNvbnRyb2xsZXIudmFsdWVzW2NvbmZpZy5uYW1lXSA9IGNvbmZpZy5pbnRlcnBvbGF0aW9uLmdldFZhbHVlKCk7XG4gICAgfSAvLyBVcGRhdGUgY2FsbGJhY2tzIGluIHRoZSBlbmQgb2YgdGhlIGZyYW1lXG5cblxuICAgIGlmIChjb250cm9sbGVyLnByb3BzLm9uRnJhbWUpIGNvbnRyb2xsZXIucHJvcHMub25GcmFtZShjb250cm9sbGVyLnZhbHVlcyk7IC8vIEVpdGhlciBjYWxsIG9uRW5kIG9yIG5leHQgZnJhbWVcblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyKTtcbiAgICAgIGNvbnRyb2xsZXIuc3RvcCh0cnVlKTtcbiAgICB9XG4gIH0gLy8gTG9vcCBvdmVyIGFzIGxvbmcgYXMgdGhlcmUgYXJlIGNvbnRyb2xsZXJzIC4uLlxuXG5cbiAgaWYgKGNvbnRyb2xsZXJzLnNpemUpIHtcbiAgICBpZiAobWFudWFsRnJhbWVsb29wKSBtYW51YWxGcmFtZWxvb3AoKTtlbHNlIHJlcXVlc3RGcmFtZSh1cGRhdGUpO1xuICB9IGVsc2Uge1xuICAgIGFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFjdGl2ZTtcbn07XG5cbmNvbnN0IHN0YXJ0ID0gY29udHJvbGxlciA9PiB7XG4gIGlmICghY29udHJvbGxlcnMuaGFzKGNvbnRyb2xsZXIpKSBjb250cm9sbGVycy5hZGQoY29udHJvbGxlcik7XG5cbiAgaWYgKCFhY3RpdmUpIHtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICAgIGlmIChtYW51YWxGcmFtZWxvb3ApIHJlcXVlc3RGcmFtZShtYW51YWxGcmFtZWxvb3ApO2Vsc2UgcmVxdWVzdEZyYW1lKHVwZGF0ZSk7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3AgPSBjb250cm9sbGVyID0+IHtcbiAgaWYgKGNvbnRyb2xsZXJzLmhhcyhjb250cm9sbGVyKSkgY29udHJvbGxlcnMuZGVsZXRlKGNvbnRyb2xsZXIpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSW50ZXJwb2xhdG9yKHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKSB7XG4gIGlmICh0eXBlb2YgcmFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShyYW5nZSkpIHtcbiAgICByZXR1cm4gY3JlYXRlSW50ZXJwb2xhdG9yKHtcbiAgICAgIHJhbmdlLFxuICAgICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgICBleHRyYXBvbGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGludGVycG9sYXRpb24gJiYgdHlwZW9mIHJhbmdlLm91dHB1dFswXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbihyYW5nZSk7XG4gIH1cblxuICBjb25zdCBjb25maWcgPSByYW5nZTtcbiAgY29uc3Qgb3V0cHV0UmFuZ2UgPSBjb25maWcub3V0cHV0O1xuICBjb25zdCBpbnB1dFJhbmdlID0gY29uZmlnLnJhbmdlIHx8IFswLCAxXTtcbiAgY29uc3QgZXh0cmFwb2xhdGVMZWZ0ID0gY29uZmlnLmV4dHJhcG9sYXRlTGVmdCB8fCBjb25maWcuZXh0cmFwb2xhdGUgfHwgJ2V4dGVuZCc7XG4gIGNvbnN0IGV4dHJhcG9sYXRlUmlnaHQgPSBjb25maWcuZXh0cmFwb2xhdGVSaWdodCB8fCBjb25maWcuZXh0cmFwb2xhdGUgfHwgJ2V4dGVuZCc7XG5cbiAgY29uc3QgZWFzaW5nID0gY29uZmlnLmVhc2luZyB8fCAodCA9PiB0KTtcblxuICByZXR1cm4gaW5wdXQgPT4ge1xuICAgIGNvbnN0IHJhbmdlID0gZmluZFJhbmdlKGlucHV0LCBpbnB1dFJhbmdlKTtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGUoaW5wdXQsIGlucHV0UmFuZ2VbcmFuZ2VdLCBpbnB1dFJhbmdlW3JhbmdlICsgMV0sIG91dHB1dFJhbmdlW3JhbmdlXSwgb3V0cHV0UmFuZ2VbcmFuZ2UgKyAxXSwgZWFzaW5nLCBleHRyYXBvbGF0ZUxlZnQsIGV4dHJhcG9sYXRlUmlnaHQsIGNvbmZpZy5tYXApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShpbnB1dCwgaW5wdXRNaW4sIGlucHV0TWF4LCBvdXRwdXRNaW4sIG91dHB1dE1heCwgZWFzaW5nLCBleHRyYXBvbGF0ZUxlZnQsIGV4dHJhcG9sYXRlUmlnaHQsIG1hcCkge1xuICBsZXQgcmVzdWx0ID0gbWFwID8gbWFwKGlucHV0KSA6IGlucHV0OyAvLyBFeHRyYXBvbGF0ZVxuXG4gIGlmIChyZXN1bHQgPCBpbnB1dE1pbikge1xuICAgIGlmIChleHRyYXBvbGF0ZUxlZnQgPT09ICdpZGVudGl0eScpIHJldHVybiByZXN1bHQ7ZWxzZSBpZiAoZXh0cmFwb2xhdGVMZWZ0ID09PSAnY2xhbXAnKSByZXN1bHQgPSBpbnB1dE1pbjtcbiAgfVxuXG4gIGlmIChyZXN1bHQgPiBpbnB1dE1heCkge1xuICAgIGlmIChleHRyYXBvbGF0ZVJpZ2h0ID09PSAnaWRlbnRpdHknKSByZXR1cm4gcmVzdWx0O2Vsc2UgaWYgKGV4dHJhcG9sYXRlUmlnaHQgPT09ICdjbGFtcCcpIHJlc3VsdCA9IGlucHV0TWF4O1xuICB9XG5cbiAgaWYgKG91dHB1dE1pbiA9PT0gb3V0cHV0TWF4KSByZXR1cm4gb3V0cHV0TWluO1xuICBpZiAoaW5wdXRNaW4gPT09IGlucHV0TWF4KSByZXR1cm4gaW5wdXQgPD0gaW5wdXRNaW4gPyBvdXRwdXRNaW4gOiBvdXRwdXRNYXg7IC8vIElucHV0IFJhbmdlXG5cbiAgaWYgKGlucHV0TWluID09PSAtSW5maW5pdHkpIHJlc3VsdCA9IC1yZXN1bHQ7ZWxzZSBpZiAoaW5wdXRNYXggPT09IEluZmluaXR5KSByZXN1bHQgPSByZXN1bHQgLSBpbnB1dE1pbjtlbHNlIHJlc3VsdCA9IChyZXN1bHQgLSBpbnB1dE1pbikgLyAoaW5wdXRNYXggLSBpbnB1dE1pbik7IC8vIEVhc2luZ1xuXG4gIHJlc3VsdCA9IGVhc2luZyhyZXN1bHQpOyAvLyBPdXRwdXQgUmFuZ2VcblxuICBpZiAob3V0cHV0TWluID09PSAtSW5maW5pdHkpIHJlc3VsdCA9IC1yZXN1bHQ7ZWxzZSBpZiAob3V0cHV0TWF4ID09PSBJbmZpbml0eSkgcmVzdWx0ID0gcmVzdWx0ICsgb3V0cHV0TWluO2Vsc2UgcmVzdWx0ID0gcmVzdWx0ICogKG91dHB1dE1heCAtIG91dHB1dE1pbikgKyBvdXRwdXRNaW47XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRSYW5nZShpbnB1dCwgaW5wdXRSYW5nZSkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0UmFuZ2UubGVuZ3RoIC0gMTsgKytpKSBpZiAoaW5wdXRSYW5nZVtpXSA+PSBpbnB1dCkgYnJlYWs7XG5cbiAgcmV0dXJuIGkgLSAxO1xufVxuXG5jbGFzcyBBbmltYXRlZEludGVycG9sYXRpb24gZXh0ZW5kcyBBbmltYXRlZEFycmF5IHtcbiAgY29uc3RydWN0b3IocGFyZW50cywgcmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2FsYyA9IHZvaWQgMDtcbiAgICB0aGlzLnBheWxvYWQgPSBwYXJlbnRzIGluc3RhbmNlb2YgQW5pbWF0ZWRBcnJheSAmJiAhKHBhcmVudHMgaW5zdGFuY2VvZiBBbmltYXRlZEludGVycG9sYXRpb24pID8gcGFyZW50cy5nZXRQYXlsb2FkKCkgOiBBcnJheS5pc0FycmF5KHBhcmVudHMpID8gcGFyZW50cyA6IFtwYXJlbnRzXTtcbiAgICB0aGlzLmNhbGMgPSBjcmVhdGVJbnRlcnBvbGF0b3IocmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsYyguLi50aGlzLnBheWxvYWQubWFwKHZhbHVlID0+IHZhbHVlLmdldFZhbHVlKCkpKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbmZpZyhyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSkge1xuICAgIHRoaXMuY2FsYyA9IGNyZWF0ZUludGVycG9sYXRvcihyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSk7XG4gIH1cblxuICBpbnRlcnBvbGF0ZShyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSkge1xuICAgIHJldHVybiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHRoaXMsIHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKTtcbiAgfVxuXG59XG5cbmNvbnN0IGludGVycG9sYXRlJDEgPSAocGFyZW50cywgcmFuZ2UsIG91dHB1dCkgPT4gcGFyZW50cyAmJiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHBhcmVudHMsIHJhbmdlLCBvdXRwdXQpO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICB0ZW5zaW9uOiAxNzAsXG4gICAgZnJpY3Rpb246IDI2XG4gIH0sXG4gIGdlbnRsZToge1xuICAgIHRlbnNpb246IDEyMCxcbiAgICBmcmljdGlvbjogMTRcbiAgfSxcbiAgd29iYmx5OiB7XG4gICAgdGVuc2lvbjogMTgwLFxuICAgIGZyaWN0aW9uOiAxMlxuICB9LFxuICBzdGlmZjoge1xuICAgIHRlbnNpb246IDIxMCxcbiAgICBmcmljdGlvbjogMjBcbiAgfSxcbiAgc2xvdzoge1xuICAgIHRlbnNpb246IDI4MCxcbiAgICBmcmljdGlvbjogNjBcbiAgfSxcbiAgbW9sYXNzZXM6IHtcbiAgICB0ZW5zaW9uOiAyODAsXG4gICAgZnJpY3Rpb246IDEyMFxuICB9XG59O1xuXG4vKiogQVBJXG4gKiAgdXNlQ2hhaW4ocmVmZXJlbmNlcywgdGltZVN0ZXBzLCB0aW1lRnJhbWUpXG4gKi9cblxuZnVuY3Rpb24gdXNlQ2hhaW4ocmVmcywgdGltZVN0ZXBzLCB0aW1lRnJhbWUpIHtcbiAgaWYgKHRpbWVGcmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgdGltZUZyYW1lID0gMTAwMDtcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzID0gdXNlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzLmVxdShyZWZzLCBwcmV2aW91cy5jdXJyZW50KSkgcmVmcy5mb3JFYWNoKChfcmVmKSA9PiB7XG4gICAgICBsZXQgY3VycmVudCA9IF9yZWYuY3VycmVudDtcbiAgICAgIHJldHVybiBjdXJyZW50ICYmIGN1cnJlbnQuc3RhcnQoKTtcbiAgICB9KTtlbHNlIGlmICh0aW1lU3RlcHMpIHtcbiAgICAgIHJlZnMuZm9yRWFjaCgoX3JlZjIsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gX3JlZjIuY3VycmVudDtcblxuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGN0cmxzID0gY3VycmVudC5jb250cm9sbGVycztcblxuICAgICAgICAgIGlmIChjdHJscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aW1lRnJhbWUgKiB0aW1lU3RlcHNbaW5kZXhdO1xuICAgICAgICAgICAgY3RybHMuZm9yRWFjaChjdHJsID0+IHtcbiAgICAgICAgICAgICAgY3RybC5xdWV1ZSA9IGN0cmwucXVldWUubWFwKGUgPT4gX2V4dGVuZHMoe30sIGUsIHtcbiAgICAgICAgICAgICAgICBkZWxheTogZS5kZWxheSArIHRcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICBjdHJsLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSByZWZzLnJlZHVjZSgocSwgX3JlZjMsIHJJKSA9PiB7XG4gICAgICBsZXQgY3VycmVudCA9IF9yZWYzLmN1cnJlbnQ7XG4gICAgICByZXR1cm4gcSA9IHEudGhlbigoKSA9PiBjdXJyZW50LnN0YXJ0KCkpO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICBwcmV2aW91cy5jdXJyZW50ID0gcmVmcztcbiAgfSk7XG59XG5cbi8qKlxuICogQW5pbWF0ZWQgd29ya3MgYnkgYnVpbGRpbmcgYSBkaXJlY3RlZCBhY3ljbGljIGdyYXBoIG9mIGRlcGVuZGVuY2llc1xuICogdHJhbnNwYXJlbnRseSB3aGVuIHlvdSByZW5kZXIgeW91ciBBbmltYXRlZCBjb21wb25lbnRzLlxuICpcbiAqICAgICAgICAgICAgICAgbmV3IEFuaW1hdGVkLlZhbHVlKDApXG4gKiAgICAgLmludGVycG9sYXRlKCkgICAgICAgIC5pbnRlcnBvbGF0ZSgpICAgIG5ldyBBbmltYXRlZC5WYWx1ZSgxKVxuICogICAgICAgICBvcGFjaXR5ICAgICAgICAgICAgICAgdHJhbnNsYXRlWSAgICAgIHNjYWxlXG4gKiAgICAgICAgICBzdHlsZSAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1cbiAqICAgICAgICAgVmlldyMyMzQgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IzEyM1xuICpcbiAqIEEpIFRvcCBEb3duIHBoYXNlXG4gKiBXaGVuIGFuIEFuaW1hdGVkVmFsdWUgaXMgdXBkYXRlZCwgd2UgcmVjdXJzaXZlbHkgZ28gZG93biB0aHJvdWdoIHRoaXNcbiAqIGdyYXBoIGluIG9yZGVyIHRvIGZpbmQgbGVhZiBub2RlczogdGhlIHZpZXdzIHRoYXQgd2UgZmxhZyBhcyBuZWVkaW5nXG4gKiBhbiB1cGRhdGUuXG4gKlxuICogQikgQm90dG9tIFVwIHBoYXNlXG4gKiBXaGVuIGEgdmlldyBpcyBmbGFnZ2VkIGFzIG5lZWRpbmcgYW4gdXBkYXRlLCB3ZSByZWN1cnNpdmVseSBnbyBiYWNrIHVwXG4gKiBpbiBvcmRlciB0byBidWlsZCB0aGUgbmV3IHZhbHVlIHRoYXQgaXQgbmVlZHMuIFRoZSByZWFzb24gd2h5IHdlIG5lZWRcbiAqIHRoaXMgdHdvLXBoYXNlcyBwcm9jZXNzIGlzIHRvIGRlYWwgd2l0aCBjb21wb3NpdGUgcHJvcHMgc3VjaCBhc1xuICogdHJhbnNmb3JtIHdoaWNoIGNhbiByZWNlaXZlIHZhbHVlcyBmcm9tIG11bHRpcGxlIHBhcmVudHMuXG4gKi9cbmZ1bmN0aW9uIGFkZEFuaW1hdGVkU3R5bGVzKG5vZGUsIHN0eWxlcykge1xuICBpZiAoJ3VwZGF0ZScgaW4gbm9kZSkge1xuICAgIHN0eWxlcy5hZGQobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4gYWRkQW5pbWF0ZWRTdHlsZXMoY2hpbGQsIHN0eWxlcykpO1xuICB9XG59XG5cbmNsYXNzIEFuaW1hdGVkVmFsdWUgZXh0ZW5kcyBBbmltYXRlZCB7XG4gIGNvbnN0cnVjdG9yKF92YWx1ZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIHN1cGVyKCk7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuYW5pbWF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy52YWx1ZSA9IHZvaWQgMDtcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB2b2lkIDA7XG4gICAgdGhpcy5sYXN0UG9zaXRpb24gPSB2b2lkIDA7XG4gICAgdGhpcy5sYXN0VmVsb2NpdHkgPSB2b2lkIDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSB2b2lkIDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IHZvaWQgMDtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZsdXNoKSB7XG4gICAgICBpZiAoZmx1c2ggPT09IHZvaWQgMCkge1xuICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoZmx1c2gpIF90aGlzLmZsdXNoKCk7XG4gICAgfTtcblxuICAgIHRoaXMudmFsdWUgPSBfdmFsdWU7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gX3ZhbHVlO1xuICAgIHRoaXMubGFzdFBvc2l0aW9uID0gX3ZhbHVlO1xuICB9XG5cbiAgZmx1c2goKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0ZWRTdHlsZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgYWRkQW5pbWF0ZWRTdHlsZXModGhpcywgdGhpcy5hbmltYXRlZFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRlZFN0eWxlcy5mb3JFYWNoKGFuaW1hdGVkU3R5bGUgPT4gYW5pbWF0ZWRTdHlsZS51cGRhdGUoKSk7XG4gIH1cblxuICBjbGVhclN0eWxlcygpIHtcbiAgICB0aGlzLmFuaW1hdGVkU3R5bGVzLmNsZWFyKCk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGludGVycG9sYXRlKHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBBbmltYXRlZEludGVycG9sYXRpb24odGhpcywgcmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpO1xuICB9XG5cbn1cblxuY2xhc3MgQW5pbWF0ZWRWYWx1ZUFycmF5IGV4dGVuZHMgQW5pbWF0ZWRBcnJheSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXlsb2FkID0gdmFsdWVzLm1hcChuID0+IG5ldyBBbmltYXRlZFZhbHVlKG4pKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlLCBmbHVzaCkge1xuICAgIGlmIChmbHVzaCA9PT0gdm9pZCAwKSB7XG4gICAgICBmbHVzaCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSB0aGlzLnBheWxvYWQubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKHYsIGkpID0+IHRoaXMucGF5bG9hZFtpXS5zZXRWYWx1ZSh2LCBmbHVzaCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBheWxvYWQuZm9yRWFjaChwID0+IHAuc2V0VmFsdWUodmFsdWUsIGZsdXNoKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF5bG9hZC5tYXAodiA9PiB2LmdldFZhbHVlKCkpO1xuICB9XG5cbiAgaW50ZXJwb2xhdGUocmFuZ2UsIG91dHB1dCkge1xuICAgIHJldHVybiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHRoaXMsIHJhbmdlLCBvdXRwdXQpO1xuICB9XG5cbn1cblxubGV0IEcgPSAwO1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pZCA9IHZvaWQgMDtcbiAgICB0aGlzLmlkbGUgPSB0cnVlO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ3VpZCA9IDA7XG4gICAgdGhpcy5sb2NhbCA9IDA7XG4gICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgIHRoaXMubWVyZ2VkID0ge307XG4gICAgdGhpcy5hbmltYXRpb25zID0ge307XG4gICAgdGhpcy5pbnRlcnBvbGF0aW9ucyA9IHt9O1xuICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgdGhpcy5jb25maWdzID0gW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy5sb2NhbFF1ZXVlID0gdm9pZCAwO1xuXG4gICAgdGhpcy5nZXRWYWx1ZXMgPSAoKSA9PiB0aGlzLmludGVycG9sYXRpb25zO1xuXG4gICAgdGhpcy5pZCA9IEcrKztcbiAgfVxuICAvKiogdXBkYXRlKHByb3BzKVxuICAgKiAgVGhpcyBmdW5jdGlvbiBmaWx0ZXJzIGlucHV0IHByb3BzIGFuZCBjcmVhdGVzIGFuIGFycmF5IG9mIHRhc2tzIHdoaWNoIGFyZSBleGVjdXRlZCBpbiAuc3RhcnQoKVxuICAgKiAgRWFjaCB0YXNrIGlzIGFsbG93ZWQgdG8gY2FycnkgYSBkZWxheSwgd2hpY2ggbWVhbnMgaXQgY2FuIGV4ZWN1dGUgYXNueWNocm9uZW91c2x5ICovXG5cblxuICB1cGRhdGUoYXJncykge1xuICAgIC8vdGhpcy5faWQgPSBuICsgdGhpcy5pZFxuICAgIGlmICghYXJncykgcmV0dXJuIHRoaXM7IC8vIEV4dHJhY3QgZGVsYXkgYW5kIHRoZSB0by1wcm9wIGZyb20gcHJvcHNcblxuICAgIGNvbnN0IF9yZWYgPSBpbnRlcnBvbGF0ZVRvKGFyZ3MpLFxuICAgICAgICAgIF9yZWYkZGVsYXkgPSBfcmVmLmRlbGF5LFxuICAgICAgICAgIGRlbGF5ID0gX3JlZiRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9yZWYkZGVsYXksXG4gICAgICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiZGVsYXlcIiwgXCJ0b1wiXSk7XG5cbiAgICBpZiAoaXMuYXJyKHRvKSB8fCBpcy5mdW4odG8pKSB7XG4gICAgICAvLyBJZiBjb25maWcgaXMgZWl0aGVyIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkgcXVldWUgaXQgdXAgYXMgaXNcbiAgICAgIHRoaXMucXVldWUucHVzaChfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIHRvXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmICh0bykge1xuICAgICAgLy8gT3RoZXJ3aXNlIGdvIHRocm91Z2ggZWFjaCBrZXkgc2luY2UgaXQgY291bGQgYmUgZGVsYXllZCBpbmRpdmlkdWFsbHlcbiAgICAgIGxldCBvcHMgPSB7fTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRvKS5mb3JFYWNoKChfcmVmMikgPT4ge1xuICAgICAgICBsZXQgayA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgdiA9IF9yZWYyWzFdO1xuXG4gICAgICAgIC8vIEZldGNoIGRlbGF5IGFuZCBjcmVhdGUgYW4gZW50cnksIGNvbnNpc3Rpbmcgb2YgdGhlIHRvLXByb3BzLCB0aGUgZGVsYXksIGFuZCBiYXNpYyBwcm9wc1xuICAgICAgICBjb25zdCBlbnRyeSA9IF9leHRlbmRzKHtcbiAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgW2tdOiB2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxheTogY2FsbFByb3AoZGVsYXksIGspXG4gICAgICAgIH0sIHByb3BzKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91cyA9IG9wc1tlbnRyeS5kZWxheV0gJiYgb3BzW2VudHJ5LmRlbGF5XS50bztcbiAgICAgICAgb3BzW2VudHJ5LmRlbGF5XSA9IF9leHRlbmRzKHt9LCBvcHNbZW50cnkuZGVsYXldLCBlbnRyeSwge1xuICAgICAgICAgIHRvOiBfZXh0ZW5kcyh7fSwgcHJldmlvdXMsIGVudHJ5LnRvKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5xdWV1ZSA9IE9iamVjdC52YWx1ZXMob3BzKTtcbiAgICB9IC8vIFNvcnQgcXVldWUsIHNvIHRoYXQgYXN5bmMgY2FsbHMgZ28gbGFzdFxuXG5cbiAgICB0aGlzLnF1ZXVlID0gdGhpcy5xdWV1ZS5zb3J0KChhLCBiKSA9PiBhLmRlbGF5IC0gYi5kZWxheSk7IC8vIERpZmYgdGhlIHJlZHVjZWQgcHJvcHMgaW1tZWRpYXRlbHkgKHRoZXknbGwgY29udGFpbiB0aGUgZnJvbS1wcm9wIGFuZCBzb21lIGNvbmZpZylcblxuICAgIHRoaXMuZGlmZihwcm9wcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIHN0YXJ0KG9uRW5kKVxuICAgKiAgVGhpcyBmdW5jdGlvbiBlaXRoZXIgZXhlY3V0ZXMgYSBxdWV1ZSwgaWYgcHJlc2VudCwgb3Igc3RhcnRzIHRoZSBmcmFtZWxvb3AsIHdoaWNoIGFuaW1hdGVzICovXG5cblxuICBzdGFydChvbkVuZCkge1xuICAgIC8vIElmIGEgcXVldWUgaXMgcHJlc2VudCB3ZSBtdXN0IGV4Y2VjdXRlIGl0XG4gICAgaWYgKHRoaXMucXVldWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlkbGUgPSBmYWxzZTsgLy8gVXBkYXRlcyBjYW4gaW50ZXJydXB0IHRyYWlsaW5nIHF1ZXVlcywgaW4gdGhhdCBjYXNlIHdlIGp1c3QgbWVyZ2UgdmFsdWVzXG5cbiAgICAgIGlmICh0aGlzLmxvY2FsUXVldWUpIHtcbiAgICAgICAgdGhpcy5sb2NhbFF1ZXVlLmZvckVhY2goKF9yZWYzKSA9PiB7XG4gICAgICAgICAgbGV0IF9yZWYzJGZyb20gPSBfcmVmMy5mcm9tLFxuICAgICAgICAgICAgICBmcm9tID0gX3JlZjMkZnJvbSA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRmcm9tLFxuICAgICAgICAgICAgICBfcmVmMyR0byA9IF9yZWYzLnRvLFxuICAgICAgICAgICAgICB0byA9IF9yZWYzJHRvID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJHRvO1xuICAgICAgICAgIGlmIChpcy5vYmooZnJvbSkpIHRoaXMubWVyZ2VkID0gX2V4dGVuZHMoe30sIGZyb20sIHRoaXMubWVyZ2VkKTtcbiAgICAgICAgICBpZiAoaXMub2JqKHRvKSkgdGhpcy5tZXJnZWQgPSBfZXh0ZW5kcyh7fSwgdGhpcy5tZXJnZWQsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFRoZSBndWlkIGhlbHBzIHVzIHRyYWNraW5nIGZyYW1lcywgYSBuZXcgcXVldWUgb3ZlciBhbiBvbGQgb25lIG1lYW5zIGFuIG92ZXJyaWRlXG4gICAgICAvLyBXZSBkaXNjYXJkIGFzeW5jIGNhbGxzIGluIHRoYXQgY2FzZcONXG5cblxuICAgICAgY29uc3QgbG9jYWwgPSB0aGlzLmxvY2FsID0gKyt0aGlzLmd1aWQ7XG4gICAgICBjb25zdCBxdWV1ZSA9IHRoaXMubG9jYWxRdWV1ZSA9IHRoaXMucXVldWU7XG4gICAgICB0aGlzLnF1ZXVlID0gW107IC8vIEdvIHRocm91Z2ggZWFjaCBlbnRyeSBhbmQgZXhlY3V0ZSBpdFxuXG4gICAgICBxdWV1ZS5mb3JFYWNoKChfcmVmNCwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGRlbGF5ID0gX3JlZjQuZGVsYXksXG4gICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY0LCBbXCJkZWxheVwiXSk7XG5cbiAgICAgICAgY29uc3QgY2IgPSBmaW5pc2hlZCA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSBxdWV1ZS5sZW5ndGggLSAxICYmIGxvY2FsID09PSB0aGlzLmd1aWQgJiYgZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWRsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlc3QpIHRoaXMucHJvcHMub25SZXN0KHRoaXMubWVyZ2VkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob25FbmQpIG9uRW5kKCk7XG4gICAgICAgIH07IC8vIEVudHJpZXMgY2FuIGJlIGRlbGF5ZWQsIGFuc3ljIG9yIGltbWVkaWF0ZVxuXG5cbiAgICAgICAgbGV0IGFzeW5jID0gaXMuYXJyKHByb3BzLnRvKSB8fCBpcy5mdW4ocHJvcHMudG8pO1xuXG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvY2FsID09PSB0aGlzLmd1aWQpIHtcbiAgICAgICAgICAgICAgaWYgKGFzeW5jKSB0aGlzLnJ1bkFzeW5jKHByb3BzLCBjYik7ZWxzZSB0aGlzLmRpZmYocHJvcHMpLnN0YXJ0KGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXN5bmMpIHRoaXMucnVuQXN5bmMocHJvcHMsIGNiKTtlbHNlIHRoaXMuZGlmZihwcm9wcykuc3RhcnQoY2IpO1xuICAgICAgfSk7XG4gICAgfSAvLyBPdGhlcndpc2Ugd2Uga2ljayBvZiB0aGUgZnJhbWVsb29wXG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpcy5mdW4ob25FbmQpKSB0aGlzLmxpc3RlbmVycy5wdXNoKG9uRW5kKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGFydCkgdGhpcy5wcm9wcy5vblN0YXJ0KCk7XG4gICAgICAgIHN0YXJ0KHRoaXMpO1xuICAgICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKGZpbmlzaGVkKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChvbkVuZCA9PiBvbkVuZChmaW5pc2hlZCkpO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIFBhdXNlIHNldHMgb25FbmQgbGlzdGVuZXJzIGZyZWUsIGJ1dCBhbHNvIHJlbW92ZXMgdGhlIGNvbnRyb2xsZXIgZnJvbSB0aGUgZnJhbWVsb29wICovXG5cblxuICBwYXVzZShmaW5pc2hlZCkge1xuICAgIHRoaXMuc3RvcCh0cnVlKTtcbiAgICBpZiAoZmluaXNoZWQpIHN0b3AodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBydW5Bc3luYyhfcmVmNSwgb25FbmQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGRlbGF5ID0gX3JlZjUuZGVsYXksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIFtcImRlbGF5XCJdKTtcblxuICAgIGNvbnN0IGxvY2FsID0gdGhpcy5sb2NhbDsgLy8gSWYgXCJ0b1wiIGlzIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5IGl0IHdpbGwgYmUgcHJvY2Vzc2VkIGFzeW5jLCB0aGVyZWZvciBcInRvXCIgc2hvdWxkIGJlIGVtcHR5IHJpZ2h0IG5vd1xuICAgIC8vIElmIHRoZSB2aWV3IHJlbGllcyBvbiBjZXJ0YWluIHZhbHVlcyBcImZyb21cIiBoYXMgdG8gYmUgcHJlc2VudFxuXG4gICAgbGV0IHF1ZXVlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG5cbiAgICBpZiAoaXMuYXJyKHByb3BzLnRvKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy50by5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbmRleCA9IGk7XG5cbiAgICAgICAgY29uc3QgZnJlc2ggPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIGludGVycG9sYXRlVG8ocHJvcHMudG9baW5kZXhdKSk7XG5cbiAgICAgICAgaWYgKGlzLmFycihmcmVzaC5jb25maWcpKSBmcmVzaC5jb25maWcgPSBmcmVzaC5jb25maWdbaW5kZXhdO1xuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vdGhpcy5zdG9wKClcbiAgICAgICAgICBpZiAobG9jYWwgPT09IHRoaXMuZ3VpZCkgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gdGhpcy5kaWZmKGZyZXNoKS5zdGFydChyKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXMuZnVuKHByb3BzLnRvKSkge1xuICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgIGxldCBsYXN0O1xuICAgICAgcXVldWUgPSBxdWV1ZS50aGVuKCgpID0+IHByb3BzLnRvKCAvLyBuZXh0KHByb3BzKVxuICAgICAgcCA9PiB7XG4gICAgICAgIGNvbnN0IGZyZXNoID0gX2V4dGVuZHMoe30sIHByb3BzLCBpbnRlcnBvbGF0ZVRvKHApKTtcblxuICAgICAgICBpZiAoaXMuYXJyKGZyZXNoLmNvbmZpZykpIGZyZXNoLmNvbmZpZyA9IGZyZXNoLmNvbmZpZ1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7IC8vdGhpcy5zdG9wKClcblxuICAgICAgICBpZiAobG9jYWwgPT09IHRoaXMuZ3VpZCkgcmV0dXJuIGxhc3QgPSBuZXcgUHJvbWlzZShyID0+IHRoaXMuZGlmZihmcmVzaCkuc3RhcnQocikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9LCAvLyBjYW5jZWwoKVxuICAgICAgZnVuY3Rpb24gKGZpbmlzaGVkKSB7XG4gICAgICAgIGlmIChmaW5pc2hlZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLnN0b3AoZmluaXNoZWQpO1xuICAgICAgfSkudGhlbigoKSA9PiBsYXN0KSk7XG4gICAgfVxuXG4gICAgcXVldWUudGhlbihvbkVuZCk7XG4gIH1cblxuICBkaWZmKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBwcm9wcyk7XG4gICAgbGV0IF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgX3RoaXMkcHJvcHMkZnJvbSA9IF90aGlzJHByb3BzLmZyb20sXG4gICAgICAgIGZyb20gPSBfdGhpcyRwcm9wcyRmcm9tID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzJGZyb20sXG4gICAgICAgIF90aGlzJHByb3BzJHRvID0gX3RoaXMkcHJvcHMudG8sXG4gICAgICAgIHRvID0gX3RoaXMkcHJvcHMkdG8gPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkdG8sXG4gICAgICAgIF90aGlzJHByb3BzJGNvbmZpZyA9IF90aGlzJHByb3BzLmNvbmZpZyxcbiAgICAgICAgY29uZmlnID0gX3RoaXMkcHJvcHMkY29uZmlnID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzJGNvbmZpZyxcbiAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzLnJldmVyc2UsXG4gICAgICAgIGF0dGFjaCA9IF90aGlzJHByb3BzLmF0dGFjaCxcbiAgICAgICAgcmVzZXQgPSBfdGhpcyRwcm9wcy5yZXNldCxcbiAgICAgICAgaW1tZWRpYXRlID0gX3RoaXMkcHJvcHMuaW1tZWRpYXRlOyAvLyBSZXZlcnNlIHZhbHVlcyB3aGVuIHJlcXVlc3RlZFxuXG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIHZhciBfcmVmNiA9IFt0bywgZnJvbV07XG4gICAgICBmcm9tID0gX3JlZjZbMF07XG4gICAgICB0byA9IF9yZWY2WzFdO1xuICAgIH0gLy8gVGhpcyB3aWxsIGNvbGxlY3QgYWxsIHByb3BzIHRoYXQgd2VyZSBldmVyIHNldCwgcmVzZXQgbWVyZ2VkIHByb3BzIHdoZW4gbmVjZXNzYXJ5XG5cblxuICAgIHRoaXMubWVyZ2VkID0gX2V4dGVuZHMoe30sIGZyb20sIHRoaXMubWVyZ2VkLCB0byk7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7IC8vIEF0dGFjaG1lbnQgaGFuZGxpbmcsIHRyYWlsZWQgc3ByaW5ncyBjYW4gXCJhdHRhY2hcIiB0aGVtc2VsdmVzIHRvIGEgcHJldmlvdXMgc3ByaW5nXG5cbiAgICBsZXQgdGFyZ2V0ID0gYXR0YWNoICYmIGF0dGFjaCh0aGlzKTsgLy8gUmVkdWNlcyBpbnB1dCB7IG5hbWU6IHZhbHVlIH0gcGFpcnMgaW50byBhbmltYXRlZCB2YWx1ZXNcblxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IE9iamVjdC5lbnRyaWVzKHRoaXMubWVyZ2VkKS5yZWR1Y2UoKGFjYywgX3JlZjcpID0+IHtcbiAgICAgIGxldCBuYW1lID0gX3JlZjdbMF0sXG4gICAgICAgICAgdmFsdWUgPSBfcmVmN1sxXTtcbiAgICAgIC8vIElzc3VlIGNhY2hlZCBlbnRyaWVzLCBleGNlcHQgb24gcmVzZXRcbiAgICAgIGxldCBlbnRyeSA9IGFjY1tuYW1lXSB8fCB7fTsgLy8gRmlndXJlIG91dCB3aGF0IHRoZSB2YWx1ZSBpcyBzdXBwb3NlZCB0byBiZVxuXG4gICAgICBjb25zdCBpc051bWJlciA9IGlzLm51bSh2YWx1ZSk7XG4gICAgICBjb25zdCBpc1N0cmluZyA9IGlzLnN0cih2YWx1ZSkgJiYgIXZhbHVlLnN0YXJ0c1dpdGgoJyMnKSAmJiAhL1xcZC8udGVzdCh2YWx1ZSkgJiYgIWNvbG9yTmFtZXNbdmFsdWVdO1xuICAgICAgY29uc3QgaXNBcnJheSA9IGlzLmFycih2YWx1ZSk7XG4gICAgICBjb25zdCBpc0ludGVycG9sYXRpb24gPSAhaXNOdW1iZXIgJiYgIWlzQXJyYXkgJiYgIWlzU3RyaW5nO1xuICAgICAgbGV0IGZyb21WYWx1ZSA9ICFpcy51bmQoZnJvbVtuYW1lXSkgPyBmcm9tW25hbWVdIDogdmFsdWU7XG4gICAgICBsZXQgdG9WYWx1ZSA9IGlzTnVtYmVyIHx8IGlzQXJyYXkgPyB2YWx1ZSA6IGlzU3RyaW5nID8gdmFsdWUgOiAxO1xuICAgICAgbGV0IHRvQ29uZmlnID0gY2FsbFByb3AoY29uZmlnLCBuYW1lKTtcbiAgICAgIGlmICh0YXJnZXQpIHRvVmFsdWUgPSB0YXJnZXQuYW5pbWF0aW9uc1tuYW1lXS5wYXJlbnQ7XG4gICAgICBsZXQgcGFyZW50ID0gZW50cnkucGFyZW50LFxuICAgICAgICAgIGludGVycG9sYXRpb24kJDEgPSBlbnRyeS5pbnRlcnBvbGF0aW9uLFxuICAgICAgICAgIHRvVmFsdWVzID0gdG9BcnJheSh0YXJnZXQgPyB0b1ZhbHVlLmdldFBheWxvYWQoKSA6IHRvVmFsdWUpLFxuICAgICAgICAgIGFuaW1hdGVkVmFsdWVzO1xuICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoaXNJbnRlcnBvbGF0aW9uKSBuZXdWYWx1ZSA9IGludGVycG9sYXRpb24oe1xuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICBvdXRwdXQ6IFt2YWx1ZSwgdmFsdWVdXG4gICAgICB9KSgxKTtcbiAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBpbnRlcnBvbGF0aW9uJCQxICYmIGludGVycG9sYXRpb24kJDEuZ2V0VmFsdWUoKTsgLy8gQ2hhbmdlIGRldGVjdGlvbiBmbGFnc1xuXG4gICAgICBjb25zdCBpc0ZpcnN0ID0gaXMudW5kKHBhcmVudCk7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICFpc0ZpcnN0ICYmIGVudHJ5LmFuaW1hdGVkVmFsdWVzLnNvbWUodiA9PiAhdi5kb25lKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZURpZmZlcnNGcm9tR29hbCA9ICFpcy5lcXUobmV3VmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICBjb25zdCBoYXNOZXdHb2FsID0gIWlzLmVxdShuZXdWYWx1ZSwgZW50cnkucHJldmlvdXMpO1xuICAgICAgY29uc3QgaGFzTmV3Q29uZmlnID0gIWlzLmVxdSh0b0NvbmZpZywgZW50cnkuY29uZmlnKTsgLy8gQ2hhbmdlIGFuaW1hdGlvbiBwcm9wcyB3aGVuIHByb3BzIGluZGljYXRlIGEgbmV3IGdvYWwgKG5ldyB2YWx1ZSBkaWZmZXJzIGZyb20gcHJldmlvdXMgb25lKVxuICAgICAgLy8gYW5kIGN1cnJlbnQgdmFsdWVzIGRpZmZlciBmcm9tIGl0LiBDb25maWcgY2hhbmdlcyB0cmlnZ2VyIGEgbmV3IHVwZGF0ZSBhcyB3ZWxsICh0aG91Z2ggcHJvYmFibHkgc2hvdWxkbid0PylcblxuICAgICAgaWYgKHJlc2V0IHx8IGhhc05ld0dvYWwgJiYgY3VycmVudFZhbHVlRGlmZmVyc0Zyb21Hb2FsIHx8IGhhc05ld0NvbmZpZykge1xuICAgICAgICAvLyBDb252ZXJ0IHJlZ3VsYXIgdmFsdWVzIGludG8gYW5pbWF0ZWQgdmFsdWVzLCBBTFdBWVMgcmUtdXNlIGlmIHBvc3NpYmxlXG4gICAgICAgIGlmIChpc051bWJlciB8fCBpc1N0cmluZykgcGFyZW50ID0gaW50ZXJwb2xhdGlvbiQkMSA9IGVudHJ5LnBhcmVudCB8fCBuZXcgQW5pbWF0ZWRWYWx1ZShmcm9tVmFsdWUpO2Vsc2UgaWYgKGlzQXJyYXkpIHBhcmVudCA9IGludGVycG9sYXRpb24kJDEgPSBlbnRyeS5wYXJlbnQgfHwgbmV3IEFuaW1hdGVkVmFsdWVBcnJheShmcm9tVmFsdWUpO2Vsc2UgaWYgKGlzSW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgIGxldCBwcmV2ID0gZW50cnkuaW50ZXJwb2xhdGlvbiAmJiBlbnRyeS5pbnRlcnBvbGF0aW9uLmNhbGMoZW50cnkucGFyZW50LnZhbHVlKTtcbiAgICAgICAgICBwcmV2ID0gcHJldiAhPT0gdm9pZCAwICYmICFyZXNldCA/IHByZXYgOiBmcm9tVmFsdWU7XG5cbiAgICAgICAgICBpZiAoZW50cnkucGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBlbnRyeS5wYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnQuc2V0VmFsdWUoMCwgZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSBwYXJlbnQgPSBuZXcgQW5pbWF0ZWRWYWx1ZSgwKTtcblxuICAgICAgICAgIGNvbnN0IHJhbmdlID0ge1xuICAgICAgICAgICAgb3V0cHV0OiBbcHJldiwgdmFsdWVdXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uJCQxID0gZW50cnkuaW50ZXJwb2xhdGlvbjtcbiAgICAgICAgICAgIGVudHJ5LmludGVycG9sYXRpb24udXBkYXRlQ29uZmlnKHJhbmdlKTtcbiAgICAgICAgICB9IGVsc2UgaW50ZXJwb2xhdGlvbiQkMSA9IHBhcmVudC5pbnRlcnBvbGF0ZShyYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9WYWx1ZXMgPSB0b0FycmF5KHRhcmdldCA/IHRvVmFsdWUuZ2V0UGF5bG9hZCgpIDogdG9WYWx1ZSk7XG4gICAgICAgIGFuaW1hdGVkVmFsdWVzID0gdG9BcnJheShwYXJlbnQuZ2V0UGF5bG9hZCgpKTtcbiAgICAgICAgaWYgKHJlc2V0ICYmICFpc0ludGVycG9sYXRpb24pIHBhcmVudC5zZXRWYWx1ZShmcm9tVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTsgLy8gUmVzZXQgYW5pbWF0ZWQgdmFsdWVzXG5cbiAgICAgICAgYW5pbWF0ZWRWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgdmFsdWUuc3RhcnRQb3NpdGlvbiA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgIHZhbHVlLmxhc3RQb3NpdGlvbiA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgIHZhbHVlLmxhc3RWZWxvY2l0eSA9IGlzQWN0aXZlID8gdmFsdWUubGFzdFZlbG9jaXR5IDogdW5kZWZpbmVkO1xuICAgICAgICAgIHZhbHVlLmxhc3RUaW1lID0gaXNBY3RpdmUgPyB2YWx1ZS5sYXN0VGltZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB2YWx1ZS5zdGFydFRpbWUgPSBub3coKTtcbiAgICAgICAgICB2YWx1ZS5kb25lID0gZmFsc2U7XG4gICAgICAgICAgdmFsdWUuYW5pbWF0ZWRTdHlsZXMuY2xlYXIoKTtcbiAgICAgICAgfSk7IC8vIFNldCBpbW1lZGlhdGUgdmFsdWVzXG5cbiAgICAgICAgaWYgKGNhbGxQcm9wKGltbWVkaWF0ZSwgbmFtZSkpIHtcbiAgICAgICAgICBwYXJlbnQuc2V0VmFsdWUoaXNJbnRlcnBvbGF0aW9uID8gdG9WYWx1ZSA6IHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywge1xuICAgICAgICAgIFtuYW1lXTogX2V4dGVuZHMoe30sIGVudHJ5LCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvbiQkMSxcbiAgICAgICAgICAgIGFuaW1hdGVkVmFsdWVzLFxuICAgICAgICAgICAgdG9WYWx1ZXMsXG4gICAgICAgICAgICBwcmV2aW91czogbmV3VmFsdWUsXG4gICAgICAgICAgICBjb25maWc6IHRvQ29uZmlnLFxuICAgICAgICAgICAgZnJvbVZhbHVlczogdG9BcnJheShwYXJlbnQuZ2V0VmFsdWUoKSksXG4gICAgICAgICAgICBpbW1lZGlhdGU6IGNhbGxQcm9wKGltbWVkaWF0ZSwgbmFtZSksXG4gICAgICAgICAgICBpbml0aWFsVmVsb2NpdHk6IHdpdGhEZWZhdWx0KHRvQ29uZmlnLnZlbG9jaXR5LCAwKSxcbiAgICAgICAgICAgIGNsYW1wOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5jbGFtcCwgZmFsc2UpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5wcmVjaXNpb24sIDAuMDEpLFxuICAgICAgICAgICAgdGVuc2lvbjogd2l0aERlZmF1bHQodG9Db25maWcudGVuc2lvbiwgMTcwKSxcbiAgICAgICAgICAgIGZyaWN0aW9uOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5mcmljdGlvbiwgMjYpLFxuICAgICAgICAgICAgbWFzczogd2l0aERlZmF1bHQodG9Db25maWcubWFzcywgMSksXG4gICAgICAgICAgICBkdXJhdGlvbjogdG9Db25maWcuZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IHdpdGhEZWZhdWx0KHRvQ29uZmlnLmVhc2luZywgdCA9PiB0KSxcbiAgICAgICAgICAgIGRlY2F5OiB0b0NvbmZpZy5kZWNheVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjdXJyZW50VmFsdWVEaWZmZXJzRnJvbUdvYWwpIHtcbiAgICAgICAgICAvLyBTbyAuLi4gdGhlIGN1cnJlbnQgdGFyZ2V0IHZhbHVlIChuZXdWYWx1ZSkgYXBwZWFycyB0byBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgcHJldmlvdXMgdmFsdWUsXG4gICAgICAgICAgLy8gd2hpY2ggbm9ybWFsbHkgY29uc3RpdHV0ZXMgYW4gdXBkYXRlLCBidXQgdGhlIGFjdHVhbCB2YWx1ZSAoY3VycmVudFZhbHVlKSBtYXRjaGVzIHRoZSB0YXJnZXQhXG4gICAgICAgICAgLy8gSW4gb3JkZXIgdG8gcmVzb2x2ZSB0aGlzIHdpdGhvdXQgY2F1c2luZyBhbiBhbmltYXRpb24gdXBkYXRlIHdlIHNpbGVudGx5IGZsYWcgdGhlIGFuaW1hdGlvbiBhcyBkb25lLFxuICAgICAgICAgIC8vIHdoaWNoIGl0IHRlY2huaWNhbGx5IGlzLiBJbnRlcnBvbGF0aW9ucyBhbHNvIG5lZWRzIGEgY29uZmlnIHVwZGF0ZSB3aXRoIHRoZWlyIHRhcmdldCBzZXQgdG8gMS5cbiAgICAgICAgICBpZiAoaXNJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgICBwYXJlbnQuc2V0VmFsdWUoMSwgZmFsc2UpO1xuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbiQkMS51cGRhdGVDb25maWcoe1xuICAgICAgICAgICAgICBvdXRwdXQ6IFtuZXdWYWx1ZSwgbmV3VmFsdWVdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJlbnQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywge1xuICAgICAgICAgICAgW25hbWVdOiBfZXh0ZW5kcyh7fSwgYWNjW25hbWVdLCB7XG4gICAgICAgICAgICAgIHByZXZpb3VzOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgfSwgdGhpcy5hbmltYXRpb25zKTtcblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIC8vIE1ha2UgYW5pbWF0aW9ucyBhdmFpbGFibGUgdG8gZnJhbWVsb29wXG4gICAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QudmFsdWVzKHRoaXMuYW5pbWF0aW9ucyk7XG4gICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgdGhpcy5pbnRlcnBvbGF0aW9ucyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICAgIHRoaXMuaW50ZXJwb2xhdGlvbnNba2V5XSA9IHRoaXMuYW5pbWF0aW9uc1trZXldLmludGVycG9sYXRpb247XG4gICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSB0aGlzLmFuaW1hdGlvbnNba2V5XS5pbnRlcnBvbGF0aW9uLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICB0aGlzLm1lcmdlZCA9IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xuICAgIHRoaXMuaW50ZXJwb2xhdGlvbnMgPSB7fTtcbiAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgIHRoaXMuY29uZmlncyA9IFtdO1xuICAgIHRoaXMubG9jYWwgPSAwO1xuICB9XG5cbn1cblxuLyoqIEFQSVxuICogY29uc3QgcHJvcHMgPSB1c2VTcHJpbmdzKG51bWJlciwgW3sgLi4uIH0sIHsgLi4uIH0sIC4uLl0pXG4gKiBjb25zdCBbcHJvcHMsIHNldF0gPSB1c2VTcHJpbmdzKG51bWJlciwgKGksIGNvbnRyb2xsZXIpID0+ICh7IC4uLiB9KSlcbiAqL1xuXG5jb25zdCB1c2VTcHJpbmdzID0gKGxlbmd0aCwgcHJvcHMpID0+IHtcbiAgY29uc3QgbW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IGN0cmwgPSB1c2VSZWYoKTtcbiAgY29uc3QgaXNGbiA9IGlzLmZ1bihwcm9wcyk7IC8vIFRoZSBjb250cm9sbGVyIG1haW50YWlucyB0aGUgYW5pbWF0aW9uIHZhbHVlcywgc3RhcnRzIGFuZCBzdG9wcyBhbmltYXRpb25zXG5cbiAgY29uc3QgX3VzZU1lbW8gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAvLyBSZW1vdmUgb2xkIGNvbnRyb2xsZXJzXG4gICAgaWYgKGN0cmwuY3VycmVudCkge1xuICAgICAgY3RybC5jdXJyZW50Lm1hcChjID0+IGMuZGVzdHJveSgpKTtcbiAgICAgIGN0cmwuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgcmVmO1xuICAgIHJldHVybiBbbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgpLm1hcCgoXywgaSkgPT4ge1xuICAgICAgY29uc3QgY3RybCA9IG5ldyBDb250cm9sbGVyKCk7XG4gICAgICBjb25zdCBuZXdQcm9wcyA9IGlzRm4gPyBjYWxsUHJvcChwcm9wcywgaSwgY3RybCkgOiBwcm9wc1tpXTtcbiAgICAgIGlmIChpID09PSAwKSByZWYgPSBuZXdQcm9wcy5yZWY7XG4gICAgICBjdHJsLnVwZGF0ZShuZXdQcm9wcyk7XG4gICAgICBpZiAoIXJlZikgY3RybC5zdGFydCgpO1xuICAgICAgcmV0dXJuIGN0cmw7XG4gICAgfSksIHJlZl07XG4gIH0sIFtsZW5ndGhdKSxcbiAgICAgICAgY29udHJvbGxlcnMgPSBfdXNlTWVtb1swXSxcbiAgICAgICAgcmVmID0gX3VzZU1lbW9bMV07XG5cbiAgY3RybC5jdXJyZW50ID0gY29udHJvbGxlcnM7IC8vIFRoZSBob29rcyByZWZlcmVuY2UgYXBpIGdldHMgZGVmaW5lZCBoZXJlIC4uLlxuXG4gIGNvbnN0IGFwaSA9IHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgIHN0YXJ0OiAoKSA9PiBQcm9taXNlLmFsbChjdHJsLmN1cnJlbnQubWFwKGMgPT4gbmV3IFByb21pc2UociA9PiBjLnN0YXJ0KHIpKSkpLFxuICAgIHN0b3A6IGZpbmlzaGVkID0+IGN0cmwuY3VycmVudC5mb3JFYWNoKGMgPT4gYy5zdG9wKGZpbmlzaGVkKSksXG5cbiAgICBnZXQgY29udHJvbGxlcnMoKSB7XG4gICAgICByZXR1cm4gY3RybC5jdXJyZW50O1xuICAgIH1cblxuICB9KSk7IC8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0aGUgY29udHJvbGxlcnNcblxuICBjb25zdCB1cGRhdGVDdHJsID0gdXNlTWVtbygoKSA9PiB1cGRhdGVQcm9wcyA9PiBjdHJsLmN1cnJlbnQubWFwKChjLCBpKSA9PiB7XG4gICAgYy51cGRhdGUoaXNGbiA/IGNhbGxQcm9wKHVwZGF0ZVByb3BzLCBpLCBjKSA6IHVwZGF0ZVByb3BzW2ldKTtcbiAgICBpZiAoIXJlZikgYy5zdGFydCgpO1xuICB9KSwgW2xlbmd0aF0pOyAvLyBVcGRhdGUgY29udHJvbGxlciBpZiBwcm9wcyBhcmVuJ3QgZnVuY3Rpb25hbFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vdW50ZWQuY3VycmVudCkge1xuICAgICAgaWYgKCFpc0ZuKSB1cGRhdGVDdHJsKHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKCFyZWYpIGN0cmwuY3VycmVudC5mb3JFYWNoKGMgPT4gYy5zdGFydCgpKTtcbiAgfSk7IC8vIFVwZGF0ZSBtb3VudGVkIGZsYWcgYW5kIGRlc3Ryb3kgY29udHJvbGxlciBvbiB1bm1vdW50XG5cbiAgdXNlRWZmZWN0KCgpID0+IChtb3VudGVkLmN1cnJlbnQgPSB0cnVlLCAoKSA9PiBjdHJsLmN1cnJlbnQuZm9yRWFjaChjID0+IGMuZGVzdHJveSgpKSksIFtdKTsgLy8gUmV0dXJuIGFuaW1hdGVkIHByb3BzLCBvciwgYW5pbS1wcm9wcyArIHRoZSB1cGRhdGUtc2V0dGVyIGFib3ZlXG5cbiAgY29uc3QgcHJvcFZhbHVlcyA9IGN0cmwuY3VycmVudC5tYXAoYyA9PiBjLmdldFZhbHVlcygpKTtcbiAgcmV0dXJuIGlzRm4gPyBbcHJvcFZhbHVlcywgdXBkYXRlQ3RybCwgZmluaXNoZWQgPT4gY3RybC5jdXJyZW50LmZvckVhY2goYyA9PiBjLnBhdXNlKGZpbmlzaGVkKSldIDogcHJvcFZhbHVlcztcbn07XG5cbi8qKiBBUElcbiAqIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHsgLi4uIH0pXG4gKiBjb25zdCBbcHJvcHMsIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgLi4uIH0pKVxuICovXG5cbmNvbnN0IHVzZVNwcmluZyA9IHByb3BzID0+IHtcbiAgY29uc3QgaXNGbiA9IGlzLmZ1bihwcm9wcyk7XG5cbiAgY29uc3QgX3VzZVNwcmluZ3MgPSB1c2VTcHJpbmdzKDEsIGlzRm4gPyBwcm9wcyA6IFtwcm9wc10pLFxuICAgICAgICByZXN1bHQgPSBfdXNlU3ByaW5nc1swXSxcbiAgICAgICAgc2V0ID0gX3VzZVNwcmluZ3NbMV0sXG4gICAgICAgIHBhdXNlID0gX3VzZVNwcmluZ3NbMl07XG5cbiAgcmV0dXJuIGlzRm4gPyBbcmVzdWx0WzBdLCBzZXQsIHBhdXNlXSA6IHJlc3VsdDtcbn07XG5cbi8qKiBBUElcbiAqIGNvbnN0IHRyYWlscyA9IHVzZVRyYWlsKG51bWJlciwgeyAuLi4gfSlcbiAqIGNvbnN0IFt0cmFpbHMsIHNldF0gPSB1c2VUcmFpbChudW1iZXIsICgpID0+ICh7IC4uLiB9KSlcbiAqL1xuXG5jb25zdCB1c2VUcmFpbCA9IChsZW5ndGgsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBpc0ZuID0gaXMuZnVuKHByb3BzKTtcbiAgY29uc3QgdXBkYXRlUHJvcHMgPSBjYWxsUHJvcChwcm9wcyk7XG4gIGNvbnN0IGluc3RhbmNlcyA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IF91c2VTcHJpbmdzID0gdXNlU3ByaW5ncyhsZW5ndGgsIChpLCBjdHJsKSA9PiB7XG4gICAgaWYgKGkgPT09IDApIGluc3RhbmNlcy5jdXJyZW50ID0gW107XG4gICAgaW5zdGFuY2VzLmN1cnJlbnQucHVzaChjdHJsKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHVwZGF0ZVByb3BzLCB7XG4gICAgICBjb25maWc6IGNhbGxQcm9wKHVwZGF0ZVByb3BzLmNvbmZpZywgaSksXG4gICAgICBhdHRhY2g6IGkgPiAwICYmICgoKSA9PiBpbnN0YW5jZXMuY3VycmVudFtpIC0gMV0pXG4gICAgfSk7XG4gIH0pLFxuICAgICAgICByZXN1bHQgPSBfdXNlU3ByaW5nc1swXSxcbiAgICAgICAgc2V0ID0gX3VzZVNwcmluZ3NbMV0sXG4gICAgICAgIHBhdXNlID0gX3VzZVNwcmluZ3NbMl07IC8vIFNldCB1cCBmdW5jdGlvbiB0byB1cGRhdGUgY29udHJvbGxlclxuXG5cbiAgY29uc3QgdXBkYXRlQ3RybCA9IHVzZU1lbW8oKCkgPT4gcHJvcHMgPT4gc2V0KChpLCBjdHJsKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IHByb3BzLnJldmVyc2UgPyBpID09PSAwIDogbGVuZ3RoIC0gMSA9PT0gaTtcbiAgICBjb25zdCBhdHRhY2hJZHggPSBwcm9wcy5yZXZlcnNlID8gaSArIDEgOiBpIC0gMTtcbiAgICBjb25zdCBhdHRhY2hDb250cm9sbGVyID0gaW5zdGFuY2VzLmN1cnJlbnRbYXR0YWNoSWR4XTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb25maWc6IGNhbGxQcm9wKHByb3BzLmNvbmZpZyB8fCB1cGRhdGVQcm9wcy5jb25maWcsIGkpLFxuICAgICAgYXR0YWNoOiBhdHRhY2hDb250cm9sbGVyICYmICgoKSA9PiBhdHRhY2hDb250cm9sbGVyKVxuICAgIH0pO1xuICB9KSwgW2xlbmd0aCwgdXBkYXRlUHJvcHMucmV2ZXJzZV0pOyAvLyBVcGRhdGUgY29udHJvbGxlciBpZiBwcm9wcyBhcmVuJ3QgZnVuY3Rpb25hbFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB2b2lkIChtb3VudGVkLmN1cnJlbnQgJiYgIWlzRm4gJiYgdXBkYXRlQ3RybChwcm9wcykpKTsgLy8gVXBkYXRlIG1vdW50ZWQgZmxhZyBhbmQgZGVzdHJveSBjb250cm9sbGVyIG9uIHVubW91bnRcblxuICB1c2VFZmZlY3QoKCkgPT4gdm9pZCAobW91bnRlZC5jdXJyZW50ID0gdHJ1ZSksIFtdKTtcbiAgcmV0dXJuIGlzRm4gPyBbcmVzdWx0LCB1cGRhdGVDdHJsLCBwYXVzZV0gOiByZXN1bHQ7XG59O1xuXG4vKiogQVBJXG4gKiBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oaXRlbXMsIGl0ZW1LZXlzLCB7IC4uLiB9KVxuICogY29uc3QgW3RyYW5zaXRpb25zLCB1cGRhdGVdID0gdXNlVHJhbnNpdGlvbihpdGVtcywgaXRlbUtleXMsICgpID0+ICh7IC4uLiB9KSlcbiAqL1xuXG5sZXQgZ3VpZCA9IDA7XG5jb25zdCBFTlRFUiA9ICdlbnRlcic7XG5jb25zdCBMRUFWRSA9ICdsZWF2ZSc7XG5jb25zdCBVUERBVEUgPSAndXBkYXRlJztcblxuY29uc3QgbWFwS2V5cyA9IChpdGVtcywga2V5cykgPT4gKHR5cGVvZiBrZXlzID09PSAnZnVuY3Rpb24nID8gaXRlbXMubWFwKGtleXMpIDogdG9BcnJheShrZXlzKSkubWFwKFN0cmluZyk7XG5cbmNvbnN0IGdldCA9IHByb3BzID0+IHtcbiAgbGV0IGl0ZW1zID0gcHJvcHMuaXRlbXMsXG4gICAgICBfcHJvcHMka2V5cyA9IHByb3BzLmtleXMsXG4gICAgICBrZXlzID0gX3Byb3BzJGtleXMgPT09IHZvaWQgMCA/IGl0ZW0gPT4gaXRlbSA6IF9wcm9wcyRrZXlzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpdGVtc1wiLCBcImtleXNcIl0pO1xuXG4gIGl0ZW1zID0gdG9BcnJheShpdGVtcyAhPT0gdm9pZCAwID8gaXRlbXMgOiBudWxsKTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBpdGVtcyxcbiAgICBrZXlzOiBtYXBLZXlzKGl0ZW1zLCBrZXlzKVxuICB9LCByZXN0KTtcbn07XG5cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oaW5wdXQsIGtleVRyYW5zZm9ybSwgY29uZmlnKSB7XG4gIGNvbnN0IHByb3BzID0gX2V4dGVuZHMoe1xuICAgIGl0ZW1zOiBpbnB1dCxcbiAgICBrZXlzOiBrZXlUcmFuc2Zvcm0gfHwgKGkgPT4gaSlcbiAgfSwgY29uZmlnKTtcblxuICBjb25zdCBfZ2V0ID0gZ2V0KHByb3BzKSxcbiAgICAgICAgX2dldCRsYXp5ID0gX2dldC5sYXp5LFxuICAgICAgICBsYXp5ID0gX2dldCRsYXp5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9nZXQkbGF6eSxcbiAgICAgICAgX2dldCR1bmlxdWUgPSBfZ2V0LnVuaXF1ZSxcbiAgICAgICAgX2dldCRyZXNldCA9IF9nZXQucmVzZXQsXG4gICAgICAgIHJlc2V0ID0gX2dldCRyZXNldCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZ2V0JHJlc2V0LFxuICAgICAgICBlbnRlciA9IF9nZXQuZW50ZXIsXG4gICAgICAgIGxlYXZlID0gX2dldC5sZWF2ZSxcbiAgICAgICAgdXBkYXRlID0gX2dldC51cGRhdGUsXG4gICAgICAgIG9uRGVzdHJveWVkID0gX2dldC5vbkRlc3Ryb3llZCxcbiAgICAgICAga2V5cyA9IF9nZXQua2V5cyxcbiAgICAgICAgaXRlbXMgPSBfZ2V0Lml0ZW1zLFxuICAgICAgICBvbkZyYW1lID0gX2dldC5vbkZyYW1lLFxuICAgICAgICBfb25SZXN0ID0gX2dldC5vblJlc3QsXG4gICAgICAgIG9uU3RhcnQgPSBfZ2V0Lm9uU3RhcnQsXG4gICAgICAgIHJlZiA9IF9nZXQucmVmLFxuICAgICAgICBleHRyYSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9nZXQsIFtcImxhenlcIiwgXCJ1bmlxdWVcIiwgXCJyZXNldFwiLCBcImVudGVyXCIsIFwibGVhdmVcIiwgXCJ1cGRhdGVcIiwgXCJvbkRlc3Ryb3llZFwiLCBcImtleXNcIiwgXCJpdGVtc1wiLCBcIm9uRnJhbWVcIiwgXCJvblJlc3RcIiwgXCJvblN0YXJ0XCIsIFwicmVmXCJdKTtcblxuICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZih7XG4gICAgbW91bnRlZDogZmFsc2UsXG4gICAgZmlyc3Q6IHRydWUsXG4gICAgZGVsZXRlZDogW10sXG4gICAgY3VycmVudDoge30sXG4gICAgdHJhbnNpdGlvbnM6IFtdLFxuICAgIHByZXZQcm9wczoge30sXG4gICAgcGF1c2VkOiAhIXByb3BzLnJlZixcbiAgICBpbnN0YW5jZXM6ICFtb3VudGVkLmN1cnJlbnQgJiYgbmV3IE1hcCgpLFxuICAgIGZvcmNlVXBkYXRlXG4gIH0pO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHByb3BzLnJlZiwgKCkgPT4gKHtcbiAgICBzdGFydDogKCkgPT4gUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcykubWFwKChfcmVmKSA9PiB7XG4gICAgICBsZXQgYyA9IF9yZWZbMV07XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UociA9PiBjLnN0YXJ0KHIpKTtcbiAgICB9KSksXG4gICAgc3RvcDogZmluaXNoZWQgPT4gQXJyYXkuZnJvbShzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcykuZm9yRWFjaCgoX3JlZjIpID0+IHtcbiAgICAgIGxldCBjID0gX3JlZjJbMV07XG4gICAgICByZXR1cm4gYy5zdG9wKGZpbmlzaGVkKTtcbiAgICB9KSxcblxuICAgIGdldCBjb250cm9sbGVycygpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzKS5tYXAoKF9yZWYzKSA9PiB7XG4gICAgICAgIGxldCBjID0gX3JlZjNbMV07XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pKTsgLy8gVXBkYXRlIHN0YXRlXG5cbiAgc3RhdGUuY3VycmVudCA9IGRpZmZJdGVtcyhzdGF0ZS5jdXJyZW50LCBwcm9wcyk7XG5cbiAgaWYgKHN0YXRlLmN1cnJlbnQuY2hhbmdlZCkge1xuICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgIHN0YXRlLmN1cnJlbnQudHJhbnNpdGlvbnMuZm9yRWFjaCh0cmFuc2l0aW9uID0+IHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0cmFuc2l0aW9uLnNsb3QsXG4gICAgICAgICAgICBmcm9tID0gdHJhbnNpdGlvbi5mcm9tLFxuICAgICAgICAgICAgdG8gPSB0cmFuc2l0aW9uLnRvLFxuICAgICAgICAgICAgY29uZmlnID0gdHJhbnNpdGlvbi5jb25maWcsXG4gICAgICAgICAgICB0cmFpbCA9IHRyYW5zaXRpb24udHJhaWwsXG4gICAgICAgICAgICBrZXkgPSB0cmFuc2l0aW9uLmtleSxcbiAgICAgICAgICAgIGl0ZW0gPSB0cmFuc2l0aW9uLml0ZW07XG4gICAgICBpZiAoIXN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLmhhcyhrZXkpKSBzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcy5zZXQoa2V5LCBuZXcgQ29udHJvbGxlcigpKTsgLy8gdXBkYXRlIHRoZSBtYXAgb2JqZWN0XG5cbiAgICAgIGNvbnN0IGN0cmwgPSBzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcy5nZXQoa2V5KTtcblxuICAgICAgY29uc3QgbmV3UHJvcHMgPSBfZXh0ZW5kcyh7fSwgZXh0cmEsIHtcbiAgICAgICAgdG8sXG4gICAgICAgIGZyb20sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVmLFxuICAgICAgICBvblJlc3Q6IHZhbHVlcyA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnQubW91bnRlZCkge1xuICAgICAgICAgICAgaWYgKHRyYW5zaXRpb24uZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgIC8vIElmIG5vIHJlZiBpcyBnaXZlbiBkZWxldGUgZGVzdHJveWVkIGl0ZW1zIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIGlmICghcmVmICYmICFsYXp5KSBjbGVhblVwKHN0YXRlLCBrZXkpO1xuICAgICAgICAgICAgICBpZiAob25EZXN0cm95ZWQpIG9uRGVzdHJveWVkKGl0ZW0pO1xuICAgICAgICAgICAgfSAvLyBBIHRyYW5zaXRpb24gY29tZXMgdG8gcmVzdCBvbmNlIGFsbCBpdHMgc3ByaW5ncyBjb25jbHVkZVxuXG5cbiAgICAgICAgICAgIGNvbnN0IGN1ckluc3RhbmNlcyA9IEFycmF5LmZyb20oc3RhdGUuY3VycmVudC5pbnN0YW5jZXMpO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gY3VySW5zdGFuY2VzLnNvbWUoKF9yZWY0KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjID0gX3JlZjRbMV07XG4gICAgICAgICAgICAgIHJldHVybiAhYy5pZGxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSAmJiAocmVmIHx8IGxhenkpICYmIHN0YXRlLmN1cnJlbnQuZGVsZXRlZC5sZW5ndGggPiAwKSBjbGVhblVwKHN0YXRlKTtcbiAgICAgICAgICAgIGlmIChfb25SZXN0KSBfb25SZXN0KGl0ZW0sIHNsb3QsIHZhbHVlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblN0YXJ0OiBvblN0YXJ0ICYmICgoKSA9PiBvblN0YXJ0KGl0ZW0sIHNsb3QpKSxcbiAgICAgICAgb25GcmFtZTogb25GcmFtZSAmJiAodmFsdWVzID0+IG9uRnJhbWUoaXRlbSwgc2xvdCwgdmFsdWVzKSksXG4gICAgICAgIGRlbGF5OiB0cmFpbCxcbiAgICAgICAgcmVzZXQ6IHJlc2V0ICYmIHNsb3QgPT09IEVOVEVSIC8vIFVwZGF0ZSBjb250cm9sbGVyXG5cbiAgICAgIH0pO1xuXG4gICAgICBjdHJsLnVwZGF0ZShuZXdQcm9wcyk7XG4gICAgICBpZiAoIXN0YXRlLmN1cnJlbnQucGF1c2VkKSBjdHJsLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLmN1cnJlbnQubW91bnRlZCA9IG1vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnQubW91bnRlZCA9IG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgQXJyYXkuZnJvbShzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcykubWFwKChfcmVmNSkgPT4ge1xuICAgICAgICBsZXQgYyA9IF9yZWY1WzFdO1xuICAgICAgICByZXR1cm4gYy5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLmNsZWFyKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gc3RhdGUuY3VycmVudC50cmFuc2l0aW9ucy5tYXAoKF9yZWY2KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBfcmVmNi5pdGVtLFxuICAgICAgICBzbG90ID0gX3JlZjYuc2xvdCxcbiAgICAgICAga2V5ID0gX3JlZjYua2V5O1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtLFxuICAgICAga2V5LFxuICAgICAgc3RhdGU6IHNsb3QsXG4gICAgICBwcm9wczogc3RhdGUuY3VycmVudC5pbnN0YW5jZXMuZ2V0KGtleSkuZ2V0VmFsdWVzKClcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYW5VcChzdGF0ZSwgZmlsdGVyS2V5KSB7XG4gIGNvbnN0IGRlbGV0ZWQgPSBzdGF0ZS5jdXJyZW50LmRlbGV0ZWQ7XG5cbiAgZm9yIChsZXQgX3JlZjcgb2YgZGVsZXRlZCkge1xuICAgIGxldCBrZXkgPSBfcmVmNy5rZXk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0ID0+IHQua2V5ICE9PSBrZXk7XG5cbiAgICBpZiAoaXMudW5kKGZpbHRlcktleSkgfHwgZmlsdGVyS2V5ID09PSBrZXkpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLmRlbGV0ZShrZXkpO1xuICAgICAgc3RhdGUuY3VycmVudC50cmFuc2l0aW9ucyA9IHN0YXRlLmN1cnJlbnQudHJhbnNpdGlvbnMuZmlsdGVyKGZpbHRlcik7XG4gICAgICBzdGF0ZS5jdXJyZW50LmRlbGV0ZWQgPSBzdGF0ZS5jdXJyZW50LmRlbGV0ZWQuZmlsdGVyKGZpbHRlcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUuY3VycmVudC5mb3JjZVVwZGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBkaWZmSXRlbXMoX3JlZjgsIHByb3BzKSB7XG4gIGxldCBmaXJzdCA9IF9yZWY4LmZpcnN0LFxuICAgICAgcHJldlByb3BzID0gX3JlZjgucHJldlByb3BzLFxuICAgICAgc3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmOCwgW1wiZmlyc3RcIiwgXCJwcmV2UHJvcHNcIl0pO1xuXG4gIGxldCBfZ2V0MiA9IGdldChwcm9wcyksXG4gICAgICBpdGVtcyA9IF9nZXQyLml0ZW1zLFxuICAgICAga2V5cyA9IF9nZXQyLmtleXMsXG4gICAgICBpbml0aWFsID0gX2dldDIuaW5pdGlhbCxcbiAgICAgIGZyb20gPSBfZ2V0Mi5mcm9tLFxuICAgICAgZW50ZXIgPSBfZ2V0Mi5lbnRlcixcbiAgICAgIGxlYXZlID0gX2dldDIubGVhdmUsXG4gICAgICB1cGRhdGUgPSBfZ2V0Mi51cGRhdGUsXG4gICAgICBfZ2V0MiR0cmFpbCA9IF9nZXQyLnRyYWlsLFxuICAgICAgdHJhaWwgPSBfZ2V0MiR0cmFpbCA9PT0gdm9pZCAwID8gMCA6IF9nZXQyJHRyYWlsLFxuICAgICAgdW5pcXVlID0gX2dldDIudW5pcXVlLFxuICAgICAgY29uZmlnID0gX2dldDIuY29uZmlnLFxuICAgICAgX2dldDIkb3JkZXIgPSBfZ2V0Mi5vcmRlcixcbiAgICAgIG9yZGVyID0gX2dldDIkb3JkZXIgPT09IHZvaWQgMCA/IFtFTlRFUiwgTEVBVkUsIFVQREFURV0gOiBfZ2V0MiRvcmRlcjtcblxuICBsZXQgX2dldDMgPSBnZXQocHJldlByb3BzKSxcbiAgICAgIF9rZXlzID0gX2dldDMua2V5cyxcbiAgICAgIF9pdGVtcyA9IF9nZXQzLml0ZW1zO1xuXG4gIGxldCBjdXJyZW50ID0gX2V4dGVuZHMoe30sIHN0YXRlLmN1cnJlbnQpO1xuXG4gIGxldCBkZWxldGVkID0gWy4uLnN0YXRlLmRlbGV0ZWRdOyAvLyBDb21wYXJlIG5leHQga2V5cyB3aXRoIGN1cnJlbnQga2V5c1xuXG4gIGxldCBjdXJyZW50S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnQpO1xuICBsZXQgY3VycmVudFNldCA9IG5ldyBTZXQoY3VycmVudEtleXMpO1xuICBsZXQgbmV4dFNldCA9IG5ldyBTZXQoa2V5cyk7XG4gIGxldCBhZGRlZCA9IGtleXMuZmlsdGVyKGl0ZW0gPT4gIWN1cnJlbnRTZXQuaGFzKGl0ZW0pKTtcbiAgbGV0IHJlbW92ZWQgPSBzdGF0ZS50cmFuc2l0aW9ucy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kZXN0cm95ZWQgJiYgIW5leHRTZXQuaGFzKGl0ZW0ub3JpZ2luYWxLZXkpKS5tYXAoaSA9PiBpLm9yaWdpbmFsS2V5KTtcbiAgbGV0IHVwZGF0ZWQgPSBrZXlzLmZpbHRlcihpdGVtID0+IGN1cnJlbnRTZXQuaGFzKGl0ZW0pKTtcbiAgbGV0IGRlbGF5ID0gLXRyYWlsO1xuXG4gIHdoaWxlIChvcmRlci5sZW5ndGgpIHtcbiAgICBjb25zdCBjaGFuZ2VUeXBlID0gb3JkZXIuc2hpZnQoKTtcblxuICAgIHN3aXRjaCAoY2hhbmdlVHlwZSkge1xuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgICAge1xuICAgICAgICAgIGFkZGVkLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIEluIHVuaXF1ZSBtb2RlLCByZW1vdmUgZmFkaW5nIG91dCB0cmFuc2l0aW9ucyBpZiB0aGVpciBrZXkgY29tZXMgaW4gYWdhaW5cbiAgICAgICAgICAgIGlmICh1bmlxdWUgJiYgZGVsZXRlZC5maW5kKGQgPT4gZC5vcmlnaW5hbEtleSA9PT0ga2V5KSkgZGVsZXRlZCA9IGRlbGV0ZWQuZmlsdGVyKHQgPT4gdC5vcmlnaW5hbEtleSAhPT0ga2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGtleUluZGV4ID0ga2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNba2V5SW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IGZpcnN0ICYmIGluaXRpYWwgIT09IHZvaWQgMCA/ICdpbml0aWFsJyA6IEVOVEVSO1xuICAgICAgICAgICAgY3VycmVudFtrZXldID0ge1xuICAgICAgICAgICAgICBzbG90LFxuICAgICAgICAgICAgICBvcmlnaW5hbEtleToga2V5LFxuICAgICAgICAgICAgICBrZXk6IHVuaXF1ZSA/IFN0cmluZyhrZXkpIDogZ3VpZCsrLFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICB0cmFpbDogZGVsYXkgPSBkZWxheSArIHRyYWlsLFxuICAgICAgICAgICAgICBjb25maWc6IGNhbGxQcm9wKGNvbmZpZywgaXRlbSwgc2xvdCksXG4gICAgICAgICAgICAgIGZyb206IGNhbGxQcm9wKGZpcnN0ID8gaW5pdGlhbCAhPT0gdm9pZCAwID8gaW5pdGlhbCB8fCB7fSA6IGZyb20gOiBmcm9tLCBpdGVtKSxcbiAgICAgICAgICAgICAgdG86IGNhbGxQcm9wKGVudGVyLCBpdGVtKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIExFQVZFOlxuICAgICAgICB7XG4gICAgICAgICAgcmVtb3ZlZC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlJbmRleCA9IF9rZXlzLmluZGV4T2Yoa2V5KTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IF9pdGVtc1trZXlJbmRleF07XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gTEVBVkU7XG4gICAgICAgICAgICBkZWxldGVkLnVuc2hpZnQoX2V4dGVuZHMoe30sIGN1cnJlbnRba2V5XSwge1xuICAgICAgICAgICAgICBzbG90LFxuICAgICAgICAgICAgICBkZXN0cm95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGxlZnQ6IF9rZXlzW01hdGgubWF4KDAsIGtleUluZGV4IC0gMSldLFxuICAgICAgICAgICAgICByaWdodDogX2tleXNbTWF0aC5taW4oX2tleXMubGVuZ3RoLCBrZXlJbmRleCArIDEpXSxcbiAgICAgICAgICAgICAgdHJhaWw6IGRlbGF5ID0gZGVsYXkgKyB0cmFpbCxcbiAgICAgICAgICAgICAgY29uZmlnOiBjYWxsUHJvcChjb25maWcsIGl0ZW0sIHNsb3QpLFxuICAgICAgICAgICAgICB0bzogY2FsbFByb3AobGVhdmUsIGl0ZW0pXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBkZWxldGUgY3VycmVudFtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgVVBEQVRFOlxuICAgICAgICB7XG4gICAgICAgICAgdXBkYXRlZC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2tleUluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBVUERBVEU7XG4gICAgICAgICAgICBjdXJyZW50W2tleV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFtrZXldLCB7XG4gICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgIHNsb3QsXG4gICAgICAgICAgICAgIHRyYWlsOiBkZWxheSA9IGRlbGF5ICsgdHJhaWwsXG4gICAgICAgICAgICAgIGNvbmZpZzogY2FsbFByb3AoY29uZmlnLCBpdGVtLCBzbG90KSxcbiAgICAgICAgICAgICAgdG86IGNhbGxQcm9wKHVwZGF0ZSwgaXRlbSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IG91dCA9IGtleXMubWFwKGtleSA9PiBjdXJyZW50W2tleV0pOyAvLyBUaGlzIHRyaWVzIHRvIHJlc3RvcmUgb3JkZXIgZm9yIGRlbGV0ZWQgaXRlbXMgYnkgZmluZGluZyB0aGVpciBsYXN0IGtub3duIHNpYmxpbmdzXG4gIC8vIG9ubHkgdXNpbmcgdGhlIGxlZnQgc2libGluZyB0byBrZWVwIG9yZGVyIHBsYWNlbWVudCBjb25zaXN0ZW50IGZvciBhbGwgZGVsZXRlZCBpdGVtc1xuXG4gIGRlbGV0ZWQuZm9yRWFjaCgoX3JlZjkpID0+IHtcbiAgICBsZXQgbGVmdCA9IF9yZWY5LmxlZnQsXG4gICAgICAgIHJpZ2h0ID0gX3JlZjkucmlnaHQsXG4gICAgICAgIGl0ZW0gPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmOSwgW1wibGVmdFwiLCBcInJpZ2h0XCJdKTtcblxuICAgIGxldCBwb3M7IC8vIFdhcyBpdCB0aGUgZWxlbWVudCBvbiB0aGUgbGVmdCwgaWYgeWVzLCBtb3ZlIHRoZXJlIC4uLlxuXG4gICAgaWYgKChwb3MgPSBvdXQuZmluZEluZGV4KHQgPT4gdC5vcmlnaW5hbEtleSA9PT0gbGVmdCkpICE9PSAtMSkgcG9zICs9IDE7IC8vIEFuZCBpZiBub3RoaW5nIGVsc2UgaGVscHMsIG1vdmUgaXQgdG8gdGhlIHN0YXJ0IMKvXFxfKOODhClfL8KvXG5cbiAgICBwb3MgPSBNYXRoLm1heCgwLCBwb3MpO1xuICAgIG91dCA9IFsuLi5vdXQuc2xpY2UoMCwgcG9zKSwgaXRlbSwgLi4ub3V0LnNsaWNlKHBvcyldO1xuICB9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgIGNoYW5nZWQ6IGFkZGVkLmxlbmd0aCB8fCByZW1vdmVkLmxlbmd0aCB8fCB1cGRhdGVkLmxlbmd0aCxcbiAgICBmaXJzdDogZmlyc3QgJiYgYWRkZWQubGVuZ3RoID09PSAwLFxuICAgIHRyYW5zaXRpb25zOiBvdXQsXG4gICAgY3VycmVudCxcbiAgICBkZWxldGVkLFxuICAgIHByZXZQcm9wczogcHJvcHNcbiAgfSk7XG59XG5cbmNsYXNzIEFuaW1hdGVkU3R5bGUgZXh0ZW5kcyBBbmltYXRlZE9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlID09PSB2b2lkIDApIHtcbiAgICAgIHN0eWxlID0ge307XG4gICAgfVxuXG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChzdHlsZS50cmFuc2Zvcm0gJiYgIShzdHlsZS50cmFuc2Zvcm0gaW5zdGFuY2VvZiBBbmltYXRlZCkpIHtcbiAgICAgIHN0eWxlID0gYXBwbHlBbmltYXRlZFZhbHVlcy50cmFuc2Zvcm0oc3R5bGUpO1xuICAgIH1cblxuICAgIHRoaXMucGF5bG9hZCA9IHN0eWxlO1xuICB9XG5cbn1cblxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG5jb25zdCBjb2xvcnMgPSB7XG4gIHRyYW5zcGFyZW50OiAweDAwMDAwMDAwLFxuICBhbGljZWJsdWU6IDB4ZjBmOGZmZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDdmZixcbiAgYXF1YTogMHgwMGZmZmZmZixcbiAgYXF1YW1hcmluZTogMHg3ZmZmZDRmZixcbiAgYXp1cmU6IDB4ZjBmZmZmZmYsXG4gIGJlaWdlOiAweGY1ZjVkY2ZmLFxuICBiaXNxdWU6IDB4ZmZlNGM0ZmYsXG4gIGJsYWNrOiAweDAwMDAwMGZmLFxuICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2RmZixcbiAgYmx1ZTogMHgwMDAwZmZmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTJmZixcbiAgYnJvd246IDB4YTUyYTJhZmYsXG4gIGJ1cmx5d29vZDogMHhkZWI4ODdmZixcbiAgYnVybnRzaWVubmE6IDB4ZWE3ZTVkZmYsXG4gIGNhZGV0Ymx1ZTogMHg1ZjllYTBmZixcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDBmZixcbiAgY2hvY29sYXRlOiAweGQyNjkxZWZmLFxuICBjb3JhbDogMHhmZjdmNTBmZixcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkZmYsXG4gIGNvcm5zaWxrOiAweGZmZjhkY2ZmLFxuICBjcmltc29uOiAweGRjMTQzY2ZmLFxuICBjeWFuOiAweDAwZmZmZmZmLFxuICBkYXJrYmx1ZTogMHgwMDAwOGJmZixcbiAgZGFya2N5YW46IDB4MDA4YjhiZmYsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiZmYsXG4gIGRhcmtncmF5OiAweGE5YTlhOWZmLFxuICBkYXJrZ3JlZW46IDB4MDA2NDAwZmYsXG4gIGRhcmtncmV5OiAweGE5YTlhOWZmLFxuICBkYXJra2hha2k6IDB4YmRiNzZiZmYsXG4gIGRhcmttYWdlbnRhOiAweDhiMDA4YmZmLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmZmZixcbiAgZGFya29yYW5nZTogMHhmZjhjMDBmZixcbiAgZGFya29yY2hpZDogMHg5OTMyY2NmZixcbiAgZGFya3JlZDogMHg4YjAwMDBmZixcbiAgZGFya3NhbG1vbjogMHhlOTk2N2FmZixcbiAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZmZmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YmZmLFxuICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZmZmLFxuICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZmZmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMWZmLFxuICBkYXJrdmlvbGV0OiAweDk0MDBkM2ZmLFxuICBkZWVwcGluazogMHhmZjE0OTNmZixcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmZmYsXG4gIGRpbWdyYXk6IDB4Njk2OTY5ZmYsXG4gIGRpbWdyZXk6IDB4Njk2OTY5ZmYsXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmZmYsXG4gIGZpcmVicmljazogMHhiMjIyMjJmZixcbiAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwZmYsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMmZmLFxuICBmdWNoc2lhOiAweGZmMDBmZmZmLFxuICBnYWluc2Jvcm86IDB4ZGNkY2RjZmYsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmZmYsXG4gIGdvbGQ6IDB4ZmZkNzAwZmYsXG4gIGdvbGRlbnJvZDogMHhkYWE1MjBmZixcbiAgZ3JheTogMHg4MDgwODBmZixcbiAgZ3JlZW46IDB4MDA4MDAwZmYsXG4gIGdyZWVueWVsbG93OiAweGFkZmYyZmZmLFxuICBncmV5OiAweDgwODA4MGZmLFxuICBob25leWRldzogMHhmMGZmZjBmZixcbiAgaG90cGluazogMHhmZjY5YjRmZixcbiAgaW5kaWFucmVkOiAweGNkNWM1Y2ZmLFxuICBpbmRpZ286IDB4NGIwMDgyZmYsXG4gIGl2b3J5OiAweGZmZmZmMGZmLFxuICBraGFraTogMHhmMGU2OGNmZixcbiAgbGF2ZW5kZXI6IDB4ZTZlNmZhZmYsXG4gIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1ZmYsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDBmZixcbiAgbGVtb25jaGlmZm9uOiAweGZmZmFjZGZmLFxuICBsaWdodGJsdWU6IDB4YWRkOGU2ZmYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwZmYsXG4gIGxpZ2h0Y3lhbjogMHhlMGZmZmZmZixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyZmYsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDNmZixcbiAgbGlnaHRncmVlbjogMHg5MGVlOTBmZixcbiAgbGlnaHRncmV5OiAweGQzZDNkM2ZmLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxZmYsXG4gIGxpZ2h0c2FsbW9uOiAweGZmYTA3YWZmLFxuICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYWZmLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhZmYsXG4gIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OWZmLFxuICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTlmZixcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlZmYsXG4gIGxpZ2h0eWVsbG93OiAweGZmZmZlMGZmLFxuICBsaW1lOiAweDAwZmYwMGZmLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyZmYsXG4gIGxpbmVuOiAweGZhZjBlNmZmLFxuICBtYWdlbnRhOiAweGZmMDBmZmZmLFxuICBtYXJvb246IDB4ODAwMDAwZmYsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhZmYsXG4gIG1lZGl1bWJsdWU6IDB4MDAwMGNkZmYsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDNmZixcbiAgbWVkaXVtcHVycGxlOiAweDkzNzBkYmZmLFxuICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzFmZixcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZWZmLFxuICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWFmZixcbiAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjY2ZmLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1ZmYsXG4gIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzBmZixcbiAgbWludGNyZWFtOiAweGY1ZmZmYWZmLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxZmYsXG4gIG1vY2Nhc2luOiAweGZmZTRiNWZmLFxuICBuYXZham93aGl0ZTogMHhmZmRlYWRmZixcbiAgbmF2eTogMHgwMDAwODBmZixcbiAgb2xkbGFjZTogMHhmZGY1ZTZmZixcbiAgb2xpdmU6IDB4ODA4MDAwZmYsXG4gIG9saXZlZHJhYjogMHg2YjhlMjNmZixcbiAgb3JhbmdlOiAweGZmYTUwMGZmLFxuICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwZmYsXG4gIG9yY2hpZDogMHhkYTcwZDZmZixcbiAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWFmZixcbiAgcGFsZWdyZWVuOiAweDk4ZmI5OGZmLFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZWZmLFxuICBwYWxldmlvbGV0cmVkOiAweGRiNzA5M2ZmLFxuICBwYXBheWF3aGlwOiAweGZmZWZkNWZmLFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5ZmYsXG4gIHBlcnU6IDB4Y2Q4NTNmZmYsXG4gIHBpbms6IDB4ZmZjMGNiZmYsXG4gIHBsdW06IDB4ZGRhMGRkZmYsXG4gIHBvd2RlcmJsdWU6IDB4YjBlMGU2ZmYsXG4gIHB1cnBsZTogMHg4MDAwODBmZixcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTlmZixcbiAgcmVkOiAweGZmMDAwMGZmLFxuICByb3N5YnJvd246IDB4YmM4ZjhmZmYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTFmZixcbiAgc2FkZGxlYnJvd246IDB4OGI0NTEzZmYsXG4gIHNhbG1vbjogMHhmYTgwNzJmZixcbiAgc2FuZHlicm93bjogMHhmNGE0NjBmZixcbiAgc2VhZ3JlZW46IDB4MmU4YjU3ZmYsXG4gIHNlYXNoZWxsOiAweGZmZjVlZWZmLFxuICBzaWVubmE6IDB4YTA1MjJkZmYsXG4gIHNpbHZlcjogMHhjMGMwYzBmZixcbiAgc2t5Ymx1ZTogMHg4N2NlZWJmZixcbiAgc2xhdGVibHVlOiAweDZhNWFjZGZmLFxuICBzbGF0ZWdyYXk6IDB4NzA4MDkwZmYsXG4gIHNsYXRlZ3JleTogMHg3MDgwOTBmZixcbiAgc25vdzogMHhmZmZhZmFmZixcbiAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmZmYsXG4gIHN0ZWVsYmx1ZTogMHg0NjgyYjRmZixcbiAgdGFuOiAweGQyYjQ4Y2ZmLFxuICB0ZWFsOiAweDAwODA4MGZmLFxuICB0aGlzdGxlOiAweGQ4YmZkOGZmLFxuICB0b21hdG86IDB4ZmY2MzQ3ZmYsXG4gIHR1cnF1b2lzZTogMHg0MGUwZDBmZixcbiAgdmlvbGV0OiAweGVlODJlZWZmLFxuICB3aGVhdDogMHhmNWRlYjNmZixcbiAgd2hpdGU6IDB4ZmZmZmZmZmYsXG4gIHdoaXRlc21va2U6IDB4ZjVmNWY1ZmYsXG4gIHllbGxvdzogMHhmZmZmMDBmZixcbiAgeWVsbG93Z3JlZW46IDB4OWFjZDMyZmZcbn07XG5cbi8vIGNvbnN0IElOVEVHRVIgPSAnWy0rXT9cXFxcZCsnO1xuY29uc3QgTlVNQkVSID0gJ1stK10/XFxcXGQqXFxcXC4/XFxcXGQrJztcbmNvbnN0IFBFUkNFTlRBR0UgPSBOVU1CRVIgKyAnJSc7XG5cbmZ1bmN0aW9uIGNhbGwoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJ0cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJ0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAnXFxcXChcXFxccyooJyArIHBhcnRzLmpvaW4oJylcXFxccyosXFxcXHMqKCcpICsgJylcXFxccypcXFxcKSc7XG59XG5cbmNvbnN0IHJnYiA9IG5ldyBSZWdFeHAoJ3JnYicgKyBjYWxsKE5VTUJFUiwgTlVNQkVSLCBOVU1CRVIpKTtcbmNvbnN0IHJnYmEgPSBuZXcgUmVnRXhwKCdyZ2JhJyArIGNhbGwoTlVNQkVSLCBOVU1CRVIsIE5VTUJFUiwgTlVNQkVSKSk7XG5jb25zdCBoc2wgPSBuZXcgUmVnRXhwKCdoc2wnICsgY2FsbChOVU1CRVIsIFBFUkNFTlRBR0UsIFBFUkNFTlRBR0UpKTtcbmNvbnN0IGhzbGEgPSBuZXcgUmVnRXhwKCdoc2xhJyArIGNhbGwoTlVNQkVSLCBQRVJDRU5UQUdFLCBQRVJDRU5UQUdFLCBOVU1CRVIpKTtcbmNvbnN0IGhleDMgPSAvXiMoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLztcbmNvbnN0IGhleDQgPSAvXiMoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC87XG5jb25zdCBoZXg2ID0gL14jKFswLTlhLWZBLUZdezZ9KSQvO1xuY29uc3QgaGV4OCA9IC9eIyhbMC05YS1mQS1GXXs4fSkkLztcblxuLypcbmh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21tdW5pdHkvbm9ybWFsaXplLWNzcy1jb2xvclxuXG5CU0QgMy1DbGF1c2UgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIDIwMTYsIFJlYWN0IENvbW11bml0eVxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG5tb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGNvcHlyaWdodCBob2xkZXIgbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAgdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cblxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbkFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbklNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxuRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRVxuRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbkRBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SXG5TRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUlxuQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSxcbk9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG5PRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbG9yKGNvbG9yKSB7XG4gIGxldCBtYXRjaDtcblxuICBpZiAodHlwZW9mIGNvbG9yID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBjb2xvciA+Pj4gMCA9PT0gY29sb3IgJiYgY29sb3IgPj0gMCAmJiBjb2xvciA8PSAweGZmZmZmZmZmID8gY29sb3IgOiBudWxsO1xuICB9IC8vIE9yZGVyZWQgYmFzZWQgb24gb2NjdXJyZW5jZXMgb24gRmFjZWJvb2sgY29kZWJhc2VcblxuXG4gIGlmIChtYXRjaCA9IGhleDYuZXhlYyhjb2xvcikpIHJldHVybiBwYXJzZUludChtYXRjaFsxXSArICdmZicsIDE2KSA+Pj4gMDtcbiAgaWYgKGNvbG9ycy5oYXNPd25Qcm9wZXJ0eShjb2xvcikpIHJldHVybiBjb2xvcnNbY29sb3JdO1xuXG4gIGlmIChtYXRjaCA9IHJnYi5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiAocGFyc2UyNTUobWF0Y2hbMV0pIDw8IDI0IHwgLy8gclxuICAgIHBhcnNlMjU1KG1hdGNoWzJdKSA8PCAxNiB8IC8vIGdcbiAgICBwYXJzZTI1NShtYXRjaFszXSkgPDwgOCB8IC8vIGJcbiAgICAweDAwMDAwMGZmKSA+Pj4gLy8gYVxuICAgIDA7XG4gIH1cblxuICBpZiAobWF0Y2ggPSByZ2JhLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIChwYXJzZTI1NShtYXRjaFsxXSkgPDwgMjQgfCAvLyByXG4gICAgcGFyc2UyNTUobWF0Y2hbMl0pIDw8IDE2IHwgLy8gZ1xuICAgIHBhcnNlMjU1KG1hdGNoWzNdKSA8PCA4IHwgLy8gYlxuICAgIHBhcnNlMShtYXRjaFs0XSkpID4+PiAvLyBhXG4gICAgMDtcbiAgfVxuXG4gIGlmIChtYXRjaCA9IGhleDMuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0gKyBtYXRjaFsxXSArIC8vIHJcbiAgICBtYXRjaFsyXSArIG1hdGNoWzJdICsgLy8gZ1xuICAgIG1hdGNoWzNdICsgbWF0Y2hbM10gKyAvLyBiXG4gICAgJ2ZmJywgLy8gYVxuICAgIDE2KSA+Pj4gMDtcbiAgfSAvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLWNvbG9yLTQvI2hleC1ub3RhdGlvblxuXG5cbiAgaWYgKG1hdGNoID0gaGV4OC5leGVjKGNvbG9yKSkgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxNikgPj4+IDA7XG5cbiAgaWYgKG1hdGNoID0gaGV4NC5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSArIG1hdGNoWzFdICsgLy8gclxuICAgIG1hdGNoWzJdICsgbWF0Y2hbMl0gKyAvLyBnXG4gICAgbWF0Y2hbM10gKyBtYXRjaFszXSArIC8vIGJcbiAgICBtYXRjaFs0XSArIG1hdGNoWzRdLCAvLyBhXG4gICAgMTYpID4+PiAwO1xuICB9XG5cbiAgaWYgKG1hdGNoID0gaHNsLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIChoc2xUb1JnYihwYXJzZTM2MChtYXRjaFsxXSksIC8vIGhcbiAgICBwYXJzZVBlcmNlbnRhZ2UobWF0Y2hbMl0pLCAvLyBzXG4gICAgcGFyc2VQZXJjZW50YWdlKG1hdGNoWzNdKSAvLyBsXG4gICAgKSB8IDB4MDAwMDAwZmYpID4+PiAvLyBhXG4gICAgMDtcbiAgfVxuXG4gIGlmIChtYXRjaCA9IGhzbGEuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gKGhzbFRvUmdiKHBhcnNlMzYwKG1hdGNoWzFdKSwgLy8gaFxuICAgIHBhcnNlUGVyY2VudGFnZShtYXRjaFsyXSksIC8vIHNcbiAgICBwYXJzZVBlcmNlbnRhZ2UobWF0Y2hbM10pIC8vIGxcbiAgICApIHwgcGFyc2UxKG1hdGNoWzRdKSkgPj4+IC8vIGFcbiAgICAwO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICBpZiAodCA8IDApIHQgKz0gMTtcbiAgaWYgKHQgPiAxKSB0IC09IDE7XG4gIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICByZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCkge1xuICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgY29uc3QgcCA9IDIgKiBsIC0gcTtcbiAgY29uc3QgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgY29uc3QgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gIGNvbnN0IGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHIgKiAyNTUpIDw8IDI0IHwgTWF0aC5yb3VuZChnICogMjU1KSA8PCAxNiB8IE1hdGgucm91bmQoYiAqIDI1NSkgPDwgODtcbn1cblxuZnVuY3Rpb24gcGFyc2UyNTUoc3RyKSB7XG4gIGNvbnN0IGludCA9IHBhcnNlSW50KHN0ciwgMTApO1xuICBpZiAoaW50IDwgMCkgcmV0dXJuIDA7XG4gIGlmIChpbnQgPiAyNTUpIHJldHVybiAyNTU7XG4gIHJldHVybiBpbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlMzYwKHN0cikge1xuICBjb25zdCBpbnQgPSBwYXJzZUZsb2F0KHN0cik7XG4gIHJldHVybiAoaW50ICUgMzYwICsgMzYwKSAlIDM2MCAvIDM2MDtcbn1cblxuZnVuY3Rpb24gcGFyc2UxKHN0cikge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHN0cik7XG4gIGlmIChudW0gPCAwKSByZXR1cm4gMDtcbiAgaWYgKG51bSA+IDEpIHJldHVybiAyNTU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIDI1NSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGVyY2VudGFnZShzdHIpIHtcbiAgLy8gcGFyc2VGbG9hdCBjb252ZW5pZW50bHkgaWdub3JlcyB0aGUgZmluYWwgJVxuICBjb25zdCBpbnQgPSBwYXJzZUZsb2F0KHN0cik7XG4gIGlmIChpbnQgPCAwKSByZXR1cm4gMDtcbiAgaWYgKGludCA+IDEwMCkgcmV0dXJuIDE7XG4gIHJldHVybiBpbnQgLyAxMDA7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9SZ2JhKGlucHV0KSB7XG4gIGxldCBpbnQzMkNvbG9yID0gbm9ybWFsaXplQ29sb3IoaW5wdXQpO1xuICBpZiAoaW50MzJDb2xvciA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICBpbnQzMkNvbG9yID0gaW50MzJDb2xvciB8fCAwO1xuICBsZXQgciA9IChpbnQzMkNvbG9yICYgMHhmZjAwMDAwMCkgPj4+IDI0O1xuICBsZXQgZyA9IChpbnQzMkNvbG9yICYgMHgwMGZmMDAwMCkgPj4+IDE2O1xuICBsZXQgYiA9IChpbnQzMkNvbG9yICYgMHgwMDAwZmYwMCkgPj4+IDg7XG4gIGxldCBhID0gKGludDMyQ29sb3IgJiAweDAwMDAwMGZmKSAvIDI1NTtcbiAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YX0pYDtcbn0gLy8gUHJvYmxlbTogaHR0cHM6Ly9naXRodWIuY29tL2FuaW1hdGVkanMvYW5pbWF0ZWQvcHVsbC8xMDJcbi8vIFNvbHV0aW9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82Mzg1NjUvcGFyc2luZy1zY2llbnRpZmljLW5vdGF0aW9uLXNlbnNpYmx5LzY1ODY2MlxuXG5cbmNvbnN0IHN0cmluZ1NoYXBlUmVnZXggPSAvWytcXC1dPyg/OjB8WzEtOV1cXGQqKSg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2c7IC8vIENvdmVycyByZ2IsIHJnYmEsIGhzbCwgaHNsYVxuLy8gVGFrZW4gZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9vbG1va3JhbWVyLzgyY2NjZTY3M2Y4NmRiN2NkYTVlXG5cbmNvbnN0IGNvbG9yUmVnZXggPSAvKCMoPzpbMC05YS1mXXsyfSl7Miw0fXwoI1swLTlhLWZdezN9KXwocmdifGhzbClhP1xcKCgtP1xcZCslP1ssXFxzXSspezIsM31cXHMqW1xcZFxcLl0rJT9cXCkpL2dpOyAvLyBDb3ZlcnMgY29sb3IgbmFtZXMgKHRyYW5zcGFyZW50LCBibHVlLCBldGMuKVxuXG5jb25zdCBjb2xvck5hbWVzUmVnZXggPSBuZXcgUmVnRXhwKGAoJHtPYmplY3Qua2V5cyhjb2xvcnMpLmpvaW4oJ3wnKX0pYCwgJ2cnKTtcbi8qKlxuICogU3VwcG9ydHMgc3RyaW5nIHNoYXBlcyBieSBleHRyYWN0aW5nIG51bWJlcnMgc28gbmV3IHZhbHVlcyBjYW4gYmUgY29tcHV0ZWQsXG4gKiBhbmQgcmVjb21iaW5lcyB0aG9zZSB2YWx1ZXMgaW50byBuZXcgc3RyaW5ncyBvZiB0aGUgc2FtZSBzaGFwZS4gIFN1cHBvcnRzXG4gKiB0aGluZ3MgbGlrZTpcbiAqXG4gKiAgIHJnYmEoMTIzLCA0MiwgOTksIDAuMzYpICAgICAgICAgICAvLyBjb2xvcnNcbiAqICAgLTQ1ZGVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlcyB3aXRoIHVuaXRzXG4gKiAgIDAgMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSAvLyBib3ggc2hhZG93c1xuICovXG5cbmNvbnN0IGNyZWF0ZVN0cmluZ0ludGVycG9sYXRvciA9IGNvbmZpZyA9PiB7XG4gIC8vIFJlcGxhY2UgY29sb3JzIHdpdGggcmdiYVxuICBjb25zdCBvdXRwdXRSYW5nZSA9IGNvbmZpZy5vdXRwdXQubWFwKHJhbmdlVmFsdWUgPT4gcmFuZ2VWYWx1ZS5yZXBsYWNlKGNvbG9yUmVnZXgsIGNvbG9yVG9SZ2JhKSkubWFwKHJhbmdlVmFsdWUgPT4gcmFuZ2VWYWx1ZS5yZXBsYWNlKGNvbG9yTmFtZXNSZWdleCwgY29sb3JUb1JnYmEpKTtcbiAgY29uc3Qgb3V0cHV0UmFuZ2VzID0gb3V0cHV0UmFuZ2VbMF0ubWF0Y2goc3RyaW5nU2hhcGVSZWdleCkubWFwKCgpID0+IFtdKTtcbiAgb3V0cHV0UmFuZ2UuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgdmFsdWUubWF0Y2goc3RyaW5nU2hhcGVSZWdleCkuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiBvdXRwdXRSYW5nZXNbaV0ucHVzaCgrbnVtYmVyKSk7XG4gIH0pO1xuICBjb25zdCBpbnRlcnBvbGF0aW9ucyA9IG91dHB1dFJhbmdlWzBdLm1hdGNoKHN0cmluZ1NoYXBlUmVnZXgpLm1hcCgoX3ZhbHVlLCBpKSA9PiBjcmVhdGVJbnRlcnBvbGF0b3IoX2V4dGVuZHMoe30sIGNvbmZpZywge1xuICAgIG91dHB1dDogb3V0cHV0UmFuZ2VzW2ldXG4gIH0pKSk7XG4gIHJldHVybiBpbnB1dCA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHJldHVybiBvdXRwdXRSYW5nZVswXSAvLyAncmdiYSgwLCAxMDAsIDIwMCwgMCknXG4gICAgLy8gLT5cbiAgICAvLyAncmdiYSgke2ludGVycG9sYXRpb25zWzBdKGlucHV0KX0sICR7aW50ZXJwb2xhdGlvbnNbMV0oaW5wdXQpfSwgLi4uJ1xuICAgIC5yZXBsYWNlKHN0cmluZ1NoYXBlUmVnZXgsICgpID0+IGludGVycG9sYXRpb25zW2krK10oaW5wdXQpKSAvLyByZ2JhIHJlcXVpcmVzIHRoYXQgdGhlIHIsZyxiIGFyZSBpbnRlZ2Vycy4uLi4gc28gd2Ugd2FudCB0byByb3VuZCB0aGVtLCBidXQgd2UgKmRvbnQqIHdhbnQgdG9cbiAgICAvLyByb3VuZCB0aGUgb3BhY2l0eSAoNHRoIGNvbHVtbikuXG4gICAgLnJlcGxhY2UoL3JnYmFcXCgoWzAtOVxcLi1dKyksIChbMC05XFwuLV0rKSwgKFswLTlcXC4tXSspLCAoWzAtOVxcLi1dKylcXCkvZ2ksIChfLCBwMSwgcDIsIHAzLCBwNCkgPT4gYHJnYmEoJHtNYXRoLnJvdW5kKHAxKX0sICR7TWF0aC5yb3VuZChwMil9LCAke01hdGgucm91bmQocDMpfSwgJHtwNH0pYCk7XG4gIH07XG59O1xuXG5sZXQgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxuICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICBib3JkZXJJbWFnZVdpZHRoOiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGNvbHVtbnM6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkUm93RW5kOiB0cnVlLFxuICBncmlkUm93U3BhbjogdHJ1ZSxcbiAgZ3JpZFJvd1N0YXJ0OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBncmlkQ29sdW1uRW5kOiB0cnVlLFxuICBncmlkQ29sdW1uU3BhbjogdHJ1ZSxcbiAgZ3JpZENvbHVtblN0YXJ0OiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgZmxvb2RPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaGFycmF5OiB0cnVlLFxuICBzdHJva2VEYXNob2Zmc2V0OiB0cnVlLFxuICBzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuICBzdHJva2VPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VXaWR0aDogdHJ1ZVxufTtcblxuY29uc3QgcHJlZml4S2V5ID0gKHByZWZpeCwga2V5KSA9PiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xuXG5jb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01zJywgJ01veicsICdPJ107XG5pc1VuaXRsZXNzTnVtYmVyID0gT2JqZWN0LmtleXMoaXNVbml0bGVzc051bWJlcikucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgcHJlZml4ZXMuZm9yRWFjaChwcmVmaXggPT4gYWNjW3ByZWZpeEtleShwcmVmaXgsIHByb3ApXSA9IGFjY1twcm9wXSk7XG4gIHJldHVybiBhY2M7XG59LCBpc1VuaXRsZXNzTnVtYmVyKTtcblxuZnVuY3Rpb24gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShuYW1lLCB2YWx1ZSwgaXNDdXN0b21Qcm9wZXJ0eSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJycpIHJldHVybiAnJztcbiAgaWYgKCFpc0N1c3RvbVByb3BlcnR5ICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pKSByZXR1cm4gdmFsdWUgKyAncHgnOyAvLyBQcmVzdW1lcyBpbXBsaWNpdCAncHgnIHN1ZmZpeCBmb3IgdW5pdGxlc3MgbnVtYmVyc1xuXG4gIHJldHVybiAoJycgKyB2YWx1ZSkudHJpbSgpO1xufVxuXG5jb25zdCBhdHRyaWJ1dGVDYWNoZSA9IHt9O1xuaW5qZWN0Q3JlYXRlQW5pbWF0ZWRTdHlsZShzdHlsZSA9PiBuZXcgQW5pbWF0ZWRTdHlsZShzdHlsZSkpO1xuaW5qZWN0RGVmYXVsdEVsZW1lbnQoJ2RpdicpO1xuaW5qZWN0U3RyaW5nSW50ZXJwb2xhdG9yKGNyZWF0ZVN0cmluZ0ludGVycG9sYXRvcik7XG5pbmplY3RDb2xvck5hbWVzKGNvbG9ycyk7XG5pbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzKChpbnN0YW5jZSwgcHJvcHMpID0+IHtcbiAgaWYgKGluc3RhbmNlLm5vZGVUeXBlICYmIGluc3RhbmNlLnNldEF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IHByb3BzLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcHJvcHMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInN0eWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJzY3JvbGxUb3BcIiwgXCJzY3JvbGxMZWZ0XCJdKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IGluc3RhbmNlLm5vZGVOYW1lID09PSAnZmlsdGVyJyB8fCBpbnN0YW5jZS5wYXJlbnROb2RlICYmIGluc3RhbmNlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdmaWx0ZXInO1xuICAgIGlmIChzY3JvbGxUb3AgIT09IHZvaWQgMCkgaW5zdGFuY2Uuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgIGlmIChzY3JvbGxMZWZ0ICE9PSB2b2lkIDApIGluc3RhbmNlLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyAvLyBTZXQgdGV4dENvbnRlbnQsIGlmIGNoaWxkcmVuIGlzIGFuIGFuaW1hdGFibGUgdmFsdWVcblxuICAgIGlmIChjaGlsZHJlbiAhPT0gdm9pZCAwKSBpbnN0YW5jZS50ZXh0Q29udGVudCA9IGNoaWxkcmVuOyAvLyBTZXQgc3R5bGVzIC4uLlxuXG4gICAgZm9yIChsZXQgc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIGNvbnRpbnVlO1xuICAgICAgdmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBzdHlsZU5hbWUuaW5kZXhPZignLS0nKSA9PT0gMDtcbiAgICAgIHZhciBzdHlsZVZhbHVlID0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShzdHlsZU5hbWUsIHN0eWxlW3N0eWxlTmFtZV0sIGlzQ3VzdG9tUHJvcGVydHkpO1xuICAgICAgaWYgKHN0eWxlTmFtZSA9PT0gJ2Zsb2F0Jykgc3R5bGVOYW1lID0gJ2Nzc0Zsb2F0JztcbiAgICAgIGlmIChpc0N1c3RvbVByb3BlcnR5KSBpbnN0YW5jZS5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIHN0eWxlVmFsdWUpO2Vsc2UgaW5zdGFuY2Uuc3R5bGVbc3R5bGVOYW1lXSA9IHN0eWxlVmFsdWU7XG4gICAgfSAvLyBTZXQgYXR0cmlidXRlcyAuLi5cblxuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBBdHRyaWJ1dGVzIGFyZSB3cml0dGVuIGluIGRhc2ggY2FzZVxuICAgICAgY29uc3QgZGFzaENhc2UgPSBmaWx0ZXIgPyBuYW1lIDogYXR0cmlidXRlQ2FjaGVbbmFtZV0gfHwgKGF0dHJpYnV0ZUNhY2hlW25hbWVdID0gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIG4gPT4gJy0nICsgbi50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICBpZiAodHlwZW9mIGluc3RhbmNlLmdldEF0dHJpYnV0ZShkYXNoQ2FzZSkgIT09ICd1bmRlZmluZWQnKSBpbnN0YW5jZS5zZXRBdHRyaWJ1dGUoZGFzaENhc2UsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn0sIHN0eWxlID0+IHN0eWxlKTtcblxuY29uc3QgZG9tRWxlbWVudHMgPSBbJ2EnLCAnYWJicicsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2Jhc2UnLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXYnLCAnZGwnLCAnZHQnLCAnZW0nLCAnZW1iZWQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpZnJhbWUnLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAna2V5Z2VuJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdsaW5rJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRhJywgJ21ldGVyJywgJ25hdicsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFuJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLCAvLyBTVkdcbidjaXJjbGUnLCAnY2xpcFBhdGgnLCAnZGVmcycsICdlbGxpcHNlJywgJ2ZvcmVpZ25PYmplY3QnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG4vLyBFeHRlbmQgYW5pbWF0ZWQgd2l0aCBhbGwgdGhlIGF2YWlsYWJsZSBUSFJFRSBlbGVtZW50c1xuY29uc3QgYXBwbHkgPSBtZXJnZShjcmVhdGVBbmltYXRlZENvbXBvbmVudCwgZmFsc2UpO1xuY29uc3QgZXh0ZW5kZWRBbmltYXRlZCA9IGFwcGx5KGRvbUVsZW1lbnRzKTtcblxuZXhwb3J0IHsgYXBwbHksIGNvbmZpZywgdXBkYXRlLCBleHRlbmRlZEFuaW1hdGVkIGFzIGFuaW1hdGVkLCBleHRlbmRlZEFuaW1hdGVkIGFzIGEsIGludGVycG9sYXRlJDEgYXMgaW50ZXJwb2xhdGUsIEdsb2JhbHMsIHVzZVNwcmluZywgdXNlVHJhaWwsIHVzZVRyYW5zaXRpb24sIHVzZUNoYWluLCB1c2VTcHJpbmdzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9