/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./src/workers/marching-cubes.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/superPropBase.js");
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");
var construct = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/construct.js");
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/Core/CellArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/Core/CellArray.js ***!
  \***************************************************************/
/*! exports provided: STATIC, default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC", function() { return STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkCellArray$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _DataArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataArray.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray.js");
/* harmony import */ var _DataArray_Constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataArray/Constants.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray/Constants.js");





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
// Global methods
// ----------------------------------------------------------------------------

function extractCellSizes(cellArray) {
  var currentIdx = 0;
  return cellArray.filter(function (value, index) {
    if (index === currentIdx) {
      currentIdx += value + 1;
      return true;
    }
    return false;
  });
}
function getNumberOfCells(cellArray) {
  var cellId = 0;
  for (var cellArrayIndex = 0; cellArrayIndex < cellArray.length;) {
    cellArrayIndex += cellArray[cellArrayIndex] + 1;
    cellId++;
  }
  return cellId;
} // ----------------------------------------------------------------------------
// Static API
// ----------------------------------------------------------------------------

var STATIC = {
  extractCellSizes: extractCellSizes,
  getNumberOfCells: getNumberOfCells
}; // ----------------------------------------------------------------------------
// vtkCellArray methods
// ----------------------------------------------------------------------------

function vtkCellArray(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkCellArray');
  publicAPI.getNumberOfCells = function (recompute) {
    if (model.numberOfCells !== undefined && !recompute) {
      return model.numberOfCells;
    }
    if (model.cellSizes) {
      model.numberOfCells = model.cellSizes.length;
    } else {
      model.numberOfCells = getNumberOfCells(publicAPI.getData());
    }
    return model.numberOfCells;
  };
  publicAPI.getCellSizes = function (recompute) {
    if (model.cellSizes !== undefined && !recompute) {
      return model.cellSizes;
    }
    model.cellSizes = extractCellSizes(publicAPI.getData());
    return model.cellSizes;
  };
  var superSetData = publicAPI.setData;
  publicAPI.setData = function (typedArray) {
    superSetData(typedArray, 1);
    model.numberOfCells = undefined;
    model.cellSizes = undefined;
  };
  publicAPI.getCell = function (loc) {
    var cellLoc = loc;
    var numberOfPoints = model.values[cellLoc++];
    return model.values.subarray(cellLoc, cellLoc + numberOfPoints);
  };
  var superInitialize = publicAPI.initialize;
  publicAPI.initialize = function () {
    superInitialize(); // Set to undefined to ensure insertNextCell works correctly

    model.numberOfCells = undefined;
    model.cellSizes = undefined;
  };
  publicAPI.insertNextCell = function (cellPointIds) {
    var cellId = publicAPI.getNumberOfCells();
    publicAPI.insertNextTuples([cellPointIds.length].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(cellPointIds))); // By computing the number of cells earlier, we made sure that numberOfCells is defined

    ++model.numberOfCells;
    if (model.cellSizes != null) {
      model.cellSizes.push(cellPointIds.length);
    }
    return cellId;
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

function defaultValues(initialValues) {
  return _objectSpread({
    empty: true,
    numberOfComponents: 1,
    dataType: _DataArray_Constants_js__WEBPACK_IMPORTED_MODULE_4__["VtkDataTypes"].UNSIGNED_INT
  }, initialValues);
} // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  _DataArray_js__WEBPACK_IMPORTED_MODULE_3__["default"].extend(publicAPI, model, defaultValues(initialValues));
  vtkCellArray(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance(extend, 'vtkCellArray'); // ----------------------------------------------------------------------------

var vtkCellArray$1 = _objectSpread({
  newInstance: newInstance,
  extend: extend
}, STATIC);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/Core/ClassHierarchy.js":
/*!********************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/Core/ClassHierarchy.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClassHierarchy; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/* eslint-disable prefer-rest-params */
var ClassHierarchy = /*#__PURE__*/function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ClassHierarchy, _Array);
  var _super = _createSuper(ClassHierarchy);
  function ClassHierarchy() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ClassHierarchy);
    return _super.apply(this, arguments);
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ClassHierarchy, [{
    key: "push",
    value: function push() {
      for (var i = 0; i < arguments.length; i++) {
        if (!this.includes(arguments[i])) {
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ClassHierarchy.prototype), "push", this).call(this, arguments[i]);
        }
      }
      return this.length;
    }
  }]);
  return ClassHierarchy;
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Array));


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/Core/DataArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/Core/DataArray.js ***!
  \***************************************************************/
/*! exports provided: STATIC, default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC", function() { return STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkDataArray$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataArray_Constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataArray/Constants.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray/Constants.js");
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Math_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var vtkErrorMacro = _macros_js__WEBPACK_IMPORTED_MODULE_2__["vtkErrorMacro"];
var DefaultDataType = _DataArray_Constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].DefaultDataType; // ----------------------------------------------------------------------------
// Global methods
// ----------------------------------------------------------------------------
// Original source from https://www.npmjs.com/package/compute-range
// Modified to accept type arrays

function fastComputeRange(arr, offset, numberOfComponents) {
  var len = arr.length;
  var min;
  var max;
  var x;
  var i;
  if (len === 0) {
    return {
      min: Number.MAX_VALUE,
      max: -Number.MAX_VALUE
    };
  }
  min = arr[offset];
  max = min;
  for (i = offset; i < len; i += numberOfComponents) {
    x = arr[i];
    if (x < min) {
      min = x;
    } else if (x > max) {
      max = x;
    }
  }
  return {
    min: min,
    max: max
  };
}
/**
 * @deprecated please use fastComputeRange instead
 */

function createRangeHelper() {
  var min = Number.MAX_VALUE;
  var max = -Number.MAX_VALUE;
  var count = 0;
  var sum = 0;
  return {
    add: function add(value) {
      if (min > value) {
        min = value;
      }
      if (max < value) {
        max = value;
      }
      count++;
      sum += value;
    },
    get: function get() {
      return {
        min: min,
        max: max,
        count: count,
        sum: sum,
        mean: sum / count
      };
    },
    getRange: function getRange() {
      return {
        min: min,
        max: max
      };
    }
  };
}
function computeRange(values) {
  var component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var numberOfComponents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  if (component < 0 && numberOfComponents > 1) {
    // Compute magnitude
    var size = values.length;
    var numberOfValues = size / numberOfComponents;
    var data = new Float64Array(numberOfValues);
    for (var i = 0, j = 0; i < numberOfValues; ++i) {
      var _i;
      for (var nextJ = j + numberOfComponents; j < nextJ; ++j) {
        data[i] += values[j] * values[j];
      }
      _i = i, data[_i] = Math.pow(data[_i], 0.5);
    }
    return fastComputeRange(data, 0, 1);
  }
  return fastComputeRange(values, component < 0 ? 0 : component, numberOfComponents);
}
function ensureRangeSize(rangeArray) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ranges = rangeArray || []; // Pad ranges with null value to get the

  while (ranges.length <= size) {
    ranges.push(null);
  }
  return ranges;
}
function getDataType(typedArray) {
  // Expects toString() to return "[object ...Array]"
  return Object.prototype.toString.call(typedArray).slice(8, -1);
}
function getMaxNorm(normArray) {
  var numComps = normArray.getNumberOfComponents();
  var maxNorm = 0.0;
  var tuple = new Array(numComps);
  for (var i = 0; i < normArray.getNumberOfTuples(); ++i) {
    normArray.getTuple(i, tuple);
    var norm$1 = Object(_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["n"])(tuple, numComps);
    if (norm$1 > maxNorm) {
      maxNorm = norm$1;
    }
  }
  return maxNorm;
} // ----------------------------------------------------------------------------
// Static API
// ----------------------------------------------------------------------------

var STATIC = {
  computeRange: computeRange,
  createRangeHelper: createRangeHelper,
  fastComputeRange: fastComputeRange,
  getDataType: getDataType,
  getMaxNorm: getMaxNorm
}; // ----------------------------------------------------------------------------
// vtkDataArray methods
// ----------------------------------------------------------------------------

function vtkDataArray(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkDataArray');
  function dataChange() {
    model.ranges = null;
    publicAPI.modified();
  }
  /**
   * Resize model.values and copy the old values to the new array.
   * @param {Number} requestedNumTuples Final expected number of tuples; must be >= 0
   * @returns {Boolean} True if a resize occured, false otherwise
   */

  function resize(requestedNumTuples) {
    if (requestedNumTuples < 0) {
      return false;
    }
    var numComps = publicAPI.getNumberOfComponents();
    var curNumTuples = model.values.length / (numComps > 0 ? numComps : 1);
    if (requestedNumTuples === curNumTuples) {
      return true;
    }
    if (requestedNumTuples > curNumTuples) {
      // Requested size is bigger than current size.  Allocate enough
      // memory to fit the requested size and be more than double the
      // currently allocated memory.
      var oldValues = model.values;
      model.values = Object(_macros_js__WEBPACK_IMPORTED_MODULE_2__["newTypedArray"])(model.dataType, (requestedNumTuples + curNumTuples) * numComps);
      model.values.set(oldValues);
      return true;
    } // Requested size is smaller than current size

    model.size = requestedNumTuples * numComps;
    dataChange();
    return true;
  }
  publicAPI.initialize = function () {
    resize(0);
  };
  publicAPI.getElementComponentSize = function () {
    return model.values.BYTES_PER_ELEMENT;
  }; // Description:
  // Return the data component at the location specified by tupleIdx and
  // compIdx.

  publicAPI.getComponent = function (tupleIdx) {
    var compIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return model.values[tupleIdx * model.numberOfComponents + compIdx];
  }; // Description:
  // Set the data component at the location specified by tupleIdx and compIdx
  // to value.
  // Note that i is less than NumberOfTuples and j is less than
  //  NumberOfComponents. Make sure enough memory has been allocated
  // (use SetNumberOfTuples() and SetNumberOfComponents()).

  publicAPI.setComponent = function (tupleIdx, compIdx, value) {
    if (value !== model.values[tupleIdx * model.numberOfComponents + compIdx]) {
      model.values[tupleIdx * model.numberOfComponents + compIdx] = value;
      dataChange();
    }
  };
  publicAPI.getValue = function (valueIdx) {
    var idx = valueIdx / model.numberOfComponents;
    var comp = valueIdx % model.numberOfComponents;
    return publicAPI.getComponent(idx, comp);
  };
  publicAPI.setValue = function (valueIdx, value) {
    var idx = valueIdx / model.numberOfComponents;
    var comp = valueIdx % model.numberOfComponents;
    publicAPI.setComponent(idx, comp, value);
  };
  publicAPI.getData = function () {
    return model.size === model.values.length ? model.values : model.values.subarray(0, model.size);
  };
  publicAPI.getRange = function () {
    var componentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var rangeIdx = componentIndex < 0 ? model.numberOfComponents : componentIndex;
    var range = null;
    if (!model.ranges) {
      model.ranges = ensureRangeSize(model.ranges, model.numberOfComponents);
    }
    range = model.ranges[rangeIdx];
    if (range) {
      model.rangeTuple[0] = range.min;
      model.rangeTuple[1] = range.max;
      return model.rangeTuple;
    } // Need to compute ranges...

    range = computeRange(publicAPI.getData(), componentIndex, model.numberOfComponents);
    model.ranges[rangeIdx] = range;
    model.rangeTuple[0] = range.min;
    model.rangeTuple[1] = range.max;
    return model.rangeTuple;
  };
  publicAPI.setRange = function (rangeValue, componentIndex) {
    if (!model.ranges) {
      model.ranges = ensureRangeSize(model.ranges, model.numberOfComponents);
    }
    var range = {
      min: rangeValue.min,
      max: rangeValue.max
    };
    model.ranges[componentIndex] = range;
    model.rangeTuple[0] = range.min;
    model.rangeTuple[1] = range.max;
    return model.rangeTuple;
  };
  publicAPI.setTuple = function (idx, tuple) {
    var offset = idx * model.numberOfComponents;
    for (var i = 0; i < model.numberOfComponents; i++) {
      model.values[offset + i] = tuple[i];
    }
  };
  publicAPI.setTuples = function (idx, tuples) {
    var i = idx * model.numberOfComponents;
    var last = Math.min(tuples.length, model.size - i);
    for (var j = 0; j < last;) {
      model.values[i++] = tuples[j++];
    }
  };
  publicAPI.insertTuple = function (idx, tuple) {
    if (model.size <= idx * model.numberOfComponents) {
      model.size = (idx + 1) * model.numberOfComponents;
      resize(idx + 1);
    }
    publicAPI.setTuple(idx, tuple);
    return idx;
  };
  publicAPI.insertTuples = function (idx, tuples) {
    var end = idx + tuples.length / model.numberOfComponents;
    if (model.size < end * model.numberOfComponents) {
      model.size = end * model.numberOfComponents;
      resize(end);
    }
    publicAPI.setTuples(idx, tuples);
    return end;
  };
  publicAPI.insertNextTuple = function (tuple) {
    var idx = model.size / model.numberOfComponents;
    return publicAPI.insertTuple(idx, tuple);
  };
  publicAPI.insertNextTuples = function (tuples) {
    var idx = model.size / model.numberOfComponents;
    return publicAPI.insertTuples(idx, tuples);
  };
  publicAPI.getTuple = function (idx) {
    var tupleToFill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var numberOfComponents = model.numberOfComponents || 1;
    var offset = idx * numberOfComponents; // Check most common component sizes first
    // to avoid doing a for loop if possible

    switch (numberOfComponents) {
      case 4:
        tupleToFill[3] = model.values[offset + 3];
      // eslint-disable-next-line no-fallthrough

      case 3:
        tupleToFill[2] = model.values[offset + 2];
      // eslint-disable-next-line no-fallthrough

      case 2:
        tupleToFill[1] = model.values[offset + 1];
      // eslint-disable-next-line no-fallthrough

      case 1:
        tupleToFill[0] = model.values[offset];
        break;
      default:
        for (var i = numberOfComponents - 1; i >= 0; --i) {
          tupleToFill[i] = model.values[offset + i];
        }
    }
    return tupleToFill;
  };
  publicAPI.getTuples = function (fromId, toId) {
    var from = (fromId !== null && fromId !== void 0 ? fromId : 0) * model.numberOfComponents;
    var to = (toId !== null && toId !== void 0 ? toId : publicAPI.getNumberOfTuples()) * model.numberOfComponents;
    var arr = publicAPI.getData().subarray(from, to);
    return arr.length > 0 ? arr : null;
  };
  publicAPI.getTupleLocation = function () {
    var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return idx * model.numberOfComponents;
  };
  publicAPI.getNumberOfComponents = function () {
    return model.numberOfComponents;
  };
  publicAPI.getNumberOfValues = function () {
    return model.size;
  };
  publicAPI.getNumberOfTuples = function () {
    return model.size / model.numberOfComponents;
  };
  publicAPI.getDataType = function () {
    return model.dataType;
  };
  /* eslint-disable no-use-before-define */

  publicAPI.newClone = function () {
    return newInstance({
      empty: true,
      name: model.name,
      dataType: model.dataType,
      numberOfComponents: model.numberOfComponents
    });
  };
  /* eslint-enable no-use-before-define */

  publicAPI.getName = function () {
    if (!model.name) {
      publicAPI.modified();
      model.name = "vtkDataArray".concat(publicAPI.getMTime());
    }
    return model.name;
  };
  publicAPI.setData = function (typedArray, numberOfComponents) {
    model.values = typedArray;
    model.size = typedArray.length;
    model.dataType = getDataType(typedArray);
    if (numberOfComponents) {
      model.numberOfComponents = numberOfComponents;
    }
    if (model.size % model.numberOfComponents !== 0) {
      model.numberOfComponents = 1;
    }
    dataChange();
  }; // Override serialization support

  publicAPI.getState = function () {
    if (model.deleted) {
      return null;
    }
    var jsonArchive = _objectSpread(_objectSpread({}, model), {}, {
      vtkClass: publicAPI.getClassName()
    }); // Convert typed array to regular array

    jsonArchive.values = Array.from(jsonArchive.values);
    delete jsonArchive.buffer; // Clean any empty data

    Object.keys(jsonArchive).forEach(function (keyName) {
      if (!jsonArchive[keyName]) {
        delete jsonArchive[keyName];
      }
    }); // Sort resulting object by key name

    var sortedObj = {};
    Object.keys(jsonArchive).sort().forEach(function (name) {
      sortedObj[name] = jsonArchive[name];
    }); // Remove mtime

    if (sortedObj.mtime) {
      delete sortedObj.mtime;
    }
    return sortedObj;
  };
  publicAPI.deepCopy = function (other) {
    publicAPI.shallowCopy(other);
    publicAPI.setData(other.getData().slice());
  };
  publicAPI.interpolateTuple = function (idx, source1, source1Idx, source2, source2Idx, t) {
    var numberOfComponents = model.numberOfComponents || 1;
    if (numberOfComponents !== source1.getNumberOfComponents() || numberOfComponents !== source2.getNumberOfComponents()) {
      vtkErrorMacro('numberOfComponents must match');
    }
    var tuple1 = source1.getTuple(source1Idx);
    var tuple2 = source2.getTuple(source2Idx);
    var out = [];
    out.length = numberOfComponents; // Check most common component sizes first
    // to avoid doing a for loop if possible

    switch (numberOfComponents) {
      case 4:
        out[3] = tuple1[3] + (tuple2[3] - tuple1[3]) * t;
      // eslint-disable-next-line no-fallthrough

      case 3:
        out[2] = tuple1[2] + (tuple2[2] - tuple1[2]) * t;
      // eslint-disable-next-line no-fallthrough

      case 2:
        out[1] = tuple1[1] + (tuple2[1] - tuple1[1]) * t;
      // eslint-disable-next-line no-fallthrough

      case 1:
        out[0] = tuple1[0] + (tuple2[0] - tuple1[0]) * t;
        break;
      default:
        for (var i = 0; i < numberOfComponents; i++) {
          out[i] = tuple1[i] + (tuple2[i] - tuple1[i]) * t;
        }
    }
    return publicAPI.insertTuple(idx, out);
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------
// size: The current size of the dataArray.
// NOTE: The underlying typed array may be larger than 'size'.

var DEFAULT_VALUES = {
  name: '',
  numberOfComponents: 1,
  dataType: DefaultDataType,
  rangeTuple: [0, 0] // size: undefined,
  // values: null,
  // ranges: null,
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  if (!model.empty && !model.values && !model.size) {
    throw new TypeError('Cannot create vtkDataArray object without: size > 0, values');
  }
  if (!model.values) {
    model.values = Object(_macros_js__WEBPACK_IMPORTED_MODULE_2__["newTypedArray"])(model.dataType, model.size);
  } else if (Array.isArray(model.values)) {
    model.values = Object(_macros_js__WEBPACK_IMPORTED_MODULE_2__["newTypedArrayFrom"])(model.dataType, model.values);
  }
  if (model.values) {
    var _model$size;

    // Takes the size if provided (can be lower than `model.values`) otherwise the actual length of `values`.
    model.size = (_model$size = model.size) !== null && _model$size !== void 0 ? _model$size : model.values.length;
    model.dataType = getDataType(model.values);
  } // Object methods

  Object(_macros_js__WEBPACK_IMPORTED_MODULE_2__["obj"])(publicAPI, model);
  Object(_macros_js__WEBPACK_IMPORTED_MODULE_2__["set"])(publicAPI, model, ['name', 'numberOfComponents']); // Object specific methods

  vtkDataArray(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = Object(_macros_js__WEBPACK_IMPORTED_MODULE_2__["newInstance"])(extend, 'vtkDataArray'); // ----------------------------------------------------------------------------

var vtkDataArray$1 = _objectSpread(_objectSpread({
  newInstance: newInstance,
  extend: extend
}, STATIC), _DataArray_Constants_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/Core/DataArray/Constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/Core/DataArray/Constants.js ***!
  \*************************************************************************/
/*! exports provided: DataTypeByteSize, DefaultDataType, VtkDataTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTypeByteSize", function() { return DataTypeByteSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDataType", function() { return DefaultDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VtkDataTypes", function() { return VtkDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constants; });
var DataTypeByteSize = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};
var VtkDataTypes = {
  VOID: '',
  // not sure to know what that should be
  CHAR: 'Int8Array',
  SIGNED_CHAR: 'Int8Array',
  UNSIGNED_CHAR: 'Uint8Array',
  SHORT: 'Int16Array',
  UNSIGNED_SHORT: 'Uint16Array',
  INT: 'Int32Array',
  UNSIGNED_INT: 'Uint32Array',
  FLOAT: 'Float32Array',
  DOUBLE: 'Float64Array'
};
var DefaultDataType = VtkDataTypes.FLOAT;
var Constants = {
  DefaultDataType: DefaultDataType,
  DataTypeByteSize: DataTypeByteSize,
  VtkDataTypes: VtkDataTypes
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/Core/Math/Constants.js":
/*!********************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/Core/Math/Constants.js ***!
  \********************************************************************/
/*! exports provided: EPSILON, IDENTITY, IDENTITY_3X3, VTK_SMALL_NUMBER, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY", function() { return IDENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY_3X3", function() { return IDENTITY_3X3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTK_SMALL_NUMBER", function() { return VTK_SMALL_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constants; });
var IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var IDENTITY_3X3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
var EPSILON = 1e-6;
var VTK_SMALL_NUMBER = 1.0e-12;
var Constants = {
  IDENTITY: IDENTITY,
  IDENTITY_3X3: IDENTITY_3X3,
  EPSILON: EPSILON,
  VTK_SMALL_NUMBER: VTK_SMALL_NUMBER
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/Core/Math/index.js ***!
  \****************************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, a_, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return ceilLog2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return rowsToMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return degreesFromRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return areEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return clampValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return arrayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return getMajorAxisIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return isInf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return rgb2hsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return rgb2lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return lab2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return normalize2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return nearestPowerOfTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return createUninitializedBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return multiply3x3_vect3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return areBoundsInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return isPowerOfTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return angleBetweenVectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return signedAngleBetweenVectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return createArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return Pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return arrayMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return arrayMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areMatricesEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return factorial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return binomial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return beginCombination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return nextCombination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return randomSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return getSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return gaussian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return multiplyScalar2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a8", function() { return multiplyAccumulate2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a9", function() { return outer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aA", function() { return diagonalize3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aB", function() { return singularValueDecomposition3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aC", function() { return luFactorLinearSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aD", function() { return luSolveLinearSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aE", function() { return invertMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aF", function() { return estimateMatrixCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aG", function() { return solveHomogeneousLeastSquares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aH", function() { return solveLeastSquares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aI", function() { return hex2float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aJ", function() { return lab2xyz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aK", function() { return xyz2lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aL", function() { return xyz2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aM", function() { return rgb2xyz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aN", function() { return clampAndNormalizeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aO", function() { return getScalarTypeFittingRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aP", function() { return getAdjustedScalarRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aQ", function() { return extentIsWithinOtherExtent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aR", function() { return boundsIsWithinOtherBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aS", function() { return pointIsWithinBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aT", function() { return solve3PointCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aU", function() { return inf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aV", function() { return negInf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aW", function() { return isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aX", function() { return isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aY", function() { return floatToHex2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aZ", function() { return floatRGB2HexCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a_", function() { return float2CssRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aa", function() { return projectVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return dot2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return projectVector2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ad", function() { return gaussianAmplitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ae", function() { return gaussianWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "af", function() { return outer2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ag", function() { return norm2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ah", function() { return rowsToMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ai", function() { return columnsToMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aj", function() { return columnsToMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ak", function() { return LUFactor3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "al", function() { return LUSolve3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "am", function() { return linearSolve3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "an", function() { return multiply3x3_mat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ao", function() { return multiplyMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return transpose3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aq", function() { return invert3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ar", function() { return identity3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "at", function() { return isIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "au", function() { return isIdentity3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "av", function() { return quaternionToMatrix3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aw", function() { return roundNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ax", function() { return matrix3x3ToQuaternion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ay", function() { return multiplyQuaternion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "az", function() { return orthogonalize3x3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return roundVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return computeBoundsFromPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return clampVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return distance2BetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return vtkMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hsv2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isNan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return solveLinearSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return norm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return multiplyAccumulate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return determinant2x2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return jacobiN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return radiansFromDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return perpendiculars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return uninitializeBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return vtkMath$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return jacobi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return determinant3x3; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Constants.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/Constants.js");





var vtkErrorMacro = _macros_js__WEBPACK_IMPORTED_MODULE_3__["default"].vtkErrorMacro,
  vtkWarningMacro = _macros_js__WEBPACK_IMPORTED_MODULE_3__["default"].vtkWarningMacro; // ----------------------------------------------------------------------------

/* eslint-disable camelcase                                                  */

/* eslint-disable no-cond-assign                                             */

/* eslint-disable no-bitwise                                                 */

/* eslint-disable no-multi-assign                                            */
// ----------------------------------------------------------------------------

var randomSeedValue = 0;
var VTK_MAX_ROTATIONS = 20;
function notImplemented(method) {
  return function () {
    return vtkErrorMacro("vtkMath::".concat(method, " - NOT IMPLEMENTED"));
  };
} // Swap rows for n by n matrix

function swapRowsMatrix_nxn(matrix, n, row1, row2) {
  var tmp;
  for (var i = 0; i < n; i++) {
    tmp = matrix[row1 * n + i];
    matrix[row1 * n + i] = matrix[row2 * n + i];
    matrix[row2 * n + i] = tmp;
  }
} // Swap columns for n by n matrix

function swapColumnsMatrix_nxn(matrix, n, column1, column2) {
  var tmp;
  for (var i = 0; i < n; i++) {
    tmp = matrix[i * n + column1];
    matrix[i * n + column1] = matrix[i * n + column2];
    matrix[i * n + column2] = tmp;
  }
} // ----------------------------------------------------------------------------
// Global methods
// ----------------------------------------------------------------------------

function createArray() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  // faster than Array.from and/or while loop
  var res = Array(size);
  for (var i = 0; i < size; ++i) {
    res[i] = 0;
  }
  return res;
}
var Pi = function Pi() {
  return Math.PI;
};
function radiansFromDegrees(deg) {
  return deg / 180 * Math.PI;
}
function degreesFromRadians(rad) {
  return rad * 180 / Math.PI;
}
var round = Math.round,
  floor = Math.floor,
  ceil = Math.ceil,
  min = Math.min,
  max = Math.max;
function arrayMin(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var stride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var minValue = Infinity;
  for (var i = offset, len = arr.length; i < len; i += stride) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}
function arrayMax(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var stride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var maxValue = -Infinity;
  for (var i = offset, len = arr.length; i < len; i += stride) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}
function arrayRange(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var stride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var minValue = Infinity;
  var maxValue = -Infinity;
  for (var i = offset, len = arr.length; i < len; i += stride) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return [minValue, maxValue];
}
var ceilLog2 = notImplemented('ceilLog2');
var factorial = notImplemented('factorial');
function nearestPowerOfTwo(xi) {
  var v = 1;
  while (v < xi) {
    v *= 2;
  }
  return v;
}
function isPowerOfTwo(x) {
  return x === nearestPowerOfTwo(x);
}
function binomial(m, n) {
  var r = 1;
  for (var i = 1; i <= n; ++i) {
    r *= (m - i + 1) / i;
  }
  return Math.floor(r);
}
function beginCombination(m, n) {
  if (m < n) {
    return 0;
  }
  var r = createArray(n);
  for (var i = 0; i < n; ++i) {
    r[i] = i;
  }
  return r;
}
function nextCombination(m, n, r) {
  var status = 0;
  for (var i = n - 1; i >= 0; --i) {
    if (r[i] < m - n + i) {
      var j = r[i] + 1;
      while (i < n) {
        r[i++] = j++;
      }
      status = 1;
      break;
    }
  }
  return status;
}
function randomSeed(seed) {
  seedrandom__WEBPACK_IMPORTED_MODULE_2___default()("".concat(seed), {
    global: true
  });
  randomSeedValue = seed;
}
function getSeed() {
  return randomSeedValue;
}
function random() {
  var minValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var maxValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var delta = maxValue - minValue;
  return minValue + delta * Math.random();
}
var gaussian = notImplemented('gaussian'); // Vect3 operations

function add(a, b, out) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract(a, b, out) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function multiplyScalar(vec, scalar) {
  vec[0] *= scalar;
  vec[1] *= scalar;
  vec[2] *= scalar;
  return vec;
}
function multiplyScalar2D(vec, scalar) {
  vec[0] *= scalar;
  vec[1] *= scalar;
  return vec;
}
function multiplyAccumulate(a, b, scalar, out) {
  out[0] = a[0] + b[0] * scalar;
  out[1] = a[1] + b[1] * scalar;
  out[2] = a[2] + b[2] * scalar;
  return out;
}
function multiplyAccumulate2D(a, b, scalar, out) {
  out[0] = a[0] + b[0] * scalar;
  out[1] = a[1] + b[1] * scalar;
  return out;
}
function dot(x, y) {
  return x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
}
function outer(x, y, out_3x3) {
  out_3x3[0] = x[0] * y[0];
  out_3x3[1] = x[0] * y[1];
  out_3x3[2] = x[0] * y[2];
  out_3x3[3] = x[1] * y[0];
  out_3x3[4] = x[1] * y[1];
  out_3x3[5] = x[1] * y[2];
  out_3x3[6] = x[2] * y[0];
  out_3x3[7] = x[2] * y[1];
  out_3x3[8] = x[2] * y[2];
}
function cross(x, y, out) {
  var Zx = x[1] * y[2] - x[2] * y[1];
  var Zy = x[2] * y[0] - x[0] * y[2];
  var Zz = x[0] * y[1] - x[1] * y[0];
  out[0] = Zx;
  out[1] = Zy;
  out[2] = Zz;
  return out;
}
function norm(x) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  switch (n) {
    case 1:
      return Math.abs(x);
    case 2:
      return Math.sqrt(x[0] * x[0] + x[1] * x[1]);
    case 3:
      return Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);
    default:
      {
        var sum = 0;
        for (var i = 0; i < n; i++) {
          sum += x[i] * x[i];
        }
        return Math.sqrt(sum);
      }
  }
}
function normalize(x) {
  var den = norm(x);
  if (den !== 0.0) {
    x[0] /= den;
    x[1] /= den;
    x[2] /= den;
  }
  return den;
}
function perpendiculars(x, y, z, theta) {
  var x2 = x[0] * x[0];
  var y2 = x[1] * x[1];
  var z2 = x[2] * x[2];
  var r = Math.sqrt(x2 + y2 + z2);
  var dx;
  var dy;
  var dz; // transpose the vector to avoid divide-by-zero error

  if (x2 > y2 && x2 > z2) {
    dx = 0;
    dy = 1;
    dz = 2;
  } else if (y2 > z2) {
    dx = 1;
    dy = 2;
    dz = 0;
  } else {
    dx = 2;
    dy = 0;
    dz = 1;
  }
  var a = x[dx] / r;
  var b = x[dy] / r;
  var c = x[dz] / r;
  var tmp = Math.sqrt(a * a + c * c);
  if (theta !== 0) {
    var sintheta = Math.sin(theta);
    var costheta = Math.cos(theta);
    if (y) {
      y[dx] = (c * costheta - a * b * sintheta) / tmp;
      y[dy] = sintheta * tmp;
      y[dz] = (-(a * costheta) - b * c * sintheta) / tmp;
    }
    if (z) {
      z[dx] = (-(c * sintheta) - a * b * costheta) / tmp;
      z[dy] = costheta * tmp;
      z[dz] = (a * sintheta - b * c * costheta) / tmp;
    }
  } else {
    if (y) {
      y[dx] = c / tmp;
      y[dy] = 0;
      y[dz] = -a / tmp;
    }
    if (z) {
      z[dx] = -a * b / tmp;
      z[dy] = tmp;
      z[dz] = -b * c / tmp;
    }
  }
}
function projectVector(a, b, projection) {
  var bSquared = dot(b, b);
  if (bSquared === 0) {
    projection[0] = 0;
    projection[1] = 0;
    projection[2] = 0;
    return false;
  }
  var scale = dot(a, b) / bSquared;
  for (var i = 0; i < 3; i++) {
    projection[i] = b[i];
  }
  multiplyScalar(projection, scale);
  return true;
}
function dot2D(x, y) {
  return x[0] * y[0] + x[1] * y[1];
}
function projectVector2D(a, b, projection) {
  var bSquared = dot2D(b, b);
  if (bSquared === 0) {
    projection[0] = 0;
    projection[1] = 0;
    return false;
  }
  var scale = dot2D(a, b) / bSquared;
  for (var i = 0; i < 2; i++) {
    projection[i] = b[i];
  }
  multiplyScalar2D(projection, scale);
  return true;
}
function distance2BetweenPoints(x, y) {
  return (x[0] - y[0]) * (x[0] - y[0]) + (x[1] - y[1]) * (x[1] - y[1]) + (x[2] - y[2]) * (x[2] - y[2]);
}
function angleBetweenVectors(v1, v2) {
  var crossVect = [0, 0, 0];
  cross(v1, v2, crossVect);
  return Math.atan2(norm(crossVect), dot(v1, v2));
}
function signedAngleBetweenVectors(v1, v2, vN) {
  var crossVect = [0, 0, 0];
  cross(v1, v2, crossVect);
  var angle = Math.atan2(norm(crossVect), dot(v1, v2));
  return dot(crossVect, vN) >= 0 ? angle : -angle;
}
function gaussianAmplitude(mean, variance, position) {
  var distanceFromMean = Math.abs(mean - position);
  return 1 / Math.sqrt(2 * Math.PI * variance) * Math.exp(-Math.pow(distanceFromMean, 2) / (2 * variance));
}
function gaussianWeight(mean, variance, position) {
  var distanceFromMean = Math.abs(mean - position);
  return Math.exp(-Math.pow(distanceFromMean, 2) / (2 * variance));
}
function outer2D(x, y, out_2x2) {
  out_2x2[0] = x[0] * y[0];
  out_2x2[1] = x[0] * y[1];
  out_2x2[2] = x[1] * y[0];
  out_2x2[3] = x[1] * y[1];
}
function norm2D(x2D) {
  return Math.sqrt(x2D[0] * x2D[0] + x2D[1] * x2D[1]);
}
function normalize2D(x) {
  var den = norm2D(x);
  if (den !== 0.0) {
    x[0] /= den;
    x[1] /= den;
  }
  return den;
}
function rowsToMat4(row0, row1, row2, row3, mat) {
  for (var i = 0; i < 4; i++) {
    mat[i] = row0[i];
    mat[4 + i] = row1[i];
    mat[8 + i] = row2[i];
    mat[12 + i] = row3[i];
  }
  return mat;
}
function columnsToMat4(column0, column1, column2, column3, mat) {
  for (var i = 0; i < 4; i++) {
    mat[4 * i] = column0[i];
    mat[4 * i + 1] = column1[i];
    mat[4 * i + 2] = column2[i];
    mat[4 * i + 3] = column3[i];
  }
  return mat;
}
function rowsToMat3(row0, row1, row2, mat) {
  for (var i = 0; i < 3; i++) {
    mat[i] = row0[i];
    mat[3 + i] = row1[i];
    mat[6 + i] = row2[i];
  }
  return mat;
}
function columnsToMat3(column0, column1, column2, mat) {
  for (var i = 0; i < 3; i++) {
    mat[3 * i] = column0[i];
    mat[3 * i + 1] = column1[i];
    mat[3 * i + 2] = column2[i];
  }
  return mat;
}
function determinant2x2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if (args.length === 2) {
    return args[0][0] * args[1][1] - args[1][0] * args[0][1];
  }
  if (args.length === 4) {
    return args[0] * args[3] - args[1] * args[2];
  }
  return Number.NaN;
}
function LUFactor3x3(mat_3x3, index_3) {
  var maxI;
  var tmp;
  var largest;
  var scale = [0, 0, 0]; // Loop over rows to get implicit scaling information

  for (var i = 0; i < 3; i++) {
    largest = Math.abs(mat_3x3[i * 3]);
    if ((tmp = Math.abs(mat_3x3[i * 3 + 1])) > largest) {
      largest = tmp;
    }
    if ((tmp = Math.abs(mat_3x3[i * 3 + 2])) > largest) {
      largest = tmp;
    }
    scale[i] = 1 / largest;
  } // Loop over all columns using Crout's method
  // first column

  largest = scale[0] * Math.abs(mat_3x3[0]);
  maxI = 0;
  if ((tmp = scale[1] * Math.abs(mat_3x3[3])) >= largest) {
    largest = tmp;
    maxI = 1;
  }
  if ((tmp = scale[2] * Math.abs(mat_3x3[6])) >= largest) {
    maxI = 2;
  }
  if (maxI !== 0) {
    swapRowsMatrix_nxn(mat_3x3, 3, maxI, 0);
    scale[maxI] = scale[0];
  }
  index_3[0] = maxI;
  mat_3x3[3] /= mat_3x3[0];
  mat_3x3[6] /= mat_3x3[0]; // second column

  mat_3x3[4] -= mat_3x3[3] * mat_3x3[1];
  mat_3x3[7] -= mat_3x3[6] * mat_3x3[1];
  largest = scale[1] * Math.abs(mat_3x3[4]);
  maxI = 1;
  if ((tmp = scale[2] * Math.abs(mat_3x3[7])) >= largest) {
    maxI = 2;
    swapRowsMatrix_nxn(mat_3x3, 3, 1, 2);
    scale[2] = scale[1];
  }
  index_3[1] = maxI;
  mat_3x3[7] /= mat_3x3[4]; // third column

  mat_3x3[5] -= mat_3x3[3] * mat_3x3[2];
  mat_3x3[8] -= mat_3x3[6] * mat_3x3[2] + mat_3x3[7] * mat_3x3[5];
  index_3[2] = 2;
}
function LUSolve3x3(mat_3x3, index_3, x_3) {
  // forward substitution
  var sum = x_3[index_3[0]];
  x_3[index_3[0]] = x_3[0];
  x_3[0] = sum;
  sum = x_3[index_3[1]];
  x_3[index_3[1]] = x_3[1];
  x_3[1] = sum - mat_3x3[3] * x_3[0];
  sum = x_3[index_3[2]];
  x_3[index_3[2]] = x_3[2];
  x_3[2] = sum - mat_3x3[6] * x_3[0] - mat_3x3[7] * x_3[1]; // back substitution

  x_3[2] /= mat_3x3[8];
  x_3[1] = (x_3[1] - mat_3x3[5] * x_3[2]) / mat_3x3[4];
  x_3[0] = (x_3[0] - mat_3x3[1] * x_3[1] - mat_3x3[2] * x_3[2]) / mat_3x3[0];
}
function linearSolve3x3(mat_3x3, x_3, y_3) {
  var a1 = mat_3x3[0];
  var b1 = mat_3x3[1];
  var c1 = mat_3x3[2];
  var a2 = mat_3x3[3];
  var b2 = mat_3x3[4];
  var c2 = mat_3x3[5];
  var a3 = mat_3x3[6];
  var b3 = mat_3x3[7];
  var c3 = mat_3x3[8]; // Compute the adjoint

  var d1 = +determinant2x2(b2, b3, c2, c3);
  var d2 = -determinant2x2(a2, a3, c2, c3);
  var d3 = +determinant2x2(a2, a3, b2, b3);
  var e1 = -determinant2x2(b1, b3, c1, c3);
  var e2 = +determinant2x2(a1, a3, c1, c3);
  var e3 = -determinant2x2(a1, a3, b1, b3);
  var f1 = +determinant2x2(b1, b2, c1, c2);
  var f2 = -determinant2x2(a1, a2, c1, c2);
  var f3 = +determinant2x2(a1, a2, b1, b2); // Compute the determinant

  var det = a1 * d1 + b1 * d2 + c1 * d3; // Multiply by the adjoint

  var v1 = d1 * x_3[0] + e1 * x_3[1] + f1 * x_3[2];
  var v2 = d2 * x_3[0] + e2 * x_3[1] + f2 * x_3[2];
  var v3 = d3 * x_3[0] + e3 * x_3[1] + f3 * x_3[2]; // Divide by the determinant

  y_3[0] = v1 / det;
  y_3[1] = v2 / det;
  y_3[2] = v3 / det;
}
function multiply3x3_vect3(mat_3x3, in_3, out_3) {
  var x = mat_3x3[0] * in_3[0] + mat_3x3[1] * in_3[1] + mat_3x3[2] * in_3[2];
  var y = mat_3x3[3] * in_3[0] + mat_3x3[4] * in_3[1] + mat_3x3[5] * in_3[2];
  var z = mat_3x3[6] * in_3[0] + mat_3x3[7] * in_3[1] + mat_3x3[8] * in_3[2];
  out_3[0] = x;
  out_3[1] = y;
  out_3[2] = z;
}
function multiply3x3_mat3(a_3x3, b_3x3, out_3x3) {
  var copyA = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(a_3x3);
  var copyB = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(b_3x3);
  for (var i = 0; i < 3; i++) {
    out_3x3[i] = copyA[0] * copyB[i] + copyA[1] * copyB[i + 3] + copyA[2] * copyB[i + 6];
    out_3x3[i + 3] = copyA[3] * copyB[i] + copyA[4] * copyB[i + 3] + copyA[5] * copyB[i + 6];
    out_3x3[i + 6] = copyA[6] * copyB[i] + copyA[7] * copyB[i + 3] + copyA[8] * copyB[i + 6];
  }
}
function multiplyMatrix(a, b, rowA, colA, rowB, colB, out_rowXcol) {
  // we need colA == rowB
  if (colA !== rowB) {
    vtkErrorMacro('Number of columns of A must match number of rows of B.');
  } // If a or b is used to store the result, copying them is required

  var copyA = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(a);
  var copyB = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(b); // output matrix is rowA*colB
  // output row

  for (var i = 0; i < rowA; i++) {
    // output col
    for (var j = 0; j < colB; j++) {
      out_rowXcol[i * colB + j] = 0; // sum for this point

      for (var k = 0; k < colA; k++) {
        out_rowXcol[i * colB + j] += copyA[i * colA + k] * copyB[j + colB * k];
      }
    }
  }
}
function transpose3x3(in_3x3, outT_3x3) {
  var tmp; // off-diagonal elements

  tmp = in_3x3[3];
  outT_3x3[3] = in_3x3[1];
  outT_3x3[1] = tmp;
  tmp = in_3x3[6];
  outT_3x3[6] = in_3x3[2];
  outT_3x3[2] = tmp;
  tmp = in_3x3[7];
  outT_3x3[7] = in_3x3[5];
  outT_3x3[5] = tmp; // on-diagonal elements

  outT_3x3[0] = in_3x3[0];
  outT_3x3[4] = in_3x3[4];
  outT_3x3[8] = in_3x3[8];
}
function invert3x3(in_3x3, outI_3x3) {
  var a1 = in_3x3[0];
  var b1 = in_3x3[1];
  var c1 = in_3x3[2];
  var a2 = in_3x3[3];
  var b2 = in_3x3[4];
  var c2 = in_3x3[5];
  var a3 = in_3x3[6];
  var b3 = in_3x3[7];
  var c3 = in_3x3[8]; // Compute the adjoint

  var d1 = +determinant2x2(b2, b3, c2, c3);
  var d2 = -determinant2x2(a2, a3, c2, c3);
  var d3 = +determinant2x2(a2, a3, b2, b3);
  var e1 = -determinant2x2(b1, b3, c1, c3);
  var e2 = +determinant2x2(a1, a3, c1, c3);
  var e3 = -determinant2x2(a1, a3, b1, b3);
  var f1 = +determinant2x2(b1, b2, c1, c2);
  var f2 = -determinant2x2(a1, a2, c1, c2);
  var f3 = +determinant2x2(a1, a2, b1, b2); // Divide by the determinant

  var det = a1 * d1 + b1 * d2 + c1 * d3;
  if (det === 0) {
    vtkWarningMacro('Matrix has 0 determinant');
  }
  outI_3x3[0] = d1 / det;
  outI_3x3[3] = d2 / det;
  outI_3x3[6] = d3 / det;
  outI_3x3[1] = e1 / det;
  outI_3x3[4] = e2 / det;
  outI_3x3[7] = e3 / det;
  outI_3x3[2] = f1 / det;
  outI_3x3[5] = f2 / det;
  outI_3x3[8] = f3 / det;
}
function determinant3x3(mat_3x3) {
  return mat_3x3[0] * mat_3x3[4] * mat_3x3[8] + mat_3x3[3] * mat_3x3[7] * mat_3x3[2] + mat_3x3[6] * mat_3x3[1] * mat_3x3[5] - mat_3x3[0] * mat_3x3[7] * mat_3x3[5] - mat_3x3[3] * mat_3x3[1] * mat_3x3[8] - mat_3x3[6] * mat_3x3[4] * mat_3x3[2];
}
/**
 * Returns true if elements of both arrays are equals.
 * @param {Array} a an array of numbers (vector, point, matrix...)
 * @param {Array} b an array of numbers (vector, point, matrix...)
 * @param {Number} eps tolerance
 */

function areEquals(a, b) {
  var eps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Constants_js__WEBPACK_IMPORTED_MODULE_4__["EPSILON"];
  if (a.length !== b.length) {
    return false;
  }
  function isEqual(element, index) {
    return Math.abs(element - b[index]) <= eps;
  }
  return a.every(isEqual);
}
var areMatricesEqual = areEquals;
function identity3x3(mat_3x3) {
  for (var i = 0; i < 3; i++) {
    /* eslint-disable-next-line no-multi-assign */
    mat_3x3[i * 3] = mat_3x3[i * 3 + 1] = mat_3x3[i * 3 + 2] = 0;
    mat_3x3[i * 3 + i] = 1;
  }
}
function identity(n, mat) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      mat[i * n + j] = 0;
    }
    mat[i * n + i] = 1;
  }
  return mat;
}
function isIdentity(mat) {
  var eps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Constants_js__WEBPACK_IMPORTED_MODULE_4__["EPSILON"];
  return areMatricesEqual(mat, _Constants_js__WEBPACK_IMPORTED_MODULE_4__["IDENTITY"], eps);
}
function isIdentity3x3(mat) {
  var eps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Constants_js__WEBPACK_IMPORTED_MODULE_4__["EPSILON"];
  return areMatricesEqual(mat, _Constants_js__WEBPACK_IMPORTED_MODULE_4__["IDENTITY_3X3"], eps);
}
function quaternionToMatrix3x3(quat_4, mat_3x3) {
  var ww = quat_4[0] * quat_4[0];
  var wx = quat_4[0] * quat_4[1];
  var wy = quat_4[0] * quat_4[2];
  var wz = quat_4[0] * quat_4[3];
  var xx = quat_4[1] * quat_4[1];
  var yy = quat_4[2] * quat_4[2];
  var zz = quat_4[3] * quat_4[3];
  var xy = quat_4[1] * quat_4[2];
  var xz = quat_4[1] * quat_4[3];
  var yz = quat_4[2] * quat_4[3];
  var rr = xx + yy + zz; // normalization factor, just in case quaternion was not normalized

  var f = 1 / (ww + rr);
  var s = (ww - rr) * f;
  f *= 2;
  mat_3x3[0] = xx * f + s;
  mat_3x3[3] = (xy + wz) * f;
  mat_3x3[6] = (xz - wy) * f;
  mat_3x3[1] = (xy - wz) * f;
  mat_3x3[4] = yy * f + s;
  mat_3x3[7] = (yz + wx) * f;
  mat_3x3[2] = (xz + wy) * f;
  mat_3x3[5] = (yz - wx) * f;
  mat_3x3[8] = zz * f + s;
}
function roundNumber(num) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!"".concat(num).includes('e')) {
    return +"".concat(Math.round("".concat(num, "e+").concat(digits)), "e-").concat(digits);
  }
  var arr = "".concat(num).split('e');
  var sig = '';
  if (+arr[1] + digits > 0) {
    sig = '+';
  }
  return +"".concat(Math.round("".concat(+arr[0], "e").concat(sig).concat(+arr[1] + digits)), "e-").concat(digits);
}
function roundVector(vector) {
  var out = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
  var digits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  out[0] = roundNumber(vector[0], digits);
  out[1] = roundNumber(vector[1], digits);
  out[2] = roundNumber(vector[2], digits);
  return out;
}
function jacobiN(a, n, w, v) {
  var i;
  var j;
  var k;
  var iq;
  var ip;
  var numPos;
  var tresh;
  var theta;
  var t;
  var tau;
  var sm;
  var s;
  var h;
  var g;
  var c;
  var tmp;
  var b = createArray(n);
  var z = createArray(n);
  var vtkROTATE = function vtkROTATE(aa, ii, jj) {
    g = aa[ii];
    h = aa[jj];
    aa[ii] = g - s * (h + g * tau);
    aa[jj] = h + s * (g - h * tau);
  }; // initialize

  identity(n, v);
  for (ip = 0; ip < n; ip++) {
    b[ip] = w[ip] = a[ip + ip * n];
    z[ip] = 0.0;
  } // begin rotation sequence

  for (i = 0; i < VTK_MAX_ROTATIONS; i++) {
    sm = 0.0;
    for (ip = 0; ip < n - 1; ip++) {
      for (iq = ip + 1; iq < n; iq++) {
        sm += Math.abs(a[ip * n + iq]);
      }
    }
    if (sm === 0.0) {
      break;
    } // first 3 sweeps

    if (i < 3) {
      tresh = 0.2 * sm / (n * n);
    } else {
      tresh = 0.0;
    }
    for (ip = 0; ip < n - 1; ip++) {
      for (iq = ip + 1; iq < n; iq++) {
        g = 100.0 * Math.abs(a[ip * n + iq]); // after 4 sweeps

        if (i > 3 && Math.abs(w[ip]) + g === Math.abs(w[ip]) && Math.abs(w[iq]) + g === Math.abs(w[iq])) {
          a[ip * n + iq] = 0.0;
        } else if (Math.abs(a[ip * n + iq]) > tresh) {
          h = w[iq] - w[ip];
          if (Math.abs(h) + g === Math.abs(h)) {
            t = a[ip * n + iq] / h;
          } else {
            theta = 0.5 * h / a[ip * n + iq];
            t = 1.0 / (Math.abs(theta) + Math.sqrt(1.0 + theta * theta));
            if (theta < 0.0) {
              t = -t;
            }
          }
          c = 1.0 / Math.sqrt(1 + t * t);
          s = t * c;
          tau = s / (1.0 + c);
          h = t * a[ip * n + iq];
          z[ip] -= h;
          z[iq] += h;
          w[ip] -= h;
          w[iq] += h;
          a[ip * n + iq] = 0.0; // ip already shifted left by 1 unit

          for (j = 0; j <= ip - 1; j++) {
            vtkROTATE(a, j * n + ip, j * n + iq);
          } // ip and iq already shifted left by 1 unit

          for (j = ip + 1; j <= iq - 1; j++) {
            vtkROTATE(a, ip * n + j, j * n + iq);
          } // iq already shifted left by 1 unit

          for (j = iq + 1; j < n; j++) {
            vtkROTATE(a, ip * n + j, iq * n + j);
          }
          for (j = 0; j < n; j++) {
            vtkROTATE(v, j * n + ip, j * n + iq);
          }
        }
      }
    }
    for (ip = 0; ip < n; ip++) {
      b[ip] += z[ip];
      w[ip] = b[ip];
      z[ip] = 0.0;
    }
  } // this is NEVER called

  if (i >= VTK_MAX_ROTATIONS) {
    vtkWarningMacro('vtkMath::Jacobi: Error extracting eigenfunctions');
    return 0;
  } // sort eigenfunctions: these changes do not affect accuracy

  for (j = 0; j < n - 1; j++) {
    // boundary incorrect
    k = j;
    tmp = w[k];
    for (i = j + 1; i < n; i++) {
      // boundary incorrect, shifted already
      if (w[i] >= tmp || Math.abs(w[i] - tmp) < _Constants_js__WEBPACK_IMPORTED_MODULE_4__["VTK_SMALL_NUMBER"]) {
        // why exchange if same?
        k = i;
        tmp = w[k];
      }
    }
    if (k !== j) {
      w[k] = w[j];
      w[j] = tmp;
      swapColumnsMatrix_nxn(v, n, j, k);
    }
  } // ensure eigenvector consistency (i.e., Jacobi can compute vectors that
  // are negative of one another (.707,.707,0) and (-.707,-.707,0). This can
  // reek havoc in hyperstreamline/other stuff. We will select the most
  // positive eigenvector.

  var ceil_half_n = (n >> 1) + (n & 1);
  for (numPos = 0, i = 0; i < n * n; i++) {
    if (v[i] >= 0.0) {
      numPos++;
    }
  } //    if ( numPos < ceil(double(n)/double(2.0)) )

  if (numPos < ceil_half_n) {
    for (i = 0; i < n; i++) {
      v[i * n + j] *= -1.0;
    }
  }
  return 1;
}
function matrix3x3ToQuaternion(mat_3x3, quat_4) {
  var tmp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // on-diagonal elements

  tmp[0] = mat_3x3[0] + mat_3x3[4] + mat_3x3[8];
  tmp[5] = mat_3x3[0] - mat_3x3[4] - mat_3x3[8];
  tmp[10] = -mat_3x3[0] + mat_3x3[4] - mat_3x3[8];
  tmp[15] = -mat_3x3[0] - mat_3x3[4] + mat_3x3[8]; // off-diagonal elements

  tmp[1] = tmp[4] = mat_3x3[7] - mat_3x3[5];
  tmp[2] = tmp[8] = mat_3x3[2] - mat_3x3[6];
  tmp[3] = tmp[12] = mat_3x3[3] - mat_3x3[1];
  tmp[6] = tmp[9] = mat_3x3[3] + mat_3x3[1];
  tmp[7] = tmp[13] = mat_3x3[2] + mat_3x3[6];
  tmp[11] = tmp[14] = mat_3x3[7] + mat_3x3[5];
  var eigenvectors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var eigenvalues = [0, 0, 0, 0]; // convert into format that JacobiN can use,
  // then use Jacobi to find eigenvalues and eigenvectors
  // tmp is copied because jacobiN may modify it

  var NTemp = [].concat(tmp);
  jacobiN(NTemp, 4, eigenvalues, eigenvectors); // the first eigenvector is the one we want

  quat_4[0] = eigenvectors[0];
  quat_4[1] = eigenvectors[4];
  quat_4[2] = eigenvectors[8];
  quat_4[3] = eigenvectors[12];
}
function multiplyQuaternion(quat_1, quat_2, quat_out) {
  var ww = quat_1[0] * quat_2[0];
  var wx = quat_1[0] * quat_2[1];
  var wy = quat_1[0] * quat_2[2];
  var wz = quat_1[0] * quat_2[3];
  var xw = quat_1[1] * quat_2[0];
  var xx = quat_1[1] * quat_2[1];
  var xy = quat_1[1] * quat_2[2];
  var xz = quat_1[1] * quat_2[3];
  var yw = quat_1[2] * quat_2[0];
  var yx = quat_1[2] * quat_2[1];
  var yy = quat_1[2] * quat_2[2];
  var yz = quat_1[2] * quat_2[3];
  var zw = quat_1[3] * quat_2[0];
  var zx = quat_1[3] * quat_2[1];
  var zy = quat_1[3] * quat_2[2];
  var zz = quat_1[3] * quat_2[3];
  quat_out[0] = ww - xx - yy - zz;
  quat_out[1] = wx + xw + yz - zy;
  quat_out[2] = wy - xz + yw + zx;
  quat_out[3] = wz + xy - yx + zw;
}
function orthogonalize3x3(a_3x3, out_3x3) {
  // copy the matrix
  for (var i = 0; i < 9; i++) {
    out_3x3[i] = a_3x3[i];
  } // Pivot the matrix to improve accuracy

  var scale = createArray(3);
  var index = createArray(3);
  var largest; // Loop over rows to get implicit scaling information

  for (var _i = 0; _i < 3; _i++) {
    var _x = Math.abs(out_3x3[_i * 3]);
    var _x2 = Math.abs(out_3x3[_i * 3 + 1]);
    var _x3 = Math.abs(out_3x3[_i * 3 + 2]);
    largest = _x2 > _x ? _x2 : _x;
    largest = _x3 > largest ? _x3 : largest;
    scale[_i] = 1;
    if (largest !== 0) {
      scale[_i] /= largest;
    }
  } // first column

  var x1 = Math.abs(out_3x3[0]) * scale[0];
  var x2 = Math.abs(out_3x3[3]) * scale[1];
  var x3 = Math.abs(out_3x3[6]) * scale[2];
  index[0] = 0;
  largest = x1;
  if (x2 >= largest) {
    largest = x2;
    index[0] = 1;
  }
  if (x3 >= largest) {
    index[0] = 2;
  }
  if (index[0] !== 0) {
    // swap vectors
    swapColumnsMatrix_nxn(out_3x3, 3, index[0], 0);
    scale[index[0]] = scale[0];
  } // second column

  var y2 = Math.abs(out_3x3[4]) * scale[1];
  var y3 = Math.abs(out_3x3[7]) * scale[2];
  index[1] = 1;
  largest = y2;
  if (y3 >= largest) {
    index[1] = 2; // swap vectors

    swapColumnsMatrix_nxn(out_3x3, 3, 1, 2);
  } // third column

  index[2] = 2; // A quaternion can only describe a pure rotation, not
  // a rotation with a flip, therefore the flip must be
  // removed before the matrix is converted to a quaternion.

  var flip = 0;
  if (determinant3x3(out_3x3) < 0) {
    flip = 1;
    for (var _i2 = 0; _i2 < 9; _i2++) {
      out_3x3[_i2] = -out_3x3[_i2];
    }
  } // Do orthogonalization using a quaternion intermediate
  // (this, essentially, does the orthogonalization via
  // diagonalization of an appropriately constructed symmetric
  // 4x4 matrix rather than by doing SVD of the 3x3 matrix)

  var quat = createArray(4);
  matrix3x3ToQuaternion(out_3x3, quat);
  quaternionToMatrix3x3(quat, out_3x3); // Put the flip back into the orthogonalized matrix.

  if (flip) {
    for (var _i3 = 0; _i3 < 9; _i3++) {
      out_3x3[_i3] = -out_3x3[_i3];
    }
  } // Undo the pivoting

  if (index[1] !== 1) {
    swapColumnsMatrix_nxn(out_3x3, 3, index[1], 1);
  }
  if (index[0] !== 0) {
    swapColumnsMatrix_nxn(out_3x3, 3, index[0], 0);
  }
}
function diagonalize3x3(a_3x3, w_3, v_3x3) {
  var i;
  var j;
  var k;
  var maxI;
  var tmp;
  var maxVal; // a is copied because jacobiN may modify it

  var copyA = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(a_3x3); // diagonalize using Jacobi

  jacobiN(copyA, 3, w_3, v_3x3); // if all the eigenvalues are the same, return identity matrix

  if (w_3[0] === w_3[1] && w_3[0] === w_3[2]) {
    identity3x3(v_3x3);
    return;
  } // transpose temporarily, it makes it easier to sort the eigenvectors

  transpose3x3(v_3x3, v_3x3); // if two eigenvalues are the same, re-orthogonalize to optimally line
  // up the eigenvectors with the x, y, and z axes

  for (i = 0; i < 3; i++) {
    // two eigenvalues are the same
    if (w_3[(i + 1) % 3] === w_3[(i + 2) % 3]) {
      // find maximum element of the independent eigenvector
      maxVal = Math.abs(v_3x3[i * 3]);
      maxI = 0;
      for (j = 1; j < 3; j++) {
        if (maxVal < (tmp = Math.abs(v_3x3[i * 3 + j]))) {
          maxVal = tmp;
          maxI = j;
        }
      } // swap the eigenvector into its proper position

      if (maxI !== i) {
        tmp = w_3[maxI];
        w_3[maxI] = w_3[i];
        w_3[i] = tmp;
        swapRowsMatrix_nxn(v_3x3, 3, i, maxI);
      } // maximum element of eigenvector should be positive

      if (v_3x3[maxI * 3 + maxI] < 0) {
        v_3x3[maxI * 3] = -v_3x3[maxI * 3];
        v_3x3[maxI * 3 + 1] = -v_3x3[maxI * 3 + 1];
        v_3x3[maxI * 3 + 2] = -v_3x3[maxI * 3 + 2];
      } // re-orthogonalize the other two eigenvectors

      j = (maxI + 1) % 3;
      k = (maxI + 2) % 3;
      v_3x3[j * 3] = 0.0;
      v_3x3[j * 3 + 1] = 0.0;
      v_3x3[j * 3 + 2] = 0.0;
      v_3x3[j * 3 + j] = 1.0;
      var vectTmp1 = cross([v_3x3[maxI * 3], v_3x3[maxI * 3 + 1], v_3x3[maxI * 3 + 2]], [v_3x3[j * 3], v_3x3[j * 3 + 1], v_3x3[j * 3 + 2]], []);
      normalize(vectTmp1);
      var vectTmp2 = cross(vectTmp1, [v_3x3[maxI * 3], v_3x3[maxI * 3 + 1], v_3x3[maxI * 3 + 2]], []);
      for (var t = 0; t < 3; t++) {
        v_3x3[k * 3 + t] = vectTmp1[t];
        v_3x3[j * 3 + t] = vectTmp2[t];
      } // transpose vectors back to columns

      transpose3x3(v_3x3, v_3x3);
      return;
    }
  } // the three eigenvalues are different, just sort the eigenvectors
  // to align them with the x, y, and z axes
  // find the vector with the largest x element, make that vector
  // the first vector

  maxVal = Math.abs(v_3x3[0]);
  maxI = 0;
  for (i = 1; i < 3; i++) {
    if (maxVal < (tmp = Math.abs(v_3x3[i * 3]))) {
      maxVal = tmp;
      maxI = i;
    }
  } // swap eigenvalue and eigenvector

  if (maxI !== 0) {
    var eigenValTmp = w_3[maxI];
    w_3[maxI] = w_3[0];
    w_3[0] = eigenValTmp;
    swapRowsMatrix_nxn(v_3x3, 3, maxI, 0);
  } // do the same for the y element

  if (Math.abs(v_3x3[4]) < Math.abs(v_3x3[7])) {
    var _eigenValTmp = w_3[2];
    w_3[2] = w_3[1];
    w_3[1] = _eigenValTmp;
    swapRowsMatrix_nxn(v_3x3, 3, 1, 2);
  } // ensure that the sign of the eigenvectors is correct

  for (i = 0; i < 2; i++) {
    if (v_3x3[i * 3 + i] < 0) {
      v_3x3[i * 3] = -v_3x3[i * 3];
      v_3x3[i * 3 + 1] = -v_3x3[i * 3 + 1];
      v_3x3[i * 3 + 2] = -v_3x3[i * 3 + 2];
    }
  } // set sign of final eigenvector to ensure that determinant is positive

  if (determinant3x3(v_3x3) < 0) {
    v_3x3[6] = -v_3x3[6];
    v_3x3[7] = -v_3x3[7];
    v_3x3[8] = -v_3x3[8];
  } // transpose the eigenvectors back again

  transpose3x3(v_3x3, v_3x3);
}
function singularValueDecomposition3x3(a_3x3, u_3x3, w_3, vT_3x3) {
  var i; // copy so that A can be used for U or VT without risk

  var B = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(a_3x3); // temporarily flip if determinant is negative

  var d = determinant3x3(B);
  if (d < 0) {
    for (i = 0; i < 9; i++) {
      B[i] = -B[i];
    }
  } // orthogonalize, diagonalize, etc.

  orthogonalize3x3(B, u_3x3);
  transpose3x3(B, B);
  multiply3x3_mat3(B, u_3x3, vT_3x3);
  diagonalize3x3(vT_3x3, w_3, vT_3x3);
  multiply3x3_mat3(u_3x3, vT_3x3, u_3x3);
  transpose3x3(vT_3x3, vT_3x3); // re-create the flip

  if (d < 0) {
    w_3[0] = -w_3[0];
    w_3[1] = -w_3[1];
    w_3[2] = -w_3[2];
  }
}
/**
 * Factor linear equations Ax = b using LU decomposition A = LU. Output factorization LU is in matrix A.
 * @param {Matrix} A square matrix
 * @param {Number} index integer array of pivot indices index[0->n-1]
 * @param {Number} size matrix size
 */

function luFactorLinearSystem(A, index, size) {
  var i;
  var j;
  var k;
  var largest;
  var maxI = 0;
  var sum;
  var temp1;
  var temp2;
  var scale = createArray(size); //
  // Loop over rows to get implicit scaling information
  //

  for (i = 0; i < size; i++) {
    for (largest = 0.0, j = 0; j < size; j++) {
      if ((temp2 = Math.abs(A[i * size + j])) > largest) {
        largest = temp2;
      }
    }
    if (largest === 0.0) {
      vtkWarningMacro('Unable to factor linear system');
      return 0;
    }
    scale[i] = 1.0 / largest;
  } //
  // Loop over all columns using Crout's method
  //

  for (j = 0; j < size; j++) {
    for (i = 0; i < j; i++) {
      sum = A[i * size + j];
      for (k = 0; k < i; k++) {
        sum -= A[i * size + k] * A[k * size + j];
      }
      A[i * size + j] = sum;
    } //
    // Begin search for largest pivot element
    //

    for (largest = 0.0, i = j; i < size; i++) {
      sum = A[i * size + j];
      for (k = 0; k < j; k++) {
        sum -= A[i * size + k] * A[k * size + j];
      }
      A[i * size + j] = sum;
      if ((temp1 = scale[i] * Math.abs(sum)) >= largest) {
        largest = temp1;
        maxI = i;
      }
    } //
    // Check for row interchange
    //

    if (j !== maxI) {
      for (k = 0; k < size; k++) {
        temp1 = A[maxI * size + k];
        A[maxI * size + k] = A[j * size + k];
        A[j * size + k] = temp1;
      }
      scale[maxI] = scale[j];
    } //
    // Divide by pivot element and perform elimination
    //

    index[j] = maxI;
    if (Math.abs(A[j * size + j]) <= _Constants_js__WEBPACK_IMPORTED_MODULE_4__["VTK_SMALL_NUMBER"]) {
      vtkWarningMacro('Unable to factor linear system');
      return 0;
    }
    if (j !== size - 1) {
      temp1 = 1.0 / A[j * size + j];
      for (i = j + 1; i < size; i++) {
        A[i * size + j] *= temp1;
      }
    }
  }
  return 1;
}
function luSolveLinearSystem(A, index, x, size) {
  var i;
  var j;
  var ii;
  var idx;
  var sum; //
  // Proceed with forward and backsubstitution for L and U
  // matrices.  First, forward substitution.
  //

  for (ii = -1, i = 0; i < size; i++) {
    idx = index[i];
    sum = x[idx];
    x[idx] = x[i];
    if (ii >= 0) {
      for (j = ii; j <= i - 1; j++) {
        sum -= A[i * size + j] * x[j];
      }
    } else if (sum !== 0.0) {
      ii = i;
    }
    x[i] = sum;
  } //
  // Now, back substitution
  //

  for (i = size - 1; i >= 0; i--) {
    sum = x[i];
    for (j = i + 1; j < size; j++) {
      sum -= A[i * size + j] * x[j];
    }
    x[i] = sum / A[i * size + i];
  }
}
function solveLinearSystem(A, x, size) {
  // if we solving something simple, just solve it
  if (size === 2) {
    var y = createArray(2);
    var det = determinant2x2(A[0], A[1], A[2], A[3]);
    if (det === 0.0) {
      // Unable to solve linear system
      return 0;
    }
    y[0] = (A[3] * x[0] - A[1] * x[1]) / det;
    y[1] = (-(A[2] * x[0]) + A[0] * x[1]) / det;
    x[0] = y[0];
    x[1] = y[1];
    return 1;
  }
  if (size === 1) {
    if (A[0] === 0.0) {
      // Unable to solve linear system
      return 0;
    }
    x[0] /= A[0];
    return 1;
  } //
  // System of equations is not trivial, use Crout's method
  //
  // Check on allocation of working vectors

  var index = createArray(size); // Factor and solve matrix

  if (luFactorLinearSystem(A, index, size) === 0) {
    return 0;
  }
  luSolveLinearSystem(A, index, x, size);
  return 1;
} // Note that A is modified during the inversion !

function invertMatrix(A, AI, size) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var column = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var tmp1Size = index || createArray(size);
  var tmp2Size = column || createArray(size); // Factor matrix; then begin solving for inverse one column at a time.
  // Note: tmp1Size returned value is used later, tmp2Size is just working
  // memory whose values are not used in LUSolveLinearSystem

  if (luFactorLinearSystem(A, tmp1Size, size) === 0) {
    return null;
  }
  for (var j = 0; j < size; j++) {
    for (var i = 0; i < size; i++) {
      tmp2Size[i] = 0.0;
    }
    tmp2Size[j] = 1.0;
    luSolveLinearSystem(A, tmp1Size, tmp2Size, size);
    for (var _i4 = 0; _i4 < size; _i4++) {
      AI[_i4 * size + j] = tmp2Size[_i4];
    }
  }
  return AI;
}
function estimateMatrixCondition(A, size) {
  var minValue = +Number.MAX_VALUE;
  var maxValue = -Number.MAX_VALUE; // find the maximum value

  for (var i = 0; i < size; i++) {
    for (var j = i; j < size; j++) {
      if (Math.abs(A[i * size + j]) > maxValue) {
        maxValue = Math.abs(A[i * size + j]);
      }
    }
  } // find the minimum diagonal value

  for (var _i5 = 0; _i5 < size; _i5++) {
    if (Math.abs(A[_i5 * size + _i5]) < minValue) {
      minValue = Math.abs(A[_i5 * size + _i5]);
    }
  }
  if (minValue === 0.0) {
    return Number.MAX_VALUE;
  }
  return maxValue / minValue;
}
function jacobi(a_3x3, w, v) {
  return jacobiN(a_3x3, 3, w, v);
}
function solveHomogeneousLeastSquares(numberOfSamples, xt, xOrder, mt) {
  // check dimensional consistency
  if (numberOfSamples < xOrder) {
    vtkWarningMacro('Insufficient number of samples. Underdetermined.');
    return 0;
  }
  var i;
  var j;
  var k; // set up intermediate variables
  // Allocate matrix to hold X times transpose of X

  var XXt = createArray(xOrder * xOrder); // size x by x
  // Allocate the array of eigenvalues and eigenvectors

  var eigenvals = createArray(xOrder);
  var eigenvecs = createArray(xOrder * xOrder); // Calculate XXt upper half only, due to symmetry

  for (k = 0; k < numberOfSamples; k++) {
    for (i = 0; i < xOrder; i++) {
      for (j = i; j < xOrder; j++) {
        XXt[i * xOrder + j] += xt[k * xOrder + i] * xt[k * xOrder + j];
      }
    }
  } // now fill in the lower half of the XXt matrix

  for (i = 0; i < xOrder; i++) {
    for (j = 0; j < i; j++) {
      XXt[i * xOrder + j] = XXt[j * xOrder + i];
    }
  } // Compute the eigenvectors and eigenvalues

  jacobiN(XXt, xOrder, eigenvals, eigenvecs); // Smallest eigenval is at the end of the list (xOrder-1), and solution is
  // corresponding eigenvec.

  for (i = 0; i < xOrder; i++) {
    mt[i] = eigenvecs[i * xOrder + xOrder - 1];
  }
  return 1;
}
function solveLeastSquares(numberOfSamples, xt, xOrder, yt, yOrder, mt) {
  var checkHomogeneous = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

  // check dimensional consistency
  if (numberOfSamples < xOrder || numberOfSamples < yOrder) {
    vtkWarningMacro('Insufficient number of samples. Underdetermined.');
    return 0;
  }
  var homogenFlags = createArray(yOrder);
  var allHomogeneous = 1;
  var hmt;
  var homogRC = 0;
  var i;
  var j;
  var k;
  var someHomogeneous = 0; // Ok, first init some flags check and see if all the systems are homogeneous

  if (checkHomogeneous) {
    // If Y' is zero, it's a homogeneous system and can't be solved via
    // the pseudoinverse method. Detect this case, warn the user, and
    // invoke SolveHomogeneousLeastSquares instead. Note that it doesn't
    // really make much sense for yOrder to be greater than one in this case,
    // since that's just yOrder occurrences of a 0 vector on the RHS, but
    // we allow it anyway. N
    // Initialize homogeneous flags on a per-right-hand-side basis
    for (j = 0; j < yOrder; j++) {
      homogenFlags[j] = 1;
    }
    for (i = 0; i < numberOfSamples; i++) {
      for (j = 0; j < yOrder; j++) {
        if (Math.abs(yt[i * yOrder + j]) > _Constants_js__WEBPACK_IMPORTED_MODULE_4__["VTK_SMALL_NUMBER"]) {
          allHomogeneous = 0;
          homogenFlags[j] = 0;
        }
      }
    } // If we've got one system, and it's homogeneous, do it and bail out quickly.

    if (allHomogeneous && yOrder === 1) {
      vtkWarningMacro('Detected homogeneous system (Y=0), calling SolveHomogeneousLeastSquares()');
      return solveHomogeneousLeastSquares(numberOfSamples, xt, xOrder, mt);
    } // Ok, we've got more than one system of equations.
    // Figure out if we need to calculate the homogeneous equation solution for
    // any of them.

    if (allHomogeneous) {
      someHomogeneous = 1;
    } else {
      for (j = 0; j < yOrder; j++) {
        if (homogenFlags[j]) {
          someHomogeneous = 1;
        }
      }
    }
  } // If necessary, solve the homogeneous problem

  if (someHomogeneous) {
    // hmt is the homogeneous equation version of mt, the general solution.
    // hmt should be xOrder x yOrder, but since we are solving only the homogeneous part, here it is xOrder x 1
    hmt = createArray(xOrder); // Ok, solve the homogeneous problem

    homogRC = solveHomogeneousLeastSquares(numberOfSamples, xt, xOrder, hmt);
  } // set up intermediate variables

  var XXt = createArray(xOrder * xOrder); // size x by x

  var XXtI = createArray(xOrder * xOrder); // size x by x

  var XYt = createArray(xOrder * yOrder); // size x by y
  // first find the pseudoinverse matrix

  for (k = 0; k < numberOfSamples; k++) {
    for (i = 0; i < xOrder; i++) {
      // first calculate the XXt matrix, only do the upper half (symmetrical)
      for (j = i; j < xOrder; j++) {
        XXt[i * xOrder + j] += xt[k * xOrder + i] * xt[k * xOrder + j];
      } // now calculate the XYt matrix

      for (j = 0; j < yOrder; j++) {
        XYt[i * yOrder + j] += xt[k * xOrder + i] * yt[k * yOrder + j];
      }
    }
  } // now fill in the lower half of the XXt matrix

  for (i = 0; i < xOrder; i++) {
    for (j = 0; j < i; j++) {
      XXt[i * xOrder + j] = XXt[j * xOrder + i];
    }
  }
  var successFlag = invertMatrix(XXt, XXtI, xOrder); // next get the inverse of XXt

  if (successFlag) {
    for (i = 0; i < xOrder; i++) {
      for (j = 0; j < yOrder; j++) {
        mt[i * yOrder + j] = 0.0;
        for (k = 0; k < xOrder; k++) {
          mt[i * yOrder + j] += XXtI[i * xOrder + k] * XYt[k * yOrder + j];
        }
      }
    }
  } // Fix up any of the solutions that correspond to the homogeneous equation
  // problem.

  if (someHomogeneous) {
    for (j = 0; j < yOrder; j++) {
      if (homogenFlags[j]) {
        // Fix this one
        for (i = 0; i < xOrder; i++) {
          mt[i * yOrder + j] = hmt[i * yOrder];
        }
      }
    }
  }
  if (someHomogeneous) {
    return homogRC && successFlag;
  }
  return successFlag;
}
function hex2float(hexStr) {
  var outFloatArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0.5, 1];
  switch (hexStr.length) {
    case 3:
      // abc => #aabbcc
      outFloatArray[0] = parseInt(hexStr[0], 16) * 17 / 255;
      outFloatArray[1] = parseInt(hexStr[1], 16) * 17 / 255;
      outFloatArray[2] = parseInt(hexStr[2], 16) * 17 / 255;
      return outFloatArray;
    case 4:
      // #abc => #aabbcc
      outFloatArray[0] = parseInt(hexStr[1], 16) * 17 / 255;
      outFloatArray[1] = parseInt(hexStr[2], 16) * 17 / 255;
      outFloatArray[2] = parseInt(hexStr[3], 16) * 17 / 255;
      return outFloatArray;
    case 6:
      // ab01df => #ab01df
      outFloatArray[0] = parseInt(hexStr.substr(0, 2), 16) / 255;
      outFloatArray[1] = parseInt(hexStr.substr(2, 2), 16) / 255;
      outFloatArray[2] = parseInt(hexStr.substr(4, 2), 16) / 255;
      return outFloatArray;
    case 7:
      // #ab01df
      outFloatArray[0] = parseInt(hexStr.substr(1, 2), 16) / 255;
      outFloatArray[1] = parseInt(hexStr.substr(3, 2), 16) / 255;
      outFloatArray[2] = parseInt(hexStr.substr(5, 2), 16) / 255;
      return outFloatArray;
    case 9:
      // #ab01df00
      outFloatArray[0] = parseInt(hexStr.substr(1, 2), 16) / 255;
      outFloatArray[1] = parseInt(hexStr.substr(3, 2), 16) / 255;
      outFloatArray[2] = parseInt(hexStr.substr(5, 2), 16) / 255;
      outFloatArray[3] = parseInt(hexStr.substr(7, 2), 16) / 255;
      return outFloatArray;
    default:
      return outFloatArray;
  }
}
function rgb2hsv(rgb, hsv) {
  var h;
  var s;
  var _rgb = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(rgb, 3),
    r = _rgb[0],
    g = _rgb[1],
    b = _rgb[2];
  var onethird = 1.0 / 3.0;
  var onesixth = 1.0 / 6.0;
  var twothird = 2.0 / 3.0;
  var cmax = r;
  var cmin = r;
  if (g > cmax) {
    cmax = g;
  } else if (g < cmin) {
    cmin = g;
  }
  if (b > cmax) {
    cmax = b;
  } else if (b < cmin) {
    cmin = b;
  }
  var v = cmax;
  if (v > 0.0) {
    s = (cmax - cmin) / cmax;
  } else {
    s = 0.0;
  }
  if (s > 0) {
    if (r === cmax) {
      h = onesixth * (g - b) / (cmax - cmin);
    } else if (g === cmax) {
      h = onethird + onesixth * (b - r) / (cmax - cmin);
    } else {
      h = twothird + onesixth * (r - g) / (cmax - cmin);
    }
    if (h < 0.0) {
      h += 1.0;
    }
  } else {
    h = 0.0;
  } // Set the values back to the array

  hsv[0] = h;
  hsv[1] = s;
  hsv[2] = v;
}
function hsv2rgb(hsv, rgb) {
  var _hsv = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(hsv, 3),
    h = _hsv[0],
    s = _hsv[1],
    v = _hsv[2];
  var onethird = 1.0 / 3.0;
  var onesixth = 1.0 / 6.0;
  var twothird = 2.0 / 3.0;
  var fivesixth = 5.0 / 6.0;
  var r;
  var g;
  var b; // compute RGB from HSV

  if (h > onesixth && h <= onethird) {
    // green/red
    g = 1.0;
    r = (onethird - h) / onesixth;
    b = 0.0;
  } else if (h > onethird && h <= 0.5) {
    // green/blue
    g = 1.0;
    b = (h - onethird) / onesixth;
    r = 0.0;
  } else if (h > 0.5 && h <= twothird) {
    // blue/green
    b = 1.0;
    g = (twothird - h) / onesixth;
    r = 0.0;
  } else if (h > twothird && h <= fivesixth) {
    // blue/red
    b = 1.0;
    r = (h - twothird) / onesixth;
    g = 0.0;
  } else if (h > fivesixth && h <= 1.0) {
    // red/blue
    r = 1.0;
    b = (1.0 - h) / onesixth;
    g = 0.0;
  } else {
    // red/green
    r = 1.0;
    g = h / onesixth;
    b = 0.0;
  } // add Saturation to the equation.

  r = s * r + (1.0 - s);
  g = s * g + (1.0 - s);
  b = s * b + (1.0 - s);
  r *= v;
  g *= v;
  b *= v; // Assign back to the array

  rgb[0] = r;
  rgb[1] = g;
  rgb[2] = b;
}
function lab2xyz(lab, xyz) {
  // LAB to XYZ
  var _lab = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(lab, 3),
    L = _lab[0],
    a = _lab[1],
    b = _lab[2];
  var var_Y = (L + 16) / 116;
  var var_X = a / 500 + var_Y;
  var var_Z = var_Y - b / 200;
  if (Math.pow(var_Y, 3) > 0.008856) {
    var_Y = Math.pow(var_Y, 3);
  } else {
    var_Y = (var_Y - 16.0 / 116.0) / 7.787;
  }
  if (Math.pow(var_X, 3) > 0.008856) {
    var_X = Math.pow(var_X, 3);
  } else {
    var_X = (var_X - 16.0 / 116.0) / 7.787;
  }
  if (Math.pow(var_Z, 3) > 0.008856) {
    var_Z = Math.pow(var_Z, 3);
  } else {
    var_Z = (var_Z - 16.0 / 116.0) / 7.787;
  }
  var ref_X = 0.9505;
  var ref_Y = 1.0;
  var ref_Z = 1.089;
  xyz[0] = ref_X * var_X; // ref_X = 0.9505  Observer= 2 deg Illuminant= D65

  xyz[1] = ref_Y * var_Y; // ref_Y = 1.000

  xyz[2] = ref_Z * var_Z; // ref_Z = 1.089
}

function xyz2lab(xyz, lab) {
  var _xyz = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(xyz, 3),
    x = _xyz[0],
    y = _xyz[1],
    z = _xyz[2];
  var ref_X = 0.9505;
  var ref_Y = 1.0;
  var ref_Z = 1.089;
  var var_X = x / ref_X; // ref_X = 0.9505  Observer= 2 deg, Illuminant= D65

  var var_Y = y / ref_Y; // ref_Y = 1.000

  var var_Z = z / ref_Z; // ref_Z = 1.089

  if (var_X > 0.008856) var_X = Math.pow(var_X, 1.0 / 3.0);else var_X = 7.787 * var_X + 16.0 / 116.0;
  if (var_Y > 0.008856) var_Y = Math.pow(var_Y, 1.0 / 3.0);else var_Y = 7.787 * var_Y + 16.0 / 116.0;
  if (var_Z > 0.008856) var_Z = Math.pow(var_Z, 1.0 / 3.0);else var_Z = 7.787 * var_Z + 16.0 / 116.0;
  lab[0] = 116 * var_Y - 16;
  lab[1] = 500 * (var_X - var_Y);
  lab[2] = 200 * (var_Y - var_Z);
}
function xyz2rgb(xyz, rgb) {
  var _xyz2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(xyz, 3),
    x = _xyz2[0],
    y = _xyz2[1],
    z = _xyz2[2];
  var r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  var g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  var b = x * 0.0557 + y * -0.204 + z * 1.057; // The following performs a "gamma correction" specified by the sRGB color
  // space.  sRGB is defined by a canonical definition of a display monitor and
  // has been standardized by the International Electrotechnical Commission (IEC
  // 61966-2-1).  The nonlinearity of the correction is designed to make the
  // colors more perceptually uniform.  This color space has been adopted by
  // several applications including Adobe Photoshop and Microsoft Windows color
  // management.  OpenGL is agnostic on its RGB color space, but it is reasonable
  // to assume it is close to this one.

  if (r > 0.0031308) r = 1.055 * Math.pow(r, 1 / 2.4) - 0.055;else r *= 12.92;
  if (g > 0.0031308) g = 1.055 * Math.pow(g, 1 / 2.4) - 0.055;else g *= 12.92;
  if (b > 0.0031308) b = 1.055 * Math.pow(b, 1 / 2.4) - 0.055;else b *= 12.92; // Clip colors. ideally we would do something that is perceptually closest
  // (since we can see colors outside of the display gamut), but this seems to
  // work well enough.

  var maxVal = r;
  if (maxVal < g) maxVal = g;
  if (maxVal < b) maxVal = b;
  if (maxVal > 1.0) {
    r /= maxVal;
    g /= maxVal;
    b /= maxVal;
  }
  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0; // Push values back to array

  rgb[0] = r;
  rgb[1] = g;
  rgb[2] = b;
}
function rgb2xyz(rgb, xyz) {
  var _rgb2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(rgb, 3),
    r = _rgb2[0],
    g = _rgb2[1],
    b = _rgb2[2]; // The following performs a "gamma correction" specified by the sRGB color
  // space.  sRGB is defined by a canonical definition of a display monitor and
  // has been standardized by the International Electrotechnical Commission (IEC
  // 61966-2-1).  The nonlinearity of the correction is designed to make the
  // colors more perceptually uniform.  This color space has been adopted by
  // several applications including Adobe Photoshop and Microsoft Windows color
  // management.  OpenGL is agnostic on its RGB color space, but it is reasonable
  // to assume it is close to this one.

  if (r > 0.04045) r = Math.pow((r + 0.055) / 1.055, 2.4);else r /= 12.92;
  if (g > 0.04045) g = Math.pow((g + 0.055) / 1.055, 2.4);else g /= 12.92;
  if (b > 0.04045) b = Math.pow((b + 0.055) / 1.055, 2.4);else b /= 12.92; // Observer. = 2 deg, Illuminant = D65

  xyz[0] = r * 0.4124 + g * 0.3576 + b * 0.1805;
  xyz[1] = r * 0.2126 + g * 0.7152 + b * 0.0722;
  xyz[2] = r * 0.0193 + g * 0.1192 + b * 0.9505;
}
function rgb2lab(rgb, lab) {
  var xyz = [0, 0, 0];
  rgb2xyz(rgb, xyz);
  xyz2lab(xyz, lab);
}
function lab2rgb(lab, rgb) {
  var xyz = [0, 0, 0];
  lab2xyz(lab, xyz);
  xyz2rgb(xyz, rgb);
}
function uninitializeBounds(bounds) {
  bounds[0] = 1.0;
  bounds[1] = -1.0;
  bounds[2] = 1.0;
  bounds[3] = -1.0;
  bounds[4] = 1.0;
  bounds[5] = -1.0;
  return bounds;
}
function areBoundsInitialized(bounds) {
  return !(bounds[1] - bounds[0] < 0.0);
}
function computeBoundsFromPoints(point1, point2, bounds) {
  bounds[0] = Math.min(point1[0], point2[0]);
  bounds[1] = Math.max(point1[0], point2[0]);
  bounds[2] = Math.min(point1[1], point2[1]);
  bounds[3] = Math.max(point1[1], point2[1]);
  bounds[4] = Math.min(point1[2], point2[2]);
  bounds[5] = Math.max(point1[2], point2[2]);
  return bounds;
}
function clampValue(value, minValue, maxValue) {
  if (value < minValue) {
    return minValue;
  }
  if (value > maxValue) {
    return maxValue;
  }
  return value;
}
function clampVector(vector, minVector, maxVector) {
  var out = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0, 0];
  out[0] = clampValue(vector[0], minVector[0], maxVector[0]);
  out[1] = clampValue(vector[1], minVector[1], maxVector[1]);
  out[2] = clampValue(vector[2], minVector[2], maxVector[2]);
  return out;
}
function clampAndNormalizeValue(value, range) {
  var result = 0;
  if (range[0] !== range[1]) {
    // clamp
    if (value < range[0]) {
      result = range[0];
    } else if (value > range[1]) {
      result = range[1];
    } else {
      result = value;
    } // normalize

    result = (result - range[0]) / (range[1] - range[0]);
  }
  return result;
}
var getScalarTypeFittingRange = notImplemented('GetScalarTypeFittingRange');
var getAdjustedScalarRange = notImplemented('GetAdjustedScalarRange');
function extentIsWithinOtherExtent(extent1, extent2) {
  if (!extent1 || !extent2) {
    return 0;
  }
  for (var i = 0; i < 6; i += 2) {
    if (extent1[i] < extent2[i] || extent1[i] > extent2[i + 1] || extent1[i + 1] < extent2[i] || extent1[i + 1] > extent2[i + 1]) {
      return 0;
    }
  }
  return 1;
}
function boundsIsWithinOtherBounds(bounds1_6, bounds2_6, delta_3) {
  if (!bounds1_6 || !bounds2_6) {
    return 0;
  }
  for (var i = 0; i < 6; i += 2) {
    if (bounds1_6[i] + delta_3[i / 2] < bounds2_6[i] || bounds1_6[i] - delta_3[i / 2] > bounds2_6[i + 1] || bounds1_6[i + 1] + delta_3[i / 2] < bounds2_6[i] || bounds1_6[i + 1] - delta_3[i / 2] > bounds2_6[i + 1]) {
      return 0;
    }
  }
  return 1;
}
function pointIsWithinBounds(point_3, bounds_6, delta_3) {
  if (!point_3 || !bounds_6 || !delta_3) {
    return 0;
  }
  for (var i = 0; i < 3; i++) {
    if (point_3[i] + delta_3[i] < bounds_6[2 * i] || point_3[i] - delta_3[i] > bounds_6[2 * i + 1]) {
      return 0;
    }
  }
  return 1;
}
function solve3PointCircle(p1, p2, p3, center) {
  var v21 = createArray(3);
  var v32 = createArray(3);
  var v13 = createArray(3);
  var v12 = createArray(3);
  var v23 = createArray(3);
  var v31 = createArray(3);
  for (var i = 0; i < 3; ++i) {
    v21[i] = p1[i] - p2[i];
    v32[i] = p2[i] - p3[i];
    v13[i] = p3[i] - p1[i];
    v12[i] = -v21[i];
    v23[i] = -v32[i];
    v31[i] = -v13[i];
  }
  var norm12 = norm(v12);
  var norm23 = norm(v23);
  var norm13 = norm(v13);
  var crossv21v32 = createArray(3);
  cross(v21, v32, crossv21v32);
  var normCross = norm(crossv21v32);
  var radius = norm12 * norm23 * norm13 / (2 * normCross);
  var normCross22 = 2 * normCross * normCross;
  var alpha = norm23 * norm23 * dot(v21, v31) / normCross22;
  var beta = norm13 * norm13 * dot(v12, v32) / normCross22;
  var gamma = norm12 * norm12 * dot(v13, v23) / normCross22;
  for (var _i6 = 0; _i6 < 3; ++_i6) {
    center[_i6] = alpha * p1[_i6] + beta * p2[_i6] + gamma * p3[_i6];
  }
  return radius;
}
var inf = Infinity;
var negInf = -Infinity;
var isInf = function isInf(value) {
  return !Number.isFinite(value);
};
var isFinite = Number.isFinite,
  isNaN = Number.isNaN;
var isNan = isNaN; // JavaScript - add-on ----------------------

function createUninitializedBounds() {
  return [].concat([Number.MAX_VALUE, -Number.MAX_VALUE,
  // X
  Number.MAX_VALUE, -Number.MAX_VALUE,
  // Y
  Number.MAX_VALUE, -Number.MAX_VALUE // Z
  ]);
}

function getMajorAxisIndex(vector) {
  var maxValue = -1;
  var axisIndex = -1;
  for (var i = 0; i < vector.length; i++) {
    var value = Math.abs(vector[i]);
    if (value > maxValue) {
      axisIndex = i;
      maxValue = value;
    }
  }
  return axisIndex;
}
function floatToHex2(value) {
  var integer = Math.floor(value * 255);
  if (integer > 15) {
    return integer.toString(16);
  }
  return "0".concat(integer.toString(16));
}
function floatRGB2HexCode(rgbArray) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
  return "".concat(prefix).concat(rgbArray.map(floatToHex2).join(''));
}
function floatToChar(f) {
  return Math.round(f * 255);
}
function float2CssRGBA(rgbArray) {
  if (rgbArray.length === 3) {
    return "rgb(".concat(rgbArray.map(floatToChar).join(', '), ")");
  }
  return "rgba(".concat(floatToChar(rgbArray[0] || 0), ", ").concat(floatToChar(rgbArray[1] || 0), ", ").concat(floatToChar(rgbArray[2] || 0), ", ").concat(rgbArray[3] || 0, ")");
} // ----------------------------------------------------------------------------
// Only Static API
// ----------------------------------------------------------------------------

var vtkMath = {
  Pi: Pi,
  radiansFromDegrees: radiansFromDegrees,
  degreesFromRadians: degreesFromRadians,
  round: round,
  floor: floor,
  ceil: ceil,
  ceilLog2: ceilLog2,
  min: min,
  max: max,
  arrayMin: arrayMin,
  arrayMax: arrayMax,
  arrayRange: arrayRange,
  isPowerOfTwo: isPowerOfTwo,
  nearestPowerOfTwo: nearestPowerOfTwo,
  factorial: factorial,
  binomial: binomial,
  beginCombination: beginCombination,
  nextCombination: nextCombination,
  randomSeed: randomSeed,
  getSeed: getSeed,
  random: random,
  gaussian: gaussian,
  add: add,
  subtract: subtract,
  multiplyScalar: multiplyScalar,
  multiplyScalar2D: multiplyScalar2D,
  multiplyAccumulate: multiplyAccumulate,
  multiplyAccumulate2D: multiplyAccumulate2D,
  dot: dot,
  outer: outer,
  cross: cross,
  norm: norm,
  normalize: normalize,
  perpendiculars: perpendiculars,
  projectVector: projectVector,
  projectVector2D: projectVector2D,
  distance2BetweenPoints: distance2BetweenPoints,
  angleBetweenVectors: angleBetweenVectors,
  gaussianAmplitude: gaussianAmplitude,
  gaussianWeight: gaussianWeight,
  dot2D: dot2D,
  outer2D: outer2D,
  norm2D: norm2D,
  normalize2D: normalize2D,
  determinant2x2: determinant2x2,
  LUFactor3x3: LUFactor3x3,
  LUSolve3x3: LUSolve3x3,
  linearSolve3x3: linearSolve3x3,
  multiply3x3_vect3: multiply3x3_vect3,
  multiply3x3_mat3: multiply3x3_mat3,
  multiplyMatrix: multiplyMatrix,
  transpose3x3: transpose3x3,
  invert3x3: invert3x3,
  identity3x3: identity3x3,
  identity: identity,
  isIdentity: isIdentity,
  isIdentity3x3: isIdentity3x3,
  determinant3x3: determinant3x3,
  quaternionToMatrix3x3: quaternionToMatrix3x3,
  areEquals: areEquals,
  areMatricesEqual: areMatricesEqual,
  roundNumber: roundNumber,
  roundVector: roundVector,
  matrix3x3ToQuaternion: matrix3x3ToQuaternion,
  multiplyQuaternion: multiplyQuaternion,
  orthogonalize3x3: orthogonalize3x3,
  diagonalize3x3: diagonalize3x3,
  singularValueDecomposition3x3: singularValueDecomposition3x3,
  solveLinearSystem: solveLinearSystem,
  invertMatrix: invertMatrix,
  luFactorLinearSystem: luFactorLinearSystem,
  luSolveLinearSystem: luSolveLinearSystem,
  estimateMatrixCondition: estimateMatrixCondition,
  jacobi: jacobi,
  jacobiN: jacobiN,
  solveHomogeneousLeastSquares: solveHomogeneousLeastSquares,
  solveLeastSquares: solveLeastSquares,
  hex2float: hex2float,
  rgb2hsv: rgb2hsv,
  hsv2rgb: hsv2rgb,
  lab2xyz: lab2xyz,
  xyz2lab: xyz2lab,
  xyz2rgb: xyz2rgb,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  lab2rgb: lab2rgb,
  uninitializeBounds: uninitializeBounds,
  areBoundsInitialized: areBoundsInitialized,
  computeBoundsFromPoints: computeBoundsFromPoints,
  clampValue: clampValue,
  clampVector: clampVector,
  clampAndNormalizeValue: clampAndNormalizeValue,
  getScalarTypeFittingRange: getScalarTypeFittingRange,
  getAdjustedScalarRange: getAdjustedScalarRange,
  extentIsWithinOtherExtent: extentIsWithinOtherExtent,
  boundsIsWithinOtherBounds: boundsIsWithinOtherBounds,
  pointIsWithinBounds: pointIsWithinBounds,
  solve3PointCircle: solve3PointCircle,
  inf: inf,
  negInf: negInf,
  isInf: isInf,
  isNan: isNaN,
  isNaN: isNaN,
  isFinite: isFinite,
  // JS add-on
  createUninitializedBounds: createUninitializedBounds,
  getMajorAxisIndex: getMajorAxisIndex,
  floatToHex2: floatToHex2,
  floatRGB2HexCode: floatRGB2HexCode,
  float2CssRGBA: float2CssRGBA
};
var vtkMath$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createArray: createArray,
  Pi: Pi,
  radiansFromDegrees: radiansFromDegrees,
  degreesFromRadians: degreesFromRadians,
  round: round,
  floor: floor,
  ceil: ceil,
  min: min,
  max: max,
  arrayMin: arrayMin,
  arrayMax: arrayMax,
  arrayRange: arrayRange,
  ceilLog2: ceilLog2,
  factorial: factorial,
  nearestPowerOfTwo: nearestPowerOfTwo,
  isPowerOfTwo: isPowerOfTwo,
  binomial: binomial,
  beginCombination: beginCombination,
  nextCombination: nextCombination,
  randomSeed: randomSeed,
  getSeed: getSeed,
  random: random,
  gaussian: gaussian,
  add: add,
  subtract: subtract,
  multiplyScalar: multiplyScalar,
  multiplyScalar2D: multiplyScalar2D,
  multiplyAccumulate: multiplyAccumulate,
  multiplyAccumulate2D: multiplyAccumulate2D,
  dot: dot,
  outer: outer,
  cross: cross,
  norm: norm,
  normalize: normalize,
  perpendiculars: perpendiculars,
  projectVector: projectVector,
  dot2D: dot2D,
  projectVector2D: projectVector2D,
  distance2BetweenPoints: distance2BetweenPoints,
  angleBetweenVectors: angleBetweenVectors,
  signedAngleBetweenVectors: signedAngleBetweenVectors,
  gaussianAmplitude: gaussianAmplitude,
  gaussianWeight: gaussianWeight,
  outer2D: outer2D,
  norm2D: norm2D,
  normalize2D: normalize2D,
  rowsToMat4: rowsToMat4,
  columnsToMat4: columnsToMat4,
  rowsToMat3: rowsToMat3,
  columnsToMat3: columnsToMat3,
  determinant2x2: determinant2x2,
  LUFactor3x3: LUFactor3x3,
  LUSolve3x3: LUSolve3x3,
  linearSolve3x3: linearSolve3x3,
  multiply3x3_vect3: multiply3x3_vect3,
  multiply3x3_mat3: multiply3x3_mat3,
  multiplyMatrix: multiplyMatrix,
  transpose3x3: transpose3x3,
  invert3x3: invert3x3,
  determinant3x3: determinant3x3,
  areEquals: areEquals,
  areMatricesEqual: areMatricesEqual,
  identity3x3: identity3x3,
  identity: identity,
  isIdentity: isIdentity,
  isIdentity3x3: isIdentity3x3,
  quaternionToMatrix3x3: quaternionToMatrix3x3,
  roundNumber: roundNumber,
  roundVector: roundVector,
  jacobiN: jacobiN,
  matrix3x3ToQuaternion: matrix3x3ToQuaternion,
  multiplyQuaternion: multiplyQuaternion,
  orthogonalize3x3: orthogonalize3x3,
  diagonalize3x3: diagonalize3x3,
  singularValueDecomposition3x3: singularValueDecomposition3x3,
  luFactorLinearSystem: luFactorLinearSystem,
  luSolveLinearSystem: luSolveLinearSystem,
  solveLinearSystem: solveLinearSystem,
  invertMatrix: invertMatrix,
  estimateMatrixCondition: estimateMatrixCondition,
  jacobi: jacobi,
  solveHomogeneousLeastSquares: solveHomogeneousLeastSquares,
  solveLeastSquares: solveLeastSquares,
  hex2float: hex2float,
  rgb2hsv: rgb2hsv,
  hsv2rgb: hsv2rgb,
  lab2xyz: lab2xyz,
  xyz2lab: xyz2lab,
  xyz2rgb: xyz2rgb,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  lab2rgb: lab2rgb,
  uninitializeBounds: uninitializeBounds,
  areBoundsInitialized: areBoundsInitialized,
  computeBoundsFromPoints: computeBoundsFromPoints,
  clampValue: clampValue,
  clampVector: clampVector,
  clampAndNormalizeValue: clampAndNormalizeValue,
  getScalarTypeFittingRange: getScalarTypeFittingRange,
  getAdjustedScalarRange: getAdjustedScalarRange,
  extentIsWithinOtherExtent: extentIsWithinOtherExtent,
  boundsIsWithinOtherBounds: boundsIsWithinOtherBounds,
  pointIsWithinBounds: pointIsWithinBounds,
  solve3PointCircle: solve3PointCircle,
  inf: inf,
  negInf: negInf,
  isInf: isInf,
  isFinite: isFinite,
  isNaN: isNaN,
  isNan: isNan,
  createUninitializedBounds: createUninitializedBounds,
  getMajorAxisIndex: getMajorAxisIndex,
  floatToHex2: floatToHex2,
  floatRGB2HexCode: floatRGB2HexCode,
  float2CssRGBA: float2CssRGBA,
  'default': vtkMath
});


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/Core/Points.js":
/*!************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/Core/Points.js ***!
  \************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkPoints$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _DataArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataArray.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray.js");
/* harmony import */ var _DataArray_Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataArray/Constants.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray/Constants.js");



var vtkErrorMacro = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].vtkErrorMacro;
var INVALID_BOUNDS = [1, -1, 1, -1, 1, -1]; // ----------------------------------------------------------------------------
// vtkPoints methods
// ----------------------------------------------------------------------------

function vtkPoints(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkPoints'); // Forwarding methods

  publicAPI.getNumberOfPoints = publicAPI.getNumberOfTuples;
  publicAPI.setNumberOfPoints = function (nbPoints) {
    var dimension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    if (publicAPI.getNumberOfPoints() !== nbPoints) {
      model.size = nbPoints * dimension;
      model.values = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].newTypedArray(model.dataType, model.size);
      publicAPI.setNumberOfComponents(dimension);
      publicAPI.modified();
    }
  };
  publicAPI.setPoint = function (idx) {
    for (var _len = arguments.length, xyz = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      xyz[_key - 1] = arguments[_key];
    }
    publicAPI.setTuple(idx, xyz);
  };
  publicAPI.getPoint = publicAPI.getTuple;
  publicAPI.insertNextPoint = function (x, y, z) {
    return publicAPI.insertNextTuple([x, y, z]);
  };
  publicAPI.getBounds = function () {
    if (publicAPI.getNumberOfComponents() === 3) {
      var _xRange = publicAPI.getRange(0);
      model.bounds[0] = _xRange[0];
      model.bounds[1] = _xRange[1];
      var _yRange = publicAPI.getRange(1);
      model.bounds[2] = _yRange[0];
      model.bounds[3] = _yRange[1];
      var zRange = publicAPI.getRange(2);
      model.bounds[4] = zRange[0];
      model.bounds[5] = zRange[1];
      return model.bounds;
    }
    if (publicAPI.getNumberOfComponents() !== 2) {
      vtkErrorMacro("getBounds called on an array with components of\n        ".concat(publicAPI.getNumberOfComponents()));
      return INVALID_BOUNDS;
    }
    var xRange = publicAPI.getRange(0);
    model.bounds[0] = xRange[0];
    model.bounds[1] = xRange[1];
    var yRange = publicAPI.getRange(1);
    model.bounds[2] = yRange[0];
    model.bounds[3] = yRange[1];
    model.bounds[4] = 0;
    model.bounds[5] = 0;
    return model.bounds;
  }; // Trigger the computation of bounds

  publicAPI.computeBounds = publicAPI.getBounds; // Initialize

  publicAPI.setNumberOfComponents(model.numberOfComponents < 2 ? 3 : model.numberOfComponents);
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  empty: true,
  numberOfComponents: 3,
  dataType: _DataArray_Constants_js__WEBPACK_IMPORTED_MODULE_2__["VtkDataTypes"].FLOAT,
  bounds: [1, -1, 1, -1, 1, -1]
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  _DataArray_js__WEBPACK_IMPORTED_MODULE_1__["default"].extend(publicAPI, model, initialValues);
  vtkPoints(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].newInstance(extend, 'vtkPoints'); // ----------------------------------------------------------------------------

var vtkPoints$1 = {
  newInstance: newInstance,
  extend: extend
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/BoundingBox.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/BoundingBox.js ***!
  \**********************************************************************/
/*! exports provided: STATIC, addBounds, addPoint, addPoints, computeCornerPoints, computeLocalBounds, computeScale3, contains, containsPoint, cutWithPlane, default, equals, getCenter, getCorners, getDiagonalLength, getLength, getLengths, getMaxLength, getMaxPoint, getMinPoint, getXRange, getYRange, getZRange, inflate, intersect, intersectBox, intersectPlane, intersects, isValid, reset, scale, scaleAboutCenter, setBounds, setMaxPoint, setMinPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC", function() { return STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBounds", function() { return _addBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPoint", function() { return _addPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPoints", function() { return _addPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeCornerPoints", function() { return _computeCornerPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeLocalBounds", function() { return _computeLocalBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeScale3", function() { return _computeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsPoint", function() { return _containsPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cutWithPlane", function() { return _cutWithPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkBoundingBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenter", function() { return _getCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorners", function() { return _getCorners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiagonalLength", function() { return _getDiagonalLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLength", function() { return _getLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLengths", function() { return _getLengths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxLength", function() { return _getMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxPoint", function() { return _getMaxPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinPoint", function() { return _getMinPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXRange", function() { return _getXRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYRange", function() { return _getYRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZRange", function() { return _getZRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inflate", function() { return _inflate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return _intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectBox", function() { return _intersectBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectPlane", function() { return _intersectPlane; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersects", function() { return _intersects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return _isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return _reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return _scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAboutCenter", function() { return scaleAboutCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBounds", function() { return _setBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMaxPoint", function() { return _setMaxPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMinPoint", function() { return _setMinPoint; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Core_Math_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core/Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");
/* harmony import */ var _Plane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Plane.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Plane.js");







function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var INIT_BOUNDS = [Number.MAX_VALUE, -Number.MAX_VALUE,
// X
Number.MAX_VALUE, -Number.MAX_VALUE,
// Y
Number.MAX_VALUE, -Number.MAX_VALUE // Z
]; // ----------------------------------------------------------------------------
// Global methods
// ----------------------------------------------------------------------------

function _equals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
function _isValid(bounds) {
  return bounds[0] <= bounds[1] && bounds[2] <= bounds[3] && bounds[4] <= bounds[5];
}
function _setBounds(bounds, otherBounds) {
  bounds[0] = otherBounds[0];
  bounds[1] = otherBounds[1];
  bounds[2] = otherBounds[2];
  bounds[3] = otherBounds[3];
  bounds[4] = otherBounds[4];
  bounds[5] = otherBounds[5];
  return bounds;
}
function _reset(bounds) {
  return _setBounds(bounds, INIT_BOUNDS);
}
function _addPoint(bounds, x, y, z) {
  var _bounds = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(bounds, 6),
    xMin = _bounds[0],
    xMax = _bounds[1],
    yMin = _bounds[2],
    yMax = _bounds[3],
    zMin = _bounds[4],
    zMax = _bounds[5];
  bounds[0] = xMin < x ? xMin : x;
  bounds[1] = xMax > x ? xMax : x;
  bounds[2] = yMin < y ? yMin : y;
  bounds[3] = yMax > y ? yMax : y;
  bounds[4] = zMin < z ? zMin : z;
  bounds[5] = zMax > z ? zMax : z;
  return bounds;
}
function _addPoints(bounds, points) {
  if (points.length === 0) {
    return bounds;
  }
  if (Array.isArray(points[0])) {
    for (var i = 0; i < points.length; ++i) {
      _addPoint(bounds, points[i]);
    }
  } else {
    for (var _i = 0; _i < points.length; _i += 3) {
      _addPoint(bounds, points.slice(_i, _i + 3));
    }
  }
  return bounds;
}
function _addBounds(bounds, xMin, xMax, yMin, yMax, zMin, zMax) {
  var _bounds2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(bounds, 6),
    _xMin = _bounds2[0],
    _xMax = _bounds2[1],
    _yMin = _bounds2[2],
    _yMax = _bounds2[3],
    _zMin = _bounds2[4],
    _zMax = _bounds2[5];
  if (zMax === undefined) {
    bounds[0] = Math.min(xMin[0], _xMin);
    bounds[1] = Math.max(xMin[1], _xMax);
    bounds[2] = Math.min(xMin[2], _yMin);
    bounds[3] = Math.max(xMin[3], _yMax);
    bounds[4] = Math.min(xMin[4], _zMin);
    bounds[5] = Math.max(xMin[5], _zMax);
  } else {
    bounds[0] = Math.min(xMin, _xMin);
    bounds[1] = Math.max(xMax, _xMax);
    bounds[2] = Math.min(yMin, _yMin);
    bounds[3] = Math.max(yMax, _yMax);
    bounds[4] = Math.min(zMin, _zMin);
    bounds[5] = Math.max(zMax, _zMax);
  }
  return bounds;
}
function _setMinPoint(bounds, x, y, z) {
  var _bounds3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(bounds, 6),
    xMin = _bounds3[0],
    xMax = _bounds3[1],
    yMin = _bounds3[2],
    yMax = _bounds3[3],
    zMin = _bounds3[4],
    zMax = _bounds3[5];
  bounds[0] = x;
  bounds[1] = x > xMax ? x : xMax;
  bounds[2] = y;
  bounds[3] = y > yMax ? y : yMax;
  bounds[4] = z;
  bounds[5] = z > zMax ? z : zMax;
  return xMin !== x || yMin !== y || zMin !== z;
}
function _setMaxPoint(bounds, x, y, z) {
  var _bounds4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(bounds, 6),
    xMin = _bounds4[0],
    xMax = _bounds4[1],
    yMin = _bounds4[2],
    yMax = _bounds4[3],
    zMin = _bounds4[4],
    zMax = _bounds4[5];
  bounds[0] = x < xMin ? x : xMin;
  bounds[1] = x;
  bounds[2] = y < yMin ? y : yMin;
  bounds[3] = y;
  bounds[4] = z < zMin ? z : zMin;
  bounds[5] = z;
  return xMax !== x || yMax !== y || zMax !== z;
}
function _inflate(bounds, delta) {
  bounds[0] -= delta;
  bounds[1] += delta;
  bounds[2] -= delta;
  bounds[3] += delta;
  bounds[4] -= delta;
  bounds[5] += delta;
  return bounds;
}
function _scale(bounds, sx, sy, sz) {
  if (!_isValid(bounds)) {
    return false;
  }
  if (sx >= 0.0) {
    bounds[0] *= sx;
    bounds[1] *= sx;
  } else {
    bounds[0] = sx * bounds[1];
    bounds[1] = sx * bounds[0];
  }
  if (sy >= 0.0) {
    bounds[2] *= sy;
    bounds[3] *= sy;
  } else {
    bounds[2] = sy * bounds[3];
    bounds[3] = sy * bounds[2];
  }
  if (sz >= 0.0) {
    bounds[4] *= sz;
    bounds[5] *= sz;
  } else {
    bounds[4] = sz * bounds[5];
    bounds[5] = sz * bounds[4];
  }
  return true;
}
function _getCenter(bounds) {
  return [0.5 * (bounds[0] + bounds[1]), 0.5 * (bounds[2] + bounds[3]), 0.5 * (bounds[4] + bounds[5])];
}
function scaleAboutCenter(bounds, sx, sy, sz) {
  if (!_isValid(bounds)) {
    return false;
  }
  var center = _getCenter(bounds);
  bounds[0] -= center[0];
  bounds[1] -= center[0];
  bounds[2] -= center[1];
  bounds[3] -= center[1];
  bounds[4] -= center[2];
  bounds[5] -= center[2];
  _scale(bounds, sx, sy, sz);
  bounds[0] += center[0];
  bounds[1] += center[0];
  bounds[2] += center[1];
  bounds[3] += center[1];
  bounds[4] += center[2];
  bounds[5] += center[2];
  return true;
}
function _getLength(bounds, index) {
  return bounds[index * 2 + 1] - bounds[index * 2];
}
function _getLengths(bounds) {
  return [_getLength(bounds, 0), _getLength(bounds, 1), _getLength(bounds, 2)];
}
function _getXRange(bounds) {
  return bounds.slice(0, 2);
}
function _getYRange(bounds) {
  return bounds.slice(2, 4);
}
function _getZRange(bounds) {
  return bounds.slice(4, 6);
}
function _getMaxLength(bounds) {
  var l = _getLengths(bounds);
  if (l[0] > l[1]) {
    if (l[0] > l[2]) {
      return l[0];
    }
    return l[2];
  }
  if (l[1] > l[2]) {
    return l[1];
  }
  return l[2];
}
function _getDiagonalLength(bounds) {
  if (_isValid(bounds)) {
    var l = _getLengths(bounds);
    return Math.sqrt(l[0] * l[0] + l[1] * l[1] + l[2] * l[2]);
  }
  return null;
}
function _getMinPoint(bounds) {
  return [bounds[0], bounds[2], bounds[4]];
}
function _getMaxPoint(bounds) {
  return [bounds[1], bounds[3], bounds[5]];
}
function oppositeSign(a, b) {
  return a <= 0 && b >= 0 || a >= 0 && b <= 0;
}
function _getCorners(bounds, corners) {
  var count = 0;
  for (var ix = 0; ix < 2; ix++) {
    for (var iy = 2; iy < 4; iy++) {
      for (var iz = 4; iz < 6; iz++) {
        corners[count] = [bounds[ix], bounds[iy], bounds[iz]];
        count++;
      }
    }
  }
  return corners;
} // Computes the two corners with minimal and miximal coordinates

function _computeCornerPoints(bounds, point1, point2) {
  point1[0] = bounds[0];
  point1[1] = bounds[2];
  point1[2] = bounds[4];
  point2[0] = bounds[1];
  point2[1] = bounds[3];
  point2[2] = bounds[5];
  return point1;
}
function _computeScale(bounds) {
  var scale3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  scale3[0] = 0.5 * (bounds[1] - bounds[0]);
  scale3[1] = 0.5 * (bounds[3] - bounds[2]);
  scale3[2] = 0.5 * (bounds[5] - bounds[4]);
  return scale3;
}
function _computeLocalBounds(points, u, v, w) {
  var bounds = [].concat(INIT_BOUNDS);
  var pointsData = points.getData();
  for (var i = 0; i < pointsData.length; i += 3) {
    var point = [pointsData[i], pointsData[i + 1], pointsData[i + 2]];
    var du = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_5__["d"])(point, u);
    bounds[0] = Math.min(du, bounds[0]);
    bounds[1] = Math.max(du, bounds[1]);
    var dv = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_5__["d"])(point, v);
    bounds[2] = Math.min(dv, bounds[2]);
    bounds[3] = Math.max(dv, bounds[3]);
    var dw = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_5__["d"])(point, w);
    bounds[4] = Math.min(dw, bounds[4]);
    bounds[5] = Math.max(dw, bounds[5]);
  }
  return bounds;
} // The method returns a non-zero value if the bounding box is hit.

function _intersectBox(bounds, origin, dir, coord, tolerance) {
  var inside = true;
  var quadrant = [];
  var whichPlane = 0;
  var maxT = [];
  var candidatePlane = [0.0, 0.0, 0.0];
  var RIGHT = 0;
  var LEFT = 1;
  var MIDDLE = 2; // First find closest planes

  for (var i = 0; i < 3; i++) {
    if (origin[i] < bounds[2 * i]) {
      quadrant[i] = LEFT;
      candidatePlane[i] = bounds[2 * i];
      inside = false;
    } else if (origin[i] > bounds[2 * i + 1]) {
      quadrant[i] = RIGHT;
      candidatePlane[i] = bounds[2 * i + 1];
      inside = false;
    } else {
      quadrant[i] = MIDDLE;
    }
  } // Check whether origin of ray is inside bbox

  if (inside) {
    coord[0] = origin[0];
    coord[1] = origin[1];
    coord[2] = origin[2];
    tolerance[0] = 0;
    return 1;
  } // Calculate parametric distance to plane

  for (var _i2 = 0; _i2 < 3; _i2++) {
    if (quadrant[_i2] !== MIDDLE && dir[_i2] !== 0.0) {
      maxT[_i2] = (candidatePlane[_i2] - origin[_i2]) / dir[_i2];
    } else {
      maxT[_i2] = -1.0;
    }
  } // Find the largest parametric value of intersection

  for (var _i3 = 0; _i3 < 3; _i3++) {
    if (maxT[whichPlane] < maxT[_i3]) {
      whichPlane = _i3;
    }
  } // Check for valie intersection along line

  if (maxT[whichPlane] > 1.0 || maxT[whichPlane] < 0.0) {
    return 0;
  }
  tolerance[0] = maxT[whichPlane]; // Intersection point along line is okay. Check bbox.

  for (var _i4 = 0; _i4 < 3; _i4++) {
    if (whichPlane !== _i4) {
      coord[_i4] = origin[_i4] + maxT[whichPlane] * dir[_i4];
      if (coord[_i4] < bounds[2 * _i4] || coord[_i4] > bounds[2 * _i4 + 1]) {
        return 0;
      }
    } else {
      coord[_i4] = candidatePlane[_i4];
    }
  }
  return 1;
} // Plane intersection with box

function _intersectPlane(bounds, origin, normal) {
  var p = [];
  var d = 0;
  var sign = 1;
  var firstOne = 1; // Evaluate the eight points. If there is a sign change, there is an intersection

  for (var z = 4; z <= 5; ++z) {
    p[2] = bounds[z];
    for (var y = 2; y <= 3; ++y) {
      p[1] = bounds[y];
      for (var x = 0; x <= 1; ++x) {
        p[0] = bounds[x];
        d = _Plane_js__WEBPACK_IMPORTED_MODULE_6__["default"].evaluate(normal, origin, p);
        if (firstOne) {
          sign = d >= 0 ? 1 : -1;
          firstOne = 0;
        }
        if (d === 0.0 || sign > 0 && d < 0.0 || sign < 0 && d > 0.0) {
          return 1;
        }
      }
    }
  }
  return 0; // no intersection
}

function _intersect(bounds, bBounds) {
  if (!(_isValid(bounds) && _isValid(bBounds))) {
    return false;
  }
  var newBounds = [0, 0, 0, 0, 0, 0];
  var intersection;
  for (var i = 0; i < 3; i++) {
    intersection = false;
    if (bBounds[i * 2] >= bounds[i * 2] && bBounds[i * 2] <= bounds[i * 2 + 1]) {
      intersection = true;
      newBounds[i * 2] = bBounds[i * 2];
    } else if (bounds[i * 2] >= bBounds[i * 2] && bounds[i * 2] <= bBounds[i * 2 + 1]) {
      intersection = true;
      newBounds[i * 2] = bounds[i * 2];
    }
    if (bBounds[i * 2 + 1] >= bounds[i * 2] && bBounds[i * 2 + 1] <= bounds[i * 2 + 1]) {
      intersection = true;
      newBounds[i * 2 + 1] = bBounds[2 * i + 1];
    } else if (bounds[i * 2 + 1] >= bBounds[i * 2] && bounds[i * 2 + 1] <= bBounds[i * 2 + 1]) {
      intersection = true;
      newBounds[i * 2 + 1] = bounds[i * 2 + 1];
    }
    if (!intersection) {
      return false;
    }
  } // OK they did intersect - set the box to be the result

  bounds[0] = newBounds[0];
  bounds[1] = newBounds[1];
  bounds[2] = newBounds[2];
  bounds[3] = newBounds[3];
  bounds[4] = newBounds[4];
  bounds[5] = newBounds[5];
  return true;
}
function _intersects(bounds, bBounds) {
  if (!(_isValid(bounds) && _isValid(bBounds))) {
    return false;
  }
  /* eslint-disable no-continue */

  for (var i = 0; i < 3; i++) {
    if (bBounds[i * 2] >= bounds[i * 2] && bBounds[i * 2] <= bounds[i * 2 + 1]) {
      continue;
    } else if (bounds[i * 2] >= bBounds[i * 2] && bounds[i * 2] <= bBounds[i * 2 + 1]) {
      continue;
    }
    if (bBounds[i * 2 + 1] >= bounds[i * 2] && bBounds[i * 2 + 1] <= bounds[i * 2 + 1]) {
      continue;
    } else if (bounds[i * 2 + 1] >= bBounds[i * 2] && bounds[i * 2 + 1] <= bBounds[i * 2 + 1]) {
      continue;
    }
    return false;
  }
  /* eslint-enable no-continue */

  return true;
}
function _containsPoint(bounds, x, y, z) {
  if (x < bounds[0] || x > bounds[1]) {
    return false;
  }
  if (y < bounds[2] || y > bounds[3]) {
    return false;
  }
  if (z < bounds[4] || z > bounds[5]) {
    return false;
  }
  return true;
}
function contains(bounds, otherBounds) {
  // if either box is not valid or they don't intersect
  if (!_intersects(bounds, otherBounds)) {
    return false;
  }
  if (!_containsPoint.apply(void 0, [bounds].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(_getMinPoint(otherBounds))))) {
    return false;
  }
  if (!_containsPoint.apply(void 0, [bounds].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(_getMaxPoint(otherBounds))))) {
    return false;
  }
  return true;
}
/**
 * Returns true if plane intersects bounding box.
 * If so, the box is cut by the plane
 * @param {array} origin
 * @param {array} normal
 */

function _cutWithPlane(bounds, origin, normal) {
  // Index[0..2] represents the order of traversing the corners of a cube
  // in (x,y,z), (y,x,z) and (z,x,y) ordering, respectively
  var index = [[0, 1, 2, 3, 4, 5, 6, 7], [0, 1, 4, 5, 2, 3, 6, 7], [0, 2, 4, 6, 1, 3, 5, 7]]; // stores the signed distance to a plane

  var d = [0, 0, 0, 0, 0, 0, 0, 0];
  var idx = 0;
  for (var ix = 0; ix < 2; ix++) {
    for (var iy = 2; iy < 4; iy++) {
      for (var iz = 4; iz < 6; iz++) {
        var x = [bounds[ix], bounds[iy], bounds[iz]];
        d[idx++] = _Plane_js__WEBPACK_IMPORTED_MODULE_6__["default"].evaluate(normal, origin, x);
      }
    }
  }
  var dir = 2;
  while (dir--) {
    // in each direction, we test if the vertices of two orthogonal faces
    // are on either side of the plane
    if (oppositeSign(d[index[dir][0]], d[index[dir][4]]) && oppositeSign(d[index[dir][1]], d[index[dir][5]]) && oppositeSign(d[index[dir][2]], d[index[dir][6]]) && oppositeSign(d[index[dir][3]], d[index[dir][7]])) {
      break;
    }
  }
  if (dir < 0) {
    return false;
  }
  var sign = Math.sign(normal[dir]);
  var size = Math.abs((bounds[dir * 2 + 1] - bounds[dir * 2]) * normal[dir]);
  var t = sign > 0 ? 1 : 0;
  /* eslint-disable no-continue */

  for (var i = 0; i < 4; i++) {
    if (size === 0) {
      continue; // shouldn't happen
    }

    var ti = Math.abs(d[index[dir][i]]) / size;
    if (sign > 0 && ti < t) {
      t = ti;
    }
    if (sign < 0 && ti > t) {
      t = ti;
    }
  }
  /* eslint-enable no-continue */

  var bound = (1.0 - t) * bounds[dir * 2] + t * bounds[dir * 2 + 1];
  if (sign > 0) {
    bounds[dir * 2] = bound;
  } else {
    bounds[dir * 2 + 1] = bound;
  }
  return true;
} // ----------------------------------------------------------------------------

var BoundingBox = /*#__PURE__*/function () {
  function BoundingBox(refBounds) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BoundingBox);
    this.bounds = refBounds;
    if (!this.bounds) {
      this.bounds = new Float64Array(INIT_BOUNDS);
    }
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BoundingBox, [{
    key: "getBounds",
    value: function getBounds() {
      return this.bounds;
    }
  }, {
    key: "equals",
    value: function equals(otherBounds) {
      return _equals(this.bounds, otherBounds);
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return _isValid(this.bounds);
    }
  }, {
    key: "setBounds",
    value: function setBounds(otherBounds) {
      return _setBounds(this.bounds, otherBounds);
    }
  }, {
    key: "reset",
    value: function reset() {
      return _reset(this.bounds);
    }
  }, {
    key: "addPoint",
    value: function addPoint() {
      for (var _len = arguments.length, xyz = new Array(_len), _key = 0; _key < _len; _key++) {
        xyz[_key] = arguments[_key];
      }
      return _addPoint(this.bounds, xyz);
    }
  }, {
    key: "addPoints",
    value: function addPoints(points) {
      return _addPoints(this.bounds, points);
    }
  }, {
    key: "addBounds",
    value: function addBounds(xMin, xMax, yMin, yMax, zMin, zMax) {
      return _addBounds(this.bounds, xMin, xMax, yMin, yMax, zMin, zMax);
    }
  }, {
    key: "setMinPoint",
    value: function setMinPoint(x, y, z) {
      return _setMinPoint(this.bounds, x, y, z);
    }
  }, {
    key: "setMaxPoint",
    value: function setMaxPoint(x, y, z) {
      return _setMaxPoint(this.bounds, x, y, z);
    }
  }, {
    key: "inflate",
    value: function inflate(delta) {
      return _inflate(this.bounds, delta);
    }
  }, {
    key: "scale",
    value: function scale(sx, sy, sz) {
      return _scale(this.bounds, sx, sy, sz);
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return _getCenter(this.bounds);
    }
  }, {
    key: "getLength",
    value: function getLength(index) {
      return _getLength(this.bounds, index);
    }
  }, {
    key: "getLengths",
    value: function getLengths() {
      return _getLengths(this.bounds);
    }
  }, {
    key: "getMaxLength",
    value: function getMaxLength() {
      return _getMaxLength(this.bounds);
    }
  }, {
    key: "getDiagonalLength",
    value: function getDiagonalLength() {
      return _getDiagonalLength(this.bounds);
    }
  }, {
    key: "getMinPoint",
    value: function getMinPoint() {
      return _getMinPoint(this.bounds);
    }
  }, {
    key: "getMaxPoint",
    value: function getMaxPoint() {
      return _getMaxPoint(this.bounds);
    }
  }, {
    key: "getXRange",
    value: function getXRange() {
      return _getXRange(this.bounds);
    }
  }, {
    key: "getYRange",
    value: function getYRange() {
      return _getYRange(this.bounds);
    }
  }, {
    key: "getZRange",
    value: function getZRange() {
      return _getZRange(this.bounds);
    }
  }, {
    key: "getCorners",
    value: function getCorners(corners) {
      return _getCorners(this.bounds, corners);
    }
  }, {
    key: "computeCornerPoints",
    value: function computeCornerPoints(point1, point2) {
      return _computeCornerPoints(this.bounds, point1, point2);
    }
  }, {
    key: "computeLocalBounds",
    value: function computeLocalBounds(u, v, w) {
      return _computeLocalBounds(this.bounds, u, v, w);
    }
  }, {
    key: "computeScale3",
    value: function computeScale3(scale3) {
      return _computeScale(this.bounds, scale3);
    }
  }, {
    key: "cutWithPlane",
    value: function cutWithPlane(origin, normal) {
      return _cutWithPlane(this.bounds, origin, normal);
    }
  }, {
    key: "intersectBox",
    value: function intersectBox(origin, dir, coord, tolerance) {
      return _intersectBox(this.bounds, origin, dir, coord, tolerance);
    }
  }, {
    key: "intersectPlane",
    value: function intersectPlane(origin, normal) {
      return _intersectPlane(this.bounds, origin, normal);
    }
  }, {
    key: "intersect",
    value: function intersect(otherBounds) {
      return _intersect(this.bounds, otherBounds);
    }
  }, {
    key: "intersects",
    value: function intersects(otherBounds) {
      return _intersects(this.bounds, otherBounds);
    }
  }, {
    key: "containsPoint",
    value: function containsPoint(x, y, z) {
      return _containsPoint(this.bounds, x, y, z);
    }
  }, {
    key: "contains",
    value: function contains(otherBounds) {
      return _intersects(this.bounds, otherBounds);
    }
  }]);
  return BoundingBox;
}();
function newInstance(initialValues) {
  var bounds = initialValues && initialValues.bounds;
  return new BoundingBox(bounds);
} // ----------------------------------------------------------------------------
// Static API
// ----------------------------------------------------------------------------

var STATIC = {
  equals: _equals,
  isValid: _isValid,
  setBounds: _setBounds,
  reset: _reset,
  addPoint: _addPoint,
  addPoints: _addPoints,
  addBounds: _addBounds,
  setMinPoint: _setMinPoint,
  setMaxPoint: _setMaxPoint,
  inflate: _inflate,
  scale: _scale,
  scaleAboutCenter: scaleAboutCenter,
  getCenter: _getCenter,
  getLength: _getLength,
  getLengths: _getLengths,
  getMaxLength: _getMaxLength,
  getDiagonalLength: _getDiagonalLength,
  getMinPoint: _getMinPoint,
  getMaxPoint: _getMaxPoint,
  getXRange: _getXRange,
  getYRange: _getYRange,
  getZRange: _getZRange,
  getCorners: _getCorners,
  computeCornerPoints: _computeCornerPoints,
  computeLocalBounds: _computeLocalBounds,
  computeScale3: _computeScale,
  cutWithPlane: _cutWithPlane,
  intersectBox: _intersectBox,
  intersectPlane: _intersectPlane,
  intersect: _intersect,
  intersects: _intersects,
  containsPoint: _containsPoint,
  contains: contains,
  INIT_BOUNDS: INIT_BOUNDS
};
var vtkBoundingBox = _objectSpread({
  newInstance: newInstance
}, STATIC);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/Cell.js":
/*!***************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/Cell.js ***!
  \***************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkCell$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");
/* harmony import */ var _Core_Points_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/Points.js */ "./node_modules/@kitware/vtk.js/Common/Core/Points.js");




// vtkCell methods
// ----------------------------------------------------------------------------

function vtkCell(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkCell');
  publicAPI.initialize = function (points) {
    var pointIdsList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!pointIdsList) {
      model.points = points;
      model.pointsIds = new Array(points.getNumberOfPoints());
      for (var i = points.getNumberOfPoints() - 1; i >= 0; --i) {
        model.pointsIds[i] = i;
      }
    } else {
      model.pointsIds = pointIdsList;
      var triangleData = model.points.getData();
      if (triangleData.length !== 3 * model.pointsIds.length) {
        triangleData = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].newTypedArray(points.getDataType(), 3 * model.pointsIds.length);
      }
      var pointsData = points.getData();
      model.pointsIds.forEach(function (pointId, index) {
        // const start = 3 * pointId;
        // pointsData.set(p.subarray(start, start + 3), 3 * index);
        var pointOffset = 3 * pointId;
        var trianglePointOffset = 3 * index;
        triangleData[trianglePointOffset] = pointsData[pointOffset];
        triangleData[++trianglePointOffset] = pointsData[++pointOffset];
        triangleData[++trianglePointOffset] = pointsData[++pointOffset];
      });
      model.points.setData(triangleData);
    }
  };
  publicAPI.getBounds = function () {
    var nbPoints = model.points.getNumberOfPoints();
    var x = [];
    if (nbPoints) {
      model.points.getPoint(0, x);
      model.bounds[0] = x[0];
      model.bounds[1] = x[0];
      model.bounds[2] = x[1];
      model.bounds[3] = x[1];
      model.bounds[4] = x[2];
      model.bounds[5] = x[2];
      for (var i = 1; i < nbPoints; i++) {
        model.points.getPoint(i, x);
        model.bounds[0] = x[0] < model.bounds[0] ? x[0] : model.bounds[0];
        model.bounds[1] = x[0] > model.bounds[1] ? x[0] : model.bounds[1];
        model.bounds[2] = x[1] < model.bounds[2] ? x[1] : model.bounds[2];
        model.bounds[3] = x[1] > model.bounds[3] ? x[1] : model.bounds[3];
        model.bounds[4] = x[2] < model.bounds[4] ? x[2] : model.bounds[4];
        model.bounds[5] = x[2] > model.bounds[5] ? x[2] : model.bounds[5];
      }
    } else {
      Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["u"])(model.bounds);
    }
    return model.bounds;
  };
  publicAPI.getLength2 = function () {
    publicAPI.getBounds();
    var length = 0.0;
    var diff = 0;
    for (var i = 0; i < 3; i++) {
      diff = model.bounds[2 * i + 1] - model.bounds[2 * i];
      length += diff * diff;
    }
    return length;
  };
  publicAPI.getParametricDistance = function (pcoords) {
    var pDist;
    var pDistMax = 0.0;
    for (var i = 0; i < 3; i++) {
      if (pcoords[i] < 0.0) {
        pDist = -pcoords[i];
      } else if (pcoords[i] > 1.0) {
        pDist = pcoords[i] - 1.0;
      } else {
        // inside the cell in the parametric direction
        pDist = 0.0;
      }
      if (pDist > pDistMax) {
        pDistMax = pDist;
      }
    }
    return pDistMax;
  };
  publicAPI.getNumberOfPoints = function () {
    return model.points.getNumberOfPoints();
  };
  publicAPI.deepCopy = function (cell) {
    cell.initialize(model.points, model.pointsIds);
  };
  publicAPI.getCellDimension = function () {}; // virtual

  publicAPI.intersectWithLine = function (p1, p2, tol, t, x, pcoords, subId) {}; // virtual

  publicAPI.evaluatePosition = function (x, closestPoint, subId, pcoords, dist2, weights) {
    _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].vtkErrorMacro('vtkCell.evaluatePosition is not implemented.');
  }; // virtual
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  bounds: [-1, -1, -1, -1, -1, -1],
  pointsIds: []
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].obj(publicAPI, model);
  if (!model.points) {
    model.points = _Core_Points_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance();
  }
  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(publicAPI, model, ['points', 'pointsIds']);
  vtkCell(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].newInstance(extend, 'vtkCell'); // ----------------------------------------------------------------------------

var vtkCell$1 = {
  newInstance: newInstance,
  extend: extend
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/CellLinks.js":
/*!********************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/CellLinks.js ***!
  \********************************************************************/
/*! exports provided: InitLink, default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitLink", function() { return InitLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkCellLinks$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Cell.js");




// Global methods
// ----------------------------------------------------------------------------

var InitLink = {
  ncells: 0,
  cells: null
};
function resize(model, sz) {
  var newSize = sz;
  if (sz >= model.array.length) {
    newSize += model.array.length;
  }
  while (newSize > model.array.length) {
    model.array.push({
      ncells: 0,
      cells: null
    });
  }
  model.array.length = newSize;
} // ----------------------------------------------------------------------------
// vtkCellLinks methods
// ----------------------------------------------------------------------------

function vtkCellLinks(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkCellLinks');
  /**
   * Build the link list array. All subclasses of vtkAbstractCellLinks
   * must support this method.
   */

  publicAPI.buildLinks = function (data) {
    var numPts = data.getPoints().getNumberOfPoints();
    var numCells = data.getNumberOfCells(); // fill out lists with number of references to cells

    var linkLoc = new Uint32Array(numPts); // Use fast path if polydata

    if (data.isA('vtkPolyData')) {
      // traverse data to determine number of uses of each point
      for (var cellId = 0; cellId < numCells; ++cellId) {
        var _data$getCellPoints = data.getCellPoints(cellId),
          cellPointIds = _data$getCellPoints.cellPointIds;
        cellPointIds.forEach(function (cellPointId) {
          publicAPI.incrementLinkCount(cellPointId);
        });
      } // now allocate storage for the links

      publicAPI.allocateLinks(numPts);
      model.maxId = numPts - 1;
      var _loop = function _loop(_cellId) {
        var _data$getCellPoints2 = data.getCellPoints(_cellId),
          cellPointIds = _data$getCellPoints2.cellPointIds;
        cellPointIds.forEach(function (cellPointId) {
          publicAPI.insertCellReference(cellPointId, linkLoc[cellPointId]++, _cellId);
        });
      };
      for (var _cellId = 0; _cellId < numCells; ++_cellId) {
        _loop(_cellId);
      }
    } // any other type of dataset
    else {
      // traverse data to determine number of uses of each point
      for (var _cellId2 = 0; _cellId2 < numCells; _cellId2++) {
        // TODO: Currently not supported: const cell = data.getCell(cellId);
        var cell = _Cell_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance();
        cell.getPointsIds().forEach(function (cellPointId) {
          publicAPI.incrementLinkCount(cellPointId);
        });
      } // now allocate storage for the links

      publicAPI.allocateLinks(numPts);
      model.maxId = numPts - 1;
      var _loop2 = function _loop2(_cellId3) {
        // TODO: Currently not supported: const cell = data.getCell(cellId);
        var cell = _Cell_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance();
        cell.getPointsIds().forEach(function (cellPointId) {
          publicAPI.insertCellReference(cellPointId, linkLoc[cellPointId]++, _cellId3);
        });
      };
      for (var _cellId3 = 0; _cellId3 < numCells; ++_cellId3) {
        _loop2(_cellId3);
      }
    } // end else
  };
  /**
   * Build the link list array with a provided connectivity array.
   */
  // publicAPI.buildLinks = (data, connectivity) => {};

  /**
   * Allocate the specified number of links (i.e., number of points) that
   * will be built.
   */

  publicAPI.allocate = function (numLinks) {
    var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    model.array = Array(numLinks).fill().map(function () {
      return {
        ncells: 0,
        cells: null
      };
    });
    model.extend = ext;
    model.maxId = -1;
  };
  publicAPI.initialize = function () {
    model.array = null;
  };
  /**
   * Get a link structure given a point id.
   */

  publicAPI.getLink = function (ptId) {
    return model.array[ptId];
  };
  /**
   * Get the number of cells using the point specified by ptId.
   */

  publicAPI.getNcells = function (ptId) {
    return model.array[ptId].ncells;
  };
  /**
   * Return a list of cell ids using the point.
   */

  publicAPI.getCells = function (ptId) {
    return model.array[ptId].cells;
  };
  /**
   * Insert a new point into the cell-links data structure. The size parameter
   * is the initial size of the list.
   */

  publicAPI.insertNextPoint = function (numLinks) {
    model.array.push({
      ncells: numLinks,
      cells: Array(numLinks)
    });
    ++model.maxId;
  };
  /**
   * Insert a cell id into the list of cells (at the end) using the cell id
   * provided. (Make sure to extend the link list (if necessary) using the
   * method resizeCellList().)
   */

  publicAPI.insertNextCellReference = function (ptId, cellId) {
    model.array[ptId].cells[model.array[ptId].ncells++] = cellId;
  };
  /**
   * Delete point (and storage) by destroying links to using cells.
   */

  publicAPI.deletePoint = function (ptId) {
    model.array[ptId].ncells = 0;
    model.array[ptId].cells = null;
  };
  /**
   * Delete the reference to the cell (cellId) from the point (ptId). This
   * removes the reference to the cellId from the cell list, but does not
   * resize the list (recover memory with resizeCellList(), if necessary).
   */

  publicAPI.removeCellReference = function (cellId, ptId) {
    model.array[ptId].cells = model.array[ptId].cells.filter(function (cell) {
      return cell !== cellId;
    });
    model.array[ptId].ncells = model.array[ptId].cells.length;
  };
  /**
   * Add the reference to the cell (cellId) from the point (ptId). This
   * adds a reference to the cellId from the cell list, but does not resize
   * the list (extend memory with resizeCellList(), if necessary).
   */

  publicAPI.addCellReference = function (cellId, ptId) {
    model.array[ptId].cells[model.array[ptId].ncells++] = cellId;
  };
  /**
   * Change the length of a point's link list (i.e., list of cells using a
   * point) by the size specified.
   */

  publicAPI.resizeCellList = function (ptId, size) {
    model.array[ptId].cells.length = size;
  };
  /**
   * Reclaim any unused memory.
   */

  publicAPI.squeeze = function () {
    resize(model, model.maxId + 1);
  };
  /**
   * Reset to a state of no entries without freeing the memory.
   */

  publicAPI.reset = function () {
    model.maxId = -1;
  };
  /**
   * Standard DeepCopy method.  Since this object contains no reference
   * to other objects, there is no ShallowCopy.
   */

  publicAPI.deepCopy = function (src) {
    model.array = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(src.array);
    model.extend = src.extend;
    model.maxId = src.maxId;
  };
  /**
   * Increment the count of the number of cells using the point.
   */

  publicAPI.incrementLinkCount = function (ptId) {
    ++model.array[ptId].ncells;
  };
  publicAPI.allocateLinks = function (n) {
    for (var i = 0; i < n; ++i) {
      model.array[i].cells = new Array(model.array[i].ncells);
    }
  };
  /**
   * Insert a cell id into the list of cells using the point.
   */

  publicAPI.insertCellReference = function (ptId, pos, cellId) {
    model.array[ptId].cells[pos] = cellId;
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  array: null,
  // pointer to data
  maxId: 0,
  // maximum index inserted thus far
  extend: 0 // grow array by this point
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].obj(publicAPI, model);
  vtkCellLinks(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkCellLinks'); // ----------------------------------------------------------------------------

var vtkCellLinks$1 = {
  newInstance: newInstance,
  extend: extend
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/CellTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/CellTypes.js ***!
  \********************************************************************/
/*! exports provided: STATIC, default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC", function() { return STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkCellTypes$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellTypes/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/CellTypes/Constants.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
// Global methods
// ----------------------------------------------------------------------------

/**
 * Given an int (as defined in vtkCellType.h) identifier for a class
 * return it's classname.
 */

function getClassNameFromTypeId(typeId) {
  return typeId < _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellTypesStrings"].length ? _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellTypesStrings"][typeId] : 'UnknownClass';
}
/**
 * Given a data object classname, return it's int identified (as
 * defined in vtkCellType.h)
 */

function getTypeIdFromClassName(cellTypeString) {
  return _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellTypesStrings"].findIndex(cellTypeString);
}
/**
 * This convenience method is a fast check to determine if a cell type
 * represents a linear or nonlinear cell.  This is generally much more
 * efficient than getting the appropriate vtkCell and checking its IsLinear
 * method.
 */

function isLinear(type) {
  return type < _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellType"].VTK_QUADRATIC_EDGE || type === _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellType"].VTK_CONVEX_POINT_SET || type === _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellType"].VTK_POLYHEDRON;
}
function hasSubCells(cellType) {
  return cellType === _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellType"].VTK_TRIANGLE_STRIP || cellType === _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellType"].VTK_POLY_LINE || cellType === _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellType"].VTK_POLY_VERTEX;
} // ----------------------------------------------------------------------------
// Static API
// ----------------------------------------------------------------------------

var STATIC = {
  getClassNameFromTypeId: getClassNameFromTypeId,
  getTypeIdFromClassName: getTypeIdFromClassName,
  isLinear: isLinear,
  hasSubCells: hasSubCells
}; // ----------------------------------------------------------------------------
// vtkCellTypes methods
// ----------------------------------------------------------------------------

function vtkCellTypes(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkCellTypes');
  /**
   * Allocate memory for this array. Delete old storage only if necessary.
   */

  publicAPI.allocate = function () {
    var sz = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 512;
    var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    model.size = sz > 0 ? sz : 1;
    model.extend = ext > 0 ? ext : 1;
    model.maxId = -1;
    model.typeArray = new Uint8Array(sz);
    model.locationArray = new Uint32Array(sz);
  };
  /**
   * Add a cell at specified id.
   */

  publicAPI.insertCell = function (cellId, type, loc) {
    model.typeArray[cellId] = type;
    model.locationArray[cellId] = loc;
    if (cellId > model.maxId) {
      model.maxId = cellId;
    }
  };
  /**
   * Add a cell to the object in the next available slot.
   */

  publicAPI.insertNextCell = function (type, loc) {
    publicAPI.insertCell(++model.maxId, type, loc);
    return model.maxId;
  };
  /**
   * Specify a group of cell types. This version is provided to maintain
   * backwards compatibility and does a copy of the cellLocations
   */

  publicAPI.setCellTypes = function (ncells, cellTypes, cellLocations) {
    model.size = ncells;
    model.typeArray = cellTypes;
    model.locationArray = cellLocations;
    model.maxId = ncells - 1;
  };
  /**
   * Return the location of the cell in the associated vtkCellArray.
   */

  publicAPI.getCellLocation = function (cellId) {
    return model.locationArray[cellId];
  };
  /**
   * Delete cell by setting to nullptr cell type.
   */

  publicAPI.deleteCell = function (cellId) {
    model.typeArray[cellId] = _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_2__["CellType"].VTK_EMPTY_CELL;
  };
  /**
   * Return the number of types in the list.
   */

  publicAPI.getNumberOfTypes = function () {
    return model.maxId + 1;
  };
  /**
   * Return true if type specified is contained in list; false otherwise.
   */

  publicAPI.isType = function (type) {
    var numTypes = publicAPI.getNumberOfTypes();
    for (var i = 0; i < numTypes; ++i) {
      if (type === publicAPI.getCellType(i)) {
        return true;
      }
    }
    return false;
  };
  /**
   * Add the type specified to the end of the list. Range checking is performed.
   */

  publicAPI.insertNextType = function (type) {
    return publicAPI.insertNextCell(type, -1);
  };
  /**
   * Return the type of cell.
   */

  publicAPI.getCellType = function (cellId) {
    return model.typeArray[cellId];
  };
  /**
   * Reclaim any extra memory.
   */
  // TODO: publicAPI.squeeze = () =>  {};

  /**
   * Initialize object without releasing memory.
   */

  publicAPI.reset = function () {
    model.maxId = -1;
  };
  /**
   * Standard DeepCopy method.  Since this object contains no reference
   * to other objects, there is no ShallowCopy.
   */

  publicAPI.deepCopy = function (src) {
    publicAPI.allocate(src.getSize(), src.getExtend());
    model.typeArray.set(src.getTypeArray());
    model.locationArray.set(src.getLocationArray());
    model.maxId = src.getMaxId();
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  // typeArray: null, // pointer to types array
  // locationArray: null;   // pointer to array of offsets
  size: 0,
  // allocated size of data
  maxId: -1,
  // maximum index inserted thus far
  extend: 1000 // grow array by this point
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].obj(publicAPI, model);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(publicAPI, model, ['size', 'maxId', 'extend']);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].getArray(publicAPI, model, ['typeArray', 'locationArray']);
  vtkCellTypes(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkCellTypes'); // ----------------------------------------------------------------------------

var vtkCellTypes$1 = _objectSpread({
  newInstance: newInstance,
  extend: extend
}, STATIC);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/CellTypes/Constants.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/CellTypes/Constants.js ***!
  \******************************************************************************/
/*! exports provided: CellType, CellTypesStrings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellType", function() { return CellType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellTypesStrings", function() { return CellTypesStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constants; });
var CellType = {
  // Linear cells
  VTK_EMPTY_CELL: 0,
  VTK_VERTEX: 1,
  VTK_POLY_VERTEX: 2,
  VTK_LINE: 3,
  VTK_POLY_LINE: 4,
  VTK_TRIANGLE: 5,
  VTK_TRIANGLE_STRIP: 6,
  VTK_POLYGON: 7,
  VTK_PIXEL: 8,
  VTK_QUAD: 9,
  VTK_TETRA: 10,
  VTK_VOXEL: 11,
  VTK_HEXAHEDRON: 12,
  VTK_WEDGE: 13,
  VTK_PYRAMID: 14,
  VTK_PENTAGONAL_PRISM: 15,
  VTK_HEXAGONAL_PRISM: 16,
  // Quadratic, isoparametric cells
  VTK_QUADRATIC_EDGE: 21,
  VTK_QUADRATIC_TRIANGLE: 22,
  VTK_QUADRATIC_QUAD: 23,
  VTK_QUADRATIC_POLYGON: 36,
  VTK_QUADRATIC_TETRA: 24,
  VTK_QUADRATIC_HEXAHEDRON: 25,
  VTK_QUADRATIC_WEDGE: 26,
  VTK_QUADRATIC_PYRAMID: 27,
  VTK_BIQUADRATIC_QUAD: 28,
  VTK_TRIQUADRATIC_HEXAHEDRON: 29,
  VTK_QUADRATIC_LINEAR_QUAD: 30,
  VTK_QUADRATIC_LINEAR_WEDGE: 31,
  VTK_BIQUADRATIC_QUADRATIC_WEDGE: 32,
  VTK_BIQUADRATIC_QUADRATIC_HEXAHEDRON: 33,
  VTK_BIQUADRATIC_TRIANGLE: 34,
  // Cubic, isoparametric cell
  VTK_CUBIC_LINE: 35,
  // Special class of cells formed by convex group of points
  VTK_CONVEX_POINT_SET: 41,
  // Polyhedron cell (consisting of polygonal faces)
  VTK_POLYHEDRON: 42,
  // Higher order cells in parametric form
  VTK_PARAMETRIC_CURVE: 51,
  VTK_PARAMETRIC_SURFACE: 52,
  VTK_PARAMETRIC_TRI_SURFACE: 53,
  VTK_PARAMETRIC_QUAD_SURFACE: 54,
  VTK_PARAMETRIC_TETRA_REGION: 55,
  VTK_PARAMETRIC_HEX_REGION: 56,
  // Higher order cells
  VTK_HIGHER_ORDER_EDGE: 60,
  VTK_HIGHER_ORDER_TRIANGLE: 61,
  VTK_HIGHER_ORDER_QUAD: 62,
  VTK_HIGHER_ORDER_POLYGON: 63,
  VTK_HIGHER_ORDER_TETRAHEDRON: 64,
  VTK_HIGHER_ORDER_WEDGE: 65,
  VTK_HIGHER_ORDER_PYRAMID: 66,
  VTK_HIGHER_ORDER_HEXAHEDRON: 67,
  // Arbitrary order Lagrange elements (formulated separated from generic higher order cells)
  VTK_LAGRANGE_CURVE: 68,
  VTK_LAGRANGE_TRIANGLE: 69,
  VTK_LAGRANGE_QUADRILATERAL: 70,
  VTK_LAGRANGE_TETRAHEDRON: 71,
  VTK_LAGRANGE_HEXAHEDRON: 72,
  VTK_LAGRANGE_WEDGE: 73,
  VTK_LAGRANGE_PYRAMID: 74,
  VTK_NUMBER_OF_CELL_TYPES: 75
}; // This list should contain the cell class names in
// the same order as in CellType.

var CellTypesStrings = ['vtkEmptyCell', 'vtkVertex', 'vtkPolyVertex', 'vtkLine', 'vtkPolyLine', 'vtkTriangle', 'vtkTriangleStrip', 'vtkPolygon', 'vtkPixel', 'vtkQuad', 'vtkTetra', 'vtkVoxel', 'vtkHexahedron', 'vtkWedge', 'vtkPyramid', 'vtkPentagonalPrism', 'vtkHexagonalPrism', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'vtkQuadraticEdge', 'vtkQuadraticTriangle', 'vtkQuadraticQuad', 'vtkQuadraticTetra', 'vtkQuadraticHexahedron', 'vtkQuadraticWedge', 'vtkQuadraticPyramid', 'vtkBiQuadraticQuad', 'vtkTriQuadraticHexahedron', 'vtkQuadraticLinearQuad', 'vtkQuadraticLinearWedge', 'vtkBiQuadraticQuadraticWedge', 'vtkBiQuadraticQuadraticHexahedron', 'vtkBiQuadraticTriangle', 'vtkCubicLine', 'vtkQuadraticPolygon', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'vtkConvexPointSet', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'vtkParametricCurve', 'vtkParametricSurface', 'vtkParametricTriSurface', 'vtkParametricQuadSurface', 'vtkParametricTetraRegion', 'vtkParametricHexRegion', 'UnknownClass', 'UnknownClass', 'UnknownClass', 'vtkHigherOrderEdge', 'vtkHigherOrderTriangle', 'vtkHigherOrderQuad', 'vtkHigherOrderPolygon', 'vtkHigherOrderTetrahedron', 'vtkHigherOrderWedge', 'vtkHigherOrderPyramid', 'vtkHigherOrderHexahedron'];
var Constants = {
  CellType: CellType,
  CellTypesStrings: CellTypesStrings
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSet.js":
/*!******************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/DataSet.js ***!
  \******************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkDataSet$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _vtk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vtk.js */ "./node_modules/@kitware/vtk.js/vtk.js");
/* harmony import */ var _DataSetAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSetAttributes.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes.js");
/* harmony import */ var _DataSet_Constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataSet/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSet/Constants.js");





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
// import * as vtkMath from '../../Core/Math';
//
// function getBounds(dataset) {
//   if (dataset.bounds) {
//     return dataset.bounds;
//   }
//   if (dataset.type && dataset[dataset.type]) {
//     const ds = dataset[dataset.type];
//     if (ds.bounds) {
//       return ds.bounds;
//     }
//     if (ds.Points && ds.Points.bounds) {
//       return ds.Points.bounds;
//     }
//     if (ds.Points && ds.Points.values) {
//       const array = ds.Points.values;
//       const bbox = [...vtkBoundingBox.INIT_BOUNDS];
//       const size = array.length;
//       const delta = ds.Points.numberOfComponents ? ds.Points.numberOfComponents : 3;
//       for (let idx = 0; idx < size; idx += delta) {
//         vtkBoundingBox.addPoint(bbox, array[idx * delta], array[(idx * delta) + 1], array[(idx * delta) + 2]);
//       }
//       ds.Points.bounds = bbox;
//       return ds.Points.bounds;
//     }
//   }
//   return vtkMath.createUninitializedBounds();
// }
// ----------------------------------------------------------------------------
// Global methods
// ----------------------------------------------------------------------------

var DATASET_FIELDS = ['pointData', 'cellData', 'fieldData']; // ----------------------------------------------------------------------------
// vtkDataSet methods
// ----------------------------------------------------------------------------

function vtkDataSet(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkDataSet'); // Add dataset attributes

  DATASET_FIELDS.forEach(function (fieldName) {
    if (!model[fieldName]) {
      model[fieldName] = _DataSetAttributes_js__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
    } else {
      model[fieldName] = Object(_vtk_js__WEBPACK_IMPORTED_MODULE_2__["default"])(model[fieldName]);
    }
  });
  var superShallowCopy = publicAPI.shallowCopy;
  publicAPI.shallowCopy = function (other) {
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    superShallowCopy(other, debug);
    DATASET_FIELDS.forEach(function (fieldName) {
      model[fieldName] = _DataSetAttributes_js__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
      model[fieldName].shallowCopy(other.getReferenceByName(fieldName));
    });
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {// pointData: null,
  // cellData: null,
  // fieldData: null,
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues); // Object methods

  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].obj(publicAPI, model);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].setGet(publicAPI, model, DATASET_FIELDS); // Object specific methods

  vtkDataSet(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkDataSet'); // ----------------------------------------------------------------------------

var vtkDataSet$1 = _objectSpread({
  newInstance: newInstance,
  extend: extend
}, _DataSet_Constants_js__WEBPACK_IMPORTED_MODULE_4__["default"]);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSet/Constants.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/DataSet/Constants.js ***!
  \****************************************************************************/
/*! exports provided: FieldAssociations, FieldDataTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldAssociations", function() { return FieldAssociations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDataTypes", function() { return FieldDataTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constants; });
// Specify how data arrays can be used by data objects
var FieldDataTypes = {
  UNIFORM: 0,
  // data that does not vary over points/cells/etc.
  DATA_OBJECT_FIELD: 0,
  // to match VTK
  COORDINATE: 1,
  // data that specifies the location of each point
  POINT_DATA: 1,
  // to match VTK
  POINT: 2,
  // data defined at each point, but that does not specify the point location
  POINT_FIELD_DATA: 2,
  // to match VTK
  CELL: 3,
  // data defined at each cell, but that does not specify the cell
  CELL_FIELD_DATA: 3,
  // to match VTK
  VERTEX: 4,
  // data defined at each graph vertex, but that does not specify the graph vertex
  VERTEX_FIELD_DATA: 4,
  // to match VTK
  EDGE: 5,
  // data defined at each graph edge, but that does not specify the graph edge
  EDGE_FIELD_DATA: 5,
  // to match VTK
  ROW: 6,
  // data specifying a table row
  ROW_DATA: 6 // to match VTK
};

var FieldAssociations = {
  FIELD_ASSOCIATION_POINTS: 0,
  FIELD_ASSOCIATION_CELLS: 1,
  FIELD_ASSOCIATION_NONE: 2,
  FIELD_ASSOCIATION_POINTS_THEN_CELLS: 3,
  FIELD_ASSOCIATION_VERTICES: 4,
  FIELD_ASSOCIATION_EDGES: 5,
  FIELD_ASSOCIATION_ROWS: 6,
  NUMBER_OF_ASSOCIATIONS: 7
};
var Constants = {
  FieldDataTypes: FieldDataTypes,
  FieldAssociations: FieldAssociations
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes.js ***!
  \****************************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkDataSetAttributes$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _DataSetAttributes_FieldData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSetAttributes/FieldData.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes/FieldData.js");
/* harmony import */ var _DataSetAttributes_Constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataSetAttributes/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes/Constants.js");
/* harmony import */ var _Core_DataArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/DataArray.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray.js");





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var AttributeTypes = _DataSetAttributes_Constants_js__WEBPACK_IMPORTED_MODULE_3__["default"].AttributeTypes,
  AttributeCopyOperations = _DataSetAttributes_Constants_js__WEBPACK_IMPORTED_MODULE_3__["default"].AttributeCopyOperations;
var vtkWarningMacro = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].vtkWarningMacro; // ----------------------------------------------------------------------------
// vtkDataSetAttributes methods
// ----------------------------------------------------------------------------

function vtkDataSetAttributes(publicAPI, model) {
  var attrTypes = ['Scalars', 'Vectors', 'Normals', 'TCoords', 'Tensors', 'GlobalIds', 'PedigreeIds'];
  function cleanAttributeType(attType) {
    // Given an integer or string, convert the result to one of the
    // strings in the "attrTypes" array above or null (if
    // no match is found)
    var cleanAttType = attrTypes.find(function (ee) {
      return AttributeTypes[ee.toUpperCase()] === attType || typeof attType !== 'number' && ee.toLowerCase() === attType.toLowerCase();
    });
    if (typeof cleanAttType === 'undefined') {
      cleanAttType = null;
    }
    return cleanAttType;
  } // Set our className

  model.classHierarchy.push('vtkDataSetAttributes');
  publicAPI.checkNumberOfComponents = function (x) {
    return true;
  }; // TODO

  publicAPI.setAttribute = function (arr, uncleanAttType) {
    var attType = cleanAttributeType(uncleanAttType);
    if (arr && attType.toUpperCase() === 'PEDIGREEIDS' && !arr.isA('vtkDataArray')) {
      vtkWarningMacro("Cannot set attribute ".concat(attType, ". The attribute must be a vtkDataArray."));
      return -1;
    }
    if (arr && !publicAPI.checkNumberOfComponents(arr, attType)) {
      vtkWarningMacro("Cannot set attribute ".concat(attType, ". Incorrect number of components."));
      return -1;
    }
    var currentAttribute = model["active".concat(attType)];
    if (currentAttribute >= 0 && currentAttribute < model.arrays.length) {
      if (model.arrays[currentAttribute] === arr) {
        return currentAttribute;
      }
      publicAPI.removeArrayByIndex(currentAttribute);
    }
    if (arr) {
      currentAttribute = publicAPI.addArray(arr);
      model["active".concat(attType)] = currentAttribute;
    } else {
      model["active".concat(attType)] = -1;
    }
    publicAPI.modified();
    return model["active".concat(attType)];
  };
  publicAPI.getAttributes = function (arr) {
    return attrTypes.filter(function (attrType) {
      return publicAPI["get".concat(attrType)]() === arr;
    });
  };
  publicAPI.setActiveAttributeByName = function (arrayName, attType) {
    return publicAPI.setActiveAttributeByIndex(publicAPI.getArrayWithIndex(arrayName).index, attType);
  };
  publicAPI.setActiveAttributeByIndex = function (arrayIdx, uncleanAttType) {
    var attType = cleanAttributeType(uncleanAttType);
    if (arrayIdx >= 0 && arrayIdx < model.arrays.length) {
      if (attType.toUpperCase() !== 'PEDIGREEIDS') {
        var arr = publicAPI.getArrayByIndex(arrayIdx);
        if (!arr.isA('vtkDataArray')) {
          vtkWarningMacro("Cannot set attribute ".concat(attType, ". Only vtkDataArray subclasses can be set as active attributes."));
          return -1;
        }
        if (!publicAPI.checkNumberOfComponents(arr, attType)) {
          vtkWarningMacro("Cannot set attribute ".concat(attType, ". Incorrect number of components."));
          return -1;
        }
      }
      model["active".concat(attType)] = arrayIdx;
      publicAPI.modified();
      return arrayIdx;
    }
    if (arrayIdx === -1) {
      model["active".concat(attType)] = arrayIdx;
      publicAPI.modified();
    }
    return -1;
  };
  publicAPI.getActiveAttribute = function (attType) {
    // Given an integer enum value or a string (with random capitalization),
    // find the matching string in attrTypes.
    var cleanAttType = cleanAttributeType(attType);
    return publicAPI["get".concat(cleanAttType)]();
  }; // Override to allow proper handling of active attributes

  publicAPI.removeAllArrays = function () {
    model.arrays = [];
    attrTypes.forEach(function (attType) {
      model["active".concat(attType)] = -1;
    });
  }; // Override to allow proper handling of active attributes

  publicAPI.removeArray = function (arrayName) {
    model.arrays = model.arrays.filter(function (entry, idx) {
      if (arrayName === entry.data.getName()) {
        // Found the array to remove, but is it an active attribute?
        attrTypes.forEach(function (attType) {
          if (idx === model["active".concat(attType)]) {
            model["active".concat(attType)] = -1;
          }
        });
        return false;
      }
      return true;
    });
  }; // Override to allow proper handling of active attributes

  publicAPI.removeArrayByIndex = function (arrayIdx) {
    model.arrays = model.arrays.filter(function (entry, idx) {
      return idx !== arrayIdx;
    });
    attrTypes.forEach(function (attType) {
      if (arrayIdx === model["active".concat(attType)]) {
        model["active".concat(attType)] = -1;
      }
    });
  };
  attrTypes.forEach(function (value) {
    var activeVal = "active".concat(value);
    publicAPI["get".concat(value)] = function () {
      return publicAPI.getArrayByIndex(model[activeVal]);
    };
    publicAPI["set".concat(value)] = function (da) {
      return publicAPI.setAttribute(da, value);
    };
    publicAPI["setActive".concat(value)] = function (arrayName) {
      return publicAPI.setActiveAttributeByIndex(publicAPI.getArrayWithIndex(arrayName).index, value);
    };
    publicAPI["copy".concat(value, "Off")] = function () {
      var attType = value.toUpperCase();
      model.copyAttributeFlags[AttributeCopyOperations.PASSDATA][AttributeTypes[attType]] = false;
    };
    publicAPI["copy".concat(value, "On")] = function () {
      var attType = value.toUpperCase();
      model.copyAttributeFlags[AttributeCopyOperations.PASSDATA][AttributeTypes[attType]] = true;
    };
  });
  publicAPI.initializeAttributeCopyFlags = function () {
    // Default to copying all attributes in every circumstance:
    model.copyAttributeFlags = [];
    Object.keys(AttributeCopyOperations).filter(function (op) {
      return op !== 'ALLCOPY';
    }).forEach(function (attCopyOp) {
      model.copyAttributeFlags[AttributeCopyOperations[attCopyOp]] = Object.keys(AttributeTypes).filter(function (ty) {
        return ty !== 'NUM_ATTRIBUTES';
      }).reduce(function (a, b) {
        a[AttributeTypes[b]] = true;
        return a;
      }, []);
    }); // Override some operations where we don't want to copy:

    model.copyAttributeFlags[AttributeCopyOperations.COPYTUPLE][AttributeTypes.GLOBALIDS] = false;
    model.copyAttributeFlags[AttributeCopyOperations.INTERPOLATE][AttributeTypes.GLOBALIDS] = false;
    model.copyAttributeFlags[AttributeCopyOperations.COPYTUPLE][AttributeTypes.PEDIGREEIDS] = false;
  };
  publicAPI.initialize = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].chain(publicAPI.initialize, publicAPI.initializeAttributeCopyFlags); // Process dataArrays if any

  if (model.dataArrays && Object.keys(model.dataArrays).length) {
    Object.keys(model.dataArrays).forEach(function (name) {
      if (!model.dataArrays[name].ref && model.dataArrays[name].type === 'vtkDataArray') {
        publicAPI.addArray(_Core_DataArray_js__WEBPACK_IMPORTED_MODULE_4__["default"].newInstance(model.dataArrays[name]));
      }
    });
  }
  var superShallowCopy = publicAPI.shallowCopy;
  publicAPI.shallowCopy = function (other, debug) {
    superShallowCopy(other, debug);
    model.arrays = other.getArrays().map(function (arr) {
      var arrNew = arr.newClone();
      arrNew.shallowCopy(arr, debug);
      return {
        data: arrNew
      };
    });
  };
  publicAPI.initializeAttributeCopyFlags();
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  activeScalars: -1,
  activeVectors: -1,
  activeTensors: -1,
  activeNormals: -1,
  activeTCoords: -1,
  activeGlobalIds: -1,
  activePedigreeIds: -1
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues); // Object methods

  _DataSetAttributes_FieldData_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(publicAPI, model, initialValues);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].setGet(publicAPI, model, ['activeScalars', 'activeNormals', 'activeTCoords', 'activeVectors', 'activeTensors', 'activeGlobalIds', 'activePedigreeIds']);
  if (!model.arrays) {
    model.arrays = {};
  } // Object specific methods

  vtkDataSetAttributes(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkDataSetAttributes'); // ----------------------------------------------------------------------------

var vtkDataSetAttributes$1 = _objectSpread({
  newInstance: newInstance,
  extend: extend
}, _DataSetAttributes_Constants_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes/Constants.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes/Constants.js ***!
  \**************************************************************************************/
/*! exports provided: AttributeCopyOperations, AttributeLimitTypes, AttributeTypes, CellGhostTypes, DesiredOutputPrecision, PointGhostTypes, default, ghostArrayName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCopyOperations", function() { return AttributeCopyOperations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeLimitTypes", function() { return AttributeLimitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeTypes", function() { return AttributeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellGhostTypes", function() { return CellGhostTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesiredOutputPrecision", function() { return DesiredOutputPrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointGhostTypes", function() { return PointGhostTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ghostArrayName", function() { return ghostArrayName; });
var AttributeTypes = {
  SCALARS: 0,
  VECTORS: 1,
  NORMALS: 2,
  TCOORDS: 3,
  TENSORS: 4,
  GLOBALIDS: 5,
  PEDIGREEIDS: 6,
  EDGEFLAG: 7,
  NUM_ATTRIBUTES: 8
};
var AttributeLimitTypes = {
  MAX: 0,
  EXACT: 1,
  NOLIMIT: 2
};
var CellGhostTypes = {
  DUPLICATECELL: 1,
  // the cell is present on multiple processors
  HIGHCONNECTIVITYCELL: 2,
  // the cell has more neighbors than in a regular mesh
  LOWCONNECTIVITYCELL: 4,
  // the cell has less neighbors than in a regular mesh
  REFINEDCELL: 8,
  // other cells are present that refines it.
  EXTERIORCELL: 16,
  // the cell is on the exterior of the data set
  HIDDENCELL: 32 // the cell is needed to maintain connectivity, but the data values should be ignored.
};

var PointGhostTypes = {
  DUPLICATEPOINT: 1,
  // the cell is present on multiple processors
  HIDDENPOINT: 2 // the point is needed to maintain connectivity, but the data values should be ignored.
};

var AttributeCopyOperations = {
  COPYTUPLE: 0,
  INTERPOLATE: 1,
  PASSDATA: 2,
  ALLCOPY: 3 // all of the above
};

var ghostArrayName = 'vtkGhostType';
var DesiredOutputPrecision = {
  DEFAULT: 0,
  // use the point type that does not truncate any data
  SINGLE: 1,
  // use Float32Array
  DOUBLE: 2 // use Float64Array
};

var Constants = {
  AttributeCopyOperations: AttributeCopyOperations,
  AttributeLimitTypes: AttributeLimitTypes,
  AttributeTypes: AttributeTypes,
  CellGhostTypes: CellGhostTypes,
  DesiredOutputPrecision: DesiredOutputPrecision,
  PointGhostTypes: PointGhostTypes,
  ghostArrayName: ghostArrayName
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes/FieldData.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes/FieldData.js ***!
  \**************************************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkFieldData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _vtk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../vtk.js */ "./node_modules/@kitware/vtk.js/vtk.js");
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Core_DataArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/DataArray.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray.js");



var vtkErrorMacro = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].vtkErrorMacro,
  vtkWarningMacro = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].vtkWarningMacro; // ----------------------------------------------------------------------------
// vtkFieldData methods
// ----------------------------------------------------------------------------

function vtkFieldData(publicAPI, model) {
  model.classHierarchy.push('vtkFieldData');
  var superGetState = publicAPI.getState; // Decode serialized data if any

  if (model.arrays) {
    model.arrays = model.arrays.map(function (item) {
      return {
        data: Object(_vtk_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item.data)
      };
    });
  }
  publicAPI.initialize = function () {
    publicAPI.initializeFields();
    publicAPI.copyAllOn();
    publicAPI.clearFieldFlags();
  };
  publicAPI.initializeFields = function () {
    model.arrays = [];
    model.copyFieldFlags = {};
    publicAPI.modified();
  };
  publicAPI.copyStructure = function (other) {
    publicAPI.initializeFields();
    model.copyFieldFlags = other.getCopyFieldFlags().map(function (x) {
      return x;
    }); // Deep-copy

    model.arrays = other.arrays().map(function (x) {
      return {
        array: x
      };
    }); // Deep-copy
    // TODO: Copy array information objects (once we support information objects)
  };

  publicAPI.getNumberOfArrays = function () {
    return model.arrays.length;
  };
  publicAPI.getNumberOfActiveArrays = function () {
    return model.arrays.length;
  };
  publicAPI.addArray = function (arr) {
    var name = arr.getName();
    var _publicAPI$getArrayWi = publicAPI.getArrayWithIndex(name),
      array = _publicAPI$getArrayWi.array,
      index = _publicAPI$getArrayWi.index;
    if (array != null) {
      model.arrays[index] = {
        data: arr
      };
      return index;
    }
    model.arrays = [].concat(model.arrays, {
      data: arr
    });
    return model.arrays.length - 1;
  };
  publicAPI.removeAllArrays = function () {
    model.arrays = [];
  };
  publicAPI.removeArray = function (arrayName) {
    model.arrays = model.arrays.filter(function (entry) {
      return arrayName !== entry.data.getName();
    });
  };
  publicAPI.removeArrayByIndex = function (arrayIdx) {
    model.arrays = model.arrays.filter(function (entry, idx) {
      return idx !== arrayIdx;
    });
  };
  publicAPI.getArrays = function () {
    return model.arrays.map(function (entry) {
      return entry.data;
    });
  };
  publicAPI.getArray = function (arraySpec) {
    return typeof arraySpec === 'number' ? publicAPI.getArrayByIndex(arraySpec) : publicAPI.getArrayByName(arraySpec);
  };
  publicAPI.getArrayByName = function (arrayName) {
    return model.arrays.reduce(function (a, b, i) {
      return b.data.getName() === arrayName ? b.data : a;
    }, null);
  };
  publicAPI.getArrayWithIndex = function (arrayName) {
    return model.arrays.reduce(function (a, b, i) {
      return b.data && b.data.getName() === arrayName ? {
        array: b.data,
        index: i
      } : a;
    }, {
      array: null,
      index: -1
    });
  };
  publicAPI.getArrayByIndex = function (idx) {
    return idx >= 0 && idx < model.arrays.length ? model.arrays[idx].data : null;
  };
  publicAPI.hasArray = function (arrayName) {
    return publicAPI.getArrayWithIndex(arrayName).index >= 0;
  };
  publicAPI.getArrayName = function (idx) {
    var arr = model.arrays[idx];
    return arr ? arr.data.getName() : '';
  };
  publicAPI.getCopyFieldFlags = function () {
    return model.copyFieldFlags;
  };
  publicAPI.getFlag = function (arrayName) {
    return model.copyFieldFlags[arrayName];
  };
  publicAPI.passData = function (other) {
    var fromId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    var toId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
    other.getArrays().forEach(function (arr) {
      var copyFlag = publicAPI.getFlag(arr.getName());
      if (copyFlag !== false && !(model.doCopyAllOff && copyFlag !== true) && arr) {
        var destArr = publicAPI.getArrayByName(arr.getName());
        if (!destArr) {
          if (fromId < 0 || fromId > arr.getNumberOfTuples()) {
            // TBD: should this be a deep or a shallow copy?
            publicAPI.addArray(arr);
            other.getAttributes(arr).forEach(function (attrType) {
              publicAPI.setAttribute(arr, attrType);
            });
          } else {
            var ncomps = arr.getNumberOfComponents();
            var newSize = arr.getNumberOfValues();
            var tId = toId > -1 ? toId : fromId;
            if (newSize <= tId * ncomps) {
              newSize = (tId + 1) * ncomps;
            }
            destArr = _Core_DataArray_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance({
              name: arr.getName(),
              dataType: arr.getDataType(),
              numberOfComponents: ncomps,
              values: _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newTypedArray(arr.getDataType(), newSize),
              size: 0
            });
            destArr.insertTuple(tId, arr.getTuple(fromId));
            publicAPI.addArray(destArr);
            other.getAttributes(arr).forEach(function (attrType) {
              publicAPI.setAttribute(destArr, attrType);
            });
          }
        } else if (arr.getNumberOfComponents() === destArr.getNumberOfComponents()) {
          if (fromId > -1 && fromId < arr.getNumberOfTuples()) {
            var _tId = toId > -1 ? toId : fromId;
            destArr.insertTuple(_tId, arr.getTuple(fromId));
          } else {
            // if `fromId` is not provided, just copy all (or as much possible)
            // from `arr` to `destArr`.
            destArr.insertTuples(0, arr.getTuples());
          }
        } else {
          vtkErrorMacro('Unhandled case in passData');
        }
      }
    });
  };
  publicAPI.interpolateData = function (other) {
    var fromId1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    var fromId2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
    var toId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
    var t = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
    other.getArrays().forEach(function (arr) {
      var copyFlag = publicAPI.getFlag(arr.getName());
      if (copyFlag !== false && !(model.doCopyAllOff && copyFlag !== true) && arr) {
        var destArr = publicAPI.getArrayByName(arr.getName());
        if (!destArr) {
          if (fromId1 < 0 || fromId2 < 0 || fromId1 > arr.getNumberOfTuples()) {
            // TBD: should this be a deep or a shallow copy?
            publicAPI.addArray(arr);
            other.getAttributes(arr).forEach(function (attrType) {
              publicAPI.setAttribute(arr, attrType);
            });
          } else {
            var ncomps = arr.getNumberOfComponents();
            var newSize = arr.getNumberOfValues(); // TODO: Is this supposed to happen?

            var tId = toId > -1 ? toId : fromId1;
            if (newSize <= tId * ncomps) {
              newSize = (tId + 1) * ncomps;
            }
            destArr = _Core_DataArray_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance({
              name: arr.getName(),
              dataType: arr.getDataType(),
              numberOfComponents: ncomps,
              values: _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newTypedArray(arr.getDataType(), newSize),
              size: 0
            });
            destArr.interpolateTuple(tId, arr, fromId1, arr, fromId2, t);
            publicAPI.addArray(destArr);
            other.getAttributes(arr).forEach(function (attrType) {
              publicAPI.setAttribute(destArr, attrType);
            });
          }
        } else if (arr.getNumberOfComponents() === destArr.getNumberOfComponents()) {
          if (fromId1 > -1 && fromId1 < arr.getNumberOfTuples()) {
            var _tId2 = toId > -1 ? toId : fromId1;
            destArr.interpolateTuple(_tId2, arr, fromId1, arr, fromId2, t);
            vtkWarningMacro('Unexpected case in interpolateData');
          } else {
            // if `fromId` is not provided, just copy all (or as much possible)
            // from `arr` to `destArr`.
            destArr.insertTuples(arr.getTuples());
          }
        } else {
          vtkErrorMacro('Unhandled case in interpolateData');
        }
      }
    });
  };
  publicAPI.copyFieldOn = function (arrayName) {
    model.copyFieldFlags[arrayName] = true;
  };
  publicAPI.copyFieldOff = function (arrayName) {
    model.copyFieldFlags[arrayName] = false;
  };
  publicAPI.copyAllOn = function () {
    if (!model.doCopyAllOn || model.doCopyAllOff) {
      model.doCopyAllOn = true;
      model.doCopyAllOff = false;
      publicAPI.modified();
    }
  };
  publicAPI.copyAllOff = function () {
    if (model.doCopyAllOn || !model.doCopyAllOff) {
      model.doCopyAllOn = false;
      model.doCopyAllOff = true;
      publicAPI.modified();
    }
  };
  publicAPI.clearFieldFlags = function () {
    model.copyFieldFlags = {};
  };
  publicAPI.deepCopy = function (other) {
    model.arrays = other.getArrays().map(function (arr) {
      var arrNew = arr.newClone();
      arrNew.deepCopy(arr);
      return {
        data: arrNew
      };
    });
  };
  publicAPI.copyFlags = function (other) {
    return other.getCopyFieldFlags().map(function (x) {
      return x;
    });
  }; // TODO: publicAPI.squeeze = () => model.arrays.forEach(entry => entry.data.squeeze());

  publicAPI.reset = function () {
    return model.arrays.forEach(function (entry) {
      return entry.data.reset();
    });
  }; // TODO: getActualMemorySize

  publicAPI.getMTime = function () {
    return model.arrays.reduce(function (a, b) {
      return b.data.getMTime() > a ? b.data.getMTime() : a;
    }, model.mtime);
  }; // TODO: publicAPI.getField = (ids, other) => { copy ids from other into this model's arrays }
  // TODO: publicAPI.getArrayContainingComponent = (component) => ...

  publicAPI.getNumberOfComponents = function () {
    return model.arrays.reduce(function (a, b) {
      return a + b.data.getNumberOfComponents();
    }, 0);
  };
  publicAPI.getNumberOfTuples = function () {
    return model.arrays.length > 0 ? model.arrays[0].getNumberOfTuples() : 0;
  };
  publicAPI.getState = function () {
    var result = superGetState();
    if (result) {
      result.arrays = model.arrays.map(function (item) {
        return {
          data: item.data.getState()
        };
      });
    }
    return result;
  };
}
var DEFAULT_VALUES = {
  arrays: [],
  copyFieldFlags: [],
  // fields not to copy
  doCopyAllOn: true,
  doCopyAllOff: false
};
function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].obj(publicAPI, model);
  vtkFieldData(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkFieldData'); // ----------------------------------------------------------------------------

var vtkFieldData$1 = {
  newInstance: newInstance,
  extend: extend
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/EdgeLocator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/EdgeLocator.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkEdgeLocator; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var EdgeLocator = /*#__PURE__*/function () {
  function EdgeLocator() {
    var oriented = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EdgeLocator);
    this.oriented = oriented;
    this.edgeMap = new Map();
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EdgeLocator, [{
    key: "initialize",
    value: function initialize() {
      this.edgeMap.clear();
    }
  }, {
    key: "computeEdgeKey",
    value: function computeEdgeKey(pointId0, pointId1) {
      return this.oriented || pointId0 < pointId1 ?
      // Cantor pairing function:
      0.5 * (pointId0 * pointId1) * (pointId0 * pointId1 + 1) + pointId1 : 0.5 * (pointId1 * pointId0) * (pointId1 * pointId0 + 1) + pointId0;
    }
  }, {
    key: "insertUniqueEdge",
    value: function insertUniqueEdge(pointId0, pointId1, newEdgeValue) {
      // Generate a unique key
      var key = this.computeEdgeKey(pointId0, pointId1);
      var node = this.edgeMap.get(key);
      if (!node) {
        // Didn't find key, so add a new edge entry
        node = {
          key: key,
          edgeId: this.edgeMap.size,
          value: newEdgeValue
        };
        this.edgeMap.set(key, node);
      }
      return node;
    }
  }, {
    key: "insertEdge",
    value: function insertEdge(pointId0, pointId1, newEdgeValue) {
      // Generate a unique key
      var key = this.computeEdgeKey(pointId0, pointId1);
      var node = {
        key: key,
        edgeId: this.edgeMap.size,
        value: newEdgeValue
      };
      this.edgeMap.set(key, node);
      return node;
    }
  }, {
    key: "isInsertedEdge",
    value: function isInsertedEdge(pointId0, pointId1) {
      var key = this.computeEdgeKey(pointId0, pointId1);
      return this.edgeMap.get(key);
    }
  }], [{
    key: "getEdgePointIds",
    value: function getEdgePointIds(node) {
      var n = 0.5 * (-1 + Math.sqrt(8 * node.key + 1));
      var pointId0 = node.key - 0.5 * (n + 1) * n;
      var pointId1 = n - pointId0;
      return [pointId0, pointId1];
    }
  }]);
  return EdgeLocator;
}();
function newInstance() {
  var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new EdgeLocator(initialValues.oriented);
}
var vtkEdgeLocator = {
  newInstance: newInstance
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/ImageData.js":
/*!********************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/ImageData.js ***!
  \********************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkImageData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");
/* harmony import */ var _BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoundingBox.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/BoundingBox.js");
/* harmony import */ var _DataSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataSet.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSet.js");
/* harmony import */ var _StructuredData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StructuredData.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/StructuredData.js");
/* harmony import */ var _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StructuredData/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/StructuredData/Constants.js");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js");









var vtkErrorMacro = _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].vtkErrorMacro; // ----------------------------------------------------------------------------
// vtkImageData methods
// ----------------------------------------------------------------------------

function vtkImageData(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkImageData');
  publicAPI.setExtent = function () {
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return false;
    }
    for (var _len = arguments.length, inExtent = new Array(_len), _key = 0; _key < _len; _key++) {
      inExtent[_key] = arguments[_key];
    }
    var extentArray = inExtent.length === 1 ? inExtent[0] : inExtent;
    if (extentArray.length !== 6) {
      return false;
    }
    var changeDetected = model.extent.some(function (item, index) {
      return item !== extentArray[index];
    });
    if (changeDetected) {
      model.extent = extentArray.slice();
      model.dataDescription = _StructuredData_js__WEBPACK_IMPORTED_MODULE_6__["default"].getDataDescriptionFromExtent(model.extent);
      publicAPI.modified();
    }
    return changeDetected;
  };
  publicAPI.setDimensions = function () {
    var i;
    var j;
    var k;
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return;
    }
    if (arguments.length === 1) {
      var array = arguments.length <= 0 ? undefined : arguments[0];
      i = array[0];
      j = array[1];
      k = array[2];
    } else if (arguments.length === 3) {
      i = arguments.length <= 0 ? undefined : arguments[0];
      j = arguments.length <= 1 ? undefined : arguments[1];
      k = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      vtkErrorMacro('Bad dimension specification');
      return;
    }
    publicAPI.setExtent(0, i - 1, 0, j - 1, 0, k - 1);
  };
  publicAPI.getDimensions = function () {
    return [model.extent[1] - model.extent[0] + 1, model.extent[3] - model.extent[2] + 1, model.extent[5] - model.extent[4] + 1];
  };
  publicAPI.getNumberOfCells = function () {
    var dims = publicAPI.getDimensions();
    var nCells = 1;
    for (var i = 0; i < 3; i++) {
      if (dims[i] === 0) {
        return 0;
      }
      if (dims[i] > 1) {
        nCells *= dims[i] - 1;
      }
    }
    return nCells;
  };
  publicAPI.getNumberOfPoints = function () {
    var dims = publicAPI.getDimensions();
    return dims[0] * dims[1] * dims[2];
  };
  publicAPI.getPoint = function (index) {
    var dims = publicAPI.getDimensions();
    if (dims[0] === 0 || dims[1] === 0 || dims[2] === 0) {
      vtkErrorMacro('Requesting a point from an empty image.');
      return null;
    }
    var ijk = new Float64Array(3);
    switch (model.dataDescription) {
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].EMPTY:
        return null;
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].SINGLE_POINT:
        break;
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].X_LINE:
        ijk[0] = index;
        break;
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].Y_LINE:
        ijk[1] = index;
        break;
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].Z_LINE:
        ijk[2] = index;
        break;
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].XY_PLANE:
        ijk[0] = index % dims[0];
        ijk[1] = index / dims[0];
        break;
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].YZ_PLANE:
        ijk[1] = index % dims[1];
        ijk[2] = index / dims[1];
        break;
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].XZ_PLANE:
        ijk[0] = index % dims[0];
        ijk[2] = index / dims[0];
        break;
      case _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].XYZ_GRID:
        ijk[0] = index % dims[0];
        ijk[1] = index / dims[0] % dims[1];
        ijk[2] = index / (dims[0] * dims[1]);
        break;
      default:
        vtkErrorMacro('Invalid dataDescription');
        break;
    }
    var coords = [0, 0, 0];
    publicAPI.indexToWorld(ijk, coords);
    return coords;
  }; // vtkCell *GetCell(vtkIdType cellId) VTK_OVERRIDE;
  // void GetCell(vtkIdType cellId, vtkGenericCell *cell) VTK_OVERRIDE;
  // void GetCellBounds(vtkIdType cellId, double bounds[6]) VTK_OVERRIDE;
  // virtual vtkIdType FindPoint(double x, double y, double z)
  // {
  //   return this->vtkDataSet::FindPoint(x, y, z);
  // }
  // vtkIdType FindPoint(double x[3]) VTK_OVERRIDE;
  // vtkIdType FindCell(
  //   double x[3], vtkCell *cell, vtkIdType cellId, double tol2,
  //   int& subId, double pcoords[3], double *weights) VTK_OVERRIDE;
  // vtkIdType FindCell(
  //   double x[3], vtkCell *cell, vtkGenericCell *gencell,
  //   vtkIdType cellId, double tol2, int& subId,
  //   double pcoords[3], double *weights) VTK_OVERRIDE;
  // vtkCell *FindAndGetCell(double x[3], vtkCell *cell, vtkIdType cellId,
  //                                 double tol2, int& subId, double pcoords[3],
  //                                 double *weights) VTK_OVERRIDE;
  // int GetCellType(vtkIdType cellId) VTK_OVERRIDE;
  // void GetCellPoints(vtkIdType cellId, vtkIdList *ptIds) VTK_OVERRIDE
  //   {vtkStructuredData::GetCellPoints(cellId,ptIds,this->DataDescription,
  //                                     this->GetDimensions());}
  // void GetPointCells(vtkIdType ptId, vtkIdList *cellIds) VTK_OVERRIDE
  //   {vtkStructuredData::GetPointCells(ptId,cellIds,this->GetDimensions());}
  // void ComputeBounds() VTK_OVERRIDE;
  // int GetMaxCellSize() VTK_OVERRIDE {return 8;}; //voxel is the largest

  publicAPI.getBounds = function () {
    return publicAPI.extentToBounds(publicAPI.getSpatialExtent());
  };
  publicAPI.extentToBounds = function (ex) {
    // prettier-ignore
    var corners = [[ex[0], ex[2], ex[4]], [ex[1], ex[2], ex[4]], [ex[0], ex[3], ex[4]], [ex[1], ex[3], ex[4]], [ex[0], ex[2], ex[5]], [ex[1], ex[2], ex[5]], [ex[0], ex[3], ex[5]], [ex[1], ex[3], ex[5]]];
    var bounds = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].INIT_BOUNDS);
    var vout = [];
    for (var i = 0; i < 8; ++i) {
      publicAPI.indexToWorld(corners[i], vout);
      _BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].addPoint.apply(_BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["default"], [bounds].concat(vout));
    }
    return bounds;
  };
  publicAPI.getSpatialExtent = function () {
    return _BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].inflate(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(model.extent), 0.5);
  }; // Internal, shouldn't need to call this manually.

  publicAPI.computeTransforms = function () {
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["mat4"].fromTranslation(model.indexToWorld, model.origin);
    model.indexToWorld[0] = model.direction[0];
    model.indexToWorld[1] = model.direction[1];
    model.indexToWorld[2] = model.direction[2];
    model.indexToWorld[4] = model.direction[3];
    model.indexToWorld[5] = model.direction[4];
    model.indexToWorld[6] = model.direction[5];
    model.indexToWorld[8] = model.direction[6];
    model.indexToWorld[9] = model.direction[7];
    model.indexToWorld[10] = model.direction[8];
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["mat4"].scale(model.indexToWorld, model.indexToWorld, model.spacing);
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["mat4"].invert(model.worldToIndex, model.indexToWorld);
  };
  publicAPI.indexToWorld = function (ain) {
    var aout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["vec3"].transformMat4(aout, ain, model.indexToWorld);
    return aout;
  };
  publicAPI.indexToWorldVec3 = publicAPI.indexToWorld;
  publicAPI.worldToIndex = function (ain) {
    var aout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["vec3"].transformMat4(aout, ain, model.worldToIndex);
    return aout;
  };
  publicAPI.worldToIndexVec3 = publicAPI.worldToIndex;
  publicAPI.indexToWorldBounds = function (bin) {
    var bout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var in1 = [0, 0, 0];
    var in2 = [0, 0, 0];
    _BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].computeCornerPoints(bin, in1, in2);
    var out1 = [0, 0, 0];
    var out2 = [0, 0, 0];
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["vec3"].transformMat4(out1, in1, model.indexToWorld);
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["vec3"].transformMat4(out2, in2, model.indexToWorld);
    return Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["c"])(out1, out2, bout);
  };
  publicAPI.worldToIndexBounds = function (bin) {
    var bout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var in1 = [0, 0, 0];
    var in2 = [0, 0, 0];
    _BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].computeCornerPoints(bin, in1, in2);
    var out1 = [0, 0, 0];
    var out2 = [0, 0, 0];
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["vec3"].transformMat4(out1, in1, model.worldToIndex);
    gl_matrix__WEBPACK_IMPORTED_MODULE_8__["vec3"].transformMat4(out2, in2, model.worldToIndex);
    return Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["c"])(out1, out2, bout);
  }; // Make sure the transform is correct

  publicAPI.onModified(publicAPI.computeTransforms);
  publicAPI.computeTransforms();
  publicAPI.getCenter = function () {
    return _BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].getCenter(publicAPI.getBounds());
  };
  publicAPI.computeHistogram = function (worldBounds) {
    var voxelFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var bounds = [0, 0, 0, 0, 0, 0];
    publicAPI.worldToIndexBounds(worldBounds, bounds);
    var point1 = [0, 0, 0];
    var point2 = [0, 0, 0];
    _BoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["default"].computeCornerPoints(bounds, point1, point2);
    Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["b"])(point1, point1);
    Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["b"])(point2, point2);
    var dimensions = publicAPI.getDimensions();
    Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["e"])(point1, [0, 0, 0], [dimensions[0] - 1, dimensions[1] - 1, dimensions[2] - 1], point1);
    Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["e"])(point2, [0, 0, 0], [dimensions[0] - 1, dimensions[1] - 1, dimensions[2] - 1], point2);
    var yStride = dimensions[0];
    var zStride = dimensions[0] * dimensions[1];
    var pixels = publicAPI.getPointData().getScalars().getData();
    var maximum = -Infinity;
    var minimum = Infinity;
    var sumOfSquares = 0;
    var isum = 0;
    var inum = 0;
    for (var z = point1[2]; z <= point2[2]; z++) {
      for (var y = point1[1]; y <= point2[1]; y++) {
        var index = point1[0] + y * yStride + z * zStride;
        for (var x = point1[0]; x <= point2[0]; x++) {
          if (!voxelFunc || voxelFunc([x, y, z], bounds)) {
            var pixel = pixels[index];
            if (pixel > maximum) maximum = pixel;
            if (pixel < minimum) minimum = pixel;
            sumOfSquares += pixel * pixel;
            isum += pixel;
            inum += 1;
          }
          ++index;
        }
      }
    }
    var average = inum > 0 ? isum / inum : 0;
    var variance = inum ? Math.abs(sumOfSquares / inum - average * average) : 0;
    var sigma = Math.sqrt(variance);
    return {
      minimum: minimum,
      maximum: maximum,
      average: average,
      variance: variance,
      sigma: sigma,
      count: inum
    };
  }; // TODO: use the unimplemented `vtkDataSetAttributes` for scalar length, that is currently also a TODO (GetNumberOfComponents).
  // Scalar data could be tuples for color information?

  publicAPI.computeIncrements = function (extent) {
    var numberOfComponents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var increments = [];
    var incr = numberOfComponents; // Calculate array increment offsets
    // similar to c++ vtkImageData::ComputeIncrements

    for (var idx = 0; idx < 3; ++idx) {
      increments[idx] = incr;
      incr *= extent[idx * 2 + 1] - extent[idx * 2] + 1;
    }
    return increments;
  };
  /**
   * @param {Number[]} index the localized `[i,j,k]` pixel array position. Float values will be rounded.
   * @return {Number} the corresponding flattened index in the scalar array
   */

  publicAPI.computeOffsetIndex = function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 3),
      i = _ref2[0],
      j = _ref2[1],
      k = _ref2[2];
    var extent = publicAPI.getExtent();
    var numberOfComponents = publicAPI.getPointData().getScalars().getNumberOfComponents();
    var increments = publicAPI.computeIncrements(extent, numberOfComponents); // Use the array increments to find the pixel index
    // similar to c++ vtkImageData::GetArrayPointer
    // Math.floor to catch "practically 0" e^-15 scenarios.

    return Math.floor((Math.round(i) - extent[0]) * increments[0] + (Math.round(j) - extent[2]) * increments[1] + (Math.round(k) - extent[4]) * increments[2]);
  };
  /**
   * @param {Number[]} xyz the [x,y,z] Array in world coordinates
   * @return {Number|NaN} the corresponding pixel's index in the scalar array
   */

  publicAPI.getOffsetIndexFromWorld = function (xyz) {
    var extent = publicAPI.getExtent();
    var index = publicAPI.worldToIndex(xyz); // Confirm indexed i,j,k coords are within the bounds of the volume

    for (var idx = 0; idx < 3; ++idx) {
      if (index[idx] < extent[idx * 2] || index[idx] > extent[idx * 2 + 1]) {
        vtkErrorMacro("GetScalarPointer: Pixel ".concat(index, " is not in memory. Current extent = ").concat(extent));
        return NaN;
      }
    } // Assumed the index here is within 0 <-> scalarData.length, but doesn't hurt to check upstream

    return publicAPI.computeOffsetIndex(index);
  };
  /**
   * @param {Number[]} xyz the [x,y,z] Array in world coordinates
   * @param {Number?} comp the scalar component index for multi-component scalars
   * @return {Number|NaN} the corresponding pixel's scalar value
   */

  publicAPI.getScalarValueFromWorld = function (xyz) {
    var comp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var numberOfComponents = publicAPI.getPointData().getScalars().getNumberOfComponents();
    if (comp < 0 || comp >= numberOfComponents) {
      vtkErrorMacro("GetScalarPointer: Scalar Component ".concat(comp, " is not within bounds. Current Scalar numberOfComponents: ").concat(numberOfComponents));
      return NaN;
    }
    var offsetIndex = publicAPI.getOffsetIndexFromWorld(xyz);
    if (Number.isNaN(offsetIndex)) {
      // VTK Error Macro will have been tripped already, no need to do it again,
      return offsetIndex;
    }
    return publicAPI.getPointData().getScalars().getComponent(offsetIndex, comp);
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  direction: null,
  // a mat3
  indexToWorld: null,
  // a mat4
  worldToIndex: null,
  // a mat4
  spacing: [1.0, 1.0, 1.0],
  origin: [0.0, 0.0, 0.0],
  extent: [0, -1, 0, -1, 0, -1],
  dataDescription: _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_7__["StructuredType"].EMPTY
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues); // Inheritance

  _DataSet_js__WEBPACK_IMPORTED_MODULE_5__["default"].extend(publicAPI, model, initialValues);
  if (!model.direction) {
    model.direction = gl_matrix__WEBPACK_IMPORTED_MODULE_8__["mat3"].identity(new Float64Array(9));
  } else if (Array.isArray(model.direction)) {
    model.direction = new Float64Array(model.direction.slice(0, 9));
  }
  model.indexToWorld = new Float64Array(16);
  model.worldToIndex = new Float64Array(16); // Set/Get methods

  _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].get(publicAPI, model, ['indexToWorld', 'worldToIndex']);
  _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].setGetArray(publicAPI, model, ['origin', 'spacing'], 3);
  _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].setGetArray(publicAPI, model, ['direction'], 9);
  _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].getArray(publicAPI, model, ['extent'], 6); // Object specific methods

  vtkImageData(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance(extend, 'vtkImageData'); // ----------------------------------------------------------------------------

var vtkImageData$1 = {
  newInstance: newInstance,
  extend: extend
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/Line.js":
/*!***************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/Line.js ***!
  \***************************************************************/
/*! exports provided: STATIC, default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC", function() { return STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkLine$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Line_Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Line/Constants.js");
/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cell.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Cell.js");
/* harmony import */ var _Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var IntersectionState = _Line_Constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].IntersectionState; // ----------------------------------------------------------------------------
// Global methods
// ----------------------------------------------------------------------------

function distanceToLine(x, p1, p2) {
  var closestPoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var outObj = {
    t: Number.MIN_VALUE,
    distance: 0
  };
  var p21 = [];
  var closest; // Determine appropriate vector

  p21[0] = p2[0] - p1[0];
  p21[1] = p2[1] - p1[1];
  p21[2] = p2[2] - p1[2]; // Get parametric location

  var num = p21[0] * (x[0] - p1[0]) + p21[1] * (x[1] - p1[1]) + p21[2] * (x[2] - p1[2]);
  var denom = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["d"])(p21, p21); // trying to avoid an expensive fabs

  var tolerance = 1e-5 * num;
  if (denom !== 0.0) {
    outObj.t = num / denom;
  }
  if (tolerance < 0.0) {
    tolerance = -tolerance;
  }
  if (-tolerance < denom && denom < tolerance) {
    closest = p1;
  } else if (denom <= 0.0 || outObj.t < 0.0) {
    // If parametric coordinate is within 0<=p<=1, then the point is closest to
    // the line.  Otherwise, it's closest to a point at the end of the line.
    closest = p1;
  } else if (outObj.t > 1.0) {
    closest = p2;
  } else {
    closest = p21;
    p21[0] = p1[0] + outObj.t * p21[0];
    p21[1] = p1[1] + outObj.t * p21[1];
    p21[2] = p1[2] + outObj.t * p21[2];
  }
  if (closestPoint) {
    closestPoint[0] = closest[0];
    closestPoint[1] = closest[1];
    closestPoint[2] = closest[2];
  }
  outObj.distance = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["f"])(closest, x);
  return outObj;
}
function intersection(a1, a2, b1, b2, u, v) {
  var a21 = [];
  var b21 = [];
  var b1a1 = [];
  u[0] = 0.0;
  v[0] = 0.0; // Determine line vectors.

  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["s"])(a2, a1, a21);
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["s"])(b2, b1, b21);
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["s"])(b1, a1, b1a1); // Compute the system (least squares) matrix.

  var A = [Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["d"])(a21, a21), -Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["d"])(a21, b21), -Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["d"])(a21, b21), Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["d"])(b21, b21)]; // Compute the least squares system constant term.

  var c = [];
  c[0] = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["d"])(a21, b1a1);
  c[1] = -Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["d"])(b21, b1a1); // Solve the system of equations

  if (Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["j"])(A, c, 2) === 0) {
    // The lines are colinear. Therefore, one of the four endpoints is the
    // point of closest approach
    var minDist = Number.MAX_VALUE;
    var p = [a1, a2, b1, b2];
    var l1 = [b1, b1, a1, a1];
    var l2 = [b2, b2, a2, a2];
    var uv1 = [v[0], v[0], u[0], u[0]];
    var uv2 = [u[0], u[0], v[0], v[0]];
    var obj;
    for (var i = 0; i < 4; i++) {
      obj = distanceToLine(p[i], l1[i], l2[i]);
      if (obj.distance < minDist) {
        minDist = obj.distance;
        uv1[i] = obj.t;
        uv2[i] = i % 2;
      }
    }
    return IntersectionState.ON_LINE;
  }
  u[0] = c[0];
  v[0] = c[1]; // Check parametric coordinates for intersection.

  if (u[0] >= 0.0 && u[0] <= 1.0 && v[0] >= 0.0 && v[0] <= 1.0) {
    return IntersectionState.YES_INTERSECTION;
  }
  return IntersectionState.NO_INTERSECTION;
} // ----------------------------------------------------------------------------
// Static API
// ----------------------------------------------------------------------------

var STATIC = {
  distanceToLine: distanceToLine,
  intersection: intersection
}; // ----------------------------------------------------------------------------
// vtkLine methods
// ----------------------------------------------------------------------------

function vtkLine(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkLine');
  function isBetweenPoints(t) {
    return t >= 0.0 && t <= 1.0;
  }
  publicAPI.getCellDimension = function () {
    return 1;
  };
  publicAPI.intersectWithLine = function (p1, p2, tol, x, pcoords) {
    var outObj = {
      intersect: 0,
      t: Number.MAX_VALUE,
      subId: 0,
      betweenPoints: null
    };
    pcoords[1] = 0.0;
    pcoords[2] = 0.0;
    var projXYZ = [];
    var a1 = [];
    var a2 = [];
    model.points.getPoint(0, a1);
    model.points.getPoint(1, a2);
    var u = [];
    var v = [];
    var intersect = intersection(p1, p2, a1, a2, u, v);
    outObj.t = u[0];
    outObj.betweenPoints = isBetweenPoints(outObj.t);
    pcoords[0] = v[0];
    if (intersect === IntersectionState.YES_INTERSECTION) {
      // make sure we are within tolerance
      for (var i = 0; i < 3; i++) {
        x[i] = a1[i] + pcoords[0] * (a2[i] - a1[i]);
        projXYZ[i] = p1[i] + outObj.t * (p2[i] - p1[i]);
      }
      if (Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["f"])(x, projXYZ) <= tol * tol) {
        outObj.intersect = 1;
        return outObj;
      }
    } else {
      var outDistance; // check to see if it lies within tolerance
      // one of the parametric coords must be outside 0-1

      if (outObj.t < 0.0) {
        outDistance = distanceToLine(p1, a1, a2, x);
        if (outDistance.distance <= tol * tol) {
          outObj.t = 0.0;
          outObj.intersect = 1;
          outObj.betweenPoints = true; // Intersection is near p1

          return outObj;
        }
        return outObj;
      }
      if (outObj.t > 1.0) {
        outDistance = distanceToLine(p2, a1, a2, x);
        if (outDistance.distance <= tol * tol) {
          outObj.t = 1.0;
          outObj.intersect = 1;
          outObj.betweenPoints = true; // Intersection is near p2

          return outObj;
        }
        return outObj;
      }
      if (pcoords[0] < 0.0) {
        pcoords[0] = 0.0;
        outDistance = distanceToLine(a1, p1, p2, x);
        outObj.t = outDistance.t;
        if (outDistance.distance <= tol * tol) {
          outObj.intersect = 1;
          return outObj;
        }
        return outObj;
      }
      if (pcoords[0] > 1.0) {
        pcoords[0] = 1.0;
        outDistance = distanceToLine(a2, p1, p2, x);
        outObj.t = outDistance.t;
        if (outDistance.distance <= tol * tol) {
          outObj.intersect = 1;
          return outObj;
        }
        return outObj;
      }
    }
    return outObj;
  };
  publicAPI.evaluateLocation = function (pcoords, x, weights) {
    var a1 = [];
    var a2 = [];
    model.points.getPoint(0, a1);
    model.points.getPoint(1, a2);
    for (var i = 0; i < 3; i++) {
      x[i] = a1[i] + pcoords[0] * (a2[i] - a1[i]);
    }
    weights[0] = 1.0 - pcoords[0];
    weights[1] = pcoords[0];
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  _Cell_js__WEBPACK_IMPORTED_MODULE_3__["default"].extend(publicAPI, model, initialValues);
  vtkLine(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkLine'); // ----------------------------------------------------------------------------

var vtkLine$1 = _objectSpread(_objectSpread({
  newInstance: newInstance,
  extend: extend
}, STATIC), _Line_Constants_js__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/Line/Constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/Line/Constants.js ***!
  \*************************************************************************/
/*! exports provided: IntersectionState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionState", function() { return IntersectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constants; });
var IntersectionState = {
  NO_INTERSECTION: 0,
  YES_INTERSECTION: 1,
  ON_LINE: 2
};
var Constants = {
  IntersectionState: IntersectionState
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/Plane.js":
/*!****************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/Plane.js ***!
  \****************************************************************/
/*! exports provided: STATIC, default, extend, newInstance, vtkPlane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC", function() { return STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkPlane$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vtkPlane", function() { return vtkPlane; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var PLANE_TOLERANCE = 1.0e-6;
var COINCIDE = 'coincide';
var DISJOINT = 'disjoint'; // ----------------------------------------------------------------------------
// Global methods
// ----------------------------------------------------------------------------

function evaluate(normal, origin, x) {
  return normal[0] * (x[0] - origin[0]) + normal[1] * (x[1] - origin[1]) + normal[2] * (x[2] - origin[2]);
}
function distanceToPlane(x, origin, normal) {
  var distance = normal[0] * (x[0] - origin[0]) + normal[1] * (x[1] - origin[1]) + normal[2] * (x[2] - origin[2]);
  return Math.abs(distance);
}
function projectPoint(x, origin, normal, xproj) {
  var xo = [];
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["s"])(x, origin, xo);
  var t = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(normal, xo);
  xproj[0] = x[0] - t * normal[0];
  xproj[1] = x[1] - t * normal[1];
  xproj[2] = x[2] - t * normal[2];
}
function projectVector(v, normal, vproj) {
  var t = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(v, normal);
  var n2 = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(normal, normal);
  if (n2 === 0) {
    n2 = 1.0;
  }
  vproj[0] = v[0] - t * normal[0] / n2;
  vproj[1] = v[1] - t * normal[1] / n2;
  vproj[2] = v[2] - t * normal[2] / n2;
  return vproj;
}
function generalizedProjectPoint(x, origin, normal, xproj) {
  var xo = [];
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["s"])(x, origin, xo);
  var t = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(normal, xo);
  var n2 = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(normal, normal);
  if (n2 !== 0) {
    xproj[0] = x[0] - t * normal[0] / n2;
    xproj[1] = x[1] - t * normal[1] / n2;
    xproj[2] = x[2] - t * normal[2] / n2;
  } else {
    xproj[0] = x[0];
    xproj[1] = x[1];
    xproj[2] = x[2];
  }
}
function intersectWithLine(p1, p2, origin, normal) {
  var outObj = {
    intersection: false,
    betweenPoints: false,
    t: Number.MAX_VALUE,
    x: []
  };
  var p21 = [];
  var p1Origin = []; // Compute line vector

  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["s"])(p2, p1, p21);
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["s"])(origin, p1, p1Origin); // Compute denominator.  If ~0, line and plane are parallel.
  // const num = vtkMath.dot(normal, origin) - vtkMath.dot(normal, p1);

  var num = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(normal, p1Origin);
  var den = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(normal, p21); // If denominator with respect to numerator is "zero", then the line and
  // plane are considered parallel.

  var fabsden;
  var fabstolerance; // Trying to avoid an expensive call to fabs()

  if (den < 0.0) {
    fabsden = -den;
  } else {
    fabsden = den;
  }
  if (num < 0.0) {
    fabstolerance = -num * PLANE_TOLERANCE;
  } else {
    fabstolerance = num * PLANE_TOLERANCE;
  }
  if (fabsden <= fabstolerance) {
    return outObj;
  } // Where on the line between p1 and p2 is the intersection
  // If between 0 and 1, it is between the two points. If < 0 it's before p1, if > 1 it's after p2

  outObj.t = num / den;
  outObj.x[0] = p1[0] + outObj.t * p21[0];
  outObj.x[1] = p1[1] + outObj.t * p21[1];
  outObj.x[2] = p1[2] + outObj.t * p21[2];
  outObj.intersection = true;
  outObj.betweenPoints = outObj.t >= 0.0 && outObj.t <= 1.0;
  return outObj;
}
function intersectWithPlane(plane1Origin, plane1Normal, plane2Origin, plane2Normal) {
  var outObj = {
    intersection: false,
    l0: [],
    l1: [],
    error: null
  };
  var cross$1 = [];
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["k"])(plane1Normal, plane2Normal, cross$1);
  var absCross = cross$1.map(function (n) {
    return Math.abs(n);
  }); // test if the two planes are parallel

  if (absCross[0] + absCross[1] + absCross[2] < PLANE_TOLERANCE) {
    // test if disjoint or coincide
    var v = [];
    Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["s"])(plane1Origin, plane2Origin, v);
    if (Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(plane1Normal, v) === 0) {
      outObj.error = COINCIDE;
    } else {
      outObj.error = DISJOINT;
    }
    return outObj;
  } // Plane1 and Plane2 intersect in a line
  // first determine max abs coordinate of the cross product

  var maxc;
  if (absCross[0] > absCross[1] && absCross[0] > absCross[2]) {
    maxc = 'x';
  } else if (absCross[1] > absCross[2]) {
    maxc = 'y';
  } else {
    maxc = 'z';
  } // To get a point on the intersect line, zero the max coord, and solve for the other two

  var iP = []; // intersectionPoint
  // the constants in the 2 plane equations

  var d1 = -Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(plane1Normal, plane1Origin);
  var d2 = -Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["d"])(plane2Normal, plane2Origin); // eslint-disable-next-line default-case

  switch (maxc) {
    case 'x':
      // intersect with x=0
      iP[0] = 0;
      iP[1] = (d2 * plane1Normal[2] - d1 * plane2Normal[2]) / cross$1[0];
      iP[2] = (d1 * plane2Normal[1] - d2 * plane1Normal[1]) / cross$1[0];
      break;
    case 'y':
      // intersect with y=0
      iP[0] = (d1 * plane2Normal[2] - d2 * plane1Normal[2]) / cross$1[1];
      iP[1] = 0;
      iP[2] = (d2 * plane1Normal[0] - d1 * plane2Normal[0]) / cross$1[1];
      break;
    case 'z':
      // intersect with z=0
      iP[0] = (d2 * plane1Normal[1] - d1 * plane2Normal[1]) / cross$1[2];
      iP[1] = (d1 * plane2Normal[0] - d2 * plane1Normal[0]) / cross$1[2];
      iP[2] = 0;
      break;
  }
  outObj.l0 = iP;
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_1__["l"])(iP, cross$1, outObj.l1);
  outObj.intersection = true;
  return outObj;
} // ----------------------------------------------------------------------------
// Static API
// ----------------------------------------------------------------------------

var STATIC = {
  evaluate: evaluate,
  distanceToPlane: distanceToPlane,
  projectPoint: projectPoint,
  projectVector: projectVector,
  generalizedProjectPoint: generalizedProjectPoint,
  intersectWithLine: intersectWithLine,
  intersectWithPlane: intersectWithPlane,
  DISJOINT: DISJOINT,
  COINCIDE: COINCIDE
}; // ----------------------------------------------------------------------------
// vtkPlane methods
// ----------------------------------------------------------------------------

function vtkPlane(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkPlane');
  publicAPI.distanceToPlane = function (x) {
    return distanceToPlane(x, model.origin, model.normal);
  };
  publicAPI.projectPoint = function (x, xproj) {
    projectPoint(x, model.origin, model.normal, xproj);
  };
  publicAPI.projectVector = function (v, vproj) {
    return projectVector(v, model.normal, vproj);
  };
  publicAPI.push = function (distance) {
    if (distance === 0.0) {
      return;
    }
    for (var i = 0; i < 3; i++) {
      model.origin[i] += distance * model.normal[i];
    }
  };
  publicAPI.generalizedProjectPoint = function (x, xproj) {
    generalizedProjectPoint(x, model.origin, model.normal, xproj);
  };
  publicAPI.evaluateFunction = function (x, y, z) {
    if (!Array.isArray(x)) {
      return model.normal[0] * (x - model.origin[0]) + model.normal[1] * (y - model.origin[1]) + model.normal[2] * (z - model.origin[2]);
    }
    return model.normal[0] * (x[0] - model.origin[0]) + model.normal[1] * (x[1] - model.origin[1]) + model.normal[2] * (x[2] - model.origin[2]);
  };
  publicAPI.evaluateGradient = function (xyz) {
    var retVal = [model.normal[0], model.normal[1], model.normal[2]];
    return retVal;
  };
  publicAPI.intersectWithLine = function (p1, p2) {
    return intersectWithLine(p1, p2, model.origin, model.normal);
  };
  publicAPI.intersectWithPlane = function (planeOrigin, planeNormal) {
    return intersectWithPlane(planeOrigin, planeNormal, model.origin, model.normal);
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  normal: [0.0, 0.0, 1.0],
  origin: [0.0, 0.0, 0.0]
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues); // Object methods

  _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].obj(publicAPI, model);
  _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].setGetArray(publicAPI, model, ['normal', 'origin'], 3);
  vtkPlane(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance(extend, 'vtkPlane'); // ----------------------------------------------------------------------------

var vtkPlane$1 = _objectSpread({
  newInstance: newInstance,
  extend: extend
}, STATIC);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/PointSet.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/PointSet.js ***!
  \*******************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkPointSet$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _vtk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vtk.js */ "./node_modules/@kitware/vtk.js/vtk.js");
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _DataSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataSet.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSet.js");
/* harmony import */ var _Core_Points_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Points.js */ "./node_modules/@kitware/vtk.js/Common/Core/Points.js");





// Global methods
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// vtkPointSet methods
// ----------------------------------------------------------------------------

function vtkPointSet(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkPointSet'); // Create empty points

  if (!model.points) {
    model.points = _Core_Points_js__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
  } else {
    model.points = Object(_vtk_js__WEBPACK_IMPORTED_MODULE_0__["default"])(model.points);
  }
  publicAPI.getNumberOfPoints = function () {
    return model.points.getNumberOfPoints();
  };
  publicAPI.getBounds = function () {
    return model.points.getBounds();
  };
  publicAPI.computeBounds = function () {
    publicAPI.getBounds();
  };
  var superShallowCopy = publicAPI.shallowCopy;
  publicAPI.shallowCopy = function (other) {
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    superShallowCopy(other, debug);
    model.points = _Core_Points_js__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
    model.points.shallowCopy(other.getPoints());
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {// points: null,
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues); // Inheritance

  _DataSet_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(publicAPI, model, initialValues);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].setGet(publicAPI, model, ['points']); // Object specific methods

  vtkPointSet(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkPointSet'); // ----------------------------------------------------------------------------

var vtkPointSet$1 = {
  newInstance: newInstance,
  extend: extend
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/PolyData.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/PolyData.js ***!
  \*******************************************************************/
/*! exports provided: CELL_FACTORY, default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CELL_FACTORY", function() { return CELL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkPolyData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _vtk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vtk.js */ "./node_modules/@kitware/vtk.js/vtk.js");
/* harmony import */ var _Core_CellArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/CellArray.js */ "./node_modules/@kitware/vtk.js/Common/Core/CellArray.js");
/* harmony import */ var _CellLinks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CellLinks.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/CellLinks.js");
/* harmony import */ var _CellTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CellTypes.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/CellTypes.js");
/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Line.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Line.js");
/* harmony import */ var _PointSet_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PointSet.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/PointSet.js");
/* harmony import */ var _Triangle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Triangle.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Triangle.js");
/* harmony import */ var _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CellTypes/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/CellTypes/Constants.js");
/* harmony import */ var _PolyData_Constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PolyData/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/PolyData/Constants.js");











var _CELL_FACTORY;
var vtkWarningMacro = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].vtkWarningMacro;
var CELL_FACTORY = (_CELL_FACTORY = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CELL_FACTORY, _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_LINE, _Line_js__WEBPACK_IMPORTED_MODULE_6__["default"]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CELL_FACTORY, _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_POLY_LINE, _Line_js__WEBPACK_IMPORTED_MODULE_6__["default"]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_CELL_FACTORY, _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_TRIANGLE, _Triangle_js__WEBPACK_IMPORTED_MODULE_8__["default"]), _CELL_FACTORY); // ----------------------------------------------------------------------------
// vtkPolyData methods
// ----------------------------------------------------------------------------

function vtkPolyData(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkPolyData');
  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter) {
      return letter.toUpperCase();
    }).replace(/\s+/g, '');
  } // build empty cell arrays and set methods

  _PolyData_Constants_js__WEBPACK_IMPORTED_MODULE_10__["POLYDATA_FIELDS"].forEach(function (type) {
    publicAPI["getNumberOf".concat(camelize(type))] = function () {
      return model[type].getNumberOfCells();
    };
    if (!model[type]) {
      model[type] = _Core_CellArray_js__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
    } else {
      model[type] = Object(_vtk_js__WEBPACK_IMPORTED_MODULE_2__["default"])(model[type]);
    }
  });
  publicAPI.getNumberOfCells = function () {
    return _PolyData_Constants_js__WEBPACK_IMPORTED_MODULE_10__["POLYDATA_FIELDS"].reduce(function (num, cellType) {
      return num + model[cellType].getNumberOfCells();
    }, 0);
  };
  var superShallowCopy = publicAPI.shallowCopy;
  publicAPI.shallowCopy = function (other) {
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    superShallowCopy(other, debug);
    _PolyData_Constants_js__WEBPACK_IMPORTED_MODULE_10__["POLYDATA_FIELDS"].forEach(function (type) {
      model[type] = _Core_CellArray_js__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
      model[type].shallowCopy(other.getReferenceByName(type));
    });
  };
  publicAPI.buildCells = function () {
    // here are the number of cells we have
    var nVerts = publicAPI.getNumberOfVerts();
    var nLines = publicAPI.getNumberOfLines();
    var nPolys = publicAPI.getNumberOfPolys();
    var nStrips = publicAPI.getNumberOfStrips(); // pre-allocate the space we need

    var nCells = nVerts + nLines + nPolys + nStrips;
    var types = new Uint8Array(nCells);
    var pTypes = types;
    var locs = new Uint32Array(nCells);
    var pLocs = locs; // record locations and type of each cell.
    // verts

    if (nVerts) {
      var nextCellPts = 0;
      model.verts.getCellSizes().forEach(function (numCellPts, index) {
        pLocs[index] = nextCellPts;
        pTypes[index] = numCellPts > 1 ? _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_POLY_VERTEX : _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_VERTEX;
        nextCellPts += numCellPts + 1;
      });
      pLocs = pLocs.subarray(nVerts);
      pTypes = pTypes.subarray(nVerts);
    } // lines

    if (nLines) {
      var _nextCellPts = 0;
      model.lines.getCellSizes().forEach(function (numCellPts, index) {
        pLocs[index] = _nextCellPts;
        pTypes[index] = numCellPts > 2 ? _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_POLY_LINE : _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_LINE;
        if (numCellPts === 1) {
          vtkWarningMacro('Building VTK_LINE ', index, ' with only one point, but VTK_LINE needs at least two points. Check the input.');
        }
        _nextCellPts += numCellPts + 1;
      });
      pLocs = pLocs.subarray(nLines);
      pTypes = pTypes.subarray(nLines);
    } // polys

    if (nPolys) {
      var _nextCellPts2 = 0;
      model.polys.getCellSizes().forEach(function (numCellPts, index) {
        pLocs[index] = _nextCellPts2;
        switch (numCellPts) {
          case 3:
            pTypes[index] = _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_TRIANGLE;
            break;
          case 4:
            pTypes[index] = _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_QUAD;
            break;
          default:
            pTypes[index] = _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_POLYGON;
            break;
        }
        if (numCellPts < 3) {
          vtkWarningMacro('Building VTK_TRIANGLE ', index, ' with less than three points, but VTK_TRIANGLE needs at least three points. Check the input.');
        }
        _nextCellPts2 += numCellPts + 1;
      });
      pLocs += pLocs.subarray(nPolys);
      pTypes += pTypes.subarray(nPolys);
    } // strips

    if (nStrips) {
      var _nextCellPts3 = 0;
      pTypes.fill(_CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_TRIANGLE_STRIP, 0, nStrips);
      model.strips.getCellSizes().forEach(function (numCellPts, index) {
        pLocs[index] = _nextCellPts3;
        _nextCellPts3 += numCellPts + 1;
      });
    } // set up the cell types data structure

    model.cells = _CellTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"].newInstance();
    model.cells.setCellTypes(nCells, types, locs);
  };
  /**
   * Create upward links from points to cells that use each point. Enables
   * topologically complex queries.
   */

  publicAPI.buildLinks = function () {
    var initialSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (model.cells === undefined) {
      publicAPI.buildCells();
    }
    model.links = _CellLinks_js__WEBPACK_IMPORTED_MODULE_4__["default"].newInstance();
    if (initialSize > 0) {
      model.links.allocate(initialSize);
    } else {
      model.links.allocate(publicAPI.getPoints().getNumberOfPoints());
    }
    model.links.buildLinks(publicAPI);
  };
  publicAPI.getCellType = function (cellId) {
    return model.cells.getCellType(cellId);
  };
  publicAPI.getCellPoints = function (cellId) {
    var cellType = publicAPI.getCellType(cellId);
    var cells = null;
    switch (cellType) {
      case _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_VERTEX:
      case _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_POLY_VERTEX:
        cells = model.verts;
        break;
      case _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_LINE:
      case _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_POLY_LINE:
        cells = model.lines;
        break;
      case _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_TRIANGLE:
      case _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_QUAD:
      case _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_POLYGON:
        cells = model.polys;
        break;
      case _CellTypes_Constants_js__WEBPACK_IMPORTED_MODULE_9__["CellType"].VTK_TRIANGLE_STRIP:
        cells = model.strips;
        break;
      default:
        cells = null;
        return {
          type: 0,
          cellPointIds: null
        };
    }
    var loc = model.cells.getCellLocation(cellId);
    var cellPointIds = cells.getCell(loc);
    return {
      cellType: cellType,
      cellPointIds: cellPointIds
    };
  };
  publicAPI.getPointCells = function (ptId) {
    return model.links.getCells(ptId);
  };
  publicAPI.getCellEdgeNeighbors = function (cellId, point1, point2) {
    var link1 = model.links.getLink(point1);
    var link2 = model.links.getLink(point2);
    return link1.cells.filter(function (cell) {
      return cell !== cellId && link2.cells.indexOf(cell) !== -1;
    });
  };
  /**
   * If you know the type of cell, you may provide it to improve performances.
   */

  publicAPI.getCell = function (cellId) {
    var cellHint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var cellInfo = publicAPI.getCellPoints(cellId);
    var cell = cellHint || CELL_FACTORY[cellInfo.cellType].newInstance();
    cell.initialize(publicAPI.getPoints(), cellInfo.cellPointIds);
    return cell;
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {// verts: null,
  // lines: null,
  // polys: null,
  // strips: null,
  // cells: null,
  // links: null,
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues); // Inheritance

  _PointSet_js__WEBPACK_IMPORTED_MODULE_7__["default"].extend(publicAPI, model, initialValues);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(publicAPI, model, ['cells', 'links']);
  _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].setGet(publicAPI, model, ['verts', 'lines', 'polys', 'strips']); // Object specific methods

  vtkPolyData(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkPolyData'); // ----------------------------------------------------------------------------

var vtkPolyData$1 = {
  newInstance: newInstance,
  extend: extend
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/PolyData/Constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/PolyData/Constants.js ***!
  \*****************************************************************************/
/*! exports provided: POLYDATA_FIELDS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLYDATA_FIELDS", function() { return POLYDATA_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constants; });
var POLYDATA_FIELDS = ['verts', 'lines', 'polys', 'strips'];
var Constants = {
  POLYDATA_FIELDS: POLYDATA_FIELDS
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/StructuredData.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/StructuredData.js ***!
  \*************************************************************************/
/*! exports provided: default, getDataDescriptionFromExtent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkStructuredData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataDescriptionFromExtent", function() { return getDataDescriptionFromExtent; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StructuredData/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/StructuredData/Constants.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var StructuredType = _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].StructuredType;
function getDataDescriptionFromExtent(inExt) {
  var dataDim = 0;
  for (var i = 0; i < 3; ++i) {
    if (inExt[i * 2] < inExt[i * 2 + 1]) {
      dataDim++;
    }
  }
  if (inExt[0] > inExt[1] || inExt[2] > inExt[3] || inExt[4] > inExt[5]) {
    return StructuredType.EMPTY;
  }
  if (dataDim === 3) {
    return StructuredType.XYZ_GRID;
  }
  if (dataDim === 2) {
    if (inExt[0] === inExt[1]) {
      return StructuredType.YZ_PLANE;
    }
    if (inExt[2] === inExt[3]) {
      return StructuredType.XZ_PLANE;
    }
    return StructuredType.XY_PLANE;
  }
  if (dataDim === 1) {
    if (inExt[0] < inExt[1]) {
      return StructuredType.X_LINE;
    }
    if (inExt[2] < inExt[3]) {
      return StructuredType.Y_LINE;
    }
    return StructuredType.Z_LINE;
  }
  return StructuredType.SINGLE_POINT;
}
var vtkStructuredData = _objectSpread({
  getDataDescriptionFromExtent: getDataDescriptionFromExtent
}, _StructuredData_Constants_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/StructuredData/Constants.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/StructuredData/Constants.js ***!
  \***********************************************************************************/
/*! exports provided: StructuredType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuredType", function() { return StructuredType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constants; });
var StructuredType = {
  UNCHANGED: 0,
  SINGLE_POINT: 1,
  X_LINE: 2,
  Y_LINE: 3,
  Z_LINE: 4,
  XY_PLANE: 5,
  YZ_PLANE: 6,
  XZ_PLANE: 7,
  XYZ_GRID: 8,
  EMPTY: 9
};
var Constants = {
  StructuredType: StructuredType
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Common/DataModel/Triangle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Common/DataModel/Triangle.js ***!
  \*******************************************************************/
/*! exports provided: STATIC, default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC", function() { return STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkTriangle$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Cell.js");
/* harmony import */ var _Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");
/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Line.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Line.js");
/* harmony import */ var _Plane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Plane.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Plane.js");






function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
// Global methods
// ----------------------------------------------------------------------------

function computeNormalDirection(v1, v2, v3, n) {
  // order is important!!! maintain consistency with triangle vertex order
  var ax = v3[0] - v2[0];
  var ay = v3[1] - v2[1];
  var az = v3[2] - v2[2];
  var bx = v1[0] - v2[0];
  var by = v1[1] - v2[1];
  var bz = v1[2] - v2[2];
  n[0] = ay * bz - az * by;
  n[1] = az * bx - ax * bz;
  n[2] = ax * by - ay * bx;
}
function computeNormal(v1, v2, v3, n) {
  computeNormalDirection(v1, v2, v3, n);
  var length = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  if (length !== 0.0) {
    n[0] /= length;
    n[1] /= length;
    n[2] /= length;
  }
}
function intersectWithTriangle(p1, q1, r1, p2, q2, r2) {
  var tolerance = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1e-6;
  var coplanar = false;
  var pt1 = [];
  var pt2 = [];
  var surfaceId = [];
  var n1 = [];
  var n2 = []; // Compute supporting plane normals.

  computeNormal(p1, q1, r1, n1);
  computeNormal(p2, q2, r2, n2);
  var s1 = -Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n1, p1);
  var s2 = -Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n2, p2); // Compute signed distances of points p1, q1, r1 from supporting
  // plane of second triangle.

  var dist1 = [Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n2, p1) + s2, Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n2, q1) + s2, Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n2, r1) + s2]; // If signs of all points are the same, all the points lie on the
  // same side of the supporting plane, and we can exit early.

  if (dist1[0] * dist1[1] > tolerance && dist1[0] * dist1[2] > tolerance) {
    // vtkDebugMacro(<<"Same side supporting plane 1!");
    return {
      intersect: false,
      coplanar: coplanar,
      pt1: pt1,
      pt2: pt2,
      surfaceId: surfaceId
    };
  } // Do the same for p2, q2, r2 and supporting plane of first
  // triangle.

  var dist2 = [Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n1, p2) + s1, Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n1, q2) + s1, Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n1, r2) + s1]; // If signs of all points are the same, all the points lie on the
  // same side of the supporting plane, and we can exit early.

  if (dist2[0] * dist2[1] > tolerance && dist2[0] * dist2[2] > tolerance) {
    // vtkDebugMacro(<<"Same side supporting plane 2!");
    return {
      intersect: false,
      coplanar: coplanar,
      pt1: pt1,
      pt2: pt2,
      surfaceId: surfaceId
    };
  } // Check for coplanarity of the supporting planes.

  if (Math.abs(n1[0] - n2[0]) < 1e-9 && Math.abs(n1[1] - n2[1]) < 1e-9 && Math.abs(n1[2] - n2[2]) < 1e-9 && Math.abs(s1 - s2) < 1e-9) {
    coplanar = true; // vtkDebugMacro(<<"Coplanar!");

    return {
      intersect: false,
      coplanar: coplanar,
      pt1: pt1,
      pt2: pt2,
      surfaceId: surfaceId
    };
  } // There are more efficient ways to find the intersection line (if
  // it exists), but this is clear enough.

  var pts1 = [p1, q1, r1];
  var pts2 = [p2, q2, r2]; // Find line of intersection (L = p + t*v) between two planes.

  var n1n2 = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n1, n2);
  var a = (s1 - s2 * n1n2) / (n1n2 * n1n2 - 1.0);
  var b = (s2 - s1 * n1n2) / (n1n2 * n1n2 - 1.0);
  var p = [a * n1[0] + b * n2[0], a * n1[1] + b * n2[1], a * n1[2] + b * n2[2]];
  var v = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["k"])(n1, n2, []);
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["m"])(v);
  var index1 = 0;
  var index2 = 0;
  var t1 = [];
  var t2 = [];
  var ts1 = 50;
  var ts2 = 50;
  for (var i = 0; i < 3; i++) {
    var id1 = i;
    var id2 = (i + 1) % 3; // Find t coordinate on line of intersection between two planes.

    var val1 = _Plane_js__WEBPACK_IMPORTED_MODULE_5__["default"].intersectWithLine(pts1[id1], pts1[id2], p2, n2);
    if (val1.intersection && val1.t > 0 - tolerance && val1.t < 1 + tolerance) {
      if (val1.t < 1 + tolerance && val1.t > 1 - tolerance) {
        ts1 = index1;
      }
      t1[index1++] = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(val1.x, v) - Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(p, v);
    }
    var val2 = _Plane_js__WEBPACK_IMPORTED_MODULE_5__["default"].intersectWithLine(pts2[id1], pts2[id2], p1, n1);
    if (val2.intersection && val2.t > 0 - tolerance && val2.t < 1 + tolerance) {
      if (val2.t < 1 + tolerance && val2.t > 1 - tolerance) {
        ts2 = index2;
      }
      t2[index2++] = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(val2.x, v) - Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(p, v);
    }
  } // If the value of the index is greater than 2, the intersecting point
  // actually is intersected by all three edges. In this case, set the two
  // edges to the two edges where the intersecting point is not the end point

  if (index1 > 2) {
    index1--; // swap

    var t12 = t1[2];
    t1[2] = t1[ts1];
    t1[ts1] = t12;
  }
  if (index2 > 2) {
    index2--;
    var t22 = t2[2];
    t2[2] = t2[ts2];
    t2[ts2] = t22;
  } // Check if only one edge or all edges intersect the supporting
  // planes intersection.

  if (index1 !== 2 || index2 !== 2) {
    // vtkDebugMacro(<<"Only one edge intersecting!");
    return {
      intersect: false,
      coplanar: coplanar,
      pt1: pt1,
      pt2: pt2,
      surfaceId: surfaceId
    };
  } // Check for NaNs

  if (Number.isNaN(t1[0]) || Number.isNaN(t1[1]) || Number.isNaN(t2[0]) || Number.isNaN(t2[1])) {
    // vtkWarningMacro(<<"NaNs!");
    return {
      intersect: false,
      coplanar: coplanar,
      pt1: pt1,
      pt2: pt2,
      surfaceId: surfaceId
    };
  }
  if (t1[0] > t1[1]) {
    // swap
    var t11 = t1[1];
    t1[1] = t1[0];
    t1[0] = t11;
  }
  if (t2[0] > t2[1]) {
    // swap
    var t21 = t2[1];
    t2[1] = t2[0];
    t2[0] = t21;
  } // Handle the different interval configuration cases.

  var tt1;
  var tt2;
  if (t1[1] < t2[0] || t2[1] < t1[0]) {
    // vtkDebugMacro(<<"No Overlap!");
    return {
      intersect: false,
      coplanar: coplanar,
      pt1: pt1,
      pt2: pt2,
      surfaceId: surfaceId
    }; // No overlap
  }

  if (t1[0] < t2[0]) {
    if (t1[1] < t2[1]) {
      // First point on surface 2, second point on surface 1
      surfaceId[0] = 2;
      surfaceId[1] = 1;
      tt1 = t2[0];
      tt2 = t1[1];
    } else {
      // Both points belong to lines on surface 2
      surfaceId[0] = 2;
      surfaceId[1] = 2;
      tt1 = t2[0];
      tt2 = t2[1];
    }
  } // t1[0] >= t2[0]
  else if (t1[1] < t2[1]) {
    // Both points belong to lines on surface 1
    surfaceId[0] = 1;
    surfaceId[1] = 1;
    tt1 = t1[0];
    tt2 = t1[1];
  } else {
    // First point on surface 1, second point on surface 2
    surfaceId[0] = 1;
    surfaceId[1] = 2;
    tt1 = t1[0];
    tt2 = t2[1];
  } // Create actual intersection points.

  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["o"])(p, v, tt1, pt1);
  Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["o"])(p, v, tt2, pt2);
  return {
    intersect: true,
    coplanar: coplanar,
    pt1: pt1,
    pt2: pt2,
    surfaceId: surfaceId
  };
} // ----------------------------------------------------------------------------
// Static API
// ----------------------------------------------------------------------------

var STATIC = {
  computeNormalDirection: computeNormalDirection,
  computeNormal: computeNormal,
  intersectWithTriangle: intersectWithTriangle
}; // ----------------------------------------------------------------------------
// vtkTriangle methods
// ----------------------------------------------------------------------------

function vtkTriangle(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkTriangle');
  publicAPI.getCellDimension = function () {
    return 2;
  };
  publicAPI.intersectWithLine = function (p1, p2, tol, x, pcoords) {
    var outObj = {
      subId: 0,
      t: Number.MAX_VALUE,
      intersect: 0,
      betweenPoints: false
    };
    pcoords[2] = 0.0;
    var closestPoint = [];
    var tol2 = tol * tol; // Get normal for triangle

    var pt1 = [];
    var pt2 = [];
    var pt3 = [];
    model.points.getPoint(0, pt1);
    model.points.getPoint(1, pt2);
    model.points.getPoint(2, pt3);
    var n = [];
    var weights = [];
    computeNormal(pt1, pt2, pt3, n);
    if (n[0] !== 0 || n[1] !== 0 || n[2] !== 0) {
      // Intersect plane of triangle with line
      var plane = _Plane_js__WEBPACK_IMPORTED_MODULE_5__["default"].intersectWithLine(p1, p2, pt1, n);
      outObj.betweenPoints = plane.betweenPoints;
      outObj.t = plane.t;
      x[0] = plane.x[0];
      x[1] = plane.x[1];
      x[2] = plane.x[2];
      if (!plane.intersection) {
        pcoords[0] = 0.0;
        pcoords[1] = 0.0;
        outObj.intersect = 0;
        return outObj;
      } // Evaluate position

      var inside = publicAPI.evaluatePosition(x, closestPoint, pcoords, weights);
      if (inside.evaluation >= 0) {
        if (inside.dist2 <= tol2) {
          outObj.intersect = 1;
          return outObj;
        }
        outObj.intersect = inside.evaluation;
        return outObj;
      }
    } // Normals are null, so the triangle is degenerated and
    // we still need to check intersection between line and
    // the longest edge.

    var dist2Pt1Pt2 = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["f"])(pt1, pt2);
    var dist2Pt2Pt3 = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["f"])(pt2, pt3);
    var dist2Pt3Pt1 = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["f"])(pt3, pt1);
    if (!model.line) {
      model.line = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].newInstance();
    }
    if (dist2Pt1Pt2 > dist2Pt2Pt3 && dist2Pt1Pt2 > dist2Pt3Pt1) {
      model.line.getPoints().setPoint(0, pt1);
      model.line.getPoints().setPoint(1, pt2);
    } else if (dist2Pt2Pt3 > dist2Pt3Pt1 && dist2Pt2Pt3 > dist2Pt1Pt2) {
      model.line.getPoints().setPoint(0, pt2);
      model.line.getPoints().setPoint(1, pt3);
    } else {
      model.line.getPoints().setPoint(0, pt3);
      model.line.getPoints().setPoint(1, pt1);
    }
    var intersectLine = model.line.intersectWithLine(p1, p2, tol, x, pcoords);
    outObj.betweenPoints = intersectLine.betweenPoints;
    outObj.t = intersectLine.t;
    if (intersectLine.intersect) {
      var pt3Pt1 = [];
      var pt3Pt2 = [];
      var pt3X = []; // Compute r and s manually, using dot and norm.

      for (var i = 0; i < 3; i++) {
        pt3Pt1[i] = pt1[i] - pt3[i];
        pt3Pt2[i] = pt2[i] - pt3[i];
        pt3X[i] = x[i] - pt3[i];
      }
      pcoords[0] = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(pt3X, pt3Pt1) / dist2Pt3Pt1;
      pcoords[1] = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["d"])(pt3X, pt3Pt2) / dist2Pt2Pt3;
      outObj.intersect = 1;
      return outObj;
    }
    pcoords[0] = 0.0;
    pcoords[1] = 0.0;
    outObj.intersect = 0;
    return outObj;
  };
  publicAPI.evaluatePosition = function (x, closestPoint, pcoords, weights) {
    // will return obj
    var outObj = {
      subId: 0,
      dist2: 0,
      evaluation: -1
    };
    var i;
    var j;
    var pt1 = [];
    var pt2 = [];
    var pt3 = [];
    var n = [];
    var fabsn;
    var rhs = [];
    var c1 = [];
    var c2 = [];
    var det = 0;
    var idx = 0;
    var indices = [];
    var dist2Point;
    var dist2Line1;
    var dist2Line2;
    var closest = [];
    var closestPoint1 = [];
    var closestPoint2 = [];
    var cp = [];
    outObj.subId = 0;
    pcoords[2] = 0.0; // Get normal for triangle, only the normal direction is needed, i.e. the
    // normal need not be normalized (unit length)
    //

    model.points.getPoint(1, pt1);
    model.points.getPoint(2, pt2);
    model.points.getPoint(0, pt3);
    computeNormalDirection(pt1, pt2, pt3, n); // Project point to plane

    _Plane_js__WEBPACK_IMPORTED_MODULE_5__["default"].generalizedProjectPoint(x, pt1, n, cp); // Construct matrices.  Since we have over determined system, need to find
    // which 2 out of 3 equations to use to develop equations. (Any 2 should
    // work since we've projected point to plane.)

    var maxComponent = 0.0;
    for (i = 0; i < 3; i++) {
      // trying to avoid an expensive call to fabs()
      if (n[i] < 0) {
        fabsn = -n[i];
      } else {
        fabsn = n[i];
      }
      if (fabsn > maxComponent) {
        maxComponent = fabsn;
        idx = i;
      }
    }
    for (j = 0, i = 0; i < 3; i++) {
      if (i !== idx) {
        indices[j++] = i;
      }
    }
    for (i = 0; i < 2; i++) {
      rhs[i] = cp[indices[i]] - pt3[indices[i]];
      c1[i] = pt1[indices[i]] - pt3[indices[i]];
      c2[i] = pt2[indices[i]] - pt3[indices[i]];
    }
    det = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["p"])(c1, c2);
    if (det === 0.0) {
      pcoords[0] = 0.0;
      pcoords[1] = 0.0;
      outObj.evaluation = -1;
      return outObj;
    }
    pcoords[0] = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["p"])(rhs, c2) / det;
    pcoords[1] = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["p"])(c1, rhs) / det; // Okay, now find closest point to element

    weights[0] = 1 - (pcoords[0] + pcoords[1]);
    weights[1] = pcoords[0];
    weights[2] = pcoords[1];
    if (weights[0] >= 0.0 && weights[0] <= 1.0 && weights[1] >= 0.0 && weights[1] <= 1.0 && weights[2] >= 0.0 && weights[2] <= 1.0) {
      // projection distance
      if (closestPoint) {
        outObj.dist2 = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["f"])(cp, x);
        closestPoint[0] = cp[0];
        closestPoint[1] = cp[1];
        closestPoint[2] = cp[2];
      }
      outObj.evaluation = 1;
    } else {
      var t;
      if (closestPoint) {
        if (weights[1] < 0.0 && weights[2] < 0.0) {
          dist2Point = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["f"])(x, pt3);
          dist2Line1 = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt1, pt3, t, closestPoint1);
          dist2Line2 = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt3, pt2, t, closestPoint2);
          if (dist2Point < dist2Line1) {
            outObj.dist2 = dist2Point;
            closest = pt3;
          } else {
            outObj.dist2 = dist2Line1;
            closest = closestPoint1;
          }
          if (dist2Line2 < outObj.dist2) {
            outObj.dist2 = dist2Line2;
            closest = closestPoint2;
          }
          for (i = 0; i < 3; i++) {
            closestPoint[i] = closest[i];
          }
        } else if (weights[2] < 0.0 && weights[0] < 0.0) {
          dist2Point = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["f"])(x, pt1);
          dist2Line1 = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt1, pt3, t, closestPoint1);
          dist2Line2 = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt1, pt2, t, closestPoint2);
          if (dist2Point < dist2Line1) {
            outObj.dist2 = dist2Point;
            closest = pt1;
          } else {
            outObj.dist2 = dist2Line1;
            closest = closestPoint1;
          }
          if (dist2Line2 < outObj.dist2) {
            outObj.dist2 = dist2Line2;
            closest = closestPoint2;
          }
          for (i = 0; i < 3; i++) {
            closestPoint[i] = closest[i];
          }
        } else if (weights[1] < 0.0 && weights[0] < 0.0) {
          dist2Point = Object(_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["f"])(x, pt2);
          dist2Line1 = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt2, pt3, t, closestPoint1);
          dist2Line2 = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt1, pt2, t, closestPoint2);
          if (dist2Point < dist2Line1) {
            outObj.dist2 = dist2Point;
            closest = pt2;
          } else {
            outObj.dist2 = dist2Line1;
            closest = closestPoint1;
          }
          if (dist2Line2 < outObj.dist2) {
            outObj.dist2 = dist2Line2;
            closest = closestPoint2;
          }
          for (i = 0; i < 3; i++) {
            closestPoint[i] = closest[i];
          }
        } else if (weights[0] < 0.0) {
          var lineDistance = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt1, pt2, closestPoint);
          outObj.dist2 = lineDistance.distance;
        } else if (weights[1] < 0.0) {
          var _lineDistance = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt2, pt3, closestPoint);
          outObj.dist2 = _lineDistance.distance;
        } else if (weights[2] < 0.0) {
          var _lineDistance2 = _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"].distanceToLine(x, pt1, pt3, closestPoint);
          outObj.dist2 = _lineDistance2.distance;
        }
      }
      outObj.evaluation = 0;
    }
    return outObj;
  };
  publicAPI.evaluateLocation = function (pcoords, x, weights) {
    var p0 = [];
    var p1 = [];
    var p2 = [];
    model.points.getPoint(0, p0);
    model.points.getPoint(1, p1);
    model.points.getPoint(2, p2);
    var u3 = 1.0 - pcoords[0] - pcoords[1];
    for (var i = 0; i < 3; i++) {
      x[i] = p0[i] * u3 + p1[i] * pcoords[0] + p2[i] * pcoords[1];
    }
    weights[0] = u3;
    weights[1] = pcoords[0];
    weights[2] = pcoords[1];
  };
  publicAPI.getParametricDistance = function (pcoords) {
    var pDist;
    var pDistMax = 0.0;
    var pc = [];
    pc[0] = pcoords[0];
    pc[1] = pcoords[1];
    pc[2] = 1.0 - pcoords[0] - pcoords[1];
    for (var i = 0; i < 3; i++) {
      if (pc[i] < 0.0) {
        pDist = -pc[i];
      } else if (pc[i] > 1.0) {
        pDist = pc[i] - 1.0;
      } else {
        // inside the cell in the parametric direction
        pDist = 0.0;
      }
      if (pDist > pDistMax) {
        pDistMax = pDist;
      }
    }
    return pDistMax;
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  _Cell_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(publicAPI, model, initialValues);
  vtkTriangle(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance(extend, 'vtkTriangle'); // ----------------------------------------------------------------------------

var vtkTriangle$1 = _objectSpread({
  newInstance: newInstance,
  extend: extend
}, STATIC);


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Filters/General/ImageMarchingCubes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Filters/General/ImageMarchingCubes.js ***!
  \****************************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkImageMarchingCubes$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Common_Core_DataArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common/Core/DataArray.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray.js");
/* harmony import */ var _Common_DataModel_EdgeLocator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/DataModel/EdgeLocator.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/EdgeLocator.js");
/* harmony import */ var _Common_DataModel_PolyData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/DataModel/PolyData.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/PolyData.js");
/* harmony import */ var _Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/Core/Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");
/* harmony import */ var _ImageMarchingCubes_caseTable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageMarchingCubes/caseTable.js */ "./node_modules/@kitware/vtk.js/Filters/General/ImageMarchingCubes/caseTable.js");






var vtkErrorMacro = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].vtkErrorMacro,
  vtkDebugMacro = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].vtkDebugMacro; // ----------------------------------------------------------------------------
// vtkImageMarchingCubes methods
// ----------------------------------------------------------------------------

function vtkImageMarchingCubes(publicAPI, model) {
  /**
   * CUSTOM CHANGES
   */
  var cBuffer = [];
  publicAPI.getColors = function () {
    return cBuffer;
  };
  /**
   * CUSTOM CHANGES
   */

  // Set our className
  model.classHierarchy.push('vtkImageMarchingCubes');
  var ids = [];
  var voxelScalars = [];
  var voxelGradients = [];
  var voxelPts = [];
  var edgeLocator = _Common_DataModel_EdgeLocator_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance(); // Retrieve scalars and voxel coordinates. i-j-k is origin of voxel.

  publicAPI.getVoxelScalars = function (i, j, k, slice, dims, origin, spacing, s) {
    // First get the indices for the voxel
    ids[0] = k * slice + j * dims[0] + i; // i, j, k

    ids[1] = ids[0] + 1; // i+1, j, k

    ids[2] = ids[0] + dims[0]; // i, j+1, k

    ids[3] = ids[2] + 1; // i+1, j+1, k

    ids[4] = ids[0] + slice; // i, j, k+1

    ids[5] = ids[4] + 1; // i+1, j, k+1

    ids[6] = ids[4] + dims[0]; // i, j+1, k+1

    ids[7] = ids[6] + 1; // i+1, j+1, k+1
    // Now retrieve the scalars

    for (var ii = 0; ii < 8; ++ii) {
      voxelScalars[ii] = s[ids[ii]];
    }
  }; // Retrieve voxel coordinates. i-j-k is origin of voxel.

  publicAPI.getVoxelPoints = function (i, j, k, origin, spacing) {
    // (i,i+1),(j,j+1),(k,k+1) - i varies fastest; then j; then k
    voxelPts[0] = origin[0] + i * spacing[0]; // 0

    voxelPts[1] = origin[1] + j * spacing[1];
    voxelPts[2] = origin[2] + k * spacing[2];
    voxelPts[3] = voxelPts[0] + spacing[0]; // 1

    voxelPts[4] = voxelPts[1];
    voxelPts[5] = voxelPts[2];
    voxelPts[6] = voxelPts[0]; // 2

    voxelPts[7] = voxelPts[1] + spacing[1];
    voxelPts[8] = voxelPts[2];
    voxelPts[9] = voxelPts[3]; // 3

    voxelPts[10] = voxelPts[7];
    voxelPts[11] = voxelPts[2];
    voxelPts[12] = voxelPts[0]; // 4

    voxelPts[13] = voxelPts[1];
    voxelPts[14] = voxelPts[2] + spacing[2];
    voxelPts[15] = voxelPts[3]; // 5

    voxelPts[16] = voxelPts[1];
    voxelPts[17] = voxelPts[14];
    voxelPts[18] = voxelPts[0]; // 6

    voxelPts[19] = voxelPts[7];
    voxelPts[20] = voxelPts[14];
    voxelPts[21] = voxelPts[3]; // 7

    voxelPts[22] = voxelPts[7];
    voxelPts[23] = voxelPts[14];
  }; // Compute point gradient at i-j-k location

  publicAPI.getPointGradient = function (i, j, k, dims, slice, spacing, s, g) {
    var sp;
    var sm; // x-direction

    if (i === 0) {
      sp = s[i + 1 + j * dims[0] + k * slice];
      sm = s[i + j * dims[0] + k * slice];
      g[0] = (sm - sp) / spacing[0];
    } else if (i === dims[0] - 1) {
      sp = s[i + j * dims[0] + k * slice];
      sm = s[i - 1 + j * dims[0] + k * slice];
      g[0] = (sm - sp) / spacing[0];
    } else {
      sp = s[i + 1 + j * dims[0] + k * slice];
      sm = s[i - 1 + j * dims[0] + k * slice];
      g[0] = 0.5 * (sm - sp) / spacing[0];
    } // y-direction

    if (j === 0) {
      sp = s[i + (j + 1) * dims[0] + k * slice];
      sm = s[i + j * dims[0] + k * slice];
      g[1] = (sm - sp) / spacing[1];
    } else if (j === dims[1] - 1) {
      sp = s[i + j * dims[0] + k * slice];
      sm = s[i + (j - 1) * dims[0] + k * slice];
      g[1] = (sm - sp) / spacing[1];
    } else {
      sp = s[i + (j + 1) * dims[0] + k * slice];
      sm = s[i + (j - 1) * dims[0] + k * slice];
      g[1] = 0.5 * (sm - sp) / spacing[1];
    } // z-direction

    if (k === 0) {
      sp = s[i + j * dims[0] + (k + 1) * slice];
      sm = s[i + j * dims[0] + k * slice];
      g[2] = (sm - sp) / spacing[2];
    } else if (k === dims[2] - 1) {
      sp = s[i + j * dims[0] + k * slice];
      sm = s[i + j * dims[0] + (k - 1) * slice];
      g[2] = (sm - sp) / spacing[2];
    } else {
      sp = s[i + j * dims[0] + (k + 1) * slice];
      sm = s[i + j * dims[0] + (k - 1) * slice];
      g[2] = 0.5 * (sm - sp) / spacing[2];
    }
  }; // Compute voxel gradient values. I-j-k is origin point of voxel.

  publicAPI.getVoxelGradients = function (i, j, k, dims, slice, spacing, scalars) {
    var g = [];
    publicAPI.getPointGradient(i, j, k, dims, slice, spacing, scalars, g);
    voxelGradients[0] = g[0];
    voxelGradients[1] = g[1];
    voxelGradients[2] = g[2];
    publicAPI.getPointGradient(i + 1, j, k, dims, slice, spacing, scalars, g);
    voxelGradients[3] = g[0];
    voxelGradients[4] = g[1];
    voxelGradients[5] = g[2];
    publicAPI.getPointGradient(i, j + 1, k, dims, slice, spacing, scalars, g);
    voxelGradients[6] = g[0];
    voxelGradients[7] = g[1];
    voxelGradients[8] = g[2];
    publicAPI.getPointGradient(i + 1, j + 1, k, dims, slice, spacing, scalars, g);
    voxelGradients[9] = g[0];
    voxelGradients[10] = g[1];
    voxelGradients[11] = g[2];
    publicAPI.getPointGradient(i, j, k + 1, dims, slice, spacing, scalars, g);
    voxelGradients[12] = g[0];
    voxelGradients[13] = g[1];
    voxelGradients[14] = g[2];
    publicAPI.getPointGradient(i + 1, j, k + 1, dims, slice, spacing, scalars, g);
    voxelGradients[15] = g[0];
    voxelGradients[16] = g[1];
    voxelGradients[17] = g[2];
    publicAPI.getPointGradient(i, j + 1, k + 1, dims, slice, spacing, scalars, g);
    voxelGradients[18] = g[0];
    voxelGradients[19] = g[1];
    voxelGradients[20] = g[2];
    publicAPI.getPointGradient(i + 1, j + 1, k + 1, dims, slice, spacing, scalars, g);
    voxelGradients[21] = g[0];
    voxelGradients[22] = g[1];
    voxelGradients[23] = g[2];
  };

  // publicAPI.produceTriangles = function (cVal, i, j, k, extent, slice, dims, origin, spacing, scalars, points, tris, normals) {
  /**
     * CUSTOM CHANGES
     */
  publicAPI.produceTriangles = function (cVal, i, j, k, extent, slice, dims, origin, spacing, scalars, points, colors, tris, normals) {
    /**
     * CUSTOM CHANGES
     */
    var CASE_MASK = [1, 2, 4, 8, 16, 32, 64, 128];
    var VERT_MAP = [0, 1, 3, 2, 4, 5, 7, 6];
    var xyz = [];

    /**
     * CUSTOM CHANGES
     */
    var xyz2 = 0;
    /**
     * CUSTOM CHANGES
     */

    var n = [];
    var pId;
    publicAPI.getVoxelScalars(i, j, k, slice, dims, origin, spacing, scalars);
    var index = 0;
    for (var idx = 0; idx < 8; idx++) {
      if (voxelScalars[VERT_MAP[idx]] >= cVal) {
        index |= CASE_MASK[idx]; // eslint-disable-line no-bitwise
      }
    }

    var voxelTris = _ImageMarchingCubes_caseTable_js__WEBPACK_IMPORTED_MODULE_5__["default"].getCase(index);
    if (voxelTris[0] < 0) {
      return; // don't get the voxel coordinates, nothing to do
    }

    publicAPI.getVoxelPoints(i + extent[0], j + extent[2], k + extent[4], origin, spacing);
    if (model.computeNormals) {
      publicAPI.getVoxelGradients(i, j, k, dims, slice, spacing, scalars);
    }

    /**
     * CUSTOM CHANGES
     */
    var y_mul = dims[0];
    var z_mul = dims[0] * dims[1];
    var _index = i + j * y_mul + k * z_mul;
    /**
     * CUSTOM CHANGES
     */

    for (var _idx = 0; voxelTris[_idx] >= 0; _idx += 3) {
      tris.push(3);
      for (var eid = 0; eid < 3; eid++) {
        var edgeVerts = _ImageMarchingCubes_caseTable_js__WEBPACK_IMPORTED_MODULE_5__["default"].getEdge(voxelTris[_idx + eid]);
        pId = undefined;
        if (model.mergePoints) {
          var _edgeLocator$isInsert;
          pId = (_edgeLocator$isInsert = edgeLocator.isInsertedEdge(ids[edgeVerts[0]], ids[edgeVerts[1]])) === null || _edgeLocator$isInsert === void 0 ? void 0 : _edgeLocator$isInsert.value;
        }
        if (pId === undefined) {
          var t = (cVal - voxelScalars[edgeVerts[0]]) / (voxelScalars[edgeVerts[1]] - voxelScalars[edgeVerts[0]]);
          var x0 = voxelPts.slice(edgeVerts[0] * 3, (edgeVerts[0] + 1) * 3);
          var x1 = voxelPts.slice(edgeVerts[1] * 3, (edgeVerts[1] + 1) * 3);
          xyz[0] = x0[0] + t * (x1[0] - x0[0]);
          xyz[1] = x0[1] + t * (x1[1] - x0[1]);
          xyz[2] = x0[2] + t * (x1[2] - x0[2]);
          pId = points.length / 3;
          points.push(xyz[0], xyz[1], xyz[2]);

          /**
           * CUSTOM CHANGES
           */
          {
            var xx0 = voxelScalars.slice(edgeVerts[0] * 1, (edgeVerts[0] + 1) * 1);
            var xx1 = voxelScalars.slice(edgeVerts[1] * 1, (edgeVerts[1] + 1) * 1);
            // LOG(xx0, xx1)
            // xyz2 = xx0[0] + t * (xx1[0] - xx0[0]);
            xyz2 = 0.5 * (xx1[0] + xx0[0]);
            // LOG(xx0, xx1, xyz2, t)
            // if (xyz2 / 1232 < 0.55)
            // {
            //   colors.push(1, 0, 0);
            // }
            // else
            // {
            //   colors.push(0.5, 0.5, 0.5);
            // }

            var _min = global.min;
            var _max = global.max;
            var greyscale = (global.data_orig[_index] - _min) / (_max - _min);

            // colors.push(greyscale, 0, 1 - greyscale);
            colors.push(greyscale, greyscale, greyscale);

            // if (greyscale < 0.5)
            // {
            //   colors.push(greyscale, 0, 0);
            // }
            // else
            // {
            //   colors.push(greyscale, greyscale, greyscale);
            //   // colors.push(0, 0, greyscale);
            // }

            // colors.push(qwe, qwe, qwe);
          }
          /**
           * CUSTOM CHANGES
           */

          if (model.computeNormals) {
            var n0 = voxelGradients.slice(edgeVerts[0] * 3, (edgeVerts[0] + 1) * 3);
            var n1 = voxelGradients.slice(edgeVerts[1] * 3, (edgeVerts[1] + 1) * 3);
            n[0] = n0[0] + t * (n1[0] - n0[0]);
            n[1] = n0[1] + t * (n1[1] - n0[1]);
            n[2] = n0[2] + t * (n1[2] - n0[2]);
            Object(_Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_4__["m"])(n);
            normals.push(n[0], n[1], n[2]);
          }
          if (model.mergePoints) {
            edgeLocator.insertEdge(ids[edgeVerts[0]], ids[edgeVerts[1]], pId);
          }
        }
        tris.push(pId);
      }
    }
  };
  publicAPI.requestData = function (inData, outData) {
    // implement requestData
    var input = inData[0];
    if (!input) {
      vtkErrorMacro('Invalid or missing input');
      return;
    }
    console.time('mcubes'); // Retrieve output and volume data

    var origin = input.getOrigin();
    var spacing = input.getSpacing();
    var dims = input.getDimensions();
    var s = input.getPointData().getScalars().getData(); // Points - dynamic array

    var pBuffer = []; // Cells - dynamic array

    /**
     * CUSTOM CHANGES
     */
    // Colors - dynamic array
    cBuffer.length = [];
    /**
     * CUSTOM CHANGES
     */

    var tBuffer = []; // Normals

    var nBuffer = []; // Loop over all voxels, determine case and process

    var extent = input.getExtent();
    var slice = dims[0] * dims[1];

    // for (var k = 0; k < dims[2] - 1; ++k) {
    //   for (var j = 0; j < dims[1] - 1; ++j) {
    //     for (var i = 0; i < dims[0] - 1; ++i) {
    /**
     * CUSTOM CHANGES
     */
    // LOG('k_min', k_min, k_max, j_min, j_max, i_min, i_max)
    for (var k = k_min || 0; k < (k_max || dims[2] - 1); ++k) {
      for (var j = j_min || 0; j < (j_max || dims[1] - 1); ++j) {
        for (var i = i_min || 0; i < (i_max || dims[0] - 1); ++i) {
          /**
           * CUSTOM CHANGES
           */
          // publicAPI.produceTriangles(model.contourValue, i, j, k, extent, slice, dims, origin, spacing, s, pBuffer, tBuffer, nBuffer);

          /**
             * CUSTOM CHANGES
             */
          publicAPI.produceTriangles(model.contourValue, i, j, k, extent, slice, dims, origin, spacing, s, pBuffer, cBuffer, tBuffer, nBuffer);
          /**
           * CUSTOM CHANGES
           */
        }
      }
    } // Update output

    var polydata = _Common_DataModel_PolyData_js__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
    polydata.getPoints().setData(new Float32Array(pBuffer), 3);
    polydata.getPolys().setData(new Uint32Array(tBuffer));
    if (model.computeNormals) {
      var nData = new Float32Array(nBuffer);
      var normals = _Common_Core_DataArray_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance({
        numberOfComponents: 3,
        values: nData,
        name: 'Normals'
      });
      polydata.getPointData().setNormals(normals);
    }
    outData[0] = polydata;
    vtkDebugMacro('Produced output');
    console.timeEnd('mcubes');
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  contourValue: 0,
  computeNormals: false,
  mergePoints: false
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues); // Make this a VTK object

  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].obj(publicAPI, model); // Also make it an algorithm with one input and one output

  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].algo(publicAPI, model, 1, 1);
  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].setGet(publicAPI, model, ['contourValue', 'computeNormals', 'mergePoints']); // Object specific methods

  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].algo(publicAPI, model, 1, 1);
  vtkImageMarchingCubes(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].newInstance(extend, 'vtkImageMarchingCubes'); // ----------------------------------------------------------------------------

var vtkImageMarchingCubes$1 = {
  newInstance: newInstance,
  extend: extend
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Filters/General/ImageMarchingCubes/caseTable.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Filters/General/ImageMarchingCubes/caseTable.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkCaseTable; });
// ----------------------------------------------------------------------------
// Marching cubes case functions (using triangles to complete tessellation).
// For each case, a list of edge ids that form the triangles. A -1 marks the
// end of the list of edges. Edges are taken three at a time to generate
// triangle points.
// ----------------------------------------------------------------------------
var MARCHING_CUBE_CASES = [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 0 0 */, [0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 1 1 */, [0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 2 1 */, [1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 3 2 */, [1, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 4 1 */, [0, 3, 8, 1, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 5 3 */, [9, 11, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 6 2 */, [2, 3, 8, 2, 8, 11, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1]
/* 7 5 */, [3, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 8 1 */, [0, 2, 10, 8, 0, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 9 2 */, [1, 0, 9, 2, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 10 3 */, [1, 2, 10, 1, 10, 9, 9, 10, 8, -1, -1, -1, -1, -1, -1, -1]
/* 11 5 */, [3, 1, 11, 10, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 12 2 */, [0, 1, 11, 0, 11, 8, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1]
/* 13 5 */, [3, 0, 9, 3, 9, 10, 10, 9, 11, -1, -1, -1, -1, -1, -1, -1]
/* 14 5 */, [9, 11, 8, 11, 10, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 15 8 */, [4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 16 1 */, [4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 17 2 */, [0, 9, 1, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 18 3 */, [4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1]
/* 19 5 */, [1, 11, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 20 4 */, [3, 7, 4, 3, 4, 0, 1, 11, 2, -1, -1, -1, -1, -1, -1, -1]
/* 21 7 */, [9, 11, 2, 9, 2, 0, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1]
/* 22 7 */, [2, 9, 11, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1]
/* 23 14 */, [8, 7, 4, 3, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 24 3 */, [10, 7, 4, 10, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1]
/* 25 5 */, [9, 1, 0, 8, 7, 4, 2, 10, 3, -1, -1, -1, -1, -1, -1, -1]
/* 26 6 */, [4, 10, 7, 9, 10, 4, 9, 2, 10, 9, 1, 2, -1, -1, -1, -1]
/* 27 9 */, [3, 1, 11, 3, 11, 10, 7, 4, 8, -1, -1, -1, -1, -1, -1, -1]
/* 28 7 */, [1, 11, 10, 1, 10, 4, 1, 4, 0, 7, 4, 10, -1, -1, -1, -1]
/* 29 11 */, [4, 8, 7, 9, 10, 0, 9, 11, 10, 10, 3, 0, -1, -1, -1, -1]
/* 30 12 */, [4, 10, 7, 4, 9, 10, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1]
/* 31 5 */, [9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 32 1 */, [9, 4, 5, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 33 3 */, [0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 34 2 */, [8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1]
/* 35 5 */, [1, 11, 2, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 36 3 */, [3, 8, 0, 1, 11, 2, 4, 5, 9, -1, -1, -1, -1, -1, -1, -1]
/* 37 6 */, [5, 11, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1]
/* 38 5 */, [2, 5, 11, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1]
/* 39 9 */, [9, 4, 5, 2, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 40 4 */, [0, 2, 10, 0, 10, 8, 4, 5, 9, -1, -1, -1, -1, -1, -1, -1]
/* 41 7 */, [0, 4, 5, 0, 5, 1, 2, 10, 3, -1, -1, -1, -1, -1, -1, -1]
/* 42 7 */, [2, 5, 1, 2, 8, 5, 2, 10, 8, 4, 5, 8, -1, -1, -1, -1]
/* 43 11 */, [11, 10, 3, 11, 3, 1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1]
/* 44 7 */, [4, 5, 9, 0, 1, 8, 8, 1, 11, 8, 11, 10, -1, -1, -1, -1]
/* 45 12 */, [5, 0, 4, 5, 10, 0, 5, 11, 10, 10, 3, 0, -1, -1, -1, -1]
/* 46 14 */, [5, 8, 4, 5, 11, 8, 11, 10, 8, -1, -1, -1, -1, -1, -1, -1]
/* 47 5 */, [9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 48 2 */, [9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1]
/* 49 5 */, [0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1]
/* 50 5 */, [1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 51 8 */, [9, 8, 7, 9, 7, 5, 11, 2, 1, -1, -1, -1, -1, -1, -1, -1]
/* 52 7 */, [11, 2, 1, 9, 0, 5, 5, 0, 3, 5, 3, 7, -1, -1, -1, -1]
/* 53 12 */, [8, 2, 0, 8, 5, 2, 8, 7, 5, 11, 2, 5, -1, -1, -1, -1]
/* 54 11 */, [2, 5, 11, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1]
/* 55 5 */, [7, 5, 9, 7, 9, 8, 3, 2, 10, -1, -1, -1, -1, -1, -1, -1]
/* 56 7 */, [9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 10, 7, -1, -1, -1, -1]
/* 57 14 */, [2, 10, 3, 0, 8, 1, 1, 8, 7, 1, 7, 5, -1, -1, -1, -1]
/* 58 12 */, [10, 1, 2, 10, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1]
/* 59 5 */, [9, 8, 5, 8, 7, 5, 11, 3, 1, 11, 10, 3, -1, -1, -1, -1]
/* 60 10 */, [5, 0, 7, 5, 9, 0, 7, 0, 10, 1, 11, 0, 10, 0, 11, -1]
/* 61 7 */, [10, 0, 11, 10, 3, 0, 11, 0, 5, 8, 7, 0, 5, 0, 7, -1]
/* 62 7 */, [10, 5, 11, 7, 5, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 63 2 */, [11, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 64 1 */, [0, 3, 8, 5, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 65 4 */, [9, 1, 0, 5, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 66 3 */, [1, 3, 8, 1, 8, 9, 5, 6, 11, -1, -1, -1, -1, -1, -1, -1]
/* 67 7 */, [1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 68 2 */, [1, 5, 6, 1, 6, 2, 3, 8, 0, -1, -1, -1, -1, -1, -1, -1]
/* 69 7 */, [9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1]
/* 70 5 */, [5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1]
/* 71 11 */, [2, 10, 3, 11, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 72 3 */, [10, 8, 0, 10, 0, 2, 11, 5, 6, -1, -1, -1, -1, -1, -1, -1]
/* 73 7 */, [0, 9, 1, 2, 10, 3, 5, 6, 11, -1, -1, -1, -1, -1, -1, -1]
/* 74 6 */, [5, 6, 11, 1, 2, 9, 9, 2, 10, 9, 10, 8, -1, -1, -1, -1]
/* 75 12 */, [6, 10, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1]
/* 76 5 */, [0, 10, 8, 0, 5, 10, 0, 1, 5, 5, 6, 10, -1, -1, -1, -1]
/* 77 14 */, [3, 6, 10, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1]
/* 78 9 */, [6, 9, 5, 6, 10, 9, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1]
/* 79 5 */, [5, 6, 11, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 80 3 */, [4, 0, 3, 4, 3, 7, 6, 11, 5, -1, -1, -1, -1, -1, -1, -1]
/* 81 7 */, [1, 0, 9, 5, 6, 11, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1]
/* 82 6 */, [11, 5, 6, 1, 7, 9, 1, 3, 7, 7, 4, 9, -1, -1, -1, -1]
/* 83 12 */, [6, 2, 1, 6, 1, 5, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1]
/* 84 7 */, [1, 5, 2, 5, 6, 2, 3, 4, 0, 3, 7, 4, -1, -1, -1, -1]
/* 85 10 */, [8, 7, 4, 9, 5, 0, 0, 5, 6, 0, 6, 2, -1, -1, -1, -1]
/* 86 12 */, [7, 9, 3, 7, 4, 9, 3, 9, 2, 5, 6, 9, 2, 9, 6, -1]
/* 87 7 */, [3, 2, 10, 7, 4, 8, 11, 5, 6, -1, -1, -1, -1, -1, -1, -1]
/* 88 6 */, [5, 6, 11, 4, 2, 7, 4, 0, 2, 2, 10, 7, -1, -1, -1, -1]
/* 89 12 */, [0, 9, 1, 4, 8, 7, 2, 10, 3, 5, 6, 11, -1, -1, -1, -1]
/* 90 13 */, [9, 1, 2, 9, 2, 10, 9, 10, 4, 7, 4, 10, 5, 6, 11, -1]
/* 91 6 */, [8, 7, 4, 3, 5, 10, 3, 1, 5, 5, 6, 10, -1, -1, -1, -1]
/* 92 12 */, [5, 10, 1, 5, 6, 10, 1, 10, 0, 7, 4, 10, 0, 10, 4, -1]
/* 93 7 */, [0, 9, 5, 0, 5, 6, 0, 6, 3, 10, 3, 6, 8, 7, 4, -1]
/* 94 6 */, [6, 9, 5, 6, 10, 9, 4, 9, 7, 7, 9, 10, -1, -1, -1, -1]
/* 95 3 */, [11, 9, 4, 6, 11, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 96 2 */, [4, 6, 11, 4, 11, 9, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1]
/* 97 7 */, [11, 1, 0, 11, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1]
/* 98 5 */, [8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 11, 1, -1, -1, -1, -1]
/* 99 14 */, [1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1]
/* 100 5 */, [3, 8, 0, 1, 9, 2, 2, 9, 4, 2, 4, 6, -1, -1, -1, -1]
/* 101 12 */, [0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 102 8 */, [8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1]
/* 103 5 */, [11, 9, 4, 11, 4, 6, 10, 3, 2, -1, -1, -1, -1, -1, -1, -1]
/* 104 7 */, [0, 2, 8, 2, 10, 8, 4, 11, 9, 4, 6, 11, -1, -1, -1, -1]
/* 105 10 */, [3, 2, 10, 0, 6, 1, 0, 4, 6, 6, 11, 1, -1, -1, -1, -1]
/* 106 12 */, [6, 1, 4, 6, 11, 1, 4, 1, 8, 2, 10, 1, 8, 1, 10, -1]
/* 107 7 */, [9, 4, 6, 9, 6, 3, 9, 3, 1, 10, 3, 6, -1, -1, -1, -1]
/* 108 11 */, [8, 1, 10, 8, 0, 1, 10, 1, 6, 9, 4, 1, 6, 1, 4, -1]
/* 109 7 */, [3, 6, 10, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1]
/* 110 5 */, [6, 8, 4, 10, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 111 2 */, [7, 6, 11, 7, 11, 8, 8, 11, 9, -1, -1, -1, -1, -1, -1, -1]
/* 112 5 */, [0, 3, 7, 0, 7, 11, 0, 11, 9, 6, 11, 7, -1, -1, -1, -1]
/* 113 11 */, [11, 7, 6, 1, 7, 11, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1]
/* 114 9 */, [11, 7, 6, 11, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1]
/* 115 5 */, [1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1]
/* 116 14 */, [2, 9, 6, 2, 1, 9, 6, 9, 7, 0, 3, 9, 7, 9, 3, -1]
/* 117 7 */, [7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1]
/* 118 5 */, [7, 2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 119 2 */, [2, 10, 3, 11, 8, 6, 11, 9, 8, 8, 7, 6, -1, -1, -1, -1]
/* 120 12 */, [2, 7, 0, 2, 10, 7, 0, 7, 9, 6, 11, 7, 9, 7, 11, -1]
/* 121 7 */, [1, 0, 8, 1, 8, 7, 1, 7, 11, 6, 11, 7, 2, 10, 3, -1]
/* 122 6 */, [10, 1, 2, 10, 7, 1, 11, 1, 6, 6, 1, 7, -1, -1, -1, -1]
/* 123 3 */, [8, 6, 9, 8, 7, 6, 9, 6, 1, 10, 3, 6, 1, 6, 3, -1]
/* 124 7 */, [0, 1, 9, 10, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 125 4 */, [7, 0, 8, 7, 6, 0, 3, 0, 10, 10, 0, 6, -1, -1, -1, -1]
/* 126 3 */, [7, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 127 1 */, [7, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 128 1 */, [3, 8, 0, 10, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 129 3 */, [0, 9, 1, 10, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 130 4 */, [8, 9, 1, 8, 1, 3, 10, 6, 7, -1, -1, -1, -1, -1, -1, -1]
/* 131 7 */, [11, 2, 1, 6, 7, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 132 3 */, [1, 11, 2, 3, 8, 0, 6, 7, 10, -1, -1, -1, -1, -1, -1, -1]
/* 133 6 */, [2, 0, 9, 2, 9, 11, 6, 7, 10, -1, -1, -1, -1, -1, -1, -1]
/* 134 7 */, [6, 7, 10, 2, 3, 11, 11, 3, 8, 11, 8, 9, -1, -1, -1, -1]
/* 135 12 */, [7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 136 2 */, [7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1]
/* 137 5 */, [2, 6, 7, 2, 7, 3, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1]
/* 138 7 */, [1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1]
/* 139 14 */, [11, 6, 7, 11, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1]
/* 140 5 */, [11, 6, 7, 1, 11, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1]
/* 141 9 */, [0, 7, 3, 0, 11, 7, 0, 9, 11, 6, 7, 11, -1, -1, -1, -1]
/* 142 11 */, [7, 11, 6, 7, 8, 11, 8, 9, 11, -1, -1, -1, -1, -1, -1, -1]
/* 143 5 */, [6, 4, 8, 10, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 144 2 */, [3, 10, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1]
/* 145 5 */, [8, 10, 6, 8, 6, 4, 9, 1, 0, -1, -1, -1, -1, -1, -1, -1]
/* 146 7 */, [9, 6, 4, 9, 3, 6, 9, 1, 3, 10, 6, 3, -1, -1, -1, -1]
/* 147 11 */, [6, 4, 8, 6, 8, 10, 2, 1, 11, -1, -1, -1, -1, -1, -1, -1]
/* 148 7 */, [1, 11, 2, 3, 10, 0, 0, 10, 6, 0, 6, 4, -1, -1, -1, -1]
/* 149 12 */, [4, 8, 10, 4, 10, 6, 0, 9, 2, 2, 9, 11, -1, -1, -1, -1]
/* 150 10 */, [11, 3, 9, 11, 2, 3, 9, 3, 4, 10, 6, 3, 4, 3, 6, -1]
/* 151 7 */, [8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1]
/* 152 5 */, [0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 153 8 */, [1, 0, 9, 2, 4, 3, 2, 6, 4, 4, 8, 3, -1, -1, -1, -1]
/* 154 12 */, [1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1]
/* 155 5 */, [8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 11, -1, -1, -1, -1]
/* 156 14 */, [11, 0, 1, 11, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1]
/* 157 5 */, [4, 3, 6, 4, 8, 3, 6, 3, 11, 0, 9, 3, 11, 3, 9, -1]
/* 158 7 */, [11, 4, 9, 6, 4, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 159 2 */, [4, 5, 9, 7, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 160 3 */, [0, 3, 8, 4, 5, 9, 10, 6, 7, -1, -1, -1, -1, -1, -1, -1]
/* 161 6 */, [5, 1, 0, 5, 0, 4, 7, 10, 6, -1, -1, -1, -1, -1, -1, -1]
/* 162 7 */, [10, 6, 7, 8, 4, 3, 3, 4, 5, 3, 5, 1, -1, -1, -1, -1]
/* 163 12 */, [9, 4, 5, 11, 2, 1, 7, 10, 6, -1, -1, -1, -1, -1, -1, -1]
/* 164 6 */, [6, 7, 10, 1, 11, 2, 0, 3, 8, 4, 5, 9, -1, -1, -1, -1]
/* 165 13 */, [7, 10, 6, 5, 11, 4, 4, 11, 2, 4, 2, 0, -1, -1, -1, -1]
/* 166 12 */, [3, 8, 4, 3, 4, 5, 3, 5, 2, 11, 2, 5, 10, 6, 7, -1]
/* 167 6 */, [7, 3, 2, 7, 2, 6, 5, 9, 4, -1, -1, -1, -1, -1, -1, -1]
/* 168 7 */, [9, 4, 5, 0, 6, 8, 0, 2, 6, 6, 7, 8, -1, -1, -1, -1]
/* 169 12 */, [3, 2, 6, 3, 6, 7, 1, 0, 5, 5, 0, 4, -1, -1, -1, -1]
/* 170 10 */, [6, 8, 2, 6, 7, 8, 2, 8, 1, 4, 5, 8, 1, 8, 5, -1]
/* 171 7 */, [9, 4, 5, 11, 6, 1, 1, 6, 7, 1, 7, 3, -1, -1, -1, -1]
/* 172 12 */, [1, 11, 6, 1, 6, 7, 1, 7, 0, 8, 0, 7, 9, 4, 5, -1]
/* 173 6 */, [4, 11, 0, 4, 5, 11, 0, 11, 3, 6, 7, 11, 3, 11, 7, -1]
/* 174 7 */, [7, 11, 6, 7, 8, 11, 5, 11, 4, 4, 11, 8, -1, -1, -1, -1]
/* 175 3 */, [6, 5, 9, 6, 9, 10, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1]
/* 176 5 */, [3, 10, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1]
/* 177 9 */, [0, 8, 10, 0, 10, 5, 0, 5, 1, 5, 10, 6, -1, -1, -1, -1]
/* 178 14 */, [6, 3, 10, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1]
/* 179 5 */, [1, 11, 2, 9, 10, 5, 9, 8, 10, 10, 6, 5, -1, -1, -1, -1]
/* 180 12 */, [0, 3, 10, 0, 10, 6, 0, 6, 9, 5, 9, 6, 1, 11, 2, -1]
/* 181 6 */, [10, 5, 8, 10, 6, 5, 8, 5, 0, 11, 2, 5, 0, 5, 2, -1]
/* 182 7 */, [6, 3, 10, 6, 5, 3, 2, 3, 11, 11, 3, 5, -1, -1, -1, -1]
/* 183 3 */, [5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1]
/* 184 11 */, [9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1]
/* 185 5 */, [1, 8, 5, 1, 0, 8, 5, 8, 6, 3, 2, 8, 6, 8, 2, -1]
/* 186 7 */, [1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 187 2 */, [1, 6, 3, 1, 11, 6, 3, 6, 8, 5, 9, 6, 8, 6, 9, -1]
/* 188 7 */, [11, 0, 1, 11, 6, 0, 9, 0, 5, 5, 0, 6, -1, -1, -1, -1]
/* 189 3 */, [0, 8, 3, 5, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 190 4 */, [11, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 191 1 */, [10, 11, 5, 7, 10, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 192 2 */, [10, 11, 5, 10, 5, 7, 8, 0, 3, -1, -1, -1, -1, -1, -1, -1]
/* 193 7 */, [5, 7, 10, 5, 10, 11, 1, 0, 9, -1, -1, -1, -1, -1, -1, -1]
/* 194 7 */, [11, 5, 7, 11, 7, 10, 9, 1, 8, 8, 1, 3, -1, -1, -1, -1]
/* 195 10 */, [10, 2, 1, 10, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1]
/* 196 5 */, [0, 3, 8, 1, 7, 2, 1, 5, 7, 7, 10, 2, -1, -1, -1, -1]
/* 197 12 */, [9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 10, -1, -1, -1, -1]
/* 198 14 */, [7, 2, 5, 7, 10, 2, 5, 2, 9, 3, 8, 2, 9, 2, 8, -1]
/* 199 7 */, [2, 11, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1]
/* 200 5 */, [8, 0, 2, 8, 2, 5, 8, 5, 7, 11, 5, 2, -1, -1, -1, -1]
/* 201 11 */, [9, 1, 0, 5, 3, 11, 5, 7, 3, 3, 2, 11, -1, -1, -1, -1]
/* 202 12 */, [9, 2, 8, 9, 1, 2, 8, 2, 7, 11, 5, 2, 7, 2, 5, -1]
/* 203 7 */, [1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 204 8 */, [0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1]
/* 205 5 */, [9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1]
/* 206 5 */, [9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 207 2 */, [5, 4, 8, 5, 8, 11, 11, 8, 10, -1, -1, -1, -1, -1, -1, -1]
/* 208 5 */, [5, 4, 0, 5, 0, 10, 5, 10, 11, 10, 0, 3, -1, -1, -1, -1]
/* 209 14 */, [0, 9, 1, 8, 11, 4, 8, 10, 11, 11, 5, 4, -1, -1, -1, -1]
/* 210 12 */, [11, 4, 10, 11, 5, 4, 10, 4, 3, 9, 1, 4, 3, 4, 1, -1]
/* 211 7 */, [2, 1, 5, 2, 5, 8, 2, 8, 10, 4, 8, 5, -1, -1, -1, -1]
/* 212 11 */, [0, 10, 4, 0, 3, 10, 4, 10, 5, 2, 1, 10, 5, 10, 1, -1]
/* 213 7 */, [0, 5, 2, 0, 9, 5, 2, 5, 10, 4, 8, 5, 10, 5, 8, -1]
/* 214 7 */, [9, 5, 4, 2, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 215 4 */, [2, 11, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1]
/* 216 9 */, [5, 2, 11, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1]
/* 217 5 */, [3, 2, 11, 3, 11, 5, 3, 5, 8, 4, 8, 5, 0, 9, 1, -1]
/* 218 6 */, [5, 2, 11, 5, 4, 2, 1, 2, 9, 9, 2, 4, -1, -1, -1, -1]
/* 219 3 */, [8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1]
/* 220 5 */, [0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 221 2 */, [8, 5, 4, 8, 3, 5, 9, 5, 0, 0, 5, 3, -1, -1, -1, -1]
/* 222 3 */, [9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 223 1 */, [4, 7, 10, 4, 10, 9, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1]
/* 224 5 */, [0, 3, 8, 4, 7, 9, 9, 7, 10, 9, 10, 11, -1, -1, -1, -1]
/* 225 12 */, [1, 10, 11, 1, 4, 10, 1, 0, 4, 7, 10, 4, -1, -1, -1, -1]
/* 226 11 */, [3, 4, 1, 3, 8, 4, 1, 4, 11, 7, 10, 4, 11, 4, 10, -1]
/* 227 7 */, [4, 7, 10, 9, 4, 10, 9, 10, 2, 9, 2, 1, -1, -1, -1, -1]
/* 228 9 */, [9, 4, 7, 9, 7, 10, 9, 10, 1, 2, 1, 10, 0, 3, 8, -1]
/* 229 6 */, [10, 4, 7, 10, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1]
/* 230 5 */, [10, 4, 7, 10, 2, 4, 8, 4, 3, 3, 4, 2, -1, -1, -1, -1]
/* 231 3 */, [2, 11, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1]
/* 232 14 */, [9, 7, 11, 9, 4, 7, 11, 7, 2, 8, 0, 7, 2, 7, 0, -1]
/* 233 7 */, [3, 11, 7, 3, 2, 11, 7, 11, 4, 1, 0, 11, 4, 11, 0, -1]
/* 234 7 */, [1, 2, 11, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 235 4 */, [4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1]
/* 236 5 */, [4, 1, 9, 4, 7, 1, 0, 1, 8, 8, 1, 7, -1, -1, -1, -1]
/* 237 3 */, [4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 238 2 */, [4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 239 1 */, [9, 8, 11, 11, 8, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 240 8 */, [3, 9, 0, 3, 10, 9, 10, 11, 9, -1, -1, -1, -1, -1, -1, -1]
/* 241 5 */, [0, 11, 1, 0, 8, 11, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1]
/* 242 5 */, [3, 11, 1, 10, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 243 2 */, [1, 10, 2, 1, 9, 10, 9, 8, 10, -1, -1, -1, -1, -1, -1, -1]
/* 244 5 */, [3, 9, 0, 3, 10, 9, 1, 9, 2, 2, 9, 10, -1, -1, -1, -1]
/* 245 3 */, [0, 10, 2, 8, 10, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 246 2 */, [3, 10, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 247 1 */, [2, 8, 3, 2, 11, 8, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1]
/* 248 5 */, [9, 2, 11, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 249 2 */, [2, 8, 3, 2, 11, 8, 0, 8, 1, 1, 8, 11, -1, -1, -1, -1]
/* 250 3 */, [1, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 251 1 */, [1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 252 2 */, [0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 253 1 */, [0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 254 1 */, [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
/* 255 0 */];

var EDGES = [[0, 1], [1, 3], [2, 3], [0, 2], [4, 5], [5, 7], [6, 7], [4, 6], [0, 4], [1, 5], [2, 6], [3, 7]];
function getCase(index) {
  return MARCHING_CUBE_CASES[index];
} // Define the twelve edges of the voxel by the following pairs of vertices

function getEdge(eid) {
  return EDGES[eid];
} // ----------------------------------------------------------------------------
// Static API
// ----------------------------------------------------------------------------

var vtkCaseTable = {
  getCase: getCase,
  getEdge: getEdge
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/Filters/General/WindowedSincPolyDataFilter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/Filters/General/WindowedSincPolyDataFilter.js ***!
  \************************************************************************************/
/*! exports provided: default, extend, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtkWindowedSincPolyDataFilter$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var _macros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../macros.js */ "./node_modules/@kitware/vtk.js/macros.js");
/* harmony import */ var _Common_DataModel_BoundingBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common/DataModel/BoundingBox.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/BoundingBox.js");
/* harmony import */ var _Common_Core_DataArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/Core/DataArray.js */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray.js");
/* harmony import */ var _Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/Core/Math/index.js */ "./node_modules/@kitware/vtk.js/Common/Core/Math/index.js");
/* harmony import */ var _Common_DataModel_DataSetAttributes_Constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Common/DataModel/DataSetAttributes/Constants.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/DataSetAttributes/Constants.js");
/* harmony import */ var _Common_Core_Points_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/Core/Points.js */ "./node_modules/@kitware/vtk.js/Common/Core/Points.js");
/* harmony import */ var _Common_DataModel_PolyData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/DataModel/PolyData.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/PolyData.js");
/* harmony import */ var _Common_DataModel_Triangle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Common/DataModel/Triangle.js */ "./node_modules/@kitware/vtk.js/Common/DataModel/Triangle.js");








var VertexType = {
  VTK_SIMPLE_VERTEX: 0,
  VTK_FIXED_VERTEX: 1,
  VTK_FEATURE_EDGE_VERTEX: 2,
  VTK_BOUNDARY_EDGE_VERTEX: 3
}; // ----------------------------------------------------------------------------
// vtkWindowedSincPolyDataFilter methods
// ----------------------------------------------------------------------------

function vtkWindowedSincPolyDataFilter(publicAPI, model) {
  // Set our className
  model.classHierarchy.push('vtkWindowedSincPolyDataFilter');
  publicAPI.vtkWindowedSincPolyDataFilterExecute = function (inPts, inputPolyData, output) {
    if (!inPts || model.numberOfIterations <= 0) {
      return inPts;
    }
    var inPtsData = inPts.getData();
    var inVerts = inputPolyData.getVerts().getData();
    var inLines = inputPolyData.getLines().getData();
    var inPolys = inputPolyData.getPolys().getData();
    var inStrips = inputPolyData.getStrips().getData();
    var cosFeatureAngle = Math.cos(_Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["g"].radiansFromDegrees(model.featureAngle));
    var cosEdgeAngle = Math.cos(_Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["g"].radiansFromDegrees(model.edgeAngle));
    var numPts = inPts.getNumberOfPoints(); // Perform topological analysis. What we're going to do is build a connectivity
    // array of connected vertices. The outcome will be one of three
    // classifications for a vertex: VTK_SIMPLE_VERTEX, VTK_FIXED_VERTEX. or
    // VTK_EDGE_VERTEX. Simple vertices are smoothed using all connected
    // vertices. FIXED vertices are never smoothed. Edge vertices are smoothed
    // using a subset of the attached vertices.

    var verts = new Array(numPts);
    for (var i = 0; i < numPts; ++i) {
      verts[i] = {
        type: VertexType.VTK_SIMPLE_VERTEX,
        edges: null
      };
    } // check vertices first. Vertices are never smoothed_--------------

    var npts = 0;
    for (var _i = 0; _i < inVerts.length; _i += npts + 1) {
      npts = inVerts[_i];
      var pts = inVerts.slice(_i + 1, _i + 1 + npts);
      for (var j = 0; j < pts.length; ++j) {
        verts[pts[j]].type = VertexType.VTK_FIXED_VERTEX;
      }
    } // now check lines. Only manifold lines can be smoothed------------

    for (var _i2 = 0; _i2 < inLines.length; _i2 += npts + 1) {
      npts = inLines[_i2];
      var _pts = inLines.slice(_i2 + 1, _i2 + 1 + npts); // Check for closed loop which are treated specially. Basically the
      // last point is ignored (set to fixed).

      var closedLoop = _pts[0] === _pts[npts - 1] && npts > 3;
      for (var _j = 0; _j < npts; ++_j) {
        if (verts[_pts[_j]].type === VertexType.VTK_SIMPLE_VERTEX) {
          // First point
          if (_j === 0) {
            if (!closedLoop) {
              verts[_pts[0]].type = VertexType.VTK_FIXED_VERTEX;
            } else {
              verts[_pts[0]].type = VertexType.VTK_FEATURE_EDGE_VERTEX;
              verts[_pts[0]].edges = [_pts[npts - 2], _pts[1]];
            }
          } // Last point
          else if (_j === npts - 1 && !closedLoop) {
            verts[_pts[_j]].type = VertexType.VTK_FIXED_VERTEX;
          } // In between point // is edge vertex (unless already edge vertex!)
          else {
            verts[_pts[_j]].type = VertexType.VTK_FEATURE_EDGE_VERTEX;
            verts[_pts[_j]].edges = [_pts[_j - 1], _pts[closedLoop && _j === npts - 2 ? 0 : _j + 1]];
          }
        } // if simple vertex
        // Vertex has been visited before, need to fix it. Special case
        // when working on closed loop.
        else if (verts[_pts[_j]].type === VertexType.VTK_FEATURE_EDGE_VERTEX && !(closedLoop && _j === npts - 1)) {
          verts[_pts[_j]].type = VertexType.VTK_FIXED_VERTEX;
          verts[_pts[_j]].edges = null;
        }
      } // for all points in this line
    } // for all lines
    // now polygons and triangle strips-------------------------------

    var numPolys = inPolys.length;
    var numStrips = inStrips.length;
    if (numPolys > 0 || numStrips > 0) {
      var inMesh = _Common_DataModel_PolyData_js__WEBPACK_IMPORTED_MODULE_6__["default"].newInstance();
      inMesh.setPoints(inputPolyData.getPoints());
      inMesh.setPolys(inputPolyData.getPolys());
      var mesh = inMesh;
      var neighbors = [];
      var nei = 0; // const numNeiPts = 0;

      var normal = [];
      var neiNormal = [];
      /* TODO: Add vtkTriangleFilter
      if ( (numStrips = inputPolyData.getStrips().GetNumberOfCells()) > 0 )
      { // convert data to triangles
        inMesh.setStrips(inputPolyData.getStrips());
        const toTris = vtkTriangleFilter.newInstance();
        toTris.setInputData(inMesh);
        toTris.update();
        mesh = toTris.getOutput();
      }
      */

      mesh.buildLinks(); // to do neighborhood searching

      var polys = mesh.getPolys().getData();
      var cellId = 0;
      for (var _c = 0; _c < polys.length; _c += npts + 1, ++cellId) {
        npts = polys[_c];
        var _pts2 = polys.slice(_c + 1, _c + 1 + npts);
        for (var _i3 = 0; _i3 < npts; ++_i3) {
          var p1 = _pts2[_i3];
          var p2 = _pts2[(_i3 + 1) % npts];
          if (verts[p1].edges === null) {
            verts[p1].edges = [];
          }
          if (verts[p2].edges == null) {
            verts[p2].edges = [];
          }
          neighbors = mesh.getCellEdgeNeighbors(cellId, p1, p2);
          var numNei = neighbors.length; // neighbors->GetNumberOfIds();

          var edge = VertexType.VTK_SIMPLE_VERTEX;
          if (numNei === 0) {
            edge = VertexType.VTK_BOUNDARY_EDGE_VERTEX;
          } else if (numNei >= 2) {
            // non-manifold case, check nonmanifold smoothing state
            if (!model.nonManifoldSmoothing) {
              // check to make sure that this edge hasn't been marked already
              var _j2 = 0;
              for (; _j2 < numNei; ++_j2) {
                if (neighbors[_j2] < cellId) {
                  break;
                }
              }
              if (_j2 >= numNei) {
                edge = VertexType.VTK_FEATURE_EDGE_VERTEX;
              }
            }
            /* eslint-disable no-cond-assign */
          } else if (numNei === 1 && (nei = neighbors[0]) > cellId) {
            if (model.featureEdgeSmoothing) {
              // TODO: support polygons
              // vtkPolygon::ComputeNormal(inPts,npts,pts,normal);
              _Common_DataModel_Triangle_js__WEBPACK_IMPORTED_MODULE_7__["default"].computeNormal(inPts.getPoint(_pts2[0]), inPts.getPoint(_pts2[1]), inPts.getPoint(_pts2[2]), normal);
              var _mesh$getCellPoints = mesh.getCellPoints(nei),
                cellPointIds = _mesh$getCellPoints.cellPointIds; // vtkPolygon::ComputeNormal(inPts,numNeiPts,neiPts,neiNormal);

              _Common_DataModel_Triangle_js__WEBPACK_IMPORTED_MODULE_7__["default"].computeNormal(inPts.getPoint(cellPointIds[0]), inPts.getPoint(cellPointIds[1]), inPts.getPoint(cellPointIds[2]), neiNormal);
              if (_Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["g"].dot(normal, neiNormal) <= cosFeatureAngle) {
                edge = VertexType.VTK_FEATURE_EDGE_VERTEX;
              }
            }
          } // a visited edge; skip rest of analysis
          else {
            /* eslint-disable no-continue */
            continue;
          }
          if (edge && verts[p1].type === VertexType.VTK_SIMPLE_VERTEX) {
            verts[p1].edges = [p2];
            verts[p1].type = edge;
          } else if (edge && verts[p1].type === VertexType.VTK_BOUNDARY_EDGE_VERTEX || edge && verts[p1].type === VertexType.VTK_FEATURE_EDGE_VERTEX || !edge && verts[p1].type === VertexType.VTK_SIMPLE_VERTEX) {
            verts[p1].edges.push(p2);
            if (verts[p1].type && edge === VertexType.VTK_BOUNDARY_EDGE_VERTEX) {
              verts[p1].type = VertexType.VTK_BOUNDARY_EDGE_VERTEX;
            }
          }
          if (edge && verts[p2].type === VertexType.VTK_SIMPLE_VERTEX) {
            verts[p2].edges = [p1];
            verts[p2].type = edge;
          } else if (edge && verts[p2].type === VertexType.VTK_BOUNDARY_EDGE_VERTEX || edge && verts[p2].type === VertexType.VTK_FEATURE_EDGE_VERTEX || !edge && verts[p2].type === VertexType.VTK_SIMPLE_VERTEX) {
            verts[p2].edges.push(p1);
            if (verts[p2].type && edge === VertexType.VTK_BOUNDARY_EDGE_VERTEX) {
              verts[p2].type = VertexType.VTK_BOUNDARY_EDGE_VERTEX;
            }
          }
        }
      }
    } // if strips or polys

    for (var _i4 = 0; _i4 < numPts; ++_i4) {
      if (verts[_i4].type === VertexType.VTK_SIMPLE_VERTEX) ;else if (verts[_i4].type === VertexType.VTK_FIXED_VERTEX) ;else if (verts[_i4].type === VertexType.VTK_FEATURE_EDGE_VERTEX || verts[_i4].type === VertexType.VTK_BOUNDARY_EDGE_VERTEX) {
        // see how many edges; if two, what the angle is
        if (!model.boundarySmoothing && verts[_i4].type === VertexType.VTK_BOUNDARY_EDGE_VERTEX) {
          verts[_i4].type = VertexType.VTK_FIXED_VERTEX;
        } else if ((npts = verts[_i4].edges.length) !== 2) {
          // can only smooth edges on 2-manifold surfaces
          verts[_i4].type = VertexType.VTK_FIXED_VERTEX;
        } // check angle between edges
        else {
          var _x = inPts.getPoint(verts[_i4].edges[0]);
          var _x2 = inPts.getPoint(_i4);
          var x3 = inPts.getPoint(verts[_i4].edges[1]);
          var l1 = [0, 0, 0];
          var l2 = [0, 0, 0];
          for (var k = 0; k < 3; ++k) {
            l1[k] = _x2[k] - _x[k];
            l2[k] = x3[k] - _x2[k];
          }
          if (_Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["g"].normalize(l1) >= 0.0 && _Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["g"].normalize(l2) >= 0.0 && _Common_Core_Math_index_js__WEBPACK_IMPORTED_MODULE_3__["g"].dot(l1, l2) < cosEdgeAngle) {
            verts[_i4].type = VertexType.VTK_FIXED_VERTEX;
          } else if (verts[_i4].type === VertexType.VTK_FEATURE_EDGE_VERTEX) ;else ;
        } // if along edge
      } // if edge vertex
    } // for all points
    // Perform Windowed Sinc function interpolation
    //
    // console.log('Beginning smoothing iterations...');
    // need 4 vectors of points

    var zero = 0;
    var one = 1;
    var two = 2;
    var three = 3;
    var newPts = [];
    newPts.push(_Common_Core_Points_js__WEBPACK_IMPORTED_MODULE_5__["default"].newInstance());
    newPts[zero].setNumberOfPoints(numPts);
    newPts.push(_Common_Core_Points_js__WEBPACK_IMPORTED_MODULE_5__["default"].newInstance());
    newPts[one].setNumberOfPoints(numPts);
    newPts.push(_Common_Core_Points_js__WEBPACK_IMPORTED_MODULE_5__["default"].newInstance());
    newPts[two].setNumberOfPoints(numPts);
    newPts.push(_Common_Core_Points_js__WEBPACK_IMPORTED_MODULE_5__["default"].newInstance());
    newPts[three].setNumberOfPoints(numPts); // Get the center and length of the input dataset

    var inCenter = _Common_DataModel_BoundingBox_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCenter(inputPolyData.getBounds());
    var inLength = _Common_DataModel_BoundingBox_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDiagonalLength(inputPolyData.getBounds());
    if (!model.normalizeCoordinates) {
      // initialize to old coordinates
      // for (let i = 0; i < numPts; ++i) {
      //   newPts[zero].setPoint(i, inPts.subarray(i));
      // }
      var copy = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].newTypedArray(newPts[zero].getDataType(), inPtsData);
      newPts[zero].setData(copy, 3);
    } else {
      // center the data and scale to be within unit cube [-1, 1]
      // initialize to old coordinates
      var normalizedPoint = [0, 0, 0];
      for (var _i5 = 0; _i5 < numPts; ++_i5) {
        var _newPts$zero;
        inPts.getPoint(_i5, normalizedPoint);
        normalizedPoint[0] = (normalizedPoint[0] - inCenter[0]) / inLength;
        normalizedPoint[1] = (normalizedPoint[1] - inCenter[1]) / inLength;
        normalizedPoint[2] = (normalizedPoint[2] - inCenter[2]) / inLength;
        (_newPts$zero = newPts[zero]).setPoint.apply(_newPts$zero, [_i5].concat(normalizedPoint));
      }
    } // Smooth with a low pass filter defined as a windowed sinc function.
    // Taubin describes this methodology is the IBM tech report RC-20404
    // (#90237, dated 3/12/96) "Optimal Surface Smoothing as Filter Design"
    // G. Taubin, T. Zhang and G. Golub. (Zhang and Golub are at Stanford
    // University)
    // The formulas here follow the notation of Taubin's TR, i.e.
    // newPts[zero], newPts[one], etc.
    // calculate weights and filter coefficients

    var kPb = model.passBand; // reasonable default for kPb in [0, 2] is 0.1

    var thetaPb = Math.acos(1.0 - 0.5 * kPb); // thetaPb in [0, M_PI/2]
    // vtkDebugMacro(<< "thetaPb = " << thetaPb);

    var w = new Array(model.numberOfIterations + 1);
    var c = new Array(model.numberOfIterations + 1);
    var cprime = new Array(model.numberOfIterations + 1);
    var zerovector = [0, 0, 0]; // Calculate the weights and the Chebychev coefficients c.
    //
    // Windowed sinc function weights. This is for a Hamming window. Other
    // windowing function could be implemented here.

    for (var _i6 = 0; _i6 <= model.numberOfIterations; ++_i6) {
      w[_i6] = 0.54 + 0.46 * Math.cos(_i6 * Math.PI / (model.numberOfIterations + 1));
    } // Calculate the optimal sigma (offset or fudge factor for the filter).
    // This is a Newton-Raphson Search.

    var fKpb = 0;
    var fPrimeKpb = 0;
    var done = false;
    var sigma = 0.0;
    for (var _j3 = 0; !done && _j3 < 500; ++_j3) {
      // Chebyshev coefficients
      c[0] = w[0] * (thetaPb + sigma) / Math.PI;
      for (var _i7 = 1; _i7 <= model.numberOfIterations; ++_i7) {
        c[_i7] = 2.0 * w[_i7] * Math.sin(_i7 * (thetaPb + sigma)) / (_i7 * Math.PI);
      } // calculate the Chebyshev coefficients for the derivative of the filter

      cprime[model.numberOfIterations] = 0.0;
      cprime[model.numberOfIterations - 1] = 0.0;
      if (model.numberOfIterations > 1) {
        cprime[model.numberOfIterations - 2] = 2.0 * (model.numberOfIterations - 1) * c[model.numberOfIterations - 1];
      }
      for (var _i8 = model.numberOfIterations - 3; _i8 >= 0; --_i8) {
        cprime[_i8] = cprime[_i8 + 2] + 2.0 * (_i8 + 1) * c[_i8 + 1];
      } // Evaluate the filter and its derivative at kPb (note the discrepancy
      // of calculating the c's based on thetaPb + sigma and evaluating the
      // filter at kPb (which is equivalent to thetaPb)

      fKpb = 0.0;
      fPrimeKpb = 0.0;
      fKpb += c[0];
      fPrimeKpb += cprime[0];
      for (var _i9 = 1; _i9 <= model.numberOfIterations; ++_i9) {
        if (_i9 === 1) {
          fKpb += c[_i9] * (1.0 - 0.5 * kPb);
          fPrimeKpb += cprime[_i9] * (1.0 - 0.5 * kPb);
        } else {
          fKpb += c[_i9] * Math.cos(_i9 * Math.acos(1.0 - 0.5 * kPb));
          fPrimeKpb += cprime[_i9] * Math.cos(_i9 * Math.acos(1.0 - 0.5 * kPb));
        }
      } // if fKpb is not close enough to 1.0, then adjust sigma

      if (model.numberOfIterations > 1) {
        if (Math.abs(fKpb - 1.0) >= 1e-3) {
          sigma -= (fKpb - 1.0) / fPrimeKpb; // Newton-Rhapson (want f=1)
        } else {
          done = true;
        }
      } else {
        // Order of Chebyshev is 1. Can't use Newton-Raphson to find an
        // optimal sigma. Object will most likely shrink.
        done = true;
        sigma = 0.0;
      }
    }
    if (Math.abs(fKpb - 1.0) >= 1e-3) {
      console.log('An optimal offset for the smoothing filter could not be found.  Unpredictable smoothing/shrinkage may result.');
    }
    var x = [0, 0, 0];
    var y = [0, 0, 0];
    var deltaX = [0, 0, 0];
    var xNew = [0, 0, 0];
    var x1 = [0, 0, 0];
    var x2 = [0, 0, 0]; // first iteration

    for (var _i10 = 0; _i10 < numPts; ++_i10) {
      if (verts[_i10].edges != null && (npts = verts[_i10].edges.length) > 0) {
        var _newPts$one, _newPts$three;

        // point is allowed to move
        newPts[zero].getPoint(_i10, x); // use current points

        deltaX[0] = 0.0;
        deltaX[1] = 0.0;
        deltaX[2] = 0.0; // calculate the negative of the laplacian
        // for all connected points

        for (var _j4 = 0; _j4 < npts; ++_j4) {
          newPts[zero].getPoint(verts[_i10].edges[_j4], y);
          for (var _k = 0; _k < 3; ++_k) {
            deltaX[_k] += (x[_k] - y[_k]) / npts;
          }
        } // newPts[one] = newPts[zero] - 0.5 newPts[one]

        for (var _k2 = 0; _k2 < 3; ++_k2) {
          deltaX[_k2] = x[_k2] - 0.5 * deltaX[_k2];
        }
        (_newPts$one = newPts[one]).setPoint.apply(_newPts$one, [_i10].concat(deltaX));
        if (verts[_i10].type === VertexType.VTK_FIXED_VERTEX) {
          newPts[zero].getPoint(_i10, deltaX);
        } else {
          // calculate newPts[three] = c0 newPts[zero] + c1 newPts[one]
          for (var _k3 = 0; _k3 < 3; ++_k3) {
            deltaX[_k3] = c[0] * x[_k3] + c[1] * deltaX[_k3];
          }
        }
        (_newPts$three = newPts[three]).setPoint.apply(_newPts$three, [_i10].concat(deltaX));
      } // if can move point
      else {
        var _newPts$one2, _newPts$three2;

        // point is not allowed to move, just use the old point...
        // (zero out the Laplacian)
        (_newPts$one2 = newPts[one]).setPoint.apply(_newPts$one2, [_i10].concat(zerovector));
        newPts[zero].getPoint(_i10, deltaX);
        (_newPts$three2 = newPts[three]).setPoint.apply(_newPts$three2, [_i10].concat(deltaX));
      }
    } // for all points
    // for the rest of the iterations

    var pX0 = [0, 0, 0];
    var pX1 = [0, 0, 0];
    var pX3 = [0, 0, 0];
    var iterationNumber = 2;
    for (; iterationNumber <= model.numberOfIterations; iterationNumber++) {
      for (var _i11 = 0; _i11 < numPts; ++_i11) {
        npts = verts[_i11].edges != null ? verts[_i11].edges.length : 0;
        if (npts > 0) {
          var _newPts$two;

          // point is allowed to move
          newPts[zero].getPoint(_i11, pX0); // use current points

          newPts[one].getPoint(_i11, pX1);
          deltaX[0] = 0.0;
          deltaX[1] = 0.0;
          deltaX[2] = 0.0; // calculate the negative laplacian of x1

          for (var _j5 = 0; _j5 < npts; ++_j5) {
            newPts[one].getPoint(verts[_i11].edges[_j5], y);
            for (var _k4 = 0; _k4 < 3; ++_k4) {
              deltaX[_k4] += (pX1[_k4] - y[_k4]) / npts;
            }
          } // for all connected points
          // Taubin:  x2 = (x1 - x0) + (x1 - x2)

          for (var _k5 = 0; _k5 < 3; ++_k5) {
            deltaX[_k5] = pX1[_k5] - pX0[_k5] + pX1[_k5] - deltaX[_k5];
          }
          (_newPts$two = newPts[two]).setPoint.apply(_newPts$two, [_i11].concat(deltaX)); // smooth the vertex (x3 = x3 + cj x2)

          newPts[three].getPoint(_i11, pX3);
          for (var _k6 = 0; _k6 < 3; ++_k6) {
            xNew[_k6] = pX3[_k6] + c[iterationNumber] * deltaX[_k6];
          }
          if (verts[_i11].type !== VertexType.VTK_FIXED_VERTEX) {
            var _newPts$three3;
            (_newPts$three3 = newPts[three]).setPoint.apply(_newPts$three3, [_i11].concat(xNew));
          }
        } // if can move point
        else {
          var _newPts$one3, _newPts$two2;

          // point is not allowed to move, just use the old point...
          // (zero out the Laplacian)
          (_newPts$one3 = newPts[one]).setPoint.apply(_newPts$one3, [_i11].concat(zerovector));
          (_newPts$two2 = newPts[two]).setPoint.apply(_newPts$two2, [_i11].concat(zerovector));
        }
      } // for all points
      // update the pointers. three is always three. all other pointers
      // shift by one and wrap.

      zero = (1 + zero) % 3;
      one = (1 + one) % 3;
      two = (1 + two) % 3;
    } // for all iterations or until converge
    // move the iteration count back down so that it matches the
    // actual number of iterations executed

    --iterationNumber; // set zero to three so the correct set of positions is outputted

    zero = three; // console.log('Performed', iterationNumber, 'smoothing passes');
    // if we scaled the data down to the unit cube, then scale data back
    // up to the original space

    if (model.normalizeCoordinates) {
      // Re-position the coordinated
      var repositionedPoint = [0, 0, 0];
      for (var _i12 = 0; _i12 < numPts; ++_i12) {
        var _newPts$zero2;
        newPts[zero].getPoint(_i12, repositionedPoint);
        for (var _j6 = 0; _j6 < 3; ++_j6) {
          repositionedPoint[_j6] = repositionedPoint[_j6] * inLength + inCenter[_j6];
        }
        (_newPts$zero2 = newPts[zero]).setPoint.apply(_newPts$zero2, [_i12].concat(repositionedPoint));
      }
    }
    if (model.generateErrorScalars) {
      var newScalars = new Float32Array(numPts);
      for (var _i13 = 0; _i13 < numPts; ++_i13) {
        inPts.getPoint(_i13, x1);
        newPts[zero].getPoint(_i13, x2);
        newScalars[_i13] = Math.sqrt(Math.distance2BetweenPoints(x1, x2));
      }
      var newScalarsArray = _Common_Core_DataArray_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance({
        numberOfComponents: 1,
        values: newScalars
      });
      var idx = output.getPointData().addArray(newScalarsArray);
      output.getPointData().setActiveAttribute(idx, _Common_DataModel_DataSetAttributes_Constants_js__WEBPACK_IMPORTED_MODULE_4__["AttributeTypes"].SCALARS);
    }
    if (model.generateErrorVectors) {
      var newVectors = new Float32Array(3 * numPts);
      for (var _i14 = 0; _i14 < numPts; ++_i14) {
        inPts.getPoint(_i14, x1);
        newPts[zero].getPoint(_i14, x2);
        for (var _j7 = 0; _j7 < 3; ++_j7) {
          newVectors[3 * _i14 + _j7] = x2[_j7] - x1[_j7];
        }
      }
      var newVectorsArray = _Common_Core_DataArray_js__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance({
        numberOfComponents: 3,
        values: newVectors
      });
      output.getPointData().setVectors(newVectorsArray);
    }
    return newPts[zero];
  };
  publicAPI.requestData = function (inData, outData) {
    var numberOfInputs = publicAPI.getNumberOfInputPorts();
    if (!numberOfInputs) {
      return;
    }
    var input = inData[0];
    if (!input) {
      return;
    }
    var output = _Common_DataModel_PolyData_js__WEBPACK_IMPORTED_MODULE_6__["default"].newInstance();
    var outputPoints = publicAPI.vtkWindowedSincPolyDataFilterExecute(input.getPoints(), input, output);
    output.setPointData(input.getPointData());
    output.setCellData(input.getCellData());
    output.setFieldData(input.getFieldData());
    output.setPoints(outputPoints);
    output.setVerts(input.getVerts());
    output.setLines(input.getLines());
    output.setPolys(input.getPolys());
    output.setStrips(input.getStrips());
    outData[0] = output;
  };
} // ----------------------------------------------------------------------------
// Object factory
// ----------------------------------------------------------------------------

var DEFAULT_VALUES = {
  numberOfIterations: 20,
  passBand: 0.1,
  featureAngle: 45.0,
  edgeAngle: 15.0,
  featureEdgeSmoothing: 0,
  boundarySmoothing: 1,
  nonManifoldSmoothing: 0,
  generateErrorScalars: 0,
  generateErrorVectors: 0,
  normalizeCoordinates: 0
}; // ----------------------------------------------------------------------------

function extend(publicAPI, model) {
  var initialValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object.assign(model, DEFAULT_VALUES, initialValues);
  /* Make this a VTK object */

  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].obj(publicAPI, model);
  /* Also make it an algorithm with one input and one output */

  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].algo(publicAPI, model, 1, 1);
  /* Setters */

  _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].setGet(publicAPI, model, ['numberOfIterations', 'passBand', 'featureAngle', 'edgeAngle', 'featureEdgeSmoothing', 'boundarySmoothing', 'nonManifoldSmoothing', 'generateErrorScalars', 'generateErrorVectors', 'normalizeCoordinates']);
  /* Object specific methods */

  vtkWindowedSincPolyDataFilter(publicAPI, model);
} // ----------------------------------------------------------------------------

var newInstance = _macros_js__WEBPACK_IMPORTED_MODULE_0__["default"].newInstance(extend, 'vtkWindowedSincPolyDataFilter'); // ----------------------------------------------------------------------------

var vtkWindowedSincPolyDataFilter$1 = {
  newInstance: newInstance,
  extend: extend
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/macros.js":
/*!************************************************!*\
  !*** ./node_modules/@kitware/vtk.js/macros.js ***!
  \************************************************/
/*! exports provided: EVENT_ABORT, TYPED_ARRAYS, VOID, _capitalize, algo, capitalize, chain, debounce, default, event, formatBytesToProperUnit, formatNumbersWithThousandSeparator, get, getArray, isVtkObject, keystore, measurePromiseExecution, moveToProtected, newInstance, newTypedArray, newTypedArrayFrom, normalizeWheel, obj, proxy, proxyPropertyMapping, proxyPropertyState, set, setArray, setGet, setGetArray, setImmediateVTK, setLoggerFunction, throttle, traverseInstanceTree, uncapitalize, vtkDebugMacro, vtkErrorMacro, vtkInfoMacro, vtkLogMacro, vtkOnceErrorMacro, vtkWarningMacro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_ABORT", function() { return EVENT_ABORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPED_ARRAYS", function() { return TYPED_ARRAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOID", function() { return VOID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_capitalize", function() { return _capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "algo", function() { return algo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return macro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBytesToProperUnit", function() { return formatBytesToProperUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumbersWithThousandSeparator", function() { return formatNumbersWithThousandSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArray", function() { return getArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVtkObject", function() { return isVtkObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keystore", function() { return keystore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measurePromiseExecution", function() { return measurePromiseExecution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveToProtected", function() { return moveToProtected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTypedArray", function() { return newTypedArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newTypedArrayFrom", function() { return newTypedArrayFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeWheel", function() { return normalizeWheel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj", function() { return obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyPropertyMapping", function() { return proxyPropertyMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyPropertyState", function() { return proxyPropertyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setArray", function() { return setArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGet", function() { return setGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGetArray", function() { return setGetArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediateVTK", function() { return setImmediateVTK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoggerFunction", function() { return setLoggerFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseInstanceTree", function() { return traverseInstanceTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncapitalize", function() { return uncapitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vtkDebugMacro", function() { return vtkDebugMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vtkErrorMacro", function() { return vtkErrorMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vtkInfoMacro", function() { return vtkInfoMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vtkLogMacro", function() { return vtkLogMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vtkOnceErrorMacro", function() { return vtkOnceErrorMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vtkWarningMacro", function() { return vtkWarningMacro; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vtk_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vtk.js */ "./node_modules/@kitware/vtk.js/vtk.js");
/* harmony import */ var _Common_Core_ClassHierarchy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Common/Core/ClassHierarchy.js */ "./node_modules/@kitware/vtk.js/Common/Core/ClassHierarchy.js");








function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var globalMTime = 0;
var VOID = Symbol('void');
function getCurrentGlobalMTime() {
  return globalMTime;
} // ----------------------------------------------------------------------------
// Logging function calls
// ----------------------------------------------------------------------------

/* eslint-disable no-prototype-builtins                                      */

var fakeConsole = {};
function noOp() {}
var consoleMethods = ['log', 'debug', 'info', 'warn', 'error', 'time', 'timeEnd', 'group', 'groupEnd'];
consoleMethods.forEach(function (methodName) {
  fakeConsole[methodName] = noOp;
});
_vtk_js__WEBPACK_IMPORTED_MODULE_6__["vtkGlobal"].console = console.hasOwnProperty('log') ? console : fakeConsole;
var loggerFunctions = {
  debug: noOp,
  // Don't print debug by default
  error: _vtk_js__WEBPACK_IMPORTED_MODULE_6__["vtkGlobal"].console.error || noOp,
  info: _vtk_js__WEBPACK_IMPORTED_MODULE_6__["vtkGlobal"].console.info || noOp,
  log: _vtk_js__WEBPACK_IMPORTED_MODULE_6__["vtkGlobal"].console.log || noOp,
  warn: _vtk_js__WEBPACK_IMPORTED_MODULE_6__["vtkGlobal"].console.warn || noOp
};
function setLoggerFunction(name, fn) {
  if (loggerFunctions[name]) {
    loggerFunctions[name] = fn || noOp;
  }
}
function vtkLogMacro() {
  loggerFunctions.log.apply(loggerFunctions, arguments);
}
function vtkInfoMacro() {
  loggerFunctions.info.apply(loggerFunctions, arguments);
}
function vtkDebugMacro() {
  loggerFunctions.debug.apply(loggerFunctions, arguments);
}
function vtkErrorMacro() {
  loggerFunctions.error.apply(loggerFunctions, arguments);
}
function vtkWarningMacro() {
  loggerFunctions.warn.apply(loggerFunctions, arguments);
}
var ERROR_ONCE_MAP = {};
function vtkOnceErrorMacro(str) {
  if (!ERROR_ONCE_MAP[str]) {
    loggerFunctions.error(str);
    ERROR_ONCE_MAP[str] = true;
  }
} // ----------------------------------------------------------------------------
// TypedArray
// ----------------------------------------------------------------------------

var TYPED_ARRAYS = Object.create(null);
TYPED_ARRAYS.Float32Array = Float32Array;
TYPED_ARRAYS.Float64Array = Float64Array;
TYPED_ARRAYS.Uint8Array = Uint8Array;
TYPED_ARRAYS.Int8Array = Int8Array;
TYPED_ARRAYS.Uint16Array = Uint16Array;
TYPED_ARRAYS.Int16Array = Int16Array;
TYPED_ARRAYS.Uint32Array = Uint32Array;
TYPED_ARRAYS.Int32Array = Int32Array;
TYPED_ARRAYS.Uint8ClampedArray = Uint8ClampedArray; // TYPED_ARRAYS.BigInt64Array = BigInt64Array;
// TYPED_ARRAYS.BigUint64Array = BigUint64Array;

function newTypedArray(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_4___default()(TYPED_ARRAYS[type] || Float64Array, args);
}
function newTypedArrayFrom(type) {
  var _ref;
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return (_ref = TYPED_ARRAYS[type] || Float64Array).from.apply(_ref, args);
} // ----------------------------------------------------------------------------
// capitilize provided string
// ----------------------------------------------------------------------------

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function _capitalize(str) {
  return capitalize(str[0] === '_' ? str.slice(1) : str);
}
function uncapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
} // ----------------------------------------------------------------------------
// Convert byte size into a well formatted string
// ----------------------------------------------------------------------------

function formatBytesToProperUnit(size) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var chunkSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var units = ['TB', 'GB', 'MB', 'KB'];
  var value = Number(size);
  var currentUnit = 'B';
  while (value > chunkSize) {
    value /= chunkSize;
    currentUnit = units.pop();
  }
  return "".concat(value.toFixed(precision), " ").concat(currentUnit);
} // ----------------------------------------------------------------------------
// Convert thousand number with proper separator
// ----------------------------------------------------------------------------

function formatNumbersWithThousandSeparator(n) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  var sections = [];
  var size = n;
  while (size > 1000) {
    sections.push("000".concat(size % 1000).slice(-3));
    size = Math.floor(size / 1000);
  }
  if (size > 0) {
    sections.push(size);
  }
  sections.reverse();
  return sections.join(separator);
} // ----------------------------------------------------------------------------
// Array helper
// ----------------------------------------------------------------------------

function safeArrays(model) {
  Object.keys(model).forEach(function (key) {
    if (Array.isArray(model[key])) {
      model[key] = [].concat(model[key]);
    }
  });
} // ----------------------------------------------------------------------------
// shallow equals
// ----------------------------------------------------------------------------

function shallowEquals(a, b) {
  if (a === b) {
    return true;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
} // ----------------------------------------------------------------------------

function enumToString(e, value) {
  return Object.keys(e).find(function (key) {
    return e[key] === value;
  });
}
function getStateArrayMapFunc(item) {
  if (item && item.isA) {
    return item.getState();
  }
  return item;
} // ----------------------------------------------------------------------------
// setImmediate
// ----------------------------------------------------------------------------

function setImmediateVTK(fn) {
  setTimeout(fn, 0);
} // ----------------------------------------------------------------------------
// measurePromiseExecution
//
// Measures the time it takes for a promise to finish from
//   the time this function is invoked.
// The callback receives the time it took for the promise to resolve or reject.
// ----------------------------------------------------------------------------

function measurePromiseExecution(promise, callback) {
  var start = performance.now();
  promise["finally"](function () {
    var delta = performance.now() - start;
    callback(delta);
  });
} // ----------------------------------------------------------------------------
// vtkObject: modified(), onModified(callback), delete()
// ----------------------------------------------------------------------------

function obj() {
  var publicAPI = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var model = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Ensure each instance as a unique ref of array
  safeArrays(model);
  var callbacks = [];
  if (!Number.isInteger(model.mtime)) {
    model.mtime = ++globalMTime;
  }
  if (!('classHierarchy' in model)) {
    model.classHierarchy = new _Common_Core_ClassHierarchy_js__WEBPACK_IMPORTED_MODULE_7__["default"]('vtkObject');
  } else if (!(model.classHierarchy instanceof _Common_Core_ClassHierarchy_js__WEBPACK_IMPORTED_MODULE_7__["default"])) {
    var hierarchy = new _Common_Core_ClassHierarchy_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    for (var i = 0; i < model.classHierarchy.length; i++) {
      hierarchy.push(model.classHierarchy[i]);
    }
    model.classHierarchy = hierarchy;
  }
  function off(index) {
    callbacks[index] = null;
  }
  function on(index) {
    function unsubscribe() {
      off(index);
    }
    return Object.freeze({
      unsubscribe: unsubscribe
    });
  }
  publicAPI.isDeleted = function () {
    return !!model.deleted;
  };
  publicAPI.modified = function (otherMTime) {
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return;
    }
    if (otherMTime && otherMTime < publicAPI.getMTime()) {
      return;
    }
    model.mtime = ++globalMTime;
    callbacks.forEach(function (callback) {
      return callback && callback(publicAPI);
    });
  };
  publicAPI.onModified = function (callback) {
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return null;
    }
    var index = callbacks.length;
    callbacks.push(callback);
    return on(index);
  };
  publicAPI.getMTime = function () {
    return model.mtime;
  };
  publicAPI.isA = function (className) {
    var count = model.classHierarchy.length; // we go backwards as that is more likely for
    // early termination

    while (count--) {
      if (model.classHierarchy[count] === className) {
        return true;
      }
    }
    return false;
  };
  publicAPI.getClassName = function () {
    var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return model.classHierarchy[model.classHierarchy.length - 1 - depth];
  };
  publicAPI.set = function () {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var noWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var noFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var ret = false;
    Object.keys(map).forEach(function (name) {
      var fn = noFunction ? null : publicAPI["set".concat(capitalize(name))];
      if (fn && Array.isArray(map[name]) && fn.length > 1) {
        ret = fn.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(map[name])) || ret;
      } else if (fn) {
        ret = fn(map[name]) || ret;
      } else {
        // Set data on model directly
        if (['mtime'].indexOf(name) === -1 && !noWarning) {
          vtkWarningMacro("Warning: Set value to model directly ".concat(name, ", ").concat(map[name]));
        }
        ret = model[name] !== map[name] || ret;
        model[name] = map[name];
      }
    });
    return ret;
  };
  publicAPI.get = function () {
    for (var _len3 = arguments.length, list = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      list[_key3] = arguments[_key3];
    }
    if (!list.length) {
      return model;
    }
    var subset = {};
    list.forEach(function (name) {
      subset[name] = model[name];
    });
    return subset;
  };
  publicAPI.getReferenceByName = function (val) {
    return model[val];
  };
  publicAPI["delete"] = function () {
    Object.keys(model).forEach(function (field) {
      return delete model[field];
    });
    callbacks.forEach(function (el, index) {
      return off(index);
    }); // Flag the instance being deleted

    model.deleted = true;
  }; // Add serialization support

  publicAPI.getState = function () {
    if (model.deleted) {
      return null;
    }
    var jsonArchive = _objectSpread(_objectSpread({}, model), {}, {
      vtkClass: publicAPI.getClassName()
    }); // Convert every vtkObject to its serializable form

    Object.keys(jsonArchive).forEach(function (keyName) {
      if (jsonArchive[keyName] === null || jsonArchive[keyName] === undefined || keyName[0] === '_' // protected members start with _
      ) {
        delete jsonArchive[keyName];
      } else if (jsonArchive[keyName].isA) {
        jsonArchive[keyName] = jsonArchive[keyName].getState();
      } else if (Array.isArray(jsonArchive[keyName])) {
        jsonArchive[keyName] = jsonArchive[keyName].map(getStateArrayMapFunc);
      }
    }); // Sort resulting object by key name

    var sortedObj = {};
    Object.keys(jsonArchive).sort().forEach(function (name) {
      sortedObj[name] = jsonArchive[name];
    }); // Remove mtime

    if (sortedObj.mtime) {
      delete sortedObj.mtime;
    }
    return sortedObj;
  }; // Add shallowCopy(otherInstance) support

  publicAPI.shallowCopy = function (other) {
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (other.getClassName() !== publicAPI.getClassName()) {
      throw new Error("Cannot ShallowCopy ".concat(other.getClassName(), " into ").concat(publicAPI.getClassName()));
    }
    var otherModel = other.get();
    var keyList = Object.keys(model).sort();
    var otherKeyList = Object.keys(otherModel).sort();
    otherKeyList.forEach(function (key) {
      var keyIdx = keyList.indexOf(key);
      if (keyIdx === -1) {
        if (debug) {
          vtkDebugMacro("add ".concat(key, " in shallowCopy"));
        }
      } else {
        keyList.splice(keyIdx, 1);
      }
      model[key] = otherModel[key];
    });
    if (keyList.length && debug) {
      vtkDebugMacro("Untouched keys: ".concat(keyList.join(', ')));
    }
    publicAPI.modified();
  }; // This function will get called when one invoke JSON.stringify(vtkObject)
  // JSON.stringify will only stringify the return value of this function

  publicAPI.toJSON = function vtkObjToJSON() {
    return publicAPI.getState();
  }; // Allow usage as decorator

  return publicAPI;
} // ----------------------------------------------------------------------------
// getXXX: add getters
// ----------------------------------------------------------------------------

var objectGetterMap = {
  object: function object(publicAPI, model, field) {
    return function getter() {
      return _objectSpread({}, model[field.name]);
    };
  }
};
function get(publicAPI, model, fieldNames) {
  fieldNames.forEach(function (field) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(field) === 'object') {
      var getter = objectGetterMap[field.type];
      if (getter) {
        publicAPI["get".concat(_capitalize(field.name))] = getter(publicAPI, model, field);
      } else {
        publicAPI["get".concat(_capitalize(field.name))] = function () {
          return model[field.name];
        };
      }
    } else {
      publicAPI["get".concat(_capitalize(field))] = function () {
        return model[field];
      };
    }
  });
} // ----------------------------------------------------------------------------
// setXXX: add setters
// ----------------------------------------------------------------------------

var objectSetterMap = {
  "enum": function _enum(publicAPI, model, field) {
    return function (value) {
      if (typeof value === 'string') {
        if (field["enum"][value] !== undefined) {
          if (model[field.name] !== field["enum"][value]) {
            model[field.name] = field["enum"][value];
            publicAPI.modified();
            return true;
          }
          return false;
        }
        vtkErrorMacro("Set Enum with invalid argument ".concat(field, ", ").concat(value));
        throw new RangeError('Set Enum with invalid string argument');
      }
      if (typeof value === 'number') {
        if (model[field.name] !== value) {
          if (Object.keys(field["enum"]).map(function (key) {
            return field["enum"][key];
          }).indexOf(value) !== -1) {
            model[field.name] = value;
            publicAPI.modified();
            return true;
          }
          vtkErrorMacro("Set Enum outside numeric range ".concat(field, ", ").concat(value));
          throw new RangeError('Set Enum outside numeric range');
        }
        return false;
      }
      vtkErrorMacro("Set Enum with invalid argument (String/Number) ".concat(field, ", ").concat(value));
      throw new TypeError('Set Enum with invalid argument (String/Number)');
    };
  },
  object: function object(publicAPI, model, field) {
    return function (value) {
      if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_5___default()(model[field.name], value)) {
        model[field.name] = value;
        publicAPI.modified();
        return true;
      }
      return false;
    };
  }
};
function findSetter(field) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(field) === 'object') {
    var fn = objectSetterMap[field.type];
    if (fn) {
      return function (publicAPI, model) {
        return fn(publicAPI, model, field);
      };
    }
    vtkErrorMacro("No setter for field ".concat(field));
    throw new TypeError('No setter for field');
  }
  return function getSetter(publicAPI, model) {
    return function setter(value) {
      if (model.deleted) {
        vtkErrorMacro('instance deleted - cannot call any method');
        return false;
      }
      if (model[field] !== value) {
        model[field] = value;
        publicAPI.modified();
        return true;
      }
      return false;
    };
  };
}
function set(publicAPI, model, fields) {
  fields.forEach(function (field) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(field) === 'object') {
      publicAPI["set".concat(_capitalize(field.name))] = findSetter(field)(publicAPI, model);
    } else {
      publicAPI["set".concat(_capitalize(field))] = findSetter(field)(publicAPI, model);
    }
  });
} // ----------------------------------------------------------------------------
// set/get XXX: add both setters and getters
// ----------------------------------------------------------------------------

function setGet(publicAPI, model, fieldNames) {
  get(publicAPI, model, fieldNames);
  set(publicAPI, model, fieldNames);
} // ----------------------------------------------------------------------------
// getXXX: add getters for object of type array with copy to be safe
// getXXXByReference: add getters for object of type array without copy
// ----------------------------------------------------------------------------

function getArray(publicAPI, model, fieldNames) {
  fieldNames.forEach(function (field) {
    publicAPI["get".concat(_capitalize(field))] = function () {
      return model[field] ? Array.from(model[field]) : model[field];
    };
    publicAPI["get".concat(_capitalize(field), "ByReference")] = function () {
      return model[field];
    };
  });
} // ----------------------------------------------------------------------------
// setXXX: add setter for object of type array
// if 'defaultVal' is supplied, shorter arrays will be padded to 'size' with 'defaultVal'
// set...From: fast path to copy the content of an array to the current one without call to modified.
// ----------------------------------------------------------------------------

function setArray(publicAPI, model, fieldNames, size) {
  var defaultVal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  fieldNames.forEach(function (field) {
    if (model[field] && size && model[field].length !== size) {
      throw new RangeError("Invalid initial number of values for array (".concat(field, ")"));
    }
    publicAPI["set".concat(_capitalize(field))] = function () {
      if (model.deleted) {
        vtkErrorMacro('instance deleted - cannot call any method');
        return false;
      }
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var array = args;
      var changeDetected;
      var needCopy = false; // allow null or an array to be passed as a single arg.

      if (array.length === 1 && (array[0] == null || array[0].length >= 0)) {
        /* eslint-disable prefer-destructuring */
        array = array[0];
        /* eslint-enable prefer-destructuring */

        needCopy = true;
      }
      if (array == null) {
        changeDetected = model[field] !== array;
      } else {
        if (size && array.length !== size) {
          if (array.length < size && defaultVal !== undefined) {
            array = Array.from(array);
            needCopy = false;
            while (array.length < size) {
              array.push(defaultVal);
            }
          } else {
            throw new RangeError("Invalid number of values for array setter (".concat(field, ")"));
          }
        }
        changeDetected = model[field] == null || model[field].length !== array.length;
        for (var i = 0; !changeDetected && i < array.length; ++i) {
          changeDetected = model[field][i] !== array[i];
        }
        if (changeDetected && needCopy) {
          array = Array.from(array);
        }
      }
      if (changeDetected) {
        model[field] = array;
        publicAPI.modified();
      }
      return changeDetected;
    };
    publicAPI["set".concat(_capitalize(field), "From")] = function (otherArray) {
      var target = model[field];
      otherArray.forEach(function (v, i) {
        target[i] = v;
      });
    };
  });
} // ----------------------------------------------------------------------------
// set/get XXX: add setter and getter for object of type array
// ----------------------------------------------------------------------------

function setGetArray(publicAPI, model, fieldNames, size) {
  var defaultVal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  getArray(publicAPI, model, fieldNames);
  setArray(publicAPI, model, fieldNames, size, defaultVal);
}
function moveToProtected(publicAPI, model, fieldNames) {
  for (var i = 0; i < fieldNames.length; i++) {
    var fieldName = fieldNames[i];
    if (model[fieldName] !== undefined) {
      model["_".concat(fieldName)] = model[fieldName];
      delete model[fieldName];
    }
  }
} // ----------------------------------------------------------------------------
// vtkAlgorithm: setInputData(), setInputConnection(), getOutputData(), getOutputPort()
// ----------------------------------------------------------------------------

function algo(publicAPI, model, numberOfInputs, numberOfOutputs) {
  if (model.inputData) {
    model.inputData = model.inputData.map(_vtk_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  } else {
    model.inputData = [];
  }
  if (model.inputConnection) {
    model.inputConnection = model.inputConnection.map(_vtk_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  } else {
    model.inputConnection = [];
  }
  if (model.output) {
    model.output = model.output.map(_vtk_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  } else {
    model.output = [];
  }
  if (model.inputArrayToProcess) {
    model.inputArrayToProcess = model.inputArrayToProcess.map(_vtk_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  } else {
    model.inputArrayToProcess = [];
  } // Cache the argument for later manipulation

  model.numberOfInputs = numberOfInputs; // Methods

  function setInputData(dataset) {
    var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return;
    }
    if (port >= model.numberOfInputs) {
      vtkErrorMacro("algorithm ".concat(publicAPI.getClassName(), " only has ").concat(model.numberOfInputs, " input ports. To add more input ports, use addInputData()"));
      return;
    }
    if (model.inputData[port] !== dataset || model.inputConnection[port]) {
      model.inputData[port] = dataset;
      model.inputConnection[port] = null;
      if (publicAPI.modified) {
        publicAPI.modified();
      }
    }
  }
  function getInputData() {
    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (model.inputConnection[port]) {
      model.inputData[port] = model.inputConnection[port]();
    }
    return model.inputData[port];
  }
  function setInputConnection(outputPort) {
    var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return;
    }
    if (port >= model.numberOfInputs) {
      var msg = "algorithm ".concat(publicAPI.getClassName(), " only has ");
      msg += "".concat(model.numberOfInputs);
      msg += ' input ports. To add more input ports, use addInputConnection()';
      vtkErrorMacro(msg);
      return;
    }
    model.inputData[port] = null;
    model.inputConnection[port] = outputPort;
  }
  function getInputConnection() {
    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return model.inputConnection[port];
  }
  function getPortToFill() {
    var portToFill = model.numberOfInputs;
    while (portToFill && !model.inputData[portToFill - 1] && !model.inputConnection[portToFill - 1]) {
      portToFill--;
    }
    if (portToFill === model.numberOfInputs) {
      model.numberOfInputs++;
    }
    return portToFill;
  }
  function addInputConnection(outputPort) {
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return;
    }
    setInputConnection(outputPort, getPortToFill());
  }
  function addInputData(dataset) {
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return;
    }
    setInputData(dataset, getPortToFill());
  }
  function getOutputData() {
    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return null;
    }
    if (publicAPI.shouldUpdate()) {
      publicAPI.update();
    }
    return model.output[port];
  }
  publicAPI.shouldUpdate = function () {
    var localMTime = publicAPI.getMTime();
    var minOutputMTime = Infinity;
    var count = numberOfOutputs;
    while (count--) {
      if (!model.output[count] || model.output[count].isDeleted()) {
        return true;
      }
      var mt = model.output[count].getMTime();
      if (mt < localMTime) {
        return true;
      }
      if (mt < minOutputMTime) {
        minOutputMTime = mt;
      }
    }
    count = model.numberOfInputs;
    while (count--) {
      var _model$inputConnectio, _publicAPI$getInputDa;
      if ((_model$inputConnectio = model.inputConnection[count]) !== null && _model$inputConnectio !== void 0 && _model$inputConnectio.filter.shouldUpdate() || ((_publicAPI$getInputDa = publicAPI.getInputData(count)) === null || _publicAPI$getInputDa === void 0 ? void 0 : _publicAPI$getInputDa.getMTime()) > minOutputMTime) {
        return true;
      }
    }
    return false;
  };
  function getOutputPort() {
    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var outputPortAccess = function outputPortAccess() {
      return getOutputData(port);
    }; // Add reference to filter

    outputPortAccess.filter = publicAPI;
    return outputPortAccess;
  } // Handle input if needed

  if (model.numberOfInputs) {
    // Reserve inputs
    var count = model.numberOfInputs;
    while (count--) {
      model.inputData.push(null);
      model.inputConnection.push(null);
    } // Expose public methods

    publicAPI.setInputData = setInputData;
    publicAPI.setInputConnection = setInputConnection;
    publicAPI.addInputData = addInputData;
    publicAPI.addInputConnection = addInputConnection;
    publicAPI.getInputData = getInputData;
    publicAPI.getInputConnection = getInputConnection;
  }
  if (numberOfOutputs) {
    publicAPI.getOutputData = getOutputData;
    publicAPI.getOutputPort = getOutputPort;
  }
  publicAPI.update = function () {
    var ins = [];
    if (model.numberOfInputs) {
      var _count = 0;
      while (_count < model.numberOfInputs) {
        ins[_count] = publicAPI.getInputData(_count);
        _count++;
      }
    }
    if (publicAPI.shouldUpdate() && publicAPI.requestData) {
      publicAPI.requestData(ins, model.output);
    }
  };
  publicAPI.getNumberOfInputPorts = function () {
    return model.numberOfInputs;
  };
  publicAPI.getNumberOfOutputPorts = function () {
    return numberOfOutputs || model.output.length;
  };
  publicAPI.getInputArrayToProcess = function (inputPort) {
    var arrayDesc = model.inputArrayToProcess[inputPort];
    var ds = model.inputData[inputPort];
    if (arrayDesc && ds) {
      return ds["get".concat(arrayDesc.fieldAssociation)]().getArray(arrayDesc.arrayName);
    }
    return null;
  };
  publicAPI.setInputArrayToProcess = function (inputPort, arrayName, fieldAssociation) {
    var attributeType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Scalars';
    while (model.inputArrayToProcess.length < inputPort) {
      model.inputArrayToProcess.push(null);
    }
    model.inputArrayToProcess[inputPort] = {
      arrayName: arrayName,
      fieldAssociation: fieldAssociation,
      attributeType: attributeType
    };
  };
} // ----------------------------------------------------------------------------
// Event handling: onXXX(callback), invokeXXX(args...)
// ----------------------------------------------------------------------------

var EVENT_ABORT = Symbol('Event abort');
function event(publicAPI, model, eventName) {
  var callbacks = [];
  var previousDelete = publicAPI["delete"];
  var curCallbackID = 1;
  function off(callbackID) {
    for (var i = 0; i < callbacks.length; ++i) {
      var _callbacks$i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(callbacks[i], 1),
        cbID = _callbacks$i[0];
      if (cbID === callbackID) {
        callbacks.splice(i, 1);
        return;
      }
    }
  }
  function on(callbackID) {
    function unsubscribe() {
      off(callbackID);
    }
    return Object.freeze({
      unsubscribe: unsubscribe
    });
  }
  function invoke() {
    var _arguments = arguments;
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return;
    }
    /* eslint-disable prefer-rest-params */
    // Go through a copy of the callbacks array in case new callbacks
    // get prepended within previous callbacks

    var currentCallbacks = callbacks.slice();
    var _loop = function _loop(index) {
      var _currentCallbacks$ind = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(currentCallbacks[index], 3),
        cb = _currentCallbacks$ind[1],
        priority = _currentCallbacks$ind[2];
      if (!cb) {
        return "continue"; // eslint-disable-line
      }

      if (priority < 0) {
        setTimeout(function () {
          return cb.apply(publicAPI, _arguments);
        }, 1 - priority);
      } else {
        // Abort only if the callback explicitly returns false
        var continueNext = cb.apply(publicAPI, _arguments);
        if (continueNext === EVENT_ABORT) {
          return "break";
        }
      }
    };
    for (var index = 0; index < currentCallbacks.length; ++index) {
      var _ret = _loop(index);
      if (_ret === "continue") continue;
      if (_ret === "break") break;
    }
    /* eslint-enable prefer-rest-params */
  }

  publicAPI["invoke".concat(_capitalize(eventName))] = invoke;
  publicAPI["on".concat(_capitalize(eventName))] = function (callback) {
    var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
    if (!callback.apply) {
      console.error("Invalid callback for event ".concat(eventName));
      return null;
    }
    if (model.deleted) {
      vtkErrorMacro('instance deleted - cannot call any method');
      return null;
    }
    var callbackID = curCallbackID++;
    callbacks.push([callbackID, callback, priority]);
    callbacks.sort(function (cb1, cb2) {
      return cb2[2] - cb1[2];
    });
    return on(callbackID);
  };
  publicAPI["delete"] = function () {
    previousDelete();
    callbacks.forEach(function (_ref2) {
      var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 1),
        cbID = _ref3[0];
      return off(cbID);
    });
  };
} // ----------------------------------------------------------------------------
// newInstance
// ----------------------------------------------------------------------------

function newInstance(extend, className) {
  var constructor = function constructor() {
    var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var model = {};
    var publicAPI = {};
    extend(publicAPI, model, initialValues);
    return Object.freeze(publicAPI);
  }; // Register constructor to factory

  if (className) {
    _vtk_js__WEBPACK_IMPORTED_MODULE_6__["default"].register(className, constructor);
  }
  return constructor;
} // ----------------------------------------------------------------------------
// Chain function calls
// ----------------------------------------------------------------------------

function chain() {
  for (var _len5 = arguments.length, fn = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    fn[_key5] = arguments[_key5];
  }
  return function () {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    return fn.filter(function (i) {
      return !!i;
    }).map(function (i) {
      return i.apply(void 0, args);
    });
  };
} // ----------------------------------------------------------------------------
// Some utility methods for vtk objects
// ----------------------------------------------------------------------------

function isVtkObject(instance) {
  return instance && instance.isA && instance.isA('vtkObject');
}
function traverseInstanceTree(instance, extractFunction) {
  var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var visitedInstances = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (isVtkObject(instance)) {
    if (visitedInstances.indexOf(instance) >= 0) {
      // avoid cycles
      return accumulator;
    }
    visitedInstances.push(instance);
    var result = extractFunction(instance);
    if (result !== undefined) {
      accumulator.push(result);
    } // Now go through this instance's model

    var model = instance.get();
    Object.keys(model).forEach(function (key) {
      var modelObj = model[key];
      if (Array.isArray(modelObj)) {
        modelObj.forEach(function (subObj) {
          traverseInstanceTree(subObj, extractFunction, accumulator, visitedInstances);
        });
      } else {
        traverseInstanceTree(modelObj, extractFunction, accumulator, visitedInstances);
      }
    });
  }
  return accumulator;
} // ----------------------------------------------------------------------------
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var _this = this;
  var timeout;
  var debounced = function debounced() {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    var context = _this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
  debounced.cancel = function () {
    return clearTimeout(timeout);
  };
  return debounced;
} // ----------------------------------------------------------------------------
// Creates a throttled function that only invokes `func` at most once per
// every `wait` milliseconds.

function throttle(callback, delay) {
  var isThrottled = false;
  var argsToUse = null;
  function next() {
    isThrottled = false;
    if (argsToUse !== null) {
      wrapper.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(argsToUse)); // eslint-disable-line

      argsToUse = null;
    }
  }
  function wrapper() {
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    if (isThrottled) {
      argsToUse = args;
      return;
    }
    isThrottled = true;
    callback.apply(void 0, args);
    setTimeout(next, delay);
  }
  return wrapper;
} // ----------------------------------------------------------------------------
// keystore(publicAPI, model, initialKeystore)
//
//    - initialKeystore: Initial keystore. This can be either a Map or an
//      object.
//
// Generated API
//  setKey(key, value) : mixed (returns value)
//  getKey(key) : mixed
//  getAllKeys() : [mixed]
//  deleteKey(key) : Boolean
// ----------------------------------------------------------------------------

function keystore(publicAPI, model) {
  var initialKeystore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  model.keystore = Object.assign(model.keystore || {}, initialKeystore);
  publicAPI.setKey = function (key, value) {
    model.keystore[key] = value;
  };
  publicAPI.getKey = function (key) {
    return model.keystore[key];
  };
  publicAPI.getAllKeys = function () {
    return Object.keys(model.keystore);
  };
  publicAPI.deleteKey = function (key) {
    return delete model.keystore[key];
  };
  publicAPI.clearKeystore = function () {
    return publicAPI.getAllKeys().forEach(function (key) {
      return delete model.keystore[key];
    });
  };
} // ----------------------------------------------------------------------------
// proxy(publicAPI, model, sectionName, propertyUI)
//
//    - sectionName: Name of the section for UI
//    - propertyUI: List of props with their UI description
//
// Generated API
//  getProxyId() : String
//  listProxyProperties() : [string]
//  updateProxyProperty(name, prop)
//  getProxySection() => List of properties for UI generation
// ----------------------------------------------------------------------------

var nextProxyId = 1;
var ROOT_GROUP_NAME = '__root__';
function proxy(publicAPI, model) {
  // Proxies are keystores
  keystore(publicAPI, model);
  var parentDelete = publicAPI["delete"]; // getProxyId

  model.proxyId = "".concat(nextProxyId++); // ui handling

  model.ui = JSON.parse(JSON.stringify(model.ui || [])); // deep copy

  get(publicAPI, model, ['proxyId', 'proxyGroup', 'proxyName']);
  setGet(publicAPI, model, ['proxyManager']); // group properties

  var propertyMap = {};
  var groupChildrenNames = {};
  function registerProperties(descriptionList, currentGroupName) {
    if (!groupChildrenNames[currentGroupName]) {
      groupChildrenNames[currentGroupName] = [];
    }
    var childrenNames = groupChildrenNames[currentGroupName];
    for (var i = 0; i < descriptionList.length; i++) {
      childrenNames.push(descriptionList[i].name);
      propertyMap[descriptionList[i].name] = descriptionList[i];
      if (descriptionList[i].children && descriptionList[i].children.length) {
        registerProperties(descriptionList[i].children, descriptionList[i].name);
      }
    }
  }
  registerProperties(model.ui, ROOT_GROUP_NAME);
  publicAPI.updateUI = function (ui) {
    model.ui = JSON.parse(JSON.stringify(ui || [])); // deep copy

    Object.keys(propertyMap).forEach(function (k) {
      return delete propertyMap[k];
    });
    Object.keys(groupChildrenNames).forEach(function (k) {
      return delete groupChildrenNames[k];
    });
    registerProperties(model.ui, ROOT_GROUP_NAME);
    publicAPI.modified();
  };
  function listProxyProperties() {
    var gName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ROOT_GROUP_NAME;
    return groupChildrenNames[gName];
  }
  publicAPI.updateProxyProperty = function (propertyName, propUI) {
    var prop = propertyMap[propertyName];
    if (prop) {
      Object.assign(prop, propUI);
    } else {
      propertyMap[propertyName] = _objectSpread({}, propUI);
    }
  };
  publicAPI.activate = function () {
    if (model.proxyManager) {
      var setActiveMethod = "setActive".concat(_capitalize(publicAPI.getProxyGroup().slice(0, -1)));
      if (model.proxyManager[setActiveMethod]) {
        model.proxyManager[setActiveMethod](publicAPI);
      }
    }
  }; // property link

  model.propertyLinkSubscribers = {};
  publicAPI.registerPropertyLinkForGC = function (otherLink, type) {
    if (!(type in model.propertyLinkSubscribers)) {
      model.propertyLinkSubscribers[type] = [];
    }
    model.propertyLinkSubscribers[type].push(otherLink);
  };
  publicAPI.gcPropertyLinks = function (type) {
    var subscribers = model.propertyLinkSubscribers[type] || [];
    while (subscribers.length) {
      subscribers.pop().unbind(publicAPI);
    }
  };
  model.propertyLinkMap = {};
  publicAPI.getPropertyLink = function (id) {
    var persistent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (model.propertyLinkMap[id]) {
      return model.propertyLinkMap[id];
    }
    var value = null;
    var links = [];
    var count = 0;
    var updateInProgress = false;
    function update(source) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (updateInProgress) {
        return null;
      }
      var needUpdate = [];
      var sourceLink = null;
      count = links.length;
      while (count--) {
        var link = links[count];
        if (link.instance === source) {
          sourceLink = link;
        } else {
          needUpdate.push(link);
        }
      }
      if (!sourceLink) {
        return null;
      }
      var newValue = sourceLink.instance["get".concat(_capitalize(sourceLink.propertyName))]();
      if (!shallowEquals(newValue, value) || force) {
        value = newValue;
        updateInProgress = true;
        while (needUpdate.length) {
          var linkToUpdate = needUpdate.pop();
          linkToUpdate.instance.set(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, linkToUpdate.propertyName, value));
        }
        updateInProgress = false;
      }
      if (model.propertyLinkMap[id].persistent) {
        model.propertyLinkMap[id].value = newValue;
      }
      return newValue;
    }
    function unbind(instance, propertyName) {
      var indexToDelete = [];
      count = links.length;
      while (count--) {
        var link = links[count];
        if (link.instance === instance && (link.propertyName === propertyName || propertyName === undefined)) {
          link.subscription.unsubscribe();
          indexToDelete.push(count);
        }
      }
      while (indexToDelete.length) {
        links.splice(indexToDelete.pop(), 1);
      }
    }
    function bind(instance, propertyName) {
      var updateMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var subscription = instance.onModified(update);
      var other = links[0];
      links.push({
        instance: instance,
        propertyName: propertyName,
        subscription: subscription
      });
      if (updateMe) {
        if (model.propertyLinkMap[id].persistent && model.propertyLinkMap[id].value !== undefined) {
          instance.set(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, propertyName, model.propertyLinkMap[id].value));
        } else if (other) {
          update(other.instance, true);
        }
      }
      return {
        unsubscribe: function unsubscribe() {
          return unbind(instance, propertyName);
        }
      };
    }
    function unsubscribe() {
      while (links.length) {
        links.pop().subscription.unsubscribe();
      }
    }
    var linkHandler = {
      bind: bind,
      unbind: unbind,
      unsubscribe: unsubscribe,
      persistent: persistent
    };
    model.propertyLinkMap[id] = linkHandler;
    return linkHandler;
  }; // extract values

  function getProperties() {
    var groupName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ROOT_GROUP_NAME;
    var values = [];
    var id = model.proxyId;
    var propertyNames = listProxyProperties(groupName) || [];
    for (var i = 0; i < propertyNames.length; i++) {
      var name = propertyNames[i];
      var method = publicAPI["get".concat(_capitalize(name))];
      var value = method ? method() : undefined;
      var prop = {
        id: id,
        name: name,
        value: value
      };
      var children = getProperties(name);
      if (children.length) {
        prop.children = children;
      }
      values.push(prop);
    }
    return values;
  }
  publicAPI.listPropertyNames = function () {
    return getProperties().map(function (p) {
      return p.name;
    });
  };
  publicAPI.getPropertyByName = function (name) {
    return getProperties().find(function (p) {
      return p.name === name;
    });
  };
  publicAPI.getPropertyDomainByName = function (name) {
    return (propertyMap[name] || {}).domain;
  }; // ui section

  publicAPI.getProxySection = function () {
    return {
      id: model.proxyId,
      name: model.proxyGroup,
      ui: model.ui,
      properties: getProperties()
    };
  }; // free resources

  publicAPI["delete"] = function () {
    var list = Object.keys(model.propertyLinkMap);
    var count = list.length;
    while (count--) {
      model.propertyLinkMap[list[count]].unsubscribe();
    }
    Object.keys(model.propertyLinkSubscribers).forEach(publicAPI.gcPropertyLinks);
    parentDelete();
  }; // @todo fix infinite recursion due to active source

  publicAPI.getState = function () {
    return null;
  };
  function registerLinks() {
    // Allow dynamic registration of links at the application level
    if (model.links) {
      for (var i = 0; i < model.links.length; i++) {
        var _model$links$i = model.links[i],
          link = _model$links$i.link,
          property = _model$links$i.property,
          persistent = _model$links$i.persistent,
          updateOnBind = _model$links$i.updateOnBind,
          type = _model$links$i.type;
        if (type === 'application') {
          var sLink = model.proxyManager.getPropertyLink(link, persistent);
          publicAPI.registerPropertyLinkForGC(sLink, 'application');
          sLink.bind(publicAPI, property, updateOnBind);
        }
      }
    }
  }
  setImmediateVTK(registerLinks);
} // ----------------------------------------------------------------------------
// proxyPropertyMapping(publicAPI, model, map)
//
//   map = {
//      opacity: { modelKey: 'property', property: 'opacity' },
//   }
//
// Generated API:
//  Elevate set/get methods from internal object stored in the model to current one
// ----------------------------------------------------------------------------

function proxyPropertyMapping(publicAPI, model, map) {
  var parentDelete = publicAPI["delete"];
  var subscriptions = [];
  var propertyNames = Object.keys(map);
  var count = propertyNames.length;
  while (count--) {
    var propertyName = propertyNames[count];
    var _map$propertyName = map[propertyName],
      modelKey = _map$propertyName.modelKey,
      property = _map$propertyName.property,
      _map$propertyName$mod = _map$propertyName.modified,
      modified = _map$propertyName$mod === void 0 ? true : _map$propertyName$mod;
    var methodSrc = _capitalize(property);
    var methodDst = _capitalize(propertyName);
    publicAPI["get".concat(methodDst)] = model[modelKey]["get".concat(methodSrc)];
    publicAPI["set".concat(methodDst)] = model[modelKey]["set".concat(methodSrc)];
    if (modified) {
      subscriptions.push(model[modelKey].onModified(publicAPI.modified));
    }
  }
  publicAPI["delete"] = function () {
    while (subscriptions.length) {
      subscriptions.pop().unsubscribe();
    }
    parentDelete();
  };
} // ----------------------------------------------------------------------------
// proxyPropertyState(publicAPI, model, state, defaults)
//
//   state = {
//     representation: {
//       'Surface with edges': { property: { edgeVisibility: true, representation: 2 } },
//       Surface: { property: { edgeVisibility: false, representation: 2 } },
//       Wireframe: { property: { edgeVisibility: false, representation: 1 } },
//       Points: { property: { edgeVisibility: false, representation: 0 } },
//     },
//   }
//
//   defaults = {
//      representation: 'Surface',
//   }
//
// Generated API
//   get / set Representation ( string ) => push state to various internal objects
// ----------------------------------------------------------------------------

function proxyPropertyState(publicAPI, model) {
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var defaults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  model["this"] = publicAPI;
  function applyState(map) {
    var modelKeys = Object.keys(map);
    var count = modelKeys.length;
    while (count--) {
      var modelKey = modelKeys[count];
      model[modelKey].set(map[modelKey]);
    }
  }
  var modelKeys = Object.keys(defaults);
  var count = modelKeys.length;
  var _loop2 = function _loop2() {
    // Add default
    var key = modelKeys[count];
    model[key] = defaults[key]; // Add set method

    var mapping = state[key];
    publicAPI["set".concat(_capitalize(key))] = function (value) {
      if (value !== model[key]) {
        model[key] = value;
        var propValues = mapping[value];
        applyState(propValues);
        publicAPI.modified();
      }
    };
  };
  while (count--) {
    _loop2();
  } // Add getter

  if (modelKeys.length) {
    get(publicAPI, model, modelKeys);
  }
} // ----------------------------------------------------------------------------
// From : https://github.com/facebookarchive/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js
//
//
// Copyright (c) 2015, Facebook, Inc.
// All rights reserved.
//
// This source code is licensed under the BSD-style license found in the
// LICENSE file in the root directory of this source tree. An additional grant
// of patent rights can be found in the PATENTS file in the same directory.
//
//
// Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
// complicated, thus this doc is long and (hopefully) detailed enough to answer
// your questions.
//
// If you need to react to the mouse wheel in a predictable way, this code is
// like your bestest friend.// hugs//
//
// As of today, there are 4 DOM event types you can listen to:
//
//   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
//   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
//   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
//   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
//
// So what to do?  The is the best:
//
//   normalizeWheel.getEventType();
//
// In your event callback, use this code to get sane interpretation of the
// deltas.  This code will return an object with properties:
//
//   spinX   -- normalized spin speed (use for zoom) - x plane
//   spinY   -- " - y plane
//   pixelX  -- normalized distance (to pixels) - x plane
//   pixelY  -- " - y plane
//
// Wheel values are provided by the browser assuming you are using the wheel to
// scroll a web page by a number of lines or pixels (or pages).  Values can vary
// significantly on different platforms and browsers, forgetting that you can
// scroll at different speeds.  Some devices (like trackpads) emit more events
// at smaller increments with fine granularity, and some emit massive jumps with
// linear speed or acceleration.
//
// This code does its best to normalize the deltas for you:
//
//   - spin is trying to normalize how far the wheel was spun (or trackpad
//     dragged).  This is super useful for zoom support where you want to
//     throw away the chunky scroll steps on the PC and make those equal to
//     the slow and smooth tiny steps on the Mac. Key data: This code tries to
//     resolve a single slow step on a wheel to 1.
//
//   - pixel is normalizing the desired scroll delta in pixel units.  You'll
//     get the crazy differences between browsers, but at least it'll be in
//     pixels!
//
//   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
//     should translate to positive value zooming IN, negative zooming OUT.
//     This matches the newer 'wheel' event.
//
// Why are there spinX, spinY (or pixels)?
//
//   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
//     with a mouse.  It results in side-scrolling in the browser by default.
//
//   - spinY is what you expect -- it's the classic axis of a mouse wheel.
//
//   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
//     probably is by browsers in conjunction with fancy 3D controllers .. but
//     you know.
//
// Implementation info:
//
// Examples of 'wheel' event if you scroll slowly (down) by one step with an
// average mouse:
//
//   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
//   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
//   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
//   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
//   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
//
// On the trackpad:
//
//   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
//   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
//
// On other/older browsers.. it's more complicated as there can be multiple and
// also missing delta values.
//
// The 'wheel' event is more standard:
//
// http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
//
// The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
// deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
// backward compatibility with older events.  Those other values help us
// better normalize spin speed.  Example of what the browsers provide:
//
//                          | event.wheelDelta | event.detail
//        ------------------+------------------+--------------
//          Safari v5/OS X  |       -120       |       0
//          Safari v5/Win7  |       -120       |       0
//         Chrome v17/OS X  |       -120       |       0
//         Chrome v17/Win7  |       -120       |       0
//                IE9/Win7  |       -120       |   undefined
//         Firefox v4/OS X  |     undefined    |       1
//         Firefox v4/Win7  |     undefined    |       3
//
// ----------------------------------------------------------------------------
// Reasonable defaults

var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
function normalizeWheel(wheelEvent) {
  var sX = 0; // spinX

  var sY = 0; // spinY

  var pX = 0; // pixelX

  var pY = 0; // pixelY
  // Legacy

  if ('detail' in wheelEvent) {
    sY = wheelEvent.detail;
  }
  if ('wheelDelta' in wheelEvent) {
    sY = -wheelEvent.wheelDelta / 120;
  }
  if ('wheelDeltaY' in wheelEvent) {
    sY = -wheelEvent.wheelDeltaY / 120;
  }
  if ('wheelDeltaX' in wheelEvent) {
    sX = -wheelEvent.wheelDeltaX / 120;
  } // side scrolling on FF with DOMMouseScroll

  if ('axis' in wheelEvent && wheelEvent.axis === wheelEvent.HORIZONTAL_AXIS) {
    sX = sY;
    sY = 0;
  }
  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;
  if ('deltaY' in wheelEvent) {
    pY = wheelEvent.deltaY;
  }
  if ('deltaX' in wheelEvent) {
    pX = wheelEvent.deltaX;
  }
  if ((pX || pY) && wheelEvent.deltaMode) {
    if (wheelEvent.deltaMode === 1) {
      // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {
      // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  } // Fall-back if spin cannot be determined

  if (pX && !sX) {
    sX = pX < 1 ? -1 : 1;
  }
  if (pY && !sY) {
    sY = pY < 1 ? -1 : 1;
  }
  return {
    spinX: sX,
    spinY: sY,
    pixelX: pX,
    pixelY: pY
  };
} // ----------------------------------------------------------------------------
// Default export
// ----------------------------------------------------------------------------

var macro = {
  algo: algo,
  capitalize: capitalize,
  chain: chain,
  debounce: debounce,
  enumToString: enumToString,
  event: event,
  EVENT_ABORT: EVENT_ABORT,
  formatBytesToProperUnit: formatBytesToProperUnit,
  formatNumbersWithThousandSeparator: formatNumbersWithThousandSeparator,
  get: get,
  getArray: getArray,
  getCurrentGlobalMTime: getCurrentGlobalMTime,
  getStateArrayMapFunc: getStateArrayMapFunc,
  isVtkObject: isVtkObject,
  keystore: keystore,
  measurePromiseExecution: measurePromiseExecution,
  moveToProtected: moveToProtected,
  newInstance: newInstance,
  newTypedArray: newTypedArray,
  newTypedArrayFrom: newTypedArrayFrom,
  normalizeWheel: normalizeWheel,
  obj: obj,
  proxy: proxy,
  proxyPropertyMapping: proxyPropertyMapping,
  proxyPropertyState: proxyPropertyState,
  safeArrays: safeArrays,
  set: set,
  setArray: setArray,
  setGet: setGet,
  setGetArray: setGetArray,
  setImmediate: setImmediateVTK,
  setLoggerFunction: setLoggerFunction,
  throttle: throttle,
  traverseInstanceTree: traverseInstanceTree,
  TYPED_ARRAYS: TYPED_ARRAYS,
  // deprecated todo remove on breaking API revision
  uncapitalize: uncapitalize,
  VOID: VOID,
  vtkDebugMacro: vtkDebugMacro,
  vtkErrorMacro: vtkErrorMacro,
  vtkInfoMacro: vtkInfoMacro,
  vtkLogMacro: vtkLogMacro,
  vtkOnceErrorMacro: vtkOnceErrorMacro,
  vtkWarningMacro: vtkWarningMacro
};


/***/ }),

/***/ "./node_modules/@kitware/vtk.js/vtk.js":
/*!*********************************************!*\
  !*** ./node_modules/@kitware/vtk.js/vtk.js ***!
  \*********************************************/
/*! exports provided: default, vtkGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return vtk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vtkGlobal", function() { return vtkGlobal; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var globalthis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! globalthis */ "./node_modules/globalthis/index.js");
/* harmony import */ var globalthis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(globalthis__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var vtkGlobal = globalthis__WEBPACK_IMPORTED_MODULE_2___default()(); // returns native globalThis if compliant

var factoryMapping = {
  vtkObject: function vtkObject() {
    return null;
  }
};
function vtk(obj) {
  if (obj === null || obj === undefined) {
    return obj;
  }
  if (obj.isA) {
    return obj;
  }
  if (!obj.vtkClass) {
    if (vtkGlobal.console && vtkGlobal.console.error) {
      vtkGlobal.console.error('Invalid VTK object');
    }
    return null;
  }
  var constructor = factoryMapping[obj.vtkClass];
  if (!constructor) {
    if (vtkGlobal.console && vtkGlobal.console.error) {
      vtkGlobal.console.error("No vtk class found for Object of type ".concat(obj.vtkClass));
    }
    return null;
  } // Shallow copy object

  var model = _objectSpread({}, obj); // Convert into vtkObject any nested key

  Object.keys(model).forEach(function (keyName) {
    if (model[keyName] && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(model[keyName]) === 'object' && model[keyName].vtkClass) {
      model[keyName] = vtk(model[keyName]);
    }
  }); // Return the root

  var newInst = constructor(model);
  if (newInst && newInst.modified) {
    newInst.modified();
  }
  return newInst;
}
function register(vtkClassName, constructor) {
  factoryMapping[vtkClassName] = constructor;
} // Nest register method under the vtk function

vtk.register = register;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./src/workers/marching-cubes.worker.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./src/workers/marching-cubes.worker.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kitware_vtk_js_Common_Core_DataArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kitware/vtk.js/Common/Core/DataArray */ "./node_modules/@kitware/vtk.js/Common/Core/DataArray.js");
/* harmony import */ var _kitware_vtk_js_Common_DataModel_ImageData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kitware/vtk.js/Common/DataModel/ImageData */ "./node_modules/@kitware/vtk.js/Common/DataModel/ImageData.js");
/* harmony import */ var _kitware_vtk_js_Filters_General_ImageMarchingCubes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kitware/vtk.js/Filters/General/ImageMarchingCubes */ "./node_modules/@kitware/vtk.js/Filters/General/ImageMarchingCubes.js");
/* harmony import */ var _kitware_vtk_js_Filters_General_WindowedSincPolyDataFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kitware/vtk.js/Filters/General/WindowedSincPolyDataFilter */ "./node_modules/@kitware/vtk.js/Filters/General/WindowedSincPolyDataFilter.js");





// vtk.js uses window object.
self.window = self;

// const scalars =
// 	vtkDataArray.newInstance
// 	({
// 		values: new Float32Array(3),
// 		numberOfComponents: 1,
// 		dataType: vtkDataArray.VtkDataTypes.CHAR,
// 		// dataType: vtkDataArray.VtkDataTypes.FLOAT,
// 		name: 'scalars'
// 	});

// const image_data = vtkImageData.newInstance();

// const marching_cubes = vtkImageMarchingCubes.newInstance();

// const smooth_filter = vtkWindowedSincPolyDataFilter.newInstance()

onmessage = function onmessage(message) {
  var scalars = _kitware_vtk_js_Common_Core_DataArray__WEBPACK_IMPORTED_MODULE_0__["default"].newInstance({
    values: message.data.data,
    numberOfComponents: 1,
    dataType: _kitware_vtk_js_Common_Core_DataArray__WEBPACK_IMPORTED_MODULE_0__["default"].VtkDataTypes.CHAR,
    // dataType: vtkDataArray.VtkDataTypes.FLOAT,
    name: 'scalars'
  });

  // scalars.setData(message.data.data);

  var dataRange = scalars.getRange();
  self.min = dataRange[0];
  self.max = dataRange[1];
  self.data_orig = message.data.data_orig;
  self.data_segm = message.data.data_segm;
  self.i_min = message.data.i_min;
  self.i_max = message.data.i_max;
  self.j_min = message.data.j_min;
  self.j_max = message.data.j_max;
  self.k_min = message.data.k_min;
  self.k_max = message.data.k_max;

  // LOG(self.i_min, self.i_max, self.j_min, self.j_max, self.k_min, self.k_max)

  var image_data = _kitware_vtk_js_Common_DataModel_ImageData__WEBPACK_IMPORTED_MODULE_1__["default"].newInstance();
  if (message.data.image_data) {
    image_data.set(message.data.image_data);
  }

  // const sp = image_data.getSpacing();

  // LOG('sop', sp)

  // image_data.setSpacing([ sp[0], sp[0], 1 ]);

  // LOG('image_data.getSpacing()', image_data.getSpacing())

  image_data.getPointData().setScalars(scalars);
  var marching_cubes = _kitware_vtk_js_Filters_General_ImageMarchingCubes__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance();
  if (message.data.marching_cubes) {
    marching_cubes.set(message.data.marching_cubes);
  }
  marching_cubes.setInputData(image_data);
  var smooth_filter = _kitware_vtk_js_Filters_General_WindowedSincPolyDataFilter__WEBPACK_IMPORTED_MODULE_3__["default"].newInstance();
  if (message.data.smooth_filter) {
    smooth_filter.set(message.data.smooth_filter);
  }
  smooth_filter.setInputData(marching_cubes.getOutputData());
  var points = smooth_filter.getOutputData().get().points.get().values;
  var _polys = smooth_filter.getOutputData().get().polys.get().values;

  // LOG('points, _polys', points, _polys)

  // const center = [ 0, 0, 0 ];

  // for (let i = 0; i < points.length; i += 3)
  // {
  // 	center[0] += points[i + 0];
  // 	center[1] += points[i + 1];
  // 	center[2] += points[i + 2];
  // }

  // center[0] /= points.length / 3;
  // center[1] /= points.length / 3;
  // center[2] /= points.length / 3;

  // for (let i = 0; i < points.length; i += 3)
  // {
  // 	points[i + 0] -= center[0];
  // 	points[i + 1] -= center[1];
  // 	points[i + 2] -= center[2];
  // }

  var polys = new Uint32Array(_polys.length / 4 * 3);
  for (var i = 0; i < polys.length; i += 3) {
    var poly_index = i / 3 * 4;

    // (poly_index + 0) is not a vertex index (it is a count of vertex indices in the polygon),
    // so start from (poly_index + 1).
    polys[i + 0] = _polys[poly_index + 1];
    polys[i + 1] = _polys[poly_index + 2];
    polys[i + 2] = _polys[poly_index + 3];
  }
  var colors = new Float32Array(points.length);
  for (var _i = 0, i_max = points.length; _i < i_max; _i += 3) {
    // const origin = image_data.getOrigin();
    // const spacing = image_data.getSpacing();
    // const dimensions = image_data.getDimensions();

    var origin = image_data.getOrigin();
    var spacing = image_data.getSpacing();
    var dimensions = message.data.image_data.dimensions;
    var px = points[_i + 0];
    var py = points[_i + 1];
    var pz = points[_i + 2];
    var _i2 = Math.floor((px - origin[0] + dimensions[0] * 0) / spacing[0]);
    var j = Math.floor((py - origin[1] + dimensions[1] * 0) / spacing[1]);
    var k = Math.floor((pz - origin[2] + dimensions[2] * 0) / spacing[2]);
    var y_mul = dimensions[0];
    var z_mul = dimensions[0] * dimensions[1];
    var _index = _i2 + j * y_mul + k * z_mul;
    var _min = self.min;
    var _max = self.max;
    var greyscale = (self.data_orig[_index] - _min) / (_max - _min);
    colors[_i + 0] = greyscale;
    // colors[_i + 1] = greyscale;
    // colors[_i + 2] = greyscale;
  }

  var volume = 0;

  // {
  // 	const spacing = image_data.getSpacing();

  // 	let vox_num = 0;

  // 	// TODO: move to marching cubes.
  // 	for (let i = 0, i_max = self.data_segm.length; i < i_max; ++i)
  // 	{
  // 		if (self.data_segm[i])
  // 		{
  // 			++vox_num;
  // 		}
  // 	}

  // 	LOG('volume', volume = spacing[0] * spacing[1] * spacing[2] * vox_num)
  // }

  // postMessage({ points, polys, colors: new Float32Array(marching_cubes.getColors()) });
  // postMessage({ points, polys, colors: points.map(() => 1) });
  // LOG('points, polys, colors, volume', points, polys, colors, volume)
  postMessage({
    points: points,
    polys: polys,
    colors: colors,
    volume: volume
  });
};

/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && _typeof(Symbol('foo')) === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function isFunction(fn) {
  return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var hasPropertyDescriptors = __webpack_require__(/*! has-property-descriptors */ "./node_modules/has-property-descriptors/index.js")();
var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
var defineProperty = function defineProperty(object, name, value, predicate) {
  if (name in object && (!isFunction(predicate) || !predicate())) {
    return;
  }
  if (supportsDescriptors) {
    origDefineProperty(object, name, {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    });
  } else {
    object[name] = value; // eslint-disable-line no-param-reassign
  }
};

var defineProperties = function defineProperties(object, map) {
  var predicates = arguments.length > 2 ? arguments[2] : {};
  var props = keys(map);
  if (hasSymbols) {
    props = concat.call(props, Object.getOwnPropertySymbols(map));
  }
  for (var i = 0; i < props.length; i += 1) {
    defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  }
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
module.exports = function equal(a, b) {
  if (a === b) return true;
  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
};

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';
module.exports = function bind(that) {
  var target = this;
  if (typeof target !== 'function' || toStr.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice.call(arguments, 1);
  var bound;
  var binder = function binder() {
    if (this instanceof bound) {
      var result = target.apply(this, args.concat(slice.call(arguments)));
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(that, args.concat(slice.call(arguments)));
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push('$' + i);
  }
  bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
  if (target.prototype) {
    var Empty = function Empty() {};
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};

/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");
module.exports = Function.prototype.bind || implementation;

/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function getEvalledConstructor(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
  } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
  try {
    $gOPD({}, '');
  } catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
  }
}

var throwTypeError = function throwTypeError() {
  throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function () {
  try {
    // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
    arguments.callee; // IE 8 does not throw here
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
      return $gOPD(arguments, 'callee').get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();
var getProto = Object.getPrototypeOf || function (x) {
  return x.__proto__;
}; // eslint-disable-line no-proto

var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
var INTRINSICS = {
  '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
  '%Array%': Array,
  '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
  '%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
  '%AsyncFromSyncIteratorPrototype%': undefined,
  '%AsyncFunction%': needsEval,
  '%AsyncGenerator%': needsEval,
  '%AsyncGeneratorFunction%': needsEval,
  '%AsyncIteratorPrototype%': needsEval,
  '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
  '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
  '%Boolean%': Boolean,
  '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
  '%Date%': Date,
  '%decodeURI%': decodeURI,
  '%decodeURIComponent%': decodeURIComponent,
  '%encodeURI%': encodeURI,
  '%encodeURIComponent%': encodeURIComponent,
  '%Error%': Error,
  '%eval%': eval,
  // eslint-disable-line no-eval
  '%EvalError%': EvalError,
  '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
  '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
  '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
  '%Function%': $Function,
  '%GeneratorFunction%': needsEval,
  '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
  '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
  '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
  '%isFinite%': isFinite,
  '%isNaN%': isNaN,
  '%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
  '%JSON%': (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) === 'object' ? JSON : undefined,
  '%Map%': typeof Map === 'undefined' ? undefined : Map,
  '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
  '%Math%': Math,
  '%Number%': Number,
  '%Object%': Object,
  '%parseFloat%': parseFloat,
  '%parseInt%': parseInt,
  '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
  '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
  '%RangeError%': RangeError,
  '%ReferenceError%': ReferenceError,
  '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
  '%RegExp%': RegExp,
  '%Set%': typeof Set === 'undefined' ? undefined : Set,
  '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
  '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
  '%String%': String,
  '%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
  '%Symbol%': hasSymbols ? Symbol : undefined,
  '%SyntaxError%': $SyntaxError,
  '%ThrowTypeError%': ThrowTypeError,
  '%TypedArray%': TypedArray,
  '%TypeError%': $TypeError,
  '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
  '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
  '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
  '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
  '%URIError%': URIError,
  '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
  '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
  '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};
var doEval = function doEval(name) {
  var value;
  if (name === '%AsyncFunction%') {
    value = getEvalledConstructor('async function () {}');
  } else if (name === '%GeneratorFunction%') {
    value = getEvalledConstructor('function* () {}');
  } else if (name === '%AsyncGeneratorFunction%') {
    value = getEvalledConstructor('async function* () {}');
  } else if (name === '%AsyncGenerator%') {
    var fn = doEval('%AsyncGeneratorFunction%');
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === '%AsyncIteratorPrototype%') {
    var gen = doEval('%AsyncGenerator%');
    if (gen) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
  '%ArrayPrototype%': ['Array', 'prototype'],
  '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
  '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
  '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
  '%ArrayProto_values%': ['Array', 'prototype', 'values'],
  '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
  '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
  '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
  '%BooleanPrototype%': ['Boolean', 'prototype'],
  '%DataViewPrototype%': ['DataView', 'prototype'],
  '%DatePrototype%': ['Date', 'prototype'],
  '%ErrorPrototype%': ['Error', 'prototype'],
  '%EvalErrorPrototype%': ['EvalError', 'prototype'],
  '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
  '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
  '%FunctionPrototype%': ['Function', 'prototype'],
  '%Generator%': ['GeneratorFunction', 'prototype'],
  '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
  '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
  '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
  '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
  '%JSONParse%': ['JSON', 'parse'],
  '%JSONStringify%': ['JSON', 'stringify'],
  '%MapPrototype%': ['Map', 'prototype'],
  '%NumberPrototype%': ['Number', 'prototype'],
  '%ObjectPrototype%': ['Object', 'prototype'],
  '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
  '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
  '%PromisePrototype%': ['Promise', 'prototype'],
  '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
  '%Promise_all%': ['Promise', 'all'],
  '%Promise_reject%': ['Promise', 'reject'],
  '%Promise_resolve%': ['Promise', 'resolve'],
  '%RangeErrorPrototype%': ['RangeError', 'prototype'],
  '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
  '%RegExpPrototype%': ['RegExp', 'prototype'],
  '%SetPrototype%': ['Set', 'prototype'],
  '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
  '%StringPrototype%': ['String', 'prototype'],
  '%SymbolPrototype%': ['Symbol', 'prototype'],
  '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
  '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
  '%TypeErrorPrototype%': ['TypeError', 'prototype'],
  '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
  '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
  '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
  '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
  '%URIErrorPrototype%': ['URIError', 'prototype'],
  '%WeakMapPrototype%': ['WeakMap', 'prototype'],
  '%WeakSetPrototype%': ['WeakSet', 'prototype']
};
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === '%' && last !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
  } else if (last === '%' && first !== '%') {
    throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
  }
  var result = [];
  $replace(string, rePropName, function (match, number, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
  });
  return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = '%' + alias[0] + '%';
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === 'undefined' && !allowMissing) {
      throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
    }
    return {
      alias: alias,
      name: intrinsicName,
      value: value
    };
  }
  throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new $TypeError('intrinsic name must be a non-empty string');
  }
  if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
    throw new $TypeError('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
  var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
      throw new $SyntaxError('property names with quotes must have matching quotes');
    }
    if (part === 'constructor' || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += '.' + part;
    intrinsicRealName = '%' + intrinsicBaseName + '%';
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
        }
        return void undefined;
      }
      if ($gOPD && i + 1 >= parts.length) {
        var desc = $gOPD(value, part);
        isOwn = !!desc;

        // By convention, when a data property is converted to an accessor
        // property to emulate a data property that does not suffer from
        // the override mistake, that accessor's getter is marked with
        // an `originalValue` property. Here, when we detect this, we
        // uphold the illusion by pretending to see that original data
        // property, i.e., returning the value rather than the getter
        // itself.
        if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
    i = arguments.length;
  while (i--) {
    y += arguments[i] * arguments[i];
  }
  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/index.js ***!
  \*********************************************/
/*! exports provided: glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return _common_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat2.js */ "./node_modules/gl-matrix/esm/mat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return _mat2_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat2d.js */ "./node_modules/gl-matrix/esm/mat2d.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return _mat2d_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _mat3_js__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _mat4_js__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return _quat_js__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quat2.js */ "./node_modules/gl-matrix/esm/quat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat2", function() { return _quat2_js__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _vec2_js__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _vec3_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _vec4_js__WEBPACK_IMPORTED_MODULE_9__; });












/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2.js ***!
  \********************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, transpose, invert, adjoint, determinant, multiply, rotate, scale, fromRotation, fromScaling, str, frob, LDU, add, subtract, exactEquals, equals, multiplyScalar, multiplyScalarAndAdd, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LDU", function() { return LDU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }
  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }
  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var v0 = v[0],
    v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2d.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2d.js ***!
  \*********************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, invert, determinant, multiply, rotate, scale, translate, fromRotation, fromScaling, fromTranslation, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }
  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
  var aa = a[0],
    ab = a[1],
    ac = a[2],
    ad = a[3];
  var atx = a[4],
    aty = a[5];
  var det = aa * ad - ab * ac;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5];
  var v0 = v[0],
    v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5];
  var v0 = v[0],
    v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
    c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
      a02 = a[2],
      a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }
  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2];
  var a10 = a[3],
    a11 = a[4],
    a12 = a[5];
  var a20 = a[6],
    a21 = a[7],
    a22 = a[8];
  var b00 = b[0],
    b01 = b[1],
    b02 = b[2];
  var b10 = b[3],
    b11 = b[4],
    b12 = b[5];
  var b20 = b[6],
    b21 = b[7],
    b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    x = v[0],
    y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a10 = a[3],
    a11 = a[4],
    a12 = a[5],
    a20 = a[6],
    a21 = a[7],
    a22 = a[8],
    s = Math.sin(rad),
    c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
    y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
    c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5],
    a6 = a[6],
    a7 = a[7],
    a8 = a[8];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7],
    b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspectiveNO, perspective, perspectiveZO, perspectiveFromFieldOfView, orthoNO, ortho, orthoZO, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveNO", function() { return perspectiveNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveZO", function() { return perspectiveZO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orthoNO", function() { return orthoNO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orthoZO", function() { return orthoZO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
      a02 = a[2],
      a03 = a[3];
    var a12 = a[6],
      a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
    y = v[1],
    z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
    y = v[1],
    z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
    y = axis[1],
    z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication

  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication

  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication

  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
    y = axis[1],
    z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  var bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
    nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}
/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
    nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */

var ortho = orthoNO;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return identity(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
    eyey = eye[1],
    eyez = eye[2],
    upx = up[0],
    upy = up[1],
    upz = up[2];
  var z0 = eyex - target[0],
    z1 = eyey - target[1],
    z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }
  var x0 = upy * z2 - upz * z1,
    x1 = upz * z0 - upx * z2,
    x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var a4 = a[4],
    a5 = a[5],
    a6 = a[6],
    a7 = a[7];
  var a8 = a[8],
    a9 = a[9],
    a10 = a[10],
    a11 = a[11];
  var a12 = a[12],
    a13 = a[13],
    a14 = a[14],
    a15 = a[15];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  var b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7];
  var b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11];
  var b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
/*! exports provided: create, identity, setAxisAngle, getAxisAngle, getAngle, multiply, rotateX, rotateY, rotateZ, calculateW, exp, ln, pow, slerp, random, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAngle", function() { return getAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ln", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);
  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var by = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bz = Math.sin(rad),
    bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
    y = a[1],
    z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  var bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients

  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values

  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;
  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);
    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat2.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat2.js ***!
  \*********************************************/
/*! exports provided: create, clone, fromValues, fromRotationTranslationValues, fromRotationTranslation, fromTranslation, fromRotation, fromMat4, copy, identity, set, getReal, getDual, setReal, setDual, getTranslation, translate, rotateX, rotateY, rotateZ, rotateByQuatAppend, rotateByQuatPrepend, rotateAroundAxis, add, multiply, mul, scale, dot, lerp, invert, conjugate, length, len, squaredLength, sqrLen, normalize, str, exactEquals, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationValues", function() { return fromRotationTranslationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReal", function() { return getReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDual", function() { return getDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReal", function() { return setReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDual", function() { return setDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatAppend", function() { return rotateByQuatAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatPrepend", function() { return rotateByQuatPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAroundAxis", function() { return rotateAroundAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create() {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }
  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone(a) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
    ay = y2 * 0.5,
    az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
    ay = t[1] * 0.5,
    az = t[2] * 0.5,
    bx = q[0],
    by = q[1],
    bz = q[2],
    bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
  //TODO Optimize this
  var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getRotation"](outer, a);
  var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
  var ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
  var ax1 = a[0],
    ay1 = a[1],
    az1 = a[2],
    aw1 = a[3],
    bx1 = v[0] * 0.5,
    by1 = v[1] * 0.5,
    bz1 = v[2] * 0.5,
    ax2 = a[4],
    ay2 = a[5],
    az2 = a[6],
    aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
  var bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateX"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
  var bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateY"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
  var bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateZ"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3],
    ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3],
    bx = a[0],
    by = a[1],
    bz = a[2],
    bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
    return copy(out, a);
  }
  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
    ay1 = a[1],
    az1 = a[2],
    aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */

function multiply(out, a, b) {
  var ax0 = a[0],
    ay0 = a[1],
    az0 = a[2],
    aw0 = a[3],
    bx1 = b[4],
    by1 = b[5],
    bz1 = b[6],
    bw1 = b[7],
    ax1 = a[4],
    ay1 = a[5],
    az1 = a[6],
    aw1 = a[7],
    bx0 = b[0],
    by0 = b[1],
    bz0 = b[2],
    bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__["length"];
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize(out, a) {
  var magnitude = squaredLength(a);
  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }
  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
  return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5],
    a6 = a[6],
    a7 = a[7];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, zero, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }
  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
    y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
    y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
    p1 = a[1] - b[1],
    sinC = Math.sin(rad),
    cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
    y1 = a[1],
    x2 = b[0],
    y2 = b[1],
    // mag is the product of the magnitudes of a and b
    mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
    // mag &&.. short circuits if mag == 0
    cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
    a1 = a[1];
  var b0 = b[0],
    b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 2;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }
    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
    ay = a[1],
    az = a[2];
  var bx = b[0],
    by = b[1],
    bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
    y = a[1],
    z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1],
    z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3];
  var x = a[0],
    y = a[1],
    z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
    uvy = qz * x - qx * z,
    uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
    uuvy = qz * uvx - qx * uvz,
    uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
    r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
    r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
    r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    bx = b[0],
    by = b[1],
    bz = b[2],
    mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
    mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
    mag = mag1 * mag2,
    cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat4, transformQuat, zero, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  if (_common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
    B = v[0] * w[2] - v[2] * w[0],
    C = v[0] * w[3] - v[3] * w[0],
    D = v[1] * w[2] - v[2] * w[1],
    E = v[1] * w[3] - v[3] * w[1],
    F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);
  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
    y = a[1],
    z = a[2];
  var qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 4;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }
    return a;
  };
}();

/***/ }),

/***/ "./node_modules/globalthis/implementation.browser.js":
/*!***********************************************************!*\
  !*** ./node_modules/globalthis/implementation.browser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint no-negated-condition: 0, no-new-func: 0 */



if (typeof self !== 'undefined') {
  module.exports = self;
} else if (typeof window !== 'undefined') {
  module.exports = window;
} else {
  module.exports = Function('return this')();
}

/***/ }),

/***/ "./node_modules/globalthis/index.js":
/*!******************************************!*\
  !*** ./node_modules/globalthis/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/globalthis/implementation.browser.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/globalthis/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/globalthis/shim.js");
var polyfill = getPolyfill();
var getGlobal = function getGlobal() {
  return polyfill;
};
defineProperties(getGlobal, {
  getPolyfill: getPolyfill,
  implementation: implementation,
  shim: shim
});
module.exports = getGlobal;

/***/ }),

/***/ "./node_modules/globalthis/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/globalthis/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/globalthis/implementation.browser.js");
module.exports = function getPolyfill() {
  if ((typeof global === "undefined" ? "undefined" : _typeof(global)) !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
    return implementation;
  }
  return global;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/globalthis/shim.js":
/*!*****************************************!*\
  !*** ./node_modules/globalthis/shim.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/globalthis/polyfill.js");
module.exports = function shimGlobal() {
  var polyfill = getPolyfill();
  if (define.supportsDescriptors) {
    var descriptor = Object.getOwnPropertyDescriptor(polyfill, 'globalThis');
    if (!descriptor || descriptor.configurable && (descriptor.enumerable || !descriptor.writable || globalThis !== polyfill)) {
      // eslint-disable-line max-len
      Object.defineProperty(polyfill, 'globalThis', {
        configurable: true,
        enumerable: false,
        value: polyfill,
        writable: true
      });
    }
  } else if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) !== 'object' || globalThis !== polyfill) {
    polyfill.globalThis = polyfill;
  }
  return polyfill;
};

/***/ }),

/***/ "./node_modules/has-property-descriptors/index.js":
/*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasPropertyDescriptors = function hasPropertyDescriptors() {
  if ($defineProperty) {
    try {
      $defineProperty({}, 'a', {
        value: 1
      });
      return true;
    } catch (e) {
      // IE 8 has a broken defineProperty
      return false;
    }
  }
  return false;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  // node v0.6 has a bug where array lengths can be Set but not Defined
  if (!hasPropertyDescriptors()) {
    return null;
  }
  try {
    return $defineProperty([], 'length', {
      value: 1
    }).length !== 1;
  } catch (e) {
    // In Firefox 4-22, defining length on an array throws an exception.
    return true;
  }
};
module.exports = hasPropertyDescriptors;

/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");
module.exports = function hasNativeSymbols() {
  if (typeof origSymbol !== 'function') {
    return false;
  }
  if (typeof Symbol !== 'function') {
    return false;
  }
  if (_typeof(origSymbol('foo')) !== 'symbol') {
    return false;
  }
  if (_typeof(Symbol('bar')) !== 'symbol') {
    return false;
  }
  return hasSymbolSham();
};

/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
module.exports = function hasSymbols() {
  if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
    return false;
  }
  if (_typeof(Symbol.iterator) === 'symbol') {
    return true;
  }
  var obj = {};
  var sym = Symbol('test');
  var symObj = Object(sym);
  if (typeof sym === 'string') {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
    return false;
  }

  // temp disabled per https://github.com/ljharb/object.assign/issues/17
  // if (sym instanceof Symbol) { return false; }
  // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  // if (!(symObj instanceof Symbol)) { return false; }

  // if (typeof Symbol.prototype.toString !== 'function') { return false; }
  // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
  if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === 'function') {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var keysShim;
if (!Object.keys) {
  // modified from https://github.com/es-shims/es5-shim
  var has = Object.prototype.hasOwnProperty;
  var toStr = Object.prototype.toString;
  var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var hasDontEnumBug = !isEnumerable.call({
    toString: null
  }, 'toString');
  var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
  var equalsConstructorPrototype = function equalsConstructorPrototype(o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
  };
  var excludedKeys = {
    $applicationCache: true,
    $console: true,
    $external: true,
    $frame: true,
    $frameElement: true,
    $frames: true,
    $innerHeight: true,
    $innerWidth: true,
    $onmozfullscreenchange: true,
    $onmozfullscreenerror: true,
    $outerHeight: true,
    $outerWidth: true,
    $pageXOffset: true,
    $pageYOffset: true,
    $parent: true,
    $scrollLeft: true,
    $scrollTop: true,
    $scrollX: true,
    $scrollY: true,
    $self: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $window: true
  };
  var hasAutomationEqualityBug = function () {
    /* global window */
    if (typeof window === 'undefined') {
      return false;
    }
    for (var k in window) {
      try {
        if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && _typeof(window[k]) === 'object') {
          try {
            equalsConstructorPrototype(window[k]);
          } catch (e) {
            return true;
          }
        }
      } catch (e) {
        return true;
      }
    }
    return false;
  }();
  var equalsConstructorPrototypeIfNotBuggy = function equalsConstructorPrototypeIfNotBuggy(o) {
    /* global window */
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
      return equalsConstructorPrototype(o);
    }
    try {
      return equalsConstructorPrototype(o);
    } catch (e) {
      return false;
    }
  };
  keysShim = function keys(object) {
    var isObject = object !== null && _typeof(object) === 'object';
    var isFunction = toStr.call(object) === '[object Function]';
    var isArguments = isArgs(object);
    var isString = isObject && toStr.call(object) === '[object String]';
    var theKeys = [];
    if (!isObject && !isFunction && !isArguments) {
      throw new TypeError('Object.keys called on a non-object');
    }
    var skipProto = hasProtoEnumBug && isFunction;
    if (isString && object.length > 0 && !has.call(object, 0)) {
      for (var i = 0; i < object.length; ++i) {
        theKeys.push(String(i));
      }
    }
    if (isArguments && object.length > 0) {
      for (var j = 0; j < object.length; ++j) {
        theKeys.push(String(j));
      }
    } else {
      for (var name in object) {
        if (!(skipProto && name === 'prototype') && has.call(object, name)) {
          theKeys.push(String(name));
        }
      }
    }
    if (hasDontEnumBug) {
      var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
      for (var k = 0; k < dontEnums.length; ++k) {
        if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
          theKeys.push(dontEnums[k]);
        }
      }
    }
    return theKeys;
  };
}
module.exports = keysShim;

/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
  return origKeys(o);
} : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function () {
      // Safari 5.0 bug
      var args = Object.keys(arguments);
      return args && args.length === arguments.length;
    }(1, 2);
    if (!keysWorksWithArguments) {
      Object.keys = function keys(object) {
        // eslint-disable-line func-name-matching
        if (isArgs(object)) {
          return originalKeys(slice.call(object));
        }
        return originalKeys(object);
      };
    }
  } else {
    Object.keys = keysShim;
  }
  return Object.keys || keysShim;
};
module.exports = keysShim;

/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
  var str = toStr.call(value);
  var isArgs = str === '[object Arguments]';
  if (!isArgs) {
    isArgs = str !== '[object Array]' && value !== null && _typeof(value) === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
  }
  return isArgs;
};

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "./node_modules/seedrandom/lib/alea.js");

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(/*! ./lib/xor128 */ "./node_modules/seedrandom/lib/xor128.js");

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(/*! ./lib/xorwow */ "./node_modules/seedrandom/lib/xorwow.js");

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "./node_modules/seedrandom/lib/xorshift7.js");

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "./node_modules/seedrandom/lib/xor4096.js");

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(/*! ./lib/tychei */ "./node_modules/seedrandom/lib/tychei.js");

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(/*! ./seedrandom */ "./node_modules/seedrandom/seedrandom.js");
sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;
module.exports = sr;

/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

(function (global, module, define) {
  function Alea(seed) {
    var me = this,
      mash = Mash();
    me.next = function () {
      var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
      me.s0 = me.s1;
      me.s1 = me.s2;
      return me.s2 = t - (me.c = t | 0);
    };

    // Apply the seeding algorithm from Baagoe.
    me.c = 1;
    me.s0 = mash(' ');
    me.s1 = mash(' ');
    me.s2 = mash(' ');
    me.s0 -= mash(seed);
    if (me.s0 < 0) {
      me.s0 += 1;
    }
    me.s1 -= mash(seed);
    if (me.s1 < 0) {
      me.s1 += 1;
    }
    me.s2 -= mash(seed);
    if (me.s2 < 0) {
      me.s2 += 1;
    }
    mash = null;
  }
  function copy(f, t) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
  }
  function impl(seed, opts) {
    var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
    prng.int32 = function () {
      return xg.next() * 0x100000000 | 0;
    };
    prng["double"] = function () {
      return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    };

    prng.quick = prng;
    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }
  function Mash() {
    var n = 0xefc8249d;
    var mash = function mash(data) {
      data = String(data);
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }

      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };

    return mash;
  }
  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.alea = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module,
// present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function (global, module, define) {
  function XorGen(seed) {
    var me = this,
      strseed = '';

    // Set up generator function.
    me.next = function () {
      var b = me.b,
        c = me.c,
        d = me.d,
        a = me.a;
      b = b << 25 ^ b >>> 7 ^ c;
      c = c - d | 0;
      d = d << 24 ^ d >>> 8 ^ a;
      a = a - b | 0;
      me.b = b = b << 20 ^ b >>> 12 ^ c;
      me.c = c = c - d | 0;
      me.d = d << 16 ^ c >>> 16 ^ a;
      return me.a = a - b | 0;
    };

    /* The following is non-inverted tyche, which has better internal
     * bit diffusion, but which is about 25% slower than tyche-i in JS.
    me.next = function() {
      var a = me.a, b = me.b, c = me.c, d = me.d;
      a = (me.a + me.b | 0) >>> 0;
      d = me.d ^ a; d = d << 16 ^ d >>> 16;
      c = me.c + d | 0;
      b = me.b ^ c; b = b << 12 ^ d >>> 20;
      me.a = a = a + b | 0;
      d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
      me.c = c = c + d | 0;
      b = b ^ c;
      return me.b = (b << 7 ^ b >>> 25);
    }
    */

    me.a = 0;
    me.b = 0;
    me.c = 2654435769 | 0;
    me.d = 1367130551;
    if (seed === Math.floor(seed)) {
      // Integer seed.
      me.a = seed / 0x100000000 | 0;
      me.b = seed | 0;
    } else {
      // String seed.
      strseed += seed;
    }

    // Mix in string seed, then discard an initial batch of 64 values.
    for (var k = 0; k < strseed.length + 20; k++) {
      me.b ^= strseed.charCodeAt(k) | 0;
      me.next();
    }
  }
  function copy(f, t) {
    t.a = f.a;
    t.b = f.b;
    t.c = f.c;
    t.d = f.d;
    return t;
  }
  ;
  function impl(seed, opts) {
    var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
    prng["double"] = function () {
      do {
        var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }
  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.tychei = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module,
// present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function (global, module, define) {
  function XorGen(seed) {
    var me = this,
      strseed = '';
    me.x = 0;
    me.y = 0;
    me.z = 0;
    me.w = 0;

    // Set up generator function.
    me.next = function () {
      var t = me.x ^ me.x << 11;
      me.x = me.y;
      me.y = me.z;
      me.z = me.w;
      return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
    };
    if (seed === (seed | 0)) {
      // Integer seed.
      me.x = seed;
    } else {
      // String seed.
      strseed += seed;
    }

    // Mix in string seed, then discard an initial batch of 64 values.
    for (var k = 0; k < strseed.length + 64; k++) {
      me.x ^= strseed.charCodeAt(k) | 0;
      me.next();
    }
  }
  function copy(f, t) {
    t.x = f.x;
    t.y = f.y;
    t.z = f.z;
    t.w = f.w;
    return t;
  }
  function impl(seed, opts) {
    var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
    prng["double"] = function () {
      do {
        var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }
  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xor128 = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module,
// present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function (global, module, define) {
  function XorGen(seed) {
    var me = this;

    // Set up generator function.
    me.next = function () {
      var w = me.w,
        X = me.X,
        i = me.i,
        t,
        v;
      // Update Weyl generator.
      me.w = w = w + 0x61c88647 | 0;
      // Update xor generator.
      v = X[i + 34 & 127];
      t = X[i = i + 1 & 127];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      // Update Xor generator array state.
      v = X[i] = v ^ t;
      me.i = i;
      // Result is the combination.
      return v + (w ^ w >>> 16) | 0;
    };
    function init(me, seed) {
      var t,
        v,
        i,
        j,
        w,
        X = [],
        limit = 128;
      if (seed === (seed | 0)) {
        // Numeric seeds initialize v, which is used to generates X.
        v = seed;
        seed = null;
      } else {
        // String seeds are mixed into v and X one character at a time.
        seed = seed + '\0';
        v = 0;
        limit = Math.max(limit, seed.length);
      }
      // Initialize circular array and weyl value.
      for (i = 0, j = -32; j < limit; ++j) {
        // Put the unicode characters into the array, and shuffle them.
        if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
        // After 32 shuffles, take v as the starting w value.
        if (j === 0) w = v;
        v ^= v << 10;
        v ^= v >>> 15;
        v ^= v << 4;
        v ^= v >>> 13;
        if (j >= 0) {
          w = w + 0x61c88647 | 0; // Weyl.
          t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.
          i = 0 == t ? i + 1 : 0; // Count zeroes.
        }
      }
      // We have detected all zeroes; make the key nonzero.
      if (i >= 128) {
        X[(seed && seed.length || 0) & 127] = -1;
      }
      // Run the generator 512 times to further mix the state before using it.
      // Factoring this as a function slows the main generator, so it is just
      // unrolled here.  The weyl generator is not advanced while warming up.
      i = 127;
      for (j = 4 * 128; j > 0; --j) {
        v = X[i + 34 & 127];
        t = X[i = i + 1 & 127];
        v ^= v << 13;
        t ^= t << 17;
        v ^= v >>> 15;
        t ^= t >>> 12;
        X[i] = v ^ t;
      }
      // Storing state as object members is faster than using closure variables.
      me.w = w;
      me.X = X;
      me.i = i;
    }
    init(me, seed);
  }
  function copy(f, t) {
    t.i = f.i;
    t.w = f.w;
    t.X = f.X.slice();
    return t;
  }
  ;
  function impl(seed, opts) {
    if (seed == null) seed = +new Date();
    var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
    prng["double"] = function () {
      do {
        var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if (state.X) copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }
  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xor4096 = impl;
  }
})(this,
// window object or global
( false ? undefined : _typeof(module)) == 'object' && module,
// present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function (global, module, define) {
  function XorGen(seed) {
    var me = this;

    // Set up generator function.
    me.next = function () {
      // Update xor generator.
      var X = me.x,
        i = me.i,
        t,
        v,
        w;
      t = X[i];
      t ^= t >>> 7;
      v = t ^ t << 24;
      t = X[i + 1 & 7];
      v ^= t ^ t >>> 10;
      t = X[i + 3 & 7];
      v ^= t ^ t >>> 3;
      t = X[i + 4 & 7];
      v ^= t ^ t << 7;
      t = X[i + 7 & 7];
      t = t ^ t << 13;
      v ^= t ^ t << 9;
      X[i] = v;
      me.i = i + 1 & 7;
      return v;
    };
    function init(me, seed) {
      var j,
        w,
        X = [];
      if (seed === (seed | 0)) {
        // Seed state array using a 32-bit integer.
        w = X[0] = seed;
      } else {
        // Seed state using a string.
        seed = '' + seed;
        for (j = 0; j < seed.length; ++j) {
          X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
        }
      }
      // Enforce an array length of 8, not all zeroes.
      while (X.length < 8) X.push(0);
      for (j = 0; j < 8 && X[j] === 0; ++j);
      if (j == 8) w = X[7] = -1;else w = X[j];
      me.x = X;
      me.i = 0;

      // Discard an initial 256 values.
      for (j = 256; j > 0; --j) {
        me.next();
      }
    }
    init(me, seed);
  }
  function copy(f, t) {
    t.x = f.x.slice();
    t.i = f.i;
    return t;
  }
  function impl(seed, opts) {
    if (seed == null) seed = +new Date();
    var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
    prng["double"] = function () {
      do {
        var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if (state.x) copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }
  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xorshift7 = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module,
// present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function (global, module, define) {
  function XorGen(seed) {
    var me = this,
      strseed = '';

    // Set up generator function.
    me.next = function () {
      var t = me.x ^ me.x >>> 2;
      me.x = me.y;
      me.y = me.z;
      me.z = me.w;
      me.w = me.v;
      return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
    };
    me.x = 0;
    me.y = 0;
    me.z = 0;
    me.w = 0;
    me.v = 0;
    if (seed === (seed | 0)) {
      // Integer seed.
      me.x = seed;
    } else {
      // String seed.
      strseed += seed;
    }

    // Mix in string seed, then discard an initial batch of 64 values.
    for (var k = 0; k < strseed.length + 64; k++) {
      me.x ^= strseed.charCodeAt(k) | 0;
      if (k == strseed.length) {
        me.d = me.x << 10 ^ me.x >>> 4;
      }
      me.next();
    }
  }
  function copy(f, t) {
    t.x = f.x;
    t.y = f.y;
    t.z = f.z;
    t.w = f.w;
    t.v = f.v;
    t.d = f.d;
    return t;
  }
  function impl(seed, opts) {
    var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function prng() {
        return (xg.next() >>> 0) / 0x100000000;
      };
    prng["double"] = function () {
      do {
        var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
      } while (result === 0);
      return result;
    };
    prng.int32 = xg.next;
    prng.quick = prng;
    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);
      prng.state = function () {
        return copy(xg, {});
      };
    }
    return prng;
  }
  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xorwow = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module,
// present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (global, pool, math) {
  //
  // The following constants are related to IEEE 754 limits.
  //

  var width = 256,
    // each RC4 output is 0 <= x < 256
    chunks = 6,
    // at least six RC4 outputs for each double
    digits = 52,
    // there are 52 significant digits in a double
    rngname = 'random',
    // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto; // node.js crypto module, initialized at the bottom.

  //
  // seedrandom()
  // This is the seedrandom function described above.
  //
  function seedrandom(seed, options, callback) {
    var key = [];
    options = options == true ? {
      entropy: true
    } : options || {};

    // Flatten the seed string or build one from local entropy if needed.
    var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed, 3), key);

    // Use the seed to initialize an ARC4 generator.
    var arc4 = new ARC4(key);

    // This function returns a random double in [0, 1) that contains
    // randomness in every bit of the mantissa of the IEEE 754 value.
    var prng = function prng() {
      var n = arc4.g(chunks),
        // Start with a numerator n < 2 ^ 48
        d = startdenom,
        //   and denominator d = 2 ^ 48.
        x = 0; //   and no 'extra last byte'.
      while (n < significance) {
        // Fill up all significant digits by
        n = (n + x) * width; //   shifting numerator and
        d *= width; //   denominator and generating a
        x = arc4.g(1); //   new least-significant-byte.
      }

      while (n >= overflow) {
        // To avoid rounding up, before adding
        n /= 2; //   last byte, shift everything
        d /= 2; //   right using integer math until
        x >>>= 1; //   we have exactly the desired bits.
      }

      return (n + x) / d; // Form the number within [0, 1).
    };

    prng.int32 = function () {
      return arc4.g(4) | 0;
    };
    prng.quick = function () {
      return arc4.g(4) / 0x100000000;
    };
    prng["double"] = prng;

    // Mix the randomness into accumulated entropy.
    mixkey(tostring(arc4.S), pool);

    // Calling convention: what to return as a function of prng, seed, is_math.
    return (options.pass || callback || function (prng, seed, is_math_call, state) {
      if (state) {
        // Load the arc4 state from the given state if it has an S array.
        if (state.S) {
          copy(state, arc4);
        }
        // Only provide the .state method if requested via options.state.
        prng.state = function () {
          return copy(arc4, {});
        };
      }

      // If called as a method of Math (Math.seedrandom()), mutate
      // Math.random because that is how seedrandom.js has worked since v1.0.
      if (is_math_call) {
        math[rngname] = prng;
        return seed;
      }

      // Otherwise, it is a newer calling convention, so return the
      // prng directly.
      else return prng;
    })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
  }

  //
  // ARC4
  //
  // An ARC4 implementation.  The constructor takes a key in the form of
  // an array of at most (width) integers that should be 0 <= x < (width).
  //
  // The g(count) method returns a pseudorandom integer that concatenates
  // the next (count) outputs from ARC4.  Its return value is a number x
  // that is in the range 0 <= x < (width ^ count).
  //
  function ARC4(key) {
    var t,
      keylen = key.length,
      me = this,
      i = 0,
      j = me.i = me.j = 0,
      s = me.S = [];

    // The empty key [] is treated as [0].
    if (!keylen) {
      key = [keylen++];
    }

    // Set up S using the standard key scheduling algorithm.
    while (i < width) {
      s[i] = i++;
    }
    for (i = 0; i < width; i++) {
      s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
      s[j] = t;
    }

    // The "g" method returns the next (count) outputs as one number.
    (me.g = function (count) {
      // Using instance members instead of closure state nearly doubles speed.
      var t,
        r = 0,
        i = me.i,
        j = me.j,
        s = me.S;
      while (count--) {
        t = s[i = mask & i + 1];
        r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
      }
      me.i = i;
      me.j = j;
      return r;
      // For robust unpredictability, the function call below automatically
      // discards an initial batch of values.  This is called RC4-drop[256].
      // See http://google.com/search?q=rsa+fluhrer+response&btnI
    })(width);
  }

  //
  // copy()
  // Copies internal state of ARC4 to or from a plain object.
  //
  function copy(f, t) {
    t.i = f.i;
    t.j = f.j;
    t.S = f.S.slice();
    return t;
  }
  ;

  //
  // flatten()
  // Converts an object tree to nested arrays of strings.
  //
  function flatten(obj, depth) {
    var result = [],
      typ = _typeof(obj),
      prop;
    if (depth && typ == 'object') {
      for (prop in obj) {
        try {
          result.push(flatten(obj[prop], depth - 1));
        } catch (e) {}
      }
    }
    return result.length ? result : typ == 'string' ? obj : obj + '\0';
  }

  //
  // mixkey()
  // Mixes a string seed into a key that is an array of integers, and
  // returns a shortened string seed that is equivalent to the result key.
  //
  function mixkey(seed, key) {
    var stringseed = seed + '',
      smear,
      j = 0;
    while (j < stringseed.length) {
      key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
    }
    return tostring(key);
  }

  //
  // autoseed()
  // Returns an object for autoseeding, using window.crypto and Node crypto
  // module if available.
  //
  function autoseed() {
    try {
      var out;
      if (nodecrypto && (out = nodecrypto.randomBytes)) {
        // The use of 'out' to remember randomBytes makes tight minified code.
        out = out(width);
      } else {
        out = new Uint8Array(width);
        (global.crypto || global.msCrypto).getRandomValues(out);
      }
      return tostring(out);
    } catch (e) {
      var browser = global.navigator,
        plugins = browser && browser.plugins;
      return [+new Date(), global, plugins, global.screen, tostring(pool)];
    }
  }

  //
  // tostring()
  // Converts an array of charcodes to a string
  //
  function tostring(a) {
    return String.fromCharCode.apply(0, a);
  }

  //
  // When seedrandom.js is loaded, we immediately mix a few bits
  // from the built-in RNG into the entropy pool.  Because we do
  // not want to interfere with deterministic PRNG state later,
  // seedrandom will not call math.random on its own again after
  // initialization.
  //
  mixkey(math.random(), pool);

  //
  // Nodejs and AMD support: export the implementation as a module using
  // either convention.
  //
  if (( false ? undefined : _typeof(module)) == 'object' && module.exports) {
    module.exports = seedrandom;
    // When in node.js, try using crypto package for autoseeding.
    try {
      nodecrypto = __webpack_require__(/*! crypto */ 0);
    } catch (ex) {}
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return seedrandom;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

  // End anonymous scope, and pass initial values.
})(
// global: `self` in browsers (including strict mode and web workers),
// otherwise `this` in Node and other environments
typeof self !== 'undefined' ? self : this, [],
// pool: entropy pool starts empty
Math // math: package containing random, pow, and seedrandom
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=marching-cubes.worker.worker.js.map