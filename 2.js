(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../renderity/wasm-wrapper/src/test-simd/build/clang-wasm32/output/wasm/test-simd.wasm":
/*!************************************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/test-simd/build/clang-wasm32/output/wasm/test-simd.wasm ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../../../../../../../post-processing/3d-render/node_modules/arraybuffer-loader/lib/to-array-buffer.js */ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js")("AGFzbQEAAAABCgJgAn9/AXtgAAADBQQAAQEABAUBcAEBAQUEAQECAgYIAX8BQYCIBAsHFQIGbWVtb3J5AgAIdGVzdFNpbWQAAwowBBEAIAH9AAAAIAD9AAAA/eQBCwIACw4AEIGAgIAAEIGAgIAACwoAIAAgARAAEAILAJQBBG5hbWUBeQQAJHRlc3RTaW1kKGZsb2F0IGNvbnN0KiwgZmxvYXQgY29uc3QqKQEFZHVtbXkCEV9fd2FzbV9jYWxsX2R0b3JzAzZ0ZXN0U2ltZChmbG9hdCBjb25zdCosIGZsb2F0IGNvbnN0KikgKC5jb21tYW5kX2V4cG9ydCkHEgEAD19fc3RhY2tfcG9pbnRlcgB2CXByb2R1Y2VycwEMcHJvY2Vzc2VkLWJ5AQVjbGFuZ1YxNC4wLjMgKGh0dHBzOi8vZ2l0aHViLmNvbS9sbHZtL2xsdm0tcHJvamVjdCAxZjkxNDAwNjRkZmJmYjBiYmRhOGU1MTMwNmVhNTEwODBiMmY3YWFjKQAwD3RhcmdldF9mZWF0dXJlcwMrB2F0b21pY3MrC2J1bGstbWVtb3J5KwdzaW1kMTI4")

/***/ }),

/***/ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/arraybuffer-loader/lib/to-array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

module.exports = function (base64Data) {
  var isBrowser = typeof window !== 'undefined' && typeof window.atob === 'function';
  var binary = isBrowser ? window.atob(base64Data) : Buffer.from(base64Data, 'base64').toString('binary');
  var bytes = new Uint8Array(binary.length);
  for (var i = 0; i < binary.length; ++i) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

}]);
//# sourceMappingURL=2.js.map