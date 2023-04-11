(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../renderity/wasm-wrapper/src/test-simd/build/clang-wasm32/output/wasm/test-simd.wasm":
/*!************************************************************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/test-simd/build/clang-wasm32/output/wasm/test-simd.wasm ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../../../../../../../post-processing/3d-render/node_modules/arraybuffer-loader/lib/to-array-buffer.js */ "./node_modules/arraybuffer-loader/lib/to-array-buffer.js")("AGFzbQEAAAABCQJgAX8Be2AAAAMFBAABAQAEBQFwAQEBBQQBAQICBggBfwFBgIgECwcVAgZtZW1vcnkCAAh0ZXN0U2ltZAADCi4EEQEBeyAA/QAAACIBIAH95AELAgALDgAQgYCAgAAQgYCAgAALCAAgABAAEAILAGoEbmFtZQFPBAAPdGVzdFNpbWQodm9pZCopAQVkdW1teQIRX193YXNtX2NhbGxfZHRvcnMDIXRlc3RTaW1kKHZvaWQqKSAoLmNvbW1hbmRfZXhwb3J0KQcSAQAPX19zdGFja19wb2ludGVyAHYJcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkBBWNsYW5nVjE0LjAuMyAoaHR0cHM6Ly9naXRodWIuY29tL2xsdm0vbGx2bS1wcm9qZWN0IDFmOTE0MDA2NGRmYmZiMGJiZGE4ZTUxMzA2ZWE1MTA4MGIyZjdhYWMpABoPdGFyZ2V0X2ZlYXR1cmVzASsHc2ltZDEyOA==")

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