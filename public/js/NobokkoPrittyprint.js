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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/NobokkoPrettyprintElement.ts":
/*!*********************************************!*\
  !*** ./src/ts/NobokkoPrettyprintElement.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NobokkoPrettyprintElement; });
/* harmony import */ var _NobokkoPrettyprintTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NobokkoPrettyprintTemplate */ "./src/ts/NobokkoPrettyprintTemplate.ts");

class NobokkoPrettyprintElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = _NobokkoPrettyprintTemplate__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    connectedCallback() {
        console.log('' + this.filename);
        console.log('' + this.source);
    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
    get source() {
        var _a, _b, _c, _d;
        let ele = (_b = ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('slot[name="source"]')[0])) !== null && _b !== void 0 ? _b : document.createElement('slot');
        return (_d = (_c = (ele === null || ele === void 0 ? void 0 : ele.assignedElements()[0])) === null || _c === void 0 ? void 0 : _c.innerHTML) !== null && _d !== void 0 ? _d : '';
    }
    get filename() {
        var _a, _b, _c, _d;
        let ele = (_b = ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('slot[name="filename"]')[0])) !== null && _b !== void 0 ? _b : document.createElement('slot');
        return (_d = (_c = (ele === null || ele === void 0 ? void 0 : ele.assignedElements()[0])) === null || _c === void 0 ? void 0 : _c.innerText) !== null && _d !== void 0 ? _d : '';
    }
}


/***/ }),

/***/ "./src/ts/NobokkoPrettyprintTemplate.ts":
/*!**********************************************!*\
  !*** ./src/ts/NobokkoPrettyprintTemplate.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NobokkoPrettyprintTemplate = `
<style>
root{
    display: block;
    color: #000000;
    background-color: #ff88ff;
    border-radius: 1em;
    box-shadow: 0 1em 1em 0 rgba(255, 255, 255, .2);
    padding:1em;
    margin: 1em;
}
h1 {
    margin:0;
}
div {
    color: #ffffff;
    background-color: #000000;
    border-radius: 1em;
    box-shadow: 0 1em 1em 0 rgba(0, 0, 64, .2);
    padding:1em;
    margin: 1em;
}
::slotted([slot="source"]) {
    white-space : pre;
}
</style>
<root>
<h1><slot name="filename">filename</slot></h1>
<div>
<slot name="source"></slot>
</div>
</root>
`;
/* harmony default export */ __webpack_exports__["default"] = (NobokkoPrettyprintTemplate);


/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NobokkoPrettyprintElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NobokkoPrettyprintElement */ "./src/ts/NobokkoPrettyprintElement.ts");

let message = 'Hello World';
console.log(message);
customElements.define('nobokko-prettyprint', _NobokkoPrettyprintElement__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

/******/ });
//# sourceMappingURL=NobokkoPrittyprint.js.map