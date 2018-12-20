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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App(params) {\n    _classCallCheck(this, App);\n\n    this.el = '';\n    this.view = {\n      state: '',\n      actions: {},\n      vNode: {\n        nodeName: '',\n        attributes: {},\n        children: []\n      }\n    };\n    this.state = '';\n    this.actions = {};\n    this.oldNode = {\n      nodeName: '',\n      attributes: {},\n      children: []\n    };\n    this.newNode = {\n      nodeName: '',\n      attributes: {},\n      children: []\n    };\n    this.skipRender = false;\n\n    try {\n      this.el = document.querySelector(params.el);\n    } catch (e) {\n      this.el = params.el;\n    }\n\n    this.view = params.view;\n    this.state = params.state;\n    this.actions = this.dispatchAction(params.actions);\n    this.resolveNode();\n  }\n  /*\n   * dispatch state to action and create new virtual DOM\n   */\n\n\n  _createClass(App, [{\n    key: \"dispatchAction\",\n    value: function dispatchAction(actions) {\n      var _this = this;\n\n      var dispatched = {};\n\n      var _loop = function _loop(key) {\n        var action = actions[key];\n\n        dispatched[key] = function (state) {\n          for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n            data[_key - 1] = arguments[_key];\n          }\n\n          var ret = action.apply(void 0, [state].concat(data));\n\n          _this.resolveNode();\n\n          return ret;\n        };\n      };\n\n      for (var key in actions) {\n        _loop(key);\n      }\n\n      return dispatched;\n    }\n    /*\n     * recreate virtual DOM\n     */\n\n  }, {\n    key: \"resolveNode\",\n    value: function resolveNode() {\n      this.newNode = this.view(this.state, this.actions);\n      this.scheduleRender();\n    }\n  }, {\n    key: \"scheduleRender\",\n    value: function scheduleRender() {\n      if (!this.skipRender) {\n        this.skipRender = true;\n        setTimeout(this.render.bind(this));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.oldNode) {\n        Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"updateElement\"])(this.el, this.oldNode, this.newNode);\n      } else {\n        this.el.appendChild(Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(this.newNode));\n      }\n\n      this.oldNode = this.newNode;\n      this.skipRender = false;\n    }\n  }]);\n\n  return App;\n}();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n // import { ActionTree } from './action';\n\nvar state = {\n  tasks: ['virtual dom', '完全に理解する'],\n  form: {\n    input: '',\n    hasError: false\n  }\n};\nvar actions = {\n  validate: function validate(state, input) {\n    if (!input || input.length < 3 || input.length > 20) {\n      state.form.hasError = true;\n    } else {\n      state.form.hasError = false;\n    }\n\n    return !state.form.hasError;\n  },\n  createTask: function createTask(state, title) {\n    state.tasks.push(title);\n    state.form.input = '';\n  },\n  removeTask: function removeTask(state, index) {\n    state.tasks.splice(index, 1);\n  }\n};\n\nvar view = function view(state, actions) {\n  return Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {\n    style: 'padding: 20px;'\n  }, [Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('h1', {\n    class: 'title'\n  }, ['仮想DOM完全に理解したTODOリスト']), Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {\n    class: 'field'\n  }, [Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('label', {\n    class: 'label'\n  }, ['Task Title']), Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('input', {\n    type: 'text',\n    class: 'input',\n    style: 'width: 200px;',\n    value: state.form.input,\n    oninput: function oninput(ev) {\n      var target = ev.target;\n      state.form.input = target.value;\n      actions.validate(state, state.form.input);\n    }\n  }, []), Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('button', {\n    type: 'button',\n    class: 'button is-primary',\n    style: 'margin-left: 10px;',\n    onclick: function onclick() {\n      if (actions.validate(state, state.form.input)) {\n        actions.createTask(state, state.form.input);\n      }\n    }\n  }, ['create']), Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('p', {\n    class: 'notification',\n    style: 'display: ${state.form.hasError ? \"display\" : \"none\"}'\n  }, ['3〜20文字で入力してください'])]), Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('ul', {\n    class: 'panel'\n  }, _toConsumableArray(state.tasks.map(function (task, i) {\n    return Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n      class: 'panel-block'\n    }, [Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('button', {\n      type: 'button',\n      class: 'delete',\n      style: 'margin-right: 10px;',\n      onclick: function onclick() {\n        return actions.removeTask(state, i);\n      }\n    }, ['remove']), task]);\n  })))]);\n};\n\nnew _app__WEBPACK_IMPORTED_MODULE_1__[\"App\"]({\n  el: '#app',\n  state: state,\n  view: view,\n  actions: actions\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: h, createElement, updateElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateElement\", function() { return updateElement; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/*\n * create virtual DOM\n */\nfunction h(nodeName, attributes, children) {\n  return {\n    nodeName: nodeName,\n    attributes: attributes,\n    children: _toConsumableArray(children)\n  };\n} // create real DOM\n\nfunction createElement(vNode) {\n  var el = document.createElement(vNode.nodeName);\n  setAttributes(el, vNode.attributes);\n  if (Array.isArray(vNode.children)) vNode.children.forEach(function (child) {\n    return isElement(el) && el.appendChild(createElement(child));\n  });\n  return el;\n} // set attributes to target\n\nfunction setAttributes(target, attrs) {\n  for (var attr in attrs) {\n    if (isEventAttr(attr)) {\n      var eventName = attr.slice(2);\n      target.addEventListener(eventName, attrs[attr]);\n    } else {\n      target.setAttribute(attr, attrs[attr]);\n    }\n  }\n}\n\nfunction isEventAttr(attr) {\n  return /^on/.test(attr);\n}\n\nvar changedType = {\n  isNone: 1,\n  isText: 2,\n  isNode: 3,\n  isValue: 4,\n  isAttr: 5 // check diff between 2 virtual DOMs\n\n};\n\nfunction hasChanged(a, b) {\n  if (a !== b) return changedType.isText;\n  if (a.nodeName !== b.nodeName) return changedType.isNode;\n  if (a.attributes.value !== b.attributes.value) return changedType.isValue;\n  if (JSON.stringify(a.attributes) !== JSON.stringify(b.attributes)) return changedType.isAttr;\n  return changedType.isNone;\n} // update real DOM\n\n\nfunction updateElement(parent, oldNode, newNode) {\n  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n  if (!oldNode || !isElement(oldNode)) {\n    if (isElement(parent)) {\n      parent.appendChild(createElement(newNode));\n      return;\n    }\n  }\n\n  var target = parent.childNodes[index];\n\n  if (!newNode || !isElement(newNode)) {\n    parent.removeChild(target);\n    return;\n  }\n\n  var changedType = hasChanged(oldNode, newNode);\n\n  switch (changedType) {\n    case 2:\n      parent.replaceChild(createElement(newNode), target);\n      break;\n\n    case 3:\n      parent.replaceChild(createElement(newNode), target);\n      break;\n\n    case 4:\n      updateValue(target, newNode.attributes.value);\n      break;\n\n    case 5:\n      updateAttributes(target, oldNode.attributes, newNode.attributes);\n      break;\n  } // execute recursively\n\n\n  for (var i = 0; i < newNode.children.length || i < oldNode.children.length; i++) {\n    updateElement(target, oldNode.children[i], newNode.children[i]);\n  }\n}\n\nfunction updateAttributes(target, oldAttrs, newAttrs) {\n  for (var attr in oldAttrs) {\n    if (!isEventAttr(attr)) {\n      target.removeAttribute(attr);\n    }\n  }\n\n  for (var _attr in newAttrs) {\n    if (!isEventAttr(_attr)) {\n      target.setAttribute(_attr, newAttrs[_attr]);\n    }\n  }\n}\n\nfunction updateValue(target, newValue) {\n  target.value = newValue;\n}\n\nfunction isElement(obj) {\n  try {\n    //Using W3 DOM2 (works for FF, Opera and Chrom)\n    return obj instanceof HTMLElement;\n  } catch (e) {\n    //Browsers not supporting W3 DOM2 don't have HTMLElement and\n    //an exception is thrown and we end up here. Testing some\n    //properties that all elements have. (works on IE7)\n    return _typeof(obj) === \"object\" && obj.nodeType === 1 && _typeof(obj.style) === \"object\" && _typeof(obj.ownerDocument) === \"object\";\n  }\n}\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });