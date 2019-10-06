/*!
 * nq-jslib-base 1.0.0 (https://github.com/nqdy666/nq-jslib-base)
 * API https://github.com/nqdy666/nq-jslib-base/blob/master/doc/api.md
 * Copyright 2019-2019 nqdy666. All Rights Reserved
 * Licensed under MIT (https://github.com/nqdy666/nq-jslib-base/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.nqJslibBase = {}));
}(this, function (exports) { 'use strict';

  // plus a + b
  function add(a, b) {
    return a + b;
  }

  exports.add = add;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
