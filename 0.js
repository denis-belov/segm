(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../renderity/wasm-wrapper/src/index.js":
/*!*************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/index.js ***!
  \*************************************************************/
/*! exports provided: Thread, Thread2, Thread3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thread", function() { return Thread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thread2", function() { return Thread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thread3", function() { return Thread3; });
/* harmony import */ var _wasm_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm-wrapper */ "../../renderity/wasm-wrapper/src/wasm-wrapper.js");
/* harmony import */ var _threads_thread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threads/thread */ "../../renderity/wasm-wrapper/src/threads/thread/index.js");
/* harmony import */ var _threads_thread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./threads/thread2 */ "../../renderity/wasm-wrapper/src/threads/thread2/index.js");
/* harmony import */ var _threads_thread3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./threads/thread3 */ "../../renderity/wasm-wrapper/src/threads/thread3/index.js");




Object.assign(_wasm_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"], {
  Thread: _threads_thread__WEBPACK_IMPORTED_MODULE_1__["default"],
  Thread2: _threads_thread2__WEBPACK_IMPORTED_MODULE_2__["default"],
  Thread3: _threads_thread3__WEBPACK_IMPORTED_MODULE_3__["default"]
});
var Thread = _threads_thread__WEBPACK_IMPORTED_MODULE_1__["default"];
var Thread2 = _threads_thread2__WEBPACK_IMPORTED_MODULE_2__["default"];
var Thread3 = _threads_thread3__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_wasm_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/threads/common/call.js":
/*!***************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/threads/common/call.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var _call = function _call(wasm, message_data) {
  if (message_data.js_loop) {
    setInterval.apply(void 0, [wasm.exports[message_data.function_name], 0].concat(_toConsumableArray(message_data.data)));
  } else {
    var _wasm$exports;
    (_wasm$exports = wasm.exports)[message_data.function_name].apply(_wasm$exports, _toConsumableArray(message_data.data));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (wasm, message_data) {
  if (message_data.try_wrap) {
    try {
      _call(wasm, message_data);
    } catch (evt) {
      console.log(evt);
    }
  } else {
    _call(wasm, message_data);
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var empty_array = [];
var Thread = /*#__PURE__*/function () {
  function Thread(_ref) {
    var _this = this;
    var wasm_wrapper = _ref.wasm_wrapper,
      function_name = _ref.function_name,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? empty_array : _ref$data,
      _ref$js_loop = _ref.js_loop,
      js_loop = _ref$js_loop === void 0 ? false : _ref$js_loop,
      _ref$freeWorkedMemory = _ref.freeWorkedMemory,
      freeWorkedMemory = _ref$freeWorkedMemory === void 0 ? false : _ref$freeWorkedMemory,
      _ref$try_wrap = _ref.try_wrap,
      try_wrap = _ref$try_wrap === void 0 ? false : _ref$try_wrap;
    _classCallCheck(this, Thread);
    this.wasm_wrapper = wasm_wrapper;
    this.stack_addr = this.wasm_wrapper.exports.RDTY_WASM_WRAPPER_malloc(this.wasm_wrapper.options.thread_stack_size);
    this.stack_pointer = this.stack_addr + this.wasm_wrapper.options.thread_stack_size;

    // Should be private?
    this.promise = new Promise(function (resolve) {
      _this.worker = new _thread_1_worker_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      _this.worker.onmessage = resolve;
      var code = wasm_wrapper.code,
        memory = wasm_wrapper.memory,
        imports = wasm_wrapper.imports;

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
        data: data,
        try_wrap: try_wrap,
        js_loop: js_loop,
        freeWorkedMemory: freeWorkedMemory
      });
    });
  }
  _createClass(Thread, [{
    key: "terminate",
    value: function terminate() {
      this.worker.terminate();
      this.wasm_wrapper.exports.RDTY_WASM_WRAPPER_free(this.stack_addr);

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wasm-wrapper */ "../../renderity/wasm-wrapper/src/wasm-wrapper.js");
/* harmony import */ var _common_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/call */ "../../renderity/wasm-wrapper/src/threads/common/call.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var wasm = new _wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]();
onmessage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _context.next = 3;
          return wasm.init(data);
        case 3:
          Object(_common_call__WEBPACK_IMPORTED_MODULE_2__["default"])(wasm, data);
          postMessage(true);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function onmessage(_x) {
    return _ref2.apply(this, arguments);
  };
}();

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
    this.stack_addr = this.wasm_wrapper.exports.RDTY_WASM_WRAPPER_malloc(this.wasm_wrapper.options.thread_stack_size);
    this.stack_pointer = this.stack_addr + this.wasm_wrapper.options.thread_stack_size;
    this.active = true;
    this.promise = new Promise(function (resolve) {
      _this.worker = new _thread2_1_worker_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

      // TODO: free stack memory when thread terminates automatically.
      _this.worker.onmessage = resolve;
      var code = wasm_wrapper.code,
        memory = wasm_wrapper.memory,
        imports = wasm_wrapper.imports;
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
        this.wasm_wrapper.exports.RDTY_WASM_WRAPPER_free(this.stack_addr);
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wasm-wrapper */ "../../renderity/wasm-wrapper/src/wasm-wrapper.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var wasm = new _wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]();
onmessage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var data, _data$data, function_addr, thread_types_addr, thread_values_addr, _function, arg_types, args, any_type_size, i;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          _data$data = _slicedToArray(data.data, 3), function_addr = _data$data[0], thread_types_addr = _data$data[1], thread_values_addr = _data$data[2];
          _context.next = 4;
          return wasm.init(data);
        case 4:
          _function = wasm.Function(function_addr);
          arg_types = wasm.Size(thread_types_addr, _function.length);
          args = new Array(_function.length);
          any_type_size = wasm.Size(wasm.exports.RDTY_WASM_WRAPPER_ANYVALUE_SIZE)[0];
          for (i = 0; i < _function.length; ++i) {
            args[i] = wasm.interp[arg_types[i]](thread_values_addr + any_type_size * i)[0];
          }
          _function.apply(void 0, args);
          postMessage(true);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function onmessage(_x) {
    return _ref2.apply(this, arguments);
  };
}();

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Thread = /*#__PURE__*/function () {
  function Thread(wasm_wrapper) {
    _classCallCheck(this, Thread);
    this.wasm_wrapper = wasm_wrapper;
    this.stack_addr = this.wasm_wrapper.exports.RDTY_WASM_WRAPPER_malloc(this.wasm_wrapper.options.thread_stack_size);
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
          imports = _this$wasm_wrapper.imports;
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

    // options:
    // try_wrap,
    // js_loop,
    // freeWorkedMemory,
  }, {
    key: "work",
    value: function work(function_name) {
      var _this2 = this;
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var promise = new Promise(function (resolve) {
        _this2.worker.onmessage = resolve;
        _this2.worker.postMessage(_objectSpread({
          work: true,
          function_name: function_name,
          data: data
        }, options));
      });
      return promise;
    }
  }, {
    key: "terminate",
    value: function terminate() {
      this.worker.terminate();
      this.wasm_wrapper.exports.RDTY_WASM_WRAPPER_free(this.stack_addr);

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../renderity/wasm-wrapper/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../wasm-wrapper */ "../../renderity/wasm-wrapper/src/wasm-wrapper.js");
/* harmony import */ var _common_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/call */ "../../renderity/wasm-wrapper/src/threads/common/call.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var wasm = new _wasm_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]();
onmessage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          data = _ref.data;
          if (!data.work) {
            _context.next = 5;
            break;
          }
          Object(_common_call__WEBPACK_IMPORTED_MODULE_2__["default"])(wasm, data);
          _context.next = 7;
          break;
        case 5:
          _context.next = 7;
          return wasm.init(data);
        case 7:
          postMessage(true);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function onmessage(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/wasm-wrapper.js":
/*!********************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/wasm-wrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Using TypedArray.subarray() is preferred
 * when accessing to data
 * to avoid extra memory allocation.
 *
 * Strange std::string behavior:
 * if std::string data length <=11, std::string object address is the same with its data;
 * if >11, std::string object name stores address of beginning of the data.
 * So in second case one can use WasmWrapper::CString method to get string bytes.
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

var DEBUG_INFO = [];
var DEBUG_INFO_PUSH = function DEBUG_INFO_PUSH(content) {
  return DEBUG_INFO.push(content);
};
var DEBUG_LABEL_LOG = function DEBUG_LABEL_LOG() {
  DEBUG_INFO.forEach(function (label) {
    return console.log("%c".concat(label), 'background-color: #00858A; padding: 2px;');
  });
  DEBUG_INFO.length = 0;
};
var MISSED_IMPORT_FUNCTION_LOG = function MISSED_IMPORT_FUNCTION_LOG(content) {
  return console.log("%c".concat(content), 'background-color: red; padding: 2px;');
};
var WasmWrapper = /*#__PURE__*/function () {
  function WasmWrapper() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, WasmWrapper);
    var wasm_wrapper = this;
    this.options = Object.assign({
      // 1024 b * 1024 b == 1048576 b == 1 mb
      thread_stack_size: 0x0100000
    }, options);

    // TODO: reorder.
    // TODO: order type related objects the same.
    this.ADDR_SIZE = 0;
    this.SIZE_SIZE = 0;
    this.UINT32_SIZE = 0;
    this.FLOAT_SIZE = 0;
    this.DOUBLE_SIZE = 0;
    this.INT_SIZE = 0;
    this.memory_views = {
      UI8: null,
      I8: null,
      UI16: null,
      I16: null,
      UI32: null,
      I32: null,
      // TODO: add 64 bit types.
      F32: null,
      F64: null
    };
    this.interp = [function (val, size) {
      return wasm_wrapper.Int(val, size);
    }, function (val, size) {
      return wasm_wrapper.Size(val, size);
    }, function (val, size) {
      return wasm_wrapper.Float(val, size);
    }, function (val, size) {
      return wasm_wrapper.Double(val, size);
    },
    // const char*
    function (val, size) {
      return wasm_wrapper.Addr(val, size);
    },
    // void*
    function (val, size) {
      return wasm_wrapper.Addr(val, size);
    }];
    this.__heap_pointer_init = 0;
    var custom_functions = {
      console_log: function console_log(size, types_addr, values_addr) {
        var _console;
        var arg_types = _this.Size(types_addr, size);
        var args = new Array(size);

        // const any_type_size = this.Size(this.exports.RDTY_WASM_WRAPPER_ANYVALUE_SIZE)[0];
        var any_type_size = _this.Size(_this.exports.__getAnyvalueSize__())[0];
        for (var i = 0; i < size; ++i) {
          // const char*
          if (arg_types[i] === 4) {
            args[i] = _this.CString2(_this.Addr(values_addr + any_type_size * i)[0]);
          }
          // std::string
          else if (arg_types[i] === 6) {
            args[i] = WasmWrapper.convertUint8ArrayToDomString(_this.StdString(values_addr + any_type_size * i));
          } else {
            args[i] = _this.interp[arg_types[i]](values_addr + any_type_size * i)[0];
          }
        }
        (_console = console).log.apply(_console, ['%cWASM:', 'color: #bada55'].concat(args));
      },
      console_log2: function console_log2() {
        var _console2;
        for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
          value[_key] = arguments[_key];
        }
        (_console2 = console).log.apply(_console2, ['%cWASM:', 'color: #bada55'].concat(value));
      },
      date_now: function date_now() {
        return Date.now();
      },
      js_loop: function js_loop(function_addr) {
        var _function = _this.Function(function_addr);

        // setInterval(_function, 1000, ...args);
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        setInterval.apply(void 0, [_function, 0].concat(args));
      },
      rdty_sleep: function rdty_sleep(duration) {
        // Global state for running the program.

        var DATA_ADDR = 16;
        if (!_this.sleeping) {
          // We are called in order to start a sleep/unwind.
          // console.log('sleep...');
          // Fill in the data structure. The first value has the stack location,
          // which for simplicity we can start right after the data structure itself.
          _this.memory_views.I32[DATA_ADDR >> 2] = DATA_ADDR + 8;
          // The end of the stack will not be reached here anyhow.

          // TODO: use stack_size
          _this.memory_views.I32[DATA_ADDR + 4 >> 2] = 1024 * 1024;
          _this.exports.asyncify_start_unwind(DATA_ADDR);
          _this.sleeping = true;

          // Resume after the proper delay.
          setTimeout(function () {
            // console.log('timeout ended, starting to rewind the stack');
            _this.exports.asyncify_start_rewind(DATA_ADDR);
            // The code is now ready to rewind; to start the process, enter the
            // first function that should be on the call stack.
          }, duration);
        } else {
          // We are called as part of a resume/rewind. Stop sleeping.
          // console.log('...resume');
          _this.exports.asyncify_stop_rewind();
          _this.sleeping = false;
        }
      }
    };

    // If this is main worker.
    if (self.window && self.SharedArrayBuffer) {
      Object.assign(custom_functions, {
        runThread: function runThread(function_addr, thread_addr, thread_types_addr, thread_values_addr) {
          if (!_this.threads) {
            _this.threads = {};
          }
          var thread = new WasmWrapper.Thread2(_this, [function_addr, _this.exports.RDTY_WASM_WRAPPER_getStdVectorData(thread_types_addr), _this.exports.RDTY_WASM_WRAPPER_getStdVectorData(thread_values_addr)]);
          _this.threads[thread_addr] = thread;
        },
        joinThread: function joinThread(thread_addr) {
          _this.async_count = _this.async_count || 0;
          ++_this.async_count;
          if (_this.async_count === 1) {
            _this.async_promise = new Promise(function (resolve) {
              _this.async_promise_setter = function (val) {
                if (val) {
                  resolve();
                }
              };
            });
          }
          var DATA_ADDR = 16;
          if (!_this.sleeping) {
            _this.memory_views.I32[DATA_ADDR >> 2] = DATA_ADDR + 8;
            _this.memory_views.I32[DATA_ADDR + 4 >> 2] = 1024 * 1024;
            _this.exports.asyncify_start_unwind(DATA_ADDR);
            _this.sleeping = true;
            _this.threads[thread_addr].promise.then(function () {
              _this.exports.asyncify_start_rewind(DATA_ADDR);
              _this.async_func.apply(_this, _toConsumableArray(_this.async_args));
              if (_this.async_count % 2 === 0) {
                _this.async_promise_setter(true);
              }
            });
          } else {
            _this.exports.asyncify_stop_rewind();
            _this.sleeping = false;
          }
        },
        terminateThread: function terminateThread(thread_addr) {
          _this.threads[thread_addr].terminate();
        }
      });
    }

    // "malloc" and "free" WASI-libc functions are not thread-safe
    // since they operate with the same heap. To be able to use these functions
    // in multiple threads we need to specify them as imports and remove the part of
    // WASI-libc where they are defined (dlmalloc.o):
    // ${ DIR_WASI }/bin/llvm-ar -d ${ DIR_WASI }/share/wasi-sysroot/lib/wasm32-wasi/libc.a dlmalloc.o
    {
      var LOCKED = 0;
      var UNLOCKED = 1;
      var malloc_lock = IDLE_FUNCTION;
      var malloc_unlock = IDLE_FUNCTION;
      if (!self.window) {
        malloc_lock = function malloc_lock() {
          var __atomic_malloc_index = _this.exports.__getAtomicMalloc__() / 4;
          // const __atomic_malloc_index = this.exports.__atomic_malloc / 4;

          while (true) {
            var old_state = Atomics.compareExchange(_this.memory_views.I32, __atomic_malloc_index, /* old state >>> */UNLOCKED, /* new state >>> */LOCKED);
            if (old_state === UNLOCKED) {
              return;
            }
            Atomics.wait(_this.memory_views.I32, __atomic_malloc_index, LOCKED);
          }

          // Atomics.wait(this.memory_views.I32, __atomic_malloc_index, LOCKED);
          // Atomics.store(this.memory_views.I32, __atomic_malloc_index, LOCKED);
        };

        malloc_unlock = function malloc_unlock() {
          var __atomic_malloc_index = _this.exports.__getAtomicMalloc__() / 4;
          // const __atomic_malloc_index = this.exports.__atomic_malloc / 4;

          Atomics.store(_this.memory_views.I32, __atomic_malloc_index, UNLOCKED);
          // Atomics.notify(this.memory_views.I32, __atomic_malloc_index);
          Atomics.notify(_this.memory_views.I32, __atomic_malloc_index, 1);
        };
      }
      Object.assign(custom_functions, {
        // TODO: port to C++ ?
        malloc: function malloc(size) {
          var _size = Math.max(16, Math.pow(2, Math.ceil(Math.log(size) / Math.log(2))));
          var position = Math.log2(_size);
          var addr = 0;
          malloc_lock();
          // this.__lock__(this.exports.__getAtomicMalloc__());
          // if (this.__id__) this.Size(this.exports.__malloc_test, 2)[0] = this.__id__;

          if (_this.__heap_segments[position]) {
            // LOG(this.__heap_segments, this.__heap_segments[position])
            addr = _this.__heap_segments[position];
            _this.__heap_segments[position] = 0;

            // this.Size(addr - 16)[0] = _size;
          } else {
            var __heap_pointer = _this.Size(_this.exports.__getHeapPointer__());
            // const __heap_pointer = this.Size(this.exports.__heap_pointer);

            _this.Size(__heap_pointer[0])[0] = _size;
            __heap_pointer[0] += 16;
            addr = __heap_pointer[0];
            __heap_pointer[0] += _size;
          }

          // if (this.__id__) this.Size(this.exports.__malloc_test, 2)[1] = this.__id__;
          // if (this.__id__ && this.Size(this.exports.__malloc_test, 2)[0] !== this.Size(this.exports.__malloc_test, 2)[1]) LOG(...this.Size(this.exports.__malloc_test, 2))
          malloc_unlock();
          // this.__unlock__(this.exports.__getAtomicMalloc__());

          return addr;
        },
        free: function free(addr) {
          var size = _this.Size(addr - 16)[0];
          malloc_lock();
          // this.__lock__(this.exports.__getAtomicMalloc__());
          // if (this.__id__) this.Size(this.exports.__malloc_test, 2)[0] = this.__id__;

          var __heap_pointer = _this.Size(_this.exports.__getHeapPointer__());
          // const __heap_pointer = this.Size(this.exports.__heap_pointer);

          if (__heap_pointer[0] === addr + size) {
            __heap_pointer[0] = addr - 16;
          } else {
            _this.__heap_segments[Math.log2(size)] = addr;
          }

          // if (this.__id__) this.Size(this.exports.__malloc_test, 2)[1] = this.__id__;
          // if (this.__id__ && this.Size(this.exports.__malloc_test, 2)[0] !== this.Size(this.exports.__malloc_test, 2)[1]) LOG(...this.Size(this.exports.__malloc_test, 2))
          malloc_unlock();
          // this.__unlock__(this.exports.__getAtomicMalloc__());
        }

        // realloc: () => IDLE_FUNCTION,
        // calloc: () => IDLE_FUNCTION,

        // __libc_malloc: () => IDLE_FUNCTION,
        // __libc_realloc: () => IDLE_FUNCTION,
        // __libc_calloc: () => IDLE_FUNCTION,
        // __libc_free: () => IDLE_FUNCTION,

        // posix_memalign: () => IDLE_FUNCTION,
      });
    }

    this.custom_functions = custom_functions;
    var DataBase = /*#__PURE__*/function () {
      function DataBase(size, type, type_size) {
        _classCallCheck(this, DataBase);
        if (_typeof(size) === 'object') {
          this.size = size.length;
        } else {
          this.size = size;
        }
        this.addr = wasm_wrapper.exports.RDTY_WASM_WRAPPER_malloc(this.size * type_size);
        this.data = wasm_wrapper[type](this.addr, this.size);
        if (_typeof(size) === 'object') {
          this.set(size);
        }
      }
      _createClass(DataBase, [{
        key: "set",
        value: function set(_data) {
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          this.data.set(_data, offset);
        }
      }, {
        key: "free",
        value: function free() {
          wasm_wrapper.exports.RDTY_WASM_WRAPPER_free(this.addr);
        }
      }]);
      return DataBase;
    }();
    var DataFloat = /*#__PURE__*/function (_DataBase) {
      _inherits(DataFloat, _DataBase);
      var _super = _createSuper(DataFloat);
      function DataFloat(size) {
        _classCallCheck(this, DataFloat);
        return _super.call(this, size, 'Float', wasm_wrapper.FLOAT_SIZE);
      }
      return _createClass(DataFloat);
    }(DataBase);
    this.DataFloat = DataFloat;
    var DataUint32 = /*#__PURE__*/function (_DataBase2) {
      _inherits(DataUint32, _DataBase2);
      var _super2 = _createSuper(DataUint32);
      function DataUint32(size) {
        _classCallCheck(this, DataUint32);
        return _super2.call(this, size, 'Uint32', wasm_wrapper.UINT32_SIZE);
      }
      return _createClass(DataUint32);
    }(DataBase);
    this.DataUint32 = DataUint32;
    var ThreadPromiseBunch = /*#__PURE__*/function () {
      function ThreadPromiseBunch() {
        _classCallCheck(this, ThreadPromiseBunch);
        this.running_count = 0;
      }
      _createClass(ThreadPromiseBunch, [{
        key: "run",
        value: function () {
          var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback1) {
            var _this2 = this;
            var callback2,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  callback2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : IDLE_FUNCTION;
                  this.callback1 = callback1;
                  this.callback2 = callback2;
                  ++this.running_count;
                  if (!(this.running_count > 1)) {
                    _context.next = 6;
                    break;
                  }
                  return _context.abrupt("return");
                case 6:
                  _context.t0 = Promise;
                  _context.next = 9;
                  return this.callback1();
                case 9:
                  _context.t1 = _context.sent;
                  return _context.abrupt("return", _context.t0.all.call(_context.t0, _context.t1).then(function () {
                    // LOG('ThreadPromiseBunch end __heap_pointer', wasm_wrapper.Size(wasm_wrapper.exports.__getHeapPointer__())[0])

                    wasm_wrapper.resetHeapPointer();
                    if (_this2.running_count > 1) {
                      _this2.running_count = 0;
                      _this2.run(_this2.callback1, _this2.callback2);
                    } else {
                      _this2.callback2();
                      _this2.running_count = 0;
                    }
                  }));
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function run(_x) {
            return _run.apply(this, arguments);
          }
          return run;
        }()
      }]);
      return ThreadPromiseBunch;
    }();
    this.ThreadPromiseBunch = ThreadPromiseBunch;
  }
  _createClass(WasmWrapper, [{
    key: "Char",
    value: function Char(addr) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this.memory_views.UI8.subarray(addr, addr + length);
    }
  }, {
    key: "Uint8",
    value: function Uint8(addr) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this.memory_views.UI8.subarray(addr, addr + length);
    }
  }, {
    key: "Int",
    value: function Int(addr) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _addr = addr / this.INT_SIZE;
      return this.memory_views.I32.subarray(_addr, _addr + length);
    }
  }, {
    key: "Uint32",
    value: function Uint32(addr) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _addr = addr / this.UINT32_SIZE;
      return this.memory_views.UI32.subarray(_addr, _addr + length);
    }
  }, {
    key: "Size",
    value: function Size(addr) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _addr = addr / this.SIZE_SIZE;
      return this.memory_views.UI32.subarray(_addr, _addr + length);
    }
  }, {
    key: "Float",
    value: function Float(addr) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _addr = addr / this.FLOAT_SIZE;
      return this.memory_views.F32.subarray(_addr, _addr + length);
    }
  }, {
    key: "Double",
    value: function Double(addr) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      // Data must be aligned with 8 bytes.
      var _addr = addr / this.DOUBLE_SIZE;
      return this.memory_views.F64.subarray(_addr, _addr + length);
    }
  }, {
    key: "Addr",
    value: function Addr(addr) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var _addr = addr / this.ADDR_SIZE;
      return this.memory_views.UI32.subarray(_addr, _addr + length);
    }
  }, {
    key: "Addr2",
    value: function Addr2(name) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return this.Addr(this.exports[name].value, length);
    }
  }, {
    key: "Function",
    value: function Function(addr) {
      return this.exports.__indirect_function_table.get(addr);
    }
  }, {
    key: "CStringLen",
    value: function CStringLen(addr) {
      var _addr = addr;
      for (var vend = 0;; ++vend) {
        if (this.Char(_addr + vend)[0] === 0) {
          return vend;
        }
      }
    }
  }, {
    key: "CString",
    value: function CString(addr) {
      return this.memory_views.UI8.subarray(addr, addr + this.CStringLen(addr));
    }
  }, {
    key: "CString2",
    value: function CString2(addr) {
      return WasmWrapper.convertUint8ArrayToDomString(this.memory_views.UI8.subarray(addr, addr + this.CStringLen(addr)));
    }
  }, {
    key: "StdString",
    value: function StdString(addr) {
      var result = this.Char(this.exports.RDTY_WASM_WRAPPER_getStdStringData(addr), this.exports.RDTY_WASM_WRAPPER_getStdStringSize(addr));
      return result;
    }
  }, {
    key: "StdVector",
    value: function StdVector(addr, type) {
      var result = this[type](this.exports.RDTY_WASM_WRAPPER_getStdVectorData(addr), this.exports.RDTY_WASM_WRAPPER_getStdVectorSize(addr));
      return result;
    }
  }, {
    key: "StdVectorUint8",
    value: function StdVectorUint8(addr) {
      var result = this.Uint8(this.exports.RDTY_WASM_WRAPPER_getStdVectorData(addr), this.exports.RDTY_WASM_WRAPPER_getStdVectorSize(addr));
      return result;
    }
  }, {
    key: "StdVectorSize",
    value: function StdVectorSize(addr) {
      var result = this.Size(this.exports.RDTY_WASM_WRAPPER_getStdVectorData(addr), this.exports.RDTY_WASM_WRAPPER_getStdVectorSize(addr));
      return result;
    }
  }, {
    key: "StdVectorUint32",
    value: function StdVectorUint32(addr) {
      var result = this.Uint32(this.exports.RDTY_WASM_WRAPPER_getStdVectorData(addr), this.exports.RDTY_WASM_WRAPPER_getStdVectorSize(addr));
      return result;
    }
  }, {
    key: "StdVectorFloat",
    value: function StdVectorFloat(addr) {
      var result = this.Float(this.exports.RDTY_WASM_WRAPPER_getStdVectorData(addr), this.exports.RDTY_WASM_WRAPPER_getStdVectorSize(addr));
      return result;
    }
  }, {
    key: "StdVectorAddr",
    value: function StdVectorAddr(addr) {
      var result = this.Addr(this.exports.RDTY_WASM_WRAPPER_getStdVectorData(addr), this.exports.RDTY_WASM_WRAPPER_getStdVectorSize(addr));
      return result;
    }
  }, {
    key: "Class",
    value: function Class(name) {
      var wasm_wrapper = this;
      var _Class = /*#__PURE__*/_createClass(function _Class(input) {
        _classCallCheck(this, _Class);
        if (typeof input === 'number') {
          this.addr = input;
        } else if (typeof input === 'string') {
          var _wasm_wrapper$Addr = wasm_wrapper.Addr2(input);
          var _wasm_wrapper$Addr2 = _slicedToArray(_wasm_wrapper$Addr, 1);
          this.addr = _wasm_wrapper$Addr2[0];
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
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
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

    // TODO: Mutex.
  }, {
    key: "resizeStdVector",
    value: function resizeStdVector(addr, size) {
      this.exports.RDTY_WASM_WRAPPER_StdVector_resize(addr, size);
    }
  }, {
    key: "updateStdVectorData",
    value: function updateStdVectorData(addr, type, _data) {
      // this.exports.RDTY_WASM_WRAPPER_StdVector_resize(addr, _data.length);

      this.StdVector(addr, type).set(_data);
    }

    // demangle (name, name_addr)
    // {
    // 	this.memory_views.UI8.set(WasmWrapper.convertDomStringToUint8Array(name), name_addr);

    // 	const demangled_name =
    // 		WasmWrapper.convertUint8ArrayToDomString
    // 		(this.CString(this.exports.RDTY_WASM_WRAPPER_demangleCxxName(name_addr)))
    // 			.replace(/, /g, ',');

    // 	return demangled_name;
    // }
  }, {
    key: "initHeapPointer",
    value: function initHeapPointer() {
      var _this$Size = this.Size(this.exports.__getHeapPointer__());
      var _this$Size2 = _slicedToArray(_this$Size, 1);
      this.__heap_pointer_init = _this$Size2[0];
      // [ this.__heap_pointer_init ] = this.Size(this.exports.__heap_pointer);

      this.__heap_segments.fill(0);
    }
  }, {
    key: "resetHeapPointer",
    value: function resetHeapPointer() {
      this.Size(this.exports.__getHeapPointer__())[0] = this.__heap_pointer_init;
      // this.Size(this.exports.__heap_pointer)[0] = this.__heap_pointer_init;

      this.__heap_segments.fill(0);
    }
  }, {
    key: "demangleCxxNames",
    value: function demangleCxxNames(debug) {
      var _this3 = this;
      var demangled_name_max_length = 1024;
      var demangled_name_addr = this.exports.RDTY_WASM_WRAPPER_malloc(demangled_name_max_length);
      this.exports_demangled_reduced = {};
      this.exports_demangled = Object.keys(this.exports).reduce(function (exports_demangled, _name) {
        if (_name.startsWith('_Z')) {
          var name = "".concat(_name, "\0");

          // const demangled_name = this.demangle(name, demangled_name_addr);

          _this3.memory_views.UI8.set(WasmWrapper.convertDomStringToUint8Array(name), demangled_name_addr);
          var demangled_name = WasmWrapper.convertUint8ArrayToDomString(_this3.CString(_this3.exports.RDTY_WASM_WRAPPER_demangleCxxName(demangled_name_addr))).replace(/, /g, ',');
          if (exports_demangled[demangled_name]) {
            if (Array.isArray(exports_demangled[demangled_name])) {
              exports_demangled[demangled_name].push(_this3.exports[_name]);
              return exports_demangled;
            }
            var first_entry = exports_demangled[demangled_name];
            exports_demangled[demangled_name] = [first_entry, _this3.exports[_name]];
            return exports_demangled;
          }
          exports_demangled[demangled_name] = _this3.exports[_name];
          _this3.exports_demangled_reduced[demangled_name.replace(/\([^)]*\)/g, '')] = _this3.exports[_name];
        }
        return exports_demangled;
      }, {});
      this.exports.RDTY_WASM_WRAPPER_free(demangled_name_addr);
      if (debug) {
        DEBUG_LOG(this.exports_demangled);
        DEBUG_LOG(this.exports_demangled_reduced);
      }
    }
  }, {
    key: "doCommons",
    value: function doCommons(buffer, debug) {
      this.memory_views.UI8 = new Uint8Array(buffer);
      this.memory_views.I8 = new Int8Array(buffer);
      this.memory_views.UI16 = new Uint16Array(buffer);
      this.memory_views.I16 = new Int16Array(buffer);
      this.memory_views.UI32 = new Uint32Array(buffer);
      this.memory_views.I32 = new Int32Array(buffer);
      this.memory_views.F32 = new Float32Array(buffer);
      this.memory_views.F64 = new Float64Array(buffer);
      if (this.exports.RDTY_WASM_WRAPPER_sizeof) {
        this.ADDR_SIZE = this.exports.RDTY_WASM_WRAPPER_sizeof(0);
        this.SIZE_SIZE = this.exports.RDTY_WASM_WRAPPER_sizeof(1);
        this.UINT32_SIZE = this.exports.RDTY_WASM_WRAPPER_sizeof(2);
        this.FLOAT_SIZE = this.exports.RDTY_WASM_WRAPPER_sizeof(3);
        this.DOUBLE_SIZE = this.exports.RDTY_WASM_WRAPPER_sizeof(4);
        this.INT_SIZE = this.exports.RDTY_WASM_WRAPPER_sizeof(5);
        this.SIMD = this.Size(this.exports.__getSimd__())[0];
      }
    }
  }, {
    key: "async",
    value: function () {
      var _async = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_function) {
        var _len4,
          args,
          _key4,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              for (_len4 = _args2.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = _args2[_key4];
              }
              this.async_args = args;
              (this.async_func = _function).apply(void 0, args);
              this.exports.asyncify_stop_unwind();
              _context2.next = 6;
              return this.async_promise;
            case 6:
              this.async_count = 0;
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function async(_x2) {
        return _async.apply(this, arguments);
      }
      return async;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref) {
        var _this4 = this;
        var code, _ref$memory, memory, _ref$imports, imports, _ref$stack_pointer, stack_pointer, _ref$doCommons, doCommons, _ref$forceLocalMemory, forceLocalMemory, _ref$memory_params, memory_params, _ref$demangleCxxNames, demangleCxxNames, _ref$debug, debug, code_type, code_temp, wasm_module, wasm_module_imports, _wasm_module_imports$, _wasm_module_imports$2, imported_memory, shared, memory_desc, import_modules, wasm_module_instance, imports_env, buffer;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              code = _ref.code, _ref$memory = _ref.memory, memory = _ref$memory === void 0 ? null : _ref$memory, _ref$imports = _ref.imports, imports = _ref$imports === void 0 ? {
                env: {}
              } : _ref$imports, _ref$stack_pointer = _ref.stack_pointer, stack_pointer = _ref$stack_pointer === void 0 ? undefined : _ref$stack_pointer, _ref$doCommons = _ref.doCommons, doCommons = _ref$doCommons === void 0 ? true : _ref$doCommons, _ref$forceLocalMemory = _ref.forceLocalMemory, forceLocalMemory = _ref$forceLocalMemory === void 0 ? false : _ref$forceLocalMemory, _ref$memory_params = _ref.memory_params, memory_params = _ref$memory_params === void 0 ? {
                minimum: 65536,
                maximum: 65536,
                initial: 65536
              } : _ref$memory_params, _ref$demangleCxxNames = _ref.demangleCxxNames, demangleCxxNames = _ref$demangleCxxNames === void 0 ? false : _ref$demangleCxxNames, _ref$debug = _ref.debug, debug = _ref$debug === void 0 ? false : _ref$debug;
              // const wasm_wrapper = this;
              code_type = null; // Code for passing to other WASM instances (e.g. threads).
              this.code = code;
              if (typeof code === 'string') {
                if (code.slice(0, 8) === 'function') {
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
              if (!(code_type === __CODE_TYPE_BYTECODE__)) {
                _context3.next = 28;
                break;
              }
              _context3.next = 8;
              return WebAssembly.compile(code);
            case 8:
              wasm_module = _context3.sent;
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
                shared = Boolean(self.SharedArrayBuffer) && !forceLocalMemory;
                if (imported_memory) {
                  DEBUG_INFO_PUSH('WASM MEMORY: IMPORTED');

                  // chrome://flags#enable-experimental-webassembly-features must be enabled
                  // to access "type" property of "imported_memory". It contains memory
                  // type and size info produced by the linker.
                  // "--import-memory" linker flag specifies whether memory is imported to WebAssembly module.
                  // "--shared-memory" linker flag specifies whether memory is shared between WebAssembly instances.
                  // "--max-memory=N" linker flag specifies maximum size of memory for WebAssembly instance.
                  if (imported_memory.type) {
                    memory_desc = {
                      initial: imported_memory.type.maximum || imported_memory.type.minimum,
                      maximum: imported_memory.type.maximum || imported_memory.type.minimum,
                      shared: imported_memory.type.shared && shared
                    };
                    this.memory = new WebAssembly.Memory(memory_desc);
                    DEBUG_INFO_PUSH("WASM MEMORY: ".concat(memory_desc.shared ? 'SHARED' : 'NOT SHARED'));
                  }
                  // Parameters must match values produced by the linker.
                  else {
                    this.memory = new WebAssembly.Memory({
                      // 65536 pages == 4gb, maximum possible memory size for 32-bit WebAssembly instance.
                      initial: memory_params.initial,
                      maximum: memory_params.maximum,
                      // Must match "--max-memory=N" flag.
                      shared: shared // Must match "--shared-memory" flag.
                    });

                    DEBUG_INFO_PUSH("WASM MEMORY: ".concat(shared ? 'SHARED' : 'NOT SHARED'));
                  }
                } else {
                  DEBUG_INFO_PUSH('WASM MEMORY: EXPORTED');

                  // // In this case arbitrary parameters may be used.
                  // this.memory =
                  // 	new WebAssembly.Memory
                  // 	({
                  // 		// 65536 pages == 4gb, maximum possible memory size for 32-bit WebAssembly instance.
                  // 		initial: memory_params.initial,
                  // 		maximum: memory_params.maximum,
                  // 		shared,
                  // 	});
                }
              }

              // Object for passing to threads.
              this.imports = {
                env: {}
              };
              import_modules = {};
              Object.keys(imports).forEach(function (module) {
                Object.keys(imports[module]).forEach(function (_import) {
                  if (!_this4.imports[module]) {
                    _this4.imports[module] = {};
                  }
                  _this4.imports[module][_import] = 0;
                  imports[module][_import] = imports[module][_import] || IDLE_FUNCTION;
                });
              });
              Object.assign(import_modules, imports);
              Object.assign(import_modules.env, this.custom_functions);

              // Imported memory
              if (this.memory) {
                import_modules.env.memory = this.memory;
              }
              wasm_module_imports.forEach(function (_import) {
                if (!import_modules[_import.module]) {
                  import_modules[_import.module] = {};
                }
                if (!import_modules[_import.module][_import.name]) {
                  if (debug) {
                    DEBUG_LOG("Missed ".concat(_import.module, " import:"), _import.name);
                  }
                  import_modules[_import.module][_import.name] = IDLE_FUNCTION;
                  // import_modules[_import.module][_import.name] = () => { MISSED_IMPORT_FUNCTION_LOG(`Missed import function called: module "${ _import.module }", function "${ _import.name }"`); };
                }
              });
              _context3.next = 22;
              return WebAssembly.instantiate
              // await WebAssembly.instantiateStreaming
              (wasm_module, import_modules);
            case 22:
              wasm_module_instance = _context3.sent;
              // Exported memory
              if (!this.memory) {
                this.memory = wasm_module_instance.exports.memory;
              }
              if (debug) {
                DEBUG_LOG(wasm_module_instance);
              }

              // imported || exported
              // const { buffer } = this.memory || wasm_module_instance.exports.memory;

              // this.instance = wasm_module_instance;

              this.exports = wasm_module_instance.exports;
              _context3.next = 32;
              break;
            case 28:
              /**
               * Binary search for a max value without knowing the exact value, only that it
               * can be under or over It dose not test every number but instead looks for
               * 1,2,4,8,16,32,64,128,96,95 to figure out that you thought about #96 from
               * 0-infinity
               *
               * @example findFirstPositive(x => matchMedia(`(max-resolution: ${x}dpi)`).matches)
               * @author Jimmy Wärting
               * @see {@link https://stackoverflow.com/a/72124984/1008999}
               * @param {function} f       The function to run the test on (should return truthy or falsy values)
               * @param {bigint} [b=1]  Where to start looking from
               * @param {function} d privately used to calculate the next value to test
               * @returns {bigint} Intenger
               */
              // function findFirstPositive (f,b=1n,d=(e,g,c)=>g<e?-1:0<f(c=e+g>>1n)?c==e||0>=f(c-1n)?c:d(e,c-1n):d(c+1n,g)) {
              // 	for (;0>=f(b);b<<=1n);return d(b>>1n,b)-1n
              // }

              // const tries = []
              // const maxSize = findFirstPositive(x => {
              // 	tries.push(Number(x).toLocaleString())
              // 	try { new ArrayBuffer(Number(x)); return false } catch { return true }
              // })
              // console.log('found it in', tries.length, 'attempts')
              // console.log(Number(maxSize))
              // console.log(tries)

              // TODO: find maximum possible size of ArrayBuffer.
              // this.memory = memory || { buffer: new (self.SharedArrayBuffer || ArrayBuffer)(2145386496) };

              this.memory = null;
              if (memory) {
                this.memory = memory;
              }
              // else if (forceLocalMemory || !self.SharedArrayBuffer)
              // {
              // 	this.memory = { buffer: new self.ArrayBuffer(2145386496) };
              // }
              // else
              // {
              // 	this.memory = { buffer: new self.SharedArrayBuffer(2145386496) };
              // }
              else {
                this.memory = {
                  buffer: new self.ArrayBuffer(2145386496)
                };
              }
              imports_env = Object.assign(imports.env, {
                memory: this.memory
              }, this.custom_functions);
              this.exports = code(imports_env);
            case 32:
              if (stack_pointer !== undefined) {
                this.exports.setStackPointer(stack_pointer);
              }
              if (doCommons) {
                buffer = this.memory.buffer;
                this.doCommons(buffer);
              }
              if (this.exports.__getHeapSegments__) {
                this.__heap_segments = this.Size(this.exports.__getHeapSegments__(), 28);
                // this.__heap_segments = this.Size(this.exports.__heap_segments, 28);
              }

              if (this.exports._main) {
                this.exports._main();
              }
              if (code_type === __CODE_TYPE_BYTECODE__) {
                if (this.exports.__getAtomicThreadId__) {
                  this.__lock__(this.exports.__getAtomicThreadId__());
                  this.__id__ = this.Size(this.exports.__getThreadId__())[0]++;
                  DEBUG_INFO_PUSH("WASM THREAD: ".concat(this.__id__));
                  DEBUG_LABEL_LOG();
                  this.__unlock__(this.exports.__getAtomicThreadId__());
                }
              }
              if (demangleCxxNames) {
                this.demangleCxxNames(debug);
              }

              // This is to be able to call .then()
              _context3.next = 40;
              return new Promise(function (resolve) {
                return resolve(_this4);
              });
            case 40:
              return _context3.abrupt("return", _context3.sent);
            case 41:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function init(_x3) {
        return _init.apply(this, arguments);
      }
      return init;
    }() // Thread ()
    // {
    // 	return new WasmWrapper.Thread(this);
    // }
    // Thread2 ()
    // {
    // 	return new WasmWrapper.Thread2(this);
    // }
    // Thread3 ()
    // {
    // 	return new WasmWrapper.Thread3(this);
    // }
  }, {
    key: "initThreads",
    value: function () {
      var _initThreads = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(thread_count) {
        var _this5 = this;
        var threads;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              threads = new Array(thread_count).fill(null).map(function () {
                return new WasmWrapper.Thread3(_this5);
              });
              _context4.next = 3;
              return Promise.all(threads.map(function (thread) {
                return thread.init();
              }));
            case 3:
              return _context4.abrupt("return", threads);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function initThreads(_x4) {
        return _initThreads.apply(this, arguments);
      }
      return initThreads;
    }()
  }], [{
    key: "convertUint8ArrayToDomString",
    value:
    // static convertUint8ArrayToDomString (uint8_array)
    // {
    // 	return WasmWrapper.text_decoder.decode(uint8_array);
    // }

    // Version for shared buffer.
    // Decoding views of shared buffer is not allowed.
    function convertUint8ArrayToDomString(uint8_array) {
      return WasmWrapper.text_decoder.decode(uint8_array.slice());
    }
  }, {
    key: "convertDomStringToUint8Array",
    value: function convertDomStringToUint8Array(text) {
      return WasmWrapper.text_encoder.encode(text);
    }
  }, {
    key: "testSimd",
    value: function () {
      var _testSimd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              result = false;
              _context5.prev = 1;
              _context5.next = 4;
              return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ./test-simd/build/clang-wasm32/output/wasm/test-simd.wasm */ "../../renderity/wasm-wrapper/src/test-simd/build/clang-wasm32/output/wasm/test-simd.wasm", 7));
            case 4:
              result = true;
              _context5.next = 9;
              break;
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](1);
            case 9:
              DEBUG_INFO_PUSH("WASM SIMD: ".concat(result ? 'ON' : 'OFF'));
              return _context5.abrupt("return", result);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 7]]);
      }));
      function testSimd() {
        return _testSimd.apply(this, arguments);
      }
      return testSimd;
    }()
  }]);
  return WasmWrapper;
}();
_defineProperty(WasmWrapper, "text_decoder", new TextDecoder('utf-8'));
_defineProperty(WasmWrapper, "text_encoder", new TextEncoder());
if (!self.window && self.SharedArrayBuffer && self.Atomics) {
  var LOCKED = 0;
  var UNLOCKED = 1;
  WasmWrapper.prototype.__lock__ = function (addr) {
    // int32 size == 4
    var _index = addr / 4;
    while (true) {
      var old_state = Atomics.compareExchange(this.memory_views.I32, _index, UNLOCKED,
      // old state
      LOCKED // new state
      );

      if (old_state === UNLOCKED) {
        return;
      }
      Atomics.wait(this.memory_views.I32, _index, LOCKED);
    }
  };
  WasmWrapper.prototype.__unlock__ = function (addr) {
    var _index = addr / 4;
    Atomics.store(this.memory_views.I32, _index, UNLOCKED);
    Atomics.notify(this.memory_views.I32, _index, 1);
  };
} else {
  WasmWrapper.prototype.__lock__ = WasmWrapper.prototype.__unlock__ = IDLE_FUNCTION;
}
/* harmony default export */ __webpack_exports__["default"] = (WasmWrapper);

/***/ })

}]);
//# sourceMappingURL=0.js.map