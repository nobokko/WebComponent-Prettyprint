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
    }
    connectedCallback() {
        this.rewrite();
    }
    static get observedAttributes() {
        return [
            'display-line',
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'display-line':
                {
                    let oV = (oldValue !== null && oldValue !== void 0 ? oldValue : 'true').toLowerCase() != 'false';
                    let nV = (newValue !== null && newValue !== void 0 ? newValue : 'true').toLowerCase() != 'false';
                    if (oV != nV) {
                        this.rewrite();
                    }
                }
                break;
        }
    }
    rewrite() {
        var _a;
        const shadowRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = _NobokkoPrettyprintTemplate__WEBPACK_IMPORTED_MODULE_0__["default"];
        console.log('' + this.filename);
        console.log('' + this.source);
        console.log('' + this.displayLine);
        // for (let shadowRootStyleSheet of shadowRoot.styleSheets) {
        //     for (let shadowRootStyleSheetCssRules of shadowRootStyleSheet.cssRules) {
        //         if (shadowRootStyleSheetCssRules instanceof CSSStyleRule) {
        //             let rule = <CSSStyleRule>shadowRootStyleSheetCssRules;
        //             if ('nobokko-prittyprint-line::before' == rule.selectorText) {
        //                 rule.cssText = this.displayLine ? '"" counter(line) "xxx"' : '';
        //             }
        //         }
        //     }
        // }
        let srcEle = document.createElement('div');
        srcEle.innerHTML = this.source
            .replace(/^[ \t]*\n/, '')
            .replace(/\n[ \t]*$/, '')
            .replace(/&lt;/g, '<')
            .split("\n")
            .flatMap((line) => {
            let o = document.createElement('div');
            o.innerText = line;
            return o.innerHTML;
        })
            .flatMap((line) => { return line.replace(/^$/, '&nbsp;'); })
            .flatMap((line) => { return line.replace(/ /g, '&nbsp;'); })
            .flatMap((line, index) => {
            return `<nobokko-prittyprint-line data-line="${index + 1}"${this.displayLine ? ` data-display-prefix="${index + 1}"` : ''}>` + line + '</nobokko-prittyprint-line>';
        })
            .join("\n");
        shadowRoot.querySelectorAll('#source').forEach((ele) => {
            ele.appendChild(srcEle);
        });
    }
    get displayLine() {
        var _a;
        return ((_a = this.getAttribute('display-line')) !== null && _a !== void 0 ? _a : 'true').toLowerCase() != 'false';
    }
    set displayLine(newValue) {
        var _a;
        let oldValue = ((_a = this.getAttribute('display-line')) !== null && _a !== void 0 ? _a : 'true').toLowerCase() != 'false';
        if (oldValue != newValue) {
            this.setAttribute('display-line', newValue ? 'true' : 'false');
        }
    }
    get source() {
        var _a, _b, _c, _d;
        let ele = (_b = ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('slot[name="source"]')[0])) !== null && _b !== void 0 ? _b : document.createElement('slot');
        return (_d = (_c = (ele === null || ele === void 0 ? void 0 : ele.assignedElements()[0])) === null || _c === void 0 ? void 0 : _c.innerText) !== null && _d !== void 0 ? _d : '';
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
#source {
    counter-reset: line;
}
nobokko-prittyprint-line {
    display: block;
    position: relative;
    padding: 0 0 0 5em;
    font-family: Consolas, 'Courier New', Courier, Monaco, monospace;
}
nobokko-prittyprint-line:before {
    font-size: 1em;
    counter-increment: line;
    content: "" attr(data-display-prefix) "";
    margin: 0 1em 0 0;
    padding: 0 1em 0 0;
    width: 3em;
    display:inline-block;
    position: absolute;
    height: 100%;
    left: 0;
    text-align: right;
}
nobokko-prittyprint-line:nth-child(odd) {
    background-color: #222222;
}
nobokko-prittyprint-line:nth-child(even) {
    background-color: #111111;
}
nobokko-prittyprint-line:nth-child(odd):before {
    background-color: #444444;
}
nobokko-prittyprint-line:nth-child(even):before {
    background-color: #333333;
}
</style>
<root>
<h1><slot name="filename">filename</slot></h1>
<div id="source">
<slot name="source" style="display:none;"></slot>
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