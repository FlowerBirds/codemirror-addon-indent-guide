(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror')) :
  typeof define === 'function' && define.amd ? define(['codemirror'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var CodeMirror__default = /*#__PURE__*/_interopDefaultLegacy(CodeMirror);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  CodeMirror__default['default'].defineOption('indentGuide', false, indentGuideAddon);
  var GUIDE_CLASS = 'indent-guide';
  var GUIDE_BLANK_CLASS = 'indent-blank-guide';
  var GUIDE_TAB_CLASS = 'tab-indent-guide';
  /**
   * Heavily inspired by https://github.com/lkcampbell/brackets-indent-guides
   */

  function indentGuideAddon(cm, val, prev) {
    if (prev == CodeMirror__default['default'].Init) {
      prev = false;
    }

    if (prev && !val) {
      cm.removeOverlay('indent-guide');
      return;
    }

    if (!prev && val) {
      var hideFirstIndentGuide = _typeof(val) === 'object' ? val.hideFirst : false;
      cm.addOverlay({
        token: function token(stream) {
          var _char = '';
          var colNum = 0;
          var isTabStart = false;
          _char = stream.next();
          colNum = stream.column(); // Check for "hide first guide" preference

          if (hideFirstIndentGuide && colNum === 0) {
            return null;
          }

          if (_char === '\t') {
            return GUIDE_TAB_CLASS;
          }

          if (_char !== ' ') {
            stream.skipToEnd();
            return null;
          }

          var spaceUnits = cm.getOption('indentUnit');
          isTabStart = !(colNum % spaceUnits);

          if (_char === ' ' && isTabStart) {
            return GUIDE_CLASS;
          }

          if (_char === ' ') {
            return GUIDE_BLANK_CLASS;
          }

          return null;
        },
        // flattenSpans: false,
        name: 'indent-guide'
      });
    }
  }

})));
