self["webpackChunk"]([0],{

/***/ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!**********************************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/helpers/typeof.js":
/*!**********************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/node_modules/@babel/runtime/helpers/typeof.js ***!
  \**********************************************************************************************/
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

/***/ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/regenerator/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/node_modules/@babel/runtime/regenerator/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/cxx-specific.js":
/*!********************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/cxx-specific.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ __webpack_exports__["default"] = ({
  // https://en.cppreference.com/w/cpp/language/types
  bool: function bool(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem.bool.typed_array_constructor(this.memory.buffer, addr, length);
  },
  "char": function char(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["char"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  "int": function int(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["int"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  "short": function short(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["short"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  "long": function long(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["long"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  size_t: function size_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem.size_t.typed_array_constructor(this.memory.buffer, addr, length);
  },
  addr: function addr(_addr2) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem.addr.typed_array_constructor(this.memory.buffer, _addr2, length);
  },
  uint8_t: function uint8_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.Uint8Array(this.memory.buffer, addr, length);
  },
  int8_t: function int8_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.Int8Array(this.memory.buffer, addr, length);
  },
  uint16_t: function uint16_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.Uint16Array(this.memory.buffer, addr, length);
  },
  int16_t: function int16_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.Int16Array(this.memory.buffer, addr, length);
  },
  uint32_t: function uint32_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.Uint32Array(this.memory.buffer, addr, length);
  },
  int32_t: function int32_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.Int32Array(this.memory.buffer, addr, length);
  },
  uint64_t: function uint64_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.BigUint64Array(this.memory.buffer, addr, length);
  },
  int64_t: function int64_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.BigInt64Array(this.memory.buffer, addr, length);
  },
  "float": function float(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["float"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  "double": function double(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["double"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  long_double: function long_double(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.Uint8Array(this.memory.buffer, addr, length * this.mem.long_double.size);
  },
  addr2: function addr2(name) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return this.addr(this.globals[name] || this.exports[name].value, length);
  },
  getCStringLength: function getCStringLength(addr) {
    var _addr = addr;

    // Find terminating "\0".
    for (var vend = 0;; ++vend) {
      // if (this.char(_addr + vend)[0] === 0)
      if (this.memory_views.UI8[_addr + vend] === 0) {
        return vend;
      }
    }
  },
  // c_string (addr)
  // {
  // 	return this.memory_views.UI8.subarray(addr, addr + this.getCStringLength(addr));
  // },
  c_string: function c_string(addr) {
    return this["char"](addr, this.getCStringLength(addr));
  },
  c_string2: function c_string2(addr) {
    // return this.constructor.convertUint8ArrayToDomString(this.memory_views.UI8.subarray(addr, addr + this.getCStringLength(addr)));
    return this.constructor.convertUint8ArrayToDomString(this.c_string(addr));
  },
  std_string: function std_string(addr) {
    var result = this["char"](this.exports.__getStdStringData(addr), this.exports.__getStdStringSize(addr));
    return result;
  },
  std_string2: function std_string2(addr) {
    return this.constructor.convertUint8ArrayToDomString(this.std_string(addr));
  },
  std_vector: function std_vector(addr, type) {
    var result = this[type](this.exports.__getStdVectorData(addr), this.exports.__getStdVectorSize(addr));
    return result;
  },
  // std_vector_bool (addr) { return this.std_vector(addr, 'bool'); },
  std_vector_char: function std_vector_char(addr) {
    return this.std_vector(addr, 'char');
  },
  std_vector_int: function std_vector_int(addr) {
    return this.std_vector(addr, 'int');
  },
  std_vector_short: function std_vector_short(addr) {
    return this.std_vector(addr, 'short');
  },
  std_vector_long: function std_vector_long(addr) {
    return this.std_vector(addr, 'long');
  },
  std_vector_size_t: function std_vector_size_t(addr) {
    return this.std_vector(addr, 'size_t');
  },
  std_vector_addr: function std_vector_addr(addr) {
    return this.std_vector(addr, 'addr');
  },
  std_vector_uint8_t: function std_vector_uint8_t(addr) {
    return this.std_vector(addr, 'uint8_t');
  },
  std_vector_int8_t: function std_vector_int8_t(addr) {
    return this.std_vector(addr, 'int8_t');
  },
  std_vector_uint16_t: function std_vector_uint16_t(addr) {
    return this.std_vector(addr, 'uint16_t');
  },
  std_vector_int16_t: function std_vector_int16_t(addr) {
    return this.std_vector(addr, 'int16_t');
  },
  std_vector_uint32_t: function std_vector_uint32_t(addr) {
    return this.std_vector(addr, 'uint32_t');
  },
  std_vector_int32_t: function std_vector_int32_t(addr) {
    return this.std_vector(addr, 'int32_t');
  },
  std_vector_uint64_t: function std_vector_uint64_t(addr) {
    return this.std_vector(addr, 'uint64_t');
  },
  std_vector_int64_t: function std_vector_int64_t(addr) {
    return this.std_vector(addr, 'int64_t');
  },
  std_vector_float: function std_vector_float(addr) {
    return this.std_vector(addr, 'float');
  },
  std_vector_double: function std_vector_double(addr) {
    return this.std_vector(addr, 'double');
  },
  std_vector_long_double: function std_vector_long_double(addr) {
    return this.std_vector(addr, 'long_double');
  },
  resizeStdVector: function resizeStdVector(addr, size) {
    this.exports.__resizeStdVector(addr, size);
  },
  updateStdVectorData: function updateStdVectorData(addr, type, _data) {
    this.std_vector(addr, type).set(_data);
  },
  // demangle (name, name_addr)
  // {
  // 	this.memory_views.UI8.set(this.constructor.convertDomStringToUint8Array(name), name_addr);
  // 	const demangled_name =
  // 		this.constructor.convertUint8ArrayToDomString
  // 		(this.c_string(this.exports.__demangleCxxName(name_addr)))
  // 			.replace(/, /g, ',');
  // 	return demangled_name;
  // }
  demangleCxxNames: function demangleCxxNames() {
    var _this = this;
    var demangled_name_max_length = 1024;
    var demangled_name_addr = this.exports.__malloc(demangled_name_max_length);
    var exports_demangled_reduced = {};
    var exports_demangled = Object.keys(this.exports).reduce(function (exports_demangled, _name) {
      if (_name.startsWith('_Z')) {
        var name = "".concat(_name, "\0");

        // const demangled_name = this.demangle(name, demangled_name_addr);

        _this.memory_views.UI8.set(_this.constructor.convertDomStringToUint8Array(name), demangled_name_addr);
        var demangled_name = _this.constructor.convertUint8ArrayToDomString(_this.c_string(_this.exports.__demangleCxxName(demangled_name_addr))).replace(/, /g, ',');
        if (exports_demangled[demangled_name]) {
          if (Array.isArray(exports_demangled[demangled_name])) {
            exports_demangled[demangled_name].push(_this.exports[_name]);
            return exports_demangled;
          }
          var first_entry = exports_demangled[demangled_name];
          exports_demangled[demangled_name] = [first_entry, _this.exports[_name]];
          return exports_demangled;
        }
        exports_demangled[demangled_name] = _this.exports[_name];
        exports_demangled_reduced[demangled_name.replace(/\([^)]*\)/g, '')] = _this.exports[_name];
      }
      return exports_demangled;
    }, {});
    this.exports.__free(demangled_name_addr);
    return {
      exports_demangled: exports_demangled,
      exports_demangled_reduced: exports_demangled_reduced
    };
  },
  Class: function Class(name) {
    var wasm_wrapper = this;
    var _Class = /*#__PURE__*/_createClass(function _Class(input) {
      _classCallCheck(this, _Class);
      if (typeof input === 'number') {
        this.addr = input;
      } else if (typeof input === 'string') {
        var _wasm_wrapper$addr = wasm_wrapper.addr2(input);
        var _wasm_wrapper$addr2 = _slicedToArray(_wasm_wrapper$addr, 1);
        this.addr = _wasm_wrapper$addr2[0];
      }
    });
    _defineProperty(_Class, "name", name);
    _defineProperty(_Class, "overloaded", {});
    self.Object.keys(this.exports_demangled).filter(function (member_name) {
      return member_name.includes(name);
    }).forEach(function (member_name) {
      var member_name_trimmed = member_name.replace("".concat(name, "::"), '').replace(/\((.*)+/g, '');

      // Some objects may be exported twice from wasm. TODO: why does it occur?
      var wasm_object = wasm_wrapper.exports_demangled[member_name][0] || wasm_wrapper.exports_demangled[member_name];
      if (typeof wasm_object === 'function') {
        var _member_name$match;
        var parameters = (_member_name$match = member_name.match(/\((.*)+/g)) === null || _member_name$match === void 0 ? void 0 : _member_name$match[0].replace(/\(|( )|\)/g, '').split(',');
        if (parameters.length && parameters[0] === '') {
          parameters.length = 0;
        }

        // static function
        if (parameters.length === wasm_object.length) {
          if (_Class[member_name_trimmed]) {
            if (!_Class.overloaded[member_name_trimmed]) {
              _Class.overloaded[member_name_trimmed] = 0;
            }
            ++_Class.overloaded[member_name_trimmed];
            member_name_trimmed += "_o".concat(_Class.overloaded[member_name_trimmed]);
          }
          _Class[member_name_trimmed] = wasm_object;
        }

        // non-static function
        else {
          if (_Class.prototype[member_name_trimmed]) {
            if (!_Class.overloaded[member_name_trimmed]) {
              _Class.overloaded[member_name_trimmed] = 0;
            }
            ++_Class.overloaded[member_name_trimmed];
            member_name_trimmed += "_o".concat(_Class.overloaded[member_name_trimmed]);
          }

          // Non-wrapped
          _Class["proto_".concat(member_name_trimmed)] = wasm_object;
          _Class.prototype[member_name_trimmed] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return wasm_object.apply(void 0, [this.addr].concat(args));
          };
        }
      } else if (_typeof(wasm_object) === 'object') {
        _Class[member_name_trimmed] = wasm_object;
      }
    });

    // Presume New() returns a pointer
    if (_Class.New) {
      _Class.NewWrapper = function () {
        return new _Class(_Class.New());
      };
    }
    return _Class;
  }
});

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/imports.js":
/*!***************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/imports.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var IDLE_FUNCTION = function IDLE_FUNCTION() {
  return 0;
};
/* harmony default export */ __webpack_exports__["default"] = (function (wasm_wrapper) {
  var imports_lib = {
    console_log: function console_log(size, types_addr, values_addr) {
      var _console;
      var arg_types = wasm_wrapper.size_t(types_addr, size);
      var args = new Array(size);
      var _wasm_wrapper$size_t = wasm_wrapper.size_t(wasm_wrapper.globals.__any_value_size),
        _wasm_wrapper$size_t2 = _slicedToArray(_wasm_wrapper$size_t, 1),
        any_value_size = _wasm_wrapper$size_t2[0];
      for (var i = 0; i < size; ++i) {
        var type_name = wasm_wrapper.type_names[arg_types[i]];
        var value_addr = values_addr + any_value_size * i;
        args[i] = wasm_wrapper.mem[type_name].interp_log(value_addr);
      }
      (_console = console).log.apply(_console, ['%cWASM:', 'color: #bada55'].concat(args));
    },
    console_log2: function console_log2() {
      var _console2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_console2 = console).log.apply(_console2, ['%cWASM:', 'color: #bada55'].concat(args));
    },
    date_now: function date_now() {
      return Date.now();
    },
    host_loop: function host_loop(function_addr) {
      var _function = wasm_wrapper["function"](function_addr);

      // setInterval(_function, 1000, ...args);
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      setInterval.apply(void 0, [_function, 0].concat(args));
    },
    host_animation_loop: function host_animation_loop(function_addr) {
      var _function = wasm_wrapper["function"](function_addr);
      var loop = function loop() {
        requestAnimationFrame(_function);
        _function.apply(void 0, _toConsumableArray(args));
      };
      loop();
    },
    // For using this function WASM code must be processed by
    // wasm-opt tool with flags: "-O1", "--asyncify".
    rdty_sleep: function rdty_sleep(duration) {
      // Global state for running the program.

      var DATA_ADDR = 16;
      if (wasm_wrapper.sleeping) {
        // We are called as part of a resume/rewind. Stop sleeping.
        // console.log('...resume');
        wasm_wrapper.exports.asyncify_stop_rewind();
        wasm_wrapper.sleeping = false;
      } else {
        // We are called in order to start a sleep/unwind.
        // console.log('sleep...');
        // Fill in the data structure. The first value has the stack location,
        // which for simplicity we can start right after the data structure itself.
        wasm_wrapper.memory_views.I32[DATA_ADDR >> 2] = DATA_ADDR + 8;
        // The end of the stack will not be reached here anyhow.

        // TODO: use stack_size instead of 1024 * 1024.
        wasm_wrapper.memory_views.I32[DATA_ADDR + 4 >> 2] = 1024 * 1024;
        wasm_wrapper.exports.asyncify_start_unwind(DATA_ADDR);
        wasm_wrapper.sleeping = true;

        // // Resume after the proper delay.
        // setTimeout
        // (
        // 	() =>
        // 	{
        // 		// console.log('timeout ended, starting to rewind the stack');
        // 		wasm_wrapper.exports.asyncify_start_rewind(DATA_ADDR);
        // 		// The code is now ready to rewind; to start the process, enter the
        // 		// first function that should be on the call stack.
        // 	},

        // 	duration,
        // );

        setTimeout(wasm_wrapper.exports.asyncify_start_rewind, duration, DATA_ADDR);
      }
    }
  };

  // For using these functions WASM code must be processed by
  // wasm-opt tool with flags: "-O1", "--asyncify".
  // If this is main worker.
  if (self.window && self.Worker && self.SharedArrayBuffer) {
    Object.assign(imports_lib, {
      runThread: function runThread(thread_addr, function_addr, thread_types_addr, thread_values_addr) {
        if (!wasm_wrapper.threads) {
          wasm_wrapper.threads = {};
        }
        var thread = new wasm_wrapper.constructor.Thread2(wasm_wrapper, [function_addr, wasm_wrapper.exports.__getStdVectorData(thread_types_addr), wasm_wrapper.exports.__getStdVectorData(thread_values_addr)]);
        wasm_wrapper.threads[thread_addr] = thread;
      },
      joinThread: function joinThread(thread_addr) {
        wasm_wrapper.async_count = wasm_wrapper.async_count || 0;
        ++wasm_wrapper.async_count;
        if (wasm_wrapper.async_count === 1) {
          wasm_wrapper.async_promise = new Promise(function (resolve) {
            wasm_wrapper.async_promise_setter = function (val) {
              if (val) {
                resolve();
              }
            };
          });
        }
        var DATA_ADDR = 16;
        if (wasm_wrapper.sleeping) {
          wasm_wrapper.exports.asyncify_stop_rewind();
          wasm_wrapper.sleeping = false;
        } else {
          wasm_wrapper.memory_views.I32[DATA_ADDR >> 2] = DATA_ADDR + 8;
          wasm_wrapper.memory_views.I32[DATA_ADDR + 4 >> 2] = 1024 * 1024;
          wasm_wrapper.exports.asyncify_start_unwind(DATA_ADDR);
          wasm_wrapper.sleeping = true;
          wasm_wrapper.threads[thread_addr].promise.then(function () {
            wasm_wrapper.exports.asyncify_start_rewind(DATA_ADDR);
            wasm_wrapper.async_func.apply(wasm_wrapper, _toConsumableArray(wasm_wrapper.async_args));
            if (wasm_wrapper.async_count % 2 === 0) {
              wasm_wrapper.async_promise_setter(true);
            }
          });
        }
      },
      terminateThread: function terminateThread(thread_addr) {
        wasm_wrapper.threads[thread_addr].terminate();
      }
    });
  }
  if (
  // self.Worker && // Safari doesn't allow workers to create Worker objects. Only main worker is allowed.
  self.SharedArrayBuffer && self.Atomics) {
    if (self.window) {
      Object.assign(imports_lib, {
        atomic_lock: IDLE_FUNCTION,
        atomic_unlock: IDLE_FUNCTION
      });
    } else {
      var UNLOCKED = 0;
      var LOCKED = 1;
      Object.assign(imports_lib, {
        atomic_lock: function atomic_lock(atomic_addr) {
          var __atomic_malloc_index = atomic_addr / 4;
          do {
            self.Atomics.wait(wasm_wrapper.memory_views.I32, __atomic_malloc_index, LOCKED, Infinity);
          } while (self.Atomics.compareExchange(wasm_wrapper.memory_views.I32, __atomic_malloc_index, UNLOCKED, LOCKED) === LOCKED);
        },
        atomic_unlock: function atomic_unlock(atomic_addr) {
          var __atomic_malloc_index = atomic_addr / 4;
          self.Atomics.store(wasm_wrapper.memory_views.I32, __atomic_malloc_index, UNLOCKED);
          self.Atomics.notify(wasm_wrapper.memory_views.I32, __atomic_malloc_index, 1);
        }
      });
    }
  }
  return imports_lib;
});
;

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/index.js":
/*!*************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/index.js ***!
  \*************************************************************/
/*! exports provided: default, Thread, Thread2, Thread3, Thread4, PromiseBunch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseBunch", function() { return PromiseBunch; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm-wrapper */ "../../renderity/wasm-wrapper/src/wasm-wrapper.js");
/* harmony import */ var _threads_thread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./threads/thread */ "../../renderity/wasm-wrapper/src/threads/thread/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thread", function() { return _threads_thread__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _threads_thread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./threads/thread2 */ "../../renderity/wasm-wrapper/src/threads/thread2/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thread2", function() { return _threads_thread2__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _threads_thread3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./threads/thread3 */ "../../renderity/wasm-wrapper/src/threads/thread3/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thread3", function() { return _threads_thread3__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _threads_thread4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./threads/thread4 */ "../../renderity/wasm-wrapper/src/threads/thread4/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thread4", function() { return _threads_thread4__WEBPACK_IMPORTED_MODULE_5__["default"]; });

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






Object.assign(_wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
  Thread: _threads_thread__WEBPACK_IMPORTED_MODULE_2__["default"],
  Thread2: _threads_thread2__WEBPACK_IMPORTED_MODULE_3__["default"],
  Thread3: _threads_thread3__WEBPACK_IMPORTED_MODULE_4__["default"],
  Thread4: _threads_thread4__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (_wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]);

var IDLE_FUNCTION = function IDLE_FUNCTION() {
  return 0;
};
var PromiseBunch = /*#__PURE__*/function () {
  function PromiseBunch() {
    _classCallCheck(this, PromiseBunch);
    this.running_count = 0;
  }
  _createClass(PromiseBunch, [{
    key: "run",
    value: function run(callback1) {
      var _this = this;
      var callback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IDLE_FUNCTION;
      ++this.running_count;
      if (this.running_count > 1) {
        this.callback_next1 = callback1;
        this.callback_next2 = callback2;
        return false;
      }
      return Promise.all(callback1()).then(function (resolves) {
        callback2(resolves);
        if (_this.running_count > 1) {
          _this.running_count = 0;
          return _this.run(_this.callback_next1, _this.callback_next2);
        }
        _this.running_count = 0;
        return true;
      });
    }
  }, {
    key: "runAsync",
    value: function () {
      var _runAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback1) {
        var _this2 = this;
        var callback2,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              callback2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : IDLE_FUNCTION;
              ++this.running_count;
              if (!(this.running_count > 1)) {
                _context.next = 6;
                break;
              }
              this.callback_next1 = callback1;
              this.callback_next2 = callback2;
              return _context.abrupt("return", false);
            case 6:
              _context.t0 = Promise;
              _context.next = 9;
              return callback1();
            case 9:
              _context.t1 = _context.sent;
              return _context.abrupt("return", _context.t0.all.call(_context.t0, _context.t1).then(function (resolves) {
                callback2(resolves);
                if (_this2.running_count > 1) {
                  _this2.running_count = 0;
                  return _this2.runAsync(_this2.callback_next1, _this2.callback_next2);
                }
                _this2.running_count = 0;
                return true;
              }));
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function runAsync(_x) {
        return _runAsync.apply(this, arguments);
      }
      return runAsync;
    }() /* eslint-disable-next-line class-methods-use-this */
  }, {
    key: "run2",
    value: function run2(callback1) {
      var callback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IDLE_FUNCTION;
      return Promise.all(callback1()).then(callback2);
    }

    /* eslint-disable-next-line class-methods-use-this */
  }, {
    key: "runAsync2",
    value: (function () {
      var _runAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(callback1) {
        var callback2,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              callback2 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : IDLE_FUNCTION;
              _context2.t0 = Promise;
              _context2.next = 4;
              return callback1();
            case 4:
              _context2.t1 = _context2.sent;
              return _context2.abrupt("return", _context2.t0.all.call(_context2.t0, _context2.t1).then(callback2));
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function runAsync2(_x2) {
        return _runAsync2.apply(this, arguments);
      }
      return runAsync2;
    }())
  }]);
  return PromiseBunch;
}();

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/memory.js":
/*!**************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/memory.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;
  var that = this;
  this.options = Object.assign({
    // 1024 b * 1024 b == 1048576 b == 1 mb
    thread_stack_size: 0x0100000
  }, this.options);
  ['Uint8Array', 'Int8Array', 'Uint16Array', 'Int16Array', 'Uint32Array', 'Int32Array', 'Uint8Array', 'Int8Array', 'BigUint64Array', 'BigInt64Array', 'Float32Array', 'Float64Array'].forEach(function (typed_array_name) {
    if (self[typed_array_name]) {
      _this[typed_array_name] = /*#__PURE__*/function (_self$typed_array_nam) {
        _inherits(_class, _self$typed_array_nam);
        var _super = _createSuper(_class);
        function _class() {
          var _this2;
          _classCallCheck(this, _class);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          // if (args.length !== 1)
          // {
          // 	throw new Error('wasm-wrapper typed array must be constructed with only 1 argument.');
          // }

          if (args[0] instanceof self.ArrayBuffer || self.SharedArrayBuffer && args[0] instanceof self.SharedArrayBuffer) {
            if (args[0] === that.memory.buffer) {
              _this2 = _super.call.apply(_super, [this].concat(args));
              return _possibleConstructorReturn(_this2);
            }
            throw new Error('wasm-wrapper typed array can not be backed by array buffer other than wasm-wrapper instance memory buffer.');
          }
          var length = 0;
          if (_typeof(args[0]) === 'object') {
            // length = args[0].length;
            length = args[0].length;
          } else {
            length = args[0];
          }
          var byteOffset = that.exports.__malloc(length * self[typed_array_name].BYTES_PER_ELEMENT);
          _this2 = _super.call(this, that.memory.buffer, byteOffset, length);
          if (_typeof(args[0]) === 'object') {
            _this2.set(args[0]);
          }
          _this2.addr = byteOffset;
          return _possibleConstructorReturn(_this2);
        }
        _createClass(_class, [{
          key: "free",
          value: function free() {
            that.exports.__free(this.byteOffset);
          }

          // slice (...args) {}
        }]);
        return _class;
      }(self[typed_array_name]);
    }
  });
  {
    this.mem =
    // TODO: wrap into "cxx" prop.
    // TODO: add "views" props instead of using this.memory_views.
    {
      'bool': {
        kind: 'Uint'
      },
      'char': {
        kind: 'Uint'
      },
      'int': {
        kind: 'Int'
      },
      'short': {
        kind: 'Int'
      },
      'long': {
        kind: 'Int'
      },
      'size_t': {
        kind: 'Uint'
      },
      'addr': {
        kind: 'Uint'
      },
      'uint8_t': {
        kind: 'Uint'
      },
      'int8_t': {
        kind: 'Int'
      },
      'uint16_t': {
        kind: 'Uint'
      },
      'int16_t': {
        kind: 'Int'
      },
      'uint32_t': {
        kind: 'Uint'
      },
      'int32_t': {
        kind: 'Int'
      },
      'uint64_t': {
        kind: 'Uint'
      },
      'int64_t': {
        kind: 'Int'
      },
      'float': {
        kind: 'Float'
      },
      'double': {
        kind: 'Float'
      },
      'long_double': {
        kind: 'Float'
      },
      'c_string': {}
    };
    this.type_names = Object.keys(this.mem);
    this.type_names.forEach(function (type_name, type_name_index) {
      var size = _this.exports.__sizeof(type_name_index);
      var typed_array_constructor_name = "".concat(_this.mem[type_name].kind).concat(size * 8, "Array");
      if (!_this[typed_array_constructor_name]) {
        typed_array_constructor_name = "Big".concat(typed_array_constructor_name);
      }
      Object.assign(_this.mem[type_name], {
        size: size,
        typed_array_constructor: _this[typed_array_constructor_name],
        interp_log: function interp_log(addr) {
          return _this[type_name](addr)[0];
        },
        interp_thread: function interp_thread(addr) {
          return _this[type_name](addr);
        }
      });
    });
    this.mem.bool.interp_log = function (addr) {
      return Boolean(_this.bool(addr)[0]);
    }, this.mem.c_string.interp_log = function (addr) {
      return _this.c_string2(_this.addr(addr)[0]);
    };
    this.mem.c_string.interp_thread = function (addr) {
      return _this.addr(addr);
    };
    this.mem.c_string.interp_arg = function (str) {
      return new _this.mem["char"].typed_array_constructor(_this.constructor.convertDomStringToUint8Array(str));
    };
  }
  {
    this.memory_views = {};
    this.memory_views.UI8 = new this.Uint8Array(this.memory.buffer);
    // this.memory_views.I8 = new this.Int8Array(this.memory.buffer);
    // this.memory_views.UI16 = new this.Uint16Array(this.memory.buffer);
    // this.memory_views.I16 = new this.Int16Array(this.memory.buffer);
    // this.memory_views.UI32 = new this.Uint32Array(this.memory.buffer);
    this.memory_views.I32 = new this.Int32Array(this.memory.buffer);
    // if (this.BigUint64Array) { this.memory_views.UI64 = new this.BigUint64Array(this.memory.buffer); }
    // if (this.BigInt64Array) { this.memory_views.I64 = new this.BigInt64Array(this.memory.buffer); }
    // this.memory_views.F32 = new this.Float32Array(this.memory.buffer);
    // this.memory_views.F64 = new this.Float64Array(this.memory.buffer);
  }
});

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/thread/index.js":
/*!****************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Thread; });
/* harmony import */ var _thread_1_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread.1.worker.js */ "../../renderity/wasm-wrapper/src/threads/thread/thread.1.worker.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var empty_array = [];
var Thread = /*#__PURE__*/function () {
  function Thread(wasm_wrapper, function_name) {
    var _this = this;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : empty_array;
    _classCallCheck(this, Thread);
    this.wasm_wrapper = wasm_wrapper;
    this.stack_addr = this.wasm_wrapper.exports.__malloc(this.wasm_wrapper.options.thread_stack_size);
    this.stack_pointer = this.stack_addr + this.wasm_wrapper.options.thread_stack_size;

    // Should be private?
    this.promise = new Promise(function (resolve) {
      _this.worker = new _thread_1_worker_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      _this.worker.onmessage = resolve;
      var code = wasm_wrapper.code,
        memory = wasm_wrapper.memory,
        imports = wasm_wrapper.imports_thread;

      // for (const key in memory)
      // {
      // 	if (key !== 'buffer')
      // 	{
      // 		delete memory[key];
      // 	}
      // }

      var stack_pointer = _this.stack_pointer;
      _this.worker.postMessage({
        code: code,
        memory: memory,
        imports: imports,
        stack_pointer: stack_pointer,
        function_name: function_name,
        data: data
      });
    });
  }
  _createClass(Thread, [{
    key: "terminate",
    value: function terminate() {
      this.worker.terminate();
      this.wasm_wrapper.exports.__free(this.stack_addr);

      // this.promise = null;
    }
  }, {
    key: "join",
    value: function () {
      var _join = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.promise;
            case 2:
              this.terminate();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function join() {
        return _join.apply(this, arguments);
      }
      return join;
    }()
  }]);
  return Thread;
}();


/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/thread/thread.1.worker.js":
/*!**************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread/thread.1.worker.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "thread.1.worker.worker.worker.js");
}


/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/thread2/index.js":
/*!*****************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread2/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Thread2; });
/* harmony import */ var _thread2_1_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread2.1.worker.js */ "../../renderity/wasm-wrapper/src/threads/thread2/thread2.1.worker.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Thread2 = /*#__PURE__*/function () {
  function Thread2(wasm_wrapper, data) {
    var _this = this;
    _classCallCheck(this, Thread2);
    this.wasm_wrapper = wasm_wrapper;
    this.stack_addr = this.wasm_wrapper.exports.__malloc(this.wasm_wrapper.options.thread_stack_size);
    this.stack_pointer = this.stack_addr + this.wasm_wrapper.options.thread_stack_size;
    this.active = true;
    this.promise = new Promise(function (resolve) {
      _this.worker = new _thread2_1_worker_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

      // TODO: free stack memory when thread terminates automatically.
      _this.worker.onmessage = resolve;
      var code = wasm_wrapper.code,
        memory = wasm_wrapper.memory,
        imports = wasm_wrapper.imports_thread;
      var stack_pointer = _this.stack_pointer;
      _this.worker.postMessage({
        code: code,
        memory: memory,
        imports: imports,
        stack_pointer: stack_pointer,
        data: data
      });
    });
  }
  _createClass(Thread2, [{
    key: "terminate",
    value: function terminate() {
      if (this.active) {
        this.worker.terminate();
        this.wasm_wrapper.exports.__free(this.stack_addr);
        this.active = false;
      }
    }
  }]);
  return Thread2;
}();


/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/thread2/thread2.1.worker.js":
/*!****************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread2/thread2.1.worker.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "thread2.1.worker.worker.worker.js");
}


/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/thread3/index.js":
/*!*****************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread3/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Thread; });
/* harmony import */ var _thread3_1_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread3.1.worker.js */ "../../renderity/wasm-wrapper/src/threads/thread3/thread3.1.worker.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Thread = /*#__PURE__*/function () {
  // TODO: add stack_size option.
  function Thread(wasm_wrapper) {
    _classCallCheck(this, Thread);
    this.wasm_wrapper = wasm_wrapper;
    this.stack_addr = this.wasm_wrapper.exports.__malloc(this.wasm_wrapper.options.thread_stack_size);
    this.stack_pointer = this.stack_addr + this.wasm_wrapper.options.thread_stack_size;
    this.worker = new _thread3_1_worker_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  _createClass(Thread, [{
    key: "init",
    value: function init() {
      var _this = this;
      var promise = new Promise(function (resolve) {
        _this.worker.onmessage = resolve;
        var _this$wasm_wrapper = _this.wasm_wrapper,
          code = _this$wasm_wrapper.code,
          memory = _this$wasm_wrapper.memory,
          imports = _this$wasm_wrapper.imports_thread;
        var stack_pointer = _this.stack_pointer;
        _this.worker.postMessage({
          code: code,
          memory: memory,
          imports: imports,
          stack_pointer: stack_pointer
        });
      });
      return promise;
    }
  }, {
    key: "work",
    value: function work(function_name) {
      var _this2 = this;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var promise = new Promise(function (resolve) {
        _this2.worker.onmessage = resolve;
        _this2.worker.postMessage({
          function_name: function_name,
          data: data
        });
      });
      return promise;
    }

    // TODO.
    // work2 (function_list)
    // {
    // 	const promise =
    // 		new Promise
    // 		(
    // 			resolve =>
    // 			{
    // 				this.worker.onmessage = resolve;

    // 				this.worker.postMessage({ work_list });
    // 			},
    // 		);

    // 	return promise;
    // }
  }, {
    key: "terminate",
    value: function terminate() {
      this.worker.terminate();
      this.wasm_wrapper.exports.__free(this.stack_addr);

      // this.promise = null;
    }
  }]);
  return Thread;
}();


/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/thread3/thread3.1.worker.js":
/*!****************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread3/thread3.1.worker.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "thread3.1.worker.worker.worker.js");
}


/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/thread4/index.js":
/*!*****************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread4/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Thread; });
/* harmony import */ var _thread3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thread3 */ "../../renderity/wasm-wrapper/src/threads/thread3/index.js");
/* harmony import */ var _thread4_1_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thread4.1.worker.js */ "../../renderity/wasm-wrapper/src/threads/thread4/thread4.1.worker.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



// TODO: remove class name?
var Thread = /*#__PURE__*/function (_Thread) {
  _inherits(Thread, _Thread);
  var _super = _createSuper(Thread);
  // TODO: add stack_size option.
  function Thread(wasm_wrapper) {
    var _this;
    _classCallCheck(this, Thread);
    _this = _super.call(this, wasm_wrapper);
    _this.exports = {};
    Object.keys(wasm_wrapper.exports).forEach(function (export_name) {
      if (typeof wasm_wrapper.exports[export_name] === 'function' && !export_name.startsWith('__')) {
        _this.exports[export_name] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _this.work(export_name, args);
        };
      }
    });
    return _this;
  }
  return _createClass(Thread);
}(_thread3__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/thread4/thread4.1.worker.js":
/*!****************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread4/thread4.1.worker.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Worker_fn; });
function Worker_fn() {
  return new Worker(__webpack_require__.p + "thread4.1.worker.worker.worker.js");
}


/***/ }),

/***/ "../../renderity/wasm-wrapper/src/wasm-wrapper.js":
/*!********************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/wasm-wrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memory */ "../../renderity/wasm-wrapper/src/memory.js");
/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports */ "../../renderity/wasm-wrapper/src/imports.js");
/* harmony import */ var _cxx_specific__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cxx-specific */ "../../renderity/wasm-wrapper/src/cxx-specific.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// https://webassembly.org
// https://webassembly.github.io/spec
// https://github.com/WebAssembly
// https://developer.mozilla.org/en-US/docs/WebAssembly
// https://wasi.dev
// https://lld.llvm.org/WebAssembly.html
// https://github.com/bytecodealliance/wasmtime/blob/main/docs/WASI-documents.md
// https://docs.wasmtime.dev/

/* eslint-disable */

/**
 * Using TypedArray.subarray() is preferred
 * when accessing to data
 * to avoid extra memory allocation.
 *
 * Strange std::string behavior:
 * if std::string data length <=11, std::string object address is the same with its data;
 * if >11, std::string object name stores address of beginning of the data.
 * So in second case one can use WasmWrapper::c_string method to get string bytes.
 * Maybe it's not related to data length, but to dynamic memory allocation.
 *
 *
 *
 * If memory is shared then memory growing is not allowed
 * and maximum memory size is specified at compilation.
 *
 *
 *
 * Passing argument by reference works as passing by pointer.
 * So, functions with reference parameters expect address instead of value.
 *
 *
 *
 * TODO: determination capabiity of what wasm memory type is being used.
 */

// Webpack arraybuffer-loader is required.
// import test_simd_wasm_buffer from './test-simd/build/clang-wasm32/output/wasm/test-simd.wasm';




var __CODE_TYPE_BYTECODE__ = 0;
var __CODE_TYPE_FUNCTION__ = 1;
var IDLE_FUNCTION = function IDLE_FUNCTION() {
  return 0;
};
var DEBUG_LOG = console.log.bind(console);
// const DEBUG_LOG = (...content) => console.log(...content.map(elm => `%c${ elm }`), 'background-color: #00858A; padding: 2px;');
var ERROR_LOG = function ERROR_LOG(content) {
  return console.log("%c".concat(content), 'background-color: red; padding: 2px;');
};
var MISSED_IMPORT_FUNCTION_LOG = ERROR_LOG;
var DEBUG_INFO = [];
var DEBUG_INFO_PUSH = function DEBUG_INFO_PUSH(content) {
  return DEBUG_INFO.push(content);
};
var DEBUG_LABEL_LOG = function DEBUG_LABEL_LOG(thread_id) {
  DEBUG_INFO.forEach(function (label) {
    return console.log("%c".concat(thread_id, ": ").concat(label), 'background-color: #00858A; padding: 2px;');
  });
  DEBUG_INFO.length = 0;
};
DEBUG_INFO_PUSH("WASM CONCURRENCY: ".concat(self.navigator.hardwareConcurrency));
var WasmWrapper = /*#__PURE__*/function () {
  function WasmWrapper() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, WasmWrapper);
    self.__wasm_wrapper__ = this;
    this.options = options;
    var wasm_wrapper = this;
    var ThreadPromiseBunch = /*#__PURE__*/function () {
      function ThreadPromiseBunch() {
        _classCallCheck(this, ThreadPromiseBunch);
        // TODO: rename to run_count.
        this.running_count = 0;
      }
      _createClass(ThreadPromiseBunch, [{
        key: "run",
        value: function run(callback1) {
          var _this = this;
          var callback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IDLE_FUNCTION;
          ++this.running_count;
          if (this.running_count > 1) {
            this.callback_next1 = callback1;
            this.callback_next2 = callback2;
            return false;
          }
          wasm_wrapper.exports.__initHeapPointer();
          return Promise.all(callback1()).then(function (resolves) {
            wasm_wrapper.exports.__resetHeapPointer();
            callback2(resolves);
            if (_this.running_count > 1) {
              _this.running_count = 0;
              return _this.run(_this.callback_next1, _this.callback_next2);
            }
            _this.running_count = 0;
            return true;
          });
        }
      }, {
        key: "runLog",
        value: function runLog(callback1) {
          var _this2 = this;
          var callback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IDLE_FUNCTION;
          ++this.running_count;
          if (this.running_count > 1) {
            this.callback_next1 = callback1;
            this.callback_next2 = callback2;
            return false;
          }
          wasm_wrapper.exports.__initHeapPointer();
          console.log('ThreadPromiseBunch start __heap_pointer', wasm_wrapper.addr(wasm_wrapper.globals.__heap_pointer)[0]);
          return Promise.all(callback1()).then(function (resolves) {
            console.log('ThreadPromiseBunch end __heap_pointer', wasm_wrapper.addr(wasm_wrapper.globals.__heap_pointer)[0]);
            wasm_wrapper.exports.__resetHeapPointer();
            callback2(resolves);
            if (_this2.running_count > 1) {
              _this2.running_count = 0;
              return _this2.run(_this2.callback_next1, _this2.callback_next2);
            }
            _this2.running_count = 0;
            return true;
          });
        }
      }, {
        key: "runAsync",
        value: function () {
          var _runAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback1) {
            var _this3 = this;
            var callback2,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  callback2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : IDLE_FUNCTION;
                  ++this.running_count;
                  if (!(this.running_count > 1)) {
                    _context.next = 6;
                    break;
                  }
                  this.callback_next1 = callback1;
                  this.callback_next2 = callback2;
                  return _context.abrupt("return", false);
                case 6:
                  wasm_wrapper.exports.__initHeapPointer();
                  _context.t0 = Promise;
                  _context.next = 10;
                  return callback1();
                case 10:
                  _context.t1 = _context.sent;
                  return _context.abrupt("return", _context.t0.all.call(_context.t0, _context.t1).then(function (resolves) {
                    wasm_wrapper.exports.__resetHeapPointer();
                    callback2(resolves);
                    if (_this3.running_count > 1) {
                      _this3.running_count = 0;
                      return _this3.runAsync(_this3.callback_next1, _this3.callback_next2);
                    }
                    _this3.running_count = 0;
                    return true;
                  }));
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function runAsync(_x) {
            return _runAsync.apply(this, arguments);
          }
          return runAsync;
        }()
      }, {
        key: "run2",
        value: function run2(callback1) {
          var callback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IDLE_FUNCTION;
          wasm_wrapper.exports.__initHeapPointer();
          return Promise.all(callback1()).then(function () {
            wasm_wrapper.exports.__resetHeapPointer();
            callback2();
          });
        }
      }, {
        key: "runAsync2",
        value: function () {
          var _runAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(callback1) {
            var callback2,
              _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  callback2 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : IDLE_FUNCTION;
                  wasm_wrapper.exports.__initHeapPointer();
                  _context2.t0 = Promise;
                  _context2.next = 5;
                  return callback1();
                case 5:
                  _context2.t1 = _context2.sent;
                  return _context2.abrupt("return", _context2.t0.all.call(_context2.t0, _context2.t1).then(function () {
                    wasm_wrapper.exports.__resetHeapPointer();
                    callback2();
                  }));
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function runAsync2(_x2) {
            return _runAsync2.apply(this, arguments);
          }
          return runAsync2;
        }()
      }]);
      return ThreadPromiseBunch;
    }();
    this.ThreadPromiseBunch = ThreadPromiseBunch;

    // configureMemory(this, options);
  }
  _createClass(WasmWrapper, [{
    key: "function",
    value: function _function(addr) {
      return this.exports.__indirect_function_table.get(addr);
    }
  }, {
    key: "async",
    value: function () {
      var _async = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_function) {
        var _len,
          args,
          _key,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              for (_len = _args3.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = _args3[_key];
              }
              this.async_args = args;
              (this.async_func = _function).apply(void 0, args);
              this.exports.asyncify_stop_unwind();
              _context3.next = 6;
              return this.async_promise;
            case 6:
              this.async_count = 0;
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function async(_x3) {
        return _async.apply(this, arguments);
      }
      return async;
    }()
  }, {
    key: "instantiate",
    value: function () {
      var _instantiate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref) {
        var _this4 = this;
        var wasm_module_imports, imports_lib, imports_custom, wasm_module, code, debug, imports_aggregate, exports, wasm_module_instance;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              wasm_module_imports = _ref.wasm_module_imports, imports_lib = _ref.imports_lib, imports_custom = _ref.imports_custom, wasm_module = _ref.wasm_module, code = _ref.code, debug = _ref.debug;
              // Object for passing to threads.
              this.imports_thread = {
                env: {}
              };
              Object.keys(imports_custom).forEach(function (module) {
                Object.keys(imports_custom[module]).forEach(function (import_custom) {
                  if (!_this4.imports_thread[module]) {
                    _this4.imports_thread[module] = {};
                  }
                  _this4.imports_thread[module][import_custom] = 0;

                  // TODO: use "|=" operator ?
                  // If (imports_custom[module][import_custom] === 0) then make it IDLE_FUNCTION.
                  imports_custom[module][import_custom] = imports_custom[module][import_custom] || IDLE_FUNCTION;
                });
              });
              imports_aggregate = {};
              Object.assign(imports_aggregate, imports_custom);
              Object.assign(imports_aggregate.env, imports_lib);

              // Imported memory
              if (this.memory) {
                imports_aggregate.env.memory = this.memory;
              }
              wasm_module_imports.forEach(function (wasm_module_import) {
                if (!imports_aggregate[wasm_module_import.module]) {
                  imports_aggregate[wasm_module_import.module] = {};
                }
                if (!imports_aggregate[wasm_module_import.module][wasm_module_import.name]) {
                  if (debug) {
                    DEBUG_LOG("Missed ".concat(wasm_module_import.module, " import:"), wasm_module_import.name);
                  }
                  imports_aggregate[wasm_module_import.module][wasm_module_import.name] = IDLE_FUNCTION;
                  // imports_aggregate[wasm_module_import.module][wasm_module_import.name] = () => { MISSED_IMPORT_FUNCTION_LOG(`Missed import function called: module "${ wasm_module_import.module }", function "${ wasm_module_import.name }"`); };

                  // if (wasm_module_import.name !== 'clock_time_get')
                  // {
                  // 	imports_aggregate[wasm_module_import.module][wasm_module_import.name] = () => { MISSED_IMPORT_FUNCTION_LOG(`Missed import function called: module "${ wasm_module_import.module }", function "${ wasm_module_import.name }"`); };
                  // }

                  // if (wasm_module_import.name === 'fd_write')
                  // {
                  // 	imports_aggregate[wasm_module_import.module][wasm_module_import.name] = (...args) => { MISSED_IMPORT_FUNCTION_LOG(`Missed import function called: module "${ wasm_module_import.module }", function "${ wasm_module_import.name }"`); LOG(args.map(arg => this.CString2(arg))); };
                  // }
                }
              });
              exports = null;
              if (!wasm_module) {
                _context4.next = 17;
                break;
              }
              _context4.next = 12;
              return WebAssembly.instantiate
              // await WebAssembly.instantiateStreaming
              (wasm_module, imports_aggregate);
            case 12:
              wasm_module_instance = _context4.sent;
              if (debug) {
                DEBUG_LOG(wasm_module_instance);
              }

              // this.instance = wasm_module_instance;
              exports = wasm_module_instance.exports;
              _context4.next = 18;
              break;
            case 17:
              // imports_aggregate.wasi_snapshot_preview1 = {};
              // imports_aggregate.wasi_snapshot_preview1.fd_write = (...args) => LOG(args.map(arg => this.c_string2(arg)));

              exports = code(imports_aggregate);
            case 18:
              // Exported memory
              if (!this.memory) {
                this.memory = exports.memory;
              }
              DEBUG_INFO_PUSH("WASM MEMORY: ".concat(this.memory.buffer.byteLength / 65536, " pages (").concat(this.memory.buffer.byteLength, " bytes)"));
              return _context4.abrupt("return", exports);
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function instantiate(_x4) {
        return _instantiate.apply(this, arguments);
      }
      return instantiate;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref2) {
        var _this5 = this;
        var code, _ref2$memory, memory, _ref2$memory_params, memory_params, _ref2$imports, imports_custom, _ref2$stack_pointer, stack_pointer, _ref2$configureMemory, configureMemory, _ref2$forceLocalMemor, forceLocalMemory, _ref2$initGlobals, initGlobals, _ref2$demangleCxxName, demangleCxxNames, _ref2$debug, debug, _ref2$findOptimalMemo, findOptimalMemorySize, code_type, code_temp, imports_lib, wasm_module, wasm_module_imports, _wasm_module_imports$, _wasm_module_imports$2, imported_memory, shared_memory_allowed, memory_desc, allocate, size, _wasm_module_imports, _this$demangleCxxName, exports_demangled, exports_demangled_reduced;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              code = _ref2.code, _ref2$memory = _ref2.memory, memory = _ref2$memory === void 0 ? null : _ref2$memory, _ref2$memory_params = _ref2.memory_params, memory_params = _ref2$memory_params === void 0 ? {
                minimum: 2,
                initial: 2,
                maximum: 65536,
                shared: true
              } : _ref2$memory_params, _ref2$imports = _ref2.imports, imports_custom = _ref2$imports === void 0 ? {
                env: {}
              } : _ref2$imports, _ref2$stack_pointer = _ref2.stack_pointer, stack_pointer = _ref2$stack_pointer === void 0 ? undefined : _ref2$stack_pointer, _ref2$configureMemory = _ref2.configureMemory, configureMemory = _ref2$configureMemory === void 0 ? true : _ref2$configureMemory, _ref2$forceLocalMemor = _ref2.forceLocalMemory, forceLocalMemory = _ref2$forceLocalMemor === void 0 ? false : _ref2$forceLocalMemor, _ref2$initGlobals = _ref2.initGlobals, initGlobals = _ref2$initGlobals === void 0 ? true : _ref2$initGlobals, _ref2$demangleCxxName = _ref2.demangleCxxNames, demangleCxxNames = _ref2$demangleCxxName === void 0 ? false : _ref2$demangleCxxName, _ref2$debug = _ref2.debug, debug = _ref2$debug === void 0 ? false : _ref2$debug, _ref2$findOptimalMemo = _ref2.findOptimalMemorySize, findOptimalMemorySize = _ref2$findOptimalMemo === void 0 ? true : _ref2$findOptimalMemo;
              self.__mem = function () {
                return console.log(_this5.memory);
              };
              code_type = null; // Code for passing to other WASM instances (e.g. threads).
              this.code = code;
              if (typeof code === 'string') {
                if (code.startsWith('function')) {
                  code_type = __CODE_TYPE_FUNCTION__;
                  code = new Function(code);
                  DEBUG_INFO_PUSH("WASM CODE: string function -> ".concat(code.constructor.name));
                }
                // base64
                else {
                  code = Uint8Array.from(atob(code), function (c) {
                    return c.charCodeAt(0);
                  });

                  // TODO: Make code shared (if can) to speed up passing it to workers. DONE?
                  if (self.SharedArrayBuffer) {
                    code_temp = code;
                    code = new Uint8Array(new SharedArrayBuffer(code.length));
                    code.set(code_temp);
                  }
                  this.code = code;
                  code_type = __CODE_TYPE_BYTECODE__;
                  DEBUG_INFO_PUSH("WASM CODE: string base64 -> ".concat(code.constructor.name));
                }
              } else if (typeof code === 'function') {
                code_type = __CODE_TYPE_FUNCTION__;
                this.code = code.toString();
                DEBUG_INFO_PUSH("WASM CODE: function");
              }
              // Code is an Uint8Array backed (SharedArrayBuffer optionally) or ArrayBuffer or SharedArrayBuffer.
              // UPD. SharedArrayBuffer can not be used as source for WebAssembly module, only for Uint8Array
              // backed by SharedArrayBuffer.
              else {
                code_type = __CODE_TYPE_BYTECODE__;
                DEBUG_INFO_PUSH("WASM CODE: ".concat(code.constructor.name));
              }
              DEBUG_INFO_PUSH("WASM CODE: ".concat(code_type === __CODE_TYPE_BYTECODE__ ? 'BYTECODE' : 'FUNCTION'));

              // DEBUG_LABEL_LOG();
              imports_lib = Object(_imports__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
              if (!(code_type === __CODE_TYPE_BYTECODE__)) {
                _context5.next = 20;
                break;
              }
              _context5.next = 10;
              return WebAssembly.compile(code);
            case 10:
              wasm_module = _context5.sent;
              if (debug) {
                DEBUG_LOG(wasm_module);
              }
              wasm_module_imports = WebAssembly.Module.imports(wasm_module); // const wasm_module_exports = WebAssembly.Module.exports(wasm_module);
              this.memory = null;

              // Memory comes from WASM main worker instance to thread instance.
              // is always imported and shared.
              if (memory) {
                this.memory = memory;
                DEBUG_INFO_PUSH('WASM MEMORY: IMPORTED');
                DEBUG_INFO_PUSH('WASM MEMORY: SHARED');
              } else {
                _wasm_module_imports$ = wasm_module_imports.filter(function (import_desc) {
                  return import_desc.kind === 'memory';
                }), _wasm_module_imports$2 = _slicedToArray(_wasm_module_imports$, 1), imported_memory = _wasm_module_imports$2[0];
                shared_memory_allowed = Boolean(self.SharedArrayBuffer) && !forceLocalMemory;
                if (imported_memory) {
                  DEBUG_INFO_PUSH('WASM MEMORY: IMPORTED');
                  memory_desc = null; // chrome://flags#enable-experimental-webassembly-features must be enabled
                  // to access "type" property of "imported_memory". It contains memory
                  // type and size info produced by the linker (aka defined in WebAssembly module).
                  // "--import-memory" linker flag specifies whether memory is imported to WebAssembly module.
                  // "--shared-memory" linker flag specifies whether memory is shared between WebAssembly instances.
                  // "--max-memory=N" linker flag specifies maximum size of memory for WebAssembly instance.
                  // The advantqge of this is that we don't need to provide "memory_params"
                  // to crate the memory object. Memory object is created automatically
                  // after reading the "imported_memory.type".
                  if (imported_memory.type) {
                    memory_desc = {
                      // Is --initial-memory flag ignored if --shared-memory flag is defined?
                      // UPD: NO.
                      // initial: imported_memory.type.maximum || imported_memory.type.minimum,
                      initial: imported_memory.type.minimum,
                      maximum: imported_memory.type.maximum || imported_memory.type.minimum,
                      shared: imported_memory.type.shared && shared_memory_allowed
                    };
                  }
                  // Parameters must match values produced by the linker (aka defined in WebAssembly module).
                  else {
                    memory_desc = {
                      // 65536 pages == 4gb, maximum possible memory size for 32-bit WebAssembly instance.
                      initial: memory_params.initial,
                      maximum: memory_params.maximum,
                      // Must match "--max-memory=N" flag.
                      // shared, // Must match "--shared-memory" flag.
                      shared: memory_params.shared && shared_memory_allowed
                    };
                  }
                  this.memory = new WebAssembly.Memory(memory_desc);
                  DEBUG_INFO_PUSH("WASM MEMORY: ".concat(memory_desc.shared ? 'SHARED' : 'NOT SHARED'));
                }
                // TODO: add the case when memory is imported but can be created with arbitrary parameters.
                // Is this case possible? Meybe possible only when memory is not shared?
                else {
                  DEBUG_INFO_PUSH('WASM MEMORY: EXPORTED');
                }
              }
              _context5.next = 17;
              return this.instantiate({
                wasm_module_imports: wasm_module_imports,
                imports_lib: imports_lib,
                imports_custom: imports_custom,
                wasm_module: wasm_module,
                debug: debug
              });
            case 17:
              this.exports = _context5.sent;
              _context5.next = 41;
              break;
            case 20:
              this.memory = null;
              if (!memory) {
                _context5.next = 25;
                break;
              }
              this.memory = memory;
              _context5.next = 37;
              break;
            case 25:
              // this.memory = { buffer: new self.ArrayBuffer(size) };
              allocate = function allocate(size) {
                var result = true;
                try {
                  _this5.memory = {
                    buffer: new self.ArrayBuffer(size)
                  };
                } catch (evt) {
                  console.log(evt, size);
                  result = false;
                }
                return result;
              };
              if (!findOptimalMemorySize) {
                _context5.next = 36;
                break;
              }
              size = memory_params.initial;
            case 28:
              if (!allocate(size)) {
                _context5.next = 31;
                break;
              }
              console.log(size, 'bytes allocated');
              return _context5.abrupt("break", 34);
            case 31:
              size /= 2;
              _context5.next = 28;
              break;
            case 34:
              _context5.next = 37;
              break;
            case 36:
              allocate(memory_params.initial);
            case 37:
              // TODO: Find better solution to get import modules used.
              // Now it is hardcoded.
              _wasm_module_imports = [_defineProperty({
                module: "env"
              }, "module", "wasi_snapshot_preview1")];
              _context5.next = 40;
              return this.instantiate({
                wasm_module_imports: _wasm_module_imports,
                imports_lib: imports_lib,
                imports_custom: imports_custom,
                code: code,
                debug: debug
              });
            case 40:
              this.exports = _context5.sent;
            case 41:
              if (configureMemory) {
                this.configureMemory();

                // DEBUG_INFO_PUSH(`WASM MEMORY: ${ this.memory.buffer.byteLength / 65536 } pages (${ this.memory.buffer.byteLength } bytes)`);
              }

              if (this.exports.__main) {
                this.__thread_id = this.exports.__main(stack_pointer);
                if (debug) {
                  DEBUG_LABEL_LOG(this.__thread_id);
                }
              }
              if (initGlobals) {
                this.globals = this.initGlobals();
                if (debug) {
                  DEBUG_LOG(this.globals);
                }
              }
              if (demangleCxxNames) {
                _this$demangleCxxName = this.demangleCxxNames(), exports_demangled = _this$demangleCxxName.exports_demangled, exports_demangled_reduced = _this$demangleCxxName.exports_demangled_reduced;
                Object.assign(this, {
                  exports_demangled: exports_demangled,
                  exports_demangled_reduced: exports_demangled_reduced
                });
                if (debug) {
                  DEBUG_LOG(this.exports_demangled);
                  DEBUG_LOG(this.exports_demangled_reduced);
                }
              }

              // this.__heap_pointer_initial = this.addr(this.globals.__heap_pointer)[0];
            case 45:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function init(_x5) {
        return _init.apply(this, arguments);
      }
      return init;
    }() // resetHeapPointer ()
    // {
    // 	this.exports.__setHeapPointer(this.__heap_pointer_initial);
    // }
  }, {
    key: "initGlobals",
    value: function initGlobals() {
      var _this6 = this;
      var globals = {};
      var prefix_length = '__EXPORT_ADDR__'.length;
      Object.keys(this.exports).forEach(function (export_name) {
        if (export_name.startsWith('__EXPORT_ADDR__')) {
          globals[export_name.slice(prefix_length)] = _this6.exports[export_name]();
        }
      });
      return globals;
    }
  }, {
    key: "getNewThread",
    value: function getNewThread() {
      return new WasmWrapper.Thread(this);
    }
  }, {
    key: "getNewThread2",
    value: function getNewThread2() {
      return new WasmWrapper.Thread2(this);
    }
  }, {
    key: "getNewThread3",
    value: function getNewThread3() {
      return new WasmWrapper.Thread3(this);
    }
  }, {
    key: "getNewThread4",
    value: function getNewThread4() {
      return new WasmWrapper.Thread4(this);
    }
  }, {
    key: "initThreads",
    value: function () {
      var _initThreads = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(thread_count) {
        var _this7 = this;
        var threads;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              threads = new Array(thread_count).fill(null).map(function () {
                return new WasmWrapper.Thread3(_this7);
              });
              _context6.next = 3;
              return Promise.all(threads.map(function (thread) {
                return thread.init();
              }));
            case 3:
              return _context6.abrupt("return", threads);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function initThreads(_x6) {
        return _initThreads.apply(this, arguments);
      }
      return initThreads;
    }()
  }, {
    key: "terminateThreads",
    value: function terminateThreads(threads) {
      threads.reverse().forEach(function (thread) {
        return thread.terminate();
      });
    }
  }], [{
    key: "convertUint8ArrayToDomString",
    value:
    // static convertUint8ArrayToDomString (uint8_array)
    // {
    // 	return WasmWrapper.text_decoder.decode(uint8_array);
    // }

    // Version for shared buffer backed array.
    // Decoding views of shared buffer is not allowed.
    function convertUint8ArrayToDomString(uint8_array) {
      // return WasmWrapper.text_decoder.decode(uint8_array.slice());
      return WasmWrapper.text_decoder.decode(new Uint8Array(uint8_array));
    }
  }, {
    key: "convertDomStringToUint8Array",
    value: function convertDomStringToUint8Array(text) {
      return WasmWrapper.text_encoder.encode(text);
    }
  }, {
    key: "testSimd",
    value: function () {
      var _testSimd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var result, wasm_buffer, wasm_module, instance;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              result = false;
              _context7.prev = 1;
              _context7.next = 4;
              return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./test-simd/build/test.wasm */ "../../renderity/wasm-wrapper/src/test-simd/build/test.wasm"));
            case 4:
              wasm_buffer = _context7.sent["default"];
              _context7.next = 7;
              return WebAssembly.compile(wasm_buffer);
            case 7:
              wasm_module = _context7.sent;
              _context7.next = 10;
              return WebAssembly.instantiate(wasm_module);
            case 10:
              instance = _context7.sent;
              // // Webpack since version 4 has embedded WASM parser.
              // // MIME type "application/wasm" must be defined for ".wasm" extension on server.
              // // TODO: use another type of importing ?
              // await import('./test-simd/build/clang-wasm32/output/wasm/test-simd.wasm');

              result = true;
              _context7.next = 17;
              break;
            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](1);
              ERROR_LOG("WASM SIMD TEST FAILED: ".concat(_context7.t0));
            case 17:
              DEBUG_INFO_PUSH("WASM SIMD: ".concat(result ? 'ON' : 'OFF'));
              return _context7.abrupt("return", result);
            case 19:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[1, 14]]);
      }));
      function testSimd() {
        return _testSimd.apply(this, arguments);
      }
      return testSimd;
    }()
  }, {
    key: "testAtomic",
    value: function () {
      var _testAtomic = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var result, wasm_buffer, wasm_module, instance;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              result = false;
              _context8.prev = 1;
              _context8.next = 4;
              return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./test-atomic/build/test.wasm */ "../../renderity/wasm-wrapper/src/test-atomic/build/test.wasm"));
            case 4:
              wasm_buffer = _context8.sent["default"];
              _context8.next = 7;
              return WebAssembly.compile(wasm_buffer);
            case 7:
              wasm_module = _context8.sent;
              _context8.next = 10;
              return WebAssembly.instantiate(wasm_module);
            case 10:
              instance = _context8.sent;
              result = true;
              _context8.next = 17;
              break;
            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](1);
              ERROR_LOG("WASM ATOMIC TEST FAILED: ".concat(_context8.t0));
            case 17:
              DEBUG_INFO_PUSH("WASM ATOMIC: ".concat(result ? 'ON' : 'OFF'));
              return _context8.abrupt("return", result);
            case 19:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[1, 14]]);
      }));
      function testAtomic() {
        return _testAtomic.apply(this, arguments);
      }
      return testAtomic;
    }()
  }]);
  return WasmWrapper;
}();
_defineProperty(WasmWrapper, "text_decoder", new TextDecoder('utf-8'));
_defineProperty(WasmWrapper, "text_encoder", new TextEncoder());
WasmWrapper.prototype.configureMemory = _memory__WEBPACK_IMPORTED_MODULE_0__["default"];
Object.assign(WasmWrapper.prototype, _cxx_specific__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (WasmWrapper);

/***/ })

});
//# sourceMappingURL=0.worker.js.map